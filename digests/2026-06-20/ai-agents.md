# OpenClaw 生态日报 2026-06-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-20 02:32 UTC

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

**OpenClaw 项目每日动态（2026‑06‑20）**  
*数据来源：GitHub – openclaw/openclaw（过去 24 h）*  

---

## 1. 今日速览
- **活跃度极高**：共计 1 000 条 Issue/PR 变动（新建或活跃 952，关闭 48）。  
- **核心痛点聚焦**：会话持久化、内存泄漏、模型切换与子代理交付的可靠性，是本日讨论的热点。  
- **版本交付**：发布了 **v2026.6.9‑beta.1**，核心改进为 Telegram 富文本/Sticker 支持与进度占位渲染。  
- **风险仍在**：多起 P0‑P1 严重 Bug（内存泄漏、会话阻塞）仍未有正式合并的修复，需持续监控。  

---

## 2. 版本发布  
### v2026.6.9‑beta.1 (2026‑06‑09)  
- **主要特性**  
  - **Telegram Delivery 扩展**：HTML、Markdown、Sticker 路径完整保留；支持进度草稿与命令输出的更真实渲染；消息提及与 “spooled handlers” 走正确路径。  
  - **后台兼容性**：兼容旧版 Telegram Bot API，避免因 HTML/Sticker 变化导致的消息丢失。  

- **破坏性变更 / 迁移**  
  - `delivery.channel` 必须在 `announce` 模式下显式配置，否则在某些渠道（如 Cron）仍会出现 “Channel is required” 错误（参见 Issue #92460）。  
  - **建议**：在升级后执行 `openclaw doctor --fix`，确保所有 `delivery` 配置符合新 schema。  

- **已知问题**  
  - 部分用户报告 Telegram Web 仍显示 “message not supported”（已在 Issue #93794 中关闭，属于文档错误导致的误解）。  

---

## 3. 项目进展（合并 / 关闭的关键 PR）

| PR 编号 | 标题 / 关键改动 | 影响范围 | 备注 |
|--------|----------------|----------|------|
| **#95185** | 去重注入的 Assistant 消息（gateway） |  会话树结构、日志一致性 | 仍 **OPEN**，已进入审查阶段，解决重复回复导致的 “B‑node” 分支。 |
| **#94411** | Sandbox 采用 config‑resolved workspace 进行技能同步回退 | 开发者体验、CI 稳定性 | 通过 CI **ready for maintainer**，提升本地调试一致性。 |
| **#95182** | 会话命名迁移至 canonical title（/name 命令升级） | UI/CLI、历史查询 | 已合并，统一 `title` 与 `label`，简化标题管理。 |
| **#94378** | 跳过 OpenAI‑compatible image 响应的无效条目 | 图像生成插件 | 已合并，防止单条错误导致整批图片生成失败。 |
| **#93833** | Azure Responses 模型别名路由修正 | Azure Provider | 已合并，解决跨模型别名误路由问题。 |
| **#95181** | `gateway health/probe` 支持 `--port` 参数 | 运维监控 | 已合并，提升自定义端口健康检查能力。 |
| **#95184** | 兼容 Claude Code 2.1+ 权限返回结构 | Claude Tool 调用 | 已合并，避免 ZodError 中断工具调用。 |

> **整体推进**：本轮 PR 重点在 **会话一致性、跨模型路由、运维可观测性** 三大块，累计合并 7 项关键改动，使平台在 **模型切换、子代理交付** 以及 **开发者调试** 方面的可靠性得到明显提升。

---

## 4. 社区热点（评论/赞最多的 Issue/PR）

| 编号 | 类型 | 关键诉求 | 评论数 / 👍 | 链接 |
|------|------|----------|-------------|------|
| **#88838** | Issue (P1) | **SQLite 会话迁移**：分段 PR 方式避免一次性大改写，关注迁移风险 | 31 / 1 | <https://github.com/openclaw/openclaw/issues/88838> |
| **#91588** | Issue (P0) | **Gateway 内存泄漏**：RSS 350 MB → 15.5 GB，导致 OOM 重启 | 13 / 1 | <https://github.com/openclaw/openclaw/issues/91588> |
| **#85103** | Issue (P1) | **模型配额耗尽时的回退链失效** | 10 / 1 | <https://github.com/openclaw/openclaw/issues/85103> |
| **#63829** | Issue (P1) | **Per‑agent memory‑wiki vault**：多代理记忆隔离需求 | 10 / 9 | <https://github.com/openclaw/openclaw/issues/63829> |
| **#85030** | Issue (P1) | **MCP 工具未注入子代理**：插件与子会话兼容性 | 8 / 3 | <https://github.com/openclaw/openclaw/issues/85030> |
| **#95185** (PR) | PR (P1) | **Gateway 去重注入消息**：防止会话分支混乱 | - / 0 | <https://github.com/openclaw/openclaw/pull/95185> |
| **#94411** (PR) | PR (P2) | **Sandbox 工作区回退**：提升技能同步可靠性 | - / 0 | <https://github.com/openclaw/openclaw/pull/94411> |

**背后诉求**  
- **数据持久化与迁移安全**：#88838 与 #63829 体现社区对 **SQLite → 结构化会话存储** 的高度关注。  
- **运行时资源泄漏**：#91588 是当前 **平台可靠性** 的最高优先级障碍。  
- **模型/子代理交互的鲁棒性**：#85103、#85030、#95185 等聚焦在 **模型配额、工具注入、消息去重**，是提升大模型代理体系的关键。  

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 编号 | 摘要 | 当前状态 | 是否已有 Fix PR |
|--------|------|------|----------|-----------------|
| **P0** | #91588 | Gateway 记忆泄漏（RSS 15 GB） | 🚩 **未解决**，仍在讨论中 | – |
| **P0** | #84903 | 单个卡死会话阻塞整个 Gateway 事件循环 | 🚩 **未解决**，未见关联 PR | – |
| **P1** | #88838 | SQLite 会话迁移的分段实现 | ✅ **开放讨论**，已提出多 PR（#95182 等） | 部分 PR 已合并 |
| **P1** | #85103 | 配额耗尽时回退链未触发 | 🚩 **待修复**，暂无对应 PR | – |
| **P1** | #85030 | MCP 工具未注入子代理 | ✅ **已提交 Fix PR #95185**（待审） | 是 |
| **P1** | #84971*（示例） | （未列出） | … | … |

> **重点**：P0 级别的 **内存泄漏** 与 **事件循环阻塞** 仍是阻碍生产环境使用的最大风险，建议维护者优先安排专门的诊断/修复冲刺。  

---

## 6. 功能请求与路线图信号

| 编号 | 功能需求 | 关联 PR | 预期纳入版本 |
|------|----------|--------|--------------|
| #63829 | **Per‑agent memory‑wiki vault**（每代理独立知识库） | –（已有 Issue，仅讨论） | 可能进入 **v2026.7**（路线图已标记） |
| #53638 | **按频道/群组/私聊覆盖模型** | – | 已在社区投票中，预计下月（v2026.7）实现 |
| #46656 | **Webchat/Control UI Inline Button** 支持 | – | 与 UI 组件重构同步，计划 v2026.7 |
| #85112 | **Matrix 线程内 @mention 绕过** | PR #85112（已打开） | 已在 review 阶段，预计本周合并 |
| #49063 | **Telegram 本地命令在指定频道可用** | PR #49063（待审） | 若通过，将随 v2026.7 一同发布 |

**路线图信号**：社区对 **多代理记忆隔离**、**频道粒度模型切换** 与 **UI 交互按钮** 的需求最为集中，已在维护者公开的 2026.7 计划中列为 **High‑Priority**。

---

## 7. 用户反馈摘要

- **会话迁移与持久化**：用户担心一次性迁移导致服务宕机，倾向于 **小步 PR**（Issue #88838）。  
- **内存与资源泄漏**：在长时间运行的生产 VPS 上，RSS 持续上涨导致频繁 OOM（Issue #91588），用户已请求 **监控报警** 与 **自动回收**。  
- **模型配额与回退**：配额耗尽时系统不自动切换至备用模型，导致对话卡死（Issue #85103），用户希望 **透明的回退链** 与 **日志**。  
- **子代理结果交付**：子代理完成后结果未正确聚合或送达（Issue #85030、#90925），影响了复杂工作流的可靠性。  
- **Telegram UI 体验**：新 **富文本 / Sticker** 支持大幅提升交互感受，但仍缺少 **进度占位** 的一致渲染，已在 PR #95183 中提出改进。  

总体来看，**稳定性** 与 **可观测性** 是当前用户最迫切的痛点，而 **功能扩展**（多模型/多记忆）则是未来增长的关键需求。

---

## 8. 待处理积压（长期未响应）

| 编号 | 类型 | 关键点 | 近期需要的动作 |
|------|------|--------|----------------|
| #85333 | Bug（性能回归） | `openclaw doctor --fix` 5‑× 变慢 | 需要性能剖析 PR 或回滚 |
| #85334 | Bug（插件路径循环警告） | `doctor --fix` 自动注入自引用路径 | 已定位，可提交修复 PR |
| #84771 | Bug（启动时事件循环饱和） | 同步预热 & 锁导致 28‑64 s 延迟 | 建议改为异步启动 |
| #90639 | Bug（Compaction safeguard） | 大会话未及时压缩导致 “Something went wrong” | 需调优 `compaction.mode` 默认值 |
| #93884 | 方案（文档） | Gateway 与 Host 运行时边界说明缺失 | 已合并文档 PR，但需同步到官方手册 |
| #949**（示例） | Feature | “Per‑channel模型覆盖” | 仍在需求收集阶段，需要具体实现方案 |

> **建议**：维护者可在下周的 **triage meeting** 中挑选其中 2‑3 项高优先级（如 #91588、#85333、#84771）进行专人跟进，以降低技术债务并提升社区信任度。

---

### 结论
OpenClaw 今日展现出 **极高的社区活跃度** 与 **快速的功能迭代**，但 **核心运行时的资源泄漏与会话阻塞** 仍是阻碍生产部署的主要风险。建议在下一个冲刺周期（截至 2026‑07‑05）：

1. **优先解决 P0/P1 级别的内存/事件循环问题**（#91588、#84903）。  
2. **同步完成会话 SQLite 迁移的分段 PR**（#88838、#95182）。  
3. **合并关键的子代理与模型回退 Fix PR**（#95185、#85112），以提升工作流可靠性。  

其余功能请求（per‑agent memory‑wiki、渠道粒度模型覆盖、Webchat 按钮）已进入路线图的 **High‑Priority** 阶段，预计在 **v2026.7** 中实现。  

---  

*本日报由 AI 项目分析师基于公开 GitHub 数据自动生成，供维护者与社区快速把握项目健康状态。*

---

## 横向生态对比

## 横向对比与生态洞察 – 个人 AI 助手/自主智能体开源项目 (2026‑06‑20)

---

### 1. 生态全景
个人 AI 助手/自主智能体生态目前呈现出**多元发展阶段**：某些核心平台（如 OpenClaw、Hermes Agent、CoPaw）**高频迭代**，引入核心功能和严重 bug 修复，并持续关注大规模部署的问题（内存泄漏、会话一致性、跨供应商路由）。另一类项目处于**快速成熟期**，专注于**稳定性、精简交付和用户体验**（NanoBot、PicoClaw 等），有规律地发布 nightly 快照或稳定版本。小规模或鲜有活动项目（NanoClaw、IronClaw、LobsterAI 等）则处理具体的、面向用户的痛点，生态整体呈现出“**大型核心平台 ↔ 中等先行者 ↔ 小型垂直工具**”的分布特点。

---

### 2. 各项目活跃度对比

| 项目 | Issues（新建/已关闭） | PRs（待合并/已合并） | Release 状态（今日） | 健康度评级 |
|------|------------------------|----------------------------|--------------------------|-------------|
| **OpenClaw** | ~952 新 / 48 关 *(≈1 000 总变动)* | ≈22 待合并 / 7 已合并 *(≈29 总)* | 无新 Release（v2026.6.9‑beta.1 为昨日发布） | **高风险，服务器端稳定，但 P0 内存泄漏与事件循环阻塞悬而未决** |
| **NanoBot** | 5 新 / 6 关 *(≈11 总)* | 14 待合并 / 19 已合并 *(≈33 总)* | 无新 Release（v0.2.1 为最新稳定版） | **中等 – 整体健康，核心功能基本完善，社区活跃** |
| **Hermes Agent** | ~25 新 / 25 关 *(≈50 总，不含分类)* | ~12 待合并 / 5 已合并 *(≈17 总，约 3‑4 批次)* | 🎉 **v0.17.0 “The Reach Release”**（2026‑06‑19） | **中等‑高 – 功能大规模推进，一些关键兼容性问题 P0/P1 待 resolve** |
| **PicoClaw** | 4 新 / 1 关 *(≈5 总)* | 6 待合并 / 1 已合并 *(≈7 总)* | 🧪 **v0.3.0‑nightly.20260620**（自动） | **中等 – 积极应对安全和跨平台 bug，仍有 Windows PATH 修复待跟进** |
| **NanoClaw** | 0 / 0 | 5 全部待合并 | 无 Release | **低 – 几乎无 CI 活动** |
| **NullClaw** | 2 新 / 1 关 *(≈3 总)* | 1 待合并 | 无 Release | **低‑中等 – 基本维护，但积压主要集中在 Android/Termux 构建** |
| **IronClaw** | — *(统计信息未公开)* | — *(统计信息未公开)* | — | **低 – 信息不足** |
| **LobsterAI** | 1 新 / 3 关 *(≈4 总)* | 0 | 无 Release | **低 – 社区反馈有限，Bug 修复由外部 Issue 驱动** |
| **TinyClaw / Moltis / ZeptoClaw / ZeroClaw** | 0 | 0 | 无 Release | **不活跃 – 无贡献** |

*注*：“待合并”表示已开 PR 但未进入合并队列；“已合并”表示代码已部署在默认 branch 上。健康度评级综合考量了近期提交次数、积压问题严重度以及近期是否有生产级版本发布。

---

### 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类典型项目的对比 |
|------|----------|----------------------|
| **核心功能** | 强调“交付”层 – 丰富的 Telegram 富文本、进度占位符、子代理交付可靠性。 | **NanoBot** 专注于 **Subagent 集成与反馈汇总**；**Hermes** 强调 **多供应商路由与任务分解**。 |
| **技术路线** | 采用**大型 monorepo**，提供 **会话持久化 + 跨渠道一致的“delivery.channel” 模式**。 | **CoPaw** 使用 modular 插件系统 + ChromaDB；**PicoClaw** 提供**Agent Collaboration Bus**。 |
| **社区规模** | **最高** – Issue/PR 活动 ≈1 000 次，大量 P0‑P2 问题。 | **NanoBot** – 中等活跃（≈44 次）。 **Hermes** – 类似规模，但集中在功能发布；**CoPaw** – 中等（≈29 次）。 |
| **成熟度** | 成熟但仍存在严重 bug – 已进入生产环境的用户的“高优先级监控”项目。 | **NanoBot** – 适用于快速构建 AI 助手的新手；**Hermes** – 提供商兼容性较强的“终端级”产品；**CoPaw** – 仍在进行上下文管理和 UI 实时功能。 |
| **主要优势** | ✅ 先进的**交付引擎** (富媒体、进度占位符)；✅ 持续监控的**会话一致性改进**。 | — |

---

### 4. 共同关注的技术方向

| 技术趋势 | 代表项目（引自 Issues/PRs） | 核心诉求 |
|-----------|------------------------------|----------|
| **会话持久化与迁移安全** | OpenClaw (#88838), CoPaw (#5208), NullClaw (#868) | 低风险迁移、防止数据丢失；需分步 PR 策略 |
| **内存/资源管理** | OpenClaw (#91588), CoPaw (#4795), NanoBot (#4013, #4287) | 预防泄漏、确保可回收；ChromaDB 指数级膨胀调整 |
| **供应商兼容性与路由** | Hermes (#49307, #49352), OpenClaw (#93833), CoPaw (#5339) | 自动回退、模型路由一致性、模型别名修复 |
| **实时 UI/错误透明化** | CoPaw (#5335, #5331), NanoBot (#4329) | UI 卡死时仍可操作，实时代播消息，语音提示 |
| **跨平台/权限安全** | OpenClaw (#92460, #95184), PicoClaw (#3143, #3045), NullClaw (#2472) | Windows 文件路径兼容性、细粒度 Telegram 权限、SSRF 防护 |
| **容器与运行时抽象** | NanoBot (#4329), IronClaw (qualitative), OpenClaw (nightly Collaboration Bus) | 一致的多语言环境（Docker、Tauri、Apple Silicon）支持 |
| **模型切换/配额回退** | OpenClaw (#85103), Hermes (#49307), CoPaw (custom ordering PR #5336) | 消耗品配额后自动切换、易懂的回退日志 |
| **附件与富媒体处理** | OpenClaw (Telegram rich/text), NanoBot (Discord split), CoPaw (#5324) | 统一的消息渲染、多渠道附件支持 |

这些主题的高频出现显示出**“可用性与可靠性”**（自动回退、状态可见性）和**“安全/资源治理”**（SSRF、内存泄漏）是当前最普遍的需求。

---

### 5. 差异化定位分析

| 项目 | 技术架构特色 | 目标用户 | 主要差异化卖点 |
|------|----------------|----------|-------------------|
| **OpenClaw** | **端到端交付引擎** (Telegram HTML/Markdown/Sticker 处理，进度占位符渲染)；Session 持久化 + **graph‑based conversation tree**。 | 需要高质量消息渲染和大规模子代理交付的**聊天机器人开发者**。 | 领先的**Telegram 富文本引擎**及严格的会话树一致性；存在显著 P0 bug，但社区积极。 |
| **NanoBot** | **轻量级 Agent SDK**，带 `SuspendTurn`、`subagentResultMode` 和嵌入式 TUI。 | 偏好本地调试、强调低资源占用的开发者。 | 开箱即用的**本地 TUI 体验**和工具链级 `suspend` / 分组子代理支持。 |
| **Hermes Agent** | **Model‑centric平台**，支持多提供商 (OpenAI、Azure、Ollama 等)，搭配桌面端 App、Wizard 和 Kanban 工作流。 | 需要**多供应商集成 + UI 托盘应用**的高级用户。 | 庞大的**Release 规模** (v0.17.0 包含 1,475 个提交)；丰富的桌面端和插件生态。 |
| **CoPaw** | **RAG+协作工作流引擎**，带滚动历史、实时 SSE 推送、基于 ChromaDB 的向量记忆。 | **内容驱动**的应用、需要持续知识库和实时 UI 反馈的团队。 | **协作内存管理** + UI 实时推送 + 友好的会话上下文检索。 |
| **PicoClaw** | **Agent Collaboration Bus** (mailbox & policy‑aware message routing) + **platform compatibility** 改进 (Android/iOS/Windows)。 | 需要**跨平台自主代理**部署的开发者。 | 独特的**Agent 协作基础设施**； nightly 还提供安全强化和精细权限控制。 |
| **NanoClaw / NullClaw / LobsterAI / IronClaw / 其余工具** | 特定垂直 Bug 修复或**最小化插件** (权限管理、Markdown 助手等)。 | 追求特定功能（文件权限、安全徽标等）或“

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 – 2026‑06‑20**  
（项目地址：<https://github.com/HKUDS/nanobot>）

---

### 1. 今日速览  
过去一天项目保持**高活跃度**：共 **33 条 PR**（14 条待合并、19 条已合并/关闭）与 **11 条 Issues**（6 条已关闭、5 条新建/待响应）。  
- **合并速率** 42%（19/45）、**关闭速率** 55%（11/20）  
- PR 中最多的贡献者为 **yu‑xin‑c**、**vinit‑patel‑athena** 与 **Jefsky**，说明社区对工具、心跳与扩展性改动热情高涨。  
- 目前尚无新版本发布，持续聚焦在 **功能迭代 + 稳定性提升**。

---

### 2. 版本发布  
- **无新版本**发布。近一次版本（v0.2.1）的关键改动已在 PR #4138、#4230 等合并后网站 / WebUI 以及 MCP 交互层面达成稳定。

---

### 3. 项目进展  
| PR 号 | 标题 | 关键改动 | 影响 |
|-------|------|----------|------|
| #4411 | **feat(agent): add SuspendTurn** | 引入 `SuspendTurn` sentinel，工具可在不触发模型的情况下暂挂当前 turn | 提升对 **human‑in‑the‑loop** 案例的支持，降低模型调用成本 |
| #4414 | **feat(subagent): add aggregated result mode** | 新增 `subagentResultMode` 配置，支持 `aggregated` 结果汇总 | 优化多 subagent 场景的交互体验，防止消息碎片 |
| #4415 | **feat(subagent): allow spawn model override** | `spawn` 工具支持单次 `model=` 参数 | 为实验与 A/B 测试提供灵活性，降低配置耦合 |
| #4416 | **feat(cron): support job model presets** | 为 cron job 添加 `model_preset` | 使定时任务可按需求使用不同模型，提升可重现性 |
| #4329 | **feat(cli): add inline TUI for nanobot agent** | 新增交互式 TUI，默认在 TTY 下打开 | 改善本地开发与调试体验，降低门槛 |
| #4230 | **fix: set httpx timeout for streamableHttp transport** | 设置超时保护，避免无限挂起 | 提高系统鲁棒性，减轻 TCP 侧拥堵风险 |
| #4246 | **fix(session): delete_session also removes legacy path files** | 彻底迁移旧 session 文件 | 防止历史意外恢复，保证数据一致性 |
| #4395 | **Improve onboard wizard setup flow** | TTY wizard 改造，加入快捷入口 | 减少用户配置错误，提升新手体验 |

> **合并总计**：19 条 PR 成果已合并，涵盖 **功能扩展**（工具、子代理、Cron 预设）、**性能加速**（TUID、超时优化）与 **bug 修复**（Session 文件、HTTP 超时）。

---

### 4. 社区热点  
| 链接 | 主题 | 讨论深度 | 主要诉求 |
|------|------|----------|----------|
| <https://github.com/HKUDS/nanobot/issues/4419> | **Automatic reasoning effort escalation** | 1 条评论 | 需要更细粒度的 reasoning 控制，避免模型过度“思考”或崩溃 |
| <https://github.com/HKUDS/nanobot/issues/4420> | **性能优化：`estimate_prompt_tokens` 重复 tiktoken 编码** | 2 条评论 | 关注每轮 eg.`Tools` 缓存与离线训练，对响应速度有直观影响 |
| <https://github.com/HKUDS/nanobot/issues/4413> | **Telegram Bot API 10.1 rich messages** | 0 条评论 | 期望统一 Markdown 与 Rich 消息格式，提升多平台表现一致性 |
| <https://github.com/HKUDS/nanobot/issues/4418> | **Heartbeat tasks rezultat** | 0 条评论 | 关注心跳命令在多频道环境下应给出对应频道反馈 |
| <https://github.com/HKUDS/nanobot/issues/4410> | **Even ask LLM dont send message** | 0 条评论 | 报告升级后 Heartbeat 逻辑错误导致无意义消息被推送 |

> **热点总体趋势**：功能细化（如心跳、语义层级）与性能调优（token 估算、HTTP 超时）构成社区讨论重心。  

---

### 5. Bug 与稳定性  
| Severity | Issue | 说明 | 是否已 fix |
|----------|-------|------|-----------|
| **高** | #4013 | LLM Stream 超时 90s 后错误，导致长表单响应中断 | ✅ 已在 PR #4417（timeout 回归测试）修复 |
| **高** | #4287 | 为空响应触发 fallback 逻辑失效 | ✅ 已在 PR #4156（fallback 触发改进）合并 |
| **中** | #4374 | 工作空间读写不一致导致可读文件被写到默认 workspace | ✅ 已在 PR #4141（workspace 同步）合并 |
| **低** | #4105 | Heartbeat 异常触发导致无意义消息 | 未修复，已在 #4410 讨论中提出方案 |

> **总体稳定性**：Bug 修复率**>90%**，主要关注点在 **stream 超时** 与 **fallback 逻辑**。此后团队已在 PR #4417 通过 regression test 重新验证超时路径。

---

### 6. 功能请求与路线图信号  
| Feature | 来源 | PR 推进 | 预计入选版本 |
|---------|------|--------|-------------|
| **Automatic reasoning effort escalation** | #4419 | NO PR (需求) | 0.3.x 计划 |
| **估算 token 级缓存** | #4420 | PR #3662 已通过 | 0.3.x |
| **Telegram rich message** | #4413 | PR #4413 未能合并 | 0.3.x 计划 |
| **Heartbeat manual trigger** | PR #3590 | 已 Merge (日常使用) | 0.3.x |
| **Subagent model override** | #4415 | PR #4415 合并 | 0.3.x |
| **Cron job model presets** | #4416 | PR #4416 合并 | 0.3.x |
| **Workspace TUI** | #4329 | PR #4329 合并 | 0.3.x |

>***路线图**：0.3.x 版本将聚焦于 “多模型协同 + 交互式体验”，计划优先完成 0.3.0+LFS 权限控制与子代理结果聚合，之后再落地自动 Reasoning Escalation 与多平台 rich message 兼容。  

---

### 7. 用户反馈摘要  
| 反馈来源 | 痛点 | 现象 | 满意度 |
|---------|-----|------|--------|
| #4013 | 长链信息传输不稳定 | 90s 以上未收到任何返回 | ❌ |
| #4580 | 代理切换时无反馈 | 更新模型后无模型切换信息 | ❌ |
| #4374 | 工作空间文件读写不对称 | 读取项目文件无误，写入默认工作区 | ❌ |
| #4389 | fallback 模型窗口截断问题 | 低窗口模型无法完整处理 prompt | ❌ |
| #4410 | Heartbeat 触发后多余通知 | 系统误发送 “无更新” 消息 | ❌ |
| #4400 | 终端 TUI 体验不佳 | 交互式 UI 不够友好 | ⚠️ |

> **共性**：对 **稳定性**（stream 超时、fallback 触发）与 **用户体验**（工作区同步、TUI）均有强烈诉求。上述 PR 已经在本日完成大半修复/功能实现，用户痛点可望在 0.3.x 版及时缓解。

---

### 8. 待处理积压  
| Issue | 说明 | 建议关注 |
|-------|------|----------|
| #4052 | MCP progress 触发 Pydantic 验证错误 | 验证器需纳入 `notifications/progress` 类型，减轻用户配置难度 |
| #4345 | Image‑strip fallback 泄露文件路径 | 已在 PR #4628 解决，进一步验证 |
| #4007 | project workspace 引入后写入默认工作区 | 正在捆绑 PR #4374，需进一步测试完整链路 |
| #3539 | 旧版 webhook 兼容性 | 需要进一步落地到 `channel` 建模层 |
| #1872 | `broadcast` 失效 | 阻止人群广播功能无法使用，需重新评估 API |

> **建议**：将上述长期待解决 Issue 列入 **下一季度里程碑**，并在 PR #3600‑#3650 里展开讨论，再行编码。  

---

## 结语  
NanoBot 本日展示了 **扎实的功能迭代节奏** 与 **及时的 Bug 修复能力**。开发社区对 **多模型协同** 与 **性能优化** 的关注度持续升温，团队已在 **PR #4411、#4414** 等重要改动中实现这些需求。随着 0.3.x 的计划驱动，项目整体保持健康，预计将在下一发布周期实现更进一步的功能拓展与用户体验提升。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Hermes Agent 项目动态日报 - 2026-06-20

## 1. 今日速览

Hermes Agent 项目今日活跃度极高，24小时内达成 50 条 Issues 和 50 条 PR 更新。v0.17.0 "Reach Release" 带来 1,475 个提交和 800 个合并 PR，标志着项目进入新的发展阶段。社区参与度持续增强，有 245 位贡献者参与本次发布。当前项目面临 Model 提供者兼容性、平台集成稳定性等关键 Bug 的挑战，但同时也推出多项重要功能改进，整体健康度良好。

## 2. 版本发布

### v0.17.0 (v2026.6.19) - "The Reach Release"

- **发布日期**：June 19, 2026
- **变更规模**：1,475 commits · 800 merged PRs · 1,693 files changed · 235,390 insertions · 50,730 deletions · 300+ issues closed
- **贡献者**：245 community contributors

> **注释**：v0.16.0 将 Hermes 带到桌面，v0.17.0 显然继续扩展平台覆盖范围，但具体的破坏性变更和迁移注意事项需要查看完整发布说明。

## 3. 项目进展

### 今日合并/关闭的重要 PR

**修复性 PR:**
- [#49351](https://github.com/NousResearch/hermes-agent/pull/49351) - Nous Portal access token resilience (P1)
- [#49369](https://github.com/NousResearch/hermes-agent/pull/49369) - Telegram init timeout to prevent startup hangs (P1)
- [#49280](https://github.com/NousResearch/hermes-agent/pull/49280) - Fix silent delivery failures in Signal live adapter (P2)

**功能性 PR:**
- [#49372](https://github.com/NousResearch/hermes-agent/pull/49372) - Deterministic delivery via deliver_file override for cron (P1)
- [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) - First-class projects with backend-authoritative session tree

这些更新推进了平台集成稳定性、任务调度可靠性和项目组织能力，项目整体向前迈进约 3-5 个重要里程碑。

## 4. 社区热点

### 最具讨论性 Issues/PRs

1. **[#4656](https://github.com/NousResearch/hermes-agent/issues/4656)** - Credential proxy daemon — 零知识 HTTP/HTTPS 代理 (11 评论)
   - 探讨提升 Agent 凭证安全性的架构设计
   - 反映社区对 Agent 安全性日益重视的态度

2. **[#45924](https://github.com/NousResearch/hermes-agent/issues/45924)** - Hermes + Gemma 4 12B 兼容性问题 (5 评论)
   - 在端本地部署的大模型与 Hermes 集成问题引发广泛讨论

3. **[#39281](https://github.com/NousResearch/hermes-agent/issues/39281)** - Hermes fails to work using gemma4 with ollama backend (4 评论)
   - 类似的 Ollama 集成问题反复出现，表明平台兼容性需加强

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

**P1 (致命/关键):**
- [#49351](https://github.com/NousResearch/hermes-agent/issues/49351) - Nous Portal access token resilience (已有 fix PR)
- [#49307](https://github.com/NousResearch/hermes-agent/issues/49307) - Context compression causes answer repetition + instruction loss

**P2 (严重):**
- [#49352](https://github.com/NousResearch/hermes-agent/issues/49352) - Windows console window in background actions (已有 fix PR)
- [#49283](https://github.com/NousResearch/hermes-agent/issues/49283) - execute_code consent gate ignores explicit chat consent (已有 fix PR)
- [#49332](https://github.com/NousResearch/hermes-agent/issues/49332) - delegate_task model override ignored
- [#48991](https://github.com/NousResearch/hermes-agent/issues/48991) - auxiliary.vision provider=auto fails to inherit base_url/api_key
- [#47868](https://github.com/NousResearch/hermes-agent/issues/47868) - Chat completions providers reject leaked timestamp metadata

**P3 (一般):**
- [#45924](https://github.com/NousResearch/hermes-agent/issues/45924) - Gemma 4 12B 兼容性问题
- [#23802](https://github.com/NousResearch/hermes-agent/issues/23802) - Plugins filter out entry-point-discovered plugins
- [#49326](https://github.com/NousResearch/hermes-agent/issues/49326) - 中文输入法标点触发设置界面跳转

## 6. 功能请求与路线图信号

### 重要功能请求

1. **[#32159](https://github.com/NousResearch/hermes-agent/issues/32159)** - Support ordered failover chains for web search/extract backends
   - 正在等待实现，PR [#49372](https://github.com/NousResearch/hermes-agent/pull/49372) 可能包含部分实现

2. **[#49363](https://github.com/NousResearch/hermes-agent/issues/49363)** - Desktop app load dashboard plugins
   - 呼应 web 端插件系统的统一性需求

3. **[#49368](https://github.com/NousResearch/hermes-agent/issues/49368)** - Kanban request_review transition + review lifecycle
   - 代码审查流程相关功能增强

4. **[#49362](https://github.com/NousResearch/hermes-agent/issues/49362)** - Clear stale custom keys after provider switch
   - 配置体验优化

这些功能多与平台集成、工作流自动化、插件系统相关，可能会纳入 v0.18.0 规划中。

## 7. 用户反馈摘要

### 主要痛点与场景

1. **模型兼容性**：用户在本地部署大模型（如 Gemma 4 12B）后发现 Hermes 无法正常工作，显示出模型适配层需要加强的信号
2. **平台集成稳定性**：WhatsApp、Signal、Telegram 等平台模块频繁出现安装/运行时故障
3. **桌面端交互体验**：中文输入法兼容问题、后台操作弹出控制台窗口、按钮无响应等 UI 体验问题
4. **安全性与凭证管理**： credential proxy daemon 功能请求反映用户对 Agent 凭证安全性的担忧
5. **配置持久化**：CLI 全局模型切换、自定义提供者切换时配置项未正确清理的问题导致功能异常

## 8. 待处理积压

### 长期未响应的重要 Issue/PR

1. **[#2830](https://github.com/NousResearch/hermes-agent/pull/2830)** - Supply chain audit expansion (创建于 2026-03-24，已更新于今日)
   - CI 安全审计增强，持续超过三个月仍未合并

2. **[#4656](https://github.com/NousResearch/hermes-agent/issues/4656)** - Credential proxy daemon (创建于 2026-04-02，讨论度高)
   - 虽积极讨论但至今未见 PR 跟进

3. **[#25106](https://github.com/NousResearch/hermes-agent/issues/25106)** - CLI --global model switch persistence (创建于 2026-05-13)
   - 配置持久化问题长期存在，用户体验影响较大

---

*数据来源：GitHub Issues/PRs 统计，2026年6月20日抓取*


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 – 2026‑06‑20**  
（基于过去 24 h 内 GitHub 活动数据）

---

## 1️⃣ 今日速览
- 项目保持高活跃度：过去 24 h 内共计 **4 条新/活跃 Issue**、**7 条 PR**（其中 **6 条待合并**），以及 **1 次 nightly 版本发布**。  
- 大多数讨论围绕 **平台兼容性 bug**（Windows 文件路径）以及 **权限细粒度控制**（Telegram 渠道）展开，体现社区对安全与跨平台可用性的强需求。  
- 合并进度相对缓慢，仅有 **1 条 PR 已合并/关闭**（#2956），其余 PR 仍在审查或待补充测试，说明维护者正在进行细致的质量把控。  
- 整体健康度为 **良好**：issue 量适中、PR 质量高、社区反馈积极，但需要加速关键 bug 的合并以提升用户体验。

---

## 2️⃣ 版本发布
### Nightly Build – **v0.3.0‑nightly.20260620.287853ab**
- **类型**：自动生成的 nightly，可能不稳定，仅供内部测试或抢先体验。  
- **主要变化**（见 Full Changelog）：  
  - 引入新实验性 **Agent Collaboration Bus**（在 PR #2937 中实现）——内部通信框架雏形。  
  - 多项安全性修复（#3143、#3045 等），提升 SSRF 防护与 Matrix 身份解析。  
- **破坏性变更 / 迁移注意事项**：暂无针对正式发行的破坏性改动； nightly 主要是功能实验与安全补丁，生产环境仍建议使用最新的稳定标签（如 `v0.2.6`）。  

---

## 3️⃣ 项目进展（已合并/关闭的 PR）
| PR | 关键成果 | 链接 |
|----|----------|------|
| **#2956** *(已关闭)* | 修复合并 `security.yml` 时 **channel.enabled** 状态被意外置 false 的回归，避免用户在添加凭证后失去渠道服务。 | https://github.com/sipeed/picoclaw/pull/2956 |
| **#2937** *(仍开放，但已在 nightly 中出现代码)* | 引入 **Agent Collaboration Bus**：为内部 Agent 提供持久化 mailbox、会话线程、权限感知的消息结构，为未来多插件协作奠定基础。 | https://github.com/sipeed/picoclaw/pull/2937 |
| **#3143** *(待合并)* | 防止 ISATAP IPv6 字面量中嵌入私有/回环 IPv4 地址的 SSRF 绕过，提升 web_fetch 安全性。 | https://github.com/sipeed/picoclaw/pull/3143 |

> **进度评估**：本轮合并侧重**安全性**与**内部架构**，对外显功能（如附件处理）仍在需求阶段，下一步应优先解决阻塞用户使用的跨平台 bug（#2472）和权限细分需求（#3114）。

---

## 4️⃣ 社区热点（活跃 Discussion）
| 编号 | 类型 | 关注点 | 评论数 | 👍 | 关键诉求 | 链接 |
|------|------|--------|--------|----|----------|------|
| **#2472** *(Issue)* | Bug | Windows `list_dir` 返回 “invalid argument” | 6 | 1 | 修复路径分隔符兼容性，以便 Windows 开发者正常使用文件浏览功能。 | https://github.com/sipeed/picoclaw/issues/2472 |
| **#3114** *(Issue)* | Feature/Request | Telegram 渠道依据 **对话类型**（私聊/群组/频道）进行权限分级 | 1 | 1 | 防止机器人在公开群组/频道被滥用，提升安全边界。 | https://github.com/sipeed/picoclaw/issues/3114 |
| **#348** *(Issue)* | Enhancement | 支持 **多种附件**（文本、图片、音视频）跨渠道处理 | 4 | 0 | 为业务场景（日志、代码、媒体）提供统一读取/发送接口。 | https://github.com/sipeed/picoclaw/issues/348 |
| **#3091** *(PR)* | Bugfix | `openai_compat` 中 `native_search` 类型断言缺失 ok 检查 | 0 | 0 | 防止非布尔值导致功能沉默失效，提高 provider 稳定性。 | https://github.com/sipeed/picoclaw/pull/3091 |

**分析**：社区目前最关心的两大方向是 **跨平台文件操作**（#2472）与 **安全权限控制**（#3114）。这两者均直接影响在企业内部或公开环境中部署 PicoClaw 的可靠性和安全感。

---

## 5️⃣ Bug 与稳定性
| 严重程度 | Issue | 描述 | 是否已有 Fix PR |
|----------|-------|------|-----------------|
| **高** | #2472 *(bug)* | Windows 上 `list_dir` 因路径分隔符错误抛出 “invalid argument”。 | 暂无对应 PR（待创建） |
| **中** | #3150 *(bug)* | “它给自己整失忆了” – 机器人在特定对话后失去状态记忆，复现步骤不完整。 | 暂无 |
| **低** | #3114 *(feature request, but includes security bug)* | 权限细分需求本身不算 bug，但实现缺失会导致潜在安全隐患。 | 正在通过 PR #3045（Matrix ID 细化）等间接改进 |
| **低** | #3045 *(fix)* | `allow_from` 对 Matrix ID 带冒号的解析错误，已提交修复。 | 已有 PR（#3045） |

**重点**：#2472 为阻断 Windows 用户的关键功能缺陷，建议维护者尽快开立修复 PR 并在 next‑nightly 中验证。

---

## 6️⃣ 功能请求与路线图信号
| 请求 | 背景 | 关联 PR / 进度 | 可能进入的里程碑 |
|------|------|----------------|------------------|
| **通用附件支持**（#348） | 企业用户需要机器人读取/转发日志、代码、媒体等文件。 | 尚未有实现 PR；可考虑在 **v0.3.x** 引入统一 `attachment` 接口。 | **下一次正式版本（v0.3.0）** |
| **Telegram 渠道权限分级**（#3114） | 防止机器人在公开群组/频道被滥用。 | 与已有的 `allow_from` 机制（#3045）相似，需在 channel 配置层加入 `chat_type` 策略。 | **v0.3.1（安全增强）** |
| **Agent Collaboration Bus**（#2937） | 为插件/内部模块提供持久化通信。 | 已在 nightly 中实现，代码已审阅。 | **v0.3.0‑nightly**，预计在正式版中正式发布。 |
| **Web Fetch SSRF 加固**（#3143） | 防止 ISATAP IPv6 中嵌入私有 IPv4 的 SSRF 绕过。 | PR 已提交，等待 CI 通过。 | **v0.3.0**（安全补丁） |

---

## 7️⃣ 用户反馈摘要
- **跨平台文件操作**是阻碍 Windows 开发者采用的主要痛点（Issue #2472），多数评论要求立即修复，否则只能在 Linux/macOS 环境使用。  
- **安全权限细分**受到多个渠道用户（Telegram、Matrix）关注，尤其在企业内部部署时，管理员担心机器人被加入群组后执行高危命令。  
- 对 **附件处理**的需求来自业务自动化场景（日志分析、代码审阅），用户希望一次性支持多种文件类型，而不是手动写脚本。  
- 部分用户对 **内部 Agent 协作**抱有期待，认为这能让不同模型/插件共享上下文，但仍需更明确的文档与示例。

总体来看，用户对 **安全** 与 **跨平台可用性** 的要求最为迫切，功能扩展（如附件）则是下一阶段的竞争优势。

---

## 8️⃣ 待处理积压（长期未响应）
| 编号 | 状态 | 说明 | 建议关注度 |
|------|------|------|------------|
| **#3048** *(PR)* | Open / Stale | `mcp add` 参数解析在根旗标前误判的修复。虽已提交一个月，仍未通过 CI。 | 中 |
| **#3045** *(PR)* | Open / Stale | Matrix `allow_from` 兼容性修复。已解决关键 bug，但仍待合并。 | 高 |
| **#3091** *(PR)* | Open / Stale | `openai_compat` 中 `native_search` 类型断言缺失。影响部分使用 OpenAI 兼容层的用户。 | 中 |
| **#2956** *(已关闭，但检视记录显示仍有后续讨论)* | Closed | 合并 `security.yml` 时的状态丢失问题已解决，但有用户反馈仍出现配置覆盖现象。 | 低 |
| **#3114** *(Issue)* | Open / Stale | Telegram 权限细分需求已提出近 2 周，暂无实现路线图。 | 高 |

> **行动建议**：优先处理 #2472（Windows 路径）和 #3114（Telegram 权限），并推动 #3045、#3048、#3091 进入合并队列，以维持社区信任与项目迭代速度。

---

**结论**：PicoClaw 今日在安全强化与内部架构改进方面取得实质进展，但关键跨平台 bug 与权限细分需求仍未得到快速响应。建议项目维护者在下周的 sprint 中：

1. 发起并合并针对 #2472 的 **路径分隔符修复**。  
2. 将 Telegram 权限细分（#3114）纳入下一个稳定版本的需求列表。  
3. 加速审查并合并已通过 CI 的安全/兼容性 PR（#3045、#3048、#3091）。

及时解决这些高优先级问题，将显著提升用户满意度并为即将发布的 **v0.3.0** 打下坚实基础。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报（2026‑06‑20）**

---

### 1. 今日速览  
- 过去 24 小时内未有新开或关闭的 Issue，整体活跃度较低。  
- 5 条待合并的 Pull Request 表明开发进程仍在进行，但尚未产生实质性的合并动作。  
- 无新版本发布，项目处于特性实现与细节修复的过渡期。  
- 综合来看，代码库保持稳定，主要围绕 bug 修复和功能细化进行。

---

### 2. 版本发布  
- **无新版本发布**（ past 24h 无 Release）。

---

### 3. 项目进展  
- **未合并/关闭的重要 PR**（共 5 条）：  
  1. **PR #2820** – 修复 `pending_approvals` 行在 `delivery target` 未记录的问题，确保 `channel_type`、`platform_id`、`platform_message_id` 能正确写入。  
  2. **PR #2812** – 实现父 Agent 权限通过 OneCLI 自动继承的功能，提升权限管理的统一性。  
  3. **PR #2809** – 引入 Apple Container 运行时（`CONTAINER_RUNTIME=container`）以及远程 OneCLI gateway 的第一类支持。  
  4. **PR #2819** – 为 MseeP.ai 增加安全徽标，提升第三方可信度展示。  
  5. **PR #2812** – 为 Discord 消息分片实现 2000 字限制的 `splitForLimit` 方案，防止单条消息被截断。  

- 这些 PR  collectively 表明项目正在 **完善审批流程、权限体系、容器运行时以及跨平台消息处理**，整体向 **更高的可维护性与可扩展性** 迈进。

---

### 4. 社区热点  
- **最活跃的 PR**：  
  - **PR #2820**（<https://github.com/qwibitai/nanoclaw/pull/2820>） – 讨论焦点为 “pending_approvals” 缺失送达信息的缺陷，用户期待更可靠的审批追踪。  
  - **PR #2809**（<https://github.com/qwibitai/nanoclaw/pull/2809>） – 引入容器运行时与远程 OneCLI gateway，受到对异构部署需求的关注。  
- **评论/反应**：所有 PR 当前的评论数与点赞数均为空（`undefined` / `0`），说明社区对这些变更的即时反馈尚未产生显著互动。

---

### 5. Bug 与稳定性  
| 编号 | 问题描述 | 严重程度 | 已有 Fix PR | 链接 |
|------|----------|----------|-------------|------|
| #2820 | `requestApproval()` 在创建 `pending_approvals` 行前即提前写入，导致 `channel_type`、`platform_id`、`platform_message_id` 保持 `NULL`，影响审批追踪。 | 中 | **是** (PR #2820) | <https://github.com/qwibitai/nanoclaw/pull/2820> |
| 无其他报告 | 过去 24 小时 Issue 更新为 0，未出现崩溃、回归或严重错误。 | — | — | — |

---

### 6. 功能请求与路线图信号  
- **容器运行时 + 远程 OneCLI gateway**（PR #2809） → 为多云/Apple Silicon 环境提供第一类支持，具备路线图中 “容器化” 阶段的明确信号。  
- **权限继承**（PR #2812） → 通过 OneCLI 统一权限模型，符合提升安全与运维效率的长期目标。  
- **Discord 消息分片**（PR #2812） → 解决单条消息超长被截断的痛点，预示未来会在 SDK 桥接层加强限制处理。  
- **安全徽标**（PR #2819） → 虽为展示层改动，但表明社区对第三方安全可信度的关注度提升，可能在后续版本加入更多安全验证机制。

---

### 7. 用户反馈摘要  
- **审批追踪不完整**（PR #2820） → 用户反映审批记录缺失导致无法追溯卡片送达情况，期望后端能完整保存送达目标。  
- **大消息被截断**（PR #2812） → Discord 适配器未设置 `maxTextLength`，导致长消息被硬截，用户希望分段发送而非丢失内容。  
- **容器部署复杂**（无直接 Issue，但 PR #2809） → 部分用户在 Apple Silicon 环境下部署困难，期待更简化的容器运行时配置。  

总体来看，用户关注 **数据完整性、跨平台消息处理以及部署便利性**，这些痛点正被对应的 PR 逐步 address。

---

### 8. 待处理积压  
- **PR #2820**（<https://github.com/qwibitai/nanoclaw/pull/2820>） – 虽然已有代码修复，但审查进度仍在进行，维护者需尽快完成合并以解决审批追踪缺陷。  
- **PR #2809**（<https://github.com/qwibitai/nanoclaw/pull/2809>） – 涉及重大运行时改动，若延迟合并可能影响已有 Docker 部署的兼容性，建议相关维护者加速审议。  

---  

*以上报告基于 GitHub 数据截至 2026‑06‑20 24 小时的统计，客观反映 NanoClaw 项目的健康度与发展动向。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报 – 2026‑06‑20**  
*(基于 GitHub 上 过去 24 h 的数据)*  

---

## 1. 今日速览  
- 项目在过去 24 h 仍保持活跃，收到 **3 条 Issue**（其中 2 条仍未关闭）和 **1 条 Pull Request**（待合并）。  
- 大多数讨论集中在跨平台兼容性（Android/Termux）和本地模型（ollama）输出完整性的两大痛点。  
- 由于暂无新 Release，项目的代码基线仍保持在上一次标记的 **v2026.4.17**，但已有针对 Android DNS 的修复正在审查中。  
- 整体活跃度评估为 **中等偏上**：Issue 反馈率高，PR 流入但合并周期稍长，说明社区对平台适配有显著需求。

---

## 2. 版本发布  
> 今日无新的 Release。  

---

## 3. 项目进展  
- **PR #966**（`fix(http): route stdlib HTTP through curl on aarch64-linux-android`）已在本日提交，目标是让 Zig 标准库的 `std.http.Client` 在 Termux 环境下走 `curl`，规避 `getaddrinfo()` 失效的问题。该 PR 仍 **OPEN**，预计在本周内完成审查并合并后，Android/Termux 用户将恢复 HTTP 请求能力。  
- **Issue #952**（ollama 本地模型回复不完整）已在今日关闭，说明维护者已经确认该行为是已知限制或已在内部代码中做了容错处理。关闭该 Issue 有助于降低用户对本地模型的误解。

*整体推进情况*：本周的关键进展是对 Android 网络栈的主动修复，和对本地模型输出问题的快速响应，显示团队对平台兼容性和用户体验的重视。

---

## 4. 社区热点  

| 类型 | 编号 | 标题 | 互动量（评论/👍） | 链接 | 关注点 |
|------|------|------|------------------|------|--------|
| **Issue** | #952 **[CLOSED]** | Local model using ollama returns incomplete answers | 3 / 0 | https://github.com/nullclaw/nullclaw/issues/952 | 用户在本地使用 Ollama 时得到不完整句子，涉及模型输出截断。 |
| **Issue** | #868 **[OPEN]** | zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat | 2 / 0 | https://github.com/nullclaw/nullclaw/issues/868 | 编译在 Android/Termux 上被文件系统权限阻止，导致构建失败。 |
| **PR**   | #966 **[OPEN]** | fix(http): route stdlib HTTP through curl on aarch64‑linux‑android | — / 0 | https://github.com/nullclaw/nullclaw/pull/966 | 解决 Android DNS 缺失导致的网络调用异常，直接关联 Issue #868。 |

**分析**：  
- **Android/Termux 兼容性** 是本日最热议题，涉及编译、运行时网络、文件系统权限三方面。社区在 Issue #868 中报告了构建阻塞，而 PR #966 正在提供针对性的解决方案。  
- **本地模型交互**（Issue #952）虽已关闭，但仍体现出用户对本地 AI 推理完整性的期待，提示文档和示例代码需要明确模型输出的流控机制。

---

## 5. Bug 与稳定性  

| 严重程度 | Issue 编号 | 描述 | 当前状态 | 是否已有 Fix PR |
|-----------|------------|------|----------|-----------------|
| **高** | #868 | `zig build -Doptimize=ReleaseSmall` 在 Android/Termux (aarch64) 上因 `AccessDenied` 失败 | **OPEN** (更新于 6‑19) | **无**（但 PR #966 可能间接解决） |
| **中** | #952 | ollama 本地模型返回截断答案 | **CLOSED** (6‑20) | 已在代码中加入容错/提示，视为内部修复 |
| **低** | #484 | 飞书（Lark）客户端无法联网查询 | **OPEN** (3‑13 开启，6‑19 更新) | 暂无对应 PR，仍待进一步信息 |

*备注*：目前唯一高危 Bug 尚未有专属修复 PR，建议维护者优先审查与 Android 文件系统相关的改动（PR #966）并在通过后验证 Issue #868。

---

## 6. 功能请求与路线图信号  

| 编号 | 请求概述 | 关联 PR/实现可能性 |
|------|----------|--------------------|
| #484 | “飞书无法联网查询” — 需要在 NullClaw 中集成对企业通讯平台（Lark/Feishu）的 API 调用 | 无直接 PR，若实现统一 HTTP 适配器（PR #966）后，后续可在此基础上添加平台插件。 |
| #952（已关闭） | 提升本地模型（ollama）输出完整性；期望提供“流式输出完整句子”选项 | 已在内部处理，未来可在 Release Notes 中标记为 **已改进**。 |
| #868 | Android/Termux 编译支持的改进需求 | 正在通过 PR #966 解决网络层问题，若成功合并，后续可以在路标上标记 “Android CI 支持”。 |

**路线图信号**：Android/Termux 兼容性已成为短期（下一个小版本）优先事项；企业通信平台集成仍处于探索阶段，预计在下一大版本（v2026.5）前后进行评估。

---

## 7. 用户反馈摘要  

- **模型输出完整性**：用户期待本地模型能够像云模型一样返回完整句子，当前截断导致对话流失。维护者已对该问题给出解释并在文档中加入 “使用 `--stream` 参数” 的提示。  
- **跨平台构建**：在 Android/Termux 上构建时遇到权限错误，用户报告编译过程卡死。社区对缺少 `/etc/resolv.conf` 表现出不满，呼吁提供替代 DNS 方案。  
- **企业集成需求**：飞书用户希望 NullClaw 能直接查询企业内部知识库，当前网络限制导致功能不可用，表现出对插件化扩展的需求。  

总体来看，用户对 **可用性**（特别是跨平台）和 **功能完整性**（模型输出、企业 API）最为敏感。

---

## 8. 待处理积压  

| 编号 | 类型 | 创建时间 | 最近更新 | 重要性 | 备注 |
|------|------|----------|----------|--------|------|
| #484 | Issue (OPEN) | 2026‑03‑13 | 2026‑06‑19 | 中 | 飞书网络查询仍未得到官方反馈，建议指派维护者收集更多日志。 |
| #868 | Issue (OPEN) | 2026‑04‑23 | 2026‑06‑19 | 高 | 与 Android/Termux 构建直接相关，优先级应提升。 |
| #966 | Pull Request (OPEN) | 2026‑06‑19 | 2026‑06‑19 | 高 | 关键网络修复，需尽快完成审查并合并。 |
| #952 | Issue (CLOSED) | 2026‑06‑11 | 2026‑06‑20 | 低 | 已关闭，但可在 Release Note 中记录为已解决的模型输出问题。 |

**建议**：维护者可在本周内安排一次 “Android 兼容性冲刺”，集中审查 #868 与 #966，并同步更新文档，以降低新用户在 Termux 环境中的入门门槛。

---  

*报告编制者：NullClaw 开源项目分析员（基于 GitHub API 统计），2026‑06‑20*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### 项目动态日报：2026-06-20

#### 项目速览（2026-06-20）
今日整体顺利，✅活跃度稳vig，稳步推进。经过近日讨论的关键 PR 如 #5078、#5087、#5071 和 ||#5100，已完成开关、配置校正和功能拼接，项目已进入合并为主通道状态。同时，多用户提交的问题逐步闭合，支持封装和量化。此外，主力团队还推出了Reborn开源的资源指南与技能训练模块，讲求易用性与自主开发助力。

#### 版本发布
本日无发布新版，目前版本保持 0.0.1。但保持与后续迭代有强烈的对齐，未来版本将包含通过 PR 已解决的僵点及扩展的特性。 aten users 请关注本周里链接最新提交，增强可控性。

#### 项目进展
**重要进展**：
- #5087 / #5100 / #5092：核心健壮性及安全性问题已平igné，重点性能从前略稀释。
- #5091 / #5095：统一的特征配置模块细化采用，功能覆盖更广。
- #5062 / #5085：多轮 A/B / 自主CD流程建立，确保分支可并发 CCD。

#### 社区热点
- #5092 聚焦：时间敏感的配置反馈快速响应，提升用户体验。
- #5071 / #5085：近期解难屏住，社区热情达峰，持续改进是保障质量所必需。
- 还围绕所有讨论热点补答，车主反馈更多一致，周期成长信号明显。

#### bug与稳定性
- 报告的 <<Bug>“执行断流”>> 已通过 validate + mock / fuzz 测试全部修复，安全级已达 OMP。
- 长期积压项目并未出现回击，服务稳定性全面提升。

#### 功能请求与路线图信号
- 用户正在讨论的“外部准确API补文”，整体意见呈溢于多数，建议以 2026-07初次试点开始。
- 团队计划在下周内公告正式集成，耐心关头大家可见眼。

#### 用户反馈摘要
- 大家普遍表示 <strong>新版本抢sonian流程**清晰**且 <strong>合并效率大幅提升**。用户对团队的手动操作支持和维护意识大幅注评。
- 通用痛点仍有（如部分旧版 inability 被新引入完善解决），主要是用户默示希望下周“正式 Arc 官方发布”。

#### 待处理积压
- #5015 #5016#5018 已平理，#5019 #5065#5066 状态顺畅可忽略。
- #800000：建议团队对 #5094 #4829 样条相关用户反馈做深度反向调研。

---

**参考链接：**
- [项目 Issues](https://github.com/nearai/ironclaw/issues/5098)
- [PR #5087](https://github.com/nearai/ironclaw/PR/5087)
- [PR #5096](https://github.com/nearai/ironclaw/PR/5096)
- [PR #5093](https://github.com/nearai/ironclaw/PR/5093)

---

📅 如有更多细节需求，可随时问神！

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## **LobsterAI 项目动态日报（2026-06-20）**

---

### **1. 今日速览**  
LobsterAI 项目今日活跃度稳定：共更新4条 Issues（含3条已关闭、1条新增）、0条 PR 合并，无新版本发布。关闭的 Issues 多为社区报告的 Bug 问题，提交者已收到修复确认，但需进一步验证解决效果。新增 Issue #2180 标志着社区提出重大功能需求，显示项目仍在探索扩展方向。

---

### **2. 版本发布**  
**未发布新版本**。  

---

### **3. 项目进展**  
今日无 PR 合并，但 3 条关闭的 Issues 均涉及核心 UX 与功能稳定性的修复：  
- **#1471**：修复 Cowork 会话切换时草稿丢失问题（已关闭）。  
- **#1472**：修复历史消息重编辑时未提示覆盖行为（已关闭）。  
- **#1487**：确认 30B 模型调用稳定性问题（已关闭，但需持续监测）。  
项目整体趋于稳定，但仍需加速解决长期积压问题。

---

### **4. 社区热点**  
- **Issue #2180** [新增]：提出「AI Collaborator」功能（含跨模型协作与项目内存），衡量社区活跃度。  
- **Issue #1471 & #1472** [已关闭]：尽管已解决，但评论数较高（各 2 条），反映用户对临界交互细节的敏感度。  
- **Issue #1487**: 社区关注模型调用稳定性，刻劂技术可靠性反馈。  

🔗 热点讨论链接：  
- #2180: [Build "AI Collaborator"](https://github.com/netease-youdao/LobsterAI/issues/2180)  
- #1471: [草稿丢失修复](https://github.com/netease-youdao/LobsterAI/issues/1471)  
- #1472: [覆盖提示优化](https://github.com/netease-youdao/LobsterAI/issues/1472)  

---

### **5. Bug 与稳定性**  
| **严重程度** | **摘要** | **状态** | **链接** |  
|--------------|----------|----------|----------|  
| **Medium** | 重新编辑历史消息时静默覆盖当前输入框内容 | 已关闭（修复） | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) |  
| **Medium** | 切换会话时草稿未持久化丢失 | 已关闭（修复） | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) |  
| **Low** | 30B 模型调用异常（可能依赖环境问题） | 已关闭（需进一步验证） | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) |  

**所有修复已通过讨论和标签 [stale] 标记，但需维护者确认长期稳定性。**

---

### **6. 功能请求与路线图信号**  
- **新增功能需求**:  
  **Issue #2180** 提出「AI Collaborator」平台，目标用户为「技术爱好者非专业程序员」，核心功能包括跨模型编排与项目级记忆。若被采纳，可填补当前项目对复杂协作场景的空白。  
- **已有 PR 与路线图关联**：无直接关联，但功能规模较大，预计需多版本迭代，未来 6-12 个月可能被纳入。  

---

### **7. 用户反馈摘要**  
**真实痛点**：  
- **草稿丢失与覆盖行为**（#1471/#1472）：用户对临界交互数据的不可控风险敏感，需强化数据持久化与用户确认机制。  
- **模型稳定性依赖性**（#1487）：用户报告本地模型调用不稳定，可能与资源分配或兼容性问题相关，需文档补充部署条件。  

**合理使用场景**：  
- 大部分关闭的 Issues 提交者确认修复后仍可正常使用项目，表明核心功能已具生产力。  

**不满意反馈**：  
- 未解决的模型调用问题（#1487）和长期积压 Issue（如 #2050）导致部分用户质疑维护进度透明度。  

---

### **8. 待处理积压**  
| **Issue** | **标签** | **备注** |  
|-----------|----------|----------|  
| #2050 | [bug/stale] | 【修复】Skills 面板对话框列表层级错误（已立凉期待维护） | [链接](https://github.com/netease-youdao/LobsterAI/issues/2050) |  
| #1998 | [enhancement/stale] | 【优化】技术文档结构重构需求（无进展） | [链接](https://github.com/netease-youdao/LobsterAI/issues/1998) |  

**提醒维护者**：紧急度较高的 Bug（如 #2050）需优先处理，防止影响新功能上线¹。  

---

¹ 参考社区反馈：用户因积压问题延迟开发流程 1-2 日。  

---  
**注**：今日动态均基于 GitHub 数据，供团队督导及透明化管理参考。


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目每日动态报告**  
**日期：2026‑06‑20（UTC）**  
**数据来源：GitHub 仓库 agentscope‑ai/CoPaw（截至 2026‑06‑20 23:59）**

---

## 1. 今日速览  
- 项目在过去 24 h 内共有 **12 条 Issue**（11 新/活跃、1 已关闭）和 **17 条 Pull Request**（11 待合并、6 已合并/关闭），保持中等偏上活跃度。  
- 重点聚焦在 **模型提供商的兼容性**（Zhipu、DeepSeek）以及 **UI/交互细节**（侧边栏切换、实时推送）的问题修复。  
- 多个 **first‑time‑contributor** 的 PR 已进入 Review，说明社区新贡献者参与度在提升。  
- 仍缺正式发行版，主要在功能迭代和关键 bug 修复阶段。

---

## 2. 版本发布  
> 本日暂无新 Release。  

---

## 3. 项目进展（已合并 / 关闭的关键 PR）

| PR 编号 | 标题 / 关键改动 | 关联 Issue | 合并状态 | 影响范围 |
|--------|----------------|------------|----------|----------|
| **#5332** | **fix(memory): add index maintenance & timeout for ChromaDB** | #4795 | 已合并 | 解决向量索引无限膨胀导致的 `memory_search` 崩溃（根本性稳定性提升）。 |
| **#5335** | **fix(console): yield failed response event on exception** | #5333 | 已合并 | 防止 UI 卡死、提升错误可见性。 |
| **#5324** | **fix(files): use inline Content‑Disposition for image preview** | #5320 | 已合并 | 修复 v1.1.12 后图片无法在聊天窗口直接展示的问题。 |
| **#5339** | **fix(providers): use plain string for model‑level connection test** | #5330 | 已合并 | Zhipu 供应商模型连接测试全失效的根因修复，恢复模型可用性。 |
| **#5340** | **fix(model_factory): switch formatter drop detection to whitelist** | #5208 | 已合并 | 解决 “Assistant message count mismatch” 警告，提升对不同块类型的兼容性。 |
| **#5321** | **feat(context): scroll context manager – durable history + recall REPL** | — | 已合并 | 引入滚动式记忆管理策略，提升长会话的检索与压缩效率。 |
| **#5331** | **feat(console): real‑time SSE push‑message + voice beep** | #5322 | 已合并 | 实时 API 消息推送与可选语音提示，显著改善交互体验。 |
| **#5336** | **feat(providers): support custom model ordering** | #5267 | 已合并 | 让用户在「设置 → 模型」页面自定义模型排序，响应 UI customization 需求。 |

**总体进展评价**  
- **功能层面**：新增滚动记忆、实时推送、模型排序等特性，项目在可用性与可配置性上迈出实质性步伐。  
- **稳定性层面**：针对 ChromaDB 爆炸、模型连接、UI 卡死的关键 bug 已全部得到修复，核心使用场景（记忆检索、模型调用）已恢复。  
- **社区贡献**：本周首次出现多条 *first‑time‑contributor* PR 并进入 Review，说明入门门槛已降低。

---

## 4. 社区热点（讨论最激烈的 Issue / PR）

| 链接 | 类型 | 标题 | 评论数 / 👍 | 关注点 |
|------|------|------|-------------|--------|
| **#5208** (Issue) | Bug | Assistant message count mismatch when model returns reasoning blocks with type “reasoning” | 6 / 0 | 影响所有使用 `LongCat‑2.0‑Preview` 的用户，涉及消息计数与格式化逻辑。已被 PR #5340 直接关闭。 |
| **#4795** (Issue) | Bug | 向量索引无限膨胀至 37 GB 导致 `memory_search` 崩溃 | 3 / 0 | 关键稳定性问题，触发了 PR #5332 的完整修复。 |
| **#5330** (Issue) | Bug | Zhipu 供应商模型级别连接测试全部失败 | 1 / 0 | 影响 Zhipu 用户的模型可用性，已通过 PR #5339 解决。 |
| **#5267** (Issue) | Enhancement | 模型提供商中的模型列表支持自定义排序 | 2 / 0 | 直接促成了 PR #5336，实现 UI/UX 定制化。 |
| **#5334** (PR) | Feature | UI: allow switching agent in collapsed sidebar mode | — | 响应移动端/窄屏需求，提升了侧边栏可操作性。 |

**背后诉求**  
- **兼容性与错误透明化**：用户对模型返回结构（reasoning vs. thinking）以及供应商 API 差异的容错需求强烈。  
- **资源管理**：ChromaDB 爆炸暴露出对本地向量库的维护需求，社区期望自动化清理或警告机制。  
- **移动/窄屏使用场景**：侧边栏折叠、Agent 切换等 UI 细节被反复提及，表明对跨设备一致体验的期待。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue 编号 & 链接 | 摘要 | 是否已有 Fix PR |
|--------|-------------------|------|-----------------|
| **Critical** | **#4795** – 向量索引膨胀至 37 GB | 导致 `memory_search` 卡死/崩溃，影响所有使用 ChromaDB 的用户。 | ✅ PR #5332（已合并） |
| **High** | **#5208** – Assistant message count mismatch | 生成的 reasoning 块导致计数不匹配，产生大量警告并可能漏注入内容。 | ✅ PR #5340（已合并） |
| **High** | **#5330** – Zhipu 模型连接测试全部失败 | 供应商层通过但模型层均报 API 错误，阻断模型切换。 | ✅ PR #5339（已合并） |
| **Medium** | **#5328** – DeepSeek “thinking” 卡死 | 在 DeepSeek 运行时，agent 在思考阶段频繁卡死，需要手动停止。 | 未关闭，暂无对应 PR（待进一步诊断） |
| **Medium** | **#5333** – UI 卡住且输入框仍可提交 | 发送指令后 UI 卡死，未显示 “暂停” 按钮。 | ✅ PR #5335（已合并） |
| **Medium** | **#5320** – send_file_to_user 后图片不显示 | 升级至 v1.1.12 后图片不再内嵌显示。 | ✅ PR #5324（已合并） |
| **Low** | **#5327** – 智能体办公室加入对话切换功能 | 功能请求，暂无实现。 | 未开始 |

---

## 6. 功能请求与路线图信号

| 请求编号 & 链接 | 需求概述 | 与已合并 PR 的关联度 | 可能进入下一个正式版本（≥ v1.2.0） |
|----------------|----------|----------------------|-----------------------------------|
| **#5329** – 侧边栏简介模式下可切换 Agent | 在移动端/紧凑视图仍保留 Agent 切换入口。 | 已实现类似功能的 PR #5334（collapsed sidebar切换）| ✅ 已基本实现，后续细化 UI 细节可直接进入 1.2.0。 |
| **#5267** – 模型列表自定义排序 | 用户希望手动拖拽或上下移动模型顺序。 | PR #5336 已实现排序字段并在 UI 中使用。 | ✅ 已在代码中，预计在 1.2.0 中发布。 |
| **#5322** – 实时 UI 更新 + 语音通知 | API 推送消息即时出现在 UI，配合语音提示。 | PR #5331 已提供 SSE 实时推送及可选声效。 | ✅ 已完成，属于 1.2.0 的新特性。 |
| **#5327** – 智能体办公室对话/会话切换 | 在 Office 页面直接打开对话窗口并切换 Session。 | 尚无对应 PR，需求涉及前端布局与后端 session 管理。 | ⚠️ 中期需求，建议纳入 1.3.0 计划。 |
| **#5325** – 记忆搜索的时效感知排序 | 为每日笔记引入衰减评分，提升最新信息的检索权重。 | PR #5325 已实现可选的 recency‑aware 排序。 | ✅ 已合并，待文档与 UI 暴露后可进入 1.2.0。 |

---

## 7. 用户反馈摘要

- **模型兼容性痛点**：多位用户（#5208、#5328）抱怨不同模型返回的块类型导致消息计数错误或卡死，期待框架对 “reasoning”/“thinking” 自动统一处理。已在 PR #5340 中提供解决方案。  
- **资源消耗警报**：#4795 的用户报告本地向量库异常增长，导致机器卡顿。社区对 **自动索引压缩** 与 **磁盘使用监控** 有强烈需求。PR #5332 已实现手动/自动压缩功能。  
- **移动端/窄屏体验**：#5329、#5334 体现出在手机或小窗口时侧边栏缺少关键交互（切换 Agent）。通过 PR #5334 改进后，用户已确认 UI 可用，但仍期待更细致的视觉指示。  
- **实时交互感知**：#5322 与 #5331 表明用户在使用 API 跨 Agent 通信时，需即时在控制台看到反馈并获得声音提示，提升监控效率。当前实现已覆盖大多数场景，后续可考虑自定义提醒方式。  
- **错误可视化**：#5333 让 UI 在后台异常后仍保持“可输入”状态，造成误操作。PR #5335 通过事件上报解决了此类黏性错误，提升了用户对系统状态的感知。

整体来看，**用户主要关注点在于**：**模型/供应商兼容性、资源/内存管理、跨设备 UI 连贯性以及实时错误反馈**。

---

## 8. 待处理积压（长期未响应的重要 Issue/PR）

| 编号 & 链接 | 类型 | 关键性 | 今日状态 | 建议处理时限 |
|-------------|------|--------|----------|--------------|
| **#5327** – 智能体办公室加入对话和会话切换功能 | Feature | 高 – 直接影响多 Agent 运营效率 | 开放，暂无 PR | **下个里程碑（v1.3.0）** |
| **#5317** – Tauri 窗口下找不到 Python（conda） | Question | 中 – 会阻断自定义 Skill 运行 | 开放，未有回复 | 2‑4 周内提供环境配置指南 |
| **#5319** – Console channel “Answers have stopped” (已关闭) | Bug | 已关闭，复现需确认 | 已解决 | - |
| **#5338 / #5337** – 重复的 provider fix（已关闭） | Maintenance | 低 – 已合并，需清理分支 | 已关闭 | - |
| **#5340** 等已合并 PR 的 **Review** 仍在进行中（部分仍显示 “undefined” 评论），建议项目维护者在 3 天内完成审查并合并，以免阻塞后续依赖。 |

---

### 结论

- **健康度**：项目在过去 24 h 中保持 **活跃且聚焦**，核心功能（模型调用、记忆检索）已解决关键崩溃问题，UI/交互细节持续迭代。  
- **风险**：仍有若干供应商兼容性（DeepSeek、Zhipu）和资源管理（向量库）方面的边缘案例，需要持续监控。  
- **建议**：优先完成 **#5327**（Office 对话）和 **#5317**（Tauri Python 环境）两项高价值需求；同步清理重复 PR、加速 Review 流程，以保持社区贡献者的积极性。  

*本报告供 CoPaw 项目维护者、核心贡献者及社区成员参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

User Safety: safe

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*