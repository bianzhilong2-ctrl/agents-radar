# OpenClaw 生态日报 2026-09-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-02 02:02 UTC

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

# 📅 OpenClaw 项目日报 – 2026‑09‑02

---

## 1️⃣ 今日速览
- **Issue 活动** 共 **500** 条更新（新/活跃 332，关闭 168）—— 表明社区反馈量保持在中等偏高的水平。
- **PR 动态** 共 **500** 条更新（开放 319，合并/关闭 181）—— 近期合并速率较高，项目工程进度显著。
- **新版本** `v2026.8.2` 发布，主要为 UI/UX 改进（主页智能体和桌面配套功能），没有破坏性变更，升级无需额外迁移步骤。
- 整体健康度 **良好**，但仍有大量未决的严重缺陷（见§5）。

---

## 2️⃣ 版本发布

### **openclaw v2026.8.2**  *(2026‑08‑??)*
- **Home 智能体改进** – 现在可以通过 `Cmd/Ctrl+Shift+H` 固定“主页”到右侧或下侧边栏，同时保持当前页面在视图中，允许 **预览/移除工作快照** 或将选中文本附加到消息中【#133632】。
- **桌面配套增强** – 新的侧边栏布局改善了多任务处理和工作态快照的可视性（详情请参考 PR #134826）。
- **无破坏性变更** – 所有现有配置均可直接升级，`doctor --fix` 流程已验证可用。

> **迁移注意事项** – 如果您使用的是旧版边栏布局，可能需要手动调整首选项，但无需数据库迁移。

---

## 3️⃣ 项目进展 (合并/关闭的重要 PR)

| PR | 状态 | 关键改进 | 影响 |
|---|---|---|---|
| **#135791** | **已合并** | 保护外部插件payload，在 `doctor --fix` 中避免删除有效npm包 | 修复了 `#134353`（小米插件丢失） |
| **#135041** | **已合并** | 修复 macOS AI设置界面中误导性的“安装进度”覆盖层 | 提升了macOS用户的设置体验 |
| **#130877** | **已合并** | 限制SQLite导出内存使用，防止大会话导出时OOM | 修复了 `#127433` 大文件导出崩溃 |
| **#130993** | **已合并** | 修正“响应式”会话在上下文耗尽前即被压缩，导致重排估计误差 | 提升了对话连续性 |
| **#134525** | **已合并** | 保证Cron任务继承预配置的Codex服务器认证，避免重复创建ChatGPT配置 | 简化了Codex服务部署 |
| **#135789** | **已合并** | iOS端在刷新历史记录后避免重复显示助手的回复 | 修复了 `#124751` iOS duplicate回复问题 |
| **#135766** | **已合并** | xAI平台下SuperGrok配额的Usage跟踪（控制面板、`/status`、`openclaw status --usage`） | 增强了多厂商成本监控 |
| **#119135** | **已合并** | 新增“智能模型分层”策略，可将简单任务调度到低成本模型 | 平衡成本与性能 |
| **#135790** | **已合并** | 修复在移除排队输入时出现虚假存储错误 | 稳定了前端队列操作 |

*共 **12 个关键 PR** 合并/关闭，涵盖稳定性、UI 修复、大数据处理、多平台兼容性和新功能（成本优化模型分层、xAI 配额跟踪等），项目整体向前迈进了一大步。*

---

## 4️⃣ 社区热点 (讨论最热的 Issues/PRs)

### Issues (评论数排序)

| # | 标题 & 标签 | 评论数 | 核心诉求 |
|---|---|---|---|
| **#116201** | `[Bug] Realtime voice work can retain unbounded provider and consult state` **[P1, gold shrimp]** | **59** | 语音会话在供应商/咨询状态未清理时可能导致资源泄漏和无限挂起。 |
| **#112423** | `[Bug] Large SQLite transcript cleanup blocks the gateway event loop` **[P1, diamond lobster]** | **16** | 存档大体积SQLite转录时，整个材料化/压缩/IO 操作都在网关线程上执行，导致 ~30 秒事件循环停顿。 |
| **#96834** | `[Bug] WhatsApp 1:1 inbound image wedges main lane ~3min before processing` **[P1, platinum hermit]** | **14** | 图片被注入为“原生多模态资产”，导致主消息通道完全卡住近三分钟。 |
| **#69208** | `[Bug] Umbrella: duplicate transcript, replay, and context assembly across channels` **[P1, gold shrimp]** | **14** | 跨MSTeams/Telegram/webchat 等多个通道，存在 transcript/重播/上下文组合重复的问题。 |
| **#53763** | `[Enhancement] Built‑in headless browser for reliable web access` **[off‑meta tidepool]** | **12** | 打包一个headless Chromium实例，让Agent无需依赖用户的Chrome或第三方API即可稳定访问网页。 |
| **#133984** | `[Bug] 2026.7.1‑2 → 2026.8.1 leaves Gateway unstartable` **[P1, diamond lobster]** | **11** | 配置键迁移在 `openclaw doctor --fix` 中未执行，导致网关无法启动。 |
| **#97616** | `[Bug] OpenClaw leaks unreaped hook/tool child processes` **[P1, gold shrimp]** | **10** | 辅助进程（openclaw‑hooks、bash、codex 等）未被正确wait，导致僵尸进程累积和性能下降。 |
| **#37634** | `[Bug] sandbox: keep workspaceAccess “none” workspaces writable` **[P1, diamond lobster]** | **9** | “workspaceAccess none” 的沙盒工作区被挂载为只读，导致工具写入失败。 |
| **#135171** | `[Bug] 2026.8.1 and 2026.8.2 gateway crash‑loop: bundled Perplexity requires capability consent` **[P0]** | **9** | 网关启动失败，提示“Perplexity 插件需要能力同意”，但UI无法检查/启用。 |
| **#44309** | `[Enhancement] Add one‑way dispatch mode for A2A handoffs` **[off‑meta tidepool]** | **9** | 为Agent间消息传递增加无应答模式，避免“来回 ping‑pong”。 |

### PRs (最近活跃)

- **#134826** – `fix(telegram): prioritize finals over CLI commentary` (需验证) – 旨在解决 `#134697` 中CLI注释覆盖最终回复的问题。
- **#135790** – `fix(ui): avoid false storage errors after removing queued input` (需验证) – 相关 `#135785` 和 `#135345`（输入队列即时性）。

*社区热点显示，**实时语音/音频管道**、**大尺寸SQLite存档**、**多模态消息传递** 和 **升级兼容性** 是最受关注的问题。*

---

## 5️⃣ Bug 与稳定性 (按严重性排序)

| 严重度 | Issue (#) | 标签 | 症状 | 当前状态 | 修复 PR |
|---|---|---|---|---|---|
| **P0** | **#135171** | 回归，crash‑loop | 网关无法启动 – “Perplexity 插件需要能力同意” | **开放** – 待修复 | — |
| | **#134453** | 回归，Windows | `doctor --fix` 在未找到文件时中止，交互式修复却能完成 | **已关闭**（文档修复） | #134453 |
| | **#115424** | P1 | 网关V8堆OOM → SIGABRT，引发主会话重启循环 | **开放** | — |
| **P1** | **#133984** | 升级后网关无法启动 | 缺少配置键迁移 | **开放** | #135791（部分修复） |
| | **#134570** | P1 | 升级到2026.8.1后7个独立的迁移阻塞 → 崩溃循环，错误信息误导 | **开放** | — |
| | **#134331** | P1 | `doctor --fix` 无限报告“传统工作区冲突”，导致Discord消息死信 | **开放** | — |
| | **#134353** | P1 | 小米插件在升级后空payload，网关拒绝启动 | **已修复** – PR #135791 已合并 |
| | **#97616** | P1 | 子进程未被wait，导致僵尸进程累积 | **开放** | — |
|

---

## 横向生态对比



好的，基于所有项目的动态数据，生成横向对比分析报告。

---

## 个人 AI 助手 / 自主智能体开源生态横向对比分析报告
**报告日期：2026-09-02**

---

### 1. 生态全景

当前开源个人 AI 助手生态正处于**架构深水区的快速迭代阶段**，各项目在记忆管理、安全沙箱、多通道部署和 Agent 编排等核心维度上同步推进。整体态势呈现三个特征：一是核心功能（会话管理、工具调用、多渠道接入）已基本成熟，竞争重心转向**可靠性与可观测性**；二是安全与权限模型正在经历系统性重构（ZeroClaw 的 principal 隔离、CoPaw 的 Tool Guard）；三是**跨平台一致性**（桌面/Web/移动端体验对齐）成为普遍诉求。生态整体健康，但各项目在成熟度、社区规模和技术路线上分化明显。

---

### 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 新版本 | 健康度评估 |
|------|-------------|-----------|--------|-----------|
| **OpenClaw** | 500 (332 新/活跃) | 500 (319 开放) | ✅ v2026.8.2 | 🟢 良好——合并速率高，但存在未决严重缺陷 |
| **ZeroClaw** | 31 (27 新/活跃) | 50 (36 待合并) | ❌ | 🟢 高度活跃——安全架构 stacked PR 密集推进 |
| **CoPaw** | 34 | 34 | ✅ v2.2.0-beta.6 | 🟢 高度活跃——记忆系统修复 + 测试覆盖提升 |
| **IronClaw** | 14 | 19 (8 已合并) | ❌ | 🟢 高度活跃——核心重构 + WebUI 组件统一化 |
| **NanoBot** | 6 | 19 (9 已合并) | ❌ | 🟢 高活跃——运行时稳定性与工具链扩展 |
| **LobsterAI** | 13 | 9 (5 已合并) | ❌ | 🟡 正常活跃——积压清理效率高，但关键 PR 滞留 |
| **NanoClaw** | 2 | 13 (1 已合并) | ❌ | 🟡 中等偏高——关注容器安全与 provider 重构 |
| **Hermes Agent** | 50 | 50 | ❌ | 🟡 中等活跃——会话状态与技能索引稳定性问题突出 |
| **PicoClaw** | 3 | 5 | ❌ | 🟡 中等活跃——MCP 连接 bug 阻塞性问题待解 |
| **Moltis** | 2 | 3 (2 已合并) | ❌ | 🟢 稳定维护——问题闭环效率高 |
| **ZeptoClaw** | 0 | 2 (1 已合并) | ❌ | 🔴 低维护——仅依赖自动更新 |

> **数据说明**：Issues/PRs 数量为过去 24 小时内的更新条目数（含新开、活跃、关闭），非存量总数。健康度综合考虑合并速率、社区响应、积压清理和关键缺陷状态。

---

### 3. OpenClaw 在生态中的定位

**优势**：
- **社区规模遥遥领先**：单日 Issue/PR 活动量（各 500 条）是第二名 ZeroClaw（31/50）的 10 倍以上，形成显著的网络效应和第三方集成生态。
- **工程化成熟度最高**：具备完整的 `doctor --fix` 自愈流程、无破坏性升级策略、多厂商成本监控（xAI 配额跟踪、智能模型分层），工具链成熟度远超同类。
- **跨平台覆盖最广**：iOS/macOS/Windows/Desktop 全平台同步推进，且修复了大量平台特有 bug（macOS 设置界面、iOS 重复回复等）。

**技术路线差异**：
- OpenClaw 走的是**平台化 + 生态开放**路线，通过插件体系、多厂商模型支持和 Cron/定时任务系统构建基础设施层，强调"开箱即用"的完整性。
- 相比之下，ZeroClaw 聚焦**安全架构的极致重构**（principal 隔离、WASM 插件沙箱），CoPaw 深耕**记忆系统**（ReMe + ViBo），IronClaw 推进**核心 Agent 循环的模块化重构**，各家在单点上更深。

**社区规模对比**（基于 Issue 评论热度）：
- OpenClaw 的 P1 问题（#116201 语音会话资源泄漏，59 条评论）社区参与度远超其他项目。
- ZeroClaw 的 RFC #9487（31 条）、#9488（25 条）表明其社区以深度技术讨论为主，参与者多为架构师和维护者。

---

### 4. 共同关注的技术方向

以下方向在至少 3 个项目中同时涌现，构成生态级共识：

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **会话状态管理与持久化** | OpenClaw, Hermes, CoPaw, ZeroClaw | 会话恢复失败、ID 漂移、压缩超时、上下文丢失——跨项目均存在会话生命周期管理的鲁棒性问题 |
| **MCP / 工具链兼容性与稳定性** | PicoClaw, Moltis, IronClaw, Hermes | MCP 服务器连接失败导致循环挂起、数组参数误包装、stdio 子进程退出、tool_search 不可达 |
| **安全与权限控制** | ZeroClaw, CoPaw, OpenClaw | principal 隔离、工具 allowlist 绕过、敏感路径检测、OAuth 令牌意外删除 |
| **跨平台 / 跨设备一致性** | Hermes, CoPaw, OpenClaw | Bot 在桌面关闭后无法持续运行、WebUI 与桌面 UI 功能不对齐、Windows 路径渲染问题 |
| **大上下文 / 长会话处理** | OpenClaw, Hermes, CoPaw | SQLite 导出 OOM、响应式会话压缩时机错误、长上下文早期记录丢失 |
| **成本与性能优化** | OpenClaw, IronClaw, Hermes | 智能模型分层调度、prompt_cache_key 缺失导致缓存命中率崩塌、GitHub API 响应体积压缩 |

---

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|----------------|
| **OpenClaw** | 全功能平台（语音、多通道、定时任务、成本监控） | 个人开发者 + 企业部署 | 插件化架构，强调开箱即用和生态扩展 |
| **ZeroClaw** | 安全架构 + WASM 插件沙箱 | 安全敏感场景、企业 IT | principal 隔离 + 运行时策略执行，架构最"激进" |
| **CoPaw** | 长期记忆系统（ReMe + ViBo） | 需要持续记忆的个人助手 | 记忆索引重建、embedding 管理、Auto Fin 集成 |
| **IronClaw** | 核心 Agent 循环重构 + WebUI 组件化 | 开发者工具、Web 端用户 | 能力阶段解耦、共享设计系统组件 |
| **NanoBot** | 运行时稳定性 + 工具链扩展 | Agent 开发者、研究者 | ReAct 阶段控制、Runtime Context 生命周期管理 |
| **Hermes Agent** | 多设备 Bot 协作 + 技能索引 | 跨设备 Bot 运营者 | 桌面 + 网关 + Bot Mode 三位一体 |
| **PicoClaw** | 轻量级 + 边缘计算 | 树莓派/旧手机等低功耗设备 | 极简架构，工人模式提案 |
| **Moltis** | Docker 部署 + MCP 兼容性 | 容器化部署用户 | MCP 传输层抽象、Docker 网络模型优化 |
| **LobsterAI** | 视频分享 + Onboarding 体验 | 多媒体内容创作者 | Electron 桌面 + 定时任务系统 |
| **NanoClaw** | 容器安全 + provider 重构 | 安全敏感的容器化部署 | mount 安全、provider 合约抽象 |
| **ZeptoClaw** | 极简 Rust 实现 | 轻量级嵌入式场景 | 单文件 Rust 二进制，依赖极简 |

---

### 6. 社区热度与成熟度

**快速迭代阶段**（高活跃、快速合并、功能边界仍在扩展）：
- **OpenClaw**：合并速率高，每周有新版本，但 P0/P1 缺陷仍较多。
- **ZeroClaw**：安全架构 stacked PR 密集，RFC 讨论热烈，下一版本将有重大破坏性变更。
- **CoPaw**：v2.2.0-beta 系列高频迭代，记忆系统和多语言支持并行推进。

**质量巩固阶段**（活跃度中等，重心在修复和稳定性）：
- **IronClaw**：大规模重构进行中（capabilities 解耦），同时通过 nextest 并行化测试、CI 超时恢复等手段提升质量。
- **NanoBot**：PR 合并率接近 50%，聚焦运行时稳定性和工具链补全。
- **Hermes Agent**：会话状态和技能索引等长期问题的修复优先于新功能。

**稳定维护阶段**（低活跃，主要为依赖更新和文档修复）：
- **Moltis**：问题闭环效率高，当日 bug 均已修复。
- **ZeptoClaw**：仅 Dependabot 自动更新，无社区互动。

---

### 7. 值得关注的趋势信号

1. **安全架构从"事后补丁"转向"事前设计"**
   ZeroClaw 的 RFC 7141（9 层 stacked PR）和 CoPaw 的 Tool Guard 增强表明，社区正在从零散的安全修复转向系统性的权限模型重构。这对企业级部署的决策者而言，意味着下一版本的集成需要提前评估安全边界。

2. **记忆系统成为新的竞争维度**
   CoPaw 的 ReMe 升级（0.4.1.11 + Auto Fin）、ViBo 方案（97.5% token 节省）以及 Hermes 的技能索引重建，说明"长期记忆"不再是附加功能，而是核心架构组件。开发者在选择方案时应重点关注记忆的可解释性和数据主权。

3. **MCP 协议进入"兼容性深水区"**
   多个项目出现 MCP 相关 bug（数组参数误包装、tool_search 不可达、stdio 子进程退出），表明 MCP 在实际落地中暴露出协议实现的不一致性。建议在选型时要求被集成方提供完整的 MCP 合规测试报告。

4. **跨平台体验一致性成为用户痛点**
   Hermes 的 Bot 持续运行、CoPaw 的 WebUI 暗色模式、OpenClaw 的 iOS 重复回复——均指向同一个问题：桌面端和移动端的体验对齐仍不完善。对于需要多设备无缝切换的用户，这一维度应纳入选型评估。

5. **成本控制从"可选"变为"基础设施"**
   OpenClaw 的智能模型分层、IronClaw 的 prompt_cache_key 修复、Hermes 的 xAI 403 认证问题——成本和供应商锁定的风险正在被工具链正面应对。建议在架构设计阶段就将多供应商路由和成本监控作为硬性需求。

---

**报告生成说明**：本报告基于 2026-09-02 各项目 GitHub 公开数据自动生成，覆盖 12 个活跃项目。数据窗口为过去 24 小时，社区热度指标综合 Issue 评论数、PR 合并速率和社区讨论焦点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 - 2026-09-02

## 1. 今日速览
NanoBot 今日保持高活跃度，项目共处理 6 条 Issue 更新（4 新开/活跃，2 关闭）与 19 条 PR 更新（10 待合并，9 已合并/关闭）。社区贡献者在 Agent 运行时稳定性、工具链扩展及 WebUI 体验方面提交了大量高质量补丁，PR 合并率接近 50%。尽管无新版本发布，但多个 P1/P2 级别的 Bug 已被成功修复，整体架构向着更高健壮性迈进。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共合并或关闭 9 个 Pull Requests，主要推进了以下核心改进：
- **Agent 可靠性与执行重构**：[PR #5603](https://github.com/HKUDS/nanobot/pull/5603) 引入了对“声称执行但实际未调用工具”的对话轮次检测，有效防止 Agent“只说不做”；[PR #5569](https://github.com/HKUDS/nanobot/pull/5569) 提取了工具执行边界，使 `AgentRunner` 更聚焦于 ReAct 阶段控制。
- **核心 Bug 修复**：[PR #5617](https://github.com/HKUDS/nanobot/pull/5617) 修复了 WebSocket 健康检查在非 Linux 环境下的 P1 级崩溃问题；[PR #5622](https://github.com/HKUDS/nanobot/pull/5622) 解决了 Dream 合并时上下文重复发送导致的冗余 Token 消耗。
- **基础体验优化**：[PR #5621](https://github.com/HKUDS/nanobot/pull/5621) 修复了 TUI 提交后输入被擦除的回归 Bug；[PR #5615](https://github.com/HKUDS/nanobot/pull/5615) 和 [PR #5619](https://github.com/HKUDS/nanobot/pull/5619) 在 Runtime Context 层面实现了历史持久化豁免机制。

## 4. 社区热点
今日讨论和提交最集中的方向是 **Runtime Context 生命周期管理**：
- [Issue #5586](https://github.com/HKUDS/nanobot/issues/5586) 提出 Agent 的 Runtime Context 应支持 `ephemeral`（临时/不持久化）属性，以免临时指令污染后续会话。该 Issue 促成了至少 3 个相关 PR（#5627, #5615, #5619）提交和合并，反映了社区对精细化管理 Agent 记忆和上下文的强烈诉求。
- [PR #5603](https://github.com/HKUDS/nanobot/pull/5603) 背后对应的场景备受关注：Agent 连续回复“正在查询”但实际未发起任何工具调用，直到被用户戳穿。社区针对此类“大语言模型幻觉式执行”提出了运行时检测机制，解决了真实使用痛点。

## 5. Bug 与稳定性
按严重程度排列今日报告及修复的 Bug：
1. **[P1] WebSocket 监听器健康检查不可移植**：`SO_ACCEPTCONN` 在 macOS/BSD 上会导致 `OSError` 崩溃。已在 [PR #5617](https://github.com/HKUDS/nanobot/pull/5617) 中修复并关闭。
2. **[P2] WebUI 未持久化的 Pane 会话无法删除**：导致草稿或空会话残留。已在 [PR #5624](https://github.com/HKUDS/nanobot/pull/5624) 中提供修复。
3. **[P2] 工作区内文件复制功能失效**：Agent 陷入无限调用 `list_dir` 和 `read_file` 死循环。详见 [Issue #2061](https://github.com/HKUDS/nanobot/issues/2061)，目前已有 [PR #5626](https://github.com/HKUDS/nanobot/pull/5626) 提供 `copy_file` 和 `move_file` 级工具解决此问题。
4. **[P2] Dream 模式上下文重复**：导致 Agent 在休眠/记忆整合时，系统文件被重复加载两次。已在 [PR #5622](https://github.com/HKUDS/nanobot/pull/5622) 中修复。

## 6. 功能请求与路线图信号
- **新增文件系统基础工具**：[PR #5626](https://github.com/HKUDS/nanobot/pull/5626) 引入了 `copy_file` 和 `move_file` 工具，减少模型组合现有工具产生的中间错误，有望纳入下个版本。
- **WebUI 引导设置流**：[PR #5625](https://github.com/HKUDS/nanobot/pull/5625) 提出用中性的引导流程替代安装时的错误状态提示，极大提升新手首次配置体验。
- **Telegram 富文本流式消息**：[PR #5614](https://github.com/HKUDS/nanobot/pull/5614) 正在推进 Telegram 渠道的富文本流式渲染。
- **MCP Apps host 支持扩展**：[Issue #5251](https://github.com/HKUDS/nanobot/issues/5251) 呼吁在 WebUI 中原生支持 `io.modelcontextprotocol/ui`，使 MCP 调用结果能以 UI 组件而非纯文本呈现，这是平台化演进的重要信号。

## 7. 用户反馈摘要
- **痛点：“光说不练”**：用户反映 Agent 在处理任务时满口答应（“我立即为您查询”、“稍等”），但并未真实触发工具调用，表现出严重的模型幻觉。
- **痛点：工具链执行脆弱**：用户发现让 Agent 复制文件时，由于没有原生 `copy_file` 工具，Agent 尝试用 `read` 拼接 `write` 但频频失败，甚至陷入死循环。
- **需求：自动化任务降噪**：用户不希望健康检查、日常报告等 Cron 任务结果充斥在个人聊天记录中，期望结果能路由至独立配置频道并进行批量管理。

## 8. 待处理积压
- [Issue #2061](https://github.com/HKUDS/nanobot/issues/2061)：工作区文件复制问题（创建于 2026-03-15），虽已有 PR #5626 提交修复，但长期处于未合并状态，建议维护者优先 Review 并解决。
- [PR #2078](https://github.com/HKUDS/nanobot/pull/2078)：Zalo 集成重构（创建于 2026-03-16），已搁置近半年，需评估其与最新架构的兼容性。
- [PR #5283](https://github.com/HKUDS/nanobot/pull/5283)：非 WebUI 渠道的按会话沙箱隔离（创建于 2026-08-07），涉及安全性设计，建议尽早排期评审以提升多租户场景的安全性。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – 2026-09-02 项目日报**
*(数据截止 2026-09-02 23:59 UTC)*

---

## 1. 今日速览

过去 24 小时 Hermes Agent 展现出**中等活跃度**——Issues 和 PRs 各有 50 条更新，几乎达到了每日峰值水平。 Issues 主要集中在会话状态、技能索引新鲜度、桌面 UI 和 MCP 客户端等稳定性问题上，而 PR 则涵盖修复、功能增强和 refactoring，表明项目在持续推进多条开发轨道。无新版本发布，核心关注点集中在修复生产环境中的退化状态和提升用户可观测性。整体健康度**良好**，但部分长期未决的问题（如 Windows 本地文件路径、HASS_TOKEN 强制启用）仍可能影响用户迁移。

---

## 2. 版本发布

**无新版本发布**。无提交版本号变更或发布说明。

---

## 3. 项目进展

- **合并/关闭的 PR：** 今日有**1 个 PR** 完成合并/关闭（确切 PR ID 可能已从评论最多的列表中移出）。由于信息有限，无法提供具体变更细节；已有的修复工作（如 SSH 重连修复 #100700、#100701）正在推进中。
- **最新功能/修复合并：** *（合并中的 PR 将在未来补全）*

---

## 4. 社区热点

| # | Issue（评论数） | 核心诉求 | 社区反响 |
|---|-------------------|--------------|------------|
| **#66616** (138 条评论) | **[skills-index-watchdog]** Skills index is stale or degraded (degraded) | `/docs/skills` 依赖的技能索引已超过 26 小时限制（当前 29.8h）。社区讨论集中在定时重建流程、监控和影响 Bot Mode 功能的潜在风险。 | 高度关注，大量技术细节交流，表明 Skills Hub 的可靠性对生产环境至关重要。 |
| **#93888** (19 条评论) | 桌面客户端在远程网关注册表恢复时永久卡在“Restore failed — Session not found”状态。 | 会话 ID 处理不当导致永久性恢复失败。修复需修改 Desktop 发往 Remote Gateway 的运行时 ID。 | 小型高优先级讨论组，参与者分享实测环境（Windows/macOS），强调 P1 严重性。 |
| **#97681** (18 条评论) | Bot Group Chats should keep working after Desktop closes。 | 跨设备（笔记本/虚拟机）Bot 在 Group Chat 中的持续性。网关级权限和传输机制已就绪，仅需连接上层服务。 | 多个用户追问“何时完成”，表明市场迫切需要多设备 Bot 协作功能。 |
| **#89995** (16 条评论) | Expose Bot Mode group chat rooms in web dashboard & gateway。 | 将桌面独有的 Bot Mode 群聊 UI 扩展到网关/仪表板。社区要求 UI 一致性并提供统一的群聊访问路径。 | 2 个 👍，显示社区对 Web UI 功能完善的期待。 |
| **#97948** (12 条评论) | `/compress` 报告 120s 超时而后台成功完成，导致静默重新分配会话 ID。 | 会话压缩流程中的超时处理和 UI 状态同步问题；涉及会话 ID 漂移。 | 详细的现场日志分析，用户试图平衡大会话性能和稳定性。 |
| **#98077** (6 条评论) | `state.db` 物理交叉 B-Tree 损坏（SQLite 3.50.4 WAL 模式）。 | 多进程连接下 WAL 写时发生结构性损坏；恢复发现多个不可修复的错误。 | 社区强调了生产环境中持久化状态的可靠性要求。 |
| **#99270** (6 条评论) | MCP 客户端将每个数组元素包装成 `{item: …}`，破坏了 `handlerIds`、`assigneeIds` 等数组参数。 | MCP 协议层对数组类型的误处理导致工具调用失败。 | 多个用户报告相同问题，指向 MCP 客户端在类型处理上的一个 bug。 |
| **#100336** (5 条评论) | Prefix-cache invalidation on model switch：模型切换时系统提示被清除，导致缓存命中率从 2% 骤降至 99% 的全量重新填充。 | 前缀缓存依赖于固定在开头的内容；任何开头变更都会摧毁整个缓存。 | 引起性能优化的高度关注，用户希望限制对缓存的副作用。 |
| **#94906** (5 条评论) | Windows 原生 stdio MCP 客户端发现工具，但每次调用均报“subprocess has exited”。 | 网关重启后子进程意外退出，保留的会话句柄导致后续工具调用瞬间失败。 | 用户报告了重启环境下的并发问题，验证了连接稳定性要求。 |

*这些话题反映了 Hermes Agent 面临的几个共同痛点：**会话状态管理、技能数据新鲜度、跨设备 Bot 协作以及 MCP 协议互操作性**。*

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 影响范围 | 是否有已知 fix PR |
|----------|-------|--------------|----------------------|
| **P1** | **#93888** – Desktop 会话恢复失败 | 用户使用注册表恢复功能时永久卡住。 | ✅ 正在调查（未发布修复）。 |
| **P1** | **#97948** – `/compress` 超时和会话 ID 漂移 | 大会话压缩流程不稳定，导致 UI 状态不一致。 | ✅ PR #100567（Kanban 暂停）正在解决部分问题。 |
| **P1** | **#98077** – `state.db` 物理损坏 | 多进程环境中持久化会话数据丢失/损坏。 | ✅ 尚未有直接的修复 PR（社区仍在收集诊断数据）。 |
| **P1** | **#94906** – Windows stdio MCP 子进程退出 | MCP 工具调用在网关重启后失败。 | ✅ PR #100814（重启重连逻辑）已提交。 |
| **P1** | **#100788** – `load_transcript()` 返回空数组导致静默新建会话 | 会话恢复时数据丢失，造成聊天连续性中断。 | ✅ PR #100700/#100701 正在处理相关 SSH 会话问题，但此 Issue 尚未有修复。 |
| **P2** | **#66616** – Skills index 过期 | `/docs/skills` 显示过时功能，影响搜索和文档导航。 | ✅ 已有监控，但无直接 PR 修复定时重建。 |
| **P2** | **#97681** – Bot Group Chats 桌面关闭后终止 | 多设备 Bot 协作中断。 | ✅ 基础功能已合并，产品工作流待跟进。 |
| **P2** | **#89995** – Bot Mode 群聊 UI 仅限桌面 | Web 仪表板和网关缺乏群聊可视化。 | ✅ 尚未有 PR，但开发组已确认优先级。 |
| **P2** | **#99270** – MCP 数组参数包装错误 | MCP 工具调用对数组类型的错误处理。 | ✅ 相关 PR 可能在 pipelines 中。 |
| **P3** | **#25065** – HASS_TOKEN 强制启用 Home Assistant 平台 | 覆盖用户显式禁用的 config.yaml 设置。 | ✅ 尚未有修复 PR；社区持续跟进。 |
| **P3** | **#76590** – MCP OAuth 令牌在 transient 故障后意外删除 | OAuth 流程不稳定导致用户凭证丢失。 | ✅ 暂无修复 PR。 |
| **P3** | **#80946** – Windows 本地文件路径无法在 artifacts 面板中打开 | Desktop 在 Windows 下无法渲染 `C:\` 路径。 | ✅ 修复 PR 可能已提交（尚未合并）。 |

*稳定性观察：多起 Bug 集中在**会话恢复、持久化和进程重启**场景，表明内部状态管理在负载高峰或网络抖动下的鲁棒性有提升空间。*

---

## 6. 功能请求与路线图信号

| Issue / PR | 状态 | 对下一版本的意义 |
|------------|--------|--------------------------------|
| **#97681** – Bot Group Chats 持续运行 | **OPEN**，基础网关逻辑已合并，UI 工作待跟进。 | 可能成为 **0.22** 的新功能（核心功能已就绪）。 |
| **#89995** – Bot Mode 群聊在网关/Web 仪表板中可见 | **OPEN**，评论 16 条，2 个 👍。 | 优先级较高，可能与 #97681 一并发布。 |
| **#100794** – `session.dmScope` – 跨通道共享 DM 会话 | **OPEN**，2 个评论。 | 概念验证中，开发组表示“需要网关变更”，预期纳入 **0.23**。 |
| **#9673** – 重启时恢复中断的任务 | **OPEN**，2 个评论，持续时间长。 | 属于“resume on restart” 路线图的一部分，可能在 **0.24** 实现。 |
| **#100546** – 隐蔽的 per-profile 凭证存储 + 掩码 CLI 输入 | **OPEN**，功能 PR，已准备好合并。 | **高优先级安全增强**，很有可能纳入 **0.22** 版本。 |
| **#100702** – Desktop 紧凑聊天模式（隐藏 transcript chrome） | **OPEN**，功能 PR。 | UI 精炼功能，可纳入 **0.22** 版本。 |
| **#100811** – 处理 detached HEAD 状态下的桌面更新 | **OPEN**，修复 PR。 | 提升桌面升级健壮性，计划纳入 **0.22**。 |

*整体路线图信号：团队正在大力推进**会话一致性、凭证安全和 UI 紧凑性**改进，这些特征很可能在接下来的两个版本中成为用户可见的变化。*

---

## 7. 用户反馈摘要

| 痛点 | 典型用户表达 | 代表 Issue/PR |
|--------|----------------------------|--------------------|
| **会话恢复失败** | “打开存储的远程网关会话后永远卡在‘Restore failed — Session not found’” | #93888 |
| **Bot 协作中断** | “我在笔记本上的 Bot 可以在群聊中保持运行，但桌面关闭后就无法继续” | #97681 |
| **技能索引不新鲜** | “我刷新了 Skills Hub，但信息还是 30 多个小时前的数据” | #66616 |
| **Windows 文件预览崩溃** | “点击 artifacts 面板中的 `C:\Users\…\file.md` 后出现‘Invalid external URL’” | #80946 |
| **MCP 数组参数破坏** | “向 Composio 发送 `handlerIds: [123,456]` 后 API 返回 `{item:123},{item:456}`” | #99270 |
| **压缩超时噪音** | “我手动 `/compress` 报告 120s 超时，而后台已完成，会话 ID 悄悄 changed” | #97948 |
| **xAI 403 认证** | “VPS 上的 Hermes 每隔几分钟就出现 PermissionDeniedError [HTTP 403]” | #82052 |
| **桌面 UI 路由错误** | “在 Cronjob 面板点击 enable/switch 后，页面跳转到聊天而非切换开关” | #95031 |
| **OAuth 令牌意外删除** | “我的 MCP 令牌在短暂网络抖动后消失，我不知道发生了什么” | #76590 |
| **HASS_TOKEN 强制启用** | “我在 config.yaml 中禁用了 homeassistant，但添加 HASS_TOKEN 就强制启用了” | #25065 |

*总体而言，用户期待更稳定的会话体验、跨设备 Bot 功能的可靠性以及更细致的平台 UI（尤其是桌面和 Web 之间的一致性）。MCP 客户端和凭证安全方面的错误尤其令人沮丧，因为它们直接影响自动化脚本。*

---

## 8. 待处理积压（长期未决 Issue/PR）

| Issue/PR | opened / updated | 当前状态 | 关注点 |
|----------|------------------|--------------|------------|
| **#25065** – HASS_TOKEN 强制启用 | 2026-05-13 / 2026-09-02 | 仍 **OPEN** | 环境变量应尊重用户 config.yaml 设置。 |
| **#76590** – MCP OAuth 令牌在 transient 故障后意外删除 | 2026-08-02 / 2026-09-01 | 仍 **OPEN** | 令牌销毁逻辑需要改进。 |
| **#80946** – Windows 本地文件路径 | 2026-08-07 / 2026-09-02 | 仍 **OPEN** | Desktop 的 artifacts 面板需要 Windows

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



好的，这是根据您提供的 PicoClaw GitHub 数据生成的 2026-09-02 项目动态日报。

---

### **PicoClaw 项目动态日报 (2026-09-02)**

#### **1. 今日速览**
PicoClaw 项目在 2026-09-02 呈现出中等活跃度，开发重心集中在对核心功能的修复与增强上。今日无新版本发布，但 Pull Request 活跃度较高（5条），表明开发团队正在积极迭代。社区方面，有3个开放 Issue，其中包含一个影响核心聊天体验的严重 Bug 和一个有价值的功能提案，社区反馈需要关注。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
今日有 2 条 PR 被关闭，标志着相关工作的完成或终止：
*   **PR #3359 [CLOSED] feat(repository-reviews): enforce product and retention contracts**：此 PR 被关闭，可能意味着“存储库审查”功能的重构或强化工作已暂时告一段落或转向。该工作旨在为审查建立可重建的产品契约、资源分类和生命周期规则，属于增强数据可靠性和治理的重要功能。
*   **PR #3299 [CLOSED] [stale] Add native Exa web search provider**：此 PR 因长期未更新而被标记为“陈旧”并关闭。尽管其添加 Exa 作为原生搜索提供商的想法很有价值，但可能由于维护精力有限或其他优先级调整而搁置。这提示社区，集成功能性搜索提供商的需求依然存在，但实现路径可能需要重新讨论。

**整体进展评估**：项目在核心功能（如 Telegram 响应逻辑）上通过多个开放 PR 持续微迭代，但一些较大的功能增强（如存储库审查）进展似乎出现停滞或调整。

#### **4. 社区热点**
今日社区讨论的焦点集中在 Bug 报告上，尤其是 Issue #3269，其获得了 1 个赞和 8 条评论，是活跃度最高的条目。
*   **核心诉求**：用户强烈要求修复 MCP 服务器连接失败导致的智能体循环挂起问题，这直接关系到产品的核心可用性。

#### **5. Bug 与稳定性**
**严重 Bug**
*   **[高严重度] Issue #3269**：当 MCP 服务器连接失败时，智能体循环会挂起，导致 PicoClaw 聊天界面停止响应。这是一个阻塞性问题，严重影响核心用户体验。**目前尚无关联的 Fix PR**，需要优先处理。
*   **[中严重度] Issue #3355**：配置飞书频道时，`config.json` 中出现未知字段 `channel_list.feishu.app_id` 导致报错。这属于配置兼容性问题，阻碍了新用户对飞书频道的使用。**目前尚无关联的 Fix PR**。

**稳定性观察**：多个开放 PR (#3358, #3357, #3356) 都聚焦于修复消息响应、提及逻辑和媒体附件等 Telegram 频道的交互问题，表明项目正在对特定渠道的稳定性和用户体验进行精细化修复。

#### **6. 功能请求与路线图信号**
*   **功能请求**：**Issue #3345** 提出了一个富有洞察力的提案：为低功耗设备（如树莓派、旧手机）创建轻量级“工人模式”，使其能参与家庭边缘计算。这揭示了用户对分布式、多设备协同的潜在需求，可能为项目开辟新的应用场景。
*   **路线图信号**：
    *   **潜在纳入**：Telegram 相关的修复 PR (#3358, #3357, #3356) 获批并合并的可能性很高，将直接提升主流渠道的用户体验。
    *   **可能搁置**：原生 Exa 搜索提供商 (#3299) 的集成计划可能已暂时搁置，路线图中短期内可能不会出现。
    *   **值得探索**：轻量级 worker 模式 (#3345) 和存储库审查功能 (#3359) 的后续发展值得关注，它们代表了项目向边缘计算和数据治理方向延伸的可能性。

#### **7. 用户反馈摘要**
*   **痛点**：用户反馈集中在**服务稳定性**（MCP 连接失败导致完全无响应）和**配置易用性**（飞书配置报错）上。这些是影响用户能否正常使用产品的基础问题。
*   **场景**：用户主要在个人设备（nightly 版本）和不同 AI 模型（如 Qwen3）环境下使用，关注的是开箱即用的稳定体验。
*   **满意度**：对于核心聊天功能，用户有明确的需求，但当前 Bug 降低了满意度。对 Telegram 交互细节（回复、引用）的修复需求也反映了用户对流畅对话体验的期待。

#### **8. 待处理积压**
以下条目已标记为“stale”（陈旧），长期未获更新，建议维护者关注或清理：
*   **Issue #3269**：高严重度 Bug，已 stale，急需处理。
*   **Issue #3345**：有价值的功能提案，已 stale，需决定是否继续推进。
*   **PR #3299**：功能添加 PR，已 stale 并关闭。

**建议**：维护团队应优先处理高严重度的 Bug #3269，并对积压的 Issue/PR 进行清理，明确项目下一步方向，以保持社区的活跃度和信心。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw 项目动态日报（2026-09-02）

---

### 1. 今日速览

- **活跃度评估：中等偏高**  
  今日项目活跃度稳中向上，PR 合并流水线仍在运转（12 待合并 / 1 已合并），社区反馈持续关注容器安全与 provider 模型重构等核心模块；  
- **新 Issue 聚焦 CLI 一致性与消息投递可靠性**，反映出用户对 `ncl` 工具链与分布式消息路由的实际困扰；  
- **无新版本发布**，项目仍处于快速迭代开发阶段，核心功能与安全性优化紧跟进行中。

---

### 2. 版本发布

> ❌ 本日无版本发布

---

### 3. 项目进展

| PR 编号 | 标题 | 类型 | 合并状态 | 影响范围 |
|--------|------|------|----------|-----------|
| [#3698](https://github.com/nanocoai/nanoclaw/pull/3698) | chore(container): bump Bun and Claude runtimes | 维护 | ✅ 已合并 | 更新容器镜像依赖至 Bun 1.4.0 / Claude Code 2.1.257，提升 CI 一致性与组件兼容性。 |

✅ 项目今日共合并 1 项 PR，聚焦运行时维护，为后续功能集成提供更稳定的环境支撑。

---

### 4. 社区热点

目前无评论数或表态高的讨论焦点。但值得关注的是两则 **0 评论 ISSUE**，折射出用户群体对 CLI 一致性行为及消息投递链路的诉求：

- [#3699](https://github.com/nanocoai/nanoclaw/issues/3699) – `ncl destinations create/remove` 命令未自动填充 `--agent-group-id`，与其它 group-scoped 命令行为不一致。
- [#3700](https://github.com/nanocoai/nanoclaw/issues/3700) – 目标 messaging-group 被重建后，本地名称未正确重定向，导致发送成功但目标失效。

建议后续跟踪这两个 issue 是否被归入近期版本 backlog。

---

### 5. Bug 与稳定性

| Issue/PR 编号 | 类型 | 描述 | 严重程度 | 是否有 Fix |
|---------------|------|------|-----------|-------------|
| [#3700](https://github.com/nanocoai/nanoclaw/issues/3700) | Bug | 目的地本地名称在目标 messaging-group 重建后未重定向，导致消息发往已死目标 | ⚠️ 高 | ❌ 尚未有对应 PR 提案 |
| [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) | Bug | `send_card` 返回错误的回调动作，Chat SDK 桥接默默剔除按钮 | ⚠️ 中 | ✅ 已提出修复方案（PR 正在审核） |
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | Bug | 空闲超时机制硬编码 30 分钟，导致慢模型推理任务被错误杀死 | ⚠️ 中 | ✅ 已提出可配置化修复方案 |

📌 已知问题中，#3700 属于跨组消息投递链路的潜在失效风险，请核心测试组重点跟踪。

---

### 6. 功能请求与路线图信号

| 编号 | 类型 | 内容摘要 | 路线图关联 |
|------|------|-----------|----------------|
| [#3699](https://github.com/nanocoai/nanoclaw/issues/3699) | 功能请求 | 要求 CLI 命令 `destinations create/remove` 行为与其它 group-scoped 命令统一，支持自动填充 `agent_group_id` | 可能纳入下一版 UX 改进计划 |
| [#3696](https://github.com/nanocoai/nanoclaw/pull/3696) | Feature | 为周期任务引入“错过运行”策略（missed-run policy），提升调度系统弹性 | 已有 PR 提案处于 OPEN 状态，属于排程子系统重要功能 |

🧩 这两项需求分别涉及 CLI 一致性与作业调度鲁棒性，若后续无大幅度冲突，很可能在 Q4 版本中合并上路。

---

### 7. 用户反馈摘要

截至目前无用户评论可供提炼。但从 open issue 摘要中可梳理出以下潜在用户痛点：

- **配置错误治理成本高**：#3700 中提到因误用平台 ID（channel snowflake vs guild:channel）引发彻底失效，说明文档或校验机制需加强；
- **CLI 工具体验不统一**：#3699 明确指出某类命令缺少上下文感知行为，影响使用效率。

---

### 8. 待处理积压

以下 PRs 长期 open 状态，可能需要维护者 prioritiza：

| PR 编号 | 标题 | 状态 | 建议关注点 |
|--------|------|------|------------|
| [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) | fix(mount-security): close allowlisted-extra mount bypass | OPEN | 安全类 PR 已超过 3 天未更新，建议核查 review 流程 |
| [#3588](https://github.com/nanocoai/nanoclaw/pull/3588) | refactor(providers): implement the opencode provider contract | OPEN | Provider 合约系列 PR 中之一，涉及广泛模块改动，需集中评审 |
| [#3584](https://github.com/nanocoai/nanoclaw/pull/3584) | refactor(providers): implement the codex provider contract | OPEN | 同上，另一重要 provider 改造任务 |
| [#3592](https://github.com/nanocoai/nanoclaw/pull/3592) | feat(groups): add a core-owned speed inference property | OPEN | 性能优化功能提案，需评估是否可纳入即將发布 的特性序列 |

⚠️ 建议维护团队对 provider 相关重构类 PR 设定明确的里程碑 review 时间，避免长期阻塞主分支集成。

--- 

📝 本报告由 GitHub 动态数据截至 2026-09-02 23:59 UTC 自动生成。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-09-02

---

## 1. 今日速览

IronClaw 项目在 2026-09-02 展现出高度活跃的开发态势。过去 24 小时内共产生活动 **33 条**（14 Issues + 19 PRs），其中 **8 个 PR 已合并**，**4 个 Issues 已关闭**。代码重构与 WebUI 组件统一化是今日主旋律——核心贡献者 `henrypark133` 和 `italic-jinxin` 持续推进大规模重构工作（capabilities 阶段解耦、共享组件迁移），同时 Slack 集成与测试并行化等关键功能也在稳步落地。项目整体保持健康节奏，无新增版本发布，当前以功能完善和缺陷修复为主。

---

## 2. 版本发布

**本日无新版本发布**（Latest Release: 无）

---

## 3. 项目进展

以下 PR 已于今日合并至主线，显著推进项目功能与质量：

| PR 编号 | 标题 | 范围 | 影响 |
|---------|------|------|------|
| [#8031](https://github.com/nearai/ironclaw/pull/8031) **[已合并]** | refactor(agent-loop): decompose capability stage mechanics | 核心重构 | 将 `capabilities.rs` 从 2,938 行压缩至 890 行，提取批量调度、dispatch/recovery、失败规范化等私有机能至专注的所有者，保留单一执行路径 |
| [#8028](https://github.com/nearai/ironclaw/pull/8028) **[已合并]** | refactor(agent-loop): align state and stage ownership | 核心重构 | 将检查点状态拆分为内聚的 compaction、recovery、reply-admission、stop-control 模块；将模型使用记账移至 `ModelStage` |
| [#7997](https://github.com/nearai/ironclaw/pull/7997) **[已合并]** | feat(webui): show model capability icons across Inference | WebUI | 在推理模型选择界面展示 Text/图像输入/图像输出等能力图标，含悬停本地化描述和可访问标签 |
| [#8013](https://github.com/nearai/ironclaw/pull/8013) **[已合并]** | ci: parallelize affected crate tests with nextest | CI | 使用 nextest 并行化受影响的 crate 测试（4 个测试进程），替换 Cargo 的顺序调度器 |
| [#8027](https://github.com/nearai/ironclaw/pull/8027) **[已合并]** | fix(live-qa): find the Slack run by message identity, not envelope event_id | Slack | 修复 Slack 事件匹配逻辑，根治连续 33 次 canary 失败（超时 180s） |
| [#8029](https://github.com/nearai/ironclaw/pull/8029) **[已合并]** | fix(live-qa): state Slack admission from the accepted outcome, not dispatch routing | Slack | 紧随 #8027 的后续修复，关闭 review 中发现的唯一问题 |
| [#8014](https://github.com/nearai/ironclaw/pull/8014) **[已合并]** | fix(slack): preserve explicit mentions across callback dedup | Slack | 保留 Slack 消息去重时显式提及，防止 `app_mention` 回调被错误忽略 |
| [#7996](https://github.com/nearai/ironclaw/pull/7996) **[已合并]** | perf(github): compact repository list responses | 性能 | 将 `github.list_repos` 投影至模型有用字段（替代 81 字段完整 REST 对象），单仓库从 5,517 B 降至约 100 B；同规模 `search_repositories` 响应大幅压缩 |

---

## 4. 社区热点

### 最活跃的讨论话题

**🔴 Issue #8025** — Bug: unexpected behavior with special characters in input  
📌 [nearai/ironclaw#8025](https://github.com/nearai/ironclaw/issues/8025)  
> 当在输入字段使用特殊字符时，输出结果不正确——字符被剥离或引发错误。可能与最近版本中的编码变更有关。  
> 👤 kapibarazoku0422-create · 1 条评论 · 创建于 2026-09-01

**🟡 Issue #7986** — perf(github): list_repos ships 81 raw fields per repo (已关闭)  
📌 [nearai/ironclaw#7986](https://github.com/nearai/ironclaw/issues/7986)  
> 性能问题：每个 repo 返回 81 个原始字段，单次调用产生 519 KB 负载，已通过 PR #7996 修复。  
> 👤 henrypark133 · 1 条评论

**🟡 Issue #7921** — perf(llm): OpenAI-family backends send no prompt_cache_key (P2, 开放中)  
📌 [nearai/ironclaw#issue/7921](https://github.com/nearai/ironclaw/issues/7921)  
> Anthropic 传输实现了 `cache_control` 断点，但所有 OpenAI 家族后端（Responses API、Chat Completions 等）未发送 `prompt_cache_key`，导致约 200 次调用后缓存命中率从 82% 骤降至 29%。  
> 👤 henrypark133 · 0 条评论

**🟡 Issue #8012** — A 47k-tool hosted-MCP catalog ingests but no tool is reachable via tool_search  
📌 [nearai/ironclaw#8012](https://github.com/nearai/ironclaw/issues/8012)  
> 47,337 个工具的 MCP 目录完全摄入但无法通过 `tool_search` 访问；截断至 2,000 个工具则正常。  
> 👤 pranavraja99 · 0 条评论

**🟢 Issue #8020** — Use shared SearchField for Workspace and Logs (有对应 PR #8024)  
📌 [nearai/ironclaw#8020](https://github.com/nearai/ironclaw/issues/8020)  
> 提议为工具栏添加紧凑型 `SearchField`，迁移 Workspace 树过滤器和日志过滤器。

### 热点分析

社区当前关注点呈现两条清晰脉络：
1. **性能与效率**：围绕 LLM 缓存命中率、GitHub API 响应体积、工具搜索可扩展性的讨论热度高，部分已通过 PR 落地（#7996、#8024）
2. **系统稳定性**：Slack 集成问题（连续 33 次 canary 失败）和 Docker 沙箱权限问题（UID/GID 命名空间错配）引发用户报告，需重点关注

---

## 5. Bug 与稳定性

按严重程度排列的今日报告/跟踪 Bug：

| 严重度 | 编号 | 标题 | 状态 | 对应 Fix PR |
|--------|------|------|------|-------------|
| **🔴 高** | [#8015](https://github.com/nearai/ironclaw/issues/8015) | [qa-bug] Rootless Docker 沙箱工作区因 UID/GID 命名空间错配不可写 | 🆕 开放 | 无 |
| **🔴 高** | [#8012](https://github.com/nearai/ironclaw/issues/8012) | 47k 工具的 MCP 目录摄入后无法通过 tool_search 访问 | 🆕 开放 | 无 |
| **🟠 中** | [#8025](https://github.com/nearai/ironclaw/issues/8025) | 特殊字符输入导致输出错误或崩溃 | 🆕 开放 | 无 |
| **🟠 中** | [#8016](https://github.com/nearai/ironclaw/issues/8016) | [ci] lock-free turn-state root 测试间歇性超时 | 🆕 开放 | 无 |
| **🟡 低** | [#8027](https://github.com/nearai/ironclaw/issues/8027) | Slack 事件匹配错误（已通过 #8027/#8029 修复） | ✅ 已合并 | [#8027](https://github.com/nearai/ironclaw/pull/8027), [#8029](https://github.com/nearai/ironclaw/pull/8029) |
| **🟡 低** | [#7986](https://github.com/nearai/ironclaw/issues/7986) | GitHub list_repos 返回过多字段（已通过 #7996 修复） | ✅ 已关闭 | [#7996](https://github.com/nearai/ironclaw/pull/7996) |

> ⚠️ **维护者警示**：Issue #8015（Docker 沙箱权限）和 #8012（MCP 规模性问题）均无对应 fix PR，建议优先评估影响范围并分配资源。

---

## 6. 功能请求与路线图信号

从今日 Issues 和 PR 活动中提炼出的功能演进方向：

### 已纳入开发轨道的功能

| 功能 | 提案 Issue | 对应 PR | 状态 |
|------|-----------|---------|------|
| WebUI 共享组件统一（SearchField, InlineNotice, Input, SelectMenu） | #8020, #8019, #8018, #8017 | #8024, #8023, #8022, #8021 | 🟡 审核中 |
| 会话事件传输统一 + WebApp 运行完成通知 | — | [#8010](https://github.com/nearai/ironclaw/pull/8010) | 🟡 开放 |
| Slack 原生 Agent UI + 持久化渐进式回复 | — | [#8006](https://github.com/nearai/ironclaw/pull/8006) | 🟡 开放 |
| NEAR AI 模型能力（模态）保留 | #7970 | [#7998](https://github.com/nearai/ironclaw/pull/7998) | ✅ 已合并 |

### 路线图信号

- **Epic Issue #8026**：[Dogfooding & QA bug fixing 08/31/2026 - 09/06/2026](https://github.com/nearai/ironclaw/issues/8026) 正在进行中，本周重点聚焦内部测试与缺陷修复。
- **性能优化优先事项**：Issue #7921（OpenAI 缓存缺失）和 #8012（MCP 规模限制）暗示下一迭代可能集中于 LLM 后端兼容性和工具系统可扩展性。
- **WebUI 组件现代化**：从 Issues #8017-#8020 的命名和 PR 对应关系看，IronClaw 正在系统性地将分散的 UI 实现迁移至共享设计系统组件。

---

## 7. 用户反馈摘要

从今日 Issues 评论与讨论中提炼的真实用户痛点：

### 🔥 高频痛点

**1. Docker 沙箱权限问题**（#8015）  
> 用户在非 root 环境下运行 IronClaw v1.4.0 时，rootless Docker 沙箱工作区因 UID/GID 命名空间不匹配导致不可写。  
> 影响场景：本地开发环境、CI 流水线

**2. MCP 工具规模限制**（#8012）  
> 用户托管的 47,337 工具 MCP 目录无法正常使用——摄入成功但 `tool_search` 无法定位任何工具。  
> 影响场景：依赖大规模 MCP 工具生态的企业用户

**3. 特殊字符处理缺陷**（#8025）  
> 输入字段中的特殊字符被剥离或引发错误，疑似由最近版本编码变更引入。  
> 影响场景：涉及非 ASCII 字符（国际语言、代码片段、JSON 等）的日常使用

**4. OpenAI 后端缓存失效**（#7921）  
> OpenAI 家族后端未发送 `prompt_cache_key`，导致长会话（约 200+ 调用）后缓存命中率从 82% 崩至 29%。  
> 影响场景：高频率 API 调用、Cost-sensitive 生产环境

### ✅ 用户满意信号

- Issue #7986 的 GitHub 性能问题通过 PR #7996 快速修复，社区反馈积极
- 模型能力图标展示功能（#7997）落地后获得好评，WebUI 体验显著提升

---

## 8. 待处理积压

以下 Issue/PR 长期无响应或停滞，提醒维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 当前状态 | 备注 |
|------|------|------|----------|----------|------|
| [#7921](https://github.com/nearai/ironclaw/issues/7921) | Issue | perf(llm): OpenAI prompt_cache_key 缺失（~82%→29% 缓存崩溃） | 2026-08-27 | 🟡 开放，0 评论 | P2 优先级，影响生产环境成本 |
| [#8012](https://github.com/nearai/ironclaw/issues/8012) | Issue | 47k 工具 MCP 目录不可搜索 | 2026-09-01 | 🆕 开放，0 评论 | 高影响规模问题 |
| [#8015](https://github.com/nearai/ironclaw/issues/8015) | Issue | Rootless Docker 沙箱不可写 | 2026-09-01 | 🆕 开放，0 评论 | QA Bug，需复现验证 |
| [#8016](https://github.com/nearai/ironclaw/issues/8016) | Issue | CI lock-free 测试间歇性超时 | 2026-09-01 | 🆕 开放，0 评论 | CI 稳定性问题 |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | PR | dependabot: tokio-tungstenite 0.29.0→0.30.0 | 2026-08-02 | 🟡 开放，~1 月未处理 | 依赖更新积压 |
| [#7984](https://github.com/nearai/ironclaw/pull/7984) | PR | fix(tools): size tool_search replies | 2026-08-28 | 🟡 开放，~5 天未合并 | 性能修复，等待 review |

> 📌 **建议**：Issue #7921 和 #8012 均具有明确复现步骤和影响描述，建议维护者尽快分配 owner 进行评估。

---

## 附录：活跃贡献者排行榜（2026-09-01 至 2026-09-02）

| 排名 | 贡献者 | 角色 | 今日活动 |
|------|--------|------|----------|
| 🥇 | `henrypark133` | core | 提交/审核 5+ PR，报告 4+ Issues |
| 🥈 | `italic-jinxin` | core | 提交 5+ PR（全部与 WebUI 共享组件相关） |
| 🥉 | `BenKurrek` | core | 提交 3+ PR（Slack 集成修复） |
| 4 | `ironclaw-ci[bot]` | CI | 1 个自动 PR（代码库知识图谱刷新） |
| 5 | `dependabot[bot]` | 自动 | 2 个依赖更新 PR |

---

*报告生成时间：2026-09-02 | 数据来源：GitHub nearai/ironclaw | 覆盖时间窗口：2026-09-01 00:00 UTC — 2026-09-02 00:00 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报

**报告日期**：2026-09-02 | **仓库**：netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 在过去 24 小时内维持了较高的社区活跃度，共产生 **22 条**事务更新（13 条 Issues + 9 条 PRs）。今日的核心特征是 **大量 stale issues 被集中关闭**（9 条），同时 **4 个新 PR 保持 open 状态等待审查**，项目整体处于功能迭代的稳步推进阶段。未发布新版本。重点进展集中在 onboarding 体验优化、视频分享功能上线以及安全性加固方向。活跃度评估：**🟢 正常活跃**，维护团队响应及时，积压清理效率较高。

---

## 2. 版本发布

**无新版本发布。**

近期（截至本报告日期）无 Release 记录，建议关注者在 GitHub Releases 页面订阅通知以获取最新发布动态：https://github.com/netease-youdao/LobsterAI/releases

---

## 3. 项目进展

今日共有 **5 条 PRs 被合并/关闭**，推进了多个关键功能与修复：

| PR # | 标题 | 领域 | 状态 |
|------|------|------|------|
| [#2595](https://github.com/netease-youdao/LobsterAI/pull/2595) | fix: nsis web staging drive preflight | platform: windows | ✅ Closed |
| [#2594](https://github.com/netease-youdao/LobsterAI/pull/2594) | fix(onboarding): polish guide transitions and CTAs | renderer, cowork | ✅ Closed |
| [#2593](https://github.com/netease-youdao/LobsterAI/pull/2593) | feat(artifacts): 支持模型生成视频分享 | renderer, docs, main, artifacts | ✅ Closed |
| [#2592](https://github.com/netease-youdao/LobsterAI/pull/2592) | Liuzhq/fix user guide | renderer, cowork | ✅ Closed |
| [#2591](https://github.com/netease-youdao/LobsterAI/pull/2591) | feat(onboarding): add first-run analytics | renderer, docs, cowork | ✅ Closed |

**亮点 PR 分析：**

- **#2593 — 视频分享功能**：实现了模型生成视频的分享能力，支持任务 ID 溯源、来源校验、远程预览及 URL 哈希解析历史会话视频。这是 artifacts 模块的重要扩展，值得关注。
- **#2594 / #2591 — Onboarding 体验升级**：前者优化了引导页的交互动画、过渡效果和 CTA 样式；后者新增了首次运行的用户漏斗分析埋点，涵盖引导流程、登录交接、欢迎任务创建等关键节点，标志着产品对用户激活指标重视程度的提升。
- **#2595 — Windows 安装器修复**：针对 NSIS 安装程序中 web staging drive 的 preflight 检查进行了修复，提升了 Windows 平台的安装稳定性。

---

## 4. 社区热点

以下 Issues 在今日产生了最多互动（评论数、反应数、讨论深度）：

### 🔥 #2589 — plan mode drains 200 credits !?
- **链接**：https://github.com/netease-youdao/LobsterAI/issues/2589
- **作者**：dreamsdesign | 创建于 2026-09-01 | 评论：0 | 👍：0
- **摘要**：用户强烈抱怨 plan mode（计划模式）消耗了 200 credits，表达了"you guys don't expect a repeat customer!"的不满情绪。这是一个**计费/定价相关的用户体验问题**，反映出产品对付费模型的透明度不足或 plan mode 的成本控制机制存在问题。虽评论数为 0，但情绪强烈，需优先关注。

### 🔥 #1105 — 钉钉定时任务 IM 通知路由 bug
- **链接**：https://github.com/netease-youdao/LobsterAI/issues/1105
- **作者**：MaoQianTu | 评论：1 | 👍：0
- **摘要**：`primeConversationReplyRoute()` 调用时传入了带前缀的 `rawTo`（如 `"direct:ou_xxx"`）而非已剥离前缀的 `delivery.to`，导致钉钉 IM 通知始终无法送达。这是一个**影响核心通信链路**的 bug，对使用钉钉集成的企业用户影响较大。关联 PR #1106 已提交修复。

### 🔥 #1107 — 定时任务 pollOnce() 并发可靠性问题
- **链接**：https://github.com/netease-youdao/LobsterAI/issues/1107
- **作者**：MaoQianTu | 评论：1 | 👍：0
- **摘要**：定时任务的 `pollOnce()` 存在两个并发问题——无重入保护导致重复 IPC 事件，以及 `stopPolling()` 后继续发送幽灵事件。这是一个**高风险稳定性问题**，在高频使用场景下可能导致数据不一致或资源泄漏。关联 PR #1108 已提交修复。

---

## 5. Bug 与稳定性

按严重程度排列今日报告及关联的 Bug：

| 优先级 | Issue/PR | 描述 | 状态 | Fix PR |
|--------|----------|------|------|--------|
| 🔴 **高** | [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) / [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | 定时任务 `pollOnce()` 无重入保护 + 幽灵事件问题 | Open | [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) |
| 🔴 **高** | [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) / [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) | 钉钉 IM 通知因 conversationId 前缀问题无法送达 | Open | [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) |
| 🟡 **中** | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) | 表格 Table 顶部和底部有不明留白（UI 渲染问题） | Open | 无 |
| 🟡 **中** | [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) | 技能删除后列表未同步刷新，已删除技能残留显示（重启无效） | **Closed** | 无 |
| 🟡 **中** | [#2589](https://github.com/netease-youdao/LobsterAI/issues/2589) | plan mode 消耗异常多的 credits（计费问题） | Open | 无 |
| 🟢 **低** | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | 更新最新版本首次启动崩溃 | **Closed** | 无 |
| 🟢 **低** | [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | 会话功能和定时任务功能无法正常工作 | **Closed** | 无 |

> **注**：#1617、#1587、#1589 今日被标记为 stale 并关闭，表明维护团队在批量清理积压旧 issues，但这些 bug 是否真正得到解决存疑，建议确认 fix 状态。

---

## 6. 功能请求与路线图信号

今日社区提出的功能需求及已有实现信号：

| 需求 | Issue/PR | 提出者 | 状态 | 纳入可能性 |
|------|----------|--------|------|------------|
| 定时任务完成后推送系统通知 | [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) | noransu | Closed | 🔄 已有提案，待排期 |
| 支持 hermes-agent 作为 AI 引擎选项 | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | shanxinstart-lab | Closed | ⏳ 低优先级，需社区支持 |
| 添加自定义模型支持 | [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | soitun | Closed | ⚠️ Bug 阻碍功能落地 |
| 本地模型下技能安装能力 | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | wwtghx | Closed | ⚠️ 需与自定义模型协同解决 |
| 模型生成视频分享 | [#2593](https://github.com/netease-youdao/LobsterAI/pull/2593) | liugang519 | ✅ 已合并 | ✅ **已实现** |

**路线图信号分析**：
- **系统通知能力**（#1620）是用户明确的高需求功能，建议维护者将其纳入近期 roadmap。
- **自定义模型 + 本地模型下技能安装**（#1622 / #1632）两个 issue 存在关联性，共同构成了"开放 AI 引擎生态"的基础设施需求。
- **hermes-agent** 作为引擎选项的提议反映了用户对多引擎支持的期望，但短期内可能不在核心路线图上。

---

## 7. 用户反馈摘要

从今日 Issues 评论与内容中提炼的关键用户痛点与使用场景：

| 场景 | 反馈要点 | 对应 Issue |
|------|----------|------------|
| **AI 引擎选择** | 用户期望能像 openclaw 一样，将 hermes-agent 也列为可选 AI 引擎 | #1614 |
| **自定义模型配置** | 添加自定义模型后测试失败，门槛较高 | #1622 |
| **任务复杂度限制** | 复杂任务执行时客户端崩溃，稳定性不足 | #1627 |
| **本地模型 + 技能生态** | 切换到本地模型后，所有原有 skill 无法使用，缺乏安装指引 | #1632 |
| **多语言 UI** | 切换语言后，部分页面（如条款、工具风格设置）仍保留原语言 | #1586 |
| **启动稳定性** | 更新后首次启动崩溃，用户升级体验差 | #1587 |
| **定时任务通知** | 任务完成后无法及时知晓，用户希望系统推送通知 | #1620 |
| **技能管理 UX** | 删除技能后 UI 不刷新，需重启且问题依旧，用户感到困惑 | #1617 |
| **计费透明度** | plan mode 消耗大量 credits，用户对成本不可预期感到不满 | #2589 |
| **钉钉集成** | IM 通知无法送达，钉钉作为国内重要 IM 工具，该问题影响实际使用 | #1105 |

**总体趋势**：用户反馈集中于三个方面——**稳定性**（崩溃、UI 不同步）、**可扩展性**（多引擎、多模型支持）、以及**可用性**（通知、国际化、权限引导）。计费模式的用户教育也是当前痛点之一。

---

## 8. 待处理积压

以下 Issues/PRs 创建时间较早（2026-03-31，距今约 5 个月）且仍未得到有效处理，需要维护者关注：

| 编号 | 类型 | 标题 | 创建时间 | 更新 | 关联 PR | 风险 |
|------|------|------|----------|------|---------|------|
| [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) | Issue | [Bug] 表格 Table 顶部和底部有不明留白 | 2026-03-31 | 2026-09-01 | 无 | 🟡 UI Bug 长期未修复 |
| [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) | Issue | 钉钉定时任务 IM 通知路由 bug | 2026-03-31 | 2026-09-01 | [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) | 🔴 关联 PR 已提交，需 review 合并 |
| [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) | Issue | 定时任务 pollOnce() 并发可靠性问题 | 2026-03-31 | 2026-09-01 | [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | 🔴 关联 PR 已提交，需 review 合并 |
| [#1113](https://github.com/netease-youdao/LobsterAI/pull/1113) | PR | feat(openclaw): flush deferred config sync when gateway workloads drain | 2026-03-31 | 2026-09-01 | — | 🟡 功能增强，5 个月无人 review |
| [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) | PR | 修复钉钉 IM 通知路由问题 | 2026-03-31 | 2026-09-01 | Closes #1105 | 🔴 等待 merge |
| [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | PR | 修复 pollOnce() 并发问题 | 2026-03-31 | 2026-09-01 | Closes #1107 | 🔴 等待 merge |

**积压风险提示**：
- **#1106 / #1108** 是高优先级的 Bug fix PR，已提交近 5 个月未合并，建议维护者尽快 review——两个 bug 均涉及定时任务可靠性，对生产环境用户有直接影响。
- **#1113** 的 OpenClaw 配置同步增强功能同样长期悬停，如无计划合并应予以关闭或转至 issue 讨论。
- **#1112** 的 UI bug 在近半年内未被处理，可能需要补充信息或重新激活。

---

## 📊 今日数据摘要

| 指标 | 数值 |
|------|------|
| 新开 Issues | 1（#2589） |
| 活跃 Open Issues | 4 |
| 关闭 Issues（含 stale 清理） | 9 |
| 待合并 PRs | 4 |
| 已合并/关闭 PRs | 5 |
| 新版本发布 | 0 |
| 长期积压待处理 | 6 条（3 Issues + 3 PRs） |

---

> 本报告基于 2026-09-01 23:59 UTC 前的 GitHub 公开数据自动生成。如需补充或修正，请参考原始链接。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报**
**日期：2026-09-02**

### 1. 今日速览
今日 Moltis 项目整体处于稳定维护与问题闭环期，无新版本发布。过去24小时内，项目处理了2条 Issues（全部关闭）和3条 PRs（2条已合并/关闭，1条待合并）。活跃度适中，开发团队对社区反馈响应迅速，当日报告的2个关键Bug均在同日得到修复并关闭，展现出较高的问题解决效率和健康的项目维护节奏。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日项目实现了2个核心Bug的修复与闭环，进一步夯实了Docker部署兼容性与MCP工具链的稳定性：
*   **修复 Docker 本地连接判定与认证降级**：PR #1249 已合并，修复了 Docker 桥接网络下 `is_local_connection()` 判定失效导致认证降级（auth_disabled）不生效的问题（[PR #1249](https://github.com/moltis-org/moltis/pull/1249)）。
*   **修复 Doctor 对 Streamable-HTTP MCP 服务器的误报**：PR #1251 已合并，重构了 MCP 传输类型定义，使 `moltis doctor` 能正确识别 `streamable-http` 及其别名，不再因缺乏 stdio 命令而误报故障（[PR #1251](https://github.com/moltis-org/moltis/pull/1251)）。
*   **Docker 部署文档待合并**：PR #1252 处于 OPEN 状态，旨在补充新部署中 bind-mount 权限问题的文档说明，等待维护者审查（[PR #1252](https://github.com/moltis-org/moltis/pull/1252)）。

### 4. 社区热点
今日社区互动数据（评论数和点赞数）均为0，但底层开发活动密集。热点集中在开发者对 **Docker 部署网络模型**和 **MCP 协议兼容性**的深度优化上：
*   **[Issue #1112](https://github.com/moltis-org/moltis/issues/1112) & [PR #1249](https://github.com/moltis-org/moltis/pull/1249)**：Docker 默认桥接网络导致的 IP 欺骗与权限问题，是容器化部署的高频痛点。
*   **[Issue #1250](https://github.com/moltis-org/moltis/issues/1250) & [PR #1251](https://github.com/moltis-org/moltis/pull/1251)**：反映出用户对 MCP 工具链健康检查准确性的强烈诉求，尤其是对非 stdio 传输方式的支持。

### 5. Bug 与稳定性
今日报告的2个Bug均已修复并关闭，项目稳定性有所提升：
1.  **[HIGH] Docker 环境下禁用认证失效** (Issue #1112)：在 Docker 容器中关闭 auth 后仍需鉴权。已有修复 PR #1249 合并闭环。
2.  **[MEDIUM] Doctor 误报 Streamable-HTTP MCP 服务器缺失命令** (Issue #1250)：`moltis doctor` 将正常运行的 streamable-http 服务器判定为故障。已有修复 PR #1251 合并闭环。

### 6. 功能请求与路线图信号
今日无显性的新功能请求（Feature Request），但从 PR 细节中可捕捉到清晰的底层架构演进信号：
*   **MCP 传输协议标准化**：PR #1251 引入了“共享的 typed MCP transport definition”并支持规范别名，表明项目正在将 MCP 传输层抽象解耦，这为未来支持更多传输协议（如 sse、stdio 高级特性）铺平了道路。
*   **Docker 部署体验完善**：PR #1252 针对 bind-mount 权限修复的文档化，表明团队正在系统性梳理并修补 Docker 部署路径上的断层，这可能预示着即将到来的 Docker 部署体验专项优化。

### 7. 用户反馈摘要
从今日关闭的 Issues 中提炼出真实用户痛点：
*   **容器化安全配置失效**：用户 methompson 反馈在 Docker 中按预期关闭认证后，系统仍强制执行鉴权，严重影响本地开发与测试效率。
*   **健康检查逻辑僵化**：用户 xorets 反馈 `moltis doctor` 仅以 stdio 命令作为 MCP 服务器存活的判断依据，无法适配 streamable-http 等现代传输方式，导致误报错报，干扰了生产环境的可观测性。

### 8. 待处理积压
*   **文档 PR 需尽快审查**：[PR #1252](https://github.com/moltis-org/moltis/pull/1252) 处于 OPEN 状态，旨在记录 Docker bind-mount 权限修复方案。该文档对防范新用户踩坑至关重要，建议维护者优先审查合并。
*   **历史 Issue 闭环周期较长**：[Issue #1112](https://github.com/moltis-org/moltis/issues/1112) 从创建（2026-06-06）到最终关闭（2026-09-01）跨度近3个月，虽已修复，但反映出部分底层网络逻辑问题的定位与修复周期较长，建议后续关注类似网络判定逻辑的回归测试。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 | 2026-09-02

---

## 1. 今日速览

CoPaw (QwenPaw) 今日保持高度活跃，共处理 **34 条 Issues** 和 **34 条 PRs**，新版本 **v2.2.0-beta.6** 正式发布。主要进展集中在 **ReMe 长期记忆系统**的多个关键修复（embedding 索引重建、启动顺序、安全绕过），以及 **Console UI** 的暗色模式和小幅体验优化。社区讨论热点围绕**多 Agent 协作中的进度同步**和**上下文丢失**问题，Bug 报告数量较前日略有上升，需关注 v2.2.0-beta.6 在 Windows/macOS 双平台的稳定性表现。

---

## 2. 版本发布

### ✅ v2.2.0-beta.6

**发布时间**：2026-09-02

**更新亮点**：

| 变更类型 | PR | 内容 |
|---------|-----|------|
| 🐛 Bug Fix | [#7458](https://github.com/agentscope-ai/QwenPaw/pull/7458) | 修复 Desktop 端 ReMe entry-point 插件打包问题 |
| 🧪 Test | [#7452](https://github.com/agentscope-ai/QwenPaw/pull/7452) | Console 单元测试扩展（+617 cases，语句覆盖率 +10.61pp） |

**破坏性变更**：无

**迁移注意事项**：无

> 📌 相比 v2.2.0-beta.5，本版本以 **Desktop 端修复**和**测试覆盖提升**为主，建议桌面用户优先升级。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 标题 | 状态 | 影响 |
|----|------|------|------|
| [#7468](https://github.com/agentscope-ai/QwenPaw/pull/7468) | fix(memory): start ReMe before model configuration | ✅ Closed | 修复新安装桌面端 ReMe 启动失败问题（`ProviderError`） |
| [#7472](https://github.com/agentscope-ai/QwenPaw/pull/7472) | fix(governance): prevent shell line-continuation bypasses | ✅ Closed | **安全修复**：防止反斜杠换行绕过敏感路径检查 |
| [#7453](https://github.com/agentscope-ai/QwenPaw/pull/7453) | fix(pack): bundle reme-ai Python core in PyInstaller | ✅ Closed | 修复 Windows 打包版 Memory Index 重建 500 错误 |
| [#7466](https://github.com/agentscope-ai/QwenPaw/pull/7466) | fix(console): link Daily Paper to QwenPaw docs | ✅ Closed | 文档一致性修复 |
| [#7432](https://github.com/agentscope-ai/QwenPaw/pull/7432) | fix(config): expand ~ in agent workspace dirs | ✅ Closed | 趋势聚合支持 `~` 路径展开 |
| [#7439](https://github.com/agentscope-ai/QwenPaw/pull/7439) | fix: save screenshots in active project directory | ✅ Closed | 截图保存路径修复 |
| [#7416](https://github.com/agentscope-ai/QwenPaw/pull/7416) | feat(console): expose card_auto_layout toggle | ✅ Closed | DingTalk 频道宽屏卡片配置UI暴露 |

### 正在推进的 PRs

| PR | 标题 | 状态 | 预计影响 |
|----|------|------|---------|
| [#7482](https://github.com/agentscope-ai/QwenPaw/pull/7482) | feat(agent-kanban): add Chinese and English localization | 🔄 Open | Agent Kanban 多语言支持 |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | feat(pawport): import flow from Codex/Qoder | 🔄 Open | 跨平台 Agent 配置迁移 |
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | feat(mobile): introduce QwenPaw native mobile | 🔄 Open | iOS/Android 原生客户端 |
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | fix(acp): prevent Windows ACP agent stalls | 🔄 Under Review | Windows 端 ACP 启动卡死修复 |
| [#7473](https://github.com/agentscope-ai/QwenPaw/pull/7473) | fix(webui): add dark-mode overrides for MCP section | 🔄 Under Review | Console 暗色模式 MCP 区域白底修复 |
| [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441) | feat(memory): add Auto Fin and upgrade ReMe to 0.4.1.11 | 🔄 Open | Auto Fin 集成 + ReMe 升级 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | feat: add reranker UI config panel | 🔄 Open | ReMe 重排序配置 UI |

---

## 4. 社区热点

### 🔥 评论最多的 Issues

| # | 标题 | 评论 | 核心诉求 |
|---|------|------|---------|
| [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | 工具结果丢失 + 同命令重复触发导致 doom-loop | 8 | **Critical**：v2.2.0-beta.1 write_file 后工具结果丢失，触发 doom-loop 保护 |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | 主agent+多子agent需用户主动询问才查询进度 | 5 | **体验问题**：多 Agent 协作缺乏主动进度汇报机制 |
| [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console stream 显示大段重复文本块 | 5 | **UI Bug**：SSE 事件重放路径导致重复内容 |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 危险指令容易逃避检测 | 4 | **安全**：指令绕过 Tool Guard |
| [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) | Embedding index rebuild 500 错误 | 3 | **已修复**：Windows 打包版 ReMe 未正确打包 |
| [#7449](https://github.com/agentscope-ai/QwenPaw/issues/7449) | 智能体协助无法在已存在会话里沟通 | 3 | **设计问题**：Agent 间会话传递逻辑 |
| [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | PDF 中文文件名处理报错 | 3 | **已关闭**：文件路径编码问题 |
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | 自定义提供商加载失败 | 2 | **回归**：max_tokens 迁移后兼容性问题 |

### 💡 热点分析

**1. 多 Agent 协作问题集中爆发**
- [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) 和 [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) 均涉及**主-子 Agent 架构**的稳定性
- 社区对复杂任务的**进度可视化**和**异常恢复**有强烈需求
- 建议：考虑在 v2.2.x 中增加 Agent 树状态监控 UI

**2. 安全问题受到关注**
- [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) 报告危险指令逃避
- [#7472](https://github.com/agentscope-ai/QwenPaw/pull/7472) 已合并相关安全修复
- Tool Guard 的**输入验证**和**命令规范化**需持续加强

---

## 5. Bug 与稳定性

### 🚨 高优先级 (Critical)

| Issue | 标题 | 严重程度 | Fix PR | 状态 |
|-------|------|---------|--------|------|
| [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | 工具结果丢失导致 doom-loop | 🔴 Critical | - | Open |
| [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) | Embedding index rebuild 500 | 🔴 Critical | [#7453](https://github.com/agentscope-ai/QwenPaw/pull/7453) | ✅ Fixed |
| [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) | macOS StdIO MCP spawn 后端被杀 | 🔴 Critical | - | Open |
| [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | 长上下文早期记录丢失 | 🔴 Critical | - | Open |

### ⚠️ 中优先级 (High)

| Issue | 标题 | 严重程度 | Fix PR | 状态 |
|-------|------|---------|--------|------|
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe 后台 embedding 任务失败 | 🟡 High | - | Open |
| [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) | Embedding 配置始终检测为未保存 | 🟡 High | - | Open |
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | 自定义提供商加载失败 | 🟡 High | - | Open |
| [#7480](https://github.com/agentscope-ai/QwenPaw/issues/7480) | Cron 升级重启后非计划补发 | 🟡 High | - | Open |

### 📝 低优先级 / 已修复

| Issue | 标题 | 状态 |
|-------|------|------|
| [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) | Embedding index rebuild 500 | ✅ Closed |
| [#7449](https://github.com/agentscope-ai/QwenPaw/issues/7449) | 智能体协助会话沟通 | ✅ Closed |
| [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | PDF 中文文件名报错 | ✅ Closed |
| [#7463](https://github.com/agentscope-ai/QwenPaw/issues/7463) | llama.cpp 加载 Spark-X2.5 GGUF | ✅ Closed |

---

## 6. 功能请求与路线图信号

### ✨ 新功能请求

| Issue/PR | 标题 | 需求来源 | 纳入可能性 |
|----------|------|---------|-----------|
| [#7455](https://github.com/agentscope-ai/QwenPaw/issues/7455) | 云端提供商统一支持停用 | 用户请求 | ⭐⭐⭐ 高 |
| [#7125](https://github.com/agentscope-ai/QwenPaw/issues/7125) | 侧边栏收起时会话图标置顶 | 用户请求 | ⭐⭐ 中 |
| [#7461](https://github.com/agentscope-ai/QwenPaw/issues/7461) | 支持轮内排队事件注入 | Feature Request | ⭐⭐⭐ 高 |
| [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) | MCP per-tool whitelist 未在 agent 路径执行 | 安全增强 | ⭐⭐⭐ 高 |

### 🗺️ 路线图信号

基于当前 PR 活动，v2.2.x 的**核心方向**似乎包括：

1. **记忆系统增强**：Auto Fin 集成、ReMe 0.4.1.11 升级、重排序 UI
2. **跨平台稳定性**：Windows ACP 启动修复、macOS MCP 修复
3. **UI/UX 优化**：暗色模式完善、聊天滚动锁定、中英文本地化
4. **导入/迁移**：从 Codex/Qoder 导入配置能力

---

## 7. 用户反馈摘要

### 😤 主要痛点

| 场景 | 反馈 | 对应 Issue |
|------|------|-----------|
| **多 Agent 协作** | 子 Agent 执行后主 Agent 不主动汇报进度，需用户追问才查询状态 | [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) |
| **长任务稳定性** | 长上下文会话中早期历史记录突然丢失，任务无法继续 | [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) |
| **Windows 体验** | ACP agent 启动时常卡死数分钟 | [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) |
| **记忆功能** | Embedding 索引重建按钮点击后 500 错误 | [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) |

### 😊 正面反馈

| 反馈 | 来源 |
|------|------|
| v2.2 beta 系列整体功能丰富度提升 | [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) |
| ViBo 记忆方案受到关注（97.5% token 节省） | [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) |

### 🔧 使用场景

- **企业知识管理**：处理长 PDF 文档（160+ 页 Word → OCR → 校对）
- **自动化工作流**：Cron 定时任务 + 备份脚本
- **开发者工具**：本地模型加载（llama.cpp GGUF）

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issues (>5 天)

| Issue | 标题 | 创建时间 | 等待原因 |
|-------|------|---------|---------|
| [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | ViBo Memory 方案提议 | 2026-08-13 | 需官方评估 |
| [#7125](https://github.com/agentscope-ai/QwenPaw/issues/7125) | 侧边栏收起时会话图标置顶 | 2026-08-19 | 功能排队中 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Reranker UI 配置面板 | 2026-07-23 | PR 等待 review |

### 🔴 需紧急关注的 Critical Issues

| Issue | 优先级 | 建议行动 |
|-------|--------|---------|
| [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | 🔴 Critical | v2.2.0-beta.6 可能未完全覆盖，需确认修复状态 |
| [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) | 🔴 Critical | macOS 平台新报告，影响 MCP 工具使用 |
| [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | 🔴 Critical | 长上下文数据丢失，可能涉及核心架构 |

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues (24h) | 34 | → 持平 |
| PRs (24h) | 34 | → 持平 |
| Open Issues | ~19 | → |
| Closed Issues | ~15 | → |
| 新版本 | 1 (v2.2.0-beta.6) | ↑ |
| Critical Bug | 4 | ↑ |

---

*报告生成时间：2026-09-02 | 数据来源：GitHub agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目日报 – 2026‑09‑02**  
*数据来源：过去 24 h Issues/PR 更新、最新 PR 列表（见上方数据概览）*  

---

### 1. 今日速览  
- 项目在过去 24 h 内无新 Issue 产生，仅有 Dependabot 自动提交的两条依赖更新 PR（#649 已合并，#658 待审查）。  
- 总体活跃度处于 **低维护状态**，主要体现在依赖链的例行 bump 上，未见功能开发或 bug 修复。  
- 无新版本发布，说明项目当前处于稳定维护阶段，等待社区或维护者推进下一步迭代。  
- 依赖更新频繁（rust 镜像从 1.95‑slim‑trixie 递进至 1.98‑slim‑trixie），表明 CI/CD 流水线正常运行且自动化工具已介入。  

### 2. 版本发布  
> **无新版本发布**（过去 24 h 内没有 tag 或 release）。  

### 3. 项目进展  
| PR | 状态 | 更新内容 | 影响 | 链接 |
|----|------|----------|------|------|
| #649 | **已合并（CLOSED）** | 将 Dockerfile 中的 Rust 基础镜像从 `1.95-slim-trixie` bump 到 `1.97-slim-trixie` | 保持构建环境与上游安全补丁同步，无功能变更 | https://github.com/qhkm/zeptoclaw/pull/649 |
| #658 | **待合并（OPEN）** | 将同样 Rust 基础镜像从 `1.95-slim-trixie` bump 到 `1.98-slim-trixie` | 若合并，将进一步提升镜像安全性与性能；目前尚未获得审查 | https://github.com/qhkm/zeptoclaw/pull/658 |

> **进展评估**：今日唯一的实质性进展是 #649 的合并，表明项目的依赖链已得到及时更新。#658 为后续的同类更新，待维护者审查后可快速合并，整体向前推进幅度较小，主要体现在基础设施的保持最新上。

### 4. 社区热点  
- 今日 **无评论或点赞** 的 Issue/PR，社区讨论极为安静。  
- 最活跃的对象是 Dependabot 自动生成的 PR（#649、#658），但均未收到人工回复或反应，说明依赖更新目前由机器人全自动处理，人工介入需求低。  
- 链接：#649：https://github.com/qhkm/zeptoclaw/pull/649 ，#658：https://github.com/qhkm/zeptoclaw/pull/658  

> **背后诉求**：社区（或维护者）更倾向于让自动化工具负责例行依赖升级，以减少人工干预；若有功能需求或 bug 报告，尚未在今日表现出来。

### 5. Bug 与稳定性  
- **今日未有新 Bug 报告、崩溃或回归问题**。  
- 因没有 Issues，故无需按严重程度排列或关联 fix PR。  

### 6. 功能请求与路线图信号  
- 今日 **无功能需求 Issue 或相关讨论**。  
- 基于目前仅见的依赖更新 PR，可推断路线图中短期内仍聚焦于 **保持构建环境与安全基线的同步**，而非新功能引入。  
- 若后续出现功能 Issue，维护者可参考近期的 Dependabot 流程评估是否需要在合并前运行额外的测试套件。  

### 7. 用户反馈摘要  
- 由于 **没有 Issues 或评论**，无法提炼具体用户痛点、使用场景或满意度。  
- 若要捕获用户声量，建议在项目 README 或 issue 模板中加入使用调研链接，或定期发起社区问卷。  

### 8. 待处理积压  
- **长期未响应的 Issue**：目前 **无 open Issues**，因此无待处理的遗留问题。  
- **待合并 PR**：#658（依赖 bump）为唯一待审查的 PR，创建于 2026‑09‑01，尚未获得维护者评审或批准。  
  - **建议**：维护者可在今日或次日完成审查；若无冲突，建议快速合并以保持依赖链的连续性。  
  - 链接：https://github.com/qhkm/zeptoclaw/pull/658  

---

#### 总体健康度评估  
- **代码活跃度**：低（仅依赖更新）。  
- **质量保障**：Dependabot 自动化保障了基础镜像的及时升级，降低了安全风险。  
- **社区参与度**：目前极低，需关注是否存在使用者沉默或文档不足导致的反馈缺失。  
- **行动项**：审查并合并 #658；考虑在项目页面增加使用指南或反馈入口，以激发社区互动。  

---  

*报告生成时间：2026‑09‑02 00:00 UTC*  
*数据截止：过去 24 小时（2026‑09‑01 00:00 → 2026‑09‑02 00:00）*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-02

---

## 1. 今日速览

2026-09-02 是 ZeroClaw 高度活跃的一天。项目在过去 24 小时内产生了 **31 条 Issue 更新**（新开/活跃 27 条，关闭 4 条）和 **50 条 PR 更新**（待合并 36 条，已合并/关闭 14 条），合并吞吐量尤其突出。主要推进围绕 **安全架构现代化**（#8289 RFC 7141 推进至 stage 3–6 的多个 stacked PR）、**OTel 可观测性**（跨轮对话关联）以及 **多个 P1 Bug 修复**。RFC 讨论区持续火热，架构 RFC #9487 和 #9488 评论数分别达 31 和 25 条，说明核心维护者在深入审议重磅设计变更。**今日无新版本发布**，但安全路线图的密集 stacked PR 队列表明下一个里程碑版本将带来重大破坏性变更。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 3.1 合并/关闭的重要 PR

| # | 标题 | 状态 | 意义 |
|---|------|------|------|
| **#9352** | feat(observability): add cross-turn conversation correlation to OTel export | ✅ **CLOSED** | 实现了 RFC #8933 设计的跨轮对话归因，将 `conversation_id` 贯穿完整 turn 生命周期，OpenTelemetry 现在可以将同一会话的多个轮次分组，彻底改善分布式追踪能力 |
| **#9395** | [Bug]: plugin wasi:http egress has no destination policy | ✅ **CLOSED** | 修复了 plugin wasi:http 出站流量无策略配置的安全漏洞（`crates/zeroclaw-plugins/src/component.rs`、`wasm_memory.rs`、`http_request.rs`），阻止了潜在数据泄露 |
| **#10063** | [Bug]: Anthropic-backed compatible gateways reject image_url blocks inside tool results | ✅ **CLOSED** | 修复了 OpenAI 兼容适配器在工具返回图像时失败的回归问题 |
| **#10040** | ci: restore Lint timeout headroom for fork PRs | ✅ **CLOSED** | 恢复了 fork PR 的 Lint 超时缓冲，提升了 CI 可靠性 |
| **#9338** | feat(provider): add Crusoe Managed Inference | 🔵 OPEN（blocked） | 新增 Crusoe 为第一类 OpenAI 兼容提供商，按 repo 8 文件约定实现，需 reviewer 关注 |

### 3.2 推进中的重大安全路线图（#8289 RFC 7141）

以下 9 个 stacked PR 形成一条完整的 **principal 安全边界** 实现链，全部由 @JordanTheJet 提交，等级均为 `distinguished contributor`，风险 `high/medium`，均靶向 `master`：

| PR | Stage | 核心内容 |
|----|-------|---------|
| **#10248** | stage 2 | Canonical principals and shared grant resolution — 重构 `AuthenticatedIdentity` 替代旧 grant 模型 |
| **#10255** | stage 3 | oidc.\<alias\> token-verification provider — 新增 OIDC 认证提供者 |
| **#10259** | stage 3 | Enforce authenticated principals on RPC with native+peercred — RPC 层强制身份验证 |
| **#10263** | stage 4 | Compose principal tool selectors into agent sessions — 工具选择器按主体组合 |
| **#10265** | stage 4 | Principal-owned sessions with predicated storage deletes — 会话按主体隔离，存储删除有前置条件 |
| **#10268** | stage 4 | Private principal memory with storage-level plane isolation — 内存平面隔离 |
| **#10270** | stage 5 | Browserless OIDC enrollment via device grant and client_credentials — 浏览器无关的 OIDC 登记 |
| **#10274** | stage 5 | Route-layer auth with principal consumption on config surface — 网关路由层鉴权 |
| **#10275** | stage 6 | Retire Nevis/iam_policy with config shim — 废弃遗留模块并补充锁恢复文档 |
| **#10321** | stage 5 | Browser PKCE and cross-surface enrollment API — 浏览器 PKCE 流程 |

> ⚠️ **注意**：这些 PR 互为依赖，形成 10+ 层 stacked chain，review 需从 #10248 逐层向上，建议维护者提前预留时间窗口进行系统性 review。

### 3.3 其他推进中的重要 PR

| # | 标题 | 风险 | 意义 |
|---|------|------|------|
| **#8966** | feat(agent): carry live provider identity on usage events | 🔴 HIGH | 修复 context meter ceiling 错误（使用 runtime-profile trim budget 而非真实 context window），并正确从 serving provider 解析 context window |
| **#9841** | fix(sop): drive headless SOP runs, and close the five defects | 🔴 HIGH | 修复 SOP 无头运行缺陷，合并 @Lusitaniae/@pedrogamesyoo 的遗留工作并修复 4 个阻断性 review 发现 |
| **#9746** | fix(tools): per-agent ownership scoping for session tools and discord_search | 🔴 HIGH | 修复 session tools 和 discord_search 的 per-agent 所有权竞争（check/use race），修复 Discord 命名空间断言 |
| **#9402** | fix(runtime): avoid nesting Docker sandbox inside Docker runtime | 🔴 HIGH | 防止 Docker 运行时被二次包装进 Docker sandbox，使用规范 `RuntimeKind` 选择隔离层 |
| **#10262** | fix(rpc): close RPC connections on daemon reload | 🟡 MED | daemon 原地重载时关闭 local-socket 和 WSS RPC 连接，解除 zerocode quickstart 卡死问题 |
| **#9739** | feat(zerocode): multi-session panes with agent sidebar | 🟡 MED | zerocode TUI 新增多会话面板和 agent 侧边栏，改善快速启动体验 |
| **#9713** | feat(runtime): expose token accounting on history-trim events | 🟡 MED | history-trim 事件现在报告 `tokens_before`/`tokens_after`，解决大裁剪被误判为正常 turn 消耗的问题 |
| **#10220** | feat(cron): add deterministic pre_hook precondition gate | 🔴 HIGH | cron 任务支持 `[cron.<alias>.pre_hook]` 前置条件检查，提升调度可靠性 |

---

## 4. 社区热点

### 4.1 Issue 讨论热度排行

**RFC #9487** — Runtime-owned conversation sessions and transport surface adapters  
📊 31 条评论 | 标签：`priority:p2`, `risk:high`, `type:rfc`, `needs-maintainer-review`  
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/9487  
> **诉求分析**：这是 Revision 5 版本，提议将对话会话所有权从 agent 转移到 runtime 层，并设计 transport surface adapters 以统一多通道消息路由。该 RFC 经过 5 次修订，维持高讨论热度说明核心维护者对其架构方向存在分歧，是 ZeroClaw 未来通信模型的关键决策点。

**RFC #9488** — Unified file and attachment architecture for conversation surfaces  
📊 25 条评论 | 标签：`priority:p2`, `risk:high`, `type:rfc`  
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/9488  
> **诉求分析**：Revision 10，经过 10 次修订，提议统一对话界面中的文件和附件架构。讨论热度高表明文件处理的抽象层设计是当前多个 channel 实现（core/webhook/discord/mqtt）共有的痛点。

**RFC #6996** — Granular sandbox policy (filesystem and network restrictions)  
📊 20 条评论 | 标签：`priority:p2`, `risk:high`, `status:in-progress`  
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6996  
> **诉求分析**：ZeroClaw 存在两层文件系统策略漂移：应用层 `SecurityPolicy` 和 OS 沙箱后端（Bubblewrap/Landlock/Seatbelt），RFC 提议统一为一致的粒度策略表达，映射到 agent risk profiles。该议题与 #8289 安全路线图高度协同。

**RFC #8396** — Make wire protocol first-class in provider construction  
📊 17 条评论 | 标签：`priority:p2`, `risk:high`, `type:rfc`  
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8396  
> **诉求分析**：提议将 wire protocol（`chat_completions` / `anthropic` 等）作为 provider 构建的第一等公民，提升 provider onboarding 的 DX。遵循 FND-003 Rev. 15 (#9496)。

**#8692** — Maintainer decision queue tracker  
📊 14 条评论 | 标签：`priority:p2`, `type:tracker`  
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8692  
> **诉求分析**：这是 RFC 和设计 issue 的维护者决策队列索引。持续活跃说明大量 RFC 等待决策，维护者工作积压值得关注。

### 4.2 PR 热度

**#10321** — Browser PKCE and cross-surface enrollment API（#8289 stage 5）  
📊 stacked on 8 层 PR chain 之巅，是当前最大规模的 stacked PR 序列  
🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10321

**#9739** — Multi-session panes with agent sidebar  
📊 zerocode TUI 重大 UX 改进，社区期待度高  
🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/9739

---

## 5. Bug 与稳定性

### 🔴 P0 — 最高严重性（数据丢失/安全风险）

| # | 标题 | 状态 | 修复进展 |
|---|------|------|---------|
| **#10495** | Config::save() 可以用几乎空文件替换用户的完整 config.toml | 🟡 OPEN | 需立即处理——`~/.zeroclaw/config.toml`（109 KB，25 agents）被替换为 702 字节的骨架文件 |

### 🔴 P1 — 高严重性（工作流阻断/安全风险）

| # | 标题 | 状态 | 修复进展 |
|---|------|------|---------|
| **#8279** | delegate tool 绕过父级 tool allowlist | 🟡 OPEN | 子 agent 可调用父策略排除的工具，S0 安全风险 |
| **#9395** | plugin wasi:http 出站无目标策略 | ✅ CLOSED | 已合并修复 |
| **#9779** | sops_dir 默认值未被 daemon 遵守，SOP 静默不加载 | 🟡 OPEN | cron 和 channel 入口均受影响，无错误/警告日志 |
| **#9850** | llm_task 通过 legacy factory 构建 provider，丢失 alias 特定配置 | 🟡 OPEN | Azure/OAuth/requires_openai_auth 配置丢失 |
| **#10063** | Anthropic-backed 兼容网关拒绝 tool results 中的 image_url | ✅ CLOSED | 已修复 |
| **#10513** | RPC `sops.run` 返回的 run ID 对应无任何执行的步骤 | 🟡 OPEN | `RpcDispatcher::handle_sops_run` 缺少 driver sink |
| **#10523** | Bootstrap 文件在 6000 字符处截断，对操作者不可见 | 🟡 OPEN | `compact_context` 启用时 SOUL/IDENTITY 等文件静默截断 |

### 🟡 P2 — 中等严重性（降级行为）

| # | 标题 | 状态 | 修复进展 |
|---|------|------|---------|
| **#5269** | 验证并文档化 nix run 安装路径 | 🟡 OPEN | UX/DX 问题，`cargo binstall zeroclaw` 缺失文档 |
| **#9896** | status/startup banner 报告 `Memory: none` 但实际 backend 是 sqlite | 🟡 OPEN | 误导性状态行 |
| **#7899** | OpenAI STT provider 忽略 env-based 凭证 | 🟡 OPEN | `OpenAiWhisperProvider::from_config()` 仅读取 config 字段 |
| **#10530** | Pass Anthropic extended-thinking params through OpenAI-compatible providers | 🟡 OPEN | 今天新开，Claude via OpenAI-compatible 网关时 extended thinking 被静默禁用 |

---

## 6. 功能请求与路线图信号

### 6.1 高置信度纳入下一版本的功能

| 功能 | Issue/PR | 依据 |
|------|----------|------|
| Principal 隔离安全架构（#8289 RFC 7141） | #10248–#10321 | 9 个 stacked PR 密集推进，维护者主导，high risk |
| WASM 运行时插件化（可选 channel/tool 移除编译期 feature） | #8850 | `status:accepted`，已有清晰路线（13 个 SOP 能力 tracker #8288 协同） |
| 跨轮 OTel 对话关联 | #9352 | ✅ 已合并，实现 RFC #8933 |
| 无头 SOP 驱动及缺陷修复 | #9841 | 合并 @Lusitaniae 遗留工作，修复 4 个阻断性发现 |
| Per-agent session tool 所有权隔离 | #9746 | 修复 check/use race，distinguished contributor |
| Cron pre_hook 条件门控 | #10220 | `status:accepted`，确定性前置检查 |

### 6.2 值得关注的新功能请求

| 功能 | Issue | 亮点 |
|------|-------|------|
| Append-only session event history + 确定性状态重放 | #10526 | 与 #9487 协同，彻底重构会话持久化模型 |
| WASM plugin 运行时可组合架构 | #10076 | 核心 API、类型化扩展点、可替换 providers |
| Verbatim channel send（无需 agent turn）| #10050 | 网关直接透传消息到通道，绕过 agent 编排层 |
| OpenAI-compatible provider 透传 Anthropic extended-thinking | #10530 | 今天新开，OpenAI-compatible 部署路径上的 Claude 能力缺失 |
| mdBook 升级至 0.5.4 + 内置图片缩放 | #10510 | 改善文档可访问性 |
| TypeScript CI gate for web/ | #10306 | 防止 75 个误导性 tsc 错误阻塞 master |

---

## 7. 用户反馈摘要

从 Issue 评论和 bug 报告中提炼的真实用户痛点：

| 痛点 | 来源 | 严重程度 |
|------|------|---------|
| **配置文件静默损坏** | #10495 用户报告：109 KB 配置被 702 字节骨架替换，无任何提示 | 🔴 S0 |
| **SOP 静默不加载** | #9779：依赖默认值时整个 SOP 引擎不报错、不告警、不记录日志 | 🔴 S2 |
| **delegate 安全绕过** | #8279：子 agent 可突破父级工具策略，数据泄露风险 | 🔴 S0 |
| **nix run 安装路径缺失文档** | #5269：用户感谢项目但强烈抱怨安装体验 | 🟡 S2 |
| **Bootstrap 文件截断无感知** | #10523：compact_context 截断 AGENTS.md 等文件，操作者完全不知情 | 🟡 S2 |
| **STT 凭证不支持环境变量** | #7899：配置方式不统一，开发者困惑 | 🟡 S2 |
| **status 命令显示误导性内存状态** | #9896：报告 `none` 实际用的是 sqlite | 🟢 S2（显示问题） |

---

## 8. 待处理积压

### 8.1 长期未响应的 Issue（>30 天无 maintainer 评论）

| # | 标题 | 创建时间 | 标签 | 备注 |
|---|------|----------|------|------|
| **#5269** | Bug: validate and document nix run installation | 2026-04-04 | `priority:p2`, `good first issue` | 近 5 个月无 maintainer 回应，影响 Nix 用户首次体验 |
| **#6996** | RFC: Granular sandbox policy | 2026-05-28 | `status:in-progress` | 虽标记进行中但 20 条评论集中在早期，仍需维护者推进决策 |
| **#7899** | Bug: OpenAI STT provider ignores env-based credentials | 2026-

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*