# AI CLI 工具社区动态日报 2026-11-19

> 生成时间: 2026-11-19 05:05 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告  
**数据日期：2026-11-19**  
> 说明：以下计数基于各摘要中“可提取/列示”的数据，不等同于仓库全量数据；OpenAI Codex、OpenCode、Qwen Code 摘要生成失败，相关判断暂缺。

## 1. 生态全景

AI CLI 正从“单机编码助手”转向“企业级代理平台”，竞争焦点集中在 MCP 集成、多模型接入、多端/远程会话与成本治理。版本迭代仍然很快，Claude Code、Gemini CLI、Copilot CLI 当日均有 Release，但社区反馈已从“要新功能”明显转向“认证、稳定性、跨平台可靠性”。MCP OAuth、租户选择、多账户与连接器管理成为跨工具的共同瓶颈。TUI/终端类工具则集中暴露长会话性能、状态存储上限和终端兼容性问题。与此同时，provider 抽象、插件/扩展 API 和“一个 key 多模型”的网关生态在 Pi、DeepSeek TUI、Copilot CLI 中持续升温。

## 2. 各工具活跃度对比

| 工具 | Issues 数（摘要可提取） | PR 数（摘要可提取） | Release 情况 | 关键备注 |
|---|---:|---:|---|---|
| **Claude Code** | 10 条热点 | 1（文档修复） | **v2.1.328** | Issue 互动高，但当日无功能性 PR；企业多账户、记忆上下文、成本/稳定性诉求突出 |
| **OpenAI Codex** | 摘要失败 | 摘要失败 | 未知 | 数据缺口 |
| **Gemini CLI** | 未披露总数 | 未披露总数 | **v0.69.0；v0.70.0-preview.0** | 发布节奏快；热点集中在 Subagent 可靠性、Agent 挂起、Skills 主动调用、Browser Agent |
| **GitHub Copilot CLI** | 10 条列示 | 0 | **v1.0.114** | 企业认证、MCP OAuth、Entra/租户、Windows 安全软件兼容问题集中 |
| **Kimi Code CLI** | 0 | 1（已关闭文档 PR） | 无 | 活跃度低；仅 Zed 编辑器集成文档更新 |
| **OpenCode** | 摘要失败 | 摘要失败 | 未知 | 数据缺口 |
| **Pi** | 10 条 | 5 条 | 无 | Fullscreen 性能、上下文窗口不一致、供应商扩展、扩展 API 是主线 |
| **Qwen Code** | 摘要失败 | 摘要失败 | 未知 | 数据缺口 |
| **DeepSeek TUI** | 11 条 | 15 条 | 无；v0.10.3 受 #7203 阻塞 | PR 响应快，同日多处修复闭环；provider 网关扩展活跃 |

## 3. 共同关注的功能方向

1. **账号、认证与租户管理成为平台级门槛**  
   - Claude Code：多 Connector 账户支持（#27302，320 评论/483 赞）需求极强。  
   - Copilot CLI：企业模型策略阻塞（#1595）、MCP OAuth 非首发制服务失败（#4017）、Entra 强制 OneAuth 无法粘贴（#5452）、静默登录使用 `/common` 导致单租户失败（#5402）。  
   - DeepSeek TUI：ChatGPT 认证校验失败成为 v0.10.3 release blocker（#7203）。  
   共同诉求是：浏览器回退、显式租户选择、多账户切换、插件级 OAuth 参数配置。

2. **MCP/工具生态的可靠性**  
   - Claude Code：MCP tool `onFailure: "block"` 默认化，强调异常传播控制。  
   - Copilot CLI：连接器加载警告、MCP OAuth、插件 OAuth 配置缺失。  
   - Gemini CLI：ACP 模式工具输出截断/并行执行、浏览器 Agent 配置失效。  
   - Pi：工具注册顺序破坏提示缓存、sandbox 工作目录删除导致崩溃。  
   - DeepSeek TUI：Moonshot 路由下可选参数导致 MCP tool 被丢弃。  
   MCP 已从“能接”进入“接得稳、权限清楚、错误可诊断”的阶段。

3. **上下文、记忆与模型能力透明化**  
   - Claude Code：要求访问 claude.ai 记忆与上下文（#14228），并细化模型/effort 选择。  
   - Pi：ChatGPT 登录后实际上下文窗口小于账户目录报告值（#11021）。  
   - Copilot CLI：企业模型可见性与策略误报影响模型选择。  
   用户不再满足于“模型可用”，而要求明确上下文预算、记忆边界、模型能力和策略限制。

4. **成本与用量治理**  
   - Claude Code：stop-hook 循环触发导致费用失控（#94041）、Fable 计费不可见。  
   - DeepSeek TUI：usage ledger 达 256 条拒单、1 MiB 后无法保存（#7348/#7356）。  
   - Pi：上下文窗口不匹配导致配额浪费。  
   成本透明、用量账本容量、异常重试保护正成为 CLI 的基础能力。

5. **长会话性能、资源回收与跨平台兼容**  
   - Claude Code：子进程积压耗尽用户进程上限、移动端权限提示不渲染、大文件上传失败。  
   - Gemini CLI：Agent 挂起、Windows PowerShell UI 冻结。  
   - Pi：Fullscreen transcript 每帧重渲染（#9549）、Windows+Zellij 鼠标滚轮错误（#9656）。  
   - DeepSeek TUI：快照等待导致整 turn 冻结 209 秒、DEC 2026 缺失终端闪烁、配色泄漏。  
   长会话、TUI 渲染、终端复用器和安全软件兼容是高频故障源。

6. **扩展生态与 provider 抽象**  
   - Pi：新增 DeepInfra、Nebius、Ollama Cloud 等供应商，扩展状态只读 API 需求上升。  
   - DeepSeek TUI：UberLLM、Synap、TrustedRouter 等 OpenAI 兼容网关

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Hotspot Report** *(数据截止 2026-11-19)*

---

## 1️⃣ 热门 Skills 排行 *(按社区讨论热度排序)*

| 排名 | Skill（PR） | 功能简介 | 社区讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **[技能创建器触发评估修复](https://github.com/anthropics/skills/pull/1298)** | 隔离每个工作节点的评估命令，修复 Windows 子进程管道错误，防止无关工具干扰评估，解决假阴/假阳问题。 | 与 **#556**（`run_eval.py` 触发率为 0）和 **#1352**（多 worker 导致触发率错失）直接相关 → 社区关注核心质量问题。 | [OPEN] |
| 2 | **[ProofCore 合约审计器](https://github.com/anthropics/skills/pull/1771)** | 为 Solidity 和 Rust 合约进行静态分析，在 TON 链上生成零存储 Merkle 审计证明。 | Web3 安全需求增长，安全-audit 类技能备受期待。 | [OPEN] |
| 3 | **[Notion 规范转实现 + 量化简历审计器](https://github.com/anthropics/skills/pull/1245)** | 1️⃣ 将产品/技术文档转 Notion 任务（验收标准 + 跟踪）。2️⃣ 自动化审核简历格式一致性。 | 文档 → 实现 链条和 HR/AI 启动流程的两个“工程化”技能 → 高关注度。 | [OPEN] |
| 4 | **[md2video‑audio](https://github.com/anthropics/skills/pull/1703)** | 将 Markdown 直接转为含人声旁白的高端 MP4 视频（Marp 幻灯片 → 视频）。 | 多媒体内容自动生成的新用途 → 内容创作者关注热点。 | [OPEN] |
| 5 | **[Pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525)** | 为 Pyxel 游戏引擎提供调试、运行验证和状态检查的技能。 | 教育/游戏化工程训练工具 → 持续被提及的“入门技能”。 | [OPEN] |
| 6 | **[webapp‑testing shell 安全修复](https://github.com/anthropics/skills/pull//issues/1980)** *(为 `with_server.py` 删除 shell=True，防命令注入 CWE‑78)* | 从子进程执行中移除 `shell=True`，消除命令注入风险。 | 与 **#492** 信任边界滥用问题一致 → 安全热点。 | [OPEN] |
| 7 | **[文档排版质量控制](https://github.com/anthropics/skills/pull/514)** | 防止孤行、孤立段落、编号错位等排版问题。 | AI 生成文档质量的通用痛点 → 用户抱怨集中。 | [OPEN] |

*若要查看完整的 50 个 PR 列表，请访问* [GitHub PR 浏览页面](https://github.com/anthropics/skills/pulls)。

---

## 2️⃣ 社区需求趋势 *(Issues 挖掘)*

| 趋势 | 代表性 Issue | 热度指标 |
|---|---|---|
| **安全与信任边界** | **#492** (信任边界滥用) – 46 条评论，3 个👍 | 最受关注的问题 |
| **组织内技能共享** | **#228** (Enable org‑wide skill sharing) – 17 条评论，8 个👍 | “共享技能库”呼声高 |
| **技能触发与评估可靠性** | **#556** (`run_eval.py` 触发率 0%) – 13 条评论<br> **#1352** (多 worker 触发率错失) – 6 条评论 | 反复出现类似问题的修复 → 质量瓶颈 |
| **技能发现与去重** | **#189** (文档技能插件重复) – 6 条评论，9 个👍 | 重复内容令人反感 |
| **自动化与工作流工具** | **#1329** (compact‑memory 提案)<br> **#1771** (ProofCore)<br> **#1245** (Notion 转实现) | 新工程化技能需求旺盛 |
| **多媒体内容生成** | **#1868** (渐变背景比例错误)<br> **#2064** (theme‑factory 描述模糊) | UI/视觉技能讨论热 |
| **基础架构修复** | **#1487** (claude‑api 注入 15k 令牌)<br> **#2018** (docx 命名空间泄露) | 核心工具的低级错误堵塞流程 |

**主要方向：** *社区正在推动技能生态向三个核心维度演进——**安全与信任**、**可靠评估与触发**、**高价值自动化工具（从规范到合约、文档到视频、游戏到 HPC）***。

---

## 3️⃣ 高潜力待合并 Skills *(评论活跃 + 可能近期落地)*

| PR | 潜在加速原因 | 合并预期 |
|---|---|---|
| **[skill-creator 修复](https://github.com/anthropics/skills/pull/1298)** | 直接解决 Issue #556/#1352 系列 - 影响所有技能的触发评估 | **Q4 2026** – “质量瓶颈”优先项 |
| **[webapp‑testing shell 安全修复](https://github.com/anthropics/skills/pull/1980)** | 消除 CWE‑78 风险，响应信任边界滥用投诉 | **Q4 2026** – 安全修复快审 |
| **[ProofCore 合约审计器](https://github.com/anthropics/skills/pull/1771)** | Web3 需求强劲，零存储证明概念吸引眼球 | **Q1 2027** – 新型安全技能 |
| **[scnet‑hpc](https://github.com/anthropics/skills/pull/1615)** | 针对 HPC 集群的专用技能，填补企业工作流空白 | **Q1 2027** – 企业级技能 |
| **[文档排版质量控制](https://github.com/anthropics/skills/pull/514)** | 通用的“文档美化”诉求，用户直接看到效果 | **Q4 2026** – 用户友好度优先 |
| **[技能创建器直接执行支持](https://github.com/anthropics/skills/pull/1681)** | 修复 `package_skill.py` 导入问题，降低入门难度 | **Q4 2026** – 工具 usability 提升 |
| **[YAML 前端解析修复](https://github.com/anthropics/skills/pull/1997)** | 确保 `parse_skill_md` 与 `SKILL.md` 的一致性 → 评估准确性 | **Q4 2026** – 元数据一致性优先 |

*如果您需要更详细的进度跟踪，请订阅 PR 的“conversation”标签。*

---

## 4️⃣ Skills 生态洞察 *(一句话总结)*

> **社区当前最集中的诉求是建立一个安全、可靠且可共享的技能生态：从高价值自动化工具（合约审计、规范到实现、多媒体生成）开始，辅以可靠评估、安全修复和组织级技能共享能力。**

---

**今日速览**  
- 发布 **v2.1.328**，新增 Claude Opus 4.6 / Sonnet 4.6 的 auto‑mode 以及对多平台 MCP tool 的 `onFailure: "block"` 处理。  
- 社区热议的 Issue 与 PR 主要聚焦于 **账号多账户支持、记忆上下文集成、模型选择与性能稳定性** 等核心需求。  

---  

### 1. 版本发布  
**v2.1.328** – 2026‑11‑18  
- **auto mode**：为 Claude Opus 4.6、Sonnet 4.6（Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry、Claude apps gateway）以及交互式会话开启默认模式，无需额外权限。  
- **MCP tool 钩子**：`"onFailure": "block"` 成为默认行为，与命令和 HTTP hook 保持一致，防止异常传播。  

---  

### 2. 社区热点 Issues（共 10 条）  

| # | 标题 | 关键意义 | 社区反应 | 链接 |
|---|------|----------|----------|------|
| 1 | **Support multiple Connector accounts** (Issue #27302) | 允许同一 Connector 在 Web 端使用不同账号，提升企业/多项目管理能力。 | 320 条评论、483 赞 → 高度关注的功能需求。 | <https://github.com/anthropics/claude-code/issues/27302> |
| 2 | **Unarchive Claude Code sessions in desktop app** (Issue #30869) | 为桌面客户端提供会话“未归档”入口，改善会话可视化与回收。 | 31 条评论、70 赞 → 仍被视为有价值的增强。 | <https://github.com/anthropics/claude-code/issues/30869> |
| 3 | **Permission prompts not rendering on mobile** (Issue #35637) | 移动端 `claude remote-control` 与交互式权限提示不可见，导致会话卡死。 | 28 条评论、33 赞 → 强调跨平台 UI 稳定性。 | <https://github.com/anthropics/claude-code/issues/35637> |
| 4 | **Claude Code should access user's claude.ai memory and context** (Issue #14228) | 打通 claude.ai 与 Claude Code 两端的上下文，消除用户体验断裂。 | 18 条评论、46 赞 → 高频需求，已获多方认可。 | <https://github.com/anthropics/claude-code/issues/14228> |
| 5 | **Opus 5 prose returned as summarized “thinking” blocks** (Issue #95764) | 文字内容被服务器概括为 thinking 块，导致代码块丢失且模型误判。 | 12 条评论、10 赞 → 影响可读性与调试。 | <https://github.com/anthropics/claude-code/issues/95764> |
| 6 | **Assistant text never displayed before AskUserQuestion** (Issue #75182) | 同一回合中，助理文字块在调用 AskUserQuestion 前不可见。 | 11 条评论、14 赞 → 影响交互流畅度。 | <https://github.com/anthropics/claude-code/issues/75182> |
| 7 | **Desktop scheduled tasks: model selection broken** (Issue #91884) | 任务模型picker 未尊重用户设置，MCP tool 缺少模型参数。 | 10 条评论、3 赞 → 直接影响工作流可靠性。 | <https://github.com/anthropics/claude-code/issues/91884> |
| 8 | **Native /goal Stop hook re-fires indefinitely** (Issue #94041) | 会话持续触发 stop‑hook，导致使用费用失控。 | 9 条评论、4 赞 → 严重的性能/成本风险。 | <https://github.com/anthropics/claude-code/issues/94041> |
| 9 | **Cowork remote session file upload fails (≥4 MB)** (Issue #110676) | 大文件上传报 “upload failed” 与 503 错误，影响协作。 | 8 条评论、0 赞 → 实际阻碍大文件协作。 | <https://github.com/anthropics/claude-code/issues/110676> |
|10| **API 403 authentication_failed from Cloudflare interrupts agent run** (Issue #109676) | 间歇性 Cloudflare 403 导致 Agent 早结束，影响自动化任务。 | 1 条评论、0 赞 → 体现外部网络安全的影响。 | <https://github.com/anthropics/claude-code/issues/109676> |

---  

### 3. 重要 PR 进展（共 1 条）  

| # | 标题 | 内容概述 | 链接 |
|---|------|----------|------|
| 1 | **Fix duplicated word in CHANGELOG.md** (PR #86537) | 修正 `CLAUDE_BASH_NO_LOGIN` 条目中的重复词 “to to”，纯文档修复，无功能影响。 | <https://github.com/anthropics/claude-code/pull/86537> |

> 截至 2026‑11‑19，仅此一份文档类 PR 更新，暂无功能性 PR 通过审查。  

---  

### 4. 功能需求趋势  

- **账号/Connector 多账户管理**：#27302 体现社区对同一 Connector 使用多账号的强需求，期待更灵活的身份切换。  
- **上下文统一**：#14228、#30869、#109631 等均要求 Claude Code 能直接访问 claude.ai 的记忆、会话上下文，实现无缝协同。  
- **模型与 effort 选择**：#111079、#109631、#111072 表明用户希望在调度任务时细化模型家族（如 “Opus latest”）、设定 effort 以及跨会话的模型/ effort 独立配置。  
- **性能与稳定性**：#80708（进程限制导致挂起）、#94041（stop‑hook 循环）以及 #35637（移动端 UI 卡死）显示社区对系统资源管理、循环保护和跨平台渲染的高度关注。  
- **文件与传输可靠性**：#110676、#105096（大粘贴导致会话挂）揭示了大文件上传、粘贴处理以及资源回收机制的薄弱环节。  
- **安全与误报**：#111076（cyber safeguard 阻断合法安全研究）和 #109676（Cloudflare 403）表明在安全防护与合法工作流之间需要更精细的策略。  

总体来看，社区正在向 **更细粒度的账号/权限控制、上下文共享、模型/成本可配置、以及系统可靠性** 方向发展。  

---  

### 5. 开发者关注点（痛点与高频需求）  

1. **跨平台 UI 失效**：移动端权限提示不渲染、桌面任务模型picker 失效、iOS 会话窄列等导致工作流中断。  
2. **资源与进程管理**：#80708 显示子进程积压导致用户进程上限耗尽，需要更智能的进程回收机制。  
3. **大文件与粘贴处理**：#105096 与 #110676 表明大粘贴、文件上传对系统稳定性影响显著，亟需大小限制、分块上传或背景处理。  
4. **权限与身份管理**：#27302、#109676、#105090 反映在多账户、SSO（Microsoft Entra）以及 Cloudflare 环境下的身份验证困难。  
5. **会话与工作流一致性**：#30869、#107207、#109631 要求会话层级、子会话以及定时任务的统一管理与可视化，提升协同体验。  
6. **模型/费用透明**：#92437（Fable 使用者计费不可见）与 #109284（/goal stop‑hook 频繁触发费用消耗）凸显用户对费用监控与模型选择的透明需求。  

---  

**结论**：本日报显示 Claude Code 正在快速迭代新模型支持与 auto‑mode 能力，同时社区围绕 **多账户管理、记忆上下文集成、模型/成本可配置、性能稳定性以及跨平台可靠性** 展开深入讨论。开发者的高频痛点主要集中在 UI 失效、资源回收、大文件处理以及安全/身份验证环节，这些将是后续功能优先级的关键方向。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-19）

## 1. 今日速览

今天 Gemini CLI 发布 **v0.69.0** 与 **v0.70.0-preview.0**，前者带来模板占位符 `$` 修复和 `/stats` 热力图统计，后者主要是预览版 changelog 汇总与夜间版本推进。社区讨论最集中的方向仍是 **Subagent 可靠性、Agent 挂起、Skills/Subagent 主动调用不足、Browser Agent 配置失效**。PR 侧则围绕 **Windows PowerShell UI 冻结、ACP 模式工具输出截断/并行执行、多模态二进制注入修复** 展开。

---

## 2. 版本发布

### v0.69.0

- 修复模板占位符替换过程中可能破坏字面量 `$` 字符的问题：  
  `fix(core,cli): preserve literal $ characters during template placeholder replacement`  
  https://github.com/google-gemini/gemini-cli/pull/30136

- 新增 `/stats` 子命令，可按天查看 token 使用热力图：  
  `feat(cli): add /stats heatmap subcommand for daily token usage`  
  https://github.com/google-gemini/gemini-cli/releases/tag/v0.69.0

- 自动生成的 v0.69.0 changelog 已进入待合并流程：  
  https://github.com/google-gemini/gemini-cli/pull/30365

### v0.70.0-preview.0

- 主要包含 v0.69.0-preview.0、v0.68.0 的 changelog 汇总，以及版本号 bump 到 `0.70.0-nightly.20261110.g1603e9b`。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报**  
*日期：2026-11-19*

---

### 1. 今日速览
- **v1.0.114** 正式发布，包含多个问题修复（具体变更暂未披露）。
- **企业级模型获取问题**（Issue #1595）引发关注，因政策阻塞导致用户无法列出可用模型。
-  MCP OAuth 流程问题频发，包括非首发制服务认证失败、浏览器窗口阻止粘贴以及单租户授权异常等。

---

### 2. 版本发布
- **v1.0.114** (2026-11-18) – “修复和变更”
  - 当前版本信息较简略，确切补丁内容需查阅提交历史。用户建议关注发布后的稳定性更新。

---

### 3. 社区热点 Issues （按评论数 & 影响排序）

| 排名 | Issue | 核心问题 | 重要性 | 社区反响 |
|------|-------|----------|--------|------------|
| 1 | **#1595** [OPEN] [area:enterprise, area:models] 突发政策阻塞导致模型列出失败 | 合法的企业 Copilot 子账户显示可用余额，但 `/models` 命令直接报错“访问被策略拒绝”。此 bug 直接影响企业用户的模型选择。 | 30 条评论，👍 11 | 高关注，企业用户迫切需要验证政策屏蔽原因及解决办法。 |
| 2 | **#5478** [OPEN] [area:platform-windows, area:tools] Cortex XDR 杀死启动的 Shell | 在文件夹内运行 `git` 时，Copilot CLI 会触发 Cortex XDR 的 `parent_process_spoofing` 策略，导致 PowerShell/cmd 崩溃。 | 7 条评论，👍 1 | Windows 安全软件用户关注点，正影响日常开发流程。 |
| 3 | **#4017** [OPEN] [area:authentication, area:mcp] 非首发制 HTTP MCP 服务器无法完成 OAuth | Atlassian、incident.io 等非首发制远程 MCP 服务器在桌面端 OAuth 流程中无法自动跳转浏览器，导致认证永久卡在“连接中”。 | 7 条评论，👍 3 | MCP 生态拓展性关键问题，影响众多第三方集成。 |
| 4 | **#5347** [OPEN] [area:mcp] “已连接连接器无法加载” 警告仅出现在交互会话 | 交互式 CLI 启动时弹出此警告，而 `-p`（非交互）模式则正常加载连接器。报错仅出现在调试日志中，用户体验差。 | 2 条评论 | 稳定性和诊断透明度问题，影响用户对连接器状态的判断。 |
| 5 | **#5473** [OPEN] [area:authentication, area:platform-windows] Windows 凭证管理器堆积无效的 `copilot-keychain-chunk.*` 项 | 重复项不断增加，导致用户vault 填满，进而引发与其它工具的凭证存储冲突。 | 2 条评论 | Windows 平台下的资源泄漏问题，可能造成连锁认证失败。 |
| 6 | **#5452** [OPEN] [area:authentication, area:platform-windows] Entra OAuth 强制使用原生 OneAuth 窗口，阻止粘贴 | 自 1.0.109 起，`/mcp auth azure-devops` 强制打开 OneAuth 浏览器，密码字段完全无法粘贴，严重影响用户体验。 | 1 条评论 | Windows 用户反馈强烈，迫切需要浏览器回退选项。 |
| 7 | **#5402** [OPEN] [area:authentication, area:platform-windows] 静默 Entra 登录使用 `/common` 权威节点 | Windows 环境下自动签入始终请求 `login.microsoftonline.com/common`，即使 MCP 服务器元数据显式声明了特定租户，导致单租户应用认证失败（AADSTS50194）。 | 1 条评论，👍 1 | 租户专用应用的认证兼容性问题，导致用户每次启动均需手动 `/mcp auth`。 |
| 8 | **#5410** [OPEN] [area:mcp] Agent Plugins 格式插件无法设置 MCP OAuth 选项 | 插件无法为 remote MCP 服务器配置 `oauthClientId` 和 `auth.redirectPort` 等参数，导致某些 Looker 等服务器无法通过精确回调 URI 注册认证。 | 1 条评论 | 插件开发者关注点，影响某些特定 MCP 服务器的集成。 |
| 9 | **#5157** [OPEN] [area:authentication, area:mcp] 来宾账户无法指定特定租户进行 MCP 认证 | `/mcp auth` 命令无法手动指定目标租户（如 Fabric 相关 MCP 服务器），来宾用户只能使用默认主租户。 | 2 条评论 | 多租户协作场景痛点。 |
| 10| **#5250** [OPEN] [area:authentication, area:mcp] macOS 上的 Entra 代理 MCP 服务器启动失败 | 两个 Azure DevOps 等 Entra 保护的 MCP 服务器在 macOS 终端启动时出现“签入已进行中”及缓存令牌丢失等错误。 | 4 条评论 | macOS 特定平台 Bug，影响部分 Enterprise 合作伙伴。 |

*(其余 Issue 则包括#5350、#5341、CLOSE、#3889 等，问题虽重要但讨论热度较低，已不再赘述。)*

---

### 4. 重要 PR 进展
- **暂无** – 过去 24 (reader 小时内无 PR 更新。*

---

###  Rembrandt 功能需求趋势

| 趋势方向 | 相关 Issue | 典型反馈 |
|-----------|------------|-----------|
| **MCP OAuth 认证 UX** | #4017, #5452, #5402, #5410 | 认证流程需支持浏览器回退、手动租户选择、插件 OAuth 参数配置等。 |
| **企业政策与模型可见性** | #1595, #5481 | 用户希望组织管理的 GPT 模型能像托管版那样延迟加载 MCP 工具，并减少政策误报。 |
| **启动性能与诊断透明度** | #5347, #5090 | 需要异步初始化以及清晰的日志/事件通知（如启动完成钩子），减少“连接器无法加载”警告。 |
| **跨平台安全软件兼容性** | #5478, #5473 | 需修复 Windows 上凭证泄漏及安全软件杀进程问题；macOS 需稳定 Entra 代理认证流程。 |
| **插件/扩展注册表增强** | #5410, #5487, #5380 | 支持 Agent 插件格式 OAuth 配置， expose 稳定 turn ID， 确保扩展工具按需加载。 |
| **会话与代理工具一致性** | #2949, #5195, #5191 | 修复子代理工具发现范围、文本-only 响应断开 MCP 连接以及自定义 agent 选择导致的工具加载异常。 |
| **IDE/ACP 集成缺失** | #5397, #5447 | `copilot --acp` 模式缺少 Copilot Connector 工具及 IDE 连接，影响企业 IDE 用户体验。 |

---

### 5. 开发者关注点（痛点总结）

| 问题类别 | 常见症状 | 用户期望 |
|------------|----------------|-------------------ங்க |
| **认证流程** | OAuth 浏览器窗口阻碍粘贴，静默登录使用 `/common` 权威节点，租户专用应用失败 | 提供浏览器回退选项，支持显式租户参数，改善 Windows/Mac 平台下的用户体验。 |
| **MCP 服务器连接** | “已连接连接器无法加载” 警告，连接超时后仍发送 legacy 初始化请求，导致服务器拒绝 | 异步启动、清晰诊断日志、超时重试机制、连接完成事件通知。 |
| **企业政策** | 模型列表请求被策略阻止，无法验证可用模型 | 更细粒度的政策日志、用户可控白名单/黑名单，解决误报问题。 |
| **平台安全软件** | PowerShell/cmd 被安全软件杀掉，凭证管理器堆积无效项 | 与 Windows 安全软件建立互信白名单机制，提供凭证自动清理机制。 |
| **插件/扩展管理** | 扩展工具延迟加载， Agent 插件格式 OAuth 配置缺失 | 插件应可声明 OAuth 客户端 ID/回调端口，实现按需加载及细致控制。 |
| **启动性能** | 启动耗时 >10 秒，用户体验差 | 异步初始化非关键服务，仅在需要时加载，确保即点即用。 |
| **代理工具一致性** | 子代理工具发现范围受父代理限制，文本-only 响应断开 MCP 连接 | 确保子代理独立工具发现，保持 MCP 连接在文本响应时也保持。 |

---

**总结** – 本周 Copilot CLI 社区主要聚焦在 MCP 认证流程的平台兼容性改进、企业模型可见性控制以及插件/扩展的异步初始化和事件通知。开发者迫切需要更透明的日志诊断、更友好的 OAuth 交互以及更细粒度的安全策略配置以提升稳定性和用户体验。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

根据您提供的 GitHub 数据，以下是 **2026-11-19 日 Kimi Code CLI 社区动态日报**：

---

### 1. 今日速览
今日 Kimi Code CLI 社区整体活跃度较为平静，过去24小时内无新版本发布，也无新增或更新的 Issues。社区唯一的动态是一条关于 **Zed 编辑器集成文档更新**的 Pull Request (#1178) 已被关闭，表明项目在多编辑器兼容与文档建设方面有新的推进。

---

### 2. 版本发布
* **今日暂无新版本发布。** 过去24小时内未发布任何 Release。

---

### 3. 社区热点 Issues
* 根据提供的数据，过去24小时内无任何更新的 Issues（共 0 条）。今日暂无值得关注的社区热点 Issue。

---

### 4. 重要 PR 进展
根据数据，过去24小时内仅有 1 条 PR 记录：

* **#1178 [CLOSED] docs(ides): Replace instructions on how to use Kimi CLI in Zed**
  * **作者**：yeskunall
  * **状态**：已关闭 (CLOSED)
  * **功能/修复内容**：该 PR 替换了关于如何在 Zed 编辑器中使用 Kimi CLI 的安装和配置指南。
  * **重要性**：Zed 是一款近年来备受关注的高性能、跨平台代码编辑器。完善 Kimi CLI 在 Zed 中的集成文档，能够显著降低使用该编辑器的开发者的上手门槛，提升工具的可及性。
  * **GitHub 链接**：[MoonshotAI/kimi-cli PR #1178](https://github.com/MoonshotAI/kimi-cli/pull/1178)

---

### 5. 功能需求趋势
由于今日无新增 Issue 数据，无法进行大规模趋势分析。但从唯一的文档类 PR 来看，社区对 **多 IDE 集成（特别是针对 Zed 等新兴编辑器）的开发体验优化** 保持了持续关注。降低多环境配置成本、提供清晰的接入文档是社区贡献的重要方向。

---

### 6. 开发者关注点
今日数据表明，开发者的核心关注点在于**工具的易用性与编辑器兼容性**。确保 Kimi CLI 能够无缝融入开发者日常使用的各种 IDE 环境（如 Zed），减少配置摩擦，是推动工具落地和社区健康发展的关键。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报 – 2026-11-19**

---

### 1. 今日速览
今日核心活动集中在三个方面：(1) 解决用户报告的实用性 bug——包括 Linux 配置散落、Windows 终端鼠标滚轮及上下文窗口不匹配等问题；(2) 提升性能和可靠性——解决 transcript 渲染、自动清理及某些 AI 供应商的连接问题；(3) 扩展开发人员工具——新增状态读取功能、消息转换器以及更多 hosted 模型供应商支持。

---

### 2. 版本发布
- **无** 近期没有正式发布的版本更新。

---

### 3. 社区热点 Issues *(按社区反响排序)*

| # | 问题标题 | 状态 | 社区反馈 (评论/👍) | 重要性 |
|---|----------------|---------|----------------------|----------------|
| **#2870** | **[bug] Follow XDG Base Directory** | 已关闭 | 29 条评论 / 75👍 | 修复 Linux 上配置目录散落的问题（Home 目录下），这影响了与现代桌面环境的兼容性。 |
| **#9549** | **[inprogress] [fullscreen] 大型 transcript 每帧重新渲染；每次调整窗口大小都会重新发送整个 transcript（1 个核心饱和）** | 进行中 | 19 条评论 / 1👍 | Fullscreen UI 中主要性能瓶颈；流式 transcript 的重新渲染导致高 CPU 使用率，影响用户体验。 |
| **#11021** | **openai: ChatGPT 登录仍使用 272K 的 GPT-6.1 Sol 上下文窗口，尽管账户目录报告 500K** | 进行中 | 16 条评论 / 8👍 | 直接影响到 AI 响应的实际 Token 预算，用户获得的可用上下文比 advertised 的要少约 46%。 |
| **#9656** | **[bug] 鼠标滚轮在 Fullscreen + Zellij（Windows）上滚动的是 prompt 历史记录而不是 transcript** | 进行中 | 15 条评论 / 6👍 | 严重破坏了在 Windows 终端复用器（如 Zellij）上的会话导航体验。 |
| **#11529** | **工具顺序取决于注册顺序，因此相同的工具可以破坏提示缓存** | 进行中 | 5 条评论 / 0👍 | 影响了缓存的稳定性；工具顺序不一致会导致相同的请求每次都产生新的提示，降低性能。 |
| **#12060** | **[inprogress, prio:p0] openai-codex: SSE 请求当使用 zstd 压缩时返回 400 {“detail”:“Bad Request”}** | 进行中 | 4 条评论 / 0👍 | 影响了进行中会话的可靠性；长会话偶尔失败，破坏了连续操作。 |
| **#12035** | **Threshold compaction 在选择的虚拟模型时远低于窗口内触发** | 进行中 | 3 条评论 / 0👍 | 导致长时间运行的会话不必要的清理，浪费存储空间。 |
| **#12282** | **[untriaged] llama.cpp 决策分类器忽略 advertised 的 image 输入** | 已关闭 | 3 条评论 / 0👍 | 阻止了视觉功能；模型声称支持图像，但 Pi 仍将其视为文本-only，导致 classify 调用失败。 |
| **#12300** | **[untriaged] `codemode` sandbox 由于工作目录被删除而出现 uv_cwd ENOENT 错误** | 已关闭 | 2 条评论 / 0👍 | 破坏了在 git worktree 中的会话；一次性清理会导致沙盒异常崩溃。 |
| **#12298** | **[untriaged] 提供一个只读接口来读取通过 `ctx.ui.setStatus()` 设置的扩展状态** | 已关闭 | 1 条评论 / 0👍 | 扩展开发人员的常用功能缺失；需要监控由其他扩展设置的状态。 |

---

### 4. 重要 PR 进展

| # | PR 标题 | 状态 | 功能或修复摘要 |
|---|--------------|---------|-------------------|
| **#10680** | **fix: 支持 npm 12 pack JSON 输出** | 已关闭 | 解决了 npm 12 中 `npm pack --json` 输出格式的变化（对象而非数组），确保了打包、发布检查及本地发布的兼容性。 |
| **#12278** | **fix(coding-agent): 在交互式重载时刷新作用域模型** | 进行中 | `/reload` 命令现在会重新加载扩展注册的 scoped 模型，使 `enabledModels` 的修改在无需重启的情况下生效（`--models` 参数仍优先）。 |
| **#12283** | **fix(coding-agent): 像 Ctrl+Z 一样处理外部 SIGTSTP 信号** | 进行中 | `kill -TSTP <pi-pid>` 现在会暂停终端并恢复光标，行为与 Ctrl+Z 相同，避免了终端卡住的问题。 |
| **#12280** | **fix(coding-agent): 树导航不再重复添加到历史记录中** | 进行中 | 修复了 `/tree` 选择器和 `navigateTree` 操作在导航时将整个分支的提示添加到 Up-arrow 历史记录的问题。 |
| **#11370** | **feat(ai,coding-agent): 新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow 和 StepFun 供应商** | 进行中 | 为 Pi AI 提供了六个新的 Hosted 推理供应商，每个供应商均配置了相应的 API 端点和密钥，目前支持 74 个模型。 |

---

### 5. 功能需求趋势

| 趋势方向 | 相关 Issue/PR 示例 |
|--------------|---------------------------|
| **配置和环境管理** | #2870 (XDG Base Directory) |
| **性能和内存管理** | #9549 (transcript 重绘), #11529 (缓存), #12035 (compaction), #12060 (SSE/zstd) |
| **模型和供应商支持** | #11021 (上下文窗口), #12282 (图像输入), #11370 (新增供应商) |
| **终端和 UI UX** | #9656 (鼠标滚轮), #12280 (树导航历史记录), #12237/#9515 (退出时 resume 命令格式) |
| **扩展开发人员工具** | #12298 (状态读取), #11932 (自动重试决策), #11450 (助手消息转换器) |
| **可靠性和错误处理** | #12300 (sandbox 路径错误), #12299 (kill_tree), #12293 (Anthropic 服务工具), #12289 (xAI 容量错误) |
| **存储优化** | #12285 (SQLite 增量更新) |

**总结：**社区最关注的是提高 Linux 下的配置合规性、解决 Fullscreen 模式下的性能瓶颈、稳定 AI 供应商的连接以及增强扩展开发人员工具。

---

### 6. 开发者关注点

| 痛点/高频需求 | 典型问题/反馈 |
|-------------------|--------------------------|
| **配置混乱** | 用户报告 Pi 在 Linux 上创建了散落的配置文件；需要遵循 XDG Base Directory 标准。 |
| **UI 交互 bug** | Windows+Zellij 下鼠标滚轮滚动错误、Fullcreen 模式下 transcript 重新渲染以及树导航历史记录重复等问题影响了日常使用。 |
| **上下文窗口不匹配** | ChatGPT 登录后报告的上下文窗口小于 advertised 的值，导致用户浪费配额。 |
| **供应商特定问题** | openai-codex SSE 请求对 zstd 压缩有问题；Anthropic 服务工具使用导致上下文成倍增加；xAI “模型已满”错误未重试。 |
| **扩展开发人员痛点** | 缺乏只读状态 API、自动重试决策钩子以及助手消息转换功能；sandbox 对工作目录的清理过于严格。 |
| **存储和清理 bug** | long-lived 嵌入式 SDK 会话从不清理内存；compaction 触发时机不准确；SQLite upsert 每次都更新所有列，降低了写入性能。 |
| **终端和信号处理** | 外部 SIGTSTP 信号会挂起终端；kill_tree 可能误杀已重用的 PID。 |

**总体方向：**社区呼声最高的是修复这些影响用户体验和资源效率的关键 bug，并增强扩展开发人员工具以支持更复杂的自动化工作流。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-19

> 数据范围：过去 24 小时更新的 Issues（11）与 Pull Requests（15）。当日无新 Release。

---

## 1. 今日速览

过去 24 小时没有新版本发布，社区注意力集中在 **TUI 稳定性与会话状态存储的可扩展性** 上：多个 Issue 指向同一根因簇——长会话下 undo / 用量账本 / 快照路径的重复读取与容量上限导致 TUI 冻结甚至无法持久化。与此同时，修复侧响应非常迅速，#7357、#7343、#7355、#7304 均有对应 PR 在同日关闭，另有 3 个 OpenAI 兼容网关（UberLLM、Synap、TrustedRouter）的 provider 描述符 PR 处于待审状态。

---

## 2. 版本发布

无新 Release。值得注意：#7203 被标记为 **`release-blocker, v0.10.3, status:awaiting-release`**，ChatGPT 认证校验失败可能继续阻塞 v0.10.3 发布。

---

## 3. 社区热点 Issues（10 选）

| # | 标题要点 | 重要性 / 社区反应 |
|---|---|---|
| [#7203](https://github.com/codewhale-hq/Codewhale/issues/7203) | `auth chatgpt` 浏览器登录成功后报 "token signature or identity claims failed verification"，`auth status` 仍显示 `active source: missing` | **发布阻塞级**（release-blocker, v0.10.3）。6 条评论为全场最高，直影响 OpenAI 用户可用性 |
| [#7357](https://github.com/codewhale-hq/Codewhale/issues/7357) | 保存快照请求与新 turn 起始时间重叠时，TUI 在整个下一 turn 完全冻结（实测 209 秒），只能关终端 | 严重可用性缺陷，已由 PR #7360 修复闭环 |
| [#7356](https://github.com/codewhale-hq/Codewhale/issues/7356) | late-usage ledger 达到 1 MiB 后 session 完全无法保存，compaction 报 `Making room failed`，对话停止持久化 | 数据丢失风险，等级最高类问题之一 |
| [#7348](https://github.com/codewhale-hq/Codewhale/issues/7348) | retained usage 达 256 条时，turn 在请求发出前即失败；容量处理逻辑声称 continue 实际 reject，与 0.10.3 changelog 不符 | 逻辑与文档不一致，影响计费/记账可信度 |
| [#7347](https://github.com/codewhale-hq/Codewhale/issues/7347) | `prepare_model_bound_request` 每次请求都对全部 tool result 重跑 secret redaction，成本随会话线性增长 | 性能类，直接影响长会话延迟 |
| [#7355](https://github.com/codewhale-hq/Codewhale/issues/7355) | `/undo <turn_id>` 对同一 turn store 读两遍，200-turn 会话打开 400 个文件（深度路径只需 200） | 已由 PR #7362 修复 |
| [#7365](https://github.com/codewhale-hq/Codewhale/issues/7365) | opencode-zen 免费模型行是"死胡同"：网关校验精确 payload 与 TLS cipher list，返回 429 FreeUsageLimitError | 免费模型可用性，50 个模型项列出但不可用 |
| [#7343](https://github.com/codewhale-hq/Codewhale/issues/7343) | 每次窗口获得焦点都全屏 `CSI 2J` 重绘，在不支持 DEC 2026 的终端（gnome-terminal / VTE < 0.76）上明显闪烁 | 已由 PR #7363 修复（focus recapture 与 clear 解耦） |
| [#7328](https://github.com/codewhale-hq/Codewhale/issues/7328) | provider 失败原因仅存于英文散文（session record / `receipts`），未进诊断日志，也无结构化 code / receipt 字段 | 可观测性缺口，故障排查只能靠读日志文本 |
| [#7344](https://github.com/codewhale-hq/Codewhale/issues/7344) | GNOME Terminal 退出后保留 CodeWhale 的 Nord 配色（背景 `#ECEFF4`），palette 仍为 Solarized | 终端环境污染，Linux 用户高频可见 |

> 另有 [#7304](https://github.com/codewhale-hq/Codewhale/issues/7304)（zh-Hans TUI 标签错位、工具格/`/help`/`/diff`/composer 残留英文）已于当日 CLOSED，由 PR #7367 完成剩余字符串本地化。

---

## 4. 重要 PR 进展（10 选）

| # | 类型 | 内容 |
|---|---|---|
| [#7360](https://github.com/codewhale-hq/Codewhale/pull/7360) | Bugfix（已关闭） | 将 turn 完成时的终端快照等待收敛到既有 2 秒 Engine 快照上限；Engine 忙于新 turn 时回到事件循环，**直接修复 #7357 的整 turn 冻结** |
| [#7363](https://github.com/codewhale-hq/Codewhale/pull/7363) | Bugfix（已关闭） | 焦点恢复与显式清屏解耦：先还原 terminal modes / margins / origin 再重绘 viewport，消除 DEC 2026 缺失终端上的白屏闪烁（对应 #7343） |
| [#7362](https://github.com/codewhale-hq/Codewhale/pull/7362) | 性能（已关闭） | 命名 turn undo 复用已加载记录，消除整段 history 二次读取，解决 #7355 的双倍 IO |
| [#7366](https://github.com/codewhale-hq/Codewhale/pull/7366) | Bugfix（已关闭） | file-scoped restore 中途失败时，用既有 safety snapshot 回滚已执行的 checkout 批次与删除，避免半成品工作区 |
| [#7367](https://github.com/codewhale-hq/Codewhale/pull/7367) | i18n（已关闭） | 补齐 #7304 剩余的 6 处硬编码英文，15 个语言包同步新增 key；英文输出逐字节不变，zh-Hans 使用全角标点 |
| [#7364](https://github.com/codewhale-hq/Codewhale/pull/7364) | Bugfix（已关闭） | Moonshot(Kimi) 路由上，带 `None` 默认值的可选参数（FastMCP / Pydantic v2 序列化结果）导致 MCP tool 被丢弃，模型完全看不到该工具 |
| [#7285](https://github.com/codewhale-hq/Codewhale/pull/7285) | Feature（OPEN） | 新增 UberLLM bundled descriptor：单 key 接入 OpenAI/Anthropic/Google/DeepSeek/Qwen/GLM/Kimi，价格通常低于标价 |
| [#7340](https://github.com/codewhale-hq/Codewhale/pull/7340) | Feature（OPEN） | 接入 Synap：`https://synap402.com/v1`，`SYNAP_API_KEY`，bootstrap 模型 `qwen3-coder-30b`，模型 ID 与价格以 live `GET /v1/models` 为准 |
| [#7350](https://github.com/codewhale-hq/Codewhale/pull/7350) | Feature（OPEN） | 接入 TrustedRouter：`TRUSTEDROUTER_API_KEY` + `https://api.trustedrouter.com/v1`，沿用 Opper（#7131）同款 descriptor 形态 |
| [#7337](https://github.com/codewhale-hq/Codewhale/pull/7337) | 依赖（已关闭） | `jsonschema` 0.57.0 → 0.61.2；同日还有 `lru` 0.18.5→0.19.0（#7336）、`actions/setup-java` 6.1.0→6.2.0（#7335）、`docker/login-action` 4.7.0→4.8.0（#7333）、`action-gh-release` 3.0.3→3.0.4（#7332）、内部 publish action（#7330）共 6 个 Dependabot 合并，CI 基座集中更新 |

---

## 5. 功能需求趋势

1. **Provider 生态扩张（最活跃方向）**：3 个外部贡献者 PR 同日推进 OpenAI 兼容网关（UberLLM / Synap / TrustedRouter），加上 opencode-zen 免费模型诉求，显示社区强烈需要"一个 key 多模型、低于标价"的接入路径。
2. **可观测性与结构化错误**：#7328、#7348 都指向同一诉求——错误码、receipt 字段、诊断日志要有机器可读的 typed code，而不是散文式报错。
3. **本地化收尾**：#7304 → #7367 的闭环表明 zh-Hans 等语言包进入"最后一公里"清理阶段。
4. **认证与计费可信度**：ChatGPT 签名校验（#7203）与 usage ledger 容量（#7348/#7356）说明账号体系与用量记账正在成为核心信任面。

---

## 6. 开发者关注点（痛点提炼）

- **会话越大越慢、越容易坏**：redaction 每次全量重跑（#7347）、undo 双倍读盘（#7355）、ledger 触 1 MiB 即不可保存（#7356）、usage 256 条即拒单（#7348）——状态存储缺少增量/分页/容量优雅降级设计。
- **渲染层终端兼容性**：DEC 2026 未普及导致焦点闪烁（#7343）、配色泄漏（#7344）、快照等待无界（#7357），TUI 与真实终端生态的适配仍是主要工单来源。
- **故障定位成本高**：原因只存在于英文日志与 receipts，诊断日志无结构化字段，社区排障依赖人工读日志（#7328）。
- **发布节奏被单一认证问题阻塞**：v0.10.3 因 #7203 处于 awaiting-release 状态，需优先跟进。

---

*注：原始标注数据源为 Hmbown/DeepSeek-TUI，但 Issues/PR 链接均指向 `codewhale-hq/Codewhale`，本报告按所提供的实际链接呈现；建议核对数据管道中的仓库映射。*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*