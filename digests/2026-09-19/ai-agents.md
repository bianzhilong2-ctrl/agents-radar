# OpenClaw 生态日报 2026-09-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-19 02:18 UTC

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

# OpenClaw 项目动态日报 —— 2026-09-19

---

## 1. 今日速览

OpenClaw 在过去 24 小时内取得了显著的开发活动，包括 **500 条 Issue 更新** 和 **500 条 PR 更新**，显示出项目的活跃度依然高涨。今日正式发布了新版本 **v2026.9.5**，主要聚焦于升级安全性、会话历史保留以及网关稳定性优化。社区讨论热烈，多位用户报告了影响性能和稳定性的关键 Bug，尤其是与 **内存泄漏**、**进程阻塞** 和 **数据库异常** 等相关的问题引发了广泛关注。同时，多个 WebUI 性能优化和插件加载改进的 PR 已进入合并阶段，推动项目向更稳定、更易用的方向发展。

---

## 2. 版本发布：v2026.9.5

### 更新内容：
- **更安全的升级机制**：Doctor 工具在完成升级时能正确处理非法的 retained 历史记录，避免因历史数据冲击导致网关反复重启或卡死的问题。
- **会话历史与修复状态保留**：修复过程中保留了用户的会话与重复性错误记录，有助于调试与恢复。
- **网关启动稳定性增强**：防止在网关仍在初始化时被意外终止，提升整体服务可用性。

### 链接：
🔗 [OpenClaw v2026.9.5 Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.9.5)

---

## 3. 项目进展

### 合并/关闭的重要 PR：

| PR 编号 | 类型 | 描述 | 链接 |
|---------|------|------|------|
| [#150898](https://github.com/openclaw/openclaw/pull/150898) | 🔧 Fix | 修复更新过程中 CLI 安装与网关服务绑定不同步的问题，避免运行中服务滞留旧代码。 | [link](https://github.com/openclaw/openclaw/pull/150898) |
| [#152337](https://github.com/openclaw/openclaw/pull/152337) | 🛠️ Improve | Doctor 不再加载已完成的插件迁移报告，减少 SQLite 数据传输开销。 | [link](https://github.com/openclaw/openclaw/pull/152337) |
| [#152341](https://github.com/openclaw/openclaw/pull/152341) | ⚙️ Refactor | 优化共享状态数据库 worker 超时逻辑，延长空闲时间至 30 分钟，降低频繁重启成本。 | [link](https://github.com/openclaw/openclaw/pull/152341) |

### 项目推进方向：
- 提升升级流程的一致性与可靠性
- 优化数据库操作性能，降低网关负载
- 增强长时间运行环境下的系统资源管理能力

---

## 4. 社区热点

### 最受关注 Issues：

| Issue | 评论数 | 👍 | 描述 | 链接 |
|-------|--------|----|------|------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | 1 | 存在僵尸进程泄露，影响运行效率 | [link](https://github.com/openclaw/openclaw/issues/97616) |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 26 | 1 | 网关内存泄露达数 GB，触发多次 OOM | [link](https://github.com/openclaw/openclaw/issues/91588) |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 19 | 0 | 网关就绪后无法响应请求，事件循环饥饿 | [link](https://github.com/openclaw/openclaw/issues/149538) |

### 热门 PR：
- [#152362](https://github.com/openclaw/openclaw/pull/152362) – 引入语义压缩判断逻辑，提升长文本摘要效果  
- [#152273](https://github.com/openclaw/openclaw/pull/152273) – 支持 macOS 与 Windows 上的 Crabbox 桌面工作节点  

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 关键 Bug：
- **[#149538](https://github.com/openclaw/openclaw/issues/149538)** – 网关就绪但无法提供服务，所有 `/health` 请求超时，疑似事件循环被阻塞。
- **[#143524](https://github.com/openclaw/openclaw/issues/143524)** – SQLite WAL 文件不断增长至上 GB，阻碍网关启动，目前仅通过手动 `wal_checkpoint` 清理临时解决。

### 🟠 P1 中级 Bug：
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** – 存在大量未被回收的子进程（僵尸进程），久而久之导致性能下降。
- **[#48003](https://github.com/openclaw/openclaw/issues/48003)** – Steer 模式无法在主会话回合中插入消息，影响交互体验。

### 🟡 P2 次级 Bug：
- **[#149361](https://github.com/openclaw/openclaw/issues/149361)** – WebUI 性能与稳定性问题汇总，涵盖桌面与移动端场景。

---

## 6. 功能请求与路线图信号

| 请求 | 状态 | 可能纳入计划 | 链接 |
|------|------|----------------|------|
| **[#9912](https://github.com/openclaw/openclaw/issues/9912)** – 添加 `maxTurns/maxToolCalls` 配置项控制代理迭代次数 |  open for discussion | ✅ 初步认可，有助于防止无限循环 | [link](https://github.com/openclaw/openclaw/issues/9912) |
| **[#9637](https://github.com/openclaw/openclaw/issues/9637)** – 禁用 TUI 中的 Emoji 与 Unicode 符号 |  开放 | ❌ 优先级较低，无紧急性 | [link](https://github.com/openclaw/openclaw/issues/9637) |
| **[#9986](https://github.com/openclaw/openclaw/issues/9986)** – 当上下文超出限制时自动触发模型回退 |  开放 | ⚠️ 待评估与设计 | [link](https://github.com/openclaw/openclaw/issues/9986) |

---

## 7. 用户反馈摘要

- **内存与性能问题**是当前最主要的痛点，多个用户在高负载环境下报告了网关内存飙升与服务中断的问题。
- **升级流程不稳定**，部分用户在从旧版本升级到 2026.9.x 时遇到数据库校验失败、插件加载异常等问题。
- **WebUI 与 TUI 使用体验有待提升**，部分用户在使用过程中遇到界面卡顿、滚动异常等现象。
- **部分渠道集成功能异常**，如 Discord 工具权限限制、Telegram 延迟响应等问题也引起了讨论。

---

## 8. 待处理积压

以下为长期未响应的重要 Issue，建议维护者关注：

| Issue | 最后活跃时间 | 分类 | 链接 |
|-------|----------------|------|------|
| [#77886](https://github.com/openclaw/openclaw/issues/77886) | 2026-05-05 | 功能请求 | [link](https://github.com/openclaw/openclaw/issues/77886) |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 2026-02-06 | 功能请求 | [link](https://github.com/openclaw/openclaw/issues/10687) |
| [#75380](https://github.com/openclaw/openclaw/issues/75380) | 2026-05-01 | Bug | [link](https://github.com/openclaw/openclaw/issues/75380) |

---

📝 *本日报基于 OpenClaw GitHub 数据整理，旨在帮助维护者与社区快速把握项目动态与优先级。欢迎提交补充与修正。*

---

## 横向生态对比

> 数据口径说明：以下按各日报摘要中的“过去 24h GitHub 

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 – 2026‑09‑19**  
*基于 GitHub 数据（过去 24 h：5 Issues、14 PR、0 个新版本）*

---

## 1. 今日速览
- 项目保持中等活跃度：今日新增 4 条活跃/新开 Issues，1 条 Issue 被关闭；PR 有 9 条仍在审查，5 条已合并/关闭。  
- 没有新版本发布，主要工作集中在 Bug 修复、移动端/WebUI 细节改进以及渠道特性（Discord/Telegram）的对齐。  
- 总体趋势：修复漏报的跨会话消息、持久化恢复、以及移动端点击失效等问题，项目健康度良好，未见重大回归或阻塞性缺陷。

## 2. 版本发布
> **无新版本**  
今日未有 Tag 发布，因此无需说明更新内容、破坏性变更或迁移注意事项。

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR # | 标题 | 类型 | 主要贡献 | 链接 |
|------|------|------|----------|------|
| #5812 | fix(agent): run explicit recovery continuations | bug / fix | 区分持续目标续执行与内部续执行，使显式的 WebUI 恢复续执行能够到达 Agent 循环处理器；增加了对恢复路径的回归测试。 | [HKUDS/nanobot PR #5812](https://github.com/HKUDS/nanobot/pull/5812) |
| #5810 | fix(webui): show all channels when only WebUI is enabled | bug / fix | 当只有 WebUI 启用时，频道设置页面不再把 WebUI 当作普通渠道，从而显示全部可配置渠道目录。 | [HKUDS/nanobot PR #5810](https://github.com/HKUDS/nanobot/pull/5810) |
| #5800 | feat(discord): add replyToMessage parity with Telegram | feature | 新增 `channels.discord.replyToMessage` 开关（默认关闭），实现对触发 Discord 消息的原生回复，保留显式回复目标并抑制提及；已在 locales 中暴露。 | [HKUDS/nanobot PR #5800](https://github.com/HKUDS/nanobot/pull/5800) |
| #5794 | fix: cross-session response delivery in agent loop | bug / fix | 修复因 Agent 循环 `_dispatch` 方法导致的跨会话响应错误（Session A 的回复错误出现在 Session B）。 | [HKUDS/nanobot PR #5794](https://github.com/HKUDS/nanobot/pull/5794) |
| #5495 | feat(channels): add native Linear agent channel | feature / documentation | 添加原生 Linear Agent 渠道（OAuth+PKCE、轮换令牌、持久化 SQLite 队列、WebUI 面板等）。虽历时较久，但今日终于合并，为后续集成奠定基础。 | [HKUDS/nanobot PR #5495](https://github.com/HKUDS/nanobot/pull/5495) |

> **合计**：今日合并/关闭的 5 条 PR 涵盖了核心循环恢复、WebUI 可用性、Discord 原生回复、跨会话消息正确性以及新渠道（Linear）的引入，推动了项目在稳定性和功能完整性方面的前进。

## 4. 社区热点
- **讨论最多的 Issue/PR**：所有当前 Issues 均仅有 0‑1 条评论，PR 的评论字段均为 `undefined`（即暂无评论）。因此今日未出现明显的评论热点或高反应数的议题。  
- **值得关注的活跃线程**：  
  - Issue #5798（回复串会话问题）已有 1 条评论，反映用户在多会话场景下遇到的困惑。  
  - Issue #5771（移动端会话列表需要两次点击）同样有 1 条评论，表明移动端可用性是社区关注点。

## 5. Bug 与定性（今日新报告 Bug，按严重程度排序）

| 严重度 | Issue # | 摘要 | 是否已有对应修复 PR | 链接 |
|--------|---------|------|--------------------|------|
| **高** | #5808 | WebUI follow‑up 在 `/stop` 后被取消，但持久化恢复日志保留，网关重启后会重新入队导致已取消的消息再次执行。 | ✅ PR #5809（discard stopped follow‑up recovery journal） | [#5808](https://github.com/HKUDS/nanobot/issues/5808) • [#5809](https://github.com/HKUDS/nanobot/pull/5809) |
| **高** | #5806 | Discord 运行时停止时未取消 `_working_emoji_tasks` 和 `_pending_reactions`，导致任务泄漏。 | ✅ PR #5807（fix discord: clean up reaction state on stop） | [#5806](https://github.com/HKUDS/nanobot/issues/5806) • [#5807](https://github.com/HKUDS/nanobot/pull/5807) |
| **中** | #5798 | 回复串会话：别的会话中的问题会串到不相干的会话中进行恢复。 | ❌ 尚未有直接修复 PR（可能与 #5794 相关，但尚未明确） | [#5798](https://github.com/HKUDS/nanobot/issues/5798) |
| **中** | #5771 | WebUI 移动端会话列表第一次点击无效，需要第二次点击才能打开会话。 | ❌ 尚未有直接修复 PR（相关 UI 改动见 #5805，但未完全对应） | [#5771](https://github.com/HKUDS/nanobot/issues/5771) |
| **低** | #1663 (已关闭) | Discord 添加 `replyToMessage` 与 Telegram 平等。 | ✅ 已通过 PR #5800 实现并关闭 | [#1663](https://github.com/HKUDS/nanobot/issues/1663) • [#5800](https://github.com/HKUDS/nanobot/pull/5800) |

> **总结**：今日报告的两个高严重性 Bug 已有对应修复 PR 在审查中（均已合并或即将合并），表明项目对关键稳定性问题的响应及时。

## 6. 功能请求与路线图信号
- **Discord 原生回复（replyToMessage）**：Issue #1663 已关闭，功能由 PR #5800 实现；这表明项目正在努力让各渠道的特性保持平等（Telegram 已有）。后续可能会在其他渠道（如 Slack、Microsoft Teams）推送类似功能。  
- **Linear 原生 Agent 通道**：尽管 PR #5495 已经合并，但该渠道仍处于早期采纳阶段；后续可能会出现针对该渠道的使用报告或改进需求。  
- **移动端/WebUI 细节改进**：#5771、#5805 等指出触摸响应和列表交互的优化点，暗示路线图中仍有 “移动端可用性” 的改进项。  
- **可选的执行防护（Jev shell safeguard）**：PR #5815 提出可选的 `tools.exec.gevGuard`（基于 OpenRouter Decisions API），如果社区对安全执行有需求，该特性可能进入下一版本的可选功能列表。

## 7. 用户反馈摘要（从 Issues 评论提炼）
- **#5798 评论（wowowowowowowowonojieba）**：用户描述了在多会话切换时，错误的回复会出现在错误的会话中，且在 0.3.0 版本不存在此问题。这表明回归对长期用户体验影响显著。  
- **#5771 评论（morandot）**：移动端用户反馈侧边栏会话列表“卡顿”，第一次点击没有视觉反馈，需要第二次点击才能打开会话，导致使用感受不佳。  
- 其余 Issues 暂无评论，表明要么是刚刚报告（尚未引起讨论），要么是技术性问题尚未被用户广泛触发。

## 8. 待处理积压（长期未响应的重要 Issue/PR）
- **#5798**（跨会话回复串） – 虽然是新 Issue，但涉及核心会话隔离，若不及时修复可能影响大量多会话用户；建议优先审查并关联现有修复（如 #5794）。  
- **#5771**（移动端会话列表双击问题） – 已有相关 UI 改动 PR #5805，但尚未明确解决该具体症状；建议维护者确认 #5805 是否已覆盖此问题，否则开放专门修复。  
- **长期未合并的功能型 PR**：目前所有 PR 均在最近 24 h 内活跃，暂无超过数天未响应的大型功能 PR。若未来出现搁置，应关注缺乏评论或审查者的情况。  

--- 

**整体评价**：今日 NanoBot 社区聚焦于修复关键的会话隔离与持久化恢复问题，并在移动端及跨渠道特性上持续打磨。已有对应的修复 PR 在流程中，项目健康度良好，短期内有望提升稳定性和用户体验。建议维护者优先审查并合并 #5809、#5807 两个高危 Bug 的修复，并关注 #5798、#5771 的后续跟进。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

 # PicoClaw 项目动态日报

**报告日期：** 2026-09-19（数据覆盖：过去 24 小时）
**数据来源：** github.com/sipeed/picoclaw

---

## 1. 今日速览

过去 24 小时 PicoClaw 项目保持稳定但偏中低强度的开发节奏：共 1 条 Issue 更新、4 条 PR 更新，其中 1 条 PR 被关闭（#1349，QQ 渠道附件能力扩展），3 条 PR 仍处于待合并状态，无新版本发布。值得关注的是，当前所有活跃 PR 均在昨日（9 月 18 日）有更新动作，说明维护方与贡献者正在持续沟通。社区层面最受关注的是飞书（Feishu）连接报错的 Issue #3355，该问题已持续近三周并带有 [stale] 标记，但作者已在评论中给出解决方案，讨论热度不高。整体来看，项目处于**正常的迭代缓冲期**，无紧急回归或阻塞性事件。

---

## 2. 版本发布

**无新版本发布。**

过去 24 小时未检测到新的 Release 或 Tag 推送。当前最新版本仍为实验性构建 `picoclaw nightly-50-gbbf6893c`（来自 Issue #3355 中用户反馈的环境信息）。

---

## 3. 项目进展

### 合并/关闭的 PR

#### [#1349 [CLOSED] feat(qq): support parsing and replying to more attachment types](https://github.com/sipeed/picoclaw/issues/1349)
- **作者：** aishannon ｜ **创建：** 2026-03-11 ｜ **关闭：** 2026-09-18
- **类型：** 增强（enhancement），领域：渠道/Go
- **摘要：** 该 PR 为 QQ 渠道带来了完整的富媒体消息支持，包括：
  1. 解析 QQ 频道的 emoji 结构；
  2. 支持接收语音、图片、视频和文件消息；
  3. 支持回复本地语音、图片、视频和文件附件（发送前自动上传）；
  4. 回复时优先使用 Markdown 消息，失败后降级到普通文本。
- **评估：** 该 PR 从创建到关闭经历了约 6 个月，属于长期开发分支。若最终被合并，将显著增强 PicoClaw 的 QQ 渠道多模态交互能力，使其在群聊/频道场景下更具实用性。不过由于数据上仅标注 [CLOSED] 而非明确的 [MERGED]，无法完全确认其是否被纳入主干，建议维护者核实。

### 本轮 PR 的净影响

- 活跃 PR 池：4 条 → 3 条（净减 1，因 #1349 关闭）
- 待合并候选：3 条（#3347、#3371、#3222——均在过去 24 小时有动态，说明维护者正在审阅）

---

## 4. 社区热点

#### [#3355 [OPEN] [stale] [BUG] 连接飞书报错-附解决方案（config.json contains unknown field(s): channel_list.feishu.app_id）](https://github.com/sipeed/picoclaw/issues/3355)
- **作者：** ttghub ｜ **创建：** 2026-09-01 ｜ **更新：** 2026-09-18 ｜ **评论：** 2
- **热度分析：** 本条是昨日唯一带有用户评论的 Issue，虽被贴上 [stale] 标签（系统判定长期无维护者响应），但作者已主动在标题中标注"附解决方案"，更新日期显示 9 月 18 日仍有交互。
- **诉求拆解：**
  - 用户运行 `nightly-50-gbbf6893c` 版本，配置飞书渠道时遇到配置校验失败，错误指向 `channel_list.feishu.app_id` 字段不被识别；
  - 核心矛盾在于**配置文件字段名与程序内部 JSON schema 不一致**，推测是近期重构（或渠道代码更新）导致字段被重命名/删除，但迁移文档未同步；
  - 用户已给出解决方案但仍未关闭 Issue，暗示 `[stale]` 标记可能让问题未进入维护者视野。
- **建议：** 维护者应确认该问题的正确处理方式，并将修复内容反映到配置模板或文档中，避免更多用户踩坑。

---

## 5. Bug 与稳定性

按严重程度降序排列：

| 严重程度 | Issue / PR | 状态 | 问题描述 | 是否有修复 PR |
|---------|-----------|------|---------|-------------|
| 中 | [#3355 - 飞书渠道配置校验失败](https://github.com/sipeed/picoclaw/issues/3355) | 待维护者确认 | 配置文件中 `channel_list.feishu.app_id` 字段被拒绝，导致飞书渠道无法启用。影响面限飞书用户，但会阻断该渠道完整体验。 | 暂无，用户已在 Issue 中提供 workaround |
| 中 | [#3347 - Web UI 卡顿](https://github.com/sipeed/picoclaw/pull/3347) | 修复 PR 待合入 | 聊天消息过多时 Web UI 出现明显卡顿；贡献者 iMilnb 已修复并在桌面端和移动端（Brave 浏览器）完成自测。 | ✅ 本 PR 即修复方案 |
| 低 | 无新崩溃/回归报告 | — | 昨日无新增 panic、crash 或回归类 Issue。 | — |

**分析：** 没有发现 P0/P1 级别的崩溃或安全漏洞。Web UI 性能问题已有了现成补丁（#3347），需要维护者尽快触发 code review 并合入，以改善大规模聊天记录场景下的用户体验。

---

## 6. 功能请求与路线图信号

过去 24 小时的活跃 PR 中隐含了如下功能方向信号：

#### ① 新增 OpenCode Go 模型提供商支持（高优先级信号）
- **PR：** [#3371 [stale] feat(providers): add opencode-go provider with session header support](https://github.com/sipeed/picoclaw/pull/3371)
- **内容：** 新增独立的 `opencode-go` provider（endpoint: `https://opencode.ai/zen/go/v1`），按模型 ID 自动路由到正确的 endpoint 族，并在请求头中携带 `x-opencode-session` 与会话上下文。
- **信号解读：** 说明用户对 OpenCode Go 这类**新一代模型聚合/网关服务**有明确接入需求，且希望对话会话能跨请求保持。对 PicoClaw 的"多提供商接入"路线图有直接补位价值。

#### ② DeltaChat 渠道重构收尾（中优先级）
- **PR：** [#3222 [OPEN] refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)
- **内容：** 大规模精简 DeltaChat 实现（净减约 200 行）：
  - 删除遗留特性、回退逻辑和过时测试；
  - 改用官方中继列表网站（替代硬编码副本）；
  - 移除基于密码的邮箱配置，改为 secrets 走 JSON-RPC；
  - 将 `invite_link` 重命名为 `join_invite_link` 并新增 `show_invite_link`，补全文档。
- **信号解读：** 该 PR 持续跟进中（7 月 3 日创建），属于**架构清理类**工作，标志 DeltaChat 渠道正从"能跑"走向"规范化"。合并后可降低维护成本。

#### ③ QQ 渠道富媒体支持（已关闭，见第 3 节）

**路线图综合判断：** 下一版本可能同时收纳「OpenCode Go 提供商」「DeltaChat 重构」「Web UI 性能修复」三个方向的改动；QQ 富媒体的未来取决于 #1349 的重开或合入情况。

---

## 7. 用户反馈摘要

以下内容提炼自 Issue #3355 及其评论：

- **真实痛点（核心诉求）：**
  - 配置校验器过严——用户按文档填写飞书 `app_id` 时，`config.json` 直接报 `unknown field` 错误，说明配置文件 schema 与程序代码不同步；
  - 夜间版（nightly）体验不稳定——用户当前版本为 `nightly-50-gbbf6893c`，存在未发布补丁的中间状态，普通用户难以判断问题是配置错误还是程序 bug；
  - 报错信息不友好——错误信息仅提示字段未知，未提示替代字段名或识别为 schema 变更，对非资深用户极不友好。

- **满意度侧面：** 用户对项目本身仍然有较高参与度（主动附上解决方案而非弃坑），但 [stale] 标签暗示**维护者响应不及时**的问题已开始被社区感知。

- **使用场景画像：** 报告用户为自托管/自编译部署者，倾向于使用最新的 nightly 构建以尝试新渠道功能（飞书、QQ 等），对文档与代码一致性要求较高。

---

## 8. 待处理积压

以下为长期未解决或需要维护者关注的重要项目：

| 时间 | 类型 | 编号与标题 | 置留时长 | 风险等级 | 说明 |
|------|-----|-----------|---------|---------|------|
| 2026-07-03 | PR | [#3222 DeltaChat 重构](https://github.com/sipeed/picoclaw/pull/3222) | > 2.5 个月 | 🟡 中 | 大 refactor，长期未合入，存在与主干冲突风险；建议确认维护者意向并推进 code review |
| 2026-09-08 | PR | [#3371 OpenCode Go provider](https://github.com/sipeed/picoclaw/pull/3371) | 11 天（已 stale） | 🟡 中 | 功能性新增，被自动标记 stale，需人工确认是否接受 |
| 2026-09-01 | Issue | [#3355 飞书配置报错](https://github.com/sipeed/picoclaw/issues/3355) | 18 天（已 stale） | 🟡 中 | 用户已附解决方案，只需维护者确认修复归属或直接关闭 |
| 2026-08-27 | PR | [#3347 Web UI 卡顿修复](https://github.com/sipeed/picoclaw/pull/3347) | 23 天 | 🔴 高 | 修复已就绪且作者已完成自测，久拖不决会加速分支漂移；属高性价比合并对象 |

**维护者行动建议：**
1. 优先处理 #3347（现成修复 + 低风险，利于社区士气）；
2. 审阅 #3222 的 DeltaChat 重构意向，若接受则尽快解决冲突，否则明确关闭；
3. 将 #3355 的问题归口到配置模块的 schema 测试，防止同类问题（如 QQ、飞书等字段漂移）再次发生。

---

*本报告基于公开 GitHub 数据生成，所有链接均可直接访问；如无特殊说明，统计数据截至 2026-09-19 数据获取时间。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – 项目每日报告 (2026‑09‑19)**  

---

### 1. 今日速览  
- 过去 24 小时 **7 条新开 Issue**（全部保持 OPEN 状态），**5 条未合并 PR**。  
- 无新版本发布，项目处于 **持续迭代、问题积压** 的阶段。  
- 最近的活跃 Issue 与 PR 主要围绕 **存储增长、OOM 稳定性、环境变量传递、命令行校验** 与 **Slack 令牌管理**，表明社区对 **系统可靠性** 与 **可配置性** 的迫切需求。  

---

### 2. 版本发布  
- **无新版本发布**（`New releases: 0`）。  

---

### 3. 项目进展  
| PR | 关键变更 | 推进的功能/修复 | 状态 |
|----|----------|----------------|------|
| **#3741** | `--fresh-session` 参数加入调度任务 | 为调度系列任务提供 **无状态** 运行能力，避免每日重读历史对话导致的性能回退 | **OPEN** |
| **#3852** | Slack 令牌在直接模式下 **提前旋转** | 解决令牌 12 h 失效后直接模式调用失败的问题 | **OPEN** |
| **#3851** | `Responses` 传输层 **可配置**（支持 HTTP SSE 替代 WebSocket） | 提升在代理/防火墙环境下的可靠性 | **OPEN** |
| **#3850** | 修复 **HTTP SSE** 传输的实现 | 稳定长连接消息推送，防止代理导致的超时 | **OPEN** |
| **#3420** | 将 Swift 状态栏标签 **slug‑aware**（兼容新安装标签） | 修复 macOS 状态栏未能正确显示的 bug | **OPEN** |

> **整体向前迈进**：本轮 PR 主要聚焦 **稳定性（SSE  transport、Slack 令牌）**、**可配置性（Responses transport、CLI 参数）**，以及 **macOS 客户端改进**，为即将发布的 2.4 版本奠定基础。  

---

### 4. 社区热点  
| 编号 | 标题 | 链接 | 关注度 (评论/👍) | 核心诉求 |
|------|------|------|----------------|----------|
| **#3716** | *PreCompact conversation‑archive writes an unbounded, full‑rewrite file per firing — real cause of a production OOM crash loop* | <https://github.com/qwibitai/nanoclaw/issues/3716> | 3 评论 / 0 👍 | **严重稳定性**：每次 `PreCompact` 产生全新、完整的对话快照文件，导致磁盘瞬时占满并触发 OOM 循环。 |
| **#3735** | *conversations/ archives grow without bound — no retention, no cap* | <https://github.com/qwibitai/nanoclaw/issues/3735> | 3 评论 / 0 👍 | **长期存储**：`archiveTranscriptFile()` 每次 compaction 都写入新的 markdown 存档，目录在群组生命周期内无限增长。 |

> 这两条 Issue 获得最高评论量，反映出社区对 **数据清理机制** 与 **资源回收** 的强烈需求。  

---

### 5. Bug 与稳定性  
| 编号 | 影响 | 严重程度 | 是否已有 Fix PR |
|------|------|----------|-----------------|
| **#3716** | OOM  crash loop（全量对话快照） | **高** | 否 |
| **#3455** | Watchdog 误判忙碌为“卡死”，永久阻塞回复 | **高** | 否 |
| **#3735** | 存档目录无限增长，磁盘耗尽风险 | **中** | 否 |
| **#3714** | 环境变量（auto‑compact、transcript rotation）未传递至会话容器 | **中** | 否 |
| **#3855** | `groups config update --model <any>` 缺乏校验，接受任意字符 | **低** | 否 |
| **#3854** | `CLAUDE.md` 编辑在容器启动时被 silently 丢弃 | **低** | 否 |
| **#3853** | 文档缺失 `ncl table` 中的 `policies`、`messaging-groups send`、`sessions history` | **低** | 否 |

> **关键痛点**：OOM 与 watchdog 导致的 **系统不可用** 与 **持久性存储泄漏** 仍未得到官方修复，需优先处理。  

---

### 6. 功能请求与路线图信号  
| Issue/PR | 需求描述 | 与现有 PR 的关联 | 可能纳入下一版本 |
|----------|----------|------------------|-------------------|
| **#3855** | 对 `groups config update --model` 加入 **合法模型白名单校验** 与可发现性 | 与 **#3854**（发现有效模型）相呼应 | **高** – 直接提升配置安全性，已有 PR 思路可复用 |
| **#3854** | 让 `groups restart` 能感知 `CLAUDE.md` 手动编辑并提示 | 与 **#3853**（文档缺失）一起提升运维可观测性 | **中** – 可能在 2.4 版本的 “运维改进” 模块中实现 |
| **#3741** | 为调度任务加入 **`--fresh-session`** 选项，实现 **无状态** 执行 | 与 **#3851/#3850**（可配置 transport）同属 **可靠性/资源** 范畴 | **高** – 直接解决“每日任务成本上升”痛点 |
| **#3852** | Slack 令牌 **提前旋转**，实现自动刷新 | 与 **#3851**（Response transport 可配置）共同提升 **外部服务可靠性** | **中** – 已在实现中，预计 2.4 发布前完成 |

> 综合来看，**数据清理、模型校验、令牌管理、无状态调度** 为本轮迭代的重点方向。  

---

### 7. 用户反馈摘要  
- **存储膨胀**：多位用户（#3735、#3716）报告 **archives / conversation 目录无限增长**，导致磁盘耗尽与 OOM，期待 **自动清理/旋转策略**。  
- **崩溃与稳定性**：#3716 与 #3455 的 crash loop 与误杀 watchdog 让生产环境 **不可用**，用户强调需要 **防御性检查** 与 **健壮的回收机制**。  
- **配置与可观测性**：#3714 与 #3854 反映 **环境变量/文件编辑被静默丢弃**，用户希望 **明确的错误提示** 与 **跨容器传递**。  
- **文档缺失**：#3853 表明 **CLI 表格与实际功能不匹配**，用户对 **文档同步** 表示失望。  

---

### 8. 待处理积压  
| 编号 | 类型 | 最近更新 | 关注点 | 链接 |
|------|------|----------|--------|------|
| **#3455** | Bug（watchdog 误杀） | 2026‑09‑18 | 长期未解决，影响所有会话 | <https://github.com/qwibitai/nanoclaw/issues/3455> |
| **#3716** | Bug（OOM crash） | 2026‑09‑18 | 高严重性，已有 3 条评论 | <https://github.com/qwibitai/nanoclaw/issues/3716> |
| **#3735** | Bug（存档增长） | 2026‑09‑18 | 影响 fleet 规模化部署 | <https://github.com/qwibitai/nanoclaw/issues/3735> |
| **#3855** | Bug（模型参数校验） | 2026‑09‑19 | 新开，尚未讨论 | <https://github.com/qwibitai/nanoclaw/issues/3855> |
| **#3854** | Bug（CLAUDE.md 静默丢弃） | 2026‑09‑19 | 影响运维可观测性 | <https://github.com/qwibitai/nanoclaw/issues/3854> |
| **PR #3420** | Feature（macOS 状态栏 slug‑aware） | 2026‑09‑18 | 仍未合并，涉及平台兼容性 | <https://github.com/qwibitai/nanoclaw/pull/3420> |
| **PR #3741** | Feature（`--fresh-session`） | 2026‑09‑18 | 关键调度改进，仍待审查 | <https://github.com/qwibitai/nanoclaw/pull/3741> |

> **提醒**：维护者应优先审查 **#3455** 与 **#3716**，因为它们直接导致 **生产不可用**；随后关注 **#3855/3854**（新缺陷）以及 **PR #3741**（ fresh‑session）以确保下一版本的功能完整性。  

---  

**结论**：项目在本报告日呈现 **积极的代码提交节奏**（5 条 PR）但 **关键稳定性 Bug 仍未解决**，用户对 **存储管理、模型校验、令牌刷新** 与 **文档同步** 的需求迫切。建议在本周内完成 **#3716** 与 **#3455** 的根因分析并提供修复 PR，以提升整体系统可靠性，为即将发布的 2.4 版本打下坚实基础。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### IronClaw 项目动态日报 — 2026-09-19

---

#### 1. **今日速览**

IronClaw 在过去 24 小时内保持中等活跃度，新增 1 个 issue 及 2 个待合并的 PR，未发布新版本。项目聚焦于 LLM 请求控制优化、扩展服务适配器修复以及 Reborn 存储路径标准化等方向。社区参与度一般，核心贡献者仍主导开发节奏。

---

#### 2. **版本发布**

无新版本发布。

---

#### 3. **项目进展**

- **PR #8102**: 修复了管理员通过 Web UI 配置 Google OAuth 客户端时，Gmail/日历扩展无法激活的问题。该问题源于 provider 实例就绪性判断逻辑缺陷，当前 PR 引入了基于管理员配置优先级的实时检测机制。  
  - 链接：[PR #8102](https://github.com/nearai/ironclaw/pull/8102)

- **PR #7456**: 重构 Reborn 的存储结构为与 profile 无关的路径布局，提升系统重启场景下的隔离性与一致性。同时新增类型化安全信封（security envelope），防止 profile 切换引发租户或工作区权限降级。  
  - 链接：[PR #7456](https://github.com/nearai/ironclaw/pull/7456)

---

#### 4. **社区热点**

- **Issue #7537**: 聚焦于为 LLM 请求路径添加“思考力控制”功能，允许按请求或默认模型设置思维深度，并映射到各 Provider 的原生参数（如 DeepSeek）。  
  - 链接：[Issue #7537](https://github.com/nearai/ironclaw/issues/7537)  
  - 背后诉求是提升推理类任务的灵活性与平台一致性，尤其在 DeepSeek V4 Flash 等新模型上暴露出该需求。

---

#### 5. **Bug 与稳定性**

- **Bug（PR #8102）**: Google OAuth 扩展激活失败，影响通过 Web UI 配置的部署环境。  
  - 严重性：中等  
  - 当前状态：有对应 PR 修复中

- **存储路径耦合问题（PR #7456）**: Reborn profile 切换可能导致状态污染或隔离性下降。  
  - 严重性：中高  
  - 当前状态：有 PR 恰当重构中

---

#### 6. **功能请求与路线图信号**

- 来自 Issue #7537 的功能请求：通用思考力控制模块，有望成为下一版本重点支持内容，尤其是对于推理型大模型集成场景。  
  - 链接：[Issue #7537](https://github.com/nearai/ironclaw/issues/7537)

---

#### 7. **用户反馈摘要**

暂无直接来自用户的评论内容，但 Issue #7537 表明开发者希望构建更贴近底层模型行为的抽象接口，以适配多样化的推理策略。

---

#### 8. **待处理积压**

- **PR #7456**（创建于 2026-08-10）长时间处于待合并状态，涉及核心模块变更，建议尽快评审以避免冲突积累。  
  - 链接：[PR #7456](https://github.com/nearai/ironclaw/pull/7456)

- **Issue #7537**（创建于 2026-08-12）相关功能尚未落地，缺少明确时间规划，或需同步 roadmap。  
  - 链接：[Issue #7537](https://github.com/nearai/ironclaw/issues/7537)

--- 

> 数据来源：[nearai/ironclaw GitHub](https://github.com/nearai/ironclaw)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 - 2026-09-19

## 1. 今日速览

2026年9月19日，LobsterAI 项目保持了相对稳定的运行状态，当天共有 6 条新 Issue 更新且 22 条 Pull Request 提交。项目重点聚焦于插件同步完整性、认证流转、API 调用限制以及构建可靠性等关键领域。整体来看，项目持续进行技术债务偿还和功能迭代，但仍存在若干需要优先解决的稳定性问题。

## 2. 版本发布

**无新版本发布**。截至 2026-09-19，当前版本仍停留在 `release/2026.9.18`（对应 PR #2715）。项目未发布新版本，所有更新均以 PR 形式累积，反映出团队对当前稳定版的持续维护。

## 3. 项目进展

本日重点推进了以下关键改进：

- **#2719**（OpenCLAW 启动残留修复）：修复旧版本构建残留导致启动失败的问题，通过升级过的数据恢复到启动时不再抛出错误，确保每次启动都能平稳进入运行状态。
- **#2716**（Cowork 模型模式扩展）：新增 Auto 模式自动选择合适模型，Max 模式支持用户指定最强模型进行对话，提升交互灵活性。
- **#2714**（付费内容生成防护）：在媒体生成流程中加入用户意图检查，防止未经用户指令就触发付费图像/视频生成，降低意外消费风险。
- **#2711**（SKILL.md YAML 验证）：增强对第三方技能文件的 YAML 前置格式校验，当前无效 YAML 会导致版本缺失，改进后可避免此类隐式错误。
- **#2709**（Windows SQLite 降级处理）：在 Windows 平台上提供私有 SQLite 目录创建失败的回退方案，防止因权限或环境限制导致的构建中断。
- **#2708/#2707**（网关重启逻辑优化）：完善配置驱动下的网关重启预算管理，确保在稳定窗口后不会无限重启，提升服务可用性。

这些 PR 共同推动了项目在稳定性、功能丰富性和跨平台兼容性方面的整体进步。

## 4. 社区热点

### 热门 Issue

| Issue ID | 标题 | 状态 | 评论数 | 关键问题 |
|----------|------|------|--------|----------|
| #2654 | fix(user_plugins): persist hooks field in syncToDisk | OPEN | 2 | 网关重启后 hooks 配置丢失，需在 user_plugins 表中增加 hooks 字段 |
| #1016 | 使用网易员工登录方式登录后状态未下发 | OPEN | 1 | 点击登录后客户端未收到 auth token，导致未登录状态 |
| #1023 | Xunfei API 输入 Token 超限 (10012) | OPEN | 1 | 引擎设置 Token 限制超过 90,000，建议增加参数自定义 |
| #1025 | 内网 npm registry 不可达导致构建卡死 | OPEN | 1 | `scripts/ensure-openclaw-plugins.cjs` 尝试从 `npm.nie.netease.com` 安装插件，导致 5 分钟超时 |

### 热门 PR

- **#2719**（修复启动残留）：解决旧版本构建残留导致的启动失败
- **#2716**（Cowork 模型模式）：新增 Auto 与 Max 两种模型交互模式
- **#2714**（付费内容防护）：在媒体生成前检查用户意图
- **#2711**（SKILL.md 验证）：增强第三方技能文件的 YAML 校验

这些 Issue 和 PR 反映了用户在认证流转、API 调用限制、构建可靠性等方面的高频关注点。

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | 问题 | 描述 | 是否已修复 |
|----------|------|------|------------|
| 🔴 高危 | #1016 - 登录状态未下发 | 网易员工登录后客户端未收到 auth token，用户无法正常使用 | ❌ 未修复 |
| 🔴 高危 | #1025 - 构建卡死 | 外部开发者因内网 npm registry 不可达，构建过程卡住 5 分钟 | ❌ 未修复 |
| 🟠 中危 | #1023 - Xunfei API Token 超限 | 引擎 Token 限制超过 90,000，导致 API 调用失败 | ❌ 未修复 |
| 🟡 中危 | #2654 - hooks 丢失 | 网关重启后 hooks 配置在 syncToDisk 中被丢弃 | ⏳ 待修复 (PR #2719 正在推进) |
| 🟢 低危 | #2712 - 技能重复 | 重新导入同一技能时会产生多个副本，原有版本被覆盖 | ⏳ 待修复 (PR #2712 已提交) |

目前，#1016、#1023、#1025 三个高危 Bug 尚未得到修复，属于当前项目的主要关注点。#2654、#1023、#2712 等中危问题也需要优先处理。

## 6. 功能请求与路线图信号

- **模型模式扩展**：#2716 引入 Auto（自动选模型）和 Max（用户指定最强模型）两种模式，为用户提供更灵活的交互方式，符合“个性化体验”路线。
- **付费内容防护**：#2714 通过意图检查防止未经授权生成付费图像/视频，体现对商业价值的保护。
- **技能管理优化**：#2712 解决重新导入时的技能重复问题，#2709 提供 Windows 平台上的 SQLite 降级方案，提升跨平台稳定性。
- **API 限制适配**：#1023 提示需调整 Xunfei 引擎的 Token 限制，未来可考虑动态调整或提供配置选项。

这些需求表明项目正朝着更健壮、更用户友好的方向发展，特别是在安全性、体验和跨平台兼容性方面。

## 7. 用户反馈摘要

从 Issue 评论中提取的用户痛点：

- **登录体验**：用户反复报告网易员工登录后客户端未收到 auth token，导致“点击登录后仍未登录”的困扰，这是核心痛点之一。
- **构建可靠性**：外部开发者因内网 npm registry 不可达而遇到 5 分钟卡死，影响项目协作效率。
- **API 调用限制**：Xunfei API 频繁超限，用户感知到系统资源控制较为严格。
- **技能管理**：重新导入技能时容易产生重复副本，影响工作流顺畅度。
- **性能与稳定性**：部分 Issue 暗示项目在跨平台（尤其是 macOS）上的路径处理存在问题。

总体而言，用户对项目的稳定性和功能完整性有较高期待，同时对构建流程的可靠性和认证流转的透明度提出了明确需求。

## 8. 待处理积压

以下 Issue 和 PR 长期未响应，建议优先关注：

1. **#1016**（登录状态未下发）- 影响用户核心功能，需尽快修复
2. **#1023**（Xunfei API Token 超限）- 影响外部集成，需评估 API 限制调整方案
3. **#1025**（构建卡死）- 阻碍外部开发者贡献，需优化内网 registry 访问逻辑
4. **#2654**（hooks 丢失）- 已有 PR #2719 正在推进，预计将在本周内完成
5. **#2712**（技能重复）- 已提交 PR，需跟进合并状态

建议维护团队优先解决 #1016 和 #1025 两个高危 Bug，同时跟进 #2654 的修复进度，确保用户体验和构建可靠性的双重保障。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**报告日期：2026-09-19**

---

### 1. 今日速览
今日 Moltis 项目整体活跃度处于中等偏低水平，社区讨论呈现静默状态。过去24小时内，项目未收到任何新的 Issues 报告或评论，也无新版本发布。开发侧共有2条 Pull Request 处于待合并状态，其中包含一条核心功能适配与一条依赖项自动更新。项目当前处于代码等待审查与合并的积压阶段，未出现紧急的安全或崩溃响应需求，整体运行平稳但推进节奏偏缓。

### 2. 版本发布
*无新版本发布。*

### 3. 项目进展
今日无已合并或关闭的 PR，但有2条关键 PR 待审查，项目整体处于功能完善与依赖维护的储备阶段：
*   **[PR #1276 - Add Groq as OpenAI-compatible provider + fix empty-required strict schemas](https://github.com/moltis-org/moltis/pull/1276)**：核心功能推进 PR。将 Groq 注册为一等 OpenAI 兼容提供程序，修复了此前因回退机制导致的工具 schema 丢失及模型 ID 路由错乱问题。
*   **[PR #1275 - chore(deps): bump smol-toml from 1.7.0 to 1.8.0](https://github.com/moltis-org/moltis/pull/1275)**：依赖维护 PR。由 Dependabot 自动发起，更新 `/docs` 目录下的 `smol-toml` 依赖版本，保障文档生成模块的依赖健康。

### 4. 社区热点
今日社区无新增讨论热点，但基于现有 PR 的技术指向性，焦点集中于：
*   **[PR #1276 (Add Groq as OpenAI-compatible provider)](https://github.com/moltis-org/moltis/pull/1276)**：该 PR 是今日最显著的技术动态。它直击 Groq 聊天不可用的痛点，反映出用户对多提供商生态支持（尤其是高速推理引擎）的强烈诉求。尽管目前点赞和评论数为0，但其修复的 schema 问题触及工具调用核心体验，预计在合并后将迅速成为社区关注焦点。

### 5. Bug 与稳定性
今日未收到新的 Bug 报告或崩溃问题。值得注意的是，当前存在一个已被识别且有修复 PR 的稳定性隐患：
*   **Groq 提供商工具 schema 丢失与路由错乱**：由于 Groq 未在 `OPENAI_COMPAT_PROVIDERS` 中，系统回退至 genai fallback，导致丢弃所有工具 schema 并破坏模型-id 路由。此问题已被 [PR #1276](https://github.com/moltis-org/moltis/pull/1276) 标记为修复项，待合并后即可消除该稳定性隐患。

### 6. 功能请求与路线图信号
结合当前 PR 数据，项目路线图信号明确指向**多提供商深度适配与工具调用严谨性强化**：
*   **多提供商生态扩展**：[PR #1276](https://github.com/moltis-org/moltis/pull/1276) 将 Groq 作为一等公民提供商加入，表明项目正在积极扩展对新兴高速推理引擎的支持，此类底层架构完善极可能在下一版本中成为标准特性。
*   **Schema 严格校验**：修复空 required 严格 schemas 的诉求，说明项目路线图正在强化 AI 工具调用的严谨性，确保不同提供商的接口规范性。

### 7. 用户反馈摘要
今日无直接的用户 Issues 评论可供提炼。但从 [PR #1276](https://github.com/moltis-org/moltis/pull/1276) 的上下文可推断出真实用户痛点：
*   **核心痛点**：用户在使用 Groq 时遭遇“工具 schema 丢失”和“模型 ID 路由错乱”，导致工作流直接中断。
*   **使用场景**：用户尝试通过 Groq 进行带工具调用的复杂 AI 任务，但因兼容层容错能力不足而失败。
*   **满意/不满意**：用户对 Groq 本身的推理能力满意，但对当前 Moltis 框架的提供商适配机制（回退逻辑粗暴、schema 丢弃）不满意，亟需框架层提供原生级别的支持。

### 8. 待处理积压
当前无长期未响应的重要 Issue，但存在需要维护者优先关注的 PR 积压：
*   **[PR #1276 (Add Groq as OpenAI-compatible provider)](https://github.com/moltis-org/moltis/pull/1276)**：此 PR 涉及核心 AI 工具调用逻辑的修复与提供商扩展，对提升产品可用性至关重要，建议维护者优先审查并尽快合并。
*   **[PR #1275 (bump smol-toml)](https://github.com/moltis-org/moltis/pull/1275)**：常规依赖升级，需确保测试通过后及时合并，以保持文档模块的依赖健康。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 - 2026-09-19

## 1. 今日速览

2026年9月19日，CoPaw 项目继续保持活跃的开发节奏。当日过去 24 小时共有 25 条 Issue 更新（17 条新建/活跃，8 条已关闭），50 条 PR 更新（33 条待合并，17 条已合并/关闭），并发布了新版本 **v2.2.2-beta.1**。整体项目状态良好，平台正朝着更稳定、更安全的方向发展，但也面临若干关键 Bug 需要优先处理。

## 2. 版本发布

**v2.2.2-beta.1** 已于 2026-09-18 发布，是本次迭代的核心版本。主要更新内容包括：

- **工具结果系统优化**：改进分组聊天历史记录，统一 ReMe 斜杠命令，准备为 2.2.0 引入多租户版 Hub。
- **安全加固**：针对 Prompt Injection 漏洞（#7859）和技能目录保护（#7864）进行修复，确保技能删除指令无法被恶意注入。
- **控制台 SSE 稳定性**：修复空值负载和流中断处理问题，增强 Stream 通道的健壮性。
- **性能优化**：驱动重载时的并发政策更新、文件区间标签缓存、工具结果单次发送等改进。

> 链接：[v2.2.2-beta.1 发布详情](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.1)

## 3. 项目进展

今日重点推进的 PR 包括：

| PR 编号 | 主题 | 状态 | 影响 |
|---------|------|------|------|
| #7874 | 添加 Creator 创建视频控制平面 | 开放 | 实现“创建视频”功能的公共 API，解决“空 Creator 项目”问题 |
| #7875 | 文档化 Creator 创建视频控制平面 | 开放 | 补充文档，明确控制平面规范 |
| #7873 | 修复 Scroll 高级回忆沙盒限制说明 | 开放 | 增加模型层面的解释，告知何时无法启用 Python 回忆 |
| #7872 | 修复 Scroll 续传请求跨压缩保留 | 开放 | 确保中断请求在后续压缩中不丢失指令 |
| #7871 | 修复工具输出截断绕过 | 开放 | 防止字面量 `<<<TRUNCATED>>>` 绕过长度限制 |
| #7870 | 稳定 Windows 单元测试 | 开放 | 修复哈希校验资产和 Uvicorn 重载问题 |
| #7211 | 防止注入上下文持久化 | 开放 | 阻止通过 HookContext 注入的上下文被视为用户对话历史 |
| #7864 | 保护技能目录免受提示注入删除 | 开放 | 增强 `FilePathToolGuardian` 防御机制 |
| #7854 | 修复驱动重载时的并发政策更新 | 开放 | 解决 `reload_driver` 读写分离导致的竞态条件 |

这些 PR 共同推动了 **Creator 视频功能落地**、**Scroll 流程完整性提升**、**安全加固** 三个核心方向的进展。

## 4. 社区热点

今日最活跃的讨论集中在以下 Issue 上：

- **#7853** [Bug] `ToolResultPruner` 跳过媒体块 → 导致 `view_image` 产生不可变 Base64 载荷，引发上下文窗口无限膨胀。这是当前最高优先级的稳定性问题，已提交 PR #7874 及相关修复。
- **#7859** [Bug] 持久提示注入 → 工具结果系统中会被重复执行的“删除所有技能”指令，属于安全漏洞，已提交 PR #7864 进行防护。
- **#7814** [Bug] Console SSE 空值负载与流中断处理 → 空 `null` 负载导致 SSE 事件无效，流中断时无错误日志，影响用户体验。
- **#7840** [Bug] 插件共享主事件循环 → 同步 I/O 调用会冻结整个实例，已提交 PR #7842 隔离同步钩子并添加事件循环监控。

这些热点反映了用户对 **稳定性、安全性和性能** 的核心诉求，尤其是在生产环境中，上下文溢出和安全漏洞是必须立即解决的问题。

## 5. Bug 与稳定性

按严重程度排序，当日报告的 Bug 情况如下：

| 优先级 | Issue | 描述 | 现状 |
|--------|-------|------|------|
| 🔴 最高 | #7853 | `ToolResultPruner` 忽略非文本块（如 `type="data"` 图片 Base64），导致上下文无限增长 | 已提交修复 PR #7874（控制平面设计）及相关代码调整 |
| 🔴 最高 | #7859 | 提示注入漏洞，工具结果系统会重复执行“删除所有技能”指令 | 已提交修复 PR #7864（技能目录防护） |
| 🟠 高 | #7840 | 插件同步访问主事件循环，同步 I/O 会冻结整个实例 | 已提交修复 PR #7842（事件循环隔离） |
| 🟠 高 | #7838 | `recall_history_python` 在无沙箱环境下未注册 | 已提交修复 PR #7838 |
| 🟡 中 | #7814 | Console SSE 空值负载导致流中断处理异常 | 已提交修复 PR #7872（空值处理） |
| 🟡 中 | #7837 | 滚动淘汰时用户行缺少标题，导致滑动索引无法定位 | 已提交修复 PR #7836 |
| 🟡 中 | #7866 | 文件区间标签缓存问题，打开文件后重新打开时显示旧内容 | 已提交修复 PR #7867 |

> 注：部分 Bug 已有对应的 PR 提交，预计将在明日合并。#7853 和 #7859 是当前最紧迫的安全与稳定问题。

## 6. 功能请求与路线图信号

从当前活跃的 PR 和 Issue 中可以看出以下趋势：

- **Creator 视频功能**：#7874、#7875 正在推进“创建视频”的公共 API 设计，这是平台向团队化部署迈进的重要一步。
- **Scroll 流程完善**：#7873、#7872 聚焦于 Scroll 中的交互一致性、错误恢复和中断处理，体现对用户体验的持续优化。
- **安全加固**：#7864、#7211、#7859 表明安全防护是持续关注的方向，特别是防止 Prompt Injection 和注入攻击。
- **性能与兼容性**：#7840、#7868、#6381 关注事件循环阻塞、资源管理和跨平台稳定性（Windows 单元测试）。
- **Provider 集成**：#7869、#7223 扩展 OpenCode Go 等提供商的端点支持，丰富平台生态。

## 7. 用户反馈摘要

从 Issue 评论中提炼的用户痛点：

- **上下文溢出担忧**：#7853 反映了用户对工具结果系统中媒体块（图片、音频）处理不当的担忧，担心会导致模型上下文窗口被无限填充。
- **安全隐患焦虑**：#7859 中的提示注入问题直接关联到用户数据泄露风险，用户对平台安全性高度敏感。
- **控制台稳定性**：#7814、#7840、#7864 等 Bug 反映了用户在使用控制台和插件时遇到的卡顿、死锁或意外行为。
- **功能完整性**：#7874 关于 Creator 视频功能的讨论表明用户期望更完整的创作能力，而不仅仅是聊天。

总体而言，用户对 **稳定性、安全性和功能完整性** 有明确期待，平台正在积极响应。

## 8. 待处理积压

以下长期未解决或需要关注的 Issue/PR：

| ID | 问题 | 描述 | 建议关注 |
|----|------|------|----------|
| #7853 | ToolResultPruner 媒体块处理 | 非文本块（如 Base64 图片）被跳过，导致上下文无限增长 | 已提交修复，需监控 |
| #7859 | Prompt Injection 漏洞 | 工具结果系统中存在重复执行“删除所有技能”指令的风险 | 已提交修复，需持续监控 |
| #7840 | 插件事件循环冻结 | 同步 I/O 操作会阻塞整个事件循环 | 已提交修复，需回归测试 |
| #7838 | recall_history_python 注册缺失 | 无沙箱环境下工具未正确注册 | 已提交修复 |
| #7837 | 滚动淘汰缺少用户标题 | 导致滑动索引无法定位被淘汰的用户请求 | 已提交修复 |
| #7866 | 文件区间缓存问题 | 打开文件后重新打开时显示旧内容 | 已提交修复 |
| #7890* | 多租户版 Hub 需求讨论 | #7318 讨论 2.2.0 多租户版的具体功能 | 需跟进产品规划 |

> *注：#7890 为潜在的后续需求，需在 2.2.0 版本中落实。

---

**总结**：2026-09-19 的 CoPaw 项目整体进展顺利，新版本 v2.2.2-beta.1 已发布，重点在于工具结果系统的稳定性、安全加固和性能优化。关键 Bug（#7853、#7859）已有修复方案提交，需及时合并。社区热点集中在安全与稳定性方面，用户对 Creator 视频功能和 Scroll 流程的完整性也有明确期待。持续关注上述待处理积压问题，确保平台在向团队化部署迈进的同时保持高质量。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 - 2026-09-19

## 1. 今日速览
2026 年 9 月 19 日，ZeptoClaw 项目整体活动平稳。过去 24 小时内无新增或活跃的 Issue，仅有 3 条 Pull Request 更新，其中 1 条仍处于开放状态（#702），其余两条（#703、#701）已合并并关闭。项目未发布新版本，整体健康度保持稳定，但仍有重要改进工作在进行中。

## 2. 版本发布
本日未发布新版本。项目保持当前稳定版，所有变更均通过 Pull Request 形式提交，尚未形成正式发布。

## 3. 项目进展
- **PR #702（开放）**：修复密码登录端点的密码尝试率限制缺陷，限制同一 IP 在 60 秒滚动窗口内的最大尝试次数为 5 次，避免暴力破解风险。
- **PR #703（已合并）**：增强 OpenAI 兼容端点上的推理模型响应处理，防止因 token 预算耗尽导致 `content` 为 null 的情况，确保返回完整的 `reasoning_content`。
- **PR #701（已合并）**：对工具注册表的 schema 进行严格化处理，在提供给后端时对工具参数进行校验和转换，提升本地化和严格模式下的可靠性。

## 4. 社区热点
- **PR #702** 是当天最重要的活跃项目，聚焦安全性改进，解决密码登录端点的潜在漏洞，获得开发团队高度关注。
- **PR #703** 和 **PR #701** 虽已合并，但仍是近期高频关注的改进方向，反映了项目在可靠性和安全性方面的持续优化需求。

## 5. Bug 与稳定性
按严重程度排序：
1. **高危**：PR #702 中的密码登录率限制缺陷，若未修复可能导致账户被暴力破解。
2. **中等**：PR #703 处理 null content 的问题，防止模型响应异常导致客户端解析错误。
3. **低优先级**：PR #701 的 schema 校验虽为预防性改进，对现有系统影响有限。

目前无其他新增 Bug 报告，已有 PR 已完成修复。

## 6. 功能请求与路线图信号
- **安全加固**：PR #702 明确体现了对认证流程的安全加固需求，未来版本应继续完善类似的访问控制机制。
- **模型响应可靠性**：PR #703 针对推理模型的边界情况处理，是提升系统鲁棒性的关键功能，建议在下一版本进一步扩展到其他模型类型。
- **工具链健壮性**：PR #701 的 schema 校验为后续插件开发提供了良好的规范，符合路线图中“统一工具定义标准”的目标。

## 7. 用户反馈摘要
从 PR 描述和项目趋势可提取以下用户痛点：
- **安全性**：用户担心密码登录端点存在暴力破解风险，特别是在高并发场景下需要更严格的限流措施。
- **可靠性**：部分用户遇到了推理模型返回空内容的异常，导致应用层难以正确处理，需要更健壮的错误处理机制。
- **开发体验**：工具定义的校验和参数转换改进，有助于降低插件开发门槛，提升社区贡献效率。

## 8. 待处理积压
- **PR #702**（https://github.com/qhkm/zeptoclaw/pull/702）：当前状态为开放，需合并至主分支。该 PR 解决了关键的安全漏洞，优先级较高，建议尽快完成合并。
- **长期未响应的 Issue**：截至 2026-09-19，项目未收到新的 Issue 更新，但历史记录显示存在一些未解决的权限或兼容性问题，建议维护团队跟进。

---  
*报告生成时间：2026-09-19*  
*来源：https://github.com/qhkm/zeptoclaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-09-19 | 数据来源：github.com/zeroclaw-labs/zeroclaw**

---

## 1. 今日速览

今日 ZeroClaw 项目保持高频活跃态势：24小时内共记录 **21 条 Issues 更新**（16 条新开/活跃，5 条已关闭）和 **50 条 PR 更新**（38 条待合并，12 条已合并/关闭），无新版本发布。从数据看，项目正处于密集的功能迭代与安全修复并行阶段——安全相关议题（Git 审批绕过、镜像标记来源伪造）集中爆发，同时 ACP 协议兼容、Anthropic 提供商适配和运行时稳定性方面有持续推进。项目整体吞吐量大、健康度良好，但积压的 38 条待合并 PR 暗示审查管线存在一定瓶颈。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日有多项重要 PR 完成合并/关闭，推动了核心功能落地：

| PR | 描述 | 意义 |
|---|---|---|
| [#10775](https://github.com/zeroclaw-labs/zeroclaw/pull/10775) | fix(rpc): preserve live sessions when mode replacement fails | 修复 Chat/ACP 同 ID 替换时丢失会话历史的问题，提升运行时稳定性 |
| [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) | fix(config): resolve git subcommand past global options in risk classifier | **安全修复**：解决了 Git 全局选项（如 `-C`、`--git-dir`）绕过风险分类器的问题（关联 Issue #9627） |
| [#10910](https://github.com/zeroclaw-labs/zeroclaw/pull/10910) | test(agent): record the sealed tool-registry parity contract | 完成了 ScopedToolRegistry seal 后的测试适配，标记工具策略契约为已验证 |
| [#10907](https://github.com/zeroclaw-labs/zeroclaw/pull/10907) | feat(channels): stamp external ingress provenance | 为频道消息注入来源标记，将可信通道消息的身份信息传递至运行时准入层 |
| [#10800](https://github.com/zeroclaw-labs/zeroclaw/pull/10800) | test(rpc): calibrate dispatch constrained-stack guard to 1.5 MiB | 精确校准 RPC 分发栈溢出防护阈值 |
| [#10648](https://github.com/zeroclaw-labs/zeroclaw/pull/10648) | fix(zerocode): reduce repeated label and pinned-preview rendering work | 优化 ZeroCode TUI 性能，减少 Fluent 捆绑重复解析 |
| [#10772](https://github.com/zeroclaw-labs/zeroclaw/pull/10772) | Make zeroclaw-eval archive tests independent of workspace fixtures | 提升了评估归档测试的独立性 |
| [#10709](https://github.com/zeroclaw-labs/zeroclaw/pull/10709) | Document Astra setup for API-key and Codex subscription providers | 补全 Astra 提供商配置文档 |

**评估**：今日合并/关闭的 PR 涉及**运行时稳定性、安全加固、工具注册表契约验证、频道来源标记**四大方向，其中安全类修复（#9635、#10907）尤为关键。整体来看，项目在向 v0.9.0 网关分离阶段稳步推进。

---

## 4. 社区热点

今日讨论最活跃的议题如下：

**🔥 Issue #10952** — [Seam sanitizers rewrite signed reasoning inside the assistant tool-call envelope; Anthropic rejects the replayed thinking](https://github.com/zeroclaw-labs/zeroclaw/issues/10952)
- 分类：`provider:anthropic`，severity 未标注，更新 09-18
- 痛点：`multimodal::sanitize_image_markers` 和 `sanitize_audio_markers` 重写了整条历史消息为字符串，破坏了 assistant 工具调用 JSON envelope 中的 `reasoning_content` 字段，导致 Anthropic 拒绝重放思考过程。

**🔥 Issue #10908** — [Image markers in tool-result text are promoted to attachments without provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/10908)
- 分类：`domain:security`, `priority:p1`, `risk:high`
- 痛点：`parse_image_markers` 对工具结果内容无来源验证地将图片标记升级为附件，存在安全隐患。

**🔥 PR #9724** — [fix(approval): always_ask survives Full autonomy](https://github.com/zeroclaw-labs/zeroclaw/pull/9724)
- 评论数最多的开放 PR（20条展示中），标签含 `risk:high`, `size:XL`
- 诉求：确保 `always_ask` 审批策略在 "Full autonomy" 模式下仍然生效，防止子代理绕过人工审批。

**🔥 Issue #4853** — [install skills from .well-known agent-skills discovery indexes](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)
- 创建于 03-27，仍在活跃更新，评论 8 条
- 诉求：对接 Agent Skills 标准化 `.well-known` URI 协议，实现技能的自动发现与安装。

**🔥 Issue #10930 / #10929** — RFC: One durable primitive for questions / Delivery receipts for outbound messages
- 两个 RFC 均来自 @JordanTheJet，均标记 `risk:high`, `needs-maintainer-review`
- 诉求：分别解决"代理向人类提问的持久化机制"和"出站消息投递确认"两个基础设施级问题。

---

## 5. Bug 与稳定性

按严重程度排列：

### S0 - 数据丢失/安全风险

| Bug | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | `git --attr-source` 可隐藏变异子命令绕过审批分类 | **今日新报** (09-19) | ❌ 待处理 |
| [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | Git write verbs bypass risk classifier via `-C`/`--git-dir` | 已关闭 09-19 | ✅ [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) |

### S2 - 行为降级

| Bug | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | Seam sanitizers 破坏 Anthropic signed reasoning | 09-18 创建 | ✅ [#10953](https://github.com/zeroclaw-labs/zeroclaw/pull/10953) |
| [#10951](https://github.com/zeroclaw-labs/zeroclaw/issues/10951) | ZeroCode Config 保存后字段列表刷新两次 | 09-17 创建 | ✅ [#10964](https://github.com/zeroclaw-labs/zeroclaw/pull/10964) |
| [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | `cost.warn_at_percent` 预算警告被运行时忽略 | 09-17 创建 | ❌ 待处理 |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | interruption-scope keys 在组件边界冲突 | 09-17 创建 | ❌ 待处理 |
| [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | Image markers 无来源验证升级为附件 | 09-16 创建 | ❌ 待处理 |
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | Pre-output stream failure 跳过 non-streaming fallback | 已关闭 09-18 | ✅ [#10775](https://github.com/zeroclaw-labs/zeroclaw/pull/10775) |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | Bounded child loop 工具审批失效（fail-closed 未生效） | 09-05 创建 | ✅ [#10937](https://github.com/zeroclaw-labs/zeroclaw/pull/10937) |

### 其他值得关注
- **#10722**: Pre-tool narration 未传递给 ACP/RPC 消费者 → 有 PR [#10722](https://github.com/zeroclaw-labs/zeroclaw/pull/10722) 在处理中
- **#10197**: ACP 中断 turn 进度未持久化 → 有 PR [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) 在处理中

---

## 6. 功能请求与路线图信号

以下功能需求值得关注，有对应 PR 或明确路线图指向：

| 功能 | Issue | 状态/路线图信号 |
|---|---|---|
| **从 .well-known 发现索引安装 skills** | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | 对接 [agentskills/agentskills#254](https://github.com/agentskills/agentskills/pull/254) 标准化协议，标签 `status:in-progress` |
| **通道与工具从编译时特性迁移至运行时 WASM 插件** | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 核心架构改造，标签 `topic:plugins`，对应 PR [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) 添加 egress grant ceremony |
| **config/set-many 原子批量配置写入** | — | PR [#10823](https://github.com/zeroclaw-labs/zeroclaw/pull/10823) 已提交，`size:L`，标记 `status:accepted` |
| **将工具结果载荷转发至 gateway /ws/chat stream** | [#10962](https://github.com

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*