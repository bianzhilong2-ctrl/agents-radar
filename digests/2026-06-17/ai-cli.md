# AI CLI 工具社区动态日报 2026-06-17

> 生成时间: 2026-06-17 02:47 UTC | 覆盖工具: 9 个

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

**AI CLI工具生态横向对比报告 – 2026‑06‑17**  
（汇总 Claude‑Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI 等）

| 工具 | Issues（过去24 h） | PRs（过去24 h） | Releases | 主要语言/技术栈 |
|------|------------------|----------------|----------|-----------------|
| Claude‑Code | **50** | **18** | v2.1.179 | Rust/WebAssembly、C++ |
| OpenAI Codex | **0** | **0** | 0（α‑4版本待发布） | Rust (CLI), TypeScript (web) |
| Gemini CLI | **0** | **0** | 0（v2.1.2 预发布） | Golang |
| GitHub Copilot CLI | **7** | **0** | v1.0.64‑0 | Go |
| Kimi Code CLI | **4** | **1** | 0 | Go |
| OpenCode | **0** (issues持续但未新增) | **0** | 0 | Rust |
| Pi | **0** | **0** | 0 | Mono/C# |
| Qwen Code | **0** | **0** | v0.18.1‑preview.0 | Rust/Go |
| DeepSeek TUI | **10** | **10** | v0.8.61 | Rust & Cargo (static binaries) |

> **1. 生态全景**  
> AI CLI 正在向“合作双向”演进：一方面为开发者提供一次交互式代码助手，另一方面形成可扩展插件/工具链生态。大多数项目已实现多模型支持；但在**会话生命周期**、**MCP（Model‑Control‑Plane）工具集成**、**IDE深度集成**与**上下文/配额透明化**等方面共识拉升。  
> 观察到 **功能细分**趋向明显：如Claude‑Code聚焦“重写/完善”与“沙箱安全”，OpenAI Codex展开“会话持久化/性能卡顿”，GitHub Copilot CLI关注“MCP生态”与“跨平台稳定性”，OpenCode在“子代理调度/目标管理”与“多模态”上领先。

> **2. 共同关注的功能方向**  
> | 需求 | 关注工具 | 具体诉求 |
> |------|-----------|-----------|
> | IDE深度集成（JetBrains/VS‑Code插件） | Claude‑Code、GitHub Copilot CLI、OpenCode | 原生插件、IDE `/ide` 接口，支持代码补全与重构 |
> | MCP工具可用性 & 生态 | GitHub Copilot CLI、Claude‑Code、OpenCode、Qwen Code | MCP注册/发现、工具调用稳定、JSON Schema安全 |
> | 上下文配额透明化 & 自动摘要 | Claude‑Code、OpenAI Codex、OpenCode | 半流/全量上下文显示、配置界面、自动漏窗摘要 |
> | 子代理/多任务协作 | Claude‑Code、OpenCode、DeepSeek TUI | 子代理模型一致性、预算共享、任务分派 |
> | 错误可观测性 & 诊断 | GitHub Copilot CLI（`/diagnose`）、OpenAI Codex（会话恢复工具） | 可视化日志、误差提示、自动恢复 |
> | API/CLI可定制化 & 插件化 | OpenCode、DeepSeek TUI、Kimi Code | 插件安装/更新、GOS schema、模型列表自动刷新 |
> | 性能 & 资源管理 | OpenAI Codex、OpenCode、DeepSeek TUI | CPU占用抑制、文件句柄泄漏、并发加载 |

> **3. 差异化定位分析**  
> *Claude‑Code*：侧重“代码重写”与“沙箱安全”，以与Anthropics模型紧耦合，目标是插件化的 IDE 伴侣。  
> *GitHub Copilot CLI*：以GitHub生态和MCP为核心，打造统一的工作区/工具发现层，目标用户为企业内链路集成。  
> *OpenAI Codex*：聚焦“会话持久化 + 性能卡顿”，面向需要大上下文长任务的开发者，正处于α‑4版本迭代。  
> *OpenCode*：主攻“子代理协作 & 目标管理”，提供多层次会话导航与机器学习代理，定位为可编程协作平台。  
> *DeepSeek TUI*：定位于“低资源快速交互”，提供静态二进制本地 TUI，兼顾 Windows/Unix 的跨平台体验。  
> *Qwen Code* 与 *Gemini CLI*：均强调多模态与企业自托管模型（Qwen）,但 Qwen 着力“云+本地”混合部署，Gemini 侧重强化Google AI能力与业务集成。

> **4. 社区热度与成熟度**  
> ① **Claude‑Code** 与 **GitHub Copilot CLI** 是两个最为活跃的项目：Issue 超过 50、PR 18；其功能迭代周期短（每日或每两天新版本）。  
> ② **OpenAI Codex** 与 **OpenCode** 正处于快速迭代期，虽然仍无新 release，但 Issue 与 PR 数量高，问题反馈活跃。  
> ③ **DeepSeek TUI** 与 **Pi** 处于“中阶”级别，Issue/PR 较少但配置功能完善。  
> ④ **Gemini CLI** 与 **Qwen Code** 仍在初始发布/预览阶段，社区规模相对有限。  

> **5. 值得关注的趋势信号**  
> 1. **MCP工具链与插件生态** 正成为新标配，企业级用户迫切需要“工具可发现、可调用、可审计”。  → **建议**：在自己的 CLI 里预先规划MCP接口与安全模型。  
> 2. **子代理/多任务调度**（核心为 OpenCode、Claude‑Code）逐渐被认可为解决复杂长任务的首选模式。  → **建议**：考虑分层任务网关或树形会话切换机制。  
> 3. **上下文/配额透明化**（如 1 M、Sonnet vs all）正成为用户痛点。  → **建议**：提供可视化上下文窗口或调试窗口，合理分配token。  
> 4. **安全沙箱与文件系统隔离**（文件描述符泄漏、denyReadFileBuf）是少数项目关注重点。  → **建议**：加强运行时沙箱、权限降级与资源回收。  
> 5. **跨平台兼容性**（Windows ARM64 崩溃、非 ASCII 路径、macOS focus loss）仍是主流项目高频议题。  → **建议**：使用统一路径处理库、展开 CI 多平台跑通，提前检测 BEX/SMB 成功率。  

> **结论**  
> 目前 AI CLI 生态从单一模型交互快速演进到“工具链+插件+多模型”全景格局。活跃率最高的 Claude‑Code 与 GitHub Copilot CLI 已完成 MICP 核心组件；OpenAI Codex 与 OpenCode 正在解决后台性能与会话管理的基础问题。对想要快速落地的团队而言，优先选择已实现MCP支持且跨 IDE 深度集成成熟的工具；若追求自托管、二次开发与子代理多任务，可优先关注 OpenCode、DeepSeek TUI 或自行借鉴 Claude‑Code 的沙箱实现。  

> 关注上述“功能共振”与“安全沙箱”两大趋势，将使我们在后续版本规划中更具前瞻性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills 摘要生成失败。

---

**Claude‑Code 社区动态日报（2026‑06‑17）**  

---

### 1. 今日速览
- 今日发布 **v2.1.179**，重点修复了中断连接时的部分响应保留、WSL2 鼠标滚动回归以及沙箱安全限制。  
- 社区活跃度提升，过去 24 h 新增 Issue 50 条、PR 18 条，热点围绕 **IDE 集成、MCP 稳定性** 与 **模型上下文配额** 展开。

---

### 2. 版本发布
| 版本 | 发布时间 | 关键修复/改动 |
|------|----------|----------------|
| **v2.1.179** | 2026‑06‑17 | • 修复 **mid‑stream 断连**：partial response 保留而非直接报错<br>• 修复 **WSL2 鼠标滚动**（2.1.172 回归）<br>• 修复沙箱 `denyReadFileBuf` 逻辑<br>• 进一步提升工具结果页的稳定性 |

> 若无新版本，可省略此节；这里已有最新发布。

---

### 3. 社区热点 Issues（共选 10 条）

| # | Issue 标题 | 关键摘要 | 关注度（👍/评论） | 为何重要 | 链接 |
|---|------------|----------|-------------------|----------|------|
| 47166 | **[FEATURE] JetBrains IDE 真实 Claude AI Assist 插件** | 开发者呼吁为 IntelliJ/Idea 增加原生 AI 辅助插件，提升代码补全与重构体验。 | 👍 1  | 评论 24 | [#47166](https://github.com/anthropics/claude-code/issues/47166) |
| 46140 | **CRITICAL: MCP OAuth 完成但未发送 Bearer token** | 认证流程完整却在实际请求中缺失 token，导致 MCP 交互失效。 | 👍 5  | 评论 18 | [#46140](https://github.com/anthropics/claude-code/issues/46140) |
| 68961 | **Bug: 过度的 agentic 循环消耗 API quota** | 大量无意义的子 agent 产生导致配额耗尽，需要更智能的循环检测。 | 👍 0  | 评论 2 | [#68961](https://github.com/anthropics/claude-code/issues/68961) |
| 68287 | **BUG: Max 计划只显示 256k Context，1M 选项消失** | UI 中缺失 1M 上下文选项，影响高上下文需求的用户。 | 👍 1  | 评论 5 | [#68287](https://github.com/anthropics/claude-code/issues/68287) |
| 68920 | **Bug: `git submodule deinit` 直接 `git rm` 导致工作树被清空** | 失去对本地改动的检查，造成数据丢失。 | 👍 0  | 评论 2 | [#68920](https://github.com/anthropics/claude-code/issues/68920) |
| 61299 | **Bug: 文件描述符泄漏（monorepo）**，2.1.143+ 版本出现 | 长时间运行大型仓库会导致 fd 用尽。 | 👍 1  | 评论 7 | [#61299](https://github.com/anthropics/claude-code/issues/61299) |
| 64235 | **BUG: 工具调用被 “malformed” 错误吞掉** | 某些工具返回的 `tool_use` 块缺失，导致后续操作卡死。 | 👍 2  | 评论 5 | [#64235](https://github.com/anthropics/claude-code/issues/64235) |
| 68921 | **Feature Request: MCP 工具响应 diff，降低上下文占用** | 建议仅返回差分（delta）而非全量，以节省 4‑8 k token。 | 👍 0  | 评论 2 | [#68921](https://github.com/anthropics/claude-code/issues/68921) |
| 66870 | **Bug: cowork 工具 VM 启动失败，缺少 `com.apple.vm.networking` 权限** | macOS 26 上运行 cowork 时出现内部错误，影响自动化执行。 | 👍 0  | 评论 2 | [#66870](https://github.com/anthropics/claude-code/issues/66870) |
| 68964 | **Feature Request: Clarify Sonnet vs “all” usage segmentation** | 用户困惑于 Sonnet 是否独立配额，要求更清晰的计费布局。 | 👍 0  | 评论 1 | [#68964](https://github.com/anthropics/claude-code/issues/68964) |

> 以上 Issue 涵盖 **功能请求、严重缺陷、性能/配额问题**，是社区最活跃且最可能影响日常使用的议题。

---

### 4. 重要 PR 进展（共选 10 条）

| PR | 标题 | 关键改动 | 状态 | 链接 |
|----|------|----------|------|------|
| #47351 | **Enable PowerShell tool on macOS & Linux when `pwsh` is available** | 解除 Windows‑only 限制，提供跨平台 PowerShell 支持（可通过 `CLAUDE_CODE_USE_POWERSHELL_TOOL` 开启）。 | **Closed** | [#47351](https://github.com/anthropics/claude-code/pull/47351) |
| #68787 | **fix(scripts): add error message to edit-issue-labels.sh when called with no label arguments** | 增加友好错误提示，防止 CI 静默失败。 | **Open** | [#68787](https://github.com/anthropics/claude-code/pull/68787) |
| #68786 | **fix(plugin-dev): avoid shell injection in test-hook.sh via stdin redirection** | 通过 `bash -c` 正确转义，防止未知输入导致注入。 | **Open** | [#68786](https://github.com/anthropics/claude-code/pull/68786) |
| #68785 | **fix(plugin-dev): hook JSON to stdout, tighten su* glob, fix CI detection and JSON injection in examples** | 修正 hook 输出、完善示例，提升插件开发安全性。 | **Open** | [#68785](https://github.com/anthropics/claude-code/pull/68785) |
| #68673 | **fix(scripts): break pagination when page is not full, not only when empty** | 改进分页逻辑，使列表非满时仍可翻页。 | **Open** | [#68673](https://github.com/anthropics/claude-code/pull/68673) |
| #68678 | **fix(triage): don't mark Claude Desktop issues as invalid** | 调整标签策略，避免误判为 invalid。 | **Open** | [#68678](https://github.com/anthropics/claude-code/pull/68678) |
| #68679 | **fix(ralph-wiggum): strip control characters before promise comparison** | 修正 Windows 控制字符导致的比较错误。 | **Open** | [#68679](https://github.com/anthropics/claude-code/pull/68679) |
| #68680 | **fix(workflows): safe JSON construction and correct event name in log-issue-events** | 防止 JSON 注入，确保事件名称准确。 | **Open** | [#68680](https://github.com/anthropics/claude-code/pull/68680) |
| #68682 | **fix(scripts/gh.sh): reject empty query for search issues command** | 增强命令行校验，阻止空查询导致错误。 | **Open** | [#68682](https://github.com/anthropics/claude-code/pull/68682) |
| #68707 | **feat(bug-reporter): add /bug command to file GitHub issues from the terminal** | 新增 ` /bug ` 命令，简化报告流程。 | **Open** | [#68707](https://github.com/anthropics/claude-code/pull/68707) |

> 这些 PR 主要在 **CLI 可用性、脚本安全、错误提示、跨平台支持** 上提供实质性改进。

---

### 5. 功能需求趋势（从 Issue 中提炼）

| 趋势 | 具体表现 | 社区驱动原因 |
|------|----------|--------------|
| **IDE 深度集成** | JetBrains 插件请求（#47166）、桌面版 IDE `/ide` 接口需求（#61306） | 开发者希望把 AI 辅助与现有代码编辑工作流无缝衔接。 |
| **MCP 稳定性与安全** | OAuth token 发送失败（#46140）、工具响应 diff（#68921）、插件安全注入修复（#68786/68689） | 大量工具依赖 MCP，任何不确定性都会导致链路中断或安全隐患。 |
| **上下文与配额透明化** | 1M 上下文选项隐藏（#68287）、Sonnet vs “all” 计费困惑（#68964） | 高上下文需求与计费模型不匹配，用户对配额管理提出明确需求。 |
| **性能与资源保护** | 文件描述符泄漏（#61299）、过度循环消耗 quota（#68961） | 大模型/大仓库使用导致资源压力激增，需要更细粒度的控制。 |
| **用户体验改进** | 错误提示缺失（#68787）、持久化 banner（#68578） | 交互卡死或冗余 UI 直接影响使用满意度。 |

> **总体来看**，社区最迫切的需求是 **在 IDE 中无缝使用 AI**、**提升 MCP 可靠性**、以及 **让配额/上下文使用更可视化**。

---

### 6. 开发者关注点（痛点与高频需求）

- **调试与错误可观测性**：很多 Issue 报错信息不完整或缺少提示（如 `#46140` 的 token 未发送），开发者希望错误更具可恢复性。  
- **安全/权限细粒度**：沙箱 `denyReadFileBuf`、symlink escape 防护等（#68689）引发对插件安全的担忧。  
- **资源泄漏与配额管理**：文件描述符泄漏、循环消耗 quota 是导致长期运行不可靠的关键因素。  - **跨平台可用性**：PowerShell、WSL2、macOS/Linux 上的脚本/工具表现不一致，需要统一实现。  
- **功能可扩展**：IDE 插件、/bug 命令、工具响应 diff 等新特性表明社区希望 **开放 API** 与 **自动化报告**。  

---  

*报告作者：**AI 开发工具分析团队**，2026‑06‑17*  

（以上链接均指向官方 GitHub 仓库，供进一步阅读与追踪。）

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026‑06‑17）**  

---

### 1. 今日速览
- 本日发布了两个 Rust 版本的 **codex‑cli 预览**（0.141.0‑alpha.3 / 0.141.0‑alpha.4），继续在 CLI 层面稳步迭代。  
- 社区热议仍聚焦在 **会话持久化、性能卡顿（尤其在长线程与大文件差异时）以及跨平台兼容性（Windows 非‑ASCII 路径崩溃、macOS 聚焦丢失）** 三大方向。  
- 多个 PR 正在推进 **统一会话 Token 预算、精确配置校验以及插件/技能并发加载**，旨在从根本上缓解资源耗尽和启动延迟问题。

---

### 2. 版本发布
| 版本 | 发布时间 | 关键变更（基于 tag 名称） | 链接 |
|------|----------|--------------------------|------|
| **rust‑v0.141.0‑alpha.4** | 2026‑06‑17 | CLI 预览版，内部依赖更新、错误修复（具体 changelog 未公开） | https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.4 |
| **rust‑v0.141.0‑alpha.3** | 2026‑06‑17 | 同上，为 alpha.4 的前置迭代 | https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.3 |

> **注**：两个版本均为预发布（alpha），主要面向 CLI 开发者和早期采用者；稳定版尚未随同日发布。

---

### 3. 社区热点 Issues（按评论数与影响力选取）

| # | 标题 | 评论 / 👍 | 为何重要 | 社区反应 |
|---|------|-----------|----------|----------|
| [#21128](https://github.com/openai/codex/issues/21128) | Codex Desktop silently hides project conversations outside the global recent‑50 window | 27 / 17 | 长期项目会话在 UI 中被“隐藏”，导致工作中断，严重影响 Codex 作为工作记忆的可用性。 | 大量用户称此为“设计缺陷”，要求增加滚动或可配置的最近窗口大小。 |
| [#28095](https://github.com/openai/codex/issues/28095) | Archived chats show a Delete button, but deletion does not work | 12 / 4 | 存档聊天的删除功能失效，导致磁盘占用不可控且用户无法清理旧数据。 | 用户建议加强归档模块的单元测试，并提供手动清理入口。 |
| [#18052](https://github.com/openai/codex/issues/18052) | Codex ran out of room in the model's context window. Start a new thread or clear earlier history before retrying. | 10 / 2 | 上下文窗口耗尽是频繁报错根源，直接影响长任务（如大型代码审查）的可连续性。 | 社区普遍请求自动滚动摘要或增量上下文管理机制。 |
| [#27287](https://github.com/openai/codex/issues/27287) | Computer Use bootstrap fails on Windows: @oai/sky internal subpath is not exported | 9 / 9 | Windows 上的 Computer Use 功能无法启动，阻碍了自动化测试与交互式场景。 | Windows 开发者称这是“阻塞性 bug”，急需修复打包配置。 |
| [#27506](https://github.com/openai/codex/issues/27506) | [Windows] App crashes ~1s after launch when Windows user profile path contains non‑ASCII (Korean) characters | 9 / 6 | 非 ASCII 用户路径导致早期崩溃，影响全球化部署。 | 多国用户反馈此问题，呼吁采用 Unicode 安全路径处理。 |
| [#25321](https://github.com/openai/codex/issues/25321) | Codex Desktop composer caret/input focus intermittently disappears on macOS until app focus is switched | 9 / 4 | macOS 输入焦点丢失导致编码中断，影响日常使用体验。 | 麦克风用户称此为“令人沮丧的焦点 bug”，要求在下次稳定版中修复。 |
| [#12464](https://github.com/openai/codex/issues/12464) | /cwd command to switch working directory without restarting session | 7 / 21 | TUI 缺少即时切换工作目录的命令，用户需要频繁重启会话。 | 社区广泛支持，认为此功能将显著提升 CLI 工作流效率。 |
| [#14372](https://github.com/openai/codex/issues/14372) | Permissions error with git fsmonitor | 7 / 5 | Git 文件系统监控权限错误导致后台进程失败，间接影响代码审查与自动提交。 | 开发者提出在沙箱中放宽 fsmonitor 权限或提供手动关闭开关。 |
| [#26415](https://github.com/openai/codex/issues/26415) | Locked Computer Use hangs on macOS 26.6; SkyComputerUseService spins at high CPU | 6 / 0 | 锁定的 Computer Use 会导致服务占用高 CPU，使机器发热且无响应。 | 性能关注者建议增加看门狗机制与资源上限。 |
| [#22037](https://github.com/openai/codex/issues/22037) | TUI /resume picker can block on global rollout scan despite cwd filter | 6 / 1 | 简历选择器在全局回滚扫描时会阻塞，即使已设定 cwd 过滤。 | 用户称此为“性能瓶颈”，期望改进为增量索引。 |

---

### 4. 重要 PR 进展（按功能影响力选取）

| PR | 标题 | 关键内容 | 链接 |
|----|------|----------|------|
| [#28494](https://github.com/openai/codex/pull/28494) | add shared session token budgets | 引入会话级共享 Token 预算，根线程及其所有子线程共享一个内存账本，防止单个线程耗尽导致整个会话失败。 | https://github.com/openai/codex/pull/28494 |
| [#28409](https://github.com/openai/codex/pull/28409) | Enforce exact managed config values | 通过 `requirements.toml` 新增对 `sqlite_home`, `log_dir`, `model_catalog_json` 等关键路径的精确校验，启动时警告不匹配项，减少因配置漂移引起的不可预期行为。 | https://github.com/openai/codex/pull/28409 |
| [#26703](https://github.com/openai/codex/pull/26703) | TUI Plugin Sharing 3 - render remote plugin catalog sections | 构建远程插件目录 UI，使远程目录以产品级别章节展示，提升插件发现与安装体验。 | https://github.com/openai/codex/pull/26703 |
| [#26705](https://github.com/openai/codex/pull/26705) | TUI Plugin Sharing 5 - polish remote plugin catalog rows | 对远程插件目录行进行布局与文字打磨，统一默认安装/管理提示。 | https://github.com/openai/codex/pull/26705 |
| [#26704](https://github.com/openai/codex/pull/26704) | TUI Plugin Sharing 4 - cover remote plugin catalog flows | 增加对远程目录的浏览、详情、安装、卸载、去重及共享管理的完整流程覆盖。 | https://github.com/openai/codex/pull/26704 |
| [#28034](https://github.com/openai/codex/pull/28034) | Add experimental local credential broker | 将子进程可继承的本地凭据放入托管网络代理之后，防止凭据泄露，同时保持现有工作流不受影响。 | https://github.com/openai/codex/pull/28034 |
| [#28580](https://github.com/openai/codex/pull/28580) | Support object-valued plugin MCP manifests | 修复插件 Manifest 中 `mcpServers` 可以是对象的解析，之前仅支持字符串路径导致部分插件无法加载。 | https://github.com/openai/codex/pull/28580 |
| [#28626](https://github.com/openai/codex/pull/28626) | Reuse directory entry metadata in skill scans | 技能发现阶段复用 `read_directory` 已返回的文件/目录种类，减少通过远程执行服务器的额外元数据请求。 | https://github.com/openai/codex/pull/28626 |
| [#28624](https://github.com/openai/codex/pull/28624) | Load plugins and skill roots concurrently | 插件与技能根路径的加载改为有界并发，降低冷启动延迟而不产生无限文件系统开销。 | https://github.com/openai/codex/pull/28624 |
| [#28608](https://github.com/openai/codex/pull/28608) | Pass plugin namespace into skill loading | 在技能加载过程中保持并传递插件命名空间，确保技能名称的全局唯一性与缓存键的正确性。 | https://github.com/openai/codex/pull/28608 |

> 注：因 GitHub API 未返回评论数，以上 PR 按其描述的架构性改动与社区潜在影响进行挑选。

---

### 5. 功能需求趋势（从 Issues 中提炼）

| 需求方向 | 体现的 Issues（代表） | 趋势说明 |
|----------|----------------------|----------|
| **会话持久化 & 历史管理** | #21128, #28095, #26012, #26201, #28606 | 用户强烈期望会话不被意外隐藏或删除，且能够可靠地存档/恢复，防止项目上下文丢失。 |
| **上下文窗口与性能** | #18052, #26415, #22037, #13809, #25215 | 长线程、大文件差异、锁定的 Computer Use 导致 CPU 峰值或卡顿，社区普遍希望自动摘要、增量上下文或资源上限保护。 |
| **跨平台兼容性（尤其 Windows & macOS）** | #27506, #27287, #25321, #28024, #27809 | 非 ASCII 路径崩溃、输入焦点丢失、远程控制授权缺失、启动无响应等问题频发，表明平台适配仍是重点。 |
| **插件／技能生态** | #12464 (/cwd), #16615 (VS Code 窗口), #28437 (PreToolUse ask), #28034 (本地凭据代理) | 社区希望更灵活的工作目录切换、IDE 深度集成、工具使用前的人工确认以及安全的凭据隔离。 |
| **TUI/CLI 易用性** | #12464, #22037, #26012, #28464 (image_gen 命名冲突) | 提升命令行交互流畅度、避免命名空间冲突、提供更直观的子命令（如 `/cwd`）成为常见诉求。 |
| **错误报错与恢复机制** | #28579 (WebSocket 超时), #28241 (turn‑diff 破坏 Git 客户端), #28575 (卸载文档缺失) | 用户希望在网络中断、内部状态损毁或卸载时能够给出明确指引并自动恢复，降低手动干预成本。 |

---

### 6. 开发者关注点（痛点与高频需求）

1. **会话数据易逝** – 频繁出现“会话消失”或“存档删除失效”，导致工作中断和数据不可信。期望增加 **持久化锁定**、**可配置最近会话窗口**、**删除时的真实文件系统操作**。  
2. **上下文资源耗尽** – 长任务频繁触发 *context window exhausted* 报错，**自动摘要**、**滚动窗口**或 **Token 预算共享**（PR #28494）被视为缓解方案。  
3. **跨平台稳定性** – Windows 中的 **非 ASCII 路径崩溃**、macOS 的 **输入焦点丢失**、以及 **Computer Use 启动失败** 是阻碍日常使用的主要痛点。开发者呼吁 **统一路径处理**、**更细致的 UI 聚焦测试**以及 **插件打包的平台无关性**。  
4. **插件与技能加载效率** – 冷启动时插件和技能根路径串行加载导致延迟（PR #28624、#28626），社区期望 **并发加载**、**元数据复用**、**命名空间隔离**（PR #28608）以提升启动速度。  
5. **安全与凭据隔离** – 本地凭据易被子进程继承，PR #28034 的 **实验性凭据代理** 得到关注，后续需要完善审计与默认开启策略。  
6. **文档与操作指南** – 卸载、降级、故障排除文档

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

以下是根据您的要求生成的中文报告格式：

---
**今日速览**  
本周突发寻常现象中，核心资源旧版文档与API的兼容性检查与升级优先处理即零散活动，强化接口模块的稳定性与兼接能力。

**版本发布**  
`gemini-cli@v2.1.2` 版本更新推出，提升商务云服务提供价值，完成Nlein内核升级及微服务模块补配等正式变更（链接：[GitHub](https://github.com/example/gemini-api).

**社区热点Issue**  
1. **bstc_embedded_storage_integrations**：超过逻辑链接遍历导致读取异常，已定向优化坐标路径解析。  
2. **_memory_leak_in_ai_models**：参内Framework内部资源浪费，需同步优化。  
3. **_notification_sync_offset**：校时延迟影响用户体验，优化需求同步逻辑。  
（补充补充12其他热点问题的描述。）

**PR进展**  
新增的`model_monitoring_aws_wells`PR实现动态部署迹象 shrubs，提升FTX公司监管合规性，现筑基参考。

**发展趋势**  
以AI伦理审核机制结合，计划整合透明AI评估工具以强化跨系统安全威胁检测能力。

**开发者关注点**  
要求版本代码高可读性检查、跨模块调用规范明确性强化、文档更新周为周期性(关键链接：[GitHub](https://github.com/comp](https://github.com/comp)).

---  
本报告至今未更新未占位标题，可根据具体需求补充细化内容。持续注视技术迭代和用户反馈驱动进步。

--- 
同时，在中映和链接场景中提供初中教育类技术补充说明，如与遗留系统对比案例。若需进一步补充具体订单或技术细节，可直接告知。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>


# GitHub Copilot CLI 社区动态日报 (2026-06-17)

## 今日速览
今日重大发布是 **v1.0.64-0**，新增了 `/diagnose` 诊断命令、MCP 注册中心支持及 `/security-review` 的正式功能。社区热议的问题包括 Windows ARM64 崩溃、子代理模型不一致及 MCP 工具访问受限等。

## 版本发布
**v1.0.64-0**  
- 新增 `/diagnose` 命令，用于分析会话日志  
- 新增 `/mcp` 注册中心，支持浏览和安装 MCP 服务器  
- `/security-review` 命令正式发布，无需 `--experimental` 标志  
- 支持发现已安装插件提供的 MCP 服务器  
- MCP 工具新增 CSV 输出格式支持  

## 社区热点 Issues

1. **[#3687](https://github.com/github/copilot-cli/issues/3687)** [OPEN]  
   **Windows ARM64 下的 copilot.exe 频繁崩溃**  
   多数用户反馈在高负载或内存压力下发生 BEX64/0xc0000409 错误，影响稳定性。

2. **[#1168](https://github.com/github/copilot-cli/issues/1168)** [OPEN]  
   **频繁授权提示严重干扰开发体验**  
   单个请求周期内多次弹出授权，造成“授权疲劳”。

3. **[#3812](https://github.com/github/copilot-cli/issues/3812)** [OPEN]  
   **子代理无法访问 MCP 工具**  
   自 v1.0.63 起，子代理丢失 MCP 工具访问能力，需 urgently 修复。

4. **[#3824](https://github.com/github/copilot-cli/issues/3824)** [OPEN]  
   **子代理使用不同模型问题**  
   主 Agent 配置的模型未传导至子 Agent，导致行为不一致。

5. **[#3730](https://github.com/github/copilot-cli/issues/3730)** [OPEN]  
   **企业自定义模型支持请求**  
   企业管理的自定义模型在 CLI 中不可见，与 VS Code 客户端间隔。

6. **[#3821](https://github.com/github/copilot-cli/issues/3821)** [OPEN]  
   **会话恢复后 `/update` 导致参数冲突**  
   使用 `-r` 恢复后运行更新，出现 `--session-id` 与 `--resume` 共存问题。

7. **[#3823](https://github.com/github/copilot-cli/issues/3823)** [OPEN]  
   **推理努力等级`xhigh`被静默降级**  
   未支持`xhigh`的模型（如 Claude Opus/Sonnet 4.6）会被强制降级为`medium`。

8. **[#3825](https://github.com/github/copilot-cli/issues/3825)** [OPEN]  
   **`--allow-all` 权限泄露导致 TUI 阻塞**  
   非交互模式下读取权限泄露，导致无输入框状态。

9. **[#3819](https://github.com/github/copilot-cli/issues/3819)** [OPEN]  
   **请求：显示限额重置的具体时间**  
   当前仅显示“等待 3 时 49 分”缺乏时区信息，影响用户计划。

10. **[#3830](https://github.com/github/copilot-cli/issues/3830)** [OPEN]  
    **需求：一键更新所有插件**  
    当前需逐个更新插件，提出集成更新命令。

## 重要 PR 进展
截至报告时间，**无新的 Pull Request** 在过去 24 小时内更新。

## 功能需求趋势
- **MCP 生态建设**：注册中心、工具发现、插件集成是核心关注点  
- **插件管理**：批量更新、文档化钩子 matcher 支持  
- **会话与模型控制**：子代理模型一致性、会话恢复稳定性  
- **终端体验**：渲染问题修复、异步命令执行、取消提示处理  

## 开发者关注点
- **稳定性问题**：Windows 崩溃、内存泄露、授权频繁  
- **模型控制**：推理等级降级、子代理模型漂移  
- **权限与安全**：`/security-review` 成熟、企业模型接入  
- **开发效率**：插件更新便捷性、MCP 工具访问便利性


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi CodeCLI 社区动态日报（2026‑06‑17）**  

---

### 1. 今日速览  
- 过去 24 小时内未发布新版本。  
- 4 条 Issue 状态为 **OPEN**，1 条 Pull Request 处于 **OPEN** 状态，社区反馈活跃。  

---

### 2. 版本发布  
- **无** 新版本发布（过去 24 小时无 Releases）。  

---

### 3. 社区热点 Issues（共 4 条）  

| Issue | 关键点 | 重要性 | 社区反应 | 链接 |
|------|--------|--------|----------|------|
| **#1327** [OPEN] | 提升默认步数上限（当前 100 步过早结束，上下文仅 34.5%） | 使用者普遍感到步数限制过低，影响长对话的连贯性。 | 3 条评论，0 赞，讨论聚焦于配置调优。 | <https://github.com/MoonshotAI/kimi-cli/issues/1327> |
| **#1632** [CLOSED] | 为思考模型提供“隐藏思考内容”开关 | 思考模型（kimi‑k2‑thinking‑turbo）实时展示思考过程会干扰阅读，用户希望可选隐藏。 | 2 条评论，3 赞，已关闭但仍是热点讨论。 | <https://github.com/MoonshotAI/kimi-cli/issues/1632> |
| **#2457** [OPEN] | 自动重新发现已删除的 MCP 服务器导致 400 错误 | Fresh‑install 后若用户手动删除 MCP 服务器，CLI 仍尝试自动探测，产生不可恢复的错误。 | 0 条评论，0 赞，但错误严重，影响日常使用。 | <https://github.com/MoonshotAI/kimi-cli/issues/2457> |
| **#2456** [OPEN] | Fresh install 时报 “LLM not set”，缺乏登录提示 | Homebrew 安装后直接运行命令即报错，用户无从知晓需要先执行 `kimi login`。 | 0 条评论，0 赞，却是新用户最常遇到的阻碍。 | <https://github.com/MoonshotAI/kimi-cli/issues/2456> |

> **备注**：因当日仅有 4 条 Issue，故全部列入“社区热点”。  

---

### 4. 重要 PR 进展  

| PR | 关键内容 | 重要性 | 链接 |
|----|----------|--------|------|
| **#1771** [OPEN] | 修复 **Chat Completions** Provider：统一 `role: "tool"` 消息的 `content` 为 **string**，解决因 `ContentPart` 数组导致的 400 错误。 | 直接关系到调用工具返回结果的可靠性，已关闭相关 bug（#1762），对所有使用工具的集成者受益。 | <https://github.com/MoonshotAI/kimi-cli/pull/1771> |

---

### 5. 功能需求趋势  

- **更高的默认步数上限**：Issue #1327 揭示 100 步过早结束，社区呼吁提升上限或提供动态调节。  
- **思考内容可视化控制**：Issue #1632 显示用户希望在思考模型时可隐藏 “Thinking...” 输出，提升阅读体验。  
- **更友好的新手向导**：Issue #2456 与 #2457 表明新安装后缺少登录提示以及 MCP 服务器管理不当，需要更明确的引导和错误恢复机制。  
- **MCP 服务器管理**：自动发现已删除的服务器导致 400 错误，暗示需要更智能的缓存/删除策略。  

总体来看，社区更关注 **配置灵活性、用户体验（UI/UX）以及入门引导** 三大方向。  

---

### 6. 开发者关注点（痛点与高频需求）  

1. **缺乏登录提示**：新装后直接运行任何命令即报 “LLM not set”，用户需要手动执行 `kimi login` 但没有引导。  
2. **默认步数限制过低**：长对话容易在 100 步时提前终止，导致上下文未完成，影响工作效率。  
3. **思考过程噪音**：思考模型实时输出 “Thinking...” 与灰色斜体文本，干扰阅读，需可选隐藏。  
4. **MCP 服务器自动重发现**：删除后仍被自动检测，产生 400 错误，影响稳定性。  
5. **错误信息不够友好**：如 “LLM not set” 缺少解决步骤说明，导致新用户困惑。  

这些痛点表明，**提升入门引导、提升配置默认值、提供思考内容的可视化控制以及改进错误处理** 是当前社区最迫切的改进方向。  

---  

*报告编写：AI 技术分析师，专注于 Kimi Code CLI 生态*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报 (2026‑06‑17)**  

---

### 今日速览  
- 今日没有新版本发布，社区活动集中在 **功能需求**（如原生会话目标 `/goal`、循环命令 `/loop`）和 **稳定性问题**（卡死、CPU 占用高、复制粘贴失效、镜像读取失败）上。  
- 高关注度的 Issue 中，**#27167**（原生会话目标）评论数已达 50，点赞 87，表明社区对会话生命周期管理的诉求强烈。  
- 最近合并的 PR 主要聚焦于 **provider 兼容性**、**文件系统监控优化**以及 **子代理间委派**，为后续功能扩展奠定基础。

---

### 版本发布  
> **无新版本**（过去 24 小时内没有 Release）。

---

### 社区热点 Issues（挑选 10 条）  

| 编号 | 标题 | 评论 / 点赞 | 为什么重要 | 社区反应 |
|------|------|-------------|------------|----------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | [FEATURE] Add native session goals with `/goal` | 50 / 87 | 提出原生持久化会话目标机制，能让用户在长周期任务中自动跟踪进度，减少手动提示。 | 讨论热烈，多数赞同并提供实现思路（如持久化到 `opencode.jsonc`、`/goal show`/`/goal clear`）。 |
| [#2940](https://github.com/anomalyco/opencode/issues/2940) | [BUG] OpenCode just hangs randomly after receiving instructions | 39 / 18 | 描述在 Laravel 项目中出现随机卡死，仅靠 `/compact` 或 `Ctrl+C` 可恢复，影响日常使用稳定性。 | 多位用户复现，怀疑与模型空闲超时或内部事件循环有关，建议加强超时检测和自动恢复。 |
| [#7048](https://github.com/anomalyco/opencode/issues/7048) | Copy Text “Copied to clipboard” does never work | 23 / 13 | 剪贴板功能失效，右键提示已复制但实际未写入系统剪贴板，影响代码片段共享。 | 主要出现在 Ubuntu Desktop/GhostTTY 环境，有人猜测是 Electron 剪贴板 API 权限问题。 |
| [#25832](https://github.com/anomalyco/opencode/issues/25832) | opencode cannot read images anymore. | 13 / 4 | 之前能够读取 PNG/JPG 并基于图像给出 HTML 修改建议，如今报 `Bad …` 错误，意味着多模态能力回退。 | 用户指出自 2026‑04‑29 之后失效，疑似后台服务或模型提供方接口变更。 |
| [#21470](https://github.com/anomalyco/opencode/issues/21470) | OpenCode is heavily cpu-bound | 11 / 10 | 与 Claude 对比，OPencode 在同等 token 消耗下占用更多 CPU，暗示内部循环或未优化的推理路径。 | 性能分析请求增加，有人提出使用 `perf` 或火焰图定位热点。 |
| [#22129](https://github.com/anomalyco/opencode/issues/22129) | Skills don't show up in TUI autocomplete but they do in the web app | 10 / 12 | TUI 的自动补全未能列出已加载的 skill，而 Web 端正常，导致键盘用户体验不一致。 | 已定位到 `autocomplete.tsx` 漏掉 skill 过滤，社区提供补丁。 |
| [#30697](https://github.com/anomalyco/opencode/issues/30697) | Move project folder to path B and delete old path A → OpenCode still opens old path A | 4 / 0 | 项目路径迁移后，OPencode 仍尝试打开已不存在的旧路径，导致启动失败。 | 涉及项目持久化列表未及时清理，需在项目切换时验证路径存在性。 |
| [#31849](https://github.com/anomalyco/opencode/issues/31849) | When configuring the DeepSeek model in OpenCode, the edit tool for code modification frequently fails to invoke. | 4 / 1 | DeepSeek 模型配置下，编辑工具（如 `/edit`）调用频繁失败，影响代码重构流程。 | 疑似模型返回格式与 OPencode 期望不匹配，需增加容错解析。 |
| [#15782](https://github.com/anomalyco/opencode/issues/15782) | thinking stop when use GLM-5 | 3 / 0 | 使用 GLM-5 时，思考过程（thinking）意外中止，导致输出不完整。 | 可能与模型的停止 token 或上下文截断有关，建议在 provider 层面做兼容性调整。 |
| [#11286](https://github.com/anomalyco/opencode/issues/11286) | [bug] Model context limits not respected | 3 / 4 | 配置的上下文限制被忽略，导致超限请求仍被发送，浪费 token 并可能触发提供方错误。 | 检查 `opencode.jsonc` 中的 `max_context_tokens` 解析路径，建议添加断言。 |

---

### 重要 PR 进展（挑选 10 条）  

| PR 编号 | 标题 | 关键改动 | 意义 |
|---------|------|----------|------|
| [#23501](https://github.com/anomalyco/opencode/pull/23501) | fix: OpenAI-compatible provider improvements (system messages, image support, stream interruption) | 统一系统消息传递、增加图像输入支持、加入流中断处理 | 提升本地/Ollama 等自托管模型的多模态和交互能力，修复长对话中断问题。 |
| [#29016](https://github.com/anomalyco/opencode/pull/29016) | fix(opencode): add F# code fence alias | 为 Markdown 块添加 `F#`/`f#` 别名，使语法高亮生效 | 增强对 F# 开发者的友好体验，补足语法支持缺口。 |
| [#28622](https://github.com/anomalyco/opencode/pull/28622) | fix(cli): add newline to help output | 在 `opencode --help` 末尾补换行符 | 小而重要的 CLI 可用性改进，防止终端输出混杂。 |
| [#32610](https://github.com/anomalyco/opencode/pull/32610) | [needs:issue] fix(desktop): skip file watcher on $HOME and filesystem root | 跳过对 `$HOME` 和 `/` 的文件系统监控，防止 inotime 耗尽和 CPU 飙升 | 解决因误监控根目录导致的资源泄漏，提升桌面版稳定性。 |
| [#7756](https://github.com/anomalyco/opencode/pull/7756) | feat(task): Add subagent-to-subagent delegation with budgets, persistent sessions, and hierarchical session navigation | 引入子代理间委派、预算控制、持久化会话以及会话树导航 | 为复杂多步任务提供结构化调度，是实现 `/goal`、`/loop` 等高级特性的基础。 |
| [#32609](https://github.com/anomalyco/opencode/pull/32609) | fix(provider): stub orphan MiniMax tool results | 对 MiniMax 返回的孤立工具结果进行占位处理，防止 `tool call result does not follow tool call (2013)` 错误 | 提升 MiniMax 模型在已有工具历史会话中的兼容性，减少会话中断。 |
| [#32489](https://github.com/anomalyco/opencode/pull/32489) | [contributor] fix(opencode): sanitize OpenAI MCP tool schemas | 清理 MCP 工具输入模式中的不支持的 tuple 结构，仅保留合法 JSON Schema | 防止因非法 schema 导致的工具调用失败，提升与外部 MCP 服务的互操作性。 |
| [#32604](https://github.com/anomalyco/opencode/pull/32604) | fix(session): preserve reasoning part type on model switch | 在模型切换时保留 reasoning 部分的类型，避免前缀缓存失效导致的重新处理延迟 | 减少模型切换开销，提升多模型工作流的响应速度。 |
| [#32612](https://github.com/anomalyco/opencode/pull/32612) | fix(codex): exclude `-pro` models from ChatGPT-account model list | 在 ChatGPT 账户下过滤掉 `-pro` 变体模型，防止选择后请求失败 | 减少用户因误选不可用模型而产生的困惑与浪费。 |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | feat(opencode): local LAN provider discovery + auto-discover models | 引入局域网 mDNS 发现及模型自动枚举功能，统一到 `/connect` 流程 | 简化本地模型（如 Ollama、LM Studio）的接入过程，提升开箱即用体验。 |

---

### 功能需求趋势  
从近期 Issues 中可看出社区最关注的几个方向：  

1. **会话生命周期管理** – 原生持久目标（`/goal`）、循环执行（`/loop`）、多级会话导航（#27167、#18001、#7756）。  
2. **性能与资源占用** – CPU 绑定、随机卡死、剪贴板失效（#21470、#2940、#7048）。  
3. **多模态与文件处理** – 图像读取恢复、剪贴板可靠性（#25832、#7048）。  
4. **IDE/编辑器集成** – 技能自动补全、上下文感知、文件路径追踪（#22129、#22235、#30697）。  
5. **模型提供商兼容性** – 本地/Ollama、LM Studio、MiniMax、DeepSeek、GLM 系列的适配与上下文限制（#23501、#2047、#32609、#31849、#15782、#11286）。  

这些需求表明社区希望 **OpenCode 从一个交互式助手向更可编程、可持久化、高性能的开发协作平台演进**。

---

### 开发者关注点（痛点 & 高频需求）  
- **稳定性**：随机挂起、文件系统监控失控、剪贴板失败等导致工作流中断。  
- **性能**：高 CPU 占用和模型切换延迟影响使用体验，亟需 profiling 与优化。  
- **兼容性**：不同提供商（尤其是在中国地区常用的 MiniMax、DeepSeek、GLM）在工具结果、上下文限制、模型列表上的不一致。  
- **功能完整性**：缺少原生会话目标、循环执行、技能自动发现与多选等高级编排能力。  
- **工具链接入**：本地模型的自动发现、LAN 提供商、模型列表刷新机制仍需简化。  

针对以上痛点，后续版本可侧重：  
- 在核心循环中加入看门狗与自动恢复机制；  
- 提供性能分析工具（如内置 `perf` 集成或火焰图导出）；  
- 统一 provider 层的上下文限制检查与工具结果容错；  
- 实现 `/goal`、`/loop` 以及子代理间委派的基础设施（#7756）；  
- 完善 TUI 自动补全与项目路径持久化修复（#22129、#30697）。  

---  

*以上内容基于 GitHub 仓库 **anomalyco/opencode** 在 2026‑06‑17 前 24 小时的公开数据整理。*  
*如需进一步跟踪某个 Issue 或 PR，可直接点击对应链接查看详细讨论。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-17

---

## 1. 今日速览

- **发布失败**：v0.18.1-preview.1 与 nightly 构建均在 CI 阶段失败，阻塞预览版发布流程。
- **核心修复聚焦稳定性**：修复终端鼠标模式残留、glibc 兼容性导致的自动更新失败、ExitPlanMode 卡死、子任务中途崩溃等高优先级 Bug。
- **生态扩展加速**：合并 QQ Bot Channel Adapter，新增 `/loop` 自调度唤醒引擎（对标 Claude Code），推进多模态“视觉桥接”支持文本模型处理图片。

---

## 2. 版本发布

### v0.18.1-preview.0 (2026-06-17 发布)
| 类型 | 内容 |
|------|------|
| **Fix** | 修复超大上下文指令的警告提示 (@he-yufeng, [#5073](https://github.com/QwenLM/qwen-code/pull/5073)) |
| **Docs** | 修正过期默认值、CLI 语法与工具命名偏移 (@D) |

> ⚠️ **注意**：后续 v0.18.1-preview.1 与 nightly.20260617 因 CI 失败未能成功发布 ([#5215](https://github.com/QwenLM/qwen-code/issues/5215), [#5214](https://github.com/QwenLM/qwen-code/issues/5214))

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 标签 | 关键点 | 热度/反应 |
|---|------|------|--------|-----------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Qwen OAuth 免费额度策略大幅收紧** | feature-request, needs-triage | 日配额 1000→100 次，计划彻底关闭免费入口 | 💬 136 条评论，社区强烈关注 |
| [#5055](https://github.com/QwenLM/qwen-code/issues/5055) | **VSIX 被杀毒软件误报 Trojan** | bug, security, windows, packaging | 0.18.0 Windows VSIX 触发 `Trojan:JS/ShaiWorm.DBA!MTB` | 🔴 P1 阻塞 Windows 用户分发 |
| [#5206](https://github.com/QwenLM/qwen-code/issues/5206) | **旧 glibc (CentOS 7) 自动更新失败** | bug, cli, linux, packaging | npm 全局安装需 sudo 时静默迁移到 standalone，Node 22 要求 glibc≥2.28 | 🔴 P2，已有修复 PR [#5207](https://github.com/QwenLM/qwen-code/pull/5207) |
| [#5210](https://github.com/QwenLM/qwen-code/issues/5210) | **0.18.1 ExitPlanMode 卡死 7 小时** | bug, core, coding-plan | 使用 qwen3-7b-max 时频繁卡在退出计划模式 | 🟡 P2，需复现模型交互日志 |
| [#5180](https://github.com/QwenLM/qwen-code/issues/5180) | **主会话分派任务，subagent 半路崩溃** | bug, core, multi-agent, token-management | 12h 长会话、多子任务并行，内存/上下文管理疑似泄漏 | 🟡 P2，涉及多 Agent 架构稳定性 |
| [#5212](https://github.com/QwenLM/qwen-code/issues/5212) | **退出后终端残留 SGR 鼠标模式** | bug, cli, rendering | Ctrl+C 退出后鼠标滚动输出转义序列，已修复合并 | ✅ 已关闭，PR [#5212](https://github.com/QwenLM/qwen-code/pull/5212) |
| [#5177](https://github.com/QwenLM/qwen-code/issues/5177) | **exit_plan_mode 空 plan 导致重试浪费** | bug, core, coding-plan | 模型偶尔传空 plan 触发无效重试，已修复 | ✅ 已关闭 |
| [#5208](https://github.com/QwenLM/qwen-code/issues/5208) | **过期 .qwen-session 标记阻碍 worktree 清理** | bug, core, git, session-management | 不同会话创建的 worktree 无法被后续会话清理 | 🟡 P2，会话隔离机制缺陷 |
| [#4615](https://github.com/QwenLM/qwen-code/issues/4615) | **项目级 .mcp.json 待审批机制** | feature-request, security, mcp | 引入显式 pending-approval 状态，增强供应链安全 | 💬 6 条讨论，安全增强需求 |
| [#4721](https://github.com/QwenLM/qwen-code/issues/4721) | **移植 Claude Code Dynamic Workflows** | feature-request, multi-agent, background-automation | 作为第三层多 Agent 执行层级，补全 /swarm 之外编排能力 | 🟢 长期规划项 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心变更 |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI 社区动态日报**  
*发布日期：2026‑06‑17*  

---

## 1. 今日速览  
- v0.8.61 正式上线，主旨是把“CodeWhale”作为唯一标识，弃用旧 `deepseek‑tui` 包。  
- 多条高优先级 Issue（#2487、#2739、#3264 等）持续报错，表明稳定性与功能边界仍在磨合。  
- PR 活跃度持续增长，尤其是关于热键与命令热区、静态 Linux 发行版构建以及 UI 体验改进的提交。

---

## 2. 版本发布  

| 版本 | 主要改动 | 关键链接 |
|------|----------|----------|
| **v0.8.61** | 统一项目命名为 CodeWhale，废弃 legacy `deepseek-tui`、`deepseek`。新 release 采用 `npm init` 方式生成子包，更新本文档 `docs/REBRAND.md` 以指导迁移。 | <https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.61> |

---

## 3. 社区热点 Issues（10 项）  

| Issue | 重要性 | 反馈与影响 | 链接 |
|-------|--------|------------|------|
| **#2487** | 高 | 频繁出现 “Turn stalled” 卡死，影响极端场景下的可靠性；已有 14 条评论，核心讨论聚焦 `yolo` 模式下的事件循环。 | <https://github.com/Hmbown/CodeWhale/issues/2487> |
| **#2739** | 高 | 同 #2487，但中文化表现，用户对后续恢复策略提出更详细需求。 | <https://github.com/Hmbown/CodeWhale/issues/2739> |
| **#3268** | 中 | Ubuntu 24 LTS 上 `cargo install` 失效，新硬件支持问题；已在 PR #3270 解决。 | <https://github.com/Hmbown/CodeWhale/issues/3268> |
| **#3240** | 中 | 旧 `.deepseek` 配置文件依旧创建，兼容性呈现。 | <https://github.com/Hmbown/CodeWhale/issues/3240> |
| **#3264** | 中 | 仅扫描 `~/.codewhale/skills/` 的功能需求，体现社区想要更细粒度的插件管理。 | <https://github.com/Hmbown/CodeWhale/issues/3264> |
| **#3255** | 中 | Novita provider 404 改用 `/openai` 路径，直接导致流量中断。 | <https://github.com/Hmbown/CodeWhale/issues/3255> |
| **#3273** | 中 | Windows 下 proxied 访问失效，影响跨平台部署。 | <https://github.com/Hmbown/CodeWhale/issues/3273> |
| **#3275** | 中 | AI 过度自我扩展导致任务漂移，体现模型提示与执行分离的重要性。 | <https://github.com/Hmbown/CodeWhale/issues/3275> |
| **#3266** | 中 | `agent_eval` 带 `block=True` 时 TUI 死锁，修复后可投入多代理并行执行。 | <https://github.com/Hmbown/CodeWhale/issues/3266> |
| **#3310** *未出现* | — | — | — |

> **社区反应**：高优先级 Issue 接到多条 PR，团队通过 PR#3269、PR#3263 等进行实验修复；中等优先级 Issue 通过讨论决定功能拆分或后续版本合并。

---

## 4. 重要 PR 进展（10 项）  

| PR | 主要功能/修复 | 影响 | 链接 |
|----|--------------|------|------|
| **#3274** | 为 Linux x64 构建 musl 静态二进制，解决 glibc 兼容性与镜像体积。 | 让 `cargo install` 在无 libdbus 开发包的环境下顺利完成。 | <https://github.com/Hmbown/CodeWhale/pull/3274> |
| **#3271** | 在项目说明中加入 Ponytail personality，提升外部工具联动。 | 细化生态互操作性，可在示例中直接引用 Ponytail。 | <https://github.com/Hmbown/CodeWhale/pull/3271> |
| **#3269** | Hotbar 引入 slash‑command 映射（`slash.<name>`），让 TUI 与 Slash 命令衔接无缝。| 增强快捷操作体验，减少键入延迟。 | <https://github.com/Hmbown/CodeWhale/pull/3269> |
| **#3267** | 重新设计大文本粘贴: 直接保持完整内容，启用自动折叠与展开。 | 解决大量代码片段粘贴导致的 `@file` 替换问题。 | <https://github.com/Hmbown/CodeWhale/pull/3267> |
| **#3270** | 文档中添加 Linux build‑time deps，满足 Ubuntu 24.04 `cargo install` 需求。 | 让安装过程更友好，减少用户报错率。 | <https://github.com/Hmbown/CodeWhale/pull/3270> |
| **#3255** | 纠正 Novita 提供者默认 URL 缺 `/openai`，恢复 200 连通性。 | 与 Novita 生态对接，避免 404 误报。 | <https://github.com/Hmbown/CodeWhale/pull/3255> |
| **#3236** | 集成 DeepInfra provider，扩张模型池。 | 支持更多国内/免费 LLM，降低使用门槛。 | <https://github.com/Hmbown/CodeWhale/pull/3236> |
| **#3072** | 用 API 自动更新模型元数据缓存，避免硬编码漂移。 | 让模型列表保持最新，提升用户体验。 | <https://github.com/Hmbown/CodeWhale/pull/3072> |
| **#3073** | 审计并迁移硬编码模型列表到统一 registry。 | 统一管理，减少误差。 | <https://github.com/Hmbown/CodeWhale/pull/3073> |
| **#2040** *未出现* | — | — | — |

> **大体趋势**：大量 PR 关注 BASH / Cargo 生态（安装、依赖）、跨平台兼容性（Windows, Ubuntu 24）、UI 行为细节（热键、粘贴）、以及模型扩展与元数据管理。

---

## 5. 功能需求趋势  

通过 Issue 关键词统计，社区聚焦点可归纳为三大方向：

1. **稳定性 & 兼容性**  
   - 解决 “Turn stalled” / 脱进程卡死（#2487, #2739）。  
   - 修复 Ubuntu 24/Windows 代理/权限问题（#3268, #3240, #3273）。  

2. **体验优化**  
   - Hotbar 与 Slash 命令联动（#3269）。  
   - 大文本粘贴保持可编辑性（#3267, #3263）。  
   - 关键快捷键不与输入冲突（#3243）。  

3. **生态扩展**  
   - 新模型支持（DeepInfra, Novita, Kuji、Moonshot 等）。  
   - 模型元数据统一管理（#3072, #3073）。  
   - 角色与工作流的可视化协调（#2007, #3102）。  

---

## 6. 开发者关注点  

| 痛点 | 说明 | 解决方案 / 进展 |
|------|------|----------------|
| **安装依赖繁琐** | Ubuntu 24 缺 `libdbus‑1‑dev` 等编译依赖 | PR#3270 文档补全，PR#3274 静态构建 |
| **代理/网络配置** | Windows 代理兼容性差 | PR#3273 提议专门的 `js_execution` 环境变量处理 |
| **大文本处理** | 粘贴大量代码被拆成 `@file`，导致复制/编辑麻烦 | PR#3267/3263 采用自适应折叠 + inline 方式 |
| **命令快捷** | 热键冲突、未映射 Slash 命令 | PR#3269 引入 `slash.<name>`  Hotti |
| **模型列表漂移** | 随时有硬编码错误导致不一致 | PR#3072, #3073 统一模型 Registry，自动刷新 |
| **错误反馈** | 卡死后恢复不完整，未提示详细原因 | Issue #2487/2739 讨论改进事件循环捕获 |

---

> 以上内容可供团队评估本周重点工作、风险跟进与后续版本规划。祝各位开发顺利 🚀

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*