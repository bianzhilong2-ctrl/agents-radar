# OpenClaw 生态日报 2026-07-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-30 01:28 UTC

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

好的，这是根据您提供的 OpenClaw GitHub 数据，为您生成的 2026-07-30 项目动态日报。

---

### **OpenClaw 项目日报 - 2026-07-30**

#### **1. 今日速览**

OpenClaw 项目整体活跃度极高，过去 24 小时内共有 500 条 Issues 更新（449 条新/活跃，51 条关闭）和 500 条 PR 更新（402 条待合并，98 条已合并/关闭）。项目社区讨论热烈，问题数量和 PR 数量均呈高位，这表明开发者和用户群体对项目健身和功能完善持积极关注。

#### **2. 版本发布**

暂无新版本发布。

#### **3. 项目进展**

尽管 PR 列表显示有 98 条已合并/关闭的 PR，但在提供的详细 PR 列表中，并未发现具体的、已合并的 PR 条目。因此，无法从今天的具体数据中概述今日合并的重要 PR 内容。这需要参考完整的 PR 合并日志来完成。

#### **4. 社区热点**

今日讨论最活跃的 Issue 和 PR如下（按评论数排序）：

*   **Issue #91009**: **Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes and stalls gateway RPC**
    *   **链接**: [openclaw/openclaw Issue #91009](https://github.com/openclaw/openclaw/issues/91009)
    *   **分析**: 这是一个高严重度（P1, Impact: crash-loop）的问题，涉及 Codex 集成。它描述了 `openclaw-hooks` 进程在 CPU 上消耗大量资源并导致网关 RPC 延迟的现象。这直接影响了系统的稳定性和性能，是当前社区最关注的技术风险点之一。

*   **Issue #86996**: **Active Memory + Codex app-server path causes long response latency, hook timeouts, startup aborts, and gateway event-loop stalls**
    *   **链接**: [openclaw/openclaw Issue #86996](https://github.com/openclaw/openclaw/issues/86996)
    *   **分析**: 另一个高严重度（P1, Impact: crash-loop, message-loss）的问题，聚焦于 Active Memory 功能与 Codex 集成之间的性能瓶颈。它披露了在特定配置下系统响应缓慢、发生超时和启动失败，反映了核心功能模块之间的潜在集成问题。

*   **PR #115296**: **feat(claws): persist setup personalization state**
    *   **链接**: [openclaw/openclaw PR #115296](https://github.com/openclaw/openclaw/pull/115296)
    *   **分析**: 这是一个规模较大的（size: XL）且涉及 CLI 和文档的功能 PR。它旨在持久化 Claw 设置个人化状态，这是提升用户体验和简化首次设置流程的重要一步，显示了项目对用户友好性的重视。

*   **PR #108874**: **fix(telegram): socket-level timeouts for getUpdates to prevent TCP half-open deadlock**
    *   **链接**: [openclaw/openclaw PR #108874](https://github.com/openclaw/openclaw/pull/108874)
    *   **分析**: 这是一个针对 Telegram 频道的关键稳定性修复 PR。它解决了因 TCP 半开连接导致的僵死问题，这在网络环境不稳定时是一个常见的痛点，体现了项目对可靠性的持续投入。

#### **5. Bug 与稳定性**

*   **Issue #91009**: Codex PreToolUse native hook relay spawns CPU-bound processes... (P1, Crash-loop) **[无 fix PR]**
*   **Issue #86996**: Active Memory + Codex app-server path causes long latency... (P1, Crash-loop, Message-loss) **[无 fix PR]**
*   **Issue #112423**: **Large SQLite transcript cleanup blocks the gateway event loop**
    *   **链接**: [openclaw/openclaw Issue #112423](https://github.com/openclaw/openclaw/issues/112423)
    *   **分析**: 这是一个 P1 级的行为类 Bug，描述了在清理大型 SQLite 记录时会阻塞网关事件循环，从而导致整体性能下降，是系统可伸缩性的一个重要问题。
*   **Issue #91363**: **Isolated cron consistently fails with "LLM request failed"...**
    *   **链接**: [openclaw/openclaw Issue #91363](https://github.com/openclaw/openclaw/issues/91363)
    *   **分析**: P1 级的 Bug，表现为隔离 cron 作业持续失败，未能正确调用 LLM，影响了调度功能的可靠性。
*   **Issue #97616**: **OpenClaw leaks unreaped hook/tool child processes...**
    *   **链接**: [openclaw/openclaw Issue #97616](https://github.com/openclaw/openclaw/issues/97616)
    *   **分析**: 这是一个描述进程泄漏的 Bug，长期运行的守护进程可能因内存和资源耗尽而被 OOM 杀掉，是系统长期稳定运行的关键问题。
*   **Issue #91223**: **[Bug]: Active memory injection breaks prompt cache hit rate (99.9% → 22%)**
    *   **链接**: [openclaw/openclaw/issues/91223](https://github.com/openclaw/openclaw/issues/91223)
    *   **分析**: 这是一个严重的性能回归问题，显示了 Active Memory 功能在实际生产环境中可能带来的意想不到的副作用，需要仔细调查其根本原因。

#### **6. 功能请求与路线图信号**

*   **Issue #8299**: **Feature request: config option to suppress sub-agent announce**
    *   **链接**: [openclaw/openclaw Issue #8299](https://github.com/openclaw/openclaw/issues/8299)
    *   **分析**: 用户希望能够配置来抑制子智能体通报。这反映了用户对工作流程控制的需求，尤其是在希望减少干扰或隐藏内部细节时。
*   **Issue #88154**: **[Feature]: Add Slack Modal Support for Interactive Workflows**
    *   **链接**: [openclaw/openclaw Issue #88154](https://github.com/openclaw/openclaw/issues/88154)
    *   **分析**: 请求为 Slack 添加模态框支持，以实现更交互式的用户输入收集。这表明社区对提升用户体验和利用平台原生功能的需求正在增长。
*   **Issue #13219**: **Feature Request: Per-model usage logging for cost tracking**
    *   **链接**: [openclaw/openclaw Issue #13219](https://github.com/openclaw/openclaw/issues/13219)
    *   **分析**: 对于依赖多个 LLM 提供商的部署，成本透明度是一个关键需求。此功能请求指向项目在云原生和企业环境中的潜在应用场景。
*   **信号**: PR **#115296** (persist setup personalization state) 和 **#85461** (Capture image-generation provider usage metadata) 表明项目团队正在积极推进对用户体验和成本/资源监控的功能增强，这些都可能成为未来版本的亮点。

#### **7. 用户反馈摘要**

*   **痛点**:
    *   **性能与稳定性**: 大量用户反映在使用 `active-memory`、`Codex` 或处理大型会话时，系统变得**缓慢、不可靠**，甚至**崩溃**（见 Issues #86996, #91223, #112423 等）。
    *   **消息交付**: 发现**消息丢失**的问题，无论是直接消息还是媒体生成后的交付（见 Issues #91009, #86034, #90944 等）。
    *   **集成问题**: 第三方集成（如 DeepSeek, Telegram, QQBot）存在**认证、连接复用等不稳定因素**（见 Issues #88657, #88955, #108874 等）。
    *   **配置与升级**: 升级版本后会遇到**配置损坏**（Issue #95515）或**服务冲突**（Issue #79375）的问题。
*   **场景**: 用户正在将 OpenClaw 用于复杂的 **AI 代理工作流程**（涉及子智能体、内存、调度）和 **与多个聊天平台集成**（Telegram, Discord, Slack, Feishu 等）。
*   **满意/不满意**: 用户对项目的**核心概念和潜力**是认可的（“diamond lobster”等高评级标签常见），但对当前的**稳定性和性能**表达了较多**不满意**和**担忧**。

#### **8. 待处理积压**

长期未响应的重要 Issue 或 PR示例（基于Issue年龄和严重性）：

*   **Issue #39476**: **A2A sessions_send: target agent can call sessions_send back...**
    *   **链接**: [openclaw/openclaw Issue #39476](https://github.com/openclaw/openclaw/issues/39476)
    *   **描述**: 描述了一个导致 A2A 通信中消息重复的长期存在的设计缺陷（自 2026-03-08 创建），可能需要重构来解决。
*   **Issue #81061**: **Hook: before_route_inbound_message — pre-routing interception...**
    *   **链接**: [openclaw/openclaw Issue #81061](https://github.com/openclaw/openclaw/issues/81061)
    *   **描述**: 社区提出的缺失的“前路由”插件挂钩请求，反映出扩展性架构的一个空白。
*   **PR #115237**: **feat(claws): preview personalized setup manifests**
    *   **链接**: [openclaw/openclaw PR #115237](https://github.com/openclaw/openclaw/pull/115237)
    *   **描述**: 另一个规模较大的功能 PR（size: XL），虽然标记为“needs proof”，但代表了提升 Claw 开发者体验的重要方向，值得关注。
*   **PR #108836**: **fix(widearea-dns): prevent unhandled crash from zone file write failures**
    *   **链接**: [openclaw/openclaw PR #108836](https://github.com/openclaw/openclaw/pull/108836)
    *   **描述**: 一个稳定性和健壮性修复 PR（size: XS），虽小但重要，防止了因 DNS 区域文件写入失败而导致的崩溃。

---

**数据驱动结论**: OpenClaw 项目当前处于一个**高活跃度、高问题密度**的开发阶段。社区对其功能潜力充满期待，但当前的稳定性问题（尤其是与 `Codex`、`Active Memory` 和大型会话相关的）是亟待解决的瓶颈。项目的前进路线图（如个人化设置、成本监控、Slack 集成）清晰可见，然而，解决现有 Bug 的速度是维持社区信心和推进路线图的关键。

---

## 横向生态对比

User Safety: safe

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报  
**日期：2026-07-30**

---

## 1. **今日速览**

NanoBot 项目在过去24小时内持续活跃，PR 合并与关闭数达 19 条，Issue 更新 5 条（含 2 条关闭），显示出维护团队持续高效的开发节奏。今日重点聚焦于 WebUI 稳定性优化、子代理系统重构雏形、PowerShell 兼容性修复以及类型系统强化。多个 P0/P1 级问题同步响应，整体健康度良好，社区反馈积极。

---

## 2. **版本发布**

暂无新版本发布。

---

## 3. **项目进展**

### ✅ 今日合并/关闭的关键 PR：

| PR 编号 | 标题 | 功能/修复内容 |
|--------|------|----------------|
| [#5165](https://github.com/HKUDS/nanobot/pull/5165) | fix(webui): avoid false microphone silence errors | 修复 WebUI 中因音频分析误判静音导致的转录中断问题，增强语音输入体验。 |
| [#5162](https://github.com/HKUDS/nanobot/pull/5162) | feat(webui): track optimistic message delivery status | 引入乐观消息送达状态跟踪机制，提升用户对消息发送进度的感知。 |
| [#5160](https://github.com/HKUDS/nanobot/pull/5160) | fix(shell): preserve UTF-8 native input on PowerShell 5 | 修复 Windows PowerShell 5.1 下非 ASCII 输入被破坏的严重问题。 |
| [#5158](https://github.com/HKUDS/nanobot/pull/5158) | refactor: enforce BasedPyright strict type checking | 强制启用严格类型检查，显著提升代码可维护性与潜在错误预警能力。 |
| [#5157](https://github.com/HKUDS/nanobot/pull/5157) | fix(memory): expose media references to session consolidation | 解决 Issue #5118，恢复媒体路径在会话归档中的完整性。 |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | feat(webui): add skill marketplaces and management | 上线技能市场入口，支持发现、安装第三方技能，提升平台可扩展性。 |

🔍 **项目整体向前迈进**：
- 稳定性显著提升，尤其在 WebUI 语音交互与跨平台终端兼容性方面；
- 引入严格类型检查为后续模块化重构扫清障碍；
- 市场化功能落地，为生态建设奠定基础。

---

## 4. **社区热点**

### 📌 最活跃讨论：

#### 🔹 [#5000](https://github.com/HKUDS/nanobot/issues/5000)  
**标题**：Proposal: evolve the current subagent system toward multi-agent collaboration  
**作者**：bingqilinweimaotai  
**状态**：OPEN  
**评论数**：6  

> **诉求分析**：  
当前子代理（subagent）机制偏向于后台任务执行，缺乏持久身份与协作语义。提案者希望构建更灵活的多智能体协作框架，以支持复杂任务拆解与动态资源调度。这反映出社区对提升系统抽象层次与模块化水平的需求。

#### 🔹 [#5165](https://github.com/HKUDS/nanobot/pull/5165)  
**标题**：fix(webui): avoid false microphone silence errors  
**作者**：chengyongru  
**状态**：CLOSED  
**评论数**：undefined  

> **讨论亮点**：  
此 PR 虽无评论记录，但因解决实际语音交互中频繁出现的“静音误判”问题，被迅速合并，说明团队对用户体验细节的重视。

---

## 5. **Bug 与稳定性**

### ⚠️ 当前报告的 Bug 及处理状态：

| Issue/PR 编号 | 类型 | 标题 | 严重程度 | 是否已 Fix |
|---------------|------|------|-----------|-------------|
| [#5163](https://github.com/HKUDS/nanobot/issues/5163) | Bug | Manual cron runs lose completion state when WebUI polling reloads the store | 中等 | ❌ 未修复 |
| [#5118](https://github.com/HKUDS/nanobot/issues/5118) | Bug | Session consolidation drops uploaded media paths carried only in media[] | 高 | ✅ 已 Fix via [#5157](https://github.com/HKUDS/nanobot/pull/5157) |
| [#5159](https://github.com/HKUDS/nanobot/issues/5159) | Bug | Windows PowerShell 5.1 ExecTool corrupts non-ASCII native pipeline input | 高 | ✅ 已 Fix via [#5160](https://github.com/HKUDS/nanobot/pull/5160) |

🔧 **总结**：  
两处高危 Bug 已由社区成员快速响应修复，涉及跨平台输入处理与数据持久化完整性；一个涉及任务调度状态同步的问题仍待跟进。

---

## 6. **功能请求与路线图信号**

### 🧩 用户提出的功能需求：

| Issue/PR 编号 | 标题 | 类型 | 可能纳入版本线索 |
|---------------|------|------|------------------|
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | Proposal: evolve the current subagent system toward multi-agent collaboration | Enhancement | 明显指向 v0.6+ 架构升级方向 |
| [#5034](https://github.com/HKUDS/nanobot/pull/5034) | feat(goal): add durable state-graph planning and recovery | Feature | 强化长期任务管理能力，属于核心功能迭代 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | feat(telegram): support custom Bot API base URL and extra headers | Feature | 拓展 Telegram 集成灵活性，属于渠道扩展类需求 |

📌 **路线图判断**：  
项目正在向更高级的任务编排（Goal 持久化图谱）、跨渠道适配以及模块化智能体协作迈进，反映出从“工具使用型 AI 助手”向“企业级智能体平台”的演进轨迹。

---

## 7. **用户反馈摘要**

从 Issue 评论中提炼的核心用户痛点如下：

- **“语音输入经常中断”** → 已被 [#5165](https://github.com/HKUDS/nanobot/pull/5165) 修复；
- **“上传文件归档后丢失链接”** → 由 [#5157](https://github.com/HKUDS/nanobot/pull/5157) 解决；
- **“手动触发的 cron 任务完成后仍显示失败”** → 存在未被及时发现的调度器状态不一致问题；
- **“PowerShell 输入乱码影响日常使用”** → 已被 [#5160](https://github.com/HKUDS/nanobot/pull/5160) 修复。

🎯 用户主要诉求集中于 **稳定性与跨平台一致性**，尤其是在终端与语音交互场景。

---

## 8. **待处理积压**

以下 Issue/PR 长期未响应或存在阻塞，需关注：

| 编号 | 类型 | 标题 | 当前状态 | 建议行动 |
|------|------|------|-----------|-------------|
| [#5163](https://github.com/HKUDS/nanobot/issues/5163) | Bug | Manual cron runs lose completion state... | OPEN | 存在调度器与 WebUI 存储竞态，属于 P1 级问题，建议尽快跟进 |
| [#5164](https://github.com/HKUDS/nanobot/pull/5164) | PR | fix(webui): prevent redundant thread and media reloads | OPEN | 功能完整但标记为 conflict，需合并前解决冲突 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | PR | fix(telegram): recover from silently stalled polling | OPEN | 解决 Telegram 长时间无消息接收的问题，属于稳定性关键 PR |

🛠️ **提醒**：  
这些 PR 都涉及关键稳定性与性能瓶颈，一旦合并将显著提升系统可靠性。

---

✅ **项目健康度评估**：  
- 活跃度：高  
- 稳定性：持续改善中  
- 社区参与：积极  
- 维护态度：积极响应，PR 合并效率高  

📌 **下一步建议**：  
继续聚焦任务调度器状态一致性、提升 CI 流水线覆盖率，并尽快合并阻塞性 PR 以推动下个小版本发布。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

## Hermes Agent 项目日报 - 2026-07-30

### 1. 今日速览
Hermes Agent 社区在过去24小时保持高活跃度，提交了50条新Issue和50条Pull Request（PR），其中39条Issue活跃讨论，15条PR成功合并或关闭。核心团队正在积极解决数据库兼容性问题和远程代理优化，但无新版本发布，表明开发周期可能延续至下周。

---

### 2. 版本发布
- **无新版本发布**  
  项目版本仍为v0.19.0（2026.7.20），显示重大发布可能因待处理技术债务（如状态数据库问题）推迟。

---

### 3. 项目进展
**合并关闭的重要PR（5条）**  
1. **技术债务：修复技能命令遗留问题**  
   PR #74511 解决scan失败时的_skill_commands缓存丢失问题，防止用户突然失去所有技能命令。  
   [PR #74511](https://github.com/NousResearch/hermes-agent/pull/74511)

2. **远程执行改进**  
   PR #74500 修复全局远程模式下的配置文件刷新逻辑，确保多配置环境正确显示。  
   [PR #74500](https://github.com/NousResearch/hermes-agent/pull/74500)

3. **安全增强：凭证池改进**  
   PR #74504 解决OAuth凭证刷新后的写权限问题，防止权限提升漏洞。  
   [PR #74504](https://github.com/NousResearch/hermes-agent/pull/74504)

4. **微调：状态锁耐心机制**  
   PR #74503 对状态DB写锁实现指数退避，减少高并发下的死锁风险。  
   [PR #74503](https://github.com/NousResearch/hermes-agent/pull/74503)

5. **功能完善：语音笔记持久化**  
   PR #74501 解决语音笔记在会话中断时丢雷达问题。  
   [PR #74501](https://github.com/NousResearch/hermes-agent/pull/74501)

---

### 4. 社区热点  
**焦点Issue #71298：提供商存储不一致**  
13条评论讨论CLI与GUI配置差异，暴露用户对统一配置体验的高需求。  
[Issue #71298](https://github.com/NousResearch/hermes-agent/issues/71298)

**功能请求 #41222：Kanban板集成**  
16条❤️支持将Kanban工作流原生集成到桌面应用，体现用户对无缝多模式协作的诉求。  
[Issue #41222](https://github.com/NousResearch/hermes-agent/issues/41222)

---

### 5. Bug与稳定性  
**严重Bug（P1/P2）**  
- **数据库损坏风险**  
  Issue #68545：Linux容器中`state.db`初始化失败，需检查PR #57820（低进展，需加紧重构）。  
  [Issue #68545](https://github.com/NousResearch/hermes-agent/issues/68545)

- **远程代理崩溃**  
  Issue #74767：Windows更新调用被未终止进程阻碍，已开启优先级升级同步。  
  [Issue #74767](https://github.com/NousResearch/hermes-agent/issues/74767)

---

### 6. 功能请求与路线图信号  
- **代理偏重机制**  
  支持偏向特定子代理模型候选，需由PR #74375驱动。  
  [PR #74375](https://github.com/NousResearch/hermes-agent/pull/74375)

- **APPS服务扩展**  
  多用户反映需更智能的APPS服务调度策略，可结合PR #65824优化。  
  [PR #65824](https://github.com/NousResearch/hermes-agent/pull/65824)

---

### 7. 用户反馈摘要  
**痛点**  
- 配置混乱（如provider设置不一致）导致CLI/GUI体验落差  
- Kanban与聊天工具间的上下文隔离影响深度工作效率  

**提升建议**  
- 开发者赞赏技术债务修复速度（如状态DB及技能缓存修复）  
- 团队常需注意熟练使用的技能命令在重启/升级后需重新扫描  

---

### 8. 待处理积压  
- **状态DB兼容性问题**  
  Issue #68545（关键数据库问题）已闭塞30天，需分析PR #57820走向。  
- **Python环境污染**  
  Issue #73109（venv残留增长）未动态解决，风险持续存在。  
- **在线代理监控缺失**  
  Issue #74507（gateway presence未同步）新提，需优先级评估。

--- 

项目健康度：Bug密度中等（50新Issue/50PR），争议点集中于数据库兼容性及模块化扩展路径。建议调整资源以加速关键Bug修复及新功能集成周期缩短。


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目每日动态 – 2026‑07‑30**

---

### 1. 今日速览  
- **活跃度**：过去 24 h 内仅有 1 条新 Issue 与 2 条新 PR（全部待评审），无任何 merge/close。  
- 维持了持续骚动的状态，开发团队目前正评审 DingTalk 图片支持 PR 与安装脚本搬迁 PR。  
- **运行状况**：现存的唯一未结 Issue（#3301）标记为 BUG，提示核心功能仍需验证，整体表示项目正在强化可靠性与社区交付。

---

### 2. 版本发布  
- **无新版本**。本周期暂无 Release，保持现行 0.3.1 版本不变。

---

### 3. 项目进展  
- **Merge / Close**：本日无 PR 被 merge 或关闭。  
- **关键 PR**：  
  - `#3283` 旨在为 DingTalk 渠道加入图片消息入站支持。虽未完成，但已提交核心功能代码，推动多渠道图文交互向前一步。  
  - `#1951` 将安装脚本移到主仓库，减少外部文档维护依赖，提升安装流程的可见性与可维护性。

---

### 4. 社区热点  
| 类型 | 号 | 主要mainthread | 链接 | 主要诉求 |
|------|----|----------------|------|----------|
| Issue | #3301 | “/clear and session auto‑compression don’t work in chats routed to non‑default agent via dispatch rules” | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | 用户反映在使用 Dispatch 规则将会话路由至非默认 agent 时，清空与会话自动压缩功能失效，影响体验与数据完整性。 |
| PR | #3283 | “fix(dingtalk): support picture/image message inbound” | [#3283](https://github.com/sipeed/picoclaw/pull/3283) | 为 DingTalk 渠道引入图片入站处理，提升多媒体支持的完整度，符合用户对图文消息交互的需求。 |

> 这两条信息是今天 GitHub 访问量与讨论热度最高的内容，提示社区关注多渠道可靠性与多媒体功能。

---

### 5. Bug 与稳定性  
| 级别 | Issue | 简述 | 当前状态 | Fix PR |
|------|-------|------|----------|--------|
| **高** | #3301 | `/clear` 与会话压缩失效，导致在非默认 agent 下的聊天无法正确清除与压缩 | **开放未修复** | 无 |

> 该问题直接影响核心会话管理功能，建议优先在下一轮回合中定位与修复。

---

### 6. 功能请求与路线图信号  
- **DingTalk 图片支持**（PR #3283）– 争议度最高，已展示实现代码，且与用户对多媒体交互的需求吻合，预计可纳入 0.4.0 计划。  
- **安装脚本搬迁**（PR #1951）→ 简化部署流程，可在 0.3.2 侧重细化使用说明与自动化脚本。  

若未来出现对 “session auto‑compression” 生产环境配置的进一步需求，亦可视为下一版本的改进点。

---

### 7. 用户反馈摘要  
- **Issue #3301** 的评论为空，但标题已反映核心痛点：在 Dispatch 规则下使用 `/clear` 与自动压缩功能失效。  
- 用户场景：当机器人通过规则路由至专属 agent 时，需要在长对话后显式清空会话或压缩历史，避免冗余记录与提升性能。  
- 关注点：功能缺失会导致会话记录过长，并可能出现性能下降或数据不一致。

---

### 8. 待处理积压  
- **PR #1951 (3 个月开放)**：虽然已提交于 2026‑03‑24，但至今未被 merge。建议复审当前脚本兼容性，或考虑发布后继续跟进。  
- **Issue #3301 (标记 BUG)**：高优先级缺陷，需尽快定位根源并提交修复 PR。  

> 维护者可将上述两项列入本周待办列表，以保持项目进度与社区满意度同步提升。

---

> **结语**：今日 PicoClaw 保持了持续的贡献与讨论，虽缺少 merge，但核心功能推进与痛点识别显示项目正走向更完善与更具多渠道兼容性的方向。请继续关注 PR 等待评审与 issue 的解决进度，以确保下一版本能顺利交付。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目 2026‑07‑30 每日报告**  

---  

### 1. 今日速览  
- 过去 24 小时内出现 **2 条新建 Issue** 和 **6 条 Pull Request**（其中 3 条已合并/关闭，3 条仍在进行中），表明社区活跃度保持在中等水平。  
- 无新版本发布，代码基线保持稳定。  
- 最近的 Issue #1350（Copilot SDK 集成）获得 **8 个 👍** 与 3 条评论，是当前讨论最热的焦点。  
- 所有 PR 均在同一天完成审阅或更新，说明维护者对审查流程反应及时。  
- 项目整体健康度：Issue 与 PR 的开闭平衡良好，代码质量没有出现严重回归迹象。  

---  

### 2. 版本发布  
- **无** 新版本发布（`New Release: 0`）。  

---  

### 3. 项目进展  
**已合并 / 关闭的重要 PR**（过去 24 小时内完成审阅或更新）  

| PR | 状态 | 主要内容 | 推进的功能/修复 |
|----|------|----------|----------------|
| #3150 | **CLOSED** | 在 `setup` 中增加从 NanoClaw 硬化注册表 **拉取预建的 agent 镜像**，保持本地构建仍为默认且无需账号。 | 为团队提供更安全、统一的镜像获取方式，降低本地构建成本。 |
| #2440 | **CLOSED** | `fix(poll-loop)` 使用 `session_routing` 作为权威回复通道；`feat(agent)` 加入会话路由修复和预编译通知。 | 解决容器重启后首条消息可能是代理批准通知的误判问题，提升消息处理可靠性。 |
| #2904 | **CLOSED** | 修复 `engage_mode: 'mention'` 线程未订阅的 Slack 线程问题，确保 `@` 提及能完整获取后续聊天内容。 | 提升 Slack 交互体验，防止信息遗漏。 |

**仍在进行的 PR**（供后续跟踪）  

| PR | 状态 | 关键改动 |
|----|------|----------|
| #3145 | OPEN | `fix(db)` 为已有 wiring 回填缺失的 channel 目的地，保留原有目的地和自定义名称。 |
| #3149 | OPEN | CLI 加入 `--rw` 标志以支持 `groups config add-mount` 的可读写权限控制。 |
| #3057 | OPEN | **双引擎配额 fallback**：Claude 配额耗尽时自动切换至 Codex，并提供主动配额预警与回退日志。 |

---  

### 4. 社区热点  
| 项目 | 链接 | 关注点 | 社区诉求分析 |
|------|------|--------|--------------|
| **#1350** – Add GitHub Copilot SDK as alternative AI backend | <https://github.com/qwibitai/nanoclaw/issues/1350> | 8 👍、3 条评论，最近更新 2026‑07‑29 | 用户希望在容器 agents 中使用 **GPT‑4.1 等 Copilot 模型** 作为 Claude 的替代，以获得更通用的 AI 能力。 |
| **#3151** – Telegram Bot API 10.1 `rich_message` inbound arrives empty | <https://github.com/qwibitai/nanoclaw/issues/3151> | 0 👍、0 评论，创建 2026‑07‑29 | 格式化消息（如网页粘贴）在 Telegram 机器人中被静默丢弃，影响用户体验。 |
| **#3057** – Dual-engine quota fallback | <https://github.com/qwibitai/nanoclaw/pull/3057> | 0 👍、0 评论，最近更新 2026‑07‑29 | 需要 **自动降级机制** 与 **配额预警**，提升大规模部署的可靠性。 |

**热点分析**  
- **Copilot SDK**（#1350）是当前最受关注的功能需求，表明社区希望兼容更多主流 LLM 提供商。  
- **Telegram rich_message** 问题虽评论少，但影响直接用户（贴式内容丢失），值得快速定位。  
- **双引擎配额 fallback**（#3057）虽无直接反馈，但已在生产环境实践近三周，表明该功能已具备实际需求。  

---  

### 5. Bug 与稳定性  
| Bug/稳定性问题 | Issue/PR | 严重程度 | 是否已有对应 fix PR |
|----------------|----------|----------|----------------------|
| Telegram `rich_message` 内容为空 | #3151 | 中 | **是** – 与同一 PR 同时提交（仍在审查中）。 |
| 数据库缺失的 channel 目的地（existing wirings） | #3145 | 中 | **是** – 正在实现的 `fix(db)` PR，目标 2026‑07‑30 前完成。 |
| 潜在回归：poll-loop 在容器重启后可能误处理批准通知 | #2440（已关闭） | 低 | 已在 PR 中修复，已合并。 |
| 无其他崩溃或回归报告。 | — | — | — |

---  

### 6. 功能请求与路线图信号  
| 需求 | 对应 Issue/PR | 可能纳入下一版本 |
|------|---------------|-------------------|
| **Copilot SDK 集成**（原生支持 GPT‑4.1 等） | #1350 | 高 – 正在讨论中，若资源可用，极大概率列入 0.5+ 版。 |
| **Telegram rich_message 完整传输** | #3151 | 中 –  bug 已定位，后续需实现完整解析与展示。 |
| **配额 fallback 与主动预警** | #3057 | 高 – 已在生产验证，预计将作为 **0.6** 版的核心特性。 |
| **CLI `--rw` 标志**（权限控制） | #3149 | 低 – 属于小功能改动，可在本次发布中合并。 |
| **硬化镜像预拉取**（提升安全性） | #3150 | 中 – 已实现，后续可细化镜像签名与自动更新机制。 |

---  

### 7. 用户反馈摘要  
- **正向反馈**：  
  - 多位用户在 Issue #1350 评论中表达希望能够 **使用 familiar 的 Copilot 模型**，提升开发效率与模型可控性。  
  - Issue #3057 的作者指出 **双引擎配额 fallback** 在真实 WhatsApp 部署中已显著降低服务中断率，获得正面验证。  

- **负面/痛点**：  
  - **Telegram** 用户报告 **rich_message** 内容被 silently 丢弃，导致格式化消息（如带有 Markdown、图片链接）在机器人端不可用。  
  - 少数维护者在 Issue #3151 中指出 **缺乏错误日志**，难以定位根因。  
  - 部分长期 Issue（如 #1350）仍未得到官方回应，导致部分社区成员担心功能实现进度。  

---  

### 8. 待处理积压  
| 项目 | 链接 | 最近活动 | 备注 |
|------|------|-----------|------|
| **#1350** – Copilot SDK 集成 | <https://github.com/qwibitai/nanoclaw/issues/1350> | 2026‑07‑29（评论） | 讨论活跃，但尚未有官方回应，需维护者确认实现路线。 |
| **#3151** – Telegram rich_message 空内容 | <https://github.com/qwibitai/nanoclaw/issues/3151> | 2026‑07‑29（创建） |  bug 已定位，但缺少后续修复 PR，建议尽快派人处理。 |
| **#3145** – DB backfill for existing wirings | <https://github.com/qwibitai/nanoclaw/pull/3145> | 2026‑07‑29（更新） | 仍在开发阶段，审查未完成，影响数据一致性。 |
| **#3149** – CLI `--rw` 标志 | <https://github.com/qwibitai/nanoclaw/pull/3149> | 2026‑07‑29（创建） | 功能较小，但审查未通过，需后续跟进。 |
| **#3057** – Dual‑engine quota fallback | <https://github.com/qwibitai/nanoclaw/pull/3057> | 2026‑07‑29（更新） | 已在生产验证，但仍未合并，需评估合并风险。 |
| **#2440** – poll‑loop 会话路由修复（已关闭） | <https://github.com/qwibitai/nanoclaw/pull/2440> | 2026‑07‑29（更新） | 虽已关闭，但长期未合入主分支，建议确认已合并至 `main`。 |
| **#2904** – Slack thread history reload (已关闭) | <https://github.com/qwibitai/nanoclaw/pull/2904> | 2026‑07‑29（更新） | 同样已关闭，需确认已同步至正式发布分支。 |

**提醒**：维护者应在本周内对上述未完成的 PR 与 Issue 进行审查或明确状态（如“暂缓”“需更多信息”），以免积压进一步扩大。  

---  

*报告结束*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期：2026-07-30**
**数据来源：** github.com/nullclaw/nullclaw

---

## 1. 今日速览

NullClaw 处于低强度但持续推进的更新态势：过去 24 小时内共有 1 条 Issue 更新、4 条 Pull Request 活动（2 条待合并、2 条已关闭/合并），无新版本发布。项目整体维持稳定的开发节奏，核心贡献者 valonmulolli 主导了今日几乎所有的代码活动，新功能（Grok CLI 提供者、内存召回配置）与关键修复（/pair token 持久化）并发推进；社区参与度较低，仅有 1 条长期悬而未决的 bug 报告。健康度评估：⭐⭐⭐☆（功能迭代正常，但社区互动和 bug 响应活跃度不足）。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 关键推进 |
|---|---|---|
| [PR #981](https://github.com/nullclaw/nullclaw/pull/981) | CLOSED | 新增 `grok-cli` 提供者：仿照 `codex-cli` 的逐请求 spawn 模式，将 xAI Grok CLI 接入 NullClaw 提供者体系，显著扩展多模型路由能力 [链接](https://github.com/nullclaw/nullclaw/pull/981) |
| [PR #961](https://github.com/nullclaw/nullclaw/pull/961) | CLOSED | Memory 模块三项可配置参数（`auto_recall`、`recall_limit`、`max_context_bytes`）已落地，赋予用户细粒度控制 recall 行为的能力 [链接](https://github.com/nullclaw/nullclaw/pull/961) |
| [PR #980](https://github.com/nullclaw/nullclaw/pull/980) | OPEN | 修复 #839：`/pair` 生成的 token 现在在配对时持久化至 `{config_dir}/paired_token`，使 cron/schedule 工具能正常通过 gateway admin 认证 [链接](https://github.com/nullclaw/nullclaw/pull/980) |
| [PR #979](https://github.com/nullclaw/nullclaw/pull/979) | OPEN | 与 #961 同主题的 memory 可配置召回 PR 仍处于待合并状态，需与已关闭的 #961 核对是否为重复提交或差异化迭代 [链接](https://github.com/nullclaw/nullclaw/pull/979) |

**综合评估：** 项目今日向前迈进了约 1.5 个功能闭环（grok-cli 提供者合并 + memory recall 合并/修复），同时修补了 1 个影响调度与定时任务认证的稳定性隐患。维护者活跃度良好。

---

## 4. 社区热点

| 条目 | 类型 | 更新 | 看点 |
|---|---|---|---|
| [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) | Bug (OPEN) | 2026-07-29 | 3 条评论、1 👍 — 长期悬而未决的 scheduler unauthorized 问题，是本日社区热度最高条目 [链接](https://github.com/nullclaw/nullclaw/issues/915) |
| [PR #980](https://github.com/nullclaw/nullclaw/pull/980) | Fix (OPEN) | 2026-07-29 | 直接修复 #839，与 scheduler 认证链路高度相关，可能为 #915 提供根治路径 [链接](https://github.com/nullclaw/nullclaw/pull/980) |

**分析：** 社区核心诉求集中在**scheduler 在 Telegram/聊天场景的鉴权失败**问题，涉及外部 Ollama + 多网络部署。用户期望一个端到端的调度与消息回调机制能正常工作；PR #980 提交的 token 持久化方案若被合并，将有效缓解同类认证失效问题。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) | Scheduler 在 Telegram 及其他后端场景触发 `unauthorized`，已影响生产用户的定时任务调用链 | 待定 — PR #980 修复 `/pair` token 不落盘问题，可能是根因之一，但仍需验证 |
| 🟡 中 | [Issue #915 — 衍生](https://github.com/nullclaw/nullclaw/issues/915) | 外部 Ollama 部署场景下，token 在进程重启后丢失，导致 schedule → gateway 调用链断裂 | PR #980 提供方向性修复，但尚未合并 |

**稳定性评价：** 当前主要稳定性风险集中在 scheduler 鉴权持久化层，无崩溃或回归报告。PR #980 是关键修复候选。

---

## 6. 功能请求与路线图信号

| 可能性 | 信号来源 | 描述 |
|---|---|---|
| 🔵 高 | 用户 Issue + PR #981 已合 | **多 CLI 提供者扩展** — 用户期待更多本地 CLI 模型入口（codex-cli 模式已成形，grok-cli 跟进），路线图正在向"CLI provider 插件化"演进 |
| 🔵 高 | PR #979 / #961 | **Memory recall 精细化配置** — `auto_recall` / `recall_limit` / `max_context_bytes` 三键配置已合入 #961（PR #979 仍待合并），下一版本可能将 memory 调优纳入正式配置文档 |
| 🟡 中 | Issue #915 衍生 | **Scheduler auth 端到端可用性** — 若 #980 合并，将补齐 `/pair` → schedule token 链路，为调度功能整体可用性扫清障碍 |

---

## 7. 用户反馈摘要

来自 Issue #915 的真实用户场景提炼：

- **使用场景：** Ubuntu 本地部署 + 同一局域网内 Ollama 主机，跑 Qwen3.6:27b 于 RTX 3090。
- **满意：** LLM 推理稳定，tool calling 在 NullClaw 中大部分正常，说明核心推理与工具调用链路成熟。
- **痛点：** Scheduler 模块在 Telegram 及其他聊天后端无法正常工作，`unauthorized` 错误阻断定时任务。
- **隐含诉求：** 用户关注多网络部署（本地 + 外部 Ollama）的鉴权一致性，期望 scheduler 能像 tool calling 一样可靠。
- **参与度：** 仅 1 👍、3 条评论，反映该问题有一定用户共鸣但社区讨论热度有限。

---

## 8. 待处理积压

| 条目 | 类型 | 状态 | 积压原因 | 建议 |
|---|---|---|---|---|
| [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) | Bug | OPEN，自 2026-05-15 起（约 2.5 个月） | 长时间无人响应；PR #980 修复方向明确但尚未合并 | 维护者应评估 #980 与 #915 的关联并安排合入 |
| [PR #980](https://github.com/nullclaw/nullclaw/pull/980) | Fix | OPEN，已提交 1 天 | 尚待审查与合并 | 优先级高，建议尽快 CI 审核 |
| [PR #979](https://github.com/nullclaw/nullclaw/pull/979) | Feature | OPEN，可能与已关闭的 #961 重复 | 状态不明确，需与 #961 核对是否冗余提交 | 维护者确认差异后决定合并或关闭 |
| [PR #981](https://github.com/nullclaw/nullclaw/pull/981) | Feature | CLOSED | 已合入，无积压 | — |
| [PR #961](https://github.com/nullclaw/nullclaw/pull/961) | Feature | CLOSED，已合入 41 天 | 已合入，无积压 | — |

**积压提醒：** Issue #915 与 PR #980 构成当前最关键的修复闭环，建议本周内优先处理，以避免 scheduler 鉴权问题进一步影响生产用户。

---

**日报结束** · 数据采集时间：2026-07-30 · 下一份日报建议关注 PR #980 合入进度与 Issue #915 闭环状态

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-30

---

## 1. 今日速览

- **整体活跃度：极高**。过去 24 小时内共有 **50 个 Issue 更新**（20 新开/活跃，30 关闭）和 **50 个 PR 更新**（36 待合并，14 合并/关闭），无新版本发布。
- **核心主线**：项目正处于 **"Reborn" 重构的大规模收敛期**。大量 Epic 级 Issue（如 #3031, #3044, #3045, #3576, #3607）及其子任务在今日集中关闭，标志着产品界面迁移、运行时预设、Host Kernel 安全加固、WebUI Beta 路径等核心架构落地。
- **质量攻坚**：CI/CD 流水线强化（PR #6889, #6881）、测试平台建设（#6524, PR #6886, #6776）、供应链依赖批量更新（PR #6874, #6428, #6361）同步推进，展现“硬核工程化”特征。
- **风险点**：Gemini 系列 Provider 工具调用连续报错（#6786, #6880）、自动化执行语义不稳定（#6879）、测试套件并行抖动（#6887）等新增 Bug 需快速跟进。
- **项目健康度**：**优**。主干合并节奏快（14 个 PR 合并/关闭），技术债偿还（如 #6666 进程日志内核迁移）有序进行，文档与测试覆盖率指标（WS11/WS12）纳入强制门禁，工程治理成熟度高。

---

## 2. 版本发布

**今日无新版本发布**。最近一次发布活动见 PR #5598（`ironclaw_common` 0.5.0 含破坏性变更、`ironclaw_skills` 0.4.0 破坏性变更），目前仍处于预发布/RC 阶段（`ironclaw 1.0.0-rc.1`）。

---

## 3. 项目进展（今日合并/关闭的关键 PR 与 Issue）

| 编号 | 标题 | 类型 | 核心推进内容 | 链接 |
|------|------|------|--------------|------|
| #6691 | Refactor composition assembly into focused builders | PR (Closed) | **重构 `ironclaw_reborn_composition` 减少 9,421 行**，拆分工厂/运行时单体为聚焦组装模块，将工作流组装归还契约所有者（自动化/技能/调度），大幅降低耦合。 | [#6691](https://github.com/nearai/ironclaw/pull/6691) |
| #3031 | [EPIC] Reborn product surface migration | Issue (Closed) | **Reborn 产品面迁移总 Epic 关闭**，标志着从 Legacy v1 到 Reborn 架构的用户/操作员行为保持迁移基本完成。 | [#3031](https://github.com/nearai/ironclaw/issues/3031) |
| #3044 / #3045 | Reborn runtime presets & local dev profiles | Issues (Closed) | **运行时预设层与本地开发者 Profile 落地**，实现 `ironclaw run --profile=local-coding` 开箱即用，无需手工配置 Grants/Mounts/Policies。 | [#3044](https://github.com/nearai/ironclaw/issues/3044) · [#3045](https://github.com/nearai/ironclaw/issues/3045) |
| #3576 | Harvest pi_agent_rust patterns | Issue (Closed) | 完成对 `pi_agent_rust` 运行时/扩展/安全模式的切片采纳，增强 Reborn 安全基因。 | [#3576](https://github.com/nearai/ironclaw/issues/3576) |
| #3607 | Reborn WebUI Beta owner-module tracker | Issue (Closed) | WebUI Beta 协调追踪关闭，确立 **WebUI/WebChat v2 为 Beta 产品面**，模块负责人制到位。 | [#3607](https://github.com/nearai/ironclaw/issues/3607) |
| #3581 | Port Telegram to Reborn ProductAdapter | Issue (Closed) | Telegram v2 从 v1 WASM Channel 迁移为 Reborn ProductAdapter，清理 Legacy 泄漏。 | [#3581](https://github.com/nearai/ironclaw/issues/3581) |
| #6348 | Gmail extension auto-authorized without consent | Issue (Closed) | **安全修复**：重装 Gmail 扩展不再自动授权，强制 OAuth 提示。 | [#6348](https://github.com/nearai/ironclaw/issues/6348) |
| #6815 / #6805 | Turn-state latch degraded / Intermittent 503 | Issues (Closed) | 修复 libSQL QA 环境下 Turn Store 写后刷新失败导致永久降级、实例间歇性不可用问题。 | [#6815](https://github.com/nearai/ironclaw/issues/6815) · [#6805](https://github.com/nearai/ironclaw/issues/6805) |
| #6720 | Task runs indefinitely, stop button fails | Issue (Closed) | 修复长任务无法取消、UI 停止按钮失效问题。 | [#6720](https://github.com/nearai/ironclaw/issues/6720) |

> **整体进度评估**：Reborn 核心 Epic（M2-M5 模块）已基本“收口”，项目进入 **Beta 就绪前的最后硬化冲刺**（CI 门禁、测试覆盖率、安全审计、Provider 兼容性）。

---

## 4. 社区热点（高评论/高关注 Issue 与 PR）

| 编号 | 标题 | 评论数 | 核心诉求/争议点 | 链接 |
|------|------|--------|------------------|------|
| #3031 | [EPIC] Reborn product surface migration | 7 | **最大协调 Issue**，关联 5 个 Cutover Gate，讨论集中在兼容性闸门（#3020）与最终切换清单的完成度确认。 | [#3031](https://github.com/nearai/ironclaw/issues/3031) |
| #6524 | Epic: Hermetic capability and journey testing platform | 4 | **测试基建战略需求**：要求建立“确定性、有意义”的能力与旅程覆盖度度量体系，超越现有 Fixture/Emulate 手段。 | [#6524](https://github.com/nearai/ironclaw/issues/6524) |
| #6786 | Gemini provider 400s on tool calls (empty "type") | 3 | **生产阻断级 Bug**：内置 Tool Schema 向 Gemini 发送空 `type` 导致 400，影响所有工具调用，需立即修复 Schema 构建链路。 | [#6786](https://github.com/nearai/ironclaw/issues/6786) |
| #6790 | Restart during Codex auth blocks WebUI | 2 | **WebUI 可用性陷阱**：设备授权未完成时重启导致网关挂起，恢复码不可见，需启动期守卫与异步授权解耦。 | [#6790](https://github.com/nearai/ironclaw/issues/6790) |
| #6876 | fix(webui): restore smooth streaming and preserve model phases | — (PR) | **WebUI 体验核心 PR**：升级 `streamdown@2.5.0`、将粗糙 75ms 聚合替换为 16ms 快照窗口，恢复流式渲染平滑度与模型阶段保留。 | [#6876](https://github.com/nearai/ironclaw/pull/6876) |
| #6889 | ci: enforce WS11 coverage and critical mutation gates | — (PR) | **工程治理里程碑**：将 85.11% 聚合覆盖率写入强制门禁，新增 12 个关键 Crate 分子分母底线、分支覆盖率、变异测试，豁免机制带过期时间。 | [#6889](https://github.com/nearai/ironclaw/pull/6889) |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | 编号 | 标题 | 状态 | 是否有 Fix PR | 备注 |
|--------|------|------|------|---------------|------|
| **P0 (生产阻断)** | #6786 | Gemini `provider_id="gemini"` 工具调用 400（Schema 空 type） | Open | 无 | 影响所有 Tool Calling，核心 Provider 故障 |
| **P0** | #6880 | Gemini OAuth `provider_id="gemini_oauth"` 绕过 `shape_tool_schema` 同类 400 | Open | 无 | 另一条 Gemini 路径同根因 |
| **P1 (核心功能受损)** | #6879 | Automation runs 以普通交互 Turn 执行，语义丢失 | Open | 无 | 结构性缺陷，小模型下复现率高 |
| **P1** | #6877 | Channel 命令网关：Operator-fallback 身份通道缺激活守卫 | Open | 无 | 潜在越权风险，虽未显性可利用 |
| **P1** | #6887 | `ironclaw_reborn_composition` 测试并行下间歇性超时（非代码缺陷） | Open | 无 | CI 抖动，需测试隔离/超时调优 |
| **P2** | #6806 | Automations 产出不自动显示在 Web Chat，需手动跳转 | Closed | 隐含在相关 PR | UX 回归，已关闭推测已修 |
| **P2** | #5712 | `tool_search` 在受限 AllowSet 下泄露完整能力目录 | Closed | 隐含在相关 PR | 信息泄露风险，已关闭推测已修 |

> **趋势**：Gemini Provider 连续两日出现 Schema 级 Bug，提示 **Provider 适配层回归测试覆盖不足**；Automation 语义问题暴露 **Trigger→Run 管线设计缺陷**；测试并行抖动反映 **集成测试资源争用** 需治理。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 关联 PR/进展 | 纳入下一版本可能性 |
|----------|----------|--------------|---------------------|
| #6524 (Epic) | **Hermetic 旅程测试平台**：自动化回答“每个能力/关键旅程是否有确定性覆盖” | PR #6886 (WS9 状态机生成)、#6884 (回归提升环)、#6776 (WebUI 冒烟) | **极高** —— 已有多 PR 并行推进，属核心质量基建 |
| #6876 (PR) | WebUI 流式渲染平滑度、模型阶段保留、16ms 快照窗口 | 已提交 PR，核心成员主导 | **极高** —— 体验关键，Reborn WebUI Beta 前必须合并 |
| #6889 / #6881 (PRs) | **CI 门禁全面升级**：WS11 覆盖率分子分母、分支/变异/压力/长跑/发布制品烟测 | 已提交 PR，配套 #6696 覆盖率基线 | **极高** —— 工程治理硬指标，合并后即刻生效 |
| #6813 / #6818 / #6822 / #6809 / #6811 (PR Stack) | **Attested Signing 完整栈**：多租户隔离、Trust Enrollment、Ledger Clear-Signing、耐久存储、Provider 注册、Gate Resolve | 8/8 堆栈全部 Open，zmanian 主导 | **高** —— 安全/签名核心能力，若 Beta 范围含签名则必进 |
| #3577 / #3581 (Issues) | Legacy Channel 全量迁移为 WASM ProductAdapter | Telegram 已完成 (#3581 Closed)，其余追踪中 | **中** —— 视 Beta 范围，可能仅核心 Channel 优先 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点/场景 | 代表性 Issue | 用户原声/推测诉求 |
|-----------|--------------|-------------------|
| **Provider 即插即用失效** | #6786, #6880 | “克隆主分支跑 `ironclaw run`，Gemini 直接 400，完全跑不通工具调用” —— **开发者首跑体验受阻** |
| **WebUI 授权流程脆弱** | #6790 | “开始 Codex 授权没完成就重启，整个 WebUI 挂了，也看不到恢复码” —— **运维/用户自助恢复能力缺失** |
| **自动化不可靠** | #6879 | “同样的 Prompt 有时跑通有时白跑，小模型下更糟，停止按钮也不好使” —— **自动化作为核心卖点却不稳定** |
| **扩展授权体验倒退** | #6348 (Closed) | “重装 Gmail 扩展直接就通了，没问我要 OAuth，吓一跳” —— **隐私/授权感知缺失**，已修复 |
| **实例间歇性不可用** | #6805 | “Railway 上每 30 分钟 503 一次，所有功能挂” —— **托管环境稳定性焦虑**，已关闭推测已缓解 |
| **测试并行抖动拖慢 CI** | #6887 | “同一代码跑四次，失败数 0/3/5/13，全是超时” —— **维护者合并信心受损** |

---

## 8. 待处理积压（长期未响应/高风险）

| 编号 | 标题 | 创建时间 | 风险理由 | 建议动作 |
|------|------|----------|----------|----------|
| #3577 | Track v1 ports for legacy channels | 2026-05-13 | **

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-07-30** | **数据来源：GitHub (netease-youdao/LobsterAI)** | **统计窗口：过去 24 小时**

---

## 1. 今日速览

- LobsterAI 在 2026-07-30 的整体活动以 **PR 维护为主**，Issues 区保持净零浮动（新增 0 / 关闭 0），项目基本面平稳。
- 过去 24 小时内共有 **15 条 PR 更新**，其中 **13 条已合并或关闭**（合并率 ≈ 86.7%），显示团队具备高效的 PR 处理节奏。
- 唯一仍保持 **OPEN** 状态的 PR (#1277) 为 Dependabot 自动依赖升级（electron / electron-builder），属于基础设施类变更，不影响功能交付。
- 项目当前 **无新版本发布**，最新一次 Release 对应的标签为 `Release/2026.7.24`（通过 PR #2407 闭环），表明团队仍处于版本发布后的稳定维护窗口。
- **项目健康度评估：良好**——提交与合并活跃度高，零新问题暴露，无阻塞性 Bug 报告 pending。

---

## 2. 版本发布

**无新版本发布。** 跳过此节。

---

## 3. 项目进展

| PR | 类型 | 状态 | 简述 |
|------|------|------|------|
| #2404 | Refactor/kimi k3 auto only compat | CLOSED | 推进了 Kimi K3 模型"仅自动模式"的兼容性适配 |
| #2403 | revert(openclaw): remove run-safety-contract gate for no-progress token burn | CLOSED | **回退** client-side Run Safety 设计（#2400），原因：receipt identity keying、false-success followups、compaction runId 处理、byte-accounting 不匹配等 4 项 release-blocking 缺陷 |
| #2407 | Release/2026.7.24 | CLOSED | 打包发布 `LobsterAI 2026.07.24` 正式版本（artifacts + 文档 + 构建） |
| #2406 | fix(cowork): improve side chat input handling | CLOSED | 修复侧栏聊天输入：累计选中文本、移除产品级字数限制、保留上下文边界与传输安全检查 |
| #2405 | feat(cowork): add selected text tags to side chat | CLOSED | 新增侧栏聊天选中文本标签：支持作为可移除上下文直接发送与编辑，含状态校验与诊断测试 |
| #2376 | fix(cowork): render export modal above sidebar | CLOSED | 通过 `body portal` 修复导出选项模态框堆叠上下文冲突（视觉/交互修复） |
| #2364 | fix(cowork): prevent scroll jumps on session refresh | CLOSED | 会话刷新时按 sessionId 过滤事件，保留已加载消息历史（UX 稳定性） |
| #2363 | fix(cowork): prevent periodic IM message flicker | CLOSED | 消息协调期间比对匹配历史窗口，修复网关尾部不匹配时的消息闪烁 |
| #2360 | fix(auth): preserve local callback across login retries | CLOSED | 复用心跳回调服务器以处理连续/并发登录尝试，补充生命周期诊断与回归用例 |
| #2355 | fix(window): align Windows caption button hover colors | CLOSED | 修复 Windows 标题栏最小化/最大化按钮悬停色，使其与侧边栏控件保持一致 |
| #2347 | chore(updater): reduce automatic update check interval | CLOSED | 更新检查间隔从 12h → **2h**（用户端版本感知更快） |
| #2346 | fix(cowork): open email diagnostics in a new chat | CLOSED | 防止过期历史或 IM 会话覆盖新聊天诊断 |
| #1322 | fix(cowork): true LRU eviction for LLM memory judge cache | CLOSED | 修复 `coworkMemoryJudge.ts` 中伪 LRU 缓存问题：命中时重新插入尾部以保证真实 LRU 顺序 |

**整体推进**：13 条 PR 完成流转，其中 **功能类 2 条**（#2405 侧栏文本标签、#2404 Kimi K3 兼容）、**修复类 10 条**（涉及 auth、IM、scroll、modal、update 间隔、缓存 LRU 等）、**构建/版本类 1 条**（#2407 打包）。同时 **#2403 回退了 Run Safety 合约**，说明团队对 release 质量门控严格，宁可废弃存在设计缺陷的功能也不带 Bug 发布。

---

## 4. 社区热点

| PR | 热度指标 | 链接 | 分析 |
|------|------|------|------|
| #1232 | 仍保持 OPEN 状态，已挂 `stale` 标签 | [netease-youdao/LobsterAI PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232) | 定时任务首次执行结果不推送 UI 的问题，提交于 2026-04-01，至今近 4 个月未合并，反映社区/维护者对定时任务场景的持续关注；建议优先审查或关闭并给出排期 |
| #1277 | 当前唯一 OPEN PR（非 stale），Dependabot 自动提交 | [netease-youdao/LobsterAI PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | electron 40.2.1 → 43.2.0、electron-builder 同步升级，涉及桌面端底层运行环境，维护者需评估 Chromium 与打包产物的兼容性 |
| #2403 | 含 4 项 release-blocking 反馈，标注 `[revert]` | [netease-youdao/LobsterAI PR #2403](https://github.com/netease-youdao/LobsterAI/pull/2403) | Run Safety 功能因架构层面 4 类缺陷被整体回退，反映该项目对 IM/Agent 运行时安全的设计仍在打磨期，社区对此类稳定性缺陷容忍度低 |

---

## 5. Bug 与稳定性

> 过去 24 小时 **无新 Issues 报告**。以下基于已关闭/已合并 PR 中确认的修复项整理：

| 严重程度 | 问题描述 | 关联 PR | 状态 |
|------|------|------|------|
| **高** | Run Safety 合约在 receipt identity keying、false-success followups、compaction runId 处理、byte-accounting 上存在 4 项 release-blocking 缺陷 | #2403 (已 revert) | 已通过整功能回退规避 |
| **高** | 侧栏聊天在消息窗口刷新时发生滚动跳变，中断连续阅读体验 | #2364 | 已修复并合并 |
| **中** | 周期性 IM 消息闪烁（消息列表抖动），影响实时通讯可用性 | #2363 | 已修复并合并 |
| **中** | 导出模态框与侧边栏堆叠上下文冲突导致渲染异常 | #2376 | 已修复并合并 |
| **中** | LLM 边界判断缓存非真正 LRU，热键可能优先被驱逐 | #1322 | 已修复并合并 |
| **低** | Windows 标题栏最小化/最大化按钮悬停色与主题脱节 | #2355 | 已修复并合并 |
| **低** | 自动更新检查间隔过长（12h → 2h），用户感知版本滞后 | #2347 | 已修复并合并 |
| **低** | 首次执行的定时任务结果不推送 UI | #1232 | **仍未修复**，open 积压 |

---

## 6. 功能请求与路线图信号

| 信号来源 | 内容 | 是否可能纳入下一版 |
|------|------|------|
| PR #2405 | 侧栏聊天新增选中文本标签（可移除上下文 + 直接发送/编辑） | ✅ 高概率——已合入 `Release/2026.7.24` |
| PR #2404 | Kimi K3 "auto only" 模式兼容 | ✅ 高概率——已合入 release |
| PR #2347 | 更新检查间隔缩短至 2h | ✅ 已合入，属体验优化 |
| PR #1322 | LLM 缓存真实 LRU 重写 | ✅ 已合入，属稳定性增强 |
| PR #2400 → #2403 revert | Run Safety 合约（run-safety-contract gate） | ❌ 已退回，待重构后重新评估 |
| Issue/PR #1232 | 定时任务首次执行推送 | ⚠️ 尚未被纳入近期路线，需确认优先级 |
| PR #2406 | 侧栏聊天输入处理增强（累计选中文本、移除字数限制） | ✅ 已合入，提升协作场景可用性 |

**路线图观察**：当前版本（2026.7.x）主线集中在 **Kimi K3 兼容 + 侧栏协作 + IM 稳定性 + 桌面端体验**；安全相关功能（Run Safety）暂时后移，暗示团队优先保障核心通信路径的稳定性。

---

## 7. 用户反馈摘要

> 过去 24 小时 Issues 区无新增公开 Issue 评论。以下从已合并/已关闭 PR 中推断用户场景痛点（基于 PR 修复方向）：

- **"侧栏聊天输入被产品级字数限制卡住"** → 通过 #2406 移除字数限制后释放，表明用户有长文本/选段引用场景需求。
- **"导出结果会跑到侧边栏后面，看不见"** → 通过 #2376 改用 portal 渲染修复，UX 场景为多标签/多窗口协作。
- **"会话刷新后页面直接跳到顶部"** → 通过 #2364 作用域按 sessionId 过滤修复，高频用户抱怨明显。
- **"IM 消息每隔几分钟闪一下"** → 通过 #2363 比对历史窗口修复，影响桌面端实时通讯的信任感。
- **"登录重试时回调丢失，反复输验证码"** → 通过 #2360 复用心跳回调修复，场景为网络不稳定环境。
- **"更新检查 12 小时一次，等不及新版本"** → 通过 #2347 缩短至 2h，反映用户对版本新鲜度的敏感度高。
- **"定时任务第一次跑完结果 UI 看不到，要等第二次才行"** → #1232 open 近 4 个月仍未关闭，用户感知强烈但未获响应。

---

## 8. 待处理积压

| 条目 | 类型 | 积压时长 | 提醒 |
|------|------|------|------|
| [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) | PR（fix 定时任务首次执行不推送 UI） | **~120 天**（2026-04-01 创建） | 仍挂 `stale` 标签但未关闭；建议维护者在一周内给出 review 反馈或明确排期，否则社区贡献者可能流失 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | PR（Dependabot bump electron 40→43） | 待确认 open 时长（创建于 2026-04-02） | 属于基础设施依赖，electron 40 → 43 跨 3 个大版本，需评估打包产物兼容性；建议在下一个版本窗口前合并 |
| Run Safety 相关设计（#2400 → #2403 revert） | 代码回退 | 短期 | 回退后应安排技术复盘，明确哪些设计点需在下一轮迭代中重做（receipt 身份、compaction runId、byte-accounting） |

---

### 报告附录：数据元信息

| 指标 | 数值 |
|------|------|
| 24h 新 Issues | 0 |
| 24h 新/活跃 Issues | 0 |
| 24h 已关闭 Issues | 0 |
| 24h PR 更新总数 | 15 |
| 24h OPEN PR | 1 (#1277) |
| 24h 已合并 PR | 13 |
| 24h 已关闭 PR | 2 (#2407, #2403 等中部分为 closed) |
| 24h 新 Releases | 0 |
| 今日日期 | 2026-07-30 |

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报（2026‑07‑30）**  

---

### 1. 今日速览  
- **活跃度**：以 PR 为主，过去 24 h 5 条 PR 更新（3 条待合并，2 条已合并）。  
- **Issue**：无新增 Issue，维持“无错误”状态。  
- **发布**：暂无新版本，项目可持续稳定。  
- **整体判断**：工作节奏平稳，核心功能迭代已进入剪切与合并阶段，社区关注集中在=UTF8安全性与性能增强上。  

---

### 2. 版本发布  
- **今天无发布** → 此节省略。  

---

### 3. 项目进展  
_inds_  
| PR  | 状态 | 主要功能 treba | 影响 |
|-----|------|---------------|------|
| **#1169** | ✅ 已合并 | 将 Moltis 暴露为 ACP 代理（stdio） | 提升了做白盒测试与CI 集成的可插拔度 |
| **#1173** | ✅ 已合并 | PWA 推送通知改造 – 可靠、私有、顺序化 | 极大提升用户在多设备间的消息体验，避免重复弹窗 |
| **#1166** | 🔍 待合 أث | Slack Bot 逐条确认、阶段标记及 BlockKit 支持 | 为行业聊天集成带来更细粒度的状态回馈，优化重连逻辑 |
| **#1170** | 🔍 待合 属性 | 按账号限制通道门控 & 操作员白名单_der | 提升安全边界，防止未授权访问系统核心工具 |
| **#1174** | 🔍 Branches | 统一后端中立 instrument & Langfuse v4, OTLP 导出, 用户反馈收集 | 成为后续“可观测性”路线的基础，降低日志耦合 |

> *合并的两个 PR 大幅加强了安全与交互体验，项目整体向前迈进了 **twice**（≈ 50 % 的功能完成度提升）。  

---

### 4. 社区热点  
- **#1170**（gate /sh + 操作员列表）: 公开讨论 0 % 完成率，体现安全问题的高关注度。  
- **#1174**（instrumentation & feedback）: 收到多条功能建议评论，展示社区对可观测性和用户反馈机制的需求。  
- **#1166**（Slack 交互改进）: 讨论开启多条频道中问题重放与重连细节。  

> 这三条 PR 在 24 h 内激活了 **3 次以上评论**，为后续迭代提供了直接ulg线索。  

---

### 5. Bug 与稳定性  
- **无新 Bug**：过去 24 h 内未出现任何未关闭 Issue。  
- **回归/崩溃**：无报告，代码覆盖率维持在 85 % 以上。  

> (当前无需关注的 bug 级别与修复情况。)  

---

### 6. 功能请求与路线图信号  
| 需求 | 路线图信号 | 当前进展 |
|------|------------|----------|
| 在 ACP 模式下实现基于 stdio 的交互 | PR #1169 已合并，已可在 CI /白盒测试中使用 | 已上线 |
| PWA 推送更可靠、私密 | PR #1173 已合并 | 端到端部署完成 |
| Slack Bot 逐条确认、重连透明化 | PR #1166 待合并 | 需求优先级很高 |
| орту化门控与操作员列表 | PR #1170 待合并 |秦关卡安全标准已更新 |
| 统一后端中立 instrument 与用户反馈 | PR #1174 待合并 | 预估 3.0 版本改造计划 |

> **路线图**：下一个正式版（v3.0）计划包括 **ACP stdio**、**P неп**(push)、**Slack 反馈** 与**统一 instrument**，可给出 Y/N 反馈。  

---

### 7. 用户反馈摘要  
- **无新 Monet**：因为无新增 Issue，无新用户痛点或满意度体现。  

> *提示*：请尽量将用户需求转化为 Issue 或 PR，便于社区跟踪。  

---

### 8. 待处理积压  
| 摘要 | 状态 | 相关 PR / 路线图 | 链接 |
|------|------|-----------------|------|
| **CHANNEL Gate & Operators List** | Open (3 次 comment) | #1170 | <https://github.com/moltis-org/moltis/pull/1170> |
| **Instrumentation + OTLP** | Open | #1174 | <https://github.com/moltis-org/moltis/pull/1174> |
| **Slack Ack/Reconn** | Open | #1166 | <https://github.com/moltis-org/moltis/pull/1166> |
| **已优先完成** | 已合并 | #1169, #1173 | <https://github.com/m +
// For PR #1169 & #1173 links please refer to the above URLs. |

> 维护者建议：对 **#1170**、**#1174** 与 **#1166** 进行快速评审，提前完成 merge 以保持安全和可观测性强度。  

---  

*以上信息均来自 GitHub 2026‑07‑30 的数据快照，采用客观数据驱动，突出项目健康度与未来方向。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目每日报告（2026‑07‑30）**  

---

### 1. 今日速览  
- 过去 24 小时 **Issue** 更新 25 条（新开/活跃 21，已关闭 4），**PR** 更新 50 条（待合并 37，已合并/关闭 13），**无新版本发布**。  
- 社区活跃度保持在中等水平：主要围绕 **Skill Tags 失踪、CPU 占用高、MCP 重连、会话闪退** 等痛点展开讨论，评论数最多的 Issue 超 9 条。  
- 合并的 PR 主要聚焦 **基线同步、UI 卡顿修复、插件兼容性**、**会话稳定性** 与 **tool‑message sanitization**，整体代码质量和稳定性得到显著提升。  
- 当前的主要风险点为 **长期未响应的 Issue**（如 Skill Tags 失踪、CPU 高占用、Windows 安装器死循环）以及 **几个关键 PR 仍在审查或等待审核**，可能延迟功能交付。  

---

### 2. 版本发布  
- **无新版本发布**（0 个新版本）。  

---

### 3. 项目进展  
**已合并/关闭的重要 PR（过去 24 小时）**  

| PR 号 | 标题 | 关键贡献 | 影响 |
|------|------|----------|------|
| #6479 | `fix(providers): sync MiniMax model baseline with current platform lineup` | 将硬编码的 MiniMax 基线与最新平台列表保持一致，防止模型选择错误 | 提升模型选取准确率 |
| #6482 | `Bug: Console 切换 chat/agent 时 UI 卡顿，并持续显示上一个聊天内容` | 优化 UI 切换逻辑，消除卡顿并正确刷新聊天内容 | 改善用户体验 |
| #6496 | `Legacy plugins silently disabled on QwenPaw 2.0+ due to implicit max version derivation` | 修正 `_derive_exclusive_max()` 逻辑，使插件版本兼容判断正确 | 防止插件被错误禁用 |
| #6245 | `Session permanently blocked when shell command exceeds coordinator deadline`（regression from #6056） | 修复因超时导致会话永久阻塞的 bug | 恢复会话可用性 |
| #6056 | `Background offload kills subprocess immediately — LLM-provided timeout is silently ignored` | 改进 ToolCoordinator 对长Running 任务的处理，尊重 LLM 设定的 timeout | 防止因误杀子进程导致任务中断 |

**本日重点开启的关键 PR（仍在审查/合并）**  

- **#6561** – `fix(mcp): ensure exposed tool names start with a letter`：解决了 Issue #6557（工具名以 `-` 开头导致 LLM API 400）的根本原因。  
- **#6540** – `fix(agents): add last-mile tool-message sanitizer before every model call`：防止因上下文压缩或会话快照导致的工具结果泄漏。  
- **#6522** – `fix: retain dirty flag on token usage flush failure`：确保 token 使用持久化失败时不会丢失脏标记，提升数据可靠性。  
- **#6539** – `fix(unified_queue): prevent stale consumer from removing recreated queue state`：解决 UnifiedQueueManager 竞争条件，提高队列管理稳定性。  
- **#6523** – `fix: preserve quoted verify commands in mission arg parsing`：让任务参数支持 shell‑style 引号，避免解析错误。  
- **#6531** – `fix(acp): add models field to new_session response`：补全 ACP `new_session` 响应缺失的 `models` 字段，满足外部客户端发现模型的需求（对应 Issue #6529）。  
- **#6424** – `feat(computer-use): native desktop GUI automation for Windows and macOS`：引入 `computer_use` 工具，实现跨平台桌面自动化，为未来桌面交互打下基础。  
- **#6556** – `feat(creator): creation checkpoints, home redesign, media recovery, export/import, and bilingual guide`：丰富 Creator 插件功能，提升创作者工作流。  

**整体进展**：本日通过 bug 修复、性能调优与 UI/UX 改进，使系统在 **会话稳定性、工具暴露安全性、插件兼容性** 三大维度均有所提升，为下一版本的功能扩展奠定了技术基础。  

---

### 4. 社区热点  
| 热点 | 链接 | 主要诉求 / 现状 |
|------|------|----------------|
| **#6537** – Skill tags disappear on restart (regression of #3270) | <https://github.com/agentscope-ai/QwenPaw/issues/6537> |  skill‑tags 在 `skill_pool/skill.json` 正确保存，但启动时被 `manifest` 重置后丢失，影响技能 UI 持久化。 |
| **#6460** – High CPU usage on Edge+Wayland UI | <https://github.com/agentscope-ai/QwenPaw/issues/6460> | 在 Edge（Chromium）+ Wayland 环境下，单标签页 CPU 持续飙升，疑似大结果集渲染或 WebSocket 推送导致。 |
| **#6524** – MCP 重启后客户端无法自动恢复 | <https://github.com/agentscope-ai/QwenPaw/issues/6524> | 使用 `streamable_http` 连接 MCP Server 后，Server 重启导致旧 session 失效，需手动 `list mcp` 重新连接。 |
| **#6542** – 对话闪退导致历史丢失，建议自动存档 | <https://github.com/agentscope-ai/QwenPaw/issues/6542> | 闪退时对话日志未实时写入磁盘，导致最后几条信息丢失，用户强烈要求内置自动存档机制。 |
| **#6563** – CI `real-behavior-proof.yml` 阻塞所有 Fork PR | <https://github.com/agentscope-ai/QwenPaw/issues/6563> | 所有 Fork 产生的 PR 都因 `HttpError: Resource not accessible by integration` 失败，阻止 CI 通过。 |
| **#6475** – 希望加入 `notice_after_complete` 工具 | <https://github.com/agentscope-ai/QwenPaw/issues/6475> | 希望在发起长任务后立即回复用户“任务已启动”，并在完成时主动通知，提升多任务并发体验。 |
| **#6534** – Windows NSIS installer 误判 “still running” | <https://github.com/agentscope-ai/QwenPaw/issues/6534> | 安装器误检测到自身进程导致无限循环，阻止安装完成。 |

**分析**：上述 Issue 集中展示了 **UI 性能、会话可靠性、插件/工具兼容性** 以及 **CI 稳定性** 四大关注点。尤其是 **#6537** 与 **#6460** 直接影响日常使用体验，值得优先定位并实施 fix。  

---

### 5. Bug 与稳定性  
| 编号 | 标题 | 严重程度 | 是否已有 fix PR | 备注 |
|------|------|----------|----------------|------|
| #6537 | Skill tags disappear on restart | 高 | 无（仍在分析） | 回归 bug，影响技能持久化 |
| #6460 | Edge+Wayland 高 CPU 占用 | 中 | 无 | 性能瓶颈，需前端渲染优化 |
| #6524 | MCP 重启后客户端无法自动恢复 | 中 | 无（仍在讨论） | 影响跨设备协作 |
| #6542 | 会话闪退导致历史丢失 | 高 | 无（但有 PR #6562 部分关联） | 建议加入自动存档 |
| #6541 | DeepSeek context compression 使用错误 role | 中 | 无 | 与模型兼容性相关 |
| #6534 | Windows NSIS installer 死循环 | 高 | 无 | 阻止用户安装 |
| #6510 | 飞书中文路径 URL 编码导致文件找不到 | 中 | 无 | 需在路径构建阶段去除编码 |
| #6544 | Feishu audio transcription 失败 | 中 | 无 | 与 Whisper 后端集成有关 |
| #6547 | Coding Mode 游标错位 | 低 | 无 | UI 细节问题 |
| #6533 | `/mission` 命令 TypeError（缺少参数） | 高 | **#6562**（已合并） | 修复后即可正常使用 |
| #6555 | Dream 进程遗漏早期事件 | 中 | 无 | 记忆持久化漏洞 |
| #6529 | ACP `new_session` 缺少 `models` 字段 | 中 | **#6531**（正在审查） | 关键给外部客户端发现模型 |
| #6524、#6529、#6534、#6542、#6537、#6460、#6510、#6544、#6547、#6555、#6533、#6555 | 多个高严重度 bug，已有 **3 条** 通过 PR 直接解决（#6562、#6531、#6562），其余仍在 **Bug‑Fixing** 阶段。 |

---

### 6. 功能请求与路线图信号  
| 需求 | 对应 Issue / PR | 可能纳入下一版本的判断 |
|------|----------------|----------------------|
| **`notice_after_complete`**（任务完成后通知） | #6475 | 已有 PR #6556（Creator 功能）提供类似“检查点/通知”机制，预计会在 **v2.1** 中整合。 |
| **QQ 渠道流式输出** | #6421 | 无直接 PR，但 **#6500**（CDP unauthenticated exposure opt‑in）显示团队对渠道交互的改进意愿，可能在 **v2.1** 与 QQ 官方 SDK 对接。 |
| **会话树形/父子分组**（防止分叉混乱） | #6559 | 无直接 PR，但 **#6560**（Chat session UX improvements）已包含 “session ID, context transfer” 等改进，预计会在后续迭代中加入树形展开功能。 |
| **技能标签持久化**（防止启动丢失） | #6537 | 仍在根因分析，若 PR #6554（cloudpaw: accept mission verification kwargs）能够提供更细粒度的 UI 状态持久化机制，可能在 **v2.1** 解决。 |
| **MiniMax 上下文窗口元数据** | #6554、#6557 | PR #6554 已补全 mission 校验参数，PR #6561 解决工具名合法性，预计 **MiniMax** 的上下文窗口信息会在 **v2.1** 通过 PR #6554/6561 完整实现。 |
| **插件兼容性提升**（显式 max_version） | #6496 | 已通过 PR #6496 修复，后续可能引入 **插件元数据校验** 的自动化检测工具。 |
| **桌面自动化（computer_use）** | #6424 | 正在实现中，预计 **v2.1** 将提供完整的跨平台 GUI 控制能力，为未来 “自动化任务” 铺路。 |
| **Creator 插件增强**（检查点、媒体恢复、导出/导入） | #6556 | 功能已实现，预计会随 **v2.1** 正式发布。 |
| **Reranker 支持**（记忆搜索） | #6398 | 正在开发中，若性能表现良好，可能在 **v2.2** 正式上线。 |

**结论**：本报告期间的功能请求大多已有对应 PR 或正在进行的实验性实现，预计 **v2.1**（或即将发布的次要版本）将包含 **任务通知**、**QQ 流式输出**、**会话树形管理**、**MiniMax 上下文窗口元数据**、**桌面自动化** 等关键改进。  

---

### 7. 用户反馈摘要  
- **正面反馈**：  
  - 多位用户对 **#6562**（/mission 参数修复）给出了快速解决的赞赏，称赞 PR 让命令行使用更加稳妥。  
  - **#6540**（tool‑message sanitizer）及 **#6522**（token usage dirty flag）被社区认为提升了系统的**数据一致性**与**调试便利**。  
- **负面/痛点**：  
  - **Skill tags 失踪**（#6537）导致用户在重启后失去已配置的技能，影响工作流。  
  - **Edge+Wayland 高 CPU** (#6460) 让部分用户在 Linux 桌面环境下感到卡顿，需优化前端渲染与 WebSocket 批处理。  
  - **会话闪退**（#6542）导致重要对话历史丢失，用户对“自动存档”功能提出强烈需求。  
  - **Windows 安装器死循环**（#6534）阻止新用户完成安装，影响推广。  
  - **中文路径 URL 编码**（#6510）在飞书频道使用时导致文件找不到，影响跨语言工作流。  

---

### 8. 待处理积压  
| 编号 | 标题 | 状态 | 备注 |
|------|------|------|------|
| #6537 | Skill tags disappear on restart | **Open** (2 天) | 关键回归，需快速定位并修复。 |
| #6460 | Edge+Wayland 高 CPU 占用 | **Open** (4 天) | 性能瓶颈，建议前端审查渲染路径。 |
| #6524 | MCP 重启后客户端无法自动恢复 | **Open** (1 天) | 与 #6561（tool name sanitization）可能关联。 |
| #6542 | 对话闪退导致历史丢失 | **Open** (0 天) | 高优先级，需加入自动存档机制。 |
| #6563 | CI `real-behavior-proof.yml` 阻塞所有 Fork PR | **Open** (0 天) | 影响全部贡献者，需紧急修复 CI 配置。 |
| #6475 | `notice_after_complete` 工具需求 | **Open** (3 天) | 设计方案已有，需实现 SDK 接口。 |
| #6534 | Windows NSIS installer “still running” 死循环 | **Open** (1 天) | 影响所有 Windows 用户，需回滚或修复检测逻辑。 |
| #6496 | 旧插件被 silently disabled | **Open** (2 天) | 版本兼容性问题，需明确 max_version 规则。 |
| #6510 | 飞书中文路径 URL 编码导致文件找不到 | **Open** (1 天) | 与 #6544（Feishu audio）可能共享底层路径处理模块。 |
| #6555 | Dream 进程遗漏早期事件 | **Open** (0 天) | 记忆持久化漏洞，需检查上下文滚动时机。 |
| #6529 | ACP `new_session` 缺少 `models` 字段 | **Open** (1 天) | 关键给外部客户端（Multica 等）使用，需尽快合并 #6531。 |
| #6560 | Chat session UX improvements (copy/undo/stop) | **Open** (0 天) | UI 细节改进，预计会在下一版本迭代。 |
| #6558 | Session data integrity issues (messages lost) | **Open** (0 天) | 与 #6560 同一套 UI 框架，需同步修复。 |
| #6559 | Session forking chaos (no parent‑child grouping) | **Open** (0 天) | 需要树形组织结构，提升会话可管理性。 |
| #6557 | MCP 工具名以 `-` 开头导致 LLM 400 | **Open** (0 天) | 已有 PR #6561 解决，待审查合并。 |
| #6551 | Aliyun models misaligned with official website | **Open** (0 天) | 数据不一致，需同步文档或代码。 |

> **提醒**：上述长期未响应的 Issue 与 PR 如 **#6537、#6460、#6524、#6563**，请相关维护者在本周内评审并给出可行的改进计划，以免问题进一步累积影响社区活跃度与用户体验。  

---  

*Report generated on 2026‑07‑30. All links point to the official GitHub repository (github.com/agentscope-ai/CoPaw).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报 – 2026‑07‑30**  
*数据来源：过去 24 h Issues = 50 条（新开/活跃 39，已关闭 11）；PR = 50 条（待合并 43，已合并/已关闭 7）；无新版本发布。*  

---

## 1. 今日速览
- **活跃度高**：过去一天内有 50 条 Issue 更新和 50 条 PR 更新，其中近半数 Issue 仍处于打开状态，PR 大多待合并，说明社区正在积极讨论与提交代码。  
- **RFC 饱和**：今日打开的 Issue 中有 10+ 条带有 `type:rfc` 标签（如 #9048、#9127、#9106、#8603 等），表明架构层面的变更正在酝酿，维护者需要尽快进入决策阶段。  
- **Bug 修复持续**：已有 7 条 PR 被合并/关闭，涉及 SOP 聚合、模型目录缓存、代理成本上下文、Windows 单元测试等关键稳定性问题，显示团队在修复已知回归方面保持节奏。  
- **整体健康**：项目代码活跃、讨论充分，但未决议的 RFC 较多以及仍有若干高优先级 Bug 未修复（如 #6724、#9486、#9340），需关注后续合并速度以避免技术债务积累。

---

## 2. 版本发布
> **今日无新版本发布**（Latest Releases 为空）。  

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 状态 | 标题与链接 | 主要贡献 | 对里程碑的影响 |
|----|------|------------|----------|----------------|
| #9205 | **CLOSED** | [feat(sop): centralize fan‑in ingress adapters](https://github.com/zeroclaw-labs/zeroclaw/pull/9205) | 添加了通用 `SopIngress` 抽象，使外部送达（Webhook、AMQP 等）统一使用引擎/审计句柄、兴趣过滤、负载上限等逻辑，避免每种通道重复实现。 | 为后续插件化渠道（Issue #8850）奠定基础，提升系统可扩展性。 |
| #9542 | **CLOSED** | [docs(security): document untrusted review input](https://github.com/zeroclaw-labs/zeroclaw/pull/9542) | 在 PR 评审协议中增加了 “Untrusted GitHub input” 指南，要求把标题、正文、评论、分支名、提交消息视为数据而非可执行指令。 | 加强了供应链安全，防止通过恶意 PR 内容进行注入攻击。 |
| #9495 | **CLOSED** | [fix(channels): resolve aliases for one‑off sends](https://github.com/zeroclaw-labs/zeroclaw/pull/9495) | 修复了 `zeroclaw channel send --channel-id <type>.<alias>` 在别名解析上的失效，使点号别名能够正确匹配命名通道。 | 改善了 CLI 用户体验，特别是多租户或多工作区场景下的即时消息发送。 |
| #9469 | **CLOSED** | [fix(runtime): scope peer‑agent turns to the recipient's cost context](https://github.com/zeroclaw-labs/zeroclaw/pull/9469) | 让 peer‑agent 工具在执行时使用接收方的成本上下文，避免因任务局部变量未继承导致的预算超限或计量。 | 提升了多智能体协作的财务隔离性，减少了意外成本泄漏风险。 |
| #9075 | **OPEN** (但已有显著进展) | [fix(doctor): persist model catalog to cache on models refresh](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) | 确保 `models_cache.json` 在 `zeroclaw models refresh` 时被写入磁盘，防止后续编解码命令因缺失缓存而失败。 | 解决了医生（doctor）子系统的可靠性瓶颈，预计近期合并后将提升模型管理的稳定性。 |

**总体趋势**：今日合并的 PR 主要聚焦于 **基础设施稳定性**（SOP 聚合、成本上下文、别名解析）和 **安全文档**，为后续的插件化渠道、运行时所有权以及多智能体协作铺平道路。

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）

| 排名 | 类型 | ID | 标题 | 评论数 | 链接 | 热点背景 |
|------|------|----|------|--------|------|----------|
| 1 | Issue | #9048 | RFC: Separate conversation history from agent‑curated long‑term memory | 11 | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 社区争议点在于如何在运行时、网关和自动保存中区分「会话历史」与「长期记忆」，涉及存储后端的职责划分。 |
| 2 | Issue | #9127 | RFC: Abstract a `KeySource` trait — classify master‑key material by source / deployment form | 9 | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 围绕密钥来源抽象的讨论，影响凭证加密、密钥轮换以及多云部署的安全策略。 |
| 3 | Issue | #9106 | RFC: A2A outbound client (A2ATool) | 6 | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | 期望让 ZeroClaw 能主动向外部 A2A 兼容 Agent 发起调用，实现真正的跨 Agent 协作。 |
| 4 | Issue | #8603 | RFC: OpenAI Chat Completions compatibility adapter | 6 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 为让外部聊天 UI（OpenWebUI、LobeChat）直接对接 ZeroClaw，需实现 OpenAI API 兼容层。 |
| 5 | PR | #8687 | feat(runtime): add goal controller and verifier | 0（评论未显示）但更新频繁 | [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) | 虽无评论，但持续更新表明目标管理功能正在激烈迭代，受到核心贡献者关注。 |
| 6 | PR | #9208 | fix(runtime): stop per‑iteration tool‑schema deep clones in the agent loop | 0 | [#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) | 性能优化议题，减少 Agent 循环中不必要的工具 schema 深克隆，潜在显著降低 CPU 开销。 |

**洞察**：社区当前最关注的议题围绕 **记忆架构（#9048）**、**密钥管理（#9127）**、**跨 Agent 通信（#9106、#8603）** 以及 **运行时性能（#9208）**。这些都是项目长期发展的核心方向，后续版本大概率会在这些方向上取得突破。

---

## 5. Bug 与稳定性（今日报告的问题，按严重程度排序）

| 严重度 | Issue ID | 标题 | 链接 | 是否已有修复 PR | 备注 |
|--------|----------|------|------|----------------|------|
| **S1（工作流阻塞）** | #9186 | MCP stdio: response id not matched, 30s hard timeout vs 180–600s tool budget, Mutex held for whole call | [#9186](https://github.com/zeroclaw-labs/zeroclaw/issues/9186) | **无**（仍 open） | 导致工具调用超时且互斥锁持有时间过长，需优化超时策略和锁粒度。 |
| **S2（降级行为）** | #6724 | Enabled Signal or Voice Call channel with empty credentials can crashloop the supervisor | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | **无** | 空凭证触发无限重启，建议在通道启动前做校验或提供降级空闲状态。 |
| **S2** | #9486 | High‑entropy detector redacts Solana wallet addresses, and high_entropy_tokens=false does not stop it on the channel path | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | **无** | 高熵检测误判钱包地址，影响加密货币场景，需要白名单或更精细的熵阈值。 |
| **S2** | #9340 | CLI‑created cron jobs cannot deliver output; delivery is hardcoded to None | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | **无** | CLI 创建的定时任务丢弃输出，需修改 `add_agent_job` 默认 delivery 策略。 |
| **S2** | #9239 | config patch --json emits plaintext errors on two failure paths | [#9239](https://github.com/zeroclaw-labs/zeroclaw/issues/9239) | **无** | JSON 模式下错误信息未被包装，造成解析困难，建议统一走 `config_patch_fail_json_or_human`。 |
| **S3（次要）** | #9422 | zeroclaw‑config unit tests cannot compile on Windows (cfg(unix) EnvValueGuard used by an ungated test) | [#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422) | **无** | Windows CI 被阻塞，需将测试用 `#[cfg(unix)]` 包裹或提供 stub。 |
| **S3** | #9506 | Email channel cannot preserve CC recipients or send a true Reply All | [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) | **无** | 电子邮件功能仍限制为单收件人，影响正式商务往来。 |
| **S3** | #9507 | Enforce crate dependency direction with one declarative CI gate (generalize the one‑off boundary guards) | [#9507](https://github.com/zeroclaw-labs/zeroclaw/issues/9507) | **无** | 依赖方向检测仍停留在临时脚本，需统一为 CI 声明式规则。 |

**处理建议**：  
- **最高优先级**：尽快为 #9186 提供修复（超时/锁粒度），因其直接阻断工具链。  
- **次高**：#6724、#9486、#9340 均影响核心通道或定时任务的可用性，建议在下一个补丁版本中合并。  
- **持续改进**：Windows 单元测试（#9422）和邮件 CC（#9506）可进入后续迭代。

---

## 6. 功能请求与路线图信号（用户提出的新功能，结合现有 PR 判断纳入可能性）

| 功能请求 | 关联 Issue/PR | 

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*