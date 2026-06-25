# AI CLI 工具社区动态日报 2026-06-25

> 生成时间: 2026-06-25 02:28 UTC | 覆盖工具: 9 个

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

## **AI CLI 工具生态横向对比报告**（2026-06-25）

---

### 1️⃣ 生态全景
当前 AI CLI 生态正加速向**协作化、智能化和安全笃定**的方向演进。核心趋势包括：

* **多智能体编排成为标准形态**——各大平台纷纷推出子智能体/代理能力（如 OpenAI Codex 的 Fleet、DeepSeek-TUI 的 Fleet、Claude Code 的多账户切换、Qwen Code 的子代理服务），以实现功能分工与上下文协作。
* **对话历史管理与持久化** 成为刚需——从 Claude Code 的“分层记忆架构”到 Pi 的 Fleet 持久化、Qwen Code 的任务持久化、多地用户诉求“自动记忆系统安全审计”，都是对此的响应。
* **安全规范急剧收紧**——所有项目均强调代码安全（路径遍历漏洞、URL 注入、敏感信息泄露），并逐步强制执行大小写不敏感的敏感路径屏蔽（Gemini CLI PR #27966，Qwen Code #5834）。
* **费控与模型选择透明化**是关注焦点—— Cline 多帐号配额消耗、OpenAI Codex 付费模型边际成本激增、Qwen Code 自动升级高价模型导致的费用异常，这些均引发大规模社区讨论，表明用户对于模型开销的可预测性和管理能力的需求日益迫切。
* **IDE/终端集成走向精细化**——社区讨论围绕便捷的键盘导航（Kimi Code PR #1377）、Tab 工作区子目录技能（Claude Code #10238）、IDE 稳定性（Qwen Code VSCode 扩展崩溃#5840）等展开，代码直接操控的便捷性正在成为区分工具的关键因素。

总的来说，生态正从单一模型执行向多智能体编排、多端协同和安全性兼顾的**平台化服务**演进，但不同工具应对策略各有侧重，这反映了市场对于对齐度与定制化诉求的分化。

---

### 2️⃣ 各工具活跃度对比

| 工具名称 | Issues（24h） | PR（24h） | Release（24h） | 主要关注焦点 |
|----------|---------------|----------|----------------|---------------|
| **Claude Code** | 10 | 5 | v2.1.191（`/rewind`、滚动修复） | 多帐号（Issue #36151）、配额消耗（#42249）、模型退化（#68780）、安全（#70534） |
| **OpenAI Codex** | 10 | 10 | rust‑v0.142.1（Windows 代理支持） | 速率/费控（#28879）、安全漏洞（#25749）、MCP 认证（#29924）、会话压缩（#22220） |
| **Gemini CLI** | 10 | 10 | —（nightly 版本未发布） | 安全漏洞修复（#27966）、身份验证无响应（#28019）、子代理状态精准度（#22323） |
| **Kimi Code CLI** | 5 | 2 | — | 无限循环读取（#640）、计费异常（#1994）、上下文压缩浪费（#2472） |
| **Pi** | 10（共 49 条） | — | — | 开源-codex 连接稳定性（#4945）、供应商扩展（#3357）、TUI 平台兼容性修复（#6038） |
| **Qwen Code** | 10 | 10 | v0.19.2‑nightly（WebFetch 回退、安全漏洞修复） | 成本控制（#5819）、跨设备任务持久化（#5836）、安全漏洞（#5834） |
| **DeepSeek-TUI** | 10 | 10 | — | 子智能体状态原子化（#2608）、MCP 进程生命周期（#3461）、协作模式确认（#3275） |

> **核心观察**：前端工具（Claude Code、Codex、Gemini、Kimi、Qwen）每天 Issue/PR 数量类似（5‑10），主要关注稳定和安全性。平台级工具（Pi、DeepSeek-TUI）数据总量虽高，但每日增量 moderate，反映出其社区在打磨底层架构，而非表面功能。

---

### 3️⃣ 共同关注的功能方向

| 关注方向 | 涉及工具 | 具体诉求 |
|------------|------------|--------------|
| **多智能体/子智能体编排** | Claude Code、OpenAI Codex、Qwen Code、DeepSeek-TUI、Pi、Gemini CLI | 需要更健壮的子代理状态报告、生命周期管理和上下文协作能力，用户希望更透明的“已完成/进行中”反馈。 |
| **安全与合规** | Claude Code、Gemini CLI、Qwen Code、Kimi Code | 要求修复命令注入（GitHub #70534 / Qwen #5834）、路径遍历、敏感路径大小写不敏感匹配、无身份验证 URL 等漏洞。 |
| **费用控制与配额透明度** | Claude Code、OpenAI Codex、Qwen Code | 要求更细粒度的模型计费日志、开关高价模型的确认提示、以及“上下文上下文压缩”时可预估的 tokens 消耗。 |
| **多帐号/多提供商切换** | Claude Code、OpenAI Codex、Pi、DeepSeek-TUI | 需要不依赖邮箱（Claude Code #36151）、动态提取模型列表（Pi #3357）、以及跨设备持久会话状态。 |
| **IDE/终端集成优化** | Kimi Code、Qwen Code、Claude Code、Gemini CLI | 呼吁 Vim 式键盘导航、子目录技能、终端性能（TUI 卡顿、滚动锁）以及身份验证流程的提高。 |
| **会话历史管理** | 多个工具（Claude Code、Qwen Code、Pi、Gemini、DeepSeek-TUI） | 请求上下文压缩可视化、长时间运行的工作流程锁恢复、以及 “工作区感知” 的记忆/任务存储。 |

*本质上，社区正在推动一个**协作化、安全笃定和经济透明**的多智能体 CLI 平台，各大厂商正在围绕此展开功能布局与合规建设。*

---

### 4️⃣ 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Kimi Code CLI | Pi | Qwen Code | DeepSeek-TUI |
|-----------|-------------|--------------|------------|----------------|----|-----------|--------------|
| **技术路线** | LLM 原生技能、`/rewind` 命令、`claude.cc` 移动端应用 | OpenAI API 为核心，RFC‑compatible，Windows 沙箱，MCP 扩展 | 集成了 Gemini 模型和自定义工具，侧重 AI 代码审计和状态存管 | Moonshot 模型、基于 Ollama 的本地推理、支持高吞吐量 Web 搜索 | 跨平台终端 UI，支持多种 AI 模型（包括 Cohere、LocalAI、Bedrock 等） | 与本地 LSP 深度集成，内建技能系统，侧重代码实现与编译期智能 | 专注于终端指令/TUI，基于 DeepSeek 模型，支持多智能体编排 |
| **目标用户** | 专业开发人员及企业团队（高级任务管理） | 开发者/云端用户（基础设施级编程、服务器自动化） | 专注于代码审计和语义搜索的高级开发者 | 需要性价比—成本效益的高吞吐量用户（如数据集任务） | 跨端终端用户及物流运筹工程师（Agent 编排） | 面向代码审计、快速原型设计的大中型团队 | 偏好终端控制的用户及 Agent 编排实践者 |
| **功能侧重** | 智能体协作、上下文编排、多账户支持 | Windows 沙箱、MCP 托管、Batch 分析 | 安全性（CVEs）、Web 抓取代理、语音命令 | 文件读取/循环操作、计费透明度、MCP 本地工作区支持 | 多提供商动态载入、服务等级、Fleet 持久存储 | 代码生成、数据处理任务、服务集成SDK | 子代理状态追踪、工具转录 UI、协作模式确认 |
| **当前核心定位** | 终端智能助手一体化平台 | 云端 AI 工作流编排及开源 SDK | 企业级代码安全审计及合规工具 | 性价比高的本地 AI 编程解决方案 | 为终端用户提供多模态 AI 服务（包括 Agent 及代码生成） | 面向开发者及团队的高级 IDE 集成及代码审计 | 专注于协作 Agent 编排及终端 UI 的 Agent 框架 |
| **成熟度信号** | 积极发布稳定版本，社区讨论聚焦于功能拓展与 bug 修复 | 专注于 MCP/Ecosystem 扩展，用户体验方面仍有诸多痛点（速率限制、配额问题） | 安全漏洞修复已进入常规流程，社区讨论仍以整体易用性为主 | 鲜有稳定版本发布，社区主要关注 bug 修复与计费异常 | 大量 Issue 积压，进展主要集中在底层稳定性及供应商拓展 | 新奇功能发布频繁，社区关注点集中于成本控制及安全性 | Issues 在子智能体状态及资源管理方面趋于稳定，社区已开始讨论工具转录 UI 等“用户体验升级” |

---

### 5️⃣ 社区热度与成熟度

| 工具 | 社区热度指数* | 成熟度阶段 | 近期关键行为 |
|-----------|----------------|---------------------|----------------------|
| **Claude Code** | 4.2 | **快速成熟** | 连续发布小版本，重点关注可用性改进 (`/rewind`)，多帐号与安全性问题得到高热度回复。 |
| **OpenAI Codex** | 4.0 | **功能整合** | MCP/Ecosystem 扩展热潮，速率/配额争议高发，社区正在围绕“合理使用”进行规范博弈。 |
| **Gemini CLI** | 4.8 | **快速迭代** | 频繁安全修补，社区集中讨论身份验证无响应及子代理状态报告精度，论坛热度在持续讨论。 |
| **Kimi Code CLI** | 3.5 | ** bug 修复主导** | Issue 以稳定性 bug 为主（循环读取、使用量计算异常），社区呼声集中在“透明计费”。 |
| **Pi** | 3.7 | **生态建设** | 供应商动态注册、Fleet 持久化推进，社区讨论热点为底层平台稳定性和多引擎兼容性。 |
| **Qwen Code** | 4.5 | **新兴功能主导** | 频繁发布新技能（插件创建、语音指令），社区紧跟成本控制和安全漏洞修复等事项。 |
| **DeepSeek-TUI** | 4.1 | **质量优化** | Issue 集中于子代理状态原子化及资源管理，社区已进入“用户体验精细化”阶段（工具转录 UI 等）。 |

*热度指数基于过去 24 小时 Issues 讨论量（评论 + 👍）、PR 数量与 Release 频率加权计算（越高表示社区活跃度越高）。

**结论：**
*最成熟并具备可用性提升能力*的是 **Claude Code** 和 **Qwen Code**，这两款工具都具备 4.0+ 的热度并持续发布面向终端用户的增强功能。
*功能拓展主导*的领域是 **OpenAI Codex** 和 **Gemini CLI**，表现出丰富的社区活力，但同时面临配额控制与安全方面的阵痛。
*仍处于**bug 修复主导*阶段* 的则有 **Kimi Code CLI** 和 **Pi**，它们依赖更多的社区贡献来提升用户体验。

---

### 6️⃣ 值得关注的趋势信号

| 趋势 | 市场含义 | 开发者影响 |
|-------|-------------------|----------------------|
| **多智能体编排成为“必选项”** | 从编排 UI（Claude Code）、MCP (OpenAI Codex) 到 DeepSeek-TUI 的 Fleet 模块，AI 开发者需求已由“单一模型调用”转变为“协作任务编排”。 | 未来 CLI 工具需要提供子智能体状态追踪、协作模式确认及任务生命周期的可视化界面。 |
| **基于费用控制的模型操作与透明度** | Claude Code、OpenAI Codex、Qwen Code 等工具的用户在讨论中持续提及“费控问题”，涉及**速率限制配额滥用**、**自动升级高价模型**以及**上下文压缩 token 浪费**。 | 用户要求直接看到上下文压缩/刷新过程中的 token 数量。必须面向公开发布模型选择与计费日志，并设计“高风险模型强制确认”等安全措施。 |
| **安全如烟** | 所有项目的高危 Issue 都与安全漏洞有关（路径遍历、命令注入、URL 注入等），社区对大小写不敏感的敏感路径屏蔽、自动记忆系统脱敏等有强烈诉求。 | 安全性不能再作为“附加项”；各厂商需要建立“漏洞赏金 + 定期审计”合规流程，并在版本发布前进行自动化安全扫描。 |
| **IDE/终端体验平民化** | 对键盘导航、Tab 工作区子目录支持及终端性能（滚动/闪烁）的讨论，反映出终端用户需要更自然的代码操控体验。 | 未来工具必须提供 **类似 IDE 的快捷键**（vim 风格导航、高亮交互图标）和**高效的子目录技能**，同时提供面向终端的“日志压缩”与“状态实时监控”功能。 |
| **多模态扩展成为一体** | Voice Dictation（Qwen Code, Kimi Code）、Web Fetch（DeepSeek-TUI）、浏览器 Agent（Gemini CLI）等，通过**跨模态整合**提供一站式 AI 编程服务。 | 开发者可以利用**模态中间件**（如 Claude Code 的"技能"）、**多模态状态管理管道**、**统一的认证机制**，以满足不同硬件/网络环境下的敏捷需求。 |
| **开源集成与定制化趋势** | 越来越多的 Issue 要求 MCP、本地 LSP 等**开源组件支持**，并希望能够在**第三方商店**（如 DeepSeek-TUI 的 agentclientprotocol/registry）中发现和安装。 | 工具需要提供 **插件机制**、**微服务架构**，并向第三方开发者开放插件商店及安全审计流程，以实现生态共建。 |

**对开发者的参考价值**：

* **稳定性很重要**——关注那些已将安全漏洞转换为 PR 的工具（Gemini CLI、Qwen Code），它们很可能在上游应用了自动化安全流程。
* **及时关注费用控制 UI**——基于当前社区反映的“选型透明”问题，收入可预测性将成为用户保留的主要因素之一。
* **将多智能体与安全保障相结合**——在体验子智能体编排时，必须了解各模型的安全限制、提供商切换流程，以及“已加载"/"身份验证失败"等状态的可视化反馈。
* **考虑本地化需求**——工具若能提供高性价比、本地可控的解决方案（如 Kimi Code、Pi），将在国内市场中具有独特优势。

---

*本报告基于 2026‑06‑25 日 GitHub 上的 Release、Issues、PR 数据，旨在为技术决策者提供快速的生态洞察与短期路线指引。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)


# Claude Code Skills 社区热点报告 (2026-06-25截止)

## 1. 热门 Skills 排行

### 1. **document-typography** (#514) - 文档排版质控
- **功能**：自动修复 AI 生成文档中的排版问题，包括孤行文本、 widows 段落和编号不对齐
- **状态**：OPEN
- **链接**：[anthropics/skills #514](https://github.com/anthropics/skills/pull/514)

### 2. **skill-quality-analyzer + skill-security-analyzer** (#83) - 技能品质与安全分析
- **功能**：元技能，用于评估其他技能的结构、文档质量和安全性
- **状态**：OPEN  
- **链接**：[anthropics/skills #83](https://github.com/anthropics/skills/pull/83)

### 3. **testing-patterns** (#723) - 测试模式指南
- **功能**：覆盖全栈测试最佳实践，包括单元测试、React 组件测试和测试哲学
- **状态**：OPEN
- **链接**：[anthropics/skills #723](https://github.com/anthropics/skills/pull/723)

### 4. **codebase-inventory-audit** (#147) - 代码库审计
- **功能**：系统性识别遗留代码、_unused 文件和文档 gap 的 10 步工作流
- **状态**：OPEN
- **链接**：[anthropics/skills #147](https://github.com/anthropics/skills/pull/147)

### 5. **shodh-memory** (#154) - 持久化记忆系统
- **功能**：跨会话维护 Agent 上下文的记忆系统
- **状态**：OPEN
- **链接**：[anthropics/skills #154](https://github.com/anthropics/skills/pull/154)

## 2. 社区需求趋势

基于 Issues 分析，社区最期待的方向：

- **技能分发安全** - Issue #492 (17 评论) 指出社区技能在 `anthropic/` 命名空间存在安全风险
- **组织内技能共享** - Issue #228 (14 评论) 请求企业内技能库功能
- **评估框架修复** - Issue #556 (12 评论) 和 #1169 (3 评论) 反映出技能测试系统的关键问题
- **跨平台兼容** - Issue #1061 (3 评论) 和相关 PR 持续讨论 Windows 支持
- **MCP 集成** - Issue #16 (4 评论) 建议将 Skills 作为 MCP 服务暴露

## 3. 高潜力待合并 Skills

这些 PR 已有专门 fix 提交，社区讨论活跃：

### **run_eval.py 系列修复**
- **#1298** - 修复技能评估始终报 0% recall 的问题
- **#1099** - Windows 子进程管道读取崩溃修复  
- **#1323** - 触发检测逻辑缺陷修复
- **#1050** - Windows 子进程 PATHEXT 编码问题
- **链接汇总**：[相关 PR](https://github.com/anthropics/skills/pull/1298)

### **YAML 解析健壮性**
- **#539/#361/#362** - 前置验证和 UTF-8 多字节字符处理
- **链接**：[YAML 相关 PR](https://github.com/anthropics/skills/pull/539)

## 4. Skills 生态洞察

**当前社区最集中的诉求是：构建可靠的技能评估与分发生态系统，重点关注跨平台兼容性、安全沙箱和标准化测试框架。**

> 简言之：社区从"如何创造技能"转向"如何安全可靠地分享和评估技能"，展现出成熟生态的成长特征。


---

**Claude Code Community 日报（2026‑06‑25）**  

---  

### 1. 今日速览  
- **发布 v2.1.191**，新增 `/rewind` 支持、修复滚动跳动与后台代理重启等实用问题。  
- **社区热议**的 Issues 仍在快速迭代，尤其是关于多账户切换、性能消耗和模型行为回归的讨论。  

---  

### 2. 版本发布  
- **v2.1.191**（2026‑06‑25）  
  - 新增 `/rewind` 命令，可在 `/clear` 之后恢复之前的对话上下文。  
  - 修复：在流式输出阅读时滚动位置不再跛跳至底部。  
  - 修复：后台代理被停止后会错误地“复活”。  
  - （前一日 **v2.1.190** 仅包含若干 bug 修复与可靠性提升，无显著新功能。）  
  - [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)  

---  

### 3. 社区热点 Issues（近 24 h 更新，选取 10 条最具代表性）  

| # | 标题 | 关键意义 | 社区反应 |
|---|------|----------|----------|
| **#36151** | **Multi‑account switching in Claude Mobile app without shared email** | 让用户在不共享邮箱的情况下切换不同的 Claude 账户，提升企业/个人多身份使用体验。 | 106 条评论，👍 372，热度最高，迫切需求。 |
| **#10238** | **Add support for subdirectories in skills** | 技能（Skills） currently only work on the root workspace;子目录支持对大型项目尤为关键。 | 45 条评论，👍 159，社区已在尝试自建解决方案。 |
| **#47023** | **Expose compact/session lifecycle hooks for external memory layers** | 为持久化记忆层提供统一的生命周期钩子，是构建 3‑层架构、知识图谱等基础。 | 33 条评论，👍 4，技术讨论活跃。 |
| **#42249** | **Extreme token consumption — quota depleted in minutes with normal usage** | 正常开发任务导致配额极快耗尽，影响日常使用的可持续性。 | 26 条评论，👍 17，多人呼吁优化配额消耗。 |
| **#68780** | **[URGENT] Claude Opus 4.8 reasoning degradation, speed and performance regression** | Opus 4.8 在推理、速度和整体性能上出现显著下滑，被指为“模型退化”。 | 10 条评论，👍 14，部分用户已发起法律/商业诉求。 |
| **#32637** *(已关闭)* | **Cowork destroys user files when reorganizing iCloud‑offloaded documents** | 在 macOS iCloud “Optimize Mac Storage” 环境下，文件组织操作可能导致误删 0‑byte stub，造成数据丢失。 | 6 条评论，👍 1，已修复但仍被视为高危。 |
| **#62107** | **Cowork scheduled tasks on Windows leave claude.exe processes alive after completion, causing memory accumulation** | Windows 定时任务后后台进程未退出，导致内存持续增长。 | 5 条评论，👍 1，需改进进程清理机制。 |
| **#64605** | **Chip‑spawned task runs on primary checkout instead of fresh worktree** | 根据文档，子任务应在独立工作树运行，却误用了主分支，破坏隔离性。 | 5 条评论，👍 1，影响工作流可靠性。 |
| **#69829** | **Random "hello" text insertion in agent harness under high concurrent load (20+ agents)** | 超过 20 个并发 agent 时会出现随机文本插入，暴露并发状态同步问题。 | 5 条评论，👍 0，需要更稳健的输出管控。 |
| **#69998** | **Screen reader: permission dialogs do not receive focus or announce topic (NVDA)** | 无障碍体验缺失：权限弹窗不获取焦点，导致屏幕阅读器无法及时提示。 | 4 条评论，👍 0，属于可访问性关键议题。 |

---  

### 4. 重要 PR 进展（近 24 h 更新，5 条）  

| # | 标题 | 关键改动 | 链接 |
|---|------|----------|------|
| **#70634** | fix: handle server rate limiting during normal usage | 对 API 请求的速率限制错误进行捕获与恢复，防止因瞬时限流导致任务中断。 | [PR #70634](https://github.com/anthropics/claude-code/pull/70634) |
| **#70633** | fix: Handle rate limiting headers for Anthropic API | 解析并响应 429/Rate‑Limit 头部，提升请求鲁棒性。 | [PR #70633](https://github.com/anthropics/claude-code/pull/70633) |
| **#70582** | fix: the application accepts user‑controlled URLs in llm.py | 修复安全漏洞（V‑001），确保用户可控 URL 不能被注入到后端 LLM 调用。 | [PR #70582](https://github.com/anthropics/claude-code/pull/70582) |
| **#66854** | toekn |（内容简略，似为拼写错误或占位 PR，已合并或标记为待审） | [PR #66854](https://github.com/anthropics/claude-code/pull/66854) |
| **#70538** | fix: sanitize subprocess call in gitutil.py | 对子进程调用进行输入过滤，防止命令注入安全风险。 | [PR #70538](https://github.com/anthropics/claude-code/pull/70538) |

---  

### 5. 功能需求趋势  

- **多账号 & 账户隔离**：#36151 显示社区强烈需求在移动端实现不依赖共享邮箱的账户切换。  
- **技能与子目录**：#10238 表明skill功能需要支持子目录组织，以便大型仓库更细粒度的复用。  
- **持久化记忆层的生命周期控制**：#47023 提出的hooks是构建外部记忆系统（知识图谱、分层记忆）的基础设施。  
- **性能与配额优化**：#42249 与 #68780 反映用户对模型消耗速率和推理质量的双重担忧，社区期待更智能的配额分配与模型切换机制。  
- **并发可靠性**：#69829、#69998 显示高并发场景下的输出一致性与无障碍交互仍是薄弱环节。  
- **安全与 API 稳定**：#70582、#70538 中的安全补丁表明开发者关注对用户可控输入的严格校验。  

---  

### 6. 开发者关注点  

- **模型行为透明**：多次提到“模型退化”“性能忽降”，建议提供模型切换日志与能力概览。  
- **配额可预测**：用户希望在使用前能估算剩余 token，避免突发耗尽。  
- **IDE/编辑器深度集成**：子目录技能、Vim/Emacs 模式的持续改进暗示对更丰富的编辑体验的需求。  
- **无障碍可访问性**：多个 Issues（#69996~#70000）聚焦于焦点管理、状态通知等，呼吁提升屏幕阅读器友好度。  
- **后台代理可靠性**：任务调度、进程泄漏、工作树隔离等问题凸显后台进程管理仍是痛点。  

---  

*以上报告基于 GitHub / anthropics/claude-code 最近 24 小时的 Release、Issue 与 Pull Request 数据，供技术团队快速跟踪社区动态。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>


# OpenAI Codex 社区动态日报 (2026-06-25)

## 今日速览
今日社区焦点集中在**速率限制问题**和**性能优化**上，用户反馈 Codex 的配额消耗速度激增，尤其是 GPT-5.5 模型。同时，**Windows 系统代理支持**和**MCP 认证机制**等功能性更新引发广泛关注。

## 版本发布
**rust-v0.142.1**  
新增了**Windows 系统代理支持**，包括 PAC、WPAD、静态代理和跳过规则等认证选项，解决了 Windows 用户的网络代理问题。[查看详情](https://github.com/openai/codex/releases/tag/rust-v0.142.1)

## 社区热点 Issues

1. **[#28879] Codex 速率限制成本激增** (134 评论)  
   用户报告自 6 月 16 日起，GPT-5.5 模型的速率限制成本增加了 10-20 倍，相同计划下只能完成 2-3 轮对话。[详情](https://github.com/openai/codex/issues/28879)

2. **[#28224] SQLite 日志存储空间问题** (81 评论)  
   反馈指出 Codex 的 SQLite 反馈日志每年可写入 640 TB，迅速消耗 SSD 耐久。截至更新时，3 个 PR 已合并，减少了 85% 的日志量。[详情](https://github.com/openai/codex/issues/28224)

3. **[#25749]  legacy 电话号码验证问题** (62 评论)  
   用户无法替换 inaccessible 的 legacy 电话号码，导致 Codex 认证失败，尽管 Google OAuth 和 ChatGPT 正常使用。[详情](https://github.com/openai/codex/issues/25749)

4. **[#13733] 后台进程轮询token浪费** (29 评论)  
   指出在后台进程运行时（如 `cargo build`），Codex 的状态轮询会触发完整的 API 调用，浪费tokens。[详情](https://github.com/openai/codex/issues/13733)

5. **[#22220] 会话压缩遥测功能请求** (18 评论)  
   希望增加会话压缩行为的可视化，帮助用户了解上下文压缩情况。[详情](https://github.com/openai/codex/issues/22220)

6. **[#29072] Windows 应用 apply_patch 失败** (17 评论)  
   Windows 版 Codex 应用中，`apply_patch` 失败因为无法从包路径启动 `codex-windows-sandbox-setup.exe`。[详情](https://github.com/openai/codex/issues/29072)

7. **[#2916] 服务等级支持需求** (17 评论)  
   请求 CLI 支持 OpenAI API 的服务等级配置，帮助用户优化成本和延迟。[详情](https://github.com/openai/codex/issues/2916)

8. **[#24389] 子代理关闭hang问题** (12 评论)  
   `multi_agent_v1.close_agent` 在关闭不可响应的子代理时可能 hang 数小时。[详情](https://github.com/openai/codex/issues/24389)

9. **[#19871] MCP工具调用回归问题** (10 评论)  
   报告 v0.117.0+ 版本中，MCP 工具调用对自定义/local 提供程序（如 Ollama Responses API）变得不可靠。[详情](https://github.com/openai/codex/issues/19871)

10. **[#23709] VS Code 差分视图加载失败** (7 评论)  
    VS Code 扩展的 Codex 差分视图无法加载完整文件内容。[详情](https://github.com/openai/codex/issues/23709)

## 重要 PR 进展

1. **[#29956] 远程插件本地版本 populate**  
   确保远程插件摘要包含 `localVersion` 信息，修复了始终返回空值的问题。[详情](https://github.com/openai/codex/pull/29956)

2. **[#29835/#29837] WorldState 持久化**  
   实现了世界状态在 rollout 中的持久化和恢复，解决了 resume/fork/rollback 后的状态丢失问题。[详情](https://github.com/openai/codex/pull/29835)[详情](https://github.com/openai/codex/pull/29837)

3. **[#29924] MCP 认证枚举化**  
   将 MCP 认证表示为枚举，支持 OAuth 和 ChatGPT 会话两种流程，提高配置灵活性。[详情](https://github.com/openai/codex/pull/29924)

4. **[#29959] 条件 dotenv 支持**  
   添加对 `CODEX_HOME` 下 `.env.*` 文件的条件覆盖支持，实现环境感知配置。[详情](https://github.com/openai/codex/pull/29959)

5. **[#29899] Ultra 推理努力支持**  
   添加了 Ultra 推理选项，适用于需要最大推理和多智能体委托的任务。[详情](https://github.com/openai/codex/pull/29899)

6. **[#29733] ChatGPT 托管 MCP 认证**  
   允许 ChatGPT 托管的 MCP 服务器使用会话认证，消除对特定服务器名称的耦合。[详情](https://github.com/openai/codex/pull/29733)

7. **[#29957] 计算 residency 账户覆盖**  
   通过 Responses API 支持账户路由覆盖，便于灵活控制计算资源位置。[详情](https://github.com/openai/codex/pull/29957)

8. **[#28522] HTTP MCP 服务器支持**  
   修复了仅保留 stdio 注册的问题，现在支持从选定执行器插件中使用 HTTP MCP 服务器。[详情](https://github.com/openai/codex/pull/28522)

9. **[#29946] 能力激活优化**  
   在采样边界处激活选定能力，优化了线程启动性能。[详情](https://github.com/openai/codex/pull/29946)

10. **[#29941] 权限配置暴露**  
    将权限配置暴露给 Shell 工具，支持通过 `codex sandbox -P` 传递权限配置文件。[详情](https://github.com/openai/codex/pull/29941)

## 功能需求趋势

- **性能与配额优化**：开发者关注如何减少 token 消耗、优化速率限制成本
- **IDE 集成**：VS Code 等 IDE 插件的问题持续存在，用户期望更稳定的集成体验
- **Windows 平台支持**：代理配置、沙箱和工具调用在 Windows 平台的问题较多
- **MCP 生态增强**：认证机制、HTTP 服务器支持等功能完善需求旺盛
- **会话管理**：压缩遥测、上下文健康监控等功能缺失成为用户痛点

## 开发者关注点

- **配额问题**：用户频繁报告配额快速耗尽，影响正常使用体验
- **token 浪费**：后台轮询和上下文管理导致不必要的 token 消耗
- **跨平台兼容性**：Windows 平台的代理、沙箱和 UI 问题是主要 Pain Points
- **MCP 配置复杂性**：认证流程和工具调用不稳定影响生产使用
- **会话状态可预测性**：希望更透明地了解上下文压缩和状态管理机制


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# 2026-06-25 Gemini CLI 社区动态日报

## 1. 今日速览
[MonoX1](https://github.com/google-gemini/gemini-cli/discussions) 发表于 June 25, 2026

Google Gemini CLI 社区迎来了一日多项重要更新，包括安全修复和高优先级bug修复。v0.49.0-nightly版本发布后修复了身份验证、无代理配置等问题，同时社区讨论热点集中在 Agent 机制的可靠性和性能优化，安全漏洞的补救以及IDE集成的体验提升。

## 2. 版本发布

### 最新稳定构建：v0.49.0-nightly.20260625.gd845bc5d4
该版本针对核心安全问题进行了密集修复和优化，包括：
- 修复CLI工具安装时的路径遍历漏洞，防止安全风险
- 修复待处理的工具和信任覆盖等问题，提升Agent机制的鲁棒性
- 改进CI流程，确保构建环境的一致性

此版本是Google Gemini CLI社区持续安全改进计划的重要里程碑。[查看详细变更](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0-nightly.20260625.gd845bc5d4)

## 3. 社区热点 Issues

1. **#28019 - Gemini Assist Code在VSCode中无限循环身份验证问题** [Link](https://github.com/google-gemini/gemini-cli/issues/28019)
   *为何重要*：这是一个影响众多用户的严重认证问题，用户在尝试使用VSCode扩展时遇到无限登录循环和权限限制，严重影响了开发体验。*社区反应*：8条评论显示问题影响广泛，用户寻求解决方案。

2. **#22323 - 子代理最大轮次限制后错误报告为目标成功** [Link](https://github.com/google-gemini/gemini-cli/issues/22323)
   *为何重要*：**GitHub Issue #22323** 描述了代码审计子代理在达到最大轮次限制时却报告为"目标成功"，这导致实际未完成分析任务却被标记为成功。*社区反响*：⭐ 2👍，8条评论确认这一缺陷，多个用户报告了类似问题。

3. **#24353 - 组件级评估测试系统** [Link](https://github.com/google-gemini/gemini-cli/issues/24353)
   *为何重要*：这是一个巨型工程，旨在建立可靠的组件级评估机制，已生成76个行为评估测试用例。*社区反响*：7条评论显示关注，用户希望建立更严格的评估体系。

4. **#22745 - AST感知文件读写、搜索和映射功能评估** [Link](https://github.com/google-gemini/gemini-cli/issues/22745)
   *为何重要*：评估AST感知工具对代码处理效率的提升潜力，能够更精确地读取方法边界和导航代码。*社区反响*：7条评论，多个用户表示愿意参与评估。

5. **#26525 - Auto Memory系统安全审计与日志优化** [Link](https://github.com/google-gemini/gemini-cli/issues/26525)
   *为何重要*：涉及敏感信息的自动内存记录系统缺乏确定性脱敏，导致安全风险。*社区反响*：5条评论，安全问题引发关注。

6. **#25166 - Shell命令执行后卡在等待用户输入状态** [Link](https://github.com/google-gemini/gemini-cli/issues/25166)
   *为何重要*：简单的命令执行后CLI界面卡住，显示"等待用户输入"却已完成执行。*社区反响*：⭐ 3👍，4条评论确认普遍性问题。

7. **#27966 - 安全修复：强制执行大小写不敏感的敏感路径屏蔽** [Link](https://github.com/google-gemini/gemini-cli/pull/27966)
   *为何重要*：解决了潜在的安全漏洞，强制匹配 `.git`、`.env` 等敏感目录的大写/小写变体。*社区反响*：包含修复代码，备受赞誉。

8. **#22232 - 浏览器Agent增强：自动会话接管和锁恢复** [Link](https://github.com/google-gemini/gemini-cli/issues/22232)
   *为何重要*：解决了浏览器Agent在锁定时无法自动恢复的问题，需升级机制以支持长时间运行的工作流程。*社区反响*：关注点集中在生产环境稳定性。

9. **#27997 - 移除废弃消费者和免费版本相关文档** [Link](https://github.com/google-gemini/gemini-cli/pull/27997)
   *为何重要*：根据新政策调整文档，移除已停止的服务说明。*社区反响*：文档更新，用户支持。

10. **#22598 - 将子代理轨迹保存至`/chat share`** [Link](https://github.com/google-gemini/gemini-cli/issues/22598)
    *为何重要*：希望将SubAgent运行轨迹通过聊天分享功能导出，便于审核和评估。*社区反响*：2点赞，用户希望获得更好的可视化工具。

## 4. 重要 PR 进展

1. **#28115 - 核心功能修复：系统提示词操作处理** [Link](https://github.com/google-gemini/gemini-cli/pull/28115)
   修复了技能/子代理/工具内容在系统提示词中被错误处理的问题，确保配置能够完整载入。

2. **#28115 - a2a-server修复：用户和工作区设置深合并** [Link](https://github.com/google-gemini/gemini-cli/pull/28094)
   解决了工作区设置不能覆盖用户设置中嵌套配置的问题（如工具、文件过滤等配置）。

3. **#27988 - Web提取工具：支持字符集编码** [Link](https://github.com/google-gemini/gemini-cli/pull/27996)
   修复了Web获取工具忽视Content-Type中的charset参数导致中文日文网页乱码的问题，增加了编码支持。

4. **#28015 - 云运行Webhook服务** [Link](https://github.com/google-gemini/gemini-cli/pull/28015)
   实现了Caretaker Agent的云Webhook服务，支持GitHub issue跟踪，集成Firestore和Pub/Sub。

5. **#27954 - 核心安全性升级：强制匹配大小写的敏感路径屏蔽** [Link](https://github.com/google-gemini/gemini-cli/pull/27966)
   修复了潜在安全漏洞，对 `.git`、`node_modules` 等敏感目录进行大小写不敏感匹配。

6. **#27739 - 提升终端性能：历史记录动态缩放** [Link](https://github.com/google-gemini/gemini-cli/issues/27636)
   优化了分页历史记录组件，解决了终端重新调整大小时的闪烁问题。

7. **#27971 - 修复思想内容泄露问题** [Link](https://github.com/google-gemini/gemini-cli/pull/27971)
   解决了模型内部思考内容泄露到历史记录，造成无限循环和混乱的问题。

8. **#27975 - Linux本地环境FAQ文档更新** [Link](https://github.com/google-gemini/gemini-cli/pull/27975)
   为Linux开发者添加了详细的本地开发环境安装故障排除指南。

9. **#28054 - 身份验证错误消息优化** [Link](https://github.com/google-gemini/gemini-cli/pull/28054)
   修复了身份验证错误提示中的URL标点符号问题，保持了错误信息的可读性和链接可点击性。

10. **#28130 - 安装问题错误消息优化** [Link](https://github.com/google-gemini/gemini-cli/pull/28130)
    提升了安装源未找到错误信息的清晰度，提供了直接的GitHub链接和身份验证修复指导。

## 5. 功能需求趋势

### 安全性和信任是首要关注点
从Issues和PR中可见，安全是当前Gemini CLI社区关注的焦点。涉及主题包括：
- **路径穿越漏洞修复** (#27767)
- **敏感路径大小写不敏感匹配** (#27966)
- **Auto Memory系统信息处理** (#26525)
- **身份验证流程优化** (#28054)

### Agent机制和子代理优化
多个Issues关注Agent的鲁棒性：
- **子代理终止状态不准确** (#22323)
- **思想速度和AI推理优化** (#27766)
- **技能和子代理使用** (#21968)
- **浏览器Agent锁恢复** (#22232)

### 集成和性能提升
集成相关开发迫在眉睫：
- **IDE集成问题** (#28019)
- **代码审计工具性能** (#22745)
- **VirtualizedList组件优化** (#27636)
- **多语言网页获取支持** (#27996)

### 监控和评估系统
质量体系建设是亮点：
- **组件级评估测试** (#24353)
- **子代理轨迹可视化** (#22598)
- **专用工具注册和评估** (#28113)

## 6. 开发者关注点

### 主要功能痛点：
1. **Agent机制模式识别**：子代理在达到最大轮次后报告为成功导致工作流程混乱。用户希望获得更准确的终止状态报告和置信度指标。

2. **安全漏洞响应**：代码审计子代理可能存在的权限提升漏洞，以及Auto Memory系统中的信息泄露问题成为安全关注焦点。

3. **IDE集成功能**：VSCode扩展中的身份验证问题影响用户体验，用户希望获得更稳定的集成和用户友好错误处理。

4. **性能瓶颈处理**：终端调整大小时的闪烁问题，简单命令执行后卡住的问题，以及Web获取的乱码问题影响用户体验。

5. **监控和审计需求**：用户希望获得更好的监控工具，包括子代理轨迹分享、组件级评估数据和专用工具注册系统的可视化效果。

6. **多语言支持增强**：对于非英语（尤其是中文、日文）网页内容的获取，用户希望获得更好的编码支持和错误处理。

7. **文档和故障排除**：Linux环境安装问题和身份验证错误信息存在用户友好性问题，需要更清晰的指导和文档支持。

8. **长期运行服务支持**：对于Cather服务、Cloud Run Webhook和长时间运行的工作流程，需要更好的锁恢复和状态保存机制。

综合来看，当前Gemini CLI社区致力于在安全、性能和用户体验之间取得平衡，希望在提升Agent机制可靠性和安全性水平的同时，改善终端用户集成体验。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI社区动态日报（2026‑06‑25）**

---

### 1. 今日速览
- 社区在过去 24 h 内无新版本发布，但出现了 5 条新 Issue 和 2 条已合并的 PR，其中两条严重影响 CLI 使用体验的 bug 被标记为 **OPEN**，并得到活跃讨论。  
- 关键问题围绕 **循环读取文件、使用量计算异常、MCP 服务器路径冲突** 与 **上下文压缩导致的 token 浪费**，用户反馈频繁。

---

### 2. 版本发布
> 未发现 2026‑06‑24‑2026‑06‑25 期间的新版本发布，维持当前 stable 版本。

---

### 3. 社区热点 Issues（共 5 条）

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| **[#640](https://github.com/MoonshotAI/kimi-cli/issues/640)** | **[bug] Kimi CLI stuck in reading one file again and again and stuck in a loop** | 导致 CLI 在特定配置下进入死循环，阻塞工作流。 | 14 条评论、1 个 👍，作者已确认并提供了复现步骤，社区呼吁修复。 |
| **[#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994)** | **[OPEN] kimiCode用量计算有问题** | 订阅会员仅 2 h 即耗尽配额，计费逻辑与文档不符。 | 7 条评论、7个 👍，用户质疑 “按 token 计费” 与实际使用不匹配，引发广泛讨论。 |
| **[#2473](https://github.com/MoonshotAI/kimi-cli/issues/2473)** | **[CLOSED] web bug** | `kimi web` 指令在特定环境下报错，影响 Web 交互。 | 已关闭，但报告的错误仍为后续相似问题的参考。 |
| **[#2469](https://github.com/MoonshotAI/kimi-cli/issues/2469)** | **[CLOSED] `kimi web` starts MCP servers from the CLI installation directory, breaking workspace-relative MCP tools** | MCP 服务器路径错误导致子工具失效，影响多工程工作区。 | 已关闭，社区认为是关键的 workspace 兼容性问题。 |
| **[#2472](https://github.com/MoonshotAI/kimi-cli/issues/2472)** | **[OPEN] [enhancement] # Context compaction reloads system prompt and project instructions, wasting ~20k tokens** | 上下文压缩后系统提示被重新加载，导致约 20k token 额外消耗。 | 0 条评论、0 👍，但因 token 浪费显著，被视为性能瓶颈的热点。 |

> **选取理由**：上述 Issue 直接影响 CLI 的稳定性、计费公平性以及资源使用效率，是当前社区最迫切关注的议题。

---

### 4. 重要 PR 进展（共 2 条）

| # | 标题 | 合并状态 | 关键改动 | 链接 |
|---|------|----------|----------|------|
| **[#1942](https://github.com/MoonshotAI/kimi-cli/pull/1942)** | **fix(mcp): propagate MCP configs to subagents and resume immediately** | 关闭 (已合并) | 为子代理传播 MCP 配置，解决恢复会话时的加载问题。 | [PR #1942](https://github.com/MoonshotAI/kimi-cli/pull/1942) |
| **[#1377](https://github.com/MoonshotAI/kimi-cli/pull/1377)** | **feat: add vim-style j/k keyboard navigation for approval and question…** | 关闭 (已合并) | 为批准/提问交互添加 Vim‑style 上下键导航，提升键盘操作体验。 | [PR #1377](https://github.com/MoonshotAI/kimi-cli/pull/1377) |

> 这两项合并后，CLI 在多代理场景的配置传播更可靠，且提供了更友好的交互方式。

---

### 5. 功能需求趋势

从本轮 Issue 中可提炼出以下 **核心功能需求**：

1. **可靠的文件读取与循环防护**：使用者期望在特象限下避免无限循环读取文件。  
2. **更透明、符合预期的使用量计费**：社区希望计费模型与实际 token 消耗保持一致，避免“2 h 只能问 2 次”的误解。  
3. **Workspace‑aware MCP 服务器**：需要确保 MCP 服务器在子目录中正常工作，不受全局路径污染。  
4. **上下文压缩优化**：减少系统提示与项目指令的重复加载，降低 token 消耗。  
5. **IDE/编辑器集成**：尤其是 Vim‑style 键盘导航的需求，表明用户希望更像 IDE 的快捷体验。

总体来看，**性能提升、计费透明化、Workspace 兼容性** 以及 **交互体验**（例如键盘导航）是社区最关注的方向。

---

### 6. 开发者关注点

- **痛点**：多次报告的 **无限读取文件循环**、**使用量计算不公平**、以及 **MCP 路径冲突**，均被标记为 **高优先级 bug**。  
- **高频需求**：在评论区普遍提到**需要更细粒度的配额说明**以及**更智能的上下文管理**（如只在必要时触发压缩）。  
- **改进建议**：社区呼吁 **提供更详细的日志**（便于定位循环问题）以及 **支持自定义 token 上限**，以防止意外耗尽资源。

---  

> **结论**：本日的社区活动集中在 **Bug 修复与功能优化** 上，尤其是 **循环读取、计费透明、Workspace 兼容** 三大核心痛点。后续维护团队需在 **代码稳定性**、**计费模型清晰度** 与 **资源使用效率** 之间取得平衡，以满足活跃开发者的期望。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报**（2026-06-25）

---

### 1. 今日速览

Pi 社区今日亮点包括：OpenAI-Codex 连接可靠性问题备受关注（69 条讨论），多家厂商新供应商适配工作加速（本地 LLM 扩展、亚马逊 Bedrock Mantle），子代理配置及并行执行模式得到优化，TUI 层多项平台兼容性 bug 持续修复。总体工作围绕**可靠性、供应商支持、UI/UX 稳定性和开发者体验**展开。

> **GitHub Releases:** 今日无新正式版本发布。

---

### 2. 版本发布

> *暂无最新版本发布。*

---

### 3. 社区热点 Issues（按讨论热度排序）

| # | 标题 & 状态 | 评论 / 👍 | 最新动态摘要 | 为什么重要 | 社区反馈 |
|---|--------------|-----------|--------------|--------------|--------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **[OPEN][inprogress] openai-codex 连接可靠性问题** | 69 / 30 | TUI 频繁卡在“Working…”，无法收到流式回复，唯有按 Esc 强制中止。 | 直接影响用户交互流畅度，是当前首要稳定性问题。 | 大量用户报告频发，认为需要改进错误恢复逻辑和超时处理。 |
| [#3357](https://github.com/earendil-works/pi/issues/3357) | **[OPEN] 官方本地 LLM 提供者扩展** | 28 / 37 | 动态拉起模型列表（`{baseUrl}/models`），支持 llama.cpp/ollama/LM Studio 等。 | 丰富本地推理生态，降低厂商依赖。 | 社区支持声量高，认为体验提升显著。 |
| [#5653](https://github.com/earendil-works/pi/issues/5653) | **[OPEN][inprogress, to-discuss] 移出 Shrinkwrap** | 16 / 0 | `@earendil-works/pi-ai` 与 `@earendil-works/pi-coding-agent` 重复安装导致模块级 Map 分裂。 | 消除依赖冗余，避免注册表冲突和运行时隐性 bug。 | 目前仅 16 条讨论，社区希望加快迁移并行工作。 |
| [#5363](https://github.com/earendil-works/pi/issues/5363) | **[OPEN] 添加 amazon-bedrock-mantle 提供者** | 14 / 4 | 新增 OpenAI 兼容 API 提供者 (`bedrock-mantle.{region}.api.aws/openai/v1/responses`)，支持 GPT‑5.5/5.4 等模型。 | 拓展云端模型接入能力，填补 Converse API 空白。 | 引发少量关注，认为新供应商需进一步测试验证。 |
| [#5291](https://github.com/earendil-works/pi/issues/5291) | **[CLOSED][bug] 会话与 Anthropic 企业版订阅一起“Working…” 卡住** | 7 / 2 | 会话偶发“Working…” 状态，中断/重试有时生效，有时需要较长时间。 | 直接影响企业级用户使用体验。 | 用户报告后期待修复指引，在等待修复时采取临时方案。 |
| [#6019](https://github.com/earendil-works/pi/issues/6019) | **[CLOSED][bug] OpenAI Responses 中途出现可重试错误时未重试** | 4 / 0 | 流式回复开始后收到 provider 错误（OpenAI 提示可重试），Pi 以 `stopReason: "error"` 结束消息，放弃重试。 | 导致用户会话意外中断，丢失上下文。 | 提出后初步认同，后续 PR 正在修复。 |
| [#6038](https://github.com/earendil-works/pi/issues/6038) | **[CLOSED][bug,no-action] termux 下横竖屏切换时 TUI 卡住** | 4 / 0 | `/model` 命令与 TUI 响应均冻结，疑似终端复位时机问题。 | 移动端用户的重要障碍，影响所有 termux 用户。 | 目前无 Action，但已有社区方案尝试修复。 |
| [#5992](https://github.com/earendil-works/pi/issues/5992) | **[CLOSED][bug,no-action] Pi 崩溃："value.startsWith is not a function"** | 3 / 0 | 会话加载时自动完成报错，导致整个进程崩溃。 | 严重影响用户加载历史会话能力。 | 经排查为自动完成项逻辑 bug，后修复。 |
| [#4690](https://github.com/earendil-works/pi/issues/4690) | **[CLOSED][bug] termux: 终端输出自动滚动至末尾** | 3 / 0 | 请求过程中无法滚动查看历史输出，新响应到来时 UI 强制回弹至末尾。 | 降低了终端的实用性，尤其对日志分析而言。 | 社区提出后，提出“滚动锁定”选项。 |
| [#6060](https://github.com/earendil-works/pi/issues/6060) | **[CLOSED][untriaged] TUI 统计条渲染时报错：content is not iterable** | 2 / 0 | 工具调用类助手消息渲染时，`estimateTokens` 进入 `content` 属性处理报错。 | 影响 token 使用统计 UI，需修复遍历逻辑。 | 用户报告并提出修正方案，后进入修复流程。 |

*(其他 39 个 Issue 讨论热度较低，均已在后续恢复。)*

---

### 4. 重要 PR 进展（按合并时间排序）

| PR | 作者 | 状态 | 主要功能 / 修复 | 影响 |
|---|--------|---------|-------------------|--------|
| [#5509](https://github

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026‑06‑25）

## 1️⃣ 今日速览  
- **v0.19.2‑nightly** 正式发布，包含核心 bug 修复（Web Fetch JSON 回退）和发布脚本改进。  
- 社区活跃度高，27 条 Issue 近期更新，其中涉及模型切换安全、跨设备任务持久化、以及 UI/CLI 稳定性等核心痛点。  
- 多项关键 PR 进入评审，重点围绕 **IDE 兼容性、远程 LSP 状态、Voice Dictation 可配置化** 以及 **Telemetry 敏感信息限制** 等方向。

---

## 2️⃣ 版本发布  

### 📦 v0.19.2‑nightly.20260625.b2f11b735  
**主要更新**  
| 类别 | 内容 |
|------|------|
| **core** | fix: `web_fetch` 在 JSON API 返回 415 时回退至文本模式，提升外部数据获取可靠性。 |
| **release** | 自动化发布脚本更新，统一 `v0.19.2` 与 `v0.19.2‑preview.0` 的 changelog 生成方式。 |
| **serve** | 新增 **remote LSP status** 路由，便于外部监控 LSP 服务健康状态。 |

> 完整发布日志 👉 https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260625.b2f11b735  

---

## 3️⃣ 社区热点 Issues（精选 10 条）

| # | 标题 | 关键点 | 社区热度（评论/👍） | 链接 |
|---|------|--------|-------------------|------|
| 5838 | **Allow user to adjust agent‑initiated cmd timeout** | 需求在长时间运行的后台任务中防止意外超时终止。 | 5 / 0 | https://github.com/QwenLM/qwen-code/issues/5838 |
| 5837 | **Last response from agent gets cut off** | UI 渲染截断导致信息丢失，影响调试与审查。 | 4 / 0 | https://github.com/QwenLM/qwen-code/issues/5837 |
| 5836 | **Create‑todos 持久化到项目目录** | 跨设备、多人协作场景的任务同步需求。 | 3 / 0 | https://github.com/QwenLM/qwen-code/issues/5836 |
| 5819 | **升级后自动切换更高单价模型导致费用异常** | 触发意外模型切换与中文繁体输出，直接影响成本与可用性。 | 3 / 0 | https://github.com/QwenLM/qwen-code/issues/5819 |
| 5834 | **Source deletion path traversal 漏洞** | 安全漏洞可绕过工作区限制，风险极高。 | 2 / 0 | https://github.com/QwenLM/qwen-code/issues/5834 |
| 5823 | **/loop cron tasks fire silently, no visibility** | 后台任务缺少监控，导致用户难以管理自动化流程。 | 2 / 0 | https://github.com/QwenLM/qwen-code/issues/5823 |
| 5841 | **Self‑paced /loop should treat LoopWakeup as fallback** | 事件驱动唤醒与定时唤醒冲突，影响任务调度正确性。 | 2 / 0 | https://github.com/QwenLM/qwen-code/issues/5841 |
| 5800 | **Static TUI mode overwrites tall replies** | 长回复被隐藏，严重影响终端交互体验。 | 3 / 0 | https://github.com/QwenLM/qwen-code/issues/5800 |
| 5816 | **Voice dictation: keyterms file configurable** | 开发者希望自定义 ASR 偏置词库，以提升口述准确率。 | 2 / 0 | https://github.com/QwenLM/qwen-code/issues/5816 |
| 5840 | **VSCode Extension “Internal error: Connection error.”** | Extension 失联影响日常开发流程，迫切需要定位根因。 | 2 / 0 | https://github.com/QwenLM/qwen-code/issues/5840 |

> **为何值得关注**：这些 Issue 直接关系到 **成本控制、跨设备协作、UI/CLI 稳定性以及安全**，且都有多位贡献者积极讨论，显示出社区对这些痛点的共识。

---

## 4️⃣ 重要 PR 进展（精选 10 条）

| # | 标题 | 类别 | 关键改动 |
|---|------|------|----------|
| 5828 | **feat(core): add bundled extension creator skill** | 功能 | 为 Qwen Code 引入 `extension‑creator` 技能，帮助快速生成与本地测试插件。 |
| 5817 | **feat(cli): support configurable keyterms file for voice dictation** | 功能 | 新增 `general.voice.keytermsFile` 设置，用户可自行管理 ASR 偏置词库。 |
| 5804 | **feat(telemetry): Make sensitive span attribute limit configurable** | 配置 | 将默认敏感属性截断上限提升至 1 MiB，并提供 `telemetry.sensitiveSpanAttributeMaxLength` 配置。 |
| 5818 | **fix(web‑shell): stabilize active prompt loading state** | 修复 | 处理 SSE 中断/重连、页面刷新等场景下的 Prompt 加载状态，提升 Web UI 稳定性。 |
| 5835 | **fix(core): preserve the selected model when re‑applying a provider install plan** | 修复 | 防止重新执行 provider 安装计划时意外切换活跃模型，保证用户模型选择不被覆盖。 |
| 5809 | **refactor(cli): Split serve server routes** | 重构 | 将 `qwen serve` 的路由职责拆分至独立模块，提升代码可维护性。 |
| 5778 | **feat(cli): add /model --vision for a fallback vision model** | 功能 | 新增 `/model --vision <model-id>`，在仅文本模型下提供视觉模型后备。 |
| 5661 | **fix(ide): validate QWEN_CODE_IDE_SERVER_PORT before reading lock file** | 安全 | 检查端口环境变量防止路径注入，避免锁文件路径越界。 |
| 5783 | **fix(core): reject userinfo URLs in WebFetch validation** | 安全 | 拒绝带有 `userinfo` 的 URL（如 `https://user:pass@host`），防止凭证泄露。 |
| 5839 | **chore(cli): drop redundant home‑directory startup warning** | 维护 | 移除在用户主目录启动时的冗余警告信息，提升启动体验。 |

> **共性**：本轮 PR 重点在 **安全加固（WebFetch、IDE 端口、路径遍历）**、**CLI/IDE 使用体验提升（模型切换、Vision 支持、Voice 参数化）** 以及 **Web/Terminal UI 稳定性**。

---

## 5️⃣ 功能需求趋势  

| 趋势方向 | 具体需求 | 体现的 Issue/PR |
|----------|----------|----------------|
| **跨设备/多端同步** | 任务清单、记忆、计划持久化到项目目录；多设备共享状态。 | #5836、#5263 |
| **模型管理与成本控制** | 调整 agent 命令超时；防止自动升级高价模型；Vision 模型后备。 | #5838、#5819、#5778 |
| **IDE 与 LSP 深度集成** | 远程 LSP 状态路由、IDE 配置隔离、端口安全校验。 | PR #5828、#5661、#5809 |
| **交互体验（UI/CLI）** | TUI 长回复渲染、快捷键提示本地化、状态行默认开启、Voice dictation 可定制词库。 | #5800、#5789、#5816、PR #5817、#5802 |
| **安全与合规** | 防止路径遍历删除、WebFetch URL 过滤、敏感 telemetry 限长。 | #5834、#5783、PR #5804、#5661 |
| **自动化与后台任务** | /loop 计时器可见性、LoopWakeup 事件化、Cron 任务管理。 | #5823、#5841、#5806 |

---

## 6️⃣ 开发者关注点（痛点 & 高频需求）

1. **成本与模型选择不透明** – 自动切换至更贵模型会导致意外费用，迫切需要显式确认与可调超时。  
2. **跨设备任务持久化缺失** – `todos`、`memories` 等本地文件不被 Git 管理，导致换机后丢失。  
3. **UI/CLI 稳定性** – 长输出被截断、快捷键提示不匹配实际键位、TUI 渲染闪烁等问题频繁被报告。  
4. **安全漏洞** – 路径遍历删除与 WebFetch 用户信息泄漏被标记为高危，需要快速修补。  
5. **IDE/远程服务可观测性** – 开发者希望通过路由或状态接口实时监控 LSP 与后端服务健康。  
6. **自定义化语音输入** – 语音识别关键词库硬编码限制了专业领域的使用，需求已在 PR 中实现。  

> **建议**：在下一个迭代（v0.19.3）中优先解决模型切换确认、跨项目持久化以及 UI 渲染稳定性，同时继续强化安全检查与监控接口。

--- 

*本日报基于过去 24 小时的 GitHub Release、Issues 与 Pull Requests 数据整理，供 Qwen Code 开发者与社区成员快速把握项目动态。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI 社区动态日报（2026‑06‑25）**  

---

### 今日速览
- 过去 24 小时内没有新版本发布，社区活动主要集中在 **Issue 讨论** 与 **PR 合并** 上。  
- 高频话题仍是 **提供商/模型路由**、**Fleet/子智能体架构** 以及 **交互确认（Approval）机制** 的稳定性与易用性。  
- 今日新增的 PR #3566 着重改进工具转录行的可读性，体现了对 TUI 信息展示细节的持续打磨。

---

### 版本发布
> 无新版本（过去 24 小时内无 Release）。

---

### 社区热点 Issues（精选 10 条）

| 编号 | 标题 / 核心内容 | 为什么重要 | 社区反应（评论/点赞） | 链接 |
|------|----------------|------------|----------------------|------|
| #3275 | **CodeWhale 过度介入，自问自答偏离用户意图** | 揭示了代理在自主循环中失控的回归问题，直接影响任务可控性。 | 12 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/3275 |
| #3222 | **v0.8.65：选中路由推理流样式覆盖内联思考块** | 为 OpenAI‑compatible 网关的 `\[\]\` 块提供正确的渲染，提升推理可视化。 | 11 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/3222 |
| #3063 | **v0.8.59：TUI 鼠标报告泄漏、运行时安全及 issue/PR 队列** | 鼠标报告泄漏在 macOS 上导致资源异常；是 stabilization 版的关键修复点。 | 11 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/3063 |
| #3205 | **v0.8.65：Fleet 模型类、自动装载、语义路由角色** | 构建跨 TUI/CLI/subagents/Fleet 的统一模型选取器，是 Fleet 自动化的基石。 | 10 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/3205 |
| #3461 | **v0.8.65：MCP 重复服务器实例生命周期及 doctor 覆盖** | 单条 `mcp.json` 产生两个进程（一个孤儿），浪费内存并共享 stdio，影响可靠性。 | 8 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/3461 |
| #2608 | **v0.8.65 EPIC：分离 provider facts、model facts、offerings、路由解析** | 从根本上解决提供商身份与模型身份混用的问题，为后续路由原子化奠定基础。 | 8 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/2608 |
| #2300 | **v0.8.65：多模型兼容性、提供商文档及自动 Fleet 装载选择** | 需要更清晰的文档以区分 `provider=vllm` 与 `provider=openai`，并实现自动装载。 | 7 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/2300 |
| #3084 | **v0.8.65：提供商描述符、wire‑protocol 适配器及一致性测试** | 使提供商行为可数据化、可测试，并被路由解析消费，是 #2608 的执行面。 | 7 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/3084 |
| #3167 | **v0.8.65：Fleet 配置文件用于代理角色、装载、权限与委托** | 统一术语（FleetProfile、FleetRole 等），避免命名体系重复，提升用户感知一致性。 | 7 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/3167 |
| #3192 | **提交至 agentclientprotocol/registry** | 将 CodeWhale 注册到官方 Agent 客户端协议注册表，便于 Zed 等 IDE 一键安装。 | 7 评论 / 0 👍 | https://github.com/Hmbown/DeepSeek-TUI/issues/3192 |

> **观察**：评论最多的 Issue 集中在 **代理行为失控（#3275）**、**路由与推理呈现（#3222、#3084）**、**Fleet 子系统（#3205、#3167）**，以及 **底层可靠性（#3063、#3461）**，表明社区正在把精力从功能扩展转向 **稳定性、可控性和清晰的架构边界**。

---

### 重要 PR 进展（精选 10 条）

| PR 编号 | 标题 / 核心改动 | 功能或修复说明 | 链接 |
|---------|----------------|----------------|------|
| #3566 | **Clarify condensed tool transcript rows** | 保持工具身份在紧凑转录行中可见；抑制仅含控制参数的默认摘要（如 `max_count`、`timeout_ms`），避免成为误导性标签；在密集视图中加入分组工具名。 | https://github.com/Hmbown/DeepSeek-TUI/pull/3566 |
| #3526 | **[codex] enforce main‑backed release tags** | 确保 release 只能从已合入 `main` 的 commit 打标签，防止孤立分支发布导致的版本不一致。 | https://github.com/Hmbown/DeepSeek-TUI/pull/3526 |
| #3551 | **Clarify tool details shortcut hints** | 将模糊的 `Alt+V/v` 提示替换为明确的动作描述（如 “Alt+V opens details”）；保留 macOS Option‑V 输入，但 UI 文本统一为 “Option+V”。 | https://github.com/Hmbown/DeepSeek-TUI/pull/3551 |
| #3548 | **[codex] fix(tui): tolerate unsupported bracketed paste** | 对未标记的 Windows 旧控制台自动禁用 bracketed paste；在 TUI 恢复/暂停/清理路径中做最佳努力处理；更新终端怪癖报告并加回归测试。 | https://github.com/Hmbown/DeepSeek-TUI/pull/3548 |
| #3287 | **[codex] docs(runtime-api): document app‑server no‑auth flag** | 在 `docs/RUNTIME_API.md` 中说明 `codewhale app-server --http` / `--mobile` 的 `--insecure-no-auth` 标志，保持与 `codewhale serve` 的兼容性。 | https://github.com/Hmbown/DeepSeek-TUI/pull/3287 |
| #3241 | **[codex] accept dollar skill aliases** | 允许在作曲器开头使用 `$skill-name` 直接触发技能；加入对应的补全项和内联 `$skill` 选项；保留原有 `/skill` 及 `/<skill>` 形式的向后兼容。 | https://github.com/Hmbown/DeepSeek-TUI/pull/3241 |
| #2344 | **fix(tools): raise tool search default results** | 将延迟工具搜索的默认结果上限从 5 提升至 20（正则 & BM25），并提供可选 `max_results` 参数（默认 20，上限 100），覆盖默认、显式限制、上限及 schema 契约的测试。 | https://github.com/Hmbown/DeepSeek-TUI/pull/2344 |
| #2340 | **fix(tui): treat slash‑space input as message text** | 将以 `/` 后跟空格的输入视为普通消息文本而非斜杠命令；保留纯 `/` 和 `/help`、`/model …` 等真命令路径；为 `/ hello` 及前导空格 `  / h…` 添加回归覆盖。 | https://github.com/Hmbown/DeepSeek-TUI/pull/2340 |
| #1764 | **fix(tui): restore cancelled prompt on ctrl‑c** | 记录进入活动请求前的最后一个提案；在 Ctrl+C 取消时将其恢复到作曲器中，光标置于末尾；保留用户在请求期间输入的草稿；复用相同的本地取消状态处理 Ctrl+C/Esc。 | https://github.com/Hmbown/DeepSeek-TUI/pull/1764 |
| #3236 | **[codex] add DeepInfra provider support** | 添加 DeepInfra 作为新提供商，包括 runtime、TUI、CLI、TOML 别名 wiring 以及 provider‑registry 文档漂移检查，闭环 #3231。 | https://github.com/Hmbown/DeepSeek-TUI/pull/3236 |

> **趋势**：本批 PR 多数聚焦于 **交互细节（提示、快捷键、粘贴处理）**、**发布流程安全** 以及 **提供商生态的扩展（DeepInfra）**，说明在核心路由与 Fleet 基础趋稳后，团队开始补强 **用户体验** 与 **插件化能力**。

---

### 功能需求趋势（从所有 Issues 中提炼）

| 需求方向 | 体现的 Issue / PR | 说明 |
|----------|-------------------|------|
| **提供商 / 模型路由解耦 & 原子化** | #2608, #3084, #3384, #3385, #3439（智谱 GLM‑5.2） | 社区希望 provider、model、offering 之间有清晰边界，路由切换不波及全局状态。 |
| **Fleet / 子智能体架构完善** | #3205, #3167, #3154, #3166, #3367 | 需要统一的角色/槽位/装载模型、权限委托以及用户定义 persona。 |
| **交互确认（Approval）流程易用性** | #3466（取消审批 modal），#3275（自问自答失控） | 用户反复被弹窗打扰，期望更智能的免确认或可配置的确认阈值。 |
| **TUI 可靠性与资源泄漏** | #3063（鼠标报告泄漏），#3461（MCP 双进程），#3548（bracketed paste） | 关注底层 I/O、终端特性以及后台进程生命周期。 |
| **多模型 & 本地提供商支持** | #2300, #3439, #3236（DeepInfra），#3069（蓝色主题更名） | 除了云端模型，社区强烈希望接入更多本地/区域模型（如智谱）以及新的推理服务。 |
| **文档 & 可发现性** | #3087（README 重写），#2300（提供商文档），#3287（runtime‑api 文档） | 随着功能复杂度上升，清晰的使用手册和 provider 注册表成为刚需。 |
| **工具透明度与调试** | #3566（工具转录行），#3551（工具详情提示） | 用户希望在 TUI 中能够快速定位工具执行细节，减少歧义。 |

---

### 开发者关注点（痛点 & 高频需求）

1. **控制代理自主行为** – #3275 表明自问自答、越权执行是主要痛点，开发者期望更严格的「等待用户确认」机制或可配置的自主度阈值。  
2. **审批（Approval）频率过高** – #3466 显示每次操作都需要确认影响使用体验；社区倾向于 **基于上下文或风险等级的智能免确认**。  
3. **资源泄漏与进程孤儿** – #3063（鼠标报告）和 #3461（MCP 双进程）反馈底层资源管理仍需加强，尤其是跨平台（macOS/Windows）表现。  
4. **路由切换的原子性与状态一致性** – #2608 系列 Issue 持续被引用，说明在 provider/model 切换时出现状态不一致导致的 bug 是开发调试的主要来源。  
5. **文档与发现性** – 多次提到 README、提供商文档以及 agentclientprotocol 注册的需求

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*