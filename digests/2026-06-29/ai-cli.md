# AI CLI 工具社区动态日报 2026-06-29

> 生成时间: 2026-06-29 02:36 UTC | 覆盖工具: 9 个

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


# AI CLI Tools Ecosystem Comparative Analysis Report (2026-06-29)

## 1. Ecosystem Overview

The AI CLI tool landscape is rapidly maturing, with tools like Claude Code and OpenAI Codex focusing on stability and core functionality while newer entrants like OpenCode and DeepSeek TUI prioritize cross-platform compatibility and advanced agent behaviors. Cross-tool collaboration patterns are emerging, evidenced by shared concerns around cost transparency, plugin ecosystems, and security compliance. Performance optimization and resource efficiency are critical focus areas across all platforms, driven by real-time usage monitoring and enterprise adoption requirements.

## 2. Activity Comparison Table

| Tool | Issues (24h) | PRs (24h) | Releases | Key Activity Areas |
|------|--------------|-----------|----------|---------------------|
| **Claude Code** | 10+ high-priority | 5+ security/features | None | Authentication, Windows stability, subagent control |
| **OpenAI Codex** | 10+ performance/cost | 10+ fixes/features | None | Rate limits, SQLite I/O, cross-platform UI |
| **Gemini CLI** | 10+ agent/memory | 10+ stability/pricing | Nightly v0.51.0 | Agent reliability, memory security, session management |
| **GitHub Copilot CLI** | 3 | 2 docs/process | None | Enterprise auth, file system browsing |
| **Kimi Code** | 2 | 0 | None | File reading loops, VSCode memory leaks |
| **OpenCode** | 50+ TUI/performance | 50+ integrations | None | TUI consistency, model compatibility, platform support |
| **Pi** | 10+ UI/providers | 10+ fixes/features | None | Plan/Agent mode clarity, editor stability |
| **DeepSeek TUI** | 10+ Auto/plan modes | 10+ UI/stability | None | Auto mode refinement, localization, security audits |

## 3. Common Focus Areas

### Cross-Platform Compatibility
- **Claude Code**: Windows model parsing errors (#63875)
- **OpenAI Codex**: macOS syspolicyd spikes (#25719), Windows freezes (#20214)
- **OpenCode**: Termux support (#961), Windows find issues (#6104)
- **Pi**: Universal modal UI fixes (#3750)

### Performance & Cost Management
- **Claude Code**: Subagent infinite loops (#68619), auto-compaction cost bugs (#70459)
- **OpenAI Codex**: SQLite I/O overload (#28224), rate limit errors (#32503)
- **Gemini CLI**: Tool count limits causing 400 errors (#24246), web search timeouts (#27910)

### Plugin & Extension Ecosystems
- **Claude Code**: Missing /plugin command (#42142), plugin installer updates (#72000)
- **OpenCode**: Gemma-4 compatibility issues (#21034), remote plugin enablement (#30297)
- **DeepSeek TUI**: Localization efforts (#3093) suggest market expansion needs

## 4. Differentiation Analysis

### Target Users & Focus
- **Claude Code**: Enterprise-focused with emphasis on security (Cedar policies) and compliance
- **OpenAI Codex**: Performance-oriented for developers needing IDE integration and detailed usage analytics
- **Gemini CLI**: Experimental research workflows with strong agent-based automation emphasis
- **OpenCode**: Multi-model early adopters seeking cross-platform TUI consistency
- **DeepSeek TUI**: Privacy-conscious users wanting granular Auto-mode control and audit transparency

### Technical Roadmaps
- **Claude Code**: Hardening existing agent frameworks with enhanced plugin systems
- **OpenAI Codex**: Infrastructure performance (SQLite optimization) and cost transparency APIs
- **Gemini CLI**: Building agent evaluation infrastructure (#24353) for reliable multi-step workflows
- **OpenCode**: Universal access across models/providers with deferred loading patterns
- **DeepSeek TUI**: Consolidating mode semantics (Plan vs Auto) and expanding model provider support

## 5. Community Maturity & Engagement

### High-Activity Mature Platforms
- **Claude Code & OpenAI Codex**: Large userbases generating detailed bug reports with actionable telemetry (e.g., 194 comments in #28879)
- **OpenCode**: Exceptionally high PR volume (50+) suggests active contributor ecosystem

### Rapid Iteration Emerging Platforms
- **DeepSeek TUI & Pi**: Multiple PRs addressing core stability (Auto mode, modal UI) indicate rapid development cycles
- **Gemini CLI**: Nightly releases with focused issue triage suggest agile iteration pace

### Lower Activity Segments
- **GitHub Copilot CLI & Kimi Code**: Fewer issues may indicate stable releases or limited user adoption base

## 6. Industry Trend Signals

### Shift Toward Observability
Claude Code’s /usage monitoring and OpenAI Codex’s rate-limit transparency (PR #30395) reflect growing demand for predictable cost management in AI toolchains.

### Agent Mode Semantics Clarity
Gemini CLI and DeepSeek TUI both addressing Plan/Agent mode confusion (issues #3568, #3733) suggests industry-wide need for explicit workflow boundaries.

### Multi-Model Provider Expansion
DeepSeek TUI adding Sakana AI (PR #3748) and OpenCode addressing Gemma-4 compatibility show ecosystem diversification beyond dominant players (OpenAI, Anthropic).

### Security-First Design Evolution
Claude Code’s Cedar-backed plugins (#72014) and DeepSeek TUI’s audit labeling (#2093) demonstrate integration of security compliance into core toolchain design rather than bolt-on features.

### Cross-Platform UI Consistency Demands
Repeated TUI glitches in OpenCode (copy/paste #13984) and Pi (modal content bleed #3732) highlight increasing expectations for identical behavior across macOS/Windows/Linux/Termux environments.


---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（截止 2026‑06‑29）**  

---

### 1. 热门 Skills 排行  
*依据 Issues 中的评论数（反映社区关注度）以及对应的 PR，列出目前讨论最活跃的 8 个 Skill。*  

| 排名 | Skill（PR） | 功能简介 | 社区热点 | 当前状态 | GitHub 链接 |
|------|-------------|----------|----------|----------|-------------|
| 1 | **skill‑creator**（#1298） | 修复 `run_eval.py` 永远报 0% recall 的问题；改进 Windows 流读取、触发检测与并行工作器。 | Issue #556（12 评论）揭示技能评估失效，直接影响所有技能的描述优化循环。社区普遍认为这是最阻碍技能迭代的瓶颈。 | OPEN | https://github.com/anthropics/skills/pull/1298 |
| 2 | **skill‑creator**（#1099） | 同上，专注于 Windows 下 `run_eval.py` 因管道读取崩溃导致的误判。 | 与 #556 同源，Windows 用户报错频繁，亟需跨平台修复。 | OPEN | https://github.com/anthropics/skills/pull/1099 |
| 3 | **skill‑creator**（#1050） | 修复 Windows `subprocess.Popen` 路径及编码（cp1252）问题。 | 同样是 #556/#1099 的补充，解决 Windows 环境下技能创建脚本不可用的根因。 | OPEN | https://github.com/anthropics/skills/pull/1050 |
| 4 | **document‑typography**（#514） | 提供排版质量控制：防止孤行、寡段、编号错位等常见 AI 生成文档排版错误。 | Issue #492（29 评论）中提到社区对技能可信度的担忧；排版质量直接影响生成文档的专业感，因而受到广泛关注。 | OPEN | https://github.com/anthropics/skills/pull/514 |
| 5 | **ODT**（#486） | 支持 OpenDocument 文件（.odt/.ods）的创建、填充、读取及转 HTML。 | 社区在 Issue #228（14 评论）中呼吁更多开放格式支持，以便在跨平台办公场景中使用 Skill。 | OPEN | https://github.com/anthropics/skills/pull/486 |
| 6 | **frontend‑design**（#210） | 增强前端设计 Skill 的清晰度与可操作性，使每条指令均可在单轮对话中执行。 | Issue #202（8 评论）指出现有 Skill 偏向开发者文档，缺乏可执行性；此 PR 正是针对该反馈的改进。 | OPEN | https://github.com/anthropics/skills/pull/210 |
| 7 | **skill‑quality‑analyzer**（#83） | 元技能：对 Claude Skills 进行五维质量评估（结构、文档、示例、资源、安全等）。 | 随着社区对技能质量和安全的关注升级（Issue #492、#412），该评估工具被视为提升整体生态健康度的基础设施。 | OPEN | https://github.com/anthropics/skills/pull/83 |
| 8 | **docx**（#541） | 修复在存在书签的 DOCX 文件中添加修订时导致的 `w:id` 冲突引起的文档损坏。 | Issue #556 等评估失效问题间接指向文档生成技能的稳定性；此修复直接提升了 DOCX Skill 的可靠性。 | OPEN | https://github.com/anthropics/skills/pull/541 |

> **说明**：所有上述 PR 目前仍处于 **OPEN** 状态，未合并至主分支。评论数未在 PR 页面显示（数据中为 `undefined`），但通过关联的高评论 Issues 可以判断它们是社区讨论的焦点。

---

### 2. 社区需求趋势（从 Issues 中提炼）  

| 主题 | 代表 Issue（评论数） | 核心诉求 |
|------|----------------------|----------|
| **安全与信任边界** | #492（29） | 防止社区技能冒充官方 `anthropic/` 命名空间，避免权限滥用。 |
| **组织内技能共享** | #228（14） | 在 Claude.ai / Claude Desktop 中实现 Org‑wide Skill 库或直接共享链接，降低手动分发成本。 |
| **技能评估与触发可靠性** | #556（12） 、 #1169（3） 、 #1061（3） | `run_eval.py`、`skill‑creator` 描述优化循环失效（0% recall），亟得分平台修复（尤其 Windows）与触发检测改进。 |
| **技能丢失/环境问题** | #62（10） | 用户反映已自建技能在 Claude 中消失，需要更稳定的持久化与加载机制。 |
| **技能编写最佳实践** | #202（8） | 现有 `skill‑creator` 偏向开发者文档，缺乏可执行性指南；社区期待更简洁、面向 Claude 的操作手册。 |
| **持久记忆 / 上下文压缩** | #1329（6） | 需要能够在多轮对话中保存与检索结构化记忆的 Skill（如 `compact‑memory`、`shodh‑memory`）。 |
| **Agent 治理与安全模式** | #412（6） | 提供策略执行、威胁检测、信任评分等 Agent 治理能力的 Skill。 |
| **重复技能与插件冲突** | #189（6） | 避免 `document-skills` 与 `example-skills` 插件安装时产生重复 Skill，导致上下文窗口浪费。 |
| **跨平台兼容性** | #1061（3） 、 #61（3） | Windows 环境下技能创建脚本的子进程路径、编码及管道问题需统一修复。 |
| **全栈部署** | #360（0） 、 #723（0） | 社区对一键部署全栈 Web 应用（`appdeploy`）以及测试最佳实践（`testing-patterns`）的兴趣逐渐上升。 |

**趋势小结**：社区目前最关注的是 **技能的可靠性与安全性**（评估修复、跨平台兼容、防止冒充）、**组织内共享与协作**，以及 **提升技能实用性**（持久记忆、前端设计、文档排版、全栈部署）。  

---

### 3. 高潜力待合并 Skills  
*这些 PR 已经获得一定的社区讨论（通过关联 Issue）且仍未合并，具备近期落地的可能性。*  

| PR | Skill 名称 | 关联热点 Issue | 为什么值得关注 | 当前状态 |
|----|------------|----------------|----------------|----------|
| #1298 | skill‑creator（run_eval 修复） | #556（12） | 直接解决技能评估失效的根本问题，影响全部技能的迭代效率。 | OPEN |
| #1099 | skill‑creator（Windows 管道崩溃） | #556 | 互补 #1298，确保 Windows 开发者也能正常运行评估循环。 | OPEN |
| #1050 | skill‑creator（Windows 路径/编码） | #1061、#556 | 解决 Windows 特有的子进程路径与编码 bug，提升跨平台一致性。 | OPEN |
| #514 | document‑typography | #492（29） | 提升 AI 生成文档的专业感，间接增强社区对技能可信度的信任。 | OPEN |
| #486 | ODT 支持 | #228（14） | 满足社区对开放办公格式的需求，便于跨平台文档协作。 | OPEN |
| #210 | frontend‑design 改进 | #202（8） | 使前端设计 Skill 更具可执行性，减少 token 浪费。 | OPEN |
| #83 | skill‑quality‑analyzer | #412（6）、#492（29） | 提供统一的技能质量与安全评估框架，有助于社区自治审查。 | OPEN |
| #541 | docx 书签冲突修复 | #556（间接） | 防止文档生成时的数据损坏，提升企业级文档处理的可靠性。 | OPEN |
| #1323 | skill‑creator（触发检测失效） | #556、#1169 | 进一步细化评估循环中的触发逻辑，避免误判导致的 0% recall。 | OPEN |
| #723 | testing‑patterns | 无直接 Issue，但社区对测试最佳实践兴趣上升 | 提供完整的测试策略（单元、组件、Trophy 模型），有助于提升生成代码的质量。 | OPEN |
| #360 | AppDeploy（全栈部署） | 无直接 Issue，但与部署需求呼声相关 | 一键部署并管理 Web 应用，减少手动运维步骤。 | OPEN |
| #154 | shodh‑memory（持久记忆） | #1329（6） | 提供跨对话的结构化记忆机制，符合社区对长期上下文需求。 | OPEN |

> **备注**：以上 PR 均为 **OPEN**，若在接下来的合并窗口（如次版本发布）中被采纳，将直接解决社区目前最迫切的痛点。

---

### 4. Skills 生态洞察  
**当前社区在 Skills 层面最集中的诉求是：** **提升技能的可靠性与安全性（尤其是评估循环与跨平台兼容性），并在此基础上推动组织内共享与功能扩展（持久记忆、文档排版、全栈部署）**。  

---  

*所有链接均指向 GitHub 上的对应 PR 或 Issue，便于进一步查看详细讨论与代码。*

---


# Claude Code 社区动态日报 (2026-06-29)

## 今日速览

今日社区焦点集中在**认证问题**、**模型解析错误**和**子代理性能问题**。社区通过几个高票 Issue 指出，Claude Code 频繁的登录要求和 Windows 平台的模型解析失败问题严重影响用户体验。同时，开发者们正在积极推进新的插件系统和安全功能。

## 版本发布

**暂无新版本发布**（过去 24 小时内无 Release）

## 社区热点 Issues

### 1. [**#1757**] [BUG] Claude code requires users to constantly login
- **重要性**: 致命 - 63 个 👍，73 条评论
- **问题**: 用户每天都需要重新登录，影响生产力
- **链接**: <https://github.com/anthropics/claude-code/issues/1757>

### 2. [**#63875**] [BUG] Recurring "model's tool call could not be parsed" on Windows
- **重要性**: 高 - 110 个 👍，72 条评论  
- **问题**: Windows 平台频繁中断会话，retry 也不可靠
- **链接**: <https://github.com/anthropics/claude-code/issues/63875>

### 3. [**#68619**] [CRITICAL] Subagent spawning infinite recursion bugs
- **重要性**: 严重 - 8 个 👍，26 条评论
- **问题**: 子代理无限递归生成，忽视 `CLAUDE_CODE_FORK_SUBAGENT=0`，造成令牌浪费
- **链接**: <https://github.com/anthropics/claude-code/issues/68619>

### 4. [**#32503**] [BUG] /usage command fails with rate_limit_error
- **重要性**: 中等 - 13 个 👍，9 条评论
- **问题**: 检查使用量时触发速率限制，影响预算管理
- **链接**: <https://github.com/anthropics/claude-code/issues/32503>

### 5. [**#70459**] Auto-compaction cost bugs
- **重要性**: 中等 - 3 个 👍，4 条评论
- **问题**: 自动压缩路径存在令牌浪费问题，重复缓存预计算内容
- **链接**: <https://github.com/anthropics/claude-code/issues/70459>

### 6. [**#50674**] Cowork fails on ARM64 (Snapdragon X)
- **重要性**: Windows 平台问题
- **问题**: 尽管通过就绪检查，ARM64 平台仍无法工作
- **链接**: <https://github.com/anthropics/claude-code/issues/50674>

### 7. [**#72127**] Workflow tool burned 5x plan in 5 minutes
- **重要性**: 严重用户体验问题
- **问题**: 无警告授权prompt下，简单研究任务就耗尽计费计划
- **链接**: <https://github.com/anthropics/claude-code/issues/72127>

### 8. [**#42142**] Missing /plugin command in Desktop
- **重要性**: 功能缺失
- **问题**: 桌面版缺少插件市场支持，导致幻觉
- **链接**: <https://github.com/anthropics/claude-code/issues/42142>

### 9. [**#72166**] claude-api skill token explosion
- **重要性**: 高 - 184k tokens 单条消息破坏会话
- **问题**: API skill 注入过大的上下文，使会话不可恢复
- **链接**: <https://github.com/anthropics/claude-code/issues/72166>

### 10. [**#72012**] Agent View session-id loss
- **重要性**: 会话管理问题
- **问题**: 重新打开停止的后台会话时丢失之前对话
- **链接**: <https://github.com/anthropics/claude-code/issues/72012>

## 重要 PR 进展

### 1. [**PR #41447**] feat: open source claude code ✨
- **类型**: 开源功能
- **内容**: 将closes 5 个 issue，标志性开源进展
- **链接**: <https://github.com/anthropics/claude-code/pull/41447>

### 2. [**PR #72037**] Add handover plugin
- **类型**: 新功能
- **内容**: 导出会话上下文，支持 LLM 之间上下文传递
- **链接**: <https://github.com/anthropics/claude-code/pull/72037>

### 3. [**PR #72014**] Add protect-mcp plugin
- **类型**: 安全功能
- **内容**: Cedar 策略门控 + 签名收据，实现 fail-closed 安全模式
- **链接**: <https://github.com/anthropics/claude-code/pull/72014>

### 4. [**PR #72000**] docs: update plugin install instructions
- **类型**: 文档
- **内容**: 更新插件安装说明为推荐安装器
- **链接**: <https://github.com/anthropics/claude-code/pull/72000>

### 5. [**PR #62315**] Fix hookify event filtering
- **类型**: 修复
- **内容**: 修复 pre/post hooks 的事件过滤问题
- **链接**: <https://github.com/anthropics/claude-code/pull/62315>

## 功能需求趋势

### 1. **IDE 集成优化**
- macOS 系统快捷键在 Claude 面板失效 (#39429)
- JetBrains WSL2 锁文件被拒绝 (#72129)
- VS Code 终端文本选择受影响 (#72173)

### 2. **性能与成本控制**
- 子代理无限递归 (#68619)
- 自动压缩成本问题 (#70459)
- 令牌使用监控不佳 (#32503)

### 3. **插件生态建设**
- 插件市场功能 (#42142)
- 插件热重载支持 (#72162)
- 上下文导出插件 (#72037)

### 4. **跨平台兼容性**
- Windows 模型解析错误 (#63875)
- ARM64 平台支持 (#50674)
- Linux 鼠标控制选项 (#70672)

### 5. **安全与合规**
- MCP 保护插件 (#72014)
- 网络安全过滤误报 (#72172, #72168)

## 开发者关注点

### 🔴 **认证机制**
用户强烈抱怨每日登录要求 excessive，影响开发效率。

### 🔴 **Windows 平台稳定性**
模型解析失败和鼠标滚动问题困扰 Windows 用户。

### 🔴 **成本可预测性**
用户担心无警告就耗尽计划，请求更透明的成本控制。

### 🟡 **子代理控制**
需要更可靠的子代理启用/禁用机制，防止无限递归。

### 🟡 **插件系统**
开发者渴望开源插件市场，希望能方便地分享和使用自定义插件。

### 🟢 **上下文管理**
对于会话 handover 和 context 导出功能表达强烈需求，显示出 LLM-to-LLM 协作场景正在兴起。


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026‑06‑29）**  
*数据来源：GitHub 仓库 `openai/codex`（过去 24 小时内更新的 Issues、PRs）*

---

## 1. 今日速览  
- **费率与配额问题仍是热点**：Issue #28879 表明自 6 月 16 日起，`gpt-5.5` 在 Plus 套餐下的每 token 费率异常升高 10‑20 倍，导致 5 h 预算在 2‑3 次提示中耗尽，社区强烈呼吁透明的重置信息和计费修复。  
- **持续的日志与 I/O 性能瓶颈**：SQLite 反馈日志写入量异常大（#28224、#29532、#30405）在 macOS 与 Windows 上均在消耗 SSD 寿命并引发 CPU/内存抖动，已经有多个 PR（如 #30490、#30480）尝试清理和减少无用写入。  
- **跨平台稳定性与 UI 回归**：Windows 上的卡顿、冻结（#20214、#30501、#30486）以及 macOS 的 `syspolicyd`/TRACE 日志泄漏（#25719、#29532）表明桌面客户端在不同系统上的资源隔离和后台任务调度仍需优化。  

> **简言之**：社区今天最关注的是 **计费透明度**、**日志/I/O 性能** 以及 **跨平台 UI 稳定性**，围绕这些点已经有若干修复 PR 正在审核或刚刚合并。

---

## 2. 版本发布  
> 过去 24 小时内 **无新版本发布**（Releases 页面无更新）。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题（链接） | 关键指标 | 为什么重要 | 社区反应 |
|---|--------------|----------|------------|----------|
| [#28879](https://github.com/openai/codex/issues/28879) | **Rate‑limit cost per token jumped ~10‑20× since June 16** | 194 评论 • 337 👍 | 揭示 `gpt-5.5` 在 Plus 套餐下计费异常，直接影响用户可用预算，亟需后端计费修复和前端透明提示。 | 大量用户报告预算瞬间耗尽，要求显示剩余重置时间及回滚异常计费。 |
| [#28224](https://github.com/openai/codex/issues/28224) | **SQLite feedback logs can write ~640 TB/year** | 99 评论 • 404 👍 | 指出后台反馈日志写入量惊人，威胁 SSD 寿命；已有 3 个 PR 合并可削减 85% 日志，但问题尚未完全消除。 | 赞同者众多，期待彻底关闭或可配置的日志级别。 |
| [#30224](https://github.com/openai/codex/issues/30224) | **This model is not supported when using X‑OpenAI‑Internal‑Codex‑Responses‑Lite** | 53 评论 • 19 👍 | 揭示自定义模型在使用轻量响应头时被错误拦截，影响高级工作流（如自定义微调模型）。 | 开发者呼吁放宽限制或提供明确的替代方案。 |
| [#25719](https://github.com/openai/codex/issues/25719) | **Codex Desktop for macOS repeatedly triggers `syspolicyd` / `trustd` CPU and memory runaway** | 35 评论 • 55 👍 | macOS 后台频繁触发系统信任进程，导致 CPU 飙升和电量消耗。 | 用户建议加强沙盒隔离或延后信任检查。 |
| [#30002](https://github.com/openai/codex/issues/30002) | **Server‑side quota accounting over‑reports consumption after 5h reset** | 28 评论 • 6 👍 | 重置后配额消耗被严重高估，实际使用仅 1.35M token 就触发限制，说明后端计数器存在 bug。 | 需要后端校验并向前端提供准确的剩余额度。 |
| [#29532](https://github.com/openai/codex/issues/29532) | **macOS: Persistent SQLite TRACE target=log churn remains after rust‑v0.142.0** | 24 评论 • 7 👍 | 即便已有修复（#29432、#29457），TRACE 日志仍在持续写入，表明根因未被彻底消除。 | 社区要求彻底关闭 TRACE 或提供开关。 |
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient system resources** | 20 评论 • 38 👍 | Windows 桌面出现卡顿，影响编码体验，怀疑是线程调度或 I/O 阻塞。 | 用户分享堆栈并请求性能分析工具。 |
| [#17320](https://github.com/openai/codex/issues/17320) | **Excessive SQLite WAL writes during streaming due to TRACE logs ignoring RUST_LOG** | 16 评论 • 36 👍 | TRACE 日志不尊重 `RUST_LOG` 设置，导致 WAL 频繁检查点，放大 I/O 负担。 | 强调日志级别应由环境变量控制。 |
| [#21839](https://github.com/openai/codex/issues/21839) | **Previously‑existing sessions with full access require approvals** | 10 评论 • 0 👍 | 现有会话在权限变更后又重新触发审批，破坏无感使用体验。 | 期望在会话迁移时保留已有授权。 |
| [#28161](https://github.com/openai/codex/issues/28161) | **Show expiration dates for each available usage reset** | 4 评论 • 38 👍 | 用户只看到剩余重置次数，缺失具体失效时间，导致难以合理安排使用。 | 强烈支持在 UI 中展示每个重置的截止时间。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题（链接） | 核心改动 | 关联 Issue / 背景 |
|---|--------------|----------|-------------------|
| [#30504](https://github.com/openai/codex/pull/30504) | **feat(tui): replace rollback with session forks** | 用会话分叉取代危险的 `thread/rollback`，提供可回滚的分支式历史，避免覆盖源线程。 | 解决了回滚导致数据丢失的隐患（#30124 的兼容桥梁）。 |
| [#30500](https://github.com/openai/codex/pull/30500) | **[code‑reviewed] Allow review while MCP servers are starting** | 将 `/review` 与 MCP 启动解耦，允许在后台服务仍在初始化时进行代码审查。 | 缓解了审阅被 MCP 启动阻塞的问题。 |
| [#30482](https://github.com/openai/codex/pull/30482) | **[code‑reviewed] [codex‑rs] Add writes app approval mode** | 新增 `writes` 批准模式：只读工具免审，其余工具（包括非破坏性写）需确认。 | 回应了对写操作细粒度控制的需求（#21839、#28276）。 |
| [#30493](https://github.com/openai/codex/pull/30493) | **[code‑reviewed] [codex] Add configurable multi‑agent mode hint text** | 引入 `features.multi_agent.mode_hint`，让企业可统一设置多代理提示文案，不随推理等级波动。 | 改进了多代理工作流的可观测性（#30399）。 |
| [#30395](https://github.com/openai/codex/pull/30395) | **[code‑reviewed] [app‑server] Expose rate‑limit reset credit details** | 在 `account/rateLimits/read` 中返回每个重置额度的过期时间，供前端展示。 | 直接对应 Issue #28161（显示重置过期时间）。 |
| [#30492](https://github.com/openai/codex/pull/30492) | **[bug] Fix slash command popup dismissal** | 记录被取消的斜杠命令 токен，防止 Esc 后立即重新弹出。 | 修复了反复弹出的斜杠命令框（烦人的 UI 错误）。 |
| [#30487](https://github.com/openai/codex/pull/30487) | **[codex] Fall back from unsupported reasoning effort** | 当跨线程消息请求的推理等级超过模型支持范围时，自动回退至最高支持等级（如 `xhigh`），避免推理请求失败。 | 防止因不兼容的 `max` 或自定义等级导致的推理中断。 |
| [#30467](https://github.com/openai/codex/pull/30467) | **[code‑reviewed] [codex] Treat max as a first‑class reasoning effort** | 将 `max` 纳入官方推理等级列表，UI 显示为产品化 label，解析与 catalog 数据对齐。 | 解决了 `max` 被当作透明自定义等级导致 UI 不一致的问题（#30406、#30224 相关）。 |
| [#30297](https://github.com/openai/codex/pull/30297) | **[codex] Enable remote plugins by default** | 将远程插件功能从实验性开关改为默认启用，保留显式关闭选项。 | 推进了插件生态的普及，降低了配置门槛。 |
| [#30480](https://github.com/openai/codex/pull/30480) | **fix(tui): avoid duplicate unicode keyboard input** | 取消对 Kitty 的 alternate‑key 上报，保留必要的键事件，避免在 Windows Terminal/Warp 中出现重复 Unicode 输入。 | 修复了中文/符号输入时出现重复字符的烦人现象。 |

> 以上 PR 大多已进入审核或刚合并（截至 2026‑06‑29），直接针对社区热点中的 **计费透明度**、**日志/I/O**、**审批机制**、**多代理协作**、**跨平台输入**、**远程插件** 等方面提供了具体改进。

---

## 5. 功能需求趋势（从全部 Issues 中提炼）

| 需求方向 | 体现的典型 Issues / PRs | 说明 |
|----------|------------------------|------|
| **计费与配

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>


# Gemini CLI 社区动态日报 (2026-06-29)

## 今日速览
今日发布了 v0.51.0-nightly.20260629  nightly 版本，同时社区聚焦于 Agent 系统稳定性、内存系统优化以及核心可靠性问题。开发者反馈的关键问题包括 subagent 行为异常、shell 执行卡死和扩展商店 listing 问题等。

## 版本发布
**v0.51.0-nightly.20260629.gae0a3aa7b**
- 自动 nightly 版本 bumped，详情请见 [Compare 版本差异](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b)

## 社区热点 Issues

1. **[#22323] Subagent 在达到 MAX_TURNS 后错误报告成功**  
   `codebase_investigator` 子代理在达到最大回合数前退出时，仍显示 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际的中断行为。  
   标签：P1、Agent、Bug | [详情](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **[#24353] 组件级评估体系建设**  
   跟进 #15300 引入的行为评估测试，目前已生成 76 条测试用例，涵盖 6 种主流模型。  
   标签：P1、Agent、评估基础设施 | [详情](https://github.com/google-gemini/gemini-cli/issues/24353)

3. **[#21409] Generalist Agent 无限挂起问题**  
   Generalist 代理在处理简单操作（如文件夹创建）时会无限等待，手动禁用子代理可缓解。  
   标签：P1、Agent、Bug | [详情](https://github.com/google-gemini/gemini-cli/issues/21409)

4. **[#25166] Shell 命令完成后 UI 卡死**  
   命令已执行完毕但界面显示“Awaiting user input”，影响用户体验。  
   标签：P1、Core、Bug | [详情](https://github.com/google-gemini/gemini-cli/issues/25166)

5. **[#27838] 扩展商店中缺失的问题**  
   PandaDoc 扩展已满足所有上架条件，但未出现在官方扩展画廊。  
   标签：P2、Extensions、Bug | [详情](https://github.com/google-gemini/gemini-cli/issues/27838)

6. **[#26525] Auto Memory 敏感信息泄露风险**  
    transcript 内容在经过模型处理前已被发送至上下文，存在潜在的机密泄露风险。  
   标签：P2、Security、Agent | [详情](https://github.com/google-gemini/gemini-cli/issues/26525)

7. **[#22672] 代理是否存在危险操作风险**  
   模型在 Git 操作和数据库维护时可能使用危险命令，需加强指导约束。  
   标签：P2、Agent、Customer Issue | [详情](https://github.com/google-gemini/gemini-cli/issues/22672)

8. **[#24246] 工具数量限制导致 400 错误**  
   超过 128 个工具时 API 返回 400 错误，需优化工具作用域管理。  
   标签：P2、Agent、Bug | [详情](https://github.com/google-gemini/gemini-cli/issues/24246)

9. **[#22267] Browser Agent 忽略配置 overrides**  
   Browser Agent 未读取 `settings.json` 中的配置（如 `maxTurns`）。  
   标签：P2、Agent、Bug | [详情](https://github.com/google-gemini/gemini-cli/issues/22267)

10. **[#26516] Memory 系统问题总汇**  
    汇集了 Auto Memory 相关的各类 Bug 和优化需求。  
    标签：P2、Agent | [详情](https://github.com/google-gemini/gemini-cli/issues/26516)

## 重要 PR 进展

1. **[#27915] 修复 Trust Dialog 显示逻辑**  
   修正工作区信任对话框之前未显示的 Hook 形状问题。  
   标签：P1、Security | [详情](https://github.com/google-gemini/gemini-cli/pull/27915)

2. **[#27914] 优化会话恢复体验**  
   修复在磁盘空间不足时仍显示会话恢复提示的问题。  
   标签：P2、Agent | [详情](https://github.com/google-gemini/gemini-cli/pull/27914)

3. **[#27916] GCP 项目 ID 格式验证**  
   防止 Auto Memory 存储无效的项目别名，避免后续 API 调用失败。  
   标签：P2、Agent | [详情](https://github.com/google-gemini/gemini-cli/pull/27916)

4. **[#27910] Web 搜索工具时延控制**  
   为 Web 搜索工具添加 120 秒超时，防止无限等待。  
   标签：P1、Agent | [详情](https://github.com/google-gemini/gemini-cli/pull/27910)

5. **[#27905] 会话文件恢复机制**  
   修复因删除导致的会话文件加载失败问题。  
   标签：P2、Agent | [详情](https://github.com/google-gemini/gemini-cli/pull/27905)

6. **[#27904] 兼容缺失 projectHash 的历史会话**  
   支持加载无 `projectHash` 字段的 JSONL 格式会话记录。  
   标签：P2、Agent | [详情](https://github.com/google-gemini/gemini-cli/pull/27904)

7. **[#27912] -corrupt 会话元数据恢复**  
   增强对损坏或缺失元数据行的会话恢复能力。  
   标签：P2、Agent | [详情](https://github.com/google-gemini/gemini-cli/pull/27912)

8. **[#27906] 优化会话列表性能**  
   避免在列举会话时触发后台清理任务，防止文件竞争问题。  
   标签：P2、Agent | [详情](https://github.com/google-gemini/gemini-cli/pull/27906)

9. **[#27903] Hook 配置显著性增强**  
   确保 Nest Shape 形式的 Hook 配置能被正确展示。  
   标签：P2、Security | [详情](https://github.com/google-gemini/gemini-cli/pull/27903)

10. **依赖升级群（共 75 个包）**  
    包括关键库：`@google/genai` (1.30.0→2.9.0)、`undici` (7.10.0→8.5.0)、`js-yaml` (4.1.1→5.0.0) 等。  
    [详情](https://github.com/google-gemini/gemini-cli/pull/28190)

## 功能需求趋势

- **Agent 稳定性**：开发者最关心的焦点，涵盖 subagent 行为、Browser Agent 兼容性、Generalist 代理可靠性等
- **Memory 系统优化**：Auto Memory 相关问题频繁，涉及安全、会话管理和数据一致性
- **开发体验**：扩展商店 listing 机制、Session 恢复/管理功能
- **性能与资源控制**：Web 搜索超时、工具数量限制、终端渲染优化

## 开发者关注点

- **痛点**：
  - Subagent 行为不可预测（误报成功、忽略配置、无限挂起）
  - Shell 交互式卡死，影响日常开发流程
  - 终端 resize 导致界面闪烁
  - 外部编辑器退出后终端内容损坏

- **高频需求**：
  - 更强大的会话管理与恢复机制
  - 细粒度的内存系统控制与安全合规
  - 完善的扩展开发和发布流程
  - AST 驱动的代码智能工具（参考 #22745）


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# 2026-06-29 GitHub Copilot 社区动态日报

## 今日速览
熟悉了当前 AI 开发工具潮流，Copilot 团队最新发布的些许疑难与参与度稳定，反映出技术门槛与社区活跃度的平衡。

## 最新版本发布
目前未发布新版本，但 SDK 转帜迭代至 v1.0.36，部分用户在部署连接到 corporate 云环境时仍遇到模块错误。

## 热点 Issues 分析
1. **修复 session 仅在企业网络下连接失败**（#2978）  
   反馈显示头 antiquo 代理配置有阻碍，需优化跨域认证机制。
2. **构建建议：增强文件系统浏览能力**（#3970）  
   用户对于文件权限的浏览需求持续提升，建议插件优化。
3. **增强可视化：未实现计划进度指标**（#3971）  
   这将提升文件树热度管理，但仍需开发团队优先级。

## 关键 PR 进展
1. **changelog.md 版本更改**（#3968）  
   旧文档变更，命名规范化，文档内容更新完善。
2. **静态内容命名标准化**（#3967）  
   被视为流程改进，易于跟踪版本变化。
  
## 功能需求趋势
- **AI 集成：** 集成扩展解释器，增强团队对复杂模型的运用。
- **性能优化：** 减少跨平台重启与部署包体积。
- **可视化工具：** 增强计划与任务进度的填充效果。

## 开发者关注点
- 云端权限隔离问题仍优先处理。
- 用户体验：对细微的界面改动和交互反馈有强烈需求。
- 协作功能：跨团队搜索与分类功能完善至关重要。

---

如需获取详细 Issues 参阅链接，欢迎直接操作 GitHub Copilot 或访问 [github.com/github/copilot-cli](https://github.com/github/copilot-cli)。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# 2026-06-29 Kimi Code CLI 社区动态日报

---

## 1. 今日速览  
昨日未发布新版本，社区活跃中聚焦性能优化问题。两个关键Bug报告引发广泛关注，但>



## 2. 版本发布  
无新版本发布。

---

## 3. 社区热点 Issues  
以下两个Issue涉及核心功能体验，现社区关注度高（评论触达15条）：  

1. **[#640] Kimi CLI file reading loop**  
   - **重要性**：反复读取同一文件的漏洞暴露__性能瓶颈__  
   - **反馈量**：15条评论（其中多为技术建议）  
   - [链接](MoonshotAI/kimi-cli Issue #640)  

2. **[#1592] VSCode 插件内存泄漏**  
   - **重要性**：长期任务下内存消耗上升，影响开发者体验  
   - **反馈量**：1条评论（需进一步验证累积影响）  
   - [链接](MoonshotAI/kimi-cli Issue #1592)  

---

## 4. 重要 PR 进展  
昨日无新PR更新，需关注两个长期进行中的优化方向：  

- **改进CLI内存管理机制**（与#1592相关）  
- **优化文件处理并行策略**（与#640关联）  
- [附：PR列表暂无新动态]

---

## 5. 功能需求趋势  
社区核心诉求集中在：**  
1. **性能优化**（文件处理循环、插件内存管理）  
2. **高效IDE集成**（VSCode插件稳定性优化）  
3. **多平台一致性**（跨平台错误现象需验证）  

---

## 6. 开发者关注点  
反馈中突出痛点：  
- **内存管理**：VSCode插件异常占用  
- **逻辑重复**：文件读取循环问题  
- **跨平台差异**：Linux与macOS行为差异需统一  

---

所有链接指向：https://github.com/MoonshotAI/kimi-cli


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报 (2026‑06‑29)**  

---

### 1. 今日速览  
- 本日无新版本发布，但社区在第 24 小时内出现了 **50 条**新 Issue 与 **50 条**PR，涉及复制粘贴、模型交互、性能瓶颞及功能缺口等关键议题。  
- 社区热度集中在 **TUI/CLI** 交互体验、跨平台（Termux）支持以及 **功能追踪/使用统计** 的需求上。

---

### 2. 版本发布  
> **无**（过去 24h 内未标记新 Release）

---

### 3. 社区热点 Issues（挑选 10 条最受关注）  

| # | 标题 | 关键点 | 社区反应 |
|---|------|--------|----------|
| **#13984** | **can not copy and paste in opencode CLI** | 复制标识正确但 `Ctrl+V` 失效，削 impediment 在日常工作流中造成停顿。 | 50 条评论，👍 23，已标记为 **OPEN**，多名用户提出临时解决方案（如快捷键冲突检查）。 |
| **#21034** | **gemma‑4‑26b / gemma‑4‑31b opencode interaction issues** | Gemma‑4 大模型在 OpenCode 中触发循环/失败， trotz 最新 tokenizer 与 engine 仍不可用。 | 20 条评论，👍 20，开发者讨论模型协议兼容性。 |
| **#961** | **Termux support** | 呼吁在 Android Termux 环境提供完整支持，期望在移动端直接使用 CLI。 | 12 条评论，👍 21，受到跨平台爱好者热捧。 |
| **#5565** | **[bug] intermittent weird output** | 模型偶尔输出噪声或无意义文字，影响可靠性。 | 12 条评论，👍 0，已跟踪但尚未定位根因。 |
| **#22129** | **Skills don't show up in TUI autocomplete** | 技能在 Web UI 可见但 TUI 自动补全缺失，导致工作流不统一。 | 11 条评论，👍 12，已定位到 `autocomplete.tsx` 代码。 |
| **#9281** | **[FEATURE] Add unified usage tracking via /usage** | 为付费用户提供统一的配额/使用率面板，避免逐个打开外部账户查看。 | 10 条评论，👍 26，功能请求度高，已在 PR #9545 中实现。 |
| **#26772** | **[FEATURE] Integrated browser for desktop** | 请求在桌面版加入类似 Codex 的内置浏览器面板，提升调试体验。 | 10 条评论，👍 3，需求明确。 |
| **#32420** | **[CLOSED] Paid Go subscription — charged but not activated** | 付费订阅未生效，影响收入与用户信任。 | 10 条评论，👍 0，社区呼吁快速修复计费流程。 |
| **#30680** | **[CLOSED] OpenCode immediately enters auto‑compaction loop** | 自动压缩循环导致 CPU 占满、响应停滞。 | 9 条评论，👍 0，已标记为 **CLOSED**，但类似问题仍在监控。 |
| **#34228** | **Bug Report: opencode exposes an unstable, incomplete subset of project skills** | 技能在不同会话中不一致，导致行为不可预期。 | 8 条评论，👍 0，涉及权限/路径同步。 |

---

### 4. 重要 PR 进展（挑选 10 条最具影响力）  

| # | 标题 | 功能/修复概述 | 关键改动 |
|---|------|----------------|----------|
| **#34371** | **[contributor] feat: add v2 generate text endpoint** | 新增 `generate.text`（v2）端点，支持 `prompt, model?` 参数返回 `text`。 | 通过 Catalog/Integrations 暴露客户端 API。 |
| **#34368** | **feat(opencode): defer large MCP tool catalogs** | 引入 **延迟加载** MCP 工具目录，缓解大规模插件导致的启动卡顿。 | 将工具组装迁移至 `session/mcp-tools.ts`；新增下限阈值判定。 |
| **#9545** | **feat(usage): unified usage tracking with auth refresh** | 实现统一的使用率追踪（已在 #9281 中请求），支持 OAuth 自动刷新。 | 增加 `/usage` API 与 UI 指标展示。 |
| **#34369** | **fix(opencode): use detected MIME type for --file attachments** | 为 `--file` 参数自动识别文件 MIME Type，而非硬编码 `text/plain`。 | 提升多媒体文件的正确处理。 |
| **#34353** | **fix(core): skip fff in node runtime** | 修复 Node 环境下 `fff`（错误的占位模块）导致的启动冲突。 | 明确使用 ripgrep 搜索层。 |
| **#34361** | **fix(core): remove per‑prompt system option** | 删除已废弃的 `system` 提示选项，简化 V2 Prompt  schema。 | 代码减肥、统一系统提示来源。 |
| **#34360** | **fix(opencode): use xhigh instead of max for GLM‑5.2** | 纠正 GLM‑5.2 兼容模型的 `max` 参数使用错误，恢复预期的 `high` 行为。 | 防止模型调用超限。 |
| **#16216** | **docs: Clarify VS Code extension name in manual install section** | 文档更新，明确 VS Code 扩展名称与下载链接，避免混淆。 | 仅文档改动。 |
| **#34336** | **[contributor] feat(core): add v2 manual compaction** | 引入 V2 手动压缩接口，统一压缩逻辑与错误暴露。 | 共享压缩实现，提升可维护性。 |
| **#34343** | **[contributor] feat(core): implement v2 session forking** | 实现会话分叉（fork）功能，支持子会话独立计数器。 | 增强并行实验能力。 |

---

### 5. 功能需求趋势  
- **跨平台扩展**：Termux、WSL 与移动端的完整支持持续受关注。  
- **统一可观测性**：通过 `/usage` 接口统一展示配额、费用与使用率，满足付费用户需求。  
- **IDE/编辑器深度集成**：TUI 与 CLI 的功能一致性（如技能自动补全、复制粘贴）是热点。  
- **大模型兼容**：对 Gemma‑4、DeepSeek‑v4 等新模型的原生支持与参数细粒度控制（如 `chat_template_kwargs`）是开发者的核心诉求。  
- **性能与稳定性**：自动压缩、工具目录加载、CPU 高占用等瓶颈需要通过延迟加载与会话fork等机制解决。  

---

### 6. 开发者关注点  
- **交互一致性**：Web UI 与 TUI 在功能（技能展示、复制粘贴）上的差距被视为可用性瓶颈。  
- **错误处理与恢复**：MCP 远程客户端缺乏重试机制、会话自动 compaction 循环导致不可用，是高频痛点。  
- **计费透明**：付费订阅未激活的个例引发对计费系统可靠性的质疑，需要更清晰的激活流程与错误回馈。  
- **文档与命名**：VS Code 扩展命名不统一导致手动安装困惑，文档细化是快速解决方案。  

---

**结论**：本日社区活跃度高，核心问题集中在 **交互体验、跨平台兼容、使用监控** 与 **大模型支持**。通过上述 PR 的陆续合并与 Issue 的持续迭代，OpenCode 正朝着更稳定、可观测、跨平台的方向演进。开发者可关注 **#13984**（粘贴问题）与 **#961**（Termux）的后续进展，同时留意 **#9545**/ **#34371** 系列特性的落地。  

---  

*所有链接均指向对应 GitHub Issue/PR 编号，点击后可查看完整讨论。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报**
*日期: 2026-06-29*

---

### 1. 今日速览
Pi 社区今天主要关注点集中在可靠性修复（OpenAI Codex 连接异常、模型供应商兼容性）、用户体验优化（强制滚动、启动耗时过长、UI 闪烁）以及跨平台 bug 修复（Windows 文件查找、macOS Bash 路径、Devnagri 输入法支持）。同时，也有多个与深度思考（DeepSeek）、缓存效率和工具链健壮性相关的改进正在推进中。

---

### 2. 版本发布
❌ **无新版本发布**

---

### 3. 社区热点 Issues *(10 个最受关注)*

| # | 标题 | 状态 | 评论/点赞 | 重要性 & 社区反应 |
|---|-------|--------|--------------|------------------------|
| **#4945** | **openai-codex 连接可靠性问题** | 🟢 打开 | **72 条评论** / 30 👍 | 最受关注的问题之一，描述了对话在 `openai-codex`/`gpt-5.5` 下卡在“Working…”的状态，需手动中断。反映了当前主流大模型接入流程中的稳定性瓶颈。**[链接](https://github.com/earendil-works/pi/issues/4945)** |
| **#5825** | **流式 Markdown 强制滚动到底部** | 🟢 打开 | **36 条评论** | UI 体验差，用户在阅读时被强制滚动，影响会话流畅性。显示了当前画中画 TUI 布局中滚动行为优化的迫切性。**[链接](https://github.com/earendil-works/pi/issues/5825)** |
| **#6083** | **z.ai GLM 编码计划的 LLM 缓存不生效** | 🟢 打开 | 2 条评论 / **9 个点赞** | 会话节省额度严重不足，多步任务一个消息包就耗掉 10-20% 限制。凸显了缓存机制在特定供应商/协议栈下的失效，用户非常重视。**[链接](https://github.com/earendil-works/pi/issues/6083)** |
| **#6104** | **Windows `find` 命令：首字符丢失 & 目录路径多余斜杠** | 🟢 打开 | 3 条评论 | Windows 用户使用 `find "*gemma4*" "I:\"` 时返回的相对路径严重错误，直接影响文件定位功能。平台兼容性问题引发关注。**[链接](https://github.com/earendil-works/pi/issues/6104)** |
| **#6124** | **德文加利文破坏 Pi 的 UI 绘制** | 🟢 打开 | 3 条评论 | 输入像“नेटवर्क”这样的文字时，整个 TUI 渲染崩溃，影响了印度教拉丁文用户的使用。展示了国际化文字渲染仍存在风险。**[链接](https://github.com/earendil-works/pi/issues/6124)** |
| **#6103** | **OpenAI Responses API 空工具结果错误标记为“见附件图片”** | 🟢 打开 | 2 条评论 | 由于第三方扩展 `pi-hashline-edit-pro` 返回空输出，识别错误导致工具执行结果显示异常，污染终端输出。**[链接](https://github.com/earendil-works/pi/issues/6103)** |
| **#6140** | **MiniMax M3 在 OpenCode Go 下返回 404** | 🟢 打开 | 2 条评论 | 与 #4106 类似，MiniMax M3 模型加载失败，影响了用户选择模型时的体验。**[链接](https://github.com/earendil-works/pi/issues/6140)** |
| **#6151** | **支持 `image_url` 内容类型（URL 直传，不转 base64）** | 🔴 已关闭（待分类） | 1 条评论 | 当前图片处理需转成 base64 再上传，新增直传 URL 支持有助于提升图片处理效率和隐私保护。**[链接](https://github.com/earendil-works/pi/issues/6151)** |
| **#6150** | **GitHub Copilot 供应商下 `edit` 工具生成无效工具调用** | 🔴 已关闭（待分类） | 1 条评论 | 在 Windows 环境下，Gemini Flash / Claude Haiku 模型的 `edit` 工具行为不一致，部分返回无效 JSON；影响了跨模型工具统一性。**[链接](https://github.com/earendil-works/pi/issues/6150)** |
| **#6131** | **多工具调用同时流式时全屏闪烁/重绘** | 🔴 已关闭（待分类） | 1 条评论 | 当模型一次返回多个工具调用时，TUI 画面会清空重绘，导致短暂花屏，影响用户体验。**[链接](https://github.com/earendil-works/pi/issues/6131)** |

*为什么选择这些问题：*我们优先考虑了**评论数量**（

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Today's Fast Breaks  
 aggi的动作：解决多普列出的关键问题，我和团队已协作处理系统稳定性升级及性能优化。  

版本发布  
持续运维：代码稳定性和兼容性均未出名。新增的现状维持版本未直接发布，建议关注更新公告试验。  

社区热点 issue  
中涉及：UI断裂操作（#5880）、长内存占用（#5943）及新增功能需求（现录用10条突出item）。  

软件实体状况  
稳定信息：版本0.19.3持续推荐，临时限制下非实时引入。  

技术趋势  
重点推进：生态整合（如Gemini模型）提升低速计算，提升任务自动化能力与交互顺畅性。  

开发者关注点  
优先事项：通道功能扩展、实时更新的反馈机制、优化内存管理。主动修复已报告过错问题以提升用户体验。  

注意eyes Damper  
即将普及新增用户教育资源支持方案。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI 社区动态日报（2026‑06‑29）**  

---

### 1. 今日速览  
- 今日社区聚焦在 **模式混淆（Plan/Agent）**、**编辑器卡死**、**自动模式（Auto）失效** 以及 **热栏（Hotbar）本地化与快捷键** 三大方向。  
- 多个 PR 已合并，修复了旧状态迁移不可见、模式权限叠加、模态框内容渗透等长期困扰用户的问题。  
- 新增 **Sakana AI Fugu** 提供者，并开始着手 **Neuralwatt** 提供者的适配，表明社区对多模型供应链的需求持续上升。  

---

### 2. 版本发布  
> 过去 24 小时内没有正式 Release。  

---

### 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 关键信息 | 为什么重要 | 社区反应 |
|---|------|----------|------------|----------|
| [#3568](https://github.com/Hmbown/CodeWhale/issues/3568) | **[bug] plan and agent mode mixed up YET AGAIN** | 创建 06‑25，更新 06‑28，7 条评论，2 👍 | Plan 模式下仍出现 Agent 行为（写文件、执行命令），直接威胁到用户对“只读规划”安全期望。 | 用户提供了详细的 chat 导出，开发者确认是 turn‑loop 未硬阻塞写工具，需在下一版彻底分离。 |
| [#3657](https://github.com/Hmbown/CodeWhale/issues/3657) | **[bug] Editor Freezes and Crashes Codewhale** | 创建 06‑26，更新 06‑28，5 条评论 | 在 Composer 输入 `d` → `Ctrl‑O` 触发编辑器卡死，导致整个进程失响，影响日常交互。 | 评论集中在复现步骤和可能的 readline/terminal 输入泵冲突，开发者已在 PR #3729 中加入输入泵暂停/恢复措施。 |
| [#2093](https://github.com/Hmbown/CodeWhale/issues/2093) | **[bug, enhancement, rust, v0.8.67] Wire verifier preview to emit hunt verdicts** | 创建 05‑25，更新 06‑28，3 条评论 | 需要把验证器预览的输出映射为 “hunted / wounded / escaped” 三种猎捕 verdict，为后续自动化审计提供明确状态。 | 讨论聚焦在如何最小化改动复用现有 verifier‑preview 基础设施，社区认可其对成本可预测性的价值。 |
| [#3730](https://github.com/Hmbown/CodeWhale/issues/3730) | **[bug, tui] Auto mode: read‑only commands flagged DESTRUCTIVE** | 创建/更新 06‑28，2 条评论，0 👍 | 在 Auto 模式下，`codewhale --version` 等只读命令被误标为破坏性操作，强制弹出确认框，违背 Auto “自动风险审查” 初衷。 | 社区指出这是 Auto mode 仍停留在 “空壳” 状态的症状，已在 PR #3739、#3744 中进行去空壳处理。 |
| [#3093](https://github.com/Hmbown/CodeWhale/issues/3093) | **[documentation, enhancement, localization, ux, v0.8.69] Add next‑wave README/website locales for Korean, Spanish, Brazilian Portuguese** | 创建 06‑11，更新 06‑28，2 条评论 | 项目正在向多语言用户扩张，缺少这些语言的文档会形成使用门槛。 | 评论表明社区已有志愿者准备翻译，期待在 v0.8.69 中合入。 |
| [#3738](https://github.com/Hmbown/CodeWhale/issues/3738) | **[bug, enhancement] Investigate prompt‑cache hit‑rate regression (DeepSeek cost up)** | 创建/更新 06‑28，1 条评论 | 用户反馈成本上升，疑似 `<turn_meta>` 块破坏了前缀缓存，直接影响付费模型的使用经济性。 | 开发者在 PR #3745/#3743 中加入了路由信息到缓存遥测，便于定位导致失命中的具体提供者/模型。 |
| [#3717](https://github.com/Hmbown/CodeWhale/issues/3717) | **[bug] v0.8.65:【window】During the context output process, as long as DSML related content appears, the task will inevitably be interrupted** | 创建/更新 06‑28，1 条评论 | Windows 环境下 DSML（领域特定语言）内容输出会导致任务中断，阻碍了在该平台上的脚本生成工作流。 | 尽管仅有一条评论，但该 bug 与平台兼容性直接相关，亟待确认根因（可能是输出流被错误截断）。 |
| [#3732](https://github.com/Hmbown/CodeWhale/issues/3732) | **[bug, tui, ux] Modal UI/UX broken across ALL modals: content bleed‑through + action‑row truncation/overflow** | 创建/更新 06‑28，1 条评论 | 模态框不透明遮罩缺失导致底层对话泄露，且动作行被截断，严重影响交互体验。 | PR #3750 已通过在 ViewStack 中统一绘制不透明背景来彻底解决，社区反馈积极。 |
| [#3733](https://github.com/Hmbown/CodeWhale/issues/3733) | **[bug, enhancement, tui] Auto mode is a hollow shell (identical to Agent): remove from 0.8.66, fix/remove properly in 0.8.67** | 创建/更新 06‑28，1 条评论 | 揭示 Auto 目前仅是一个命名占位，实际行为等同于 Agent，误导用户关于自动审查的期望。 | 已在 PR #3739 中将 Auto 从用户可见模式循环中隐藏，后续将在 0.8.67 中提供真正的实现或彻底移除。 |
| [#3734](https://github.com/Hmbown/CodeWhale/issues/3734) | **[bug, tui] Plan mode: write tools not hard‑blocked in turn loop — only sandboxed** | 创建/更新 06‑28，1 条评论 | Plan 模式的 “所有写入被阻止” 仅停留在提示层，实际 turn loop 只阻塞了执行类工具，导致写入操作仍可通过沙箱逃逸。 | 该问题与 #3568 同根同源，需要在 turn loop 中增加写文件/编辑文件等工具的硬阻止。 |

---

### 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 核心改动 | 影响 |
|---|------|----------|------|
| [#3756](https://github.com/Hmbown/CodeWhale/pull/3756) | **fix(tui): default interactive Agent shell to approval‑gated on** | 为交互式 Agent 会话默认开启 shell 工具，使审批能够拦截破坏性命令；保留 `allow_shell=false` 仍可关闭。 | 提升默认安全性，同时不破坏已有显式关闭的工作流。 |
| [#3755](https://github.com/Hmbown/CodeWhale/pull/3755) | **docs(install): call out WSL2 cargo dependencies** | 在安装文档补充 WSL2 缺少 `pkg‑config` / `libdbus-1-dev` 的提示，并将中文 README 中的 Linux 依赖说明扩展到 WSL2。 | 解决了 Issue #1816 中的安装失败，降低新手在 WSL2 环境的门槛。 |
| [#3754](https://github.com/Hmbown/CodeWhale/pull/3754) | **fix(config): surface legacy state migrations** | 在状态目录初始化时打印可见一次性通知，告知用户 legacy `.deepseek` 数据已迁移至 `.codewhale`。 | 解决了升级后用户感觉数据丢失的问题（#3724、#3726、#3727）。 |
| [#3753](https://github.com/Hmbown/CodeWhale/pull/3753) | **fix(tui): surface legacy state in doctor** | `codewhale doctor` 新增 `legacy_only` 等字段，展示未迁移的旧状态目录。 | 提供诊断手段，方便用户自行核查迁移是否完整。 |
| [#3752](https://github.com/Hmbown/CodeWhale/pull/3752) | **fix(tui): restore legacy session visibility** | 在已有 `~/.codewhale/sessions` 目录时，把 `~/.deepseek/sessions` 中的会话复制过去（不覆盖），让旧会话在升级后可见。 | 直接恢复了用户会话历史，提升升级体验。 |
| [#3750](https://github.com/Hmbown/CodeWhale/pull/3750) | **fix(tui): clear modal backdrop centrally** | 在 `ViewStack` 绘制不透明背景，避免模态框内容渗透和动作行截断。 | 全面解决 #3732 所报告的所有模态框 UI/UX 问题。 |
| [#3748 / #3749](https://github.com/Hmbown/CodeWhale/pull/3748) (及对应的 #3749) | **feat: add Sakana AI Fugu provider** | 添加 Sakana AI 作为内置 OpenAI 兼容提供者，支持 `FUGU_API_KEY` / `SAKANA_API_KEY`、默认模型 `fugu`。 | 拓展模型供应链，满足社区对新兴模型服务的需求（参见 Issue #3751 Neuralwatt）。 |
| [#3745](https://github.com/Hmbown/CodeWhale/pull/3745) / [#3743](https://github.com/Hmbown/CodeWhale/pull/3743) | **fix(tui): show cache telemetry route** | 在每轮缓存遥测中记录实际使用的 provider/model 路由，并在 `/cache` 页面展示。 | 为定位 Issue #3738 的缓存命中率回退提供关键线索。 |
| [#3747](https://github.com/Hmbown/CodeWhale/pull/3747) | **fix(tui): label readonly shell approvals calmly** | 使用只读 shell 分类器对版本/help 调用进行标记，使其流经自动审批而不弹出确认框。 | 直接对应 Issue #3730，提升 Auto/Plan 模式下只读命令的体验。 |
| [#3746](https://github.com/Hmbown/CodeWhale/pull/3746) | **fix(tui): skip approval for readonly auto shell** | 对直接用户 shell 命令使用输入感知的审批需求，避免 Auto 模式下的只读快捷键仍触发审批。 | 进一步细化 shell 审批逻辑，减少误拦。 |
| [#3739](https://github.com/Hmbown/CodeWhale/pull/3739) | **fix(tui): defer hollow Auto mode** | 将文本形式的 `auto` 模式临时映射回 Agent，保留数值 `3` 未分配防止意外升级，直至真正实现。 | 响应 #3733、#3730 等对 Auto 模式空壳的批评，为后续完整实施留出过渡期。 |

---

### 5. 功能需求趋势（从全部 Issues 提炼）

| 需求方向 | 体现的 Issues / PR | 趋势说明 |
|----------|-------------------|----------|
| **多语言本地化** | #3093（韩语/西班牙语/巴西葡萄牙语）、#3759（Hotbar 向导本地化） | 社区正在推动非英文用户友好化，后续版本将持续加入更多语言包。 |
| **多模型提供者支持** | #3751（Neuralwatt）、#3748/#3749（Sakana Fugu）、早期的 OpenAI/Ollama 等 | 对新兴、具有创新定价或特殊模型的提供者的需求持续上升。 |
| **安全与审计机制** | #3568（Plan/Agent 混淆）、#3730（只读命令被误标为破坏）、#3733（Auto 空壳）、#3736（权限模型简化） | 用户对模式语义的清晰度和误操作防护要求越来越高。 |
| **性能与资源占用

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*