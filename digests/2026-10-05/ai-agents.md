# OpenClaw 生态日报 2026-10-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-05 03:05 UTC

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

# OpenClaw 项目动态日报 - 2026-10-05

## 1. 今日速览

2026-10-05 日期内，OpenClaw 项目在活跃度方面表现积极。过去 24 小时共有 500 条 Issue 更新（新增/活跃 359 条，已关闭 141 条），并有 500 条 PR 更新（已合并/关闭 201 条，待合并 299 条）。项目整体保持高活跃度，持续接收大量用户反馈和技术问题。尽管没有新版本发布，但多个关键 Bug 和性能问题仍需优先跟踪，确保系统稳定性和功能完整性。

## 2. 版本发布

目前 **无新版本发布**。项目处于 2026.9.x 系列迭代阶段，持续进行内部优化和修复工作。由于缺乏新版本，团队重点聚焦于 Bug 修复、性能提升和功能完善，以确保现有版本的稳定性和可扩展性。

## 3. 项目进展

本日重点推进的 PR 包括：

- **#165298**（performance）：优化测试读取器池重启逻辑，避免重复创建共享数据库读池，提升测试效率。
- **#165297**（agent 工具交互）：修复 GitHub 发布、工具作者回复和客户端工具调用冲突问题，确保多提供商支持的工具调用更加可靠。
- **#165295**（auto-reply）：改进初始回复快照准备流程，解决会话启动时同步问题。
- **#165294**（Azure Speech）：添加 Dashboard 语音转写功能，丰富多媒体交互能力。
- **#165263**（遗留升级）：明确遗留插件安装时的插件允许列表，防止升级后出现外部依赖问题。
- **#165286**（Android 终止测试）：使 Android 包装器终止测试更具确定性，消除启动竞态问题。
- **#165293**（worker 性能）：减少每读工作线程的重复提交和事务设置，降低状态读取开销。
- **#165175**（CI 绕过授权）：修复继承的 CI 绕过授权检查，确保委派写入者能够正确通过授权验证。
- **#59414**（Doctor 功能）：增强 Doctor 对 Node 生命周期的解释能力，提供更准确的维护状态信息。

这些 PR 共同推动了性能优化、工具链兼容性和安全性改进，项目整体向前稳步推进。

## 4. 社区热点

### 最活跃的 Issue

| Issue ID | 标题 | 评论数 | 影响范围 |
|---------|------|--------|----------|
| #97616 | OpenClaw 泄漏未完成的钩子/工具子进程 | 17 | 严重（内存泄漏、性能下降） |
| #150635 | 短时记忆回收导致回忆深层阶段永久回退 | 17 | 中等（会话状态问题） |
| #114612 | `memory_index_chunks` 和 `memory_embedding_cache` 无保留策略 | 16 | 高（磁盘空间耗尽） |
| #121661 | CLI 后端子代理唤醒转为无工具调用 | 15 | 中等（行为异常） |
| #143632 | iMessage 消息重复重新发送 2-3 次 | 12 | 中等（消息丢失风险） |

### 最活跃的 PR

- **#165298**（performance）：优化测试读取器池重启逻辑，已提交且处于审查阶段。
- **#165297**（agent 工具交互）：修复 GitHub 发布和工具调用冲突，正在推进。
- **#165295**（auto-reply）：改进初始回复快照机制，已提交。
- **#165294**（Azure Speech）：添加 Dashboard 语音转写功能，已提交。
- **#165263**（遗留升级）：明确插件允许列表，防止升级后引入外部依赖。

### 核心诉求分析

1. **资源管理与内存泄漏**：#97616（钩子子进程泄漏）、#114612（内存索引无保留策略）是两大关键问题，直接影响系统稳定性和磁盘使用。
2. **多模型协同与可靠性**：#121661（CLI 后端工具调用）、#143632（iMessage 消息重复）反映了用户在复杂交互场景下的体验问题。
3. **性能优化**：#165298、#165293、#165295 等 PR 集中在性能提升方向，为未来版本奠定基础。

## 5. Bug 与稳定性

按严重程度排序，已有 fix PR 的情况如下：

| 严重程度 | Issue ID | 描述 | 状态 | 是否有 fix PR |
|----------|----------|------|------|--------------|
| 🔴 严重 | #97616 | 未完成的钩子/工具子进程泄漏，导致僵尸进程累积 | 未修复 | ❌ 无 |
| 🔴 严重 | #114612 | `memory_index_chunks` 和 `memory_embedding_cache` 无保留策略，磁盘无限增长 | 未修复 | ❌ 无 |
| 🟠 高 | #150635 | 短时记忆回收导致回忆深层阶段永久回退 | 未修复 | ❌ 无 |
| 🟠 高 | #143632 | iMessage 消息重复重新发送 2-3 次 | 未修复 | ❌ 无 |
| 🟡 中 | #121661 | CLI 后端子代理唤醒转为无工具调用 | 未修复 | ❌ 无 |
| 🟡 中 | #143278 | 心跳内部输出泄露到 Telegram 用户聊天 | 未修复 | ❌ 无 |
| 🟡 中 | #143334 | 子代理完成交付丢失 | 未修复 | ❌ 无 |
| 🟢 低 | #144502 | WhatsApp 移动端无法播放 TTS 语音笔记 | 未修复 | ❌ 无 |

**已有 fix PR 参考**：
- #164806（相关）：处理 `memory_index_chunks` 无限增长问题（尚未关联到当前 Issue）。
- #161379：Gateway 缓存 CPU 核心占用问题（已修复）。
- #160959：大型插件阻塞事件循环（已修复）。

**总结**：当前项目面临 3-4 个高优先级 Bug 未修复，特别是 #97616 和 #114612 涉及资源泄漏和磁盘空间耗尽，属于系统级风险。建议立即分配资源进行修复，并监控相关指标。

## 6. 功能请求与路线图信号

- **#95724**（多代理共享内存索引）：建议统一按工作区而非单个代理管理向量存储，减少冗余计算。这是一个重要的架构改进方向，可能影响多代理部署的性能。
- **#59149**（Per-agent 会话可见性）：请求将 `tools.sessions.visibility` 和 `tools.agentToAgent` 从全局设置改为可按代理范围配置，提升灵活性。
- **#156632**（Swarm 代理受限运行合同）：建议为 Swarm `agents.run` 增加受限运行模式，用于更严格的验证检查。
- **#165292**（工具失败计数）：修复工具结果错误计数不准确的问题，将提升操作日志的准确性。

这些功能请求显示了社区对多代理协同、权限控制和性能优化的持续关注，未来版本应优先考虑这些方向。

## 7. 用户反馈摘要

从 Issue 评论中提取的主要用户痛点：

1. **资源泄漏与性能问题**：用户反馈 OpenClaw 在长时间运行后出现僵尸进程、内存泄漏和 CPU 使用率异常（如 #97616、#114612、#143278），影响了系统稳定性和响应速度。
2. **多模型交互不一致**：CLI 后端在某些场景下返回空工具调用（#121661），WhatsApp 消息处理不稳定（#143632、#144502），影响了用户的日常使用体验。
3. **多代理协同困难**：子代理完成交付丢失（#150635）、心跳输出泄露（#143278）等问题导致任务流转不完整，用户在复杂工作流中遇到卡顿。
4. **平台兼容性问题**：Windows 上 Gateway 无法在未登录状态下自动启动（#143757），Docker 沙盒中的任务建议接受失败（#143980），限制了跨平台部署的便利性。

总体而言，用户对系统稳定性、资源管理和多模型协同的需求非常明确，建议团队在即将发布的版本中优先解决上述关键 Bug，并逐步实现多代理共享存储和细粒度权限控制的功能。

## 8. 待处理积压

以下长期未解决或需要关注的 Issue 和 PR：

- **#97616**（钩子子进程泄漏）：严重内存/CPU 问题，影响系统整体性能，必须优先修复。
- **#114612**（内存索引无限增长）：导致磁盘空间耗尽，影响长期运行的生产环境。
- **#150635**（短时记忆回收）：会话状态回退问题，影响用户记忆功能的连续性。
- **#143632**（iMessage 消息重复）：消息处理不一致，导致用户信息不完整。
- **#143278**（心跳输出泄露）：安全隐患，可能导致敏感信息泄露。
- **#143334**（子代理完成交付丢失）：任务流转中断，

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态 — 2026-10-05 横向对比分析

## 1. 生态全景

今日监测的 9 个开源智能体项目中，6 个有有效活动数据，整体呈现"高频迭代 vs. 质量巩固"两极分化：OpenClaw、CoPaw、ZeroClaw 日均可合并/关闭 50+ PR，体现活跃社区驱动；NanoBot、Hermes Agent 侧重体验与稳定性修复；LobsterAI 功能推进快但技术债积累。无项目当日发布新版本，均处于 Beta/迭代期，生态整体尚未成熟到"稳定版竞争"阶段。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 活动 | 待合并 PR | 新增 Release | 健康度 |
|------|-------------|---------|-----------|--------------|--------|
| OpenClaw | 500 (359 新/活跃) | 500 (201 合/关) | 299 | 无 | ⚠️ 高活跃但 3-4 个严重 Bug 未修复 |
| NanoBot | — | 14 合/关 | 若干冲突 PR | 无 | 🟢 修复闭环快，债务主要在可观测性 |
| Hermes Agent | 50 (46 活跃) | 50 (6 合/关) | 44 | 无 | 🟡 内部健壮性短板 |
| LobsterAI | 5 (3 开 2 闭) | 6 (3 待审) | 3 | 无 | 🟡 功能迭代健康，后端债务累积 |
| CoPaw (QwenPaw) | 11 | 8 (1 Critical 当天关) | 若干 | 无 | 🔴 Beta 阶段 3 Critical + 4 High |
| ZeroClaw | 43 | 50 (5 合/关) | 45 | 无 | 🟠 P0 配置覆盖 Bug 是最大风险 |
| PicoClaw / NanoClaw | — | — | — | — | ⚠️ 数据缺失 |
| NullClaw / IronClaw | — | — | — | — | 🟢 安全标识 safe，无活动数据 |

## 3. OpenClaw 在生态中的定位

**优势**：Issue/PR 吞吐量为今日最高（500/500），功能覆盖面最广（WebUI、多语音引擎、Azure、Android、多消息渠道），是生态中事实上的"核心参照"。

**技术路线差异**：侧重插件化 + 多 Provider 工具调用，与 NanoBot 的"WebUI 体验优先"、Hermes 的"桌面 Agent + 技能市场"、CoPaw 的"容器化 Beta"形成分化。

**社区规模**：活跃 Issue 数远超其他项目，但高严重度 Bug 修复率偏低（#97616、#114612 无 fix PR），说明"社区大 ≠ 质量问题少"。

## 4. 共同关注的技术方向

- **资源管理与内存泄漏**：OpenClaw (#97616)、CoPaw (#7722)、LobsterAI (#1007) 均反映容器/长跑场景内存失控。
- **多模型/多 Agent 协同**：OpenClaw (#95724)、NanoBot (#5266 token 监控)、Hermes (Bot 路由) 均指向多智能体治理。
- **可观测性 / 反馈透明**：CoPaw (#8103 模型回退感知)、NanoBot (#5266 token 日志)、ZeroClaw (#10597 context usage) 高度一致。
- **插件/运行时安全隔离**：CoPaw (#7840 插件冻结)、Hermes (#125746 并发字典)、OpenClaw (#165263 插件允许列表)。

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|------|----------|----------|--------------|
| OpenClaw | 全渠道消息 + 多工具调用 | 复杂工作流用户 | 插件化 + 多 Provider |
| NanoBot | WebUI + 会话管理 | 开发者/个人 | 频道插件化 + 模型容错 |
| Hermes Agent | 桌面 Agent + 技能市场 | 高级用户/团队 | 桌面优先 + OAuth 订阅 |
| LobsterAI | 渲染层 + MCP 工具生态 | 国内开发者 | OpenClaw 集成 + 预设 Agent |
| CoPaw (QwenPaw) | 容器化 AI 助手 | 生产环境部署 | Qwen 深度优化 + Beta 验证 |
| ZeroClaw | 本地小模型 + 运行时组合 | 隐私优先场景 | 本地-first + 多 Runtime |

## 6. 社区热度与成熟度分层

- **快速迭代阶段**：OpenClaw、CoPaw、ZeroClaw（日 PR ≥ 8，活跃 Issue > 30）
- **体验优化阶段**：NanoBot、Hermes Agent（修复闭环快，关注 UI/UX）
- **功能积累阶段**：LobsterAI（功能 PR 多，但后端 Bug Stale）
- **观察阶段**：NullClaw / IronClaw（暂无活动数据）

## 7. 值得关注的趋势信号

1. **内存/资源泄漏成为共性瓶颈**：OpenClaw、CoPaw、LobsterAI 同时出现，建议智能体项目将 OOM 防护纳入 CI 基线。
2. **模型回退可观测性是下一刚需**：CoPaw (#8103)、NanoBot (#6062) 已落地，预期将成各项目 v1.x 标准功能。
3. **本地小模型 + 隐私计算路线分化**：ZeroClaw (`local_small` profile) 与 Hermes 端侧 GGUF 过滤反映隐私敏感场景需求上升。
4. **插件沙箱隔离从"特性"变"必设"**：CoPaw (#7840)、Hermes (#125746) 的并发/冻结问题表明，无隔离的插件系统已无法通过生产验证。
5. **Beta 期稳定性债务集中爆发**：CoPaw 单日 3 Critical，OpenClaw 多周 Bug 未修复，提示开发者在选型时应优先关注"最近 7 天关闭的 Issue/PR 比例"而非绝对活跃度。

---

*注：PicoClaw、NanoClaw 摘要生成失败，NullClaw/IronClaw 无社区活动数据，本报告基于可用数据推断，决策时建议补充原始仓库直接验证。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



好的，这是根据您提供的 NanoBot GitHub 数据生成的 2026-10-05 项目动态日报。

---

### **NanoBot 项目动态日报 - 2026-10-05**

#### **1. 今日速览**
NanoBot 项目在过去24小时内展现出极高的开发活跃度，代码提交与合并节奏强劲。核心维护者与社区贡献者针对 WebUI 交互、会话管理、模型兼容性等关键领域进行了集中修复与优化，项目稳定性与功能性均得到显著提升。尽管仍存在一些技术债务（如 token 消耗过高），但整体健康度向好，正处于一个密集的迭代周期中。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
本日有 14 条 PR 被合并或关闭，标志着多项关键功能的完善与修复的落地：
*   **WebUI 体验优化：** 多个 PR 被合并，系统性地解决了移动端与桌面端的交互问题，包括修复侧边栏焦点丢失（#6009, #6058, #6059）、当前主题选择后抽屉未关闭（#6061）等，极大提升了 UI 的稳定性和用户体验。
*   **核心功能增强：**
    *   **子代理（Subagent）系统：** PR #5985 被合并，增加了会话拥有的任务消息传递、检查、取消和实时观察功能，通过 `subagent` 工具使子代理管理更加健壮和透明。
    *   **模型容错：** PR #6062 被合并，解决了模型故障转移时聊天频道无感知的问题，现在备用模型接管时会向用户发送通知。
    *   **文档修正：** PR #6054 修正了内存指南中的 Git 布局和搜索示例，提升了文档准确性。
*   **重要修复：** PR #6005 被合并，修复了 `reasoning_effort` 错误地为所有兼容 OpenAI 的提供者（而非仅推理模型）丢弃 `temperature` 参数的问题（#6002），确保了模型配置的正确性。
*   **整体迈进：** 项目正从“功能实现”阶段稳步进入“体验优化与稳定性强化”阶段，对开发者体验和终端用户友好度的关注度日益提升。

#### **4. 社区热点**
*   **#5266 - Token 消耗监控（13条评论）：** 这是近期讨论最热烈的 Issue。用户的核心诉求是 **缺乏对高 token 消耗的可见性**，希望增加日志功能以追踪具体哪个操作消耗了大量 token，从而进行成本控制和性能优化。这反映了社区对运营效率和成本的直接关注。
*   **#6031 - 聊天频道模型切换通知（1条评论，但衍生出关键PR）：** 虽然评论不多，但该 Issue 提出了一个重要的用户体验缺口：模型故障转移对用户而言是“隐形”的。其直接催生了已合并的 PR #6062，显示了社区反馈如何直接驱动核心功能改进。

#### **5. Bug 与稳定性**
今日报告的 Bug 按严重程度排序如下（均已有对应的修复 PR 或被标记为已修复）：

1.  **高严重度 - WebUI 侧边栏状态丢失（#6008）：**
    *   **描述：** WebUI 初始获取侧边栏状态失败后，会静默回退到默认状态，导致用户后续的修改（如置顶、重命名）被静默清除。
    *   **状态：** 已有修复 PR #6009 被合并，通过只读状态和重试机制解决了问题。
    *   **链接：** [Issue #6008](https://github.com/HKUDS/nanobot/issues/6008), [PR #6009](https://github.com/HKUDS/nanobot/pull/6009)

2.  **中严重度 - 静默后台操作通知（#6029）：**
    *   **描述：** 后台维护任务（如空闲压缩、心跳周期）会主动向聊天频道广播“正在压缩上下文…”等状态消息，干扰用户。
    *   **状态：** 开放，但已有类似需求的 PR #5900 被关闭，表明此问题已获关注，可能通过其他方式解决。
    *   **链接：** [Issue #6029](https://github.com/HKUDS/nanobot/issues/6029)

3.  **中严重度 - `reasoningEffort` 影响所有模型（#6002）：**
    *   **描述：** 启用 `reasoningEffort` 会导致所有 38 个 `openai_compat` 提供者（而非仅 o1/o3/o4 模型）的 `temperature` 参数被静默丢弃。
    *   **状态：** 已有修复 PR #6005 被合并，为兼容模型（如 Mistral）保留了 `temperature` 设置。
    *   **链接：** [Issue #6002](https://github.com/HKUDS/nanobot/issues/6002), [PR #6005](https://github.com/HKUDS/nanobot/pull/6005)

4.  **低严重度 - Obsidian CLI 检测问题（#6024）：**
    *   **描述：** 在 GNOME on Wayland 环境下，通过 `XDG_RUNTIME_DIR` 无法检测到 Obsidian。
    *   **状态：** 已关闭，可能通过配置或环境变量调整得以解决。
    *   **链接：** [Issue #6024](https://github.com/HKUDS/nanobot/issues/6024)

#### **6. 功能请求与路线图信号**
*   **高优先级信号：**
    *   **可观测性与成本控制（#5266）：** 强烈的社区需求指向增加详细的 Token 使用日志和监控功能。这应是下一个版本的重点，直接关系到项目的可商用性和可持续性。
    *   **模型故障转移透明化（#6031/#6062）：** 此功能已通过 PR #6062 实现，表明路线图正致力于提升 AI 能力的可靠性和用户信任度。
*   **中优先级信号：**
    *   **后台任务静默化（#6029/#5900）：** 对后台操作（如上下文压缩、心跳）的静默处理已成为明确需求，预示着未来版本将更注重“无感”的自动化运维。
    *   **WebUI 扩展性（PR #6032）：** 虽然 PR 处于冲突状态，但“可配置的本地可信扩展界面”这一功能请求表明，社区希望 WebUI 能成为一个可扩展的平台。

#### **7. 用户反馈摘要**
*   **痛点：**
    *   **成本黑洞：** 用户对“在没有明显活动的情况下，几小时内消耗百万 token”感到困惑和担忧，急需透明化工具。
    *   **配置混乱：** 用户期望的配置行为（如 `reasoningEffort` 仅影响推理模型）与实际行为（影响所有模型）存在偏差，导致配置错误。
    *   **通知干扰：** 用户不希望自动化维护过程（如上下文压缩）打断正常的聊天体验。
*   **使用场景：**
    *   用户在使用 WeChat 等频道时，希望上下文压缩能静默进行，不发送通知。
    *   用户在使用 Telegram 等频道时，需要正确的换行符和主题 ID 支持（PR #5803）。
    *   用户在使用 WebUI 时，期望稳定、一致的侧边栏状态和键盘导航。
*   **满意信号：** 对已修复的问题（如侧边栏焦点、模型切换通知）的积极合并，表明维护者对用户体验的反馈响应迅速且有效。

#### **8. 待处理积压**
*   **#5266 - Token 消耗日志：** 尽管评论最多（13条），但该 Issue 自 2026-08-06 创建以来尚未有实质性进展或关联 PR。这是当前最关键的积压项，需要维护者优先考虑。
*   **#5388 - MCP Schema 字节预算：** 此 PR 自 2026-08-13 创建，已存在近两个月，仍处于开放且冲突状态。其功能（为 MCP 模式添加可选的字节预算）对高级用户可能有吸引力，但优先级似乎不高，需评估其必要性。
*   **#6032 - WebUI 扩展界面：** 此功能性强 PR 已开放近一天，但存在合并冲突，需要及时解决以推进其集成。

---
**日报生成说明：** 本报告基于提供的数据，通过分析 Issue/PR 的状态、标签、内容及关联性，对项目活跃度、社区情绪和技术趋势进行了推断。所有链接和数据均直接来源于 GitHub。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Daily Project Diary (2026‑10‑05)**

---

### 1. 今日速览
- 过去24小时共更新**50个Issue**（活跃46，关闭4）和**50个PR**（打开44，合并/关闭6）。Issue活动量持续高企，PR churn保持在“高”水平，表明社区贡献积极，但项目每周仍无新稳定版发布。
- 自动化和插件加载领域问题突出（如并发加载错误、缺失Python依赖），表明内部健壮性需加强。
- 近期合并的PR集中在桌面UI修复、运行时模型过滤、遥测改进和配置解析等“静默失败”场景，这些都是提升用户体验的关键节点。

*整体健康度：**稳步前行** – 大量社区问题和贡献，仍缺乏定期发布节奏，内部稳定性短板有待弥补。*

---

### 2. 版本发布
**无正式发布。** 项目暂无新版本，下一版本（v0.21.x）预计将包含本周合并的桌面UI修复、运行时模型清理和遥测改进。

---

### 3. 项目进展 – 合并/关闭的重要PR
| PR | 状态 | 主题 | 主要影响 |
|---|---|---|---|
| #133058 | 已合并 | 修复桌面端的“区域菜单”问题 | 右键点击编辑器不再弹出“区域”菜单，恢复“剪切/复制/粘贴”操作。 |
| #133053 | 已合并 | 修复运行时：端侧GGUF不该被当作模型 | 根据 `#133037`，不再把`mmproj‑*.gguf`（如`mmproj‑Qwen3.8‑Flash‑Next‑BF16.gguf`）列为可用的聊天模型。 |
| #133060 | 已合并 | 简化JSON Schema – 删除`choices[].items.maxLength` | 消除了不同端点对长度约束的互不兼容行为。 |
| #133061 | 已合并 | 早期校验 – 阻止不符合限制的技能创建 | 现在在等待审批之前即拒绝描述过长的新技能。 |
| #133054 | 已合并 | 遥测 – 压缩“失败”事件更新 | “无进展”压缩尝试现记为**跳过**，而非**失败**，并报告真实的异常类型。 |
| #133056 | 已合并 | 更新 – 修复因文档仅修改导致的回退 | 更精确地识别真正的Python导入故障；文档修复不再触发回退和错误退出。 |
| #133045 | 打开 | 新增 – 按订阅订阅的Kanban进度通知 | 为长期运行的工作提供被动的进度心跳（仍在开发中）。 |
| #131849 | 打开 | 新增 – 按订阅订阅的Bot模式团队路由 | 支持声明式`from→to`机器人链和每个机器人的独立开关（仍在开发中）。 |
| #65982 | 打开 | 新增 – Claude Agent SDK提供商（订阅OAuth） | 为官方Claude Agent SDK提供第一个级别的支持（仍在开发中）。 |

*进展摘要：*本周合并了**六个关键修复**，覆盖桌面UI、运行时模型可见性、Schema规范、技能创建流程、遥测准确性和更新鲁棒性。**三个新特性PR**（Kanban进度、Bot路由和Claude SDK）已准备就绪，将在下一版本中推出。

---

### 4. 社区热点 – 讨论最激烈的话题
| Issue | 评论数 | 摘要 | 链接 |
|---|---|---|---|
| **#40239** – 添加葡萄牙语（pt‑BR）语言支持 | **13** | 要求在桌面应用中将葡萄牙语（巴西）作为完全可选的语言。 | https://github.com/NousResearch/hermes-agent/issues/40239 |
| **#125746** – “字典在迭代过程中大小发生变化”中止插件加载 | **6** | 在长时运行且插件繁多的环境中，插件加载时出现并发字典修改错误，导致工具丢失。 | https://github.com/NousResearch/hermes-agent/issues/125746 |
| **#125649** – 派发器工作进程在管理Python运行时崩溃 | **6** | 每个Kanban工作进程在启动时遇到`ModuleNotFoundError`（PM托管的Python启动器损坏）。 | https://github.com/NousResearch/hermes-agent/issues/125649 |
| **#102945** – 损坏的`config.yaml`会静默回退 | **5** | 第三方的安装程序损坏YAML时，Hermes会静默使用默认值，仅输出单行警告。 | https://github.com/NousResearch/hermes-agent/issues/102945 |
| **#125091** – 桌面“Bot模式”缺少`ruamel`模块 | **5** | 在桌面Bot模式中，消息代理在工作进程启动前崩溃（`No module named ruamel'`）。 | https://github.com/NousResearch/hermes-agent/issues/125091 |
| **#125654** – 机器人到机器人的消息传递失败（相同的`ruamel`问题） | **5** | 与上面类似，但发生在通过有效负载解释器启动的传递运行时中。 | https://github.com/NousResearch/hermes-agent/issues/125654 |
| **#133013** – 会话CLI应显示筛选条件值 | **4** | 用户希望在`hermes sessions archive/prune`中看到所选的22个筛选条件中的值。 | https://github.com/NousResearch/hermes-agent/issues/133013 |
| **#130396** – 桌面聊天中的Markdown表格渲染两次 | **4** | 助理回复立即紧跟工具调用时，同一消息渲染两次（渲染层错误）。 | https://github.com/NousResearch/hermes-agent/issues/130396 |
| **#88994** – SSH远程配置文件在本地配置文件名≠远程`remoteProfile`时崩溃 | **4** | 远程SSH连接在`remoteProfile: "default"`时失败（回归）。 | https://github.com/NousResearch/hermes-agent/issues/88994 |
| **#119194** – GGUF规划器不识别1.58位三元量化类型 | **3** | `Ternary‑Bonsai‑2‑27B‑PQ2_0.gguf`不被识别，导致模型不可用。 | https://github.com/NousResearch/hermes-agent/issues/119194 |

*这些问题表明了三个反复出现的主题：**i18n**、**插件/运行时启动稳定性**和**配置解析 robustness**，是用户当前最关切的领域。*

---

### 5. Bug与稳定性 – 本日已报告的问题

| Issue | 严重程度* | 当前状态 | 合并的修复 |
|---|---|---|---|
| **#125649** | **高** – 每个Kanban工作进程启动失败 → 整个工作队列不可用 | 打开 | **#133058**（桌面修复）涵盖了相关的工作进程问题（由统一的桌面修复处理）。 |
| **#125091 / #125654

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报
**日期：** 2026-10-05
**数据来源：** GitHub `netease-youdao/LobsterAI` (过去 24 小时)
**分析视角：** 开源项目智能体与个人 AI 助手领域

---

## 1. 今日速览
过去 24 小时内，LobsterAI 社区交互保持活跃，共更新 **5 条 Issues**（3 开 2 闭）与 **6 条 PR**（3 待审 3 已关闭/合并），**无新版本发布**。项目研发重心明显偏向**渲染层体验优化**（长文本排版、模型列表分组）与 **MCP/OpenClaw 能力补全**（工具过滤器、工具选择器），技术团队在功能交付上节奏较快。然而，社区反馈显示**定时任务稳定性**与**Agent 引擎生命周期管理**仍存在顽固问题，且多条高关注度 Bug 长期处于 Stale 状态。整体健康度评估为 **中等（Moderate）**：功能迭代健康，但后端稳定性债务有累积风险，需维护者关注技术债清理。

## 2. 版本发布
**无新版本发布。** 当前代码库处于功能积累期，建议关注待合并的 UI 优化 PR（#2790-2792）与 MCP 增强 PR（#2710, #2789）的落地情况。

## 3. 项目进展
今日合并/关闭的 PR 共计 3 条，主要集中在增强工具生态兼容性与预设 Agent 库的丰富度：
- **MCP 工具能力增强 (#2710)**：修复了 Config Sync 仅写入命令/URL 的局限，正式将 `per-server toolFilter` 与 `parallel tool calls` 透传至 OpenClaw。此举允许用户按会话加载特定 MCP 工具，解决了工具过载问题。
  [🔗 PR #2710](https://github.com/netease-youdao/LobsterAI/pull/2710)
- **MCP 工具选择器 (#2789)**：引入 `mcp tool picker` 功能，提升用户调用外部工具的可发现性与可控性。
  [🔗 PR #2789](https://github.com/netease-youdao/LobsterAI/pull/2789)
- **预设 Agent 库扩容 (#1008)**：新增 6 个预设 Agent 模板（覆盖股票、内容创作等场景），补齐了预设覆盖不足的短板。
  [🔗 PR #1008](https://github.com/netease-youdao/LobsterAI/pull/1008)

**推进评估：** 项目整体在**应用层交互与工具生态**上稳步向前，今日合并的工作直接提升了 MCP 与 OpenClaw 的整合深度。与此同时，另有 3 条 UI/渲染优化 PR（#2790, #2791, #2792）处于待合并状态，预计将进一步改善长上下文场景下的阅读体验。

## 4. 社区热点
今日社区讨论热度最高的话题集中在**定时任务可靠性**与 **MCP 连接故障**：
- **定时任务失效 (#850)**：用户报告关闭定时任务后仍会触发执行，直接影响任务调度逻辑的正确性，是目前最严重的逻辑 Bug。
  [🔗 Issue #850](https://github.com/netease-youdao/LobsterAI/issues/850)
- **Notion MCP 认证失败 (#1003)**：MCP Bridge 在 `spawn` 子进程时未能正确传递环境变量，导致 Token 丢失返回 401。这反映了进程间环境传递的实现缺陷。
  [🔗 Issue #1003](https://github.com/netease-youdao/LobsterAI/issues/1003)
- **Agent 引擎无限重启 (#1007)**：尽管状态为 Closed，但该问题属于高稳定性隐患，反映了容器/进程管理层的潜在风险。
  [🔗 Issue #1007](https://github.com/netease-youdao/LobsterAI/issues/1007)

## 5. Bug 与稳定性
按严重程度排序，今日新增/活跃的稳定性问题如下：

| 严重程度 | 编号 | 问题描述 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **High** | #850 | 定时任务关闭后仍触发执行（调度逻辑错误） | Open / Stale | 无 |
| **High** | #837 | 定时任务触发异常后一直失败，需重启恢复（锁屏/异常处理） | Open / Stale | 无 |
| **High** | #1007 | Agent Engine 无限重启（进程管理） | Closed | 无 |
| **Medium** | #1003 | Notion MCP 环境变量未传递致 401 认证失败 | Closed | 无 |

**分析：** 目前**无直接对应 #850 或 #837 的修复 PR**。这两个涉及定时调度器核心逻辑的 High 优先级 Bug 自 3 月创建以来长期处于 Stale 状态，表明后端稳定性模块缺乏持续投入。虽然 MCP 相关修复 PR（#2710）已合并，但并未覆盖环境变量传递问题（#1003）。

## 6. 功能请求与路线图信号
- **细粒度模型控制 (#856)**：用户请求支持“不同任务使用不同模型”，指出当前切换模型会全局修改所有任务。这是一个明确的**路线图信号**，暗示项目需在 Agent 配置与全局模型设置之间建立解耦。
  [🔗 Issue #856](https://github.com/netease-youdao/LobsterAI/issues/856)
- **文档同步 (#856)**：用户指出新增加的功能（如 OpenClaw）缺失使用文档。结合今日 PR #2710/#2789 的合并，文档更新应纳入下一版本交付计划。
- **判断：** 模型解耦请求技术复杂度适中，且与今日合并的 MCP 配置解耦趋势（#2710）一致，**较大概率被纳入下一版本**。

## 7. 用户反馈摘要
- **痛点：** 用户对**MacOS 锁屏环境**下的定时任务异常（#837）以及**Agent 进程反复崩溃**（#1007）表现出高度不安，这直接影响生产/自动化场景的信任度。
- **配置困惑：** 用户在配置 Notion MCP 时遭遇环境变量传递不明的问题（#1003），反映出底层 Bridge 实现的配置透明度不足。
- **体验期待：** 长任务 Prompt 撑大 Dock 区域导致

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

# CoPaw (QwenPaw) 项目日报 | 2026-10-05

> **数据源**: `agentscope-ai/QwenPaw` GitHub 仓库  
> **统计窗口**: 过去 24 小时 (2026-10-04 至 2026-10-05)  
> **报告生成时间**: 2026-10-05

---

## 1. 今日速览

- **活跃度评级**: 🟢 **高** — 单日 11 个 Issue 更新、8 个 PR 活动，且多为近期新建（含 1 个 Critical Bug 当天即关闭），显示社区反馈与修复闭环极快。
- **核心矛盾**: v2.2.2b4 (Beta) 版本暴露出 **内存泄漏/耗尽**、**插件沙箱隔离缺失**、**控制台启动白屏无恢复**、**工具审批逻辑反转** 等多个阻塞级缺陷，集中在容器化部署、多模型回退、前端资源加载三大场景。
- **修复动能**: 已有 4 个针对性 Fix PR 处于 Open/Review 状态（含首贡献者 3 个），覆盖插件安装环境污染、懒加载重试、启动看门狗、OpenAI 参数过滤，预示下一补丁版本将显著提升稳定性。
- **版本节奏**: 无正式 Release，当前主线处于 **v2.2.2 Beta 验证期**，重心已从功能开发（如 #7542 滚动分页）转向 **生产级可靠性硬化**。
- **社区信号**: 用户对“无感知模型回退”“会话丢失”“审批失效”极其敏感，呼声最高的是 **可观测性** 与 **故障自愈** 能力。

---

## 2. 版本发布

> 过去 24 小时无新版本发布。当前最新标签为 `v2.2.1` / `v2.2.2b4` (Beta)，建议关注后续 `v2.2.2` 稳定版发布节奏。

---

## 3. 项目进展

| PR | 状态 | 类型 | 核心推进 | 关联 Issue |
|----|------|------|----------|------------|
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | 🔴 **Closed** (Under Review) | **Fix: Console Chat 并发保护** | 拒绝同一会话的二次非重连 `POST /api/console/chat`，避免静默丢载用户新消息 | — |
| [#8107](https://github.com/agentscope-ai/QwenPaw/pull/8107) | 🟢 **Open** | **Fix: 插件安装环境隔离** | 清理 `PIP_TARGET` 等污染变量；容忍 `importlib.invalidate_caches()` 失败，解决容器内插件装包崩溃 | [#8106](https://github.com/agentscope-ai/QwenPaw/issues/8106) |
| [#8108](https://github.com/agentscope-ai/QwenPaw/pull/8108) | 🟢 **Open** | **Fix: 控制台懒加载重试机制** | chunk 失败后自动重试 + 错误 UI 可点击刷新，修复部署竞态/缓存失效导致的永久白屏 | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) |
| [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102) | 🟢 **Open** | **Fix: 控制台启动看门狗** | 入口 chunk 失败时展示错误态 + Reload 按钮 + 1 次自动重试，彻底解决升级后旧缓存 404 卡死 | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) |
| [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738) | 🟡 **Review** | **Fix: OpenAI 兼容层参数过滤** | 调用前剔除 `streamIdleTimeoutMs` 等非标准 kwargs，规避上游 SDK `TypeError` | [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) |
| [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | 🟢 **Open** | **Fix: `finish_reason=length` 透传** | 解析流式终止块中的 `length` 截断原因，写入响应元数据，使截断答案可被感知 | [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) |
| [#7774](https://github.com/agentscope-ai/QwenPaw/pull/7774) | 🟡 **Review** | **Fix: Hub 启动 provisioner 白名单来源** | 从运行时服务动态派生允许列表，消除硬编码与实际能力不一致 | — |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | 🟢 **Open** | **Feat: 聊天历史滚动分页** | 补全 `scroll` 策略下被压缩的历史消息加载，解决刷新/切回会话“断层”体验 | — |

> **进展小结**: 今日 **1 个 PR 关闭**（并发保护），**4 个高优 Fix PR 待合并**，直击 Beta 阻塞项；1 个大体量 Feature PR (#7542) 仍在推进，显示“稳定性优先、功能次之”的迭代策略。

---

## 4. 社区热点

| 排名 | Issue/PR | 互动量 (评论/👍) | 核心诉求 | 分析 |
|------|----------|------------------|----------|------|
| 1 | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 6 / 0 | **内存耗尽三路径复现 + 最小修复** | 最早 (9/12) 且持续跟进的深度技术贴，作者给出 **受控复现 + 分路径补丁**，是 v2.2.2 稳定性攻坚的核心参考。 |
| 2 | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | 5 / 0 | **插件同步阻塞事件循环冻结全实例** | 揭示 **插件沙箱缺失** 的架构级隐患，影响面广（所有本地插件），需运行时层面引入 worker/隔离机制。 |
| 3 | [#8109](https://github.com/agentscope-ai/QwenPaw/issues/8109) | 2 / 0 | **流错误导致会话 100% 丢失** | **Critical Regression**，当天即关闭，疑为重复或已由现有修复覆盖，但反映用户对“会话持久化”零容忍。 |
| 4 | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | 2 / 0 | **启动白屏无重试/无报错** | 典型“升级后卡死”场景，已有 PR #8102 针对性修复，验证了“快速响应用户阻塞体验”的流程。 |
| 5 | [#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103) | 1 / 0 | **静默模型回退无感知** | 可观测性缺口，用户要求 **事件/通知/日志** 三级暴露回退事实，纳入路线图可能性极大。 |

> **热点画像**: 讨论集中于 **基础设施可靠性**（内存、事件循环、启动、会话持久），而非业务功能；用户多为 **容器化生产环境运维者**，具备较强复现与诊断能力。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR | 状态 |
|--------|-------|------|----------|---------------|------|
| 🔴 **Critical** | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 容器内存 ~1MB/s 增长 → OOM，三路径叠加 | 所有长跑容器实例 | ❌ 无直接 PR（作者给出最小补丁建议） | Open |
| 🔴 **Critical** | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | 插件同步 I/O 冻结全实例 40s+ | 所有装载本地插件的实例 | ❌ 无（需架构级隔离重构） | Open |
| 🔴 **Critical** | [#8105](https://github.com/agentscope-ai/QwenPaw/issues/8105) | 工具审批“同意/拒绝”均执行拒绝，图标无响应 | Console 审批流全场景 | ❌ 无 | Open |
| 🟠 **High** | [#8106](https://github.com/agentscope-ai/QwenPaw/issues/8106) | 容器内插件装包失败：`PIP_TARGET` 污染 + `importlib` 影子 | 容器部署插件安装 | ✅ [#8107](https://github.com/agentscope-ai/QwenPaw/pull/8107) | Open |
| 🟠 **High** | [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | 网关内容审查误判 `data_inspection_failed` → `bad_request` 杀死轮次 | 多供应商回退链路 | ❌ 无（需错误分类与重试策略） | Open |
| 🟠 **High** | [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) | `chat_template_kwargs` 未进 `extra_body` 导致 OpenAI SDK 报错 | DeepSeek-v4-pro 等模型调用 | ✅ [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738) (Review) | Open |
| 🟡 **Medium** | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | 启动 splash 无重试/无报错，旧 WebView2 缓存永久卡死 | Console 桌面端/容器前端 | ✅ [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102) | Open |
| 🟡 **Medium** | [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | OpenCode Go 套餐报 `MissingSessionID` | 特定供应商集成 | ❌ 无 | Open |
| 🟢 **Low** | [#8109](https://github.com/agentscope-ai/QwenPaw/issues/8109) | 流错误后会话内容丢失 | Console 会话持久化 | ❌ 无（已关闭，待验证是否重复） | Closed |

> **稳定性结论**: Beta 版存在 **3 个 Critical、4 个 High** 阻塞项，且 Critical 项多为架构级（内存、事件循环、审批逻辑），建议 **v2.2.2 正式版前必须逐个闭环或给出 Workaround**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 社区热度 | 已有 PR/实现线索 | 入版概率 (v2.2.x) |
|------|------|----------|------------------|-------------------|
| **模型回退可观测** (事件/Toast/日志) | [#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103) | 👍0 / 评论1 | 无 PR，但符合“生产级可靠性”主题 | ⭐⭐⭐⭐⭐ (极高) |
| **OpenCode `x-opencode-session` Header 支持** | [#8104](https://github.com/agentscope-ai/QwenPaw/issues/8104) | 👍0 / 评论1 | 无 PR，属适配类小改动 | ⭐⭐⭐⭐ (高) |
| **聊天历史滚动分页** | [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | PR 评论活跃 | **PR #7542 已开发完毕 (XXXL)** | ⭐⭐⭐ (中，取决于稳定性窗口) |
| **Hub Provisioner 动态白名单** | [#7774](https://github.com/agentscope-ai/QwenPaw/pull/7774) | PR Review 中 | **PR #7774 Review 中** | ⭐⭐⭐⭐ (高) |
| **Provider `finish_reason=length` 元数据透传** | [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | PR 新建 | **PR #8096 Open** | ⭐⭐⭐⭐ (高) |

> **路线图推断**: 下一补丁版 (v2.2.2) 将聚焦 **“可观测性 + 容器化生产就绪”**；滚动分页等体验功能大概率延至 v2.3.0。

---

## 7. 用户反馈摘要

| 痛点场景 | 典型原话 (Issue 评论/描述) | 频次/广度 | 情绪倾向 |
|----------|----------------------------|-----------|----------|
| **容器内存不可控** | “fills at ~1MB/s, then the service hangs/OOMs... three compounding paths” ([#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722)) | 单用户深度复现，但具代表性 | 😤 挫败/技术性强 |
| **插件冻结主进程** | “one synchronous call in any plugin freezes the whole instance for ~40 s” ([#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840)) | 多版本复现，云/容器同现 | 😡 严重阻塞 |
| **审批

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-10-05）

> 数据源：github.com/zeroclaw-labs/zeroclaw | 统计窗口：过去24小时

---

## 1. 今日速览

- **活跃度高**：过去24小时共处理 93 条更新（Issues 43 + PRs 50），其中 1 个 Issue 已关闭，5 个 PR 已合并/关闭，45 个 PR 待合并。
- **无新版本发布**：当前稳定版仍为 v0.8.6（多个 PR 已标注 `release:v0.8.6` 等待合入）。
- **安全敏感**：至少 3 个 P0/P1 级风险涉及配置数据丢失、认证策略未生效、快速启动失败。
- **测试基建加强**：JordanTheJet 今日密集提交多个 runtime/test 相关 PR（#11534、#11533、#11526），并行测试确定性是核心主题。

---

## 2. 版本发布

> 今日无新版本，跳过。

---

## 3. 项目进展（今日合并/关闭）

| PR | 状态 | 意义 |
|---|---|---|
| [#11521](https://github.com/zeroclaw-labs/zeroclaw/pull/11521) | CLOSED | 记录 Core Team 对 runtime composition exception 的正式批准，补齐治理文档 |
| [#11518](https://github.com/zeroclaw-labs/zeroclaw/pull/11518) | CLOSED | 修复 CLI approval prompt 在 EOF/无终端时的失败源追溯，避免误报 "Denied by user" |
| [#11534](https://github.com/zeroclaw-labs/zeroclaw/pull/11534) | OPEN | RPC/delegate 测试夹具确定性化，减少并行测试 flake |
| [#11533](https://github.com/zeroclaw-labs/zeroclaw/pull/11533) | OPEN | 隔离 bootstrap WARN 捕获，使并行测试可观测 |

项目整体向前推进：**治理文档化 + CLI 审批路径修正 + 并行测试基建**，为 v0.8.6 合入做准备。

---

## 4. 社区热点

| Issue | 评论 | 诉求摘要 |
|---|---|---|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | 14 | 并行 Runtime 下可执行测试夹具的稳定性（cron shell 执行失败后跟进） |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 9 | 需求强烈：`local_small` 精简 runtime profile，解决本地模型提示词膨胀与信息泄露 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 6 | v0.8.6 / v0.9.0 剩余运行时与网关交付的源跟踪 |
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | 5 | **P0**：Config::save() 可能用 702 字节空配置覆盖 109KB 现有配置 |
| [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) | 3 | Android/Termux 快速启动失败，agent 无法持久化 |

---

## 5. Bug 与稳定性（按严重度排列）

| 级别 | Issue | 概要 | 已有 Fix PR |
|---|---|---|---|
| **P0 / S0** | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | `Config::save()` 用近乎空的配置覆盖已有文件，数据丢失风险 | PR #11527（拒绝无来源全量写入） |
| **P1 / S1** | [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) | quickstart 在 Android/Termux 失败 | 无 |
| **P1 / S1** | [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | macOS Seatbelt 忽略 `allowed_roots` | 无 |
| **P1 / S1** | [#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) | 网关 auth 写入未实时生效，需 reload | 部分推进（#11202 已合并） |
| **P1 / S1** | [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | ZeroCode Code pane ACP 失败轮次持久化 | 无 |
| **S2** | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite 会话后端覆盖每条消息的 created_at | 无 |
| **S2** | [#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) | Web 聊天中途刷新丢失用户 prompt | 无 |
| **S2** | [#11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371) | MCP 嵌套对象参数被序列化为字符串 | 无 |

---

## 6. 功能请求与路线图信号

- **本地小模型路线**：#5287（`local_small` profile）+ #7951（effort-based 路由）+ #10570（ACP 会话记忆）构成完整的本地-first 生态，待合入。
- **通道扩展**：#10768（Sendblue iMessage/SMS）与 #11076（Antigravity CLI 工具）表明项目在向多平台编码助手演进。
- **Web 体验**：#10698（引导式 cron 编辑器）+ #8383（ZeroCode Dashboard 上下文可见化）提升 Operator UX。
- **可观测性**：#10597（日志化 context usage 与预算修剪）已就绪。

**下一版本候选**：上述 PR 大多已标注 `release:v0.8.6`，有望在一次Release 中集中交付。

---

## 7. 用户反馈摘要

- **痛点 - 数据安全**：用户对 `Config::save()` 能覆盖现有配置高度紧张（#10495），需要"先验证后写入"机制。
- **痛点 - 跨平台**：Android/Termux、macOS Seatbelt、Windows 文件替换，多个平台路径处理不一致。
- **痛点 - Web UX**：Web 聊天 reload 丢失 prompt（#11517）与"Copy"按钮无效（#11418、#11529）影响操作信心。
- **满意**：社区对 `local_small` profile、effort-based 路由等本地-first 方向反响积极（#5287 👍 2）。

---

## 8. 待处理积压（维护者关注）

| 条目 | 创建时间 | 状态 | 风险 |
|---|---|---|---|
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 2026-04-04 | OPEN，in-progress | 高，影响本地-first 主轴 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 2026-06-09 | OPEN，accepted | 高，v0.8.6/v0.9.0 交付跟踪 |
| [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) | 2026-06-19 | OPEN，parking-lot | 高，路由策略待决策 |
| [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383) | 2026-06-27 | OPEN，in-progress | 中，仪表盘上下文缺失 |
| [#11526](https://github.com/zeroclaw-labs/zeroclaw/pull/11526) | 2026-10-04 | OPEN，XL，depends on #11187 | 高，能力边界修复规模大 |

---

**项目健康度小结**：活跃度高、PR 吞吐正常，但 P0 配置写入Bug 与多平台兼容性是当前最大风险点；建议今日优先合入 #11527、#11518、#11532 三个已审阅 PR，缓解数据安全与 CLI 可用性压力。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*