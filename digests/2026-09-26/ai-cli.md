# AI CLI 工具社区动态日报 2026-09-26

> 生成时间: 2026-09-26 02:36 UTC | 覆盖工具: 9 个

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

**横向对比分析报告（2026‑09‑26）**  

---

### 1. 生态全景  
当前 AI CLI 工具正从单一的“代码补全”向 **多代理、本地/混合模型、可观测性与成本控制** 方向演进。社区普遍关注 **鉴权稳定性、后台进程（daemon）生命周期、跨平台窗口/控制台行为**、**使用额度透明化** 以及 **可插拔的技能/MCP 生态**。与此同时，针对 Windows 桌面渲染、终端闪烁、多显示器溢出等细节问题的修复正成为发布节奏的重要驱动力。整体呈现“功能丰富+体验打磨”双线并进的态势。

---

### 2. 各工具活跃度对比  

| 工具 | 今日热议 Issues（精选数） | 今日重要 PR（精选数） | 新版本 / Release（过去 24 h） |
|------|--------------------------|----------------------|------------------------------|
| Claude Code | –（摘要生成失败） | – | – |
| OpenAI Codex | 10 | 10 | 1 个正式补丁（rust‑v0.157.1） + 3 × 0.159‑alpha + 3 × 0.158‑alpha = **7** 个预发布/补丁 |
| Gemini CLI | 10 | 10 | 1 个夜间版（v0.63.0‑nightly.20260926） |
| GitHub Copilot CLI | 10 | 0（本周期无新 PR） | 1 个稳定版（v1.0.89‑4） |
| Kimi Code CLI | 0 | 0 | 0（无活动） |
| OpenCode | 10 | 10 | 0（未发布新版本） |
| Pi | 10 | 10 | 0（未发布新版本） |
| Qwen Code | ≥2（文中列出 2 条热点） | ≥3（SDK、CLI、Desktop 相关 PR） | 3 件制品：v0.24.6（CLI）、Desktop v0.24.6、TS SDK v0.1.16 |
| DeepSeek TUI | 10 | 10 | 0（未发布新版本） |

> 注：Issues 与 PR 均为报告中挑选的代表性条目，能够反映社区关注热度与开发节奏。

---

### 3. 共同关注的功能方向  

| 功能方向 | 涉及工具（代表） | 具体诉求 |
|----------|----------------|----------|
| **鉴权与 Token 管理** | OpenAI Codex（#48237）、GitHub Copilot CLI（#4929） | 401 未授权、长周期令牌刷新失效，需要更健壮的刷新机制和友好错误提示 |
| **后台进程/daemon 行为** | OpenAI Codex（PR #48272、#48238、#48195）、GitHub Copilot CLI（线程泄漏 #4710） | 默认不自启、使用 `CREATE_NO_WINDOW` 隐藏控制台、彻底清理僵尸进程 |
| **Windows 平台稳定性** | OpenAI Codex（窗口溢出、闪烁、启动失败）、OpenCode（#35839、#51433）、Qwen Code（自更新权限丢失） | 多显示器渲染、后台程序弹出控制台、启动即失败等问题亟待修复 |
| **使用额度与成本透明** | OpenCode（#9281、#51429、#37874）、Pi（#9980、#10033） | 需要统一 `/usage` 查询、支持自定义货币展示、避免成本计算偏差 |
| **会话与项目持久性** | OpenCode（#29703、#36134、#13877）、Gemini CLI（子代理恢复 #22323） | 项目移动不丢失会话、启动时快速恢复入口、会话选择器展示范围扩大 |
| **跨平台一致性** | OpenAI Codex（Linux 桌面聊天记录打开失败）、OpenCode（#27928、#46225）、Pi（TUI stdout 丢失处理） | GUI/CLI 在 Linux、Windows、macOS 上的表现应保持一致 |
| **错误处理与优雅降级** | Pi（#10056/#10057 TUI exit(1) 修复）、OpenAI Codex（TUI 重连尝试改为共享超时） | 避免因管道断开、SSH 中断等导致的“崩溃”体验，改为优雅退出或状态恢复 |
| **资源泄漏 / 僵尸进程** | OpenAI Codex（终端窗口残留 #48277）、GitHub Copilot CLI（空闲线程 #4710）、Gemini CLI（#26522 低信号重试） | 需要进程生命周期追踪、及时清理句柄、防止无限重试导致 CPU 飙升 |
| **配置灵活性（系统提示、技能开关）** | GitHub Copilot CLI（#2627、#232 system‑param）、OpenCode（#51429 display.currency） | 用户希望在仓库外自定义系统级指令、按需开启/禁用技能、自定义费用展示单位 |
| **插件/MCP 可扩展性** | Gemini CLI（浏览器代理、AST‑aware 读取）、DeepSeek TUI（#6562、#6583 MCP 在 code‑mode 中的统一门控）、Pi（Virtual Models、Codemode/MCP） | 统一的授权门控、零依赖沙箱、类型安全的绑定，以提升生态可插拔性 |

---

### 4. 差异化定位分析  

| 工具 | 核心定位 | 目标用户 | 主要技术路线 |
|------|----------|----------|--------------|
| **OpenAI Codex** | 基于 Rust 的终端代码助手，紧耦合 OpenAI API，提供 daemon 驱动的代理模式 | 需要强大代码生成/重构、喜欢终端工作流的开发者 | Rust 后端、自动 daemon、TUI/CLI 混合、强调网络容错与令牌管理 |
| **Gemini CLI** | Google 多模态模型 + 子代理框架，强调记忆、浏览器代理与 IDE 集成 | 想要多模态理解、Agent 编排、能够调用外部浏览器或文件系统的开发者 | TypeScript/Rust 混合、子代理生命周期管理、零依赖沙箱、持久化状态 |
| **GitHub Copilot CLI** | Copilot 插件体系的命令行入口，聚焦技能/插件生成与会话同步 | 已在 VSCode/IDE 使用 Copilot 的开发者，欲在终端复用同样的技能 | Node.js/Go 混合、插件市场、`--system-prompt` 参数、跨应用会话同步规划 |
| **OpenCode** | 开源可扩展 Agent 框架，内置 TUI、使用透明度与会话管理 | 企业或个人希望自托管、可定制的 AI 编程助手 | Python/Rust 混合、插件机制、使用统计、跨平台桌面端（Electron） |
| **Pi** | 本地/混合 LLM TUI，强调 MCP、Virtual Models、决策门控与可观测性 | 需要离线或自建大模型工作流、关注成本与安全的研究者/工程师 | Rust 核心、MCP 插件、虚拟模型、决策门控（可选）、TUI 优雅退出 |
| **Qwen Code** | 阿里巴巴通义千问系列，提供多语言 SDK（Java/TS）、桌面端与托管 Agent 架构 | 需要跨语言 SDK、企业级托管服务、桌面一体化的开发团队 | Java/TypeScript SDK、托管运行时、Managed Agent 架构、桌面客户端 |
| **DeepSeek TUI** | 纯 TUI 形式的 AI 代理，注重决策门控、信任链、插件/MCP 集成 | 追求高度可控、可审计、低延迟交互的技术爱好者 | Rust 核心、决策门控（可选）、凭证加密、插件门控、工作区信任模

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-26）

---

## 1. 热门 Skills 排行

基于 PR 主题热度、社区讨论活跃度及影响力综合评估：

| 排名 | Skill | 功能概述 | 讨论热点 | 状态 |
|------|-------|----------|----------|------|
| 1 | **skill-creator** (#1298) | 修复 Trigger 评估逻辑，隔离 per-worker 命令竞争、Windows subprocess select() 失败等问题 | 核心基础设施 bug，影响所有 Skill 的触发准确率；Windows 兼容性 | [OPEN](https://github.com/anthropics/skills/pull/1298) |
| 2 | **AWT (AI Watch Tester)** (#822) | 零代码 E2E 测试生成，赋予 Claude 视觉与浏览器控制能力 | 开源工具集成，vision+browser automation 方向受关注 | [OPEN](https://github.com/anthropics/skills/pull/822) |
| 3 | **testing-patterns** (#723) | 覆盖全栈测试方法论：Trophy 模型、单元测试 AAA 模式、React Testing Library 等 | 系统化测试知识体系，长期维护价值高 | [OPEN](https://github.com/anthropics/skills/pull/723) |
| 4 | **document-typography** (#514) | 防止 AI 生成文档的排版问题：孤儿词换行、寡妇段落、编号错位 | 直击文档质量痛点，所有 Claude 用户均可受益 | [OPEN](https://github.com/anthropics/skills/pull/514) |
| 5 | **md2video-audio** (#1703) | 将 Markdown 文档编译为带真人配音的专业 MP4 视频 | 多媒体生成新方向，零成本编译方案 | [OPEN](https://github.com/anthropics/skills/pull/1703) |
| 6 | **pyxel** (#525) | Python 复古游戏开发辅助：实现、调试、帧检查、状态验证 | 游戏开发垂直领域，长期维护（自 2026-03 起持续更新） | [OPEN](https://github.com/anthropics/skills/pull/525) |
| 7 | **proofcore-contract-auditor** (#1771) | 智能合约自动化静态分析 + TON 区块链审计证明锚定 | Web3 安全审计新兴领域，零知识证明技术整合 | [OPEN](https://github.com/anthropics/skills/pull/1771) |
| 8 | **blast-radius** (#1776) | 批量/破坏性写操作前的安全检查清单（归档用户、撤销权限、删除行等） | 安全意识类 Skill，填补"查询正确≠操作安全"的空白 | [OPEN](https://github.com/anthropics/skills/pull/1776) |

---

## 2. 社区需求趋势

从 Issues 中提炼的五大需求方向：

### 🔒 安全与信任治理（热度最高）
- **Issue #492**（43 条评论）：社区技能冒充官方 `anthropic/` 命名空间，构成信任边界漏洞——这是当前社区最强烈的声音。
- **Issue #412**（已关闭）：提议 agent-governance 技能，关注策略执行、威胁检测与审计追踪。
- **Issue #1175**：SharePoint 文档处理的权限控制与安全边界担忧。

### 🏢 企业级协作与共享
- **Issue #228**（16 条评论）：组织级技能共享库需求，替代当前手动分发 .skill 文件的方式。
- **Issue #189**：`document-skills` 与 `example-skills` 插件内容重复导致重复加载。

### 🧪 测试与质量保障
- **Issue #556**：`run_eval.py` 中 `claude -p` 零触发率问题。
- **Issue #1390**：`mcp-builder` 评估脚本对所有真实 MCP 服务器返回伪造错误。
- **Issue #1385**：提议 Reasoning Quality Gate Pipeline（预校准→对抗审查→交付验证）。

### 📄 文档工作流深化
- Issues 和 PRs 大量集中在 document 系列（docx、odt、pdf、typography），社区对文档质量的诉求已从"能生成"升级为"排版规范、无 bug、可协作"。

### ⚡ 性能与资源优化
- **Issue #1487**：`claude-api` Skill 一次性注入 ~156k tokens，耗尽上下文窗口。
- **Issue #1362**：`web-artifacts-builder` 在 pnpm ≥10.1 构建失败。

---

## 3. 高潜力待合并 Skills

以下 PRs 提交活跃、更新频繁且解决真实痛点，近期有较高合并概率：

| Skill | 提交者 | 创建时间 | 最近更新 | 亮点 |
|-------|--------|----------|----------|------|
| **blast-radius** | kishormorol | 2026-09-17 | 2026-09-18 | 填补安全操作空白，概念清晰，易于标准化 |
| **proofcore-contract-auditor** | ProofCore-Protocol | 2026-09-15 | 2026-09-16 | Web3 + ZK 证明交叉领域，技术新颖度高 |
| **fix(docx): LibreOffice timeout** | TINGyu123644 | 2026-09-19 | 2026-09-25 | docx 系列第 4 个相关修复，社区维护意愿强 |
| **fix(mcp-builder)** | Kuldeeep18 | 2026-09-08 | 2026-09-19 | 兼容 mcp≥2.0 API 变更，影响面广 |
| **md2video-audio** | 70v-Yoyo | 2026-09-01 | 2026-09-15 | Markdown→视频的新工作流，差异化明显 |
| **scnet-hpc** | lql341 | 2026-08-20 | 2026-08-24 | HPC/Slurm 集群垂直领域，专业性强 |
| **fix(skill-creator)** | MartinCajiao | 2026-06-10 | 2026-09-16 | 核心基础设施修复，维护周期长但必要 |
| **fix(pdf): case-sensitive refs** | Lubrsy706 | 2026-03-06 | 2026-04-29 | 小而精确的 bug 修复，已获社区验证 |

---

## 4. Skills 生态洞察

> **一句话总结：** 当前社区最集中的诉求是**建立 Skill 分发与信任的安全边界**（Issue #492 以 43 条评论领跑），同时围绕**文档工作流的工程化完善**（docx/pdf/odt 系列累计超 10 个 PR）和**测试/质量保障技能体系化**（testing-patterns、AWT、eval 修复）展开深度建设。

社区已从"快速添加新 Skill"阶段转向"完善基础设施、修复信任与性能问题、提升 Skill 质量"的成熟期。

---

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026‑09‑26）**  

---

### 今日速览
- 今日社区最热议的问题是 **API 密钥 401 未授权错误**（#48237），已引发超 90 条评论和 100+ 👍，影响大量用户的正常使用。  
- 同时，**Windows 平台的多个 UI/CLI 问题**（窗口溢出、后台程序弹出控制台窗口、终端闪烁等）持续升级，成为今日讨论的另一焦点。  
- 版本方面，项目持续推送 **rust‑v0.159.0‑alpha 系列** 以及 **rust‑v0.158.0‑alpha** 的多个预发布，表明团队正在为下一个稳定版积累功能和修复。

---

### 版本发布（过去 24 小时）
| 版本 | 类型 | 备注 |
|------|------|------|
| **rust‑v0.157.1** | 正式补丁 | Chores 类更新，未提供详细亮点（比较因 404 无法获取完整 diff）。 |
| **rust‑v0.159.0‑alpha.3** | 预览版 | 第三个 alpha，继续在 0.159 分支上迭代。 |
| **rust‑v0.159.0‑alpha.2** | 预览版 | 第二个 alpha。 |
| **rust‑v0.159.0‑alpha.1** | 预览版 | 第一个 alpha。 |
| **rust‑v0.158.0‑alpha.15 → .alpha.13** | 预览版 | 连续三个 alpha 补丁，主要聚焦 bug 修复和内部依赖更新。 |

> **链接**：完整对比可见 [rust‑v0.157.0…rust‑v0.157.1](https://github.com/openai/codex/compare/rust-v0.157.0...rust-v0.157.1) 及各 alpha 标签页面。

---

### 社区热点 Issues（挑选 10 条）
| # | 标题 | 评论 / 👍 | 为何重要 | 社区反应 |
|---|------|----------|----------|----------|
| [#48237](https://github.com/openai/codex/issues/48237) | **unexpected status 401 Unauthorized** (API key 错误) | 94 / 102 | 认证失效导致全部请求失败，是目前最高热度的阻塞问题。 | 大量用户报告同上错误，要求快速回滚或提供临时解决方案。 |
| [#25826](https://github.com/openai/codex/issues/25826) | **Windows Desktop: maximized window spills onto adjacent monitors** | 35 / 21 | 多屏环境下窗口渲染错误，影响使用体验。 | 多位用户确认在 Win11/Win10 上复现，建议调整 DPI 或窗口管理逻辑。 |
| [#48016](https://github.com/openai/codex/issues/48016) | **Can't start in windows** (CLI 0.157.0) | 22 / 15 | Windows 上 Codex CLI 启动即失败，直接阻断本地工作流。 | 评论中出现“重新安装”“降级到 0.156.0” 的临时方案。 |
| [#48074](https://github.com/openai/codex/issues/48074) | **Windows: terminal windows repeatedly flash during requests** | 14 / 17 | 每次请求后终端窗口闪烁，干扰命令行使用。 | 用户指出此问题随 daemon 安装而出现，期望抑制不必要的控制台弹出。 |
| [#48090](https://github.com/openai/codex/issues/48090) | **Windows managed daemon opens two visible console windows when starting Codex CLI** | 11 / 2 | 后台 daemon 启动时会弹出两个可见控制台，破坏静默使用。 | 社区普遍认为应改为 `CREATE_NO_WINDOW` 或后台隐藏。 |
| [#25443](https://github.com/openai/codex/issues/25443) | **Codex Desktop gets stuck with refresh-token-revoked auth error** | 11 / 0 | 长时间会话后因 token 被撤销而卡死，需要重新登录。 | 少数但持续出现，暗示 token 刷新机制需要更健壮。 |
| [#48171](https://github.com/openai/codex/issues/48171) | **[Linux] Cannot open any previous chats after update, stuck on Loading** | 6 / 8 | Linux 桌面更新后本地聊天记录无法打开，仅 CLI 正常。 | 用户怀疑本地数据库迁移或索引失效，要求回滚或提供修复补丁。 |
| [#48277](https://github.com/openai/codex/issues/48277) | **CLI: about 20 persistent terminal windows keep opening after an update** | 6 / 2 | 更新后大量终端窗口驻留，手动关闭仍会继续弹出。 | 反馈指向后台进程未正确退出，建议检查 daemon 生命周期。 |
| [#48212](https://github.com/openai/codex/issues/48212) | **[Linux Desktop] Codex tasks stuck on "Starting your task"; CLI works** | 5 / 5 | 桌面卡在启动阶段，但 CLI 能正常执行任务。 | 提示 GUI 与后台服务通信异常，需检查 IPC 或工作区配置。 |
| [#48179](https://github.com/openai/codex/issues/48179) | **Browser Use returns net::ERR_BLOCKED_BY_CLIENT for localhost** | 5 / 0 | 内置浏览器无法访问本地服务，但手动浏览器可行。 | 安全策略或代理设置可能过度阻止了本地回环流量。 |

---

### 重要 PR 进展（挑选 10 条）
| # | 标题 | 关键改动 | 影响 |
|---|------|----------|------|
| [#48318](https://github.com/openai/codex/pull/48318) | Keep TUI reconnect attempts running until the shared deadline | 将 TUI 重连尝试从固定 5 次改为在共享超时（120 s）内持续进行 | 提升网络抖动下的恢复能力，减少误判导致的连接中断。 |
| [#48272](https://github.com/openai/codex/pull/48272) | Prevent Windows daemon launches from retaining launcher stdio | 在创建守护进程前清除标准句柄的继承标志 | 避免父进程等待子进程 EOF，解决部分启动卡死。 |
| [#48238](https://github.com/openai/codex/pull/48238) | Suppress console windows for local Windows MCP servers | 使用 `CREATE_NO_WINDOW` 标志启动本地 stdio MCP 服务器 | 减少不必要的控制台弹出，直接解决 #48090 等问题。 |
| [#48229](https://github.com/openai/codex/pull/48229) | Extract Responses failure parsing into a dedicated module | 将响应失败分类和速率限制解析抽取到 `responses_error.rs` | 使错误处理更易维护，为后续统一错误上报奠基。 |
| [#48224](https://github.com/openai/codex/pull/48224) | Preserve model and access program pairs during compaction | 在压缩过程中持久化并恢复 `cyber_access_program` | 防止因模型/程序配对错位导致的服务器拒绝请求。 |
| [#48222](https://github.com/openai/codex/pull/48222) | Preserve late result metadata for truncated code-mode calls | 保存被截断的嵌套 code-mode 调用的结果元数据 | 确保代码追踪与调试信息完整，提升可观测性。 |
| [#48213](https://github.com/openai/codex/pull/48213) | Isolate executable fixture copies in CLI tests on Linux | 添加 `copy_executable` 辅助函数以避免 ETXTBSY | 提升 Linux 下测试的可靠性，减少因文件锁导致的闪退。 |
| [#48211](https://github.com/openai/codex/pull/48211) | Keep Codex visible during external editor handoff | 在切换至外部编辑器时保留并重绘最后一帧 Codex 画面 | 防止全屏 TUI 编辑时出现闪黑或丢失草稿的问题。 |
| [#48207](https://github.com/openai/codex/pull/48207) | Preserve queued output for observers during code-mode termination | 分离 yield 信号与观察者，确保终止前排空队列输出 | 减少代码模式结束时输出丢失或乱序的情况。 |
| [#48195](https://github.com/openai/codex/pull/48195) | **CLI: make `daemon_auto_start` opt‑in** (Issue #48195 的实现) | 将 `daemon_auto_start` 默认值改为 `false`，并在首次使用时询问 | 直接回应社区对后台 daemon 自启的担忧，减少不必要的资源占用。 |

---

### 功能需求趋势
从本日 Issues 与评论可归纳出以下几个社区关注的方向：

1. **Windows 平台稳定性**  
   - 多屏窗口渲染、后台程序弹出控制台、终端闪烁、启动失败等高频问题，表明对 GUI/交互层的兼容性和资源管理需求迫切。  
2. **守护进程（daemon）行为控制**  
   - 用户普遍希望 daemon 默认不自启、`CREATE_NO_WINDOW` 隐藏控制台窗口，以及更清晰的生命周期管理（避免僵尸进程、资源泄漏）。  
3. **鉴权与 Token 管理**  
   - 大量 401 未授权和 token 被撤销的报告，提示需要更健壮的 token 刷新机制、失效时的友好提示以及离线降级方案。  
4. **跨平台一致性（尤其 Linux 桌面）**  
   - 本地聊天记录打开失败、任务卡在 “Starting your task” 等问题显示 GUI 与后台服务在 Linux 上的同步仍有 gap。  
5. **代码模式与追踪可观测性**  
   - PR 中保存截断调用的元数据、保留队列输出等改动，反映社区对代码执行过程的可审计性与调试友好度的需求。  

---

### 开发者关注点（痛点 & 高频需求）
- **鉴权失效导致的全局不可用**：需要快速定位 token 泄漏或撤销原因，并在客户端提供更明确的错误指引与自动重登流程。  
- **Windows 下不必要的控制台窗口**：无论是 daemon 启动、MCP 服务器还是终端闪烁，均指向进程创建标志的统一处理（`CREATE_NO_WINDOW` / 隐藏窗口）。  
- **多显示器与窗口管理**：最大化窗口跨屏溢出表明渲染布局或 DPI 缩放计算需要更严格的多监适配。  
- **守护进程资源泄漏 / 僵尸进程**：大量报告指出更新后终端窗口持续弹出，提示需要在进程退出时彻底清理句柄和作业对象。  
- **Linux 桌面数据持久化**：聊天记录加载失败提示可能涉及本地数据库（SQLite/文件）迁移或锁定问题，需增强启动时的健康检查与恢复机制。  

> **建议**：后续版本可在发布说明中明确列出针对以上痛点的修复项，并提供对应的回滚或临时开关，以提升社区对发布透明度和信任度。  

---  

*本报告基于 GitHub 公开数据（issues、pulls、releases）整理而成，旨在为开发者提供快速的技术动态概览。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 - 2026-09-26

## 1. 今日速览
Gemini CLI 已发布 v0.63.0-nightly.20260926.g2fe7c2d3f 新版本，重点优化了子代理恢复机制与核心稳定性。社区持续关注子代理可靠性、性能优化以及 IDE 集成体验，近期出现多个关于浏览器代理配置、任务追踪和自动记忆系统的关键问题需要跟进。

## 2. 版本发布
- **v0.63.0-nightly.20260926.g2fe7c2d3f**（2026-09-26）：最新夜间版，包含子代理最大回合限制成功检测逻辑修复、零依赖沙箱化增强等改进。该版本同步推进了多项核心稳定性改进。

## 3. 社区热点 Issues（Top 10）

| 编号 | 标题 | 关键点 | 社区反馈 |
|------|------|--------|----------|
| #22323 | Subagent recovery after MAX_TURNS | 子代理报告 GOAL 成功但实际已达到最大回合限制 | 高优先级，影响子代理可靠性 |
| #21409 | Generalist agent hangs | 简单修改导致代理无限挂起 | 高优先级，用户反馈频繁 |
| #22745 | AST-aware file reads | 引入 AST 感知的文件读取与映射 | 长期需求，提升代码理解精度 |
| #22267 | Browser Agent ignores settings.json | 浏览器代理忽略全局/项目级设置覆盖 | 配置一致性问题 |
| #21968 | Gemini does not use skills/sub-agents enough | 缺乏自定义技能与子代理使用 | 架构改进方向 |
| #26522 | Stop Auto Memory from retrying low-signal sessions | 防止低信号会话无限重试 | 稳定性关键 |
| #22232 | Enhance browser_agent resilience | 自动会话接管与锁恢复机制 | 浏览器兼容性提升 |
| #21598 | Local Subagent - Sprint 1 | 子代理迭代框架建立 | 基础设施建设 |
| #26496 | Memory system bugs | 内存信箱处理不完整 | 性能与安全 |
| #24562 | Terminal resize performance | 窗口调整时历史项刷新优化 | 用户体验 |

## 4. 重要 PR 进展（Top 10）

| 编号 | 标题 | 影响范围 | 状态 |
|------|------|----------|------|
| #29509 | bump version to 0.63.0-nightly | 版本管理 | ✅ 已完成 |
| #29402 | fix(cli): make persistent state writes failure-safe | 持久化状态写入 | ✅ 已完成 |
| #29387 | fix(cli): don't let one malformed extension directory fail all extension loading | 扩展加载 | ✅ 已完成 |
| #29400 | Fix/29365 duplicate tool responses | 会话恢复 | ✅ 已完成 |
| #29399 | fix(core): preserve unrelated comments during edits | 代码编辑 | ✅ 已完成 |
| #29398 | fix(mcp): bound initial tool discovery to short timeout | MCP 集成 | ✅ 已完成 |
| #29397 | fix(agent): prevent session context poisoning | 代理上下文 | ✅ 已完成 |
| #29448 | fix(auth): prevent infinite auth loop | 认证循环 | ✅ 已完成 |
| #29499 | fix(core): serialize file tool operations atomically | 文件操作并发 | ✅ 已完成 |
| #29437 | fix(core): clean up temporary directory | 临时文件清理 | ✅ 已完成 |

## 5. 功能需求趋势

1. **IDE 深度集成**：浏览器代理、VS Code 扩展支持成为核心需求，特别是 `get-shit-done` 输出钩子崩溃问题提示需改进。
2. **性能优化**：大文件读取、终端重绘、并发文件操作竞态条件是高频痛点，需进一步优化上下文管理与并发控制。
3. **子代理自主性**：子代理在达到最大回合、遇到低信号会话、复杂 Git 操作时的行为需更智能化，减少人工干预。
4. **任务追踪升级**：从 in-context 任务列表转向持久化文件 CRUD 模式，解决上下文丢失与成本问题。
5. **安全与隔离**：零依赖沙箱、文件权限控制、认证循环防护成为开发者关注重点。

## 6. 开发者关注点

- **子代理可靠性**：子代理在达到 MAX_TURNS、低信号会话、复杂操作时的行为不稳定，是当前最高优先级问题。
- **性能瓶颈**：大文件读取导致上下文膨胀、终端重绘闪烁、并发工具执行竞态条件严重影响用户体验。
- **IDE 集成**：浏览器代理在 Wayland 环境下的失败、VS Code 扩展配合的交互问题亟待解决。
- **任务管理**：现有的 `WriteToDo` 基于对话历史的追踪存在上下文丢失风险，需迁移至持久化文件系统。
- **配置一致性**：浏览器代理忽略 `settings.json` 覆盖配置，导致用户设置无法生效。

**关联 Issue 链接**：
- [#22323](https://github.com/google-gemini/gemini-cli/Issue/#22323) - Subagent recovery after MAX_TURNS
- [#21409](https://github.com/google-gemini/gemini-cli/Issue/#21409) - Generalist agent hangs
- [#22745](https://github.com/google-gemini/gemini-cli/Issue/#22745) - AST-aware file reads
- [#22267](https://github.com/google-gemini/gemini-cli/Issue/#22267) - Browser Agent ignores settings.json
- [#21968](https://github.com/google-gemini/gemini-cli/Issue/#21968) - Gemini does not use skills/sub-agents enough
- [#26522](https://github.com/google-gemini/gemini-cli/Issue/#26522) - Stop Auto Memory from retrying low-signal sessions
- [#22232](https://github.com/google-gemini/gemini-cli/Issue/#22232) - Enhance browser_agent resilience
- [#29402](https://github.com/google-gemini/gemini-cli/PullRequest/#29402) - fix(cli): make persistent state writes failure-safe
- [#29387](https://github.com/google-gemini/gemini-cli/PullRequest/#29387) - fix(cli): don't let one malformed extension directory fail all extension loading
- [#29499](https://github.com/google-gemini/gemini-cli/PullRequest/#29499) - fix(core): serialize file tool operations atomically

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 - 2026-09-26

## 1. 今日速览

今天发布了 **v1.0.89-4** 版本，重点优化了路由切换体验并增强了插件安装控制。此外，社区关注度最高的几个问题包括：认证令牌刷新失败（#4929）、错误的模型 ID 发送至自定义端点（#4680）以及技能不可访问问题（#4438）。这些问题直接影响用户的会话稳定性和工作流效率。

## 2. 版本发布

**v1.0.89-4** 已发布，包含以下改进：
- **Auto Routing Tier**：自动建议路由层级，可通过快捷键或点击切换
- **Direct Plugin Install Control**：启用/禁用直接插件安装功能，已记录到已禁用的插件不再加载
- **系统提示参数**：新增 `--system-prompt` 参数，允许在仓库外直接传递系统级指令

> 链接：[v1.0.89-4 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.89-4)

## 3. 社区热点 Issues

| 编号 | 标题 | 关键问题 | 社区反响 |
|------|------|----------|----------|
| #4929 | Process-local auth token stops refreshing | 长时间运行的 CLI 进程永久丢失认证，导致所有提示返回授权错误 | 8 条评论，👍 11，严重影响会话续航 |
| #4680 | CLI sends wrong model ID to custom endpoint | 使用非 OpenAI 模型时，API 请求体中发送错误的模型名称（如 `mimo-v2.5` 被替换为 `gpt-5.4-nano`） | 4 条评论，👍 0，可能导致模型选择错误 |
| #4438 | disable-model-invocation: true makes skill unreachable | 技能的 `disable-model-invocation: true` 前缀导致 CLI 完全无法调用该技能 | 8 条评论，👍 11，影响项目技能可用性 |
| #2627 | Configurable system prompt | 用户希望可配置系统提示以减少固定 Token 开销 | 5 条评论，👍 20，高优先级功能需求 |
| #4103 | Plugin marketplace breaks private HTTPS repos | 私有 Azure DevOps 仓库的插件市场克隆失败 | 4 条评论，👍 4，影响企业级使用 |
| #4775 | Mission Control dashboard links 404 | 仪表盘链接指向不存在路径，实际会话位于 `/agents/tasks/<uuid>` | 6 条评论，👍 2，影响监控与会话管理 |
| #4960 | Enterprise-managed custom model cannot be selected | 企业管理的自定义模型在交互菜单中显示但无法选择 | 2 条评论，👍 0，影响企业部署 |
| #4951 | /ask window is too small | `/ask` 和 `/btw` 窗口尺寸过小，难以阅读长回答 | 1 条评论，👍 1，UI 体验改进需求 |
| #4710 | Runaway copilot-file-search thread | 空闲会话中线程持续运行，占用 CPU 和磁盘空间 | 2 条评论，👍 0，性能问题 |
| #4919 | Cross-app session sync | CLI 与 Copilot Desktop App 之间的跨应用会话同步缺失 | 2 条评论，👍 9，跨平台协作需求 |

> 完整列表：[GitHub Issues #4428-#4987](https://github.com/github/copilot-cli/issues?q=created:github%2FCopilot-ClI&q=updated%3A2026-09-26&sort=updated)

## 4. 重要 PR 进展

本周期未有新的 Pull Request 提交，但以下关键功能已在 Issues 中确认待实现：

- **系统提示参数 (#232)**：即将添加 `--system-prompt` 参数，支持在仓库外直接传递系统级指令
- **配置项优化 (#2627)**：计划实现可配置的系统提示，降低固定 Token 开销
- **认证稳定性 (#4929)**：正在研究解决长期会话中的令牌刷新问题
- **跨应用同步 (#4082)**：计划实现 CLI 与 Desktop App 之间的会话同步

> 相关 Issue 链接：[#232](https://github.com/github/copilot-cli/issue/232)、[#2627](https://github.com/github/copilot-cli/issue/2627)、[#4929](https://github.com/github/copilot-cli/issue/4929)、[#4082](https://github.com/github/copilot-cli/issue/4082)

## 5. 功能需求趋势

从近期 Issues 中可以看出社区关注的核心方向：

1. **系统提示灵活性**  
   - 用户希望能够在项目之外自定义系统级指令（#232、#2627）
   - 需要更细粒度的系统提示控制以适配不同工作流

2. **性能与资源管理**  
   - 会话线程泄漏（#4710）、内存压缩上下文丢失（#1571）等问题突出
   - 需要优化资源消耗，提升长会话稳定性

3. **多模型与企业级支持**  
   - 私有仓库插件市场兼容性（#4103）
   - 企业管理的自定义模型选择（#4960）
   - 不同模型间推理努力匹配（#3053）

4. **跨平台与集成**  
   - Windows 滚动栏对齐问题（#3501）
   - CLI 与 Desktop App 会话同步（#4082）
   - LSP 配置文件路径兼容性（#1373）

5. **用户体验改进**  
   - `/ask` 窗口大小调整（#4951）
   - 键盘快捷键扩展（Ctrl+Backspace 删除整词，#2199）

## 6. 开发者关注点

| 痛点 | 描述 | 优先级 |
|------|------|--------|
| 认证稳定性 | 长时间运行的 CLI 进程会话因令牌刷新失败而崩溃 | 高 |
| 会话可靠性 | 空闲时出现的无限循环线程（#4710） | 高 |
| 系统提示限制 | 无法在仓库外自由配置系统级指令 | 中 |
| 性能瓶颈 | 内存压缩后上下文丢失，运行时线程泄漏 | 高 |
| 插件生态兼容 | 私有仓库插件市场功能受限 | 中 |
| UI/UX 体验 | 小型命令窗口难以阅读长输出 | 低 |

> 开发者反馈集中在会话稳定性、性能优化和系统提示灵活性三个维度，这些问题直接影响生产环境的可用性和开发效率。

--- 

**总结**：v1.0.89-4 版本带来了路由切换和插件管理的显著改进，但同时也暴露了认证、性能和系统提示方面的深层问题。社区对系统提示可配置性、跨应用同步以及企业级模型管理的需求尤为强烈，建议优先处理 #4929（认证）、#4710（线程泄漏）和 #2627（系统提示）三大关键项。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报（2026‑09‑26）**  

---

### 今日速览  
今天社区活跃度集中在 **使用情况可视化、会话管理以及跨平台稳定性** 三大方向。多个长期悬而未决的 Issue 在今日得到更新或关闭，而若干围绕 TUI 增强、桌面端菜本地化以及 Agent 框架的 PR 也同步提交，表明社区正在把关注点从功能扩展转向体验打磨与基础设施健康。

---

### 版本发布  
*过去 24 小时内无新版本发布。*  

---

### 社区热点 Issues（精选 10 条）  

| # | 标题 | 评论 / 👍 | 为什么重要 | 社区反应 |
|---|------|----------|------------|----------|
| [#9281](https://github.com/anomalyco/opencode/issues/9281) | **[FEATURE] Add unified usage tracking via /usage** | 12 / 34 | 用户一直希望在登录后直接看到已用额度/速率限制，避免频繁跳转供应商控制台。 | 赞同 głos多，讨论围绕如何在 TUI 中统一展示不同提供商的计费信息。 |
| [#13877](https://github.com/anomalyco/opencode/issues/13877) | **TUI /sessions picker only shows recent sessions** | 11 / 7 | 会话选择器只展示近期记录，导致老项目难以快速恢复，影响工作流连续性。 | 有用户提供了自定义过滤方案，维护者确认正在评估扩展显示范围。 |
| [#29703](https://github.com/anomalyco/opencode/issues/29703) | **[FEATURE]: Allow changing project folder path without losing session history** | 10 / 25 | 项目移动或重命名后会话数据丢失，是桌面端常见痛点。 | 广泛赞同，部分用户已分享基于符号链接的临时规避方案。 |
| [#35839](https://github.com/anomalyco/opencode/issues/35839) | **[BUG]: Launching a third OpenCode instance removes the global opencode CLI on Windows** | 7 / 0 | Windows 多实例启动会误删全局 CLI，直接影响日常使用可靠性。 | 已有复现步骤，社区呼声高，期待在后续补丁中修复。 |
| [#28596](https://github.com/anomalyco/opencode/issues/28596) | **Bug: repeated tool calls** | 6 / 0 | 模型有时会陷入无限循环的工具调用，需要手动中断，严重影响自动化任务。 | 讨论集中在如何增加防抖或最大调用次数限制。 |
| [#37381](https://github.com/anomalyco/opencode/issues/37381) | **[FEATURE]: Add a prompt queue and interrupt controls to the composer** | 6 / 0 | 当前只能通过打断流式输出来插入后续提示，缺乏队列机制影响复杂交互。 | 社区认为这将大幅提升多轮对话的可控性。 |
| [#27928](https://github.com/anomalyco/opencode/issues/27928) | **Duplicate messages on attached session** | 5 / 0 | 跨机器（Windows‑macOS）协作时出现重复消息，干扰信息阅读。 | 有用户提供了日志，定位到消息去重逻辑在分布式场景下失效。 |
| [#36134](https://github.com/anomalyco/opencode/issues/36134) | **[FEATURE]: Add session picker entry point at startup (e.g. -r, --resume or -s without value)** | 5 / 2 | 启动时忘记 session ID 常见，期望直接提供恢复入口。 | 多数赞同，建议在启动参数中自动列出最近会话。 |
| [#37874](https://github.com/anomalyco/opencode/issues/37874) | **OpenCode Go Token 额度异常** | 5 / 0 | Go 订阅显示额度使用异常（已用 10 $，却显示已用一半 60 $ 额度），影响信任度。 | 社区要求后端计费透明化，并提供实时校验接口。 |
| [#38931](https://github.com/anomalyco/opencode/issues/38931) | **[FEATURE]: Add cursor_style configuration support in tui.json** | 4 / 0 | 硬编码的光标样式与终端原生设置冲突，尤其在自定义光标的用户中造成困扰。 | 少量但坚定的支持，期望在 TUI 主题中加入此选项。 |

---

### 重要 PR 进展（精选 10 条）  

| # | 标题 | 类型 | 核心内容 | 价值点 |
|---|------|------|----------|--------|
| [#51435](https://github.com/anomalyco/opencode/pull/51435) | feat(tui): add rawPlaceholders opt‑in for verbatim prompt placeholders | 功能 | 允许插件直接传入未经包装的占位文本，避免默认 `Ask anything… "<suggestion>"` 的装饰。 | 提升插件自定义灵活性，尤其对 LLM 生成的下一步建议更自然。 |
| [#51433](https://github.com/anomalyco/opencode/pull/51433) | fix(desktop): add About menu on Windows | Bugfix | 为 Windows 桌面端添加本地化的 **Help → About** 菜单，调用 Electron 原生关于对话框。 | 补齐平台一致性，帮助用户快速查看版本与许可信息。 |
| [#51431](https://github.com/anomalyco/opencode/pull/51431) | fix(desktop): preserve selected directories and propose local connection links | 功能 + Bugfix | 记住用户上次选中的目录，并在打开项目时给出本地启动链接（类似 #51430 的设想）。 | 减少重复导航，改善本地工作流的无缝衔接。 |
| [#38283](https://github.com/anomalyco/opencode/pull/38283) | docs: add opencode-quota to ecosystem | 文档 | 在生态页面中加入 **opencode-quota** 插件的介绍与链接。 | 让社区更易发现官方维护的额度监控工具，间接支持 #9281 需求。 |
| [#51429](https://github.com/anomalyco/opencode/pull/51429) | feat:usage display currency | 功能 | 新增 `display.currency` 配置，允许用户选择费用展示的法币（非固定 USD）。 | 直接响应使用成本透明化的诉求，适合非美洲用户。 |
| [#51407](https://github.com/anomalyco/opencode/pull/51407) | fix(codemode): bound replacement strings, argument counts, built‑in recursion depth, thenable chains, and rejection diagnostics | Bugfix | 对代码生成模式中的字符串替换、参数计数、递归深度、Promise 链以及错误处理增加上限检查，防止资源耗尽。 | 提升代码生成的健壮性，降低失控循环风险（与 #28596 相关）。 |
| [#51426](https://github.com/anomalyco/opencode/pull/51426) | feat(core): agent manager and task graph pipeline | 架构 | 引入 **AgentManager**（10 条生命周期状态、预算门控）和任务图管线，为多智能体协作奠定基础。 | 为未来的复杂工作流（如自动化测试、代码审计）提供可扩展框架。 |
| [#51422](https://github.com/anomalyco/opencode/pull/51422) | fix(core): resolve configured instructions | Bugfix + 文档 | 恢复 V1 中的 `instructions` 配置解析器，使全局自定义指令在 V2 中再次生效。 | 解决技能/指令失效问题（参见 #32181），恢复用户自定义能力。 |
| [#49691](https://github.com/anomalyco/opencode/pull/49691) | fix(shell): unescape backslash‑escaped chars in bash path args | Bugfix | 对 Bash 路径参数进行反斜杠转义解析，防止 `/tmp/my\ project/x` 被误读为字面量。 | 修复跨平台路径处理错误，提升 Shell 工具可靠性。 |
| [#46225](https://github.com/anomalyco/opencode/pull/46225) | fix(app): encode server credentials as UTF-8 | Bugfix | 使用 UTF‑8 编码用户名/密码后再进行 Base64，避免非 ASCII 凭据导致认证失败。 | 增强国际化支持，特别是使用含有非拉丁字符的凭据的用户。 |

---

### 功能需求趋势（从所有 Issues 提炼）  

1. **使用情况与计费透明化** – 用户强烈希望在客户端直接看到已用额度、速率限制以及支持自定义货币展示（#9281、#51429、#37874）。  
2. **会话与项目持久性** – 支持跨目录移动不丢失会话（#29703）、提供启动时的会话恢复入口（#36134）、改进会话选择器展示范围（#13877）。  
3. **跨平台稳定性（尤其是 Windows）** – 修复多实例删除全局 CLI（#35839）、路径反斜杠处理（#49691）、凭据 UTF‑8 编码（#46225）、桌面菜单与本地化问题（#51433）。  
4. **交互流程改进** – 提示队列与中断控制（#37381）、光标样式可配置（#38931）、去除重复消息（#27928）。  
5. **工具链健壮性** – 防止工具调用无限循环（#28596）、限制递归深度与资源使用（#51407）。  

总体趋势是：从“要更多功能”转向“让现有功能更可靠、更透明、更易用”。

---

### 开发者关注点（痛点 & 高频需求）  

- **Windows 端稳定性**：全局 CLI 被意外删除、桌面切换项目卡死、路径与凭据编码问题频繁出现，需优先保证基础环境的一致性。  
- **计费与使用透明**：订阅额度显示不准、缺乏统一的 `/usage` 查询入口，直接影响用户对付费服务的信任。  
- **会话体验**：会话随项目路径丢失、启动时无法快速恢复、会话选择器信息不全，是日常工作流的主要摩擦点。  
- **交互可控性**：缺少 prompt 队列、光标样式硬编码、重复消息干扰，阻碍复杂多轮对话与定制化终端使用。  
- **工具链健壮性**：模型易陷入工具调用循环、递归/资源缺失上限导致崩溃，亟需更好的防抖与资源治理机制。  

针对上述痛点，社区已经在 Issues 与 PR 中给出了明确的改进方向（如 usage 插件、会话持久化、跨平台修复、交互增强），后续可期待这些修复在即将到来的版本中得到合并与发布。  

---  

*以上信息均基于 GitHub 上公开的 Issues、Pull Requests 与评论统计（截至 2026‑09‑26 23:59 UTC）。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-09-26

> 数据来源：`earendil-works/pi` (pi-mono) | 统计周期：过去 24 小时

---

## 1. 今日速览
- **核心修复上线**：针对 TUI 因 `stdout` 丢失（如 SSH 断开、管道关闭）直接 `process.exit(1)` 导致的“假崩溃”体验，已紧急合并修复（#10057），改为优雅关闭并恢复终端状态。
- **生态与模型适配持续发力**：OpenAI SDK 升级至 7.19.0 修复 GPT-6 Fast 定价错误；合并 Undici 空闲超时禁用，彻底解决本地 LLM（vLLM/Ollama/llama.cpp）长思考被切断问题；实验性引入 **Virtual Models** 与 **Codemode/MCP** 大型功能 PR。
- **高频痛点集中爆发**：ESC 打断思考导致卡死“Working...”（#10031，15 条评论）、npm 搜索索引停滞一个半月（#7885）、RPC steer 语义回归（#9803）、Compaction 提示词爆上下文（#10033）等阻断性问题集中在近期版本（v0.84+）出现，社区反馈强烈。

---

## 2. 版本发布
**过去 24 小时无新版本发布**。当前最新稳定版为 `v0.87.1`，多个关键修复（如 #10057、#10044、#6933）已合并主干，预计将汇入下一版本。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 热度/评论 | 关键点 |
|---|-------|----------|-----------|--------|
| 1 | [#10031](https://github.com/earendil-works/pi/issues/10031) | **ESC 打断思考后卡死 "Working..."**，需 `Ctrl+C` 退出并 `pi -c` 恢复 | 🔥 **15** 👍2 | v0.84+ 回归，多机器复现，严重阻断交互流 |
| 2 | [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search 不索引新发布 pi-package**（自 8/4 起），导致 pi.dev/packages 画廊不更新 | 🔥 **15** | 生态分发链路断裂，新包不可见 |
| 3 | [#9803](https://github.com/earendil-works/pi/issues/9803) | **0.86.0 回归**：RPC steer 成功无法与扩展处理的输入关联，客户端无法可靠追踪 | **11** | 扩展/自动化场景核心断点 |
| 4 | [#9674](https://github.com/earendil-works/pi/issues/9674) | **mistral-conversations**：空 content delta 触发空文本块，GLM 5.x 重放报 400 | **7** | 原生 Mistral 提示词缓存丢失的后遗症 |
| 5 | [#10033](https://github.com/earendil-works/pi/issues/10033) | **Compaction 提示词包含全部思考文本**，导致上下文窗口溢出（DeepSeek V4.1 等推理模型） | **5** | 长会话推理模型自动压缩彻底失效 |
| 6 | [#9974](https://github.com/earendil-works/pi/issues/9974) | **llama.cpp Responses API tool calls 解析错误**，出现重复/损坏的调用执行 | **5** | 本地/兼容层工具调用可靠性 |
| 7 | [#9980](https://github.com/earendil-works/pi/issues/9980) | **OpenRouter 成本计算偏差 2-3x**：取最便宜供应商定价，热门开源模型严重失真 | **5** | 成本可观测性缺失 |
| 8 | [#9918](https://github.com/earendil-works/pi/issues/9918) | **Codex 重放空 signed final-answer**，导致下一轮请求异常 | **5** | 会话持久化一致性 |
| 9 | [#10048](https://github.com/earendil-works/pi/issues/10048) | **流式拆解时 turn_end 边界错误**：“could not resolve persisted assistant entry ID” 直接退出，无崩溃记录 | **2** | 静默丢数据，极难复现调试 |
| 10 | [#10056](https://github.com/earendil-works/pi/issues/10056) | **TUI 遇 EPIPE/ECONNRESET 直接 `exit(1)`**，终端丢失与崩溃不可区分 | **2** | **今日已修复合并 (#10057)** |

> **荣誉提名**：#8913（全屏鼠标 1003 无法关闭）、#9905（Anthropic `thinking.display` 硬编码）、#9953（Anthropic strict schema 保留 min/max 导致 400）、#10000（会话文件首轮前不落盘，首轮失败丢会话）。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心内容 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#10057](https://github.com/earendil-works/pi/pull/10057) | ✅ **Merged** | **TUI 优雅处理 stdout 丢失**：不再 `exit(1)`，改为恢复终端模式后退出，修复“SSH 断开像崩溃” | #10056 |
| 2 | [#10050](https://github.com/earendil-works/pi/pull/10050) | 🟢 Open | **扩展 console 输出隔离**：拦截 `console.*` 与 `process.stdout/stderr`，防止污染 TUI 渲染 | #10002 |
| 3 | [#10044](https://github.com/earendil-works/pi/pull/10044) | ✅ **Merged** | **升级 OpenAI SDK 7.19.0**：

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-09-26**

---

### 1. 今日速览
今日Qwen Code正式发布v0.24.6稳定版，SDK与桌面端同步更新。**托管智能体** 架构推进成为绝对核心，社区同日合并/更新了多项相关PR与提案。同时，Windows平台的自更新权限丢失及网络代理环境下的请求降级问题成为今日开发者反馈的痛点。

### 2. 版本发布
*   **v0.24.6 (正式版)**: 
    *   修复了服务会话创建失败时诊断信息丢失的问题（#12331）。
    *   为 Java SDK 新增了托管运行时支持。
    *   *链接: [Release v0.24.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6)*
*   **Desktop v0.24.6**: 桌面端同步发布，包含上述核心修复与运行时增强。
*   **SDK TypeScript v0.1.16**: 发布新版本SDK，内部捆绑CLI版本0.24.6。
    *   *链接: [PR #12725](https://github.com/QwenLM/qwen-code/pull/12725)*

### 3. 社区热点 Issues (Top 10)
1.  **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** - *24条评论*：提出**Managed Agent双路径架构**提案。讨论如何在不改变现有TS Agent循环的前提下，实现模型推理与工具环境解耦，并赋予会话持久化所有权。这是目前社区架构讨论的绝对核心。
2.  **[#11872](https://github.com/QwenLM/qwen-code/issues/11872)** - *14条评论，5👍*：**macOS Web Terminal 显示 PTY不可用**。由于 `@lydell/node-pty` 未被打包，且 macOS 代码

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，这里是根据您提供的 GitHub 数据生成的 DeepSeek TUI 社区动态日报（2026-09-26）：

---

### **DeepSeek TUI 社区动态日报 (2026-09-26)**

#### **1. 今日速览**

1.  **0.10.1 版本迭代加速**：多项核心问题（首次运行体验、配置处理、内存安全）已收敮，PR #6592 等同步推进，聚焦用户初识和稳定性提升。
2.  **核心功能修复与优化持续推进**：从 MCP 插件集成到运行时分离，从凭证处理到决策门控，开发团队正在系统性地梳理并解决 0.10.1 版本中暴露的关键问题。
3.  **社区需求聚焦**：开发者对“无感化”体验（首次运行提示、配置容错）以及“安全可控”（决策门控、权限管理）的关注度高，多个 Issue 和 PR 围绕这些方向展开。

#### **2. 版本发布**

无。

#### **3. 社区热点 Issues**

1.  **#6603: [needs-triage] Add an optional Decision Gate to speed up routine agent decisions**
    *   **链接**: [Hmbown/Codewhale Issue #6603](https://github.com/Hmbown/Codewhale/issues/6603)
    *   **简介**: 提出引入可选的“快速决策门控”，以降低简单用户消息触发大模型时的成本和延迟。
    *   **重要性**: 直接针对成本和效率问题，是当前社区提出的最核心的优化需求之一。
    *   **状态**: `[OPEN]` / `[needs-triage]`

2.  **#6573: [bug, needs-triage] Bug: Multiple TUI Sessions Contend on Subagents Store → CPU Spin-loop**
    *   **链接**: [Hmbown/Codewhale Issue #6573](https://github.com/Hmbown/Codewhale/issues/6573)
    *   **简介**: 报告在 FreeBSD 上运行多个 TUI 实例时，子代理存储会产生争用，导致 CPU 高达 100%。
    *   **重要性**: 此 Bug 严重影响系统稳定性和性能，是当前最紧急需要修复的 bugs 之一。
    *   **状态**: `[OPEN]` / `[bug, needs-triage]`

3.  **#6585: Make "Whose word wins" checkable: provenance on instructions and memory, agent-written text as claims, honesty not overridable**
    *   **链接**: [Hmbown/Codewhale Issue #6585](https://github.com/Hmbown/Codewhale/issues/6585)
    *   **简介**: 讨论如何增强 AI 代理输出的可追溯性和诚实度，使其指令和记忆的来源更加明确。
    *   **重要性**: 涉及 AI 代理行为的根本控制，提升了系统的可解释性和可靠性。
    *   **状态**: `[OPEN]`

4.  **#6582: [enhancement, needs-triage] hooks: structured execution receipt on stdin for shell tool_call_after**
    *   **链接**: [Hmbown/Codewhale Issue #6582](https://github.com/Hmbown/Codewhale/issues/6582)
    *   **简介**: 寻求在 shell 工具调用后，通过 stdin 提供结构化的执行反馈，以支持集成第三方记忆系统。
    *   **重要性**: 揭示了插件/MCP 集成能力的需求，对提升系统生态性和可扩展性非常关键。
    *   **状态**: `[OPEN]` / `[enhancement, needs-triage]`

5.  **#6566: [bug] First run: new users never see onboarding; first message lost or doubled; provider picker, key errors and approval card are developer-facing**
    *   **链接**: [Hmbown/Codewhale Issue #6566](https://github.com/Hmbown/Codewhale/issues/6566)
    *   **简介**: 描述首次运行时，新用户无法看到指导提示、消息丢失或重复、错误信息不够友好等问题。
    *   **重要性**: 直接影响用户的首次体验，是当前最需要关注的 UX 问题。
    *   **状态**: `[CLOSED]`

6.  **#6562: Code mode for MCP and plugins: discovery without re-pinning, then typed bindings through one shared gate**
    *   **链接**: [Hmbown/Codewhale Issue #6562](https://github.com/Hmbown/Codewhale/issues/6562)
    *   **简介**: 探讨如何让 MCP 和插件在“代码模式”下进行工具调用，消除重复授权的烦恼。
    *   **重要性**: 是当前 MCP 和插件生态发展的核心需求，PR #6583 已解决此问题。
    *   **状态**: `[CLOSED]`

7.  #6510: codewhale exec without --auto bypasses the Engine with two different prompts; review has two prompts
    *   **链接**: [Hmbown/Codewhale Issue #6510](https://github.com/Hmbown/Codewhale/issues/6510)
    *   **简介**: 发现 `exec` 命令在无 `--auto` 参数时绕过了核心指令引擎，导致行为不一致。
    *   **重要性**: 指出了核心指令流程中的潜在缺陷，PR #6588 针对性修复。
    *   **状态**: `[CLOSED]`

8.  #6587: fix(tui): right-click reaches every surface; items do what they say; Open in editor stays in the workspace
    *   **链接**: [Hmbown/Codewhale Issue #6587](https://github.com/Hmbown/Codewhale/issues/6587)
    *   **简介**: 修复右键点击功能未覆盖所有界面元素，文件链接打开方式不一致等问题。
    *   **重要性**: 改善 TUI 交互体验，使其更直观和一致。
    *   **状态**: `[OPEN]`

9.  #6563: [bug] codewhale config set accepts typos and unknown keys silently; did-you-mean uses a stale key list
    *   **链接**: [Hmbown/Codewhale Issue #6563](https://github.com/Hmbown/Codewhale/issues/6563)
    *   **简介**: 配置命令容忍拼写错误和未知键，容易导致用户误操作和配置错误。
    *   **重要性**: 涉及配置的健壮性，是提升用户配置体验的关键。
    *   **状态**: `[CLOSED]`

10. #6500: [bug] Model selection: pinning a model and adding it to Fleet do not work; audit every menu action
    * **链接**: [Hmbown/Codewhale Issue #6500](https://github.com/Hmbown/Codewhale/issues/6500)
    * **简介**: 报告模型选择菜单中的“固定模型”和“添加至 Fleet”功能失效。
    *   **重要性**: 阻塞用户对模型配置的常用操作，需紧急修复。
    *   **状态**: `[CLOSED]`

#### **4. 重要 PR 进展**

1.  **#6604: feat: optional Superfast Decision Gate (shadow mode, off by default) [contribution-gate]**
    *   **链接**: [Hmbown/Codewhale Pull Request #6604](https://github.com/Hmbown/Codewhale/pull/6604)
    *   **内容**: 为 Issue #6603 提供实现，添加一个可选的“超快速决策门控”模块（当前仅测量和记录）。
    *   **重要性**: 是解决成本和效率问题的重要一步。

2.  **#6592: fix(tui): first run connects a model, messages are never lost or doubled, workbar, approval save offers fail closed**
    *   **链接**: [Hmbown/Codewhale Pull Request #6592](https://github.com/Hmbown/Codewhale/pull/6592)
    *   **内容**: 解决了 #6566 中关于首次运行体验的多个问题，包括模式连接、消息丢失和双倍显示。
    *   **重要性**: 显著提升了新用户的首次使用体验。

3.  **#6583: feat(codemode): MCP and plugin calls in code mode through the one approval gate**
    *   **链接**: [Hmbown/Codewhale Pull Request #6583](https://github.com/Hmbown/Codewhale/pull/6583)
    *   **内容**: 实现了 #6562，使 MCP 和插件调用在代码模式下统一通过一个授权门控。
    *   **重要性**: Simplifies plugin/MCP workflow and enhances security.

4.  **#6588: fix(runtime): one turn-loop guard sees sub-agent and RLM loops; plain exec and review get one prompt authority**
    *   **链接**: [Hmbown/Codewhale Pull Request #6588](https://github.com/Hmbown/Codewhale/pull/6588)
    *   **内容**: 修复了指令循环检测不完整的问题，确保子代理和 RLM 循环都能被识别，统一了 exec 和 review 的提示词授权。
    *   **重要性**: 提升了系统的指令循环控制和一致性。

5.  **#6601: fix(trust): credentials masked at rest, honest approval timeouts, fail-closed grants and workspace trust**
    *   **链接**: [Hmbown/Codewhale Pull Request #6601](https://github.com/Hmbown/Codewhale/pull/6601)
    *   **内容**: 从信任角度进行的修复，包括凭证在磁盘上的遮蔽、诚实的授权超时处理、失败关闭的授权和工作区信任。
    *   **重要性**: 加强了系统的安全性和数据保护。

6.  #6591: feat(receipts): list what a session did, from the records it already keeps
    *   **链接**: [Hmbown/Codewhale Pull Request #6591](https://github.com/Hmbown/Codewhale/pull/6591)
    *   **内容**: 允许系统列出一个会话期间执行了哪些操作，这些信息从已有的记录中提取。
    *   **重要性**: 提供了事件审计和事后回顾的能力。

7.  #6587: fix(tui): right-click reaches every surface; items do what they say; Open in editor stays in the workspace
    *   **链接**: [Hmbown/Codewhale Pull Request #6587](https://github.com/Hmbown/Codewhale/pull/6587)
    *   **内容**: 修复了右键点击和文件链接打开的交互问题。
    *   **重要性**: 改进 TUI 的用户交互体验。

8.  #6602: fix(runtime): undo repair, approval waits, hooks on runtime threads, edit/patch integrity
    *   **链接**: [Hmbown/Codewhale Pull Request #6602](https://github.com/Hmbown/Codewhale/pull/6602)
    *   **内容**: 处理了运行时中的撤销修复、授权等待、运行时线程上的挂钩以及编辑/补丁的完整性问题。
    *   **重要性**: 维护了运行时核心逻辑的稳健性。

9.  #6589: Workflow truth, safe /share, Claude Code agents, worktree cleanup, per-thread provider switch
    *   **链接**: [Hmbown/Codewhale Pull Request #6589](https://github.com/Hmbown/Codewhale/pull/6589)
    *   **内容**: 包含了工作流程真实性、共享安全、Claude Code 代理支持、工作树清理和线程级别的提供者切换等多个改进。
    *   **重要性**: 提升了工作流管理和并发处理能力。

10. #6586: refactor(split): codewhale-runtime crate and boundary ratchet (RS-0..RS-7)
    *   **链接**: [Hmbown/Codewhale Pull Request #6586](https://github.com/Hmbown/Codewhale/pull/6586)
    *   **内容**: 开始实施运行时与 TUI 的分割计划，创建 `codewhale-runtime` crate，并添加边界警戒。
    *   **重要性**: 标志着项目架构重构的重要里程碑，有助于提升代码解耦度和可维护性。

#### **5. 功能需求趋势**

1.  **用户体验优化**
    *   **首次运行引导与稳定性**：围绕新用户首次体验（指导提示、消息处理）的 Issue 和 PR 持续关注。
    *   **配置容错与反馈**：希望配置命令更健壮，能智能地纠正用户输入错误。
    *   **交互改进**：希望提升 TUI 的交互一致性和便捷性（如右键菜单）。

2.  **效率与成本控制**
    *   **快速决策机制**：亟需一种方式来跳过大模型，以低成本处理常规、无需复杂思考的用户查询。

3.  **安全与可控性**
    *   **权限与信任管理**：强化凭证保护、授权超时处理和基于工作区的信任模型。
    *   **行为可追溯性**：希望 AI 代理的输出和指令有更清晰的来源和依据。

4.  **插件与集成**
    *   **MCP 与插件集成**：希望在代码模式下更顺畅地使用和调用外部插件和 MCP 服务。
    *   **扩展性**：探索通过 TypeScript/Cordis 等方式提升插件和扩展的可能性。

#### **6. 开发者关注点**

*   **性能瓶颈**：#6573 报告的 CPU 高消耗问题是开发者当前最关注的硬性需求，需要紧急排查解决。
*   **配置与错误处理**：开发者希望系统在配置不正确或遇到常见错误时，能够给出更清晰、可操作的反馈，而不是悄无声息地失败或接受无效输入。
*   **模块化与架构**：围绕运行时分离、插件架构等话题的讨论和实现显示，开发者对项目未来架构的可演进性和模块化非常关注。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*