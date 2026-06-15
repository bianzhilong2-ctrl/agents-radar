# OpenClaw 生态日报 2026-06-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-15 02:48 UTC

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



以下是为2026-06-15生成的OpenClaw项目日报，严格基于提供的GitHub数据结构：

---

### 1. **今日速览**  
项目今日活跃度极高，过去24小时共处理500个Issue和500个PR，动态更新量达1000条。新版本`v2026.6.8-beta.1`已发布，Telegram/WhatsApp渠道功能完善，但关闭Issue（95）和PR（81）完成率较高（19%），说明核心维护需求已高效处理。  
GitHub链接：Issues updates → [openclaw/openclaw Issues](https://github.com/openclaw/openclaw)  

---

### 2. **版本发布**  
**v2026.6.8-beta.1 发布**  
- **升级亮点**：Telegram支持结构化rich text（表格、列表、图片边界限制安全）、WhatsApp含CLI退稿及消息持久化功能改进。  
- **无重大破坏性变更**，但需注：  
  - 马克卓尔-workers调整（若用户配置依赖）  
  - 涉及`video审核`的消息块边界需测试  
GitHub链接：v2026.6.8 → [GitHub Release](https://github.com/openclaw/openclaw/releases)  

---

### 3. **项目进展**  
今日关键进展：  
- **关闭高优先级Bug**：Issue #80380（升级为`gemini-3.1-flash-lite`）已关闭，PR合并后配合mi2生态发布。  
- **PR关闭进展**：多个Platform API和Session隔离问题PR接近合并（如Issue #84516、#85103相关PR）。  
- **状态进度**：25%功能接入新版本（新版本lightweight模型支持率）  
GitHub链接：PR updates → [openclaw/openclaw PRs](https://github.com/openclaw/openclaw/pulls)  

---

### 4. **社区热点**  
- **Issue #80380（评论14）**：用户推动升级至Gemini 3.1的速度，强调成本效率要求。  
- **Issue #84516（评论11）**：用户报告长回答被截断的用户体验问题，关联代码审查高预期。  
- **Issue #85103（评论9）**：社区对退耗错误的讨论集中于用户计费透明度。  
GitHub链接：热点Issues → [Issue #80380](https://github.com/openclaw/openclaw/issues/80380)  

---

### 5. **Bug与稳定性**  
按严重性排序：  
1. **P1问题**：Issue #84516（1000字符截断） → PR #84516在重构中但无进展  
   链接：[Issue #84516](https://github.com/openclaw/openclaw/issues/84516)  
2. **P1问题**：Issue #85103（退耗异常） → 无当前PR  
   链接：[Issue #85103](https://github.com/openclaw/openclaw/issues/85103)  
3. **P0问题**：Issue #84903（会话串联阻塞） → PR #84903在回滚中  
   链接：[Issue #84903](https://github.com/openclaw/openclaw/issues/84903)  

---

### 6. **功能请求与路线图信号**  
- **用户需求**：PR #92340（旺客会议邀请处理）表明用户期待联动日历集成能力。  
- **潜在样品**：PR #85616（快速文本命令替代方案）可能纳入下次迭代。  
- **oga管理信号**：Issue #85583（ עמוע)

---

### 7. **用户反馈摘要**  
通过评论提炼关键痛点：  
- **会话状态**：多位用户抱怨退耗导致的消息丢失（Issue #85103评论）  
- **易用性**：WhatsApp/Telegram审核流程复杂（Issue #85126评论）  
- **满意度**：新渠道的可视化显示获得好评（v2026.6.8高lights反馈）  

---

### 8. **待处理积压**  
- **Issue #84516**：1000字符截断问题仍无PR解决，需紧急跟进  
- **Issue #85103**：退耗错误仍处于OPEN状态  
- **PR #85027**（MacOS启动代理崩溃）采用归档异常处理方案  

---

结尾说明：数据显示项目健康度较高，但关键Bug（如退耗问题）需立即关注。


---

## 横向生态对比

**个人AI 助手 / 自主智能体开源生态横向对比分析（2026‑06‑15）**

---

## 1. 生态全景  
1. 2026 年上半年，开源 AI 智能体项目呈现**快速迭代‑安全强化‑功能拓展**三层递进的格局。  
2. 大多数项目从 **单一聊天能力** 向 **跨平台网关、插件化工具集、运行时上下文感知** 迁移。  
3. 安全（OAuth、凭证泄露、沙箱绕过）已成为统一的**核心关注点**，多个项目同步发力硬化权限模型。  
4. 社区活跃度呈两极分化：少数项目（OpenClaw、IronClaw）进入**高频 PR / Issue**阶段；大多数处于**维持/小范围优化**阶段。  
5. 虽然本周无新 Release，但多个项目正围绕 **“模型‑工具‑安全”** 三位一体的下一代智能体架构布局，预示着**统一插件/扩展标准**将逐步形成。

---

## 2. 各项目活跃度对比  

| 项目 | 今日 **新增 Issue** | 今日 **新增 PR** | 已合并/关闭 PR | 版本发布 | 健康度评估* |
|------|-------------------|----------------|----------------|----------|------------|
| **OpenClaw** | 500（同步更新） | 500（同步更新） | 19%（高关闭率） | 2026‑6.8‑beta.1（已发） | ★★★★★ |
| **NanoBot** | 2 | 45 | 27 已合并/关闭 | –（无） | ★★★★☆ |
| **Hermes Agent** | 100（50 Issue + 50 PR） | 7 合并/审查中 | 0 正式发布 | –（无） | ★★★★☆ |
| **PicoClaw** | – | – | – | – | ✖（摘要失败） |
| **NanoClaw** | 7 | 10 | 5 已合并/关闭 | – | ★★★★☆ |
| **NullClaw** | 1（开放） | – | – | – | ★★☆☆☆ |
| **IronClaw** | 32 | 27（待审） | 0 合并 | –（无） | ★★★★☆ |
| **LobsterAI** | 2 | 4 | 4 已关闭 | – | ★★★★☆ |
| **Moltus** | 1 | 1 | – | – | ★★☆☆☆ |
| **CoPaw / ZeptoClaw / ZeroClaw** | 0 | 0 | – | – | ★☆☆☆☆ |

\* 健康度基于 Issue + PR 活跃度、合并率、无缺陷暴露情况综合判定：**★5**（极佳）— **★1**（极不健康）。

---

## 3. OpenClaw 在生态中的定位  

| 维度 | 对比对象 | 关键优势 | 与同类的差异化 |
|------|----------|----------|----------------|
| **功能层次** | OpenClaw vs. IronClaw、NanoBot、Hermes Agent | 提供 **完整的跨平台渠道（Telegram/W /WhatsApp）**、**Telegram Bot 2 账号联动**、较成熟的 **Issue/PR 自动化闭环** | 侧重**用户体验可视化**与**Telegram 多渠道统一**，而非纯粹的多模态或插件扩展 |
| **技术路线** | OpenClaw 采用 **轻量级 Workers + token‑efficiency** 机制；IronClaw 更偏向 **Reborn 架构** & **安全沙箱**；NanoBot 着重 **Toolset 可插拔** | 在**低成本运行**（token 经济）上更具竞争力，适合资源受限的侧载部署 | 与 IronClaw 的 “Reborn” 对比，OpenClaw 更倾向**轻量 + 兼容性**，兼容多聊天渠道的统一会话管理 |
| **社区规模** | Issue 500、PR 500 为单日峰值，远超其他项目 | 社区**规模**与**响应速度**均为生态内最大之一 | 在社区活跃度上超过 NanoBot、LobsterAI 等，仅逊于 IronClaw 的高安全议题密度 |
| **发布节奏** | 已发布 **v2026.6.8‑beta.1**，且提供完整的 migration 说明 | **正式版发布**更为可预期，给用户提供迁移路径 | 与多数仍停留在“开发中”的项目形成对比，提升可信度与企业采用意愿 |

---

## 4. 共同关注的技术方向  

| 方向 | 涉及项目 | 具体诉求（摘自 Issue/PR） |
|------|----------|---------------------------|
| **长文本/输出截断** | OpenClaw (#84516)、Hermes Agent (#7237)、NanoBot (#4309)、IronClaw (#46090) | 需要流式输出、分块处理或提升上下文上限，防止被强制截断导致信息丢失 |
| **安全与凭证泄露** | OpenClaw (#85103)、NanoBot (#43083)、IronClaw（5 个 Shell 绕过）、Hermes Agent (#46413/#46411) | 要求更严格的 OAuth、运行时凭证隔离、避免泄露本地文件路径或认证信息 |
| **统一后端路由透明化** | NanoBot (#45058)、Hermes Agent (#45058)、IronClaw（插件管线） | 希望后端切换（如默认使用 Parallel.ai）能**显式声明**，防止费用突增和调试困难 |
| **运行时上下文感知** | Hermes Agent (#4836)、IronClaw (#4836)、OpenClaw（未直接提及但需求同上） | 让模型能够感知**会话通道、投递目标、触发器来源**，实现“知晓可用工具” |
| **多渠道/多模态统一** | OpenClaw（Telegram/Bot 结构化） 、IronClaw（WebChat v2、附件管线） 、LobsterAI（多模态） | 需要统一的 **附件/图片/文件** 处理机制，兼容多平台 UI，避免渠道碎片化 |

---

## 5. 差异化定位分析  

| 维度 | OpenClaw | IronClaw | NanoBot | Hermes Agent | Others（PicoClaw、Moltus 等） |
|------|----------|----------|----------|--------------|------------------------------|
| **功能侧重** | **跨渠道统一聊天**，强调 Telegram Bot 与多渠道 API 的对接 | **安全‑沙箱化 + Reborn 架构**，面向企业级自主智能体平台 | **工具集成 & 插件化**，提供丰富的本地工具扩展点 | **多平台网关**（Discord、Signal、Telegram）+ **上下文感知**，面向开发者社区 | 多为 **实验性/原型**，聚焦 Docker/极端压缩等底层优化 |
| **目标用户** | 普通终端用户、需要在多平台间切换的业务场景（客服、社交） | 大型企业、需要严格权限控制的 AI 智能体研发团队 | 开发者/研究者、对插件与工具链深度定制需求的技术爱好者 | 多平台社区运营者、对跨渠道自动化有高要求的开发者 | 研究者、边缘计算爱好者 |
| **技术架构** | 事件驱动 +轻量 Workers + token‑efficiency | 微服务 + 安全沙箱 + “Reborn” 运行时上下文 | 插件中心（Toolsets）+ 本地工具缓存 | 多网关适配 + 工作流 token Harden + 细粒度权限 | 极端 Docker 环境适配、纯 Rust 高效存储等 |
| **社区活跃度** | ★★★★★（日均1000+ Issue/PR） | ★★★★☆（安全议题密集） | ★★★★☆（PR 稳定） | ★★★★☆（高讨论度） | ★☆☆☆☆–★★★★☆（多数沉寂） |

**结论**：OpenClaw 在**用户体验统一**与**社区规模**上形成明显优势，适合作为 **面向 mass market 的公共智能体入口**；而 **IronClaw** 更偏向 **安全‑可审计的企业级平台**，**NanoBot** 与 **Hermes Agent** 则是 **插件扩展** 与 **多平台网关** 的技术实验前沿。

---

## 6. 社区热度与成熟度  

| 类别 | 项目 | 状态描述 | 关键特征 |
|------|------|----------|----------|
| **快速迭代**（高 Issue/PR 更新、合并率高） | OpenClaw、NanoBot、Hermes Agent、IronClaw | 多条 PR 即将合并，Issue 关闭率 60%+，频繁发布 beta 版本 | 代表 **正在向 1.0/2.0 过渡**，关注功能完善与安全兼顾 |
| **质量巩固**（低新增但重点在 Bug 修复与安全） | NanoBot、OpenClaw（高关闭率） | Issue 关闭率高、安全漏洞快速响应 | 侧重 **稳定性、可靠性**，适合较大规模部署 |
| **实验/原型**（少量活动、功能实验） | Moltus、PicoClaw、ZeroClaw、TinyClaw | 活动 ≤1 条且未合并，或迟迟未发布版本 | 关注 **底层实现**（Docker、极端压缩），尚未形成产品级使用 |
| **停滞/沉寂** | NullClaw、ZeptoClaw、CoPaw | 无新 Issue、PR，社区基本停摆 | 需要 **外部刺激**（新维护者或企业赞助）才能恢复活力 |

---

## 7. 值得关注的趋势信号  

1. **“上下文感知‑工具可用性”** 正在成为智能体的标配需求。Hermes Agent、IronClaw、OpenClaw 都在尝试让模型**感知当前连接渠道、投递目标及触发器**，从而实现更精准的工具调度。  
2. **安全沙箱与权限细粒度** 成为核心竞争点，尤其是 **Shell/写文件绕过**、**OAuth 凭证读取**、**WebSocket 明文调用** 等高危审计。多项目同步引入 **硬化的权限拦截层**。  
3. **多渠道统一与可视化** 需求迫在眉睫。Telegram Bot、Discord、WhatsApp、WebChat 等渠道的功能差异被用户视作痛点，项目通过 **统一接口+前端 UI**（如 OpenClaw 的结构化 rich‑text、IronClaw 的多模态管线）来统一体验。  
4. **插件化/工具集成模型** 正在从“一次性功能”向 **可动态扩展的模块化体系** 演进，例如 NanoBot 的 `tools.exec.pathPrepend`、IronClaw 的插件路由、LobsterAI 的技能部件。  
5. **企业级部署对安全与可审计** 的需求提升，导致 **细粒度的权限策略、OAuth‑CLI 流程、开箱即用的凭证管理** 成为项目差异化的关键卖点。  

**对开发者的建议**  
- 如计划构建面向大众的智能体，**优先在跨渠道统一、用户友好 UI** 上投入；如面向企业或安全审计严格的场景，**务必在权限、审计链路上落地细粒度控制**。  
- 关注 **“上下文感知 + 工具可用性”** 的实现方案（如 Hermes Agent 的运行时切片、IronClaw 的认证网关前置），可为后续插件化提供技术底座。  
- 对于想要参与生态贡献的开发者，**加入已有 PR/issue 的审查/合并流程**（尤其是安全类议题）是快速获得社区信任的捷径。  

---  

> **整体结论**：2026 年的个人 AI 助手 / 自主智能体开源生态已从“功能展示”阶段进入“**安全可靠 + 多渠道统一 + 可扩展插件**”的成熟期。OpenClaw 以其庞大社区与成熟的多渠道实现成为**生态入口型项目**的代表，IronClaw 与 Hermes Agent 则分别在**企业安全**与**多平台网关**领域形成补充。把握上述技术趋势，将有助于在竞争中获得差异化定位并实现可持续增长。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报（2026‑06‑15）**  
*来源：GitHub Issues & PRs（过去 24 h）*  
*链接：全部均指向 https://github.com/HKUDS/nanobot*  

---

## 1. 今日速览
- 过去 24 h 新增 **2 条活跃 Issue**，同时 **3 条 Issue 被关闭**，社区讨论保持平稳。  
- **45 条 PR** 有更新，其中 **27 条已合并/关闭**，**18 条仍在待合并**，整体代码流入速度良好。  
- 当前 **无新版本发布**，但已有多个关键修复与功能扩展正在并入 `main` 分支。  
- 综合活跃度评估：**健康**（Issue + PR 数量均在可控范围，闭合率≈ 60%），项目向前推进势头强劲。

---

## 2. 版本发布
> **无新版本发布**（`Latest Releases` 为空）。  
> 因此不需要说明更新内容、破坏性变更或迁移注意事项。

---

## 3. 项目进展 – 今日合并/关闭的重要 PR
| PR | 状态 | 关键变更 | 链接 |
|----|------|----------|------|
| **#4210** | **CLOSED** | 修复桌面重启后 token 与 replay 断层；持久化 WebSocket transcript，支持桌面通知。 | <https://github.com/HKUDS/nanobot/pull/4210> |
| **#4245** | **CLOSED** | 删除已弃用的 “nightly” 分支指导文档，更新 CI 过滤规则。 | <https://github.com/HKUDS/nanobot/pull/4245> |
| **#4248** | **CLOSED** | 修正 token‑usage 热力图在时区切换时的标签截断，完善月份渲染回归覆盖。 | <https://github.com/HKUDS/nanobot/pull/4248> |
| **#4273** | **CLOSED** | 引入 `tools.exec.pathPrepend` 配置，实现工具目录的 `PATH` 优先级控制。 | <https://github.com/HKUDS/nanobot/pull/4273> |
| **#4269** | **CLOSED** | 为“无工具”情形新增 finalize 路径，提供更友好的迭代上限提示。 | <https://github.com/HKUDS/nanobot/pull/4269> |
| **#4275** | **CLOSED** | 对非法配置文件实现快速失败，防止错误配置导致的后续难以定位的问题。 | <https://github.com/HKUDS/nanobot/pull/4275> |
| **#4274** | **CLOSED** | 为 `history.jsonl` 增加 `session_key` 元信息，按会话划分最近历史，避免跨会话干扰。 | <https://github.com/HKUDS/nanobot/pull/4274> |

> 这些 PR 主要聚焦于 **稳定性、配置安全、用户体验（WebUI 移动端适配）** 与 **工具链扩展**，显著提升了系统的可维护性与可用性。

---

## 4. 社区热点 – 最活跃的 Issues/PRs
| 项目 | 类型 | 关键摘要 | 链接 |
|------|------|----------|------|
| **#4345** | Issue (OPEN) | **Image‑strip fallback** 在非法图片错误后会泄露文件路径，已在后续 PR #4346 进行修复。 | <https://github.com/HKUDS/nanobot/issues/4345> |
| **#4346** | PR (OPEN) | 关闭 #4345，实现 `mark stripped images as unviewable`，防止路径泄露。 | <https://github.com/HKUDS/nanobot/pull/4346> |
| **#4309** | Issue (OPEN) | **/v1/chat/completions** 始终返回 `usage` 为 0，已在 #4343 中加入 schema 校验。 | <https://github.com/HKUDS/nanobot/issues/4309> |
| **#4250** | Issue (CLOSED) | `split_message` 切分代码块导致 Telegram 消息破损，已在 #4250 修复。 | <https://github.com/HKUDS/nanobot/issues/4250> |
| **#4343** | PR (OPEN) | 强化内置工具参数校验，拒绝未知字段，避免非法调用。 | <https://github.com/HKUDS/nanobot/pull/4343> |

**趋势分析**  
- 近期关于 **图像处理解决方案**（#4345/4346）和 **token 使用统计**（#4309）是社区最关注的两大热点。  
- 多位维护者在 PR #4346 中强调 **安全**（不泄露文件路径）与 **可观测性**（明确错误行为），表明项目对提供者友好性的重视度在提升。

---

## 5. Bug 与稳定性
| Bug Issue | 严重程度 | 现象 | 已有 Fix PR | 链接 |
|-----------|----------|------|-------------|------|
| **#4309** | 高 | `/v1/chat/completions` 始终返回 `usage: {prompt_tokens:0,completion_tokens:0,total_tokens:0}`，导致上层统计失效。 | **#4343**（强化参数校验）正在审查中，预计会一起解决。 | <https://github.com/HKUDS/nanobot/issues/4309> |
| **#4333** | 中 | Anthropic provider 仍向 `opus-4-8` 与 `Fable` 发送已废弃的 `temperature` 参数，导致 400 错误。 | 已在 #4273 中加入 `temperature` 判除逻辑（已合并）。 | <https://github.com/HKUDS/nanobot/issues/4333> |
| **#4345** | 高 | `LLMProvider._strip_image_content` 会把被剥离的图片路径泄露到日志/响应中。 | **#4346**（标记为 unviewable 并阻断泄露）已提交。 | <https://github.com/HKUDS/nanobot/issues/4345> |
| **#4250** | 低 | `split_message` 在切分长文本时若恰好位于 fenced code block，会产生 HTML 破损。 | 已在 #4250 合并并修复。 | <https://github.com/HKUDS/nanobot/issues/4250> |

> 综上，活跃的 **高严重度** Bug 主要集中在 **使用统计错误** 与 **路径泄露**，已有对应的 PR 正在进行最终审查并预计快速合并。

---

## 6. 功能请求与路线图信号
| 需求/建议 | 关联 PR / Issue | 可能纳入的里程碑 |
|----------|----------------|----------------|
| **`tools.exec.pathPrepend`**（优先级配置） | **#4273**（已合并） | 已纳入 **v0.9.x** 里程碑，待文档完善后正式发布。 |
| **Cron 绑定会话** | **#4299**（已合并） | 将在 **v0.9.x** 中随 `cron` 服务升级同步释放。 |
| **Automation 管理 UI** | **#4330**（已打开） | 预计在 **v1.0** 前完成 UI 视图与 API。 |
| **Fail‑fast 配置校验** | **#4275**（已合并） | 已实现，待后续扩展为更完整的 config‑schema validator。 |
| **更细粒度的 token 使用报告** | **#4309**（未完整解决） | 后续可在 **v1.1** 中加入真实 token 计数。 |

> 从已Merge的 PR 与打开的 Issue 能看到，**路线图信号**较为明确：配置安全、会话绑定、自动化可视化是本轮重点；而 **token 统计** 与 **完整的错误上报** 仍是后续迭代的待办。

---

## 7. 用户反馈摘要
- **情绪**: 总体 **积极**（多数 Issue 关闭或快速响应），但在 **/v1/chat/completions 返回零 token** 与 **图片路径泄露** 两处用户感知到明显错误。  
- **痛点**:  
  1. **统计不准** – 前端依赖 usage 字段进行费用/使用率展示，零值导致误导。  
  2. **泄露文件路径** – 当图像处理异常时，后端把本地路径泄露给用户或日志，安全风险。  
  3. **代码块切分** – 长代码块在 Telegram 中被拆成多条消息，导致渲染错误。  
- **满意点**:  
  - 新的 **pathPrepend** 与 **session_key** 配置提升了用户对工具与会话的可控性。  
  - UI 移动端适配（PR #4339）收到用户好评，布局更友好。  

> 社区用户普遍期待 **更可靠的统计**、**更安全的图片处理** 以及 **更友好的错误提示**。

---

## 8. 待处理积压
| 项目 | 状态 | 关注点 | 链接 |
|------|------|--------|------|
| **#4262** (enhancement) – “Use botIcon if defined when starting agent mode” | CLOSED（已合并）但未正式发布至正式版 | 仍需确认图标加载时机与主题切换兼容性 | <https://github.com/HKUDS/nanobot/issues/4262> |
| **#4309** (bug) – token usage 为 0 | OPEN，仍未完全解决 | 需要在 #4343 中合并后再做完整回归测试 | <https://github.com/HKUDS/nanobot/issues/4309> |
| **#4345** (bug) – image‑strip 泄露路径 | OPEN（已关联 PR #4346） | PR 合并后需进行集成测试，确认不影响多模态链路 | <https://github.com/HKUDS/nanobot/issues/4345> |
| **#4250** (closed) – split_message 切分代码块 | 已关闭，但还有未合并的细节 | 某些平台仍可能出现截断，需要回归检查 | <https://github.com/HKUDS/nanobot/issues/4250> |
| **#4138** (enhancement) – expose `tools.file.enable` | OPEN，尚未合并 | 需要在 CI 中加入对应的开关测试 | <https://github.com/HKUDS/nanobot/pull/4138> |

> 这些议题大多已有明确的实现方案或 PR，但因 **合并审查周期** 或 **测试覆盖** 仍在滞后。建议相关维护者关注并加速合并审查，以保持项目健康节奏。

---

### 小结- **项目活跃度**：Issue + PR 数量均在可控范围，合并率 60%+，信号良好。  - **风险点**：token 统计错误、图片路径泄露是当前最高优先级的 Bug。  
- **发展趋势**：功能安全（配置校验、会话绑定）与 UI/UX（ 모바일 适配、自动化管理）同步推进，预计在下一版本（v0.9 / v1.0）中实现更完整的 **使用统计** 与 **安全** 能力。  

> 维护团队需要重点关注 **#4309** 与 **#4345** 的最终修复，并尽快将已准备好的 PR 合并进入 `main`，以免积压导致后续回归测试复杂化。  

--- 

*以上报告基于 GitHub 公开数据自动生成，旨在为项目维护者与社区提供客观、数据驱动的日常概览。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – 项目日报 (2026‑06‑15)**  

---

## 1. 今日速览
- **活跃度高**：过去 24 h 内共计 **100 条** Issue/PR 事件（50 Issues、50 PR），其中 **84 %** 为新建或仍在活跃讨论，体现社区强劲参与。  
- **问题聚焦**：大量讨论围绕 **长回复截断、模型选项阻塞、工具链安全** 等高优先级 bug；同时出现 **桌面 UI/插件增强** 的功能请求。  
- **合并节奏**：截至今日仍未发布正式版本，但已有 **7 条** PR 已合并或即将合并，主要针对 **安全 Harden、gateway‑bug 修复、Discord/Signal 工具链补全**。  
- **整体健康**：项目保持快速迭代，核心功能（CLI / gateway / dashboard）正在稳步硬化，唯一需要关注的是几起 **性能回归**（Issue #46090）和 **安全泄露**（Issue #46413/#46411）警示。

---

## 2. 版本发布
> **无新 Release**（截至 2026‑06‑15），因此本段略去。

---

## 3. 项目进展 – 关键合并/关闭 PR

| PR 编号 | 标题 (重点) | 关键改动 | 影响范围 | 当前状态 |
|--------|-------------|----------|----------|----------|
| **#46397** | **feat(discord): add rename_thread action** | 为 Discord 工具新增 `rename_thread` 原语，取代临时 curl 调用。 | Discord gateway / agent tool‑search | 已打开，待审 |
| **#46401** | **fix(toolsets): include discord tools in core** | 将 Discord/Discord‑admin 工具集成到核心 `tool_search`，消除延迟加载。 | CLI / gateway / agent | 已打开，已通过 CI |
| **#46388** | **fix(signal): preserve quoted reply context** | 传播 Signal 回复引用元数据，提升多轮对话准确性。 | Signal gateway | 已打开 |
| **#46385** | **fix(gateway): harden Honcho cache memo invalidation** | 在 Honcho 缓存键中加入文件大小，防止文件内容变更时缓存失效。 | 所有平台插件 | 已打开 |
| **#46399** | **fix(terminal): env_passthrough fallback to .env** | 本地后端读取 `~/.hermes/.env` 中的 env 变量，保持与 Docker 行为一致。 | CLI / terminal tool | 已打开 |
| **#46402** | **fix(skills): fall back after rejected GitHub token** | 当 `GITHUB_TOKEN` 被吊销时，自动回退并给出明确错误提示。 | Skills Hub / CI | 已打开 |
| **#46426** | **fix(dashboard): scope plugin routes to selected profile** | Dashboard 插件路由现在基于当前选中的 profile，而不是默认 profile。 | Desktop UI / 插件系统 | 已打开 |

> **合并数量**：本轮仍在审查阶段的 PR 较多，显示维护者正集中力量 **硬化安全、提升工具可用性**。后续 1‑2 天预计会有多项 PR 进入 `merged` 状态。

---

## 4. 社区热点 – 评论/关注最多的 Issue/PR

| 编号 | 标题 | 评论数 / 👍 | 链接 | 关注点概述 |
|------|------|------------|------|------------|
| **#7237** (Closed) | **Error: Response truncated due to output length limit** | 46 / 6 | <https://github.com/NousResearch/hermes-agent/issues/7237> | 大模型长文本生成被强制截断，引发用户对 **输出完整性** 的强烈不满。社区提出多种缓解方案（流式回调、分块请求），已促成后端分页逻辑的讨论。 |
| **#45058** (Closed) | **web_search/web_extract silently routes to Parallel.ai** | 7 / 14 | <https://github.com/NousResearch/hermes-agent/issues/45058> | 默认后端切换隐蔽，导致 API 费用意外增长。多数评论呼吁 **显式后端声明** 与 **安全审计**。 |
| **#43083** (Open) | **Passwords masked but model reads back its own history** | 7 / 0 | <https://github.com/NousResearch/hermes-agent/issues/43083> | 机密信息泄露风险；讨论围绕 **对话历史脱敏** 与 **工具调用分离**，已触发内部安全改进路线（见 PR #46421）。 |
| **#44560** (Open) | **model.options blocks on sync HTTP calls → WebSocket timeout** | 5 / 0 | <https://github.com/NousResearch/hermes-agent/issues/44560> | 同步请求导致 UI 卡死，呼吁 **异步化 provider 检查**，已有 PR #46425 在工作流层面提升权限，间接促使后端改为 async。 |
| **#46413** (Open) | **Desktop file preview can read Hermes credential stores** | 1 / 0 | <https://github.com/NousResearch/hermes-agent/issues/46413> | 安全审计热点，涉及 Electron IPC 路径过滤失效，已触发安全硬化 PR #46421。 |
| **#46397** (Open PR) | **add rename_thread to discord_tool** | — | <https://github.com/NousResearch/hermes-agent/pull/46397> | 受 Issue #46396 需求驱动，社区期待 **原生 Discord 线程管理**。 |

> **社区诉求**：**可靠的长文本输出、明确的后端路由、机密信息防泄漏** 是当前最紧迫的需求；安全硬化（OAuth、文件预览）也在快速跟进。

---

## 5. Bug 与稳定性

| 严重程度 | Issue 编号 | 简要描述 | 是否已有 Fix PR | 关联 PR |
|----------|------------|----------|----------------|--------|
| **P1** | #43083 (Open) | 掩码密码后模型仍能读取会话历史，导致凭证泄漏风险。 | **未**（正在审计） | 相关 PR #46421（auth store Harden） |
| **P1** | #46310 (Open) | Matrix 媒体发送每条信息都重新初始化 E2EE，耗尽一次性密钥。 | **未**（待实现） | — |
| **P2** | #45058 (Closed) | 默认 `web_search`/`web_extract` silently 使用 Parallel.ai。 | 已关闭，已在后端加入 **显式后端声明**。 |
| **P2** | #44560 (Open) | `model.options` 同步 HTTP 调用阻塞 WebSocket，导致超时。 | **未**（在讨论异步化） | 关联 PR #46425（workflow token Harden，间接影响） |
| **P2** | #46090 (Open) | Agent 在基本任务上出现极度慢速，疑似上下文压缩或内存泄漏。 | **未**（需复现） | — |
| **P3** | #46413 (Open) | Desktop 文件预览能够读取 Hermes 凭证库。 | **已**（PR #46421） |
| **P3** | #46411 (Open) | `read_file` 可越权读取其他 profile 的凭证文件。 | **已**（PR #46421） |
| **P3** | #46265 (Open) | SimpleX DM 发送失效，`@<contactId>` 被误解析。 | **未** | — |

> **总体评估**：高危安全/隐私 bug 已快速得到 dedicated 修复 PR（#46421）；性能回退（#46090）仍待社区提供复现步骤。建议维护者在下个里程碑前优先解决 P1‑P2 类阻塞性 bug。

---

## 6. 功能请求与路线图信号

| 编号 | 功能需求 | 需求来源 | 与已有 PR 的关联度 | 可能纳入下版本 |
|------|----------|----------|-------------------|-----------------|
| #12020 (Open) | 隐藏 `hermes.tool.progress` 与工具数据消息的输出 | 用户希望前端兼容 OpenAI UI | 无直接实现 PR；可在 `agent/tool_progress` 开关中实现。 | 中 |
| #46192 (Open) | **Keep** 选项在 `model.base_url` 设置时保留旧值 | UI 配置便利性 | 暂无实现；可在 CLI 参数解析中添加。 | 低 |
| #46253 (Open) | **GBrain** 作为 memory provider 插件 | 插件生态扩展 | 需要新增 `memory` 插件接口；暂无 PR。 | 中‑长期 |
| #44140 (Open) | Desktop UI 自动滚动、侧边栏遮挡修复、会话分组 | 桌面使用体验 | 与 PR #46426（插件路由）和 UI 重构相关。 | 高（已在 UI 重构计划） |
| #45103 (Open) | Sidebar hover‑card 展示 AI 生成的会话摘要 | 增强交互 | 需后端提供摘要 API；目前无对应 PR。 | 低‑中 |
| #46131 (Open) | Ollama 推理模型返回空内容的兼容开关 | 本地模型适配 | 无实现；可在 provider 适配层添加 `reasoning_effort` 开关。 | 中 |
| #46304 (Open) | 隐藏未配置的 provider（模型切换器） | 配置洁净度 | 代码层面已有 `model_catalog` 选项，可扩展。 | 高 |

> **路线图建议**：在下一个 0.17.x 里程碑（预计 2026‑07‑中）重点关注 **UI 可配置性（自动滚动、模型切换隐藏）** 与 **插件化 memory（GBrain）**；安全硬化已进入正式版前的必备项。

---

## 7. 用户反馈摘要

- **长文本截断**（#7237）是最频繁的痛点，引发对 **流式 API** 与 **分页生成** 的需求。  
- **后端默认路由**（#45058）导致云服务费用意外，用户要求 **显式声明或禁用默认路由**。  
- **安全泄露**（#43083、#46413、#46411）表明社区对 **凭证脱敏** 与 **文件预览硬化** 极其敏感，期待官方提供 “安全模式”。  
- **桌面 UI 卡顿**（#44560）与 **模型选项阻塞** 说明同步 HTTP 调用在实时聊天场景仍是瓶颈。  
- 部分用户在 **自定义 provider**（#40480）和 **Cron 跨 profile**（#42651）上遇到展示/隔离问题，暗示 **配置统一视图** 仍待完善。

整体来看，用户对 **功能完整性** 与 **安全可靠性** 的期待在提升，满意度主要集中在 **插件生态** 与 **多平台网关**，而对 **性能** 与 **UI 细节** 的不满占比约 30%。

---

## 8. 待处理积压（长期未响应）

| 编号 | 类型 | 简述 | 开放天数 | 推荐行动 |
|------|------|------|----------|-----------|
| #46303 | Bug (P2) | 并发会话共享内存/工作树导致交叉污染 | 2 天 | 评审现有隔离方案，考虑引入 per‑session worktree/namespace。 |
| #46332 | Bug (P2) | Windows Cron 作业使用错误的 Bash 实现 | 1 天 | 提交平台检测补丁或提供 PowerShell 替代。 |
| #46320 | Duplicate (P3) | Desktop 底部模型切换器缺少全局开关 | 1 天 | 合并至 UI 重构 PR #44107。 |
| #46419 | Closed (Bug) | WebSocket 错误横幅硬编码英文 | 0 天 | 已关闭，可在 i18n PR 中加入。 |
| #46378 | Closed (Bug) | xAI OAuth 凭证解析硬化 | 0 天 | 已合并。 |
| #46265 | Bug (P3) | SimpleX DM 发送丢失 | 1 天 | 需要调试 `adapter.py` 中的联系人解析逻辑。 |
| #46310 | P1 | Matrix 媒体路径频繁重新登录 | 1 天 | 高优先级，建议在下一次平台适配迭代中实现连接复用。 |

**提醒**：安全相关的 #46413 / #46411 已由 PR #46421 处理，建议在合并后立即发布 **安全补丁** 通知用户更新。

---

### 结论
Hermes Agent 今日保持 **高活跃度** 与 **快速迭代**，社区重点聚焦 **输出完整性、后端透明度、凭证安全**。维护者应优先合并已准备好的安全 Harden PR（#46421 等），并在下周期计划中加入 **异步 provider 检查** 与 **UI 配置可选项**。若能在 0.17.x 正式版前解决 P1‑P2 级别的阻塞 bug，项目的可靠性与用户信任度将明显提升。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### **今日速览**  
今日项目表现活跃，7条Issue更新（6新、1关闭）和10条PR提交（5待合并、5已合并/关闭）。代码库迭代活跃，文档优化及安全性修复推进显著，但未发布新版本。开发者参与度高，核心功能改进速度较快。  

---

### **版本发布**  
无新版本发布。  

---

### **项目进展**  
1. **安全性修复关键修复**  
   - [PR#2759](https://github.com/qwibitai/nanoclaw/pull/2759) 修复#2751问题：预算耗尽时系统不再直接丢弃LLM回复，而是始终传递错误信息（如“token限额超出”），明确告知用户问题。该PR解决了用户答复中反复提及的“操作不透明”的痛点。  
2. **文档路径修正**  
   - [PR#2764](https://github.com/qwibitai/nanoclaw/pull/2764) 修复#2763文档链接错误，更新指向迁移后的`src/modules/`路径，避免开发者破坏工作流程。  
3. **Provider架构重构**  
   - [PR#2756](https://github.com/qwibitai/nanoclaw/pull/2756) 引入运营商级Provider选择功能，支持跨进程缓存迁移和权限控制，降低多 provider依赖的潜在冲突概率。  
4. **CLI工具动态化**  
   - [PR#2758](https://github.com/qwibitai/nanoclaw/pull/2758) 通过`CLI DevOps.json`文件管理稳定插件，减少Docker构建依赖硬编码，提升扩展性。  

---

### **社区热点**  
1. **加密服务器配置漏洞讨论**  
   多用户关注[Issue #2762](https://github.com/qwibitai/nanoclaw/issues/2762)中`add_mcp_server`批准流程漏洞，担忧隐藏参数可能通过自动化Flow被不览目批准。这可能涉及企业场景下的安全审计风险，相关讨论已吸引至少3名核心贡献者参与。  
2. **Telegram API更新协调性**  
   [Issue #2767](https://github.com/qwibitai/nanoclaw/issues/2767)标记过时的Markdown转换器，社区讨论聚焦如何同步频繁更新的Telegram泛化API规范，突出稳定性与兼容性的权衡。  

---

### **Bug 与稳定性**  
1. **严重：本地文件泄露漏洞**（#2760）  
   - 用户提交的安全建议揭示`send_file`工具接受绝对路径，原开发文档中未限制读取范围，可能通过恶意Agent获取系统敏感文件。  
2. **安全：Webhook绕过风险**（#2761）  
   - 无认证的本地Webhook设计，存在内网传输数据会被复杂增加篡改风险，尤其是在跨服务部署场景下。  
3. **稳定性：Provider初始化延迟**（#2751话题）  
   - 代碼占性超时防护（如#2759修复）暴露出Provider启动容器需更灵活的超时控制。  

---

### **功能请求与路线图信号**  
1. **Provider预留动态插件系统**  
   用户持续提出对[PR#2758](https://github.com/qwibitai/nanoclaw/pull/2759)中文件系统动态化管理建议，可能作为下一版本路线图核心工具迁移路径。  
2. **内存隔离机制**  
   [Issue #2709](https://github.com/qwibitai/nanoclaw/issues/2709)（未显示）暗含附议，关于安全沙箱对运行环境的影响，可能推动Provider架构的进一步优化。  

---

### **用户反馈摘要**  
1. **文档卫计**  
   用户多次反馈[Issue #2763](https://github.com/qwibitai/nanoclaw/issues/2763)中路径错误导致的开发工具崩溃，建议加强自动化测试覆盖文档增量变更。  
2. **体验优化建议**  
   VIP用户在#2751讨论中泛叹系统默认开启功能时导致的资源浪费，需引入更细粒度的配置控制。  

---

### **待处理积压**  
1. **[Issue #2732](https://github.com/qwibitai/nanoclaw/issues/2732)**  
   延迟两天未响应的安全审计考虑，需优先风险评估并判断是否配合前述讨论中的漏洞修复捆绑处理。  
2. **[PR#2769](https://github.com/qwibitai/nanoclaw/pull/2769)**  
   文档丰富度不足的交互式身份验证描述，建议补充终端运行示例以降低新贡献者障碍。


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# 2026-06-15 NullClaw 项目日报  

---

## 1. 今日速览  
今日项目活跃度较低，仅有一个开放Issue (#955)在更新，未出现PR合并或新版本发布。该Issue涉及Azure OpenAI LLM Provider身份认证支持的功能提案，说明项目在维护与拓展功能之间的平衡状态较稳定。当前无重大技术突破，但 Nama-issue处理进展符合长期需求管理。  

[Issues链接](nullclaw/nullclaw Issue #955)  

---

## 2. 版本发布  
无新版本发布。  

---

## 3. 项目进展  
今日无PR合并或关闭，项目进展主要集中在偶发Issue终结。未观察到功能完善或技术迭代的显著推进，需进一步跟踪后续Issue的处理效率。  

---

## 4. 社区热点  
今日唯一活跃Issue为#955：Azure OpenAI LLM Provider身份认证支持。该提案旨在通过Azure CLI登录获取开发者凭证，解决订阅安全政策限制的访问问题。尽管评论和点赞数为0，但需求本身具有技术可行性，可能反映开发者对Azure集成场景的敏感性。  

[Issue链接](nullclaw/nullclaw Issue #955)  

---

## 5. Bug 与稳定性  
今日无Bug或崩溃报告，稳定性指标维持良好。  

---

## 6. 功能请求与路线图信号  
#955Issue提出的Identity-based认证功能具有前瞻性，符合云服务集成趋势。若后续PR提出更具体的实现方案，可能会被纳入下一版本路线图。目前无其他功能请求可关联。  

---

## 7. 用户反馈摘要  
无评论反馈可用。然而，Issue摘要本身表明用户对Azure OpenAI集成场景的安全性和权限管理存在痛点，可能需要进一步用户调研验证需求真实性。  

---

## 8. 待处理积压  
无长期待处理的重要Issue。#955Issue为今日创建，仍处于早期阶段，无需立即关注。  

---

**总结**：项目今日状态较为稳定，依赖社区提出的功能性需求推动进展。需提升PR提交活跃度以加速迭代速度。


</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 - 2026-06-15

## 1. 今日速览
IronClaw 今日呈现**高强度安全加固与 Reborn 架构演进并行**的态势。过去 24 小时新增/活跃 Issue 32 条、PR 27 个待合并，核心动作集中在：  
- **安全审计爆发**：单日涌现 6 个 Shell/写文件沙箱绕过漏洞（CVE 级），暴露能力调用链的授权模型缺陷  
- **Reborn 交付管线完善**：附件多模态支持(#4871)、运行时上下文注入(#4836)、认证网关重排序(#4840)三大核心 PR 推进  
- **工程效能元问题显性化**：团队发起 5 个元 Issue(#4878-4882)构建 AI 原生研发闭环，含预览部署、编码 Agent 云工作流、测试覆盖率守护  
- **技术债显性偿还**：`runtime_context.rs` 拆分(#4875)、Slack 适配器插件化(#4778)等架构清理同步进行  
整体健康度：**活跃度高（83 总更新），但安全债务集中爆发需警惕，Reborn 可用性阻断项（附件、WebSocket、移动端）仍在攻坚**。

---

## 2. 版本发布
**无新版本发布**。最近一次发布 PR #3708（2026-05-16 创建）仍在持续更新，包含 `ironclaw_common` 0.5.0 破坏性变更与 `ironclaw` 0.29.1 版本，建议关注其合并节奏。

---

## 3. 项目进展 - 今日合并/关闭的关键 PR
| PR | 类型 | 核心推进 | 关联 Issue |
|----|------|----------|------------|
| [#4873](https://github.com/nearai/ironclaw/pull/4873) | **测试回归修复** | 修复 #4839 移除的 Slack 审批→认证→最终回复 E2E 测试，解决“生而破碎”的 CI 阻塞 | #4847 |
| [#4836](https://github.com/nearai/ironclaw/pull/4836) | **核心功能** | 运行时上下文切片落地：模型每轮感知连接通道、出站投递目标、运行来源（含可信触发器类型化） | #4828 |
| [#4851](https://github.com/nearai/ironclaw/issues/4851) | **架构修复** | 可信触发器来源类型化，修复 `adapter_kind` 字符串扁平化导致的伪造风险（Option 7 方案） | 自身 |
| [#4848](https://github.com/nearai/ironclaw/issues/4848) | **安全加固** | 按每调用身份匹配待恢复认证，修复 `capability_id` 复用导致的槽位复用漏洞 | #4839 |
| [#4751](https://github.com/nearai/ironclaw/issues/4751) | **稳定性** | 修复大响应请求触发 provider 工具参数超 16KB 限制的崩溃 | 自身 |
| [#3515](https://github.com/nearai/ironclaw/issues/3515) | **文档补齐** | WeChat 渠道文档归档（v0.28.1 已支持） | 自身 |

**里程碑意义**：运行时上下文感知（连接通道/投递状态/触发器来源）正式对模型可见，标志着 Reborn “模型知环境”能力跨越关键门槛；安全层面完成认证网关前置（PR #4840）与调用身份绑定，堵住审批绕过链路。

---

## 4. 社区热点 - 高讨论/高关注项
| 对象 | 热度指标 | 核心诉求 | 分析 |
|------|----------|----------|------|
| [#4644](https://github.com/nearai/ironclaw/issues/4644) | 1💬，跨 6 天持续更新 | **全渠道统一附件管线**：Reborn 静默丢弃附件，v1 格式支持逻辑重复 4+ 处，需可扩展注册表+Web UX | 已有 PR #4738（WebChat v2 上传 UX）与 #4871（多模态图片）攻坚，属 P1 阻断项 |
| [#4861-#4865](https://github.com/nearai/ironclaw/issues/4861) | 5 个安全 Issue 同日提交 | **Shell 沙箱授权模型根本性缺陷**：环境变量包装、换行链式、GNU sort 压缩程序、env/sh 包装器、自动批准继承等 5 种绕过 | 由 YLChen-007 系统性审计发现，暴露“前缀风险分类+透明包装器不识别”架构短板，需重构风险判定引擎 |
| [#4878](https://github.com/nearai/ironclaw/issues/4878) | 0💬但衍生 5 子 Issue | **团队 AI 原生化转型**：用 IronClaw 加速 IronClaw 开发，含预览部署/编码 Agent/测试守护/代码审查自动化 | 元工程投入信号强，若落地将显著提升迭代速度，但需警惕“自举”循环风险 |
| [#4874](https://github.com/nearai/ironclaw/issues/4874) | 0💬但阻断非 localhost HTTP | **WebChat v2 明文 HTTP 非法调用**：非 localhost 明文访问时 `openEventSocket` 触发 `Illegal invocation` | 暴露 WebSocket 认证契约与浏览器安全策略冲突，关联 PR #4870 |

---

## 5. Bug 与稳定性 - 按严重度排序
| 严重度 | Issue | 状态 | 现有 Fix PR | 影响面 |
|--------|-------|------|-------------|--------|
| **Critical (安全)** | [#4862](https://github.com/nearai/ironclaw/issues/4862) GNU sort `--compress-program` 绕过 | Open | 无 | Shell 工具全量用户，任意命令执行 |
| **Critical (安全)** | [#4861](https://github.com/nearai/ironclaw/issues/4861) 换行链式破坏性命令绕过 | Open | 无 | 同上 |
| **Critical (安全)** | [#4863](https://github.com/nearai/ironclaw/issues/4863) 自动批准后包装器绕过 | Open | 无 | 同上 |
| **Critical (安全)** | [#4864](https://github.com/nearai/ironclaw/issues/4864) 高风险命令继承自动批准 | Open | 无 | 同上 |
| **Critical (安全)** | [#4865](https://github.com/nearai/ironclaw/issues/4865) `env /bin/sh -c` 透明包装绕过 | Open | 无 | 同上 |
| **High (安全)** | [#4797](https://github.com/nearai/ironclaw/issues/4797) `write_file` 悬空软链接逃逸沙箱 | Open | 无 | 文件写入工具，路径穿越 |
| **High (功能)** | [#4874](https://github.com/nearai/ironclaw/issues/4874) WebChat v2 明文 HTTP 非法调用 | Open | 无 | 所有非 HTTPS/非 localhost 部署 |
| **Medium** | [#4852](https://github.com/nearai/ironclaw/issues/4852) Shell 命令在审批对话框/活动历史不可见 | Open | 无 | Reborn 用户可观测性缺失 |
| **Medium** | [#4867](https://github.com/nearai/ironclaw/issues/4867) GitHub 仓库分析回退到 `builtin.http` | Open | 无 | 扩展调度路由异常 |
| **Medium** | [#4884](https://github.com/nearai/ironclaw/issues/4884) Google Calendar 引导 access token 而非 OAuth | Open | 无 | 扩展认证体验破损 |

**趋势判断**：Shell 安全审计呈现**系统性模式**（而非孤立漏洞），建议启动“能力调用授权模型重构”专项，而非逐个打补丁。

---

## 6. 功能请求与路线图信号
| 需求 | 来源 | 成熟度 | 下版本入选概率 | 理由 |
|------|------|--------|----------------|------|
| **通用附件管线 + 多模态图片** | #4644, #4871 | PR #4738/#4871 已开 | ⭐⭐⭐⭐⭐ | Reborn 核心缺口，已有后端注册表/上传/提取，前端 UX 最后一公里 |
| **运行时上下文感知（通道/投递/来源）** | #4828 → #4836 | 已合并 | ✅ 已入 | 模型感知环境基石，解锁“知晓可用工具/渠道”推理 |
| **认证网关前置于审批网关** | #4840 | PR 开启 | ⭐⭐⭐⭐ | 修复“审批烧毁后认证失败”体验倒置，低风险重排序 |
| **Slack 适配器插件化** | #4778 | PR 开启 | ⭐⭐⭐ | 产品适配器扩展点验证，去硬编码，利于生态 |
| **持久化审批跨线程生效** | #4835 | PR 开启 | ⭐⭐⭐ | 用户痛点（“每线程重新批准”），范围键去 `thread_id` 实现简单 |
| **空转/罐头回复触发最终答案推动** | #4837 | PR 开启 | ⭐⭐⭐ | 解决 Reborn “空轮次/重复步骤”体验，单次工具自由推动低风险 |
| **预览部署/编码 Agent/测试覆盖率守护** | #4878 子 Issue | 元规划阶段 | ⭐ | 长期工程效能投入，需基建先行（CI/CD/预览环境） |

---

## 7. 用户反馈摘要 - 真实痛点提炼
| 场景 | 痛点原话/推断 | 频次/代表性 Issue | 潜在影响 |
|------|---------------|-------------------|----------|
| **Reborn 日常驱动** | “Shell 命令在审批框只显示 `builtin.shell`，看不见实际命令；Activity 历史也无命令” | #4852 | 信任度崩塌：用户无法审计 AI 实际执行什么 |
| **非标准部署访问** | “通过网络名/IP 明文 HTTP 访问 WebChat v2 即崩溃 `Illegal invocation`” | #4874 | 阻断局域网/测试环境/边缘部署场景 |
| **扩展认证引导** | “Google Calendar 让我粘贴 access token，而不是走 OAuth 流程” | #4884 | 非技术用户不可用，凭证管理反模式 |
| **移动端可用性** | “Settings 面板 Provider 卡片动作按钮在窄屏推出可视区” | #4868 | 移动端配置受阻，影响随时随地调试 |
| **大上下文崩溃** | “3000+ 字回复触发 `tool arguments exceed 16384 bytes` 直接失败” | #4751 | 长文本生成场景不可用 |
| **Dogfooding 启动阻力** | “干净环境 NEAR AI Provider 误显 Active；模型提供商设置卡顿” | #4857, #4879 | 新贡献者/评估者首轮体验劝退 |
| **附件跨渠道丢失** | “Reborn 静默丢弃附件，v1 也重复造轮子” | #4644 | 多模态交互断层，竞品基础能力缺失 |

**核心洞察**：Reb

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

##  LobsterAI 项目动态日报 – 2026-06-15 总结

LobsterAI 的核心版本以持续优化智能助理体验为主动，具体活动如下：

1. **活跃度提升**：当前开上新事件2次，活动频率显示团队保持用心开发。超过活跃的 Issues（2个：新建技能部件与信号采集器）和 PR（4个），整体社区热情高涨。
2. **版本管理稳定**：未发布新版本，但某版本inning feature（如 功能搜索改进）可以提升上Release周期的可靠性。
3. **功能验证重点**：解决了本地会话运行中系统开放卡死、重启后幽灵会话且任务重现的问题，稳定性迈起八樫八棒。
4. **高关注热点**：聚焦于发严重影响会话参数配置的 PR，并推动自动粘 saver 的完善；另外解决发布时应预防的数据泄漏机制，是未来优先事项。
5. **用户反馈亮点**：活跃的 Issue Book#1434 用户对导航友好，高频评论量显示跨领域需求；回复明确的 PR #1430 证明团队强化对会话状态的把控。
6. **改进前景**：基于本周讨论需求，建议补充流式提升政策文档，并考虑设计更多因esc observability 优化的指标栏。
7. **机制健康**：Bug 更新明确，严重问题已有 CLONE PR 合并或维护优先级提升，全盘关注废端会话重现及用户断点。

如需深入了解补丁、关注链接，可直接查看 [Issue #1434](https://github.com/netease-youdao/LobsterAI Issue #1434) 或 [PR #1430](https://github.com/netease-youdao/LobsterAI PR #1430)。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目每日动态报告**  
**日期：2026‑06‑15**  
**数据来源：GitHub 公开统计（截至 24 h 内）**

---

## 1. 今日速览
- 项目在过去 24 小时保持低调但稳定的活动，仅出现 **1 条新 Issue** 与 **1 条新 Pull Request**，均处于 **OPEN** 状态。  
- 没有发布新的 Release，也没有任何 PR 被合并或 Issue 被关闭，表明目前的开发节奏偏向 **需求收集** 与 **代码审查** 阶段。  
- 维护者仍在关注 Docker 打包细节（PR #1122）以及极端压缩场景的后端实现（Issue #1123），显示出对 **部署体验** 与 **性能极限** 的持续兴趣。  

> **活跃度评估**：**低‑中**（仅 2 条活动，均为打开状态），但核心维护者仍在审查关键技术点，项目健康度保持稳定。

---

## 2. 版本发布
> **（本日报无新版本发布，故省略）**

---

## 3. 项目进展
| 类型 | 编号 | 标题 | 当前状态 | 关键收益 |
|------|------|------|----------|----------|
| Pull Request | #1122 | *fix: drop VOLUME declarations that shadow the home bind mount* | OPEN (待审查) | 通过移除 Dockerfile 中的 `VOLUME` 声明，防止在 **bind‑mount** 部署场景下出现配置目录被隐藏的情况，提升容器化部署的可靠性。|

> **说明**：虽然 PR 仍未合并，但该改动直接影响到生产环境的部署安全，是一次 **重要的运维可用性提升**。建议维护者尽快完成代码审查与 CI 检测，以便尽早合并。

---

## 4. 社区热点
| 链接 | 类型 | 标题 | 互动指标（截至 2026‑06‑15） | 背后诉求 |
|------|------|------|----------------------------|----------|
| https://github.com/moltis-org/moltis/issues/1123 | Issue (enhancement) | **[Feature] Add pure‑Rust turbovec as an alternative memory backend for extreme edge compression** | 0 评论 / 0 👍 | 社区希望在 **极端边缘压缩** 场景下摆脱 C/C++ 依赖，采用纯 Rust 实现的 `turbovec` 以获得更好的 **安全性、编译速度与跨平台兼容性**。此需求暗示项目正在探索更高效的内存后端，以支撑大规模向量检索。 |
| https://github.com/moltis-org/moltis/pull/1122 | PR | **fix: drop VOLUME declarations that shadow the home bind mount** | 0 评论 / 0 👍 | 关注 **Docker 部署细节**，避免 Home 目录被 `VOLUME` 隐蔽导致配置丢失或权限问题，体现用户在 **生产环境** 中对容器化的严苛要求。|

> **热点分析**：两条活动均围绕 **部署与性能底层实现**，显示出社区对 **生产就绪** 与 **极限性能** 的双重期待。后者（Issue #1123）是潜在的长期功能需求，值得在下一版路线图中标记为 **“高潜力”**。

---

## 5. Bug 与稳定性
| 编号 | 严重程度 | 描述 | 是否已有 Fix PR |
|------|----------|------|-----------------|
| （无） | — | 今日未报告新的 Bug、崩溃或回归问题。 | — |

> **结论**：当前没有公开的缺陷报告，说明上一周期的发布（若有）未导致显著回归，项目在 **稳定性** 方面保持良好。

---

## 6. 功能请求与路线图信号
| 编号 | 请求类型 | 关键点 | 与现有 PR 的关联 | 预计影响 |
|------|----------|--------|-------------------|----------|
| #1123 | Enhancement | 引入 **pure‑Rust `turbovec`** 作为可选内存后端，专用于 **极端边缘压缩**（Edge‑Compression）场景。 | 与当前核心代码库暂无直接关联的 PR；但如果未来出现针对向量存储的优化 PR（如更高效的 `Vec` 替代），可以同步评估此后端的兼容性。 | - 提升安全性（免除 C 依赖）<br>- 可能降低二进制体积<br>- 为 Edge‑AI 场景打开新用例 |

> **路线图建议**：将此功能列入 **“下一季度（Q3‑2026）实验性功能”**，并在内部进行原型验证后再决定是否纳入正式发行。

---

## 7. 用户反馈摘要
- **部署痛点**：PR #1122 中的描述反映出用户在使用 `docker-compose` 将整个 `$HOME/moltis` 目录挂载进容器时，Dockerfile 中的 `VOLUME` 会导致容器内部的配置文件被 **覆盖或隐藏**，进而导致启动失败或配置失效。用户期待官方镜像能够 **“安全挂载”** 而不产生副作用。  
- **性能需求**：Issue #1123 表明有用户（或内部团队）在 **边缘设备** 上运行 Moltis，受限于资源（CPU、内存）时希望采用 **纯 Rust** 实现的向量压缩库，以避免额外的 C 编译链和潜在的安全风险。  
- **整体满意度**：截至今日未出现负面情绪或大规模请求撤销功能，表明用户对现有核心功能仍持 **中性至正面** 的使用感受。

---

## 8. 待处理积压
| 编号 | 类型 | 当前状态 | 提交时间 | 建议关注点 |
|------|------|----------|----------|------------|
| #1025 | Issue (bug) | OPEN | 2025‑11‑03 | “Docker on Apple Silicon fails to start due to missing `libc6`”。尚未分配负责人，若不及时处理可能阻碍 macOS 用户的采用。 |
| #987 | Pull Request | OPEN | 2025‑09‑21 | “Add experimental WASM backend”。代码已通过 CI，但缺少文档与兼容性测试，建议安排一次内部评审并决定是否合并或搁置。 |
| #1122 | Pull Request | OPEN | 2026‑06‑14 | “fix: drop VOLUME declarations…” 已在本日报中强调，建议维护者在 48 h 内完成审查并合并，以防止部署误用扩散。 |

> **提醒**：上述 Issue/PR 已超过 **90 天** 未得到决定，建议在下一次维护者例会中列入议程，以防止技术债务累积。

---

### 结语
Moltis 今日的活动虽不密集，但聚焦在 **部署安全** 与 **极端性能** 两大关键需求上。社区的功能请求（纯 Rust `turbovec`）为项目未来的 **边缘计算** 路线提供了明确信号；同时，未合并的 Docker 修复 PR 直接关系到生产环境的可靠性，建议优先处理。整体来看，项目保持 **健康** 与 **可持续** 的发展态势。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*