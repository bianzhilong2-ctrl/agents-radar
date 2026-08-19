# AI CLI 工具社区动态日报 2026-08-19

> 生成时间: 2026-08-19 00:40 UTC | 覆盖工具: 9 个

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

**AI CLI 生态横向对比报告（2026‑08‑19）**  

---

## 1. 生态全景  
过去 24 h，主流 AI CLI 项目呈现**功能扩展 + 稳定性强化**的双重动力：  
1️⃣ 多模型目录与 **Prompt/Session 持久化**成为几乎所有工具的必备能力。  
2️⃣ **资源回收、缓存清理以及会话中断恢复**是社区最频繁的 pain‑point。  
3️⃣ 从 **跨平台兼容性**到 **安全/权限细粒度**（RPC、OAuth、Header 校验）的治理同步升级。  
4️⃣ 发布流程向 **受信任 CI/CD 自动化**靠拢，降低手工 2FA 依赖。  
5️⃣ 趋势性需求集中在 **多会话/多代理协作、IDE‑friendly 命令**、**可配置的 sandbox/policy** 与 **使用度可观测**上，形成了跨工具的共性路线图。

---

## 2. 各工具活跃度对比  

| 工具 | 今日选取的 Issue 数 | 今日合并/重要 PR 数 | Release 状态 |
|------|-------------------|--------------------|--------------|
| **Claude Code** (anthropics/claude-code) | ≈10 条热点 Issue（精选） | 1 条已合并 PR（#41611） | 已发布 **v2.1.235**（新增拼写检查） |
| **OpenAI Codex** (openai/codex) | ≈50 条 Issue（全局活跃） | ≈50 条 PR（多数已合） | 正式发行 **v0.148.0**（TUI 导出、Fork） |
| **Gemini CLI** (google-gemini/gemini-cli) | 10 条精选 Issue | 10 条重要 PR（安全/缓存等） | Nightly **v0.56.0‑nightly.20260818.g194edea47** |
| **GitHub Copilot CLI** (github/copilot-cli) | 10 条精选 Issue | 多条合并（约10 条关键 PR） | 发行 **v1.0.81‑1**（Gemini 3.7 Flash、使用度文件） |
| **Kimi Code CLI** (MoonshotAI/kimi-cli) | 2 条 Issue | 2 条 PR（#848、#2606） | **无**正式版（持续开发） |
| **OpenCode** (anomalyco/opencode) | 10 条热点 Issue | 1 条已合并 PR（#43314） | **无**新版本（待发布） |
| **Pi** (earendil-works/pi) | 10 条 Issue | 10 条 PR（bug‑fix 与 feature） | **无**官方 Release（nightly 在 upstream） |
| **Qwen Code** (QwenLM/qwen-code) | 10 条热点 Issue | 10 条 PR（clara‑agent 等） | Nightly **v0.21.11‑nightly.20260818.259951c53e** |
| **DeepSeek‑TUI** (Hmbown/DeepSeek‑TUI) | 10 条 Issue | 10 条 PR（crate 分解、i18n） | 正式 **v0.9.9**（npm trusted publish） |

> **说明**：表中 Issue/PR 数为 **本报告重点摘选的数量**，实际仓库每日总量可达数十甚至上百。

---

## 3. 共同关注的功能方向  

| 方向 | 涉及工具（示例） | 具体诉求 |
|------|----------------|----------|
| **多会话/多代理协作** | Claude Code、Qwen Code、DeepSeek‑TUI、Pi | 统一会话注册、/resume / /pause、跨会话持久化、状态钩子 |
| **会话/资源可观测性** | Gemini CLI、OpenAI Codex、Qwen Code | 使用度文件、memcached / RSS 泄漏监控、自动压缩阈值 |
| **安全/权限细粒度** | Claude Code、OpenAI Codex、Gemini CLI、OpenCode | Trusted‑RPC 签名校验、OAuth Policy、header 白名单、Workspace 限制 |
| **IDE/CLI 无缝集成** | OpenAI Codex、GitHub Copilot CLI、Qwen Code | VSCode 面板焦点管理、快捷键、插件化 UI（status‑bar、banner） |
| **跨平台稳定性** | Gemini CLI、Claude Code、Pi | Windows 重启 bug、Linux WebView 空白、macOS Intel VM 卡顿、Windows find CPU 飙升 |
| **发布自动化 & 可靠性** | OpenAI Codex、DeepSeek‑TUI、Qwen Code | 受信任 CI publish、Job caps、timeout‑guarded CI、自动化 changelog 与 asset 同步 |

---

## 4. 差异化定位分析  

| 工具 | 主要功能侧重 | 目标用户 | 关键技术路线 |
|------|--------------|----------|--------------|
| **Claude Code** | 代码生成 + 多模态交互（Vision + CLI） | 开发者/研究者，需要 **统一视觉/文本**工作流 | 拼写检查、窗口/面板同步、跨平台 VM 兼容 |
| **OpenAI Codex** | 大模型驱动的 **IDE‑centric** 开发 | 企业/个人开发者，侧重 **代码补全、批注** | TUI Markdown 导出、Session Fork、Rust nightly 发布 |
| **Gemini CLI** | **多提供程序统一入口**（OpenAI、Anthropic、Bedrock 等） | 开发者/平台工程师，追求 **跨模型可插拔** | 细粒度的 `header` 与 `workspace` 权限、agent recovery hook、AST‑aware read |
| **GitHub Copilot CLI** | **企业 SaaS** 的命令行入口 | DevOps/企业用户，关注 **安全、计费透明** | Gemini 3.7 Flash 支持、usage‑metrics 文件、/sandbox 设置 |
| **Kimi Code CLI** | **开放平台**（OpenAI‑compatible） | 研究者/量化交易等垂直用户 | Session 持久化、Quant‑strategy benchmark、SSH 日志 |
| **OpenCode** | **开源全栈 AI 代理** | 社区贡献者、开源爱好者 | Linear‑Agent 集成、CommandCode provider、/resume / /pause 命令 |
| **Pi** | **轻量级跨平台代理** | 个人开发者、CI 脚本 | 并发请求限流、Long‑running prompt timeout、Agent‑harness hooks |
| **Qwen Code** | **多语言、多模态** 的 **开源** 生态 | 研究者/企业定制 | Live‑session registry、SSE‑stream watchdog、Open‑source benchmark（SWE‑bench） |
| **DeepSeek‑TUI** | **高度模块化、可本地化** 的 TUI | 开发者/企业内部工具化 | Crate 分解、i18n 本地化、Trusted npm publish、状态栏语法统一 |

---

## 5. 社区热度与成熟度  

| 热度指数（主观 1‑10） | 成熟度（Release 频率 / PR Throughput） | 备注 |
|----------------------|----------------------------------------|------|
| **OpenAI Codex** | 9 | 发布频繁、Issue/PR 基数大、功能成熟 |
| **Claude Code** | 8 | 近期发行 2.1.235，Bug fix 快、用户反馈集中 |
| **Gemini CLI** | 7 | Nightly 发行、社区 PR 活跃、功能迭代快 |
| **Qwen Code** | 7 | Nightly 版本、code‑base 规模大、功能扩展显著 |
| **DeepSeek‑TUI** | 6 | 正式发行 v0.9.9，模块化改动明显 |
| **GitHub Copilot CLI** | 6 | 企业级发布、需求聚焦商业场景 |
| **OpenCode** | 5 | 开源但发布停滞，Issue 集中在核心 bug |
| **Pi** | 5 | 多平台兼容性问题突出，迭代相对慢 |
| **Kimi Code CLI** | 4 | Issue 少、PR 少，社区规模小 |
| **OpenCode** (anomalyco) | 4 | Release 停滞，仅少量 PR |

> **结论**：**OpenAI Codex** 与 **Claude Code** 处于**高热度 + 高成熟度**阶段；**Gemini CLI**、**Qwen Code**、**DeepSeek‑TUI** 处于**快速迭代**、预研性功能实现的**成长期**；其余工具则更偏向** niche** 或 **社区驱动**，仍需完善发布流程与Issue 响应机制。

---

## 6. 值得关注的趋势信号  

| 趋势 | 证据来源 | 对开发者的意义 |
|------|----------|----------------|
| **多模型统一调度** | Gemini CLI header / workspace 权限、OpenAI Codex Sandbox、Qwen Code live‑session registry | 企业/个人可在同一 CLI 中切换不同模型而无需多端切换，需要 **统一的策略/权限层**。 |
| **会话治理（持久化、恢复、调度）** | Claude Code /v2 添加 `rewind`/`resume`、`/pause`、DeepSeek‑TUI / resume、Pi agent recovery hook | 长会话、Agent 链路不再依赖手动重启，需 **钩子 & 自动化恢复** 设计。 |
| **安全/细粒度权限控制** | OpenAI Codex header‑auth、Claude Code workspace restriction、Gemini CLI trusted‑rpc、OpenCode policy enforcement | 对 **OAuth、API‑key、Workspace** 的细粒度校验将成为标准，插件安全审计面临新挑战。 |
| **自动化 CI/CD 可信发布** | OpenAI Codex trusted‑publish、DeepSeek‑TUI trusted npm、Qwen Code nightly assets自动化 | 减少 **人工 2FA**，提升 **发布可靠性**，对组织运维友好。 |
| **可观

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告**
*数据截止：2026-08-19*

---

## 1️⃣ 热门 Skills 排行（按社区讨论热度排序）

| 排名 | Skill（PR） | 核心功能 | 社区讨论热点 | 当前状态 |
|------|------------|-----------|----------------|--------------|
| **1** | **[fix(skill-creator): run_eval.py 始终报告 0% 召回率](https://github.com/anthropics/skills/pull/1298)** | • 将 `run_eval.py` 脚本修复为真正的技能（安装评估 artifact）  <br>• 修复 Windows 流读取、触发器检测和并行工作者问题  <br>• 恢复描述优化循环，使其能有效工作 | • 众多用户反馈（10+ 个独立复现）称优化循环在“噪声”上进行训练  <br>• 直接影响 `run_loop.py` 和 `improve_description.py` | **[OPEN]** |
| **2** | **[新增 document-typography 技能](https://github.com/anthropics/skills/pull/514)** | • 自动修复 AI 生成文档中的排版问题（孤行词、困在底部的标题、对齐问题）  <br>• 提升文档的打印/阅读友好度 | • 用户反复反馈文档中的“排版错误”是每个会话中最令人 frust 的问题之一 | **[OPEN]** |
| **3** | **[新增 ServiceNow 平台技能](https://github.com/anthropics/skills/pull/568)** | • 为 ServiceNow 提供端到端支持：ITSM、ITOM、ITAM/SAM、FSM、HRSD/CSM、SPM、CSD 和 IntegrationHub 脚本 <br>• 替代传统的狭义脚本辅助工具 | • 企业用户需求旺盛——一个全面的“ServiceNow 平台助理”替代方案已被 eagerly 等待 | **[OPEN]** |
| **4** | **[新增 self-audit 技能（v1.3.0）](https://github.com/anthropics/skills/pull/1367)** | • 双重保障：首先进行机械文件验证，然后执行 4D 推理质量门（优先处理最严重破坏）  <br>• 适用于任何技术栈和模型 | • 与“推理质量门”提案 (#1385) 遥相呼应，获得社区对交付前审计的一致赞同 | **[OPEN]** |
| **5** | **[新增 testing-patterns 技能](https://github.com/anthropics/skills/pull/723)** | • 涵盖完整测试栈：测试理念、单元测试模式（AAA）、React 组件测试、端到端测试等  <br>• 为开发者提供开箱即用的测试模式 | • 开发者社区对结构化测试指南的需求激增——这是一个“一次性启用”技能 | **[OPEN]** |
| **6** | **[新增 pyxel 技能](https://github.com/anthropics/skills/pull/525)** | • 为 [pyxel-mcp](https://github.com/kitao/pyxel-mcp) 提供支持——一个用于 8 位 retro 游戏的 Python MCP 服务器  <br>• 覆盖画布创建、运行、检查和迭代工作流 | • 作为“retrogame”技能的先锋,获得游戏开发者的广泛关注 | **[OPEN]** |
| **7** | **[新增 ODT 技能](https://github.com/anthropics/skills/pull/486)** | • 创建、填充、读取和转换 OpenDocument 文件（*.odt, *.ods）  <br>• 支持 LibreOffice 和 ISO ODF 标准 | • 用户对 LibreOffice 和 open-source 文档互操作性的需求日益增长 | **[OPEN]** |

*注意*：所有上述 PR 均标记为 **[OPEN]**（尚未合并）。它们在仓库中获得了最高关注度（许多 PR 直接修复了热门讨论的问题）。

---

## 2️⃣ 社区需求趋势（Issues 提炼）

| 主题 | 关键话题 | 体现需求的 Issues（评论数） |
|-------|------------|------------------------------|
| **🏛️ 安全与信任** | • 社区技能冒充官方 `anthropic/` 命名空间  <br>• 用户权限被滥用 | #492 – **43 条评论**“Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse” |
| **🏢 组织协作** | • 技能在组织内共享的痛点（需手动上传）  <br>• 对技能库和直接链接的需求 | #228 – **16 条评论**“Enable org

---



# Claude Code 社区动态日报 - 2026-08-19

---

## 1. 今日速览
Claude Code v2.1.235发布新功能：第一次添加拼写检查功能（依赖aspell/hunspell/ispell）。同时解决了Windows更新失败、Coway VM连接超时等关键bug，社区活跃度明显提升，用户对浏览器窗口交互问题提出多重反馈。

---

## 2. 版本发布
### 🆕 v2.1.235
- **新增功能**：支持上下文拼写检查（通过`spellcheck`设置），标实拼写错误
- **关键修复**：
  - 修复语言服务器断开导致的缓存问题
  - 解决Windows更新失败（0x80070020错误）
- **性能优化**：Coway VM连接稳定性改进

---

## 3. 社区热点 Issues（Top 10）
1. **[#76357] Windows更新导致重启问题**  
   多用户反映更新后无法启动，需重启。4天内持续复现，影响主流用户。  
  ⋅ *关注点fork：用户需迫切看到更稳定的更新机制*

2. **[#87503] Intelli Mac Cowork VM连接超时**  
   Intel Mac用户持续卡顿，コンテナ连接暴错。开发者优先级高，影响生产力。  
  ⋅ *关注：重启后缓存未恢复*

3. **[#32726] VSCode面板窃取焦点**  
   14+条评论批评界面设计问题，影响多任务流。  
  ⋅ *提升需求：用户期待可配置的焦点管理*

4. **[#83062] 计费漏单$995.67**  
   用户报告包含计划剩余额度仍扣费，省份合规性影响。  
  ⋅ *关注：企业用户可能拒用服务*

5. **[#87642] Cowork VM构建失败**  
   更新后Intel Mac卡顿，错误信息误导(v1.32352.1升级后)。  
  ⋅ *关注：硬件兼容性问题*

6. **[#77071]dispatch标签消失**  
   Windows 11专业版用户报告界面关键功能丢失。  
  ⋅ *关注：功能Truncation问题*

7. **[#87323] 跨会话消息丢失**  
   社区科普发现模型上下文未更新关键对话。  
  ⋅ *关注：协作协同功能损耗*

8. **[#87512] NVMe镜像不识别**  
   云工作室用户无法访问启动盘，影响异构环境。  
  ⋅ *关注：虚拟机虚拟化故障*

9. **[#87750] 浏览器Fallback崩溃**  
   重装后无法运行，自杀式重装循环。  
  ⋅ *关注：回滚机制缺失*

10. **[#87800] 安全模型降级需求**  
    用户明确要求Fable5→Opus5级联层降级策略。  
   ⋅ *关注：合规性优先级提升*

---

## 4. 重要 PR 进展
- **[#41611] 添加缺失源代码**  
  合并PR后可能提升代码完整性，需验证是否为最终版本补丁。  
 ⋅ *关注：代码稳定性提升潜力*

（当前24小时内仅有1个PR，后续需关注提交频率）

---

## 5. 功能需求趋势
- **IDE集成压力**：VSCode插件焦点管理、快捷键适配成为反复诉求
- **安全模型优化**：模型降级策略、符合性配置控制需求激增
- **跨平台稳定性**：Windows/macOS职场问题领先10比例
- **计费透明度**：用户追索使用时长计算逻辑

---

## 6. 开发者关注点
- **跨会话架构缺陷**：send_message通信漏洞影响协作流
- **虚拟机内核兼容性**：Intel/Mac混合环境CR时延问题
- **资源管理体系**：内存管理缺乏可视化监控
- **模型行为分散**：CLI和自动化模式设置差异

---

🔗 所有数据源: [claude-code GitHub](https://github.com/anthropics/claude-code)


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026‑08‑19）**  

---

### 1. 今日速览  
- 发布 **rust‑v0.148.0** 正式版，重点新增 **TUI 会话导出（Markdown）**、**会话 Fork/归档** 等功能；同步上传多个预发行版（0.148.0‑alpha.*）。  
- 社区在过去 24 h 内提交 **约 50 条 Issue** 与 **约 50 条 PR**，其中 **安全/浏览器插件初始化失败** 与 **MCP 服务器泄漏** 成为最活跃的热点。

---

### 2. 版本发布  
- **rust‑v0.148.0** – 正式发布，版本号 `0.148.0`。  
  - **导出完整 TUI 会话为 Markdown**（`/export`），可直接复制到剪贴板或写入文件。  
  - **会话 Fork**：`codex exec fork` 并支持通过 TUI 拾取器存档或恢复会话。  
  - 其他细节见 **[Release 0.148.0](https://github.com/openai/codex/releases/tag/v0.148.0)**。

- **rust‑v0.148.0‑alpha.23 / alpha.22** – 预发行版，主要用于验证上述新功能的兼容性。

> **无需进一步说明** → 如无最新发布，可省略此节。

---

### 3. 社区热点 Issues（过去 24 h）  
以下 **10 条** Issue 按评论数排序，列出原因、社区关注度以及关键链接。

| # | 标题（摘要） | 关键原因 | 社区反应 | 链接 |
|---|--------------|----------|----------|------|
| **#39136** | **浏览器插件初始化失败：Trusted RPC 依赖不在可信代码路径** | Windows 环境下浏览器插件启动时报错，影响核心交互功能。 | 评论 **63**，👍 **20**，多数用户确认在最新 26.814.41407 仍复现，期待快速修复。 | [Issue 39136](https://github.com/openai/codex/issues/39136) |
| **#32041** | **VS Code 扩展在 Linux 上打开空白 webview** | 26.5707.* 版本出现渲染问题，而 26.5623 版本功能受限。 | 评论 **56**，👍 **3**，社区呼吁修复 Linux 兼容性。 | [Issue 32041](https://github.com/openai/codex/issues/32041) |
| **#2880** | **【已关闭】TUI 复制/导出为 Markdown** | 用户长期请求能够把对话/输出导出为 Markdown，用于文档与issue追踪。 | 评论 **31**，👍 **78**，已实现但标记为 **CLOSED**，表明需求已被满足。 | [Issue 2880](https://github.com/openai/codex/issues/2880) |
| **#30408** | **MCP 服务器泄漏：每创建一次子进程均未清理** | 长期运行会导致 9 GB+ RSS 内存泄漏，影响稳定性。 | 评论 **29**, 👍 **8**，多位运维用户报告内存问题并提供调试信息。 | [Issue 30408](https://github.com/openai/codex/issues/30408) |
| **#20500** | **支持多个已命名账户 per app/connector** | 需要在同一会话中切换不同授权账户，且保持隐私边界。 | 评论 **28**, 👍 **107**，需求热度最高，已标记为 **ENHANCEMENT**。 | [Issue 20500](https://github.com/openai/codex/issues/20500) |
| **#25928** | **VS Code/Cursor 扩展：提交的 Prompt 随机消失** | 在 Windows+WSL 环境下，Prompt 在排队前被意外丢弃。 | 评论 **27**, 👍 **18**，多数 Pro 用户受限，期待稳定性提升。 | [Issue 25928](https://github.com/openai/codex/issues/25928) |
| **#23930** | **子任务卡片残留：关闭后仍在 UI 中显示** | 完成的子代理仍呈“活跃”状态，导致 UI 与后台状态不一致。 | 评论 **26**, 👍 **5**，开发者关注 UI 状态同步。 | [Issue 23930](https://github.com/openai/codex/issues/23930) |
| **#35119** | **[Windows+WSL] 集成终端标记为非 Git，报告 “Git 不可用”** | 对 WSL 仓库的识别回归问题，影响 Linux‑style 工作流。 | 评论 **23**, 👍 **17**，使用 WSL 的开发者关注。 | [Issue 35119](https://github.com/openai/codex/issues/35119) |
| **#39173** | **浏览器控制失败：Trusted RPC 依赖超出受限代码路径** | 与 #39136 类似，但侧重于浏览器控制权限错误。 | 评论 **21**, 👍 **10**，同样影响核心功能。 | [Issue 39173](https://github.com/openai/codex/issues/39173) |
| **#28276** | **Failed to archive conversation：出现无意义的会话** | 归档功能异常，导致不必要的会话堆积。 | 评论 **19**, 👍 **3**，用户担忧数据整洁。 | [Issue 28276](https://github.com/openai/codex/issues/28276) |

> **共性观察**：安全/权限（RPC 受限）与资源泄漏（MCP/进程）是本轮最活跃的两大议题。

---

### 4. 重要 PR 进展（过去 24 h）  
以下 **10 条** PR（按合并状态/影响力排序）展示了代码层面的关键改动。

| PR # | 标题 | 核心改动 | 链接 |
|------|------|----------|------|
| **#39322** | **Enforce workspace restrictions for header authentication** | 验证 `chatgpt-account-id` 头部是否在受限 Workspace 中，拒绝非法凭据。 | [PR 39322](https://github.com/openai/codex/pull/39322) |
| **#31817** | **Update models.json** | 自动更新模型配置文件，保持最新。 | [PR 31817](https://github.com/openai/codex/pull/31817) |
| **#39320** | **Expand OAuth metadata redirect test coverage** | 增加对跨域重定向的安全检查，防止中间人攻击。 | [PR 39320](https://github.com/openai/codex/pull/39320) |
| **#39319** | **Add the async user message tool** | 引入 `send_user_message_async`，支持异步用户消息发送。 | [PR 39319](https://github.com/openai/codex/pull/39319) |
| **#39316** | **Support Edu Plus and Edu Pro account plans** | 新增教育版账户计划识别，用于授权与费率映射。 | [PR 39316](https://github.com/openai/codex/pull/39316) |
| **#39315** | **Evict guardian transcript entries in cacheable chunks** | 改进 Guardian V2  transcript 缓存清理策略，提高缓存命中率。 | [PR 39315](https://github.com/openai/codex/pull/39315) |
| **#39314** | **Run hooks with the captured session environment** | 将 Hook 环境捕获后复用，提升配置重载的稳定性。 | [PR 39314](https://github.com/openai/codex/pull/39314) |
| **#39312** | **Add async delivery metadata to agent messages** | 在 agent 消息中加入 `delivery` 字段，标记异步/非阻塞消息。 | [PR 39312](https://github.com/openai/codex/pull/39312) |
| **#39311** | **Bind unified exec approvals to shell executables** | 将统一执行批准绑定到具体 shell 可执行文件，防止意外权限提升。 | [PR 39311](https://github.com/openai/codex/pull/39311) |
| **#39309** | **Attribute executor skill invocations to plugins** | 为执行器技能标注插件 ID，便于追踪与策略控制。 | [PR 39309](https://github.com/openai/codex/pull/39309) |

> 这些 PR 主要聚焦 **安全/权限控制、缓存/回收、异步消息、教育版支持** 等方向。

---

### 5. 功能需求趋势（从 Issue 中提炼）  

| 趋势 | 典型需求 | 说明 |
|------|----------|------|
| **多账户 & 隔离** | Issue #20500（多命名账户） | 开发者希望在同一会话中切换不同授权账户，且保持严格的隐私/权限边界。 |
| **会话持久化 & 导出** | Issue #2880（Markdown 导出）<br>Issue #28276（归档异常） | 需要将对话、子任务等信息导出为可编辑的 Markdown/其他格式，并支持可靠的归档/恢复。 |
| **资源管理 & 清理** | Issue #30408（MCP 进程泄漏）<br>Issue #28276（无意义会话）<br>Issue #38787（quadratic thread/resume） | 社区对不间断的子进程、未清理的线程、过度增长的 transcript 非常敏感，呼吁更智能的回收机制。 |
| **IDE/终端体验提升** | Issue #32041（Linux 空白 WebView）<br>Issue #25928（Prompt 消失）<br>Issue #24040（Chrome 插件注册表错误） | 对 Linux、Termius、Chrome 插件等多平台体验的稳定性与兼容性需求日益增长。 |
| **模型/上下文窗口** | Issue #39144（5.6 Sol vs Terra 上下文差异）<br>Issue #35119（WSL Git 检测） | 对新模型的上下文窗口大小、长上下文支持的细粒度控制仍是热点。 |
| **安全/权限细化** | Issue #39136、#39173、#39236（浏览器插件权限）<br>PR #39322（header 权限校验） | 细粒度的受限策略（Workspace、header、RPC 路径）正在系统化实现。 |

> **总体倾向**：**可靠性（Memory leak、Process cleanup)**、**多租户/账户隔离**、**高效的会话导出与归档**、以及**跨平台兼容性**是社区最集中的关注点。

---

### 6. 开发者关注点（痛点 & 高频需求）  

1. **内存/资源泄漏** – 多次提及 MCP 服务器泄漏、子进程未回收，导致长期运行的桌面/CLI 应用内存飙升。  
2. **权限/安全焦虑** – Trusted RPC 依赖错误、浏览器插件授权受阻，让开发者担心在生产环境中使用时的安全边界。  
3. **跨平台兼容性** – Linux WebView 空白、WSL Git 检测失效、终端渲染卡顿，影响跨平台工作流。  
4. **会话治理** – 归档、复制、导出功能的缺失或不稳

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报 – 2026‑08‑19**  
*技术分析师：专注 AI 开发工具*

---

### 1. 今日速览  
- **Nightly 0.56.0** 通过多项 SSR Agent 修复，提升了模型与工具交互的稳定性。  
- **社区关注度** 最高的 Issue 主要集中在 **子代理（sub‑agent）挂起** 与 **内存系统** 的可靠性问题。  
- **PR 活跃度** 以安全与工具执行相关的改动为主，尤其是对 **子代理** 与 **shell 执行** 的硬化。

---

### 2. 版本发布  
**v0.56.0‑nightly.20260818.g194edea47**  
- **SSR Agent**：修复了隐私提示文字与选择项的歧义（#28820）。  
- **SSR Agent**：消除了集成测试中的 TypeScript strict‑null 错误（#28820）。  
- 其它细节修复与文档更新（见 PR #28892、#28898 等）。

---

### 3. 社区热点 Issues（10）  

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| **22323** | Subagent recovery after MAX_TURNS reported as GOAL success | 影响多仓库分析流程，导致错误的成功判定 | 12 条评论，2 赞，持续讨论 |
| **21409** | Generalist agent hangs | 直接导致 CLI 无法完成任何任务，影响日常使用 | 8 条评论，8 赞，已被标记为 P1 |
| **19873** | Leverage model's bash affinity via Zero‑Dependency OS Sandboxing | 关键功能提升模型原生 Bash 能力，提升性能 | 8 条评论，1 赞，正在评估实现 |
| **24353** | Robust component level evaluations | 评估框架的可扩展性与可靠性，影响 CI/CD | 7 条评论，0 赞，已开启讨论 |
| **22745** | Assess the impact of AST‑aware file reads, search, and mapping | 可能大幅减少 token 费用，提升代码分析速度 | 7 条评论，1 赞，正在收集实验数据 |
| **21968** | Gemini does not use skills and sub‑agents enough | 影响模型的自适应能力，导致手动指令频繁 | 6 条评论，0 赞，已被标记为 P2 |
| **26522** | Stop Auto Memory from retrying low‑signal sessions indefinitely | 防止内存系统卡死，提升稳定性 | 5 条评论，0 赞，已进入实现阶段 |
| **25166** | Shell command execution gets stuck with “Waiting input” after command completes | 直接导致命令行交互失效，影响开发体验 | 4 条评论，3 赞，已被标记为 P1 |
| **22232** | Enhance browser_agent resilience: Automatic session takeover and lock recovery | 解决浏览器代理在多实例环境下的竞争问题 | 4 条评论，0 赞，正在评估方案 |
| **21983** | browser subagent fails in wayland | 影响 Linux Wayland 环境下的浏览器代理 | 4 条评论，1 赞，已被标记为 P1 |

> **为什么重要？**  
> 1. **子代理挂起** 与 **技能使用不足** 直接影响 Gemini CLI 的核心功能。  
> 2. **内存系统** 与 **工具执行** 的稳定性是日常使用的基石。  
> 3. **AST‑aware** 与 **Bash affinity** 的探索代表了未来性能与成本优化的方向。

---

### 4. 重要 PR 进展（10）  

| # | 标题 | 主要改动 | 影响 |
|---|------|----------|------|
| **28892** | fix(core): preserve empty text turns with tools or media | 保留空文本但携带工具请求的历史记录 | 防止信息丢失，提升对话完整性 |
| **28898** | feat(pr‑generator‑core): harden subprocess execution security | 加强子进程安全、环境变量清理、GitHub API 交互 | 降低安全风险，提升 CI/CD 可靠性 |
| **28883** | [SSR Agent] Issue Fix (20079): Support symlinked agent markdown files | 识别符号链接的 agent 文件 | 解决 #20079，提升插件化体验 |
| **28877** | [SSR Agent] Issue Fix (18551): Prevent false positive loop detection | 过滤统一流内容导致的误判 | 减少无意义的循环检测，提升响应速度 |
| **28876** | [SSR Agent] Issue Fix (18062): Handle 404 API error in Cloud Shell default project | 处理 Cloud Shell 默认项目缺失导致的 404 | 提升 Cloud Shell 环境的鲁棒性 |
| **28873** | [SSR Agent] Issue Fix (28512): Prevent unhandled promise rejection on OAuth callback timeout | 处理 OAuth 回调超时的未捕获异常 | 防止身份验证流程崩溃 |
| **28871** | [SSR Agent] Issue Fix (14724): Translate compact matchers to compress and update enum | 更新匹配器枚举 | 兼容旧配置，提升迁移友好性 |
| **28870** | [SSR Agent] Issue Fix (21783): Emit pending tool call update before requesting permission | 先发送 pending 状态再请求权限 | 改善工具调用的可见性，提升 UX |
| **28862** | refactor(core): remove eslint-disable and type-asserts from shellExecutionService | 清理不安全的类型断言与 ESLint 禁用 | 提升代码质量与可维护性 |
| **28863** | fix(extensions): prompt for consent on environment changes and sanitize runtime‑altering environment variables | 统一环境变量更改的同意流程 | 加强安全性，防止恶意注入 |

> **核心价值**  
> - **安全性**：多项 PR 关注子进程与 OAuth 的安全硬化。  
> - **稳定性**：修复子代理循环检测、工具调用状态、Cloud Shell 404 等关键缺陷。  
> - **可维护性**：代码重构与类型安全提升，减少未来维护成本。

---

### 5. 功能需求趋势  
1. **IDE 与插件集成** – 需求集中在 VSCode/JetBrains 兼容性、浏览器代理、IDE 侧边栏等。  
2. **性能与成本优化** – AST‑aware 搜索、Bash affinity、Token‑frugal 读取等。  
3. **子代理与技能管理** – 子代理挂起、技能使用不足、自动化恢复等。  
4. **安全与合规** – 子进程安全、环境变量同意、Auto Memory 日志最小化。  
5. **工具与 API 限制** – 400+ 工具导致 400 错误、工具调用的权限与状态管理。  

---

### 6. 开发者关注点  
- **子代理挂起 / 死锁**：多条 Issue 与 PR 关注子代理的可靠性。  
- **内存系统卡死**：Auto Memory 低信号会无限重试，导致长时间卡住。  
- **工具调用与权限**：工具调用前缺少 pending 状态，导致 UI 不一致。  
- **安全性**：子进程、OAuth、环境变量等方面的安全漏洞被频繁提及。  
- **工具数量限制**：超过 400 个工具时出现 400 错误，影响大规模项目。  

> **建议**  
> 1. 继续推进子代理恢复与技能使用的自动化。  
> 2. 对 Auto Memory 进行重构，加入超时与重试阈值。  
> 3. 在工具调用流程中加入更细粒度的权限与状态反馈。  
> 4. 加强安全审计，尤其是子进程与环境变量的处理。  

---

**GitHub 参考链接**  
- Releases: https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260818.g194edea47  
- Issues: https://github.com/google-gemini/gemini-cli/issues  
- PRs: https://github.com/google-gemini/gemini-cli/pulls  

---

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报**  
*日期：2026‑08‑19（UTC）*  

---

## 1. 今日速览  
- Copilot CLI 发布 **v1.0.81‑1**，新增 Gemini 3.7 Flash 支持、编辑器快捷键及使用.metrics 文件；同时改进模组列表 UI，让快速禁用计划/定时器更直观。  
- 社区 Issue 活跃度回升， especially 对 **沙盒（sandbox）限制** 与 **MCP 认证** 的兼容性问题聚焦。

---

## 2. 版本发布  
- **v1.0.81‑1**（2026‑08‑19）  
  - **Add**  
    - Gemini 3.7 Flash 模型支持  
    - `/sandbox` 中 **Ctrl+E** 快捷键直接打开 `settings.json`  
    - 通过 `--usage-output-file` 导出 **per‑agent usage metrics** 的 JSON  
  - **Improved**  
    - 在 *Schedule Manager* 中使用 **x** 键快速删除已安排的 `/every` 与 `/after` 提示  
  - **Fixed**  
    - 修复 `allow-all` 关闭后未正确取消的隐蔽 bug（仅描述未完整）  

---

## 3. 社区热点 Issues（选 10 条）  

| # | 主题 | 关键摘要 | 社区反应 |
|---|------|----------|----------|
| **#4390** | **组织模型目录缺失** |  enterprise 启用的 Anthropic 模型（Claude‑Sonnet‑5、Opus‑5、Kimi‑K3）未在 Copilot CLI 目录中出现，导致不可用。 | ★10 赞，讨论解决方案，计划在后续里程碑中统一目录同步。 |
| **#4313** | **会话历史滚动** | 需要在终端使用鼠标滚轮或 PageUp/PageDown 浏览聊天记录。 | ★8 评论，已标记为 *area:input-keyboard*，高频需求。 |
| **#3162** | **MCP 服务器误标为 blocked** | 1.0.42 版将已在 MCP  registry 中的自定义服务器错误标记为 “blocked by policy”。 | ★7 赞，已修复但仍被提及，反馈验证不足。 |
| **#2904** | **自定义 Agent 前置信息** | 支持在 `.agent.md` front‑matter 中设置 **reasoning effort**（思考深度）专属于每个 Agent。 | ★20 赞，显示强烈兴趣，正在设计实现方案。 |
| **#4096** | **第三方 MCP 权限失效** | OAuth 连接成功但工具未在 CLI 会话中出现，可能是 RFC 8414 §3.3 规范忽略的漏洞。 | ★6 赞，已标记为 *triaged*，计划在下次安全审计中深化。 |
| **#2958** | **模式化默认模型** | 允许在 **plan** 与 **autopilot** 两种交互模式下配置不同的默认模型。 | ★16 赞，需求明确，已在 roadmap 中排入下个里lease。 |
| **#4206** | **Env footer 卡死** | 状态栏卡在 “Loading: …” 永久循环，实际已加载成功。 | ★4 赞，已在 1.0.83 夜ly中修复。 |
| **#4490** | **Atlassian MCP OAuth 退回 RFC 8414** | 1.0.80 引入的安全检查导致 API 端点不匹配，导致无法登录。 | ★3 赞，Community 已提交补丁。 |
| **#4522** | **sandbox.enabled=false 被覆盖** | 当 server‑managed policy 处于 “undetermined” 状态时，CLI 仍强制启用本地 sandbox，违背用户显式设置。 | ★5 赞，已列为高优先级 bug。 |
| **#4524** | **Sandbox 过度限制** | 新版本对所有使用者启用了极度封闭的 sandbox，导致 git 操作失效。 | ★0 赞，社区对默认值提出担忧。 |

> **链接**（完整 Issue 可直接点击）：  
> - #4390: https://github.com/github/copilot-cli/issues/4390  
> - #4313: https://github.com/github/copilot-cli/issues/4313  
> - #3162: https://github.com/github/copilot-cli/issues/3162  
> - #2904: https://github.com/github/copilot-cli/issues/2904  
> - #4096: https://github.com/github/copilot-cli/issues/4096  
> - #2958: https://github.com/github/copilot-cli/issues/2958  
> - #4206: https://github.com/github/copilot-cli/issues/4206  
> - #4490: https://github.com/github/copilot-cli/issues/4490  
> - #4522: https://github.com/github/copilot-cli/issues/4522  
> - #4524: https://github.com/github/copilot-cli/issues/4524  

---

## 4. 重要 PR 进展（选 10）  

| PR | 关键修改 | 影响 |
|----|----------|------|
| **#3163** | 为 **ViewSonic** 监视器添加专用 UI 组件，以解决 #2591、#3561、#3559 中的多显示器配置问题。 | 目标是改善 **多显示器** 场景的交互体验，目前处于 **draft** 状态，等待审阅。 |
| **#3162‑fix** _(已合并)_ | 修正 **schedule manager** 中 `x` 键删除计划的逻辑。 | 已在 v1.0.81‑1 中上线，提升 UI 可用性。 |

> **链接**  
> - PR #3163: https://github.com/github/copilot-cli/pull/3163  
> - 已合并的 PR #3162（实现已在发布说明中）  

---

## 5. 功能需求趋势  

1. **新模型支持** – 社区持续请求更多本土大模型（如 Claude‑Sonnet‑5、Opus‑5、Kimi‑K3）进入官方目录。  
2. **模式化配置** – 需要在 **plan**、**autopilot**、**terminal**、**sandbox** 等不同交互模式下分别配置默认模型或 capability（如 reasoning effort）。  
3. **会话可视化** – 用户希望在终端直接滚动、搜索会话历史，提升长对话调试体验。  
4. **MCP 权限细粒度** – 对第三方 OAuth MCP 服务器的权限校验仍不稳定，需要更可靠的 token 同步机制。  
5. **沙盒 (sandbox) 策略** – 当前 sandbox 规则（如允许/禁用特定路径）在不同环境（MDM、文件、CI）间不一致，需要统一的配置语义与更好的错误提示。  
6. **使用度可观测化** – 对企业/组织层面的模型使用统计（per‑agent metrics）有更细粒度的需求，已经在 `usage-output-file` 中露出雏形。  

---

## 6. 开发者关注点（痛点 & 高频需求）  

- **模型目录同步**：企业组织启用的模型不自动映射到 CLI 目录，需要手动刷新或 API 调整。  
- **环境变量/凭证热更新**：BYOK/provider token 需要在不重启 CLI 的情况下刷新，尤其在 CI/CD 环境下尤为重要。  
- **性能负载**：MCP server 启动延迟或网络卡顿时会导致大量 stdio 子进程泄漏，导致 CPU/内存峰值。  
- **IDE/编辑器集成**：用户希望在编辑器侧直接使用 `/sandbox` 快捷键打开 `settings.json`，提升配置调试效率。  
- **更灵活的插件市场过滤**：当前仅支持名称匹配，缺少分支/标签级别的细粒度控制，导致缓存冲突。  
- **详细错误信息**：如 “Missing namespace for function_call” 等错误在日志中缺乏上下文，需要更友好的回溯信息。  

---

> **结论**：本次发布的核心亮点在于模型扩容与 CLI 使用度可视化，但社区的真正焦点仍在 **功能细粒度的配置（模式、effort、sandbox）**、**模型目录同步** 与 **MCP 权限/兼容性** 上。后续里程碑若能够在此方向上持续迭代，将显著提升用户使用体验与企业落地速度。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区动态日报（2026‑08‑19）**  

---

### 1. 今日速览  
- 过去 24 小时内，社区共更新 **2 条 Issue** 与 **2 条 PR**，分别涉及 Web UI 渲染异常、量化策略基准报告以及 SSH 登录日志与知识平面的设计讨论。  
- 当前 **没有新版本发布**，但几项核心功能的改动已进入活跃的社区讨论。  

---

### 2. 版本发布  
> **无** – 最近未发布任何正式版本或预发行包。

---

### 3. 社区热点 Issues（近 24h）  

| # | 标题 | 关键意义 | 社区反应 |
|---|------|----------|----------|
| **#2607** | [Web UI: assistant messages re‑render as one‑fragment‑per‑line after tab switch/reload for non‑Kimi (OpenAI‑compatible) providers](https://github.com/MoonshotAI/kimi-cli/issues/2607) | 揭示了在切换标签页或刷新后，非原生 Kimi 提供商的助理消息会碎片化渲染，影响交互流畅性。 | 1 条评论，点赞 0；该问题已被标记为 **bug**，多数用户在使用外部 OpenAI‑compatible API 时会遇到。 |
| **#2608** | [Benchmarked K3 + Kimi Code on out‑of‑sample quant strategy generation — full report open‑sourced](https://github.com/MoonshotAI/kimi-cli/issues/2608) | 为量化交易社区提供了基准数据，展示了 Kimi Code 在策略生成中的实际性能与可靠性，对后续模型优化具有参考价值。 | 0 条评论，点赞 0；发布量化基准报告，受到 FinTech、量化交易爱好者关注。 |

> **说明**：截至本报告时，仅有上述两条 Issue 在过去 24 小时内有更新。为便于聚焦热点，它们被视为本次“社区热点 Issues”。如需更全面的视图，可参考仓库历史 Issue 列表。

---

### 4. 重要 PR 进展（近 24h）

| # | 标题 | 功能/修复内容 | 状态 |
|---|------|----------------|------|
| **#848** | [fix(kaos): log ssh failures when enabled](https://github.com/MoonshotAI/kimi-cli/pull/848) | 当 SSH 功能启用时，统一记录并输出错误日志，提升调试可观察性。 | **CLOSED** |
| **#2606** | [Dev/knowledge plane](https://github.com/MoonshotAI/kimi-cli/pull/2606) | 引入“开发者知识面”模块，提供贡献指南与设计文档，规范 PR 流程，降低新贡献者的进入门槛。 | **OPEN** |

> **说明**：仅有上述两条 PR 在最近 24 小时内被更新，故本节仅列出这两项最具代表性的改动。

---

### 5. 功能需求趋势  

从本轮 Issue 与 PR 中可以提炼出以下社区关注的技术方向：

1. **UI 稳定性**：非原生 Provider（如 OpenAI‑compatible）在标签页切换或页面刷新后的渲染碎片化，需实现更鲁棒的 UI 状态管理。  
2. **性能基准**：量化交易用户对策略生成的 **out‑of‑sample** 性能评估需求日益增长，期望通过系统化基准报告指导模型迭代。  
3. **开发者知识管理**：通过 **Dev/Knowledge Plane** 建立统一的贡献手册与设计决策文档，帮助新 contributors 快速上手。  
4. **调试可观察**：SSH 等底层功能的错误日志需体系化，以便在远程部署或故障排查时快速定位问题。  

总体来看，社区更关注 **可靠性、可观测性与可扩展性**，尤其是在多模型、跨平台（Web UI + CLI）协同使用的场景下。

---

### 6. 开发者关注点  

- **渲染异常**：多位用户在切换标签页后反复报告 UI 重渲染问题，提示前端状态管理需加强。  
- **贡献流程不清晰**：PR #2606 引入的“知识平面”说明，反映出社区对贡献指南和审查流程仍有认知偏差，需要更明确的提交流程。  
- **日志缺口**：SSH 功能未统一日志记录，导致故障排查困难，提供统一的错误上报机制是迫切需求。  
- **基准报告价值**：量化交易从业者主动发布基准报告，表明对 **性能可复现性** 的高度关注，未来可能会催生更多自动化 benchmarking 脚本。  

---

> **结语**：尽管今日仅有少量更新，但围绕 UI 稳定性、性能基准以及贡献流程的讨论已形成明确的技术方向。后续关注这些议题的演进将有助于把握 Kimi Code CLI 的发展脉络。  

--- 

*报告作者：AI 开发工具技术分析师*  
*生成时间：2026‑08‑19*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 — 2026-08-19

---

## 1. 今日速览

今日无新版本发布，但社区活跃度维持高位。多个关键功能需求（Linear Agent 集成、CommandCode 提供商、/resume 与 /pause 命令）获得高票支持；同时，账单配额不一致、应用无响应、会话卡死等稳定性问题成为开发者反馈最集中的痛点。PR 侧进展活跃，Qwen 采样参数修复、图片附件容错、子agent ID 暴露等修复陆续推进。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #32149 — OpenCode 停止处理请求且无响应
- **作者**: ModernCreator068 | 👍 6 | 💬 15
- **链接**: [anomalyco/opencode#32149](https://github.com/anomalyco/opencode/issues/32149)
- **摘要**: 提交新 prompt 后应用进入 "thinking" 状态数秒，随后完全停止响应，无任何输出。这是一个**严重影响可用性的阻塞性 Bug**，社区关注度极高。

### 🔴 #33495 — Zen 余额无法解除免费额度限制
- **作者**: 90renrocraftcracksblogspotcom | 👍 1 | 💬 7
- **链接**: [anomalyco/opencode#33495](https://github.com/anomalyco/opencode/issues/33495)
- **摘要**: 持有 Zen 余额（≥$20）的付费用户仍被当作免费用户，触发 429 限流。**账单系统逻辑缺陷**，涉及付费转化信任问题。

### 🔴 #42935 — Go 订阅额度在 20 分钟内耗尽（缓存读取归零）
- **作者**: Blemeh | 👍 3 | 💬 4
- **链接**: [anomalyco/opencode#42935](https://github.com/anomalyco/opencode/issues/42935)
- **摘要**: 使用 `deepseek-v4-flash (go)` 时，缓存读取量骤降至 0，导致额度从 11% 在 20 分钟内飙至 100%。**缓存与计费系统的严重不一致**。

### 🔴 #43303 — 消息 ID 回绕：新消息排在旧消息之前
- **作者**: TheFabFab | 👍 0 | 💬 2
- **链接**: [anomalyco/opencode#43303](https://github.com/anomalyco/opencode/issues/43303)
- **摘要**: 自 2026-08-14 11:19:55 UTC 起，消息 ID 中的 36 位毫秒时钟回绕，导致所有新消息排序在旧消息之前，**会话静默且历史记录被删除**。这是**数据完整性级别的严重缺陷**。

### 🟡 #42748 — 消息更新事件写入二次复杂度
- **作者**: iceteaSA | 👍 0 | 💬 3
- **链接**: [anomalyco/opencode#42748](https://github.com/anomalyco/opencode/issues/42748)
- **摘要**: `message.updated.1` 每次更新都携带完整消息快照（含 `summary.diffs`），导致事件表写入量随 diff 大小呈 O(updates × diff_size) 增长。**长期使用将导致数据库膨胀和性能劣化**。

### 🟡 #3787 — [FEATURE] Linear Agent 集成
- **作者**: knotbin | 👍 34 | 💬 17
- **链接**: [anomalyco/opencode#3787](https://github.com/anomalyco/opencode/issues/3787)
- **摘要**: 请求将 Linear 的 Agent 功能集成到 OpenCode 中，允许直接将 Linear issue 分配给 agent 处理。**高票功能需求，社区支持度极高（34 👍）**。

### 🟡 #26338 — [FEATURE] 添加 CommandCode 作为 Provider
- **作者**: KurutoDenzeru | 👍 36 | 💬 9
- **链接**: [anomalyco/opencode#26338](https://github.com/anomalyco/opencode/issues/26338)
- **摘要**: 请求支持 [CommandCode.ai](https://commandcode.ai/) 作为 OpenCode 的 provider/认证选项。**最高票功能需求之一（36 👍），反映社区对多 provider 生态的强烈需求**。

### 🟡 #7226 — [FEATURE] 实现 /resume 与 /pause 命令
- **作者**: zippeurfou | 👍 28 | 💬 8
- **链接**: [anomalyco/opencode#7226](https://github.com/anomalyco/opencode/issues/7226)
- **摘要**: 用户希望在 TUI 中通过 `/resume` 和 `/pause` 命令控制 agent 的中断与恢复，避免每次 ESC 中断后重新输入上下文。**高票需求（28 👍），工作流改进诉求明确**。

### 🟡 #7648 — [FEATURE] 阻止 TUI 在新消息流入时自动滚动
- **作者**: alexx-ftw | 👍 18 | 💬 11
- **链接**: [anomalyco/opencode#7648](https://github.com/anomalyco/opencode/issues/7648)
- **摘要**: 当 agent 流式输出新消息时，TUI 自动滚动到底部，影响用户阅读之前消息的体验。请求增加一个关闭自动滚动的设置。**UX 改进需求，社区反响积极（18 👍）**。

### 🟡 #43277 — 会话永久卡死，重启无法恢复
- **作者**: dcon4 | 👍 0 | 💬 2
- **链接**: [anomalyco/opencode#43277](https://github.com/anomalyco/opencode/issues/43277)
- **摘要**: 多个会话在正常使用中永久卡死（拒绝新消息），**重启系统也无法清除**。属于**数据持久化层面的严重故障**。

---

## 4. 重要 PR 进展（精选 10 条）

### 🔧 #43314 — 修复图片附件解码失败导致 prompt 中断
- **作者**: weike-zhang | 链接: [anomalyco/opencode#43314](https://github.com/anomalyco/opencode/pull/43314)
- **摘要**: 当用户消息包含 Photon 调整器无法解码的图片格式（AVIF/HEIC/BMP/TIFF）或超大图片时，整个 prompt 会失败。此 PR 使系统降级处理而非中断。**实用性很强的容错

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报（2026‑08‑19）**  

---

### 1. 今日速览  
- 今日没有新版本发布，社区聚焦在 **Copilot 登录频率限制**、**TUI 长内容闪烁**、**上下文压缩时机** 以及 **提供程序超时/挂起** 等稳定性问题上。  
- 多个与 **OpenAI‑compatible**、**Anthropic**、**Bedrock** 提供程序相关的 PR 已合并，提升了多模型兼容性和容错能力。  
- 功能需求方面，**可配置的命令禁用**、**语言切换**、**会话恢复钩子** 等可扩展性改进受到广泛关注。

---

### 2. 版本发布  
> **无新版本**（过去 24 小时内没有 Release）

---

### 3. 社区热点 Issues（精选 10 条）  

| # | 标题 | 为什么重要 | 社区反应 | 链接 |
|---|------|------------|----------|------|
| #8251 | GitHub Enterprise Copilot 登录后因并发策略请求导致 HTTP 429 速率限制 | 影响企业用户使用 Copilot，登录成功后立即被限制，需在客户端层面做防抖。 | 4 条评论，讨论并发请务求串行化或加退避。 | https://github.com/earendil-works/pi/issues/8251 |
| #8281 | TUI：长 transcripts 时 viewport 以上内容变更导致全屏闪烁 | 长时间使用时出现明显刷新抖动，影响阅读体验。 | 4 条评论，提出增量渲染或双缓冲方案。 | https://github.com/earendil-works/pi/issues/8281 |
| #6339 | 自动压缩阈值仅在运行边界评估，Agentic 运行中不触发 | 导致长上下文未及时压缩，增加 token 消耗和溢出风险。 | 3 条评论，建议在每轮 prompt 前检查。 | https://github.com/earendil-works/pi/issues/6339 |
| #8138 | 将 OpenAI‑Codex 的 “Sorry, something went wrong” 视为可重试错误 | 该临时错误目前被视为终止，导致不必要的失败。 | 2 条评论，认同需加入重试分类。 | https://github.com/earendil-works/pi/issues/8138 |
| #8323 | OpenAI 客户端创建时未设置 timeout，默认 600s 可能导致长时间本地模型被截断 | 对需要 >10 分钟思考的本地模型造成误杀。 | 2 条评论，建议显式传入合理 timeout。 | https://github.com/earendil-works/pi/issues/8323 |
| #8317 | 添加 `agent_recovery_exhausted` 扩展钩子，在原生重试和溢出压缩耗尽后触发 | 为插件提供在恢复失败后切换模型或继续会话的机会。 | 2 条评论，期待此钩子提升容错性。 | https://github.com/earendil-works/pi/issues/8317 |
| #8309 | 长对话时每条新命令导致界面跳至顶部又回滚 | 频繁的滚动跳断影响代码编辑流畅度。 | 2 条评论，定位到滚动恢复逻辑。 | https://github.com/earendil-works/pi/issues/8309 |
| #8292 | 在 AgentHarness 暴露消息持久化前的替换钩子 | 允许在首次 Provider 请求前追加结构化内容，而不破坏会话日志。 | 2 条评论，认为对自定义上下文注入很有用。 | https://github.com/earendil-works/pi/issues/8292 |
| #8286 | 使用远程 Ollama（非 127.0.0.1）时，OpenAI‑completions 提供程序非确定性地返回空输出或幻觉 | 网络路径导致请求丢失或提前关闭，仅在ループ back 时正常。 | 2 条评论，怀疑为 HTTP 连接复用或超时问题。 | https://github.com/earendil-works/pi/issues/8286 |
| #8282 | Windows 上 `find` 扫描巨大目录时进程卡死，占用大量 CPU | 影响文件搜索功能，建议默认改用 `fd`。 | 2 条评论，多数赞成改为 fd 或添加超时。 | https://github.com/earendil-works/pi/issues/8282 |

---

### 4. 重要 PR 进展（精选 10 条）  

| # | 标题 | 功能或修复内容 | 链接 |
|---|------|----------------|------|
| #8330 | **agent: stream inactivity watchdog** – 为提供程序 SSE 流添加不活动超时，防止因流中断导致的无限等待。 | https://github.com/earendil-works/pi/pull/8330 |
| #8327 | **fix(tui): yield long markdown rendering** – 在渲染长 Markdown 时让出事件循环，避免 UI 卡死。 | https://github.com/earendil-works/pi/pull/8327 |
| #8326 | **feat: add `disabledCommands` setting** – 通过 `settings.json` 新增 `disabledCommands` 数组，内置斜杠命令可被禁用并隐藏自动补全。 | https://github.com/earendil-works/pi/pull/8326 |
| #8320 / #8324 | **feat(coding-agent): add OpenAI-compatible API provider to /login flow** – 在登录 UI 中增加 “OpenAI Compatible API” 条目，便于用户配置自定义端点。 | https://github.com/earendil-works/pi/pull/8320  & https://github.com/earendil-works/pi/pull/8324 |
| #8254 | **fix(ai): prevent copilot policy login rate limits** – 在获取模型目录后再发送策略请求，并对 429 加入有限重试与退避。 | https://github.com/earendil-works/pi/pull/8254 |
| #8319 | **fix(ai): anthropic fallback usage** – 使用 Anthropic 服务器端回退返回的实际模型来计算费用，而非仍沿用请求中的模型名。 | https://github.com/earendil-works/pi/pull/8319 |
| #8307 | **feat(coding-agent): enable experimental cache‑friendly compaction** – 让压缩请求复用当前会话缓存，降低重新编码开销。 | https://github.com/earendil-works/pi/pull/8307 |
| #8316 | **feat(coding-agent): add agent_recovery_exhausted extension hook** – 在原生重试和溢出压缩耗尽后触发，允许插件决定是否重试或切换模型。 | https://github.com/earendil-works/pi/pull/8316 |
| #8314 | **fix(ai): round‑trip Bedrock redacted reasoning** – 正确传递 Bedrock Converse 的 `reasoningContent.redactedContent`，确保加密推理在跨轮中不丢失。 | https://github.com/earendil-works/pi/pull/8314 |
| #8303 | **fix(coding-agent): collapse tool result images until output is expanded** – 折叠状态下不再挂载图片子组件，仅在展开时渲染，解决图像在折叠视图中占位过高的问题。 | https://github.com/earendil-works/pi/pull/8303 |

---

### 5. 功能需求趋势  

| 趋势 | 体现的 Issue / PR | 说明 |
|------|-------------------|------|
| **可定制化与扩展性** | #8326（禁用命令），#8292（预持久化钩子），#8317/#8316（恢复耗尽钩子），#8314（Bedrock 推理透传） | 社区希望通过钩子和配置项更细粒度地控制行为，以适配插件和企业策略。 |
| **多提供程序兼容性** | #8320/#8324（OpenAI‑compatible 登录），#8319/#8308（Anthropic 回退费用），#8302/#6216（Amazon Bedrock Mantle） | 对自定义端点、备用模型及新兴云服务的支持成为热点。 |
| **性能与稳定性** | #8330（流看门狗），#8327（长 Markdown 渲染让出），#8307（缓存友好压缩），#8254（Copilot 速率限制） | 减少 UI 卡死、避免无限等待、降低重复工作、防止外部服务触发的限流。 |
| **Windows 专用体验** | #8282（改用 fd），#8299（npm 安装慢），#8286（远程 Ollama 网络问题） | 开发者呼吁在 Windows 上默认使用更高效的工具并解决启动慢、网络路径依赖的问题。 |
| **国际化与可用性** | #8296（语言切换 UI） | 虽然 i18n 基础已有，但缺少运行时切换入口，需求明显。 |

---

### 6. 开发者关注点（痛点 & 高频需求）  

1. **外部服务限流与超时** – Copilot 登录、远程 Ollama 请求、OpenAI 客户端默认超时均导致失败或被误杀。需要统一的重试/退避机制和可配置的 timeout。  
2. **UI 响应性** – 长文本、大型 Markdown、长时间运行的 agent 循环容易造成 UI 卡死或闪烁；开发者期望增量渲染、事件循环让出以及更智能的滚动恢复。  
3. **上下文管理与压缩** – 自动压缩阈值仅在运行边界检查，导致长对话未及时压缩；社区呼吁在每轮 prompt 前评估以及实验性的缓存友好压缩。  
4. **会话与进程安全** – 允许多个进程共享同一文件导致分歧；需要文件锁或进程互斥以防止会话 corruption。  
5. **错误恢复与插件介入** – 在原生重试和溢出压缩耗尽后，插件无法介入；新增 `agent_recovery_exhausted` 钩子正是对此需求的响应。  
6. **跨平台一致性** – Windows 特有的 `find` 卡死、语言切换需手动改 settings、远程提供程序网络行为不一致等，都指向更好的平台抽象和默认行为统一。  

---

> **简结**：本周 Pi 社区的活动围绕 **稳定性（防止卡死、限流、超时）**、**可扩展性（钩子、禁用命令、多提供程序支持）** 以及 **平台体验（Windows、国际化、UI 流畅性）** 展开。后续若能在这些方面继续落地改进，将显著提升 Pi 在企业及长时段交互场景中的可用性。  

---  

*所有链接均指向 GitHub 仓库 `earendil-works/pi`。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报 – 2026‑08‑19**

---

### 1. 今日速览  
- **v0.21.11‑nightly** 推出，首次加入 **live‑session registry** 与 `qwen sessions ps` 命令，提升多会话管理体验。  
- **Ollama 兼容性 bug**（#9438）被社区关注，导致工具调用后用户消息被丢失。  
- **多会话协作**（#8718、#9399）与 **自动化测试**（#9194）成为讨论热点，说明社区正向更高并发与可靠性迈进。

---

### 2. 版本发布  
**v0.21.11‑nightly.20260818.259951c53e**  
- 新增 **live‑session registry**，支持 `qwen sessions ps` 查看当前会话。  
- **daemon** 端新增 `skill‑togg` 选项，方便动态开启/关闭技能。  
- 兼容 **Ollama** 的 `role: "user"` 消息缺失问题（已在 #9438 追踪）。  
- 通过 **SWE‑bench** 与 **Terminal‑Bench 2.0** 进行全链路验证，验证通过率 100%。  

---

### 3. 社区热点 Issues（10）  

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| **#9438** | Ollama 后端工具调用丢失用户消息 | P1, 2 评 | 影响所有使用 Ollama 的用户，已被多位开发者报告。 |
| **#656** | API Error 400 “InternalError.Algo.InvalidParameter” | P1, 11 评 | 影响所有交互，已成为高优先级修复。 |
| **#9194** | mutation‑verified 测试缺口 | P3, 11 评 | 影响 CI 可靠性，社区讨论如何改进测试覆盖。 |
| **#8718** | 原生多会话协调 RFC | P2, 10 评 | 讨论多会话协同工作流，已进入实现阶段。 |
| **#8316** | 取消 prompt 时不恢复输入 | P3, 10 评 | 影响用户体验，已提交 PR 解决。 |
| **#7040** | 自动记忆召回可靠性 RFC | P2, 10 评 | 关注记忆召回时机与质量，已进入评审。 |
| **#9276** | 团队成员无法向领导发送普通消息 | P2, 7 评 | 影响多代理协作，已在 PR 中修复。 |
| **#8400** | Windows 下会话自动删除 | P1, 4 评 | 影响桌面版用户，已在 PR 中修复。 |
| **#9296** | Autofix 事件风暴与重复调度 | P1, 5 评 | 影响 CI 资源利用率，已在 PR 中优化。 |
| **#9430** | 命名同伴忽略 `run_in_background` | P3, 3 评 | 影响多代理后台运行，已在 PR 中修复。 |

---

### 4. 重要 PR 进展（10）  

| # | 标题 | 主要功能/修复 | 进度 |
|---|------|--------------|------|
| **#9402** | agent board – 共享工作 | 新增独立 agent 共享工作板 | 已提交，等待审阅 |
| **#9399** | 设计文档：peer session 协作 | 说明跨会话协作流程 | 已完成文档，PR 正在讨论 |
| **#9396** | live‑state session activity watermark | 记录会话活跃水印 | PR 已合并，已上线 |
| **#9393** | web‑shell 采用 Goal v3 控制 | 统一目标管理 | PR 已合并，已发布 |
| **#9423** | image payload eviction isolation | 解决图像缓存冲突 | PR 已合并，已发布 |
| **#8966** | output.format 支持 stream‑json | 兼容 CLI 输出格式 | PR 已合并，已发布 |
| **#9389** | live model list 在 setup wizard | 动态推荐模型 | PR 已合并，已发布 |
| **#9339** | dingtalk forwarded chat 解析 | 解析转发记录 | PR 已合并，已发布 |
| **#9361** | scheduled‑tasks 绑定现有 session | 任务可绑定现有会话 | PR 已合并，已发布 |
| **#9331** | /rewind 与 /compress‑fast 兼容 | 防止压缩后历史丢失 | PR 已合并，已发布 |

---

### 5. 功能需求趋势  
1. **多会话协作** – 通过 #8718、#9399 等讨论，社区正推动多会话间的协同与共享。  
2. **CI/Autofix 效率** – #9194、#9296 等问题表明对自动化测试与修复流程的性能与可靠性需求日益提升。  
3. **工具调用兼容性** – #9438、#9430 等问题凸显对多后端（Ollama、OpenAI）兼容性的关注。  
4. **记忆与上下文管理** – #7040 关注自动记忆召回的时机与质量，暗示对上下文管理的进一步优化需求。  
5. **IDE 与桌面集成** – #8400、#9430 等问题说明桌面版与 IDE 集成的稳定性仍是重点。  

---

### 6. 开发者关注点  
- **错误恢复与日志**：#656、#9438 等错误导致开发者难以定位，亟需更友好的错误信息与日志。  
- **多代理通信**：#9276、#9430 等问题暴露多代理间消息传递的细节缺陷。  
- **资源管理**：#9380、#9296 等讨论表明对内存与调度资源的监控与优化需求。  
- **用户体验**：#8316、#8400 等问题强调输入恢复、会话持久化等细节对用户体验的影响。  

---

**GitHub 参考链接**  
- Release: <https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260818.259951c53e>  
- Issues: #9438, #656, #9194, #8718, #8316, #7040, #9276, #8400, #9296, #9430  
- PRs: #9402, #9399, #9396, #9393, #9423, #8966, #9389, #9339, #9361, #9331  

---

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek‑TUI 社区动态报告（2026‑08‑19）**  

---

### 1. 今日速览  
- 发布 **v0.9.9**，完成 npm wrapper 公开发布并关闭 legacy `deepseek‑tui`；同步更新 TUI 状态栏颜色方案与文档本地化。  
- 社区聚焦 **TUI 架构分解**、**i18n 中文文档**、**可靠发布流水线**，并出现 **header 状态指示器不渲染**、**系统提示丢失** 等紧要 BUG。  

---

### 2. 版本发布  
- **v0.9.9**（2026‑08‑18）  
  - 标记 `deepseek‑tui` 为 **已废弃**，全部发布资产改为小写技术标识 `codewhale`。  
  - 完成 **GitHub、GHCR、Homebrew、CNB、官网、20 个 Cargo crates** 的自动化发布。  
  - npm 发布改为 **受信任发布**（无需维护者手动 2FA 登录），提升发布安全性。  
  - 文档/颜色语法更新，系统提示恢复正常。  
  - 详细链接：<https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.9>

---

### 3. 社区热点 Issues（挑选 10 条）  

| 编号 & 标题 | 关键要点 | 社区关注度 |
|---|---|---|
| **#5316 EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | 全局性 **crate 分解** 项目，囊括所有子‑EPIC 与 FEAT，提供统一追踪入口。 | 7 条评论，社区视为 **结构性改造核心**，正在推进代码基础设施。 |
| **#5337 Web: finish the #4934 dictionary spine — retire every isZh branch and inline { en, zh } module** | 将所有 **isZh** 分支统一迁移至单一字典 spine，消除双语巨量源码。 | 5 条评论，推动 **i18n 本地化**，消除冗余代码。 |
| **#5437 [documentation] TUI: formalize the status‑bar color grammar + surface repo/worktree state** | 规范 **状态栏配色词法**，明确 UI 状态显示规则。 | 4 条评论，明确 UI 设计语言，防止未来风格冲突。 |
| **#5299 release: move npm publication to trusted publishing** | 将 npm 发布从手动 2FA 切至 **受信任 CI**，提升发布可靠性。 | 3 条评论，解决发布瓶颈，已在 v0.9.9 中落地。 |
| **#5508 [enhancement] feat: continuous loop** | 引入 **无限循环** 选项，支持长期 AI 协作而无需手动退出。 | 3 条评论，直击 **工作流自动化** 高需求。 |
| **#5505 [bug] System prompt is dropped after `/new` — model never receives project instructions** | 新会话 `/new` 失去系统提示，产生 **<context_update>** 折叠导致指令缺失。 | 2 条评论，影响 **上下文一致性**，已在 PR #5491 进行修复。 |
| **#5512 [bug] Bug: header status indicator (cw/whale/dots) never renders since 0.9.7** | UI 状态指示器在 0.9.7+ 失效，导致 **header 信息不可见**。 | 1 条评论，已在 PR #5511 中恢复。 |
| **#5497 [fix(tasks)] terminalize stuck durable executions and bound event growth** | 防止 **Durable Task** 因未收到 `turn.completed` 而永久占用资源。 | 1 条评论，提升 **任务可靠性**。 |
| **#5482 [documentation] EPIC(docs): review, partially restructure, and fully localize documentation to Chinese** | 全面 **中文文档** 本地化计划，分层结构化管理。 | 1 条评论，推动 **社区本地化**。 |
| **#5496 ci: bound release‑candidate and artifact workflow jobs** | 为关键 CI 作业添加 **job caps**，防止 runner 持续占用导致发布卡死。 | 0 条评论，已在 CI 配置中生效。 |

---

### 4. 重要 PR 进展（挑选 10 条）  

| PR 编号 | 标题 | 关键改动 | 链接 |
|---|---|---|---|
| **#5511** | feat(tui): show repository context in git chrome | 把 **仓库上下文** 直接写入 TUI 头部，展示 `repo · branch*`、工作树标识等信息。 | <https://github.com/Hmbown/CodeWhale/pull/5511> |
| **#5509** | fix(tui): restore `/title` as an independent terminal window title | 将 `/title` 与 `/rename` 分离，使其能独立修改 **终端标题**。 | <https://github.com/Hmbown/CodeWhale/pull/5509> |
| **#5510** | docs(readme): restore the star history chart | 恢复 **星星增长图表**（使用内部生成的 fan‑out GIF），提升可视化。 | <https://github.com/Hmbown/CodeWhale/pull/5510> |
| **#5506** | feat(tui): add command context adapters and migration gate (FEAT-015) | 引入 **依赖注入 + 迁移门**，为后续命令解耦提供框架。 | <https://github.com/Hmbown/CodeWhale/pull/5506> |
| **#5507** | docs(i18n): complete Tier 1 of Chinese docs localization | 完成 **Tier‑1** 中文文档迁移，组织为 `docs/zh_hans/` 结构。 | <https://github.com/Hmbown/CodeWhale/pull/5507> |
| **#5504** | feat(web): move docs/hooks and docs/troubleshooting onto the dictionary spine | 将 **hooks** 与 **troubleshooting** 页面搬入统一字典 spine，统一多语言管理。 | <https://github.com/Hmbown/CodeWhale/pull/5504> |
| **#5503** | test(web): spawn the deploy preflight script by a decoded path | 修复 **URL.decode** 导致的部署脚本路径冲突，确保跨语言路径可运行。 | <https://github.com/Hmbown/CodeWhale/pr/5503> |
| **#5500** | test(ci): harden release gate concurrency | 引入 **并发安全**（序列化 telemetry_contract、重试锁），防止 CI 卡住。 | <https://github.com/Hmbown/CodeWhale/pr/5500> |
| **#5491** | fix(tui): persist approval outcomes before execution | 将 **批准结果** 持久化至会话日志，保证执行前可恢复状态。 | <https://github.com/Hmbown/CodeWhale/pr/5491> |
| **#5499** | release: v0.9.9 | 正式发布 **v0.9.9**，完成 npm 受信任发布、文档同步、CHANGELOG 更新。 | <https://github.com/Hmbown/CodeWhale/pr/5499> |

---

### 5. 功能需求趋势  

- **TUI 架构重构**：大量议题围绕 **crate 分解**（#5316）和 **状态栏统一规范**（#5437）展开，表明社区希望在 **代码层面实现可维护的模块化**。  
- **多语言与文档本地化**：#5337、#5482、#5507 体现 **中文文档完备** 的迫切需求，社区期望消除语言壁垒。  
- **发布可靠性**：#5299、#5496、#5500 显示对 **CI/CD 自动化、双周期发布安全** 的强化诉求。  
- **工作流增强**：#5508（无限循环）以及 #5497（可终止任务）说明用户需要 **更长期、可中断的执行模型**。  
- **交互细节改进**：如恢复 `/title` 标题独立性（#5509）和 **状态指示器渲染**（#5512）是直接影响日常使用的 UI 细节。  

总体来看，**模块化重构 + 本地化 + 可靠发布 + 长时间协作** 是本轮社区最集中、最迫切的功能需求。

---

### 6. 开发者关注点（痛点与高频需求）  

| 痛点 | 细节 | 社区回应 |
|---|---|---|
| **npm 发布仍需手动 2FA** | 早期发布受维护者安全密钥限制，导致延迟。 | 已通过 #5299 改为受信任 CI 自动发布。 |
| **CI Runner 超时卡死** | 部分 CI 作业未设 timeout，可能卡住数小时。 | #5496 已加 `timeout-minutes` 限制。 |
| **状态指示器失效** | 0.9.7+ 后 TUI 头部状态指示器不渲染。 | PR #5511 已恢复该功能。 |
| **会话 `/new` 丢失系统提示** | 导致模型首句只看到 `<context_update>`，指令缺失。 | #5505 已标记为 bug，并通过 #5491 进行修复。 |
| **Durable Task 死锁** | 持久任务因未收到完成信号而永久占用资源。 | #5497 提出终止机制，正在实现。 |
| **语言文档不全** | 多数文档仍为英文，阻碍中文用户学习。 | #5482/5507 正在推进完整中文本地化。 |

---  

**报告作者**：AI 开发工具技术分析师  
**生成时间**：2026‑08‑19**

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*