# AI CLI 工具社区动态日报 2026-09-11

> 生成时间: 2026-09-11 02:06 UTC | 覆盖工具: 9 个

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

### **AI CLI 工具生态全景（2026-09-11）**

当前 AI CLI 工具生态呈现多元化发展态势：Claude Code、OpenAI Codex 和 Gemini CLI 等主流工具正加速迭代以提升稳定性与跨平台兼容性；而 Qwen Code 和 OpenCode 则聚焦于企业级 Agent 架构与多模型适配；GitHub Copilot CLI 和 Kimi CLI 则侧重于用户体验与认证流程优化。社区反馈显示，开发者普遍关注 CLI 工具的稳定性、安全性、插件扩展能力和跨平台一致性问题。

---

### **各工具活跃度对比**

| 工具名称           | 今日 Issues 数 | PR 数 | Release 情况                  |
|--------------------|----------------|-------|-------------------------------|
| **Claude Code**    | 10             | 2     | v2.1.268                      |
| **OpenAI Codex**   | 10             | 10    | Python SDK v0.154.0           |
| **Gemini CLI**     | 10             | 10    | v0.61.0-nightly.20260911      |
| **Copilot CLI**    | 10             | 2     | v1.0.84-4                     |
| **Kimi CLI**       | 1              | 0     | 无                            |
| **OpenCode**       | 10             | 10    | 无                            |
| **Pi**             | 10             | 10    | 无                            |
| **Qwen Code**      | 10             | 10    | v0.23.3                       |
| **DeepSeek TUI**   | 未披露         | 未披露 | 未披露                        |

---

### **共同关注的功能方向**

多个 CLI 工具社区共同关注以下方向：

- **Windows 兼容性与稳定性**：Claude Code 和 OpenCode 等工具频繁报告 Windows 启动失败、计划挂载错误，反映跨平台支持仍需加强。
- **插件与扩展机制增强**：Claude Code 和 OpenCode 社区均强烈呼吁 Function Hooks 和插件系统能力提升。
- **网络安全与沙箱隔离**：多工具（如 Gemini CLI、OpenCode）在沙箱执行、文件系统隔离、权限控制方面积极修复安全漏洞。
- **TUI 用户体验优化**：Pi 和 OpenCode 等工具密集修复终端界面渲染卡顿、滚动性能等问题。
- **多模型适配与兼容层稳定性**：Qwen Code 和 OpenCode 正推进对更多模型（如 Kimi、DeepSeek）的推理预设与兼容性支持。

---

### **差异化定位分析**

| 工具名称       | 功能侧重                          | 目标用户                       | 技术路线                                                                 |
|----------------|-----------------------------------|--------------------------------|--------------------------------------------------------------------------|
| **Claude Code** | 网关计费、权限治理、插件框架       | 企业开发者与团队               | 强调安全合规与计费透明，支持 Function Hooks 扩展                          |
| **OpenAI Codex**| 配置可控性、语音会话、WSL 支持     | 开发者与科研人员               | 聚焦本地部署与跨平台执行，加强 CLI 配置灵活性                            |
| **Gemini CLI**  | 沙箱安全、OAuth 登录、检查点管理   | 安全意识强企业用户             | 注重权限隔离与身份验证，引入 nightly 版本快速修复                         |
| **Copilot CLI** | 插件生态、内存管理、输入模式       | VS Code 重度用户               | 与 GitHub 生态深度集成，提升会话稳定性和输入交互体验                      |
| **Kimi CLI**    | 登录认证流程                       | 新用户快速上手场景             | 专注解决设备码授权异常，保障基础可用性                                   |
| **OpenCode**    | V2 架构、数据库压缩、Agent 安全     | 长期运行 Agent 场景            | 探索企业级 Agent Runtime，强调可控边界与资源管理                          |
| **Pi**          | 模型兼容性、计费一致性、性能优化    | 多模型切换用户                 | 聚焦 Bedrock/OpenAI 适配层性能与计费准确性                                 |
| **Qwen Code**   | 企业级 Agent、桌面端架构改造        | 中国本土开发者                 | 推进 Tauri/Web Shell 架构升级，增强多模型推理支持                         |
| **DeepSeek TUI**| 交互式终端体验                     | 追求高效 CLI 体验的用户        | 专注于终端界面优化与 Prompt 工程支持                                     |

---

### **社区热度与成熟度**

- **活跃度最高**：Claude Code、OpenAI Codex、Gemini CLI 和 OpenCode 均保持高频 Issue/PR 更新，体现出强劲的开发迭代节奏。
- **快速迭代阶段**：Qwen Code 和 Pi 正处于架构升级与多模型兼容阶段，社区反馈密集且方向性强。
- **成熟度参差不齐**：GitHub Copilot CLI 和 Kimi CLI 社区活跃度较低，多为 Bug 修复与基础功能维护，成熟度相对较高。
- **关注度分散**：DeepSeek TUI 未披露详细数据，推测其社区影响力有限，主要面向小众用户群。

---

### **值得关注的趋势信号**

- **企业级 Agent 的安全边界设计日益重要**：OpenCode 和 Qwen Code 的架构提案凸显出对“确定性工具执行”和“信任边界”的强烈需求，预示未来 CLI 工具将更像是“安全可控的执行器”。
- **多模型兼容与计费透明将成为竞争力**：随着 LLM 厂商众多，工具需具备跨厂商模型调用与统一计费能力，否则难以在企业中落地。
- **桌面端架构迎来升级潮**：Qwen Code 的 Tauri 尝试表明 Electron 替代方案将成为桌面端 CLI 工具的新趋势。
- **跨平台一致性成为稳定性瓶颈**：Windows 环境下的兼容性问题屡见不鲜，说明平台适配仍需投入更多资源。
- **开发者体验成为核心竞争力**：输入模式优化、会话管理、配置灵活性等 UX 问题直接影响 adoption，值得持续关注。

--- 

> ✅ **建议**：开发者可参考 OpenCode 的 Agent 安全设计思路，结合 Qwen Code 的桌面架构演进，探索更轻量、安全且可控的 CLI 架构方案。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-11）

## 1. 热门 Skills 排行

| 排名 | Skill | 功能概要 | 讨论热点 | 状态 |
|------|-------|----------|----------|------|
| 1 | **skill-creator** 评估修复系列 | 修复 `run_eval.py` 全 0% recall 的系统性缺陷（#1298）+ Windows 兼容性（#1099 / #1050） | 影响所有 Skill 描述优化循环，10+ 次独立复现，是当前最紧迫的基础设施 bug | OPEN |
| 2 | **document-typography** (#514) | 修复 AI 文档的孤儿行、 Widow、编号错位 | 覆盖所有 Claude 生成文档，用户极少主动要求但影响面极广 | OPEN |
| 3 | **mcp-builder** 评估修复系列 | 修复 evaluation.py 序列化、TextContent JSON 不可序列化、模型默认值过时（#1724 / #1602 / #1742） | MCP 工具调用评估 0/N 问题，隐藏性极强 | OPEN |
| 4 | **scnet-hpc** (#1615) | 基于 profile 的 SSH + Slurm HPC 集群操作技能 | 企业 HPC 场景缺口明显 | OPEN |
| 5 | **Hivemind** (#1628) | 零成本多 Agent 编排：Claude Code 规划 + opencode 无头执行 | 上下文稀缺资源的复用范式引起关注 | OPEN |
| 6 | **buffer-api** (#1627) | Buffer GraphQL 社交排期 Agent Skill | 跨平台 Agent 可移植性需求 | OPEN |
| 7 | **claude-api** 模型退役更新 (#1607) | 标记 4 个已退役模型 ID | 模型快照过期引发误用风险 | OPEN |
| 8 | **skill-quality-analyzer / security-analyzer** (#83) | 元技能：技能结构质量与安全审计 | marketplace 缺乏质量门禁 | OPEN |

## 2. 社区需求趋势

从 Issues 提炼的五大方向：

- **工作流自动化**：org-wide skill 分享（#228，16 条评论）、跨平台 Agent 技能可移植
- **代码/文档质量审查**：typography 控制、tracked change 冲突、ODT 解析
- **测试生成与评估**：evaluation 框架稳定性、recall/serialization 修复（#556、#1390）
- **安全与治理**：namespace 信任边界滥用（#492，43 条评论，最高活跃度）、agent-governance 提案（#412）
- **企业级集成**：HPC 集群、SharePoint Online 权限控制（#1175）、Bedrock 兼容（#29）

## 3. 高潜力待合并 Skills

- **#1298 + #1099 + #1050**：skill-creator 评估三件套，Windows + recall 双线修复，blocking 所有 Skill 质量优化
- **#1742 + #1724 + #1602**：mcp-builder 评估栈升级，claude-sonnet-5 模型切换与序列化修复
- **#1734**：docx 孤立评论检测（2026-09-06 新建，活跃更新）
- **#1628 Hivemind**：零成本多 Agent 编排，概念新颖且有 opencode 生态支撑
- **#1595 UIZZE**：反 UI slop 技能 + 800k+ 真实设计素材 MCP，已加入 partner skills

## 4. Skills 生态洞察

**当前社区最集中的诉求是"Skill 质量可验证"**——从评估框架的 recall 崩溃（#556/#1298）、Windows 不可用（#1050/#1099）、到 evaluation 欺骗性 0/N（#1390），社区正推动 Skill 从"能用"走向"可度量、可审计、可信任"，同时安全边界（#492）与跨平台兼容性是并行的两条主线。

---

> 注：PR 列表的评论数字段显示为 undefined，故以问题严重性、Issue 关联活跃度、PR 更新日期作为热度代理指标。

---

**Claude Code 社区动态日报（2026‑09‑11）**

---

### 1. 今日速览  
- 官方发布 **v2.1.268**，加入网关计价配置并为空的 `allow_cidrs` 启动预警。  
- 社区热议集中在 **Windows 启动失败、Function Hooks 强化、Plan9 挂载错误** 等多起高频 Bug 与功能需求上。

---

### 2. 版本发布  
**v2.1.268**  
- **网关计价**：在 `gateway.yaml` 中配置 `pricing:`，已签入的 Claude Code 客户端自动获取相同费率，`/cost` 与遥测数据与计费器同步。  
- **启动预警**：当 `access_control.allow_cidrs` 为空时，Gateway 在启动时会给出明确警告，防止误配置导致权限漏洞。  

---

### 3. 社区热点 Issues（挑选 10 条）  

| Issue | 关键原因 | 社区反应 | 链接 |
|-------|----------|----------|------|
| **#42776** | Windows 端重新启动时因残留文件锁导致失败 | 173 条评论，82 赞，指出为严重阻塞日常使用的 Bug | <https://github.com/anthropics/claude-code/issues/42776> |
| **#91870** | Function Hooks 需要 10× 更强的插件能力 | 158 条评论，92 赞，被视为下一代插件框架的关键增强 | <https://github.com/anthropics/claude-code/issues/91870> |
| **#92984** | Windows 更新 KB5124008 后 Plan9 挂载失败 | 83 条评论，41 赞，直接关联系统安全补丁，影响多平台协作 | <https://github.com/anthropics/claude-code/issues/92984> |
| **#30112** | 网络出站 allowlist 不生效，自定义域名被 403 拒绝 | 57 条评论，54 赞，用户痛点在于安全策略与实际流量不匹配 | <https://github.com/anthropics/claude-code/issues/30112> |
| **#65961** | 默认开启 Claude 详细代码注释，忽略用户指令 | 33 条评论，217 赞，显示模型输出行为与用户预期不符，影响代码可读性 | <https://github.com/anthropics/claude-code/issues/65961> |
| **#29017** | VSCode 扩展中会话历史被清除 | 33 条评论，22 赞，直接影响开发者的调试与回溯体验 | <https://github.com/anthropics/claude-code/issues/29017> |
| **#76694** | 合并后 “选择文件夹” 菜单被 Chat 风格上传框替换 | 22 条评论，21 赞，导致新建项目初始化受阻 | <https://github.com/anthropics/claude-code/issues/76694> |
| **#12953** | 滚轮在输入框历史上滚动而非聊天记录 | 22 条评论，21 赞，UI 交互逻辑混乱 | <https://github.com/anthropics/claude-code/issues/12953> |
| **#38984** | “额外允许域名” allowlist 失效 | 12 条评论，27 赞，网络配置不生效导致安全或联通性问题 | <https://github.com/anthropics/claude-code/issues/38984> |
| **#93510** | 安全检查仅看调用工具而非实际磁盘效果 | 0 条评论，0 赞，但涉及权限提升安全隐患，值得安全审计 | <https://github.com/anthropics/claude-code/issues/93510> |

---

### 4. 重要 PR 进展（过去 24 小时）  

| PR | 主要内容 | 链接 |
|----|----------|------|
| **#93452** | 将 `/diff` 模的面板布局、关闭按钮、行间距、空状态位置等统一到与内置 diff 面板一致，提升 UI 一致性 | <https://github.com/anthropics/claude-code/pull/93452> |
| **#93244** | 对插件 API 进行命名统一（`isFocused`、`tool`），细化 telemetry 上报、引入 git 作为 diff 后端，为第三方版本控制提供 seam | <https://github.com/anthropics/claude-code/pull/93244> |

> 目前仅有上述两条 PR 在最近 24 小时内有更新，其余 PR 均为已关闭或未在本周期内变动。

---

### 5. 功能需求趋势  

- **IDE 与插件深度集成**：如 VSCode 会话历史保留（#29017）、工作区切换 UI（#76694）以及 Function Hooks 的 10× 能力提升（#91870），显示社区强烈需求更顺畅的 IDE 交互与插件扩展性。  
- **网络与安全策略**：多条 Issue（#30112、#38984、#93118）围绕出站 allowlist、域名白名单与 Plan9 挂载，说明社区对细粒度网络控制与跨平台文件系统的可靠性要求提升。  
- **模型行为可控**：#65961 与 #87367 表明用户希望模型在输出格式（代码注释、思考摘要）上遵循配置语言，而非默认行为。  
- **性能与并发**：#14353 指出 MCP 工具在同一条消息中仍然是顺序执行，提示社区关注并行执行以缩短总体耗时。  
- **成本透明与缓存**：#93499 建议缓存 `CLAUDE.md` 与规则，减少每次会话重写，显示对成本可视化与资源复用的关注。  

---

### 6. 开发者关注点（痛点与高频需求）  

- **启动/文件锁问题**：#42776、#51847、#92539 等围绕文件锁导致的启动失败、删除受阻，是 Windows 环境的主要阻碍。  
- **UI/UX 细节**：鼠标滚轮行为（#12953）、侧边栏/面板布局（#93452）以及上下文使用指示器阈值（#93036）受到较多讨论，表明 UI 细节的可配置性与一致性是开发者关注的焦点。  
- **权限与安全检查**：#93510 暴露的安全检查仅基于调用工具而非实际磁盘效果，引发对细粒度权限控制的需求。  
- **跨平台兼容性**：Windows 更新导致的 Plan9 挂载失效（#92984、#93118、#93221）以及 macOS 端的 mic 按钮异常（#90117）显示跨平台兼容性仍是开发者亟待解决的痛点。  
- **功能模块缺失**：如 #92249 中缺失的 `ListAgents` / `SendMessage` 工具，以及 #91884 中的模型选择缺陷，表明某些核心功能在特定会话类型（调度任务、远程控制）下仍未完整支持。  

---

**总结**：本日报显示 Claude Code 正在快速迭代，重点围绕 **Windows 启动稳定性、Function Hooks 强化、网络/文件系统兼容性** 以及 **IDE/插件深度集成** 进行改进。社区对 **性能并行、成本透明、语言本地化** 与 **安全可控** 的需求仍在增长，后续的版本更新将围绕这些方向继续驱动。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-11

## 一、今日速览

今日 Codex 发布 Python SDK 0.154.0 及 Rust 0.155.0-alpha 系列预览版，同时新增 `max`/`ultra` 推理等级；社区中 Windows/WSL 项目创建失败、沙箱执行报错和模型容量挤占等问题持续发酵，PR 层面重点推进了 Windows 打包、配置校验及沙箱安全等方向。

## 二、版本发布

### Python SDK v0.154.0
- 安装方式：`pip install --upgrade openai-codex==0.154.0`（需 Python 3.10+）
- 包含匹配的 `openai-codex-cli-bin==0.154.0` 运行时
- PR #39662：新增 `max` 和 `ultra` reasoning-effort 值
- PR #44701（thread-scoped instructions provider）：在 `StartThreadOptions` 中暴露 `ThreadInstructionsProvider`，在启动和模型请求边界加载快照

### Rust v0.155.0-alpha.2.3 / alpha.2 / alpha.1
- Rust 端连续发布 3 个 alpha 预览版本

### 语音构建（Windows）
- `voice-cygwin-108b38cf67cbb731`：Cygwin 构建输入及 Windows 原生语音发布所需的 CI 构建工具（仅 CI，不包含在用户包中）

## 三、社区热点 Issues（精选 10 个）

| # | 标题 | 评论 | 👍 | 重要性 |
|---|------|------|-----|--------|
| [41290](https://github.com/openai/codex/issues/41290) | WSL 环境下项目创建/删除失败 | 55 | 43 | ⭐ 高 — 影响 Windows + WSL 工作流的核心功能 |
| [41463](https://github.com/openai/codex/issues/41463) | WSL2 上无法创建项目（AbsolutePathBuf 反序列化异常） | 47 | 30 | ⭐ 高 — WSL 集成持续恶化 |
| [41220](https://github.com/openai/codex/issues/41220) | 用量/额度消耗异常及口径不一致跨平台追踪 | 37 | 14 | ⭐ 高 — 涉及订阅信任问题 |
| [43058](https://github.com/openai/codex/issues/43058) | CLI 提示被标记为违反使用策略 | 17 | 0 | ⭐ 中 — 模型内容审核误判 |
| [44382](https://github.com/openai/codex/issues/44382) | 反复出现 "Selected model is at capacity" 导致不可用 | 12 | 5 | ⭐ 中 — 高频用户容量问题 |
| [35005](https://github.com/openai/codex/issues/35005) | CLI 支持原地编辑历史 prompt（而非始终 fork） | 11 | 28 | ⭐ 中 — 高赞功能需求 |
| [37539](https://github.com/openai/codex/issues/37539) | ChatGPT Work Web 云浏览器标签无法显示 UI | 10 | 1 | ⭐ 中 — 付费功能不可用 |
| [43015](https://github.com/openai/codex/issues/43015) | CLI 严重可靠性故障：单请求 63.8MB 图片历史膨胀 + WebSocket 降级 | 9 | 0 | ⭐ 中 — 性能/稳定性 |
| [44401](https://github.com/openai/codex/issues/44401) | Windows app-server 队列阻塞插件和 Remote Control | 9 | 0 | ⭐ 中 — 桌面端关键功能失效 |
| [22705](https://github.com/openai/codex/issues/22705) | iOS 消息水合失败 CodexClientError 11 | 8 | 8 | ⭐ 中 — 移动端长期遗留问题 |

**简要说明：**
- #41290 / #41463：近期连续出现 WSL 项目创建故障，涉及 App Server 路径反序列化和 WSL 切换后的兼容性，社区关注度极高
- #41220：作为 Meta 跟踪条目汇总了多平台用量异常报告，反映用户对额度计量准确性的不满
- #35005：提出自 v0.145.0 fork 机制带来 UX 退步，希望提供配置开关恢复原地编辑，获 28 👍
- #43015：严重可靠性问题，CLI 在图像辅助任务中单请求膨胀至近 64MB，且 WebSocket 降级后成本居高不下

## 四、重要 PR 进展（精选 10 个）

| # | 标题 | 类型 | 关键改动 |
|---|------|------|----------|
| [44701](https://github.com/openai/codex/pull/44701) | Add a provider for thread-scoped instructions | 功能 | 在 StartThreadOptions 暴露 ThreadInstructionsProvider，启动和模型请求边界加载快照 |
| [44694](https://github.com/openai/codex/pull/44694) | Include the Windows sandbox service in release artifacts | 打包 | Windows 发布包新增 `codex-windows-sandbox-service`（x86_64 和 ARM64） |
| [44693](https://github.com/openai/codex/pull/44693) | Preserve selected profile settings over managed new-thread defaults | 配置 | 修复托管默认值覆盖用户显式选择的 model/reasoning effort/service tier |
| [44691](https://github.com/openai/codex/pull/44691) | Warn about ignored configuration settings | 体验 | 对未识别配置字段收集警告并上报，避免拼写错误静默丢失 |
| [44676](https://github.com/openai/codex/pull/44676) | Resolve permission profiles with explicit execution-host path context | 安全/路径 | 修复含 glob 语法的目录名改变 deny 语义的问题 |
| [44675](https://github.com/openai/codex/pull/44675) | Refresh global instructions at model-request boundaries | 功能 | 修复运行中线程保留启动指令、`AGENTS.md` 编辑不生效的问题 |
| [44671](https://github.com/openai/codex/pull/44671) | Keep voice sessions alive through mute and audio backlog | 语音 | 清理过期/冗余音频流保持静音会话存活 |
| [44666](https://github.com/openai/codex/pull/44666) | Honor system reduced-motion preferences in the TUI | 无障碍 | macOS/Windows/Linux 启动时读取系统动效偏好 |
| [44661](https://github.com/openai/codex/pull/44661) | Trace tool call receipt, result readiness, and code-mode dispatch | 可观测性 | 分离 trace milestone，关联嵌套调用与所在 turn |
| [44639](https://github.com/openai/codex/pull/44639) | Block non-loopback inbound traffic for the Windows offline sandbox | 安全 | 离线沙箱新增入站防火墙规则（非仅出站） |

## 五、功能需求趋势

1. **WSL 与 Windows 深度集成**：项目创建、沙箱执行、桌面端稳定性是近期最集中的痛点方向
2. **配置与个性化可控性**：原地编辑 prompt、profile 优先级、配置警告、线程级插件排除等 PR 密集出现，反映用户对细粒度控制的需求上升
3. **语音与会话保持**：语音会话在 mute/音频积压场景下的存活、Web 浏览器面板 UI 渲染问题受关注
4. **性能与用量透明**：CLI 图片历史膨胀、token 统计归属模型准确性、额度消耗追踪被持续反馈
5. **跨平台一致性**：macOS 历史丢失、iOS 消息水合、Linux sandbox IPC 解码等跨平台问题凸显一致性挑战

## 六、开发者关注点（痛点与高频需求）

### 主要痛点
- **Windows/WSL 稳定性**：项目创建失败（#41290、#41463）、自动更新后无法启动（#42412）、配置文件非原子写入被零填充（#26421）、Powershell 崩溃（#39843）
- **模型容量与费率**：多个报告反映"Selected model is at capacity"（#44382、#44113）和用量异常（#41220）
- **沙箱与执行环境**：Windows sandbox helper 报错（#44425、#44585）、IPC 解码失败（#43938）
- **桌面端会话管理**：历史丢失（#44409）、插件加载阻塞（#44401）、浏览器路由中途消失（#43673）

### 高频需求
- 增强配置可观测性（warn on ignored settings, #44691）
- 权限/路径上下文精确解析（#44676、#44669）
- 提升 TUI/CLI 无障碍支持（reduced-motion, #44666）
- 更细粒度的指标归因（turn-level model attribution, #44656）
- Prompt 编辑体验优化（in-place edit, #35005）

---

*数据来源：github.com/openai/codex · 报告时间：2026-09-11*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报 (2026-09-11)**

---

### 1. 今日速览
- 发布了一个新的临时版本 **v0.61.0‑nightly.20260911.ged2ac40df**，包含多项安全修复和核心质量改进。
- 社区热议话题集中在 **代理可靠性、安全加固和用户体验优化**，包括子代理状态报告不准确、shell 命令卡顿、文件读取安全控制和 OAuth 登录映射等问题。
- 一系列 PR 正在推进，涉及文件系统服务路由、沙盒隔离、检查点安全和会话保护等关键领域。

---

### 2. 版本发布
**v0.61.0‑nightly.20260911.ged2ac40df**
* 一个包含 nightly 变更的快照版本；完整的变更日志请参阅[比较页面](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df)。

---

### 3. 社区热点 Issues (评论数 Top 10)

| # | 标题和标签 | 为什么重要 | 社区反馈 (评论/👍) | 链接 |
|---|----------------|----------------|----------------------------|------|
| **4556** | **[OPEN] 让 Gemini 少些巴结话** (优先级/p2、区域/agent) | 用户抱怨代理在复杂架构设计时总是使用谦卑的语言，导致互动不专业。 | 27 条评论 / 39👍 | google-gemini/gemini-cli Issue #4556 |
| **22323** | **[OPEN] 子代理在达到 MAX_TURNS 后报告“目标成功”，从而隐藏中断** (优先级/p1、区域/agent) | `codebase_investigator` 在达到最大轮次限制时仍报告状态为“成功”，误导用户认为分析已完成。 | 13 条评论 / 2👍 | google-gemini/gemini-cli Issue #22323 |
| **21841** | **[OPEN] 加固 ReadManyFilesTool：并发控制和防御性 guards** (优先级/p2、区域/core) | `ReadManyFilesTool` 通过宽泛的 glob 模式可能触发大规模文件读取，存在性能和安全风险。 | 11 条评论 / 0👍 | google-gemini/gemini-cli Issue #21841 |
| **27149** | **[CLOSED] Google OAuth 登录对于个人账户可能无法映射到正确的权限路径** (优先级/p2、区域/security) | 登录后无法清晰地区分个人 Google 账户类型，可能导致权限分配错误。 | 8 条评论 / 0👍 | google-gemini/gemini-cli Issue #27149 |
| **22745** | **[OPEN] 评估 AST 感知的文件读取、搜索和映射的影响** (优先级/p2、区域/agent) | 探索使用 AST 工具更精确地读取代码结构，减少不必要 token 和对话轮次。 | 7 条评论 / 1👍 | google-gemini/gemini-cli Issue #22745 |
| **28206** | **[OPEN] bug: cli/index.ts 中的 JSON.parse 无法解析带有注释的 settings.json** (优先级/p2、区域/core) | `settings.json` 通常包含注释，但当前的同步读取会导致解析失败。 | 6 条评论 / 0👍 | google-gemini/gemini-cli Issue #28206 |
| **25166** | **[OPEN] shell 命令执行在命令完成后卡在“等待输入”状态** (优先级/p1、区域/agent) | 简单 shell 命令执行完毕后仍显示为“正在等待用户输入”，影响用户体验。 | 4 条评论 / 3👍 | google-gemini/gemini-cli Issue #25166 |
| **22232** | **[OPEN] 增强 browser_agent 的弹性：自动会话接管和锁恢复** (优先级/p3、区域/agent) | 浏览器代理在检测到锁定的持久化配置文件时直接失败；需要更智能的重试逻辑。 | 4 条评论 / 0👍 | google-gemini/gemini-cli Issue #22232 |
| **22267** | **[OPEN] [BUG] 浏览器代理忽略 settings.json 覆盖（如 maxTurns）** (优先级/p2、区域/agent) | 代理完全忽略全局或项目级 settings.json 中定义的覆盖配置。 | 3 条评论 / 0👍 | google-gemini/gemini-cli Issue #22267 |
| **28360** | **[OPEN] 发布失败：2026‑07‑12 的 nightly 版本发布失败** (优先级/p1、区域/non-interactive) | nightly 发布工作流在最近一次运行中失败，可能影响用户获取最新修正。 | 2 条评论 / 0👍 | google-gemini/gemini-cli Issue #28360 |

---

### 4. 重要 PR 进展 (选 10 个)

| # | PR 标题 | 主要修复/功能 | 影响 |
|---|-------------|--------------------|--------|
| **29110** | `fix(core): route read_file content through FileSystemService` | 确保 `read_file` 操作通过 `config.getFileSystemService()` 进行，防止绕过沙盒的本地文件访问。 | 安全 – 强化了基于 ACP 的隔离。 |
| **29184** | `fix(core): validate git args in Windows sandbox to block silent git diff --output` | 在 Windows 沙盒环境中强制对 `git diff --output` 进行确认，防止文件被静默覆盖。 | 安全 – 防止 Git 命令被用于破坏性操作。 |
| **29195** | `fix(checkpoint): degrade non-array history instead of crashing resume` | 当检查点中的 `history` 字段不是数组时，`loadCheckpoint` 现在会降级为一个空检查点，而不是抛出异常。 | 可靠性 – 修复了 `/resume` 命令的崩溃。 |
| **29192** | `fix(checkpoint): contain legacy raw tag path inside checkpoints directory` | 防止 `../` 标签遍历到检查点目录之外，实现安全的标签解析。 | 安全 – 防止目录遍历攻击。 |
| **29188** | `fix(core): match include patterns against file name/extension exactly in read-many-files` | 改进 `read-many-files` 的模式匹配逻辑，确保二进制资源（图片、PDF、音频）的“明确请求”逻辑更加精确。 | 功能 – 减少了不必要的文件读取。 |
| **29186** | `fix(core): correct exitCode null check in shell sandbox denial heuristic` | 修正了对 `ExecutionResult.exitCode` 为 `null` 的处理，防止被错误地拒绝 shell 命令。 | 安全 – 修复了沙盒中的 shell 工具。 |
| **29187** | `fix(core): use safeLiteralReplace for LLM prompt template placeholders` | 使用 `safeLiteralReplace` 代替直接的 `String.prototype.replace`，防止模板字符串中的 `$` 导致原型污染。 | 安全 – 防止了间接注入攻击。 |
| **29283** | `fix(sandbox): improve filesystem isolation and isolate runtime state` | 强化了沙盒（Docker、Podman、runsc、LXC、macOS Seatbelt）中的文件系统边界，隔离运行时状态。 | 安全 – 增强了沙盒中的进程隔离。 |
| **29282** | `fix(auth): persist oauth credentials after login` | 登录成功后立即保存 OAuth 凭证，避免重复的 Google 登录提示。 | 用户体验 – 简化了 OAuth 流程。 |
| **29134** | `fix(cli): protect current session from deletion` | 通过传入活动会话 ID 到 `--list-sessions` 和 `--delete-session` 命令，确保不会意外删除当前会话。 | 可靠性 – 保护了活动会话。 |

---

### 5. 功能需求趋势

| 趋势方向 | 代表 Issue | 社区关注点 |
|------------|------------------|----------------------|
| **提升代理对话质量** | #4556 (sycophancy) | 用户希望减少不必要的谦卑语言，使 LLM 更像一个专业顾问。 |
| **代理状态和生命周期管理** | #22323 (MAX_TURNS 状态)、#25166 (shell 卡顿) | 确保子代理的终止状态准确，避免 UI 冻结等问题。 |
| **沙盒和文件系统安全性** | #21841 (ReadManyFilesTool 并发)、#29184 (Windows git args)、#29283 (sandbox 隔离) | 对大规模文件读取、潜在的目录穿越和沙盒破坏行为的防御。 |
| **OAuth 和账户管理** | #27149 (登录映射) | 更清晰地将个人 Google 账户与权限级别关联。 |
| **代码分析和 AST 支持** | #22745 (AST 感知工具) | 更精确地读取代码结构，提高分析效率。 |
| **配置和解析健壮性** | #28206 (settings.json 注释) | 支持注释格式的配置，让用户更方便地维护配置。 |
| **浏览器自动化可靠性** | #22232 (browser_agent 恢复)、#22267 (忽略设置) | 解决持久化会话锁定和设置覆盖问题。 |
| **会话管理和持久化** | #29195 (检查点降级)、#29134 (保护会话) | 增强检查点的健壮性和会话的安全性。 |
| **CLI 性能和 UI 稳定性** | #21924 (终端调整时性能抖动) | 实现更平滑的终端调整和更高的性能。 |

**主要关注点：** 代理可靠性、安全沙盒强化和用户身份验证流程优化。

---

### 6. 开发者关注点 (最常被提及的痛点)

1. **代理输出语言** – 频繁出现“巴结”风格的谦卑用语，导致用户体验不佳。
2. **子代理状态报告不准确** – `MAX_TURNS` 达到时仍报告“成功”，误导用户。
3. **shell 命令执行卡顿** – 完成指令后仍停留在“正在等待用户输入”状态。
4. **文件读取漏洞** – `ReadManyFilesTool` 可能因宽泛的 glob 模式触发大规模文件读取。
5. **OAuth 登录流程不清晰** – 对于个人 Google 账户，权限映射不明确，用户需要手动切换。
6. **检查点解析失败** – JSON 语法或结构错误导致 `/resume` 崩溃。
7. **浏览器代理僵持** – 锁定的持久化配置文件直接失败，缺乏自动重试。
8. **配置解析问题** – `settings.json` 包含注释导致 `JSON.parse` 失败。
9. **沙盒中的命令注入** – `git diff --output` 在 Windows 沙盒中可能被静默执行。
10. **内存系统无限重试** – 低信号会话被反复提取，影响性能。

这些问题反映了社区对 **更智能的代理行为、更严格的安全控制和更流畅的用户体验** 的迫切需求。

---

*关注 Google Gemini CLI 项目，持续为您提供最新技术动态和社区见解。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI – 2026‑09‑11 社区动态日报**

---

### 1. 今日速览
- **v1.0.84‑4** 发布，新增指令列表/LSP 支持，并为插件命令引入 JSON 输出格式。
- Issue 热议集中在 **输入模式**、**桌面端会话冲突**、**代理可见性**、以及 **跨平台复制/粘贴 bug** 上。
- 社区连续关注 **内存溢出/性能退化** 问题，多项 OOM / 堆崩溃报告表明 CLI 在长会话或特定环境下存在严重稳定性问题。

---

### 2. 版本发布
**v1.0.84‑4** (2026‑09‑11)
- 新增 `copilot instruction list` 和 `copilot lsp list` 命令（替代旧的 `--kind instruction/lsp` 参数）。
- `copilot plugin list`、`copilot plugin marketplace list` 和 `copilot plugin marketplace browse` 支持 `--json` 参数。
- `copilot plugin` 命令新增 `enable`/`disable` 子命令。

*详情：* https://github.com/github/copilot-cli/releases/tag/v1.0.84-4

---

### 3. 社区热点 Issues (TOP 10)

| # | 标题 | 为什么重要 | 社区反馈 (评论/👍) |
|---|-------|----------------|------------------------|
| **#13** | **[CLOSED] CLI 输入应支持 vi/vim 模式** | 模态编辑器用户无法高效导航交互式 CLI。 | 12 条评论，**76👍** |
| **#4742** | **[triage] 桌面端 1.1.15 无法创建第二个本地会话** | 用户在项目中同时运行两个 CLI 会话时立即失败。 | 11 条评论，**5👍** |
| **#1285** | **[area:agents] 组织级别 Agent 未显示** | 用户在私有组织仓库中创建的 Agent 不可见，影响工作流程。 | 9 条评论，**11👍** |
| **#3260** | **[area:input-keyboard] SSH 环境下复制/粘贴功能在 macOS/Linux → Windows Server 上崩溃** | 远程开发用户的日常操作被破坏。 | 7 条评论，**1👍** |
| **#3534** | **[area:input-keyboard] WSL2 (ARM64) `/copy` 命令因 cmd.exe 转义导致失败** | WSL2 用户的剪贴板功能在 v1.0.55 后失效。 | 6 条评论，**5👍** |
| **#4095** | **[area:platform-windows] Windows 插件更新失败 – “访问被拒绝 (os error 5)”** | VS Code 集成在运行时锁定文件，导致插件更新流程无法完成。 | 3 条评论，**21👍** |
| **#4699** | **[area:sessions] `--resume` 长会话导致堆内存溢出，诊断文件写入工作目录** | 长时续列导致崩溃并泄露敏感诊断信息。 | 2 条评论，**5👍** |
| **#4780** | **[triage] 会话紧凑过程 OOM 导致会话永久不可恢复** | 会话在达到紧凑阈值后进入不可恢复状态。 | 1 条评论，**3👍** |
| **#4067** | **[area:models] `settings.json` 中的 `model` 字段启动时未生效** | 用户指定的默认模型被忽略，强制使用内置默认值。 | 1 条评论，**0👍** |
| **#2199** | **[area:input-keyboard] 新增 Ctrl+Backspace 键组合以删除整个单词** | 常见编辑操作缺失，影响打字流畅度。 | 4 条评论，**7👍** |

*每个条目的 GitHub 链接：* https://github.com/github/copilot-cli/issues/[编号]

---

### 4. 重要 PR 进展

| # | 标题 | 状态 | 主要变化 |
|---|-------|--------|--------------|
| **#4808** | **固定 GitHub Actions 到 commit SHA** | 合并 | 所有 `uses:` 引用被设置为不可变的 SHA，确保供应链安全性和可追溯性。 |
| **#4786** | **修订第三方服务通知** | 已关闭 | 更新条款以澄清访问要求和使用限制，更好地保护用户。 |

*链接：* https://github.com/github/copilot-cli/pull/4808、https://github.com/github/copilot-cli/pull/4786

*(过去 24 小时内未更新其他 PR。)*

---

### 5. 功能需求趋势

1. **输入体验增强** – vi/vim 模式、Ctrl+Backspace 删除整词，支持更广泛的键盘组合。
2. **跨平台复制/粘贴修复** – 解决 SSH/Tmux、WSL2(ARM64)和 Windows 上的剪贴板问题。
3. **插件生态系统稳定性** – Windows 插件更新权限问题、Marketplace 命令的 JSON 支持。
4. **会话性能与内存管理** – OOM 崩溃、堆内存泄漏、会话紧凑逻辑和长时间 resumed 会话稳定性。
5. **代理可见性与认证** – 组织级别 Agent 显示、MCP OAuth 回调处理、Entra 身份验证、TLS 验证选项。
6. **配置管理** – 模型设置持久化、多账户身份验证切换、settings.json

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-11** | **数据源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日 Kimi Code CLI 无新版本发布，亦无已更新的 PR 动态。社区有一个已打开的登录认证相关 Issue 被更新，涉及设备码登录在浏览器审批成功后返回 HTTP 500 错误的问题，影响 CLI 及 VS Code 扩展用户。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 社区热点 Issues

> 说明：基于可用数据，过去 24 小时内仅检索到 1 条已更新的 Issue，故仅展示该条。

### [#2638] /login device auth fails with HTTP 500 after successful browser approval

- **状态**：[Open](https://github.com/MoonshotAI/kimi-cli/issues/2638)
- **作者**：milesbuckton | **创建时间**：2026-09-09 | **更新时间**：2026-09-10 | **评论**：1
- **环境**：CLI v0.42.0 / macOS / Free Plan (Adagio tier)，同时在 VS Code 扩展中复现
- **问题概述**：用户执行 `/login` 后，浏览器打开并输入设备码完成授权，但返回 HTTP 500 错误，导致登录流程中断。
- **关注理由**：登录是 CLI 的核心入口功能，该 Bug 阻塞新用户接入和现有用户正常使用，且影响面覆盖 CLI 和 VS Code 扩展两个渠道。

> ⚠️ 数据不足：未能获取另外 9 个 Issue，本日报仅基于此 1 条已更新 Issue 生成。

---

## 4. 重要 PR 进展

> 过去 24 小时内无已更新的 PR，暂无可展示内容。

---

## 5. 功能需求趋势

> 基于当前可用数据（仅 1 条 Issue），无法形成具有统计意义的功能需求趋势分析。建议获取更完整的 Issue 列表后重新生成。

从已有数据初步观察：
- **认证与登录流程稳定性** 是用户关注点之一（登录设备码认证失败）。

---

## 6. 开发者关注点

### 已识别的痛点

| 关注点 | 说明 |
|--------|------|
| 登录认证可靠性 | [Issue #2638](https://github.com/MoonshotAI/kimi-cli/issues/2638)：设备码授权成功但服务端返回 500，影响 CLI 与 VS Code 扩展 |

> 由于数据规模限制，本节仅基于 1 条 Issue 进行分析，覆盖面有限。

---

### 📌 报告生成说明

本日报基于提供的 GitHub 数据片段生成。由于过去 24 小时内仅 1 条 Issue 更新、无 Release 和 PR 更新，且社区热点 Issues / PR 进展 / 功能需求趋势三个部分要求各展示 10 条，**现有数据不足以完整填充这些板块**。如需完整日报，建议提供更全面的历史 Issue/PR 数据。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报（2026-09-11）

## 今日速览
今日 OpenCode 社区动态活跃，核心焦点集中在 **V2 分支的架构优化与 Agent 可靠性提升**。社区对长运行实例中的数据库膨胀（`opencode.db` 达 13GB+）以及自动压缩（Compaction）后的 Agent 失控行为进行了深度讨论。同时，开发者在权限匹配、流式超时、TUI 树状引擎等方面贡献了多项关键修复与功能增强。

---

## 版本发布
*过去 24 小时内无新版本发布。*

---

## 社区热点 Issues（精选 10 个）

### 1. #13003

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-11

> 数据来源: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

---

## 1. 今日速览

今日 Pi 无新版本发布，但社区活跃度持续走高。Issues 区域共 50 条更新，其中多个与 **Bedrock 提供商兼容性**、**O(n²) 事件循环阻塞** 以及 **TUI 渲染异常** 相关的缺陷引发高度关注。PR 方面共 20 条更新，核心修复集中在 **流式工具参数解析优化** 和 **光标标记泄漏修复**，对用户体验有直接影响。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热门 Issues（精选 10 个）

| # | Issue | 评论 | 👍 | 重要性说明 |
|---|-------|------|-----|-----------|
| 1 | [#9323](https://github.com/earendil-works/pi/issues/9323) Improve fireworks-specific config | 14 | 0 |  fireworks 配置专项改进，社区讨论最活跃 |
| 2 | [#8061](https://github.com/earendil-works/pi/issues/8061) Context budget ignores maxTokens reservation | 8 | 2 | **核心缺陷**：上下文预算计算逻辑有误导致自动压缩恢复失败，影响长对话稳定性 |
| 3 | [#9052](https://github.com/earendil-works/pi/issues/9052) Fullscreen mode scroll 3x slower | 8 | 4 | 全屏模式性能回归问题，👍 数最高，提示用户体验受关注 |
| 4 | [#8133](https://github.com/earendil-works/pi/issues/8133) Per-model compaction settings | 6 | 5 | 按模型配置压缩策略，需求明确且社区认可度高 |
| 5 | [#9265](https://github.com/earendil-works/pi/issues/9265) O(n²) tool-call parsing freezes event loop | 5 | 0 | **严重性能缺陷**：嵌入式单线程环境下流式工具调用会导致事件循环阻塞 |
| 6 | [#8810](https://github.com/earendil-works/pi/issues/8810) Extension providers ignore defaultProvider | 5 | 1 | 扩展注册的提供商被静默跳过，默认配置形同虚设 |
| 7 | [#9331](https://github.com/earendil-works/pi/issues/9331) Bedrock OpenAI reasoning effort not sent | 4 | 0 | Bedrock 适配层遗漏 reasoning effort 透传，调试成本高 |
| 8 | [#8752](https://github.com/earendil-works/pi/issues/8752) bedrock usage.input not normalized | 4 | 5 | Bedrock 不同模型族 input token 口径不一致导致费用翻倍，**计费准确性问题** |
| 9 | [#9276](https://github.com/earendil-works/pi/issues/9276) Grep tool OOM with context lines | 4 | 0 | **OOM 崩溃**：grep 工具带上下文行时内存泄漏导致堆溢出 |
| 10 | [#9361](https://github.com/earendil-works/pi/issues/9361) Windows shellPath non-deterministic | 4 | 0 | Windows 下 shellPath 解析存在竞态，扩展加载时表现不稳定 |

---

## 4. 重要 PR 进展（精选 10 个）

| # | PR | 类型 | 摘要 |
|---|-----|------|------|
| 1 | [#9461](https://github.com/earendil-works/pi/pull/9461) fix(ai): defer streamed tool argument parsing | 🔧 修复 | **直接修复 #9265**：将流式工具参数重解析从每次 delta 延迟到首次访问 `.arguments` 时，避免 O(n²) 性能问题 |
| 2 | [#9441](https://github.com/earendil-works/pi/pull/9441) fix(tui): prevent cursor marker leaks | 🔧 修复 | 修复全屏选区和终端渲染路径中 cursor marker 泄漏到终端的问题 |
| 3 | [#9442](https://github.com/earendil-works/pi/pull/9442) fix(ai): allow prompt cache keys for proxies | 🔧 修复 | 为兼容代理添加 `compat.supportsPromptCacheKey` 选项，使 session key 可正确传递 |
| 4 | [#9431](https://github.com/earendil-works/pi/pull/9431) feat(agent): default 3 minute timeout | ✨ 新功能 | 为所有工具调用添加默认 3 分钟超时，防止 hung 子进程死锁 agent 会话 |
| 5 | [#9434](https://github.com/earendil-works/pi/pull/9434) feat(coding-agent): extensions append system prompt | ✨ 新功能 | 允许扩展通过 `session_start` 处理器追加 systemPrompt，支持启动时合并快照 |
| 6 | [#9435](https://github.com/earendil-works/pi/pull/9435) Add value resolution to provider baseUrl | 🔧 修复 | 为模型提供商 baseUrl 添加值解析能力（修复 #9422） |
| 7 | [#9297](https://github.com/earendil-works/pi/pull/9297) fix(ai): remove invalid Fable 5 fallback | 🔧 修复 | 移除 Fable 5 中已失效的 claude-opus-4-8 回退目标，仅保留 Opus 5 |
| 8 | [#9459](https://github.com/earendil-works/pi/pull/9459) fix(coding-agent): prefer model changes on resume | 🔧 修复 | 会话恢复时优先使用记录的 model_change 而非最后消息的 model |
| 9 | [#9425](https://github.com/earendil-works/pi/pull/9425) feat(ai): add DeepSeek V4.1 Flash | ✨ 新功能 | 在 native DeepSeek 目录中添加 DeepSeek V4.1 Flash，支持多种 thinking level |
| 10 | [#9438](https://github.com/earendil-works/pi/pull/9438) fix(tui): overlays cover terminal images | 🔧 修复 | 修复 TUI 中 overlay 无法覆盖终端图像的问题（Ghostty 截图覆盖 agent 列表场景） |

---

## 5. 功能需求趋势

从 Issues 全量数据分析，社区最关注的方向如下：

1. **计费准确性与缓存策略**（热度最高）
   - 多个 Issue 涉及 Bedrock / OpenAI 的 cacheWrite1h 按 5m 费率计费错误（#9457、#9210、#8752）
   - 社区对 cache TTL 行为的一致性有强烈诉求
   - 相关 PR [#9442](https://github.com/earendil-works/pi/pull/9442)、[#9297](https://github.com/earendil-works/pi/pull/9297) 正在修复

2. **新模型/提供商适配**
   - DeepSeek V4.1 Flash 新增（PR #9425）
   - Mistral/zai-glm-5-2 推理缺失（#9086）
   - opencode-go 需新增 session 亲和性格式（#9437）

3. **TUI 渲染与交互体验**
   - 全屏模式滚动性能、拖动选区光标泄漏（#9052、#9332、#9331）
   - Markdown 图片空 alt 隐藏、overlay 覆盖图像显示问题

4. **性能与稳定性**
   - O(n²) 事件循环阻塞（#9265）、grep OOM（#9276）、bash 工具无超时死锁（#9460）
   - Windows 平台 shell 解析竞态与行重复渲染问题（#9361、#9464）

5. **扩展系统能力扩展**
   - 扩展可追加 system prompt（PR #9434）
   - 扩展注册提供商的默认配置被忽略（#8810）
   - 扩展 API 缺少 notify 替代方案（#9462）

---

## 6. 开发者关注点（痛点与高频需求）

### 🔴 高优先级痛点

| 痛点 | 涉及 Issue | 影响 |
|------|-----------|------|
| **Bedrock 计费口径不一致** | #8752, #9457, #9210 | cacheRead/cacheWrite 跨模型族计算错误导致成本翻倍 |
| **流式工具调用 O(n²) 解析** | #9265 + [PR #9461](https://github.com/earendil-works/pi/pull/9461) | 单线程嵌入式运行时事件循环冻结 |
| **bash 工具无默认超时** | #9460 | SIGTERM 忽略的子进程导致会话永久死锁 |
| **Grep 工具上下文行 OOM** | #9276 | 大文件场景下堆溢出崩溃 |

### 🟡 中优先级需求

| 需求 | 涉及 Issue | 说明 |
|------|-----------|------|
| **默认 Provider/Model 被扩展静默覆盖** | #8810 | 破坏用户配置预期，需明确报错而非静默 fallback |
| **Windows 平台 shellPath 非确定性** | #9361 | 扩展加载触发竞态，发展到 WSL System32 bash.exe |
| **扩展 notify API 缺少并发友好方案** | #9462 | last-wins 语义不满足多扩展同时提示场景 |
| **OpenAI 推理 effort 未透传到 Bedrock** | #9331 | 影响推理级别调优效果 |

### 🟢 关注趋势

- **按模型粒度配置**的需求正在上升（#8133 compaction.profiles），社区期望将全局配置扩展为 per-model 可覆盖
- **Session 恢复时的模型一致性**（#9459）反映用户对多轮对话模型切换体验的重视
- **代理兼容性与缓存键**（#9442, #9437）成为集成场景的关键障碍

---

> 📊 **数据摘要**: 本日 0 个 Release，50 个 Issues 更新（评论最多 14 条），20 个 PR 更新。核心风险点集中在 Bedrock 计费逻辑和多工具性能问题，建议优先跟进 PR #9461 和 #9441 的合并。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报（2026-09-11）

## 今日速览

今日 Qwen Code 社区活跃度极高，核心聚焦于**多模型兼容性修复、桌面端架构演进以及 IDE 体验优化**。最重要的动态是 **v0.23.3 版本的发布**，该版本扩展了 Kimi、Qwen 和 DeepSeek 的推理预设，并 critical 修复了向 DashScope 网关发送非 Qwen 模型请求时因 `metadata` 字段导致的 400 报错问题（#11606）。此外，社区关于**桌面端架构（从 Electron 迁移至 Tauri/Web Shell）**和**智能体运行时安全边界**的讨论热度显著上升。

---

## 版本发布

### v0.23.3 核心更新
*   **推理预设扩展**：新增并优化了对 Kimi、Qwen 和 DeepSeek 等主流模型推理预设的支持（[#11349](https://github.com/QwenLM/qwen-code/pull/11349)）。
*   **多平台 SDK 与桌面端同步**：
    *   发布 TypeScript SDK `sdk-typescript-v0.1.12`，内置 CLI 版本 `0.23.3`。
    *   发布 Qwen Code Desktop `v0.3.0` 及预览版 `v0.3.0-preview.0`（基于 Tauri 的新一代桌面壳子初步成型）。
*   **底层重构**：移除了钉钉（DingTalk）通道中过时的后台响应聚合逻辑（[#11570](https://github.com/QwenLM/qwen-code/pull/11570)）。

---

## 社区热点 Issues（Top 10）

以下按关注度、技术影响力及社区讨论热烈程度筛选出 10 个关键 Issue：

### 1. 【P1 严重】非 Qwen 模型通过 DashScope 网关报错 400（#11590）
*   **摘要**：Qwen Code 在向 DashScope 的 OpenAI 兼容端点发送请求时，会在顶层插入 `metadata` 对象。由于 DashScope 是聚合网关，非 Qwen 模型（如 ZHIPU/GLM-5.3-Flash）收到该字段后因类型不匹配（期望 string，收到 object）直接返回 400，导致模型完全不可用。
*   **重要性**：直接阻碍了多模型厂商接入，是目前最严重的可用性 Bug。社区已通过 PR [#11606](https://github.com/QwenLM/qwen-code/pull/11606) 彻底修复（仅对 Qwen 系模型发送 metadata）。

### 2. 【架构提案】可信智能体运行时：确定性工具执行边界（#8102）
*   **摘要**：社区大牛 chiga0 提出核心架构提案，主张将 LLM 排除在信任边界之外，使运行时能够确定性地约束、授权、观察和评估模型产生的操作。
*   **社区反应**：获得了最高达 18 条评论的深度讨论，被视为 Qwen Code 未来作为企业级 Agent Runtime 的基石方向。

### 3. 【数据回归】VS Code 扩展升级后丢失历史会话（#11574 & #11489）
*   **摘要**：多位用户反馈从 v0.21.x 或 v0.23.0 升级到 v

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

User Safety: safe

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*