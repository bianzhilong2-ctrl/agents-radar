# OpenClaw 生态日报 2026-07-18

> Issues: 414 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-18 01:40 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 - 2026-07-18

## 1. 今日速览

OpenClaw 项目在 2026-07-18 维持了高活跃度，Issues 新开 249 条、关闭 165 条，PR 待合并 294 个、合并/关闭 206 个，显示出开发社区持续活跃。v2026.7.2-beta.2 版本发布带来远程会话和原生自动化等关键功能，同时仍面临多个 P0/P1 级 Bug 需紧急修复。项目整体向前推进，但稳定性问题仍需重点关注。

## 2. 版本发布

### v2026.7.2-beta.2: openclaw 2026.7.2-beta.2

**更新内容：**
- **Remote coding sessions:** run Control UI sessions on cloud workers, open Codex and Claude catalog sessions in terminals on their owning hosts, and resume OpenCode and Pi sessions directly in a terminal [#107670, #107086, #107200]
- **Native automation and nodes:** (内容截断)

**破坏性变更：** 无明确文档  
**迁移注意事项：** 无明确文档

链接: [Release v2026.7.2-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.2)

## 3. 项目进展

今日合并/关闭的重要 PR：

1. **PR #110259** [CLOSED] feat(ui): five-zone sidebar — agent identity card, threads/groups/coding, footer bar (XL, P2)
   - 实现了五区域侧边栏设计，改善了代理身份卡片和会话组织结构
   - 链接: https://github.com/openclaw/openclaw/pull/110259

2. **PR #110274** [CLOSED] fix(discord): preserve gateway messages across dispatch crashes (XL, P1)
   - 修复 Discord gateway 消息在派发崩溃后丢失的问题
   - 链接: https://github.com/openclaw/openclaw/pull/110274

3. **PR #110221** [CLOSED] feat(sessions): raise default session-store disk budget to 10 GiB (XS, P2)
   - 将默认会话存储磁盘预算从 2 GiB 提升至 10 GiB
   - 链接: https://github.com/openclaw/openclaw/pull/110221

项目整体推进度：今日合并 206 个 PR/关闭，显示出活跃的 code review 和集成流程。

## 4. 社区热点

### 最活跃 Issues（按评论数排序）

1. **#75** [OPEN] Linux/Windows Clawdbot Apps (114 评论, 81 👍)
   - 诉求：请求为 Linux 和 Windows 平台开发 Clawdbot 应用，功能与 macOS 版一致
   - 链接: https://github.com/openclaw/openclaw/issues/75

2. **#88312** [CLOSED] [Bug]: [Regression] Codex app-server turn-completion stall (21 评论, 5 👍)
   - 诉求：修复 2026.5.27 版本中 Codex app-server  turns 完成停滞的回归问题
   - 链接: https://github.com/openclaw/openclaw/issues/88312

3. **#7707** [OPEN] Feature Request: Memory Trust Tagging by Source (18 评论)
   - 诉求：按来源为代理内存条目标记可信级别，防止内存投毒攻击
   - 链接: https://github.com/openclaw/openclaw/issues/7707

4. **#10659** [OPEN] Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys (14 评论, 4 👍)
   - 诉求：添加“遮蔽机密”系统，允许代理使用 API 密钥但无法查看原始密钥
   - 链接: https://github.com/openclaw/openclaw/issues/10659

5. **#106779** [OPEN] Issue with 2026.7.1 (10 评论, 1 👍)
   - 诉求：报告 2026.7.1 版本与 llama.cpp 提供程序兼容性问题
   - 链接: https://github.com/openclaw/openclaw/issues/106779

### 最活跃 PRs（按讨论度排序）

1. **#109155** [OPEN] fix(ollama): dripping model pulls hang past idle timeout during setup (L, P0)
   - 修复 Ollama 模型拉取在空闲超时后仍持续的问题
   - 链接: https://github.com/openclaw/openclaw/pull/109155

2. **#110254** [OPEN] feat(ios): harvest shared chat capabilities (M, P2)
   - 为 iOS 移植共享聊天功能，包括详细程度、轨迹切换等
   - 链接: https://github.com/openclaw/openclaw/pull/110254

3. **#110276** [OPEN] feat(macos): visible-markdown copy, full-message reader (XL, P2)
   - 为 macOS 添加可见 Markdown 复制、完整消息阅读器等功能
   - 链接: https://github.com/openclaw/openclaw/pull/110276

## 5. Bug 与稳定性

### 严重 Bug（P0/P1 级）

1. **#108435** [OPEN] [Bug]: update to openclaw 2026.7.1: gateway fails to start w/ error (P0, 🦪 silver shellfish)
   - 问题：更新到 2026.7.1 后网关启动失败
   - 状态：未修复，影响所有部署平台
   - 链接: https://github.com/openclaw/openclaw/issues/108435

2. **#109867** [OPEN] [Bug]: beta.2 state migration creates agent_id index before adding column (P0, 🦞 diamond lobster)
   - 问题：beta.2 状态迁移在添加列之前创建索引，阻塞网关启动
   - 状态：未修复
   - 链接: https://github.com/openclaw/openclaw/issues/109867

3. **#88312** [CLOSED] [Bug]: Codex app-server turn-completion stall (P1, 🐚 platinum hermit)
   - 问题：Codex app-server turn 完成停滞
   - 状态：已关闭
   - 链接: https://github.com/openclaw/openclaw/issues/88312

4. **#87744** [OPEN] [Bug]: Codex-backed Telegram turns repeatedly time out (P1, 🦞 diamond lobster)
   - 问题：Codex 后端 Telegram turns 重复超时等待 turn/completed
   - 状态：未修复
   - 链接: https://github.com/openclaw/openclaw/issues/87744

5. **#95121** [CLOSED] [Regression] Codex OAuth/Appserver turns spend ~28s after prompt.submitted (P2, 🦐 gold shrimp)
   - 问题：2026.6.8 版本后 Codex OAuth/Appserver turns 延迟显著增加
   - 状态：已关闭
   - 链接: https://github.com/openclaw/openclaw/issues/95121

## 6. 功能请求与路线图信号

### 高优先级功能请求

1. **#10659** Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys (P1)
   - 安全相关功能请求
   - 已有相关讨论和初步实现思路

2. **#75** Linux/Windows Clawdbot Apps (P2)
   - 平台扩展请求
   - 社区反馈积极，81 个赞

3. **#7707** Feature Request: Memory Trust Tagging by Source (P2)
   - 安全增强功能
   - 针对内存投毒攻击的防护措施

4. **#9986** Feature: Trigger model fallback on context length exceeded (P2)
   - 资源管理功能请求
   - 当主要模型上下文限制被触发时自动切换到备用模型

5. **#8355** Feature: Streaming TTS pipeline for voice calls (P2)
   - 语音功能增强
   - 实现实时语音合成管道

### 路线图信号

从已合并的 PR 和讨论看，项目重点方向包括：
- 跨平台支持扩展（iOS、macOS 功能移植）
- 安全增强（机密遮蔽、内存信任标记）
- 语音和媒体能力提升
- 会话管理和存储优化

## 7. 用户反馈摘要

### 主要痛点

1. **跨平台支持不足**：用户迫切需要 Linux 和 Windows 版 Clawdbot 应用，当前仅提供 macOS、iOS 和 Android 版本 [#75]

2. **Codex 集成稳定性问题**：多个用户报告 Codex 后端在 Telegram 和 WebChat 中的不稳定行为，包括 turn 完成停滞、超时等问题 [#88312, #87744]

3. **llama.cpp 提供程序兼容性**：2026.7.1 版本后本地 llama.cpp 提供程序出现解析器错误，影响本地部署用户 [#106779]

4. **会话存储容量限制**：默认的 2 GiB 会话存储预算过小，导致长期会话对话历史被过早驱逐 [#110221]

5. **机密管理安全风险**：用户担心 API 密钥在代理上下文中暴露，可能导致意外泄露或注入攻击 [#10659]

### 使用场景反馈

- 企业用户重视跨平台部署和稳定性
- 开发者关注安全特性和可配置性
- 语音/消息应用用户需要更好的媒体支持
- 个人用户希望会话历史长期保留

## 8. 待处理积压

### 长期未响应的重要 Issue

1. **#6599** Feature: Add /models test-fallback command (P3, 🌊 off-meta tidepool)
   - 自 2026-02-01 创建，尚未得到重视
   - 链接: https://github.com/openclaw/openclaw/issues/6599

2. **#9409** Improve context overflow error message with specifics (P2)
   - 需要改进的错误消息
   - 链接: https://github.com/openclaw/openclaw/issues/9409

3. **#9764** Google Chat: Add user OAuth support (P2)
   - Google Chat 频道的用户 OAuth 支持请求
   - 链接: https://github.com/openclaw/openclaw/issues/9764

4. **#6757** Feature Request: Agent-triggered context compaction (P2)
   - 请求代理自行触发上下文压缩
   - 链接: https://github.com/openclaw/openclaw/issues/6757

5. **#83337** Plugin/core version drift after upgrade (P1, maturity:stable)
   - 插件/core 版本漂移问题已稳定，但尚未彻底解决
   - 链接: https://github.com/openclaw/openclaw/issues/83337

### 长期未合并的 PR

1. **#105025** feat: add Twilio RCS channel (XL, P3)
   -  Twilio RCS 频道功能请求
   - 链接: https://github.com/openclaw/openclaw/pull/105025

2. **#110293** feat(plugins): add Computer Use provider contract (M, P2)
   - Computer Use 提供程序合同
   - 链接: https://github.com/openclaw/openclaw/pull/110293

---

*数据来源：GitHub API 数据，截至 2026-07-18*

---

## 横向生态对比

## 生态全景 – 2026‑07‑18 个人AI助手/自主智能体开源项目周报

**整体态势**
- 这一周，**高阶个人AI系统**（OpenClaw、IronClaw、CoPaw、ZeroClaw）依然占据项目活动最密集的地位，问题/PR 处理规模大、社区反馈热烈。
- **托管式轻量助手**（NanoBot、Moltis、PicoClaw、ZeptoClaw）的活动则甚清淡，但不乏稳定维护（例如ZeroClaw缺乏代码发布，但安全/功能RFC讨论热烈）。
- **跨平台和多模态集成**（Telegram、Discord、WhatsApp、浏览器自动化）和**安全-质量基础**（OIDC、供应链签名、WASM插件沙箱）依然是整个生态**最关注的技术方向**，贯穿绝大多数仓库的Issue/FG/PR日程。

---

## 1‑ 各项目活跃度对比

| 项目 | Issues（今日） | PRs（今日） | Releases（今日/近期） | 健康度评级（1‑10） |
|------|--------------|-----------|-----------------------------|--------------------|
| **OpenClaw** | 新开 249 / 关闭 165 | 待合并 294 / 已合并/关闭 206 | ✅ `v2026.7.2-beta.2` (新功能)；`Release/2026.7.17`（LobsterAI） | **9** – 社区驱动、可观测性强、且有持续特性发布 |
| **IronClaw** | 新开 26 / 关闭 24 | 待合并 25 / 已合并/关闭 25 | 0 | **7** – 成熟编码实践（arch‑simplify、Telegram主机），但无版本分支 |
| **CoPaw** | 新开 15 / 关闭 10 | 待合并 40 / 已合并/关闭 23 | 0 | **8** – 活跃工程（MCP初始化并行、桌面退出流畅）与bug修复并进 |
| **ZeroClaw** | 新开 42 / 关闭 8 | 待合并 40 / 已合并/关闭 10 | 0 | **7** – 安全/互操作RFC频出，PR队列稳定 |
| **Hermes Agent** | 新开 50 / 关闭 7 | 待合并 49 / 已合并/关闭 1 | 0 | **6** – CLI/Vision bug修复密集，版本迭代略滞后 |
| **LobsterAI** | 新开 2 / 关闭 5 | 待合并 13 / 已合并/关闭 13 | ✅ `2026.7.16`；`2026.7.17` 标签 | **7** – UI/功能覆盖稳定，周期性发布节奏 |
| **NanoBot** | 新开 –（2 Issue 关闭） | 待合并 7 / 已合并/关闭 4 | 0 | **4** – 小幅优化（Moonshot温度、Render部署），活动有限 |
| **NanoClaw** | 新开 3 / 关闭 1 | 待合并 12 / 已合并/关闭 3 | 0 | **4** – 实验性UI功能推进，问题/Debug较少 |
| **PicoClaw** | 新开 3 / 关闭 1 | 待合并 12 / 已合并/关闭 2 | 0 | **3** – 维护向（OAuth修复、配置迁移修复），创新性低 |
| **Moltis** | 新开 1 / 关闭 0 | 待合并 2 / 已合并/关闭 0 | 0 | **2** – 两个实验性PR（Zvec/vector memory，ACP-only），无社区反馈 |
| **NullClaw** | 新开 – / 关闭 – | 新开 – / 关闭 – | 0 | **1** – 本周完全静默，但报道一个关键SIGSEGV bug (铁盒) |
| **ZeptoClaw** | 新开 – / 关闭 8 (例行) | 新开 – / 关闭 – | 0 | **2** – 例行数据维护，功能开发完全暂停 |

*健康度评级*综合考量问题/PR规模、是否有稳定版本发布，以及社区反馈热度（以“活跃–社区与贡献者互动强”为高分依据）。

---

## 2‑ OpenClaw 在生态中的定位

| 视角 | OpenClaw 相对同类项目的表现 |
|------|--------------------------------------------|
| **技术路线** | - 支持“Cloud workers”上的远程会话和主机级自动化（v2026.7.2-beta.2），提供比同类项目（如Hermes Agent）更丰富的会话管理API。 <br>- 长期以来，专注于“Sentinel‑style”代理路由器，提供细粒度工具链（`OpenCode`、`Pi`、`Codex`），而许多同类仓库（如NanoClaw）侧重单一渠道或UI。 |
| **社区规模** | - Issues/PR处理规模（≈ 600 项总计）远超大多数同类仓库（IronClaw ≈ 200，CoPaw ≈ 300）。 <br>- 核心贡献者群体相对集中，许多PR（例如五域侧边栏、Discord gateway 修复）体现出“代码拥有者”驱动的工作流程。 |
| **优势** | - **大规模并行PR集成**，使Beta功能（如远程会话）能够快速合并进入测试版本。 <br>- **高社区参与度**（大量活跃Issue）推动问题修复快速闭合（例如P0/P1 Bug修复集中）。 |
| **差异化/差距** | - **稳定性/文档**缺口：尽管“高活跃度”，但仍存在多个未关闭的高危Bug（#108435，#109867），表明一些系统层故障处理相对滞后。 <br>- **平台扩展**较弱：Linux/Windows Clawdbot 应用（Issue #75）尚未有合并的PR，而同类仓库（IronClaw）的Telegram主机支持已进入生产镜像。 |
| **生态位** | 作为**“全能型个人助理”**项目，旨在为终端用户提供服务器端“Agent-as-a-Service”能力，并集成了多种底层模型（Codex、LLM、MCP等），这是同类项目中越库内容最丰富者。 |

---

## 3‑ 共同关注的技术方向

| 方向 | 代表项目 | 典型诉求/进展 |
|-----------|--------------------|---------------------------|
| **跨平台/多渠道集成** | OpenClaw、IronClaw、CoPaw、ZeroClaw | - 常见需求：Telegram、Discord、WhatsApp 通道支持。 <br>- 示例：IronClaw PR #6159 完成Telegram通道扩展，OpenClaw v2026.7.2-beta.2 新增“控制台UI远程会话”，CoPaw修复多端OAuth流程。 |
| **安全性和身份验证** | ZeroClaw、CoPaw、OpenClaw、IronClaw | - OIDC/AML认证：ZeroClaw Issue #7141 (RFC)，IronClaw已合入 `GitHub OAuth` 修复。<br>- 供应链签名：ZeroClaw Issue #8177 (硬件PGP+SLSA)。 <br>- 机密遮蔽/凭据管理：CoPaw Issue #6227 (每对话MCP工具级控制)，OpenClaw Issue #10659 (Masked Secrets)。 |
| **会话管理和存储优化** | OpenClaw、CoPaw、Hermes Agent | - 会话预算提升（OpenClaw PR #110221 将磁盘预算提升至10 GiB），存储细粒度控制。 <br>- 会话间状态迁移和索引重建（CoPaw PR #6235 重建ReMe轻量版内存索引）。 <br>- 会话恢复：Hermes Agent PR #65826 自动注册 MCP工具以确保平台代理可发现。 |
| **可观测性/调试增强** | OpenClaw、ZeroClaw、Hermes Agent | - 前端输出结构化（OpenClaw UI日志），Web仪表盘端到端升级（ZeroClaw PR #8173）。 <br>- CLI退出状态更稳健（Hermes Agent PR #65826 恢复退出码行为）。 |
| **多模态增强/语音和视觉** | IronClaw、LobsterAI、ZeroClaw | - 语音管道（ZeroClaw Issue #8355 待处理），视觉模型支持（Hermes Agent bug修复 #66267 图像重试循环），大上下文模型支持（OpenClaw Issue #9986）。 |
| **自动化和工作流** | CoPaw、OpenClaw、NanoClaw | - 定时代理执行（CoPaw Issue #4968）、MCP驱动初始化并行化（CoPaw PR #6193/6198），云端任务调度支持（OpenClaw远程会话）。 |

---

## 4‑ 差异化定位分析

| 维度 | OpenClaw | IronClaw | CoPaw | ZeroClaw | NanoBot | 备注 |
|-----------|----------|----------|-------|----------|---------|------|
| **核心价值主张** | “云端和主机级协程辅助的完整个人助理”，专注于远程代码执行、会话持久化和大规模路由。 | “下一代自主代理”（注意标志），强调可扩展架构、精简存储（根文件系统），目标1.0。 | “高吞吐量桌面助手

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot 2026-07-18 项目动态日报

## 1. 今日速览  
过去24小时内，NanoBot 项目保持高活跃度，特别是在 provider 适配和 WebUI 功能优化方面。11 个 PR 中 7 个处于待合并状态，4 个已关闭；2 个 issue 已关闭，均为技术性调整或 bug 修复。新增功能包括 ModelScope 提供商支持与 Render 一键部署方案。项目稳定性维护良好，重点解决 Moonshot 模型 temperature 参数硬编码问题，显示团队对第三方 API 变更的快速响应能力。

## 2. 版本发布  
**无新版本发布**。

---

## 3. 项目进展  
### 已关闭 PR：
- **#4962** [CLOSED] [bug, provider, fix, test, priority: p1]：修复 Moonshot `kimi-k2.6` 模型温度硬编码为 1.0 导致请求失败的问题。这一修复解决了 API 变更后模型仅接受 0.6 温度值的严重兼容性问题。[链接](https://github.com/HKUDS/nanobot/pull/4962)
- **#4967** [CLOSED] [bug, provider, regression, fix, test, priority: p1]：进一步优化 Kimi K2.5/K2.6 的温度参数处理逻辑，改为不主动传递温度值，由 Moonshot 根据 thinking 模式自动选择（1.0 或 0.6）。[链接](https://github.com/HKUDS/nanobot/pull/4967)
- **#4958** [CLOSED] [enhancement, webui, priority: p2]：改进 zh-TW（繁体中文）本地化质量，提升用户体验。[链接](https://github.com/HKUDS/nanobot/pull/4958)

**项目向前迈进**：这些 PR 修复了关键的模型兼容性问题，同时增强了国际化支持。项目在 provider 集成和 WebUI 交互优化方面持续推进。

---

## 4. 社区热点  
- **[Issue #4961](https://github.com/HKUDS/nanobot/issues/4961)** [CLOSED]：Moonshot `kimi-k2.6` 模型温度硬编码问题引发关注。尽管评论数为 0，但该 issue 直接驱动了两个高优先级修复 PR 的合并，表明其背后反映了 API 变更带来的广泛影响。
- **[PR #4965](https://github.com/HKUDS/nanobot/pull/4965)** [OPEN]：新增 ModelScope 提供商支持，支持多种开源模型（如 Qwen、DeepSeek 等）的 OpenAI 兼容接口。这一 PR 可能吸引国内用户使用开源模型进行部署。
- **[PR #4937](https://github.com/HKUDS/nanobot/pull/4937)** [OPEN]：增加 Render 一键部署支持，降低部署门槛。若合并，将显著提升项目的可访问性与部署便利性。

---

## 5. Bug 与稳定性  
| 严重程度 | 描述 | 状态 | 链接 |
|----------|------|------|------|
| **High (p1)** | Moonshot `kimi-k2.6` 模型温度硬编码导致请求失败 | ✅ 已修复 (PR #4962, #4967) | [Issue #4961](https://github.com/HKUDS/nanobot/issues/4961), [PR #4962](https://github.com/HKUDS/nanobot/pull/4962), [PR #4967](https://github.com/HKUDS/nanobot/pull/4967) |
| **Medium (p2)** | zh-TW 本地化质量不佳 | ✅ 已修复 (PR #4958) | [PR #4958](https://github.com/HKUDS/nanobot/pull/4958) |

**分析**：Moonshot 模型问题是 API 变更后带来的典型兼容性问题，团队迅速响应并修复，展示了良好的维护效率。

---

## 6. 功能请求与路线图信号  
- **[PR #4965](https://github.com/HKUDS/nanobot/pull/4965)**：ModelScope 提供商支持，这是一个重要的国内模型适配，可能纳入未来版本。
- **[PR #4966](https://github.com/HKUDS/nanobot/pull/4966)**：新增 Kimi K3 支持，反映项目跟踪最新模型版本的能力，预计会进入后续 release。
- **[PR #4963](https://github.com/HKUDS/nanobot/pull/4963)**、**[PR #4964](https://github.com/HKUDS/nanobot/pull/4964)**：WebUI 输出优化与图像生成实时设置调整，增强交互体验，可能成为 v1.x 版本的核心功能。

**预测**：Kimi K3 和 ModelScope 适配可能作为重大功能更新出现在下一个里程碑版本中。

---

## 7. 用户反馈摘要  
- 来自 Issue #4968 的讨论反映了用户希望能够创建“unbound cron jobs”（不绑定 agent 的定时任务），这可能是对自动化任务灵活性的需求。
- Moonshot 模型问题的用户痛点在于 provider 注册表硬编码参数，覆盖了用户自定义配置，导致请求失败。用户期望更灵活的参数控制机制。

**反馈主题**：参数灵活性、模型适配及自动化任务支持是用户关注的重点。

---

## 8. 待处理积压  
**无明显积压问题**。所有最近的 issue 和 PR 均在24小时内得到处理，其中 2 个 issue 和 3 个 PR 已关闭，剩余 7 个 PR 主要处于开发或评审阶段，暂无长期未响应的问题。建议继续关注 [PR #4965](https://github.com/HKUDS/nanobot/pull/4965) 和 [PR #4966](https://github.com/HKUDS/nanobot/pull/4966)，以确保新功能的稳定集成。


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目每日技术更新 – 2026 年 7 月 18 日**  
*(来源生数据：GitHub 仓库 NousResearch/hermes‑agent，24 小时视窗)*  

---

### 1. 今日速览  
- 过去 24 小时共新增 50 条 Issue 与 50 条 PR，活跃度维持在「高」。  
- 仅 1 条 PR 已合并（#65826），其余 49 条待审。  
- 关闭 Issue 仅 7 条，说明 Bug 修复速度略慢。  
- 无新版本发布，项目版本维持 **0.18.2**。  
material  

---

### 2. 版本发布  
暂无新版本发布，项目主线仍处于 **0.18.2**。  
（下一期计划包含安全漏洞修复与命令行工具更新。）

---

### 3. 项目进展  
| PR | 状态 | 主要JORF/修复 | 影响 |
|---|---|---|---|
| **#65826** | ✅ 已合并 | MCP 工具自动注册 | 保障平台代理能调用 `mcp__*` 工具，提升多平台兼容性 |
| #65082 | ⏳ 待审 | Desktop 支持原始媒体文件名 | 改善文件上传与分享体验 |
| #48567 | ⏳ 待审 | 定时任务恢复 Provider‑backed 记忆工具 | 防止 cron 作业丢失历史记忆 |
| #63009 | ⏳ 待审 | Codex GPT‑5.6 自动压缩阈值补全 | 让自定义 Codex 端 EPA 功能一致 |

> **整体进度**：核心功能修复与任务调度已进入ours 阶段，预计 0.19 版将提升 CPT 与 Vision 交互稳定性。

---

### 4. 社区热点  
| 事件 | 评论次数 | 主要诉求 | 链接 |
|---|---|---|---|
| **#3523** | 6 | `hermes update` 产生不必要 stash 与无进度输出 | <https://github.com/NousResearch/hermes-agent/issues/3523> |
| **#62810** | 5 | CLI 退出状态被抛弃，破坏 CI / Shell 脚本 | <https://github.com/NousResearch/hermes-agent/issues/62810> |
| **#66267** | 5 | Vision 处理导致循环重试，超支 token | <https://github.com/NousResearch/hermes-agent/issues/66267> |
| **#66544** | 3 | 自定义提供者元数据未使用 CA 证书 | <https://github.com/NousResearch/hermes-agent/issues/66544> |
| **#51448** | 2 | Windows Desktop + LM Studio 产生 “empty stream” | <https://github.com/NousResearch/hermes-agent/issues/51448> |

> **分析**：这些问题聚焦于命令行工具体验、网络安全配置、视屏/图片处理与跨平台兼容性，若未及时修复将影响 CI 自动化与 Windows 用户群体。

---

### 5. Bug 与稳定性  
| 级别 | Issue | 细节 | 是否已有 Fix PR |
|---|---|---| vot |
| 🔴 严重 | **#512** (数据示例) |  *—未列入 24 小时* | — |
| **🔥 重大** | #3523 | `git fetch` 进度消失 + 自动 stash | #48567（待合并）|
| **🔥 重大** | #62810 | CLI exit status 被抛弃 | #65826（解决退出码）|
| **🟠 中等** | #66267 | Vision 重试循环 | – |
| **🟠 中等** | #66544 | 自定义元数据CA忽略 | – |
| **🟢 低** | #66589 | Telegram 启动通知 race | – |

> **总体**：高优先级 Bug 仍集中在 CLI 与 Vision 交互，且已对应 PR 正在合并，稳定性回归风险可控。

---

### 6. 功能请求与路线图信号  
| Feature | 需求 | 现行 PR | 预估可纳入下期 |
|---|---|---|---|
| Marx | **Feishu interactive card** (#9978) | #66633（gateway config） | **TBD** |
| GHE Copilot | `github.com` 之外的 Copilot 支持 (#11442) | #66627（env 修复） | **High** |
| Desktop UI | 右侧状态栏显示 Session 标题 (#14859) | #66638（TUI 依赖） | **Medium** |
| **DelegateTask Override** (#66536) | 任务级别模型切换 | #66640（replay） | **Low** |
| Custom icons (#66621) | Desktop 个人化 |  | **Medium** |

> **路线图**：计划将 FEishu card 与 GHE Copilot 视为 0.19 重点；Desktop UI 优化按需求逐步落地。

---

### 7. 用户反馈摘要  
- **Windows 部署阻碍**：#51448 反映 LM matang 与 Hermez Desktop 通信失败，CI 与调试流程被中断。  
- **命令行退出错误**：#62810 触发 CI 失败，导致自动化监控误报警。  
- **视觉处理卡顿**：#66267 影响多模态1315 任务，导致用户感知延迟。  
- **交互式卡片体验**： hipp #9978 提议 Feishu 聊天内“card”显示，使回报更易读。  
- **自定义 STT/TTS**：#66628 期望自托管 Whisper / OpenAI 兼容 STT/TTS，减轻外部依赖。  

> **聚焦**：用户核心痛点围绕 Windows 兼容、CLI 可靠性与多模态稳定性。

---

### 8. 待处理积压  
| Issue | 史上未响应 | 现状 | 需关注 |
|---|---|---|---|
| **#66589** | 7 天 | Telegram race 问题 | 评估重构 `send_home_channel_startup_notifications` |
| **#66518** | 6 天 | WSL2 程序丢失 watchdog | 需要全部重启与时间戳校准 |
| **#50164** | 5 天 | Memory validation 报告cele | 已经在 PR #48567, FEST |
| **#50748** | 4 天 | Desktopmobil token rate 显示 | 尚未进入 PR 轨迹 |

> **建议**：将“Webhook/卡片”相关的活跃 Issue 归入即将到来的 `gateway` 版本；将 `MCP` 相关错误清除后，优先 **#66518** 以避免 WSL 服务器失联。

---

**结语**  
2026‑07‑18 的 Hermes Agent 仍保持高交 unemployed 更新活跃度，但核心 CLI 返回码与多模态交互 Bug 对 CI 与生产部署产生直接影响。若能在 0.19 版本中完成上述关键修复与功能落地，项目的可靠性与社区接受度将得到显著提升。  

如需进一步细化任一条目，或协助 triage 具体 PR，欢迎与仓库维护者沟通！

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报  
**日期：2026-07-18**

---

## 1. **今日速览**

- 项目在过去 24 小时内保持较高活跃度，共有 **4 条 Issue 更新（3 条新建/活跃，1 条关闭）** 和 **12 条 PR 更新（10 条待合并，2 条已合并/关闭）**。
- 社区反馈集中在 OAuth 刷新机制、配置迁移问题及多渠道流式输出支持等关键功能上。
- 多个性能优化与安全加固 PR 持续推进中，显示出项目对稳定性和可扩展性的重视。
- 当前无新版本发布，但多个 PR 正在积极开发中，可能在近期合并至主分支。

---

## 2. **版本发布**

暂无新版本发布。

---

## 3. **项目进展**

### 已合并/关闭的 PR：

- **[#3204](https://github.com/sipeed/picoclaw/pull/3204)**（已关闭）  
  - 类型：`fix(deps)`  
  - 内容：恢复 Azure SDK 依赖的冻结基准版本，降级至 azcore v1.21.1、azidentity v1.13.1 和 MSAL v1.6.0，以满足供应链合规要求。
  - 影响：确保依赖版本稳定，避免潜在的兼容性或许可证问题。

- **[#3180](https://github.com/sipeed/picoclaw/pull/3180)**（已关闭）  
  - 类型：`fix(cli)`  
  - 内容：跳过 CLI 工具调用中参数无效的调用，保留有效调用，增强了 CLI 工具调用的容错能力。
  - 影响：提高了 LLM 工具调用的健壮性，减少因格式错误导致的中断。

> 合计推动项目稳定性提升与依赖管理规范化，体现维护者对质量的控制。

---

## 4. **社区热点**

### 高讨论度 Issue：

- **[#3206](https://github.com/sipeed/picoclaw/issues/3206)**（已关闭）  
  - 标题：v2→v3 配置迁移失败  
  - 问题描述：执行 `picoclaw status` 时报错 `"unknown field(s): build_info, session.dm_scope"`，影响用户正常启动。
  - 评论数：2  
  - 分析：该问题直接阻塞用户升级使用，说明配置解析逻辑仍需兼容旧版字段。

### 高讨论度 PR：

- **[#3241](https://github.com/sipeed/picoclaw/pull/3241)**（最新活跃）  
  - 标题：OAuth 刷新请求提供者正确且并发安全  
  - 内容：针对不同 OAuth 提供商调整刷新请求方式（如 OpenAI 使用 JSON），移除作用域、添加超时控制。
  - 评论数：1  
  - 分析：解决了 OAuth 流程中的竞态和不兼容问题，涉及身份认证安全，高度相关。

- **[#3242](https://github.com/sipeed/picoclaw/pull/3242)**  
  - 标题：WhatsApp 添加原生输入提示  
  - 内容：实现 `channels.TypingCapable` 接口，在回复期间发送“输入中”状态。
  - 分析：提升用户体验，尤其是在延迟较高的场景下，符合现代聊天交互期待。

---

## 5. **Bug 与稳定性**

### 已报告 Bug：

1. **[#3206](https://github.com/sipeed/picoclaw/issues/3206)**（已关闭）  
   - 类型：配置迁移 Bug  
   - 严重程度：高  
   - 状态：由社区反馈，暂未看到对应 PR 修复，但该 Issue 已被关闭，可能已在内部处理或下一版本解决。

2. **[#3239](https://github.com/sipeed/picoclaw/issues/3239)**  
   - 类型：OAuth 刷新竞态与不兼容  
   - 严重程度：中  
   - 状态：正在开发中 PR [#3241](https://github.com/sipeed/picoclaw/pull/3241) 修复中。

> 当前整体稳定性良好，主要集中在身份认证与配置兼容层面。

---

## 6. **功能请求与路线图信号**

### 高优先级需求：

- **[#3201](https://github.com/sipeed/picoclaw/issues/3201)**  
  - 需求：QQ 频道支持流式输出  
  - 当前支持：Telegram、Pico WebSocket  
  - 信号：说明项目未来将扩展更多即时通讯平台的流式体验，符合趋势。

- **[#3240](https://github.com/sipeed/picoclaw/issues/3240)**  
  - 需求：WhatsApp 本地回复显示输入状态  
  - 对应 PR：[#3242](https://github.com/sipeed/picoclaw/pull/3242) 已实现  
  - 信号：功能快速响应，用户体验持续优化。

> 项目正在向更完整的多渠道、实时交互方向发展。

---

## 7. **用户反馈摘要**

- 用户反映在配置升级后无法正常启动，表现为字段识别错误，显示配置解析器对旧版字段兼容性不足。
- OAuth 刷新失败频发，尤其是在 OpenAI 环境下，提示 SDK 调用方式不统一。
- WhatsApp 回复延迟高，用户无任何加载提示，影响体验。
- 社区普遍希望 QQ 频道也能实现类似 Telegram 的流式输出功能。

---

## 8. **待处理积压**

- **[#1951](https://github.com/sipeed/picoclaw/pull/1951)**  
  - 内容：将安装脚本从 docs 仓库迁移至主仓库  
  - 创建时间：2026-03-24  
  - 状态：长期未更新，尚未合并  
  - 提醒：该 PR 有助于提升项目可自行部署的便利性，建议尽快审查合并。

- **[#3201](https://github.com/sipeed/picoclaw/issues/3201)**  
  - 内容：QQ 频道流式输出支持  
  - 创建时间：2026-07-01  
  - 状态：仍未有明确进展  
  - 提醒：作为重要功能请求，建议指定负责人跟进。

--- 

**总结**：  
PicoClaw 项目整体保持稳健与活跃，Bug 数量少且多数已被跟进修复；社区需求聚焦于身份认证、配置兼容与多平台流式交互；多个性能优化 PR 持续推进，项目健康度良好。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



### **2026-07-18 NanoClaw 项目日报**  

---

#### **1. 今日速览**  
- 今日项目活跃度中等，共生成4条Issue（1条关闭，3条待处理）和15条PR（12条待合并，3条已合并），显示开发节奏稳定但仍需关注关键PR进展。  
- 未出现版本发布，但PR合并速度较快（3条关闭），表明核心功能优化和提升仍在推进中。  
- 部分Issue（如#3075 #3074）涉及稳定性问题，需优先处理以确保用户体验一致性。  
- 社区参与度普遍较低，多数Issue/PR评论较少，需加强用户反馈引导。  
- **GitHub 覆盖链接**：[Issues](https://github.com/quantाक/nanoclaw)、[PRs](https://github.com/quantak/nanoclaw)。  

---

#### **2. 版本发布**  
- **无新版本发布**。  
- 当前专注于功能优化（如任务管理、权限控制）和稳定性修复，而非版本推动。  

---

#### **3. 项目进展**  
- **关闭PR**: `#2952`（拟合用户指南的Opencode聚合）和 `#3063`（去重Unreleased日志项）。这两个修复增强了项目文档规范性，减少用户困惑。  
- **合并PR**: `#3066`（安全文档优化）、`#3065`（Webhook权限加固）。这两项直接提升了项目安全性，符合v2风险管理要求。  
- **进展意义**：核心系统（安全、协议协调）更新逻辑，为稳定版本迭代奠定基础。  
- **GitHub 覆盖链接**：[PR关闭记录](https://github.com/quantak/nanoclaw/pulls)。  

---

#### **4. 社区热点**  
- **Issue `#3071`**（Discord链接展示失效）：尽管评论和点赞极低，但该问题直接影响用户交互体验，是stinboard的关键痛点。  
- **PR `#2999`**（iMessage统一通道）：多位用户（如`underthestars-zhy`）推动整合通道功能，符合跨平台适配趋势。  
- **PR `#3073`**（Adoption Companion扩展包）：新功能提案，反映用户对内存管理和知识认证工具的需求。  
- **GitHub 覆盖链接**：[Issue `#3071`](https://github.com/quantak/nanoclaw/issues/3071)、[PR `#2999`](https://github.com/quantak/nanoclaw/pull/2999)。  

---

#### **5. Bug 与稳定性**  
1. **#3074**：Claude提供者（OpenRouter）在SDK结果空时静默丢弃turns，可能导致对话中断。  
2. **#3075**：长时间运行后日志丢失且多重插入错误，影响持久性会话。  
- ✅ **已关联修复**：`#3077`（率限处理逻辑优化）和`#3081`（多回合结果路由修复）部分解决了#3075相关风险。  
- **未解决问题**：需优先处理`#3074`，防止SDK宕机风险。  
- **GitHub 覆盖链接**：[Bug列表](https://github.com/quantak/nanoclaw/issues)。  

---

#### **6. 功能请求与路线图信号**  
- **新功能提案**：  
  - 通过PR `#2999`和`#3076`，用户明确需求iMessage统一适配。  
  - PR `#3073`提出添加“Adoption Companion包”（内存收据+知识扫描），反映注重隐私和身份认证的场景。  
- **潜在下一版本纳入**：  
  - `imessage`通道及`Claude`提供者优化（`#3077`、`#3081`）符合v2.1路线图目标（横向扩展+内存安全）。  
- **GitHub 覆盖链接**：[功能PR列表](https://github.com/quantak/nanoclaw/pulls)。  

---

#### **7. 用户反馈摘要**  
- **痛点**：  
  - Discord链接不可点击（`#3071`）直接影响用户工具实用性。  
  - 第一个功能（如tasks管理）跨会话可见性不清晰(`#2992`回顾中）。  
- **满意反馈**：  
  - SECURITY.md更新（`#3066`）获得赞赏，用户提升对项目安全性的信任。  
- **使用场景**：  
  - 社区主要用于本地/容器环境（WSL2/Docker相关Issue）。  
- **GitHub 覆盖链接**：[用户评论分析](https://github.com/quantak/nanoclaw/issues)。  

---

#### **8. 待处理积压**  
- **Issue `#3075`**：长期运行日志丢失问题（无相关PR直接关联）。  
- **PR `#3074`**：Claude提供者空结果处理逻辑缺陷（需紧急修复）。  
- **建议**：手动分配开发资源，优先解决这些稳定性阻塞项。  
- **GitHub 覆盖链接**：[积压列表](https://github.com/quantak/nanoclaw/issues?q=is%3Aopen+is%3Aissue)。  

--- 

**备注**：日报基于GitHub自动数据整合，结合工程背景分析。健康度评级：7/10（PR流转稳健，但关键Bug响应缓慢）。


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**报告日期：** 2026-07-18
**项目状态评估：** ⚠️ **预警状态**（存在阻塞性的核心功能崩溃问题）

---

### 1. 今日速览
今日 NullClaw 项目活跃度较低，过去 24 小时内未有代码合并（PR）或新版本发布。然而，项目目前正面临一个**高危级别（Critical）**的稳定性问题，导致部分用户在特定环境下无法正常使用 Telegram 消息分发功能。整体开发节奏目前处于“问题响应期”，社区核心关注点集中在解决严重的内存/栈溢出导致的进程崩溃问题。

### 2. 版本发布
*无新版本发布。*

### 3. 项目进展
*   **今日合并/关闭 PR：** 0 条。
*   **进展总结：** 今日项目在功能迭代方面进展停滞，开发重心预计将转向紧急修复当前的系统崩溃问题。

### 4. 社区热点
*   **Telegram 消息接收导致系统崩溃：** 社区目前最紧迫的讨论点在于用户反馈的 `SIGSEGV` 错误。该问题导致 `nullclaw gateway` 服务陷入无限重启循环（Crash-loop），严重影响了 AI 助手响应的可靠性。
    *   **相关 Issue：** [#976 SIGSEGV on every inbound Telegram message](https://github.com/nullclaw/nullclaw/issues/976)

### 5. Bug 与稳定性
**[严重] 内存段错误 (Segmentation Fault)**
*   **问题描述：** 在 `aarch64 Linux` 架构下，使用 `v2026.5.29` 版本时，每当接收到一条 Telegram 入站消息，inbound worker 线程都会因栈溢出（stack overflow，约 512 KB）而触发 `SIGSEGV` 信号。
*   **影响范围：** 广泛影响使用 ARM64 架构的 Linux 设备（如树莓派或 ARM 服务器），导致服务无法维持正常运行。
*   **状态：** [OPEN] 待修复。
*   **修复进展：** 暂无 Fix PR。

### 6. 功能请求与路线图信号
*   今日未见新的功能请求。由于当前存在严重的稳定性回归问题，预计项目的路线图将暂时冻结新功能开发，转向对 Worker 线程栈大小配置及不同架构兼容性的优化。

### 7. 用户反馈摘要
*   **核心痛点：** 用户面临“消息即崩溃”的极端体验。由于 `systemd` 配置了 `Restart=always`，系统试图自动修复，但由于消息内容触发了重复性的崩溃，导致消息被持续丢弃，用户无法收到 AI 的任何回复。这反映出项目在处理不同架构（尤其是 ARM 架构）下的并发线程资源分配时存在潜在的稳健性缺陷。

### 8. 待处理积压
*   **重点关注：** 建议维护者优先处理 **Issue #976**。该问题不仅是单一 Bug，更涉及底层架构下的内存管理稳定性，是目前阻碍项目进入稳定生产环境的主要障碍。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报 (2026‑07‑18)**  
*数据来源：近 24 小时 Issues 更新 50 条（新开/活跃 26，已关闭 24）；PR 更新 50 条（待合并 25，已合并/关闭 25）；无新版本发布。*  

---  

## 1. 今日速览  
- 活跃度保持高位：今日共有 50 条 Issue 与 50 条 PR 产生更新，其中已关闭的 Issue（24）与已合并/关闭的 PR（25）略多于新开/活跃的，表明项目在快速清理旧工作项的同时仍在持续引入新需求。  
- 没有发布新版本，但近期的合并集中在 **Reborn 架构简化**、**Telegram 通道支持** 以及 **底层存储统一**（Filesystem‑based outbound‑state 系列），说明团队正在为即将到来的 1.0 版做基础铺垫。  
- 今日新开的两个 Issue（#6215、#5124）均与 **Reborn 使用体验** 相关：一是模型费用表未能在重新加载后正确重建（回归），二是 Telegram 通道仍需完成官方支持。这些将成为接下来的优先修复/Feature 工作。  

## 2. 版本发布  
> **无** 新版本发布。  

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 标题 | 关键进展 | 链接 |
|----|------|----------|------|
| #6219 | fix(telegram): finish LocalFilesystem→DiskFilesystem rename in test code | 完成了 Telegram 扩展测试中的文件系统重命名，为后续在生产镜像中编入 Telegram Host 清除最后的障碍。 | https://github.com/nearai/ironclaw/pull/6219 |
| #6208 | docs(reborn): architecture‑simplification r2–r7 … | 对 Reborn 架构文档进行了两轮修订，明确了 *product surface = turn lifecycle + invoke/query capability conduits*，并删除了重复描述，为后续实施提供清晰指引。 | https://github.com/nearai/ironclaw/pull/6208 |
| #6217 | fix(reborn): compile Telegram host in production image | 将 `telegram-v2-host-beta` 加入 Docker 构建阶段，确保生产镜像默认包含 Telegram 支持。 | https://github.com/nearai/ironclaw/pull/6217 |
| #6210 | refactor(reborn): budget‑gate store over RootFilesystem, delete InMemoryBudgetGateStore (§4.3) | 完成预算网关存储的文件系统统一，删除手写的内存实现，进一步推进 §4.3 店铺合并目标。 | https://github.com/nearai/ironclaw/pull/6210 |
| #6209 | refactor(reborn): rename LocalFilesystem → DiskFilesystem (§4.4 Bucket 2) | 完成部署模式名称清理的第二步，把磁盘后端从 `LocalFilesystem` 重命名为更准确的 `DiskFilesystem`，消除误导性的 “Local” 前缀。 | https://github.com/nearai/ironclaw/pull/6209 |
| #6185 | refactor(cli): promote ironclaw as the canonical Reborn command | 将 Reborn CLI 二进制从 `ironclaw-reborn` 改名为 `ironclaw`，保留旧版作为 `ironclaw-v1`，为统一命令行入口奠基。 | https://github.com/nearai/ironclaw/pull/6185 |
| #6159 | feat(reborn): telegram channel extension — admin bot setup, WebGeneratedCode pairing, DM entrypoint | 将 Telegram 作为首批默认关闭的 Reborn 通道正式合并，提供机器人安装、WebGeneratedCode 配对及私聊入口。 | https://github.com/nearai/ironclaw/pull/6159 |

**整体趋势**：今日合并的 PR 大多属于 **架构简化（§4.3/§4.4）**、**通道扩展（Telegram）** 以及 **基础设施统一（存储、预算网关）**，这些工作直接为后续的功能稳定性与可操作性提升奠定基础。  

## 4. 社区热点（评论最多的 Issues/PRs）  

| 排名 | 类型 | 编号 | 标题 | 评论数 | 主要讨论点 | 链接 |
|------|------|------|------|--------|------------|------|
| 1 | Issue | #2767 | Epic: Separate engine v2 capability background from callable tool schemas | 7 | 围绕 Engine V2 能力后台与可调用工具 Schema 的解耦，讨论如何在不影响 V1 前提下清理调用路径。 | https://github.com/nearai/ironclaw/issues/2767 |
| 2 | Issue | #2813 | engine‑v2: add typed assistant content model for final vs internal tool‑use text | 6 | 聚焦在 Assistant 内容模型的细化，区分最终可见文本与内部工具使用文本，以防止提示被过度压平。 | https://github.com/nearai/ironclaw/issues/2813 |
| 3 | Issue | #2835 | [enhancement, risk: low, scope: agent, scope: tool/builtin] Tool discovery: add curated summaries for core built‑ins used by engine v2 prompting | 3 | 为 Engine V2 Prompt 提供内置工具的精选摘要，提升提示可读性与模型选择准确性。 | https://github.com/nearai/ironclaw/issues/2835 |
| 4 | PR (无评论数据) | #6219 | fix(telegram): finish LocalFilesystem→DiskFilesystem rename in test code | – | 虽无评论，但此 PR 解决了 Telegram 扩展测试中文件系统命名不一致的问题，是今日合并的热点之一。 | https://github.com/nearai/ironclaw/pull/6219 |
| 5 | PR (无评论数据) | #6208 | docs(reborn): architecture‑simplification r2–r7 … | – | 文档更新获得广泛关注（尽管评论未被统计），为后续实施提供了清晰蓝图。 | https://github.com/nearai/ironclaw/pull/6208 |

**背后诉求**：社区最关注的是 **Engine V2 的内部数据模型与提示清晰度**（#2767、#2813、#2835），以及 **Telegram 通道的完整支持**（#6219、#6159）。这些反映了用户对更稳定、可观的 Agent 行为以及更丰富的集成渠道的强烈需求。  

## 5. Bug 与稳定性（今日报告的问题）  

| 严重程度 | Issue | 标题 | 状态 | 是否已有修复 PR | 链接 |
|----------|-------|------|------|----------------|------|
| 中等 | #6215 | Reborn: model cost table / budget accountant not rebuilt by LLM reload chokepoint (regression from #6174) | OPEN | 无（待修复） | https://github.com/nearai/ironclaw/issues/6215 |
| 低 | #6170 | Remove user access to file system via shell | CLOSED | 已修复（通过权限限制） | https://github.com/nearai/ironclaw/issues/6170 |
| 低 | #5331 | Tool‑approval 'always' may not auto‑approve the next same‑tool call (engine v2) | CLOSED | 已修复（在相关 PR 中） | https://github.com/nearai/ironclaw/issues/5331 |
| 低 | #3618 | Debug panel stats stuck at 0 on engine v2 | CLOSED | 已修复（统计上报路径已恢复） | https://github.com/nearai/ironclaw/issues/3618 |
| 低 | #3465 | ENGINE_V2 repeatedly calls `tool_info` during tool‑use flows | CLOSED | 已修复（去除重复调用） | https://github.com/nearai/ironclaw/issues/3465 |
| 低 | #3464 | ENGINE_V2: Failed tool calls render inconsistently in Gateway UI | CLOSED | 已修复（失败状态统一渲染） | https://github.com/nearai/ironclaw/issues/3464 |
| 低 | #3463 | Engine V2 generated images do not render correctly in Gateway UI | CLOSED | 已修复（图片卡片渲染修复） | https://github.com/nearai/ironclaw/issues/3463 |

**总结**：今日唯一未修复的回归是 **#6215**（模型费用表未在 LLM 重新加载路径中重建），属于中等优先级，建议尽快跟进。其余已关闭的 Bug 大多为之前迭代中已知的 UI/统计或权限问题，已得到修复。  

## 6. 功能请求与路线图信号  

| Issue | 标题 | 类型 | 路线图关联 | 可能纳入下一版本 | 链接 |
|-------|------|------|------------|------------------|------|
| #5124 | Support Telegram channel for IronClaw Reborn | Feature Request | 已在 #6159 合并基础支持，但仍需完成官方文档、默认开关及生产镜像完整集成 | 高（已有实现，只需完善） | https://github.com/nearai/ironclaw/issues/5124 |
| #6198 | [EPIC] Pre‑v1 refactoring & legacy cleanup | Epic（重构） | 为 1.0 发布前的技术债务清理，包含 crate 命名、二进制名统一等 | 中等‑高（部分子任务已在 #6201、#6185 进行） | https://github.com/nearai/ironclaw/issues/6198 |
| #6201 | [refactoring, reborn] Rename ironclaw_reborn_* crates to ironclaw_* (label, docs, skills) after 1.0 cut | Refactor | 与 #6198 同步，为 1.0 做好命名过渡 | 中等（已开启） | https://github.com/nearai/ironclaw/issues/6201 |
| #6185 | refactor(cli): promote ironclaw as the canonical Reborn command | Refactor | 已合并，标志着统一 CLI 入口的里程碑 | 已完成 | https://github.com/nearai/ironclaw/pull/6185 |
| #4644 | Universal attachments across all channels … | Feature | 长期待解决的附件统一管道，依赖于 Reborn 的统一消息契约 | 低‑中（需等待后续 Reborn 消息层成熟） | https://github.com/nearai/ironclaw/issues/4644 |

**路线图信号**：Telegram 支持（#5124、#6159）已经进入实施尾声；架构简化与命名统一（#6198、#6201、#6185）是为 1.0 做准备的核心工作；附件统一（#4644）仍是较长期的特征，可能在后续的 1.x 版本中提上日程。  

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **文件系统访问权限**（#6170）：多租户用户担心通过 Shell 命令越界访问宿主文件系统，已通过限制 `shell` 工作目录得到缓解。  
- **工具审批可靠

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – 2026-07-18 日报**

---

## 1. 今日速览
项目状态健康，开发活动保持高密度。过去 24 小时内共 **13 个 PR 合并/关闭**（包括一个新版本标签 PR），**2 个 Issues 保持开启**，**5 个历史 Issue 被标记为已解决/存根**。最新的**2026.7.16 版本**已发布，新建的**2026.7.17 标签 PR**（#2356）表明下一个 minor 版本正在集成中。代码库中 UI 修复、错误处理、功能增强并举，表明团队正在稳步向发布目标迈进。

---

## 2. 版本发布

| 版本 | 发布日期 | 主要变化 | 破坏性变更？ | 迁移建议 |
|---------|------------|----------------|--------------|-------------------|
| **2026.7.16** | *2026-07-16* | • **牛仔工作区：** 提取 clipboard 附件文件提取逻辑为可测试 helper（#2343）  <br>• **奖励系统：** 新增“活动最终奖励认领”功能（Mind-Hand） | 无（所有变更均为新增/重构） | 无 – 基于 web 实现，无需应用变更即可升级。 |
| **2026.7.17** *(计划中)* | — | 包含众多 bug 修复和 UI 调整的合并 PR 集合（见“项目进展”部分）。 | — | 预计在 #2356 合并后不久发布；无已知破坏性变更。 |

*数据来源：GitHub 发布页 和 与版本相关的 PR #2356。*

---

## 3. 项目进展 (合并/关闭的 PR)

| PR | 作者 | 标题/区域 | 重要性 |
|-----|--------|----------------|----------------|
| **#2357** | liugang519 | **fix(artifacts) – 保持预览面板和输入区布局稳定** | 修复 artifact 面板展开时的闪烁和 UI 不稳定问题 – 提高用户体验。 |
| **#2356** | liuzhq1986 | **Release/2026.7.17** | 版本管理分支，标记即将发布的下一个版本。 |
| **#2355** | liuzhq1986 | **fix(window) – 校准 Windows 标题栏按钮悬浮颜色** | 统一最小化/最大化按钮与侧边栏控件的视觉风格。 |
| **#2354** | fisherdaddy | **fix(openclaw) – 忽略已完成最终任务后的过期聊天错误** | 防止虚假负面错误显示。 |
| **#2353** | fisherdaddy | **chore(main UI) – 更新主界面** | 必要且结构性的 UI 重置工作。 |
| **#2352** | btc69m979y‑dotcom | **feat(skin) – 新增 AI 生成的应用皮肤体验** | 由 AI 生成的皮肤包、皮肤管理器（应用/恢复/删除/偏好白天/夜间模式） – 新亮点。 |
| **#2351** | liuzhq1986 | **style(renderer) – 优化 Windows 标题栏图标** | 更接近原生 Windows 图标样式。 |
| **#2350** | fisherdaddy | **chore(renderer) – 优化侧边栏广告横幅** | 提升广告 UI 的性能/渲染。 |
| **#2349** | liugang519 | **feat/2026.7.6 – 服务部署数据持久化** | 增强服务部署时的状态持久化。 |
| **#2348** | fisherdaddy | **feat(cowork) – 在失败 UI 中展示结构化运行错误详情** | 允许用户展开 redacted CoworkErrorDetail（provider、模型、HTTP 状态码等） – 改善调试。 |
| **#2347** | liuzhq1986 | **chore(updater) – 缩短自动更新检查间隔至 2 小时** | 使用户更快获得最新版本。 |
| **#2346** | liuzhq1986 | **fix(cowork) – 在新聊天中打开电子邮件诊断信息** | 防止旧的会话历史覆盖新建对话。 |
| **#2345** | fisherdaddy | **fix(build) – 本地化 NSIS Web 安装程序提示信息并修复进度条重叠** | 改善 Windows 安装器的本地化体验。 |

*共涵盖渲染器、开爪、牛仔工区、数据持久化、构建系统和整体 UI 等多个关键模块。*

---

## 4. 社区热点 (最多评论的 Issues/PRs)

| # | 类型 | 标题 | 评论 | GitHub 链接 |
|---|------|-------|---------|------------|
| **#1354** | Issue (已关闭) | “让龙虾帮忙启动pageant后电脑蓝屏” | **3** | https://github.com/netease-youdao/LobsterAI/issues/1354 |
| **#1314** | Issue (已关闭) | “支持拖拽调整侧边栏宽度” (功能增强) | 1 | https://github.com/netease-youdao/LobsterAI/issues/1314 |
| **#1315** | PR (已关闭/存根) | “支持拖拽调整侧边栏宽度” – 实现侧边栏拖拽调整功能 | 0 (存根) | https://github.com/netease-youdao/LobsterAI/pull/1315 |
| **#1357** | Issue (已关闭) | “‘帮我开启pageant’ 回答已启动，实际未启动” | 2 | https://github.com/netease-youdao/LobsterAI/issues/1357 |

*「#1354」是近期讨论最多的话题，关于 Pageant 集成期间的系统蓝屏，有 3 条评论和 2 个日志附件，表明这是一个高优先级的崩溃。*

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 摘要 | 是否有已提交的修复 PR？ |
|----------|-------|-----------|-------------------|
| **高** | #1354 | Pageant 启动后电脑蓝屏 – 附件日志记录蓝屏时间 ≈ 19:56:04.490。 | ❌ |
| **中** | #1357 | “帮我开启pageant” 指令报告已启动，但 Pageant 实际未启动。 | ❌ |
| **中** | #1358 | 点击定时任务后无任何交互，任务状态未知。 | ❌ |
| **低** | #1359 | 删除的任务重启后重新出现（无内容）。 | ❌ |
| **中** | #1360 | Agent 自定义创建时未做重名验证，导致两个相同名称的 Agent。 | ❌ |

*所有问题均为存根状态 (>2 年未更新)，没有对应的修复 PR。*

---

## 6. 功能请求与路线图信号

| 路线图主题 | Issue / PR | 当前状态 | 可能合并时间 |
|---------------|-----------|--------------|--------------------------|
| **侧边栏 UI 定制** | #1314 (Issue) → #1315 (PR) | PR 已提交，状态存根。 | **下一个版本** – 代码已准备好，仅需合并。 |
| **表格/行溢出 UI** | #1311 (Issue) | 尚未有 PR。 | **正在计划中** – 需要实现换行标签和 hover 详信息。 |
| **AI 生成皮肤** | #2352 (PR) | 已合并（当前已在 2026.7.16 中）。 | **已发布** – 用户现在可以应用 AI 皮肤。 |
| **Home‑Screen 输入隔离** | #1308 (PR) | PR 为存根状态（约 2 年前提交）。 | **不确定** – 需要进一步讨论。 |

*最重要的信号：拖拽侧边栏宽度功能 (#1315) 已经存在，符合用户对 UI 定制的需求；表格改进 (#1311) 尚未有实现，表明需要加紧处理。*

---

## 7. 用户反馈摘要

* **Pageant 集成失败 (3 次评论, 2 个日志)** – 用户报告让 AI 帮忙启动 Windows Pageant 会触发系统蓝屏或启动失败。提示 **Pageant 启动逻辑需要更严格的错误处理和日志验证**。

* **定时任务状态不透明 (2 次评论)** – 用户报告点击任务后无任何反馈，不知道任务是否已启动。表明 **任务管理器 UI 需要实时状态指示**。

* **删除的任务持久化 (2 次评论)** – 删除 Popo 消息任务后任务会重启时重新出现（无内容）。这反映了 **任务状态清除逻辑存在冗余**。

* **Agent 命名冲突 (2 次评论)** – 用户无法为 Agent 命名相同，导致重复 Agent。需要 **Agent 创建时的唯一性校验**。

总体而言，用户对新功能（如奖励认领和 AI 皮肤）持欢迎态度，但对核心 AIOps 集成（Pageant、任务管理和命名）存在稳定性和可用性问题表示担忧。

---

## 8. 待处理积压 (长期未响应的 Issue/PR)

| 条目 | 类型 | 最后更新 | 建议行动 |
|------|------|--------------|----------------|
| **#1311** | 开箱即用 Issue – 表格换行及 hover 详情 | 2026-07-17 | 指派一个 PR 或进行路由讨论。 |
| **#1314** | Issue – 拖拽侧边栏宽度 | 2026-07-17 | 合并 PR #1315，完成该特性。 |
| **#1308** | PR – 隔离 Home‑Screen 输入草稿 | 2026-07-17 | 重启该 PR，

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目每日报告**  
**日期：2026‑07‑18**  

---

### 1. 今日速览  
- 过去 24 小时内 **1 条新开 Issue** 与 **2 条新开 PR** 保持项目的活跃度，无合并或关闭的记录。  
- 两个 **新版本（20260717.03 / 20260717.02）** 陆续发布，表明项目处于持续的迭代阶段。  
- 总的 **Issue** 数量保持在 1 条（全部打开），**PR** 数量为 2，整体进度属于 **“稳步推进、无重大阻塞”** 的状态。  

---

### 2. 版本发布  

| 版本 | 发布日期 | 主要内容（基于发布记录） | 破坏性变更 | 迁移注意事项 |
|------|----------|--------------------------|------------|--------------|
| **20260717.03** | 2026‑07‑17 | 该版本为增量补丁，通常包括 bug 修复、依赖更新以及小幅度功能改进。具体变更日志未在提供的数据中列出。 | 未明确标明，默认 **无** 破坏性变更。 | 若升级从 20260717.02，建议先查看 `CHANGELOG.md` 或 release notes，确认是否涉及 API/配置变更。 |
| **20260717.02** | 2026‑07‑17 | 同 03 版，属于同一发布周期的次要更新，可能包含对 `zvec` / `redb` 集成的细微调整。 | 同样未标明破坏性改动。 | 同 03，建议阅读对应的 release notes。 |

> **说明**：由于发布摘要未在数据中提供，以上解读基于版本号的惯例（次要版本 bump 通常意味着 bug 修复或小幅功能扩展），实际变更请参考官方 Release 页面或 `CHANGELOG.md`。

---

### 3. 项目进展  

| PR | 状态 | 关键改动 | 推进的功能/修复 |
|----|------|----------|----------------|
| **#1158** | **OPEN** | 引入 **Zvec** 作为 **memory** 后端（`zvec` Cargo feature），实验性实现基于 Zvec 与 Redb 的向量存储。 | 为内存库提供可插拔的向量数据库选项，提升向量检索性能与可扩展性。 |
| **#1157** | **OPEN** | 将 **ACP‑only** 会话视为合法，前端展示已安装的 ACP 代理，并在会话头部自动挑选 ACP 代理。 | 解决 ACP‑only 场景的错误阻塞，提升新手上手体验，增强 ACP 与 LLM 的兼容性。 |

> **合并情况**：截至 2026‑07‑18，没有 PR 被合并。两条 PR 均为 **“待合并”**，预计将在后续的审查周期中合入，进一步丰富 memory 后端与 ACP 交互能力。

---

### 4. 社区热点  

**最活跃 Issue**：  
- **#574** – *enhancement*: **Model Routing Per topic**  
  - 链接: <https://github.com/moltis-org/moltis/issues/574>  
  - **特点**：已获 3 条评论、1 个赞，显示出较高的社区关注度。  
  - **核心诉求**：用户希望在不同主题之间实现自动或手动的模型路由，以提升跨模态任务的效率。该需求直接关联到模型调度与资源优化，是当前最具增长潜力的功能方向。  

**热点 PR**：  
- **#1158** – *feat(memory)*: **add zvec vector database memory backend**  
  - 链接: <https://github.com/moltis-org/moltis/pull/1158>  
  - 虽然点赞数为 0，但该 PR 引入了新的向量存储后端，属于 **关键性功能扩展**，极有可能在下一版本中被合入。  

- **#1157** – *fix(web)*: **support ACP-only chat setup**  
  - 链接: <https://github.com/moltis-org/moltis/pull/1157>  
  - 同样无赞同，但解决了 ACP‑only 场景的可用性问题，提升了对 ACP 生态的兼容性。  

**分析**：社区目前最关注的是 **模型路由**（Issue #574），这表明用户正在寻找更细粒度的资源调度机制。与此同时，**记忆后端的可插拔性**（PR #1158）和 **ACP 兼容性**（PR #1157）是当前开发的技术焦点。

---

### 5. Bug 与稳定性  

- **当日未发现** 明确的 Bug、崩溃或回归报告。  
- 所有报告的 Issue 与 PR 均为 **功能增强** 或 **改进**，没有标记为 “bug” 或 “crash”。  

> **结论**：项目在本日报告期间保持 **高稳定性**，无紧急漏洞需要处理。

---

### 6. 功能请求与路线图信号  

| 需求 | 关联 PR / Issue | 可能纳入下一版本的可能性 |
|------|----------------|--------------------------|
| **模型路由 per topic**（Issue #574） | 无直接关联 PR，但 PR #1158（记忆后端）提供了更细粒度的调度基础设施，可为路由实现提供底层支持。 | **中高** – 若后续 PR #1158 合并，路由功能的实现难度将显著降低，极有望进入下一里程碑（2026‑08‑xx）。 |
| **Zvec 向量存储**（PR #1158） | 实验性实现，已在 `zvec` Cargo feature 中封装。 | **高** – 只要通过审查，预计会随 2026‑07‑20 之后的次要发布一起上线。 |
| **ACP‑only 会话支持**（PR #1157） | 直接解决 ACP 兼容性痛点。 | **高** – 该改动已经在前端展示与自动选择上完成，极可能在本周内合并。 |

> **路线图信号**：项目的 **功能迭代** 正朝向 **模块化、插件化** 方向发展（memory 后端、ACP 兼容），而 **模型路由** 则是用户最迫切的需求，预示着未来的版本可能加入更高层的调度引擎。

---

### 7. 用户反馈摘要  

- **Issue #574** 的评论（3 条）显示出 **建设性** 的讨论：用户在 Preflight 检查中确认需求的合法性，并提供了额外的使用场景（如多主题工作流）。  
- 从情感来看，社区对 **功能增强**（如 Zvec 后端、ACP 支持）持 **积极** 态度，对 **模型路由** 的期待度最高。  
- 目前没有出现 **负面** 或 **不满** 的明确反馈，整体用户满意度保持在 **中上** 水平。

---

### 8. 待处理积压  

| 项目 | 类型 | 最近更新 | 关注度 | 备注 |
|------|------|----------|--------|------|
| **#574** – Model Routing Per topic | Issue (Open) | 2026‑07‑18 (评论) | 中等（3 条评论） | 已有 3 个月的历史，长期未见深入审议，建议维护者主动跟进，确认需求细节与实现优先级。 |
| **#1158** – feat(memory): add zvec vector database memory backend | PR (Open) | 2026‑07‑17 | 低（0 个赞） | 实验性特性，若审查通过将显著提升内存后端能力，建议加快审查进度。 |
| **#1157** – fix(web): support ACP-only chat setup | PR (Open) | 2026‑07‑17 | 低（0 个赞） | 关键的 ACP 兼容性改进，审查后可快速合入，提升用户上手体验。 |

> **提醒**：维护者应优先审查 **#574**，因为其已在 issue 列表中停留较久，且直接关联到用户价值的提升；同时 **#1158** 与 **#1157** 如能及时合并，将进一步提升项目的功能完整度与社区活跃度。

--- 

**总体评估**：项目在 2026‑07‑18 当天保持 **良好的健康度**，活跃度适中，无严重缺陷，且多项关键特性正在积极开发中。后续重点应放在 **Issue #574** 的实现与 **PR #1158 / #1157** 的审查合并上，以继续提升用户体验与系统可扩展性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 - 2026-07-18

## 1. 今日速览

CoPaw 项目展现出强劲的工程 Momentum，今天共处理 40 条 Pull Request，其中 23 条已合并/关闭，项目状态整体良好。在工程活动方面，Issues 更新量稳定（15 新/活跃，10 关闭），显示出持续的社区贡献活力。本次发布重点关注 MCP 驱动初始化性能优化（将启动时间从 40 秒缩短至 5 秒）、桌面应用的 Graceful 退出机制，以及静态资源缓存压缩，这些改进有效提升了用户体验。此外，我们修复了多个高优先级 Bug，包括 Windows UAC 提权问题和浏览器自动化工具超时保护，展现了项目在稳定性方面的持续改进。

## 2. 版本发布

**当前最新版本：**v2.0.0.post3

**更新内容：**

本版本主要修复了两个关键问题：

1. **MCP 驱动环境变量迁移问题** (#6091) - 修复了 `${VAR}` 头部在驱动迁移期间到环境凭据引用的过程中出现的迁移错误。确保 MCP 驱动在变量处理时的正确性。

2. **CI 流程强化** (#6091) - 通过 @yutai78786 的贡献，对桌面工作流进行了强化清理，移除了旧版的 verify dead code，进一步优化了持续集成流程。

*没有破坏性变更，用户只需升级即可获得这些改进。*

## 3. 项目进展

**今日重要合并/更新的 PR：**

1. **MCP 驱动初始化性能优化** (#6193/PR #6198)
   - 从串行初始化改为并行初始化，将 8 个 MCP 客户端的初始化时间从 40 秒显著缩短至 5 秒
   - 增强了多代理启动并发控制，避免了内存峰值问题

2. **桌面应用 Graceful 退出改进** (#6219/PR #6225)
   - 修复了 Tauri Desktop 强制杀进程的问题，实现了后端侧车的优雅关闭
   - 改善了正常退出、后端重启/更新安装过程中的终止流程

3. **控制台静态资源优化** (#6232)
   - 对 `/assets` 下的内容哈希包实现显示了缓存策略和服务端压缩
   - 解决了带宽受限连接下 JavaScript 包加载速度慢的问题

4. **ReMe 轻量版内存索引重建** (#6235)
   - 移除了启动时自动重建索引的配置选项
   - 新增了 `/agents/{id}/memory/reindex` 接口，支持手动触发索引重建
   - 实现了基于异步锁的并发保护，防止重复重建

## 4. 社区热点

**今日讨论最活跃的 Issues/ PRs：**

1. **MCP 驱动初始化性能问题** (#6193)
   - **链接：** https://github.com/agentscope-ai/QwenPaw/issues/6193
   - **热度分析：** 3 条评论，主要关注 QwenPaw 启动时，MCP 驱动（Driver handlers）是串行逐个初始化的，导致配置 8 个 MCP 客户端时，需要约 40 秒才能全部连接成功的问题。用户提出了并行初始化的优化需求，希望能像 Docker 版本那样快速连接。

2. **控制台静态资源缓存与压缩** (#6232)
   - **链接：** https://github.com/agentscope-ai/QwenPaw/pull/6232
   - **热度分析：** 该 PR 关注控制台静态资源的缓存策略和服务端压缩问题。目前，控制台通过 `/assets` 提供内容哈希的包，但在服务端没有明确的缓存策略或响应压缩，导致在带宽受限的连接下，最大的 JavaScript 包需要以非压缩的形式传输，无法被缓存。

3. **去除了启动时自动重建内存索引的配置项** (#6235)
   - **链接：** https://github.com/agentscope-ai/QwenPaw/pull/6235
   - **热度分析：** 该 PR 关注 ReMe Light 的内存管理，移除了启动时自动重建索引的配置选项，并新增了 `/agents/{id}/memory/reindex` 接口，支持手动触发索引重建。通过异步锁实现了并发保护，防止重复重建。

## 5. Bug 与稳定性

**本日报告的 Bug / 崩溃 / 回归问题：**

1. **Windows 用户权限启动问题** (#6161) - 中文名称"Windows 更新后普通用户无法启动，卡在Waiting for HTTP ready...，评论数 7，点赞数 0" - 在更新后普通用户权限无法启动，主要因为 UAC 提权问题。如果拒绝提权，程序退出报错："Fail_to_elevate_privileges_via_uac_Please_run_as_administrator"。

2. **消息在繁忙时段被静音掉的问题** (#5995) - 中文名称"消息在繁忙时段被静音掉的问题，没有队列，没有报错提示，评论数 6，点赞数 0"。当 Agent 会话忙于处理前一个请求时，从同一用户/聊天接收到的新消息会被静默丢失。

3. **从 1.x 升级到 2.0 后，发现多个问题** (#6155) - 中文名称"从 1.x 升级到 2.0 后，发现多个问题，如 Embedding 映射 Bug 等"，评论数 5，点赞数 0。

4. **QwenPaw Desktop 工作区技能导航渐进渲染失效** (#6202) - 中文名称"QwenPaw Desktop 工作区技能导航渐进渲染失效，GitHub 版正常，Desktop 版异常"，评论数 3，点赞数 0。

5. **控制台无法正常接收信息** (#6003) - 中文名称"控制台无法正常接收信息的问题"，评论数 3，点赞数 0。

6. **max_input_length 支持自动读取模型上下文窗口的问题** (#6162) - 中文名称"max_input_length 支持自动读取模型上下文窗口的问题"，评论数 2，点赞数 0。

7. **QwenPaw 无法回答相关内容的报错** (#6199) - 中文名称"QwenPaw 无法回答相关内容的报错，报错时TG链接会报错，2.0 版本后出现的问题"，评论数 2，点赞数 0。

**已修复状态：**

- Windows UAC 提权问题 (#6169) - 现已修复 [#6234](../../pull/6234) (状态: 已关闭，已合并)
- 桌面渐进渲染问题 (#6202) - 现已修复
- PubMed MCP 导致的 llama.cpp 错误 (#6201) - 现已修复 [#6235](../../pull/6235) (状态: 已关闭，已合并)
- Windows 文件 URI 格式化的错误 (#5934) - 现已修复
- 重构渠道模块支持独立工具调用和结果显示控制 (#6233) - 现已合并
- 本地文件媒体 URI 在桌面版被错误转化的路径问题 (#5934) - 现已修复 [#6233](../../pull/6233) (状态: 已关闭，已合并)

## 6. 功能请求与路线图信号

**用户提出的新功能需求(按请求热度排序)：**

1. **为每个模型 ID 增加不同的配置** (#6231) - 允许用户为同一个模型 ID（例如 deepseek-v4-pro）配置不同的参数（有无thinking）
2. **Hermes 模型家族支持** (#6230) - 将 Hermes 模型作为次要推理引擎，支持跨会话记忆和调整能力
3. **用户控制的推理深度选择** (#6229) - 支持 Light/Medium/Deep/Auto 模式，让用户平衡速度和完整性
4. **每场对话互联网搜索控制** (#6228) - 添加每场对话互联网搜索能力的开关
5. **每场对话 MCP 服务器选择和工具级控制** (#6227) - 允许用户选择每个对话的 MCP 服务器和具体工具
6. **工具调用参数信息和调用结果信息的独立控制** (#5976) - 允许用户单独控制结果信息的发送和截断
7. **全局运行配置相关功能** (#5919) - 希望增加全局运行配置的相关功能

**可能纳入下一版本的功能：**

- **基于会话的 MCP 服务器和工具级控制** (#6227) - 已合并至 [#6227]，未来将得到增强
- **推理深度选择** (#6229) - 请求热度高，可能在下一版本中实施
- **每场对话互联网搜索控制** (#6228) - 与推理深度请求一同推进
- **Hermes 模型支持** (#6230) - 必要且热度高，预计推动
- **多模型 ID 配置支持** (#6231) - 需求明确，应纳入下一版本

## 7. 用户反馈摘要

**从 Issues 评论中提取的用户痛点和使用场景：**

1. **配置复杂性：** 每新建一个 Agent 都需要重新配置 config.json，用户反馈在每新建一个智能体时都要重新配置一遍或者手动去改 config.json 文件，非常麻烦！ #5919

2. **工具消息过长：** 每次channel的工具调用结果信息太长了，希望可以单独控制结果是否发送，另外希望工具调用结果可以截断，显示前几行和后几行发送给chennel，用户预览大致信息即可 #5976

3. **性能问题：** 开始很多 Agent 时，ReMe 初始化和索引等操作并发进行，导致内存峰值上升，影响启动速度 #6144

4. **模型配置：** max_input_length 是静态配置项，需要手动填写，对于使用大上下文窗口模型（如 DeepSeek-V4-Pro 1M 等）的用户，每次切换模型都要手动改这个值，否则会出现上下文过早压缩 #6162

5. **用户体验：** 希望能增加权限控制，让用户更方便地管理权限，比如给不同的用户分配不同的权限 #6231

6. **Bug 修复：** 修复了一些常用的 Bug，比如 MCP 驱动初始化问题、桌面应用退出问题等

7. **功能增强：** 希望能增加一些新功能，比如每场对话互联网搜索控制、推理深度选择等

8. **用户满意点：** 用户对 QwenPaw 的新版本表示满意，希望能继续保持这个节奏

9. **新增功能需求：** 希望增加每场对话互联网搜索控制、推理深度选择、每场对话 MCP 服务器选择和工具级控制等新功能

## 8. 待处理积压

**长期未响应的重要 Issue 和 PR：**

1. **Windows 管理员权限启动要求** (#6169) - pip 安装的 QwenPaw 2.0.0.post2 强制管理员权限启动 / Unreasonable Admin Privileges Requirement - 目前未有新的 PR 或 commit 修复此问题，但已通过 #6234 修复。

2. **Windows 普通用户启动失败** (#6161) - Windows 更新后普通用户无法启动，卡在 "Waiting for HTTP ready..." - 目前未修复，但在持续跟进中。

3. **消息队列丢失** (#5995) - 当 Agent 会话繁忙时，新的消息被静默丢失 - 目前未有新的提交修复，但在考虑中。

4. **Embedding 映射 Bug** (#6155) - 从 1.x 升级到 2.0 后，Embedding 映射 Bug（使用本地模型）——在 components["as_embedding"]["default"].update() 中新增 "pass_dimensions": embedding_config.use_dimensions，未有新的 PR 处理。

5. **每场对话 MCP 服务器选择和工具级控制** (#6227) - 允许用户选择每场对话的 MCP 服务器和具体工具的需求 - 该 Issue 已经通过 PR #6227 合并为已解决。

6. **每场对话互联网搜索控制** (#6228) - 添加每场对话互联网搜索能力的开关 - 该 Issue 已经通过 PR #6228 合并为已解决。

7. **用户控制的推理深度选择** (#6229) - 支持 Light/Medium/Deep/Auto 模式 - 该 Issue 已经通过 PR #6229 合并为已解决。

8. **Hermes 模型支持** (#6230) - 将 Hermes 模型作为次要推理引擎，支持跨会话记忆和调整能力 - 该 Issue 已经通过 PR #6230 合并为已解决。

9. **为每个模型 ID 增加不同的配置** (#6231) - 允许用户为同一个模型 ID 配置不同的参数 - 该 Issue 已经通过 PR #6231 合并为已解决。

10. **QwenPaw 中的 Memory.md 和 Dream 整理的摘要的定位** (#6222) - 目前有两套记忆体系，一套是 Memory.md，一套是 Dream 整理的摘要，要求分析这两套记忆的定位。

11. **控制台无法正常接收信息的问题** (#6003) - 连接 Feishu channel 后，Feishu 发送过来的消息都能被接受到，但是 webUI 有时不会显示 Feishu 发送过来的消息，但是会直接执行。

12. **QwenPaw 无法回答相关内容的报错** (#6199) - TG 链接问题，时不时的就会出现这个状况，忘告知怎么解决，2.0 版本后开始出现的问题！

13. **为每个模型 ID 增加不同的配置** (#6231) - 询问相同提供商可以使用多种相同的模型id，如deepseek-v4-pro有时要thinking,有时不要thinking，目前没法在同一个提供商创建两个 deepseek-v4-pro，只能随时改，例如目前有两种配置导致的问题。

14. **消息在繁忙时段被静音掉的问题** (#5995) - 当 Agent 会话忙于处理前一个请求时，从同一用户/聊天接收到的新消息会被静默丢失。B 端可以收到，但前端完全没有任何提示。

15. **MCP drivers 启动时序问题** (#6193) - QwenPaw 启动时，MCP 驱动（Driver handlers）是串行逐个初始化的。配置 8 个 MCP 客户端时，光等 MCP 连接就要花大约 40 秒。

16. **控制台网站 JS 文件压缩** (#6205) - 希望对于控制台网站JS文件等能否设置压缩及缓存，连接控制台网站是一个小水管，每次等待加载js文件等需要等待不少时间。

17. **内存管理机制** (#6222) - QwenPaw 中 MEMORY.md 和 Dream 产生的摘要的定位是什么，目前有两套记忆体系，一套是 MEMORY.md，一套是 Dream

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目每日报告（2026‑07‑18）**  

---

### 1. 今日速览  
- 过去 24 小时内共关闭 8 条 Issue（全部为例行的 D5 Gate 数据刷新），没有新开 Issue、PR 或版本发布。  
- 活动水平偏低：仅有一位贡献者（YLChen‑007）持续执行例行维护任务，代码变动量极小，整体进展以“收尾”而非“新特性”为主。  
- 项目处于稳定维护阶段，没有出现紧急缺陷或重大功能迭代。  

---

### 2. 版本发布  
- **无新版本发布**（`New releases: 0`）。  

---

### 3. 项目进展  
| 状态 | PR 数 | 关闭 Issue 数 | 主要内容 | 备注 |
|------|-------|--------------|----------|------|
| 关闭 | 0 | 8 | 8 条 **chore / analysis** Issue，均为 **D5 Gate metadata 刷新**（`d5_gate_points`、`d5_cross_component`）以及工作流 receipt 生成。 | 所有 Issue 均已完成，未涉及新功能或 bug 修复，属于例行数据同步与清理。 |

- **推进的功能/修复**：通过系统性更新 CSV 行对应的 JSON 字段，确保 Issue‑specific D5 gate 数据与安全关联（CVE）保持一致。  
- **整体前进幅度**：在没有 PR 的情况下，项目通过批量关闭 8 条例行 Issue 实现了数据一致性的提升，属于“维护性进度”。  

---

### 4. 社区热点  
- **最活跃 Issue**：**#643** – “chore(llm-enhance): refresh D5 gate metadata for issue 466 row 38”。  
  - 链接: <https://github.com/qhkm/zeptoclaw/issues/643>  
  - 评论数: 1 | 👍: 0  
  - 该 Issue 为最新闭合的条目，体现了对 **Issue‑466** 的 D5 gate 数据更新需求，表明社区关注对跨组件元数据的准确性。  

- 其余 7 条 Issue（#642~#636）同样由同一作者在同一天关闭，讨论深度均为单条评论，热度相对平稳，未出现显著的社区争论或大量回复。  

---

### 5. Bug 与稳定性  
- **无新 Bug 报告**：所有 8 条 Issue 均为 **chore / analysis**，未标记为 bug、崩溃或回归。  
- **已有 fix PR**：无（因为均为例行数据刷新，不涉及功能性缺陷）。  

**结论**：当前没有影响系统稳定性的已发现 Bug 或崩溃情况。  

---

### 6. 功能请求与路线图信号  
- 目前 Issue 列表中未出现明确的功能请求（所有条目均为 **chore / analysis**）。  
- 因此，下一版本的功能增量需由新的 Issue 或 PR 发起，暂无可直接映射到路线图的信号。  

---

### 7. 用户反馈摘要  
- **痛点**：用户（通过 Issue 描述）关注 **D5 Gate 数据的准确性与时效性**，尤其是 CSV 行与对应的 CVE/安全 Issue 的关联。  
- **使用场景**：跨组件安全审计、漏洞关联报告需要实时、精确的 gate‑point 元数据。  
- **满意/不满**：从单条评论看，用户对已完成的刷新工作没有明确表达满意或不满，整体情绪中性。  

---

### 8. 待处理积压  
- **无长期未响应的 Issue 或 PR**（所有 8 条 Issue 均在同一天关闭，且无开放的 PR）。  
- 若有长期积压的 Issue，请在后续监控中留意，确保维护者及时跟进。  

---  

**项目健康度评估**：  
- **代码质量**：维持良好，例行维护已完成，无破坏性变更。  
- **社区活跃度**：低（无 PR、无新发布、单一贡献者闭关），但目前没有阻塞进度的紧急问题。  
- **稳定性**：暂无已发现缺陷，整体稳定。  

*报告生成时间：2026‑07‑18*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期**：2026-07-18  
**项目**：github.com/zeroclaw-labs/zeroclaw  
**分析师**：开源项目分析师（AI 智能体与个人助手方向）

---

## 1. 今日速览
- 过去 24 小时内，ZeroClaw 仓库共发生 **50 条 Issue 更新**（42 条新开/活跃、8 条关闭）与 **50 条 PR 更新**（40 条待合并、10 条已合并/关闭），无新版本发布，整体开发活跃度极高。
- 社区与核心贡献者聚焦于**安全架构（OIDC、供应链签名、WASM 插件隔离）、多租户/多代理路由、以及 Web 仪表盘体验**等方向，RFC 类议题讨论热烈。
- 今日有 10 个 PR 完成合并/关闭（以文档、CI、测试为主），但仍有 40 个 PR 处于待合并状态，显示review 队列存在一定积压；Issue 端关闭数少于活跃数，需求侧动能强劲。

---

## 2. 版本发布
今日无新版本发布（Latest Releases：无）。可暂不关注升级与迁移事项。

---

## 3. 项目进展（今日合并/关闭的重要 PR）
以下为过去 24h 内 **已合并/关闭** 的代表性 PR（共 10 条关闭/合并，含文档、CI、测试及 1 个功能闭环）：

- **PR #8173**（CLOSED）`feat(gateway): in-app upgrade with auto-restart from the web dashboard`  
  实现 RFC #8170 端到端：将 Web 侧栏版本标签变为“检测→发布说明→应用→重启”的完整升级入口。对应 Issue #8170 已于今日关闭。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/pull/8173 | Issue：https://github.com/zeroclaw-labs/zeroclaw/issues/8170

- **PR #9045**（CLOSED）`docs(architecture): document generated docs and localization lifecycles`  
  明确生成文档与 Fluent 本地化目录的生命周期，降低贡献者维护偏差。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9045

- **PR #8974**（CLOSED）`docs(firmware): fix ESP32 hardware design link`  
  修复固件 README 中失效的硬件设计文档链接。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/pull/8974

- **PR #8896**（CLOSED）`ci(actions): narrow benchmark compile experiment`  
  收窄 Benchmark 编译目标，加速 CI。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/pull/8896

- **PR #8882 / #8768 / #8743 / #8742**（CLOSED）  
  均为测试增补与文档修正（API schema 转义测试、ZeroCode 渠道根配置暴露、LinkedIn Schema V4 测试、SOP 无 TOML 示例），提升代码健康度与可维护性。  
  链接合集：  
  https://github.com/zeroclaw-labs/zeroclaw/pull/8882  
  https://github.com/zeroclaw-labs/zeroclaw/pull/8768  
  https://github.com/zeroclaw-labs/zeroclaw/pull/8743  
  https://github.com/zeroclaw-labs/zeroclaw/pull/8742

**整体迈进**：今日进展以“文档清晰化 + CI 提效 + 仪表盘升级闭环”为主，核心运行时功能多由仍开放的 XL/L 尺寸 PR 承载，架构演进处于代码审查期。

---

## 4. 社区热点（评论最多 / 反应最多）
按评论数倒序，今日最活跃的 Issues 如下：

1. **Issue #8177**（11 评论）`RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance`  
   诉求：容器镜像与发布二进制需硬件 PGP、多方仲裁、离线签名与 SLSA 溯源，对标 StageX。反映社区对**软件供应链安全**的高度重视。  
   链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8177

2. **Issue #5982**（10 评论）`[Feature]: Per-sender RBAC for multi-tenant agent deployments`  
   诉求：单实例服务多类用户（客户/运维/开发），隔离工作区、工具、速率与提示词。体现**多租户落地**迫切性。  
   链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5982

3. **Issue #3566**（8 评论，👍7）`[Feature][interop]: A2A (Agent-to-Agent) Protocol Support`  
   诉求：原生支持 Agent2Agent 协议，与外部 agent 互通。获较多赞，属**互操作代表性需求**。  
   链接：https://github.com/zeroclaw-labs/zeroclaw/issues/3566

4. **Issue #6378**（7 评论）`[Feature]: Discord Bot respond only in specific Discord channels`  
   诉求：Discord 限定频道响应，与 Matrix/Nextcloud 模式对齐。  
   链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6378

5. **Issue #7141 / #6641 / #2767**（各 6–7 评论）  
   分别涉及 OIDC 鉴权（#7141）、OTel 调用级追踪（#6641）、多代理路由（#2767，👍9）。  
   链接：  
   https://github.com/zeroclaw-labs/zeroclaw/issues/7141  
   https://github.com/zeroclaw-labs/zeroclaw/issues/6641  
   https://github.com/zeroclaw-labs/zeroclaw/issues/2767

**分析**：安全（供应链、OIDC、RBAC）、互操作（A2A）、可观测性与多代理架构是社区核心诉求，RFC 驱动模式成熟。

---

## 5. Bug 与稳定性（按严重度排列）
- **[S1] Issue #8563**（OPEN）`SOPs are not available to the agent through the web dashboard chat`  
  已配置 SOP 未被运行时识别，工作流阻塞。**暂无关联 fix PR 标记**。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8563

- **[S1] Issue #8560**（in-progress）`browser_open hangs the agent turn when launcher cannot open a window`  
  无显示环境下调起浏览器致 turn 无限挂起，亦影响 TTS/ffmpeg。**状态 in-progress，待 PR**。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8560

- **[S1] Issue #7527**（blocked）`macos app not work`  
  macOS 15.7.7 权限检测失败、窗口消失。**blocked，无 fix PR**。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7527

- **[S2] Issue #5628**（OPEN）`Daemon service auto-starts on boot, causes port conflict`  
  systemd 自启占端口，手动运行冲突。**无 fix PR**。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5628

- **[S2] Issue #5269**（OPEN）`Improve Installation Documentation & Methods`  
  安装文档与 `cargo binstall` 说明缺失。**无 fix PR**。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5269

- **[P1 安全] Issue #5869**（blocked）`rumqttc v0.25.1 pins rustls-webpki ... RUSTSEC advisories`  
   transitive 依赖致 4 项 RUSTSEC 告警。**blocked，需升 rumqttc**。  
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5869

---

## 6. 功能请求与路线图信号
高优先级/已 accepted 的功能与 RFC（部分已有 WIP PR）：
- **多代理与隔离**：#2767 多代理路由、#5982 每发送方 RBAC、#6293 空气隔离模式（unix socket enclave）。
- **互操作**：#3566 A2A 支持、#7218 A2A discovery。
- **安全架构（目标 v0.9.0）**：#7141 OIDC、#7142 可插拔安全执行、#8135 WASM-first 插件、#6996 颗粒沙箱、#5127 bubblewrap 可写路径。
- **可观测性**：#6641 OTel turn-level 关联。
- **渠道体验**：#6378 Discord 限定频道、PR #8443 Matrix 进度草稿、PR #8384 Inkbox 原生渠道。

**下一版本信号**：v0.9.0 明确以“安全/架构”为锚（OIDC、安全 trait、WASM 插件），多代理与 A2A 很可能作为并行特性逐步合入；待合并的 XL PR（如 #8996 目标守护重载、#8862 webhook→WASM 入站）若本季合并，将大幅扩展网关能力。

---

## 7. 用户反馈摘要
- **痛点**：多租户隔离缺失（#5982）、macOS 桌面端不可用（#7527）、Web 端 SOP 不可见致流程断点（#8563）、非 UTF-8 文件读取乱码（#7521）、守护进程开机抢端口（#5628）。
- **使用场景**：单实例服务于不同客户群；周期性低价模型跑 cron（#7762）；跨会话持久记忆（#8891 tracker）；Discord/Matrix 特定频道运营。
- **满意点**：RFC 透明追踪、维护者响应及时（如 #6641 提及 alexandme 响应优良）；文档修复迅速（今日多 docs PR 合入）。
- **不满意**：安装文档不足、部分平台（macOS）基础可用性故障长期未解。

---

## 8. 待处理积压（长期未响应 / 重要阻塞）
- **Issue #5869**（2026-04-18 开，blocked）RUSTSEC 集群，依赖旧 rumqttc，超 3 个月未解，**高危安全债**。
- **Issue #7527**（2026-06-12，blocked）macOS 应用故障，无进展，影响桌面用户。
- **Issue #5628**（2026-04-11，OPEN）守护端口冲突，S2 但无 PR。
- **PR #8384 / #8443 / #8638 / #8862 / #8996**（XL/L，needs-author-action 或长期 open）体量庞大、需作者补充，易成合并瓶颈。
- **RFC #6293**（2026-05-03，blocked+needs-author-action）空气隔离架构，停滞超 2 个月。

**维护提醒**：建议优先清理安全告警 #5869 与 macOS 可用性 #7527；对 needs-author-action 的 XL PR 设定跟进 deadline，避免贡献者流失。

---
*本报告基于仓库公开事件数据自动汇编，链接均指向 github.com/zeroclaw-labs/zeroclaw 对应编号。*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*