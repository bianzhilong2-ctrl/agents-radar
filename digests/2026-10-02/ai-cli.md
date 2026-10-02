# AI CLI 工具社区动态日报 2026-10-02

> 生成时间: 2026-10-02 03:11 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-02）

## 1. 生态全景

截至 2026-10-02，各主流 AI CLI 工具正处于快速演进阶段，从基础模型部署到生产级托管运行时，功能深度与社区活跃度呈现分化态势。Claude Code 聚焦于插件化扩展与深度行为控制；OpenAI Codex 强调跨平台稳定性与 IDE 集成；Gemini CLI 强化安全合规与 MCP 生态；GitHub Copilot CLI 聚焦企业级权限与跨平台兼容；Kimi Code 侧重本地模型自动发现；Pi 强调全屏 TUI 与轻量化部署；Qwen Code 推进托管代理架构；DeepSeek TUI 专注任务调度与多语言支持。整体来看，生态正从“单点模型调用”向“多代理协同、托管化、跨平台统一”演进，社区活跃度虽有波动，但核心功能迭代持续加速。

## 2. 各工具活跃度对比

| 工具 | 今日 Issues 数 | 今日 PR 数 | 最近 Release 状态 | 活跃度评级 |
|------|---------------|------------|-------------------|------------|
| **Claude Code** | 10+（热点：Mods 扩展、GitHub 连接器、Artifact 分享） | 5+（核心：Mods 体系、Diff 行为、API 改进） | v2.1.287（2026-10-02） | ★★★★☆ |
| **OpenAI Codex** | 10+（热点：Windows 桌面崩溃、IDE 消息丢失、TUI 滚动、配额管理） | 5+（核心：Windows 修复、IDE 改进、TUI 优化） | rust-v0.162.0-alpha 系列（持续） | ★★★★☆ |
| **Gemini CLI** | 10+（热点：Subagent 恢复、Generalist 挂起、MCP OAuth、Windows IDE） | 10+（核心：安全修复、Agent 行为优化） | v0.64.0-nightly.20261002.gc9096a847 | ★★★★☆ |
| **GitHub Copilot CLI** | 10+（热点：企业权限、跨平台、MCP 集成） | 10+（核心：ACP、MCP 稳定性、企业配置） | v1.0.91/92（2026-10-01） | ★★★★☆ |
| **Kimi Code** | 10+（热点：Windows 启动卡死、TUI 多问题、配额异常） | 10+（核心：模型发现、内存优化、TUI 修复） | 无新版本（2026-10-02） | ★★★☆☆ |
| **Pi** | 10+（热点：依赖冲突、卡死、TUI 抖动、成本估算） | 10+（核心：Stage D/G 架构、主题兼容） | v1.0.0（2026-10-02） | ★★★★☆ |
| **Qwen Code** | 10+（热点：Managed Agent 架构、Token 治理、Stage D/G） | 10+（核心：Stage D/G 实现、Token 优化） | v0.24.7-nightly.20261001.a7deb01bcb | ★★★★☆ |
| **DeepSeek TUI** | 6+（热点：汉化、YOLO 模式、子进程泄漏） | 10+（核心：Task Store、Component Catalog、Scheduler） | v0.10.1（持续集成） | ★★★☆☆ |

**活跃度排序**（Issues × PR 比例）：Claude Code、Gemini CLI、GitHub Copilot CLI、Pi 紧随其后，Kimi Code 与 DeepSeek TUI 相对沉寂但核心功能稳健。

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|----------|----------|----------|
| **Agent 行为可靠性** | Claude Code、Gemini CLI、GitHub Copilot CLI | Subagent 卡死、Generalist 挂起、Agent 状态不一致、未正确终止子代理 |
| **跨平台稳定性** | OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Pi | Windows 桌面崩溃、Linux 沙盒启动失败、macOS 连接器回归、TUI 跨平台渲染 |
| **Token 与上下文治理** | Qwen Code、OpenAI Codex | 非对话开销优化、配额管理、Token 召回率/成功率指标、内存压缩感知 |
| **IDE 集成与体验** | OpenAI Codex、Gemini CLI、GitHub Copilot CLI | VS Code 工作树恢复、IDE 消息丢失、TUI 滚动卡顿、插件扩展兼容 |
| **安全合规与权限** | GitHub Copilot CLI、Qwen Code、Claude Code | 企业级权限控制、OAuth 授权审计、MCP 安全验证、沙盒认证 |
| **MCP 协议生态** | Gemini CLI、Qwen Code、GitHub Copilot CLI | MCP 工具发现、OAuth 流程、Broker 认证、Hosted Workspace 集成 |

这些方向相互交织，反映了开发者对“可靠、安全、跨平台、高效”的综合需求。

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 插件化深度控制平台 | 开发者、研究人员 | 插件系统 + 深层行为修改 + 守护型 Side Agent |
| **OpenAI Codex** | 通用 AI 编码助手 | 开发者、企业工程 | Rust 底层 + 跨平台优化 + IDE 深度集成 |
| **Gemini CLI** | 多模型多代理统一接口 | 企业研发、MCP 生态 | 安全加固 + Agent 行为优化 + MCP 协议深度支持 |
| **GitHub Copilot CLI** | 企业级代码辅助工具 | 企业开发者、工程团队 | 企业权限 + 跨平台 + MCP 集成 |
| **Kimi Code** | 本地模型自动发现平台 | 个人开发者、边缘计算 | 模型发现 + 性能优化 + 轻量化部署 |
| **Pi** | 全屏 TUI 轻量化 CLI | 终端开发者、DevOps | 全屏默认 + 资源优化 + 主题兼容 |
| **Qwen Code** | 托管代理架构平台 | 云原生团队、MPA 运营 | Managed Agent 生命周期 + Token 治理 + Multi-Agent 编排 |
| **DeepSeek TUI** | 任务调度与多语言 TUI | 自动化运维、数据科学 | Scheduler + 任务调度 + 多语言 UI 支持 |

**定位总结**：Claude Code 与 Qwen Code 聚焦“插件化与托管化”，分别代表了两种不同的扩展范式——前者强调插件生态的开放性，后者强调托管运行时的生产就绪度。Gemini CLI 与 GitHub Copilot CLI 则以安全合规与企业级体验为核心，Gemini 更偏向多模型多代理的统一接口，Copilot 更侧重企业权限与跨平台稳定性。Kimi Code 与 Pi 分别代表了“本地模型自动发现”与“全屏 TUI 轻量化”两个垂直赛道，Qwen Code 与 DeepSeek TUI 则是深度优化与任务调度的专家。

## 5. 社区热度与成熟度评估

| 工具 | 社区活跃度 | 成熟度 | 评价 |
|------|------------|--------|------|
| **Claude Code** | 高（10+ 热点 Issue） | 成熟 | 核心功能迭代迅速，社区对 Mods 体系关注度最高 |
| **Gemini CLI** | 高（10+ 热点 Issue） | 成熟 | 安全修复与 Agent 行为优化持续推进，生态稳定 |
| **GitHub Copilot CLI** | 高（10+ 热点 Issue） | 成熟 | 企业级需求驱动，社区活跃度与功能完善度均高 |
| **Kimi Code** | 中（10+ 热点 Issue，但无新版本） | 稳定 | 功能已落地，但社区活跃度下降，可能进入成熟期 |
| **Pi** | 高（10+ 热点 Issue） | 成熟 | 版本 1.0.0 已发布，核心功能已稳定，但仍有 Bug 修复需求 |
| **Qwen Code** | 高（10+ 热点 Issue） | 成熟 | Managed Agent 架构已形成路线图，社区对 Stage D/G 关注度高 |
| **DeepSeek TUI** | 中（6+ 热点 Issue，无新版本） | 稳定 | 功能迭代缓慢，但核心 TUI 优化已完成 |

**成熟度排序**：Claude Code、Gemini CLI、GitHub Copilot CLI 属于“成熟且活跃”阶段；Qwen Code 与 Pi 处于“稳定成熟”阶段；Kimi Code 与 DeepSeek TUI 属于“渐进稳定”阶段，功能已落地但社区参与度有所减弱。

## 6. 值得关注的趋势信号

1. **托管代理化成为主流方向**  
   Qwen Code 的 Stage D/G 与 Pi 的 Stage D/G 架构演进表明，托管化的多代理编排（耐用会话、Checkpoint 恢复、Write-er fencing）已成为 AI CLI 工具的核心竞争力。开发者应关注如何在自身工具中实现类似生命周期管理。

2. **Token 与上下文治理的系统化**  
   Qwen Code 的 #12028、#12333 等 Issue 揭示了非对话开销成为成本控制痛点；OpenAI Codex 的配额异常、GitHub Copilot 的 Token 召回率指标需求，都指向需要更精细化的资源管理机制。未来工具将需要内置“Token 预算”与“上下文成本”监控。

3. **跨平台一致性仍是痛点**  
   Windows 桌面崩溃、Linux 沙盒启动失败、macOS 连接器回归等问题表明，跨平台稳定性是所有工具共同挑战。特别是 Qwen Code 的 Stage B/G 与 Pi 的 Stage D 都涉及跨平台架构，需关注系统调用差异、权限模型差异等问题。

4. **MCP 生态深度整合**  
   Gemini CLI、Qwen Code、GitHub Copilot CLI 均有 MCP 相关 Issue，表明 MCP 已成为 AI CLI 工具的标准接口。未来工具需提供更完善的 MCP 客户端、OAuth 授权与 Broker 集成能力。

5. **IDE 与 TUI 体验的双重需求**  
   VS Code 工作树恢复、TUI 滚

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (数据截止 2026-10-02)

## 1. 热门 Skills 排行

以下是根据社区关注度（PR 更新频率、评论活跃度及发布时间）筛选出的前 5 个最受关注的 Skills：

| 排名 | PR 编号 | Skill 名称 | 功能概述 | 社区热点与状态 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **#1771** | `proofcore-contract-auditor` | 智能合约审计器，支持 Solidity/Rust 静态分析，并将审计证明锚定至 TON 区块链。 | 近期活跃 (2026-09-16)，为 Web3 开发者提供强大的安全合规工具，社区关注度极高。 |
| **2** | **#1298** | `fix(skill-creator)` | 修复触发器评估误报、Windows 环境下子进程竞争失败及运行时错误处理。 | 核心稳定性修复，已更新至最新版本，直接关系到技能触发的可靠性。 |
| **3** | **#1742** | `fix(mcp-builder)` | 适配 MCP >= 2.0.0 的 `streamable_http_client` 重命名与自定义头部配置。 | 技术债务清理，解决了与新版 MCP 接口不兼容的问题，保持生态向前兼容。 |
| **4** | **#1776** | `add blast-radius` | 提供破坏性写操作前的风险检查清单（如用户归档、权限撤销）。 | 安全性导向，针对运维场景的防御性编程需求，社区关注度上升。 |
| **5** | **#1792** | `fix(docx)` | 修正 LibreOffice 超时错误，并确保 DOCX 输出无修订标记残留。 | 文档处理实用性强，针对 Office 办公环境的稳定性优化，近期更新频繁。 |

> **备注**：上述列表仅列出前 5 名。其他高关注项包括 `add pyxel skill` (Retro 游戏开发)、`Add notion-spec-to-implementation` (文档转任务) 等，但在评论数与发布时间权重上略逊于上述核心稳定性与功能性更新。

## 2. 社区需求趋势

从 Issues 讨论中提炼出的三大核心趋势：

1.  **安全性与信任边界**：社区高度警惕技能分布安全性。特别是关于 `anthropic/` 命名空间下的社区技能混淆攻击（Issue #492）以及 `eval-viewer` 中的 XSS 漏洞（Issue #1394），用户迫切希望提升技能的安全隔离与执行安全。
2.  **工作流稳定性与兼容性**：对底层引擎的稳定性修复需求旺盛，包括 `skill-creator` 的触发器评估逻辑优化、MCP 生态的接口兼容性（`mcp-builder`）、以及文档处理工具的鲁棒性（`.docx`, `.pdf` 相关 PR）。
3.  **自动化测试与代码质量**：随着 AI 应用深化，针对测试驱动开发（AWT 技能）和技能自身质量分析（`skill-quality-analyzer`）的需求显著增长，社区倾向于构建更完善的元技能体系。

## 3. 高潜力待合并 Skills

以下是评论活跃但尚未合并的 PR，具备较高的落地潜力：

*   **#1394** (`skill-creator` 评分器 XSS 漏洞)  
    *   **问题**：`eval-viewer` 使用 `innerHTML` 渲染 HTML 时存在 XSS 风险，未通过安全扫描。  
    *   **潜力**：这是安全修复类 PR，若修复成功将显著提升社区信任度。
*   **#1390** (`mcp-builder` 评估脚本伪造错误)  
    *   **问题**：MCP 评估脚本 `evaluation.py` 对真实服务器调用产生虚假错误，导致评估得分失真。  
    *   **潜力**：这是 MCP 生态的核心基础设施问题，修复后将保障所有 MCP 技能的评估真实性。
*   **#1771** (`proofcore-contract-auditor`)

---



# Claude Code 社区动态日报 — 2026-10-02

---

## 1. 今日速览

Claude Code 于今日发布 **v2.1.287**，核心亮点是推出 **Claude Mods** 插件系统，允许插件修改深层行为，并内置了一个名为 "You Should Know" 的守护型 side agent。社区层面，**Mods 可扩展性**（Issue #91870，230 条评论、130 👍）成为最受关注的议题，GitHub 连接器回归 bug（#71542）和 Artifact 公开分享故障也持续发酵。

---

## 2. 版本发布

### v2.1.287

| 项目 | 内容 |
|------|------|
| **核心更新** | **Claude Mods**：插件现在可以修改 Claude 的深层行为，不再局限于表面配置 |
| **内置 Mod** | **"You Should Know"** —— 一个后台 side agent，监控会话并标记用户或 Claude 可能遗漏的问题 |
| **启用方式** | `/plugin enable cc-plugin-you-should-known@builtin`（仅限第一方会话） |

> ⚠️ 该版本同时伴随 PR #98018 对 agents-md 和 diff 两个 mod 的行为回退，说明 Mod 体系仍在快速迭代调整中。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔥 #91870 — Mods：让 Claude 可扩展性提升 10 倍
- **标签**：`enhancement` `area:hooks` `area:plugins`
- **热度**：230 评论 / 130 👍
- **为什么重要**：这是 Claude Code 插件体系的愿景级提案，社区参与度极高。官方已在积极回应反馈，Mod 生态即将进入快速增长期。
- [查看](https://github.com/anthropics/claude-code/issues/91870)

### 🔥 #71542 — GitHub 连接器回归：仓库连接成功但无法访问任何内容
- **标签**：`invalid`（社区认为应改标为 `bug`）
- **热度**：68 评论 / 64 👍
- **为什么重要**：影响所有用户（公开/私有仓库、全账户范围），是严重的回归问题。GitHub 集成是 Claude Code 核心工作流的一环，此 bug 阻断了仓库上下文的获取。
- [查看](https://github.com/anthropics/claude-code/issues/71542)

### 🔥 #84862 — 请求支持 Passkey（WebAuthn）跨平台登录
- **标签**：`enhancement` `area:auth`
- **热度**：10 评论 / 84 👍
- **为什么重要**：84 个 👍 在所有 Issue 中名列前茅，社区对更安全、更便捷的认证方式需求强烈。Passkey 是行业趋势，实现后可覆盖所有终端表面。
- [查看](https://github.com/anthropics/claude-code/issues/84862)

### 🔥 #92215 — Claude Design MCP 在 macOS 上持续 403
- **标签**：`bug` `platform:macos` `area:auth` `area:mcp`
- **热度**：11 评论 / 6 👍
- **为什么重要**：第一方 Claude Design MCP 无法附加 design 范围的 token，OAuth 登录流程失效，且错误提示指向不存在的命令。直接影响设计工作流。
- [查看](https://github.com/anthropics/claude-code/issues/92215)

### 🔥 #85624 — VS Code 扩展：系统重启后 worktree 会话在历史搜索中无法找到
- **标签**：`area:ide`
- **热度**：10 评论 / 2 👍
- **为什么重要**：涉及 VS Code 扩展的会话恢复能力。虽然数据未丢失，但 UI 层面无法找回会话，影响开发连续性。
- [查看](https://github.com/anthropics/claude-code/issues/85624)

### 🔥 #78537 — 请求：组织级默认分享已发布产物
- **标签**：`enhancement` `area:tools` `area:routines`
- **热度**：7 评论 / 16 👍
- **为什么重要**：团队协作场景下的刚需。当前每次分享都需要手动设置，组织级默认策略可大幅提升协作效率。
- [查看](https://github.com/anthropics/claude-code/issues/78537)

### 🔥 #81410 — Artifact 公开分享失败（私有查看正常）
- **标签**：已关闭
- **热度**：6 评论
- **为什么重要**：与 #82551、#79531、#87771 共同构成 Artifact 分享的系统性故障线，多个用户报告相同的 "This version can't be shared publicly" 错误。
- [查看](https://github.com/anthropics/claude-code/issues/81410)

### 🔥 #83848 — 后台 subagent 随机卡死，无最终输出但状态标记为已完成
- **标签**：`area:agents`
- **热度**：9 评论
- **为什么重要**：Agent 编排是 Claude Code 的核心能力。subagent 静默卡死但外层报告 `status:completed` 会导致用户误以为任务已结束，实际结果丢失。
- [查看](https://github.com/anthropics/claude-code/issues/83848)

### 🔥 #81024 — VS Code 扩展：将 git-worktree 会话纳入会话列表
- **标签**：`area:ide` `FEATURE`
- **热度**：6 评论 / 6 👍
- **为什么重要**：代码中硬编码了 `includeWorktrees: false`，导致 worktree 中的会话被排除。多 worktree 工作流的用户受影响较大。
- [查看](https://github.com/anthropics/claude-code/issues/81024)

### 🔥 #98184 — 网络变化后下一个请求在死连接上挂起 184 秒
- **标签**：`bug` `platform:linux` `area:networking`
- **热度**：5 评论
- **为什么重要**：网络超时和重试策略的严重缺陷。184 秒的挂起对开发体验是毁灭性的，尤其在不稳定的网络环境中。
- [查看](https://github.com/anthropics/claude-code/issues/98184)

---

## 4. 重要 PR 进展（共 5 条）

| PR | 标题 | 状态 | 要点 |
|----|------|------|------|
| [#98018](https://github.com/anthropics/claude-code/pull/98018) | mods: revert two changes (agents-md truncated reads, diff forced colors) | 已合并 | 回退 agents-md 和 diff mod 的两项变更，恢复原有行为。Mod 体系处于快速调整期 |
| [#98555](https://github.com/anthropics/claude-code/pull/98555) | diff: the dialog opens every file it lists, and says nothing when closed | 已合并 | `/diff` 对话框中每个列出的文件都会打开其 diff；关闭时不再输出任何内容 |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | diff: the first edit opens the pane only when it has a file to list | 开放 | 修复 diff 窗格在首次编辑时盲目打开的问题——仅在有实际文件变更时才打开 |
| [#16632](https://github.com/anthropics/claude-code/pull/16632) | Fix: `This command uses shell operators that require approval for safety` | 已合并 | 修复 ralph-loop 初始化中 shell 操作符的安全审批提示问题 |
| [#62592](https://github.com/anthropics/claude-code/pull/62592) | Update security-guidance plugin | 已合并 | 更新安全指南插件的 README |

> 📌 本周 PR 高度集中在 **diff 窗格行为** 和 **Mod 体系** 两个方向，说明这两个模块正在经历密集的体验打磨。

---

## 5. 功能需求趋势

从本周 Issues 分布来看，社区关注点集中在以下方向：

| 方向 | 相关 Issue 数量 | 说明 |
|------|:---:|------|
| **IDE 集成（VS Code / Desktop）** | 6+ | 会话恢复、worktree 支持、Terminal 性能、Windows 更新死锁、渲染进程泄漏 |
| **Mod / 插件生态** | 3+ | Mod 可扩展性愿景、内置 Mod、Mod 行为调整 |
| **认证与安全** | 3+ | Passkey 支持、Claude Design MCP 鉴权、OAuth 流程 |
| **Agent 编排** | 3+ | Subagent 卡死、后台 agent 消息投递、idle 通知竞争 |
| **Artifact 分享** | 4+ | 公开分享系统性故障（跨多个 Issue） |
| **网络与性能** | 3+ | 死连接超时、渲染内存泄漏、CJK Markdown 渲染 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **Mod 生态刚刚起步，行为尚未稳定** —— 插件作者和早期采用者需要清晰的 API 文档和向后兼容性保障。PR #98018 的回退说明官方对 Mod 的设计仍在快速迭代。

2. **GitHub 集成回归是当务之急** —— Issue #71542 获得 64 个 👍 和 68 条评论，GitHub 仓库上下文是 Claude Code 的核心差异化能力，此 bug 必须优先修复。

3. **Artifact 分享存在系统性故障** —— 四个独立 Issue（#81410、#82551、#79531、#87771）指向同一个错误，公开分享功能几乎不可用，需要根因排查。

4. **网络健壮性不足** —— 184 秒的死连接挂起暴露了超时/重试策略的严重缺陷，影响所有 Linux 用户和不稳定网络环境。

5. **Windows / Linux 桌面端体验短板** —— Windows 更新死锁（#96942）、Linux 睡眠抑制（#89110）、Windows 渲染进程泄漏（#98864，7GB RSS）等问题集中在桌面端，跨平台一致性仍需加强。

6. **Agent 可靠性待提升** —— Subagent 静默卡死（#83848）和 idle 通知竞争（#82858）表明多 agent 编排的错误处理和状态同步机制尚不完善。

---

*📅 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) | 报告生成时间：2026-10-02*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报 (2026-10-02)**

---

### 1. 今日速览
- 本日 Codex 存储库发布了一系列 Rust Alpha 版本（`rust-v0.162.0-alpha.2`、`rust-v0.160.0` 等），并对 Windows 环境变量和沙盒启动进行了修复。
- 社区反馈热点集中在 Windows 桌面应用崩溃、IDE 扩展消息丢失、TUI 滚动异常以及随机问候文本冗余等 UX 问题上。
- 十余项重要 PR 合并，涵盖 TUI 加载动画优化、权限快捷键修复、TCP 诊断日志、云端线程 gRPC 客户端以及动态工具继承等核心功能完善。

---

### 2. 版本发布

| 版本 | 更新内容 |
|------|------------|
| **rust-v0.160.0** | 新增“代理指挥中心键盘导航”、支持 Linux X11 终端中键粘贴全屏模式、默认工作区启动会话等功能。 |
| **rust-v0.162.0-alpha.2 / -alpha.1 / -alpha.9/-alpha.8/-alpha.7/-alpha.13/-alpha.12/-alpha.11** | 常规 Rust 依赖升级与 Alpha 通道补丁。 |
| **0.159.0-alpha.12** (桌面) | 回退 PowerShell 处理逻辑，修复 MXC 沙盒启动问题，引入安全的 Alpha 发布流程。 |
| **windows-sys 0.61.2** | 更新 Windows 绑定层，采用 `OwnedHandle`/`OwnedFile` 等现代 API 类型，改善资源管理。 |
| **Linux 沙盒修复** | 解决 bubblewrap 在多个 ro-bind-data 挂载时 fd 重用问题，防止启动失败。 |

*所有发布均可在 `openai/codex` 仓库的 Releases 页面查看。*

---

### 3. 社区热点 Issues (评论数TOP 10)

| # | 标题 | 核心问题 | 社区反响 |
|---|-------|-----------|-----------|
| **49458** | Windows 应用中“dot”启动的任务缺少计算机使用权限 | dot 启动的本地任务无法访问 Computer Use 工具，而普通 Codex 会话可正常工作。 | ⭐13 👍，21 条评论；用户报告强制升级后功能倒退。 |
| **49729** | dot 无法在保存的项目中创建或跟进本地任务 | 任务创建工具无法选择已有项目，生成的线程无法读取/发送消息。 | ⭐2 👍，19 条评论；影响到使用 dot 的日常工作流。 |
| **49497** | Codex Web “无法确定任务根目录”错误 | 选择已发布的云端环境后，第一条消息提交失败，导致界面卡住。 | ⭐26 👍，17 条评论；高关注度 BUG。 |
| **26306** | 配额消耗突增问题 | 使用 Codex App 后，配额消耗异常增长。 | 15 条评论；暂无点赞，用户寻求配额限制调整。 |
| **48913** | 增加设置以禁用随机会话问候 | 每次新 CLI 会话均会弹出随机问候，用户希望可关闭此功能。 | ⭐29 👍，8 条评论（已关闭）。 |
| **49240** | Windows 桌面应用启动卡住，需重启 app-server | 26.924 构建后，应用启动界面卡在加载动画，需重启 `codex.exe` 才可进入主页。 | ⭐3 👍，8 条评论。 |
| **43887** | Windows Computer Use 失败 – “Trusted RPC service is not configured” | 远程浏览器验证失败导致权限拒绝。 | 7 条评论；Pro 用户反复遇到。 |
| **49789** | Windows 沙盒启动失败 – No such file or directory (os error 2) | WSL 沙盒在 26.928 版本后无法正常启动。 | ⭐5 👍，7 条评论。 |
| **48527** | 使会话名称/ID 易于复制并在退出时显示名称 | 用户希望更方便地复制当前会话 ID，并在 CLI 退出时显示会话名称。 | ⭐1 👍，6 条评论。 |
| **48542** | TUI 模式下鼠标滚动不流畅，影响正常终端滚动 | 最新更新导致终端滚动卡顿，用户希望恢复原生滚动行为。 | ⭐5 👍，6 条评论（已关闭）。 |

*链接均指向 `openai/codex` 仓库的 Issue 页面。*

---

### 4. 重要 PR 进展 (合并/活跃 PR)

| # | 标题 | 主要变更 |
|---|-------|------------|
| **50148** | 向 TUI 暴露托管工作树工具 | 通过 MCP 向 TUI 公开 `create_worktree`、`get_worktree_creation_status`、`list_worktrees`，支持嵌入式和本地工作区。 |
| **50140** | 使用服务器权限目录为 TUI 快捷键提供依据 | 使快捷键 respects 与服务器一致的权限策略，包括模型特定的自动审查。 |
| **50131** | 为 TCP 隧道增加可选 JSON 诊断日志 | 新增 `codex tcp-tunnel --diagnostics-json`，以纯 JSON 形式输出故障分类信息，避免泄露凭证。 |
| **50129** | 保留 Windows 环境变量以支持远程 MCP 服务器 | 防止 Unix 侧环境变量过滤掉 Windows 运行时及临时目录变量。 |
| **50128** | 暴露正在运行的 turn 下一步所选模型 | 新增 `CodexThread::current_turn_model` API，返回当前 turn 选定的模型 slug。 |
| **50113** | 新增云端线程恢复/附加的原生 gRPC 客户端 | 实现 `ThreadService.Resume` 与 `ThreadService.Attach` 的 HTTP/2 原生调用，复用现有鉴权逻辑。 |
| **50112** | 集中化 TUI 加载动画与帧调度 | 将语音连接动画移入 `codex-rs/tui/src/motion.rs`，保持 100ms 动画帧率及静音模式优化。 |
| **50109** | 使全屏提示框可滚动并有限制 | 限制全屏弹窗高度为屏幕的 2/3，同时保留上下滚动功能并确保提示行可见。 |
| **50105** | 整合聊天框页脚状态逻辑 | 将页脚属性、模式解析、快捷键提示等代码移入 `chat_composer/footer_state.rs`，保持原有 UI 行为。 |
| **50099** | 增加可选的 Guardian V2 Decisions 对比分类 | 启用 `guardianv2_decisions_comparison` 功能，运行 Decisions 与 Guardian V2 对比分类，使用相同策略和证据。 |
| *（其余 PR 涵盖附件反查页脚优化、动态工具继承、PowerShell 回退等细致修复。)* |

*所有 PR 均合并至主分支，具体 diff 请查看各自提交日志。*

---

### 5. 功能需求趋势

| 趋势 | 体现该趋势的 Issues 示例 |
|------|---------------------------|
| **IDE / 扩展集成** | #49988（VS Code 扩展消息丢失）、#50139（IDE 中 Codex 工作状态下输入缓冲）、#50153（Chrome 权限反复拒绝）。 |
| **Windows 应用稳定性** | #49458（dot 权限缺失）、#49240（启动卡住）、#43887（Computer Use 认证失败）、#49789（WSL 沙盒崩溃）。 |
| **TUI/UX 流畅度** | #48542（滚动卡顿）、#48233（高亮延迟）、#48846（no-daemon 模式状态栏消失）、#48703（计划模式滚动冲突）。 |
| **会话管理** | #48527（会话 ID 复制难）、#48913（随机问候冗余）、#49729（dot 无法跟进项目）。 |
| **权限与工具访问** | #49458（Computer Use 缺失）、#49862（dot 无本机工具访问本地对话）、#50140（权限快捷键校准）。 |
| **沙盒与安全** | #50059（Linux 沙盒启动失败）、#50061（MXC PowerShell 修复）、#50129（环境变量过滤）。 |
| **配额与成本** | #26306（配额突增）。 |
| **模型动态与 Turn 控制** | #50128（Turn 所选模型暴露）。 |

总体上看，社区最急需的改善集中在**Windows 桌面应用的健壮性**（权限、沙盒、启动）和**IDE/TUI 用户体验**（滚动、复制、问候控制、输入缓冲）方面。

---

### 6. 开发者关注点

- **随机问候重复** – 大量 CLI 用户 (#48913) 要求增加设置以禁用问候文本。
- **滚动/鼠标交互异常** – 多位 Linux/macOS/Windows 用户 (#48542、#48233、#48808、#48841) 报告 TUI 模式下鼠标选中/滚动卡顿，影响生产力。
- **Windows 计算机使用工具故障** – “Trusted RPC service is not configured” 及浏览器安全策略拒绝问题反复出现 (#43887、#49458)，影响自动化使用。
- **IDE 扩展消息丢失** – VS Code 插件在更新后出现消息提交丢失 (#49988) 及工作状态下输入缓冲不清 (#50139)，导致用户 confused。
- **沙盒启动失败** – 最新构建在 Windows (#49789) 和 Linux (#50059) 上均出现沙盒启动错误，用户需重启应用才能恢复。
- **配额消耗突增** – 部分 Pro 用户报告配额消耗异常 (#26306)，寻求配额限制或监控手段。
- **dot 功能隔离** – 两个 dot 相关 Issue (#49458、#49729、#49862) 指出 dot 与普通 Codex 会话在权限、项目访问及工具使用上的不一致，影响自动化脚本。

这些问题反映了社区对**稳定性**（尤其是 Windows 桌面应用）、**UI 流畅度**、**IDE 集成健壮性**以及**权限模型一致性**的迫切需求。

---

**每日总结：** 尽管核心功能已趋于稳定，但 Codex 当前面临 Windows 桌面应用的诸多崩溃/权限问题、IDE 扩展中消息丢失/输入缓冲问题，以及 TUI 模式下滚动/高亮延迟等体验瓶颈。未来几个版本的关注焦点将集中在修复这些用户痛点、增强随机问候控制、完善沙盒启动流程以及细化配额消耗监控上。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报  
**日期：2026-10-02**

---

## 1. **今日速览**  
- 发布 v0.64.0-nightly.20261002.gc9096a847，修复核心聊天记录服务的增量提交和状态原子化恢复机制；  
- 高危安全漏洞 PR #29480、#29479、#29488 陆续合并，关闭沙盒构建、校验路径及 MCP OAuth 流程中的风险点；  
- 多个 agent 功能问题持续被社区聚焦，尤其是 subagent 行为异常、max-turn 判断及浏览器/通用 agent 挂起等核心交互瓶颈。

---

## 2. **版本发布**

### v0.64.0-nightly.20261002.gc9096a847  
GitHub 链接: [Release v0.64.0-nightly.20261002.gc9096a847](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261002.gc9096a847)

#### 更新内容：
- **fix(core)**：实现 `ChatRecordingService` 中的增量提交（append-only delta patching）与 bounded history windowing，提升长会话下的性能与存储稳定性；  
- **fix(cli)**：确保会话状态写入原子化，并在数据损坏时可从备份恢复，增强容灾能力。

---

## 3. **社区热点 Issues**

| 编号 | 标题 | 简介 | 重要性 | 社区反馈 |
|------|------|------|--------|-----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success | `codebase_investigator` 子代理错误地将到达最大轮数报告为成功，掩盖中断行为 | P1 | 13 评论，已请求复测 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | 调用通用 Agent 时僵死，简单操作也卡顿一小时以上 | P1 | 8 评论，用户建议禁用子代理有效 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero-Dependency OS Sandboxing | 尝试利用 Gemini 模型对 bash 的天然偏好，优化沙盒化执行策略 | P2 | 9 评论，探索性设计讨论活跃 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | 模型极少自主调用 Skills 或子代理，即使任务高度相关 | P2 | 7 评论，用户反馈需增强行为引导 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads, search, and mapping | 探索 AST 支持的文件读取、搜索及代码结构映射能否提升效率 | P2 | 7 评论，涉及性能与工具链优化 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | [BUG] Browser Agent ignores settings.json overrides | 浏览器 Agent 完全忽略 `settings.json` 中的配置（如 maxTurns） | P2 | 4 评论，配置逻辑需重新审视 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland 环境 | 使用 Wayland 显卡环境下浏览器子代理崩溃 | P1 | 4 评论，涉及平台兼容性 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | Gemini CLI encounters 400 error with > 128 tools | 工具数量超过阈值后接口报错，Agent 缺乏有效工具筛选机制 | P2 | 3 评论，需优化工具上报策略 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model frequently creates tmp scripts in random spots | 模型在多个目录生成临时脚本，造成清理困难 | P2 | 3 评论，建议约束写权限路径 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior | Git reset、--force 等危险命令缺乏安全警示 || P2 | 3 评论，增强风险感知能力 |

---

## 4. **重要 PR 进展**

| 编号 | 标题 | 作者 | 简介 | 状态 |
|------|------|------|------|--------|
| [#29368](https://github.com/google-gemini/gemini-cli/pull/29368) | fix(acp): resolve session/load by ID even without resumable content | abhinav-phi | 修复加载 session 时因数据缺失导致的失败问题 | 合并 |
| [#29376](https://github.com/google-gemini/gemini-cli/pull/29376) | fix(cli): stop Windows IDE detection fallback from running Unix ps | Kaushik2210 | 防止 Windows 环境误调用类 Unix 命令 | 合并 |
| [#29375](https://github.com/google-gemini/gemini-cli/pull/29375) | fix(cli): decode DevTools HTTP response chunks with a stateful decoder | Kaushik2210 | 改进 DevTools 日志块解码逻辑 | 合并 |
| [#29366](https://github.com/google-gemini/gemini-cli/pull/29366) | fix(core): stop replaying tool responses twice on session resume | VishvakR | 解决会话恢复时 tool response 重复触发问题 | 合并 |
| [#29492](https://github.com/google-gemini/gemini-cli/pull/29492) | fix(cli): avoid shell interpolation in sandbox build | princeraj2572 | 防止沙盒构建脚本被注入恶意参数 | 合并 |
| [#29480](https://github.com/google-gemini/gemini-cli/pull/29480) | fix(core): validate git args in Windows command safety | princeraj2572 | 增强 Git 命令在 Windows 下的权限校验 | 合并 |
| [#29488](https://github.com/google-gemini/gemini-cli/pull/29488) | fix(mcp): key RFC 9207 iss-absence rejection on authorization_response_iss_parameter_supported | Pcmhacker-piro | 修复 MCP OAuth 流程中的安全验证逻辑 | 合并 |
| [#29479](https://github.com/google-gemini/gemini-cli/pull/29479) | fix(core): contain legacy checkpoint path inside checkpoints directory | princeraj2572 | 防止旧版 checkpoint 路径绕过目录限制 | 合并 |
| [#29481](https://github.com/google-gemini/gemini-cli/pull/29481) | fix(cli): an unreadable extension-enablement config re-enables every extension | lets-order-some-fries | 修复扩展配置不可读时误启用所有插件的问题 | 合并 |
| [#29490](https://github.com/google-gemini/gemini-cli/pull/29490) | fix(core): avoid duplicating tool response turns on resume | Pcmhacker-piro | 优化恢复会话时的工具响应逻辑 | 合并 |

---

## 5. **功能需求趋势**

从最近 24 小时内活跃的 Issue 中可归纳出以下几大需求方向：

1. **Agent 行为一致性与可靠性**
   - 子代理（subagent）在达到 `MAX_TURNS` 后仍报告成功；
   - 通用 agent 在执行简单操作时挂起；
   - 模型不自主调用 Skills 或子代理；
   - 浏览器 Agent 忽略配置设置。

2. **性能与资源使用优化**
   - 探索 AST 支持的文件读取与搜索；
   - 减少上下文中“firehose”式的文件读取带来的 token 炸裂；
   - 大文件读取引入“手术式读取”策略；
   - 提升终端窗口大小调整时的渲染流畅度。

3. **IDE 集成与跨平台兼容性**
   - Wayland 环境下浏览器 agent 崩溃；
   - IDEA 伴侣集成导致 Enter 键无响应；
   - Windows 平台下不同命令行为差异。

4. **安全性增强**
   - 沙盒构建避免 Shell 注入；
   - Git 命令参数验证；
   - MCP OAuth 流程合规性检查；
   - Checkpoint 路径越权访问防护。

5. **配置灵活性与可见性**
   - Agent 设置屏蔽后被误启用；
   - 子代理轨迹可通过 `/chat share` 查看；
   - 插件扩展支持注册表发现机制。

---

## 6. **开发者关注点**

- **痛点**：
  - 多个 agent（尤其是 browser 与 generalist）在实际使用中表现不稳定，易挂起或误判状态；
  - 配置系统在子组件之间传递不完整，部分 agent 忽略全局或项目级设置；
  - 长期会话中历史窗口管理效率低下，影响上下文切换与恢复；

- **高频需求**：
  - 增强子代理行为透明度与日志追踪；
  - 支持更细粒度的工具启用控制与模型行为约束；
  - 引入 AST 类工具提升代码理解与操作精度；
  - 加强跨平台行为统一性，尤其是 Linux GUI 环境支持。

--- 

本轮迭代从安全性、性能与用户交互三个维度持续投入，后续建议关注子代理行为建模、AST 工具链集成及配置继承机制的深化工作。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-02）

---

## 1. 今日速览

- **重点版本发布**：Copilot CLI v1.0.91 与 v1.0.92 相继发布，新增沙箱 CA 证书管理命令及 MCP 工具稳定性优化。
- **社区活跃度高涨**：共有 30+ GitHub Issue 更新，涵盖企业权限控制、认证问题、MCP 服务集成等多个领域。
- **开发者焦点聚焦**：企业环境下的认证安全性、跨平台兼容性以及 MCP 协议支持成为热门讨论话题。

---

## 2. 版本发布

### ✅ v1.0.91 & v1.0.91-1 (发布于 2026-10-01)

**主要功能更新：**

- **新增命令**:  
  - `copilot sandbox ca`：支持检查、创建、信任、轮换和移除代理 CA 信任设置，包括无人参与的 Windows 配置。
  - `/sandbox ca install` 命令已重命名为 `create` 和 `trust`。
- **会话管理优化**：
  - 沙箱命令在 Windows 上正常运行。
  - 会话时间线在中断后正确清除忙碌状态。
- **改进内容**：
  - CLI 在退出前刷新待处理遥测数据，支持遥测延迟。

### ⚠️ v1.0.92-0 (修复版)

- **Fix**：  
  - MCP 工具在 OAuth 重新认证后仍可正常使用，当工具定义未发生变更时。

🔗 [ Releases 页面](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues（精选 10 条）

| Issue | 标签 | 简述 | 热度 | 链接 |
|-------|------|------|------|------|
| [#953](https://github.com/github/copilot-cli/issues/953) | 认证/权限 | 用户希望在认证时控制 Copilot 拥有仓库访问权限范围 | 👍5 💬8 | [link](https://github.com/github/copilot-cli/issues/953) |
| [#4998](https://github.com/github/copilot-cli/issues/4998) | MCP | macOS 更新后 `.mcp-writer.binding` 缓存设备 ID 导致 CLI 不可用 | 👍4 💬6 | [link](https://github.com/github/copilot-cli/issues/4998) |
| [#5008](https://github.com/github/copilot-cli/issues/5008) | 认证/模型 | 启动时提示 "Not authenticated" 错误，存在认证竞态问题 | 👍5 💬6 | [link](https://github.com/github/copilot-cli/issues/5008) |
| [#4851](https://github.com/github/copilot-cli/issues/4851) | MCP | Azure MCP 服务器无法发送 HTTP 请求，报 BrokenPipe | 👍8 💬5 | [link](https://github.com/github/copilot-cli/issues/4851) |
| [#4959](https://github.com/github/copilot-cli/issues/4959) | 企业/配置 | 企业管理的模型设置未正确应用于非交互式 CLI | 👍3 💬2 | [link](https://github.com/github/copilot-cli/issues/4959) |
| [#4989](https://github.com/github/copilot-cli/issues/4989) | 企业/MCP | `allowedMcpServers` 中 `serverName` 匹配失败，阻止合法 MCP | 👍0 💬1 | [link](https://github.com/github/copilot-cli/issues/4989) |
| [#5022](https://github.com/github/copilot-cli/issues/5022) | 平台/Windows | Windows 下 VS Code 代理主机重复加载个性化指令文件 | 👍1 💬1 | [link](https://github.com/github/copilot-cli/issues/5022) |
| [#5025](https://github.com/github/copilot-cli/issues/5025) | MCP | Figma 远程 MCP 无法获取 Code Connect 数据 | 👍0 💬0 | [link](https://github.com/github/copilot-cli/issues/5025) |
| [#5029](https://github.com/github/copilot-cli/issues/5029) | 功能请求 | 请求在状态行中暴露配额信息和计费周期 | 👍0 💬0 | [link](https://github.com/github/copilot-cli/issues/5029) |
| [#5030](https://github.com/github/copilot-cli/issues/5030) | ACP | 自 1.0.89 起，ACP 模式下任务工具无法启动自定义代理 | 👍0 💬0 | [link](https://github.com/github/copilot-cli/issues/5030) |

🔍 **总结**：以上问题反映出开发者对 **企业级权限控制**、**跨平台稳定性**以及 **MCP 协议集成深度** 的强烈关注，尤其是在认证流程、模型加载策略以及远程环境兼容性方面仍存在明显不足。

---

## 4. 重要 PR 进展（近期值得关注）

以下是最近一段时间内较为活跃或对系统架构有重要影响的 PR：

| PR | 类型 | 描述 | 链接 |
|----|------|------|------|
| [#5036](https://github.com/github/copilot-cli/pull/5036) | 文档更新 | 更新 README 中默认模型版本说明 | [link](https://github.com/github/copilot-cli/pull/5036) |
| [#5034](https://github.com/github/copilot-cli/issues/5034) | 功能请求 | 请求新增隐藏 MCP 状态通知的设置项 | [link](https://github.com/github/copilot-cli/issues/5034) |
| [#5033](https://github.com/github/copilot-cli/issues/5033) | 功能请求 | 请求在 autopilot 模式下禁用“任务完成”摘要 | [link](https://github.com/github/copilot-cli/issues/5033) |
| [#5032](https://github.com/github/copilot-cli/issues/5032) | Bug 修复 | 修复 co-authorship 被破坏的问题 | [link](https://github.com/github/copilot-cli/issues/5032) |
| [#5031](https://github.com/github/copilot-cli/issues/5031) | Bug 修复 | 修复 autopilot 启用后权限错误 | [link](https://github.com/github/copilot-cli/issues/5031) |
| [#5030](https://github.com/github/copilot-cli/issues/5030) | Bug 修复 | 修复 ACP 模式下自定义 agent 无法启动的问题 | [link](https://github.com/github/copilot-cli/issues/5030) |
| [#5029](https://github.com/github/copilot-cli/issues/5029) | 功能增强 | 请求在 statusLine.payload 中暴露配额信息 | [link](https://github.com/github/copilot-cli/issues/5029) |
| [#5028](https://github.com/github/copilot-cli/issues/5028) | Bug 修复 | 修复 create_pull_request 错误信息误报 | [link](https://github.com/github/copilot-cli/issues/5028) |
| [#5027](https://github.com/github/copilot-cli/issues/5027) | Bug 修复 | 修复 Linux 沙箱 DNS 解析失败问题 | [link](https://github.com/github/copilot-cli/issues/5027) |
| [#5025](https://github.com/github/copilot-cli/issues/5025) | Bug 修复 | 修复 Figma MCP 无法获取 code connect 数据 | [link](https://github.com/github/copilot-cli/issues/5025) |

📌 **说明**：部分条目前仅为 Issue 提交，暂未进入 PR 阶段，但代表社区对未来版本的期望方向。

---

## 5. 功能需求趋势

从近期社区提出的 Issues 和 PRs 来看，开发者最关注的功能方向包括：

| 方向 | 描述 | 代表性 Issue |
|------|------|--------------|
| **企业权限控制** | 对 OAuth 授权范围进行细粒度控制，防止过度授权风险 | [#953](https://github.com/github/copilot-cli/issues/953) |
| **认证体验优化** | 解决认证竞态问题，提升用户登录流畅度 | [#5008](https://github.com/github/copilot-cli/issues/5008) |
| **MCP 增强支持** | 提升不同 MCP Server 的兼容性与稳定性 | [#4998](https://github.com/github/copilot-cli/issues/4998), [#4851](https://github.com/github/copilot-cli/issues/4851) |
| **跨平台沙箱支持** | 加强 Linux 与 Windows 上的沙箱功能 | [#5027](https://github.com/github/copilot-cli/issues/5027) |
| **模型管理能力增强** | 支持企业级模型配置下发与本地策略融合 | [#4959](https://github.com/github/copilot-cli/issues/4959) |
| **用户界面定制化** | 提供更多 CLI UI 配置选项（如状态栏信息、通知控制） | [#5029](https://github.com/github/copilot-cli/issues/5029), [#5034](https://github.com/github/copilot-cli/issues/5034) |

📈 **结论**：未来 Copilot CLI 的发展趋势将更加聚焦于 **企业安全合规性**、**协议扩展性** 和 **用户体验个性化定制**。

---

## 6. 开发者关注点

根据社区反馈内容，可以总结出以下开发者普遍关注的问题与痛点：

| 分类 | 问题描述 | 示例 Issue |
|------|----------|------------|
| 🔐 **认证安全性** | 默认授权过于宽泛，缺乏最小权限原则支持 | [#953](https://github.com/github/copilot-cli/issues/953) |
| 🛡️ **沙箱隔离机制** | 在 Linux/Windows 上存在 DNS 和证书信任问题 | [#5027](https://github.com/github/copilot-cli/issues/5027) |
| 🔄 **会话一致性** | 部分会话恢复失败，或在中断后行为异常 | [#5023](https://github.com/github/copilot-cli/issues/5023) |
| ⚙️ **企业配置同步** | 企业下发的配置未能正确应用到 CLI 客户端 | [#4959](https://github.com/github/copilot-cli/issues/4959) |
| 📦 **MCP 协议集成** | 多个 MCP Server 存在连接异常或功能缺失 | [#4998](https://github.com/github/copilot-cli/issues/4998), [#4851](https://github.com/github/copilot-cli/issues/4851) |
| 🧠 **模型加载行为** | 部分场景下模型初始化存在竞态条件 | [#5008](https://github.com/github/copilot-cli/issues/5008) |

📢 **建议**：GitHub 团队应优先解决企业认证与权限问题，并进一步提升沙箱环境下网络与系统调用的兼容性。

---

如需订阅更多每日更新，请关注 [Copilot CLI GitHub 仓库](https://github.com/github/copilot-cli)。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报（2026-10-02）**  

---

### 今日速览  
今日未有新版本发布，但社区活跃度较高。最受关注的议题是 **#6231**：为 OpenAI‑compatible 本地提供商实现模型自动发现，已收到 60 条评论和 241 次点赞；同时，Windows 桌面启动卡死、TUI 多问题、使用额度异常等 Bug 与功能需求也在持续讨论中。

---

### 版本发布  
- **无新版本**  

---

### 社区热点 Issues（精选 10 条）  

| # | 标题 | 评论 / 点赞 | 为什么重要 | 链接 |
|---|------|------------|------------|------|
| #6231 | Auto-discover models from OpenAI‑compatible provider endpoints | 60 / 241 | 减少手动配置模型的负担，尤其是本地模型频繁变动时，直接提升易用性。 | https://github.com/anomalyco/opencode/issues/6231 |
| #38222 | OpenCode Desktop 1.18.4 hangs indefinitely during first‑launch onboarding on Windows | 7 / 0 | Windows 桌面首次启动卡死，阻碍新用户采用；亟需定位启动卡死点。 | https://github.com/anomalyco/opencode/issues/38222 |
| #30116 | [FEATURE]: Memory compaction awareness hooks for agents | 7 / 0 | 长时间 Agent 会话需要感知内存压缩，以便自行处理上下文；是提升长会话稳定性的关键特性。 | https://github.com/anomalyco/opencode/issues/30116 |
| #52367 | gpt‑6‑luna usage reported although never used | 6 / 0 | 使用统计出现虚报，影响成本控制和配额规划，需查 clear 计数逻辑。 | https://github.com/anomalyco/opencode/issues/52367 |
| #37125 | [Windows] TUI shell receives truncated PATH containing only C:\Windows\System32 | 5 / 0 | 导致 git、node 等开发工具在 TUI 中不可用，直接影响开发体验。 | https://github.com/anomalyco/opencode/issues/37125 |
| #51993 | go: deepseek‑v4.1‑flash prompt cache regresses to the first image whenever a new image is added | 5 / 0 | 多图像上下文缓存失效，导致重复计算，拖慢多模态任务。 | https://github.com/anomalyco/opencode/issues/51993 |
| #52445 | Big Pickle wrote a false `Co‑Authored‑By: Claude` trailer into a commit | 4 / 0 | 自动生成错误的贡献者信息，可能引发代码审计混亂，需要审查提交注入逻辑。 | https://github.com/anomalyco/opencode/issues/52445 |
| #43376 | TUI hangs after a multi‑question prompt (question tool, 3 questions) — keys and Ctrl+C unresponsive | 4 / 0 | 多选问题导致 TUI 完全无响应，严重影响交互流程。 | https://github.com/anomalyco/opencode/issues/43376 |
| #38520 | OpenTUI fails to start on Windows ARM64: `bun:ffi dlopen() is not available in this build` | 4 / 2 | Windows ARM64 设备无法启动 TUI，表明跨平台支持仍有 gaps。 | https://github.com/anomalyco/opencode/issues/38520 |
| #52623 | 使用额度异常（配额提前耗尽） | 3 / 0 | 用户反馈在未使用情况下配额被消耗，直接影响信任度与成本管理。 | https://github.com/anomalyco/opencode/issues/52623 |

---

### 重要 PR 进展（精选 10 条）  

| # | PR 标题 | 核心内容 | 链接 |
|---|---------|----------|------|
| #52633 | feat(ai): add native Cohere chat provider | 新增 Cohere Chat v2 原生支持，包含流式输出、思考开关、图像输入等。 | https://github.com/anomalyco/opencode/pull/52633 |
| #52643 | feat(ai): add native Vercel AI Gateway language models | 扩展现有 Gateway Facade，原生支持 Messages / Responses / Chat Completions API。 | https://github.com/anomalyco/opencode/pull/52643 |
| #52634 | fix(ai): report mid‑stream connection loss instead of a decode error | 网络中断时给出准确的 “connection loss” 提示，而非误导性的 decode 错误。 | https://github.com/anomalyco/opencode/pull/52634 |
| #52642 | refactor(core): import schema contracts from their owners | 根据 `packages/schema/AGENTS.md` 规范，直接从所有者包导入 Session、Project 等 schema，消除重复导入。 | https://github.com/anomalyco/opencode/pull/52642 |
| #52641 | refactor(core): collapse per‑session handle into Session service | 将每个会话的句柄合并到 Session.Service 中，减少不必要的包装层，提升调用效率。 | https://github.com/anomalyco/opencode/pull/52641 |
| #47173 | fix: Add functioning deep links for the desktop app | 修复桌面深度链接，使自定义 URL 能正确打开项目或特定视图。 | https://github.com/anomalyco/opencode/pull/47173 |
| #52639 | fix(app): keep stuck timeline headers out of the title fade | 修复标题淡出时卡住的时间线标题导致点击失效的问题。 | https://github.com/anomalyco/opencode/pull/52639 |
| #52640 | refactor(core): inline single‑caller modules | 通过删除只被单个调用者使用的模块并将其代码内联，减少文件数与导入开销。 | https://github.com/anomalyco/opencode/pull/52640 |
| #52637 | refactor(core): delete dead and pass‑through modules | 清理未被生产代码引用或仅作转发的模块，降低维护负担。 | https://github.com/anomalyco/opencode/pull/52637 |
| #52635 | fix(core): release detached location graphs after reload | 解决重载时因未释放 detached location 图导致的内存泄漏（issue #36677）。 | https://github.com/anomalyco/opencode/pull/52635 |

---

### 功能需求趋势  
从今天的 Issues 中可以提炼出以下热点方向：  

1. **模型发现与配置自动化** – 自动列出 OpenAI‑compatible 本地提供商的可用模型（#6231）。  
2. **跨平台稳定性** – Windows 桌面启动、PATH 传递、ARM64 支持（#38222、#37125、#38520）。  
3. **长会话与上下文管理** – 需要感知内存压缩的 Hooks、更智能的缓存（如多图像 prompt cache）以及手 off 技能的项目本地化（#30116、#51993、#36381）。  
4. **使用量与成本透

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-10-02

---

## 1. 今日速览

Pi 正式发布 v1.0.0 版本，带来全屏 TUI 默认模式和资源优化等重要更新。社区活跃度高涉，重点关注模块去重依赖、系统主题兼容性问题以及 MCP OAuth 集成等功能改进方向。多个关键 Bug 已通过 PR 修复或正在处理中。

---

## 2. 版本发布

### ✅ `v1.0.0` 已发布

#### 主要更新内容：

- **全屏 TUI 默认启用**：TUI 现在默认以全屏模式运行。可通过设置 `tuiMode` 为 `"regular"` 保持终端原始滚动行为。
- **更轻量的打包体积**：优化了代码大小与加载效率。
- 更多详情请查阅官方文档：[Terminal and display](https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/docs/settings.md#terminal-and-display)

🔗 [GitHub Release v1.0.0](https://github.com/badlogic/pi-mono/releases/tag/v1.0.0)

---

## 3. 社区热点 Issues

以下是今日社区中最具影响力的 10 个 Issue：

1. **#5653 [OPEN] Move off Shrinkwrap**
   - **内容**：安装 `@earendil-works/pi-ai` 和 `@earendil-works/pi-coding-agent` 会导致重复安装 `pi-ai` 包，因其模块级注册表 Map 不同实例导致功能异常。
   - **重要性**：影响依赖管理与运行时行为一致性，社区反馈强烈。
   - 💬 23 评论 / 👍 0
   - 🔗 [Issue #5653](https://github.com/earendil-works/pi/issues/5653)

2. **#10031 [OPEN] Pi stuck in "Working..." after stopping with ESC**
   - **内容**：使用 `<esc>` 中断思考后，Pi 卡住无法继续，需重启。
   - **重要性**：严重影响交互体验。
   - 💬 19 评论 / 👍 2
   - 🔗 [Issue #10031](https://github.com/earendil-works/pi/issues/10031)

3. **#9688 [CLOSED] Clipboard copy broken**
   - **内容**：修复 OSC 52 剪贴板复制逻辑变更后的问题。
   - **重要性**：早期存在影响广泛，已确认为回归。
   - 💬 9 评论 / 👍 2
   - 🔗 [Issue #9688](https://github.com/earendil-works/pi/issues/9688)

4. **#9255 [OPEN] TUI violent jump on resize with long transcripts**
   - **内容**：长对话记录中视图刷新异常，导致界面抖动与文字重复。
   - **重要性**：影响可视化稳定性。
   - 💬 9 评论 / 👍 1
   - 🔗 [Issue #9255](https://github.com/earendil-works/pi/issues/9255)

5. **#9980 [OPEN] OpenRouter cost estimate inaccuracy**
   - **内容**：OpenRouter 模型计费估算不准确，存在 2~3 倍误差。
   - **重要性**：影响用户成本 perception。
   - 💬 5 评论 / 👍 1
   - 🔗 [Issue #9980](https://github.com/earendil-works/pi/issues/9980)

6. **#9887 [OPEN] Read tool fails with string line ranges**
   - **内容**：某些模型返回字符串类型的 offset/limit，导致渲染错误。
   - **重要性**：兼容性问题泛发。
   - 💬 5 评论 / 👍 0
   - 🔗 [Issue #9887](https://github.com/earendil-works/pi/issues/9887)

7. **#10288 [CLOSED] Vulnerable brace-expansion dependency in shrinkwrap**
   - **内容**：`pi-coding-agent` 发布的 npm-shrinkwrap.json 固定了存在安全漏洞的 `brace-expansion@5.0.9`。
   - **重要性**：安全风险提示。
   - 💬 4 评论 / 👍 0
   - 🔗 [Issue #10288](https://github.com/earendil-works/pi/issues/10288)

8. **#10250 [OPEN] Garbage hex fill in tmux via system theme**
   - **内容**：升级至 0.99.0 后，在 tmux 中启动时输入框被填满十六进制字符。
   - **重要性**：环境兼容性问题突出。
   - 💬 3 评论 / 👍 0
   - 🔗 [Issue #10250](https://github.com/earendil-works/pi/issues/10250)

9. **#10258 [OPEN] OpenAI OAuth login fails with invalid_grant**
   - **内容**：ChatGPT 授权失败，报出 `invalid_grant` 错误。
   - **重要性**：影响核心功能使用。
   - 💬 3 评论 / 👍 0
   - 🔗 [Issue #10258](https://github.com/earendil-works/pi/issues/10258)

10. **#10319 [CLOSED] Image collapse on scroll in fullscreen mode**
    - **内容**：全屏模式下内联图像滚动时崩溃为单行条。
    - **重要性**：UI 体验问题，曾在旧版本中出现。
    - 💬 1 评论 / 👍 0
    - 🔗 [Issue #10319](https://github.com/earendil-works/pi/issues/10319)

---

## 4. 重要 PR 进展

以下是 today 中值得关注的 10 个 PR：

1. **#9714 [OPEN] Add Azure Foundry Chat Completions support**
   - **功能**：扩展 Azure 提供者以支持 Foundry 部署中的 DeepSeek V4 Pro。
   - 🔗 [PR #9714](https://github.com/earendil-works/pi/pull/9714)

2. **#10322 [CLOSED] Add Cloudflare Clef classifiers to Workers AI**
   - **功能**：增加 `@cf/cloudflare/clef` 和 `@cf/cloudflare/clef-flash` 分类器支持。
   - 🔗 [PR #10322](https://github.com/earendil-works/pi/pull/10322)

3. **#9880 [OPEN] Publish config JSON Schemas**
   - **功能**：生成并提交配置文件的 JSON Schema，用于校验 settings/models 等。
   - 🔗 [PR #9880](https://github.com/earendil-works/pi/pull/9880)

4. **#10295 [CLOSED] Animate Radius sign-in + add intro**
   - **功能**：为 Radius 登录添加动画效果并引入欢迎界面。
   - 🔗 [PR #10295](https://github.com/earendil-works/pi/pull/10295)

5. **#10293 [CLOSED] Fix pastel palette brightness in system theme**
   - **功能**：修复系统主题下 Catppuccin Frappe 配色过于鲜艳的问题。
   - 🔗 [PR #10293](https://github.com/earendil-works/pi/pull/10293)

6. **#10290 [CLOSED] Coerce string read offsets**
   - **修复**：处理模型返回字符串类型的 offset/limit 参数问题。
   - 🔗 [PR #10290](https://github.com/earendil-works/pi/pull/10290)

7. **#10197 [OPEN] Unified artifact validation**
   - **功能**：统一工作空间中包构建验证流程，提升发布可靠性。
   - 🔗 [PR #10197](https://github.com/earendil-works/pi/pull/10197)

8. **#10286 [OPEN] Use real-time billing data from OpenRouter**
   - **修复**：改用 OpenRouter 提供的真实费用数据代替估算值。
   - 🔗 [PR #10286](https://github.com/earendil-works/pi/pull/10286)

9. **#10275 [CLOSED] Add Kenari as API-key provider**
   - **功能**：支持来自印尼的 Kenari 服务作为新模型供应商。
   - 🔗 [PR #10275](https://github.com/earendil-works/pi/pull/10275)

10. **#10194 [CLOSED] Copy code login for Anthropic OAuth**
    - **功能**：为 Anthropic OAuth 添加远程设备登录方式。
   - 🔗 [PR #10194](https://github.com/earendil-works/pi/pull/10194)

---

## 5. 功能需求趋势

社区近期关注集中在以下方向：

| 方向 | 描述 |
|------|------|
| **依赖管理优化** | 减少重复安装问题，提高包结构清晰度。 |
| **主题兼容性增强** | 修复系统主题下配色渲染异常，增强跨终端适配能力。 |
| **远程登录支持增强** | 支持非本地回环地址的 OAuth 登录方式。 |
| **图像处理改进** | 修复全屏模式下图像显示异常。 |
| **成本估算准确性** | 改用供应商直接提供的计费数据。 |

---

## 6. 开发者关注点

- **性能与资源使用问题**：开发者希望降低空闲内存占用，尤其是在长时间运行场景中。
- **MCP 集成稳定性**：多个 Issue 涉及 MCP 初始化与 OAuth 流程失败问题。
- **跨平台兼容性**：tmux、SSH、容器环境下的兼容性问题屡见不鲜。
- **模型输出格式处理**：部分模型返回非标准类型数据（如字符串 offset），需增强健壮性处理逻辑。

---

如需订阅或反馈，请访问 [Pi GitHub 仓库](https://github.com/earendil-works/pi)，参与讨论。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-10-02

---

## 1. 今日速览
社区核心精力高度聚焦于 **Managed Agent（托管代理）架构的多阶段落地**，涵盖耐用会话生命周期、Turn 级接管与故障转移、Broker 认证授权、AgentDefinition 版本化等核心基建。同时，**上下文/Token 治理**与 **Memory 机制优化** 持续推进，旨在解决长上下文模型下的非对话开销与召回效率问题。近期发布 Nightly 版修复了工具发现与权限确认的回归问题。

---

## 2. 版本发布
### `v0.24.7-nightly.20261001.a7deb01bcb` (Nightly)
- **核心修复**：对齐 Code Mode 文本与懒加载工具发现逻辑（`fix(core)` by @tanzhenxin），解决工具提示与实际可用集合不一致问题。
- **权限修复**：修复权限确认流程中“已批准”状态未被正确遵守的问题（`fix(permissions)`）。
- **链接**：[Release Page](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261001.a7deb01bcb)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心内容 | 热度/重要性 | 链接 |
|---|-------|----------|-------------|------|
| 1 | **#12380** | **【架构提案】定义 Managed Agent 双路径架构与分阶段交付** | 🔥 **38 评论**<br>全项目最高讨论量。确立了从现有 TS Agent 迁移至托管运行时的总体路线图（Stage A-G），涉及会话持久化、Workspace 绑定、工具执行可恢复、WebSocket 稳定连接等核心能力。 | [查看](https://github.com/QwenLM/qwen-code/issues/12380) |
| 2 | **#12028** | **【性能/Token】非对话上下文 Token 治理** | 🔥 **18 评论**<br>系统提示、工具 Schema、QWEN.md 等固定开销在大模型中占比极高，缺乏度量与优化机制。阻碍大上下文模型成本控制。 | [查看](https://github.com/QwenLM/qwen-code/issues/12028) |
| 3 | **#12867** | **【Managed Agent Stage D】耐用生命周期、Turns、Actions、AgentDefinition** | 🔥 **17 评论**<br>Stage D 后续工作，定义会话/轮次/动作的持久化契约、准入档案与 Agent 定义版本化，是多代理协作基础设施的关键一环。 | [查看](https://github.com/QwenLM/qwen-code/issues/12867) |
| 4 | **#12737** | **【ACP Bridge】Stage B：宿主集成与双引擎并行** | **14 评论**<br>解决 Legacy 引擎与 Managed 引擎共存过渡期的调度与隔离问题，保障平滑迁移。 | [查看](https://github.com/QwenLM/qwen-code/issues/12737) |
| 5 | **#13030** | **【Feature】Hosted Workspace 只读搜索工具准入档案** | **9 评论**<br>为托管工作区引入 `list_directory`/`glob`/`grep_search` 只读工具集，平衡安全性与代理探索能力。 | [查看](https://github.com/QwenLM/qwen-code/issues/13030) |
| 6 | **#12333** | **【CI/度量】Token 优化缺乏“召回率/任务成功率”守门指标** | **8 评论**<br>指出现有基准测试仅度量节省量，未度量工具召回与任务成功的代价，阻碍激进优化上线。 | [查看](https://github.com/QwenLM/qwen-code/issues/12333) |
| 7 | **#12889** | **【Bug】Deferred `tool_call` 允许必填字段为空** | **7 评论**<br>Responses 提供商下延迟工具调用 schema 校验缺失，导致模型可发起参数为空的非法调用。 | [查看](https://github.com/QwenLM/qwen-code/issues/12889) |
| 8 | **#12042** | **【Bug】CLI 记录溯源字段在历史投影中丢失** | **7 评论**<br>导致通知类记录与用户记录误分类，影响会话恢复与审计准确性。 | [查看](https://github.com/QwenLM/qwen-code/issues/12042) |
| 9 | **#13078** | **【CI/安全】每日依赖 CVE 审计失败** | **6 评论**<br>自动化安全扫描管道异常，需关注供应链安全阻断风险。 | [查看](https://github.com/QwenLM/qwen-code/issues/13078) |
| 10 | **#12952** | **【Managed Agent Stage G】权威会话历史、写入者围栏与接管** | **6 评论**<br>外部化会话历史/检查点，实现写入者围栏与故障转移，是高可用托管服务的前置条件。 | [查看](https://github.com/QwenLM/qwen-code/issues/12952) |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 关联 Issue | 链接 |
|---|----|------|----------|------------|------|
| 1 | **#13144** | Fix | **Managed Agent：校验 Undo 回执并披露备份限制**，防止损坏回执污染历史回放/加载。 | #12952 (G) | [查看](https://github.com/QwenLM/qwen-code/pull/13144) |
| 2 | **#13192** | Fix | **Managed Agent：保留 Writer 与发布纪元截止时间**，修复跨时区（JDBC/JVM/DB）租约过期判定错误。 | #12952 | [查看](https://github.com/QwenLM/qwen-code/pull/13192) |
| 3 | **#13173** | Fix | **Managed Agent：被动接管时采纳 Runtime Session**，修复接管后取消路径无法正确停止/释放运行时资源。 | #13083 (G1) | [查看](https://github.com/QwenLM/qwen-code/pull/13173) |
| 4 | **#13084 / #13087** | Feat | **Managed Agent O4 阶段**：Session 永久退休、固定预算读取租约、前台 Shell 输出候选观测与安全回收。 | #12952 (O4) | [#13084](https://github.com/QwenLM/qwen-code/pull/13084) / [#13087](https://github.com/QwenLM/qwen-code/pull/13087) |
| 5 | **#13168** | Feat | **Managed Agent：赋予 Hosted Turn 工作区项目上下文**，解决 `safeMode` 跳过上下文发现导致 QWEN.md/AGENTS.md 不生效。 | #12867 | [查看](https://github.com/QwenLM/qwen-code/pull/13168) |
| 6 | **#13136** | Perf/Fix | **Managed Hooks：界定 Hook 准入与冷启动恢复开销**，通过索引列投影避免全量历史扫描，显著降低长会话延迟。 | #13132 | [查看](https://github.com/QwenLM/qwen-code/pull/13136) |
| 7 | **#13174** | Feat | **Managed Agent：采纳下一代 Hosted Harness (G3)**，会话不再绑定首代进程，支持 Harness 重启后无缝接管。 | #12952 (G3) | [查看](https://github.com/QwenLM/qwen-code/pull/13174) |
| 8 | **#13188** | Fix | **CLI：闭环 #13083 合后审查的 3 个 Critical 发现**，含单元见证测试，巩固 Turn 接管可靠性。 | #13083 | [查看](https://github.com/QwenLM/qwen-code/pull/13188) |
| 9 | **#13154 / #13165** | Fix | **Web Shell**：修复内存面板误覆盖不可读全局 QWEN.md；禁用观察者无权响应的 Managed 审批卡片。 | #13145 等 | [#13154](https://github.com/QwenLM/qwen-code/pull/13154) / [#13165](https://github.com/QwenLM/qwen-code/pull/13165) |
| 10 | **#13158** | Feat | **Memory：可选的提取冷却期与选择器跳过实验**，默认关闭，为后续性能调优提供开关。 | #13003, #13004 | [查看](https://github.com/QwenLM/qwen-code/pull/13158) |

---

## 5. 功能需求趋势洞察

1.  **托管代理化与多代理编排** —— **绝对主线**。
    *   从 #12380 总纲到 Stage D/G/O4 的拆解，社区正在构建**生产级托管运行时**：耐用会话、检查点恢复、写入者围栏、AgentDefinition 版本化、Broker 认证、Workspace 隔离档案。目标是支撑 WebShell、Daemon、SDK 等多入口的高可用、多租户代理服务。

2.  **上下文工程与 Token 成本治理** —— **持续深化**。
    *   #12028、#12333、#13003、#13004 形成闭环：度量固定开销 → 建立“节省 vs 召回/成功率”守门基准 → 实

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-10-02

> 数据源：`github.com/Hmbown/DeepSeek-TUI`（注：近期 Issues/PRs 实际落于 `Hmbown/Codewhale` 仓库，以下按原始链接呈现）

---

## 1. 今日速览

- **无新版本发布**，v0.10.1 集成持续推进，`#6815` 作为 `#6782` 的后续批次继续合入空闲任务优化与 task-store 锁命名修复。
- **社区活跃度集中在汉化倡议与模式优化**：`SparkofSpike` 牵头成立汉化组（`#6804`），另有用户强烈呼吁恢复 YOLO 自动审批模式（`#6309`，已关闭）。
- 贡献者 `asto18089` 的 7 条 PR 经由 `#6799` 统一 landed，重点修复 MCP 超时、JS 子进程泄漏、Vision 请求超时等稳定性问题。

## 2. 版本发布

- 今日无 Release。

## 3. 社区热点 Issues（共 6 条）

| # | 状态 | 标题 | 关键点 |
|---|---|---|---|
| [#6309](https://github.com/Hmbown/Codewhale/issues/6309) | CLOSED | YOLO mode return | 用户呼吁取消逐次审批，偏好 DeepSeek V4 flash 的终端自动化体验 |
| [#6804](https://github.com/Hmbown/Codewhale/issues/6804) | OPEN | **汉化组倡议** | 牵头中英/中日文档本地化，拟建 QQ 群，**社区响应入口** |
| [#6814](https://github.com/Hmbown/Codewhale/issues/6814) | CLOSED | Component catalogue 完成 | ratatui 组件可视化目录与 README gallery 渲染完毕 |
| [#6328](https://github.com/Hmbown/Codewhale/issues/6328) | OPEN | 调度列表 UI | Watches/heartbeat 列表展示，阻塞于 Core cron routes |
| [#6582](https://github.com/Hmbown/Codewhale/issues/6582) | CLOSED | Shell receipt 结构化 | MemWhale 插件需标准化 shell tool_call_after 回执 |
| [#6792](https://github.com/Hmbown/Codewhale/issues/6792) | CLOSED | Session 命令边界 | EPIC-006 最终切片，解决 `/structcopy` 依赖图阻塞 |

## 4. 重要 PR 进展

1. **[#6815](https://github.com/Hmbown/Codewhale/pull/6815)** OPEN — v0.10.1 integration part 2：idle task workers 轮询优化、task-store 锁命名
2. **[#6805](https://github.com/Hmbown/Codewhale/pull/6805)** OPEN — **贡献门控**：插件 OAuth AI 提供商支持（OpenAI 兼容）
3. **[#6715](https://github.com/Hmbown/Codewhale/pull/6715)** OPEN — ChatGPT / xAI 多账户选择、切换与用量限提示
4. **[#6739](https://github.com/Hmbown/Codewhale/pull/6739)** OPEN — rule/chain-segment 标签改为 repo-relative 路径
5. **[#6782](https://github.com/Hmbown/Codewhale/pull/6782)** CLOSED — v0.10.1 集成主干（含审计修复 + 贡献者 PR #6793/6799/6802）
6. **[#6741](https://github.com/Hmbown/Codewhale/pull/6741)** CLOSED — MCP `tools/call` 独立请求预算，防止长执行被 120s 通用超时杀死
7. **[#6744](https://github.com/Hmbown/Codewhale/pull/6744)** CLOSED — TurnStarted 回显 host submission id，便于关联嵌入器提交
8. **[#6743](https://github.com/Hmbown/Codewhale/pull/6743)** CLOSED — JS 执行子进程超时后强制 kill 并上调上限
9. **[#6742](https://github.com/Hmbown/Codewhale/pull/6742)** CLOSED — Vision 请求 30 分钟 envelope，修复多 MB 上传被 120s 断连
10. **[#6740](https://github.com/Hmbown/Codewhale/pull/6740)** CLOSED — idle watchdog 在工具调用期间保持耐心，避免正常 build/test 被误杀

## 5. 功能需求趋势

- **账户与认证**：多 ChatGPT/xAI 账户切换（#6715）、OAuth 插件化提供商（#6805）
- **自动化与模式**：YOLO 无审批模式回归（#6309）
- **国际化**：中文本地化小组组建（#6804）
- **可观测与调度**：Schedules 列表 UI（#6328）、heartbeat 监控
- **插件生态**：MCP 工具预算、shell 回执标准化（#6582）

## 6. 开发者关注点

- **超时策略碎片化**：MCP generic timeout（120s）与 TUI pool（60s）叠加，导致长工具调用被提前终止（#6741）
- **子进程泄漏**：JS 执行、Vision 请求在超时后未正确 kill 子进程（#6743/#6742）
- **空闲看门狗误判**：长期工具调用（build/test）无 journal 中间记录，触发 idle-progress 120s 死锁（#6740）
- **路径硬编码**：project instruction/rule 标签携带绝对路径，目录移动后产生虚假 context_update（#6737/#6739）
- **贡献工作流**：fork 分支拒绝 maintainer push（HTTP 403），需通过 integration branch 统一 landed（#6799）

---
*日报生成时间：2026-10-02 · 数据窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*