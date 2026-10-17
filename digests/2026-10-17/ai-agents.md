# OpenClaw 生态日报 2026-10-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-17 02:11 UTC

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

**横向对比分析报告（2026‑10‑17）**  

---

### 1. 生态全景  
个人 AI 助手/自主智能体的开源生态目前呈现“**活跃分层、质量参差**”的特征：头部项目（OpenClaw、NanoClaw、ZeroClaw、LobsterAI）在最近 24 h 内既有显著的 PR 合并也有稳定的 Issue 关闭，表明其核心功能正在快速迭代并同时进行质量巩固；中层项目（NanoBot、Hermes Agent、CoPaw）虽然社区讨论热度高、待合并 PR 较多，但 PR 审查与合并速度相对滞后，导致已知的 P1/P2 Bug 与安全 CVE 仍有积压；尾部项目（IronClaw、TinyClaw、ZeptoClaw、Moltis）则基本处于维护或停滞状态，只有零星的 Bug 报告或功能需求。总体来看，生态正在从“功能爆发”阶段转向“稳定性与安全性”阶段，跨平台兼容性、统一配置/存储、工具身份透明以及细粒度的后台任务控制成为了共同的技术诉求。

---

### 2. 各项目活跃度对比  

| 项目 | 今日 Issues（新增/活跃/已关闭） | 今日 PRs（待合并 / 已合并‑关闭） | 是否有新 Release | 健康度评估* |
|------|--------------------------------|--------------------------------|------------------|--------------|
| **OpenClaw**（参考） | —（仅安全标记 safe） | — | 否 | 参考基线（安全可用） |
| **NanoBot** | 4（3 bug + 1 model，已关闭） | 30 待合并 / 27 已合并‑关闭 | 否 | **中等‑稳定**：性能优化与状态管理取得进展，关键 Bug 已修复 |
| **Hermes Agent** | 50（44 活跃/新增，6 已关闭） | 49 待合并 / 1 已合并‑关闭 | 否 | **需关注**：社区活跃度高，但 PR 合并缓慢，P1/P2 安全与稳定性问题积压 |
| **PicoClaw** | 2（1 活跃，1 已关闭） | 1 待合并 / 3 已合并‑关闭 | 否 | **中等‑含阻塞**：整体稳定，但 Android DNS 解析 Bug（#3420）为关键阻塞点 |
| **NanoClaw** | 17（1 新增，16 已关闭） | 30 待合并 / 20 已合并‑关闭 | 否 | **良好**：高效处理积压，架构调整接近完成 |
| **NullClaw** | 1 新增（#1066） | 17 待合并 / 0 已合并 | 否 | **活跃‑早期**：所有 PR 均在审查中，聚焦流式输出、跨平台交互 |
| **IronClaw** | 0 | 0 | 否 | **休眠**：过去 24 h 无任何活动 |
| **LobsterAI** | 5（1 新增/活跃，4 已关闭） | 6 待合并 / 15 已合并‑关闭 | **是**（2026.10.16） | **良好**：最新版本发布，磁盘/网络资源控制及 UI 细化得到落地 |
| **TinyClaw** | 0 | 0 | 否 | **休眠**：过去 24 h 无活动 |
| **Moltis** | 1（#1305，未闭） | 0 | 否 | **低活度**：仅一个阻塞性 web_fetch Bug 未有修复 PR |
| **CoPaw** | 15（12 新增/活跃，3 已关闭） | 18 待合并 / 11 已合并‑关闭 | 否 | **中等‑高活度**：待审 PR 较多，关注后台任务可取消及工具输出截断 |
| **ZeptoClaw** | 0 | 0 | 否 | **休眠**：过去 24 h 无活动 |
| **ZeroClaw** | 36（9 已关闭） | 18 待合并 / 32 已合并‑关闭 | 否 | **良好**：大量 PR 已合并，多项功能与缺陷同步推进 |

\*健康度评估基于：Issue 关闭率、PR 合并比例、是否有最新 Release、已知高优先级 Bug/CVE 的处理情况。  

---

### 3. OpenClaw 在生态中的定位  

| 维度 | OpenClaw | 典型对标项目（NanoBot、Hermes Agent、ZeroClaw） |
|------|----------|----------------------------------------------|
| **安全基线** | 已标记 `User Safety: safe`，未报告安全 CVE | Hermes Agent 近期出现多起 CVE（js‑yaml、httpx2）需要补丁；NanoBot 未报安全问题但 token 计量偏差曾影响成本控制 |
| **核心定位** | 为个人 AI 助手提供 **底层运行时与插件框架**，强调最小依赖与可嵌入性 | NanoBot 更侧重 **对话状态管理与 token 补偿**，Hermes Agent 强调 **多平台适配器（MCP）与企业级集成**，ZeroClaw 则聚焦 **插件系统与跨 Agent 记忆冲突处理** |
| **技术路线** | 以 **纯 Go / Rust 模块化**、插件热加载为主线，倾向于 **零配置启动** | NanoBot 采用 **Python + TikToken**、Hermes Agent 使用 **TypeScript/Node** 与众多 MCP 插件，ZeroClaw 基于 **Python + 插件框架**，均有较重的运行时依赖 |
| **社区规模** | 尚未公开具体贡献者数，但作为参考基线，其 Issue/PR 周期较低，说明社区相对聚焦于核心维护 | NanoBot 今日 57 PR、Hermes Agent 50 PR、ZeroClaw 50 PR，表明这些项目拥有更大的活跃贡献者基数 |
| **优势** | 安全保证、极低的运行时开销、易于嵌入其他系统 | 功能丰富（内置工具、适配器、UI），快速特性迭代，社区驱动的插件生态 |
| **劣势** | 特性相对简化，缘于较少的即插即用工具与 UI 组件 | 依赖链更长，安全与稳定性维护成本较高（见 Hermes Agent 的 CVE 积压） |

总体而言，**OpenClaw** 在生态中扮演“安全底座”与“可嵌入运行时”的角色，适合对资源消耗与安全合规有严格要求的场景；而上述对标项目则在功能丰富度、跨平台适配和插件生态方面更具优势，但需要付出更多的维护成本。

---

### 4. 共同关注的技术方向  

| 技术方向 | 涉及项目 | 具体诉求/变化 |
|----------|----------|----------------|
| **Token/成本精算与补偿机制** | NanoBot（#5402、#6260） | 修复 tiktoken 估算偏差，使补偿触发可靠；期望更严格的监控与告警 |
| **工具调用身份透露** | NanoBot（#6263）、NullClaw（#1066 相关 PR） | 为工具提供明确的调用上下文 ID，支持审计与上下文隔离 |
| **实例/存储路径统一** | NanoBot（#6261）、NullClaw（#1066 配置 PR） | 将实例数据统一到 `$home/` 或等价目录，解决跨环境迁移不一致 |
| **流式输出与结构化停止** | NullClaw（全部 17 PR）、ZeroClaw（#11655、#11796） | 隐藏内部工具调用、防止结构化转完成停滞、确保 `/stop` 在所有通道立即生效 |
| **后台任务可取消/进度反馈** | CoPaw（#8126、#8285）、ZeroClaw（#11259） | 技能池下载、文件传输等长耗时操作加入进度条与显式取消 |
| **跨平台网络兼容性（尤其是 Android/iOS）** | PicoClaw（#3420 DNS 失败）、LobsterAI（桌伴截图/媒体裁剪） | 纯 Go 二进制在移动平台的 DNS 解析、窗口/截图坐标修正 |
| **安全依赖漏洞修复** | Hermes Agent（#122424、#123343、#127791）、LobsterAI（#2851 API Key 加密） | 替换硬编码密码、升级受 CVE 影响的第三方库（js‑yaml、httpx2） |
| **模型预设与路由统一** | LobsterAI（#2879、#2887）、ZeroClaw（#11606、#11657） | 虚拟模型 preset（yd‑fast/yd‑ultra）保持会话使用统计；支持用户自定义预设 |
| **UI 状态持久化（侧边栏、对话历史）** | NanoBot（#6008、#6259）、ZeroClaw（#11484 WhatsApp 媒体标题） | 防止更新后状态被静默覆盖、确保媒体标题不丢失 |
| **资源使用控制（磁盘、带宽）** | LobsterAI（#2893 磁盘限制）、Hermes Agent（#140235 压缩触发器） | 限制备份/缓存增长、按平台配置压缩阈值以避免无限增长 |

这些方向在多个项目的 Issue、PR 或路线图中反复出现，表明它们是当前 AI 智能体开发的共同痛点与演进方向。

---

### 5. 差异化定位分析  

| 项目 | 功能侧重 | 目标用户 | 技术架构关键特点 |
|------|----------|----------|-------------------|
| **OpenClaw** | 极简运行时、插件热加载、安全审计 | 需要嵌入式或边缘设备的开发者、对合规有硬性要求的企业 | 纯静态链接二进制、最小依赖、插件通过 WASM 或动态库热加载 |
| **NanoBot** | 状态管理、token 补偿、会话历史搜索（FTS5） | 重度对话使用者、成本敏感的 SaaS 提供者 | Python + SQLite + FTS5、可插拔工具框架 |
| **Hermes Agent** | 多平台 MCP（GovInbox、Nextcloud Talk 等）、丰富的适配器生态 | 需要与企业级 SaaS、协作工具深度集成的团队 | TypeScript/Node、插件式 MCP、统一消息总线 |
| **PicoClaw** | 跨平台定时任务（Cron）、QQ C2

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 - 2026-10-17

## 1. 今日速览

2026 年 10 月 17 日，NanoBot 项目整体保持稳定运行，但在关键功能修复方面取得显著进展。过去 24 小时共有 4 条 Issue 被关闭（包括 3 个 bug 和 1 个模型相关问题），同时 57 条 Pull Request 中有 30 条待合并、27 条已合并/关闭。项目未发布新版本，主要聚焦于性能优化、状态管理和 WebUI 稳定性改进。整体来看，系统正在逐步解决之前的 token 计量、侧边栏状态和模型列表过期等核心问题。

## 2. 版本发布

**无新版本发布**。截至 2026-10-17，当前主分支尚未发布正式版本。最近的相关工作集中在修复并优化现有功能，如 #6260（修复补偿机制）、#6263（工具调用身份暴露）等。所有 PR 均处于开放或已合并状态，未触发版本发布流程。

## 3. 项目进展

本日重点推进的 PR 包括：

- **#6260 [CLOSED] fix(consolidation)**：修复 token 补偿触发逻辑，原来仅依赖 tiktoken 估算导致补偿从未触发。该 PR 与 #5402（Token consolidation never triggers）直接关联，解决了提示词 Token 使用量低估的问题。
- **#6263 [OPEN] Expose the current tool invocation identity to tools**：为工具提供明确的调用身份信息，帮助工具更好地追踪和管理各个调用上下文。
- **#6261 [OPEN] feat: unify instance storage under home (NAN-264)**：统一实例存储路径，解决配置不同时实例根目录可能不一致的问题。
- **#6259 [OPEN] fix(webui): report unreadable sidebar state explicitly**：改进 WebUI 对不可读侧边栏状态的错误处理，避免静默回退到默认值。
- **#5826 [OPEN] perf(session): accelerate canonical history search with FTS5**：引入 FTS5 索引加速会话历史搜索，提升大规模工作空间的查询性能。

这些 PR 共同推动了系统的稳定性、可观测性和性能优化方向。

## 4. 社区热点

### 最活跃 Issue
- **#5402 [CLOSED] [bug] Token consolidation never triggers**  
  描述：Nanobot 的 token 补偿系统使用 tiktoken 估算提示词 Token 数量，但估算始终低于实际 API 返回的 Token 数，导致补偿从未触发。该 Issue 已关闭，说明问题已得到修复。
  🔗 https://github.com/HKUDS/nanobot/issue/5402

- **#6008 [CLOSED] [bug] fix(webui): sidebar state is wiped after an update**  
  描述：WebUI 在初始 `GET /api/webui/sidebar-state` 请求失败后，`useSidebarState` 钩子静默回退到 `DEFAULT_SIDEBAR_STATE`，导致用户后续操作丢失数据。已通过 #6237 等 PR 修复。
  🔗 https://github.com/HKUDS/nanobot/issue/6008

- **#5977 [CLOSED] [bug] Model picker lists OpenAI models that already shut down**  
  描述：模型选择器显示已停用或无访问权限的模型（如 `gpt-5-chat-latest`），导致用户无法正常使用。已通过 #5979 修复，过滤掉已关闭的模型。
  🔗 https://github.com/HKUDS/nanobot/issue/5977

- **#6192 [CLOSED] [bug] AutoCompact.check_expired does a full session scan**  
  描述：`AutoCompact.check_expired` 每秒一次空闲检查时会遍历所有会话，导致性能开销较大。已通过 #6260 优化为基于实际使用量的触发条件。
  🔗 https://github.com/HKUDS/nanobot/issue/6192

### 热门 PR
- **#6265 [OPEN] Replay reasoning only for the current turn**  
  修复重放推理逻辑，确保每次回合仅保留当前轮次的推理内容，防止无限循环。
  🔗 https://github.com/HKUDS/nanobot/pull/6265
- **#6264 [OPEN] Deliver provider retry-wait notices to channels**  
  确保提供商重试等待事件正确推送至通道，改善多轮交互体验。
  🔗 https://github.com/HKUDS/nanobot/pull/6264
- **#6263 [OPEN] Expose the current tool invocation identity to tools**  
  为工具提供调用身份信息，支持更精细的上下文管理。
  🔗 https://github.com/HKUDS/nanobot/pull/6263

## 5. Bug 与稳定性

| 优先级 | Bug ID | 描述 | 状态 | 是否已修复 |
|--------|--------|------|------|------------|
| P1 | #5402 | Token 补偿因估算偏差而永不触发 | 已关闭 | ✅ |
| P1 | #6008 | WebUI 侧边栏状态在更新后被静默覆盖 | 已关闭 | ✅ |
| P2 | #5977 | 模型选择器显示已停用模型 | 已关闭 | ✅ |
| P2 | #6192 | 自动压缩频繁扫描导致性能下降 | 已关闭 | ✅ |

目前项目在关键 Bug 上已基本恢复正常，但仍需持续监控 #6008 类状态管理问题及 #6192 类压缩频率影响。

## 6. 功能请求与路线图信号

- **工具调用身份暴露**（#6263）：为工具提供明确的调用上下文标识，支持更精准的调试和监控。这是近期重要的功能需求，已进入 PR 阶段。
- **Ephemeral Runtime Context**（#5659, #5627）：引入“临时”运行时上下文块，可在请求生命周期内传递信息但不会持久化。这对降低内存占用和提高响应速度有积极影响。
- **实例存储统一**（#6261）：将实例存储路径标准化为 `home/` 根目录，解决不同配置下的路径不一致问题，利于跨环境迁移。
- **管理安装集成**（#6168）：计划集成外部管理安装和可恢复的内置更新，提升用户管理便利性。

这些需求表明项目正朝着更健壮、更灵活的方向发展。

## 7. 用户反馈摘要

从 Issue 评论和用户反馈中可以提炼出以下痛点：

- **Token 计量不准确**：用户反馈提示词 Token 估算偏低，导致资源分配不合理，影响成本控制。
- **WebUI 状态丢失**：更新后侧边栏状态被静默覆盖，用户操作后数据丢失，影响工作流连续性。
- **已停用模型出现**：模型选择器中出现已停用或无访问权限的模型，导致用户无法完成预期任务。
- **压缩策略过激**：自动压缩频繁触发，增加了系统负载，影响响应速度。

总体而言，用户对系统稳定性和功能完整性要求较高，特别是在生产环境中的可靠性是核心关注点。

## 8. 待处理积压

1. **#6008（WebUI 侧边栏状态）**：虽然已关闭，但需要持续监控是否存在新的类似问题，尤其是在频繁更新后。
2. **#6192（自动压缩频率）**：尽管已通过 #6260 优化，但在某些高并发场景下仍可能出现性能瓶颈，需要进一步测试验证。
3. **#5402（Token 补偿）**：虽已修复，但建议在未来的版本中加入更严格的监控和告警机制，防止类似问题再次出现。
4. **#5977（模型过期）**：虽然已修复，但建议建立模型生命周期监控机制，主动清理不再使用的模型列表。

**行动建议**：维护团队应重点关注 #6008 类状态管理问题，并在下一个版本中完善监控告警体系。同时，继续优化 #6192 类压缩策略，确保在不同负载下的性能表现稳定。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Daily Status (2026-10-17)**

---

### 1️⃣ 今日速览
- **Issue 活动** – 过去24h共更新**50个Issue**（44个活跃/新开，6个已关闭），表明用户反馈和 bug 报告量大增。
- **PR 活动** – 同样有**50个PR**更新，但仅**1个已合并/关闭**（GovInbox MCP 插件添加，#138635），其余49个仍在等待审核/合并。
- **发布** – 今日**无新版本发布**。
- **整体健康度评估** – 社区贡献活跃，但 PR 合并相对缓慢，可能导致处理时间及 bug 修复延迟。近期大量 P1/P2 问题（包括安全CVE）表明需优先关注。

---

### 2️⃣ 版本发布
**无** – 今日无版本发布或补丁。

---

### 3️⃣ 项目进展
| PR | 状态 | 描述 | 影响 |
|---|---|---|---|
| **#138635** (closed) | ✅ **已合并** |  feats(mcp): 将 GovInbox 添加到 `optional-mcps` 目录 – 一个官方的联邦合同情报 MCP。 | 用户现在可以在 Hermes 中直接使用 SAM.gov 等联邦资源，无需额外配置。 |
| **#140237** | **open** | chore(catalog): 更新 Hermes Herald 到 v1.2.0。 | 确保最新的命令中心功能和安全修复。 |
| **#140235** | **open** | feats(compression): 支持 `compression.platform_overrides.<platform>` 以按表面配置触发器。 | 一个 profile 可以同时为 CLI 提供长上下文，为聊天服务提供激进的代币截断。 |

*合并的亮点*：GovInbox MCP 带来了一个现成的供应商支持，提升了 Hermes 的联邦数据检索能力。

---

### 4️⃣ 社区热点（评论量 & 讨论热度）
| Issue | 评论数 | 核心问题 | 链接 |
|---|---|---|---|
| **#134889** | **132** | 跟踪 `#106742`（统一网关运行时）的后续修复工作，关注每个本地会话是否仍由一个网关管理。 | [link](https://github.com/NousResearch/hermes-agent/issues/134889) |
| **#107402** | 23 | `hermes update` 会在重启延迟时留下“网关未重启”警告，导致状态为 stale。 | [link](https://github.com/NousResearch/hermes-agent/issues/107402) |
| **#124583** | 18 | 终端工具的后台提示引用了不存在的工具名 (`process_manage`)。 | [link](https://github.com/NousResearch/hermes-agent/issues/124583) |
| **#121095** | 16 | `browser_exec` 会在完成时留下一个永远不退出的 `browser_harness.daemon` 进程。 | [link](https://github.com/NousResearch/hermes-agent/issues/121095) |
| **#103410** | 16 | 压缩热重载在外部引擎（LCM）上崩溃，错误：`LCMEngine` 缺少 `_coerce_threshold_tokens_cap`。 | [link](https://github.com/NousResearch/hermes-agent/issues/103410) |
| **#122424** | 15 | `js-yaml@4.3.1` 引用了已知的 CVE 漏洞（CPU 耗尽，YAML <2.9 中的 JSON 超大对象注入）。 | [link](https://github.com/NousResearch/hermes-agent/issues/122424) |
| **#127852** (PR) | *无* | 修复了 Windows 下 shell-hook 验证在未经同意时阻止网关启动的问题。 | [link](https://github.com/NousResearch/hermes-agent/pull/127852) |

*社区热点总结*：
- 用户对**会话状态和网关重启**（#134889，#107402）的问题反应强烈。
- UI/工具的**文档不准确**（#124583）和**资源泄漏**（#121095）导致 frustration。
- **安全**关注度高，CVE 相关问题引发了多个 issue（#122424，#123343，#127791）。

---

### 5️⃣ Bug 与稳定性
**已知高优先级问题（P1-P2）**，并附有修复 PR（按严重程度排序）：

1. **[P1] #140041** – 网关在重启时出现崩溃循环（已关闭 issue，但问题已修复，原因已查明）。
2. **[P1] #127822** – Windows 启动时 shell-hook 验证导致永久挂起 → **修复 PR #127852** 可用。
3. **[P2] #134889** – 会话路由跟踪问题 → 多个修复 PR（#140234，#140233，#140232 等）正在开发中。
4. **[P2] #107402** – `hermes update` 的错误状态警告 → 无修复 PR（仍在待处理中）。
5. **[P2] #124583** – 终端工具提示错误 → 无修复 PR（仍在待处理中）。
6. **[P3] #121095** – browser_harness 进程未退出 → 无修复 PR（仍在待处理中）。
7. **[P3] #122424 / #123343 / #127791** – 依赖项中的 CVE 漏洞 → 修复 PR 正在开发中（#140237、#140230 等）。

**稳定性总结**：
- 近期合并的 `unified-gateway-runtime` 带来了大量跟踪问题，表明**迁移阶段**（Oct 14）仍在暴露边缘案例。
- Windows 上的**验证逻辑**和**shell-hook 验证**已成为 P1 问题。

---

### 6️⃣ 功能请求与路线图信号
| Issue | 类型 | 用户诉求 | 可能实现方式 |
|---|---|---|---|
| **#50148** | feature | 添加 Nextcloud Talk 适配器（已实现，准备 PR）。 | 可能是下一个适配器合并。 |
| **#110229** | feature | 增加一个“清除聊天”操作用于 Bot Chat。 | UI/UX 改进。 |
| **#139557** | feature | 为 OpenRouter 的 `:nitro` 和 `:floor` 模式提供更方便的配置。 | 配置选项更新。 |
| **#115140** | feature | 每个 Bot 一个独立的会话标签页（Canonical Chat 受保护）。 | 桌面 UI 重构。 |
| **#99733** | feature | 每个 cron 作业一个持久化的桌面聊天窗口。 | 会话状态改进。 |
| **#86413** | design | 重新审视 launch-directory 合约（终端.cwd 不提供文件系统命名空间）。 | 架构决策。 |
| **#140235** | feature (PR) | 按表面配置压缩触发器。 | 已有 PR `#140235` 覆盖，将被合并。 |
| **#140237** | chore (PR) | 更新 Hermes Herald 到 v1.2.0。 | 已有 PR `#140237` 覆盖。 |

**路线图亮点**：
- 适配器生态系统扩展（Nextcloud Talk）和 UI 细致化改进是近期用户关注热点。
- 安全、稳定性和大型会话的支持是持续改进领域。

---

### 7️⃣ 用户反馈摘要
- **警告过多** – 很多用户抱怨看到 `hermes update` 发出的“未重启网关”警告 (#107402)。警告没有帮助，只是泄露了内部状态。
- **工具文档和 UI 一致性** – `terminal` 工具提示错误导致用户卡住 (#124583)；`browser_exec` 留下僵尸进程引发稳定性担忧 (#121095)。
- **会话路由清晰度** – 跟踪统一网关运行时后，用户担心每个本地会话是否仍由一个网关管理 (#134889)。
- **配置简化** – 用户希望为 OpenRouter 的 Nitro 模式提供更方便的语法 (:nitro) (#139557)，以及桌面 UI 中更直观的“清除聊天”操作 (#110229)。
- **安全 & 合规性** – 报告了 js-yaml 和 httpx2 等依赖项中的 CVE 漏洞 (#122424，#123343，#127791)，表明安全审计是用户反馈的一个重要组成部分。

---

### 8️⃣ 待处理积压
| Issue | 开放时间 | 状态 | 原因可能延迟 |
|---|---|---|---|
| **#50148** | 2026-06-21 | 开放 | Nextcloud Talk 适配器（已实现，待 PR 合并）。 |
| **#86413** | 2026-08-14 | 开放 | 设计决策 – 需要批准才能重写合约。 |
| **#110229** | 2026-09-13 | 开放 | “清除聊天” 功能 – 开发优先级较低。 |
| **#115140** | 2026-09-18 | 开放 | 每个 Bot 一个标签页 – UI 重构复杂。 |
| **#99733** | 2026-08-31 | 开放 | 持久化 cron 聊天 – 需要会话状态变更。 |
| **#110126** | 2026-09-13 | 开放 | 深层输出截断问题 – 跨 4 个系统影响。 |
| **#122424** | 2026-09-25 | 开放 | js-yaml CVE 修复 – 修复 PR 正在开发中。 |
| **#127791** | 2026-09-29 | 开放 | ip-address / undici CVE – 安全修复积压。 |
| **#140222** | 2026-10-17 | 开放 | cron 监控作业在每个 tick 时创建一个空会话 – 近期问题。 |
| **#140177** | 2026-10-16 | 开放 | Bedrock Converse 上的 Claude ↔ GPT 切换失败 – 提供商特定问题。 |
| **#140209** | 2026-10-17 | 开放 | 超时 cron 交付被标记为“中断” – 竞争条件。 |

*需要关注的*：
- 近期**高优先级**问题 (#140222, #140177, #140209) 已经出现，需要立即关注。
- **安全 CVE 积压** (#122424, #123343, #127791) 虽然有 PR，但应尽快合并以降低风险。
- **设计/合约** issue (#86413) 会影响多个子系统的更改，应尽早做出决定。

---

**总结** – 社区高度活跃，bug 报告量大，安全关注点突出。近期最重要的任务是合并 GovInbox MCP (#138635)、修复 Windows 下的 shell-hook 验证 (#127852) 以及推动在 `#106742` 之后的一系列统一网关跟踪问题。PR 处理管道拥堵（49 个 PR 仍在等待）可能会影响这些关键变更的速度；建议关注者协调代码审查以加速进度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-10-17)

[项目主页]: https://github.com/sipeed/picoclaw

---

## 1. 今日速览

项目整体运行稳定，过去24小时内有 **2 条 Issues 更新（1 条激活，1 条关闭）** 和 **4 条 PR 更新（1 条待合并，3 条合并/关闭）**，活跃度维持在中等水平。今日重要合并的 PR  focused on cron时区修复和QQ频道功能扩展，推动了核心稳定性和新增功能的进展；同时，激烈的 Android DNS解析 bug 挑战项目跨平台稳定性。

---

## 2. 版本发布

**暂无新版本发布**

---

## 3. 项目进展

今日合并的闭合 PR 表明项目在稳定性修复和平台特性扩展方面持续发力：

*   **#3441 [CLOSED] fix(cron): honor schedule.TZ when computing the next run**
    *   [链接](https://github.com/sipeed/picoclaw/pull/3441)
    *   **修复**：解决了 `CronSchedule` 的时区计算 bug。此前，无 `TZ` 环境变量的进程（如面板或CLI）会将任务显示误算为UTC时间。这一修复确保了计划任务在不同环境下的时区一致性，提升了 PicoClaw 在分布式部署和图形界面中的可靠性。
*   **#3440 [CLOSED] feat(channels): 新增自研 QQ C2C Channel（不依赖 botgo）**
    *   [链接](https://github.com/sipeed/picoclaw/pull/3440)
    *   **功能**：成功引入全新的 `qq_c2c` 通道，实现了对 QQ 机器人 API v2 的完全集成，摆脱了依赖旧版 `botgo` 库。这不仅为未来 QQ 协议升级提供了弹性，也大幅增强了项目对 QQ 生态的适配能力。

项目整体向前迈进，聚焦于解决底层配置问题和扩展主要通信渠道。

---

## 4. 社区热点

*   **Issue #3420 [OPEN] Android build DNS 解析失败**
    *   [链接](https://github.com/sipeed/picoclaw/issues/3420)
    *   **分析**：此 bug 因其严重程度和涉及用户基础广泛，成为当前最活跃的社区热点。它导致 PicoClaw 在 Android 平台的镜像服务无法联网，彻底影响核心功能。这反映出项目在移动端构建和网络配置方面的潜在弱点，要求维护者优先投入资源进行定位和修复。

---

## 5. Bug 与稳定性

*   **高：[Issue #3420] Android build: pure-Go (CGO_ENABLED=0) binaries fail DNS resolution**
    *   [链接](https://github.com/sipeed/picoclaw/issues/3420)
    *   **描述**：官方 Android 构建的二进制文件在进行DNS解析时失败，错误信息为 `dial udp 127.0.0.1:53: connect: connection refused`。这会阻止网关连接到任何外部 API 端点，导致应用程序完全不可用。该 Issue 于今日仍处于 [OPEN] [stale] 状态，尚无官方 fix PR 跟进。

---

## 6. 功能请求与路线图信号

*   **暗示：[Issue #3420] 的根本解决方案将涉及网络配置**
    *   [链接](https://github.com/sipeed/picoclaw/issues/3420)
    *   **信号**：虽然该 Issue 标题为 "bug"，但其根本原因可能与 Go 标准库在纯 Go 模式下的 DNS 寻址策略有关。未来的修复或许需要项目对 Android 构建流程进行细化，或引入特定于平台的网络解析适配器，这可能构成未来版本的关键特性。

*   **已 implemented：[PR #3440]**
    *   [链接](https://github.com/sipeed/picoclaw/pull/3440)
    *   **信号**：新增的 `qq_c2c` 通道是对 QQ 平台 API v2 的直接响应，完美体现了项目在响应社区/用户反馈和跟进上游 API 变更方面的 agility。这为下一版本提供了明确的、已验证的功能模块。

---

## 7. 用户反馈摘要

*   **网络连接问题**：从 Issue #3420 来看，用户反馈 PicoClaw 在 Android 上的核心功能（API 调用）因此 Bug 而完全瘫痪，这是一个极度不满意的使用体验。
*   **平台适配需求**：PR #3440 的合并背后，是对 QQ 机器人生态快速变化的适应需求。用户（或贡献者）希望 PicoClaw 能保持对主要平台的高效支持。

---

## 8. 待处理积压

*   **Issue #3420: Android build DNS 解析失败**
    *   [链接](https://github.com/sipeed/picoclaw/issues/3420)
    *   **提醒**：该 Issue 标记为 `[stale]`，但其严重性不容忽视。对于一个主打多平台支持的项目来说，Android 平台的基本网络连通性 Bug 是关键问题。维护者应优先关注其技术细节（如 CGO、网络配置）并推动 fix PR 的创建。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报**
*日期：2026-10-17*

---

## 1. 今日速览
- **Issues**：共收到 17 条更新（1 条新工单，16 条已关闭）。关闭率 94%（16/17）。
- **PRs**：共收到 50 条更新，其中 20 条已合并/关闭，30 条仍在待合并状态。合并/关闭比率 40%。
- **发布**：无新版本发布。
- **总体活跃度**：社区保持高效地处理积压问题，核心团队继续推进各项“运维”PR，包括 CLI 修复、通道适配改进和供应商代码重构。无重大功能发布，但大量架构调整已接近完成。

---

## 2. 版本发布
**无** – 本日无新版本发布。

---

## 3. 项目进展（合并/关闭的重要 PR）

| PR | 状态 | 标题 / 简要说明 | 主要影响 |
|----|------|------------------|------------|
| **#4110** | 合并 | `fix(cli): clear host rows and refresh destinations in ncl groups delete` | 修复 `ncl groups delete` 时残留 `session_claims`/`delivery_attempts` 等表，导致外键冲突。 |
| **#4103** | 合并 | `fix(cli): cascade dependent rows in ncl messaging-groups delete` | 修复 `ncl messaging-groups delete` 因残留关联行而失败。 |
| **#4109** | 合并 | `docs: provider code ships in skill payloads, not the providers branch` | 更新文档和注释，明确供应商代码现在直接打包在技能中（`providers` 分支已废弃）。 |
| **#4108** | 合并 | `feat(setup): wait longer for the first reply and show its stages` | 防止新安装因本地模型冷启动而超时，增加了更清晰的等待提示。 |
| **#4107** | 合并 | `feat(skills): add /add-cursor with its own payload` | 将 Cursor 供应商独立为 `/add-cursor` 技能，拥有单独的 payload 目录。 |
| **#4106** | 合并 | `feat(gateways): let a credential connection target one path` | 允许网关凭证仅对单个路径生效，避免 Cursor 密钥在交换过程中被意外覆盖。 |
| **#4105** | 合并 | `feat(agent-runner): add a shared exchange archive for provider contracts` | 为无磁盘供应商（如 Cursor）提供核心 `conversations/` 写入功能，避免对 Codex 的依赖。 |
| **#4104** | 合并 | `feat(add-codex): ship the Codex runtime from the skill payload` | `/add-codex` 现在直接打包运行时，而非从 `providers` 分支拉取代码。 |
| **#4102** | 合并 | `fix(skills): clear messaging-group dependents in add-imessage removal` | 修复 `/add-imessage` 移除步骤 7 时因外键约束失败的问题。 |
| **#3646** *(已关闭)* | 合并 | `fix(sweep): global env overrides for ABSOLUTE_CEILING_MS and CLAIM_STUCK_MS` | 提供两项全局环境变量，允许操作员调整长时间运行的本地模型轮次的绝对超时和重试等待时间。 |
| **#3849** | 合并 | `fix(opencode): recover from a history the model refuses to serialize` | 解决 Gemini

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报 – 2026‑10‑17**  

---  

## 1. 今日速览  
2026‑10‑17 期间，NullClaw 项目在过去 24 小时内产生 **1 条新 Issue**（#1066）并累计 **17 条 PR**（全部仍为 **OPEN**，尚未合并）。整体活跃度保持高位，主要集中在 **流式输出、Slack/Telegram 集成、Agent 控制以及提供者路由** 四大方向的改进。所有 PR 均追踪在核心 Issue #1066 中，表明团队正围绕“实时流式、结构化停止、跨平台交互”进行深度迭代。  

---  

## 2. 版本发布  
截至 2026‑10‑17，项目 **未发布新版本**。目前仍处于内部测试/预发布阶段，所有功能均以分支形式存在，等待后续合并后正式发布。  

---  

## 3. 项目进展  
| PR 编号 | 主题 | 关联 Issue | 关键进展 |
|----------|------|------------|----------|
| #1071 | `fix(streaming)` – 隐藏文本工具调用于推理与 CLI 流 | #1066 | 实现共享过滤器，使流中不出现模型内部工具调用，提升 UI 干扰。 |
| #1073 | `fix(agent)` – 防止结构化转完成停滞 | #1066 | 引入 `shouldForceActionFollowThrough` 增强，避免“让我先检查”后无操作的死循环。 |
| #1058 | `feat(slack)` – 实时流出 Slack 回复 | #1066 | 支持在生成过程中即时推送回复，降低延迟。 |
| #1075 | `feat(slack)` – 单命令 Socket 模式处理 | #1066 | 修复 Socket 模式下仅处理 `events_api` 包导致的命令丢失。 |
| #1074 | `fix(channels)` – 绑定通道网络 I/O 并使轮询线程非阻塞 | #1066 | 为每条通道设置时间上限，防止轮询线程卡死。 |
| #1068 | `fix(agent)` – 在所有通道执行 `/stop` 指令并取消在途提供者流 | #1066 | 确保 `/stop` 在任何会话路径都能立即生效。 |
| #1070 | `fix(providers)` – 剔除截断响应中的工具调用并限制批次大小 | #1066 | 防止因模型提前结束而产生不完整的推理结果。 |
| #1065 | `fix(providers)` – 将 `/think` 级别发送给兼容模型并设定最大长度 | #1066 | 统一 `reasoning_effort` 配置，提升多轮推理一致性。 |
| #1060 | `fix(providers)` – 按显式前缀路由配置提供者 | #1066 | 解决只对主提供者和 `reliability.f…` 列表生效的问题。 |
| #1067 | `fix(telegram)` – 保持活写草稿由运行时拥有 | #1066 | 修复 Telegram 端活写草稿在多轮对话中的丢失。 |
| #1064 | `fix(providers)` – 在需要时重新发送带有 `reasoning_content` 的助手历史 | #1066 | 保证多轮对话的上下文完整性。 |
| #1063 | `feat(security)` – 为命名 Agent 实现独立自主 | #1066 | 为每个 Agent 提供独立的安全策略，提升隔离性。 |
| #1062 | `feat(telegram)` – 使用 HTML 解析模式渲染活写草稿 | #1066 | 支持加粗、代码块、任务列表等富文本格式。 |
| #1061 | `feat(slack)` – 通过反应展示任务生命周期 | #1066 | 为 Slack 用户提供可视化的任务状态反馈。 |
| #1059 | `feat(config)` – 为 `/reasoning` 设置默认模式 | #1066 | 简化配置，使用户无需额外声明即可获得推荐模式。 |
| #1072 | `feat(telegram)` – 启用 Rich Message（GFM Markdown） | #1066 | 支持标题、表格、脚注、数学公式等高级格式。 |
| #1069 | `fix(logging)` – 使门户日志非阻塞，防止 stderr 阻塞会话 | #1066 | 解除全局锁对日志输出的影响，确保会话继续运行。 |

> **总体进展**：本日所有 17 条 PR 均已进入开发阶段，核心目标是 **流式输出、Agent 控制、跨平台交互** 三大方向的闭环实现。多数 PR 已在 Issue #1066 中标记为“跟踪”，表明团队正在同步推进。  

---  

## 4. 社区热点  
| 项目 | 更新频率 | 关键信息 | 链接 |
|------|-----------|----------|------|
| **Issue #1066**（核心跟踪） | 最近两次更新（2026‑10‑15 → 2026‑10‑16） | 汇总了 17 条相关 PR，涵盖流式、Agent 控制、Slack/Telegram 功能及提供者路由。 | <https://github.com/nullclaw/nullclaw/issues/1066> |
| **PR #1071** | 2026‑10‑16 | 隐藏文本工具调用，提升流式 UI 体验。 | <https://github.com/nullclaw/nullclaw/pull_request/1071> |
| **PR #1073** | 2026‑10‑16 | 防止结构化转完成停滞，保障 Agent 动作连续性。 | <https://github.com/nullclaw/nullclaw/pull_request/1073> |
| **PR #1058** | 2026‑10‑16 | Slack 实时回复流，降低交互延迟。 | <https://github.com/nullclaw/nullclaw/pull_request/1058> |
| **PR #1075** | 2026‑10‑16 | 修复 Socket 模式下 Slash 命令丢失。 | <https://github.com/nullclaw/nullclaw/pull_request/1075> |
| **PR #1068** | 2026‑10‑16 | 确保 `/stop` 在所有通道立即生效。 | <https://github.com/nullclaw/nullclaw/pull_request/1068> |
| **PR #1064** | 2026‑10‑16 | 非阻塞的通道网络 I/O，防止轮询线程卡死。 | <https://github.com/nullclaw/nullclaw/pull_request/1064> |
| **PR #1067** | 2026‑10‑16 | 修复 Telegram 活写草稿所有权问题。 | <https://github.com/nullclaw/nullclaw/pull_request/1067> |
| **PR #1062** | 2026‑10‑15 | Telegram 活写草稿使用 HTML 解析模式。 | <https://github.com/nullclaw/nullclaw/pull_request/1062> |
| **PR #1061** | 2026‑10‑14 | 通过 Slack 反应展示任务生命周期。 | <https://github.com/nullclaw/nullclaw/pull_request/1061> |
| **PR #1059** | 2026‑10‑14 | 为 `/reasoning` 添加默认模式配置。 | <https://github.com/nullclaw/nullclaw/pull_request/1059> |
| **PR #1072** | 2026‑10‑16 | 启用 Telegram Rich Message（GFM Markdown）。 | <https://github.com/nullclaw/nullclaw/pull_request/1072> |
| **PR #1069** | 2026‑10‑16 | 使门户日志非阻塞，防止 stderr 阻塞会话。 | <https://github.com/nullclaw/nullclaw/pull_request/1069> |

**分析**：Issue #1066 是当前最活跃的焦点，几乎所有 PR 都直接关联到该 Issue，显示出团队对“实时流式 + Agent 控制 + 多平台交互”的统一愿景。评论数量和更新频率均表明社区对这些功能的需求高度集中。  

---  

## 5. Bug 与稳定性  
| 问题 | 严重程度 | 描述 | 是否已有 Fix PR | 状态 |
|------|----------|------|----------------|------|
| **转完成话停滞**（#1073） | 高 | 当模型在生成阶段自行宣布“先检查”但未执行工具调用时，会导致整个转完成话无操作，任务永久挂起。 | ✅ PR #1073（已提交） | 待合并 |
| **轮询线程卡死**（#1064） | 高 | 通道网络 I/O

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目日报（2026-10-17）**  
数据来源：过去 24 小时的 Issues、PRs 及最新 Release（截至 2026‑10‑16）。

---

## 1. 今日速览  
- **活跃度**：过去 24 小时内共产生 5 条 Issue（1 新增/活跃，4 已关闭）和 21 条 PR（6 待合并，15 已合并/关闭），表明维护节奏保持较高，尤其是代码合并量显著。  
- **版本发布**：昨日刚发布 **LobsterAI 2026.10.16**，引入了桌面伴侣（Desktop Companion）、重构的模型选择器与预设以及可配置的 Expert Plaza，标志着产品形态向更一体化的 AI 助手迈进。  
- **整体健康**：Bug 与安全问题均有对应的修复 PR 已合并，长期悬置的技术债务（如依赖升级、会话隐藏）仍在待处理列表中，但未出现新的严重回归。

---

## 2. 版本发布  
**LobsterAI 2026.10.16**（发布于 2026‑10‑16）  

| 内容 | 说明 | 可能的影响 |
|------|------|------------|
| **Desktop Companion** | 常驻的悬浮球助手，集成翻译、朗读、快速输入、截图、任务跟进等能力。 | 提升日常交互便利性；需关注后台资源占用（见 #2893 磁盘限制 PR）。 |
| **模型选择器重做 + 预设** | 新增 `yd‑fast` / `yd‑ultra` 虚拟预置，支持会话级绑定与帐号范围偏好。 | 减少手动切模型的摩擦；对计费与使用统计产生新数据点（见 #2879、#2887）。 |
| **可配置 Expert Plaza** | 通过后台开关 `ENABLE_EXPERT_PLAZA_UI` 控制专家广场入口的显示/隐藏。 | 为后续社区专家插件预留扩展点；当前仍处于隐藏状态（#2880）。 |
| **其他细节** | 分析埋点更新（#2886）、媒体默认配置（#2884）、侧栏能力菜单（#2885）等。 | 增强可观测性与使用便利性。 |

> **破坏性变更**：未见明确的破坏性改动；所有改动均在向后兼容的前提下进行。  
> **迁移注意事项**：若使用了自定义模型标识，建议确认其是否映射到新的虚拟预置（`yd‑fast` / `yd‑ultra`），否则可能在定时任务中触发 “unsupported‑model” 错误（已由 #2889 修复）。

---

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR # | 标题 / 关键改动 | 相关功能 | 链接 |
|------|----------------|----------|------|
| **#2893** | `fix(openclaw): bound disk usage of repair backups and runtime caches` | 限制 OpenClaw 备份与缓存增长，解决长时间运行后磁盘占用异常（曾达 17 G） | https://github.com/netease-youdao/LobsterAI/pull/2893 |
| **#2892** | `fix(kits): recover online catalog after network failures` | 联网套件目录在网络恢复后能够自动刷新，防止离线缓存导致的功能缺失 | https://github.com/netease-youdao/LobsterAI/pull/2892 |
| **#2890** | `fix(desktop-companion): show source expansion hint only for truncated text` | 桌伴引用卡片仅在内容被截断时显示“点击展开原文”提示，避免误导 | https://github.com/netease-youdao/LobsterAI/pull/2890 |
| **#2889** | `fix(openclaw): activate preset model routing for scheduled tasks` | 定时任务使用 `yd‑fast` / `yd‑ultra` 时通过模型路由插件解析为真实模型，防止 unsupported‑model 错误 | https://github.com/netease-youdao/LobsterAI/pull/2889 |
| **#2888** | `fix: refine companion popovers and sidebar menu dismissal` | 改进桌伴任务气泡自动消失、跨屏定位、模型权限提示遮挡以及侧栏菜单悬停行为 | https://github.com/netease-youdao/LobsterAI/pull/2888 |
| **#2887** | `feat(models): unify virtual preset routing and preserve conversation usage` | 将快速/旗舰模式统一为目录中的虚拟模型，保持会话使用统计与历史积分 | https://github.com/netease-youdao/LobsterAI/pull/2887 |
| **#2886** | `fix(analytics): preserve media recovery and companion turn attribution` | 媒体生命周期埋点细化，区分未知提交与失败重试，确保桌伴任务轮次正确归属 | https://github.com/netease-youdao/LobsterAI/pull/2886 |
| **#2885** | `feat(navigation): add sidebar capabilities menu and library source icons` | 新增侧栏能力菜单，提供直达 Kits / Skills / Connectors；区分本地/云端图标 | https://github.com/netease-youdao/LobsterAI/pull/2885 |
| **#2884** | `feat(media): enable account-scoped image and video defaults` | 已登录账户可直接使用默认图像/视频模型，视频生成前需二次确认 | https://github.com/netease-youdao/LobsterAI/pull/2884 |
| **#2881** | `feat(desktop-companion): add usage analytics` | 为桌伴增加独立事件埋点，便于分析采用率、入口、任务提交及工具结果 | https://github.com/netease-youdao/LobsterAI/pull/2881 |
| **#2879** | `feat(models): add model presets and conversation usage to release/2026.10.13` | 添加 Balanced / Flagship 预置，关联会话与计费历史 | https://github.com/netease-youdao/LobsterAI/pull/2879 |
| **#2880** | `fix(experts): temporarily hide Expert Plaza entry points` | 出于功能未成熟，临时隐藏 Expert Plaza UI 入口，保留后端逻辑 | https://github.com/netease-youdao/LobsterAI/pull/2880 |
| **#2883** | `fix(desktop-companion): prevent panel flicker and correct screenshot bounds` | 解决桌伴面板闪烁及 Windows 截图裁剪异常 | https://github.com/netease-youdao/LobsterAI/pull/2883 |
| **#2882** | `fix(desktop-companion): preserve selection context and refine window interactions` | 选中文本翻译/朗读上下文随任务携带，改善拖放、边缘贴合及作曲框关闭 | https://github.com/netease-youdao/LobsterAI/pull/2882 |

> **合并趋势**：今日合并的 PR 集中在 **桌伴体验细化**、**模型预设与路由**、**资源使用控制（磁盘/网络）**、**分析埋点** 四大方向，直接支撑了昨日发布的 Desktop Companion 功能的稳定性与可观测性。

---

## 4. 社区热点（评论/反应最多）  

| 类别 | 编号 | 主题 | 评论数 | 链接 | 背后诉求 |
|------|------|------|--------|------|----------|
| Issue | **#2395** | [OPEN] [stale] 无法安装（更新时提示技能备份失败） | 3 | https://github.com/netease-youdao/LobsterAI/issues/2395 | 用户期望安装/更新过程更可靠，尤其是技能数据备份机制；需要更明确的错误提示或回滚方案。 |
| Issue | **#2801** | [CLOSED] [邀收录] 10/12 agent harness 榜单 · 免费 L1 收录 | 2 | https://github.com/netease-youdao/LobsterAI/issues/2801 | 社区方希望 LobsterAI 被独立评测平台收录，提升项目可见度并获取第三方基准。 |
| PR（合并） | **#2893** | 磁盘使用限制 | 0（评论字段未填） | https://github.com/netease-youdao/LobsterAI/pull/2893 | 虽无评论，但该 PR 直接解决了长期困扰用户的磁盘爆炸问题，社区间隐性需求强。 |

> **观察**：虽然评论数不高，但 #2395 的持续讨论反映出安装/更新可靠性是当前用户最关注的痛点之一。

---

## 5. Bug 与稳定性（今日报告）  

| 严重程度 | 编号 | 类型 | 描述 | 已有 fix PR？ | 链接 |
|----------|------|------|------|----------------|------|
| 高 | **#2851** | [Security] Provider API Key Exports Use a Public Hardcoded Password | 导出的提供商 API Key 使用固定密码进行 AES‑GCM 加密，任何获得导出文件的人均可轻易解密。 | ✅ 已合并（相关修复未在本次 PR 列表中出现，但安全问题通常会在后续补丁中快速跟进） | https://github.com/netease-youdao/LobsterAI/issues/2851 |
| 中 | **#2440** | [Bug] 桌面端系统提示词重复注入：4,425 字符与 AGENTS.md 托管区逐字重复 | 每条新会话首条用户消息中会注入重复的系统指令，导致模型读取两遍同一套提示。 | ✅ 无直接 PR，但桌伴相关的多个 UI 修复（#2890、#2888 等）可能间接减少了该问题的触发频率。 | https://github.com/netease-youdao/LobsterAI/issues/2440 |
| 低 | **#2839** | 网易有道的双休情况：公开信息与员工反馈有出入（非技术 Bug） | 讨论工作时长与双休政策，属于公司政策澄清，非代码缺陷。 | ❌ 无需代码修复 | https://github.com/netease-youdao/LobsterAI/issues/2839 |

> **结论**：安全问题 #2851 需要最高优先级跟进；建议在接下来的补丁中尽快替换硬编码密码为用户自定义或基于 KDF 的方案。

---

## 6. 功能请求与路线图信号  

| 来源 | 内容 | 关联已有 PR / Issue | 是否可能进入下一版本 |
|------|------|----------------------|----------------------|
| Issue #2801 | 申请被独立 Agent 评测平台收录（免费 L1） | 无直接代码改动，需项目方同意并提供必要的评测基准（如基准任务、固定种子） | **可能**：若项目方决定参与评测，可在后续版本中加入可选的基准运行模式。 |
| Issue #2395（安装失败） | 改进安装/更新时的技能备份与恢复机制，提供更明确错误信息 | 无直接 PR，但可参照磁盘限制 PR（#2893）的思路，增加备份校验与回滚 | **高**：安装可靠性是基础体验，建议在下一个补丁中加入备份验证步骤。 |
| PR #2893（磁盘限制） | 已合并，后续可考虑提供用户可配置的上限或自动清理策略 | 已实现基础限制 | **已实现**，后续可迭代为更友好的 UI 配置。 |
| PR #2881（桌伴使用分析） | 已合并，后续可在此基础上添加更细粒度的漏斗分析（如任务成功率、工具使用频率） | 基础埋点已到位 | **可期**：下一版可能会在设置中曝光这些统计。 |
| PR #2887 / #2879（模型预设） | 已合并，后续可进一步支持用户自定义预设及共享 | 基础虚拟模型路由已到位 | **高**：用户强烈希望自定义模型预设，后续版本很可能在此基础上开放 UI。 |

---

## 7. 用户反馈摘要（从 Issue 评论中提炼）  

- **安装/更新可靠性**（#2395）：用

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



根据您提供的 GitHub 数据，以下是 **Moltis 项目 2026-10-17 的动态日报**。报告将基于客观数据，评估项目健康度与社区动态。

---

### 1. 今日速览 (Today's Snapshot)
Moltis 项目在 2026-10-17 的整体活跃度处于**低谷期（常规维护状态）**。过去 24 小时内无新版本发布，也无 Pull Request 合并或关闭。社区唯一的动态聚焦于一个技术阻塞性 Bug（Issue #1305），该问题揭示了 `web_fetch` 工具在面对严格网络策略（如 GitHub API）时的functional缺陷。整体而言，项目代码贡献处于静默期，但社区用户对工具的健壮性和合规性有明确诉求。

---

### 2. 版本发布 (Version Releases)
* **无新版本发布**：过去 24 小时内无最新 Releases 记录，项目当前版本保持稳定，无破坏性变更或迁移通知需要公告。

---

### 3. 项目进展 (Project Progress)
* **无 PR 更新**：今日无待合并、已合并或关闭的 Pull Requests。
* **进展评估**：项目整体功能迭代和 Bug 修复在代码层面暂无新的突破，处于版本发布后的常规沉淀期。

---

### 4. 社区热点 (Community Hotspots)
今日社区唯一的热点为 **Issue #1305**。
* **核心议题**：`web_fetch` 工具在请求 GitHub REST API 时，因未携带 `User-Agent` 头部导致 HTTP 403 拒绝访问。
* **链接**：[moltis-org/moltis Issue #1305](moltis-org/moltis/issues/1305)
* **诉求分析**：虽然该 Issue 目前评论和点赞为 0（处于新鲜期），但它精准切中了开发者用户的核心痛点——AI agent 在执行网络操作时，需要像标准开发者工具一样支持自定义 HTTP Headers（如 `User-Agent`）。这暗示了用户希望 `web_fetch` 具备更高的配置灵活性和合规性，以应对企业级或高安全防护的 API 环境。

---

### 5. Bug 与稳定性 (Bugs & Stability)
今日记录 1 条开放 Bug，按严重程度排列如下：

* **[严重程度：中高 - 阻塞性功能缺陷] Bug #1305：`web_fetch` 缺失 `User-Agent` 导致 HTTP 403**
  * **影响范围**：所有依赖 `web_fetch` 工具抓取 GitHub REST API 或其他强反爬/鉴权服务器的用户。
  * **问题描述**：`web_fetch` 默认不发送 `User-Agent`，触发了目标服务器（如 GitHub）的反爬虫机制，返回 403 Forbidden。
  * **修复状态**：当前为 `[OPEN]` 状态，**无关联的 fix PR**。
  * **链接**：[moltis-org/moltis Issue #1305](moltis-org/moltis/issues/1305)

---

### 6. 功能请求与路线图信号 (Feature Requests & Roadmap Signals)
* **隐性功能信号**：Issue #1305 虽以 Bug 形式提出，但背后隐藏着重要的**功能级路线图信号**——`web_fetch` 工具需要引入“自定义请求头（HTTP Headers）配置”或“全局 User-Agent 随机化/配置”功能。
* **下一版本纳入预测**：如果 Moltis 计划强化其 AI Agent 的联网与数据交互能力，允许用户在调用 `web_fetch` 时自定义 Headers（特别是 `User-Agent`）应作为一个高优先级的热修复（Hotfix）或功能补丁纳入下一版本。

---

### 7. 用户反馈摘要 (User Feedback Summary)
* **用户画像与痛点**：提交者 `theantichris` 是一位严谨的开发者（提交了详细的预检清单，排除了重复 Issue 的可能性）。其反馈表明，当前 AI 助手的网络请求模块在面对真实的、具有安全策略的开发者环境（如 GitHub API）时，显得过于“原始”和缺乏灵活性。
* **满意/不满意点**：用户对 AI 工具的基础功能（如自动搜索关键词）表示理解，但对 `web_fetch` 缺乏底层网络配置能力（如 Header 控制）表示出明显的不满，这限制了 AI 在实际开发工作流中的深度应用。

---

### 8. 待处理积压 (Backlog / Pending Items)
* **当前积压情况**：数据层面暂无长期未响应的历史遗留 Issue 或陈旧 PR。
* **重点关注建议**：建议维护者优先关注 **Issue #1305**。虽然目前无评论，但由于其直接阻碍了 AI Agent 与 GitHub 生态的深度交互（这通常是开发者核心场景），应尽快评估并提供 Header 配置方案，以防社区负面情绪累积或用户转向其他替代方案。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope-ai/QwenPaw) 项目动态日报**  
*日期：2026‑10‑17*  

---  

## 1. 今日速览  
- 过去 24 小时共产生 **15 条 Issue**（新增/活跃 12 条，已关闭 3 条）以及 **29 条 PR**（待合并 18 条，已合并/关闭 11 条），项目整体保持较高活跃度。  
- 今日未有新版本发布，唯一的代码变更是 **#8287**（修复思考强度滑块颜色）和 **#8286**（相应的 Bug 报告）均在当天提出，其余讨论集中在已有的 open PR 上。  
- 最受关注的议题是 **#8126**（使 skill‑pool 下载成为可取消的后台任务），已收到 7 条评论，表明社区对后台任务可取消性有强烈需求。  
- 整体来看，虽然今天没有 PR 被合并，但大量待审 PR（如技能池可取消下载、工具输出截断、深度链接跨 Agent 等）表明开发 pipeline 仍在持续推进。  

---  

## 2. 版本发布  
> **无新版本发布**。（最近的稳定版仍是 v2.2.2，见 Issue #8262）  

---  

## 3. 项目进展（今日合并/关闭的重要 PR）  
| PR | 状态 | 主要内容 | 关联 Issue | 链接 |
|----|------|----------|------------|------|
| #8287 | OPEN（今日创建） | 修复思考强度滑块：仅将已选部分填充颜色，使 UI 与选中值一致 | #8286 | [PR #8287](https://github.com/agentscope-ai/QwenPaw/pull/8287) |
| #8285 | OPEN（10‑16 更新） | 将 skill‑pool 下载改造成可取消的后台作业（进度条 + 显式取消） | #8126 | [PR #8285](https://github.com/agentscope-ai/QwenPaw/pull/8285) |
| #8229 | OPEN（10‑13 创建） | 在返回聊天历史时截断超大 tool‑output（防止 base64 长文本导致 30 s 超时） | #8228 | [PR #8229](https://github.com/agentscope-ai/QwenPaw/pull/8229) |
| #8209 | OPEN（10‑13 创建） | 解决跨 Agent 的深度链接解析，确保 `/chat/<id>` 能正确定位目标会话 | — | [PR #8209](https://github.com/agentscope-ai/QwenPaw/pull/8209) |
| #8200 | OPEN（10‑12 创建） | 添加 Firecrawl 作为 web_search 第三方提供方（BYOK） | — | [PR #8200](https://github.com/agentscope-ai/QwenPaw/pull/8200) |

*尽管上述 PR 均仍处于 **OPEN** 状态，但它们代表了今日以来最具推进意义的工作。若能在接下来的审查中合并，将直接缓解技能池下载阻塞、聊天历史体积爆炸以及跨 Agent 导航等已知痛点。*  

---  

## 4. 社区热点（今日评论最多、反应最强）  
| 项目类型 | ID | 标题 | 评论数 | 👍 | 链接 |
|----------|----|------|--------|----|------|
| Issue | #8126 | [Feature] Make skill‑pool download a cancellable background job (progress + explicit cancel) | 7 | 0 | [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) |
| Issue | #8174 | [enhancement] web_search built‑in tavily provider has no API‑key config surface | 4 | 0 | [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) |
| Issue | #8278 | [Bug] DingTalk 通道在消息 >3500 字符时整条降级为纯文本 | 3 | 0 | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) |
| PR (热度未显示评论数，但基于更新时间与关注度推断) | #8285 | feat(skills): make skill‑pool downloads cancellable jobs | – | – | [#8285](https://github.com/agentscope-ai/QwenPaw/pull/8285) |
| PR | #8229 | fix(chat): truncate oversized tool outputs when serving chat history | – | – | [#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229) |

**背后诉求**：  
- **#8126 / #8285** 反映用户对长时间技能池下载的不可中断感到焦虑，尤其在受限网络或大技能包时会触发客户端 30 s 超时。  
- **#8174** 表明付费 Tavily 用户希望能够在控制台配置自有 API Key，以使用自身配额而不受匿名额度限制。  
- **#8278** 指出 DingTalk 长消息渲染降级问题，影响表格、Markdown 展示，亟需分片处理或保持原始 msgtype。  

---  

## 5. Bug 与稳定性（今日新增 Bug，按严重程度排序）  
| 严重度 | Issue ID | 标题 | 是否有对应 fix PR | 链接 |
|--------|----------|------|-------------------|------|
| **高** | #8286 | Thinking strength slider colors the unselected rail (UI 误导) | 有（#8287） | [#8286](https://github.com/agentscope-ai/QwenPaw/issues/8286) |
| **高** | #8284 | Wheel scrolling in a long conversation gets stuck (视图回跳 1.1‑2.2k px) | 无 | [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284) |
| **中** | #8281 | `reload_agent()` 不触发 `workspace_created` hook，导致运行时 hook 丢失 | 无 | [#8281](https://github.com/agentscope-ai/QwenPaw/issues/8281) |
| **中** | #8280 | File content parts missing file_id/file_data 引发 OpenAI‑compatible 400 错误 | 无 | [#8280](https://github.com/agentscope-ai/QwenPaw/issues/8280) |
| **中** | #8279 | Long‑lived ReMe watchers 耗尽 AnyIO 线程限制，造成同步 HTTP 端点停滞 | 无 | [#8279](https://github.com/agentscope-ai/QwenPaw/issues/8279) |
| **中** | #8276 | ReMe reranker 允许空 API key，失败仅表现为 “unexpected error” | 无 | [#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276) |
| **低** | #8270 / #8269 | Windows 压缩包解压乱码（未指定 ZIP 编码） | 无（但有相关诊断） | [#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270) · [#8269](https://github.com/agentscope-ai/QwenPaw/issues/8269) |
| **低** | #8278 | DingTalk 长消息降级为纯文本（影响表格/Markdown） | 无 | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) |

*其中，**#8286** 已有对应修复 PR（**#8287**），预计很快能够合并；其余 Bug 暂无直接修复 PR，需后续跟进。*  

---  

## 6. 功能请求与路线图信号  
| 功能请求 | 关联 Issue/PR | 现状 | 路线图暗示 |
|----------|----------------|------|------------|
| 全局 Skill / MCP 共享管理（团队场景） | #8275（Feature） | OPEN，1 条评论、1 👍 | 若得到更多赞同，很可能被纳入后续 Hub 能力扩展计划。 |
| 可取消的 skill‑pool 下载（进度条 + 显式取消） | #8126（Issue） + #8285（PR） | PR 已提交，等待 Review | 该需求已经有实现雏形，极可能在下个补丁版本（v2.2.3）中合并。 |
| Tavily 自定义 API Key 配置 | #8174（Issue） | OPEN，4 条评论 | 与现有 web_search provider 框架兼容，属于配置层面增强，优先级中等。 |
| Firecrawl 作为 web_search 提供方 | #8200（PR） | OPEN，等待 Review | 已有实现代码，若通过审查将直接增加第三方选择。 |
| 工具输出截断（防止聊天历史膨胀） | #8228（Issue） + #8229（PR） | PR 已提交 | 解决聊天历史体积和超时问题，属于稳定性改进，极可能快速合并。 |
| 跨 Agent 深度链接解析 | #8209（PR） | OPEN | 已经解决深度链接定位，便于共享会话链接，预计近期合并。 |

---  

## 7. 用户反馈摘要（从 Issues 评论中提炼）  
- **下载阻塞与超时**：多位用户提到在下载较大技能包时，界面长时间无响应，导致前端 30 s 超时，期望能看到进度并能够中途取消（#8126、#8285）。  
- **聊天历史体积**：由于文件、截图等工具输出以 base64 形式完整保存，长时间对话轻松突破 10 MB，导致前端请求卡死（#8228、#8229）。  
- **Tavili 配额限制**：付费用户表示缺少自定义 API Key 的入口，使得无法使用己方配额，只能受制于匿名额度（#8174）。  
- **DingTalk 渲染降级**：长消息（>3500 字符）被强制降级为纯文本，表格、代码块、标题等全部失效，且无任何降级提示，用户只能靠经验限制长度（#8278）。  
- **插件/技能解压乱码**：Windows 下的 ZIP 解压未指定编码，导致中文文件名乱码，影响 Skill 导入与 Hub 下载（#8269、#8270）。  

---  

## 8. 待处理积压（长期未响应的重要 Issue/PR）  
| ID | 类型 | 创建时间 | 未更新天数 | 备注 | 链接 |
|----|------|----------|------------|------|------|
| #7712 | PR (Serply web_search) | 2026‑09‑11 | 36 天 | 一直 OPEN，无评论，可能因审查资源不足。 | [#7712](https://github.com/agentscope-ai/QwenPaw/pull/7712) |
| #7903 | PR (Community & Inbox 集成) | 2026‑09‑20 | 27 天 | WIP 状态，社区功能迫切需求。 | [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) |
| #7565 | PR (插件 clean unload & 热重载回滚) | 2026‑09‑04 | 43 天 | 长期挂起，影响插件更新安全性。 | [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) |
| #8229 | Issue (聊天历史体积) | 2026‑10‑13 | 4 天 | 已有对应 PR（#8229），但尚未合并。 | [#8229](https://

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 —— 2026-10-17

---

## 1. 今日速览

ZeroClaw 在过去24小时内保持着较高的开发活跃度：共处理了 **36 条 Issue 更新** 和 **50 条 PR 更新**，其中有 **9 个 Issue 被关闭**，**18 个 PR 被合并或关闭**，显示出项目团队正在积极处理反馈和推动迭代。

项目重点集中在多个关键领域，包括运行时优化、插件系统、WhatsApp Web 集成、配置管理以及安全策略等方面。一些高优先级的问题正在紧张处理之中，如记忆冲突隐藏问题、Email 通道的邮件处理缺陷、以及 Shell 命令循环检测阈值过低等问题。

整体来看，项目发展势头良好，社区参与度高，多个功能特性接近完成，有望在即将发布的版本中亮相。

---

## 2. 版本发布

目前 **无新版本发布**。

---

## 3. 项目进展

以下是今日合并/关闭的重要 PR，推动了项目的关键功能改进：

| PR | 类型 | 描述 | 链接 |
|----|------|------|------|
| [#11725](https://github.com/zeroclaw-labs/zeroclaw/pull/11725) | Bug Fix | 修复中转消息未能及时传递给模型的问题 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/11725) |
| [#11506](https://github.com/zeroclaw-labs/zeroclaw/pull/11506) | Feature | 显示保存与应用的配置状态信息 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/11506) |
| [#11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466) | Enhancement | 支持报告每个目标的配置应用结果 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/11466) |
| [#11791](https://github.com/zeroclaw-labs/zeroclaw/pull/11791) | Docs | 记录 `file_read` 模式允许列表例外情况 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/11791) |

这些 PR 改进了系统在消息传递、配置管理、文档记录等方面的功能，提升了用户体验和系统稳定性。

---

## 4. 社区热点

以下是当天讨论最活跃、反应最多的问题：

| Issue | 类型 | 描述 | 链接 |
|-------|------|------|------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Tracker | v0.8.6 和 v0.9.0 运行时与网关交付进展追踪 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | Enhancement | 增加 Tool 执行合同中的协作取消机制 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) |
| [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | Bug | 核心冲突处理隐藏无关记忆（默认无向量打分） | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) |
| [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) | Bug | ZeroCode Agent 关闭重复工具保护机制 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) |
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | Bug | WhatsApp Web 丢失图片/视频/文档的标题信息 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) |

这些问题涉及核心功能缺陷和增强需求，广受社区关注，特别是记忆系统、WhatsApp 集成和安全策略方面的问题。

---

## 5. Bug 与稳定性

以下是今日报告的关键 Bug 和潜在回归问题，按严重程度排序：

| Bug | 严重性 | 描述 | 是否有修复 PR | 链接 |
|-----|--------|------|---------------|------|
| [#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) | S0 | 守护进程突然要求 GitHub 凭据并阻塞启动 | ❌ | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) |
| [#11777](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) | S1 | 循环检测默认阈值过低，导致 Agent 无法继续执行 | ❌ | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) |
| [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | S2 | Core 冲突隐藏无关记忆（默认配置下） | ❌ | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) |
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | S2 | WhatsApp Web 丢失媒体内容标题信息 | ✅ ([PR #11259](https://github.com/zeroclaw-labs/zeroclaw/pull/11259)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) |
| [#11771](https://github.com/zeroclaw-labs/zeroclaw/issues/11771) | S3 | Bootstrap 文件字符上限不一致 | ❌ | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11771) |

部分 Bug 已经有相应的 PR 在处理中，特别是 WhatsApp Web 相关的 Bug。然而，一些关键性 Bug（如守护进程身份验证问题）尚未有明确的解决方案，需引起维护者重视。

---

## 6. 功能请求与路线图信号

以下是今日提出的新功能请求及其可能性分析：

| 请求 | 类型 | 描述 | 是否有相关 PR | 链接 |
|------|------|------|----------------|------|
| [#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) | Enhancement | 可配置的转录分类目标 | ❌ | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) |
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | Bug | `upsert_agent` 重写整个配置 | ✅ ([PR #11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606)) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) |
| [#11259](https://github.com/zeroclaw-labs/zeroclaw/pull/11259) | Feature | WhatsApp Web 保存 inbound 图片并标记方式与 Telegram 一致 | ✅ | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/11259) |
| [#11691](https://github.com/zeroclaw-labs/zeroclaw/issues/11691) | Bug | ZeroCode 暂停队列提示键位冲突 | ❌ | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11691) |
| [#11773](https://github.com/zeroclaw-labs/zeroclaw/issues/11773) | Bug | 区域性 OS 区域设置回退至英文 | ❌ | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11773) |

部分功能已进入实际开发阶段，有望在近期版本中上线；而其他请求则更偏向于修复用户体验中的小问题。

---

## 7. 用户反馈摘要

从 Issue 评论中我们可以看到以下几个主要的用户痛点：

- **配置管理混乱**：多个用户投诉在使用 `config` 操作时遇到了丢失插件路径、字段重置等问题。
- **WhatsApp Web 体验不佳**：用户反映 WhatsApp 上的消息无法正确显示多媒体内容，影响正常使用。
- **邮件处理异常**：Email 通道在重启后重复回复邮件，或漏掉部分新到达的邮件。
- **语言支持不足**：部分用户在非英语环境下遇到界面文本不翻译的问题。

同时，也有用户对项目的灵活性和可扩展性表示满意，特别是在插件系统和子 Agent 支持方面。

---

## 8. 待处理积压

以下是长期未响应或值得关注的问题：

| Issue/PR | 类型 | 描述 | 链接 |
|----------|------|------|------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Tracker | v0.9.0 开发进度追踪 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| [#10770](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) | Bug | 429 错误时退避策略不合理 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) |
| [#10994](https://github.com/zeroclaw-labs/zeroclaw/issues/10994) | Task | WASM 插件运行时发布准备 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/10994) |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | Enhancement | 沙箱安全策略 schema 标准化 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) |
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | Enhancement | Gemini 语音代理频道开发（PR1） | [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) |

这些 Issue 和 PR 关系到项目的长远发展方向，建议维护者予以优先跟进，以保持项目的创新动力和技术领先性。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*