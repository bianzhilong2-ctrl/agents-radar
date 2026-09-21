# OpenClaw 生态日报 2026-09-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-21 02:25 UTC

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

# OpenClaw 项目动态日报 — 2026-09-21

---

## 1. 今日速览

OpenClaw 在过去 24 小时内保持高活跃度：Issues 更新共计 500 条（新开/活跃 286，已关闭 214），PR 更迭同样达到 500 条（待合并 297，已合并/关闭 203）。今日未发布任何新版本，但多个关键性 Bug 得到修复和跟进，特别是在更新流程、内存管理与进程清理方面。项目面临的问题集中在更新失败、崩溃循环、内存泄漏和事件循环阻塞等运行时稳定性问题上。社区反馈热烈，多个重要 Bug 已经获得 maintainer 回复或对应 PR。

---

## 2. 版本发布

**无新版本发布**

当前版本仍为 `2026.9.5`，尚未见 `2026.9.6` 或其他正式版本发布。

---

## 3. 项目进展

### 关键 PR 合并与推进情况：

- ✅ **[PR #154234](https://github.com/openclaw/openclaw/pull/154234)** – 修复新 worktree 启动时使用过期默认分支的问题  
  > 作者: steipete | 状态: CLOSED | 类型: UI 优化  

- ✅ **[PR #153931](https://github.com/openclaw/openclaw/pull/153931)** – 还原 Control UI 启动预算，移除非必要 JS 代码  
  > 作者: steipete | 状态: OPEN | 类型: 性能优化  

- ✅ **[PR #153764](https://github.com/openclaw/openclaw/pull/153764)** – 改进 `openclaw update` 流程，避免替换过程中丢失运行中的 worker 代码  
  > 作者: steipete | 状态: OPEN | 类型: 更新流程修复  

- ✅ **[PR #154291](https://github.com/openclaw/openclaw/pull/154291)** – 修复 macOS 应用打包丢失嵌套 worker helper 的问题  
  > 作者: steipete | 状态: OPEN | 类型: 构建打包  

这些 PR 显著提升了系统的稳定性、更新流程的鲁棍能力以及桌面应用的部署可靠性。

---

## 4. 社区热点聚焦

### 🔥 最具影响力的 Issue：

#### 🦐 **[Issue #143524](https://github.com/openclaw/openclaw/issues/143524)**  
**标题**: Agent SQLite WAL 文件暴增至 GB 级别，阻止网关启动  
**评论**: 35 条 | **创建时间**: 2026-09-09  
> 问题描述：在 Windows 主机上，代理数据库 WAL 文件未被 checkpoint，体积达 2.8 GB。  
**社区反响强烈，已有 maintainer 回复，建议临时手动执行 `wal_checkpoint(TRUNCATE)`。**

#### 🦝 **[Issue #97616](https://github.com/openclaw/openclaw/issues/97616)**  
**标题**: 子进程未回收导致 Zombie 进程堆积  
**评论**: 31 条 | **创建时间**: 2026-06-29  
> 与内存泄漏与服务重启相关，影响深远。  
**社区普遍遇到类似问题，期待优化进程管理逻辑。**

#### 🌟 **[Issue #153257](https://github.com/openclaw/openclaw/issues/153257)**  
**标题**: 升级至 2026.9.5 后环境陷入崩溃 — 长达 8 小时无法恢复  
**评论**: 15 条 | **创建时间**: 2026-09-19  
> 用户报告升级后网关始终无法正常服务，属典型 release blocker。  
**维护者正在紧急跟进中。**

---

## 5. Bug 与稳定性

| 严重级别 | 标题 | 链接 | 是否有 Fix |
|---------|------|------|-------------|
| P0 | SQLite WAL 无限增长，阻塞网关启动 | [#143524](https://github.com/openclaw/openclaw/issues/143524) | ❌ |
| P0 | 升级至 2026.9.5 后陷入崩溃循环 | [#153257](https://github.com/openclaw/openclaw/issues/153257) | ❌ |
| P0 | 网关就绪但不响应 `/health` 请求 | [#149538](https://github.com/openclaw/openclaw/issues/149538) | ❌ |
| P1 | 内存泄漏致网关崩溃 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | ❌ |
| P1 | MCP 初始化超时引发网关崩溃 | [#144911](https://github.com/openclaw/openclaw/issues/144911) | ❌ |

目前缺少针对多数 P0 问题的直接修复 PR，建议优先处理以下问题：
- 内存泄漏 (#91588)
- 更新失败 (#152759, #153704)
- 子进程管理缺陷 (#97616)

---

## 6. 功能请求与路线图信号

### 用户最关注的功能请求：

#### 🦞 **[Issue #45608](https://github.com/openclaw/openclaw/issues/45608)**  
**标题**: `/new` 与每日重置前执行内存刷新机制  
**点赞**: 4 | 类型: 功能增强  
> 类似于 compaction 行为的 memory flush 被用户期望应用于更多场景。

#### 🐚 **[Issue #71058](https://github.com/openclaw/openclaw/issues/71058)**  
**标题**: 支持多个 Azure Teams 机器人  
**点赞**: 1 | 类型: 企业级集成  
> 适用于大规模企业部署场景。

#### 🐚 **[Issue #131457](https://github.com/openclaw/openclaw/issues/131457)**  
**标题**: 为 Feishu（Lark）添加进度流模式  
> 与其他平台一致性增强。

👉 当前并未有明确 Roadmap 回应，但部分 Issue 已标记为 `clawsweeper:needs-product-decision`，表明有被纳入评估的可能性。

---

## 7. 用户反馈摘要

- **痛点一**: 升级体验极差 — 多用户报告 `openclaw update` 失败后回滚机制不可用，需手动介入。
- **痛点二**: 在 Docker/Kubernetes 环境中运行时，内存泄漏频发，长时间运行后触发 OOM。
- **痛点三**: 多通道集成存在缺陷，如 Telegram 消息丢失、Slack DM 不可用等。
- **正面反馈**: Control UI 的搜索与通知功能改进收到好评。
- **开发者建议**：希望能看到更清晰的日志输出与诊断工具用于排查生产环境问题。

---

## 8. 待处理积压

以下 Issues 长时间未获得有效响应，建议维护者尽快跟进：

| Issue 编号 | 标题 | 创建时间 | 类型 |
|------------|------|----------|------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | Vertex AI 模型调用报错 | 2026-03-06 | Bug |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 工作路径被硬编码 | 2026-03-21 | Behavior Bug |
| [#79983](https://github.com/openclaw/openclaw/issues/79983 | 安全策略设置不生效 | 2026-05-09 | Security Bug |

---

## 结论

尽管 OpenClaw 今日活跃度较高，但稳定性问题仍然严峻，尤其是更新流程、内存泄漏与子进程管理方面亟需优先攻关。建议加强 CI 测试覆盖率，并加快关键 Bug 的修复节奏，以避免更多用户因升级失败或稳定性问题流失信心。

--- 

📅 **更新日期**: 2026-09-21  
📊 **数据来源**: [openclaw/openclaw GitHub](https://github.com/openclaw/openclaw)  

---

---

## 横向生态对比

## 个人 AI 助手 / 自主智能体开源生态 —— 2026-09-21 横向对比分析

---

### 1. 生态全景

个人 AI 助手与自主智能体开源生态呈现出鲁布风格的发展态势：头部项目 **OpenClaw** 和 **Hermes Agent** 保持高速迭代与大规模社区参与，而中尾盘项目如 **NanoClaw**、**PicoClaw** 专注于稳定性与平台适配优化。整体而言，项目普遍聚焦于 **跨平台集成**、**资源管理与稳定性**（如内存泄漏、进程清理、WAL 增长控制）以及 **用户体验提升**（如 OAuth 流程、UI 反馈）。部分项目（如 **NanoClaw**）进入维护期，活跃度下降，但仍关注用户体验优化。该生态正朝向 **可插拔架构**、**企业级集成能力**与 **生产级稳定性** 的方向成熟。

---

### 2. 各项目活跃度对比

| 项目名称        | 今日 Issues | 今日 PRs | Release | 健康度评估 |
|------------------|--------------|-----------|----------|-------------|
| **OpenClaw**     | 500          | 500       | ❌       | ⚠️ 高活跃，Bug 密集 |
| **NanoBot**      | 4            | 55        | ❌       | ✅ 健康，功能+修复并行 |
| **Hermes Agent** | 50           | 50        | ❌       | ✅ 活跃，稳定性有所欠缺 |
| **PicoClaw**     | 6            | 5         | ❌       | ⚠️ 中等活跃，Bug 和 UX 优化并重 |
| **NanoClaw**     | 41           | 41        | ❌       | ✅ 高效合并，社区参与度高 |
| **NullClaw**     | 1            | 0         | ❌       | ❌ 低活跃，单一 Issue 反馈 |
| **TinyClaw**     | 0            | 0         | ❌       | ❌ 无活动 |
| **Moltis**       | 0            | 1         | ❌       | ❌ 低活跃，单一修复性 PR |
| **CoPaw**        | 24           | 34        | v2.2.2-beta.3 | ✅ Beta 迭代活跃 |
| **ZeptoClaw**    | 0            | 0         | ❌       | ❌ 无活动 |
| **IronClaw**     | N/A          | N/A       | N/A      | ⚠️ 无法获取 |
| **LobsterAI**    | N/A          | N/A       | N/A      | ⚠️ 无法获取 |
| **ZeroClaw**     | N/A          | N/A       | N/A      | ⚠️ 无法获取 |

> ✅ 表示健康状况良好，⚠️ 表示存在需要关注的问题，❌ 表示活跃度不足或存在明显问题。

---

### 3. OpenClaw 在生态中的定位

| 维度             | OpenClaw                                 | 同类项目 (如 Hermes Agent / NanoClaw)                     |
|------------------|------------------------------------------|-----------------------------------------------------------|
| **优势**         | 社区规模最大（500 Issue + 500 PR/24h），活跃度最高 | 社区规模较小，但活跃贡献者稳定 |
| **技术路线**     | 聚焦运行时稳定性（如 WAL 控制、内存泄漏、子进程管理） | 部分项目（如 NanoClaw）专注于 Bug 修复，Hermes 则强调功能扩展 |
| **社区规模**     | 用户反馈强烈，多个关键 Bug 已有 Maintainer 回复 | 社区参与热情较高，但议题数量远低于 OpenClaw |
| **版本更新频率** | 今日无新版本，但多个关键 PR 处于 OPEN/CLOSED 状态 | Hermes 和 NanoClaw 也未发布新版本，但合并节奏较快 |
| **定位总结**     | **“工业级稳定性优先”**：面对巨大用户基数，需优先解决运行时崩溃与资源失控问题 | **“功能扩展 + 体验优化”**：以新功能与集成为主导 |

---

### 4. 共同关注的技术方向

| 技术方向                   | 涉及项目                                | 具体诉求 |
|----------------------------|-----------------------------------------|----------|
| **内存与资源管理**         | OpenClaw, Hermes Agent, PicoClaw        | WAL 文件暴增、Zombie 进程堆积、内存泄漏导致崩溃 |
| **更新流程与回滚机制**     | OpenClaw, Hermes Agent                  | `openclaw update` 失败后无法恢复，需手动介入 |
| **OAuth 与认证体验优化**   | NanoBot, Hermes Agent                   | 登录失败后缺少“重新登录”按钮，提升重连便捷性 |
| **Web UI / TUI 性能优化**  | OpenClaw, PicoClaw, NanoBot             | 聊天输入卡顿、Markdown 链接不可点击 |
| **多通道集成**             | OpenClaw, NanoBot, PicoClaw, CoPaw      | 支持多个 Teams 机器人、Feishu 进度流、DingTalk 重连 |
| **子进程与服务管理**       | OpenClaw, Hermes Agent                  | Zombie 进程堆积、远程服务误重启本地网关 |
| **推理事件与调试友好性**   | NanoBot, Hermes Agent                   | SSE 消费者丢弃 `reasoning_text` 事件，提升日志透明度 |

---

### 5. 差异化定位分析

| 项目名称        | 功能侧重                             | 目标用户                   | 技术架构特点                          |
|------------------|--------------------------------------|-----------------------------|----------------------------------------|
| **OpenClaw**     | 稳定性、运行时资源控制               | 企业/开发者                 | 多模块化架构，强调进程管理与更新机制   |
| **NanoBot**      | 多提供商集成、OAuth 体验优化         | 开发者/自部署用户           | 插件式提供商系统，灵活配置 API         |
| **Hermes Agent** | 跨平台会话共享、CLI 与桌面融合       | 高级用户/组织部署           | 多客户端协同架构，本地网关与远程解耦   |
| **PicoClaw**     | 协议兼容性（IRC）、UI 延迟优化       | 即时通讯开发者/协议爱好者   | 原生适配器模型，依赖底层事件驱动       |
| **NanoClaw**     | 工具调用与平台兼容性（Ollama）       | 本地 LLM 用户               | 抽象化 Provider 接口，便于自定义模型接入 |
| **NullClaw**     | 错误提示与用户引导优化               | 新手用户                  | 单一 Issue 反映 UX 薄弱                |
| **TinyClaw**     | 无活动                               | 无                          | 无                                     |
| **Moltis**       | 工具调用逻辑边界处理                 | 开发者                      | 简单修复性逻辑变更                     |
| **CoPaw**        | 模型管理统一、多租户支持             | 企业协作团队                | Beta 版本快速迭代，架构逐渐标准化      |

---

### 6. 社区热度与成熟度

| 层级           | 项目                                 | 特征                                                                 |
|----------------|--------------------------------------|----------------------------------------------------------------------|
| **高活跃**     | **OpenClaw**, **NanoClaw**           | 数十到数百条 Issue/PR 更新/日，社区关注度极高，快速响应            |
| **中活跃**     | **NanoBot**, **Hermes Agent**, **CoPaw** | 数十条 Issue/PR更新，功能扩展与修复并行，活跃度稳定                |
| **低活跃**     | **PicoClaw**, **NullClaw**, **Moltis** | 数条以下更新/日，多为维护性修复，社区参与度下降                   |
| **静默**       | **TinyClaw**, **ZeptoClaw**          | 24h 无任何动态，或已进入归档维护阶段                               |

> - **快速迭代阶段**：OpenClaw、NanoClaw、NanoBot、Hermes Agent、CoPaw  
> - **质量巩固阶段**：PicoClaw、Moltis、NullClaw  

---

### 7. 值得关注的趋势信号

| 趋势信号                                                       | 来源项目               | 对开发者的启示                                             |
|----------------------------------------------------------------|------------------------|------------------------------------------------------------|
| **稳定性优先于功能**                                           | OpenClaw               | 在大规模部署前，运行时资源管理（WAL、内存、子进程）是第一位的 |
| **用户体验细节被放大**                                         | NanoBot, PicoClaw      | OAuth 失败提示、SSE 推理事件丢失等细节直接影响使用感知       |
| **跨平台会话与消息一致性成为刚需**                             | Hermes Agent, CoPaw    | 构建统一会话模型、支持多入口同步，是未来 Agent 的基本要求      |
| **本地 LLM 集成趋于标准化**                                    | NanoClaw, PicoClaw     | 将 Ollama 等本地模型的 tool calling 能力暴露并兼容是关键挑战 |
| **插件化与提供商系统成为扩展核心**                             | NanoBot, CoPaw         | 提供清晰的 Provider API 接口，有助于吸引第三方集成伙伴         |
| **社区驱动 Bug 修复成为主流模式**                              | 所有活跃项目           | 维护者需快速响应热门 Issue，并鼓励贡献者提交 Fix PR           |

--- 

> **总结**：当前个人 AI 助手 / 自主智能体开源生态正处于 **“从功能爆发进入稳定挖掘”** 的关键时点。开发者应重点关注 **资源管理、跨平台一致性与用户体验优化**，以应对日益复杂的部署环境与用户期望。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 – 2026‑09‑21**  

---

### 1. 今日速览
- **活跃度**：过去 24 小时内共产生 4 条 Issue（3 条新开/活跃，1 条已关闭）和 55 条 PR（19 待合并，36 已合并/关闭），表明开发节奏保持高位，社区贡献持续活跃。  
- **版本状况**：今日无新版本发布，最新版本仍为之前的发布版。  
- **整体健康**：合并的 PR 中包含多项功能增强（新提供者、UI 优化、OAuth 改进）以及关键 Bug 修复（SSE reasoning 事件丢失、OAuth 重认证、遗留消息投影移除），项目在功能完善与稳定性方面同步推进。

---

### 2. 版本发布
> **今日无新版本发布**，因此本节省略。

---

### 3. 项目进展（已合并/关闭的重要 PR）

| PR # | 标题 | 类型 | 主要贡献 | 链接 |
|------|------|------|----------|------|
| #5830 | feat(webui): add Baizhi Agent Toolkit MCP preset | 功能 | 为 WebUI Apps 添加可选的 Baizhi Cloud Agent Toolkit MCP 预设，使用 Streamable HTTP 暴露 `websearch_search`、`web_scrape`、`web_extract` 三项能力，简化用户自行配置 MCP 的门槛。 | [HKUDS/nanobot PR #5830](https://github.com/HKUDS/nanobot/pull/5830) |
| #5836 | fix(webui): make OAuth reauthentication actionable | Bug 修复 | 区分 OAuth 凭据被拒绝与临时目录失败；在确认授权失败时隐藏模型搜索并提供 “Sign in again” 按钮，保留因网络/速率限制导致的临时失败的缓存选择。 | [HKUDS/nanobot PR #5836](https://github.com/HKUDS/nanobot/pull/5836) |
| #5835 | test(agent): fix response-source CI contract | 测试 | 修复 response-source runner 测试，使其正确传递 `consolidate_history` 回调，使 CI 能够通过；生产运行时行为不变。 | [HKUDS/nanobot PR #5835](https://github.com/HKUDS/nanobot/pull/5835) |
| #5832 | feat: add Uniquement provider | 功能 | 将 Unifically 加入内建 LLM 提供者列表，使用 `UNIFICALLY_API_KEY` 与 `https://api.unifically.com/v1`；新增 `providers.uniquement` 配置项。 | [HKUDS/nanobot PR #5832](https://github.com/HKUDS/nanobot/pull/5832) |
| #5823 | refactor(webui): remove legacy message projection | 重构 | 完成 WebUI 事件协议迁移，删除 `replay_transcript_to_ui_messages` 及 Python‑owned UI 折叠规则；强制 `/webui-thread` 仅返回规范 `events`，拒绝旧版投影路径。 | [HKUDS/nanobot PR #5823](https://github.com/HKUDS/nanobot/pull/5823) |
| #5808 | [CLOSED] WebUI follow-ups canceled by /stop replay after gateway restart | Bug 修复 | 修复在 WebUI turn 被 `/stop` 中止后，内存中的 follow‑up 队列被丢弃但持久恢复日志中仍保留的问题；导致网关重启后会重新入队已取消的消息。现已在恢复协调器中加入状态校验，防止重复入队。 | [HKUDS/nanobot Issue #5808](https://github.com/HKUDS/nanobot/issues/5808) |

**合并影响小结**  
- **功能扩展**：新增两个重要提供者（Baizhi MCP 预设、Uniquement），为用户提供更多第三方服务接入途径。  
- **用户体验**：OAuth 重认证流程更友好，减少因授权失效导致的死锁；WebUI 消息投影重构降后端复杂度并避免潜在的 UI 不一致。  
- **稳定性**：修复了网关重启后的 follow‑up 重入问题以及 CI 测试断约，提升了系统可靠性。  
- **代码质量**：遗留代码清理（#5823）和测试修复（#5835）为后续迭代奠定了更干净的基础。

---

### 4. 社区热点（讨论最活跃、评论/反应最多）

| 项 | 类型 | 标题 | 评论数 | 反应（👍） | 主要诉求 | 链接 |
|----|------|------|--------|-----------|----------|------|
| #5524 | Issue | [good first issue] Feature: WebUI 会话结束通知铃声 | 1 | 0 | 用户希望在 Agent turn 完成时得到声音提醒，避免需盯屏幕或刷新页面。 | [HKUDS/nanobot Issue #5524](https://github.com/HKUDS/nanobot/issues/5524) |
| #5509 | Issue | feat: session search performance with FTS5 index | 1 | 0 | 随着会话历史增长，现有全文检索（JSONL 线性扫描）变慢；建议引入 SQLite FTS5 作为搜索镜像。 | [HKUDS/nanobot Issue #5509](https://github.com/HKUDS/nanobot/issues/5509) |
| #5833 | Issue | SSE Responses consumer drops `response.reasoning_text.*` events | 0 | 0 | SSE 消费者未处理 reasoning 事件，导致推理信息丢失；需与 SDK 消费者保持对称。 | [HKUDS/nanobot Issue #5833](https://github.com/HKUDS/nanobot/issues/5833) |
| #5834 | PR | fix(providers): handle `response.reasoning_text.*` events in the SSE Responses consumer | – | – | 直接对应 #5833 的修复，已提交待审。 | [HKUDS/nanobot PR #5834](https://github.com/HKUDS/nanobot/pull/5834) |
| #5831 | PR | feat(webui): reduce completed turn UI noise | – | – | 通过将持久的助手页脚改为悬停/焦点上下文控件，减少已完成 turn 的 UI 干扰。 | [HKUDS/nanobot PR #5831](https://github.com/HKUDS/nanobot/pull/5831) |
| #5829 | PR | fix(tui): make Markdown links clickable | – | – | 升级 `@opentui/core` 以支持 Markdown 超链接渲染，并添加回归测试。 | [HKUDS/nanobot PR #5829](https://github.com/HKUDS/nanobot/pull/5829) |

**热点分析**  
- 用户对 **WebUI 交互细节** 的关注度很高：通知铃声（#5524）和 UI 噪音降低（#5831）均直接关系到日常使用感受。  
- 性能优化需求也明显：会话搜索性能（#5509）在历史数据积累后成为瓶颈，社区期望引入 FTS5 索引。  
- 技术层面的 **SSE 与推理事件同步**（#5833/#5834）是提供者稳定性的关键，已有修复 PR 在审查中。  
- TUI 中的 **Markdown 链接可点击**（#5829）虽然评论少，但反馈表明开发者在调试和日志查看时希望能直接点击链接。

---

### 5. Bug 与稳定性（今日新报告，按严重程度排序）

| 严重度 | 问题描述 | 是否已有 fix PR | 链接 |
|--------|----------|----------------|------|
| **高** | SSE Responses consumer 未处理 `response.reasoning_text.*` 事件，导致推理信息丢失（可能影响依赖推理的 Agent 决定）。 | 有（#5834） | [#5833](https://github.com/HKUDS/nanobot/issues/5833) / [#5834](https://github.com/HKUDS/nanobot/pull/5834) |
| **中** | WebUI follow‑ups 在 `/stop` 后被错误重入网关重启后的恢复日志（已在 #5808 中关闭）。 | 已关闭（#5808） | [#5808](https://github.com/HKUDS/nanobot/issues/5808) |
| **中** | OAuth 凭据被拒绝时 UI 未提供明确的“重新登录”入口，用户可能陷入无响应状态。 | 有（#5836） | [#5836](https://github.com/HKUDS/nanobot/pull/5836) |
| **低** | 本地 tiktoken 估计低估 prompt token 导致记忆整理不触发（#5403） – 长期未解决，但未引起即时崩溃。 | 无（仍 open） | [#5403](https://github.com/HKUDS/nanobot/pull/5403) |
| **低** | Email 频道标记 `\Seen` 在消息实际投递前即被设置，可能导致已读状态不准确（#5605）。 | 无（仍 open） | [#5605](https://github.com/HKUDS/nanobot/pull/5605) |

**总体评价**：今日最高严重度的 Bug 已有对应修复 PR（#5834）在审查中，预计不久后可合并；其他中低严重度问题均有明确的修复方案或已关闭。

---

### 6. 功能请求与路线图信号

| 功能请求 | 来源（Issue/PR） | 现状 | 是否有对应进行中的 PR | 预计纳入版本 |
|----------|------------------|------|----------------------|--------------|
| WebUI 会话结束通知铃声（可设置开关） | #5524（Issue） | 需求明确，尚无实现 | 无 | 若社区投票增加，可列入下次 UI 增强迭代（v0.xx） |
| 会话搜索性能提升（FTS5 索引） | #5509（Issue） | 概念阶段，需在存储层引入 SQLite FTS5 | 无 | 属于后端存储优化，可能在下个主要版本（v0.4x）中提出 |
| 自定义 JEV 客户端复用（用于心跳、策略等） | #5825（PR） | 功能实现中，待审 | 有（#5825） | 预计随下一次 provider 拓展合并 |
| 可选的 Jev shell 防护（OpenRouter Decisions API） | #5815（PR） | 安全增强功能，默认关闭 | 有（#5815） | 若通过安全审查，可进入下一稳定版 |
| 本地化 WebUI Agent 活动标签（已进行中） | #5367（PR） | 已在开发，尚未合并 | 有（#5367） | 预计在下次 UI 国际化发布中合并 |
| Microsoft 委托 OAuth（Office365/Outlook） | #5609（PR） | 正在进行，需完成测试 | 有（#5609） | 计划在下一版本的邮件通道功能包中发布 |
| Uniquement 提供者（已完成） | #5832（PR） | 已合并 | – | 已在当前分支中可用 |

**路线图信号**：  
- **提供者生态**：Uniquement、Baizhi MCP、Jev 客户端等新增提供者表明项目正朝向 **可插拔、多源 LLM** 的方向演进。  
- **安全与防护**：Jev shell 防护（#5815）和 OAuth 重认证改进（#5836）体现对 **凭据安全与异常恢复** 的重视。  
- **可观测性与调试**：SSE 理由事件同步（#5834）和 UI 通知铃声（#5524）旨在提升 **用户感知与系统透明度**。  

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）

- **等待反馈的痛点**：在长时间 Agent 执行时，用户常因缺少即时提示而误以为任务未完成（“需要刷新页面或盯着屏幕才能发现新消息”）。此反馈直接推动了 #5524 的通知铃声需求。  
- **性能焦虑**：随着会话数增长，搜索延迟成为用户常见抱怨，尤其在需要快速定位历史对话时。#5509 的 FTS5 索引提议正是对此的直接响应。  
- **授权失效的困惑**：OAuth 失效后界面停滞，用户无法知道该重新登录还是等待网络恢复。#5836 的“Sign in again” 按钮得到社区的积极反馈（虽然当前评论为 0，但合并后预期会提升满意度）。  
- **工具链易用性**：开发者在调试 TUI 时希望能直接点击日志中的 URL，故 #5829 的 Markdown 链接可点击功能

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目日报（2026‑09‑21）**  
*数据来源：GitHub Issues / PRs 最近 24 h（50 条 Issues，50 条 PRs）以及今日更新的评论数。*  

---

## 1. 今日速览  
- **活跃度**：过去 24 h 内共有 50 条 Issues 和 50 条 PRs 更新，其中 25 条 Issues 新开/活跃，25 条已关闭；PRs 中 36 条仍待合并，14 条已合并或关闭。整体呈现高互换频率的开发节奏，社区参与度保持在中等偏上水平。  
- **版本状况**：今日无新版本发布（Latest Release 仍为 v0.21.3），项目仍在主干（`main`）上进行快速迭代。  
- **关注热点**：评论最多的 Issue 是 #58746（7 条评论），围绕 `hermes update` 应该锁定稳定版而非 `main` 分支展开；其次是几个 6 条评论的功能需求（跨平台会话、Home Assistant 投递目标可配置等）。  
- **Bug 倾向**：今日新开的 Bug 集中在 CLI/更新流程、Windows 防病毒误报、插件工具集验证顺序、LLM 上下文解析以及桌面客户端细节（如聊天区闪烁、忽略已有后端标志失效）等方面，多数已有对应的修复 PR 已提交或正在审查中。  

---

## 2. 版本发布  
**今日无新版本发布**。  
*（若后续有版本，请参照「版本发布」模块填写更新内容、破坏性变更及迁移注意事项。）*  

---

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR 编号 | 状态 | 主要变更 | 关联 Issue | 链接 |
|--------|------|----------|------------|------|
| #117653 | CLOSED | 桌面端：当渲染进程被外部终止时展示恢复页而非空白窗口，提升用户感知。 | #116472 | [PR #117653](https://github.com/NousResearch/hermes-agent/pull/117653) |
| #117652 | CLOSED | 桌面端：SSH 连接学习 `install_id`，使同一机器的多条 SSH/远程条目折叠为单一条目，减少 rosterview 重复。 | #117226 | [PR #117652](https://github.com/NousResearch/hermes-agent/pull/117652) |
| #117799 | CLOSED | CI：私有泄露哨兵工作流（仅 fork），日常 + 全历史 gitleaks 扫描，防止凭证意外提交。 | — | [PR #117799](https://github.com/NousResearch/hermes-agent/pull/117799) |
| #117659 | OPEN（待合并） | 桌面端：远程服务的更新不再重新启用本地网关，避免双长轮询竞争。 | #117529 / #117537 | [PR #117659](https://github.com/NousResearch/hermes-agent/pull/117659) |
| #117669 | OPEN（待合并） | 桌面端：大块文本粘贴后统一存放至 `$HERMES_HOME/composer-pastes`，解决当工作目录不在粘贴目录祖先时的附件丢失。 | #117149 / #117150 | [PR #117669](https://github.com/NousResearch/hermes-agent/pull/117669) |
| #117704 | OPEN（待合并） | 桌面端：尊重 `HERMES_DESKTOP_IGNORE_EXISTING` / `--ignore-existing`，使 Desktop 能作为纯客户端跳过本地后端发现。 | #117323 / #117388 | [PR #117704](https://github.com/NousResearch/hermes-agent/pull/117704) |
| #117787 | OPEN（待合并） | CLI：one‑shot 调用时从 `config.yaml` 读取 provider API key，兼容现有配置方式。 | #117667 | [PR #117787](https://github.com/NousResearch/hermes-agent/pull/117787) |
| #117789 | OPEN（待合并） | 性能：`capability_fingerprint` 仅统计模型实际可调用的技能，避免因存档技能导致系统 prompt 频繁重建。 | #117788 | [PR #117789](https://github.com/NousResearch/hermes-agent/pull/117789) |
| #117756 | OPEN（待合并） | Agent：在思考/推理流出现退化单字循环时提前截断，防止日志爆炸和前端卡顿。 | — | [PR #117756](https://github.com/NousResearch/hermes-agent/pull/117756) |
| #112136 | OPEN（待合并） | Home Assistant：引入 `deliver_mode: broadcast\|session`，实现跨平台投递的会话级别隔离（对应 #35060）。 | #35060 | [PR #112136](https://github.com/NousResearch/hermes-agent/pull/112136) |

> **整体进展**：今日已有 14 条 PR 完成合并/关闭，其中涉及桌面端稳定性（恢复页、SSH 去重）、CI 安全以及 CLI 配置便利性的改进。待合并的 PR 集中在桌面交互细节、插件/工具链顺序、性能优化以及功能扩展（如 Home Assistant 投递模式），预计将在下一个补丁版本中陆续上线。

---

## 4. 社区热点（评论/反应最多的 Issues/PRs）  

| 排名 | 类型 | 编号 | 标题 | 评论数 | 👍 数 | 核心诉求 | 链接 |
|------|------|------|------|--------|------|----------|------|
| 1 | Issue | #58746 | `hermes update` 应该锁定最新稳定版而非 `main` 分支 | 7 | 2 | 用户希望 `hermes update` 默认拉取稳定 tag，避免意外获得半成品功能导致不稳定。 | [#58746](https://github.com/NousResearch/hermes-agent/issues/58746) |
| 2 | Issue | #62780 | 跨平台规范会话（Canonical cross‑platform session） | 6 | 1 | 希望无论在 CLI、Desktop、Telegram、Discord 等入口，同一对话能共享状态、上下文与生命周期。 | [#62780](https://github.com/NousResearch/hermes-agent/issues/62780) |
| 3 | Issue | #35060 | Home Assistant `watch_entities/domains` 投递目标可配置（支持 WhatsApp/Telegram 等） | 6 | 0 | 目前只能把事件回送到 HA 本身，用户需要转发到其他即时通讯渠道。 | [#35060](https://github.com/NousResearch/hermes-agent/issues/35060) |
| 4 | Issue | #55811 | 高风险工具执行的运行时能力契约（runtime‑enforced capability contracts） | 5 | 0 | 希望在执行危险操作前有统一的、可审计的能力声明与强制检查。 | [#55811](https://github.com/NousResearch/hermes-agent/issues/55811) |
| 5 | Issue | #2045 | 懒加载技能：从系统 prompt 中移除技能列表，按需加载 | 5 | 4 | 随着技能数量增长（目前 87 条），系统 prompt 膨胀影响 token 预算；期望按需载入。 | [#2045](https://github.com/NousResearch/hermes-agent/issues/2045) |
| 6 | PR | #112136 | Home Assistant 投递模式（broadcast\|session） | 0 | 0 | 通过 PR 实现 #35060 的需求，等待合并。 | [#112136](https://github.com/NousResearch/hermes-agent/pull/112136) |
| 7 | PR | #117789 | 性能：仅统计实际可用技能构建 capability fingerprint | 0 | 0 | 解决 #117788 提出的性能浪费，预计降低 prompt 重建频率。 | [#117789](https://github.com/NousResearch/hermes-agent/pull/117789) |

**热点背后的诉求**：社区普遍关注 **稳定性与可预测性**（#58746）、**跨平台会话统一**（#62780）、**外部通知渠道的灵活性**（#35060、#112136）以及 **安全/资源治理**（#55811、#2045）。这些议题均有对应的开发或评论活动，表明是项目短期内的优先方向。

---

## 5. Bug 与稳定性（今日新报告，按严重程度排序）  

| 严重程度 | 编号 | 标题 | 关键症状 | 是否有对应 Fix PR | 链接 |
|----------|------|------|----------|-------------------|------|
| **高** | #117796 | Windows Defender 误报 `hermes.exe` 为 `Pomal!rfn`（特洛伊） | 使用官方打包的 Windows CLI 被杀毒软件隔离，影响普通用户安装。 | **无**（目前尚未有对应 PR，需加签名或调整构建流程） | [#117796](https://github.com/NousResearch/hermes-agent/issues/117796) |
| **高** | #117793 | Llama.cpp 上下文溢出错误解析缺失，导致误判为 “provider didn’t report a limit” | 模型在超过上下文时抛出特定文字，代码未匹配，导致后续处理错误。 | **无** | [#117793](https://github.com/NousResearch/hermes-agent/issues/117793) |
| **中** | #117438 | 更新失败后残留 receipt 造成无限 “mixed sys.modules” 警报 | `hermes update` 失败后 receipt 标记为 `failed`，但网关仍尝试重启，循环警告。 | **有**：#117659（远程更新不重启本地网关）部分缓解，但需专门清理 receipt 的 PR。 | [#117438](https://github.com/NousResearch/hermes-agent/issues/117438) |
| **中** | #117682 | `HERMES_DESKTOP_IGNORE_EXISTING` / `--ignore-existing` 未能阻止局部后端启动 | 桌面客户端仍在 `ACTIVE_HERMES_ROOT` 发现并启动本地后端，导致资源重复。 | **有**：#117704 已提交修复，待合并。 | [#117682](https://github.com/NousResearch/hermes-agent/issues/117682) |
| **中** | #117790 | `fact_store.add` 将原始工具调用 JSON 当作持久事实存入，category 默认为 `general` | 导致事实库被运行时噪声污染，影响后续检索质量。 | **无** | [#117790](https://github.com/NousResearch/hermes-agent/issues/117790) |
| **中** | #117791 | `TASK_COMPLETION_GUIDANCE` 未防止模型在无匹配工具时虚构 tool call | 可能导致空调用或错误的工具执行尝试。 | **无** | [#117791](https://github.com/NousResearch/hermes-agent/issues/117791) |
| **低** | #117794 | `neutts_synth.py` 捕获 ImportError 时丢弃真实异常，只输出硬编码提示 | 调试困难。 | **无** | [#117794](https://github.com/NousResearch/hermes-agent/issues/117794) |
| **低** | #117795 | Telegram `media_write_timeout` 硬编码或未通过环境变量覆盖 | 配置不灵活。 | **无** | [#117795](https://github.com/NousResearch/hermes-agent/issues/117795) |
| **低** | #117792 | `classify_items.py` cron 脚本未在 prompt 中加入所需 JSON schema | 模型无法遵循预期输出格式。 | **无** | [#117792](https://github.com/NousResearch/hermes-agent/issues/117792) |
| **低** | #117784 | Windows 测试中使用裸 `bash` 导致 WSL 路径污染 repo | 仅影响 CI，但在 Windows 开发者机器上会写入错误文件。 | **无** | [#117784](https://github.com/NousResearch/hermes-agent/issues/1

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 每日项目状态报告** – 2026-09-21

---

## 1. 今日速览
过去 24 小时，PicoClaw 保持了适中的活动水平：**6 个 Issues** 和 **5 个 PRs** 更新。其中 4 个 Issues 仍处于“stale” 状态，表明核心 bug 和功能请求尚未得到解决。两个高关注度 UI/IRC 问题（#3281 和 #3287）均有 13 条评论，表明社区迫切需要修复延迟和改进多行消息支持。尽管如此，项目仍在稳步推进内部改进（如身份验证范围修复、IRCv3 多行消息支持、UI 动画绑定）。无新版本发布，项目健康度整体良好，但需要解决多个长期悬而未决的问题以保持用户满意度。

---

## 2. 版本发布
**无新版本发布**（截至 2026-09-21）。下次版本预计将侧重于解决当前的高优先级 bug（#3281、#3287、#3382）并整合 IRCv3 多行消息支持（#3354）和 OpenAI 兼容 provider 工作。

---

## 3. 项目进展
| PR | 状态 | 概要 | 影响 |
|----|------|------|------|
| **#3378** | **打开** | 修复身份验证：在刷新令牌时使用配置的作用域，而非硬编码的 `openid profile email`。 | 消除了 provider 特定作用域被覆盖的风险，确保 OAuth 流程符合用户预期。 |
| **#3354** | **打开** | 实现 IRCv3 `draft/multiline` 接收支持，使长或多行消息作为单个一致的消息到达 PicoClaw。 | 直接解决 Issue #3287 中提出的需求，将重大升级中的 IRC 用户体验统一。 |
| **#3353** | **打开** | 绑定工具反馈动画，防止因生命周期清理失败而无限期编辑频道消息。 | 加强了 Telegram 打字指示器的健壮性（5 分钟超时和编辑错误即时停止）。 |
| **#3367** | **关闭** | 新增 Pilot MCP 设置示例文档，包括健康检查命令和配置保留说明。 | 为新用户改善了文档，使用户无需 API 密钥即可快速上手。 |
| **#3383** | **关闭** | 添加 v0.11.0 冲刺设计文档（agentic web3、模块信任、ACP/mesh 深度）。 | 建立了 Sprint 67-75 的设计记录，规划了模块化功能开发。 |

**今天向前推进了多少：** 三项 PR（#3378、#3354、#3353）处于活动状态，涵盖身份验证、IRC 和 UI 稳定性——这表明项目正在逐步巩固其基础架构并提升用户核心功能。

---

## 4. 社区热点（最多评论/反应 Issues/PRs）

| # | 类型 | 标题 | 评论 | 👍 | 链接 |
|---|------|------|------|----|------|
| **#3281** | BUG | “Web UI 聊天输入在历史记录稍长时非常卡顿” | **13** | **2** | [siipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| **#3287** | 功能 | “更好地支持 IRC 中的长消息” | **13** | 0 | [siipeed/picoclaw Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) |
| **#3366** | 功能 | “添加对 OpenAI 兼容提供程序的支持” | 4 | 0 | [siipeed/picoclaw Issue #3366](https://github.com/sipeed/picoclaw/issues/3366) |
| **#3369** | 功能 *(已关闭)* | “添加 OpenCode Go 会话头支持” | 2 | **2** | [siipeed/picoclaw Issue #3369](https://github.com/sipeed/picoclaw/issues/3369) |

*热点分析：* UI 延迟和 IRC 多行消息处理这两个讨论最多的主题反映了用户对实时通信功能的高度关注。Issue #3281 暗示了前台 JavaScript 的性能问题，而 Issue #3287 则指出了协议层面的限制。强有力的社区参与（各 13 条评论）表明这两个问题如果得到解决，将显著提升用户满意度。

---

## 5. Bug 与稳定性

1. **DingTalk 网关崩溃** (`client.go:161`) – Issue #3382（新报告）。
   *状态*：**打开** – 崩溃由 `dingtalk-stream-sdk-go` 引发，与之前关闭的 Issue #973 相同。
   *严重性*：**高** – 影响 QQ 和 DingTalk 渠道的持久连接稳定性。

2. **Web UI 聊天输入延迟** – Issue #3281（已知 bug）。
   *状态*：**打开** – UI 延迟是交互式聊天的主要瓶颈。
   *严重性*：**中** – 虽然不致命，但会对用户体验造成显著影响。

3. **QQ/DingTalk 过夜崩溃** – Issue #973（已关闭）。
   *状态*：**已关闭** – 已确认是由于消息队列被关闭导致的 panic，已记录在案。

*是否有修复 PR？* **无**。目前为止，稳定性和可靠性方面没有合并的 PR，尽管 #3353（动画绑定）间接有助于防止客户端卡住。

---

## 6. 功能请求与路线图信号

| Issue | 核心请求 | 相关 PR | 可能在下一版本中实现？ |
|-------|-----------|----------|---------------------------|
| **#3287** | 支持 IRCv3 多行消息，使长消息作为单个消息传递。 | **#3354**（IRCv3 多行接收） | **是** – PR 处于活动状态，尚未合并。 |
| **#3366** | 添加“OpenAI 兼容”provider，以支持自托管路由器（如 9Router）。 | *无直接 PR* | **可能** – 目前为草稿状态；如果有贡献者为 `OpenAI` provider 提供 clone，它们可以直接使用。 |
| **#3369** *(已关闭)* | 添加 `x-opencode-session` 请求头以支持 OpenCode Go。 | *无后续 PR* | **不确定** – 已关闭，但社区可能希望重新开启。 |
| **#3382** | 修复 DingTalk 网关在重连时的 panic。 | *无 PR* | **是** – 保持高优先级，因为影响的是关键聊天渠道。 |

*路线图判断：* **IRCv3 多行消息** 最接近合并，因为实现已经存在。**OpenAI 兼容 provider** 是一个受欢迎的功能，但目前没有具体代码。**DingTalk 崩溃** 需要一个紧急修复。

---

## 7. 用户反馈摘要（从 Issues 评论中提取）

- **UI 性能** – 用户报告在 Web UI 中打开一个会话并积累大量历史记录后，输入会暂停数秒。评论强调这“非常卡顿”，并要求尽快修复。
- **IRC 多行行为** – 用户指出 IRC 客户端会自动将 >512 字节的消息拆分为多行，但 PicoClaw 将它们视为单独的消息，这在聊天连续性方面令人困惑。他们希望“分组”消息。
- **跨平台稳定性** – QQ 和 DingTalk 用户报告过夜运行时出现崩溃，错误日志显示“消息队列已关闭”，导致整个连接丢失。
- **提供程序灵活性** – 一个用户提到了对自托管路由器的需求，认为 OpenAI 兼容 provider 将“让 PicoClaw 更容易部署在企业环境中”。
- **开发工具** – 一些评论感谢新文档（如 Pilot MCP 设置），认为这降低了新用户的入门门槛。

总体而言，反馈指向三个核心主题：**实时 UX 流畅度**、**协议消息处理正确性**和**长期运行服务的稳定性**。

---

## 8. 待处理积压（需要维护者关注的重要悬而未决事项）

| 编号 | 标题 | 状态 | 理由 |
|------|------|------|------|
| **#3382** | DingTalk 流式 SDK 重连时的 panic | **打开（stale）** | 影响关键聊天渠道，与之前关闭的 QQ/DingTalk 崩溃相同。需要立即修复以防止用户数据丢失。 |
| **#3366** | 添加 OpenAI 兼容 provider 支持 | **打开（stale）** | 社区推动力强，满足自托管路由器的需求，可能转化为新用户采用。 |
| **#3281** | Web UI 聊天输入延迟 | **打开（stale）** | 13 条评论，2 个赞，表明这个问题对日常使用有直接影响。 |
| **#3287** | IRC 多行消息支持 | **打开（stale）** | 虽然有 PR #3354，但尚未合并；用户体验取决于它。 |
| **#3369** | OpenCode Go 会话头支持（已关闭） | **已关闭** | 虽然已关闭，但社区可能希望重新启用；值得审查。 |

这些问题是项目健康度的主要“技术债务”来源。解决其中任何一个都可以显著提升用户满意度和代码库的稳定性。

---

**总结：** PicoClaw 处于稳步但无重大新版本的发布状态。社区对于 UI 延迟和 IRC 多行消息的关注意愿高，建议优先处理这些问题。内部改进（身份验证、动画绑定）正在推进，但高优先级 bug（DingTalk 崩溃）和功能请求（OpenAI 兼容 provider）仍需维护者的关注以保持项目健康发展。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



好的，这是根据您提供的 NanoClaw GitHub 数据生成的 2026-09-21 项目动态日报。

---

### **NanoClaw 项目动态日报 (2026-09-21)**

#### **1. 今日速览**
NanoClaw 项目在 2026-09-21 展现出极高的开发活跃度，过去24小时内有 41 条 Pull Request 更新，其中 38 条已合并或关闭，表明项目正在经历一轮集中的代码整合与问题修复。然而，活跃度背后也伴随着新的挑战：一个关于 WhatsApp 适配器无法显示发送者姓名的关键 Bug 被报告，且目前尚无修复 PR。项目整体处于积极向前推进的状态，但需关注新出现的、影响核心用户体验的阻塞性问题。

#### **2. 版本发布**
*   **无新版本发布。** 本日无新的 Release 记录。

#### **3. 项目进展**
本日有大量历史 PR 被合并或关闭，标志着多项功能和修复正式落地：
*   **核心功能增强**：`#2265` 修复了 Chat SDK 桥接中 `send_card` 工具静默失效的问题，增强了交互能力。
*   **用户体验与稳定性**：`#746` 解决了 WhatsApp 认证失败后服务重启的循环问题；`#2152` 优化了 OpenCode 服务器的进程管理，增加了可配置的空闲超时；`#700` 通过轮转过大的会话 JSONL 文件来防止容器超时。
*   **工具与集成**：`#706` 新增了 `icloud-tools` 技能包，为代理提供了访问 iCloud 生产力应用的能力；`#2322` 为 `karpathy-llm-wiki` 技能进行了 v2 兼容性更新。
*   **开发者体验**：`#3420` 修复了 macOS 状态栏的标签感知问题；`#2309` 用 `better-sqlite3` 封装替代了 `sqlite3` CLI，提升了技能脚本的健壮性。

**整体评估**：项目通过大量 PR 的合并，在稳定性、工具链和特定平台适配方面取得了显著进展。

#### **4. 社区热点**
*   **最活跃 Issue: #3858** - **[Bug] Agent never sees sender display names from native adapters**
    *   **链接**: [nanocoai/nanoclaw#3858](https://github.com/nanocoai/nanoclaw/issues/3858)
    *   **分析**: 这是本日最受关注的问题。用户反馈在 WhatsApp 群组中，代理无法区分参与者，所有消息都只显示电话 JID 而非显示名称。这直接触及了多用户、多群组场景下的核心可用性问题，是当前最迫切需要解决的社区诉求。
*   **待合并 PR: #3420** - **fix(add-macos-statusbar): make Swift code and plist labels slug-aware**
    *   **链接**: [nanocoai/nanoclaw#3420](https://github.com/nanocoai/nanoclaw/pull/3420)
    *   **分析**: 该 PR 属于核心团队，修复了 macOS 状态栏因硬编码标签而无法适应新安装路径的问题，是提升桌面端用户体验的关键修复。
*   **待合并 PR: #3463** - **opencode provider: fall back to message.part.delta text**
    *   **链接**: [nanocoai/nanoclaw#3463](https://github.com/nanocoai/nanoclaw/pull/3463)
    *   **分析**: 此 PR 旨在解决 OpenCodeProvider 中的一个竞态条件，通过回退到增量文本确保即使最终快照未被捕获，助手响应也不会丢失，对保障 AI 响应的可靠性至关重要。

#### **5. Bug 与稳定性**
*   **严重 (阻塞性)**: **#3858** - WhatsApp 适配器不显示发送者显示名称。
    *   **状态**: **待修复**。此 Bug 直接影响代理在群聊中的基本功能，目前无关联的修复 PR。
*   **已修复 (历史 PR 合并)**:
    *   **#746** - WhatsApp 认证失败后服务重启循环。**状态**: 已通过 PR `#746` 修复。
    *   **#698** - 代理提示中缺少日期/时间上下文。**状态**: 已通过 PR `#701` 修复。
    *   **#697** - 会话文件过大导致容器超时。**状态**: 已通过 PR `#700` 修复。
    *   **#2985** - OpenCodeProvider 响应丢失。**状态**: 已通过 PR `#3463` 提交修复，待合并。

#### **6. 功能请求与路线图信号**
*   **新功能**: **#706** 合并的 `icloud-tools` 技能包是重要的路线图信号，表明项目正积极扩展其与主流个人生产力工具的集成，旨在打造更全面的个人 AI 助手。
*   **功能增强**: 多个已合并的 PR（如 `#2265` 对 `send_card` 的支持）表明项目正在丰富代理的交互输出能力，从纯文本向更丰富的交互媒介发展。
*   **平台优化**: `#3420` 等 PR 显示项目对 macOS 等桌面平台的用户体验细节给予持续关注。

#### **7. 用户反馈摘要**
从 Issue #3858 中可以提炼出以下用户痛点：
*   **核心痛点**: 在群组沟通场景下，代理的“身份识别”能力不足。用户期望代理能像人类一样，通过姓名而非一串字符（JID）来识别和称呼参与者。
*   **使用场景**: 这直接影响在 WhatsApp 等主流通讯平台上的群组协作效率，使得代理难以进行个性化的互动或提及特定用户。
*   **诉求**: 用户期望原生适配器（如 WhatsApp）能完整传递发送者的显示名称信息，这是实现自然、有效群聊代理的基础。

#### **8. 待处理积压**
*   **高优先级**: **Issue #3858** 已创建超过24小时，无任何评论或修复动作，需维护者重点关注并分配资源。
*   **中优先级**: **PR #3420** 和 **#3463** 处于待合并状态，但已获核心团队标记，预计会很快整合。建议跟踪其合并流程。
*   **长期未响应**: 数据中未显示有长期（如超过一周）未响应的重要 Issue 或 PR，整体积压情况尚可。

---
**报告生成说明**: 本报告完全基于提供的 GitHub 数据进行客观分析，所有链接和摘要均直接引自原始数据。项目健康度评估基于活跃度（PR/Issue 数量）、问题解决速度（已关闭/合并数）和新出现阻塞性问题的综合判断。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报  
**日期：2026-09-21**  
**数据窗口：过去 24 小时**  
**项目仓库：** https://github.com/nullclaw/nullclaw

## 1. 今日速览

过去 24 小时，NullClaw 共出现 **1 条 Issue 更新**，无新增或关闭 Issue，**无 PR 更新**，也**无新版本发布**。整体活跃度偏低，暂未看到代码合并、功能交付或版本迭代信号。今日唯一值得关注的动态是用户提出了一项与 **Ollama 工具调用兼容性提示** 相关的增强请求，反映出当前错误提示对终端用户不够友好。项目整体处于“低活跃、稳定维护、UX 改进信号出现”的状态。

---

## 3. 项目进展

今日 **没有合并或关闭的 PR**，因此没有可确认的代码级功能推进、Bug 修复或重构进展。

- **合并/关闭 PR：** 0 条  
- **新增 PR：** 0 条  
- **代码推进情况：** 暂无  
- **产品/需求侧推进：** 新增 1 个可用性改进信号，即 Ollama 模型不支持 tools 时应给出更明确提示。  
- **相关 Issue：** [nullclaw/nullclaw Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000)

从项目推进角度看，今日没有版本、PR 或代码层面的实质进展；主要进展体现在用户暴露了一个可执行的体验改进点。

---

## 4. 社区热点

今日社区讨论集中在 1 条开放 Issue 上：

| 类型 | 编号 | 标题 | 状态 | 评论 | 反应 | 链接 |
|---|---:|---|---|---:|---:|---|
| Enhancement | #1000 | ollama incompatibility notification | OPEN | 1 | 👍 0 | [Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000) |

### 热点分析

该 Issue 的核心诉求是：当用户使用的 Ollama 模型不支持 tools / tool calling 时，NullClaw 当前只返回较模糊的 adapter error，缺少明确说明，导致用户难以判断失败原因。

背后反映的需求包括：

1. **更清晰的兼容性提示**：需要明确告诉用户“当前模型不支持工具调用”。  
2. **降低调试成本**：用户目前需要通过 Wireshark 等工具自行排查协议或 adapter 错误。  
3. **改善 Ollama 集成体验**：Ollama 模型能力差异较大，应用层应提前识别并提示不兼容场景。  

该 Issue 当前评论数为 1、点赞数为 0，尚未形成较大社区热度，但问题具有明确的用户场景和可执行改进方向。

---

## 5. Bug 与稳定性

今日未报告明确的崩溃、回归或严重稳定性问题。唯一相关动态是一个偏“可用性 / 错误提示”的问题。

| 严重程度 | 类型 | 问题 | 影响 | Fix PR |
|---|---|---|---|---|
| 中 | 可用性 / 兼容性提示 | Ollama 模型不支持 tools 时，仅显示 adapter error，缺少解释 | 用户难以判断失败原因，调试成本较高 | 暂无 |

相关问题：[Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000)

该问题不像是核心崩溃或数据损坏类 Bug，但会影响用户排查体验，尤其是在 Ollama 模型能力不一致的场景下。建议维护者优先确认 NullClaw 是否可以在调用前检测模型 tool support 能力，并在不支持时给出友好提示。

---

## 6. 功能请求与路线图信号

今日出现 1 个明确的功能请求：

### 功能请求：Ollama 模型不支持 tools 时增加通知

- **Issue：** [nullclaw/nullclaw Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000)  
- **状态：** OPEN  
- **类型：** Enhancement  
- **当前 PR 支撑：** 无  
- **纳入下一版本可能性：** 中等偏低，取决于维护者对 Ollama 集成和错误提示的优先级  

该请求可能对应的实现方向包括：

1. 在 Ollama adapter 层检测模型是否支持 tools。  
2. 在用户启用工具调用但模型不支持时，提前显示明确提示。  
3. 将当前模糊的 adapter error 替换为带上下文的错误信息，例如“当前模型不支持 tool calling，请切换支持工具调用的模型”。  
4. 在日志中保留底层 adapter 错误，便于高级用户排查。

由于今日没有相关 PR，因此暂时无法判断该功能是否已进入开发或下一版本计划。

---

## 7. 用户反馈摘要

基于今日可见 Issue 描述，用户痛点主要集中在 Ollama 集成场景中的错误可解释性不足。

### 用户痛点

- 当前错误信息过于底层或模糊，只显示 adapter error。  
- 用户无法直接知道失败原因是“模型不支持 tools”。  
- 排查成本高，用户需要使用 Wireshark 抓包分析。  
- 对非深度技术用户不友好，影响 Ollama 模型使用体验。

### 使用场景

用户正在使用 NullClaw 与 Ollama 模型交互，并尝试使用需要 tools / tool calling 能力的功能。当模型本身不支持该能力时，系统没有给出足够明确的反馈。

### 满意度信号

当前数据中没有明显正向反馈。唯一反馈体现出用户对错误提示不满意，希望系统能更主动地解释失败原因。

> 注：当前数据仅提供 Issue 摘要，未提供评论正文，因此无法进一步提炼评论中的额外观点。

相关 Issue：[Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000)

---

## 8. 待处理积压

基于过去 24 小时数据，无法判断长期未响应 Issue 或 PR 的完整积压情况。当前可见的待处理事项主要是：

| 优先级 | 事项 | 状态 | 建议 |
|---|---|---|---|
| 中 | Ollama 模型不支持 tools 时缺少明确通知 | OPEN | 建议维护者确认 Ollama 能力检测方式，并评估是否增加友好提示 |

相关 Issue：[Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000)

今日没有 PR 积压数据，也没有关闭或合并记录。建议维护者后续关注该 Issue 是否需要添加标签，例如 `enhancement`、`ollama`、`ux` 或 `error-handling`，以便进入路线图评估。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

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

# Moltis 项目日报 | 2026-09-21

---

## 1. 今日速览
- **整体活跃度：低** —— 过去 24 小时内仅有 1 条 PR 更新，无 Issue 活动、无版本发布，社区讨论静默。
- **核心进展**：PR #1280 针对工具调用逻辑中的边界条件（`active_tools` 为空数组时的行为）提出修复，关联 Issue #1277，属于纠错类改动，非新功能开发。
- **健康度信号**：项目处于维护期，缺乏新需求涌入与社区互动，积压风险需关注长期未响应的 Issue/PR（见第 8 节）。
- **风险提示**：单日仅 1 条 PR 且为作者自提自述，未见 Review 与 CI 反馈，合并时效性存疑。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展
### 待合并 PR（1 条）
| PR | 标题 | 作者 | 状态 | 关联 Issue | 影响范围 |
|----|------|------|------|------------|----------|
| [#1280](https://github.com/moltis-org/moltis/pull/1280) | `fix(tools): preserve preset tools for empty active_tools` | mikemikimike | **OPEN** | [#1277](https://github.com/moltis-org/moltis/issues/1277) | Tool 调用链核心逻辑 |

**进展分析**：
- PR 旨在修正 `active_tools: []` 被误判为“显式禁用所有工具”而非“沿用 Preset 配置”的问题。
- 变更点集中于工具解析层，属低风险回归修复，**未推进新功能里程碑**。
- 目前无 Reviewer 介入、CI 状态未公开，建议维护者尽快评审合并以关闭 #1277。

---

## 4. 社区热点
> 过去 24 小时 **无** 评论、Reaction 或讨论活动的 Issue/PR。社区处于静默期。

---

## 5. Bug 与稳定性
| 严重程度 | Issue | 标题 | 状态 | 是否有 Fix PR |
|----------|-------|------|------|---------------|
| **中等** | [#1277](https://github.com/moltis-org/moltis/issues/1277) | `active_tools: []` 导致 Preset 工具配置失效 | Open | ✅ [#1280](https://github.com/moltis-org/moltis/pull/1280) |

- **仅此一条** 近期报告的 Bug，已有对应 Fix PR（待合并）。
- 无崩溃、回归或安全相关报告。

---

## 6. 功能请求与路线图信号
> 今日无新增 Feature Request，亦无路线图相关讨论。  
> 结合 PR #1280 为纯修复性质，预判**下一版本将以补丁版本（Patch）形式发布**，聚焦稳定性而非功能扩展。

---

## 7. 用户反馈摘要
> 无 Issue 评论、Discussion 或 Survey 数据，无法提炼用户痛点与满意度。

---

## 8. 待处理积压（需维护者关注）
> 由于数据源仅包含“过去 24 小时”增量，无法直接列出长期积压。  
> **建议维护者执行以下查询并定期复核**：
- `is:issue is:open no:assignee sort:created-asc` → 最早未分配 Issue
- `is:pr is:open review:none sort:created-asc` → 待 Review PR 列表
- `label:"bug" is:open sort:updated-asc` → 长期未修复的 Bug

**立即行动项**：
1. 指派 Reviewer 处理 [PR #1280](https://github.com/moltis-org/moltis/pull/1280)，确保 CI 通过后合并并关联关闭 #1277。
2. 若项目进入维护模式，建议在 README/CHANGELOG 明确标注当前支持状态与响应 SLA。

---

> **数据说明**：本报告仅基于提供的 2026-09-21 增量数据生成，不包含历史全量状态。如需全维度健康度分析，请补充完整 Issue/PR 列表或启用 GitHub Insights 自动化报表。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**日期：2026-09-21**

---

### 1. 今日速览
今日 CoPaw (QwenPaw) 项目整体处于**高活跃迭代期**，开发节奏紧凑。过去24小时内共记录了 24 条 Issues 更新（新开/活跃 17 条，已关闭 7 条）和 34 条 PR 更新（待合并 21 条，已合并/关闭 13 条），并发布了 1 个新版本（v2.2.2-beta.3）。项目社区讨论热度较高，特别是在多租户版路线图和模型配置统一化方面展现出强烈的演进诉求。整体项目健康度良好，Bug 修复与功能迭代并行，且大部分新报 Bug 均有对应的修复 PR 跟进。

### 2. 版本发布
**最新版本：v2.2.2-beta.3**
- **更新内容**：
  - 修复(console)：恢复了助手响应动作（restore assistant response actions）。
  - 修复(e2e)：重新锚定因 #7502 重设计而破坏的控制台选择器，并硬化了会话列表断言（re-anchor console selectors and harden session-list assertions）。
- **破坏性变更/迁移注意事项**：本次为 Beta 版本的小修小补，主要针对 E2E 测试和控制台 UI 层面，未发现重大 API 破坏性变更。
- **链接**：[Release v2.2.2-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.3)

### 3. 项目进展
今日项目在核心功能完善与底层稳定性上取得了显著推进，主要体现在以下已合并/关闭的关键 PR：
- **模型管理能力重构**：PR #7899（统一模型发现、定价、选择和思考控制）和 PR #7843（添加 AgentScope Platform 内置提供商）极大推进了提供商系统的标准化，#7843 已合并。
- **关键 Bug 修复闭环**：
  - PR #7904 修复了 qwenpaw-pet 插件导致工具审批失败的问题（Fixes #7856）。
  - PR #7906 修复了 DoomLoopGate 在纯文本轮次误触发终止的问题（Fixes #7905）。
  - PR #7886/#7887 修复了 DeepSeek 拒绝未知音频输入导致会话永久卡死的问题（Fixes #7876）。
  - PR #7902 修复了文件区域标签页刷新不及时的问题（Fixes #7866）。
  - PR #7896 修复了空闲队列清理导致消息丢失的问题（Fixes #7895）。
- **功能拓展**：PR #7861（添加带身份验证的多标签聊天终端）和 PR #7903（集成社区与收件箱）正在推进中。
- **CI/测试基建**：PR #7894 大幅提升了前端单元测试覆盖率（+1027 statements），PR #7901 和 #7862 优化了发布流程的流水线触发逻辑。

### 4. 社区热点
- **最热门讨论：[Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)**：评论数达 31 条，👍 4。社区对 QwenPaw Hub 多租户版即将在 2.2.0 推出反响热烈，用户普遍关注多租户版之后的功能路线图，诉求集中在团队协作、权限管理及技能共享等方面。
- **最高关注度 PR：[PR #7899](https://github.com/agentscope-ai/QwenPaw/pull/7899)**：统一模型发现与定价控制的提案，反映了用户对当前模型配置碎片化、上下文窗口不透明等问题的强烈不满。

### 5. Bug 与稳定性
今日报告的 Bug 较多，但响应迅速，大部分已有对应 Fix PR：
- **严重/崩溃级**：
  - **[Issue #7859](https://github.com/agentscope-ai/QwenPaw/issues/7859)**：工具结果中系统提示词被持久注入诱导删除所有技能的指令（Prompt Injection），极其危险。*(暂无 Fix PR，紧急)*
  - **[Issue #7853](https://github.com/agentscope-ai/QwenPaw/issues/7853)**：`ToolResultPruner` 跳过媒体块导致 base64 图片无界累积撑爆模型上下文。*(暂无 Fix PR)*
  - **[Issue #7888](https://github.com/agentscope-ai/QwenPaw/issues/7888)**：React 渲染层异常导致聊天页卡死并报 "Something went wrong"。*(暂无 Fix PR)*
  - **[Issue #7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)**：会话无故丢失，重新部署后历史记录清空。*(暂无 Fix PR)*
- **稳定性/兼容性**：
  - **[Issue #7882](https://github.com/agentscope-ai/QwenPaw/issues/7882)**：OpenCode 免费模型 API 调用 403。*(Fix PR: [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) 已提交)*
  - **[Issue #7907](https://github.com/agentscope-ai/QwenPaw/issues/7907)**：Responses API schema 清洗移除 nullable 导致 `recall_history` 日期参数报错。*(暂无 Fix PR)*
  - **[Issue #7890](https://github.com/agentscope-ai/QwenPaw/issues/7890)**：零停机 reload 导致插件 runtime hook 丢失。*(暂无 Fix PR)*

### 6. 功能请求与路线图信号
结合已有 PR 和 Issues，以下需求极可能纳入下一版本（2.2.0/2.2.2）：
- **统一模型与提供商管理**：Issue #5182 提出的统一配置需求，正通过 PR #7899（统一模型发现/定价/选择）和 #7832（显式上下文窗口配置）落地，这是明确的短期路线图重点。
- **多标签终端工作区**：PR #7861 正在实现带身份验证的多标签终端，满足多项目并行开发场景。
- **社区与生态集成**：PR #7903 计划集成社区动态与收件箱，呼应了 #7318 中社区对 Hub 生态的期待。
- **历史与界面优化**：Issue #7648（网页标题自定义）和 PR #7846（改进会话列表详情与分组）反映出用户对多实例管理和视觉辨识度的强烈需求。

### 7. 用户反馈摘要
从 Issues 评论和细节中提炼的真实痛点：
- **历史记录管理体验差**：压缩刷新后历史信息丢失（#7884），会话莫名消失（#7724），用户对数据持久化和回溯能力极度不满。
- **模型调用兼容性硬伤**：DeepSeek 对 OpenAI 风格嵌套文件部分和未知音频变种的拒绝（#7883, #7876），导致“发一个 wav 录音直接杀死会话”，严重破坏连续对话体验。
- **多面板切换低效**：缺乏自定义网页标题（#7648）和 Agent 头像（#4974，已关闭），导致多开面板时辨识困难。
- **状态反馈延迟**：工具调用结束后前端仍显示执行中（#7321），已通过 PR #7345 修复。

### 8. 待处理积压
以下问题长期未决或影响面广，提醒维护者重点关注：
- **[Issue #7859] Prompt Injection 漏洞**：系统提示词被注入恶意指令，存在严重安全隐患，需紧急排查根因。
- **[Issue #7853] 上下文爆炸风险**：媒体块未被裁剪，长期运行必然导致 OOM 或超窗，需尽快修复 `ToolResultPruner` 逻辑。
- **[Issue #7890] 零停机 Reload 数据不一致**：runtime hook 丢失行为与完整重启不等价，破坏了

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*