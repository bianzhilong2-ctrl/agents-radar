# AI CLI 工具社区动态日报 2026-07-20

> 生成时间: 2026-07-20 03:19 UTC | 覆盖工具: 9 个

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

**AI 开发工具生态横向快照（2026‑07‑20）**  

| 维度 | 说明 |
|------|------|
| **目标读者** | 技术决策者、平台架构师、生态圈参与者 |
| **内容结构** | ① 生态全景 ② 活跃度对比 ③ 共同关注功能方向 ④ 差异化定位 ⑤ 社区热度与成熟度 ⑥ 趋势信号 | 

---

## 1. 生态全景  
AI‑CLI 生态正从“单一模型、单一工具”向“多模型、全链路自动化”演进。  
- **跨平台 UI/TUI 体验**：macOS/Windows 性能、跨平台冷启动成为主流痛点。  
- **IDE 与工作区集成**：VS Code、Visual Studio、Remote‑SSH 方案频繁被提及。  
- **子代理（Sub‑Agent）可靠性**：多工具链、工具调用的隔离与重放成为核心关注。  
- **多模型与多语义化工具**：Gemini‑CLI、Qwen‑Code、OpenCode 等同步实现多厂商模型、MCP、工具盒子。  

> 综上，AI‑CLI 生态正迈向“从命令行到 IDE 的全程协同”，同时将性能、权限与安全摆在同等高度。

---

## 2. 各工具活跃度对比

| 工具 | 近 24 h 内打开 Issue 数 | 融合 PR 数 | 最近 Release  | 备注 |
|------|-----------------------|----------- Motorrad | ------------- |------|
| **Claude Code** | 0 (无公开 Issue) | 0 | 无 | 关注安全合规，功能推进尚处于早期 |
| **OpenAI Codex** | 10 (热门 Issues ①‑⑩) | 10 | 无 | 积极调优 TUI & IDE，尚未发布新版本 |
| **Gem longitud** CLI** | 10 (热门 Issues ①‑④ ) | 10 | v0.52.0‑nightly (`20260720`) | “夜间版”推送，功能、依赖同步全线 |
| **OpenCode** | 10 | 10 | 无 | 关注内存、工具流、IDE 连接 |
| **Qwen Code** | 10 | 10 | 无 | 重点冷启动、SSE 泄漏、子‑agent 可可观测ীগ |
| **DeepSeek‑TUI** | 10 | 10 | 无 | UI/UX 迭代、子‑代理成本、权限细粒度 |
| **Pi** | 10 (alerted) | 7 | 无 | 关注长会话内存、模型异常 |

> **活跃度同等**：在过去 24 h 内，OpenAI Codex、Gemini CLI、Qwen Code、OpenCode 与 DeepSeek TUI 均有 10‑10 场景。PCI 仅偏低，Claude Code 与 Pi  stór 覆盖较少。

---

## 3. 共同关注的功能方向  

| 关注点 | 所涉及工具 | 典型诉求 | 解决进展 |
|---------|-----------|----------|----------|
| **IDE 安装/会话管理** | Codex、Gemini、OpenCode、Qwen | VS Code 侧边栏卡顿、工作区级别会话隔离 | Codex 进行 TUI 重新渲染；Gemini 加强 OAuth 重试；OpenCode (goal 采用 `workspace.sh`） |
| **性能瓶颈** | Codex、Gemini、OpenCode、Qwen | CPU 高占用、内存泄漏、HID 设备阻塞 | Codex 往日常 PR `"Optimize TUI"`；Qwen 收到 `cold-start` 修复 PR #4748 |
| **子代理与工具流** | Codex、Gemini、Qwen、DeepSeek | 子代理在互相调用、工具无返回导致块报错、权限 cetnav | Gemini 解决 `Subagent MAX_TURNS`；Qwen 交付 `taskabort` 逻辑 |
| **计划/模式退出** | Codex、Gemini、Qwen、DeepSeek | Plan‑mode 内容泄漏、Exit‑mode 失效 | Qwen PR 이날 `Plan mode clean exit`).</p>

> 这几个痛点成为多工具共振的“痛节点 наказ”。

---

## 4. 差异化定位分析  

| 工具 | 主要定位 | 核心技术/路线 | 目标用户 |
|------|-----------|-----------------|-----------|
| **Claude Code** | 审核/合规先行 |  Anthropic 工具链 + policy sandbox | 高安全敏感的企业 + 法规受限团队 |
| **OpenAI Codex** | 传统 LLM + TUI | Electron + Rust 高性能渲染 | 开发者、VS Code 生态核心用户 |
| **Gemini CLI** | 多模型多方云混合 | Node/TS + gRPC SDK | 大模型实验室 / 提成云服务 |
| **OpenCode** | 开源可定制 | Rust + SQLite + websockets | 开源社群、教育机构 |
| **Qwen Code** | 高效部署 + 方案 | Go＋Native daemon + concurrent ACP | 大模型部署、服务化运营 |
| **DeepSeek‑TUI** | UI/UX + 权限 | Rust + TUI 主框架 | 本地 CLI 体验用户、重视本地交互 |
| **Pi** | 单机高性能 + 轻量 | C++ + Evented I/O | 轻量 IoT、边缘设备 |

> 这些差异表明：**Claude** 侧重安全合规，**Code** 与 **OpenCode** 致力于可视化交互，而 **Gemini** 与 **Qwen** 则关注多模型联邦与部署效率，**DeepSeek** 在 UI 迭代与细粒度权限上做文章。

---

## 5. 社区热度与成熟度  

| 位置 | 评估指标 | 发现 |
|------|-----------|------|
| **高活跃 + 快速迭代** | Issue/PR: 10/10，Nightly 发布 | *Gemini CLI、Qwen Code、DeepSeek‑TUI* |
| **稳健但暂未发布** | Issue/PR: 10/10，暂无新 Release | *OpenAI Codex*（TUI、IDE 迭代） |
| **快速成长** | Issue/PR: 0/0，低量但高安全关注 | *Claude Code*、*Pi* |
| **中低活跃** | Issue/PR: 0,k | None |

> 对比 બત: Gemini 以 **nightly** 维持迭代节奏； Qwen 通过 **daemon 迭代** 解决 freeze； DeepSeek  införens **UI bug fix** 序列； Codex 关注 TUI 与跨平台兼容但**缺乏新版本**，说明安全、稳定性仍被优先。  

---

## 6. 值得关注的趋势信号  

1. **子代理与工具链自动化**  
   多个工具均报告子‑代理在工具调用、状态传播上的失效，提示未来平台需求：**统一子‑代理管理协议** 与 **工具沙盒化**。  

2. **多模型 & 多方云融合**  
   Gemini、Qwen 明确标注多模型支持与降低 token 成本；OpenCode 则强调开源硬件。  

3. **安全与权限细粒度**  
   「Full Access 误判」、「权限泄漏」等问题屡现，促使平台向 **细粒度权限审计** 与 **日志脱敏** 阶段迈进。  

4. **IDE 与编程体验**  
   VS Code 标签

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止 2026-07-20*

## 1. 热门 Skills 排行

### 1. **document-typography** (#514)
- **功能**：文档排版质量控制，解决 orphan words、widow paragraphs 和编号对齐问题
- **讨论热点**：针对 AI 生成文档的通用排版问题，社区反馈对生产力提升显著
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/514

### 2. **testing-patterns** (#723)
- **功能**：全栈测试模式覆盖，包括单元测试、React 组件测试等
- **讨论热点**：开发者社区对自动化测试支持的强烈需求
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/723

### 3. **color-expert** (#1302)
- **功能**：颜色专家 Skill，覆盖颜色命名系统和色彩空间选择
- **讨论热点**：设计类人工智能工具的专业化需求
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/1302

### 4. **pyxel** (#525)
- **功能**：Pyxel 复古游戏引擎支持，用于 8 位 pixel art 游戏开发
- **讨论热点**：游戏开发者社区的兴趣点
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/525

### 5. **odt** (#486)
- **功能**：OpenDocument 格式文档创建、模板填充和 ODT 转 HTML
- **讨论热点**：开源办公软件用户群体的需求
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/486

## 2. 社区需求趋势

从 Issues 中提炼的核心需求方向：

1. **组织级技能共享**：Issue #228 呼吁在 Claude.ai 中实现组织范围的技能共享，避免手动上传流程
2. **安全与信任**：Issue #492 聚焦社区技能命名空间安全风险，社区对信任边界的关注
3. **Windows 兼容性**：多个 Issue（#556, #1061）反馈 Windows 环境下 skill-creator 工具链崩溃问题
4. **Agent 治理**：Issue #412 提出 Agent Governance Skill，用于 AI 代理系统的安全治理
5. **MCP 集成**：Issue #16 建议将 Skills 以 MCP 协议形式暴露，提升可集成性

## 3. 高潜力待合并 Skills

### 1. **self-audit** (#1367)
- **作者**：YuhaoLin2005
- **亮点**：完整的自审流程，包含机械文件验证和四维推理质量检测
- **讨论**：近期活跃讨论，已更新至 v1.3.0
- **链接**：https://github.com/anthropics/skills/pull/1367

### 2. **skill-quality-analyzer** (#83)
- **作者**：eovidiu
- **亮点**：系统性评估 Claude Skills 质量的元工具，覆盖结构、文档、功能等维度
- **讨论**：社区对 Skill 质量控制的核心需求
- **链接**：https://github.com/anthropics/skills/pull/83

### 3. **CONTRIBUTING.md** (#509)
- **作者**：narenkatakam
- **亮点**：解决社区健康度仅 25% 的问题，引导社区贡献
- **讨论**：已合并但值得关注的社区治理措施
- **链接**：https://github.com/anthropics/skills/pull/509

## 4. Skills 生态洞察

当前社区在 Skills 层面最集中的诉求是：**构建更安全、更易用的企业级 AI 代理治理框架，同时解决跨平台开发体验问题**。

---

User Safety: safe

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>


# **OpenAI Codex 社区动态日报 - 2026-07-20**

---

## **1. 今日速览**
- **Codex Desktop 性能问题持续成为社区关注核心**：macOS 和 Windows 用户报告了多起 UI 冻结、CPU 高负载及 HID 设备枚举阻塞等问题，凸显跨平台稳定性挑战。
- **TUI 优化工作密集进行中**：团队在过去 24 小时内合并了多项 Pull Request，专注于减少渲染开销、提升滚动体验及内存管理效率。
- **IDE 集成与会话隔离成为热门需求**：开发者呼声高涨，希望 VS Code 扩展支持以编辑器标签页展示会话、实现工作区级别的上下文隔离。

---

## **2. 版本发布**
- **无新版本发布**。过去 24 小时内未发布新版本。

---

## **3. 社区热点 Issues（Top 10）**

| Issue | 类型 | 平台 | 点赞数 | 评论数 | 核心问题 |
|-------|------|------|--------|--------|----------|
| [#25719](https://github.com/openai/codex/issues/25719) | Bug | macOS | 261 | 67 | macOS 版本 Codex Desktop 触发 `syspolicyd`/`trustd` CPU 和内存暴涨问题 |
| [#20214](https://github.com/openai/codex/issues/20214) | Bug | Windows | 68 | 55 | Windows 11 Pro 版本频繁冻结/卡顿，尽管系统资源充足 |
| [#8197](https://github.com/openai/codex/issues/8197) | Bug | VS Code Extension | 18 | 51 | VS Code 扩展长时间运行后侧边栏变灰 |
| [#33375](https://github.com/openai/codex/issues/33375) | Bug | Windows | 30 | 46 | Windows 版 Codex App 因 `serialport.node` 加载失败导致严重 UI 延迟 |
| [#29532](https://github.com/openai/codex/issues/29532) | Bug | macOS | 8 | 43 | macOS 上 SQLite TRACE 日志持续写入，升级至 `rust-v0.142.0` 后问题部分缓解但未完全解决 |
| [#33780](https://github.com/openai/codex/issues/33780) | Bug | Windows | 8 | 39 | Windows App 启动时因 HID 设备枚举阻塞主进程导致挂起 |
| [#33884](https://github.com/openai/codex/issues/33884) | Bug | Windows | 0 | 15 | Windows 版 Codex 进入 ~15 秒无响应周期循环 |
| [#33912](https://github.com/openai/codex/issues/33912) | Bug | Windows | 0 | 9 | HID 设备扫描阻塞 Electron 主线程，导致应用冻结 |
| [#25990](https://github.com/openai/codex/issues/25990) | Bug | Desktop | 2 | 4 | 恢复旧版 Desktop 会话时可能缺失新工具，仍运行旧版子代理 |
| [#33776](https://github.com/openai/codex/issues/33776) | Bug | Windows | 9 | 10 | Windows Desktop 启动大量 `taskkill.exe/conhost.exe` 进程，引发 WMI 风暴与桌面窗口管理器 (DWM) 性能下降 |

### 社区反应分析：
- **#25719** 和 **#20214** 是当前最热门的问题，主要集中在 macOS 和 Windows 平台的性能表现，反映了桌面端应用在不同操作系统上的稳定性问题。
- **#8197** 虽已关闭，但其历史评论数量表明 VS Code 扩展在长时间运行下的可靠性仍是用户关心的点。
- HID 相关问题（如 #33780, #33912）表明硬件兼容是 Windows 版本需解决的技术难题。

---

## **4. 重要 PR 进展（Top 10）**

| PR | 状态 | 作者 | 摘要 |
|----|------|------|------|
| [#34234](https://github.com/openai/codex/pull/34234) | CLOSED | copyberry[bot] | 避免 TUI 对子代理元数据发出冗余请求，提升性能 |
| [#34232](https://github.com/openai/codex/pull/34232) | CLOSED | copyberry[bot] | 动态单元格重测逻辑优化，解决历史记录显示裁剪问题 |
| [#34229](https://github.com/openai/codex/pull/34229) | CLOSED | copyberry[bot] | 为分页线程添加持久化名称字段，提升识别度 |
| [#34226](https://github.com/openai/codex/pull/34226) | CLOSED | copyberry[bot] | 仅对活跃执行回合补充完成项，减少不必要的 API 请求 |
| [#34224](https://github.com/openai/codex/pull/34224) | CLOSED | copyberry[bot] | 优化 TUI diff 渲染，避免重复克隆文件变更数据 |
| [#34223](https://github.com/openai/codex/pull/34223) | CLOSED | copyberry[bot] | 缓存最终 Markdown 渲染结果，提高历史记录加载效率 |
| [#34222](https://github.com/openai/codex/pull/34222) | CLOSED | copyberry[bot] | 避免缓存不必要的线程通知，降低内存消耗 |
| [#34218](https://github.com/openai/codex/pull/34218) | CLOSED | copyberry[bot] | 将命令完成状态与输出分离，修复流式命令中断处理逻辑 |
| [#34217](https://github.com/openai/codex/pull/34217) | CLOSED | copyberry[bot] | 增量渲染保留可视化上下文，防止全量重新渲染 |
| [#34216](https://github.com/openai/codex/pull/34216) | CLOSED | copyberry[bot] | 加速 TUI Markdown 布局计算，优化文本格式化性能 |

### 总结：
- 本次 PR 集中于 **TUI 性能优化**、**内存管理** 和 **渲染效率** 提升，反映团队正积极响应用户性能反馈。
- 此外，还有关于 MCP 图像缓存 (#34206) 和 Git 超时进程组 (#30235) 的修复，显示底层系统层面的持续打磨。

---

## **5. 功能需求趋势**

### 核心趋势：
1. **IDE 集成深化**  
   - 希望 VS Code 扩展支持将 Codex 会话以编辑器标签页形式展示（[#20951](https://github.com/openai/codex/issues/20951)）。
   - 远程开发环境支持（VS Code Remote-SSH）[#27597](https://github.com/openai/codex/issues/27597)。

2. **性能优化**  
   - 跨平台 UI 卡顿、CPU 占用、内存泄漏、HID 设备枚举阻塞成为高频问题。

3. **会话隔离与上下文控制**  
   - 希望 Codex 聊天能限定在当前工作区/项目范围内（[#25319](https://github.com/openai/codex/issues/25319)）。

4. **新模型与工具支持**  
   - 用户希望支持工具型 MCP 服务器（[#14242](https://github.com/openai/codex/issues/14242)），以及更灵活的子代理机制。

---

## **6. 开发者关注点**

- **跨平台性能问题**：Windows 和 macOS 均有较多报告，尤其是与系统服务（如 `syspolicyd`, `WMI`, `DWM`）交互导致的问题。
- **IDE 扩展体验不佳**：长时间运行后侧边栏失效、Remote SSH 环境下加载失败，影响开发者生产力。
- **工具调用与沙箱隔离**：Windows 沙箱下 `apply_patch` 失败、远程桌面会话显示异常，是开发者遇到的实际障碍。
- **会话恢复与工具同步**：恢复旧会话时工具链不同步、子代理行为不稳定，影响任务连续性。

--- 

*本报告由 GitHub 数据自动总结，仅供参考。如需更多详情，请访问 [openai/codex](https://github.com/openai/codex)*


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报（2026‑07‑20）**  

---

### 今日速览
- 今日发布了夜间版本 **v0.52.0-nightly.20260720.gacae7124b**，主要是依赖升级与内部版本号 bump。  
- 社区活跃度集中在 **账号额度异常、子代理恢复误报成功、OAuth 鉴权问题** 三大热点 Issue 上，讨论度最高且点赞数也较多。  
- 除了依赖自动更新外，仍有少数功能/修复 PR 被合并，涉及 VS Code 插件激活、Windows PowerShell 使用说明以及 OAuth token 交换的底层实现改进。

---

### 版本发布
| 版本 | 发布时间 | 更新说明 | 链接 |
|------|----------|----------|------|
| v0.52.0-nightly.20260720.gacae7124b | 2026‑07‑20 | 自动版本号 bump；依赖升级（见下方 PR 列表） | https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260720.gacae7124b |

---

### 社区热点 Issues（按评论数排序，选取 10 条最受关注）

| # | 标题 | 评论 / 👍 | 为什么重要 | 社区反应 |
|---|------|-----------|------------|----------|
| [#22493](https://github.com/google-gemini/gemini-cli/issues/22493) | 账号在未使用情况下达到限制（疑似 bug 或政策变更） | 12 / 9 | 涉及配额误报，直接影响付费用户的使用体验，可能隐藏计费或安全问题。 | 讨论活跃，多数用户确认类似情况，要求提供审计日志或退款说明。 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在达到 MAX_TURNS 后仍报告 GOAL 成功，掩盖中断 | 11 / 2 | 误导代理成功状态，导致后续任务基于错误假设执行，严重影响可靠性。 | 开发者指出这是回归，建议加强状态传播测试。 |
| [#19997](https://github.com/google-gemini/gemini-cli/issues/19997) | Proxy URL 中的 API Key 未在遥测中脱敏，泄露风险 | 10 / 0 | 涉及安全合规，可能导致凭证意外暴露。 | 安全关注者强烈要求尽快补丁，有人提供了临时绕过方案。 |
| [#20005](https://github.com/google-gemini/gemini-cli/issues/20005) | 不受信任工作区 silencely 省略 .env，导致误导性鉴权错误 | 9 / 0 | 新手常见困惑，环境变量未被加载却不报错，调试成本高。 | 社区建议增加明确错误提示或自动信任机制。 |
| [#20767](https://github.com/google-gemini/gemini-cli/issues/20767) | 已通过但被标记为 `skip` 的测试应被启用 | 9 / 0 | 测试覆盖不完整，可能隐藏回归。 | 负责人表示已计划在下次 sprint 中移除 skip 标记。 |
| [#22241](https://github.com/google-gemini/gemini-cli/issues/22241) | Google One AI Ultra 订阅下的所有 API 调用无响应（挂起） | 7 / 1 | 付费高端到端服务不可用，影响企业级客户。 | 有用户提供了复现步骤，怀疑 OAuth token 刷新机制失效。 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级评估（行为评测）需求 Epic | 7 / 0 | 为未来可观测性和质量保障奠基。 | 讨论集中在如何定义有效的行为评测指标。 |
| [#20857](https://github.com/google-gemini/gemini-cli/issues/20857) | Gemini 3.0/3.1 模型无响应 | 7 / 1 | 模型调用失效直接导致 CLI 停止工作。 | 用户怀疑是版本不兼容或后端配置变更。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST‑感知文件读取/搜索/映射的影响 | 7 / 1 | 潜在的性能与 token 使用优化方向。 | 社区对 AST 动议兴趣浓厚，期望后续原型。 |
| [#20929](https://github.com/google-gemini/gemini-cli/issues/20929) | Windows：Shift+Tab 在 PowerShell/CMD 中无法切换批准模式 | 6 / 0 | 平台特定交互 bug，影响日常使用流畅度。 | 有开发者提供了临时键位映射 workaround。 |

---

### 重要 PR 进展（选取 10 条具备功能或修复价值的 PR）

| PR | 标题 | 类型 | 主要内容 | 链接 |
|----|------|------|----------|------|
| [#28386](https://github.com/google-gemini/gemini-cli/pull/28386) | fix(vscode): track activation disposables | Bugfix | 修复 VS Code 伴侣插件激活时的 disposable 跟踪遗漏，防止资源泄漏。 | https://github.com/google-gemini/gemini-cli/pull/28386 |
| [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) | fix(auth): use native fetch for OAuth token exchange to avoid "Premature close" | Bugfix | 在某些头less VPS 上使用原生 `fetch` 替换旧库，解决 OAuth token 交换提前关闭问题。 | https://github.com/google-gemini/gemini-cli/pull/28446 |
| [#28447](https://github.com/google-gemini/gemini-cli/pull/28447) | docs(get-started): add Windows PowerShell troubleshooting for gemini command | Documentation | 为 Windows PowerShell 用户提供 `gemini` 命令失效的排查步骤。 | https://github.com/google-gemini/gemini-cli/pull/28447 |
| [#28465](https://github.com/google-gemini/gemini-cli/pull/28465) | chore/release: bump version to 0.52.0-nightly.20260720.gacae7124b | Chore | 自动版本号 bump，为夜间发布做准备。 | https://github.com/google-gemini/gemini-cli/pull/28465 |
| [#28459](https://github.com/google-gemini/gemini-cli/pull/28459) | chore(deps): bump @google/genai from 1.30.0 to 2.11.0 | Dependency | 更新官方 Google Genai JS SDK，获取最新模型支持与错误修复。 | https://github.com/google-gemini/gemini-cli/pull/28459 |
| [#28457](https://github.com/google-gemini/gemini-cli/pull/28457) | chore(deps): bump marked from 15.0.12 to 18.0.6 | Dependency | Markdown 解析库升级，修复若干安全警告。 | https://github.com/google-gemini/gemini-cli/pull/28457 |
| [#28462](https://github.com/google-gemini/gemini-cli/pull/28462) | chore(deps-dev): bump eslint from 9.24.0 to 10.7.0 | Dependency | ESLint 大版本升级，引入新规则与性能改进。 | https://github.com/google-gemini/gemini-cli/pull/28462 |
| [#28460](https://github.com/google-gemini/gemini-cli/pull/28460) | chore(deps-dev): bump @vitest/coverage-v8 from 3.2.4 to 4.1.10 | Dependency | 测试覆盖工具升级，提供更精准的覆盖率报告。 | https://github.com/google-gemini/gemini-cli/pull/28460 |
| [#28458](https://github.com/google-gemini/gemini-cli/pull/28458) | chore(deps): bump vitest from 3.1.1 to 4.1.10 | Dependency | 主测试框架升级，修复多个断言失效问题。 | https://github.com/google-gemini/gemini-cli/pull/28458 |
| [#28453](https://github.com/google-gemini/gemini-cli/pull/28453) | chore(deps): bump actions/setup-node from 4.4.0 to 7.0.0 | Dependency | GitHub Actions 的 Node.js 安装 action 升级，支持更新的 Node 版本。 | https://github.com/google-gemini/gemini-cli/pull/28453 |

> 其余 PR 大多为依赖自动更新（Dependabot），未列出以避免冗余。

---

### 功能需求趋势（从所有 Issues 中提炼）

| 趋势 | 体现的 Issue 示例 | 需求说明 |
|------|------------------|----------|
| **身份验证与凭证安全** | #19997（API Key 未脱敏）、#20005（.env 静默忽略）、#22241（OAuth 挂起）、#28446（原生 fetch 修复） | 用户希望鉴权过程更透明、出错时给出明确提示，以及凭证在日志/遥测中自动脱敏。 |
| **子代理/自动任务可靠性** | #22323（MAX_TURNS 错误报告）、#21052（交互式终端挂起）、#20739（完成后仍请求 cat） | 期望子代理在达到限制或完成任务时能准确上报状态，避免误导后续流程。 |
| **内存与上下文管理** | #20767（测试 skip）、#19590（上下文压缩导致 OOM）、#26522/#26523/#26525（Auto Memory 处理） | 上下文压缩、记忆回放和自动记忆功能需要更稳健的错误处理和可配置的策略。 |
| **跨平台交互体验** | #20929（Windows Shift+Tab 失效）、#20857（模型无响应）、#2015（MCP 未提供指令时拒绝连接） | 特别是 Windows 终端的快捷键、跨平台 shell 集成以及对第三方 MCP 的宽松兼容性需求增加。 |
| **工具与 Token 限制** | #24246（>128 工具触发 400）、#22745（AST 感知工具评估） | 用户希望在工具数量大时能自动分片或优化 tool selection，以避免 API 限制。 |
| **文档与上手指南** | #28447（Windows PowerShell 排查）、#27304（Antigravity CLI 开源疑问） | 新用户对安装、环境配置及后续产品路线图（如 Antigravity CLI）的说明需求明显上升。 |

---

### 开发者关注点（痛点与高频需求）

1. **鉴权失败难以定位**  
   - OAuth token 交换在特殊网络环境下提前关闭（#228446 已修复），但仍有用户报告 Google One AI Ultra 下的持续挂起（#22241）。  
   - 需要更完整的日志与重试机制，以及在控制台给出明确的错误码和可能的解决方案。

2. **配额与计费透明度不足**  
   - 大量用户反馈账号在未使用情况下触发限额（#22493），怀疑后端计费策略或内部计数器 bug。  
   - 建议提供实时配额仪表盘或使用量导出功能，以便用户自行核对。

3. **子代理状态报告不准确**  
   - 当达到最大轮数时，子代理仍标记为成功（#22323），导致任务流程误判。  
   - 社

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## 2026-07-20 GitHub Copilot CLI 社区动态日报
*简洁专业，为开发者站立提供全貌*

---

### 1. 今日速览
- **语音模式批量转录失败**和**新 GPT‑5.6 模型导致的 plan‑mode 退出不稳定**是当前最受关注的技术故障。
- 桌面 TUI 在窗口事件处理方面出现两起严重问题：**键盘输入被忽略**和**无法点击编辑已排队消息**，影响了脚本化工作流。
- **`--add‑dir` 导致子 Agent 失败（缓存限制）**和 **plan‑mode 恢复问题**曝光了与上下文管理相关的核心瓶颈。

这些问题被大量讨论（>20 个评论）且涉及语音、计划任务、自动化脚本和跨平台体验，直接影响生产力工具链。

---

### 2. 版本发布
*暂无新版本发布。*

---

### 3. 社区热点 Issues（共 10 条）

| # | 问题 | 为什么重要 | 社区反馈 |
|---|------|----------------|-------------------|
| **#4024** | **[area:models] 语音模式：所有内置 ASR 模型转录结果均为空——MultiModalProcessor 路由 bug（nemotron_speech RNNT）**<br>[github/copilot-cli Issue #4024](github/copilot-cli Issue #4024) | 语音功能对用户来说关键；所有三个语音模型均显示麦克风电平正常但返回空文本，表明 Foundry Core 本地语音服务存在严重缺陷。 | **13 条评论**，无 👍，表明用户尝试排障。 |
| **#1857** | **[area:input-keyboard] 允许用户取消或移除已入队消息**<br>[github/copilot-cli Issue #1857](github/copilot-cli Issue #1857) | 控制已入队 `/compact` 或 `Ctrl+Q` 消息的回滚能力对于避免堆栈阻塞至关重要。 | **8 条评论**，**24 👍**，反映出对该功能的强烈需求。 |
| **#4188** | **[triage] plan‑mode 回归：正在阻塞 shell 命令**<br>[github/copilot-cli Issue #4188](github/copilot-cli Issue #4188) | 计划模式本应提供的辅助 CLI 功能（如 `gh`）被静默阻塞，破坏了 GitHub 上的典型协作工作流。 | **0 条评论**，无 👍（新漏洞）。 |
| **#4180** | **[triage] 交互式 TUI 忽略通过 PTY 写入的所有键盘输入**<br>[github/copilot-cli Issue #4180](github/copilot-cli Issue #4180) | CI/自动化工具（tmux、expect 等）无法向 Copliot-TUI 发送 `/`、Tab、箭头键等，导致机器人脚本和终端编排工具完全失效。 | **0 条评论**，无 👍（严重影响自动化功能）。 |
| **#4185** | **[triage] `--add-dir` 导致 Claude 子 Agent 失败：`"A maximum of 4 blocks with cache_control … Found 5"`**<br>[github/copilot-cli Issue #4185](github/copilot-cli Issue #4185) | 通过文件路径传递上下文在调试时会超过 Anthropic 的缓存限制，导致子 Agent 请求当机。 | **0 条评论**，无 👍（阻止了 `add‑dir` 的使用）。 |
| **#4184** | **[triage] 复制当前项目路径时复制了错误的空格宽度**<br>[github/copilot-cli Issue #4184](github/copilot-cli Issue #4184) | UI 层面的细致 bug，直接导致工具不可用；可能影响跨粘贴命令。 | **0 条评论**，无 👍。 |
| **#4173** | **[area:permissions, area:agents] 子任务保留了计划模式写入权限**<br>[github/copilot-cli Issue #4173](github/copilot-cli Issue #4173) | 会话退出后，长时间活跃的后台写入任务错误地保留了过时的写权限，导致重试预算耗尽和停滞。 | **0 条评论**，无 👍（风险：僵尸权限）。 |
| **#4135** | **[area:permissions, area:terminal-rendering] `ask` 决策钩子显示的是原始 JSON 而非差分视图**<br>[github/copilot-cli Issue #4135](github/copilot-cli Issue #4135) | 当 `ask` 权限来自 `PreToolUse` 钩子时，用户无法看到用户友好的文件差异视图，从而破坏了权限控制的可读性。 | **0 条评论**，无 👍。 |
| **#4172** | **[area:models] 使用新的 GPT‑5.6 模型时退出计划模式不可靠**<br>[github/copilot-cli Issue #4172](github/copilot-cli Issue #4172) | 与 GPT‑5.6 相关的计划模式在接收到保存确认后永久停止，导致用户期望的“继续”提示消失。 | **1 条评论**，无 👍（模型支持回归）。 |
| **#4179** | **[triage] 能够点击已入队条目对其进行编辑**<br>[github/copilot-cli Issue #4179](github/copilot-cli Issue #4179) | 目前无法用鼠标选择并修改已入队消息，这不利于快速校正；TUI 已经支持大部分鼠标操作。 | **1 条评论**，无 👍。 |

---

### 4. 重要 PR 进展
*过去 24 小时内暂无新合并的 Pull Request。*

---

### 5. 功能需求趋势
从用户报告中可以归纳出五个主要技术关注点：

| 趋势 | 涉及 Issue | 社区隐含需求 |
|-------|----------------|------------------------------|
| **语音与自动语音识别支持** | #4024 | 需要修复 Foundry Core 本地 ASR 管道和增加更好的语音模型元数据。 |
| **计划模式健壮性** | #4172、#4188 | 要求更可靠的计划退出逻辑和防止阻塞外部 CLI 的保护机制。 |
| **TUI/UX 增强** | #1857、#4179、#4180 | 呼声最高的功能是允许取消/编辑已入队消息、鼠标交互和文本终端自动化。 |
| **上下文管理和子 Agent 扩展** | #4185、#4183、#4174 | 提升上下文处理能力（缓存限制、自动压缩上限、ACP 服务器使用情况指标）。 |
| **平台特定优化** | #4176（Windows）、#4184（路径复制） | 对桌面应用启动速度、UI 细致 bug 提出改进要求。 |

---

### 6. 开发者关注点
社区反复提到几个**高影响、使用率和工程痛点**：

| 关注点 | 概括的问题 | 影响范围 |
|--------|----------------|---------------|
| **语音引擎失败** | 所有 ASR 模型返回空结果 | 直接影响仪表板用户；可能导致工作流中断。 |
| **Plan‑mode 退出不稳定** | 指令状态保留在计划保存后，未提示用户继续操作 | 破坏了用计划跟踪工作流；特别是对于使用最新 GPT‑5.6 模型的用户。 |
| **TUI 自动交互性丢失** | 通过 PTY（自动化脚本）的键盘输入被忽略 | 使终端编排、CI 管道和 robot 脚本失效。 |
| **已入队消息不可修改/取消** | 无法回滚已通过 `Ctrl+Q`/`Ctrl+Enter` 提交的命令 | 导致用户卡在不必要的命令堆栈中。 |
| **子 Agent 上下文限制** |  `add-dir` 标志导致 `400` 错误（缓存限制） | 阻止了通过文件路径初始化上下文的功能。 |
| **桌面应用启动延迟** | Windows 计算机约需 1-2 分钟才能变得可用 | 影响了用户体验和版本发布流程。 |
| **富媒体支持不足** | `/btw` 讨论中无法直接粘贴图片 | 限制了实时协作中文件的自然交换。 |
| **权限 UI 显示不佳** | `ask` 钩子决策以 JSON 呈现 | 降低了用户对文件变化的感知 clarity。 |
| **权限状态泄漏** | 后台任务保留过时写入权限 | 可能导致意外的停滞状态和过度重试。 |

这些问题凸显了**生产环境-ready 工具所需要具备的稳健性**、**自动化友好性**和**跨平台一致性**。关注上述领域将直接提升 Copilot CLI 的企业级可靠性和用户满意度。

*欢迎社区为正在讨论的问题投稿修复方案或功能请求。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 2026-07-20 社区动态日报

---

## 1. 今日速览  
今日OpenCode社区活跃度显著提升，无新版本发布但多发问题集中，突出性能优化、跨平台兼容性和功能扩展需求。社区对长上下文处理、内存管理及IDE集成功能的反馈成为关注焦点。

---

## 2. 版本发布  
无新版本发布于2026-07-20。

---

## 3. 社区热点 Issues  
以下10个Issue体现社区痛点或核心功能需求，根据评论数、点赞和业务影响筛选：  

1. **[#4845] Prompt过长异常** (31评论，19点赞)  
   用户在Opus 4.5模型下持续遇到不可恢复的提示超限错误（209k tokens超限），影响会话连续性。  
   🔗 [Issue #4845](https://github.com/anomalyco/opencode/issues/4845)  

2. **[#27989] 功能巨大内存消耗 (30GB)**  
   1.15.3版本中持续10分钟内显存占用30G，导致程序 Défault 需终止。  
   🔗 [Issue #27989](https://github.com/anomalyco/opencode/issues/27989)  

3. **[#37841] Tool call streaming失败**  
   使用HashScale API返回空字符串的ID/name时，工具调用流失败的兼容性问题。  
   🔗 [Issue #37841](https://github.com/anomalyco/opencode/issues/37841)  

4. **[#13537] 开放WebUI连接提供** (15评论)  
   用户请求支持Open WebUI作为默认辅助应用，提升多工具协作体验。  
   🔗 [Issue #13537](https://github.com/anomalyco/opencode/issues/13537)  

5. **[#28543] 无限循环内存泄漏**  
   Claude-Opus模型下因上下文窗口限制触发自动紧凑，可控性差。  
   🔗 [Issue #28543](https://github.com/anomalyco/opencode/issues/28543)  

6. **[#28467] Plan模式写入文件**  
   计划Agent默认读-only，但仍可执行bash写入命令，破坏安全控制。  
   🔗 [Issue #28467](https://github.com/anomalyco/opencode/issues/28467)  

7. **[#16082] 模型规模提示建议** (3点赞)  
   支持技能模块根据需求自动请求中/大模型，降低用户成本。  
   🔗 [Issue #16082](https://github.com/anomalyco/opencode/issues/16082)  

8. **[#28453] 会话取消错误处理**  
   ACP模块取消会话应返回取消状态而非错误，当前逻辑混淆。  
   🔗 [Issue #28453](https://github.com/anomalyco/opencode/issues/28453)  

9. **[#28550] 工作区图标过度传播**  
   新增工作区图标影响所有其他工作区显示，需改用绑定机制。  
   🔗 [Issue #28550](https://github.com/anomalyco/opencode/issues/28550)  

10. **[#28304] GDScript LSP支持**  
    用户强烈请求支持GameLift语言服务器，拓展工程支持。  
    🔗 [Issue #28304](https://github.com/anomalyco/opencode/issues/28304)  

---

## 4. 重要PR进展  
以下10个PR解决关键问题或增强功能：  

1. **[#37842] Tool call空字符串容错**  
   修复HashScale等API返回空ID/name时的流处理，确保连续性。  
   🔗 [PR #37842](https://github.com/anomalyco/opencode/pull/37842)  

2. **[#37840] 上下文溢出兼容性增强**  
   增加更多提供者返回的上下文错误类型支持，减少崩溃风险。  
   🔗 [PR #37840](https://github.com/anomalyco/opencode/pull/37840)  

3. **[#37839] 相对路径权限校验**  
   允许用户使用相对路径进行安全的外部文件修改（经权限验证）。  
   🔗 [PR #37839](https://github.com/anomalyco/opencode/pull/37839)  

4. **[#37828] 工具通用工具包抽离**  
   拆分共享的工具方法到`@opencode-ai/util`，提升可生态。  
   🔗 [PR #37828](https://github.com/anomalyco/opencode/pull/37828)  

5. **[#37708] 推理理由详情持久化**  
   支持OpenRouter等API的推理过程分段解析组合，提升可解释性。  
   🔗 [PR #37708](https://github.com/anomalyco/opencode/pull/37708)  

6. **[#37696] 支持即时AI思考策略**  
   增加模型推理努力调整功能（如Kimiager设置）。  
   🔗 [PR #37696](https://github.com/anomalyco/opencode/pull/37696)  

7. **[#37832] 会话切换面板刷新**  
   解决旧版本环节控制卡顿的问题，改善用户体验。  
   🔗 [PR #37832](https://github.com/anomalyco/opencode/pull/37832)  

8. **[#35654] Git差异比较优化**  
   添加`--ignore-cr-at-eol`忽略Windows换行问题，修复差异标记错误。  
   🔗 [PR #35654](https://github.com/anomalyco/opencode/pull/35654)  

9. **[#37845] 上下文位置诊断增强**  
   添加位置初始化流程数据，帮助定位性能瓶颈。  
   🔗 [PR #37845](https://github.com/anomalyco/opencode/pull/37845)  

10. **[#37822] SQLite损坏数据恢复**  
    添加启动时异常文件修复逻辑，提升稳定性。  
    🔗 [PR #37822](https://github.com/anomalyco/opencode/pull/37822)  

---

## 5. 功能需求趋势  
社区关注方向集中在：  
- **多模型支持**：Kimi、Open WebUI、DeepSeek等模型集成（#13537 #28524）  
- **性能优化**：内存管理（#27989） 上下文窗口碎片化处理（#37840）  
- **IDE集成进阶**：VSCode插件（#37830） 场景化自动化（#16082）  
- **边缘容错逻辑**：网络失败恢复（#37843） 工具调用流的原子性  

---

## 6. 开发者关注点  
- **启动失败与内存泄漏**：多例中控制台崩溃或HUNG状态（如#24882 #27989）  
- **跨平台兼容性**：Windows文件路径处理（#37843） Mac/Linux异常退出  
- **插件生态需求**：LSP扩展（#28304） 响应式工作流集成  
- **安全控制漏洞**：计划Agent写入文件（#28467） 提权机制弱点  

---

以上数据涵盖GitHub活跃区域，报告可根据具体需求调整细节。


</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**2026-07-20 Pi 社区动态日报**  

---

### 1. **今日速览**  
- 社区讨论聚焦 **长时间运行会话的内存泄漏**（Issue #6841）和 **错误处理改进**（如 DeepSeek V4缺失`usage`字段导致崩溃的 #6819）。  
- Pull Request #6824新增 **Upstage Solar LLMs**模型支持，扩展大模型生态选项。  

---

### 2. **版本发布**  
未有新版本发布。当前监控版本为 v0.80.10。  

---

### 3. **社区热点 Issues**  
| Issue # | 标题 | 重要性 | 链接 |  
|--------|------|--------|------|  
| 6841 | 长时间运行会话内存泄漏 | 服务器级联调用需优化（评论1） | [链接](开发者明确指出300MB+内存占用非持续运行导致生产服务器风险） |  
| 6832 | 孤立工具结果导致400错误 | Regressed after 0.80.10，需紧急修复工作流程（#4570回归） | [链接](RooseveltAdvisors在评论中提供重现步骤） |  
| 6792 | 大文件高CPU占用（500+行） | 包含性能剖面，影响内容创作体验 | [链接](ppowo附带CPU剖面分析） |  
| 6819 | `assistant.usage`未定义导致崩溃 | DeepSeek V4流式响应兼容性隐患 | [链接](gruvin确认DeepSeek模型产出无`usage`字段） |  
| 6768 | Copilot Enterprise无并发摘要功能 | 影响专业用户使用方案授权下的经验优化 | [链接](MojangPlsFix提示421错误） |  
| 6836 | 代理核心异步事件预览性需求 | 改进事件路由灵活性 | [链接](joohw要向外界暴露retry状态） |  
| 5593 | 斜杠命令补全添加额外空格 | 通用交互问题导致功能失效 | [链接](andrea-tomassi描述蹩脏行为） |  
| 6822 | 会话恢复模型恢复不准确 | 模型变更未正确保留，恢复逻辑缺陷 | [链接](fredheir描述层级覆盖问题） |  
| 6774 | 临时文件存储压力 | 控制器依赖系统临时目录可能引发死锁 | [链接](possibilities需私有插槽隔离） |  
| 6675 | 自我更新网络中断 handling | 单次失败中断损害用户体验 | [链接](whyhkzk描述需重试机制覆盖） |  

---

### 4. **重要 PR 进展**  
| PR # | 功能/修复 | 作用 | 链接 |  
|------|----------|------|------|  
| 6824 | 添加Upstage Solar LLM四模型支持 | 增加生态选项，支持高推理能力模型 | [链接](MercuriusDream提供费用与性能对比表） |  
| 6834 | 统一UUIDv7用于请求识别 | 修复哈希冲突风险 | [链接](xl0实现全局uuidv7使用） |  
| 6818 | 保护`assistant.usage`空值访问 | 防止DeepSeek/Bing流式响应引发崩溃 | [链接](gruvin安全校验修复） |  
| 6828 | 支持OpenCode Go Response模型API联邦 | 类型系统兼容性提升 | [链接](xz-dev注册OpenAI API适配） |  
| 6775 | 分级处理compaction失败的重试逻辑 | 扩展可恢复运行场景 | [链接](davidbrai分级处理提案） |  
| 836 | 添加ACP模式语言服务协议 | 编辑器深度集成（Zed验证通过） | [链接](vaayne实现API桥调用） |  
| 6837 | 对齐GPT-5.6 Codex上下文大小 | 与OpenAI官方统一372K vs 272K对齐 | [链接](artplan1修正定价策略） |  
| 6823 | 重构代码索引增效优化 | 提升大型库触发速度 | [链接](PR #836依赖的索引动态调整） |  

---

### 5. **功能需求趋势**  
- **IDE深度集成**：ACP模式（#836）和代理环境隔离（#5341）持续发展，反映用户对代码协作工具的需求。  
- **代理性能优化**：大文件处理（#6792）和内存安全（#6841）成为顶层痛点。  
- **模型生态多样性**：Upstage、本地推理器支持（#6305）及高级参数控制（#6835）需求上升。  

---

### 6. **开发者关注点**  
- **可维护性风险**：内存管理（#6841）、线程安全（#1871）需重构关注。  
- **文档缺失**：模型配置（#6305）、错误码（#6768）文档质量影响上线效率。  
- **跨平台适配**：Windows路径工具路径分隔符（#6817）、OS模块依赖（#6675）需统一规范。  

--- 

**总体启示**: 社区对 **代理性能可靠性**（大型文件、长会话）和 **模型生态扩展** 有统一诉求，目前PR已覆盖部分，但需持续注意回归风险与跨模型兼容性。


</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报 – 202 keenya 2026‑07‑20**  

---

### 1. 今日速览  
- 发布 v0.20.1‑preview，多项自动化构建与子代理改进；  
- 通过 Hot‑Reload 机制实现工作区信任变更即时生效，提升了 daemon 的可维护性；  
- 多项关键 Bug（cold‑start、SSE 泄露、subagent 错误）已进入修复轨道，社区活跃度回升。  

> **相关链接**：<https://github.com/QwenLM बना/qwen-code/releases/tag/v0.20.1-preview.7215>

---

### 2. 版本发布  
| 版本 | 日期 | 主要变更 |
|------|------|----------|
| **v0.20.1‑preview.7215** | 2026‑07‑20 | *feat(autofix)*：自动拉取自带标签的拉取请求；<br>*fix*：修复强制分派 green no‑op 逻辑。 |
| *v0.20.0* | 2026‑07‑18 |  ★ 在 PR#7166 基础上推进多核心 ACP 并行，改进多工具模型批次处理。 |

> **完整变更列表**：<https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0>

---

### 3. 社区热点 Issues（10 选）  
| # | 标题 | 关键点 | 社区反应 |
|---|------|--------|----------|
| **4748** | *Optimize daemon cold start* | 2.5 s cold‑start → 0.7 s，提升用户体验 | 众多评论，优先级 P1 |
| **7156** | *Subagent mutates main session model* | 子代理不当修改主会话模型导致上下文泄露 | 明确抛光；已进入修复阶段 |
| **4801** | *Add a dedicated web_search tool* | 直接使用 DashScope 搜索，减少模型推理 | 近 30 条评论，被评为关键功能 |
| **7147** | *MCP server never successfully get tool & resource listing* | 认证 OK，获取工具列表超时 | 已排查 Charlize 进程问题 |
| **6569** | *Improve subagent observability* | 实时查看子代理执行流程 | 需求高，社区关注 |
| **7198** | *Add qwen3.8‑max‑preview to built‑in model list* | 新模型上线后支持广泛 | 需求对应新预算计划 |
| ** מידע** | *Plan Mode Content Leakage in Subsequent Responses* | `exit_plan_mode` 的 plan 内容泄露 | 开启讨论，提高安全性 |
| **6996** | *Custom OpenAI‑compatible provider always fails* | 连接错误掩盖真实原因 | 影响外部集成 |
| **7179** | *Support workspace display names* | 仅用于展示的工作区别名 | 大量 Star 与 PR ~ |
| **7238** | *RestSseTransport leaks SSE subscribers* | SSE 请求未正常关闭，导致 HTTP 429 | 已提交修复 PR#7257 |

> **查看全部**：<https://github.com/QwenLM/qwen-code/issues?q=is%3Aissue+is%3Aopen+in%3Aupdated>

---

### 4. 重要 PR 进展（10 选）  
| # | 题目 | 贡献人 | 主要功能/修复 |
|---|------|--------|--------------|
| **7268** | *Hot‑reload workspace trust changes* | doudouOUC | 允许 daemon 重新加载工作区信任，无需重启 |
| **7262** | *Restore worktree isolation on session load/resume* | wenshao | 解决重启后工作树会话被忘记的问题 |
| **7259** | *Make /review resilient* | wenshao | 统一工作区验证逻辑，避免不必要重试 |
| **7258** | *Yield to single‑slot background agents* | hogeheer499 | 主 agent 在单槽背景代理时不丢失响应 |
| **7256** | *Strip daemon secrets from agent‑spawned child env* | chinesepowered | 防止子进程泄露 `QWEN_SERVER_TOKEN` |
| **7248** | *Enforce Plan mode entry boundary* | doudouOUC | 确保 `enter_plan_mode` 为同批次执行边界 |
| **7265** | *Repaint TUI after OS sleep/wake or SIGCONT* | wenshao | 解决 macOS 休眠恢复时 TUI 失真 |
| **7179** | *Support workspace display names* | samuelhsin | 可为工作区设置用户友好展示名 |
| **7246** | *Intro GitHub/GitLab/Gitea polling adapters* | OrbitZore | 新增源码托管平台的代币更新监听 |
| **7237** | *Fence concurrent ACP session writers* | doudouOUC | 防止同一会话被多个进程写入造成竞态 |

> **跟踪 PR**：<https://github.com/QwenLM/qwen-code/pulls?q=is%3Apr+is%3Aopen>

---

### 5. 功能需求趋势  
1 Dmit **性能优化**：daemon cold‑start、SSE 连接泄露、token 统计等。  
 whims **子代理可观测性**：实时执行、手动干预。  
 3. **工具集成**：web_search-inter，MCP 工具列表，Git polling。  
 4. **模型扩展**：新模型 `qwen3.8‑max‑preview`，web_search 方案。  
 5. **安全与隐私**：plan mode 内容泄漏、daemon env 洩漏、token 选择问题。

---

### 6. 开发者关注点  
- **Cold‑start 与资源占用**：文档和 benchmark 讨论，急需自行缓存/预加载策略。  
- **子代理配置审核**：子代理往往修改主会话导致上下文 өг 할 수 있다.  
- **SSE 与网络**：持续出现 HTTP 429，auditing 需要更精细的 abort 机制。  
- **Plan Mode 与执行退出**：部分退出点 leakage，需更严格的状态封装。  
- **工具安全**：MCP、web_search 需要更细粒度信任与权限控制。  

> **任何开发者想讨论或提交 PR**: <https://github.com/QwenLM/qwen-code/issues/new>  

---

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

## 🚀 DeepSeek-TUI 社区动态日报
**日期：2026-07-20**

---

### 1. 今日速览
- **UI/UX 修复齐发**：顶栏滚动、Alt+V 详情、首屏控件发现等缺陷密集修复。
- **性能与成本优化**：Agent 模式提示词压缩、子 Agent 自动复用前缀、"穷举门" 系统化管控均已落地。
- **模型与工具声明梳理**：多项工作梳理模型事实（一览表）、工具沙盒化逻辑，支持 Full Access 姿势的 MCP 工具暴露等问题。
- **环境支持调整**：CODEWHALE_* 变量合并、PowerShell 安全执行检测强化、Windows 命令行标志解析修正等。

---

### 2. 版本发布
> **Releases** 页面目前为空，无正式版本号发布。

---

### 3. 社区热点 Issues（共 10 个）

| # | 标题（状态） | 核心问题 | 社区反应 |
|---|-------------|--------------|-------------|
| #4042 | **feat: Environment-level tool sandboxing for sub‑agents**（已关闭） | 跟踪子 Agent 运行时工具限制 — 对话框、子 Agent、Fleet .worker 和 MCP 服务。 | **16 条评论**，无点赞（技术白皮书性质）。 |
| #1425 | **执行大文本处理工程后会话中断卡死**（打开） | 大文本切片 + 10 子 Agent 时，`agent_wait` 等待超时会话被中止。 | **3 条评论**，无点赞 — 争议为“长时间任务调度瓶颈”。 |
| #4594 | **top bar / sidebar 列表无法滚动到底部**（打开） | 工作清单等可滚动 UI 列表，末尾项不可见。 | **1 条评论**，无点赞 — 影响用户浏览。 |
| #4568 | **新版斜杠指令响应迟缓**（打开） | `/xxx` 等常规指令执行时延涨，好于上个版本的即时体验。 | **1 条评论**，无点赞 — 用户关注性能回归。 |
| #4564 | **codewhale exec --auto: flags consumed as single arg on Windows**（打开） | `--model`/`--toolsets` 等标志在 Windows 下 npm 全局安装时合并为单个参数。 | **1 条评论**，无点赞 — 歧义于跨平台 CLI 解析。 |
| #4595 | **Full Access 提示误判普通 feature-branch push 为发布类**（已关闭） | 运行 Full Access 时，`git push origin <feature>` 触发安全网提示。 | **0 条评论** — 修复已提交（PR #4596）。 |
| #4599 | **v0.9.2: per-model facts 一处定义**（打开） | 模型上下文窗口、最大输出、能力集分散在 `crate::models`、`crate::config`、各 match arm 中，难以维护。 | **0 条评论** — 数据集中工作正在进行中。 |
| #4598 | **Operate 模式下子 Agent 利用不足**（打开） | Operate 模式“应激”代理使用不足，父级倾向队列式并行处理。 | **0 条评论** — 模式设计变更提案。 |
| #4593 | **PowerShell 安全执行强化**（已关闭） | 确保 TUI 在所有平台下安全调用 PowerShell。 | **0 条评论** — PR #4593 含 `-NoLogo -NoProfile -NonInteractive` 等项。 |
| #4596 | **Full Access 真实全权：发布类 shell 逻辑修正**（已关闭） | 回归诊断类 `git push` 分类，避免误判为发布类操作。 | **0 条评论** — 与 #4595 一并修复。 |

---

### 4. 重要 PR 进展（共 10 个）

| # | 标题（状态） | 功能/修复摘要 | 关键影响 |
|---|-------------|--------------------|--------------|
| #4602 | **chore(tui): CODEWHALE_* 变量优先级与产品身份清理**（打开） | ✅ `CODEWHALE_*` 优先于 `DEEPSEEK_*`；保留旧名兜底，清理残留身份冗余。 | 主控名一致性，非破坏性变更。 |
| #4601 | **feat(tui): composer 实时编辑器契约**（打开） | 建立 Composer 核心行为约束 — Shift+←/→ 字符级选择等已验证功能共享，不再重复。 | 减少代码重复，提高编辑器稳定性。 |
| #4600 | **feat(tui): 自动复用父级缓存前缀**（打开） | 子 Agent 自动继承父级上下文前缀，消减冷启动 100K 长度重复预填充开销。 | 显著降低子 Agent 初始化成本。 |
| #4597 | **feat(tui): 压缩 Agent 模式提示词**（已关闭） | `prompts/modes/agent.md` 从 661 词 ↓ 542 词 (−18%)，不影响已验证不变数。 | 每次冷启动及缓存写入费用下降。 |
| #4593 | **fix(tui): PowerShell 安全执行强化**（已关闭） | 统一使用 `pwsh` 检测、添加 `-NoLogo -NoProfile -NonInteractive`，捕获 `$LASTEXITCODE`。 | 修复 Windows 安全执行漏点。 |
| #4596 | **fix(tui): Full Access 真实全权：发布类 shell 逻辑修正**（已关闭） | 精细化 `git push` 分类：仅拒绝 force/delete/tags/mirror 等真实发布动作。 | 消除日常开发不必要提示。 |
| #4592 | **fix(tui): K3 每路由契约对齐**（已关闭） | 独立事实校验后确认 K3 路由按路由而非全局计费：Open‑platform `kimi‑k3` 与内部专属路径价格独立。 | 路由价格匹配新检测事实。 |
| #4591 | **fix(tui): 用 Alt+V 打开详情，移除裸 v**（已关闭） | UI 文案改为 Alt+V（⌥V macOS）打开；本地化占位符 `{details}` 更新。 | 用户误操作率下降。 |
| #4590 | **feat(tui): 会话及路由选择器本地化**（已关闭） | 完成“蓝阶”中文化：状态、错误、相对时间、元数据、模版空状态等。 | 非英语用户界面友好度提升。 |
| #4589 | **feat(tui): 增加静默行为引导**（已关闭） | 五项动作提示 — 规划、后台回执、恢复输入、MCP 恢复、手动重复命令；单会话限一个提示。 | 轻量辅助用户发现功能。 |

---

### 5. 功能需求趋势
1. **子 Agent 成本与调度优化** – 频率出现，大文本、分批处理、自动上下文复用、Agent 冷启动成本直驱。
2. **UI 滚动与交互体验修复** – 顶栏滚动、详情打开方式、首屏控件发现等直接影响用户体验的问题。
3. **跨平台 Windows 命令解析** – 标志解析、PowerShell 安全执行、环境变量前置等平台适配项。
4. **模型/工具事实集中化** – 多处散列的模型参数及工具限制数据亟需统一，减少维护和运行时歧义。
5. **权限提示精准化** – “Full Access 误报发布类操作” 及“Operate 模式子代理利用不足”等，指向更精细的权限建模。
6. **本地化与产品标识** – 会话/路由选择器、提示文案、颜色主题（蓝阶 default）等契约化。

---

### 6. 开发者关注点（痛点与高频诉求）

| 痛点 | 典型反馈 | 相关 issue/PR |
|---------|------------------|----------------|
| **长时间任务卡顿** | 大文本 (>2M) 分析时，会话在 `agent_wait` 超时后中止。 | #1425 |
| **UI 滚动卡顿** | 10 项工作清单等可滚动列表，末尾项不可见。 | #4594 |
| **全局命令响应延迟** | 新版本 `/xxx` 等常规指令响应变慢，回退于旧版即时体验。 | #4568 |
| **Windows 命令行标志歧义** | `--model`/`--toolsets` 等标志在 npm 全局安装时合并为非法单参数。 | #4564 |
| **Full Access 误报安全提示** | 普通 feature-branch push 被误判为发布类操作，触发安全门提示。 | #4595 / #4596 |
| **子 Agent 重复上下文加载** | 每个子 Agent 冷启动时重复填充 100K 长度系统上下文，前置成本大。 | #4600 |
| **PowerShell 执行安全隐忧** | PowerShell 调用无 `-NoProfile` 等项，可能泄露用户数据。 | #4593 |
| **模版/常量散布难以维护** | 模型相关常量散布于各 crate 中，match arm 中，难以集中更新。 | #4599 |

---

**备注** – 所有链接均指向 `github.com/Hmbown/DeepSeek-TUI`，如需阅读详细描述，请直接访问上述 Issue / PR 页面。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*