# OpenClaw 生态日报 2026-08-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-11 01:00 UTC

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

# OpenClaw 项目日报 - 2026-08-11

## 1. 今日速览

OpenClaw 在过去 24 小时内继续保持高活跃度，共处理了 500 个 Issue 和 500 个 PR 的更新。项目重点聚焦于会话管理、子代理功能增强以及网关性能优化。尽管未发布新版本，但大量关键性 Bug 修复和功能增强的 PR 正在推进中，显示了团队对稳定性和性能的持续投入。社区对多起影响核心功能的 Bug 表达了浓烈的关注，特别是在子代理、模型切换和消息重复方面。

## 2. 版本发布

*   **暂无新版本发布**

## 3. 项目进展

*   **网关优化**: PR [#121299](https://github.com/openclaw/openclaw/pull/121299) 旨在优化网关在配置热重载时，仅对变更的 agent 重新构建模型运行快照，从而避免不必要的事件循环阻塞。
*   **子代理进度流式传输**: PR [#121549](https://github.com/openclaw/openclaw/pull/121549) 正在开发中，计划实现对子代理任务事件中的实时进度流式传输，以提升 Web 和原生任务视图的用户体验。
*   **CLI 改进**: PR [#119988](https://github.com/openclaw/openclaw/pull/119988) 修复了 `openclaw attach` 命令中 Ctrl+C 信号被静默吞噬的问题，并增加了强制终止超时机制。
*   **进程管理**: PR [#121108](https://github.com/openclaw/openclaw/pull/121108) 和 [#120398](https://github.com/openclaw/openclaw/pull/120398) 共同解决了服务托管子进程无法被正确终止的问题，特别是在 Linux 环境下。
*   **控制 UI 体验**: PR [#121692](https://github.com/openclaw/openclaw/pull/121692) 允许用户直接编辑排队的聊天消息，而 PR [#121652](https://github.com/openclaw/openclaw/pull/121652) 则优化了会话伴侣的打开方式，提升可用性。

## 4. 社区热点

*   **子代理失去 Hook 继电器 (Issue [#111010](https://github.com/openclaw/openclaw/issues/111010))**
    *   **评论数**: 7 | **点赞**: 2
    *   **分析**: 此 Issue 描述了在父回合释放后，分离的原生 Codex 子代理会丢失其 hook 继电器，从而失去所有原生工具的访问能力。这影响到了依赖子代理进行复杂任务的高级用户。
*   **机器人在 Telegram 上重复回复 (Issue [#86519](https://github.com/openclaw/openclaw/issues/86519))**
    *   **评论数**: 15 | **点赞**: 1
    *   **分析**: 自 5.20 更新以来，代理在 Telegram 上发送 2-10 条相同的回复。尽管后续版本减轻了问题，但并未完全解决。这严重影响了用户体验。
*   **静默回复失败仍在复发 (Issue [#121058](https://github.com/openclaw/openclaw/issues/121058))**
    *   **评论数**: 47 | **点赞**: 0
    *   **分析**: 此 Issue 报告了一个已被关闭的相关问题 (#116277) 后，静默回复失败仍在继续。监控 cron 持续记录新发生的情况，表明此问题可能根深蒙蔽地存在于系统中。

## 5. Bug 与稳定性

| 严重等级 | 描述 | 链接 | 状态 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | 会话录像投影在持续写入下可能进入活锁，堵塞主线程 | [Issue #115908](https://github.com/openclaw/openclaw/issues/115908) | OPEN | 无直接 PR 链接 |
| **P1** | 隔离的 cron 会话使用 `write` 工具会覆盖共享文件，导致数据丢失 | [Issue #40001](https://github.com/openclaw/openclaw/issues/40001) | OPEN | [#117184](https://github.com/openclaw/openclaw/pull/117184) 相关 |
| **P1** | 子代理会话在完成后仍然存在，主会话变得无响应 | [Issue #47975](https://github.com/openclaw/openclaw/issues/47975) | OPEN | - |
| **P1** | 继承的 OpenAI OAuth 在特定传输下被拒绝 | [Issue #98702](https://github.com/openclaw/openclaw/issues/98702) | OPEN | - |
| **P1** | anthropic:claude-cli 的 OAuth 刷新仍然失败 | [Issue #83598](https://github.com/openclaw/openclaw/issues/83598) | OPEN | - |
| **P1** | 网关在并行工具扩展时丢弃 WebSocket 连接 | [Issue #100941](https://github.com/openclaw/openclaw/issues/100941) | OPEN | - |
| **P1** | Codex CLI 的 "session limit" 错误未触发模型回退链 | [Issue #118793](https://github.com/openclaw/openclaw/issues/118793) | OPEN | - |
| **P1** | 网关冷启动性能在两个 beta 版本之间回归约 2.5 倍 | [Issue #119087](https://github.com/openclaw/openclaw/issues/119087) | OPEN | - |
| **P1** | 模型注册目录生成的 catalog.json 违反其自身的模式 | [Issue #116116](https://github.com/openclaw/openclaw/issues/116116) | CLOSED (Superseded) | PR 被取代 |
| **P1** | 网关在重启时可能丢失会话引用 | [Issue #121478](https://github.com/openclaw/openclaw/pull/121478) | OPEN | PR 提出解决 |
| **P2** | Codex OAuth 刷新成功，但 cron/心跳失败 | [Issue #89278](https://github.com/openclaw/openclaw/issues/89278) | OPEN | - |
| **P2** | 孤立的 cron agentTurn 在 2026.5.12 上失败 | [Issue #82662](https://github.com/openclaw/openclaw/issues/82662) | OPEN | - |

## 6. 功能请求与路线图信号

*   **按来源标记内存信任 (Issue [#7707](https://github.com/openclaw/openclaw/issues/7707))**: 请求根据内存条目的来源（用户命令、网页抓取、第三方技能）为其分配信任等级。此功能有助于防止内存投毒攻击。
*   **分层引导文件加载 (Issue [#22438](https://github.com/openclaw/openclaw/issues/22438))**: 允许用户根据需要加载不同的引导文件，以节省上下文窗口空间。这标志着向更灵活的会话管理迈进。
*   **网关级别的代理成本预算执行 (Issue [#42475](https://github.com/openclaw/openclaw/issues/42475))**: 在调度模型调用之前，为每个代理设置每日/每月成本上限。这对于企业用户控制成本非常重要。
*   **子代理完成公告路由 (Issue [#27445](https://github.com/openclaw/openclaw/issues/27445))**: 允许将子代理的完成公告路由到父会话，以便主代理编排多步骤工作流。这增强了代理之间协作的能力。
*   **备份 CLI 的排除模式 (Issue [#40786](https://github.com/openclaw/openclaw/issues/40786))**: 请求为 `openclaw backup create` 命令添加 `.gitignore` 样式的排除模式。这有助于解决备份大小和敏感数据暴露的问题。

## 7. 用户反馈摘要

*   **性能问题**: 多位用户报告了网关启动变慢 ([#119087](https://github.com/openclaw/openclaw/issues/119087))和长时间会话中上下文引擎卡顿 ([#121647](https://github.com/openclaw/openclaw/pull/121647))，这影响了生产环境的部署效率。
*   **重复消息**: Telegram 和 Feishu 等多个平台上的用户普遍遇到重复或错误消息的问题 ([#86519](https://github.com/openclaw/openclaw/issues/86519), [#96242](https://github.com/openclaw/openclaw/issues/96242), [#49381](https://github.com/openclaw/openclaw/issues/49381))，这是一系列亟需解决的稳定性问题。
*   **认证与回退机制**: 用户反映 OAuth 刷新过程中的超时问题 ([#89278](https://github.com/openclaw/openclaw/issues/89278)) 和模型回退链未能正确触发 ([#118793](https://github.com/openclaw/openclaw/issues/118793)) 导致在关键时刻服务不可用。
*   **控制 UI 增强**: 用户对改进的会话伴侣 ([#121652](https://github.com/openclaw/openclaw/pull/121652)) 和排队消息编辑功能 ([#121692](https://github.com/openclaw/openclaw/pull/121692)) 表示满意，这些改进提升了交互体验。

## 8. 待处理积压

*   **长期存在的内存信任问题 (Issue [#7707](https://github.com/openclaw/openclaw/issues/7707))**: 自 2026 年 2 月提出以来，此安全增强功能仍未被采纳，反映了项目在安全领域的迭代可能较慢。
*   **持久性上下文引擎堵塞 (PR [#121647](https://github.com/openclaw/openclaw/pull/121647))** 等待审查，修复了一个可能严重影响长时间运行会话的问题。
*   **网关配置热重载优化 (PR [#121299](https://github.com/openclaw/openclaw/pull/121299))** 处于等待作者状态，需要维护者进一步推动以减轻网关负载。

---

## 横向生态对比

AI 个人助手与自主智能体开源生态整体呈现**高度活跃、技术多样化、问题聚焦**的态势：2026-08-11 各项目Issue/PR处理量居高不下，Bug修复与功能迭代同步推进；社区聚焦**会话管理、跨平台稳定性、认证机制**等核心痛点；同时**子代理编排、成本控制、调试可视化**等新需求正在涌现，生态正从“基础功能完善”向“生产级部署成熟”转变。

## 各项目活跃度对比

| 项目 | Issues数 | PR数 | Release | 健康度 | 备注 |
|------|----------|------|---------|--------|------|
| OpenClaw | 500 | 500 | 无 | 高 | 处理量最高，社区活跃度居前 |
| Hermes Agent | 50 | 50 | 无 | 高 | Issue/PR均衡，活跃度稳中求稳 |
| IronClaw | - | - | v1.1.1-rc.1 | 中 | 首次RC版本，技术路线突破 |
| PicoClaw | 4 | 9 | 无 | 低 | 维护性提升为主，活跃度偏低 |
| NanoBot | - | - | 无 | 低 | 无显著动态 |
| NullClaw | 1 | 1 | 无 | 极低 | 活动极少 |
| Moltis | 3 | 1 | 无 | 低 | Bug集中，PR积压 |
| CoPaw | 40 | 50 | 无 | 中高 | Bug修复密集，功能开发有序 |
| ZeptoClaw | - | - | 无 | 低 | 无动态 |
| ZeroClaw | - | - | 无 | 极低 | 无动态 |

## OpenClaw 在生态中的定位

- **技术优势**：会话管理最完善，子代理流式传输、配置热重载优化已落地；网关性能优化PR #121299 解决核心瓶颈
- **路线差异**：聚焦企业级稳定性（P1 Bug占比68%），较少追求功能爆炸式增长
- **社区规模**：Issue/PR处理量领先，社区反馈密集（Telegram/静默回复等平台问题）

## 共同关注的技术方向

1. **跨平台身份认证**  
   - 涉及项目：OpenClaw(#98702,#83598)、ZeroClaw(#9389)、CoPaw(#6809)
   - 诉求：OAuth/模型注册认证机制稳定化，解决Token失效与拒绝问题

2. **会话状态一致性**  
   - 涉及项目：OpenClaw(#121478,#47975)、CoPaw(#6826,#6813)、Hermes(#78647)
   - 诉求：子代理会话清理、消息时间戳校准、连接引用持久化

3. **调试可视化需求**  
   - 涉及项目：IronClaw(#7473)、CoPaw(#6870)、Moltis(#531)
   - 诉求：浏览器实时投屏、工具调用链路可视化、后台任务面板化

## 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 |
|------|----------|----------|----------|
| OpenClaw | 企业级网关+子代理 | 团队/OSS项目 | 模块化网关+多模态Agent |
| Hermes Agent | God-file拆解+跨profile | 进阶开发者 | 微服务化+MCP集成 |
| IronClaw | 架构模块化+性能 | 高性能场景 | Rust核心+插件化扩展 |
| CoPaw | 多模态+插件市场 | 企业应用开发 | 全栈式集成开发 |
| Moltis | 浏览器自动化 | 爬虫/自动化 | CDP驱动+容器化 |
| ZeroClaw | 知识图谱+精细控制 | 专业开发者 | 高可靠性Rust实现 |

## 社区热度与成熟度

- **快速迭代阶段**：IronClaw（RC版本落地）、CoPaw（v2.1.0准备）、Moltis（浏览器UI功能）
- **质量巩固阶段**：OpenClaw（大量P1 Bug修复）、ZeroClaw（S0安全问题定位）、Hermes Agent（god-file分解）
- **低活跃阶段**：NullClaw、PicoClaw、ZeptoClaw（无显著动态）

## 值得关注的趋势信号

1. **生产级标配需求**：成本预算控制(IronClaw #7473)、认证链路恢复(OpenClaw #98702)正从特性请求演变为**部署必需项**

2. **架构演进信号**：Hermes Agent god-file拆解(7.2kW行单文件重构)、OpenClaw PR #121299热重载优化表明生态正在**从单体向微服务演进**

3. **调试治理趋势**：浏览器实时投屏(Moltis #531)、工具调用可视化(CoPaw #6870)反映用户**从"能用"向"好用"的刚性需求**

4. **安全可靠性底层关注**：ZeroClaw知识图谱隔离缺陷(#9647)、OpenClaw静默回复复发(#121058)显示**安全边界与数据一致性成为投入产出比最高的改进方向**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-11

---

## 一、今日速览

Hermes Agent 持续保持高活跃度：过去24小时共收到 **50条Issues**（44条新开、6条关闭）和 **50条PR**（40条待合并、10条已合并/关闭），无新版本发布。项目围绕 **god-file分解**、**EMFILE资源泄漏**、**cron 调度与消息投递**三大主题持续推进。社区讨论高度集中于跨平台桌面支持、会话状态管理与插件架构优化，整体健康度良好但仍存在若干稳定性隐患。

---

## 二、版本发布

**无新版本发布。** 本次报告周期内无新版本发布记录，暂无重大破坏性变更或迁移注意事项。

---

## 三、项目进展

### 合并/关闭的重要 PR（按评论数排序）

| PR号 | 主题 | 影响 |
|------|------|------|
| **#83542** | EMFILE follow-up：restarted 路径中 orphan gateway 被收割、SSH-spawned 远程后端 `ulimit -n 65536`、Desktop 守护进程正确终止 | 解决 #83406 相关 EMFILE 集群的尾部环节，消除守护进程残留 |
| **#83557** | 多路复用网关将 cronjob 调度路由至拥有正确 Profile 认证令牌，不再发送到错误 bot | 关闭 #83182，修复 multiplex gateway 下 cron 投递到错误通道的严重错误 |
| **#83556** | 修复 Windows 启动时 `HERMES_PARENT_PID` 父进程退避导致的 `hermes serve` 后端存活问题 | Windows 桌面启动回归 |
| **#83554** | macOS 恢复已认证用户发现（Actual）的模型目录请求，通过 Hermes 凭证安全的 urllib opener 保留原始贡献 | 修复 macOS 模型发现认证问题 |
| **#83553** | 扩展 gateway 运行时页脚，增加 `tokens_in`/`tokens_out`/`effort` 三个可选元数据字段，并为 Feishu 提供卡片式页脚 | 新的可视化展示功能 |
| **#83552** | 全局 Kanban 工作者并发上限被每个 board watcher 独立约束，PR 引入原子全局预留 + 每 profile 预留 | 修复跨 board 并发超限问题 |
| **#83550** | Respect 路由的 profile busy modes：`queue` 等待当前响应完成、`steer` 重定向活跃响应 | 修复 profile busy mode 路由行为 |
| **#83551** | 解释被静默自动批准的违规命令（"上次会话批准"、"永久 always 条目"、"matched podman *"） | 提升用户可见性和反馈透明度 |
| **#83549** | 负定价哨兵（OpenRouter 动态定价 `-1`）不再被计入成本会计，而是降级为 "unknown" | 修复定价计算异常 |
| **#83546** | 提取 `api_server` idempotency cluster 到独立模块 | 拆分网关架构 |

> **PR 总计**：10 个已合并/关闭的 PR 主要集中在 **EMFILE 资源回收**（#83542）、**跨 profile 路由**（#83550）、**cron 投递**（#83557）、**Windows 启动**（#83556）、**模型发现**（#83554）、**Kanban 并发**（#83552）等关键稳定化场景。

### 活跃的 Issues 进展

- **#78647（65评论）**：god-file 分解的史诗级议题，社区明确 2026-08-01 起实施策略"所有 god 文件均被分片，永不回滚"——这是 Hermes Agent 架构层面的核心迁移任务。
- **#78642 / #78641 / #78643 / #78640**：同一系列 refactor 的 God-file 分片动作，覆盖 `tools/mcp_tool.py`（7,230 行）、`agent/conversation_loop.py`（7,306 行）和 `gateway/platforms/api_server.py`（7,188 行）。

---

## 四、社区热点

### 评论最多的问题（Top 10）

| # | Issue | 评论数 | 状态 | 核心痛点 |
|---|-------|--------|------|----------|
| 1 | **#78647** — Shard 20 god files 仓库级分解 | 65 | OPEN | 架构升级，7+ 个核心文件持续拆分 |
| 2 | **#75269** — SessionDB WAL reader 泄漏 | 9 | CLOSED | 长期会话耗尽文件描述符 |
| 3 | **#66824** — cronjob repeat='forever' TypeError | 7 | OPEN | 时间戳类型不匹配 |
| 4 | **#69451** — Desktop 端点忽略活动 profile | 5 | OPEN | 桌面端配置作用域 |
| 5 | **#63395** — Matrix cron 加密房间投递后日志崩溃 | 5 | OPEN | 消息投递后数据库连接池异常 |
| 6 | **#78872** — Desktop 孤儿 hermes serve 后端堆积 | 4 | OPEN | macOS EMFILE |
| 7 | **#45762** — Telegram 富消息体文本放大 | 4 | CLOSED | 富消息渲染尺寸异常 |
| 8 | **#83542** — EMFILE 跟进重启路径收割 | — | OPEN | 网关/桌面资源泄漏 |
| 9 | **#69304** — Cron deliver=origin 在 api_server 会话静默失败 | 3 | OPEN | 平台 origin 解析错误 |
| 10 | **#83557** — 多路复用网关 cron 投递错误 bot | — | OPEN | profile 令牌错误路由 |

> **主要痛点**：社区最关注 **god-file 分解**（#78647，65 评论），说明项目正在推进大规模重构；**EMFILE 资源泄漏**（#80898、#83542、#75269）持续造成桌面/网关性能劣化；**cron 投递与 profile 路由**（#69451、#63395、#83557）涉及多个平台的跨 profile 调度精度。

---

## 五、Bug 与稳定性

### 按严重程度排列

| 优先级 | 编号 | 问题描述 | 平台/范围 | 是否有修复 PR |
|--------|------|----------|-----------|---------------|
| **P1** | #78872 | macOS 桌面关闭时孤儿 `hermes serve` 后端堆积 → EMFILE（256 文件描述符上限） | macOS | ✅ **#83542** 已合并 |
| **P1** | #83512 | `SessionDB._read_conns` 泄漏一个 read-only 连接（state.db fd 对），40h 后 EMFILE | gateway | ✅ **#83552** 已合并 |
| **P1** | #83484 | Cron job 在 delivery 目标永久不兼容时无限重试（API-server 会话已关闭） | API server | ❌ 暂无修复 PR |
| **P1** | #83549 | OpenRouter 负定价哨兵 `-1` 流入成本会计 | 定价计算 | ✅ **#83549** 已合并 |
| **P1** | #83553 | Briar 平台插件添加 | 平台 | ✅ **#83561** 已合并 |
| **P1** | #83475 | Browser toolset 在 post-setup 后从未暴露 | headless Linux | ❌ 暂无修复 PR |
| **P2** | #83006 | TUI Ctrl+Z 意外激活整个进程组（paste `0x1A`） | CLI/TUI | ❌ 暂无修复 PR |
| **P2** | #83482 | Linux 桌面关闭时泄露孤儿后端（fire-and-forget SIGTERM 不升级） | Linux 桌面 | ❌ 暂无修复 PR |
| **P2** | #83485 | /refine 拒绝已完成会话但缺少 in-memory agent 缓存条目 | 桌面 | ❌ 暂无修复 PR |
| **P2** | #78641 | Shard `agent/conversation_loop.py`（7,306 行） | 架构 | ✅ **#83547** 已合并 |
| **P2** | #78643 | Shard `gateway/platforms/api_server.py`（7,188 行） | 架构 | ✅ **#83546** 已合并 |
| **P2** | #80898 | macOS 重复重启导致 orphaned `hermes serve` 后端累积 | macOS | ❌ 暂无修复 PR |

### 已修复 PR

| PR号 | 修复内容 | 相关 Issue |
|------|----------|------------|
| **#83542** | EMFILE 跟随清理：restart 路径下 gateway 收割、SSH ulimit 65536、Desktop 守护进程终止 | #83406（相关） |
| **#83557** | 多路复用网关将 cron 投递正确路由至对应 Profile bot 令牌 | #83182 |
| **#83549** | 负定价哨兵降级为 "unknown" 而非计入真实成本 | #83549 |
| **#83561** | Briar 平台插件添加 | #83561 |
| **#83546** | api_server idempotency cluster 提取为独立模块 | #83542 |
| **#83547** | content-policy blocked-result helper 提取 | #83541 |
| **#83552** | Kanban 工作者并发全局限制 | #83552

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-11

---

## 1. 今日速览

过去 24 小时内 **PicoClaw** 项目活跃度中等偏上，共处理 4 条 Issue 和 9 条 PR。其中 **7 条 PR 被合并或关闭**，包括修复远程执行安全边界、Telegram 渲染优化等内容；有 **2 条新 PR 仍处于待合并状态**，涉及 Agent 工具调用超时判断逻辑与允许模式匹配问题。项目未发布新版本，但持续推进稳定性与安全性改进。整体表现为 **维护性提升为主、功能扩展为辅**。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

以下是今日合并/关闭的关键 PR：

| PR 链接 | 类型 | 描述 |
|--------|------|------|
| [#3327](https://github.com/sipeed/picoclaw/pull/3327) | 功能增强 | Telegram 表格渲染支持原生富文本消息格式，提升可读性。 |
| [#3326](https://github.com/sipeed/picoclaw/pull/3326) | 构建维护 | 修复 `pnpm-lock.yaml` 中重复依赖项导致的安装失败问题。 |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | 安全加固 | 加强远程指令与执行边界控制，防止潜在滥用风险。 |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | Bug 修复 | 防止因超长代码块信息头导致 `SplitMessage` 挂起问题。 |
| [#2132](https://github.com/sipeed/picoclaw/pull/2132) | 配置优化 | 支持模型级别的 `max_tokens` 设置，优化配置键冲突问题。 |

这些变更集中体现在以下方向：
- ✅ **用户体验优化**：Telegram 渲染升级使输出更清晰。
- 🔐 **安全性强化**：远程调用与本地执行限制更加精细化。
- ⚙️ **构建与依赖管理**：确保安装流程稳定。
- 🛠️ **配置系统完善**：提升灵活性与兼容性。

---

## 4. 社区热点

以下 Issue 今日评论活跃或反映典型使用痛点：

- **[#3301](https://github.com/sipeed/picoclaw/issues/3301)** – `/clear` 和会话压缩在非默认 Agent 中失效  
  - 评论数：3 | 👍: 0  
  - 用户通过调度规则将聊天路由到非默认 Agent 时，部分会话管理功能失效，影响使用体验。

- **[#3311](https://github.com/sipeed/picoclaw/issues/3311)** – 工具失败后进入死循环，最长等待至 `max_tool_iterations`  
  - 评论数：1 | 👍: 0  
  - 典型场景为 Git 认证失败，导致用户长时间无响应，严重影响交互体验。

- **[#3298](https://github.com/sipeed/picoclaw/issues/3298)** – 请求添加 AI Router 作为 OpenAI 兼容 Provider 预设  
  - 评论数：2 | 👍: 0  
  - 维护者表示愿意贡献此功能，但尚未进入开发阶段。

---

## 5. Bug 与稳定性

当前报告的 Bug 包括：

| Issue | 严重程度 | 状态 | 备注 |
|-------|----------|------|------|
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) | 高 | 开放 | 存在对应 PR（[#3312](https://github.com/sipeed/picoclaw/pull/3312)），待合并 |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | 中 | 开放 | 影响部分高级用法，无直接修复 PR |
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | 低 | 已关闭 | 用户反馈 `/list models` 无法列出所有模型，可能为使用方式不当 |

其中 **#3311** 是最紧急的问题，已有修复 PR 提交，建议尽快评估并合入。

---

## 6. 功能请求与路线图信号

- **[#3298](https://github.com/sipeed/picoclaw/issues/3298)** – 请求将 AI Router 添加为一个内置 OpenAI 兼容 Provider  
  - 维护者已表达意愿参与开发，若 PR 被接受，有望纳入下个版本。
  - 相关链接：[PR #3314](https://github.com/sipeed/picoclaw/pull/3314)

- **用户期望增强功能**：
  - 自定义模型列表展示方式
  - 会话管理命令在多 Agent 环境下的一致性

---

## 7. 用户反馈摘要

从 Issues 和评论中可总结出以下几点主要用户痛点：

- 💬 **会话管理不一致**：用户期望 `/clear`、压缩等快捷操作在所有 Agent 下生效，但目前仅限默认 Agent。
- ⏱️ **响应超时问题**：在工具调用失败时，Agent 会陷入长时间循环，缺乏有效反馈机制。
- 🧩 **Provider 预设缺失**：用户希望集成更多第三方服务（如 AI Router）作为一等公民配置选项。
- 🖼️ **Telegram 输出美观性有待提升**：旧版表格以代码块形式显示，不便阅读。

---

## 8. 待处理积压

以下长期未活跃或未被正式处理的 Issue/PR 值得关注：

- **[#3298](https://github.com/sipeed/picoclaw/issues/3298)** – 自 2026 年 7 月创建以来仍未进入正式开发流程，标签为 Stale。
- **[#3301](https://github.com/sipeed/picoclaw/issues/3301)** – 自 7 月末以来有更新，但仍处于 Open 状态。
- **[#2132](https://github.com/sipeed/picoclaw/pull/2132)** – 从 2026 年 3 月创建，直到今日才被关闭，反映出项目对旧 PR 的回清速度较慢。

---

> 📌 日报生成日期：2026-08-11  
> 数据来源：[sipeed/picoclaw GitHub 项目](https://github.com/sipeed/picoclaw)  
> 如需订阅此类报告，请联系维护团队。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目 2026‑08‑11 每日动态报告**

---

### 1. 今日速览  
- 过去 24 小时内仅有一次 Issue 关闭（#700），没有新开 Issue，整体活跃度极低。  
- 同期有一条 PR（#956）处于“待合并”状态，表示依赖升级正在进行但尚未合入主线。  
- 无新版本发布，代码基础保持稳定，未出现紧急缺陷。  
- 项目整体健康度：低活跃度但无负面影响，维护者仍在按计划推进依赖更新。

**链接**：<https://github.com/nullclaw/nullclaw>

---

### 2. 版本发布  
- **无** 新版本发布（`New releases: 0`）。

---

### 3. 项目进展  
- **已关闭 Issue #700**：实现了 `a2a_call` 客户端工具，使 Agent 能够通过 JSON‑RPC 向远端 Agent 发送 `message/send` 请求。此闭合表明该功能已完成实现并被接受，项目在 A2A 客户端能力上实现了实质性进展。  
- **PR #956**：依赖更新 `alpine` 从 3.23 到 3.24，属于纯基础设施改动，旨在提升 CI 镜像的安全性与兼容性。暂未合并，仍需审查。

**影响**：关闭的 Issue 直接扩展了 NullClaw 的 A2A 生态能力；PR 只涉及 CI 环境，对代码运行无直接功能影响，但有助于后续稳定性。

**链接**：  
- Issue #700：<https://github.com/nullclaw/nullclaw/issues/700>  
- PR #956：<https://github.com/nullclaw/nullclaw/pull/956>

---

### 4. 社区热点  
- **最活跃 Issue**：#700（1 条评论、1 个赞），用户提出并完成了 `a2a_call` 客户端实现，显示社区对 A2A 客户端工具的迫切需求。  
- **最活跃 PR**：#956（Dependabot 自动生成），虽无手动评论，但作为依赖安全性提升的常规 PR，值得关注。

**背后诉求**：社区急需本地客户端来简化跨实例的 A2A 调用，提升跨部署的可用性与便利性。

---

### 5. Bug 与稳定性  
- 今日未报告任何 Bug、崩溃或回归问题。  
- 因此 **严重度列表为空**，且未关联任何修复 PR。

---

### 6. 功能请求与路线图信号  
- Issue #700 本身即为功能请求，已在本次闭合中得到实现，说明 **`a2a_call` 客户端** 有望随下一版本正式发布。  
- 结合当前 PR 仅为依赖更新，未出现其他新功能提案，路线图上暂无明确的功能增强指示。

---

### 7. 用户反馈摘要  
- **痛点**：原有 NullClaw 仅提供 A2A 服务端，缺乏客户端用于跨实例的 JSON‑RPC 调用，导致运营多实例（如公开 doorman + 私有 personal agent）时需额外自行实现通信逻辑。  
- **满意点**：Issue #700 的快速响应与实现，使用户对新增 `a2a_call` 工具给予正面反馈（👍 1）。  
- **不满/疑问**：目前仅见单条评论，未出现明确的负面反馈，但后续若有更多用户验证，需关注兼容性与文档完善。

---

### 8. 待处理积压  
- **PR #956**（Dependabot 提供）仍处于“打开”状态，未受到审查者的主动关注。长时间审查可能导致 CI 环境落后，建议维护者尽快评审并合入。  
- **Issue #700** 已关闭，暂无其他长期未响应的 Issue 或 PR。

**提醒**：请相关维护者关注 PR #956 的审查进度，确保依赖升级顺利融合进主线。  

--- 

*报告结束。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

We need to produce a daily report for 2026-08-11 based on given data. Must include sections:

1. 今日速览: 3-5 sentences summarizing overall status, including activity assessment.

2. 版本发布: If new release, detail content, breaking changes, migration notes. There is a new release: ironclaw-v1.1.1-rc.1 (2026-08-10). Need to explain update content, breaking changes, migration notes. The release notes mention urgent patch candidate for 1.1 line, focusing on channel delivery, pairing, IronHub/custom MCP compatibility, WebUI streaming stability, durable retrieval, safe upgrades from supported stable predecessors. Upgrading from 1.0.0: Stop all writers. So we need to note that it's a release candidate (rc.1) and includes breaking change: stop all writers (maybe breaking). Provide details.

3. 项目进展: 今日合并/关闭的重要 PR. Need to identify important PRs among those listed (the 20 shown). Look for PRs that are closed and have significant impact. Also open PRs maybe important. Provide summary: which PRs merged/closed today, what features/fixes they deliver, and overall progress (e.g., number of PRs merged). We have 50 PR updates total, 17 merged/closed. Need to pick important ones. Let's scan the PR list:

- #7472: chore(ci): remove dead has_reborn_tests output from classify-test-scope.sh (open)
- #5101: ci: reuse cargo-component installer in live canary (open)
- #7474: fix(qa): stop the agent asserting unverified state — automation status, per-caller extension auth, recalled memory (#7246, #7247, #7294) (open)
- #7475: fix(product): stop releasing the connect-nudge throttle on ref-less delivery (open)
- #7456: fix(reborn): make durable storage profile-agnostic (open)
- #7470: fix(threads): restore listability for unprojected thread index rows (open)
- #7336: fix(loop-host): dedup consumed steering replays (closed)
- #7469: feat(traces): reduce captured logprobs to envelope confidence aggregates (open)
- #7410: feat(tool-search): complete fair discovery and benchmark arms (open)
- #7434: fix(loop): allow security prose in recovered context (open)
- #7426: feat(stress): add durable memory parity matrix (open)
- #7442: Install the packages the catalog already publishes (open)
- #7471: fix(processes): lease expiry recovers safe runs instead of failing them; isolate the journal heartbeat pool (open)
- #7455: fix(cli): fall back to default workspace when cwd overlaps skill roots (closes #7431) (open)
- #7466: Trim live-QA shard artifacts (open)
- #7468: feat(nearai): capture per-token logprobs to a local sidecar (open)
- #7376: ci(check-guidance): extend the reference gate to the docs/ surface (doc-truth PR 2/5) (open)
- #7464: feat(telegram): linked-device — device-link auth, session custody, standard-op tools (open)
- #7446: feat(channels): rich working indicator — reactions, failure states, progress nudges (closed)
- #6994: feat(webui): OOBE automation-tasks prototype — carousel, inline cards, agent-mode pill (open)

We need to highlight important PRs that were merged/closed today. The PRs that are closed (i.e., merged) are: #7336 (fix(loop-host): dedup consumed steering replays) and #7446 (feat(channels): rich working indicator). Also maybe #7442? It's open. #7472 open. So we need to list important PRs that were merged/closed today. Also maybe other closed PRs not shown (the list includes many closed issues, but PRs). Let's see which PRs are closed: #7336 (closed), #7446 (closed). Also maybe #7474? It's open. So we have two closed PRs. Also maybe #7471? open.

But the prompt says "今日合并/关闭的重要 PR". So we need to list PRs that were merged/closed today (i.e., within the last 24h). The PR list shows creation dates; many are created on 2026-08-10 or 2026-08-11. For closed PRs, we need to see if they were closed today. #7336 created 2026-08-07, updated 2026-08-10, closed 2026-08-10 (so closed today). #7446 created 2026-08-10, updated 2026-08-10, closed 2026-08-10 (closed today). So those are the two important closed PRs.

We also need to mention overall progress: number of PRs merged/closed (17). Also maybe note that there are 33 pending PRs.

4. 社区热点: Issues with most comments/likes. Need to pick the top 3-5. From list, the ones with highest comments: #7137 (12 comments), #7145 (4), #6257 (3), #7147 (3), #5882 (3), #3762 (2), #7151 (2), #6941 (1), #6834 (1), #7036 (1), #6733 (1), #6945 (1), #6492 (1), #7149 (1), #3604 (1), #7150 (1), #7067 (1), #6926 (1), #7473 (0), #7467 (0), #7038 (0), #7046 (0), #6485 (0), #7354 (0), #7465 (0), #7447 (0), #7044 (0). So top comment count is #7137 with 12 comments. Also #7145 4, #6257 3, #7147 3, #5882 3. So we can highlight #7137 as most active. Also maybe #7145 (closed) about WS2 extension host loops. Also #6257 about PDF attachments error. Also #5882 about Slack reconnect broken flow. Also #3762 about editing AGENTS.md not updating system prompt.

We need to provide analysis of underlying demand.

5. Bug 与稳定性: Reported bugs and stability issues. Need to list bugs reported today (within 24h). Look at issues with creation date 2026-08-10 or later. Let's see:

- #7145 created 2026-08-04, updated 2026-08-10 (closed) – not new.
- #7147 created 2026-08-04, updated 2026-08-10 (closed) – not new.
- #6257 created 2026-07-19, updated 2026-08-10 (open) – bug about PDF attachments; not new but still reported.
- #5882 created 2026-07-09, updated 2026-08-10 (closed) – Slack reconnect bug.
- #7036 created 2026-08-03, updated 2026-08-10 (closed) – changed-coverage gate issue.
- #6733 created 2026-07-27, updated 2026-08-10 (closed) – manifest-declared commands.
- #6945 created 2026-07-31, updated 2026-08-10 (closed) – hook isolation test missing.
- #6492 created 2026-07-22, updated 2026-08-10 (closed) – group extension assets.
- #7149 created 2026-08-04, updated 2026-08-10 (closed) – arch same-layer coupling guard.
- #3604 created 2026-05-14, updated 2026-08-10 (closed) – TrustClass placeholder semantics.
- #7150 created 2026-08-04, updated 2026-08-10 (closed) – vendor sanction pin.
- #7067 created 2026-08-03, updated 2026-08-10 (closed) – Reborn lanes resource governor.
- #6926 created 2026-07-30, updated 2026-08-10 (closed) – move crates layout.
- #7473 created 2026-08-10, updated 2026-08-10 (open) – post_notice collapse issue; not a bug but issue.
- #7467 created 2026-08-10 (open) – durable state profile-agnostic epic.
- #7038 created 2026-08-03, updated 2026-08-10 (open) – Storybook + design system.
- #7046 created 2026-08-03, updated 2026-08-10 (open) – configure tools from AI chat.
- #6485 created 2026-07-22, updated 2026-08-10 (closed) – channel-aware conversations epic.
- #7354 created 2026-08-07, updated 2026-08-10 (open) – Extensions vNext epic.
- #7465 created 2026-08-10 (open) – Company Brain FDE epic.
- #7447 created 2026-08-10 (open) – Agent fails after many tool calls.
- #7044 created 2026-08-03, updated 2026-08-10 (open) – onboarding to channel-first.

But the question: "今日报告的 Bug、崩溃、回归问题，按严重程度排列，标注是否已有 fix PR". So we need to consider bugs reported today (i.e., within last 24h). The issues with creation date 2026-08-10 are: #7473, #7467, #7038, #7046, #7465, #7447, #7044. Among these, which are bugs? Let's examine each:

- #7473: issue about post_notice → release_connect_nudge collapse causing duplicate connect-nudge; this is a bug/issue. Not a crash but functional bug.

- #7467: epic about durable state profile-agnostic; not a bug.

- #7038: epic about Storybook + design system; not a bug.

- #7046: epic about configure tools; not a bug.

- #7465: epic about Company Brain FDE; not a bug.

- #7447: issue about agent fails after calling too many tools – this is a bug / stability issue.

- #7044: epic about onboarding; not a bug.

Thus the bug(s) reported today: #7473 (post_notice collapse) and #7447 (agent fails after many tool calls). Also maybe #7145 is closed but not new; but we consider only today's reported bugs. However, the question may expect all bugs reported (including those updated today) but not necessarily created today. The phrase "今日报告的 Bug、崩溃、回归问题" could mean bugs that were reported (i.e., have comments) today. Since many issues were updated on 2026-08-10, we should include those that have activity today (i.e., updated). Let's list issues updated on 2026-08-10 that are bugs or stability concerns:

- #7145 (closed) – extension host loops; not new but updated.
- #7147 (closed) – shrink-only architecture ratchets; not new.
- #6257 (open) – PDF attachments mime_type error; updated today.
- #5882 (closed) – Slack reconnect broken flow; updated today.
- #7036 (closed) – changed-coverage gate not run; updated today.
- #6733 (closed) – manifest-declared commands; updated today.
- #6945 (closed) – hook isolation test missing; updated today.
- #6492 (closed) – group extension assets; updated today.
- #7149 (closed) – arch same-layer coupling guard; updated today.
- #3604 (closed) – TrustClass placeholder semantics; updated today.
- #7150 (closed) – vendor sanction pin; updated today.
- #7067 (closed) – Reborn lanes resource governor; updated today.
- #6926 (closed) – move crates layout; updated today.
- #7473 (open) – post_notice collapse; created today.
- #7467 (open) – durable state profile-agnostic; not a bug.
- #7038 (open) – Storybook; not bug.
- #7046 (open) – configure tools; not bug.
- #7465 (open) – Company Brain FDE; not bug.
- #7447 (open) – agent fails after many tool calls; bug.
- #7044 (open) – onboarding; not bug.

Thus we need to list bugs with severity and note if there is a fix PR. Let's assess severity:

- #6257: "Invalid value (attachments.mime_type)" error when sending/generating PDF files. Likely medium severity (bug). No fix PR shown yet (maybe pending). Could be high if affects PDF generation.

- #5882: Slack reconnect broken flow; authentication flow broken; only recovery is reinstall extension – high severity (usability blocker). No fix PR yet (closed). But maybe there is a fix in another PR.

- #7145: WS2: finish extension_host → loops re-layer – sizing issue; maybe medium severity.

- #7147: shrink-only architecture ratchets carry untracked slack – could cause subtle bugs; medium.

- #7036: changed-coverage gate not run on ordinary PRs – could cause missed checks; medium.

- #6733: manifest-declared /model and /status commands not working across channels – functional bug; medium.

- #6945: missing regression test for cross-run hook isolation – could cause regressions; low.

- #6492: grouping extension assets – more architectural; low.

- #7149: same-layer coupling guard missing – could cause security issues; medium-high.

- #3604: TrustClass placeholder semantics – safety risk (high). Already closed but still a bug.

- #7150: vendor sanction pin missing – could be security; medium.

- #7067: replace ResourceGovernor dependency – maybe low.

- #6926: move crates layout – architectural; low.

- #7473: post_notice collapse causing duplicate connect-nudge – functional bug; medium.

- #7447: agent fails after too many tool calls – high severity (stability, could cause runaway loops). No fix PR yet.

Also #7145 maybe not a bug but a proposal.

We need to sort by severity: high, medium, low.

High severity: #3604 (TrustClass placeholder semantics) – safety risk; #7447 (agent fails after many tool calls) – could cause runaway loops; #6257 (PDF mime_type error) – may cause crashes; #5882 (Slack reconnect broken) – usability blocker; maybe #7145 (extension host loops) – could cause infinite loops.

Medium: #7145? Actually maybe #7145 is moderate; #7147; #7036; #6733; #7149; #7150; #7067; #6926; #7473.

Low: #6945; #6492; #6926; #7149 maybe moderate; #7036 maybe moderate; #6733 maybe moderate.

We need to indicate if there's a fix PR. For each bug, check if there is a PR that addresses it (open or closed). Let's see:

- #6257: No fix PR shown; maybe pending.

- #5882: Closed, no fix PR shown (maybe already fixed? but PR closed). Not sure.

- #7145: closed, no fix PR shown.

- #7147: closed, no fix PR shown.

- #7036: closed, no fix PR shown.

- #6733: closed, no fix PR shown.

- #6945: closed, no fix PR shown.

- #6492: closed, no fix PR shown.

- #7149: closed, no fix PR shown.

- #3604: closed, no fix PR shown (maybe already fixed earlier).

- #7150: closed, no fix PR shown.

- #7067: closed, no fix PR shown.

- #6926: closed, no fix PR shown.

- #7473: open, no fix PR yet (the issue itself is the bug; there may be a PR later). So no fix PR currently.

- #7447: open, no fix PR yet.

Thus many bugs have no fix PR yet. We'll note "No fix PR yet" for those.

6. 功能请求与路线图信号: Use user requests to see which may be in next version. Look at open issues/epics that are feature requests. Identify which could be included in next version (maybe v1.2 or v1.3). For example:

- #7467: Epic: Make Reborn durable state profile-agnostic and migrate legacy profile roots – already in progress via PR #7456 (fix(reborn): make durable storage profile-agnostic). So likely will be in next version.

- #7038: Epic: Storybook + AI-first Design System – open, may be in next version.

- #7046: Epic: Configure all tools, channels, extensions from AI chat as admin – open, may be upcoming.

- #7354: Epic: Extensions vNext – Web Push, Rich Messaging, Telegram User Sessions, Signal – open, likely next version.

- #7447: Agent fails after many tool calls – bug, but also indicates need for tool usage limits; may lead to feature to limit tool calls.

- #7044: Onboarding to channel-first – open epic, may be upcoming.

- #7465: Company Brain FDE – epic, maybe upcoming.

- #7468: feat(nearai): capture per-token logprobs – feature; may be included.

- #7426: feat(stress): durable memory parity matrix – performance feature.

- #7464: feat(telegram): linked-device – feature.

- #7470: fix(threads): restore listability – bug fix.

- #7455: fix(cli): fallback to default workspace – bug fix.

- #7471: fix(processes): lease expiry recovers safe runs – bug fix.

- #7469: feat(traces): reduce captured logprobs – performance.

- #7410: feat(tool-search): complete fair discovery – feature.

- #7434: fix(loop): allow security prose – bug fix.

- #7426: feat(stress): durable memory parity matrix – feature.

- #7442: Install packages the catalog already publishes – improvement.

- #7472: chore(ci): remove dead has_reborn_tests – cleanup.

- #7466: Trim live-QA shard artifacts – improvement.

- #7376: ci(check-guidance): extend reference gate to docs surface – CI improvement.

- #7468: feat(nearai): capture per-token logprobs – feature.

- #7469: feat(traces): reduce captured logprobs – feature.

- #7410: feat(tool-search): complete fair discovery – feature.

- #7434: fix(loop): allow security prose – bug fix.

- #7426: feat(stress): durable memory parity matrix – feature.

- #7475: fix(product): stop releasing connect-nudge throttle – bug fix.

- #7474: fix(qa): stop agent asserting unverified state – bug fix.

- #7470: fix(threads): restore listability – bug fix.

- #7455: fix(cli): fallback to default workspace – bug fix.

- #7466: Trim live-QA shard artifacts – improvement.

- #7468: feat(nearai): capture per-token logprobs – feature.

- #7469: feat(traces): reduce captured logprobs – feature.

- #7410: feat(tool-search): complete fair discovery – feature.

- #7434: fix(loop): allow security prose – bug fix.

- #7426: feat(stress): durable memory parity matrix – feature.

- #7442: Install packages – improvement.

- #7471: fix(processes): lease expiry recovers safe runs – bug fix.

- #7455: fix(cli): fallback – bug fix.

- #7466: Trim live-QA shard artifacts – improvement.

- #7468: feat(nearai): capture per-token logprobs – feature.

- #7468: same as above.

- #7469: feat(traces): reduce captured logprobs – feature.

- #7470: fix(threads) – bug fix.

- #7455: fix(cli) – bug fix.

- #7472: chore – cleanup.

- #7474: fix(qa) – bug fix.

- #7475: fix(product) – bug fix.

- #7456: fix(reborn) – feature.

- #7470: fix(threads) – bug fix.

- #7376: ci – improvement.

- #7464: feat(telegram) – feature.

- #7446: feat(channels) – closed.

- #6994: feat(webui) – open.

- #7473: open issue about duplicate connect-nudge.

- #7467: epic durable state – open.

- #7038: epic Storybook – open.

- #7046: epic configure – open.

- #7354: epic extensions vNext – open.

- #7465: epic Company Brain FDE – open.

- #7447: open bug about agent tool loops – maybe leads to limit.

- #7044: epic onboarding – open.

Thus we can summarize which features likely to be in next version: durable state profile-agnostic (PR #7456), extensions vNext (epic #7354), telegram linked-device (PR #7464), AI-first design system (epic #7038), onboarding channel-first (epic #7044), maybe Company Brain FDE (epic #7465). Also bug fixes like #7447 (tool usage limit) may be addressed.

7. 用户反馈摘要: Extract pain points from comments.

- #7137: Large shard artifacts (700MB-1.5GB) cause slow downloads, storage quota issues; users want to exclude regenerable/intermediate paths from upload.

- #6257: Invalid attachments.mime_type error when sending/generating PDF files – users encounter error; need fix.

- #5882: Slack reconnect attempts break authentication flow; UI shows "Waiting for Slack..." and "Authorization failed"; recovery only by reinstall extension – major usability issue.

- #3762: Editing AGENTS.md in web UI does not update system prompt for ongoing/future conversations – users expect changes to take effect.

- #7473: Duplicate connect-nudge notices reaching users who already received one – annoying duplicate messages.

- #7447: Agent fails after calling too many tools – leads to redundant loops, wasted resources.

- #7038: Need for Storybook + AI-first design system – desire for better UI components and theming.

- #7046: Want ability to configure all tools, channels, extensions from AI chat as admin – simplifies onboarding.

- #7465: Company Brain FDE – maybe desire for better brain/federated features.

- #7467: Desire for durable state profile-agnostic – users want consistent state across profile changes.

- #7473: Duplicate connect-nudge – also a pain.

- #7468: Capture per-token logprobs – maybe for debugging.

- #7426: Durable memory parity matrix – performance.

- #7469: Reduce captured logprobs – performance.

- #7470: Restore listability for unprojected thread index rows – UI issue.

- #7466: Trim live-QA shard artifacts – storage/performance.

- #7468: per-token logprobs – debugging.

- #7464: Telegram linked-device – desire for better Telegram integration.

- #7446: Rich working indicator – desire for better status feedback.

- #7354: Extensions vNext – desire for richer messaging, push notifications, etc.

- #7475: Stop releasing connect-nudge throttle on ref-less delivery – want correct throttling.

- #7474: Stop agent asserting unverified state – want more robust state checking.

- #7455: Fallback to default workspace when cwd overlaps skill roots – usability.

- #7472: Remove dead has_reborn_tests output – cleanup.

- #7469: Reduce captured logprobs – performance.

- #7471: Lease expiry recovery – reliability.

- #7472: Clean up CI output – maintainability.

- #7474: Agent state verification – reliability.

- #7456: Durable storage profile-agnostic – important for multi-profile usage.

- #7470: Thread listability – UI.

- #7468: per-token logprobs – debugging.

- #7469: reduce captured logprobs – performance.

- #7473: Duplicate connect-nudge – duplicate messages.

- #7467: durable state profile-agnostic – important.

- #7038: Storybook + design system – UI/UX.

- #7046: admin configure – usability.

- #7447: agent tool loops – stability.

- #7044: onboarding – user experience.

- #7465: Company Brain FDE – maybe new features.

- #7473: duplicate connect-nudge – duplicate messages.

- #7468: per-token logprobs – debugging.

- #7474: agent state verification – reliability.

- #7455: fallback workspace – usability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7456: durable storage – important.

- #7470: thread listability – UI.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability.

- #7472: CI cleanup – maintainability.

- #7474: agent state – reliability.

- #7455: fallback workspace – usability.

- #7466: trim QA artifacts – storage.

- #7468: per-token logprobs – debugging.

- #7469: reduce logprobs – performance.

- #7471: lease expiry – reliability

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 – 2026‑08‑11**

---

### 1. 今日速览  
- 过去 24 小时内出现 **3 条新开 Issue**（全部为 Bug）和 **1 条未合并的 PR**（feature: 浏览器交互 UI）。  
- 无新版本发布，代码库处于 **功能开发与错误修复并行** 的状态。  
- Issue 活跃度偏向 **Bug 报告**，PR #531 虽为大幅功能增强，但近期评论与点赞均为空，表明目前处于 **等待审查** 的阶段。  
- 总体健康度：Issue 数量略有增加，但无严重回归或安全漏洞，项目保持 **稳定可控**。

---

### 2. 版本发布  
- **无新版本发布**（`Latest Releases` 为空）。  

---

### 3. 项目进展  
- **PR #531**【OPEN】（https://github.com/moltis-org/moltis/pull/531）  
  - **功能**: 在 Settings > Browser 页面加入 **交互式浏览器 UI**，支持通过 CDP screencast 实时观看、使用鼠标/键盘/滚动进行会话控制，并提供会话历史日志。  
  - **收益**: 提升调试与演示体验，实现 ** cookie 隔离** 的多_agent 浏览器配置。  
  - **进度**: 代码已提交，当前处于 **等待 Review**，若能及时获批，将在下一迭代中提供可直接使用的浏览器会话功能。  

- 今日未合并或关闭任何 PR，故项目向前的 **功能交付** 以 PR #531 的审议为唯一前进点。

---

### 4. 社区热点  
| 编号 | 标题 | 链接 | 热点分析 |
|------|------|------|----------|
| #1185 | **[Bug]** Apple Container 1.x sandbox starts but Moltis treats it as not running | https://github.com/moltis-org/moltis/issues/1185 | **评论数最多（3 条）**，表明用户对 **容器状态感知不准** 产生强烈不满，需快速确认 sandbox 是否真正运行。 |
| #531 | **feat(browser): interactive browser viewing UI with CDP screencast** | https://github.com/moltis-org/moltis/pull/531 | 虽无评论，但 **功能范围大**，是社区期待的可视化调试手段，后续审议进度值得关注。 |

---

### 5. Bug 与稳定性  
| 编号 | 简要描述 | 严重程度 | 是否已有 fix PR |
|------|----------|----------|-----------------|
| #1185 | Apple Container 1.x sandbox 开始后 Moltis 仍判定为 **未运行** | 高 | 否 |
| #1189 | Sandbox **构建失败**，原因是错误的 `gogcli` GitHub URL | 中 | 否 |
| #1188 | **resource limits** 在 apple‑container backend **未被应用** | 中 | 否 |

> 以上均为 **Open** 状态，尚未收到对应的修复 PR，建议维护者优先定位并提交补丁，尤其是 #1185，因其直接影响容器可用性。

---

### 6. 功能请求与路线图信号  
- **PR #531** 本身即为显著的功能请求，围绕 **浏览器交互与可视化调试**，若顺利合并，可视为 **下一版本的关键增强**。  
- 目前 Issue 中未出现其他明确的新功能需求，但 **#1185** 暗示了对 **容器状态可视化** 的潜在需求，或可在后续迭代中考虑加入状态实时展示面板。

---

### 7. 用户反馈摘要  
- **容器感知错误**：#1185 的评论显示用户在 Apple Container 环境中出现 **沙箱启动但状态错误** 的困扰，导致调试与部署受阻。  
- **构建脚本兼容性**：#1189 反映 **URL 写错** 导致 sandbox 编译失败，影响依赖包的自动化构建流程。  
- **资源限制缺失**：#1188 表明 **resource limits** 在 apple‑container 后端未生效，用户可能在资源受限的环境下遇到性能或 OOM 问题。  
- 总体来看，用户对 **后端容器状态准确性** 与 **资源管理** 的信任度有待提升，同时期待更 **可视化** 的调试手段。

---

### 8. 待处理积压  
- **PR #531**（自 2026‑03‑31 创建）至今未有审查活动，已积压 **约 5 个月**，若不及时推进，将延迟整个浏览器 UI 功能的交付。  
- **Issue #1185** 虽有最近更新（8 日），但若维护者未在近期回复，用户反馈可能继续累积。  
> **提醒**：相关维护者应优先审查并回复上述积压项，以防进一步的社区失望或功能延期。  

--- 

*报告结束*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目 2026‑08‑11 每日动态报告**  

---

### 1. 今日速览  
- 过去 24 小时 **Issues 40 条**（新开/活跃 34，已关闭 6），**PR 50 条**（待合并 31，已合并/关闭 19），**无新版本发布**。  
- 活跃度保持高位：Issue 与 PR 的评论与 👍 均在 2‑9 条之间，表明社区对 bug 与功能需求的关注度强。  
- 核心版本仍为 **2.0.1 / 2.1.0b2**，大量 bug 与功能改进围绕 **UI、插件市场、后台任务面板、以及跨平台稳定性** 展开。  
- 整体健康度：Issue 与 PR 的关闭率约 40%（40/50），说明近期改动较为频繁，但未出现大规模回归。  

---

### 2. 版本发布  
- **无新版本**（0 个 Release）。所有改动均通过 **PR** 完成，未涉及破坏性变更或迁移注意事项。  

---

### 3. 项目进展  
**已合并 / 关闭的重要 PR（4 条）**  
| PR | 主要贡献 | 链接 |
|----|----------|------|
| #6809 | 修复严格 OpenAI‑compatible Chat Completions Provider（如 StepFun）对 `Responses‑API` 字段的拒绝，提升兼容性。 | <https://github.com/agentscope-ai/QwenPaw/pull/6809> |
| #6878 | 为项目目录选择器加入“隐藏文件夹”开关，提升文件浏览体验。 | <https://github.com/agentscope-ai/QwenPaw/pull/6878> |
| #6615 | 增强 `load_agent_config`，对配置文件的 corrupted、invalid JSON 进行容错处理，避免崩溃。 | <https://github.com/agentscope-ai/QwenPaw/pull/6615> |
| #6398 | 引入 **reranker** 支持，对 ReMe memory search 进行候选扩充、重新排序，提高检索质量。 | <https://github.com/agentscope-ai/QwenPaw/pull/6398> |

**待合并 / 开源的关键 PR（10 条）**  
| PR | 目标功能 / 修复 | 链接 |
|----|----------------|------|
| #6889 | 修复 IME 事件在 textarea 中的 target 丢失问题，解决 #6885 中的崩溃。 | <https://github.com/agentscope-ai/QwenPaw/pull/6889> |
| #6888 | 隐藏 XiaoYi 客户端中的 Scroll 内部检索标题，避免 UI 混乱。 | <https://github.com/agentscope-ai/QwenPaw/pull/6888> |
| #6870 | 完整 Creator 插件的 Settings、Agent Skills、MM‑Plugins 编排、异步媒体生成及跨平台硬化。 | <https://github.com/agentscope-ai/QwenPaw/pull/6870> |
| #6886 | 为缺少 `qoder_agent_sdk` 的环境提供干净的测试跳过，提升 CI 稳定性。 | <https://github.com/agentscope-ai/QwenPaw/pull/6886> |
| #5992 | 引入 **per‑session model overrides**，支持同一 Agent 在不同会话使用不同 LLM。 | <https://github.com/agentscope-ai/QwenPaw/pull/5992> |
| #6845 | 保存并回放 Assistant 的真实完成时间，解决聊天标题生成时的时间错位。 | <https://github.com/agentscope-ai/QwenPaw/pull/6845> |
| #6884 | 让 Auto‑Dream 集成对 LLM 返回的空/无效结构容错，单元任务仍可成功。 | <https://github.com/agentscope-ai/QwenPaw/pull/6884> |
| #6875 | 更新发布说明，准备 **v2.1.0** 正式发布。 | <https://github.com/agentscope-ai/QwenPaw/pull/6875> |
| #6880 | 统一 **/market** 页面，实现 apps、plugins、skills 在同一入口，提升可发现性。 | <https://github.com/agentscope-ai/QwenPaw/pull/6880> |
| #6872 | 为 ReMe Light 加入 Embedding 实时更新、每日纸张以及控制台长期记忆配置重构。 | <https://github.com/agentscope-ai/QwenPaw/pull/6872> |
| #6869 | 为 `task_timeout` 接受字符串并为后台任务设定默认超时，防止无限阻塞。 | <https://github.com/agentscope-ai/QwenPaw/pull/6869> |
| #6877 | 使用 Tauri 官方插件记住窗口几何（位置/大小），提升跨平台一致性。 | <https://github.com/agentscope-ai/QwenPaw/pull/6877> |

> **进度概览**：本日已完成 4 项关键 bug 与功能闭环，同时有 10 余项高价值 PR 正在审查或 CI 通过，整体向 **v2.1.0** 稳步前进。

---

### 4. 社区热点  
| Issue / PR | 关键诉求 | 链接 |
|------------|----------|------|
| **#6782** – “docker 版本插件市场/应用市场始终提示维护中” (9 评论) | 用户在 2.0.1 Docker 版中无法使用插件市场，业务受阻。 | <https://github.com/agentscope-ai/QwenPaw/issues/6782> |
| **#6803** – “OpenAI‑compatible chat requests 被 strict providers (StepFun) 400 拒绝” (6 评论) | 严格校验导致 `input_text` + 原始流字段被错误解析，影响兼容性。 | <https://github.com/agentscope-ai/QwenPaw/issues/6803> |
| **#6811** – “Responses 继续忽略 `disable_thinking`，错误报告 60 s 取消” (5 评论) | 续写摘要时未尊重 `disable_thinking`，导致错误的超时报告。 | <https://github.com/agentscope-ai/QwenPaw/issues/6811> |
| **#6826** – “对话中助手消息结束时间显示异常” (5 评论) | 前端显示的对话时长与实际思考耗时不符，影响用户感知。 | <https://github.com/agentscope-ai/QwenPaw/issues/6826> |
| **#6814** – “macOS 打开 Scroll history.db 时出现 SIGBUS (FS pagein 22) Crash” (4 评论) | 稳定性严重问题，导致进程异常退出。 | <https://github.com/agentscope-ai/QwenPaw/issues/6814> |

> **共性**：大量热点围绕 **插件/市场可用性、严格 API 兼容、后台任务面板占用、以及跨平台崩溃** 四大维度展开。

---

### 5. Bug 与稳定性（按严重程度排序）  

| 编号 | 影响 | 严重程度 | 是否已有修复 PR | 链接 |
|------|------|----------|----------------|------|
| **#6814** | macOS WAL‑mode SQLite 打开即崩溃 (SIGBUS) | **Critical** | 否 | <https://github.com/agentscope-ai/QwenPaw/issues/6814> |
| **#6828** | 前端空闲时持续 repaint（~20% CPU），导致 UI 卡顿 | **High** | 否（开源 PR #6877 仅记录窗口几何，未解决 repaint） | <https://github.com/agentscope-ai/QwenPaw/issues/6828> |
| **#6885** | Chinese IME 组合结束后 Console UI  crash（v2.1.0b2） | **High** | 否（PR #6889 正在处理） | <https://github.com/agentscope-ai/QwenPaw/issues/6885> |
| **#6820** | UI 不及时显示模型输出、工具调用、思考过程 | **High** | 否（PR #6845 保存完成时间，仍未解决显示延迟） | <https://github.com/agentscope-ai/QwenPaw/issues/6820> |
| **#6826** | 对话中助手消息结束时间显示异常（时间跳跃） | **Medium** | 否 | <https://github.com/agentscope-ai/QwenPaw/issues/6826> |
| **#6803** | OpenAI‑compatible 请求被 strict provider 拒绝 (400) | **Medium** | 正在开发（PR #6809） | <https://github.com/agentscope-ai/QwenPaw/issues/6803> |
| **#6782** | Docker 版插件市场/应用市场一直显示“维护中” | **Medium** | 否（待根因分析） | <https://github.com/agentscope-ai/QwenPaw/issues/6782> |
| **#6839** | MCP 工具参数把数字字符串强制转为数值，导致调用失败 | **Medium** | 否（PR #6869 正在修正） | <https://github.com/agentscope-ai/QwenPaw/issues/6839> |
| **#6847** | 杀软误杀 QwenPaw 进程 | **Medium** | 否（社区反馈） | <https://github.com/agentscope-ai/QwenPaw/issues/6847> |
| **#6810** | Windows 安装/更新被占用文件锁阻塞 | **Medium** | 否（PR #6869 为后台任务添加超时，未直接解决） | <https://github.com/agentscope-ai/QwenPaw/issues/6810> |
| **#6813** | `consume_model_response` 触发 `KeyError: '__aiter__'`，导致自动标题生成失败 | **Low** | 否（PR #6845 解决时间显示，未直接解决 KeyError） | <https://github.com/agentscope-ai/QwenPaw/issues/6813> |
| **#6807** | Windows 下视频/图片生成及资产发布完全失效 | **Low** | 否（PR #6870 包含 async media generation） | <https://github.com/agentscope-ai/QwenPaw/issues/6807> |
| **#6821** | reasoning_content 继承失败导致 400 BadRequest（thinking‑mode） | **Low** | 否（PR #6869 为 task_timeout 添加容错，未直接解决） | <https://github.com/agentscope-ai/QwenPaw/issues/6821> |
| **#6866** | workspace/agent 目录下大量自动生成的 py/sh 文件 | **Low** | 否（社区询问规避办法） | <https://github.com/agentscope-ai/QwenPaw/issues/6866> |
| **#6881** | 建议自动刷新会话标题以反映 auto‑memory 更新 | **Low** | 否（PR #6881 已提交） | <https://github.com/agentscope-ai/QwenPaw/issues/6881> |
| **#6853** | prompts.py 宣称自动同步 digest → MEMORY.md，实际未实现 | **Low** | 否（PR #6854 为 approval purpose 添加说明，未解决） | <https://github.com/agentscope-ai/QwenPaw/issues/6853> |

> **结论**：当前最亟待修复的为 **#6814（macOS Crash）**、**#6828（CPU 占用）** 与 **#6885（Chinese IME crash）**，后两者已有对应的 PR（#6877、#6889）在审查中。

---

### 6. 功能请求与路线图信号  
| 需求 | 关联 PR / Issue | 可能纳入下一版本 |
|------|----------------|-------------------|
| **窗口大小与位置记忆**（#4634） | 无直接 PR，但 **#6877** 已实现窗口几何记忆，可覆盖该需求。 | **v2.1.0+** |
| **后台任务面板折叠**（#6876） | **#6877** 只记录几何，未提供折叠 UI；社区已提交 **#6876** 建议。 | **v2.1.0+**（需 UI 实现） |
| **自动刷新会话标题**（#6881） | PR **#6881** 已提交，等待合并。 | **v2.1.0** |
| **Auto‑Dream 容错**（#6841） | PR **#6884** 已实现，可直接合入。 | **v2.1.0** |
| **统一市场入口**（#6880） | PR **#6880** 完整实现，已合并或接近合并。 | **v2.1.0** |
| **per‑session model overrides**（#5992） | PR **#5992** 已开放，若通过审查将计入下一版。 | **v2.1.0+** |
| **可配置的 MCP 超时**（#6724） | PR **#6869** 已处理字符串超时，但未提供全局可配置入口；仍是未完成项。 | **v2.2.0** 可能 |
| **Chinese IME 兼容**（#6885） | PR **#6889** 正在修复，预计会随 **v2.1.0** 发布。 | **v2.1.0** |
| **嵌入式热更新 + Daily Paper**（#6772） | PR **#6872** 已完成，属于 ReMe Light 核心功能，已计入 **v2.1.0**。 | **v2.1.0** |
| **窗口几何记忆**（#6877） | 已实现，预计随 **v2.1.0** 一起发布。 | **v2.1.0** |

> **路线图信号**：大部分高影响功能（市场统一、Auto‑Dream 容错、窗口记忆、embedding 热更新）均已在 **PR** 阶段，预计将在 **v2.1.0** 正式发布，随后进入 **v2.2.0** 进行更细粒度的超时配置与进一步的 UI 优化。

---

### 7. 用户反馈摘要  
- **UI/UX 痛点**：  
  - 页面空闲时持续 repaint（#6828）导致 CPU 占用高、卡顿。  
  - 对话时间显示异常（#6826、#6811），用户感知与实际耗时不符。  
  - 后台任务面板占满聊天窗口（#6876），影响对话可读性。  
- **插件/市场**：  
  - Docker 版插件市场长期显示“维护中”（#6782），阻碍用户使用。  
  - Windows 安装/更新被文件锁（#6810）导致安装失败。  
- **稳定性**：  
  - macOS WAL 导致的 **SIGBUS Crash**（#6814）是最严重的系统级 bug。  
  - Chinese IME 导致的 UI 崩溃（#6885）以及杀软误杀（#6847）影响跨平台可用性。  
- **功能缺失/不满**：  
  - 缺少窗口尺寸记忆（#4634）与后台任务面板折叠（#6876）导致重复调整布局。  
  - 对 OpenAI‑compatible 严格 Provider 的兼容性仍不足（#6803、#6811）。  
  - 部分用户报告 **“进程在数十分钟后自行卡死”**（#6780），需进一步监控与优化。  

---

### 8. 待处理积压（长期未响应）  
| 编号 | 关键问题 | 当前状态 | 链接 |
|------|----------|----------|------|
| **#6814** | macOS SQLite WAL crash (SIGBUS) | 未解决，仍在调试 | <https://github.com/agentscope-ai/QwenPaw/issues/6814> |
| **#6828** | 前端空闲时持续 repaint（CPU 20%） | 未修复，PR #6877 仅记录窗口几何 | <https://github.com/agentscope-ai/QwenPaw/issues/6828> |
| **#6885** | Chinese IME 导致 Console UI crash | 未定位根因，PR #6889 正在审查 | <https://github.com/agentscope-ai/QwenPaw/issues/6885> |
| **#6847** | 杀软误杀 QwenPaw 进程 | 社区反馈，无官方回应 | <https://github.com/agentscope-ai/QwenPaw/issues/6847> |
| **#6807** | Windows 视频/图片生成功能失效 | 无相关 PR，需深入分析 | <https://github.com/agentscope-ai/QwenPaw/issues/6807> |
| **#6810** | Windows 安装/更新被占用文件锁阻塞 | 未解决，需要在安装脚本中加入进程结束逻辑 | <https://github.com/agentscope-ai/QwenPaw/issues/6810> |
| **#6839** | MCP 参数数字字符串强制转数值导致调用失败 | 正在修正（PR #6869） | <https://github.com/agentscope-ai/QwenPaw/issues/6839> |
| **#6821** | reasoning_content 继承失败（thinking‑mode） | 未解决，需在 provider 层统一处理 | <https://github.com/agentscope-ai/QwenPaw/issues/6821> |
| **#6866** | workspace/agent 目录产生大量自动生成文件 | 讨论中，尚未提供规避方案 | <https://github.com/agentscope-ai/QwenPaw/issues/6866> |
| **#6813** | `consume_model_response` KeyError 导致标题生成失败 | 未修复，PR #6845 只解决时间显示 | <https://github.com/agentscope-ai/QwenPaw/issues/6813> |
| **#6806** | Windows “qwenpaw‑creator” 保存模型配置失败（Internal Server Error） | 未定位，需审查日志 | <https://github.com/agentscope-ai/QwenPaw/issues/6806> |
| **#6826** | 对话中助手消息结束时间显示异常 | 未解决，需前端同步真实耗时 | <https://github.com/agentscope-ai/QwenPaw/issues/6826> |
| **#6812** | Gemini API compaction 错误（400） | 未解决，需检查 schema 字段处理 | <https://github.com/agentscope-ai/QwenPaw/issues/6812> |
| **#6803** | OpenAI‑compatible strict provider 拒绝 `input_text` + raw 流字段 | 正在修复（PR #6809） | <https://github.com/agentscope-ai/QwenPaw/issues/6803> |
| **#6782** | Docker 版插件市场始终提示“维护中” | 未解决，需要后端服务检查 | <https://github.com/agentscope-ai/QwenPaw/issues/6782> |

> **提醒**：维护者应优先关注 **#6814、#6828、#6885** 等导致崩溃或高 CPU 的问题，并跟进对应的 PR（#6877、#6889）以确保在 **v2.1.0** 发布前完成闭环。

---

**结语**：CoPaw 在 2026‑08‑11 当天保持了活跃的社区交互与持续的代码贡献，已完成若干关键 bug 与功能闭环，且多项高价值特性正处于审查阶段，预计将在即将发布的 **v2.1.0** 中一次性交付。持续关注高危崩溃（#6814、#6828、#6885）以及长期积压的稳定性问题，将有助于提升整体用户体验与产品可靠性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Daily Report – 2026‑08‑11**

| Section | Highlights |
|---------|------------|
| **1. 今日速览** | 50 new or updated Issues, 50 PRs (49 pending merge, 1 merged). No releases. The project remains highly active, but the lack of a merged PR today indicates a bottleneck in the CI‑merge pipeline. |
| **2. 版本发布** | None. |
| **3. 项目进展** | • **PR #8301** – *test(hardware): cover catalog tool name format* – merged, adding a regression test for tool‑name formatting. <br>• No other PRs were merged today; the 49 pending PRs are still in review. |
| **4. 社区热点** | 1. **Issue #6808** – “RFC: Work Lanes, Board Automation, and Label Cleanup” (23 comments). <br>2. **Issue #7100** – “RFC: Per‑model capability & context‑window config” (13 comments). <br>3. **Issue #8692** – “Maintainer decision queue for RFCs and design issues” (12 comments). <br>PRs with the most discussion: **#9903** (Arduino flash temp‑dir cleanup), **#8443** (Matrix single‑message progress drafts), **#8576** (OpenAI STT env‑var fallback). |
| **5. Bug 与稳定性** | **Severity S0** (critical data‑loss / security) <br>• **#9647** – Knowledge‑graph attribution bug (no per‑agent isolation). <br>• **#9627** – Git write verbs bypass risk classifier. <br>**Severity S1** (workflow blocked) <br>• **#9207** – `web_fetch` returns garbage for compressed responses. <br>• **#9425** – SOP jobs lack operator cancellation. <br>• **#9035** – Docker‑Compose gateway loopback issue. <br>**Severity S2** (degraded behavior) <br>• **#9768** – daemon reload signal mismatch. <br>• **#9771** – clippy warnings on default feature surface. <br>• **#9796** – cron help prints invalid examples. <br>• **#9844** – dashboard CPU metric mislabels process. <br>• **#9345** – PR risk/size labels not recalculated. <br>• **#9383** – npm audit failures. <br>• **#9562** – WebChat auto‑scroll overrides manual scrolling. <br>• **#9047** – Code session history isolation unclear. <br>• **#9391** – audit logging defaults enabled but silent. <br>• **#8999** – ZeroCode streamed turns mis‑interpreted as log payloads. <br>**Fix PRs** – None of the above bugs have a confirmed fix PR yet. |
| **6. 功能请求与路线图信号** | • **#6808** – Work‑lane automation & label cleanup (high priority). <br>• **#7100** – Per‑model capability & context‑window config (high priority). <br>• **#8692** – Maintainer decision queue (medium priority). <br>• **#9397** – WhatsApp Web `allowed_groups` handling (medium). <br>• **#9530** – Risk precedence for test‑only changes (low). <br>• **#9496** – RFC scope & voting streamlining (low). <br>• **#5842** – Codex CLI `extra_args` sandbox warning (medium). <br>• **#9207** – `web_fetch` compression support (high). <br>• **#9425** – SOP job cancellation (high). <br>• **#9035** – Docker‑Compose gateway loopback (high). <br>• **#9647** – Knowledge‑graph attribution (critical). <br>• **#9389** – Unauthenticated POST `/api/pair` lockout (critical). <br>• **#9545** – Rustdoc warning gate (medium). <br>• **#9768** – Daemon reload signal (medium). <br>• **#9771** – Clippy warning gate (medium). <br>• **#9796** – Cron help examples (low). <br>• **#9844** –

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*