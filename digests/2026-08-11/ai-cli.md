# AI CLI 工具社区动态日报 2026-08-11

> 生成时间: 2026-08-11 01:00 UTC | 覆盖工具: 9 个

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

User Safety: safe

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills 社区热点报告

---

### 1. 热门 Skills 排行（按社区关注度）
#### **1. Skill-creator Bug Fixes**
- **功能**: 修复技能创建工具的关键 Bug，包括 Windows 兼容性、评估触发检测（recall=0% 的根本问题）、文件上传流程优化、YAML 特殊字符防护。
- **热点**: 评估循环故障导致技能优化失效（PR #1298, #1099, #1323, #1050），用户报告评估过程完全失效。修复涉及多个核心脚本并行执行优化。
- **状态**: 评论活跃中 (#1298 status: OPEN, #1099/1050 更新至 2026-06)，部分修复部分仍需迭代。

#### **2. typographic质控技能 (Document-Typography)**
- **功能**: 防止AI生成文档中的孤单字段、寡孤段落和编号错位问题，适用于所有文档生成场景。
- **热点**: 用户普遍反馈文档美观差，本技能直接解决代码层潜在缺陷（如辅助文档规范化）。
- **状态**: OPEN（PR #514），无评论但需求频繁反复出现。

#### **3. ODT文档技能 (pr#486)**
- **功能**: 支持多文档操作（创建/填充/转换 ODT/ODS），触发条件包括OpenDocument关键词。
- **热点**: 与PDF技能生态互补，集成需要标准化文档格式支持。
- **状态**: OPEN（已经合并，已启用功能）。

#### **4. 前端设计技能重构 (pr#210)**
- **功能**: 内容重构以提升Claire行为引导能力，明确单会话可执行逻辑。
- **热点**: 用户反馈前端设计指令模糊，需技术化说明提升可操作性。
- **状态**: MERGED（已归档）。

#### **5. 文档格式连贯性修复 (pr#538/541)**
- **功能**: 修复PDF/DOCX技能文档引用的大小写问题，保持文件名统一性。
- **热点**: 技术细节缺陷导致文档读取错误，影响技术文档生产链。
- **状态**: MERGED（已合并）。

### 2. 社区需求趋势
#### **A. 文档生产与组织能力**
- **浓烈需求**: 代码审查（1329 Proposal）、测试生成（723 Testing Patterns）、技术文档规范（12 Docx Whitespaces）。
- **理由**: 工程极客人群要求进阶工具链集成，特别是敏捷开发的文档→代码闭环。

#### **B. 安全质量保障机制**
- **突围需求**: 技能质量分析（PR#83）、数据泄露风险（Issue#492 Security Concerns）。
- **关键词**: 技术质量评估、边界控制、上下文防护。

#### **C. 工程师直接参与度**
- **反向需求**: 技能生态开放性（PR#16 Enable MCPs）、自定义能力的分享流程（Issue#228）。
- **表现**: 用户希望技能触发逻辑公开化、社区贡献擂台化（如MCPs集成）。

---

### 3. 高潜力待合并 Skills
#### **Skill-Audit系统**
- **申请者**: PR#1367（Self-Audit Skill）
- **亮点**: 多维度技术镜像（机械验证+四维推理审计），覆盖任意技术堆栈。
- **行动点**: 已支持四维质量门控（mechanical+vdc+udc）分层验证，Actor适配性需验证。

#### **Plan Hygiene Lifecycle管理**
- **申请者**: PR#1479（Plan File Hygiene）
- **突围点**: 突破任务文件积压问题（符合Issue#1417 Framing），生命周期自动化管理。
- **行动点**: 需Claire生产流程升级支持，立项可能性高。

#### **色彩专家技能**
- **申请者**: PR#1302（Color-Expert）
- **应用场景**: 跨行知识映射（设计/工程/生物统计需求），包含色彩空间选择逻辑。
- **行动点**: 已发布补充线程，触发条件初步确定。

---

### 4. Skills 生态洞察
**重点诉求**: 技能 = **交互式技术模型化工具**  
Claire 告世界转变趋势：从简单指令扩展到**核心算法缺口补全工具链**，开发者需具象化技术缺失并将其提炼为技能版本。市场信号显示现有技能生态现任目标阶段是“盲掉肌肉记忆的回溯工具将力量转化为技能”模式，而解弦在能力武装端则是“**自动AI运行在钓标记系统和无扎碎的根本逻辑齐全**”。


---

**Claude Code 社区动态日报（2026‑08‑11）**  

---

### 1. 今日速览  
- 官方在 24 小时内发布 **v2.1.227**，针对会话启动时的登录 token 失效问题修复了 feature‑flag 读取逻辑。  
- 社区热议 **Issue #84352**（CVP‑approved 组织被再次阻塞）以及 **#28791**（会话历史同步）的讨论升温，评论量均在 30+。  

---

### 2. 版本发布  
- **v2.1.227**（2026‑08‑11）  
  - **修复**：在会话以已过期登录 token 开启时，防止 feature‑flag 在未订阅 Max 计划的情况下错误提示启用使用信用以使用 Fable。  
  - **修复**：解决 `claude-code-action` 下的每条 Bash 命令均因 `allowed_no` 错误而失败的问题。  

---

### 3. 社区热点 Issues（选取 10 个最受关注）  

| # | 标题 | 重要性 | 社区反应 | 链接 |
|---|------|--------|----------|------|
| **84352** | [BUG] CVP‑approved Claude.ai organization still receives cyber safeguard blocks in Claude Code | 高 | 评论 32，👍 1；描述 Verification Portal 显示“Under review”却仍触发块 | [Issue #84352](https://github.com/anthropics/claude-code/issues/84352) |
| **28791** | [enhancement] Sync conversation history between CLI and Claude Code desktop app | 极高 | 评论 31，👍 120；需求明确，社区期待统一的历史记录 | [Issue #28791](https://github.com/anthropics/claude-code/issues/28791) |
| **15881** | [Feature Request] Seamless session sharing between Claude Code and Claude Desktop | 高 | 评论 9，👍 60；提出跨平台会话共享方案 | [Issue #15881](https://github.com/anthropics/claude-code/issues/15881) |
| **80749** | [Closed] Fable 5 gated behind “requires usage credits” in interactive TUI on Max plan | 中 | 评论 8，👍 1；已被标记为 **Correction**，重新分析后确认非回归 | [Issue #80749](https://github.com/anthropics/claude-code/issues/80749) |
| **67585** | [BUG] Cowork stale‑cache corruption reproduced under Claude Fable 5 | 中 | 评论 7，👍 1；提供了完整的复现诊断与补丁思路 | [Issue #67585](https://github.com/anthropics/claude-code/issues/67585) |
| **84627** | [BUG] claude‑in‑chrome file_upload fails: paths: expected array, received undefined | 中 | 评论 7，👍 1；文件上传工具在多平台均告失败 | [Issue #84627](https://github.com/anthropics/claude-code/issues/84627) |
| **83744** | [BUG] Claude Desktop 1.24012.11.0 (Windows) — GPU process crash (exitCode 101457950) kills the whole app | 低 | 评论 6，👍 0；桌面版崩溃导致完整进程退出 | [Issue #83744](https://github.com/anthropics/claude-code/issues/83744) |
| **41984** | [BUG] Frequent premature compaction + infinite loop + prompt freezing with Opus 4.6 on 1M context | 低 | 评论 5，👍 3；涉及上下文窗口过度压缩的性能问题 | [Issue #41984](https://github.com/anthropics/claude-code/issues/41984) |
| **74636** | [BUG] Spoofed/false “Note: file was modified... don't tell the user” system‑reminder appears after Claude's own Write/Edit tool calls | 低 | 评论 5，👍 0；系统提醒误触发导致混淆 | [Issue #74636](https://github.com/anthropics/claude-code/issues/74636) |
| **85657** | [BUG] --resume lists sessionKind:bg sessions that --continue refuses to resume, with a title identical to their parent | 低 | 评论 1，👍 0；恢复命令误列出不可继续的会话 | [Issue #85657](https://github.com/anthropics/claude-code/issues/85657) |

---

### 4. 重要 PR 进展（近期合并或即将合并）  

| PR | 标题 | 核心内容 | 链接 |
|----|------|----------|------|
| **#34951** | feat: add automatic GitHub/GitLab detection and GitLab support for /code-review | 自动识别仓库类型，统一 `/code-review` 输出，支持自托管 GitLab | [PR #34951](https://github.com/anthropics/claude-code/pull/34951) |
| **#85464** | plugins: add entroly-context for budget‑aware context management | 引入社区插件 **entroly‑context**，实现预算感知的上下文裁剪 | [PR #85464](https://github.com/anthropics/claude-code/pull/85464) |
| **#9262** | docs: enforce task tool and model metadata | 文档强制要求在提交时声明 `task` 工具和 `model` 参数，提升使用规范性 | [PR #9262](https://github.com/anthropics/claude-code/pull/9262) |

> 目前只在最近 24 小时内打开或合并的 PR 中有 3 条符合上述标签，均已列出核心变更。

---

### 5. 功能需求趋势  

- **会话统一管理**：多次出现的需求包括 **跨 CLI 与 Desktop 的会话历史同步**、**无缝会话共享**、**会话切换禁用** 等，indicates a strong desire for a coherent multi‑modal experience.  
- **预算感知的上下文**：如 **entroly‑context** 插件所示，社区关注如何在大规模代码库中**自动控制上下文窗口**，避免盲目填充导致的性能问题。  
- **IDE/编辑器集成**：对 **GitHub/GitLab 检测**、**/code-review** 命令的自动化支持表明开发者希望将 Claude Code 更深度嵌入现有工作流。  
- **性能与稳定性**：关于 **原子写入**、**sandbox 网络泄漏**、**崩溃/挂起** 等 Issue 高频出现，说明在 Windows/macOS/Linux 多平台下，**资源泄漏** 与 **CPU 占用** 仍是关键痛点。  

---

### 6. 开发者关注点  

- **痛点**：  
  1. **登录 token 失效导致功能错误**（已在 v2.1.227 修复）。  
  2. **上下文窗口过度压缩** 与 **频繁的 premature compaction**，导致交互卡顿。  
  3. **跨平台崩溃**（Windows GPU 进程、macOS 全屏 TUI）以及 **文件上传/文件路径错误**，影响可用性。  
- **高频需求**：  
  - **统一的会话历史**（#28791、#15881）。  
  - **预算感知的上下文管理**（#85464、#34951）。  
  - **更友好的错误提示与修复**（如 #80749 的误报、#85668 的 autocompact 循环）。  

---

> **结论**：本报告聚焦于本日（2026‑08‑11）的关键发布、热点 Issue 与即将合并的 PR，展示了社区在会话管理、预算感知的上下文、以及多平台稳定性方面的核心关注。技术团队可依据上述趋势制定后续的功能路线图与 bug 修复优先级。  

---  

*所有链接均指向公开的 GitHub Issue 或 Pull Request，便于直接查阅细节。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报 (2026‑08‑11)**  

---  

### 1. 今日速览  
- Windows 11 Pro 用户在使用最新 Codex 桌面版时出现频繁卡顿/冻结，社区关注度最高，已累计 93 条评论。  
- 多个窗口/扩展/远程会话的启动失败、资源加载错误以及上下文重用 bug 陆续被反馈，影响了日常工作流的稳定性。  

---  

### 2. 版本发布  
> 本报告期间（过去 24 h）没有新增官方发布版本。  
>（发布历史仍保留在 *Releases* 页面的 `rust‑v0.148.0‑alpha.6`、`rust‑v0.147.0‑alpha.6.6` 等开发分支中。）  

---  

### 3. 社区热点 Issues（选取 10 个最受关注的）  

| # | 标题（简要） | 评论数 | 关键原因 | 链接 |
|---|---|---|---|---|
| **20214** | **Windows 11 桌面版频繁 freeze/stutter** | **93** | 性能回退，资源充足仍卡顿，用户普遍认为是渲染/后台任务调度问题。 | <https://github.com/openai/codex/issues/20214> |
| **37458** | **Extension fails to start: “couldn't load its resources”** | 31 | VS Code 插件加载错误，导致面板无法使用，影响日常代码生成。 | <https://github.com/openai/codex/issues/37458> |
| **28919** | **Missing “\control other devices” tab in Settings > Connections** | 28 | 关键连接功能被隐藏，阻碍远程设备控制。 | <https://github.com/openai/codex/issues/28919> |
| **37013** | **Windows Computer Use reuses stale node_repl exec context** | 18 | 同一 exec 环境在后续 JS 调用中复用导致状态污染。 | <https://github.com/openai/codex/issues/37013> |
| **37383** | **Computer Use on Windows fails during app/window discovery (0x80070003)** | 13 | 窗口/进程发现错误，常见于新系统更新后。 | <https://github.com/openai/codex/issues/37383> |
| **20930** | **App notification does not work with remote connections** | 10 | 关键的完成提醒功能在跨平台/remote 场景失效。 | <https://github.com/openai/codex/issues/20930> |
| **35613** | **Code mode reports completion with live nested exec but no visible handles** | 6 | 对模型可见的执行句柄管理不完整，导致调试信息缺失。 | <https://github.com/openai/codex/issues/35613> |
| **37403** | **[macOS][regression] Desktop cannot resume Remote Control / CLI thread after latest update** | 5 | 大版本升级后已有工作流被中断。 | <https://github.com/openai/codex/issues/37403> |
| **34866** | **gpt‑5.6‑sol reports “Script completed” while nested shell still running** | 5 | 子进程结束信号提前，导致后续任务误判成功。 | <https://github.com/openai/codex/issues/34866> |
| **35090** | **Codex Desktop: active thread appears at bottom despite newest recency after pin/unpin** | 5 | UI 排序 bug，导致重要线程视觉上被埋在底部。 | <https://github.com/openai/codex/issues/35090> |

**为什么这些 Issue 重要？**  
- 多数均涉及 **Windows 平台** 的核心功能（性能、连接、窗口控制），是最活跃的用户群体。  
- 多条 Issue 的 **评论数** 均超过 10，社区讨论活跃度高，表明开发者对这些稳定性和功能缺口的关注度远高于其他新特性。  

---  

### 4. 重要 PR 进展（本轮 PR 中评论/关注度最高的 10 条）  

| PR | 状态 | 关键改动 | 链接 |
|----|------|----------|------|
| **#37906** | Closed | **让 gRPC 代码模式通知采用 “fire‑and‑forget”**，避免因未确认导致的完成延迟。 | <https://github.com/openai/codex/pull/37906> |
| **#37902** | Closed | **将 `view_image` 处理延迟到历史记录插入**，统一化图像流的解码路径。 | <https://github.com/openai/codex/pull/37902> |
| **#31817** | Open (automated) | **自动更新 `models.json`**，保持模型列表与最新发布同步。 | <https://github.com/openai/codex/pull/31817> |
| **#37901** | Closed | **让提交操作变为仅移动**（move‑only），简化提交流水线并降低复制开销。 | <https://github.com/openai/codex/pull/37901> |
| **#37898** | Closed | **为线程段节点添加外观元数据（icon、color）**，支持更细粒度的 UI 主题化。 | <https://github.com/openai/codex/pull/37898> |
| **#37896** | Closed | **新增 Windows SDK 与 MSVC runtime 仓库，支持全平台的胶水包** | <https://github.com/openai/codex/pull/37896> |
| **#37892** | Closed | **在返回 `view_image` 前对图像合法性进行校验**，防止无效数据泄漏。 | <https://github.com/openai/codex/pull/37892> |
| **#37891** | Closed | **为 `app/read` 接口提供可选的 `threadId`，实现线程感知的配置加载** | <https://github.com/openai/codex/pull/37891> |
| **#37889** | Closed | **在 Windows 上忽略 Unix‑socket 代理设置**，避免不必要的报错**. | <https://github.com/openai/codex/pull/37889> |
| **#37886** | Closed | **扩展包发现逻辑并暴露已安装包的版本号**，便于插件管理**。 | <https://github.com/openai/codex/pull/37886> |

**PR 共同点**：大多数是 **提升可靠性、降低副作用**（fire‑and‑forget、move‑only、校验）或**增强可配置性**（外观、线程感知），对整体用户体验有直接正面影响。  

---  

### 5. 功能需求趋势  

1. **跨平台一致性**  
   - 多个 Issue（尤其是 #28919、#37013、#37383）反映 Windows 环境在远程控制、窗口发现和 exec 上下文方面出现功能退化。社区呼吁 **统一 Windows sandbox 与跨平台资源加载行为**。  

2. **工具/扩展可靠性**  
   - #37458、#20930、#37880、#37873 都指向 **VS Code 插件、远程连接、状态同步** 的不可靠性，开发者希望 **更严格的异常捕获与回滚机制**。  

3. **性能与卡顿**  
   - #20214（高频卡顿）与 #35606（CPU 100%）展示 **前端渲染/后台任务调度** 是当前最突出的性能瓶颈，需 **优化渲染管线或引入更细粒度的资源配额**。  

4. **上下文与会话管理**  
   - #37013、#34866、#35613、#37880 关注 **执行上下文的隔离与可见性**，社区希望 **更明确的会话标识、线程标签与状态持久化**，以避免“已完成却仍在运行”的误判。  

5. **功能可配置化**  
   - #33362（hover‑trigger sidebar）、#33284（约束 Multi‑Agent V2 前置检查）等请求表明 **用户对 UI 行为和代理机制的细粒度掌控** 需求日益增长，尤其是 **可通过配置关闭或延迟的开关**。  

---  

### 6. 开发者关注点  

- **卡顿/冻结**：是最常被提及的痛点，尤其是在 Windows 11 Pro 上，用户认为系统资源足够却仍然出现 UI 锁死。  
- **插件/扩展失效**：资源加载错误与启动失败导致工作流中断，社区希望 **更详细的错误日志与快速恢复机制**。  
- **会话/上下文同步**：在远程控制、Voice Interactions 与多 Agent 场景中，**线程状态的可见性与一致性**成为核心需求。  
- **可配置性**：如侧边栏显示方式、目标 token 预算、UI 动画触发等，都在请求 **通过配置文件或 UI 选项可控**，以适配不同工作流。  

---  

> **结论**：本报告聚焦于 Windows 平台的性能异常与关键功能缺失，社区对插件稳定性、会话同步以及可配置化 UI 的需求尤为突出。后续的重点迭代应围绕 **提升渲染/执行可靠性、加强错误捕获、提供细粒度配置** 来回应开发者最迫切的诉求。  

---  

*以上信息均基于 GitHub `openai/codex` 最近 24 小时内的 Issue 与 Pull Request 数据。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报（2026‑08‑11）**  

---

### 今日速览
- 今日仅发布了夜间版本 **v0.56.0-nightly.20260810.gcf22ac7e8**，主要是版本号自动递增。  
- 社区活跃度高，过去 24 小时内有 50 条 Issue 更新，其中多个 **P1** 级别的 agent 挂起、子智能体恢复以及内存系统问题引发广泛讨论。  
- 在 PR 方面，安全修复（SSRF、MCP OAuth）、IDE 连接稳定性以及评估框架的增强成为今日的主要改动。

---

### 版本发布
| 版本 | 更新说明 | 链接 |
|------|----------|------|
| v0.56.0-nightly.20260810.gcf22ac7e8 | 自动版本号递增（夜间构建），无功能变更。 | [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260810.gcf22ac7e8) |

---

### 社区热点 Issues（挑选 10 条）

| # | 标题 & 链接 | 为什么重要 | 社区反应（评论/点赞） |
|---|--------------|------------|----------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption | 子智能体在达到最大轮次时仍报告成功，掩盖了实际中断，影响任务可靠性。 | 12 评论 / 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | 通用代理在执行简单操作（如文件夹创建）时无限挂起，严重影响使用体验。 | 8 评论 / 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model's bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing | 充分利用模型原生 Bash 能力，提升代码库探索效率，同时保证安全。 | 8 评论 / 1 👍 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | 为行为评测添加组件级粒度，有助于定位回归问题，提升测试可靠性。 | 7 评论 / 0 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST‑aware file reads, search, and mapping | 探索 AST 感知的文件操作，可减少 token 浪费并提升代码导航精度。 | 7 评论 / 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough | 模型主动调用自定义技能/子智能体的意愿不足，限制了功能扩展。 | 6 评论 / 0 👍 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low‑signal sessions indefinitely | 自动记忆对低信号会话无限重试，导致资源浪费和日志噪声。 | 5 评论 / 0 👍 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" after command completes | 简单 shell 命令执行后仍显示“等待输入”，造成假死感。 | 4 评论 / 3 👍 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser_agent resilience: Automatic session takeover and lock recovery | 浏览器子智能体在遇到锁定配置文件时应能自动恢复，提升可用性。 | 4 评论 / 0 👍 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | ~/.gemini/agents/filename.md is not recognized as an agent if filename.md is a symlink | 符号链接形式的代理未被识别，限制了自定义代理的灵活部署。 | 4 评论 / 0 👍 |

---

### 重要 PR 进展（挑选 10 条）

| # | 标题 & 链接 | 主要功能或修复 |
|---|--------------|----------------|
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | fix: resolve SSRF vulnerability in web-fetch.ts by using async DNS resolution | 修复通过域名绕过内部 IP 检查的 SSRF 风险，提升网络安全。 |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | fix(core): refresh MCP OAuth tokens with the stored client ID | 修复 MCP OAuth 刷新时丢失客户端 ID，防止频繁重新鉴权。 |
| [#28764](https://github.com/google-gemini/gemini-cli/pull/28764) | fix(vscode-ide-companion): track all activate() Disposables in context.subscriptions | 确保 IDE 伴侣插件的所有资源正确释放，避免内存泄漏。 |
| [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) | fix(core): resolve swallowed directory mismatch in IDE connections | 解决在 Cider/VS Code Fork 等虚拟目录下 IDE 连接失败的问题。 |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | fix(core): dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows | 使 Cloud Workstations 中的 OAuth 重定向 URI 随环境动态解析，提升兼容性。 |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | feat(evals): add tool call formatter and integrate failure summaries | 在行为评测失败时自动输出工具调用时间线，便于定位问题。 |
| [#28344](https://github.com/google-gemini/gemini-cli/pull/28344) | Feat/eval validate | 新增 `eval:validate` 命令，对评测源文件进行静态检查，适用于 CI 门禁。 |
| [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) | fix(core,cli): resolve false model capacity exhaustion and fix core quota lookup model mapping | 纠正错误的模型容量耗尽提示并修正配额查找映射，减少误报。 |
| [#28734](https://github.com/google-gemini/gemini-cli/pull/28734) | fix(core): handle EACCES in resolveToRealPath to prevent sandbox crash | 在 macOS Seatbelt 沙盒下捕获 EACCES，防因权限错误导致 CLI 崩溃。 |
| [#28624](https://github.com/google-gemini/gemini-cli/pull/28624) | fix(core): prevent boolean thought parts leaking as [Thought: true] text | 防止内部布尔思ought 被泄漏为可见文本，保持输出整洁。 |

---

### 功能需求趋势
从本日 Issue 中可提炼出以下社区关注方向：

1. **子智能体与技能的自动化使用**（#21968、#22323） – 期望模型能更主动地调用自定义 skill/sub‑agent。  
2. **内存与会话管理的健壮性**（#26522、#26525、#26523） – 减少低信号会话的无限重试、改进脱敏与日志。  
3. **代码探索工具的精细化**（AST‑aware 读取/搜索、零依赖 OS 沙盒） – 提升 token 效率与导航准确度（#19873、#22745）。  
4. **浏览器及 IDE 子智能体的恢复能力**（#22232、#20079、#28688、#28729） – 自动处理锁定、符号链接及虚拟目录场景。  
5. **安全与可靠性基础设施**（SSRF 防御、OAuth 刷新、沙盒异常处理） – 确保在多种环境下不因外部服务失效而崩溃。  

---

### 开发者关注点（痛点与高频需求）
- **Agent 挂起/无响应**：通用代理在简单任务上无限等待（#21409）以及 shell 命令“假等待输入”（#25166）是最常报告的卡死场景。  
- **子智能体上下文丢失**：子智能体在达到最大轮次后仍报告成功（#22323）以及 bug 报告缺少子智能体上下文（#21763）导致排查困难。  
- **记忆系统噪声**：Auto Memory 对低信号会话重试、脱敏不及时以及重复记录（#26522、#26525）影响日志可读性和存储效率。  
- **环境适配性**：在 Cloud Workstations、macOS 沙盒、符号链接代理以及虚拟目录下的连接或权限问题频繁出现（#28688、#28734、#20079、#28729）。  
- **安全合规**：需要更严格的输入验证（SSRF）以及凭证刷新机制（#28557、#28481），以防止潜在的供应链攻击。  

> **总结**：社区正集中力量提升 agent 的自主可靠性、强化内存与会话管理、拓展 AST 感知的代码工具，并在此基础上补足安全、环境适配以及 IDE/浏览器子智能体的稳定性。后续若能在这些方向上交付可测试的改进，将大幅降低用户遇到的挂起与误报问题，提升 Gemini CLI 的生产力感。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-08-11

---

## 1. 今日速览

- **发布 v1.0.79**：重点完善企业级策略控制（`allow-auto-only`、沙箱代理强制配置）并修复沙箱设置存储路径可见性问题。  
- **社区高频痛点集中在企业策略误拦截、Windows 原生终端渲染回归、会话持久化上限导致的数据丢失、MCP 连接脆弱性以及模型可用性不一致**。  
- **无新增 PR 合入**，说明核心团队当前处于“修复稳定/策略落地”阶段，而非新特性开发期。

---

## 2. 版本发布

### v1.0.79 (2026-08-10)
| 变更类型 | 说明 |
|----------|------|
| **Enterprise Policy** | 新增 `allow-auto-only` 策略支持：允许 `/allow-all auto` 生效，同时保持完整 `allow-all` 被阻断，满足合规审计需求。 |
| **Sandbox Hardening** | 沙箱配置对话框现在直接显示 `settings.json` 中的存储路径，便于运维审计；企业托管策略可强制指定代理 URL 且凭证不落盘。 |
| **DX 改进** | `/sandbox` 交互式配置流程更透明，减少“配置生效但找不到文件”的困惑。 |

> 🔗 [Release v1.0.79](https://github.com/github/copilot-cli/releases/tag/v1.0.79)

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 关键信息 | 为什么重要 | 社区热度 |
|---|------|----------|------------|----------|
| [#1595](https://github.com/github/copilot-cli/issues/1595) | **企业策略间歇性拦截 `/models`** | Enterprise 账号显示 40% 额度剩余，但 `/models` 报 `access denied by Copilot policy` | **阻断企业用户核心工作流**；持续 6 个月未根治，29 条评论、11 👍 | ⭐⭐⭐⭐⭐ |
| [#4095](https://github.com/github/copilot-cli/issues/4095) | **Windows 插件更新“Access is denied”** | VS Code 运行时持有 `installed-plugins` 句柄，导致 `copilot plugin update` 失败 | **Windows 开发者无法更新插件**；13 👍 显示广泛影响 | ⭐⭐⭐⭐ |
| [#2904](https://github.com/github/copilot-cli/issues/2904) | **Custom Agent YAML 缺失 `reasoning_effort` 支持** | 仅能全局设置 `--effort`，无法按 Agent 粒度控制推理强度 | **Agent 编排灵活性严重不足**；19 👍 为全仓库第二高 | ⭐⭐⭐⭐ |
| [#4222](https://github.com/github/copilot-cli/issues/4222) | **Windows 原生终端 React/Ink 无限渲染循环复发** | v1.0.72+ 回归 #2802：主面板冻结、输出吞没、需 `/resume` 恢复 | **原生 Windows 体验崩坏**；回归标记为高优先级 | ⭐⭐⭐⭐ |
| [#4325](https://github.com/github/copilot-cli/issues/4325) | **`events.jsonl` 超 V8 最大字符串长度导致会话永久不可载入** | 文件完好、DB 完好，但 CLI 无法恢复，且无修复工具 | **长会话数据零成本丢失**，无恢复路径 | ⭐⭐⭐⭐ |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | **全部 Claude 模型在 CLI 中被禁用** | 个人 Enterprise 账号，设置页显示启用，CLI 报 `This model is disabled` | **模型可用性不一致**，疑似策略同步延迟或缓存 Bug | ⭐⭐⭐ |
| [#4390](https://github.com/github/copilot-cli/issues/4390) | **组织启用的模型在目录中缺失** | Claude Sonnet 5/Opus 5、Kimi K3 组织已启用但 CLI 不可见 | **模型分发管道断裂**，影响多模型评估 | ⭐⭐⭐ |
| [#4416](https://github.com/github/copilot-cli/issues/4416) | **并行 explore 子代理因单模型 429 全军覆没** | 默认全部落在 `claude-haiku-4.5`，无退避、无自动切模型 | **自动化编排在高并发下不可用**，缺乏熔断机制 | ⭐⭐⭐ |
| [#4421](https://github.com/github/copilot-cli/issues/4421) | **MCP `initialize` 硬编码 60s 超时、无重试、失败永不重生** | npx 启动的 stdio 服务器 ~29% 会话失败且不可恢复 | **MCP 生态可靠性底板薄弱**，阻碍工具链落地 | ⭐⭐⭐ |
| [#4419](https://github.com/github/copilot-cli/issues/4419) | **托管设置过渡期“拒绝一切”策略误杀用户 MCP** | 解析托管策略时安装 `[[]]` 空白允许列表，窗口内注册的用户服务器被永久拒绝 | **企业托管与用户自配并存场景下的静默破坏** | ⭐⭐⭐ |

> 💡 **筛选逻辑**：优先覆盖「企业级阻断」「数据不可逆丢失」「回归 Bug」「高 👍/评论」「跨平台一致性」五大维度。

---

## 4. 重要 PR 进展

> **过去 24 小时无 PR 合入或更新**。  
> 当前主分支处于「冻结修复期」，建议关注后续针对上述 Top 10 Issue 的修复分支（通常以 `fix/` 或 `hotfix/` 前缀出现）。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 |
|----------|------------|----------|
| **企业策略精细化与一致性** | #1595, #4390, #4419, #4422 | 策略生效实时性、CLI 与 Web 设置同步、过渡期不误伤用户配置 |
| **模型选择的解耦与可观测** | #2904, #3954, #4345, #4416 | Agent 级 `reasoning_effort`、`explore` 等工具不再硬编码模型、速率限制自动熔断切模型 |
| **会话持久化的工程化上限突破** | #4325, #4424 | 突破 V8 字符串/5 MB CAPI 限制、提供 `/compact` 兜底恢复、增量快照机制 |
| **MCP/工具链生产级可靠性** | #3257, #4421, #4420 | 连接池保活、握手超时可配/重试、并行工具调用请求-响应关联 ID |
| **Windows 原生体验达标** | #4095, #4222, #4426 | 文件锁共存、Ink 渲染稳定、路径引号自动剥离 |
| **Prompt Caching 等成本优化原生化** | #3808 | Claude Sonnet 系统提示缓存、Token 成本可视化 |

---

## 6. 开发者关注点（痛点与高频诉求）

1. **“策略黑盒”焦虑** — Enterprise 用户无法在 CLI 侧自查为何被拦截，缺乏 `copilot policy diagnose` 类诊断命令。  
2. **“会话易碎”恐惧** — 长上下文会话一旦触及底层上限即不可逆损坏，缺乏官方修复/导出工具。  
3. **Windows 二等公民感** — 插件更新锁冲突、终端渲染回归、路径引号处理，均为 Windows 特有且高频。  
4. **模型路由不可控** — `explore`、`task` 等内置工具硬编码模型，自定义端点/模型被忽略，破坏 BYOM（Bring Your Own Model）承诺。  
5. **MCP 生态脆弱** — 握手超时固定、空闲连接复用失败、并发响应乱序，导致“工具调用不可信”。  
6. **可观测性缺失** — 无 HUD/仪表盘查看当前上下文、分支、模型、Token 消耗（社区已自建 [copilot-hud](https://github.com/griches/copilot-hud)）。

---

> **下一期关注点**：v1.0.80 是否包含针对 #4222/#4325/#4421 的热修复；Enterprise 策略同步延迟的根因复盘；`/compact` 能否突破 5 MB 限制。  
> **数据来源**：`github.com/github/copilot-cli` （Releases / Issues 更新于 2026-08-10~11）

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-08-11

---

## 1. 今日速览
- **无新版本发布**：过去 24 小时内无 Release 产出。
- **社区核心聚焦「长期记忆」能力建设**：唯一活跃的高热度 Issue **#1283** 持续讨论跨会话的 Memory System 设计，涉及自动/手动记忆机制、上下文压缩策略及隐私控制，社区呼声极高（31 条评论），是当前功能迭代的核心方向。
- **PR 队列静默**：过去 24 小时无 PR 更新，开发重心可能集中在 Issue 设计阶段或内部开发分支。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues
> 过去 24 小时仅有 1 条 Issue 更新，但该 Issue 为社区高呼声长期诉求，已成为功能规划核心。

| # | Issue | 核心诉求 | 重要性评级 | 社区反应 & 关键进展 |
|---|-------|----------|------------|---------------------|
| 1 | **[#1283] Feature Request: Memory System - Persistent context across sessions** | 实现跨会话持久化 Memory System：<br>• **自动记忆**：AI 自动提取项目模式、代码风格、常用命令<br>• **手动记忆**：用户通过配置/指令显式注入偏好<br>• **上下文管理**：记忆检索、过期清理、Token 预算控制<br>• **隐私隔离**：项目级/全局级作用域分离 | ⭐⭐⭐⭐⭐ **战略级** | • **31 条深度讨论**，参与者含核心贡献者<br>• 关键共识：采用 **分层存储**（向量库+结构化 KV）+ **RAG 检索** 方案<br>• 争议点：自动记忆的「幻觉污染」风险、跨项目记忆冲突解决、本地加密存储标准<br>• **关联设计文档**：`docs/rfc/memory-system.md` (WIP)<br>🔗 [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1283) |

> **注**：因数据源限制，过去 24 小时仅此 1 条 Issue 更新。历史高频 Issue（如 #1102 IDE 扩展、#987 多模型路由、#845 性能剖析）近期无新动态。

---

## 4. 重要 PR 进展
> 过去 24 小时 **无 PR 创建或更新**。

**推测**：Memory System (#1283) 仍处于 RFC/设计评审阶段，核心实现 PR 可能在内部仓库或 Feature Branch 开发中，尚未对外提交。

---

## 5. 功能需求趋势洞察
基于当前唯一热点 Issue 及历史积累，社区核心诉求聚焦三大方向：

| 趋势方向 | 代表性诉求 | 成熟度 | 备注 |
|----------|------------|--------|------|
| **🧠 长期记忆与上下文工程** | 跨会话状态保持、项目知识沉淀、个性化偏好学习 | **设计阶段** (#1283) | 当前 **绝对优先级**，解决「每次对话从零开始」痛点 |
| **🔌 IDE/编辑器深度集成** | VS Code/JetBrains 插件、内联补全、Diff 视图、诊断面板 | **规划中** (#1102 等) | 次于 Memory System，属「生态补全」类需求 |
| **⚙️ 多模型/多后端路由** | 支持本地模型、OpenRouter、自定义 Endpoint、策略路由 | **讨论中** (#987) | 需求碎片化，等待核心架构稳定后统一抽象 |

---

## 6. 开发者关注点与痛点
从 #1283 讨论及历史反馈提炼的高频痛点：

| 痛点分类 | 典型反馈 | 影响面 |
|----------|----------|--------|
| **上下文断裂** | 「每次重开终端都要重新解释项目架构/代码规范」<br>「无法记住我偏好的测试命令/提交规范」 | **全体用户**，严重降低复用效率 |
| **记忆可控性焦虑** | 「AI 自动记忆会不会学错/学偏？」<br>「敏感代码片段能否排除在记忆之外？」<br>「如何手动修正/删除错误记忆？」 | **企业/隐私敏感用户**，阻碍生产环境采纳 |
| **Token 成本失控** | 「长期记忆注入会不会吃光上下文窗口？」<br>「需要可视化的 Token 预算控制面板」 | **高频重度用户**，关乎可用性与成本 |
| **本地化数据主权** | 「记忆数据必须全本地存储，不可上云」<br>「需支持加密存储与便携导出」 | **合规/离线环境用户** |

---

## 📌 明日关注建议
1. **关注 #1283 设计定稿**：若 RFC 合并，将催生首批 Memory System 实现 PR，技术细节（向量维度、检索 Top-K、压缩策略）值得追踪。
2. **留意内部分支合并信号**：核心仓库近期 PR 为 0，疑似有大 Feature Branch 积压，关注 `main` 分支大批量提交动向。
3. **社区调研跟进**：Memory System 方案定型后，社区是否发起「早期预览/Alpha 测试」招募，将是落地节奏的关键里程碑。

---

*数据来源：GitHub API (MoonshotAI/kimi-cli) | 报告生成时间：2026-08-11 08:00 UTC*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**2026-08-11**

## 今日速览
OpenCode v1.18.16 发布，修复了核心配置解析和桌面端菜单交互等问题。高CPU使用问题引发广泛关注，社区对性能优化和功能增强提出了诸多需求。同时，多项PR推进了v2版本的桌面构建、Web UI集成和内部架构重构。

## 版本发布
**v1.18.16** (2026-08-11)
- **核心修复**：忽略未知配置字段以避免解析失败；注册从首页打开的项目以保持应用状态
- **桌面端改进**：支持右键点击首页打开项目菜单
- **桌面端修复**：提供备用项目列表示例

## 社区热点 - Issues

1. **#30086 [OPEN] 高CPU使用问题** (anomalyco/opencode #30086)
   - **重要性**：CPU使用率突增导致用户体验严重恶化，影响3-10个同时会话
   - **社区反应**：46条评论，22个👍，显示大量用户遇到此问题
   - **链接**：https://github.com/anomalyco/opencode/issues/30086

2. **#10517 [CLOSED] VS Code插件安装指南不明确** (anomalyco/opencode #10517)
   - **重要性**：安装流程繁琐，用户多次尝试仍无法成功安装
   - **社区反应**：8条评论，24个👍，反映广泛的安装困难
   - **链接**：https://github.com/anomalyco/opencode/issues/10517

3. **#26220 [OPEN] 工具调用完成后无限循环** (anomalyco/opencode #26220)
   - **重要性**：导致OpenCode完全卡死，无法继续对话
   - **社区反应**：8条评论，4个👍，紧急bug
   - **链接**：https://github.com/anomalyco/opencode/issues/26220

4. **#40958 [OPEN] DeepSeek V4 Flash免费版上下文限制问题** (anomalyco/opencode #40958)
   - **重要性**：模型声称支持1M上下文，实则仅200K，影响长文本处理
   - **社区反应**：4条评论，1个👍，影响模型可用性
   - **链接**：https://github.com/anomalyco/opencode/issues/40958

5. **#35432 [OPEN] `tool_call: false`配置未生效** (anomalyco/opencode #35432)
   - **重要性**：模型配置的工具调用禁用设置被忽略，可能导致不必要API调用
   - **社区反应**：3条评论，0个👍，影响API成本
   - **链接**：https://github.com/anomalyco/opencode/issues/35432

6. **#40866 [OPEN] 桌面端输入框焦点丢失** (anomalyco/opencode #40866)
   - **重要性**：导致桌面端表单不可用，严重影响用户体验
   - **社区反应**：2条评论，0个👍，UI/UX关键问题
   - **链接**：https://github.com/anomalyco/opencode/issues/40866

7. **#41625 [OPEN] 桌面端菜单快捷键未连接** (anomalyco/opencode #41625)
   - **重要性**：影响桌面端用户使用键盘快捷键的功能
   - **社区反应**：代码变更，解决特定UI交互问题
   - **链接**：https://github.com/anomalyco/opencode/pull/41625

8. **#40642 [OPEN] MiMo V2.5视频输入未接收** (anomalyco/opencode #40642)
   - **重要性**：模型声称支持视频输入，实则无法接收，误导用户
   - **社区反应**：2条评论，0个👍，模型功能虚假宣传
   - **链接**：https://github.com/anomalyco/opencode/issues/40642

9. **#41561 [OPEN] Claude Code与OpenCode集成问题** (anomalyco/opencode #41561)
   - **重要性**：影响专业用户的工具链集成
   - **社区反应**：1条评论，0个👍，企业级功能需求
   - **链接**：https://github.com/anomalyco/opencode/issues/41561

10. **#41593 [CLOSED] Agent配置字段转发到提供者API** (anomalyco/opencode #41593)
    - **重要性**：导致提供者侧验证错误，影响配置可靠性
    - **社区反应**：2条评论，0个👍，内部配置问题
    - **链接**：https://github.com/anomalyco/opencode/issues/41593

## 重要 PR 进展

1. **#41625 [OPEN] 桌面端菜单快捷键修复** (anomalyco/opencode #41625)
   - 将桌面菜单加速键与渲染器命令连接，确保Windows/Linux端快捷键正常工作
   
2. **#41629 [OPEN] 指令发现重构** (anomalyco/opencode #41629)
   - 将AGENTS.md文件读取从核心服务转移到配置端插件，实现更灵活的指令管理
   
3. **#41626 [OPEN] v2桌面端Beta发布** (anomalyco/opencode #41626)
   - 构建v2分支的桌面端Beta版本，集成V2 CLI，支持更稳定的桌面体验
   
4. **#14743 [OPEN] Anthropic缓存命中率优化** (anomalyco/opencode #14743)
   - 修复跨会话和跨仓库的Anthropic提示缓存问题，提高AI交互效率
   
5. **#41621 [OPEN] 会话切换时保留上一个代理** (anomalyco/opencode #41621)
   - 增强会话切换体验，保留上下文信息，改善用户操作连续性
   
6. **#40804 [OPEN] 允许子代理会话提示** (anomalyco/opencode #40804)
   - 修复子代理会话无法直接交互的问题，支持更灵活的协作模式
   
7. **#40247 [CLOSED] DeepSeek V4 Flash默认top_p修复** (anomalyco/opencode #40247)
   - 为DeepSeek V4 Flash模型设置合理的top_p默认值，改善生成质量
   
8. **#41618 [CLOSED] 插件发现与监听重构** (anomalyco/opencode #41618)
   - 将插件发现逻辑转移到配置端，使核心服务更专注于业务逻辑
   
9. **#41525 [OPEN] CLI嵌入Web UI** (anomalyco/opencode #41525)
   - 将Web UI嵌入CLI发行版，支持一键启动Web应用和TUI访问
   
10. **#27554 [OPEN] 本地LAN提供者发现** (anomalyco/opencode #27554)
    - 添加本地网络发现功能，支持自动发现OpenAI兼容的本地服务器

## 功能需求趋势

**性能与稳定性**
- 高CPU问题成为关注焦点，多用户同时使用时问题尤为严重
- 无限循环、配置错误转发等关键bug频繁出现
- 会话切换时输入内容丢失、焦点管理混乱

**模型支持与兼容性**
- DeepSeek V4 Flash元数据显示与实际能力不符
- MiMo V2.5声称支持视频但实际无法接收
- Anthropic缓存机制需要优化以提高效率

**用户体验与界面改进**
- VS Code插件安装指南模糊不清，多次出现相同问题
- 桌面端菜单和输入框交互问题频发
- 需要复制Markdown内容的频繁功能请求

**架构与扩展**
- 不断推动v2版本的发展，桌面端Beta版本持续更新
- 指令发现、插件管理和技能服务等内部架构持续重构
- Web UI集成到CLI中，支持更多使用场景

**国际化与本地化**
- 中文社区对"令牌"翻译提出改进建议（词元替换）
- 多语言支持不断完善

## 开发者关注点

**安装部署问题**
- VS Code插件安装流程繁琐且不清晰
- Windows端NVM权限问题导致CLI安装失败
- 桌面端UI焦点管理混乱，输入不可用

**核心功能缺陷**
- 高CPU问题影响用户体验，多用户场景尤为严重
- 工具调用完成后无限循环导致完全卡死
- 会话切换时输入内容丢失，_draft不持久化

**配置与模型问题**
- `tool_call: false`配置未生效，导致不必要API调用
- 部分模型能力声明与实际不符（如MiMo视频输入）
- DeepSeek V4 Flash上下文限制与宣传不符

**社区痛点**
- 桌面端UI交互问题频发（焦点、菜单、输入框）
- 安装和配置流程不够友好
- 需要更稳定的API集成和兼容性支持
- 多平台体验不一致，桌面端问题尤为突出

整体而言，OpenCode社区正在积极解决性能、稳定性、安装部署和用户体验等问题，同时v2版本的发展和Web UI集成等新功能也在不断推进。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报 (2026‑08‑11)**

---

### 1. 今日速览
Pi 社区今日动态频繁：两大新供应商接入（Cloudflare AI 网关和 Amazon Bedrock Mantle），数十个 bug 修复（特别是 Bedrock 工具参数、WSL GitHub Copilot 登录、AI 网关协议）、多项 TUI 提升（全屏搜索、全屏顶部栏、免打扰 Alt+Enter 监听、响应式底部栏）以及若干工具 bug 修补。所有变更共计超 40 个提交，展现出社区在会话稳定性、UI 体验和多云兼容性上的持续推动。

---

### 2. 版本发布
*今日无正式发布* – `v0.84.x` 系列暂无新 Tag。

---

### 3. 社区热点 Issues (按讨论热度排序)

| 排名 | Issue | 状态 | 评论 👍 | 核心问题 | 为什么重要 | 链接 |
|------|-------|--------|----------|----------|----------------|------|
| 1 | **#6187** – Pi 登录在 WSL 下 hangs | 🔴 开放 | **21** | Pi 客户端在 WSL 终端中无法检测到 GitHub Copilot 设备授权完成，导致永久等待。 | 直接影响 WSL 用户的使用流畅性。 | https://github.com/earendil-works/pi/issues/6187 |
| 2 | **#7855** – “Response was truncated before completion.” | ✅ 关闭 | **4** | AI 响应随机中断，需手动续发，适用于任何 OpenAI 兼容 API。 | 影响大规模对话的连贯性。 | https://github.com/earendil-works/pi/issues/7855 |
| 3 | **#7850** – GitHub Copilot 登录 429 错误 | ✅ 关闭 | **4** | 组织管理员账户在 >20 个可用模型时触发速率限制。 | 影响大团队多模型协作。 | https://github.com/earendil-works/pi/issues/7850 |
| 4 | **#7782** – Bedrock 工具参数的空键导致会话损坏 | ✅ 关闭 | **4** | Bedrock 返回的 `{ "": "" }` 工具参数被无脑执行 → 会话永久失效。 | 会话崩溃的典型案例。 | https://github.com/earendil-works/pi/issues/7782 |
| 5 | **#7838** – 添加 Cloudflare Workers AI 网关传输协议 | ✅ 关闭 | **4** | Pi 在 Cloudflare Worker 内部无法使用 AI 网关服务。 | 扩展云端 AI 服务的访问路径。 | https://github.com/earendil-works/pi/issues/7838 |
| 6 | **#7886** – DeepSeek maxTokens 大小写 baseUrl 问题 | ✅ 关闭 | **4** | `API.DeepSeek.COM` 等大小写混合地址导致 `maxTokens` 失效。 | 影响自定义端点的配置弹性。 | https://github.com/earendil-works/pi/issues/7886 |
| 7 | **#7876** – Alt+Enter（队列跟进）间歇性中断任务 | ✅ 关闭 | **4** | Kitty 协议关闭时 `ESC+CR` 组合被误判为中断。 | 影响终端用户在非 Kitty 终端中的快捷键。 | https://github.com/earendil-works/pi/issues/7876 |
| 8 | **#7836** – 编辑模糊匹配忽略空白长度差异 | 🔴 开放 | **3** | `normalizeForFuzzyMatch` 未归一化空白 → 相同内容但空白差异导致匹配失败。 | 影响模型生成的代码编辑和推理。 | https://github.com/earendil-works/pi/issues/7836 |
| 9 | **#7802** – 可选的 TUI 提示粘贴头 | ✅ 关闭 | **3** | 希望保留最后用户输入的提示，方便上下文查看。 | UI 便利性提升。 | https://github.com/earendil-works/pi/issues/7802 |
|10| **#7794** – `APPEND_SYSTEM.md` 自动发现失败 | ✅ 关闭 | **3** | `if (!appendSources)` 判断空数组，跳过自动加载。 | 影响用户 Agent 的自定义系统提示。 | https://github.com/earendil-works/pi/issues/7794 |

---

### 4. 重要 PR 进展

| PR | 状态 | 标题 / 修复内容 | 影响 |
|----|--------|--------------------|--------|
| **#7910** | 🟢 开放 | **feat(coding-agent)** – 为 Markdown 变换上下文添加 *消息唯一 ID* | 扩展插件作者按消息关联状态的能力。 |
| **#7913** | 🟢 开放 | **feat(tui)** – 全屏模式下的 transcript 搜索 | 用户可快速检索长对话历史。 |
| **#7882** | 🔵 进行中 | **fix(ai)** – 递归清理 Bedrock 工具参数中的空键 | 修复 #7782 会话损坏 bug。 |
| **#7901** | 🟢 开放 | **feat(ai)** – 通过 Cloudflare AI 绑定访问 AI 网关服务 | 满足 #7838 提出的云服务访问需求。 |
| **#7906** | ✅ 合并 | **feat(coding-agent)** – 全屏固定顶部栏（cwd、git 分支、context 使用率） | 提升全屏界面信息层次感。 |
| **#7905** | ✅ 合并 | **fix(config)** – 更精确的 pnpm 管理器检测，防止误判 global-nod 安装 | 优化更新提示的可靠性。 |
| **#7904** | ✅ 合并 | **fix(edit)** – 接收单对象 `{oldText,newText}` 作为合法 edits 参数 | 降低模型调用编辑工具的出错频率。 |
| **#7899** | 🟢 开放 | **fix(tui)** – 防打断 Alt+Enter 监听（100 ms 逃逸序列超时） | 修复 #7876 中间歇性中断问题。 |
| **#6216** | 🟢 开放 | **feat** – Amazon Bedrock Mantle OpenAI 响应式 API 供应商 | 新增 AWS Bedrock 产品线支持。 |
| **#7897** | 🟢 开放 | **fix(coding-agent)** – 子 Agent 继承当前会话模型/思考配置 | 提升子 Agent 的上下文连续性。 |

---

### 5. 功能需求趋势

| 趋势方向 | 体现出的 Issue/PR |
|------------|------------------------|
| **会话稳定性与错误处理** | #6187（WSL 登录）、#7855（随机中断）、#7782/#7882（Bedrock 参数清理）、#7896（Cloudflare AI 网关协议 `strict` 字段缺失） |
| **多云供应商支持** | #7838/#7901（Cloudflare AI 网关）、#6216（Bedrock Mantle）、#7869（ai21 API 退役）、#7850（GitHub Copilot 速率限制） |
| **终端用户界面优化** | #7913（全屏搜索）、#7906（固定顶部栏）、#7879/#7884（响应式底部栏）、#7802（粘贴头）、#7891（compaction 渲染） |
| **工具调用健壮性** | #7904（编辑参数）、#7836（空白归一化）、#7863（stdin 提示拼接）、#7791（undici 头溢出） |
| **配置检测与pnpm/NPM 生态** | #7905（pnpm 误判）、#7885（npm 搜索索引）、#7888（man 页提案） |
| **子 Agent 行为控制** | #7897（继承会话配置）、#7877（Muse Spark

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-08-11）

## 1. 今日速览
- DeepSeek TUI v0.9.6 正式发布，聚焦运行性能优化与提示词稳定性提升；
- CodeWhale 项目启动代际化拆解计划（EPIC-005），标志着项目进入结构重构关键阶段；
- 子智能体深度限制修复PR #5317 合入，增强模型调用的递归安全控制。

## 2. 版本发布
### DeepSeek TUI v0.9.6
- **发布时间**：2026-08-10
- **链接**：[PR #5315](https://github.com/Hmbown/CodeWhale/pull/5315)
- **主要更新**：
  - 减少运行时监护开销，优化响应速度；
  - 统一基础提示词模板，提升跨模型一致性；
  - 改进Provider输出结尾处理机制；
  - 精简压缩路径逻辑，保留更完整上下文信息。

## 3. 社区热点 Issues
| 编号 | 标题 | 状态 | 重要性 | 社区反馈 |
|------|------|------|--------|----------|
| #5316 | EPIC-005: CodeWhale TUI Crate Decomposition | OPEN | ⭐⭐⭐⭐ | 近期结构性改造规划，后续可能影响模块化依赖 |
| #2870 | [CLOSED] 命令边界重构EPIC | CLOSED | ⭐⭐⭐⭐ | 完成TUI模块职责分离，提升维护可读性 |
| #2791 | 旧版命令边界设计讨论 | CLOSED | ⭐⭐⭐ | 变更历史背景，参考价值 |
| #5253 | 子智能体深度限制问题 | CLOSED | ⭐⭐⭐⭐ | 梯度调用栈溢出风险，已修复 |
| #2851 | 命令边界重构参考PR | CLOSED | ⭐⭐⭐ | 变更实现示例 |
| #5318 | 未列出的热门议题 | - | - | 建议查阅仓库存档获取完整列表 |

> 注：当前仅显示2条Issue数据，若需更多详尽信息建议访问[GitHub Issues](https://github.com/Hmbown/CodeWhale/issues)获取全部分析。

## 4. 重要 PR 进展
| 编号 | 标题 | 状态 | 功能类别 | 简要说明 |
|------|------|------|----------|----------|
| #5317 | fix(subagents): cap nested max_depth by inherited budget | OPEN | 性能安全 | 修复子激活调用深度无限扩散问题 |
| #5315 | chore(release): ship v0.9.6 | CLOSED | 版本发布 | 正式部署v0.9.6版本 |
| #5300 | refactor(core): own primary request preparation | CLOSED | 架构优化 | 重构核心请求构建逻辑 |
| #5319-#5310 等 | 其他PR数据不足 | - | - | 当前统计空间有限 |

> 完整PR细节请参考[GitHub Pull Requests](https://github.com/Hmbown/CodeWhale/pulls)

## 5. 功能需求趋势
从当前数据可识别以下开发方向：
- **模块化架构演进**（Crate Decomposition）：EPIC-005体现了项目向更细粒度组件化迈进的意图；
- **多子智能体调用安全**：#5317解决的递归深度控制属于该方向关键痛点；
- **运行时性能优化**：v0.9.6的减轻监护策略直接回应了高性能需求。

## 6. 开发者关注点
- **依赖模块冗余**：结构拆解计划暗示当前单体设计难以支撑复杂场景；
- **调用链长度可控性**：子激活深度问题凸显多模态推理时的资源消耗隐患；
- **版本迭代冲击**：频繁的架构调整可能带来升级成本考量。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*