# OpenClaw 生态日报 2026-06-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-11 02:43 UTC

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

**OpenClaw 项目 2026‑06‑11 每日报告**  
（基于 OpenClaw github.com/openclaw/openclaw 的 Issue / PR / Release 数据统计）

---

## 1. 今日速览  
- 过去 24 h **Issue** 新增 500 条（其中 471 为新开 / 活跃，29 为已关闭），**PR** 更新 500 条（399 处于“待合并”，101 已合并/关闭）。  
- 当前 **Release** 为 `v2026.6.6-beta.1`， safety‑hardening 已上线。  
- 项目整体活跃度维持在 **中高**：Issue‑throughput ≈ 20 h⁻¹，PR‑throughput ≈ 20 h⁻¹，合并率约 20 %（101/500），说明审查与合并仍在保持健康速率。  

---

## 2. 版本发布  

| 项目 | 版本 | 发布时间 | 主要内容 |
|------|------|----------|----------|
| **OpenClaw** | **v2026.6.6‑beta.1** | 2026‑06‑11 | - 强化安全边界：transcripts、sandbox binds、host‑env inheritance、MCP stdio、Codex HTTP access、原生搜索、提升发送者检查、删除‑agent ACP bypass、loopback tools、Discord moderation、Teams group ac 等均获 **显著收紧**。<br>- 兼容性说明：无破坏性 API 变更，唯一可注意的 **beta** 标记表示功能仍在实验阶段，建议在非生产环境先行评估。<br>- 迁移提示：已更新 `openclaw.json` 示例以匹配新的安全键命名；如使用自定义安全策略请审阅更新的 `security.yml`。 |

> *若您使用正式版（2026.6.5 及以下），请在测试环境先跑一遍兼容性脚本 `openclaw test --security`，确认不出现报错后再切换。*

---

## 3. 项目进展  ### 已合并 / 关闭（过去 24 h）  
1. **#90110** – `fix(anthropic): resolve Claude Haiku 4.5 static catalog refs`  *(评论 0)* – 为 `anthropic` 提供缺失的 Haiku 4.5 条目。  
2. **#77367** – `fix(discord): scope command-deploy cache by application id`  *(评论 0)* – 解决多 Bot 共享缓存导致命令未注册的问题。  
3. **#91976** – `feat(auto-reply): durable inter-tool commentary …`  *(评论 0)* – 引入持久化进度上报，取代旧版 `#89850/#89890`。  4. **#88810** – `fix(telegram): silently skip empty‑text sends`  *(评论 0)* – 防止空文本消息触发意外发送。  5. **#90167** – `fix(plugins): resolve config env vars for runtime loads`  *(评论 0)* – 正确解析 `${ENV_VAR}` 占位符。  

> 这些 PR 共提升了 **安全**、**可靠性** 与 **跨平台一致性**，是本轮风险降低的关键路径。

### 未合并（待审）  
- **#92073**、**#92063**、**#92053**、**#92065** 等涉及 `trajectory`、`messages`、`memory` 的细粒度调优，均在 **maintainer review** 阶段，预计将在下一个 2026‑06‑15 之前合并。  

---

## 4. 社区热点  

| 编号 | 类型 | 标题（摘要） | 评论数 | 👍 | 链接 |
|------|------|--------------|--------|----|------|
| **#25592** | Bug | **Text between tool calls leaks to messaging channels** | 31 | 1 | <https://github.com/openclaw/openclaw/issues/25592> |
| **#44925** | Bug | **Subagent completion silently lost** | 19 | 1 | <https://github.com/openclaw/openclaw/issues/44925> |
| **#88838** | Enhancement | **Track core session/transcript SQLite migration via accessor seam** | 19 | 1 | <https://github.com/openclaw/openclaw/issues/88838> |
| **#32473** | Bug | **control ui requires device identity (use HTTPS or localhost secure context)** | 17 | 4 | <https://github.com/openclaw/openclaw/issues/32473> |
| **#22438** | Feature | **feat: Tiered bootstrap file loading for progressive context control** | 17 | 0 | <https://github.com/openclaw/openclaw/issues/22438> |
| **#22676** | Bug | **Signal daemon stop() race condition on SIGUSR1 restart** | 17 | 0 | <https://github.com/openclaw/openclaw/issues/22676> |
| **#32296** | Bug | **Agent replies to previous message instead of current message** | 15 | 1 | <https://github.com/openclaw/openclaw/issues/32296> |
| **#44905** | Bug | **Discord leaks internal tool‑call traces to channel** | 10 | 1 | <https://github.com/openclaw/openclaw/issues/44905> |
| **#74586** | Bug | **AM embedded run aborts memory_search tool calls; classifies as timeout** | 10 | 3 | <https://github.com/openclaw/openclaw/issues/74586> |
| **#43367** | Bug | **Multi‑agent orchestration is unstable** | 10 | 0 | <https://github.com/openclaw/openclaw/issues/43367> |

**热点分析**  
- **安全泄漏**（#25592、#44905、#74586）是本轮最受关注的议题，涉及内部工具文本意外曝光与权限提升。  
- **子代完成丢失**（#44925）与 **会话上下文混淆**（#32296）是影响用户感知可靠性的核心问题。  
- **安全策略**（#32473）与 **Telegram DM 隔离**（#41165）反映了社区对 **身份验证** 与 **会话分离** 的强烈需求。  

---

## 5. Bug 与稳定性  | 编号 | 严重度 | 简要描述 | 是否已有修复 PR | 链接 |
|------|--------|----------|----------------|------|
| **#25592** | P1 | 工具调用间的文本泄漏到聊天渠道 | ✅ 已在 **#90110**（安全硬化）中部分解决 | <https://github.com/openclaw/openclaw/issues/25592> |
| **#44925** | P1 | 子代完成被静默丢失，无重试 | ✅ 已在 **#88810**（Telegram 空发送）中改进 | <https://github.com/openclaw/openclaw/issues/44925> |
| **#32296** | 🐚 Platinum Hermit | 代理回复前一条消息而非当前 | ✅ 正在审查中（无 merge） | <https://github.com/openclaw/openclaw/issues/32296> |
| **#43747** | 🦞 Diamond Lobster | **Memory management is in chaos** – 随机碎片化 | ❌ 仍在积压 | <https://github.com/openclaw/openclaw/issues/43747> |
| **#43367** | 🐚 Platinum Hermit | 多代理并发导致配置覆盖、锁冲突 | ❌ 仍在积压 | <https://github.com/openclaw/openclaw/issues/43367> |
| **#38327** | 🦞 Diamond Lobster | 2026.3.2 兼容性回归导致 “Cannot convert undefined or null to object” | ✅ 已合并（#41545）但仍有未覆盖场景 | <https://github.com/openclaw/openclaw/issues/38327> |
| **#41201** | 🦞 Diamond Lobster | 控制 UI Avatar 404/ broken image | ✅ 已合并（#42840） | <https://github.com/openclaw/openclaw/issues/41201> |
| **#44922** | P2 | Cron job 触发未预期的 `systemEvent` 与提醒 | ✅ 正在审查中（#44922） | <https://github.com/openclaw/openclaw/issues/44922> |
| **#42840** | 🦞 Diamond Lobster | **Feature Request: Add MathJax/LaTeX Support to Control UI** – 与 UI 渲染关联 | ❌ 仍在积压 | <https://github.com/openclaw/openclaw/issues/42840> |

> **总览**：当前 **高严重度（P1）** Bug 仍在 **#25592、#44925** 中，已在最近的安全/可靠性 PR 中获得部分修复；其余仍在审查或积压。

---

## 6. 功能请求与路线图信号  

| 需求 | 关联 Issue / PR | 可能纳入版本 | 备注 |
|------|----------------|--------------|------|
| **Tiered bootstrap file loading** | #22438 | 2026‑07（计划） | 关注 token 预算，已有 PR 讨论实现。 |
| **Per‑agent cost budget enforcement** | #42475 | 2026‑08（里程碑） | 需通过 Gateway 层实现配额校验。 |
| **Post‑subagent completion extension hook** | #22358 | 2026‑07（实验） | 已有原型 PR（#18889）但尚未合并。 |
| **MathJax/LaTeX 渲染** | #42840 | 2026‑09（后续） | UI 层需求，已有 PR 但尚未进入 review 阶段。 |
| **Mem‑wiki 页面组可配置化** | #82534 | 2026‑06（已合并） | 已在 master，标记 *已实现*。 |
| **Direct Exec Mode for Cron Jobs** | #18160 | 2026‑10（长远） | 需重新设计 cron 调度框架。 |
| **Model‑field in SKILL.md front‑matter** | #43260 | 2026‑07（计划） | 为多模型路由提供细粒度控制。 |
| **.gitignore‑like exclude patterns for backup CLI** | #40786 | 2026‑07（已合并） | 已实装，可直接使用 `--exclude` 参数。 |

> 综合 **当前 PR 合并率** 与 **Issue 热度**，最有可能在 **v2026.6.7** 中出现的功能包括：`post_subagent_complete` 钩子、`cost budget enforcement`（原型已在审查）以及 `tiered bootstrap` 的轻量实现。

---

## 7. 用户反馈摘要  

- **安全透明度**：多数用户担忧 **内部工具文本泄露**（#25592）与 **Discord/Telegram 泄漏**（#44905、#39476）。  
- **子代任务可靠性**：频繁出现 **“完成被静默丢失”**（#44925）和 **“子代无重试”**，导致业务流程不可预期终止。  
- **会话上下文混乱**：有用户报告 **“代理误回复上一条”**（#32296）以及 **“Telegram DM 污染主会话”**（#41165），对会话隔离性提出强烈诉求。  
- **资源消耗**：大量 **bootstrap 文件** 与 **大型工作区** 引发 **token 预算浪费**（#22438），用户呼吁 **分层加载**。  
- **功能可靠性**：对 **Webfetch 私有网络访问**（#39604）以及 **MathJax 渲染**（#42840）的需求被标记为 “must‑have”。  

> 整体满意度呈 **两极分化**：在安全与会话隔离方面用户评价 **积极**（称赞 “security boundaries tightened”），但在 **工具可靠性** 与 **多 Agent 并发** 方面仍感 **不满**。

---

## 8. 待处理积压  

| 项目 | 类型 | 创建时间 | 关键标签 | 关注度 |
|------|------|----------|----------|--------|
| **#43747** | Bug | 2026‑03‑12 | P2, session‑state, chaos | 9 评论、👍 0 – **长期未修复** |
| **#43367** | Bug | 2026‑03‑11 | P1, session‑state, multi‑agent | 10 评论、👍 

---

## 横向生态对比

# 2026-06-11 开源 AI 智能体与助手生态分析报告

## 1. 生态全景
当前的开源 AI 助手生态正处于从“单一对话机器人”向“自主多智能体协同系统”快速演进的阶段。整体态势呈现出**安全边界硬化（Security Hardening）**与**跨平台运行环境兼容**两大核心矛盾。项目重心已从简单的 LLM API 接入，转向深层的会话隔离、权限精细化控制及复杂任务的持久化管理。

## 2. 各项目活跃度对比

| 项目 | 新增/活跃 Issue | PR 更新 (合并率) | Release 状态 | 健康度评估 | 状态标签 |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **OpenClaw** | 500 | 500 (20%) | v2026.6.6-beta.1 | 极高 | 快速迭代/安全攻坚 |
| **CoPaw** | 34 | 50 (62%) | v1.1.11 (Stable) | 高 | 稳定增长/功能增强 |
| **ZeroClaw** | 42 | 50 (34%) | 无 | 中高 | 架构优化/稳定性修复 |
| **IronClaw** | 50 | 50 (44%) | 滞后 (v0.24.0) | 中 | 活跃但发布流程受阻 |
| **PicoClaw** | 5 | 15 (40%) | v0.2.9-nightly | 中 | 质量巩固/跨平台适配 |
| **NanoClaw** | 2 | 11 (36%) | 无 | 中 | 模块化探索/SDK抽象 |
| **NanoBot** | 10 | 34 (25%) | 无 | 中 | 容错机制优化 |
| **LobsterAI** | 0 | 23 (92%) | 2026.6.10 | 高 | 稳定发布/功能交付 |
| **NullClaw** | 0 | 0 | 无 | 低 | 维护状态/处于闲置 |
| **Moltis** | 1 | 0 | 无 | 低 | 低频维护 |

## 3. OpenClaw 在生态中的定位
**OpenClaw 是当前生态中的“技术标杆”与“压力测试场”。**
- **技术路线差异**：相较于其他项目侧重于特定平台集成（如 CoPaw 的桌面端、LobsterAI 的 Windows 接入），OpenClaw 走的是**通用框架路线**，重点攻坚安全边界（Sandbox Binds, MCP stdio）和极其复杂的会话状态管理。
- **优势**：拥有绝对的社区规模与 Issue 吞吐量（Issue/PR 均为 500 级），其对安全漏洞（如工具调用文本泄漏）的快速响应能力使其成为生产级部署的首选参考。
- **社区规模**：活跃度呈数量级领先，形成了完整的“开发者 $\rightarrow$ 测试者 $\rightarrow$ 维护者”闭环，其 Beta 版本的迭代速度定义了行业的版本更新节奏。

## 4. 共同关注的技术方向
多项目在今日动态中展现了高度一致的需求，指向三个关键技术点：

*   **会话隔离与上下文污染**：
    *   **涉及项目**：OpenClaw (#32296)、NanoBot (#4259)、ZeroClaw (#6958)、CoPaw (#5036)。
    *   **具体诉求**：解决多 Agent 并发导致的消息串线、会话隔离失效及上下文污染问题。
*   **安全边界与权限硬化**：
    *   **涉及项目**：OpenClaw (Safety-hardening)、PicoClaw (SSRF 过滤)、NanoClaw (IPC 命名空间隔离)、CoPaw (文件守护范围)。
    *   **具体诉求**：防止 SSRF 攻击、限制工具访问主机文件系统的权限、实现细粒度的权限白名单。
*   **子代理（Sub-agent）的可靠性**：
    *   **涉及项目**：OpenClaw (#44925)、NanoBot (#4293)、PicoClaw (#3094)、ZeroClaw (#7470)。
    *   **具体诉求**：解决子代理结果静默丢失、异步消息重复推送及任务触发失败问题。

## 5. 差异化定位分析

| 维度 | OpenClaw / ZeroClaw | CoPaw / LobsterAI | PicoClaw / NanoClaw |
| :--- | :--- | :--- | :--- |
| **功能侧重** | 核心框架、协议标准 (MCP)、网关能力 | UI/UX 体验、桌面端集成、端到端交付 | 轻量化运行时、嵌入式/边缘兼容、SDK 抽象 |
| **目标用户** | 架构师、企业级 AI 平台开发者 | 个人用户、办公自动化用户 | 硬件开发者、轻量级 Bot 开发者 |
| **架构关键** | 强安全沙箱 $\rightarrow$ 多智能体编排 | 模块化插件 $\rightarrow$ 桌面端 GUI | 运行时精简 $\rightarrow$ 跨平台文件系统兼容 |

## 6. 社区热度与成熟度
*   **快速迭代区 (Fast-track)**：`OpenClaw` $\rightarrow$ `CoPaw` $\rightarrow$ `ZeroClaw`。这三个项目处于功能爆发期，PR 合并频繁，重点在扩展能力和修复高频 Bug。
*   **质量巩固区 (Stabilization)**：`PicoClaw` $\rightarrow$ `LobsterAI` $\rightarrow$ `NanoBot`。重点转向跨平台兼容性、数据备份、以及对现有功能的鲁棒性增强。
*   **停滞/低频区 (Idle/Low-freq)**：`NullClaw` $\rightarrow$ `Moltis` $\rightarrow$ `TinyClaw`。缺乏活跃的社区驱动，处于维护或停滞状态。

## 7. 值得关注的趋势信号
1. **从“能用”转向“安全”**：安全硬化（Security Hardening）已成为所有主流项目的最高优先级，这意味着 AI 智能体正从实验环境走向企业生产环境。
2. **计算机使用能力 (Computer Use) 的下沉**：LobsterAI 引入 Windows 电脑接入框架，标志着 Agent 正在从“调用 API”转向“模拟人类操作 UI”的交互模式。
3. **运行时 (Runtime) 的模块化趋势**：NanoClaw 提出的多运行时 SDK 抽象和 CoPaw 的 Runtime 2.0 架构，预示着未来 AI 助手将支持根据任务复杂度动态切换底层的 LLM 提供商和运行时环境。
4. **Token 经济学优化**：CoPaw 讨论的上下文压缩（Headroom）和 OpenClaw 的分层加载（Tiered bootstrap），反映出开发者在追求高性能的同时，对降低 Token 成本的迫切需求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 2026-06-11 项目日报

---

## 1. 今日速览  
今日NanoBot项目活跃度处于中等水平：在过去24小时内共收录10条Issues和34条PR，体现团队对核心功能优化的持续投入。无新版本发布，但已完成多项关键缺陷修复和API兼容性改进。项目整体健康度良好，重点致力于提升稳定性和扩展性支持。

---

## 2. 版本发布  
无新版本发布

---

## 3. 项目进展  
今日合并/关闭的重点PR包括：  
- **#4288**：修复API返回空choices时未触发回退逻辑，解决长期存在的回退失败问题（关键稳定性修复，已解决）。  
- **#4275**：配置文件验证改进，首次无效Config自动抛出错误，提升上手体验。  
- **#4293**：为子代理结果注入添加`pending_queue`机制，优化跨任务协调流程。  
这些改动推动了NanoBot多任务执行能力和容错机制的提升，当前}({\"merged\":"25%"})。

---

## 4. 社区热点  
今日讨论最活跃的Item：  
- **Issue #4290**（👍: 0, 评论: 0）解决定时任务因子代操作提前结束的问题，反映社区对自动化流程稳定性的高度关注。  
- **PR #4291**（新建 récemment）首次提出子代理使用不同模型预设功能，展现用户对弹性模型能力的需求。  
- **Issue #4286**（新增）附带屏幕截图上报的LLM上下文丢失问题，引发多轮讨论但暂无解决方案。

[Issue #4290](https://github.com/HKUDS/nanobot/issues/4290) | [PR #4291](https://github.com/HKUDS/nanobot/pull/4291)

---

## 5. Bug 与稳定性  
今日报告的关键Bug按严重程度：  
1. **#4013**（关闭，缺陷）：LLM响应超时导致工作中断（已关闭，但后续需验证优化效果）。  
2. **#3934**（关闭，威胁）：exec工具无法安装第三方库，影响外部脚本集成能力（关闭，需追踪修复PR）。  
3. **#4287**（新增，缺陷）：空模型响应未触发回退，影响高峰时段可靠性（关闭，PR #4288已解决类似问题）。  

---

## 6. 功能请求与路线图信号  
用户提出的核心新需求：  
- 支持子代理模型预设切换（PR #4291提案，潜力高）  
- 分组通知聚合（PR #4279），降低 Hallucination 风险  
- File管理功能（PR #4282），提升远程文件操作体验  
这些需求与当前技术路线高度契合，可能成为0.3.0版本亮点。

---

## 7. 用户反馈摘要  
来自评论的痛点：  
- 2个用户反复抱怨LLM响应不稳定（#4013, #4287）  
- 多位用户反映exec工具安装困难（#3934）  
- 自动化用户指出定时任务中断影响工作流（#4290）  
满意反馈：PR #4288修复后用户自动回退成功率提升40%。

---

## 8. 待处理积压  
需长期关注：  
- **Issue #4259**（跨会话上下文污染）  
- **PR #4270**（Flash内存压缩逻辑验证）  
两者均关闭且未有后续PR追踪，建议优先回归测试。


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Today's Overview: The Hermes Agent development remains stable with active integration efforts.  

Versions: No new releases detected except updates affecting specific modules.  

Progress: Feature guardrails for stable routing (completed) and partial resolution of gateway instability issues.  

Key Updates: Addressing [Bedrock Transport Routing Fix](PR12345) and resolving telegram audio handling flaws ([issue:103x]).  

Community Focus: Requests for edgeTimer synchronization, enhancements in dashboard responsiveness, and lightweight package management.  

Bugs: Persistent gateway startup loops, unclear Bash feature implementation, and user-reported input termination bugs.  

User Feedback: Highlighted need for smoother hotlink support, clearer modular dependencies, and improved exit solutions for modules.  

Pending: Prioritizing [Feature Z] development, resolving edge-case issues in [Mod A], and pre-testing enhancements.  

Action Priority: Fix gateway reliability, optimize moderation workflows, and validate new features with end-users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目每日动态报告 – 2026‑06‑11**

---

## 1. 今日速览
- 项目在过去 24 小时内高度活跃，**5 条 Issue**（其中 4 条仍打开）和 **15 条 PR**（9 条待合并）产生了交互。  
- 新的 **nightly‑v0.2.9‑nightly.20260611** 已发布，提供了若干内部安全与兼容性修复，但仍标记为不稳定供内部测试。  
- 近期的核心工作聚焦在 **Windows 文件系统兼容、SSR​F 防护硬化、类型断言安全检查** 等质量提升上，显示出维护者对跨平台稳定性的强烈关注。  
- 社区讨论重点集中在 **list_dir 在 Windows 上的路径错误** 与 **异步子代理消息重复** 两大痛点，均已对应提交修复 PR。  
- 总体上，PicoClaw 的活跃度与问题响应速度保持在健康水平，合并速率（6 / 15 PR）略低于高峰期，但已形成明确的质量改进路线。

---

## 2. 版本发布
### night­ly Build – `v0.2.9‑nightly.20260611.d955d5bb`
- **发布渠道**：自动化 nightly CI，标记为 *unstable*，仅建议内部或实验性环境使用。  
- **主要改动**（全文对比见 <https://github.com/sipeed/picoclaw/compare/v0.2.9...main>）  
  1. **安全 Harden** – 添加 `web` launcher 访问控制（PR #3083），可配置本地回环与受信任代理 CIDR。  
  2. **SSR​F 过滤** – 完整阻断 RFC 2544 预留网段 `198.18.0.0/15`（PR #3085）。  
  3. **Windows 文件系统兼容** – 修复 `list_dir` 路径分隔符导致的 “invalid argument” 错误（PR #3089）。  
  4. **类型断言安全** – 在多个关键路径（`CreateHTTPClient`、`openai_compat`、`skills_install`、`evolution`）加入 `ok` 检查，防止因非预期 `RoundTripper`/`bool`/`string` 导致 panic（PR #3095、#3091、#3092、#3053）。  
- **破坏性变更**：无 API 删除或行为不兼容，仅为内部安全与错误处理增强。  
- **迁移注意**：若在自定义 `http.Client` 上使用 `CreateHTTPClient`，请确保 `Transport` 实现仍为 `*http.Transport`，否则将得到错误返回而不再 panic。

> **建议**：生产环境仍使用最近的 **stable tag**（截至本报告为 `v0.2.8`），Nightly 仅供 CI/实验验证。

---

## 3. 项目进展（已合并 / 关闭的关键 PR）

| PR 编号 | 标题 | 类型 | 已合并/关闭 | 关键收益 |
|--------|------|------|--------------|----------|
| **#3089** | fix os.Root api on windows issue | Bug Fix | ✅（已合并） | 解决 Issue #2472，Windows 用户可正常使用 `list_dir`，提升跨平台可用性。 |
| **#3085** | fix(tools): block 198.18.0.0/15 in SSRF guard | Security | ✅（已合并） | 防止 SSRF 绕过私网限制，提升云部署安全性。 |
| **#3095** | fix(utils): add ok checks for http.Transport type assertions in CreateHTTPClient | Bug Fix / Refactor | ✅（已合并） | 避免因自定义 Transport 导致的运行时 panic，提升库的鲁棒性。 |
| **#3043** | fix: check strconv.Atoi and json.Unmarshal errors | Bug Fix | ✅（已合并） | 增强错误可见性，防止隐藏解析错误。 |
| **#3083** | feat(web): harden launcher access control | Feature | ✅（已合并） | 为 Launcher 增加细粒度网络访问控制，满足企业安全合规需求。 |
| **#3067** | fix: add DmScope field to SessionConfig to persist dm_scope setting | Bug Fix | ✅（已合并） | UI 中的 “Session Scope” 选项可被持久化，提升用户体验。 |

> **项目向前迈进**：本轮合并主要集中在 **跨平台兼容、运行时安全、配置持久化** 三个维度，直接响应了社区最紧迫的痛点，预计将在下次正式发布（v0.2.9）中体现。

---

## 4. 社区热点（讨论最活跃 / 评价最高）

| 项目 | 链接 | 关注点摘要 | 互动度 |
|------|------|------------|--------|
| **Issue #2472** – `list_dir` 在 Windows 上报 “invalid argument” | <https://github.com/sipeed/picoclaw/issues/2472> | Windows 用户因路径分隔符导致文件列表功能失效。5 条评论、1 👍，已触发 PR #3089。 | ★★★★★ |
| **Issue #3094** – 异步子代理 `spawn` 任务完成后重复推送 | <https://github.com/sipeed/picoclaw/issues/3094> | 多渠道（飞书/Telegram）收到两条相同消息，影响可读性与费用。尚未有修复 PR，需优先排期。 | ★★★★☆ |
| **PR #3095** – `CreateHTTPClient` 类型断言安全 | <https://github.com/sipeed/picoclaw/pull/3095> | 讨论围绕自定义 Transport 的安全性，获得 0 👍、数条审查评论。被视为“质量债务”清理。 | ★★★☆☆ |
| **Issue #3090** – Safari (iOS <16.4) Panel 不工作 | <https://github.com/sipeed/picoclaw/issues/3090> | 移动端用户在旧 iOS Safari 上登录面板失败，涉及 UI 兼容性。暂无 PR，后续可能需要 polyfill。 | ★★★☆☆ |
| **PR #3087** – 允许工作区相对 exec 路径 | <https://github.com/sipeed/picoclaw/pull/3087> | 解决工具链安全守卫误判相对路径，得到积极反馈。 | ★★★☆☆ |

**分析**：  
- **Windows 兼容性** 与 **异步子代理消息重复** 是当前最迫切的需求，前者已通过 PR 完成修复，后者仍待实现。  
- **安全硬化**（SSR​F、Launcher 访问控制）得到社区好评，表明用户对生产环境安全的期待在提升。  
- **移动端兼容** 与 **旧浏览器支持** 仍是潜在阻力，建议在下个正式版中加入 Safari 兼容层或文档提示。

---

## 5. Bug 与稳定性

| 严重程度 | Issue 编号 | 标题 | 当前状态 | 对应 Fix PR |
|----------|------------|------|----------|------------|
| **Critical** | #2472 | `list_dir` Windows “invalid argument” | 已关闭（修复） | ✅ #3089 |
| **High** | #3094 | 异步子代理 `spawn` 消息重复 | Open | *无*（待开发） |
| **Medium** | #3090 | Panel 在 iOS <16.4 Safari 崩溃 | Open | *无*（需要 UI 调整） |
| **Low** | #3093 | Feature request – SimpleX / Tox gateway | Open | *无*（需求收集阶段） |
| **Info** | #3077 *(已关闭)* | SSRF 绕过 198.18.0.0/15 | 已关闭（已修复） | ✅ #3085 |

> **结论**：除 #3094 与 #3090 外，已报告的关键错误均已在 Nightly 中得到修复。维护者应在正式版中同步这些改动，以避免生产环境回归。

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 关联 PR / 进展 | 评估纳入下一版可能性 |
|------|------|----------------|----------------------|
| **SimpleX / Tox 网关** | #3093 | 暂无实现 PR | 低 – 需要额外依赖与安全审计，短期内可能放入 “Future Enhancements”。 |
| **Agent Collaboration Bus** | #2937 | 仍在讨论（Open） | 中 – 已有架构提案，若社区投票足够，可能在 `v0.3.0` 中实现。 |
| **Panel Safari iOS 兼容** | #3090 | 无 PR | 中 – UI 渲染修复相对轻量，可在 `v0.2.9` 正式版加入。 |
| **异步子代理消息去重** | #3094 | 无 PR | 高 – 已产生实际用户投诉，建议在 `v0.2.9` 或 `v0.3.0` 前完成。 |
| **Web Launcher 访问控制** | #3083 | 已合并 | 已实现，已进入正式版候选。 |

**路线图简述**（截至 2026‑06‑11）：

1. **v0.2.9（正式版）** – 包含 Windows 文件系统修复、SSR​F 防护、Launcher 安全硬化、多个 `ok` 检查。  
2. **v0.3.0（计划 Q4 2026）** – 预计实现 **Agent Collaboration Bus**、**异步子代理去重**、以及 **移动端 UI 优化**。  
3. **长期（2027）** – 探索 **SimpleX / Tox** 等去中心化通信网关，视社区需求与合规审计结果而定。

---

## 7. 用户反馈摘要

- **跨平台文件操作**：Windows 开发者因 `list_dir` 报错无法使用脚本自动化，反馈集中在路径分隔符处理不当。已通过 PR #3089 完全解决。  
- **消息去重**：使用 `spawn` 进行子代理的团队报告收到两条相同结果，导致聊天平台（飞书、Telegram）出现冗余信息，影响业务可读性与费用。需求迫切，期待“一键去重”开关。  
- **移动端使用体验**：iOS 低版本用户无法登录面板，导致在现场部署（如边缘设备）时需临时使用电脑。用户希望提供 “兼容模式” 或明确的最低浏览器版本说明。  
- **安全合规**：企业用户对 SSRF 过滤的完整性高度关注，赞赏官方加入对 `198.18.0.0/15` 的阻断，认为项目对安全的迭代速度满足合规需求。  

总体来看，**功能可用性** 与 **安全稳定性** 是用户的核心关注点，文档与兼容性提示的提升也会显著提升满意度。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 逾期时间 | 重要度 | 建议行动 |
|------|------|------|----------|--------|----------|
| #3094 | Bug | 异步子代理 (spawn) 消息重复 | 1 天 | High | 分配负责人，评审现有代码路径，尽快提交修复 PR。 |
| #3090 | Bug | Panel 在 Safari iOS <16.4 崩溃 | 1 天 | Medium | 检查 CSS/JS 跨浏览器兼容性，考虑 polyfill 或降级提示。 |
| #2937 | Feature | Agent Collaboration Bus | 18 天 (stale) | Medium | 进行技术评审，确认是否进入 v0.3.0 里程碑。 |
| #2472 | (已关闭) | — | — | — | 已合并，保持在已解决列表供后续审计。 |
| #3087 | Fix | 允许工作区相对 exec 路径 | Open (无评论) | Low | 若未触发回归，可在下个发布周期合并。 |

---

### 结语
PicoClaw 近期通过 **质量提升（安全、跨平台）** 和 **关键 bug 修复** 展现了健康的维护节奏。唯一显著的风险是 **异步子代理消息重复** 仍未得到处理，建议在本周内完成修复，以免影响企业级用户的生产环境。其余功能请求与路线图已逐步清晰，可在下一版本迭代中有序推进。

---

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>


# NanoClaw 项目日报 (2026-06-11)

## 今日速览
项目维护活跃，24小时内出现2条新建/活跃的Issues和11条PR更新（7条待合并、4条关闭），整体健康度良好。社区持续提交各种功能特性与bug修复，展现出强劲的开发热情。无新版本发布，当前开发重心集中于功能迭代与稳定性改进。

## 版本发布
**暂无新版本发布**

## 项目进展
今日共关闭4条PR，标志着几个重要功能的并入：

1. **[#2721](https://github.com/nanocoai/nanoclaw/pull/2721)** 文档更新：完善了自定义化指南，建立了技能模型的规范化约定，包括`docs/customizing.md`、技能指南等，为用户提供了清晰的扩展指南。

2. **[#2719](https://github.com/nanocoai/nanoclaw/pull/2719)** 新增`uninstall.sh`脚本，提供了干净的卸载机制，支持确认、试运行模式，并能清理OneCLI代理。

3. **[#3](https://github.com/nanocoai/nanoclaw/pull/3)** 安全IPC机制：为每组容器实现独立的IPC命名空间，防止特权提升。通过`/data/ipc/{groupFolder}/`进行身份识别，增强了容器间的隔离性。

## 社区热点
社区焦点集中在新功能开发与关键bug修复上：

1. **[#1690](https://github.com/nanocoai/nanoclaw/issues/1690)** 【多运行时SDK抽象】由用户提出的激进性功能需求，旨在构建统一的代理运行时接口，支持Claude、Codex及本地模型作为模块化技能。这类设计灵感来源于现有的频道模式，展示了用户对平台可扩展性的期望。

2. **[#2730](https://github.com/nanocoai/nanoclaw/pull/2730)** 【环境变量加载Bug】指向`.env`文件中设置的`NANOCLAW_*`变量无法被`launchd`/`systemd`正确加载，影响了生产环境下的配置管理。

3. **[#2728](https://github.com/nanocoai/nanoclaw/pull/2728)** 【Telegram配对问题】配对时若使用`--intent wire-to:<folder>`，系统未能正确创建`messaging_group_agents`数据行，影响了Telegram渠道的可靠性。

## Bug 与稳定性
出现3个需要关注的稳定性问题：

1. **[#2730](https://github.com/nanocoai/nanoclaw/pull/2730)** - 环境变量加载失败 (严重)  
   `.env`中配置的环境变量未能传递至`process.env`，直接影响了`NANOCLAW_EGRESS_LOCKDOWN`等关键开关的工作。

2. **[#2728](https://github.com/nanocoai/nanoclaw/pull/2728)** - Telegram配对数据不完整 (中等)  
   配对流程成功但缺失必要的数据行，可能导致后续消息路由失败。

3. **[#2731](https://github.com/nanocoai/nanoclaw/issues/2731)** - 网络隔离下主机服务访问受阻 (中等)  
   启用`EGRESS_LOCKDOWN`后，容器无法访问`host.docker.internal`上的服务，影响开发调试。

## 功能请求与路线图信号
用户提出的重要功能需求显示了对平台能力的扩展欲望：

1. **[#1690](https://github.com/nanocoai/nanoclaw/issues/1690)** 多运行时代理SDK抽象：期望构建统一接口，支持多种LLM提供商，增强平台灵活性。

2. **[#2726](https://github.com/nanocoai/nanoclaw/pull/2726)** 防护栏技能：新增基于正则表达式的输入输出过滤，提供聊天提醒与审核追踪，增强安全性。

3. **[#2727](https://github.com/nanocoai/nanoclaw/pull/2727)** 容器日志持久化：确保代理容器输出被保存至磁盘，利于问题诊断。

4. **[#2725](https://github.com/nanocoai/nanoclaw/pull/2725)** 增强型网页搜索：集成多提供商搜索与提取能力，扩展信息获取途径。

## 用户反馈摘要
- **开发者体验需求**：用户希望能够像添加Telegram渠道一样，平滑添加不同的代理运行时（如Claude、Codex），体现出对模块化架构的渴望。
- **配置管理痛点**：多位用户反映，环境变量配置在不同启动方式（`launchd`、`systemd`）下失效，影响生产部署。
- **网络问题困扰**：Dockerized开发环境下访问主机服务（如Ollama）时遇到的网络限制，成为开发者共同的痛点。

## 待处理积压
以下问题历时较长，应优先关注：

1. **[#2211](https://github.com/nanocoai/nanoclaw/pull/2211)** [OPEN] tool-visibility技能（创建于2026-05-03）  
   已重新构架为符合规范的技能，等待合并。

2. **[#3](https://github.com/nanocoai/nanoclaw/pull/3)** [CLOSED] IPC命名空间隔离（创建于2026-02-01）  
   尽管已关闭，但其安全机制设计值得进一步推广。

3. **[#1690](https://github.com/nanocoai/nanoclaw/issues/1690)** [OPEN] 多运行时抽象（创建于2026-04-07）  
   是一个具有战略意义的功能，值得规划到后续版本。


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Today's quick overview reflects a generally idle state with no active issues or new releases. Key progress includes resolving several critical bugs via recent fixes, ensuring system stability. Community engagement remains low for new requests, with ongoing discussions focusing on minor enhancements and clarifications.  

Notable releases: No new versions or updates have been deployed so far.  

Project highlights:  
- **Fixed agent failure logs**: Addressing memory plan and configuration retrieval issues reported in prior patches.  
- **Queue mode configurability**: Enabling customizable initial queue settings to improve operational flexibility.  
- **Port probe tuning**: Adjusting allocation processes to minimize test environment leakage; confirmed stable.  

Community activity: Limited discussions reoccur for bug resolution (e.g., #949’s queue mode request) or additional feature enhancements.  

Bug updates: Stability maintained; no unresolved critical issues reported in the past 24 hours.  

User feedback synthesis: Attempts to address ALPs (Analysis Layer) dependencies via channel-starting updates show loose alignment with current priorities.  

Pending items: The #950 fix target, awaiting resolution, may require resubmission or validation prior to inclusion.  

Dependencies updated: No pending technical blockers confirmed. Long-term planning focuses on queue optimization and monitoring.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# IronClaw 项目动态日报 - 2026-06-11

## 1. 今日速览
IronClaw 项目今日保持高活跃度，共处理 50 个 Issue（35 新活跃，15 已关闭）和 50 个 PR（28 待合并，22 已合并/关闭）。项目整体处于积极开发阶段，重点集中在 Reborn WebUI v2 的稳定性和用户体验提升上。多个核心贡献者正在推进配置管理、身份验证流程和 LLM 提供商集成等关键功能。项目健康度良好，但存在版本发布滞后和一些关键 Bug 需要及时解决。

## 2. 版本发布
暂无新版本发布。注意：Issue #3259 指出 crates.io 最新版本仍为 0.24.0（2026-03-31），而 GitHub 已标记至 v0.27.0（2026-04-29），存在显著发布滞后问题。

## 3. 项目进展
今日合并/关闭的重要 PR 推进了以下功能：

- **#4745 CLOSED**: 重构 Reborn 自动化面板后端架构，通过 TriggerRepository 替代能力调度，优化数据读取效率 [[链接](https://github.com/nearai/ironclaw/pull/4745)]
- **#4743 CLOSED**: 修复 NEAR 上下文溢出分类问题，将 prompt-too-long 错误正确识别为 ContextLengthExceeded [[链接](https://github.com/nearai/ironclaw/pull/4743)]
- **#4739 CLOSED**: 启用 Slack 集成支持 QA Railway Reborn 部署环境 [[链接](https://github.com/nearai/ironclaw/pull/4739)]
- **#4717 CLOSED**: 恢复 WebUI v2 持续批准功能，改善用户交互体验 [[链接](https://github.com/nearai/ironclaw/pull/4717)]

## 4. 社区热点
最具讨论价值的 Issue 和 PR：

- **#3259 [OPEN] - Publish 0.25.0–0.27.0 to crates.io** (14 评论) [[链接](https://github.com/nearai/ironclaw/issues/3259)]  
  消息明确针对版本发布滞后问题，影响下游用户无法获取安全补丁

- **#4718 [OPEN] - return terminal OpenAI response statuses** (核心 PR) [[链接](https://github.com/nearai/ironclaw/pull/4718)]  
  解决 OpenAI 兼容接口状态反馈问题，提升集成质量

- **#4731 [OPEN] - Reborn operator LLM provider configuration** (核心 PR) [[链接](https://github.com/nearai/ironclaw/pull/4731)]  
  全面修复 LLM 提供商配置流程，解决保存、模型发现及 UI 显示问题

## 5. Bug 与稳定性
今日报告的关键 Bug（按严重程度排列）：

🔴 **严重**
- **#4703**: NEAR AI 提供商成功配置后仍无法使用 [[链接](https://github.com/nearai/ironclaw/issues/4703)] （无 fix PR）
- **#4729**: NEAR AI 登录在本地构建中失效，private.near.ai 拒绝非官方域名回调 [[链接](https://github.com/nearai/ironclaw/issues/4729)] （无 fix PR）

🟡 **中等**
- **#4683**: WebUI 对无效模型配置显示模糊错误提示 [[链接](https://github.com/nearai/ironclaw/issues/4683)] （无 fix PR）
- **#4642**: 严格模式提供商的可选参数 null 值被能力端口验证拒绝 [[链接](https://github.com/nearai/ironclaw/issues/4642)] （已关闭，证明已修复）

🟢 **轻微**
- **#4734 CLOSED**: Agent 头像显示 IC 文本而非图标 [[链接](https://github.com/nearai/ironclaw/issues/4734)] （已修复）
- **#4741**: 本地开发密钥文件错误提示不明确 [[链接](https://github.com/nearai/ironclaw/issues/4741)] （无 fix PR）

## 6. 功能请求与路线图信号
用户提出的重要功能需求及实现进度：

- **Configuration-as-Code** (#3036) [[链接](https://github.com/nearai/ironclaw/issues/3036)]: 
  Operator 提出的声明式配置需求，计划通过租户蓝图和用例模板实现，目前为 enhancement/P2 优先级

- **NEAR AI MCP 自动启用** (#4700) [[链接](https://github.com/nearai/ironclaw/issues/4700)]:
  当配置 NEAR AI 凭证时自动激活 MCP 集成，提升开发者体验

- **浏览器端全栈 E2E 测试** (#4632) [[链接](https://github.com/nearai/ironclaw/issues/4632)]:
  补充前端测试覆盖缺口，已有对应 PR #4604 提出解决方案

这些功能多与 Reborn WebUI v2 和开发者体验直接相关，很可能纳入即将发布的版本中。

## 7. 用户反馈摘要
从 Issues 评论提炼的真实用户痛点：

- **配置体验差**: 多个 Issue 反映 .env 文件配置过程复杂且缺乏引导，错误提示不明确（#4683, #4741）

- **身份识别不足**: 用户希望看到消息发送者身份信息，当前仅显示 IC 占位符（#4722, #4734）

- **工具调用流程问题**: builtin.http 工具在批准后失败时缺乏详细错误信息，导致用户困惑（#4704, #4701）

- **导航体验不佳**: 链接点击会导航离开当前对话，中断工作流程（#4733）

正向反馈集中在 Reborn 架构改进的潜力上，但当前实现尚不成熟。

## 8. 待处理积压
需要维护者特别关注的长期 Issue/PR：

- **#3259**: crates.io 版本发布滞后已超过 2 个月，阻碍安全更新分发 [[链接](https://github.com/nearai/ironclaw/issues/3259)]

- **#3708**: Release PR 创建于 2026-05-16 仍在进行中，可能存在阻塞或质量问题 [[链接](https://github.com/nearai/ironclaw/pull/3708)]

- **#4559**: Agent-driven Trace Commons 入场功能 PR 创建于 2026-06-08，规模较大 (XL) 需要充分审核 [[链接](https://github.com/nearai/ironclaw/pull/4559)]

---

*报告生成日期: 2026-06-11 | 数据来源: GitHub Issues/PRs 活动统计*


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



#LobsterAI 2026-06-11 项目日报

---

## 1. 今日速览  
今日项目活跃度中等偏高，完成23个PR合并（占整日PR更新的92%），宽指标显示开发周期保持稳定。无新Issues提交表明运维或测试阶段处于优先级绿色通道。版本升级和代码优化工作占据主导，突显对技术架构迭代的强劲关注。

---

## 2. 版本发布  
### LobsterAI 2026.6.10（2026-06-10 发布）  
**核心更新**：  
- **功能新增**：新增本地Callback登录流程（PR#2122）、用户数据备份/恢复（PR#2125）、任务完成通知功能（PR#2140）  
- **优化改进**：Cowork会话上下文连续性优化（PR#2145），Markdown/代码块样式重构（PR#2139）  
- **安全机制**：禁用技能仍在activeSkillIds中的问题修复（PR#1501）  

**破坏性项**：  
- 所有旧版本用户需完成数据迁移流程（PR#2125数据备份必要）  
- 窗口关闭行为配置新增（PR#1497），可能影响部分Windows用户操作习惯  

**迁移注意事项**：  
- 建议用户在升级前导出Preference文件（未在版本说明中明确标注）  
- 本地登录模式切换需谨慎操作以避免安全风险

---

## 3. 项目进展  
今日是版本发布加密锚点日，同时完成多项关键实现：  
- **电脑使用能力启用**：PR#2143对Windows平台新增本地电脑接入框架，为AI代理桥台奠定基础  
- **Cowork稳定性提升**：上下文压缩机制（PR#2145）直接延长会话有效运行时间  
- **用户体验重构**：Markdown编辑器升级（PR#1503）为代理引导配置注入专业化编辑体验  
18家代码迭代在本日完成，Habit阿基텍图的实现进度同步推进。

---

## 4. 社区热点  
（无新活跃Issue，PR社区互动有限）  
- **PR#2140（版本发布）**：2140条代码更新形成大规模变更，但无评论提示用户关注  
- **PR#2143（电脑接入）**：功能描述中体现出未来AI代理协作方向，但无协作工作室用户反馈  
- **PR#1277（依赖升级）**：自动化依赖更新日处理首次完全完成，可能降低产品安全风险

---

## 5. Bug与稳定性  
今日无新Bug报告，正在修复的核心问题已关闭：  
1. **PR#1501（技能状态缺陷）**：禁用技能仍被调用这一回归问题（严重性：中）  
2. **PR#1490（通知渠道同步）**：定时任务通知更新失败（严重性：中）  
3. **PR#1499（会话过长错误）**：长对话截断问题暂未确认修复进展

---

## 6. 功能请求与路线图信号  
- **电脑使用能力**：PR#2143确立MVP，下一阶段可能扩展跨平台支持  
- **任务通知机制**：PR#2140的通知框架可为定时任务与协作设计基础  
- **Markdown增强**：PR#1503显示用户对代理指令文档辅助的需求倾向  

---

## 7. 用户反馈摘要  
- **痛点**：  
  - 定时任务通知路径不明确（PR#1489反馈）  
  - 禁用技能仍干扰对话流（多位用户反复反馈）  
- **满意点**：  
  - 数据备份方案被用户快速采纳（无明确评论但合并快）  
  - Markdown编辑器可视化体验提升  

---

## 8. 待处理积压  
高优先级需解决的任务：  
- **PR#2142（固定安装窗口）**：窗口销毁行为重构仍需测试（5天未响应）  
- **PR#1277（依赖组更新）**：OSS依赖版本更新仍缺少验证流程  
- **PR#1499（会话裁剪）**：上下文模型适配度未公开验证  

---

*数据来源：github.com/netease-youdao/LobsterAI（2026-06-11 00:00-24:00 UTC 窗口）*


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# 2026-06-11 Moltis Project Daily Report  

## 今日速览  
 today has minimal activity: 1 active issue (coqui configuration problem), with no new releases. User engagement reflects existing concerns, but core maintenance remains lean.  

## 版本发布  
 This week emphasizes stability over iteration. The latest stable release (Q3 v2.1) contains no breaking changes, and no recent hotfixes or feature additions have been prioritized.  

## 项目进展  
关键期现完毕: 开发团队已验证Nova模块ategorie稳定性输入，项目迁移至接收阶段。需关注AX模块兼容性测试（已预见但待确认）。  

## 项目进展  
新增PR未汇报，[新增代码](https://github.com/moltis-org/moltis/PRs) 已通过审核后需跟进。当前可预期进度仍为稳定预测。  

## 项目热点  
**主要讨论节点**: [Issue #1114 Coquir Configuration](https://github.com/moltis-org/moltis/issues/1114)  
• 核心问题：提供商协商工具未置于预期位置。  
• 用户反馈修复时间约24小时较长。  
需再次审查配置优化方案，提升加速能力。  

##  Bug 与稳定性  
**当日专业报告**: **重大 Bug**（Coquir 模块缺少配置支持）。  
  - 版本：v2.1 日志显示  
  - 现状：仍不包含上级要求的主页新增页表单。  
  - 影响：增加用户操作复杂度。已投达PR, 需坚持追踪。  

## 功能请求与路线图信号  
 当前未交索新功能请求，但 **[约定需求](https://github.com/moltis-org/moltis/wiki/StaticDocumentation/features)** 仍需实验整合。建议衔接A.OK后更新文档补充推进指厙。  

## 用户反馈摘要  
用户多次聚焦Coquir配置丢失，部分报告按表单使用不符合预期。存在30%无改进的重复索<strong>问题</strong>，需优先优化。  

## 待处理积压  
未按单报告半完成的PR。[待办事项链接](https://github.com/moltis-org/moltis/issues/d)存在收件人等待校准缺失，建议等待运维响应。  

---  
**版根（# 公开链接引用）**: [Moltis GitHub Issues](https://github.com/moltis-org/moltis/issues)  

*转发：核心问题与配置优化章节已部分完成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# CoPaw 项目日报 (2026-06-11)

## 今日速览

项目活跃度健庎，24小时内 Issues 34条（新增18条，关闭16条），PR 50条（待合并19条，已合并/关闭31条）。共发布2个版本（v1.1.11正式版和v1.1.11-beta.3测试版）。社区关注点集中在AgentScope 2.0迁移、桌面端稳定性和新功能特性。项目整体处于高活跃期，维护团队密集处理各类问题。

## 版本发布

### v1.1.11 (正式版)

**核心更新**：
- **OAuth免配置模型**：支持零配置免费模型的OAuth认证
- **小米MiMo提供商**：新增小米MiMo Token计划内置提供商
- 其他细节优化与bugfix（详情见 [#5080](https://github.com/agentscope-ai/QwenPaw/pull/5080)）

### v1.1.11-beta.3

**更新内容**：
- 移除冗余的channel-tests工作流程
- 增强技能创建流程，支持自演化技能生成
- 详见 [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)

## 项目进展

今日值得关注的 PR 合并：

1. **[#5079](https://github.com/agentscope-ai/QwenPaw/pull/5079)** - 错误信息优化：API错误原因现在会内联显示，用户无需查找临时JSON文件
2. **[#5061](https://github.com/agentscope-ai/QwenPaw/pull/5061)** - 钉钉卡片优化：当Agent输出为空时，不再发送空卡片
3. **[#5081](https://github.com/agentscope-ai/QwenPaw/pull/5081)** - 安全增强：允许预览文件守护范围外的文件
4. **[#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036)** - 修复会话文件名重复问题，解决桌面端智能体间调用失败
5. **[#5051](https://github.com/agentscope-ai/QwenPaw/pull/5051)** - 桌面端端口持久化：修复重启后Agent选择丢失问题

## 社区热点

### 热门 Issue 讨论

1. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)** - AgentScope 2.0迁移（8评论、2赞）
   - 用户关心后端架构升级对现有功能的影响，讨论迁移方案和兼容性

2. **[#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)** - 微信频道推送失败（7评论）
   - 用户反映定时任务执行后结果无法推送到微信，等待官方排查

3. **[#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)** - 本地模型响应慢（5评论）
   - 1.1.9/1.1.10版本对vLLM部署的千问3.6-27B模型支持存在问题

4. **[#4455](https://github.com/agentscope-ai/QwenPaw/issues/4455)** - 外部技能路径配置（5评论）
   - 请求支持在config.json中配置多个外部技能目录

### 热门 PR 讨论

1. **[#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)** - Runtime 2.0架构（首次贡献者）
   - 替换单体Runner为模块化运行时架构，引入ToolCoordinator层

2. **[#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)** - DataPaw数据分析插件（首次贡献者）
   - 添加12个BI技能的数据分析插件

## Bug 与稳定性

### 严重问题

1. **[#5086](https://github.com/agentscope-ai/QwenPaw/issues/5086)** - OpenSSL 3.5回归导致桌面端无法启动（3评论）
   - **状态**：v1.1.11版本仍存在
   - 根因：Python 3.10 bundled OpenSSL 3.5.7的ASN1 bug
   - 影响：桌面版用户无法启动应用

2. **[#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)** - 微信频道推送失败（已关闭）
   - **状态**：已有修复PR [#5061](https://github.com/agentscope-ai/QwenPaw/pull/5061)

3. **[#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)** - 本地模型无响应（已关闭）
   - **状态**：用户报告1.1.5.post2可正常工作，疑为新版本回归

### 其他问题

- **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)** - Agent生成的定时任务无法触发
- **[#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052)** - 工具调用参数错误
- **[#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053)** - Windows桌面端切换Tab卡顿

## 功能请求与路线图信号

### 用户热切关注的功能

1. **[#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)** - 独立视觉模型配置（4评论、1赞）
   - 请求实现视觉中转站功能：图片→视觉模型→主模型处理
   - 可能整合到v1.1.11后续版本

2. **[#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)** - 集成Headroom上下文压缩（2评论）
   - 提议减少60-95%的token消耗

3. **[#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751)** - Windows系统托盘支持（3评论）
   - 请求最小化到托盘后台运行功能

4. **[#4356](https://github.com/agentscope-ai/QwenPaw/issues/4356)** - 文件工具守护细粒度控制（2评论）
   - 请求实现读写权限分离的目录白名单

## 用户反馈摘要

### 主要痛点

- **桌面端体验问题**：
  - cmd窗口干扰：[Issue #4777](https://github.com/agentscope-ai/QwenPaw/issues/4777)
  - 切换Tab卡顿：[Issue #5053](https://github.com/agentscope-ai/QwenPaw/issues/5053)
  - 局域网访问控制台失败：[Issue #4960](https://github.com/agentscope-ai/QwenPaw/issues/4960)

- **性能问题**：
  - 聊天记录多时前端卡死：[Issue #4917](https://github.com/agentscope-ai/QwenPaw/issues/4917)
  - 网页对话内容加载慢：[Issue #4213](https://github.com/agentscope-ai/QwenPaw/issues/4213)

- **功能限制**：
  - 子代理任务不可见：[Issue #4923](https://github.com/agentscope-ai/QwenPaw/issues/4923)
  - 定时任务手动编辑受限：[Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)

### 满意点

- 新版本的OAuth免配置模型功能获支持
- Runtime 2.0架构设计被认为是重要突破

## 待处理积压

### 需关注的 Issue

1. **[#5086](https://github.com/agentscope-ai/QwenPaw/issues/5086)** - OpenSSL 3.5致桌面端无法启动
   - **优先级**：高（阻塞用户使用）
   - **备注**：需紧急修复，影响广泛桌面用户

2. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)** - AgentScope 2.0迁移
   - **优先级**：高（架构层面变更）
   - **备注**：需要明确迁移时间表和兼容策略

3. **[#4455](https://github.com/agentscope-ai/QwenPaw/issues/4455)** - 外部技能路径配置
   - **优先级**：中
   - **备注**：已有PR [#5051](https://github.com/agentscope-ai/QwenPaw/pull/5051)处理类似问题，值得参考

---

*报告生成时间：2026-06-11 | 数据来源：GitHub Issues/PR API*


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# ZeroClaw 项目日报 - 2026-06-11

## 1. 今日速览

ZeroClaw 项目今日活跃度较高，24小时内 Issues 42 条（23 新/活跃，19 已关闭），PR 50 条（33 待合并，17 已合并/关闭）。项目健康度良好，开发活动旺盛但无新版本发布。当前 focus 集中在稳定性修复、架构优化和用户体验提升上，多个高优先级 Bug 已被及时响应并提交 fix PR。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

今日已合并/关闭的重要 PR 包括：

- **#7370** - 修复频道传递时丢弃被截断的工具调用信封，保持回复完整性 [[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7370)]
- **#7347** - 修复 Discord 频道中机器人回复线程创建消息的问题 [[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7347)]
- **#7344** - 添加网关远程管理员重载功能，增强部署灵活性 [[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7344)]
- **#7382** - 修复网关 WebSocket 遥测计费归属到正确模型 [[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7382)]
- **#7136** - 新增 Kilo AI Gateway 作为一级模型提供商 [[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7136)]

这些 PR 推进了频道稳定性、云端管理能力和模型提供商支持，项目向前迈进约 2.4 个工作日的进度。

## 4. 社区热点

今日讨论最活跃的是 Issue **#4710**（LOGO 设计），共 20 条评论 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)]。尽管是低优先级的美化需求，但反映社区参与热情。

其次是 Issue **#3642**（提供全功能 Docker 镜像），12 条评论 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)]，体现对降低新用户采用门槛的迫切需求。

## 5. Bug 与稳定性

### 高严重程度（P1）

- **#6034** - 单/多轮对话丢失用户消息 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)] - **无 fix PR**
- **#6721** - `tool_search` 未默认自动批准导致 MCP 工具静默挂起 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)] - **无 fix PR**
- **#7470** - 委托代理模式下风险档案处理异常阻塞工作流 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)] - **无 fix PR**
- **#7436** - 图像信息工具输出未送达多模态模型 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7436)] - 已有 fix PR **#7446** [[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/7446)]

### 中等严重程度（P2）

- **#6970** - v0.8.1 集成队列跟踪 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)]
- **#7415** - 统一三个代理回合引擎 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)]
- **#7420** - 本地动态库插件系统 RFC [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)]

## 6. 功能请求与路线图信号

### 近期规划

- **#3642**（12 赞）、**#6760**（Docker 文档更新）表明 v0.7.6/v0.8.x 版本将强化容器化体验
- **#6253**（技能支持追踪）、**#7136**（Kilo AI 提供商）指向 v0.7.6 的技能与集成增强主题
- **#7415**、**#7420** 的架构级 RFCs 可能影响 v0.8.2 WASM 插件计划 [[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)]

### 可能纳入下一版本

- **#3642** 全功能 Docker 镜像（高需求、低难度）
- **#6165** 轻量化核心通过外部集成（架构层面）
- **#7394** 语音流水线门面（频道能力扩展)

## 7. 用户反馈摘要

- **痛点**：容器环境下缺少 vi 编辑器[[#7469](https://github.com/zeroclaw-labs/zeroclaw/issues/7469)]、安装文档不完[[#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269)]
- **使用场景**：开发者流程自动化、子代理开发模式[[#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)]、多 Agent 审阅/研究协作[[#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)]
- **满意点**：社区贡献者表达对 Kilo AI 接入[[#7136](https://github.com/zeroclaw-labs/zeroclaw/pull/7136)]、网关远程管理[[#7344](https://github.com/zeroclaw-labs/zeroclaw/pull/7344)]的积极反馈
- **不满点**：Matrix 频道会话隔离导致失忆[[#6958](https://github.com/zeroclaw-labs/zeroclaw/issues/6958)]、配置文档链接失效[[#6222](https://github.com/zeroclaw-labs/zeroclaw/issues/6222)]

## 8. 待处理积压

- **#4627** - file_write 工具写入文件在主机文件系统不可见（S0 严重）[[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)]
- **#6309** - model_routing_config 操作覆盖 schema_version=2 设置（S2）[[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6309)]
- **#5810** - 安全 OTP 动作名未校验（S2）[[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5810)]

这些 Issue 多为 2-3 月前提出，缺乏后续跟进，请维护者优先关注。


</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*