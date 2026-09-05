# OpenClaw 生态日报 2026-09-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-05 02:04 UTC

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

# OpenClaw 项目日报 — 2026-09-05

> 数据源：github.com/openclaw/openclaw | 统计窗口：2026-09-04 00:00 ~ 2026-09-05 24:00

---

## 1. 今日速览

OpenClaw 今日社区活跃度**异常高涨**，Issues 与 PR 合计 1,000 条更新（Issues 500 / PR 500），但**无新版本发布**。从评论分布看，核心讨论集中在**会话状态一致性、消息投递可靠性、Gateway 启动与稳定性**三个高优先级象限。P0/P1 级别 Issue 占比约 35%，多个 Regression 类 Bug 指向 2026.7.x → 2026.8.x 升级路径，项目处于"功能扩张 vs 稳定性修复"的张力期。整体 health score：⚠️ **中等偏上**（代码提交活跃，但线上回归未清零）。

---

## 2. 版本发布

**无新版本**。最近已知稳定版为 2026.8.1，多个 Issue 报告该版本仍存在带病运行问题（见下文 Bug 部分）。建议等待 2026.9.x 正式版前锁定 2026.7.1-2。

---

## 3. 项目进展（关键 PR）

| PR | 方向 | 状态 |
|---|---|---|
| [#136900](https://github.com/openclaw/openclaw/pull/136900) | Gateway：隐藏外部草稿的敏感会话元数据 | CLOSED — 安全加固 |
| [#138766](https://github.com/openclaw/openclaw/pull/138766) | Memory：窄化源读取 + 流式 embedding 缓存 | OPEN — 性能 |
| [#136699](https://github.com/openclaw/openclaw/pull/136699) | Release：冻结目标前允许 worker bundle | OPEN — 工程化 |
| [#138696](https://github.com/openclaw/openclaw/pull/138696) | WebUI/OAuth：保留推理配置 + Gateway 重建 | OPEN — 体验修复 |
| [#138669](https://github.com/openclaw/openclaw/pull/138669) | Sessions：磁盘会计移出 Gateway 主线程 | OPEN — 性能（紧临 #119720） |
| [#122846](https://github.com/openclaw/openclaw/pull/122846) | Agent-core：per-response tool-call block cap | OPEN — 稳定性 |

**进步口径**：Gateway 安全模型、会话磁盘性能、OAuth 流程三方面推进，但核心主线程阻塞问题尚未在代码层面闭合。

---

## 4. 社区热点（评论 Top 10）

1. **[#22438](https://github.com/openclaw/openclaw/issues/22438)** — Tiered bootstrap file loading（18评）→ 用户强烈希望**按需加载**控制 token 消耗
2. **[#38327](https://github.com/openclaw/openclaw/issues/38327)** — google-vertex/gemini-3.1-pro-preview 空值崩溃（16评）→ 升级即不可用，影响面广
3. **[#115908](https://github.com/openclaw/openclaw/issues/115908)** — Session transcript livelock（15评）→ 主线程阻塞，零回应
4. **[#69208](https://github.com/openclaw/openclaw/issues/69208)** — 跨频道 transcript 重复/回放（15评）→ Umbrella 问题，暴露架构层缺陷
5. **[#108435](https://github.com/openclaw/openclaw/issues/108435)** — Gateway 启动失败（14评）→ systemd/Ollama/手动均受影响
6. **[#53628](https://github.com/openclaw/openclaw/issues/53628)** — XDG_CONFIG_HOME 未解析（14评）→ Docker 用户痛点
7. **[#43367](https://github.com/openclaw/openclaw/issues/43367)** — 多agent 并发覆盖（14评）→ 数据丢失风险
8. **[#48920](https://github.com/openclaw/openclaw/issues/48920)** — Live Docs 超前发布（11评）→ 文档/版本脱节
9. **[#14785](https://github.com/openclaw/openclaw/issues/14785)** — Tool schema 3,500 token 税（11评）→ 持续占用上下文
10. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — Hook 子进程 zombie 泄漏（10评）→ 长期运行退化

**诉求提炼**：用户要的是"**可预测的稳定**"而非"新功能轰炸"。

---

## 5. Bug 与稳定性（按严重度排列）

| 等级 | Issue | 现象 | 是否有 Fix PR |
|---|---|---|---|
| **P0** | [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 超前于版本 | — |
| **P1** | [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026.3.2 google-vertex 崩溃 | ❌ |
| **P1** | [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript 主线程 livelock | ❌ |
| **P1** | [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway 启动失败 | ❌ |
| **P1** | [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 agent 并发覆盖配置 | ❌ |
| **P1** | [#135111](https://github.com/openclaw/openclaw/issues/135111) | v2026.8.1 malformed JSON tool call | ❌ |
| **P1** | [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost 锁 PID 复用冻结 | ❌ |
| **P1** | [#92241](https://github.com/openclaw/openclaw/issues/92241) | 升级后模块路径残留 | ❌ |
| **P1** | [#119720](https://github.com/openclaw/openclaw/issues/119720) | SQLite 阻塞事件循环 | PR [#138669](https://github.com/openclaw/openclaw/pull/138669) 进行中 |
| **P2** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie 子进程泄漏 | ❌ |
| **P2** | [#112259](https://github.com/openclaw/openclaw/issues/112259) | 零 payload 静默丢弃 | ❌ |
| **P2** | [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix 房间循环 | ❌ |

---

## 6. 功能请求与路线图信号

- **Tiered bootstrap** [#22438](https://github.com/openclaw/openclaw/issues/22438) — 评论最高，已标记 `clawsweeper:linked-pr-open`，**大概率下一版本落地**
- **Context compaction self-trigger** [#6757](https://github.com/openclaw/openclaw/issues/6757) — Agent 自主压缩，PR 路线未明
- **Per-model usage logging** [#13219](https://github.com/openclaw/openclaw/issues/13219) — 成本控制刚需，企业用户强需求
- **Resolved backend model 暴露** [#51441](https://github.com/openclaw/openclaw/issues/51441) — LiteLLM 路由场景，PR 已关联
- **Onboarding Memory/Embedding 强制步骤** [#16670](https://github.com/openclaw/openclaw/issues/16670) — 降低新手失败率

---

## 7. 用户反馈摘要

**痛点**：
- 升级即崩溃（google-vertex、gateway 启动、模块路径残留）
- 长时间运行后 zombie/锁/主线程阻塞退化
- 消息静默丢失（zero-payload dispatch、DM 丢弃、subagent 交付错乱）
- Docker / XDG 环境变量支持不完整

**满意**：
- 多数 P1/P0 Bug 被及时打上 `clawsweeper` 标签，进入维护流程
- 社区主动提供复现日志与 PR（如 #138669、#138579）

---

## 8. 待处理积压（维护者关注）

- **#69208** — Umbrella 跨频道 transcript Bug，15 评论未收敛，需架构级拆分
- **#115908** — Livelock 阻塞主线程，Beta blocker 潜在风险
- **#131807** — System-agent Codex session key 共享（已 CLOSED，但需验证回归）
- **#138272** — Android Talk "no live response owner"，跨 3 个版本仍存在
- **#90378** — Cron store JSON→SQLite 迁移静默，用户配置丢失风险
- **PR #138690** — Update run history 分享，XL 尺寸，长时间 `waiting on author`

---

**结论**：OpenClaw 处于**功能快速扩张期 + 稳定性债高企**的叠加阶段。建议维护者优先收敛 P0/P1 Regression（尤其 google-vertex 崩溃、Gateway 启动、主线程 livelock），再考虑下一版本功能迭代。社区贡献度高，但核心路径的回归测试覆盖仍显不足。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态正经历从**单体模型驱动**向**模块化组件化**的深刻转型。核心趋势是架构层面的解耦：提供者（Provider）标准化、MCP（Model Context Protocol）集成加速，以及安全隔离机制（如会话沙箱、OAuth 头注入）成为行业共识。与此同时，用户对**可配置性**与**持久化**的需求激增，推动项目从简单的对话引擎演进为具备长期记忆、跨渠道协同和多模态交互能力的复杂系统。整体来看，生态呈现出“底层框架成熟，应用层创新活跃”的双极态势。

## 2. 各项目活跃度对比

| 项目 | 今日 Issues 数 | 今日 PR 数 | Release 情况 | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 1,000 (500/500) | 1,000 | 无新版本 (最新 2026.8.1) | 中等偏上 (功能扩张与稳定性张力) |
| **NanoBot** | 5 | 29 | 无新版本 | 良好 (关注会话一致性与多渠道) |
| **Hermes Agent** | 47 | 50 | 无新版本 | 良好 (多 Agent 协作与稳定性) |
| **PicoClaw** | 23 | 29 | 无新版本 | 良好 (MCP 集成与渠道体验) |
| **NanoClaw** | 2 | 18 | 无新版本 | 稳定 (Provider 架构重构) |
| **NullClaw** | 1 | 1 | 无新版本 | 低活跃 (Firecrawl 端点硬编码) |
| **LobsterAI** | 4 | 33 | 2 版本发布 (2026.9.3/4) | 快速迭代 (浏览器交互与认证) |
| **Moltis** | 1 | 1 | 无新版本 | 低活跃 (外部 Agent 流式传输) |
| **CoPaw** | 28 | 36 | 无新版本 | 活跃 (Hub 多租户与任务状态) |
| **ZeptoClaw** | 0 | 0 | 无新版本 | 静默维护 |
| **ZeroClaw** | 34 | 50 | 无新版本 | 成熟 (Crates.io 发布与 WhatsApp 适配) |

## 3. OpenClaw 在生态中的定位

**优势**：OpenClaw 作为核心基础设施项目，在**Gateway 安全模型**、**会话状态一致性**及**消息投递可靠性**方面处于领先地位。其对 P0/P1 级 Regression（如 Google Vertex 崩溃、Gateway 启动失败）的响应速度较快，且在核心协议（如 OAuth 头注入）上具有显著的技术深度。

**技术路线差异**：与 Moltis（侧重外部 Agent 集成）和 CoPaw（侧重 QwenPaw Hub 生态）相比，OpenClaw 更强调**底层协议的标准化与安全隔离**。它更像是一个“操作系统级”的框架，提供通用的通信通道和状态管理，而其他项目则更多聚焦于特定应用场景的扩展（如 Moltis 的 AGY 流式传输，CoPaw 的 Hub 多租户）。

**社区规模对比**：OpenClaw 的活跃度最高（1,000 条总更新），反映出其作为核心组件的依赖度。然而，其健康度评估为“中等偏上”，表明虽然社区贡献度高，但在回归测试覆盖和 P0/P1 Bug 闭合速度上仍面临挑战，属于典型的“功能扩张 vs 稳定性修复”张力期。

## 4. 共同关注的技术方向

1.  **多渠道消息处理与一致性**：NanoBot、CoPaw 与 OpenClaw 均在攻克跨平台（Telegram、Slack、IRC）的消息分割与重组问题，确保用户体验的一致性。
2.  **安全与会话隔离**：OpenClaw（Gateway 隐藏敏感元数据）、NanoClaw（OOM 崩溃修复）、Moltis（外部 Agent 流式传输）均展示出对**最小权限原则**和**会话隔离**的重视，特别是在处理敏感数据和第三方集成时。
3.  **状态持久化与可恢复性**：Hermes Agent 与 PicoClaw 都在优化 Agent 状态管理（如 Loop 模式持久化、Task 状态恢复），CoPaw 则通过 Workspace 预加载实现工作区级性能优化。这些需求共同指向了智能体系统从“一次性对话”向“长期协作”演进的方向。

## 5. 差异化定位分析

| 维度 | OpenClaw | Moltis / CoPaw | PicoClaw / NanoClaw |
| :--- | :--- | :--- | :--- |
| **功能侧重** | **核心基础设施** (Gateway、Session、Message Bus) | **应用层生态** (Agent 集成、Hub 多租户、外部 Agent) | **接口与体验** (MCP 集成、渠道体验、配置管理) |
| **目标用户** | 构建底层平台的开发者 | 需要多租户/跨平台的企业级应用开发者 | 追求高吞吐/特定渠道的个人/小团队用户 |
| **技术架构** | 模块化、安全沙箱、协议标准化 | 扩展性优先、创作者生态驱动 | 性能优化、MCP 原生集成、UI 渲染优化 |
| **社区规模** | 大 (高活跃度，P0 Bug 多) | 中 (活跃迭代，功能需求多) | 小/中 (专注特定场景，更新频率高) |

OpenClaw 与 Moltis/CoPaw 形成了**“平台 vs 应用”**的天然对比：前者提供不可替代的通信骨干，后者提供丰富的生态扩展。PicoClaw 与 NanoClaw 则代表了**“接口层”**的优化，致力于降低开发者对底层复杂性的依赖。

## 6. 社区热度与成熟度

*   **快速迭代阶段**：Moltis、CoPaw、Hermes Agent 活跃度最高，PR 数量多且涉及多渠道、安全加固等关键问题，社区参与度强。LobsterAI 也在高频发布版本，显示出对用户体验的敏锐响应。
*   **质量巩固阶段**：OpenClaw 活跃但存在回归风险（如 Google Vertex 崩溃未清零），健康度评估为中等偏上。PicoClaw 与 NanoClaw 则处于稳定维护期，社区对其核心功能（如 OAuth 头注入、OOM 修复）反馈积极。
*   **低活跃期**：NullClaw 与 ZeptoClaw 几乎无动态，说明项目可能陷入“维护模式”或技术栈老化风险。

## 7. 值得关注的趋势信号

1.  **模块化与可插拔架构**：从 OpenClaw 的 Provider 契约重构，到 Moltis 的 AGY 流式传输，生态正向“插件化”演进，降低系统耦合度。
2.  **持久化与个性化**：CoPaw 的“跨会话持久化推理级别”与 OpenClaw 的“Session transcript livelock”修复，共同指向了**长期记忆**与**用户偏好固化**的需求，这是下一代智能体的核心竞争力。
3.  **安全合规化**：随着多租户和外部 Agent 的普及，安全加固（如 OAuth 头注入、Session 隔离）成为所有项目的共性挑战，特别是在处理第三方模型和数据时。
4.  **多模态与跨平台**：NanoBot 与 CoPaw 对 Telegram、Slack、IRC 等多渠道的支持，以及

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**：2026-09-05
**数据来源**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 仓库在 2026-09-04 至 2026-09-05 期间维持了**中等偏高的活跃度**：24 小时内共 5 条 Issue 更新、29 条 PR 更新，整体贡献节奏与过去数周保持一致。议题与 PR 结构呈现明显的"修复 + 新供应商接入 + 渠道体验优化"三轨并行特征，没有任何 Release 落地。社区重点关注 OpenCode session 兼容性、上下文与速度展示、WebUI 健壮性等可观测/可治理问题，整体项目处于**稳健推进**状态，未见阻塞性争议。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未检测到 Release/tag 更新。如需了解 0.3.0 后的最新动向，请关注 [Releases 页面](https://github.com/HKUDS/nanobot/releases)。

---

## 3. 项目进展（已合并/关闭的 PR）

今日共有 8 条 PR 被关闭（含合并），按重要性排列：

### 🔧 体验与可观测性
- **[#5660](https://github.com/HKUDS/nanobot/pull/5660) — `feat(webui): show model generation speed in context usage popover`**（已关闭）
  关闭 Issue [#5631](https://github.com/HKUDS/nanobot/issues/5631)，在 WebUI 的上下文使用弹窗中新增"模型生成速度（tokens/s）"。前端无需改动，后端已有数据可直接读取。

- **[#5639](https://github.com/HKUDS/nanobot/pull/5639) — `fix: stabilize session labels, TUI streaming, and pairing prompts`**（已关闭）
  修复三项 TUI 体验问题：项目会话句柄与标题居中、OpenTUI 0.5.3 → 0.5.10 升级（修复流式围栏代码可见性）、Markdown 前景色继承，避免 TUI 渲染中代码块"消失"。

- **[#5657](https://github.com/HKUDS/nanobot/pull/5657) — `refactor(webui): extract outbound wire encoding`**（已关闭）
  将 `recovery_state` / `turn_end` 等 WebSocket 出站载荷拆分为类型化编码器，统一 `send_payload` 原语。该重构降低后续 WebUI 协议变更的回归风险。

### 🚀 兼容性 / 稳定性
- **[#5662](https://github.com/HKUDS/nanobot/pull/5662) — `feat(providers): send x-opencode-session header for OpenCode session`**（Open，P1）
  为 `OpenAICompatProvider` 注入 `x-opencode-session` 头，关闭 [#5661](https://github.com/HKUDS/nanobot/issues/5661)。OpenCode 官方公告显示，自 2026-09-06 起缺失该头的请求将丢失 prompt-cache 优化并可能报错——**这是一项时效性硬要求**。

**整体评估**：今日合并的 PR 主要推进了 WebUI/渠道的可观测性、TUI 渲染稳定性，以及供应商兼容性，没有涉及核心 Agent 行为的改动，属于"打磨期"特征。

---

## 4. 社区热点

按评论数与互动密度排序：

| 排名 | 议题 | 评论 | 关注点 |
|------|------|------|--------|
| 🥇 | [#5567](https://github.com/HKUDS/nanobot/issues/5567) — 飞书渠道多轮回复整合为单条流式卡片 | 4 | 飞书用户体验一致性问题 |
| 🥈 | [#5631](https://github.com/HKUDS/nanobot/issues/5631) — WebUI 展示上下文与模型速度信息 | 2 | 已通过 [#5660](https://github.com/HKUDS/nanobot/pull/5660) 落地 |
| 🥉 | [#5644](https://github.com/HKUDS/nanobot/issues/5644) — WebUI 频道 locale 注册并发丢失 | 1 | 并发初始化回归 |
| 4 | [#5645](https://github.com/HKUDS/nanobot/issues/5645) — Current Time runtime context 在 0.3.0 缺失 | 1 | 版本回归 |

**背后诉求**：用户越来越在意"透明性"——既包括模型速度、上下文容量等元信息的可视化，也包括飞书/Telegram 等外部渠道中消息流的整洁度。 [#5567](https://github.com/HKUDS/nanobot/issues/5567) 是当前讨论热度最高的功能性诉求，建议维护者优先评估。

---

## 5. Bug 与稳定性

| 严重度 | 议题 | 描述 | 是否已有修复 |
|--------|------|------|--------------|
| 🔴 **高** | [#5661](https://github.com/HKUDS/nanobot/issues/5661) — OpenCode Zen/Go 缺 `x-opencode-session` 头 | 2026-09-06 起可能导致请求失败并丧失 prompt-cache | ✅ [PR #5662](https://github.com/HKUDS/nanobot/pull/5662) |
| 🟡 中 | [#5644](https://github.com/HKUDS/nanobot/issues/5644) — WebUI 频道 locale 并发丢失（如 `en`） | `loadChannelLocale()` 在 `await` 前未持有 registry 引用 | ❌ 未见 PR（24h 内） |
| 🟡 中 | [#5645](https://github.com/HKUDS/nanobot/issues/5645) — 0.3.0 缺失 Current Time runtime context | 0.2.2 默认添加，0.3.0 不再默认 | ❌ 未见 PR（24h 内） |
| 🟢 低 | [#5647 → #5648](https://github.com/HKUDS/nanobot/pull/5648) — WebUI 标题未在 envelope 缺 `webui` 标记时生成 | 关联修复 [#5658](https://github.com/HKUDS/nanobot/pull/5658) | ✅ [#5648](https://github.com/HKUDS/nanobot/pull/5648) + [#5658](https://github.com/HKUDS/nanobot/pull/5658) |

**重点提示**：[#5661](https://github.com/HKUDS/nanobot/issues/5661) 涉及外部供应商的硬截止日期，建议**优先合并 [#5662](https://github.com/HKUDS/nanobot/pull/5662)** 并考虑随下一个 patch 版本发布。

---

## 6. 功能请求与路线图信号

| 类别 | 议题/请求 | 实现进展 | 路线图可能性 |
|------|-----------|----------|--------------|
| **渠道体验** | [#5567](https://github.com/HKUDS/nanobot/issues/5567) 飞书流式卡片整合 | 无 | 高（讨论活跃） |
| **WebUI 可视化** | [#5631](https://github.com/HKUDS/nanobot/issues/5631) 上下文与速度展示 | [#5660](https://github.com/HKUDS/nanobot/pull/5660) 已合并 | ✅ 已纳入 |
| **新供应商接入** | [#5666](https://github.com/HKUDS/nanobot/pull/5666) aimlapi.com OpenAI 兼容网关 | PR 待审 | 中（外部合作提案） |
| **工具能力扩展** | [#5626](https://github.com/HKUDS/nanobot/pull/5626) `copy_file` / `move_file` 文件系统工具 | 待审 | 中（补齐工具矩阵） |
| **上下文治理** | [#5656](https://github.com/HKUDS/nanobot/pull/5656) 上下文压缩在 channel 暴露、`/compact` 命令 | 待审 | 高（结构化生命周期事件） |
| **观测性** | [#5504](https://github.com/HKUDS/nanobot/pull/5504) WebUI 模型重试状态（`NAN-34`） | 待审 | 高（内部追踪编号 + 持续更新） |
| **心跳机制** | [#4551](https://github.com/HKUDS/nanobot/pull/4551) `isolated_session` 共享会话配置 | 待审（自 2026-06 起） | 中 |
| **心跳成本优化** | [#4549](https://github.com/HKUDS/nanobot/pull/4549) `model_override` 配置 | 待审（自 2026-06 起） | 中 |
| **可观测追踪** | [#5520](https://github.com/HKUDS/nanobot/pull/5520) Codex 的 Langfuse tracing | 待审 | 中 |

**路线图信号**：上下文压缩可视化（`/compact` + lifecycle 事件）[#5656](https://github.com/HKUDS/nanobot/pull/5656) 与重试状态 [#5504](https://github.com/HKUDS/nanobot/pull/5504) 形成了一条清晰的"Agent 可观测性"主线，叠加 [#5660](https://github.com/HKUDS/nanobot/pull/5660) 已合并的速度展示，预示**下一个版本将以"可观测性与渠道体验"为主轴**。

---

## 7. 用户反馈摘要

- **[@yrxeva](https://github.com/HKUDS/nanobot/issues/5567) — 飞书用户体验**：当 agent 单次回复中夹杂工具提示、进度消息、最终回复时，飞书用户会看到"消息轰炸"，破坏了"一问一答"的对话模型。这是外部 IM 集成的**结构性痛点**，不仅影响美观，还可能干扰自动化工作流。

- **[@Ying-Zi66](https://github.com/HKUDS/nanobot/issues/5631) — WebUI 信息透明度**：用户希望在回答结束后或输入框附近直接看到模型速度与上下文使用情况，参考 DeepSeek Harness。该反馈已通过 [#5660](https://github.com/HKUDS/nanobot/pull/5660) 得到回应，体现了**社区 → 维护者 → 落地的短闭环**。

- **[@desku24](https://github.com/HKUDS/nanobot/issues/5645) — 0.3.0 回归**：从 0.2.2 升级至 0.3.0 后，`Current Time` runtime context 不再默认注入，导致依赖时间感知的对话产生异常。这是版本升级的"无声破坏"，建议维护者在 CHANGELOG 中显式标注。

- **[@top777](https://github.com/HKUDS/nanobot/issues/5644) — WebUI 国际化并发初始化**：用户在多语言频道并发启动时丢失 `en` 等 locale，反映了 i18n 注册逻辑对并发初始化不健壮。

- **整体满意度信号**：所有今日被关闭的 Issue 都获得了修复 PR，说明项目**响应效率良好**，没有出现"长期挂单无回应"的现象。

---

## 8. 待处理积压

以下 PR/Issue 已创建超过 30 天但仍未合并，建议维护者评估优先级：

| 编号 | 类型 | 主题 | 创建时间 | 状态 |
|------|------|------|----------|------|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | Feature | `heartbeat.model_override` 配置 | 2026-06-26 | OPEN |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | Feature | `heartbeat.isolated_session` 配置 | 2026-06-26 | OPEN |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | Bug fix | `fix(memory): preserve full consolidation input` | 2026-08-13 | OPEN |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) | Bug fix | `fix(agent): report background task failures` | 2026-08-18 | OPEN |
| [#5490](https://github.com/HKUDS/nanobot/pull/5490) | Regression fix | `fix(webui): clarify aggregate turn token usage` | 2026-08-22 | OPEN（标记 conflict） |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | Bug fix | `fix(ui): surface model retry status (NAN-34)` | 2026-08-24 | OPEN |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | Feature | Langfuse tracing for Codex | 2026-08-24 | OPEN |
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Feature | 飞书单条流式卡片整合 | 2026-08-27 | OPEN（评论 4 条） |

**重点提醒**：
- [#4549](https://github.com/HKUDS/nanobot/pull/4549) 与 [#4551](https://github.com/HKUDS/nanobot/pull/4551) 已挂单 **70 天**，属于心跳机制配置层的两块拼图，建议合并或关闭以释放维护者带宽。
- [#5490](https://github.com/HKUDS/nanobot/pull/5490) 已被标记 `conflict`，需要 rebase。
- [#5431](https://github.com/HKUDS/nanobot/pull/5431) 涉及后台任务错误"静默丢弃"，可能掩盖生产环境故障，建议优先审阅。

---

## 📌 维护者建议（基于今日数据）

1. **🔥 优先合并 [PR #5662](https://github.com/HKUDS/nanobot/pull/5662)**：OpenCode 硬截止日期为 2026-09-06，建议在下一个 patch release 同步发布。
2. **🔍 评估 [#5567](https://github.com/HKUDS/nanobot/issues/5567) 的方案设计**：4 条评论表明已有社区共识雏形。
4. **🧹 清理心跳配置类长期 PR（[#4549](https://github.com/HKUDS/nanobot/pull/4549)、[#4551](https://github.com/HKUDS/nanobot/pull/4551)）**：70 天挂单会消耗贡献者耐心。
5. **🪪 在 CHANGELOG 中标注 0.3.0 行为变更**：尤其是 `Current Time` runtime context 的默认注入策略变化（[#5645](https://github.com/HKUDS/nanobot/issues/5645)）。

---

*报告生成时间：2026-09-05 ｜ 数据范围：2026-09-04 至 2026-09-05 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



好的，这是根据您提供的 GitHub 数据生成的 Hermes Agent 项目动态日报。

---

### **Hermes Agent 项目动态日报**
**日期：** 2026-09-05
**数据来源：** NousResearch/hermes-agent GitHub 仓库

---

#### **1. 今日速览**
Hermes Agent 项目今日保持高活跃度，社区贡献与问题反馈均十分积极。过去24小时内新增及活跃 Issue 47 条，同时有 50 条 Pull Request 处于待合并状态，显示出强大的社区参与度和代码贡献意愿。项目当前无新版本发布，维护者可能正在集中处理积压的 PR 审核。整体健康度良好，但需关注几个高严重度的 P1 级 Bug 对用户体验的影响。

#### **2. 版本发布**
**无新版本发布。**

#### **3. 项目进展**
今日有 50 条 PR 处于待合并状态，无 PR 被合并或关闭，表明项目正处于一个密集的代码审查和集成阶段。这些 PR 覆盖了广泛的领域，预示着未来版本将包含重大改进：
- **核心功能增强：** 多个 PR 专注于 Agent 能力的提升，如 `feat(delegation)` 引入操作员定义的工作负载配置（#103346），以及 `feat(bot-mode)` 实现 Bot 在托管群聊中移交文件（#99159）。
- **关键 Bug 修复：** 包括修复 Bedrock 提供商在故障转移后的恢复问题（#102861）、上下文加载器对带点目录名的处理（#103347）、以及空闲 `/steer` 请求的静默滞留问题（#103342）。
- **新集成与模型支持：** 新增通过 Terradev MCP 进行 GPU 配置（#103340），并添加对 GPT-6 Astra 模型的 Copilot 回退支持（#103344）。
- **性能与用户体验优化：** 例如优化前缀缓存以减少压缩重建时的缓存丢失（#103331），以及修复 TUI 在特定情况下的崩溃循环（#103348）。

**总体迈进：** 项目正朝着更强大、更可靠、功能更丰富的方向迈进，尤其在多 Agent 协作、模型支持广度和系统稳定性方面。

#### **4. 社区热点**
今日讨论最活跃的议题集中在系统自动化和长期存在的架构问题上：
- **#66616 `[skills-index-watchdog] Skills index is stale or degraded`**：**（157条评论）** 这是目前最热的议题。技能索引的陈旧化问题影响了技能中心的可用性，社区对此高度关注，表明对技能生态系统的依赖和稳定性有较高期望。
- **#97681 `[Bot Group Chats should keep working after Desktop closes]`**：**（23条评论）** 用户强烈期望 Desktop 应用关闭后，由其启动的 Bot 群聊仍能继续运行。这反映了用户对后台持久化服务的刚性需求。
- **#102930 `[Desktop SSH mode: 401 on every API call]`**：**（6条评论，1个👍）** 一个新报告的高严重度 Bug，影响 SSH 远程模式下的桌面端使用，评论中可能包含对问题根源的深入技术讨论。

#### **5. Bug 与稳定性**
今日报告了多个 Bug，其中包含数个高严重度（P1）问题，部分已有对应的修复 PR。
- **严重（P1）**:
    - **#102930 / #103313 / #103054 `[Desktop SSH mode] 401 Unauthorized`**：桌面端在 SSH 模式下因会话令牌快照问题导致所有 API 调用失败。这是一个影响核心工作流的重大回归问题。**注意：Issue #103313 已标记为 `[CLOSED]`，可能已有修复方案。**
    - **#103339 `[SQLite state.db corruption]`**：在多配置文件主机上，状态数据库频繁损坏（4天内7次），根因是上游守卫机制失效，存在数据丢失风险。**（待修复）**
    - **#98022 `[hermes update] fleet restart loop`**：更新后舰队重启逻辑可能因陈旧的收据文件而无限循环。**（待修复）**
- **中等（P2）**:
    - **#102170 `[Agent confuses active gateway host]`**：配置文件同步时，Agent 可能错误识别当前网关主机。
    - **#96418 `[Loopback bind disables WS keepalive]`**：导致反向代理下 PTY 子进程泄漏的内存问题。
    - **#100610 `[No pip packages install from UI]`**：在容器化环境中，通过 UI 安装 Python 包失败。
- **低严重度（P3）**:
    - **#103221 `[OP_BIOMETRIC_UNLOCK_ENABLED]`**：环境变量未传递给 1Password 子进程。
    - **#102619 `[Too big for this machine] tag`**：对统一内存 Mac 的机型容量判断逻辑错误。
    - **#103257 `[cron/webhook exit 0]`**：命令失败时仍返回退出码 0，影响自动化脚本。

#### **6. 功能请求与路线图信号**
- **Bot 群聊持久化**：Issue #97681 和 PR #99159 表明，实现 Bot 在 Desktop 关闭后继续运行的功能是社区的强烈需求，且已有代码贡献，很可能被纳入下个版本。
- **GPT-6 Astra 集成**：Issue #103015 和多个相关 PR（#103344， #103246）显示了对支持 OpenAI 最新模型的迫切需求，相关兼容性工作正在积极推进。
- **外部进程提供商支持**：PR #103319 引入了对通用外部进程提供商的支持，这极大地扩展了 Hermes 的模型兼容性，属于重要的战略功能。
- **GPU 自主配置**：PR #103340 通过 MCP 集成 Terradev，使 Agent 能够自主申请 GPU 资源，这代表了向高级自动化场景迈出的重要一步。

#### **7. 用户反馈摘要**
- **痛点**：SSH 模式下的身份验证问题（#102930等）和状态数据库损坏（#103339）是当前最影响用户使用的严重问题。此外，对“模型太大”的误判（#102619）和 UI 安装包失败（#100610）也直接挫败了用户体验。
- **场景**：用户希望在不同主机（PC/Atlas）间同步配置文件时，Agent 能正确识别当前运行环境（#102170）；在容器或特定网络环境下，对 IPv6 的兼容性（#96261）和 pip 安装路径（#100610）有具体需求。
- **满意/不满意**：社区对 Bot 群聊和文件移交功能（#99159）的推进表示欢迎。但对技能索引的陈旧问题（#66616）持续关注，表明对功能稳定性的要求很高。

#### **8. 待处理积压**
- **长期未响应 Issue**：部分 Issue 评论数较少但已存在数月，可能缺乏维护者的直接响应，例如：
    - **#24740 `[Honcho] session titles override sessionStrategy setting`**（创建于2026-05-13）
    - **#9730 `[Docker sandbox] crash on hosts where --init is not permitted`**（创建于2026-04-14）
- **高优先级 PR 审积压**：50 条待合并的 PR 是一个显著的积压，需要维护者投入时间进行审查和合并，以尽快将社区贡献的功能和修复交付给用户。特别是那些修复 P1 级 Bug 的 PR，应优先处理。

---
**报告生成说明：** 本报告所有分析均基于提供的 GitHub 数据，客观呈现了项目在特定时间窗口内的动态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：** 2026-09-05  
**项目：** sipeed/picoclaw  
**数据周期：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，PicoClaw 项目保持高度活跃状态。共处理 **23 条 PR 更新**（其中 20 条已合并/关闭，3 条待合并），**4 条 Issue 更新**（全部为新开/活跃状态），但无新版本发布。今日开发重点集中在**文档完善**（新增 MCP 设置示例）、**稳定性修复**（MCP 失败处理、Telegram/Slack 频道问题）及**兼容性增强**（OpenAI 兼容 providers、xAI 支持）。整体项目健康度良好，社区参与度高，但存在部分长期积压的 Issue（如 IRC 长消息支持）需要关注。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 3.1 今日合并/关闭的重要 PR

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#1541](https://github.com/sipeed/picoclaw/pull/1541) | Fix | 合并 PR #1536/#1535/#1531：media tempdir 集中化、channel DoS 加固、DeepWiki badge | ✅ CLOSED |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix | 修复 MCP 连接失败导致 agent 循环挂起的问题 | ✅ CLOSED |
| [#1683](https://github.com/sipeed/picoclaw/pull/1683) | Enhancement | 为 openai_compat provider 实现 strict mode 兼容性，自动剥离非原生 OpenAI providers 的 `strict: true` 标志 | ✅ CLOSED |
| [#1855](https://github.com/sipeed/picoclaw/pull/1855) | Bug | 修复 Telegram 负数群组 ID 被错误识别的 bug | ✅ CLOSED |
| [#1854](https://github.com/sipeed/picoclaw/pull/1854) | Bug | 实现 occurrence-aware tool call id 清理，解决重复 ID 导致的 400 错误 | ✅ CLOSED |
| [#1858](https://github.com/sipeed/picoclaw/pull/1858) | Bug | 为 Ollama 等 OpenAI 兼容 providers 添加 thinking/reasoning 回退支持 | ✅ CLOSED |
| [#1860](https://github.com/sipeed/picoclaw/pull/1860) | Bug | 添加 Azure AI Foundry 主机识别，支持 Prompt Caching 和 Native Search | ✅ CLOSED |
| [#2088](https://github.com/sipeed/picoclaw/pull/2088) | Bug | 为 open-by-default bots 添加安全审计，防止未授权访问 | ✅ CLOSED |
| [#2016](https://github.com/sipeed/picoclaw/pull/2016) | Bug | 改进 context overflow 检测和分类，增强错误恢复能力 | ✅ CLOSED |
| [#2090](https://github.com/sipeed/picoclaw/pull/2090) | Bug | 修复 Telegram 流式传输中的冗余草稿和路由问题 | ✅ CLOSED |
| [#2089](https://github.com/sipeed/picoclaw/pull/2089) | Bug | 解决 Slack mention 竞态条件和 chatID 逻辑统一 | ✅ CLOSED |
| [#2091](https://github.com/sipeed/picoclaw/pull/2091) | Bug | 修复 Feishu 群组 mention 检测（通过探测 bot name） | ✅ CLOSED |
| [#2014](https://github.com/sipeed/picoclaw/pull/2014) | Bug | 在 token 估算中包含 SystemParts，添加 reasoning guards | ✅ CLOSED |
| [#2240](https://github.com/sipeed/picoclaw/pull/2240) | Enhancement | 为 GitHub Copilot provider 添加 stdio transport 支持 | ✅ CLOSED |
| [#2092](https://github.com/sipeed/picoclaw/pull/2092) | Bug | 避免 Telegram 流式编辑超时时的重复消息 | ✅ CLOSED |
| [#2260](https://github.com/sipeed/picoclaw/pull/2260) | Enhancement | 添加 xAI 兼容支持 | ✅ CLOSED |
| [#2298](https://github.com/sipeed/picoclaw/pull/2298) | Bug | exec 脚本预检失败时安全关闭 | ✅ CLOSED |
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | Bug | 为 openai_compat 添加流式 usage 支持 | ✅ CLOSED |

### 3.2 待合并的 PR

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | Docs | 添加 Parallel Search MCP 设置示例，支持无 API key 的网页搜索和页面提取 | ⏳ OPEN |
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) | Docs | 添加 Pilot MCP 设置示例 | ⏳ OPEN |

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 点赞 | 状态 |
|------------|------|--------|------|------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | 10 | 0 | OPEN |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input is very laggy when history has a little bit long | 9 | 2 | OPEN |

**分析：**
- **IRC 长消息支持**（#3287）：用户报告 IRC 默认 512 字节限制导致长消息被自动分割，PicoClaw 应将分割后的消息视为单一完整消息。这是一个**长期功能需求**（创建于 2026-07-22，至今 45 天），获得较多讨论，表明 IRC 频道用户对此功能有较强需求。
- **Web UI 卡顿问题**（#3281）：用户报告当聊天历史较长时，输入框出现严重卡顿。这是**用户体验问题**，可能与前端渲染性能或状态管理有关，需优先关注。

### 4.2 新功能提案

| Issue 编号 | 标题 | 评论数 | 点赞 | 状态 |
|------------|------|--------|------|------|
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Add support for OpenAI compatible providers | 0 | 0 | OPEN |

**分析：** 用户请求添加自定义 OpenAI 兼容 providers 支持（如 9Router），以实现自托管路由器集成。该需求与已合并的 PR #1683（strict mode 兼容性）和 #1858（thinking/reasoning 回退）形成呼应，表明 OpenAI 兼容 providers 功能正在逐步完善。

---

## 5. Bug 与稳定性

### 5.1 今日报告的 Bug

| Issue 编号 | 标题 | 严重程度 | 状态 | 是否有 Fix PR |
|------------|------|----------|------|---------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input is very laggy | 🟡 Medium | OPEN | ❌ 无 |
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ channel fails with 401 "Authorization参数格式错误" | 🔴 High | OPEN | ❌ 无 |

**详细说明：**

1. **QQ 频道 401 错误**（#3365）：
   - **环境：** Orange Pi 3B (RK3566)，picoclaw nightly 0.3.1，botgo v0.2.1，resty >= v2.17
   - **根因：** botgo v0.2.1 与 resty v2.17.1 之间的兼容性问题导致 Authorization 参数格式错误
   - **影响：** QQ 频道用户完全无法使用
   - **建议：** 考虑锁定 resty 版本或等待 botgo 更新

2. **Web UI 输入卡顿**（#3281）：
   - **环境：** PicoClaw Web，v0.3.1，Go 1.25.11
   - **症状：** 聊天历史增加后，输入框严重卡顿
   - **建议：** 检查前端状态管理，考虑虚拟滚动或历史记录分页

### 5.2 今日修复的稳定性问题

| 相关 PR | 修复内容 |
|---------|----------|
| #3337 | MCP 连接失败时 agent 不再挂起，提升服务可用性 |
| #1855 | Telegram 负数群组 ID 识别错误修复 |
| #2090/2092 | Telegram 流式传输冗余消息问题修复 |
| #2089 | Slack mention 竞态条件修复 |
| #2088 | open-by-default bots 安全审计加固 |

---

## 6. 功能请求与路线图信号

### 6.1 用户提出的新功能需求

| Issue 编号 | 功能描述 | 可行性分析 | 建议优先级 |
|------------|----------|------------|------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息支持（合并分割消息） | 需要解析 IRCv3 消息标签，技术可行 | 🟡 Medium |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | 自定义 OpenAI 兼容 providers | 与现有 openai_compat 架构兼容，可行性高 | 🟢 High |

### 6.2 路线图信号

基于今日合并的 PR 分析，项目正在向以下方向演进：
- **多渠道消息处理稳定性**：持续修复 Telegram、Slack、Feishu 等渠道的 edge cases
- **OpenAI 兼容生态扩展**：xAI 支持、strict mode 兼容性、流式 usage 支持
- **MCP 集成完善**：Pilot MCP、Parallel Search MCP 文档示例
- **安全加固**：exec 脚本预检、open-by-default bots 安全审计

---

## 7. 用户反馈摘要

### 7.1 用户痛点

| 痛点 | 相关 Issue | 影响范围 |
|------|------------|----------|
| QQ 频道完全无法使用（401 错误） | #3365 | QQ 频道用户 |
| Web UI 输入卡顿 | #3281 | Web UI 用户 |
| IRC 长消息被错误分割 | #3287 | IRC 频道用户 |

### 7.2 用户使用场景

- **跨平台消息聚合**：用户期望通过 PicoClaw 统一处理 Telegram、Slack、Feishu、QQ、IRC 等多个渠道
- **自托管 LLM 集成**：用户希望支持更多自托管模型（如 Ollama、vLLM、DeepSeek）及自定义 providers
- **MCP 生态扩展**：用户积极贡献 Pilot、Parallel Search 等 MCP 集成文档

### 7.3 用户满意度

| 正面反馈 | 相关 PR |
|----------|---------|
| MCP 功能持续完善 | #3337, #3367, #3368 |
| OpenAI 兼容 providers 功能增强 | #1683, #1858, #2522 |
| 多渠道消息处理改进 | #2090, #2089, #2091 |

---

## 8. 待处理积压

### 8.1 长期未响应的 Issue（>30 天）

| Issue 编号 | 标题 | 创建日期 | 天数 | 评论数 | 优先级建议 |
|------------|------|----------|------|--------|------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | 2026-07-22 | 45 天 | 10 | 🟡 需官方响应 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input is very laggy | 2026-07-21 | 46 天 | 9 | 🔴 需优先处理 |

### 8.2 建议关注

1. **Issue #3281（Web UI 卡顿）**：已讨论 9 条评论，用户反馈强烈，建议优先安排复现和修复
2. **Issue #3365（QQ 401 错误）**：今日新报告，涉及依赖兼容性问题，需评估影响范围
3. **Issue #3287（IRC 长消息）**：长期需求，建议给出官方立场（接受/拒绝/计划中）

---

## 总结

**项目健康度：** 🟢 良好  
**活跃度评估：** 极高（23 条 PR 更新，4 条 Issue 更新）  
**建议行动项：**
1. 优先处理 Issue #3281（Web UI 卡顿）
2. 评估 Issue #3365（QQ 401）影响并发布临时方案
3. 对长期积压的 #3287 给出官方回应
4. 推进 #3368、#3367 文档 PR 合并

---

*报告生成时间：2026-09-05*  
*数据来源：GitHub sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报  
**日期：2026-09-05**

---

## 1. 今日速览

NanoClaw 项目过去 24 小时活跃度高涨，共有 **2 条新 Issues 开启、18 条 PR 更新（15 条待合并）**，显示出开发社区持续投入。核心团队聚焦 **Provider 合约重构、Agent 内存模型优化及安全 hardened skills**，推动项目向模块化与安全化演进。但 **#3716 报告的 OOM 崩溃问题仍未被修复，是本次报告最严峻的风险点**。

---

## 2. 版本发布

暂无新版本发布。

---

## 3. 项目进展

### 今日合并 / 关闭的 PR：

- **PR #2232 / #2231** 已关闭（历史 PR，最新合并于 2026-09-04）  
  - 属于 `chat-sdk-bridge` 模块的两项修复/特性，提升适配器兼容性及原始消息发送能力，不影响主干功能，属于维护性更新。

> 项目今日共更新 18 条 PR，其中仅有 3 条被合并或关闭，说明 **大部分内容仍处于 review与调试阶段**，属于高投入、未成熟的开发阶段。

---

## 4. 社区热点

### 🔥 最热门 Issue：

#### [#3716](https://github.com/nanocoai/nanoclaw/issues/3716)  
- 标题：*PreCompact conversation-archive writes an unbounded, full-rewrite file per firing — real cause of a production OOM crash loop*
- 作者：DawoudIO  
- 风险等级：⚠️ 极高  
- 简评：用户在生产环境中遭遇持续 OOM 崩溃，根源是 `PreCompact` 钩子每次触发都完整重写整个对话归档文件，且未设置上限或清理机制，导致磁盘空间与内存消耗无上限。
- 当前无 fix PR 提交，亟需核心团队介入定位并优先处理。

### 💬 高互动 PR：

#### [#3718](https://github.com/nanocoai/nanoclaw/pull/3718)  
- 标题：*fix(a2a): preserve verified sender identity and command boundaries*
- 作者：Koshkoshinsk  
- 作用：改进 Agent-to-Agent 通信链路鉴权，防止消息伪造。

#### [#3717](https://github.com/nanocoai/nanoclaw/pull/3717)  
- 标题：*fix(agent-runner): escape payloads embedded in composed prompt blocks*  
- 作者：petrolette  
- 作用：修复提示构造中嵌入负载的注入漏洞，提升 prompt 注入防御能力。

这两者均为**安全性与鉴权机制的加强**，体现项目在 A2A 架构下的规范化进程。

---

## 5. Bug 与稳定性

| 编号 | 类型 | 严重程度 | 是否已 fix | 链接 |
|------|------|-----------|---------------|------|
| [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | 崩溃 / OOM | 高 | ❌ 否 | [Issue #3716](https://github.com/nanocoai/nanoclaw/issues/3716) |
| [#3717](https://github.com/nanocoai/nanoclaw/pull/3717) | 注入漏洞 | 中 | ✅ 是（PR） | [PR #3717](https://github.com/nanocoai/nanoclaw/pull/3717) |

---

## 6. 功能请求与路线图信号

### 当前热门功能趋势：
- `ncl skills` 系列功能持续完善（如 `add-zapier-tool`, `add-cursor`, `list/plan/apply`）
- `Provider Contract` 架构正在统一，覆盖 `opencode`, `codex`, `cursor` 等主流 agent 提供方
- `speed` 推理属性、A2A 身份校验、MCP 集成成为近期关键方向

### 判读方向：
从 PR 中可见项目正在迈向：
- **模块化 Provider 架构**
- **统一 Skills 安装流程 + 权限管控**
- **增强容器安全与配置转发机制**

这些都指向未来版本将聚焦 **“安全 + 可配置 + 可插拔”** 的设计目标。

---

## 7. 用户反馈摘要

从 Issue 评论及 PR 讨论中可提炼以下用户痛点：

| 痛点 | 表现 | 来源 |
|------|------|------|
| 配置未生效 | Operator 设置的环境变量未传递至容器内 | [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) |
| 存储爆炸 | PreCompact 写满磁盘导致服务崩溃 | [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) |
| 工具集成困难 | 需要手动接入第三方 MCP 服务（如 Zapier） | [#3715](https://github.com/nanocoai/nanoclaw/pull/3715) |

用户普遍希望：**更可靠的配置传递、更智能的资源管理、更便捷的插件接入能力**。

---

## 8. 待处理积压

### ⏳ 长期未响应的 Issue / PR：

#### [#3714](https://github.com/nanocoai/nanoclaw/issues/3714)
- **问题**：Operator 环境变量未正确传递至容器
- **状态**：新 Issue，尚未分配作者跟进
- **建议**：建议优先处理以保障运维配置一致性

#### [#3715](https://github.com/nanocoai/nanoclaw/pull/3715)
- **标题**：feat: add Zapier MCP tool skill
- **进展**：PR 已提交，需 reviewer 审核
- **建议**：合并后可显著提升非技术用户集成体验

---

## 📊 总结

| 项目指标 | 数据 |
|----------|------|
| 总 Issues | +2（当前共 3718 条） |
| 总 PR | +18（当前累计约 3722 条） |
| 活跃贡献者数 | 明显增加（zvi-fried、glifocat、Koshkoshinsk 等多人并进） |
| 健康度评估 | ⚠️ 高活跃但稳定性存疑 |

> ✅ **建议**：核心维护者应集中处理 [#3716](#3716) 的 OOM 问题；同步推进 [#3714](#3714) 的容器配置透传机制。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 - 2026-09-05

## 1. 今日速览
2026年9月5日，NullClaw 项目今日整体活动较低，仅记录了一次旧issue的更新。该issue涉及自托管实例的Firecrawl搜索端点硬编码问题，但尚未产生新的代码提交或版本发布。项目保持稳定运行，但开发进度缓慢，缺乏近期显著的功能迭代或修复工作。

## 2. 版本发布
本日无新版本发布。项目目前处于维护状态，未有任何新版本对应当前日期的发布。

## 3. 项目进展
项目进展方面今日无重要PR合并或关闭，开发进度停滞。由于过去24小时没有新PR更新，项目整体向前迈进幅度有限，主要依赖于后续对Issue #993的解决方案实现。

## 4. 社区热点
当日最活跃的讨论点是 #993  issue，该 issue 聚焦于自托管实例的 Firecrawl 搜索端点硬编码问题。用户希望能够灵活配置搜索端点以适应不同部署环境，目前该 issue 仍处于开放状态，等待相关 PR 实现。该话题反映了用户在生产环境部署时的实际需求。

## 5. Bug 与稳定性
本日未报告新的系统级 Bug 或崩溃问题。现有唯一的活跃 issue #993 属于功能改进而非故障，未导致当前版本的不稳定性。整体稳定性维持正常，无需紧急修复。

## 6. 功能请求与路线图信号
Issue #993 提出的功能需求是让 Firecrawl 搜索端点可配置化，这将直接影响自托管实例的灵活性。若该需求能在下一版本实现，将提升项目的实用性和部署灵活性。目前项目路线图显示对搜索提供商的扩展感兴趣，但具体实现取决于 Issue #993 的解决情况。

## 7. 用户反馈摘要
用户主要关注点集中在 Issue #993 中关于 Firecrawl 搜索端点硬编码的问题。用户希望在自托管环境中能够自定义搜索服务地址，以支持私有化部署场景。目前缺乏针对此需求的解决方案，用户对项目的可定制性存在顾虑，期待未来版本提供相应的配置选项。

## 8. 待处理积压
长期未解决的关键 issue #993 是当前项目积压的主要任务。该 issue 需要开发团队优先处理，以确保自托管实例的灵活性。此外，项目历史上存在多个未响应的 issue 需要定期跟踪，确保社区支持的连续性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-05）

## 1. 今日速览

LobsterAI 今日活跃度较高，过去 24 小时共处理 **33 条 PR 更新**（合并/关闭 28 条，待合并 5 条），新增 Issue 1 条。版本发布节奏紧凑，连续推送 **2026.9.4** 与 **2026.9.3** 两个版本，功能迭代聚焦浏览器交互增强、订阅恢复流程与认证引导优化。核心存储层缺陷 Issue #1071 已标记 stale 但仍未关闭，技术债务存在积压风险。项目整体处于高频功能交付期，但需关注待合并 PR 的质量把控与长期未决问题的处理优先级。

## 2. 版本发布

### LobsterAI 2026.9.4
- **恢复交互式应用内浏览器**：通过 PR #2602 重新启用浏览器内交互能力
- **安装与退出确认**：通过 PR #2609 新增安装前确认及退出前确认机制，防止误操作
- **发布流程完善**：发布相关功能优化（PR 详情截断，见 #2618）
- 🔗 [Release 2026.9.4](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.9.4)

### LobsterAI 2026.9.3
- **未认证聊天登录提示**：通过 PR #2573 在未认证用户尝试聊天时显示欢迎弹窗
- **新增交互式应用内浏览器**：通过 PR #2574 首次引入浏览器内交互功能
- **引导流程优化**：新手引导相关改进（feat(onboarding)）
- 🔗 [Release 2026.9.3](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.9.3)

## 3. 项目进展

| PR | 状态 | 内容概述 | 链接 |
|---|---|---|---|
| #2618 | CLOSED | Release/2026.9.4 版本发布流程推进 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2618) |
| #2613 | CLOSED | 订阅恢复引导与资源状态同步，完善商业化恢复流程 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2613) |
| #2612 | CLOSED | 登录刷新期间保留模型显示，避免认证状态切换时 UI 闪烁 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2612) |
| #2615 | CLOSED | 支持 Unicode Windows 安装路径，解决国际化路径兼容问题 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2615) |
| #2614 | CLOSED | 修正测试模式服务端 API 地址，配置修复 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2614) |
| #2616 | CLOSED | 限定技能审计时长至 90 秒，防止 CI 无界阻塞 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2616) |

## 4. 社区热点

- **Issue #1071**：SQLite 存储层三个数据完整性/可靠性缺陷（CASCADE 失效、save() 非原子写、storeInitPromise 超时），创建于 2026-03-30，已标记 stale 但未关闭，反映长期技术债务问题
  🔗 [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071)
- **PR #2617**：应用内浏览器登录与标签页控制改进，目前处于 OPEN 状态，关注度较高
  🔗 [PR #2617](https://github.com/netease-youdao/LobsterAI/pull/2617)

## 5. Bug 与稳定性

**严重**
- **#1071 SQLite 数据完整性缺陷**：CASCADE 失效致孤儿消息累积、save() 非原子写致崩溃损坏、storeInitPromise 超时后永久故障（数据丢失风险）。暂无修复 PR，需优先处理。
  🔗 [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071)

**已修复**
- Unicode Windows 安装路径问题 → PR #2615 已合并
- 技能审计无界耗时 → PR #2616 已合并
- 登录刷新模型显示错乱 → PR #2612 已合并

## 6. 功能请求与路线图信号

- **应用内交互浏览器**：PR #2617（待合并）+ PR #2602（已合并）+ PR #2574（已合并），浏览器能力持续增强
- **订阅恢复流程**：PR #2613 已合并，支持分享文件/部署站点恢复

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-05

---

## 1. 今日速览

Moltis 在 2026-09-05 整体活跃度较低，处于"轻量维护日"状态。过去 24 小时内仅有 1 条新 Issue 和 1 条 PR 更新，且均未进入合并/关闭阶段，无新版本发布。值得注意的是，PR #1258 引入了一条全新的外部 Agent 流式传输通道，而 Issue #1259 则反映出用户对跨会话持久化推理级别配置的迫切需求——两者均围绕"AI Agent 个性化与外部生态集成"展开，显示出项目下一阶段的产品演进方向。

---

## 2. 版本发布

本日内无新版本发布，跳过此章节。

---

## 3. 项目进展

本日内无已合并/关闭的 PR，项目代码主分支今日无实质性推进。

仅有一条待合并 PR 处于活跃状态：

- **PR #1258** [feat(external-agents): add direct AGY streaming](https://github.com/moltis-org/moltis/issues/1258) — 由社区贡献者 GTanger 提交。该 PR 旨在为官方 `agy` CLI 增加一等流式传输通道，复用已有 Google OAuth 会话（避免依赖 Gemini CLI 或 API Key），并将其版本化的 `stream-json` 输出转译为 Moltis 的文本、推理、通知、工具、子 Agent、用量及可恢复会话事件。该工作若合并，将显著降低 Moltis 与 AGY 集成的接入门槛，强化其在"多 Agent 编排生态"中的枢纽地位。

---

## 4. 社区热点

今日互动度整体偏低，无高评论/高反应数议题。以下为当日值得关注的两个讨论入口：

- **[Issue #1259 - Configurable default reasoning/thinking level](https://github.com/moltis-org/moltis/issues/1259)**：提出"跨会话持久化默认推理级别"的功能诉求，本质是用户希望减少每次开启新会话时重复调参的成本，反映了深度用户对"个人 AI 助手应具备长期记忆与个性化偏好"的期望。
- **[PR #1258 - feat(external-agents): add direct AGY streaming](https://github.com/moltis-org/moltis/issues/1258)**：聚焦"AI 助手→外部 Agent"边界打通，是项目外部生态战略的具体落地。

**诉求分析**：两者均围绕"减少重复操作 + 扩展可组合性"，体现出用户对"无缝、可持续、可扩展"AI 体验的核心期待。

---

## 5. Bug 与稳定性

本日无新增 Bug 报告、崩溃记录或回归问题相关 Issue。仓库稳定性信号良好，建议继续观察后续 24–72 小时是否出现与 PR #1258 流式传输相关的并发/重连类缺陷。

---

## 6. 功能请求与路线图信号

**新提出的功能请求：**

- **[Issue #1259] 可配置默认推理/思考级别（跨会话持久化）**
  - 链接：https://github.com/moltis-org/moltis/issues/1259
  - 标签：`enhancement`, `Feature`
  - 路线图纳入可能性评估：**中高**。该需求符合 Moltis 作为"个人 AI 助手"的产品定位（用户偏好应被持久记忆），实现成本相对可控（涉及配置文件 + 会话启动逻辑），预计可在 1–2 个迭代周期内响应。

**与已有 PR 的协同信号：**

- PR #1258（AGY 直接流式传输）与 Issue #1259（默认推理级别）虽属不同主题，但共同映射出 Moltis 的两条产品主线：
  1. **个人化纵深**（持久化偏好 → 用户粘性）
  2. **外部生态横向扩展**（AGY 集成 → 平台化）

---

## 7. 用户反馈摘要

由于今日 Issue #1259 尚无评论，PR #1258 也无审核互动，目前缺乏可直接引用的用户文字反馈。可观察到的隐含信号包括：

- **使用场景**：用户期望将 Moltis 作为长期、可定制的个人助理，而非"每次重新配置"的通用工具。
- **痛点**：默认参数需要在每次会话中重新设置，未实现真正的"个性化"承诺。
- **生态诉求**：现有 Gemini CLI 接入路径存在额外认证/API Key 成本，用户希望走更轻量的 OAuth 通道。

---

## 8. 待处理积压

目前仓库无明显长期未响应的重要 Issue/PR，但建议维护者关注以下两项的响应时效，避免积压：

- **[PR #1258](https://github.com/moltis-org/moltis/issues/1258)**：作为外部生态扩展的关键 PR，建议在 48 小时内安排首次 review 反馈，防止社区贡献者流失积极性。
- **[Issue #1259](https://github.com/moltis-org/moltis/issues/1259)**：建议维护者先以 `acknowledged` 标签回应作者，确认该需求是否进入产品 Backlog，降低重复提案概率。

---

**项目健康度总评**：🟡 **中等活跃**。代码层推进暂缓，但产品方向信号清晰、外部生态战略落地中。维护节奏与社区响应速度为当前主要观察指标。

*日报由开源项目动态自动生成，数据来源：GitHub Issues & Pull Requests，截至 2026-09-05。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope-ai/QwenPaw) 项目动态日报 – 2026‑09‑05**  

---

### 1. 今日速览  
- 项目在过去 24 小时内保持高活跃度：共计 **28 条 Issue 更新**（新开/活跃 18，已关闭 10）以及 **36 条 PR 更新**（待合并 22，已合并/关闭 14）。  
- 未发布新版本，核心工作集中在 bug 修复、性能优化和功能增强上。  
- 社区讨论聚焦于 **QwenPaw Hub 多租户版（2.2.0）的后续规划**、**局域网 LLM 连接不稳定**以及 **任务执行中循环模式状态丢失** 等热点议题。  
- 总体健康度良好：已有多个关键 Bug 被定位并有对应的修复 PR 进入审查阶段，功能需求也在积极讨论中，预计将在后续迭代中落地。

---

### 2. 版本发布  
> **无新版本发布**（过去 24 小时内没有标记的 Release）。  

---

### 3. 项目进展（今日合并/关闭的重要 PR）  

| PR 编号 | 标题 | 状态 | 主要贡献 | 链接 |
|--------|------|------|----------|------|
| **#7183** | feat(skills): add workspace‑scoped preload configuration | **CLOSED** | 为工作区引入可选的 Skill 预加载策略（`on_demand` 默认，`preload` 用于常用/核心 Skill），减少首次对话时的工具调用开销。 | https://github.com/agentscope-ai/QwenPaw/pull/7183 |
| **#7504** | fix(mcp): enforce per‑tool whitelist on the agent runtime path | **CLOSED** | 在运行时路径上强制执行 MCP 工具白名单，防止被禁用的工具仍然被调用，提升安全性。 | https://github.com/agentscope-ai/QwenPaw/pull/7504 |
| **#7560** | fix(console): preserve selected loop mode query | **CLOSED** | 修复了在切换页面或刷新后 Loop 模式选择被重置为“默认”的问题，使得用户手动选择的目标/任务循环模式得以持久化。 | https://github.com/agentscope-ai/QwenPaw/pull/7560 |
| **#7502** | feat(console): redesign sidebar and settings experience | **OPEN**（但已有大量评论，接近合并） | 重新设计 Console 侧边栏与设置体验，保留插件注册槽位，提升可配置性与使用流程。 | https://github.com/agentscope-ai/QwenPaw/pull/7502 |
| **#7486** | feat(creator) 1.1.2: runtime notification bus … | **OPEN** | 引入运行时通知总线、异步委派、多时间线 A/B 比较、媒体生成调度等 Creator 插件功能，为高级工作流奠定基础。 | https://github.com/agentscope-ai/QwenPaw/pull/7486 |

**整体进展**：今日合并的三个 PR（#7183、#7504、#7560）分别在 **Skill 预加载、MCP 安全白名单以及交互状态持久化** 三个核心方面取得了实质性进展，为后续版本的稳定性和易用性奠定基础。其余开放的大型功能 PR（如 #7486、#7502）正在审查中，预计将在下一个里程碑中合并。

---

### 4. 社区热点（评论最多、反应最活跃的 Issues/PRs）  

| 项目 | 类型 | 评论数 | 👍 数 | 主要讨论点 | 链接 |
|------|------|--------|------|------------|------|
| **#7318** | Issue（question） | 22 | 3 | QwenPaw Hub 多租户版（2.2.0）发布后，社区期待的下一步功能（如细粒度权限、统一计费、插件市场等）。 | https://github.com/agentscope-ai/QwenPaw/issues/7318 |
| **#7505** | Issue（question） | 12 | 0 | 局域网 LLM SERVER（LM Studio）频繁出现 client disconnect，导致重试超时。用户分享了环境、错误日志并询问是否需要调整超时或重连策略。 | https://github.com/agentscope-ai/QwenPaw/issues/7505 |
| **#6921** | Issue（bug，已关闭） | 12 | 0 | 多步骤任务在输出 “Now X.Y, … Let me do all three.” 后自动停止，需手动输入 “继续” 才能恢复。已在 #7560 等 PR 中得到部分缓解。 | https://github.com/agentscope-ai/QwenPaw/issues/6921 |
| **#7486** | PR（feature） | — | — | Creator 插件的大规模功能扩展（通知总线、异步委派、媒体生成调度等），吸引了众多开发者关注。 | https://github.com/agentscope-ai/QwenPaw/pull/7486 |
| **#7502** | PR（feature） | — | — | Console 侧边栏与设置的全面 redesign，社区讨论侧边栏可配置性与工作流切换的便利性。 | https://github.com/agentscope-ai/QwenPaw/pull/7502 |

**热点背后的诉求**：  
- **多租户 Hub**：团队协作、资源隔离和计费成为社区的首要需求。  
- **局域网 LLM 稳定性**：用户期望更健壮的重连机制和可配置的超时/重试策略。  
- **任务状态持久化**：避免频繁手动 “继续” 提升长任务体验。  
- **Creator 生态**：对多媒体生成、工作流编排和插件市场的期待明显上升。  
- **Console 易用性**：侧边栏与设置的一致性和可定制性直接影响日常使用效率。

---

### 5. Bug 与稳定性（今日新报告 Bug，按严重程度排序）  

| 严重程度 | Issue 编号 | 标题 | 关键描述 | 是否有对应 fix PR | 链接 |
|----------|------------|------|----------|-------------------|------|
| **高** | #7559 | 任务执行中时我通过对话框新发消息触发了409报错 | 在任务执行期间发送新消息导致 HTTP 409（任务已存在），期望应进入消息队列而非直接错误。 | 暂无直接 PR，但 #7560（保存 Loop 模式）和 #7504（MCP 白名单）间接相关。 | https://github.com/agentscope-ai/QwenPaw/issues/7559 |
| **高** | #7554 | Shell tool child processes inherit the controlling console stdin on Windows | 子进程继承父控制台 stdin 导致读取阻塞，Ctrl+C 失效。 | 尚未有专门 fix PR，需关注后续补丁。 | https://github.com/agentscope-ai/QwenPaw/issues/7554 |
| **中** | #7549 | Model requests whose `input` ends with an assistant text turn are rejected by Volcengine Ark Responses API — 400 "MissingParameter: partial" | 输入以 assistant 角色消息结尾时，Volcengine Ark API 返回 400。 | 暂无 PR，建议在请求构造层加入角色校验。 | https://github.com/agentscope-ai/QwenPaw/issues/7549 |
| **中** | #7469 | ReMe background embedding/indexing job fails — Dependency as_embedding:default accessed before start() | 后台长期记忆嵌入作业因依赖未启动而静默失败。 | 无直接 PR，需检查服务启动顺序。 | https://github.com/agentscope-ai/QwenPaw/issues/7469 |
| **低** | #7534 | Feishu session: queue consumer stays alive & stuck → session silently unresponsive | 飞书会话在处理高优先级卡片后 consumer 不再拉取下一条消息，导致会话假死。 | 无 PR，需调研消费者生命周期管理。 | https://github.com/agentscope-ai/QwenPaw/issues/7534 |
| **低** | #7548 | 对话切换或重启后导航记录丢失 | 导航历史记录在会话切换或重启后偶尔丢失。 | 无 PR，可能与历史数据读取逻辑有关。 | https://github.com/agentscope-ai/QwenPaw/issues/7548 |

**总体稳定性**：今日新报告的高严重性 Bug 主要围绕 **任务并发冲突（409）** 与 **Windows 下子进程 stdin 继承** 两方面，均影响核心交互流程。社区已有相关的状态保持 PR（#7560）在审查中，建议优先合并以缓解 409 问题；其余 Bug 需要后续专门补丁。

---

### 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue/PR | 是否有对应实现 PR | 预计纳入版本 | 备注 |
|----------|---------------|-------------------|--------------|------|
| **工作区 Scope Skill 预加载** | #7182（Issue） / #7183（PR） | ✅ 已合并（#7183） | 2.2.0 后续补丁 | 已实现，可直接使用。 |
| **MCP 驱动器政策拒绝时的后备链** | #7556（Issue） | ❌ 尚无 PR | 可能进入 2.3.x | 需要在驱动层面实现 fallback 机制。 |
| **可插拔关系型存储后端（PostgreSQL/MySQL）** | #7558（Issue） | ❌ 尚无 PR | 目标 2.4.x（针对 WAL 在网络文件系统的限制） | 社区对持久化层的需求强烈，建议启动探索性 spike。 |
| **Skill 版本与依赖元数据** | #7557（Issue） | ❌ 尚无 PR | 可能进入 2.3.x | 有助于技能仓库管理与更新。 |
| **后台在线更新（非阻塞 UI）** | #7543（Issue） | ❌ 尚无 PR | 期望 2.2.x 后续补丁 | 已有讨论，可参考 #7566（hub 启动非阻塞）的思路。 |
| **离峰任务调度（类似 zcode）** | #7568（Issue） | ❌ 尚无 PR | 长期规划（2.5+） | 利用模型厂商低谷折扣或 Batch API，成本优化方向明显。 |
| **飞书会话消费者卡死修复** | #7534（Issue） | ❌ 尚无 PR | 需要优先处理，影响企业用户 | 建议在消费者生命周期中增加心跳与恢复机制。 |

**路线图信号**：  
- 已合并的 **Skill 预加载**（#7183）表明团队正在朝着 **工作区级别的性能优化** 方向前进。  
- **后台非阻塞更新**（#7543）与 **hub 启动非阻塞**（#7566）的讨论显示 UI 流畅度是近期优先事项。  
- **关系型存储后端**、**Skill 元数据**、**离峰调度** 等功能均被多次提及，暗示中长期路线图将围绕 **可扩展性、可运维性和成本效率** 展开。  

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **任务中断频繁**（#6921、#7559）：用户反馈在多步骤或长时间任务中，助手会在规划阶段自动停止，缺少明确的“继续”提示，导致体验断裂。建议在任务状态机中加入更明显的进度条或自动恢复机制。  
- **局域网 LLM 不稳定**（#7505）：多位用户在 LM Studio、Ollama 等本地服务上遇到频繁断线，导致重试超时。期望客户端能够可配置地调整重试间隔、最大重试次数以及提供手动重连按钮。  
- **Loop 模式状态丢失（#7560 已修复）**：切换页面后所选 Loop 模式回到默认，影响长任务的连贯性。修复后用户反馈正常，确认此类状态持久化是必需的。  
- **控制台右键复制缺失（#7545）**：桌面端缺少基本的复制功能，与网页端不一致，影响日常复制代码或日志的需求。  
- **插件/技能市场需求（#7318）**：社区强烈期待一个官方的技能仓库或插件市场，便于共享和版本管理。  
- **后台更新需求（#7543）**：用户不愿意在更新期间应用不可用，尤其是在生产环境中运行的实例。  

---

### 8. 待处理积压（长期未响应的重要 Issue/PRs）  

| 编号 | 类型 | 最后更新 | 天数未响应 | 关键点 | 链接 |
|------|------|----------|------------|--------|------|
| **#6381** | PR（perf） | 2026-09-04 | > 70 天 | MCP

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-05

> 数据源：github.com/zeroclaw-labs/zeroclaw | 本周期内 Issues 34 条（新开/活跃 24，已关闭 10），PR 50 条（待合并 43，已合并/关闭 7），无新版本发布。

---

## 一、今日速览

项目今日保持**高活跃度**，Issues 与 PR 合计 84 条更新，社区贡献与问题反馈双线并行。**无新版本发布**，主干以功能迭代与问题修复为主。架构类 RFC（#9487 运行时会话、#6909 Computer-use）持续吸引高关注度，安全与配置类 Bug 密集出现（#10609、#10603、#10593），稳定性压力较大。

---

## 二、版本发布

**今日无新版本。** 上一个里程碑跟踪 Issue 为 #9459（v0.8.5 周稳定线，截至 2026-08-30 冻结 intake），当前处于稳定期维护阶段。

---

## 三、项目进展（今日合并/关闭的重要 PR）

| PR | 主题 | 意义 |
|---|---|---|
| [#10158](https://github.com/zeroclaw-labs/zeroclaw/pull/10158) | feat(release): publish workspace to crates.io | **23 crate 协调发布**，mark publishable，主干首次具备 crates.io 发布能力 |
| [#10587](https://github.com/zeroclaw-labs/zeroclaw/pull/10587) | chore(deps): bump rust-all (49 updates) | 依赖大规模升级（clap/tokio 等） |
| [#10153](https://github.com/zeroclaw-labs/zeroclaw/pull/10153) | feat(whatsapp-web): port to whatsapp-rust 0.7.0 | WhatsApp 通道升级到 0.7.0，移除 git pin |
| [#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390) | 关闭：进入非活跃 Chat 面板阻塞导航 | 改善 ZeroCode TUI 可用性 |

整体推进：**发布流程打通 + WhatsApp 生态依赖现代化 + TUI 交互修复**，项目工程化成熟度提升。

---

## 四、社区热点（评论最多的 Issues / PRs）

**Issues：**
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)（32 条评论）— **RFC: Runtime-owned conversation sessions and transport adapters**，Revision 5 投票重置，架构层重大讨论
- [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)（16 条评论）— Computer-use 桌面交互 RFC，已 accepted
- [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)（14 条评论）— WhatsApp `allowed_groups` 空列表安全修复，已关闭/accepted
- [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)（13 条评论）— Gateway verbatim send RFC，无 agent turn 直达通道

**PRs：**
- [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — Hailo-Ollama 原生支持（XL，do-not-merge）
- [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) — 会话持久化 prompt attachments（XL，needs-author-action）
- [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) — 协调 agent 生命周期突变（XL，今日更新）

**诉求分析：** 社区核心关注点集中在 **架构可扩展性（RFC 流程）**、**通道安全默认值**、**provider 生态丰富度** 三方面。

---

## 五、Bug 与稳定性（按严重程度排列）

### S1 — 阻塞工作流
| Issue | 主题 | 是否有 Fix PR |
|---|---|---|
| [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) | zerocode 忽略启动目录，强制 workspace 为 cwd | 无 |
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode providers 不发 x-opencode-session，头部缺失 | 无 |
| [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | 不完整终端响应被报告为成功 | 无 |
| [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | Image markers 绕过内容校验 | 无 |
| [#10593](https://github.com/zeroclaw-labs/zeroclaw/issues/10593) | backup.schedule_cron 无症状静默失效 | 无 |
| [#10594](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) | cron 任务未运行无记录 | 无 |

### S2 — 行为降级
| Issue | 主题 |
|---|---|
| [#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) | TTS 原样输出 Markdown/emoji |
| [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | 非视觉模型收到 [media attachment] 占位符 |

> 趋势：安全路径上的 Bug（#10603、#9882、#9421）集中爆发，需优先 triage。

---

## 六、功能请求与路线图信号

- [#10619](https://github.com/zeroclaw-labs/zeroclaw/issues/10619)（P1，in-progress）— **Anthropic prompt-cache 透传到 OpenAI 兼容网关**，已有关闭 PR #9419 做凭证轮换，可形成组合优化
- [#10588](https://github.com/zeroclaw-labs/zeroclaw/issues/10588) — multimodal.max_image_size_mb 从 5 升至 20
- [#10613](https://github.com/zeroclaw-labs/zeroclaw/pull/10613) — vi 约束标签与 spec 对齐（needs-author-action）
- [#9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) — 测试变更风险优先级规则
- [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) — PR 风险/规模标签自动重算

**下一版本候选：** prompt-cache 透传（#10619）、镜像大小上限调整（#10588）、凭证轮换（#9419 PR）较可能进入 v0.8.6。

---

## 七、用户反馈摘要

- **安全焦虑：** WhatsApp 的 `allowed_groups` 空列表等于放行（#9348、#9397），用户强烈要求默认 deny
- **可观测性不足：** TTS 剥离标记缺失（#10626）、日志沉没回归（#10585）、cron 无声失败（#10594）
- **提供方体验：** OpenCode session header 缺失导致 Go 模型账号标记风险（#10603）、Bedrock Nova 2 Lite 缓存错误无法关闭（#8

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*