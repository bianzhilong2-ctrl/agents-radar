# OpenClaw 生态日报 2026-11-19

> Issues: 491 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-19 05:05 UTC

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

# OpenClaw 项目动态日报 (2026-11-19)

## 1. 今日速览
OpenClaw 项目呈现高活跃状态，过去24小时共处理491个Issue更新（363个活跃/新Issue，128个已关闭）和500个PR更新（279个待合并，221个已合并/关闭）。尽管无新版本发布，但Bug修复和功能开发保持持续推进，其中macOS网关服务、Windows插件处理、会话状态管理和缓存问题成为关注焦点。项目在基础设施优化、用户体验改进和稳定性修复方面取得了稳步进展。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
**关键合并/关闭PR:**
- **#201623** - 释放版本验证边界，清理会话工件，确保发布流程更加稳健
- **#201600** - 修复Git检出安装在数据库架构变更时的更新失败问题，解决了`post-update-failed`错误
- **#201611** - 修复记忆索引中文档中仅包含标题的chunk合并无限增长问题，确保分块大小合理
- **#201616** - 修复多用户网关中会话观察者摘要认证问题，确保通过会话拥有者的Linked Account认证
- **#201615** - 加强共享协作者的权限控制，防止他们放松会话的护栏或批准不必要的命令

本周项目整体推进了10多个关键修复和优化，特别是在发布流程、会话管理和权限安全方面取得了显著进展。

## 4. 社区热点

**高讨论度Issues:**
- **#191944** - macOS网关停止服务故障（37条评论） - 涉及`openclaw gateway stop`命令在Intel Mac上出现"进程血缘关系无法完全检查"的ServiceInspectionError。社区高度关注，因为影响macOS用户运行维护操作。
- **#119720** - 同步代理持久化与日志维护大规模下事件循环阻塞（28条评论，2个👍） - 这是一个P1级影响严重的问题，可能导致系统响应速度下降。
- **#153426** - 精心记忆根目录（MEMORY.md/USER.md）被静默永久排除（18条评论，2个👍） - 影响了每新会话的引导提示注入，导致用户体验退化。

**活跃PR:**
- **#201620** - 增强模板和插件页面的安全审计信息展示（web-ui）
- **#201618** - 文件预览列表显示优化，只显示文件名，减少视觉噪音
- **#201619** - 统一技能图标显示，模板技能显示使用技能图标而非书本图标

## 5. Bug 与稳定性

**按严重程度排列的Bug报告:**

**P1级（严重）:**
- **#194451** - `/think`指令在代理运行期间仍导致转储冲突错误 - 影响Telegram代理运行稳定性
- **#196199** - 原生Codex助手完成时父代理无法恢复，导致用户会话锁定
- **#200606** - 2026.11.5候选版本验证失败，插件迁移冲突报错

**P2级（中等）:**
- **#191944** - macOS网关停止服务失败 - 影响macOS用户运行维护
- **#162585** - Windows平台插件源捕获导致npm树线性增长（290MB→612MB+） - 影响网关健康状态
- **#182891** - 提示缓存无法重用，每请求都会重置 - 影响性能和用户体验

**P3级（较低）:**
- **#198373** - 提示缓存重写问题，导致OpenAI兼容路由缓存命中率仅1-3%

**修复状态:**
部分Bug已获得修复PR支持，如记忆chunk合并问题（#201611）、会话认证修复（#201616）等。

## 6. 功能请求与路线图信号

**本周新功能请求:**
- **#170261** - Matrix频道支持在`streaming.mode`为`progress`/`partial`/`quiet`时将最终回复作为新消息发送，而非用替换事件覆盖原消息，解决了房间搜索找不到回复的问题。

**潜在纳入下一版本的功能:**
- WebUI界面改进（文件预览、图标统一、安全审计信息展示） - 这些PR已接近完成，显示出强烈的发布意愿
- 会话状态管理和缓存优化相关修复 - 多项Issue已找到修复PR，表明团队重视稳定性改进
- macOS和Windows平台特定问题修复 - macOS网关停止服务和Windows插件处理问题正在积极修复中

## 7. 用户反馈摘要

**用户痛点提炼:**
1. **macOS平台问题**：多用户报告`openclaw gateway stop`命令在macOS上失败，错误信息为"进程血缘关系无法完全检查"，影响运行维护操作。

2. **插件安装问题**：Windows用户报告插件源捕获导致npm树线性增长，从290MB膨胀到612MB+，网关长时间无法进入健康状态。

3. **会话状态问题**：代理持久化和日志维护大规模下导致事件循环阻塞，系统响应速度显著下降。

4. **UI/UX问题**：模板技能显示使用书本图标而非技能图标，文件预览列表显示文件名时带有不必要的文件类型小图标，增加视觉噪音。

5. **安全和权限问题**：共享协作者可能更改会话权限模式，从"询问我"变为"自动审查"，并批准用户在自己会话中等待的shell命令。

**满意点：**
- 用户对安全审计信息透明度提升和UI界面优化改进表示认可
- 文件预览和技能图标显示改进获得了积极反馈
- 会话认证和权限控制方面的修复增强了平台安全性

## 8. 待处理积压

**长期未响应的关键Issue:**

1. **#119720** - *P1级别* - 同步代理持久化和日志维护大规模下事件循环阻塞问题，已有28条评论但无明确修复进度
2. **#153426** - *P0级别* - 精心记忆根目录被静默永久排除的问题，涉及核心引导提示注入机制，18条评论但无修复进展
3. **#112638** - *P2级别* - 会话维护强制模式下存储未受限问题，可能导致存储资源无限制增长，12条评论
4. **#141172** - *P2级别* - 会话在首次提交前死亡导致`agent.run.started`永久泄漏的问题，13条评论

**需要维护者关注的PR状态:**
- 多项与macOS和Windows的问题修复PR处于"等待作者"或"需要证明"状态
- 某些关键安全性修复PR显示"合并风险：🚨 安全边界"警告，需要安全审查
- 存在一些长期-pending的P1级Issue，表明系统稳定性可能存在隐患

OpenClaw项目当前处于技术债务积累期，macOS/Windows平台支持、会话状态管理和缓存系统是主要问题焦点。项目团队正在积极修复多项关键Bug和改进UI/UX，但在macOS网关服务、Windows插件处理和核心会话状态管理等领域的进度仍需加速，以确保系统整体稳定性和用户体验。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告
## 数据快照：2026-11-19

---

### 一、生态全景

2026年11月19日的社区动态快照描绘出个人 AI 助手/自主智能体开源生态处于"**高速迭代—稳定化并行**"的关键窗口期。OpenClaw、Hermes Agent、CoPaw（QwenPaw）、ZeroClaw 四个项目表现出显著活跃度，共同聚焦三条技术主线：**会话状态管理与持久化稳定性、安全权限边界收紧、插件化架构演进**。整体生态正从"功能堆叠"阶段转向"模块化与稳健性工程"阶段，版本发布节奏趋于理性（OpenClaw 当日无新版、Hermes 以 canary 发布、CoPaw 发布 post1 补丁），而 Bug 修复与安全治理类 PR 的密度显著上升。以 Claw 为前缀的多个项目构成明显的命名与技术集群，暗示同一技术方向下存在并行实现或 fork 生态。

---

### 二、各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | Release | 健康度评估 |
|------|------------|---------|---------|-----------|
| **OpenClaw** | 491 |

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目 2026‑11‑19 每日报告**  

---

### 1️⃣ 今日速览  
- 过去 24 小时 **Issues** 更新 50 条（新开/活跃 46，已关闭 4），**PR** 更新 50 条（待合并 39，已合并/关闭 11），**1 个 Canary 版本发布**（v0.23.2+canary.20261118T064620Z）。  
- 社区活跃度保持高位：TOP‑5 评论最多的 Issue 合计 59 条评论，表明用户对安全、桌面 UI 与会话稳定性仍是关注焦点。  
- 关键 Bug（P1）已有对应的 PR 修复（#157573），而多个中等严重度的 Bug 仍在审查中，整体健康度 **偏正**（活跃度高、已合并 PR 较多、但仍有多个高优先级问题待解决）。  

---



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

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报（2026-11-19）

## 1. 今日速览
昨日共处理 Issues 18 条、PR 31 条，并发布 v2.3.0.post1 版本。活跃度保持在中高水平：31 条 PR 的合并/关闭节奏表明维护团队处理效率较高，但 18 条新 Issue 的涌现说明社区反馈与功能扩展需求持续增长。当前待合并 PR 20 条，提示 review 通道仍是短期内需要优化的焦点。整体健康度良好，项目正平滑从 v2.3.0 过渡到 post1 版，模块化改进与生态修复并行进行。

**GitHub 数据参考**：过去24h Issues 更新 18 条，PR 更新 31 条，新版本 1 个。  
**活跃度评估**：⭐⭐⭐⭐（活跃，但 review 积压与 Issue 处理需持续关注）

---

## 2. 版本发布
**v2.3.0.post1** 于 2026-11-18 发布，为本次迭代的补丁/次版本。

**更新要点**：
- `feat(agent)`：将第三方 Agent 提取为 Plugin，标志着 plugin 系统进入落地阶段。#
- `feat(console)`：在 Follow-up 草稿中引用响应选择内容，提升多轮对话的可追踪性。#
- `fix(console)`：修复 Safari 浏览器兼容性问题，恢复原有交互行为。#

**破坏性变更与迁移提示**：
- 插件现在拥有独立的 Agent 提取能力，原有通过 `window.QwenPaw.chat.theme.set(pluginId, { colorPrimary })` 设定的主题配置将受 plugin 较量层影响，建议插件作者review `theme` 接口变更。
- Console 端对响应选择的 quoting 行为调整，若自定义了 Markdown 渲染流需确认前端模板兼容性。
- 无其他重大 API/配置破坏，但建议升级后检查 Channels（DingTalk/Feishu）的默认启用状态（见 Issue #8812）。

**Release 链接**：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0.post1

---

## 3. 项目进展
今日共 11 条 PR 被合并或关闭，重点推进了 **plugin 体系化**、**安全治理**、**跨平台兼容** 与 **开发者体验** 四个方向：

| PR 编号 | 类型 | 关键变化 |
|---------|------|----------|
| #8809 | chore | 版本递进至 `2.3.1b1` |
| #8804 | perf | 延迟加载 Anthropic / Gemini SDK，启动速度提升 |
| #8756 | fix | 将 WeChat 凭据作用域化至 Agent Workspace，解决多 Agent 共装下凭据冲突问题 |
| #8785 | fix | 严格执行 inline 图像预算，拒绝/重塑后主动上报裁剪信息 |
| #8713 | fix | `DoomLoopGate` 现在会记录每一次追加的 tool call，修复“只记录首次”导致的循环未检测 |
| #8308 | test | 验证缺失 Provider 查询返回 404，提升网关错误可见度 |
| #8268 | fix | 修复 TaskTracker 完成回调未清理，导致 run 永久残留 |
| #8487 | fix | 上下文压缩时识别 tool-result 中的 URL 引用媒体，避免误折叠 |
| #8028 | fix | Windows 自动模式下禁止 inline Office COM 自动化（PowerPoint/Excel/Word/Outlook） |
| #7757 | fix | 强制执行 destructive-command 与 system-credential 守卫，安全边界收紧 |
| #8133 | fix | 修复 CJK 语境下 Markdown  emphasize 边界解析错误（如 `**中文。**后面`） |

**整体进展**：项目正从“功能堆叠”转向“模块化与稳健性”。local model、MCP、skills 等核心能力已有多个 PR 进入 extract 阶段，治理层面的安全 guard 与资源限制也得到加固。plugin 导向的代码重构已成为本周期的主线，有望在未来 2-3 个版本中形成较为清晰的 core/plugin 拆分结构。

---

## 4. 社区热点
今日讨论活跃度最高、评论数与关注度最高的 Issues/PRs：

| Issue/PR | 标题/摘要 | 评论数 | 核心诉求 | 链接 |
|----------|-----------|--------|----------|------|
| #8811 | [Bug] 窄屏下整条消息被剪裁，表格/代码块无法横向滚动 | 3 | UI 响应式失效，影响笔记本/移动端阅读体验 | https://github.com/agentscope-ai/QwenPaw/issues/8811 |
| #8812 | [question] 更新至 2.3.0.post1 后 startup_diagnostic WARNING Flood，Channels 默认不可用 | 2 | 升级噪音过大，渠道默认状态阻断新用

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-11-19)

**数据来源**：Past 24h - Issues: 49 updates (39 active/新开, 10 closed); PRs: 50 updates (46 pending, 4 merged/closed); 0 new releases.

---

### 1. 今日速览
项目保持高度活跃，单日issue与PR均突破 49/50 条的新高，主要集中在 provider  registry 重构、Web UX 修复及安全 sandbox 问题。当前合并速率（4/50）相对issue产生速率较慢，形成轻度积压，但 4 个已合并的 PR 直接推动了 web 聚焦体验、tool 边界控制及 channel 可靠性的改进。整体健康度评估：⚠️ **高活力、中积压、关注点向安全与多模态 provider 聚集**。

🔗 [GitHub 项目主页](https://github.com/zeroclaw-labs/zeroclaw)

---

### 2. 版本发布
无新版本发布。基于 issue 关联的 `release:v0.9.1` 与 `v0.9.0` 语境，下一次发布将围绕本周期内完成的大规模 provider 重构与关键 bug 修复展开。请关注维护者在 release-gate issue (#11580) 中关于 x86_64 二进制体积上限的讨论。

🔗 [Release Gate #11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)

---

### 3. 项目进展（今日合并/关闭重要 PR）
今日共 4 个 PR 合并/关闭，均为功能完善或文档规范化：
- **#11660** `fix(web): keep the chat input focused through a turn` - 解决聊天输入框在转态中丢失焦点问题，提升连续对话流畅度。
- **#11661** `fix(web): return focus to the chat message box when a turn ends` - 针对 `#11660` 的后续修复，确保转结束时焦点正确回归。
- **#12417** `docs(runtime): propose ADR-016 exception for plugin wake dispatch` - 发布受限 ADR，明确 host 媒介 WASM 插件唤醒的边界，降低跨崁租户权限风险。
- **#12386** `fix(tools): bound Notion API response and tool output sizes` - 引入 `NOTION_MAX_RESPONSE_BYTES` (2 MiB) 并使用 `read_bounded`，防止 API 响应膨胀耗尽资源。

🔗 [#11660](https://github.com/zeroclaw-labs/zeroclaw/pull/11660) | [#11661](https://github.com/zeroclaw-labs/zeroclaw/pull/11661) | [#12417](https://github.com/zeroclaw-labs/zeroclaw/pull/12417) | [#12386](https://github.com/zeroclaw-labs/zeroclaw/pull/12386)

---

### 4. 社区热点（评论最多、讨论最活跃的 Issues/PRs）
- **#11296** [bug] llama.cpp & custom provider wrong url/uri for models — 7 评论。用户反映自定义 provider 中 uri（非 localhost）未被正确解析获取模型，涉及配置传递与路由选择，标记为 S3 但风险评估指向 model 获取失败。
- **#9345** [enhancement] Recalculate PR risk/size labels on every update — 7 评论。 canonical 标签的自动化维护需求，若合并将显著降低标签滞后与手动布局成本。
- **#12401** [bug] Tool-context collapse breaks Claude Opus 5.5 chats — 6 评论，S1 严重等级。`keep_tool_context_turns` 导致 older tool-using turn 后聊天永久失效，目前无合并 PR，维护者需优先处理。
- **#12450–#12457** (NiuBlibing 系列) 6 个开放 PR，涉及 canonical V5 registry、model 引用、provider 分离等核心重构，虽评论数为 `undefined`，但体量巨大（size:XL, risk:high），将决定下一代 provider 生态走向。

🔗 [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450)

---

### 5. Bug 与稳定性（按严重程度排列，标注是否有 fix PR）
| 编号 | 标题 | 严重程度 | 状态 | fix PR |
|------|------|----------|------|--------|
| **#12401** | Tool-context collapse breaks Claude Opus 5.5 chats | S1 - workflow blocked | open | none yet |
| **#12504** | Anthropic provider replays unsigned thinking block → 400 | S2 - degraded behavior | open | none yet |
| **#11823** | Shell scanner skips command substitution in unquoted heredoc bodies | S2 - degraded behavior | open | none yet |
| **#9655** | Approval cards carry no position, back-to-back indistinguishable | risk:high | open (no-stale) | none merged |
| **#12146** | MCP SSE client accepts absolute URL from server, redirect secrets | S2 - degraded behavior | closed today | #12146 closed |
| **#12144** | file_upload/file_edit authorize through write tier, sibling can read | S2 - degraded behavior | closed today | #12144 closed |
| **#12053** | /api/docs loads unpinned

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*