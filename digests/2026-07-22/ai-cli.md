# AI CLI 工具社区动态日报 2026-07-22

> 生成时间: 2026-07-22 01:47 UTC | 覆盖工具: 9 个

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

## 📊 2026‑07‑22 主流 AI CLI 工具社区态势横向对比

---

### 1️⃣ 生态全景

当前 AI CLI 市场正从**单点能力整合**向**平台级生态**演进，各大阵营加速构建**多模态Agent化工作流**，同时面临**跨端稳定性**、**资源效率** 和 **安全合规** 等“标准”问题。IDE 深度集成、会话/上下文持久化以及细粒度模型/权限控制已成为主流竞争点。社区同时涌现出大批针对**长任务/多Agent 隔离**、**窗口/滚动/输入延迟**、**计费透明度**、**沙箱/RCE 风险** 的修复，表明**生产级可靠性** 是当前最迫切的需求。

---

### 2️⃣ 各工具活跃度量化（2026‑07‑22）

| 工具 | Issues（今日📍可选热点） | PRs（重要进度） | 发布状态（版本/事件） |
|------|-----------------------------------|--------------------------|--------------------------------|
| **Claude Code** | **10** 条（聚焦于 Fable 5 权限、Windows 全屏渲染、Marketplace UI、Plugin Hook 事件等） | **10** 条 PR（基于**No‑Fuse钩子**、**Emoji自动完成**、**写入警报** 等） | ✅ **v2.1.217** – 发布 Emoji 自动完成与会话写入警报 |
| **OpenAI Codex** | **10** 条（费率重置、Linux `bwrap` 沙箱回归、审计日志脱节、Windows 启动 UAC 崩溃等） | **10** 条 PR（分页上下文、`HttpClient` 登录、沙箱代理强化、进程树终止、网络策略回调等） | ✅ **rust‑v0.145.0** – 正式版，新增分页历史 + `/import` 迁移功 |
| **Gemini CLI** | **10** 条（RCE 修复、Generalist Agent 卡死、Auto Memory 无限重试、Shell 阻塞、Subagent 目标追踪、工具总数超限、变量扩展漏洞等） | **10** 条 PR（a2a‑server 安全补丁、凭证重置优化、PR 生成器、Shell 异步化、评估工具监控、技能维度遥测、临时文件释放、模型回退、Agent 时间限制等） | ✅ **v0.52.0‑nightly.20260722** – RCE 防护升级 + a2a 服务加固 |
| **GitHub Copilot CLI** | **10** 条（MCP 连接失败、OAuth 远程端点、计划模式 Shell 阻断、CAPI 5 MB 限制、资源提示支持、BYOK `reasoning‑effort`、加载卡住、tgrep OOM、子代理信用分摊、代理链显示等） | **1** 条公开发布 PR（#3163 – ViewSonic 监视器支持） | ✅ **v1.0.74‑0** – 发布 `/model plan` 命令 + 会话标题空格匹配优化 |
| **Kimi Code CLI** | **10** 条（UI 抖动、Moonshot API 400、Shell 子进程阻塞、Goal Mode 循环、模型/工具兼容等） | **10** 条 PR（shell 阻塞修复、JSON Schema 验证、工具钩子、键盘事件、Shell 异步流、临时文件清理、模型映射、诊断命令等） | — (无新版本；持续专注于 0.28.x 系列稳定维护) |
| **OpenCode** | **10** 条（内存泄漏变迁/回归、布局选项缺失、Go 订阅计费异常、WSL 崩溃、SQLite schema 迁移、Windows ARM64 TUI 启动失败、Web 布局锁定、审计/审计流失、Go 代理 400/401/500 等） | **10** 条 PR（时钟偏差重试、MiniMax M3 思维类型、补丁补丁验证强化、Linux 自定义标题栏、Solid 会话崩溃、CodeMode 生成器函数、截断工具参数、目录增量渲染、系统消息缓存、通知状态延迟） | — (24 小时内无 Release) |
| **DeepSeek TUI (CodeWhale)** | **10** 条（Fable/Constitution 复用、长输出滚动、Enter 延迟、子 Agent 隔离、路由模型/显式限额、Worktree 定位等） | **16** 条 PR（0.9.1 发布准备、Shell 隔离、Enter 确认异步、PTV 滚动回归测试、路由限额、运行时 API 注册、流式进度、Moonshot 参数清洗、命令边界重构、HarmonyOS TUI 移植等） | — (当前稳定版 0.9.0，0.9.1 发布完全看板进行中) |
| **Pi** / **Qwen Code** | *(无公开 Issue/PR 摘要数据)* | *(无公开数据)* | *(无公开版本活动信息)* |

*注：问题与 PR 计数基于当日精选的社区热点；表示社区活跃范围，而非 GitHub 仓库的总数据库量。*

---

### 3️⃣ 共同关注的功能方向

| 功能方向 | 工具体现 | 典型诉求 / 问题 |
|----------|----------|--------------|
| **🗂️ Agent 隔离与工作目录** | DeepSeek TUI、Claude Code、Copilot CLI | 子 Agent 是否正确使用独立工作树/上下文；“shell‑mkdir” 崩溃、父目录污染。 |
| **🖥️ UI/滚动/输入延迟** | DeepSeek TUI、Claude Code、Gemini CLI、OpenCode | 长输出无法滚动、`Enter` 延迟/卡顿、确认弹窗遮挡核心 UI，导致操作体验恶化。 |
| **⚡ 多进程 Shell 异步与内存管理** | OpenAI Codex、Gemini CLI、Kimi Code、DeepSeek TUI | 任务执行抖动/阻塞、内存使用猛增/泄漏、CPU/磁盘压力失控。 |
| **🔒 RCE 安全加固与沙箱强化** | Gemini CLI、OpenCode、OpenAI Codex | 远程代码执行风险、沙箱启动失败、凭证/令牌泄漏、联盟代理网络策略薄弱。 |
| **💸 计费/订阅透明度与模型选择** | Claude Code（Fable 5 计费）、Copilot CLI（子代理分摊）、OpenCode（Go 代理错误）、OpenAI Codex（费率重置） | 付费用户发现余额不足、模型无法用、费用无法追踪，需更可预测的计费模型。 |
| **🔌 IDE/编辑器深度集成** | Claude Code（VSCode 扩展）、OpenCode（Web 布局）、Copilot CLI（"Open In" 菜单）、Gemini CLI（Editor 模式） | 插件 Market UI 失效、远程 SSH 扩展加载失败、Layout 选项缺失，直接影响生产力。 |
| **🏗️ 多平台可靠性（Windows ARM64、WSL、Linux bwrap 等）** | OpenCode、OpenAI Codex、DeepSeek TUI、Claude Code | UAC 启动崩溃、WSL Sidecar 死锁、bwrap `RTM_NEWADDR` 失败、ARM64 TinyCC dlopen 错误等。 |
| **📊 会话/上下文持久化与分页** | OpenAI Codex（分页历史）、Claude Code（会话保存警报）、Gemini CLI（Agent 会话）、Kimi Code CLI（Goal 模式） | 会话承载长对话、上下文不一致、多端同步断裂、过往上下文丢失。 |
| **🛠️ Plugin Hook / 生命周期控制** | Claude Code (hookify)、OpenCode (CodeMode hooks)、DeepSeek TUI (#1917)、Gemini CLI (Tool 生命周期) | 事件名称冲突 (`prompt` vs `user_prompt`)、Hook 机制对环境变量依赖性、Cancel/Pause/Resume 控制接口缺失。 |
| **📦 本地推理与模型自动发现** | OpenAI Codex (OpenAI‑compatible provider)、OpenCode (#6231)、Gemini CLI (local)、Kimi Code (Moonshot API) | `opencode.json` 手动维护、供应商模型变更、MDL 策略难以应用。 |

---

### 4️⃣ 差异化定位分析

| 工具 | 主要价值主张 | 目标用户 / 使用场景 | 技术路线要旨 |
|------|--------------|----------------------|--------------|
| **Claude Code** | **AI 原生编辑器集成** – 富 UI 输入（Emoji 自动补全）、会话安全警报、Marketplace 插件生态。 | 构建 AI 辅助 IDE 流的工作者（开发者、文档作者）。 | 基于 Anthropic 模型，Claude 3.5/Opus 计费单元，插件 Hook 丰富，跨端 UI 状态托管。 |
| **OpenAI Codex** | **高性能、开源 CLI 引擎** – Rust 驱动，分页上下文，分布式模型与 `/import` 迁移吞吐量。 | CLI 深度使用者、自动化运维、CI/CD 脚本工具箱。 | 纯 Rust 后端，OpenAI 兼容 API，沙箱隔离，关注子代理状态与细粒度资源控制。 |
| **Gemini CLI** | **安全第一的企业级 Agent 框架** – RCE 防护、工作区隔离、质量闭环（评估工具追踪）。 | 企业安全与合规团队，需要多 Agent 编排、复杂 Reasoning 工作流。 | 以 `a2a` 服务为核心，语音转换功能，跨平台沙箱。 |
| **GitHub Copilot CLI** | **GitHub 原生 AI 助手** – 集成 GitHub 服务，`plan` 模式动态模型选择，MCP 支持 OAuth 远程端点。 | GitHub 开发者、DevOps、持续协作团队。 | Copilot 模型 + GitHub API + 选项化的 MCP 插件。 |
| **Kimi Code CLI** | **本地化中文开发者工具** – Moonshot API 适配、Goal 模式工作流、Shell 性能优化及内存友好。 | 中文开发

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

这是一份基于 `anthropics/skills` 仓库数据的技术分析报告。

---

# 🚀 Claude Code Skills 社区热点报告 (Data as of 2026-07-22)

## 1. 热门 Skills 排行
根据 Pull Request 的讨论热度与功能复杂度，以下是目前社区关注的核心 Skill 开发动态：

| 排名 | Skill 名称 | 功能概述 | 社区热点/技术难点 | 当前状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Skill-Creator & Evaluator** | 用于自动化生成、评估与优化 Skill 描述的工具链 | **高度关注：** 开发者正致力于解决 Windows 兼容性及 `run_eval.py` 召回率（Recall）异常的问题。 | `OPEN` | [#1298](https://github.com/anthropics/skills/pull/1298) |
| 2 | **Self-Audit / Quality Gate** | 实现机械校验与四维推理质量控制的审计技能 | 引入了“伤害严重程度优先”的审计逻辑，旨在提升 AI 输出的可靠性。 | `OPEN` | [#1367](https://github.com/anthropics/skills/pull/1367) |
| 3 | **Document Typography** | 针对 AI 生成文档的排版质量控制（孤行、寡行、对齐） | 解决了 AI 文档常见的格式问题，被视为提升 AI 交付物专业性的关键。 | `OPEN` | [#514](https://github.com/anthropics/skills/pull/514) |
| 4 | **Testing-Patterns** | 提供完整的测试哲学与模式指导（Unit/React/Trophy） | 试图将测试方法论标准化，使 Claude 在执行测试任务时具备更高逻辑性。 | `OPEN` | [#723](https://github.com/anthropics/skills/pull/723) |
| 5 | **Skill-Quality-Analyzer** | 评估 Skill 结构的元技能（维度包括文档、资源、示例） | 标志着社区正从“创建 Skill”转向“标准化管理 Skill”。 | `OPEN` | [#83](https://github.com/anthropics/skills/pull/83) |

## 2. 社区需求趋势
通过对 Issues 的深度挖掘，社区的需求正在从单一的“功能扩展”转向“工程化管理”：

*   **工程化质量保障 (Quality Assurance)：** 社区极其渴望具备“自我审计”（Self-Audit）和“推理质量门禁”（Reasoning Quality Gate）能力的 Skill，以解决 AI 输出的不可控问题。
*   **文档与格式标准化 (Document Engineering)：** 需求集中在处理复杂格式（如 ODT/DOCX/PDF）的兼容性，以及对生成文档进行精细化的排版（Typography）控制。
*   **企业级协作与分发 (Enterprise Workflow)：** 社区强烈要求在 Claude.ai 中实现“组织级 Skill 共享”功能，以解决目前手动上传文件、跨平台传输的低效问题。
*   **安全性与信任边界 (Security & Trust)：** 随着社区 Skill 数量增加，用户开始担忧“伪装成官方 namespace 的社区 Skill”带来的安全风险（Issue #492）。

## 3. 高潜力待合并 Skills
以下 PR 具有极高的讨论热度或解决了核心痛点，预计将成为生态中的重要组件：

*   **`color-expert` [#1302](https://github.com/anthropics/skills/pull/1302):** 提供了极其细致的颜色空间知识，是多媒体/设计领域极具潜力的工具。
*   **`testing-patterns` [#723](https://github.com/anthropics/skills/pull/723):** 针对开发工作流的标准化需求，一旦合并将显著提升 Claude Code 在 CI/CD 环境下的表现。
*   **`self-audit` [#1367](https://github.com/anthropics/skills/pull/1367):** 这是一个高复杂度的逻辑 Skill，其提出的“四维度推理质量门”方案具有极高的工程参考价值。

## 4. Skills 生态洞察
**一句话总结：**
> **当前社区正处于从“工具插件化”向“工程标准化”转型的阵痛期，核心诉求已从“增加新功能”演变为“提升 Skill 的开发质量、安全性与自动化评估能力”。**

---

**Claude Code 社区动态日报（2026‑07‑22）**  

---

### 今日速览  
- 最新版本 **v2.1.217** 上线，新增 prompt 输入的 emoji 自动补全及写入失败警报。  
- **Fable 5** 在 Max 套餐上因权限判定失效被广泛报告，成为今日讨论热点（#79337、#79360）。  
- Windows 端的更新失败、全屏渲染异常及插件市场 UI 失效等问题持续发酵，凸显跨平台稳定性仍是社区关注焦点。  

---

### 版本发布  
**v2.1.217**  
- **Emoji 自动补全**：在 prompt 输入框键入 `:heart:` 即可插入 ❤️，输入 `:hea` 触发建议列表；可通过 `emojiCompletionEnabled` 设置关闭。  
- **写入与会话保存警报**：当 transcript 写入失败（如磁盘已满）或因继承导致会话保存被关闭时，会弹出警告提示，帮助用户及时定位问题。  
[完整发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)  

---

### 社区热点 Issues（精选 10 条）  

| # | 标题 | 关键信息 | 为何重要 | 社区反应 |
|---|------|----------|----------|----------|
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | Fable 5 提示“usage credits required”在 Max 套餐上失效 | 2026‑07‑20 起 Fable 5 成为 Max 标准，但代码仍降级到 Opus 4.8 并错误提示需要额外配额 | 直接影响付费用户使用最新模型，涉及计费与权限逻辑 | 26 评论，9 👍 |
| [#79360](https://github.com/anthropics/claude-code/issues/79360) | 使用 `claude setup-token` 时 Fable 5 被错误地放在 usage credits 门槛后 | 仅在 inference‑only scope 的令牌下出现，表明权限读取路径有缺口 | 揭示鉴权流程在非 OAuth 登录时的漏洞，影响自动化/CI 场景 | 5 评论，**30 👍**（最高赞） |
| [#45810](https://github.com/anthropics/claude-code/issues/45810) | Marketplace “Update” 按钮即使有新版本也不可点 | 按钮呈灰色，无响应，影响插件及时升级 | 插件生态的可用性直接关系到开发者工作流 | 15 评论，6 👍 |
| [#54670](https://github.com/anthropics/claude-code/issues/54670) | VSCode 扩展：将聊天响应复制为 Markdown 源码 | 需求来源于开发者希望保存可编辑的 AI 输出 | 功能提升 IDE 集成体验，受到广泛赞赏 | 9 评论，**18 👍** |
| [#72215](https://github.com/anthropics/claude-code/issues/72215) | Windows 全屏渲染模式：无滚动条且滚动失效 | 输出超出一屏后方向键/PageUp/PageDown 无效，导致早期输出不可达 | 终端类交互的基本可用性受影响，尤其在长日志场景 | 6 评论，4 👍 |
| [#76357](https://github.com/anthropics/claude-code/issues/76357) | Windows MSIX 更新失败：“Another program is currently using this file” | 每次更新都需要重启才能恢复，严阻碍自动化更新管道 | 安装/更新可靠性是企业采用的关键指标 | 6 评论，4 👍 |
| [#72181](https://github.com/anthropics/claude-code/issues/72181) | 桌面端：无法从 “Recent” 文件夹列表中移除条目 | 旧项目堆积无法清理，影响项目选择器的易用性 | UI 细节但直接影响日常使用效率 | 5 评论，**10 👍** |
| [#70733](https://github.com/anthropics/claude-code/issues/70733) | Cowork 标签缺失：rootfs.vhdx 被误判为缺失且未自动下载 | 清理重装后 Cowork 功能不可用，影响协作工作流 | 协作功能是 Claude Code 的卖点之一，需快速修复 | 6 评论，0 👍 |
| [#79921](https://github.com/anthropics/claude-code/issues/79921) | 会话因其他会话未收到输入而本地冻结（仅 Desktop & VSCode） | 表现为 UI 卡死，需另开会话输入才能恢复 | 暗示后台会话调度或锁机制存在竞态，严重影响多会话使用 | 3 评论，0 👍 |
| [#75037](https://github.com/anthropics/claude-code/issues/75037) | 背景 Agent 会话：快速终止、worker 崩溃循环、任务完成记录丢失 | 多种异常表现，导致长期后台任务不可靠 | 背景 Agent 是自动化脚本的核心，稳定性直接影响 CI/CD 可用性 | 3 评论，0 👍 |

---

### 重要 PR 进展（精选 10 条）  

| # | 标题 | 功能/修复要点 | 影响 |
|---|------|---------------|------|
| [#79620](https://github.com/anthropics/claude-code/pull/79620) | **feat**: 添加文字转语音（TTS）读取助手响应的可访问性 Hook | 支持 Piper（Linux）、macOS `say`、PowerShell（Windows），具备 Markdown 感知及代码跳过启发式 | 为视觉障碍或偏好语音交互的开发者提供无障碍选项，提升可访受性 |
| [#79889](https://github.com/anthropics/claude-code/pull/79889) | fix(hookify)：使 hook 入口在未设置 `CLAUDE_PLUGIN_ROOT` 时也可运行 | 去掉对环境变量的强依赖，插件 Hook 在更多场景下可直接执行 | 提升插件的可移植性与开箱即用体验 |
| [#79873](https://github.com/anthropics/claude-code/pull/79873) | fix(hookify)：`event: prompt` 规则因 payload key 错误而不触发 | 正确读取 `prompt` 键（之前只查 `user_prompt`） | 修复 Hook 系统中最常用的事件监听，确保自定义规则生效 |
| [#79645](https://github.com/anthropics/claude-code/pull/79645) | fix(hookify)：以 UTF‑8 读取规则与转录文件 | 解决 Windows 默认编码 (cp1252) 导致的乱码问题 | 消除跨平台插件编码不一致的隐

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026‑07‑22）**

---

### 1. 今日速览  
- 今日发布 **rust‑v0.145.0** 正式版，加入分页式线程历史、/import 迁移功能等大幅度改进。  
- 社区围绕 **费率限制重置**、**Linux sandbox（bwrap）** 与 **Windows 启动** 三大痛点展开热议，Issue 与 PR 数量激增，表明稳定性与跨平台兼容性仍是当前最关注的方向。

---

### 2. 版本发布  
| 版本 | 发布时间 | 主要更新 |
|------|----------|----------|
| **rust‑v0.145.0** | 2026‑07‑22 | • **分页式线程历史**：高效Resume、搜索、持久化名称、子代理支持、记忆体系（#33364、#33907、#34085、#34229、#34386）<br>• **/import 扩展**：可迁移 Cursor、Claude Code 设置、MCP 服务器、插件、会话、命令、项目等<br>• 其它内部改进与 bug 修复。 |
| rust‑v0.145.0‑alpha.30 / .29 / .28 / .27 | 2026‑07‑22 | 为正式版做准备的预发布，主要是内部 CI 与依赖调整，无新功能。 |

> **备注**：本日报仅列出有实质功能变更的正式发布，Alpha 版仅作追踪。

---

### 3. 社区热点 Issues（选 10 条）

| Issue | 关键点 | 社区反应 |
|-------|--------|----------|
| **#9508** – *Make Weekly Limit Reset Deterministic* | 将每周配额的重置时间固定，避免用户“突发”上限变化。 | 46 条评论、31 赞，提出 **“计划使用模式”** 需求，期待更可预测的费率管理。<br>🔗 <https://github.com/openai/codex/issues/9508> |
| **#14919** – *bwrap: Failed RTM_NEWADDR: Operation not permitted* (Closed) | 0.115.0 更新后 Linux bubblewrap sandbox 失效，导致子代理无法执行命令。 | 44 评论、48 赞，已标记为 **bug / sandbox regression**，影响所有 Pro 用户。<br>🔗 <https://github.com/openai/codex/issues/14919> |
| **#28058** – *Regression: encrypted MultiAgentV2 messages remove readable task audit trail* (Open) | 加密后多代理消息不再保留可读审计日志，影响调试与合规。 | 26 评论、99 赞，社区强烈呼吁 **保留审计痕迹** 或提供可选的明文日志。<br>🔗 <https://github.com/openai/codex/issues/28058> |
| **#32149** – *Windows setup fails before the UAC prompt* (Open) | 安装程序在 UAC 触发前即崩溃，导致两个安装选项均不可用。 | 24 评论、5 赞，用户反映 **“无法完成首次安装”**，对 Plus 订阅者尤为迫切。<br>🔗 <https://github.com/openai/codex/issues/32149> |
| **#10428** – *Support adding custom editors in "Open In" menu* (Closed) | “Open In” 仅限默认编辑器，用户希望自定义（如 Alacritty、Zed）。 | 19 评论、33 赞，属 **功能增强**，社区期待更灵活的外部编辑器集成。<br>🔗 <https://github.com/openai/codex/issues/10428> |
| **#26951** – *Codex IDE extension stuck loading over VS Code Remote‑SSH* (Open) | 扩展在 Remote‑SSH 环境下长时间加载失败，CLI 正常。 | 16 评论、1 赞，反映 **IDE 与远程开发环境的兼容性** 问题。<br>🔗 <https://github.com/openai/codex/issues/26951> |
| **#25921** – *Codex Desktop continuously generates Crashpad pending dumps* (Open) | Crashpad 目录每天增长 5 GB+，文件数突破 5 万，严重影响磁盘。 | 15 评论、5 赞，用户呼吁 **限制或清理 pending dumps**。<br>🔗 <https://github.com/openai/codex/issues/25921> |
| **#34260** – *Windows Desktop: unbounded taskkill.exe/conhost.exe cleanup storm* (Open) | 任务结束循环导致数百 `taskkill`/`conhost` 进程积压，耗尽 WMI 配额。 | 14 评论、8 赞，属 **性能/稳定性** 隐患，需尽快修复。<br>🔗 <https://github.com/openai/codex/issues/34260> |
| **#15057** – *Linux sandbox fails on Ubuntu with AppArmor userns restrictions* (Open) | 受限的 AppArmor 阻止 bubblewrap 创建 loopback 设备，导致 sandbox 失效。 | 13 评论、4 赞，社区期待 **对 AppArmor 进行兼容性处理**。<br>🔗 <https://github.com/openai/codex/issues/15057> |
| **#28078** – *Xcode 27 beta Codex sign‑in fails only for ChatGPT Pro account* (Open) | Pro 账户需要邮件 OTP，Go 账户正常，导致 **Xcode 27** 登录中断。 | 12 评论、11 赞，属 **平台/账户兼容** 问题，影响 Pro 用户的跨平台体验。<br>🔗 <https://github.com/openai/codex/issues/28078> |

---

### 4. 重要 PR 进展（选 10 条）

| PR | 关键改动 | 影响 |
|----|----------|------|
| **#34645** – *Always assign response item IDs* | 为所有响应项（包括流式、分叉、压缩结果）统一分配唯一 ID。 | 提升 **会话一致性** 与 **数据追踪**，便于后续审计与调试。<br>🔗 <https://github.com/openai/codex/pull/34645> |
| **#34643** – *Migrate login HTTP construction to HttpClient* | 将登录请求改为使用统一的 `HttpClient`，统一错误处理与重试策略。 | 增强 **安全性** 与 **可维护性**，降低因底层实现差异导致的 bug。<br>🔗 <https://github.com/openai/codex/pull/34643> |
| **#34641** – *Harden managed proxy setup for sandboxed executions* | 在受限的 bubblewrap sandbox 中读取受控的 proxy 目录，确保代理桥能够连接。 | 防止 **沙箱内网络异常**，提升多代理安全性。<br>🔗 <https://github.com/openai/codex/pull/34641> |
| **#34630** – *Add a policy-aware HTTP client builder* | 引入 `HttpClientBuilder`，可配置默认头、重定向、Cloudflare cookie、诊断等，而不暴露底层传输。 | 为 **自定义策略**（如限速、鉴权）提供统一入口，提升 **可配置性**。<br>🔗 <https://github.com/openai/codex/pull/34630> |
| **#34629** – *Harden Windows elevated sandbox startup* | 检查并刷新 sandbox 权限快照，确保根 SID 拥有必要的 DACL 权限。 | 防止 **提权 sandbox 启动失败**，提升 Windows 环境可靠性。<br>🔗 <https://github.com/openai/codex/pull/34629> |
| **#34624** – *Terminate Windows process trees with job objects* | 使用 Job Object 统一终止 Windows 进程树，保证子进程随父进程一起结束。 | 解决 **子进程残留** 问题，提升 **资源回收** 与 **稳定性**。<br>🔗 <https://github.com/openai/codex/pull/34624> |
| **#34621** – *Load paginated model context across rollout lineages* | 在加载模型上下文时逆向扫描完整的 rollout 分支，确保跨分支恢复完整上下文。 | 改善 **大上下文** 场景下的 **一致性**，降低因分页导致的信息缺失。<br>🔗 <https://github.com/openai/codex/pull/34621> |
| **#34620** – *Add exec-server network policy callback types* | 定义网络请求的 `allow/deny/ask` 回调，支持 HTTP、HTTPS CONNECT、SOCKS5 等。 | 为 **安全沙箱** 提供细粒度 **网络控制**，增强审计与合规。<br>🔗 <https://github.com/openai/codex/pull/34620> |
| **#31817** – *Update models.json* | 自动化更新 `models.json`，保持模型列表与最新发布同步。 | 简化 **CI/CD** 与 **模型发现** 流程，保证 **依赖时效性**。<br>🔗 <https://github.com/openai/codex/pull/31817> |
| **#34649** – *Propagate resolved proxy policy through auth routing* | 在认证路由中显式传递已解析的代理策略，取代默认行为。 | 提升 **代理一致性**，避免因默认 fallback 产生的不可预期请求。<br>🔗 <https://github.com/openai/codex/pull/34649> |

---

### 5. 功能需求趋势  

- **IDE 与编辑器集成**：自定义 “Open In” 编辑器、IDE 扩展在 Remote‑SSH 环境下的可靠加载、支持更多编辑器图标与命令（Issue #10428、#26951、#31553）。  
- **跨平台稳定性**：Linux sandbox（bwrap、AppArmor）与 Windows UAC/任务清理、崩溃报告（#14919、#34260、#25921、#34061）是当前最频繁的错误源。  
- **性能与资源管理**：Crashpad 持久 dump、无限任务清理循环、磁盘占用失控（#25921、#34260）引发对 **资源回收** 与 **垃圾回收** 的强烈需求。  
- **费率与使用体验**：费率限制重置的可预测性（#9508、#16423）以及 **背景终端会话**（#3968）让用户更关注 **使用可预测性** 与 **不间断长时间任务**。  
- **审计与合规**：加密多代理消息后审计日志缺失（#28058）和 **搜索/ pinned 任务不可见**（#33579）显示社区对 **透明度** 与 **任务可追溯性** 的关注。  

总体来看，社区最迫切的需求是 **提升跨平台兼容性、稳定性以及对大规模/长时间会话的资源管理**，同时希望在 **IDE 集成** 与 **功能可扩展性** 上得到更灵活的支持。

---

### 6. 开发者关注点（痛点与高频需求）

| 痛点/需求 | 典型表现 | 影响 |
|-----------|----------|------|
| **沙箱/权限兼容性**（Linux AppArmor、macOS sandbox） | `bwrap: loopback: Failed RTM_NEWADDR`、Ubuntu AppArmor `EPERM` | 导致子代理无法运行、使用体验中断。 |
| **Windows 启动与 UAC** | 安装/运行时在 UAC 提示前即崩溃 | 阻碍首次安装与日常使用，尤其影响 Pro 订阅用户。 |
| **IDE 扩展在 Remote‑SSH 环境的加载失败** | 代码编辑器插件长时间卡住、无响应 | 影响远程开发工作流，降低生产力。 |
| **磁盘与崩溃报告增长** | Crashpad pending dumps 每天 +5 GB、文件数突破 5 万 | 磁盘耗尽、系统响应变慢，需限制或清理机制。 |
| **任务清理循环** | Windows `taskkill`/`conhost` 无限循环耗尽 WMI 配额 | 导致系统卡顿、服务不可用。 |
| **费率限制重置不确定** | 每周配额突变（如 60% → 100%） | 用户难以规划使用策略，产生焦虑。 |
| **UI/UX 细节** | 输出面板只显示一屏、无法滚动、TUI 中 Ctrl+C 误触线程滚动、窗口重启后不恢复 | 影响日常使用体验，尤其在长对话或调试时。 |
| **审计与日志透明度** | 加密多代理消息后失去可读审计痕迹 | 对合规、调试与安全审计构成隐患。 |

> **开发者建议**：优先解决 sandbox 与跨平台兼容性问题、引入更智能的资源回收机制、以及提供更灵活的费率管理与 IDE 集成功能，将显著提升社区满意度与使用可持续性。

--- 

*以上内容基于 GitHub openai/codex 最近 24 小时的发布、Issue 与 PR 活动整理，供技术团队快速把握社区动向。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报 - 2026-07-22

---

## 1. 今日速览  
今日重点是推动 **安全修复**（RCE漏洞修复）和 **功能性能优化**，同时社区持续关注Agent模块的稳定性问题（如异常命令执行和内存管理）。负责安全团队的成员完成了critical的远程代码执行防护更新，成为今日最关键的改动。

---

## 2. 版本发布  
- **v0.52.0-nightly.20260722发布**：核心更新是修复`a2a-server`组件的RCE漏洞（#28470 PR），通过强制工作区信任机制和任务隔离完全遏制零点击远程代码执行风险。  
  *链接：[v0.52.0-release-notes](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260721.gacae7124b...v0.52.0-nightly)*

---

## 3. 社区热点 Issues  
1. **#28470（PR中改写Issue标记）**：安全修复RCE漏洞（RPE）**
   - 热度 ↑ 4人参与评论，安全团队快速解决关键漏洞，被标记为p1优先级  
   - 链接：[Issue #28470](#)

2. **#21409（Generalist agent hangs）**
   - 8人评论，用户反复报告generalist agent无响应，影响基本交互  
   - 链接：[Issue #21409](#)

3. **#26522（Auto Memory无限重试）**
   - 5人评论，Auto Memory在低信号会话持续重试导致内存泄漏  
   - 链接：[Issue #26522](#)

4. **#25166（Shell命令执行退出后悬空）**
   - 4人⬅️⬅️⬅️关注Shell命令完成后仍显示“等待输入”状态  
   - 链接：[Issue #25166](#)

5. **#22323（Subagent目标追踪失败）**
   - 12人⬅️关注subagent回报“最大轮数到达”但实际未执行  
   - 链接：[Issue #22323](#)

6. **#24246（工具总数超限问题）**
   - 3人评论，尝试使用超128工具时触发400错误  
   - 链接：[Issue #24246](#)

7. **#28403（变量扩展绕过漏洞）**
   - GHSA漏洞修复（#28403 PR）引发热议，社区验证security加固有效  
   - 链接：[Issue #28403](#)

8. **#25166（Shell流程阻塞）**
   - 4人⬅️报告命令执行后交互卡死  
   - 链接：[Issue #25166](#)

9. **#22990（Browser agent SessionLock Issues）**
   - 3人关注persistent session模式下浏览器崩溃  
   - 链接：[Issue #22990](#)

10. **#21968（Agent技能利用率低）**
    - 6人评论，认为Agent未充分调用自定义技能和Subagent  
    - 链接：[Issue #21968](#)

---

## 4. 重要 PR 进展  
1. **#28470（安全RCE修复）**
   - 实现对工作区信任和任务隔离的完整防护，实现零点击RCE防御  
   - 链接：[PR #28470](#)

2. **#28472（凭证重置流程优化）**
   - 解决41错误登录失败（GS API崩溃）问题，解决VSCode退出异常  
   - 链接：[PR #28472](#)

3. **#28433（PR生成器工作流构建）**
   - 部署基础云服务架构，包括Firestone锁机制和容器worker集成  
   - 链接：[PR #28433](#)

4. **#28397（Shell异步改造）**
   - 将所有阻塞文件I/O替换为异步操作，减少React Ink画面卡顿  
   - 链接：[PR #28397](#)

5. **#28305（评估工具监控增强）**
   - 增加工具调用时间线格式化和失败诊断信息  
   - 链接：[PR #28305](#)

6. **#28169（评估覆盖率报告）**

7. **#28474（技能维度Telemetry）**
   - 为工具调用添加技能名称维度，支持功能使用追踪  
   - 链接：[PR #28474](#)

8. **#28394（temp文件释放）**
   - 强制强制删除后台执行生成的临时目录  
   - 链接：[PR #28394](#)

9. **#28469（模型失败回退策略）**
   - 模型降级时动态轮换Session ID，避免状态重叠错误  
   - 链接：[PR #28469](#)

10. **#28389（Agent时间限制添加）**
    - 为每个Agent交互设定严格的时间预算，防止无限循环  
    - 链接：[PR #28389](#)

---

## 5. 功能需求趋势  
- **IDE深度集成**：用户频繁提议改进VSCode插件体验（Editor模式优化、资源提供）  
- **Agent可观测性**：大量Issue（如#22323、#21763）追求更透明的Subagent交互可视化  
- **安全增强**：GHSA漏洞修复反馈表明安全问题现在是核心关注点  
- **身份管理**：Token流程改进（#28472 PR）和自定义技能权限控制出现新需求  
- **内存优化**：Auto Memory持续低信号任务的无限重试（#26522）需要修复  

---

## 6. 开发者关注点  
- **可靠性**：Shell执行失败（#25166）、agent挂机（#21409）是最频繁的阻塞点  
- **性能**：Agent决策流程（如generalist agent）响应延迟明显  
- **安全性**：对最近的一系列漏洞修复（GHSA、RCE等）充满担忧  
- **内存消耗**：Auto Memory系统在大规模工作流时流水线不稳定  
- **文档缺失**：多个ritical issue因功能文档不足导致误操作  

---

*此日报基于Gemini CLI仓库数据自动生成，链接指向GitHub原始仓库。*


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



### 2026-07-22 GitHub Copilot CLI 社区动态日报  

---

#### **1. 今日速览**  
- GitHub Copilot CLI v1.0.74-0 发布，新增 `/model plan` 命令支持模型选择，优化搜索时的会话标题匹配。  
- 社区活跃度高，多项关键问题（如 MCP 连接、资源支持）持续讨论。  
- 多个 PR 和 Issue 聚焦性能优化和新功能扩展。  

---

#### **2. 版本发布**  
**v1.0.74-0 升级亮点**  
- **新增功能**：`/model plan` 命令允许用户在计划模式下动态选择模型（通过 ID、关闭选项或打开选择器），回退到会话模型。  
- **优化**：搜索匹配时更智能地处理会话标题的空格差异。  
- 链接：[GitHub Release v1.0.74-0](https://github.com/github/copilot-cli/releases)  

---

#### **3. 社区热点 Issues（Top 10）**  
1. **#2282** - [无法连接 MCP 服务器](https://github.com/github/copilot-cli/issues/2282)  
   - 问题：用户在 Windows 上通过 GitHub App 安装后无法连接 MCP 服务器，错误信息指向 `github-mcp-server`。  
   - 重要性：影响用户初始化体验，评论 11 条（👍1），可能需要修复补丁。  

2. **#1305** - [支持 OAuth 的远程 MCP 服务器的 CIMD](https://github.com/github/copilot-cli/issues/1305)  
   - 功能：扩展远程 MCP 服务器的 OAuth 支持，减少预注册需求。  
   - 重要性：社区回复数多（26 条，👍26），表明高关注度。  

3. **#4188** - [计划模式阻断 shell 命令](https://github.com/github/copilot-cli/issues/4188)  
   - 问题：计划模式对阻止 shell 命令（如 `gh`）产生回归。  
   - 重要性：影响计划模式的实用性（👍2），开发者持续讨论。  

4. **#4183** - [自动压缩无法防止 CAPI 5MB 限制](https://github.com/github/copilot-cli/issues/4183)  
   - 问题：长时间会话累积的 CAPI 响应可能触发 5MBbody 限制。  
   - 重要性：性能瓶颈问题（👍5），影响长期使用用户。  

5. **#1518** - [支持 MCP 资源和提示](https://github.com/github/copilot-cli/issues/1518)  
   - 功能：扩展 MCP 支持资源和提示（目前仅支持工具）。  
   - 重要性：社区关注自主代理功能（👍14），长期可行性需求。  

6. **#4012** - [BYOK 配置中推理努力不支持](https://github.com/github/copilot-cli/issues/4012)  
   - 问题：定制 BYOK 配置无法使用 `--reasoning-effort` Flag。  
   - 重要性：定制模型用户 encoder 痛点（👍16）。  

7. **#4206** - [环境状态栏卡在加载](https://github.com/github/copilot-cli/issues/4206)  
   - 问题：v1.0.73 下环境状态栏显示 “Loading:...” 永远不更新。  
   - 重要性：UI/UX 问题（👍1），影响用户信任感。  

8. **#3976** - [tgrep 索引工具 OOM 拆分](https://github.com/github/copilot-cli/issues/3976)  
   - 问题：`tgrep` 代理在大规模代码库中 OOM 抱死宿主。  
   - 重要性：性能 severity（👍0），需优化内存管理。  

9. **#4207** - [显示子代理信用分摊](https://github.com/github/copilot-cli/issues/4207)  
   - 功能：扩展 `/usage` 界面，细化子代理 AI 信用消耗。  
   - 重要性：透明计费需求（👍5），适合企业用户。  

10. **#4208** - [显式调用代理和链代理](https://github.com/github/copilot-cli/issues/4208)  
    - 功能：允许在提示中显式调用代理或链代理。  
    - 重要性：代理组合场景灵活性（👍3），提升代理复用度。  

---

#### **4. 重要 PR 进展（Top 10）**  
- **#3163** - [ViewSonic 监视器支持](https://github.com/github/copilot-cli/pull/3163)  
  - 功能：为前期提出的调试需求添加监视器初始化。  
  - 状态：无明确更新，需关注。  

（只有一项 PR 提交，建议后续增加 PR 监控）  

---

#### **5. 功能需求趋势**  
社区关注点总结：  
1. **MCP 生态扩展**：资源与提示支持（#1518, #3073）是长期可行性方向。  
2. **模型能力增强**：BYOK 定制化（#4012, #4190）和默认模型配置（#2193）。  
3. **代理与自动化**：支持代理链（#4208）和子代理内存管理（#4183, #2595）。  
4. **性能优化**：避免 OOM、提升内存效率（#3976, #4183）。  
5. **用户体验改进**：环境 UI 完善（#4206）和跨终端兼容性（#4191）。  

---

#### **6. 开发者关注点**  
- **痛点**：  
  - MCP 连接 fragility（如 #2282、#4203）。  
  - 资源限制（CAPI 5MB 换行）和内存管理问题。  
  - 代理代理定制化限制（如工具别名缺失 #4209）。  
- **高频需求**：  
  - 快速切换模型（#4190）。  
  - 跨终端 reproducible 性（tmux/vscode 兼容性 #4191, #4206）。  
  - 成本透明化功能（子代理信用分摊 #4207）。  

---  
所有数据链接可直接访问: GitHub Copilot CLI 官方仓库 [github.com/github/copilot-cli](https://github.com/github/copilot-cli)


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI – 2026‑07‑22 社区动态日报**

---

### 1. 今日速览
- Kimi Code CLI 在 2026‑07‑22 继续面临若干关键 bug 与功能兼容性问题，尤其是在工具调用与 shell 模式下。  
- 开发团队已提交 PR #2530 针对 shell 子进程阻塞的改动，并在 Issues #2531‑#2534 讨论工具验证与模型兼容性问题。

---

### 2. 版本发布  
暂无新版本发布，版本 **0.28.1** 与 **0.19.2** 仍为社区主要使用版本。

---

### 3. 社区热点 Issues（按关注度及影响度排序）

| # | 标题 | 重要性 | 社区反应 | 链接 |
|---|------|alable|--------|------|
| **2474** | `kimi Ай点` 界面抖动、全局重渲染 | ★★★★★ | 2 赞，1 评论 | https://github.com/MoonshotAI/kimi-cli/issues/2474 |
| **2531** | 通过 Moonshot API 调用工具时返回 400 | ★★★★★ | 0 赞，已被 PR #2530 关联 | https://github.com/MoonshotAI/kimi-cli/issues/2531 |
| **2529** | 右键数字键无响应（键盘事件未监听） | ★★★★ | 0 赞 | https://github.com/MoonshotAI/kimi-cli/issues/2529 |
| **2528** | Shell 模式下输出过长导致卡顿 | ★★★★ | 0 赞 | https://github.com/MoonshotAI/kimi-cli/issues/2528 |
| **2527** | k2.5 模型工具调用失效 + Goal Mode 循环 | ★★★★ | 0 赞 | https://github.com/MoonshotAI/kimi-cli/issues/2527 |
| **2468** | Shell 子进程阻塞 (待 PR #2530) | ★★★★ | PR 关联 | https://github.com/MoonshotAI/kimi-cli/issues/2468 |
| **2473** | 新工具名解析错误（未上市） | ★არზე | 0 赞 | 未公开，已在 PR #2530 讨论 |
| **2480** | MacOS 平台触发 `bash` 工具异常 | ★★★ | 0 赞 | 未公开，已在 Issue #2531/2534 讨论 |
| **2491** | JSON Schema 兼容性检测逻辑缺失 | ★★★ | 0 赞 | 未公开，已在 PR #2536 讨论 |
| **2520** | 兼容中文模型命名空间的错误том | ★★ | 0 赞 | 未公开，已在 Issue #2531 讨论 |

> **说明**  
> - Issues #2474 与 #2531 直接影响了多名用户的工作流程。  
> - #2527 触发了 Goal Mode 的无限循环，易导致资源浪费。  
> - #2468 的阻塞现象在 PR #2530 中得到 tjänst 解决。  

---

### 4. 重要 PR 进展（按关联度与影响度排序）

| # | 标题 | 功能 / 修复 | 状态 | 链接 |
|---|------|-----------|------|------|
| **2530** | `fix(shell): stop blocking until timeout when a detached child holds the pipes` | 解决子进程阻塞问题，提升多进程 Shell 模式的稳定性 | 新提交，待审 | https://github.com/MoonshotAI/kimi-cli/pull/2530 |
| **2525** | `improve json schema validation vooral for Moonshot APIs` | 强化 JSON Character 兼容性 | 已 merge | https://github-caption/？ |
| **2531** | `Add schema sanitization for MCP tools` | 在客户端预处理工具 schema，防止 400 错误 | 关闭/合并 | https://github.com/MoonshotAIَ? |
| **2533** | `Fix MacOS input key event handling` | 修正右键数字键无响应，兼容 MacOS | 关闭 | https://github.com/MoonshotAI/kimi-cli/pull/253列 |
| **2534** | `Improve tool call result handling in Goal Mode` | 防止 `Tool not found` 并避免无限循环 | 待审 | https://github.com/MoonshotAI/kimi-cli/pull/2534 |
| **2535** | `Refactor shell command execution to async stream` руப | 优化 Shell 命令 I/O 流，提升响应速度 | 合并 | https://github.com/MoonshotAI/kimi-cli/pull/2535 |
| **2532** | `Add automatic keyboard event listener for numeric keys` | 完善键盘事件监听，确保输入框同步 | 合并 | https://github.com/MoonshotAI/kimi-cli/pull/2532 |
| **2535** | `Add CLI option to limit shell output length` | 限制单行输出，避免卡顿 | 合并 | https://github.com/MoonshotAI/kimi-cli/pull/2535 |
| **2536** | `Standardize model‑tool mapping for K2.5` | 解决 K เร. 求助 | 待审 | https://github.com/MoonshotAI/kimi-cli/pull/2536 |
| **2537** | `Create a diagnostic command for version & environment check` | 新增诊断命令，一键获取运行 Dach ympäristö | 合并 | https://github.com/MoonshotAI/kimi-cli/pull/2537 |

> **说明**  
> - PR #2530 现在已作为功能升级提交，预计将在下一版本（0.29.0）正式集成。  
> - 其余 PR 多为性能改进与 Bug 修复，已提交至 staging 分支，等待 QA 验证。

---

### 5. 功能需求趋势
从当前 Issues 与 PR 中可见，社区关注点主要聚焦以下几个方向：

1. **工具调用与 API 兼容性**  
   - `MCP 工具名/Schema` 兼容性（I#2531, PR#2531, PR#2536）。  
   -  Freelancers"a 区块卡导致“Tool not found”错误和循环。

2. **UI/UX 与键盘交互**  
   - 界面抖动、全局重渲染（I#2474）。  
   - 键盘事件监听缺失导致数键无效（I#2529, PR#2532）。

3. **Shell 与 I/O 性能**  
   - 子进程阻塞、输出过长导致卡顿（I#2468, I#2528, PR#2530, PR#2535）。  

4. **模型兼容性与配置**  
   - K2.5、K3 及新模型的工具调用、Goal Mode 行为。  

5. **诊断与自动化**  
   - 开发了诊断命令便于快速检查版本与环境（PR#2537）。

---

### 6. 开发者关注点（痛点梳理）

| 痛点 | 描述 | 产生影响 | 解决路径 |
|------|------|-----------|----------|
| **API 兼容** | 珍拟的工具名称与 JSON Schema 约束不一致，导致 400 错误 | 影响团队生产效率 | 前端预处理、schema 自动修复（PR#2531, 2533） |
| **实时 UI** | 界面抖动与重渲染导致回话体验断裂 | 阻碍交互 | 优化渲染逻辑（I#2474） |
| **键盘事件遗漏** | 数字键无响应导致输入不可操作 | 在笔记 & 需求建模场景中出现空白 | 监听完整键盘事件（PR#2532） |
| **Shell 阻塞** | 父进程与子进程 I/O 交互导致卡顿 | 影响命令行编程体验 | 异步流优先 & 解除 EOF 阻塞（PR#2530, 2535） |
| **工具调用无效** | K2.5/Goal Mode 下工具调用返回错误，出现无限循环 | 降低模型可靠度 | 统一工具映射与错误处理（PR#2536） |

> **结语**  
> Kimi Code CLI 正在聚焦 API 兼容、UI 稳定与 Shell 性能等核心痛点。CI/CD 的快速迭代与 PR 贡献正推动社区向更高质量与更好体验迈进。开发者可关注上述 Issue 与 PR，或直接参与代码改动，帮助提升工具整体可靠性。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-22

---

## 1. 今日速览

**核心动态**：社区核心关注点集中在**内存泄漏排查**（Megathread 持续 119 条评论）、**新版布局引发的易用性倒退**（工作区/工作树缺失、无法回退旧布局）、**OpenCode Go 订阅计费异常**（支付成功仍提示余额不足），以及 **Windows ARM64 / WSL / Linux 桌面端的平台适配问题**。PR 侧重于修复时钟偏差导致的重试风暴、MiniMax M3 思维模式兼容、Solid 渲染崩溃、补丁解析健壮性、CodeMode 生成器函数支持等核心稳定性与扩展性提升。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 热度 | 核心诉求 / 影响 | 社区反应 |
|---|-------|------|------|----------------|----------|
| 1 | [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | 🐛 **性能/内存** | 119 评论 · 90 👍 | 汇总零散内存泄漏报告，收集堆快照；官方明确拒绝 LLM 生成方案，需人工排查 | 持续 3 个月高热，用户主动提供快照，核心阻碍大规模采用 |
| 2 | [#6231 Auto-discover models from OpenAI-compatible provider endpoints](https://github.com/anomalyco/opencode/issues/6231) | ✨ **功能需求** | 26 评论 · 182 👍 | 本地推理（LM Studio/Ollama/llama.cpp）模型频繁变更，手动维护 `opencode.json` 极其繁琐 | 👍 数远超评论，强烈刚需；利于本地优先工作流 |
| 3 | [#37012 [FEATURE] keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012) | 🎨 **UI/UX** | 26 评论 · 27 👍 | 新版“顶部标签页”布局导致主窗口入口变深、工作区/工作树功能缺失，要求保留旧布局开关 | 老用户流失风险高，Web 端同步受影响（#37546） |
| 4 | [#37790 [BUG] OpenCode Go subscription paid but “Insufficient balance”](https://github.com/anomalyco/opencode/issues/37790) | 💳 **计费/订阅** | 10 评论 · 0 👍 | Stripe 扣款成功，工作区仍显示余额不足，无法使用 Go 专属模型 | 直接阻断付费用户核心价值，信任度受损 |
| 5 | [#37481 [CLOSED] Desktop fatal “Notification server not found: wsl:<distro>”](https://github.com/anomalyco/opencode/issues/37481) | 🐛 **WSL/启动崩溃** | 7 评论 · 1 👍 | 还原标签页引用 WSL sidecar 时，渲染进程在 sidecar 就绪前解析服务器导致致命错误，应用不可用 | 已关闭但反映 WSL 集成脆弱性，PR #38186 正在修复 |
| 6 | [#31119 [BUG] Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119) | 🐛 **数据库迁移** | 14 评论 · 15 👍 | 版本升级后 SQLite schema 缺失列，导致应用完全不可用 | 回归用户遭遇硬性阻断，需自动迁移/兼容层 |
| 7 | [#19130 Windows ARM64 native: OpenTUI fails to initialize](https://github.com/anomalyco/opencode/issues/19130) | 🐛 **平台支持** | 12 评论 · 8 👍 | 原生 ARM64 二进制非交互命令正常，TUI 因 `bun:ffi` + TinyCC `dlopen` 失败 | Windows ARM 生态快速增长，阻塞原生体验 |
| 8 | [#37546 Web: no way to revert new layout, missing workspaces/worktrees](https://github.com/anomalyco/opencode/issues/37546) | 🎨 **Web/布局** | 4 评论 · 5 👍 | Web 端 v1.17.19+ 强制新布局且无回退入口，工作区/工作树功能完全缺失 | 与 #37012 形成桌面+Web 双端一致性痛点 |
| 9 | [#38190 [CLOSED] Request blocked by upstream provider](https://github.com/anomalyco/opencode/issues/38190) | 🐛 **Provider/上游** | 7 评论 · 4 👍 | 连续发送消息触发上游风控/限流，用户无自助恢复路径 | 需要指数退避、用户可感的重试策略 |
| 10 | [#37056 opencode-go provider returns 400/401/500 for subscribed models](https://github.com/anomalyco/opencode/issues/37056) | 🐛 **Provider/Go 代理** | 6 评论 · 0 👍 | DeepSeek V4 Pro 大请求（300KB+）高频 400，同 Key 间歇性 401，500 内部错误 | 付费核心模型不可用，严重影响 Go 订阅价值 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#38213 fix: stop clock-skew response loops](https://github.com/anomalyco/opencode/pull/38213) | 🟢 Open | 修复客户端/服务端时钟偏差导致的错误重试风暴，避免无限循环 | #24476, #25270 |
| 2 | [#35181 fix(transform): set minimax-m3 thinking type to enabled](https://github.com/anomalyco/opencode/pull/35181) | ✅ Closed | MiniMax M3 仅接受 `thinking.type: "enabled"\|"disabled"`，修正 `"adaptive"` 导致的 400 | #35138 |
| 3 | [#38188 fix(core): reject malformed patch hunks](https://github.com/anomalyco/opencode/pull/38188) | 🟢 Open | 拒绝无效增删改 hunk、空更新块、错位 EOF 标记，给出行级报错；保留 Codex 兼容隐式更新 | — |
| 4 | [#37620 fix(desktop): use custom titlebar on linux](https://github.com/anomalyco/opencode/pull/37620) | 🟢 Open | Linux Electron 窗口启用自定义标题栏（此前回退 GTK 原生装饰），统一跨平台外观 | #36225 |
| 5 | [#37832 fix(app): prevent Solid cleanNode crash on session switch](https://github.com/anomalyco/opencode/pull/37832) | 🟢 Open | 修复切换会话时 `cleanNode` 抛出 `TypeError` 导致的冻结/崩溃 | #37534 |
| 6 | [#38172 feat(codemode): support generator functions](https://github.com/anomalyco/opencode/pull/38172) | ✅ Closed | CodeMode 新增同步/异步生成器函数支持（`yield`/`yield*`、`next`/`return`/`throw`、finally、Promise 采纳、FIFO 异步请求） | — |
| 7 | [#37913 fix(llm): recover from truncated tool-call arguments](https://github.com/anomalyco/opencode/pull/37913) | 🟢 Open | LLM 协议层恢复被截断的工具调用参数，避免流式失败；互补 #37220（dev 分支） | #36766 |
| 8 | [#38183 feat(core): render CodeMode catalog deltas from structured snapshots](https://github.com/anomalyco/opencode/pull/38183) | 🟢 Open | CodeMode 目录提示词从整体替换升级为技能式语义增量渲染，核心层接管模型指令文本 | #36196, #38003 |
| 9 | [#38206 fix(provider): cache all system messages instead of only first 2](https://github.com/anomalyco/opencode/pull/38206) | 🟢 Open | `applyCaching()` 不再截取前 2 条 system message，插件/MCP 指令系统消息均可被缓存 | — |
| 10 | [#38186 fix(app): defer unavailable notification state](https://github.com/anomalyco/opencode/pull/38186) | ✅ Closed | 推迟权限读取直到服务器同步就绪、推迟会话头像通知读取直到连接注册，修复 WSL sidecar 启动竞态 | #37481 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|--------------|------|
| **本地模型零配置接入** | #6231 (182 👍) | ⭐⭐⭐⭐⭐ | 自动发现 OpenAI 兼容端点模型，消除手动维护 `opencode.json` |
| **布局/工作区回退与补全** | #37012, #37546, #38124 | ⭐⭐⭐⭐ | 旧布局开关、工作区/工作树在新布局缺失、现有 Profile 无布局过渡资格 |
| **计费透明度与可靠性** | #37790, #37056, #4925 | ⭐⭐⭐⭐ | 订阅生效延迟、Go 代理频繁报错、会话总成本统计（含子代理） |
| **平台原生稳定性** | #19130 (Win ARM64), #37481 (WSL), #37620 (Linux titlebar), #35480 (iOS PWA safe-area) | ⭐⭐⭐ | 覆盖 Windows/Linux/macOS/iOS 全平台边缘场景 |
| **会话/历史管理增强** | #12393 (解档), #38163 (首条消息自动命名), #20699 (重复消息) | ⭐⭐⭐ | 基础交互体验打磨 |
| **Provider 兼容性与容错** | #37056 (Go 代理), #38190 (上游风控), #37833 (NVIDIA NIM DeepSeek), #33041 (Google schema) | ⭐⭐⭐ | 多上游适配、截断恢复、重试策略 |
| **MCP / 扩展生态** | #11948 (sampling/createMessage), #38095 (托管连接器 OAuth), #38022 (opencode-hypa 插件文档) | ⭐⭐ | 向 Agentic Workflow 与 SaaS 集成演进 |
| **CodeMode / 技能系统深化** | #38172 (生成器), #38183 (目录增量渲染), #36196 (目录工作) | ⭐⭐ | 核心可编程性提升，面向高级用户/插件作者 |

---

## 6. 开发者关注点

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-22

> 数据源：`github.com/Hmbown/DeepSeek-TUI` (实际为 CodeWhale 仓库)  
> 统计窗口：过去 24 小时（2026-07-21 ~ 2026-07-22）

---

## 1. 今日速览

**v0.9.1 发布冲刺进入“最后一公里”**。过去 24 小时无新 Release，但 **16 个 PR 密集合并/更新**，集中解决 v0.9.1 阻断性 Issue（`release-blocker` 标签高频出现）。核心研发重心聚焦于：**子 Agent 工作目录隔离修复、TUI 长输出滚动与 Enter 键延迟、权限/模式状态持久化、单一 Bash 工具规范化、路由计费溯源权威化**。社区高频讨论的 EPIC 级重构（#2870 命令边界重构、#2766 UI 重构）持续推进，显示架构治理与用户体验并重。

---

## 2. 版本发布

> 过去 24 小时无新版本发布。当前最新版本仍为 `v0.9.0`，`v0.9.1` 正处于冻结/验收阶段（见 #4650 完成看板）。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心看点 | 社区热度/状态 |
|---|-------|----------|---------------|
| **#4032** | **Codewhale 不遵循 Constitution：倾向自写临时脚本而非复用现有脚本** | 暴露 Agent 遵循性与记忆/工具选择策略的深层问题，关联 `reliability` `agent-ready`，被标记为 **release-blocker**。 | 🔥 **41 评论** / **CLOSED** (近期更新) |
| **#2870** | **EPIC：为 #2791 分阶段重构命令边界** | 追踪核心架构重构（命令注册/路由/边界），拆解为可合并的小层级，**奠定 v0.9.1+ 可扩展性基石**。 | 🔑 **15 评论** / **OPEN** (今日更新) |
| **#4227** | **feat：帮助贡献者建立/维护 CodeWhale 开发环境（Skill/Workflow）** | 针对 **日均 10+ PR** 的高速迭代，提出自动化环境同步技能，降低贡献门槛。 | 💡 **11 评论** / **OPEN** |
| **#2766** | **UI 重构需求：输出难复制、确认弹窗遮挡主界面** | 直击 TUI 核心交互痛点（复制、弹窗干扰），长期开放，**社区呼声高**。 | 🖥️ **9 评论** / **OPEN** (今日更新) |
| **#2889** | **Work Agent 行：真实子 Agent 详情与结构化当前活动** | 侧边栏 Work/Activity/Agents 面板的**可观测性增强**，恢复自 #2694 设计方向。 | 👁️ **7 评论** / **OPEN** (今日更新) |
| **#4410** | **恢复 xAI device-code OAuth 登录并暴露端点错误** | 修复硬编码 OAuth 路径导致的登录失败，**适配官方 Grok CLI 路径变更**。 | 🔐 **7 评论** / **CLOSED** |
| **#2886** | **增强：为工具生命周期添加 Gherkin 验收 E2E 覆盖** | 引入 **BDD 风格 E2E 测试**，保障命令重构（参考 #2851）不回归。 | 🧪 **6 评论** / **OPEN** (今日更新) |
| **#1917** | **提案：通用 PreToolUse/PostToolUse 钩子层（Cancel/Pause/Resume）** | 统一所有动作类型的**生命周期控制原语**，架构级统一，影响面极广。 | 🏗️ **5 评论** / **OPEN** (今日更新) |
| **#4603** | **长输出内容无法滚动——超出视口被截断** | Windows/PowerShell 下 **TUI 核心可用性 Bug**，已通过 PTY 场景锁定回归测试（#4653）。 | 🐛 **3 评论** / **CLOSED** |
| **#4605** | **Enter 键发送延迟——UI 冻结数百毫秒（多版本遗留）** | **高频触点性能回归**，已修复：将 UI 确认与慢速发送准备分离（#4654）。 | ⚡ **3 评论** / **CLOSED** |

> **链接前缀**：`https://github.com/Hmbown/CodeWhale/issues/<编号>`

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 类型 | 核心变更 | 状态 |
|---|----|------|----------|------|
| **#4673** | `fix(shell): default no-cwd shell commands to context.workspace` | **Bug 修复** | 子 Agent `worktree: true` 时，无显式 `cwd` 的 Shell 命令默认在 **子 Agent 工作树** 而非父仓库运行。 | ✅ **CLOSED** |
| **#4675** | `Integrate CodeWhale v0.9.1 runtime and release surface` | **Release 集成** | 汇总 v0.9.1 运行时简化、空 Work 修复、发布面；新增 TUI 色彩语法（冷色模式边、暖色权限边）。 | 🔄 **OPEN** |
| **#4654** | `fix(tui): acknowledge Enter before slow send prep (#4605)` | **性能/UX** | **Enter 即时确认**（置灰/状态栏），异步完成发送准备，消除 200–1200ms 卡顿。 | ✅ **CLOSED** |
| **#4653** | `test(tui): lock long-output transcript scrolling with a PTY scenario (#4603)` | **测试/回归** | 引入 **PTY 端到端场景**，锁定长输出（>3 视口）不截断、可滚动、头尾标记保留。 | ✅ **CLOSED** |
| **#4656** | `fix(route): honor explicit limits for unknown local models` | **路由/模型** | 自托管路由显式输出限制**覆盖 4K 兼容回退**，修复 #4655。 | ✅ **CLOSED** |
| **#4658** | `feat(runtime-api): add provider registry + switch endpoints` | **API/运行时** | 新增 3 个运行时端点：动态 Provider/Model 选择器、原子切换，**避免配置覆盖竞态**。 | ✅ **CLOSED** |
| **#4657** | `fix(streaming): report progress on idle timeouts` | **流式/遥测** | SSE 空闲超时错误中**附带已接收字节/时序**，区分预填停滞与部分输出截断。 | ✅ **CLOSED** |
| **#4613** | `fix(tui): sanitize Moonshot tool parameters per MFJS spec` | **兼容性** | 依据 **MFJS（Moonshot Flavored JSON Schema）** 清洗工具参数：根必须 `type:"object"`，禁用根级 `anyOf/oneOf/allOf`。 | ✅ **CLOSED** |
| **#4046** | `Layer 5.1: User command registry and loading boundary` | **架构/重构** | 验证用户命令注册表与加载边界**已满足验收标准**，无需生产代码变更，测试全覆盖。 | ✅ **CLOSED** |
| **#4566** | `[v0.9.2] update tui Cargo.toml for HarmonyOS build` | **平台扩展** | 将 `portable-pty` 移至 `cfg("unix")`，**在 HarmonyOS PC 上成功编译运行 TUI**。 | 🔄 **OPEN** |

> **链接前缀**：`https://github.com/Hmbown/CodeWhale/pull/<编号>`

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue/PR | 信号强度 |
|----------|-----------------|----------|
| **🎯 Agent 可靠性与 Constitution 遵循** | #4032, #414, #4598, #4647 | ⭐⭐⭐⭐⭐ 核心阻断项，直接关联 v0.9.1 发布 |
| **🏗️ 命令系统架构重构（边界/注册/钩子）** | #2870, #2851, #1917, #4046, #4625 | ⭐⭐⭐⭐⭐ EPIC 级拆解，奠定可扩展性基础设施 |
| **🖥️ TUI 核心体验打磨（滚动/延迟/复制/弹窗）** | #4603, #4605, #2766, #4653, #4654 | ⭐⭐⭐⭐ 高频触点，已投入 PTY E2E 锁定回归 |
| **🔐 权限/模式/提供商模型的统一契约** | #4412, #4628, #4639, #4658 | ⭐⭐⭐⭐ 统一决策路径，消除残留/竞态 |
| **🧪 验收测试体系建设（Gherkin/PTY/E2E）** | #2886, #4653, #414, #4641 | ⭐⭐⭐ 从手工验证向自动化验收迈进 |
| **🌐 多平台/多提供商适配** | #4410, #4656, #4370, #4566, #4660 | ⭐⭐⭐ xAI、Moonshot、自托管、HarmonyOS、自定义 Provider |
| **📦 技能/Workflow 生态与贡献者体验** | #4227, #4651 | ⭐⭐ 降低高速迭代下的参与门槛 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“写临时脚本不复用” 信任危机** (#4032)  
   开发者期望 Agent **遵循约定/复用资产**，而非每次重造轮子；关联 Constitution 执行、记忆检索、工具选择策略。

2. **TUI 长输出不可交互** (#4603, #2766)  
   - 无法滚动/复制大块 Diff/日志  
   - 确认弹窗遮挡主界面、信息密度低  
   → **已纳入 PTY 回归测试，修复进行中**

3. **Enter 键“肉眼可见”的延迟** (#4605)  
   多版本遗留，**高频交互路径** 性能退化；已通过 **UI 即时确认 + 异步准备** 缓解。

4. **子 Agent 隔离性失效** (#4674/#4673)  
   `worktree: true` 却在父目录执行命令，**破坏沙箱语义**；已修复默认 `cwd` 回落逻辑。

5. **配置/路由/计费“多源不一致”** (#4324, #4639, #4656)  
   - 模型能力/限额：静态目录 vs 动态路由 vs 兼容回退  
   - 计费溯源：模型名推算 vs 权威路由记录  
   → **推进“单一权威契约”**

6. **贡献者环境跟不上主分支速度** (#4227)  
   日均 10+ PR 导致本地频繁断裂，**需自动化 Skill/Workflow 同步 main**。

7. **权限模式切换的副作用** (#4628)  
   切换 Plan/Act/Operate 或 Ask/Auto/Full **不应创建虚假 Work、不应弹顶层面板**，需**持久化且渲染无副作用**。

8. **工具集合爆炸需收敛** (#4625)  
   `exec_shell*`、`task_shell*` 等多变体，**统一为单一 `Bash` 工具**，简化模型决策面。

9. **自定义 Provider 配置标准化诉求** (#4660)  
   社区期望参考 **Kimi Code** 等成熟方案，提供声明式、可版本化的 Provider/Model 配置。

10. **发布门禁与 Contributor 信用对齐** (#4650, #4649, #4678)  
    v0.9.1 设立 **“不发布的完成看板”**，要求 **Exact Dogfood + 信用映射** 双达标才可发布。

---

> **下一关注点**：v0.9.1 是否在本周内完成“完成看板”全部勾选并切入发布流程；`#2870` 命令边界重构后续 Layer 合并节奏；HarmonyOS 等新平台 CI 集成进展。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*