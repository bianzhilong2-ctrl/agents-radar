# AI CLI 工具社区动态日报 2026-10-09

> 生成时间: 2026-10-09 03:42 UTC | 覆盖工具: 9 个

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



# Claude Code Skills 社区热点报告
*数据截止：2026-10-09 | 来源：anthropics/skills*

---

## 1. 热门 Skills 排行

> 注：PR 层面的评论数据均显示为 `undefined`，以下综合 PR 摘要质量、Issue 关联度、活跃维护状态及社区讨论热度进行排序。

### 🔥 #1742 — mcp-builder：支持 MCP ≥2 API 变更与自定义请求头
- **作者**：Kuldeeep18 | **状态**：OPEN | **更新**：2026-10-08（最近活跃）
- **功能**：修复 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的重命名问题，并将自定义 HTTP 头从直接 kwarg 迁移到 `create_mcp_http_client` / `http_client` 方式。
- **社区热点**：直接修复 Issue #1668，属于 MCP 生态兼容性刚需。MCP（Model Context Protocol）是 Claude Code 生态的关键基础设施，此类修复 PR 备受关注。
- **链接**：https://github.com/anthropics/skills/pull/1742

### 🔥 #1298 — skill-creator：隔离触发词评估、Windows 兼容与运行时容错
- **作者**：MartinCajiao | **状态**：OPEN | **更新**：2026-09-16
- **功能**：解决触发词评估中的假阴性/假阳性问题——多 worker 命令探测竞争、`select()` 在 Windows 管道上失效、无关工具中断扫描；运行时失败不再被误判为"非触发"。
- **社区热点**：skill-creator 是核心元 Skill，其评估框架的准确性直接影响所有 Skill 的开发质量。关联 Issue #556（`run_eval.py` 触发率 0%）、#1352、#1383 等多个高热度 Issue。
- **链接**：https://github.com/anthropics/skills/pull/1298

### 🔥 #1961 — skill-creator：加固评估查看器（脚本逃逸、DNS 重绑定、XSS）
- **作者**：Joncik91 | **状态**：OPEN | **更新**：2026-10-07
- **功能**：加固 `generate_review.py` + `viewer.html`，修复三大安全漏洞：JSON 数据嵌入导致的脚本逃逸、DNS 重绑定攻击、跨站 POST 提交，以及 HTML 转义不彻底问题。
- **社区热点**：安全类 PR 在社区中关注度极高。关联 Issue #1394（`escapeHtml` XSS 漏洞，4 👍），说明社区对 Skill 安全性有强烈诉求。
- **链接**：https://github.com/anthropics/skills/pull/1961

### 🔥 #1771 — proofcore-contract-auditor：智能合约审计与 TON 区块链存证
- **作者**：ProofCore-Protocol | **状态**：OPEN | **更新**：2026-09-16
- **功能**：对 Solidity/Rust 智能合约进行自动静态分析，并将加密审计证明锚定到 TON 公链（ProofCore 零存储 Merkle 协议）。
- **社区热点**：Web3 + AI 交叉方向，社区对"去中心化审计"概念兴趣浓厚，是 Skills 生态中首个区块链原生 Skill。
- **链接**：https://github.com/anthropics/skills/pull/1771

### 🔥 #1703 — md2video-audio：Markdown → 带人声旁白的 MP4 视频
- **作者**：70v-Yoyo | **状态**：OPEN | **更新**：2026-09-15
- **功能**：通过 Marp 将 Markdown 转换为演示文稿幻灯片，再编译为带真人级语音旁白的专业 MP4 视频，零成本。
- **社区热点**：内容创作自动化方向，"Markdown 到视频"的链路对知识传播、产品演示等场景有广泛适用性。
- **链接**：https://github.com/anthropics/skills/pull/1703

### 🔥 #1245 — notion-spec-to-implementation + quantitative-resume-auditor
- **作者**：mrdesouzaphd-cmyk | **状态**：OPEN | **更新**：2026-09-30
- **功能**：① 将产品/技术 Spec 拆解为可执行的 Notion 任务（含验收标准、进度追踪）；② 量化简历审计（针对技术岗位）。
- **社区热点**：Spec → 代码的自动化链路是开发者的高频痛点，两个 Skill 分别面向项目管理和求职两个高需求场景。
- **链接**：https://github.com/anthropics/skills/pull/1245

### 🔥 #822 — AWT (AI Watch Tester)：AI 驱动的 E2E 测试
- **作者**：ksgisang | **状态**：OPEN | **更新**：2026-09-19
- **功能**：赋予 Claude 视觉和浏览器控制能力，实现零代码 E2E 测试自动生成与自动执行。
- **社区热点**：测试自动化是社区持续关注的领域。关联 Issue #412（Agent Governance）、#1385（Reasoning Quality Gate），测试与质量保障方向热度高。
- **链接**：https://github.com/anthropics/skills/pull/822

### 🔥 #83 — skill-quality-analyzer + skill-security-analyzer（市场元 Skills）
- **作者**：eovidiu | **状态**：OPEN | **更新**：2026-01-07
- **功能**：两个元 Skill——前者从结构/文档/功能/性能/安全五个维度评估 Skill 质量；后者专注安全审计。
- **社区热点**：社区对 Skill 质量标准化和安全性的需求正在快速增长，这两个元 Skill 可能成为生态的"基础设施"。
- **链接**：https://github.com/anthropics/skills/pull/83

---

## 2. 社区需求趋势

从 Issues 分析，社区最期待的新 Skill 方向如下：

| 排名 | 需求方向 | 代表 Issue | 核心诉求 |
|------|---------|-----------|---------|
| 1 | **组织级 Skill 共享** | #228（16 评论，8 👍） | 希望 Skill 可在组织内直接共享，而非手动下载上传 .skill 文件 |
| 2 | **Agent 治理与安全** | #412（6 评论）、#492（43 评论，2 👍） | 策略执行、威胁检测、信任评分、审计追踪；社区技能冒充官方命名空间的安全问题 |
| 3 | **评估框架可靠性** | #556（12 评论，7 👍）、#1352（4 评论，2 👍）、#1383（4 评论） | `run_eval.py` 触发率系统性失真、并行 worker UUID 交叉匹配、Windows 兼容性 |
| 4 | **上下文窗口优化** | #1487（4 评论） | `claude-api` Skill 惰性注入 ~156k tokens，单次工具调用即耗尽上下文 |
| 5 | **推理质量关卡** | #1385（4 评论，1 👍） | 三阶段流水线：任务前校准 → 对抗性审查 → 交付验证 |
| 6 | **紧凑记忆/状态管理** | #1329（9 评论） | 用符号化记号替代散文式记忆，压缩长期 Agent 的上下文开销 |
| 7 | **重复 Skill 检测** | #189（6 评论，9 👍） | `document-skills` 与 `example-skills` 插件内容重复，需去重 |

**趋势总结**：社区正从"有什么 Skill"转向"Skill 用得安全吗、准吗、共享方便吗"——**可靠性、安全性、协作性**是下一阶段的核心诉求。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、关联 Issue 热度高，但尚未合并，可能近期落地：

| PR | Skill | 关联 Issue 热度 | 为什么值得关注 |
|----|-------|----------------|--------------|
| **#1961** | skill-creator 安全加固 | #1394（XSS，4 👍） | 安全漏洞修复，社区 👍 最高的 Issue 直接驱动 |
| **#1298** | skill-creator 评估修复 | #556（12 评论）、#1352、#1383 | 多个高热度 Issue 的集中修复方案 |
| **#1742** | mcp-builder MCP v2 兼容 | #1668 | MCP 生态基础设施，影响所有依赖 MCP 的 Skill |
| **#1980** | webapp-testing 命令注入修复 | — | CWE-78 安全修复，`shell=True` 风险属于高危 |
| **#1792** | docx LibreOffice 超时处理 | — | 从"伪成功"到真实错误报告，提升文档 Skill 可靠性 |

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：从"堆数量"转向"提升可信度与工程化水平"——即如何让 Skill 更安全（防冒充、防注入）、评估更准确（触发率不失真）、共享更便捷（组织内一键分发），以及元工具（Skill 质量/安全分析器）的标准化。**

---

**Claude Code 社区动态日报（2026‑10‑09）**  

---

### 今日速览  
- 过去 24 小时内发布了两个补丁版本 **v2.1.294** 和 **v2.1.295**，分别修复了 hook 指令判断、增加了 `onFailure:"block"` 能力以及 Program Status Protocol（OSC 7501）终端状态显示。  
- 社区活跃度较高，累计 50 条更新的 Issue 中，**#65961（Claude 默认冗长代码注释）** 以 41 条评论、250 点赞成为今日最受关注的问题，反映出对模型输出可控性的强烈诉求。  
- PR 方面仅有 7 条更新，全部为安全与配置加载相关的修复（hookify、脚本等），表明近期重点在于巩固现有功能的稳健性而非新特性引入。

---

### 版本发布  

| 版本 | 更新要点 | 链接 |
|------|----------|------|
| **v2.1.295** | • 新增 `onFailure: "block"` 用于 command 与 HTTP hook：当 hook 无法启动、超时或返回非预期退出码时，阻止后续动作而非放行。<br>• 添加 **Program Status Protocol (OSC 7501)** 支持：实现该协议的终端可展示 Claude Code 的运行状态（如忙碌、就绪）。 | [v2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295) |
| **v2.1.294** | • 修复 `prompt` 与 `agent` hook 以指令形式编写时的判断逻辑（如 “Block commands that …”），使其真正能够阻止应被阻止的操作。<br>• 改进 `prompt` hook 在 **Stop** 与 **SubagentStop** 事件上的指令判断（如 “Carry on if the build is broken”），降低 Claude 误判的概率。 | [v2.1.294](https://github.com/anthropics/claude-code/releases/tag/v2.1.294) |

---

### 社区热点 Issues（挑选 10 条）  

| # | 标题 & 简要描述 | 评论 / 点赞 | 为什么重要 | 链接 |
|---|----------------|------------|------------|------|
| **#65961** | Claude 默认生成冗长代码注释，忽略用户要求停止注释的指令。 | 41 / 250 | 模型输出可控性是核心痛点，直接影响代码审查效率和 token 消耗。 | [#65961](https://github.com/anthropics/claude-code/issues/65961) |
| **#95125** | 桌面应用：Enter 键直接提交消息，导致多段落 prompt 意外提交。请求新增换行仅由点击或 Ctrl+Enter 提交的选项。 | 8 / 28 | 提升编辑体验，减少误触，尤其对长俏思路的用户尤为重要。 | [#95125](https://github.com/anthropics/claude-code/issues/95125) |
| **#81024** | VS Code 扩展：会话列表硬编码 `includeWorktrees: false`，未显示 git‑worktree 会话。 | 8 / 9 | 对采用工作树开发的团队来说，会话可见性直接影响切换成本。 | [#81024](https://github.com/anthropics/claude-code/issues/81024) |
| **#92434** | macOS：自动压缩依据上一轮 token 数量决策，导致重新注入的指令文件溢出窗口而非真正压缩。 | 6 / 0 | 压缩机制失效会导致上下文窗口频繁触发，影响长任务稳定性。 | [#92434](https://github.com/anthropics/claude-code/issues/92434) |
| **#87628** | VS Code 扩展：切换会话后返回时，未发送的草稿被丢失。 | 6 / 3 | 草稿保存是基本编辑期待，丢失会增加重复工作。 | [#87628](https://github.com/anthropics/claude-code/issues/87628) |
| **#95822** | 短生命周期命令（如 `claude auth status`、`claude --bg …`）在启动时触发 OAuth 刷新但未保存，导致刷新 token 被丢弃。 | 6 / 1 | 身份认证流程的可靠性直接影响后台任务与 CI/CD 集成。 | [#95822](https://github.com/anthropics/claude-code/issues/95822) |
| **#96221** | 模型选择器中 Opus 5.5 缺少 “Fast mode” 切换开关（虽然可通过其他方式打开）。 | 5 / 6 | 功能不一致让用户困惑，影响对新模型性能调度的直观使用。 | [#96221](https://github.com/anthropics/claude-code/issues/96221) |
| **#79953** | Workflow 内部的 `agent()` 调用不受 Agent PreToolUse hook 或可配置运行时预算限制。 | 4 / 0 | 暴露了子工作流的资源管控漏洞，可能导致无限递归或过度消耗。 | [#79953](https://github.com/anthropics/claude-code/issues/79953) |
| **#100278** | 每 2 分钟弹出警告：“Claude 思考更久，Max 错误可能消耗 3.5×+ Medium 的用量”。用户希望可关闭或使提示持续消失。 | 3 / 2 | 频繁提示干扰编码流程，尤其在长时间 Max 模式下。 | [#100278](https://github.com/anthropics/claude-code/issues/100278) |
| **#87874** | Subagent 编排缺少明确的并发模型（无 join、取消、安静停止、信号顺序），且语义在版本间悄然变更。 | 3 / 0 | 复杂工作流的可预测性和可调度性是高级使用场景的基础。 | [#87874](https://github.com/anthropics/claude-code/issues/87874) |

---

### 重要 PR 进展（最近 24 小时更新的全部 7 条）  

| PR | 类别 | 主要修复 / 功能 | 影响 | 链接 |
|----|------|----------------|------|------|
| #85716 | hookify | 从祖先 `.claude` 目录加载规则，防止安全规则被子目录静默绕过。 | 加强了 hook 的防御深度，确保策略不会被误覆盖。 | [#85716](https://github.com/anthropics/claude-code/pull/85716) |
| #84747 | hookify | 修正 `load_rules()` 在 `event` 为 `None` 时的范围判定；强化安全文件读取，防止越权读取。 | 消除了潜特权提升漏洞。 | [#84747](https://github.com/anthropics/claude-code/pull/84747) |
| #84711 | security | 防止 YAML 注入以及符号链接导致的凭证覆写。 | 提升插件脚本的安全性。 | [#84711](https://github.com/anthropics/claude-code/pull/84711) |
| #84365 | scripts | 允许任意用户通过点下（thumbs down）阻止自动关闭对话。 | 增强了社区对不适内容的自我治理能力。 | [#84365](https://github.com/anthropics/claude-code/pull/84365) |
| #84364 | hookify | 在 pretooluse hook 中出现异常时改为返回 `permissionDecision: 'deny'`，而不是放行。 | 防止因异常导致的安全漏洞。 | [#84364](https://github.com/anthropics/claude-code/pull/84364) |
| #100293 | examples | 新增 HIPAA 配置示例（`settings-hipaa.json`、`managed-mcp-hipaa.json` 及说明文档）。 | 为符合医疗健康合规的组织提供直接可用的模板。 | [#100293](https://github.com/anthropics/claude-code/pull/100293) |
| #41447 | 功能 | 开源 Claude Code（已合并多个相关议题）。 | 长期战略举措，预计将带来更广泛的社区贡献与生态扩展。 | [#41447](https://github.com/anthropics/claude-code/pull/41447) |

---

### 功能需求趋势（基于全部 Issues 的热点）  

| 需求方向 | 体现的典型 Issue | 社区反馈特征 |
|----------|----------------|--------------|
| **模型输出可控性** | #65961（冗长注释）、#96221（Fast mode 缺失） | 高点赞与评论，用户强调需要更细粒度的指令约束与模式开关。 |
| **IDE / 编辑器集成** | #81024（工作树会话）、#87628（草稿丢失）、#94743（面板重新附着） | 频繁出现在 VS Code 与桌面端的使用场景，反映对无缝工作流的期待。 |
| **会话与上下文管理** | #92434（自动压缩失效）、#97232（会话跟踪丢失）、#100278（频繁用量警告） | 用户希望上下文窗口更稳定、警告可配置、会话状态不因内部机制意外丢失。 |
| **Hook & 安全策略** | #79953（Workflow 内部 agent 不受 hook 限制）、#85716/#84747 等 PR | 社区对 hook 的执行范围、异常安全性及配置继提出更严格的诉求。 |
| **身份认证与后台任务** | #95822（短生命周期命令未保存 OAuth 刷新） | 对自动化脚本、CI/CD 集成的可靠性提出明确需求。 |
| **辅助功能与可访问性** | #100492（波斯文本方向问题）、#100667/#100678 等不明确 bug | 虽然评论较少，但表明国际化与可访问性正逐步被关注。 |

---

### 开发者关注点（痛点 & 高频需求）  

1. **模型输出过于冗长且难以抑制** – 强烈要求在系统级或会话级别加入“注释/思考过程”开关，以免浪费 token 与干扰代码审阅。  
2. **编辑体验细节不足** – Enter 键误触、草稿丢失、面板脱附等均影响日常编码流程，期待更可配置的快捷键与状态恢复机制。  
3. **上下文管理与压缩机制不可预测** – 自动压缩依据历史 token 数导致溢出或失效，用户希望压缩策略透明且可手动干预。  
4. **子工作流的资源与 hook 隔离不足** – Workflow 内部的 `agent()` 调用能够绕过 PreToolUse hook 与预算限制，亟需明确的并发模型与传播机制。  
5. **身份认证流程的可靠性** – 短生命周期命令触发的 OAuth 刷新未被持久化，导致后台任务频繁失去授权，需要在命令启动时统一处理刷新并持久化结果。  
6. **平台一致性（尤其是快捷功能）** – 某些模型（如 Opus 5.5）在 UI 中缺少对应的切换开关，虽然功能可通过别的途径打开，但不一致导致使用困惑。  

> **总结**：近期社区的焦点已从单纯的新特性追逐转向 **稳健性、可控性与集成流程的细节打磨**。围绕模型输出、会话上下文、hook 安全性以及跨平台一致性的需求占据了讨论的主体，后续版若能在这些方面提供可配置的开关与更透明的机制，将获得广泛好评。  

--- 

*以上内容基于 2026-10-09 前 24 小时的 GitHub 事件（issues、pull requests、releases）整理而成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-09

---

## 1. 今日速览

今日 Codex 社区主要聚焦于 **Windows 沙箱环境的稳定性问题**，多个高优先级 Bug 报告集中在 `node_repl.exe` 共享违规 (Error 32) 和 ACL 更新失败上；同时，社区对 **远程会话管理**、**macOS 界面体验优化** 以及 **实验性线程读状态同步机制** 表现出浓厚兴趣。本日共发布 3 个新版本（含 alpha），并合并多项涉及 gRPC 模式路由与开发者消息提示优化的重要 PR。

---

## 2. 版本发布

### ✅ rust-v0.163.0-alpha.2  
🔗 [Release Link](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.2)  
该版本为 alpha 预览版，主要用于内测功能验证。

---

### ✅ rust-v0.162.0  
🔗 [Release Link](https://github.com/openai/codex/releases/tag/rust-v0.162.0)  
#### 主要更新：
- 支持通过 `p` 键固定任务到代理命令中心，并在服务端支持时共享 Pinned 分组。
- 提供从受信任本地项目中创建和列出受管理 Git worktree 的工具。
- 导航与复制功能增强。

---

## 3. 社区热点 Issues

| Issue | 链接 | 原因 |
|-------|------|------|
| **#51590** – Windows 沙箱无法运行 `node_repl.exe` | 🔗 [#51590](https://github.com/openai/codex/issues/51590) | Error 32 共享冲突导致沙箱初始化失败，广泛影响 Windows 用户。 |
| **#51634** – Windows 沙箱配置失败（os error 32） | 🔗 [#51634](https://github.com/openai/codex/issues/51634) | 0.162.0-alpha.2 回归问题，严重影响桌面使用体验。 |
| **#51824** – ChatGPT for Windows 崩溃 | 🔗 [#51824](https://github.com/openai/codex/issues/51824) | 崩溃日志显示 `windows-updater.node` 出现访问冲突，可能与自动更新机制相关。 |
| **#41470** – 远程项目不同步至移动设备 | 🔗 [#41470](https://github.com/openai/codex/issues/41470) | 多平台同步不一致，影响跨设备协作。 |
| **#21781** – 浏览器插件信任错误 | 🔗 [#21781](https://github.com/openai/codex/issues/21781) | Chrome 和 IAB 后端均失败，提示“browser-client is not trusted”。 |
| **#47538** – TUI 显示重复文本 | 🔗 [#47538](https://github.com/openai/codex/issues/47538) | 第三方响应Provider断流后文本错乱，影响开发调试体验。 |
| **#47577** – @codex 忽略 fork PR | 🔗 [#47577](https://github.com/openai/codex/issues/47577) | GitHub 评论回答行为异常，开发者期待改进自动化代码审查。 |
| **#51882** – Dot 任务启动失败 | 🔗 [#51882](https://github.com/openai/codex/issues/51882) | dot 启动失败但本地对话正常，怀疑与沙箱或权限配置有关。 |
| **#51731** – Dot 连接超时 | 🔗 [#51731](https://github.com/openai/codex/issues/51731) | 提示格式错误，提示版本不兼容性问题。 |
| **#51917** – Windows 工作区设置加载失败 | 🔗 [#51917](https://github.com/openai/codex/issues/51917) | Cloudflare 挑战阻止消息发送，疑似网络代理问题。 |

---

## 4. 重要 PR 进展

| PR | 链接 | 功能说明 |
|----|------|----------|
| **#52395** – 实验性线程已读状态更新 | 🔗 [#52395](https://github.com/openai/codex/pull/52395) | 新增 `thread/readState/update` 接口，支持本地持久化线程状态。 |
| **#52384** – 通知订阅者线程状态变更 | 🔗 [#52384](https://github.com/openai/codex/pull/52384) | 添加 `thread/readState/changed` 通知事件，提升实时性。 |
| **#52381** – gRPC 代码模式下保留会话路由 | 🔗 [#52381](https://github.com/openai/codex/pull/52381) | 修复共享传输的多会话场景下路由混乱的问题。 |
| **#52363** – 扩展 Realtime v3 声音支持 | 🔗 [#52363](https://github.com/openai/codex/pull/52363) | 增加 v3 模型对应的更多语音选项，支持更丰富的音频交互。 |
| **#52350** – 暴露实验性线程已读状态 | 🔗 [#52350](https://github.com/openai/codex/pull/52350) | 将线程已读状态暴露于 App Server，便于前端消费。 |
| **#52337** – 带修订检查的持久线程状态 | 🔗 [#52337](https://github.com/openai/codex/pull/52337) | 引入 revision 控制，防止旧数据覆盖新数据。 |
| **#52330** – 终端超链接范围裁剪 | 🔗 [#52330](https://github.com/openai/codex/pull/52330) | 防止因换行越界导致 panic，提升 TUI 稳定性。 |
| **#52325** – 记录历史初始化信息 | 🔗 [#52325](https://github.com/openai/codex/pull/52325) | 新增 `history_initialization` 字段，帮助追踪上下文来源。 |
| **#52304** – 持久化远程控制偏好设置 | 🔗 [#52304](https://github.com/openai/codex/pull/52304) | 保存 RPC 偏好设置，确保重启后生效。 |
| **#52273** – TUI 可配置快捷键前缀 | 🔗 [#52273](https://github.com/openai/codex/pull/52273) | 引入 `leader` 键设置，提升键盘操作效率。 |

---

## 5. 功能需求趋势

- **跨平台同步与一致性**：多位用户反馈 Windows 与 Android 之间的项目同步存在 asymmetry，尤其是新建项目无法及时同步。
- **沙箱安全性与兼容性**：Windows 用户频繁遭遇沙箱初始化失败，包括共享冲突、权限问题等，成为当前最紧迫的系统稳定性议题。
- **界面交互优化**：macOS 用户反馈暗色模式文字对比度不足，拖拽操作不便；呼吁提升 UI 的可访问性。
- **远程会话管理**：Dot 工具在连接远程会话时出现多种错误，包括版本不兼容、网络挑战等，用户希望获得更健壮的远程支持。
- **开发者体验增强**：TUI 和 CLI 工具的用户期待更灵活的配置选项（如快捷键绑定），以及更准确的调试输出。

---

## 6. 开发者关注点

- **沙箱初始化失败** 是当前最受关注的问题，尤其在 Windows 平台上。多个相关 Issue 聚焦于 `node_repl.exe` 共享冲突、ACL 更新失败等底层异常。
- **线程状态管理** 成为热点，开发者期待更细粒度的控制权，用于构建复杂的多窗口或多会话应用。
- **模型容量限制** 也引发关注，部分用户报告在所有模型上都收到“Selected model is at capacity” 错误，怀疑为账户级别限制。
- **文档完整性** 再次成为议题，一名贡献者指出 `codex_rust_crate` 宏缺少关键参数说明，影响 Bazel 用户使用体验。

---

> 📌 如需转载请注明出处：[OpenAI Codex Community Daily Report – 2026-10-09]

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-10-09

---

## 1. 今日速览

今日社区重点关注 Agent 行为稳定性、沙箱安全机制优化以及模型推理性能。多起 Bug 报告聚焦于子代理无法正常结束、Browser Agent 忽略配置等问题。部分 PR 已合并以提升安全性与跨平台兼容性。

---

## 2. 版本发布

**无最新 Release**

---

## 3. 社区热点 Issues

| 排名 | Issue | 类型 | 关键词 |
|-----|-------|------|--------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Bug | Agent, MAX_TURNS |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Bug | Agent hang |
| 3 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Enhancement | Agent skills usage |
| 4 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Bug | settings.json override |
| 5 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Bug | Wayland support |
| 6 | [#29639](https://github.com/google-gemini/gemini-cli/issues/29639) | Feature | Extension gallery |
| 7 | [#29627](https://github.com/google-gemini/gemini-cli/issues/29627) | Security | Grep injection |
| 8 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | Bug | Tool count limit |
| 9 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | Bug | Output hook crash |
| 10 | [#29614](https://github.com/google-gemini/gemini-cli/issues/29614) | Bug | Windows Git config |

> **重点说明：**  
- `#22323` 描述了 subagent 在达到最大轮次后仍错误报告为“目标成功”，影响调试与日志追踪。  
- `#21409` 报告了 Generalist Agent 挂起问题，社区反映严重影响使用体验。  
- `#29627` 涉及潜在命令注入风险，属于安全类高优先级问题。

---

## 4. 重要 PR 进展

| 排名 | PR | 类型 | 描述 |
|------|----|------|------|
| 1 | [#29578](https://github.com/google-gemini/gemini-cli/pull/29578) | Fix (MCP) | 请求 Google 端点离线访问权限并保留刷新令牌 |
| 2 | [#29490](https://github.com/google-gemini/gemini-cli/pull/29490) | Fix (Core) | 避免恢复会话时重复记录工具响应 |
| 3 | [#29489](https://github.com/google-gemini/gemini-cli/pull/29489) | Fix (Model) | 阻止 Flash-Lite 模型继承高思考等级 |
| 4 | [#29480](https://github.com/google-gemini/gemini-cli/pull/29480) | Security | 在 Windows 中校验 Git 参数以防止绕过提示 |
| 5 | [#29479](https://github.com/google-gemini/gemini-cli/pull/29479) | Security | 限制 Checkpoint 路径遍历漏洞 |
| 6 | [#29672](https://github.com/google-gemini/gemini-cli/pull/29672) | Security | 消除命令执行中的误报警告 |
| 7 | [#29678](https://github.com/google-gemini/gemini-cil/pull/29678) | Fix (CLI) | 环境变量加载早于设置占位符解析 |
| 8 | [#29590](https://github.com/google-gemini/gemini-cli/pull/29590) | Fix (Core) | 保留函数响应部分内容 |
| 9 | [#29492](https://github.com/google-gemini/gemini-cli/pull/29492) | Security | 沙箱构建中避免 shell 展开 |
| 10 | [#29582](https://github.com/google-gemini/gemini-cli/pull/29582) | Perf (Core) | 优化忽略过滤逻辑，提升性能 |

> **亮点总结：**  
本轮合并的 PR 大多聚焦于 **安全加固**（如路径遍历、Git 参数校验）和 **会话一致性优化**（如恢复时避免重复记录）。

---

## 5. 功能需求趋势

- **Agent 行为优化与自主性提升**  
  多起 Issue 聚焦于如何提高 Agent 的判断能力，例如更主动使用子代理技能（`#21968`）、改善浏览器子代理在不同平台上的表现（`#21983`）。

- **安全性增强**  
  沙箱机制相关问题频出（`#29686`），社区关注基于 `sandbox.toml` 的动态权限控制失效问题。

- **模型性能调优**  
  新模型（如 Flash-Lite）性能问题引发关注，相关 PR 正尝试优化推理开销（`#29489`）。

- **跨平台兼容性**  
  社区报告多起 Windows 特定问题（`#29614`, `#29480`）。

---

## 6. 开发者关注点

- **子代理调试困难**  
  开发者希望能更清晰查看子代理执行轨迹（`#22598`），便于分析与复现问题。

- **配置文件处理不稳定**  
  存在多个与 `settings.json`、符号链接代理识别相关的问题，影响自动化部署场景。

- **命令行参数安全性**  
  多个 PR 着手解决来自用户输入的命令注入风险，显示安全防护已成为重中之重。

- **交互式提示卡顿**  
  存在多个与终端交互体验相关的问题，包括回车键无响应（`#29476`）、终端缩放异常（`#21924`）等。

---

如需进一步信息，请访问官方仓库：[https://github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报

**日期：** 2026-10-09  
**来源：** github.com/github/copilot-cli  
**分析视角：** AI 开发工具技术分析师

---

## 1. 今日速览

过去 24 小时内，Copilot CLI 连续发布 **v1.0.95 系列** 三个版本，重点修复了 macOS Entra 认证、沙箱凭据配置及 ACP 会话上下文问题。社区反馈高度集中在 **MCP 稳定性**（启动卡死、重连死循环、配置残留）以及 **计费公平性**（模型冻结仍扣费）两大痛点。尽管新版本修复了多项关键问题，但在 BYOK 模型切换、跨平台兼容性及观测性数据完整性方面仍存在显著改进空间。

---

## 2. 版本发布 (v1.0.95 系列 & v1.0.94 热修复)

过去 24 小时共发布 4 个版本，修复与新增主要集中在认证、沙箱与 MCP 模块：

- **v1.0.95-2 (Fixed)**
  - `copilot config` 新增沙箱凭据 `injectHosts` 支持，并提供 Bash/Zsh/Fish 键位补全。
  - [链接](https://github.com/github/copilot-cli/releases/tag/v1.0.95-2)
- **v1.0.95-1 (Added)**
  - macOS 平台优先使用原生 Microsoft Entra broker 认证，并保留浏览器回退方案。
  - [链接](https://github.com/github/copilot-cli/releases/tag/v1.0.95-1)
- **v1.0.95-0 (Improved/Fixed)**
  - **改进：** Managed plugin 配置重试策略优化（每小时或策略变更后重试，而非每次消息失败重试）。
  - **修复：** `--context` 现在正确应用于新建和恢复的 ACP 会话，不再静默使用默认上下文层级。
  - [链接](https://github.com/github/copilot-cli/releases/tag/v1.0.95-0)
- **v1.0.94 系列 (Fixed/Added)**
  - 新增 Claude Haiku 5.5 模型支持。
  - 修复 `copilot mcp add` 中断恢复、MCP 启用/禁用时机问题。
  - 修复 Assisted Permissions 将可见 Shell 代码发送至权限判定器，减少不必要的人工审批。
  - [链接](https://github.com/github/copilot-cli/releases/tag/v1.0.94)

---

## 3. 社区热点 Issues (Top 10)

以下 Issue 在过去 24 小时内更新频繁，代表了社区最紧迫的问题与需求：

1.  **#770 [CLOSED] Claude Opus 4.5 处理 Prompt 时卡死 (16 评论)**
    - **重要性：** 核心体验与计费纠纷。用户反馈模型卡死时 premium 请求仍被扣除，严重影响信任。
    - [链接](https://github.com/github/copilot-cli/issues/770)
2.  **#892 [CLOSED] 建议增加沙箱模式限制文件访问 (49 👍)**
    - **重要性：** 企业级安全刚需。请求限制 Agent 仅能在指定工作目录读写，防止越权修改。
    - [链接](https://github.com/github/copilot-cli/issues/892)
3.  **#4998 [CLOSED] macOS 更新后 `.mcp-writer.binding` 残留导致 CLI 不可用**
    - **重要性：** 关键平台 Bug。系统更新重启后所有会话无法处理 Prompt，与 MCP 配置持久化机制直接相关。
    - [链接](https://github.com/github/copilot-cli/issues/4998)
4.  **#3709 [OPEN] 允许 /model 在会话中切换 BYOK/本地模型**
    - **重要性：** 高需求功能。当前 `/model` 仅列出 GitHub 托管模型，不支持已配置的本地 BYOK 提供商。
    - [链接](https://github.com/github/copilot-cli/issues/3709)
5.  **#1941 [CLOSED] 突发性 "model is not supported" 400 错误涌入**
    - **重要性：** 大面积功能故障。用户报告几乎所有请求均返回 400 错误，且影响 Agent 进度。
    - [链接](https://github.com/github/copilot-cli/issues/1941)
6.  **#2901 [OPEN] 按需加载 MCP 服务器 (17 👍)**
    - **重要性：** 性能优化。当前所有配置服务器均在启动时连接，用户数增多后显著拖慢启动速度。
    - [链接](https://github.com/github/copilot-cli/issues/2901)
7.  **#4224 [CLOSED] OTel spans 中子 Agent 调用缺少计费属性**
    - **重要性：** FinOps 观测性。外部成本核算因缺少 `github.copilot.nano_aiu` 等属性而统计偏低。
    - [链接](https://github.com/github/copilot-cli/issues/4224)
8.  **#5053 [OPEN] 1.0.89 回归：ACP 会话不再索引 conversation history**
    - **重要性：** 数据完整性。升级后 `session-store.db` 丢失历史与使用记录，影响会话持久化。
    - [链接](https://github.com/github/copilot-cli/issues/5053)
9.  **#4977 [OPEN] Linux ARM64 16KB 页大小导致 ripgrep 崩溃 (Asahi Linux)**
    - **重要性：** 平台兼容性。捆绑的 ripgrep 硬编码 4KB 页大小，在 Asahi Linux 上直接 Abort。
    - [链接](https://github.com/github/copilot-cli/issues/4977)
10. **#5091 [OPEN] 会话阻塞 Prompt，MCP 无限重连**
    - **重要性：** 会话状态管理。特定会话中 Prompt 排队无法执行，MCP 连接状态混乱，重启无效。
    - [链接](https://github.com/github/copilot-cli/issues/5091)

---

## 4. 重要 PR 进展

- **无新增 Pull Requests。** 过去 24 小时内该仓库无 PR 更新。
- **备注：** 社区关注的修复（如 MCP 恢复、认证增强、沙箱补全）主要通过 **热修复 Release (Hotfix)** 形式发布（见 v1.0.94-5, v1.0.95-x），而非传统的 PR 合并流程。建议

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：**2026-10-09

---

## 1. 今日速览
OpenCode 项目继续加紧社区问题修复与新功能开发。包括深思科技 Flash 提供商 HTTP 500 故障修复、多模型端点不可用问题排查、桌面端长文本粘贴崩溃修复，以及新 AI 提供商 Vertx Mistral 路线支持和浏览器自动化工具重构。

## 2. 版本发布
📦 **无正式发布版本发布**（GitHub 仓库今日暂无新标签/发布）

---

## 3. 社区热点 Issues（基于评论数/影响力排序）

| # | 标题 | 重要性 | 社区反馈 |
|---|-------|----------------|-------------------|
| **#40480** | `[BUG] OpenCode Go deepseek-v4-flash returns HTTP 500 while mimo-v2.5 works` | 关键引擎提供商故障，影响 Go 客户端模型可用性。 | 10 条评论，3 个 👍 |
| **#53841** | `[pending close, triaging] Multiple models/providers intermittently fail with Endpoint is unavailable` | 跨多个模型的严重上游请求失败，导致自然会话中断。 | 7 条评论，0 个 👍 |
| **#38081** | `[FEATURE] Todo Sidebar with Linear integration (project-scoped issue management)` | 请求将线性项目管理集成到会话内，改善代写开发管理。 | 6 条评论，0 个 👍 |
| **#38932** | `Pasting a long text in prompt box make Desktop app hang` | UI 性能瓶颈，导致桌面应用 UI 卡顿/无响应。 | 6 条评论，0 个 👍 |
| **#39655** | `[Bug] OpenCode Web shows "No folders found" although projects are returned by the backend API` | Web 端 UI 与后端数据不一致，导致项目无法访问。 | 6 条评论，0 个 👍 |
| **#41102** | `Usage bug.` | 使用统计显示超过 100% 仍无法触发紧凑模式，影响用户使用监控。 | 5 条评论，0 个 👍 |
| **#53840** | `[pending close, triaging] provider: Anthropic Messages cannot round-trip openrouter:tool_search, breaking websearch on Anthropic-protocol models` | 影响 Anthropic 协议模型的 Web 搜索功能，工具调用失败。 | 4 条评论，0 个 👍 |
| **#41351** | `[FEATURE] guard against stale agent/skill definitions (doctor drift check + EOL-aware lint + dated claims)` | 请求添加自动化防护，防止 Agent/技能定义长期未更新。 | 4 条评论，0 个 👍 |
| **#40420** | `bug: Hermes Agent — gpt-5.6-luna via opencode-go provider returns finish_reason:null` | 导致流式/非流式响应缺少结束标记，严重影响对话完整性。 | 4 条评论，0 个 👍 |
| **#37003** | `[FEATURE] Clean Output Mode: Collapse AI Work by Default` | 用户希望更清晰地查看 AI 响应，折叠中间内容。 | 4 条评论，3 个 👍 |

---

## 4. 重要 PR 进展

| # | PR 标题 | 主要改进 |
|---|------------|----------------|
| **#54058** | `feat(ai): add Vertex Mistral route` | 增加 Google Vertex AI Mistral 模型支持，解决 Vertex 422 异常。 |
| **#53876** | `feat(core): continue responses after output token limits` | 实现遇到 `length` 停止原因时继续生成，增加合成用户提示，避免寒暄。 |
| **#53861** | `feat(browser): rebuild agent browser tools around offscreen tabs, locators, and real waits` | 重构浏览器自动化工具，提升截图/点击等子调用成功率（96% 会话覆盖）。 |
| **#53826** | `fix: surface session execution errors in desktop and TUI timelines` | 改善桌面版和 TUI 端的错误展示，提供更清晰的失败信息。 |
| **#53711** | `fix(tui): preserve grapheme clusters in locale truncation` | 修复 `Locale.truncate`、`truncateLeft`、`truncateMiddle` 方法，防止 UTF‑16 分裂拼接。 |
| **#52075** | `feat(acp): attach to a running opencode server with --url` | 允许客户端直接连接已有 OpenCode 服务实例。 |
| **#54048** | `fix(core): restore legacy sessions in markerless projects` | 修复新建非 Git/Hg 目录项目时无法加载旧版会话的问题。 |
| **#54046** | `fix: preserve delegation and clipboard spacing` | 保持复制时多部分消息的空行间距，修复分割线丢失。 |
| **#54053** | `[contributor] fix(app): center project heading text on its avatar and chevron` | 修正项目标题位置，解决头像/图标对齐问题。 |
| **#53924** | `[needs:title, needs:compliance] V2 session separators` | 为 V2 版本添加会话分隔线功能。 |

---

## 5. 功能需求趋势

| 趋势方向 | 典型 Issue/PR |
|------------|-------------------|
| **提供商可靠性** | #40480、#53841、#53840、#40420、#41464、#53843 |
| **模型与协议支持** | #54058（Vertex Mistral）、#41357（Go 计划限制） |
| **UI/UX 改进** | #38081（Linear 集成）、#37003（输出折叠）、#38932（桌面崩溃）、#39655（Web 项目显示）、#54046（粘贴间距） |
| **性能与稳健性** | #41351（技能过期检查）、#39772（调试循环检测）、#53876（Token 限制后续）、#53826（执行错误上报） |
| **集成与内存** | #38826（Todo 侧边栏）、#39772（

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-10-09

---

## 1. 今日速览
- **核心修复密集合并**：过去 24 小时合并了 10+ 个修复类 PR，重点解决 MCP OAuth 配置解析、OpenRouter 计费与模型筛选、Windows Shell 兼容性、npm 12 适配、DashScope 限流重试等生产环境阻塞性问题。
- **会话生命周期与扩展 API 成焦点**：多个高讨论 Issue 聚焦于 `agent_settled` / `waitForIdle` 竞态、Compaction 文件列表无限增长、扩展在 `before_agent_start` 注入 Prompt 丢失、以及思维块/工具渲染的公开 Hook 缺失，反映社区对 Agent 循环可控性与扩展能力的强诉求。
- **终端与 TUI 稳定性持续攻坚**：针对 Windows mintty/OSC 4、终端回复碎片泄漏、Overlay 遮挡模态框等交互层 Bug 推出针对性修复，显著提升原生终端体验。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论/👍 | 核心看点 | 链接 |
|---|------|------|---------|----------|------|
| **#10031** | Pi 偶发卡在 "Working..."（ESC 停止思考后） | CLOSED | 26 / 3 | **高频阻塞性 Bug**，自 v0.84.0 起跨机器复现，需强制 `Ctrl+C` 恢复，严重影响交互流。 | [#10031](https://github.com/earendil-works/pi/issues/10031) |
| **#9773** | `before_provider_request` 不触发于 Summarization/Compaction 请求 | OPEN | 11 / 0 | **扩展 API 缺口**：文档承诺“所有 Provider 请求前触发”，但压缩/总结分支漏掉，导致扩展无法注入上下文控制。 | [#9773](https://github.com/earendil-works/pi/issues/9773) |
| **#10267** | `before_agent_start` 贡猥的 Prompt 在无用户提示的运行中丢失 | OPEN | 8 / 2 | **上下文注入失效**：后台任务/Plan-mode/Resume/Retry 等非用户发起的 Turn 会丢弃扩展注入的 System Prompt，且导致重复计费。 | [#10267](https://github.com/earendil-works/pi/issues/10267) |
| **#10645** | `resizeImage` 在 Bun 编译二进制中返回 null，导致 v0.87+ 所有图片附件丢失 | OPEN | 5 / 0 | **多模态回归**：原生二进制发布后图片处理链路断裂，影响所有依赖视觉模型的工作流。 | [#10645](https://github.com/earendil-works/pi/issues/10645) |
| **#10605** | ChatGPT/OpenAI OAuth 403：用户不符合订阅共享资格 | OPEN | 8 / 0 | **认证体系变更**：OpenAI 侧策略收紧，现有 OAuth 流程失效，需适配新授权模式。 | [#10605](https://github.com/earendil-works/pi/issues/10605) |
| **#9945** | Compaction 文件列表跨压缩无界增长 | CLOSED | 2 / 0 | **内存/上下文泄漏**：`readFiles`/`modifiedFiles` 列表在分裂式 Compaction 中重复累积，长会话必现性能劣化。 | [#9945](https://github.com/earendil-works/pi/issues/9945) |
| **#10705** | `abort()` 解决后，已延续的 Continuation 仍发起 Provider 请求 | CLOSED | 2 / 0 | **会话控制竞态**：SDK `session.abort()` 返回成功但后台延续任务仍在跑，破坏“停止即停止”的语义。 | [#10705](https://github.com/earendil-works/pi/issues/10705) |
| **#10704** | `waitForIdle()` 在 `agent_settled` 压缩完成前即 resolve | CLOSED | 2 / 0 | **同步原语失真**：空闲承诺早于实际空闲，SDK Host 误判会话结束。 | [#10704](https://github.com/earendil-works/pi/issues/10704) |
| **#10657** | 终端回复碎片（如 DA1 拆分读取）泄漏进编辑器成明文 | OPEN | 4 / 0 | **TUI 输入污染**：PTY 读取间隙 >50ms 导致转义序列片段落入 Composer，破坏输入体验。 | [#10657](https://github.com/earendil-works/pi/issues/10657) |
| **#10701** | 请求公开 Assistant/User 消息及思维块的组件级渲染 Hook | OPEN | 2 / 0 | **扩展生态诉求**：类比 `registerToolRenderer`，社区急需自定义转录区渲染以支持富文本/思维链可视化。 | [#10701](https://github.com/earendil-works/pi/issues/10701) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 类型 | 核心变更 | 链接 |
|---|------|------|------|----------|------|
| **#10698** | fix: MCP `oauth.clientId` 支持环境变量与命令展开 | CLOSED | 🐛 Fix | 统一 `clientId` 与 `clientSecret` 的解析逻辑，修复 `${VAR}`/`!cmd` 字面量传递给授权服务器的问题。 | [#10698](https://github.com/earendil-works/pi/pull/10698) |
| **#10690** | fix: MCP OAuth HTTP Basic 凭证改为 form-encode 编码 | CLOSED | 🐛 Fix | 遵循 RFC 6749 §2.3.1，修正 `client_secret_basic` 编码方式，解决合规授权服务器拒签问题。 | [#10690](https://github.com/earendil-works/pi/pull/10690) |
| **#10689** | fix: `prepareRequest` 后同步工具声明 | CLOSED | 🐛 Fix | 修复回调替换上下文后，Agent 循环仍使用旧工具列表发请求的竞态。 | [#10689](https://github.com/earendil-works/pi/pull/10689) |
| **#10680** | fix: 兼容 npm 12 `pack --json` 新输出格式 | CLOSED | 🐛 Fix | 适配 npm 12 将数组改为对象的破坏性变更，恢复包安装/发布/本地发布流程。 | [#10680](https://github.com/earendil-works/pi/pull/10680) |
| **#10677** | fix: 将 DashScope 配额限流归类为可重试 | CLOSED | 🐛 Fix | 区分阿里云 DashScope 与 OpenAI 的 `insufficient_quota` 语义，避免误判为终态错误。 | [#10677](https://github.com/earendil-works/pi/pull/10677) |
| **#10672** | feat: OpenRouter 模型列表按当前 Key 可用性筛选 | OPEN | ✨ Feature | 引入 `GET /models/user` 实时校验 Key 权限，仅展示可用模型，含价格/上下文/输出上限同步。 | [#10672](https://github.com/earendil-works/pi/pull/10672) |
| **#10569** | feat: OpenRouter 模型按 Key 守卫rails 过滤 | OPEN | ✨ Feature | 同 #10672 方向，支持区域化 Guardrails（如 `us.openrouter.ai`），增强多 Key 管理鲁棒性。 | [#10569](https://github.com/earendil-works/pi/pull/10569) |
| **#10663** | feat: `pi auth --continue` 通用授权延续入口 | OPEN | ✨ Feature | 为跨设备/外部启动的 OAuth 流提供标准化 CLI 接入点，接受 base64url JSON 负载。 | [#10663](https://github.com/earendil-works/pi/pull/10663) |
| **#9501** | fix: 从安装目录解析 Windows Shell 路径 | OPEN | 🐛 Fix | 统一 Windows 二进制查找逻辑，修复硬编码/环境变量/回退链混乱导致的 Shell 启动失败。 | [#9501](https://github.com/earendil-works/pi/pull/9501) |
| **#10521** | fix: 为 NVIDIA NIM 模型内联 `$ref` Tool Schema | OPEN | 🐛 Fix | 解决 `validateToolArguments` 拒绝仅含 `$ref` 的 JSON 字符串参数，适配 Nemotron/Qwen 新模型。 | [#10521](https://github.com/earendil-works/pi/pull/10521) |

---

## 5. 功能需求趋势（从 Issues 提炼）

1.  **Agent 循环的精确可控性**  
    - 多 Issue（#10705, #10704, #10664, #9945）指向同一核心：**会话状态机与异步延续任务的同步语义不清**。开发者需要：`abort` 真正停下一切、`waitForIdle` 真正等到空闲、扩展能显式 Hold Busy、Compaction 不泄漏历史上下文。

2.  **扩展系统的“头等公民”地位**  
    - 缺失 Hook：`before_provider_request` 漏掉压缩分支（#9773）、无消息/思维块渲染 Hook（#10701）、无思维块展开控制（#10692）、Keybindings 单例污染（#4748）。  
    - 生命周期注入不可靠：`before_agent_start` 在非用户发起 Turn 失效（#10267）。  
    - **趋势**：社区将 Pi 视为可编程平台，而非仅 CLI，要求完整的**声明式扩展 API 覆盖率**。

3.  **多模态与长上下文工程化**  
    - 图片 Resize 断裂（#10645）、Compaction 文件列表无界增长（#9945）、思维块 `thoughtSignature` 丢失导致多轮 Tool Use 失败（#9444）、`transformMessages` 切模型时思维归一化破坏兼容旗标（#6167）。  
    - **趋势**：随着模型上下文窗口扩大、多模态成标配，**上下文管家能力（压缩、去重、签名传递、二进制资源处理）**成为硬指标。

4.  **提供商生态的动态

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**今日速览**  
- 社区围绕 **Managed Agent** 的分阶段架构（#12380）展开深入讨论，提出 durable lifecycle、Turns、Actions 等关键设计。  
- 多起 **跨平台/可靠性** 问题（K8s 运行时、Hook 子进程、Hosted Session 失效）持续受到关注，已有 PR 正在推进修复。  

---

### 版本发布  
无新版本发布（过去 24 小时内无 Release）。

---

### 社区热点 Issues（选 10 条）

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| **#12380** | **Define Managed Agent dual‑path architecture and staged delivery** | 奠定 Managed Agent 未来分阶段演进的核心框架，涉及会话所有权、Workspace 绑定、可恢复工具执行等关键特性。 | 50 条评论，讨论热烈，提出了详细的分阶段实现路线图。 |
| **#13395** | **Kubernetes tool runtime 进度与跨平台交付门禁** | 为云原生部署提供稳定的运行时，直接影响多平台一致性。 | 16 条评论，跟踪 PR #13526 的最新提交，进度可观。 |
| **#13004** | **perf(memory): add a bounded cooldown after no‑op extraction** | 改进记忆提取的频率控制，降低不必要的后台任务开销。 | 9 条评论，聚焦性能瓶颈。 |
| **#13492** | **XML tool‑call recovery drops outer calls containing quoted tool markup** | 修复因引号包裹导致的外层调用丢失，提升工具调用可靠性。 | 8 条评论，已有 PR #13515 合并，仍需 #13579 完成。 |
| **#13689** | **Subagent definitions cannot contain ${identifier} — templateString throws on JS template literals and shell variables inside code fences** | 防止因模板字符串误用导致子 Agent 启动失败，提升可配置性。 | 5 条评论，直接影响子 Agent 使用。 |
| **#13650** | **Managed Agent: Hosted Session journal dies permanently after an outage spanning an activation renewal** | 会话日志失效导致后续操作全部报 `503 automation_operation_failed`，影响用户体验。 | 4 条评论，强调需要可恢复的日志机制。 |
| **#13662** | **Hook subprocess spawn lacks windowsHide: true — PowerShell hooks with -WindowStyle Hidden minimize the entire Windows Terminal window** | Windows 环境下的 Hook 子进程弹窗行为异常，阻碍工作流。 | 4 条评论，针对 Windows 10 LTSC 环境。 |
| **#13078** | **Daily dependency CVE audit failed** | 安全审计失败可能导致高危漏洞未被发现，影响整体安全 postura。 | 15 条评论，提醒团队关注依赖安全。 |
| **#13663** | **browser-use skill is non‑functional on Windows — Native Messaging host is never registered (macOS/Linux only)** | 关键浏览器交互技能在 Windows 上失效，限制跨平台可用性。 | 4 条评论，用户反馈 Windows 环境无法使用。 |
| **#13683** | **extension skills cannot be invoked by bare authored name after #10841 — live invocation rejects unambiguous names** | 修正后仅能通过 `<extension>:<authoredName>` 调用技能，降低使用便利性。 | 4 条评论，影响扩展功能的复用。 |

---

### 重要 PR 进展（选 10 条）

| # | 标题 | 主要内容 | 关键改动 |
|---|------|----------|----------|
| **#13314** | **fix(sdk-java): Close Hosted Harness review criticals from #12654** | 完成对 Hosted Harness 私有 Java 客户端的 11 条 Critical 与 2 条 Minor 发现的修复，并关闭二次审查。 | 修复关键错误，提升 CI 稳定性。 |
| **#13714** | **preserve artifact cards during reconnect** | 在会话暂时断开后，保持已加载的 Artifact 卡片可见，避免重新加载导致的上下文丢失。 | UI 体验提升，兼容性更好。 |
| **#13624** | **tell the parent model why a foreground subagent stopped** | 前景子 Agent 在非 `GOAL` 结束时主动告知父模型停止原因，增强可追溯性。 | 明确停止状态，便于调试。 |
| **#13664** | **add read‑only Excel artifact previews** | 为工作区中的 XLSX 文件提供只读预览，使用 lazily loaded inline worker。 | 增强文件预览功能，提升工作效率。 |
| **#13579** | **recover outer XML calls with quoted call content** | 当参数值包含引号工具调用时，保留完整值并允许后续真实调用恢复。 | 解决 XML 参数解析问题，提高工具调用成功率。 |
| **#9417** | **fail closed on expanding heredoc bodies in the worktree guard** | 改进 Git 工作树守护，对未引用的 heredoc 体进行严格校验，防止意外执行。 | 增强安全性，防止隐蔽漏洞。 |
| **#13711** | **strip UTF-8 BOM when importing Claude MCP configs** | 在读取 Claude 配置文件时自动剔除 UTF‑8 BOM，避免解析失败。 | 解决跨平台文件编码兼容性问题。 |
| **#13550** | **H4b child Session runtime** | 实现 Managed Agent H4b 子会话运行时，完成子 Session 的生命周期、持久化定义等核心功能。 | 为多 Agent 场景奠定基础。 |
| **#13583** | **remove the thread backend and run A2A on sessions** | 移除旧的线程化协作后端，改为直接在会话上进行 Agent‑to‑Agent 消息传递。 | 简化架构，提升 A2A 可靠性。 |
| **#13672** | **show workspace artifacts by their filename** | 将工作区文件的显示名称统一为实际文件名，改善 UI 一致性。 | 提升用户可读性，减少混淆。 |

---

### 功能需求趋势

- **Managed Agent 分阶段演进**：社区强烈期待 **可持久化会话、Turns、Actions、Java durable  admission** 与 **AgentDefinition** 的完整实现（见 #12380、#12867）。  
- **跨平台运行时稳定性**：Kubernetes 运行时、Windows‑特有的 Hook 与 Browser‑use 技能缺陷是重点关注对象。  
- **性能与资源管理**：对 **记忆提取的 bounded cooldown**、**冷缓存回收** 与 **工具调用的恢复机制** 表示高度关注，旨在降低不必要的后台任务开销。  
- **可观测性与可恢复性**：会话日志（Hosted Session journal）在控制平面出现故障后失效，需设计 **可恢复的日志机制** 与 **前景子 Agent 退出原因上报**。  
- **UI/UX 改进**：Artifact 卡片标题与文件名的不一致、Excel 预览缺失、工作区文件显示不统一等均为高频 UI 投诉。  
- **安全与合规**：每日依赖 CVE 审计失败提醒团队关注依赖安全，且对 **UTF‑8 BOM** 兼容性、权限管理（`/auto-mode-setup`）等细节亦有需求。  

---

### 开发者关注点（痛点与高频需求）

1. **会话可靠性**：多位开发者反映 **Hosted Session journal 在控制平面出现故障后永久失效**，导致所有后续操作报 `503 automation_operation_failed`，亟需 **日志持久化与自动恢复** 机制。  
2. **跨平台兼容性**：Windows 环境下 **Hook 子进程遮盖**、**browser‑use 技能**、**extension 技能调用** 等功能异常，影响日常开发体验。  
3. **工具调用可追溯性**：XML 参数中引号包裹导致的 **外层调用丢失**，以及 **子 Agent 启动因模板字符串错误而失败**，削弱调试效率。  
4. **扩展技能使用限制**：仅能通过 `<extension>:<authoredName>` 调用技能，降低了扩展复用的便利性。  
5. **安全审计频繁失败**：每日 CVE 审计步骤中断，提醒团队关注依赖安全更新与 CI 配置。  
6. **性能调优**：记忆提取的频繁触发与 **冷缓存回收** 机制需求，表明社区对 **资源使用效率** 的高期待。  

> 以上内容基于 GitHub 数据整理，供技术团队快速把握 Qwen Code 社区近期动态与关键议题。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*