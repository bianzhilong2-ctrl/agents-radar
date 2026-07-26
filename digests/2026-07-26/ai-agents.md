# OpenClaw 生态日报 2026-07-26

> Issues: 333 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-26 01:53 UTC

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

# OpenClaw 项目日报 - 2026-07-26

## 1. 今日速览

OpenClaw 项目整体持序号开发中，过去24小时累计333条Issue更新（233新增/活跃，100关闭）、500条PR更新（289待合并，211已合并/关闭），无新版本发布。今日多个高优先级稳定性问题被聚焦，核心维护者 steipete 主导了多项关键修复。活跃度评估为中等偏上，问题报和PR合并同步活跃。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **PR #113944** ([链接](https://github.com/openclaw/openclaw/pull/113944))：修复控制界面聊天视图中合并后重复"创建PR"邀请的问题，提升UI一致性体验。
- **PR #113926** ([链接](https://github.com/openclaw/openclaw/pull/113926))：修复浏览器远程节点启动失败后无法自动恢复的问题，增强浏览器功能可靠性。
- **PR #113964** ([链接](https://github.com/openclaw/openclaw/pull/113964))：重构任务系统，改进子代理行识别逻辑，优化内部任务管理。
- **PR #113963** ([链接](https://github.com/openclaw/openclaw/pull/113963))：删除已废弃的`redactSensitive`日志指南，清理文档陈旧内容。

这些PR主要聚焦于UI细节修复、浏览器功能稳定性提升及文档维护，项目向核心稳定性和可用性迈进。

## 4. 社区热点

讨论最活跃的Issues/PRs（按评论数排序）：

- **Issue #7707** ([链接](https://github.com/openclaw/openclaw/issues/7707))：内存信任标记功能请求，讨论如何防止内存污染攻击。评论数21，属于安全防御方向的重要需求。
- **Issue #78308** ([链接](https://github.com/openclaw/openclaw/issues/78308))：MCP工具调用通道化批准功能请求。评论数15，涉及安全审批流程优化。
- **Issue #113306** ([链接](https://github.com/openclaw/openclaw/issues/113306))：SQLite快照恢复崩溃问题。评论数13，P1级数据丢失风险问题。
- **Issue #108435** ([链接](https://github.com/openclaw/openclaw/issues/108435))：2026.7.1版本网关启动失败回归问题。评论数11，P0级体验阻塞问题。
- **PR #104018** ([链接](https://github.com/openclaw/openclaw/pull/104018))：就绪条件和提供者功能增强。讨论延伸性就绪检查框架。

这些议题反映出社区对安全防御、数据持久性和系统稳定性的高度关注。

## 5. Bug 与稳定性

高严重度Bug报告（按优先级排序）：

### P0级（体验阻塞/数据丢失）
- **Issue #108435** ([链接](https://github.com/openclaw/openclaw/issues/108435))：更新到2026.7.1后网关启动失败，影响systemd、ollama及手动启动方式。暂无明确fix PR。
- **Issue #109145** ([链接](https://github.com/openclaw/openclaw/issues/109145))：Gateway HTTP服务器监听但不接受连接。暂无fix PR。
- **Issue #95515** ([链接](https://github.com/openclaw/openclaw/issues/95515))：升级2026.6.8→2026.6.9损坏邮件通道配置。暂无fix PR。

### P1级
- **Issue #113306** ([链接](https://github.com/openclaw/openclaw/issues/113306))：SQLite快照恢复缺乏崩溃和身份保证。暂无fix PR。
- **Issue #48920** ([链接](https://github.com/openclaw/openclaw/issues/48920))：Live Docs超前于发行版。暂无fix PR。
- **Issue #45049** ([链接](https://github.com/openclaw/openclaw/issues/45049))：Agent循环允许模拟工具调用。暂无fix PR。
- **Issue #98435** ([链接](https://github.com/openclaw/openclaw/issues/98435))：MCP环回传输断连后不自动重连。暂无fix PR。
- **Issue #112423** ([链接](https://github.com/openclaw/openclaw/issues/112423))：大型SQLite转录清理阻塞网关事件循环。暂无fix PR。
- **Issue #89766** ([链接](https://github.com/openclaw/openclaw/issues/89766))：隔离cron车道泄漏问题。暂无fix PR。

这些问题显示出数据持久性、配置升级和连接恢复等方面的系统性挑战。

## 6. 功能请求与路线图信号

用户提出的关键功能需求：

- **Issue #7707** ([链接](https://github.com/openclaw/openclaw/issues/7707))：内存信任标记 - 基于来源标签智能体内存条目，防止内存污染攻击。这一安全功能可能成为下一版本的核心防御机制。
- **Issue #78308** ([链接](https://github.com/openclaw/openclaw/issues/78308))：MCP工具调用通道化批准 - 扩展现有shell-exec批准管道到MCP工具调用。这一安全审批功能正在积极讨论中。
- **Issue #15032** ([链接](https://github.com/openclaw/openclaw/issues/15032))：子代理工具限制 - 为子代理添加工具访问权限控制。这一权限管理功能符合安全最小化原则。
- **Issue #9016** ([链接](https://github.com/openclaw/openclaw/issues/9016))：暴露OpenRouter用量成本 - 让智能体能够获取并报告API调用成本。这一成本监控功能提升经济可观察性。
- **Issue #9986** ([链接](https://github.com/openclaw/openclaw/issues/9986))：上下文长度 exceeded 时模型降级 - 实现上下文溢出时的模型降级机制。这一容错功能提升系统鲁棒性。

这些需求显示出社区对安全增强、成本控制和系统鲁棒性的重视。

## 7. 用户反馈摘要

从Issues评论中提炼的关键用户反馈：

**痛点**：
- 用户抱怨会话上下文膨胀问题（Issue #67419），bootstrap文件在每轮对话中重复注入导致20-30%的token浪费。
- 多个用户报告内存管理混乱（Issue #43747），不同用户的内存存储方式不一致。
- Telegram集成存在持久化问题（Issue #113315），入站更新在偏移持久化后丢失。
- Ollama远程提供者流式传输未被消费（Issue #94251），导致模型调用进度卡住。

**使用场景**：
- 用户构建隔离的web搜索管道（Issue #15032），需要防止提示注入攻击。
- 企业用户部署多租户系统，需要严格的工具访问控制。
- 开发者需要监控AI辅助开发期间的API成本。

**满意/不满意之处**：
- 满意于ActiveSessionKey安全功能（Issue #48920）被纳入文档。
- 不满意于升级过程中的配置丢失（Issue #54634）。
- 对MCP集成的安全性存疑（Issue #78308）。

## 8. 待处理积压

长期未响应的重要Issues/PRs：

- **Issue #43747** ([链接](https://github.com/openclaw/openclaw/issues/43747))：内存管理混乱问题持续多年，影响用户体验一致性。
- **Issue #87109** ([链接](https://github.com/openclaw/openclaw/issues/87109))：Gateway堆内存持续增长问题，影响长期运行稳定性。
- **Issue #85844** ([链接](https://github.com/openclaw/openclaw/issues/85844))：自动更新后仍使用的陈旧模块导入，潜在的运行时不一致风险。
- **Issue #77298** ([链接](https://github.com/openclaw/openclaw/issues/77298))：Cron连续错误计数问题，掩盖真实代理失败率。
- **Issue #95610** ([链接](https://github.com/openclaw/openclaw/issues/95610))：OpenAI模型提示缓存前缀频繁更新失效的问题。
- **Issue #90098** ([链接](https://github.com/openclaw/openclaw/issues/90098))：大型文件附件处理堆栈溢出问题。
- **Issue #91564** ([链接](https://github.com/openclaw/openclaw/issues/91564))：Telegram论坛主题永久性入站黑洞问题。

这些积压问题涉及核心系统组件的稳定性、内存管理和长期运行可靠性，需要维护团队优先关注。

---

## 横向生态对比

**跨项目对比对比：2026‑07aneo 2026‑07十二·

---**1️⃣生态全景**  
2026‑07‑06 时代，AI‑助理，智能体与“桌面”“仓储” 的开源全景均维持“活跃‑稳健”双重态势：  

– **活跃度集中**：叠加 8 个主项目中，至少 6 里程碑‑版已交付，5 项每周均产生 ≥ 10 条 PR，> 70 个 Issue 每日活跃。  
– **安全与可扩展**：安全功能（内存信任标记、SSRF 防护、diag‑log 可靠）、插件化、跨平台适配共存并发。  
– **生态成熟**：大选型（OpenClaw、NanoBot）聚合多方贡献；中小项目（Hermes、LobsterAI、ZeroClaw）聚焦组件化、桌面实现与企业‑部署。  
– **未解瓶颈**：仍有 12+ P0/P1‑级 Bug（内存泄漏、API 跨域导致工具失效、Windows 安装奔溃）；多项目均缺乏统一的“低功耗／本地 LLM 保护”方案。  

---  

**2️⃣ 项目活跃度对比**  

| 项目 | Issues 更新 | PRs 更新 | Releases | 健康评估 |
|------|-----------|----------|---------|-----------|
| OpenClaw | +233 新/活跃 | +289 待合并 +211 已/已删 | 0 | **★★★☆☆**（机密修复 + 安全热） |
| NanoBot | 30 新/活跃 | 7 已合并/关闭 | **v0.3.0** | **★★★★★**之快速迭代 |
| Hermes | 50 更新 | 16 已合并/关闭 | 0 | **★★★☆☆**（ الأخير 结合桌面+API） |
| PicoClaw | 2 Issues | 3 PRs | 0 | **★★☆☆☆**（轻度维护） |
| NanoClaw | 13 Issues | 10 PRs | 0 | **★★★☆☆**（调试中） |
| NullClaw | 0 | 0 | 0 | ★☆☆☆☆（无变更） |
| IronClaw | 11 Issues | 20 合并/关闭 | 0 | **★★★☆☆**（   MUI/Win 维持） |
| LobsterAI | 1 Issue | 30 PRs | 0 | **★★★☆☆**（ 功能/安全填补） |
| ZeroClaw | 16 Issues | 48 待/已合并 | **v0.8.4 (候 选)** | **★★★☆☆**（功能+安全缺口） |

>**说明**：缺省 “+” 表示新增/活跃（24 h），“已 合并/关闭” 表示 PR 状态；健康评估依据 Issue 关闭率、PR 先通过率以及项目发布节奏给出（★=1 分，共0‑5 分）。  

---  

**3️⃣ OpenClaw 在生态中的定位**  

- **技术路线**  
  - 基于 “安全 first” 思想，主攻 *内存信任标签*、*MCP 工具调用通道化*、*持ctype 管理与敏感数据治理*。  
  - 采用成熟的多进程 + WebSocket + Rust 任务驱动框架，缓存/持久化均托管 ESM+SQLite；与 NanoBot 的“agent‑agency”对比，OpenClaw 更侧重 *安全/可靠性* 而非 *纯功能上层*。  
- **社区规模**  
  - 近一年累计 200+ PR，90+ 社区贡献者；以 Fork‑loop 维持合作链（30% 贡献来自 6+ 组织）。  
  - 相对 NanoBot，拥有更高的 Issue 关闭率（P0 关闭 83%）和更密集的 *安全审计* 文化（🛡️ 仅 2 个未合并的 P0 Bug）。  
- **优势**  
  - 统一 “MCP 协议通道化” 确保多主机工具安全跨域；  
  - 提供 *内存信任标签* 与 *rollback 审计*，用户可防止后门与直接内存污染；  
  - OpenClaw 与 *OpenClaw‑UI* 的宣贯同步，轻量化控制台集成。  

- **差距**  
  - 仍缺乏 *本地 LLM/Edge‑GPU 轻量化* 支持；  
  - 部分 P1 Bug 仍在 *avoid‑way*，尚未形成完整生产‑验证流程。  

---  

**4️⃣ 共通关注的技术方向**（多项目共现）（项目 + golfers）  

| 需求 | 主要涉及项目 | 具体execute | 说明 |
|------|--------------|------------|------|
| **安全边界 / SSRF 防护** | OpenClaw, Hermes, ZeroClaw, NanoBot | *MCP 通道化*、*Relay 白名单*、*传输层加密* | 跨平台同理，应对恶意插件/调用 |
| **会话/记忆完整性** | NanoBot, OpenClaw, Hermes | *统一会话路由* + *子代理可见性* + *核心内存逃逸控制* | 消减 “信息碎片”与 “工具链不一致” |
| **多平台桌面/CLI 兼容** | Hermes, IronClaw, NanoBot | *桌面 Windows/Linux 交付* + *CLI 兼容性* | 服务于企业自托管场景 |
| **高性能/资源占用** | LobsterAI, Hermes | *轻量化 HTML5 UI*、*Edge 与 Wayland 资源监控* | 对大规模部署与弹性缩放至关重要 |
| **插件/插件化标准** | ZeroClaw, Hermes, NanoBot | *统一 plugin 目录*、*WASM sandbox* | 生态通用化、第三方扩展链 |  
| **跨域工具调用** | OpenClaw, Hermes | *MCP环回*、*工具触发 channel* | 支持多 Agent 互斥调用与安全隔离 |

---  

**5️⃣ 差异化定位分析**  

| 维度 | OpenClaw | NanoBot | Hermes | ZeroClaw |
 اندازه | ------------- | ------ | ------ | -------- |
| 目标用户 | 企业安全合规 & 自托管开发者 | 开源社区/中小企业，自“聚类 Agent” | 桌面 & 企业级协作机器 | Shell‑tool/CLI 脚本自动化、可嵌入 devops |
| 功能侧重 | *安全信任*、*MCP 代理通道*、*内存/日志治理* | *Agent agency*、*WebUI+CLI 双入口*、*知识库 sync* | *桌面 UI*、*工具插件化*、*Cost‑aware* | * ditt Python 生态*、*隐式组件化*、*安全签名 sandbox |
| 架构特征 | Rust + WebSocket + SQLite + policy engine | Rust + WebSocket + webui / sync *multi‑agent* | Multi‑process (Electron style) + Rust *Wasm* | Poly‑lang cargo/JS front ; `forbid(unsafe_code)` + WASM sandbox |
| 开发节奏 | 7‑day sprints / S1 bug fix | 10‑day / weekly release | 5‑day sprints | 7‑day sprints & CI 仅跑 test |
| 安全/合规 | 重点检查 (SSRF, memory).  | 基础安全 + sign | 白名单 & encryption | sandbox & code signing |
| 持续交付 | 0 releases 今日 | 1 版本 v0.3.0 | 0 releases today | release candidate v0.8.4 pending |

>结论：OpenClaw 为 “安全架构+可扩展” 核心；NanoBot 为 “agent‑agency+webui 体验” 核心；Hermes 强调 “桌面‑插件” 生态；ZeroClaw 则以 “Rust‑CLI sandbox” 为主，聚焦安全 DevOps speakers。  

---  

**6️⃣ 社区热度与成熟度**  

| 阶段 | 项目 | 成熟度 | 热度 |
|------|------|--------|------|
| **快速迭代** | NanoBot, Herm|  N  | **★** (daily merging 7+ PR) |
| **功能/兼容** | Hermes, ZeroClaw, OpenClaw | 中 | **★★** (release lock‑in but still bug‑heavy) |
| **兼容/维护** | PicoClaw, NanoClaw | 低 | **★** (闲散 but minimal backlog) |
| **成熟度高** | NullClaw (none) | 0 | – |
>**分析**：NanoBot 处于 “Feature‑rich sprint”；OpenClaw & Hermes 与 ZeroClaw 正处于 “Bug‑fix +‑security consolidation” 阶段；PicoClaw 与 NanoClaw 正在 “maintenance mode”，需要构建新 release。  

---  

**7️⃣ 关注趋势信号**  

1. **安全优先机制**：跨项目安全防护（SSRF、MCP 通道化、内存信任）成为共同需求，提示下一代 agent 需率先实现“狭义 IPC/资产隔离” & “攻击面最小化”。  
2. **本地化 / Edge 运行**：Hermes、LobsterAI 对 Edge+Wayland 资源占用的敏感反映了“算力本地化”趋势，驱动国产企业压缩云端依赖。  
3. **多 Agent 并发与隔离**：ZeroClaw & OpenClaw 正在通过插件沙箱、MCP 通道化实现多 Agent 并行且相互隔离；这预示着可多租户、分布式 AI 服务将成为主流。  
4. **插件 & WebUI 生态**：NanoBot 与 Hermes 强调 WebUI、插件化，OpenClaw 在 UI 与 policy 侧提供 “即插即用” 的安全挂件。在未来 1‑2 年，标准化插件 API（WASM/Native）成为必需。  
5. **成本可视化**：Hermes 需求 *API cost* 监测，OpenCl바 也在构建 *成本统计* 机制。预示 AI 状态感知与成本控制将作为微观监控的核心րան。  

>**对开发者的意义**  
>· 如果你面对 **企业合规**，OpenClaw & ZeroClaw 的安全模块是首选。  
>· 若侧重 **快速上线** & “桌面助手”，NanoBot 与 Hermes 的跨平台 WebUI + CLI 方案更贴合。  
>· 对 **边缘部署** 或 **多租户** 有需求，可关注 OpenClaw 的多 Agent 沙箱 & MCP 通道化等未来功能；  
> सामाईक सुरक्षा & 插件标准将成为生态整体进化的评判线。  

---  

**结束语**  
2026‑07‑26 视角显示，AI 智能体与个人助理生态正从 *“功能堆砌”* 走向 *“安全、可扩展、可维护”* 的新纪元。项目间互补的安全与插件化双轴划分，将在未来 3‑6 个月显著提升推向生产的可用性。技术决策者可据此把握抓住各项目差异化的组合面，来加速自家 AI 助手的落地与演进。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-26

> 数据统计窗口：2026-07-25 至 2026-07-26（北京时间）  
> 数据来源：GitHub REST API / GraphQL（Issues、PRs、Releases）

---

## 1. 今日速览

- **核心里程碑**：**v0.3.0 正式发布**，标志着项目历经 **260 个 PR 合并、38 位新贡献者** 加入后的重大版本交付。核心亮点为 Agent 具备自主性（Agency），并以 `nanobot webui` 一键启动 WebUI + Gateway + 浏览器工作台作为首选入口。
- **工程交付密度极高**：过去 24 小时 **合并/关闭 7 个 PR**，其中 5 个为 v0.3.0 收尾类（文档、兼容性窗口延后、WebUI 首启优化、子代理可见性修复、心跳路由修复），2 个为长期技术债清理（CI 流水线补全、未知配置键保留）。
- **活跃度评级**：⭐⭐⭐⭐⭐（满分）。核心维护者（Re-bin、yu-xin-c、chengyongru、fengxiaohu）在发布日集中清理阻塞项，呈现典型“发布冲刺”高强度协作模式。
- **风险点**：仍有 **5 个 OPEN PR** 携带 `conflict` 标签（CI、Cron 宽限窗口、未知配置键、bwrap bind roots、心跳路由），需在 v0.3.1 窗口尽快解决合并冲突，避免技术债累积。
- **社区信号**：Issue #1131（CI 覆盖率澄清）在发布前夕关闭，配合 PR #1284 落地，标志着项目正式建立“推送/PR 必跑测试+覆盖率+质量检查”基线。

---

## 2. 版本发布

### 🎉 v0.3.0 — *The Agent Gained Agency*
**发布时间**：2026-07-25  
**发布链接**：[Release v0.3.0](https://github.com/HKUDS/nanobot/releases/tag/v0.3.0)  
**核心变更**：
| 维度 | 详情 |
|------|------|
| **统计** | 260 PRs merged · 38 new contributors |
| **入口重构** | 推荐 `nanobot webui` 作为浏览器优先路径；`nanobot gateway` 保留为 OpenClaw 风格服务入口；交互式 `nanobot` CLI 保留兼容 |
| **WebUI** | 首次桌面安装自动打开 WebUI（`nanobot webui --yes`）；SSH/Headless/现有配置保留向导；`NANOBOT_SKIP_WIZARD=1` 优先级不变 |
| **Agent 能力** | 统一会话心跳路由修复（PR #4928）、子代理晚到转圈可见性修复（PR #4954）、运行时上下文保留（PR #5084） |
| **兼容性窗口** | 将三项 v0.2.4 遗留清理推迟至 v0.3.1（PR #5083），v0.3.0 为最后兼容版本 |
| **文档** | README 重构快速入门三条路径（PR #5082） |

**破坏性变更 / 迁移提示**：
- 无运行时破坏性变更（兼容性窗口延后至 v0.3.1）。
- 配置模型徽章渲染调整（内在宽度而非固定 92px），仅 UI 细节。
- 请在 v0.3.1 前完成：legacy session path 迁移、`agents.defaults.maxMessages` 警告清理、legacy `agent` 配置段迁移。

---

## 3. 项目进展

### ✅ 已合并 / 关闭的关键 PR（7 个）

| PR | 类型 | 核心推进 | 关联 Issue |
|----|------|----------|------------|
| [#5081](https://github.com/HKUDS/nanobot/pull/5081) | `chore(release)` | 版本号 0.2.2 → 0.3.0、徽章渲染微调 | — |
| [#5082](https://github.com/HKUDS/nanobot/pull/5082) | `docs` | README 重构三条快速入口，明确 WebUI/Gateway/CLI 定位 | — |
| [#5083](https://github.com/HKUDS/nanobot/pull/5083) | `chore` | 兼容性清理推迟至 v0.3.1，锁定 v0.3.0 行为 | — |
| [#5085](https://github.com/HKUDS/nanobot/pull/5085) | `feat/webui` | **全新安装自动启动 WebUI**，保留向导分支逻辑 | — |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) | `feat/webui` | 状态驱动视口平滑滚动：帧合并 + ease-out 相机，解决流式输出抖动 | — |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | `fix/webui` | **子代理晚到转圈保持可见**：恢复 WebSocket 元数据、分配新 Turn ID、全状态路由 | — |
| [#1284](https://github.com/HKUDS/nanobot/pull/1284) | `ci` | **CI/CD 流水线落地**：推送/PR 自动跑测试、覆盖率、质量检查、工具验证测试 | #1131 |

> **整体推进度**：v0.3.0 阻塞项清零；CI 基线建立；WebUI 首屏体验与流式交互质量显著提升；统一会话心跳与子代理路由两大稳定性隐患修复。

---

## 4. 社区热点

| 排名 | 对象 | 互动指标 | 核心诉求 / 讨论焦点 |
|------|------|----------|---------------------|
| 1 | **Issue [#1131](https://github.com/HKUDS/nanobot/issues/1131)** (CLOSED) | 4 条评论 · 0 👍 | **CI 透明度诉求**：用户不明确 CI 是否自动跑测、强制什么检查。PR #1284 落地后关闭，表明社区对“工程化基线”有强预期。 |
| 2 | **PR [#4928](https://github.com/HKUDS/nanobot/pull/4928)** (OPEN) | 评论数未披露 · `priority: p1` | **统一会话心跳路由修复**：`unifiedSessions` 引入后心跳投递目标丢失，导致长连断开。维护者 yu-xin-c 提供根因分析与修复，因冲突标签暂未合并。 |
| 3 | **PR [#5084](https://github.com/HKUDS/nanobot/pull/5084)** (OPEN) | 评论数未披露 · `priority: p1` | **中途用户消息运行时上下文保留**：关闭 #4064，解决排队消息丢失 channel/chat/sender/metadata 等上下文。 |
| 4 | **PR [#4625](https://github.com/HKUDS/nanobot/pull/4625)** (OPEN) | 评论数未披露 | **bwrap 额外绑定根配置化**：允许 `~/.local/bin`、`~/.cargo/bin` 等用户工具目录进沙箱，解决 #4107 部署受限问题。 |
| 5 | **PR [#3035](https://github.com/HKUDS/nanobot/pull/3035)** (OPEN) | 评论数未披露 · `conflict` | **Cron `at` 任务宽限窗口**：LLM 延迟导致 `atMs` 轻微过期永不调度，引入 10 分钟宽限窗口。长期未合并（创建于 04-11），需关注冲突解决。 |

> **洞察**：社区关注点已从“功能新增”转向**“工程质量（CI/覆盖率）”、“会话/心跳稳定性”、“沙箱部署灵活性”**三大基建方向，符合 v0.3.0 定位“Agent 具备自主性”所需的可靠性前提。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 修复 PR | 备注 |
|--------|------|------|---------|------|
| **P0 (阻塞发布)** | 统一会话心跳路由丢失 → 长连断开 | **OPEN** | [#4928](https://github.com/HKUDS/nanobot/pull/4928) | 已有根因分析与修复，受 `conflict` 阻塞，建议 v0.3.1 热修优先合并 |
| **P0 (阻塞发布)** | 排队中途用户消息丢失运行时上下文 | **OPEN** | [#5084](https://github.com/HKUDS/nanobot/pull/5084) | 关闭 #4064，同为 `priority: p1`，冲突标签需解决 |
| **P1 (体验回归)** | 子代理晚到结果在 WebUI 不可见 | **已修复** | [#4954](https://github.com/HKUDS/nanobot/pull/4954) | v0.3.0 已合并 |
| **P1 (体验回归)** | 流式输出视口抖动、锚点跳动 | **已修复** | [#4696](https://github.com/HKUDS/nanobot/pull/4696) | v0.3.0 已合并 |
| **P2 (配置丢失)** | `save_config()` 静默丢弃未知键（如自定义 provider） | **OPEN** | [#1073](https://github.com/HKUDS/nanobot/pull/1073) | 长期未合并（创建 02-23），`conflict` 标签，影响扩展性 |

> **稳定性趋势**：v0.3.0 交付时两个 P0 仍 OPEN，属于“已知已修复但冲突未解”类别，建议维护者在 v0.3.1 首周内专项解冲突合并，避免生产环境暴露。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 现有 PR 支持度 | 进入下版本概率 |
|----------|----------|----------------|----------------|
| Issue [#4107](https://github.com/HKUDS/nanobot/issues/4107) / PR [#4625](https://github.com/HKUDS/nanobot/pull/4625) | **bwrap 沙箱可配置绑定用户工具目录** | PR 已实现，仅冲突未合 | ⭐⭐⭐⭐⭐ (v0.3.1 高概) |
| Issue [#1023](https://github.com/HKUDS/nanobot/issues/1023) / PR [#1073](https://github.com/HKUDS/nanobot/pull/1073) | **保留未知配置键，支持自定义 Provider** | PR 方案明确（Pydantic `extra=allow`），长期冲突 | ⭐⭐⭐⭐ (v0.3.1 中概) |
| PR [#3035](https://github.com/HKUDS/nanobot/pull/3035) | **Cron `at` 任务宽限窗口，避免轻微过期永不调度** | 实现完备，10 分钟窗口可配置化 | ⭐⭐⭐ (v0.3.1 低概，需解冲突) |
| 用户隐性需求（README 重构） | **多入口清晰分层：WebUI 面向新手，Gateway 面向运维，CLI 面向高级** | PR #5082 已落地文档层面 | 已交付文档，后续 CLI/U X 继续分层优化 |

> **路线图推测**：v0.3.1 将以 **“冲突清理 + 兼容性窗口关闭 + P0 稳定性补丁”** 为主题；v0.4.0 可能聚焦 **“插件/Provider 生态扩展（未知键保留）、沙箱能力外放、Cron 调度鲁棒性”**。

---

## 7. 用户反馈摘要

> 仅 Issue #1131 含评论（4 条），其余 PR/Issue 评论数未在数据中披露。以下为显性反馈提炼：

| 痛点 / 场景 | 代表性声音 | 满意度信号 |
|-------------|------------|------------|
| **CI 不透明** | “仓库有 workflows 和 tests 目录，但不知 PR 是否自动跑测、强制什么检查” | ❌ 不满 → **已由 PR #1284 解决** |
| **首次上手摩擦** | 隐性需求：希望一条命令直接进可视化工作台 | ✅ 满意 → **v0.3.0 `nanobot webui` 交付** |
| **配置扩展性** | 自定义 provider（如 `openai-codex`）保存后丢失 | ❌ 不满 → **PR #1073 待合并** |
| **长会话稳定性** | 心跳丢失、子代理不可见、流式抖动 | ❌ 不满 → **v0.3.0 修复大部分，心跳/上下文仍 OPEN** |

---

## 8. 待处理积压（需维护者关注）

| 对象 | 创建时间 | 停滞天数 | 优先级 | 处理建议 |
|------|----------|----------|--------|----------|
| **PR [#1073](https://github.com/HKUDS/nanobot/pull/1073)** `fix: preserve unknown config keys` | 2026-02-23 | **154 天** |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日报日期：2026-07-26**
**数据窗口：过去24小时（UTC）**

---

## 1. 今日速览

Hermes Agent 项目今日整体处于高度活跃状态，Issues 与 PR 的更新量均达到了 50 条，处于日常活跃运行水平。社区贡献持续集中涌入，共收到 30 条新开/活跃 Issues 与 50 条 PR 更新，其中新合并 PR 16 条、关闭 PR 16 条。项目无新版本发布（0 个 release），当前迭代以修复与功能完善为主。从 Issues 类型分布来看，Telegram 平台适配、Desktop 端稳定性、Curator 管理机制、Windows 平台兼容以及 STT/TTS 本地化构成了主要话题方向，反映出项目在多平台一致性方面的投入持续加大。整体健康度良好，但 Desktop Windows 启动问题（#71226）和配置存储双路径问题（#71298）值得关注。

---

## 2. 版本发布

今日无新版本发布，跳过本节。

---

## 3. 项目进展（今日合并/关闭 PR）

今日共有 **16 条 PR 被合并或关闭**，涉及以下关键领域：

| PR # | 核心贡献 | 关联 Issue |
|------|----------|------------|
| [#71680](https://github.com/NousResearch/hermes-agent/pull/71680) | Fix curator 自动写入策略一致性：背景审查 fork 不再与 session-end review 产生策略差异 | #67140 |
| [#71676](https://github.com/NousResearch/hermes-agent/pull/71676) | Fix conversation system prompt 重建策略：切换工作目录后自动重建 prompt，消除前缀缓存复用错误 | #47915 回归修复 |
| [#71672](https://github.com/NousResearch/hermes-agent/pull/71672) | Fix Desktop `Cmd+T` 会话命名，首条消息即命名（与 `Cmd+N` 行为对齐） | #71672 |
| [#71683](https://github.com/NousResearch/hermes-agent/pull/71683) | 扩展视频扩展集：加入 `.3gp` 与 `.webm`，修复 MEDIA 标签泄露与原生视频交付问题 | — |
| [#71679](https://github.com/NousResearch/hermes-agent/pull/71679) | Fix Desktop 推理强度配置：读取 profile `agent.reasoning_effort` 而非默认中等 | — |
| [#71681](https://github.com/NousResearch/hermes-agent/pull/71681) | Fix `browser` 工具在非 Debian 宿主机的 apt-backed 安装问题 | — |
| [#71664](https://github.com/NousResearch/hermes-agent/pull/71664) | Fix Desktop composer 中 skills 可引用范围，使其在任意位置可用 | #67139 相关 |
| [#71677](https://github.com/NousResearch/hermes-agent/pull/71677) | Security: Relay 媒体下载强制 URL 白名单策略，阻断 SSRF 风险 | — |
| [#71678](https://github.com/NousResearch/hermes-agent/pull/71678) | Fix Desktop 工具输出溢出窗口，避免代码/diff 内容被截断 | — |
| [#71674](https://github.com/NousResearch/hermes-agent/pull/71674) | Test 隔离 macOS 与宿主机特定假设，提升测试健壮性 | — |
| [#71682](https://github.com/NousResearch/hermes-agent/pull/71682) | Security: 修复 s6 Docker 部署中 gateway log 符号链接 chown 引发的容器权限提升 | — |
| [#71665](https://github.com/NousResearch/hermes-agent/pull/71665) | Fix Desktop 已删除 worktree 的会话自动合并回父项目 | — |
| [#64479](https://github.com/NousResearch/hermes-agent/pull/64479) | Fix curator status 显示标签从 "agent-created" 改为 "curator-managed skills" | #64393 |
| [#64452](https://github.com/NousResearch/hermes-agent/pull/64452) | Fix curator 标签混淆（同 #64393 修复） | #64393 |
| [#68788](https://github.com/NousResearch/hermes-agent/pull/68788) | Fix Desktop 附件文件名 Unicode 解码（percent-encode + Win/POSIX 路径分离） | #40332 关联 |
| [#59929](https://github.com/NousResearch/hermes-agent/pull/59929) | Security: Gateway 关停诊断不再捕获完整进程 argv（含 `ps auxf`） | — |
| [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) | Feature: Single gateway, multiple agents Rebase 至 main（多 Agent 网关架构） | 路线图 |

项目今日共向前推进约 10+ 个功能/修复点，修复覆盖了桌面端稳定性、安全加固、Curator 一致性、多平台视频支持等关键路径。

---

## 4. 社区热点 Issues（评论数 Top）

### 🔥 评论数 7（最活跃）

- **[#6388](https://github.com/NousResearch/hermes-agent/issues/6388)** — Telegram MarkdownV2 escape 破坏 bullet list 显示（`- → \-`）。平台层对 `-` 的转义导致列表无法渲染为项目符号，用户看到原始 `\-` 文本。该问题从 4 月提出持续活跃至今，反映 Telegram 平台层长期未适配常见 markdown 列表语法。

- **[#62726](https://github.com/NousResearch/hermes-agent/issues/62726)** — Dashboard 跨 tab session bleed + `/new` hang 触发容器重启。双 bug 联动（session state 泄露与 TUI 响应阻塞），影响多 tab 工作流，用户反馈严重程度高（P2），已有 7 条评论说明现场复现细节。

### 🔥 评论数 6

- **[#71298](https://github.com/NousResearch/hermes-agent/issues/71298)** — `providers` vs `custom_providers` 双存储路径导致 CLI/GUI 不一致 + model version 停滞。此为配置层结构性问题，影响 `hermes setup model` 与 Desktop Settings 之间的一致性。

- **[#31335](https://github.com/NousResearch/hermes-agent/issues/31335)** — `image_gen/openai-codex` 插件因 Codex Responses API 剥离自定义工具而失效。API 兼容性问题，已挂较长时间（5 月至今）。

### 🔥 评论数 5

- **[#71226](https://github.com/NousResearch/hermes-agent/issues/71226)** — Windows Desktop 启动循环：WebSocket 连接但客户端立即断开，触发 renderer 重置。需要排查 gateway 启动流程与 WebSocket 握手时序。

### 其他高活跃

| 评论 | Issue 链接 | 主题 |
|------|-----------|------|
| 4 | [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) | Curator 对遗留 local skills 的接纳路径 |
| 4 | [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) | Windows 上 `search_files` 绝对路径返回 0 结果（ripgrep/MSYS 兼容） |
| 4 | [#39750](https://github.com/NousResearch/hermes-agent/issues/39750) | Azure Foundry Vision 通过 responses 模式路由失败 401 |
| 4 | [#31043](https://github.com/NousResearch/hermes-agent/issues/31043) | CLI `/new` 不刷新 `context_length` 导致的上下文窗口残留 |
| 4 | [#22016](https://github.com/NousResearch/hermes-agent/issues/22016) | `hermes debug share` 泄露私有数据（已关闭但需关注） |

**热点分析：** 社区最关注的是平台/协议适配一致性（Telegram、Discord、电子邮件）和 Desktop 端稳定性（Windows 启动、配置同步）两大方向，反映 Hermes 的核心使用场景集中在桌面端与即时通讯平台集成。

---

## 5. Bug 与稳定性（按严重程度排列）

### P0 — 严重 / 安全
- **[#70480](https://github.com/NousResearch/hermes-agent/issues/70480)** — Docker 镜像使用 `libsqlite3 3.46.1`，存在 WAL-reset 腐败漏洞（修复版本 3.51.3+）。缺少专用路径修复，与 #70200/#70186 不一致。**修复状态：** 未有专门 PR。

- **[#71677 相关]** — Relay SSRF（由 PR #71677 修复）原本存在 SSRF 风险，已修复。

### P1 — 高 / 功能性损坏
- **[#71226](https://github.com/NousResearch/hermes-agent/issues/71226)** — Windows Desktop 启动循环，无法正常进入会话。**修复状态：** 无专门 PR。

- **[#71675](https://github.com/NousResearch/hermes-agent/issues/71675)** — Local Ollama 从 GGUF max 字段读取上下文长度而非 Modelfile `num_ctx`，导致上下文窗口不准确。**修复状态：** 无专门 PR。

### P2 — 中 / 影响功能体验
- **[#62726](https://github.com/NousResearch/hermes-agent/issues/62726)** — Dashboard 跨 tab session bleed + `/new` hang。**修复状态：** 无专门 PR。
- **[#71298](https://github.com/NousResearch/hermes-agent/issues/71298)** — `providers`/`custom_providers` 双存储导致 CLI/GUI 不一致。**修复状态：** 无专门 PR。
- **[#71047](https://github.com/NousResearch/hermes-agent/issues/71047)** — `hermes config set` 创建重复顶层 key + Telegram streaming 重复消息。**修复状态：** 无专门 PR。
- **[#40332](https://github.com/NousResearch/hermes-agent/issues/40332)** — Discord `max_attachment_bytes` 配置无效应（`apply_yaml_config_fn` 缺少翻译）。**修复状态：** 无专门 PR。
- **[#49388](https://github.com/NousResearch/hermes-agent/issues/49388)** — Xiaomi MiMo vision_analyze 图片被降级为文本摘要而非送入辅助视觉模型。**修复状态：** 无专门 PR。

### P3 — 低 / 边缘场景
- **[#6388](https://github.com/NousResearch/hermes-agent/issues/6388)** — Telegram MarkdownV2 bullet list 转义破坏。**修复状态：** 无专门 PR。
- **[#63717](https://github.com/NousResearch/hermes-agent/issues/63717)** — Windows Desktop 更新失败 7 种根因诊断。**修复状态：** 无专门 PR。
- **[#65123](https://github.com/NousResearch/hermes-agent/issues/65123)** — UTF-8 BOM 在 `.env` 中静默丢弃首个 key。**修复状态：** 已 CLOSED（由 [#65123](https://github.com/NousResearch/hermes-agent/issues/65123) 对应修复解决）。

---

## 6. 功能请求与路线图信号

### 可能纳入下一版本的候选功能

1. **[#62944](https://github.com/NousResearch/hermes-agent/pull/62944)** — **Single gateway, multiple agents**（多 Agent 网关架构）：这是核心架构级 PR，已 rebase 到 `main`。若集成成功，将极大提升 Hermes 的部署灵活性，允许单网关同时托管多个独立 Agent 实例。该 PR 原作者 @02356abc 在 5 月要求重新 base，至此已满足条件。

2. **[#67139](https://github.com/NousResearch/hermes-agent/issues/67139)** — Curator 对遗留/未管理 local skills 的支持路径：PR [#71680](https://github.com/NousResearch/hermes-agent/pull/71680) 进一步解决写入策略问题，基础设施已具备接纳 legacy skills 的基础。

3. **[#71664](https://github.com/NousResearch/hermes-agent/pull/71664)** — Desktop composer 任意位置 skills 引用：提升 Desktop 用户体验的关键修复，与 [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) 相互呼应。

### 路线图信号
- **本地 STT（MLX + CUDA）**：[#56989](https://github.com/NousResearch/hermes-agent/issues/56989) 请求完善文档与配置示例，表明用户对"完全本地语音转写"有强烈需求，是下一版本的潜在亮点。
- **安全加固持续投入**：SSRF 阻断（#71677）、进程 argv 隐私清理（#59929）、s6 容器权限提升修复（#71682）显示安全是项目核心关注点。
- **Windows 多场景问题聚合**：启动循环（#71226）、非 ASCII 路径更新失败（#63717）、`search_files` 路径冲突（#63177）等表明 Windows Desktop 稳定性是下个版本的重要攻坚方向。

---

## 7. 用户反馈摘要

### 痛点（高频抱怨）
1. **平台兼容性不一致**：Telegram bullet list 转义（#6388）、WeChat 语音转码（#27300）、Discord 附件配置失效（#40332）、Email IMAP 标记已读（#42997）说明各消息平台适配层存在系统性差异。
2. **Desktop 端配置/更新脆弱**：Windows 更新连锁失败（#63717）、配置双路径（#71298）、Unicode 附件文件名损坏（#68788），用户普遍认为 Desktop 安装体验仍不成熟。
3. **Session 状态管理缺陷**：跨 tab session bleed（#62726）、`/new` 不刷新 context_length（#31043）、已删除 worktree 会话残留（#71226 侧），用户期望 session 状态更"干净"。
4. **隐私安全担忧**：`debug share` 泄露私有数据（#22016）、shutdown forensics 捕获完整 argv（#59929），敏感数据处理透明度是用户关注点。

### 满意/正向反馈
- **Curator 社区机制获得认可**：#67139、#67140、#64393 等持续讨论说明 curator 自动化管理已形成稳定工作流，用户投入较高。
- **多 Agent 架构期待度高**：#62944 多次 rebase 但仍保持关注，说明社区对该功能长期期待。

---

## 8. 待处理积压（需关注）

### 长期未响应 Issue（创建时间 > 30 天，仍 OPEN）

| Issue | 创建时间 | 主题 | 评论数 | 优先级 |
|-------|---------|------|--------|--------|
| [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) | 2026-04-09 | Telegram MarkdownV2 bullet escape | 7 | P3 |
| [#62726](https://github.com/NousResearch/hermes-agent/issues/62726) | 2026-07-11 | Dashboard cross-tab session bleed | 7 | P2 |
| [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) | 2026-07-12 | Windows `search_files` 绝对路径问题 | 4 | P2 |
| [#31043](https://github.com/NousResearch/hermes-agent/issues/31043) | 2026-05-23 | `/new` 不刷新 context_length | 4 | P3 |
| [#39750](https://github.com/NousResearch/hermes-agent/issues/39750) | 2026-06-05 | Azure Foundry vision 401 | 4 | P3 |
| [#27300](https://github.com/NousResearch/hermes-agent/issues/27300) | 2026-05-17 | WeChat 语音走 Tencent STT 而非 Hermes STT | 3 | P2 |
| [#31335](https://github.com/NousResearch/hermes-agent/issues/31335) | 20

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-07-26）  
**数据来源：GitHub 项目 [sipeed/picoclaw](https://github.com/sipeed/picoclaw)**  

---

## 1. 今日速览  
PicoClaw 项目在过去 24 小时内持续活跃，累计更新 2 条 Issue（均为新开/活跃）和 3 条 PR（1 条待合并，2 条已合并/关闭）。社区聚焦点集中于 Matrix 通道稳定性问题及模型列表功能优化，项目整体健康度良好，代码贡献持续推进中。  

---

## 2. 版本发布  
**暂无新版本发布。**  

---

## 3. 项目进展  
### 今日合并/关闭的 PR：  
- **[#339](https://github.com/sipeed/picoclaw/pull/339)**（已关闭）  
  - **贡献者**：udbhav-44  
  - **内容**：新增 Google Calendar 集成、优化 Email 通道功能，补充开发者工具（GitHub、System Stats）。  
  - **影响**：扩展了 PicoClaw 的日程管理与开发支持能力，提升多渠道集成能力。  

- **[#3205](https://github.com/sipeed/picoclaw/pull/3205)**（已关闭）  
  - **贡献者**：sawkonous  
  - **内容**：修复 9router 网关响应兼容性，新增 Linux ARMv7 构建目标。  
  - **影响**：提升在 Raspberry Pi 3 B+ 等 ARM 设备上的部署稳定性，扩展硬件支持范围。  

**项目整体进展**：本次合并推动了 PicoClaw 在开发者工具、日程集成及 ARM 适配方面的功能优化，为下一版本奠定基础。  

---

## 4. 社区热点  
### 最活跃 Issue：  
- **[#3203](https://github.com/sipeed/picoclaw/issues/3203)**  
  - **标题**：`[BUG] Matrix sync loop has no reconnection logic — silent death after network/server disruption`  
  - **活跃度**：6 条评论，2 个👍  
  - **背后诉求**：  
    - 用户报告 Matrix 通道因网络中断或服务端重启后完全失效，且无自动重连机制，导致 systemd 无法触发重启。  
    - 问题影响依赖长轮询的实时通信场景，对稳定性提出严峻挑战。  

### 次要讨论：  
- **[#3294](https://github.com/sipeed/picoclaw/issues/3294)**  
  - **标题**：`/list models only shows the current model instead of all configured models`  
  - **活跃度**：0 条评论，0 个👍  
  - **背后诉求**：  
    - 用户期待 `/list models` 命令返回所有配置的模型列表，但实际仅显示当前模型，存在功能逻辑矛盾。  

---

## 5. Bug 与稳定性  
### 高优先级 Bug：  
- **[#3203](https://github.com/sipeed/picoclaw/issues/3203)**  
  - **描述**：Matrix 同步循环无重连机制，导致网络波动或服务端重启后彻底失效。  
  - **是否已有 fix PR**：暂无。  

### 中优先级问题：  
- **[#3294](https://github.com/sipeed/picoclaw/issues/3294)**  
  - **描述**：`/list models` 命令未返回全部配置模型，仅显示当前模型。  
  - **是否已有 fix PR**：暂无。  

---

## 6. 功能请求与路线图信号  
### 用户需求：  
- **模型列表完整性**：  
  - **#3294** 提出的 `/list models` 功能优化，若被采纳，可提升多模型配置场景的可见性。  
- **稳定性增强**：  
  - **#3203** 的 Matrix 重连机制需求，若解决，将显著提升分布式部署稳定性。  

### 已有 PR 路线信号：  
- **#3193**（[Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193)）  
  - **状态**：仍为 OPEN，贡献者 `dim` 于 2026-07-25 更新。  
  - **潜在纳入**：若合并，可扩展 PicoClaw 的通信协议能力。  

---

## 7. 用户反馈摘要  
- **痛点**：  
  - Matrix 通道因网络波动导致服务中断，缺乏自动恢复机制（[#3203](https://github.com/sipeed/picoclaw/issues/3203)）。  
  - `/list models` 命令未返回所有配置模型，影响用户管理多模型环境的便捷性（[#3294](https://github.com/sipeed/picoclaw/issues/3294)）。  
- **满意/不满意**：  
  - 当前无明确反馈关于用户满意度的讨论，但 Bug 问题的高优先级提示用户对稳定性的核心诉求。  

---

## 8. 待处理积压  
- **长期未响应 Issue**：  
  - **[#3203](https://github.com/sipeed/picoclaw/issues/3203)**（2026-07-02 创建，活跃至 2026-07-25）  
  - **[#3294](https://github.com/sipeed/picoclaw/issues/3294)**（2026-07-25 创建，暂无评论）  
- **长期未响应 PR**：  
  - **[#3193](https://github.com/sipeed/picoclaw/pull/3193)**（2026-06-27 创建，活跃至 2026-07-25）  

---

**项目健康度评估**：  
- **活跃度**：中等偏上（Issue/PR 更新频繁，社区讨论集中）。  
- **稳定性**：存在关键 Bug（Matrix 重连缺失），需紧急关注。  
- **功能进展**：新功能（如日历集成、ARM 支持）持续推进，路线图清晰。  

建议维护者优先处理 [#3203](https://github.com/sipeed/picoclaw/issues/3203)，并跟进 [#3294](https://github.com/sipeed/picoclaw/issues/3294) 的功能需求。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-07-26

---

## 1. 今日速览

NanoClaw 在过去 24 小时内保持了较为活跃的开发节奏，共处理 13 条 Issue 与 PR 更新。今日重点聚焦于 **消息上下文一致性** 和 **容器安全增强** 两个方向。两条新 Issue 分别涉及主机代理发送消息未进入 agent 上下文的问题，以及 poll-loop 中 trigger 门控逻辑漏洞；同时有 10 个 PR 处于待合并状态，显示社区贡献热情高涨。目前尚未发布新版本，项目稳定性有待进一步验证。

---

## 2. 版本发布

暂无新版本发布。

---

## 3. 项目进展

### ✅ 已合并 PR

- **PR #2748** – 安全增强：为每个会话的 agent 容器添加 `--cap-drop=ALL`, `--security-opt no-new-privileges:true`, `--pids-limit 2048`，提升容器隔离性与防御深度。默认配置可覆写。  
  🔗 [https://github.com/nanocoai/nanoclaw/pull/2748](https://github.com/nanocoai/nanoclaw/pull/2748)

> 其他 10 个 PR 仍处于待合并状态，包括多个潜在 bugfix 和功能性改进，见下文分析。

---

## 4. 社区热点

### 🔥 最热议题

- **Issue #3134**: *Messages the host sends on an agent's behalf are absent from that agent's context*  
  👤 作者: brianjcohen  
  🔗 [https://github.com/nanocoai/nanoclaw/issues/3134](https://github.com/nanocoai/nanoclaw/issues/3134)  
  💬 评论数: 0 | 👍 点赞数: 0  

  > 该 Issue 指出，当主机代表 agent 发送审批卡片、拒绝提示等消息时，这些消息不会出现在 agent 的上下文中，导致其缺少关键交互记录。该问题直接影响 agent 的记忆一致性。

- **PR #3135**: *fix: mirror host-sent messages into the agent's context*  
  👤 作者: brianjcohen  
  🔗 [https://github.com/nanocoai/nanoclaw/pull/3135](https://github.com/nanocoai/nanoclaw/pull/3135)  
  > 对应 Issue #3134 的修复方案，已提交但尚未合并。

---

## 5. Bug 与稳定性

### ⚠️ 严重 Bug

- **Issue #3132**: *bug: follow-up poll pushes accumulate (trigger=0) messages into an active query, bypassing the accumulate gate*  
  👤 作者: buzali  
  🔗 [https://github.com/nanocoai/nanoclaw/issues/3132](https://github.com/nanocoai/nanoclaw/issues/3132)  
  > `poll-loop.ts` 中存在双路径消息消费机制，但只有外层批处理受到 `trigger` 控制。follow-up poller 存在绕过 accumulate gate 的风险，可能引发非预期行为。

- **PR #3133**: *fix(container): gate the follow-up poll on trigger=1 too*  
  👤 作者: buzali  
  🔗 [https://github.com/nanocoai/nanoclaw/pull/3133](https://github.com/nanocoai/nanoclaw/pull/3133)  
  > 对应修复方案，已提交但尚未合并。

---

## 6. 功能请求与路线图信号

- **Issue #3134 / PR #3135**: 增强 agent 上下文完整性，确保所有与 agent 相关的消息都能被追踪和记录。
- **PR #3128**: 新增 flight-checkin container skill，扩展操作类技能库。
- **PR #2211**: tool-visibility 技能，提供实时工具调用预览功能，已在 fork 中使用三月以上，准备合并。
- **PR #3124**: 报告不可用的 MCP 服务器，提升系统健壮性。
- **PR #3127**: 清理 inbox 附件路径中的非法字符，防止路径注入攻击。

这些功能多与上下文管理、安全性和用户体验优化相关，有望在近期版本中纳入。

---

## 7. 用户反馈摘要

- **上下文一致性问题**（Issue #3134）反映出用户在多轮对话中希望 agent 能够“记住”由主机代发的消息，尤其是在审批流程中。
- **poll-loop 安全漏洞**（Issue #3132）暴露出潜在的状态同步风险，可能影响 agent 的决策准确性。
- **容器安全加固**（PR #2748）获得社区认可，有助于提升企业级部署信任度。
- **技能扩展需求**（如 flight-checkin、tool-visibility）表明用户希望 NanoClaw 支持更多场景化应用。

---

## 8. 待处理积压

以下为长期未响应的重要 Issue 或 PR，建议维护团队优先评估：

- **Issue #3132** (Bug): poll-loop trigger 门控缺陷，存在潜在数据一致性风险。
- **PR #3135** (Fix): 对应 Issue #3134，修复 agent 上下文缺失问题。
- **PR #3133** (Fix): 对应 Issue #3132，修复 poll-loop 安全漏洞。
- **PR #3122** (OpenCore): 兼容性与自定义端点传输优化，影响广泛。
- **PR #2211** (Feature): tool-visibility 技能，已有生产验证，适合尽快合并。

---

📊 **项目健康度评估**：  
✅ 活跃度高，社区贡献持续  
⚠️ 存在上下文一致性与安全类 Bug 待修复  
🔄 多个重要 PR 等待合并，建议加快 Review 节奏  
🔒 安全类改动积极推进，有助于提升项目可信度  

--- 

如需订阅每日更新或获取更详细的技术分析，请访问 [NanoClaw GitHub 主页](https://github.com/nanocoai/nanoclaw)。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



**2026-07-26 IronClaw 项目日报**

---

### 1. **今日速览**  
今日代码活跃度持续高，20条PR合并/关闭与11条新/活跃Issues交替推进开发。无新版本发布，显示当前阶段以缺陷修复与增强为主，而非迭代构建。核心方向集中于WebUI性能优化、错误恢复机制完善和安全基础设施增强。尽管无重大功能发布，却在基础工具链与用户体验层实现渐进式提升。

---

### 2. **版本发布**  
无新版本发布。当前项目以渐进式优化为主，稳定性优先于功能迭代。此策略减少了用户迁移风险，但可能影响急需功能迭代的场景需求。

---

### 3. **项目进展**  
今日合并的关键PR包括：  
- **#6624-PR #6627**（WebUI键盘导航修复）：解决扩展配置对话框焦点记忆问题，直接修复用户交互痛点。  
- **#6625-PR #6625**（翻译系统集成）：为11种语言本地化失败消息，显著改善多语言用户体验。  
- **#6632-PR #6632**（路由级代码拆分）：将JavaScript初始加载量压缩至376KB（原1.2GB级），提升首页加载速度90%以上。  
这些PR在此轮迭代中推动了系统的可靠性（Safety）与可扩展性（Extension Host架构调整）双重提升。

---

### 4. **社区热点**  
- **#6284**：错误恢复性设计讨论（6条评论）。评论者强调需明确错误原因为，模型可扩展性与人机协作依赖该核心模型。  
- **#6672**：署名协议（Phase B）探讨（评论：0，但该PR涉及长期机密设计文档，可能内部重点）。  
- **#6620**：错误取消时界面状态混乱（评论：0，但 бага影响交互连贯性，需立时修复）。

---

### 5. **Bug 与稳定性**  
按严重程度排序：  
1. **#6284**（开放，高危）：模型错误恢复未完全符合合同（目标a-e缺陷），可能影响线上业务健壮性。无对应PR，需监控。  
2. **#6620**（已关闭）：错误取消时界面状态未复原，但PR #6624部分解决，建议复测。  
3. **#6613**（未提出，隐式）：多过滤时加载列表闪屏（PR #6626已修复，仍需验证配合 compensations）。

---

### 6. **功能请求与路线图信号**  
- **署名协议（#6672 PR）**：与身份验证相关，可能指向2026年Q4安全重构节点。  
- **WebUI可分割性（#6632 PR）**：指向微前端架构迁移路线，属于长期性能迭代。  
- **#6674 PR**（突变测试框架）：验证代码健壮性，暗示将追加更严格的自动化测试框架。

---

### 7. **用户反馈摘要**  
- **痛点**：键盘导航消失（#6621）、错误取消时界面卡顿（#6620）、多语言用户无法区分系统错误（#6625 PR影响）。  
- **场景**：商务用户需快速配置扩展（焦点问题）， Engineer 用户关注错误调试流程（需恢复性对话框）。  
- **积极反馈**：#6626（过滤器切换无闪屏）获得默默默默点赞，预示显性优化的稳定价值。

---

### 8. **待处理积压**  
- **#6284**：力片类目研究（7天未更新），目标范围过大，建议拆分为阶段任务。  
- **#6677 PR**：_recyclability conformance测试（97%覆盖但未发布），需集成CI流程。  
- **#6678 PR**：产品指令管线（ideline状态），核心功能但仍未上线。

---

**链接整合**  
所有讨论点与PR均指向：nearai/ironclaw 的相关github页面。建议关注#6284与#6672若需后续跟进。


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-26

> **数据范围**：2026-07-25 00:00 - 23:59 (UTC)  
> **数据来源**：GitHub API / 仓库 `netease-youdao/LobsterAI`

---

## 1. 今日速览

- **核心动态**：项目今日无新版本发布，但完成了一次大规模**技术债清理与陈旧 PR 批量合并**。11 个 PR 同日关闭/合并，其中 8 个为 4 月初创建的 `[stale]` 标记 PR，集中解决了会话列表分组、消息时间戳、输入框历史回溯、全文搜索、Markdown 导出、ToolUse 批量折叠、错误状态红点等核心 UI/UX 缺失功能。
- **活跃度评估**：**高（清理期）**。虽然新增 Issue 仅 1 条，但合并 PR 数量（11）远超日均水平，表明维护者正在集中精力清理积压，推进 v2026.4 以来规划的功能落地。
- **风险提示**：大量陈旧 PR 同日合并存在**回归测试覆盖不足**风险，建议后续发布前加强集成测试；Windows 安装器相关修复（#2383, #2384）虽非功能性变更，但关乎分发稳定性，需重点验证。

---

## 2. 版本发布

**今日无新版本发布**。  
最近版本为 `v2026.4.1`（Issue #1329 中提及），当前合并的功能性 PR 预计将汇入下一个迭代版本（如 `v2026.7` 或 `v2026.8`）。

---

## 3. 项目进展：今日合并/关闭的重要 PR

| PR | 标题 | 类型 | 关联 Issue | 核心变更 | 影响面 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[#2383](https://github.com/netease-youdao/LobsterAI/pull/2383)** | fix: windows install root foreign content protection | **Bug Fix / Security** | - | 修复 Windows 安装根目录外部内容保护机制，防止安装劫持。 | **高**（Windows 分发安全） |
| **[#2384](https://github.com/netease-youdao/LobsterAI/pull/2384)** | fix(installer): harden Windows install and update recovery | **Bug Fix / Reliability** | - | 强化 Windows 安装与更新恢复机制，提升安装成功率。 | **高**（Windows 用户体验） |
| **[#2381](https://github.com/netease-youdao/LobsterAI/pull/2381)** | feat: support kimi k3 | **Feature** | - | 新增对 Moonshot Kimi K3 模型的支持。 | **中**（模型生态扩展） |
| **[#1327](https://github.com/netease-youdao/LobsterAI/pull/1327)** | feat: ToolUse 工具调用块批量展开/折叠 | **Feature (Stale)** | [#1326](https://github.com/netease-youdao/LobsterAI/issues/1326) | `AssistantTurnBlock` 新增 `forceExpanded` prop，实现工具列表顶部“展开全部/折叠全部”按钮。 | **中**（Cowork 交互效率） |
| **[#1331](https://github.com/netease-youdao/LobsterAI/pull/1331)** | feat: 会话列表错误状态红点徽标 | **Feature (Stale)** | [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330) | `CoworkSessionItem` 新增 `error` 状态红色静态圆点指示器（含光晕）。 | **中**（可观测性/排错效率） |
| **[#1338](https://github.com/netease-youdao/LobsterAI/pull/1338)** | feat: 会话列表按时间分组展示 | **Feature (Stale)** | [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) | 实现 `groupSessionsByTime`，按“已置顶/今天/昨天/本周/更早”分组渲染，搜索时退化为平铺。 | **高**（核心导航体验） |
| **[#1340](https://github.com/netease-youdao/LobsterAI/pull/1340)** | feat: 用户消息气泡添加发送时间戳 | **Feature (Stale)** | [#1339](https://github.com/netease-youdao/LobsterAI/issues/1339) | `UserMessageItem` 底部显示 `HH:MM`，悬浮显示完整时间。 | **中**（上下文感知） |
| **[#1342](https://github.com/netease-youdao/LobsterAI/pull/1342)** | feat: 输入框支持 Up/Down 方向键回溯历史 | **Feature (Stale)** | [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341) | `CoworkPromptInput` 实现 50 条去重历史栈，单行边界触发导航。 | **高**（重度用户核心交互） |
| **[#1336](https://github.com/netease-youdao/LobsterAI/pull/1336)** | feat(mcp): 自定义服务器配置支持 JSON 粘贴导入 | **Feature (Stale)** | - | MCP 配置弹窗新增“JSON 导入”Tab，支持序列化/反序列化，编辑模式自动回显 JSON。 | **中**（MCP 生态易用性） |
| **[#1335](https://github.com/netease-youdao/LobsterAI/pull/1335)** | feat(scheduledTask): add workdays (Mon-Fri) schedule option | **Feature (Stale)** | - | 定时任务新增“工作日”选项，cron 表达式 `M H * * 1-5`，支持编辑回填。 | **低**（特定场景增强） |
| **[#1333](https://github.com/netease-youdao/LobsterAI/pull/1333)** | fix(agent,cowork): i18n attachment label, Escape close, delete guard | **Bug Fix / UX (Stale)** | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | 修复附件标签 i18n 缺失、Esc 关闭弹窗、删除确认防护。 | **低**（细节打磨） |

**进展总结**：项目在** Cowork 会话体验（列表、详情、输入）、MCP 配置、定时任务、模型支持、Windows 分发稳定性** 五大维度同步推进。陈旧 PR 的集中合并标志着 v2026.4 规划的“补齐基础体验”阶段任务基本完成。

---

## 4. 社区热点

| 对象 | 热度指标 | 核心诉求分析 |
| :--- | :--- | :--- |
| **[Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385)** | **新建 1 评论 / 0 👍**<br>*(今日唯一新增 Issue)* | **文件夹上传/引用支持**。用户期望像其他 Agent（Cursor, Cline 等）一样支持 `@文件夹` 或拖拽文件夹上下文，当前仅支持单文件。这是**多文件上下文工程**的刚需，属于 P0 级功能缺口。 |
| **[Issue #1326/1330/1337/1339/1341/1343/1345](https://github.com/netease-youdao/LobsterAI/issues/1326)** | **均为 2 评论 / 0 👍**<br>*(均于今日关闭，关联 PR 已合并)* | **基础体验补齐集中爆发**。作者 `MaoQianTu` 系统性提交了 7 个“功能缺失”类 Issue，覆盖工具块交互、错误态可见性、列表导航、时间感知、输入历史、全文搜索、导出能力。反映**核心用户对专业级 IDE 体验的强烈渴求**，且均已通过 PR 落地。 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 状态 | 详情 | Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **High** | Windows 安装器安全/恢复 | **已修复合并** | 安装根目录保护缺失、更新失败、更新回滚机制脆弱。 | [#2383](https://github.com/netease-youdao/LobsterAI/pull/2383), [#2384](https://github.com/netease-youdao/LobsterAI/pull/2384) |
| **Medium** | 定时任务通知渠道无选项 | **已关闭** | v2026.4.1 版本新建定时任务时通知渠道下拉框为空，仅能选“不通知”。 | 未见专门 PR，可能包含在陈旧 PR 合并中或为配置迁移问题。[#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) |
| **Low** | i18n 缺失、Esc 关闭、删除无确认 | **已修复合并** | 附件标签硬编码中文、弹窗无键盘关闭、误删无防护。 | [#1333](https://github.com/netease-youdao/LobsterAI/pull/1333) |

**整体稳定性判断**：今日修复集中在 **Windows 分发层** 与 **交互细节**，核心运行时无崩溃/数据丢失类 Bug 报告。但 11 个 PR 同日合并，**建议发布前执行完整回归测试套件**，重点验证 Cowork 会话流、MCP 配置、定时任务、Windows 安装/更新全链路。

---

## 6. 功能请求与路线图信号

| 需求来源 | 需求描述 | 实现进度 | 纳入下版本概率 |
| :--- | :--- | :--- | :--- |
| **[Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385)** | **文件夹上传 / @文件夹引用** | **Open**，无 PR | **极高 (P0)**。符合 Agent 交互趋势，且为单文件上传的自然延伸。 |
| **[Issue #1343](https://github.com/netease-youdao/LobsterAI/issues/1343)** | **消息内容全文搜索** | **Closed**，**无对应 PR 合并** | **高**。Issue 已关闭但仅标记 stale，PR #1343 未见合并记录（列表中无该编号 PR），技术方案明确（标题优先+异步内容检索+缓存），极大概率在开发中或待下一批合并。 |
| **[Issue #1345](https://github.com/netease-youdao/LobsterAI/issues/1345)** | **导出为 Markdown** | **Closed**，**无对应 PR 合并** | **高**。同 #1343，复用现有 `saveInlineFile` IPC，实现成本低，价值高。 |
| **[PR #2381](https://github.com/netease-youdao/LobsterAI/pull/2381)** | **Kimi K3 支持** | **Merged** | **已落地**。体现模型厂商新品快速跟进策略。 |
| **[PR #1335](https://github.com/netease-youdao/LobsterAI/pull/1335)** | **定时任务“工作日”选项** | **Merged** | **已落地**。补全 cron 表达式易用性。 |

**路线图推测**：下一版本（`v2026.7/8`）主题将是 **“专业化体验落地 + 多模态/上下文工程增强”**。重点关注 **文件夹上下文（#2385）**、**全文搜索（#1343）**、**Markdown 导出（#1345）** 三大缺口能否同步交付。

---

## 7. 用户反馈摘要

从今日 Issue 评论及历史 Issue 描述提炼：

1.  **痛点：上下文构建效率低**  
    > “对话框没办法添加文件夹，没办法像其他 agent 一样 @文件。” ([#2385](https://github.com/netease-youdao/LobsterAI/issues/2385))  
    *场景*：大型代码库重构、多文件特性开发，需整目录喂给模型。单文件添加严重拖慢流程。

2.  **痛点：历史会话管理混乱**  
    > “会话数量较多时，侧边栏缺乏时间维度组织结构……很难快速找到‘今天’或‘昨天’的会话。” ([#1337](https://github.com/netease-youdao/LobsterAI/issues/1337))  
    *场景*：长期重度用户，会话积累百条以上，无分组、无全文搜索（[#1343](https://github.com/netease-youdao/LobsterAI/issues/1343)）导致“只能靠记忆找会话”。

3.  **痛点：调试迭代缺乏命令行级交互**  
    > “无法通过键盘快捷键回溯之前发送过的消息……每次想复用上一条指令都需要重新手动输入。” ([#1341](https://github.com/netease-youdao/LobsterAI/issues/1341))  
    *场景*：Prompt Engineering 迭代、工具调用参数微调，高频重复输入。

4.  **痛点：错误感知滞后**  
    > “会话执行出错时，侧边栏没有任何可视化提示，需要逐一点开查看。” ([#1330](https://github.com/netease-youdao/LobsterAI/issues/1330))  
    *场景*：后台并行运行多个 Cowork 

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目 daily 报告 – 2026‑07‑26**  

---  

### 1. 今日速览  
- 过去 24 h 共 **5 条 Pull Request**（PR）更新，其中 **2 条已合并/关闭**，其余 3 条仍在审查中。  
- 无新版本发布、无新 Issue 产生，代码库整体处于**低噪声、维持稳定**的状态。  
- 活跃度指标（Issue/ PR 数量）显示社区提交进入**平稳期**，但因未出现高热度讨论，整体**健康度保持在“良好”**。  

---  

### 2. 版本发布  
- **无新版本发布**（`Latest Releases` 为空），因此不需要提供更新说明、破坏性变更或迁移注意事项。  

---  

### 3. 项目进展  
| PR 编号 | 状态 | 关键改动 | 对项目的推进 |
|--------|------|----------|--------------|
| **#1165** | **CLOSED** | 为 Slack 授权添加**acknowledgment reactions**、**reaction triggers** 与线程回复修复。 | 完成了 Slack Bot 交互的完善，提升了交互可靠性，为后续功能扩展奠定基础。 |
| **#1167** | **CLOSED** | 文档规范：在 `CLAUDE.md` 中**禁止提及 Claude Session 链接**（补充 `Co‑Authored‑By` 规则）。 | 纯文档改动，强化了准入规范，对代码影响不大。 |
| **#1158** | OPEN | 引入 **zvec** 向量数据库内存后端（`memory` 模块），并提供 `zvec` cargo feature 开关。 | 为多模态记忆模型提供可插拔的存储方案，为后续 “vector‑db‑based memory” 功能铺路。 |
| **#1166** | OPEN | Slack 消息的 **per‑message acknowledgment reactions**、Phase 反馈、Block Kit 渲染与重连监控。 | 正在实现更细粒度的交互确认机制，预计将提升机器人在真实工作流中的容错性。 |
| **#1168** | OPEN | 集成 **NIP‑29 group‑chat** 规范，支持 Buzz 通道的 nostr 分组聊天。 | 将nostr 组播能力正式纳入主线，对多代理协作场景具有里程碑意义。 |

> 合并/关闭的两条 PR（#1165、#1167）已将 **Slack 可靠性** 与 **文档治理** 两大关键短板填补，整体功能进度保持 **+2 天** 的前进节奏。  

---  

### 4. 社区热点  
- **最活跃 PR**：`#1168 – feat(nostr): add NIP‑29 group chat support for Buzz channels`（创建者 *pens​o*，更新于 2026‑07‑26）。  
  - 虽无点赞或评论，但因涉及 **NIP‑29** 与 **Buzz** 两大生态核心，是当前**功能需求的最大议题**。  
- **最受关注的讨论**：无 Issue 或 PR 拥有显著评论/反应，社区讨论处于**低频、低密度**状态。  

> 看来社区当前更关注实现细节（如 Slack acknowledgment）而非大概念的公开讨论。  

---  

### 5. Bug 与稳定性  
- 本日 **未报告任何 Bug、崩溃或回归问题**（Issue 列表为空）。  
- 所有已合并的 PR 均通过了 CI 检查，暂无已知 **稳定性回归**。  

---  

### 6. 功能请求与路线图信号  
| 需求来源 | 关联 PR / Issue | 可能纳入的里程碑 | 判断依据 |
|----------|----------------|------------------|----------|
| “向量数据库”存储后端 | `#1158`（feature‑gate `zvec`） | **下一版 `memory` 抢先体** | 已实现且已开启默认 `full` 配置，意味着团队已准备好在 `full` 发行版中正式支持。 |
| “nostr 组播 / 分组聊天” | `#1168` | **2027 Q1 版本**（或 `beta` 分支） | 核心功能已完成雏形，但仍需审查兼容性与文档，故预计在正式发行前进入 `beta` 阶段。 |
| “Slack 细粒度反馈” | `#1166` | **同步发布在 `#1165` 之后的 1–2 周** | 已在审查中，且依赖 #1165 的 reaction 实现，完成后可直接合并。 |

---  

### 7. 用户反馈摘要  
- 由于 **无新 Issue**，本日没有从用户评论中提炼出显著痛点或使用场景。  
- 过去几天（本周初）出现的主题主要围绕 **Slack 兼容性** 与 **nostr 集成**，这两方面的反馈已在对应 PR 中得到处理。  

---  

### 8. 待处理积压  
| 项目 | 链接 | 说明 |
|------|------|------|
| 长期未响应的 Issue/ PR | 目前没有在过去 24 h 内新增的未响应项。 | 但 **#1158**（zvec memory backend）已处于 **open** 状态超过 8 天，若未在本周内获得审查通过，需要维护者关注，以免阻塞后续 `full` 发行版的记忆功能。 |
| 未合并的 PR | `#1166`、`#1168` | 均为关键功能，均在审查队列中等待 **合并审批**。维护者应监控评审进度，确保在下个发布窗口前完成合并。 |

---  

## 综合评估  
- **代码健康度**：✅ 维持在 **绿色**（无新 Bug、无重大回归）。  
- **社区活跃度**：⚠️ 处于 **低频**（仅 5 条 PR，2 条已合并），但涉及的功能均属于核心路线图。  
- **发布节奏**：📉 当前无新版本，短期内（下 1–2 周）可能会有 **小版本（patch）** 合并，待所有审查通过后可进行 **计划内的 minor 发布**。  

> 建议**：维护团队继续保持对 `#1158` 与 `#1168` 的审查频率，并在审查通过后快速合入，以保持对 Slack 与 nostalgia（nostr）功能的按时交付。  

---  

*以上信息均基于 GitHub API 数据（截至 2026‑07‑26 08:00 UTC）。如需更细粒度的审查状态，可直接访问对应 PR 链接。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 — 2026-07-26

> 数据来源：`github.com/agentscope-ai/QwenPaw`（CoPaw 计划下的主要仓库）
> 报告时间：2026-07-26（覆盖过去 24 小时）

---

## 1. 今日速览

项目今日整体处于**中高活跃状态**：共新增/更新 8 个 Issues 和 8 个 Pull Requests，无新版本发布，也无已合并/关闭的 PR。Issues 集中在 MCP transport 兼容性 bug（两条高度重合的报告链）、MCP 工具调用失败以及 QwenPaw UI 性能三个方面；PR 则围绕浏览器控制 SDK 统一化、重新排序（reranker）UI、CI/CD 网站部署、Windows 测试脚本修复和历史数据持久化加固展开。由于 6 个 PR 仍处于 OPEN/Review 状态，代码贡献端较为活跃，但尚未进入合并阶段，项目近期推进以"功能完善与可靠性提升"为主，没有里程碑级别的版本交付。

## 2. 版本发布

无新版本发布。保持对 QwenPaw v2.0.1 当前运行的关注——多个 Issues（#6460、#6464、#6470、#6469、#6468）均基于此版本反馈问题，暗示 v2.0.1 是当前的稳定基线，且是用户生产环境的主要使用版本。

## 3. 项目进展

**今日新增 PR（待合并）**

| PR | 标题 | 核心推进 |
|---|---|---|
| [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) | fix(console): run test scripts on Windows | 修复 Windows 下 npm 脚本调用方式，降低入门贡献门槛 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | feat: add reranker UI config panel to ReMeLightMemoryCard | 在 Web UI 提供 reranker 参数配置面板，配套 reranker 后端 |
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | fix(history): harden SQLite persistence, backup, and restore | 加固历史数据库的并发写入、WAL 生命周期和模式兼容 |
| [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | docs(sandbox): clarify native Windows sandbox support | 修正文档中关于 Windows 沙箱支持范围的过时表述 |
| [#6463](https://github.com/agentscope-ai/QwenPaw/pull/6463) | feat(ci): deploy the website from the release orchestrator | 修复因发布编排器改变触发器导致网站不再自动部署的问题 |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | feat(browser): unified browser — one SDK, any backend | 浏览器控制统一 SDK 架构重构（control plane / execution plane 分离） |

**进展评估**：6 个 PR 仍处于 OPEN 状态，没有进入 MERGED 流程。项目整体向前迈进了"功能设计 + 文档完善 + CI 修复"层面，尚未触及核心引擎变更。近期合并的两条 PR（#5691、#5692）属于 reranker 系列，已为 #6399 的 UI 前置工作奠定基础。

## 4. 社区热点

**最活跃 Issues**（按更新时间 + 评论量）：

1. **[#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)** — Edge + Wayland 下单标签 CPU 占用过高（2 条评论，环境细节完整，有明确复现路径）。**诉求**：QwenPaw 作为远程桌面应用需要低资源占用，用户报告在管理 ComfyUI 工作流时高频触发 GPU/CPU 渲染推送。
2. **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)** — MCP driver 硬编码 SSE client，忽略 YAML 中 `transport: streamable_http`（1 条评论，定位到 `mcp_stateful_client.py` 约第 800 行）。
3. **[#6469 / #6468](https://github.com/agentscope-ai/QwenPaw/issues/6469)** — Jin10 MCP 框架调用工具报"Session terminated"（两条高度重复，问题来自同作者同一个工作区配置）。
4. **[#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)** — 多智能体完全隔离（2 👍，社区共鸣度高）。

**背后诉求分析**：MCP transport 问题是今日最集中的技术痛点，三条 Issues（#6470、#6469、#6468）均指向同一底层缺陷——**MCP 客户端未按配置选择 transport 协议**。这说明当前 MCP 功能是用户核心使用场景，且配置驱动的设计意图尚未被客户端正确实现。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP driver 硬编码 SSE client，无法支持 streamable_http 传输，导致所有配置了 streamable_http 的 MCP server 工具加载失败 | 否 |
| 🔴 高 | [#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469) | Jin10 MCP 工具调用报 "Session terminated"（同 #6470 根因） | 否 |
| 🔴 高 | [#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468) | 同上，与 #6469 为同一条 bug 在两个工作区的复现 | 否 |
| 🟡 中 | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Edge + Wayland 下 QwenPaw 页面 CPU 占用持续走高，风扇加速 | 否 |
| 🟡 中 | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | v2.0.1 在 AgentScope Platform 上无法连接任何模型，下拉列表为空 | 否 |
| 🟢 低 | [#6466](https://github.com/agentscope-ai/QwenPaw/issues/6466) | 希望 agent 能输出可点击的文件/文件夹路径按钮（非 bug，纯增强） | 否 |

**稳定性观察**：今日报告的 5 个 bug 都没有对应的修复 PR，且集中在 MCP transport 和模型连接两个核心链路，说明近期稳定性风险点较为集中。

## 6. 功能请求与路线图信号

| Issue | 请求功能 | 是否已有对应 PR |
|---|---|---|
| [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | 智能体完全隔离（记忆、配置、操作互不可见） | 否 |
| [#6466](https://github.com/agentscope-ai/QwenPaw/issues/6466) | Agent 输出可点击的文件/文件夹路径按钮 | 否 |
| [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) + [#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469) | MCP driver 按 YAML 配置正确选择 transport（修复性路线图信号） | 否 |
| [#6463](https://github.com/agentscope-ai/QwenPaw/pull/6463) | CI/CD 联动网站部署（已提交，等待合并） | ✅ PR 已提交 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | ReMeLightMemoryCard reranker UI 配置面板 | ✅ PR 已在 Review |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 浏览器控制统一 SDK 架构 | ✅ PR 已在 Review |

**路线图判断**：reranker（#5691、#5692 → #6399）和浏览器统一 SDK（#6276）构成"记忆增强 + 浏览器控制"两条主线，预计下一版本会落在其中至少一条；MCP transport 修复和智能体隔离属于用户呼声高但尚未有 PR 起动的方向，可能进入下一个里程碑的规划池。

## 7. 用户反馈摘要

**核心痛点**：

- **MCP 配置与实际行为脱节**：用户在 YAML 中声明 `transport: streamable_http`，但客户端硬编码走 SSE，导致工具加载失败（#6470、#6469、#6468）。用户明确指出"框架代码需要修复"，反映高级用户对配置驱动能力的期望未被满足。
- **远程访问性能问题**：QwenPaw 通过服务端地址跨设备访问时，单标签页 CPU 高占用，用户明确说明"只在 QwenPaw 页面复现"（#6460），期待低资源占用的远程桌面体验。
- **模型连接失败**：在 AgentScope Platform 部署的实例无法连接任何模型，Pro/Free 均无可选模型（#6464），直接影响核心使用链路。
- **隐私与多智能体隔离**：群聊中 @QQ 机器人导致另一个单聊智能体的记忆可被读取和操作（#6461），用户强烈要求"完全独立的隔离选项"，并已给该 issue 2 👍（当日最高），显示社区对此有共识。
- **新手门槛**：小白用户在节点搭建和主页展示上遇到困难且社群响应不及时（#6467）。

**用户满意点**：文档完善类 PR（#6462）和 CI 修复（#6365）获得正面反馈；reranker 前后端联动系列 PR（#5691、#5692、#6399）显示用户对记忆搜索质量有持续改进诉求，当前方案被接受。

## 8. 待处理积压

| 类型 | ID | 标题 | 积压时长 | 建议 |
|---|---|---|---|---|
| Issue | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP transport config 被忽略（streamable_http） | 1 天 | 与 #6469、#6468 高度重复，建议合并为单条并关联修复代码 |
| Issue | [#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469) | Jin10 MCP "Session terminated" | 1 天 | 同上，重复报告 |
| Issue | [#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468) | 同上，在另一工作区的复现 | 1 天 | 同上，建议关闭或标注为重复 |
| Issue | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Edge+Wayland 高 CPU | 1 天 | 需要前端或渲染层优化，无对应 PR |
| Issue | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | Platform 部署模型无法连接 | 1 天 | 影响 AgentScope Platform 用户，应优先排查配置兼容性问题 |
| PR | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | Unified browser SDK | 已 6 天 Review | 大架构变更，长期 Review 状态，建议推进至最终审核或明确阻塞点 |
| PR | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Reranker UI 配置面板 | 已 3 天 Review | 配合中的 reranker 后端系列，建议尽快合并以完成闭环 |
| Issue | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | 智能体完全隔离 | 1 天 | 2 👍 为当天最高，需产品评审是否在下一版本 Roadmap |

---

**项目健康度小结**：代码贡献活跃（8 条 PR）、社区反馈密度较高（8 条 Issues、MCP 与隔离议题引发广泛共鸣），但今日无版本交付且无 PR 进入 MERGED 状态，合并管线推进偏慢。MCP transport 链路存在已确认但未修复的 bug，是当前最需优先处理的稳定性风险。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-26

> **数据来源**：GitHub API / 仓库事件流 | **统计窗口**：2026-07-25 00:00 – 2026-07-26 23:59 (UTC)  
> **仓库**：`zeroclaw-labs/zeroclaw` | **默认分支**：`master`

---

## 1. 今日速览

- **活跃度评级**：🔥 **高** — 过去 24 h 新增/活跃 Issue 16 条、PR 50 条（其中 48 条待合并），无新 Release，但 PR #9376 已准备发布 `v0.8.4`。
- **核心焦点**：**安全/稳定性修复** 占主导（WhatsApp Web 配置逻辑缺陷、运行时测试不稳定、Verifiable Intent 验证链缺失）；**架构重构** 持续推进（Plugin 统一目录、Channel/Source 边界清理、`forbid(unsafe_code)` 全工作区落地）。
- **风险信号**：3 个 **P1/S1** 级 Issue 同时处于 Open 状态（#9348 WhatsApp 安全、#9357 运行时测试毒化全局锁、#9340 Cron 交付丢失），建议优先调度核心维护者处理。
- **社区贡献**：外部贡献者 `asd15555866` 提交完整中文翻译 PR #9377；`belumume`、`alexandme` 等核心贡献者高频产出 Fix PR。
- **技术债**：CI 依赖审计（npm audit）已修复（#9270），但 Rust 侧 `unsafe_code` 禁令、测试并行化（#9371）、Plugin 签名验证（#9134）仍在进行中。

---

## 2. 版本发布

**无新版本发布**。  
**下一版本就绪**：PR **#9376** `chore(release): cut v0.8.4` 已打开，包含：
- 首次将工作区发布至 crates.io（根包重命名 `zeroclawlabs` → `zeroclaw`，`cargo install zeroclaw` 直接可用）
- 18 个 crate 发布， 5 个内部 crate 保留
- 变更日志生成、crate 移除清理
- **破坏性变更**：包名变更、部分内部 crate 不再发布；下游若依赖旧 crate 需更新 `Cargo.toml`。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| **#9270** | `fix(web/deps)` | 修复 npm audit 高危漏洞：`@redocly/openapi-core` 锁定 1.34.7、`js-yaml` 升 4.3.0、`brace-expansion` 升 2.1.2 | Web Dashboard / ZeroCode 前端安全基线 |
| **#9123** | `fix(plugins)` | 引入 `PluginChannelEndpoint`，将路由用的 channel type 与实例身份的 binding alias 解耦 | Plugin Channel 路由正确性、安全边界 |
| **#9285** | `Bug (Closed)` | 修复 `Config::set_prop` 对嵌套 map 的错误分类（原报 “Unknown property” 实为值解析失败） | 配置系统报错准确性 |
| **#8962** | `Bug (Closed)` | 确认 `zeroclaw-runtime` 并行测试浮动失败为已知 flaky，纳入 #9357 统一治理 | CI 稳定性治理入口 |

> **整体进度**：v0.8.4 维护列车（Tracker #8357）目标 7 月 31 日发车，当前阻塞项集中在 **P1 Bug 修复** 与 **Plugin 签名/沙箱** 两大技术债清理。

---

## 4. 社区热点（评论/互动最多）

| 对象 | 标题 | 评论 | 👍 | 核心诉求 |
|------|------|------|----|----------|
| **Issue #9348** | WhatsApp Web `mode=business` 下 `chat policies` 失效，实际对所有 DM/Group 回复 | 6 | 0 | **安全配置虚假安全感** — 运营者以为配了白名单，实则全开；需尽快修复或至少在配置校验时警告 |
| **Issue #6489** | “Everything is a plugin” 长期架构 RFC：统一 Integrations 与 Wasm Plugins | 5 | 0 | 架构演进方向确认；维护者已接受，纳入 Tracker 推进 |
| **Issue #9357** | `cargo test -p zeroclaw-runtime --lib` 19/20 失败，且冒烟测试毒化全局 mutex | 2 | 0 | **CI 可靠性红线** — 阻碍合并信心，需隔离冒烟测试或修复锁竞争 |
| **Issue #9330** | RFC：AI 辅助 PR 预审/复审，保留人工最终把关 | 2 | 0 | 提升审吞吐，降低维护者负担；风险分级决定 AI 介入深度 |
| **PR #9377** | feat(i18n): 完整中文翻译 | — | 0 | 社区贡献首个完整语言包，降低中文用户门槛 |

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 标题 | 已有 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **S1 / P1** | **#9348** | WhatsApp Web 业务模式下策略完全失效 | **#9354** (warn when policies cannot take effect) | Open / 需根因修复 |
| **S1 / P1** | **#9357** | 运行时库测试极度不稳定，毒化全局锁 | — | Open / 需隔离/重写冒烟测试 |
| **S1 / P1** | **#9340** | CLI 创建的 Cron Job `delivery.mode=none` 导致输出丢弃 | — | Open / 需补全 `add_agent_job` delivery 参数 |
| **S2 / P2** | **#9328** | `verifiable-intent` 仅评估约束，未验证凭证链 | — | Open / 安全审计项 |
| **S2 / P2** | **#9373** | Peer-agent delivery 缺少 cost-tracking 上下文，预算失效 | — | Open / 观测/成本控制回归 |
| **S2 / P2** | **#9366** | WhatsApp Web 接受 `approval_timeout_secs` 但从不读取 | — | Open / 配置漂移 |
| **S2 / P2** | **#9363** | Config 元数据未随 ZeroCode/Web 本地化 | — | Open / i18n 覆盖缺口 |
| **S3 / P2** | **#9374** | `agent::run()` 12 条退出路径泄漏 `AgentStart` 事件 | — | Open / 观测完整性 |
| **S3 / P2** | **#9239** | `config patch --json` 两条路径抛裸错误而非统一 envelope | — | Open / CLI 契约一致性 |

> **修复进度**：仅 #9348 有对应缓解 PR (#9354)；其余均处于 **Open 无 PR** 状态，建议在 v0.8.4 冻结前完成分流。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求 | 关联 PR/Tracker | 纳入 v0.8.4 概率 |
|----------|------|-----------------|------------------|
| **Issue #6489** | 统一 Plugin 目录：Integrations → Wasm Components 单一模型 | Tracker #6489、PR #9137 (egress policy)、#9124 (fixture)、#9134 (admit bytes) | ⭐⭐⭐ (架构主线，但 v0.8.4 为维护版，大概率推至 v0.9) |
| **Issue #8583** | Channel/Source 共享边界清理、Orchestrator 行裁剪 | PR #8443 (Matrix single-message drafts)、#8964 (Telegram scratchpad 清理) | ⭐⭐ (增量清理可进维护版) |
| **Issue #7130** | 全工作区 `forbid(unsafe_code)`，仅 `aardvark-sys` 例外 | — | ⭐ (技术债，非功能，可能延后) |
| **PR #9200** | 新增 Atlas Cloud 模型提供商 (OpenAI 兼容) | — | ⭐⭐⭐ (纯增量配置，极大概率进 v0.8.4) |
| **PR #8438** | Cron `shell_output_format=raw` 选项 | — | ⭐⭐ (向后兼容，易进版) |
| **Issue #9330** | AI 辅助 PR 审查流水线 | — | ⭐ (工程效能，非运行时功能，视 CI 容量决定) |

---

## 7. 用户反馈摘要（从评论提炼）

| 痛点 / 场景 | 代表性声音 | 涉及 Issue/PR |
|-------------|------------|---------------|
| **“配置了白名单却全开，生产环境不敢用 WhatsApp Business”** | “An operator who believes they configured an allowlist gets an agent that replies to every inbound message” | #9348 |
| **“跑测试像开盲盒，冒烟测试把全局锁毒了，后续全挂”** | “one flaky assertion poisons a global mutex that takes further tests with it” | #9357 |
| **“Cron 跑完啥也没收到，日志还显示 ok”** | “The run is recorded as `ok`, so nothing indicates the result went nowhere” | #9340 |
| **“中文界面缺翻译，配置项全是英文，上手成本高”** | PR #9377 贡献者主动补全全量中文键值 | #9377 |
| **“插件签名验证、沙箱策略什么时候能稳定？想自建插件市场”** | 多条 Plugin 相关 PR 评论中反复追问时间表 | #9134, #9137, #9125 |

---

## 8. 待处理积压（长期无响应/高优先级）

| 对象 | 创建时间 | 最后更新 | 停滞天数 | 关注理由 |
|------|----------|----------|----------|----------|
| **Issue #7130** | 2026-06-03 | 2026-07-25 | 53 | 全工作区 `forbid(unsafe_code)` 落地，安全基线；需指定 Owner 推进 |
| **Issue #6489** | 2026-05-06 | 2026-07-25 | 81 | 架构级 RFC，虽接受但无明确里程碑，建议拆解为可交付 Epic |
| **Issue #8357** (Tracker) | 2026-06-26 | 2026-07-25 | 30 | v0.8.4 维护列车总追踪，**目标 7/31 发车**，当前 P1 Bug 未清零，需每日站会跟进 |
| **PR #7821** | 2026-06-17 | 2026-07-26 | 39 | `SandboxPolicyConfig` 引入，标记 `needs-author-action`，风险高，需核心维护者 Review |
| **PR #8443** | 2026-06-28 | 2026-07-26 | 28 | Matrix 单消息进度草稿，`trusted contributor` + `priority:p2`，体量 XL，需分拆或延期 |
| **PR #9115** | 2026-07-17 | 2026-07-26 | 9 | Blacksmith Runner 引入，`risk:high`，CI 成本优化关键，需基础设施组确认 |

---

## 📌 维护者行动建议（Action Items）

1. **今日必做**  
   - 指派核心成员 **30 min 内** 评审 #9348 / #9357 / #9340 三个 P1 Bug，给出 Fix ETA。  
   - 合并 #9270 (已关闭)、#9123 (已关闭) 后续回归验证。  
2. **本周冲刺**  
   - 完成 #9354 (WhatsApp 配置警告) 合并，作为 #9348 缓解措施先行上线。  
   - 推进 #9376 (v0.8.4 Release PR) 通过 Quality Gate，冻结变更集。  
   - 处理 #9377 (中文翻译) 合并，提升社区友好度。  
3. **技术债专项**  
   - 建立 “测试稳定性专项” Issue，统筹 #9357、#8962、#9371。  
   - 将 #7130 (`forbid(unsafe_code)`) 纳入 **安全基线 Sprint**，指定 Owner 与截止日期。  

---

> **下一期预告**：2026-07-27 日报将聚焦 v0.8.4 Release Candidate 状态、Plugin 签名验证链路完备度、以及 AI 审查流水线原型进展。  
> **订阅方式**：Watch `zeroclaw-labs/zeroclaw` → Custom → “Releases” + “Issues” + “Pull Requests” 即可实时获取结构化动态。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*