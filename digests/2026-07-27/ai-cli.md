# AI CLI 工具社区动态日报 2026-07-27

> 生成时间: 2026-07-27 02:01 UTC | 覆盖工具: 9 个

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

## 横向对比

**1. Ecosystem panorama**  
AI‑CLI tools are converging on richer session management, tighter cross‑platform stability, and deeper integration with model providers and IDEs.  Community attention is now split among reliability (session logs, resource leaks, WMI/GPU crashes), security (OAuth, sandbox escapes, auth hand‑offs), and performance (rendering, caching, cold‑start latency).  Most projects are adding UI parity between CLI and TUI, supporting multi‑workspace or multi‑session workflows, and improving onboarding/UX to lower the barrier for new developers.

**2. Activity comparison (Issues / PRs / Release – 2026‑07‑27)**  

| Tool | Issues (count) | PRs (count) | Release status (today) |
|------|----------------|------------|------------------------|
| OpenAI Codex | 10 | 10 | No new release (nightly none) |
| Gemini CLI | 10 | 9 | Nightly release v0.54.0‑nightly.20260727.g3818efbbf |
| GitHub Copilot CLI | 10 | 0 | No new release |
| Kimi Code CLI | 1 | 0 | Nightly release v0.21.0‑nightly.20260727.c003e1718 |
| OpenCode | 10 | 10 | No new release |
| Pi (badlogic/pi‑mono) | 10 | 5 | No new release |
| DeepSeek TUI | 10 | 10 | No new release |

**3. Common functional directions**  
- **Cross‑platform reliability** – Linux, Windows, macOS (and WSL) stability, session‑state persistence, and resource‑leak mitigation.  
- **Session & state management** – auto‑resume, session history browsing, work‑state visibility, and multi‑session UI panels.  
- **Performance & caching** – smarter log handling, Markdown/HTML streaming, prompt‑level caching, reduced I/O overhead.  
- **Security & auth** – OAuth/MCP flow hardening, sandbox escape prevention, explicit permission checks, credential handling.  
- **IDE/editor integration** – VS Code extensions, terminal‑resize handling, TUI ↔ CLI parity, auto‑completion and command‑preview features.  
- **Developer ergonomics** – guided onboarding, dry‑run preview, sub‑agent mapping, multi‑workspace support, and clearer error messages.

**4. Differentiated positioning**  

| Tool | Primary focus | Target user | Technical emphasis |
|------|---------------|------------|--------------------|
| **OpenAI Codex** | Model‑centric code generation agent | Developers using OpenAI models (GPT‑5.6) | Windows‑first stability, session‑log bloat, WMI/GPU crash handling, CLI‑TUI parity |
| **Gemini CLI** | General‑purpose agent framework with sub‑agent system | Power users needing modular agents (bash, OS‑level) | Memory safety, security (variable expansion), AST‑aware parsing, sub‑agent lifecycle |
| **GitHub Copilot CLI** | Microsoft‑centric terminal/TUI tool | DevOps / CI/CD pipelines, Windows‑centric teams | Terminal rendering, NFS/GPFS deadlocks, OAuth/MCP auth, cross‑platform terminal parity |
| **Kimi Code CLI** | Lightweight, image‑centric CLI | Users needing quick code‑assistant with visual support | Nightly releases, minimal footprint, image handling bug fixes |
| **OpenCode** | Subscription‑driven multi‑model platform | Enterprise / power users of DeepSeek/Zen models | UI/UX polish, multi‑workspace support, model‑provider sandboxing, extensive PR activity |
| **Pi (badlogic/pi‑mono)** | Low‑level TUI engine | Developers building custom TUI extensions | Performance‑first (caching, LRU, render snapshots), session storage hash design, extension lifecycle |
| **DeepSeek TUI** | DeepSeek‑specific UI experience | DeepSeek model users | Onboarding flow, session panels, multi‑language support, UX‑centric UI refinements |

**5. Community activity & maturity**  
- **Most active**: OpenAI Codex, OpenCode, DeepSeek TUI (10 issues + 10 PRs each) – indicate ongoing, rapid iteration.  
- **High‑velocity**: Gemini CLI (10 issues, 9 PRs, nightly release) – shows a fast‑moving nightly development cycle.  
- **Stable but limited**: GitHub Copilot CLI (10 issues, 0 PRs) – suggests a mature product with few immediate bugs.  
- **Early‑stage**: Kimi Code CLI (1 issue, 0 PRs) and Pi (10 issues, 5 PRs) – limited recent contributions, slower evolution.  

**6. Trend signals for developers**  
- **Cross‑platform robustness** is becoming a baseline expectation; tools that still suffer from OS‑specific crashes (Codex Windows, Pi WSL) are under pressure to fix them.  
- **Security‑first design** (OAuth, sandbox, auth hand‑offs) is a hot topic across all ecosystems, reflecting tighter compliance requirements.  
- **Performance‑centric refinements** (caching, rendering, cold‑start reduction) are recurring themes, especially for long‑running sessions and high‑frequency API usage.  
- **Developer experience** (onboarding, UI parity, dry‑run preview, multi‑session panels) is increasingly prioritized, indicating that usability now competes with raw capability.  

*These observations are derived from the publicly posted community daily reports for each tool on 2026‑07‑27.*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-27）

## 1. 热门 Skills 排行（按 PR 评论关注度排序）

**1. [skill-creator 评估修复 #1298](https://github.com/anthropics/skills/pull/1298)**
- **功能**：修复 `run_eval.py` 始终报告 0% recall 的严重缺陷，包括 Windows 流读取、触发检测和并行 worker 问题
- **社区热点**：此 PR 与 #556、#1169、#1323 紧密关联，是社区最关心的底层基础设施修复——评价循环的召回率归零导致描述优化完全失效
- **状态**：OPEN

**2. [document-typography skill #514](https://github.com/anthropics/skills/pull/514)**
- **功能**：为 AI 生成文档提供排版质量控制，防止孤儿行、寡妇段落和编号错位
- **社区热点**：直击 Claude 文档输出的常见痛点，用户很少主动要求但影响极大
- **状态**：OPEN

**3. [DOCX tracked change 修复 #541](https://github.com/anthropics/skills/pull/541)**
- **功能**：修复 DOCX skill 在存在书签的文档中添加跟踪变更时的 `w:id` 冲突，防止文档损坏
- **社区热点**：与 Lubrsy706 的 #538（PDF 大小写修复）、#539（YAML 描述校验）形成系列维护性 PR，反映文档类 Skill 成熟度提升需求强烈
- **状态**：OPEN

**4. [skill-quality-analyzer & security-analyzer #83](https://github.com/anthropics/skills/pull/83)**
- **功能**：在 marketplace 新增两种元 Skill——Skill 质量分析器（五维度量）和安全分析器
- **社区热点**：作为 meta-skill 提升整个 Skills 生态的可观测性，社区期待度高
- **状态**：OPEN

**5. [self-audit skill #1367](https://github.com/anthropics/skills/pull/1367)**
- **功能**：输出交付前的机械校验 + 四维推理质量门禁（v1.3.0），通用跨项目
- **社区热点**：最新提交的 PR（2026-06-28），覆盖面广，关注度持续上升
- **状态**：OPEN

**6. [testing-patterns skill #723](https://github.com/anthropics/skills/pull/723)**
- **功能**：覆盖单元测试、React 组件测试（Testing Library）等的完整测试栈 Skill
- **社区热点**：填补了测试类 Skill 的空白，与前端开发工作流高度相关
- **状态**：OPEN

**7. [pyxel retro game skill #525](https://github.com/anthropics/skills/pull/525)**
- **功能**：基于 pyxel-mcp 为 Python 复古/像素游戏开发提供的完整工作流 Skill
- **社区热点**：更新频繁（最近一次 2026-07-15），创意类 Skill 社区活跃度高
- **状态**：OPEN

**8. [SAP-RPT-1-OSS predictor skill #181](https://github.com/anthropics/skills/pull/181)**
- **功能**：SAP 开源表格基础模型 SAP-RPT-1-OSS 的预测分析 Skill
- **社区热点**：企业级/预测分析方向稀缺，填补了商业智能 Skill 空白
- **状态**：OPEN

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表性 Issue | 说明 |
|---------|-------------|------|
| **平台可访问性** | #16（Expose Skills as MCPs）、#29（Usage with Bedrock） | 社区希望 Skill 能力协议标准化，并通过 MCP 对外暴露 API；云/边缘部署（Bedrock）需求明确 |
| **协作与组织** | #228（org-wide skill sharing）、#189（duplicate skills） | 组织内共享 Skill 库、避免 install 重复是核心痛点 |
| **安全性与信任** | #492（namespace trust boundary）、#1175（SPO access control） | 社区 skills 冒用 anthropic/ 命名空间引发信任担忧；企业文档访问控制内建于 SKILL.md 的安全性问题 |
| **Windows 兼容性** | #1061、#556、#1169 | 多位开发者报告 skill-creator 脚本在 Windows 上不可用，影响评价循环和触发检测 |
| **Skill 维护性** | #202（skill-creator 最佳实践）、#62（skills disappearing） | 已有 Skill 需要现代化重构，用户丢失 Skill 文件后缺乏恢复机制 |
| **质量保障** | #1385（Reasoning Quality Gate Pipeline）、#1302（color-expert） | 推理质量门控和垂直领域 Expert Skill 是新兴方向 |

**趋势总结**：从单点 Skill 建设转向 **可观测性（元 Skill）+ 安全性（信任边界）+ 跨平台兼容** 的三层基础设施诉求。

---

## 3. 高潜力待合并 Skills

**🔥 [fix(skill-creator): trigger detection & eval recall #1323](https://github.com/anthropics/skills/pull/1323)**
- 作者 Polluelo977，与 #1298、#1099 紧密修复同一问题；评价触发检测修复是 description-optimization 循环可用性的前提，一旦合并将释放大量被阻塞的 Skill 迭代

**🔥 [fix(skill-creator): Windows subprocess + encoding #1050](https://github.com/anthropics/skills/pull/1050)**
- gstreet-ops 提交的 1 行修复，解决 `claude.cmd` 在 Windows 不被 subprocess 识别的问题；与 #1061 互补，合并后 skill-creator 跨平台可用性大幅增强

**🔥 [fix(pdf) case-sensitive references #538](https://github.com/anthropics/skills/pull/538)**
- Lubrsy706 的 4 处修复，简单但影响面广，PDF Skill 在大小写敏感文件系统上长期不可用

**📌 [Add color-expert skill #1302](https://github.com/anthropics/skills/pull/1302)**
- meodai 提交，覆盖 ISCC-NBS、Munsell、OKLCH 等颜色体系，专业度高的垂直 Skill，更新活跃

**📌 [Add ODT skill #486](https://github.com/anthropics/skills/pull/486)**
- GitHubNewbie0 提交，覆盖 ODT/ODS 格式创建、填充和解析；开源办公格式 Skill 长期缺失

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：让 Skill 评价与优化基础设施（run_eval、trigger 检测、Windows 兼容）先可用，再扩展垂直领域 Skill——即"修好地基，再盖高楼"，同时对安全信任边界和组织级共享提出明确的治理需求。**

---

*报告生成基于 anthropics/skills 仓库数据，所有 PR/Issue 链接均为 https://github.com/anthropics/skills/pull/{id} 和 https://github.com/anthropics/skills/issues/{id}。*

---

User Safety: safe

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 —— 2026-07-27

---

## 1. 今日速览

OpenAI Codex 社区在过去 24 小时内无新版本发布，但活跃的 Issue 与 PR 表明开发团队正聚焦于 **Windows 平台稳定性优化**、**性能问题修复** 以及 **跨平台兼容性提升**。社区对 Linux 桌面支持、GPU 崩溃问题以及 CLI 高频写入问题非常关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 社区热点 Issues

以下是社区中评论数及点赞数较高的 Issues，反映出当前用户最关注的问题领域：

### 🔥 #11023 [enhancement, app] Codex desktop app for Linux  
🔗 [openai/codex Issue #11023](https://github.com/openai/codex/issues/11023)  
👍 852 | 💬 187  
**为什么重要**：用户强烈呼吁推出 Linux 版本的 Codex 桌面应用，当前仅支持 macOS 与 Windows。该 Issue 长期热门，反映出开源社区对跨平台支持的迫切需求。

---

### ⚠️ #34260 [bug, windows-os, tool-calls, app, performance] Windows Desktop: unbounded taskkill.exe/conhost.exe cleanup storm exhausts WMI  
🔗 [openai/codex Issue #34260](https://github.com/openai/codex/issues/34260)  
👍 10 | 💬 32  
**为什么重要**：Codex 在 Windows 上可能触发大量 `taskkill.exe` 进程泄漏，耗尽 WMI 配额，导致系统性能急剧下降。此类资源泄露问题严重影响用户体验。

---

### 🐞 #17320 [bug, agent] Excessive SQLite WAL writes during streaming due to TRACE logs ignoring RUST_LOG  
🔗 [openai/codex Issue #17320](https://github.com/openai/codex/issues/17320)  
👍 39 | 💬 27  
**为什么重要**：日志级别未被正确控制，导致 SQLite WAL 文件持续写入，影响磁盘寿命与性能。开发者普遍反映此问题影响长时间运行场景。

---

### 🔐 #31573 [bug, auth, mcp, CLI] OAuth authentication fails at issuer validation  
🔗 [openai/codex Issue #31573](https://github.com/openai/codex/issues/31573)  
👍 55 | 💬 24  
**为什么重要**：OAuth 认证流程存在缺陷，阻碍 MCP 服务集成。该问题影响 CLI 用户的身份验证体验，需尽快修复。

---

### 💾 #24948 [bug, TUI] Codex session logs grow to 700MB-2GB from repeated compaction history and raw tool output  
🔗 [openai/codex Issue #24948](https://github.com/openai/codex/issues/24948)  
👍 1 | 💬 23  
**为什么重要**：TUI 模式下会话日志异常增长，占用大量磁盘空间。该问题影响长期使用的开发者，需优化日志管理策略。

---

### 🖥️ #34133 [bug, windows-os, app, browser] Page.captureScreenshot crashes GPU process after Code Integrity Event 3033 rejects bundled vk_swiftshader.dll  
🔗 [openai/codex Issue #34133](https://github.com/openai/codex/issues/34133)  
👍 0 | 💬 20  
**为什么重要**：Windows 平台内嵌浏览器截图功能导致 GPU 进程崩溃，影响网页自动化功能。该问题与系统安全机制冲突，需谨慎处理。

---

### 🧱 #30712 [bug, windows-os, sandbox, tool-calls, app] Codex desktop app on Windows injects split writable roots, causing `apply_patch` to fail before patching workspace files  
🔗 [openai/codex Issue #30712](https://github.com/openai/codex/issues/30712)  
👍 13 | 💬 14  
**为什么重要**：沙箱机制存在缺陷，导致文件写入失败，迫使代理绕过安全策略使用 PowerShell 写入文件。这可能带来安全隐患。

---

### 🌐 #32094 [bug, windows-os, app, browser] Codex app crashes when embedded browser opens WebCodecs/canvas-capable pages  
🔗 [openai/codex Issue #32094](https://github.com/openai/codex/issues/32094)  
👍 1 | 💬 14  
**为什么重要**：内嵌浏览器在处理 WebCodecs/canvas 页面时崩溃，影响网页交互功能。该问题已被跟踪，属于浏览器引擎兼容性问题。

---

### 📈 #35050 [bug, model-behavior, tool-calls, app] GPT-5.6 often serializes independent Code Mode calls; explicit batching reduced weighted usage by 27–45%  
🔗 [openai/codex Issue #35050](https://github.com/openai/codex/issues/35050)  
👍 15 | 💬 13  
**为什么重要**：模型行为存在优化空间，独立调用被串行执行，增加 API 调用成本。社区建议启用显式批处理以提升效率。

---

### 🐢 #32530 [bug, extension, performance] VS Code Codex panel intermittently stuck loading on Linux: local webview assets fail with net::ERR_FAILED  
🔗 [openai/codex Issue #32530](https://github.com/openai/codex/issues/32530)  
👍 12 | 💬 12  
**为什么重要**：VS Code 扩展在 Linux 上加载失败，影响 IDE 集成体验。该问题反映出跨平台 UI 渲染的不稳定性。

---

## 4. 重要 PR 进展

以下是近期合并或活跃的 PR，涵盖功能增强、性能优化与 bug 修复：

### ✅ #35530 [CLOSED] Track model and personality in world state  
🔗 [openai/codex PR #35530](https://github.com/openai/codex/pull/35530)  
**内容**：将模型与 personality 状态持久化到 world-state 中，支持回放时生成差异指令。

---

### ✅ #35525 [CLOSED] Skip inactive TUI threads without pending user interaction  
🔗 [openai/codex PR #35525](https://github.com/openai/codex/pull/35525)  
**内容**：优化 TUI 线程调度逻辑，避免无关请求干扰用户交互流程。

---

### ✅ #35524 [CLOSED] Preserve terminal turn errors in replayed history  
🔗 [openai/codex PR #35524](https://github.com/openai/codex/pull/35524)  
**内容**：修复回放历史记录时错误信息丢失的问题，提升调试体验。

---

### ✅ #35523 [CLOSED] Shut down the in-process outbound router explicitly  
🔗 [openai/codex PR #35523](https://github.com/openai/codex/pull/35523)  
**内容**：显式关闭进程内路由器，防止因通道未关闭导致的资源泄露。

---

### ✅ #30295 [CLOSED] Serialize MCP OAuth login and logout  
🔗 [openai/codex PR #30295](https://github.com/openai/codex/pull/30295)  
**内容**：确保 MCP OAuth 登录/登出操作的串行化，避免并发冲突。

---

### ✅ #30296 [CLOSED] Report MCP OAuth Auto store drift  
🔗 [openai/codex PR #30296](https://github.com/openai/codex/pull/30296)  
**内容**：监控并报告 MCP OAuth 自动存储漂移，提升认证可靠性。

---

### ✅ #30294 [CLOSED] Route MCP OAuth recovery through Codex  
🔗 [openai/codex PR #30294](https://github.com/openai/codex/pull/30294)  
**内容**：将 MCP OAuth 恢复流程统一通过 Codex 处理，增强一致性。

---

### ✅ #30089 [CLOSED] [rmcp-client] Test MCP OAuth concurrency and recovery  
🔗 [openai/codex PR #30089](https://github.com/openai/codex/pull/30089)  
**内容**：为 MCP OAuth 并发与恢复场景添加测试用例，提升稳定性。

---

### ✅ #29021 [CLOSED] [rmcp-client] Serialize shared MCP OAuth stores  
🔗 [openai/codex PR #29021](https://github.com/openai/codex/pull/29021)  
**内容**：序列化共享 MCP OAuth 存储，防止数据竞争。

---

### ✅ #30416 [CLOSED] Serialize authoritative MCP OAuth refresh transactions  
🔗 [openai/codex PR #30416](https://github.com/openai/codex/pull/30416)  
**内容**：确保 MCP OAuth 刷新事务的原子性与一致性。

---

## 5. 功能需求趋势

从社区反馈中可见以下主要功能方向备受关注：

- **跨平台支持**：Linux 桌面客户端需求强烈，成为长期热议话题。
- **性能优化**：包括日志写入控制、会话体积管理、资源泄露防范等。
- **浏览器集成增强**：内嵌浏览器在截图、WebCodecs 支持方面存在缺陷。
- **身份认证机制改进**：MCP OAuth 流程存在多个缺陷需修复。
- **IDE 集成稳定性**：VS Code 扩展在 Linux 上存在加载问题。
- **模型行为优化**：用户期望更智能的并行调用与上下文管理。

---

## 6. 开发者关注点

开发者在使用 Codex 过程中反复提及以下痛点：

- **磁盘空间耗尽**：长时间运行后会话日志与缓存过大。
- **系统崩溃风险**：Windows 平台存在 GPU 崩溃、WMI 耗尽等问题。
- **认证流程不稳定**：OAuth 验证失败影响服务集成。
- **沙箱机制缺陷**：导致文件写入失败或安全绕过。
- **跨平台兼容性差**：Linux 用户体验落后于 macOS/Windows。
- **调试信息不足**：错误回放丢失关键日志，影响问题排查。

---

📅 **下期预览**：我们将继续关注 Codex 在 Linux 支持、浏览器集成稳定性以及 MCP 认证机制改进方面的最新进展。

--- 

*数据来源：[github.com/openai/codex](https://github.com/openai/codex)*  
*生成日期：2026-07-27*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报 – 2026‑07‑27**  

---

### 1. 今日速览  
- 发布 **v0.54.0‑nightly.20260727.g3818efbbf**，为本周夜间版本，包含多项 bug 修复与小幅性能提升。  
- 社区活跃度保持高位，前 10 条 Issue 主要围绕 **子代理（sub‑agent）可靠性、通用代理挂起、内存/日志安全** 等核心功能展开。  

---

### 2. 版本发布  
**v0.54.0‑nightly.20260727.g3818efbbf**  
- 通过自动化脚本 bump 版本号并发布 nightly 版。  
- 详细变更请见 [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.54.0-nightly.20260726.g3818efbbf...v0.54.0-nightly.20260727.g3818efbbf)。  

> *注：此为夜间快照版，后续正式发布（stable）将在此基础上合并正式审查。*  

---

### 3. 社区热点 Issues（挑选 10 条）  

| # | 标题（简要） | 为什么重要 | 社区反应 |
|---|--------------|------------|----------|
| **#22323** | **Subagent recovery after MAX_TURNS reported as GOAL success** | 子代理在达到最大回合数前即提前返回 “GOAL”，导致后续分析被隐藏，影响真实结果。 | 12 条评论，2 个 👍，持续关注，需要 retesting。 |
| **#21409** | **Generalist agent hangs** | 当 `gemini-cli` 自动切换到通用子代理时会无限等待，严重阻塞工作流。 | 8 条评论，8 个 👍，已有用户提供 “不使用子代理” 的临时解决方案。 |
| **#19873** | **Leverage model's bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing** | 提议让模型更好利用原生 bash 工具链，提升代码探索效率且保持安全。 | 8 条评论，1 个 👍，被视为长期方向。 |
| **#24353** | **Robust component level evaluations** | 引入行为评测（behavioral evals）以系统化验证子代理与工具的表现。 | 7 条评论，0 个 👍，作为后续功能迭代的基石。 |
| **#22745** | **Assess the impact of AST‑aware file reads, search, and mapping** | AST 解析能显著降低误读次数、提升 token 精度，值得进一步探索。 | 7 条评论，1 个 👍，社区期待更精准的代码理解。 |
| **#21968** | **Gemini does not use skills and sub‑agents enough** | 反馈称模型在未强制指令时很少主动调用自定义技能或子代理。 | 6 条评论，0 个 👍，提示需要更自动化的技能调度。 |
| **#26522** | **Stop Auto Memory from retrying low‑signal sessions indefinitely** | Auto Memory 因低信号会重复尝试读取日志，导致资源浪费。 | 5 条评论，0 个 👍，迫切需要优化调度逻辑。 |
| **#26525** | **Add deterministic redaction and reduce Auto Memory logging** | 当前脱敏在模型上下文后才生效，存在泄露风险与日志噪声。 | 4 条评论，0 个 👍，安全与可观测性双重要求。 |
| **#25166** | **Shell command execution gets stuck with "Waiting input" after command completes** | 简单 shell 命令执行完后仍显示 “awaiting input”，导致交互卡死。 | 4 条评论，3 个 👍，影响日常使用体验。 |
| **#22267** | **[BUG] Browser Agent ignores settings.json overrides (e.g., maxTurns)** | Browser 代理不尊重全局或项目级 `settings.json` 中的配置，导致限制失效。 | 3 条评论，0 个 👍，需要修复配置读取逻辑。 |

> 以上 Issue 代表了 **子代理可靠性、通用代理挂起、安全/日志、AST 解析、技能调度** 等热点关注点。

---

### 4. 重要 PR 进展（挑选 10 条）  

| # | 标题（简要） | 功能/修复内容 | 状态 |
|---|--------------|--------------|------|
| **#28544** | chore/release: bump version to 0.54.0-nightly.20260727.g3818efbbf | 自动化版本 bump，配合 nightly 发布。 | OPEN |
| **#28523** | fix(core): enforce explicit tag length and validation in file keychain | 强制 128‑bit（16 B）标签长度，防止 malformed credential。 | OPEN |
| **#28403** | fix(core): block $VAR and ${VAR} variable expansion bypass (GHSA‑wpqr‑6v78‑jr5g) | 修复变量展开检查不完整，加强安全防御。 | OPEN |
| **#28386** | fix(vscode): track activation disposables | 修正 VS Code 伴随插件中注册的 Disposable 只保留最后一个的错误。 | OPEN |
| **#28438** | Trim tool names before registry lookup | 去除工具名称前后空格，防止因空格导致查找失败。 | OPEN |
| **#28543** | chore(deps): bump @google/genai from 1.30.0 to 2.12.0 | 更新核心依赖，获取最新功能与 bug‑fix。 | CLOSED |
| **#28542** | chore(deps-dev): bump lint‑staged from 16.1.6 to 17.1.0 | 升级 lint‑staged，提升代码质量检查。 | CLOSED |
| **#28541** | chore(deps): bump execa from 9.6.1 to 10.0.0 | 升级 execa，修复 breaking change 兼容性。 | CLOSED |
| **#28540** | chore(deps-dev): bump chrome-devtools-mcp from 0.19.0 to 1.6.0 | 更新 Chrome DevTools MCP，增强远程调试能力。 | CLOSED |
| **#28450** | chore(deps): bump the actions‑dependencies group across 1 directory with 3 updates | 同步 GitHub Actions 相关依赖，保持 CI 稳定。 | OPEN |

> 这些 PR 覆盖 **版本管理、安全加固、代码质量、CI 稳定性** 等关键维度。

---

### 5. 功能需求趋势  

- **子代理与通用代理可靠性**：大量 Issue（如 #22323、#21409、#22267）聚焦子代理在达到上限或配置后仍然异常，说明社区对 **子代理生命周期、错误恢复、配置遵守** 的高度关注。  
- **内存与日志安全**：#26522、#26525、#26523 等 Issue 凸显 **Auto Memory** 在低信号过滤、日志脱敏与日志记录方面的安全与性能痛点。  
- **AST 与代码理解**：#22745、#22746、#22598 表明社区希望 **AST  aware** 的文件读取、代码搜索与子代理轨迹可视化，以提升代码基探索效率。  
- **IDE 与编辑器集成**：#28386（VS Code activation）和 #22093（子代理权限）显示开发者期待更好 **IDE 插件** 与 **子代理权限控制**。  
- **性能与可观测性**：#21924（终端 resize 闪烁）与 #22465（交互卡顿）反映出 **UI/UX 与渲染性能** 仍是热点。  

总体来看，社区正在推动 **子代理稳定性、内存/日志安全、AST 代码分析、IDE 集成** 四大方向的改进。

---

### 6. 开发者关注点（痛点与高频需求）  

| 痛点 | 具体表现 | 可能的解决方向 |
|------|----------|----------------|
| **子代理挂起/错误返回** | #21409、#22323、#22267 等 Issue 显示子代理在特定条件下无限等待或提前返回错误状态。 | 改进子代理超时与异常处理逻辑；确保 `settings.json` 配置被正确读取。 |
| **Auto Memory 低信号重试** | #26522、#26523 反映 Auto Memory 因低信号不读取日志，导致内存泄漏与日志不一致。 | 为低信号会话加入 “跳过/归档” 机制，或在后台统一清理。 |
| **变量扩展安全绕过** | #28403 指出 `$VAR`、`${VAR}` 可绕过安全检查，潜在泄露风险。 | 完善变量扩展校验，加入更细粒度的上下文过滤。 |
| **Shell 命令卡死** | #25166 反馈执行完命令后仍显示 “awaiting input”。 | 在命令结束后明确发送空输入或关闭等待状态。 |
| **技能与子代理自动调度不足** | #21968、#22598 表达模型在未强制时很少主动使用自定义技能或子代理。 | 设计更智能的技能调度器，使模型在合适时机自动选择合适子代理。 |
| **IDE/编辑器兼容性** | #28386、#22093 显示 VS Code 插件与子代理权限配置有缺陷。 | 完善插件激活路径，确保子代理权限在 IDE 环境中可控。 |
| **性能与 UI 卡顿** | #21924、#22465 反映终端resize 与交互卡顿。 | 采用 RenderStatic 与批量更新策略，优化渲染流ipeline。 |

> 开发者的高频需求集中在 **子代理可靠性、内存/日志安全、AST 代码理解、IDE 集成以及 UI 性能** 四大维度，后续的功能迭代应优先考虑这些方向。

--- 

*报告结束，祝大家开发顺利！*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-27

---

## 1. 今日速览

过去 24 小时**无新版本发布**，亦无 PR 合并。社区活跃度集中在 **Issue 排查与反馈**，共 17 条 Issue 更新，其中 3 条为无效/垃圾工单已关闭。核心关注点聚焦于 **Linux 僵尸进程泄漏**、**NFS/GPFS 下 TUI 死锁**、**Windows 终端渲染异常** 及 **MCP/OAuth 认证流程缺陷** 四大类稳定性与兼容性问题，反映出跨平台运行时、会话恢复机制及远程 MCP 集成仍是当前技术债高发区。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（TOP 10）

| # | Issue | 关键词 | 重要性 | 社区反响 | 链接 |
|---|-------|--------|--------|----------|------|
| 1 | **#4163** copilot CLI 1.0.71 不回收子进程 —— 僵尸进程以 ~2/min 速度堆积 | `Linux` `进程管理` `稳定性` `P0` | **生产级阻断**：长时间运行会导致 PID 耗尽，影响 CI/CD 与服务端部署 | 3 👍 · 4 条评论 · 9 天持续跟进 | [#4163](https://github.com/github/copilot-cli/issues/4163) |
| 2 | **#4053** TUI 在 NFS/GPFS 上卡死于 "Loading: N skills"：Tokio 并发 spawn `which gh` 触发 SIGCHLD 竞态 | `Linux` `NFS/GPFS` `Tokio` `TUI` `并发` | **高优**：分布式存储环境下完全不可用，且无 MCP 配置也复现 | 3 条评论 · 20 天未解 | [#4053](https://github.com/github/copilot-cli/issues/4053) |
| 3 | **#4263** Windows Terminal 垂直分栏下响应内容消失/滚动异常 | `Windows` `TUI` `渲染` `终端兼容性` | **用户感知强**：直接阻碍 Windows 主力开发者日常交互 | 2 条评论 · 今日新开 | [#4263](https://github.com/github/copilot-cli/issues/4263) |
| 4 | **#4258** 交互模式 `-i` 启动提示在自定义/BYOK Provider 下被忽略（TTY 会话） | `认证` `BYOK` `交互模式` `回归` | **集成场景阻断**：企业自托管模型接入的核心路径失效 | 2 条评论 · 今日新开 | [#4258](https://github.com/github/copilot-cli/issues/4258) |
| 5 | **#4202** 内置 `view` 工具报 "Path does not exist" 回归（1.0.72+），1.0.71 正常 | `回归` `文件系统` `工具链` | **核心工具回归**：影响代码阅读/编辑基础流程，已定位至 1.0.72 引入 | 1 条评论 · 6 天跟进 | [#4202](https://github.com/github/copilot-cli/issues/4202) |
| 6 | **#4217** Windows 退出崩溃：`uv_async_send` 作用于正在关闭的 handle (`FAST_FAIL_FATAL_APP_EXIT`) | `Windows` `libuv` `崩溃` `进程退出` | **稳定性**：每次退出必现，虽不影响主流程但污染遥测与 CI 判定 | 1 👍 · 持续观察中 | [#4217](https://github.com/github/copilot-cli/issues/4217) |
| 7 | **#4203** 远程 MCP (OAuth)：Access Token 过期强制交互式重新授权，未尝试 Refresh Token 静默刷新 | `MCP` `OAuth` `认证` `RFC6749` | **协议合规性缺失**：打断自动化流程，企业级 MCP 接入痛点 | 0 评论 · 6 天无响应 | [#4203](https://github.com/github/copilot-cli/issues/4203) |
| 8 | **#4259** `--resume` 重放孤立 `permission.requested` 事件（无匹配 `completed`），导致重复授权弹窗 | `会话恢复` `权限模型` `事件溯源` | **数据一致性**：中断恢复路径破坏用户信任，易引发误操作 | 0 评论 · 今日新开 | [#4259](https://github.com/github/copilot-cli/issues/4259) |
| 9 | **#4264** 扩展 Slash Command 单次触发多次排队（同命令 3-5 实例） | `扩展系统` `命令去重` `事件总线` | **扩展生态可用性**：插件开发者无法保证幂等性 | 0 评论 · 今日新开 | [#4264](https://github.com/github/copilot-cli/issues/4264) |
| 10 | **#4260** Desktop App 忽略 `settings.json` 中 `askUser: false`，且无独立开关 | `配置一致性` `Desktop vs CLI` `ask_user` | **多端配置割裂**：CLI 与 Desktop 行为不一致，运维成本倍增 | 0 评论 · 今日新开 | [#4260](https://github.com/github/copilot-cli/issues/4260) |

> **备注**：#4254、#4261、#4262 为垃圾工单已关闭；#4255 无关内容。

---

## 4. 重要 PR 进展

> 过去 24 小时无 PR 更新。建议关注后续针对上述 Issues 的修复 PR（如 #4163 的 `libuv` 子进程回收、#4053 的 Tokio `spawn_blocking` 改造、#4203 的 OAuth 刷新流程补全）。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 |
|----------|------------|----------|
| **跨平台运行时稳健性** | #4163, #4053, #4217, #4263 | Linux 僵尸进程、NFS 文件系统竞态、Windows libuv 退出崩溃、Terminal 渲染兼容 |
| **MCP/远程服务器企业级就绪** | #4203, #4205, #4204 | OAuth 标准刷新流、Registry 策略放宽运行时 Header、`.agents` 统一发现约定 |
| **会话与状态管理可靠性** | #4259, #4202, #4258 | `--resume` 事件幂等、工具路径解析回归、BYOK 交互流程对齐 |
| **扩展系统工程化** | #4264, #4260 | Slash Command 去重、CLI/Desktop 配置共享模型 |
| **模型调用成本优化** | #4256 | Anthropic `cache_control` 断点复用上下文，降低长会话 Token 费用 |
| **配置与发现标准化** | #4204, #4260 | `.agents` 目录约定扩展至非 Git 目录、统一 `askUser` 等开关生效范围 |

---

## 6. 开发者关注点·痛点总结

1. **“能跑通”优于“功能新”** —— 顶赞 Issue 均为 **基础设施级缺陷**（进程泄漏、死锁、崩溃、渲染错乱），开发者期待先夯实跨平台 Runtime。
2. **MCP 集成仍处“早期适配期”** —— OAuth 刷新缺失、Registry 策略僵化、运行时 Header 注入受限，阻碍企业内网/私有化部署。
3. **会话恢复机制信任度低** —— `--resume` 重放幂等性缺失、权限事件孤立、工具路径解析回归，导致开发者不敢在长任务中依赖恢复。
4. **CLI 与 Desktop 双端体验割裂** —— 配置不同步（`askUser`）、能力不均（Desktop 无开关）、调试入口不一，增加维护心智负担。
5. **扩展生态缺乏运行时保障** —— 命令重复触发、无去重机制、无版本化发布流，插件作者难以提供生产级扩展。
6. **文件系统边界情况覆盖不足** —— NFS/GPFS、Windows 路径、符号链接、权限位等场景自动化测试薄弱。

---

> **下一步建议**：优先排期 #4163、#4053、#4217 修复进主干；建立 MCP OAuth 合规性测试套件；引入 `--resume` 事件幂等性集成测试；统一 CLI/Desktop 配置 Schema 与加载路径。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



### 2026-07-27 Kimi Code CLI 社区动态日报

#### 1. **今日速览**  
- 今日无新版本或 Pull Request 更新，社区唯一重点集中在解决 Web 端贴图插入异常问题（Issue #2559 已关闭）。  
- 问题通过优化图像处理逻辑或提示用户重新上传等方式确认缓解，但需关注后续复现率统计。

#### 2. **版本发布**  
- 无新版本发布。

#### 3. **社区热点 Issues**  
- **Issue #2559[关闭]：Web 端图像插入缺失**  
  关键：影响开发者上传图像时体验质量，可能影响需求文档中的视觉辅助内容。  
  社区反应：无投票，但评论中开发者直接提出问题，显示高关注度。  
  链接: [MoonshotAI/kimi-cli Issue #2559](https://github.com/MoonshotAI/kimi-cli/issues/2559)  

- **其他 Issues**：今日无新更新的热点 Issue，建议关注历史活跃 Issue（如迭代需求、性能优化）。数据显示当日仅 1 条 Issue，可能需关注长期维护任务或非当日提交的问题。

#### 4. **重要 PR 进展**  
- 无新 Pull Request，无实质性代码更新。

#### 5. **功能需求趋势**  
- 从最近 Issue 可推测社区关注**可靠性与用户体验**（如图像处理缺失、提示优化）。  
- 潜在趋势：加强与 IDE 的集成、图像处理稳定性改进，或支持新模型（如图表生成）。

#### 6. **开发者关注点**  
- **即时反馈问题**：图像插入失败导致会话中断，用户需手动重新上传。  
- **错误提示可优化**：当前占位文本可能缺乏操作指引，影响快速恢复。  
- **跨平台兼容性**：Web 端问题可能反映移动或桌面端类似风险，需进一步测试。

---

### 关键数据源  
- GitHub Repository: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
- Issue 链接: [#2559](https://github.com/MoonshotAI/kimi-cli/issues/2559)  

**备注：今日数据量有限，需关注长期趋势与历史 Issue 的优先级排序。**


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-07-27）

## 今日速览

1. **支付配额问题引发广泛关注**：OpenCode Go订阅续费后配额未重置导致多位用户反馈，成为今日最高赞量的 Issue；
2. **DeepSeek及Zen模型服务故障持续**：付费Zen模型普遍出现“Upstream request failed”错误，影响用户使用；
3. **移动端及Web应用体验优化启动**：多个PR聚焦移动浏览器SSE重连、Web API返回类型等问题。

## 版本发布

暂无24小时内的版本发布。

## 社区热点 Issues

| 编号 | 标题 | 重要性分析 | 社区反应 |
|------|------|-----------|----------|
| [#34184](https://github.com/anomalyco/opencode/issues/34184) | Auto-renewed subscription but quota hasn't reset | 订阅续费后配额未及时更新，直接影响用户使用权益 | 7条评论，已确认为严重问题 |
| [#36506](https://github.com/anomalyco/opencode/issues/36506) | All paid Zen models fail with 'Upstream request failed' | 付费Zen模型全面不可用，影响核心商业功能 | 10条评论，用户抱怨严重 |
| [#28846](https://github.com/anomalyco/opencode/issues/28846) | Adjust Go usage limits after DeepSeek V4 Pro price reduction | 定价变更导致配额策略失效，需同步调整 | 95条评论，83赞，社区反馈最广 |
| [#38789](https://github.com/anomalyco/opencode/issues/38789) | Desktop v1.18.5: UnsupportedContentType error on project reload | 更新后项目加载失败，影响桌面体验 | 13条评论，5赞 |
| [#39032](https://github.com/anomalyco/opencode/issues/39032) | Transfer Go subscription to new email after old account deletion | 账号注销后订阅无法迁移，涉及用户财产 | 1条评论 |
| [#38990](https://github.com/anomalyco/opencode/issues/38990) | DeepSeek Integration Ignoring User Prompts | 模型忽略用户指令，生成无关内容 | 5条评论 |
| [#39017](https://github.com/anomalyco/opencode/issues/39017) | opencode web: API routes return SPA HTML instead of JSON | Web端API返回类型错误，导致前端报错 | 1条评论 |
| [#38810](https://github.com/anomalyco/opencode/issues/38810) | Windows 11 reload failure after v1.18.5 update | Windows用户启动失败问题 | 3条评论 |
| [#39025](https://github.com/anomalyco/opencode/issues/39025) | Automatic Disconnect from server | 长时间运行后自动掉线 | 1条评论 |
| [#39029](https://github.com/anomalyco/opencode/issues/39029) | Mouse scroll wheel scrolls command history in SSH mode | SSH连接下滚轮行为异常 | 1条评论 |

## 重要 PR 进展

| 编号 | 标题 | 功能/修复内容 | 状态 |
|------|------|--------------|------|
| [#39028](https://github.com/anomalyco/opencode/pull/39028) | fix(web): reconnect SSE stream when mobile tab becomes visible again | 修复移动端浏览器切回前台后聊天界面冻结问题 | 已合并 |
| [#39027](https://github.com/anomalyco/opencode/pull/39027) | fix(ui): keep mutable selects open | 修复设置面板下拉选择框关闭问题 | 已合并 |
| [#39015](https://github.com/anomalyco/opencode/pull/39015) | feat: add model-gated auto-approve mode | 添加基于模型的自动批准模式 | 已合并 |
| [#39010](https://github.com/anomalyco/opencode/pull/39010) | feat(session): add subagents tab with status and cost tracking | 添加子代理标签页显示状态和成本 | 已合并 |
| [#39008](https://github.com/anomalyco/opencode/pull/39008) | fix(llm): enable Anthropic prompt caching on the OpenRouter route | 启用OpenRouter路由上的Anthropic模型提示缓存 | 已合并 |
| [#38999](https://github.com/anomalyco/opencode/pull/38999) | fix(core): align grep behavior and guidance | 优化grep工具路径验证与错误提示 | 已合并 |
| [#39016](https://github.com/anomalyco/opencode/pull/39016) | fix(app): add scroll to project selector dropdown | 为项目选择器添加滚动条 | 已合并 |
| [#39021](https://github.com/anomalyco/opencode/pull/39021) | fix(server): treat undefined origin as non-CORS | 修复CORS检查中空Origin字符串处理问题 | 已合并 |
| [#39023](https://github.com/anomalyco/opencode/pull/39023) | fix(schema): break circular type reference in Prompt | 解决Prompt接口的循环类型引用 | 已合并 |
| [#39019](https://github.com/anomalyco/opencode/pull/39019) | fix(core): resolve npm edge by package name instead of first entry | 优化npm依赖解析逻辑 | 已合并 |

## 功能需求趋势

从社区Issue可归纳出以下核心需求方向：

1. **多仓库/多根工作区支持**：[#34398](https://github.com/anomalyco/opencode/issues/34398)、[#38984](https://github.com/anomalyco/opencode/issues/38984) 请求支持独立的子仓库快照管理和多根工作区；
2. **国际化与本地化**：[#38280](https://github.com/anomalyco/opencode/issues/38280) 呼吁添加多语言界面支持；
3. **便携式部署方案**：[#15789](https://github.com/anomalyco/opencode/issues/15789) 请求官方便携式运行脚本；
4. **Web/Mobile端体验优化**：[#39017](https://github.com/anomalyco/opencode/issues/39017)、[#39030](https://github.com/anomalyco/opencode/issues/39030) 等Issue聚焦Web API兼容性和移动端交互；
5. **SSH/TUI交互改进**：[#39029](https://github.com/anomalyco/opencode/issues/39029) 等Issue反馈远程终端下的交互体验问题；

## 开发者关注点

- **支付订阅系统稳定性**：Go订阅续费后配额同步延迟、账号迁移等财产权益问题频发；
- **模型供应商集成可靠性**：DeepSeek、Zen模型等第三方服务偶发性失败问题；
- **跨平台部署一致性**：Windows/Mac/Linux桌面版及Web端表现差异问题；
- **远程开发体验**：SSH连接、WSL集成等场景下的交互问题；
- **内存与资源占用**：部分用户报告TUI启动缓慢及内存占用高的问题；

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-27

---

## 1. 今日速览
今日无新版本发布。社区活动高度集中在 **核心性能优化、跨平台兼容性修复、扩展系统架构健壮性** 以及 **模型提供商适配** 四大维度。最受关注的议题是 TUI 长会话下的 CPU 占用过高（#6665）与 Session 存储哈希碰撞隐患（#4877）。同时，多个关键 PR 合并解决了 Windows 路径显示、工具字节计数、旧 CPU 指令集兼容等生产环境阻断性问题。扩展系统在 Compaction（压缩）流程下的运行时失效问题（#7154）引发对插件架构生命周期的深度讨论。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 热度/评论 | 核心看点 | 链接 |
|---|---|---|---|---|---|
| **#6665** | **TUI 流式输出时占满单核：未缓存的 Intl.Segmenter + 每块重建 Markdown** | `inprogress` | 💬 8 | **核心性能瓶颈**。`spindump` 定位热点在 `render timer → Markdown.render → wrap → Intl.Segmenter`。涉及 Grapheme 分段无缓存、Markdown 增量渲染缺失，严重影响长会话体验。 | [#6665](https://github.com/earendil-works/pi/issues/6665) |
| **#4877** | **[Bug] Session 文件夹哈希碰撞** | `CLOSED` | 💬 21 👍 2 | **架构级隐患**。不同路径（如 `/a/b/c/d` 与 `/a-b/c-d`）生成相同文件夹名 `--a-b-c-d--`。虽标记 Closed，但高讨论量说明社区对数据隔离可靠性高度敏感。 | [#4877](https://github.com/earendil-works/pi/issues/4877) |
| **#7090** | **重新生成 0.82.x shrinkwrap：修复 brace-expansion 5.0.7 CVE** | `CLOSED` | 💬 5 | **供应链安全**。`minimatch@10.2.5` 传递依赖 `brace-expansion@5.0.7` 存在 `CVE-2026-14257`（内存耗尽 DoS）。需升级至 5.0.8+ 并重新锁定 shrinkwrap。 | [#7090](https://github.com/earendil-works/pi/issues/7090) |
| **#7064** | **[Bug] WSL 绝对 Windows 路径处理异常** | `OPEN` | 💬 5 👍 1 | **跨平台阻断项**。WSL2 下 Agent 调用 `read`/`write`/`edit` 工具频繁失败，回退到 CLI 全量写入。路径转换逻辑在 Windows/WSL 边界失效。 | [#7064](https://github.com/earendil-works/pi/issues/7064) |
| **#7154** | **Compaction 导致扩展运行时失效：捕获的 pi 抛出 "stale after session replacement" 且无进程内恢复** | `CLOSED` | 💬 1 | **扩展架构痛点**。0.82.x 会话替换（含 Compaction）会使扩展持有的 `ctx` 失效，且无自动恢复机制。三个独立长会话证实此问题，严重影响依赖长期状态的插件。 | [#7154](https://github.com/earendil-works/pi/issues/7154) |
| **#7150** | **Compaction 进行中通过 RPC 发送 Prompt：ACK success:true 但静默丢弃** | `CLOSED` | 💬 1 | **数据丢失风险**。飞行中的 Compaction 导致 RPC 提示词被确认但不入会话、不触发运行、不记录 JSONL。用户最可能输入时发生静默丢失。 | [#7150](https://github.com/earendil-works/pi/issues/7150) |
| **#7136** | **[Bug] Bash 工具静默截断长命令（部分执行、无报错）** | `CLOSED` | 💬 1 | **静默数据损坏**。长命令被截断后前半段正常执行，后半段静默不执行且无错误上报，极难排查。 | [#7136](https://github.com/earendil-works/pi/issues/7136) |
| **#7049** | **升级 Undici 至 8.8.0 修复纯 HTTP 代理转发** | `OPEN` | 💬 3 | **网络栈修复**。8.5.0 默认 `proxyTunnel: true` 导致 HTTP 目标走 CONNECT 隧道，明文泄露。8.8.0 修正默认行为。 | [#7049](https://github.com/earendil-works/pi/issues/7049) |
| **#7149** | **独立 Linux-x64 二进制在预 Haswell CPU 上 SIGILL (BMI2 指令)** | `CLOSED` | 💬 1 | **兼容性回归**。官方 `pi-linux-x64` 编译开启了 BMI2 (`shlx` 指令)，导致 Sandy Bridge 等旧 CPU 无法启动。npm 包正常，仅独立二进制受影响。 | [#7149](https://github.com/earendil-works/pi/issues/7149) |
| **#7127** | **功能请求：公开持久化的 Compaction 策略生命周期** | `CLOSED` | 💬 2 | **扩展能力诉求**。现有 `session_before_compact` 仅支持自定义摘要文本，无法支撑需持久化外部状态（向量库、结构化索引）的耐久压缩策略。 | [#7127](https://github.com/earendil-works/pi/issues/7127) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 类型 | 核心变更 | 链接 |
|---|---|---|---|---|---|
| **#7148** | **feat(coding-agent): 实验性 Loadout 管理** | `OPEN` | 🚀 Feature | 引入 `/loadout` 命令，支持会话中动态启用/禁用扩展，覆盖持久化至会话文件，恢复时自动复原。需用户确认。**重大架构演进**。 | [#7148](https://github.com/earendil-works/pi/pull/7148) |
| **#7151** | **feat(ai): 流式输出时暴露待定 Stop Reason** | `OPEN` | 🚀 Feature | 利用 Responses API `phase: "final_answer"` 预测最终 `stopReason: "stop"`，让消费者尽早知道当前流式消息为最终回答。 | [#7151](https://github.com/earendil-works/pi/pull/7151) |
| **#7129** | **tui: 将 visibleWidth 缓存提升至 4096 条，采用 LRU 淘汰** | `CLOSED` | ⚡ Perf | 解决 512 条缓存在真实会话中因大量非 ASCII 行（Box drawing, Emoji, CJK）每帧抖动。FIFO 改 LRU 保护热点条目。 | [#7129](https://github.com/earendil-works/pi/pull/7129) |
| **#7131** | **Set AI_AGENT=pi 用于子进程归因** | `CLOSED` | 🔧 Chore | CLI 与 RPC 入口设置 `AI_AGENT=pi`，配合现有 `PI_CODING_AGENT=true`。跨 Agent 通用约定，被 Claude Code, GitHub CLI, Vercel 等采纳。 | [#7131](https://github.com/earendil-works/pi/pull/7131) |
| **#7122** | **fix(tools): 修正 write 字节数、find 误报限制、truncateLine 代理对处理** | `CLOSED` | 🐛 Bugfix | 1. `write.ts` 用 `Buffer.byteLength` 替代 `length` 修正非 ASCII 字节数上报。2. `find.ts` 修复误报限制警告。3. `truncateLine

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报（2026‑07‑27）**  

---

### 今日速览
- 今日发布了夜间版本 **v0.21.0‑nightly.20260727.c003e1718**，主要包含 CLI 时区修正以及 AutoFix 重构。  
- 社区热议集中在 **多工作区支持**、**外部上下文提供方案** 以及一系列 **安全漏洞修复**（MCP 工具授权、Desktop IPC 桥梁等）。  
- 持续的 CI 失败（E2E Tests）和性能瓶颈（冷启动、首模型输出延迟）成为开发者当前的关注焦点。

---

### 版本发布
- **v0.21.0‑nightly.20260727.c003e1718**  
  - `fix(cli): measure insight days and hours in local time everywhere` – 确保所有洞察时间的显示均采用本地时区，避免跨区域混淆。  
  - `refactor(autofix): ext` – 对 AutoFix 模块进行代码重构，为后续功能扩展奠定基础。  
  [Release 链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260727.c003e1718)

---

### 社区热点 Issues（按社区关注度与影响力挑选的 10 条）

| # | 标题 | 关键标签 | 评论 | 重要性说明 | 链接 |
|---|------|----------|------|------------|------|
| #6378 | **RFC: Support multiple workspaces in one qwen serve daemon** | feature‑request, session‑management, daemon | 30 | 提出在单个 daemon 中运行多个工作区的设计方案，涉及架构变更，社区讨论活跃，是未来协作场景的关键需求。 | [Issue #6378](https://github.com/QwenLM/qwen-code/issues/6378) |
| #7585 | **proposal: Add a direct external context provider profile** | feature‑request, integration, mcp, extensions | 8 | 建议添加直接外部上下文提供方案，使 Qwen CLI 能够在不修改核心代码的情况下获取管理员绑定的外部知识库，满足企业级知识共享需求。 | [Issue #7585](https://github.com/QwenLM/qwen-code/issues/7585) |
| #7769 | **[Security] MCP tool denial bypassed when a new SSE session is created** | security, mcp, vulnerability | 6 | 揭示用户拒绝 MCP 工具后，新建 SSE 会话可能绕过拒绝，导致未授权工具调用，属于高危安全问题。 | [Issue #7769](https://github.com/QwenLM/qwen-code/issues/7769) |
| #7768 | **[Security] Desktop IPC bridge `mcp_client_tool_call` executes MCP tools without enforcing user authorization** | security, mcp | 6 | 指出 Desktop 主进程 IPC 方法未检查用户授权，直接调用 MCP 工具，需尽快修复权限校验。 | [Issue #7768](https://github.com/QwenLM/qwen-code/issues/7768) |
| #7264 | **Cold-start follow-ups: remaining lazy-loading candidates from the ACP eager-closure audit** | performance, core | 6 | 继 #4748 后继续优化 ACP 子进程的静态 import，目的是降低冷启动内存占用和启动时间。 | [Issue #7264](https://github.com/QwenLM/qwen-code/issues/7264) |
| #7750 | **[question] qwen-code-sdk和qoder-agent-sdk选型问题** | question, sdk | 6 | 开发者对 Qwen Code 与 Qoder 两个 SDK 的定位和未来维护产生疑问，反馈社区对 SDK 生态的关注度。 | [Issue #7750](https://github.com/QwenLM/qwen-code/issues/7750) |
| #7684 | **Command 模式下statusline如果显示多行，输入法候选框显示位置不对** | ui, components, macos | 5 | 在 macOS 上命令行多行状态栏会导致输入法候选框错位，影响中文输入体验。 | [Issue #7684](https://github.com/QwenLM/qwen-code/issues/7684) |
| #7167 | **Fleet Shepherd Dashboard** | ci‑cd, need‑information | 4 | 自动维护的仓库卫生仪表板，显示同步、调度等状态，便于团队监控 CI 健康度。 | [Issue #7167](https://github.com/QwenLM/qwen-code/issues/7167) |
| #7771 | **[Bug] Persisted mcp_config is not loaded into main-process MCP proxy at startup** | bug, mcp, need‑retesting | 4 | 用户配置的 MCP 服务器在重启后未被主进程加载，导致 IPC 调用失败，影响持久化配置的可用性。 | [Issue #7771](https://github.com/QwenLM/qwen-code/issues/7771) |
| #7770 | **[Security] Code interpreter sandbox can write to host machine when MCP proxy is internet-exposed** | security, mcp, sandbox | 4 | 揭示代码解释器沙箱在 MCP 代理暴露至公网时可能越权写入宿主机，是潜在的逃逸风险。 | [Issue #7770](https://github.com/QwenLM/qwen-code/issues/7770) |

---

### 重要 PR 进展（挑选的 10 条具有功能或修复意义的 PR）

| PR | 标题 | 类别 | 主要内容 | 链接 |
|----|------|------|----------|------|
| #7778 | **feat(web-shell): allow widening sidebar up to half the window width** | 功能增强 | 将 Web Shell 侧边栏最大宽度从固定值改为可随窗口拉伸至一半，提升大屏使用体验。 | [PR #7778](https://github.com/QwenLM/qwen-code/pull/7778) |
| #7751 | **feat(review): script-lint as a deterministic gate — compose-review reads the report, no agent** | 流程改进 | 将脚本 lint 检查从由 Agent 执行改为直接读取 lint 报告，消除模型 honor system 的不确定性。 | [PR #7751](https://github.com/QwenLM/qwen-code/pull/7751) |
| #7753 | **[autofix/takeover] fix(triage): carry the /verify lane's hardening across to /tmux** | 安全加固 | 把 `/verify` 轨道的五项安全硬化措施同步到 `/tmux` 命令，防止类似的注入或绕过攻击。 | [PR #7753](https://github.com/QwenLM/qwen-code/pull/7753) |
| #7731 | **[autofix/takeover] feat(web-shell): add git branch picker, commit dialog, and create PR flow** | 功能增强 | 在 Web Shell 中加入分支选择器、提交对话框和创建 PR 的完整流程，仿照 IDE 的 Git 操作体验。 | [PR #7731](https://github.com/QwenLM/qwen-code/pull/7731) |
| #7765 | **fix(core): stop rewriting backslash escapes in gitignore patterns** | Bug 修复 | 停止对 `.gitignore` 模式中的反斜杠进行统一替换，防止误改转义序列导致忽略规则失效。 | [PR #7765](https://github.com/QwenLM/qwen-code/pull/7765) |
| #7764 | **fix(core): stop trailing slash from anchoring nested gitignore patterns** | Bug 修复 | 去掉尾部斜杠触发的“锚定目录”判断，使 `foo/` 等目录-only 模式能够正确递归匹配。 | [PR #7764](https://github.com/QwenLM/qwen-code/pull/7764) |
| #7763 | **fix(core): keep leading whitespace in gitignore patterns** | Bug 修复 | 保留 `.gitignore` 模式首部空白，避免因 `.trim()` 而改变原始忽略规则。 | [PR #7763](https://github.com/QwenLM/qwen-code/pull/7763) |
| #7760 | **fix(core): treat properties as a name map in toOpenAPI30** | Bug 修复 | 修正 OpenAPI 3.0 生成时把 `properties` 当作名称映射而非 JSON Schema 节点，防止属性名与关键字冲突导致 schema 错误。 | [PR #7760](https://github.com/QwenLM/qwen-code/pull/7760) |
| #7761 | **test(serve): Add first-output latency benchmark** | 性能测试 | 新增可选基准测试，衡量从进程启动到首次模型输出的各阶段延迟（进程就绪、请求到达、首 token 等）。 | [PR #7761](https://github.com/QwenLM/qwen-code/pull/7761) |
| #7767 | **perf(acp): Preload providers after session creation** | 性能优化 | 在 ACP `session/new` 响应写入后尽量预加载内部惰性 Provider，使后续首次 prompt 能复用已准备好的实例，降低首 token 延迟。 | [PR #7767](https://github.com/QwenLM/qwen-code/pull/7767) |

---

### 功能需求趋势
从最近的 Issues 和 PR 中可以看出社区的关注热点：

1. **多工作区与会话管理** – #6378（多工作区 RFC）及相关的会话锁、计划退出等讨论表明用户希望在单个 daemon 中支持更灵活的工作区切换。  
2. **外部知识与上下文集成** – #7585（直接外部上下文提供方案）体现了对企业级知识库、私有数据源的接入诉求。  
3. **性能与冷启动优化** – #7264、#7761、#7767 等围绕降低 ACP 子进程启动时间、首模型输出延迟以及预加载 Provider 的工作。  
4. **安全加固** – 一系列 MCP 相关的安全漏洞（#7769、#7768、#7770、#7772）及对应的硬化 PR（#7753、#7751）显示社区对权限检查、沙箱逃逸和 IPC 安全的高度重视。  
5. **IDE/Web‑Shell 交互体验** – #7684（输入法候选框位置）、#7778（侧边栏宽度）、#7731（Git 分支选择器）等改进旨在提升编辑器和 Web Shell 的日常使用感受。  
6. **SDK 与生态定位** – #7750 的选型疑问反映出开发者对 Qwen Code SDK 与其他同类 SDK（如 Qoder）的关系、维护策略和长期支持的关注。  

---

### 开发者关注点（痛点与高频需求）
- **CI 稳定性**：多个 E2E Tests 在不同提交上反复失败（#7773、#7759、#7712 等），导致合并延迟，社区期望更快的根因定位与修复。  
- **会话锁与守护进程恢复**：#7752（认证 handoff/takeover）以及 #6378 中提到的工作区切换涉及锁竞争，开发者希望守护进程在崩溃或替换时能安全转移会话状态。  
- **计划模式内容泄漏**：#6237 显示在退出计划模式后，计划内容会被错误地带入后续回复，影响输出准确性。  
- **安全审计与权限**：频繁出现的 MCP 工具授权绕过、Desktop IPC 未检查、沙箱写入宿主机等问题，提示需要统一的权限中间件和更严格的安全测试流程。  
- **文档与 SDK 一致性**：#7750 中的 SDK 选型困惑表明文档、示例及版本策略需要更清晰的区分与指引。  
- **本地化与输入法支持**：#7684 等 UI 小 bug 暴露出在多语言（尤其是中文）输入环境下的细节不足，开发者建议加入更完整的 I18N 和输入法适配测试。  

---

> 本报告基于 GitHub 公开数据（Issues、PR、Releases）整理而成，旨在为 Qwen Code 开发者提供快速的技

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-07-27

---

## 1. 今日速览

今日 CodeWhale 社区聚焦于 **v0.9.2 版本的 UX 优化与性能修复**，尤其是在 TUI 渲染性能、多语言支持和会话管理方面取得显著进展。同时，多个关键 PR 合并，包括缓存命中率优化、Markdown 渲染性能提升以及剪贴板写入异步处理等。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 `v0.9.2`，社区正在紧锣密鼓地推进该版本的功能完善与缺陷修复。

---

## 3. 社区热点 Issues

以下是社区中评论最多、影响力最大的 10 个 Issues：

### 1. [#3793](https://github.com/Hmbown/CodeWhale/issues/3793)  
**[documentation, enhancement, context, localization, tui, security, ux, reliability, lane-setup, v0.9.2]**  
**v0.9.2 Setup: build a guided localized constitution creator, not a blank prompt editor**  
👍 17 评论 | 作者: Hmbown | 更新: 2026-07-26  
**为什么重要**： constitution 是 CodeWhale 的核心机制之一，本 Issue 提出将其打造为一款引导式、本地化的创建工具，而非简单的文本编辑器。强调安全控制不能直接从 constitution 文件中修改。

---

### 2. [#4227](https://github.com/Hmbown/CodeWhale/issues/4227)  
**[documentation, enhancement, question, workflow-runtime, subagents, v0.9.2]**  
**feat: 🐋 help JayBeest map the CodeWhale tsunami 🌊**  
👍 13 评论 | 作者: JayBeest | 更新: 2026-07-26  
**为什么重要**： 旨在帮助开发者快速搭建 CodeWhale 开发环境，自动同步 main 分支并构建项目，适应高频 PR 的开发节奏。

---

### 3. [#2934](https://github.com/Hmbown/CodeWhale/issues/2934)  
**[enhancement, tui, ux, reliability, v0.9.2]**  
**feat: sidebar sessions panel with auto-resume and session history browsing**  
👍 10 评论 | 作者: cy2311 | 更新: 2026-07-26  
**为什么重要**： 解决用户切换会话不便的问题，新增侧边栏会话面板，支持自动恢复与历史浏览，提升多会话体验。

---

### 4. [#3792](https://github.com/Hmbown/CodeWhale/issues/3792)  
**[documentation, enhancement, tui, ux, reliability, lane-setup, v0.9.2]**  
**v0.9.2 Setup: make first-run onboarding feel like starting CodeWhale, not editing config**  
👍 9 评论 | 作者: Hmbown | 更新: 2026-07-26  
**为什么重要**： 优化首次运行流程，使其更贴近产品体验而非配置操作，提升新用户上手友好度。

---

### 5. [#2494](https://github.com/Hmbown/CodeWhale/issues/2494)  
**[enhancement]**  
**mac+ item2 用户使用问题汇总**  
👍 6 评论 | 作者: wywsoor | 更新: 2026-07-26  
**为什么重要**： 收集 macOS + iTerm2 用户的常见问题，包括快捷键不匹配、会话换行异常等，反映平台兼容性需求。

---

### 6. [#1004](https://github.com/Hmbown/CodeWhale/issues/1004)  
**[bug, enhancement, needs-human, v0.9.2]**  
**feat(commands): /dryrun — preview the next chat completion request without sending it**  
👍 5 评论 | 作者: peixl | 更新: 2026-07-26  
**为什么重要**： 允许用户预览即将发送的请求内容，避免因误操作导致不必要的 API 调用或费用。

---

### 7. [#4022](https://github.com/Hmbown/CodeWhale/issues/4022)  
**[documentation, enhancement, tui, ux, v0.9.2]**  
**v0.9.2: define CLI/TUI parity for subagent and runtime control surfaces**  
👍 5 评论 | 作者: Hmbown | 更新: 2026-07-26  
**为什么重要**： 确保 TUI 与 CLI 在子代理控制和运行时接口上保持一致，便于远程或自动化使用场景。

---

### 8. [#3983](https://github.com/Hmbown/CodeWhale/issues/3983)  
**[bug, documentation, enhancement, workflow-runtime, agent-ready, reliability, v0.9.2]**  
**v0.9.2 Runtime: make current Work state model-visible on parent turns**  
👍 4 评论 | 作者: Hmbown | 更新: 2026-07-26  
**为什么重要**： 提高子任务执行状态的可见性，让父任务能够追踪子任务进展，增强系统透明性。

---

### 9. [#2974](https://github.com/Hmbown/CodeWhale/issues/2974)  
**[enhancement, whaleflow, workflow-runtime, agent-ready, agent-in-progress, tui, tools, reliability, lane-workflow, v0.9.2]**  
**v0.9.2 Workflow: wire the model-facing workflow tool and run driver**  
👍 4 评论 | 作者: Hmbown | 更新: 2026-07-26  
**为什么重要**： 构建模型驱动的工作流执行路径，连接 JS 编写、计划生成、子代理执行等模块，是工作流系统的关键基础设施。

---

### 10. [#3927](https://github.com/Hmbown/CodeWhale/issues/3927)  
**[enhancement, agent-ready, agent-in-progress, lane-setup, v0.9.2]**  
**ux(onboarding): add an explicit provider-independent offline path**  
👍 4 评论 | 作者: Hmbown | 更新: 2026-07-26  
**为什么重要**： 增加一个脱离任何服务提供商的离线体验路径，方便用户体验功能或进行本地测试。

---

## 4. 重要 PR 进展

以下是今日合并或活跃的 10 个重要 PR：

### 1. [#4905](https://github.com/Hmbown/CodeWhale/pull/4905)  
**fix(tui): stop writing terminal control bytes to non-terminals**  
✅ 已合并 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 修复 OSC 9;4 和 OSC 0 控制字节被错误写入非终端输出的问题，提升兼容性。

---

### 2. [#4904](https://github.com/Hmbown/CodeWhale/pull/4904)  
**fix(composer): respect the menu limit and resolve git mentions once**  
🔄 进行中 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 修复 `mention_menu_limit = 0` 不生效的问题，并优化 Git 提及解析逻辑。

---

### 3. [#4903](https://github.com/Hmbown/CodeWhale/pull/4903)  
**perf(tui): stop re-parsing committed markdown while streaming**  
✅ 已合并 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 解决流式渲染时重复解析 Markdown 导致性能下降的问题，显著优化长文本显示效率。

---

### 4. [#4902](https://github.com/Hmbown/CodeWhale/pull/4902)  
**test(engine): pin the cacheable prefix across unchanged turns**  
✅ 已合并 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 解决因 `<turn_meta>` 块变化导致缓存命中率下降的问题，降低 API 成本。

---

### 5. [#4899](https://github.com/Hmbown/CodeWhale/pull/4899)  
**feat(composer): add @git and @diff mentions**  
✅ 已合并 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 新增 `@git` 和 `@diff` 提及功能，方便模型直接获取 Git 上下文。

---

### 6. [#4894](https://github.com/Hmbown/CodeWhale/pull/4894)  
**feat(shell): deliver tracked completions to waiting turns**  
✅ 已合并 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 实现后台 Shell 任务完成后自动通知等待中的任务，提升异步执行体验。

---

### 7. [#4893](https://github.com/Hmbown/CodeWhale/pull/4893)  
**feat(provider): ask Kimi Code plan tier during setup**  
✅ 已合并 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 在设置过程中添加 Kimi Code 会员等级选择，支持 262K / 1M 上下文窗口配置。

---

### 8. [#4892](https://github.com/Hmbown/CodeWhale/pull/4892)  
**perf(tui): reuse live transcript snapshots and flattened lines**  
✅ 已合并 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 复用未变更的文本快照，减少重复渲染开销，提升性能。

---

### 9. [#4891](https://github.com/Hmbown/CodeWhale/pull/4891)  
**fix(skills): repair invalid system install markers**  
✅ 已合并 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 修复系统技能安装标记损坏问题，保护用户自定义内容。

---

### 10. [#4876](https://github.com/Hmbown/CodeWhale/pull/4876)  
**fix(skills): repair invalid bundled-skill version markers**  
✅ 已合并 | 作者: Hmbown | 更新: 2026-07-26  
**内容**： 自动修复捆绑技能版本标记错误，确保技能正常加载。

---

## 5. 功能需求趋势

从社区 Issues 和 PR 的分布来看，开发者最关注的方向包括：

| 方向 | 描述 |
|------|------|
| **性能优化** | 如 Markdown 渲染性能、缓存命中率优化、渲染快照复用等。 |
| **多语言支持** | 社区积极推进西班牙语、葡萄牙语、韩语、俄语等语言的本地化工作。 |
| **会话与工作流管理** | 新增会话侧边栏、工作流驱动、子代理状态可视化等功能。 |
| **CLI/TUI 功能一致性** | 确保命令行与图形界面在功能上保持一致。 |
| **安全与权限控制** | 强化 constitution 安全性、权限缩窘可观测性等。 |

---

## 6. 开发者关注点

以下是开发者在社区中反复提及的痛点或高频需求：

- **macOS 兼容性问题**：如快捷键不匹配、会话换行异常等。
- **Markdown 渲染性能瓶颈**：长文本流式渲染时存在明显卡顿。
- **缓存命中率下降**：导致 API 成本上升，需优化 prompt 结构。
- **会话管理不便**：缺乏直观的会话列表与快速切换方式。
- **本地化需求旺盛**：多语言支持是提升国际化用户体验的关键。

---

> 📌 如需获取更多详情，请访问 [Hmbown/CodeWhale GitHub 页面](https://github.com/Hmbown/CodeWhale)。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*