# AI CLI 工具社区动态日报 2026-09-04

> 生成时间: 2026-09-04 02:03 UTC | 覆盖工具: 9 个

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

# 2026-09-04 AI CLI 工具生态横向对比分析报告

---

## 1. 生态全景

AI CLI 工具赛道已从"模型能力展示"阶段进入"工程化深耕"阶段，主流工具普遍将开发重心放在 **协议兼容性（MCP/ACP）、企业级治理（权限/合规/计费）、长会话稳定性（存储/内存/OOM）和跨平台一致性（Windows/SSH/受限环境）** 四大方向。与此同时，**Agent 化能力（后台任务、心跳监控、子代理、撤销/重做）** 正在成为差异化竞争的新焦点——开发者不再满足于"能聊天"，而是要求工具具备可观测、可恢复、可治理的生产级能力。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 版本发布 | 整体活跃度 |
|------|-------------|---------|----------|------------|
| **Claude Code** | ~50 活跃 | 5 | ✅ v2.1.260 | 🔥🔥🔥🔥🔥 |
| **OpenAI Codex** | 10 热点 | 4 | ✅ v0.153.1 / v0.153.2 | 🔥🔥🔥🔥 |
| **Gemini CLI** | 50 | 41 | ✅ v0.60.0-nightly | 🔥🔥🔥🔥🔥 |
| **GitHub Copilot CLI** | 10 精选 | 0 | ✅ v1.0.83-4 | 🔥🔥🔥 |
| **Kimi Code CLI** | 7 | 1 | ❌ 无 | 🔥🔥 |
| **OpenCode** | 10 热点 | 10 | ❌ 无 | 🔥🔥🔥🔥 |
| **Pi** | 10 热点 | 10 | ❌ 无 | 🔥🔥🔥 |
| **Qwen Code** | 10 热点 | — | ✅ v0.23.0 | 🔥🔥🔥 |
| **DeepSeek TUI** | 3 | 7 | ❌ 无（0.9.12 收尾） | 🔥🔥 |

**关键观察**：
- **Gemini CLI** 活跃度最高（50 Issues + 41 PRs），但 v0.60.0-nightly 的 changelog 较薄，存在"高活跃、低产出"特征
- **Claude Code** 在 Windows 平台相关 Issue 占比达 32%，反映其跨平台战略的痛点
- **Kimi CLI** 与 **DeepSeek TUI** 的活跃度相对较低，社区反馈量级较小

---

## 3. 共同关注的功能方向

### 🔴 撤销/回滚机制（最普遍刚需）
- **Codex #11626**：`/rewind` 命令（👍 211，社区呼声最高）
- **Kimi #1311**：对比 opencode 寻求撤销能力
- **Claude Code**：通过 diff panel 间接支持（v2.1.260）
- **OpenCode**：归档/恢复机制仍存在缺口（#12393）

### 🔴 Windows / 受限环境兼容性
- **Claude Code**：窗口置顶（#85891, 167👍）、安装失败（#49917）、Git Bash 权限误报（#91650, 52👍）
- **Codex**：WSL 创建项目失败（#41463）、Android 远程控制重连循环（#39954）
- **Copilot CLI**：PowerShell ConstrainedLanguage 模式报错（#4683）
- **Qwen Code**：Windows longpaths 配置缺失
- **OpenCode**：Ctrl+C 误退出（#2999, #7957 共 91 条评论）

### 🔴 会话存储与内存治理
- **Codex #24948**：日志膨胀至 700MB–2GB
- **Codex #34268**：multi-agent V2 存储爆炸 >100 GiB
- **Copilot CLI #4699**：长 `--resume` 会话 OOM 崩溃（4GiB 堆上限）
- **Pi #9097**：thinkingSignature 导致会话达 4.5MB

### 🔴 MCP/ACP 协议生态完善
- **Claude Code #91870**：Function Hooks 提案（让插件强大 10 倍）
- **Copilot CLI #4525**：MCP 初始化冲突导致 -32022 错误
- **Copilot CLI #4695**：OAuth Token 跨会话缓存失效
- **Gemini CLI**：MCP OAuth 强制 RFC 9207 issuer 校验（v0.60.0）
- **DeepSeek TUI #5863/#5864**：ACP 会话枚举/恢复缺失

### 🔴 安全加固
- **Gemini CLI**：NTFS 8.3 短名绕过（#29116）、checkpoint 目录穿越（#29192）、配置文件权限校验（#29115）
- **Qwen Code #10561**：Git fsmonitor/hooks 可被利用执行任意代码
- **Qwen Code #10936**：钉钉通道明文打印 clientSecret
- **Claude Code #87079**：`**` glob 模式零深度匹配的安全规则绕过

### 🟡 长任务/后台执行能力
- **OpenCode #47187**：Shell `run_in_background` 一等支持
- **OpenCode #47166/#47193**：心跳监控 + Timeline UI
- **OpenCode #47186**：Tasks 面板聚合子会话与权限等待

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | 插件生态、Hooks、子代理模型路由 | 追求高度定制化的个人/团队开发者 | Function Hooks 中间件化（Express/Koa 模式） |
| **OpenAI Codex** | 模型快速迭代、gpt-6-Astra、实验性 worktree | OpenAI 生态深度用户 | managed worktrees、code-mode 实验性强 |
| **Gemini CLI** | AST 感知工具、安全加固、长上下文 | 企业级 + 安全敏感场景 | MCP OAuth 严格化、FileSystemService 抽象 |
| **GitHub Copilot CLI** | MCP 生态、企业治理、模型池可配置 | GitHub 企业客户 | CIMD 标准、Remote Sessions、合规策略 |
| **Kimi Code CLI** | 第三方提供商、撤销/Mermaid 等增强 | 月之暗面生态 + 多模型用户 | OAuth 网关策略正成为争议焦点 |
| **OpenCode** | 后台任务、心跳监控、浏览器自动化插件 | 重度 Agent 工作流用户 | 2.0 架构重构 + 插件权限断言 API |
| **Pi** | 扩展 API、Provider 生态、TUI 性能 | 工具链集成商 + 高级用户 | 暴露 registerProvider 等扩展点，O(n²) 性能治理 |
| **Qwen Code** | TUI 渲染层迁移（ink → OpenTUI）、bwrap 沙箱 | 中文/通义生态 + Linux 沙箱偏好者 | 渲染层架构升级、DingTalk 集成 |
| **DeepSeek TUI** | ACP 协议完整化、Memory 能力 | IDE 编辑器前端集成商 | 0.9.12 UX 收尾、TUI crate 解耦 |

**关键差异**：
- **Claude Code / OpenCode** 在"插件扩展"路线上最为激进
- **Gemini CLI / Copilot CLI** 偏"企业治理 + 合规"
- **Codex / Pi** 强调"模型生态广度"
- **OpenCode** 在"Agent 长任务化"方向最为系统化
- **Kimi / Qwen / DeepSeek** 作为后起之秀，更关注"协议对齐"与"差异化功能"

---

## 5. 社区热度与成熟度

### 🏆 第一梯队：成熟 + 高活跃
- **Claude Code**：用户基数大（Windows 痛点反映渗透率），但 32% 的 Issue 集中在 Windows，说明成熟产品的跨平台债务
- **Gemini CLI**：Issue/PR 数量最高，但 nightly 版本节奏快于实际功能落地，存在"过度迭代"风险

### 🥈 第二梯队：快速迭代 + 方向明确
- **OpenAI Codex**：v0.153.x 快速小版本迭代，但 GPT-6-Astra 描述修正说明内部命名尚未稳定
- **OpenCode**：PR 流高度聚焦"Agent 化能力"，2.0 架构调整同步推进，处于产品形态重塑期
- **Copilot CLI**：MCP 相关 Issue 占主导，反映其在协议标准化上的追赶阶段

### 🥉 第三梯队：功能补齐期
- **Pi**：扩展 API 文档与"隐式契约"问题集中，反映生态早期特征
- **Qwen Code**：架构升级讨论（OpenTUI 迁移）+ 安全漏洞并行，治理压力较大
- **DeepSeek TUI**：0.9.12 收尾 + ACP 残缺，处于"可用但未达 IDE 集成门槛"阶段

### 🔰 第四梯队：早期生态
- **Kimi Code CLI**：每日仅 7 条 Issue 更新，社区规模较小但反馈聚焦（认证 + 一致性）

---

## 6. 值得关注的趋势信号

### 📡 趋势 1：MCP/ACP 成为生态分水岭
**信号**：所有工具都在补 MCP/ACP 能力，但实现质量参差不齐。Copilot CLI 在协议版本冲突上挣扎，DeepSeek TUI 缺会话枚举，Gemini CLI 在 OAuth 安全上加固。

**对开发者的参考价值**：选择 CLI 工具时，**MCP/ACP 实现的完整度**应成为核心评估指标——它直接决定 IDE 插件生态能否落地。

### 📡 趋势 2：撤销/恢复从"锦上添花"变为"核心刚需"
**信号**：Codex 的 `/rewind` 获得 👍 211，远超其他 Issue；Kimi 主动对标 opencode；Claude Code 通过 diff panel 间接回应。

**对开发者的参考价值**：评估工具时，应重点关注"操作可逆性"——包括对话上下文、文件修改、Agent 决策三个层面。

### 📡 趋势 3：存储/内存治理成为长会话瓶颈
**信号**：Codex 出现 100 GiB 级别会话存储，Copilot CLI 长会话 OOM，Pi 会话膨胀至 4.5MB。

**对开发者的参考价值**：**长会话不再是"加分项"，而是"可靠性指标"**。对于计划投入生产环境的团队，工具的会话治理能力（compaction、上限、清理）应纳入选型评估。

### 📡 趋势 4：Agent 化能力从"单轮工具调用"演进为"长任务编排"
**信号**：OpenCode 系统化推进后台 Shell、心跳、Tasks 面板；Claude Code 推子代理模型路由；Qwen Code 推多 Agent Board。

**对开发者的参考价值**：**后台任务 + 子会话追踪 + 心跳监控** 正在形成事实标准，未来 6 个月将成为 Agent CLI 的基线能力。

### 📡 趋势 5：跨平台债务集中爆发
**信号**：Windows 相关 Issue 在 Claude Code 占比 32%，OpenCode 的 Ctrl+C 问题获得 80 条评论 + 80👍，Copilot CLI 的 PowerShell 受限模式问题影响企业部署。

**对开发者的参考价值**：**不要被 macOS 演示蒙蔽**——Windows + 受限环境（企业 AppLocker/WDAC）是真实落地的拦路虎。评估时应优先验证目标平台的实际表现。

### 📡 趋势 6：安全从"事后补丁"转向"架构级防护"
**信号**：Qwen Code 发现 Git fsmonitor 可执行任意代码的高危漏洞；Gemini CLI 系统化推进 NTFS 短名、checkpoint 穿越、配置文件 ACL 三类攻击面修复；Claude Code 修复 `**` glob 安全规则绕过。

**对开发者的参考价值**：**安全审计正在成为 CLI 工具的常规 PR 类型**。使用第三方工具时，关注其安全 PR 节奏比关注功能 PR 更能反映项目的成熟度。

---

## 📌 决策建议

| 场景 | 推荐工具 | 核心理由 |
|------|----------|----------|
| **个人开发者 + 高度定制** | Claude Code | 插件/Hooks 生态最丰富 |
| **企业生产 + 安全合规** | Gemini CLI | 安全加固最系统化 |
| **GitHub 生态深度集成** | Copilot CLI | Remote Sessions + 策略治理 |
| **OpenAI 模型优先** | Codex | 实验性能力最快（worktree、code-mode） |
| **Agent 长任务工作流** | OpenCode | 后台任务 + 心跳 + Tasks 面板最完整 |
| **多模型 + 扩展开发** | Pi | registerProvider 等扩展 API 最开放 |
| **通义生态 + Linux 沙箱** | Qwen Code | bwrap 后端满足轻量隔离 |
| **IDE 编辑器集成** | DeepSeek TUI | ACP 方向明确，但需等待会话管理补齐 |

---

**报告说明**：本报告基于 2026-09-04 各工具 GitHub 社区动态横向对比，数据窗口为过去 24 小时。所有 Issue 链接均可追溯至原始仓库。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Hotspot Report (截至 2026-09-04)

## 1. 热门 Skills 排行
*基于 PR 结构关键度、相关 Issue 关联度及生态覆盖范围筛选的 7 个高关注度 PR（所有状态为 OPEN）*

| PR | 功能亮点 | 社区讨论热点 | 状态 |
|----|----------|--------------|------|
| **#1298** | `run_eval.py` 修复：解决 recall=0% 误报、Windows  stream reading、trigger detection 与 parallel workers 问题 | 直接关联 Issue **#556**（`claude -p` 0% trigger rate），是技术栈基础设施的核心修复 | [anthropics/skills #1298](https://github.com/anthropics/skills/pull/1298) |
| **#1628** | **Hivemind**：零成本多代理编排，将机械工作委派给 headless opencode worker，Claude Code 作为规划/审阅/合并中心 | 回应社区对多模型/多代理编排的迫切需求，与 AI Agent 赛道热点高度重合 | [anthropics/skills #1628](https://github.com/anthropics/skills/pull/1628) |
| **#1367** | **self-audit**：机械化文件验证 + 四维 reasoning 质量门（ damage-severity 优先级） | 串联 Issue **#1385**（Reasoning Quality Gate Pipeline），为技能交付提供可验证的质量保障 | [anthropics/skills #1367](https://github.com/anthropics/skills/pull/1367) |
| **#514** | **document-typography**：生成文档的排版质量控制（孤行、寡妇、编号错位） | 解决用户对 AI 生成文档可用性的常见痛点，属于文档类 Skill 的补缺式热点 | [anthropics/skills #514](https://github.com/anthropics/skills/pull/514) |
| **#486** | **ODT skill**：OpenDocument 创建/填充/转换 + ODT→HTML 解析 | 填补 Open-source 文档格式（ODF/ODS）的官方生态空白，兼容 LibreOffice/LibreOffice 工作流 | [anthropics/skills #486](https://github.com/anthropics/skills/pull/486) |
| **#723** | **testing-patterns**：全栈测试模型覆盖（Trophy 模型、单元测试、React Component Testing） | 直接对应社区测试自动化需求，是实现

---

# Claude Code 社区动态日报

**日期**: 2026-09-04
**版本**: v2.1.260

---

## 1. 今日速览

今日 Claude Code 发布了 **v2.1.260** 版本，新增全屏模式下的 diff panel 功能，帮助开发者更直观地追踪未提交的更改。社区方面，**Windows 平台问题**持续发酵，窗口置顶和安装失败相关 Issue 引发广泛讨论，共获超过 250 个👍。同时，Function Hooks 插件增强方案和 GitLab 集成请求成为本周最受关注的功能提案。

---

## 2. 版本发布

### v2.1.260

**更新内容**:

| 功能 | 描述 |
|------|------|
| **Diff Panel** | 全屏模式下新增 diff panel，可通过 `/diff` 命令切换，显示当前未提交的更改 |
| **成本分析增强** | `/cost` 命令现在会显示 prompt-cache miss 的可能原因（如工具定义变更、系统提示词变更、空闲超过 TTL） |

> 📎 [Release 页面](https://github.com/anthropics/claude-code/releases/tag/v2.1.260)

---

## 3. 社区热点 Issues

以下为过去 24 小时内讨论最活跃的 10 个 Issue：

| # | 标题 | 类型 | 评论 | 👍 | 链接 |
|---|------|------|------|-----|------|
| 1 | Windows 11 窗口始终置顶，无关闭选项 | Bug | 75 | 167 | [#85891](https://github.com/anthropics/claude-code/issues/85891) |
| 2 | Function Hooks：让插件强大 10 倍 | Enhancement | 56 | 31 | [#91870](https://github.com/anthropics/claude-code/issues/91870) |
| 3 | GitLab 集成（仓库连接、MR、移动端访问） | Enhancement | 51 | 131 | [#12346](https://github.com/anthropics/claude-code/issues/12346) |
| 4 | Windows 安装失败 AddPackage HRESULT 0x80073CF6 | Bug | 37 | 8 | [#49917](https://github.com/anthropics/claude-code/issues/49917) |
| 5 | Windows 窗口置顶问题（重复） | Bug | 16 | 37 | [#88093](https://github.com/anthropics/claude-code/issues/88093) |
| 6 | 子代理模型路由（本地 Ollama + Anthropic） | Enhancement | 12 | 43 | [#38698](https://github.com/anthropics/claude-code/issues/38698) |
| 7 | Android 输入在忙碌时被丢弃 | Bug | 11 | 8 | [#71603](https://github.com/anthropics/claude-code/issues/71603) |
| 8 | Windows Git Bash cd 权限误触发 | Bug | 9 | 52 | [#91650](https://github.com/anthropics/claude-code/issues/91650) |
| 9 | macOS 全屏模式下粘性标题消失 | Bug | 5 | 1 | [#91251](https://github.com/anthropics/claude-code/issues/91251) |
| 10 | 移动端未发送提示词丢失 | Bug | 2 | 1 | [#63975](https://github.com/anthropics/claude-code/issues/63975) |

### 重点 Issue 解读

#### 🔥 #85891 - Windows 置顶窗口问题（热点指数：⭐⭐⭐⭐⭐）
**问题**: Windows 11 上 Claude Desktop 窗口始终显示在其他应用之上，且无设置选项可关闭。
**社区反应**: 该 Issue 已获得 167 个👍，75 条评论，说明这是影响大量 Windows 用户的高频痛点。已有多个用户报告类似问题（#88093 为重复项），迫切需要官方修复或添加设置选项。

#### 💡 #91870 - Function Hooks 插件增强（热点指数：⭐⭐⭐⭐）
**提案内容**: 引入函数钩子机制，允许通过参数化的 `$` 对象修改 Claude Code 行为，采用类似 Express/Koa 的中间件模式。
**价值**: 若实现，将大幅提升插件系统的灵活性，被作者称为"让插件强大 10 倍"的方案。

#### 🔧 #12346 - GitLab 集成（热点指数：⭐⭐⭐⭐）
**需求**: 支持 GitLab 仓库连接、Merge Requests 管理和移动端访问。
**社区反应**: 131 个👍表明企业用户对 GitLab 生态集成有强烈需求。

#### 🐛 #91650 - Windows Git Bash 权限误报（热点指数：⭐⭐⭐）
**问题**: 当存在 `Read()` 拒绝规则时，对绝对路径执行 `cd` 会误触发安全提示。
**技术细节**: 影响版本 2.1.257-2.1.259，已有可复现步骤。

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 链接 |
|---|------|------|------|------|
| 1 | 修复安全指南 `**` glob 模式零深度路径匹配 | anishsamant | Open | [#87079](https://github.com/anthropics/claude-code/pull/87079) |
| 2 | 更新 /frontend-design SKILL.md | ant-kurt | Closed | [#91894](https://github.com/anthropics/claude-code/pull/91894) |
| 3 | 代码审查 README 与当前验证命令对齐 | Codeturion | Open | [#79150](https://github.com/anthropics/claude-code/pull/79150) |
| 4 | validate-agent.sh 修复：不因首个警告中止 | bcherny | Open | [#89404](https://github.com/anthropics/claude-code/pull/89404) |
| 5 | 插件验证脚本修复：避免首个错误中止 | wellkilo | Open | [#66416](https://github.com/anthropics/claude-code/pull/66416) |

### PR 详情

#### 🛡️ #87079 - 安全修复
修复 `**` glob 模式在 `security-patterns.json` 中无法匹配顶层文件的问题。当前实现依赖 `fnmatch`，导致 `**/*.ts` 会错误地排除顶级目录文件，存在安全规则被绕过的风险。

#### 📝 #79150 - 文档同步
更新 code-review 技能 README 以匹配实际的验证流程，解决文档与实现不一致的问题。

#### 🔧 #89404 / #66416 - 插件开发工具链修复
修复 `validate-agent.sh` 和 hook-linter 等脚本因 `set -euo pipefail` 导致首个错误即中止的问题，提升开发者体验。

---

## 5. 功能需求趋势

基于过去 30 条活跃 Issue 分析，社区最关注的功能方向如下：

```
┌─────────────────────────────────────────────────────────────┐
│                    功能需求分布                              │
├─────────────────────────────────────────────────────────────┤
│  Windows 平台支持          ████████████████████  32%         │
│  插件/Hooks 系统           ████████              16%         │
│  IDE 集成                  ██████                12%         │
│  版本控制集成              █████                 10%        │
│  移动端支持                ████                  8%          │
│  子代理/多模型路由         ███                   6%          │
│  安全/权限管理             ███                   6%          │
│  其他                      ████                  10%         │
└─────────────────────────────────────────────────────────────┘
```

### 关键趋势

| 趋势 | 说明 |
|------|------|
| **Windows 平台问题突出** | 置顶窗口、安装失败、Git Bash 权限问题占据大量 Issue，Windows 用户体验亟待改善 |
| **插件生态扩展** | Function Hooks 提案获得积极响应，社区希望深度定制 Claude Code 行为 |
| **企业级集成需求** | GitLab 集成呼声高，反映企业开发场景的实际需求 |
| **跨平台一致性** | macOS/Linux/Windows 三平台行为差异问题（如 UI 渲染、安全规则）持续存在 |

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **Windows 安装与运行**
   - 安装包状态不一致导致安装失败
   - 窗口置顶行为无法关闭
   - Git Bash 权限规则误触发

2. **安全/权限系统**
   - Read() 规则与 cd 命令交互异常
   - 安全规则 glob 匹配逻辑 bug

3. **移动端体验**
   - Android/iOS 输入丢失问题
   - 后台切换导致提示词被静默丢弃

4. **插件开发体验**
   - 验证脚本行为不符合预期
   - 文档与实现不一致

### 💡 高价值建议

| 需求 | 背景 | 预期影响 |
|------|------|----------|
| Function Hooks | 现有插件系统能力受限 | 提升插件生态深度 |
| GitLab 集成 | 企业用户依赖 GitLab 工作流 | 扩大用户群体 |
| 子代理模型路由 | 不同子任务需不同模型能力 | 优化成本与效果 |
| 持久化上下文 | CLI 重启后记忆丢失 | 改善多会话开发体验 |

---

**📊 数据统计**
- 今日新增 Issue: 约 15 条
- 今日活跃 Issue: 50 条
- 今日新增 PR: 5 条
- 总评论增长: 约 300+ 条

---

*本报告由 Claude Code 社区数据分析生成 | 覆盖时间: 2026-09-03 ~ 2026-09-04*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：2026-09-04** | 数据来源：[github.com/openai/codex](https://github.com/openai/codex)

---

## 1. 今日速览

Codex 0.153.2 正式发布，核心修复为 GPT-6-Astra Fast tier 的速度描述（1.5x → 2x）。同时，0.153.1 引入了通过 API 静默配置 GPT-6-Astra 的能力，标志着该模型开始进入多平台目录（Amazon Bedrock）。社区层面，Windows 平台稳定性问题持续霸榜，存储膨胀与配额异常成为最突出的开发者痛点。

---

## 2. 版本发布

| 版本 | 类型 | 关键更新 |
|------|------|----------|
| **rust-v0.153.2** | 稳定版 | 修正 GPT-6-Astra Fast tier 描述为 "2x speed, increased usage"（仅 UI 文案，不影响实际行为）[#42632](https://github.com/openai/codex/pull/42632) |
| **rust-v0.153.1** | 稳定版 | 新增 API 配置 GPT-6-Astra 的能力，无需修改默认模型或在模型选择器中展示 [#42605](https://github.com/openai/codex/pull/42605) |
| rust-v0.154.0-alpha.1~3 | 预发布 | alpha 系列，无显著 changelog |

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #41049 — code-mode host 握手失败，5.6 模型异常
- **热度**：45 条评论 | 👍 1
- **平台**：Windows 10 | 版本 26.820.71523
- **问题**：本地命令执行通道在初始化握手阶段异常退出，导致无法自动读取目录。与 gpt-5.6 模型强相关。
- **为何重要**：直接影响 Codex Desktop 核心交互流程，属于阻塞性 bug。
- [查看详情](https://github.com/openai/codex/issues/41049)

### 🟡 #11626 — CLI 新增 /rewind 断点恢复（社区呼声最高）
- **热度**：40 条评论 | 👍 **211**
- **诉求**：在 TUI 中实现原生 `/rewind` 命令，同时回滚对话上下文和 Codex 已应用的代码编辑。
- **为何重要**：这是目前获得最多点赞的功能需求，远超其他 issue，说明"撤销"能力是开发者刚需。
- [查看详情](https://github.com/openai/codex/issues/11626)

### 🟡 #24948 — 会话日志膨胀至 700MB–2GB
- **热度**：31 条评论 | 👍 4
- **问题**：compaction 历史和原始工具输出反复写入，导致日志文件急剧增长。macOS 平台，gpt-5.5 模型。
- **为何重要**：长期运行的会话可能撑爆磁盘，属于数据治理层面的严重缺陷。
- [查看详情](https://github.com/openai/codex/issues/24948)

### 🔴 #41463 — Windows + WSL 无法创建项目
- **热度**：23 条评论 | 👍 12
- **问题**：AbsolutePathBuf 在没有 base path 的情况下被反序列化，导致 Codex Desktop on Windows with WSL2 无法创建项目。
- **为何重要**：WSL 是 Windows 上 Codex 的核心使用路径，此问题直接阻断核心工作流。
- [查看详情](https://github.com/openai/codex/issues/41463)

### 🔴 #39954 — Windows + Android 远程控制重连循环
- **热度**：23 条评论 | 👍 0
- **问题**：远程控制在 WebSocket 连接成功后进入重连循环，Android 客户端无法稳定使用。
- **为何重要**：远程控制是 Codex 生态的关键扩展，此问题使该功能在 Windows 上完全不可用。
- [查看详情](https://github.com/openai/codex/issues/39954)

### 🟡 #41220 — 配额/用量异常消耗（跨报告汇总）
- **热度**：18 条评论 | 👍 9
- **问题**：多个用户报告 Codex 订阅额度或购买积分消耗速度异常，存在用量统计不一致的情况。
- **为何重要**：直接影响付费用户的信任和经济利益，属于高敏感度问题。
- [查看详情](https://github.com/openai/codex/issues/41220)

### 🔴 #34268 — Multi-agent V2 会话存储爆炸（>100 GiB）
- **热度**：13 条评论 | 👍 6
- **问题**：使用 Ultra reasoning + multi-agent V2 的长会话在 `$CODEX_HOME/sessions` 下产生约 110 GiB 存储，增长呈乘法效应而非线性。
- **为何重要**：极端场景下可直接导致磁盘满载，且与 subagent 的输出量无关，疑似架构设计缺陷。
- [查看详情](https://github.com/openai/codex/issues/34268)

### 🟢 #2379 — TUI 撤销/重做输入文本
- **热度**：11 条评论 | 👍 **32**
- **诉求**：Cmd-Z / Shift-Cmd-Z 撤销或重做在 prompt 中输入的文本。
- **为何重要**：高频基础交互需求，实现成本低但体验提升显著。
- [查看详情](https://github.com/openai/codex/issues/2379)

### 🔴 #34337 — CLI 和 Desktop 会话存储无警告增长
- **热度**：10 条评论 | 👍 2
- **问题**：CLI 与 Desktop 共享本地 session 存储， silently 消耗数十至数百 GiB，甚至 TiB 级别。
- **为何重要**：与 #34268、#24948 构成存储问题的"三重奏"，说明会话管理缺乏上限和清理机制。
- [查看详情](https://github.com/openai/codex/issues/34337)

### 🔴 #41960 — Windows Pets 无响应
- **热度**：10 条评论 | 👍 10
- **问题**：Windows 11 上的 Codex Pets 对点击和拖拽输入完全没有反应。
- **为何重要**：Pets 是 Codex Desktop 的差异化功能，完全失效影响用户体验和产品口碑。
- [查看详情](https://github.com/openai/codex/issues/41960)

---

## 4. 重要 PR 进展（Top 10）

| PR | 标题 | 类型 | 说明 |
|----|------|------|------|
| [#42652](https://github.com/openai/codex/pull/42652) | Add managed worktrees to `codex exec` | 🆕 实验性功能 | 为 `codex exec` 添加 Git worktree 管理，每个会话在独立 worktree 中运行，绑定 checkout 作为工作目录 |
| [#42650](https://github.com/openai/codex/pull/42650) | Render assistant file citations as local links | 🐛 修复 | 将 assistant Markdown 中的 `codex-file-citation` 指令转换为本地文件链接，支持 Unicode、Windows 路径分隔符 |
| [#42641](https://github.com/openai/codex/pull/42641) | Restore the inline TUI after full-screen overlays | 🐛 修复 | 离开全屏 overlay 后恢复 inline TUI 时，清除残留 overlay 单元格并重置滚动位置 |
| [#42640](https://github.com/openai/codex/pull/42640) | Harden TUI parsing of assistant markup | 🐛 修复 | 新增共享的 assistant 指令解析器，统一处理引用属性

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-09-04  
**项目**: google-gemini/gemini-cli  
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

今日社区活跃度保持稳定，共新增/更新 50 个 Issues 和 41 个 Pull Requests。**版本 v0.60.0-nightly.20260904 正式发布**，核心修复了 MCP OAuth 流程中 RFC 9207 规范的 issuer 标识问题。社区讨论焦点集中在 **Agent 行为可靠性**（subagent 最大轮次处理、工具输出无限制导致会话卡死）和 **安全性增强**（checkpoint 路径遍历、凭证泄露）两个方向。

---

## 2. 版本发布

### 🔗 v0.60.0-nightly.20260904.g87a9c71d5
| 项目 | 内容 |
|------|------|
| **发布类型** | Nightly Build |
| **主要变更** | 修复 MCP OAuth 流程中 RFC 9207 issuer 标识强制校验 |
| **PR** | [#29117](https://github.com/google-gemini/gemini-cli/pull/29117) by @jvargassanchez-dot |
| **备注** | 同期还完成了 v0.59.0-preview.0 的 changelog 合并（[#29159](https://github.com/google-gemini/gemini-cli/pull/29159)） |

---

## 3. 社区热点 Issues（TOP 10）

| # | Issue | 关键信息 | 重要性分析 |
|---|-------|----------|------------|
| 1 | **[Subagent MAX_TURNS 后误报成功](https://github.com/google-gemini/gemini-cli/issues/22323)** | 🔥 13条评论 \| P1 / agent | **严重缺陷**：subagent 在达到最大轮次限制时仍报告 `status: "success"` 和终止原因为 `GOAL`，掩盖了任务未完成的事实，导致用户误判。社区反馈强烈，建议增加显式状态标识。 |
| 2 | **[终端拖拽图片/文件支持](https://github.com/google-gemini/gemini-cli/issues/27855)** | 9条评论 \| P3 / enhancement | 功能增强提案，对标 Claude Code 的多模态交互能力。实现后将提升用户体验，但优先级为 P3，预计短期内不会纳入。 |
| 3 | **[AST 感知文件读取/搜索/映射调研](https://github.com/google-gemini/gemini-cli/issues/22745)** | 7条评论 \| P2 / feature | 长期技术路线图 EPIC。AST 感知工具可精确方法边界，减少工具调用次数和 token 消耗，对大型代码库分析场景价值显著。 |
| 4 | **[Gemini 不主动使用 Skills/Sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)** | 6条评论 \| P2 / agent | 用户痛点：模型在相关场景下不会自动调用自定义 skills（如 gradle/git），需显式指令。影响自动化流程效率。 |
| 5 | **[Auto Memory 日志安全与重试机制](https://github.com/google-gemini/gemini-cli/issues/26525)** | 5条评论 \| P2 / security | 安全相关：Auto Memory 读取本地转录后发送到提取 agent，敏感信息在到达重写模块前已在模型上下文中存在，需确定性强占机制。 |
| 6 | **[LLMResponse 文档缺失字段](https://github.com/google-gemini/gemini-cli/issues/28048)** | 4条评论 \| P3 / docs | 文档缺陷：`usageMetadata` 在 hooks 文档中仅显示 `totalTokenCount`，实际 hook 接收 `promptTokenCount` 和 `candidatesTokenCount`。 |
| 7 | **[Shell 命令执行卡在"等待输入"](https://github.com/google-gemini/gemini-cli/issues/25166)** | 4条评论 \| P1 / core | **P1 缺陷**：简单 shell 命令完成后仍挂起，显示"Awaiting user input"，严重影响交互体验。 |
| 8 | **[Browser Agent 缺少会话接管机制](https://github.com/google-gemini/gemini-cli/issues/22232)** | 4条评论 \| P3 / browser | 增强提案：persistent 模式下浏览器配置锁定时采用 fail-fast，建议增加自动接管和锁恢复能力。 |
| 9 | **[Wayland 环境 Browser Subagent 失败](https://github.com/google-gemini/gemini-cli/issues/21983)** | 4条评论 \| P1 / browser | P1 兼容性问题：Wayland 环境下浏览器 agent 无法正常运行，需平台特定适配。 |
| 10 | **[Checkpoint 损坏导致 resume 崩溃](https://github.com/google-gemini/gemini-cli/issues/29194)** | 2条评论 \| P2 / core | **关键修复**：checkpoint 文件中 `history` 字段为非数组（如 `null` 或数字）时，`/resume` 命令抛出原始 TypeError 并崩溃。已有对应 PR [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) 在审。 |

---

## 4. 重要 PR 进展（TOP 10）

| # | PR | 规模 | 状态 | 关键内容 |
|---|-----|------|------|----------|
| 1 | **[feat: 添加 gemini-3.8-flash 作为默认 flash 模型](https://github.com/google-gemini/gemini-cli/pull/29172)** | L | OPEN | 注册 `gemini-3.5-flash-lite` 至 `gemini-3.8-flash` 系列，并将 3.8 提升为默认 flash 模型。影响所有默认使用 flash 的场景。 |
| 2 | **[fix: 避免持久化中断响应占位符](https://github.com/google-gemini/gemini-cli/pull/28939)** | L | CLOSED | P1 修复：中断的工具响应被持久化为 `[The previous response was interrupted...]` 文本，后续模型调用可能重复该占位符，导致会话异常。 |
| 3 | **[fix: 移除不安全的 diff.external 覆盖](https://github.com/google-gemini/gemini-cli/pull/28930)** | M | CLOSED | P1 安全修复：PR #28792 添加的空 `diff.external` 配置被 Git 误解为字符串而非取消，导致外部 diff 工具在沙箱内意外执行。 |
| 4 | **[fix: 保持 GIT_CONFIG_* 环境三元组一致](https://github.com/google-gemini/gemini-cli/pull/28938)** | L | CLOSED | P1 修复：敏感 Git 配置重写后导致不完整的编号键值对，Git 无法解析。确保 `ShellExecutionService` 不在重写后恢复敏感值。 |
| 5 | **[fix: SSE 最终事件 flush 处理](https://github.com/google-gemini/gemini-cli/pull/29106)** | M | OPEN | 流式响应解析器在连接无尾随空行时静默丢弃最终缓冲事件，导致 `finishReason`/usage 元数据丢失。 |
| 6 | **[fix: read_file 通过 FileSystemService 路由](https://github.com/google-gemini/gemini-cli/pull/29110)** | M-L | OPEN | `read_file` 直接读取磁盘而忽略注入的 `FileSystemService`，与 `write_file`/`replace` 行为不一致。ACP 远程客户端无法控制文件读取路径。 |
| 7 | **[fix: 配置文件权限和所有权严格校验](https://github.com/google-gemini/gemini-cli/pull/29115)** | L | OPEN | 安全增强：加载系统级配置文件前验证文件所有权和 ACL，防止权限提升攻击。支持 Windows 和 POSIX 平台。 |
| 8 | **[fix: 缓解 NTFS 8.3 短名称路径问题](https://github.com/google-gemini/gemini-cli/pull/29116)** | M | OPEN | Windows 安全增强：处理 SFN（如 `git~1`、`env~1`）绕过 AllowedPathChecker 的路径遍历和黑名单限制。 |
| 9 | **[fix: checkpoint 历史非数组降级处理](https://github.com/google-gemini/gemini-cli/pull/29195)** | S | OPEN | P2 修复：损坏的 checkpoint 文件不再导致 `TypeError` 崩溃，而是降级为空 checkpoint，匹配已有不可解析文件的处理逻辑。 |
| 10 | **[fix: 隔离 checkpoint 目录内 legacy raw tag 路径](https://github.com/google-gemini/gemini-cli/pull/29192)** | M | OPEN | P1 安全修复：`/chat delete <tag>` 使用 `../` 可删除 checkpoints 目录外的文件，存在路径穿越风险。 |

---

## 5. 功能需求趋势

基于过去 24 小时 Issues 分析，社区关注的功能方向可归纳如下：

| 趋势 | 描述 | 相关 Issue |
|------|------|------------|
| **🤖 Agent 智能化** | 提升 subagent 任务完成状态准确性、自动调用 skills/sub-agents 的时机判断、减少误报 | #22323, #21968, #22745 |
| **🔒 安全加固** | 路径遍历防护、凭证隔离、环境变量沙箱、checkpoint 完整性验证 | #29192, #29115, #29116, #26525 |
| **🖥️ 跨平台兼容** | Wayland 浏览器支持、Windows 长路径、NTFS 特性适配 | #21983, #28926 |
| **⚡ 性能与稳定性** | Shell 执行流控、大工具输出截断、终端重绘优化、checkpoint 健壮性 | #25166, #27738, #21924 |
| **📡 新模型/工具支持** | Gemini 3.8 系列集成、AST 感知工具、拖拽多模态交互 | #29172, #22745, #27855 |
| **🔧 开发体验** | 文档准确性、Slash 命令解析优化、hooks API 完善 | #28048, #28257 |

---

## 6. 开发者关注点

根据 Issues 和 PR 中的开发者反馈，以下是当前社区最集中的痛点：

### 🔴 高优先级痛点

1. **Agent 状态可信度**
   - subagent 在资源限制时仍报告成功（P1 #22323）
   - 中断响应的占位符污染会话（P1 #28939，已修复）

2. **Shell 交互可靠性**
   - 命令完成后卡在"等待输入"状态（P1 #25166）
   - 大输出（>1MB）导致会话永久卡死（P1 #27738）

3. **路径安全**
   - checkpoint 目录穿越漏洞（P1 #29192，已 PR）
   - NTFS 8.3 短名称绕过黑名单（P1 #29116）

### 🟡 中等关注需求

4. **Auto Memory 机制优化**
   - 低信号会话无限重试（#26522）
   - 无效补丁静默跳过（#26523）

5. **文档与配置准确性**
   - Hooks API 文档缺失字段说明（#28048）
   - Windows longpaths 配置缺失（#28926）

6. **多模态交互增强**
   - 终端拖拽文件/图片支持（#27855）
   - 浏览器 agent 会话恢复能力（#22232）

---

**📊 统计概览**

| 指标 | 数值 |
|------|------|
| Issues 更新 | 50 条 |
| PRs 更新 | 41 条 |
| P1 Issues | 6 个 |
| P2 Issues | 15 个 |
| 安全相关 PR | 5 个 |
| 新模型支持 PR | 1 个 |

---

*报告生成时间: 2026-09-04 | 数据窗口: 过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 · 2026-09-04

> 数据来源：`github.com/github/copilot-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **版本发布**：发布 **v1.0.83-4**，重点新增 **MCP OAuth 签名的 CIMD (Client ID Metadata Document) 支持**，并优化了大型会话恢复时的输入响应速度、移除了默认的中断会话恢复提示。
- **社区热点**：MCP 协议兼容性问题持续发酵（#4525 遗留初始化冲突、#4695 OAuth Token 缓存复用失效），企业级功能（Remote Sessions、托管遥测配置）与 Windows 受限语言模式下的兼容性（#4683）是近期高频反馈领域。
- **无 PR 更新**：过去 24 小时无 Pull Request 活动，开发重心集中在 Issue 分流与修复验证。

---

## 2. 版本发布

### `v1.0.83-4` (2026-09-03 发布)
| 类型 | 内容 | 影响 |
|------|------|------|
| **Added** | **CIMD 支持**：为 MCP OAuth 签名流程引入 Client ID Metadata Document 标准。 | 解决 MCP 服务端识别客户端身份的标准化问题，增强 OAuth 安全性与互操作性。 |
| **Improved** | **启动体验**：默认移除“中断会话恢复”提示；大型会话恢复时输入提示符更早恢复响应。 | 减少启动干扰，显著提升长会话（上下文窗口大）的交互流畅度。 |
| **Fixed** | **沙箱文件工具**：修复沙箱环境下文件工具读取开发者工具配置不一致的问题。 | 保障 Agent 在受限环境下正确加载本地配置（如 `.github/instructions`）。 |

> 🔗 [Release v1.0.83-4](https://github.com/github/copilot-cli/releases/tag/v1.0.83-4)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 标签 | 评论/👍 | 核心看点 | 链接 |
|---|------|------|---------|----------|------|
| **#4525** | **1.0.81-1 发送遗留 `initialize` 导致 MCP -32022 错误** | `area:mcp` | 6 / 3 | **阻塞级**：现代 `server/discover` 成功后仍发送旧版 `initialize`，与 Python MCP SDK 2.0 双时代运行器冲突。MCP 集成核心障碍。 | [#4525](https://github.com/github/copilot-cli/issues/4525) |
| **#4695** | **MCP HTTP 服务器 OAuth Token 跨会话复用失败（缓存键重复）** | `triage` | 5 / 0 | **数据丢失风险**：PKCE 公共客户端模式下缓存键哈希计算不稳定，导致重复认证、Token 浪费。 | [#4695](https://github.com/github/copilot-cli/issues/4695) |
| **#3442** | **v1.0.51 企业版 Remote Sessions 未启用提示** | `area:sessions, area:enterprise` | 6 / 10 | **企业采用拦截器**：管理员策略与 CLI 判断逻辑不符，导致合规环境无法使用远程会话。高赞关注。 | [#3442](https://github.com/github/copilot-cli/issues/3442) |
| **#2861** | **`/compact` 在 Opus 4.6 上连续 3 次返回空响应失败** | `area:context-memory, area:models` | 5 / 4 | **模型兼容性**：长上下文压缩在特定模型版本上不稳定，影响长会话可用性。 | [#2861](https://github.com/github/copilot-cli/issues/2861) |
| **#4680** | **CLI 向自定义 OpenAI 兼容端点发送错误 Model ID (`gpt-5.4-nano`)** | `triage` | 3 / 0 | **BYOK 破坏**：配置非 OpenAI 模型名时，请求体被硬编码覆盖，导致自托管/代理模型调用失败。 | [#4680](https://github.com/github/copilot-cli/issues/4680) |
| **#4683** | **Windows PowerShell ConstrainedLanguage 模式下每条命令报 `$host.SetShouldExit()` 错误** | `area:platform-windows, area:tools` | 2 / 0 | **企业环境噪音**：AppLocker/WDAC 受限模式下退出码追加逻辑触发安全拦截，日志刷屏。 | [#4683](https://github.com/github/copilot-cli/issues/4683) |
| **#4218** | **允许用户配置 Auto 模式可用模型池** | `area:models` | 1 / 13 | **高需求功能**：成本控制与行为可预测性诉求极强（👍13），期望在策略层面裁剪模型选择范围。 | [#4218](https://github.com/github/copilot-cli/issues/4218) |
| **#4699** | **长 `--resume` 会话 OOM 崩溃（4GiB 堆上限），Core Dump 写入 CWD** | `area:sessions, area:context-memory` | 0 / 2 | **稳定性隐患**：大会话内存泄漏/增长失控，且崩溃产物污染工作目录。 | [#4699](https://github.com/github/copilot-cli/issues/4699) |
| **#4710** | **空闲会话中 `copilot-file-search` 线程暴走占 CPU、写无界日志** | `triage` | 0 / 0 | **资源泄漏**：后台索引任务未随会话 Idle 正确终止，导致持续占用资源。 | [#4710](https://github.com/github/copilot-cli/issues/4710) |
| **#232** | **新增 `--system-prompt` 参数支持全局系统指令** | `area:configuration` | 4 / 10 | **长期高呼声**：缺乏跨仓库、跨会话的全局系统提示词配置入口，仅支持 Repo 级指令文件。 | [#232](https://github.com/github/copilot-cli/issues/232) |

---

## 4. 重要 PR 进展
> **过去 24 小时无 Pull Request 更新。**  
> 建议关注后续针对 #4525 (MCP 初始化)、#4680 (Model ID 硬编码)、#4683 (Windows 受限模式) 的修复 PR。

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issues | 社区呼声强度 | 说明 |
|----------|-------------|--------------|------|
| **MCP 生态深度集成与稳定性** | #4525, #4695, #4655, #4708 | ⭐⭐⭐⭐⭐ | 协议版本冲突、OAuth 缓存、插件发现、Subagent 技能隔离等问题集中爆发，是当前最大技术债。 |
| **企业级治理与合规** | #3442, #4669, #4715, #4700 | ⭐⭐⭐⭐ | Remote Session 策略、托管遥测配置冲突、Marketplace 隔离、ACP 模式配置继承。 |
| **模型选择自主权与成本控制** | #4218, #4680, #4703 | ⭐⭐⭐⭐ | Auto 模式模型池裁剪、BYOK 端点模型名透传、单会话多 Agent 多 Provider 支持。 |
| **长会话/大上下文性能与稳定性** | #2861, #4699, #4710, #4714 | ⭐⭐⭐⭐ | 压缩失败、OOM 崩溃、后台线程泄漏、会话恢复慢无 Loading UI。 |
| **Windows 企业环境兼容性** | #4683, #4702, #4701 | ⭐⭐⭐ | ConstrainedLanguage 报错、路径分隔符去重失效、权限预览路径截断。 |
| **全局/跨项目配置能力** | #232, #4704, #4712 | ⭐⭐⭐ | 系统级 Prompt、按 CWD 过滤会话、Usage 指标作用域澄清。 |

---

## 6. 开发者关注点与痛点总结

1. **MCP 协议栈脆弱性**：从初始化握手（双时代冲突）、OAuth 缓存键设计、到插件/技能发现机制，MCP 相关 Issue 占比高且多为 **阻塞性 Bug**，开发者期望尽快达到“开箱即用”稳定态。
2. **企业环境“最后一公里”缺口**：Remote Session 策略判断、托管配置覆盖冲突、PowerShell 受限模式、Marketplace 隔离——均为大规模落地的硬性门槛。
3. **模型路由的不透明与不可控**：Auto 模式“全量可用”导致成本不可预期；自定义端点 Model ID 被覆盖；单进程单 Provider 限制多 Agent 协作。
4. **资源管理粗放**：长会话内存无上限保护、空闲态后台任务不收敛、崩溃产物落盘位置不当，暴露出长时间运行场景下的工程化欠缺。
5. **跨平台路径/环境一致性**：Windows 路径分隔符导致配置去重失效、权限预览截断路径、ACP 模式忽略 `skillDirectories`，细节体验在混合 OS 团队中被放大。

---

> **下一步建议关注**：v1.0.83-4 后续热修复是否覆盖 #4525/#4680/#4683；`area:mcp` 里程碑的 Issue 收敛进度；`#4218` (Auto 模型池配置) 是否纳入近期规划。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI – 2026 年 9 月 4 日社区日报

### 1. 今日速览
- 昨日共有 **7 起 Issues** 更新，1 起 PR 合并，均为 bug 修复和开发中功能跟进。已关闭的 bug（#290、#1293）反映了用户在使用 OpenRouter 自定义模型和远程 SSH 环境时遇到的认证及网络问题。新增的 ACP 认证网关 Issue #2633 引发了关于第三方提供商授权流程的讨论。开发人员积极倡导的典型功能包括撤销操作、内嵌 Mermaid 图表和 `--agent-file` 的一致性支持。

### 2. 版本发布
- **无**（过去 24 小时内无新版本发布）。

### 3. 社区热点 Issues（共 7 条，已按影响力和讨论热度排序）

| # | 标题与标签 | 状态 | 重要性 | 社区反馈 |
|---|-----------------|--------|--------|------------------|
| #290 | **[bug] 使用 OpenRouter 自定义模型时返回 401** | **已关闭** | 高 – 影响使用 `openai/gpt-5.1-codex` 等自定义模型的用户，尤其是在 Windows 环境中。OpenRouter 认证失败会导致 CLI 完全无法工作。 | 3 个评论，0 个赞同（问题已修复）。 |
| #1293 | **[bug] 远程 SSH 服务器上使用 Kimi CLI 时无法通讯** | **已关闭** | 高 – 没有图形界面的服务器用户无法与 Kimi CLI 建立连接。 | 1 个评论，1 个赞同（问题已修复）。 |
| #2633 | **ACP 认证网关（1.17+）阻止了不需要 Kimi 账户的自定义提供商** | **开启中** | 中-新发布的 1.17 版强制要求使用持久化的 Kimi OAuth token 对会话进行身份验证，可能导致第三方 AI 提供商无法正常工作。 | 0 个评论，0 个赞同（讨论中）。 |
| #1311 | **[增强] 希望增加撤销功能** | **已关闭** | 中-用户对比了 `opencode` 中强大的撤销功能，并希望 Kimi CLI 也能拥有类似的功能。 | 0 个评论，1 个赞同（已记录功能需求）。 |
| #1310 | **[增强] 内嵌 Mermaid 图表到 webui** | **已关闭** | 中-社区希望直接在 webui 中渲染 Mermaid 图表，解析逻辑已经存在。 | 0 个评论，1 个赞同（已存在实现）。 |
| #1309 | **[增强] 可选的 Openclaw-like 功能** | **已关闭** | 低-提议增加心跳、定时任务、记忆等功能，可能与 nanobot 进行轻量级集成。 | 0 个评论，0 个赞同。 |
| #1307 | **[增强] `--agent-file` for `kimi web` as in the `kimi`** | **已关闭** | 中-`kimi web` 缺少对 `--agent-file` 的支持，导致无法与命令行子命令保持一致。 | 0 个评论，3 个赞同（已实现）。 |
| *（以上为过去 24 小时内更新的 7 个 Issues）* | | | | |

*如需查看 Issue 的完整说明，请访问相关 GitHub 链接：[#290](https://github.com/MoonshotAI/kimi-cli/issues/290)、[#1293](https://github.com/MoonshotAI/kimi-cli/issues/1293)、[#2633](https://github.com/MoonshotAI/kimi-cli/issues/2633)、[#1311](https://github.com/MoonshotAI/kimi-cli/issues/1311)、[#1310](https://github.com/MoonshotAI/kimi-cli/issues/1310)、[#1309](https://github.com/MoonshotAI/kimi-cli/issues/1309)、[#1307](https://github.com/MoonshotAI/kimi-cli/issues/1307)。*

### 4. 重要 PR 进展（共 1 条）

| # | 标题 | 状态 | 功能/修复说明 |
|---|-------|--------|-------------------|
| #2332 | **fix(kimi): 动态限制补全预算** | **已合并** | 修复了 Kimi 提供商中硬编码 `max_tokens = 32000` 的问题，现在为每次请求计算一个适合当前上下文窗口的 `max_completion_tokens`。这将提高令牌使用效率，减少超额使用风险。 |
| *（以上是过去 24 小时内显示的唯一 PR）* | | | |

*PR 的完整说明请参阅：[#2332](https://github.com/MoonshotAI/kimi-cli/pull/2332)。*

### 5. 功能需求趋势

| 趋势方向 | 体现该趋势的 Issues | 社区期待 |
|------------|--------------------------|-------------------|
| **CLI 核心功能增强** | #1311 (撤销功能) | 更友好的编辑体验，模仿“撤销”、“重做”操作。 |
| **Web UI 功能一致性** | #1307 (`--agent-file` for webui) | 确保 `kimi web` 与 `kimi` 子命令拥有相同的参数集。 |
| **文档可视化支持** | #1310 (内嵌 Mermaid) | 在 webui 中直接渲染 Mermaid 图表，改善文档展示。 |
| **第三方提供商支持** | #2633 (ACP 认证网关) | 允许在没有 Kimi 账户的情况下使用外部 AI 提供商。 |
| **远程服务器就绪度** | #1293 (SSH 连接问题) | 提升 CLI 在无 GUI 服务器上的可靠性。 |
| **高级自动化功能** | #1309 (Openclaw-like: 心跳、定时任务、记忆) | 类似于 Kimi.com 的高级功能，但针对 CLI。 |
| **认证与令牌管理** | #290 (OpenRouter 401) | 更稳定的认证流程，支持更多模型。 |
| **性能优化** | #2332 (动态预算限制) | 更智能地管理令牌分配。 |

### 6. 开发者关注点

| 关注点 | 相关 Issue/反馈 | 痛点/高频需求 |
|------------|--------------------------|--------------------------|
| **认证故障** | #290 (#401 错误) | 用户使用自定义模型（如 `openai/gpt-5.1-codex`）时，OpenRouter 认证失败，导致整个流程中断。 |
| **远程 SSH 连接** | #1293 | 在没有 GUI 和不可修改系统 DNS 的远程服务器上，CLI 无法正常工作。 |
| **认证流程限制** | #2633 | 1.17 版强制要求 Kimi OAuth token，导致第三方提供商无法正常工作，限制了集成灵活性。 |
| **功能缺失** | #1311, #1307 | 撤销功能缺失 (`opencode` 中有)，`kimi web` 缺少 `--agent-file` 支持，两者都影响了用户的日常工作流。 |
| **增强功能需求** | #1309, #1310 | 社区希望在 webui 中增加高级功能（心跳、定时任务、记忆、图表支持），以满足更复杂的开发需求。 |

---

**总结**：过去 24 小时，Kimi CLI 主要关注点是修复已知 bug（认证、SSH 连接）并修复令牌使用问题。同时，社区也在积极倡导一致性改进（撤销、agent-file、Mermaid）和更大的灵活性（第三方提供商、远程就绪度）。ACP 认证网关变化是未来发展中可能引发的重大事件，值得关注。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-04

---

## 1. 今日速览

- **核心痛点聚焦**：社区高呼声 Issue 集中在 **Ctrl+C 误退出**（Windows 下复制冲突）、**会话归档/恢复机制缺失**、**Web 端项目自动同步** 以及 **使用量仪表盘数据不一致**，反映出跨平台体验与账号体系的成熟度仍有提升空间。
- **功能扩展加速**：PR 流向显示 **浏览器自动化插件（tabs、诊断、公共 API）**、**耐久心跳监控**、**后台任务面板** 等“Agent 化、长任务化”能力正在快速落地，2.0 版本架构调整同步推进。
- **稳定性修复密集**：针对 LSP 嵌套项目解析失败、SSE 循环、编译二进制忽略代理环境变量、压缩重试、模型选择器排序等一批阻塞性 Bug 在过去 24h 内完成修复或提交 PR。

---

## 2. 版本发布

> 过去 24h 无新 Release 发布。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心诉求 | 热度（评论/👍） | 关键点 |
|---|-------|----------|------------------|--------|
| 1 | [#2999](https://github.com/anomalyco/opencode/issues/2999) **Provide means to disable Ctrl-C** | Windows/WezTerm 下 Ctrl+C 直接退出程序，无法复制 | 38 / 27 | 跨平台快捷键冲突，需可配置绑定或区分“复制/中断”语境 |
| 2 | [#7957](https://github.com/anomalyco/opencode/issues/7957) **[UX] Ctrl+C should not exit OpenCode** | 统一复制快捷键与退出冲突，误触频发 | 18 / 53 | 👍 最高，建议改为 `Ctrl+Shift+C` 或双击退出 |
| 3 | [#12393](https://github.com/anomalyco/opencode/issues/12393) **[web] How to unarchive in opencode-desktop** | 误点归档后无入口恢复会话 | 20 / 34 | ✅ 已关闭，但揭示 UI 缺“归档箱”入口 |
| 4 | [#13626](https://github.com/anomalyco/opencode/issues/13626) **[FEATURE] Auto-sync projects in web UI from server** | 新设备打开 Web 自动拉取服务端项目列表 | 16 / 16 | 多端协作刚需，涉及离线优先与冲突合并 |
| 5 | [#38255](https://github.com/anomalyco/opencode/issues/38255) **Discrepancy between usage dashboards** | 周/月/颗粒度仪表盘数据不一致，导致误判额度用尽 | 11 / 0 | 计费透明度问题，影响信任 |
| 6 | [#45278](https://github.com/anomalyco/opencode/issues/45278) **Payment Declined After 3 Months** | 老卡突然被拒，银行确认无问题 | 9 / 2 | 支付网关/风控误判，需更友好的降级提示 |
| 7 | [#47047](https://github.com/anomalyco/opencode/issues/47047) **SSE error with #44944 — broken** | Big Pickle 模型进入循环，生成中断 | 9 / 0 | 流式传输异常处理缺失，影响生成稳定性 |
| 8 | [#40468](https://github.com/anomalyco/opencode/issues/40468) **stuck in busy forever after toolcall** | 工具调用后 TUI 卡在 busy 动画，ESC 无效 | 6 / 2 | 事件循环死锁，需超时兜底与强制中断 |
| 9 | [#36280](https://github.com/anomalyco/opencode/issues/36280) **Worker SIGILL on Intel i5-7200U** | 旧 CPU 非法指令崩溃，触发级联 coredump 耗尽内存 | 5 / 0 | 兼容性基线缺失，建议提供无 AVX2 版本或运行时检测 |
| 10 | [#47177](https://github.com/anomalyco/opencode/issues/47177) **[2.0] code mode: execute dispatcher bypasses ask permission** | 插件工具通过 execute 调用绕过权限确认 | 2 / 0 | 安全边界漏洞，2.0 架构需统一权限拦截点 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 状态 | 核心变更 |
|---|----|------|------|----------|
| 1 | [#46530](https://github.com/anomalyco/opencode/pull/46530) | feat | Open | **插件权限断言 API**：新增 `ctx.permission.assert()`，统一浏览器标签、文件读取、外部目录访问的权限检查入口 |
| 2 | [#44838](https://github.com/anomalyco/opencode/pull/44838) | feat | Open | **浏览器标签页与 Chromium 诊断**：Review 面板支持多标签打开/聚焦/关闭，共享所有权，新增跨域 frame 检查、快照、性能分析 |
| 3 | [#46531](https://github.com/anomalyco/opencode/pull/46531) | feat | Open | **公共 API 浏览器插件**：44 个 Code Mode 方法（tabs、交互、快照、文件、诊断、性能、审计），RPC 入口解耦 |
| 4 | [#47193](https://github.com/anomalyco/opencode/pull/47193) | feat | Open | **耐久心跳监控**：持久化心跳调度与策略，重启恢复待检任务，Web 端以可折叠时间轴卡片展示 |
| 5 | [#47166](https://github.com/anomalyco/opencode/pull/47166) | feat | ✅ Closed | **心跳监控 + Timeline UI**：长命令心跳调度/检查/取消，子会话卡片、嵌套计数、耗时显示 |
| 6 | [#47187](https://github.com/anomalyco/opencode/pull/47187) | feat | Open | **Shell `run_in_background`**：一等后台执行支持，自动通知完成，解决 dev server/watch 阻塞回合 |
| 7 | [#47186](https://github.com/anomalyco/opencode/pull/47186) | feat | ✅ Closed | **Tasks 面板**：侧边栏新增 Tasks 标签，聚合子会话、前台 Shell、权限等待，实时进度 |
| 8 | [#47181](https://github.com/anomalyco/opencode/pull/47181) | fix | Open | **LSP 嵌套 TS 子项目解析**：修复多 `tsconfig.json` 根目录下 `.ts` 文件返回空结果，关联 #40413 #35396 #18694 |
| 9 | [#47159](https://github.com/anomalyco/opencode/pull/47159) | fix | ✅ Closed | **压缩瞬态失败重试**：按会话重试策略从头重试，拒绝截断摘要，用户取消不重试 |
| 10 | [#47189](https://github.com/anomalyco/opencode/pull/47189) | fix | ✅ Closed | **Windows 标题栏图标对齐**：图标移至菜单按钮旁并垂直居中，回收 44px 供垂直标签页 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|--------------|------|
| **跨平台键位兼容与可配置性** | #2999, #7957, #32370(PR) | ⭐⭐⭐⭐⭐ | Windows/Linux 复制/中断冲突，Linux primary buffer 支持同步推进 |
| **会话/项目生命周期管理** | #12393, #13626, #47167 | ⭐⭐⭐⭐ | 归档恢复、多端自动同步、项目图标发现阻塞 |
| **Agent 长任务与后台能力** | #47187, #47166, #47186 | ⭐⭐⭐⭐ | 后台 Shell、心跳监控、Tasks 面板、子会话追踪 |
| **浏览器自动化生态** | #44838, #46531, #46530 | ⭐⭐⭐⭐ | 标签页控制、诊断、权限模型、公共 RPC |
| **模型/计费透明度** | #38255, #45278, #47120, #47192 | ⭐⭐⭐ | 仪表盘一致性、支付失败降级、模型发现与调用报错 |
| **LSP/语言服务稳健性** | #47174, #47181, #40413, #35396 | ⭐⭐⭐ | 多根工作区、进度等待、tsconfig 发现 |
| **二进制分发与环境适配** | #47041, #36280 | ⭐⭐ | `NODE_OPTIONS`/`NO_PROXY` 生效、旧 CPU 指令集兼容 |

---

## 6. 开发者关注点总结

1. **“Ctrl+C = 退出”在 Windows 上是毁灭性体验** —— 38/18 条评论、53 👍，开发者期望：  
   - 可配置键位映射  
   - 或“复制优先，双击/长按退出”  
   - 或区分“输入焦点在编辑器 vs 终端”的语境处理

2. **归档/同步/恢复的“隐形数据丢失”焦虑** —— 无可视化归档箱、无自动同步、误操作无撤销，导致不敢用归档功能。

3. **计费与模型可用性的“不可观测性”** —— 多仪表盘打架、旧模型 ID 仍在目录但调用 500、支付无故拒付，缺乏统一的“健康度/配额”API 供插件消费。

4. **Agent 化进程中的权限与安全边界** —— `execute` 派发绕过 `ask`、插件权限缺乏统一断言点、后台任务无审计日志，2.0 架构正在补齐。

5. **长尾兼容性阻碍采用** —— 旧 CPU 指令集、代理环境变量失效、嵌套 TS 项目 LSP 失效、SSE 循环无熔断，均为“能跑但不稳”的典型阻塞点。

---

> **数据来源**：`github.com/anomalyco/opencode` · Issues & PRs 更新于 2026-09-04 最近 24h  
> **下一期预告**：关注 #47193 心跳监控合并后的 Timeline 交互反馈、#46531 浏览器插件首个外部插件接入案例、Ctrl+C 可配置方案的 RFC 讨论。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-09-04

---

## 1. 今日速览

今日无新版本发布，但社区活跃度较高。多个关键 Issue 和 PR 在过去 24 小时内被更新或关闭，焦点集中在**性能退化（O(n²) 问题）**、**TUI 体验优化**、**Provider/模型目录修正**以及**扩展 API 完善**四个方面。新提交的 PR #9096 引入了 Meta Provider（Muse 订阅 OAuth），是今日最具功能扩展性的进展。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues（精选 10 个）

| # | 标题 | 状态 | 评论 | 👍 | 为什么重要 |
|---|------|------|------|-----|-----------|
| **#8061** | Context budget ignores maxTokens output reservation: overflow recovery retry fails | 🔴 OPEN / inprogress | 6 | 2 | **核心功能缺陷**：输入仅占 78% 上下文窗口即被 provider 拒绝，自动 compact-and-retry 恢复机制同样失败。直接影响长会话可用性，涉及 Gemini 等大上下文模型 |
| **#8822** | Streaming assistant output renders late: O(n²) markdown re-render | 🔴 OPEN | 2 | 0 | **性能瓶颈**：流式输出时每次 delta 触发完整 markdown 重渲染，TUI 严重落后于 LLM 生成速度（~25 chunks/s），同步事件路径成为瓶颈 |
| **#8706** | zai thinking handler sends disabled for forced-thinking models, leaking reasoning | 🔴 OPEN | 3 | 0 | **正确性问题**：GLM-5.3/5.3-flash 等强制 thinking 模型在用户关闭 thinking 后仍泄露 reasoning 内容到输出，属于模型行为配置错误 |
| **#8810** | Extension-registered providers: fresh sessions ignore defaultProvider/defaultModel | 🔴 OPEN | 3 | 0 | **扩展 API 缺陷**：通过 `pi.registerProvider` 注册的 provider，新会话间歇性忽略 `settings.json` 中的默认配置，静默回退到其他默认模型 |
| **#8684** | PI_OFFLINE silently disables all provider model discovery | 🔴 OPEN | 3 | 0 | **文档与行为矛盾**：`PI_OFFLINE` 按文档仅禁用启动检查，实际却禁用了整个会话的模型目录发现，属于未记录的副作用 |
| **#9097** | DeepSeek/OpenRouter thinking turns persist redundant thinkingSignature, bloats sessions | 🟡 CLOSED | 2 | 0 | **会话膨胀**：每轮 thinking 块通过 OpenRouter 路由时存储完整 `thinkingSignature`，导致多日会话达 4.5MB，触发 provider 上下文限制 |
| **#8857** | Agent loop has no tool call execution timeout | 🟡 CLOSED | 2 | 0 | **可靠性缺口**：工具调用阶段无超时机制，`bash` 等待数据库连接等 hang 时整个 agent 循环无限卡死 |
| **#5023** | Terminal scrolls to beginning without reason | 🟡 CLOSED | 18 | 3 | **高关注度 UI Bug**：终端在模型工作期间无故跳转到会话开头再滚动到底部，完全随机发生，影响日常使用体验 |
| **#8845** | Branch summarization deterministically fails: hardcodes maxTokens: 2048 | 🟡 CLOSED | 14 | 0 | **树分支摘要缺陷**：`/tree` 导航大分支时摘要生成因硬编码 token 上限被截断，导致确定性失败 |
| **#9016** | Enable reasoning and reasoning effort for llama.cpp provider | 🔴 OPEN | 2 | 0 | **模型支持缺口**：llama.cpp 已通过 OpenAI 兼容 API 支持 `reasoning_effort`，但 pi 内置 provider 未实现该功能 |

---

## 4. 重要 PR 进展（精选 10 个）

| # | 标题 | 状态 | 简述 |
|---|------|------|------|
| **#9096** | feat(ai,coding-agent): add Meta provider with Muse subscription OAuth | 🟢 OPEN | 新增 Meta Provider，支持 Muse 订阅 OAuth 认证。refresh token 机制特殊（每日从 identity token 重新 mint），流式输出目前为 burst 模式 |
| **#8998** | System prompt refactor | 🟢 OPEN (draft) | 重大架构重构：支持扩展对 system prompt 的部分更新，使 coding agent 可在对话中途动态更新 system/tool 变化，避免整段重写 |
| **#9087** | fix(ai): fail fast when dynamic model's api has no matching implementation | 🟡 CLOSED | 修复 `openrouter/anthropic/*` 等动态模型因 API 不匹配而返回 HTML 404 页面的错误，改为快速失败并给出清晰错误信息 |
| **#9081** | fix: let registerProvider apiKey read plugin auth files | 🟡 CLOSED | `registerProvider` 的 `apiKey` 字段现支持函数类型，可在鉴权时动态解析插件 auth 文件中的密钥，解决插件 provider "No API key found" 问题 |
| **#8994** | fix(agent): map signal-killed processes to non-zero exit codes | 🟡 CLOSED | 修复子进程被信号（如 OOM killer）终止时 `exec()` 错误返回 `ok: true` 的问题，确保 bash 工具能正确识别失败 |
| **#9082** | fix(coding-agent): summarize multiline bash in collapsed tools | 🟡 CLOSED | 折叠工具行中的多行 shell 命令现渲染为 `bash script (N lines)`，减少历史噪声，完整命令仍可在展开时查看 |
| **#9083** | fix(tui): expand repeated large paste markers | 🟡 CLOSED | 修复重复粘贴相同内容时堆叠多个 `[paste #N …]` 标记的问题，编辑器现在能正确识别并展开重复粘贴 |
| **#9080** | feat(tui): add jump-to-latest control | 🟡 CLOSED | 新增"跳转到最新"控件，基于已有开发进度，提升长会话中的导航效率 |
| **#9077** | docs(coding-agent): document running pi in Docker Sandboxes | 🟡 CLOSED | 在 `containerization.md` 新增 `## Docker Sandboxes` 章节及模式选择表，完善容器化部署文档 |
| **#8635** | fix(ai): preserve aborted stop reason during lazy setup | 🟢 OPEN | 修复在惰性流设置过程中请求中止时，正确传播 abort 信号并报告为 aborted 而非 setup failure，附带回归测试 |

---

## 5. 功能需求趋势

从近期 Issues 和 PR 可提炼出以下社区关注方向：

- **性能优化**：多个 O(n²) 问题（EventStream 队列、markdown 重渲染、工具参数解析）被提出，社区对流式输出和长会话的响应速度要求越来越高
- **TUI/UX 增强**：滚动行为、全屏模式、可点击链接（OSC 8）、跳转控件、剪贴板标记等细粒度交互改进持续涌现
- **Provider 与模型生态**：新 Provider 接入（Meta）、模型目录修正（gemini-3.8-flash、Grok、Baseten GLM）、llama.cpp reasoning 支持等需求活跃
- **扩展 API 能力边界**：会话替换、命名空间、工具注册覆盖、provider 鉴权等扩展点被反复提出，社区期望 pi 提供更安全的编程式扩展接口
- **可靠性与超时**：工具调用超时、信号进程退出码、context budget 预留、abort 信号传递等基础健壮性需求集中出现
- **容器化与部署**：Docker Sandboxes 文档完善，反映社区对沙箱化部署场景的关注

---

## 6. 开发者关注点

社区反馈中的高频痛点可归纳为：

1. **流式输出性能**：markdown 重渲染的同步阻塞问题已成为 TUI 体验的显著瓶颈，尤其在高吞吐 SSE 场景下
2. **上下文管理**：token 预算预留机制缺失导致 provider 拒绝请求和恢复失败，长会话场景下尤为致命
3. **扩展 API 的隐式行为**：provider 默认值忽略、工具名冲突、auth 文件未被读取等问题，暴露了扩展注册机制的"隐式契约"不够清晰
4. **配置开关的预期行为**：`PI_OFFLINE` 等环境变量的副作用与文档不一致，开发者期望明确的作用域边界
5. **TUI 细节体验**：滚动跳转、粘贴标记、光标位置等细节问题虽小，但高频影响日常开发效率
6. **会话膨胀**：thinkingSignature 等冗余字段未被清理，导致存储和传输成本持续增长

---

*数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) | 报告生成日期：2026-09-04*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 (2026-09-04)

---

### 1. 今日速览

*   **新版本发布**：Qwen Code 发布了 **v0.23.0** 版本，重点优化了 Git 工作流，在分支选择器中引入了实时的 Git 状态提示。
*   **架构升级讨论升温**：社区关于将 TUI 渲染层从 `ink` 迁移至 `OpenTUI` 的讨论（Issue #8662）成为最受关注的议题，相关 UI 细节修复（如历史记录可见性、VP 对齐）也在并行推进。
*   **安全与多 Agent 架构并行推进**：社区在积极进行安全审计（如凭据泄露防护、配置项加固）和多 Agent 协作功能（如 Agent Board、会话生命周期管理）的开发。

---

### 2. 版本发布

#### 📦 v0.23.0
*   **核心更新**：在 `Update Project`、`Commit` 等操作旁的分支选择器（branch picker）中，现在会直接显示 Git 状态提示（如 `↓3 · origin/main` 或 `Up to date`），方便开发者快速感知远端同步状态。
*   **已知问题**：无已知破坏性变更（No known breaking changes）。
*   **链接**：[v0.23.0 Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0)

---

### 3. 社区热点 Issues（Top 10）

社区在过去一天中活跃讨论了以下 10 个关键 Issue，涵盖了架构升级、安全漏洞、资源控制和生态兼容性：

| Issue 标题 | 标签 | 为什么重要 | 社区反应/链接 |
| :--- | :--- | :--- | :--- |
| **#8662 Migrate TUI rendering layer from ink to OpenTUI** | `ui`, `rendering` | **架构演进核心**：当前基于 `ink 7 + React 19` 的定制渲染器存在结构性问题（如闪烁、虚拟视口卡顿），迁移到 `OpenTUI` 是解决这些底层渲染缺陷的唯一出路。 | 🔥 评论数 28<br>[查看详情](https://github.com/QwenLM/qwen-code/issues/8662) |
| **#10887 No early termination on repeated tool errors** | `bug`, `token-management` | **严重资源浪费**：生产环境会话中，Agent 在遇到重复错误时陷入死循环，单次会话消耗高达 5-14M tokens，急需引入死循环终止机制。 | 🔥 评论数 3<br>[查看详情](https://github.com/QwenLM/qwen-code/issues/10887) |
| **#10561 review: command-execution config keys are an open entrance set** | `security`, `vulnerability` | **高危安全隐患**：安全审查发现，`fsmonitor`、`hooks` 等 Git 配置键可能被攻击者利用，通过任意 Git 生成执行恶意代码。 | 🔥 评论数 3<br>[查看详情](https://github.com/QwenLM/qwen-code/issues/10561) |
| **#10936 DingTalk channel prints clientSecret to stdout** | `security`, `credential-security` | **严重凭据泄露**：钉钉通道在每次连接时，都会在控制台明文打印 SDK 配置对象（包含 `clientId` 和 `clientSecret`）以及敏感数据 ticket。 | 🔥 评论数 2<br>[查看详情](https://github.com/QwenLM/qwen-code/issues/10936) |
| **#10065 LM Studio 0.4.21 request fails with "failed to parse grammar"** | `bug`, `tools` | **本地部署阻塞**：用户在使用 LM Studio 本地部署模型时，即使无 MCP 服务器，Qwen Code 也会因语法解析失败而无法正常发起请求。 | 🔥 评论数 8<br>[查看详情](https://github.com/QwenLM/qwen-code/issues/10065) |
| **#10908 CI test time is bound by module import cost** | `performance`, `ci-cd` | **CI 效率瓶颈**：测试运行中，模块导入收集时间（collect）远超实际测试运行时间（如 cli 工作区 2223s vs 1372s），严重拖慢迭代速度。 | 🔥 评论数 5<br>[查看详情](https://github.com/QwenLM/qwen-code/issues/10908) |
| **#10583 feat(sandbox): add lightweight Bubblewrap backend for Linux** | `feature-request`, `sandbox` | **轻量级沙箱需求**：社区希望在 Linux 上提供基于 `bwrap` 的轻量级沙箱后端，无需依赖 Docker/Podman 即可实现强 OS 级隔离。 | 🔥 评论数 5<br>[查看详情](https://github.com/QwenLM/qwen-code/issues/10583) |
| **#10791 Balanced content-only `<thinking>` blocks still leak to output** | `bug`, `content-generation` | **输出内容污染**：即使模型输出了格式闭合的 `<thinking>` 标签，现有的防御机制仍会将其泄露到用户可见的输出流中。 | 🔥 评论数 3<br>[查看详情](https://github.com/QwenLM/qwen-code/issues/10791) |
| **#10953 Todo plan state goes stale while work is delegated to subagents** | `bug`, `session-management` | **多步任务状态不同步**：当主 Agent 将工作委托给子 Agent 时，持久化的 Todo 计划会冻结，

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报
**日期：2026-09-04**

---

### 1. 今日速览
今日仓库无新版本发布，但社区开发活动依然活跃。0.9.12 版本的 UX 迭代与 TUI 重构工作进入收尾阶段，多项重要 PR 已完成合并；同时，ACP 协议支持存在明显的会话管理缺失，引发开发者关注并提交了相关功能增强 Issues。

### 2. 版本发布
*无新版本发布。* 
*(注：当前版本仍为 0.9.11，多个 PR 如 [#5862](https://github.com/Hmbown/CodeWhale/pull/5862) 正在为即将到来的 0.9.12 集成 UX 变更。)*

### 3. 社区热点 Issues
本期共收集 4 条 Issues，其中 1 条为无关医疗广告，已剔除。重点关注以下 3 条开发相关 Issues：

*   **#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)**
    *   **重要性**：这是代码库解耦的伞形跟踪 Issue，涉及底层架构的重大重构，所有子 EPIC 和功能 PR 均在此汇总，对项目长期可维护性至关重要。
    *   **社区反应**：21条评论，处于持续跟踪中。
    *   **链接**：[Hmbown/Codewhale Issue #5316](https://github.com/Hmbown/CodeWhale/issues/5316)
*   **#5863 [OPEN] [enhancement] ACP Function Enhancement**
    *   **重要性**：指出 `serve --acp` 未暴露会话配置选项（modes/models/configOptions），导致编辑器客户端无法展示或切换工作模式，严重影响 IDE 集成体验。
    *   **社区反应**：新提交，2条评论，反映了编辑器前端的迫切需求。
    *   **链接**：[Hmbown/Codewhale Issue #5863](https://github.com/Hmbown/CodeWhale/issues/5863)
*   **#5864 [OPEN] serve --acp does not implement ACP session/list...**
    *   **重要性**：指出 `serve --acp` 缺少 `session/list` 和 `session/load` 实现，ACP 客户端无法枚举或恢复现有会话，阻塞了多会话管理场景的落地。
    *   **社区反应**：新提交，1条评论。
    *   **链接**：[Hmbown/Codewhale Issue #5864](https://github.com/Hmbown/CodeWhale/issues/5864)

### 4. 重要 PR 进展
本期共 7 条 PR 更新，涵盖版本集成、功能实现与底层重构：

*   **#5862 [CLOSED] Codewhale 0.9.12: Fleet-only UX**
    *   **内容**：为 0.9.12 版本集成了 10 个 UX 切片，包括统一悬停样式、工作流重命名（sidebar/rail -> workbar）、设置面板重组等。
    *   **链接**：[Hmbown/Codewhale PR #5862](https://github.com/Hmbown/CodeWhale/pull/5862)
*   **#5833 [CLOSED] feat(memory): FEAT-019 memory capability**
    *   **内容**：重新合并了内存命令切片，新增 `CommandCapabilities::MEMORY` 能力和 `CommandMemoryContext`  facet，提供搜索、记忆、获取、导出等 TUI 内存适配器。
    *   **链接**：[Hmbown/Codewhale PR #5833](https://github.com/Hmbown/CodeWhale/pull/5833)
*   **#5865 [OPEN] refactor(tui): re-land FEAT-020 plugin command shapes**
    *   **内容**：在主分支上重新着陆 FEAT-020 插件命令形状，原 PR 曾在 `codex/v0912-integration-20260823` 分支合并，现回迁至 main。
    *   **链接**：[Hmbown/Codewhale PR #5865](https://github.com/Hmbown/CodeWhale/pull/5865)
*   **#5843 [CLOSED] tui: align typed config and schema with the live value spaces**
    *   **内容**：将类型化主题、配置和 Schema 与实际值空间对齐，清理了孤立的地方化键，且通过了 425 的死代码检测。
    *   **链接**：[Hmbown/Codewhale PR #5843](https://github.com/Hmbown/CodeWhale/pull/5843)
*   **#5858 [CLOSED] tui: collapse ocean_treatment into ThemeId::Underwater**
    *   **内容**：将海洋处理逻辑合并到 `ThemeId::Underwater`，重构了深海别名、单选列表、只读配置迁移及主题键。
    *   **链接**：[Hmbown/Codewhale PR #5858](https://github.com/Hmbown/CodeWhale/pull/5858)
*   **#5867 [OPEN] feat(config): add [reasoning_only] section**
    *   **内容**：新增 `[reasoning_only]` 配置节，使推理模型的重试行为可配置，替代了之前硬编码的 `MAX_REASONING_ONLY_REPROMPTS = 2`。
    *   **链接**：[Hmbown/Codewhale PR #5867](https://github.com/Hmbown/CodeWhale/pull/5867)
*   **#5868 [OPEN] feat: send x-opencode-session header**
    *   **内容**：为 OpenCode Go/Zen 提供程序发送 `x-opencode-session` 头，使其能优化提示缓存并将流量归属到特定会话。
    *   **链接**：[Hmbown/Codewhale PR #5868](https://github.com/Hmbown/CodeWhale/pull/5868)

### 5. 功能需求趋势
基于本期 Issues 与 PR 的综合分析，社区当前关注的功能方向主要集中在以下几点：

1.  **IDE/编辑器深度集成（ACP协议）**：从 [#5863](https://github.com/Hmbown/CodeWhale/issues/5863) 和 [#5864](https://github.com/Hmbown/CodeWhale/issues/5864) 可以看出，社区强烈要求补全 ACP 协议的会话枚举、恢复及配置暴露功能，以打通编辑器客户端与服务端的联动。
2.  **TUI 架构解耦与模块化**：[#5316](https://github.com/Hmbown/CodeWhale/issues/5316) 伞形 Issue 和 [#5865](https://github.com/Hmbown/CodeWhale/pull/5865) PR 表明，将庞大的 TUI crate 按功能解耦为独立插件/命令形状是当前的核心架构趋势。
3.  **配置灵活性与可定制化**：从 [#5867](https://github.com/Hmbown/CodeWhale/pull/5867) 释放硬编码重试次数，到 [#5843](https://github.com/Hmbown/CodeWhale/pull/5843) 对齐 Schema，社区对让用户细粒度控制推理行为和视觉主题的需求日益强烈。
4.  **智能会话与上下文管理**：[#5833](https://github.com/Hmbown/CodeWhale/pull/5833) 增加了 Memory 能力，结合 [#5868](https://github.com/Hmbown/CodeWhale/pull/5868) 的会话头传递，说明“会话上下文感知与持久化”是当前功能迭代的重点。

### 6. 开发者关注点
*   **ACP 协议实现的完整性**：开发者当前最大的痛点在于 `serve --acp` 的功能残缺。会话无法枚举/恢复（[#5864](https://github.com/Hmbown/CodeWhale/issues/5864)）以及会话配置对前端不可见（[#5863](https://github.com/Hmbown/CodeWhale/issues/5863)），直接阻碍了编辑器插件的上层生态构建。
*   **硬编码参数的配置化**：推理模型在遇到纯思考输出时的静默重试机制（之前硬编码为2次）缺乏灵活性，开发者希望按需调整容错与重试策略（[#5867](https://github.com/Hmbown/CodeWhale/pull/5867)）。
*   **视觉与主题系统的重构成本**：在推进 0.9.12 版本 UX 迭代时，海洋风格的废弃与合并（[#5858](https://github.com/Hmbown/CodeWhale/pull/5858)）以及配置 Schema 的对齐（[#5843](https://github.com/Hmbown/CodeWhale/pull/5843)）涉及大量底层改动，开发者需关注由此带来的主题迁移成本。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*