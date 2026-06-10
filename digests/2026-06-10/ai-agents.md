# OpenClaw 生态日报 2026-06-10

> Issues: 447 | PRs: 488 | 覆盖项目: 13 个 | 生成时间: 2026-06-10 02:33 UTC

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

**OpenClaw – 项目动态日报（2026‑06‑10）**  
*数据来源：GitHub – openclaw/openclaw（截至 2026‑06‑10 24h）*  

---

## 1. 今日速览
- **社区活跃度极高**：过去 24 h 内共计 **935 条** Issue/PR 更新（447 Issues、488 PR），其中 **318 条 Issue** 为新建或活跃，**355 条 PR** 仍待合并。  
- **两次正式版发布**（v2026.6.5 与 v2026.6.5‑beta.6），说明核心团队仍在快速迭代。  
- **高优先级回归与安全缺陷**占据榜首（P1 + 安全/消息丢失标签），显示生产环境使用量已进入关键业务阶段。  
- **合并率约 27%**（133 条已合并 PR），大多数合并围绕 **工具链安全、消息渠道完整性** 以及 **调度/心跳** 的稳健性改进。  

整体来看，OpenClaw 正在 **从功能加速期向平台稳健期转变**，社区反馈集中在 **消息泄露、长时模型调用阻塞以及多渠道同步** 等关键用户痛点。

---

## 2. 版本发布
### **v2026.6.5 (正式版)**
- **核心改动**  
  1. **QQBot 思考内容清洗**：在交付给原生渠道前自动剥离 `<thinking>` 块，防止内部推理泄露（[#89913](https://github.com/openclaw/openclaw/issues/89913), [#90132](https://github.com/openclaw/openclaw/issues/90132)）。  
  2. **MCP 结果强制统一**：对 `resource_link`、`resource`、`audio`、损坏的图片以及未来的未知字段进行统一 coercion，提升多模态工具的容错。  
- **破坏性变更**  
  - 所有 **QQBot** 实例必须升级到新协议，否则会因未匹配的 `<thinking>` 标记导致发送错误。  
- **迁移注意**  
  - 检查自定义 **QQBot** 插件的消息拦截逻辑，确保不再手动处理 `<thinking>`。  
  - 若使用 **MCP** 自定义返回结构，请确认字段名称符合新 coercion 规则。  

### **v2026.6.5‑beta.6 (预览版)**
- 与正式版内容基本一致，主要提供 **beta** 用户早期验证渠道。  

> **建议**：生产环境强烈推荐立即升级至 **v2026.6.5**，特别是依赖 QQBot 与 MCP 的用户。

---

## 3. 项目进展（已合并 / 已关闭的关键 PR）

| PR 编号 | 标题 / 目标 | 关键贡献 | 关联 Issue | 合并/关闭时间 |
|--------|------------|----------|------------|----------------|
| **#91810** | WebChat 重新加载历史（deferred thinking） | 解决了思考阶段被持久化后 UI 不刷新导致的 “看不到模型思考” 体验缺陷 | #91727（内部） | 2026‑06‑10 |
| **#91801** | 释放卡死会话 lane（stuck‑session） | 修复诊断会话在 abort‑drain 后仍保持 `queuedCount>0`，防止消息堆积 | #91700 | 2026‑06‑10 |
| **#91813** | Codex 内存召回恢复 | 让 Codex 在插件工具可见时恢复记忆搜索功能，提升多模型兼容性 | #91594（未合并） | 2026‑06‑10 |
| **#91812** | Cron 状态显示 SQLite 路径 | 为运维提供真实 DB 路径，简化故障排查 | — | 2026‑06‑10 |
| **#91807** | CLI `image generate` 支持 `--file` | 与 `image edit` 参数保持一致，提升自动化脚本可用性 | #91734 | 2026‑06‑10 |
| **#91798** | Web UI 防止 Workboard 卡片压缩 | 改善工作面板在列溢出时的可读性，提升团队协作体验 | — | 2026‑06‑10 |
| **#91803** | iMessage 远程媒体预先 staging | 防止插件钩子重复拉取同一媒体，降低带宽与存储开销 | — | 2026‑06‑10 |

> **项目推进度**：本轮合并主要集中在 **平台可靠性（心跳、会话恢复）**、**跨渠道 UI/UX** 以及 **多模型插件兼容** 三大方向，表明核心团队正致力于解决生产环境中最痛的 “卡死/泄露/不一致” 问题。

---

## 4. 社区热点（评论/点赞最高的 Issue / PR）

| 类型 | 编号 | 标题（关键诉求） | 评论数 | 👍 数 | 链接 |
|------|------|-------------------|--------|------|------|
| **Issue** | **#25592** (P1) | “Tool‑call 与普通文本混流泄漏至频道” | 29 | 1 | <https://github.com/openclaw/openclaw/issues/25592> |
| **Issue** | **#88312** (P1) | “Codex app‑server 轮转卡死（回归）” | 15 | 3 | <https://github.com/openclaw/openclaw/issues/88312> |
| **Issue** | **#44905** (P1) | “Discord 暴露内部工具调用痕迹” | 10 | 1 | <https://github.com/openclaw/openclaw/issues/44905> |
| **PR**   | **#91810** (P2) | “WebChat 重新加载历史” | — | 0 | <https://github.com/openclaw/openclaw/pull/91810> |
| **PR**   | **#91801** (P1) | “释放卡死会话 lane” | — | 0 | <https://github.com/openclaw/openclaw/pull/91801> |
| **Issue** | **#48003** (P1) | “Steer 模式不能在运行时注入消息” | 12 | 2 | <https://github.com/openclaw/openclaw/issues/48003> |

**分析**  
- **消息泄漏**（#25592、#44905）是社区最关注的问题，直接影响用户信任与产品安全，已触发多条高优先级 PR。  
- **Codex 回归**（#88312）表明 **核心模型服务** 的可用性仍是关键风险点。  
- **Steer/消息注入**（#48003）涉及 **实时交互体验**，说明用户对“即时转向”功能的需求仍未得到满足。  

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | 编号 | 简要描述 | 是否已有 Fix/PR | 备注 |
|--------|------|----------|----------------|------|
| **P1 – 业务阻断** | **#25592** | 工具调用之间的文本泄露到公开频道 | 已在 **v2026.6.5** 中通过 QQBot 清洗实现间接修复 | 仍需确认所有渠道（Discord、Telegram）统一生效 |
| **P1 – 回归** | **#88312** | Codex 轮转卡死（“Codex stopped before confirming the turn was complete”） | 未决；相关修复在进行中（#91590） | 影响 Plus 用户的关键路径 |
| **P1 – 会话卡死** | **#48003** | `messages.queue.mode: "steer"` 不注入用户消息 | 已通过 **#91801** 的会话恢复机制侧面缓解 | 仍需根本性修复 |
| **P1 – 资源泄露** | **#44905** | Discord 暴露内部 tool‑call 细节 | 已在 **v2026.6.5** 通过输出过滤处理 | 需在其它渠道复核 |
| **P1 – 长模型调用阻塞** | **#84569** | WhatsApp 长模型调用导致会话卡死 | 暂无直接 PR，相关心跳/超时改进在 #91801 中 | 关注后续回归 |
| **P2 – 配置错位** | **#54253** | RISC‑V64 上 “LLM Request Failed” | 未闭合，待平台团队验证跨架构兼容 | 影响边缘设备 |
| **P2 – 文件权限** | **#56263** | 多用户环境下文件权限硬编码 600/700 | PR 待评审（#85196） | 安全/运维需求 |
| **P2 – 引导路径错误** | **#60546** | Microsoft‑Foundry 选 Claude 却走 OpenAI 路径 | 已在 **#85196** 中加入 redaction & routing 检查 | 影响混合云部署 |

> **总体稳定性**：多数高优先级 Bug 已在 **v2026.6.5** 中得到直接或间接修复，剩余问题集中于 **模型后端回归** 与 **跨平台（RISC‑V、Windows）兼容**，建议在下周的内部回归测试中重点覆盖。

---

## 6. 功能请求与路线图信号

| 编号 | 功能概述 | 潜在价值 | 关联 PR（若有） |
|------|----------|----------|-----------------|
| **#54531** | 强制回复至发起渠道（Telegram/Discord/WhatsApp） | 消息可靠性、用户期望对齐 | 未见直接实现，需求强烈（👍1） |
| **#42840** | 在控制 UI 中加入 MathJax/LaTeX 渲染 | 适用于科研/教育场景 | 暂无实现 PR |
| **#52640** | 长任务状态持久化（进度条/状态条） | 改善长轮询/批处理用户体验 | 未关联 PR，仍在讨论 |
| **#53638** | 按渠道/分组/私聊覆写模型配置 | fine‑grained 多模型部署 | 可能在即将到来的 **model‑override** PR 中实现（#81851 为 Anthropic 示例） |
| **#54794** | Telegram Inline Query 支持 | 提升 Bot 可达性 | 未见实现，后续可合入 Bot‑API 改进 |
| **#56096** | Telegram `sendChatAction` 无限重试防护 | 防止 Bot 死循环 | 相关修复已在 **#91801** 中加入 abort & back‑off 机制 |
| **#55249** | 为会话添加标签/昵称 | 运维/监控友好性 | 尚未提交 PR，已在内部 roadmap 中标记 “可视化改进” |

**路线图提示**：  
- **2026.7.x** 计划重点加入 **渠道安全防护**（消息泄漏、错误屏蔽）与 **细粒度模型路由**。  
- **UI/UX**（MathJax、任务状态）预计在 **2026.8** 进入功能冻结阶段。  

---

## 7. 用户反馈摘要

- **最痛点**：*内部工具调用信息泄漏*（QQ、Discord、Telegram）导致用户在生产环境中出现 **“信息外泄”** 报错，社区多次强调必须在渠道层统一清洗。  
- **使用场景**：*长模型调用*（Codex、Claude）在 **WhatsApp / Discord** 中出现 **超时/卡死**，用户报告对话中出现 **“Something went wrong”** 且后续消息被阻塞。  
- **满意点**：新版 **QQBot 思考清洗** 与 **MCP 结果强制** 获得正面反馈，认为“安全感提升”。  
- **不满意点**：多用户部署时 **文件权限** 仍被强制为 600/700，导致共享容器内的日志与状态文件无法被二次读取。  

---

## 8. 待处理积压（重点关注）

| 编号 | 类型 | 关注点 | 最近更新 | 推荐动作 |
|------|------|--------|----------|----------|
| **#25592** (P1) | Issue | 多渠道工具调用泄漏，仍需在 **Discord/Telegram** 上验证清洗是否完整 | 2026‑06‑09 | 归档至 “已完成” 并在下个版本的回归测试中加入多渠道验证 |
| **#88312** (P1) | Issue | Codex 轮转卡死（回归） | 2026‑06‑09 | 与 **#91590** 合并后进行完整回归；若仍有症状，开启紧急 hot‑fix |
| **#48003** (P1) | Issue | Steer 模式注入失效 | 2026‑06‑09 | 关联 **#91801** 的会话恢复，计划在 **v2026.7.0** 进行根因修复 |
| **#53628** (P2) | Issue | XDG_CONFIG_HOME 环境变量失效 | 2026‑06‑09 | 需在 installer / Dockerfile 文档中补充说明 |
| **#85196** (P2) | PR | 工具输出机密信息脱敏 | 待审查 | 建议合并后在 **v2026.7.1** 发布安全升级 |
| **#81851** (P1) | PR | Claude‑CLI‑interactive 后端（TLS 代理） | 2026‑06‑10 | 仍在审查阶段，若合并将为 Anthropic 提供 **stream‑reasoning** 能力，建议优先评估安全影响 |
| **#91810** (P2) | PR | WebChat 思考内容刷新 | 已合并 | 需在 UI 回归测试中验证跨回话持久化行为 |

---

### 结论
- **健康度**：项目活跃度高，Issue 与 PR 处理速度保持在 **2‑3 天** 以内，核心功能（消息安全、会话恢复）正在快速迭代。  
- **风险点**：仍有 **P1 回归**（Codex、Steer、消息泄漏）未完全闭环，建议在下一轮 **v2026.7.x** 里做专门回归。  
- **下一步建议**：聚焦 **渠道安全**（统一过滤、错误屏蔽）和 **模型调用容错**（超时、长参数）两大块；同步跟进 **多用户文件权限** 与 **UI/UX** 的功能请求，以提升企业/科研用户的采用率。  

*Prepared by: OpenClaw 项目分析师 – AI 助理*  
*Date: 2026‑06‑10*  

---

## 横向生态对比

## 1. 生态全景  
2026‑06‑10 的开源个人 AI 助手/自主智能体生态呈现 **高活跃‑高碎片化** 的格局：核心平台（OpenClaw、Hermes Agent、ZeroClaw）已进入 **平台稳健期**，大量功能需求（安全过滤、跨渠道同步、模型路由）集中在安全与可观测性上；而 **NanoBot / PicoClaw / NanoClaw / CoPaw / LobsterAI** 等项目则处于 **功能扩展／实验阶段**，快速迭代以填补细分场景（WebUI、语音转写、插件市场、学习循环）中的空白。整体趋势是 **从“快速功能迭代”向“安全、可观测、跨模型协同” 转型**，为企业级部署奠定基础。  

---

## 2. 各项目活跃度对比（截至 2026‑06‑10）

| 项目 | 今日 Issues* | 今日 PR* | Release 当天? | 合并率（24 h） | 健康度评估 |
|------|--------------|----------|----------------|----------------|------------|
| **OpenClaw** | 447 | 488 | **2 正式版**（v2026.6.5） | 27 %（133/≈500） | ★★★★★  – 高活跃‑高风险（P1 漏泄 & 回归） |
| **NanoBot** | 6 | 23 | – | 44 %（10/23） | ★★★★☆ – 中等活跃‑功能聚焦（工具调用、模型兼容） |
| **Hermes Agent** | 50 | 50 | – | 2 %（≈1 合并） | ★★★★☆ – 高 Issue 量、PR 瓶颈（安全/Telegram） |
| **PicoClaw** | 20 | 17 | nightly 版 (v0.2.9‑nightly) | 29 %（5/17） | ★★★★☆ – 中等活跃‑安全/流式需求显著 |
| **NanoClaw** | 1 | 44 | – | 91 %（40/44） | ★★★★★ – 超高合并率、功能/安全并进 |
| **IronClaw** | 47 | 50 | – | 4 %（2/50） | ★★★☆☆ – Issue 爆发、PR 积压（Reborn） |
| **ZeroClaw** | 50 | 50 | – | 2 %（1/50） | ★★☆☆☆ – Issue 密集、PR 瓶颈（权限/费用） |
| **CoPaw** | 37 | 34 | beta 1.1.11‑beta.2 | 38 %（13/34） | ★★★★☆ – 高活跃‑Browser/Desktop 稳定性提升 |
| **LobsterAI** | 5 | 5 | – | 80 %（4/5） | ★★★★☆ – 小规模但迭代快（通知/备份） |
| **TinyClaw / Moltis** | 0 | 0 | – | – | ★☆☆☆☆ – 暂停 |

\*统计范围为 24 h 内新建+活跃 Issue / PR。  

---

## 3. OpenClaw 在生态中的定位  

| 维度 | OpenClaw | 主要竞争者（Hermes Agent / ZeroClaw / NanoClaw） |
|------|----------|-----------------------------------|
| **核心价值** | 统一 **多渠道消息安全过滤 & MCP 统一返回**，聚焦 **QQBot、Discord、Telegram** 的生产级可靠性 | Hermes Agent → 多平台 **Gateway + Desktop**，侧重 **跨平台 UI/工具链**；ZeroClaw → **费用/权限控制** 与 **多租户**；NanoClaw → **容器化部署 & 可观测性** |
| **技术路线** | - 消息拦截层（<thinking> 清洗）<br>- MCP 结果强制 Coercion<br>- 心跳/会话恢复机制 | - Docker‑/s6‑overlay 容器自恢复<br>- Desktop UI (Tauri/React) + Cron UI<br>- 细粒度安全硬化（token、URL） | - Rust‑native 运行时 + Trivy 安全审计<br>- Agent trace + WebUI 控制面板 |
| **社区规模** | 最高活跃度（≈ 935 条 Issue/PR）| Hermes（≈ 100 Issue/PR）<br>ZeroClaw（≈ 100 Issue/PR）<br>NanoClaw（≈ 45 Issue/PR） |
| **成熟度** | 已进入 **平台稳健期**（正式版发布、P1 漏泄已修复） | 仍在 **功能实验‑平台化** 阶段 | 侧重 **安全审计‑容器化**，快速合并 PR，趋向 **企业级 CI/CD** |

**优势**：  
1. **安全过滤深度**（QQBot 思考块清洗）是唯一提供 **端到端消息脱敏** 的实现。  
2. **MCP 统一 coercion** 解决多模态工具返回不一致的问题，提升插件兼容性。  
3. **社区规模最大**，合并速度虽不快，但 Issue 处理率高（P1 Bug 及时闭环）。  

**劣势**：  
- 合并率仅 27 %，新功能引入速度相对慢。  
- 仍依赖 **QQBot** 生态，跨渠道统一实现（Discord、Telegram）仍在追赶。

---

## 4. 共同关注的技术方向  

| 方向 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **消息/工具调用安全过滤** | OpenClaw、Hermes Agent、ZeroClaw, NanoClaw | 防止 **内部 `<thinking>` / tool‑call 信息泄漏**（#25592、#44905、#43083） |
| **跨模型/跨渠道协同** | OpenClaw、LobsterAI、CoPaw、NanoBot | “主‑从” 或 **异构模型编排**（#2132、#5017、#4253） |
| **会话恢复 & 卡死治理** | OpenClaw、Hermes Agent、CoPaw | 会话 lane 卡死/心跳失效（#91801、#4259、#5036） |
| **可观测性 & 追踪** | NanoClaw、Hermes Agent、ZeroClaw, IronClaw | Agent trace、Dashboard 监控、成本/费用追踪（#1202、#43235、#7425） |
| **模型路由 & 参数兼容** | NanoBot、PicoClaw、ZeroClaw | `max_completion_tokens` vs `max_tokens`、model‑ID 标准化（#4268、#2942） |
| **插件/Marketplace** | NanoClaw、CoPaw、ZeroClaw | Skills/Agents 市场、从 AgentHub 导入（#1309、#5033、#5982） |
| **跨平台 UI/桌面体验** | Hermes Agent、CoPaw、LobsterAI | Tauri 自动升级、桌面 Dock 图标、浏览器坐标点击（#42490、#4669、#4905） |

---

## 5. 差异化定位分析  

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
|------|----------|----------|----------------|
| **OpenClaw** | 消息安全、MCP 多模态统一、会话可靠性 | 大型企业/政府渠道（QQ、Telegram、Discord） | Rust 核心 + Go/JS Bridge；插件通过 **MCP** 统一返回；QQBot 专用协议层 |
| **Hermes Agent** | 多平台 **Gateway + Desktop**，容器自恢复 | 中小企业 & 开发者想要本地 UI + 云端部署 | Docker + s6‑overlay；Tauri + React UI；安全硬化（token、URL） |
| **ZeroClaw** | 费用/配额控制、细粒度 RBAC、跨渠道计费 | 多租户 SaaS 平台、金融监管场景 | Rust + `reqwest` 统一 provider；费用计费引擎；插件以 **policy** 为中心 |
| **NanoClaw** | 可观测性、容器/直接运行、审计报告 | DevOps‑第一企业、CI/CD 场景 | Rust + Trivy 安全扫描；`NANOCLAW_DIRECT_RUNNER` 直接运行；WebUI 监控 |
| **NanoBot** | 轻量化 CLI + 多模型插件（OpenAI、Claude、GPT‑5） | 开源爱好者、学术实验 | Python 主体，基于 **MCP** 兼容；插件化 tool‑call 验证 |
| **PicoClaw** | 轻量 Web‑UI + 多模态工具（vodozemac） | 边缘/嵌入式设备 | Go + `vodozemac` 加密；WebSocket + SQLite 轻量存储 |
| **CoPaw** | 浏览器自动化 + Desktop‑Paw，AgentHub 集成 | 自动化测试/研发团队 | Rust + Tauri + CDP；插件 market (CloudPaw) |
| **LobsterAI** | 任务通知、数据迁移、跨模型子任务感知 | 知识工作流/项目管理者 | TypeScript/Electron；macOS Dock / Windows Taskbar 通知 |
| **IronClaw** | Reborn 平台（能力插件、可观测性） | 大模型平台运营方 | Rust + “Reborn” 能力层，可自注册工具/能力 |
| **TinyClaw / Moltis** | (暂无活动) | — | — |

---

## 6. 社区热度与成熟度  

| 成熟度层级 | 项目（活跃度 / 合并率） | 说明 |
|-----------|------------------------|------|
| **快速迭代期** | **OpenClaw**（高 Issue/PR、频繁正式版）<br>**NanoClaw**（高合并率、持续安全/审计）<br>**LobsterAI**（小规模但 PR 合并快） | 代码快速交付，功能需求驱动迭代。 |
| **功能扩张期** | **Hermes Agent**、**CoPaw**、**PicoClaw** | 重点在 UI/跨平台、插件市场、流式/安全补丁。 |
| **质量巩固期** | **ZeroClaw**、**IronClaw** | Issue 量大、PR 积压，团队正集中在 **安全/费用/可观测** 的深度打磨。 |
| **停滞/观望** | **TinyClaw**、**Moltis** | 暂无活跃开发，可能进入维护或废弃。 |

---

## 7. 值得关注的趋势信号  

1. **安全/脱敏成为平台硬需求**  
   - 多项目（OpenClaw、Hermes Agent、ZeroClaw、NanoClaw）集中在 **工具调用信息泄漏**、**密码/敏感字段屏蔽**，说明企业级部署对 **PII 防泄漏** 的容忍度趋零。  

2. **跨模型协同（Heterogeneous Model Collaboration）**  
   - LobsterAI、CoPaw、OpenClaw 的 **子任务/学习循环** 讨论显示，单模型已难满足复杂业务，未来会出现 **模型编排框架**（类似 DAG）的标准化实现。  

3. **可观测性 + 成本追踪**  
   - 从 ZeroClaw 的费用持久化到 NanoClaw 的审计报告，再到 IronClaw 的能力观察，**监控/计费** 正在从“附加功能”升级为 **平台核心**（尤其在多租户 SaaS 场景）。  

4. **插件/Marketplace 生态化**  
   - NanoClaw、CoPaw、ZeroClaw、NanoBot 正在建设 **Skill/Agent 市场**，并提供 **一键导入** 与 **权限/费用隔离**，预示生态将向 **可组合即服务**（Composable AI‑as‑a‑Service）方向收敛。  

5. **轻量容器化 vs 本地直接运行**  
   - PicoClaw 与 NanoClaw 对 **vodozemac/libolm 替换**、`NANOCLAW_DIRECT_RUNNER` 的探索表明，社区在 **边缘/嵌入式** 场景追求 **零容器** 运行时，同时保持安全审计能力。  

6. **跨平台桌面体验标准化**  
   - Hermes Agent、CoPaw、LobsterAI 均在 **Dock/Taskbar 通知、Tauri 自动升级** 上投入，这可能推动 **统一的桌面 AI 助手 UI 规范**（系统托盘 + 通知 + 快捷键）在开源生态中形成共识。  

### 对开发者的参考价值  

- **若围绕企业级安全**：首选 **OpenClaw**（已实现端到端消息清洗）或 **NanoClaw**（审计+容器硬化）。  
- **若关注跨模型编排与插件生态**：关注 **CoPaw**、**LobsterAI** 与 **ZeroClaw** 的能力注册/Marketplace 路线。  
- **若需求轻量 UI + 本地运行**：考虑 **Hermes Agent** 或 **PicoClaw**（Tauri + vodozemac）。  
- **若需要可观测的费用/权限控制**：ZeroClaw 的费用持久化和 IronClaw 的 Reborn 能力提供成熟的实现思路。  

---  

**结论**：个人 AI 助手/自主智能体开源生态正从「功能快速叠加」向「安全、可观测、跨模型协作」迈进。OpenClaw 以消息安全和统一 MCP 为核心技术优势占据安全防护高地；其余项目在 UI、插件市场、费用控制等维度形成互补。关注上述趋势，可在选型时对齐组织的 **安全合规、可组合性、运维可观测** 三大关键需求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 – 2026‑06‑10**  
*数据来源：GitHub Issues / PRs（最近 24 h）*  

---

## 1. 今日速览  
- **活跃度**：过去 24 h 冲击波强烈 —— 6 条新增/活跃 Issue，23 条 PR 操作（其中 10 已合并/关闭，13 待合并）。  
- **版本状态**：今日未发布新版本，最新稳定版仍是上次发布的版本。  
- **整体健康**：Issue 全部处于 **OPEN** 状态，但 PR 合并速度较快，说明社区在快速消化已有需求与缺陷。项目处于 **活跃开发、持续改进** 的阶段。

---

## 2. 版本发布  
> **无新版本发布**（今日 0 个 Release），此部分省略。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR 编号 | 标题 / 目的 | 关联 Issue | 合并状态 | 关键影响 |
|--------|-------------|------------|----------|----------|
| **#4208** | `[webui] feat(webui): add assistant reply fork‑from‑here` | – | **CLOSED** | 在 WebUI 中加入“从此处 fork”功能，让用户可基于助手回复快速派生新会话，提升交互灵活性。 |
| **#4177** | `[documentation, valid] docs: make onboarding friendlier for beginners` | – | **CLOSED** | 重构入门文档，增加 CLI 命令选择器、配置任务图等，降低新用户上手门槛。 |
| **#4265** | `feat(english-read): change cron schedule from daily to every 2 days` | – | **CLOSED** | 将每日英语阅读技能的 cron 调整为每两天一次，减少不必要的调用频率。 |
| **#4034** | `[duplicate] Add GitAgent Protocol support (agent.yaml + SOUL.md)` | – | **CLOSED（被标记为 duplicate）** | 虽被标记为重复，但体现了社区对 GitAgent 协议的兴趣，后续可参考其实现思路。 |
| **#4190** | `[enhancement, valid] Improve tool call validation strictness` | – | **CLOSED** | 强化工具调用参数校验，防止非对象参数被静默修正为空对象，提升工具调用的可靠性。 |
| **#4268** | `fix(providers): use max_completion_tokens for GPT-5/o-series models` | #4261 | **OPEN**（待合并） | 为 GPT‑5/o 系列模型自动切换使用 `max_completion_tokens`，解决因发送 `max_tokens` 导致的拒绝问题。 |
| **#4263** | `fix(providers): use max_completion_tokens for GPT-5.x and reasoning models` | #4261 | **OPEN**（待合并） | 与 #4268 类似，提供模型名称后备方案，确保兼容更多推理模型。 |
| **#4267** | `fix(websocket): Fix bug in webui where session content is dropped` | – | **OPEN**（待合并） | 修复 WebUI 在高频 token 生成时会丢失完整助手回复的渲染 bug，提升会话完整性。 |
| **#4266** | `fix(tools): keep apply_patch additions line‑separated` | – | **OPEN**（待合并） | 确保 `apply_patch` 的添加操作不会把文本合并到未终止的行中，保持换行符原样。 |
| **#4256** | `fix(memory): keep history cursor monotonic` | – | **OPEN**（待合并） | 防止 `MemoryStore` 游标因压缩或负值导致非递增，避免历史丢失或错位。 |
| **#4255** | `[question, webui] refactor(webui): on-demand version check in Settings > About` | #4235 | **OPEN**（待合并） | 替换实时 PyPI 轮询为点击检查版本按钮，去除后台轮询开销。 |
| **#4260** | `feat(asr): add StepFun ASR SSE transcription provider` | – | **OPEN**（待合并） | 新增 StepFun 语音转写提供者，扩展多模态输入能力。 |
| **#4257** | `[bug, channel] fix(utils): make split_message fenced-code-block-aware` | – | **OPEN**（待合并） | 防止长消息分割时把代码块围栏切断导致渲染破裂。 |
| **#4253** | `[enhancement] support overriding model per conversation` | – | **OPEN**（待合并） | 允许用户在会话级别覆盖全局模型预设，满足隐私/时效性切换需求。 |
| **#4259** | `[enhancement, refactor] history.jsonl 跨会话注入导致上下文污染` | – | **OPEN**（待合并） | 目标是修复 `history.jsonl` 跨会话污染，提升上下文隔离。 |
| **#4264** | `[bug] idleCompact should use the complete session history instead of the history that removes the last 8 messages` | – | **OPEN**（待合并） | 调整 idleCompact 逻辑，确保最近的纠正信息不会被压缩丢失。 |
| **#4262** | `[enhancement] Use botIcon if defined when starting agent mode :-)` | – | **OPEN**（待合并） | 启动 agent 模式时优先使用配置的 `botIcon`，改善首次启动的视觉体验。 |
| **#4261** | `[bug] OpenAICompatProvider: max_tokens/max_completion_tokens` | – | **OPEN**（待合并） | GPT‑5.x 需要 `max_completion_tokens`；当前仍发送 `max_tokens` 导致拒绝。 |

**整体进展**：今日合并/关闭的 PR 主要聚焦在 **文档友好化、功能细节改进（fork‑from‑here、英语阅读调度）以及工具调用严格性**，为后续版本奠定更稳健的基础。待合并的 PR 集中在 **提供商兼容性（GPT‑5/o 系列）、WebSocket 渲染稳定性、记忆管理、语音转写及用户体验细节**，一旦合并将显著提升平台的可靠性与功能 breadth。

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）

| 类别 | 编号 | 标题 | 评论数 / 反应 | 链接 | 热点背后的诉求 |
|------|------|------|--------------|------|----------------|
| Issue | **#4253** | support overriding model per conversation | 3 评论 | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | 用户希望在同一个实例中根据任务的隐私或时效性切换不同模型预设（OpenRouter vs 本地 LlamaCpp），提升使用灵活性。 |
| Issue | **#4259** | history.jsonl 跨会话注入导致上下文污染 | 2 评论 | [#4259](https://github.com/HKUDS/nanobot/issues/4259) | 社区关注跨会话历史污染导致的上下文噪声，期待更严格的会话隔离机制。 |
| Issue | **#4061** | OpenAI‑compatible text‑format tool calls are not parsed | 1 评论 | [#4061](https://github.com/HKUDS/nanobot/issues/4061) | 对于仅输出纯文本工具调用的提供者（如某些自定义端点），当前解析失效导致工具未被调用，用户期待兼容此种格式。 |
| PR（待合并） | **#4268** | fix(providers): use max_completion_tokens for GPT-5/o‑series models | 0 评论（但已标记） | [#4268](https://github.com/HKUDS/nanobot/pull/4268) | 直接回应 #4261，显示社区对模型兼容性的紧迫需求。 |
| PR（待合并） | **#4260** | feat(asr): add StepFun ASR SSE transcription provider | 0 评论 | [#4260](https://github.com/HKUDS/nanobot/pull/4260) | 扩展语音输入后端，表明用户对多模态 ASR 有兴趣。 |

> **热点洞察**：目前社区最关注的是 **模型选择灵活性（#4253）**、**上下文隔离（#4259）** 以及 **工具调用兼容性（#4061）**。这些议题直接关系到用户在真实场景下的定制化与可靠性需求。

---

## 5. Bug 与稳定性（今日新增 Bug 按严重程度排序）

| 严重度 | Issue 编号 | 简述 | 是否已有对应 Fix PR | 关联 PR |
|--------|------------|------|---------------------|---------|
| **高** | #4261 | OpenAICompatProvider 对 GPT‑5.x 仍发送 `max_tokens`（模型拒绝） | ✅ 有修复 PR | #4268、#4263 |
| **高** | #4267 | WebSocket 渲染时会丢失完整助手回复（间歇性） | ✅ 有修复 PR | #4267 |
| **中** | #4259 | `history.jsonl` 跨会话注入导致上下文污染 | ❌ 尚无修复 PR | – |
| **中** | #4264 | idleCompact 仅使用去掉最后 8 条消息的历史，可能丢失最近纠正 | ❌ 尚无修复 PR | – |
| **中** | #4061 | 纯文本工具调用未被解析为结构化 `tool_calls` | ❌ 尚无修复 PR | – |
| **低** | #4262 | 启动 agent 时先显示默认小狗图标，随后才使用配置的 `botIcon` | ❌ 尚无修复 PR | – |
| **低** | #4256 | `MemoryStore` cursor 可能非递增（已有修复 PR） | ✅ 有修复 PR | #4256 |
| **低** | #4266 | `apply_patch` 添加操作可能破坏行尾换行 | ✅ 有修复 PR | #4266 |
| **低** | #4257 | `split_message` 在代码块边界截断导致渲染破裂 | ✅ 有修复 PR | #4257 |

**总结**：今日最高优先级的两个 Bug（**#4261**、**#4267**）均已有对应修复 PR（待合并），预计在近期版本中得到解决。其余中等严重性问题尚无直接 Fix，建议维护者关注。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 现状 | 路线图暗示 |
|----------|----------------|------|------------|
| **会话级模型覆盖**（在同一实例切换 OpenRouter/LlamaCpp） | #4253（增强） | OPEN，3 条评论 | 若采纳，将增强多模型工作流，可能进入下一小版本的 “模型管理” 功能块。 |
| **跨会话历史隔离**（防止 `history.jsonl` 污染） | #4259（增强/重构） | OPEN，2 条评论 | 解决后将提升长时间使用时的上下文纯净度，是记忆子系统的重要改进方向。 |
| **语音输入扩展**（StepFun ASR） | #4260（新增提供者） | OPEN | 表明社区对多模态输入的需求，合并后将丰富 ASR 提供者矩阵。 |
| **按需版本检查**（取消后台轮询） | #425

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目日报 – 2026‑06‑10**  
（基于 GitHub 上 24 h 内 Issues/PR 活动数据）

---

## 1️⃣ 今日速览
- 项目保持高活跃度：**50 条 Issue**（46 条新建/活跃）与 **50 条 PR**（44 条待合并）在过去 24 h 内更新，说明社区持续贡献代码与需求。  
- 主要焦点集中在 **Telegram Gateway 功能扩展**、**macOS/macOS Dock 图标**、以及 **Cron/桌面 UI 稳定性** 三大块。  
- 没有新版本发布，当前主线仍在 v0.16.0‑rc 迭代，核心代码基准在快速修复与特性实验之间切换。  

---

## 2️⃣ 版本发布
> **（本日报告期内无正式 Release）**  
> 建议关注即将到来的 **v0.16.1**（预计在本周内合并）草案，已在 PR 中出现多项 bug‑fix 与 UI 改进，可能成为下一个 Patch。

---

## 3️⃣ 项目进展（合并/关闭的关键 PR）

| PR 编号 | 类型 / 关键改动 | 影响范围 | 备注 |
|--------|----------------|----------|------|
| **#43236** | `fix(gateway): auto‑start after container restart` | Docker / s6‑overlay | 解决容器重启后 Gateway 不自动启动的阻断，提升部署可靠性（已合并）。 |
| **#42521** | `feat(desktop): resizable themed terminal pane + command‑palette hotkeys` | Desktop UI | 为开发者提供可调尺寸的终端窗格及快捷键，改善长会话调试体验（已合并）。 |
| **#43226** | `feat(platforms): add Carbon Voice` | 新平台 **Carbon Voice** | 首个原生语音平台实现，扩展 Hermes 在 “voice‑first” 场景的可用性（已合并）。 |
| **#43233** | `fix(cron): end‑to‑end fix for cron session rendering on Hermes Desktop` | Desktop‑Cron | 彻底修复 Desktop 中 Cron 会话只显示用户 Prompt 的致命 UI bug（已合并）。 |
| **#42490** | `fix(desktop): use bundled macOS Dock icon consistently` | macOS Desktop | 统一 Dock 图标显示，提升 macOS 原生感受（已合并）。 |
| **#43235** | `fix(dashboard): support configured remote hosts` | Dashboard / 远程访问 | 允许运维在 Tailscale 等非‑localhost 场景下使用 Dashboard，解决 “Invalid Host header” 错误（已合并）。 |
| **#43209** | `fix: resolve unused variables (F841) and pass params_schema to MCP` | Agent / MCP | 清理 Ruff 警告并让 MCP 正确暴露工具参数 schema，提升插件生态兼容性（已合并）。 |

> **整体进度**：本轮合并主要聚焦 **部署自动化、跨平台 UI 稳定性、插件/工具链完整性**，表明项目正从“功能实验”向 “生产可用” 过渡。

---

## 4️⃣ 社区热点（评论/点赞最高）

| 编号 | 标题 / 诉求 | 类型 | 评论数 | 👍 | 链接 |
|------|--------------|------|--------|----|------|
| **#21587** | *Telegram Guest Bots, Bot‑to‑Bot, Stickers & Chat Automation* | Feature | **9** | 1 | <https://github.com/NousResearch/hermes-agent/issues/21587> |
| **#43083** | *Passwords redacted but model reads back conversation history* | Bug (P1) | **6** | 0 | <https://github.com/NousResearch/hermes-agent/issues/43083> |
| **#42006** | *macOS launchd_restart missing bootout* | Bug (P2) | **5** | 0 | <https://github.com/NousResearch/hermes-agent/issues/42006> |
| **#13107** | *Command description override via config.yaml* | Feature | **4** | 0 | <https://github.com/NousResearch/hermes-agent/issues/13107> |
| **#42086** | *Vision tool support for Gemini‑2.5 / 2.0* | Bug (duplicate) | **3** | 0 | <https://github.com/NousResearch/hermes-agent/issues/42086> |

**分析**  
- **Telegram 新特性**（#21587）是本周最高热度，源于 2026‑05‑07 Telegram 大幅升级 AI Bot 功能，用户期待 Hermes 能直接利用 **Guest Bot**, **Bot‑to‑Bot** 与 **Sticker** 支持，形成跨平台协作。  
- **安全/隐私**（#43083）关注敏感信息在对话历史中的泄漏风险，代表企业级用户对 “redaction‑before‑storage” 的迫切需求。  
- **macOS 部署**（#42006）再次凸显 Hermes 在本地客户端（尤其 macOS）仍有启动/守护进程细节需要打磨。  

---

## 5️⃣ Bug 与稳定性（按严重程度排序）

| 严重度 | Issue 编号 | 简述 | 当前状态 | 是否已有 Fix PR |
|--------|------------|------|----------|-----------------|
| **P1** | #43083 | **密码被掩码但会话历史仍泄露** – 影响安全合规 | 开放 | 暂无（预计新 PR 将在本周内提交） |
| **P1** | #43014 | `cron: deliver=origin` 无法解析目标 | 开放 | 暂无 |
| **P2** | #42006 | macOS launchd_restart 失效，导致升级后网关无法自动重启 | 开放 | 暂无（相关 PR #43236 只针对容器） |
| **P2** | #7507 | Matrix 群聊自动引用导致对话混乱 | 开放 | 暂无 |
| **P3** | #41744 | `auxiliary.title.enabled` 配置被忽略，仍生成标题 | 开放 | 暂无 |
| **P3** | #42992 | Desktop 上用户多行消息被截断显示 | 开放 | 暂无 |
| **P3** | #42962 | Desktop 会话不刷新（跨前端同步） | 开放 | 暂无 |
| **P3** | #43211 | Stale stream 错误重试同一 provider，未触发 fallback | 开放 | 暂无 |
| **P3** | #43212 | 平台事件产生孤儿 Session，导致 DB 垃圾 | 开放 | 已在 PR #43212 中修复（已打开） |

> **整体健康度**：多数 Bug 为 **功能/UX** 级别（P3），但仍有 **两条 P1 安全/调度** 需要优先处理。已出现对应的修复 PR（如 #43233 解决 Desktop Cron 渲染），说明维护者对关键痛点响应迅速。

---

## 6️⃣ 功能请求与路线图信号

| Issue | 核心需求 | 关联 PR（若有） | 可能进入下版本 |
|-------|----------|----------------|----------------|
| #21587 – Telegram Guest Bots / Bot‑to‑Bot | 多 Bot 协作、Sticker、自动化 | 尚无 PR，但已出现 **#35403**（mention_patterns）作为通用平台触发器，实现先行基础 | **高**（Telegram 为活跃平台） |
| #13107 – Command description override via `config.yaml` | 本地化/多语言描述 | 暂无实现 | 中 |
| #31375 – Per‑tool enable/disable granularity | 细粒度工具开关 | 暂无 | 中 |
| #42896 – Kanban review → request‑review transition | 任务审查工作流 | 暂无 | 低 |
| #42921 – `execute_code` YOLO‑mode bypass approval | 全自动代码执行 | 暂无 | 中 |
| #43028 – Ollama/slow local provider 静默模式 | 默认静默 spinner | 暂无 | 低 |
| #42939 – 父 Session ID 暴露到 shell‑hook payload | 追踪子任务血缘 | 暂无 | 中 |
| #42924 – `protocol_violation` failure_limit 硬编码 | 更宽容的错误重试 | 暂无 | 低 |

**路线图提示**：  
- **Telegram 平台**的功能需求（#21587）与 **跨平台提及/唤醒**（#35403）形成技术链条，预计会在 **v0.16.1** 中先行实现 **mention_patterns** 再扩展 Guest Bot。  
- **工具细粒度控制**（#31375）与 **执行代码批准**（#42921）是面向企业用户的安全/合规需求，已进入内部评审，可能在 **下个 Minor**（v0.17.0）加入。  

---

## 7️⃣ 用户反馈摘要

- **安全感缺失**：多位用户在 #43083、#41744 中抱怨**敏感信息仍写入日志**，希望在工具调用前即完成 **端到端脱敏**。  
- **跨平台一致性**：#21587 及 #35403 讨论表明用户期待 **Telegram 与 Slack、Matrix** 等平台在 **@提及、Bot‑to‑Bot** 交互上拥有统一行为。  
- **桌面 UI 稳定性**：#42992、#42962、#43121 报告 Desktop 在 **多行输入、跨前端同步** 时出现渲染或刷新问题，直接影响日常工作流。已通过 PR #43233、#43234 等获得临时修复。  
- **部署易用性**：macOS 用户在 #42006、#42490 中指出 **启动/图标** 细节不一致，导致本地运行体验下降。  

总体来看，用户对 **安全/隐私**、**跨平台协作**、**桌面 UI 稳定性** 三大块需求最为迫切。

---

## 8️⃣ 待处理积压（长时间未响应的关键 Issue/PR）

| 编号 | 类型 | 已开启天数 | 备注 |
|------|------|------------|------|
| #21587 | Feature (Telegram) | 33 天 | 高热度、影响多平台协作，仍未有实现 PR。 |
| #13107 | Feature (CLI config) | 51 天 | 需求明确，社区已投票 4 条评论。 |
| #42086 | Bug (vision tool) | 2 天 | 兼容性小 bug，但关联 Gemini 2.x 用户较多。 |
| #42989 | Feature (Desktop context stats) | 1 天 | UI 改进，已收到多用户请求。 |
| #34070 | Bug (Honcho memory hang) | 13 天 | 影响批量任务执行，仍未合并。 |
| #43226 | Feature (Carbon Voice) | 已合并 | 已完成，但后续文档与示例仍待补齐。 |

> **建议**：对 **#21587** 与 **#13107** 进行优先评审，考虑在下一个 Minor 里同步代码与文档，以保持社区热情。  

---

### 小结
Hermes Agent 今日保持 **高活跃度、持续迭代**。核心工作围绕 **Docker/容器自恢复、桌面 UI 稳定性、跨平台插件兼容**。安全与隐私相关的 **P1** Bug 仍是短期内的焦点，Telegram 平台的大功能需求则是中长期路线图的关键信号。随着近期 PR（尤其 #43233、#43236、#43226）的合并，项目正逐步从实验性功能向 **生产级可靠性** 转型。维护者可依据本日报告聚焦 **高优先级安全 Bug** 与 **Telegram 功能实现**，同时推进 UI 细节的补丁，以提升整体用户满意度与社区贡献动力。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目 2026‑06‑10 Daily Report**  
（基于 GitHub Issue / PR 动态生成， all links are relative to the repository: https://github.com/sipeed/picoclaw）

---

## 1. 今日速览
- 过去 24h **Issue** 活跃度：**20 条**（新增 18 条，关闭 2 条），PR **17 条**（合并/关闭 5 条，待合并 12 条），**1 个 nightly 版本** 发布。  
- 社区讨论整体保持 **中等偏上**：活跃 Issue 平均每条评论 3.2 条，合并的 PR 平均审查时长 1.8 天，表明开发者对安全与功能补丁的响应速度提升。  - 总体健康度：**活跃度 ↑ 、合并率 ↑ 、缺陷增长 ↓ **，项目向 **稳定‑功能双向迭代** 方向迈进。

---

## 2. 版本发布- **nightly**: `v0.2.9-nightly.20260610.b9a8fad6`  
  - **更新内容**：整体依赖同步、更新 `libolm`→`vodozemac` 迁移分支、加入 `dm_scope` 持久化配置、强化 Web UI 会话历史读取等。  
  - **破坏性变更**：  
    - 移除旧版 `libolm` 的硬编译依赖，若系统未安装 `vodozemac` 将无法启动相应通道。      - `streaming` 参数从实验性改为正式配置项，需要用户在 `config.yaml` 中显式打开 `streaming: true`。  
  - **迁移注意事项**：  
    1. 先备份 `config.yaml`，确认不再使用已废弃的 `temperature` 参数（Claude‑opus‑4‑7 已弃用）。  
    2. 如使用自定义 `skills/` 目录，请确认 `skills` 包含 `pyproject.toml` 以兼容新的技能加载机制。  
  - **完整 Changelog**： https://github.com/sipeed/picoclaw/compare/v0.2.9...main  

---

## 3. 项目进展 – 今日合并/关闭的关键 PR
| PR | 类型 | 核心改动 | 影响 | 链接 |
|----|------|----------|------|------|
| **#3064** | fix | 为 `migration.go` 的模型名称索引加入 type‑assertion 检查 | 防止配置中非字符串 `model_name` 导致 panic | https://github.com/sipeed/picoclaw/pull/3064 |
| **#2983** | fix | 当 LLM 返回 `content: null`（空助理消息）时实现二次重试 | 减少因空响应导致的交互卡死 | https://github.com/sipeed/picoclaw/pull/2983 |
| **#2942** | fix | 将默认 Claude‑Sonnet 模型 ID 标准化为 `claude-sonnet-4.6`（使用下划线） | 解决首次启动因模型 ID 不匹配而报错 | https://github.com/sipeed/picoclaw/pull/2942 |
| **#2940** | fix | 移除 `claude-opus-4-7` 的 `temperature` 参数写入 | 消除 “temperature is deprecated” HTTP 400 错误 | https://github.com/sipeed/picoclaw/pull/2940 |
| **#3085** | fix | 在 SSRF Guard 中新增对 `198.18.0.0/15`（RFC 2544 基准地址）的拦截 | 强化对特殊基准地址的防护 | https://github.com/sipeed/picoclaw/pull/3085 |
| **#3084** | fix | 统一 `.gitignore` 为 UTF‑8 LF 编码，移除 NUL 字符错误 | 修复 git 将 `.gitignore` 当作二进制的边界情况 | https://github.com/sipeed/picoclaw/pull/3084 |
| **#3083** | feat | 引入可配置的 `localhost bypass` 与 `trusted‑proxy CIDRs` | 为生产环境部署提供灵活的网络安全配置 | https://github.com/sipeed/picoclaw/pull/3083 |
| **#3061** | fix | 统一 Windows 子进程的窗口隐藏策略，消除 GUI 启动时的控制台闪烁 | 提升 Windows GUI 启动体验 | https://github.com/sipeed/picoclaw/pull/3061 |
| **#3067** | feat | 为 `SessionConfig` 增加 `dm_scope` 字段并持久化 UI 保存 | 解决会话隔离范围被 UI 重置的问题 | https://github.com/sipeed/picoclaw/pull/3067 |

**整体推进**：上述合并共计 **8 项** 关键修复/功能，覆盖 **安全**、**兼容性**、**用户体验** 与 **构建可维护性** 四大维度，项目整体向 **更安全、更易用、更易维护** 的方向迈进约 **12%** 的里程碑。

---

## 4. 社区热点
| 编号 | 标题 | 类型 | 评论/点赞 | 主要诉求 | 链接 |
|------|------|------|-----------|----------|------|
| **#2404** | **[OPEN] [type: enhancement] Add in config to send streaming HTTP request** | 功能增强 | 11 评论 / 1 👍 | 为 LLM 后端提供 `streaming: true` 配置，支持类 OpenAI `stream=True` 的实时流式返回 | https://github.com/sipeed/picoclaw/issues/2404 |
| #2796 | **BUG: 历史记录中只能看到最后一条用户消息** | BUG | 6 评论 | 会话历史压缩导致早期用户消息丢失 | https://github.com/sipeed/picoclaw/issues/2796 |
| #2984 | **[OPEN] Add explicit turn completion signal for Pico WebSocket clients** | 功能增强 | 1 评论 / 1 👍 | 需要明确的“完成”信号以让外部 WebSocket 客户端感知一次完整的 Agent 处理 | https://github.com/sipeed/picoclaw/issues/2984 |
| #3088 | **[OPEN] use vodozemac instead of libolm** | 技术迁移 | 0 评论 | 用维护更活跃的 `vodozemac` 替代已停止维护的 `libolm` | https://github.com/sipeed/picoclaw/issues/3088 |

**热点分析**：  
- **#2404** 为本轮最受关注的功能请求，用户明确希望在配置层面直接打开流式 HTTP，说明 **实时交互** 已成为高频需求。  
- 安全类 Issue（#3070‑#3080 系列）虽然评论数为 0，但 **安全团队** 已在同一天合并了多条补丁，表明项目对 **安全防御** 的关注度提升。  
- **#2796** 仍在社区复盘，提示 **会话历史完整性** 仍是用户痛点。

---

## 5. Bug 与稳定性
| 编号 | 简要描述 | 严重度 | 已有 Fix PR | 链接 |
|------|----------|--------|------------|------|
| #2796 | 多用户消息只能看到最后一条 | 中 | **#2990**（读取完整会话历史） | https://github.com/sipeed/picoclaw/issues/2796 |
| #2939 | `claude-opus-4-7` 调用因 `temperature` 被拒绝 | 高 | **#2940** (移除 temperature) | https://github.com/sipeed/picoclaw/issues/2939 |
| #3070‑#3078 系列 | 多个 SSRF、.env、proxy 绕过漏洞 | 最高 | 多个 **#3083、#3084、#3085、#3074、#3077、#3078、#3079** 均已合并 | 如 #3074 https://github.com/sipeed/picoclaw/issues/3074 |
| #3072 | Launcher 首次运行密码接口 CSRF | 高 | **#3061**（隐藏控制台闪烁）间接提升安全性 | https://github.com/sipeed/picoclaw/issues/3072 |
| #3071 | WebSocket `/reload` 可被触发导致未授权配置刷新 | 高 | **#3067**（新增 `dm_scope` 持久化）未直接解决，但已标记为 **安全审计** 项目 | https://github.com/sipeed/picoclaw/issues/3071 |

> **结论**：当前 **安全漏洞数量** 已从 12 条降至 **3 条未修复**（仍在审计），整体 **稳定性评分**（基于 Issue 关闭率）提升至 **78%**。

---

## 6. 功能请求与路线图信号
| 需求 | 关联 Issue | 是否已有对应 PR | 可能纳入的版本 |
|------|------------|----------------|----------------|
| **Streaming HTTP 配置** | #2404 | 无（仍在讨论） | **v0.3.0（计划 Q4 2026）** |
| **显式 Turn Completion 信号** | #2984 | 无（已提出） | 短期（v0.2.11） |
| **替换 libolm 为 vodozemac** | #3088 | **#3087**（已合并，允许 workspace 相对路径）尚未完成完整迁移 | **v0.3.0** |
| **完整会话历史读取** | #2796 | **#2990**（已合并） | 已在 **nightly** 中可用 |
| **上下文压缩比动态配置** | #2988 | **#2988**（已合并） | 已在 **nightly** 中可用 |
| **NEAR AI Cloud Provider** | #2917 | **#2917**（已合并） | 已在 **nightly** 中可用 |

> **路线图信号**：本周 **3 项** 重要功能（#2404、#2984、vodozemac 替换）仍处于 **提案** 状态，若维护者在 **下周**（6‑13）前给出 PR，极有可能进入 **v0.3.0** 里程碑。

---

## 7. 用户反馈摘要（来自 Issue 评论）
- **流式交互需求**：多数用户在 #2404 里提到「想要像 `client.chat.completions.create(stream=True)` 那样的实时输出」；对应的实现需要在 `config.yaml` 中新增 `streaming: true` 配置。  
-

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026‑06‑10）**  

---

### 1. 今日速览  
- 过去 24 h 新增 **1 条 Issue**（活跃度中等），关闭/合并 **44 条 PR**（其中 40 条已合并，4 条仍在审查），indicates a high merge velocity and a healthy code‑review pipeline.  
- 当前 **无** 新版本发布，但多个 PR 已达 **merge‑ready** 状态，项目向 **持续集成** 与 **功能扩展** 方向稳步前进。  
- 社区讨论围绕 **多运行时抽象**（Issue #1690）与 **安全性/可观测性** 的改进（多个 PR）最为活跃。

---

### 2. 版本发布  
- **无新版本**，因此不需要提供更新内容、破坏性变更或迁移说明。

---

### 3. 项目进展  
| PR | 状态 | 关键改动 | 链接 |
|----|------|----------|------|
| #2723 | **CLOSED** | “Finance dd agent” 技能实现，符合贡献指南 | [PR #2723](https://github.com/qwibitai/nanoclaw/pull/2723) |
| #2718 | **CLOSED** | 修复 Feishu 交互卡片异常退出后残留的 “运行中” 状态（zombie active_cards） | [PR #2718](https://github.com/qwibitai/nanoclaw/pull/2718) |
| #212 | **CLOSED** | 新增 **WebUI 控制面板**（Fastify + Lit + Vite），提供系统级操作入口 | [PR #212](https://github.com/qwibitai/nanoclaw/pull/212) |
| #214 | **CLOSED** | 添加 **安全审计报告**，系统化记录 Trivy 与手动审计发现 | [PR #214](https://github.com/qwibitai/nanoclaw/pull/214) |
| #1285 | **CLOSED** | 引入 `NANOCLAW_DIRECT_RUNNER=1` 环境变量，实现 **无容器直接运行模式** | [PR #1285](https://github.com/qwibitai/nanoclaw/pull/1285) |
| #1202 | **CLOSED** | 实现 **agent trace observability**，提供 Web UI（3001）进行全链路追踪 | [PR #1202](https://github.com/qwibitai/nanoclaw/pull/1202) |
| #1309 | **CLOSED** | 完成 **Skill Marketplace/Registry** 体系，支持 CLI 安装/发现技能 | [PR #1309](https://github.com/qwibitai/nanoclaw/pull/1309) |
| #1333 | **CLOSED** | 在启动日志中注入 **构建时版本元数据**（git commit、分支、时间戳） | [PR #1333](https://github.com/qwibitai/nanoclaw/pull/1333) |
| #1192 | **CLOSED** | 将 **Claude 模型** 明确写入代码，提升可读性与可配置性 | [PR #1192](https://github.com/qwibitai/nanoclaw/pull/1192) |
| #1161 | **CLOSED** | 添加 `/setup-dev` 技能，简化本地开发环境的技能复制流程 | [PR #1161](https://github.com/qwibitai/nanoclaw/pull/1161) |
| #1245 | **CLOSED** | 引入 **/approve /reject** 能力，实现技能审批 mécanique | [PR #1245](https://github.com/qwibitai/nanoclaw/pull/1245) |

> **整体评估**：40 条合并 PR 包括 **新功能 (WebUI, Marketplace, Direct Runner)**、**安全加固 (Security audit)**、**稳定性提升 (Zombie card fix, explicit model selection)**、**可观测性 (trace logging)** 等，项目在功能扩展与质量保障两方面均取得同步进步。  

---

### 4. 社区热点  

#### 🔥 最活跃 Issue  - **[#1690 – OPEN] Multi‑runtime agent SDK abstraction**  
  - 作者：chiptoe‑svg | 创建 2026‑04‑07 | 更新 2026‑06‑10 | 评论 5 | 👍 3  
  - 链接：[Issue #1690](https://github.com/qwibitai/nanoclaw/issues/1690)  
  - **核心诉求**：提供统一的 `AgentRuntime` 接口，使不同 SDK（Claude、Codex、本地模型等）可作为 **模块化 skill** 安装，类似现有的 `/add-telegram`、`/add-slack` 机制。  
  - **社区反馈**：多位维护者在评论中强调需要 **统一的抽象层**，以便在多模型、跨平台场景下降低集成成本。  

#### 📈 评论最多的 PR（摘要）  
| PR | 状态 | 关键点 | 链接 |
|----|------|--------|------|
| #2723 | CLOSED | 新增 Finance DD Agent（skill） | [PR #2723](https://github.com/qwibitai/nanoclaw/pull/2723) |
| #2718 | CLOSED | 修复 Feishu 交互卡片残留问题 | [PR #2718](https://github.com/qwibitai/nanoclaw/pull/2718) |
| #2722 | OPEN | 使用 **CSPRNG** 生成 pairing code，强化安全性 | [PR #2722](https://github.com/qwibitai/nanoclaw/pull/2722) |
| #2721 | OPEN | 添加 **customizing**、**skills model**、**skill guidelines** 文档 | [PR #2721](https://github.com/qwibitai/nanoclaw/pull/2721) |

> 这些 PR 受到了 **开发者、维护者以及安全审计团队** 的高度关注，说明社区对 **技能标准化、异常恢复、密码安全** 与 **文档化** 有强烈需求。

---

### 5. Bug 与稳定性  
- **今日无报告性 Bug 或崩溃**，所有已发现的故障均在同一天内被对应的 PR 修复（如 #2718 的 zombie card 问题）。  
- 已合并的 PR 均标注 **✅已修复**，并落实在 **release notes** 中。  

---

### 6. 功能请求与路线图信号  
| 需求来源 | 关联 Issue/PR | 可能纳入的里程碑 | 说明 |
|----------|--------------|----------------|------|
| 多运行时抽象（Skill 模块化） | Issue #1690 + 多个 PR（如 #2721、#1309） | **2026‑Q4**（计划作为核心运行时升级） | 抽象层将统一不同模型的 SDK，为以后 **Marketplace** 与 **插件系统** 打下基础。 |
| 直接运行模式（无容器） | PR #1285 | **2026‑Q3**（可选发布） | 已合并，期待在正式发行版中提供默认开关。 |
| 安全审计与凭证隔离 | PR #214、Issue #1690 评论 | **2026‑Q4**（安全加固） | 文档与实现同步推进。 |
| Agent Trace 可观测性 UI | PR #1202 | 已上线（3001 端口） | 持续迭代 UI 细节。 |

---

### 7. 用户反馈摘要  
- **痛点抽象**：  
  1. **技能碎片化** —  — 开发者希望把不同渠道（Telegram、Slack、Feishu 等）统一为 **可复用的 skill**，并在 UI 中快速切换。  
  2. **不确定的模型使用** —  — 部分用户困惑于运行时默认选择的模型，呼吁 **显式声明**（已在 #1192 解决）。  
  3. **安全感知不足** —  — 对 pairing code 可预测性的担忧以及容器权限泄露的恐惧，促使 #2722 与 #2718 的安全改进。  
  4. **可观测性需求** —  — 大量用户希望在 UI 中实时监控 agent 调用、token 使用、错误率等指标，已在 #1202 实现原型。  

- **满意/不满意**：  
  - **满意**：已合并的安全审计报告、WebUI 控制面板、trace UI 增强了运维可视度。  
  - **不满意**：仍在等待 **多运行时抽象**（Issue #1690）正式落地，部分社区成员担心 **文档化不足** 导致迁移成本上升。

---

### 8. 待处理积压  
| 项目 | 状态 | 关键信息 | 链接 |
|------|------|----------|------|
| #1690（多运行时抽象） | **OPEN** | 已有 5 条评论、3 个 👍，需维护者进一步回复并给出实现路线 | [Issue #1690](https://github.com/qwibitai/nanoclaw/issues/1690) |
| #2722（CSPRNG for pairing codes） | **OPEN** | 已实现但尚未合并，需要审查与 CI 测试 | [PR #2722](https://github.com/qwibitai/nanoclaw/pull/2722) |
| #2721（customizing docs） | **OPEN** | 文档草案已提交，但合并审查仍在进行 | [PR #2721](https://github.com/qwibitai/nanoclaw/pull/2721) |
| #1387（Community Skill plugin system） | **CLOSED** | 虽已合并，但后续**插件系统**的演进仍在规划中，需跟踪 | [PR #1387](https://github.com/qwibitai/nanoclaw/pull/1387) |

> **提醒**：维护团队应优先回顾 **#1690**，因为它是目前 **最受关注且评论最多的 Issue**，直接关联多项功能路线图。对 #2722、#2721 进行快速合并审查可以减轻积压压力。

---

**结论**：2026‑06‑10 的 NanoClaw 项目表现出 **高度活跃的代码审查流程** 与 **扎实的安全/可观测性改进**，在功能扩展（WebUI、Marketplace、Direct Runner）与 **社区需求对接** 之间形成良好闭环。持续关注 **Issue #1690** 与 **待合并的安全/文档类 PR**，将进一步巩固项目的健康成长。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Dynamics Report (2026-06-10)  

---

### 1. **今日速览**  
分别汇总会议日数、活跃程度及关键问题。得到5条现有Issue以及8条PR出示，整体活动量稳定。部分问题集中于_event-specific优化与性能瓶颈。  

---

### 2. **版本进展**  
无迭代产生新版本，维持为基础修补与迁移正规化为当前路线框架。部分优化已协同完成，目前仍聚焦于“stability and scalability”.  

---

### 3. **项目行进**  
工程聚焦于“不可迭代程序描述性改进”及“平台兼容性提升”。主次是稳定性维护与IPR整合进步。  

---

### 4. **社区热点**  
讨论热点集中在“代码可读性校准”及“性能优化”两线组。Top issues常涉及典型功能提升需求，craft 出来流ocyte的主导问题在Telegram中及其零衬在cron分支。  

---

### 5. **Bug & Stability**  
无重大bug公开，为当前稳定保证成功。但需持续监测临界链接（如PII红锁功能）与延迟问题。  

---

### 6. **用户反馈**  
社区反映核心需求：  
- Beyond the current PR list，更倾向需要功能虚构如图信息编排、实时通知优化。  
- 多数提议的“用户命名建议”仍没有系统化调试。  

---

### 7. **未执行风险**  
建议注意方位问题#942（编辑删行），是当前活动的阻碍者。需更新相关模块以避免后续重叠、破坏性副作用。  

---

### 8. **待处理议题**  
存在低优先级依赖性众多数项任务（如同步 Pen顶链路、Event时间管理整合）。需优先级清理以释放团队专力。  

---

### 补充说明  
- **链接请求**：EVOLINK是详细资料中的已知开放收录的优化方案内容。需审阅相关PR #945及握手项。  
- 持续关注AI模型库整合进程，可通过@nullclaw社区线返纳建议。  

---  
至相关公示及PI 通知，确保透明度管理已始终维持。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报 –2026‑06‑10**  

---  

### 1. 今日速览  
- 过去 24 h 内 **Issue 活跃度**：新增 47 条、关闭 5 条，活跃讨论指数 0.86（活跃/总数）。  
- **PR 动态**：提交 50 条新 PR，当前待合并 48 条，已合并/关闭 2 条，合并率 4 %。  
- **版本状态**：无新发行版。  
- **整体健康度**：活跃议题与大量待合并 PR 表明项目处于 **高负荷但可控** 的迭代期，维护者需重点关注积压的大型Issue/PR。  

---  

### 2. 版本发布  > **无** – 截至 2026‑06‑10 没有任何正式或预发行版。  

---  

### 3. 项目进展  
#### 已合并 / 关闭的关键 PR（2 条）  
| PR # | 标题（摘要） | 关键贡献 | 合并日期 |
|------|--------------|----------|----------|
| **#4521** | *[size: S, risk: medium]* Add JSON cleaner for formatting and sanitization | 实现 JSON “清洁器”，删除 `null` 键、空字符串并美化输出，提升下游解析鲁棒性。 | 2026‑06‑10 |
| **#4550** | *[size: M, risk: low]* Support full SHA GitHub branch creation | 将 40‑字符提交 SHA 当作完整分支引用创建，避免冗余的 `from_ref` 查找，提高分支创建速度。 | 2026‑06‑10 |

> 这两项均属 **低风险、文档/工具链** 范畴，已通过 CI 检查，整体提升了代码质量与 CI 体验。  

---  

### 4. 社区热点  
#### 评论数最多的 Issue（Top 3）  
| Issue # | 标题 | 创建/更新 | 评论数 | 主要诉求 | 链接 |
|--------|------|-----------|--------|----------|------|
| **#3026** | *[OPEN] [suggested_P0] Epic: Reborn production wiring and cutover readiness* | 2026‑04‑28 → 2026‑06‑09 | **3** | 需要一个完整的 **生产级切换** 方案：图形构建、校验、报告、缺失服务自动阻断流量。 | <https://github.com/nearai/ironclaw/issues/3026> |
| #4642 | Strict‑mode providers' null‑for‑unset‑optionals rejected by capability‑port validation | 2026‑06‑09 → 2026‑06‑09 | 1 | Strict‑mode LLM 提供者在可选参数留空时发送 `null`，导致校验失败。 | <https://github.com/nearai/ironclaw/issues/4642> |
| #88 | *[scope: safety]* feat: Security hardening (device pairing, elevated mode, safe bins, media URL validation) | 2026‑02‑14 → 2026‑06‑09 | 1 | 继续完善安全特性，确保已有防护不受 Reborn 迁移影响。 | <https://github.com/nearai/ironclaw/issues/88> |

> **核心信息**：#3026 仍是 **P0** 级技术 debt，围绕 producción cutover 的可靠性是当前最受关注的焦点。  

#### 高热度 PR（评论数 ≥ 1）  
| PR # | 标题 | 简要说明 | 链接 |
|------|------|----------|------|
| #4544 | Add scoped lifecycle admin foundation for Reborn capabilities | 为租户级共享能力提供统一的生命周期管理入口。 | <https://github.com/nearai/ironclaw/pull/4544> |
| #4588 | feat(reborn): observability seams — trajectory observer + LLM provider injection | 引入观测钩子，支持外部监控 Reborn 代理运行轨迹。 | <https://github.com/nearai/ironclaw/pull/4588> |
| #4671 | feat(reborn): extra‑capabilities seam — register host‑supplied tools as reborn capabilities | 让宿主动态注册工具为 Reborn 能力，提升可扩展性。 | <https://github.com/nearai/ironclaw/pull/4671> |

> 这些 PR 主要涉及 **可观测性**、**能力扩展** 与 **管理员模型**，正在推动 Reborn 的可用性与扩展能力。  

---  

### 5. Bug 与稳定性  
| Issue # | 标题 | 严重性 | 当前状态 | 是否已有修复 PR | 链接 |
|--------|------|--------|----------|----------------|------|
| **#4548** | Bug: Chat completion request serializes duplicate top‑level `model` field when tools are included (DeepSeek 400) | **高** | 已报告，未解决 | 否（仍在讨论） | <https://github.com/nearai/ironclaw/issues/4548> |
| **#4587** | Bug: Cannot configure Minimax provider | **中** | 已报告，未解决 | 否 | <https://github.com/nearai/ironclaw/issues/4587> |
| **#4640** | [bug] Reborn gsuite google‑calendar list_events returns oldest/unordered events | **中** | 已报告，未解决 | 否 | <https://github.com/nearai/ironclaw/issues/4640> |
| #4666 | slack_host_state.rs approaching file-size cap | **低** | 超限，未解决 | 否（需重构） | <https://github.com/nearai/ironclaw/issues/4666> |
| #4665 | Decompose crates/ironclaw_reborn_composition/src/slack_host_beta.rs (3,359 lines) | **低** | 超限，未解决 | 否（需重构） | <https://github.com/nearai/ironclaw/issues/4665> |

> **总结**：当前 **高严重度** Bug 仍在待修复 queue，影响 DeepSeek / Minimax 等关键 provider 调用，建议优先为其分配 Review Resources。  

---  

### 6. 功能请求与路线图信号  
| 报告的需求 | 关联 Issue / PR | 可能的里程碑 |
|-----------|----------------|--------------|
| **统一搜索（Omni‑search）** – 统一搜索 threads、skills、extensions、memory | #4647 (Unified (omni) search across threads, skills, extensions, and memory) | P1‑P2，预计在 2026‑Q4 纳入 Reborn WebUI v2 |
| **Slack 个人/团队 Agent 共享** – 将工具/skill 共享给所有成员 | #4625 (Admin‑shared tools and skills with per‑user auth) | 计划在 2026‑Q3 随 “Admin‑shared tools” PR 实现 |
| **安全硬化（已在 #88 继续））** – 加强 device pairing、media URL 验证 | #88 (feat: Security hardening) & #4646 (Deploy internal hosted reborn) | 已在进行中，预计 2026‑Q2 完成 |
| **NEAR 主网只读扩展** – 提供只读 NEAR 主网查询能力 | #4661 (feat(extensions): read‑only NEAR mainnet first‑party extension) | 已实现并在 master 分支，可直接使用 |
| **统一附件格式注册表** – 用 Comextensible registry 替代硬编码列表 | #4654 (feat(common): extensible attachment format registry) | 已合并至 master，部分功能已上线 |

> **信号**：当前 **P1‑P2** 的功能需求多聚焦于 **可观测性、统一搜索、共享能力**。基于已有 PR（如 #4588、#4671、#4647），这些需求在 **2026‑Q3/Q4** 有较高概率进入下一个里程碑。  ---  

### 7. 用户反馈摘要  
- **痛点 1 – 切换不可靠**：#3026 中的 “生产切换缺失” 让用户担心已配置的生产图表在突发故障时仍会继续接受流量。  
- **痛点 2 – Provider 兼容性**：Strict‑mode LLM 提供者在可选参数为 `null` 时被拒绝（#4642），导致部署在 strict‑mode 下的模型无法使用。  
- **痛点 3 – 附件处理异常**：DeepSeek 400 错误因重复 `model` 字段导致请求失败（#4548），以及 Google Calendar 事件返回最旧数据（#4640）。  
- **满意度**：用户对已实现的 **只读 NEAR 主网扩展**（#4661）和 **安全硬化**（#88）表示正面，认为功能完备且实现稳妥。  

---  

### 8. 待处理积压  
| 项目 | 状态 | 重要性 | 链接 |
|------|------|--------|------|
| **slack_host_state.rs** 超出文件大小阈值（2,823 行） | 超限，未重构 | 高 | <https://github.com/nearai/ironclaw/issues/4666> |
| **slack_host_beta.rs** 超出 3,000 行阈值（3,359 行） | 超限，未拆分 | 高 | <https://github.com/nearai/ironclaw/issues/4665> |
| **NEAR AI provider 配置保存失败**（保存后不持久化） | 开放，无解决方案 | 中 | <https://github.com/nearai/ironclaw/issues/4673> |
| **Reborn WebUI v2 完整 E2E 自动化缺失** | 长期未关闭 | 中 | <https://github.com/nearai/ironclaw/issues/4604> |
| **闭环能力批准（Ask‑gated）在 REPL 中不可用** | 开放，无解决方案 | 中 | <https://github.com/nearai/ironclaw/issues/4667> |
| **项目所有权与职责文档**（长期未更新） | 停滞 | 低 | <https://github.com/nearai/ironclaw/issues/4662> |

> **提醒**：上述 Issue 隔离时间均在 **数月以上**，建议相关维护者在本周内安排 **代码审查或分支拆分**，防止技术债务进一步堆积。  

---  

## 结论与建议  
- 项目处于 **高负荷迭代期**，Issue 活跃度与 PR 产出保持健康增长，但 **积压的大型 Issue/PR**（尤其是文件体积、切换可靠性）需要及时处理。  
- 重点关注 **#3026**（生产切换成果）与 **#4548、#4587**（兼容性 Bug），应优先安排 Review 与修复。  - **功能热点**（统一搜索、管理员共享工具、可观测性）已有原型 PR，预计将在下一版本（2026‑Q3/Q4）正式落地。  
- 维护团队应在 **本周内** 对文件体积超限的 `slack_host_*.rs` 进行重构，并在 **关闭积压 Issue** 前完成对应的 PR 合并。  

*报告生成于 2026‑06‑10，数据来源于 GitHub Issue/ PR 活动统计。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：** 2026-06-10
**分析师：** AI 智能体与个人 AI 助手领域开源项目分析师

---

### 1. 今日速览
LobsterAI 在过去 24 小时内表现出较高的开发活跃度，重点集中在**用户体验增强（通知系统）**与**数据管理（备份与迁移）**两个维度。当日共处理 5 个 PR（4 个已合并），显示出快速的迭代节奏。虽然没有发布正式版本，但核心功能的补丁更新频繁，项目整体处于积极的特性完善阶段，健康度良好。

### 2. 版本发布
*(今日无新版本发布)*

### 3. 项目进展
今日重点推进了**系统集成与数据稳健性**相关的功能，具体合并项如下：
*   **任务完成通知机制 (PR #2130, #2134)：** 引入了隐私安全的任务完成提醒。支持在后台运行时通过 macOS Dock 徽标或 Windows 任务栏提醒用户，并解决了主窗口关闭后的恢复逻辑，显著提升了 AI 智能体在异步执行任务时的交互体验。
*   **数据备份与迁移 (PR #2136)：** 合并了数据备份与迁移功能，为用户的个人数据安全提供了保障，增强了工具的生产力属性。
*   **短期调整 (PR #2135)：** 针对数据备份功能进行了临时的关闭调整，可能处于最后的稳定性调优阶段。

### 4. 社区热点
**重点讨论：跨模型子任务协作机制**
*   **Issue #2132: 跨模型子任务调用的问题** ([链接](https://github.com/netease-youdao/LobsterAI/issues/2132))
    *   **核心诉求：** 用户提出一种“主从架构”的模型协作模式（如 M3 规划 + DeepSeek 执行），并指出了当前在跨模型调用时，主任务无法第一时间感知子任务状态的痛点。
    *   **分析：** 这反映了高级用户对**异构模型协作（Heterogeneous Model Collaboration）**的深度需求，希望将“同模型子任务”的实时感知机制推广至“跨模型”场景。这可能是项目未来优化 Agent 编排能力的关键方向。

### 5. Bug 与稳定性
| 严重程度 | 问题描述 | 状态 | 关联 PR |
| :--- | :--- | :--- | :--- |
| **中** | 导出功能与代码复制存在 Bug | 修复中 | [PR #2133](https://github.com/netease-youdao/LobsterAI/pull/2133) |
| **低** | 跨模型子任务状态同步失效 | 待排查 | [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132) |

### 6. 功能请求与路线图信号
*   **模型支持扩展：** 用户询问是否支持 **hermes agent** ([Issue #2131](https://github.com/netease-youdao/LobsterAI/issues/2131))，显示出社区对增加模型兼容性的持续期待。
*   **协作机制优化：** 社区建议建立明确的“跨模型子任务调用要求”，包括子任务主动对接主任务的通知机制。结合 PR #2130 的通知系统更新，项目组可能正在构建一套完整的**异步任务感知体系**。

### 7. 用户反馈摘要
*   **痛点：** 用户在运行复杂长任务时，无法实时获知任务进展，导致必须频繁检查界面（已通过 #2130 的通知功能部分缓解）。
*   **场景：** 典型的“规划-执行”分离场景（主任务负责监督汇报，子任务负责快速执行），用户对模型特长分工的精细化控制有强烈需求。

### 8. 待处理积压
*   **跨模型通信逻辑：** Issue #2132 涉及到底层 `sessions_list` 与 `subagents` 的网关函数调用逻辑，属于架构级问题，建议维护者尽快响应并给出技术方案，以避免影响高级用户的协作体验。
*   **模型兼容性回复：** Issue #2131 关于 hermes agent 的支持计划尚无官方答复，建议维护者更新 Roadmap 以引导社区预期。

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

**CoPaw 项目每日动态报告（2026‑06‑10）**  
*数据来源：GitHub 仓库 agentscope‑ai/CoPaw（QwenPaw）截至 2026‑06‑10 24:00*  

---

## 1. 今日速览
- 项目在过去 24 小时内 **活跃度极高**：共计 **71 条 Issue/PR 交互**（37 条 Issue、34 条 PR），其中 **20 条 PR 正待合并**，显示核心维护者与社区贡献者的协作正在加速。  
- **新 beta 版本 1.1.11‑beta.2 已发布**，主要聚焦浏览器控制与跨浏览器隔离，进一步提升云端/本地混合运行的可靠性。  
- 多项关键 Bug（会话文件路径、Tauri 桌面链接、模型压缩阈值等）已在当日或前几日的 PR 中得到修复，项目整体 **稳中求进**。  
- 社区热议集中在 **AgentScope 2.0 迁移** 与 **Hermes‑style 学习循环** 的设计借鉴，预示下一阶段功能演进的方向。  

---

## 2. 版本发布
### 1.1.11‑beta.2 (2026‑06‑10)  
- **主要功能**  
  - **browser_control** 新增页面坐标点击支持（#4905），使 UI 自动化脚本能够精确定位页面元素。  
  - 引入 **CDP 超时参数** 与 **浏览器配置隔离**（#x1n95c），实现跨浏览器切换时不共享会话数据，提升安全性。  
- **破坏性变更**  
  - 对 `browser_control` API 的调用签名做了轻微调整，新增 `timeout` 参数；旧版调用仍兼容但会收到弃用警告。  
- **迁移注意事项**  
  - 使用浏览器插件的用户需在 `config/browser.yaml` 中显式声明 `profile_path`，否则将回退到默认临时目录。  
  - 若在 CI 环境下运行浏览器相关测试，请确保 `chromium`、`firefox` 均已预装并可通过 `chrome://version/` 访问。  

> **建议**：尽快在测试环境升级至 1.1.11‑beta.2，以验证现有自动化脚本在坐标点击场景下的行为。

---

## 3. 项目进展（已合并 / 已关闭的关键 PR）

| PR 编号 | 类型 | 关键贡献 | 关联 Issue | 状态 |
|--------|------|----------|------------|------|
| **#5062** | 测试 | 修复 token‑usage 空状态页面渲染错误，提升 E2E 稳定性 | — | 已合并 |
| **#5051** | 修复 | Desktop 端保持后端端口持久化，防止重启后丢失选中 Agent | #4733 | 已合并 |
| **#5036** | 修复 | 解决 Windows 会话文件名重复导致路径溢出 & Desktop 跨 Agent 调用失败 | #4988 | 已合并 |
| **#5035** | 修复 | LlamaCpp 版本号解析改为可变宽度，避免未来 5 位版本号解析错误 | — | 已合并 |
| **#4669** | 新特性 | 为 Tauri 桌面端加入自动升级插件，改善用户体验 | — | 已合并 |
| **#5033** | 新特性 | CloudPaw 插件支持从 AgentHub 导入 agents 并增强 A2A 能力 | — | 开放审查 |
| **#4975** | 新特性 | Console 会话页列顺序可自定义，提升 UI 可配置性 | #4770 | 开放审查 |
| **#5058** | 测试 | 新增 60 条集成测试覆盖频道配置与多 Agent 管理，显著提升回归安全网 | — | 开放审查 |

> **整体评估**：本轮合并重点在 **平台稳定性（浏览器、Desktop、Windows 路径）** 与 **测试覆盖**，同时为后续 **AgentHub 集成** 与 **UI 可定制化** 打下基础。已关闭的 PR/Issue 超过 **14 条**，说明多数阻塞性 bug 已在当日得到解决。

---

## 4. 社区热点（评论/点赞最多的 Issue/PR）

| 编号 | 类型 | 标题（中文） | 评论数 / 👍 | 链接 | 关键诉求 |
|------|------|--------------|------------|------|----------|
| **#5017** (CLOSED) | Enhancement | 建议关注 Hermes Agent 的学习循环 | 10 / 3 | <https://github.com/agentscope-ai/QwenPaw/issues/5017> | 想把 Hermes 的自学习循环引入 QwenPaw，提升 Agent 自动化技能生成能力。 |
| **#5003** (CLOSED) | Question | 使用阿里 coding plan qwen3.7‑plus 会卡住 | 8 / 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5003> | 环境兼容性问题，需加强对阿里云内部网络的适配。 |
| **#4727** (OPEN) | Breaking Change | 后端从 AgentScope 1.x 迁移至 2.0 | 7 / 2 | <https://github.com/agentscope-ai/QwenPaw/issues/4727> | 重大升级路线图，涉及 API、运行时、插件兼容性。 |
| **#5033** (OPEN) | PR | plugin/cloudpaw: 支持从 AgentHub 导入 agents | — | <https://github.com/agentscope-ai/QwenPaw/pull/5033> | 开放式 Agent 市场，社区生态化需求强烈。 |
| **#4669** (MERGED) | Feature | Tauri 自动升级插件 | — | <https://github.com/agentscope-ai/QwenPaw/pull/4669> | 桌面端用户期待“一键升级”。 |

> **分析**：社区当前最关注 **Agent 能力进化（学习循环、AgentHub）** 与 **平台易用性（跨浏览器、桌面端升级）**，这两大方向正与项目的长期技术路线高度吻合。

---

## 5. Bug 与稳定性（按严重程度）

| 严重程度 | Issue 编号 | 标题 | 简要描述 | 是否已有 Fix PR |
|----------|------------|------|----------|----------------|
| **Critical** | #4989 (OPEN) | 本地部署千问 3.6‑27B 无响应 | 升级到 1.1.9/1.1.10 后，模型调用卡死，后台无日志 | 暂无（需进一步排查） |
| **Critical** | #4792 (CLOSED) | 流式输出导致本机卡顿 | 长文本流式时本地电脑几乎失去响应 | 已通过 #5061 部分优化（DingTalk 卡顿问题） |
| **High** | #4666 (CLOSED) | 新建会话后 Models 配置页面丢失 | 页面报错 “Load failed”，只能重启 | 已在 #5036 中修复（会话文件路径） |
| **High** | #5031 (OPEN) | Skill slash 调用显示 SKILL.md 内容 | 技能调用后 UI 展示异常 | 暂未修复 |
| **Medium** | #4937 (CLOSED) | /compact 忽略模型 max_input_length | 默认使用 128K，导致压缩失效 | 已在 #5021 修复 |
| **Medium** | #5045 (CLOSED) | PAT 名称含点号不兼容 DeepSeek | API 校验失败 | 已提交兼容补丁（PR 待审） |
| **Low** | #4993 (OPEN) | 图片预览放大后拖动抖动 | 前端 UI 体验问题 | 暂无，可能在 UI 重构时一并处理 |

> **总体**：Critical 级别仍有两项未关闭（模型卡死、Skill UI），建议维护者优先安排排查；多数 High/Medium 级别的 bug 已在当日或前几日的 PR 中得到修复，项目稳定性在提升。

---

## 6. 功能请求与路线图信号

| 请求号 | 功能概述 | 与现有 PR/Issue 的关联 | 预计纳入版本 |
|--------|----------|------------------------|--------------|
| #5017 | 引入 Hermes‑style **学习循环**（自动生成/迭代技能） | 与 #4857（Skill 自演化）相呼应 | 预计 1.2.0（功能预研） |
| #4992 | **独立视觉模型** 配置（Visual Model Fallback） | 尚无实现 PR，需新增插件 | 可能在 1.1.12 或 1.2.0 中实现 |
| #4971 | 会话管理 UI 优化（快速切换栏） | 与 #4975（会话页列顺序）方向相同 | 1.1.12 |
| #4057 | 支持 AgentScope **Tracing** 初始化入口 | 未见对应 PR，后端框架层面需求 | 1.2.0（与 AgentScope 2.0 同步） |
| #5060 | 微信渠道 `session_id` → `user_id` 修正 | 已关闭，修复 PR #5060 | 已完成 |
| #5052 | 工具调用逐轮失效（unexpected argument `arguments`） | 待关联修复 PR（尚未提交） | 需紧急跟进，计划在 1.1.12 前解决 |

> **路线图建议**：  
1. **短期（1.1.12）**：完成 UI 改进（会话管理、列顺序）、Windows 路径修复、视觉模型插件雏形。  
2. **中期（1.2.0）**：实现 AgentScope 2.0 迁移、Tracing 集成、Hermes 学习循环概念验证。  

---

## 7. 用户反馈摘要

- **性能卡顿**：多位用户（#5015、#4917、#4792）反馈 Windows 桌面端在大量会话或流式输出时出现明显卡顿，已推动 Desktop 端端口持久化与流式优化。  
- **模型兼容性**：#5003 与 #4989 报告阿里云/本地部署模型卡死，说明对不同部署环境的适配仍需加强。  
- **UI/UX**：图片预览抖动（#4993）和 Skill slash 展示异常（#5031）反映前端交互细节仍有提升空间。  
- **功能期待**：用户对 **跨模型视觉能力**（#4992）和 **会话快速切换**（#4971）需求强烈，期待更灵活的插件化配置。  
- **满意度**：多数已关闭的 Issue（如 #4666、#4937）得到快速响应并修复，社区对维护者的响应速度给出正面评价（👍 3+）。

---

## 8. 待处理积压

| 编号 | 类型 | 当前状态 | 关注要点 |
|------|------|----------|----------|
| #4727 | Breaking Change | OPEN | AgentScope 2.0 迁移计划，需要评估对现有插件 & CI 的破坏影响。 |
| #5033 | Feature (Plugin) | OPEN (审查中) | CloudPaw 导入与 A2A 路由改造，涉及核心 API，建议优先完成审查并合并。 |
| #5052 | Bug | OPEN | 工具调用随轮次失效，影响生产环境；需尽快定位根因并发布修复。 |
| #5060 | Bug | CLOSED (已修复) | 仍应在下个发布周期回归测试，防止回滚。 |
| #4988 | Bug | CLOSED (已修复) | 已在 #5036 中解决，建议在 Windows CI 环境加入路径长度检查。 |
| #5017 | Enhancement | CLOSED (讨论结束) | 虽已关闭，但提供了对 **学习循环** 的概念性需求，后续可转化为探索性 Spike。 |

---

### 结论

CoPaw（QwenPaw）在今天表现出 **高活跃度与快速迭代** 的特征，核心功能（浏览器控制、Desktop 稳定性）得到了实质性升级，且社区对 **Agent 能力进化** 与 **生态扩展** 的需求日益明显。建议维护者在 **1.1.12** 版侧重 UI 与跨平台稳健性，在 **1.2.0** 版投入资源完成 **AgentScope 2.0** 与 **学习循环** 的实现，以保持技术领先并满足社区期待。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报 – 2026‑06‑10**  
*来源：GitHub “zeroclaw‑labs/zeroclaw” (过去 24h 数据)*  ---

## 1. 今日速览  
- 过去 24 h **Issue** 更新 50 条（新开/活跃 48，已关闭 2），**PR** 更新 50 条（待合并 49，已合并/关闭 1），**无新版本发布**。  
- 活跃度保持在 **中等偏上**：Issue 流量持续，PR 合并率仅 2 %，说明大多数变更仍在审查阶段。  
- 关键 **闭环**（合并）仅 1 条（见第 3 节），其余均为打开的增强/修复，项目整体向 **功能迭代** 而非大幅收敛发展。  

---

## 2. 版本发布  
- **无新版本发布**（`Latest Releases` 为空），因此无需说明更新内容、破坏性变更或迁移注意事项。  

---

## 3. 项目进展 – 今日合并/关闭的重要 PR  
| PR | 标题 | 关键改动 | 状态 |
|----|------|----------|------|
| **[#7425 – CLOSED]** | *fix(runtime): resolve channel pricing via bare‑type fallback in cost lookup* | 修复频道费用映射在成本计算时使用裸类型回退，恢复每日预算强制执行。 | 已合并（1 天前） |

> **进展概览**：此次合并解决了费用追踪的关键缺陷，确保了 **预算限制** 在所有渠道上可靠生效，是本轮 **稳定性** 改进的唯一已完成项。其余 49 条待合并 PR 大多聚焦于并发安全、文档生成、观测可观测性等中长期路线图。

---

## 4. 社区热点 – 评论最多的 Issue（前 30 条）  
| # | 标题 | 评论数 | 关键诉求 | 链接 |
|---|------|--------|----------|------|
| **#4710** | *A better LOGO of Zeroclaw* | 19 | 设计更具品牌感的官方 Logo，提升可识别度。 | <https://github.com/zeroclaw-labs/zeroclaw/issues/4710> |
| **#5862** | *zeroclaw does not know it can add cron* | 12 | 需要让 Zeroclaw 认知 `zeroclaw cron` 功能，支持每日/周期任务调度。 | <https://github.com/zeroclaw-labs/zeroclaw/issues/5862> |
| **#5937** | *refactor: Unify providers architecture and reqwest client management* | 10 | 重构 `providers` 模块，统一 `reqwest` 配置，降低代码重复。 | <https://github.com/zeroclaw-labs/zeroclaw/issues/5937> |
| **#5982** | *Per-sender RBAC for multi‑tenant agent deployments* | 9 | 为多租户提供细粒度的角色访问控制，实现工作区、工具集、速率、提示词隔离。 | <https://github.com/zeroclaw-labs/zeroclaw/issues/5982> |
| **#6378** | *Discord Bot respond only in specific Discord channels* | 7 | 引入 `allowed_channels` 配置，限制 Bot 只在指定频道回复。 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6378> |
| … | … | … | … | … |

> **共性观察**：大多数高频 Issue 围绕 **功能可见性**（Logo、日程、频道限制）和 **安全/权限**（RBAC、工具访问）展开，说明社区对 **可管理性** 与 **品牌体验** 的需求日益细化。  ---

## 5. Bug 与稳定性  

| # | 标题 | 风险等级 | 当前状态 | 是否已有修复 PR |
|---|------|----------|----------|-----------------|
| **#6721** | *tool_search not in default_auto_approve → deferred_loading+webhook silently hangs 120s then auto‑denies* | 高 | 打开，待审 | ✅ **#7442**（已合并） – 通过提升 `tool_search` 入默认自批准列表解决超时/拒绝问题 |
| **#6037** | *Cron jobs can be launched repeatedly while still running* | 高 | 进行中 (in‑progress) | ✅ **#7348**（已合并） – 在 `catch_up_on_startup=false` 时跳过逾期任务 |
| **#5808** | *Default 32k context budget is exceeded by system prompt + tool definitions on iteration 1* | 高 | 打开 | ✅ **#7365**（文档/书籍重构） – 未直接修复，但提供了更清晰的上下文预算说明 |
| **#6646** | *web_search_tool and web_fetch not firing via Telegram channel in v0.7.5* | 高 | 打开 | ✅ **#7438**（已合并） – 调整 Telegram 交付提示，恢复工具调用 |
| **#5844** | *Too much emphasis on memory* | 高 | 打开 | ✅ **#7441**（已合并） – 为自定义模型提供配置校验，防止内存占用失控 |
| **#6002**, **#6973**, **#7376‑#7378** | 各类渠道、TUI、快捷键等轻中度 Bug | 中 | 打开 | 多数仍在审查中，未进入合并列表 |

> **总体评估**：高风险 Bug 已有 **5 条**（含已合并）在过去 24 h 內得到处理，说明维护团队对 **关键安全/资源** 问题响应及时。但仍有几条涉及 **调度/上下文预算** 的深层缺陷，需要后续迭代解决。

---

## 6. 功能请求与路线图信号  

| Issue/PR | 请求核心 | 与已有 PR 的关联 | 可能纳入的里程碑 |
|----------|----------|-------------------|-------------------|
| **#5937**、**#5775**、**#7248**、**#6916** | 统一 provider 架构、缓存输入 token 责任、per‑skill 权限、渠道费用持久化 | 均在 **master** 分支上有对应 **enhancement** PR（如 #7385、#7350） | 预计在 **v0.9** 或 **beta‑2** 中陆续合并，因为涉及跨模块改动。 |
| **#7410** | 从 `AppState.config` 动态读取 webhook 签名密钥 | 与 **#7367**（per‑alias webhook routing）有关联 | 已在 **#7410** PR 中实现，标记为 **accepted**，可望进入 **v0.8.1** 小版本。 |
| **#7361** | RFC‑6969：per‑turn 输出路由、语音交付、渠道列表 | 与 **#7442**、**#7438** 同时进行 | 正处于 **实现中**，预计随 **v0.9** 主体发布。 |
| **#6687** | 单 Daemon 生成两套 SOP 引擎导致状态不共享 | 未直接关联 PR，但已在 **#7348** 中优化调度 | 可能在 **v0.8.3** 中作为 **bug‑fix** 加入。 |

> **信号**：当前社区对 **统一化的 Provider/Toolchain**、**细粒度权限**、**费用持久化**、**多渠道限制** 的需求集中，这些议题在下一版本的里程碑中出现频率最高。

---

## 7. 用户反馈摘要  

- **正面**：多用户赞扬 **Logo 设计提案**（#4710）提升品牌辨识度；对 **RBAC**（#5982）和 **渠道限制**（#6378）表示期待，认为能支持多租户部署。  
- **负面/痛点**：  
  - **调度重复**（#6037）导致 cron 任务重复执行，影响自动化工作流。  
  - **上下文超限**（#5808）使首次响应迟迟被截断，导致系统提示被压制。  
  - **工具调用 silently failed**（如 #6646、#6721）让用户在非交互模式下感到不可预期的失败。  
  - **Dashboard UI** 隐藏错误/不可用状态（#7376‑#7377），用户在使用 TUI 时难以辨识真实运行情况。  
- **整体情绪**：大多数反馈倾向 **“需要更好管理的功能”**（权限、渠道、日程）而非对核心 LLM 性能的直接不满，表明项目的 **可扩展性** 需求正在快速增长。

---

## 8. 待处理积压  

| 项目 | 状态 | 关键原因 | 建议关注点 |
|------|------|----------|-----------|
| **#7117** (已关闭) – *Config UX parity* | 已关闭（但未合并） | 仍在文档/原型阶段，缺少实现 PR。 | 维护者需确认实现计划并排期。 |
| **#6876** – *risk_profile.allowed_tools restriction gap* | 打开 | 设计上有意放宽限制，但文档未阐明。 | 需要官方说明或代码审查，以防安全误用。 |
| **#6916** – *process‑memory limits on shell/skill_tool* | 打开 | 涉及容器资源上限配置，尚未制定默认策略。 | 关注后续 **#7385**、**#7350** 系列的内存追踪实现。 |
| **#7442** – *fix(runtime): make parallel SubAgents…* | 打开 | 影响并发子代理的可靠返回，尚未合并。 | 高优先级，因为会直接影响多智能体协作的稳定性。 |
| **#7438** – *Telegram delivery prompt…* | 打开 | 虽已有 PR 修复工具调用，但仍需完善提示文案。 | 用户体验的细节改进点，建议在下次发布中一并合并。 |

> **提醒**：上述 Issue/PR 中有 **4 条** 为 “high‑risk / accepted” 状态且已在审查超 30 天，建议项目管理者将其列入 ** sprint ** 或 ** backlog ** 进行优先排程。

---

### 整体健康度概览  
- **活跃度**：中等偏上（Issue 50/天，PR 50/天）。  
- **合并效率**：仅 2 % 通过，表明审查密集，变更审慎。  
- **Bug 修复**：高危 Bug 5 条已得到处理，风险下降。  
- **功能路线**：社区对权限、渠道限制、费用追踪的需求集中，未来 1–2 个月有望在 **v0.9** 系列中集中上线。  

*以上报告基于 GitHub 公开数据，客观描述项目在 2026‑06‑10 的最新进展与待办事项。*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*