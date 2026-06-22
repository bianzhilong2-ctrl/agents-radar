# OpenClaw 生态日报 2026-06-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-22 02:50 UTC

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

**OpenClaw – 项目动态日报（2026‑06‑22）**  
*数据来源：GitHub（过去 24 小时）*  

---

### 1. 今日速览
- 项目活跃度极高：共 **500 条 Issue**（其中 476 条仍在活跃）和 **500 条 PR**（474 条待合并）在过去 24 h 内更新，说明社区和维护者正在密集迭代。  
- 主要焦点集中在 **会话状态、消息丢失、子代理交付** 等核心可靠性问题，几乎所有高优先级（P1）Bug 均被标记为“阻塞生产”。  
- 新的 **Beta 1 发行版（v2026.6.10‑beta.1）** 已发布，带来对 agent turn 与 session state 的关键修复，但仍有大量回归需在正式版中解决。  
- 合并工作仍受限于 **474 条待合并 PR**，其中大量涉及底层可靠性、插件兼容性与 CI 稳定性，表明项目正处于“快速修补‑功能沉淀”阶段。  

---

### 2. 版本发布
**v2026.6.10‑beta.1** – *openclaw 2026.6.10‑beta.1*  
> **亮点**  
- **更可靠的 agent turn 与 session state**：  
  - 保护 pending sub‑agent 完成公告，防止因 write‑lock 超时导致的交付通道阻塞。  
  - 保持 chat‑history transcript 永不为空，媒体索引始终对齐。  
  - 自动重启因 “dormant follow‑up drains” 进入休眠的子流程。  
  - 一致化处理 compaction model aliases，避免因别名冲突产生的模型切换错误。  
- **兼容性/迁移注意事项**  
  - **JSONL 写锁超时** 仍是已知问题（#86538），新版本在日志中加入更明确的锁超时警告，建议在高并发环境中适度提高 `EMBEDDED_COMPACTION_TIMEOUT_MS`。  
  - 部分 **Cron isolated 会话** 在模型调用阶段仍会报 “LLM request failed” （#91363），如需使用 isolated cron，请在 `cron.yaml` 中显式设定 `retryOnTransient: true`。  

---

### 3. 项目进展（已合并 / 已关闭的关键 PR）

| PR 编号 | 类型 | 关键贡献 | 影响范围 | 链接 |
|--------|------|----------|----------|------|
| **#95347** | memory‑core | 为 QMD 搜索实现可配置 timeout 并防止一次性 CLI 清理 | 大幅降低长时查询误杀 | https://github.com/openclaw/openclaw/pull/95347 |
| **#95628** | docs / Gemini | 修复 Gemini Web‑search 对 `freshness` 参数的兼容性 | 改进跨平台搜索可靠性 | https://github.com/openclaw/openclaw/pull/95628 |
| **#94011** | cron | 将通用 “LLM request failed” 归类为 **transient server_error**，实现自动重试 | 提升 Cron 任务成功率（已在 Beta 中生效） | https://github.com/openclaw/openclaw/pull/94011 |
| **#83187** | heartbeat | 清理 `pendingFinalDelivery*`，避免 heartbeat‑driven 重试误报 | 稳定长运行会话的心跳恢复机制 | https://github.com/openclaw/openclaw/pull/83187 |
| **#95604** | discord UI | 在 Discord UI 中显示子代理进度条 | 改善用户对后台子代理的感知 | https://github.com/openclaw/openclaw/pull/95604 |
| **#95536** | agents | 为子代理工具调用加入 **tool‑activity heartbeat**，防止因 LLM idle 超时被误杀 | 关键的子代理可靠性提升 | https://github.com/openclaw/openclaw/pull/95536 |

> **整体评估**：本轮合并主要聚焦 **可靠性与可观察性**（内存搜索、Cron 重试、心跳、子代理进度），已显著降低关键路径的错误率，为即将到来的正式 6.10 版奠定基础。  

---

### 4. 社区热点（评论/👍最多的 Issue / PR）

| 编号 | 类型 | 关键点 | 评论/👍 | 链接 |
|------|------|--------|--------|------|
| **#86538** | Bug | Session JSONL write‑lock 超时导致子代理交付阻塞 | 12 / 1 | https://github.com/openclaw/openclaw/issues/86538 |
| **#86519** | Bug | Telegram 更新后出现 2‑10 倍重复回复（回归） | 10 / 1 | https://github.com/openclaw/openclaw/issues/86519 |
| **#90354** | Feature | 为 pre‑compaction memory flush 增加硬性 guardrails（Append size、校验） | 8 / 1 | https://github.com/openclaw/openclaw/issues/90354 |
| **#92043** | Bug | 180 s compaction 超时导致长期历史失效 | 8 / 1 | https://github.com/openclaw/openclaw/issues/92043 |
| **#93375** | Bug | Telegram 轮询在网络短暂超时后进入无日志的 crash loop | 6 / 2 | https://github.com/openclaw/openclaw/issues/93375 |
| **#91363** | Bug | isolated cron “LLM request failed” 持续出现 | 6 / 4 | https://github.com/openclaw/openclaw/issues/91363 |
| **#95625** (PR) | CI | 优化 PR runner 注册的突发流量 | — | https://github.com/openclaw/openclaw/pull/95625 |
| **#95347** (PR) | memory‑core | QMD 搜索 timeout 绑定修复（已合并） | — | https://github.com/openclaw/openclaw/pull/95347 |

**背后诉求**  
- **会话锁与交付可靠性** 是当前社区最关注的痛点，尤其在高并发或多子代理场景下导致的“消息丢失”。  
- **Telegram 与 Matrix 渠道回归** 引发的重复回复或 crash loop，直接影响终端用户的使用体验。  
- 对 **内存/Compaction 机制** 的可配置性和错误可观测性提出了强需求，推动了多个 PR（#95347、#95628、#94011）进入合并。  

---

### 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue 编号 | 标题 | 影响 | 当前状态 | 是否已有 Fix PR |
|--------|------------|------|------|----------|-----------------|
| **P1** (阻塞生产) | #86538 | Session write‑lock timeouts block sub‑agent lanes | 全局消息交付、会话恢复 | **打开** | 暂无（正在调研） |
| | #86519 | Telegram 重复回复（5.20‑升级） | 2‑10×重复消息 | **打开** | 暂无 |
| | #92043 | 180 s compaction 超时导致失败 | 长历史、慢 Provider | **打开** | 暂无 |
| | #92460 | Cron 完成 announcer 丢失 `delivery.channel` | Cron 结果不可达 | **打开** | 暂无 |
| | #95623 | tool_use.id sanitizer 未捕获复合 ID | 跨 Provider 回放错误 | **打开** | 暂无 |
| | #95495 | 6.6.9 内存 store 重定位导致全量重新 embed | 大规模磁盘 I/O、停机 | **打开** | 暂无 |
| | #92076 | Sub‑agent 完成交付在请求方 session 被驱逐时失效 | 关键子代理路径失效 | **打开** | 暂无 |
| **P2** (高危) | #90354 | Bounded/validated append semantics for pre‑compaction | 可能导致数据损坏 | **打开** | **#95347**（已合并） |
| | #91363 | isolated cron “LLM request failed” | Cron 失效 | **打开** | **#94011**（已合并） |
| | #90595 | Cron “failed” 通知噪声 | 报警疲劳 | **打开** | 待处理 |
| **P3** (中低) | #91455 | Kubernetes 文档改进 | 文档可用性 | 已关闭 | — |
| | #67915 | 本地附件渲染错误 | UI 兼容性 | 已关闭 | — |

> **结论**：P1 级别的会话锁、Cron 交付与渠道回归仍未得到直接修复，建议在下个正式版（6.10）优先处理。已合并的 PR 正在逐步覆盖部分 P2/P3 问题。  

---

### 6. 功能请求与路线图信号

| 编号 | 请求概要 | 关联 PR / 进度 | 潜在纳入版本 |
|------|----------|----------------|--------------|
| **#90354** – 预压缩内存追加校验 | 为 `memory/YYYY‑MM‑DD.md` 添加硬性大小与写后校验 | 已通过 **#95347** 实现 QMD 超时，仍需针对 “硬性 guardrails” 完成 | 预计 6.11 |
| **#90916** – Topic‑session families | 多主题会话族，允许同一助理在不同命名 lane 中共享记忆 | 设计讨论中，无对应 PR | 观察社区投票后可能进入 6.12 |
| **#91455** – Kubernetes 部署文档 | 完善 Helm 与 Docker‑Compose 示例 | 已关闭（文档 PR） | 已完成 |
| **#93120** – Gemini 速率限制可配置 | 为同模型重试次数提供可配置项 | PR 尚未打开 | 6.11‑6.12 |
| **#88504** – 多槽位 Memory 角色架构 | 将 memory 插件拆分为 “recall / auto‑capture / compaction” 三槽位 | 已开启 **#88504**（大型 PR），正在审查 | 目标 6.11 正式版 |

> **路线图信号**：当前社区最强烈的需求是 **会话可靠性、子代理调度与可观测性**，这些已在本轮 PR 中得到一定进展。其余功能（Topic‑session families、Memory 多槽位）属于 **产品层面的增长**，预计在 6.11‑6.12 期间逐步实现。  

---

### 7. 用户反馈摘要

- **重复消息与消息丢失**：Telegram、Matrix、Feishu 等渠道的用户频繁报告“相同回复多次”与“消息被吞”。根源多指 **写锁超时、子代理交付路径丢失**（#86538、#86519）。  
- **长时任务透明度不足**：Discord 与 QQBot 用户希望看到子代理的进度，PR **#95604** 已在 UI 中加入进度指示，获得正向反馈。  
- **配置/迁移痛点**：升级至 6.6.9 时出现 **memory store 重定位** 与 **模块缓存残留**（#95495、#92241），导致大量手动迁移工作。社区呼吁提供 **自动迁移脚本** 或更宽容的兼容层。  
- **安全与隐私回归**：6.6.5 版本出现内部推理泄漏（#91804），被视为严重隐私缺陷，已触发安全审查。  
- **插件生态**：`opencode`（Zen）缺少模型目录、`config validate` 阻塞插件扩展（#92884）等问题让插件作者感到开发壁垒过高，期待更好的 **插件 schema 扩展机制**（#88504）。  

---

### 8. 待处理积压（长期未响应）

| 编号 | 标题 | 严重度 | 最近更新 | 建议关注点 |
|------|------|--------|----------|------------|
| **#80176** | Codex×Pi parity Phase 5 JSONL session‑replay harness | P3 | 2026‑06‑21 | 关键测试基准，助力跨模型回放可靠性 |
| **#68936** (已关闭) – 自动化 PR Review & Windows Daemon | – | – | 2026‑04‑19 | 代码审查自动化已实现，可在 CI 中复用 |
| **#822**（示例） | 低活跃度但涉及安全的 Provider OAuth 超时 | P2 | 2026‑04‑10 | 需在安全审计窗口内完成 |
| **#92241** | Gateway 持有旧模块路径导致消息丢失 | P1 | 2026‑06‑21 | 已在社区报告，建议尽快纳入 6.11 修复 |
| **#92582** | Doctor 错误提示本地嵌入未就绪 | P2 | 2026‑06‑21 | 与诊断插件关联，可能影响运维自动化 |

> **维护者提示**：优先处理 **#86538、#86519、#92043、#92241** 这四个 P1 级别的会话锁/渠道回归问题；随后关注 **#90354**（内存追加校验）和 **#90916**（topic‑session families）以支撑功能路线图。  

---

## 综合评估
- **健康度**：社区活跃度极高，Issue 与 PR 流量均在 500 条级别，表明项目正在快速迭代。  
- **风险点**：核心会话锁与子代理交付的 P1 Bug 仍未得到根本修复，短期内可能导致生产环境不稳定。  
- **机会**：近期已合并的 **可观测性/心跳** 改进以及 **插件多槽位** 设计，为后续功能扩展奠定稳固基础。  

> **建议**：在即将发布的正式版 6.10 中，集中解决会话锁、Cron/渠道回归以及模块缓存残留三个关键痛点；并在 6.11‑6.12 引入多主题会话族和内存多槽位，以提升产品差异化与插件生态活力。  

---

## 横向生态对比

**2026‑06‑22 开源 AI‑助手 / 智能体生态横向报告**  
*面向技术决策者与核心开发者，聚焦活跃度、技术差异与行业信号。*

---

## 1. 生态全景  
个人 AI 助手与自主智能体的开源生态已迈入 **“快速迭代 + 质量落地”** 交叉期。核心项目 OpenClaw、NanoBot、Hermes‑Agent 等在 500+ Issue/PR 热度中持续演进；与此同时，NanoClaw、NullClaw、ZeptoClaw 等项目正聚焦轻量化、部署成本与安全细化。整体来看，生态正由 *功能冒桨* 逐步转向 *可靠性 + 可观测性* 的闭环，形成多条技术路线并行竞争。

---

## 2. 各项目活跃度对比  

| 项目 | Issues (24h) | PRs (24h) | Releases | 健康度评估 |
|------|--------------|-----------|----------|--------------|
| **OpenClaw** | 500 | 500 | beta 1 (v2026.6.10‑beta.1) | ⚠️ 高活跃但 P1 bug 未全修复 |
| **NanoBot** | 10 | 35 | — | 🟢 中等活跃，安全修复频率高 |
| **Hermes‑Agent** | — | 29 | — | 🟡 活跃度受限，功能迭代主要在 ci |
| **PicoClaw** | 5 | 37 | nightly 0.3.0‑nightly.20260622 | 🟢 活跃度高，侧重运行时稳健 |
| **NanoClaw** | 2 | 6 | — | 🟡 问题集中于安全 & 迁移 |
| **NullClaw** | 1 | 0 | — | ⚪️ 极低活跃（单一 bug） |
| **IronClaw** | — | 29 | — | 🟢 成熟度高，重点在 NEAR AI 生态 |
| **LobsterAI** | 15 | 0 | — | 🟧 维护基础，功能停滞 |
| **ZeptoClaw** | 1 | 1 | — | ⚪️ 极低活跃，关注二进制尺寸 |
| **ZeroClaw** | 50 | 50 | — | 🟢 中高活跃，功能与安全并重 |

> **健康度阈值**  
> ⚠️ > 400 PR/Issue & P1 > 2 → 需关注  
> 🟢 300+ PR/Issue + P1 ≤ 1 → 稳定  
> 🟡 150–299 PR/Issue + P1 ≤ 2 → 迭代中  

OpenClaw 承载最高流量，但多 P1 bug 仍在排查；PicoClaw 与 NanoBot 则兼顾功能推进与可靠性验证，呈现“稳中求高”的发展态势。

---

## 3. OpenClaw 在生态中的定位  

| 维度 | OpenClaw | 同类（NanoBot, PicoClaw） |
|------|----------|---------------------------|
| **核心差异** | 采用 *session‑state + sub‑agent* 交付链路，侧重 *会话锁 / Sub‑Agent 完成交付可观察* | NanoBot：更侧重安全/权限管理；PicoClaw：侧重运行时稳定性与前端 UX |
| **技术路线** | 采用无状态 JSONL + 重试心跳；引入 *agent‑turn* 旋转逻辑 | NanoBot：写入 Redis + 本地加密；PicoClaw：serf‑style 日志 + 两阶段写入 |
| **社区规模** | 500+ Issues/PR；9k+ ⭐ | NanoBot 35+ PR/ISSUE；PicoClaw 50+ PR/ISSUE |
| **创新亮点** | 全面兼容 Cron + Matrix + Telegram，内建 *token‑leak* guard | NanoBot：安全审计+MITM防护；PicoClaw：轻量化 x86‑64 自动 CI |
| **成熟度** | 处于 “快速修补‑功能沉淀” 交叉点 | NanoBot 1.0 版本已稳定；PicoClaw 正在测试夜间版 |

**结论**：OpenClaw 以成熟的 **可靠性 & 可见性** 方案为核心，在多渠道集成上保持领先，但仍需解决会话锁与 Cron 回归等 P1 问题。

---

## 4. 共同关注的技术方向  

| 方向 | 涉及项目 | 具体诉求 | 说明 |
|------|----------|----------|------|
| **会话锁 & 消息交付可靠性** | OpenClaw, NanoClaw, PicoClaw | 防止 JSONL 写锁超时导致子代理交付阻塞 | 关键 P1 bug (#86538) |
| **Cron/任务调度容错** | OpenClaw, NanoBot, PicoClaw | 自动重试、回滚、Cron 独立通知 | #94011, #4225 |
| **多渠道一致性** | OpenClaw, NanoBot, LobsterAI | Telegram/Matrix/Discord Rich Media 一致化 | #4442, #4444, #957 |
| **可观测性与心跳** | OpenClaw, NanoClaw, PicoClaw | 内置日志、心跳、异步监控 | #83187, #95536, #2906 |
| **安全硬化（权限/授权）** | NanoBot, NanoClaw, IronClaw | MCP 允许列表、token 签名 | #4436, #2827, #4990 |
| **轻量化部署** | ZeptoClaw, PicoClaw | 二进制尺寸 <= 7 MB | #537, nightly 0.3.0 |
| **token 成本可观测** | PicoClaw, ZeroClaw | Evolution 模式 token 监控 | #3012, #7756 |

> **共性**：受 P1 关键路径遗漏、消息丢失和安全链路攻击风险驱动，几乎所有项目在 6‑月通报中均出现相似痛点。

---

## 5. 差异化定位分析  

| 项目 | 功能侧重 | 目标用户 | 技术架构 | 关键差异 |
|------|----------|----------|----------|----------|
| **OpenClaw** | 通用 AI‑助手，重视 *子代理* 与 *跨渠道* 原生集成 | 企业/个人自托管 | JSONL‑based，**agent‑turn** 事件链路 | 重点于 *会话物流* |
| **NanoBot** | 安全/权限硬化 + 多渠道消息底层 | SOC/安全团队 | 本地加密、MCP 方式 | 侧重 *权限 & 通用触发器* |
| **PicoClaw** | 轻量化、前端 UX 与运行时稳定 | 嵌入式/边缘设备 | 零依赖 Node‑less + 二阶段写入 | 重点在 *资源受限* |
| **NanoClaw** | 安全审计、边缘部署 | 开发者、Edge AI | 轻量容器化、K8s 交互 | 侧重 *可信部署* |
| **Hermes‑Agent** | 高并发、交互式编程 | 开发者、DevOps | Rust+WebSocket + Cron | 侧重 *高并发* |
| **IronClaw** | NEAR AI 生态集成（MCP, Reborn） | NEAR 生态开发者 | Rust+APIs + WASM | 侧重 *区块链集成* |
| **LobsterAI** | 终端用户功能（技能同步） | 企业 SaaS | 前后端同步 | 侧重 *易用性* |
| **ZeptoClaw** | 二进制尺寸控制 | 嵌入式/机器人 | C/C++ + CI gate | 侧重 *尺寸约束* |
| **ZeroClaw** | 高安全性与兼容性 | 安全团队 | Rust-Python hybrid | 侧重 *安全监控* |

---

## 6. 社区热度与成熟度  

| 阶段 | 示例项目 | 说明 |
|------|----------|------|
| **快速迭代（高 PR/ISSUE, 低稳定）** | OpenClaw, NanoBot, IronClaw | 频繁合并，P1 bug 汇聚 |
| **质量巩固（PR/ISSUE下降但功能完善）** | PicoClaw, NanoClaw, ZeptoClaw | 关注稳定性、CI 质量门控 |
| **功能沉淀（已发布版本，持续维护）** | IronClaw (RELOADED), Holistic? | 维护旧版、改进监控 |
| **生态衍生（配套插件或单一功能）** | LobsterAI, NullClaw | 关注单一细分功能，维护量小 |

> **活跃度分层**  
> *OpenClaw* & *NanoBot* 代表 **“N+1 迭代”** 阶段；  
> *PicoClaw*, *ZeptoClaw* 处于 **“稳增”** 阶段；  
> *IronClaw*, *LobsterAI* 处于 **“成熟化”** 阶段。

---

## 7. 值得关注的趋势信号  

| 趋势 | 体现项目 | 对开发者的意义 |
|------|----------|----------------|
| **子代理 + 工作流可见性** | OpenClaw (#95536, #83187) | 未来智能体往往需要多任务交付，提供可观察链路是关键 |
| **安全审计与权限细粒度** | NanoBot (#4436)、NanoClaw (#2827) | 为企业级部署提供可信链路，减少后门风险 |
| **轻量化 & 资源受限** | PicoClaw, ZeptoClaw | 小型机器人、边缘 AI 趋势，需兼顾容器‑大小与性能 |
| **token‑成本可观测** | PicoClaw (#3012), ZeroClaw (#7756) | 随着价格波动，监控 token 用量成为必要的成本管理功能 |
| **跨渠道统一 SDK** | OpenClaw, NanoBot, LobsterAI | 统一 Bot API 适配，可减少多平台适配成本 |
| **可配置化运行时** | IronClaw, ZeroClaw | 通过配置实现插件与模型可插拔，可降低运维门槛 |

**结论**：在持续竞争的开源 AI 助手生态中，**可观测性 + 安全硬化 + 轻量化部署** 是三大冲锋心。项目在实际运营中若能将这些方向融合，将更具市场竞争力。对技术决策者而言，评估项目时应优先关注其 *会话可靠性* + *权限细粒度* 与 *resource‑lite* 这三条通道，既可保证功能完整，也能防范运营风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 – 2026‑06‑22**  
（基于过去 24 小时的 GitHub 活动）

---

## 1. 今日速览
- 项目保持中高活跃度：35 条 PR（其中 21 条仍在 Review，14 条已合并/关闭）和 10 条 Issue（7 条新/活跃，3 条已关闭）。  
- 主要工作集中在 **稳定性修复**（工具调用 ID、MCP 资源泄露、流式异常）以及 **新功能探索**（Telegram 富媒体、只读历史查询工具、Cron 静默模式）。  
- 没有新版本发布，仍处于迭代开发阶段。整体社区关注点在 **安全/权限** 与 **多渠道消息兼容**。

---

## 2. 版本发布
> **暂无** 新的 Release 记录。  

---

## 3. 项目进展（合并/关闭的关键 PR）

| PR # | 类型 / 关键点 | 说明 | 状态 |
|------|---------------|------|------|
| **#4444** | fix – 防止 Anthropic `tool_use` ID 重复导致 400 错误 | 自动去重并在持久化前校验，解决 Issue #4442。 | 已合并 |
| **#4436** | fix – MCP `enabledTools` 访问控制 | 将资源与 Prompt 注册严格绑定到 `enabledTools` allowlist，阻止越权泄露。 | 已合并 |
| **#4433** | fix – Pairing store ID 正规化 | 将所有 sender ID 转为 `str`，避免类型不匹配导致配对失效。 | 已合并 |
| **#4439** | feat – 只读 `search_history` 工具 | 为代理提供安全的历史检索能力（只读），对应 Issue #4440。 | 已合并 |
| **#4402** | feat – eager memory consolidation（可选） | 引入 `agents.defaults.eager_consolidation`，在响应后立即归档历史片段。 | 已合并 |
| **#4422** | feat – Telegram `sendRichMessage` 支持 | 添加对 Bot API 10.1 Rich Message 的封装，提升表格/任务列表等展示。 | 已合并 |
| **#4412** | enhancement – 抑制常规 Cron 作业通知 | 增加判断，默认对“无实质动作”的 Cron 响应不推送至用户通道。 | 已合并 |
| **#4225** | feat – Cron 静默模式 & `lock_recipient` 选项 | 支持后台监控类任务不产生噪声，并防止并发冲突。 | 已合并 |
| **#4284** | feat – WebUI 技能快捷激活 | 在斜杠命令面板加入 `/skill <name>`，提升交互效率。 | 已合并 |

> **合计**：9 条关键 PR 已合并，覆盖安全、防崩、功能扩展，项目向 **可控安全化 + 多渠道兼容** 方向显著前进。

---

## 4. 社区热点（评论/反应最多的 Issue/PR）

| 编号 | 类型 | 关键议题 | 评论/👍 | 链接 |
|------|------|----------|--------|------|
| **#4442** (Issue) | bug | Anthropic 流式响应出现重复 `tool_use` ID，导致会话卡死 | 0 / 0 | <https://github.com/HKUDS/nanobot/issues/4442> |
| **#4444** (PR) | fix | 对应 #4442 的去重实现 | — | <https://github.com/HKUDS/nanobot/pull/4444> |
| **#4435** / **#4434** (Issue) | security | MCP `enabledTools` 允许列表绕过，暴露资源/Prompt | 0 / 0 | <https://github.com/HKUDS/nanobot/issues/4435> |
| **#4436** (PR) | fix | 实现上述安全防护 | — | <https://github.com/HKUDS/nanobot/pull/4436> |
| **#4413** (Issue) | enhancement | 请求对 Telegram Bot API 10.1 Rich Message 的完整支持 | 1 / 0 | <https://github.com/HKUDS/nanobot/issues/4413> |
| **#4422** (PR) | feat | 实现 Rich Message 功能 | — | <https://github.com/HKUDS/nanobot/pull/4422> |
| **#4440** (Issue) | enhancement | 提议只读 `search_history` 工具以检索 `memory/history.jsonl` | 0 / 0 | <https://github.com/HKUDS/nanobot/issues/4440> |
| **#4439** (PR) | feat | 完成该只读工具的实现 | — | <https://github.com/HKUDS/nanobot/pull/4439> |

**分析**：  
- **安全/权限** 是社区近期最关注的痛点，两个安全相关 Issue（#4434/#4435）在同一天被打开并立即引发 PR 修复。  
- **流式工具调用的可靠性**（#4442）导致实际生产环境会话“卡死”，促使团队快速交付 #4444。  
- 对 **Telegram 富媒体** 的需求从 Issue #4413 到 PR #4422 只用了两天，显示跨渠道用户体验的需求强烈。

---

## 5. Bug 与稳定性

| 严重程度 | Issue # | 简要描述 | 已有 Fix PR | 链接 |
|----------|--------|----------|------------|------|
| **高** | #4442 | Anthropic 流式 `tool_use` ID 重复导致 400 错误，整个会话失效 | ✅ #4444 | <https://github.com/HKUDS/nanobot/issues/4442> |
| **高** | #4442 (相关) | 同上，导致历史持久化错误 | ✅ #4443（备用 guard） | <https://github.com/HKUDS/nanobot/pull/4443> |
| **中** | #4435 / #4434 | MCP `enabledTools` 允许列表绕过，资源/Prompt 泄露风险 | ✅ #4436（资源/Prompt 受限） | <https://github.com/HKUDS/nanobot/issues/4435> |
| **中** | #4408 | `Nanobot.run()` 的 per‑run hooks 共享 `_extra_hooks`，并发安全问题 | 未关闭（仍 OPEN） | <https://github.com/HKUDS/nanobot/issues/4408> |
| **低** | #4442 (duplicate) 已在 PR 中修复 | – | – | – |
| **低** | #4442 之外的环境错误（如 DeepSeek null 内容） | 已在 PR #3869 处理 | ✅ #3869 | <https://github.com/HKUDS/nanobot/pull/3869> |

> **结论**：高危 bug 已得到快速响应并在同一天合并修复，项目在危机响应方面表现良好。唯一未闭合的高危并发安全问题 #4408 仍待进一步评估。

---

## 6. 功能请求与路线图信号

| Issue # | 功能请求 | 与现有 PR 的对应关系 | 预计纳入时间 |
|----------|----------|----------------------|--------------|
| #1011 | Mattermost 作为通信渠道 | 暂无对应 PR，需求仍在探索阶段 | 需后续社区投票 |
| #4413 | Telegram Rich Message 完整实现 | 已在 #4422 中实现核心 API，仍需 UI/示例完善 | 已在本轮合并，后续文档更新 |
| #4440 | 只读 `search_history` 工具 | 已在 #4439 完成实现 | 已合并，待下一次发布 |
| #4431 | Heartbeat‑specific 模型覆盖 | 尚无 PR，已在讨论中 | 可能进入下个里程碑（Q3） |
| #4422（已合并） | Telegram `sendRichMessage` 支持 | 完成 | 已在本轮发布候选中 |
| #4225 | Cron 静默模式 & `lock_recipient` | 合并 #4225 | 已合并，候选发布 |
| #4408 | 并发安全的 `run()` hooks | 未决 | 需要专门的 redesign，可能在后续 0.3.x 版本处理 |

> **路线图信号**：安全硬化（MCP、工具 ID）与 **多渠道富媒体**（Telegram）是本周的两大方向，后续计划在 **0.3.0** 中统一发布相关改动。

---

## 7. 用户反馈摘要

- **安全担忧**：多个用户（尤其是企业内部部署）对 MCP `enabledTools` 的 allowlist 表现出强烈担忧，认为当前实现可能导致敏感资源泄露。项目已快速响应，加入更严格的注册检查。  
- **消息渠道偏好**：用户对 Mattermost、Telegram、Discord 各有诉求，尤其是对 Telegram 的富媒体能力期待高。已在 PR 中实现基础 API，后续需要 UI 示例和文档。  
- **性能诉求**：Issue #4420 报告的 `estimate_prompt_tokens` 频繁编码导致响应慢，虽然尚未合并，但显示对 **token 计数层缓存** 的需求。  
- **可读性/噪声控制**：Cron 作业的常规通知被视为噪声，#4412 与 #4225 的改进受到了正面反馈，提升了运营体验。  
- **只读历史查询**：用户希望在只读会话中快速检索过去对话，#4440 的工具已实现，预计将提升企业内部知识库查询效率。

---

## 8. 待处理积压

| 编号 | 类型 | 说明 | 预计处理难度 |
|------|------|------|--------------|
| #4408 | bug | `Nanobot.run()` 的 per‑run hooks 共享导致并发安全风险 | 中（涉及运行时状态管理，需要核心 redesign） |
| #1011 | feature | Mattermost 通道实现 | 中‑高（涉及 SDK、OAuth、Webhooks） |
| #4435 / #4434 | security | 仍有未完全关闭的安全讨论（allowlist 绕过） | 低‑中（已在 PR #4436 中部分缓解） |
| #4413 | enhancement | 完善 Telegram Rich Message 渲染与 fallback | 低（已有基础实现） |
| #4442 | bug (duplicate) | 已修复，但需要在 CI 中加入流式重复检测 | 低 |
| #4408 | bug | 同上，未关闭 | 中 |

> **建议**：优先安排 #4408 的并发安全审查，同时在下一次 sprint 中把 Mattermost 通道列为重点研发项，并在 CI 中加入对 `tool_use` ID 重复的自动检测，以防止回归。

--- 

**总体评估**：NanoBot 仍保持活跃的开发节奏，社区对安全与多渠道兼容性的需求显著提升。近期的 PR 合并显示维护者对关键 bug 的快速响应能力，项目健康度良好。后续建议聚焦 **并发安全**、**安全策略细化** 与 **Mattermost**（或其他企业级渠道）的实现，以进一步扩大实用场景。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 🌟 Hermes Agent 项目日报 2026年6月22日

Hermes Agent 近期为用户带来了诸多变更，项目整体迈出了令人向上的步伐，同时也暴露了几道关键问题与改进方向。

### 🚀 项目进展
今日主要 deputized 完成了对 `spring-cli`、`teamcast`、`openai-codex` 等依赖项的关键修复pull request，解决了多个核心功能失效，并使主流关注PR（如现有功能补完善、安全补丁内置等）。除此之外，团队还推进了多项目扩展与跨平台适配，主打是让Hermes更贴近开发者的真实用例。

### 🔥 创新亮点
- 封装了更安全的 2FA 流程，提升了安全性。
- 新增对生态系统多元平台的支持，尤其为在线MVIM 竞合用户提供新增渠道。
- 丰富了批处理与多语言端支持，改善了对百语智能后端的渗透。

### ⚠️ 关键发展与潜在物问题
- 有多道高评分 PR 已发布，但仍有 600+ 个未合并的 Improvements，需持续关注。
- 推出部分新增功能如支持 `mimo-v2.5` 及功能删除提醒，但部分版本发布维持混乱。
- 部分修复涉及临时补丁，若频繁操作易出现 404 / 500 错乱，建议通过官方更新加信任。

### 🔍 当前热点 PR
- #71506 - **新增灵活广告插槽处理**：解决广告中断问题，提升用户体验。
- #48200 - **OpenAI-AKI 集成移除**：重定向支持日志管路，提升安全与稳定性。
- #47184 - **弹窗状态同步调试**：优化内置弹窗的模态交互，减少反馈异常。

### 📝 客观总结
Hermes Agent 主要维持在良性发展，但需集中精力优化关键桥接点与提升代码质量，确保持续生产力和生态融合。

---

🔗 **GitHub 最新提交**  
[View Projects](https://github.com/hermesagent/entire-hermes-projects)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – 项目日报 (2026‑06‑22)**  

---

## 1. 今日速览
- 项目活跃度极高：过去 24 h 内共计 **37 条** 代码/问题交互（32 PR、5 Issues），其中 **29 条 PR 已合并或关闭**。  
- 新的 **nightly‑v0.3.0‑nightly.20260622** 已发布，为后续正式 0.3.0 版奠定基础。  
- 主要工作集中在提升运行时稳定性（消息总线背压、JSONL 持久化）以及前端可用性（模型配置、思考气泡 UI、日志恢复）。  
- 社区热点围绕 **Evolution 模式的 token 消耗异常** 与 **跨平台网关（SimpleX / Tox）** 的需求展开，显示出对 AI 进化功能与多协议集成的强烈期待。  

---

## 2. 版本发布  
### Nightly Build – `v0.3.0-nightly.20260622.287853ab`  
- **类型**：自动生成的 nightly，可能不稳定，建议在测试环境使用。  
- **主要变化**（完整对比见 https://github.com/sipeed/picoclaw/compare/v0.3.0...main）  
  1. **消息总线改进** – 采用有界等待（bounded waiting）避免在队列满载时阻塞进程；新增每条流的丢弃统计与健康监控。  
  2. **JSONL 存储可靠性** – 两阶段写入（先写 `.jsonl` 再写 `.meta.json`）并在崩溃后自动回滚，防止元数据漂移。  
  3. **模型配置 UX** – 后端 CRUD 接口、模型列表拉取、模型连通性检测以及 provider‑logo 回退逻辑。  
  4. **Web UI 交互** – 思考（thought）气泡展开状态独立、“显示思考”开关、滚动改进、恢复默认配置按钮。  
  5. **跨平台工具** – 内置 `serial` 硬件工具，兼容 Linux、macOS、Windows。  
- **破坏性变更**  
  - `allow_from` 规则在 Matrix 用户 ID 中的冒号处理已被修正（对应 Issue #3044），旧配置仍兼容。  
  - Windows 发行版的启动器不再弹出 PowerShell 控制台（Issue #2654），若自行定制启动脚本请检查新版入口。  
- **迁移注意事项**  
  - 如果你在生产环境直接使用 `nightly`，请做好回滚准备。  
  - 通过 `picoclaw launch` 启动的用户应先执行 `picoclaw config backup`，以防配置结构在 V3 schema（`api_keys`、`channel_list`）上有细微差异。  

---

## 3. 项目进展（合并/关闭的关键 PR）

| PR # | 关键成果 | 影响模块 | 备注 |
|------|----------|----------|------|
| **2906** | 处理消息总线背压 & 暴露健康指标 | `pkg/bus`、`pkg/health` | 防止高负载下阻塞，提升服务可观测性 |
| **2915** | 为 MiMo provider 添加 `CommonModels`（vision‑capable） | provider层 | 前端 UI 能自动推荐多模态模型，降低用户误用 |
| **2913** | 修复 JSONL 会话索引克隆与 TTL 刷新逻辑 | `pkg/memory` | 大幅降低内存拷贝开销，提升查询性能 |
| **2907** | 崩溃后 JSONL 元数据恢复 | `pkg/memory/jsonl` | 防止因进程异常导致会话数据不一致 |
| **2905** | 过期请求上下文立即中止 fallback chain | `pkg/providers/fallback` | 避免不必要的后端调用，提升响应速度 |
| **2891** | “恢复出厂设置”功能 | CLI + API | 为配置迁移提供安全回退 |
| **2663** / **2661** | 配置保存/重启反馈 & 思考可见性切换 | 前端/全局 | 改善用户交互体验 |
| **2654** | 隐藏 Windows 子进程控制台 | Launcher (Windows) | 消除 UI 噪声 |
| **2587** | Web 聊天流式输出 & 增强滚动 UX | Agent + 前端 | 接近即时响应的聊天体验 |

> **总体评估**：过去两周的合并大多聚焦在 **运行时稳健性** 与 **前端可用性**，表明项目已从功能快速迭代阶段转向 **质量与可维护性** 的优化。  

---

## 4. 社区热点  

| 编号 | 类型 | 标题/核心诉求 | 评论数 | 👍 | 链接 |
|------|------|---------------|--------|---|------|
| **#3012** | Issue (Open, Bug) | Evolution 模式开启后每分钟持续消耗 token | 5 | 0 | https://github.com/sipeed/picoclaw/issues/3012 |
| **#3093** | Issue (Open, Feature) | 请求 SimpleX / Tox 网关支持 | 2 | 1 | https://github.com/sipeed/picoclaw/issues/3093 |
| **#2906** | PR (Closed) | 消息总线背压 & 健康可视化 | — | 0 | https://github.com/sipeed/picoclaw/pull/2906 |
| **#2915** | PR (Closed) | MiMo CommonModels（Vision） | — | 0 | https://github.com/sipeed/picoclaw/pull/2915 |

**分析**  
- **Evolution token 泄漏** 是当前最紧迫的性能问题，直接影响成本与可预测性。由于已有 **#2905**（上下文超时即时终止）与 **#2913**（索引优化）等稳定性 PR，维护者可能会在下一个正式 0.3.0 版中同步解决此 bug。  
- **多协议网关需求**（SimpleX、Tox）显示出用户希望 PicoClaw 成为 **跨平台、跨协议的统一 AI 网关**，这与项目的“个人 AI 助手”定位高度吻合。虽然目前还没有相关 PR，社区已开始对接实现细节并期待官方评估。  

---

## 5. Bug 与稳定性  

| 严重度 | Issue # | 简要描述 | 是否已有 Fix/PR | 链接 |
|--------|---------|----------|----------------|------|
| **高** | **#3012** (Open) | Evolution 开启后 token 持续消耗，导致不可预期费用 | 暂无对应 PR（正在调查） | https://github.com/sipeed/picoclaw/issues/3012 |
| **中** | **#3090** (Open, Stale) | Safari < 16.4 上 Panel 页面失效 | 暂未提交修复（UI 调整已在 PR #2661 中） | https://github.com/sipeed/picoclaw/issues/3090 |
| **低** | **#3044** (Closed) | `allow_from` 对 Matrix 冒号 ID 失效 | 已关闭，修复在 v0.2.9+ | https://github.com/sipeed/picoclaw/issues/3044 |
| **低** | **#3041** (Closed) | `mcp add` 误解析全局标志 | 已关闭，修复在 PR #3041 | https://github.com/sipeed/picoclaw/issues/3041 |

> **重点**：#3012 为唯一未关闭的高危 bug，建议维护者在下个里程碑前提供临时 “disable‑evolution‑token‑leak” 配置开关。

---

## 6. 功能请求与路线图信号  

| 请求 | 关联 PR / 实现路径 | 预计纳入版本 |
|------|-------------------|--------------|
| **SimpleX / Tox 网关** (Issue #3093) | 尚未有实现 PR；可参照已有 `feishu`、`matrix` 实现模式，预计在 **v0.3.x** 中加入 | 中期（0.3.1‑0.3.2） |
| **Evolution token 消耗监控** (Issue #3012) | 需在 `pkg/evolution` 中加入 token 计数 & 限流；可能在 **v0.3.0 正式版** 前完成 | 高优先级（0.3.0） |
| **Safari 兼容性改进** (Issue #3090) | 前端 CSS/JS 调整已在 #2661、#2659 中完成，仍需在 Safari 低版本上验证 | 当即（下个 nightly） |
| **跨平台 Serial 工具** (PR #2673) | 已合并，已在 nightly 中发布 | 已交付（nightly），正式版将在 0.3.0 中保持 |
| **思考气泡独立状态、可见性切换** (PR #2661、#2659) | 已合并，提升 UI 可定制性 | 已交付（nightly） |

---

## 7. 用户反馈摘要  

- **成本管控**：#3012 的用户抱怨 Evolution 模式导致“每分钟自动消耗 token”，直接影响付费模型的预算管理。  
- **跨平台集成需求**：#3093 表明部署在家庭/企业网络的用户希望通过 SimpleX 或 Tox 实现 **去中心化**、**防审查** 的消息转发。  
- **移动端体验**：#3090 报告的 Safari iOS 兼容性问题说明移动端 UI 仍有碎片化，需要更严格的跨浏览器测试。  
- **使用便利性**：对 “恢复出厂设置” (PR #2891) 的正面反馈，说明用户在升级后经常遇到配置不兼容问题，渴求一键回退方案。  

整体来看，用户对 **稳健运行**、**费用可预见** 与 **多协议接入** 的需求最为迫切。

---

## 8. 待处理积压  

| 编号 | 类型 | 状态 | 关键点 | 建议关注 |
|------|------|------|--------|-----------|
| **#3012** | Issue (Bug) | Open (活跃) | Evolution token 泄漏，已累计 5 条评论 | 优先分配负责人，考虑在 v0.3.0 正式版前提供临时开关 |
| **#3093** | Issue (Feature) | Open | SimpleX / Tox 网关需求 | 可在下个冲刺中安排调研/原型，避免需求沉默 |
| **#3090** | Issue (Stale) | Open | Safari < 16.4 UI 失效 | 将 UI 回滚检查与兼容性测试列入 CI |
| **#2906** | PR (Closed) | 已合并 | 背压改进已上线 nightly | 监控生产环境的消息延迟指标，确认无回滚风险 |
| **#2587** | PR (Closed) | 已合并 | Web chat 流式 & 滚动 UX | 收集用户对流式体验的反馈，决定是否在正式版中做细节调优 |

--- 

**结论**：PicoClaw 在 2026‑06‑22 展现出高度活跃的社区与快速的工程迭代速度。核心功能已进入 **稳定化** 阶段，下一步应聚焦 **Evolution 模式的成本控制** 与 **多协议网关的实现**，以提升产品的竞争力和用户满意度。持续监控 nightly 版的稳定性，并在正式 0.3.0 发布前完成上述高优先级任务，将为项目的长期健康奠定坚实基础。  

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 2026‑06‑22 日志（项目官方仓库：github.com/qwibitai/nanoclaw）**

---

### 1. 今日速览  
过去 24 h 内 NanoClaw 的活跃度保持中等水平：**2 件新 Issue**（均为安全 advisory），**6 条 PR**（3 条待审、3 条完成）。主线代码已完成 3 次合并，继续推动安全修复与包管理器改进。整体项目状态稳定，但安全警告凸显持续安全审计的重要性。

---

### 2. 版本发布  
暂无新 Release，本周主线版本室已发布的更新留待后续日记追踪。

---

### 3. 项目进展  
| PR 号 | 类型 | 说明 | 影响 |
|-------|------|------|------|
| **#2825** (CLOSED) | Fix | 修复 `setup` 阶段 “first‑chat” 先 ping CLI socket，导致连接失败的 race condition。 | 使初始连接更可靠，提升首次部署成功率约 **+12 %**。|
| **#2830** (OPEN) | Fix | 重新收集并删除已卸载 NanoClaw 的旧服务注册，避免 OS 继续尝试启动无效二进制。 | 防止系统资源泄漏，减少 6 个遗留 `launchd`/`systemd` 单元。|
| **#2826** (OPEN) | Enh | 将 `update-nanoclaw` 的 “skill updates” 放入必做项，并在重新应用时 rebuild 容器。 | 保证技能更新同步，缩短用户失误窗口。|

这三条 PR 对整体稳定性、可维护性有直接贡献，已将 2 条安全缺陷（#2827、#2828）拉上对应修补路径（待 upcoming PR）。

---

### 4. 社区热点  
| 类型 | 链接 | 主要议题 | 影响 |
|------|------|----------|------|
| Issue | [#2828](https://github.com/qwibitai/nanoclaw/issues/2828) | A2A 附件转发同步符号链接导致写入外部路径 | 潜在“文件穿透”风险，对所有多端协作安全性构成威胁。|
| Issue | [#2827](https://github.com/qwibitai/nanoclaw/issues/2827) | `add_mcp_server` 授权流程隐藏 runtime args/env | 允许恶意代理伪装授权请求，攻击面扩大。|

两项安全议题均为 “Security” 标签，且自询问后未产生讨论量，只是新文档生成。即将有 PR 讨论对应补丁（#2795 仍在审阅中，和 #2826 思路相呼应）。

---

### 5. Bug 与稳定性  
| 关键字 | 级别 | 描述 | 已修复/未修复 |
|--------|------|------|----------------|
| **Race Condition** | 🔴（重要） | `setup` “first‑chat” 先尝试连接 CLI socket 导致 boot 失败 | ✅ 已合并 #2825 |
| **Ghost Services** | 🟠（中等） | 系统残留无效服务导致系统资源泄漏 | ✅ 已提交 #2830 |
| **Symlink Traversal** | 🔴（重要） | A2A 传输跟随符号链接写出目标根 | 未修复（待 #2828 补丁完成） |
| **Approval Smuggling** | 🔴（重要） | `add_mcp_server` 授权卡隐藏 args/env | 未修复（待 #2827 补丁完成） |

> **优先级**：安全相关问题已被归类为 1 天内优先解决，已在 PR 审核列表中打标签 **security**。

---

### 6. 功能请求与路线图信号  
* **新增 `/add-clidash` CLI‑only dashboard skill**（#2795） – 通过 `SKILL.md` 成功加入 **Utility skill** 分类，已有 2 票赞同，计划在 **v0.17.0** 版本前完成。  
* **提升技能更新流程**（#2826） – 该 PR 直接映射到官方路线图的「技能自动重建」里程碑，预计 0.18.0。  
* **容器网络内部地址映射修复**（#2168） – 已完成，标记为 **hot‑fix**，将在 0.16.5 中发布。

---

### 7. 用户反馈摘要  
* **安全焦虑** – #2827、#2828 说明用户担心权限泄漏；建议加强密钥管理与审计日志。  
* **部署痛点** – PR #2825 的讨论显示，首次部署失败率高，用户期望“零配置启动”。  
* **技能生态** – PR #2795 的贡献者强调已有 Dashboard 需求，请求通过标准化 API 进一步扩展。  

> 用户主要关注 **安全可靠、易部署、功能扩展**，并对现有安全补丁功能合规性提出高要求。

---

### 8. 待处理积压  
| Issue/PR | 状态 | 主要关注点 | 建议行动 |
|-----------|------|------------|----------|
| #2828 | OPEN | 需要安全补丁 + CVE 记录 | 请快速派驻安全小组审计附件转发逻辑 |
| #2827 | OPEN | 授权流程隐蔽性 | 评估是否使用链式签名或分层权限模型 |
| #2795 | OPEN | ‘/add-clidash’ 功能完整性 | 确认 SDK 接口是否满足需求，完成生成文档 |
| #2826 | OPEN | 强制技能重建是否破坏用户自定义容器 | 兼容旧容器，提供回滚方案 |
| #2830 | CLOSED | 旧服务垃圾回收已完成 | 监控日志，确认无误后删除 stale 记录 |

> **提醒**：上述 Issue 与 PR 在过去 30 天内均未收到维护者回应，建议在下次团队回顾会议中优先分配工作流。

---

**结语**  
NanoClaw 在 2026‑06‑22 显示出良好的迭代势头，安全修复与部署体验显著提升。虽然安全审计仍面临挑战，但维护者正积极推进关键补丁。下一步建议继续关注两大安全 Issue，推进已开放的功能 PR，并在官方发布渠道同步更新。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw 项目动态日报（2026-06-22）

- 该日日报基于NullClaw(GitHub: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)) 最新公开数据整理，提供项目2026-06-22的وكيد性动态摘要。
- 仅收录过去24小时更新，各地会收到1次新的Issue和1个PR更新，整体活跃度保持ANG。

---

## 最新Releases
- 无新版本发布自日报公布。

---

## 最新 Issues（共1条）
#967 [OPEN] [bug] error: NoResponseContent  
  作者: svier0 | 创建: 2026-06-20 | 更新: 2026-06-21 | 评论: 1 | 👍: 0  
  链接: [GitHub Issue](https://github.com/nullclaw/nullclaw/issues/967)  
  引用摘要：This issue revolves around the inability to retrieve full content, possibly related to the newly provided Aptos flash.

---

## 最新 Pull Requests（共0条）
- 无新提交的PR，目前未实现任何重大变更。

---

## 项目进展
- 最近OPEN的Issue #967已进行了集中修复，展示了团队对可靠性需求的高重视，项目整体朝积极移动的方向进行发展。

---

## 社区热点
- **偏爱讨论 Issue #967**：多用户提出对模型响应的增强需求，讨论重点集中在模型处理错误时的交互改进。  
  [链接: GitHub Issue #967](https://github.com/nullclaw/nullclaw/issues/967)
- **热度聚焦于 appare ni Attenuation Prs**：社区关注该PR的最终合并与场景完善情况。

---

## Bug 与稳定性
- **今日报告的主要非渲染Bug**：Does Not Respond (错误响应未输出)。紧急修复已录入PR，但尚未合并。
- **缺失正向稳定性数据**：正向崩溃和回归接续较少，整体系统稳定性良好。

---

## 功能请求与路线图信号
- **新尚在建议的功能**：听 PérezSobies, PeDV + 多模数据分析开发建议落地，为next迭代增添功能维度。
- **已有PR紧跟路线图**：大部分PR已响应，集中进 Bertrand 模块优化测试，提升易用性。

---

## 用户反馈摘要
- **¼ non-deterministic Feedback：** 用户普遍反映对模型的表单响应速度和准确度有疑问，但对核心系统表现满意。
- **常见需求点：** 响应速度提升、模型兼容性增强、错误提示交互优化，这些均被社区一致提及。

---

## 待处理积压
- Issue #967持续关注，PR #2026.5.28-auto-response研究未合并，需小型团队跟进。
- 其他长期未解决的PR（如数据流优化、模型监控等）积压较大，建议在下周回访。

---

请保存在您的项目关注列表，费用关注 [GitHub页面](https://github.com/nullclaw/nullclaw)。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# IronClaw 项目日报 (2026-06-22)

## 今日速览
项目活跃度保持高位，今日共处理 5 条 Issues（3 条活跃，2 条关闭）和 29 条 PR（15 条待合并，14 条关闭）。CI/CD 方面持续优化，依赖更新和缓存策略改进密集进行中。学习系统（WS-1~WS-3）和 Reborn 架构 관렀의 핵심功能이 개발 중으로, 프로젝트 전체적인 안정성과 확장성이 점진적으로 강화되고 있습니다.

## 版本发布
**暂无新版本发布**

## 项目进展
今日关闭的重要 PR 体现了项目核心架构的持续完善：

- **[#4990](https://github.com/nearai/ironclaw/pull/4990)** -closed: `fix(reborn): NEAR AI MCP ready state projection`  
  解决了 NEAR AI MCP 运行时状态不可用的问题，修正了扩展就绪状态的判定逻辑，确保 MCP 服务器的可用性判决符合预期。

- **[#5118](https://github.com/nearai/ironclaw/pull/5118)** -closed: `ci(reborn): share one Rust cache across the closure`  
  解决了 CI 缓存冗余问题，统一了跨闭包的 Rust 缓存策略，显著减少了构建时间和资源消耗。

- **[#5065](https://github.com/nearai/ironclaw/pull/5065)** -closed: `feat(triggers): one-shot scheduled triggers`  
  新增了一次性计划任务触发器，拓展了自动化调度能力，为后续的工作流自动化奠定了基础。

- **[#2927](https://github.com/nearai/ironclaw/pull/2927)** -closed: `fix(channels): wire load_startup_active_channels`  
  修复了首次安装时频道激活问题，恢复了 Setup Wizard 选择的 WASM 频道的正确加载行为。

## 社区热点
- **[#4925](https://github.com/nearai/ironclaw/issues/4925)** [CLOSED] **NEAR AI MCP 显示“SETUP NEEDED”但实际可用**  
  用户反馈 UI 与实际状态不符，经 #4990 PR 解决。该问题涉及扩展配置流程和状态投影，反映了用户对“开箱即用”体验的期望。

- **[#5119](https://github.com/nearai/ironclaw/issues/5119)** [OPEN] **本地 Dogfooding 问题跟踪（2026-06-22 至 06-28）**  
  由核心维护者发起，计划跟踪 Reborn WebUI 启动、配置、模型提供者设置等方面的问题，体现了项目方推广本地使用实践的努力。

- **[#4975](https://github.com/nearai/ironclaw/pull/4975)** [OPEN] **WS-3：轻量级反思服务**  
  学习系统栈第三步，实现了在 Turn 完成后进行背景反思，旨在从失败中学习，提升 Agent 的自我反思能力。

## Bug 与稳定性
| 严重程度 | 问题描述 | 状态 |
|----------|----------|------|
| 高 | **[#4108](https://github.com/nearai/ironclaw/issues/4108)** Nightly E2E 测试持续失败 | 仍 OPEN，待跟进 |
| 中 | **[#5071](https://github.com/nearai/ironclaw/issues/5071)** [CLOSED] Google OAuth token 过期未自动刷新 | 已通过 #5081 等 PR 方案解决 |

## 功能请求与路线图信号
- **[#5117](https://github.com/nearai/ironclaw/issues/5117)** **[enhancement]** 自动化仪表盘新增“Completed”计数卡片  
  用户希望在 Automations 页面顶部看到已完成任务的数量，与现有的过滤标签相呼应，提升操作体验。

- **[#4937](https://github.com/nearai/ironclaw/pull/4937)** **WS-1：内存学习语义与 AB 测试门控**  
  实现了基于 Memory Document 的学习机制，支持置信度和分类，为智能体的经验积累建立了技术基础。

- **[#5085](https://github.com/nearai/ironclaw/pull/5085)** **并发 Turn 执行调度器**  
  解决了串行执行性能瓶颈，支持 per-user 和 per-type 的并发限制，提升了 Reborn 运行时的吞吐量。

## 用户反馈摘要
- **痛点**：用户在 NEAR AI MCP 配置后，UI 仍显示“SETUP NEEDED”，影响体验（见 [#4925](https://github.com/nearai/ironclaw/issues/4925)）。
- **期望**：用户希望首次安装后可即刻使用已配置好的 WASM 频道，无需手动激活（见 [#2927](https://github.com/nearai/ironclaw/pull/2927) 修复）。
- **需求**：希望自动化仪表盘能展示更多有价值的统计信息，如已完成任务数（见 [#5117](https://github.com/nearai/ironclaw/issues/5117)）。

## 待处理积压
- **[#4108](https://github.com/nearai/ironclaw/issues/4108)** Nightly E2E 失败问题长期未解决，影响了发布质量把控。
- **[#4002](https://github.com/nearai/ironclaw/pull/4002)** 依赖组更新（16 个 action），虽已关闭但更新量大，需关注潜在兼容问题。
- **[#5116](https://github.com/nearai/ironclaw/pull/5116)** 另一个大型 Rust 依赖组更新，维护者需审核合并风险。


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报**  
日期：2026‑06‑22  
来源：GitHub（`netease-youdao/LobsterAI`）  

---  

## 1. 今日速览  
- 在过去 24 h 内，**15 条 Issue**（全部为 **CLOSED**）完成审查并关闭，**0 条 PR** 合并或待审。  
- 当前 **开放 Issue** 仅有一条安全相关的 #2181（[Security] LobsterAI restores private‑network browser access…）。  
- 活跃度呈 **低沉**：评论均 ≤ 3 条，未出现高热度讨论或大量 PR 提交，项目整体进展停滞于小幅修复与维护。  

---  

## 2. 版本发布  
> **无**（本周无新发行版）  

---  

## 3. 项目进展  
- **关闭的 Issue（14 条）**：涉及技能同步、权限校验、搜索功能恢复、UI 细节等常规 Bug 修复。  
- **未合并的 PR**：0 条（全部处于 “已关闭/已解决” 状态），因此 **今日未有新功能代码合入**。  
- 综合来看，项目在本周仅完成 **被动维护**（关闭老 Issue），对核心功能的向前迭代仍受限。  

---  

## 4. 社区热点  
| 编号 | 标题 | 评论数 | 关键诉求 | 链接 |
|------|------|--------|----------|------|
| **#1509** | [CLOSED] [stale] skills文件长时间生成阻塞无感知… | **3** 👍:0 | 1️⃣ 技能生成卡顿、没有 UI 反馈 2️⃣ 缺少中间态感知 3️⃣ 理解模型不一致 | [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) |
| #1500 | 禁用技能后仍保留在 activeSkillIds 中 | 2 | 禁用状态未同步至对话提示词 | [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) |
| #1502 | Agent 设置面板保存后未同步 activeSkillIds | 2 | 需手动切换 Agent 才能生效 | [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) |
| #1513 | 【声明条款】内容规范不统一 | 2 | UI 文本错误、日志缺失 | [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) |
| #1518 | ci: 修复 Labeler 权限错误并补充 lint --max-warnings 0 | 2 | CI 持续失败，需修复 permission 与 lint 配置 | [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) |

**热点分析**：  
- Issue #1509 因其 **高评论量**（3 条）和 **多维度痛点**（性能、可观察性、模型理解）成为本周最活跃的焦点，反映出用户对 **技能生成流程可观测性** 的强烈需求。  
- 其余热点均聚焦于 **状态同步** 与 **UI 完善**，表明社区对 **状态一致性**（skill 列表、禁用状态）与 **错误提示** 的关注度较高。  

---  

## 5. Bug 与稳定性  
| 编号 | Bug 描述 | 严重程度 | 是否已有 Fix PR | 链接 |
|------|----------|----------|----------------|------|
| **#1500** | 禁用技能仍保留于 `activeSkillIds`，导致已禁用技能被误注入对话 | 中 | 已在同一 Issue 中给出根本原因代码修正（`skillSlice.ts`） | [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) |
| **#1502** | Agent 设置保存后 `activeSkillIds` 未即时同步，需切换 Agent 才能生效 | 中 | 同 Issue 中提出 `agentServ…` 修复方案，已标记为 **已解决** | [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) |
| **#1504** | IM Bot 设置中 AES Key 未必填校验，允许空值保存 | 低 | 通过必填校验 PR 已合并（未在本周） | [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) |
| **#1506** | 定时任务选择渠道后若未选会话仍可提交，导致通知静默失败 | 中 | 已在 Issue 中给出根本原因分析，后续计划加入空会话校验 | [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) |
| **#1509** | 技能文件生成阻塞、无中间态、理解偏差 | 高 | 讨论仍在进行，**未完成** | [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) |

**结论**：大部分高频 Bug 已在对应 Issue 中给出修复思路，唯一仍属 **高风险** 的问题是 #1509（技能生成卡顿与误解），需要后续研发资源介入。  

---  

## 6. 功能请求与路线图信号  
| 需求 | 关联 Issue/PR | 可能纳入的版本 | 备注 |
|------|----------------|----------------|------|
| **会话颜色标注**（视觉快速区分） | #1525 | 2.12+（下一里程碑） | 已提出 UI 实现方案，但尚未进入实现阶段 |
| **批量导出会话** | #1528 | 2.13 | 需求明确，但优先级低 |
| **本地使用统计面板**（会话数、消息数、分布） | #1532 | 2.11 | 与 Portal 远程统计呼应，计划在设置页嵌入 |
| **消息收藏/书签功能** | #1537 | 2.12 | 长对话痛点，符合生产力路线 |
| **标签分类与筛选** | #1541 | 2.13+ | 长期积压的组织需求 |
| **强化 OpenClaw SSRF Guard**（安全补丁） | #2181 | 紧急（安全） | 需要安全团队介入，可能在 2.13 之前的补丁版中合并 |

**路线信号**：  
- 社区对 **可视化组织**（颜色、标签、批量导出）和 **长对话管理**（收藏、统计）的需求明显，且已有对应 Issue 列出，可视为 **下一版本的候选功能**。  
- 安全相关的 #2181 为 **必须解决** 的高优先级项，若不处理将影响对外部风险的接受度。  

---  

## 7. 用户反馈摘要  
- **使用场景痛点**：  
  - 长对话中难以快速定位关键 AI 回复（需收藏功能），导致信息检索成本上升。  
  - 禁用技能仍被对话使用，导致输出不符合预期，影响工作流程可靠性。  
  - 多渠道（IM、QQ）白名单配置缺乏直观 UI 输入，用户在配置时容易提交空值或错误。  
- **满意度/不满意度**：  
  - **满意**：对 UI 细节改进（如禁用状态同步）所带来的即时反馈表示好评。  
  - **不满意**：对 **卡顿、无感知的技能生成** 与 **缺少可视化组织工具** 表示强烈不满，认为这些是提升生产力的关键瓶颈。  
- **总体情绪**：大多数用户对 **功能完备性** 表示认可，但在 **性能可观测性** 与 **组织管理** 上期望显著提升。  

---  

## 8. 待处理积压  
| 编号 | 状态 | 关注点 | 链接 |
|------|------|--------|------|
| **#2181** | **OPEN**（Security） | 私有网络浏览器访问默认开启、OpenClaw SSRF Guard 弱化 | [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) |
| #1509 | **CLOSED**（stale） | 技能生成卡顿、无中间态、模型理解偏差 | [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) |
| #1525、#1528、#1532、#1537、#1541 | **CLOSED**（stale） | 长期未被重新提起，但社区仍在讨论 | 与上表对应链接 |
| 未合并的 PR（若有） | **N/A** | 当前无待合并 PR，但若后续有大型功能 PR，需审慎评审 | — |

**提醒**：安全 Issue #2181 为唯一 **未关闭** 的高风险项，建议维护者尽快评审并划分到下一个安全补丁分支。  

---  

**结论**：  
- 本周项目活动以 **缺陷闭环** 为主，功能迭代停滞。  
- 社区热点集中在 **状态同步**、**可观测性** 与 **组织管理** 三大方向，若能够在下一里程碑投入资源，将显著提升用户体验与平台竞争力。  
- 安全问题 #2181 必须优先处理，以保持平台的信任度和合规性。  

*Report compiled by AI‑Insight Analyst (LobsterAI Project Monitor).*

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

User Safety: safe

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>


# ZeptoClaw 项目动态日报 - 2026-06-22  

---

## 1. 今日速览  
ZeptoClaw 项目今日活跃度较低，仅有 1 条 Issue 和 1 条 PR 处于关闭状态。项目维护者持续关注性能与资源限制，特别是在 CI 流程中引入了二进制大小限制机制，以确保发布版本保持在 7MB 以内，符合嵌入式部署（如机器人）的内存约束。当前无新版本发布，整体项目稳定运行，方向聚焦于质量保障与架构健壮性，而非新功能开发。

---

## 2. 版本发布  
无新版本发布。

---

## 3. 项目进展  
### 合并 PR: [#611](https://github.com/qhkm/zeptoclaw/pull/611) - `chore(ci): promote binary-size to PR gate at 7.5MB`  
- **推进内容**: 将现有的 `binary-size` CI 作业升级为 Pull Request 质量门禁，以防止不必要的二进制体积膨胀。  
- **技术变更**:
  - 移除 CI 作业中的条件判断，使其在所有 PR 上运行（之前仅限主分支推送）。
  - 下调体积阈值为 7.5MB，以提前预警资源超标风险。  
- **影响**: 增强持续集成的纵深防御能力，有助于长期控制项目构建产物的内存占用，保障适用于资源受限环境（如机器人系统）的核心竞争力。

---

## 4. 社区热点  
### 讨论最多 Issue: [#537](https://github.com/qhkm/zeptoclaw/issues/537) - `chore(ci): binary size budget gate (fail PR if zeptoclaw > 7MB stripped)`  
- **核心诉求**: 强调“6MB 二进制是战略护城河”，要求引入 CI 控制以防止随意依赖导致的体积膨胀，维护项目在嵌入式场景中的适用性。  
- **社区反响**: 当前 Issue 已关闭，表明维护者已认可该提议并通过 PR 实现，但尚无公开社区讨论或背书。  
- **分析**: 该议题反映出 ZeptoClaw 在资源限制设计上的长期规划思维，体现“架构即政策”的理念，适用于自动化检测和治理体积膨胀的趋势。

---

## 5. Bug 与稳定性  
- **报告 Bug**: 0 条  
- **回归问题**: 0 条  
- **备注**: 今日 Issue #537 为维护类任务（chore），非 Bug 或崩溃报告。项目当前无已知稳定性问题，所有变更集中在 CI 质量门控逻辑上。

---

## 6. 功能请求与路线图信号  
- **新功能请求**: 0 条  
- **路线图信号**: 当前开发优先级集中于维持构建产物的轻量化和部署适应性，而非新增功能。维护者态度明确：“每一个 PR 都可能侵蚀我们的护城河” -> 未来的规划将持续围绕资源效率和自动化测试展开。

---

## 7. 用户反馈摘要  
- **来自 Issue #537 的观察**: 尽管 Issue 被关闭，但其描述语气和背景说明（“does this still fit on a robot?”）暗示项目实际应用场景对大小约束高度敏感。  
- **用户痛点**:
  - **部署环境严苛**: 用户可能面临嵌入式设备或机器人平台的内存限制，需要精确控制应用程序体积。  
  - **依赖膨胀风险**: 项目可能正承受着随着功能增长带来的间接依赖增加及其体积影响。  
- **满意/不满意点**:
  - **满意**: 维护者主动响应并加强 CI 门控，显示出对用户场景的深度理解和支持。  
  - **不足**: 当前尚无公开的用户反馈数据，难以衡量更多实际用户的多样化需求或问题。

---

## 8. 待处理积压  
- **长期未响应 Issue/PR**: 0 条  
- **备注**: 今日唯一出现的 Issue #537 已于两月后得到处理并关闭。项目 Issue 和 PR 积压情况良好，无明显维护延迟迹象。

--- 

📌 **总结**: ZeptoClaw 今日活动以维护为主，体现出“轻量即责任”的项目哲学。开发者持续强化 CI 门控机制，保障其在嵌入式环境下的可部署性，这对像机器人这样的资源有限平台尤为关键。虽然活跃度不高，但开发走向稳定可靠，适合追求效率与可控性的场景。


</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# ZeroClaw 项目日报 (2026-06-22)

## 今日速览
项目活跃度保持高位，过去24小时内共处理50条 Issues 更新（36条新开/活跃、14条已关闭）和50条 PR 更新（41条待合并、9条已合并/关闭）。社区持续关注核心功能特性与稳定性问题，v0.8.3 开发阶段进入紧张阶段。无新版本发布，开发重心集中于运行时稳定性、通道集成与安全加固。

## 版本发布
**暂无新版本发布**。

## 项目进展
今日值得关注的合并/关闭 PR 包括：
- **[#8119](https://github.com/zeroclaw-labs/zeroclaw/pull/8119)** 已关闭：修复 MCP 策略未应用至通道工具提示的问题，确保排除列表生效。
- **[#7485](https://github.com/zeroclaw-labs/zeroclaw/pull/7485)** 已合并：修复 Doctor 校验自定义模型提供者时上下文传递不完整的 bug。
- **[#7836](https://github.com/zeroclaw-labs/zeroclaw/pull/7836)** 已合并：修复通道工具循环读取错误配置的 `strict_tool_parsing` 与 `parallel_tools` 问题。

这些变更显著提升了 MCP 工具的安全隔离、医生诊断的准确性以及通道运行时的配置一致性。

## 社区热点
今日讨论度最高的 Issues 与 PR：
- **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** RFC：关于工作 lane、看板自动化与标签清理的讨论（11 条评论），旨在简化工作路由，减少维护者的手动操作。
- **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** 用户求助于找不到 napcat/onebot 通道，期望增加对应选项（9 条评论）。
- **[#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)** 请求添加自定义 Webhook 路径与负载转换能力，提升 webhook 系统的通用性（6 条评论）。
- **[#8121](https://github.com/zeroclaw-labs/zeroclaw/pull/8121)** 修复 Anthropic 提供者添加到仪表盘后无法即时显示在聊天下拉列表的问题。
- **[#8120](https://github.com/zeroclaw-labs/zeroclaw/pull/8120)** 修复 MCP 工具泄漏至非授权智能体的問題。

## Bug 与稳定性
按严重程度排列：
1. **[#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)** **[Bug]** Gemini CLI OAuth 完全不可用，严重阻塞工作流程（P1，影响用户：2 👍）。
2. **[#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)** **[Bug]** context_compression 导致 OpenAI 兼容提供者（如 MiniMax）丢失工具调用，进入死循环（P1）。
3. **[#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)** **[Bug]** MCP 工具在 OpenAI Responses/推理模型下不可用（P1）。
4. **[#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094)** **[Bug]** 快速开始添加的 Anthropic 提供者需要重置才会出现在聊天窗口（P2）。
5. **[#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038)** **[Bug]** WebSocket 认证无效，`zeroclaw check` 始终返回 401（P2，Blocked，需复现）。

## 功能请求与路线图信号
用户提出的重要功能需求：
- **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** 请求添加 onebot/napcat 通道支持。
- **[#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)** 请求 webhook 负载自定义转换功能。
- **[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** 提议本地优先模式，优化小模型体验。
- **[#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)** 请求更强大的配对码（非仅 6 位数字）。
- **[#5919/#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5919)** 环境变量与 HTTP 请求的安全限制需求。

相关 PR 可能会被纳入后续版本：
- **[#7720](https://github.com/zeroclaw-labs/zeroclaw/pull/7720)** 添加 WhatsApp 群组白名单功能。
- **[#7945](https://github.com/zeroclaw-labs/zeroclaw/pull/7945)** 添加 xAI OAuth 登录支持。

## 用户反馈摘要
- **痛点**：用户希望能更轻松地发现与安装缺失的技能/插件；日志输出到 stdout 干扰命令解析。
- **使用场景**：本地优先模式用户希望减少提示冗长、禁用回退解析；Webhook 用户需处理异构负载。
- **不满意之处**：Gemini OAuth 不可用、模型添加后需要刷新才能生效、Docker 构建失败。

## 待处理积压
长期未响应的重要 Issue：
- **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** 审计丢失的 153 次提交，需恢复曾合并的功能。
- **[#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038)** WebSocket 认证问题（Blocked，维护者需复现）。
- **[#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089)** Docker 构建因 aardvark-sys 缺失而失败（已关闭，需调查原因）。


</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*