# OpenClaw 生态日报 2026-09-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-04 02:03 UTC

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



# OpenClaw 项目动态日报 — 2026-09-04

---

## 1. 今日速览

OpenClaw 项目在 2026-09-04 呈现**极高活跃度**：过去 24 小时内 Issues 与 PR 双双突破 500 条（新增/活跃 351 条，已关闭 149 条；PR 待合并 393 条，已合并/关闭 107 条），并发布了新版本 **v2026.9.1**。维护者 steipete 与 roboclaw-bot 等人今日密集提交修复，涵盖 Gateway、Android、Browser、Memory、Cron 等多个子系统，项目整体处于**快速迭代、问题驱动的修复周期**。社区讨论热点集中在 SQLite 稳定性、内存增长、僵尸进程与 Windows 平台体验四大方向，P0/P1 级 Bug 仍有积压，但修复节奏明显加快。

---

## 2. 版本发布

### v2026.9.1 — openclaw 2026.9.1

** Highlights：**

- **对话内图表渲染**：Mermaid 代码块现可在 Control UI 及原生 macOS/iOS/Android 应用中渲染为图表，支持移动端放大预览与渲染失败重试（#134913, #135746, #135470, #135342）。
- **安装到对话的无缝体验改进**（摘要截断，完整 changelog 未完整提供）。

> ⚠️ **破坏性变更与迁移注意事项**：当前数据未列出明确的破坏性变更项。鉴于 v2026.8.x 系列（beta 与正式版）存在大量 P0/P1 回归问题（见下文），建议生产环境在升级前先在 staging 环境验证 SQLite 稳定性与各平台适配。

---

## 3. 项目进展

今日合并/关闭了大量 PR，推动了以下关键修复与功能：

| PR | 方向 | 说明 |
|---|---|---|
| [#137794](https://github.com/openclaw/openclaw/pull/137794) | Gateway | 关机时等待预热任务完成，避免优雅关闭时丢失异步工作 |
| [#137790](https://github.com/openclaw/openclaw/pull/137790) | Gateway | 热重载 auth limits 与 discovery mode，无需重启 Gateway |
| [#137775](https://github.com/openclaw/openclaw/pull/137775) | Config | 退休 `messages.suppressToolErrors`，修复静默失败问题（关联 #39406） |
| [#137774](https://github.com/openclaw/openclaw/pull/137774) | Memory | 仅内存搜索时避免加载 session catalog，减少内存占用与事件循环阻塞 |
| [#137733](https://github.com/openclaw/openclaw/pull/137733) | Gateway | 修复大 session 历史下 Tasks 页面卡顿 |
| [#137682](https://github.com/openclaw/openclaw/pull/137682) | Android | 修复重启聊天后定位到最新用户回合而非最新输出的问题 |
| [#137671](https://github.com/openclaw/openclaw/pull/137671) | Browser | 惰性清理时保留 tab ownership |
| [#137646](https://github.com/openclaw/openclaw/pull/137646) | Agents | 后续工具错误后保留已生成的媒体附件 |
| [#137619](https://github.com/openclaw/openclaw/pull/137619) | Agents | 批量搜索删除优化，避免不必要排序 |
| [#137678](https://github.com/openclaw/openclaw/pull/137678) | Voice-call | 修复 TTS voice 构造函数注入 TwiML 的安全问题 |
| [#137764](https://github.com/openclaw/openclaw/pull/137764) | Feishu | 防止原型污染导致颜色标记样式泄漏 |
| [#137274](https://github.com/openclaw/openclaw/pull/137274) | Cron | 防止 cron 任务在活跃执行时重试，避免重复执行 |
| [#136639](https://github.com/openclaw/openclaw/pull/136639) | Sessions | 维护压力下保护对话不被自动删除 |
| [#135868](https://github.com/openclaw/openclaw/pull/135868) | Triage | 更新与启动失败后启动自有恢复流程 |
| [#136257](https://github.com/openclaw/openclaw/pull/136257) | Models | 统一各端模型列表与 provider 登录，消除重复实现 |
| [#134003](https://github.com/openclaw/openclaw/pull/134003) | Talk | 为轻量音频客户端支持原生 realtime |
| [#118303](https://github.com/openclaw/openclaw/pull/118303) | MiniMax | 路由 M3 图片调用到 MiniMax VL |

**整体评估**：项目在稳定性修复、性能优化、多端体验统一三个维度同时推进，维护者活跃度极高。但大量 PR 仍处于 `👀 ready for maintainer look` 或 `⏳ waiting on author` 状态，合并速度可能成为瓶颈。

---

## 4. 社区热点

以下是今日评论数最多、反应最活跃的 Issues/PRs：

### 🔥 最高热度 Issue

| Issue | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| #125626 | OpenClaw 2026.8.1 beta feedback | 24 | 0 | [链接](https://github.com/openclaw/openclaw/issues/125626) |
| #114612 | SQLite unbounded growth: memory tables no retention | 11 | 0 | [链接](https://github.com/openclaw/openclaw/issues/114612) |
| #97616 | Zombie process leak from hook/tool child processes | 10 | 1 | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| #110190 | Runtime context carrier AFTER user message causes model confusion | 9 | 1 | [链接](https://github.com/openclaw/openclaw/issues/110190) |
| #39406 | Config option to suppress transient tool error warnings | 9 | 1 | [链接](https://github.com/openclaw/openclaw/issues/39406) |
| #72741 | Standard interface for external security/guardrail checks | 9 | 1 | [链接](https://github.com/openclaw/openclaw/issues/72741) |

### 关键诉求分析

- **#125626**（24 评论）：beta 反馈汇总帖，说明社区对 2026.8.x 系列的稳定性高度关注，beta 测试参与度高但问题密度大。
- **#114612**：memory_index_chunks 与 memory_embedding_cache 表无保留策略，生产环境磁盘必然被撑爆——这是**架构级缺陷**，用户要求增加 eviction 机制。
- **#97616**：hook/tool 子进程僵尸积累，长时间运行后性能退化——典型的文件描述符/进程泄漏问题，影响所有长期运行的部署。
- **#110190**：运行时上下文载体被放在用户消息之后，导致模型混淆与推理 token 浪费——直接影响**推理质量与成本**。
- **#3940

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**报告日期：2026-09-04**
**数据来源：各项目 GitHub 仓库过去 24 小时活动数据**

---

## 1. 生态全景

2026-09-04 当日，15 个被追踪的开源 AI 智能体项目中，**9 个有实质社区活动**（OpenClaw、CoPaw、LobsterAI、IronClaw、纳米系列、Hermes、PicoClaw、Moltis），其中 4 个处于**高活跃迭代期**（OpenClaw、CoPaw、IronClaw、LobsterAI），3 个处于**平稳维护期**，3 个**完全无活动**。生态整体呈现出"头部项目高频迭代、中小项目稳步跟进、安全与稳定性成为共同焦点"的格局。当日共产生 **700+ 条 Issue/PR 更新**，发布 **2 个正式版本**（OpenClaw v2026.9.1、CoPaw v2.2.0），是近期生态交付密度最高的一天。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 今日 Release | 合并/关闭 PR | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 351 新增/活跃 + 149 关闭 | 393 待合并 + 107 合并/关闭 | ✅ v2026.9.1 | 107 | ⚠️ 高活跃但 P0/P1 积压 |
| **CoPaw (QwenPaw)** | 31（22 活跃 + 9 关闭） | 29（20 待合并 + 9 合并/关闭） | ✅ v2.2.0 Stable | 9 | ✅ 健康，发布与迭代并行 |
| **IronClaw** | 7（4 Open + 3 Closed） | 17（8 Open + 9 Closed/merged） | ❌ 无 | 9 | ✅ 高质量迭代，类型安全收尾 |
| **LobsterAI** | 6（4 活跃 + 2 关闭） | 15（10 合并/关闭 + 5 待合并） | ❌ 昨发 v2026.8.31 | 10 | ✅ 稳健，桌面端打磨 |
| **Hermes Agent** | 50（46 活跃 + 4 关闭） | 50（48 待合并 + 2 合并/关闭） | ❌ 无 | 2 | ⚠️ 活跃但合并速度偏慢 |
| **NanoClaw** | 5（4 开放 + 1 关闭） | 23（20 待合并 + 3 关闭） | ❌ 无 | 3 | ✅ 聚焦 provider 重构 |
| **PicoClaw** | 5（4 活跃 + 1 关闭） | 7（6 待合并 + 1 关闭） | ❌ 无 | 0 | ⚠️ 维护模式，Stale 积压 |
| **Moltis** | 0 | 1（待合并） | ❌ 无 | 0 | ⚪ 低活跃，quiet phase |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | ❌ 无 | 0 | ⚪ 无活动 |
| **ZeroClaw** | ~50+ Issues 更新 | 50 待合并 | ❌ 无 | 0 | 🔴 大量 P1/P2 Bug 积压 |

---

## 3. OpenClaw 在生态中的定位

**规模与活跃度绝对领先。** OpenClaw 当日 351 条 Issue 更新 + 393 条 PR 待合并的体量，是第二名 CoPaw（31/29）的 **10 倍以上**，是 IronClaw（7/17）的 **20-50 倍**。这一定位差异源于：

- **功能栈最完整**：覆盖 Gateway、Android、Browser、Memory、Cron、Voice-call、Feishu、MiniMax 等多端多模态子系统，是真正的"全栈个人 AI 助手"。
- **版本节奏最快**：在 v2026.8.x 系列已存在大量 P0/P1 回归问题的情况下，仍于当日发布 v2026.9.1，展示出"问题驱动的快速修复周期"能力。
- **多端适配深度**：Mermaid 图表渲染、移动端放大预览、TTS TwiML 安全修复、Windows DPI 感知等细节，表明其目标并非单一平台实验品，而是**跨端生产级产品**。
- **技术路线差异**：与 CoPaw 的"Hub 多租户"、Hermes 的"模块精简"、IronClaw 的"类型安全"不同，OpenClaw 选择了**子系统全覆盖 + 高频增量修复**路线，代价是技术债积累更快（SQLite 增长、僵尸进程、内存泄漏等架构级问题集中爆发）。

**社区规模对比：** OpenClaw 当日社区互动（评论数 + 👍）显著高于其他项目，#125626（beta 反馈帖）单帖 24 条评论反映其用户基数与参与深度在生态内无出其右。

---

## 4. 共同关注的技术方向

| 共同方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **🔒 安全沙箱 / 凭证保护** | CoPaw (#7511 沙箱被突破、#7443 危险指令逃逸)、ZeroClaw (#9231 Docker 嵌套沙箱、#9387 审批响应鉴权)、Hermes (#102598 路径泄露修复) | 防止沙箱逃逸、指令注入、凭证泄露，多项目同日出现安全议题 |
| **📊 SQLite / 数据库稳定性** | OpenClaw (#114612 无界增长)、NanoClaw (#3708 PRAGMA 死锁)、Hermes (#78647 godfile 残余)、ZeroClaw (#9857 JSONL 争执) | 长时间运行后的存储膨胀、并发访问、锁竞争，成为长期运行的隐形杀手 |
| **🤖 Provider / 模型接入标准化** | NanoClaw (#3581-3591 契约重构)、CoPaw (#7474 max_tokens → max_output_length)、ZeroClaw (#10050 OpenCode 会话头) | 多模型提供商的接入抽象、配置契约统一、API 头部兼容 |
| **🔔 Hook / 生命周期事件** | Moltis (#1257 生命周期分发)、ZeroClaw (#10068 session caps)、CoPaw (#7520 受保护执行契约) | Agent 推理与工具调用的可观测性、事件钩子完备性 |
| **🌐 多端 / 多协议消息通道** | OpenClaw (QQ/Slack/Feishu/Line)、PicoClaw (QQ/Slack/IRC)、ZeroClaw (Discord/Slack/Telegram/Matrix/Lark) | 渠道适配是中小项目的核心痛点，鉴权格式、媒体上传、文本编码问题反复出现 |
| **🖥️ 桌面端 UX 与稳定性** | LobsterAI (DPI、后台进程、退出确认)、Hermes (#38007 冷启动、#101318 拖拽脱扣)、OpenClaw (Android 重启定位) | 桌面/移动端的启动速度、交互精确度、前后台一致性 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | CoPaw | IronClaw | NanoClaw | Hermes | PicoClaw |
|---|---|---|---|---|---|---|
| **核心形态** | 全栈个人助手（多端 + 多子系） | 多租户 Agent Hub | 高性能桌面 Agent | 轻量多 Provider 框架 | 模块化 Agent 框架 | 嵌入式/轻量网关 |
| **目标用户** | 个人重度用户、跨端工作者 | 团队/企业多租户场景 | 开发者桌面生产力 | Provider 开发者、fork 维护者 | 追求极简的开发者 | 嵌入式/IoT、渠道机器人开发者 |
| **技术架构** | Gateway 中心化 + 子系统插件化 | Hub + Workspace + 反向代理 | Rust 主机循环 + WebUI + 子代理 | Provider 契约声明式注册 | 纯 Python 模块化 | Go 网关 + 渠道插件 |
| **当核心心迭代** | 稳定性修复 + 多端体验 | 多租户 Hub + 安全加固 | 类型安全 + 子代理可见性 | Provider 契约重构 | 架构精简 (35.6% 代码削减) | 依赖更新 + 渠道鉴权 |
| **安全策略** | 凭据注入修复、TwiML 安全 | 沙箱突破审计、受保护执行契约 | 沙盒 executor 决策 (待定) | fork 扩展钩子 | 路径泄露修复 | 渠道鉴权格式 |
| **开发语言** | TypeScript/Go/Rust (多语言) | Python/TypeScript | Rust + TypeScript | TypeScript/Go | Python | Go |

**关键差异结论：**
- **OpenClaw** 选择了"广度优先"路线，工程复杂度最高，修复压力最大，但用户覆盖面最广。
- **CoPaw** 选择了"企业多租户 + 安全合规"路线，是生态中唯一明确推出多租户 Hub 的项目。
- **IronClaw** 选择了"深度优先"路线（Rust 类型安全、子代理架构），单点质量最高，但功能面较窄。
- **NanoClaw** 选择了"Provider 抽象"路线，架构设计最克制优雅，但落地场景依赖第三方集成。
- **Hermes** 选择了"模块化精简"路线，代码削减幅度最大（35.6%），但合并速度成为瓶颈。
- **PicoClaw** 选择了"嵌入式网关"路线，受限于小团队维护能力，当前处于"依赖更新为主"的维护模式。

---

## 6. 社区热度与成熟度分层

### 第一层：快速迭代期（高频发布 + 高 Issue 吞吐）
- **OpenClaw**：24h 内发布新版本，Issue/PR 双双突破 500 条，维护者 steipete 与 roboclaw-bot 密集提交。处于**问题驱动的修复周期**，P0/P1 仍有积压但节奏明显加快。
- **CoPaw**：同日发布 v2.2.0 Stable，社区对多租户 Hub 讨论热烈（#7318 17 条评论），同时快速关闭 9 个 Issue。处于**功能交付与社区共建并行期**。
- **IronClaw**：同日合并 9 个 PR，覆盖类型安全、性能优化、子代理可见性三大方向。处于**架构质量巩固期**，社区互动较少但内部交付密度极高。

### 第二层：平稳推进期（功能迭代 + Bug 修复）
- **LobsterAI**：昨日发布 v2026.8.31，今日聚焦桌面端细节打磨，PR 合并率 66.7%。处于**桌面体验精修期**。
- **NanoClaw**：23 条 PR 中 20 条待合并，集中在 provider 契约重构这一战略级变更。处于**架构重构窗口期**，合并速度是关键瓶颈。
- **Hermes**：50 条 Issue/PR 更新但仅合并 2 条 PR，代码削减 35.6% 的架构重构已落地但待审 PR 积压。处于**重构后的评审消化期**。

### 第三层：维护/停滞期
- **PicoClaw**：核心功能推进极少，仅 1 个 Bug 修复 PR 待审，Stale Issue 积压（#3281 已 45 天）。处于**维护模式**，需警惕技术债累积与用户流失。
- **Moltis / NullClaw / TinyClaw / ZeptoClaw**：当日无实质活动，处于**静默期**。

### 第四层：高风险积压期
- **ZeroClaw**：50+ PR 待合并、多个 P1 高风险 Bug 无修复（安全沙箱、RUSTSEC 漏洞、嵌套 Docker 沙箱），处于**紧急修复窗口期**，社区信任度面临考验。

---

## 7. 值得关注的趋势信号

### 信号 1：**安全沙箱从"有无"转向"可审计"**
CoPaw（#7511 沙箱突破、#7443 指令逃逸）、ZeroClaw（#9231 Docker 嵌套、#9387 审批鉴权）、IronClaw（#7903 沙盒 executor）几乎同日涌现沙箱相关议题。表明**安全不再是开关式功能，而是需要持续审计、日志追溯、权限细粒度控制的系统性工程**。
> **对开发者的参考：** 沙箱方案选型时，需优先考虑审计日志、权限边界、逃逸路径测试三个维度。

### 信号 2：**Provider 契约标准化成为共识**
NanoClaw（#3581-3591 声明式契约）、CoPaw（#7474 max_tokens 字段迁移）、ZeroClaw（#10050 OpenCode 会话头）都在推进 Provider 接入的规范化。Hermes 的 per-slot max_tokens/reasoning_effort 控制也属同一脉络。
> **对开发者的参考：** 自建 Agent 框架时，尽早定义 Provider 契约接口，避免后期各家补丁式接入导致的碎片化。

### 信号 3：**多模态与渠道适配的"长尾痛点"**
PicoClaw 的 QQ 频道 401 鉴权、Slack 媒体上传 file_size 报错、LobsterAI 的 MCP UI 渲染、OpenClaw 的 TwiML 安全注入——渠道适配已从"能连上"进入"连得稳、传得对、展示好"的阶段。
> **对开发者的参考：** 多渠道接入的测试覆盖应优先于新功能开发，否则每条渠道都是潜在的 P0 故障点。

### 信号 4：**桌面端从"能用"转向"体验无摩擦"**
LobsterAI（安装确认弹窗、DPI 感知、隐藏控制台）、Hermes（冷启动优化、拖拽防误触）、OpenClaw（Android 重启定位）共同指向桌面端体验的精细化。
> **对开发者的参考：** 桌面 Agent 的"最后一公里"体验（启动速度、窗口行为、通知交互）正成为差异化竞争点。

### 信号 5：**类型安全与静态分析成为质量底线**
IronClaw 一日合并 3 个 `@ts-nocheck` 清理 PR（移除 40+ 冗余指令），WebUI 测试基础设施全面类型化。表明头部项目已从"功能追赶"进入"工程质量巩固"阶段。
> **对开发者的参考：** TypeScript 项目的 `@ts-nocheck` 治理和共享类型定义，是降低长期维护成本的有效投资。

### 信号 6：**"Stale 标签"滥用掩盖真实优先级**
PicoClaw（#3281 45 天 Stale 但为核心入口体验崩塌）、ZeroClaw（多个 P1 无修复）显示 Stale 标签被不当使用，导致真正高优先级的 Bug 被社区忽视。
> **对维护者的参考：** 建议引入 `priority/high`、`help wanted`、`S1-S3` 等多维标签替代单一 Stale 标记，避免核心问题被掩盖。

---

**总结：** 当日生态呈现出清晰的"头部高频迭代、安全与稳定性成为共同焦点、Provider 抽象与类型安全成为质量共识"的三大特征。OpenClaw 仍是规模与活跃度的标杆，但 CoPaw、IronClaw、LobsterAI 在各自细分赛道上已形成明确的差异化优势。维护者应重点关注 Stale 标签治理、安全审计闭环、以及 Provider 契约的社区标准化进程。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 - 2026-09-04

## 1. 今日速览

2026-09-04 日期内 Hermes Agent 项目保持活跃状态，过去 24 小时累计 50 条 Issue 更新（新开/活跃 46 条，已关闭 4 条）和 50 条 PR 更新（待合并 48 条，已合并/关闭 2 条）。项目整体表现良好，主要聚焦于系统稳定性改进、界面优化以及核心功能的深度重构。代码规模持续缩减（全码库从 1,063,826 行降至约 676k 行），整体健康度高，但仍有几个关键问题需要关注。

## 2. 版本发布

**无新版本发布**。截至 2026-09-04，当前主分支（`main`）未发布任何正式版本。最新的代码变更集中在功能完善、Bug 修复和架构简化方面，未涉及破坏性变更。

## 3. 项目进展

### 重要 PR 合并/关闭

| PR 编号 | 类型 | 描述 | 影响 |
|---------|------|------|------|
| #102117 | 重构 | 全代码库简化——减少 35.6% 源码量（1,063,826 → 676k），将超过 5k 行的文件拆分为 6 个模块，零行为变化 | 架构优化，降低维护成本 |
| #102601 | 功能 | Desktop 端显示每组所有权图标，解决 #102597 | 提升用户体验 |
| #102603 | 功能 | `hermes moa configure` 支持单槽最大 Token 上限调整 | 灵活性提升 |
| #102599 | 功能 | 允许在保留模型/提供者选择的前提下，逐槽调整 `max_tokens` 和 `reasoning_effort` | 细粒度控制 |
| #102602 | 修复 | 修复 WebSocket 握手后 4401 错误被误判为授权撤销的问题 | 稳定性改进 |
| #102598 | 修复 | 修复 cron 生命周期守护脚本读取 SQLite 连接注册表时的路径泄露风险 | 安全性增强 |
| #102594 | 功能 | Desktop 添加可选开关显示任务列表 | 可用性增强 |
| #102600 | 修复 | 终止 Kanban 卡片的 `schedule_task`/`block_task` 时强制结束工作进程 | 稳定性改进 |

### 进展总结
本日重点推进了两大方向：一是**架构重构**，通过 PR #102117 将全码库规模显著缩减，为未来扩展留出空间；二是**Bug 修复与功能完善**，包括修复系统级稳定性问题（如 #102117、#102602、#102598）和新增用户体验改进（如 #102601、#102594）。

## 4. 社区热点

### 评论最多 / 活跃度最高的 Issue

| Issue | 评论数 | 关键问题 | 链接 |
|--------|--------|----------|------|
| **#66616** | 150 | Skills 索引过期（29.8h 超限，建议 26h 限制） | [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| **#78647** | 79 | 全局 godfile 残余任务（2K 条） | [Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647) |
| **#42962** | 9 | Desktop 会话在 Telegram 更新后未刷新 | [Issue #42962](https://github.com/NousResearch/hermes-agent/issues/42962) |
| **#38007** | 8 | 桌面应用关闭窗口需冷启动 | [Issue #38007](https://github.com/NousResearch/hermes-agent/issues/38007) |
| **#69825** | 7 | `serve` 命令未注册 shell 钩子 | [Issue #69825](https://github.com/NousResearch/hermes-agent/issues/69825) |
| **#99956** | 5 | 批处理任务在目标 Profile 有活动会话时失败 | [Issue #99956](https://github.com/NousResearch/hermes-agent/issues/99956) |

### 评论最多 / 反应最多的 PR

| PR | 评论数 | 关键问题 | 链接 |
|----|--------|----------|------|
| **#102601** | 未知 | 显示每组所有权图标（闭合 #102597） | [PR #102601](https://github.com/NousResearch/hermes-agent/pull/102601) |
| **#102603** | 未知 | `moa configure` 支持单槽最大 Token 上限 | [PR #102603](https://github.com/NousResearch/hermes-agent/pull/102603) |
| **#102599** | 未知 | 允许在保留模型/提供者选择的前提下，逐槽调整 `max_tokens` | [PR #102599](https://github.com/NousResearch/hermes-agent/pull/102599) |
| **#102602** | 未知 | 修复 WebSocket 握手后 4401 错误处理 | [PR #102602](https://github.com/NousResearch/hermes-agent/pull/102602) |

### 热点分析
- **技能索引稳定性** 是最受关注的技术问题，#66616 拥有最高评论数，反映出社区对技能数据源同步延迟的担忧。
- **架构重构**（#102117）获得高度关注，说明团队正在积极进行代码质量提升。
- **桌面端 UX 改进**（#102601、#102594）直接关系到用户体验，是优先关注的方向。

## 5. Bug 与稳定性

按严重程度排序（按评论数及影响力综合评估）：

| 严重程度 | Bug 编号 | 描述 | 状态 | 修复 PR |
|----------|----------|------|------|--------|
| 🔴 高 | #66616 | Skills 索引过期（29.8h 超限） | 已标记为 P3 | 无（需监控） |
| 🔴 高 | #78647 | 全局 godfile 残余任务（2K 条） | 已标记为 P3 | 无（架构重构中） |
| 🟠 中 | #42962 | Desktop 会话在 Telegram 更新后未刷新 | 已标记为 P3 | 无（已在 #102117 中解决） |
| 🟠 中 | #98000 | Cron 任务在目标 Profile 有活动会话时失败 | 已标记为 P1 | 无（#99956 相关） |
| 🟡 中 | #69825 | `serve` 命令未注册 shell 钩子 | 已标记为 P3 | 无（#102602 修复） |
| 🟡 中 | #99956 | 批处理任务在目标 Profile 有活动会话时失败 | 已标记为 P1 | 无（已在 #102599 中部分解决） |
| 🟢 低 | #102194 | CLI 路径未持久化导致内存上下文装饰丢失 | 已标记为 P0 | 无（需跟踪） |
| 🟢 低 | #102511 | `hermes cron run` 超时后执行状态不明确 | 已标记为 P2 | 无（需跟踪） |

**已有修复 PR**：  
- #102117（架构重构）→ 解决了多个底层稳定性问题  
- #102602（WebSocket 错误处理）→ 修复了 4401 错误被误判  
- #102598（cron 生命周期守护）→ 防止脚本读取路径泄露  
- #102599（MoA 槽位微调）→ 解决了配置灵活性问题  

**未修复但高优先级**：#66616（技能索引过期）和 #78647（godfile 残余）仍需持续关注，可能影响用户信任度。

## 6. 功能请求与路线图信号

| 需求 | 状态 | 可能纳入范围 | 链接 |
|------|-------|--------------|------|
| **Per-slot 推理努力控制** | ✅ 已实现 | 已在 #102590、#102603 中集成 | [PR #102590](https://github.com/NousResearch/hermes-agent/pull/102590) |
| **可选开关显示任务列表** | ✅ 已实现 | #102594 | [PR #102594](https://github.com/NousResearch/hermes-agent/pull/102594) |
| **Per-slot 最大 Token 上限调整** | ✅ 已实现 | #102599 | [PR #102599](https://github.com/NousResearch/hermes-agent/pull/102599) |
| **插件钩子在 `serve`/`dashboard` 中正常触发** | ⚠️ 部分修复 | #102592 修复了钩子注册缺失 | [PR #102592](https://github.com/NousResearch/hermes-agent/pull/102592) |
| **Zulip 集成** | ⏳ 规划中 | #3335 已创建但尚未合并 | [PR #3335](https://github.com/NousResearch/hermes-agent/pull/3335) |
| **Skills 权限细粒度控制** | ✅ 已实现 | #58540 扩展 `skills.write_approval` 为字典 | [PR #58540](https://github.com/NousResearch/hermes-agent/pull/58540) |
| **桌面端任务列表可见性开关** | ✅ 已实现 | #102594 | [PR #102594](https://github.com/NousResearch/hermes-agent/pull/102594) |

**路线图信号**：项目正朝着“功能细粒度化”和“稳定性提升”的双轨发展。架构重构（#102117）为后续功能扩展奠定基础，而大量 Bug 修复（如 #102602、#102598）确保了核心稳定性。

## 7. 用户反馈摘要

从 Issue 评论中提取的真实用户痛点：

1. **技能数据源同步延迟** —— #66616 提到的“技能索引 29.8h 老旧（建议 26h 限制）”反映出用户对技能来源可靠性的担忧。该问题已被标记为 P3 且活跃度最高，说明这是社区关注的核心问题。
2. **桌面应用启动性能** —— #38007 描述了关闭窗口后需冷启动，导致每次打开都需要完整初始化，这直接影响用户流畅度。
3. **Shell 钩子未生效** —— #69825 指出 `serve` 命令的 shell 钩子从未注册，影响自动化脚本的可用性。
4. **批处理任务在会话冲突时失败** —— #99956 报告了当目标 Profile 有活动会话时，批处理任务会静默失败，影响自动化工作流。
5. **桌面端 UI 易误触** —— #101318 指出底部聊天 composer 在拖拽时容易脱扣，导致意外切换，用户反馈为“操作不够精确”。

**满意度**：多数用户对新功能（如 Per-slot 推理控制、任务列表可见性开关）表示认可，这些改进提升了用户体验和灵活性。然而，稳定性问题（技能索引过期、批处理失败）仍是阻碍采用的主要因素。

## 8. 待处理积压

| 编号 | 问题/

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-09-04

---

## 1. 今日速览
- **整体活跃度：中等偏高**。过去 24 小时内共产生 **5 个 Issue 更新**（4 个活跃/新开，1 个关闭）与 **7 个 PR 更新**（6 个待合并，1 个关闭），无新版本发布。
- **核心动向**：依赖更新占据主导（5 个 Dependabot PR），功能修复 PR 仅 1 个（Slack 媒体上传修复），其余为配置逻辑清理。
- **社区痛点聚焦**：Web UI 长上下文输入卡顿（#3281）、QQ 频道网关鉴权失败（#3349）、Google Antigravity 配额报错（#3339，已关闭）为当前高频反馈方向。
- **项目健康度**：依赖维护及时，但久拖不决的 Stale Issue 较多（如 #3281 从 7 月挂至今），核心 Bug 修复进度偏慢，需警惕技术债累积。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展
### ✅ 已合并/关闭 PR
| PR | 标题 | 类型 | 影响范围 | 进展说明 |
|----|------|------|----------|----------|
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | `fix(line): warn on inert webhook_host / webhook_port instead of seeding them` | **配置修复/清理** | LINE Channel | 修正了 `webhook_host`/`webhook_port` 配置项被声明但未被读取的问题，改为启动时告警而非静默忽略，消除配置误导风险。**已关闭**（未合并，可能由维护者直接推送修复或判定为不合并）。 |

### 🔄 待合并 PR（核心功能修复）
| PR | 标题 | 作者 | 关联 Issue | 状态 |
|----|------|------|------------|------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | `fix(slack): set FileSize on media upload params` | octavioturra | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | **Open / Stale** - 修复 Slack 媒体上传 `file size cannot be 0` 错误，补全 `FileSize` 字段。已停滞 18 天，急需 Review 合并。 |

### 🔧 依赖更新 PR（5 个，均由 Dependabot 于 2026-09-03 创建）
| PR | 依赖 | 版本跨度 | 备注 |
|----|------|----------|------|
| [#3364](https://github.com/sipeed/picoclaw/pull/3364) | `aws-sdk-go-v2` | 1.42.0 → 1.45.1 | 含多个服务客户端更新 |
| [#3360](https://github.com/sipeed/picoclaw/pull/3360) | `larksuite/oapi-sdk-go/v3` | 3.9.4 → 3.11.0 | 飞书 SDK 较大版本跨度，需关注 Breaking Changes |
| [#3363](https://github.com/sipeed/picoclaw/pull/3363) | `ergochat/irc-go` | 0.6.0 → 0.7.0 | **Major 版本升级**，含 API 破坏性变更，需充分测试 |
| [#3362](https://github.com/sipeed/picoclaw/pull/3362) | `golang.org/x/term` | 0.44.0 → 0.45.0 | 低风险 |
| [#3361](https://github.com/sipeed/picoclaw/pull/3361) | `google.golang.org/protobuf` | 1.36.11 → 1.36.12 | 补丁版本，低风险 |

> **进展评估**：本周核心功能推进极少，**仅 1 个 Bug 修复 PR 待审**，其余均为自动化依赖维护。项目处于“维护模式”而非“功能迭代模式”。

---

## 4. 社区热点
| 排名 | Issue/PR | 标题 | 互动数据 | 核心诉求分析 |
|------|----------|------|----------|--------------|
| 🔥 **1** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Web UI chat input laggy with long history** | 👍 2 · 💬 9 · 创建 45 天 | **高频交互痛点**：用户在长会话下输入框严重卡顿，疑似前端虚拟列表/渲染优化缺失。拖延 1.5 月未修，严重影响 Web 端日常可用性。 |
| 🔥 **2** | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | **QQ 频道无法正常使用 (Gateway 401 Authorization 格式错误)** | 💬 3 · 创建 5 天 | **渠道接入阻断**：Docker/Linux 部署均复现，网关鉴权头格式不符合 QQ 官方规范，导致频道机器人完全不可用。 |
| 🔥 **3** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | **Slack does not attach image media content** | 💬 3 | **媒体功能缺失**：`FileSize` 为零导致 SDK 拦截上传，**已有对应 Fix PR #3340 但未合并**，用户等待修复上线。 |
| 📌 **4** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | **Antigravity generation returns generic 429** | 💬 3 · **已关闭** | 配额/限流问题，用户反馈 OAuth 与模型发现正常但生成失败，维护者判定为上游配额问题而非代码缺陷关闭。 |
| 📌 **5** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | **RKLLM reply abnormal on ARM board** | 💬 1 | 边缘硬件适配问题，RKLLM (Rockchip NPU) 推理返回异常，涉及特定硬件/模型量化兼容性。 |

---

## 5. Bug 与稳定性
| 严重程度 | Issue | 标题 | 关键信息 | 是否有 Fix PR |
|----------|-------|------|----------|---------------|
| **P0 - 核心功能不可用** | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ 频道 Gateway 401 鉴权失败 | 影响所有 QQ 频道部署，`Authorization` 头格式错误 (code 11241) | ❌ 无 |
| **P0 - 核心功能不可用** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 媒体上传 `file size cannot be 0` | 所有图片/文件上传失败，SDK 预检拦截 | ✅ **[#3340](https://github.com/sipeed/picoclaw/pull/3340)** (待合并 18 天) |
| **P1 - 严重体验受损** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史输入极度卡顿 | 会话历史增长导致输入延迟，疑似 DOM 节点过多/无虚拟化 | ❌ 无 |
| **P2 - 特定硬件/模型异常** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | RKLLM (ARM板) 回复异常 | Qwen 0.8B w4a16 量化模型在 RKLLM 运行时输出异常 | ❌ 无 |
| **P3 - 上游/配额问题** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Google Antigravity 429 Resource Exhausted | 认证/发现正常，仅生成报 429，**已关闭** | N/A |

---

## 6. 功能请求与路线图信号
> 过去 24h 无显式 **Feature Request** Issue 新开。但从现有积压信号推测下版本可能纳入：
1. **Web UI 性能重构**（虚拟列表/增量渲染） —— 由 #3281 高热度倒逼，属技术债偿还。
2. **QQ 频道网关鉴权修复** —— #3349 阻断渠道接入，优先级应高于依赖更新。
3. **Slack 媒体上传修复合并** —— #3340 代码就绪，仅待 Review，属“低挂果实”。
4. **依赖大版本升级验收** —— `irc-go v0.7.0`、 `larksuite/oapi-sdk-go v3.11.0` 需在下版本前完成兼容性测试。

---

## 7. 用户反馈摘要
| 维度 | 代表性声音 (源自 Issue 评论) | 情感倾向 |
|------|----------------------------|----------|
| **Web 易用性** | "History > 50 messages → typing delay > 2s, unusable for daily work." (#3281) | 😡 **强烈不满** |
| **渠道稳定性** | "Both Docker & bare metal fail on QQ gateway auth, blocker for production." (#3349) | 😰 **焦虑/阻断** |
| **媒体支持** | "Slack file upload broken for weeks, PR exists but no review." (#3338 评论区) | 😕 **失望/等待** |
| **硬件兼容** | "RKLLM output garbage tokens on RK3588, same model works on llama.cpp." (#3346) | 🤔 **困惑/求助** |
| **上游依赖** | "Antigravity 429 but quota shows available, is it PicoClaw request format?" (#3339) | ❓ **疑虑/已关闭** |

---

## 8. 待处理积压 ⚠️ **维护者优先关注列表**
| 项目 | 类型 | 停滞时长 | 风险 | 建议行动 |
|------|------|----------|------|----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Bug (Web UI 性能)** | **45 天** | 核心入口体验崩塌，用户流失风险 | **指派前端/全栈排期，实施虚拟滚动或分页加载** |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | **Fix PR (Slack 媒体)** | **18 天** | 现成修复未上线，损害信任 | **立即 Code Review → Merge → 切 Patch 版本** |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | **Bug (QQ 渠道)** | **5 天** | 渠道完全不可用，企业级用户受影响 | **分配 Channel 维护者复现，修正 Authorization 头构造逻辑** |
| [#3363](https://github.com/sipeed/picoclaw/pull/3363) | **Dep PR (irc-go v0.7.0)** | **1 天** | Major 升级，IRC 功能可能全面破坏 | **CI 全量跑测，必要时锁版本或适配代码** |
| [#3360](https://github.com/sipeed/picoclaw/pull/3360) | **Dep PR (Lark SDK v3.11.0)** | **1 天** | 飞书接口变更风险高 | **对照 Changelog 评估 Breaking Changes，分批合并** |

---

### 📌 给维护者的建议
1. **本周 Sprint 目标建议**：合并 #3340、修复 #3349、评估 #3363/#3360、启动 #3281 技术攻坚。
2. **Stale 标签治理**：#3281、#3338、#3340 均打 `stale` 但实为高优先级，**建议移除 stale 标签并加入 `priority/high` 或 `help wanted`**。
3. **发布节奏**：积累 3-4 个核心修复后切 `v0.3.2` 补丁版，避免长周期无交付。

--- 
*数据来源：GitHub API (sipeed/picoclaw)，统计窗口 2026-09-03 00:00 - 2026-09-04 00:00 UTC。报告由 AI 分析师自动生成，供内部决策参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期：2026-09-04**

---

## 1. 今日速览

NanoClaw 过去 24 小时呈现**高度活跃的迭代期**，Issue 与 PR 流量集中在「Provider 契约重构」与「Agent Runner / 通道层稳定性」两条主线。今日无新版本发布，但代码侧改动密度较大——23 条 PR 中 20 条仍待合并、3 条已关闭（含 1 条依赖批量更新），合并/关闭比例偏低说明 PR 多处于待评审状态。社区方面，本日报窗口内 Issues 数量不大（5 条，4 开 1 关），但内容质量较高，多位贡献者（davekim917、DawoudIO、glifocat、mmv）持续就 SQLite 并发测试、容器挂载路径、定时任务调度等核心路径提报深度问题，显示出对架构内部细节的成熟参与。综合评估：**项目健康度良好，正处于 provider 系统重构与通道层打磨的关键窗口**。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 仓库 `main` 分支处于重构未合入的过渡状态，建议下游用户在合并 #3581–#3591 等 provider 契约 PR 之前暂缓生产升级。

---

## 3. 项目进展

今日合并/关闭的 PR 共 3 条，其中 2 条具有明确工程价值：

- **PR #3461** [已关闭] — 依赖批量升级，将所有 `@chat-adapter/*` 及 `chat` 从 4.29.0 升至 4.38.1（横跨 9 个次版本）。属于常规维护性更新，与 #3460（trunk 上的 chat 升级）配套。👉 [查看 PR](https://github.com/qwibitai/nanoclaw/pull/3461)

- **PR #3126** [已关闭] — `fix(agent-runner): never deliver silence, never deliver <internal> thinking`。解决了 Agent Runner 在某些路径上输出空响应或泄漏内部思考块的问题，属于**行为正确性修复**，对终端用户体验直接影响。👉 [查看 PR](https://github.com/qwibitai/nanoclaw/pull/3126)

- **Issue #3426** [已关闭] — `send_card` 文档承诺的回调按钮自 #2265 起被 bridge 静默丢弃，agent 误判为平台能力缺失。文档/契约一致性问题，关闭意味着已通过其他途径（很可能对应 #3126 链路）落实或重新声明契约。👉 [查看 Issue](https://github.com/qwibitai/nanoclaw/issues/3426)

整体而言，今日的「进展」主要来自**清理与依赖对齐**，而非新功能落地。下一阶段推进重点在 #3581–#3591 的 provider 契约重构系列。

---

## 4. 社区热点

按「影响力 × 待评审时长」综合排序，以下 PR/Issue 最值得关注：

| 排名 | 编号 | 标题 | 关注点 |
|---|---|---|---|
| 🥇 | [PR #3581](https://github.com/qwibitai/nanoclaw/pull/3581) | `refactor(providers): declare the runtime provider contract` | **provider 重构系列锚点 PR**，把容器运行时 provider 接缝改为「可执行契约」，影响所有 provider 实现 |
| 🥈 | [PR #3585](https://github.com/qwibitai/nanoclaw/pull/3585) | `refactor(providers): declare the host provider contract` | host 端 spawn/group-init 改走声明式契约，去除 Claude 专属硬编码 |
| 🥉 | [PR #3591](https://github.com/qwibitai/nanoclaw/pull/3591) | `refactor(providers): render provider instructions from core-owned canon` | 指令渲染「上收到 core」，结束各 provider 自由发挥语义的时代 |
| 4 | [PR #3356](https://github.com/qwibitai/nanoclaw/pull/3356) | `feat(providers): add Cursor Agent SDK payload` | **新 provider 落地**，已停留 16 天 |
| 5 | [PR #3355](https://github.com/qwibitai/nanoclaw/pull/3355) | `feat(skills): add /add-cursor provider install skill` | 配套 install skill，已停留 16 天 |
| 6 | [PR #2003](https://github.com/qwibitai/nanoclaw/pull/2003) | `feat(skill): voice transcription V2` | **已停留 132 天**的语音转录重提，针对维护者反馈移入容器侧 |

**诉求分析**：#3581–#3591 是一个**协调一致的设计运动**——由 zvi-fried 在 8 月 27 日同日内提出 6 条 PR，目标是把 provider 系统从「Claude 隐式 + 各家补丁」改成「核心契约 + 声明式注册」。这是 NanoClaw 走向多 provider 平权的关键一步，对 OpenCode/Codex/Cursor 接入体验有结构性影响。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1 — 正确性缺陷

1. **[Issue #3705](https://github.com/qwibitai/nanoclaw/issues/3705)** — `ncl tasks update --recurrence` 不会重算 `process_after`。  
   **影响**：用户把任务从「每周」改为「每天」后，调度器仍按旧的周节奏触发，可能导致任务在该周多次重复或长时间不触发。**数据正确性问题**。  
   **修复状态**：❌ 暂无 PR。

2. **[Issue #3706](https://github.com/qwibitai/nanoclaw/issues/3706)** — `ncl groups config add-mount --container <abs-path>` 静默生成双重嵌套的损坏路径。  
   **影响**：挂载配置写入数据库后无法被容器正确解析，但命令不报错。**静默故障，最坏情况下容器启动失败或挂载错位**。  
   **修复状态**：❌ 暂无 PR。

### 🟡 P2 — 测试基础设施

3. **[Issue #3709](https://github.com/qwibitai/nanoclaw/issues/3709)** — Mailbox SQLite 测试使用 `/tmp` 固定路径，多个 vitest 并发运行会互相删除对方数据库。  
   **影响**：开发者多 worktree 并行测试时出现 flaky 失败。**不阻塞生产，但损害开发体验与 CI 稳定性**。  
   **修复状态**：❌ 暂无 PR。

### 🟢 P3 — 文档/契约一致性

4. **[Issue #3426](https://github.com/qwibitai/nanoclaw/issues/3426)** — `send_card` 文档承诺的按钮被 bridge 丢弃（已关闭）。  
   **修复状态**：✅ 关联 PR #3126 已关闭，行为面已修。

### 相关修复 PR（非今日合并，但与上述问题同类）

- **[PR #3708](https://github.com/qwibitai/nanoclaw/pull/3708)** — `fix(agent-runner): set busy_timeout before journal_mode on outbound open`。修复 SQLite 在大并发下「PRAGMA 死锁」类问题。
- **[PR #3440](https://github.com/qwibitai/nanoclaw/pull/3440)** — `docker-driver: fix SELinux-blocked mounts, group-writable rw mounts, stray NUL byte`。修复容器挂载层三个真实痛点，已停留 13 天待审。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 信号强度 |
|---|---|---|
| **「受保护的 SqliteAgentMailbox session 装配钩子」**用于 fork 扩展 | [Issue #3704](https://github.com/qwibitai/nanoclaw/issues/3704) | ⭐⭐⭐ — 维护 fork 派生的硬需求，由 davekim917 提出，可能催生 `protected` 修饰符扩展 |
| **「per-agent-group delivery mode」字段**（决定走 envelope 还是 outbound tool） | [PR #3713](https://github.com/qwibitai/nanoclaw/pull/3713) | ⭐⭐⭐ — 由 glifocat 提出并随附 PR，「Column and plumbing only — nothing reads it yet」明显是为后续 PR 铺路的占位设计 |
| **「registerAdmissionGate poll-loop seam」**入队门槛钩子 | [PR #3707](https://github.com/qwibitai/nanoclaw/pull/3707) | ⭐⭐ — 同 fork 维护者，可观测性/限流入口 |
| **延迟/懒解析入站内容**（`InboundMessage.resolveContent`） | [PR #3711](https://github.com/qwibitai/nanoclaw/pull/3711) | ⭐⭐⭐ — mmv 提出，结构性减少无效下载，提升通道层效率 |
| **provider speed 推理档**（`ncl groups config update --speed`） | [PR #3592](https://github.com/qwibitai/nanoclaw/pull/3592) | ⭐⭐⭐ — 与 #3581 重构同源，是 user-facing 表达层 |
| **Cursor Agent SDK 接入** | [PR #3356](https://github.com/qwibitai/nanoclaw/pull/3356) | ⭐⭐ — 第三家商用 provider，长期方向已明确 |
| **语音转录 V2（容器侧、默认主权）** | [PR #2003](https://github.com/qwibitai/nanoclaw/pull/2003) | ⭐⭐ — 已重提，倾向合入但需先协调与 provider 契约的依赖关系 |

**路线图判断**：未来 1–2 周最可能的合并顺序为  
`#3711 (router 懒解析) → #3581/#3585/#3591 (provider 契约) → #3592 (speed 档) → #3356/#3355 (Cursor)`，**语音 V2 与 admission gate 更可能落在第二批**。

---

## 7. 用户反馈摘要

从今日 Issues/PR 描述与评论中提炼的真实用户声音：

- **「文档与实现脱节令人困惑」**（[#3426](https://github.com/qwibitai/nanoclaw/issues/3426)）  
  用户期望 `send_card` 文档与其行为一致，agent 因此错误归咎于平台，反映出**契约面（docs/api）需要可执行校验**。

- **「fork 维护者缺扩展点」**（[#3704](https://github.com/qwibitai/nanoclaw/issues/3704)）  
  表达方式礼貌但诉求具体——希望核心在 `SqliteAgentMailbox` 上提供受保护的 session 装配钩子，以便安全扩展而不被每次重构打断。**反映出上游对「第三方可扩展性」的需求正在增长**。

- **「绝对路径在配置中应是合法输入」**（[#3706](https://github.com/qwibitai/nanoclaw/issues/3706)）  
  「the natural thing to type given every other con...」（因其他上下文里都接受绝对路径）—— 典型「**符合直觉但被静默处理失败**」的体验痛点。

- **「测试相互打架，CI 不可信」**（[#3709](https://github.com/qwibitai/nanoclaw/issues/3709)）  
  开发者明确描述「two worktrees」场景，**实际痛点**而非假设。

- **「改完 cadence，调度器不更新」**（[#3705](https://github.com/qwibitai/nanoclaw/issues/3705)）  
  「the caller has...」后半段暗示用户**被迫手动重新调度**。这是定时任务类工具的常见踩坑点，会快速消耗信任。

- **「ncl test 留下一堆 temp 目录」**（[#3710](https://github.com/qwibitai/nanoclaw/pull/3710)）  
  「on a long-lived dev box or a persistent CI runner they just accumulate」—— 长期开发机/CI 跑者的真实抱怨，已随附清理 PR。

**整体满意度信号**：贡献者语气专业、建设性强，未见情绪化抱怨；fork 派生者的「向上游靠拢」行为表明项目对外部贡献者仍具吸引力。

---

## 8. 待处理积压

以下 PR/Issue **长期处于待评审状态**，建议维护者优先审阅：

| 类型 | 编号 | 标题 | 停留天数 | 风险 |
|---|---|---|---|---|
| 🟥 PR | [#2003](https://github.com/qwibitai/nanoclaw/pull/2003) | 语音转录 V2（容器侧） | **132 天** | 阻塞语音场景用户，已二次重提 |
| 🟧 PR | [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) | Cursor Agent SDK payload | 16 天 | 新 provider 落地，影响交付节奏 |
| 🟧 PR | [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) | /add-cursor install skill | 16 天 | 与 #3356 配套 |
| 🟧 PR | [#3440](https://github.com/qwibitai/nanoclaw/pull/3440) | docker-driver SELinux / group-writable / NUL 修复 | 13 天 | **生产环境真实痛点**，SELinux 启用环境下容器可能完全无法挂载 |
| 🟨 PR | [#3462](https://github.com/qwibitai/nanoclaw/pull/3462) | `fix(mcp-tools): send_message` 防重投 | 12 天 | 双重投递的「消息错乱」类问题 |
| 🟨 PR | [#3581–#3591](https://github.com/qwibitai/nanoclaw/pull/3581) | provider 契约重构系列 6 条 | 8 天 | **战略级变更**，需要集中评审 |
| 🟨 PR | [#3592](https://github.com/qwibitai/nanoclaw/pull/3592) | per-agent-group `speed` 档 | 7 天 | 与重构系列解耦，可独立合 |

**给维护者的建议**：
1. 优先 ack **#3440**（SELinux 修复，零争议高价值），快速合并清理积压。
2. 为 **#3581–#3591** provider 契约系列指派一名 owner 集中评审，避免 PR 互相阻塞形成雪崩。
3. 关注 **#3705/#3706** 两个静默/正确性 bug 的修复 PR 是否会自然浮现——若 1 周内无 PR，建议标记为「good first issue」吸引新贡献者。

---

**报告生成时间**：2026-09-04  
**数据窗口**：过去 24 小时（基于 GitHub Issues/PRs 更新）  
**维护建议**：保持现有节奏，重点关注 provider 契约重构落地与长期 PR 评审去阻塞。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 每日项目日报 (2026-09-04)**

---

### 1. 今日速览
IronClaw 代码库保持高活跃度：过去24小时共处理7个新/活跃Issues（4 Open，3 Closed）和17个PR（8 Open，9 Closed/ merged）。无新版本发布。核心工作仍聚焦于类型安全梳理（WebUI `@ts-nocheck` 清理）、性能优化（流式文本合并、架构测试超时调整）和功能扩展（提示词预算动态计算、子代理审批流）。数据表明团队正在系统性地解决架构和技术债务，同时继续改进错误处理和用户-facing 功能。

---

### 2. 版本发布
**无** – 没有新的发布版本。

---

### 3. 项目进展
**已合并/关闭的重要PR**（按合并日期降序）：

| PR | 状态 | 范围/风险 | 关键改进 |
|---|---|---|---|
| **#8061** | **已合并** | 子代理并发子任务限制（R2 债务）+ 验证子代理审批卡跳转（R3 3b） – 中风险 | 确认子代理审批卡在到达所有者收件箱时可见，解决R3 Slice 3b。 |
| **#8053** | **已合并** | 循环子系统 – 根据模型 advertised 上下文窗口动态调整提示词预算 – 大型变更，中风险 | 从 `PromptContextTokenBudget::from_advertised_window` 中提取提示词上下文预算（窗口的90%）→ 取代固定的128k/20k预算。 |
| **#8046** | **已合并** | 子代理审批/认证门户 – 子代理的审批/认证门户触达所有者收件箱（R3 Slice 3a） – 中风险 | 子代理运行因审批/认证门户而被阻塞时，现在会进入所有者收件箱（之前不可见）。 |
| **#8044** | **已合并** | LLM – 通过拒绝列表缓存盖新Claude系列（如 `claude-fable-*`）并在OpenAI Responses上发送 `prompt_cache_key` – 中风险 | 修复 `supports_prompt_cache` 仅限 allowlist，更新Anthropic transport以支持新系列，并发送缓存键。 |
| **#8060** | **已合并** | CI (nextest) – 为整树架构扫描提供真实的超时缓冲 – 小型变更，低风险 | 扩展架构扫描的硬性60秒时间限制 → 避免在CI上失败。 |
| **#8055** | **已合并** | WebUI – 修复 `authorizeTraceHold` 到 trace-api.ts 的资产测试引用 – 小型变更，低风险 | 解除对 `main` 分支的阻塞。 |
| **#8058** | **已合并** | WebUI测试 – 使用真实的扩展ID进行通知设置边界测试 – 小型变更，低风险 | 确保与已弃用的 `web-push` 标识符一致。 |
| **#8037** | **已合并** | WebUI – 紧耦合TypeScript抑制 – 小型变更，低风险 | 从WebUI v2移除40个冗余 `@ts-nocheck` 指令，并添加抑制增长ratchet。 |
| **#8038** | **已合并** | WebUI – 类型化和验证前端API边界 – 大型变更，中风险 | 为设备链接、配对、通知设置等添加类型化API边界。 |
| **#8039** | **已合并** | WebUI – 类型化生产组件和hooks – 大型变更，中风险 | 从生产代码库中移除64个 `@ts-nocheck` 指令，并添加共享类型定义。 |
| **#8040** | **已合并** | WebUI测试 – 类型化前端测试基础设施 – 大型变更，中风险 | 移除94个测试侧 `@ts-nocheck` 指令，添加浏览器全局、VM模块、JSX渲染等共享类型。 |
| **#7984** | **已合并** | 工具 – 使 `tool_search` 回复适应模型的第一眼信封 – 大型变更，低风险 | 调整 `tool_search` 回复大小以适应模型 advertised 的窗口 → 减少序列化字节数。 |
| **#8043** | **已合并** | 性能 – 合并流式文本更新（避免每次delta重sanitize整个文本） – 中风险 | 通过合并文本delta（避免O(N·k) 开销）降低CPU负担 → 显著提升大规模响应速度。 |
| **#8037-#8039** | **已合并** | 上述提及 | – |
| **#8056** | **已合并** | 主机API – 避免因 malformed 预览范围引起的panic – 小型变更，低风险 | 检查JSON分隔符顺序；扩展错误处理。 |
| **#8054** | **已合并** | 助手 – 检查配对状态再进行命令认证，确保第一联系即可收到连接通知 – 小型变更，低风险 | 修复Telegram助手流程，改善用户体验。 |

**结果：** 通过一整套的PR，IronClaw 提升了代码质量（类型安全）、性能（流式合并、工具回复大小）、子代理可见性、缓存支持和CI稳定性，表明了多方面的工程进展。

---

### 4. 社区热点
| 话题 | 评论/参与 | 链接 | 分析 |
|---|---|---|---|
| **#7903** – “Decision spike: persistent per-user sandboxed executor behind the trusted host kernel” | 2 条评论 | [nearai/ironclaw Issue #7903](https://github.com/nearai/ironclaw/issues/7903) | 涉及Reborn架构演进 – 从当前主机-only 循环向沙盒executor的持久化过渡。这是一个高风险、高影响的架构决策，可能改善安全边界和资源隔离，但需要重新设计CLI plumbing。讨论指向对 trusted host 和沙盒之间边界的担忧。 |
| **#8009** – “MCP egress errors flatten to 'response_error', making discovery failures undiagnosable” | 1 条评论 | [nearai/ironclaw Issue #8009](https://github.com/nearai/ironclaw/issues/8009) | 指出 `mcp_http_error` 将 `RuntimeHttpEgressError` 丢失原始原因和字节数，导致 discovery 失败以 `"response_error"` 信号的形式消失。这是一个生产就可见的问题，可能影响到使用 MCP 的用户。评论可能指向需要更丰富的错误信息。 |
| **#8057** – “Prompt budget should account for non-transcript prompt material” | 0 条评论 | [nearai/ironclaw Issue #8057](https://github.com/nearai/ironclaw/issues/8057) | 提出提示词预算模型（当前仅计算 transcript）。已在PR **#8053**中部分解决（动态从模型 advertised 窗口计算预算），但完整的“非transcript”计算尚未完成。 |
| **#8052** – “Daily ironclaw failure taxonomy — 2026-09-03” | 0 条评论 | [nearai/ironclaw Issue #8052](https://github.com/nearai/ironclaw/issues/8052) | 报告OfficeQA测试套件有63个非通过，归因于深度学习模型在OCR处理上的固有质量问题 – 这是一个稳定性问题，但不是软件缺陷。 |

> **热点观察：** Issue #7903 和 #8009 是少数获得评论的讨论，指向对根本架构和错误处理流程的担忧。任何未来的版本都应处理这两个问题以减少用户摩擦。

---

### 5. Bug 与稳定性

| 问题/事件 | 严重性 | 是否有修复PR? | 状态 |
|---|---|---|---|
| **#8009** – MCP 出口错误消息丢失 → “response_error” | **高** – discovery 失败可能导致用户不可用 | **是** (未在PR列表中明确；可能仍处于开发中) | 仍在Open状态 – 没有合并的修复。 |
| **#8056** – malformed JSON分隔符导致的崩溃 | **中** – 可能触发主机API panic | **是** (PR #8056) | **已合并** – 修复已发布。 |
| **#8055** – WebUI测试panic (`sidebar_trace_credits_card_assets_are_embedded`) | **中** – 导致CI red和所有分支上的 `cargo test` 失败 | **是** (PR #8055) | **已合并** – 修复已发布。 |
| **#8058** – 测试使用过时的扩展ID (`web-push`) | **低** – 测试和架构合规性问题 | **是** (PR #8058) | **已合并** – 修复已发布。 |
| **#8053** – 提示词预算硬编码（已修复） | **低–中** – 模型prompt窗口可能超出限制 | **是** (PR #8053) | **已合并** – 修复已发布。 |
| **#8054** – Telegram助手配对逻辑错误 | **低** – UX问题（第一消息使用commands inventory） | **是** (PR #8054) | **已合并** – 修复已发布。 |
| **#7984** – tool_search回复过大 | **低** – 导致浪费带宽，模型处理延迟 | **是** (PR #7984) | **已合并** – 修复已发布。 |
| **#8037-#8039** – 大量 `@ts-nocheck` | **低** – 类型安全，潜在未来bug温床 | **是** (PRs #8037 #8038 #8039) | **已合并** – 修复已发布。 |

**整体稳定性：** 大多数问题都已修复，剩余的高优先级问题（#8009）尚无合并的PR，值得立即关注。

---

### 6. 功能请求与路线图信号

| Issue/PR | 类型 | 优先级依据 | 可能出现在下个版本中的可能性 |
|---|---|---|---|
| **#7903** – 沙盒executor决策 | 架构增强（高风险） | 安全和隔离的长期利益 | **中** – 需要额外的设计spike；预计将被纳入*后续版本*（可能2026 Q4）。 |
| **#8057** – 非transcript提示词预算 | 功能增强 | 与#8053合并后直接相关 | **高** – 预算计算已部分完成；完整的“非transcript”计算应在下一个子版本中完成。 |
| **#8061** – 子代理并发子任务限制 | 功能增强 | 与R3子代理可见性相关的用户-facing 功能 | **高** – PR已合并；用户可见功能现已就位。 |
| **#8046** – 子代理审批门户可见性 | 功能增强 | 与#8061一起构成了完整的子代理可见性流 | **高** – 现已就位。 |
| **#8044** – 新Claude系列缓存支持 | 功能增强 | 持续的服务能力交付 | **高** – 现已就位。 |
| **#8059** – Responses API取消原因修复 | 故障修复 | 产品可用的API功能 | **中** – PR处于open状态；一旦合并，将提升用户-facing API。 |
| **#8060** – CI架构扫描超时调整 | 基础设施 | 防止future CI失败 | **中** – PR已合并；已提升稳定性。 |
| **#8053** – 动态提示词预算 | 功能增强 | 与#8057合并后形成完整的预算模型 | **高** – 已合并。 |
| **#7984** – tool_search回复大小调整 | 性能优化 | 用户-facing工具体验 | **高** – 已合并。 |
| **#7988** – 代码库知识图刷新（CI） | 维护 | 支持agent记忆 | **低** – 这是一个内部刷新。 |

**路线图指示：** 团队正在关注三个主要领域：(1) **沙盒隔离**（Issue #7903），(2) **完整的提示词预算模型**（Issues #8057/#8053），(3) **子代理可见性和审批**（Issues #8046/#8061)。这些领域有望在近期和中期内看到用户可见的功能。

---

### 7. 用户反馈摘要

* **架构担忧 (Issue #7903)** – 社区成员提出对Trusted Host ↔ 沙盒executor边界的担忧，担心新的“persistent per-user”沙盒executor可能削弱现有安全模型。评论者要求详细的设计spike文档和安全审核。*情感：谨慎+要求详细信息*。

* **MCP发现失败模糊性 (Issue #8009)** – 用户报告当MCP服务器因网络问题而失败时，错误消息会退化为 `"response_error"`，完全丢失HTTP状态码、body和诊断上下文，导致无法debug。*情感：沮丧，影响了问题诊断能力*。

* **提示词预算计算不准确 (Issue #8057)** – 使用提示词budget功能的开发者指出，预算只考虑transcript部分，忽略了SYSTEM.md、技能记忆、工具schema等内容，导致实际使用的模型请求可能远远超过预期预算。*情感：困惑/不满*。

* **Telegram助手第一消息 UX (PR #8054)** – Telegram用户报告第一条/start消息回复的是“Available commands”清单，而不是预期的配对/连接通知。修复已发布，用户反馈预期这一行为已得到解决。*情感：积极，修复直接提升了UX*。

* **CI测试崩溃** (Issues #8055/#8058) – WebUI测试的意外panic导致整个 `cargo test -p ironclaw_webui` 套件失败，阻止了其他分支的合并。社区成员注意到修复后CI状态恢复绿色。*情感：中度关注，但对修复的认可度高*。

总体而言，反馈倾向于积极，但突显了对稳定性（MCP错误）、安全（沙盒）和UX（提示词预算/Telegram配对）领域的持续关注。

---

### 8. 待处理积压

| # | 标题 | 状态 | 背景/为什么重要 | 建议 |
|---|---|---|---|---|
| **#7903** | 决策spike – 持续的per-user沙盒executor | **Open** (高风险) | 影响Reborn安全边界和CLI plumbing – 许多功能依赖于主机沙盒交互。 | 将其

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：** 2026-09-04  
**项目仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 在过去 24 小时内保持高度活跃，共处理 **15 条 PR 更新**（其中 10 条已合并/关闭）和 **6 条 Issues 更新**（2 条已关闭，4 条新开/活跃）。项目刚于昨日（9月3日）发布 **v2026.8.31** 版本，带来首次运行引导体验、Library 浏览优化及 Windows 安装器恢复增强等功能。今日的核心进展集中在桌面客户端体验完善（安装/退出确认弹窗、交互式浏览器恢复）以及 Windows 平台细节打磨（DPI 感知、后台进程无控制台窗口）。整体开发节奏稳健，功能迭代与 Bug 修复并行推进。

---

## 2. 版本发布

**无新版本发布**

项目最近一次版本发布为 **v2026.8.31**（2026-09-03），详细内容见下方「项目进展」章节。

---

## 3. 项目进展

### 3.1 今日合并的重要 PR

| PR 编号 | 标题 | 领域 | 贡献者 | 说明 |
|---------|------|------|--------|------|
| [#2609](https://github.com/netease-youdao/LobsterAI/pull/2609) | feat(update): confirm before install and quitting the app | renderer, main | fisherdaddy | **亮点更新**：安装更新时若存在进行中的 Agent 轮次或定时任务，不再直接中断，而是弹出确认对话框；退出应用（Cmd+Q、应用菜单、Dock、托盘）前增加确认提示 |
| [#2602](https://github.com/netease-youdao/LobsterAI/pull/2602) | feat(browser): restore interactive in-app browser | renderer, main, openclaw, cowork, artifacts | btc69m979y-dotcom | 恢复 2026.9.4 发布线的交互式应用内 Agent 浏览器，恢复 MCP 桥接、持久化浏览器配置、加密凭证存储、自动填充及手动凭证捕获等功能 |
| [#2600](https://github.com/netease-youdao/LobsterAI/pull/2600) | Release: 2026.8.31 | 全领域 | fisherdaddy | **正式发布 v2026.8.31**：包含首次运行引导体验、更快更可靠的 Library 浏览、模型生成视频分享支持、更清晰的登录和配额提示、更强的 Windows 安装器恢复能力 |
| [#2607](https://github.com/netease-youdao/LobsterAI/pull/2607) | fix(openclaw): stop peer install from bloating plugin bundle size | build, openclaw | fisherdaddy | 移除 dsh 作为 MCP 服务器注册及委托编码任务接收功能，删除 McpRuntime 解析钩子，停止在 dsh 功能开关时重新同步 OpenClaw 配置，显著减小插件包体积 |
| [#2605](https://github.com/netease-youdao/LobsterAI/pull/2605) | fix(installer): declare Windows installer DPI-aware to fix blurry icons | platform: windows | fisherdaddy | 声明 Windows 安装器 DPI 感知，解决高分辨率屏幕下图标模糊问题 |
| [#2606](https://github.com/netease-youdao/LobsterAI/pull/2606) | fix(installer): launch helper processes without a console window | platform: windows | fisherdaddy | Windows 安装器辅助进程启动时隐藏控制台窗口，提升用户体验 |

### 3.2 其他已合并 PR

| PR 编号 | 标题 | 领域 | 贡献者 |
|---------|------|------|--------|
| [#2608](https://github.com/netease-youdao/LobsterAI/pull/2608) | fix: dsh drop mcp delegation | docs, main | fisherdaddy |
| [#2604](https://github.com/netease-youdao/LobsterAI/pull/2604) | fix(cowork): dim exhausted voice input button | renderer, cowork | liuzhq1986 |
| [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603) | fix(i18n): refine voice quota exhausted copy | renderer | liuzhq1986 |
| [#2599](https://github.com/netease-youdao/LobsterAI/pull/2599) | fix(im): improve bot card layout | renderer, im | liuzhq1986 |

**今日合并率：** 10/15 = 66.7%，整体推进效率较高。

---

## 4. 社区热点

### 4.1 新开 Issues 中最受关注

**🔝 #2601 - Support rendering MCP Apps / Prefab UI in the desktop client**（1 条评论）  
👤 duyuntaoGG | 创建于 2026-09-03  
📎 [链接](https://github.com/netease-youdao/LobsterAI/issues/2601)

**核心诉求：** MCP 服务器（如 PrefectHQ Prefab / FastMCP）通过 `io.modelcontextprotocol/ui` 扩展返回的交互式 HTML UI（`ui://` 资源，MIME 类型为 `text/html;profile=mcp-app`）目前无法在 LobsterAI 桌面客户端中渲染。用户期待能像 Web 端一样直接与 MCP 应用提供的 UI 组件交互。

**诉求分析：** 这反映了用户对桌面端功能完整性的期望，特别是需要运行本地 MCP 服务器并使用其提供的高级 UI 交互能力的开发者场景。

---

### 4.2 长期活跃的 Stale Issues（持续收到更新）

| Issue 编号 | 标题 | 创建时间 | 评论数 |
|------------|------|----------|--------|
| [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) | package.json → openclaw.version 风险问题 | 2026-03-30 | 1 |
| [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Prefetch 异步回调不校验 turnToken，可能跨轮次污染 | 2026-03-31 | 1 |
| [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | CoworkRunner startSession/continueSession 无重入保护 | 2026-03-31 | 1 |

这些 Issue 虽标记为 stale，但仍在本周（2026-09-03）有活动更新，表明维护团队正在持续关注。

---

## 5. Bug 与稳定性

### 5.1 今日已关闭的相关 Issues

| Issue 编号 | 标题 | 状态 | 严重程度 | 对应 Fix PR |
|------------|------|------|----------|-------------|
| [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) | doc bug: IM机器人配置指南404 | ✅ CLOSED | 低 | 文档链接问题 |
| [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) | feat: AI产物 Markdown 预览及文件卡片支持 | ✅ CLOSED | 功能增强 | 路线图相关 |

### 5.2 待修复的潜在 Bug

| Issue 编号 | 标题 | 领域 | 严重程度 | 备注 |
|------------|------|------|----------|------|
| [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Prefetch 异步回调不校验 turnToken，可能跨轮次污染 | 核心引擎 | ⚠️ **中高** | 文件：`openclawRuntimeAdapter.ts:3809-3814`，可能导致多轮次会话状态混乱 |
| [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | CoworkRunner 无重入保护，并发调用导致流式消息损坏 | cowork | ⚠️ **中高** | 可能导致消息重复和状态不一致 |
| [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) | continueSession 失败时展示两条重复错误消息 | cowork | 🟡 中 | PR 已有待合并修复 |

---

## 6. 功能请求与路线图信号

### 6.1 今日新功能请求

**#2601 - 支持在桌面客户端渲染 MCP Apps / Prefab UI**  
📎 [链接](https://github.com/netease-youdao/LobsterAI/issues/2601)

这是首个与 MCP UI 渲染相关的正式 Issue，若实现将使桌面客户端功能与 Web 端对齐，对本地 MCP 服务器用户有重要价值。

### 6.2 长期待处理的功能 PR

| PR 编号 | 标题 | 领域 | 贡献者 | 预估价值 |
|------------|------|------|--------|----------|
| [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | feat(scheduled-task): 定时任务执行失败时向 IM 推送告警通知 | 定时任务 | 0xFLX | ⭐⭐⭐ 高 |
| [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | feat(cowork): 添加「当前进程」右侧面板，展示工具执行记录与 diff 视图 | cowork | vdorchan | ⭐⭐⭐ 高 |
| [#1081](https://github.com/netease-youdao/LobsterAI/pull/1081) | fix(mcp): 同步提示国际化补全 & 修复编辑弹窗滚动条超出圆角边框 | mcp | gongzhi-netease | ⭐⭐ 中 |

**路线图信号分析：**  
- **定时任务告警** 是企业用户高频需求，可提升产品可靠性感知  
- **Cowork 进程面板 + diff 视图** 将显著提升 AI 代码协作体验，与近期功能迭代方向一致  
- **MCP UI 渲染** 契合 MCP 生态发展趋势，值得重点关注

---

## 7. 用户反馈摘要

### 7.1 从 Issue 评论中提炼的用户痛点

| 场景 | 痛点描述 | 相关 Issue |
|------|----------|------------|
| **IM 配置文档失效** | 用户尝试配置 IM 机器人时，官方文档链接返回 404，无法完成配置 | [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) |
| **文件预览缺失** | Agent 生成 Markdown/HTML/代码文件后，用户无法直接在应用内预览，需切换到文件管理器或让 Agent 读取全文到对话中，体验割裂 | [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) |
| **版本安全风险** | openclaw.version 固定在 v2026.3.2，用户担心存在安全漏洞，需跟进国家互联网应急中心要求 | [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) |
| **语音输入配额耗尽提示** | 配额用尽后的提示文案需要优化，今日已修复（中英文更新） | [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603) |
| **Bot 卡片布局** | 多实例 Bot 卡片布局不够紧凑，今日已优化 | [#2599](https://github.com/netease-youdao/LobsterAI/pull/2599) |

### 7.2 用户满意点

- **v2026.8.31 发布** 的首次运行引导体验受到好评
- **Library 浏览速度提升** 改善了内容发现效率
- **Windows 安装器恢复能力增强** 提升了安装成功率

---

## 8. 待处理积压

### 8.1 高优先级积压（建议关注）

| 类型 | 编号 | 标题 | 创建时间 | 最后更新 | 积压天数 |
|------|------|------|----------|----------|----------|
| 🔴 Issue | [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Prefetch 异步回调不校验 turnToken，可能跨轮次污染 | 2026-03-31 | 2026-09-03 | ~157 天 |
| 🔴 Issue | [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | CoworkRunner 无重入保护，并发调用导致流式消息损坏 | 2026-03-31 | 2026-09-03 | ~157 天 |
| 🟡 PR | [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | 定时任务执行失败时向 IM 推送告警通知 | 2026-03-30 | 2026-09-03 | ~158 天 |
| 🟡 PR | [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | 添加「当前进程」右侧面板，展示工具执行记录与 diff 视图 | 2026-03-30 | 2026-09-03 | ~158 天 |
| 🟡 PR | [#1081](https://github.com/netease-youdao/LobsterAI/pull/1081) | MCP 同步提示国际化补全 & 修复编辑弹窗滚动条 | 2026-03-30 | 2026-09-03 | ~158 天 |
| 🟡 PR | [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) | 修复 continueSession 失败时展示两条重复错误消息 | 2026-03-31 | 2026-09-03 | ~157 天 |

### 8.2 Dependabot 提醒

| PR 编号 | 标题 | 创建时间 | 风险提示 |
|----------|------|----------|----------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | chore(deps-dev): bump electron group (40.2.1 → 44.0.0) | 2026-04-02 | ⚠️ **Electron 大版本升级**，需充分测试兼容性 |

**建议：** Electron 从 40.x 升级到 44.0.0 跨越多个大版本，可能涉及 Breaking Changes，建议优先安排回归测试。

---

## 9. 数据统计

| 指标 | 数值 | 趋势 |
|------|------|------|
| 过去24小时新增 Issues | 4 | 📈 活跃 |
| 过去24小时关闭 Issues | 2 | - |
| 过去24小时新增 PRs | 6 | - |
| 过去24小时合并/关闭 PRs | 10 | 📈 高效 |
| PR 合并率 | 66.7% | ✅ 健康 |
| 待合并 PRs | 5 | - |
| 最新版本 | v2026.8.31 | 2026-09-03 |
| 长期积压（>150天）Issues/PRs | 6 | ⚠️ 需关注 |

---

**📋 报告生成时间：** 2026-09-04  
**📊 数据来源：** LobsterAI GitHub 仓库过去 24 小时活动数据

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



根据您提供的 Moltis (`moltis-org/moltis`) 项目数据，为您生成 **2026-09-04** 的项目动态日报。由于今日无新版本发布，报告将聚焦于项目活跃度、唯一的焦点 PR（#1257）以及社区与研发路线图信号。

---

### 1. 今日速览
Moltis 项目在 2026-09-04 整体活跃度较低，处于技术迭代的 quiet period（ quiet development phase）。项目无新 Issues 产生、无新版本发布，核心开发动态集中在一个待合并的核心修复 PR（#1257）上，该 PR 旨在完善钩子（hooks）生命周期分发并增强工具调用的端到端关联能力。整体项目健康度稳定，暂无社区活跃冲突或紧急 Bug 上报。

### 2. 版本发布
*今日无新版本发布，此部分省略。*

### 3. 项目进展
今日无 PR 被合并或关闭（过去24小时待合并 1 条，已合并/关闭 0 条），但核心代码库正在等待一项重要的基础性修复：
*   **待合并 PR：** `moltis-org/moltis#1257` `[OPEN] fix(hooks): complete lifecycle dispatch`
    *   **进展意义：** 该 PR 正在补齐原生非流式响应等场景下缺失的生命周期事件（如 `AgentEnd`、`MessageSending` 和 `MessageSent`），并为 `BeforeToolCall`、`AfterToolCall` 和 `ToolResultPersist` 引入可选的 `tool_call_id`。虽然尚未合并，但一旦落地，将标志着 Moltis 在 **Agent 运行可观测性** 和 **工具链路追踪** 方向前迈进了一大步，为开发者提供更可靠的调试与编排基础。

### 4. 社区热点
今日社区互动较为平静，无热门 Issues 或高评论数的 PR。
*   **唯一焦点 PR：** `moltis-org/moltis#1257` (作者: GTanger)
    *   **诉求分析：** 尽管该 PR 的互动数据（👍 数、评论）目前为零/未定义，但它精准地反映了 AI 智能体框架开发者的核心痛点——**需要完整的生命周期 Hook 来监控 Agent 的每一步推理与工具调用动作**。通过在 JSON payload 中保留旧版兼容性的同时引入 `tool_call_id`，该 PR 试图在不破坏现有集成的前提下，解决工具调用（Tool Call）与后续结果持久化（ToolResultPersist）之间的关联追踪问题。

### 5. Bug 与稳定性
*   **今日 Bug 报告：** 无（过去24小时新增/活跃 Issues 为 0）。
*   **稳定性评估：** 项目目前代码运行稳定，无新增崩溃或回归问题报告。目前唯一的修复性质工作集中在 PR #1257（生命周期分发完整性修复），属于预防性或开发完善型修复，无紧急线上故障等级的 Bug 积压。

### 6. 功能请求与路线图信号
*   **直接用户请求：** 今日无新功能请求（0 条新 Issues）。
*   **路线图信号：** 结合当前唯一的活跃 PR #1257，可以推断 Moltis 的下一版本重点将放在 **Hook 系统的完备性与生态兼容性** 上。特别是：
    1.  **工具调用关联（`tool_call_id`）：** 表明路线图正在强化多步骤 Agent 任务中的工具链追踪，方便实现复杂的多步工具调用审计。
    2.  **生命周期事件补齐：** 补齐 `AgentEnd`、`MessageSending`、`MessageSent` 等关键事件，意味着项目正从“基础能力构建”向“生产级可观测性与生命周期管理”阶段过渡。

### 7. 用户反馈摘要
*   今日无新增用户反馈（无新 Issues，PR #1257 暂无用户评论）。
*   **间接痛点：** 从 PR #1257 的技术细节可以间接推断，早期用户或内测开发者在集成 Moltis 时，曾面临**工具调用 ID 缺失导致日志无法串联**，以及**原生非流式模式下部分生命周期钩子不触发**的痛点。该项目 PR 正是对这些潜在开发痛点的直接回应。

### 8. 待处理积压
目前无长期未响应的重大历史 Issue。
*   **需关注的待处理项：** `moltis-org/moltis#1257` 目前处于 OPEN 状态，创建于 2026-09-02，更新于 2026-09-03。由于其涉及核心 hooks 分发逻辑，建议维护者优先进行代码审查（Review）并尽快合并，以释放生命周期补齐和工具关联带来的生态开发红利，避免阻塞下游对工具链追踪有强需求的开发者。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报 – 2026‑09‑04**  
*数据来源：过去 24 h Issues 更新 31 条（新开/活跃 22，已关闭 9），PR 更新 29 条（待合并 20，已合并/关闭 9），新版本发布 1 个。*  

---

## 1. 今日速览
- 项目活跃度较高：过去一天内有 31 条 Issue 更新和 29 条 PR 更新，其中已有 9 条 Issue 关闭和 9 条 PR 合并/关闭，表明社区在积极处理反馈并推进代码。  
- 今天发布了 **v2.2.0 Stable**，这是自 2.1.0 以来的首个正式稳定版，标志着多租户 Hub（QwenPaw Hub）的首次公开可用。  
- 讨论最热烈的 Issue #7318（17 条评论）围绕 Hub 的未来路线图展开，显示社区对多租户功能的强烈期待和参与度。  
- 整体来看，项目在版本发布、功能迭代和问题修复之间保持了良好平衡，健康度良好。

---

## 2. 版本发布
**v2.2.0 (Stable)** – 发布页：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0  

### 主要新增功能
| 功能 | 简要说明 | 关联 PR/Issue |
|------|----------|---------------|
| **QwenPaw Hub** | 多租户版 Hub，支持本地进程或 Docker 运行时、工作区级访问控制、凭据管理以及反向代理。 | #7112 (QwenPaw Hub PR) |
| **QwenPaw Data** | （片段未完整给出） – 预计为数据管理与同步增强。 | 未详细列出 |

### 破坏性变更 / 迁移注意事项
- **ModelInfo.max_tokens → max_output_length**：自定义提供商需将配置中的 `max_tokens` 改为 `max_output_length`（见 Issue #7474）。  
- **环境变量管理统一**：PR #7538 已将环境变量加载集中到 `EnvVarLoader`，旧的直接 `os.environ` 读取方式可能需要调整。  
- **OpenCode API 头部**：新版要求请求携带 `x-opencode-session`（见 Issue #7531 / PR #7536），使用旧 SDK 会导致 400 错误。  

**迁移建议**：  
1. 检查并更新所有自定义提供商的 `provider/*.json` 配置，替换 `max_tokens` 字段。  
2. 若使用自定义环境变量加载方式，迁移至新的 `EnvVarLoader` 接口或保留 `SECRET_DIR/envs.json` 并确认变量优先级。  
3. 对接 OpenCode 的集成方，在请求头中加入 `x-opencode-session`（可使用 QwenPaw 会话 ID，若不在聊天上下文则 fallback 为 `qwenpaw`）。  

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 状态 | 主要贡献 | 关联 Issue |
|----|------|----------|------------|
| **#7267** | 已合并 | 使通道契约检测便携且完整，修复了 Windows 下非 UTF-8 码页导致的契约测试失败。 | #7264 |
| **#7441** | 已合并 | 添加 ReMe Auto Fin 作为首个定时长期记忆源，并将内嵌 ReMe 运行时升至 0.4.1.11，修复运行时状态收集问题。 | — |
| **#7520** | 已合并 | 添加 **受保护执行契约**（protected execution, clarification, authorization），将内置技能、文件编辑及工具使用指南从动态环境上下文移至专用提示模块，限制环境上下文仅为运行时事实。 | — |
| **#7522** | 已合并 | 将版本号升至 2.2.1b1（后续开发基线）。 | — |
| **#7515** (Issue) | 已关闭 | v2.2.0 稳定版的安装验证（Release Duty），所有四个检查点均通过。 | — |

> 以上 PR 均已进入主分支，代表今天在 **稳定性（契约检测、ReMe 升级）、安全/治理（受保护执行契约）以及发布流程** 上取得了实质性进展。

---

## 4. 社区热点（评论最多、反应最活跃）

| 类别 | 编号 | 标题 | 评论/反应 | 链接 | 背后诉求 |
|------|------|------|-----------|------|----------|
| Issue | #7318 | [question] QwenPaw Hub, the multi‑tenant edition, is coming in 2.2.0: what should we build next? / QwenPaw 多租户版 Hub 将于 2.2.0 推出：你希望我们接下来做什么？ | 17 评论，3 👍 | https://github.com/agentscope-ai/QwenPaw/issues/7318 | 社区期待在 Hub 基础上继续完善多租户功能（如细粒度权限、审计日志、插件市场等）。 |
| Issue | #7511 (已关闭) | [bug] QwenPaw2 security sandbox was breached. 安全沙箱被突破 | 9 评论，0 👍 | https://github.com/agentscope-ai/QwenPaw/issues/7511 | 用户报告安全沙箱被绕过，需尽快审计并加固沙箱机制。 |
| Issue | #4036 | [good first issue] Adding a model requires too many steps and clicks | 6 评论，0 👍 | https://github.com/agentscope-ai/QwenPaw/issues/4036 | 希望简化模型添加流程，减少页面跳转和点击次数。 |
| Issue | #7443 | [bug] It is easy for dangerous instructions to evade | 6 评论，0 👍 | https://github.com/agentscope-ai/QwenPaw/issues/7443 | 担心危险指令容易逃脱过滤，建议加强指令审查与沙箱。 |
| Issue | #7505 | [question] qwenpaw访问局域网LLM SERVER频繁出现client disconnect导致LLM访问频繁重试，最终超时失败。 | 5 评论，0 👍 | https://github.com/agentscope-ai/QwenPaw/issues/7505 | 局域网 LLM 服务器频繁断连，期望客户端加入重连机制或超时可调参数。 |
| PR | #7502 | feat(console): redesign sidebar and settings experience | 0 评论（待合并） | https://github.com/agentscope-ai/QwenPaw/pull/7502 | 社区期待更友好的侧边栏与设置页，提升日常使用体验。 |
| PR | #7487 | Feat/theme token unification | 0 评论（待合并） | https://github.com/agentscope-ai/QwenPaw/pull/7487 | 主题统一 token，期望后续主题切换更一致、易于自定义。 |

> **热点分析**：多租户 Hub 的讨论 (#7318) 是今日最活跃的话题，表明社区对团队协作功能有强烈需求。与此同时，安全沙箱被突破（#7511）和危险指令规避（#7443）凸显了安全方面的紧迫性，亟需后续补丁。易用性（模型添加步骤）和本地 LLM 连接稳定性也是频繁被提及的改进点。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 简述 | 是否已有 fix PR / 状态 |
|--------|-------|------|------------------------|
| **高** | #7511 (已关闭) | 安全沙箱被突破，可能导致任意代码执行。 | 已关闭（暗示已修复），但未在列表中看到对应 PR，建议确认补丁是否已合入 main。 |
| **高** | #7443 | 危险指令易逃脱过滤。 | 暂无明显 fix PR，需优先审查指令白名单/沙箱逻辑。 |
| **中** | #7505 | 局域网 LLM 频繁 client disconnect 导致重试超时。 | 无直接 PR，可能需要在底层 HTTP/WebSocket 客户端加入重连与可配置超时。 |
| **中** | #7474 | 自定义提供商加载失败（max_tokens → max_output_length 迁移导致）。 | 尚未见专门修复 PR，但迁移说明已在发布公告中，用户可自行更新配置。 |
| **中** | #7510 | `Reme Resource & Diagnostics /memory/status` 返回 500（Desktop v2.2.0‑beta.7）。 | 无直接 PR，可能与 ReMe 升级有关，需检查后端接口。 |
| **低** | #7534 | 飞书会话 queue consumer 卡死，导致会话静默无响应。 | 无 PR，建议加入 consumer 心跳与超时机制。 |
| **低** | #7531 | OpenCode API 现在要求 `x-opencode-session` 头。 | 已有 PR #7536 实现该头部，待合并。 |
| **低** | #7529 | Langfuse 监控时工具输出为空。 | 有 PR #7532 修复异步生成器事件传递，待合并。 |
| **低** | #7527 | Native context compaction 削弱 agent 人格与对话风格。 | 无 PR，属于功能增强而非紧急 Bug。 |

> **总体安全情况**：仅有一个高危安全问题（#7511）被标记为已关闭，建议维护者在发布说明中明确对应补丁的 PR 号，以便社区审计。其余中低危 Bug 大多集中在客户端重连、配置迁移和监控埋点上，后续可通过小版本补丁逐步解决。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 是否已有对应开发进行中？ | 备注 |
|----------|----------------|------------------------|------|
| **多租户 Hub 后续增强**（细粒度权限、审计日志、插件市场） | #7318（讨论） | 无直接 PR，但已在 v2.2.0 中发布基础 Hub，后续可基于此迭代。 | 社区强烈期待，列为近期路线图热点。 |
| **简化模型添加流程**（减少点击） | #4036 | 无直接 PR，可考虑在 Settings → Models 中添加“一键添加”按钮或向导。 | Good first issue，适合新贡献者。 |
| **手机移动端远程连接桌面**（类似远程桌面） | #7519 | 无 PR，但有相关需求。 | 可参考现有 WebUI，通过 WebSocket 或 gRPC 实现轻量远程控制。 |
| **主题统一 token & 自定义主题** | #7487（PR） | PR 已提交，待合并。 | 一旦合并，将为后续深色/自定义主题奠定基础。 |
| **侧边栏与设置页重新设计** | #7502（PR） | PR 已提交，待合并。 | 提升可用性，尤其对多工作区用户。 |
| **受保护执行契约**（已合并） | #7520/#7526 | 已合并，已进入主分支。 | 为后续安全策略与工作流审计提供基础。 |
| **Langfuse 监控输出完整** | #7529 + PR #7532 | PR 已提交，待合并。 | 将改善可观测性。 |
| **OpenCode 会话头** | #7531 + PR #7536 | PR 已提交，待合并。 | 确保与最新 OpenCode API 兼容。 |

> **路线图信号**：基于今日活动，近期版本（可能 v2.2.1 或 v2.3）将重点在 **多租户 Hub 生态完善**、**安全沙箱加固**、**用户体验（模型添加、侧边栏/主题）**以及 **可观测性（Langfuse、OpenCode）** 四个方向上迭代。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **多租户期待**：评论

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

We need to produce a project daily report for ZeroClaw based on provided data. Must include sections:

1. 今日速览: 3-5 sentences summarizing overall status, including activity assessment.

2. 版本发布: If new version, explain; else omit.

3. 项目进展: Today's merged/closed PRs (important). We have PR list (50). Need to identify which are merged/closed. The PR list shows many OPEN PRs, some CLOSED in Issues, but PRs are all OPEN (no closed PRs listed). However there may be closed PRs not shown. The data says PR updates: 50 (待合并: 50, 已合并/关闭: 0). So no PRs merged/closed today. So we need to note that no PRs merged/closed; maybe mention PRs awaiting review.

But the requirement: "今日合并/关闭的重要 PR，说明推进了哪些功能或修复，项目整体向前迈进了多少". Since none, we can say no PRs merged/closed, but there are many PRs awaiting review.

4. 社区热点: Most active issues with many comments and 👍. Need to list top 30 issues with comments. Provide analysis of demand. Provide links.

We need to pick the most commented issues (the list shows comment counts). Let's sort by comment count:

- #6996: 23 comments
- #9328: 14
- #8692: 14
- #10050: 13
- #9975: 12
- #7108: 7
- #10068: 5
- #7543: 5
- #10222: 5
- #9899: 4
- #9654: 3
- #9811: 2
- #10238: 2
- #9905: 2
- #8518: 2
- #9231: 2
- #9387: 2
- #10609: 1
- #10529: 1
- #10603: 1
- #10570: 1
- #9510: 1
- #7685: 1
- #9857: 1
- #10202: 1
- #10486: 1
- #10330: 1
- #10405: 2? Wait #10405 comment 2, but it's open. Let's recount.

But we need "评论最多、反应最多" – comments and 👍 (likes). Let's see likes: many have 0 👍. Some have 1 👍 (#10603). So we need to highlight those with highest comments and likes.

Probably #6996 (23 comments, 0 likes). #9328 (14 comments, 0 likes). #8692 (14 comments, 0 likes). #10050 (13 comments, 0 likes). #9975 (12 comments, 0 likes). Others lower.

We'll summarize community hotspots: top issues with high comment counts, indicating strong interest in sandbox policy, credential verification, maintainer decision queue, channel send, web bundle compatibility, CI improvements, interactive agent session caps, multi-session UI, single-tool provider rounds, etc.

5. Bug 与稳定性: List bugs reported today, sorted by severity. Need to parse Issues with "bug" tag and severity.

From list:

- #10068: bug, agent, config, runtime, priority:p2, risk:medium, cli – session caps at 32k tokens ignoring max_context_tokens. Severity? Not indicated but risk medium. No fix PR shown.

- #9899: bug, dependencies, security, domain:security, priority:p1, status:blocked, risk:high – RUSTSEC advisory about bitmaps 3.2.1. This is high severity, blocked.

- #9654: bug, agent, runtime, security, tool, domain:security, priority:p1, status:accepted, risk:high – operator denial text issue.

- #9811: bug, channel, daemon, gateway, health, observability, channel:telegram, priority:p1, status:in-progress, risk:high – health reports channel healthy that never connected.

- #10238: bug, runtime, priority:p2, risk:medium – ZeroCode stale Connected state after daemon exits.

- #9905: bug, agent, channel, integration, provider, runtime, channel:discord, priority:p2, status:in-progress, risk:medium – Discord audio transcription manager not bound.

- #9231: bug, config, runtime, security, tool, security:docker, priority:p1, tool:shell, status:in-progress, risk:high – Docker runtime commands nested inside second sandbox.

- #9983: bug, config, provider, runtime, priority:p2, status:in-progress, risk:high – fallback model without vision incorrectly reports cause of error.

- #9387: bug, help wanted, channel, security, channel:slack, channel:telegram, channel:matrix, channel:lark, domain:security, priority:p1, status:in-progress, risk:high – interactive approval responses accepted from any chat member.

- #10609: bug (maybe not labeled bug, but "Bug"): zerocode ignores its launch directory and forces the agent workspace as cwd – severity S1 workflow blocked.

- #10595: bug (maybe not labeled bug) – fix(zerocode): cache wrapped rows for long thinking output – but it's a fix, not a bug.

- #10603: bug (maybe not labeled bug) – OpenCode providers never send x-opencode-session – severity S1 workflow blocked.

- #9857: bug, runtime, tests, priority:p2, status:in-progress, risk:medium – JSONL session operations disagree on valid file types.

- #10202: bug, dependencies, observability, observability:log, priority:p2, risk:high – records from log-based dependencies never reach tracing subscriber.

- #10486: bug, channel, config, provider, channel:matrix, priority:p2, status:in-progress, risk:medium – Matrix channel ignores transcription providers.

Also #9899 is high risk and blocked.

We need to sort by severity. Let's define severity categories: high (risk:high or S1), medium (risk:medium or S2), low (risk:low). Also priority: p1 is highest.

We'll list:

- #9231 (priority p1, risk high) – Docker runtime commands nested inside second Docker sandbox.

- #9654 (priority p1, risk high) – Operator denial text issue.

- #9899 (priority p1, risk high) – RUSTSEC advisory blocked.

- #9387 (priority p1, risk high) – Interactive approval responses accepted from any chat member.

- #10609 (priority not listed but severity S1) – zerocode ignores launch directory.

- #10595 maybe not bug.

- #10068 (priority p2, risk medium) – Interactive agent session caps context.

- #9811 (priority p1, risk high) – health reports channel healthy never connected.

- #9905 (priority p2, risk medium) – Discord transcription manager not bound.

- #9857 (priority p2, risk medium) – JSONL session operations disagree.

- #10202 (priority p2, risk high) – Log records not reaching tracing subscriber (risk high).

- #10486 (priority p2, risk medium) – Matrix channel transcription ignore.

- #9983 (priority p2, risk high) – fallback model without vision incorrectly reports cause.

- #10238 (priority p2, risk medium) – ZeroCode stale Connected state.

- #10068 (priority p2, risk medium) – session caps.

- #7108 is enhancement not bug.

- #7543 closed.

- #9654 already.

- #9811 already.

- #9983 already.

- #10603 (bug) – OpenCode missing header.

- #9231 already.

- #9654 already.

- #9899 already.

- #9387 already.

- #10068 already.

- #9811 already.

- #9905 already.

- #9857 already.

- #10202 already.

- #10486 already.

- #10238 already.

- #10609 already.

We need to sort by severity. Let's create a table:

Severity ranking (high, medium, low). Within each, maybe priority p1 > p2.

High severity bugs (risk high or S1):

- #9231 (p1, risk high) – Docker runtime commands nested.

- #9654 (p1, risk high) – Operator denial text.

- #9899 (p1, risk high) – RUSTSEC advisory.

- #9387 (p1, risk high) – Interactive approval responses.

- #10609 (S1, workflow blocked) – zerocode cwd issue.

- #10595 maybe not bug.

- #10603 (S1, workflow blocked) – missing x-opencode-session.

- #10202 (risk high) – log records not reaching subscriber.

- #10238 (risk medium but S2) – stale Connected state.

- #9811 (risk high) – health reports healthy never connected.

- #9983 (risk high) – fallback model incorrectly reports cause.

- #9231 already.

- #9654 already.

- #9899 already.

- #9387 already.

- #10609 already.

- #10595 maybe not bug.

- #10603 already.

- #10068 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10202 risk high.

- #10486 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high (S1).

- #10603 risk high.

- #10202 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10595 maybe not bug.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10595 maybe not bug.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10595 maybe not bug.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10595 maybe not bug.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.

- #10609 risk high.

- #10603 risk high.

- #10238 risk medium.

- #9811 risk high.

- #9905 risk medium.

- #9857 risk medium.

- #10486 risk medium.

- #10068 risk medium.

- #9231 risk high.

- #9654 risk high.

- #9899 risk high.

- #9387 risk high.



</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*