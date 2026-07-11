# AI CLI 工具社区动态日报 2026-07-11

> 生成时间: 2026-07-11 01:47 UTC | 覆盖工具: 9 个

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

**横向对比分析报告（2026‑07‑11）**  

---

### 1. 生态全景  
当前 AI CLI 工具呈现“稳定性‑可扩展性双轮驱动”的格局：大多数项目在修复高频崩溃/卡顿、资源泄漏以及安全防护方面投入较大精力；与此同时，社区普遍呼求更灵活的模型/子代理配置、多工作区/会话管理以及跨平台一致性（尤其是 Windows‑WSL2、macOS、Linux 与 Web/移动端的兼容）。总体来看，工具正从单一的代码生成助手向可编排、可观测且企业级可控的 AI 开发平台演进。

---

### 2. 各工具活跃度对比  

| 工具 | 今日热点 Issues（统计的前 N 条） | 今日重要 PR（统计的前 N 条） | 最新 Release（2026‑07‑11） | 备注 |
|------|--------------------------------|----------------------------|---------------------------|------|
| **Claude Code** | 10 | 6 | v2.1.207（自动模式默认开放，修复长输出卡顿） | 高频付费用户配额耗尽、子代理 fan‑out、磁盘填满等核心痛点 |
| **OpenAI Codex** | 10 | 10 | rust‑v0.145.0‑alpha.4 / ‑alpha.3（内部依赖升级） | GPT‑5.5/5.6 token 聚类、子代理模型指定、Windows 桌面崩溃 |
| **Gemini CLI** | 10 | 10 | －（无新版） | Agent 子系统卡hang、路径遍历、令牌权限加固 |
| **GitHub Copilot CLI** | 10 | 1 | v1.0.71‑0（pinned prompts、Repo Dashboard） | TUI 黑屏/卡死、语音模式 ASR 失效、MCP OAuth 断连 |
| **Kimi Code CLI** | 10（历史热点） | 4 | －（无新版） | UI 细节、LLM 未设提示、Safari/IME 输入、工具绑定 |
| **OpenCode** | 10 | 10 | －（无新版） | 剪贴板失效、Xcode ACP 配置被覆盖、SQLite 并发锁、移动端/UI 需求 |
| **Pi** | N/A（摘要生成失败） | N/A | － | 数据缺失，暂不参与对比 |
| **Qwen Code** | 10 | 10 | v0.19.8‑nightly.20260711 / v0.19.9（官方版发布中遇 Docker 集成失败） | 多工作区、流式 API 超时、内存 OOM、macOS 剪贴板图片、工具闭环 |
| **DeepSeek TUI** | 10 | 10 | －（无新版） | 工作流 lane 顺序、constitution 遵守、Provider 配置误判、离线计费 |

> **说明**：Issues 与 PR 均取自各工具今日社区热点列表（前 10 条），能够反映当天讨论的热度与关注点；Release 列出当天实际发布的版本号（包括 alpha/nightly），若当天仅有发布失败则标注备注。

---

### 3. 共同关注的功能方向  

| 功能方向 | 涉及工具（代表性） | 具体诉求 |
|----------|-------------------|----------|
| **稳定性 / 防崩溃** | Claude Code、OpenAI Codex、Gemini CLI、Qwen Code、DeepSeek TUI | 修复 UI/卡顿、长输出流式卡死、Windows 桌面频繁崩溃、内存 OOM、Agent 永久挂起 |
| **资源与成本控制** | Claude Code（会话配额耗尽、子代理 fan‑out、磁盘填满）、OpenAI Codex（token 聚类导致浪费）、Qwen Code（上下文窗口计算错误导致 0 能力） | 配额精准计费、子代理数量/深度限制、token 使用上限、防止无限循环 |
| **模型 / 子代理配置灵活性** | OpenAI Codex（子代理指定模型）、Gemini CLI（Agent 配置无效）、Kimi Code（LLM 未设提示）、Qwen Code（多工作区）、DeepSeek TUI（Provider 配置误判） | 允许 per‑subagent 模型选择、环境隔离、自定义 Provider 身份保持、多工作区/会话共享 |
| **安全与权限** | Gemini CLI（路径遍历、令牌权限）、OpenCode（剪贴板失效、权限确认）、DeepSeek TUI（constitution 遵守、工具链闭环） | 防止路径遍历、未授权工具调用、敏感信息泄漏、强制 tool_use/tool_result 配对 |
| **跨平台 & 本地交互** | Claude Code（Windows 控制台闪烁、Linux 鼠标/权限）、OpenAI Codex（Windows 桌面卡顿、macOS 缺失 Swift Concurrency）、Qwen Code（macOS 剪贴板图片粘贴）、Kimi Code（Safari/IME 输入）、Gemini CLI（Wayland 浏览器子代理） | 终端渲染一致性、剪贴板图片/文本、输入法兼容、Wayland/X11、WSL2、Docker 沙盒网络 |
| **会话 / 工作区管理** | Qwen Code（多工作区 daemon、会话恢复）、DeepSeek TUI（lane/order、工作流持久化）、OpenCode（移动端/UI、集成浏览器）、Claude Code（后台 Agent 取消困难） | 持久化会话、跨工作区数据共享、后台任务可视化取消、默认紧凑 TUI 模式 |
| **用户体验细化** | GitHub Copilot CLI（TUI 黑屏/卡死、语音模式）、Kimi Code（UI 布局、错误提示友好化）、OpenCode（TUI modal 统一、剪贴板） | 提供 `--resume`/自动恢复、紧凑模式、明确错误引导、可配置的自动解答超时 |

---

### 4. 差异化定位分析  

| 工具 | 核心定位 | 技术路线 / 特色 | 目标用户侧重 |
|------|----------|----------------|--------------|
| **Claude Code** | 面向企业级 AI 助手，强调自动模式与代理编排 | 基于 Anthropic Claude 模型，内置 Auto‑Mode、后台 Agent 管理、流式输出优化 | 需要长时间后台任务、成本可控的团队/企业开发者 |
| **OpenAI Codex** | 侧重代码生成与模型微调配置 | 提供多版本 GPT‑5.x、子代理环境隔离、Rust 库更新 | 研究与实验型开发者，关注模型行为细节 |
| **Gemini CLI** | 聚焦 Agent 生命周期安全与跨平台兼容 | 强化路径信任检查、环境隔离、Vertex AI API key 支持、Wayland 浏览器子代理 | 需要稳定 Agent 执行的云原生/DevOps 团队 |
| **GitHub Copilot CLI** | 以交互式 TUI 为中心的代码补全与语音交互 | Pinned prompts、Repo Dashboard、语音模式（ASR/TTS）、MCP OAuth | 偏好即时交互、语音驱动编码的个人开发者 |
| **Kimi Code CLI** | 强调本地/移动端轻量化 UI 与错误引导 | 前端布局细致优化、IME 输入兼容、清晰的 LLM 未设提示 | 初学者及移动端场景下的快速原型开发 |
| **OpenCode** | 面向全栈 IDE 集成与可观测性 | 剪贴板、移动端/UI、集成浏览器、Promise.any、OAuth V2、Session 输出 token 上限 | 需要深度 IDE 集成、跨设备使用的专业开发者 |
| **Qwen Code** | 多工作区 / 长时段会话管理与内存控制多工作区块链/大模型服务 daemon | 多工作区 daemon、会话恢复、内存压力监测、Web‑Shell 工作区选择器、调试日志增强 | 需要长运行服务、多人协作的后台平台团队 |
| **DeepSeek TUI** | 工作流编排（F‑W‑L‑R 模型）与多 Provider 鲁棒性 | Lane/Order 约束、constitution 严格遵守、Provider‑aware 离线计分卡、工具链闭环校验 | 关注工作流可审计、多模型混合使用的企业级用户 |

---

### 5. 社区热度与成熟度  

| 工具 | 今日 Issues 数 | 今日 PR 数 | Release 频率（近期）| 社区活跃度评价* |
|------|----------------|-----------|-------------------|----------------|
| Claude Code | 10 | 6 | 1（v2.1.207） | **高** – 付费用户问题激烈，热度高 |
| OpenAI Codex | 10 | 10 | 2（alpha） | **中高** – 频繁 PR 与讨论，但仍在探索阶段 |
| Gemini CLI | 10 | 10 | 0 | **中** – Issue/PR 双活跃，但缺少新版 |
| GitHub Copilot CLI | 10 | 1 | 1（v1.0.71‑0） | **中低** – 核心功能稳定，需求集中在 UI/语音 |
| Kimi Code CLI | 10 | 4 | 0 | **中** – 社区聚焦 UI 细节，更新较慢 |
| OpenCode | 10 | 10 | 0 | **中高** – 许多功能需求与 PR 同步进行 |
| Qwen Code | 10 | 10 | 2（nightly + 官方） | **中高** – 频繁发布与 Issue，活跃度高 |
| DeepSeek TUI | 10 | 10 | 0 | **中** – 工作流模型讨论深入，但未见新版 |
| Pi | N/A | N/A | N/A | **未知** |

\*评价基于当天 Issues+PR 数量以及是否有实际发布；数值越高、发布越频繁表明社区更活跃、迭代更快。

---

### 6. 值得关注的趋势信号  

| 趋势 | 社区反馈（代表性） | 对开发者的参考价值 |
|------|-------------------|--------------------|
| **Agent/子代理可靠性** | Claude Code（子代理 fan‑out、磁盘填满）、Gemini CLI（Agent 永久挂起、路径遍历）、DeepSeek TUI（工具链闭环） | 开发时应加入子代理数量/深度限制、异常恢复机制以及完整的 tool_use/tool_result 校验，以防止成本失控。 |
| **多工作区/会话持久化** | Qwen Code（多工作区 daemon、会话恢复）、DeepSeek TUI（lane/order 持久化）、OpenCode（移动端/UI、集成浏览器） | 若产品涉及团队协作或长时后台任务，考虑实现跨工作区数据共享、会话快照与自动恢复功能。 |
| **跨平台一致性（尤其 Windows/WSL2、macOS、Wayland）** | Claude Code（Windows 控制台闪烁、Linux 鼠标/权限）、OpenAI Codex（Windows 桌面卡顿、macOS 缺失 Swift Concurrency）、Gemini CLI（Wayland 浏览器子代理）、Qwen Code（macOS 剪贴板图片） | 在 UI/终端交互层面增加统一的渲染抽象层、提供 `--resume` 或自动恢复开关、对输入法、剪贴板、图片粘贴做好平台适配。 |
| **资源与成本可视化** | Claude Code（会话配额耗尽、token 聚类）、OpenCode（Session 输出 token 上限 32k）、Qwen Code（内存压力监测、OOM 预防） | 建议在 CLI 中

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告（2026-07-11数据）

---

## 1. 热门 Skills 排行  
### ✅ **高评论/关注度前5个 Skills**  
1. **[Security: Community skills namespace abuse](https://github.com/anthropics/skills/issues/492)**  
   - **功能**: 暴露社区技能伪装为官方 `anthropic/` 命名空间的安全风险。  
   - **热点**: 34条社区讨论，呼 Sprite个字母开发框架限制，强调信任边界保护。  
   - **状态**: ✅ 讨论极致（34 comments），尚未合并（PR #83和#189可能相关）。  

2. **[Adding test-generation skill (testing-patterns)](https://github.com/anthropics/skills/pull/723)**  
   - **功能**: 覆盖研发周期全链路的测试模式技能，包含Unit测试、React组件测试策略。  
   - **热点**: 社区对编码测试自动化需求增长，隐含对CI/CD集成技能的期待。  
   - **状态**: 🌟 活跃PR（21 comments），正在优化（更新2026-04-21）。  

3. **[Preventing document formatting issues (typography)](https://github.com/anthropics/skills/pull/514)**  
   - **功能**: 调整生成文档中的孤词、页尾段落、编号对齐错误。  
   - **热点**: 每日文档生成需求普遍，用户投诉流量大的排版问题。  
   - **状态**: 🚧 尚未合并（更新2026-03-13）。  

4. **[Windows subprocess compatibility fix](https://github.com/anthropics/skills/pull/1050)**  
   - **功能**: 修复Windows下`claude` CLI执行与编码问题（间歇崩溃）。  
   - **热点**: Windows用户增长带来兼容性痛点，运维社区优先支持。  
   - **状态**: 🟡 关键修复中（更新2026-05-24）。  

5. **[Skill self-audit skill (automated quality gate)](https://github.com/anthropics/skills/pull/1367)**  
   - **功能**: 自动验证文件完整性+四维度质量评估（结构/安全/性能/能力）。  
   - **热点**: AI输出可靠性成为主题，远程协作团队需要端到端校验工具。  
   - **状态**: 🌕 创新方向（2026-07-02更新）。  

---

## 2. 社区需求趋势  
- **核心方向**：  
  - **安全第一**：社区对社技能信任企业级的风险（Issue #492为热点）。  
  - **自动化流水线**：需求围绕测试生成、文档处理、工作流优化集中外呼（Issue #723, #514）。  
  - **跨平台兼容性**：Windows/MacOS昼夜运维痛点（Issue #1050, #1099）。  
  - **能力边界扩展**：技能定义规范化（Issue #202, #189）。  

---

## 3. 黄金机遇.wait-to-be-merged Skills  
- **[Skill security analyzer](https://github.com/anthropics/skills/pull/83)**  
  - 14条社论，需求强烈，但实现复杂度高，需法规匹配。  
- **[Trigger evaluation fix (PR #1323)](https://github.com/anthropics/skills/pull/1323)**  
  - 9条评论，解决程序定位失误，预期快速合并（可落地内部测试）。  
- **[Compact-memory symbolic notation](https://github.com/anthropics/skills/issues/1329)**  
  - 虚拟量子态状态管理需求，理论可行性强，技术实现清晰。  

---

## 4. Skills 生态洞察  
**当前社区诉求集中在“可信AI可控”（Trusted AI Control）上：安全边界、自动化边界扩展、技能生命周期质量

---

**Claude Code 2026-07-11 社区动态日报**
*数据来源：anthropics/claude-code*

---

### 1. 今日速览
- **v2.1.207 发布**：克隆了自动模式（无需Bedrock/Vertex/Foundry显式开关），修复了长输出流式传输时的终端卡顿和点击延迟问题。
- **高价值Issue持续发酵**：Max 订阅用户会话配额异常快速耗尽、Fable 5 顾问报错、Windows 11 Cowork 运行异常和磁盘填满等危机事件频发。
- **多平台Bug集中爆发**：Windows 控制台闪烁、macOS/VS Code 异步 Bug、Linux 鼠标/权限交互问题，安全审计新模式也引发大量验证讨论。

---

### 2. 版本发布
- **[v2.1.207](https://github.com/anthropics/claude-code/releases/tag/v2.1.207)**
  - 自动模式现已默认开放（Bedrock、Vertex AI、Foundry），可用 `disableAutoMode` 强制关闭。
  - 修复长列表/表格/段落流式传输时产生的终端卡顿和点击延迟问题。

---

### 3. 社区热点 Issues (10 件)

| # | 标题 & 核心问题 | 重要性 | 社区反响 |
|---|------------------|-------------|------------------|
| #38335 | **[BUG] Max 订阅会话额度异常快速耗尽** (CLI 使用) | 影响付费用户核心体验，用户遭遇自 2026-03-23 开始异常快速配额耗尽。 | **热议** – 792 条评论，468 个👍，持续追踪中。 |
| #68110 | **[BUG] 通用子代理无限递归生成子代理，造成指数级 fan-out 和巨量 Token 消耗** | 直接造成高成本，数百万 Token 浪费，影响使用 Agent 工具链的用户。 | 777 条评论，173 个👍，讨论包括成本优化和深度限制方案。 |
| #41737 | **[BUG] 输出文件无限制增长，数分钟内填满整个磁盘 (278 GB)** | 危及系统稳定性，属于极严重磁盘填满 Bug。 | 7 条评论，1 个👍，用户请求尽快解决文件清理逻辑。 |
| #75314 | **[BUG] 10 个后台 Agent 任务运行 34+ 小时，无法取消，消耗约 100 万 Token** | 长时间运行的任务无控制权，经济损失严重。 | 5 条评论，0 个👍，目前仍未找到强制终止方法。 |
| #21167 | **[BUG] ESC 按键杀死所有后台任务/子代理，平行工作流体验极差** | 影响多任务并行用户，意外按下 ESC 即可中断所有任务。 | 7 条评论，9 个👍，社区呼吁改进交互保护逻辑。 |
| #70539 | **[Feature] 完整屏幕模式下增加仅滚动鼠标模式，禁用点击但保留滚轮控制** | 提升满屏视图安全性，防止误触选项且改善用户体验。 | 7 条评论，68 个👍，措施热度高，预计可快速实施。 |
| #71539 | **[BUG] 仅为 refocus 触发权限提示，导致 Linux 平台用户体验差** | 影响会话权限申请流，用户需要多次点击确认。 | 8 条评论，17 个👍，请求更多细粒度控制。 |
| #14828 | **[BUG] Windows 控制台执行工具时出现闪烁** | 影响 Windows 用户日常使用，视觉不适且可能导致意外。 | 40 条评论，33 个👍，请求修复终端绘制逻辑。 |
| #74260 | **[BUG] 同一轮中 Assist 助手文本块后跟更多思考时静默丢失，未渲染，未写入 transcript JSONL** | 导致数据丢失，可能影响结果溯源及审计。 | 5 条评论，0 个👍，用户要求添加可见标志和恢复机制。 |
| #76189 | **[BUG] Fable 5 顾问模型在 transcript 含任意前置工具调用时报错 "unavailable"** | 影响特定模型调用场景，造成顾问功能不可用。 | 3 条评论，1 个👍，目前 Opus 顾问不受影响，用户希望统一修复。 |

*(每个 Issue 链接均指向 GitHub：`https://github.com/anthropics/claude-code/issues/<NUMBER>`)*

---

### 4. 重要 PR 进展 (共 6 个该周期更新)

| # | PR 标题 | 主要贡献 |
|---|------------|-------------------|
| #41447 | **feat: open source claude code ✨** | 开源代码仓库，取消多项历史限制，包括 #59、#456、#2846、#22002、#41434 等。 |
| #76475 | **Flag innerHTML/outerHTML += append sink in security-guidance** | 修复安全指导模式对 `innerHTML += userInput` 等组合攻击模式的误判，强化 XSS 检测覆盖率。 |
| #76394 | **Add Claude Code Launcher - Windows CLI Application** | 推出独立的 Windows 命令行启动器，14 项交互式菜单功能，Win 平台开发体验再升级。 |
| #76298 | **docs: document Remote Control background-task panel (#75884)** | 记录 Web/Mobile 后台任务面板及 v2.1.205 新增的任务状态同步行为，完善远程控制文档。 |
| #76289 | **examples/hooks: demonstrate compound-command pre-flight with deny-and-steer in the bash validator example** | 扩展 Bash 命令验证器示例，演示链式命令（;、&&、|| 等）和管道（含白名单）的预检逻辑。 |
|

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**📅 OpenAI Codex 社区动态日报 — 2026‑07‑11**

---

## 1. 今日速览
OpenAI Codex 本日主要聚焦于稳定性修复和模型配置调整。官方发布了两款 Rust 相关 alpha 版本；GitHub Issues 中高票讨论集中在 GPT‑5.5/5.6 Sol 的行为异常（token 聚类、子代理指定）、Windows 桌面端频繁崩溃/卡顿问题，以及 VS Code 扩展的历史会话加载失败。社区同时关注子代理环境隔离、新款模型对 Reasoning‑Summary 参数的支持，以及 IDE / 插件钩子的可靠性改进。

---

## 2. 版本发布

| 版本 | 类型 | 变更摘要 |
|------|------|------------|
| **rust‑v0.145.0‑alpha.4** | Rust 库 | 内部组件升级，细节可见发布说明。 |
| **rust‑v0.145.0‑alpha.3** | Rust 库 | 同上。 |

*这两个版本主要用于构建系统依赖更新，仅对用户可见的 Codex 功能无影响。*

---

## 3. 社区热点 Issues（各 10 个最受关注的问题）

| # | 问题 | 重要性 | 社区反馈 |
|---|------|--------|------------|
| **#30364** | **[OPEN] GPT‑5.5 Codex reasoning‑token clustering at 516/1034/1552 may be leading to degraded performance on complex tasks** | 发现 model‑specific token 峰值模式，可能导致推理资源浪费和任务表现下降。 | **183 条评论 / 283👍** – 大量开发者报告了任务超时和 token 消耗异常。 |
| **#18993** | **[CLOSED] Unable to open past conversation history in VS Code extension** | 影响扩展用户回忆历史对话的核心功能。 | **49 条评论 / 54👍** – 用户提出迫切需求，希望能恢复会话历史记录。 |
| **#31814** | **[OPEN] GPT‑5.6 Sol cannot specify subagent models** | 用户希望为特定子代理指定自定义模型，但当前默认强制所有子代理也使用 Sol，导致灵活性不足。 | **34 条评论 / 83👍** – 获得广泛赞同，认为这是对多智能体配置的限制。 |
| **#28982** | **[OPEN] Windows app 26.616.3309.0: native sandbox setup helper fails with “The specified module could not be found”** | 新版本后沙盒辅助模块加载失败，导致安全沙盒初始化报错。 | **33 条评论 / 12👍** – Windows 用户纷纷报告启动失败。 |
| **#20214** | **[OPEN] Codex App frequently freezes/stutters on Windows 11 Pro** | 即使硬件资源充足，桌面端仍出现 UI 卡顿，严重影响用户体验。 | **32 条评论 / 45👍** – 成为关于 Windows 性能问题的争议最大话题。 |
| **#16374** | **[OPEN] Codex desktop app intermittently freezes Windows shell/UI** | 偶尔 UI 冻结，仅通过打开“设置”即可恢复，此问题极易导致用户流失。 | **26 条评论 / 10👍** – 报告用户提出 UI 稳定性修复请求。 |
| **#28969** | **[OPEN] Add setting to disable the auto‑resolve in 60 seconds for questions** | 用户希望为“自动解答”超时行为提供选项控制。 | **22 条评论 / 104👍** – 获得最多社区支持之一，显示出该功能的受欢迎程度。 |
| **#13009** | **[CLOSED] Spark model rejects reasoning.summary with unsupported_parameter** | 验证模型元数据中 `supports_reasoning_summary_parameter` 是否正常工作。 | **21 条评论 / 4👍** – 用户反馈表明模型对 summary 参数的处理存在兼容性问题。 |
| **#24814** | **[OPEN] Windows Codex App: Browser Use blocked by enterprise network policy even for example.com** | 企业网络过度封禁导致内置浏览器无法访问任何网站。 | **19 条评论 / 2👍** – 提示安全策略需要更细粒度的控制。 |
| **#32032** | **[OPEN] Computer Use 1.0.1000366 crashes at launch on macOS 15.7.7 due to missing Swift Concurrency symbol** | macOS 高版本运行时缺少核心并发符号，导致计算机使用功能完全无法启动。 | **14 条评论 / 9👍** – 开发者要求更新运行时支持。 |

*我们选取了评论数/点赞数最高的 **10** 个 Issue。*

---

## 4. 重要 PR 进展（各 10 个最受关注的 PR）

| # | PR 标题 | 关键改进 |
|---|----------|------------|
| **#32305** | **Improve file blob upload diagnostics** | 为每次上传增加 `x-ms-client-request-id`，使失败日志更易追溯。 |
| **#32302** | **Prefer the Codex home socket for Unix IDE context** | 统一所有连接，使用 `CODEX_HOME/ipc/ipc.sock`，提升 Unix 环境下 IDE 集成稳定性。 |
| **#32301** | **Trust hooks from materialized workspace plugins** | 插件刷新时自动信任已安装/更新插件的钩子定义，简化安全配置。 |
| **#32290** | **Respect model support for reasoning summaries** | 根据 `supports_reasoning_summary_parameter` 控制 summary 参数发送；保护低版本模型兼容性。 |
| **#32289** | **Persist paginated items in the local thread store** | 将分页历史数据持久化到本地存储，同时保持服务端接口不可修改。 |
| **#32288** | **Make GPT‑5.6 Sol the default Bedrock model** | 将 GPT‑5.6 Sol/Terra/Luna 置顶为 Amazon Bedrock 目录默认，并附带默认推理等级。 |
| **#32286** | **Clarify waiting behavior in safety buffering prompts** | 重命名“继续等待”为“忽略并继续等待”，并提供免操作解释。 |
| **#30463** | **Fix autocomplete targeting between mentions** | 修正光标位于 `$unbound‑skill | $bound‑skill` 时自动完成功能的目标选择。 |
| **#30492** | **Fix slash command popup dismissal** | 防止 `/rev` → Escape 后立即弹出再次，导致消失操作不透明。 |
| **#31662** | **Core: allow restricting subagent environments** | 新增 `environment_ids` 参数，支持对子代理执行环境隔离配置。 |

*这些 PR 覆盖了诊断、IDE 环境、插件安全、模型支持、本地存储、Bedrock 默认值、提示交互、自动完成、UI 交互及子代理隔离等领域。*

---

## 5. 功能需求趋势

| 趋势方向 | 典型讨论 |
|----------|----------|
| **Windows 桌面端稳定性** | `#20214`, `#16374`, `#28982`, `#29821`, `#31212` – 反复出现 UI 卡顿、沙盒启动失败、内核池内存泄漏等问题。 |
| **子代理与模型配置** | `#31814`, `#24069`, `#17598`, `#31662` – 用户希望为子代理自由选择模型及隔离运行环境。 |
| **IDE 与插件集成** | `#18993`, `#32302`, `#24239` – VS Code 扩展的历史记录加载、北方套接字路径、前端插件滑动门等。 |
| **计算机使用与外设支持** | `#32032`, `#19544` – macOS/Windows 运行时缺少符号、Homebrew 版 CLI 无法使用计算机使用功能。 |
| **钩子与自动化** | `#26452`, `#26383`, `#32301` – `codex exec` 钩子未派发、`hooks.json` 信任逻辑及插件钩子的自动信任。 |
| **MCP / 插件管理器** | `#24814`, `#31359`, `#32272` – 企业网络封禁、MCP 服务器不可达的超时行为、插件详情中缺少定时任务信息。 |
| **用户体验优化** | `#28969`, `#12582`, `#32286` – 自动解答超时控制、Esc 键中断逻辑、等待提示文案更明确。 |
| **模型功能支持** | `#30364`, `#13009`, `#32

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>


# Gemini CLI 社区动态日报 - 2026-07-11

## 1. 今日速览
Gemini CLI 社区持续聚焦于 Agent 子系统稳定性和安全性改进，多个 P1 优先级的 Agent 挂起和行为异常问题引发开发者关注。同时，一系列核心安全修复 PR 被合并，包括路径遍历防护、令牌权限加固和依赖漏洞补丁。

## 2. 版本发布
无新版本发布

## 3. 社区热点 Issues（Top 10）

### 🐛 #22323 [P1][Agent子系统] Subagent recovery after MAX_TURNS误报GOAL成功
- **重要性**: 子代理在达到最大轮次限制时错误报告任务成功，掩盖了实际中断情况，可能导致自动化流程误判。
- **社区反应**: 10 条讨论，2 个赞同 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/22323)

### 🧪 #24353 [P1][Agent评估] 构建健壮的组件级评估框架
- **重要性**: 继行为评估测试引入后，该Epic跟踪如何实现更细粒度的Agent性能评估，76个测试已建立。
- **社区反应**: 7 条讨论 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/24353)

### ⚡ #22745 [P2][代码理解] 评估AST感知文件读取和搜索价值
- **重要性**: 探索使用AST感知工具精确读取方法边界，减少token消耗和误读，提升代码分析效率。
- **社区反应**: 7 条讨论，1 个赞同 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/22745)

### 🪢 #21409 [P1][Agent卡住] Generalist agent永久挂起
- **重要性**: 高频问题，当CLI调用generalist agent时会永久挂起，即使是简单操作如创建文件夹也会受影响。
- **社区反应**: 7 条讨论，8 个赞同 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/21409)

### 💻 #25166 [P1][Shell执行] Shell命令执行后卡在"Waiting input"
- **重要性**: 命令完成后界面仍显示等待输入状态，阻塞后续操作，影响用户体验。
- **社区反应**: 4 条讨论，3 个赞同 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/25166)

### 🌐 #21983 [P1][浏览器Agent] Wayland环境下browser subagent失败
- **重要性**: Linux Wayland用户无法使用浏览器子代理功能，平台兼容性问题。
- **社区反应**: 4 条讨论，1 个赞同 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/21983)

### ☠️ #22672 [P2][破坏性行为] Agent应该阻止/不鼓励破坏性操作
- **重要性**: 涉及git reset --force等高风险命令的安全防护，防止意外数据丢失。
- **社区反应**: 3 条讨论，1 个赞同 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/22672)

### ⚙️ #22267 [P2][配置忽略] Browser Agent忽略settings.json中的maxTurns等配置
- **重要性**: 配置管理缺陷，全局或项目级设置无法覆盖子代理行为，降低灵活性。
- **社区反应**: 3 条讨论 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/22267)

### 🔁 #26522 [P2][内存系统] 停止Auto Memory对低信号会话的无限重试
- **重要性**: 内存提取机制在识别低价值会话时可能形成死循环，影响系统稳定性。
- **社区反应**: 5 条讨论 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/26522)

### 🛡️ #26525 [P2][安全] 添加确定性红action和减少Auto Memory日志
- **重要性**: 涉及敏感信息泄露风险，需在模型上下文加载前进行安全过滤。
- **社区反应**: 3 条讨论 | [查看讨论](https://github.com/google-gemini/gemini-cli/issues/26525)

## 4. 重要 PR 进展（Top 10）

### 🔒 #28316 修复任务取消未终止执行循环的问题
- **内容**: Agent模式下取消任务时确保底层执行流正确终止，防止"幽灵执行" | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28316)

### 🔐 #28319 强化路径信任检查和任务环境隔离
- **内容**: 重构初始化生命周期，确保工作区路径检查在环境变量加载前完成，使用AsyncLocalStorage隔离任务环境 | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28319)

### 🛑 #28353 防御式编程防止restore命令路径遍历
- **内容**: 对restore命令输入进行规范化和边界检查，防止`../../../etc/passwd`等攻击 | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28353)

### 🧼 #28352 清理和包装caretaker中的issue标题
- **内容**: 防止提示注入攻击，转义untrusted_context标签 | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28352)

### 🔁 #28349 防护customDeepMerge circular references
- **内容**: 修复设置对象包含循环引用时导致的栈溢出崩溃问题 | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28349)

### 🔁 #28348 解决MaxListenersExceededWarning和认证无限循环
- **内容**: 修复API重试时的事件监听器泄漏和Windows OAuth认证死循环 | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28348)

### 📡 #28143 按服务器解析MCP资源防止跨服务器混淆
- **内容**: 修复多个MCP服务器使用相同URI时返回错误内容的问题 | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28143)

### 🌍 #28142 支持Vertex AI API密钥下的GOOGLE_CLOUD_LOCATION
- **内容**: 修复使用API密钥认证时忽略地域配置的问题 | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28142)

### 📦 #28140 补丁shell命令依赖漏洞
- **内容**: 更新shell-quote(1.8.3→1.9.0)和simple-git(3.28.0→3.36.0)修复安全警告 | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28140)

### 📝 #28240 开箱支持AGENTS.md上下文文件
- **内容**: 默认加载GEMINI.md和AGENTS.md作为上下文，无需手动配置settings.json | [查看PR](https://github.com/google-gemini/gemini-cli/pull/28240)

## 5. 功能需求趋势

- **Agent 子系统稳定性**: 约40%的Issue与子代理卡住、配置无效、生命周期管理相关
- **安全与隐私增强**: 约25%的问题聚焦于令牌权限、路径遍历、敏感信息泄露防护
- **性能优化**: 包括终端渲染、启动速度、资源隔离等方面的改进需求
- **代码理解能力**: AST-aware工具、精确代码边界识别成为重要发展方向
- **跨平台兼容性**: Wayland、Windows环境下的特定问题逐渐被提上日程

## 6. 开发者关注点

- **Agent 执行可靠性**: 多次报告子代理挂起和状态误报问题，影响自动化工作流
- **Shell 集成问题**: 命令执行后界面状态不同步，交互式提示处理不完善
- **配置系统缺陷**: 设置不生效、循环引用导致崩溃、资源发现不遵循ignore规则
- **内存系统健壮性**: 低信号检测、补丁验证、日志安全等机制亟需改进
- **IDE/编辑器集成**: 外部编辑器退出后终端缓冲区损坏，编辑器检测影响启动速度


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报（2026‑07‑11）**  

---

### 1. 今日速览  
- Copilot CLI 发布 **v1.0.71‑0**，新增“pinned prompts”设置并扩展 **Repo / Repo (local)** 两个 Dashboard 选项卡。  
- 该版本进一步优化了默认安装流程，改用更轻量的验证命令并简化了路径配置检测。  
- 社区在过去 24 h 内活跃度提升，尤其是围绕 **TUI 黑屏卡死、语音模式代理问题、MCP OAuth 断连** 等高频 Bug 的讨论。

---

### 2. 版本发布  
- **v1.0.71‑0**（2026‑07‑11）  
  - **Added**：`/settings` 中新增 **pinned prompts** 开关； Dashboard 增加 **Repo** 与 **Repo (local)** 两个标签页，便于快速查看仓库级别的配置。  
  - **Improved**：默认使用更精准的验证命令进行安装检测，整体安装指引更轻量；同时提供键盘快捷 **ctrl+x → x**（关闭会话）和 **ctrl+x → h**（隐藏会话）提升交互效率。  

---

### 3. 社区热点 Issues（选取 10 条）  

| Issue | 标题（关键） | 为何重要 | 社区热度 |
|------|--------------|----------|----------|
| #4069 | **TUI wedges mid‑turn** – screen clears, input dead, Ctrl+C/Ctrl+\ ignored | 在 WSL2+Windows Terminal 环境下出现会话卡死、键盘失效，导致工作流中断；已确认在 1.0.70‑0 中重现。 | 7 条评论，8 👍 |
| #4024 | **Voice mode transcription fails** – all ASR models return empty results | 语音模式的 ASR（nemotron‑3.5‑asr‑streaming‑0.6b 等）在所有模型上均返回空字符串，影响核心交互体验。 | 3 条评论 |
| #4077 | **TUI black‑screen hang** – content intact, recoverable via `--resume` | Windows Terminal 中出现全屏黑屏卡住，需手动重启或使用 `--resume` 参数恢复，暴露了渲染层的异常处理缺陷。 | 3 👍 |
| #4085 | **MCP OAuth flow broken – servers drop after ~90 s** | OAuth 需要的身份验证服务器在建立连接后立即断开，导致所有依赖 OAuth 的 MCP 服务器失效。 | 0 👍 |
| #4065 | **Voice mode upload / apply fails when no connection** | 当网络不可达时，声学模式的上传/应用步骤直接失败，缺少友好的错误提示。 | 0 👍 |
| #4088 | **Dynamic context injection for Skills (`!command` placeholder)** | 提出在 Skills 编写中支持动态占位符，以便在运行时注入外部命令输出，提升技能复用性。 | 0 👍 |
| #4083 | **Voice mode download fails behind corporate proxy (ENOTFOUND)** | 在企业代理环境下下载 Foundry 本地推理运行时时出现 DNS 解析错误，阻碍了语音模式的部署。 | 0 👍 |
| #3399 | **Allow custom headers for BYOK** | 企业内部 LLM 服务常需额外 HTTP 头部，现需求支持自定义 Header 以实现 BYOK（Bring‑Your‑Own‑Key）兼容。 | 3 👍 |
| #3709 | **Switch models mid‑session (BYOK + GitHub models)** | 当前 `/model` 只能在同一模型族内切换，不能混合使用 GitHub Hosted 与本地 BYOK 提供的模型。 | 2 👍 |
| #4076 | **Voice mode: auto‑submit on spacebar release** | 在 PTT（Push‑to‑Talk）模式下请求自动在释放空格键时提交文本，以消除额外的 Enter 操作。 | 0 👍 |

> **说明**：以上 Issue 按社区评论数、👍 反应以及对 Copilot CLI 核心功能的影响程度进行挑选。

---

### 4. 重要 PR 进展（10 条）  
| PR | 关键改动 | 影响 |
|----|----------|------|
| #2565 | **install: guard against duplicate PATH entries on reinstall** – 防止重复安装时 PATH 被追加两次，提升安装稳定性。 | 解决多次运行安装脚本后出现的 PATH 重复问题。 | 关键修复，已合并至 `main` 分支。 |

> 目前过去 24 h 内仅有一条已合并的重要 PR，若后续有新 PR 合并，可在后续报告中补充。

---

### 5. 功能需求趋势  
从本轮 Issues 中可提炼出以下 **功能热点**：

1. **跨平台/跨会话同步**：期望 CLI 与 Desktop App、IDE 会话共享，支持统一的 Session 列表与续用。  
2. **更灵活的模型切换**：允许同一会话同时使用 GitHub Hosted 与本地 BYOK 两类模型，降低模型绑定的硬编码限制。  
3. **可配置的 MCP 故障恢复**：对 OAuth 失效、连接掉线等场景提供自动重试或用户可视化恢复提示。  
4. **语音模式的网络/代理适配**：在企业代理环境下的下载与运行更稳健，提供自定义代理配置或系统代理识别。  
5. **技alent‑aware UI**：针对 TUI 的交互卡死问题（黑屏、输入失效）加入自动恢复或 `--resume` 参数，提升鲁棒性。  
6. **Skill 动态上下文注入**：通过 `!<command>` 占位符在 Skills 中动态填充外部输出，提升自定义工具的复用度。  

---

### 6. 开发者关注点（痛点与高频需求）  
- **「卡死」与「不响应」**：多条报告指向 TUI 渲染层在流式输出后进入死锁状态，尤其在 WSL2 + Windows Terminal 环境频发，需要更好的退出/恢复机制。  
- **「语音模式」可靠性**：ASR 模型返回空、代理下载失败、系统播放干扰等导致交互不可靠，呼吁加入更完整的错误捕获与自动重试。  
- **「OAuth / MCP」连接不稳**：服务器在 OAuth 流程中超时断连，导致工具不可用，开发者希望提供明确的状态指示与手动重启入口。  
- **「安装/路径」冲突**：重复安装导致 PATH 重复追加的问题仍然困扰企业内部脚本部署，需要更智能的检测与一次性写入机制。  
- **「Skill 编写」可变上下文**：开发者希望在 Skills 中直接调用外部命令或读取文件/变量，以減少重复劳作，期待类似模板系统的原生支持。  

---

> **结论**：本轮社区围绕 **稳定性**（TUI、语音、MCP）与 **可扩展性**（模型切换、Skill 动态注入）两大核心诉求展开。开发团队已在最新版本中加入了对 **pinned prompts**、**Repo Dashboard** 的功能扩展，而后续的重点工作将放在 **会话同步**、**代理适配** 与 **错误恢复** 上，以提升跨平台使用体验。  

---  

*所有链接均指向对应 GitHub 页面，点击可查看完整讨论。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**2026‑07‑11 Kimi‑CLI 社区动态日报**

---

### 1. 今日速览  
本日社区整体保持沉稳，主线更新聚焦于 Web UI 的细粒度排版与错误信息友好化；无新版本发布。PR #2489 与 #2488 分别解决了“/init”生成的临时 soul 触发工具绑定失效，以及新手安装后出现 **LLM not set** 的指引不够明确问题，提升了工具链的可(bank)友好性。  

---

### 2. 版本发布  
暂无新 releases，仍以 PR 方式迭代。  

---

### 3. 社区热点 Issues  
> **说明**：过去 24 h 内无 Issue 更新，以下为当前最具讨论度的 Issue，供关注。  
| Issue  | 简述 | 重要性 | 讨论概况 |
|-------|------|--------|----------|
| #2478 | `/init` 产生临时 `KimiSoul` 时工具重新绑定导致 plan‑mode 错误 | 与 PR #2489 相关，影响配置初始化 | 已成为重点修复议题，社区已讨论多种重构方案 |
| #2456 |感染 Fresh installs 时出现 “LLM not set” | 影响所有新用户的首次登录流程 | 需求明确，已被 PR #2488 直接修复 |
| #1815 | Safari/IME 组合下 `Enter` 键错误触发发送 | 兼容性和易用性问题，影响 macOS 用户 | 已在 PR #1815 中解决，仍在验证阶段 |
| #2340 |（已合并）改进 Kimi CLI 的配置文件合并逻辑 | 提升多用户环境下配置的稳定性 | 高优先级改动，已积极合并 |
| #2321 |（已关闭 sinun）提示错误的命令行参数校验 | 提升 CLI 的鲁棒性 | 已通过 PR #2321 完成修复 |
| #2310 |（已关闭）Kimi AI 会话的历史记录查询优化 | 降低延迟，提升 UX | 已完成后端优化，PR 已合并 |
| #2295 |（已关闭）多人协AMILS 实验功能的文档整理 | 加强团队协作 | 已作完官方文档更新 |
| #2283 |（已关闭）在大模型切换时重置所有缓存 | 解决缓存泄漏问题 | 已通过 PR #2283 解决 |
| #2270 humanities |（已关闭）网络代理配置的跨平台支持 | 提升落地应用场景 | 已完成文档与示例更新 |
| #2265 |（已关闭）默认命令历史大小限制 | 日志管理 | 已通过 PR #2265 合并执行 |

> **共同点**：多部分 Issue 均围绕“用户体验”与“系统鲁棒性”展开，体现了开发者对交互细节与错误处理的高度关注。

---

### 4. 重要 PR 进展  
| PR # | 状态 | 作者 | 主要修复 / 功能 | 细节摘要 |
|-----|------|-------|----------------|----------|
| ** Glow #2353** | 已关闭 | anxndsgn | Tighten app layout spacing | 1. 去除 app‑level outer gutter，保留 safe‑area insets。2. 优化 sessions sidebar list spacing 与搜索输入框显示。 |
| ** #2489** | **打开** | nankingjing | 修复 /init 产生 throwaway soul 后 plan‑mode 工具绑定丢失 | 1. 重新绑定 `ExitPlanMode`、`EnterPlanMode`、`Write…` 等工具。2. 通过 `soul.agent` 共享，保证工具完整性。 |
| ** #2488** | **打开** | nankingjing | 提升 Fresh 安装时的 LLMNotSet 错误信息 | 1. 将默认消息从 IMPLIED “LLM not set” 改为 actionable “请先执行 `kimi login` 或者设置默认 LLM” 。2. 兼容 Homebrew 安装流程。 |
| ** #1815** | 已关闭 | qianqiuqiu | 防止 Safari IME 组合下 Enter 键误发送 | 1. 在 Safari+macOS Chinese IME 下，仅在 IME 结束时才能发送消息。2. 避免“候选词”误触导致即时发送。 |

> **趋势**：近期 PR 主要均聚焦于前端布局细节、CLI 错误提示友好化、以及多平台（Safari propriété）兼容性问题。  

---

### 5 UFO 功能需求趋势  
1. **更完善的 GUI 体验**：UI 细节优化（像素级对齐、安全边距、侧栏间隙）是首要 учени<|vq_clip_11301|>2. **错误信息可操作化**：用户首次登录或命令错误时，系统需要直接提供恢复路径。3. **跨平台兼容**：多 IME 兼容、Web 与 Desktop 统一行为。4. **工具绑定与生命周期**：动态创建 soul 时确保工具绑定完整。5. **未来展示**：随着更大模型上线，对配置文件与缓存机制的改进需求将提升。

> **可执行方向**：下周可考虑将 `soul` 绑定逻辑迁移至抽象层，实现更可靠的初始化；同时继续提升在 Safari/IME 上的输入准确性。

---

### 6. 开发者关注点  
| 关注点 | 具体表现 |  Ap整化建议 |
|---------|-----------|--------------|
| **UI 细节** | 侧栏 spacing、外边距导致页面排版不一致 | 统一 CSS variable，开启可视化 diff 流程 |
| **错误指引** | “LLM not set”缺乏操作提示 | 采用多语言，输出 `Usage: kimi login` 或 `export KI_MI_DEFAULT_MODEL=…`  |
| **工具重 binding** | 临时 soul 共享导致原始工具失效 | 在 soul 初始化时消费 `shared_agent`，手动确认 bind |
| **跨平台输入** | Safari+IME 时 Enter 键误触发立即发送 | 加入 `compositionend` 事件监听，区分候选区与正常输入 |

> **建议**：形成“UI 调整 + 文档更新”一体化流程，避免单独修复导致文档与代码间断裂。  

---

> **全部关联链接**  
> - PR #2353: https://github.com/MoonshotAI/kimi-cli/pull/2353  
> - PR #2489: https://github.com/MoonshotAI/kimi-cli/pull/2489  
> - PR #2488: https://github.com/MoonshotAI/kimi-cli/pull/2488  
> - PR #1815: https://github.com/MoonshotAI/kimi-cli/pull/1815  
> - Issue #2478: https://github.com/MoonshotAI/kimi.SqlAction/issues/2478  
> - Issue #2456: https://github.com/Moonshotկր/kiА-cli/issues/2456  
> - Issue #1815: https://github.com/MoonshotAI/kimi

祝开发顺利 🚀

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态报告（2026‑07‑11）**  

---

### 1. 今日速览  
- 本日 **无新版本发布**，但出现多起高关注度的社区问题，尤其是剪贴板失效、Xcode ACP 与模型配置冲突以及 SQLite 并发锁竞争，均在社区讨论中引发热烈回应。  
- 同时，**移动端 UI**、**集成浏览器**和 **Provider‑Specific 速率限制**等功能请求持续累积，显示出用户对更灵活部署和更安全资源管理的迫切需求。

---

### 2. 版本发布  
- **无**（过去 24 h 内未发现新 Release）。

---

### 3. 社区热点 Issues（选取 10 条最受关注）  

| # | 标题 | 关键摘要 | 评论 / 👍 | 链接 |
|---|------|----------|-----------|------|
| **#4283** | **Copy To Clipboard is not working** | 选中文本后无法复制到系统剪贴板，阻碍工作流。 | 112 评论 / 👍 103 | <https://github.com/anomalyco/opencode/issues/4283> |
| **#10288** | **Feature Request: Mobile version of OpenCode (Android/iOS/Web UI)** | 呼吁提供移动端/TUI Web UI，以便随时访问 AI 助手。 | 14 评论 / 👍 89 | <https://github.com/anomalyco/opencode/issues/10288> |
| **#26772** | **[FEATURE] Integrated browser for desktop** | 想在桌面版加入内置浏览器工作区，便于快速查看文档/资源。 | 12 评论 / 👍 3 | <https://github.com/anomalyco/opencode/issues/26772> |
| **#34743** | **opencode ACP from Xcode 27 beta 2 uses default model big‑pickle ignoring opencode.json** | Xcode‑ACP 环境下自定义模型配置被忽略，导致使用错误的模型。 | 12 评论 / 👍 0 | <https://github.com/anomalyco/opencode/issues/34743> |
| **#36140** | **GPT‑5.6 Luna returns model not found with ChatGPT OAuth** | `gpt-5.6-luna` 在 OAuth 方式下报 404，模型未发现。 | 11 评论 / 👍 47 | <https://github.com/anomalyco/opencode/issues/36140> |
| **#14970** | **SQLite database corruption (database disk image is malformed) when running concurrent sessions on NFS** | 并发会话在 NFS 挂载目录下导致数据库锁竞争并损坏。 | 10 评论 / 👍 19 | <https://github.com/anomalyco/opencode/issues/14970> |
| **#9532** | **Why does opencode frequently encounter tool calling errors when using claude** | Claude 工具调用频繁返回 “Model tried to call unavailable tool”。 | 7 评论 / 👍 3 | <https://github.com/anomalyco/opencode/issues/9532> |
| **#36302** | **feat(tui): unify modal interaction and visual behavior** | TUI 中的 modal 状态统一与视觉一致性改进，需后续拆分为细粒度 Issue。 | 5 评论 / 👍 0 | <https://github.com/anomalyco/opencode/issues/36302> |
| **#36137** | **I am getting unexpected server error on Opencode CLI** | CLI 启动时出现未捕获的服务器错误，影响调试。 | 4 评论 / 👍 0 | <https://github.com/anomalyco/opencode/issues/36137> |
| **#36285** | **[bug, perf, 2.0] 2.0: managed-service restart causes reconnect herd and resource spikes** | 服务自动更新后会导致大量连接重新建立，资源使用量激增。 | 3 评论 / 👍 0 | <https://github.com/anomalyco/opencode/issues/36285> |

> **为什么重要**：这些 Issue 直指 **功能缺失、性能隐患、兼容性冲突** 三大痛点，且均拥有 **高于 10 条评论或显著的 👍 支持**，表明社区对其影响范围广泛，迫切需要修复或实现。

---

### 4. 重要 PR 进展（选取 10 条最具代表性）  

| PR | 标题 | 关键改动 | 链接 |
|----|------|----------|------|
| **#36339** | feat(codemode): support Promise.any and new Promise construction | 实现 `Promise.any` 与 `new Promise(executor)`，提升代码沙箱的 Promise 处理能力。 | <https://github.com/anomalyco/opencode/pull/36339> |
| **#36341** | feat(tui): show pending command resolution | 在 TUI 中显示正在解析的命令，减少空等待感。 | <https://github.com/anomalyco/opencode/pull/36341> |
| **#36338** | fix(tui): fork messages with agent attachments | 修复 fork 时附件解析错误，并让返回键可关闭对话框。 | <https://github.com/anomalyco/opencode/pull/36338> |
| **#36275** | [contributor] fix(cli): report mismatched service status | 改进 `service status` 输出，用 JSON 明确 daemon 状态，避免误导。 | <https://github.com/anomalyco/opencode/pull/36275> |
| **#36336** | feat(core): port GitHub Copilot OAuth | 将 Copilot OAuth 迁移至 V2 集成注册表，支持更安全的设备授权。 | <https://github.com/anomalyco/opencode/pull/36336> |
| **#34794** | feat(provider): add `--model free` to pick a random zero‑cost opencode model | 新增 `--model free` 参数，随机挑选 Zero‑Cost 模型，降低使用门槛。 | <https://github.com/anomalyco/opencode/pull/34794> |
| **#36333** | fix(core): cap session output tokens | 对 V2 Session 输出 token 数上限 32k，防止突发大量输出导致资源耗尽。 | <https://github.com/anomalyco/opencode/pull/36333> |
| **#36321** | refactor(core): combine git discovery queries | 合并 Git 发现的子查询，提升元数据获取的可靠性与速度。 | <https://github.com/anomalyco/opencode/pull/36321> |
| **#36332** | test(core): add CodeMode search fixture catalog | 引入 200 个临时 no‑op tool，覆盖搜索路径与工具调用全链路。 | <https://github.com/anomalyco/opencode/pull/36332> |
| **#36304** | feat(codemode): support promise chaining with .then/.catch/.finally | 完善 Promise 链式调用支持，增强代码沙箱的异步能力。 | <https://github.com/anomalyco/opencode/pull/36304> |

> **核心价值**：这些 PR 覆盖 **沙箱 Promise 扩展、TUI 体验优化、CLI 状态可视化、OAuth 集成、成本模型以及性能安全** 等关键方向，体现了社区在 **功能完善、可靠性提升、易用性增强** 三条主线上的同步推进。

---

### 5. 功能需求趋势  

从本轮 Issue 中可以归纳出以下 **三大热点需求**：

1. **跨平台可访问性** – 移动端 UI（Issue #10288）以及 Web UI 版本的迫切需求，说明开发者希望在任何设备、任何网络环境下使用 OpenCode。  
2. **集成与扩展能力** – 包括 **集成浏览器**（Issue #26772）、**Provider‑Specific 速率限制**（Issue #32423）以及 **Azure 连接 GPT‑5.6**（Issue #36211），用户希望通过插件、API 或自定义模型提升功能灵活度。  
3. **可靠性与资源管理** – SQLite 并发锁、服务重启导致的资源峰值、Tool‑Calling 错误以及模型配置被忽略等，反映出社区对 **数据一致性、运行时稳定性以及资源调度** 的高度关注。

---

### 6. 开发者关注点  

- **痛点**：剪贴板失效（#4283）、Xcode‑ACP 配置被覆盖（#34743）、并发会话导致数据库锁（#14970）和 Tool‑Calling 错误（#9532）是当前最常被提及的阻碍生产力的问题。  
- **高频需求**：  
  - **默认安全权限**（如 Issue #2632 的闭合讨论） —  — 希望在编辑/执行关键命令前强制确认。  
  - **更好与系统交互** —  — 如交互式 Shell 能加载 `.zshrc`（#36308）以及改进剪贴板功能。  
  - **可观测的运行状态** —  — 对服务状态、模型使用情况以及资源消耗的更清晰可视化（如 #36275、#36285）。  

这些反馈表明，**稳定性、交互体验以及跨平台可用性** 将是后续开发的核心关注点。

---  

*报告撰写：AI 技术分析师*  
*数据来源：GitHub anomaolyco/opencode（截至 2026‑07‑11）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报（2026‑07‑11）**  

---

### 今日速览
- 今日发布了夜间版 **v0.19.8‑nightly.20260711** 以及正式版 **v0.19.9**，但 v0.19.9 的 Docker 集成发布仍在失败中。  
- 社区热议围绕 **多工作区支持**、**流式 API 超时**、**内存 OOM**、**macOS 剪贴板图片粘贴** 等功能与稳定性问题展开。  
- 多个 PR 聚焦于 **会话恢复、目标评估生命周期安全、泄漏协议回退、内存压力监测** 以及 **Web Shell 工作区选择器**，表明对长时段使用体验和可靠性的持续改进需求强烈。

---

### 版本发布
| 版本 | 更新要点 | 链接 |
|------|----------|------|
| **v0.19.8‑nightly.20260711.0ef3a76bd** | - 修复：在模型调用 `enter_plan_mode` 时保持 YOLO 模式（@Nas01010101）<br>- 新增：CLI 中转发 `ask_user` 请求 | https://github.com/QwenLM/qwen-code/releases/tag/v0.19.8-nightly.20260711.0ef3a76bd |
| **v0.19.9** | - 停止重复子工具调用循环（@yiliang114）<br>- 修复会话：检测并标记损坏的历史链，而非静默截断 | https://github.com/QwenLM/qwen-code/releases/tag/v0.19.9 |
| **发布失败（v0.19.9）** | Docker 集成任务反复失败（integration_docker），导致发布流程中断，已有多个 Issue 跟踪（#6690、#6687、#6684 等）。 | https://github.com/QwenLM/qwen-code/issues/6690 等 |

---

### 社区热点 Issues（挑选 10 条）

| # | 标题 | 为什么重要 / 社区反应 | 链接 |
|---|------|----------------------|------|
| #6378 | **RFC: Support multiple workspaces in one qwen serve daemon** | 20 条评论，社区强烈期望单 daemon 服务多工作区，以提升多人协作效率。 | https://github.com/QwenLM/qwen-code/issues/6378 |
| #5975 | **API Error: No stream activity for 120000ms after 19 chunks** | 10 条评论，反映升级后频繁出现流式超时，直接影响使用体验。 | https://github.com/QwenLM/qwen-code/issues/5975 |
| #6384 | **hard limit: 0 when env‑configured model reserves its full default context window for output** | 5 条评论，涉及上下文窗口计算错误，导致无法发送请求，是 token‑management 的核心痛点。 | https://github.com/QwenLM/qwen-code/issues/6384 |
| #6590 | **Ctrl+V 粘贴图片失效：macOS standalone 安装缺失原生模块 @teddyzhu/clipboard** | 4 条评论，macOS 用户普遍遇到的剪贴板图片粘贴失效，阻碍多模态输入。 | https://github.com/QwenLM/qwen-code/issues/6590 |
| #6629 | **Cron parser drops the step in single‑value expressions (`5/15` matches only `5`)** | 4 条评论，影响定时任务的正确解析，是核心调度功能的 Bug。 | https://github.com/QwenLM/qwen-code/issues/6629 |
| #6600 | **[BUG] v0.19.8: `--debug` prints log path but debug log file is never created** | 4 条评论，调试日志未写入磁盘，给问题定位带来困难。 | https://github.com/QwenLM/qwen-code/issues/6600 |
| #6654 | **API Error: tool_use blocks missing corresponding tool_result in messages array** | 4 条评论，直接导致模型调用失败，亟需修复工具使用循环的闭环。 | https://github.com/QwenLM/qwen-code/issues/6654 |
| #6582 | **审批模式切换时 UI 提示中英文混杂** | 3 条评论，影响国际化体验，社区期望统一语言提示。 | https://github.com/QwenLM/qwen-code/issues/6582 |
| #6595 | **qwen3.7‑max may leak `<analysis>/<summary>` tags in main assistant responses and stop follow‑up actions** | 3 条评论，长上下文场景下协议标签泄露会中断后续动作，是模型输出解析的关键问题。 | https://github.com/QwenLM/qwen-code/issues/6595 |
| #6597 | **Add a guard for suspicious comment attachments** | 3 条评论，社区关注安全，希望在 GitHub Actions 中拦截危险附件。 | https://github.com/QwenLM/qwen-code/issues/6597 |

---

### 重要 PR 进展（挑选 10 条）

| # | 标题 | 功能或修复内容 | 链接 |
|---|------|----------------|------|
| #6680 | **feat(channels): recover daemon sessions after restarts** | 在 channel‑worker 和 daemon 重启后保存并恢复会话路径，提升长时段会话的容错能力。 | https://github.com/QwenLM/qwen-code/pull/6680 |
| #6681 | **fix(core): make goal evaluation lifecycle‑safe** | 目标评估现在会等待后台 agent、shell job 或工作流完成，避免竞态条件。 | https://github.com/QwenLM/qwen-code/pull/6681 |
| #6683 | **fix(core): retry leaked protocol turns in recovery paths** | 对泄漏的 `<analysis>/<summary>` 回合进行完整回退并重试，即使包含工具调用也同样处理。 | https://github.com/QwenLM/qwen-code/pull/6683 |
| #6682 | **fix(cli): run periodic memory‑pressure check in interactive UI to prevent OOM on quit** | 添加定期内存压力监测及退出前最终检查，降低长对话导致的 OOM 风险。 | https://github.com/QwenLM/qwen-code/pull/6682 |
| #6697 | **feat(web-shell): resume stopped sessions on load** | WebShell 在加载时检查持久化的用户回合，并尝试通过 ACP 继续中断的回合。 | https://github.com/QwenLM/qwen-code/pull/6697 |
| #6696 | **fix(channels): suppress nested subagent output** | 防止频道转发时收集嵌套子代理的助手消息块，仅保留根代理输出。 | https://github.com/QwenLM/qwen-code/pull/6696 |
| #6691 | **fix(release): raise prepared package size limit to 96 MB** | 将发布脚本的包体积上限从 80 MB 提升至 96 MB，解决因体积略超导致的 Docker 构建失败。 | https://github.com/QwenLM/qwen-code/pull/6691 |
| #6692 | **fix(interactive): configure Docker sandbox networking for protocol tag retry test** | 为 Docker 沙盒下的协议标签重试测试提供正确的主机选项，防止 `127.0.0.1` 指向容器自身回环。 | https://github.com/QwenLM/qwen-code/pull/6692 |
| #6580 | **feat(cli): improve subagent observability — untruncated live commands, transcript path, approval context** | 在代理详情视图中显示未截断的实时命令、转写文件路径及批准上下文，提升透明度。 | https://github.com/QwenLM/qwen-code/pull/6580 |
| #6530 | **feat(web-shell): add cell value dialog on double‑click in markdown tables** | 在 Web Shell 的增强 Markdown 表格中双击单元格弹出只读对话框，显示完整值并支持复制。 | https://github.com/QwenLM/qwen-code/pull/6530 |

---

### 功能需求趋势
从本日 Issues 与 PR 中可提炼出以下社区关注方向：

1. **多工作区 / 会话管理**  
   - 单 daemon 支持多工作区（#6378）  
   - 工作区选择器、会话恢复、会话组织（#6680、#6697、#6700、#6699）  

2. **性能与稳定性**  
   - 内存 OOM 预防（#6614、#6682）  
   - 流式 API 超时及调试日志缺失（#5975、#6600）  
   - 工具使用闭环（#6654）  

3. **跨平台 & 本地交互**  
   - macOS 剪贴板图片粘贴（#6590）  
   - Windows UI 命中区域（#6632）  
   - Docker 沙盒网络配置（#6692）  

4. **Token / 上下文管理**  
   - 上限计算错误（#6384）  
   - 协议标签泄露（#6595）  
   - 目标条件长度限制（#6663）  

5. **可观测性与调试**  
   - 调试日志写入（#6600）  
   - 子代理可观测性（#6580）  
   - 嵌套子代理输出抑制（#6696）  

6. **安全与治理**  
   - 可疑附件防护（#6597）  
   - OAuth 自动恢复（#6639）  

---

### 开发者关注点（痛点 & 高频需求）
- **流式交互不可靠**：频繁的 “No stream activity” 超时和调试日志未生成，直接影响调试和生产使用。  
- **内存泄漏 / OOM**：大路径 glob、长会话导致堆内存溢出，开发者期望更激进的内存压力监测与自动回收。  
- **跨平台一致性**：macOS 剪贴板、Windows UI 响应、Linux/Docker 环境下的网络与文件路径处理不统一，造成平台特定 Bug。  
- **会话与工作区孤立**：现有单工作区模式限制团队协作，社区普遍期望多工作区支持以及无缝会话恢复。  
- **工具调用闭环**：`tool_use` 没有匹配的 `tool_result` 导致错误频发，需强化消息序列校验。  
- **发布流程脆弱**：Docker 集成任务反复失败，阻碍版本交付，开发者希望 CI/CD 更稳健以及体积限制的灵活调整。  

以上即为 2026‑07‑11 日 Qwen Code 社区的主要动态与趋势，供技术决策与后续规划参考。祝开发顺利！

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI 社区动态日报 — 2026‑07‑11**  
*数据来源：github.com/Hmbown/DeepSeek‑TUI（即 CodeWhale）*  

---

## 1. 今日速览  
- 今日无新版本发布，社区活动集中在 **v0.8.68** 的止送（stopship）工作：多个关键 PR 已合并，修复了 TUI 状态路由、Provider 配置误判以及 Android/QA 集成回归。  
- 热议 Issue 中，**#4092**（执行板 lane 顺序与依赖）和 **#4032**（CodeWhale 未遵循 “constitution”）评论数最高，反映出对工作流编排与代理行为约束的持续关注。  
- 最新提出的若干 Bug（如 **#4333‑#4335**、**#4329**）都围绕 Provider 配置的准确性和离线计费，说明社区对多模型、混合供应商环境的鲁棒性需求正在上升。

---

## 2. 版本发布  
> **无** 新版本在过去 24 小时内发布。

---

## 3. 社区热点 Issues（挑选 10 条）  

| # | 标题 & 链接 | 为何重要 | 社区反应 / 评论 |
|---|-------------|----------|-----------------|
| #4092 | [v0.8.68 execution board: lane order, dependencies, and agent protocol](https://github.com/Hmbown/CodeWhale/issues/4092) | 定义了 v0.8.68 里 “lane” 的执行顺序、依赖解析以及规范的 agent packet，是后续工作流调度的基础。 | 已闭合，60 条评论，讨论激烈，主要聚焦在如何让 lane 元数据可查询以及与子代理协议的对齐。 |
| #4032 | [Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032) | 指出 CodeWhale 在用户提供的脚本上仍会自行生成临时脚本，违背项目宪法（“只使用用户给出的工具”）。 | 开放，33 条评论，用户强烈要求强制遵守 constitution，维护者承认需加强检查。 |
| #4178 | [Stopship workflow as fleet-backed lane (dogfood #4090/#4093/#4094)](https://github.com/Hmbown/CodeWhale/issues/4178) | 通过实际 “stopship” 问题驱动 Fleet/Workflow/Lane 模型的端到端验证，是 v0.8.68 的里程碑。 | 开放，10 条评论，团队正在用真实 issue 做 dogfood，验证模型可用性。 |
| #4175 | [v0.8.68 architecture: Fleet / Workflow / Lane / Runtime product model](https://github.com/Hmbown/CodeWhale/issues/4175) | 建立了 Fleet‑Workflow‑Lane‑Runtime 四层概念的官方追踪器，防止概念混淆，为后续文档与实现提供指导。 | 开放，9 条评论，主要是对命名与职责划分的澄清。 |
| #4095 | [UX: default TUI presentation is too busy; compact mode should be standard](https://github.com/Hmbown/CodeWhale/issues/4095) | 指出默认 TUI 信息过载，影响使用体验；提出将紧凑模式设为默认，直接关系到日常开发效率。 | 已闭合，9 条评论，社区普遍赞同，已在后续 PR 中实现紧凑视图。 |
| #4038 | [Workflow: product‑readiness tracker](https://github.com/Hmbown/CodeWhale/issues/4038) | 汇总了 v0.8.68 工作流产品化所需的工具、TUI 路径、资源故事等，是检查工作流成熟度的清单。 | 已闭合，7 条评论，多数项已在后续 PR 中完成。 |
| #4333 | [Configured picker treats empty provider headers as configured](https://github.com/Hmbown/CodeWhale/issues/4333) | 当 provider 配置为空表时，TUI 仍会把它视为已配置，导致模型路由失误。 | 开放，0 条评论，但属于 release‑blocker，已在 #4332 PR 中修复。 |
| #4334 | [Preserve exact custom provider identity across session restore](https://github.com/Hmbown/CodeWhale/issues/4334) | 自定义提供商（如 `lm-studio`）在会话恢复后会退化为 generic `custom`，影响后续模型解析。 | 开放，0 条评论，待后续 PR 处理。 |
| #4335 | [Make offline scorecard pricing provider‑aware](https://github.com/Hmbown/CodeWhale/issues/4335) | 离线计分卡目前仅依赖 model ID，未考虑 provider，导致在某些路由下计费不准。 | 开放，0 条评论，功能需求明显。 |
| #4329 | [Anthropic API error](https://github.com/Hmbown/CodeWhale/issues/4329) | 提示 `tool_use` 缺少对应的 `tool_result`，导致 Anthropic 调用失败，影响多模型调用的可靠性。 | 开放，2 条评论，亟需在工具调用链中加强校验。 |

---

## 4. 重要 PR 进展（挑选 10 条）  

| # | 标题 & 链接 | 功能或修复内容 | 影响 |
|---|-------------|----------------|------|
| #4337 | [fix(release): integrate v0.8.68 TUI and Android QA](https://github.com/Hmbown/CodeWhale/pull/4337) | 完成 v0.8.68 TUI 与 Android（Termux）载像的最终 QA 集成，确保在移动端也能通过止送检查。 | 保证跨平台一致性，为后续发布扫除障碍。 |
| #4336 | [feat(workflow): dispatch durable lanes without root model](https://github.com/Hmbown/CodeWhale/pull/4336) | 使 `codewhale workflow run` 能直接通过宿主拥有的 Workflow 工具调度 lane，免除根模型回合，保持所有运行时上下文（profile、sandbox、MCP 等）。 | 大幅提升工作流自动化能力，是 fleet‑lane 模型的关键实现。 |
| #4332 | [fix: make v0.8.68 TUI state and routing truthful](https://github.com/Hmbown/CodeWhale/pull/4332) | 只将真正有意义的 Provider 配置视为“已配置”；空表、损坏的 auth 不再误导 TUI 的 Model·configured 视图。 | 直接修复 #4333，提升 Provider 路由的可靠性。 |
| #4331 | [docs(release): align v0.8.68 mode FAQ and workflow commands](https://github.com/Hmbown/CodeWhale/pull/4331) | FAQ 与中英文文档统一到新的 Plan/Act/Operate 模式；把过时的 `workflow status/logs` 示例换为真实的 `lane status/logs`，并补上必需的 `--fleet` 参数。 | 减少用户困惑，提升文档准确度。 |
| #4330 | [fix: update cargo-deny advisory ignore list](https://github.com/Hmbown/CodeWhale/pull/4330) | 更新安全忽略列表：移除已修复的 RUSTSEC‑2026‑0187，加入两个新的传递性漏洞忽略。 | 保持供应链安全审计的干净状态。 |
| #4328 | [fix: upgrade dependencies to resolve cargo-audit vulnerabilities](https://github.com/Hmbown/CodeWhale/pull/4328) | 升级跨beam、lopdf、pdf‑extract、ttf‑parser 等依赖，修复多个 RUSTSEC 漏洞（如指针解引用、栈溢出）。 | 消除已知安全风险，提升构建可信度。 |
| #4272 | [ci: add RustSec security audit and cargo-deny checks](https://github.com/Hmbown/CodeWhale/pull/4272) | 在 CI 中新增 `cargo-audit`（扫描已知漏洞）和 `cargo-deny`（许可证、禁止依赖等）作业。 | 将安全检前移，防止问题进入主分支。 |
| #4343 | [chore(deps): bump colored from 3.0.0 to 3.1.1](https://github.com/Hmbown/CodeWhale/pull/4343) | 更新终端着色库，获得新的着色 API 与错误修复。 | 轻量级依赖升级，保持 UI 颜色一致。 |
| #4342 | [chore(deps): bump rmcp from 1.8.0 to 2.2.0](https://github.com/Hmbown/CodeWhale/pull/4342) | 更新 Model Context Protocol Rust SDK，带来新宏与更好的上下文传播。 | 为后续插件/工具扩展奠定基础。 |
| #4341 | [chore(deps): bump lru from 0.18.0 to 0.18.1](https://github.com/Hmbown/CodeWhale/pull/4341) | LRU 缓存库的微小补丁，修复潜在的越界读取。 | 增强缓存可靠性，间接提升 TUI 响应稳定性。 |

---

## 5. 功能需求趋势  
从最近的 Issue 与 PR 中可以归纳出以下社区关注的方向：  

| 趋势 | 体现的 Issue/PR | 说明 |
|------|----------------|------|
| **工作流编排与 Lane 模型** | #4092、#4178、#4175、#4336 | 社区希望拥有清晰、可查询的 lane 顺序、依赖解析以及能够在无根模型情况下调度持久 lane 的能力。 |
| **TUI 体验简洁化** | #4095（已闭合）、#4332、#4331 | 默认视图太繁、需要紧凑模式、以及确保 Provider 配置状态真实可靠。 |
| **多模型/Provider 鲁棒性** | #4333、#4334、#4335、#4329、#4032 | 需要正确区分空配置、保留自定义 provider 身份、使离线计分卡感知 provider、以及严格检查 tool_use/tool_result 配对。 |
| **安全与供应链** | #4328、#4327（不存在但暗示）、#4272、#4330 | 通过依赖升级、 cargo-audit / cargo-deny CI 检查来防范已知漏洞。 |
| **会话与历史记录** | #2934（侧边栏会话面板） | 用户希望持久化的会话列表与自动恢复，以减少手动切换成本。 |
| **权限与执行策略** | #3211（首先生 permission profiles） | 社区倾向于细粒度的权限配置和非阻塞默认执行，以避免不必要的 shell 交互。 |

---

## 6. 开发者关注点（痛点 & 高频需求）  

1. **Provider 配置误判** – 空表或损坏的 auth 被错误视为已配置（#4333），导致模型路由失效；开发者期望更严格的“有效配置”校验。  
2. **自定义提供商身份丢失** – 会话恢复后自定义 provider 变为 generic `custom`（#4334），影响后续模型解析和计费。  
3. **离线计费不随 provider 变化** – 当前离线记分卡只看 model ID，导致在某些路由下成本计算不准（#4335）。  
4. **工具调用链完整性** – Anthropic 调用因缺少 `tool_result` 而报错（#4329），说明工具执行后的状态同步仍有漏洞。  
5. **TUI 信息过载** – 默认界面展示过多底层活动，使用感受混乱；社区强烈

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*