# AI CLI 工具社区动态日报 2026-09-08

> 生成时间: 2026-09-08 02:08 UTC | 覆盖工具: 9 个

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

**横向对比分析报告（2026‑09‑08）**

---

### 1. 生态全景  
当前 AI CLI 工具正从单一的指令执行向“多智能体＋插件生态＋跨平台工作流”方向演进。社区普遍关注 **会话/记忆可靠性**、**权限与安全**、**模型配额透明度**以及 **跨平台 UI/UX**，而插件钩子（Claude Code 的 Function Hooks、OpenCode 的 MCP/Provider 扩展、Qwen Code 的工作流可视化）成为提升可组合性的共同突破口。总体来看，成熟工具（Claude Code、OpenAI Codex）在稳定性与企业级特性上投入较多，而新兴项目（Kimi Code、DeepSeek TUI、Pi）则更侧重功能原型与跨设备协同。  

---

### 2. 各工具活跃度对比  

| 工具 | 今日 Issues 数*（热点/总数） | 今日 PR 数*（更新/总数） | Release 情况（今日是否有新版本） |
|------|----------------------------|--------------------------|-----------------------------------|
| Claude Code | ≥10 热点（未给出具体 total） | 2 条更新（过去 24h） | 无 |
| OpenAI Codex | ≥10 热点（未给出具体 total） | ≥10 条更新（精选列表） | 有：`rust‑v0.154.0‑alpha.6` |
| Gemini CLI | ≥10 热点（未给出具体 total） | ≥10 条更新（精选列表） | 有：`v0.60.0-nightly.20260908.g85aca163f` |
| GitHub Copilot CLI | ≥10 热点（未给出具体 total） | 4 条更新（过去 24h） | 无 |
| Kimi Code CLI | 4 条更新（过去 24h） | 2 条新提交（过去 24h） | 无 |
| OpenCode | ≥10 热点（未给出具体 total） | ≥10 条更新（精选列表） | 无 |
| Pi | >50 条更新（社区统计） | >27 条提交（社区统计） | 无 |
| Qwen Code | ≥10 热点（未给出具体 total） | ≥10 条更新（精选列表） | 有：`v0.23.1‑preview.2`、`v0.23.0‑nightly.20260907`、`cua‑driver‑rs v0.20.4` |
| DeepSeek TUI | 未给出具体统计（仅说明今日版本） | 未给出具体统计 | 有：`v0.9.13` |

\*因原始日报仅提供了热点或精选条目，表格中列出的数值为“已知最低值”；实际总数可能更高。

---

### 3. 共同关注的功能方向  

| 功能方向 | 涉及工具（代表性 Issue/PR） | 具体诉求 |
|----------|----------------------------|----------|
| **会话/记忆可靠性** | Claude Code（#59248、#62476）、OpenCode（#43277、#45011）、Qwen Code（#8586、#11119）、DeepSeek TUI（会话恢复相关） | 防止静默清理、提供 opt‑out/清理前通知、确保跨重启恢复、后台输出不丢失 |
| **插件/钩子系统增强** | Claude Code（Function Hooks #91870）、OpenCode（MCP/Provider 扩展 PR #47866、#47851、#47156）、Qwen Code（工作流可视化 #10594） | 允许插件深度修改框架行为、标准化模型提供商接口、可视化动态工作流 |
| **跨平台/桌面端稳定性** | Claude Code（Windows 窗口置顶 #89467、终端闪烁 #66540）、OpenAI Codex（macOS 远程控制 #37403、Windows 截图 #25178）、GitHub Copilot CLI（桌面端会话创建卡死 #4756、#4742）、Kimi Code（Windows 输入法双字节 #2584） | 解决窗口置顶、终端闪烁、远程控制失效、输入法字符重复等阻塞性 Bug |
| **模型容量与配额透明度** | OpenAI Codex（“capacity” 错误 #28507、#43398）、Claude Code（Fast Mode 计入额度 #83302、#87063）、Qwen Code（百炼收费陷阱 #44） | 细粒度配额展示、使用统计、防止意外计费 |
| **安全与隐私（信息泄露、环境变量）** | Claude Code（worktree 记忆边界 #16600）、OpenAI Codex（沙箱崩溃 #30043）、Qwen Code（路径穿越审计 #8835）、Pi（离线模式误导 #8684） | 防止记忆跨 worktree 泄漏、强化沙箱隔离、清理敏感环境变量、配置行为与文档一致 |
| **UI/UX 交互流畅度** | Claude Code（MEMORY.md 压缩阈值可配 #91188）、GitHub Copilot CLI（TUI 高 CPU #4750、ask_user 数据丢失 #4738）、Qwen Code（TUI 渲染层迁移 #8662）、Pi（流式取消失效 #8823） | 减少频繁提醒、防止 UI 死循环、提供可配置的渲染引擎、确保 ESC 能及时中断流式输出 |

---

### 4. 差异化定位分析  

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 插件钩子、会话记忆、企业级安全 | 重度依赖 Claude 模型的专业开发团队 | 基于 Anthropic 的闭源插件框架，逐步开放 Side‑effect tracking 钩子 |
| **OpenAI Codex** | 跨平台远程控制、模型容量管理、安全沙箱 | 使用 OpenAI 系列模型的全平台开发者 | Rust 核心 + TUI，强调服务‑CLI 版本同步与 Secure Enclave 验证 |
| **Gemini CLI** | 身份验证（Secure Enclave）、沙盒环境变量净化、工具输出容错 | 需要严格身份验证与细粒度沙盒的企业用户 | Go 实现，侧重官方稳定版与夜间版的快速迭代 |
| **GitHub Copilot CLI** | 桌面端会话管理、MCP OAuth、权限策略（--yolo） | 已深度绑定 GitHub 生态的开发者 | TypeScript/Node.js，聚焦本地会话队列与 MCP 标准兼容性 |
| **Kimi Code CLI** | 移动端远程配对（手机观察/否决）、输入法兼容、计划模式诉求 | 偏好轻量交互与多设备协同的个人或小团队 | 基于自研大模型，强调手机端观察者角色与本地技能缓存 |
| **OpenCode** | 多模型提供商扩展（Z.AI、Moonshot、Snowflake）、SSE 流稳定性、IDE 集成诉求 | 想要自行挑选模型供应商并寻求原生 IDE 集成的团队 | Python/TypeScript 插件化架构，侧重 Provider 抽象与事件流容错 |
| **Pi** | 平台适配文档（Windows 指南）、提供商路由（Copilot、Gemini、OpenRouter）、流式可靠性 | 追求多模型切换与离线实验的爱好者与研究者 | 基于 Rust 的交互式 shell，强调插件式提供商与 TUI 定制 |
| **Qwen Code** | 工作流可视化（web‑shell）、后台 Agent 恢复、模型推理强度配置 | 需要可视化工作流与细粒度推理控制的科研与工程团队 | TypeScript 前端 + Rust 后端，侧重可插拔的工作流引擎与 ACP 子进程 |
| **DeepSeek TUI** | 会话恢复、版本快速迭代（v0.9.13） | 喜欢极简终端 UI 且快速跟进版本的开发者 | 基于 Rust 的 TUI 框架，版本发布频繁但社区反馈尚未形成大规模 Issue 汇总 |

---

### 5. 社区热度与成熟度  

| 高热度（Issue/PR 数多） | 中等热度 | 较低/待发展 |
|--------------------------|----------|--------------|
| **Claude Code**、**OpenAI Codex**、**Gemini CLI**、**OpenCode**、**Qwen Code** 均有 ≥10 条热点 Issue 与同等数量的 PR，显示活跃的讨论与快速迭代。 | **Pi**（>50 Issue、>27 PR）虽然总量大，但多数为使用咨询与提供商路由问题，深度技术讨论相对分散。 | **GitHub Copilot CLI**、**Kimi Code CLI**、**DeepSeek TUI** 的 Issue/PR

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-09-08）

## 1. 热门 Skills 排行

| 排名 | PR 编号 | Skill 名称 | 功能概述 | 当前状态 | 关键亮点 |
|------|----------|------------|----------|----------|----------|
| 1 | #1298 | `run_eval.py` 记忆回溯修复 | 修复 `run_eval.py` 在所有技能描述上的 0% 回显率问题，解决 Windows 流读取与并行工作器触发失败 | **OPEN** | 影响范围广，直接关系到技能优化的核心循环；涉及 Windows 兼容性与并发处理 |
| 2 | #1615 | `scnet-hpc` 技能 | 为 SCNet HPC 集群提供基于配置文件的 SSH、Slurm 工作流与资源管理 | **OPEN** | 新增领域技能，聚焦高性能计算环境的运维与调度 |
| 3 | #1367 | `self-audit` 技能 | 引入机械文件验证 + 四维推理质量门禁（v1.3.0），实现输出前的全链路审计 | **OPEN** | 提升整体技能可靠性，是“质量门禁”理念的落地实现 |
| 4 | #1628 | `Hivemind` 多代理编排技能 | 将 Claude Code 设为规划者/审阅者/合并器，利用头less OpenCode 工作者降低成本 | **OPEN** | 解决多代理协同瓶颈，支持跨工具任务分解与协同执行 |
| 5 | #1734 | `orphaned docx comments` 检测技能 | 识别并处理 DOCX 文件中的孤儿评论（悬空段落、页码错位等） | **OPEN** | 文档质量治理，直接改善生成文档的可读性 |
| 6 | #514 | `document-typography` 技能 | 针对 AI 生成文档的排版问题（单词溢出、 widow paragraphs、编号错位）进行校正 | **OPEN** | 提升文档输出质量，解决常见排版痛点 |
| 7 | #539 | `skill-creator` YAML 特殊字符警告 | 在 `skill-creator` 中检测描述字段中未加引号的 YAML 特殊字符，防止解析错误 | **OPEN** | 代码健壮性改进，提升开发者体验 |
| 8 | #1627 | `buffer-api` 代理技能 | 为 Buffer GraphQL API 提供通用代理技能，支持社交帖子调度与管理 | **OPEN** | 扩展 Claude Code 与外部图形化工具的集成能力 |

> **备注**：以上排名综合考虑 PR 发布时间、社区讨论活跃度及潜在影响范围。#1298 因涉及核心评估脚本而处于最高优先级。

---

## 2. 社区需求趋势

从 Issues 分析，社区最期待的技能方向集中在以下几个领域：

1. **工作流自动化与多代理协作**  
   - `#1628`（Hivemind）、`#1627`（Buffer API）、`#1615`（scnet-hpc）均体现了对复杂任务拆解、多代理协同以及 HPC 环境管理的迫切需求。

2. **代码质量与安全控制**  
   - `#1298`（run_eval.py 修复）、`#1367`（自审计技能）、`#1390`（MCP 评估问题）显示出对技能可靠性、安全性及上下文窗口管理的深层关注。

3. **文档处理与排版优化**  
   - `#514`（文档排版）、`#486`（ODT 技能）反映出用户希望获得更精细的文档生成与格式化能力。

4. **生态集成与插件兼容性**  
   - `#189`（文档技能与示例技能重复）、`#228`（组织级技能共享）提示社区希望统一插件管理与跨项目技能复用机制。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃且具备较高落地潜力，建议优先评审：

- **#1298** – `run_eval.py` 记忆回溯修复：核心评估脚本缺陷影响所有技能，修复后将显著提升技能迭代质量。
- **#1615** – `scnet-hpc` 技能：针对 HPC 领域的专业化需求，具备明确的使用场景与技术价值。
- **#1367** – `self-audit` 技能：提供全流程

---



# Claude Code 社区动态日报 — 2026-09-08

---

## 1. 今日速览

今日 Claude Code 仓库无新版本发布，但社区活跃度极高。最引人注目的是 **Function Hooks** 提案（#91870）获得 136 条评论、82 个 👍，被视为插件生态的下一个突破口。同时，**数据丢失类 Bug**（会话记录被静默清理）持续发酵，多个相关 Issue 累计获得超过 50 个 👍，已成为社区最关注的稳定性问题之一。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 社区热点 Issues（精选 10 个）

### 🔥 #91870 — Function Hooks：让插件能力提升 10 倍
- **标签**: `[enhancement]` `[area:hooks]` `[area:plugins]`
- **热度**: 136 评论 / 82 👍
- **为什么重要**: 提出了一套基于 side-effect tracking 的安全扩展机制，允许插件深度修改 Claude Code 行为，同时通过参数化 `$` 对象和类似 Express/Koa 的 `next` 续模型保证组合性。这可能是插件系统自诞生以来最大的架构升级。
- **链接**: https://github.com/anthropics/claude-code/issues/91870

### 🔥 #59248 — 静默清理会话记录，无警告、无恢复手段
- **标签**: `[bug]` `[data-loss]` `[platform:macos]`
- **热度**: 42 评论 / 32 👍
- **为什么重要**: 用户在使用 Cursor 扩展时，工作区中所有早于当前会话的 Claude Code 对话记录被**静默删除**，无任何提示、无 opt-in 开关、无恢复途径。直接影响生产力和数据安全。
- **链接**: https://github.com/anthropics/claude-code/issues/59248

### 🔥 #62476 — Claude Code 默认 30 天后静默删除对话记录
- **标签**: `[bug]` `[reproduced]`
- **热度**: 25 评论 / 24 👍
- **为什么重要**: 与 #59248 呼应，确认了 30 天自动清理策略的存在，但用户完全不知情。社区要求至少提供 opt-out 开关或清理前通知。
- **链接**: https://github.com/anthropics/claude-code/issues/62476

### 🔥 #89467 — Windows 桌面应用窗口始终置顶，无法关闭
- **标签**: `[bug]` `[platform:windows]` `[area:desktop]`
- **热度**: 19 评论 / 28 👍
- **为什么重要**: Windows 用户的核心痛点——应用窗口强制置顶且无任何设置、快捷键或菜单项可关闭，严重干扰多窗口工作流。
- **链接**: https://github.com/anthropics/claude-code/issues/89467

### 🔥 #26951 — Cowork macOS 插件安装失败（HTTP 404）
- **标签**: `[bug]` `[area:plugins]` `[area:desktop]`
- **热度**: 22 评论 / 16 👍
- **为什么重要**: `plugins.claude.ai` 域名无法解析，导致 Cowork 模式下插件安装完全不可用，影响桌面端核心功能。
- **链接**: https://github.com/anthropics/claude-code/issues/26951

### 🔥 #92016 — Claude Desktop 自动拒绝 CLI 原生 SendMessage
- **标签**: `[bug]` `[regression]` `[area:desktop]` `[area:agents]`
- **热度**: 19 评论 / 4 👍
- **为什么重要**: macOS 桌面端 1.46388.1 版本中，Code 标签页自动拒绝了 CLI 原生的 `SendMessage` 工具，导致子智能体（subagent）跨会话恢复功能被破坏。
- **链接**: https://github.com/anthropics/claude-code/issues/92016

### 🔥 #16600 — 记忆遍历应尊重 git worktree 边界
- **标签**: `[enhancement]` `[area:core]` `[area:security]`
- **热度**: 12 评论 / 13 👍
- **为什么重要**: 当使用 git worktree 时，Claude Code 的记忆（MEMORY.md）可能跨工作树边界泄露或混淆，存在安全隐患和上下文污染风险。
- **链接**: https://github.com/anthropics/claude-code/issues/16600

### 🔥 #91188 — 自动记忆 MEMORY.md 压缩阈值应可配置
- **标签**: `[enhancement]` `[memory]`
- **热度**: 35 评论
- **为什么重要**: 当前 MEMORY.md 的 200 行 / 25KB 硬编码限制导致频繁压缩提醒，用户希望可配置或至少能单独抑制该提醒。
- **链接**: https://github.com/anthropics/claude-code/issues/91188

### 🔥 #66540 — Windows 每次子进程生成时终端窗口闪烁
- **标签**: `[bug]` `[platform:windows]` `[area:tools]`
- **热度**: 13 评论 / 6 👍
- **为什么重要**: MCP 服务器启动、Bash 工具执行、子智能体生成等操作都会弹出 conhost.exe + cmd.exe 窗口，严重干扰多会话并行工作。
- **链接**: https://github.com/anthropics/claude-code/issues/66540

### 🔥 #65577 — Claude Desktop 本地 Agent VM 磁盘无限增长
- **标签**: `[bug]` `[area:cowork]` `[area:sandbox]`
- **热度**: 6 评论 / 8 👍
- **为什么重要**: 基于 gvisor/vfkit 的本地 Linux 微型 VM 磁盘镜像（`rootfs.img`）持续增长且从不回收，最终导致磁盘满和 out-of-space 错误。
- **链接**: https://github.com/anthropics/claude-code/issues/65577

---

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时内仅有 2 条 PR 更新，数量较少，以下为全部内容。

### #26175 — 修复原生安装引导脚本（已关闭）
- **作者**: rlueder | **状态**: `[CLOSED]`
- **内容**: 修复了 `curl -fsSL https://claude.ai/install.sh | bash` 引导脚本——原脚本委托给下载二进制的 `install` 子命令，静默失败且未创建 `~/.local/bin/claude`，随后删除用户已有的 npm 全局安装作为"清理"，导致最终无可用的 `claude` 命令。
- **为什么重要**: 这是新用户入门的关键路径，修复直接影响安装成功率。
- **链接**: https://github.com/anthropics/claude-code/pull/26175

### #39043 — 移除前端设计 Skill 中的"复古未来主义"推荐
- **作者**: t3dotgg | **状态**: `[OPEN]`
- **内容**: 从 Frontend Design Skill 中移除 "retro-futuristic" 风格推荐。作者只写了一句 "Trust me on this one."——看似简单，但反映了社区对默认美学建议的审美疲劳。
- **为什么重要**: 虽小，但体现了社区对默认配置和推荐质量的持续关注。
- **链接**: https://github.com/anthropics/claude-code/pull/39043

---

## 5. 功能需求趋势

从近期 Issue 中可提炼出以下核心方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **插件/钩子系统增强** | Function Hooks (#91870) | 🔥🔥🔥 |
| **记忆系统可配置性** | MEMORY.md 阈值 (#91188)、worktree 边界 (#16600) | 🔥🔥 |
| **数据安全与保留策略** | 会话记录静默清理 (#59248, #62476) | 🔥🔥🔥 |
| **桌面端稳定性** | 插件安装 404 (#26951)、SendMessage 被拒 (#92016)、VM 磁盘膨胀 (#65577) | 🔥🔥 |
| **Windows 体验优化** | 窗口置顶 (#89467)、终端闪烁 (#66544)、MSIX 签名损坏 (#88323) | 🔥🔥 |
| **跨会话/跨平台可移植性** | teleport web→local 丢历史 (#92734)、Session 名称未暴露 (#84894) | 🔥 |
| **MCP/连接器可靠性** | 本地 MCP 就绪超时 (#92758)、连接器延迟挂载 (#83694) | 🔥 |
| **订阅与计费** | Fast Mode 计入额度 (#83302, #87063) | 🔥 |

---

## 6. 开发者关注点

1. **数据安全是最大隐忧**：多个 Issue 报告会话记录被无提示静默删除，社区要求 Anthropic 明确保留策略、提供 opt-out 开关，并在清理前通知用户。

2. **插件生态期待质变**：Function Hooks 提案获得空前关注，开发者希望插件不仅能注册工具，还能深度修改框架行为，同时保持安全性和可组合性。

3. **Windows 桌面端体验亟待改善**：从窗口置顶、终端闪烁到 MSIX 签名损坏，Windows 平台的桌面端问题密度明显高于 macOS，且多数为阻塞性 Bug。

4. **记忆/上下文边界需要明确**：worktree 场景下的记忆泄露风险、MEMORY.md 硬编码限制、teleport 跨端不一致——都指向同一个需求：让开发者对"什么被记住、在哪里被记住"有完全控制权。

5. **跨会话通信能力不足**：SendMessage/ListAgents 在桌面端 2.1.258→2.1.260 回归中损坏，且 Session 名称仅在 UI 层面展示而不暴露给 API——子智能体编排的基础设施仍不成熟。

6. **定价策略与功能可用性矛盾**：Fast Mode 作为 Opus 5 上最实用的加速特性，被排除在 Max 订阅额度之外，引发社区不满。

---

*报告基于 GitHub `anthropics/claude-code` 仓库 2026-09-08 数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报 – 2026‑09‑08**

---

### 1. 今日速览  
- 社区迎来 **rust‑v0.154.0‑alpha.6** 的首次公开发布，同时出现大量跨平台 bug（macOS 远程控制、Windows 截图、模型容量）以及多项 UI/UX 改进的 PR。  
- 多个高评论 Issue（如 #37403、#25178、#28507）持续受到用户关注，表明稳定性与模型可用性仍是开发者的核心痛点。

---

### 2. 版本发布  
- **rust‑v0.154.0‑alpha.6** ( <https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6> )  
  - 主要修复了若干崩溃路径、提升了 CLI 与服务器的并发安全性，并加入了对 macOS Secure Enclave 的初步支持。  
  - 仍为预发布，后续将进入正式版。

---

### 3. 社区热点 Issues（选 10 条）  

| Issue | 关键痛点 | 社区反应 | 链接 |
|-------|----------|----------|------|
| **#37403** – macOS Desktop 无法恢复 Remote Control / CLI 线程（已回复 59 条） | 更新后 Desktop 无法在离线后续续远程会话，出现 “already has an active writer” 错误。 | 高频复现，用户提出回归导致工作流中断，呼吁快速修复。 | <https://github.com/openai/codex/issues/37403> |
| **#25178** – Windows 22H2 `SetIsBorderRequired` 导致截图失败 | `get_window_state` 在特定 Windows 版本上因权限错误 abort。 | 影响 Windows 用户的截图功能，已有 48 条讨论，社区期待修复。 | <https://github.com/openai/codex/issues/25178> |
| **#28507** – 选中模型容量满，仅 5.4‑mini 可用 | Pro 订阅用户在多模型（GPT‑5.5/5.6‑Sol/6‑Astra）均触发 “capacity” 错误。 | 45 条评论，用户抱怨配额管理混乱，期待更明确的配额分配机制。 | <https://github.com/openai/codex/issues/28507> |
| **#41513** – 浮动宠物变成不可点击/不可拖动 | Windows 宠物在前景层被设置为 click‑through，导致交互失效。 | 29 条讨论，用户报告在多机器上复现，要求 UI 层层级修正。 | <https://github.com/openai/codex/issues/41513> |
| **#30385** – Windows 最近本地项目线程消失 | 本地线程仍在磁盘中，但 UI 未刷新，导致搜索和侧边栏不可见。 | 15 条评论，用户强调数据不应丢失，期待索引刷新机制。 | <https://github.com/openai/codex/issues/30385> |
| **#32164** – Windows Remote Control 注册从未完成 | 远程控制 enroll 过程卡在 “Connected” 状态，无法进入后续操作。 | 15 条讨论，影响跨设备协作，社区呼吁完整的 enrollment 流程。 | <https://github.com/openai/codex/issues/32164> |
| **#40575** – RFC《Self‑Evolving Agents》提案 | 提出 `/learn` 与 `Rule Metabolism` 让代理自行迭代学习。 | 13 条评论，技术探索热烈，但尚未得到官方采纳。 | <https://github.com/openai/codex/issues/40575> |
| **#43398** – 多模型均显示 “capacity” 错误（仅 5.4‑mini 可用） | 与 #28507 类似，Pro 订阅用户在多个高级模型上受限。 | 15 条评论，用户质疑配额分配逻辑，期待更细粒度的使用统计。 | <https://github.com/openai/codex/issues/43398> |
| **#30043** – macOS GUI 应用从沙箱启动即崩溃 (`_RegisterApplication`) | Chrome、LibreOffice 等在 Codex 沙箱下直接崩溃。 | 13 条评论，提示系统层面的 sandbox 限制过于严格。 | <https://github.com/openai/codex/issues/30043> |
| **#42963** – Composer 在 ChatGPT Desktop 26.901.31953 后消失 | 完成一次助理回复后，侧边栏的 Composer 面板不再出现。 | 6 条讨论，用户担心工作流中断，期待 UI 状态恢复机制。 | <https://github.com/openai/codex/issues/42963> |

---

### 4. 重要 PR 进展（选 10 条）  

| PR | 主要改动 | 链接 |
|----|----------|------|
| **#43624** – Add macOS user verification with Secure Enclave signing | 引入生物特征验证，解决 macOS 端不支持的 provider 问题。 | <https://github.com/openai/codex/pull/43624> |
| **#43622** – Warn when the connected Codex service is older than the CLI | 启动时提示服务版本过旧并自动重连（官方 stable 版）。 | <https://github.com/openai/codex/pull/43622> |
| **#43621** – Add worktree classification to thread telemetry | 为线程统计添加 `is_worktree` 字段，区分工作树与主分支。 | <https://github.com/openai/codex/pull/43621> |
| **#43619** – Add a stable TUI/app-server version comparison helper | 提供 `is_official_server_older` 检查，防止版本不匹配导致异常。 | <https://github.com/openai/codex/pull/43619> |
| **#43604** – Exclude base instructions from the bundled model catalog | 移除 `base_instructions`，保持模型目录简洁。 | <https://github.com/openai/codex/pull/43604> |
| **#43603** – Recover missed tmux resize notifications in the TUI | 背景监控 tmux 大小变化，实时同步终端尺寸。 | <https://github.com/openai/codex/pull/43603> |
| **#43602** – Move Guardian REPL evidence rendering into the shared context registry | 将 REPL 证据统一入 `codex-guardian-context`，提升一致性。 | <https://github.com/openai/codex/pull/43602> |
| **#43601** – Move Guardian image selection into shared context sections | 图片资源统一管理，支持异步加载与过滤。 | <https://github.com/openai/codex/pull/43601> |
| **#43599** – Move trusted skill evidence into the Guardian context registry | 将可信技能渲染入 `TrustedSkills`，便于后续采样。 | <https://github.com/openai/codex/pull/43599> |
| **#43572** – Make the managed app-server shutdown grace period configurable | 通过 `shutdownGraceSeconds` 让用户自定义优雅退出时长。 | <https://github.com/openai/codex/pull/43572> |

---

### 5. 功能需求趋势  

- **跨平台稳定性**：macOS 与 Windows 两大平台均出现崩溃或交互异常（远程控制、截图、GUI 启动），表明系统层的兼容性与边界处理亟待加强。  
- **会话与状态管理**：本地项目线程消失、Deleted conversation 仍在侧边栏、Composer 消失等现象显示，**会话持久化与 UI 状态同步**是高频需求。  
- **模型容量与配额透明化**：多位用户反复出现 “capacity” 错误，期待更细粒度的配额展示、使用统计以及模型切换的平滑过渡。  
- **UI/UX 细节**：浮动宠物不可交互、Composer 消失、 pets 在次级显示器卡住、Remote Control 注册卡死等，说明**交互流畅度与可预期性**是社区关注的重点。  
- **功能扩展**：RFC《Self‑Evolving Agents》以及对 **live voice**、**tmux 与窗口尺寸**、**可配置的 app‑server 关闭超时**等 PR 表明社区渴望**更强的自动化、可定制化与可扩展性**能力。  

---

### 6. 开发者关注点（痛点与高频需求）  

- **远程控制与 enrollment**：多个 Issue（#37403、#32164、#39915）揭示远程控制在 macOS 与 Windows 上的不稳定性，开发者迫切需要可靠的跨平台会话接管与重连机制。  
- **平台兼容性**：Windows 截图、macOS GUI 启动、Linux 终端交互等均出现系统 API 不兼容或权限错误，提示 **跨平台适配** 与 **系统权限处理** 是当前技术瓶颈。  
- **模型使用与配额**：用户频繁遇到 “capacity” 限制，尤其在 Pro 订阅下多模型切换受阻，呼吁 **更透明的配额管理** 与 **模型热备** 机制。  
- **UI 状态一致性**：Composer 消失、Deleted conversation 仍在侧栏、宠物不可拖动等 UI 状态异常，影响工作流连贯性，需要 **状态同步与回滚** 机制。  
- **沙箱与安全**：#30043、#41799、#42523 等涉及沙箱崩溃、安全策略误判，开发者希望 **沙箱限制更细化**、**安全校验更准确**，以免误伤合法操作。  

---

*以上报告基于 GitHub 数据截至 2026‑09‑08，供技术开发者快速把握社区动态与关键进展。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: Technical analyst focused on AI development tools
   - Task: Generate a daily report for Gemini CLI community dynamics for 2026-09-08
   - Data Source: GitHub repository `google-gemini/gemini-cli`
   - Required Sections:
     - Today's Summary (2-3 sentences)
     - Version Release
     - Community Hotspot Issues (10 selected, explain importance & community reaction)
     - Important PR Progress (10 selected, explain function/fix)
     - Functional Requirements Trends (from all issues, extract community focus areas)
     - Developer Concerns (summarize pain points/high-frequency needs)
   - Language: Concise professional Chinese, suitable for technical developers
   - Each item must include GitHub link

2.  **Analyze Provided Data:**
   - Latest Releases: v0.60.0-nightly.20260908.g85aca163f (released today, full changelog link)
   - Latest Issues (50 total, showing top 30 by comments): I need to pick 10 from these. Look at comments, priority, relevance.
   - Latest PRs (22 total, showing top 20 by comments): Many have `undefined` comments count, but I can still select based on content/relevance and the ones listed with comments or clear focus.
   - Date focus: 2026-09-08 (today's report date)

   Let's extract key issues and PRs:

   **Issues (top 30 by comments, dated up to 2026-09-08):**
   #22323: 13 comments - Subagent recovery after MAX_TURNS reported as GOAL success (bug, p1)
   #22745: 7 comments - EPIC for AST-aware file reads/search/mapping (feature, p2)
   #21968: 6 comments - Gemini doesn't use skills/sub-agents enough (bug/feature, p2)
   #26468: 5 comments - "bro what" bug report (stale, p2)
   #26525: 5 comments - Deterministic redaction, reduce Auto Memory logging (security/bug, p2)
   #28203: 4 comments - isAuthenticationError falsely matches port numbers/non-auth 401 (bug, p2)
   #26522: 4 comments - Stop Auto Memory retrying low-signal sessions (bug, p2)
   #25166: 4 comments - Shell command execution stuck "Waiting input" (bug, p1, 3 upvotes)
   #22232: 4 comments - Enhance browser_agent resilience (feature, p3)
   #21983: 4 comments - Browser subagent fails in Wayland (bug, p1)
   #28129: 3 comments - Closed, gh pr create limitation (enhancement, p3 closed)
   #28127: 3 comments - Closed, GeminiCLI.com feedback (bug, p3 closed)
   #26523: 3 comments - Surface/quarantine invalid Auto Memory patches (bug, p2)
   #24246: 3 comments - 400 error with >128 tools (bug, p2)
   #23571: 3 comments - Model creates tmp scripts in random spots (bug, p2)
   #22672: 3 comments - Agent should stop/discourage destructive behavior (feature, p2)
   #22267: 3 comments - Browser Agent ignores settings.json overrides (bug, p2)
   #21986: 3 comments - get-shit-done output hook crash (bug, p1)
   #28125: 2 comments - Closed, duplicate of 26523/26522/26525/25166
   #28332: 2 comments - GeminiCLI.com auth issue (site, p2 stale)
   #28326: 2 comments - Nightly release failure for v0.52.0 (release-failure, p1 stale)
   #26516: 2 comments - Memory system bugs/quality (p2)
   #22746: 2 comments - Investigate AST aware CLI tools (p3)
   #22598: 2 comments - Subagent trajectory visible via /chat share (feature, p3)
   #22466: 2 comments - Fix incorrect \n escape behavior (core bug, p2)
   #22465: 2 comments - Gets stuck at interactive prompt creating vite app (agent bug, p2)
   #21924: 2 comments - High performance flicker-free terminal resize (core bug, p2)
   #21763: 2 comments - Bugreport doesn't provide subagent context (bug, p1)
   #21432: 2 comments - Improve Agent "Self-Awareness" (feature, p3)
   #28338: 1 comment - Unable to complete a chat (p2 stale, need triage)

   I need to pick 10 issues that represent current community focus, bugs, features, and trends. I'll select those with higher engagement, recent activity, or thematic relevance to AI CLI tools.

   **PRs (22 total, many from 2026-08-24, some recent):**
   #29013: Closed - doc: missing CLI flags
   #29022: Closed - retain ask_user question in text history
   #29017: Closed - Fix/28944 symlink skills dedupe
   #29011: Closed - docs: fix ACP flags
   #29009: Closed - docs: correct env var redaction setting keys
   #29015: Closed - ci: set explicit permissions on workflows
   #29008: Closed - fix(core): strip execution-affecting GIT_* env vars
   #29005: Closed - fix(sandbox): normalize DEBUG env variable truthiness
   #29004: Closed - fix(core): guard formatTruncatedToolOutput against non-positive maxChars
   #28995: Closed - fix(core): prevent formatTruncatedToolOutput output inflation on negative maxChars
   #27636: Closed - perf: optimize VirtualizedList and fix click handling
   #29243: Open - chore/release: bump version to 0.60.0-nightly.20260908.g85aca163f (automated)
   #29242: Open - fix(core): stop matching 401 as substring in isAuthenticationError (bug fix, directly relates to issue #28203!)
   #29166: Open - fix(extensions): back up extension dir before update so rollback restores it
   #29241: Closed - refactor/zoe core (wip)
   #29214: Open - fix(sandbox): harden filesystem boundaries and isolate runtime state
   #29239: Open - fix(cli): prevent ghost text wrapping infinite loop at narrow widths
   #29236: Closed - wip: PoC for workflow poisoning
   #29233: Open - chore/release: bump version to 0.60.0-nightly.20260907.g85aca163f
   #29237: Open - fix: list_background_processes prints (Exit Code: null) for signal-killed processes

   I'll pick 10 PRs that show real progress, bug fixes, and feature implementations.

   **Functional Requirements Trends:** From issues, I see focus on: sub-agent/token management, AST-aware tools, memory/auto-memory reliability, authentication error handling, sandbox/security, terminal UI performance, browser agent resilience, CLI flag documentation, tool/output management, and self-awareness.

   **Developer Concerns:** Pain points: sub-agents hitting turn limits incorrectly, authentication false positives, shell command hangs, browser agent lock issues, memory patch handling, tool overload (400 errors), destructive command tendencies, environment variable leaks, terminal UI glitches, and missing documentation/flags.

3.  **Structure the Report (in Chinese, concise professional):**
   I'll format it with clear sections, each item has a brief description and GitHub link. I'll make sure to stay within the data provided, not hallucinate beyond it.

   Let draft each section:

   **1. 今日速览**
   - v0.60.0-nightly.20260908.g85aca163f 夜间版发布，聚焦核心错误修复与沙盒安全增强。
   - 社区内最大讨论聚焦于 sub-agent 回溯失败与 AST 感知工具的可行性调研，反映开发者对代理推理可靠性与代码导航的双重关注。

   **2. 版本发布**
   - v0.60.0-nightly.20260908.g85aca163f 正式夜间构建（链接）。本次发布主要包含 `isAuthenticationError` 修复、沙盒环境变量清理以及 `formatTruncatedToolOutput` 容错能力增强等底层健壮性改进。

   **3. 社区热点 Issues (精选 10 条)**
   - #22323 (13 comments) Sub-agent MAX_TURNS 报告为 GOAL 而非中断：优先级 p1，直接影响多 agent 工作流的可预测性，社区正在复现并讨论转傲态重置策略。
   - #28203 (4 comments) isAuthenticationError 误匹配包含 '401' 的非认证信息：可能触发错误的重新认证流程，已有 PR #29242 尝试修复。
   - #25166 (4 comments, 👍3) Shell 命令完成后卡在 "Waiting input"：简单 CLI 会话频繁出现，阻断自动化流程，被标记为 p1 严重 bug。
   - #26525 (5 comments) Auto Memory 记日志与敏感信息重定向问题：涉及隐私与安全，背景提取代理在模型上下文中发生重daction，存在数据泄露风险。
   - #21983 (4 comments) Browser sub-agent 在 Wayland 下失败：跨平台兼容性问题，工作流中常用的图形化交互环节受阻。
   - #22745 / #22746 (7+2 comments) AST 感知文件读/搜索与映射 EPIC：评估是否用 AST 代替基于正则的文本读取，可能显著降低 token 消耗与 turn 数。
   - #21968 (6 comments) Gemini 不自行使用自定义 Skills 与 Sub-agents：用户反馈模型倾向于直接调用 shell，忽略注册的技能定义，提升自主协作是当前工作流重点。
   - #26522 (4 comments) Auto Memory 低信号会话无限重试：导致后台提取占用资源，建议加入信号阈值与跳过机制。
   - #24246 (3 comments) 超过 128 tools 时触发 400 错误：工具范围控制不足，影响大型代码库的上下文管理。
   - #22267 (3 comments) Browser Agent 忽略 settings.json 覆盖（如 maxTurns）：配置生效失败，用户自定义策略被覆盖是常见投诉点。

   **4. 重要 PR 进展 (精选 10 条)**
   - #29242 (open) fix(core): stop matching 401 as substring in isAuthenticationError：直接解决 #28203 的根源，修复误报认证错误的问题。
   - #29008 (closed) fix(core): strip execution-affecting GIT_* env vars in getSafeGitEnv：防止受信任项目的 .env 泄露到 git 环境，提升供应链安全。
   - #29004 / #28995 (closed) formatTruncatedToolOutput 容错修复：修复 negative maxChars 导致输出膨胀的bug，提升工具输出处理的鲁棒性。
   - #29013 (closed) docs: document missing CLI flags：补充 --policy, --admin-policy 等 6 个未记录标志，改善 discoverability。
   - #29022 (closed) retain ask_user question in text history：解决 ask_user 交互后选项丢失的问题，便于会话恢复与复盘。
   - #29166 (open) fix(extensions): back up the extension dir before update so rollback restores it：扩展更新失败回滚机制，防止用户扩展配置丢失。
   - #29214 (open) fix(sandbox): harden filesystem boundaries and isolate runtime state：沙盒化进展，将 host 配置目录改为只读只配，增强隔离性。
   - #29239 (open) fix(cli): prevent ghost text wrapping infinite loop at narrow widths：修复 terminal 窄宽度下鬼文本无限折叠的 UI  Bug，提升 CLI 交互体验。
   - #27636 (closed) perf: optimize VirtualizedList and fix click handling：虚拟列表性能优化，基础设施层面的渲染效能提升。
   - #29237 (open) Fix: list_background_processes prints (Exit Code: null) for signal-killed processes：修复信号杀进程 exit code 显示异常，提升后台过程透明度。

   **5. 功能需求趋势**
   - **Agent 可靠性**：sub-agent 回溯、转态错误判断、max-turns 遵守情况是核心关注点，反映多 agent 工作流的可控性需求。
   - **安全与隐私**：Auto Memory 信息泄露、环境变量净化、沙盒隔离是热点，开发者对数据安全的敏感度提升。
   - **代码导航与 AST**：AST 感知工具的可行性调研处于探讨阶段，社区期待在 token 效率与精确定位之间找到平衡。
   - **UI 与 Terminal 体验**：ghost text 包裹死循环、terminal resize 闪lick、CLI 标志缺失等均为体验痛点，表明交互层仍有优化空间。
   - **跨平台兼容性**：Wayland 浏览器失效、不同 Shell 环境下的命令执行状态保持，是平台适配的持续需求。

   **6. 开发者关注点**
   - sub-agent 在 边界（MAX_TURNS、错误码）行为的可预测性，尤其是是否应中断或继续；
   - 认证错误的误判与重新认证流程的干扰；
   - Shell 命令执行后的状态清理与 "Waiting input" 卡顿；
   - Auto Memory 与日志记录中敏感信息的意外暴露；
   - 大型项目下工具上下文的溢出与 400 错误；
   - 浏览器/图形化环境在 Wayland/X11 下的兼容性问题；
   - 环境变量与配置的泄露风险，特别是 .env 与 Git 集成。

   Make sure each item has a GitHub link format. I'll use the format: `链接: https://github.com/...`

   Check against constraints:
   - 2-3 sentences for today's summary: yes
   - Version release: yes, included
   - 10 issues selected with explanation & community reaction: yes, each has comment count/priority context
   - 10 PRs selected with function/fix: yes
   - Functional trends: yes
   - Developer concerns: yes
   - Language: Chinese, concise, professional, technical
   - Each item附带 GitHub 链接: yes

   I'll now format the final output carefully, ensuring links are correct based on the provided data. I'll map issue numbers to GitHub URLs format: `https://github.com/google-gemini/gemini-cli/issues/{number}`. PRs: `https://github.com/google-gemini/gemini-cli/pull/{number}`.

   Double-check issue selections: I have 10. PR selections: 10. Trends and concerns are synthesized from the data.

   One thing: The user said "如有新版本，总结

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-09-08)

## 1. 今日速览
今日 Copilot CLI 社区整体活跃度较高，**暂无新版本发布**。社区反馈主要集中在**桌面端会话管理异常**（如无法创建新会话、会话永久卡死）以及 **MCP 连接与认证机制**的稳定性问题上。同时，关于权限策略误伤 (`--yolo` 被锁) 和跨仓库数据泄漏的 Bug 引发了开发者的高度关注。PR 方面，主要聚焦于安装脚本对非主流操作系统的兼容性修复。

## 2. 版本发布
*今日无新版本发布。*

## 3. 社区热点 Issues (Top 10)
以下是过去24小时内最值得关注的 10 个社区问题：

1. **[Issue #4757](github/copilot-cli#4757) --yolo 权限被 fail-closed 策略永久锁定**
   * **重要性**：高。管理员账户在无托管策略时，CLI 启动应用 fail-closed 姿态禁用绕过权限模式后，生命周期内无法解除，导致 `--yolo` 完全失效。
   * **社区反应**：引发对默认安全策略过于激进的讨论。
2. **[Issue #4742](github/copilot-cli#4742) & [#4756](github/copilot-cli#4756) -- 桌面端无法创建第二个 Local 会话**
   * **重要性**：高。桌面端 1.1.15 版本更新后，若项目已有活跃 CLI 进程，将无法创建新的 Local (branch) 会话，严重影响多任务并行工作流。
   * **社区反应**：Windows用户反馈强烈（#4756 👍: 9），被认为是当前最阻碍使用的痛点。
3. **[Issue #3945](github/copilot-cli#3945) -- Memories 在不同仓库间泄漏**
   * **重要性**：极高。新建仓库时，模型错误调用了其他仓库的记忆数据，存在严重的隐私和数据隔离风险。
   * **社区反应**：触发了对 Context Memory 机制安全性的担忧。
4. **[Issue #4755](github/copilot-cli#4755) -- 会话在 Turn End 永久卡死**
   * **重要性**：高。会话结束时进入既非空闲也非运行的永久锁死状态，队列消息静默丢失，只能强制杀进程。
   * **社区反应**：被视为严重的稳定性缺陷。
5. **[Issue #4505](github/copilot-cli#4505) -- 恢复会话保留过期 Connection Item IDs**
   * **重要性**：高。恢复旧会话后，所有提示词均因 `400 input item ID does not belong to this connection` 报错，且无法通过重试或 `/fork` 恢复。
   * **社区反应**：会话恢复功能的可用性受到质疑。
6. **[Issue #4017](github/copilot-cli#4017) & [#4681](github/copilot-cli#4681) -- MCP OAuth 认证静默失败及请求头缺失**
   * **重要性**：中高。非首次方 HTTP MCP 服务器在 OAuth 后无法拉起浏览器流，且 initialize 请求缺少 User-Agent，导致 MCP 生态集成受阻。
   * **社区反应**：开发者呼吁提升 MCP 连接的鲁棒性与标准兼容性。
7. **[Issue #4738](github/copilot-cli#4738) -- ask_user 表单提前按 Enter 导致数据永久丢失**
   * **重要性**：高。交互表单中提前回车会提交并清空正在输入的内容，造成不可逆的数据丢失。
   * **社区反应**：被定性为高优交互 Bug，强烈建议增加草稿自动保存。
8. **[Issue #4750](github/copilot-cli#4750) -- Copilot TUI 占用 CPU 过高**
   * **重要性**：中。TUI 空闲时占用 1个核，运行动态提示时飙升至 2-4 核，影响开发者机器性能。
   * **社区反应**：性能退化问题受到抱怨。
9. **[Issue #4709](github/copilot-cli#4709) -- Multi-repo 集合工作区因默认分支不同失效**
   * **重要性**：中。集合项目中成员仓库默认分支不一致（main vs master）导致 worktree 无法正确关联。
   * **社区反应**：多仓库协作用户关注度高。
10. **[Issue #4747](github/copilot-cli#4747) -- /refine 因模型不支持 reasoning_effort 报错**
    * **重要性**：中。`/refine` 命令内部调用了不支持该参数的模型（gpt-4o-mini），导致 400 错误。
    * **社区反应**：模型能力与工具调用参数的适配问题引发讨论。

## 4. 重要 PR 进展
过去24小时共更新 4 条 PR，重点关注安装兼容性及扩展生态：

1. **[PR #4762](github/copilot-cli#4762) & [#4761](github/copilot-cli#4761) -- 安装脚本报告不支持的操作系统**
   * **内容**：修复了 `install.sh` 在 FreeBSD 等非 macOS/Linux 系统下误报为 `Windows detected but winget not found` 的问题，现在将正确提示平台不受支持。
2. **[PR #4746](github/copilot-cli#4746) -- 添加实验性 next-action 扩展原型**
   * **内容**：新增一个可选的实验性 SDK 扩展示例（`examples/next-best-action/`），用于模型推断下一步动作，复用现有前台会话，不修改已安装 CLI。
3. **[PR #4748](github/copilot-cli#4748) -- Add joke cli**
   * **内容**：新增一个简单的 Joke CLI 扩展原型。

## 5. 功能需求趋势
从 Issues 的分布来看，社区需求与反馈主要集中在以下四个方向：

*   **会话生命周期与状态管理**：社区对会话的创建、恢复、销毁机制抱怨最多。需要更健壮的会话保持能力、正确的空闲状态检测以及可靠的队列处理机制。
*   **MCP 生态与标准兼容性**：MCP 的 OAuth 认证流程、请求头规范、取消机制（Cancellation）以及连接超时控制是当前的高频痛点，开发者需要更稳定的企业级 MCP 集成体验。
*   **多仓库与集合项目管理**：随着多 repo 协作增多，社区迫切需要按仓库/解决方案范围化会话列表、以及处理不同默认分支的工作流支持。
*   **自定义 Agent 与扩展生态**：如何更好地加载和识别通过 `--add-dir` 引入的自定义 Agent，以及解决扩展启动失败导致的工具调用挂起，是扩展生态建设的重点。

## 6. 开发者关注点
总结开发者的核心痛点与高频需求：

*   **稳定性与资源消耗**：TUI  CPU 占用过高、会话永久卡死（需强制杀进程）是破坏开发心流的首要问题。
*   **权限控制的安全性与灵活性**：`--yolo` 等绕过权限模式被 fail-closed 策略误伤且无法解除，开发者需要更细粒度的权限动态控制。
*   **环境与平台兼容性**：桌面端多会话冲突、安装脚本对非主流 OS（如 FreeBSD）的支持盲区，以及德语键盘等本地化输入问题，影响了更广泛用户群体的体验。
*   **数据安全与隔离**：Memory 跨仓库泄漏和 `ask_user` 表单数据丢失，直接触及开发者对数据隐私和防丢失的底线要求。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区日报** (2026-09-08)

---

### 1. 今日速览
- Windows 用户报告了输入法导致的双字节字符异常问题，影响提示词输入准确性。
- 社区持续呼声**“计划模式”**（issue #1354）获高票支持，但目前功能尚未实现。
- 有用户发现Agent可能陷入无限“Read-tool”循环，导致无法发出预期的编辑操作（issue #2637）。
- 两项新PR提交：构建远程代理手机配对功能，并优化`get_share_dir`路径缓存。

---

### 2. 版本发布
无新版本发布（24小时内无release活动）。

---

### 3. 社区热点 Issues

| # | 标题与状态 | 重要性与社区反馈 | 链接 |
|---|----------------|--------------------------|------|
| **#2584** | **[OPEN] Bug: Thai (and other IME-based) characters duplicated when typing in the prompt on Windows** | 直接影响Windows用户在IDE中使用输入法时提示词的准确性，问题已获得1👍和1条评论，表明至少1名受影响用户进行了验证。 | [MoonshotAI/kimi-cli #2584](https://github.com/MoonshotAI/kimi-cli/issues/2584) |
| **#1354** | **[CLOSED] [enhancement] I want a plan mode** | 核心功能请求，获得7👍和1条讨论，用户表示现有的“技能”机制无法阻止Kimi Code自动执行，迫切希望前规划后执行的流程控制。 | [MoonshotAI/kimi-cli #1354](https://github.com/MoonshotAI/kimi-cli/issues/1354) |
| **#2637** | **[OPEN] [Bug] Agent stuck in repeated Read-tool loop, unable to emit intended Edit calls** | 严重影响生产力，可能导致Agent无限循环无法做出实际修改。当前无点赞，但新建issue表明新用户已遇到该问题。 | [MoonshotAI/kimi-cli #2637](https://github.com/MoonshotAI/kimi-cli/issues/2637) |
| **#1356** | **[CLOSED] [enhancement] Seamless Migration of MCP Skill Configurations from Other Mainstream Agent CLIs** | 用户希望kimi-cli支持从Claude CLI、Cursor等工具导入现有的MCP配置，以减少重复设置成本。当前无投票，但反映了跨生态工具用户对配置文件重用的需求。 | [MoonshotAI/kimi-cli #1356](https://github.com/MoonshotAI/kimi-cli/issues/1356) |

*由于24小时内仅更新了4个Issue，因此这4个议题成为今日社区关注的焦点。*

---

### 4. 重要 PR 进展

| # | 标题 | 主要功能/修复 | 影响 |
|---|-------|-------------------|--------|
| **#2616** | **Add Build Remote Agent phone pairing (gbr/1)** | 将免费的`gbr-agent`协议集成到桌面代理中，实现iOS/Android手机作为观察者/否决者的远程配对能力。 | 为移动设备提供了新的协作者身份，用户可在手机上观看本地会话并执行注入操作。 |
| **#2636** | **Optimize get_share_dir with caching and path handling** | 引入缓存机制并改进共享目录路径解析，减少重复I/O开销。 | 提升了文件共享路径的访问效率，适用于频繁读写的场景。 |

*两项PR均已提交并等待合并，目前均无CI/CD状态更新。*

---

### 5. 功能需求趋势

- **流程控制与规划功能**——持续有用户（#1354）要求引入“计划模式”，表明社区对更可控的Agent执行流程存在强烈需求。
- **平台兼容性修复**——Windows输入法相关Bug（#2584）凸显了跨平台输入处理上的不足，需要优先修复。
- **Agent稳定性和错误恢复**——无限循环Bug（#2637）反映了对更健壮的Agent控制流的期待，防止陷入无法自拔的状态。
- **MCP配置互操作性**——用户希望kimi-cli能读取来自其他主流Agent（Claude CLI、Cursor等）的MCP技能配置，从而实现配置迁移和重用（#1356）。
- **远程协作与移动端支持**——手机远程配对（PR #2616）显示了社区对多设备协同编程的支持，希望Kimi CLI能与移动端无缝协同。

---

### 6. 开发者关注点

- **用户痛点**：Windows平台下特定语言输入法（如泰语、日语等）输入的字符在进入提示词时被重复，这是急需修复的问题。
- **功能缺失**：缺乏“计划模式”或明确的流程控制，导致用户无法限制Kimi Code的自动行为，引发了持续的功能请求。
- **性能问题**：Agent可能陷入无限循环无法正常结束，对工作流造成严重干扰。
- **配置迁移痛点**：用户在多家AI工具间切换时，需要重复导入MCP技能配置，渴望统一的配置导入机制。
- **移动协作需求**：虽然当前已有远程Agent概念，但更多用户希望更便捷的手机协同体验，这为未来的功能扩展提供了方向。

---

*本日报由GitHub Issue和Pull Request数据自动汇总生成，旨在为Kimi Code CLI开发者提供一站式社区动态洞察。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 — 2026-09-08

---

## 1. 今日速览

今日无新版本发布，但社区活跃度维持高位。**VS Code 官方扩展**（#11176）以 148 👍、29 条评论成为最受关注的需求，反映出用户对原生 IDE 集成的强烈渴望。PR 侧集中在 **AI 模型提供商扩展**（Z.AI、Moonshot、Snowflake）与 **SSE 流稳定性修复**（chunkTimeout、重连退避），显示社区正全力补齐多模型支持与运行时可靠性。

---

## 2. 版本发布

**无。** 过去 24 小时未发布新版本。

---

## 3. 社区热点 Issues（精选 10 个）

| # | Issue | 热度 | 为什么重要 |
|---|-------|------|-----------|
| 1 | **[#11176](https://github.com/anomalyco/opencode/issues/11176)** — 官方 VS Code 扩展 | 148👍 / 29💬 | 社区最强烈呼声：用户希望 OpenCode 作为官方 VS Code 扩展运行，实现原生编辑器集成。当前仅靠第三方或终端使用，限制了受众。 |
| 2 | **[#43199](https://github.com/anomalyco/opencode/issues/43199)** — Mistral GLM-5.2 工具调用报错 | 8👍 / 9💬 | Mistral 托管第三方模型后，GLM-5.2 文本正常但工具调用直接抛错，阻断 agent 能力，影响实际使用。 |
| 3 | **[#43277](https://github.com/anomalyco/opencode/issues/43277)** — 会话永久卡死、重启无法恢复 | 1👍 / 8💬 | 多个会话在正常使用中永久卡死，且**跨系统重启 persists**，无法通过重启服务清除。属于严重数据损失风险。 |
| 4 | **[#17798](https://github.com/anomalyco/opencode/issues/17798)** — Windows 忽略 `NODE_EXTRA_CA_CERTS` | 4👍 / 7💬 | 企业内网代理 + 自签 PKI 证书场景下，OpenCode 无法信任内部 CA，导致无法连接内网 LLM。影响企业部署。 |
| 5 | **[#47842](https://github.com/anomalyco/opencode/issues/47842)** — OpenCode 在 Cursor 中不工作 | 0👍 / 7💬 | 用户在 Cursor 中集成 OpenCode 时遇到 `model channel not available`，涉及编辑器间 provider 路由兼容性。 |
| 6 | **[#45011](https://github.com/anomalyco/opencode/issues/45011)** — CLI 创建的会话不在 Web Home 显示 | 1👍 / 6💬 | Web UI 的 Home 页面只展示浏览器端项目注册的会话，CLI/TUI 创建的会话完全不可见，割裂了多端体验。 |
| 7 | **[#42938](https://github.com/anomalyco/opencode/issues/42938)** — Go 计划用满后 Zen 余额不消耗 | 0👍 / 6💬 | 用户月额度 100% 后被封禁 12h，即使开启了 "Use balance" 且 Zen 余额 $39.89 也不自动 fallback，计费逻辑缺陷。 |
| 8 | **[#36241](https://github.com/anomalyco/opencode/issues/36241)** — gpt-5.6-sol-fast reasoning 流式输出报错 | 2👍 / 6💬 | macOS 上通过 Codex OAuth 使用 OpenAI 模型时，reasoning part `rs_*:0 not found` 导致会话中断。 |
| 9 | **[#47545](https://github.com/anomalyco/opencode/issues/47545)** — Auto 模式重复弹出权限通知 | 1👍 / 5💬 | Auto 模式下权限已自动批准，但前端仍重复弹通知。问题根源：Auto 审批在客户端触发，而服务端已先发 permission 事件。 |
| 10 | **[#47168](https://github.com/anomalyco/opencode/issues/47168)** — `commentary` 通道未实现 | 0👍 / 5💬 | GPT 系统提示要求模型通过 `commentary` 通道发进度更新，但 OpenCode 未实现该通道，导致 chat-completions 模型每次更新都提前结束回合。 |

---

## 4. 重要 PR 进展（精选 10 个）

| # | PR | 类型 | 功能/修复 |
|---|-----|------|----------|
| 1 | **[#47866](https://github.com/anomalyco/opencode/pull/47866)** | feat(ai) | 新增 **Z.AI** 语言模型支持，包含标准 Chat 模型与独立的 `ZAICodingPlan` facade（provider ID: `zai-coding-plan`），覆盖 Chat/Messages/Responses 全部端点。 |
| 2 | **[#47851](https://github.com/anomalyco/opencode/pull/47851)** | feat(ai) | 新增 **Moonshot** 顶层 provider，基于 Chat Completions 协议，含 `.chat`/`.messages`/`.responses` 选择器，仅 145 行轻量实现。 |
| 3 | **[#47156](https://github.com/anomalyco/opencode/pull/47156)** | feat(core) | **Snowflake Cortex 原生认证**：使用 OpenAI 兼容 provider + `compatibility.maxTokensField`，移除旧的自定义实现，统一认证链路。 |
| 4 | **[#46802](https://github.com/anomalyco/opencode/pull/46802)** | fix(ai) | 修复 **`chunkTimeout` 在 HTTP SSE 流上被静默忽略**的问题——此前该字段在 provider 设置中存在但从未被 HTTP transport 读取，导致流式超时无保护。关联 #46692。 |
| 5 | **[#47204](https://github.com/anomalyco/opencode/pull/47204)** | fix(client) | 事件流客户端在流从未连接成功时以**固定 1s 间隔重试**，改为退避策略。修复浏览器未认证会话的重试风暴。关联 #47062。 |
| 6 | **[#46920](https://github.com/anomalyco/opencode/pull/46920)** | feat(opencode) | **按 MCP 服务配置信任策略**：通过 fingerprint pinning 信任特定自签名证书，无需全局 `insecure: true`，支持私有 CA 的 `caFile`。关联 #40111。 |
| 7 | **[#47678](https://github.com/anomalyco/opencode/pull/47678)** | feat(server) | `GET /provider` 改为**仅返回已连接的 providers**，不再每次构建完整 models.dev 目录（当前 ~4,168 条），大幅降低响应体积。 |
| 8 | **[#47867](https://github.com/anomalyco/opencode/pull/47867)** | fix(core) | 文件与 stderr 日志时间戳改为**系统本地时间**（使用 Effect 的 DateTime formatter），避免 UTC 统一时间在跨时区排查时的困惑。 |
| 9 | **[#47355](https://github.com/anomalyco/opencode/pull/47355)** | fix(core) | **省略 chat 模型的 `commentary` 通道提示**——直接修复 #47168 中 GPT 系统提示要求不存在通道导致回合提前终止的问题。 |
| 10 | **[#47848](https://github.com/anomalyco/opencode/pull/47848)** | fix(session) | 修复归档时间戳被静默忽略的 bug，改为正确清除归档时间戳。同时处理 #24153 后端部分。 |

---

## 5. 功能需求趋势

从本周 Issues 可提炼出三大社区关注方向：

### 🔌 IDE / 编辑器集成
- **官方 VS Code 扩展**（#11176，148👍）是当前最高优先级需求
- VSCode Copilot BYOK 外部 provider 扩展支持（#27303）
- OpenCode 在 Cursor 中的兼容性（#47842）
- 桌面应用中 `/skill` 应发送紧凑引用而非完整描述（#29974）

### 🧠 多模型支持与计费
- Mistral GLM-5.2 工具调用（#43199）
- Z.AI、Moonshot、Snowflake 等新模型 provider 持续涌入 PR
- Go 计划额度耗尽后 Zen 余额 fallback 失效（#42938）
- 腾讯 WorkBuddy 通过 OpenAI 兼容端点调用 Go 模型鉴权失败（#47820）

### 🕹️ 运行时稳定性与体验
- 会话永久卡死且跨重启无法恢复（#43277）
- SSE 流静默断开导致 subagent 冻结（#37580）
- Web Home 不显示 CLI 会话（#45011、#46444）
- Auto 模式误弹权限通知（#47545）
- TUI 流式推理内容逐 token 换行（#36037）

---

## 6. 开发者关注点

社区反馈中反复出现以下痛点：

| 痛点 | 涉及 Issue | 影响面 |
|------|-----------|--------|
| **企业内网部署受阻** | #17798 | `NODE_EXTRA_CA_CERTS` 被忽略，自签 CA 场景完全不可用 |
| **会话状态可靠性** | #43277、#37580 | 卡死/冻结无自动恢复机制，数据丢失风险高 |
| **多端同步缺失** | #45011、#46444 | CLI 与 Web UI 会话互不可见，割裂用户体验 |
| **模型计费逻辑** | #42938 | Go 额度与 Zen 余额策略未按文档预期 fallback |
| **SSE / 流稳定性** | #46802、#47204 | chunkTimeout 缺失、重连无退避，高延迟/弱网下体验差 |
| **权限模型模糊** | #47545 | Auto 模式客户端先行审批与后端权限事件时序冲突 |

> 总结：社区当前最核心的诉求可归纳为 **"让 OpenCode 在任何环境下都可靠运行"**——无论是企业代理、多模型提供商、多端同步还是会话状态管理，都指向运行时鲁棒性的全面升级。同时，官方 VS Code 扩展的缺失正成为制约用户增长的关键瓶颈。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报 | 2026-09-08**

> 数据源：`earendil-works/pi`（注：仓库地址与元数据中的 `badlogic/pi-mono` 不一致，以下均以实际仓库为准）

---

### 1. 今日速览

过去 24 小时内无新版本发布，但社区活跃度较高，共收到 50+ Issue 更新和 27+ PR 提交。**Windows 使用咨询**与 **OpenAI Codex 连接稳定性**成为最热门话题，同时 **Gemini 3.x 工具调用**、**Copilot API 路由**及 **流式取消 Bug** 引发较多讨论。

---

### 2. 版本发布

过去 24 小时内无新 Release。

---

### 3. 社区热点 Issues

| # | 标题 | 评论 | 关注度理由 |
|---|------|------|-----------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | openai-codex Connection Reliability Issues | 77 | TUI 卡在 "Working..." 无流式输出，需 Esc 中断，影响核心使用体验 |
| [#7547](https://github.com/earendil-works/pi/issues/7547) | [Windows] How do you use Pi on windows? | 61 | Windows 用户基数大，但运行方式分散，社区亟需统一文档或最佳实践 |
| [#6996](https://github.com/earendil-works/pi/issues/6996) | Gemini 3.x models fail during tool use | 9 | 新模型兼容性问题，`thought_signature` 缺失导致工具调用失败 |
| [#7010](https://github.com/earendil-works/pi/issues/7010) | Normalize optional object tool schemas | 7 | OpenAI 兼容提供商的 Schema 标准化，影响工具调用可靠性 |
| [#8823](https://github.com/earendil-works/pi/issues/8823) | Esc during active streaming fails to cancel | 7 | 流式响应中断失败，HTTP 请求无法及时中止，用户体验差 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | PI_OFFLINE silently disables model discovery | 6 | 配置项行为与文档不符，静默禁用模型发现，容易误导用户 |
| [#8760](https://github.com/earendil-works/pi/issues/8760) | OpenRouter :free models fail with 400 | 5 | `max_tokens` 超出提供商限制，OpenRouter 免费模型不可用 |
| [#9209](https://github.com/earendil-works/pi/issues/9209) | GitHub Copilot GPT-6 Astra routing error | 5 | 路由到错误的 API 端点，Copilot 拒绝请求 |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | Bedrock: OpenAI models reject nested images | 5 | 多模态图像处理不当，工具结果中的图片被拒绝 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | Parallel startup reports "No API key found" | 4 | 多进程启动时认证状态竞争，导致 48s 延迟和错误提示 |

---

### 4. 重要 PR 进展

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|---------|
| [#9303](https://github.com/earendil-works/pi/pull/9303) | fix(interactive): resume session before closing selector | CLOSED | 修复会话恢复时选择器提前关闭的无响应问题 |
| [#9301](https://github.com/earendil-works/pi/pull/9301) | feat(coding-agent): confirm device-code actions | OPEN | 设备码登录时自动打开浏览器并复制验证码，提升便签 |
| [#7742](https://github.com/earendil-works/pi/pull/7742) | feat(ai): Ollama Cloud support | OPEN | 新增 Ollama Cloud 提供商支持，使用 `OLLAMA_API_KEY` |
| [#9297](https://github.com/earendil-works/pi/pull/9297) | fix(ai): remove invalid Fable 5 fallback | OPEN | 移除 Claude Fable 5 无效的回退模型配置 |
| [#9280](https://github.com/earendil-works/pi/pull/9280) | feat: add implementation-backed doc evals | CLOSED | 为文档添加实现审计验证，通过自定义工具捕获结果 |
| [#8744](https://github.com/earendil-works/pi/pull/8744) | feat(tui): overlay selection exclusion | OPEN | 全屏选择时排除 Overlay 干扰，确保复制内容准确 |
| [#8615](https://github.com/earendil-works/pi/pull/8615) | fix(coding-agent): preserve interleaved content | CLOSED | 保留用户消息中图片和文本的原始交错顺序 |
| [#9292](https://github.com/earendil-works/pi/pull/9292) | feat(coding-agent): manual retry API | CLOSED | 添加手动重试接口，覆盖自动重试无法恢复的场景 |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | feat(coding-agent): system message deltas | OPEN | 将提示词和工具变更作为系统消息增量发送，而非重写 |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | feat(ai): mid-conversation system messages | OPEN | 支持会话中动态注入系统消息，便于扩展干预 |

---

### 5. 功能需求趋势

从 Issue 标题和描述中提取的社区关注方向：

- **多平台适配**：Windows 使用指南与原生支持（#7547）
- **提供商兼容性**：OpenAI、Copilot、Gemini、OpenRouter、Bedrock 的 API 路由与错误处理
- **流式交互体验**：流式取消（#8823）、中断响应、进度反馈
- **会话管理**：持久化、恢复、压缩摘要显示（#6100）
- **性能优化**：启动时间（#7739）、内存控制（#9276 OOM）、模糊搜索效率（#9267）
- **云与本地集成**：Ollama Cloud（#7742）、离线模式（#8684）

---

### 6. 开发者关注点

高频痛点总结：

1. **Windows 环境碎片化**：运行方式多样，文档分散，Bug 复现困难
2. **API 路由与端点错误**：400/403 错误频发，特别是 Copilot（GPT-6 Astra）和 OpenRouter 的 `max_tokens` 超限
3. **流式可靠性**：Esc 中断无效、流式 CPU 消耗过高（#9055 二次成本问题）
4. **认证与启动竞争**：并行启动时 OAuth 凭证过期导致 48s 延迟（#8928）
5. **内存溢出风险**：grep 工具上下文行数过多导致堆溢出（#9276）
6. **配置行为不一致**：`PI_OFFLINE` 实际行为与文档不符（#8684）

---

**建议关注**：Windows 用户社区（#7547）和 OpenAI Codex 连接稳定性（#4945）是当前阻塞性问题，建议优先跟进。同时注意 Copilot 和 OpenRouter 的 API 配置变更，避免路由到已废弃端点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报（2026‑09‑08）**  

---

### 1. 今日速览  
- 今日发布了 **v0.23.1‑preview.2** 与 **v0.23.0‑nightly.20260907** 两个版本，核心改动均来自同一个 PR：`feat(web-shell): visualize and manage dynamic workflow runs`（#10594），并在夜间版中对工作流会话的性能进行了微调。  
- 同时发布了 **cua‑driver‑rs v0.20.4** 预编译二进制（macOS 已签名/公证，Linux/Windows 为未签名），为跨平台 CUA 驱动提供了最新构件。  
- 社区讨论最热烈的议题仍围绕 **TUI 渲染层迁移（ink → OpenTUI）**、 **Windows 下 conhost.exe 泄漏**、以及 **后台会话输出丢失** 三大痛点，评论数均居前列。

---

### 2. 版本发布  

| 版本 | 发布时间 | 主要变更 | 链接 |
|------|----------|----------|------|
| **v0.23.1‑preview.2** | 2026‑09‑08 | - `feat(web-shell): visualize and manage dynamic workflow runs`（#10594）<br>- 其余为内部构建脚本更新 | <https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.2> |
| **v0.23.0‑nightly.20260907.f1ed3bc31a** | 2026‑09‑08 | - 同 web-shell 动态工作流可视化功能（#10594）<br>- `perf(web-shell): derive the session workflow project`（性能微调） | <https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260907.f1ed3bc31a> |
| **cua-driver-rs-v0.20.4** | 2026‑09‑08 | - macOS：codesigned + notarized universal binary + `QwenCuaDriver.app`<br>- Linux：unsigned (x86_64 + arm64, glibc 2.31 floor)<br>- Windows：unsigned UIAccess worker + native SDK payload (x86_64 + arm64) | <https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.4> |

> **注**：以上两个版本的 Release notes 均由 `.github/release.yml` 自动生成，未额外撰写手动说明。

---

### 3. 社区热点 Issues（按评论数排序）

| # | 标题 & 链接 | 评论 | 为什么重要 | 社区反应 |
|---|-------------|------|------------|----------|
| **#8662** | [Migrate TUI rendering layer from ink to OpenTUI (tracking)](https://github.com/QwenLM/qwen-code/issues/8662) | 32 | 当前 TUI 依赖 ink 7 + 大量补丁，导致 flicker、viewport 同步难题；迁移至 OpenTUI 有望彻底解决渲染不稳定。 | 讨论活跃，多数成员赞同迁移，关注迁移路径与兼容性。 |
| **#44** | [百炼收费陷阱](https://github.com/QwenLM/qwen-code/issues/44) | 20 | 用户反馈在使用百炼 API 时被意外计费，暴露出计费透明度不足的问题。 | 有 1 个 👍，多数评论要求提供更清晰的使用说明与额度提醒。 |
| **#8586** | [Track activeWork and background Agent recovery](https://github.com/QwenLM/qwen-code/issues/8586) | 9 | 需要在后台 Agent 异常退出时能够感知并恢复，涉及深层健康检查与会话恢复机制，对长时任务关键。 | 讨论聚焦在如何设计 `activeWork` fact 与恢复路径。 |
| **#11119** | [serve: background shell output and wake notifications silently dropped when the session runtime recycles](https://github.com/QwenLM/qwen-code/issues/11119) | 8 | 后台 shell（如 CI 轮询）的输出在会话回收后被丢弃，导致用户感知不到任务进展。 | 有 0 👍，评论指出这是导致任务「卡死」的根因。 |
| **#11303** | [Windows] qwen-cli (VS Code Companion) leaks headless conhost.exe ConPTY processes – 347 processes / ~2.8 GB after ~12h uptime](https://github.com/QwenLM/qwen-code/issues/11303) | 6 | Windows 环境下 conhost.exe 未被正确回收，长时间运行会耗尽内存，影响 VS Code Companion 的可用性。 | 讨论强烈要求修复资源泄漏，已有若干复现步骤。 |
| **#10530** | [400 Failed to initialize samplers in 0.22.3](https://github.com/QwenLM/qwen-code/issues/10530) | 6 | 使用 Qwen 3.8/3.6 在 llama-server 时出现语法解析错误，阻碍本地模型推理。 | 用户指出以前版本正常，期望回归或提供兼容层。 |
| **#3361** | [Agent misinterprets shell output as empty despite successful execution (OpenAI-compatible API)](https://github.com/QwenLM/qwen-code/issues/3361) | 6 | Agent 误判 shell 命令的输出为空，导致后续推理依赖错误信息。 | 有 0 👍，评论提供了复现截图，期望改进输出解析。 |
| **#10435** | [New version crashes inference on local llama-server (other harnesses don't): [API Error: 400 Failed to initialize samplers: failed to parse grammar]](https://github.com/QwenLM/qwen-code/issues/10435) | 5 | 与 #10530 类似，特定版本导致语法解析失败，仅在 Qwen Code 中出现。 | 有 1 👍，社区呼吁回退或提供补丁。 |
| **#8835** | [repo‑hygiene] 2026‑W33 report‑only findings (8 items)](https://github.com/QwenLM/qwen-code/issues/8835) | 5 | 安全审计发现的 `startsWith('..')` 路径穿越风险，涉及 ACP session 和 worktree 安全。 | 讨论围绕如何彻底消除该类漏洞。 |
| **#10865** | [perf(web-shell): session workflow projection is derived three times per render](https://github.com/QwenLM/qwen-code/issues/10865) | 5 | 工作流投影在每次渲染中被重复计算三次，造成不必要的开销。 | 有 0 👍，评论提出缓存或一次性计算的优化方案。 |

> **其他值得关注的议题**（评论 4‑3 次）：语义记忆功能（#10684）、CI 自动化（#7167）、Git 安全加固（#11205）等。

---

### 4. 重要 PR 进展（按影响力挑选）

| PR | 标题 & 链接 | 核心内容 | 为什么重要 |
|----|-------------|----------|------------|
| **#11295** | [feat: support GPT‑5 and GPT‑6 reasoning effort configuration](https://github.com/QwenLM/qwen-code/pull/11295) | 为 GPT‑5/6 系列模型添加推理强度（reasoning effort）配置，兼容提供商前缀、路由标签等。 | 开放最新模型的细粒度控制，提升推理质量与成本平衡。 |
| **#11302** | [fix(build): remove heavy build/bundle from prepare hook](https://github.com/QwenLM/qwen-code/pull/11302) | 将 `prepare` 脚本从完整 `build + bundle` 降级为仅运行 `husky` 与 `generate`（git‑commit.ts），解决 #11301。 | 大幅减少 `npm install`/`ci` 时间，提升开发者体验。 |
| **#10421** | [fix(review): screen content filters at every rewrite the probe authorises (#9558)](https://github.com/QwenLM/qwen-code/pull/10421) | 在内容安全审查探针的每一次树重写阶段都执行本地内容过滤，确保过滤不被绕过。 | 加强代码审查的安全性，防止恶意内容漏检。 |
| **#11281** | [feat(daemon): enumerate installed extension skills locally](https://github.com/QwenLM/qwen-code/pull/11281) | 在 ACP 子进程发布快照前，将本地已安装的扩展技能纳入工作区目录，支持技能的可见性与管理。 | 改善插件生态，使扩展技能在会话恢复时可被正确加载。 |
| **#10999** | [feat(core): configure model reasoning capabilities](https://github.com/QwenLM/qwen-code/pull/10999) | 在模型注册表中声明推理能力，并贯穿到 ACP、会话恢复、工作区预览、TUI 努力控制及最终 OpenAI‑compatible 请求。 | 统一模型能力描述，为后续功能（如自适应推理强度）奠定基础。 |
| **#11291** | [autofix/takeover] fix(core): retry status‑less upstream errors instead of ending the turn](https://github.com/QwenLM/qwen-code/pull/11291) | 当上游返回 SSE 流中缺少 HTTP 状态的错误对象时，触发已有的可重试机制而非直接结束当前 turn。 | 提升服务容错率，特别是在网关或代理层出现非标准错误时。 |
| **#11298** | [feat(web-shell): refine file cards and configure drop destination](https://github.com/QwenLM/qwen-code/pull/11298) | 将附件渲染为图标/文件名/类型卡片，@file 引用作为紧凑标签；新增 `fileDropAction` 配置（upload\|attach）。 | 改善文件交互体验，使拖放更直观且可配置。 |
| **#11276** | [feat(web-shell): add web previews with saved delivery history](https://github.com/QwenLM/qwen-code/pull/11276) | 添加网页预览面板（支持桌面/移动宽度、刷新、外部打开），并在会话/工作区中持久化选中的 URL 与宽度。 | 开发者可直接在 Web Shell 内查看预览，提升调试效率。 |
| **#11305** | [autofix/takeover] feat(goal): size the checkpoint verifier timeout for a full claim list, and let operators set it](https://github.com/QwenLM/qwen-code/pull/11305) | 将 Goal 证据检查点验证器的超时从 30 s 提升至 180 s 上限，并新增 `model.goalCheckpointTimeoutSeconds` 可配置项。 | 防止大量证据导致验证过早超时，提升长目标任务的成功率。 |
| **#11280** | [autofix/takeover] feat(web-shell): add web previews with saved delivery history](https://github.com/QwenLM/qwen-code/pull/11280) | 在会话恢复时重新应用 Skill 的副作用（已在 `restoreLoadedSkillsFromHistory` 中补充），确保技能规则在继续时生效。 | 解决了技能在会话恢复后失效的问题，提升后台任务的可靠性。 |

> **注**：上述 PR 均处于 `OPEN` 状态，已有明确的需求描述与实现方案，社区反馈普遍正面。

---

### 5. 功能需求趋势（从 Issues 中提炼）

| 趋势方向 | 体现的 Issues / PR | 说明 |
|

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI (CodeWhale) 社区动态日报
**日期：** 2026-09-08  
**数据来源：** [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (Codewhale)  

---

### 1. 今日速览

今天是 v0.9.13

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*