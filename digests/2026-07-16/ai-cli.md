# AI CLI 工具社区动态日报 2026-07-16

> 生成时间: 2026-07-16 01:46 UTC | 覆盖工具: 9 个

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

User Safety: safe

---

# Claude Code 社区动态日报  
**日期：2026-07-16**

---

## 1. 今日速览

- **版本更新**：Claude Code v2.1.211 正式发布，新增 `--forward-subagent-text` 标志支持子代理文本输出。  
- **安全修复**：修复权限预览中未neutralize的漏洞类型，提升安全性。  
- **社区热议**：子代理无限递归、Cowork 工具截断文件、VSCode 插件缺失 `/workflows` 命令等问题引发广泛关注。

---

## 2. 版本发布

### v2.1.211

- **新增功能**：  
  - 新增 `--forward-subagent-text` 标志和 `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` 环境变量，支持将子代理文本和思考过程包含在 stream-json 输出中。  
- **安全修复**：  
  - 修复权限预览中未neutralize的特殊字符类型（包括双向覆盖、零宽字符及视觉混淆字符），增强系统安全性。  

🔗 [发布页面](https://github.com/anthropics/claude-code/releases/tag/v2.1.211)

---

## 3. 社区热点 Issues

| 编号 | 标题 | 简介 | 评论数 |
|------|------|------|--------|
| [#53940](https://github.com/anthropics/claude-code/issues/53940) | Cowork Edit/Write 工具静默截断文件 | Cowork 工具在写入文件时存在字节保护缓冲区限制，导致文件被截断。影响范围广，已确认为 Bug。 | 43 |
| [#33932](https://github.com/anthropics/claude-code/issues/33932) | VSCode 扩展：引入类似 Copilot 的 Diff 审核 UI | 社区请求在 VSCode 中添加类似 GitHub Copilot 的差异审核界面，提升代码审查体验。 | 34 |
| [#68619](https://github.com/anthropics/claude-code/issues/68619) | 子代理递归 spawning 导致无限递归与高额费用 | 严重 Bug：子代理递归生成多层代理，忽略 `CLAUDE_CODE_FORK_SUBAGENT=0` 设置，引发高额 token 消耗。 | 31 |
| [#60385](https://github.com/anthropics/claude-code/issues/60385) | 远程控制下 MCP 权限提示未显示 | 使用 `--remote-control` 时，部分 MCP 工具的权限提示未在网页端渲染，仅在本地 TUI 中显示。 | 20 |
| [#40043](https://github.com/anthropics/claude-code/issues/40043) | 支持从 Cowork 项目上下文中移除本地文件夹 | 功能请求：允许用户从 Cowork 项目中动态移除不再需要的本地文件夹。 | 17 |
| [#69578](https://github.com/anthropics/claude-code/issues/69578) | 子代理递归循环消耗 80 万 token | 用户报告单次会话中因子代理递归循环消耗约 80 万 token，导致 $27.60 的意外费用。 | 8 |
| [#58693](https://github.com/anthropics/claude-code/issues/58693) | Windows 桌面版拼写检查无法关闭 | 拼写检查功能始终开启，影响输入体验。 | 7 |
| [#72292](https://github.com/anthropics/claude-code/issues/72292) | VSCode 扩展中 `/workflows` 命令未识别 | 用户在 VSCode 插件中输入 `/workflows` 无反应，功能失效。 | 6 |
| [#69364](https://github.com/anthropics/claude-code/issues/69364) | `--continue / --resume` 未检测已运行会话 | 使用 `--continue` 恢复会话时未检查该会话是否已在其他进程中运行，可能导致冲突。 | 5 |
| [#77834](https://github.com/anthropics/claude-code/issues/77834) | 代理 fan-out 支付高额启动 token | 每个小任务启动代理平均消耗约 4.7 万未缓存 token，导致整体 token 使用激增。 | 3 |

---

## 4. 重要 PR 进展

| 编号 | 标题 | 简介 |
|------|------|------|
| [#77916](https://github.com/anthropics/claude-code/pull/77916) | 添加 `code-quality-pipeline` 插件 | 新增一个以技能为基础的插件，实现“代码编写”到“代码合并”之间的质量门槛控制。 |
| [#77709](https://github.com/anthropics/claude-code/pull/77709) | 添加官方 marketplace-only 设置示例 | 提供配置示例，仅允许使用官方插件市场，增强安全与可控性。 |
| [#77705](https://github.com/anthropics/claude-code/pull/77705) | 修复 validate-settings.sh 标记检查逻辑错误 | 修复脚本在无 frontmatter 文件时误报通过的问题。 |

---

## 5. 功能需求趋势

从最近的 Issues 可见，社区对以下方向的需求持续增长：

- **IDE 集成功能**：VSCode 插件缺失关键命令（如 `/workflows`）及 diff 审核 UI；
- **子代理控制机制**：递归 spawning 与 token 消耗问题频发，亟需增强控制逻辑；
- **Cowork 工具稳定性**：文件截断、上下文管理等问题影响实际使用；
- **跨平台兼容性**：Windows 上数据删除风险及其他系统级问题；
- **插件生态安全**：marketplace 限制与权限控制成为热点讨论。

---

## 6. 开发者关注点

开发者社区反馈的主要痛点包括：

- **子代理递归失控**：多次报告高额费用与 token 消耗，显示出代理调度机制存在严重缺陷；
- **文件操作安全性**：Cowork 工具及 Windows 清理脚本中的数据丢失风险令人警惕；
- **IDE 体验不完整**：VSCode 插件功能落后于 CLI 版本，影响集成开发效率；
- **权限与控制不足**：MCP 权限提示、子代理开关等配置项易被绕过或忽略；
- **性能瓶颈**：启动代理时的高 token 消耗与 session 管理不一致问题亟待优化。

--- 

> 本报告基于 GitHub 公共数据整理，供技术开发者参考。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026‑07‑16）**  

---  

### 1. 今日速览  
- 过去 24 h 发布了 **rust‑v0.145.0‑alpha.13~0.145.0‑alpha.15** 系列预发行版，版本号迭代频繁但功能变更未在公告中明确。  
- 社区Issue数量活跃，尤其是关于桌面客户端崩溃、性能迟滞以及CLI可配置性的反馈集中，显示出对**稳定性、可编辑性和多任务支持**的迫切需求。  

---  

### 2. 版本发布  
> **无正式发布**；仅有 **rust‑v0.145.0‑alpha.13、alpha.14、alpha.15** 三个预发行版在更新页面列出，未标明新功能或 breaking‑change。  

---  

### 3. 社区热点 Issues（选取 10 条最受关注）  

| # | 标题 | 关键摘要 | 社区关注点 | 链接 |
|---|------|----------|------------|------|
| **#23794** | **[CLOSED] [bug, context, app] Codex Desktop no longer shows visible context/token usage indicator** | 26.519.2081.0 版本后上上文/token 用量指示器消失，用户在 Business 订阅下无法监控上下文使用情况。 | UI 可视化指标缺失导致用户难以评估资源消耗，评论超 170，点赞 170。 | <https://github.com/openai/codex/issues/23794> |
| **#33381** | **[OPEN] [bug, windows‑os, app] Windows ARM64 app crash‑loops on launch** | 启动后 10‑15 s 进程退出，Crashpad 产生 minidump，`serialport` addon 无法加载。 | 桌面客户端在 ARM64 Windows 上频繁崩溃，影响可用性，评论 37，点赞 25。 | <https://github.com/openai/codex/issues/33381> |
| **#28969** | **[OPEN] [bug, enhancement, CLI, config, plan] Add setting to disable the auto‑resolve in 60 seconds for questions** | 用户希望在使用 GPT‑5.5 时关闭自动 60 s 解析，以自行控制响应时间。 | 需求直接暴露 CLI 参数可配置性不足，评论 37，点赞 124。 | <https://github.com/openai/codex/issues/28969> |
| **#31846** | **[OPEN] [bug, app, config] Codex App: GPT‑5.3 Codex Spark fails with "Unsupported parameter: reasoning.summary"** | 在 Spark 模式下调用时出现未支持的 `reasoning.summary` 参数，导致任务中断。 | 对新模型参数的兼容性问题引发关注，评论 28，点赞 33。 | <https://github.com/openai/codex/issues/31846> |
| **#33375** | **[OPEN] [bug, windows‑os, app, performance] [Windows App] Repeated serialport.node delay‑load failures cause severe UI lag** | 多次加载 `serialport.node` 引起 UI 卡顿，严重影响交互流畅度。 | 性能回归问题再次出现，评论 24，点赞 14。 | <https://github.com/openai/codex/issues/33375> |
| **#30178** | **[OPEN] [bug, windows‑os, app, browser] Codex Desktop in‑app Browser crashes the main app during webview navigation** | 浏览器标签页在特定导航后导致主进程退出。 | 浏览器组件不稳定，影响多任务浏览体验，评论 19，点赞 1。 | <https://github.com/openai/codex/issues/30178> |
| **#23198** | **[OPEN] [bug, windows‑os, app, performance] Codex Desktop on Windows is extremely slow even when the computer is fine** | 桌面客户端在普通使用场景下表现迟滞，单独归因于应用自身。 | 性能瓶颈再次被提及，评论 16，点赞 44。 | <https://github.com/openai/codex/issues/23198> |
| **#33119** | **[OPEN] [bug, windows‑os, app, connectivity] Windows Codex Desktop 26.707.9981.0 exits during startup without reporting a crash** | 启动后显示 “Thinking” 直接退出，未生成错误报告。 | 启动崩溃未被捕获，影响新装用户首次使用，评论 5，点赞 2。 | <https://github.com/openai/codex/issues/33119> |
| **#32880** | **[OPEN] [bug, windows‑os, sandbox, app] [Windows Desktop regression] Git writes stopped after 26.707.3748 → 26.707.6957 update; workspace‑write DENY ACL blocks linked worktrees** | 更新后 Git 自动写入功能失效，工作树被只读 ACL 阻断。 | 文件写入回归问题，评论 5，点赞 0。 | <https://github.com/openai/codex/issues/32880> |
| **#33202** | **[OPEN] [bug, windows‑os, app, browser] Codex Desktop crashes when the in‑app Browser opens with multiple side chats running** | 多聊天窗口打开后浏览器组件导致进程异常退出。 | 多人会话场景下的浏览器崩溃，评论 4，点赞 0。 | <https://github.com/openai/codex/issues/33202> |

> **为什么这些 Issue 重要？**  
> - 多数涉及 **桌面客户端稳定性**（启动崩溃、UI 卡顿、浏览器异常）直接阻碍日常使用。  
> - 部分突显 **模型参数兼容性** 与 **CLI 可配置性** 的不足，是开发者在生产流水线中必须的特性。  
> - 社区投票和评论量表明这些痛点是全局性关注点，而非个别案例。

---  

### 4. 重要 PR 进展（最近 24 h 合并的 10 条）  

| PR | 标题 | 核心改动 | 影响说明 | 链接 |
|----|------|----------|----------|------|
| **#33467** | **Remove template IDs from MCP tool call metadata** | 删除 `template_id` 相关字段，统一协议结构。 | 清理冗余元数据，降低错误解析风险。 | <https://github.com/openai/codex/pull/33467> |
| **#33464** | **Strengthen forced `rm` command detection** | 增强对 `rm` 强制删除指令的识别逻辑。 | 防止误用导致的危险操作，提升安全性。 | <https://github.com/openai/codex/pull/33464> |
| **#33455** | **[release/0.144] fix(core) expand is_dangerous_command** | 将 `danger-full-access` 模式的危险命令检测扩展至更多 Bash 变体。 | 进一步封堵潜在的安全漏洞。 | <https://github.com/openai/codex/pull/33455> |
| **#33459** | **Allow more time for image generation in code mode** | 将首次图像生成的超时从默认 60 s 调整为 120 s。 | 解决因生成时间不足导致的失败，提升成功率。 | <https://github.com/openai/codex/pull/33459> |
| **#33457** | **Use final answers in turn history summaries** | 只把带 `final_answer` 标记的消息计入历史记录摘要。 | 过滤冗余注释，使摘要更简洁、可靠。 | <https://github.com/openai/codex/pull/33457> |
| **#33456** | **Move external agent migration into its crate** | 将外部 agent 迁移代码抽离至独立 crate。 | 代码组织更清晰，便于二次开发和测试。 | <https://github.com/openai/codex/pull/33456> |
| **#33446** | **Remove the unused network proxy loader** | 删除未使用的网络代理加载模块及相关测试。 | 精简代码库，减小二进制体积。 | <https://github.com/openai/codex/pull/33446> |
| **#33445** | **Select the elevated Windows sandbox for network proxies** | 强制在提升权限的 Windows Sandbox 中执行代理相关操作。 | 解决 proxy 权限冲突，提高网络配置可靠性。 | <https://github.com/openai/codex/pull/33445> |
| **#33444** | **Add external agent memory migration** | 新增 `MEMORY` 迁移功能，支持跨项目记忆共享。 | 为多 agent 工作流提供统一的记忆迁移入口。 | <https://github.com/openai/codex/pull/33444> |
| **#33441** | **Shut down Codex threads after approval scenarios** | 在批准场景结束后显式关闭 Codex 线程。 | 防止残留线程占用资源，保证资源回收。 | <https://github.com/openai/codex/pull/33441> |

---  

### 5. 功能需求趋势  

- **多任务/多聊天 UI**：如 Issue #13036、#33202、#33458 提出的需求，社区希望在同一窗口内查看并切换多个独立聊天线程。  
- **可配置的时限与行为**：Issue #28969、#31826、#16164 需要对 CLI 自动解析超时、流重连延迟等进行细粒度调控。  
- **高效的上下文管理**：Issue #33306 呼吁提供 1.05 M token 上下文开关和压缩策略，以满足大模型的全上下文利用。  
- **更强的错误捕获与崩溃容错**：多个 crash‑loop Issue（#33381、#32880、#33119）显示用户对稳定启动和友好错误报告的迫切需求。  
- **IDE/编辑器深度集成**：Issue #32530、#15612 等关注 VS Code 扩展的可靠性与图形粘贴能力。  
- **新模型参数兼容**：如 Issue #31846、#32782、#33382（未列出但存在）反映对 GPT‑5.6‑Sol 等新模型 API 的即时适配需求。  

> **总体趋势**：社区从“功能上线”转向“**可靠性、可配置性与多任务协同**”，对 UI/UX、性能回归以及 API 兼容性的关注度显著提升。

---  

### 6. 开发者关注点  

- **稳定性**：崩溃、启动卡死、进程异常退出成为最高频痛点，尤其在 Windows ARM64 与 Windows 11 环境下。  
- **性能回归**：多次提及 UI 延迟、Git 写入停滞、进程泄漏（git.exe 高频产生）等，用户期

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-16

---

## 1. 今日速览
今日发布 Nightly 版本 **v0.52.0-nightly.20260716**，核心修复了 **取消工具调用后导致的 400 Bad Request 致命错误**（PR #28407），恢复了聊天会话的连续性。社区高优先级 Issue 聚焦于 **Subagent 可靠性危机**（误报成功、挂起、权限失控）、**Auto Memory 系统的生产级硬化**（死循环、安全脱敏、脏数据隔离）以及 **Shell 执行卡死** 等核心阻塞性问题。安全方面紧急修复了 Bash 变量扩展绕过漏洞（GHSA-wpqr-6v78-jr5g）。

---

## 2. 版本发布
### `v0.52.0-nightly.20260716.g3ff5ba20f` (2026-07-16)
[Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260716.g3ff5ba20f) | [PR #28413](https://github.com/google-gemini/gemini-cli/pull/28413)
- **核心修复**：合并 PR #28407，修复用户拒绝/取消工具调用后发送后续提示词导致的 `400 Bad Request`，解决会话强制重置、上下文丢失的严重体验问题。
- **常规迭代**：版本号自动递增，包含昨日 PR #28402 的夜ly构建更新。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 优先级/标签 | 核心痛点 | 关注度/评论 | 重要性判断 |
|---|---|---|---|---|---|
| 1 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent 超时却上报 GOAL Success | P1, Bug, Need-Retesting | `codebase_investigator` 触及 `MAX_TURNS` 仍返回 `status: "success"`，导致上层编排误判任务完成，隐藏中断风险。 | 👍 2 / 💬 10 | **极高**：破坏编排信任基石，自动化流程不可靠。 |
| 2 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist Agent 频繁挂起 | P1, Bug, Need-Retesting | 只要触发 Generalist 子代理即永久挂起（>1小时），禁用子代理后恢复正常。 | 👍 8 / 💬 7 | **极高**：核心功能不可用，用户规避成本高，社区呼声最高。 |
| 3 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell 命令执行完却卡在 "Waiting input" | P1, Core, Bug | 简单 CLI 执行后界面仍显示 "Awaiting user input"，需手动干预才能继续。 | 👍 3 / 💬 4 | **高**：核心交互循环阻塞，严重影响日常开发流。 |
| 4 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory 无限重试低信噪会话 | P2, Bug | 提取 Agent 判定会话低价值拒绝读取，导致会话永留在 Inbox 反复被调度，浪费资源。 | 💬 5 | **高**：后台资源泄漏，长期运行稳定性隐患。 |
| 5 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** 组件级鲁棒性评测体系建设 | P1, Eval-Infra, Epic | 76 个行为评测用例跨 6 模型运行，需建立组件级评测替代端到端黑盒测试。 | 💬 7 | **高**：工程质量保障基建，关乎长期模型升级稳定性。 |
| 6 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST 感知工具价值评估 | P2, Feature, Epic | 探索 AST 级读取/搜索/映射是否能减少 Token 噪音、降低轮次、精准定位方法边界。 | 👍 1 / 💬 7 | **中高**：架构演进方向，关联代码库理解能力上限。 |
| 7 | **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** 原生 Bash 亲和性与零依赖沙箱 | P2, Enhancement, Large | 模型原生擅长 POSIX 工具链，需在安全前提下释放原生能力，避免封装层损耗。 | 👍 1 / 💬 8 | **中高**：战略架构方向，影响 Agent 核心能力上限。 |
| 8 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** 模型主动使用 Skills/Subagents 不足 | P2, Bug | 除非显式指令，模型极少自发调用自定义技能或子代理，自主性差。 | 💬 6 | **中**：Prompt/系统指令层面的引导缺失，影响易用性。 |
| 9 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser Agent 在 Wayland 下失败 | P1, Bug, Agent/Browser | Wayland 环境下浏览器子代理启动即报错 `GOAL` 终止，Linux 桌面兼容性缺口。 | 👍 1 / 💬 4 | **中**：Linux 开发者核心场景受阻，平台覆盖率短板。 |
| 10 | **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 工具数 >128 触发 400 报错 | P2, Bug | 可用工具过多导致请求体超限，期望 Agent 自动收敛工具作用域而非硬报错。 | 💬 3 | **中**：规模化扩展阻力，需动态工具路由机制。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|---|---|---|---|
| 1 | **[#28407](https://github.com/google-gemini/gemini-cli/pull/28407)** fix(core,a2a): group cancelled tool responses | **Closed (Merged)** | 合并取消的工具响应、合并连续角色，修复取消工具后发送消息触发的 **400 Bad Request**。 | **全量用户**：解决会话中断的头号 Blocker，已进入 Nightly。 |
| 2 | **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)** fix(core): block `$VAR`/`${VAR}` variable expansion bypass | **Open** | 修复 `detectBashSubstitution` 仅拦截 `$()`/反引号，**漏拦 `$VAR`/`${VAR}`** 导致的 Secrets 外泄风险 (GHSA-wpqr-6v78-jr5g)。 | **安全/全量**：高危注入绕过，需尽快合并回主干。 |
| 3 | **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410)** fix(core): shorten MCP tools/list discovery timeout | **Open** | MCP `tools/list` 发现请求默认超时从 **10 分钟降为快速失败**，防止启动期因恶意/故障 Server 

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报  
**日期：2026-07-16**

---

## 1. 今日速览

- 两则高优先级 Issue 引发社区关注：一个是键盘输入数据丢失问题（#4147），另一个是终端渲染缺陷（#4146）；
- OAuth 身份验证与 MCP 服务器集成持续是社区热点，多个企业级 MCP 服务配置存在连接异常；
- 最新版本 v1.0.71-3 修复了设置文件无效时的警告机制及终端兼容性问题。

---

## 2. 版本发布

### v1.0.71-3

- **Fixed**:
  - 启动时若 `settings.json` 无效，将显示具体警告信息，而非静默忽略配置；
  - `/terminal-setup` 不再因缺乏真实的 kitty 键盘支持而跳过终端初始化。

🔗 [查看 Release 详情](https://github.com/github/copilot-cli/releases/tag/v1.0.71-3)

---

## 3. 社区热点 Issues

| 编号 | 标题 | 简介 | 评论数 |
|------|------|------|--------|
| [#223](https://github.com/github/copilot-cli/issues/223) | “Copilot Requests” 权限在组织令牌中不可见 | 企业用户反馈组织级令牌缺少关键权限控制，影响安全合规性。 | 31 |
| [#1477](https://github.com/github/copilot-cli/issues/1477) | 模型耗尽后继续自动完成报错 | 使用 autopilot 模式时触发“3个高级请求”弹窗，被误判为功能异常。 | 11 |
| [#4024](https://github.com/github/copilot-cli/issues/4024) | 语音模式下所有 ASR 模型返回空结果 | 语音输入录制成功，但转写结果为空，影响多模态体验。 | 8 |
| [#4096](https://github.com/github/copilot-cli/issues/4096) | 第三方 MCP 服务器显示已连接但工具不可用 | OAuth 登录成功后，CLI 会话中未桥接令牌，工具列表为空。 | 5 |
| [#1979](https://github.com/github/copilot-cli/issues/1979) | 支持远程会话接入（类似 Claude Code） | 用户希望从移动端或浏览器附加到正在运行的 CLI 会话中。 | 4 |
| [#1069](https://github.com/github/copilot-cli/issues/1069) | 快捷键 Ctrl+A/E/F/B 等被错误覆盖 | 标准 readline/emacs 快捷键在输入框中失效，影响编辑流畅度。 | 3 |
| [#2052](https://github.com/github/copilot-cli/issues/2052) | 添加持久化 Token 使用指示器 | 请求在 CLI 界面添加上下文使用率提示，提升资源感知能力。 | 3 |
| [#4034](https://github.com/github/copilot-cli/issues/4034) | 工具钩子子进程 stdin 写入端未关闭 | 导致某些脚本模式下挂起，尤其是使用 `$(cat)` 模式时。 | 3 |
| [#4089](https://github.com/github/copilot-cli/issues/4089) | Atlassian MCP 服务器 OAuth 成功但无工具加载 | 与其他 MCP 服务对比，仅该服务工具未暴露给会话。 | 3 |
| [#4147](https://github.com/github/copilot-cli/issues/4147) | 左右箭头键劫持光标，导致输入丢失（紧急） | 双击左箭头即创建新会话，中途输入内容将被抛弃。 | 0 |

---

## 4. 重要 PR 进展

目前暂无近期有重大 PR 合入。社区建议关注 [官方 PR 列表](https://github.com/github/copilot-cli/pulls) 以获取实时更新。

---

## 5. 功能需求趋势

从当前 Issue 中可归纳出以下几大开发方向：

### ✅ 身份认证与 MCP 集成
- 多用户报告非 GitHub 官方 MCP 服务器（如 Atlassian、Azure DevOps）OAuth 流程异常；
- 组织令牌权限 visibility 问题凸显企业级部署需求；

### 🧠 模型与上下文管理
- 语音识别（ASR）模型表现不稳定；
- 部分模型缺少推理链路输出；
- 上下文窗口大小限制仍是部分用户痛点；

### ⌨️ 用户交互体验
- 快捷键冲突与输入框行为异常；
- 渲染 glitches 及选中高亮问题；
- 终端兼容性差（特别是 Linux NFS 环境）；

### 🔁 会话与状态同步
- 跨设备会话接入需求上升；
-非交互式模式下消息注入错误；
- Docker stdio MCP 服务重复启动问题；

---

## 6. 开发者关注点

- **数据安全与合规**：组织层面的权限控制与令牌隔离是企业用户的核心诉求；
- **跨终端一致性**：不同平台（Windows / Linux）下的 UI 渲染与快捷键支持需统一优化；
- **MCP 标准兼容性**：第三方服务集成中存在的认证桥接、分页加载等问题需紧急排查；
- **性能与资源占用**：大文件 diff 存储、上下文溢出等问题可能影响长期会话稳定性；

--- 

> 📌 温馨提示：建议开发者关注标签为 `area:authentication`, `area:mcp`, `area:sessions` 的 Issue 以获取最新功能迭代动态。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报  
**日期：2026-07-16**

---

## 1. 今日速览

- 今日无新版本发布，社区活跃度以 PR 为主；
- 唯一的 PR #2500 聚焦遥测系统对齐，引入 `trace_id` 字段，提升跨平台追踪能力；
- 社区暂无高亮 Issue，功能需求集中于 IDE 集成与性能优化。

---

## 2. 版本发布

暂无。

---

## 3. 社区热点 Issues（暂无高亮 Issue）

过去24小时内无新更新的 Issue，建议持续关注主线 Issue 列表以获取最新需求与讨论。

---

## 4. 重要 PR 进展

| PR 编号 | 标题 | 作者 | 状态 | 摘要 |
|--------|------|------|------|------|
| [#2500](https://github.com/MoonshotAI/kimi-cli/pull/2500) | feat(telemetry): align events with TS schema, add trace_id and missing events | 7Sageer | [OPEN] | 作者通过 `with_raw_response` 捕获 `x-trace-id` 响应头，实现 Python 遥测事件与 TypeScript 版统一，支持链路追踪与日志关联。 |

---

## 5. 功能需求趋势

从最近的 Issues 反馈来看，社区关注度集中于：

- **IDE 集成**：对接 VSCode、Claude Desktop 等主流编辑器；
- **性能优化**：加快响应速度、减少初始化开销；
- **多模型支持**：扩展对非 Kimi 模型的兼容性；
- **配置文件灵活性**：增强 `.kimirc` 配置项可调范围。

---

## 6. 开发者关注点

- **遥测链路追踪不完整**：开发者要求统一 trace ID 跨端传递；
- **IDE 插件文档不足**：用户反馈缺少完整插件安装与调试指南；
- **错误提示模糊**：CLI 报错信息需更具指向性，便于快速定位问题；
- **配置文件热加载**：期待配置变更无需重启生效。

--- 

*以上内容由 GitHub 公共数据整理，供开发者参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报  
**日期：2026-07-16**

---

## 1. 今日速览

1. **v1.18.2 正式发布**，修复子智能体嵌套调用漏洞，优化 Meta 模型推理深度；
2. **桌面端布局问题引发广泛反馈**：标签栏标题显示异常、Agent 模式切换按钮隐身等 UI 问题备受关注；
3. **多个紧急 PR 同步合并**：解决会话溢出检测时序问题、修复 WebFetch 权限范围过宽、完善自定义工具错误提示等。

---

## 2. 版本发布

### OpenCode v1.18.2（2026-07-15）

链接：[https://github.com/anomalyco/opencode/releases/tag/v1.18.2](https://github.com/anomalyco/opencode/releases/tag/v1.18.2)

#### Core
- **Bugfixes**
  - 禁用子智能体默认嵌套调用，新增可配置的 `subagent_depth` 限制；
  - 优化 Meta 模型默认推理深度；

#### Desktop
- **Improvements**
  - 新增 `Mod+N` 快捷键，可快速打开新标签页；
- **Bugfixes**
  - 暂无具体修复内容（占位）

---

## 3. 社区热点 Issues

| 编号 | 标题 | 简介 | 热度 |
|------|------|------|------|
| [#36936](https://github.com/anomalyco/opencode/issues/36936) | Desktop: WTF is the new tab layout, tab titles dont fit anymore on screen | 新标签布局导致标题无法完整显示，用户认为是回归 bug | 14 评论 / 11 👍 |
| [#36997](https://github.com/anomalyco/opencode/issues/36997) | [Bug] Desktop App v1.18.1 new layout hides agent switching UI | v1.18.1 新增布局遮挡 Plan/Build 模式切换按钮 | 9 评论 / 2 👍 |
| [#37063](https://github.com/anomalyco/opencode/issues/37063) | History chat conversation not displayed | 升级至 v1.18.1 后历史聊天记录消失 | 5 评论 |
| [#37158](https://github.com/anomalyco/opencode/issues/37158) | The button change de mode / build or plan mode has disappear | 计划/构建模式切换按钮消失 | 5 评论 |
| [#10634](https://github.com/anomalyco/opencode/issues/10634) | [bug, perf] Compaction overflow check doesn't account for large tool outputs | 大文件读取后自动压缩未触发溢出检测 | 4 评论 / 6 👍 |
| [#36942](https://github.com/anomalyco/opencode/issues/36942) | [FEATURE]: Vertical tabs | 请求支持垂直标签栏以增大可见范围 | 4 评论 / 5 👍 |
| [#37144](https://github.com/anomalyco/opencode/issues/37144) | [2.0] config: no-auth custom providers dropped when env is undefined | 本地 provider 配置因缺少 env 字段被忽略 | 3 评论 |
| [#34305](https://github.com/anomalyco/opencode/issues/34305) | unable to use lmstudio | LM Studio 提供者未正确获取本地模型列表 | 3 评论 |
| [#37171](https://github.com/anomalyco/opencode/issues/37171) | Desktop crashes on restart: "Notification server not found: wsl:Ubuntu" | WSL 环境下启动崩溃 | 3 评论 |
| [#21227](https://github.com/anomalyco/opencode/issues/21227) | [FEATURE(app)]: display image attachments from tool results in chat UI | 支持在聊天界面显示工具返回的图片 | 3 评论 / 7 👍 |

---

## 4. 重要 PR 进展

| 编号 | 标题 | 简介 | 状态 |
|------|------|------|------|
| [#37194](https://github.com/anomalyco/opencode/pull/37194) | fix(session): resolve session overflow detection timing gaps | 修复会话溢出检测时序问题，增强稳定性 | 合并 |
| [#37129](https://github.com/anomalyco/opencode/pull/37129) | fix(app): default advanced features for new users | 新用户默认隐藏部分高级功能，现有用户升级时自动启用 | 合并 |
| [#37198](https://github.com/anomalyco/opencode/pull/37198) | fix(app): show selector for custom agents | 强制在自定义 Agent 项目中显示选择器 | 合并 |
| [#37185](https://github.com/anomalyco/opencode/pull/37185) | fix(tui): publish session event when custom tool import fails | 自定义工具加载失败时在 TUI 中显示错误 | 合并 |
| [#37182](https://github.com/anomalyco/opencode/pull/37182) | fix(webfetch): scope always-allow to domain instead of all URLs | WebFetch 始终允许权限限定为当前域名 | 合并 |
| [#37197](https://github.com/anomalyco/opencode/pull/37197) | [contributor] fix(nix): restore desktop integration | 恢复 Nix 包的 Linux 桌面集成功能 | 合并 |
| [#37195](https://github.com/anomalyco/opencode/pull/37195) | tweak: adjust compaction to clearly indicate the convo history | 调整压缩逻辑，使对话历史更清晰 | 合并 |
| [#37181](https://github.com/anomalyco/opencode/pull/37181) | refactor(core): select system prompts through plugins | 重构核心逻辑，支持通过插件选择系统提示词 | 合并 |
| [#37141](https://github.com/anomalyco/opencode/pull/37141) | feat(core): normalize tool and attachment images at settlement | 统一图像压缩处理，防止超大上下文 | 进行中 |
| [#37192](https://github.com/anomalyco/opencode/pull/37192) | [contributor] feat(plugin): support dynamic Effect tools | 支持外部 Effect 插件注册动态工具 | 进行中 |

---

## 5. 功能需求趋势

从近期 Issue 中可归纳出以下几大功能需求方向：

- **界面适配与自定义布局**  
  用户对桌面端标签栏、Agent 切换按钮等布局元素提出大量反馈，期待支持垂直标签栏、历史记录可视化等改进。

- **模型与 Provider 支持**  
  LM Studio、Claude ACP 等本地模型集成需求持续增长，尤其是对无需认证的 provider 支持有明确诉求。

- **图片与多媒体处理**  
  工具返回图片时，UI 无法正确展示；同时大图导致上下文超限也成为高频问题。

- **子智能体控制机制**  
  子 Agent 嵌套调用频繁，引发资源浪费与逻辑混乱，社区希望有更细粒度的控制能力。

- **会话管理优化**  
  自动生成标题、历史记录恢复、压缩策略优化等会话体验相关需求广泛存在。

---

## 6. 开发者关注点

- **会话溢出与压缩机制不稳定**：多条 Issue 指出压缩后仍可能触发溢出或失败，尤其在大文件读取场景下表现突出；
- **WSL 及 Linux 桌面集成问题**：启动崩溃、侧边栏缺失等平台兼容性问题频发；
- **权限控制粒度不足**：WebFetch 的“始终允许”权限范围过宽，存在安全隐患；
- **自定义工具加载错误不友好**：加载失败时 TUI 界面无提示，影响调试效率；
- **输入法（IME）冲突**：在中文输入法下使用“leader”键等快捷键时易产生干扰。

--- 

以上是针对 **2026-07-16** 的 OpenCode 社区动态总结。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期**：2026-07-16  
**数据来源**：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. 今日速览
今日 Qwen Code 推送了 `v0.19.10-nightly.20260716.506ce0a1a` 夜间构建版，并发布了 `cua-driver-rs v0.7.2` 预编译二进制（支持相对坐标分支）。社区围绕 **daemon 多工作区管理、通道集成（钉钉/WeCom）、MCP 安全与兼容性** 展开了高密度讨论，单日新增/更新 Issue 41 条、PR 50 条，CI 稳定性与会话管理仍是核心痛点。

---

## 2. 版本发布
- **v0.19.10-nightly.20260716.506ce0a1a**  
  夜间构建版，包含文档与 web-shell 等更新（如 PR 审查范围限制、workspace 路径支持等）。  
  链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.19.10-nightly.20260716.506ce0a1a
- **cua-driver-rs v0.7.2**  
  提供相对坐标分支的预构建二进制：macOS（已签名公证通用包 + App）、Linux（x86_64/arm64，glibc 2.31+）、Windows（x86_64/arm64，未签名）。  
  说明：vendored under `packages/cua-driver`，启用相对坐标以兼容 CUA 驱动场景。

---

## 3. 社区热点 Issues（Top 10）
1. **#6378** [RFC] 单 daemon 支持多工作区（23 评论）  
   高互动 RFC，提议打破“1 daemon = 1 workspace”假设，影响后续架构。  
   https://github.com/QwenLM/qwen-code/issues/6378
2. **#4782** ACP Streamable HTTP 传输跟踪（5 评论）  
   Zed/Goose/JetBrains 可无适配直连 `qwen serve`，需关注落地进度。  
   https://github.com/QwenLM/qwen-code/issues/4782
3. **#6928** GitHub App 鉴权未注入新工作区（5 评论）  
   私有仓库挂载后缺失 OAuth，阻断自动化流程。  
   https://github.com/QwenLM/qwen-code/issues/6928
4. **#5239** 子 agent 与主会话通信弱（4 评论）  
   缺乏双向通知，用户用文件监控绕行，多 agent 体验待提升。  
   https://github.com/QwenLM/qwen-code/issues/5239
5. **#6936** 托管记忆设置失效浪费上下文（3 评论）  
   `enableManagedAutoMemory:false` 仍注入 7–9KB 指令，上下文利用 bug。  
   https://github.com/QwenLM/qwen-code/issues/6936
6. **#6443** 钉钉通道交互卡片增强（3 评论）  
   状态卡+停止按钮+表单卡，渠道体验优化需求。  
   https://github.com/QwenLM/qwen-code/issues/6443
7. **#6898** Shell 提醒每工具触发过烦（3 评论）  
   希望任务级而非逐工具弹窗，易用性反馈。  
   https://github.com/QwenLM/qwen-code/issues/6898
8. **#6970** MCP 工具名严格供应商拒绝（2 评论）  
   含点号名称在 OpenAI/Anthropic 兼容模式被拒，互操作问题。  
   https://github.com/QwenLM/qwen-code/issues/6970
9. **#6943** 输出语言锁定 bug/请求 auto 模式（2 评论）  
   应随用户输入语言动态切换，而非强制固定。  
   https://github.com/QwenLM/qwen-code/issues/6943
10. **#6927** 分类器误杀导致死锁（2 评论）  
    `auto` 模式下安全分类器 fail-close 阻塞所有写工具，高危。  
    https://github.com/QwenLM/qwen-code/issues/6927

---

## 4. 重要 PR 进展（Top 10）
1. **#6993** fix(headless): 并发安全并行工具调用  
   非交互模式此前串行执行并行工具，现对齐 TUI 并发。  
   https://github.com/QwenLM/qwen-code/pull/6993
2. **#6963** ci(web-shell): 前后视觉差异预览  
   仅展示变更视图的像素 diff，提升 Review 效率。  
   https://github.com/QwenLM/qwen-code/pull/6963
3. **#6953** fix(cli): 输出语言跟随用户输入  
   实现 `outputLanguage=auto` 按用户语言响应。  
   https://github.com/QwenLM/qwen-code/pull/6953
4. **#6937** feat(cli): VP 模式鼠标选择与复制  
   终端缓冲内支持拖选/双击复制。  
   https://github.com/QwenLM/qwen-code/pull/6937
5. **#6895** feat(core): 传播可信调用上下文  
   安全相关，建立 InvocationContextV1 信任链。  
   https://github.com/QwenLM/qwen-code/pull/6895
6. **#6961** feat(daemon): 聚合深度健康巡检（已合）  
   多工作区 `/health?deep=1` 快照。  
   https://github.com/QwenLM/qwen-code/pull/6961
7. **#6950** fix(cli): 保留通道启动错误（已合）  
   渠道 worker 错误透传至管控面。  
   https://github.com/QwenLM/qwen-code/pull/6950
8. **#6967** fix(core): 退出 Plan 模式需显式确认  
   防误退出计划模式。  
   https://github.com/QwenLM/qwen-code/pull/6967
9. **#6971** feat(web-shell): 分屏按工作区着色  
   窄屏多工作区辨识度优化。  
   https://github.com/QwenLM/qwen-code/pull/6971
10. **#6991** feat(channels): 守护会话打渠道源标签  
    溯源 channel 创建的 daemon 会话。  
    https://github.com/QwenLM/qwen-code/pull/6991

---

## 5. 功能需求趋势
- **Daemon / 多工作区架构**：#6378、#6962、#6946 均指向单 daemon 多 workspace、会话元数据持久化与后台自动化。
- **渠道集成（钉钉/WeCom）**：#6443、#6883、#6930、#6939 显示企业 IM 交互卡片、单聊投递、提及门控修复为热点。
- **MCP 与工具兼容**：#6970、#6917、#6895 反映跨供应商 MCP 命名、未信任只读提示、可信上下文传播需求。
- **会话与子代理通信**：#5239、#6984 呼吁双向通知与按模型并发限制。
- **国际化与输出体验**：#6943、#6953 要求 auto 语言模式。
- **Web Shell 可视化**：#6963、#6971、#6937 增强预览、分屏、终端交互。

---

## 6. 开发者关注点
- **CI 稳定性**：单日多条 `Main CI failed: E2E Tests` 自动 Issue（#6938 等），慢 runner 时序飘移成频扰。
- **上下文浪费**：#6936 等表明配置开关未生效仍占 token，开发者对上下文效率敏感。
- **安全默认过严/泄漏**：#6927 分类器死锁、#6831 信任态误写、#6917 只读 hint 跳过确认，安全机制需平衡。
- **daemon 错误可见性**：通道启动失败被吞，#6909/#6950 集中修复。
- **交互噪声**：#6898 shell 提醒过密，期望任务级聚合通知。
- **模型切换与默认**：#6977 默认升 `qwen3.7-max`，但分类器/兼容问题随模型迭代暴露。

---  
*日报由技术分析师基于 GitHub 公开数据自动汇编，仅供参考。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek‑TUI 社区动态日报 2026‑07‑16**

---

### 1. 今日速览
- **无新版本发布**，但社区在 Issue #3368 中明确了本周安全硬化的跟踪需求，标志着 v0.8.64 发行列车即将进入收尾阶段。  
- **关键故障类 Issue 仍高频**：包括 TUI 卡死、输入法失效以及 Windows 环境下的多轮对话崩溃，累计评论超过 70 条，开发者正在密集讨论解决方案。

---

### 2. 版本发布
> 无最新 Released 发布，仍停留在 v0.8.64 开发路线。后续发布将围绕安全硬化、性能优化及功能模块的整合展开。

---

### 3. 社区热点 Issues（10 条最值得关注）

| # | 标题摘要 | 重要性 | 社区反应 |
|---|----------|--------|----------|
| **#3368** | **[security, reliability, v0.9.3]** v0.8.64: Land and verify security hardening/code‑scanning fixes | 负责本次安全加固的唯一公开跟踪口，明确发行门槛 | 29 条评论，0 ★，维护者已标记为 **security‑gate**，社区期待尽快合并 |
| **#2487** | **[bug, enhancement, tui, reliability, v0.9.2]** Frequent error: Turn stalled - no completion signal received. | TUI 在 `yolo` 模式下经常卡死，影响关键工作流 | 20 条评论，1 ★，用户反馈多次尝试 `continue` 仍无响应，呼吁提供更明确的错误恢复路径 |
| **#1812** | **[bug, enhancement, tui, reliability, v0.9.2]** TUI‑freeze‑Windows‑crossterm‑poll | Windows 11 上出现 UI 完全冻结但进程仍存活的情况 | 11 条评论，0 ★，提供了详细日志和线程状态分析，期待跨平台兼容性改进 |
| **#1607** | **[enhancement, v0.9.3]** 建议token成本估算新增加几个货币单位 | 用户希望在费用估算中加入人民币等本地货币，提升本地化体验 | 7 条评论，0 ★，官方尚未回应具体实现方案 |
| **#2261** | **[bug, v0.9.2]** TUI 对话中进程崩溃，输入内容泄漏到 PowerShell 终端 | 输入框焦点丢失导致命令误执行，安全风险突出 | 6 条评论，0 ★，复现步骤清晰，社区呼吁立即修复 |
| **#1678** | **[v0.9.3]** [Feature] 为APP添加检查新版本以及更新APP功能吧，再添加上github链接 | 用户希望内置版本检测与更新入口，提升使用便利性 | 5 条评论，0 ★，需求明确但实现路径尚未定义 |
| **#1835** | **[bug, v0.9.2]** [BUG] Windows: Input field completely unresponsive to keystrokes (IME composition event deadlock) | 输法卡死导致中文输入失效，影响用户体验 | 5 条评论，1 ★，深入分析了 IME 事件死锁，期待根本性修复 |
| **#1067** | **[bug, v0.8.61]** glibc version required | 在 Ubuntu 2.35 环境下缺少 2.38/2.39，导致启动失败 | 4 条评论，0 ★，用户提出兼容性需求，维护者标记为 **compatibility issue** |
| **#3490** | **[documentation, enhancement, cleanup, reliability, v0.9.3]** v0.8.71: Legacy follow‑up and dead‑code inventory | 代码基座中大量 `allow(dead_code)` 与旧注释，需要清理以减小技术债 | 4 条评论，0 ★，维护者提出“清理”或“追踪”，社区关注代码健康度 |
| **#1897** | **[documentation, enhancement, v0.9.3]** Refactor roadmap: ownership map and extraction plan | 为后续大规模重构提供所有权映射，提升维护可读性 | 4 条评论，0 ★，策划性issue，对代码组织有长远意义 |

> 以上 Issue 均在最近 24h 内得到更新，评论量与社区关注度均居前，值得重点跟进。

---

### 4. 重要 PR 进展（10 条最具影响力）

| PR | 标题 | 状态 | 关键改动 | 链接 |
|----|------|------|----------|------|
| **#4087** | refactor(hooks): split config and executor modules | OPEN | 将 `hooks` 拆分为 `config.rs` 与 `executor.rs`，提升可维护性 | <https://github.com/Hmbown/CodeWhale/pull/4087> |
| **#4084** | fix(fleet): reject retired profile loadout aliases | CLOSED | 移除已弃用的 `model_class_hint`、`route_tier`，使用统一的 `loadout` 字段 | <https://github.com/Hmbown/CodeWhale/pull/4084> |
| **#4332** | fix: make v0.8.68 TUI state and routing truthful | CLOSED | 修复 TUI 状态同步错误，确保路由信息可靠 | <https://github.com/Hmbown/CodeWhale/pull/4332> |
| **#4044** | fix(onboarding): localize dynamic welcome steps | CLOSED | 本地化欢迎页面，使用 `MessageId` 注册动态文案 | <https://github.com/Hmbown/CodeWhale/pull/4044> |
| **#3902** | perf(tui): fix the five render/input hot paths | CLOSED | 解决五个关键渲染/输入路径的性能瓶颈 | <https://github.com/Hmbown/CodeWhale/pull/3902> |
| **#3969** | Add per‑sub‑agent provider routing | CLOSED | 引入按子代理划分的提供者路由，提升多模型调度精细度 | <https://github.com/Hmbown/CodeWhale/pull/3969> |
| **#3818** | fix(tui): expand active tool run summaries | CLOSED | 在摘要中加入活跃任务，防止密集工具运行被误删 | <https://github.com/Hmbown/CodeWhale/pull/3818> |
| **#3761** | [codex] defer startup maintenance cleanup | CLOSED | 将启动时的清理任务迁移到异步维护线程，降低交互延迟 | <https://github.com/Hmbown/CodeWhale/pull/3761> |
| **#4088** | fix(tui): preserve native selection without mouse capture | CLOSED | 保持原生文字选择功能，同时在 `--no-mouse-capture` 模式下不捕获鼠标 | <https://github.com/Hmbown/CodeWhale/pull/4088> |
| **#4372** | fix(skills): preserve inline task text | CLOSED | 保留 `$<skill> do X` 等技能指令的完整文本，避免丢失 | <https://github.com/Hmbown/CodeWhale/pull/4372> |

> 这些 PR 包括 **安全硬化、性能优化、兼容性修复以及功能增强** 四大方向，均已合并或在审查中，对即将发布的 v0.8.68+ 版本影响深远。

---

### 5. 功能需求趋势

从本轮 Issue 中可见的高频需求可归纳为：

1. **安全与可靠性** – 明确的安全硬化跟踪（#3368）与错误恢复机制（#2487、#1835）是首要关注。  
2. **性能与响应速度** – 多次提及渲染/输入热点（#3902）以及启动清理（#3761）显示社区对流畅交互的迫切需求。  
3. **跨平台兼容性** – Windows 环境下的 UI 冻结、输入法卡死以及 glibc 兼容性（#1067）是跨平台用户的痛点。  
4. **用户体验细化** – 包含 **token 成本本地化**、版本检测入口、完整的本地选择复制、斜线命令可视化等功能请求。  
5. **模块化与可维护性** – 大量 Rust 代码拆分 PR（#4087、#3310~#3314 等）表明社区希望在技术架构层面提升可读性与可测性。

> 综合来看，社区在 **稳定性提升、性能优化、跨平台兼容以及功能本地化** 四大维度上形成共识。

---

### 6. 开发者关注点

- **痛点**：  
  - TUI 在 `yolo` 模式下的卡死与输入焦点失效（#2487、#2261）导致工作流中断。  
  - Windows IME 事件死锁（#1835）使得中文输入不可靠。  
  - 代码基座中的大量死代码与 `allow(dead_code)`（#3490）增加维护成本。  

- **高频需求**：  
  - **安全审计**：明确的安全硬化跟踪与发行门槛。  
  - **本地化费用模型**：希望在费用估算中加入人民币等本币单位。  
  - **完整的功能入口**：如版本检查、更新链接以及 TelecomJS Provider 支持。  
  - **更好的错误恢复**：在卡死后能够通过明确的指令恢复而非重新启动。  

> 这些反馈直接指向了下一波开发重点 —  — **提升 TUI 稳定性、增强跨平台兼容、提供本地化费用信息、以及继续代码模块化**。  

--- 

*以上报告基于 GitHub Issue 与 Pull Request 最新动态编译，链接均指向对应 GitHub 条目，供进一步追踪。*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*