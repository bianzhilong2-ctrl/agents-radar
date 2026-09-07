# AI CLI 工具社区动态日报 2026-09-07

> 生成时间: 2026-09-07 01:56 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告

**报告日期**：2026-09-07  
**数据来源**：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / Qwen Code / DeepSeek TUI（Pi 数据缺失，已剔除）

---

## 1. 生态全景

当前 AI CLI 工具市场已进入**深水区精细化竞争**阶段——主流工具（Claude Code、Copilot CLI、Gemini CLI、Codex）的社区动态已从"功能扩张"转向**稳定性打磨、跨平台兼容与 Agent 安全治理**。企业级用户对**资源管控、成本可控、会话可恢复**的需求显著上升，倒逼厂商在 OAuth 鉴权、Token 缓存、子代理编排等基础设施层投入更多工程资源。同时，Qwen Code、OpenCode、DeepSeek TUI 等后起之秀正以**架构重构（TUI 渲染层、MCP 协议、多 Agent 协作框架）**为切入口追赶头部，整体生态呈现出"头部稳基、中部追赶、底层协议趋同"的三层结构。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | 新版本 | 社区状态关键词 |
|------|------|------|------|------|
| **Claude Code** | 10+（TOP10），多超 100 评论 | 10（全部为 fix） | ✅ v2.1.263 | 安全拦截、性能卡顿、跨平台 Bug |
| **OpenAI Codex** | 30（Top30 by comments） | 20（均为 bot 内部清理） | ❌ 无 | Windows 稳定性、模型兼容性、配额焦虑 |
| **Gemini CLI** | 10 | 10 | ✅ v0.60.0-nightly | 代理鲁棒性、OAuth 异常、Auto Memory |
| **GitHub Copilot CLI** | 10 | 1 | ❌ 无 | BYOK 缓存失效、ACP 安全回归、WSL2 性能 |
| **Kimi Code CLI** | 5 | 1 | ❌ 无 | 远程控制、鉴权频发、跨平台 IDE 集成 |
| **OpenCode** | 10（多重复条目） | 10 | ❌ 无 | Go 订阅限额、TUI CPU 100%、Office 预览 |
| **Qwen Code** | 10 | 8 | ⚠️ v0.23.0-nightly（preview 发布失败） | OpenTUI 迁移、Web Shell 性能、遥测脱敏 |
| **DeepSeek TUI** | 37（全活跃） | 50 | ❌ 无（v0.9.13 收尾） | 架构重构、并行测试 flake、状态静默失败 |

**活跃度观察**：
- **DeepSeek TUI（Codewhale）** 与 **OpenAI Codex** 在 PR/Issue 绝对数量上领先，但 Codex 的 PR 几乎全部来自 `copyberry[bot]` 自动维护，反映其工程化程度高但社区参与度低。
- **Qwen Code** 的 8 条 PR 含金量最高，聚焦 OpenTUI 迁移与 Mesh 多智能体框架，属于架构级重构。
- **GitHub Copilot CLI** 与 **Kimi Code CLI** 当日更新最稀疏，可能处于版本间隙或 PR 审核周期。

---

## 3. 共同关注的功能方向

| 共同诉求 | 涉及工具 | 具体痛点 |
|------|------|------|
| **Agent 权限与安全治理** | Claude Code（#84352 安全拦截）、Copilot CLI（#4537 ACP 自动批准）、Qwen Code（#11180 PreToolUse 钩子失效）、DeepSeek TUI（#5931 会话 ID 静默失败） | Agent 误操作、未授权工具调用、安全拦截过于敏感 |
| **跨平台兼容性** | Claude Code（Windows 路径、WSL）、Codex（Windows 稳定性）、Gemini CLI（Windows -p/--print）、Copilot CLI（WSL2 31GB 内存）、Kimi（Zed ACP Windows 启动失败）、Qwen Code（Web Shell 移动端卡顿）、DeepSeek TUI（Windows 窗口阻塞 TUI 线程） | 几乎所有工具均存在 Windows / 移动端 / ARM 架构适配短板 |
| **提示缓存与成本控制** | Copilot CLI（#4720 BYOK 缓存静默失效，成本激增 5 倍）、OpenCode（多模型路由优化）、Gemini CLI（OAuth 缓存）、Codex（配额焦虑） | 企业用户对计费透明度、Token 经济性极度敏感 |
| **多 Agent / 子代理编排** | Claude Code（多代理资源失控）、DeepSeek TUI（Fleet 模型选择流）、Qwen Code（Mesh 框架）、OpenCode（异步子代理诚实执行） | 复杂工作流的并发协调、资源配额、状态一致性 |
| **会话持久化与恢复** | OpenCode（#47652 .git 删除后会话消失）、Claude Code（#67500 压缩后丢失规则）、Codex（#41874 历史会话丢失）、DeepSeek TUI（#5931 收据完整性）、Kimi（远程控制延续会话） | 长周期任务的上下文延续、跨设备工作流 |
| **IDE 集成与远程控制** | Claude Code（VS Code、Cowork）、Codex（Chrome 扩展）、Kimi（#1282 远程控制）、Gemini CLI（#28982 手机配对）、Qwen Code（扩展作用域到工作区） | 从 CLI 向 IDE/浏览器/移动端无缝延伸 |
| **可观测性与错误处理** | DeepSeek TUI（#5950 状态栏失效、#5620 警告瞬态）、Claude Code（卡顿无反馈）、Gemini CLI（死循环验证）、Qwen Code（#11217 错误报告成功） | 静默失败、错误吞没、调试困难 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|------|------|------|
| **Claude Code** | 全栈企业级 Agent、安全护栏、深度 IDE 集成 | 中大型企业、严肃生产环境 | 多代理 + Hook 插件体系，强调规则治理 |
| **OpenAI Codex** | 多模型路由（GPT-5.2/6）、Chrome/桌面深度绑定 | ChatGPT Pro 订阅用户、Web 重度用户 | TUI + Desktop + Chrome 三端统一 |
| **Gemini CLI** | 浏览器代理、自动记忆（Auto Memory）、夜间快速迭代 | 个人开发者、追求前沿功能的尝鲜者 | 高频 nightly 发布，强调代理鲁棒性 |
| **GitHub Copilot CLI** | GitHub 生态深度集成、ACP 协议、BYOK 灵活计费 | 企业开发者、GitHub 重度用户 | ACP（Agent Communication Protocol）标准化 |
| **Kimi Code CLI** | 跨设备会话延续、Moonshot API 长上下文 | 跨平台个人/小团队用户 | 远程控制 + 长上下文，体积轻量 |
| **OpenCode** | 多模型生态（Muse Spark、Claude）、Office 文档处理 | 生产力场景、内容创作者 | TUI 性能优化 + 文件预览扩展 |
| **Qwen Code** | 多智能体协作（Mesh）、OpenTUI 渲染重构 | 架构敏感型开发者、企业 Agent 编排 | 重大架构重构期（ink → OpenTUI，Mesh 框架） |
| **DeepSeek TUI** | 底层架构透明度、状态可见性、可配置 UI | 系统程序员、CLI 极客、深度定制者 | Rust 原生 + 可选 mimalloc、模块化 crate 拆分 |

**核心差异点**：
- **安全姿态**：Claude Code 与 Copilot CLI 最谨慎（多次拦截争议），Codex 与 Gemini CLI 最激进（自动执行更多操作）。
- **架构开放度**：DeepSeek TUI 与 OpenCode 最透明（连测试 flake 都在公开追踪），Claude Code 相对封闭。
- **迭代节奏**：Gemini CLI > Qwen Code > DeepSeek TUI > Claude Code > Copilot CLI/Kimi/Codex。

---

## 5. 社区热度与成熟度

### 🔥 高度活跃（社区参与 + 工程透明）
- **DeepSeek TUI**：37 Issues + 50 PR 全公开，连创始人的 EPIC 和测试 flake 都公开追踪，社区工程化程度极高。
- **Qwen Code**：8 条高质量 PR 集中在 OpenTUI 与 Mesh 框架，反映技术雄心但社区反馈渠道相对单向。
- **Claude Code**：单 Issue 评论量最高（#84352 达 197 条），说明企业用户深度使用且愿意持续反馈。

### 🚀 快速迭代（高频发布 + 架构变革）
- **Gemini CLI**：每日 nightly 版本，安全/性能快速响应。
- **Qwen Code**：正经历 ink → OpenTUI 的渲染层大迁移，技术债集中爆发期。
- **DeepSeek TUI**：v0.9.13 进入特性收尾，下一个版本预计带来 rusty_alloc 等底层革新。

### ⚖️ 稳定成熟（功能定型 + 维护为主）
- **OpenAI Codex**：PR 几乎全是 bot 自动化，企业级稳定性优先，社区参与度偏低。
- **GitHub Copilot CLI**：更新稀疏但聚焦关键 Bug 修复（BYOK 缓存、ACP 安全）。
- **Kimi Code CLI**：社区规模较小，单日仅 5 条 Issue 反馈。

### 🌱 早期生态（用户基数小但增长明确）
- **OpenCode**：Muse Spark 路由、Office 预览等功能吸引生产力用户，但 Go 订阅限额问题影响付费用户信心。

---

## 6. 值得关注的趋势信号

### 📈 趋势一：Agent 安全从"事后审计"转向"事前治理"
- **信号**：Claude Code 的 Hook 插件、Copilot CLI 的 ACP 权限回归、Qwen Code 的 PreToolUse 钩子失效争议。
- **参考价值**：在生产环境使用 AI Agent 时，**不要默认开启自动批准**，必须配置细粒度权限规则（如 PreToolUse 黑名单、白名单工具集），并对每个会话开启审计日志。

### 📈 趋势二：跨平台一致性成为产品分水岭
- **信号**：8 款工具中有 7 款在当日动态中提及 Windows/移动端/WSL 兼容性问题。
- **参考价值**：**选型时必须实测目标操作系统**，尤其是 WSL2 环境（Copilot CLI 已暴露 31GB 内存泄漏）。建议在 CI 流水线中加入跨平台冒烟测试。

### 📈 趋势三：提示缓存（Prompt Caching）成为成本控制核心
- **信号**：Copilot CLI BYOK 缓存失效导致成本激增 5 倍，OpenCode 优化存储命名空间批量写入。
- **参考价值**：企业部署时**必须验证目标厂商是否真正启用缓存**（而非仅在 UI 显示"缓存命中"），并在合同/SLA 中明确缓存命中率指标。

### 📈 趋势四：TUI 渲染层正在经历代际更替
- **信号**：Qwen Code 从 ink 迁移至 OpenTUI（1037 行补丁），DeepSeek TUI 推出 rusty_alloc 自研分配器，OpenCode 重构持久化存储路径。
- **参考价值**：底层基础设施投资将带来未来 3-6 个月的**性能跃升**，但短期内可能出现更多兼容性问题，建议等待小版本稳定后再升级关键业务。

### 📈 趋势五：多 Agent 编排从"概念验证"走向"工程落地"
- **信号**：Qwen Code Mesh 框架（每轮运行绑定、线程状态派生）、DeepSeek TUI Fleet 模型选择流（provider→model→shortlist→role）、Claude Code 多代理资源管控争议。
- **参考价值**：**单一 Agent 已无法满足复杂工作流**，但多 Agent 编排的稳定性仍是痛点。建议从"主 Agent + 受限子 Agent"模式起步，而非一上来就部署全自主舰队。

### 📈 趋势六：可观测性成为差异化竞争力
- **信号**：DeepSeek TUI 将"静默日志失败"显式渲染到 TUI 通知、Qwen Code 设计有界通知溢出而非丢弃。
- **参考价值**：选择 AI CLI 工具时，**错误可见性比功能丰富度更重要**。优先选择能在 UI 层明确呈现失败状态（而非仅记录到日志）的工具。

---

## 总结建议

| 角色 | 建议 |
|------|------|
| **企业 CTO** | 重点评估 Claude Code（治理成熟）与 Copilot CLI（生态完整）的安全机制；要求厂商提供缓存命中率与 Token 计费透明度报告。 |
| **个人开发者** | Gemini CLI（迭代最快）与 OpenCode（功能丰富）适合尝鲜；Kimi Code CLI 适合长上下文场景。 |
| **架构师** | 关注 Qwen Code（Mesh 框架）与 DeepSeek TUI（Rust 原生）的架构演进，可能预示下一代 CLI 标准。 |
| **DevOps 团队** | 任何工具上线前，必须在 Windows + macOS + Linux（含 WSL2）三端完成 72 小时长会话压测，重点关注内存泄漏与子代理资源回收。 |

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截至 2026-09-07）

---

## 1. 热门 Skills 排行（社区关注度最高的 8 个 PR）

| 排名 | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|------|------------|----------|--------------|------|
| 1 | **skill-creator 评测体系修复**<br>[#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 在 Windows 上读取 subprocess pipe 失败、召回率恒为 0%、eval artifact 未作为真实 skill 安装等核心缺陷 | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556) (12 评论)、**#1099** (Windows 同类崩溃)、**#1050** (编码/子进程)、**#1602** (序列化/指标/稳定性) — 社区普遍反映技能创建评测链路“不可用” | 🟢 Open |
| 2 | **Hivemind：零成本多智能体编排**<br>[#1628](https://github.com/anthropics/skills/pull/1628) | 让 Claude Code 将机械任务委派给运行免费模型的 headless `opencode` worker，自身仅作规划/审查/合并 | “昂贵模型上下文是稀缺资源”设计理念引发共鸣；被视为 **Agent 协作范式** 的重要探索 | 🟢 Open |
| 3 | **self-audit：机械验证 + 四维推理质量门**<br>[#1367](https://github.com/anthropics/skills/pull/1367) | 交付前审计：Step 0 逐文件存在性/完整性校验 → 四维推理审计（正确性/完整性/一致性/安全性），按损害严重度优先 | 关联 Issue [#1385](https://github.com/anthropics/skills/issues/1385) (4 评论) 提出的三阶段质量管线；社区期待“可落地的自我纠错能力” | 🟢 Open |
| 4 | **testing-patterns：全栈测试模式库**<br>[#723](https://github.com/anthropics/skills/pull/723) | 覆盖 Testing Trophy、AAA 模式、React Testing Library、契约测试、E2E、性能/混沌/属性测试等 | 开发者强烈需求“开箱即用的测试最佳实践技能”，减少重复造轮子 | 🟢 Open |
| 5 | **document-typography：AI 生成文档排版质量控制**<br>[#514](https://github.com/anthropics/skills/pull/514) | 防孤行/寡妇段、编号对齐等排版缺陷，解决“用户极少主动要求好排版但极其在意结果”的痛点 | 打中“文档生成最后一公里”痛点，配合 **ODT** ([#486](https://github.com/anthropics/skills/pull/486))、**DOCX** ([#541](https://github.com/anthropics/skills/pull/541))、**PDF** ([#538](https://github.com/anthropics/skills/pull/538)) 形成文档技能簇 | 🟢 Open |
| 6 | **skill-quality-analyzer / skill-security-analyzer**<br>[#83](https://github.com/anthropics/skills/pull/83) | 从结构/文档/示例/资源/安全五维度打分的元技能，辅助技能作者自检 | 回应 Issue [#492](https://github.com/anthropics/skills/issues/492) (43 评论) 暴露的“社区技能冒充官方、信任边界滥用”隐患 | 🟢 Open |
| 7 | **ServiceNow 平台级技能**<br>[#568](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM/ITOM/ITAM/SecOps/FSM/HRSD/SPM/IntegrationHub 等全模块 | 企业级需求显性化：单一脚本助手→平台级治理助手，PR 持续更新至 8 月 | 🟢 Open |
| 8 | **claude-api 技能精简与模型表更新**<br>[#1607](https://github.com/anthropics/skills/pull/1607) | 标记 4 个已退役模型 ID，修复 [#1603](https://github.com/anthropics/skills/issues/1603) | 关联 Issue [#1487](https://github.com/anthropics/skills/issues/1487) (4 评论)：**单次调用注入 156k tokens 耗尽上下文窗口** — 体现“技能体积/上下文效率”成核心指标 | 🟢 Open |

> **注**：所有 PR 均为 `Open` 状态，官方仓库合并节奏偏审慎，社区多通过 Issue 施压推进。

---

## 2. 社区需求趋势（从 Issues 提炼的 5 大方向）

| 趋势方向 | 代表性 Issue | 核心诉求 | 热度指标 |
|----------|--------------|----------|----------|
| **技能分发与信任体系** | [#492](https://github.com/anthropics/skills/issues/492) (43💬, 2👍)<br>[#189](https://github.com/anthropics/skills/issues/189) (6💬, 9👍) | 官方命名空间被社区技能滥用、插件包重复安装导致上下文污染、缺乏签名/审核机制 | ⭐⭐⭐⭐⭐ 最高 |
| **组织级技能共享与管理** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍) | 一键共享/版本控制/权限控制，替代“下载→发送→手动上传”原始流程 | ⭐⭐⭐⭐ |
| **技能创建/评测工具链可用性** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍)<br>[#1099](https://github.com/anthropics/skills/pull/1099)<br>[#1050](https://github.com/anthropics/skills/pull/1050) | `run_eval.py`/`run_loop.py` 在 Windows 全平台失效、YAML 前置解析静默失败、编码/子进程跨平台兼容 | ⭐⭐⭐⭐ |
| **上下文窗口与 Token 效率** | [#1487](https://github.com/anthropics/skills/issues/1487) (4💬)<br>[#1607](https://github.com/anthropics/skills/pull/1607) | 单技能注入 156k tokens 耗尽窗口、模型表滞后、需惰性加载/模块化拆分 | ⭐⭐⭐⭐ |
| **多智能体编排与治理** | [#1628](https://github.com/anthropics/skills/pull/1628) (PR)<br>[#1385](https://github.com/anthropics/skills/issues/1385) (4💬)<br>[#412](https://github.com/anthropics/skills/issues/412) (Closed) | 从单体技能→Agent 编排（Hivemind）、推理质量三阶段管线、Agent 治理（策略/威胁/审计） | ⭐⭐⭐ |

---

## 3. 高潜力待合并 Skills（评论活跃、工程完备、近期可能落地）

| Skill | PR | 关键信号 | 预判落地窗口 |
|-------|-----|----------|--------------|
| **skill-creator 评测链路全面修复** | [#1298](https://github.com/anthropics/skills/pull/1298) | 关联 4 个 Issue/PR、解决 Windows 全平台阻断、官方自用工具链 | **极高**（官方自用痛点） |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 覆盖面最广的通用开发技能、无外部依赖、PR 维护至 4 月 | **高** |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 通用刚需、配套 ODT/DOCX/PDF 技能簇已并行推进 | **高** |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 设计完整（机械验证+四维推理）、回应质量门提案 [#1385](https://github.com/anthropics/skills/issues/1385) | **中高** |
| **Hivemind** | [#1628](https://github.com/anthropics/skills/pull/1628) | 架构创新性强、依赖外部 `opencode`、需安全审查 | **中**（需安全评估） |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | 企业级大客户需求、PR 持续迭代 5 个月 | **中** |

---

## 4. Skills 生态洞察（一句话总结）

> **社区核心诉求已从“要更多 Skills”转向“要可信、可评测、可组装、上下文高效的技能基础设施”**——信任边界修复、跨平台评测工具链、Token 预算感知设计、以及从单体技能向多 Agent 编排/治理的范式升级，是当前所有讨论的共同分母。

---

## Claude Code 社区动态日报 — 2026-09-07

---

### 1. 今日速览

- **版本更新**：发布了 **v2.1.263**，主要包含 bug 修复与稳定性提升。
- **热点问题依然聚焦安全拦截、性能卡顿与多代理资源耗控**，社区活跃度高，多个 Issues 已超 100 评论。
- **安全相关 PR 持续合入**，包括 glob 模式匹配修复、路径遍历防御等。

---

### 2. 版本发布

- **v2.1.263**
  - **内容**：Bug fixes and reliability improvements  
  - **链接**：[Release v2.1.263](https://github.com/anthropics/claude-code/releases)

---

### 3. 社区热点 Issues

| Issue | 标题 | 状态 | 链接 |
|-------|------|------|------|
| #84352 | 已 CVP 认证组织仍遭安全拦截 | OPEN | [查看](https://github.com/anthropics/claude-code/issues/84352) |
| #26224 | Claude Code 长时间卡顿（最高 20 分钟） | OPEN | [查看](https://github.com/anthropics/claude-code/issues/26224) |
| #62699 | Linux 下无法复制输出文本 | OPEN | [查看](https://github.com/anthropics/claude-code/issues/62699) |
| #91188 | 请求可配置 MEMORY.md 压缩阈值 | OPEN | [查看](https://github.com/anthropics/claude-code/issues/91188) |
| #89467 | Windows 桌面端窗口始终置顶 | OPEN | [查看](https://github.com/anthropics/claude-code/issues/89467) |
| #80015 | 多任务工具被移除导致任务无法管理 | OPEN | [查看](https://github.com/anthropics/claude-code/issues/80015) |
| #67500 | 上下文压缩后丢失行为规则 | OPEN | [查看](https://github.com/anthropics/claude-code/issues/67500) |
| #77943 | code-review 流程消耗过多 tokens 并返回空 | OPEN | [查看](https://github.com/anthropics/claude-code/issues/77943) |
| #87003 | 远程控制无法推送至 Android | OPEN | [查看](https://github.com/anthropics/claude-code/issues/87003) |
| #91618 | Windows worktree 安全检查因字母大小写误判 | OPEN | [查看](https://github.com/anthropics/claude-code/issues/91618) |

> ⚠️ **高反馈问题**：  
> - #84352（197 评论）反映认证用户仍被拦截，影响企业使用体验。  
> - #26224（130 评论）为早期老问题，反映性能优化仍是痛点。  
> - 新功能请求 #91188 呼声强烈，希望支持自定义 MEMORY.md 提示逻辑。

---

### 4. 重要 PR 进展

| PR | 类型 | 内容摘要 | 链接 |
|----|------|-----------|------|
| #87079 | fix | 修复 `**` glob 模式在零深度路径匹配失败的问题 | [查看](https://github.com/anthropics/claude-code/pull/87079) |
| #68787 | fix | 增加 `edit-issue-labels.sh` 无参数时错误提示 | [查看](https://github.com/anthropics/claude-code/pull/68787) |
| #68786 | fix | 防止 test-hook.sh 中的 shell 注入漏洞 | [查看](https://github.com/anthropics/claude-code/pull/68786) |
| #68785 | fix | hook JSON 输出优化，防止 CI 检测错误 | [查看](https://github.com/anthropics/claude-code/pull/68785) |
| #68702 | fix | macOS bash 3.x 兼容性修复 | [查看](https://github.com/anthropics/claude-code/pull/68702) |
| #68701 | fix | Windows Python 版本探测处理 CRLF 换行符 | [查看](https://github.com/anthropics/claude-code/pull/68701) |
| #68699 | fix | hookify 插件增加 Python 包装器，统一路径格式 | [查看](https://github.com/anthropics/claude-code/pull/68699) |
| #68694 | fix | 修复 Windows 下 CLAUDE_PLUGIN_ROOT 路径分隔符问题 | [查看](https://github.com/anthropics/claude-code/pull/68694) |
| #68689 | fix | 防止安全引导插件中通过 symlink 读取敏感文件 | [查看](https://github.com/anthropics/claude-code/pull/68689) |
| #87077 | fix | 修复所有 Agent 插件 Frontmatter 中的无效 YAML 格式 | [查看](https://github.com/anthropics/claude-code/pull/87077) |

> 🔍 **安全与跨平台兼容性是主要贡献方向**，多个 PR 聚焦插件系统与 Hook 安全。

---

### 5. 功能需求趋势

- **IDE集成增强**：VS Code 插件优化、远程会话控制、Cowork 排序逻辑等。
- **性能与资源管控**：token 耗尽监控、agent 自动扩容控制、多模型切换策略。
- **自定义配置项**：MEMORY.md 提示阈值、Always-on-top 设置、插件同步机制。
- **平台兼容性增强**：Windows 路径处理、WSL 场景支持、MacOS Bash 兼容。

---

### 6. 开发者关注点

- **性能瓶颈严重**：#26224 等卡顿问题长期未解决，影响开发体验。
- **安全拦截过于敏感**：多次出现认证用户被误拦的情况，需优化规则判断逻辑。
- **多Agent资源失控**：频繁出现大量 agent 自动调用导致配额耗尽的问题。
- **平台差异大**：Windows、macOS、Linux 用户均反映各类兼容性问题，需统一处理策略。

--- 

如需订阅或反馈，请访问 [https://github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here's a thinking process:

1.  **Analyze the User's Request:**
   - **Role**: Technical analyst focused on AI development tools
   - **Task**: Generate a daily report for OpenAI Codex community dynamics as of 2026-09-07
   - **Data Source**: GitHub `openai/codex` (provided in the prompt)
   - **Required Sections**:
     1. Today's Summary (2-3 sentences)
     2. Version Releases (if any, summarize; if not, skip)
     3. Community Hotspot Issues (pick 10 most worth following, explain importance & community reaction)
     4. Important PR Progress (pick 10 important PRs, explain function/fix)
     5. Feature Demand Trends (extract from issues the most concerning feature directions: IDE integration, performance, new model support, etc.)
     6. Developer Focus Points (summarize pain points or high-frequency needs from developer feedback)
   - **Language**: Concise professional, suitable for technical developers
   - **Format**: Each item must include GitHub link

2.  **Analyze the Provided Data:**
   - **Latest Releases (past 24h)**: "None"
   - **Latest Issues (past 24h, 50 total, showing top 30 by comments)**: Listed from #28919 to #43295. I need to pick 10 from these.
   - **Latest PRs (past 24h, 20 total)**: All are closed PRs by `copyberry[bot]`, mostly about internal cleanup, Bazel, npm staging, voice host, TUI, etc. I need to pick 10 important ones or summarize the batch.
   - **Data Date**: All issues updated on 2026-09-07, some created earlier but updated today. The report date is 2026-09-07.

3.  **Select 10 Issues for "Community Hotspot Issues":**
   I need to pick 10 that are most significant based on comments, relevance, or community impact. Let's review the 30 listed:
   - #28919: 63 comments, 59 likes. Windows app missing "control other devices" tab. High interest.
   - #10571: 28 comments, 9 likes. "Bad request" error with gpt-5.2 xhigh. Important for CLI users.
   - #41790: 16 comments, 9 likes. Rate limits "Selected model is at capacity" on ChatGPT Pro. Frequent issue.
   - #29811: 14 comments, 8 bugs. Goal compaction resurrects completed manual steer. Context bug.
   - #42661: 13 comments, 3 likes. Windows pet input region offset. Niche but specific.
   - #40596: 13 comments, 0 likes. Windows unified exec fails. Stability.
   - #40228: 10 comments, 0 likes. Chrome native host out of date. Plugin issues.
   - #41874: 8 comments, 0 loses historical sessions. Session migration bug.
   - #40872: 7 comments, 0 Composer disabled after first turn. UX bug.
   - #29087: 7 comments, 0 Stream disconnected. Connectivity.
   - #13854: 7 comments, 0 Usage counted to wrong models. Billing/usage bug.
   - #42182: 6 comments, 0 Proactive quota-aware task planning. Enhancement.
   - #32927: 6 comments, 4 Worktree mode selector missing. macOS UI bug.
   - #40579: 4 comments, 0 MCP process-batch accumulation. Performance.
   - #39466: 4 comments, 0 Chrome extension rejects native host. Integration bug.
   - #40357: 4 comments, 0 Chrome plugin clean reinstall stale entries. Integration.
   - #42714: 3 comments, 0 Desktop launches but no window. Critical crash bug.
   - #43322: 3 comments, 0 "Selected model is at capacity" frequent. Rate limit.
   - #41462: 3 comments, 1 Denial provides no human approval path. UX/approval flow.
   - #33224: 3 comments, 1 Pet look directions ignore mouse. Feature/bug.
   - #42520: 3 comments, 0 Chrome integration never created. Integration.
   - #41764: 3 comments, 0 Regression: in-app browser fails. Stability.
   - #42846: 3 comments, 2 Add Computer Use support to Linux. Feature request.
   - #43226: 2 comments, 1 Floating orb click-through after restart. UI bug.
   - #43237: 2 comments, 0 GPT-6 Astra rejects "hi". Model behavior.
   - #43293: 2 comments, 2 Extension crashing. Plugin bug.
   - #30425: 2 comments, 0 Intermittent zero prompt-cache hits. Performance.
   - #43235? Wait, #43295: 2 comments, 0 Reloading AGENTS.md overflows context. Session bug.
   - #42498: 2 comments, 0 Windows side panel attachments hang. Integration.
   - #40923: 2 comments, 0 Chrome plugin missing, EPERM. Integration.
   - #43322 already counted.

   Picking 10 based on comment count, relevance, and community impact:
   1. #28919 - 63 comments, major Windows UI/settings issue
   2. #10571 - 28 comments, "Bad request" with gpt-5.2 xhigh, CLI model error
   3. #41790 - 16 comments, rate capacity errors on Pro, frequent interruption
   4. #42714 - 3 comments but critical: launches but no window, crash bug
   5. #43322 - 3 comments, frequent "at capacity" on Pro x86, rate limit frustration
   6. #41462 - 3 comments, approval UX dissatisfaction, forces exact sentence
   7. #42846 - 3 comments, Computer Use support missing on Linux, feature gap
   8. #32927 - 6 comments, worktree mode selector missing, macOS UI regression
   9. #40579 - 4 comments, MCP process-batch accumulation, performance/resource leak
   10. #43295 - 2 comments, reloading AGENTS.md overflows context, session lock bug

   Actually, let's look at comment counts and relevance more carefully. I'll pick 10 that represent different areas: Windows stability, rate limits, CLI/model errors, Linux feature gaps, macOS UI, session management, Chrome integration, approval UX, etc.

   Revised selection (10):
   1. #28919 - Windows Settings tab missing, 63 comments, high engagement
   2. #10571 - "Bad request" with gpt-5.2 xhigh, 28 comments, model/CLI issue
   3. #41790 - Rate capacity errors interrupting Pro users, 16 comments, reliability
   4. #42714 - Desktop launches no window, 3 comments but critical stability
   5. #43322 - Frequent "at capacity" on Pro x86, 3 comments, rate limit pain point
   6. #41462 - Approval UX forces exact sentence, 3 comments, UX design issue
   7. #42846 - Linux Computer Use support missing, 3 comments, platform parity feature
   8. #32927 - macOS worktree selector missing, 6 comments, UI/UX regression
   9. #40579 - MCP process-batch accumulation, 4 comments, performance/resource leak
   10. #43295 - AGENTS.md reload overflows context, 2 comments but session lock bug, important for multi-session workflows

   Wait, #43295 has only 2 comments. Maybe pick #40923 or #42498? Let's check: #40923 has 2 comments, #42498 has 2. #30425 has 2. I'll stick with #43295 as it's about context overflow, which is a hot topic, but maybe better to pick #41874 (8 comments) or #40872 (7 comments). Let's re-evaluate the list with comment counts:

   Actually, the prompt says "以下展示评论数最多的 30 条" (showing the top 30 by comments). The list has comments counts. I should pick 10 from these 30 based on both comment count and significance.

   Let's list them with comments:
   #28919: 63
   #10571: 28
   #41790: 16
   #29811: 14
   #42661: 13
   #40596: 13
   #40228: 10
   #41874: 8
   #32927: 6
   #40579: 4
   #39466: 4
   #40357: 4
   #42714: 3
   #43322: 3
   #41462: 3
   #33224: 3
   #42520: 3
   #41764: 3
   #42846: 3
   #43226: 2
   #43237: 2
   #43293: 2
   #30425: 2
   #43235? #43295: 2
   #42498: 2
   #40923: 2
   #13854: 7 actually wait, #13854: 7 comments! I missed that. Let me check the list again: "#13854 [OPEN] [bug, app] Usage being counted to wrong models" comments: 7, 👍: 0. Yes, it's there.
   #29087: 7 comments
   #41874: 8
   #32927: 6
   #40579: 4
   #43295: 2

   Okay, let's pick 10 with good comment counts and diverse topics:
   1. #28919 (63) - Windows Settings
   2. #10571 (28) - Bad request gpt-5.2 xhigh
   3. #41790 (16) - Rate capacity errors Pro
   4. #29811 (14) - Goal compaction bug
   5. #42661 (13) - Windows pet input offset
   6. #40596 (13) - Windows unified exec fail
   7. #13854 (7) - Usage counted to wrong models
   8. #29087 (7) - Stream disconnected
   9. #41462 (3) - Approval UX forces exact sentence
   10. #42846 (3) - Linux Computer Use support

   That's a good mix. I can also include #42714 (critical crash) but it has only 3 comments. I'll maybe replace one with #42714 or #43322. Actually, #43322 is about "Selected model is at capacity" which is also rate limit related to #41790. I'll keep the diversity.

   Let's finalize the 10 issues I'll cover:
   1. #28919
   2. #10571
   3. #41790
   4. #29811
   5. #42661
   6. #13854
   7. #29087
   8. #41462
   9. #42846
   10. #32927

   Wait, #32927 has 6 comments, #41462 has 3, #42846 has 3. I'll just pick based on importance, not just comment count. The prompt says "挑选 10 个最值得关注的 Issue，说明为什么重要、社区反应如何". So I need to explain importance and community reaction. I'll pick 10 that cover different pain points.

   Let's list all 30 with their topics and pick the most representative:
   - #28919: Windows Settings tab missing -> critical UI/settings
   - #10571: "Bad request" gpt-5.2 xhigh -> model/CLI compatibility
   - #41790: Rate capacity errors Pro -> reliability/quotas
   - #29811: Goal compaction resurrects manual steer -> context/session management
   - #42661: Windows pet input offset -> niche but UI/UX bug
   - #40596: Windows unified exec fails -> stability
   - #40228: Chrome native host out of date -> extension integration
   - #41874: Loses historical sessions -> session migration
   - #40872: Composer disabled after first turn -> UX
   - #29087: Stream disconnected -> connectivity
   - #13854: Usage counted to wrong models -> billing/usage
   - #42182: Proactive quota-aware task planning -> enhancement
   - #32927: Worktree mode selector missing -> macOS UI
   - #40579: MCP process-batch accumulation -> performance
   - #39466: Chrome extension rejects native host -> integration
   - #40357: Chrome plugin clean reinstall stale -> integration
   - #42714: Desktop launches no window -> critical crash
   - #43322: Frequent "at capacity" -> rate limit
   - #41462: Denial no human approval path -> UX/auth
   - #33224: Pet look directions ignore mouse -> feature/bug
   - #42520: Chrome integration never created -> integration
   - #41764: In-app browser fails -> stability
   - #42846: Linux Computer Use support -> feature gap
   - #43226: Floating orb click-through -> UI
   - #43237: GPT-6 Astra rejects "hi" -> model behavior
   - #43293: Extension crashing -> plugin stability
   - #30425: Intermittent zero prompt-cache hits -> performance
   - #43295: AGENTS.md reload overflows context -> session/context
   - #42498: Windows side panel attachments hang -> integration
   - #40923: Chrome plugin missing, EPERM -> integration/security
   - #13854: Usage to wrong models -> billing (already have)

   Okay, I'll pick 10 that are most impactful and cover broad areas:
   1. #28919 - Windows Settings UI gap (63 comments, highest engagement)
   2. #10571 - gpt-5.2 xhigh "Bad request" (28 comments, model compatibility)
   3. #41790 - Rate capacity interrupting Pro tasks (16 comments, quota reliability)
   4. #29811 - Goal compaction session bug (14 comments, context continuity)
   5. #13854 - Usage misattribution to wrong models (7 comments, billing impact)
   6. #29087 - Stream disconnected before completion (7 comments, connectivity stability)
   7. #41462 - Approval UX forces exact sentence (3 comments, UX/auth flow)
   8. #42846 - Linux Computer Use support missing (3 comments, platform parity)
   9. #32927 - macOS worktree selector missing (6 comments, UI regression)
   10. #42714 - Desktop launches but no window (3 comments, critical stability)

   That's good. I'll write them up.

4.  **Select 10 PRs for "Important PR Progress":**
   All PRs are from `copyberry[bot]` and are closed. They seem to be internal maintenance, build system, and infrastructure PRs. Let's list them with their summaries:
   - #43325: Sort JSON schema object keys for consistent Cargo and Bazel output
   - #43315: Resolve session labels uniquely before acting on them
   - #43308: Replace Windows app-server shutdown files with socket requests
   - #43304: Isolate Bazel build commit metadata from Rust compilation inputs
   - #43298: Defer managed worktree transitions to fresh TUI loop iterations
   - #4

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 - 2026-09-07

## 1. 今日速览

今天发布了 **v0.60.0-nightly.20260907.g85aca163f** 夜间发布版，重点修复了多项关键稳定性问题，包括 OAuth 签出异常、Windows 平台打印模式输出缺失、Shell 命令执行卡死等核心痛点。同时，社区热点 Issue 集中围绕代理可靠性、自动内存处理、跨平台兼容性及性能优化展开，反映出用户对生产环境稳定性的强烈需求。

## 2. 版本发布

- **v0.60.0-nightly.20260907.g85aca163f**（2026-09-07）  
  新增夜间发布版，包含多项修复和增强。主要更新包括：
  - 解决 OAuth 会话意外签出问题（#28088）
  - 修复 Windows 下的 `-p/--print` 模式无输出问题（#27466）
  - 改进 Shell 命令执行的响应延迟处理（#25166）
  - 增强浏览器代理的恢复机制（#22232）

## 3. 社区热点 Issues（Top 10）

| 编号 | Issue | 重要性 | 社区反馈 |
|------|-------|--------|----------|
| #19936 | Stuck in loop of verification | 高 | 用户反馈验证流程陷入死循环，需紧急修复 |
| #28088 | Gemini CLI 突然签出，OAuth 报告未授权 | 高 | 企业用户因会话断开导致工作流中断，影响生产环境 |
| #27466 | Windows -p/--print 模式无 stdout 输出 | 高 | Windows 平台开发者无法获取非交互模式输出，严重限制自动化使用 |
| #22323 | Subagent recovery 状态异常 | 高 | 子代理报告成功但实际未完成分析，可能导致错误结果 |
| #26522 | Auto Memory 低信号会话处理 | 高 | 低置信度会话被忽略，影响记忆系统完整性 |
| #22232 | Browser agent 在 Wayland 环境失败 | 高 | 图形界面组件在 Wayland 上的兼容性问题 |
| #26525 | Auto Memory 自动重试逻辑缺陷 | 高 | 低信号会话会被无限重试，消耗资源并降低效率 |
| #25166 | Shell 命令执行卡在 "Waiting input" | 高 | 简单命令后仍显示等待输入，阻塞用户操作 |
| #22267 | Browser Agent 忽略 settings.json 配置 | 高 | 全局/项目级配置覆盖不生效，影响自定义行为 |
| #29134 | 保护当前会话免受删除 | 高 | 防止误删导致的工作流数据丢失 |

## 4. 重要 PR 进展（Top 10）

| 编号 | PR | 关键贡献 | 状态 |
|------|-----|----------|------|
| #28975 | fix(core): keep glob results for symlinked workspace roots | 修复 `glob` 模式匹配在符号链接根目录时返回空文件 | CLOSED |
| #28971 | fix(core): keep truncated MCP tool names unique | 防止 MCP 工具名冲突，确保唯一性 | CLOSED |
| #28983 | fix(core): detect mixed line endings | 修正 `detectLineEnding` 函数对混合换行符的错误判断 | CLOSED |
| #28982 | Add Build Remote Agent phone pairing | 实现远程构建代理手机端配对功能 | CLOSED |
| #28978 | docs(hooks): document missing HookDecision values | 补充 Hook 决策值文档，完善规范 | CLOSED |
| #28972 | fix(core): guard formatTruncatedToolOutput | 添加 `maxChars > 0` 边界检查，防止负数切片 | CLOSED |
| #28973 | fix(core): sandbox image upgrade | 将沙箱镜像从 EOL 的 node:20-slim 升级至 node:22-slim | CLOSED |
| #29134 | fix(cli): protect current session from deletion | 通过会话 ID 精确匹配避免误删相关会话 | OPEN |
| #29132 | fix(core): normalize line endings in diff context | 统一 CRLF/LF 换行处理，防止大分差上下文截取 | OPEN |
| #29137 | chore(deps): bump npm dependencies | 批量更新依赖库，修复潜在兼容性问题 | CLOSED |

## 5. 功能需求趋势

从 Issue 分析可见，社区关注的功能方向呈现以下趋势：

1. **代理可靠性与鲁棒性**  
   - 子代理恢复机制、浏览器代理在 Wayland/Windows 上的兼容性、Shell 命令执行稳定性是核心关注点。这表明用户希望提升自动化工作流的连续性和跨平台一致性。

2. **性能优化**  
   - 终端窗口调整下的历史记录刷新、Shell 命令卡顿、Auto Memory 处理效率等问题反映出对系统响应速度和资源利用率的高要求。

3. **安全与合规**  
   - Auto Memory 自动重试逻辑、敏感信息脱敏、沙箱镜像升级等安全相关 Issue 数量增加，显示出对数据隐私和运行时安全的持续关注。

4. **扩展性与生态集成**  
   - MCP 工具名称唯一性、Build Remote Agent 配对、Hook 规范文档化等功能均属于向更广泛生态扩展的需求，体现了对第三方集成和插件化的兴趣。

## 6. 开发者关注点

- **认证与会话管理**：OAuth 签出异常、会话保护、Auto Memory 处理低置信度会话——这些直接影响用户在不同环境（企业/个人）下的使用体验。
- **跨平台兼容性**：Windows 打印模式输出缺失、Wayland 浏览器代理失败、Linux/macOS 差异化表现——开发者需要确保 CLI 在多样化操作系统上稳定运行。
- **性能瓶颈**：Shell 命令卡顿、终端调整时的历史记录刷新、Auto Memory 重试循环——这些问题影响开发者和运维人员的日常工作效率。
- **工具链集成**：MCP 工具注册、Build Remote Agent 配对、Hook 规范文档化——开发者希望 CLI 能更好地融入现代 DevOps 和 CI/CD 流程。
- **错误处理与可观测性**：无限重试、死循环、未处理的异常消息——这些问题增加了调试复杂度，需要更明确的错误提示和日志追踪。

---

*本日日报基于 GitHub 官方 Issue 和 Pull Request 列表生成，数据截至 2026-09-07.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-09-07)

## 1. 今日速览
今日社区最核心的动态是**#1665插件作用域提案**（获18👍），标志着插件架构正向项目/仓库级粒度演进，呼应了开发者对本地化配置的需求。同时，**BYOK提示缓存失效**（#4720）与**ACP模式权限失控**（#4537）等严重Bug引发大量关注，反映出在模型成本控制与Agent安全机制上仍有待修复。此外，WSL2环境下出现的31GB内存异常（#4694）也成为性能社区的热点。

## 2. 版本发布
过去24小时内无新版本发布。

## 3. 社区热点 Issues（精选10个）

1. **[#1665](https://github.com/github/copilot-cli/issues/1665)** [CLOSED] 支持项目/仓库级插件作用域
   * **重要性**：当前插件仅支持全局安装，该提案将实现按项目/仓库隔离，满足团队定制化需求，社区反响极高（18👍）。
2. **[#4720](https://github.com/github/copilot-cli/issues/4720)** [OPEN] BYOK模式下提示缓存被静默禁用
   * **重要性**：1.0.82版本在BYOK模式下未发送缓存声明，导致每次请求全量重传，成本激增约5倍，严重影响企业用户成本控制。
3. **[#4537](https://github.com/github/copilot-cli/issues/4537)** [OPEN] ACP模式自动批准工具调用（#845回归）
   * **重要性**：安全回归Bug，`session/request_permission`未发送导致Shell命令和文件编辑在无用户确认下静默执行，存在严重安全隐患（2👍）。
4. **[#4694](https://github.com/github/copilot-cli/issues/4694)** [OPEN] WSL2下内存与CPU异常占用
   * **重要性**：运行长会话时RSS飙升至31GB、CPU占用57%，严重限制了在Linux/WSL环境下的长时间Agent任务可行性。
5. **[#4555](https://github.com/github/copilot-cli/issues/4555)** [OPEN] ACP模式下`session/prompt`无条件中止会话
   * **重要性**：`session.abort()`在处理请求首行被无条件调用，导致后台子代理被强行取消，破坏了复杂的异步Agent编排流程。
6. **[#4695](https://github.com/github/copilot-cli/issues/4695)** [OPEN] MCP OAuth令牌缓存失效导致重复鉴权
   * **重要性**：HTTP型MCP服务器使用OAuth时，缓存键生成不一致导致每次会话均需重新授权，严重影响开发者体验与MCP生态稳定性。
7. **[#4738](https://github.com/github/copilot-cli/issues/4738)** [OPEN] `ask_user`表单按Enter过早导致数据永久丢失
   * **重要性**：高危数据丢失Bug，用户正在输入的文本被直接丢弃，严重侵蚀对表单UI的信任度。
8. **[#4735](https://github.com/github/copilot-cli/issues/4735)** [OPEN] 助手文本被错误折叠为“Thought for Ns”
   * **重要性**：UI渲染Bug，当模型输出包含推理块+用户文本+工具调用时，实质性回复被隐藏至折叠区域，导致用户无法获取关键信息。
9. **[#4740](https://github.com/github/copilot-cli/issues/4740)** [OPEN] 语音服务因pid文件删除陷入永久死锁
   * **重要性**：基础设施Bug，OS清理临时目录删除pid文件后，服务进程存活但无法被正确连接，导致语音功能彻底瘫痪且无法自愈。
10. **[#2644](https://github.com/github/copilot-cli/issues/2644)** [OPEN] 特性请求：支持Shift+箭头与Ctrl+A文本选择
    * **重要性**：基础可用性需求，当前CLI输入框缺乏标准终端文本选择快捷方式，影响长提示词的编辑效率（2👍）。

## 4. 重要 PR 进展
过去24小时内仓库仅更新了 **1 条** Pull Request，无法凑齐10条，已全部列出：

1. **[#4739](https://github.com/github/copilot-cli/pull/4739)** [OPEN] docs: propose terminal-owned macOS notifications
   * **功能/修复内容**：提出终端自有的macOS通知方案，包含MIT许可的参考实现与便携回归测试。旨在解决当前通知点击无响应的问题，但明确声明此为参考提案，非直接修改已发布的CLI实现。

## 5. 功能需求趋势
从当前Issues中，可提炼出三大核心功能演进趋势：
* **作用域与配置精细化**：社区强烈呼吁插件与模型配置从“全局/用户级”向“项目/仓库级”解耦（如#1665、#4692），以支持更灵活的团队协作与企业治理。
* **Agent与ACP模式稳定性加固**：大量反馈集中在ACP协议的权限控制、会话中止逻辑与后台任务协调机制上（如#4537、#4555、#4743），表明Agent模式的工程化落地仍需打磨。
* **输入与交互体验升级**：从Shift+箭头文本选择（#2644）、Ctrl+E补全接受（#4736）到表单防数据丢失（#4738），社区对CLI的终端交互流畅度与容错性提出了更高要求。

## 6. 开发者关注点
开发者反馈中的痛点与高频需求主要集中在以下维度：
* **成本失控风险**：BYOK模式下提示缓存静默失效（#4720），导致算力与Token成本呈指数级上升，企业用户对计费透明度与缓存机制极度敏感。
* **Agent安全隐患**：ACP模式出现权限自动批准的严重回归（#4537），代码修改与Shell执行未经验证即运行，打破了开发者对AI Agent的安全信任边界。
* **跨平台性能异常**：WSL2内存泄漏（#4694）与aarch64架构的Exec format error（#827）表明，CLI在非主流Linux发行版及ARM架构上的性能调优与兼容性仍有明显短板。
* **数据可靠性**：`ask_user`表单的Enter键数据丢失（#4738）与语音服务死锁（#4740）属于严重的数据/状态可靠性问题，直接阻碍了复杂工作流的闭环。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区动态日报**  
**报告日期：2026-09-07**  
**数据来源：GitHub MoonshotAI/kimi-cli (过去24h更新)**

---
### 1. 今日速览
今日社区以 **#1282 远程控制功能请求** 为热点，该Issue在短短一周内累计32👍并获13条热议，反映用户对跨设备会话延续的强烈需求；同时 **#2513 修复双重编码工具参数** 的PR已合并进入主分支，直接改善了API响应的健壮性。鉴权弹窗与IDE兼容性问题仍为持续关注焦点。

---
### 2. 版本发布
无新版本发布。

---
### 3. 社区热点 Issues (5 条更新)
*挑选近24h内更新的Issue，按社区关注度与讨论活度排序*

| Issue | 标题 | 重要性 | 社区反应 | 链接 |
|------|------|--------|----------|------|
| #1282 | [OPEN] Remote Control - Continue local sessions from any device | **高**：实现跨设备无缝工作流，符合AI编码工具跨平台化趋势 | 13条评论，32👍，讨论集中在实现方案（Tunnel、WebSSH、本地API转发） | [查看](https://github.com/MoonshotAI/kimi-cli/issues/1282) |
| #2252 | [CLOSED] 希望增加 /goal 命令并允许 coding plan 导入到 Codex 中使用 | **中**：社区期望与主流平台（Codex/Claude）保持命令兼容性，提升跨工具迁移效率 | 9条评论，2👍，部分用户反馈Kimi plan已足够用，未见迫切需求 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2252) |
| #1284 | [CLOSED] Does not launch in Zed IDE ACP panel in Windows | **中**：Windows用户反映Zed ACP面板启动失败，涉及跨平台集成与UI渲染问题 | 1条评论，0👍，建议检查环境变量与IDE插件版本兼容性 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/1284) |
| #1350 | [CLOSED] 频繁出现 Authorization failed, please check your login status | **高**：频繁鉴权失败直接影响使用体验，建议优化Token持久化机制 | 0评论，0👍，问题普遍性未明，建议用户检查/login流程 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/1350) |
| #1349 | [CLOSED] Shell prompt no longer shows cwd/git branch; request configurable display | **中**：交互体验回归需求，用户希望恢复或自定义prompt中的路径/分支信息 | 0评论，0👍，提议提供`-p/--prompt-format`配置选项 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/1349) |

---
### 4. 重要 PR 进展 (1 条更新)
| PR | 标题 | 功能/修复内容 | 链接 |
|----|------|-------------|------|
| #2513 | fix(kosong): recursively decode double-encoded tool-call arguments | 修复Moonshot API返回的`function.arguments`双重编码问题，防止Pydantic验证因JSON字符串未解析而失败；新增共享`decode_tool_arguments`函数，提升参数解析健壮性 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2513) |

---
### 5. 功能需求趋势
从本轮Issue与PR中提炼出的社区关注方向：
- **跨设备会话延伸**：Remote Control功能请求显现，用户期望Kimi Code CLI支持类似“远程桌面/终端”的会话迁移，便于移动端/浏览器接管本地运行的会话。
- **主流平台兼容性**：/goal命令与Codex coding plan导入的呼声，反映开发者在多工具链环境下对标准化指令的需求。
- **IDE集成与跨平台稳定性**：Zed ACP面板启动失败暴露了Windows下Kimi CLI与特定IDE的兼容性短板，提示跨平台测试覆盖的不足。
- **API与认证健壮性**：双重编码参数解码Bug与频繁Authorization failed表明，对底层API响应解析与Token管理的优化迫在眉睫。
- **终端交互体验**：Shell prompt缺失cwd/git branch信息，用户希望获得更可控、可定制的交互提示，而非仅有装饰性符号。

---
### 6. 开发者关注点
- **鉴权稳定性**：多用户反映`Authorization failed`频发，建议在CLI层面增加自动刷新、本本缓存与二次确认机制。
- **跨平台工作流**：Remote Control与Zed集成需求共存，显现开发者希望工具在不同操作系统、IDE环境下的无缝体验。
- **API响应健壮性**：双重编码问题虽由单一PR修复，但提醒团队需在解析链路中增加容错与类型验证层。
- **功能兼容性**：/goal等主流平台命令的缺失，可能导致团队在标准化作流时产生额外转换成本。

*日报由 GitHub 数据自动摘要生成，旨在为 AI 编码工具的技术追踪与社区运营提供决策参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 - 2026-09-07

## 1. 今日速览

2026-09-07 日期内，OpenCode 社区聚焦于 **性能优化、稳定性保障和新功能落地** 三大方向。关键亮点包括：OpenCode Go 订阅限额问题持续影响用户体验，TUI 主线程高 CPU 占用导致卡顿，Office 文件预览与大文本处理能力大幅提升，同时多项核心功能（异步子代理、Markdown 代理提示、工作区 UI 改进）进入活跃开发阶段。整体来看，社区对稳定性和生产力增强的需求持续强劲。

## 2. 版本发布

本周期未发布新版本，最新稳定版仍为 **opencode 1.18.x**（基于 2026-09-06 发布）。主要更新集中在性能优化和功能迭代层面，未出现重大破坏性变更。

## 3. 社区热点 Issues

| 编号 | 标题 | 重要性 | 社区反馈 |
|------|------|--------|----------|
| #42935 | OpenCode Go quota exhausted in ~20 minutes | ⭐⭐⭐⭐ | 支付续费失败，影响大量付费用户，已多次提及 |
| #47613 | Go subscription: persistent HTTP 429 | ⭐⭐⭐⭐ | 持续出现超时错误，限制使用时间 |
| #47652 | Sessions disappear from /sessions list after .git removal | ⭐⭐⭐⭐ | 数据完整性风险，历史记录碎片化严重 |
| #47699 | [needs:issue] fix(cli): pass --model through to the TUI entry | ⭐⭐⭐ | 命令行参数传递缺失，影响工作流一致性 |
| #47702 | [FEATURE]: route Muse Spark models to Responses API | ⭐⭐⭐ | 新模型支持，解决 Muse Spark 在 CLI 上的问题 |
| #47640 | feat: preview and text extraction for office files and pdf | ⭐⭐⭐ | 提升文档处理能力，满足生产力需求 |
| #47699 | [needs:issue] fix(cli): pass --model through to the TUI entry | ⭐⭐⭐ | 同 #47699，保证 CLI 参数完整传递 |
| #42306 | TUI: main thread burns ~100% CPU continuously | ⭐⭐⭐ | 性能瓶颈，影响交互流畅度 |
| #47652 | Sessions disappear from /sessions list after .git removal | ⭐⭐⭐ | 数据丢失风险，需立即修复 |
| #47635 | [FEATURE]: resolve markdown agent prompts | ⭐⭐⭐ | 修复 Markdown 代理前端提示覆盖问题 |

## 4. 重要 PR 进展

| 编号 | 标题 | 状态 | 重点内容 |
|------|------|------|----------|
| #47704 | perf(app): cache storage namespaces and batch writes | ✅ 合并中 | 优化渲染器持久化写入路径，减少 I/O 开销 |
| #47705 | perf(app): serialize persisted stores on schedule | ✅ 合并中 | 按保存窗口批量序列化存储，提升性能 |
| #47706 | perf(app): externalize large draft text into chunks | ✅ 合并中 | 大文本分块处理，避免长文本阻塞编辑 |
| #47640 | feat: preview and text extraction for office files | ✅ 合并中 | 添加 PDF/Word 预览与文本提取功能 |
| #47699 | [needs:issue] fix(cli): pass --model through to TUI | ✅ 合并中 | 确保 CLI 参数在 TUI 启动时正确传递 |
| #47652 | [OPEN] Sessions disappear after .git removal | 🔄 待审核 | 修复会话消失问题，确保项目历史完整性 |
| #47635 | [FEATURE]: resolve markdown agent prompts | ✅ 合并中 | 修复 Markdown 代理前端提示覆盖逻辑 |
| #47694 | [CLOSED] fix(app): give worktree creation a deadline | ✅ 合并中 | 限制工作区创建超时，防止无限等待 |
| #47699 | [needs:issue] fix(cli): pass --model through to TUI | ✅ 合并中 | 重复修复 CLI 参数传递问题 |
| #47602 | [FEATURE]: route Muse Spark models to Responses API | ✅ 合并中 | 支持 Muse Spark 模型的响应式调用 |
| #47640 | feat: preview and text extraction for office files | ✅ 合并中 | 增加 Office 文件预览与文本提取能力 |
| #47699 | [needs:issue] fix(cli): pass --model through to TUI | ✅ 合并中 | 确保 CLI 参数完整传递到 TUI |

## 5. 功能需求趋势

从 Issues 分析可见，社区关注点呈现以下趋势：

1. **性能优化优先**：TUI 主线程 CPU 占用、Office 文件处理慢、工作区创建超时等问题频繁出现，开发者希望通过批量写入、分块处理等方式提升响应速度。
2. **文档与生产力工具**：Office 文件预览（#47640）、大文本外部化（#47706）、Markdown 代理改进（#47635）等功能成为热门需求，反映用户对生产力工具的期待。
3. **模型多样性支持**：Muse Spark 模型路由（#47702）、Claude Code 代理发现（#47650）以及标准计算提供商文档补充（#47475）显示，社区希望 OpenCode 能更好地支持多种 AI 模型生态。
4. **工作流与安全**：异步子代理诚实执行（#45482）、权限系统完善（#7006）、Remote MCP OAuth 修复（#44790）等问题表明，用户对安全性、可靠性和自动化工作流的需求日益增长。

## 6. 开发者关注点

- **稳定性问题**：Go 订阅限额（#42935、#47613）和服务器崩溃（#46691、#47652）是高频痛点，影响用户日常使用。
- **性能瓶颈**：TUI 主线程高 CPU 占用（#42306）和大型文本处理卡顿（#47706、#47694）直接影响开发效率。
- **功能完整性**：CLI 参数传递（#47699）、Markdown 代理提示（#47635）和工作区管理（#47652）是开发者日常使用的关键点。
- **跨平台兼容性**：Termux 支持（#36081）和 Windows 桌面应用稳定性（#46691、#47652）也是重要考量因素。

---

**总结**：2026-09-07 开源社区围绕 **性能优化、稳定性保障和新功能落地** 展开活跃讨论。OpenCode 正在积极回应用户对 Office 处理能力、异步工作流、模型多样性以及系统稳定性的需求，未来几天将继续推进相关 PR 合并并修复关键 Bug。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-09-07)

## 1. 今日速览
今日 Qwen Code 社区围绕 **OpenTUI 渲染层迁移收尾**与 **Mesh 多智能体协作框架完善**展开了密集开发，同时 v0.23.1-preview.1 预览版因集成环境问题发布失败。社区焦点高度集中在 Web Shell 移动端性能瓶颈、遥测数据隐私脱敏缺失以及 Skills 钩子在特定条件下的失效等核心痛点。

## 2. 版本发布
*   **v0.23.1-preview.1**：发布失败。集成 Docker 阶段报错，未能成功构建（详见 [Issue #11185](https://github.com/QwenLM/qwen-code/issues/11185)）。
*   **v0.23.0-nightly.20260906.92a8a8d179**：夜间版发布。更新内容包括 Web Shell 动态工作流可视化与管理，以及会话工作流项目派生性能优化（详见 [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260906.92a8a8d179)）。

## 3. 社区热点 Issues

1.  **[Issue #8662](https://github.com/QwenLM/qwen-code/issues/8662) 迁移 TUI 渲染层从 ink 到 OpenTUI (追踪中)**
    *   **重要性**：当前 TUI 基于 ink 7 + React 19 构建，存在约 1037 行补丁和复杂的自定义虚拟视口，导致闪烁等结构性问题。迁移 OpenTUI 是底层架构的重大重构，评论区讨论热烈（30条），是当前社区最核心的技术债。
2.  **[Issue #11198](https://github.com/QwenLM/qwen-code/issues/11198) 使用统计遥测未脱敏上传原始工具错误文本**
    *   **重要性**：默认开启的遥测通道将包含 Shell 命令行的原始工具错误文本直接上传至 RUM，存在严重的数据隐私与安全风险，引发开发者高度警惕。
3.  **[Issue #6181](https://github.com/QwenLM/qwen-code/issues/6181) Web Shell 移动端会话切换卡顿**
    *   **重要性**：移动端切换会话时界面冻结、动画掉帧，根因涉及侧边栏轮询、全量历史加载及 per-frame O(n) 计算，严重影响移动端用户体验。
4.  **[Issue #11180](https://github.com/QwenLM/qwen-code/issues/11180) Skills 的 PreToolUse 钩子在 --continue 后停止执行**
    *   **重要性**：安全网关失效。技能声明的 PreToolUse 钩子在 `--continue` 模式下不再生效，但指令仍留在上下文中，可能导致未授权的工具调用。
5.  **[Issue #11186](https://github.com/QwenLM/qwen-code/issues/11186) 主目录工作区读取用户范围设置的所有权模型缺陷**
    *   **重要性**：`qwen serve` 绑定主目录时，工作区作用域被禁用且共享设置文件被错误归属，导致设置加载逻辑混乱。
6.  **[Issue #11217](https://github.com/QwenLM/qwen-code/issues/11217) Anthropic SSE 失败报告成功的 Headless JSON 结果**
    *   **重要性**：兼容性问题。Anthropic 兼容端点返回 SSE 错误时，CLI 错误地将成功结果输出为 JSON，掩盖了真实的调用失败。
7.  **[Issue #11227](https://github.com/QwenLM/qwen-code/issues/11227) /effort 未传播到通用 OpenAI 兼容后端**
    *   **重要性**：本地 NInfer 等后端用户在调整推理努力程度时，该值未透传至 HTTP 请求，导致前端设置失效。
8.  **[Issue #11031](https://github.com/QwenLM/qwen-code/issues/11031) 修复导出 HTML 嵌入 Web Shell 运行时**
    *   **重要性**：导出的 HTML 文件体积极大（空会话达 19.5 MB），因为将完整的 React 和 Web Shell 运行时复制到了每个导出文件中。
9.  **[Issue #11228](https://github.com/QwenLM/qwen-code/issues/11228) 右键上下文菜单不消耗按键导致组合框与工具审批对话框冲突**
    *   **重要性**：交互层面的 Bug。`KeypressContext` 的广播机制导致右键菜单无法消费按键，造成右键菜单与工具审批对话框响应同一快捷键的冲突。
10. **[Issue #7805](https://github.com/QwenLM/qwen-code/issues/7805) 设计有界通知溢出而不静默丢失结果**
    *   **重要性**：当后台通知队列达到上限且所有项目均属于活跃工作链时，当前回退策略会静默丢弃新结果，需要更优雅的队列淘汰机制。

## 4. 重要 PR 进展

1.  **[PR #11152](https://github.com/QwenLM/qwen-code/pull/11152) feat(cli): OpenTUI parity closeout (对话框、组合框、Shell 模式)**
    *   **内容**：补齐 OpenTUI 渲染器与 ink 渲染器之间的最后行为差异，包括未认证时自动打开认证对话框、延迟更新等，是 OpenTUI 迁移的关键收尾工作。
2.  **[PR #11230](https://github.com/QwenLM/qwen-code/pull/11230) feat(mesh): 从每个运行的关闭义务派生线程状态**
    *   **内容**：新增 `mesh/thread-status.ts`，线程状态不再由最后完成的运行写入，而是由每个运行的关闭义务（如 blocked, review, failure）推导，提升了状态的一致性。
3.  **[PR #11229](https://github.com/QwenLM/qwen-code/pull/11229) feat(mesh): 添加每轮运行绑定和轮次提示信封**
    *   **内容**：Mesh 实现第 5a 步，确立了每轮对话的隐式运行绑定和提示信封，为后续依赖此基础的线程工具（5b）铺平道路。
4.  **[PR #11225](https://github.com/QwenLM/qwen-code/pull/11225) feat(mesh): 添加隐藏的宿主会话启动器**
    *   **内容**：添加了工作区范围的隐藏 mesh 宿主及其私有启动路由，通过 mesh 工作区锁声明并跨启动复用，增强了会话管理的健壮性。
5.  **[PR #11086](https://github.com/QwenLM/qwen-code/pull/11086) feat(serve): 将扩展作用域到工作区运行时**
    *   **内容**：使全局扩展目录可通过每个工作区选定的运行时可用，对齐扩展状态与实时工作区运行时，并更新了 composer 添加菜单和 `@` 提及功能。
6.  **[PR #10183](https://github.com/QwenLM/qwen-code/pull/10183) feat(memory): 添加结构化按需召回**
    *   **内容**：将托管自动记忆从扁平正文提示升级为结构化推/拉召回协议，模型在记忆库变化时接收完整的双级 ref/title 树及相关轮的元数据子树。
7.  **[PR #10991](https://github.com/QwenLM/qwen-code/pull/10991) refactor(daemon): 解耦扩展激活刷新**
    *   **内容**：扩展激活操作在激活策略持久化提交后完成，而非直接刷新每个活跃会话。新增 `extension_activation_explicit_refresh` 能力供客户端区分契约。
8.  **[PR #11015](https://github.com/QwenLM/qwen-code/pull/11015) feat(channels): 实现命名会话工作区重置 (Part 4B)**
    *   **内容**：为命名 Channel 会话的 `/clear`、`/new`、`/reset` 命令添加了工作区隔离的任务支持，在保持精确

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报
**日期：2026-09-07**

---

### 1. 今日速览
昨日 Codewhale 项目活跃度极高，0.9.13 版本进入特性收尾与 Bug 修复的密集期。核心进展包括底部状态栏可配置化（#5950）、命令补全提示（#5952）、压缩摘要指令定制（#5956）等关键特性落地 PR，同时多个底层运行时严重 Bug（如会话 ID 分歧、Fleet 面板恐慌、MCP 刷新污染工具面）得到有效修复。社区在跨平台稳定性与并发测试一致性上仍面临挑战，开发者正密集攻坚。

### 2. 版本发布
过去 24 小时内无新版本发布。当前开发重心聚焦于 **v0.9.13** 的特性收尾，PR [#5967](Hmbown/Codewhale PR #5967) 正在为已合并的 0.9.13 特性生成变更日志收据，以打通发布路径。

### 3. 社区热点 Issues
从 37 条活跃 Issues 中筛选出 10 个最值得关注的问题：

1.  **[#5316](Hmbown/Codewhale Issue #5316) EPIC-005: CodeWhale TUI Crate Decomposition**
    *   **重要性**：架构级重构的伞形史诗问题，涉及整个 CodeWhale TUI crate 的拆分，影响深远。
    *   **社区反应**：作为底层架构追踪问题，目前处于持续讨论中，是后续代码维护的基石。
2.  **[#5620](Hmbown/Codewhale Issue #5620) Context pressure warning is transient and the agent does not proactively react**
    *   **重要性**：上下文压力警告是重要的安全信号，但当前提示是瞬态的，Agent 无法主动反应，导致上下文静默降级。
    *   **社区反应**：被标记为 Medium 严重度，破坏了安全信号机制，开发者期待 Agent 具备主动规避能力。
3.  **[#5929](Hmbown/Codewhale Issue #5929) Parallel-execution flakes in the codewhale-tui lib suite**
    *   **重要性**：6 个测试在负载下失败但在隔离状态下通过，严重消耗 CI 算力（每次 25 分钟矩阵重跑）。
    *   **社区反应**：由创始人提交，精准定位了测试闪现问题，是当前阻塞 CI 效率的痛点。
4.  **[#5950](Hmbown/Codewhale Issue #5950) Make 0.9.12 bottom chrome configurable; /statusline is effectively dead**
    *   **重要性**：0.9.12 底部两行硬编码不可配置，且旧有的 `/statusline` 机制失效。
    *   **社区反应**：反映了 0.9.12 重构后 UI 定制性倒退的强烈反馈，催生了后续 PR。
5.  **[#5915](Hmbown/Codewhale Issue #5915) Fleet models: provider → model → shortlist → role**
    *   **重要性**：明确了舰队子代理的模型选择流向（提供者→模型→短名单→角色），是核心业务逻辑方向。
    *   **社区反应**：创始人定调的需求方向，指导了后续模型分配特性的开发。
6.  **[#5926](Hmbown/Codewhale Issue #5926) MCP status: footer says "8 failed" when 7 servers just need a login**
    *   **重要性**：MCP 状态栏显示笼统的 "failed"，未区分是真正的失败还是仅需 OAuth 登录。
    *   **社区反应**：极大影响了用户体验，开发者需要明确的错误命名和登录路径引导。
7.  **[#5923](Hmbown/Codewhale Issue #5923) Windows: window_control::toggle_pin blocks the TUI thread**
    *   **重要性**：Windows 固定窗口操作会阻塞 TUI 主线程，严重影响跨平台体验。
    *   **社区反应**：底层系统调用跨进程通信导致的卡顿，属于硬核底层 Bug。
8.  **[#5931](Hmbown/Codewhale Issue #5931) Session identity and receipt integrity failures are only logged**
    *   **重要性**：引擎会话 ID 分歧（14次）和审批收据写入失败仅记录在日志中，未在 UI 呈现。
    *   **社区反应**：核心状态一致性问题，静默失败掩盖了严重的运行时异常。
9.  **[#5904](Hmbown/Codewhale Issue #5904) web fetch: JS-shell 200s fail extraction with no retry**
    *   **重要性**：Web Fetch 在 JS 渲染页面失败，且无重试或浏览器降级机制，高度依赖缓存状态。
    *   **社区反应**：直接影响 Explore/Scout Agent 的网页抓取能力，属于工具链缺陷。
10. **[#5930](Hmbown/Codewhale Issue #5930) Snapshots silently off for large workspaces**
    *   **重要性**：大于 2GB 的工作区静默关闭快照功能，且警告信息输出到 stderr 而非 TUI。
    *   **社区反应**：开发者难以察觉快照失效，且 WARN 信息每轮重复，产生大量噪音。

### 4. 重要 PR 进展
从 50 条 Pull Requests 中筛选出 10 个核心进展：

1.  **[#5968](Hmbown/Codewhale PR #5968) feat(build): opt-in rusty_alloc global allocator feature**
    *   **内容**：引入纯 Rust 实现的 `rusty_alloc` (mimalloc v2.4.5 复刻) 作为可选的全局分配器，无需 C 编译器。
2.  **[#5962](Hmbown/Codewhale PR #5962) feat(tui): /statusline composes the bottom chrome, ctx reads at every fullness**
    *   **内容**：落地 #5950，使底部 Chrome 行可由 `/statusline` 驱动，废弃旧的死 toggles，修复了指标行不随上下文动态读取的问题。
3.  **[#5960](Hmbown/Codewhale PR #5960) tui: a diverged engine session id is a visible notice, not a log line**
    *   **内容**：将会话 ID 分歧从静默日志提升为 TUI 界面上的可见通知，解决 #5931 前半部分问题。
4.  **[#5958](Hmbown/Codewhale PR #5958) tui(fleet): a model filter that matches nothing renders a hint instead of panicking**
    *   **内容**：修复 #5953，当 Fleet 模型过滤器无匹配项时，渲染提示信息而非触发 `index out of bounds` 恐慌。
5.  **[#5957](Hmbown/Codewhale PR #5957) engine: a mid-turn MCP refresh keeps the pool deferred and the active set narrow**
    *   **内容**：修复 #5939，确保运行时 MCP 目录变更（OAuth 登录等）不会导致整个 MCP 池被非延迟地插入工具目录，保护了工具面预算。
6.  **[#5965](Hmbown/Codewhale PR #5965) feat(compaction): operator summarizer instructions and configurable verbatim retention**
    *   **内容**：落地 #5956，在 `config.t

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*