# AI CLI 工具社区动态日报 2026-07-15

> 生成时间: 2026-07-15 01:26 UTC | 覆盖工具: 9 个

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

**Claude Code Skills 社区热点报告（截至 2026‑07‑15）**  

---  

## 1. 热门 Skills 排行  
| # | PR (链接) | 关注度* | 当前状态 | 功能概述 | 社区讨论热点 |
|---|----------|--------|----------|----------|--------------|
| 1 | **[#1367 – feat(skills): add self‑audit](https://github.com/anthropics/skills/pull/1367)** | ★★★★★ (首个提出“自审计”概念的 PR) | **open** | 在输出前执行机械文件校验，再进行四维度（结构、准确性、深度、安全性）推理审查，形成 “damage‑severity” 优先级报告。 | 社区普遍赞同但对实现复杂度有顾虑，期待后续细化实现细节。 |
| 2 | **[#1298 – fix(skill‑creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)** | ★★★★☆ | **open** | 解决 `run_eval.py` 在 Windows 下因子流读取、触发检测与并行 worker 失效导致的 0% recall 问题，恢复描述优化循环的正确信号。 | 多位维护者反复复现该 bug，已成为提升 Skill 可靠性的关键痛点。 |
| 3 | **[#1323 – fix(skill‑creator): run_eval trigger detection misses real skill name](https://github.com/anthronics/skills/pull/1323)** | ★★★★☆ | **open** | 修正 trigger‑eval 在识别真实 Skill 名称时提前退出的 bug，保证所有应触发的查询都能被正确捕获。 | 与 #1298 紧密关联，直接影响描述优化回路的召回率。 |
| 4 | **[#1302 – Add color‑expert skill](https://github.com/anthropics/skills/pull/1302)** | ★★★★☆ | **open** | 提供完整的色彩知识与配色方案（ISCC‑NBS、Munsell、RAL、CSS 等）支持，适用于任何涉及配色的任务。 | 因色彩主题的通用性，被频繁引用，社区期待将其纳入官方 Skill 集合。 |
| 5 | **[#1261 – fix(skill‑creator): isolate trigger‑eval command files](https://github.com/anthropics/skills/pull/1261)** | ★★★★☆ | **open** | 防止 trigger‑eval 在并行 eval 窗口中把合成命令文件写入用户活动项目目录，避免并发冲突。 | 与并行评估机制直接关联，解决了多用户协作时的文件污染风险。 |
| 6 | **[#1099 – skill‑creator: fix run_eval.py crash on Windows](https://github.com/anthropics/skills/pull/1099)** | ★★★☆☆ | **open** | 修复 Windows subprocess 对 `claude.cmd` 的兼容性、编码与 pipe 读取问题，使评估脚本在 Windows 上可用。 | Windows 用户的主要阻点，已在社区中得到高频讨论。 |
| 7 | **[#1050 – skill‑creator: fix Windows subprocess + encoding bugs](https://github.com/anthropics/skills/pull/1050)** | ★★★☆☆ | **open** | 3 行修复（PATHEXT、cp1252 编码、pipe-select）解决 Windows 环境下的三大兼容性缺陷。 | 与 #1099 互补，进一步提升跨平台可用性。 |
| 8 | **[#723 – feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** | ★★★☆☆ | **open** | 涵盖测试哲学、单元测试、React 组件测试等全栈测试实践，提供统一的测试模板。 | 社区对“如何系统化地生成/组织测试”需求明确，该 Skill 成为热点候选。 |

\* **关注度** 依据 PR 编号在社区讨论热度、Issue 引用次数以及后续持续的关注度进行主观排序。  

---  

## 2. 社区需求趋势  
从 Issues 中提炼出的核心需求方向：

| 需求方向 | 代表性 Issue（链接） | 关键诉求 |
|----------|-------------------|----------|
| **组织内技能共享** | #228 – Enable org‑wide skill sharing in Claude.ai | 想要在组织内直接共享 Skill，避免手动下载/上传。 |
| **Skill 可信度与安全** | #492 – Security: Community skills distributed under anthropic/ namespace | 关注社区 Skills 使用 `anthropic/` 命名空间导致的冒充风险。 |
| **统一测试模板** | #723 – testing-patterns skill | 需要标准化的测试模式与示例，提升代码质量。 |
| **色彩与排版专业化** | #514 – Add document‑typography skill; #1302 – Add color‑expert skill | 对文档排版、文字排版与配色的专用技能需求旺盛。 |
| **跨平台/组织治理** | #1385 – Reasoning Quality Gate Pipeline | 希望在交付前通过多层质量把控，降低错误输出。 |
| **文档与元数据标准化** | #509 – docs: add CONTRIBUTING.md; #189 – document‑skills and example‑skills plugins install identical content | 呼吁统一的贡献指南与避免重复内容。 |

**总体趋势**：社区即将从 **“单一技能功能”** 转向 **“组织化、可共享、可审计的技能工作流”**，尤其是在跨平台兼容性、可信度与质量管控方面。

---  

## 3. 高潜力待合并 Skills（仍为 **open** 且讨论活跃）  
| PR | 链接 | 简要描述 | 为何值得关注 |
|----|------|----------|--------------|
| #1298 | https://github.com/anthropics/skills/pull/1298 | 解决 `run_eval.py` 在 Windows 上的 0% recall 问题 | 直接关联描述优化回路的可用性，众多维作者持续追踪。 |
| #1323 | https://github.com/anthropics/skills/pull/1323 | 修复 trigger‑eval 对真实 Skill 名称的误判 | 与 #1298 紧密关联，解决召回率核心瓶颈。 |
| #1367 | https://github.com/anthropics/skills/pull/1367 | 自审计（mechanical verification + 4‑dimension reasoning） | 社区对质量管道的需求迫在眉睫，预计将在近期合入。 |
| #1099 | https://github.com/anthropics/skills/pull/1099 | Windows subprocess 兼容性修复 | 解决跨平台运行的最主要阻碍。 |
| #723 | https://github.com/anthropics/skills/pull/723 | testing‑patterns Skill（全栈测试实践） | 为测试自动化提供标准化模板，社区需求明确。 |
| #1302 | https://github.com/anthropics/skills/pull/1302 | color‑expert Skill（色彩体系与配色方案） | 通用性强，已被多次引用，具备高落地概率。 |

---  

## 4. Skills 生态洞察  
> **社区当前最集中的诉求是：在跨平台兼容、可信度与质量管控的基础上，构建可共享、可审计的技能工作流体系。**  

---  

*以上报告基于截至 2026‑07‑15 的 GitHub Pull Request 与 Issue 数据整理，所有链接均指向公开仓库。*

---

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报  
**日期：2026-07-15**

---

## 1. 今日速览

- Codex CLI 0.145.0-alpha 系列持续迭代，发布 0.145.0-alpha.12；同时维护版本 0.144.4 修复内部问题。
- 重要 Issue #32925 报告浏览器插件严重崩溃问题（“Cannot redefine property: process”），社区讨论热烈；
- PR #33198 等多个 PR 合并，聚焦中断提示保留历史记录、MCP 工具缓存优化及 AWS Bedrock 认证支持等关键功能。

---

## 2. 版本发布

### Codex CLI v0.145.0-alpha.12  
🔗 [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.12)

- 继续迭代 alpha 版，暂无详细变更摘要；
- 建议开发者测试最新功能，反馈问题至 Issue 汇报。

### Codex CLI v0.144.4  
🔗 [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.144.4)

- **无用户可见变更**，仅内部维护更新；

---

## 3. 社区热点 Issues

| 编号 | 标题 | 简介 | 评论数 |
|------|------|------|--------|
| [#32925](https://github.com/openai/codex/issues/32925) | 浏览器插件崩溃：`Cannot redefine property: process` | macOS 用户报告 Codex Desktop 浏览器及 Chrome 插件启动失败，导致核心功能不可用，已关闭。 | 52 |
| [#28969](https://github.com/openai/codex/issues/28969) | 添加设置禁用 60 秒自动解析 | 用户请求可配置的超时机制，提升 CLI 交互体验。 | 34 |
| [#17827](https://github.com/openai/codex/issues/17827) | 可自定义状态栏 | 类似 Claude Code 的终端状态栏需求，支持 token 使用、模型信息等实时反馈。 | 28 |
| [#32806](https://github.com/openai/codex/issues/32806) | GPT-5.6 Sol 上下文容量回退 | 报告模型上下文窗口从 1.05M 降至 258K，严重影响大项目处理能力。 | 22 |
| [#25463](https://github.com/openai/codex/issues/25463) | 项目线程消失但 JSONL 数据残存 | Desktop 端项目视图中线程消失，但实际文件可读，存在数据同步隐私风险。 | 16 |
| [#29968](https://github.com/openai/codex/issues/29968) | Pro20x 订阅配额异常 | 用户反馈配额与 Plus 相同，可能是计费系统 Bug。 | 16 |
| [#20880](https://github.com/openai/codex/issues/20880) | 启动时创建空文件夹 `~/Documents/Codex` | App 启动即创建空目录，影响文件系统整洁度。 | 16 |
| [#30178](https://github.com/openai/codex/issues/30178) | Windows 内置浏览器崩溃 | WebView2 导航时主程序崩溃，影响 Windows 用户体验。 | 15 |
| [#32683](https://github.com/openai/codex/issues/32683) | Windows 浏览器插件崩溃 | 0xC0000005 异常错误，堆栈指向 chrome.dll。 | 13 |
| [#28919](https://github.com/openai/codex/issues/28919) | 控制设备选项卡缺失 | Windows 设置中无“控制其他设备”标签页，影响联动功能。 | 12 |

---

## 4. 重要 PR 进展

| 编号 | 标题 | 功能描述 |
|------|------|----------|
| [#33198](https://github.com/openai/codex/pull/33198) | 保留被中断提示的历史记录 | 中断后保留空提示并打开空白输入框，提升用户交互连续性。 |
| [#33187](https://github.com/openai/codex/pull/33187) | 尊重工作区支出控制 | 在限流处理中优先考虑工作区层级的费用限制。 |
| [#33184](https://github.com/openai/codex/pull/33184) | 复用 MCP 工具目录 | 减少重复初始化 stdio MCP 服务器的时间开销。 |
| [#33180](https://github.com/openai/codex/pull/33180) | 序列化 MCP stdin 写入 | 防止并发写入导致 JSON-RPC 协议错误。 |
| [#33173](https://github.com/openai/codex/pull/33173) | 移除 GPT-5.4 模型 | 引导用户迁移至 GPT-5.6-terra/luna 版本。 |
| [#33170](https://github.com/openai/codex/pull/33170) | 支持 Amazon Bedrock 登录 | 增强云服务集成能力，支持 AWS 原生身份验证。 |
| [#33156](https://github.com/openai/codex/pull/33156) | 作为 review-agent 回合运行分离审查 | 统一审查流程，提升代码评审一致性。 |
| [#33152](https://github.com/openai/codex/pull/33152) | 支持分片线程历史 API | 改进大模型会话分页加载性能。 |
| [#33149](https://github.com/openai/codex/pull/33149) | 构建 MCP 工具运行时前路由规划 | 优化工具准备顺序，提升响应速度。 |
| [#33166](https://github.com/openai/codex/pull/33166) | 延迟 Noise 环境连接 | 稳定化远程会话建立流程。 |

---

## 5. 功能需求趋势

从社区 Issue 中可归纳以下核心需求方向：

| 方向 | 表现 |
|------|------|
| 🖥️ IDE 集成增强 | 如 Issue #17827 的终端状态栏、#30919 的 Git 工作区面板，期待更接近 IDE 工作流。 |
| ⚡ 性能与稳定性 | 浏览器崩溃、上下文回退、会话恢复慢等问题频发，亟需优化底层稳定性。 |
| ☁️ 云服务兼容性 | AWS Bedrock 登录、远程控制、VS Code Remote-SSH 支持等多云部署需求上升。 |
| 🧰 工具链可配置化 | 用户希望自定义超时、自动解析行为及 UI 交互细节（如 #28969、#31538）。 |
| 📱 跨平台一致性 | iOS、Windows、macOS 各平台行为差异引发用户困扰，需统一体验。 |

---

## 6. 开发者关注点

- **高频崩溃问题**：浏览器插件、WebView2、MCP 标准输入冲突等多处崩溃频发；
- **模型兼容性回退**：GPT-5.6 上下文窗口异常、5.4 模型逐步淘汰引发适配压力；
- **远程会话同步失效**：SSH 项目、iOS 线程可见性、Pro20x 配额异常等远程功能不稳定；
- **配置灵活性不足**：缺少对自动超时、侧边栏悬停等行为的可调参数；
- **文件系统副作用**：启动时无意创建空文件夹等“隐形行为”影响用户体验。

--- 

> 本报告基于 GitHub 公开数据整理，供技术开发者参考。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>


# Gemini CLI 社区动态日报 - 2026-07-15

## 今日速览
Gemini CLI 在昨夜发布了 v0.52.0-nightly.20260714.gfa975395b，主要修复了核心项目配额错误提示和 A2A 服务器任务取消逻辑。社区继续关注 agent 系统的稳定性问题，特别是子代理恢复机制和资源消耗控制方面。

## 版本发布
**v0.52.0-nightly.20260714.gfa975395b**
- `fix(core)`: enrich shared project quota limit errors with setup hint [@amelidev](https://github.com/google-gemini/gemini-cli/pull/28391)
- `fix(a2a-server)`: ensure task cancellation aborts execution loop [@luisfelipe-alt](https://github.com/google-gemini/gemini-cli/pull/2831)

## 社区热点 Issues

1. **#22323** - Subagent recovery after MAX_TURNS reports GOAL success  
   子代理在达到最大轮次限制后错误报告成功状态，掩盖了实际中断情况。10条评论反映了开发者对核心逻辑可靠性的担忧。  
   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409** - Generalist agent hangs  
   一般代理在处理简单任务（如文件夹创建）时会永久挂起，8个赞显示这是影响广泛的致命问题。  
   [链接](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873** - Leverage model's bash affinity via Zero-Dependency OS Sandboxing  
   提议充分利用 Gemini 3 模型的原生 bash 能力进行更精确的代码库导航，8条评论显示开发者对性能优化兴趣浓厚。  
   [链接](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#22745** - Assess impact of AST-aware file reads and search  
   探讨引入 AST 分析工具减少 token 消耗和提高代码分析精度，7条评论显示这是开发者期待的效率提升方向。  
   [链接](https://github.com/google-gemini/gemini-cli/issues/22745)

5. **#25166** - Shell command execution stuck with "Waiting input"  
   简单 shell 命令执行后界面仍显示等待输入状态，3个赞反映了频繁影响用户体验的问题。  
   [链接](https://github.com/google-gemini/gemini-cli/issues/25166)

6. **#26522** - Stop Auto Memory from retrying low-signal sessions indefinitely  
   自动记忆系统会无限重试低质量会话，5条评论显示开发者对资源浪费的问题关注。  
   [链接](https://github.com/google-gemini/gemini-cli/issues/26522)

7. **#26525** - Add deterministic redaction and reduce Auto Memory logging  
   自动记忆在模型上下文加载前会泄露敏感信息，3条评论显示安全性是关键议题。  
   [链接](https://github.com/google-gemini/gemini-cli/issues/26525)

8. **#21968** - Gemini does not use skills and sub-agents enough  
   模型需要明确指令才会使用自定义技能和子代理，开发者希望提高自动触发效率。  
   [链接](https://github.com/google-gemini/gemini-cli/issues/21968)

9. **#22232** - Enhance browser_agent resilience: Automatic session takeover  
   浏览器子代理在会话锁定时采用 fail-fast 策略，希望增加自动恢复能力。  
   [链接](https://github.com/google-gemini/gemini-cli/issues/22232)

10. **#24246** - Gemini CLI encounters 400 error with > 128 tools  
    工具数量超过 128 时出现 API 错误，3条评论显示需要工具管理优化。  
    [链接](https://github.com/google-gemini/gemini-cli/issues/24246)

## 重要 PR 进展

1. **#28319** - refactor(a2a-server): enforce path trust check prior to environment loading  
   重构初始化流程确保路径信任检查在环境加载前完成，提升安全性。  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28319)

2. **#28401** - fix(shell): bound command output sent to the model  
   限制 shell 输出传递给模型的大小，防止大量输出耗尽 token。  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28401)

3. **#28164** - fix(core): limit recursive reasoning turns per single user request  
   为每次用户请求实施 15 轮递归推理限制，保护 CPU 和 API 配额。  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28164)

4. **#24303** - feat(diagnostics): Native V8 Memory & Profiling Suite  
   引入 V8 内存和性能分析套件，帮助开发者调试性能问题。  
   [链接](https://github.com/google-gemini/gemini-cli/pull/24303)

## 功能需求趋势
- **Agent 行为优化**：开发者希望提高子代理自动触发率、增强会话恢复能力和改进终端交互处理
- **性能和资源控制**：统一呼声关注 token 消耗控制、递归推理限制和工具调用优化
- **安全性增强**：路径信任检查、敏感信息 redaction 和沙箱机制是关键关注点
- **代码理解能力**：AST-aware 分析工具和原生 bash 集成是提升效率的主要方向

## 开发者关注点
- **Agent 死锁和挂起**：多个重大 issue 报告 agent 在简单任务上永久挂起
- **资源消耗不可控**：大型命令输出和低质量会话无限重试耗尽系统资源
- **子代理状态不可信**：MAX_TURNS 限制下子代理错误报告成功导致问题难以追踪
- **工具管理不足**：大量工具导致 API 400 错误，需要动态加载机制


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**2026-07-15 GitHub Copilot CLI 社区动态日报**

---

### 1. **今日速览**  
GitHub Copilot CLI 发布新版本 `v1.0.71-2`，新增 /voice 设备选择与持久化、限制代理可用性以及对扩展交互的 Canvas 支持。社区关注语音模式空转问题（Issue #4024）、PDF支持功能請求（Issue #443）及控制台渲染优化。

---

### 2. **版本发布**  
**v1.0.71-2 更新亮点**：  
- **新增功能**：  
  - `/voice` 命令支持选择并持久化麦克风设备。  
  - 架构调整：限制任务/子代理的可用内置代理。  
  - CLI 中调用 `canvas` 支持副产品交互。  
- **优化改进**：  
  - `/chronicle` 命令提供更精确的成本分析建议。  

**版本更新记录**: [Release v1.0.71-2](https://github.com/github/copilot-cli/releases/tag/v1.0.71-2)

---

### 3. **社区热点 Issues**  
选出影响最广的 10 个 Issue：  
1. **[#1274] CLI 400 错误频发**  
   - **重要性**：用户报告的代码审查请求失败影响日常使用流程。  
   - **社区反应**：评论 +11，需求紧迫。  
   - 链接: [Issue #1274](https://github.com/github/copilot-cli/issues/1274)  

2. **[#4024] 语音模型空转问题**  
   - **重要性**：/voice 命令空转直接影响语音交互功能。  
   - **社区反应**：作用量标记 0，但技术紧急。  
   - 链接: [Issue #4024](https://github.com/github/copilot-cli/issues/4024)  

3. **[#443] PDF 可读支持请求**  
   - **重要性**：PDF 文档解析是社区长期需求，评论 +33。  
   - **社区反应**：功能请求热度衡量。  
   - 链接: [Issue #443](https://github.com/github/copilot-cli/issues/443)  

4. **[#2165] Ubuntu 密钥链断开**  
   - **重要性**：企业用户 Linux 系统依赖 SSH 密钥管理。  
   - **社区反应**：评论 +21，缺陷类型 "xbps-main"。  
   - 链接: [Issue #2165](https://github.com/github/copilot-cli/issues/2165)  

5. **[#4096] 第三方 MCP 服务器工具缺失**  
   - **重要性**：OAuth 接入合作方工具无法同步影响跨平台工作流。  
   - **社区反应**：评论 +2，连接问题关注点。  
   - 链接: [Issue #4096](https://github.com/github/copilot-cli/issues/4096)  

6. **[#4103] 插件克隆禁用凭证辅助**  
   - **重要性**：私有仓库接入失败导致插件管理受限。  
   - **社区反应**：评论 +2，安全/可维护性问题。  
   - 链接: [Issue #4103](https://github.com/github/copilot-cli/issues/4103)  

7. **[#4110] Ctrl+X→B 快捷键失效**  
   - **重要性**：终端交互控制权限漏洞影响进程管理能力。  
   - **社区反应**：技术调度需求反馈。  
   - 链接: [Issue #4110](https://github.com/github/copilot-cli/issues/4110)  

8. **[#4113] ACP 模式会话释放缺失**  
   - **重要性**：ACI 客户端无法端止会话阻碍资源控制。  
   - **社区反应**：ISO 标准合规性问题。  
   - 链接: [Issue #4113](https://github.com/github/copilot-cli/issues/4113)  

9. **[#4121] 会话关闭导致代码执行异常**  
   - **重要性**：版本更新后长期会话启动后台进程耗机。  
   - **社区反应**：评论 +0，但系统稳定性紧急。  
   - 链接: [Issue #4111](https://github.com/github/copilot-cli/issues/4111)  

10. **[#4127] 背景代理取消规则**  
    - **重要性**：用户终止操作副作用破坏多线程协作方案。  
    - **社区反应**：需改进中止前置逻辑讨论。  
    - 链接: [Issue #4127](https://github.com/github/copilot-cli/issues/4127)  

---

### 4. **重要 PR 进展**  
近 24 小时无 PR 提交，当前分支未包含代码更新记录。建议关注上述 Issue 补丁提交。

---

### 5. **功能需求趋势**  
1. **PDF 支持**：技术文档输入场景的解析能力未被原生支持（Issue #443）。  
2. **跨平台兼容性**：Linux/Snap 安装路径依赖（Issue #4109）、Windows 进程管理（Issue #4111）。  
3. **UI 交互优化**：快捷键冲突（Issue #4126）、可视化增强（Issue #4117）。  

---

### 6. **开发者关注点**  
- **关键性能优化**：调用追踪成本估算缺失（Issue #4107）、实时对话延迟（Issue #1274）。  
- **生态集成**：第三方工具（MCP）互通性（Issue #4096）、企业审计控制（Issue #3477）。  
- **底层稳定性**：数据损坏风险（Issue #4097）、资源泄漏（Issue #4115）。  

---

**配套资源**：  
- 官方文档：[GitHub Copilot CLI Wiki](https://docs.github.com/en/copilot)  
- 反馈建议用 `/report` 命令提交问题


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-15

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：过去 24 小时（~2026-07-14 更新）

---

## 1. 今日速览
- **无新版本发布**，核心开发活动集中在 **Provider 层（Kosong/Kimi）的推理参数修正** 与 **上下文预算动态计算** 的紧急修复。
- 社区反馈出现 **组织级 TPD 限流计算异常**（#2318）疑似阻塞 Windows 用户，尚无官方修复方案。
- 3 个关键 PR 均已合并，修复涉及 `reasoning_effort` 隐式传递导致的 400 报错、空 `reasoning_content` 导致的会话损坏、以及固定 32k 完成预算不匹配实际模型窗口的问题。

---

## 2. 版本发布
**无新 Release 发布。**

---

## 3. 社区热点 Issues
*仅过去 24 小时有更新的 2 条 Issue，均列于下：*

| # | 标题 | 状态 | 关键点 | 社区反应 | 链接 |
|---|---|---|---|---|---|
| **#2318** | `[bug] request reached organization TPD rate limit, current: 1505241` | 🟢 **OPEN** | **核心痛点**：Windows 10 / kimi 2.6 环境下，TPD（Tokens Per Day）计算逻辑疑似错误，导致配额未耗尽即触发限流（显示 1.5M tokens 已用）。涉及 Moonshot.ai 官方平台计费/配额接口对接异常。 | 👍 1 / 评论 1（用户提供详细日志与版本信息，官方尚未回应根因） | [#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318) |
| **#2496** | `[bug] resuming forked session results in corrupted output` | 🔴 **CLOSED** | **场景**：`kimi -r` 恢复分叉会话时输出损坏。版本 1.36.0 / Windows 10。 | 无讨论即关闭，疑似由近期 PR (#2498/#2499) 修复的 Provider 层问题引起，或为重复 Issue。 | [#2496](https://github.com/MoonshotAI/kimi-cli/issues/2496) |

---

## 4. 重要 PR 进展
*过去 24 小时合并的 3 个 PR，均为 **Provider/核心运行时修复**，无新增功能类 PR：*

| # | 标题 | 作者 | 核心变更 | 影响范围 | 链接 |
|---|---|---|---|---|---|
| **#2499** | `fix(kosong): stop sending Kimi reasoning effort implicitly` | RealKai42 | **架构修正**：移除对 legacy `reasoning_effort` 参数的隐式序列化与 clamp 逻辑；改为透传调用方显式指定的 `thinking.type`，解耦 Provider 状态。 | **Kosong Provider / Kimi 模型调用链** — 修复因隐式参数导致的上游 400 报错。 | [#2499](https://github.com/MoonshotAI/kimi-cli/pull/2499) |
| **#2498** | `fix(kosong): preserve empty-string reasoning_content as ThinkPart` | bigeagle | **数据完整性**：针对 `thinking.keep=all` 模式，强制保留空字符串 `reasoning_content` 为 `ThinkPart`，防止 assistant message 缺字段触发 400 (`missing reasoning_content at index 6`)。 | **Kosong Provider / 长思维链会话** — 修复会话中断/损坏的根因。 | [#2498](https://github.com/MoonshotAI/kimi-cli/pull/2498) |
| **#2494** | `fix(kimi): use remaining context for completion budget` | RealKai42 | **预算动态化**：将 Kimi 请求的 `completion budget` 从固定 32k 改为 **剩余模型上下文窗口动态计算**；仅对 Kimi 及 ChaosChatProvider 包装的 Kimi 生效，不影响通用 ChatProvider。 | **Kimi Provider / 上下文利用率** — 显著提升大上下文场景下的可用输出长度。 | [#2494](https://github.com/MoonshotAI/kimi-cli/pull/2494) |

---

## 5. 功能需求趋势
*基于近期 Issue/PR 模式推演（本期数据量极小，仅供参考）：*

1.  **Provider 层稳定性与标准化**（高频）：连续 PR 修正 `thinking/reasoning` 参数传递、空字段保留、动态预算，反映 **多模型适配层（Kosong/ChaosChat/Kimi）正处于“协议对齐”攻坚期**。
2.  **配额与计费透明化**（新增）：#2318 暴露 TPD 计算与平台侧不一致，开发者迫切需要 **本地配额预估 / 实时余额查询 / 限流降级策略**。
3.  **Windows 兼容性**：两条 Issue 均来自 Windows 10，且 #2496 涉及会话恢复损坏，提示 **文件锁/换行符/路径处理** 仍有隐患。

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点 | 典型反馈 | 当前进展 |
|---|---|---|
| **隐式参数导致上游 400** | `reasoning_effort` 被 Provider 隐式注入/钳制，与新 `thinking.type` 冲突 | ✅ **已修复** (#2499) — 显式透传，移除 legacy 映射 |
| **思维链字段缺失导致会话崩溃** | `reasoning_content=""` 被丢弃，触发 `thinking.keep=all` 校验失败 | ✅ **已修复** (#2498) — 空串强制保留为 `ThinkPart` |
| **固定 32k 输出上限浪费上下文** | 长上下文模型仅能输出 32k，剩余窗口闲置 | ✅ **已修复** (#2494) — 动态计算 `remaining_context` |
| **TPD 配额显示异常/提前限流** | 实际用量远低于限额却报 `rate limit`，阻塞生产流 | ❌ **未修复** (#2318 OPEN) — 需排查平台接口或本地统计逻辑 |
| **分叉会话恢复损坏** | `kimi -r` fork 会话输出乱码/截断 | 🔴 **Closed** (#2496) — 疑似为上述 Provider 修复的副作用，需回归验证 |

---

> **💡 给维护者的建议**  
> 1. **优先复现 #2318**：TPD 计费异常直接影响商业化信任，建议在 CLI 增加 `--debug-quota` 标志输出原始响应头便于排查。  
> 2. **补充回归测试**：针对 `thinking.keep=all` / `fork session` / `dynamic budget` 三大场景建立 E2E 用例，防止 Provider 重构引入回归。  
> 3. **文档同步**：`thinking.type` 与 `reasoning_effort` 的迁移指南需更新至 `docs/provider-migration.md`，降低插件开发者迁移成本。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报（2026‑07‑15）**  

---

### 今日速览
- OpenCode 昨日连续发布 **v1.18.0** 与 **v1.18.1**，完成 Desktop v2 迁移并在 Settings 中加入新旧布局切换开关；与此同时，社区集中反馈了新布局导致的多项 UI 回归（tab 标题显示、Plan/Build 切换失效、Agents 不可见等）。  
- 热议 Issue 集中在 **桌面端使用体验**、**会话历史与插件显示**、**功能入口（如会话存档、删除、重命名、一键压缩等）** 以及 **模型/provider 配置**（reasoning 选项、Copilot “Auto” 选项、可配置 web 搜索）上。  
- 本日提交的 PR 主要围绕 **新功能实现**（存档会话浏览、会话删除/重命名/ fork 按钮、一键上下文压缩）以及 **核心修复**（reasoning 选项扩容、目录创建容错、默认模型头恢复等），表明社区在接受 V2 布局的同时，正积极补足使用细节与易用性。

---

### 版本发布
| 版本 | 发布时间 | 主要更新 | 链接 |
|------|----------|----------|------|
| **v1.18.0** | 2026‑07‑14 | • 完成 Desktop v2 迁移，包含新布局升级处理和首次启动引导。<br>• 新增 Settings 中的“在新旧 Desktop  layout 之间切换”选项，便于过渡期使用。 | [v1.18.0](https://github.com/anomalyco/opencode/releases/tag/v1.18.0) |
| **v1.18.1** | 2026‑07‑15 | • **Desktop**：修复 Settings 中模型提供者段落之间的间距问题。<br>• 其他微小 bugfix（未展开细节）。 | [v1.18.1](https://github.com/anomalyco/opencode/releases/tag/v1.18.1) |

---

### 社区热点 Issues（按评论数排序，挑选 10 条最具代表性）

| # | 标题 | 评论 | 关键点 & 社区反应 | 链接 |
|---|------|------|-------------------|------|
| #28957 | **[BUG] “Upstream idle timeout exceeded”** | 20 | 使用 *writing-plans* skill 时出现模型服务空闲超时，疑似会话级超时配置失效。社区多次确认在 macOS Tahoe + M4 环境复现，期待后端超时阈值可配置或心跳机制改进。 | [#28957](https://github.com/anomalyco/opencode/issues/28957) |
| #12472 | **Native Claude Code hooks compatibility (PreToolUse, PostToolUse, Stop)** | 16 | 开发者希望 OpenCode 能直接响应 Claude Code 的 hooks，以实现与现有 Claude 工作流无缝衔接。点赞 37，说明需求强烈。 | [#12472](https://github.com/anomalyco/opencode/issues/12472) |
| #25239 | **[FEATURE] Expose GitHub Copilot “Auto” option in model selector** | 16 | 用户希望在模型选择器中看到 Copilot “Auto” 自动切换模型的便捷方式，降低手动切换成本。点赞 14，反映对多模型统一入口的诉求。 | [#25239](https://github.com/anomalyco/opencode/issues/25239) |
| #22129 | **Skills don't show up in TUI autocomplete but they do in the web app** | 13 | TUI 的自动补全未能读取技能文件，而 Web 端正常。定位到 `autocomplete.tsx` 中的状态同步问题，社区呼声高，期待尽快修复以提升终端使用体验。 | [#22129](https://github.com/anomalyco/opencode/issues/22129) |
| #36936 | **Desktop: wtf is the new tab layout, tab titles dont fit anymore on screen** | 10 | 新布局导致标题被截断，用户无法看到完整会话名称。截图展示了严重的 UI 退化，很多评论建议恢复旧布局或改进自适应宽度。 | [#36936](https://github.com/anomalyco/opencode/issues/36936) |
| #32747 | **@ file mentions do not include files created after startup** | 10 | 新建文件不会实时出现在 `@` 文件提示中，需要重启才能索引。这影响了编码流程，社区指出是搜索索引未增量更新。 | [#32747](https://github.com/anomalyco/opencode/issues/32747) |
| #31972 | **New Layout and Designs 开启无法切换 Plan/Build** | 8 | 启用新布局后，Plan/Build 模式切换（UI 按钮及 Ctrl+. 快捷键）失效。这是核心工作流功能，评论和点赞均较高，急需修复。 | [#31972](https://github.com/anomalyco/opencode/issues/31972) |
| #36979 | **[Bug]: Agents not visible when switching with Ctrl+. + folders not expanding in central file explorer (Desktop v1.18.1, Windows)** | 5 | 新 UI 中切换 Agent 时没有下拉可见提示，且文件资源树夹无法展开。虽然评论较少，但直接影响日常调度与文件导航，是 v1.18.1 首日常见 regression。 | [#36979](https://github.com/anomalyco/opencode/issues/36979) |
| #36971 | **[Bug] Session history not loading on home page using a VPS as server in the latest desktop layout** | 3 | 最新桌面布局在首页不再显示会话历史列表，导致用户无法快速回溯过去会话。社区指出这是 UI 迁移后遗漏的数据绑定。 | [#36971](https://github.com/anomalyco/opencode/issues/36971) |
| #36956 | **Show friendly name for auto-discovered local plugins in Desktop status popover** | 3 | 本地插件在状态弹窗中以完整 `file://` 路径显示，不易识别。用户希望展示插件友好名称（如 `usage-audit`），提升可读性。 | [#36956](https://github.com/anomalyco/opencode/issues/36956) |

> **说明**：以上 Issue 均在 2026‑07‑15 前 24 小时内有更新，评论数代表社区关注度。它们涵盖了 **稳定性（超时、索引失效）**、**兼容性（Claude hooks、Copilot Auto）**、**可用性（新布局 UI 回归、Plan/Build 切换、Agents 可见性、会话历史）**、以及 **易用性（插件命名、会话操作入口）** 四大维度。

---

### 重要 PR 进展（按功能影响力挑选 10 条）

| PR | 类别 | 主要内容 | 为什么重要 | 链接 |
|----|------|----------|------------|------|
| #36968 | **feat(app)** | 新增 `/archived` 命令，弹出美化的已存档会话浏览对话框，支持按归档时间排序、搜索。 | 直接回应 #36963，补足会话存档检索的空白，提升历史会话管理便利性。 | [#36968](https://github.com/anomalyco/opencode/pull/36968) |
| #36967 | **feat(app)** | 在会话侧边栏右键菜单加入 “Delete Session”，并弹出确认对话框。 | 解决 #36962，提供安全的会话删除方式，避免误删。 | [#36967](https://github.com/anomalyco/opencode/pull/36967) |
| #36966 | **feat(app)** | 实现会话侧边栏双击即时重命名（复用 `InlineEditor` 组件）。 | 对应 #36961，使会话重命名更符合常规编辑器习惯。 | [#36966](https://github.com/anomalyco/opencode/pull/36966) |
| #36965 | **feat(app)** | 为每条助手回复添加 “Fork” 按钮，点击即基于该消息创建分支会话。 | 响应 #36960，降低分支会话的操作门槛。 | [#36965](https://github.com/anomalyco/opencode/pull/36965) |
| #36964 | **feat(app)** | 在会话上下文使用指示器旁加入“一键压缩”按钮，直接触发 `/compact`。 | 对应 #36959，提供可视化的上下文管理方式。 | [#36964](https://github.com/anomalyco/opencode/pull/36964) |
| #36894 | **fix(core)** | 扩展模型的 reasoning 努力与预算映射（如 `none`/`thinking`、`none`/`high`/`max`），并 clamp 到模型输出上限。 | 改进了对不同推理模式的支持，解决了部分模型在高负荷下的 token 超限问题。 | [#36894](https://github.com/anomalyco/opencode/pull/36894) |
| #36542 | **fix(core)** | 对 `FSUtil.ensureDir` 添加对 `AlreadyExists` 错误的容忍，避免在并发初始化时抛异常。 | 修复了 #35828 提升启动稳定性，尤其在多实例或容器环境中。 | [#36542](https://github.com/anomalyco/opencode/pull/36542) |
| #36975 | **fix(core)** | 恢复默认模型请求头（session、parent、user-agent 等），保持 V1 与 V2 行为一致。 | 防止因请求头缺失导致的鉴权或计费异常，提升跨版本兼容性。 | [#36975](https://github.com/anomalyco/opencode/pull/36975) |
| #36970 | **fix** | 将 `max-steps` 指令由 assistant 消息改为 user 消息发送，避免被模型当作正文处理。 | 解决 #32548 中的步骤限制被误解为内容的问题，确保 agent 在达到步骤上限时能正确终止。 | [#36970](https://github.com/anomalyco/opencode/pull/36970) |
| #36950 | **feat(tui)** | 引入 V2 主题系统（Effect Schema、属性优先的组件访问器、颜色别名等），并提供 V1→V2 自动迁移路径。 | 为后续 UI 主题自定义奠定基础，长期看将提升界面可定制性与一致性。 | [#36950](https://github.com/anomalyco/opencode/pull/36950) |

---

### 功能需求趋势（从全部 Issues 中提炼）

| 趋势方向 | 典型 Issue / 需求 | 说明 |
|----------|-------------------|------|
| **桌面端 UI 可用性 & 稳定性** | #36936（tab 标题溢出）、#31972（Plan/Build 切换失效）、#36979（Agents 不可见、文件树不展开）、#36971（会话历史不加载） | 新布局带来多处回归，社区强烈要求恢复或改进交互细节。 |
| **会话管理便利化** | #36963（存档会话浏览）、#36962（删除会话确认）、#36961（侧边栏重命名）、#36960（Fork 按钮）、#36959（一键压缩） | 用户希望通过图形化入口快速进行会话存档、删除、重命名、分支与压缩操作，减少依赖命令面板。 |
| **插件 & 工作流集成** | #12472（Claude Code hooks）、#25239（Copilot “Auto” 选项）、#34953 / #36956（本地插件友好名称显示） | 社区期待 OpenCode 能更好地与外部 AI 工作流（Claude、Copilot）及本地插件系统无缝协作。 |
| **模型 & 推理配置灵活性** | #28957（空闲超时）、#36894（reasoning 4（reasoning 选项扩容）、#36513（可配置 web 搜索提供商） | 对模型行为的细粒度控制（超时、推理深度、搜索引擎）成为提升使用体验的热点。 |
| **性能 & 可靠性底层** | #36542（目录创建容错）、#36970（max-steps 指令角色修正）、#36978（批量 OpenAPI 查询参数） | 尽管功能诉求占主导，但底层稳定性与效率的修复同样被频繁提及。 |

---

### 开发者关注点（痛点 & 高频需求）

1. **UI 回归与适配**  
   - 新 Desktop v2 布

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报 (2026-07-15)**  

---

### 今日速览  
- **v0.80.7 发布**，主要破坏性改动是移除 `openai-responses compat.sendSessionIdHeader`，改用 `compat.sessionAffinityFormat` 控制会话亲和性。  
- 社区围绕 **Amazon Bedrock Mantle 提供者**、**xAI OAuth（device‑code & subscription）** 以及 **会话/超时回归**（`httpIdleTimeoutMs` 不再生效）展开热烈讨论。  
- 补丁层面，多个 PR 修复了 **session‑id 长度限制**、**刷新模型目录**、**compaction 传输继承** 等问题，显示出对稳定性和成本可视化的持续关注。

---

### 版本发布  
| 版本 | 更新要点 | 链接 |
|------|----------|------|
| **v0.80.7** | - 删除 `openai-responses` 的 `compat.sendSessionIdHeader` flag。<br>- 新增 `compat.sessionAffinityFormat`（可选 `"openai"`、`"openai-nosession"`、`"openrouter"`），用来控制会话亲和行为。<br>- 其余为依赖升级和小幅 bug 修复。 | [Release v0.80.7](https://github.com/earendil-works/pi/releases/tag/v0.80.7) |

---

### 社区热点 Issues（按评论数/影响力选取）

| # | 标题 | 评论 / 👍 | 为什么重要 | 社区反应 |
|---|------|-----------|------------|----------|
| [#5363](https://github.com/earendil-works/pi/issues/5363) | Add amazon-bedrock-mantle provider for OpenAI-compatible models | 16 / 8 | 为 Bedrock Mantle（OpenAI‑Responses 风格）添加原生 provider，填补现有 Converse API 不兼容的空白。 | 赞同多数，讨论焦点在地区端点、`sessionId` 处理以及与现有 `amazon-bedrock` 提供者的共存方式。 |
| [#6476](https://github.com/earendil-works/pi/issues/6476) | Regression: httpIdleTimeoutMs no longer respected for self‑hosted OpenAI‑compatible provider | 10 / 0 | v0.80.6 引起的超时失效导致长运行请求被错误中断，直接影响本地模型（vLLM、LM Studio）的可用性。 | 用户普遍确认回归，呼声高涨要求回滚或尽快修复；有几位提供了临时工作绕过（手动增加超时值）。 |
| [#6522](https://github.com/earendil-works/pi/issues/6522) | openai-completions: no min floor on max_completion_tokens, sends 1 token → 400 Bad Request | 7 / 0 | 当上游代理返回错误的 context 大小时，Pi 会把 `max_completion_tokens` 降至 1，导致 400 错误。需要在底层加入安全下限。 | 有开发者提出在 `models.json` 中添加 `minMaxCompletionTokens` 字段的补丁思路。 |
| [#6509](https://github.com/earendil-works/pi/issues/6509) | Extension-reported usage in the footer cost display (ctx.ui.setUsage) | 5 / 0 | 允许扩展通过 `ctx.ui.setUsage` 上报额外费用，底部费用栏会自动合并显示（例如 `$2.000 (+$1.500 ext)`）。 | 期待已久的功能，几位扩展作者已准备好实验性补丁；讨论集中在如何避免重复计费和单位统一。 |
| [#6624](https://github.com/earendil-works/pi/issues/6624) | Add GPT‑5.6 models and long‑context support to GitHub Copilot | 5 / 0 | 将 Copilot 新发布的 `gpt-5.6-luna/terra/sol` 加入内置模型目录，使用户能直接在 Pi 中切换。 | 赞成声浪高，尤其在需要长上下文的代码生成场景；有人提醒需检查许可证与费用透明度。 |
| [#3200](https://github.com/earendil-works/pi/issues/3200) | Support video/audio content in prompt command | 5 / 3 | 将 `prompt` RPC 扩展为接受视频/音频块，与现有 `images` 支持保持一致，以便多模态模型（Gemma 4、GPT‑4o）直接使用。 | 多媒体 AI 爱好者积极响应，提出了基于 base64 或 URL 的传输方案；尚未达成统一实现细节。 |
| [#6167](https://github.com/earendil-works/pi/issues/6167) | `transformMessages` + `isSameModel === false` thinking block normalization interacts poorly with `requiresReasoningContentOnAssistantMessages` compat flag | 3 / 0 | 模型切换时思考块规范化与助手消息强制推理内容标志冲突，可能导致思考内容被错误内联。 | 少数高级用户报告了此问题，建议在 `transformMessages` 中加入兼容性检查。 |
| [#6600](https://github.com/earendil-works/pi/issues/6600) | pi update --extensions blocks npm scripts with new npm 11.16.0 | 3 / 0 | npm 11.16.0 默认阻止 install 脚本，导致扩展更新流程中断。 | 社区迅速给出 workaround（使用 `--ignore-scripts` 或临时降级 npm），并讨论在 Pi 内部注入所需参数的方案。 |
| [#6374](https://github.com/earendil-works/pi/issues/6374) | model catalog fixes | 3 / 1 | 模型目录中多个热门模型的 reasoning‑level 元数据不一致，导致去重Catalog 出现冲突。 | 有开关。 | 贡献者已提交校正 PR，讨论围绕如何自动化同步上游 models.dev 数据。 |
| [#6555](https://github.com/earendil-works/pi/issues/6555) | Compaction/summary llm call should inherit the sessions transport settings. | 2 / 2 | 自动压缩/摘要调用未继承会话的传输方式（例如强制使用 SSE 而非配置的 WebSocket），导致部分模型（如 gpt‑5.6‑luna）失效。 | 已有 PR（#6584）修复，用户确认在 v0.80.7 之后问题得到缓解。 |

---

### 重要 PR 进展（按功能意义选取）

| # | 标题 | 功能/修复简述 | 链接 |
|---|------|----------------|------|
| [#6656](https://github.com/earendil-works/pi/pull/6656) | feat(ai): add xAI subscription OAuth | 为 xAI SuperGrok 添加设备码 OAuth 登录流程，仅影响订阅模型。 | https://github.com/earendil-works/pi/pull/6656 |
| [#6654](https://github.com/earendil-works/pi/pull/6654) | feat(ai): add promptCacheKey stream option to override the prompt cache key | 新增 `StreamOptions.promptCacheKey`，让调用方可自行提供缓存键，覆盖默认的 `sessionId` 来源。 | https://github.com/earendil-works/pi/pull/6654 |
| [#6653](https://github.com/earendil-works/pi/pull/6653) | clamp session-id to 64 chars for openai-codex | 修复 #6630：在 openai‑codex 请求头中强制截断 `session-id` 至 64 字符，防止 400 错误。 | https://github.com/earendil-works/pi/pull/6653 |
| [#6651](https://github.com/earendil-works/pi/pull/6651) | feat(ai): add xAI device OAuth and route grok-4.5 through Responses | 添加设备码 OAuth 登录，并将 `grok-4.5` 路由至 OpenAI‑Responses（支持 low/medium/high 推理）。 | https://github.com/earendil-works/pi/pull/6651 |
| [#6645](https://github.com/earendil-works/pi/pull/6645) | don't send session-id header to opencode openai-responses models | 对 OpenCodex 兼容的 OpenAI‑Responses 模型禁用 `session-id` 头，避免鉴权冲突。 | https://github.com/earendil-works/pi/pull/6645 |
| [#6594](https://github.com/earendil-works/pi/pull/6594) | feat: sqlite session storage | 引入 SQLite 作会话持久化后端，替换纯文件系统，提供更快的查询与并发安全。 | https://github.com/earendil-works/pi/pull/6594 |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | feat: Add Amazon Bedrock Mantle OpenAI Responses provider | 实现新的 Bedrock Mantle provider（OpenAI‑Responses 风格），支持自定义 region、sessionAffinity 等。 | https://github.com/earendil-works/pi/pull/6216 |
| [#6584](https://github.com/earendil-works/pi/pull/6584) | fix: forward provider options to summary requests | 压缩/摘要调用现在会继承当前会话的传输选项（WebSocket/SSE），修复 #6555。 | https://github.com/earendil-works/pi/pull/6584 |
| [#6618](https://github.com/earendil-works/pi/pull/6618) | Fix: don't cache write compaction or branch summaries | 防止对压缩与分支摘要的写入被缓存，减少无效缓存命中带来的成本。 | https://github.com/earendil-works/pi/pull/6618 |
| [#6636](https://github.com/earendil-works/pi/pull/6636) | feat(ai): refresh generated model catalogs | 根据最新 models.dev 数据重新生成内置模型目录，新增 GitHub Copilot 的 `gpt-5.6-*` 系列。 | https://github.com/earendil-works/pi/pull/6636 |

---

### 功能需求趋势（从所有 Issues 中提炼）

| 趋势 | 体现的 Issues / PR | 说明 |
|------|-------------------|------|
| **新提供商与模型支持** | #5363 (Bedrock Mantle), #6216 (同 PR), #6651/6656 (xAI OAuth), #6624 (GPT‑5.6 Copilot) | 社区持续推动对最新云服务（AWS Bedrock Mantle、xAI）以及新发布的大模型的原生支持。 |
| **会话 & 成本可视化** | #6509 (ctx.ui.setUsage), #6654 (promptCacheKey 覆盖), #6653/6645 (session-id 长度限制) | 对话成本分摊、缓存键控制以及会话头部细粒度管理成为热点。 |
| **多模态输入** | #3200 (video/audio in prompt) | 随着 GPT‑4o、Gemini 等多模态模型普及，用户希望直接在 `prompt` 中传递视频/音频。 |
| **压缩/摘要可靠性** | #6555, #6584, #6618 | 自动压缩不应丢失会话传输设置，且不应被错误缓存；提升长对话稳定性。 |
| **构建工具与脚本兼容性** | #6600 (npm 脚本阻塞), #6605 (Windows 路径归一化) | 开发者在 CI/CD 本地工作流中遇到工具链变更（npm 11、Windows 路径）导致的适配问题。 |
| **模型目录与元数据一致性** | #6374, #6636 | 目录数据需要频繁刷新以反映上游模型变更，并保证 reasoning‑level、字段命名等元数据准确。 |

---

### 开发者关注点（痛点 & 高频

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**Codewhale 社区动态日报（2026-07-15）**

---

### 1️⃣ 今日速览
Codewhale 社区聚焦于**性能优化**（流式输出卡顿和 @ 文件扫描导致 TUI 卡死）和**配置/国际化**问题。多个关键 PR 已合入，包括 MiniMax 供应商支持、BSD 平台浏览器修复和 v0.8.68 发布候选版，标志着 0.8.68 版本即将在上线。

---

### 2️⃣ 版本发布
- *无最新版本发布*（过去 24 小时内无镜像标签符）。

---

### 3️⃣ 社区热点 Issues

| # | 标题 | 类型 | 重要性 | 社区反馈 |
|---|-----|------|--------|-----------|
| [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) | **Codewhale 不遵守“宪法”规则** | 🐞 bug | 用户的核心安全边界失效，35 条评论显示争议大。 | 35 条评论，0 个点赞 |
| [#4270](https://github.com/Hmbown/CodeWhale/issues/4270) | **流式文本显示太慢**（deep‑seek V‑Flash） | 🐞 bug | TUI 渲染卡滞，导致输出突然堆积，影响用户体验。 | 3 条评论，0 个点赞 |
| [#4365](https://github.com/Hmbown/CodeWhale/issues/4365) | **“@” 文件观察者 eagerly 遍历整个目录，造成终端卡顿** | 🐞 bug | 监听非工作目录时，立即扫描子目录导致 pwsh7 卡顿。 | 1 条评论，0 个点赞 |
| [#4369](https://github.com/Hmbown/CodeWhale/issues/4369) | **中文翻译不自然：“宪法”/“代码”及向导界面标签混乱** | 🌐 i18n | 设置向导使用“宪法”一词，造成用户理解歧义；影响国际化体验。 | 1 条评论，0 个点赞 |
| [#4208](https://github.com/Hmbown/CodeWhale/issues/4208) | **TUI 复制粘贴污染了方框绘制 Unicode 装饰字符** | 🐞 bug | 复制文本时包含像 ├─ 等装饰字符，破坏文档整洁性。 | 2 条评论，0 个点赞 |
| [#3765](https://github.com/Hmbown/CodeWhale/issues/3765) | **Expose SeamManager.enabled / CompactionConfig.enabled to config.toml** | ✨ enhancement | 当前软缝合和上下文压缩仅通过代码强制开启，缺少用户级控制旋钮。 | 2 条评论，0 个点赞 |
| [#4368](https://github.com/Hmbown/CodeWhale/issues/4368) | **Kimi 供应商 base_url 覆写及上下文限制预热问题** | 🐞 bug | 用户配置 Kimi base_url 无效，上下文限制预热引发异常。 | 1 条评论，0 个点赞 |
| [#4350](https://github.com/Hmbown/CodeWhale/issues/4350) | **安卓 Termux 环境下 Cargo Build 失败 – rquickjs 缺少 aarch64‑linux‑android 绑定** | 🐞 bug | Android 平台构建环境不完整，导致社区用户无法使用 Termux 构建。 | 2 条评论，0 个点赞 |
| [#4345](https://github.com/Hmbown/CodeWhale/issues/4345) | **密钥输入过于繁琐，无法直接粘贴到终端** | 🐞 bug | “密钥输入”UI 流程复杂，阻碍了用户快速操作。 | 2 条评论，0 个点赞 |
| [#4318](https://github.com/Hmbown/CodeWhale/issues/4318) | **计费：CurrencyPricing / TokenUsage 下 cache‑write 速率被强制为 0** | 🐞 bug | 离线计费单卡价格绑定错误，导致 Provider 路由写入成本计算异常。 | 1 条评论，0 个点赞 |

*其他 Issues（如 #4335、#4359、#4333 等）也已获得修复，但讨论参与度较低，因此此处未列出。*

---

### 4️⃣ 重要 PR 进展

| # | 标题 | 状态 | 核心修复 / 功能 |
|---|-----|--------|------------------ categorizing |
| [#4367](https://github.com/Hmbown/CodeWhale/pull/4367) | **fix(tui): bound @‑completion file‑index walk with wall‑clock budget** | ✅ merged | 防止对大型非工作目录的 eager 遍历，解决 [#4365] 导致 TUI 卡死问题。 |
| [#3780](https://github.com/Hmbown/CodeWhale/pull/3780) | **expose context compaction gates** | ✅ merged | 新增 `[compaction].enabled` 和 `[seam_manager].enabled` 配置项，直控 Flash 平滑合并与软缝合开关。 |
| [#4351](https://github.com/Hmbown/CodeWhale/pull/4351) | **fix(scorecard): bind costs to provider routes** | ✅ merged | 离线计费 scorecard 与具体供应商/模型路由绑定，OAuth/本地/无价格网关路由失败时强制安全返回。 |
| [#4360](https://github.com/Hmbown/CodeWhale/pull/4360) | **Fix/browser open on BSD systems** | ✅ merged | 为 NetBSD/FreeBSD/OpenBSD 补全浏览器启动钩子，解决 TUI 内置浏览器点击失效。 |
| [#4354](https://github.com/Hmbown/CodeWhale/pull/4354) | **feat: add MiniMax Messages provider support** | ✅ merged | 支持 MiniMax-M3/M2.7，提供全球与中国端点 URL，完整认证和路由集成。 |
| [#4362](https://github.com/Hmbown/CodeWhale/pull/4362) | **Make the Codewhale public site documentation‑led** | ✅ merged | 重构官网为文档驱动门户，沿用「水下」TUI 视觉风格，精简安装和运行指南UI。 |
| [#4361](https://github.com/Hmbown/CodeWhale/pull/4361) | **Prepare CodeWhale v0.8.68 release candidate** | ✅ merged | 完成 0.8.68 RC 构建，集成分态界面、鼠标/PTX 覆盖、权限控制补丁等改进。 |
| [#4366](https://github.com/Hmbown/CodeWhale/pull/4366) | **fix(web): align site brand strings and tidy redesign leftovers** | ✅ merged | 统一官网所有页面品牌文案，清理设计重构残留。 |
| [#4364](https://github.com/Hmbown/CodeWhale/pull/4364) | **feat(web): add keyword search to docs hub & FAQ pages** | ✅ merged | 客户端文档搜索功能，实时过滤中文/英文标签、描述和资源文件，支持 `/` 快捷键。 |
| [#4358](https://github.com/Hmbown/CodeWhale/pull/4358) | **add PTY coverage for work‑surface and approval mouse interactions** | ✅ merged | 补全 PTY 测试覆盖，验证工作界面与审批流程的鼠标点击及快捷键交互。 |

*剩余的 PR 为自动化依赖项升级，不影响用户体验，因此不作重点介绍。*

---

### 5️⃣ 功能需求趋势

| 趋势方向 | 相关 Issues / PR | 社区热点 |
|------------|--------------------|------------|
| **性能与流畅度优化** | [#4270]、[#4365]、[#4367] | 流式输出卡顿、文件监听引发的 TUI 卡死 → PR [#4367] 添加壁钟预算。 |
| **配置透明化与控制增强** | [#3765]、[#4368] | 希望直接通过 `config.toml` 控制拼合、软缝合及供应商参数；#4368 要求覆写 Kimi base_url。 |
| **国际化与本地化改进** | [#4369] | 中文翻译歧义，需对“宪法”和“代码”进行自然化处理。 |
| **供应商与平台支持扩展** | [#4354]、[#4360]、[#4350] | 新增 MiniMax、Kimi 参数覆写；修复 BSD/Android 平台构建及浏览器启动问题。 |
| **计费与定价可靠性提升** | [#4318]、[#4335]、[#4351] | 离线计费 pricing 逻辑错误，缓存写入速率丢失， Scorecard 需按路由绑定价格。 |
| **用户体验修复** | [#4208]、[#4345]、[#4357]、[#4356] | 复制粘贴 Unicode 污染、密钥输入繁琐、水下界面细节补丁、执行流元数据完整性。 |
| **测试覆盖与代码质量** | [#4358]、[#4351] | 增加 PTY 测试、版本化执行流收据及工具生命周期元数据，支持重播和成本归因。 |

---

### 6️⃣ 开发者关注点

* **UI 性能问题** – 主要反馈集中在终端输出延迟和突兀输出（#4270）、文件监视 eager 扫描导致的 UI 卡顿（#4365），以及复制粘贴时包含装饰性 Unicode 字符（#4208）。

* **配置/控制缺失** – 用户期望对 `config.toml` 中软缝合和上下文拼合开关进行细粒度控制（#3765）；供应商 base_url 等自定义设置不够便捷（#4368）。

* **国际化痛点** – 中文译名混用，“宪法”一词引发歧义，影响非母语用户体验（#4369）。

* **平台兼容性差距** – Android Termux 下的构建报错（#4350）、BSD 系统浏览器启动失败（#4360）始终困扰着跨平台用户。

* **定价逻辑缺陷** – 计费模块低估写操作成本（#4318），离线 scorecard 未考虑 Provider 路由导致的定价错误（#4335）。

* **用户流程阻碍** – 密钥录入流程冗长，缺乏快捷粘贴选项（#4345）。

* **可靠性与测试覆盖** – 社区关注子代理停止控制策略模糊（#4359）、PTX 鼠标交互覆盖不足（#4358）以及执行流元数据不完整（#4356）。这些问题影响重播和支持能力。

* **技术债务** – 多个已关闭 Issues 反映出的共同主题：**配置透明度**、**性能瓶颈**和**国际化友好性**是当前用户最迫切的需求。

---

**总结**：Codewhale 目前正处于 0.8.68 版本准备阶段，各大主题的修复和增强齐头并进。性能（流式和文件扫描）、配置控制、国际化、供应商支持和定价可靠性将是短期内社区关注焦点。开发者需关注水下界面交互细节和 PTY 测试覆盖，以确保新 UI 的稳定性。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*