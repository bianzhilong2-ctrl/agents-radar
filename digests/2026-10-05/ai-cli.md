# AI CLI 工具社区动态日报 2026-10-05

> 生成时间: 2026-10-05 03:05 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-05）

---

## 1. 生态全景
当前 AI CLI 工具生态已从“模型封装”进化为**“智能体运行时平台”竞争**。头部厂商（Anthropic、OpenAI、Google、GitHub）聚焦**企业级治理（策略、审计、沙箱）与长上下文可靠性**，社区驱动项目（OpenCode、Pi、DeepSeek TUI）则在**耐久执行、多模型路由、本地优先体验**上深耕。核心冲突点集中在：上下文压缩策略的可控性、跨平台（特别是 Windows/WSL）沙箱稳定性、MCP/插件生态的权限模型标准化。整体呈现“云端托管 vs 本地耐久”、“厂商锁定 vs 多模型网关”两大分化路线。

---

## 2. 各工具活跃度对比

| 工具 | 仓库 | 今日 Issues 活跃度 | 今日 PR 活跃度 | 版本发布情况 | 核心标签 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | anthropics/claude-code | **高** (50 新增/更新，Top 10 热度 27-45👍) | **中** (5 条，含安全策略、Hookify) | **无** | 企业治理、长上下文、Hooks 生态 |
| **OpenAI Codex** | openai/codex | **高** (多条 10-50+ 评论，关注远程/沙箱) | **高** (10 条合并，含 ACL 恢复、Daemon 复用) | **预发布** (3 个 rust-alpha 版本) | 远程结对、Rust 重构、额度银行 |
| **Gemini CLI** | google-gemini/gemini-cli | **高** (P1 级阻塞性 Bug 多，如 Agent 挂起) | **高** (10 条修复，覆盖渲染、配额、沙箱) | **Nightly** (v0.64.0-nightly 每日构建) | 大规模工具链、AST 读取、Podman 沙箱 |
| **GitHub Copilot CLI** | github/copilot-cli | **高** (Session 认证失效 24 评论/10👍，阻塞性) | **低** (0 合并) | **Patch** (v1.0.92-4，配置命令/启动优化) | GitHub 集成、Shell 优先、认证脆弱性 |
| **OpenCode** | anomalyco/opencode | **中高** (10 条精选，模型兼容/跨平台/配额) | **高** (10 条，TUI/GUI 一致性、移动端、Vercel Gateway) | **无** | 本地优先、多模型网关、TUI/GUI 双端 |
| **Pi** | badlogic/pi-mono | **中高** (30 条更新，Top 1 14 评论聚焦 TUI 性能) | **低** (4 条更新，含 QuickJS/WASM 路径修复) | **无** | TUI 渲染性能、多适配器兼容、耐久执行 |
| **DeepSeek TUI** | codewhale-hq/Codewhale | **中** (10 条聚焦引擎恢复/原子检查点) | **中** (5 条，引擎收敛、Windows UTF-8、命令重构) | **无** | Rust 引擎、原子持久化、Human-in-loop 恢复 |
| **Qwen Code** | QwenLM/qwen-code | **中** (主线推进托管 Agent、K8s CSI 运行时) | - | **主线推进** (无版本号，架构级特性落地) | 云原生托管、K8s 运行时、持久化 ACK |
| **Kimi Code** | MoonshotAI/kimi-cli | **无** | **无** | **无** | 观望期 |

> **数据说明**：Issues/PR 数基于各日报“过去 24 小时”统计；Claude Code 明确标注 50 Issues/5 PRs，其余工具以日报精选条数为下限参考。

---

## 3. 共同关注的功能方向

| 共性方向 | 关注工具 | 具体诉求与痛点 |
| :--- | :--- | :--- |
| **上下文/压缩 可控性与可靠性** | **Claude Code** (#67609 Advisor 100k 失效)、**Gemini** (#22323 MAX_TURNS 误判成功、#21409 挂起)、**OpenCode** (#44094 压缩忽略指定模型、#44080 空摘要丢失上下文)、**DeepSeek TUI** (#6721 紧急压缩中断保存、#6842 日志无界增长)、**Pi** (#10330 CLI 自动压缩不触发、#8301 无法交错压缩) | 压缩不再是后台黑盒，开发者需**指定压缩模型、监控压缩触发、防止关键上下文丢失、审计压缩结果**。 |
| **Windows/WSL 沙箱与进程生命周期** | **Claude Code** (#91763 git daemon 阻塞更新、#90867 会话丢失)、**Codex** (#5

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

User Safety: safe

---



# Claude Code 社区动态日报 — 2026-10-05

---

## 1. 今日速览

今日无新版本发布。社区活跃度较高，过去 24 小时内新增/更新了 50 个 Issue 和 5 个 PR。核心动态集中在三方面：**长对话（>100K tokens）下 Advisor 工具不可用**的高影响力 Bug、**插件技能粒度控制**的热门功能诉求，以及 Windows 平台多处桌面端稳定性缺陷。

---

## 2. 版本发布

**无。** 过去 24 小时内未发布新版本。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #67609 — Advisor 工具在长对话下返回 "unavailable"
- **标签**: `bug` `has-repro` `platform:macos` `area:model` `area:core`
- **热度**: 27 评论 / 45 👍
- **摘要**: 当模型为 `claude-fable-5` 且对话 transcript 超过约 100K tokens 时，服务端 Advisor 工具返回 `advisor_tool_result_error`（`error_code: "unavailable"`）。低于该阈值时同一配置正常工作，Advisor 实际失效。
- **为何重要**: 直接影响长上下文场景下的 Advisor 功能可用性，是当前社区反馈最密集的 Bug 之一。

### 🟡 #14920 — 希望支持单独禁用 Claude 插件技能
- **标签**: `enhancement` `platform:macos` `area:core`
- **热度**: 19 评论 / 95 👍
- **摘要**: 用户希望能按技能粒度禁用插件能力（例如只保留 `:commit`，禁用 `commit-push-pr` 和 `clean_gone`）。当前插件技能只能整体开关。
- **为何重要**: 95 个 👍 表明这是社区高度共识的需求，插件生态精细化控制是下一步演进方向。

### 🔴 #91763 — Windows/MSIX 下 `git fsmonitor--daemon` 阻塞版本更新
- **标签**: `bug` `has-repro` `platform:windows` `area:desktop`
- **热度**: 17 评论 / 1 👍
- **摘要**: Claude Code 启动的 `git fsmonitor--daemon` 进程继承了 AppX 容器作业，在强制关闭后仍存活，导致新版本无法启动（`0x80070020`）。作者已定位根因并给出无需重启的 workaround。
- **为何重要**: 影响 Windows MSIX 安装用户的桌面端更新流程，属于阻塞性缺陷。

### 🟡 #92007 — `/model opusplan` 提示 "Unsupported model"
- **标签**: `bug` `platform:windows` `area:model`
- **热度**: 9 评论 / 13 👍
- **摘要**: Windows 11 + Claude 桌面端 Code 标签页中，`/model opusplan` 从 2026-09-04 起开始报 "Unsupported model"，此前正常使用数月。
- **为何重要**: 涉及模型切换功能的可用性，13 个 👍 表明受影响用户较多。

### 🔴 #91910 — 子 Agent Hook 载荷缺失 agent 字段
- **标签**: `bug` `has-repro` `platform:linux` `area:hooks` `area:agents`
- **热度**: 8 评论 / 1 👍
- **摘要**: `PreCompact`/`PostCompact`/`SessionStart(compact)` 在子 Agent 触发 compact 时触发，但载荷中缺少 agent 字段；`SubagentStop` 在内部 summarizer 调用时触发，但 `agent_transcript_path` 指向一个从未创建的路径。
- **为何重要**: Hook 系统是 Claude Code 可编程性的核心，载荷字段缺失会破坏基于 Hook 的自动化流程。

### 🟡 #71585 — 外部文件变更系统提示断言不可验证的原因
- **标签**: `bug` `area:core`
- **热度**: 5 评论 / 0 👍
- **摘要**: 当跟踪文件在 Read 与下一次读/编辑之间被外部修改时，系统提示声称原因是 "by the user or by a linter"，但该断言无法验证，模型会将其当作事实转述。
- **为何重要**: 属于 AI 事实性/可靠性问题，可能导致模型向用户传达错误归因。

### 🔴 #98134 — Apple Max 20× 订阅仍被识别为 Pro
- **标签**: `bug` `platform:macos` `area:auth`
- **热度**: 4 评论 / 0 👍
- **摘要**: 即使用户持有有效的 Apple Max 20× 订阅，Claude Code 仍将其视为 Pro 版本。
- **为何重要**: 影响付费用户的权益识别与功能权限。

### 🔴 #90867 — 桌面端更新重启后运行中的会话丢失
- **标签**: `bug` `has-repro` `platform:windows` `area:desktop`
- **热度**: 4 评论 / 0 👍
- **摘要**: 桌面端更新重启时，潜行式 relaunch 能恢复窗口但不能恢复会话状态。这是更大缺陷集中的第 1 个（共 8 个）子问题。
- **为何重要**: 直接影响用户的工作连续性，会话丢失意味着上下文和进度的完全丧失。

### 🟡 #97504 — 意图发给用户的消息被当作隐藏 thinking 输出
- **标签**: `bug` `platform:windows` `area:model` `platform:vscode`
- **热度**: 3 评论 / 7 👍
- **摘要**: 模型本应发给用户的消息有时被输出为 `thinking` 块而非 `text` 块，用户完全看不到。仅在包含工具调用的回复中偶发出现。
- **为何重要**: 7 个 👍 说明这是个隐蔽但令人困惑的 Bug——用户以为模型在思考，实际模型在"对用户说话但被静音"。

### 🟡 #98310 — Remote Control：归档后取消归档的会话无法重新分发
- **标签**: `bug` `has-repro` `platform:linux`
- **热度**: 2 评论 / 3 👍
- **摘要**: 长期运行的 `claude remote-control` host 托管的会话，在归档并取消归档后，Web UI 接受操作但消息卡在 "Sending…" 约 2 分钟后报 "offline"。
- **为何重要**: 影响 Remote Control / server mode 的会话恢复能力，对远程协作场景是关键缺陷。

---

## 4. 重要 PR 进展（共 5 条，全部覆盖）

### 🔧 #99540 — sec-default：组织级工具上限延伸至用户安装的插件
- **作者**: poteat | **状态**: OPEN
- **摘要**: 策略 mod（policy mod）现在将其对工具的组织级限制（如 connector 工具需审批）延伸到用户自行安装的插件上。核心机制是每个携带 `.catch` 的 hook 都在策略 mod 中执行否决逻辑。
- **意义**: 增强了组织环境下的安全策略覆盖范围，防止用户通过安装第三方插件绕过管控。

### 🔧 #20448 — 新增 web4-governance 插件（AI 治理）
- **作者**: dp-web4 | **状态**: OPEN
- **摘要**: 提出 Web4 Governance 插件，支持 T3 trust tensors、entity witnessing 和 R6 audit trails。定位为"面向 AI agent 时代的信任原生网络基础设施"。
- **意义**: 社区探索 AI 治理与可验证问责方向的插件，目前仍处于早期提案阶段。

### 🔧 #40572 — 新增全局 Hookify 规则支持
- **作者**: DeiAsPie | **状态**: OPEN
- **摘要**: 支持从全局目录 `~/.claude/` 加载 Hookify 规则，与项目级 `.claude/` 规则并存，使用户可以配置跨项目生效的规则。
- **意义**: 解决了多项目间 Hook 规则复用的痛点，是 Hook 配置体验的重要增强。

### 🔧 #1 — 创建 SECURITY.md
- **作者**: bcherny | **状态**: CLOSED
- **摘要**: 为仓库添加安全策略文件。
- **意义**: 基础性安全治理补齐。

### 🔧 #87077 — 修复 pr-review-toolkit 中所有 Agent 的无效 YAML frontmatter
- **作者**: anishsamant | **状态**: OPEN
- **摘要**: 修复了 Agent 描述中因未加引号的多行标量导致 YAML 解析错误的问题——`key: value` 在未引号标量内被解析为嵌套映射，导致 Agent 加载后 frontmatter 为空。
- **意义**: 直接影响 pr-review-toolkit 插件中所有 Agent 的可用性，属于功能性修复。

---

## 5. 功能需求趋势

从本周 Issue 分布来看，社区关注方向可归纳为以下主线：

| 方向 | 热度 | 代表性诉求 |
|------|------|-----------|
| **插件/技能精细化管理** | ⭐⭐⭐⭐⭐ | 单独禁用插件技能（#14920, 95👍）、组织策略对插件的管控（PR #99540） |
| **Hook 系统可靠性与灵活性** | ⭐⭐⭐⭐ | Hook 载荷字段完整性（#91910）、全局 Hookify 规则（PR #40572）、PreToolUse 失败处理（#99366） |
| **多平台桌面端稳定性** | ⭐⭐⭐⭐ | Windows MSIX 更新阻塞（#91763）、更新后会话丢失（#90867）、OneDrive worktree 泄漏（#99547） |
| **模型与输出行为** | ⭐⭐⭐ | `/model opusplan` 不可用（#92007）、thinking/text 块混淆（#97504）、长对话 Advisor 不可用（#67609） |
| **Remote / 多端协作** | ⭐⭐⭐ | Remote Control 会话恢复（#98310）、移动端 Dispatch 体验（#99525）、Sidebar 分组共享上下文（#99495） |
| **安全与合规** | ⭐⭐ | security-guidance 插件规则缺陷（#99552, #99553）、滥用检测误报（#99550） |

---

## 6. 开发者关注点

**高频痛点：**

1. **Hook 载荷不完整** — 子 Agent 场景下 `PreCompact`/`PostCompact`/`SessionStart` 缺少 agent 标识字段，`SubagentStop` 的 `agent_transcript_path` 指向不存在的路径。这表明 Hook 系统在 Agent 编排场景下的契约设计仍需完善。

2. **长上下文行为不一致** — Advisor 工具在 100K tokens 阈值处行为突变（#67609），暗示服务端存在硬编码限制或资源配额切换，需要排查模型上下文窗口与工具可用性的耦合关系。

3. **Windows 桌面端更新机制脆弱** — `git fsmonitor--daemon` 进程残留（#91763）、更新后会话丢失（#90867）、MSIX 容器作业继承问题（#99265）等，反映 Windows 平台的进程生命周期管理和更新流程存在系统性缺陷。

4. **插件生态控制粒度不足** — 用户无法按技能禁用插件（#14920），组织策略无法约束用户安装的插件（PR #99540），插件权限模型亟需从"整体开关"升级为"技能级策略"。

5. **安全插件规则质量** — `security-guidance` 插件的正则规则存在截断问题（#99553）和漏检（#99552），表明社区安全插件的规则编写与维护质量参差不齐。

**值得关注的正面信号：** Hookify 全局规则（PR #40572）和组织策略延伸（PR #99540）表明社区正在推动 Claude Code 从"单机会话工具"向"组织级 Agent 平台"演进，这是一个重要的架构方向。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报 | 2026-10-05**

**1. 今日速览**
今早发布三轮 rust-alpha 版本（v0.162.0-alpha.12/13/14），但无详细更新说明。社区焦点集中在 Windows 平台稳定性（远程配对、LaTeX 编译、ACL 恢复）与 Dots 会话格式异常，Rate-limit 银行重置功能获得高票支持。另有多个 CLI 启动崩溃与带宽拥塞相关的新 Issue 提交。

**2. 版本发布**
- `rust-v0.162.0-alpha.14` / `-alpha.13` / `-alpha.12` 连续推送，属预发布通道，无官方 Changelog。建议关注后续 GA 版本的 Breaking Change。

**3. 社区热点 Issues**
1. [#48774](https://github.com/openai/codex/issues/48774) Android Remote pairing 失败（53 评论，26👍）：二维码认证流程在移动端中断，影响跨平台远程控制。
2. [#48311](https://github.com/openai/codex/issues/48311) Windows 内置 LaTeX 编译器无法识别标准目录（17 评论）：最小文档也无法生成 PDF。
3. [#50157](https://github.com/openai/codex/issues/50157) / [#50698](https://github.com/openai/codex/issues/50698) Dots 读取会话报 "unsupported placement format version"：远端与本地 Work 线程格式不兼容。
4. [#49351](https://github.com/openai/codex/issues/49351) VS Code 扩展语音听写返回 403（7 评论）：macOS 正常但扩展失效，疑似权限作用域问题。
5. [#32218](https://github.com/openai/codex/issues/32218) 银行重置额度排队自动兑换（6 评论，13👍）：高票功能请求，避免额度过期浪费。
6. [#50932](https://github.com/openai/codex/issues/50932) WSL2 管理式 app-server Unix socket 删除后无法接受新会话（4 评论）：连接恢复机制缺失。
7. [#51004](https://github.com/openai/codex/issues/51004) CLI 启动在带宽饱和时停滞失败（1 评论）：影响低带宽环境可用性。
8. [#51002](https://github.com/openai/codex/issues/51002) Windows exec-server 在 deny-read ACL 校验时失败（1 评论）：沙箱初始化阻塞命令执行。
9. [#50526](https://github.com/openai/codex/issues/50526) 桌面 Guardian 实验误报废弃配置（5 评论）：clean config.toml 仍提示弃用。
10. [#48480](https://github.com/openai/codex/issues/48480) 桌面端本地任务运行时崩溃重载空白聊天（2 评论）：数据丢失风险。

**4. 重要 PR 进展**
1. [#50940](https://github.com/openai/codex/pull/50940) 安全恢复损坏的 Windows deny-read ACL 状态，避免连锁拒绝。
2. [#50803](https://github.com/openai/codex/pull/50803) 远程控制启动复用托管守护进程，提升后台可用性。
3. [#50802](https://github.com/openai/codex/pull/50802) Windows 守护进程 junction 更新被拒时回退 mklink。
4. [#50913](https://github.com/openai/codex/pull/50913) TUI 连接服务端时采用服务端模型默认值，避免客户端缓存过时。
5. [#50811](https://github.com/openai/codex/pull/50811) 尊重服务端推理摘要默认配置，修复客户端强制关闭问题。
6. [#50786](https://github.com/openai/codex/pull/50786) Command Center 分组偏好跨启动持久化。
7. [#50788](https://github.com/openai/codex/pull/50788) Vim Normal 模式下空格直接打开 slash 命令。
8. [#50964](https://github.com/openai/codex/pull/50964) / [#50943](https://github.com/openai/codex/pull/50943) 增强回合分析，跟踪工具列表变更次数。
9. [#50977](https://github.com/openai/codex/pull/50977) 隔离第三方工具延迟测试的 tracing 干扰。
10. [#50781](https://github.com/openai/codex/pull/50781) 限制 TUI MCP 启动通知仅对所属线程可见，防止跨线程审批泄露。

**5. 功能需求趋势**
- **Rate-limit 可视化与管理**：Android 缺少用量查询（#39929）、自动兑换银行重置（#32586）、统一控制面（#50998）。
- **跨设备与会话延续**：Mac 通知 iPhone（#33007）、Dots 接入现有项目（#50042）、CLI 会话命名（#46804）。
- **平台覆盖**：Linux/WSL2 支持强化（#50328）、Windows 多任务栏/桌面集成。

**6. 开发者关注点**
- **Windows 沙箱与 ACL 稳定性**：deny-read 恢复、junction 回滚、浏览器安全策略是高频痛点。
- **会话格式迁移**：placement format v1/v2 不兼容影响 Dots 与远程读取。
- **CLI 非交互模式能力缺失**：`codex exec` 无法命名、带宽拥塞启动失败，影响 CI/CD 集成。
- **托管守护进程可靠性**：Windows 文件锁与 daemon 发布重试逻辑需加强。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 - 2026-10-05

## 今日速览

Gemini CLI 官方发布 v0.64.0-nightly.20261005 版本；社区聚焦 Agent 代理行为bug修复与性能优化，多个高优先级问题引发讨论；核心依赖如 @modelcontextprotocol/sdk 完成大规模更新。

## 版本发布

**[v0.64.0-nightly.20261005.gfb972b2f8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261005.gfb972b2f8)**  
本次为每日构建版本，包含自 10 月 3 日版后所有变更。具体更新通过 [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261003.gfb972b2f8...v0.64.0-nightly.20261005.gfb972b2f8) 查看。

## 社区热点 Issues

1. ** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS is reported as GOAL success**
   - **优先级 P1**：codebase_investigator 子代理错误地将 MAX_TURNS 限制报告为成功状态，掩盖了中断情况。
   - **讨论活跃**：13 条评论，显示出对 Agent 决策逻辑透明度的关切。

2. ** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs**
   - **优先级 P1**：通用 Agent 在简单操作（如文件创建）中挂起超过一小时。
   - **影响广泛**：8 条点赞及 8 条讨论，表明这是当前最令人关注的核心稳定性问题。

3. ** [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Leverage model's bash affinity via Zero-Dependency OS Sandboxing**
   - **优先级 P2**：探索利用模型对 Bash 原生 affinity 的潜力，提升安全性与 UX。
   - **前沿布局想法**：9 条讨论，涉及 POSIX 工具链集成。

4. ** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess the impact of AST-aware file reads**
   - **功能探索**：评估 AST-aware 工具在读取边界、减少 token 噪声方面的价值。
   - **技术深度**：7 条讨论，反映出社区对代码理解效率的追求。

5. ** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills and sub-agents enough**
   - **行为模式**：Gemini 不会主动调用自定义技能或子代理，即使任务高度相关。
   - **使用体验**：7 条讨论，指出模型自主性不足的问题。

6. ** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) [BUG] Browser Agent ignores settings.json overrides**
   - **设置失效**：浏览器 Agent 完全忽略 settings.json 中的 maxTurns 等配置。
   - **配置问题**：4 条讨论，影响用户可控性。

7. ** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent fails in wayland**
   - **平台兼容**：Wayland 环境下浏览器子代理失效。
   - **系统支持**：4 条讨论，涉及 Linux 桌面生态。

8. ** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) Gemini CLI encounters 400 error with > 128 tools**
   - **工具限制**：超过 128 个可用工具时触发 400 错误。
   - **性能瓶颈**：3 条讨论，指向工具管理器的可扩展性挑战。

9. ** [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent should stop/discourage destructive behavior**
   - **安全控制**：针对复杂 Git 操作等场景，限制 model 使用破坏性命令。
   - **风险管控**：3 条讨论，聚焦 AI 行为边界。

10. ** [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) Gemini CLI gets stuck at interactive prompt creating vite app**
    - **交互卡死**：在创建 Vite 项目时卡在交互式提示。
    - **开发者体验**：2 条讨论，需新增行为评估测试。

## 重要 PR 进展

1. ** [#29629](https://github.com/google-gemini/gemini-cli/pull/29629) fix(cli): cap pending plain text height to reduce streaming flicker**
   - 修复 MarkdownDisplay 中流式文本高度限制，消除终端刷新闪烁问题。

2. ** [#29432](https://github.com/google-gemini/gemini-cli/pull/29432) fix(core): settle queued tool calls on scheduler disposal**
   - 在调度器释放时拒绝排队工具调用，取消未开始的工具，避免不必要的审批请求。

3. ** [#29429](https://github.com/google-gemini/gemini-cli/pull/29429) fix(quota): surface the limit and reset window the server reports**
   - 显式展示配额限制及重置窗口信息，提升配额管理透明度。

4. ** [#29423](https://github.com/google-gemini/gemini-cli/pull/29423) fix(cli): persist folder trust in sandbox**
   - 在 Docker/Podman 沙箱中持久化文件夹信任决策，减少重复弹窗。

5. ** [#29420](https://github.com/google-gemini/gemini-cli/pull/29420) fix(core): preserve explicit Gemini 3 Pro preview model IDs**
   - 确保明确指定的模型 ID（如 gemini-3-pro-preview）不被静默重写。

6. ** [#29527](https://github.com/google-gemini/gemini-cli/pull/29527) fix(core): ensure request contents do not end with a model turn**
   - 修复 400 错误（`Requests ending with a model turn are not supported`），处理历史记录以模型轮次结尾的情况。

7. ** [#29523](https://github.com/google-gemini/gemini-cli/pull/29523) fix(core): minimal env and capped output for external safety checkers**
   - 限制第三方安全检查器的环境变量和输出长度，增强安全隔离。

8. ** [#29522](https://github.com/google-gemini/gemini-cli/pull/29522) fix(core): keep glob tool matches inside the validated search directory**
   - 防止 glob 工具匹配超出验证目录范围的路径，提升路径访问控制。

9. ** [#29521](https://github.com/google-gemini/gemini-cli/pull/29521) fix(core): contain legacy checkpoint paths to the checkpoint directory**
   - 限制旧版检查点路径仅限于指定目录，防止路径遍历攻击。

10. ** [#29505](https://github.com/google-gemini/gemini-cli/pull/29505) fix: support rootless Podman with keep-id**
    - 支持无根 Podman，使用 `keep-id` 选项正确保留宿主机 UID/GID。

## 功能需求趋势

- **Agent 行为优化**：围绕子代理决策逻辑、MAX_TURNS 处理、Tool 使用效率展开讨论。
- **性能提升**：AST-aware 工具、Frugal Reads、终端渲染优化等关注上下文控制与响应速度。
- **跨平台兼容**：Wayland 支持、Sandbox 集成、Podman 根用户模式等平台适配需求。
- **配置灵活性**：settings.json 各类 override 机制、workspace 策略管理等配置扩展。
- **安全与可控性**：限制破坏性行为、外部工具隔离、路径访问边界等安全增强方向。

## 开发者关注点

- **卡顿与挂起**：Generalist Agent 永久挂起、 Vite 项目交互阻塞等问题频繁提现。
- **子代理灵活性**：对模型主动调用技能/代理的需求未被满足，影响工作流自动化。
- **配置一致性**：Browser Agent 忽略 settings.json，破坏期望的可配置行为。
- **工具数量瓶颈**：超过 128 个工具导致 API 失败，指向大型项目支持的限制。
- **终端体验**：流式输出闪烁、窗口大小变化时 Flicker 问题，影响日常使用舒适度。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报 (2026-10-05)**

### 1. 今日速览
今日发布 v1.0.92-4 版本，主要聚焦 `copilot config` 子命令的完善与启动性能优化；与此同时，社区 Issue 活跃度居高不下，Session 认证失效、MCP 跨平台兼容性及企业代理环境下的工具 sandbox 问题成为开发者关注的焦点。

### 2. 版本发布
**v1.0.92-4** (https://github.com/github/copilot-cli/releases/tag/v1.0.92-4)
- **Added**: 新增 `copilot config` 子命令，支持 list/read/set/remove Settings。
- **Improved**: 通过子进程解压 bundled CLI，提升首次运行速度；当同时连接多个 MCP Server 时优化启动响应；Canvas Actions 现可返回图像输出。

### 3. 社区热点 Issues (10 选)
| # | 标题 | 链接 | 重要性 | 社区反应 |
|---|------|------|--------|----------|
| 1 | [#640](https://github.com/github/copilot-cli/issues/640) [CLOSED] Invalid session ID error dominates sessions | 24 评论 | 10 👍 | 核心 Session 读取功能失效，导致所有基于 Shell 的输出读取失败，影响铁石心开发流程。 |
| 2 | [#4998](https://github.com/github/copilot-cli/issues/4998) [OPEN] macOS update/reboot breaks CLI due to stale device ID | 8 评论 | 8 👍 | 安全更新后重启即使所有 Session 失效，macOS 用户直投高优级别兼容性Bug。 |
| 3 | [#5008](https://github.com/github/copilot-cli/issues/5008) [OPEN] Startup auth race: "Failed to read model provider attribution" | 7 评论 | 5 👍 | 启动时频繁弹出认证错误，实际签名正常，属于竞态条件，降低了新Session体验。 |
| 4 | [#4946](https://github.com/github/copilot-cli/issues/4946) [OPEN] HTTP 400 `content[].thinking` after shell completion notification | 5 评论 | 1 👍 | 背景 Shell 完成通知触发错误的 thinking token，导致后续指令解析异常。 |
| 5 | [#4971](https://github.com/github/copilot-cli/issues/4971) [OPEN] Hourly Authorization error: credentials expired/invalid | 3 评论 | 0 👍 | 小时即失效，/login 临时有效但未根治，反复打断长时间编码会话。 |
| 6 | [#4966](https://github.com/github/copilot-cli/issues/4966) [CLOSED] 1.0.88 regression: joinSession() stalls extension startup | 2 评论 | 0 👍 | Extension 在启动时卡住 30s，阻塞 joinSession 响应，影响 SDK 生态铺设。 |
| 7 | [#4969](https://github.com/github/copilot-cli/issues/4969) [OPEN] Plugin marketplace add fails if any description >1024 chars | 1 评论 | 0 👍 | Zod 严格校验导致整个 marketplace 失败，插件上传门槛过高，阻碍第三方生态扩张。 |
| 8 | [#5051](https://github.com/github/copilot-cli/issues/5051) [OPEN] Timeout after ~20min with external provider (LM Studio/Bionic) | 1 评论 | 0 👍 | 外部 Provider 下 Prompt 超时循环重发，长时间任务不可靠。 |
| 9 | [#5050](https://github.com/github/copilot-cli/issues/5050) [OPEN] /mcp <server-name> fails due to case sensitive matching | 0 评论 | 0 👍 | `/mcp` 指令对大小写敏感，`MyServer` 与 `myserver` 均报错，体验不符合预期。 |
| 10 | [#5052](https://github.com/github/copilot-cli/issues/5052) [OPEN] Linux Ubuntu 26.04 tool sandbox preflight fails though bubblewrap test succeeds | 0 评论 | 0 👍 | sandbox 初始化因 namespace 权限被拒绝，工具调用在 Ubuntu 26.04 上不可用。 |

### 4. 重要 PR 进展
- 过去24小时内无新合并 Pull Request。项目当前精力集中于 Issue 修复与版本迭代，PR 审查节奏保持正常中水平。

### 5. 功能需求趋势 (从 24 条 Issues 提炼)
- **Session 与 Auth 持久化**：Session ID 失效、credential 小时过期、启动时认证竞态是社区最焦虑的持续痛点。
- **MCP 与跨平台兼容性**：macOS

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报（2026‑10‑05）**  
*技术分析师视角，基于 anomalyco/opencode 最近 24 h 的 GitHub 活动*

---

## 今日速览  
- 今日无新版本发布，社区活动集中在 **Bug 修复与功能细节**（如压缩/模型选择、文件拖拽、配额异常等）。  
- 高评论的 Issue 主要围绕 **模型兼容性**、**会话持久性** 与 **跨平台 UI 体验**（Windows、macOS、WSL/NixOS）。  
- PR 方面，开发者正在推进 **TUI/GUI 统一交互**（会话导航、二维码配对、侧边栏信息展示）以及 **核心工具链的细微修复**（工具选择、编辑冲突、配对链跨源等）。

---

## 版本发布  
> **今日无新版本发布**（过去 24 h内未有 Release）。

---

## 社区热点 Issues（精选 10 条）

| # | Issue | 评论 | 关注点 | 为什么重要 |
|---|-------|------|--------|------------|
| [#44094](https://github.com/anomalyco/opencode/issues/44094) | core: compaction ignores `agents.compaction.model` since “shared model request” refactor (v2 beta) | 13 | 模型选择、压缩功能 | 在 v2 beta 中压缩总是使用会话当前模型，忽略用户显式设定，可能导致不期望的模型调用与成本增加。 |
| [#50843](https://github.com/anomalyco/opencode/issues/50843) | GitLab Duo workflow fails on self‑managed instances | 12 | GitLab 集成、OAuth 自动刷新 | 自建 GitLab 实例的 Duo 工作流因缺少工作目录/命名空间上下文及 token 刷新失效而失败，影响企业用户的 CI/CD 流程。 |
| [#26846](https://github.com/anomalyco/opencode/issues/26846) | Opencode segfaults in NixOS+WSL | 10 | 跨平台稳定性、内存崩溃 | 在 NixOS 环境下的 WSL 出现段错误，阻碍开发者在该常见混合环境中使用 OpenCode。 |
| [#40483](https://github.com/anomalyco/opencode/issues/40483) | DeepSeek v4 Flash Free (New) returns blank response in Desktop App on Windows 11 | 8 | 模型响应、Windows 桌面客户端 | 模型返回空白导致 UI 假死，影响免费模型的可用性，尤其对依赖该模型进行快速原型的用户。 |
| [#40485](https://github.com/anomalyco/opencode/issues/40485) | deepseek‑v4‑flash via opencode‑go returns 403 / hangs, while deepseek‑v4‑pro and minimax‑m3 work on the same key | 7 | API 密钥、模型特定错误 | 同一密钥下只有特定模型遇到 403/挂起，提示可能是模型路由或权限配置 bug。 |
| [#28141](https://github.com/anomalyco/opencode/issues/28141) | Big Pickle (big‑pickle) model returns AI_APICallError – was working before | 6 | 模型可用性、回归 | 曾经可用的免费模型突然失效，提醒社区关注模型端点的健康监控与自动降级机制。 |
| [#34375](https://github.com/anomalyco/opencode/issues/34375) | Latest OpenCode doesnt open or respond | 6 | 启动失败、黑屏 | 终端启动后直接黑屏无响应，影响所有平台的首次使用体验。 |
| [#45558](https://github.com/anomalyco/opencode/issues/45558) | attachments: dragging file or pasting file path into input fails session setup (Prompt.Base64 500 on /prompt) | 5 | 文件附件、会话初始化 | 拖放或粘贴文件路径导致后端 500，阻碍常见的「快速上传代码片段」工作流。 |
| [#52623](https://github.com/anomalyco/opencode/issues/52623) | 使用额度异常（配额显示提前耗尽） | 5 | 配额计费、账户误报 | 用户在未使用的情况下被提示额度已用完，影响信任度且需要账务后台的及时校对。 |
| [#44080](https://github.com/anomalyco/opencode/issues/44080) | compact silently lands reasoning‑only (empty‑body) summaries, causing irrecoverable context loss | 4 | 压缩摘要、上下文丢失 | 当模型仅输出 reasoning 部分时，压缩会产生空体摘要并覆盖原始历史，导致不可恢复的信息丢失。 |

> **社区反应**：上述 Issue 均获得开发者的确认或已有补丁在审查中（如 #44094 已有讨论补丁方案），说明社区正在积极围绕模型选项、跨平台稳定性及付费/免费额度透明度展开讨论。

---

## 重要 PR 进展（精选 10 条）

| # | PR | 类别 | 主要内容 | 为什么重要 |
|---|----|------|----------|------------|
| [#53267](https://github.com/anomalyco/opencode/pull/53267) | feat(app): polish mobile session navigation and drawers | 功能 | 移动端会话切换器改造：底部抽屉集中 Files、Terminal、Usage、Session 详情；优化图标与 tab 布局。 | 提升移动设备上的多任务切换体验，符合社区对 “随时随地使用” 的诉求。 |
| [#53265](https://github.com/anomalyco/opencode/pull/53265) | fix(cli): indent every row of the pairing QR code on Windows | 修复 | Windows 上 QR 码打印时仅第一行缩进导致扫码失败，现在统一缩进所有行。 | 解决 Windows 用户配对设备时的常见扫码问题，提升配对成功率。 |
| [#53266](https://github.com/anomalyco/opencode/pull/53266) | fix(core): disable tool selection in compaction summaries | 修复 | 压缩请求时强制 `tool choice: none`，防止工具被误带入摘要生成。 | 直接对应 #44094 中提到的模型选择忽略问题，确保摘要仅基于文本。 |
| [#52643](https://github.com/anomalyco/opencode/pull/52643) | feat(ai): add native Vercel AI Gateway language models | 功能 | 将现有评估用的 Gateway 包装扩展为完整的 Messages / Responses / Chat Completions API，默认模型族映射。 | 为开箱即用的 Vercel AI Gateway 提供原生支持，降低自定义提供商的接入门槛。 |
| [#53076](https://github.com/anomalyco/opencode/pull/53076) | fix(app): match TUI inbox, steer, queue, and revert behavior | 修复 | GUI 与 TUI 在待收件箱、指令队列、撤销/重做及压缩行为上保持一致。 | 消除两种前端的行为差异，提升用户在不同客户端间的预期一致性。 |
| [#53257](https://github.com/anomalyco/opencode/pull/53257) | fix(app): handle one‑time pairing links across the GUI | 修复 | 扩展一次性 `/auth/connect/<code>` 链接的处理范围：Add server 桌面、服务器到期重新兑换等。 | 配对流程全面支持一次性链接，减少因过期或手动输入导致的失败。 |
| [#53264](https://github.com/anomalyco/opencode/pull/53264) | feat(tui): color sidebar context usage and cost by thresholds | 功能 | 侧边栏根据使用量/费用阈值上下文块着色（例如超额红色）。 | 直观展示资源消耗，帮助用户及时发现额度异常（如 #52623 所示）。 |
| [#53261](https://github.com/anomalyco/opencode/pull/53261) | feat(tui): per‑status MCP counts in the sidebar heading | 功能 | 在侧边栏 MCP 标题后显示各状态（活跃/闲置/错误）的数量摘要。 | 提升对多 MCP 实例的监控可见性，符合社区对 “实时资源仪表盘” 的需求。 |
| [#53205](https://github.com/anomalyco/opencode/pull/53205) | feat(tui): add compact sidebar context display | 功能 | 新增 `sidebar.context` 配置项：`expanded`（默认 4 行）或 `compact`（单行）。 | 为高频上下文查看场景提供更紧凑的布局选择，提升屏幕利用率。 |
| [#53080](https://github.com/anomalyco/opencode/pull/53080) | fix(core): preserve OpenAI OAuth model context limits | 修复 | 移除对 ChatGPT OAuth 连接的全局 400K/272K 上下文覆盖，恢复模型特有的限制。 | 防因错误上下文限制导致的截断或超额错误，增强与官方 OpenAI 的兼容性。 |

> **趋势观察**：PR 集中在 **跨平台一致性（TUI ↔ GUI）**、**配额/资源可视化** 以及 **模型提供商原生支持**（Vercel AI Gateway、OpenAI OAuth）上，说明社区正在把精力从核心功能稳定转向 **使用体验与生态集成**。

---

## 功能需求趋势（从全部 Issues 中提炼）

| 需求方向 | 关键词/典型 Issue | 出现频次 | 解决方向 |
|----------|-------------------|----------|----------|
| **模型兼容性 & 配额透明度** | DeepSeek 系列空响应/403、配额提前耗尽、模型选择被忽略 | 6 项（#44094、#40483、#40485、#52623、#44080、#28141） | 提供模型健康检测、自动降级、更细粒度的使用统计与警报。 |
| **跨平台稳定性** | WSL/NixOS 段错误、Windows 桌面黑屏、macOS 高内存 | 3 项（#26846、#34375、#40779） | 加强 CI 中的交叉编译测试、引入内存泄漏检测工具。 |
| **IDE/编辑器深度集成** | VS Code 扩展不感知选项、GPU/本地模型调度、ACP 客户端不显示计划 | 3 项（#40540、#40745、#34004） | 完善 Language Server Protocol / ACP 实现，提供实时上下文共享。 |
| **UI/UX 细节改进** | 文件拖拽失效、二维码配对、侧边栏信息展示、移动端导航 | 5 项（#45558、#53265、#53264、#53261、#53267） | 持续打磨交互细节，使常用操作「零摩擦」。 |
| **自定义提供商与网关支持** | 自定义 OpenAI‑compatible 模型、Vercel AI Gateway、OmniRoute、Computer‑Use | 4 项（#53202、#52643、#40506、#40782） | 抽象统一的提供商层，降低接入新模型的成本。 |

---

## 开发者关注点（痛点 & 高频需求）

1. **模型选项不被尊重** – 压缩、对话等场景仍然忽略用户在 `agents.compaction.model` 或其他显式配置，导致非预期模型调用与费用。  
2. **配额计费不透明** – 用户反复出现“额度提前用完”假阳性，需要后端计费窗口更精准、前端实时警告。  
3. **跨平台启动崩溃** – 特别是 WSL+NixOS、Windows 桌面客户端，段错误或无响应直接影响日常使用。  
4. **会话历史不可恢复的丢失** – 压缩产生空体摘要时会覆盖原始历史，缺少回退或确认机制。  
5. **资源可视化需求强烈** – 社区普遍希望在侧边栏或状态栏看到 Token 使用、费用、MCP 状态等实时指标，以主动控制成本。  
6. **自定义提供商的“一键接入”** – 尽管已有后端支撑（如 Issue #34004），但在 Desktop/TUI 中仍缺少向导式配置 UI，导致手写 JSON 配置错误率高。  

> **建议**：后续迭代可在 **模型选项校验层**（统一在请求入口检测并强制使用用户指定的模型）与 **计费透明度模块**（实时窗口 + 阈值预警）上投入；同时在 **CI 中加入跨平台沙箱（WSL、NixOS、macOS）**，并在 **TUI/GUI** 中统一资源仪

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: Technical analyst focused on AI development tools
   - Source: GitHub data from `github.com/badlogic/pi-mono`
   - Date: 2026-10-05 (the report date)
   - Output: A Chinese daily report (Pi community dynamic report) with specific sections
   - Required sections: 
     1. 今日速览 (Today's Overview) - 2-3 sentences summarizing most important dynamics
     2. 版本发布 (Version Release) - if new version, summarize; if not, omit
     3. 社区热点 Issues (Community Hotspot Issues) - pick 10 most noteworthy issues, explain importance and community reaction
     4. 重要 PR 进展 (Important PR Progress) - pick 10 important PRs, explain function/fix content
     5. 功能需求趋势 (Feature Demand Trends) - extract from all issues the community's most concerned feature directions
     6. 开发者关注点 (Developer Concerns) - summarize pain points or high-frequency needs from developer feedback
   - Language: Concise professional, suitable for technical developers
   - Each item must have GitHub link

2.  **Analyze the Provided Data:**
   - Latest Releases (past 24h): None
   - Latest Issues (past 24h, top 30 by comments): Listed with #, title, author, creation, update, comments, likes, link, summary
   - Latest PRs (past 24h, 4 conditions): Listed with #, title, author, creation, update, comments, likes, link, summary
   - Date filter: The report is for 2026-10-05. The data shows updates on 2026-10-05, some on 2026-10-04, etc. I need to focus on what's relevant or updated around that date, but the "past 24h" implies from 2026-10-04 to 2026-10-05. I'll treat the data as of 2026-10-05.

   Let's categorize and select:

   **Issues selection (need 10):**
   I need to pick 10 that are most noteworthy. Look at comments, likes, relevance, bug severity, feature requests.
   Let's list all 30 with key metadata:
   #6665: 14 comments, 6 likes. TUI core usage, Intl.Segmenter, Markdown render. High impact performance bug.
   #8643: 10 comments, 3 likes. Bedrock OpenAI images in toolResult.content. Important for multimodal.
   #10314: 9 comments, 5 likes. Home/End defaults in fullscreen. UX/keyboard navigation.
   #8834: 8 comments, 1 closed. pi.namespace opt-in. Package naming.
   #8301: 7 comments, 2 bug. Can't interleave compaction with prompts.
   #9134: 6 comments, 0 bug. Anthropic adapter drops root anyOf. Schema issue.
   #10330: 6 comments, 0 bug. Auto-compaction doesn't start in CLI mode.
   #9946: 6 comments, 0 bug. CMD mode ignores outputPad.
   #9887: 6 comments, 0 bug. read tool call rendering breaks with string line numbers.
   #10377: 4 comments, 2 closed. OpenAI subscription refresh fails.
   #10287: 4 comments, 1 bug. getContextUsage() overestimates after retry error.
   #10439: 3 closed. codemode fails after pnpm global update.
   #9845: 3 closed. openai-codex-responses ignores maxTokens.
   #10416: 3 closed. Support latest MCP version.
   #10291: 3 closed. MCP store auth in keychain.
   #10139: 3 closed. Unvalidated toolCall.name poisons Responses API history.
   #10467: 2 closed. Gemini 3 replay missing thought_signature.
   #10466: 2 closed. Allow hosts to set codemode wasm/worker paths.
   #10379: 2 closed. Bedrock five-minute stall no retry.
   #10455: 2 open. durable: nested tool execution from ToolExecutionApi.
   #10457: 2 closed. Shared structured diagnostic logging API.
   #7946: 2 closed. Show submitted messages immediately without waiting.
   #10414: 2 closed. [Windows] Alt-screen viewport jumps, keyboard stops.
   #9194: 2 closed. RPC no way to clear queued steering/followUp.
   #10454: 2 closed. Extension API display-only transforms over RPC.
   #9439: 2 closed. Allow TUI overlays to cover terminal images.
   #10469: 1 closed. Allow themes to set assistant message background.
   #10468: 1 closed. openai-completions: add model-level support for omitting temperature on reasoning models.
   #10465: 1 closed. Allow custom compaction results opt into native file-inventory inheritance.

   Now, pick 10 that are most "noteworthy" based on comments, recency, impact, and community relevance. I'll aim for a mix of bugs, features, and cross-cutting concerns. I'll avoid closed ones unless they're particularly indicative of trends, but the prompt says "community hotspot issues" - typically open ones, but closed ones with activity can show trends. I'll include mostly open ones, maybe some recently closed that reveal patterns. The prompt says "挑选 10 个最值得关注的 Issue，说明为什么重要、社区反应如何". I'll pick 10 open or recently updated issues that have engagement.

   Let's select:
   1. #6665 - High comments (14), core performance, Intl.Segmenter caching. Very relevant to TUI performance.
   2. #8643 - Bedrock OpenAI images in tool results. Multimodal support important.
   3. #10314 - Home/End defaults in fullscreen. UX direction.
   4. #8301 - Compaction interleaving bug. Core agent workflow.
   5. #9134 - Anthropic adapter schema dropping. Model adapter compatibility.
   6. #10330 - Auto-compaction CLI mode failure. CLI workflow.
   7. #9946 - CMD mode outputPad ignored. Setting consistency.
   8. #9887 - read tool call rendering with string line numbers. Tool rendering bug.
   9. #10287 - getContextUsage() overestimation after retry. Metrics reliability.
   10. #10455 - durable: nested tool execution from ToolExecutionApi. New capability.

   These have varying comments but are all relevant and actively discussed or recently updated.

   **PRs selection (need 10):**
   The data shows only 4 PRs in "past 24h", but the prompt says "重要 PR 进展 - 挑选 10 个重要的 PR". The data might have more PRs overall, but only 4 are listed under "past 24h". I need to check the list: 
   #10440 - CLOSED fix coding-agent QuickJS wasm path resolution. Important bug fix.
   #10463 - CLOSED fix codemode MCP test image label.
   #2597 - CLOSED docs(coding-agent): document resources_discover event. Old but merged recently? Created 2026-03-25, updated 2026-10-04. Might be included because updated recently.
   #10448 - CLOSED pr for sync. 
   Only 4 are listed. The prompt says "past 24 hours内更新 (共 4 条)". So there are only 4 PRs updated in the past 24h. I'll select these 4, and maybe note that only 4 were updated, or I could look at the data more carefully. The section says "重要 PR 进展 - 挑选 10 个重要的 PR，说明功能或修复内容". It might expect me to pick from the available, or perhaps the dataset has more but only 4 shown. I'll work with the 4 provided, and maybe mention the most significant ones, or pad with "no new significant PRs beyond these 4" but the prompt says "challenge 10". I'll re-read: "4. 重要 PR 进展 - 挑选 10 个重要的 PR，说明功能或修复内容". It might be a rigid template, but I need to adapt to the data. I'll select the 4 that are listed, and for the remaining 6, I could either skip or note that only 4 were updated in the period, but I must output 10 items? The prompt says "每个条目附上 GitHub 链接". I'll output exactly the PRs that have data, maybe group or state count. To be safe, I'll list the 4 PRs, and add a note that only 4 were updated in the past 24h, but I'll format as 10 items with placeholders or just the 4 actual ones. Actually, looking at the data, PR #2597 is from March but updated Oct 4, so it counts. I'll pick the 4 that are clearly marked as past 24h updates, and maybe include some that were updated recently but not necessarily in the 24h window? The prompt says "过去24小时内更新（共 4 条）". So there are only 4. I'll list those 4, and for the remaining 6, I'll state "本周期无新增" or similar, but keep the format. However, the user might expect exactly 10. I'll read carefully: "4. 重要 PR 进展 - 挑选 10 个重要的 PR，说明功能或修复内容". It's part of the output format request. I'll interpret it as: from the data, pick important PRs. Since only 4 are available, I'll list those 4 and add 6 with "无" or "无合并/更新", but provide links. Or maybe I should look at all PRs in the issue list? No, the data only gives 4. I'll output 4 actual PR analyses, and note that only 4 were updated in the period. To comply with "10 items", I might repeat structure but indicate none. Better: I'll list the 4, and for the other 6, I'll put a brief note like "无本期更新相关PR" with link to PR page. But the prompt says "每个条目附上 GitHub 链接". I'll just provide the 4, and if needed, mention the count. I think it's safer to output exactly the PRs that exist, and maybe the user will accept 4 instead of 10, or I'll pad with "无" entries. Let's see typical AI behavior: they usually adapt to data. I'll output 5-6 real ones, and note the rest. Actually, I'll just list the 4 that are there, and for the remaining 6, I'll add them as "无新增" but still provide a link to the PR search or the main repo, or just state "无". To be precise, I'll format PR section with the 4 actual, and add a note. But the user said "Please generate... with the following parts". I'll comply structurally: I'll list 10 items, but for PRs, I'll put the 4 real ones, and for 5-10, I'll put something like "无本周期新增重要PR" with the section header link. However, that might violate "each item with GitHub link". I'll instead list the 4, and maybe the system has more PRs not shown? Wait, the data says "## 最新 Pull Requests（过去24小时内更新）（共 4 条）". So definitely only 4. I'll select the top 4 important ones, and explain that only 4 were updated in the past 24h, but I'll still format as 10 by including some that are relevant from the broader dataset? No, I can't invent. I'll output the 4 with details, and for the remaining 6, I'll write "无" but provide the GitHub search link or repo link. Actually, I'll just list the 4, and add a 5th saying "其余本周期无更新PR", etc. To be safe, I'll output exactly 10 items in the section, but mark items 5-10 as "无近期更新" with a link to the PR list page. That might work.

   Let's reconsider: The prompt is a template request. The user wants a report generated based on the data. I should faithfully use the data. I'll make the PR section have exactly the 4 PRs, and maybe the "10" is a max or guideline. I'll output 4 PR analyses, and if the format strictly requires 10, I'll add placeholders. I think the user will prefer accuracy over forced quantity. I'll output 4 PR items, and note "仅过去24h内有4条PR合并/更新，其余请参考仓库完整历史". But the prompt says "挑选 10 个重要的 PR". I'll interpret "重要" from the 4, and maybe include some that were updated on 2026-10-04/05 but not labeled "past 24h"? Looking at the timestamps: #10440 updated 2026-10-04, #10463 updated 2026-10-04, #2597 updated 2026-10-04, #10448 updated 2026-10-04. All are Oct 4. The report date is Oct 5. So these 4 are the ones. I'll just use these 4.

   **功能需求趋势 (Feature Demand Trends):**
   Extract from all issues. Themes:
   - TUI performance/rendering optimization (caching, Intl.Segmenter, core usage) - #6665
   - Multimodal/visual support: Bedrock images, OpenAI tool results, Codex maxTokens - #8643, #9845
   - CLI workflow & compaction: auto-compaction in CLI, interleaving compaction with prompts - #10330, #8301
   - Settings consistency: outputPad, UI padding - #9946
   - Tool execution & nested calls: durable nested tool execution, ToolExecutionApi - #10455
   - Model adapter compatibility: Anthropic schema, Gemini thought_signature, OpenAI temperature omission - #9134, #10467, #10468
   - MCP & namespace: pi.namespace, keychain auth, MCP version support - #8834, #10291, #10416
   - Cross-platform/Windows bugs: alt-screen viewport jumps - #10414
   - Diagnostic/logging API: shared structured logging - #10457
   - Theme/customization: assistant background, fullscreen selection styling - #10469, #9715
   - Context metrics accuracy: getContextUsage overestimation - #10287

   I'll synthesize top trends: Performance & rendering optimization (TUI core usage, markdown rebuild), CLI & agent workflow (compaction, auto-compaction), Model adapter compatibility & tool execution (nested tools, schema handling), and Developer experience (MCP, namespace, logging).

   **开发者关注点 (Developer Concerns):**
   - Performance degradation in long sessions (TUI core pegging)
   - Inconsistent setting application (outputPad, context usage overestimation)
   - Model provider compatibility issues (Bedrock, Anthropic, Gemini, OpenAI reasoning models)
   - MCP auth and namespace management
   - Cross-platform stability (Windows alt-screen, pnpm global updates breaking codemode)
   - Tool execution and nested call support
   - Debugging and diagnostics visibility

   Now, structure the report in Chinese as requested. I'll make sure each section has the required parts, links are GitHub issue/PR links. I'll keep it concise, professional.

   Let outline:
   1. 今日速览: 2-3 sentences. Focus on the core TUI performance issue (#6665) and the flurry of model adapter/ compatibility fixes.
   2. 版本发布: None.
   3. 社区热点 Issues: 10 items. I'll pick the 10 I selected, with explanation and link.
   4. 重要 PR 进展: I'll list the 4 PRs, and maybe add 6 as "无更新" but I need to decide. Let's check the prompt again: "4. 重要 PR 进展 - 挑选 10 个重要的 PR，说明功能或修复内容". It might be a fixed template expectation. I'll output 10 items, but for items 5-10, I'll write something like "无本周期新增" and provide a link to the PR list, or perhaps include PRs that are important but not in the 24h window? The data shows PR #2597 from March, updated Oct 4, which is relevant. I could include other PRs that are merged/closed but have impact. However, the "past 24h" filter is strict. I'll output the 4 that are explicitly in the past

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-05

## 今日速览
- **运行时主线推进**：托管 Agent 新增 H3 后台 Shell/Monitor 运行时（#13265），并引入 Kubernetes CSI 实验性运行时与持久化 ACK（#

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

## **DeepSeek‑TUI 社区动态日报**  *(2026‑10‑05)*

---

### 1️⃣  今日速览
- 本周工程核心**恢复能力**问题集中爆发，涉及**进程重启后 turn 状态恢复**、**检查点原子提交**和**human 等待持久化**等关键流程。
- 会话资源压力** compaction 行为**引发可靠性担忧：紧急紧缩可能意外中断“保存会话”工作流，.journal 文件内存无界增长。
- MCP 秘密供应模型受关注：建议将 host‑owned secret（keyring 存储）作用域限定于当前 runtime，避免过程环境泄露风险。

---

### 2️⃣  版本发布
> **无**（24 h 内无新版本发布）。

---

### 3️⃣  社区热点 Issues

| # | 标题 | 重要性 | 社区反馈 |
|---|-------|--------|-----------|
| #5637 | **Design: 将 MCP 秘密供应作用域限定于所属 runtime** | 解决了跨线程可见环境变量泄漏及全局秘密生命周期问题。直接影响安全性关键路径。 | 3 条评论，暂无 👍，需进一步设计评审。 |
| #6721 | **紧急紧缩对“保存会话”任务的影响** | 突显了当前 compaction 策略对用户任务的副作用；可能中断长时间运行的工作流。 | 2 条评论，社区正讨论回滚/缓解方案。 |
| #6842 | **会话日志无界增长：compaction 清理活跃消息但保留所有历史版本** | 内存泄漏隐患，长期运行实例将不可控地消耗 RAM。 | 0 条评论，表明严重性已获关注。 |
| #6838 | **从持久意图和结果中恢复模型与工具步骤** | 工程断电后重建对话连贯性的核心能力，关乎用户体验。 | 0 条评论，作者附带完整源代码审计。 |
| #6836 | **Engine 可恢复性：进程重启后恢复已接受工作** | 确定 turn 执行状态能否跨进程重启保持一致。 | 0 条评论，系近期引擎耐久性系列议题之一。 |
| #6841 | **Code Mode：保留子目录中的许可构成并统一文档** | 解决配置继承及文档一致性问题，影响插件市场用户。 | 0 条评论，待消费者刷新。 |
| #6840 | **Engine：持久化子执行完成通知及所有者确认** | 保障子任务交付保证与 ACK 持久化，影响多方协作流程。 | 0 条评论，配套单元测试待增。 |
| #6839 | **Engine：使用显式重启策略持久化 human 等待及截止时间** | 当前实现中 human‑wait 将丢失重启后状态，需强一致性恢复。 | 0 条评论，涉及动态工具协调机制。 |
| #6837 | **Engine：原子提交执行检查点、transcript 及结果** | 确保检查点写入的一致性，避免崩溃后数据损坏。 | 0 条评论，与 turn admission 紧密相关。 |
| #6303 | **三大渠道（官网、市场插件、GitHub）统一安装入口** | 消除用户安装路径差异，提升安装成功率及用户满意度。 | 0 条评论，长期积累的用户痛点。 |

*(所有 Issue 链接均指向 codewhale-hq/Codewhale 仓库)*

---

### 4️⃣  重要 PR 进展

| # | 标题 | 主要变更 | 影响 |
|---|-------|------------|------|
| #6815 | **0.10.1 集成：Engine 收敛、TypeScript 模块及 Ratatui UX 改进** | 集中式 Rust Engine（执行、权限、事件、会话、存储、计费），审查后复用权限、取消、检查点、父级交付及结算逻辑。 | 提升整个客户端栈的一致性与健壮性。 |
| #6835 | **docs(web)：新增 VS Code GUI 社区版在“可运行环境”列表** | 更新官网文档，列出独立的 VS Code GUI 插件链接（社区维护）。 | 扩大了 VS Code 用户的发现范围。 |
| #6833 | **[贡献流程] 修复 TUI 帮助摘要为英文（12 包）** | 按英文规则重新排版 14 条长摘要，统一 `/help` 标题语。 | 改善国际化文档一致性。 |
| #6834 | **[贡献流程] 修复 TUI：Windows 平台保留 UTF‑8 编码的 Python 输出** | 通过 `PYTHONIOENCODING=utf‑8` 强制子进程 IO 编码，避免 GBK 导致的中文乱码。 | 提升 Windows 用户执行脚本的可靠性。 |
| #6832 | **重构命令：采用可移植配置策略和状态形态（FEAT‑027）** | 实现 `/permissions` 和 `/status` 的独立端口化，共享通用命令 Shape 架构。 | 深化了命令架构的模块化。 |

*(因近期开发周期，本轮仅有 5 个 PR 近期更新，其余预备 PR 则按需补充。)*

---

### 5️⃣  功能需求趋势（从 Issues 中提炼）

| 趋势 | 核心关注点 | 体现 Issues |
|-------|--------------|--------------|
| **引擎耐久性与恢复能力** | 进程重启后 turn 状态恢复、检查点原子性、human 等待及子任务交付持久化。 | #6836、#6838、#6839、#6840、#6837 |
| **会话资源管理** | 会话日志内存无界增长、compaction 策略对“保存会话”的影响。 | #6842、#6721 |
| **秘密与安全供应** | MCP 秘密作用域隔离，避免进程内泄漏。 | #5637 |
| **多端安装体验** | 官网、市场插件及 GitHub 三端统一安装流程。 | #6303 |
| **国际化与平台兼容性** | 帮助文档英文统一、Windows 平台 UTF‑8 编码保持。 | #6833、#6834 |

---

### 6️⃣  开发者关注点

1. **会话内存压力** – 用户担忧长期运行会造成 RAM 不可控增长，compaction 行为可能意外中断重要任务（如“保存会话”）。
2. **跨平台 Python 编码问题** – Windows 用户反馈中文输出编码为 GBK，导致脚本执行后输出乱码。
3. **秘密供应安全** – 社区关注 host‑owned secret 的作用域设计，建议限定于 runtime 以提升安全性。
4. **安装路径差异** – 用户体验反映官网、VS Code 市场及 GitHub 三端安装流程不一致，导致额外配置负担。
5. **文档与帮助一致性** – 国际化用户希望帮助摘要和 UI 文案能保持英文/中文版本的一致性。

---

*本日报根据过去 24 小时内的 GitHub 活动（codewhale‑hq/Codewhale 仓库）汇总得出。更多动态请持续关注仓库动态。*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*