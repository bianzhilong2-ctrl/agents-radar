# OpenClaw 生态日报 2026-09-16

> Issues: 478 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-16 02:25 UTC

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

# OpenClaw 项目动态日报
**日期：2026-09-16 | 来源：github.com/openclaw/openclaw**

---

## 1. 今日速览

OpenClaw 今日处于**极高活跃度但高压运维状态**。过去24小时内处理了 478 条 Issues 更新（304 条新开/活跃，174 条已关闭）和 500 条 PR 更新（332 条待合并，168 条已合并/关闭），无新版本发布。项目整体呈现"密集修复 + 持续积压"并存的格局：维护团队在积极合并 PR 并关闭已验证的 Bug，但新报告的高严重度问题（尤其是 Gateway 崩溃、内存泄漏和消息丢失）仍以每日数十条的速度涌入。活跃度评分：**极高（🔴 Red）**，健康度：**需要关注（🟡 Yellow）**——修复速度略低于问题暴露速度。

---

## 2. 版本发布

**无新版本发布。** 当前稳定版本仍为 `2026.9.4`（3a9d69d），多个 Issue 表明 `2026.9.4` 上仍存在大量回归和崩溃问题。`beta` 和 `latest` 标签均指向同一版本。社区对发布节奏的焦虑在 Issue #148614、#146637 等更新失败报告中有所体现。

---

## 3. 项目进展

### 今日合并/推进的重要 PR：

| PR | 领域 | 说明 | 状态 |
|---|------|------|------|
| [#149568](https://github.com/openclaw/openclaw/pull/149568) | agents | 约束 `sessions_spawn` 的 `agentId` schema，防止模型填入非法 agent 名称 | 📣 需证明 |
| [#149596](https://github.com/openclaw/openclaw/pull/149596) | gateway | 更新失败后 triage 准入接受 cgroup-v1 作用域 | 📣 需证明 |
| [#149592](https://github.com/openclaw/openclaw/pull/149592) | build | 冷声明构建并行化，利用闲置内存加速编译 | 👀 维护者查看中 |
| [#149590](https://github.com/openclaw/openclaw/pull/149590) | audit | 减少审计日志导入的查询编译开销 | 👀 维护者查看中 |
| [#149505](https://github.com/openclaw/openclaw/pull/149505) | web-ui | 关闭目录面板后停止加载历史记录 | 👀 维护者查看中 |
| [#149529](https://github.com/openclaw/openclaw/pull/149529) | memory-core | 会话历史隐私与召回优化 | 📣 需证明 |
| [#149604](https://github.com/openclaw/openclaw/pull/149604) | auth | 尊重运行时偏好中的 auth-profile 模型选择 | 新建 |
| [#149548](https://github.com/openclaw/openclaw/pull/149548) | matrix | Matrix 凭证与加密快照存储移至 worker 线程 | 👀 维护者查看中 |
| [#149597](https://github.com/openclaw/openclaw/pull/149597) | diagnostics | 保留带符号 CPU profile 坐标 | 👀 维护者查看中 |
| [#149600](https://github.com/openclaw/openclaw/pull/149600) | cron | 保持技能审查协调响应性 | 新建 |

### 进展评估：
项目在**基础设施层**（数据库性能、构建优化、诊断工具）推进明显，但**核心稳定性**（Gateway 内存、消息传递）方面的 PR 数量相对不足。维护者 steipete 主导了大部分 PR（约 10+ 条/日），显示其是当前项目的核心驱动力。

---

## 4. 社区热点

### 讨论最活跃的 Issues：

| Issue | 评论数 | 严重度 | 主题 |
|-------|--------|--------|------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 40 | 🦞 Diamond Lobster | 工具调用间文本泄露到消息通道 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | 🦪 Silver Shellfish | Hook/工具子进程泄漏为僵尸进程 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 25 | 🦪 Silver Shellfish | Gateway 内存泄漏（350MB→15.5GB） |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 24 | 🦪 Silver Shellfish | Codex PreToolUse hook 产生 CPU 占用 100%+ 进程 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 20 | 🦞 Diamond Lobster | 同步持久化阻塞 Gateway 事件循环 |

### 热点分析：
- **#25592**（40 条评论）居首，反映了用户对**消息通道污染**的强烈不满——内部处理输出被意外发送到 Slack/iMessage 等外部渠道，属于严重 UX 缺陷。
- **#91588**（Gateway 内存泄漏）和 **#97616**（僵尸进程）共同指向**长期运行稳定性**这一核心痛点，多个用户报告 OOM 崩溃导致反复重启。
- **#91009** 涉及 Codex 集成，属于第三方集成带来的连锁问题，用户期望团队对插件生态有更强的隔离机制。

---

## 5. Bug 与稳定性

### P0 级（阻断性）：
| Issue | 描述 | 是否有 Fix PR |
|-------|------|--------------|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook 进程 CPU 占满，阻塞 Gateway RPC | ❌ 无 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 2026.9.4 回归：回复被位移后丢失，tool authority snapshot 错误 | ❌ 无 |
| [#144739](https://github.com/openclaw/openclaw/issues/144739) | npm 更新在 schema-17 候选状态卡死 | ❌ 无 |
| [#148866](https://github.com/openclaw/openclaw/issues/148866) | `gateway.bind=lan` 导致永久重启循环 | ✅ CLOSED |

### P1 级（高严重）：
| Issue | 描述 | 是否有 Fix PR |
|-------|------|--------------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具间文本泄露到消息通道 | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 未收割子进程累积为僵尸 | ❌ 无 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 从 350MB 泄漏至 15.5GB | ❌ 无 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化阻塞事件循环 | ❌ 无 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP init 超时导致 Gateway 崩溃（unhandled rejection） | ❌ 无 |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 活跃回复期间消息被丢弃 | ❌ 无 |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 无限增长（Windows） | ❌ 无 |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | memory-core 重索引锁无法释放，19GB 孤儿 DB 累积 | ❌ 无 |
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | memory_search 工具始终 15s 超时 | ❌ 无 |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | claude-cli 长轮次丢失回复 | ❌ 无 |

### 关键回归问题（Regressions）：
- **#139847**（2026.9.2 引入）：回复期间消息被丢弃
- **#137332**（2026.9.x）：终端 requester-settle 批次无限重试
- **#139710**（2026.9.x）：插件热重载杀死系统 Agent turn
- **#146004**（2026.9.3）：子 Agent 完成触发意外 heartbeat turn

### 今日关闭的 Bug：
- ✅ [#80520](https://github.com/openclaw/openclaw/issues/80520)：Telegram 消息静默丢失
- ✅ [#145152](https://github.com/openclaw/openclaw/issues/145152)：卡住会话恢复误报强制清除
- ✅ [#148614](https://github.com/openclaw/openclaw/issues/148614)：2026.9.3 更新失败
- ✅ [#123326](https://github.com/openclaw/openclaw/issues/123326)：多 Agent Codex 迁移启动崩溃

---

## 6. 功能请求与路线图信号

### 高优先级功能请求：
| Issue | 描述 | 相关 PR | 路线图信号 |
|-------|------|---------|------------|
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | 在 session_status 中暴露解析后的后端模型 | 无 | 📈 中期可能 |
| [#51572](https://github.com/openclaw/openclaw/issues/51572) | 会话重置/剪枝时触发 session-memory hook | 无 | 📈 需评估 |
| [#126094](https://github.com/openclaw/openclaw/issues/126094) | 会话侧边栏分组继承 | [#126094](https://github.com/openclaw/openclaw/pull/126094) | 📈 已有关联 PR |
| [#149599](https://github.com/openclaw/openclaw/pull/149599) | 异步作用域会话访问提供者 | 新建 | 📈 本日推进 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 计费冷却期添加探针恢复和手动重置 | 无 | 📈 用户强烈需求 |

### 路线图判断：
- **异步会话访问**（#149599）已有 PR 推进，可能纳入下一版本
- **侧边栏分组继承**（#126094）有关联 PR，预计近期合并
- **模型暴露**和**计费恢复**属于用户高频需求但尚无具体实施信号
- **Android 聊天界面**（#46058）仍为独立 fork，未见合并计划

---

## 7. 用户反馈摘要

### 核心痛点（按频率排序）：

1. **Gateway 稳定性崩溃**（多条 Diamond Lobster 级 Issue）：
   - "RSS 从 350MB 增长到 15.5GB，最终被 OOM killer 杀掉"（#91588）
   - "永久重启循环，每次启动都失败"（#148866）
   - "MCP 初始化超时就导致整个 Gateway 崩溃"（#144911）

2. **消息丢失与投递不可靠**：
   - "Telegram 消息静默丢失，没有任何 sendMessage 日志"（#80520）
   - "活跃回复期间到达的消息被直接丢弃"（#139847）
   - "iMessage 消息被重复投递 2-3 次，携带序列化内部上下文"（#143632）
   - "文本在工具调用间泄露到外部消息通道"（#25592）

3. **更新与安装问题**：
   - "npm update 反复失败，在 global install swap 阶段报错"（#146637）
   - "更新过程将旧版本状态迁移到

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-09-16)

---

## 1. 生态全景
当前生态呈现 **"一超多强、分层演进"** 态势。头部项目 OpenClaw 处于大规模生产化运维的高压期，暴露出架构扩展期的系统性稳定性债务（内存泄漏、消息丢失、Gateway 崩溃）；NanoBot、CoPaw、NanoClaw 等二梯队项目已进入 **多模态交互、多租户协作、跨端无缝漫游** 的功能竞争期，发布节奏快、PR 吞吐率高；Hermes Agent、PicoClaw 专注于基础设施加固与边缘场景适配；ZeptoClaw、Moltis 等长尾项目处于依赖维护或低频迭代期。整体生态正从 "单机 CLI Agent" 向 **"云边端协同、多模型路由、企业级治理"** 的复合型智能体平台演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 (新/关) | PR 更新 (待/合) | Release | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 304 / 174 | 332 / 168 | 无 (停在 2026.9.4) | 🟡 **需关注** (修复<涌入) | 高并发运维、P0 Bug 堆积、核心维护者单点 |
| **NanoBot** | 3 / 0 | 8 / 13 | **v0.3.5** (里程碑) | 🟢 **极高** | 多端协同发布、快速修复闭环、商业化扩展 |
| **Hermes Agent** | 13 / 37 | 8 / 42 | 无 | 🟢 **良好** | 高频 Triage、STT/TUI 稳定性修复、压缩活锁风险 |
| **CoPaw (QwenPaw)** | 8 / 17 | 25 / 25 | 无 (筹备 2.2.0) | 🟢 **良好** | Hub 多租户规划热、SubAgent 稳定性回归、MCP 修复 |
| **NanoClaw** | 2 / 3 | 19 / 21 | 无 | 🟡 **中等偏上** | 架构重构期、Cutover 死锁风险、语音/邮件通道扩展 |
| **PicoClaw** | 2 / 0 | 3 / 2 | 无 | 🟡 **活跃修复期** | 配置并发安全、数据竞态、Keenable 搜索接入 |
| **ZeptoClaw** | 0 / 0 | 18 / 0 | 无 | 🟠 **依赖积压** | 18 个 Dependabot PR 堆积、Astro 7 破坏性升级风险 |
| **Moltis** | 1 / 0 | 1 / 0 | 无 | ⚪ **低频维护** | 构建优化 PR 待审、OpenAI 端点扩展需求挂起 |
| **NullClaw / IronClaw / TinyClaw** | 0 / 0 | 0 / 0 | 无 | ⚪ **静默** | 无活动 |
| **ZeroClaw / LobsterAI** | - | - | - | ⚪ **数据缺失** | 摘要生成失败 |

> **数据说明**：OpenClaw 数量级为其他项目总和 10 倍以上，属于超大规模单体仓库运维模式；NanoBot、Hermes、CoPaw 属于中等规模高吞吐健康项目；其余多为早期或小规模维护项目。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 |
| :--- | :--- |
| **技术路线差异** | **重 Gateway、重状态持久化、重多协议网关集成** (Matrix, Slack, Telegram, iMessage, Mattermost 等)。架构呈 "中心化 Gateway + 解耦 Agent Worker" 模式，对比 NanoBot/CoPaw 的 "轻量级单二进制/插件化" 路线，OpenClaw 更像分布式消息总线。 |
| **核心优势** | 1. **最完备的外部通道适配生态** (IM/Email/VoIP 全覆盖)；2. **企业级审计、计费、权限模型** 已落地；3. **超大规模真实负载验证** 的内存模型与数据库分片方案 (SQLite WAL, Postgres)。 |
| **社区规模** | **绝对头部**：Issue/PR 量级、参与人数、外部集成贡献者数量均为生态第一。但呈现 **"核心维护者 (steipete) 高负载单点驱动"** 特征，Bus Factor 风险高。 |
| **主要挑战** | **技术债务爆发期**：Gateway 内存泄漏 (350MB→15.5GB)、同步持久化阻塞事件循环、消息通道污染等 P0 问题密集，且修复速度跟不上回归引入速度。版本发布已停滞 12 天。 |

---

## 4. 共同关注的技术方向 (跨项目趋同)

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **多模型路由与提供商聚合** | **NanoBot** (#5666 aimlapi), **CoPaw** (#7736 DeepSeek V4 Flash), **Moltis** (#205 自定义 OpenAI 端点参数), **NanoClaw** (#3824/3825 Provider Credential/Iron Proxy) | 统一抽象层接入 10+ 模型商，支持按模型维度配置参数、凭证隔离、代理穿透。 |
| **跨端/多租户会话漫游** | **NanoBot** (v0.3.5 终端↔WebUI 无缝切换), **CoPaw** (#7318 Hub 多租户版规划), **NanoClaw** (#3813 Durable Handoff), **Hermes** (#111599 TUI 会话保持) | 会话状态序列化、权限隔离、设备间上下文同步，从 "单用户单设备" 向 "团队/多设备" 延伸。 |
| **MCP (Model Context Protocol) 生态建设** | **CoPaw** (#7735/7729 修复 Java/HTTP 兼容), **NanoClaw** (#3697 Keenable MCP Tool), **Hermes** (#111707 Kanban/Codex 集成失败), **OpenClaw** (#144911 MCP Init 超时崩溃) | 修正 SDK 兼容性、增加安全认证、解决初始化阻塞 Gateway 主流程、工具技能化注册。 |
| **长期运行稳定性 (内存/进程/持久化)** | **OpenClaw** (Gateway RSS 泄漏、僵尸进程、WAL 增长), **Hermes** (STT CUDA 回退、后台水合重试), **NanoClaw** (Cutover Drain 死锁), **PicoClaw** (Config Data Race) | 核心从 "功能实现" 转向 "生产级 SLA"：内存剖析、子进程收割、异步写入、配置热加载锁。 |
| **语音/多模态原生交互** | **NanoClaw** (#3764 /add-voice 全双工), **CoPaw** (#7792 WeChat 视频/音频 400 错误), **Hermes** (STT Whisper CUDA/CPU 救援) | 浏览器全双工音频流、IM 多媒体消息标准化投递、本地语音推理硬件加速容错。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **企业级连接中枢** | 企业 IT、高阶开发者、需接入 10+ IM 系统的自动化团队 | **Rust + Go 混合**，中心化 Gateway (单进程高并发)、SQLite/Postgres 混合存储、插件热加载、强审计链。 |
| **NanoBot** | **极致个人体验 & 商业化落地** | 个人开发者、追求 "一个 Agent 到处跑" 的极客、SaaS 服务商 | **单二进制 (Rust/Go)**，内置 TUI/WebUI/IM 适配器，强调 "零配置跨端"，引入商业提供商合作 (aimlapi)。 |
| **CoPaw (QwenPaw)** | **团队协作工作台 & 模型治理** | 中小团队、需要模型网关/成员治理/成本控制的组织 | **前后端分离 (React + Go/Rust)**，重 Console 工作台、Advisor Mode (大小模型协同)、Hub 多租户架构。 |
| **Hermes Agent** | **桌面级原生体验 & 语音优先** | 桌面端重度用户、隐私敏感用户、语音交互场景 | **Tauri + Rust**，原生桌面 UI (Radix/Slint)、本地 STT (Whisper.cpp) 深度集成、CUDA/CPU 智能回退。 |
| **NanoClaw** | **可靠性工程 & 运维自动化** | SRE、平台工程师、需要 "Mission Control" 能力的运维场景 | **强调持久化交接、切换流控制、签名审计**，Agent Runner 强制 Tools-only Delivery，安全隔离优先。 |
| **PicoClaw** | **边缘/嵌入式 & 配置安全** | IoT 设备、资源受限环境、对配置安全极敏感场景 | **轻量级 Rust**，Config 敏感数据缓存并发安全、零 API Key 搜索 (Keenable)、Mesh 观测 (P2P 网络可视化)。 |
| **ZeptoClaw** | **文档站/工程化样板** | 项目维护者、技术文档工程师 | **Astro/Starlight 文档栈**，主仓库功能开发极弱，主要价值在于依赖自动化治理演示。 |
| **Moltis** | **API 网关/代理中间件** | 需统一管理多模型端点的开发者 | **纯代理层**，聚焦 OpenAI 兼容层的 Body 参数透传、模型级配置覆盖，无 Agent 运行时。 |

---

## 6. 社区热度与成熟度分层

| 梯队 | 项目 | 阶段特征 | 关键指标 |
| :--- | :--- | :--- | :--- |
| **T0: 超大规模生产化/债务偿还期** | **OpenClaw** | 日均 800+ Issue/PR 吞吐，但版本停滞，P0 Bug 积压，核心维护者负载过载。 | **极高活跃 / 低发布 / 高风险** |
| **T1: 快速迭代/功能扩张期** | **NanoBot, CoPaw, Hermes Agent** | 周级/双周级 Release，PR 合并率 > 60%，功能 PR 占比高，社区讨论聚焦新特性规划。 | **高活跃 / 高发布 / 健康** |
| **T2: 架构重构/稳固基建期** | **NanoClaw, PicoClaw** | 无新版本，PR 集中在核心安全/并发/协议修复，Issue 多为结构性 Bug，为下个大版本铺路。 | **中活跃 / 无发布 / 关键修复中** |
| **T3: 低频维护/垂直深耕期** | **Moltis, ZeptoClaw** | 月级更新，依赖更新或单一功能 PR 为主，社区互动近乎为零。 | **低活跃 / 无发布 / 维持生存** |
| **T4: 休眠/数据不可见** | **NullClaw, IronClaw, TinyClaw, ZeroClaw, LobsterAI** | 24h 无任何 GitHub 事件，或数据抓取失败。 | **静默** |

---

## 7. 值得关注的趋势信号 (对 AI 智能体开发者的参考价值)

### 7.1 **"Gateway 即单点故障" 正成为共识，架构正在去中心化**
*   **信号**：OpenClaw Gateway 内存泄漏/崩溃导致全系统不可用；NanoClaw 引入 Durable Handoff 实现无状态切换；Hermes/NanoBot 强调本地优先、单二进制无 Gateway 依赖。
*   **启示**：**避免设计单一中心化 Gateway 承载所有连接与状态**。采用 "无状态协调层 + 有状态 Worker 池 + 持久化日志 (WAL/Kafka)" 的解耦架构，或走纯本地化/边缘化路线。

### 7.2 **MCP 正从 "协议规范" 走向 "生产级集成标准"，兼容性坑深**
*   **信号**：CoPaw 修复 Java SDK 非标准错误包装；Hermes 因工具名不匹配导致 Kanban 初始化失败；OpenClaw MCP Init 超时直接杀死 Gateway；NanoClaw 将 Keenable 注册为 MCP Tool Skill。
*   **启示**：**MCP Server/Client 实现必须通过跨语言兼容性测试套件**。接入方需实现：超时熔断、非标准错误归一化、工具 Schema 动态发现缓存、初始化异步化防阻塞。

### 7.3 **"多租户/团队协

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-09-16)

## 1. 今日速览
今日 NanoBot 项目发布了里程碑版本 **v0.3.5**，实现了“单一 Agent，多端协同工作”的核心理念，支持终端与浏览器无缝切换。项目活跃度极高，过去24小时内共有 **21 条 PR 更新**（13条已合并/关闭）和 **3 条 Issues 更新**。PR 吞吐率表现优异，维护者对近期提交的修复和特性合并节奏紧凑。尽管 Issues 仅有3条且暂无新增关闭，但今日发布版本中暴露的 Dream 循环 Bug 已迅速通过 PR 修复，整体项目健康度极高，迭代动能强劲。

## 2. 版本发布
- **版本号**：v0.3.5
- **更新内容**：核心升级为“one agent, more places to work”。用户现在可以通过 `nanobot` 运行原生终端客户端，或通过 `nanobot webui` 运行浏览器端。两者共享同一套底层架构，实现了跨终端、跨浏览器及跨聊天应用的无缝对话延续。
- **破坏性变更与迁移注意事项**：暂无明确的破坏性变更说明，但建议从旧版本升级的用户查阅 [v0.3.5 Release 详情](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5) 以了解 TUI 打包及 WebUI 交互逻辑的潜在变动。
- **链接**：[HKUDS/nanobot Release v0.3.5](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5)

## 3. 项目进展
今日项目整体向前迈进了坚实的一步，**13 条 PR 完成合并或关闭**，覆盖了性能优化、基础设施升级、安全加固及多渠道适配：
- **性能与体验优化**：`#5728` 减少了流式文本处理与经典 CLI 重绘的开销，显著降低了长回复时的本地 CPU 消耗；`#5786` 为 WebUI 分段控制添加了平滑的动画指示器。
- **核心机制修复**：`#5783` 修复了历史消息中助手内容与工具调用字段的保留问题，确保多提供商数据回放的一致性；`#5775` 将文件读取去重逻辑限定在模型上下文范围内，避免了压缩后返回旧数据的 Bug。
- **安全与稳定性**：`#5778` 加固了邮件发件人验证；`#5697` 保护了 QQ 附件下载免受 SSRF 攻击。
- **渠道适配**：`#5768` 修复了飞书 QR 码登录 URL 过期的问题。
- **链接**：
  - [PR #5728 性能优化](https://github.com/HKUDS/nanobot/pull/5728)
  - [PR #5783 助手内容保留](https://github.com/HKUDS/nanobot/pull/5783)
  - [PR #5697 QQ SSRF修复](https://github.com/HKUDS/nanobot/pull/5697)

## 4. 社区热点
今日讨论最活跃的议题集中在 **Dream 运行异常** 与 **消息噪音** 两个痛点：
- **Issue #5781**（Dream 循环 Bug）：报告 Dream 整合运行时陷入 1-2 小时的死循环，反复读取同一文件。该 Issue 获得 3 条评论，反映了用户对后台任务失控的严重担忧。
- **PR #5782**（修复 Dream 迭代限制）：直接回应了上述痛点，恢复了独立的 `dream.maxIterations` 配置（默认15次），迅速关闭了该问题。
- **Issue #5784 / PR #5780**（QQ 压缩通知噪音）：用户反馈 QQ 频道的自动压缩生命周期通知作为独立消息发送，严重打断对话。PR #5780 已将后台自动压缩通知设为隐藏，仅保留 `/compact` 手动触发时的通知。
- **链接**：
  - [Issue #5781 Dream循环](https://github.com/HKUDS/nanobot/issues/5781)
  - [PR #5782 Dream迭代限制修复](https://github.com/HKUDS/nanobot/pull/5782)
  - [PR #5780 停止发送压缩通知](https://github.com/HKUDS/nanobot/pull/5780)

## 5. Bug 与稳定性
按严重程度排列：
1. **【严重 - 已修复】** `#5781`：Dream 运行无限制循环，`dream.maxIterations` 配置失效，导致长达近200次工具调用的资源浪费。**Fix PR**：[#5782](https://github.com/HKUDS/nanobot/pull/5782) 已关闭。
2. **【中度 - 修复中】** `#5784`：QQ 频道自动压缩通知作为独立消息发送，缺乏折叠机制。**Fix PR**：[#5780](https://github.com/HKUDS/nanobot/pull/5780) 已开放。
3. **【中度 - 待处理】** `#5777`：WebUI 移动端抽屉打开时抢夺搜索框焦点，影响移动端体验。
4. **【中度 - 待处理】** `#5626`：文件系统工具缺失 `copy_file` 和 `move_file`，且当前 PR 存在冲突。
- **链接**：
  - [Issue #5781](https://github.com/HKUDS/nanobot/issues/5781)
  - [Issue #5784](https://github.com/HKUDS/nanobot/issues/5784)

## 6. 功能请求与路线图信号
结合当前开放的 PR，以下功能需求可能预示了下一版本的路线图：
- **提供商生态扩展**：`#5666` 提议添加 aimlapi.com 作为内置 OpenAI 兼容网关提供商（已获 50/50 商业合作意向）。这表明项目方正积极拓展模型路由层的多源聚合能力。
- **文件系统操作增强**：`#5626` 提出的 `copy_file` 和 `move_file` 原语，填补了当前文件工具链的空白，符合 Agent 执行复杂文件管理任务的路线图。
- **WebUI 交互精细化**：`#5776` 要求在设置中的提供商选择器增加搜索框，反映出随着提供商增多，UI 筛选效率成为核心诉求。
- **链接**：
  - [PR #5666 添加 aimlapi 提供商](https://github.com/HKUDS/nanobot/pull/5666)
  - [PR #5626 添加 copy/move 文件工具](https://github.com/HKUDS/nanobot/pull/5626)
  - [PR #5776 WebUI提供商搜索](https://github.com/HKUDS/nanobot/pull/5776)

## 7. 用户反馈摘要
- **真实痛点**：用户对后台任务（Dream）的失控状态感到沮丧，配置项不生效（如 `dream.maxIterations`）严重影响了自托管体验。
- **使用场景**：QQ/飞书等即时通讯渠道用户期望生命周期通知（如上下文压缩）能以不打断对话的方式处理（如折叠或静默），而非以普通聊天消息形式强推。
- **满意之处**：v0.3.5 版本带来的终端与浏览器跨端协同体验获得了社区积极反馈（Issue #5788 为纯粹的好评庆祝贴）。
- **链接**：
  - [Issue #5788 庆祝v0.3.5发布](https://github.com/HKUDS/nanobot/issues/5788)

## 8. 待处理积压
以下长期未响应或存在冲突的 PR/Issue 需维护者重点关注，以防拖累后续版本：
1. **【长期积压】** `#5626`：添加 `copy_file` 和 `move_file` 文件系统工具。自 09-01 创建以来一直处于 `conflict` 状态，需尽快解决代码冲突。
2. **【长期积压】** `#5666`：添加 aimlapi.com 提供商。自 09-04 创建以来尚未合并，涉及外部商业合作集成，需推动审核流程。
3. **【中等积压】** `#5748`：在批次边界持久化部分工具进度。自 09-12 起开放，涉及运行时检查点机制，逻辑较复杂。
4. **【中等积压】** `#5779`：序列化并发会话文件写入。自 09-15 起开放，涉及并发安全，是多用户场景下的潜在隐患。
- **链接**：
  - [PR #5626 文件工具冲突](https://github.com/HKUDS/nanobot/pull/5626)
  - [PR #5666 aimlapi提供商](https://github.com/HKUDS/nanobot/pull/5666)
  - [PR #5748 工具进度持久化](https://github.com/HKUDS/nanobot/pull/5748)
  - [PR #5779 并发文件写入](https://github.com/HKUDS/nanobot/pull/5779)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026‑09‑16）**  

---

### 1. 今日速览  
- **活跃度**：过去 24 h 内共处理 50 条 Issue（新开/活跃 13，已关闭 37）和 50 条 PR（待合并 8，已合并/已关闭 42），表明项目目前处于高频 triage 和 bug‑fix 状态。  
- **版本**：今日无新版本发布，维护团队正集中精力在现有分支上修复缺陷和改进功能。  
- **整体健康**：大量 Issue 被快速关闭（≈74 %），显示响应速度较快；但仍有若干高影响度的未解决问题需要关注（见下文）。

---

### 2. 版本发布  
> **无新版本**  
> 本日没有 `Releases` 更新，所有变更均通过 PR 合并进入 `main` 分支。

---

### 3. 项目进展（今日合并/关闭的重要 PR）  

| PR # | 标题 | 关联 Issue（若有） | 主要贡献 |
|------|------|-------------------|----------|
| #111599 | fix(tui): preserve sessions across gateway reconnects | #111594 | 在 WebSocket 断开后保持 TUI 会话，避免状态丢失。 |
| #111513 | fix(web): bound and deduplicate gh auth probes | – | 使用有界进程探针执行 `gh auth status$，防止超时时留下孤儿进程并去重。 |
| #111534 | fix(tui_gateway): fail a turn whose session has no agent instead of crashing | #111531 | 当会话代理为 `None` 时返回错误而非抛 `AttributeError`，避免 TUI 崩溃。 |
| #111837 | fix(desktop): honor MCP health snooze after restart | – | 桌面端在重启后仍尊重 MCP 健康检查的 24 h 冷却时间，防止重复提醒。 |
| #111857 | fix(desktop): trap focus in boot recovery | – | 引导恢复界面使用受控 Radix dialog，确保键盘焦点不会逃出遮罩区域。 |
| #111654 | fix(desktop): widen themed scrollbars from 0.25rem to 0.5rem | #111634 | 加宽主题滚动条，提升可点击性和可视度。 |
| #111795 | fix(tui): stop a deferred parent flush from rewinding the composer | – | 防止在 IME 输入时因延迟刷新导致光标倒退。 |
| #111950 | fix(tui): keep stale own-echo flushes from rewinding composer keystrokes | – | 解决快速打字时因旧回显刷新导致的光标跳动。 |
| #111352 | fix(desktop): bound background profile hydration retries | – | 对后台个人资料水合进行退避，避免前端卡顿并确保删除的配置文件被正确清理。 |
| #110883 | fix(stt): make the local-whisper CUDA → CPU rescue actually fire | – | 确保 CUDA 不可用时能回退到 CPU 进行 Whisper 转录。 |
| #111933 | fix(stt): retry lazy CUDA failures on CPU | – | 在 CUDA 延迟加载失败时重试 CPU 路径，解决 Windows 主机间歇性失败。 |
| #105336 | fix(stt): retry CPU fallback when CUDA fails during segment iteration | – | 在分段迭代期间捕获 CUDA dlopen 错误并切回 CPU。 |
| #103848 | stt: retry Windows mid-transcribe CUDA dlopen on CPU | – | Windows 端在转写过程中捕获 CUDA 库加载失败并转至 CPU。 |
| #111495 | ci(uv-lockfile): also check uv.lock with the uv Hermes installs | – | CI 增加对实际安装的 uv lockfile 再次校验，防止锁文件与产品结构性落后。 |

> 上述 PR 均已合并（状态为 CLOSED），直接提升了稳定性、用户体验和构建可靠性。  

---

### 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

| 排名 | 类型 | ID | 标题 | 评论数 / 反应 | 链接 | 热点原因 |
|------|------|----|------|---------------|------|----------|
| 1 | Issue | #112482 | **[Bug]: Compression livelock — no‑op entries supersede the in‑flight attempt** | 4 👍 | [#112482](https://github.com/NousResearch/hermes-agent/issues/112482) | 大规模会话上下文压缩陷入活锁，导致无法提交。 |
| 2 | Issue | #111707 | **[Bug]: Kanban workers using Codex App Server fail to initialize** | 4 👍 | [#111707](https://github.com/NousResearch/hermes-agent/issues/111707) | `hermes-mcp` / `hermes-tools` 名称不匹配导致初始化失败。 |
| 3 | Issue | #111727 | **[Bug]: Telegram gateway silently goes deaf (sockets stuck in CLOSE‑WAIT)** | 3 👍 | [#111727](https://github.com/NousResearch/hermes-agent/issues/111727) | 长时间运行的 Telegram 网关表面正常却不再接收消息，占用 ~1 CPU。 |
| 4 | Issue | #111564 | **[Bug]: Group chat: agent output containing the literal `[OUT‑OF‑BAND USER MESSAGE]` marker is treated as a genuine user message** | 2 👍 | [#111564](https://github.com/NousResearch/hermes-agent/issues/111564) | 控制帧字符被误当作普通消息，产生回环。 |
| 5 | PR | #112524 | feat(discord): add send_message action to discord tool (channels + threads) | 0 👍 (新) | [#112524](https://github.com/NousResearch/hermes-agent/pull/112524) | 社区期待在 Discord 工具中能够向线程发送消息，填补当前功能空白。 |
| 6 | PR | #112523 | fix(status): honor stopped gateway intent | 0 👍 (新) | [#112523](https://github.com/NousResearch/hermes-agent/pull/112523) | 仪表盘错误地将已停止资料的历史启动失败当作当前网关错误，影响运维判断。 |

> 评论数表明用户对压缩活锁、Codex 集成以及 Telegram 网关的稳定性最为关注；新开的功能 PR（Discord send_message）也引起了较多期待。

---

### 5. Bug 与定性（今日新报告的 Bug 按严重度排序）

| 严重度 | Issue | 简述 | 是否已有对应 fix PR | 链接 |
|--------|-------|------|----------------------|------|
| **🔴 高（安全/核心功能）** | #112459 | shutdown forensics writes live credentials from child argv to disk | ❌ 尚未有修复 PR | [#112459](https://github.com/NousResearch/hermes-agent/issues/112459) |
| **🔴 高** | #112482 | Compression livelock – no‑op entries supersede in‑flight attempt, commits never land | ❌ 尚未有修复 PR | [#112482](https://github.com/NousResearch/hermes-agent/issues/112482) |
| **🔴 高** | #112420 | Compaction stall (“made no progress”) continues without compression – oversized context re‑triggers compaction every turn | ❌ 尚未有修复 PR | [#112420](https://github.com/NousResearch/hermes-agent/issues/112420) |
| **🔴 高** |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 - 2026-09-16**

### 1. 今日速览
Past 24小时内共收到 Issue 2 条（全部新开/活跃，0 关闭）与 PR 5 条（待合并 3 条，合并/关闭 2 条），当前无新版本发布。活动集中在配置安全、工具链配观测三个方向，整体节奏适中，本周主要精力投入于修复关键 race condition 与扩展搜索提供者。项目近期 Issue 与 PR 打开比例约 4:5，维护者关注度集中在两个尚未合成的 Bug 修复 PR 上，整体健康度处于 **“活跃修复期”** 阶段，无紧急阻塞生产的高严重度回归。

- **活跃度评估**：🟡 中等偏上 - 近3天 Issue/PR 累计更新 7 条，但无版本释出，建议盯紧 `#3374/#3373` 这对并发安全与数据丢失类 Bug 的处理进度。

🔗 [GitHub Activity](https://github.com/sipeed/picoclaw) | [Issues](https://github.com/sipeed/picoclaw/issues) | [Pull Requests](https://github.com/sipeed/picoclaw/pulls)

---

### 2. 版本发布
当前无新版本发布（`New Releases: 0`）。下一次正式发布将取决于 `#3375`（敏感缓存并发保护）与 `#3370`（Keenable 搜索提供者）两个 PR 的合并与打包进度。

---

### 3. 项目进展
今日共 2 条 PR 合并/关闭，均为较具里程碑意义的功能落地：
- **#1780 (CLOSED)** - QQ 频道稳定性参数配置化：重连间隔、重试计数、速率限制均可通过配置文件或环境变量自定义，完全保持向下兼容。推进了即时通讯组件的运维友好度。
- **#3380 (CLOSED)** - Mesh 观测功能（Track 63）：引入 `PeerStatus.conns[]`、`latency_ms`、`score`、`last_seen` 与带宽报告，通过 SSE 流式暴露网络活动要点，显著提升去中心化网络的可视化与调试能力。

待合并/审查的 3 条 PR 同样具有明确的功能价值，分别锁定在配观冲突修复、工具开关闭合以及新搜索接入三个关键路径。

---

### 4. 社区热点
| 编号 | 类型 | 标题 | 关键诉求 | 链接 |
|------|------|------|----------|------|
| **#3374** | Issue | Data race in Config.initSensitiveCache 可能返回 nil replacer 导致 panic | 修复配敏感数据缓存的并发初始化，防止多 goroutine 独立分配缓存 | [#3374](https://github.com/sipeed/picoclaw/issues/3374) |
| **#3373** | Issue | SaveConfig 静默删除了第一个 api_key 后的所有键，留下 dangling fallback | 还原 model_list 多 api_key 完整性，避免静默数据丢失 | [#3373](https://github.com/sipeed/picoclaw/issues/3373) |
| **#3375** | PR | fix(config): guard lazy sensitive-data cache against concurrent init | 直接对应 #3374，提供互斥锁或 sync.Once 重构，是当前最紧迫的修复方向 | [#3375](https://github.com/sipeed/picoclaw/pull/3375) |
| **#3370** | PR | feat(tools): add Keenable web search provider | 零 API Key 启用公开搜索端点，拓展非商业化搜索生态 | [#3370](https://github.com/sipeed/picoclaw/pull/3370) |
| **#3372** | PR | fix(config): make the reaction tool configurable | 修复 `ToolsConfig.IsToolEnabled("reaction")` 穿透默认 true 的逻辑缺陷 | [#3372](https://github.com/sipeed/picoclaw/pull/3372) |

**背后的社区诉求**：用户对配置安全性（缓存竞态、api_key 丢失）的容忍度极低；同时也期待更低门槛的搜索/工具扩展能力。`#3370` 的 Keenable 接入因“无 API Key 需求”备受关注，可能成为吸引新用户的轻量入口。

---

### 5. Bug 与稳定性
**按严重程度排序（最高至低）**：
1. **#3374** [High] - `Config.sensitiveCache` 无锁懒加载导致 data race，`SensitiveDataReplacer` 可能返回 nil `*strings.Replacer` 导致运行时 panic。已关联 PR `#3375` 正在等待审查合并。
2. **#3373** [High] - `LoadConfig` → `SaveConfig` 圆 trip 中，`model_list` 条目含多个 `api_keys` 时，仅保留第一个，其余全部丢失，且 `fallbacks` 

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日常动态日报  
**日期：2026-09-16**  
**来源：GitHub (github.com/qwibitai/nanoclaw)**

---

## 1. 今日速览

过去 24 小时内，NanoClaw 项目保持了较高的活跃度：共有 **5 条 Issue 更新**（2 条新增/活跃，3 条已关闭），同时 **40 条 Pull Request 更新**中，**21 条已合并/关闭**，**19 条仍处于待合并状态**。项目未发布新版本，但在核心可靠性、安全性和功能扩展方面取得了显著进展。其中，**#3338（WebSocket 超时问题）** 和 **#3828（切过流完成问题）** 是当前最受关注的技术风险，需持续监控。

---

## 2. 版本发布

**无新版本发布**。截至 2026-09-16，当前版本仍为最新稳定版（无版本号升级）。所有更新均通过 PR 形式提交，尚未通过 CI/CD 合并至主分支。

---

## 3. 项目进展

本日重点推进的 PR 包括：

| 编号 | 标题 | 类别 | 主要贡献 |
|------|------|------|----------|
| #3813 | Add durable handoff safety and mission control | 架构/核心 | 引入宿主端持久化交接日志，实现签名/审计追踪，保障任务连续性 |
| #3781 | feat(agent-runner): enforce tools-only delivery | 功能 | 强制代理组只能通过工具传递最终文本，提升隐私保护 |
| #3713 | feat(config): record a per-agent-group delivery mode | 配置 | 记录每组代理的交付模式，支持差异化交付策略 |
| #3832 | perf(host): reconcile and drain sessions concurrently | 性能 | 并行处理会话循环，避免单会话拖慢全局扫描 |
| #3823 | fix(mattermost): authenticate callbacks and isolate action secrets | 安全 | 对 Mattermost 动作回调进行认证，防止外部按钮获取共享密钥 |
| #3824 | refactor(gateway): add provider credential connections | 基础设施 | 为提供商提供统一的凭证连接接口，解耦管理 API 依赖 |
| #3825 | feat(opencode): support authentication through Iron Proxy | 集成 | 支持 OpenCode 通过 Iron 代理进行认证，实现外部身份验证 |
| #3764 | feat(channels): /add-voice — full-duplex browser conversations | 功能 | 新增语音通道，支持完整双向浏览器对话 |
| #3697 | feat: add Keenable MCP tool skill | 功能 | 注册 Keenable 远程 MCP 工具，用于网页搜索与页面抓取 |
| #3726 / #3743 | feat(channels): add native Proton Mail adapter | 功能 | 增加原生 AgentMail 邮箱通道，解决 DNS/MX 所有权冲突 |

这些 PR 集中围绕 **可靠性、安全性、功能扩展** 三大方向推进，整体项目向前迈进了约 30% 的功能容量。

---

## 4. 社区热点

### 🔥 最活跃 Issue

| 编号 | 标题 | 状态 | 更新时间 | 评论数 | 关联 PR |
|------|------|------|----------|--------|--------|
| #3338 | Codex WebSocket idle retry is hidden until NanoClaw’s 10-minute turn timeout | **OPEN** | 2026-09-15 | 3 | #3338 |
| #3828 | update: cutover drain can never succeed — the service is stopped before the containers it waits on | **OPEN** | 2026-09-15 | 0 | #3828 |

- **#3338**：Codex CLI 检测到 WebSocket 空闲超时后内部重试，但 NanoClaw 未将此失败向上游暴露，导致长时间静默请求。该问题直接影响 Codex 客户端的可靠性，是当前最高优先级的技术债务。
- **#3828**：在部署“切过流”（cutover drain）时，如果某个代理容器仍在运行，服务会先停止宿主，然后等待容器退出。但宿主的关闭路径设计使得 idle 容器被故意保留，导致轮询永远无法完成。

### 📊 最活跃 PR

| 编号 | 标题 | 状态 | 更新时间 | 关联 Issue |
|------|------|------|----------|------------|
| #3813 | Add durable handoff safety and mission control | CLOSED | 2026-09-15 | #3338（间接相关） |
| #3781 | feat(agent-runner): enforce tools-only delivery | OPEN | 2026-09-15 | - |
| #3713 | feat(config): record a per-agent-group delivery mode | OPEN | 2026-09-15 | - |
| #3832 | perf(host): reconcile and drain sessions concurrently | OPEN | 2026-09-15 | #3828 |
| #3823 | fix(mattermost): authenticate callbacks and isolate action secrets | OPEN | 2026-09-15 | - |

---

## 5. Bug 与稳定性

按严重程度排序，今日报告的 Bug 及已知修复情况如下：

| 优先级 | 问题 | 描述 | 状态 | 是否有修复 PR |
|--------|------|------|------|-------------|
| 🔴 高 | **#3338** | Codex WebSocket 空闲超时（10 分钟）导致请求静默延迟，NanoClaw 未将失败向上游暴露 | 打开 | ❌ 无 |
| 🔴 高 | **#3828** | 切过流（cutover drain）若代理容器仍在运行，服务无法完成，因为宿主先于容器停止 | 打开 | ❌ 无 |
| 🟠 中 | **#3823** | Mattermost 动作回调未认证，外部按钮可能获取共享秘密 | 打开 | ❌ 无 |
| 🟡 低 | **#3354** | 非登录 SSH 环境下 setup 遗留 0 字节渠道文件 | 关闭 | ✅ 已修复（PR #3354） |
| 🟢 低 | **#1981** | v2 系统d 在头less Linux 上被误判缺失 | 关闭 | ✅ 已修复（PR #1981） |

**总结**：当前项目存在两处关键稳定性风险——WebSocket 超时处理和切过流完成逻辑。这些问题直接影响生产环境的可靠性，建议优先分配资源进行修复。

---

## 6. 功能请求与路线图信号

| 需求 | 对应 PR | 状态 | 路线图定位 |
|------|---------|------|------------|
| **语音通话支持** | #3764 | OPEN | 功能优先级：高 |
| **AgentMail 邮箱通道** | #3743 / #3726 | OPEN | 功能优先级：高 |
| **Keenable MCP 工具** | #3697 | OPEN | 功能优先级：中 |
| **默认语气/声调配置** | #3826 | OPEN | 配置优先级：中 |
| **提供商声调契约** | #3827 / #3826 | OPEN | 架构优先级：高 |
| **跨会话上下文优化** | #3829 | OPEN | 性能优先级：中 |
| **信号附件分阶段处理** | #3799 | OPEN | 稳定性优先级：低 |

**趋势分析**：近期 PR 集中在 **可靠性（#3813, #3832, #3828）**、**安全性（#3823, #3826）** 和 **新功能（#3764, #3697, #3726）** 三个维度。特别是语音通道和 AgentMail 等新功能已进入开发阶段，表明团队正积极拓展生态。

---

## 7. 用户反馈摘要

从 Issue 评论和 PR 讨论中提炼出的用户痛点：

1. **WebSocket 超时导致的延迟**  
   - 用户反映 Codex CLI 偶尔会出现长时间静默请求，影响交互体验。#3338 正是针对此问题的核心修复点。

2. **部署流程中的资源泄漏**  
   - #3828 揭示了“切过流”机制在容器并发场景下的潜在死锁风险，用户在实际部署中可能遇到服务挂起的情况。

3. **安全合规需求**  
   - #3823 指出 Mattermost 回调未加认证，可能导致外部攻击者获取敏感操作权限。用户对安全性的担忧正在推动认证改进。

4. **功能需求明确**  
   - 用户对语音通话（#3764）和 AgentMail 邮箱（#3743）的需求非常明确，这些功能已在 PR 中推进，显示出市场/社区对扩展性的期待。

5. **配置灵活性**  
   - #3713 和 #3826 体现了用户希望在不同代理组之间灵活选择交付模式（工具导向 vs. 传统模式）的需求。

---

## 8. 待处理积压

| 编号 | 问题 | 影响范围 | 建议行动 |
|------|------|----------|----------|
| #3338 | Codex WebSocket 超时处理 | 高 | 优先修复，需确保 Codex CLI 能及时感知并报告 WebSocket 空闲状态 |
| #3828 | 切过流完成逻辑 | 高 | 需重新设计宿主与容器同步机制，确保所有代理容器在服务停止前全部退出 |
| #3823 | Mattermost 回调认证 | 中 | 完善认证流程，防止外部按钮泄露共享密钥 |
| #3354 | 非登录 SSH 下渠道文件残留 | 低 | 已修复，但建议在文档中提醒用户检查旧安装环境 |
| #1981 | v2 系统d 检测错误 | 低 | 已修复，属于历史遗留问题 |

**特别提醒**：#3338 和 #3828 应在本周内获得合并以恢复生产环境稳定性。建议团队在下一次发布前完成这些关键修复，并做好回滚方案。

---

**报告生成人**：AI 智能体与个人 AI 助手  
**生成时间**：2026-09-16  
**数据来源**：NanoClaw GitHub (github.com/qwibitai/nanoclaw)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报（2026-09-16）**

**1. 今日速览**
过去24小时项目仅记录1条Issue更新与1条PR更新，整体活跃度偏低，无新版本发布。项目当前处于稳定维护期，构建优化PR #1270提交于昨日，但尚未进入合并流程；功能请求Issue #205仍处于开放状态，表明核心功能迭代节奏较慢，社区贡献主要集中于底层工程优化而非特性扩展。

**2. 版本发布**
无新版本发布。

**3. 项目进展**
今日无合并或关闭的PR。开放PR [#1270](https://github.com/moltis-org/moltis/pull/1270) 推进了构建性能优化：将Cargo依赖缓存与镜像层解耦，采用BuildKit缓存挂载机制减少重复编译，预计可显著降低CI/CD构建时间（冷构建从完整依赖树编译改为增量编译）。该PR尚未合并，对开发者体验有直接提升，但未触及用户可见功能。

**4. 社区热点**
- [Issue #205](https://github.com/moltis-org/moltis/issues/205)：[OPEN] [enhancement] Allow setting body parameters for custom OpenAI endpoints (and per-model)  
  诉求分析：用户希望为自定义OpenAI端点支持动态body参数配置，并实现按模型维度的细粒度控制，反映出高级用户对API灵活性与多模型适配场景的深度需求。
- [PR #1270](https://github.com/moltis-org/moltis/pull/1270)：构建缓存优化，关注度集中于开发效率。

**5. Bug 与稳定性**
今日无新增Bug、崩溃或回归问题报告。

**6. 功能请求与路线图信号**
Issue [#205](https://github.com/moltis-org/moltis/issues/205) 是明确的功能需求，涉及OpenAI集成层的扩展能力。结合当前PR均为构建侧优化，该功能尚未有对应的实现PR，可能需要维护者评估后纳入下一版本路线图，或由社区贡献者跟进实现。

**7. 用户反馈摘要**
从Issue #205的讨论上下文可推断，用户在使用自定义OpenAI端点时受限于固定的请求体格式，无法按模型调整参数（如特定模型的temperature、top_p等高级配置），导致在多模型部署或私有化部署场景中灵活性不足。该反馈指向API抽象层的扩展性短板。

**8. 待处理积压**
- [Issue #205](https://github.com/moltis-org/moltis/issues/205)：创建于2026-02-22，距今已超过6个月未关闭，长期处于OPEN状态，建议维护者优先评估或标记路线图预期。
- [PR #1270](https://github.com/moltis-org/moltis/pull/1270)：提交于2026-09-15，尚未获得合并，建议维护者及时审核以避免构建效率优化延迟。

**项目健康度提示**：当前提交频率与Issue响应周期均显示维护节奏偏缓，建议关注核心功能请求的闭环进度，并鼓励社区对构建类PR的测试验证以加速合并流程。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw 项目动态日报 — 2026-09-16

## 1. 今日速览

CoPaw 项目在 2026-09-16 保持了高活跃度，过去24小时内共产生 **25 条 Issues 更新**（新开/活跃 8 条，已关闭 17 条）和 **50 条 PR 更新**（待合并 25 条，已合并/关闭 25 条），但无新版本发布。社区围绕 **QwenPaw Hub 多租户版（2.2.0）** 的功能规划展开了热烈讨论，同时项目组对近期引入的 Bug 进行了集中修复，显示出较强的迭代响应能力。整体健康度良好，开发节奏稳健。

## 2. 版本发布

**无新版本发布。**

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 类型 | 说明 |
|---|---|---|---|
| [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) | fix(agents): strip tool-result PDF document blocks for OpenAI chat-completions requests regardless of multimodal support | 修复 | 彻底修复了 PDF 文档块在多模态模型请求中的序列化问题，避免被 OpenAI 兼容接口拒绝 |
| [#7735](https://github.com/agentscope-ai/QwenPaw/pull/7735) | fix(mcp): preserve decoded HTTP error responses | 修复 | 解决了 MCP HTTP 错误响应被二次解压缩破坏的问题，修复了 #7716 |
| [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) | fix(mcp): recognize Java jsonRpcError envelope on discover probe | 修复 | 修复了 Java/Kotlin MCP SDK 服务器的非标准错误响应识别问题 |
| [#7763](https://github.com/agentscope-ai/QwenPaw/pull/7763) | fix(plugins): handle catalog response read failures | 修复 | 增强了插件目录 CDN 连接异常的容错处理 |
| [#7759](https://github.com/agentscope-ai/QwenPaw/pull/7759) | fix(console): restore visible link focus indicators | 修复 | 恢复了键盘导航时链接的可见焦点指示器，提升可访问性 |
| [#7737](https://github.com/agentscope-ai/QwenPaw/pull/7737) | fix(skills): expand multi-agent collaboration trigger keywords | 修复 | 扩展了多 Agent 协作技能的触发词，使其在首轮即可被识别 |
| [#7736](https://github.com/agentscope-ai/QwenPaw/pull/7736) | feat(providers): add DeepSeek V4 Flash capabilities | 功能 | 添加了 DeepSeek V4 Flash 的能力描述，包括图像输入、100万 token 上下文窗口等 |
| [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) | fix(agents): diagnose dropped subagent model overrides | 修复 | 修复了子 Agent 模型覆盖被静默丢弃的问题，增加了失败日志 |

### 推进中的重要功能

| PR | 标题 | 状态 |
|---|---|---|
| [#7741](https://github.com/agentscope-ai/QwenPaw/pull/7741) | feat(console): add customizable theme colors | 待合并 |
| [#7791](https://github.com/agentscope-ai/QwenPaw/pull/7791) | feat(mail): support custom IMAP/SMTP servers via provider "custom" | 待合并 |
| [#7790](https://github.com/agentscope-ai/QwenPaw/pull/7790) | feat(console): add unified chat workbench shell | 待合并 |
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | feat(modes): add Advisor Mode | 待合并 |
| [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | feat(hub): add model gateway, member governance and usage dashboard | 待合并 |

**整体进展评估：** 项目在 Bug 修复方面进展显著，尤其是 MCP 相关修复和 PDF 文档处理问题。多个重量级功能（Advisor Mode、Hub 模型网关、控制台工作台）正在推进中，预计将在后续版本中陆续发布。

## 4. 社区热点

### 最活跃 Issue

| Issue | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0: what should we build next? | 27 | 4 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | [bug]: spawn subAgent | 7 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7678) |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | [bug]: 执行中的任务，点了停止后显示上停止了，但实际依然在执行 | 7 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7567) |

### 热点分析

**#7318 — QwenPaw Hub 多租户版功能规划** 是今日绝对的社区焦点。该 Issue 由核心开发者发起，旨在邀请社区为即将推出的多租户版 Hub 提出功能建议。这反映出社区对团队协作场景的强烈需求，也表明项目正从个人 AI 助手向团队解决方案转型。27 条评论充分说明了社区的参与热情。

**#7678 — subAgent 超时问题** 和 **#7567 — 任务停止后仍在执行** 是另外两个讨论度较高的 Issue，均涉及核心工作流的稳定性问题，说明用户对可靠性的关注度极高。

## 5. Bug 与稳定性

### 🔴 严重 Bug

| Issue | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | spawn subAgent 超时 | OPEN | 任务 spawn subAgent 后全部失败，即使设置很长的 timeout 也无法解决。已确认有相关 PR #7796 在诊断此问题 |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 任务停止后仍在执行 | OPEN | 用户点击停止后 UI 显示已停止，但实际任务仍在执行，刷新后依然如此 |
| [#7775](https://github.com/agentscope-ai/QwenPaw/issues/7775) | max_iters 结束时无最终答案 | OPEN | ReAct 迭代耗尽时直接结束回合，不输出最终答案也不警告用户 |
| [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | Guardrail 插件构建的多个 Bug | OPEN | 包括控制台附件陈旧 blob、cron 误触发丢失、控制台尾部丢失、on_acting 从未触发 |

### 🟡 中等 Bug

| Issue | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#7792](https://github.com/agentscope-ai/QwenPaw/issues/7792) | WeChat 视频/音频附件导致 400 错误 | OPEN | 附件变为 file:// URL 后发送给 OpenAI 兼容 API 被拒绝 |
| [#7786](https://github.com/agentscope-ai/QwenPaw/issues/7786) | Cloud/NFS 部署下文件浏览器冻结 | OPEN | 打开工作区文件浏览器会导致整个实例无响应 5-6 分钟 |
| [#7764](https://github.com/agentscope-ai/QwenPaw/issues/7764) | MCP client 'dagu' 不活跃 | CLOSED | 修复 PR #7735 已合并 |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | MCP 无法连接和注册 | CLOSED | 修复 PR #7735 已合并 |
| [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | PDF 文档块仍发送给多模态端点 | CLOSED | 修复 PR #7636 已合并 |

### 🟢 已解决

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | PDF document blocks still sent to multimodal chat-completions endpoints | #7636 |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | MCP can't connect and register since upgrade to 2.2.x | #7735 |
| [#7764](https://github.com/agentscope-ai/QwenPaw/issues/7764) | MCP client 'dagu' remains inactive | #7735 |
| [#7728](https://github.com/agentscope-ai/QwenPaw/issues/7728) | Java jsonRpcError envelope not recognized | #7729 |
| [#7730](https://github.com/agentscope-ai/QwenPaw/issues/7730) | Plugin catalog response read failures | #7763 |

## 6. 功能请求与路线图信号

### 可能纳入下一版本的功能

| 功能请求 | Issue/PR | 信号强度 |
|---|---|---|
| **Advisor Mode**（顾问模式） | PR #7569 | ⭐⭐⭐⭐⭐ 已提交完整实现 |
| **Hub 模型网关与成员治理** | PR #7779 | ⭐⭐⭐⭐⭐ 已提交完整实现 |
| **控制台自定义主题颜色** | PR #7741 | ⭐⭐⭐⭐ 已提交完整实现 |
| **统一聊天工作台** | PR #7790 | ⭐⭐⭐⭐ 已提交完整实现 |
| **自定义 IMAP/SMTP 邮件服务器** | PR #7791 | ⭐⭐⭐⭐ 已提交完整实现 |
| **可配置多文件夹默认工作区** | PR #7789 | ⭐⭐⭐ 已提交完整实现 |
| **DeepSeek V4 Flash 能力支持** | PR #7736 | ⭐⭐⭐ 已合并 |
| **多 Agent 协作触发词扩展** | PR #7737 | ⭐⭐⭐ 已合并 |

### 社区功能诉求

| Issue | 诉求 | 可能性 |
|---|---|---|
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | 历史对话移至右侧 | ⭐⭐⭐ 已有类似 PR #7700 |
| [#7746](https://github.com/agentscope-ai/QwenPaw/issues/7746) | Skills 适用 channel 列表不全 | ⭐⭐⭐ 需要架构调整 |
| [#7778](https://github.com/agentscope-ai/QwenPaw/issues/7778) | 通过 "//" 模糊搜索调用工具 | ⭐⭐⭐ 已有类似功能 |
| [#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543) | 后台更新 | ⭐⭐ 需要架构调整 |
| [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) | 频道参数透传给 MCP 工具 | ⭐⭐ 需要架构调整 |

## 7. 用户反馈摘要

### 核心痛点

1. **subAgent 稳定性问题**（#7678）：用户反馈 "任务一旦进行 spawn subAgent 处理，没有一个执行的下去，全都任务失败，全都 timeout 失败了，我把 timeout 设置很长很长也没用"。这表明 subAgent 功能在 2.2.0 版本中存在严重回归。

2. **任务停止机制不可靠**（#7567）：用户反馈 "点了停止后显示上停止了，但实际依然在执行"，说明停止信号的传递或处理存在缺陷。

3. **多模态 PDF 处理不完整**（#7689）：虽然已修复了纯文本模型的 PDF 问题，但多模态模型路径仍未修复，影响使用 OpenAI 兼容接口的用户。

4. **MCP 连接在 2.2.x 版本后失效**（#7716）：从 2.1.1b3 升级到 2.2.x 后 MCP 连接中断，影响大量依赖 MCP 的用户。

5. **工作区文件浏览器性能问题**（#7786）：Cloud/NFS 部署环境下打开文件浏览器会导致整个实例冻结 5-6 分钟，严重影响可用性。

### 正面反馈

- 社区对 **QwenPaw Hub 多租户版** 表现出极高期待，27 条评论中多数为积极建议和功能期待
- **Advisor Mode** 的设计思路获得认可，被认为是解决模型成本优化的有效方案
- 控制台主题定制功能受到 UI/UX 关注者的欢迎

## 8. 待处理积压

以下 Issue/PR 已超过一周未更新，建议维护者关注：

| Issue/PR | 

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 | 2026-09-16

> **数据来源**: GitHub API (qhkm/zeptoclaw) | 统计周期: 2026-09-15 00:00 - 23:59 (UTC)

---

## 1. 今日速览
- **整体状态**: **维护期/依赖更新密集期**。过去 24 小时无新增 Issue、无代码合并、无版本发布，项目处于低功能开发活跃度状态。
- **核心动作**: Dependabot 批量创建 **18 个依赖更新 PR**，覆盖 Rust 核心依赖、前端文档站点 (Astro/Starlight)、Docker 基础镜像及 GitHub Actions 工作流组件。
- **健康度评估**: **依赖维护自动化完善**，但人工审核/合并滞后（18 个 PR 均处于 Open 状态，0 评论，0 合并），存在依赖更新积压风险。
- **技术债信号**: 前端文档站点 Astro 跨大版本升级 (6.x → 7.x)，Starlight 升级 0.39 → 0.41，属破坏性变更高风险区，需重点测试。
- **团队响应**: 当前无人工介入迹象，建议维护者今日内完成 CI 验证与批量合并。

---

## 2. 版本发布
**无新版本发布**。最近一次 Release 早于统计周期。

---

## 3. 项目进展
**今日无 PR 合并/关闭**。全部 18 个 PR 处于 **Open/待合并** 状态，均为 Dependabot 自动生成的依赖升级，尚未进入人工审核流程。项目代码库功能层面零推进。

| PR 编号 | 类型 | 核心变更 | 风险等级 | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| #695, #686 | **JS: Breaking** | `astro` 6.3.7 → 7.2.2 (Major) | **高** | Open |
| #696, #689 | **JS: Breaking** | `@astrojs/starlight` 0.39.2 → 0.41.10 (Minor 但含 Breaking) | **高** | Open |
| #693, #691 | **JS: Patch** | `sharp` 0.34.5 → 0.35.4 | 低 | Open |
| #690, #694, #692, #688, #685 | **Rust: Patch/Minor** | `clap`, `base64`, `rustls`, `async-trait`, `tokio-serial` | 低-中 | Open |
| #687, #683, #684, #681, #682 | **GH Actions** | `docker/login-action`, `rust-cache`, `cargo-deny`, `gh-release`, `install-action` | 低 | Open |
| #680, #679 | **Docker Base** | `debian`, `rust` 基础镜像更新 | 中 | Open |

> **进展结论**: 依赖更新堆积 18 个，若不及时合并将导致后续冲突成本指数级上升，尤其 Astro 7 迁移需预留调试时间。

---

## 4. 社区热点
**无活跃讨论**。
- 所有 18 个 PR 均为机器人生成，**评论数 0，Reactions 0**。
- 过去 24h **Issue 区完全静默**（0 新开, 0 活跃, 0 关闭）。
- **分析**: 社区处于“只读/观望”状态，缺乏用户反馈回路。维护者需主动发起讨论（如 Astro 7 迁移计划）激活社区。

---

## 5. Bug 与稳定性
**今日无 Bug 报告、崩溃日志或回归 Issue**。
- 依赖更新 PR (#695, #686 Astro 7; #690 clap 4.6.6; #692 rustls 0.23.43) 引入的潜在兼容性风险属于**预防性关注点**，非已发生 Bug。
- 建议：合并前务必跑全量测试套件，重点验证 CLI 交互 (`clap`)、TLS 连接 (`rustls`)、文档站构建 (`astro/starlight`)。

---

## 6. 功能请求与路线图信号
**无用户发起的功能请求**。
- **隐性路线图信号**: 依赖更新方向透露技术栈演进意图：
  1. **文档站现代化**: Astro 7 + Starlight 0.41 → 更快的构建、更好的 i18n/搜索支持。
  2. **Rust 生态跟新**: `rustls`/`tokio-serial`/`async-trait` 小版本迭代 → 稳定性与性能微调。
  3. **供应链安全**: GitHub Actions 组件全面升级 (v2→v3/v4) → 符合 SLSA 等合规要求。
- **预判**: 下一版本 (v0.x 或 v1.0) 大概率包含“文档站重构完成”及“依赖基线升级”两项隐性任务。

---

## 7. 用户反馈摘要
**无用户反馈数据**。
- Issue 区、PR 评论区均无人类用户发言。
- **痛点推测**: 缺乏 Issue 模板、贡献指南或议题分类，导致用户无门槛参与；或项目处于早期内部使用阶段，外部用户极少。

---

## 8. 待处理积压 ⚠️
**核心秸压: 18 个 Dependabot PR 全部堆积 (创建于 2026-09-15)**。

| 优先级 | PR | 关注点 | 建议动作 |
| :--- | :--- | :--- | :--- |
| **P0 (阻塞性)** | [#695](https://github.com/qhkm/zeptoclaw/pull/695), [#686](https://github.com/qhkm/zeptoclaw/pull/686) | Astro 6→7 破坏性变更，文档站构建极大概率失败 | **立即人工介入**：本地跑 `npm run build`，按 [Astro 7 迁移指南](https://docs.astro.build/en/guides/upgrade-to/v7/) 修复破坏性 API |
| **P0 (阻塞性)** | [#696](https://github.com/qhkm/zeptoclaw/pull/696), [#689](https://github.com/qhkm/zeptoclaw/pull/689) | Starlight 0.39→0.41 配置 Schema 变更 | 同步检查 `starlight` 配置文件兼容性 |
| **P1 (安全/基建)** | [#679](https://github.com/qhkm/zeptoclaw/pull/679), [#680](https://github.com/qhkm/zeptoclaw/pull/680) | Rust/Debian 基础镜像更新 | 验证 Docker 构建通过，检查二进制体积与运行时行为 |
| **P2 (常规)** | #690, #692, #694, #688, #685, #687, #683, #684, #681, #682, #693, #691 | 补丁级依赖升级 | 批量合并策略：启用 Dependabot auto-merge (需通过 CI) 或人工批量 `approve` |

> **维护者行动清单**:
> 1. 今日内完成 Astro/Starlight 两组 PR 的本地验证与修复（预计 2-4h）。
> 2. 为其余 14 个 Patch/Minor 级 PR 启用 **Dependabot Auto-merge** (Settings → Security → Dependabot → Allow auto-merge)，减少人工噪音。
> 3. 建立 **"Dependency Update" 标签 + 每周固定合并窗口** 机制，避免未来再次堆积。

---

## 附：关键链接汇总
- **PR 列表 (18 个)**: [qhkm/zeptoclaw/pulls?q=is%3Aopen+is%3Apr+author%3Adependabot%5Bbot%5D](https://github.com/qhkm/zeptoclaw/pulls?q=is%3Aopen+is%3Apr+author%3Adependabot%5Bbot%5D)
- **Astro 7 Migration Guide**: https://docs.astro.build/en/guides/upgrade-to/v7/
- **Starlight Changelog**: https://github.com/withastro/starlight/releases
- **Dependabot 配置建议**: `.github/dependabot.yml` 中添加 `allow: auto-merge` for `dependency-type: "github-actions", "docker", "cargo", "npm" (patch/minor)`

---
*报告自动生成于 2026-09-16 06:00 UTC | 下次更新: 2026-09-17*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*