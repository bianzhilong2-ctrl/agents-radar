# OpenClaw 生态日报 2026-09-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-13 02:09 UTC

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

User Safety: safe

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告  
**日期：2026-09-13 | 口径：过去 24 小时 GitHub Issues / PR 动态；无数据项目不强行估算**

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现“**高活跃、强安全、重稳定性、弱正式发布**”的特征。  
今日绝大多数项目无 Release，说明社区重点集中在热修复、预发布重构、协议兼容和运行态可靠性提升。  
安全与权限边界成为跨项目共识：审批闸门、OAuth/MCP 

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



好的，这是根据您提供的 GitHub 数据生成的 NanoBot 项目 2026-09-13 动态日报。

---

### **NanoBot 项目动态日报 (2026-09-13)**

#### **1. 今日速览**
NanoBot 项目在 2026-09-13 呈现出极高的开发活跃度，但重心明显偏向于功能完善与稳定性提升，而非新版本发布。过去24小时内，PR 活动频繁（20条），其中过半处于待合并状态，表明开发团队正致力于多项功能的并行开发与集成。Issues 方面，社区反馈集中于具体的功能增强点（如稳定工具上下文、内存持久化）和已关闭的启动配置 bug，整体健康度良好，但存在一些需要长期跟进的积压项。

#### **2. 版本发布**
*   **无新版本发布**。今日无新的 Release 记录。

#### **3. 项目进展**
今日有 9 条 PR 被合并或关闭，标志着多项关键修复与功能的完成：
*   **WebUI 体验优化**：多个 PR 被关闭，显著改善了用户界面。包括简化设置目录（#5743）、使无头登录自解释（#5735）、降低长文本流式刷新开销（#5738）以及让大历史回放增量缓存（#5745）。这些工作共同提升了 WebUI 的可用性与性能。
*   **核心稳定性与安全性增强**：
    *   **安全修复**：合并了拒绝包含路径遍历组件的会话键的 PR（#5633），有效防止了潜在的安全风险。
    *   **提供者稳定性**：清理了发送给提供者的回放项目（#5613），并允许在主模型超时时进行故障转移（#5675），提升了 AI 调用的可靠性。
    *   **恢复能力**：实现了在执行批次边界持久化部分工具进度的恢复机制（#5748），增强了系统崩溃后的数据一致性。
*   **新功能添加**：新增了 DaoXE 网关提供者（#5746），扩展了 AI 模型的接入选项。
*   **整体迈进步伐**：项目在 WebUI 体验、核心引擎的稳定性、安全性以及可扩展性方面都取得了扎实的进展。

#### **4. 社区热点**
今日社区讨论的焦点集中在功能需求与 bug 报告上：
*   **最活跃 Issue**：**#5726 [CLOSED] [bug, priority: p1] Startuo initial password?** 虽然已关闭，但作为唯一一个 P1 级别且被关闭的 bug，其反映了无头服务器部署场景下的初始认证痛点，是社区关心的实际问题。
*   **重要功能讨论**：**#5721 [OPEN] Could nanobot support durable memory across sessions?** 由 MemCode 创始人提出，探讨了跨会话持久化记忆的商业合作可能性，是项目未来一个重要的潜在发展方向。
*   **开发热点**：**#5749 [OPEN] [enhancement] Expose stable tool invocation context for idempotent side effects** 和 **#5747 [OPEN] [enhancement] Recovery: persist completed tool results at execution-batch boundaries** 虽评论不多，但已被对应的 PR（#5750， #5748）引用并正在解决，表明开发团队对底层架构稳定性的关注。

#### **5. Bug 与稳定性**
今日报告的 Bug 严重程度和处理情况如下（按严重程度排列）：
1.  **P1 - 启动初始密码问题 (#5726)**：已关闭。用户在无头服务器上部署后无法获知 WebUI 登录密码。**已有解决方案**（通过 PR #5735 等使无头登录自解释）。
2.  **P1 - 会话键路径遍历漏洞 (#5633)**：已通过 PR #5633 修复。这是一个安全相关的关键 bug，修复了会话键可能被用于访问任意文件的风险。
3.  **P2 - 大历史回放性能问题 (#5745)**：已通过 PR #5745 修复。解决了 WebUI 在处理大量历史消息时的性能瓶颈。
4.  **P2 - 提供者回放导致 API 失败 (#5613)**：已通过 PR #5613 修复。避免了因历史消息中的无效 ID 导致的 Responses API 调用失败。
5.  **P2 - 模型故障转移失效 (#5675)**：已通过 PR #5675 修复。确保了主模型无响应时，备用模型能被正确尝试。

#### **6. 功能请求与路线图信号**
*   **潜在路线图信号**：
    *   **跨会话记忆 (#5721)**：如果未来得到社区更广泛的支持或技术实现，这可能成为一个重要的差异化特性。
    *   **工具调用上下文稳定化 (#5749)**：对应的 PR (#5750) 表明，项目正朝着为工具提供稳定、可识别的调用上下文方向发展，这对于构建可靠、可幂等的工具链至关重要。
*   **已纳入开发的功能**：从已关闭的 PR 来看，**DaoXE 提供者 (#5746)**、**WebUI 完成通知音 (#5602)** 等功能已进入开发流程，很可能在下个版本发布。

#### **7. 用户反馈摘要**
*   **痛点**：用户 `gardiol` 遇到了典型的无头部署初始配置难题，凸显了易用性在特定部署场景下的重要性。
*   **场景**：用户 `memcodeoff` 从商业合作角度，指出了对高级记忆后端集成的需求，反映了企业级用户对状态管理的高要求。
*   **开发者关注**：贡献者 `xiexiahao` 和 `be-student` 提出的问题和 PR 聚焦于底层架构的健壮性（工具上下文、恢复机制、故障转移），表明核心开发者社区对项目长期稳定性的高度关注。

#### **8. 待处理积压**
以下 PR 因可能涉及复杂功能或存在冲突，已持续活跃一段时间，需维护者关注：
*   **PR #5495** (`feat(channels): add native Linear agent channel`)：新增原生 Linear 通道，功能重要，但开发周期长（自 2026-08-23）。
*   **PR #4919** (`feat(telegram): support custom Bot API base URL and extra headers`)：Telegram 通道的重要增强，但合并可能受架构调整影响（自 2026-07-14）。
*   **PR #5609** (`feat(email): add Microsoft delegated OAuth for Office365/Outlook`)：邮箱通道的关键安全升级，但可能与其他邮件功能 PR（如 #5606， #5605）存在依赖或冲突。
*   **PR #5388** (`feat(agent): budget model-visible MCP schemas`)：对 MCP 工具可见性的优化，是一个较长期的特性开发（自 2026-08-13）。

---
**报告生成说明**：本报告所有分析均基于提供的 2026-09-13 前一日 GitHub 数据，状态以数据更新时间戳为准。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**报告日期：2026-09-13 | 数据来源：github.com/nousresearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 今日保持极高活跃度——过去24小时内共记录 **50 条 Issues 更新**（47 条新开/活跃、3 条关闭）和 **50 条 PR 更新**（48 条待合并、2 条已合并/关闭），无新版本发布。项目整体处于**密集迭代与安全加固并行**的状态：一方面多条安全相关 Issue（#109495、#109422、#109503、#59293）集中爆发，反映出社区对权限边界和认证防护的高度关注；另一方面桌面端的思考预览滚动、消息队列等 UI 问题也在持续修复中。从 Issue 创建时间戳判断，**今日（2026-09-13）至少有 8 条全新 Issue 被提交**，表明项目正处于活跃的用户反馈收集期。活跃度评估：**高**。

---

## 2. 版本发布

今日无新版本发布。最近已知版本为 **v0.21.2**（2026-09-11，PR #109111 提及）及 **v0.21.1**（#108383 提及），上一个主要版本 **v0.20.6**（#109521 提及）。多个 Pending PR 涉及 breaking change 级别的重构（如 #106742 的统一会话模型、#109509 的文件权限策略），建议维护者在合并前明确版本规划和迁移说明。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#109515](https://github.com/NousResearch/hermes-agent/pull/109515) | fix(desktop): pause thinking-preview growth pin while user scrolls | **CLOSED/MERGED** | 修复桌面端思考预览流式展开时滚动被强制重置的问题，提升用户体验 |
| [#92535](https://github.com/NousResearch/hermes-agent/pull/92535) | Bug: Git updates lose receipts | **CLOSED** | 修复 `hermes update` 成功后不写入更新收据的问题，补全了文档承诺的功能 |

### 值得关注的核心 PR 推进

- **[#106742](https://github.com/NousResearch/hermes-agent/pull/106742) — P1 级架构重构**："One gateway owns every session" 将 CLI、TUI、Desktop、API、ACP、Bots 和 Cron 统一到同一个 gateway-owned session。这是项目成立以来最重大的架构变更之一，直接影响所有面的会话隔离模型，目前仍在 Open 状态且已连续更新 4 天。
- **[#108914](https://github.com/NousResearch/hermes-agent/pull/108914) — Bot Screen 功能**：为 Headless Linux Gateway 的 Bot 提供可流式传输的 Xfce 桌面，支持用户接管登录/解决 2FA 后归还。该功能将 Hermes 从纯文本交互推向可视化操作层面，是产品能力的重大跃迁。
- **[#109509](https://github.com/NousResearch/hermes-agent/pull/109509) — 安全加固**：State DB、恢复快照和内存锁文件现在以 owner-only（0600/0700）权限创建，不受 umask 影响。修复了 #102878 和 #59716 两个长期存在的安全漏洞。

**整体评估**：项目今日在安全加固、桌面体验和核心架构三个维度均有实质推进，但大量关键 PR 仍处于待合并状态，审查压力较大。

---

## 4. 社区热点

### 🔥 最热门 Issues

1. **[#39609](https://github.com/NousResearch/hermes-agent/issues/39609)** — *16 条评论、1 👍、P1*
   - **问题**：用 `--initial-status blocked` 创建的看板任务约 1 秒后自动晋升为 `ready`，无任何操作者记录，默认 worker 直接领取执行，**人工审批闸门被绕过**。
   - **社区诉求**：这是严重的逻辑 Bug，直接影响任务工作流的安全性。用户要求修复自动晋升行为，确保 blocked 状态的任务需要显式人工操作才能推进。

2. **[#59293](https://github.com/NousResearch/hermes-agent/issues/59293)** — *6 条评论、P2、needs-decision*
   - **问题**：`hermes config set` CLI 命令绕过了系统配置写保护，允许 Agent 在拥有终端权限时禁用审批层。
   - **社区诉求**：安全审计层面的诉求——v0.18.0 加入的审批层保护存在前后门不一致的问题，需要 CLI 命令也纳入安全检查。

3. **[#109480](https://github.com/NousResearch/hermes-agent/issues/109480)** — *3 条评论、今日创建*
   - **问题**：通过 Web UI 切换 Profile 时，Gateway 重启后仍显示 "default"，聊天界面引用错误 Profile。
   - **社区诉求**：Profile 隔离机制在多用户部署场景下失效，影响生产可用性。

### 🔥 最活跃 PRs

- **[#106742](https://github.com/NousResearch/hermes-agent/pull/106742)**（P1，统一会话模型）和 **[#108914](https://github.com/NousResearch/hermes-agent/pull/108914)**（Bot Screen）是社区关注焦点，均已更新 4 天但仍在审查中。
- **[#109500](https://github.com/NousResearch/hermes-agent/pull/109500)** 和 **[#109503](https://github.com/NousResearch/hermes-agent/pull/109503)** 两个 PR 几乎同时提交，都针对 `/yolo` 权限绕过问题（对应 Issue #109495），可能存在重复劳动或需要合并审查。

---

## 5. Bug 与稳定性

### 🔴 P1 严重级别

| Issue | 描述 | 状态 | 有 Fix PR? |
|---|---|---|---|
| [#39609](https://github.com/NousResearch/hermes-agent/issues/39609) | Blocked 任务自动晋升，人工审批闸门绕过 | Open | ❌ |
| [#109422](https://github.com/NousResearch/hermes-agent/issues/109422) | 复用同一 OAuth MCP URL 的多 Profile 静默互采身份 | Open | ❌ |

### 🟠 P2 高级别

| Issue | 描述 | 状态 | 有 Fix PR? |
|---|---|---|---|
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | `hermes config set` 绕过系统配置写保护 | Open | ❌（有同向 PR #109500/#109503 针对 yolo 权限）|
| [#109495](https://github.com/NousResearch/hermes-agent/issues/109495) | `/yolo` 未在副作用边界强制管理员策略 | Open | ✅ [#109500](https://github.com/NousResearch/hermes-agent/pull/109500)、[#109503](https://github.com/NousResearch/hermes-agent/pull/109503) |
| [#109521](https://github.com/NousResearch/hermes-agent/issues/109521) | Discord 适配器静默失联数小时，看门狗不触发 | Open | ❌ |
| [#109518](https://github.com/NousResearch/hermes-agent/issues/109518) | Cron 的 `enabled_toolsets` 不限制 `delegate_task` 子代理工具集 | Open | ❌ |
| [#108383](https://github.com/NousResearch/hermes-agent/issues/108383) | Dashboard 聊天会话永远卡在 "Setup Required" | Open | ❌ |
| [#108302](https://github.com/NousResearch/hermes-agent/issues/108302) | Managed Tool Gateway 在每个 Bot Profile 不可用 | Open | ❌ |
| [#109089](https://github.com/NousResearch/hermes-agent/issues/109089) | `a2a_call` 在调用端硬性 420s 超时，无视配置 | Open | ❌ |

### 🟡 稳定性与回归

- **[#102945](https://github.com/NousResearch/hermes-agent/issues/102945)**：`config.yaml` 解析失败时静默回退默认值，所有用户配置被忽略——配置容错性严重不足。
- **[#109452](https://github.com/NousResearch/hermes-agent/issues/109452)**：Kanban 中 non-sticky blocked 卡片每个 dispatcher tick 被重新推广，导致 **30 分钟内产生 30 次相同模型调用**——资源浪费和成本失控。
- **[#76443](https://github.com/NousResearch/hermes-agent/issues/76443)**：桌面端中途中断窗口/会话切换导致进度重复渲染。
- **[#109482](https://github.com/NousResearch/hermes-agent/issues/109482)**：`hermes update` 静默丢弃失败的兄弟 Profile 配置迁移。
- **[#109111](https://github.com/NousResearch/hermes-agent/issues/109111)**：Anthropic 的 `auxiliary.vision.provider/model` 被静默忽略——配置无效但不报错。

### ✅ 今日已修复

- **#92535**（Git update receipts 丢失）
- **#107026**（Windows Dashboard 会话预留）
- **#109448**（memory/hindsight daemon 反复重启）
- **#109510** → 对应 PR [#109515](https://github.com/NousResearch/hermes-agent/pull/109515) 和 [#109520](https://github.com/NousResearch/hermes-agent/pull/109520) 已修复桌面端思考预览滚动问题

---

## 6. 功能请求与路线图信号

### 高概率进入下一版本的功能

| 功能 | 来源 | 信号强度 |
|---|---|---|
| **统一 Gateway 会话模型** | PR #106742 | 🔴 极高 — P1 优先级，架构级重构 |
| **Bot Screen（

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-13

> 数据源：github.com/qwibitai/nanoclaw | 统计窗口：过去 24 小时

---

## 1. 今日速览

项目今日活跃度较高：共处理 **5 条 Issue**（新增 2，关闭 3）和 **25 条 PR**（合并/关闭 11，仍开 14），无新版本发布。整体来看，**setup 安装流程**和**运行期稳定性**是收敛重点，而 **code-mode、voice、community-portal** 三条功能线并行推进。代码提交面广但单PR体量偏大，合并队列有一定堆积，需关注大特性分支的集成风险。

---

## 2. 版本发布

**无新版本。** 当前最新稳定版仍为 2.3.0（commit `74224f62`）。建议待 #3788（provider picker 修复）和 #3770（WEBHOOK_PORT）等关键 bug fix 合入后考虑小版本补丁。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 价值 |
|---|---|
| [#3770](https://github.com/nanocoai/nanoclaw/pull/3770) | 修复 WEBHOOK_PORT 从 .env 读取生效 — 彻底解决 [Issue #2901](https://github.com/nanocoai/nanoclaw/issues/2901) 长期遗留问题 |
| [#3766](https://github.com/nanocoai/nanoclaw/pull/3766) | SQLite 迁移加写锁重试 — 消除 fresh setup 并发冲突（对应 Issue #3765） |
| [#3763](https://github.com/nanocoai/nanoclaw/pull/3763) | 清理 add-opencode 旧 Dockerfile guard 残留 — 解决 #3762 |
| [#3768](https://github.com/nanocoai/nanoclaw/pull/3768) | Linux nohup fallback 服务真正启动并验证 |
| [#3774](https://github.com/nanocoai/nanoclaw/pull/3774) | OneCLI 证书跨重启持久化，避免 EISDIR 启动失败 |
| [#3776](https://github.com/nanocoai/nanoclaw/pull/3776) | 安装器强制走系统 shell 绝对路径，修复 exe.dev 环境 curl→sh 管道失败 |
| [#3773](https://github.com/nanocoai/nanoclaw/pull/3773) | registry 单分支 clone 场景下 skill 安装可用 |
| [#3758](https://github.com/nanocoai/nanoclaw/pull/3758)、[#3754](https://github.com/nanocoai/nanoclaw/pull/3754) | portal 体验打磨：去重提醒、单链接手递手 |

**项目整体向前迈进了**：setup 链路可靠性显著提升（5 个相关 bug 一周内集中修复），配置遵从性增强，为下一个功能里程碑（code-mode）扫清障碍。

---

## 4. 社区热点

评论/互动最密集的 PR：
- **[#3783](https://github.com/nanocoai/nanoclaw/pull/3783)** — code-mode 持久化编码会话（runner + sandbox + approvals），标签覆盖 10 个 area，是当前最大野心项
- **[#3784](https://github.com/nanocoai/nanoclaw/pull/3784)** — community-portal 扩展：远程终端 + 聊天界面
- **[#3786](https://github.com/nanocoai/nanoclaw/pull/3786)** — typing indicator 重构（follow runner turn state）
- **[#3772](https://github.com/nanocoai/nanoclaw/pull/3772) / [#3764](https://github.com/nanocoai/nanoclaw/pull/3764)** — voice 频道全双工浏览器通话

**背后诉求**：用户期待 NanoClaw 从"聊天 Agent"进化为"可持久化、可协作、可语音交互的编码平台"，community-portal 是实现多机器协作的关键基础设施。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 |
|---|---|---|
| 🔴 高 | [#3787](https://github.com/nanocoai/nanoclaw/issues/3787) fresh install 跳过 provider picker，默认选 Claude | **已有修复 PR [#3788](https://github.com/nanocoai/nanoclaw/pull/3788)** |
| 🟠 中 | [#3785](https://github.com/nanocoai/nanoclaw/issues/3785) channels 分支 slack.ts 引用 main 上不存在的 `extractRawText` | **无修复 PR，需合入前修复** |
| 🟡 低 | [#2901](https://github.com/nanocoai/nanoclaw/issues/2901) WEBHOOK_PORT .env 忽略 | 已修复 [#3770](https://github.com/nanocoai/nanoclaw/pull/3770) |
| 🟡 低 | [#3765](https://github.com/nanocoai/nanoclaw/issues/3765) SQLite 并发迁移 | 已修复 [#3766](https://github.com/nanocoai/nanoclaw/pull/3766) |
| 🟡 低 | [#3762](https://github.com/nanocoai/nanoclaw/issues/3762) add-opencode 遗留测试文件 | 已修复 [#3763](https://github.com/nanocoai/nanoclaw/pull/3763) |

---

## 6. 功能请求与路线图信号

可能被纳入下一版本的功能：
- **code-mode 持久化会话** [#3783](https://github.com/nanocoai/nanoclaw/pull/3783) — 已具备 runner + sandbox + approvals 骨架，合并后即核心卖点
- **voice 全双工** [#3764](https://github.com/nanocoai/nanoclaw/pull/3764) — 适配 GPT-Live-1，技能形态交付
- **community-portal 远程终端** [#3784](https://github.com/nanocoai/nanoclaw/pull/3784) — SSH loopback + account link，中长周期
- **Codex provider 认证** [#3489](https://github.com/nanocoai/nanoclaw/pull/3489) — 结构化 setup-driver 认证，自 8 月起持续演进

---

## 7. 用户反馈摘要

- **不满意**：fresh install 流程断裂（#3787）、.env 配置被静默忽略（#2901）、SQLite 并发报错（#3765）、旧版本残留文件导致升级失败（#3762）— 共同指向"升级/迁移路径不够健壮"
- **满意**：portal 手递手体验经过多轮 PR 打磨后趋于完整（#3754、#3758）
- **使用场景**：用户把 NanoClaw 当作"跨机器协作的编码中枢"，对 remote terminal、persistent sessions 有强需求

---

## 8. 待处理积压（提醒维护者）

- **[#3785](https://github.com/nanocoai/nanoclaw/issues/3785)** channels 分支与 main API 不一致 — 阻塞 voice PR 合入，需优先对齐
- **[#3750](https://github.com/nanocoai/nanoclaw/pull/3750)** update controller 脚本提取 — open 近 5 天仍未合并，影响 /update-nanoclaw 可用性
- **[#3489](https://github.com/nanocoai/nanoclaw/pull/3489)** Codex 认证 — open 近 3 周，需 review 推进
- **[#3783](https://github.com/nanocoai/nanoclaw/pull/3783)** / **[#3784](https://github.com/nanocoai/nanoclaw/pull/3784)** 大特性 PR — 体量大建议拆 CR，关注合并冲突
- **[#3779](https://github.com/nanocoai/nanoclaw/pull/3779)** setup 重启身份验证 — open 1 天，需跟进

---

**健康度小结**：Bug 收敛节奏良好（setup 相关 5 连修），但功能 PR 积压 + branches 漂移（channels）是当前主要风险。建议本周内合并 #3788/#3770 并对齐 #3785 API。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-09-13)

## 1. 今日速览
截至 2026-09-13，NullClaw 项目过去 24 小时整体活跃度处于低水位。社区交互数据表现为：Issues 更新 0 条，PR 更新 1 条（1 条已关闭），无新版本发布。尽管表面数据平淡，但项目在核心通信模块的底层稳定性上取得了实质性推进，整体运行健康且代码质量保持严谨。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
**[PR #996](https://github.com/nullclaw/nullclaw/pull/996) 已成功关闭**：`fix(mcp): bound stdio response waits`
本次合并推进了项目在 MCP 协议栈底层的健壮性。具体进展包括：
- **超时机制落地**：为 stdio MCP 响应读取引入了 `timeout_ms` 参数，避免了因无响应导致的无限期阻塞。
- **进程组清理**：当请求超时时，系统能够自动终止服务器所属的进程组，防止孤儿进程产生。
- **异常初始化兜底**：在初始化失败场景下，新增了对已生成子进程的清理逻辑，杜绝资源泄漏。
- **质量验证**：CI 数据表现优异，`zig build test --summary all` 通过 7,373 项测试（仅 9 项跳过），且成功构建 `ReleaseSmall` 优化版本。

## 4. 社区热点
今日唯一的热点为 **[PR #996](https://github.com/nullclaw/nullclaw/pull/996)**，该 PR 关联并修复了 **[Issue #991](https://github.com/nullclaw/nullclaw/issues/991)**。
- **背后诉求**：该问题源于用户对 MCP 通信进程在 stdio 模式下容易发生死锁或挂起的反馈。维护者通过引入超时控制与进程组级联终止机制，从根本上解决了这一底层通信痛点。
- **数据表现**：该 PR 虽有 0 条评论和 0 个 👍，但作为解决底层架构级缺陷的关键修复，其技术价值与优先级远高于普通的社区互动热度。

## 5. Bug 与稳定性
- **已修复缺陷**：**[Issue #991](https://github.com/nullclaw/nullclaw/issues/991)**（stdio MCP 响应等待无超时导致进程挂起）。该问题已随 **[PR #996](https://github.com/nullclaw/nullclaw/pull/996)** 的关闭而彻底解决。
- **当前状态**：今日无新增 Bug 报告，项目在核心运行时的稳定性方面暂未出现新的回归问题。

## 6. 功能请求与路线图信号
今日无新增 Issues，暂未收集到新的功能需求。结合当前仅有底层 Bug 修复且无新特性 PR 提交的情况，项目近期的路线图信号仍强烈聚焦于核心运行时、通信协议及内存管理的打磨，而非新功能的快速扩张。

## 7. 用户反馈摘要
由于今日 Issues 互动为 0，暂未提取到具体的用户反馈文本。项目在用户端的舆情监控处于静默期，这可能意味着当前核心用户群对现有功能满意度较高，或社区互动渠道需要进一步激活以收集更广泛的反馈。

## 8. 待处理积压
- **积压状态**：当前积压队列已清空。已知问题（如 #991）均已通过 PR #996 闭环，无长期未响应的重要 Issue 或 PR。
- **维护者提示**：虽然积压为零，但需关注极低的数据活跃度（0 评论、0 👍、0 新 Issues）。建议维护者审视当前的开发者文档与参与门槛，确保在稳定性提升后，社区生态的互动频率能同步跟上。

---
*数据来源：[NullClaw GitHub Repository](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-13

> **数据源**: github.com/nearai/ironclaw | **报告生成时间**: 2026-09-13

---

## 1. 今日速览

- 项目今日整体处于**低活跃度状态**，过去 24 小时无新 Issues 产生，PR 仅有 2 条变动（1 开、1 闭）。
- 无新版本发布，无 Breaking Change 预警，发布流水线静默。
- 唯一活跃的 PR #8098 为测试用例补充，关注点落在 `TurnRunState` 谱系 lineage 字段的退化回归防护上，属于质量保障类工作而非功能增量。
- 综合判断：项目今日**代码吞吐量为零**，维护节奏平稳但缺乏新功能或问题修复的推进动能。

---

## 2. 版本发布

- 今日无新版本发布，跳过。

---

## 3. 项目进展

| PR | 状态 | 推进内容 | 链接 |
|----|------|----------|------|
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | ✅ CLOSED | 修复 assistant 模块对"断开连接的共享通道"的判别逻辑：区分 paired user 断开与 unpaired account，保持拒绝分类在 product / adapter / OpenAI-compatible 三端一致，并更新 Slack capability 表述。 | [PR #8076](https://github.com/nearai/ironclaw/pull/8076) |
| [#8098](https://github.com/nearai/ironclaw/pull/8098) | 🔵 OPEN | 为 turns 模块补充逆回归测试：验证 metadata 初始携带 depth / activation provenance / descendant cap，并确认 `TurnRunState` 派生快照 deliberately omit 全部三个 lineage 字段。 | [PR #8098](https://github.com/nearai/ironclaw/pull/8098) |

> 项目今日向前迈进了 **1 个功能缺陷修复 + 1 个测试防护补充**，但合并队列仅处理了 1 项，整体推进速率偏慢。

---

## 4. 社区热点

- 今日**无 Issues 产生**，社区讨论源头为空。
- PR 层面唯一可观察的互动是 #8076（创建 6 天后于今日关闭），反映维护者对 assistant 断开通道场景的修复存在较长的审查周期。
- 无点赞、无评论数据（`undefined`），社区参与度指标全部为零。

---

## 5. Bug 与稳定性

- 今日**无 Bug 报告**。
- #8076 的关闭表明此前存在"共享通道断开后无法区分 paired/unpaired"导致的错误拒绝分类问题，现已修复，稳定性风险解除。
- 当前已知风险：#8098 关注的 `TurnRunState` 谱系字段丢失若未覆盖，可能引发 lineage 溯源断裂（但属测试补充，非已发生 Bug）。

---

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- #8098 的测试意图暗示 **lineage / provenance 追溯** 是项目关注的方向，后续可能围绕 `TurnRunState` 的元数据完整性做功能增强。
- #8076 对 OpenAI-compatible surface 的统一拒绝分类，暗示项目在 **多 adapter 一致性** 路线上持续投入。

---

## 7. 用户反馈摘要

- 今日无 Issues 评论数据，用户反馈源为空。
- 可从已关闭 PR #8076 的修复范围推断：用户对"共享通道断开后 bot 回复不明确"的场景存在真实痛点，且对跨 surface（product / adapter / OpenAI）行为一致性有隐性期待。

---

## 8. 待处理积压

| 类型 | 条目 | 滞留时长 | 提醒 |
|------|------|----------|------|
| OPEN PR | [#8098](https://github.com/nearai/ironclaw/pull/8098) | 1 天 | 测试类 PR，需维护者审查合并；为 lineage 回归防护的关键补丁。 |
| — | 无长期未关闭 Issues | — | Issues 清空，存量健康。 |

> **维护建议**：#8098 已开放 1 天，建议尽快审查以避免测试债务累积。整体项目今日无阻塞性问题，但 PR 吞吐量偏低，建议关注下周合并节奏。

---

**健康度评分**：🟢 稳定（无阻塞 Bug，Issues 积压为 0，PR 吞吐量偏低但无风险）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 - 2026-09-13

---

## 1. 今日速览

过去 24 小时项目活动呈现活跃态势：**Issues 更新 6 条（新开/活跃 6 条，已关闭 0 条）**，**Pull Requests 更新 9 条（待合并 8 条，已合并/关闭 1 条）**。整体活跃度保持稳定，持续有 Bug 修复与功能改进。无新版本发布，当前项目保持 v2026.3.26 稳定版状态。

---

## 2. 版本发布

本日未发布新版本。项目保持当前稳定版（v2026.3.26 左右），团队重点聚焦于修复已知问题并推进已提交的修复 PR。

---

## 3. 项目进展

| PR 编号 | 类型 | 关键内容 | 关联 Issue |
|---------|------|----------|------------|
| **#1049** | ✅ 修复 | `fetchWithAuth` 并发 401 重试时的 double Token 刷新漏洞。引入 `sharedRefreshOnce` 共享槽，确保并发请求不重复消耗 refreshToken，防止用户被强制登出。 | #1048 |
| **#1052** | ✅ 修复 | 修复两个导致 AI 会话永久无法启动的竞态条件（S-07/S-08）。<br>• S-07：`ensureGatewayClientReady` 并发初始化失败后等待者直接返回，无检查 gatewayClient 是否就绪<br>• S-08：`ensureActiveTurn` 对已手动停止的 session 仅打印警告仍创建，导致下次 `startSession` 报“Session is still running”<br>修复后会话可正常恢复。 | #1051 |
| **#1054** | ✅ 修复 | 修复模态框关闭按钮在顶部栏拖拽区域失去响应的问题。通过在 `index.css` 中为 `.fixed` 和 `.modal-backdrop` 添加 `-webkit-app-region: no-drag`，阻止 Electron 窗口拖拽拦截鼠标事件。 | #1053 |
| **#1056** | ✅ 修复 | 从生产代码中移除调试级别的 `console.log` 语句（`src/renderer/services/cowork.ts`），符合项目日志规范。 | — |
| **#1057** | ✅ 修复 | 优化 `coworkMemoryJudge.ts` 中的文本提取逻辑，过滤掉 `type="thinking"` 块，避免在链式思维模式下出现冗余推理内容。 | — |
| **#1058** | ✅ 修复 | 修复 `migrateScheduledTaskRunsToOpenclaw` 中的数据丢失风险。当 `fs.appendFileSync` 写入失败时，原函数仍会调用 `setKv(..., "true")`，导致下次启动时 idempotency 守卫跳过迁移，记录丢失。 | — |
| **#1059** | ✅ 修复 | 调整 Windows 默认浏览器检测逻辑，使其查询现有浏览器信息时使用 `edeg` 而非 `chrome`（已将 Chrome 设置为默认浏览器）。 | — |
| **#1065** | 🔄 开发中 | 新功能：允许在创建/编辑定时任务时绑定现有 cowork session，替代每次运行时生成新隔离 session。 | — |

---

## 4. 社区热点

| 项目 | 类型 | 评论数 | 链接 | 分析 |
|------|------|------|------|------|
| **Issue #1048** | 🔥 活跃度最高 | 1 条评论 | [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) | 并发 401 重试导致 double consume refreshToken，是用户登录体验的核心痛点。已通过 PR #1049 修复，影响范围广。 |
| **PR #1052** | 🔥 高关注 | 1 条评论 | [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) | 解决 AI 会话启动失败的根本原因，与 Issue #1051 紧密关联，用户反馈频繁。 |
| **PR #1054** | 🟡 活跃 | 1 条评论 | [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) | 模态框交互问题直接影响用户操作流畅度，用户普遍认可此修复。 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 描述 | 状态 | 修复情况 |
|----------|------|------|------|----------|
| **🔴 高** | 并发 401 重试双重消费 refreshToken | `fetchWithAuth` 独立的 401 重试逻辑绕过 `refreshOnce()` 去重保护，多并发请求竞争同一 rolling refreshToken，导致第二次刷新失败、用户被强制登出。 | ✅ 已修复（PR #1049） | 已合并，关联 Issue #1048 |
| **🔴 高** | AI 会话永久无法启动（竞态） | `ensureGatewayClientReady` 并发初始化失败后，等待者直接 `return` 而不检查 `gatewayClient` 是否就绪，后续调用永久报错，用户只能重启应用。 | ✅ 已修复（PR #1052） | 已合并，关联 Issue #1051 |
| **🟠 中** | 模态框关闭按钮失效 | 当模态框高度触及顶部栏时，关闭按钮因顶部栏 header 带 `.draggable` 类被 Electron 窗口拖拽拦截，鼠标事件优先级高于 z-index，导致按钮不可点击。 | ✅ 已修复（PR #1054） | 已合并 |
| **🟠 中** | 定时任务时间与标题不一致 | 修改定时任务执行时间后，Issue 标题与实际执行时间不匹配，用户体验受影响。 | ❓ 未修复 | 仍在监控，建议优先处理 |
| **🟢 低** | 心跳对话未过滤 | 系统日志/对话未按预期过滤，产生噪音，干扰用户查看。 | ❓ 未修复 | 仍在讨论，优先级较低 |

---

## 6. 功能请求与路线图信号

- **AI 会话启动优化**（PR #1052）：用户反馈 AI 会话启动失败，建议进一步完善 `ensureGatewayClientReady` 的错误恢复机制，提供更友好的重试提示。
- **定时任务绑定 cowork session**（PR #1065）：新功能已进入开发阶段，预计下个版本可实现，将提升任务管理灵活性。
- **浏览器检测改进**（PR #1059）：针对 Windows 平台的浏览器检测逻辑优化，提升跨平台兼容性。
- **日志规范化**：PR #1056 已完成，所有生产代码中移除了调试级别的 `console.log`，符合项目规范。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的核心用户痛点：

1. **登录稳定性**——并发 401 重试导致的 double Token 刷新问题是用户最关心的痛点，已通过 PR #1049 解决。
2. **模态框交互**——关闭按钮在特定布局下失效，影响操作效率，已通过 CSS 修复。
3. **AI 会话启动**——部分用户无法正常启动 AI 会话，需持续关注并完善初始化逻辑。
4. **定时任务配置**——修改后时间与标题不一致，属于 UI/UX 细节问题，建议在下个版本统一处理。

整体用户反馈倾向积极，尤其对近期修复的 Token 刷新、模态框等交互问题给予好评。

---

## 8. 待处理积压

| 编号 | 项目 | 状态 | 备注 |
|------|------|------|------|
| **#1061** | 网关端口修改 | ⏳ 未解决 | 用户询问如何修改网关端口以避免与 Openclaw 端口冲突，尚未得到明确答案。 |
| **#1062** | 定时任务时间不一致 | ⏳ 未解决 | 定时任务修改后标题与实际执行时间不匹配，属于高优先级 Bug。 |
| **#1061** | 网关端口冲突 | ⏳ 未解决 | 需确认具体端口配置方案，建议在 PR #2657 合并后进行验证。 |
| **#1058** | 迁移数据丢失风险 | ⏳ 监控 | 若 `fs.appendFileSync` 失败时仍调用 `setKv`，可能导致历史记录丢失，需跟踪实际影响。 |

---

**总结**：2026-09-13 日期内 LobsterAI 项目保持高活跃度，核心 Bug（并发 Token 刷新、AI 会话启动）已通过 PR #1049 和 #1052 成功修复。社区热点集中在 Issue #1048 和 #1052，反映了用户对登录稳定性和 AI 会话可靠性的强烈需求。待处理的 #1061 和 #1062 需优先跟进，以保障项目长期健康发展。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-13

> 数据来源：github.com/moltis-org/moltis | 统计窗口：过去 24 小时

---

## 1. 今日速览

昨日项目整体活跃度偏低：0 个 Issue 更新，3 条 PR 记录（2 待合并 / 1 已合并/关闭），无新版本发布。其中唯一已关闭的 PR #1261 完成了 TLS 协议层修复，两个待合并 PR 分别涉及新供应商接入（#1143）和 Telegram 策略补全（#1265）。从提交节奏看，维护者仍在持续合入修复类 PR，但功能类 PR 长期滞留，需关注合并瓶颈。

---

## 2. 版本发布

无新版本发布，跳过。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 内容 | 意义 |
|---|---|---|
| [#1261](https://github.com/moltis-org/moltis/pull/1261) fix(tls): restrict ALPN to HTTP/1.1 | 在 TLS 握手阶段限定 ALPN 仅 HTTP/1.1，等待 RFC 8441 WebSocket 升级支持；18 个测试通过 | 推进了协议层稳定性，修复 #245，为后续 WebSocket 兼容铺路 |

项目整体前进了**协议合规性**与**测试覆盖**两个维度。

---

## 4. 社区热点

无 Issues 更新，PR 均无评论记录，今日无显著社区讨论热点。建议维护者主动在 #1143、#1265 下触发评审评论以激活社区参与。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 中 | TLS ALPN 协议冲突（#245） | ✅ 已有 fix PR [#1261](https://github.com/moltis-org/moltis/pull/1261) 关闭 |
| 低 | Telegram 工具策略缺失（#1264） | 🔧 有 fix PR [#1265](https://github.com/moltis-org/moltis/pull/1265) 待合并 |

---

## 6. 功能请求与路线图信号

- **[#1143](https://github.com/moltis-org/moltis/pull/1143) Add Requesty as OpenAI-compatible provider**：沿用 OpenRouter 模式接入 Requesty（`router.requesty.ai/v1`），表明项目在"多供应商兼容"方向持续扩张，该模式若合并，可成为后续接入其他 OpenAI 兼容路由的模板。**信号强烈**，很可能进入下一版本。

---

## 7. 用户反馈摘要

无 Issues 与评论数据可分析。

---

## 8. 待处理积压（需维护者关注）

| 条目 | 滞留时长 | 风险 |
|---|---|---|
| [#1143](https://github.com/moltis-org/moltis/pull/1143) Requesty provider | ~73 天（自 07-02） | 长期未评审，可能失去上下文；建议确认是否沿用 OpenRouter 模式或需重写 |
| [#1265](https://github.com/moltis-org/moltis/pull/1265) Telegram 工具策略 | 1 天 | 新提交，需尽快 Code Review，避免策略配置缺口扩大 |

---

**健康度小结**：修复类 PR 流转正常，功能类 PR 积压明显；建议维护者本周优先评审 #1143 与 #1265，并考虑为长期 PR 设置自动提醒机制。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目日报**  
*日期：2026-09-13*  

---

## 1. 今日速览
- 过去24小时共 **17 项 Issues** 更新（15 项活跃/新开，2 项已关闭），显示社区反馈活跃度高。  
- **6 个 PR** 等待合并，涵盖关键故障修复和新功能，表明开发团队正在积极解决积累的问题。  
- **暂无新版本发布**，项目仍稳定在 **v2.2.1** 系列。  
- 多个高优先级故障（如会话丢失、MCP 连接问题、内存耗尽、UI 冻结）已在 PR 中标记，确保问题得到修复。

---

## 2. 版本发布
> **无** – 目前暂无正式版本或 Beta 版本发布。

---

## 3. 项目进展
所有 6 个 PR 均处于 **等待合并** 状态，持续推进以下方面的改进：

| PR | 标题 | 主要改进点 |
|----|------|--------------|
| **#7732** | `fix(acp): select permission options by protocol kind` | 修复 `trusted: true` 会话因 `_pick_allow_option` 匹配规则错误而回退到交互式提示的问题。 |
| **#7729** | `fix(mcp): recognize Java jsonRpcError envelope on discover probe` | 使驱动程序能够正确处理 Java/Kotlin MCP SDK 服务器返回的 HTTP 500 状态码及其非标准 `{"jsonRpcError": {...}}` 响应（修复 #7728）。 |
| **#7725** | `fix(workspace): replace blocking watchfiles.awatch SSE watcher with threaded polling` | 解决大型仓库的“文件浏览器打开导致整个服务冻结”问题（修复 #7721）。 |
| **#7723** | `fix(console): emit an error event when stream_one fails` | 为控制台 SSE 流增加错误事件通知，使客户端能够区分失败的 turn 并避免盲重试。 |
| **#7719** | `feat(memory): allow a separate model for ReMeLight memory writing` | 实现 `MemoryConfig` 中 `memory_model` 配置项，使记忆摘要和进化能够使用独立的轻量级模型（提升 #7664 的功能）。 |
| **#7718** | `fix(telegram): render approval‑card markdown via HTML parse_mode` | 修复 Telegram 渠道因未使用 `parse_mode` 而导致粗体和代码块标记乱显示的问题。 |

*虽然没有合并的 PR，但这些待合并的 PR 直接解决了多项关键故障和路线图上的功能请求，为下一次版本奠定了坚实基础。*

---

## 4. 社区热点（讨论最多、影响最大）

| Issue | 类型 | 评论数 | 热度原因 |
|-------|------|--------|------------|
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | 问题 | **4** | 用户报告了插件开发过程中文件跟踪混乱和自动部署覆盖问题；该问题引发了关于记忆机制的讨论。 |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | 故障 | **3** | 会话和关联的大模型在重新部署后完全丢失，导致用户无法继续上下文对话。 |
| [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | 功能 | **3** | 要求在 v2.2+ 中为 A2A 协议提供官方支持，目前仅限 MCP。 |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | 故障 | **3** | 设定的 LLM 模型在正常使用过程中“消失”，导致界面报错，用户需要反复重新选择。 |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | 故障 | **3** | “每日论文”插件因 arxiv.org 不可达而静默失败，用户无法获知真实错误原因。 |

*这些议题反映了用户对**状态透明度**、**上下文持久化**和**协议扩展性**的高度关注。*

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重程度 | Issue | 状态 | 已有修复 PR? |
|----------|-------|--------|-------------|
| **🔴 高** | **#7724 – 会话丢失** | 活跃 | ❌ |
| **🔴 高** | **#7708 – 设置好的大模型丢失** | 活跃 | ❌ |
| **🔴 高** | **#7722 – 内存耗尽 (容器 OOM)** | 活跃 | ❌ |
| **🟡 中** | **#7715 – Daily Paper 静默失败** | 活跃 | ❌ |
| **🟡 中** | **#7728 – MCP discover HTTP 500 (Java SDK)** | 活跃 | ✅ [#7729] |
| **🟡 中** | **#7716 – MCP 无法连接 (v2.2.x)** | 活跃 | ❌ |
| **🟡 中** | **#7721 – 文件浏览器导致服务冻结** | 活跃 | ✅ [#7725] |
| **🟡 中** | **#7726 – ACP `trusted:true` 静默回退到提示** | 活跃 | ✅ [#7732] |
| **🟡 中** | **#7727 – kimi-code 写入工具路径提取失败** | 活跃 | ❌ |
| **🟡 中** | **#7720 – Creator UI 隐藏阻塞并缺少手动确认** | 活跃 | ❌ |
| **🟡 中** | **#7730 – 插件目录离线回退失败** | 活跃 | ❌ |
| **🔵 低** | **#7731 – 文件面板缺少点文件显示开关** | 活跃 | ❌ |
| **🔵 低** | **#7717 – DeepSeek 模型元数据和缓存可见性** | 活跃 | ❌ |
| **🔵 低** | **#7484 – A2A 支持请求** | 活跃 | ❌ |

*高严重性问题（会话丢失、模型丢失、内存耗尽）仍未修复，需优先关注。*

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 状态/PR 关联 |
|-------|------|------------------|
| **#7484** | 官方支持 A2A 协议（当前仅限 MCP） | 待实现 – 增强型路由和协议适配器仍是下一次版本的计划功能。 |
| **#7731** | 文件面板显示隐藏的文件（点文件） | 增强功能 – PR 尚未提交。 |
| **#7717** | 为 DeepSeek 模型添加原生能力元数据、提示词前缀稳定性和 KV 缓存可观测性 | 增强功能 – 文档和提供者级修改仍待实现。 |
| **#7719** | 为 ReMeLight 记忆写入添加独立模型配置 | **已通过 PR #7719 实现** – 将在下一个版本中推出。 |
| **#7582** (已关闭) | 插件商店操作简化，一键更新和通知 | 闭合 – 社区已确认该需求已满足（通过 UI/UX 改进）。 |
| **#7664** (已关闭) | 为 RemeLightMemoryManager 增加独立记忆模型 | 闭合 – 由 PR #7719 实现。 |

*这些路线图上的项目结合了社区反馈和当前开发工作，表明团队将优先关注协议扩展、用户体验改进和资源优化。*

---

## 7. 用户反馈摘要

- **文件和记忆管理混乱** – 插件开发者报告自动部署会覆盖未开发的代码目录（#7571），表明**持久化状态和路径隔离**方面的设计存在漏洞。
- **状态丢失和 UI 不透明** – 会话、关联的 LLM 选择以及“每日论文”等插件的状态会突然消失，导致用户多次重复操作（#7724, #7708, #7715）。
- **插件生态系统复杂性** – 尽管存在“插件商店”，但安装多个插件仍需多次点击，缺乏更新通知和批量操作（#7582，闭合后仍有残留的 UI 摩擦）。
- **连接性和兼容性问题** – MCP 客户端在升级到 2.2.x 后无法连接 Java SDK 服务器（#7716），Web 端的文件浏览器在大型仓库中导致服务冻结（#7721），ACP 会话权限处理逻辑错误（#7726）。
- **资源消耗和稳定性** – 容器内存呈线性增长（~1 MB/s）并最终 OOM，反映出**流缓冲、连接保持和无限循环**方面的设计缺陷（#7722）。
- **UI/UX 阻塞** – Creator 插件中的场景图像验证流程隐藏阻塞状态（GATED），用户无法手动继续（#7720）；Telegram 批准卡 Markdown 显示异常（#7718）。

总体而言，用户渴望**更可靠的状态持久化、透明的错误处理和更流畅的插件管理**。

---

## 8. 待处理积压（需维护者关注）

| Issue | 积压时间 | 优先级 | 建议行动 |
|-------|----------|--------|------------|
| **#7724 – 会话丢失** | ~3 天 | **高** | 调查重新部署后会话清除的原因，恢复上下文持久化机制。 |
| **#7708 – 设置好的大模型丢失** | ~3 天 | **高** | 跟踪模型状态存储（可能是前端/

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-09-13（周六）| 数据源：github.com/zeroclaw-labs/zeroclaw**

---

## 1. 今日速览

ZeroClaw 今日在零版本发布的背景下，展现出**高度的开发活跃度**：过去24小时共追踪到 25 条 Issue 更新（19 条活跃/新开，6 条关闭）和 50 条 PR 更新（38 条待合并，12 条已合并/关闭），社区与维护者均保持高强度参与。

项目当前处于**发布前冲刺阶段**——JordanTheJet 主导的发布效率改进批次（#10814 Tracker）今日启动，同日有 5 个发布基础设施相关的 PR 密集创建/更新，涵盖版本准备、Apple 公证检查、依赖排序、文档元数据提升等关键环节。

活跃度评级：**🔴 高**。CI 测试稳定性（尤其是 Windows Advisory nextest）和核心运行时 Bug（内存并发丢失、通知同步取消）是今日两大焦点。零版本发布意味着项目正在进行发布管道的重构与加固。

---

## 2. 版本发布

> **本日无新版本发布。**

项目当前处于 v0.8.5 之后的版本间隙期，维护者正在通过 #10814 Tracker 系统性改进发布效率与可重复性。历史参照：[v0.8.5 workflow](https://github.com/zeroclaw-labs/zeroclaw/actions/runs/33...)。

---

## 3. 项目进展

### 今日合并/推进的重要 PR：

**发布基础设施批次（2026-09-13 密集更新）：**

| PR | 内容 | 意义 |
|---|---|---|
| [#10817](https://github.com/zeroclaw-labs/zeroclaw/pull/10817) | fix(release): fail closed during version preparation | 修复版本提升脚本在 lockfile/Nix-hash/生成器失败时仍报告成功的问题，加入 opt-in `--release` 模式确保流程完整性 |
| [#10816](https://github.com/zeroclaw-labs/zeroclaw/pull/10816) | fix(release): check Apple notarization before compilation | 在 macOS 架构编译前先发现公证登录被拒的情况，避免浪费编译时间 |
| [#10815](https://github.com/zeroclaw-labs/zeroclaw/pull/10815) | fix(release): order versioned dev dependencies before publication | 修复 Cargo 在发布时验证版本化开发依赖的问题，确保工作区 crate 发布顺序正确 |
| [#10818](https://github.com/zeroclaw-labs/zeroclaw/pull/10818) | perf(docs): promote stable metadata without rebuilding | 部署后标记 stable 只需改元数据，避免五个语种的昂贵重复构建 |
| [#10819](https://github.com/zeroclaw-labs/zeroclaw/pull/10819) | fix(tools): expand only a leading tilde in knowledge.db_path | 修复 `String::replace('~', home)` 全局替换导致路径含 `~` 时被错误重写的问题 |

**重要长期 PR 持续推进（2026-09-12 更新）：**

- **[#10696](https://github.com/zeroclaw-labs/zeroclaw/pull/10696)** (fix runtime, size:L, risk:high)：将历史记录修剪策略从"达到上限才修剪"改为"低水位目标修剪"，防止会话在修剪后仅少量消息就再次触顶，是消息预算管理的重大改进。
- **[#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)** (feat runtime, size:XL)：为 daemon RPC、gateway、channels、ACP admission 和 CLI 突变提供统一的 live-config 权威源，替代各自独立推进的配置快照克隆，是架构级改进。
- **[#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248)** (feat security, size:XL, needs-author-action)：实现 RFC #7141 Rev 8 身份契约，provider 改为发出 `AuthenticatedIdentity` 而非旧的 grant-bearing `Principal`，是安全认证的里程碑式变更。

**项目整体推进评估：** 今日约 12 个 PR 状态发生变更（合并/关闭），其中 5 个发布管道 PR 是新提交的。核心运行时改进（历史修剪、配置协调、安全身份）持续推进，项目在**发布质量和运行时稳定性**两个维度同步前进。

---

## 4. 社区热点

### 评论最多的 Issues：

**[#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)**（6 条评论）— RpcDispatcher stack overflow 风险
- **热点原因：** Windows Advisory nextest 作业触发真实的 `0xc00000fd` 栈溢出，`process_line` 函数运行在 2MB 栈保护的 2% 以内。这是一个**硬性的内存安全边界问题**，涉及 CI/CD 核心管道。
- **诉求：** 需要在非必要 CI 作业中解决栈溢出风险，否则将持续阻塞 Windows 相关测试。

### 新建讨论最集中的 Issues（2026-09-12/13）：

**[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)** — Markdown Memory Backend 并发存储丢失（S0 数据丢失）
- **热点原因：** `MarkdownMemory::store` 在并发调用时会发生竞态条件，导致已存储条目静默丢失。被 agent 报告为**数据安全风险**。
- **诉求：** 需要序列化写入或验证写入落盘，这是最高优先级（Severity S0）的问题。

**[#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785)** — 通知滞后导致所有运行中的 turn 被取消（S1 级故障）
- **热点原因：** 三个 ACP 会话（各约 200k token）加一个 fable 会话同时流式传输时，两个 ox turns 在 1ms 内被同时取消。`begin_notification_resync → session/cancel` 的级联故障模式严重影响了用户体验。

**[#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807)** — MCP 连接被单次失败恢复永久毒化
- **热点原因：** MCP 服务短暂不可达后，ZeroClaw 仅执行一次重置+重新握手，失败后连接永久不可用。

---

## 5. Bug 与稳定性

### 按严重程度排列（今日活跃 Bug）：

#### 🔴 严重（S0-S1）：

| Issue | 问题 | 严重度 | Fix PR? |
|---|---|---|---|
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | Markdown Memory 并发 `store()` 丢失数据 | **S0 数据丢失** | ❌ 待修复 |
| [#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807) | MCP 连接被一次失败恢复永久毒化 | **S1 工作流阻塞** | ❌ 待修复 |
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | 通知同步滞后取消所有运行中 turns | S1 | ❌ 待修复 |
| [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | Failed Code/ACP turn 丢弃已接受的 prompt 和工具交换 | S2 高风险 | ❌ 待修复 |

#### 🟠 中等（S2-S3）：

| Issue | 问题 | 严重度 | Fix PR? |
|---|---|---|---|
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | RpcDispatcher 栈保护仅剩 2% 余量 | S2 | ❌ 待修复 |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | Windows-only 测试失败（cron 代码无关 PR 触发） | S3 | ❌ 待修复 |
| [#10794](https://github.com/zeroclaw-labs/zeroclaw/issues/10794) | Advisory Windows nextest 发布契约测试失败 | S3 | ❌ 待修复 |
| [#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795) | agent REPL 未启用 IUTF8，Backspace 删除多字节字符 | S2 | ❌ 待修复 |
| [#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796) | ZeroCode chat 忽略 Delete 键 | S3 | ❌ 待修复 |
| [#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802) | session/list-acp 与 turn_end 的 message_count 不一致 | S3 | ❌ 待修复 |
| [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | 单候选流恢复忽略 provider_retries，529 无退避 | S2 | ❌ 待修复 |
| [#10805](https://github.com/zeroclaw-labs/zeroclaw/issues/10805) | Control plane 进程活性测试在 Windows 竞态 | S3 | ❌ 待修复 |

### 今日已关闭 Bug（6 条）：
- #10731：`service logs` 在非 systemd 平台无输出 ✅ 已修复
- #10534：有界委托静默剥离 delegate tool ✅ 已修复
- #10689：Telegram 语音回复被 `[` 开头跳过 ✅ 已修复
- #10277：zerorelay 基础镜像标签未按 digest 固定 ✅ 已修复
- #10699：成本账本缓存写入率低估 ❌（已关闭但可能仍需关注）
- #10436：OpenRouter 流式传输被总超时截断 ✅ 已修复

---

## 6. 功能请求与路线图信号

### 今日新功能请求：

**[#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812)** — WhatsApp 发送 PDF 时缺少 `jpegThumbnail`/`pageCount`
- **信号：** WhatsApp 渠道的文档消息需要富媒体预览能力，这与 #8862/#8949 的插件 gateway webhook 生态形成互补。可能是下一版本 WhatsApp channel 的增强方向。

**[#10400](https://github.com/zeroclaw-labs/zeroclaw/issues/10400)** — 可配置的 Telegram 未授权发送者通知（in-progress）
- **信号：** 已进入开发中状态，属于 channel 安全自定义的路线图内容。

###

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*