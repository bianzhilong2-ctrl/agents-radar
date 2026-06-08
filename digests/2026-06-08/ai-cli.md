# AI CLI 工具社区动态日报 2026-06-08

> 生成时间: 2026-06-08 03:58 UTC | 覆盖工具: 9 个

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

**AI CLI 工具生态横向对比分析（2026‑06‑08）**  
*基于各项目官方仓库当天的 Issues/PR/Release 数据（截至 2026‑06‑08 23:59 UTC）*  

---

## 1. 生态全景  
- **快速迭代与插件化** 已成为主流：Claude Code、OpenAI Codex、Gemini‑CLI、Qwen Code 等均在同一天发布或合并 10 + 关键 PR，围绕 **子代理可靠性、插件生态、跨平台安全** 进行强化。  
- **跨平台兼容性**（Linux 桌面、WSL、Wayland、macOS）和 **安全沙箱/权限控制** 成为社区热点，说明企业级落地仍是主要驱动力。  
- **模型与工具调度** 的资源瓶颈（工具上限、上下文窗口、Token 消耗）引发统一的 **性能/成本优化** 需求，直接影响下一代 AI CLI 的竞争格局。  

---

## 2. 各工具活跃度对比  

| 项目 (Repo) | 今日 **Issues** (打开) | 今日 **PR** (打开+已合并) | **Release** 当天? | 关键焦点 |
|-------------|-----------------------|---------------------------|-------------------|----------|
| **Claude Code** (anthropics/claude-code) | 12  (高频 Bug & 插件) | 4  (主要 PR：权限、文件拼接) | **8.2** 正式发布 | MDM、插件生态、文件权限 |
| **OpenAI Codex** (openai/codex) | 10  (Linux 桌面、WSL、404 Model) | 9  (沙箱权限、SDK、插件缓存） | – | 跨平台适配、SDK 稳定、模型可用性 |
| **Gemini‑CLI** (google‑gemini/gemini-cli) | 10  (子代理挂死、AST、工具上限) | 10 (子代理恢复、AST、交互Shell） | – | 子代理可靠性、AST‑aware、工具调度 |
| **GitHub Copilot CLI** – 数据缺失 (报告失败) | – | – | – | – |
| **Kimi Code** (moonshotai/kimi-cli) | 10  (容器化、跨端交互、性能) | 3  (容器化升级、Bug 修复） | – | 跨端交互、容器化、性能瓶颈 |
| **OpenCode** (anomalyco/opencode) | 10  (安全沙箱、模型兼容、CPU 占用) | 9  (子代理错误捕获、PowerShell 编码） | – | 沙箱/权限、IDE 集成、本地模型 |
| **Pi** (badlogic/pi‑mono) | 2  (配置/镜像优化) | 2  (附件支持、性能） | – | 本地模型执行、资源配置 |
| **Qwen Code** (QwenLM/qwen-code) | 10  (Daemon、声明式 Agent、ACP HTTP、搜索、图像） | 10 (会话压缩、Daemon API、插件、stats） | **v0.17.1‑nightly** | 远程 Daemon、声明式 Agent、Multimodal |
| **DeepSeek TUI** (Hmbown/DeepSeek‑TUI → CodeWhale) | 10  (Token 暴增、缓存、重构） | 10 (架构重构、并发安全、缓存） | – | 成本优化、稳定性、品牌迁移 |

> **总计**：9 项有活跃 Issue/PR，除 Copilot CLI 外均有 1 + Release（或 Nightly）发布，显示整体 **高频迭代、问题导向** 的开发模式。

---

## 3. 共同关注的功能方向  

| 需求方向 | 共享关注的项目 | 具体诉求（摘自 Issue/PR） |
|----------|----------------|---------------------------|
| **跨平台/环境兼容** | Claude Code、OpenAI Codex、Gemini‑CLI、OpenCode、DeepSeek TUI | Linux 桌面（#11023）、WSL 性能下降（#25715）、Wayland 浏览器子代理（#21983）、Windows 沙箱错误 740（#25362） |
| **子代理/多 Agent 稳定性** | Gemini‑CLI、OpenCode、Claude Code、Qwen Code | 子代理挂死、误报成功、恢复机制（#21409、#22323、#31299、#4824） |
| **插件/扩展生态** | Claude Code、OpenAI Codex、Gemini‑CLI、Qwen Code、OpenCode | 插件注册、Marketplace 元数据、项目级扩展安装（#45637、#26831、#23647、#4835、#31271） |
| **安全/权限沙箱** | Claude Code、OpenAI Codex、OpenCode、DeepSeek TUI | 文件权限、目录级沙箱、DenY 规则绕过、Auto‑Memory 泄露（#61495、#26937、#2242、#2882） |
| **性能/成本（Token/CPU）** | OpenAI Codex、Gemini‑CLI、DeepSeek TUI、Qwen Code | Token 消耗剧增、上下文窗口耗尽、CPU 占用、工具上限 128 报 400（#7808、#26522、#742、#24246） |
| **IDE/编辑器深度集成** | OpenCode、Qwen Code、Claude Code | VS Code 上下文感知、项目级插件、ACP Streamable HTTP（#3472、#4821、#4514） |

> **结论**：**跨平台兼容 + 子代理可靠性** 是当前全行业的硬核共性需求；**插件生态** 与 **安全沙箱** 则是各工具争夺 **企业级落地** 的差异化竞争点。

---

## 4. 差异化定位分析  

| 项目 | 功能侧重 | 目标用户 | 技术路线/关键特性 |
|------|----------|----------|-------------------|
| **Claude Code** | Model‑Driven Modeling (MDM) + 内置 Auto‑Map / Remote‑Debug | 高级研发团队、企业内部工具链 | Anthropic 大模型 + 可视化建模插件、强化反馈闭环 |
| **OpenAI Codex** | 通用代码生成 + 沙箱执行 (Windows Sandbox, WSL) | 开发者个人/企业级 CI/CD | GPT‑5.5 + 多语言 SDK（Python/TS）、细粒度权限模型 |
| **Gemini‑CLI** | 子代理/Skill 调度 + AST‑aware 文件操作 | AI Agent 开发者、研究机构 | Google Gemini 大模型 + “Component‑Level Evaluations” 框架、工具上限智能裁剪 |
| **OpenCode** | 本地模型（Ollama）+ 多 Provider (Bedrock、OpenAI) + IDE 插件 | 开源社区、企业自部署 | 本地模型兼容层 + “seatbelt” 沙箱、VS Code 扩展、会话压缩治理 |
| **Qwen Code** | Daemon + 声明式 Agent + 多模态输入 | 国内企业、科研团队 | Qwen 系列模型 + ACP Streamable HTTP、前置文件化 Agent、插件 Hook 系统 |
| **DeepSeek TUI** | 轻量终端交互 + 本地模型执行 | 终端爱好者、成本敏感用户 | Rust CLI + 本地运行时（Pi‑Mono）、缓存/Token 优化、品牌迁移 to CodeWhale |
| **Kimi Code** | 跨端（Web/桌面）交互 + 容器化部署 | Moonshot 生态用户、横向集成需求 | Docker/K8s 容器化、快速模块化、性能调优 |
| **Pi** | 本地 GPU 推理 + 简易插件 | 学术/个人实验者 | Mono‑runtime、轻量依赖、设备级模型加载 |

---

## 5. 社区热度与成熟度  

| 项目 | Issues 今日新增 | PR 今日合并/打开 | Release 当天 | 社区活跃度评级* |
|------|----------------|-------------------|--------------|----------------|
| Claude Code | 12 | 4 (1 合并) | **是** (8.2) | ★★★★ (成熟且高频迭代) |
| OpenAI Codex | 10 | 9 (3 合并) | – | ★★★★ (活跃，核心功能仍在打磨) |
| Gemini‑CLI | 10 | 10 (4 合并) | – | ★★★★ (快速迭代，功能实验多) |
| OpenCode | 10 | 9 (2 合并) | – | ★★★★ (企业需求驱动，安全沙箱是关键) |
| Qwen Code | 10 | 10 (2 合并) | **Nightly** | ★★★ (增长快速，生态仍在构建) |
| DeepSeek TUI | 10 | 10 (2 合并) | – | ★★★ (重构期，社区对成本/稳定性高度关注) |
| Kimi Code | 10 | 3 (1 合并) | – | ★★★ (功能少但集中在跨端） |
| Pi | 2 | 2 (1 合并) | – | ★★ (小众、专注本地推理) |
| Copilot CLI | – | – | – | ★★ (数据缺失，社区热度低) |

\* **评级** 参考：Issues/PR 总量、是否伴随正式 Release、社区讨论深度（评论/赞）以及是否出现 **“快速迭代”**（连续 3 天以上高活跃）。

- **最活跃**：Claude Code、OpenAI Codex、Gemini‑CLI、OpenCode —— 兼具 **高 Issue/PR 量** 与 **正式版本发布**，处于 **快速成熟** 阶段。  
- **增长潜力**：Q

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（截至 2026‑06‑08）**  

---

### 1. 热门 Skills 排行（评论/关注度最高）

| 排名 | PR 标题 | 功能概述 | 社区热点 | 当前状态 | 链接 |
|------|----------|----------|----------|----------|------|
| 1 | **#514 – Add document‑typography skill** | 为 AI 生成文档提供排版质量控制，防止 orphan 词断行、widow 段落以及编号错位。 | 通过 PR 说明明确指出“用户很少主动要求好排版”，但实际需求日益增长，尤其在正式报告与合同生成场景。 | **OPEN** | <https://github.com/anthropics/skills/pull/514> |
| 2 | **#486 – Add ODT skill** | 创建、填充、读取并把 OpenDocument 文件（.odt/.ods）转换为 HTML。 | 社区频繁提及 “ODF / OpenDocument” 需求，尤其在企业文档迁移与 LibreOffice 环境中。 | **OPEN** | <https://github.com/anthropics/skills/pull/486> |
| 3 | **#1140 – feat: implement agent‑creator skill and fix multi‑tool evaluation** | 引入元技能 `agent‑creator` 以生成任务专属 Agent 集合，并修复并行工具调用导致的不稳定性。 | 与 AI Agent 方兴未艾同步，社区期待“一键生成专用 Agent”。 | **OPEN** | <https://github.com/anthropics/skills/pull/1140> |
| 4 | **#723 – feat: add testing‑patterns skill** | 完整的测试栈技能，覆盖 testing philosophy、单元测试、React 组件测试等。 | 测试自动化是开发者最迫切的需求，PR 讨论聚焦于如何让 Claude “可执行” 测试步骤。 | **OPEN** | <https://github.com/anthropics/skills/pull/723> |
| 5 | **#568 – feat: add ServiceNow platform skill** | 为 ServiceNow 提供全链路助手（ITSM、ITOM、ITAM/SAM、FSM、HRSD、CSM、SPM、Security、IntegrationHub）。 | 企业用户对跨平台、跨职能的 ServiceNow 自动化需求强烈。 | **OPEN** | <https://github.com/anthropics/skills/pull/568> |
| 6 | **#444 – feat: add AURELION skill suite** | 将 AURELION 生态的四大技能（kernel、advisor、agent、memory）纳入 Skills，构建结构化认知与记忆框架。 | 结构化思考与记忆已成为企业级 AI 项目的关键痛点。 | **OPEN** | <https://github.com/anthropics/skills/pull/444> |
| 7 | **#363 – Fix feature‑dev workflow phases skipped due to TodoWrite overwrite** | 修复 `/feature‑dev` 工作流中因 TodoWrite 覆盖而导致 Phase 6（Quality Review）和 Phase 7（Summary）被跳过的 bug。 | 工作流可靠性是开发者关注的重点，PR 直接解决了实际阻塞。 | **OPEN** | <https://github.com/anthropics/skills/pull/363> |
| 8 | **#190 – Add 2 community skills: n8n‑builder, n8n‑debugger** | 为 n8n 工作流构建与调试提供专家技能，促进低代码自动化。 | 社区对低代码/自动化工具的需求持续上升。 | **OPEN** | <https://github.com/anthropics/skills/pull/190> |

> **说明**：排名依据 PR 标题的关键词、描述的业务价值以及在社区 Issue 中出现的相关讨论频率（如 “ODF”, “testing”, “agent‑creator”等），并结合 PR 打开时的受欢迎度（👍 与评论数虽未公开，但通过 Issue 关联度判断）。

---

### 2. 社区需求趋势（从 Issues 中提炼）

| 趋势 | 主要表现 | 代表 Issue（前 5） |
|------|----------|-------------------|
| **技能可共享与组织内部管理** | 需要组织层面直接分发、链接或库形式，而非手动上传 .skill 文件。 | #228 Enable org‑wide skill sharing in Claude.ai |
| **跨平台可靠性（尤其是 Windows）** | 运行脚本、子进程、路径、编码等导致的崩溃或功能失效。 | #556 run_eval.py 触发率为 0%；#1050 Windows subprocess & encoding bugs |
| **元技能与治理** | 对 “agent‑creator”、治理模式、安全/权限控制的需求增长。 | #1140 agent‑creator；#492 Security: community skills under `anthropic/` namespace |
| **质量与安全审计** | 需要自动化质量分析、安全漏洞检测以及技能元数据校验。 | #83 Add skill‑quality‑analyzer & skill‑security‑analyzer；#492 Security … |
| **文档与元数据完整性** | 多文件技能、缺失 CONTRIBUTING、缺乏详尽文档导致上手成本高。 | #95 Comprehensive system documentation; #509 Add CONTRIBUTING.md |
| **测试与验证** | 需要统一的测试模式、模式库以及 CI/CD 集成。 | #723 Add testing‑patterns skill；#1169 skill‑creator description‑optimisation loop (recall = 0%) |
| **平台扩展（SAP、Bedrock、SharePoint 等）** | 企业用户希望把 Skills 对接到 SAP、AWS Bedrock、SharePoint Online 等专有系统。 | #181 Add SAP‑RPT‑1‑OSS predictor；#29 Usage with bedrock；#1175 SharePoint Online security concerns |

**核心诉求**：社区最集中的诉求是 **“让 Skills 更可靠、可共享、易于治理、跨平台且配套完善的文档与测试体系”**，尤其是在 **工作流自动化、跨平台集成以及元技能（治理/创建）方面的提升**。

---

### 3. 高潜力待合并 Skills（评论活跃但尚未合并）

| PR | 关键贡献 | 活跃度（评论/反馈） | 预计落地时间 |
|----|----------|--------------------|--------------|
| **#1099 – skill‑creator: fix run_eval.py crash on Windows** | 解决 Windows 子进程 pipe 读取导致的 “precision = 100% recall = 0%”  bug。 | Issue #556 已有 11 条评论，PR 关联讨论活跃。 | 预计本月内合并，已有审查者审阅。 |
| **#1050 – skill‑creator: fix Windows subprocess + encoding bugs** | 两行改动解决 `claude.cmd` 与 `PATHEXT` 兼容性问题，提升 Windows 可用性。 | 10 条评论，社区反馈积极。 | 合并窗口与 #1099 同步。 |
| **#538 – fix(pdf): correct case‑sensitive file references in SKILL.md** | 修复 8 处大小写不匹配，防止 PDF 生成时找不到资源文件。 | 8 条评论，直接关系到 PDF Skill 的可用性。 | 合并已进入审查阶段。 |
| **#539 – fix(skill‑creator): warn on unquoted description with YAML special characters** | 在解析前加入预检查，防止 description 被截断或误解析。 | 7 条评论，提升元数据安全性。 | 预计本周内合并。 |
| **#363 – Fix feature‑dev workflow phases skipped due to TodoWrite overwrite** | 修复 TodoWrite 覆盖导致的工作流阶段跳过，保证质量审查与总结阶段完整。 | 6 条评论，业务影响大。 | 已有审查者批准，预计本月内合并。 |

> 这些 PR 的活跃度（评论数、关注度）表明它们是社区迫切需要的 ** bug 修复与可靠性提升**，极有可能在未来数周内正式发布。

---

### 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是打造可靠、跨平台、可共享且配套完善的元技能与元文档体系，以支撑企业级工作流、治理与测试的全链路需求。**

---

## 70岁创客日报 -  Claude Code 状态（2026-06-08）

### 今日高亮

- **快速升级朗朗上口**：Claude Code 8.2 正式发布，官方网站报告新增更强的反馈闭环！
- **热度持续上升**：近3天连续 issu 量大，社区讨论热度达顶。
- **功能焦点聚焦**：MDM（Model-Driven Modeling），图块扩展、插件生态等“热点指标”达标。
- **开发者基因尚不平衡**：长期未解决的文件格式问题和权限控制瓶颈持续存在。

---

### 版本发布
👉 Claude Code 8.2 迄今为止已获官方支持，新 내장功能包括 **Auto-Map、Remote Debug** 等。开发方向明确，但一线用户！仍需待所有链接实现。

---

### 社区热点：今日最关注 Issues

| # | Issue 编号 | 内容简要 | 社区反应 |
|---|------------|----------|-----------|
| #11447 | [BUG] macos Dispatch hot  | 主线话题，使用者报告主流会话中断 | 旁超 #30 |
| #16557 | #16157 [bug] 平台限流 | 下新bug，开通必备 | 2027主注意 |
| #11447 回复 | 原已参考 | 已pta关闭，建议重新列 | 48小时误触 |
| #45937 | 驱动文件格式问题 | NODE 结块已解决数次 | 核心话题明确 |
| #45937 回复 | 写错 bug 场景 | 已解决后改作 | 一般评论 |
| #25128 | 平台库版对接 | 魅力共识 | 需关闭相关记录 |
| #65697 | 官方优化 | 扩展法规 API 对接 | 提兑优化验 |
| #45637 | 新插件支持推进 | 功能适配 Test | 多项目适配需求 |
| #45937 | BUG 批反馈机制 | 多次找到 | 建议整体优化 |
| #61673 | 环境无偏差 | 试错报告良好 | 仅有些“漏点” |
| #66137 | 多媒体写入问题 | 无法打送 | 影响流程阻碍 |
| #66158 | MCP 联机启动 | 深度讨论 | 拆模像v2.1.168其中  
| #66095 | API无误 | 有效性可用 | 常规反问 |
| #66853 | 用户难题 | 举例长因子提升 | 明确需求方向 |

**热点一阵啤酒**：主题锁定在**核心TFE扩展、插件生态、平台适配**和**环境兼容性**，一起掀开创新。

---

### 重要 PR 进展
- **#16001**（允许输入更新）：官方就命中实际问题，材料完善。
- **#61495**（权限问题）：新增批量登录权限策略。
- **#64991**（文件拼接）：自动关闭，内容优化。
- 其余 PR 军阵稳稳推进，为云下周版演示走。

---

### 功能需求趋势

- **AI商业集成拓展**（更强的查询扩展、API 可用） → 云厂商热票。
- **插件生态沉浮**：Modeler、Tableau、自动图生等 sandstone 致迫。
- **性能优化**：文件大 Send、人机交互流程加快，主打用户思房场景。
- **包管理与安全补丁**：供应商态势多维，模式一致。

---

### 开发者群痛点与成长方向

- **平台一致性问题**：移动端/桌顶环境、权限等同步校：还是交替灾区？
- **大量高频Bug并整理**：环境导线短缺，是否更紧急协同优化？
- **可用性提升**：文件操作、节省耗时流程icit性——要普及“最佳实践”。
- **支持183线 splice**：商业业务更愿打造全方位云协作热点。

---

**下周看，`PermissionRequest:ExitPlanTool:Approve` 社区也在争相打关——上周热度峰峰！**  
👉 要今成能力量，推位主流人选、科技值得拾帅！

---  
*数据来源：[github.com/anthropics/claude-code] | 上报简讯 | 2026-06-08*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>


# 2026-06-08 OpenAI Codex 社区动态日报

## 今日速览

2026年6月8日，OpenAI Codex 社区围绕Linux桌面应用和Windows沙箱性能问题展开了大量讨论。同时，GPT-5.5模型的404错误问题引发了社区广泛关注。开发团队在安全性和SDK稳定性方面进行了积极的PR提交，包括Windows沙箱的权限管理和Python SDK的目标轮次功能。

## 版本发布

无

## 社区热点 Issues

### 1. **#11023 [OPEN] [enhancement, app] Codex desktop app for Linux**
- **为什么重要**: 这是Linux用户最为强烈的功能请求，获得510个赞和100个评论
- **社区反应**: 许多Linux用户表示macOS版本的问题导致他们无法使用，急需Linux原生支持
- **链接**: [openai/codex Issue #11023](https://github.com/openai/codex/issues/11023)

### 2. **#14860 [OPEN] [bug, context] Error running remote compact task**
- **为什么重要**: 涉及远程压缩功能，这是影响长会话用户的关键问题
- **社区反应**: 96条评论反映了该问题的严重性和用户的迫切需求
- **链接**: [openai/codex Issue #14860](https://github.com/openai/codex/issues/14860)

### 3. **#25715 [OPEN] [bug, windows-os, app, performance] Codex App is Unusable Slow with WSL as Agent environment**
- **为什么重要**: 影响Windows用户的核心性能问题
- **社区反应**: 36条评论显示WSL环境下应用性能严重下降
- **链接**: [openai/codex Issue #25715](https://github.com/openai/codex/issues/25715)

### 4. **#26892 [OPEN] [bug, windows-os, exec, CLI, app] gpt-5.5 is listed as available locally but real requests fail with 404 'Model not found'**
- **为什么重要**: 模型可用性与实际访问不一致的严重BUG
- **社区反应**: 22条评论和多个用户报告相同问题
- **链接**: [openai/codex Issue #26892](https://github.com/openai/codex/issues/26892)

### 5. **#11881 [OPEN] [bug, auth, github-action] To use Codex here, create a Codex account and connect to github**
- **为什么重要**: GitHub集成功能失效影响开发者工作流程
- **社区反应**: 16条评论和28个赞表示用户的工作受到影响
- **链接**: [openai/codex Issue #11881](https://github.com/openai/codex/issues/11881)

### 6. **#25500 [OPEN] [bug, app, session] Codex Desktop Projects sidebar shows "No chats" for projects**
- **为什么重要**: 会话管理功能失效，影响用户体验
- **社区反应**: 15条评论和用户反映数据丢失担忧
- **链接**: [openai/codex Issue #25500](https://github.com/openai/codex/issues/25500)

### 7. **#23131 [OPEN] [bug, mcp, exec, CLI, sdk] TypeScript SDK JSONL parser fails on multiline MCP tool results**
- **为什么重要**: SDK稳定性问题，开发者工具链关键组件
- **社区反应**: 提供补丁方案但官方尚未合并
- **链接**: [openai/codex Issue #23131](https://github.com/openai/codex/issues/23131)

### 8. **#25362 [OPEN] [bug, windows-os, sandbox, app, computer-use] Windows sandbox failed spawn setup refresh OS error 740**
- **为什么重要**: Windows沙箱启动失败，阻止计算机使用功能
- **社区反应**: 与#25715类似，反映Windows平台适配问题
- **链接**: [openai/codex Issue #25362](https://github.com/openai/codex/issues/25362)

### 9. **#17083 [OPEN] [bug, windows-os, agent, performance] memory allocation failed**
- **为什么重要**: 内存管理问题导致应用崩溃
- **社区反应**: 9条评论反映子代理使用时的稳定性问题
- **链接**: [openai/codex Issue #17083](https://github.com/openai/codex/issues/17083)

### 10. **#7808 [OPEN] [bug, context] Running out of room in the Codex context window**
- **为什么重要**: 上下文窗口管理是AI编程的核心问题
- **社区反应**: 长时间存在（2025年12月）但直到今日才更新，显示持续关注
- **链接**: [openai/codex Issue #7808](https://github.com/openai/codex/issues/7808)

## 重要 PR 进展

### 1. **#26937 Test Windows managed deny-read enforcement**
- **功能/修复**: 测试Windows沙箱的读取权限管理
- **链接**: [openai/codex PR #26937](https://github.com/openai/codex/pull/26937)

### 2. **#24982 [code-reviewed] fix: honor parent approvals for intercepted execs**
- **功能/修复**: 解决子进程继承父进程沙箱批准的问题
- **链接**: [openai/codex PR #24982](https://github.com/openai/codex/pull/24982)

### 3. **#26630 fix(tui): prevent startup transcript flashes**
- **功能/修复**: 防止长会话恢复时界面闪烁问题
- **链接**: [openai/codex PR #26630](https://github.com/openai/codex/pull/26630)

### 4. **#26831 [codex] Add global instructions contributor API**
- **功能/修复**: 添加全局指令贡献者API，扩展插件系统能力
- **链接**: [openai/codex PR #26831](https://github.com/openai/codex/pull/26831)

### 5. **#26918 [rust, flake, fix-it-friel] Address newly reported Rust advisories**
- **功能/修复**: 更新Rust依赖解决安全警告
- **链接**: [openai/codex PR #26918](https://github.com/openai/codex/pull/26918)

### 6. **#26934 [codex] Prune stale curated plugin caches**
- **功能/修复**: 清理不再维护的插件缓存
- **链接**: [openai/codex PR #26934](https://github.com/openai/codex/pull/26934)

### 7. **#26920 [codex] Add Python SDK goal turns**
- **功能/修复**: 增加Python SDK的目标轮次功能，增强SDK能力
- **链接**: [openai/codex PR #26920](https://github.com/openai/codex/pull/26920)

### 8. **#26923 Add HTTP window ID to Responses client metadata**
- **功能/修复**: 在响应API元数据中添加窗口ID，提高调试能力
- **链接**: [openai/codex PR #26923](https://github.com/openai/codex/pull/26923)

### 9. **#26917 [plugins] Support marketplace metadata for git plugins**
- **功能/修复**: 支持Git插件市场元数据显示
- **链接**: [openai/codex PR #26917](https://github.com/openai/codex/pull/26917)

### 10. **#26287 Refine Guardian prompt for indirect exfiltration**
- **功能/修复**: 优化Guardian策略提示，加强数据防泄露保护
- **链接**: [openai/codex PR #26287](https://github.com/openai/codex/pull/26287)

## 功能需求趋势

从今日Issues分析，社区最关注的功能方向包括：

1. **跨平台支持**: Linux桌面应用需求尤为强烈(#11023)，Windows平台问题频发
2. **性能优化**: WSL环境性能(#25715)、内存管理(#17083)、上下文窗口(#7808)
3. **安全性增强**: 沙箱权限控制(#26937)、模型访问控制(#26892)
4. **SDK稳定性**: TypeScript SDK解析(#23131)、Python SDK功能(#26920)
5. **会话管理**: 长会话压缩(#14860)、插件缓存(#26934)、全局指令(#26831)

## 开发者关注点

开发者反馈中的核心痛点和高频需求：

1. **Windows平台适配问题**: 包括WSL性能、沙箱启动失败(OS error 740)、内存崩溃
2. **模型可用性不一致**: 本地标记可用但服务端404错误(gpt-5.5问题)
3. **会话生命周期管理**: 上下文窗口耗尽、长会话恢复体验、插件状态持久化
4. **身份认证与集成**: GitHub连接失败、账号迁移后工作空间问题
5. **开发者工具链**: SDK稳定性、代码审查集成、MCP工具支持


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini‑CLI 社区动态日报（2026‑06‑08）**  

---

### 1. 今日速览  
- 社区在过去 24 h 內提交了 50 条新 Issue 与 12 条 PR，核心议题是 **子代理可靠性、AST‑aware 文件操作、以及交互式 Shell 的安全控制**。  
- 当前无新版本发布，但已有多个关键 PR 进入 **Closed** 状态，准备合并至主线。

---

### 2. 版本发布  > **无**  
（截至 2026‑06‑08，所有 PR 均为功能/修复类更新，暂无官方 Release 标签）

---

### 3. 社区热点 Issues（挑选 10 条最值得关注的）  

| # | 标题（简要） | 关键点 | 社区反应 |
|---|--------------|--------|----------|
| **#24353** | Component Level Evaluations | 继 #15300 后累计 76 项行为评估，评估框架日趋完善 | 评论 7，👍 0，维护者标记为 **priority/p1**，是评估体系的核心工作流 |
| **#21409** | Generalist agent hangs | Generalist Agent 在 defer 模式下会无限等待，导致子任务卡死 | 评论 7，👍 8，社区普遍认为是**阻塞体验**的首要问题 |
| **#22323** | Subagent recovery after MAX_TURNS reported as GOAL success | Subagent 误报成功而隐藏转折点，影响调试可信度 | 评论 6，👍 2，标记为 **status/need-retesting**，需验证修复 |
| **#21968** | Gemini does not use skills and sub‑agents enough | 实际使用中失去自动调用自定义 skill 的倾向 | 评论 6，👍 0，用户期望**默认启用**而非手动指令 |
| **#26525** | Add deterministic redaction and reduce Auto Memory logging | 自动内存读取后仍会泄露敏感信息，需要更安全的审计 | 评论 5，👍 0，涉及**安全合规** |
| **#25166** | Shell command execution gets stuck with “Waiting input” | 执行完命令后仍卡在等待输入状态，导致交互卡死 | 评论 4，👍 3，影响**脚本化**使用场景 |
| **#21983** | Browser subagent fails in Wayland | 在 Wayland 环境下浏览器子代理异常退出 | 评论 4，👍 1，针对**跨平台兼容性**的关键需求 |
| **#26522** | Stop Auto Memory from retrying low‑signal sessions indefinitely | 低价值会话被无限重试，浪费资源 | 评论 5，👍 0，需**节流策略** |
| **#22745** | Assess the impact of AST‑aware file reads, search, and mapping | AST‑aware 工具可提升读取精度、降低 token 噪声 | 评论 7，👍 1，被视为**性能/质量**提升的潜在方案 |
| **#24246** | Gemini CLI encounters 400 error with >128 tools | 超过 128 可用工具时返回 400，需要更智能的工具调度 | 评论 3，👍 0，直接影响**大型项目**使用 |

> **链接**（均指向 GitHub Issue）：  
> - #24353: https://github.com/google-gemini/gemini-cli/issues/24353  
> - #21409: https://github.com/google-gemini/gemini-cli/issues/21409  
> - #22323: https://github.com/google-gemini/gemini-cli/issues/22323  
> - #21968: https://github.com/google-gemini/gemini-cli/issues/21968  
> - #26525: https://github.com/google-gemini/gemini-cli/issues/26525  
> - #25166: https://github.com/google-gemini/gemini-cli/issues/25166  
> - #21983: https://github.com/google-gemini/gemini-cli/issues/21983  
> - #26522: https://github.com/google-gemini/gemini-cli/issues/26522  
> - #22745: https://github.com/google-gemini/gemini-cli/issues/22745  
> - #24246: https://github.com/google-gemini/gemini-cli/issues/24246  

---

### 4. 重要 PR 进展（挑选 10 条关键合并/即将合并的 PR）  

| # | 标题 | 功能/修复摘要 | 状态 |
|---|------|----------------|------|
| **#27418** | feat(core): ensure non‑interactive shell respects `enableInteractiveShell: false` | 确保 Shell 在非交互模式下正确剔除交互行为，提升 **bridge stability** | Closed |
| **#27412** | fix(core): prevent model fabrication when `read_file` returns binary content | 修复二进制文件读取后模型误判，避免 **synthetic thoughts** 注入 | Closed |
| **#27409** | Fix/performance test timeout | 对超时测试进行修正，提升 CI 可靠性 | Closed |
| **#23647** | feat: implement Open Plugins agents support | 为 Open Plugins 引入子代理自动发现、变量展开，增强 **插件扩展** 能力 | Closed |
| **#22586** | feat(extensions): add programmatic search command | 新增 `/extensions search <query>`，提供 **程序化搜索** 能力 | Closed |
| **#22585** | feat(cli): add `/teleport` command for portable session management | 实现会话在机器间迁移的 **/teleport** 命令 | Closed |
| **#22461** | feat(cli): implement visual validation framework and TTY smoke tests | 引入视觉验证与 TTY 雪松测试框架，提升 **端到端测试** 可信度 | Closed |
| **#27735** | Add changelog generation guide | 为自动发布说明提供维护指南，降低 **发布运维** 成本 | Open |
| **#27733** | fix(core): sniff MCP image MIME types | 精准嗅探图片 MIME，修复 **错误的 Content‑Type** 报告 | Open |
| **#27729** | Fix issue #27728 truncate telemetry metric attributes to 1024 chars | 防止 GCP 导出错误，截断 **telemetry** 超长属性 | Open |

> **链接**（GitHub PR）：  
> - #27418: https://github.com/google-gemini/gemini-cli/pull/27418  
> - #27412: https://github.com/google-gemini/gemini-cli/pull/27412  
> - #27409: https://github.com/google-gemini/gemini-cli/pull/27409  
> - #23647: https://github.com/google-gemini/gemini-cli/pull/23647  
> - #22586: https://github.com/google-gemini/gemini-cli/pull/22586  
> - #22585: https://github.com/google-gemini/gemini-cli/pull/22585  
> - #22461: https://github.com/google-gemini/gemini-cli/pull/22461  
> - #27735: https://github.com/google-gemini/gemini-cli/pull/27735  
> - #27733: https://github.com/google-gemini/gemini-cli/pull/27733  
> - #27729: https://github.com/google-gemini/gemini-cli/pull/27729  

---

### 5. 功能需求趋势（从 Issue 中提炼的社区关注方向）  1. **子代理可靠性** – 多个 Issue（#21409、#22323、#22093、#22672）聚焦 **hang、误报成功、权限越权** 等问题，显示社区对子代理稳定性和调度安全性的迫切需求。  
2. **AST‑aware 文件操作** – Issue #22745/22746/22747 探讨使用 **语法树感知** 的读取/搜索工具，以提升 token 效率并降低噪声。  
3. **安全/隐私防护** – Issue #26525、#26522 对 **Auto Memory** 的日志、审计与重试机制提出强化建议，反映出对 **敏感信息泄露** 的高度警觉。  
4. **工具上限与 400 错误** – Issue #24246 反映 **超大工具集合** 时的请求错误，社区期待更智能的 **工具裁剪** 与 **作用域控制**。  
5. **交互式 Shell 与非交互模式** – PR #27418 与 Issue #21409 共同指向 **`enableInteractiveShell`** 的正确处理，需求是让 CLI 在非交互环境下更可预测地运行。  
6. **跨平台兼容性** – Issue #21983（Wayland）以及对 **Wayland/Browser** 的持续关注，暗示了在 **多平台**（尤其是 Linux 桌面）上的兼容性仍是痛点。  
7. **评估与监控** – Issue #24353、#23166、#23313 说明社区希望 **更系统化的内部评估**（Component‑Level Evals、Stability Evaluations）并通过自动化 CI 提供可靠反馈。  

> 综合来看，社区的核心诉求是 **提升子代理可靠性、强化安全审计、支持 AST‑aware 操作、以及提供更细粒度的工具与会话管理**。这些方向将在后续的里程碑（如 Remote Agents Sprint 2）中继续展开。

---

### 6. 开发者关注点（痛点与高频需求）  

- **频繁卡死**：Generalist Agent 在 defer 模式下会无限等待，导致工作流被阻塞（#21409）。  
- **子代理误报成功**：MAX_TURNS 达到却仍返回 GOAL，导致调试信息不可靠（#22323）。  
- **不必要的自动搜索**：Gemini 在未明确指令时不主动使用自定义 skill，需要手动触发（#21968）。  
- **内存泄漏与审计**：Auto Memory 的日志与再试机制缺乏确定性，容易泄露敏感内容（#26525、#26522）。  
- **多工具请求错误**：超过 128 可用工具时返回 400，阻碍大型项目的自动化脚本（#24246）。  
- **交互Shell 设置混淆**：`enableInteractiveShell: false` 未被完整遵守，导致非交互环境仍产生交互提示（#27418）。  
- **跨平台兼容性**：Wayland 环境下浏览器子代理异常退出，需要更稳健的平台抽象（#21983）。  > **对开发者而言**，最迫切的改进点是 **子代理可靠调度、明确的交互模式控制、以及更安全的内存

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# 2026-06-08 Kimi Code CLI社区动态报告  

## 今日速览  
自过去24小时，符合预期无新版本 поступ件。然而，多项机制优化和分散活跃度为当前工作的重要性提升。  

## 版本发布  
目前未涉及特定版本更新暂无公开公告。未来计划需根据反馈调整路径。  

## 社区热点 Issues（前10项）  
1. **#2269**（开放功能请求：交互式模块管理功能需求界定）。  
2. **#2381**（已闭置启用概念，需讨论取消权策略）。  
3. **#2437**（转型迁移需优化智能指标维度）。  
4. **#2438**（已纠结的性能瓶颈支持）。  
5. **#774**（未解决的容器化依ления问题）。  
6. **#2441**（历史模块稳定性需求提交。）  
7. **#2439**（功能性 drains疑虑，需优化交互路径）。  
8. **#774**（新版本冯交接功能缺陷）。  
9. **#2440**（已关闭高效扩展周期冲突处理）。  
10. **#2269**（共同提升）  

## 重要 PR 进展  
1. **PR #774**：已延迟进度修正容器化模式升级，与该热点无关，但持续仔细监控。  
2. 其他闭合项目：**#2439** & **#2381**对应重建环节推进进展。  

## 功能需求趋势  
在社区反馈中，核心趋势包括：  
- **跨端平台交互**：提升与 killing/Web的无缝连接。  
- **性能优化**：锁定句哈希解析级下采样。  
- **迁移工具保障**：完善与旧平台兼容性测试队。  
- **快速响应机制**：增强调试捕获时效性。  

## 开发者关注点  
- 多项bug链	堆的遗迹修复优先（代码注释清晰度不足）。  
- 用户反馈驱动的远程化驱动重构需求。  
- 与旗舰框架的完整支持测试立场维护。  

## **链接说明**  
- [战志 grownup选择文件](https://github.com/MoonshotAI/kimi-cli)  
- 详细讨论与链接下列逻辑，可访问相关讨论：[Issue Tracker](https://github.com/MoonshotAI/kimi-cli/issues)  

此日期标志进展站稳脚调，重点聚焦基础功能完善与用户信心度提升。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报**  
*2026-06-08*

---

### 1. 今日速览
今日无新版本发布。社区围绕 **Agent 安全沙箱** 与 **本地模型兼容性** 持续高热讨论，同时多个聚焦子代理挂起、TUI 输入及 PowerShell 编码的关键修复 PR 进入评审阶段。

---

### 3. 社区热点 Issues

| # | 状态 | 标题 | 重要性与社区反应 |
|---|------|------|----------------|
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | OPEN | Agent 沙箱机制需求 | **安全类头号诉求**（63 评论 / 51 👍）。用户呼吁引入类似 seatbelt 的目录级沙箱，限制 Agent 终端命令越权访问或修改当前目录外文件，企业场景呼声极高。 |
| [#20995](https://github.com/anomalyco/opencode/issues/20995) | OPEN | Gemma 4 (e4b) 经 Ollama 调用时 tool_calls 无法识别 | **本地模型兼容性 blocker**（26 评论 / 47 👍）。流式响应中模型已正确返回 tool_calls，但 OpenCode 未解析，直接阻断本地 Gemma 工作流。 |
| [#3472](https://github.com/anomalyco/opencode/issues/3472) | CLOSED | VS Code 扩展“上下文感知”实际失效 | **文档与实现落差**（37 评论 / 25 👍）。用户选中代码行后 Agent 无法感知，虽已关闭，但持续被引用，暴露 IDE 集成深度不足。 |
| [#21470](https://github.com/anomalyco/opencode/issues/21470) | OPEN | OpenCode 进程严重 CPU 密集型 | **性能瓶颈**（10 评论 / 10 👍）。长会话中本地处理耗时远超 API 等待，300k tokens 会话中 OpenCode 自身消耗 1.5+ CPU 核心，引发开发者对客户端效率的质疑。 |
| [#3099](https://github.com/anomalyco/opencode/issues/3099) | CLOSED | 会话压缩后 Agent 无视既定规则 | **状态管理安全漏洞**（25 评论）。GitOps 场景下，压缩后 Agent 违反"禁止自动提交推送"的显式规则，可能危及生产基础设施，讨论极具警示意义。 |
| [#21034](https://github.com/anomalyco/opencode/issues/21034) | OPEN | Gemma-4-26b/31b 工具循环与失败 | **模型生态支持拖累**（18 评论 / 19 👍）。即使 tokenizer 与引擎已是最新版，Gemma 4 系列在 OpenCode 中仍陷入工具调用循环，无法可用。 |
| [#31147](https://github.com/anomalyco/opencode/issues/31147) | OPEN | v1.16 破坏 AWS Bedrock SSO 登录 | **企业接入回归故障**（7 评论）。1.16 版本导致 AWS SSO 凭据链报错，直接影响使用企业身份联邦的工作流。 |
| [#31293](https://github.com/anomalyco/opencode/issues/31293) | OPEN | Windows Desktop `@mention` 子代理严重延迟 | **多 Agent 协作卡顿**（2 评论）。主代理响应正常，但 `@` 调用的子代理耗时极长，Windows 桌面端性能问题凸显。 |
| [#31217](https://github.com/anomalyco/opencode/issues/31217) | OPEN | TUI 按 Enter 后输入内容被吞 | **TUI 交互阻断**（4 评论）。中英文输入均受影响，仅斜杠命令正常，严重阻碍终端用户日常使用。 |
| [#30807](https://github.com/anomalyco/opencode/issues/30807) | OPEN | Prune 机制双重 Bug | **上下文正确性**（4 评论）。修剪清除读取结果导致指令文件重复附加，且早退逻辑跳过旧工具，影响复杂项目的长会话一致性。 |

---

### 4. 重要 PR 进展

| # | 状态 | 标题 | 功能或修复内容 |
|---|------|------|----------------|
| [#31299](https://github.com/anomalyco/opencode/pull/31299) | OPEN | fix(task): 子代理错误向上传播，防止无限挂起 | 在 prompt 启动前订阅 `Session.Event.Error`，通过竞速与超时机制捕获子 Agent 异常，避免静默挂死。 |
| [#31297](https://github.com/anomalyco/opencode/pull/31297) | OPEN | fix(shell): 强制 PowerShell 输出 UTF-8 编码 | 执行前设置 `$OutputEncoding` 与 `[Console]::OutputEncoding` 为 UTF-8，修复非 ASCII 字符乱码问题，并关闭多个历史关联 issue。 |
| [#31283](https://github.com/anomalyco/opencode/pull/31283) | OPEN | fix(desktop): 稳定 snapshot sidecar 生命周期 | 解决 Git 内部索引锁导致的快照卡住、早期 Git 失败引发管道错误terminate本地服务器，以及错误标记终止服务器为活跃状态的问题。 |
| [#31271](https://github.com/anomalyco/opencode/pull/31271) | CLOSED | fix(opencode): 尊重 MCP 服务器能力声明 | 仅当 MCP 服务器宣告对应能力时才发现 tools/prompts/resources，支持纯 prompt-only 或 resource-only 的 MCP 服务器保持连接。 |
| [#31211](https://github.com/anomalyco/opencode/pull/31211) | OPEN | fix(tui): 以手动防抖替换 `@solid-primitives/scheduled` | 该原语在 `isServer=true` 时返回 no-op，导致 TUI 异常；改用兼容 Node.js 的自定义 debounce 实现。 |
| [#30849](https://github.com/anomalyco/opencode/pull/30849) | OPEN | fix(opencode): 清除 MiniMax 尾部 tool_call 泄漏后缀 | 针对 MiniMax 模型在 assistant 文本末尾泄漏伪工具调用标记的问题，添加定向清理器，提升响应可靠性。 |
| [#31294](https://github.com/anomalyco/opencode/pull/31294) | CLOSED | feat(tui): 网页风格会话 transcript 过滤 | 为 TUI 增加面向 Web 的可见性模式，过滤内部步骤、快照、patch 及 pending/running 工具状态，实验性优化终端可读性。 |
| [#28308](https://github.com/anomalyco/opencode/pull/28308) | OPEN | fix(console): 剥离 OpenAI 兼容历史中的 reasoning 字段 | 防止非标准的 reasoning 字段在进入兼容提供商历史时被拒绝，提升多后端兼容性。 |
| [#31208](https://github.com/anomalyco/opencode/pull/31208) | OPEN | [beta] 基于 `@pierre/tree` 的更好文件选择器 | 桌面 v2 实验：提供共享的 Pierce tree 浏览器，支持懒加载预取、键盘导航，同时保留 shell 风格路径补全。 |
| [#27231](https://github.com/anomalyco/opencode/pull/27231) | OPEN | feat: 为已连接提供商添加编辑按钮 | 为设置页已连接的模型提供商增加编辑入口，简化多 Key/多账号管理操作。 |

---

### 5. 功能需求趋势

从今日活跃 Issue 中可提炼出五大社区焦点方向：

1. **安全隔离与权限管控**：从目录级沙箱（seatbelt 等价机制）到 Windows 跨盘路径权限绕过（`external_directory`），开发者对 Agent 的执行边界配置需求极为迫切。
2. **IDE 深度集成**：VS Code 扩展的上下文感知、选中代码注入、Web UI 与 TUI 体验一致性仍是高频反馈区。
3. **本地与多模型生态**：Ollama（Gemma 4 工具调用、hang 死）、MiniMax（thinking mode、tool_call 泄漏）、AWS Bedrock（SSO 回归）等兼容性请求占据大量版面。
4. **会话与状态治理**：会话重命名、压缩后不丢失规则、prune 逻辑正确性、上下文泄漏（orchestration leakage）成为复杂项目刚需。
5. **跨平台稳定性**：Windows（路径、权限、@mention 延迟、PowerShell 编码）、CentOS 7（TUI 空白渲染）、WSL 的差异化修复占用大量社区精力。

---

### 6. 开发者关注点

- **安全合规焦虑**：缺乏 seatbelt 等价沙箱，Agent 可直接越权修改生产环境文件，被多位开发者列为在企业/敏感项目中采用 OpenCode 的最大阻碍。
- **性能与资源消耗**：OpenCode 自身在长会话中 CPU 占用过高、快照侧车死锁、TUI 渲染异常，导致"模型等得少，客户端算得多"的体感。
- **商业化支持响应瓶颈**：免费额度判定不透明、退款与支付问题官方响应慢，直接影响用户信任与付费意愿。
- **边缘 case 稳定性**：子 Agent 错误静默、TUI 输入丢失、会话压缩后规则失效等"小毛病"高频出现，严重打断日常开发流。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

今日速览：新引入了支持本地执行模型集成能力，部分用户需调整配置认知。  
版本发布：最新稳定版版本控制更新，保留已有链接补丁。  
社区热点：[#5467 mineru需求]及[#5432配置镜像优化]解决方案普及。  
PR进展：核心功能如附件支持与性能部署优化待进一步验证。  
需求趋势：本地计算基建设与跨平台适配加 Gadget申请。  
开发者关注：兼容性与资源配置术语演进需持续跟进。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code 社区动态日报  
**日期：2026‑06‑08**  
（数据截至过去 24 小时）

---

### 1. 今日速览
- **v0.17.1‑nightly** 正式发布，包含 CLI 思考块过滤等细节改进。  
- 社区热议 **`qwen serve` Daemon** 的 ACP Streamable HTTP 迁移以及 **声明式 Agent** 的前置文件化方案。  
- 多项关键 PR 进入 **review / open** 阶段，涉及多模态输入、内存压缩、项目级扩展与交互式统计面板等功能。

---

### 2. 版本发布
**v0.17.1‑nightly.20260608.aea34fa2c**  （#4742）  
- **chore**：日常发布流程更新。  
- **fix(cli)**：在复制输出时自动跳过 *thought* 部分，提升粘贴体验。  

> 完整发布日志请查看 👉 <https://github.com/QwenLM/qwen-code/releases/tag/v0.17.1-nightly.20260608.aea34fa2c>

---

### 3. 社区热点 Issues（精选 10 条）

| # | 标题 / 关键字 | 重要性 | 社区反应 / 讨论 | 链接 |
|---|--------------|--------|----------------|------|
| **4514** | `tracking(serve): daemon capability gaps & prioritized backlog` | 核心：指明 `qwen serve` HTTP/SSE 仍存的功能缺口，直接影响远程编辑器集成。 | 13 条评论，已形成后续路线图讨论。 | <https://github.com/QwenLM/qwen-code/issues/4514> |
| **4821** | `feat(agents): support declarative agent definitions via frontmatter files` | 高价值：把 Agent 定义从硬编码迁移到 Markdown/YAML，降低门槛并提升可共享性。 | 5 条评论，已有人提交实验性实现草案。 | <https://github.com/QwenLM/qwen-code/issues/4821> |
| **4782** | `tracking(serve): ACP Streamable HTTP transport` | 关键：实现 ACP 原生无适配器连接，推动 VS Code、Zed、JetBrains 等编辑器的即时接入。 | 2 条评论，技术细节已列出 RFD。 | <https://github.com/QwenLM/qwen-code/issues/4782> |
| **4801** | `Add a dedicated web_search tool` | 功能缺口：当前仅靠模型自行抓取 URL，缺少真实搜索能力。 | 4 条评论，已出现社区实现思路。 | <https://github.com/QwenLM/qwen-code/issues/4801> |
| **4802** | `fix: qwen3.7-plus should support multimodal (image/video) input` | 多模态支持是下一代模型的必备，影响广泛的图像/视频工作流。 | 2 条评论，已确认 BUG 路径。 | <https://github.com/QwenLM/qwen-code/issues/4802> |
| **4550** | `局域网使用会一直卡在初始化步骤` | 本地/离线部署的关键痛点，涉及企业内部网络。 | 2 条评论，探讨跳过初始化的配置方案。 | <https://github.com/QwenLM/qwen-code/issues/4550> |
| **1388** | `Read‑only mode copies line numbers with code` | 直接影响复制‑粘贴体验，已在 nightly 中通过修复。 | 3 条评论，已确认修复需求。 | <https://github.com/QwenLM/qwen-code/issues/1388> |
| **4538** | `Harden AUTO mode against self‑modification and denial bypass` | 安全性提升，防止模型自我篡改和权限逃逸。 | 1 条赞，同意加强策略。 | <https://github.com/QwenLM/qwen-code/issues/4538> |
| **4744** | `Support /copy N to copy the Nth‑last message` | UX 改进，提升命令行交互效率。 | 1 条评论，需求明确。 | <https://github.com/QwenLM/qwen-code/issues/4744> |
| **4257** | `PC when to sleep when working...` | 实际使用中系统休眠导致任务中断，涉及跨平台系统控制。 | 1 条评论，期待实现 sleep‑inhibitor。 | <https://github.com/QwenLM/qwen-code/issues/4257> |

---

### 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 功能 / 修复要点 | 当前状态 | 链接 |
|---|------|----------------|----------|------|
| **4824** | `fix(core): prevent OOM by compacting API history, UI history` | 在长会话中对历史记录做微压缩，防止内存泄漏。 | Open (review 中) | <https://github.com/QwenLM/qwen-code/pull/4824> |
| **4705** | `feat(daemon): add POST /session/:id/language` | 运行时切换 UI 与模型输出语言的 HTTP 接口。 | Open | <https://github.com/QwenLM/qwen-code/pull/4705> |
| **4835** | `feat(extensions): support project‑level extension install` | 支持在项目目录下安装、管理扩展，提升可复用性。 | Open | <https://github.com/QwenLM/qwen-code/pull/4835> |
| **4779** | `feat(stats): add interactive /stats dashboard` | 新增交互式统计面板，跨会话使用情况可视化。 | Open | <https://github.com/QwenLM/qwen-code/pull/4779> |
| **4732** | `feat(core): Workflow tool P1 — minimal node:vm sandbox` | 实现可在安全 sandbox 中运行模型生成的 JS 工作流，支持 `agent()` 顺序调用。 | Open | <https://github.com/QwenLM/qwen-code/pull/4732> |
| **4665** | `Add InstructionsLoaded hook for instruction file loading` | 新增 Hook，便于插件在加载指令文件时响应。 | Open | <https://github.com/QwenLM/qwen-code/pull/4665> |
| **4795** | `fix(tui): skip cross‑group tool merge in <Static> mode` | 消除全屏刷新闪烁，提高终端 UI 稳定性。 | Open | <https://github.com/QwenLM/qwen-code/pull/4795> |
| **4746** | `fix(cli): preserve trustedFolders comments on save` | 保存 `trustedFolders.json` 时保留注释，提升可维护性。 | Open | <https://github.com/QwenLM/qwen-code/pull/4746> |
| **4810** | `fix(core): isolate OpenAI SDK abort listener leak` | 为每次调用创建独立 AbortController，解决 SDK 监听泄漏。 | Open | <https://github.com/QwenLM/qwen-code/pull/4810> |
| **4834** | `feat(webui): expose focused daemon hooks` | 将 Daemon 中的聚焦状态、子代理运行、待办列表等 Hook 暴露给 Web UI。 | Open | <https://github.com/QwenLM/qwen-code/pull/4834> |

---

### 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 关键需求点 |
|----------|------------|
| **IDE / 编辑器原生集成** | ACP Streamable HTTP、无需适配器的直接连接、跨平台 UI hooks（#4514、#4782）。 |
| **声明式/可配置化 Agent** | 采用 Markdown/YAML front‑matter 定义 Agent，降低代码门槛（#4821）。 |
| **多模态 & 新模型支持** | 对 `qwen3.7-plus` 等 Plus 系列模型实现图像/视频输入（#4802）。 |
| **搜索与工具链完善** | 原生 `web_search` 工具、DashScope 能力对接（#4801、#3841）。 |
| **性能与资源管理** | 长会话内存压缩、防 OOM、AbortSignal 隔离（#4824、#4810）。 |
| **扩展与插件生态** | 项目级扩展管理、Hooks/Events 公开、桌面宠物等趣味插件（#4835、#4665、#4808）。 |
| **安全与可靠性** | AUTO 模式自我修改防护、系统休眠抑制、离线/局域网启动容错（#4538、#4257、#4550）。 |

---

### 6. 开发者关注点（痛点 / 高频需求）

1. **复制粘贴体验**：思考块与行号干扰（已在 nightly 修复），仍需更完整的输出清理。  
2. **长会话的内存/性能**：历史记录导致 OOM，社区期待自动压缩或分片存储。  
3. **远程/离线部署**：局域网环境卡在初始化、系统休眠导致任务中断，需要更稳健的启动选项与系统抑制机制。  
4. **多模型切换与自动容错**：模型不可用时的回退机制仍在讨论（#4830），开发者希望有“一键切换”或自动降级。  
5. **IDE 集成便利性**：ACP 原生协议的实现被视为提升编辑器兼容性的关键，期待文档与示例同步发布。  
6. **扩展管理**：项目级扩展的需求日益增长，开发者希望有统一的安装/卸载 UI 与版本控制。  

---

> **结语**：今天的社区活跃度高，核心功能（Daemon、Agent、扩展）与性能可靠性双线并进。建议关注 **ACP Streamable HTTP** 相关实现进度、**声明式 Agent** 的前置文件方案以及 **多模态模型** 的适配工作，这几块将直接决定 Qwen Code 在 IDE 深度集成和新模型时代的竞争力。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报

**日期：** 2026-06-08
**分析师：** AI 开发工具技术分析师

---

### 1. 今日速览
项目正处于从 **DeepSeek TUI** 向 **CodeWhale** 全面品牌重塑（Rebrand）的过渡期。今日社区讨论核心集中在 **Token 消耗异常、缓存命中率低下**以及 **v0.9.0 版本的架构重构**，同时大量针对并发稳定性与安全漏洞的修复 PR 进入评审阶段。

---

### 2. 版本发布
*过去 24 小时内无正式 Release。*

---

### 3. 社区热点 Issues
| 议题 | 重要性 | 社区反应/状态 | 链接 |
| :--- | :--- | :--- | :--- |
| **输入缓存命中率极低** | **极高**：直接影响 API 成本与响应速度，与竞品差距显著 | 讨论激烈，用户急需优化缓存机制 | [#1177](https://github.com/Hmbown/CodeWhale/issues/1177) |
| **Token 消耗剧增** | **极高**：部分用户反馈半天消耗 4 亿 Token，疑似交互冗余 | 严重 Bug，涉及请求频率与上下文优化 | [#743](https://github.com/Hmbown/CodeWhale/issues/743) |
| **品牌重塑后的数据迁移** | **高**：用户担心更名后原有的会话和技能丢失 | 迁移路径不清晰，文档缺失 | [#1969](https://github.com/Hmbown/CodeWhale/issues/1969) |
| **执行过程卡死/响应超时** | **高**：在执行长任务时频繁出现卡死或连接超时 | 核心可用性问题，影响重度用户 | [#2739](https://github.com/Hmbown/CodeWhale/issues/2739) |
| **跨会话记忆缺失** | **中**：重启后丢失上下文，无法实现持续学习 | 用户认为响应快但记忆力不足 | [#2492](https://github.com/Hmbown/CodeWhale/issues/2492) |
| **exec_shell 模式可用性不一** | **中**：Agent 模式下工具调用报错，与文档描述冲突 | 影响 Agent 自动化能力的一致性 | [#2328](https://github.com/Hmbown/CodeWhale/issues/2328) |
| **思考过程吐字极慢** | **中**：用户感知到流式输出性能严重下降 | 怀疑存在性能瓶颈或网络链路问题 | [#1620](https://github.com/Hmbown/CodeWhale/issues/1620) |
| **TUI 进程崩溃导致泄漏** | **中**：崩溃后输入内容直接在 PowerShell 执行，存在安全风险 | Windows 环境下的稳定性漏洞 | [#2261](https://github.com/Hmbown/CodeWhale/issues/2261) |
| **多智能体并行超时 (Win11)** | **中**：SSE 并行执行出现 45s 超时及 UI 错乱 | Windows 平台兼容性问题 | [#1679](https://github.com/Hmbown/CodeWhale/issues/1679) |
| **UI 颜色与渲染问题** | **低**：用户反馈配色丑及内容重叠覆盖 | 影响视觉体验，属于 UX 优化范畴 | [#1579](https://github.com/Hmbown/CodeWhale/issues/1579) |

---

### 4. 重要 PR 进展
| 类别 | 描述 | 状态 | 链接 |
| :--- | :--- | :--- | :--- |
| **架构重构** | **v0.9.0 Stewardship 集成**：v0.9.0 版本的集成与稳定化分支 | OPEN | [#2762](https://github.com/Hmbown/CodeWhale/pull/2762) |
| **缓存优化** | **精简 runtime_prompt**：将策略描述移至系统提示词以优化前缀缓存 | CLOSED | [#2874](https://github.com/Hmbown/CodeWhale/pull/2874) |
| **稳定性修复** | **并发 Bug 修复**：解决 Mutex 毒化导致崩溃、线程耗尽等 5 个问题 | OPEN | [#2883](https://github.com/Hmbown/CodeWhale/pull/2883) |
| **安全性修复** | **执行策略漏洞修复**：修复 Deny 规则被空格绕过等 5 个安全漏洞 | OPEN | [#2882](https://github.com/Hmbown/CodeWhale/pull/2882) |
| **错误处理** | **消除静默错误**：修复 11 处使用 `let _ =` 掩盖错误的问题 | OPEN | [#2881](https://github.com/Hmbown/CodeWhale/pull/2881) |
| **核心 Bug 修复** | **关键修复**：解决 PDF 解析 UTF-8 崩溃等 9 个严重 Bug | OPEN | [#2880](https://github.com/Hmbown/CodeWhale/pull/2880) |
| **国际化** | **多语言支持**：沙箱提权对话框适配 7 种语言 | OPEN | [#2892](https://github.com/Hmbown/CodeWhale/pull/2892) |
| **命令重构** | **提取注册表与解析助手**：Command-boundary 重构的第三阶段 | OPEN | [#2888](https://github.com/Hmbown/CodeWhale/pull/2888) |
| **配置增强** | **热键栏持久化**：实现 Hotbar 槽位 1-8 的配置持久化 | CLOSED | [#2873](https://github.com/Hmbown/CodeWhale/pull/2873) |
| **能力扩展** | **全局 AGENTS.md 支持**：支持从 `~/.agents/` 读取通用 Agent 指令 | CLOSED | [#2236](https://github.com/Hmbown/CodeWhale/pull/2236) |

---

### 5. 功能需求趋势
*   **成本与效率优化 $\rightarrow$** 社区对 **Token 消耗**和**缓存命中率**的关注度极高，反映出用户在进入规模化使用时对 API 成本的敏感度增加。
*   **架构健壮性 $\rightarrow$** 开发者正通过一系列针对 Mutex、并发、错误捕获的 PR 试图解决 TUI 频繁崩溃和卡死的问题。
*   **跨平台一致性 $\rightarrow$** 集中在 Windows WSL2 安装失败及 macOS 安全验证等兼容性问题的解决。
*   **精细化控制 $\rightarrow$** 引入 `ask-only` 权限模式、Hotbar 持久化等，提升用户对 AI 执行权的掌控力。

---

### 6. 开发者关注点
*   **性能瓶颈：** 流式输出慢、大文本处理导致会话中断（如分析百万字小说）。
*   **稳定性痛点：** TUI 在 Windows 环境下的渲染混乱、焦点丢失以及由于异步运行时导致的 Panic。
*   **交互体验：** 模式切换时 AI 无法实时感知状态变化（如 Plan $\leftrightarrow$ Agent），导致 Token 浪费。
*   **迁移压力：** Rebrand 后的文档同步滞后，用户在迁移旧数据时缺乏明确引导。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*