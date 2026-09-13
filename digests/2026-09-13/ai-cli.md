# AI CLI 工具社区动态日报 2026-09-13

> 生成时间: 2026-09-13 02:09 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-09-13）

> 数据覆盖范围：Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI（Claude Code 与 OpenAI Codex 摘要生成失败，未纳入）。

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**高速迭代与深度分化并存**的阶段。头部工具每日密集发布 nightly 版本与 PR，社区议题从基础可用性（崩溃修复、内存泄漏）向高阶能力（Agent 安全控制、容器化执行、跨端一致性）快速迁移。安全性、Agent 行为可控性、子代理生命周期管理成为几乎所有工具的共同攻坚方向。与此同时，订阅制 OAuth 登录、插件市场生态、MCP 协议合规等商业化与标准化议题也在加速推进。整体来看，该生态正从"能跑通"向"跑得稳、控得住、管得好"演进。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | Release 情况 | 社区热度峰值 |
|------|:-----------:|:--------:|:------------:|-------------|
| **Gemini CLI** | 10 | 10（7 merged / 3 pending） | 1 nightly（v0.61.0） | #23114 prompt injection（13评）；#21409 agent hangs（8评/8👍） |
| **GitHub Copilot CLI** | ~8 | 3（全 CI/供应链） | 无 | #2147 CAPI 400 error（7评/1👍）；#4725 heap OOM（4评/1👍） |
| **Kimi Code CLI** | 3（1 open / 2 closed） | 0 | 无 | #2370 Steer 按钮增强（2👍） |
| **OpenCode** | 10 | 10 | 无 | **#4283 clipboard 故障（131评/123👍）**，社区最活跃单议题 |
| **Pi** | 10 | 9 | 无 | **#4945 流式输出卡死（78评/33👍）** |
| **Qwen Code** | 10 | 10 | 1 nightly（v0.23.3） | #11500 React #185 TUI 崩溃（10评/1👍）；#11724 内存 7GB（3评） |
| **DeepSeek TUI** | 10 | 10 | 无 | #6025 DeepSeek 停服 V4 Pro（5评）；#6112 状态栏增强（2评） |

**关键发现**：
- **OpenCode** 单议题评论数远超其他工具（131 条），clipboard 故障已成为跨平台公共痛点；
- **Pi** 的 #4945（78 评/33👍）显示流式输出阻塞是用户最高频的挫败点；
- **Kimi Code CLI** 整体活跃度最低，仅 3 条 Issue、无 PR，可能处于维护期；
- **Gemini CLI、Qwen Code** 均实现每日 nightly 发布，属于高频迭代梯队。

---

## 3. 共同关注的功能方向

### 3.1 Agent 稳定性与行为控制
几乎所有工具都有子代理（Subagent）相关的 Bug 或增强需求。
- **Gemini CLI**：#21409 Generalist Agent 挂起、#22323 Subagent 达到 MAX_TURNS 后误报成功、#21968 技能/子代理调用不足；
- **Copilot CLI**：#4829 子代理大量工具调用导致 prompt caching 失效与 token 消耗异常；
- **Qwen Code**：#11500、#11732 React #185 导致 TUI 崩溃（后台 Agent 完成时触发）；
- **DeepSeek TUI**：#6046 子代理恢复丢失 Profile Pin、#6117 子代理忽略 Profile 配置。

### 3.2 安全性与权限控制
- **Gemini CLI**：#23114 prompt-injection 防御、#25722 计划模式下危险 Git 操作、#26701 未授权持续执行、#26525 Auto Memory 敏感信息脱敏；
- **Copilot CLI**：#4830 `/remove-dir` 撤销目录访问权限（最小权限原则）；
- **Qwen Code**：#11666 遥测隐私泄露（关闭日志仍上传 API 请求）；
- **OpenCode**：#29214（Gemini 相关）沙箱文件系统隔离强化。

### 3.3 内存与性能优化
- **Copilot CLI**：#4725 Linux 下 Node.js heap 接近 4GB OOM；
- **Qwen Code**：#11724 长时间运行后内存达 7GB；
- **OpenCode**：#31084 SSE 无界增长、#47258 后台切换后流中断；
- **DeepSeek TUI**：#6016 大日志导出崩溃。

### 3.4 跨平台兼容性与外部工具集成
- **Qwen Code**：LM Studio 语法解析失败（#10065）、MCP 配置持久化失效（#7771）、Android 客户端呼吁（#11704）、Windows fstat 测试修复（#11750）；
- **OpenCode**：clipboard 问题跨越 CLI/Desktop/VSCode/远程容器/GNU Screen 五种环境；
- **Pi**：多 OAuth Provider 集成（Google Antigravity、Cursor Pro、Meta Muse）；
- **Gemini CLI**：从 Claude Code 迁移 Hook 时的单位/命名不兼容（PR #29125/#29124）。

### 3.5 开发者体验（DX）优化
- **Gemini CLI**：#23156 结构化错误分类与恢复提示、PR #29230 文档锚点修复；
- **DeepSeek TUI**：#6095 TUI @file 模糊搜索暴露、#5996 R1 回合预算文档化；
- **Qwen Code**：#11727 工具输出预算可配置、Web Shell 远程守护进程选择（PR #11548）。

---

## 4. 差异化定位分析

| 维度 | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI | Kimi Code CLI |
|------|-----------|-------------------|----------|-----|-----------|-------------|--------------|
| **核心定位** | Google 生态 Agent 平台 | GitHub 生态智能开发助手 | 多 Provider 开源 CLI | 丰富 TUI 体验的 Agent 客户端 | 钉钉/企业生态 AI 编码工具 | 社区驱动的极致 TUI | Kimi 生态 CLI 入口 |
| **目标用户** | 企业级开发者、Agent 开发者 | GitHub 生态用户 | 多模型爱好者、开源社区 | 注重交互体验的终端用户 | 国内企业用户、钉钉用户 | 极客开发者 | Kimi 用户 |
| **技术路线** | 沙箱隔离 + AST 感知 + Agent 稳定性 | MCP 协议合规 + 多模态上下文 | 多 Provider 适配 + v2 技能/子代理生态 | OAuth 扩展 + TUI 创新（宠物系统） | 容器化子代理 + Web Shell 远程守护 | 跨端引擎 + 插件市场 | Web UI 交互增强 |
| **安全策略** | 最重视（prompt-injection、沙箱、Memory 脱敏） | 权限动态回收（/remove-dir） | 关注支付与额度安全 | 关注 OAuth 凭证竞争 | 遥测隐私、容器隔离 | 符号链接安全、插件信任 | 中等 |
| **生态集成** | Google AI 生态、Claude Code 配置迁移 | GitHub Actions、MCP、Claude/GPT 模型 | 多 Provider、开源插件 | Google/Cursor/Meta OAuth | 钉钉、DingTalk、LM Studio、Web Shell | Serply 搜索引擎、插件市场 | Web UI 队列 |
| **迭代节奏** | 高频 nightly（每日） | 中等（CI 维护为主） | 高频（10 PR/日） | 高频（9 PR/日） | 高频 nightly + 10 PR/日 | 高频（10 PR/日） | 低频（无 PR） |

---

## 5. 社区热度与成熟度

### 热度梯队

| 梯队 | 工具 | 判断依据 |
|------|------|---------|
| **第一梯队（高活跃 + 高讨论）** | OpenCode、Pi | 单议题评论数达 78-131 条，PR 密度高，社区参与深 |
| **第二梯队（高频迭代 + 稳定输出）** | Gemini CLI、Qwen Code | 每日 nightly/10+ PR，问题覆盖面广，团队响应快 |
| **第三梯队（稳定维护 + 低频迭代）** | GitHub Copilot CLI | Issue 数适中，PR 以 CI 为主，社区讨论集中在特定

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-09-13 | 来源：github.com/anthropics/skills

---

## 1. 热门 Skills 排行（按 PR 活跃度）

| # | Skill | 功能概述 | 社区热点 | 状态 | 链接 |
|---|-------|---------|---------|------|------|
| 1 | **skill-creator** (`run_eval.py`) | Skill 评估与描述优化工具链 | 核心缺陷：`run_eval.py` 始终报告 `recall=0%`（#556 被复现 10+ 次），导致描述优化循环在噪声上运行；Windows 下 subprocess pipe 读取崩溃 | 🟢 Open | [PR #1298](https://github.com/anthropics/skills/pull/1298) |
| 2 | **mcp-builder** | MCP 服务器构建与评估 | 适配 `mcp>=2` 的 `streamable_http_client` 重命名与自定义 header；`evaluation.py` 默认模型更新为 `claude-sonnet-5`；评估序列化/编码缺陷修复 | 🟢 Open | [PR #1742](https://github.com/anthropics/skills/pull/1742) · [#1724](https://github.com/anthropics/skills/pull/1724) · [#1602](https://github.com/anthropics/skills/pull/1602) |
| 3 | **document-typography** | 生成文档的排版质量控制 | 解决 AI 生成文档中的孤行、寡头、编号错位等常见排版问题，覆盖几乎所有 Claude 文档场景 | 🟢 Open | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 4 | **pdf** | PDF 处理 | 修复 SKILL.md 中 8 处大小写不敏感的文件引用（`REFERENCE.md`→`reference.md` 等），避免在 Linux/macOS 上中断 | 🟢 Open | [PR #538](https://github.com/anthropics/skills/pull/538) |
| 5 | **docx** | DOCX 处理 | 修复跟踪更改 `w:id` 与书签 ID 空间冲突导致的文档损坏 | 🟢 Open | [PR #541](https://github.com/anthropics/skills/pull/541) |
| 6 | **claude-api** | Claude API 参考 | 标记 4 个已退役模型 ID（`claude-opus-4-1`、`claude-sonnet-4-0` 等）仍在"Legacy/Deprecated"列表中的问题 | 🟢 Open | [PR #1607](https://github.com/anthropics/skills/pull/1607) |
| 7 | **odt** | OpenDocument（ODS/ODT）创建与解析 | 新增 ODF 生态技能，支持模板填充与 ODT→HTML 转换 | 🟢 Open | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 8 | **skill-creator (Windows)** | 评估工具链跨平台 | 累计 2 个 PR 修复 Windows 下 `claude.cmd` 路径识别、`WinError 10038` pipe 异常及编码问题 | 🟢 Open | [PR #1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050) |

---

## 2. 社区需求趋势（从 Issues 提炼）

| 方向 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **🔐 安全与信任边界** | [Issue #492](https://github.com/anthropics/skills/issues/492) — 社区技能冒充 `anthropic/` 命名空间进行信任边界滥用（43 条评论，2👍） | ⚠️ 最高优先级 |
| **🤝 组织级技能共享** | [Issue #228](https://github.com/anthropics/skills/issues/228) — Claude.ai 内组织级 Skill 共享/分发（16 评论，8👍） | 📈 强烈需求 |
| **🧠 记忆与状态压缩** | [Issue #1329](https://github.com/anthropics/skills/issues/1329) — `compact-memory`：用符号记法替代自然语言持久化记忆 | 📈 新兴方向 |
| **🛡️ Agent 治理** | [Issue #412](https://github.com/anthropics/skills/issues/412) — Agent Governance：策略执行、威胁检测、信任评分、审计追踪 | 📈 新兴方向 |
| **⚡ 性能与上下文** | [Issue #1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` 单次注入 ~156k token 耗尽上下文；[Issue #202](https://github.com/anthropics/skills/issues/202) — skill-creator token 效率 | 🔧 性能优化 |
| **🧪 多 Agent 编排** | [PR #1628](https://github.com/anthropics/skills/pull/1628) — Hivemind（Zero-Cost Multi-Agent Orchestration） | 🚀 免费模型 + 分层编排 |
| **🔌 API 集成** | [PR #1627](https://github.com/anthropics/skills/pull/1627) — Buffer GraphQL 社交调度 Agent Skill | 🔗 外部服务集成 |

---

## 3. 高潜力待合并 Skills

| PR | Skill | 亮点 | 链接 |
|----|-------|------|------|
| [#1734](https://github.com/anthropics/skills/pull/1734) | **Orphaned docx comments detector** | 2026-09 最新提交，针对文档清理场景 | [PR #1734](https://github.com/anthropics/skills/pull/1734) |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind: Zero-Cost Multi-Agent Orchestration** | 利用免费模型 headless worker 扩展 Claude Code 能力，成本敏感场景高价值 | [PR #1628](https://github.com/anthropics/skills/pull/1628) |
| [#1627](https://github.com/anthropics/skills/pull/1627) | **buffer-api Agent Skill** | Buffer GraphQL 调度，跨 Agent（Claude/Cursor/Codex/OpenClaw）通用 | [PR #1627](https://github.com/anthropics/skills/pull/1627) |
| [#1595](https://github.com/anthropics/skills/pull/1595) | **UIZZE (anti-ui-slop partner skill)** | 伙伴技能生态新增，含 80 万+ 真实 UI 参考设计 MCP | [PR #1595](https://github.com/anthropics/skills/pull/1595) |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 机械验证 + 四维推理质量门（v1.3.0），AI 输出交付前自动审计 | [PR #1367](https://github.com/anthropics/skills/pull/1367) |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer & skill-security-analyzer** | Meta Skill，五维质量评估（结构/文档/示例/安全/兼容性） | [PR #83](https://github.com/anthropics/skills/pull/83) |
| [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design skill 改进** | 提升前端设计技能的可执行性与内部一致性 | [PR #210](https://github.com/anthropics/skills/pull/210) |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：核心工具链（skill-creator / mcp-builder）的稳定性修复与跨平台兼容，叠加对 Skills 生态治理（安全边界、命名空间滥用、组织共享机制）的制度性建设——"能跑通"与"可信可管"已成为驱动 Skill 生态演进的两大主线。**

---

### 关键行动建议

1. **优先关注**：PR #1298（`run_eval.py` recall=0% 根因修复）是解锁整个 skill-creator 优化循环的关键瓶颈。
2. **安全红线**：Issue #492 涉及的信任边界滥用问题需在命名空间治理层面给出明确方案。
3. **生态扩展**：Hivemind（#1628）、compact-memory（#1329）、Agent Governance（#412）代表了 Agent 能力纵深方向，值得持续跟踪。

---

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 - 2026-09-13

## 今日速览

Gemini CLI 社区在 Agent 行为稳定性、安全性增强和内存系统优化方面取得显著进展。今日新增 nightly 版本发布，多个高优先级 Bug 修复和功能增强合并；同时安全防护、AST 感知文件操作等方向的讨论持续升温。

---

## 版本发布

- **v0.61.0-nightly.20260913.g9c1b0a610**  
  [GitHub Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260913.g9c1b0a610)  
  **更新内容**：本次 nightly 版本主要为自动化版本升级，暂未附带具体特性或修复说明。

---

## 社区热点 Issues

### 1. #23114 Strengthen prompt-injection defenses when reading project content  
🔗 [Issue #23114](https://github.com/google-gemini/gemini-cli/issues/23114)  
⭐ 社区热议：13 条评论 | 👍 0  
📌 分类：安全增强（P2）| 已关闭  
**重要性**：作为 Agentic CLI 工具，Gemini CLI 直接读取项目文件内容，存在 Prompt 注入风险。此 Issue 提出加强被动文件内容与主动用户指令之间的界限，是当前安全体系建设的关键议题。

---

### 2. #22323 Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption  
🔗 [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
⭐ 社区热议：13 条评论 | 👍 2  
📌 分类：Agent 行为异常（P1）| 待重测  
**重要性**：Subagent 在达到最大轮次限制后仍错误上报为“GOAL 成功”，掩盖中断信息，影响调试与评估。反映出 Agent 状态反馈机制的缺陷。

---

### 3. #21409 Generalist agent hangs  
🔗 [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
⭐ 社区热议：8 条评论 | 👍 8  
📌 分类：Agent 稳定性问题（P1）  
**重要性**：Generalist Agent 频繁挂起，严重影响使用体验。用户反馈只要禁用子代理即可正常运行，表明当前子代理调度逻辑存在阻塞问题。

---

### 4. #22745 Assess the impact of AST-aware file reads, search, and mapping  
🔗 [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)  
⭐ 社区热议：7 条评论 | 👍 1  
📌 分类：功能增强（P2）  
**重要性**：探索 AST 感知的文件读写与搜索优化，有望提升代码理解精度与效率，是未来智能编码助手的重要方向之一。

---

### 5. #21968 Gemini does not use skills and sub-agents enough  
🔗 [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
⭐ 社区热议：6 条评论 | 👍 0  
📌 分类：Agent 智能调用优化（P2）  
**重要性**：用户期望 Gemini CLI 自动识别并调用自定义技能和子代理，但实际几乎不触发，凸显当前任务路由与技能调用逻辑的局限性。

---

### 6. #26525 Add deterministic redaction and reduce Auto Memory logging  
🔗 [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)  
⭐ 社区热议：5 条评论 | 👍 0  
📌 分类：内存系统安全性（P2）  
**重要性**：Auto Memory 功能在提取会话内容时可能泄露敏感信息，需引入确定性脱敏机制并减少日志记录范围，保障用户隐私安全。

---

### 7. #23156 Feature: Add structured error classification and recovery hints to tool error responses  
🔗 [Issue #23156](https://github.com/google-gemini/gemini-cli/issues/23156)  
⭐ 社区热议：4 条评论 | 👍 0  
📌 分类：开发者体验增强（P2）  
**重要性**：目前工具错误返回为普通字符串，模型需自行解析类别与恢复策略；结构化错误响应有助于提升 Agent 的自愈能力。

---

### 8. #26701 Continuously doing thing even before getting permission after the first task  
🔗 [Issue #26701](https://github.com/google-gemini/gemini-cli/issues/26701)  
⭐ 社区热议：4 条评论 | 👍 3  
📌 分类：权限控制缺陷（P2）  
**重要性**：Agent 未经授权便持续执行任务链，违反用户期望，反映出交互流程设计上的缺陷。

---

### 9. #25722 Gemini ran `git reset --hard HEAD` in plan mode with uncommitted changes  
🔗 [Issue #25722](https://github.com/google-gemini/gemini-cli/issues/25722)  
⭐ 社区热议：4 条评论 | 👍 0  
📌 分类：危险命令执行控制（P1）  
**重要性**：Gemini 在计划模式下执行危险 Git 操作，可能导致数据丢失。凸显 Agent 操作限制策略的必要性。

---

### 10. #25166 Shell command execution gets stuck with "Waiting input" after command completes  
🔗 [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)  
⭐ 社区热议：4 条评论 | 👍 3  
📌 分类：CLI 执行流程卡顿（P1）  
**重要性**：简单命令执行完毕后 CLI 仍显示等待输入，影响正常交互流程。用户普遍反映这类问题频繁发生。

---

## 重要 PR 进展

### 1. #29126 fix(a2a-server): mount express.json before a2a sdk routes  
🔗 [PR #29126](https://github.com/google-gemini/gemini-cli/pull/29126)  
✅ 状态：已合并  
🔧 修复内容：修正 A2A 服务端中 `express.json()` 中间件注册顺序，确保 JSON-RPC 路由能正确解析请求体。

---

### 2. #29125 fix(cli): convert hook timeout from seconds to milliseconds in hooks migration  
🔗 [PR #29125](https://github.com/google-gemini/gemini-cli/pull/29125)  
✅ 状态：已合并  
🔧 修复内容：修复从 Claude Code 迁移 Hook 配置时，超时单位不一致问题，避免超时时间被误解释为毫秒。

---

### 3. #29124 fix(cli): correct SubagentStop event key in hooks migration  
🔗 [PR #29124](https://github.com/google-gemini/gemini-cli/pull/29124)  
✅ 状态：已合并  
🔧 修复内容：修正子代理停止事件名称匹配问题，确保 `SubagentStop` 能够正确映射并生效。

---

### 4. #29208 fix(core): fall back to empty on malformed agents.json shape  
🔗 [PR #29208](https://github.com/google-gemini/gemini-cli/pull/29208)  
✅ 状态：等待合并  
🔧 修复内容：处理 `agents.json` 格式异常（如 null 或数组）时的崩溃问题，提升容错性。

---

### 5. #29222 fix(config): prevent rewriting explicitly pinned flash models  
🔗 [PR #29222](https://github.com/google-gemini/gemini-cli/pull/29222)  
✅ 状态：等待合并  
🔧 修复内容：防止明确指定 Flash 模型的参数被自动重写为其他版本，保障用户意图尊重。

---

### 6. #29292 fix(checkpoint): validate history is an array in loadCheckpoint  
🔗 [PR #29292](https://github.com/google-gemini/gemini-cli/pull/29292)  
✅ 状态：等待合并  
🔧 修复内容：校验 checkpoint 文件中 `history` 字段类型，避免因格式错误导致恢复失败。

---

### 7. #29214 fix(sandbox): harden filesystem boundaries and isolate runtime state  
🔗 [PR #29214](https://github.com/google-gemini/gemini-cli/pull/29214)  
✅ 状态：已合并  
🔧 修复内容：强化沙箱文件系统隔离，防止运行时状态泄漏到宿主机，增强安全性。

---

### 8. #29230 docs: fix dead anchors across guides  
🔗 [PR #29230](https://github.com/google-gemini/gemini-cli/pull/29230)  
✅ 状态：等待合并  
🔧 修复内容：修复多个文档页面中失效的锚点链接，优化文档导航体验。

---

### 9. #29294 fix(cli): prevent terminal flickering caused by stdout contention and cursor focus  
🔗 [PR #29294](https://github.com/google-gemini/gemini-cli/pull/29294)  
✅ 状态：等待合并  
🔧 修复内容：缓解终端输出竞争与光标聚焦问题，提升 CLI 交互体验。

---

### 10. #29287 feat(policy): map `--yolo` to allowedTools wildcard policy  
🔗 [PR #29287](https://github.com/google-gemini/gemini-cli/pull/29287)  
✅ 状态：已合并  
🔧 功能增强：将 `--yolo` 参数映射至通配符权限策略，简化快速授权流程。

---

## 功能需求趋势

- **Agent 行为控制与安全优化**：包括防止危险命令执行、控制子代理行为边界、处理异常终止状态。
- **内存系统安全性提升**：Auto Memory 功能中是否存在敏感信息泄露问题引发关注。
- **AST 感知文件处理**：提升代码理解能力与搜索效率，是未来智能助手的潜在方向。
- **开发者体验优化**：结构化错误响应、更清晰的 Hook 配置映射、文档完善等。
- **沙箱隔离机制增强**：保障运行环境的安全与稳定性，防止越权访问。

---

## 开发者关注点

- **Agent 挂起与阻塞问题**：多个用户报告 Generalist Agent 无法正常推进任务，怀疑子代理调度机制存在缺陷。
- **命令执行异常**：CLI 界面在执行简单命令后卡住，影响日常开发效率。
- **权限控制漏洞**：Agent 未经允许便触发任务链或执行危险操作，暴露潜在风险。
- **配置兼容性问题**：从其他平台迁移配置时出现单位不一致、命名不匹配等问题。
- **内存管理不足**：Auto Memory 存在隐私泄露潜势，亟需改进。

---

如需进一步分析或按周期生成报告，请随时告知！

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报  
**日期：2026-09-13**  
**数据源：github.com/github/copilot-cli**  
> 注：过去 24 小时数据中仅有 **8 条 Issue、3 条 PR**，以下按全量重点内容整理。

---

## 1. 今日速览

过去 24 小时 GitHub Copilot CLI **无新版本 Release**。Issue 侧热点集中在 CLI 稳定性、Agent 执行效率、交互队列、权限回收、多模态图像限制与可观测性；其中 Linux 下 JavaScript heap OOM、`ctrl-t` 排队提示词不执行、图像上下文上限等问题较受开发者关注。PR 侧全部为 CI/供应链维护，包括 Actions 依赖升级与将 GitHub Actions 引用固定到 commit SHA。

---

## 3. 社区热点 Issues

### 1. [#2147 CAIP 400: input item ID does not belong to this connection](https://github.com/github/copilot-cli/issues/2147)  
- **状态**：Closed  
- **社区反应**：7 条评论，1 👍  
- **关注点**：使用 `gpt-5.4 (xhigh)` 时出现 `CAPIError: 400 / websocket_error`，提示 input item ID 不属于当前 connection。  
- **重要性**：涉及 Copilot CLI 与后端模型连接状态一致性问题，可能影响长会话、流式响应或复杂 Agent 执行稳定性。该 Issue 已关闭，后续可关注是否随版本修复落地。

### 2. [#4725 Frequent JavaScript heap out of memory](https://github.com/github/copilot-cli/issues/4725)  
- **状态**：Open  
- **标签**：`area:platform-linux`  
- **社区反应**：4 条评论，1 👍  
- **关注点**：Linux 环境下 Copilot CLI 每隔几分钟崩溃，Node.js heap 接近 4GB 后触发 OOM。  
- **重要性**：这是当前最直接影响可用性的稳定性问题之一，说明 CLI 在长会话、复杂 Agent 或大量上下文场景下可能存在内存泄漏或资源管理问题。

### 3. [#4824 ctrl-t enqueue prompt doesn't work](https://github.com/github/copilot-cli/issues/4824)  
- **状态**：Open  
- **社区反应**：1 条评论  
- **关注点**：`ctrl-t` 可以 enqueue prompt，但前一个 Agent 任务结束后不会自动执行，UI 持续显示 `Working`。  
- **重要性**：影响交互式工作流和批量任务编排体验，开发者期望队列提示词能自动连续执行或提供更明确的调度控制。

### 4. [#4759 Copilot CLI should send MCP cancellation requests](https://github.com/github/copilot-cli/issues/4759)  
- **状态**：Closed  
- **标签**：`area:mcp`  
- **社区反应**：1 条评论  
- **关注点**：当工具调用等待 URL-mode elicitation 完成时，用户取消工具调用后 CLI 未发送 MCP cancellation request。  
- **重要性**：涉及 MCP 协议合规性与取消语义。若取消请求未正确传递，可能导致浏览器认证流程、工具调用或后台任务遗留。

### 5. [#4831 One pasted image and claude-opus-5 won't look at any more images](https://github.com/github/copilot-cli/issues/4831)  
- **状态**：Open  
- **社区反应**：暂无评论与点赞  
- **关注点**：在 `claude-opus-5` 会话中粘贴截图后，后续 `view` 图像文件均提示已达到最大图像查看数量 `1`。  
- **重要性**：反映多模态上下文限制与用户预期不一致，尤其是粘贴图像、文件图像与模型上下文清理策略之间可能存在体验断层。

### 6. [#4830 Add /remove-dir command to revoke directory access](https://github.com/github/copilot-cli/issues/4830)  
- **状态**：Open  
- **社区反应**：暂无评论与点赞  
- **关注点**：CLI 已有 `/add-dir` 与 `/list-dirs`，但缺少移除已授权目录的命令。  
- **重要性**：这是典型的会话内权限回收需求。开发者希望在 Agent 执行过程中动态缩小访问范围，符合最小权限原则。

### 7. [#4829 Subagents executing long tool-call sequences in a single turn fail prompt caching and compound token consumption](https://github.com/github/copilot-cli/issues/4829)  
- **状态**：Open  
- **环境**：Copilot CLI v1.0.83、Windows 11 / PowerShell、Gemini 3.8 Flash  
- **社区反应**：暂无评论与点赞  
- **关注点**：自定义 subagent 通过 `task` 工具在单个 turn 中执行数百次工具调用时，prompt caching 失效并导致复合 token 消耗异常。  
- **重要性

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报 (2026-09-13)

---

## 1. 今日速览

今日无新版本发布或 Pull Request 更新。社区活跃度集中体现在一个高价值的功能请求上：用户希望为 Web UI 的消息队列面板增加「Steer (⚡)」按钮，以实现更灵活的运行时干预。同时，两个历史 Bug 已被关闭，反映了项目在 Web 模式稳定性和行为一致性上的改进。

---

## 2. 版本发布

*无。*

---

## 3. 社区热点 Issues

### 🔥 #2370 - [ENHANCEMENT] Web UI 队列面板增加 Steer 按钮
- **状态**: OPEN | **作者**: 2986787982dsx-ui | **👍**: 2
- **摘要**: 用户在使用 `kimi web` 启动的 Web UI 时，希望在 AI 运行过程中向队列追加消息后，能通过一个「Steer」按钮来动态调整或中断当前任务，而不是仅能被动等待队列执行。
- **重要性**: 高。该需求直指 AI Agent 交互体验的核心——实时干预能力。获得 2 个点赞，表明社区对更精细的运行时控制有明确需求。
- **链接**: [MoonshotAI/kimi-cli Issue #2370](https://github.com/MoonshotAI/kimi-cli/issues/2370)

### 🛠️ #1409 - [BUG] Web 模式持续刷新并连接不同端口
- **状态**: CLOSED | **作者**: LSTM-Kirigaya | **👍**: 0
- **摘要**: 用户在使用 `/web` 命令时，Web 页面持续刷新并尝试连接不同的端口，导致无法正常使用。这是一个影响核心功能的连接稳定性问题。
- **重要性**: 中。虽已关闭，但暴露了 Web 模式在端口管理和会话保持上的潜在缺陷，值得开发者关注。
- **链接**: [MoonshotAI/kimi-cli Issue #1409](https://github.com/MoonshotAI/kimi-cli/issues/1409)

### 🛠️ #1404 - [BUG] 意外行为
- **状态**: CLOSED | **作者**: acorello | **👍**: 0
- **摘要**: 用户在请求制定计划并展示时，遇到了非预期的输出或行为。问题描述较为模糊，但反映了模型在复杂指令理解上可能存在的偏差。
- **重要性**: 中。此类问题通常与 prompt 理解或工具调用链有关，是 AI Agent 产品的常见挑战。
- **链接**: [MoonshotAI/kimi-cli Issue #1404](https://github.com/MoonshotAI/kimi-cli/issues/1404)

---

## 4. 重要 PR 进展

*无。*

---

## 5. 功能需求趋势

从近期社区反馈中，可以提炼出以下关注方向：

- **Web UI 交互增强**: #2370 明确要求增加运行时干预能力（Steer 按钮），表明用户期望 Web 界面能提供接近桌面端的控制粒度。
- **异步任务队列管理**: 与 Steer 按钮相关，用户对消息排队、优先级调整、任务取消等高级队列操作有潜在需求。
- **稳定性与一致性**: #1409 和 #1404 分别从连接稳定性和行为可预测性两个角度提出问题，说明用户对工具的基础可靠性要求很高。

---

## 6. 开发者关注点

- **Web 模式的端口与会话管理**: #1409 的根本原因需要深入排查，确保 `kimi web` 启动的本地服务在并发和重连场景下的稳定性。
- **运行时干预机制**: #2370 提出的「Steer」功能，本质上是为 AI Agent 增加一个外部控制通道，值得作为一项中长期特性进行架构设计。
- **模糊需求的处理**: #1404 提示我们，对于「制定计划」这类多步骤任务，需要优化 prompt 工程和中间状态的可视化，减少用户困惑。

---

*本日报由 AI 自动生成，数据来源于 GitHub 公开 API。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-13

## 1. 今日速览
- **剪贴板故障仍是社区最大痛点**：过去24小时内，clipboard 相关 Issue 持续获得大量关注（#4283 已积累 131 条评论），覆盖 CLI、Desktop、VSCode 插件及远程容器环境。
- **稳定性修复推进**：NVIDIA 认证失败（#48728）、侧进程崩溃（#48715）、Session 创建错误未暴露（#39775）等问题今日有 PR 或关闭动作。
- **v2 新功能迭代**：技能披露、子代理 ID 暴露、TUI i18n、Latex 渲染等 PR 持续合并。

## 2. 版本发布
无新版本发布。

## 3. 社区热点 Issues（Top 10）
| # | 标题 | 关键信号 |
|---|------|---------|
| [4283](https://github.com/anomalyco/opencode/issues/4283) | Copy To Clipboard is not working | 131 评论/123👍，跨平台高频复现，已成社区首要 Bug |
| [13984](https://github.com/anomalyco/opencode/issues/13984) | can not copy and paste in CLI | 57 评论，右上角提示"已复制"但实际无数据 |
| [41470](https://github.com/anomalyco/opencode/issues/41470) | "Copied to clipboard" doesn't work (VSCode Server/Docker) | 远程开发场景 clipboard 失效 |
| [26459](https://github.com/anomalyco/opencode/issues/26459) | Clipboard copy fails in web-based VSCode terminals | code-server/Codespaces/Gitpod 均受影响 |
| [37231](https://github.com/anomalyco/opencode/issues/37231) | Error from provider (Console Go): Upstream request failed | 今日关闭，Go 模型上游请求失败 |
| [26602](https://github.com/anomalyco/opencode/issues/26602) | Desktop 5-minute Headers Timeout with slow local providers | 即使设 `timeout: false` 仍 5 分钟中断 |
| [48728](https://github.com/anomalyco/opencode/issues/48728) | NVIDIA API key not working | 今日关闭，认证失败 |
| [36761](https://github.com/anomalyco/opencode/issues/36761) | [2.0] expose valid subagent IDs to the model | v2 子代理无法发现有效 ID，委托失败 |
| [48604](https://github.com/anomalyco/opencode/issues/48604) | Payment deducted but credits not updated | 支付宝扣费但余额仍为 $0 |
| [32985](https://github.com/anomalyco/opencode/issues/32985) | GNU Screen 下无 truecolor/copy-paste/mouse | 传统终端兼容性退化 |

## 4. 重要 PR 进展（Top 10）
| # | 标题 | 类型 |
|---|------|------|
| [48324](https://github.com/anomalyco/opencode/pull/48324) | feat(skill): two-tier progressive skill disclosure | 新功能，技能披露与自定义网关兼容 |
| [48729](https://github.com/anomalyco/opencode/pull/48729) | fix(session): keep todo list current for non-Claude models | Bug 修复，非 Claude 模型 todo 状态不同步 |
| [48737](https://github.com/anomalyco/opencode/pull/48737) | test(app): add real timeline storybook | 测试，覆盖 7 天会话聚合数据 |
| [48735](https://github.com/anomalyco/opencode/pull/48735) | fix(app): match session title placeholder to tab label | UI 一致性，未命名会话标题统一为"Session" |
| [46690](https://github.com/anomalyco/opencode/pull/46690) | feat(plugin): expose session forms, list, global event stream | 插件能力扩展，为 Telegram Bot 等做准备 |
| [48734](https://github.com/anomalyco/opencode/pull/48734) | fix(server): surface session creation errors | 服务端错误暴露，关闭 #39775 |
| [48638](https://github.com/anomalyco/opencode/pull/48638) | fix(core): eliminate durable event write amplification | 性能修复，消除 turn diffs 写放大 |
| [48733](https://github.com/anomalyco/opencode/pull/48733) | fix(tui): preserve slash skill arguments | 修复 #48720，斜杠技能后参数丢失 |
| [48732](https://github.com/anomalyco/opencode/pull/48732) | fix(tui): finalize streamed markdown responses | 流式 Markdown 渲染完成后退出流模式 |
| [48716](https://github.com/anomalyco/opencode/pull/48716) | fix(desktop): respawn crashed sidecar; classify image-count errors | 侧进程崩溃重启与图片超限分类 |

## 5. 功能需求趋势
1. **跨环境 Clipboard 一致性**：CLI / Desktop / VSCode 插件 / 远程容器 / GNU Screen 均反馈复制失败，需求高度集中。
2. **Provider 稳定性与可观测性**：上游请求失败、Headers Timeout、Rate Limit、认证失败频繁，需要更清晰的错误分类与重试策略。
3. **内存与流式连接管理**：SSE 无界增长（#31084）、页面后台切换后流中断（#47258）反映长会话稳定性不足。
4. **v2 技能与子代理生态**：技能参数保留、子代理 ID 发现、i18n 支持成为新热点。
5. **桌面端体验**：双击最大化面板（JetBrains 风格）、归档会话保留、macOS 安装器迁移。

## 6. 开发者关注点
- **Clipboard 可靠性**：用户看到"已复制"提示但系统剪贴板无数据，严重影响工作流。
- **超时与连接策略**：本地慢 provider 5 分钟硬超时，且配置不生效。
- **内存泄漏**：长会话 SSE 累积导致 worker 无响应。
- **模型错误误导性**：ProviderModelNotFoundError 建议相同字符串，多段 model key 报"Unexpected server error"。
- **支付与额度同步**：扣费后余额未更新，影响付费信任度。

> 数据截至 2026-09-13，基于 `anomalyco/opencode` 过去 24 小时更新内容生成。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报 · 2026-09-13**
*数据源：earendil-works/pi（过去24小时更新）*

---

### 1. 今日速览
- **无新版本发布**，社区焦点集中在连接可靠性修复与 TUI 交互优化。
- **Issue #4945**（openai-codex 连接卡顿）持续发酵，78 条评论反映流式输出阻塞为当前最高优先级痛点。
- 多个 OAuth Provider PR 合并（Google Antigravity、Cursor Pro、Meta Muse），订阅制登录支持持续扩展。

### 2. 版本发布
暂无（No new releases in past 24h）。

### 3. 社区热点 Issues（TOP 10）

| # | Issue | 热度 | 关键摘要 |
|---|---|---|---|
| 1 | [#4945](https://github.com/earendil-works/pi/issues/4945) | 78评/33👍 | `openai-codex` 流式输出卡死在 `Working...`，需 Esc 终止，已持续数日 |
| 2 | [#9052](https://github.com/earendil-works/pi/issues/9052) | 9评 | 全屏模式滚轮速度为常规模式 3 倍，UX 回归 |
| 3 | [#8928](https://github.com/earendil-works/pi/issues/8928) | 7评 | 并行启动时 OAuth 凭证竞争导致约 48s "No API key" 误报 |
| 4 | [#9311](https://github.com/earendil-works/pi/issues/9311) | 6评 | 全屏鼠标选择跨会话残留，需切换时清空选区 |
| 5 | [#9538](https://github.com/earendil-works/pi/issues/9538) | 今日新建 | `ScrollView` 未转发鼠标事件到底层组件，影响交互 |
| 6 | [#9520](https://github.com/earendil-works/pi/issues/9520) | 2评 | `stream_read_error` 未触发自动重试，会话需手动恢复 |
| 7 | [#9068](https://github.com/earendil-works/pi/issues/9068) | 2评 | `user_bash` 路由异常时静默回退至本地执行，隔离失效 |
| 8 | [#9518](https://github.com/earendil-works/pi/issues/9518) | 2评 | OpenAI Responses 模式下工具结果图片被网关丢弃 |
| 9 | [#9530](https://github.com/earendil-works/pi/issues/9530) | 2评 | 新增 Google Antigravity 与 Cursor Pro OAuth Provider PR |
| 10 | [#9512](https://github.com/earendil-works/pi/issues/9512) | 2评 | GPT-6 Astra 最大推理深度下上下文压缩触发输出上限 |

### 4. 重要 PR 进展（共 9 条）

- **[#9539](https://github.com/earendil-works/pi/pull/9539)** — `examples/extensions/loop-guard.ts`：检测并终止重复工具调用循环（今日新建）
- **[#9096](https://github.com/earendil-works/pi/pull/9096)** — Meta Muse 订阅 OAuth Provider（含刷新令牌机制说明）
- **[#9531](https://github.com/earendil-works/pi/pull/9531)** — 会话树永久分支删除（shift+d 快捷键 + 子树剪除）
- **[#9529](https://github.com/earendil-works/pi/pull/9529)** — Google Antigravity & Cursor Pro OAuth 实现（端口 51123 回调）
- **[#8635](https://github.com/earendil-works/pi/pull/8635)** — 中止信号透传修复：懒加载流设置时保留 abort 状态
- **[#9523](https://github.com/earendil-works/pi/pull/9523)** — 修复 Pi 自身阻塞提示未触发 `ui_prompt_start/end` 事件
- **[#9517](https://github.com/earendil-works/pi/pull/9517)** — 长工具调用运行分组折叠（≥6 次聚合显示）
- **[#9514

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报（2026‑09‑13）**  

---

### 1. 今日速览  
- 今日仅发布了一个夜间版本 **v0.23.3‑nightly.20260912.54aa66834b**，主要是对 DingTalk 背景响应聚合的重构以及移除废弃的 `channels` 功能。  
- 社区热度集中在 **TUI 崩溃（React #185）**、**内存泄漏/高内存使用**、**MCP 配置未加载**、**隐私遥测**以及 **跨平台（Android、Windows、Linux）** 的适配问题上。  
- 多个 PR 正在围绕 **Agent 执行环境解耦**、**容器化子Agent**、**Web Shell 远程守护进程连接**以及 **工具输出预算可配置** 等功能进行改进，表明社区正在把重点放在 **可扩展性、稳定性和隐私安全** 上。

---

### 2. 版本发布  
- **v0.23.3‑nightly.20260912.54aa66834b**  
  - `refactor(dingtalk): remove obsolete background response aggregation`（@qqqys）  
  - `feat(channels)!: remove me`（移除废弃的 `channels` 特性）  
  - 详见发布页：[Release v0.23.3‑nightly.20260912.54aa66834b](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260912.54aa66834b)  

---

### 3. 社区热点 Issues（挑选 10 条）  

| # | 标题 & 链接 | 为什么重要 | 社区反应 |
|---|--------------|------------|----------|
| [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | TUI exits silently (uncaught React #185) when multiple background agents complete | 反复出现的 **React 渲染循环导致 TUI 静默退出**，直接影响交互体验，已成为 P1 阻塞问题。 | 10 条评论，1 👍，讨论集中在 Ink/useBoxMetrics 的状态循环。 |
| [#10065](https://github.com/QwenLM/qwen-code/issues/10065) | LM Studio 0.4.21: Qwen Code request fails with "failed to parse grammar" | 揭示 **与外部 LM Studio 的兼容性问题**，语法解析失败导致无法使用本地模型，影响本地开发工作流。 | 9 条评论，0 👍，关注点在于 MCP/grammar 解析路径。 |
| [#7771](https://github.com/QwenLM/qwen-code/issues/7771) | Persisted mcp_config is not loaded into main-process MCP proxy at startup | **MCP 配置持久化失效**，导致重启后外部工具无法调用，是跨工具链集成的基础设施问题。 | 8 条评论，0 👍，多次重新打开后仍未解决。 |
| [#11732](https://github.com/QwenLM/qwen-code/issues/11732) | Qwen Code 0.23.3 crashes with React error #185 while native monitor task continues running | 与 #11500 类似的 **React #185 崩溃**，但在长时间监控任务运行时出现，说明问题与后台任务生命周期管理相关。 | 6 条评论，0 👍，强调需要更好的异常捕获与 UI 恢复机制。 |
| [#11695](https://github.com/QwenLM/qwen-code/issues/11695) | tracking(core): separate the agent harness from the execution environment | 提出 **Agent 执行环境与 harness 解耦** 的架构方向，为未来容器化、沙箱化和多租户奠定基础。 | 5 条评论，0 👍，讨论围绕如何在不破坏现有工作流的前提下迁移。 |
| [#11704](https://github.com/QwenLM/qwen-code/issues/11704) | proposal(mobile): official Android companion client for qwen serve over ACP | 社区呼吁 **官方 Android 客户端**，以便在移动端轻松连接 Qwen Code 守护进程，扩展使用场景。 | 5 条评论，0 👍，部分用户愿意主导实现 MVP。 |
| [#11724](https://github.com/QwenLM/qwen-code/issues/11724) | High memory usage detected: 7.00 GB | **内存占用异常**，长时间运行后达到数 GB，导致频繁崩溃，是性能优化的紧急点。 | 3 条评论，0 👍，用户提供了 Windows 环境下的复现步骤。 |
| [#11666](https://github.com/QwenLM/qwen-code/issues/11666) | bug(telemetry): API request content is exported despite logPrompts=false | **隐私泄露风险**：即便关闭日志，完整的 API 请求仍被上传至遥测端点，引发数据安全担忧。 | 3 条评论，0 👍，讨论围绕遥测配置的生效性。 |
| [#11439](https://github.com/QwenLM/qwen-code/issues/11439) | bug(lsp): queries return stale document content after on-disk edits | LSP 语言服务在文件磁盘变更后返回 **过期内容**，影响代码补全与跳转的准确性。 | 3 条评论，0 👍，开发者指出需要更及时的文件系统监听。 |
| [#11228](https://github.com/QwenLM/qwen-code/issues/11228) | An open right-click context menu does not consume keys: composer and tool-approval dialog act on the same keystroke | **UI 键盘冲突**，右键菜单未捕获按键导致误操作，影响日常编辑流畅性。 | 3 条评论，0 👍，建议修改 KeypressContext 的广播机制。 |

---

### 4. 重要 PR 进展（挑选 10 条）  

| # | 标题 & 链接 | 主要功能或修复 |
|---|--------------|----------------|
| [#11727](https://github.com/QwenLM/qwen-code/pull/11727) | fix(core): let the producer's own budget decide shell output size | 让工具自行决定输出大小，避免调度器二次裁剪导致信息丢失。 |
| [#11647](https://github.com/QwenLM/qwen-code/pull/11647) | fix(cli): resolve ACP core settings against the active target dir | ACP 设置现在基于当前工作目录读取/写入，解决跨项目配置冲突。 |
| [#11606](https://github.com/QwenLM/qwen-code/pull/11606) | fix(dashscope): send request metadata only for qwen-family models | 仅对 Qwen 系列模型发送 DashScope 元数据，减少无效请求并提升兼容性。 |
| [#11548](https://github.com/QwenLM/qwen-code/pull/11548) | feat(web-shell): connect to a selected remote daemon | Web Shell 新增手动选择远程守护进程的能力，支持多实例切换。 |
| [#11291](https://github.com/QwenLM/qwen-code/pull/11291) | fix(core): retry status-less upstream errors instead of ending the turn | 对上游返回的无状态错误进行重试，提升网络弹性。 |
| [#11711](https://github.com/QwenLM/qwen-code/pull/11711) | feat(core): add container execution for subagents | 支持通过 Docker/Podman 运行普通子Agent，增强隔离性与可重复性。 |
| [#11692](https://github.com/QwenLM/qwen-code/pull/11692) | feat(core): make the web_search budget configurable and bound the extractor fallback | 使 Web Search 超时时间可配置（默认 120s），并在超时时安全截断返回内容。 |
| [#11742](https://github.com/QwenLM/qwen-code/pull/11742) | fix(cli): reap running monitors when the process dies on an uncaught exception | 进程因未捕获异常退出时主动终止所有监控任务，防止资源泄漏。 |
| [#11748](https://github.com/QwenLM/qwen-code/pull/11748) | fix(web-shell): prevent terminal query freezes and clean up protocol rejection | 修复 Web Shell 终端查询卡死问题，并改进对旧守护进程的协议拒绝处理。 |
| [#11750](https://github.com/QwenLM/qwen-code/pull/11750) | test(core): account for the extra Windows fstat in the tail-growth session mocks | 补足 Windows 特殊文件打开逻辑的单元测试，提升跨平台可靠性。 |

---

### 5. 功能需求趋势  
从本日的 Issues 与 PR 中可以提炼出以下社区关注方向：  

| 趋势 | 体现的 Issues/PRs |
|------|-------------------|
| **稳定性与崩溃修复** | #11500、#11732、#11724、#11742（捕获未处理异常） |
| **内存与性能优化** | #11724（高内存）、#11692（可配置 Web Search 预算）、#11727（输出尺寸预算） |
| **跨平台 & 外部工具集成** | #10065（LM Studio 兼容）、#7771（MCP 配置加载）、#11704（Android 客户端）、#11748（Web Shell 终端稳定性） |
| **隐私与遥测** | #11666（遥测泄漏）、#11198（原始工具错误上传） |
| **Agent 架构解耦** | #11695（harness 与执行环境分离）、#11711（容器化子Agent） |
| **可配置工具预算** | #11692（Web Search 超时）、#11727（Shell 输出尺寸） |
| **UI/UX 细节** | #11228（右键菜单按键冲突）、#11710（Viewport 脏状态）、#11704（移动端客户端） |

---

### 6. 开发者关注点（痛点 & 高频需求）  
- **崩溃恢复机制**：多个 React #185 错误导致 TUI 突然退出，开发者期望更健全的错误边界和会话恢复。  
- **内存泄漏/高内存使用**：长时间运行后内存快速膨胀，需进行堆分析和对象生命周期审计。  
- **遥测隐私**：即便关闭日志，敏感请求仍被上传，要求遥测开关真正生效并提供可审计的数据脱敏。  
- **MCP 配置持久化**：配置未能在主进程中加载，影响与外部工具的无缝衔接。  
- **跨平台一致性**：Windows 上的文件打开额外 fstat 导致测试失败，Linux 上缺少 ICU 数据导致崩溃，统一的环境检测与降级策略亟待补充。  


</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**2026-09-13 深思 TUI 社区动态日报**

---

### 1. 今日速览
深思 TUI 本周聚焦于稳定性修复与功能拓展：**上下文压力警告**和**并行执行随机失败**两大核心 bug 已被修复，新增了**文件级回滚**和**TUI 状态条支持工作目录与 Git 分支**等实用功能，同时，社区启动了一项**跨端引擎宠物系统**建设计划。

---

### 2. 版本发布
*无正式版本发布。*

---

### 3. 社区热点 Issues（共10篇）

| # | 标题/问题 | 状态 | 为什么重要 | 社区反响（评论/👍） |
|---|----------|--------|----------------|---------------------|
| #6025 | **DeepSeek 计划停止 V4 Pro 服务**（2026-09-14） | 关闭 | 直接影响用户订阅服务，需警示迁移。 | 5 条评论，0 👍 |
| #6112 | **增加 `workspace` 和 `git_branch` 状态栏项** | 关闭 | 满足多项目并行开发者的“一键知道当前路径和分支”的痛点。 | 2 条评论，0 👍 |
| #6095 | **向本地 API 客户端 expose TUI 的 @file 模糊搜索** | 开放 | 补全非 TUI 界面的工作空间文件搜索功能，实现统一文件访问能力。 | 3 条评论，0 👍 |
| #6046 | **子代理恢复时丢失 Profile 提供者 Pin 信息** | 关闭 | 导致子代理路由到错误的提供者，验证失败。 | 1 条评论，0 👍 |
| #6018 | **Google Gemini 问题：从零安装失败** | 开放 | 影响新建环境中 Gemini 模型的使用。 | 4 条评论，0 👍 |
| #6039 | **确认-token 操作打印命令而非执行** | 关闭 | 导致插件信任、自动化删除等关键操作重复。 | 1 条评论，0 👍 |
| #6108 | **为自定义/网关提供者支持 per-model `context_window` 覆盖** | 开放 | 实现细粒度模型上下文窗口控制，增强模型编排灵活性。 | 2 条评论，0 👍 |
| #6016 | **日志导出大文件问题** | 开放 | 大日志导出常崩溃，影响用户离线分析。 | 2 条评论，0 👍 |
| #6117 | **子代理通过 `agent()` 启动时忽略 Profile 配置** | 开放 | 子代理无视显式指定的 Profile，使用会话默认路由。 | 1 条评论，0 👍 |
| #6115 | **用户级 `AGENTS.md` 符号链接被静默丢弃** | 关闭 | 破坏了通过链接共享全局指令的方案。 | 1 条评论，0 👍 |

*其他 Issue 包括并行执行随机失败（#5929）、上下文压力警告（#5620）、用户输入模态裁剪（#6045）等，相关修复 PR 已陆续 merge。*

---

### 4. 重要 PR 进展（共10个）

| # | 标题 | 状态 | 功能/修复内容 | 影响 |
|---|---------|--------|----------------|--------|
| #6111 | **增加文件级恢复端点，完善全树回滚机制** | 开放 | 实现了 VSCode 端已有的文件级回退功能，并修复全树回滚中的两个缺陷。 | 提升了回滚操作的精细度和可靠性。 |
| #6110 | **宠物系统：构建一个跨端 deterministic 世界** | 开放 | 构建一个统一的 980 点宠物世界，实现在浏览器、移动端和 TUI 之间的跨端同步。 | 为“Engine 宠物”奠定了基础。 |
| #6096 | **TUI 会话导出采用命令形态（FEAT-025）** | 开放 | `/export`（`/daochu`）重构为通用命令形态，保持用户行为不变。 | 架构优化，为后续功能扩展打下基础。 |
| #6100 | **新增 Serply 搜索引擎支持** | 关闭 | 扩充 Web 工具的搜索引擎列表，兼容 `X-Api-Key` 认证。 | 增加了一个新的搜索适配器。 |
| #5842 | **运行时 API：插件与市场管理（/v1/apps）** | 关闭 | 实现了引擎侧的本地插件系统，搭配独立的 App 端。 | 闭合了插件生态的核心能力。 |
| #6114 | **修复用户级上下文文件符号链接跟随问题** | 关闭 | `~/.codewhale/AGENTS.md` 等文件现在能正常跟随符号链接。 | 消除了静默丢弃警告，稳定了指令继承。 |
| #5996 | **文档化 R1 回合预算，新增 [goal] 示例** | 关闭 | 在 `CONFIGURATION.md` 中为 `max_model_steps` 和 `turn_wall_clock_secs` 补充文档，并示例化 `[goal]` 配置。 | 提升了配置文件可读性。 |
| #5990 | **Windows 测试：修复 prune 切分随机失败** | 关闭 | 改用实际时间戳计算 prune 保留数量，避免了固定 6s 判定偏差。 | 稳定了 Windows 上的测试运行。 |
| #5984 | **更正项目名称：DeepSeek-TUI，而非 DeepSeek CLI** | 关闭 | 更新了 LICENSE 文件和文档中的版权归属。 | 还原了历史真实。 |
| #5985 | **在贡献门户白名单外部开发者** | 关闭 | 为 `goransh-walia` 添加了 CI 自动通过权限。 | 加速了外部贡献者的流程。 |

*其余 PR 主要为依赖项升级（如 `encoding_rs`、`dirs`、`flate2`、`lru`）及一些代码风格调整，不再一一列举。*

---

### 5. 功能需求趋势

1. **IDE/终端集成**
   * `workspace` / `git_branch` 状态项、`@file` 模糊搜索、文件级回滚 — 持续完善终端内开发者体验。

2. **模型与上下文管理**
   * 多层上下文窗口覆盖（per-provider → per-model）、Profile 子代理路由、R1 回合预算文档 — 体现对模型编排的精细化关注。

3. **插件与市场生态**
   * `/v1/apps` 运行时 API、插件信任流程、Kimi 数据源自动安装提示 — 表明社区正围绕插件化与自动化进行治理。

4. **稳定性与测试**
   * 并行执行随机失败修复、Windows prune 测试稳定、日志导出大文件问题 — 测试与工程质量受到高度重视。

5. **跨端体验**
   * 统一的“Engine 宠物”世界（980 点同步）、TUI 状态线与浏览器/Android 端共享 — 跨端一致性成为新优先事项。

6. **新搜索引擎支持**
   * Serply 适配 — 证明社区鼓励扩展外部服务生态。

---

### 6. 开发者关注点

* **配置继承的可靠性** – 符号链接上下文文件被静默丢弃、Profile 子代理路由丢失、子代理工具循环忽略 `permissions.toml` 等问题引发开发者质疑配置体系的一致性。

* **TUI 界面细节优化** – 用户输入模态裁剪、120 列首屏无时钟显示、状态栏重复打印耗时等 UX 问题凸显界面工程的精细化需要。

* **子代理工作流保障** – 上下文压力警告、子代理 Pin 丢失、重启后会话恢复失败等问题反映出子代理生命周期管理的复杂性。

* **自动化提示控制** – “安装 Kimi 数据源插件”提示永不消失、确认-token 打印而非执行等现象表明自动化流程的提示机制亟需持久化配置支持。

* **运行时调度事件溯源** – 随机失败在隔离测试中通过，CI 中反复出现，表明并行执行与调度协同仍有提升空间。

* **社区协作** – 外部开发者 CI 自动通过白名单、项目名称修正、贡献门户门户优化等工具链改进正在凝聚更大的贡献者社区。

---

*以上为 2026-09-13 DeepSeek-TUI 社区动态日报，旨在帮助开发者快速了解最新动态、关注热点 Issue，并把握产品未来的功能方向。*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*