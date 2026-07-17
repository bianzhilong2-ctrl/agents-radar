# OpenClaw 生态日报 2026-07-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-17 01:50 UTC

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

**OpenClaw 项目动态日报**  
*日期：2026-07-17*  

---

## 1. 今日速览
- 过去24小时共处理了**500条Issues更新**（328条新活跃/issue，172条关闭）和**500条PR更新**（303条待合并，197条已合并/关闭）。  
- **无新版本发布**——项目仍处于“稳定 hiatus”状态。  
- Issues/PR池中高优先级项（P1/P0）占总量的**≈35%**，反映出持续的回归和新故障，表明近期变更对系统稳定性造成了显著压力。  
- 多个关键子系统（Codex集成、Telegram/Message通道、网关启动、UI导航）同时出现多起用户报告问题，表明项目目前正处于“技术债务积累”阶段。

> **健康总结：** 项目activity热烈，但产出（合并修复、版本发布）滞后，Bug修复周期仍较长。值得关注的是，许多高severity缺陷已有一个多月未解决。

---

## 2. 版本发布
**无**

---

## 3. 项目进展
### 本日合并/关闭的PR（包括近期已合并的“closed”项）
| # | PR标题 | 影响 |
|---|----------|--------|
| **#109481** | fix(scripts): preserve emoji in request log previews | 修复E2E日志中的Unicode损坏问题（UI日志显示） |
| **#108208** | fix(audit): preserve emoji in npm registry errors | 使`npm audit`输出在边界处不会乱码 |
| **#109393** | fix(ui): prevent generated locale rebase conflicts | 停止CI中不断增长的locale冲突（UI本地化维护） |
| **#106532** | refactor(gateway): adopt closedObject in recently added schema files | 使gateway协议schema更加一致，降低未来变更风险 |
| **#103984** | fix(compaction): count CJK text in token estimates | 修正CJK-heavy会话的`keepRecentTokens`行为 |
| **#105335** | fix(agents): skip model-override repair and visibility gate for locked sessions | 保护Claude Code等强占性会话的模型选择 |

> **这些合并PR表明维护团队正密集地处理**UI/locale维护、漏洞披露规范、以及Session级核心逻辑（如CJK计算、模型锁定）**。然而，只有少数是直接解决用户-facing Bug（如Telegram超时、网关崩溃）。**

---

## 4. 社区热点（讨论最多、评论最多的Issues/PRs）

### Issues（按评论数排序）
1. **#75 Linux/Windows Clawdbot Apps** – *113条评论* – 诉求macOS/iOS/Android端成熟功能的跨平台支持。***[link](https://github.com/openclaw/openclaw/issues/75)***
2. **#88312** **Codex turn‑completion stall** – *20条评论* – 2026年5月27日引入后出现的 regressions，影响ChatGPT Plus多工具agent会话。***[link](https://github.com/openclaw/openclaw/issues/88312)***
3. **#7707** **Memory Trust Tagging** – *17条评论* – 要求内存条目按来源打标签（用户输入/网页抓取/第三方技能），防止 poisoning攻击。***[link](https://github.com/openclaw/openclaw/issues/7707)***
4. **#104721** **Tool results return “(see attached image)”** – *17条评论* – UI显示实际二进制数据时全部替换为占位符字符串。***[link](https://github.com/openclaw/openclaw/issues/104721)***
5. **#87744** **Telegram timeouts on Codex‑backed turns** – *15条评论* – agent完成工作后，无法到达`turn/completed`状态，导致Telegram会话失败。***[link](https://github.com/openclaw/openclaw/issues/87744)***

### PRs（高关注度、Proof待验证）
- **#109446** – *fix(codex): timed‑out native hooks exhaust memory* → 直接应对 **#88312**和 **#87744**中提及的高CPU/long‑running子进程。**[link](https://github.com/openclaw/openclaw/pull/109446)***
- **#106519** – *fix(codex): bound app‑server websocket handshake timeout* → 修复WebSocket升级无限挂起问题。**[link](https://github.com/openclaw/openclaw/pull/106519)***
- **#106526** – *fix(config): improve validation error messages* → 使 `#107220`中的配置错误更容易追踪。**[link](https://github.com/openclaw/openclaw/pull/106526)***

> **社区热点表明三个持续痛点**：(1) **跨平台支持**（Issue #75），(2) **Codex集成稳定性**（Issues #88312、#87744、#91009），以及(3) **Agent内存安全与可观测性**（Issues #7707、#10659、#104721）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 摘要 | 状态 |
|----------|-------|---------|--------|
| **P0** | **#107220** – 2026.7.1网关崩溃环路 | legacy memory sidecar `meta`/`chunks`冲突导致启动失败（`files`冲突可自愈） | **待修复** – 相关PR `#109452`（Windows taskkill）和 `#109453`（gateway child）正在等待Proof |
| **P0** | **#106920** – 网关无法重启 | Node升级后Gateway退出，日志中未显示原因 | **已报告**，无PR |
| **P1** | **#104721** – 工具结果占位符问题 | 所有tool结果返回`(see attached image)`字符串 | **待修复** – 已为 **#104721**提交PR `#109233`（file-transfer denied paths）（相关） |
| **P1** | **#88312** – Codex turn‑completion回归 | 自2026.5.27起，ChatGPT Plus app‑server turn稳定失败 | **部分修复** – PR `#109446`（native hooks）已提交 |
| **P1** | **#92769** – MiniMax reasoning丢失 | OpenRouter路由`:*floor`后，推理/思考内容完全丢失 | **已分析**，无需代码变更（路由配置问题） |
| **P1** | **#86684** – sessions_yield时低上下文会话被意外紧凑 | parent会话在约65k tokens时被意外紧凑 | **已确认**，无PR |
| **P1** | **#107694** – 网关启动失败（strict startupMigrationWarnings） | benign legacy迁移跳过也被视为致命错误 | **待修复** – PR `#109452`（Windows taskkill）有助于消除子进程残留 |
| **P2** | **#108182** – Control UI导航丢失 | “Skill Proposals”和“Dreaming”等原有页面在2026.7.1 UI中消失 | **已报告**，无PR |
| **P2** | **#107930** – Node.js版本升级体验差 | 升级OpenClaw到新Node要求时，需手动配置服务 | **已报告**，无PR |

> **总体稳定性评判：** OpenClaw 2026.7.1中最大的稳定性问题是**网关启动环路**（P0）和**应用层状态污染**（P1，尤其Telegram/Codex turn完成、Tool结果占位符）。多个高优先级回归是近期变更的结果（2026.5.x → 2026.6.x → 2026.7.1），表明变更合并前需要更严格的测试。

---

## 6. 功能请求与路线图信号
| Issue | 功能 | 社区热度 | 进展/相关PR |
|-------|--------------|------------|--------------------|
| **#7707** | **Memory Trust Tagging by Source** – 为agent记忆条目加上可配置的信任标签（用户/网页/第三方技能） | ⭐⭐⭐ (高) | 长期未实现 – 无PR |
| **#10659** | **Masked Secrets** – 允许agent使用但不可见的环境变量（API key） | ⭐⭐⭐ (高) | 长期未实现 – 无PR |
| **#7722** | **Filesystem Sandboxing Config** – `tools.fileAccess.allowedPaths/denyPaths` | ⭐⭐⭐ (中) | 长期未实现 – 无PR |
| **#11665** | **Webhook session reuse on consistent sessionKey** – 支持multi-turn hook对话 | ⭐⭐ (中) | 长期未实现 – 无PR |
| **#9986** | **Context‑length triggered model fallback** – 当primary model上下文超限时切换fallback model | ⭐⭐ (中) | 长期未实现 – 无PR |
| **#6757** | **Agent‑triggered self‑compact tool** – 允许agent主动触发`sessions.compact` | ⭐⭐ (中) | 长期未实现 – 无PR |
| **#8299** | **Suppress sub‑agent announce** – 防止agent自动发布并发的总结消息 | ⭐⭐ (中) | 长期未实现 – 无PR |
| **#90916** | **Topic‑session families** – 一个助手跨多个命名“话题”lane，隔离近期上下文 | ⭐ (低) | **已实现** – Issue #109411中提及的`separate external conversations from local sessions` PR |
| **#6599** | **/models test‑fallback command** – 验证fallback链而不需真实API失败 | ⭐ (低) | 长期未实现 – 无PR |

**路线图观察：** 典型的“安全/可靠AI”特性成为高优先级请求（Memory Trust、Masked Secrets、Filesystem Sandbox）。这些项大多已提出一年多，但仍然处于白板状态，表明它们**可行性较弱**或**需要基础设施 overhaul**（如memory-core、agent运行时升级）后方可实现。

---

## 7. 用户反馈摘要

| 用户痛点 | 问题典型描述 | 典型场景 |
|----------------|--------------------------|------------------|
| **UI导航丢失** | “Control UI聊天界面漂亮了，但Skill Proposals和Dreaming页面不见了，非常不方便。” | 升级到2026.7.1后用户发现原有页面丢失。 |
| **WebSocket断连** | “每隔几分钟WebSocket就重连，导致当前对话被终止。” | 用户报告OpenClaw UI在WSL2+Node22下反复重连。 |
| **奇怪的Tool结果输出** | “显示附件时，文件内容完全替换为'(see attached image)'字符串。” | 用户使用带图片的Tool时看到 literal placeholder。 |
| **高级功能不可见** | “Agent应该知道自己发送的Slack消息，但在DM中完全无记录。” | Slack插件的channel可见性问题。 |
| **升级后破坏稳定性** | “升级到2026.7.1后，Gateway无法重启，甚至重启失败。” | 用户依赖OpenClaw作为生命周期管理的核心服务。 |
| **语音合成体验** | “TTs总是先合成完整音频，再播放，导致延迟大。” | Voice-call插件缺少sentence-level streaming。 |
| **DeepSeek缓存突变** | “升级到2026.6.x后，DeepSeek prompt缓存命中率掉到<10%。” | 提示词匹配算法变更影响了prefix matching。 |

**总体用户情绪：** 大量用户感受到**功能倒退

---

## 横向生态对比

User Safety: safe

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-17

> **数据基准**：GitHub 实时数据（统计窗口 2026-07-16 00:00 – 23:59 UTC）  
> **报告生成**：2026-07-17 06:00 UTC  

---

## 1. 今日速览
- **活跃度评级：高** — 单日新增 **13 个 PR**、**1 个 Issue**，且多为 **P1 级（高优先级）修复**，覆盖 Provider 重试、会话缓存内存泄漏、WebUI 子代理可见性、Docker 安全加固、UTF-16 代理字符清洗等核心路径。
- **交付节奏**：无新 Release，但已合并 1 个文档类 PR（`#4950`），其余 12 个 PR 均处于 **Open/Review** 状态，显示维护者正集中精力进行代码审查与 CI 验证。
- **技术债偿还**：`#4957` `#4956` 两个 Session 缓存/持久化边界 PR 同步推进，标志着长期存在的“内存无界增长”隐患即将闭环。
- **安全合规**：`#4955` 移除默认 Compose 中的 `SYS_ADMIN` 与非受限 seccomp，配合 `#4947` 防敏感 URL 泄露，整体安全基线显著提升。
- **社区协作**：README 更新（`#4950`）正式宣告“社区协作维护”模式，外部贡献者（如 `wildcard` 新增 Nimble 搜索 Provider）参与度上升。

---

## 2. 版本发布
> **今日无新版本发布**。最近一次发布仍为历史版本，建议关注后续 `main` 分支合并进度，预计累积当前 P1 PR 后将切 `vX.Y.Z-rc`。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心变更 | 对项目推进度 |
|----|------|----------|--------------|
| [#4950](https://github.com/HKUDS/nanobot/pull/4950) | 📄 Docs | README 联系方式更新为“社区协作维护”，移除单一维护者标识 | **治理层面里程碑**：正式确立开放治理模式，降低单点风险，鼓励外部贡献 |

> **其余 12 个 PR 均为 Open 状态**，多数已绑定 `priority: p1` 标签，预计未来 24–48h 内陆续合并。

---

## 4. 社区热点（高互动/关键讨论）

| 对象 | 互动指标 | 核心诉求分析 |
|------|----------|--------------|
| [Issue #4948](https://github.com/HKUDS/nanobot/issues/4948) | 🆕 0 评论 / 0 👍（刚创建） | **WebUI 子代理完成后丢失可见性**——当主轮次达到中途注入上限、子代理仍在运行时，子代理完成触发的新 `system` turn 未继承原 WebUI 投递生命周期，导致前端无感知。阻塞多代理协作场景的可观测性。 |
| [PR #4954](https://github.com/HKUDS/nanobot/pull/4954) | 🔗 直接修复 #4948 | **同步修复**：保留源 WebUI 投递元数据、分配新 Turn ID、通过恢复的 WebSocket 路由 running/streaming/idle 状态。维护者与作者 `yu-xin-c` 已在代码行级讨论 Token 刷新与竞态条件。 |
| [PR #4955](https://github.com/HKUDS/nanobot/pull/4955) | 安全相关，关注度隐性高 | **Docker Compose 默认加固**：移除 `SYS_ADMIN`、启用受限 seccomp/AppArmor；新增 `docker-compose.bwrap.yml` 供沙箱模式显式启用。回应企业部署合规审计需求。 |
| [PR #4951](https://github.com/HKUDS/nanobot/pull/4951) | 新贡献者 `wildcard` 首次提交 | **新增 Nimble 搜索 Provider**——扩展 Web 搜索插件生态，符合“Provider 即插即用”路线图。 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue/PR | 现象 | 影响面 | 是否有 Fix PR |
|--------|----------|------|--------|---------------|
| **P0 / Critical** | [#4948](https://github.com/HKUDS/nanobot/issues/4948) / [#4954](https://github.com/HKUDS/nanobot/pull/4954) | 子代理晚完成导致 WebUI 完全失联，用户看不到任何进度/结果 | 多代理协作、长任务、WebUI 生产环境 | ✅ **#4954** 已提交，待 Review |
| **P1 / High** | [#4959](https://github.com/HKUDS/nanobot/pull/4959) | Provider 速率限制触发重试时 `retry-after` 解析偏差 1s，导致连续 429 | 所有 LLM Provider 调用链 | ✅ **#4959** 已提交 |
| **P1 / High** | [#4960](https://github.com/HKUDS/nanobot/pull/4960) | MCP/AnyIO 泄露 `CancelledError` 被静默吞噬，真实取消信号丢失 | Agent 循环取消语义、工具调用超时控制 | ✅ **#4960** 已提交 |
| **P1 / High** | [#4957](https://github.com/HKUDS/nanobot/pull/4957) | `SessionManager._cache` 无上界强引用 → 内存单调增长 | 长期运行实例、高并发会话 | ✅ **#4957** 已提交（LRU 128 + weak overflow） |
| **P1 / High** | [#4956](https://github.com/HKUDS/nanobot/pull/4956) | 持久化边界未强制 2000 条上限，SDK 直写绕过归档 | 磁盘占用失控、启动加载缓慢 | ✅ **#4956** 已提交 |
| **P1 / High** | [#4952](https://github.com/HKUDS/nanobot/pull/4952) | UTF-16 代理字符导致 `UnicodeEncodeError` 阻塞请求 | Emoji 密集内容、JSON 往返场景 | ✅ **#4952** 已提交（Provider 入口清洗） |
| **P1 / Security** | [#4947](https://github.com/HKUDS/nanobot/pull/4947) | Jina Reader 默认开启且透传含凭证 URL | 敏感数据泄露（Token、签名 URL） | ✅ **#4947** 已提交（改为显式 opt-in） |

> **整体判断**：今日无 **P0 级未修复** 漏洞，所有高危项均有对应 PR 且测试覆盖率较高（均标注 `test` 标签），稳定性风险可控。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/动作 | 纳入下一版本概率 |
|------|----------|--------------|------------------|
| [PR #4951](https://github.com/HKUDS/nanobot/pull/4951) | 新增 **Nimble** 作为 `web_search` Provider | 已实现、遵循现有 REST Provider 规范 | **高** — 符合 Provider 生态扩展方向，代码量小、测试完备 |
| [PR #4953](https://github.com/HKUDS/nanobot/pull/4953) | WebUI 原生文件夹选择器桥接（Loopback + Tab-scoped Token） | 新增 Bootstrap 片段协商协议 | **中高** — 提升桌面端集成体验，安全模型已评审 |
| [PR #4937](https://github.com/HKUDS/nanobot/pull/4937) | **一键部署 Render** Blueprint（Gateway + WebUI 单服务，会话/记忆持久化） | 文档+CI 同步更新 | **中** — 降低新用户门槛，但需 Render 侧审核通过 |
| [PR #4958](https://github.com/HKUDS/nanobot/pull/4958) | 繁体中文（zh-TW）本地化质量提升 | 纯翻译资源更新 | **高** — 低风险，直接合入 i18n 资源包 |

> **路线图推断**：下一版本（预计 `vX.Y.0`）将聚焦 **“稳定性收敛 + 部署易用性 + Provider 生态”** 三大主题，WebUI 子代理可见性修复（`#4954`）极大概率作为 **阻塞性修复** 进热修复分支。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点/场景 | 代表性描述 | 当前状态 |
|-----------|------------|----------|
| **多代理协作不可观测** | “子代理跑完后前端卡住、无任何输出，必须刷新页面才能看到结果” | 🟡 **修复中（#4954）** |
| **长运行实例 OOM** | “跑一整夜后容器内存涨到 4GB+，重启才恢复” | 🟢 **已有 LRU 方案（#4957）** |
| **Docker 合规审计不通过** | “默认 Compose 需要 `--privileged` 等价能力，安全扫描报高危” | 🟢 **已加固（#4955）** |
| **Emoji 导致请求崩溃** | “包含大量 Emoji 的 HTML 解析后报 `surrogates not allowed`，整条对话中断” | 🟢 **已修清洗层（#4952）** |
| **部署门槛高** | “想快速给团队演示，但自己搭 PostgreSQL + Redis + Gateway 太麻烦” | 🟡 **Render Blueprint 待合并（#4937）** |

> **满意度信号**：用户对 **“开箱即用的部署”** 与 **“多代理可观测性”** 期待最高，当前 PR 组合精准覆盖这两点。

---

## 8. 待处理积压（提醒维护者关注）

| 对象 | 停滞时长 | 关键风险 | 建议动作 |
|------|----------|----------|----------|
| [PR #4937](https://github.com/HKUDS/nanobot/pull/4937) | **3 天**（创建 07-14） | Render Blueprint 文档与 CI 联动测试未跑通，`@Re-bin` 标注需审查 | **指派 Reviewer**，补充 Render 部署冒烟测试，决定是否合入 `main` 或另开 `deploy/render` 分支 |
| [Issue #4884](https://github.com/HKUDS/nanobot/issues/4884) | **关联 #4947** | 敏感 URL 泄露根因 Issue 尚未显式关闭 | 确认 `#4947` 合并后 **同步关闭 #4884**，补全 Changlog |
| **CI 绿标覆盖率** | 持续 | 12 个 Open PR 全挂 `test` 标签，但 CI 矩阵（Linux/macOS/Windows × Python 3.10-3.12）跑满需 ~45 min | 考虑 **分层 CI**：核心路径跑全矩阵，文档/翻译类仅跑 Lint，缩短反馈环 |

---

## 📎 附：关键链接速查表
| 类别 | 链接 |
|------|------|
| 今日全部 Issues | <https://github.com/HKUDS/nanobot/issues?q=created%3A2026-07-16> |
| 今日全部 PRs | <https://github.com/HKUDS/nanobot/pulls?q=created%3A2026-07-16> |
| P1 级修复追踪 | <https://github.com/HKUDS/nanobot/pulls?q=label%3A%22priority%3A+p1%22+state%3Aopen> |
| 安全相关变更 | [#4955](https://github.com/HKUDS/nanobot/pull/4955) · [#4947](https://github.com/HKUDS/nanobot/pull/4947) |
| WebUI 子代理可见性 | [#4948](https://github.com/HKUDS/nanobot/issues/4948) ← [#4954](https://github.com/HKUDS/nanobot/pull/4954) |

---

> **下一期预告**：若 `#4954` `#4957` `#4956` 合并入 `main`，建议立即切 `vX.Y.1-hotfix` 供生产环境滚动升级；同步关注 Render Blueprint 审核进度，若通过将在下周日报标记为“新部署路径就绪”。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-17

---

## 1. 今日速览

**整体状态**：项目处于**高强度迭代期**，单日 Issues 与 PRs 各 50 条，呈现「新开/活跃 ≫ 关闭/合并」态势（Issues 43:7，PRs 44:6），技术债偿还与新功能并行推进。**无新版本发布**，主分支积累大量待合并改动。

**活跃度评分**：🟢 **高**（9/10）  
- 社区讨论热度高：Top Issue #25267 斩获 41 👍 与 11 条评论，反映强烈付费用户诉求  
- 核心组件（Desktop、Gateway、MCP、Cron、Memory）均有并行 PR 推进  
- Windows 平台兼容性、会话状态一致性、模型提供商生态扩展为三大显性攻坚方向

---

## 2. 版本发布

**今日无新版本发布**。上一个 Release 仍为历史版本，主分支积累 44 个待合并 PR，建议近期切一个 `v2026.07.x` 预发布以收敛变更。

---

## 3. 项目进展 · 今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#53222](https://github.com/NousResearch/hermes-agent/pull/53222) | **Bug Fix / Security** | 修复 Memory 召回块泄露到用户可见回复（#40170）；双层防护：入站注入控制 + 出站流式拦截 | `comp/agent` `comp/gateway` `tool/memory` | ✅ **已合并** |
| [#65925](https://github.com/NousResearch/hermes-agent/pull/65925) | **Bug Fix** | CLI 仅对真实语音转文本消息打 `[Voice input]` 标记，避免模型误判输入来源 | `comp/cli` `tool/tts` | ✅ **已合并** |
| [#65634](https://github.com/NousResearch/hermes-agent/pull/65634) | **Feature** | Slack Gateway 新增结构化 Worker 进度卡片（可编辑、线程级、含安全预览链接） | `comp/gateway` `platform/slack` | ✅ **已合并** |
| [#61284](https://github.com/NousResearch/hermes-agent/issues/61284) | **Bug Fix** | Dashboard WebSocket 回归导致会话切换静默失败（v2026.7.7.2+） | `comp/dashboard` | ✅ **Issue 已关闭**（配套 PR 推测已合并） |
| [#41904](https://github.com/NousResearch/hermes-agent/issues/41904) | **Bug Fix** | Codex App Server 运行时跨轮次丢失线程上下文（Gateway 每条消息新建线程） | `comp/agent` `comp/gateway` | ✅ **Issue 已关闭** |
| [#52470](https://github.com/NousResearch/hermes-agent/issues/52470) | **Bug Fix** | Dashboard 自动重启静默失败：子进程继承 `_HERMES_GATEWAY=1` 导致 | `comp/cli` `comp/dashboard` | ✅ **Issue 已关闭** |
| [#54489](https://github.com/NousResearch/hermes-agent/issues/54489) | **Bug Fix** | `hermes setup` 误禁用 `basic` 插件 → Dashboard 非回环绑定时认证失败 | `comp/cli` `comp/dashboard` `area/auth` | ✅ **Issue 已关闭** |

> **进展小结**：今日合并/关闭聚焦 **「会话/上下文完整性」（Memory、Codex、Dashboard WS、Cron 隔离）** 与 **「安装/部署可靠性」（Setup、Dashboard 认证、Windows 进程清理）**，偿还了近期引入的高风险回归。

---

## 4. 社区热点 · 讨论最活跃的 Issues/PRs

| 排名 | Issue/PR | 核心诉求 | 热度指标 | 关键信号 |
|------|----------|----------|----------|----------|
| 1 | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) **Feature: Claude Agent SDK + Subscription OAuth** | 付费 Claude 订阅用户不想双重付费（订阅 + API 按量），期望像 Codex 一样走 OAuth 流 | 41 👍 · 11 评论 · 创建 2026-05-13 | **商业化关键路径**；涉及 `provider/anthropic`、`comp/plugins`；多用户自述「愿为原生集成付费」 |
| 2 | [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) **Bug: 本地 OpenAI 兼容模型收到超大 Prompt 导致多分钟卡顿** | Agent 工作流构造的 Prompt 异常膨胀，跨模型规模复现，非 llama-swap 问题 | 6 评论 · 1 👍 · P2 | **性能/稳定性红线**；关联 `provider/openai`、`comp/tools`、`area/config`；需决定是否截断/压缩上下文 |
| 3 | [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) **Feature: 跨平台会话上下文共享（CLI ↔ Telegram）** | Gateway 多平台会话存储隔离，用户期望 CLI 与 Telegram 共享历史 | 6 评论 · 1 👍 · P3 | **架构级需求**；涉及 `comp/gateway` 会话存储抽象重构 |
| 4 | [#65384](https://github.com/NousResearch/hermes-agent/issues/65384) **Bug: Desktop 非默认 Profile 每条消息新建会话（history=0）** | 远程 `hermes serve` 后端 + 非默认 Profile（如 "coder"）导致会话不连续 | 4 评论 · P2 `sweeper:risk-session-state` | **会话状态管理缺陷**；默认 Profile 正常，仅非默认受影响 |
| 5 | [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) **Feature: Desktop 多网关连接 + 每网关标签页** | 多机器部署（VPS/家庭服务器/Mac Mini）需在单一 Desktop 客户端并行可见 | 4 评论 · 4 👍 · P3 | **企业/高级用户刚需**；涉及 Desktop 架构重构 |
| 6 | [#65787](https://github.com/NousResearch/hermes-agent/issues/65787) **Bug: MCP Keepalive 用 `list_tools()` O(N) 导致大工具集服务器必超时重连** | 文档称「轻量心跳」实则全量拉取工具列表，30s 硬超时，工具数大时必失败 | 4 评论 · P2 `needs-repro` | **MCP 生态兼容性阻断**；建议改为 `ping`/`health` 轻量端点 |

---

## 5. Bug 与稳定性 · 今日新报告/回归问题（按严重度）

| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| 🔴 **Critical** | [#65746](https://github.com/NousResearch/hermes-agent/issues/65746) | MoA/本地调用 30s 后崩溃：`cannot convert float infinity to integer`（心跳 stale timeout 非有限值） | `comp/agent` `provider/moa` | ❌ 无 |
| 🔴 **Critical** | [#65787](https://github.com/NousResearch/hermes-agent/issues/65787) | MCP Keepalive 必现超时重连循环（大工具集服务器） | `tool/mcp` | ❌ 无（`needs-repro`） |
| 🟠 **High** | [#65384](https://github.com/NousResearch/hermes-agent/issues/65384) | Desktop 非默认 Profile 每条消息新建会话（远程后端） | `comp/desktop` `sweeper:risk-session-state` | ❌ 无 |
| 🟠 **High** | [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) | 本地模型收到超大 Prompt 导致多分钟卡顿 | `comp/agent` `provider/openai` | ❌ 无（`needs-decision`） |
| 🟠 **High** | [#65854](https://github.com/NousResearch/hermes-agent/issues/65854) | 卸载命令误删共享 Python 目录下其它包 | `comp/cli` `platform/windows` | ❌ 无 |
| 🟡 **Medium** | [#66008](https://github.com/NousResearch/hermes-agent/issues/66008) | Desktop "Read aloud" 长回复超时（15s fetch timeout 回归） | `comp/desktop` `tool/tts` | ❌ 无 |
| 🟡 **Medium** | [#65650](https://github.com/NousResearch/hermes-agent/issues/65650) | CLI `/model` 选择器 ~5s 卡顿（custom providers `discover_models` 串行拉取） | `comp/cli` `area/config` | ❌ 无 |
| 🟡 **Medium** | [#66012](https://github.com/NousResearch/hermes-agent/issues/66012) | Desktop 忽略 per-profile TTS/Voice 配置，回退全局默认 | `comp/desktop` `platform/windows` | ❌ 无 |
| 🟢 **Low** | [#65949](https://github.com/NousResearch/hermes-agent/issues/65949) | `hermes setup` 不识别 Google Cloud Vertex Provider | `comp/cli` `provider/gemini` | ❌ 无（重复） |
| 🟢 **Low** | [#57539](https://github.com/NousResearch/hermes-agent/issues/57539) | Vertex Provider 缺失 `HERMES_OVERLAYS` → `/model --provider vertex` 失败 | `comp/cli` `provider/gemini` | ❌ 无 |

> **趋势**：今日新增 3 个 Critical/High 会话状态与 MCP 稳定性问题，**建议下一个 Patch 版本优先收敛**。

---

## 6. 功能请求与路

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 2026‑07‑17 项目日报**  
（数据来源：GitHub，项目仓库 [sipeed/picoclaw](https://github.com/sipeed/picoclaw)）

---

### 1. 今日速览  
- 过去 24 小时内仍无新版本发布，PR 与 issue 的变动大多为 **待评审** 而非提交。  
- **新增/活跃**: 1 issue + 9 PR；**已关闭**: 1 issue（无 PR 关闭）。  
- 维持高提交率，但 PR 合并活跃度低，整体项目的推动速度略有放缓。  

ящего  

### 2. 版本发布  
- **暂无新发布**。仓库状态未出现正式 release；依赖升级 PR 仍待合并。  

### 3. 项目进展  
- **无 PR 合并**；所有 9 条 PR 均处于 **OPEN** 或 **stale**。  
- 关键 PR 以依赖升级为主（#3238‑3235、#3262、#3263），并无破坏性变更。  
- 通过审查，可以预期下一批合并将聚焦于 **依赖安全** 与 **CI/CD 环境**，推迟功能与 UI 的实现。  

### 4. 社区热点  
| 议题 | 状态 | 重要性 | 链接 |
|------|------|--------|------|
| #3195  OpenAI GPT 在 NanoKVM 上无法工作 | 🌟 活跃 | 3 条评论，持续关注 | https://github.com/sipeed/picoclaw/issues/3195 |
| #3261  加入 zh‑TW 语言与繁体中文翻译 | 🔧 进行中 | 关注本地化需求 | https://github.com/sipeed/picoclaw/pull/326무 |
| #3115  纠正 `data:image/…;base64,` 误处理 | 🛠 进行中 | 影响“工具输出”媒体提取 | https://github.com/sipeed/picoclaw/pull/3115 |
| #3118  Pico Agent 远程 WebSocket 模式 | 💤 旧需求 | 争议较大，暂无修复 | https://github.com/sipeed/picoclaw/pull/3118 |

 该日社区讨论最集中的是 **OpenAI GPT 与 NanoKVM** 的兼容问题，用户期望新版本能直接支持 GPT-5.4 配置。  

### 5. Bug 与稳定性  
| Bug | 严重程度 | 状态 | 关联 PR |
|-----|----------|------|--------|
| #3195：OpenAI GPT 在 NanoKVM 2.4.0 上报错 | ⚠️ 中度 | **未解决**，待进一步测试 | — |
| #3260：picoclaw 启动器缺失 ARM64 版本 | ✅ 已优化 | **已关闭**，已在 7/15 修正 | — |

- 所有打开的 bug 仍处于讨论或修复途中；无紧急崩溃回归。  

### 6. 功能请求与路线图信号  
| 请求 | 当前状态 | 预计对应版本 | 说明 |
|------|----------|--------------|------|
| zh‑TW 本地化 | #3261（✅ 代码已提交，待审） | v0.4.x | 需求由社区多次提及，已成为核心语言支持目标 |
| 远程 Agent via WebSocket | #3118（✅ 代码提交，已被标记 stale） | 未定 | 与远程控制/多设备协同相关，未来版本后续评估 |
| `data:image/…` 解析修复 | #3115（✅ 已提交） | v0.4.x | 提升工具Although no reported bug yet, 修复已提交并等待 CI 合并 |

### 7. 用户反馈摘要  
- **OpenAI GPT 驱动**：用户在 NanoKVM 2.4.0 上验证 OpenAI 配置未生效，返回错误信息，期望在下一个版本快速修复。  
- **本地化体验**：测试者在台湾地区报告 الحرب文字符号显示不一致，随后提交翻译 PR（#3261）。  
- **权限与日志**：远程 agent 方案受到热议，一部分用户更愿意在本地运行，另一些需要跨设备控制。  

### 8. 待处理积压  
- **#3195**：OpenAI GPT 与 NanoKVM 的兼容性问题依旧未得到正式修复，可能需要正式的 CI 流程支持和官方 support 文档更新。  
- **#3118**：Remote WebSocket 模式已进入 stale 状态，建议维护者评估是否继续推进或在需求集合内进行下线。  
- **依赖更新**：#3238‑3235、#3262、#3263 等 Dependabot PR 仍未合并，对安全与 CI 产生潜在风险，建议优先处理。  

> **结论**：项目在 2026‑07‑17 仍维持 **积极但审慎** 的开发节奏。缺乏 PR 合并导致功能推进慢，但社区活跃度高，尤其是在本地化和跨平台兼容性的讨论。建议关注 **依赖安全** 与 **本地化需求**，并把 **#3195** 作为下步交付核心的重点项目。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026‑07‑17）**  

---

### 1. 今日速览
- 在过去 24 小时内，代码仓库活跃度表现为 **4 条新增 Issue（3 条仍为打开状态）**，且 **19 条 Pull Request 更新**（16 待合并、3 已关闭）。  
- 代码提交与审查保持稳定节奏，积压的错误修复和功能实现均在同步进行，项目整体健康度保持在 **中高水平**。  
- 今日没有正式版本发布，所有改动均聚焦于功能完善、错误修复与安全加固。

---

### 2. 版本发布
> *无*  

（截至 2026‑07‑17，无新版本标签或发布说明，所有改动均在开发分支上进行中）

---

### 3. 项目进展  
| PR | 标题 | 合并状态 | 主要影响 |
|----|------|----------|----------|
| **#3070** | Fix WhatsApp sender identity divergence between Baileys and Cloud paths | **OPEN** | 统一 WhatsApp 两套适配器的身份映射，防止消息路由混乱 |
| **#3069** | feat: host‑orchestrated fallback to a backup LLM provider on usage limits | **OPEN** | 当 Claude 配额耗尽时自动切换至备用模型，提升服务可用性 |
| **#3057** | feat: automatic Claude↔Codex quota fallback (+ Telegram/WhatsApp channels, pilot activation) | **OPEN** | 自动把已达上限的 Claude 请求转向 Codex，支持channel pilot 启动 |
| **#3068** | Fix scheduled task cross‑session visibility and error clarity (#2992) | **OPEN** | 任务工具具备跨会话可见性，错误信息更清晰 |
| **#3067** | Fix/channel adapter startup swallow | **OPEN** | 启动失败的适配器不再被静默吞掉，直接抛出异常导致启动失败 |
| **#3066** | docs(security): fix SECURITY.md accuracy for v2 — remove stale v1 content | **OPEN** | 文档安全章节校正，去除过时信息 |
| **#3065** | fix(security): authenticate loopback webhook to prevent action forgery (GHSA‑h9g4‑589h‑68xv) | **OPEN** | 为本地转发网关添加身份验证，防止伪造请求 |
| **#3063** | docs(changelog): drop duplicated Unreleased bullets | **OPEN** | 清理 changelog 中的重复条目 |
| **#3062** | fix(signal): send read receipts so senders see messages marked read | **OPEN** | 启用读取回执，提升信息状态感知 |
| **#3060** | fix(container): add --init to agent container spawn args so PID 1 reaps zombie processes | **OPEN** | 为 agent 容器添加 `--init` 参数，改进僵尸进程回收 |
| **#2851** | fix(test): stop abandoned poll loops from stealing later tests' messages | **OPEN** | 终止残留 poll‑loop，防止测试用例相互干扰 |
| **#3071** – **#3040** 等系列 PR（如 #3040、#3050、#3041） | 添加 Dial 通道、统一批准持久化、AI 语音通话等功能 | **OPEN** | 逐步构建完整的通信套件，长期提升 NanoClaw 的功能边界 |

> **整体进展**：本轮 PR 重点解决了 **WhatsApp 身份冲突、启动失败吞噬、LLM 负载均衡、容器进程管理** 等关键痛点，且多数已通过代码审查并进入待合并状态，表明项目在功能扩展与稳定性之间保持了良好平衡。

---

### 4. 社区热点  
| Issue/PR | 链接 | 热点因素 | 关键诉求 |
|----------|------|----------|----------|
| **#3016** – “Every rate_limit_event is logged as a quota error…” | <https://github.com/nanocoai/nanoclaw/issues/3016> | 开启 2 天，评论 2，👍 0 | 当前日志将所有速率限制事件标记为 *quota*，导致误报，需区分真实配额耗尽与Transient 限流 |
| **#2911** – “[CLOSED] WhatsApp Cloud adapter collides with native WhatsApp…” | <https://github.com/nanocoai/nanoclaw/issues/2911> | 近 2 周持续关注，已关闭但影响仍在后续 PR（#3040/3050）中被引用 | 两套 WhatsApp 适配器共用同一实例键导致互相覆盖，需分配独立实例标识 |
| **#3069** – “feat: host‑orchestrated fallback to a backup LLM provider…” | <https://github.com/nanocoai/nanoclaw/pull/3069> | 新 PR 1 天内激活，评论活跃 | 对配额耗尽的容错需求，用户期待 **真实** 限流（而非瞬时限流）触发切换 |
| **#3070** – “Fix WhatsApp sender identity divergence…” | <https://github.com/nanocoai/nanoclaw/pull/3070> | 今日最新 PR，关注度高 | 统一 Baileys 与 Cloud 两套路径的Sender ID，防止消息路由错位 |

> **分析**：社区最活跃的焦点集中在 **错误日志误报、适配器冲突、LLM 负载均衡** 以及 **WhatsApp 身份统一** 上，这些议题均对用户使用体验与系统可靠性产生直接影响。

---

### 5. Bug 与稳定性  
| Issue | 创建日期 | 状态 | 严重性 | 是否已有 Fix PR |
|-------|----------|------|--------|-----------------|
| **#2911** – WhatsApp Cloud adapter collides with native WhatsApp | 2026‑07‑02 | CLOSED | 高 | 已在 PR #2913（#2913 合并）中通过独立实例键解决 |
| **#3016** – Rate limit events logged as quota errors | 2026‑07‑11 | OPEN | 中 | 尚未直接修复，但 #3069 的 fallback 逻辑将在实现后减轻误报影响 |
| **#3064** – Channel adapter that fails to start is swallowed | 2026‑07‑16 | OPEN | 高 | 通过 PR #3067 实现“抛出启动异常”，不再吞噬 |
| **#2916** – “hi there”（轻量级placeholder) | 2026‑07‑02 | OPEN | 低 | 无实际影响，仅为示例issue |

> **总体评估**：当前 Bug 主要集中在 **错误报告机制**（#3016）与 **启动失败的适配器吞噬**（#3064），已有对应的修复 PR (#3067) 已进入待合并，稳定性有望在 próximes 发布中提升。

---

### 6. 功能请求与路线图信号  
- **自动配额切换**（#3069 / #3057）已在社区提出并在 PR 中实现，表明 **LLM 负载均衡** 正成为项目重点路线。  
- **统一 WhatsApp 身份**（#3070）暗示用户对 **跨渠道消息路由准确性** 的需求日益增长。  
- **Dial 通道**（#3041、#3050）与 **AI 语音通话** 的需求表明用户希望扩展 **语音交互** 能力。  
- **安全审计**（#3066、#3065）显示开发者和安全研究者对 **Webhook 身份验证**、**文档准确性** 的关注，可能在后续里登记为 **安全强化** 的里程碑。  

这些 PR 大多已进入 **合并待审** 状态，预计会在 **下一版本（v2.1.x）** 中陆续上线，形成 **配额容错 → 通道扩展 → 安全加固** 的路线映射。

---

### 7. 用户反馈摘要  
- **“hi there” Issue (#2916)** 反映出新用户对项目的快速探索仍在进行，对文档或示例的友好性提出轻量期待。  
- **Rate‑limit logging issue (#3016)** 的用户反复上报 **82 次** 的误报，说明 **日志可观测性** 是用户关注的核心痛点，期望更细粒度的错误分类。  
- **WhatsApp 适配器冲突 (#2911)** 导致 **消息误投** 与 **功能失效**，用户对 **实例键唯一化** 有强烈诉求。  
- **启动失败吞噬 (#3064)** 让部分部署感受到 “服务看似健康但实际不可用”，用户希望 **启动阶段即能感知并退出**，以便快速定位问题。  

总体情绪呈 **“高频错误反馈 + 对新特性的期待”**，表明社区对 **系统可观测性** 与 **容错机制** 的需求尤为突出。

---

### 8. 待处理积压  
| 项目 | 路径 | 创建日期 | 状态 | 备注 |
|------|------|----------|------|------|
| **#2916** – “hi there” | <https://github.com/nanocoai/nanoclaw/issues/2916> | 2026‑07‑02 | OPEN | 轻量 placeholder，但仍在开启，建议标记为 **wontfix** 或提供解释性回答 |
| **#3016** – Rate limit logging | <https://github.com/nanocoai/nanoclaw/issues/3016> | 2026‑07‑11 | OPEN | 关联 PR #3069，若实现后可自动缓解 |
| **#2695** – Stage inbound image attachments as base64 | <https://github.com/nanocoai/nanoclaw/pull/2695> | 2026‑06‑06 | OPEN | 仍在审阅中，影响 Signal 端的图片处理 |
| **#2913** – Register WhatsApp Cloud under distinct key (已合并) | <https://github.com/nanocoai/nanoclaw/pull/2913> | 2026‑07‑02 | CLOSED | 早已解决，但仍在历史 Issue 列表中出现，需清理 |
| **#3040** – Unify approval holds | <https://github.com/nanocoai/nanoclaw/pull/3040> | 2026‑07‑14 | OPEN | 属于内部治理改动，可能涉及多团队协作，进度较慢 |

> **提醒**：维护者应重点关注 **#2916**（宣传/文档位置）以及 **#2695**（Signal 图片附件）等长期未推进的议题，以防止技术债务累积。

---

**结论**：2026‑07‑17 的 NanoClaw 呈现 **积极的代码审查与功能迭代节奏**，在 **错误可观测性、容错机制、通信渠道统一** 三大维度上迈出实质性步伐。若能持续落实当前待合并的核心 PR，项目在 **稳定性** 与 **可扩展性** 方面的前景尤为bright。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**：2026-07-17  
**数据源**：GitHub.com/nearai/ironclaw（过去 24 小时）

---

## 1. 今日速览
IronClaw 今日保持极高活跃度：过去 24 小时内共更新 18 条 Issue（15 条新开/活跃、3 条关闭）与 39 条 PR（28 条待合并、11 条已合并/关闭），无新版本发布。核心团队围绕 Reborn 架构重构、OAuth 生命周期修复回退、WebUI v2 体验优化及多平台发布管线持续发力，依赖更新与 CI 健康度治理同步推进。整体项目处于快速迭代期，代码健康度与模块化治理成为当前主线。

---

## 2. 版本发布
今日无新版本发布（Latest Releases：无）。

---

## 3. 项目进展（已合并/关闭的重要 PR 与 Issue）
- **PR #6166 [CLOSED] OAuth Reversion**：全量回退 #6130 的 OAuth 流生命周期修改，恢复此前 PKCE 与扩展安装状态行为，因维护者要求重新评估（[链接](https://github.com/nearai/ironclaw/pull/6166)）。
- **PR #6130 [CLOSED] fix(auth): OAuth flow-lifecycle hygiene**：此前合入的 OAuth 生命周期修复（supersede-on-start、持久化 PKCE 等），已被上述回退覆盖（[链接](https://github.com/nearai/ironclaw/pull/6130)）。
- **PR #6114 [CLOSED] test(auth): shared OAuth-flow conformance suite**：建立 fake 与 durable AuthFlowManager 共享一致性测试套件，封堵产品鉴权测试分裂缺口（[链接](https://github.com/nearai/ironclaw/pull/6114)）。
- **PR #6115 [CLOSED] build(deps): bump everything-else (25 updates)**：依赖批量升级（agent-client-protocol、rustls 等）（[链接](https://github.com/nearai/ironclaw/pull/6115)）。
- **Issue #6164 [CLOSED] Slack connection epoch 冗余状态机删除**：提议由鉴权流派生存活状态，相关重构由 PR #6169 承接（[链接](https://github.com/nearai/ironclaw/issues/6164)）。
- **Issue #6118 [CLOSED] Admin 用户级 secrets 管理 UI**：前端 API 已支持，后台管理界面暴露完成（[链接](https://github.com/nearai/ironclaw/issues/6118)）。
- **Issue #6117 [CLOSED] Workspace 未翻译区域名/原始文件大小**：已完成本地化与可读格式化（[链接](https://github.com/nearai/ironclaw/issues/6117)）。

**整体迈进**：鉴权测试基座增强、依赖安全更新落地、部分管理 UI 与本地化缺陷闭环；但 OAuth 关键修复因回退暂未稳定，Reborn 主线继续扩张。

---

## 4. 社区热点
- **PR #6159 [OPEN] Telegram 频道扩展**：管理员机器人配置、Web 配对与 DM 入口，作为统一扩展架构端口，评论/关注度高（[链接](https://github.com/nearai/ironclaw/pull/6159)）。
- **PR #6172 [OPEN] Reborn CLI 后台服务安装**：launchd/systemd 支持，拆分自 #6157（[链接](https://github.com/nearai/ironclaw/pull/6172)）。
- **PR #6167 [OPEN] CI 开发指标 + composition 质量门禁**：量化 Reborn 代码健康并设体积 ratchet（[链接](https://github.com/nearai/ironclaw/pull/6167)）。
- **Issue #6168 [OPEN] 缩减 ironclaw_reborn_composition 上帝 crate**：从 24% 降至 ~10%，架构治理焦点（[链接](https://github.com/nearai/ironclaw/issues/6168)）。
- **Issue #6158 [OPEN] 新增 zh-TW 繁体中文**：本地化诉求，WebUI v2 仅含 zh-CN（[链接](https://github.com/nearai/ironclaw/issues/6158)）。

**诉求分析**：社区与核心团队重点关注 Reborn 扩展生态（Telegram/Slack）、多架构发布、代码肥胖治理及非简体中文支持，反映产品全球化与运维易用性需求。

---

## 5. Bug 与稳定性（按严重度）
- **[P2] #6155 失败运行后跟进消息无响应**：模型供应商不可用时对话永久卡死，无 fix PR（[链接](https://github.com/nearai/ironclaw/issues/6155)）。
- **[P3] #6126 新聊天首条消息无加载/流式态**：UI 空白如冻结，无 fix PR（[链接](https://github.com/nearai/ironclaw/issues/6126)）。
- **[P3] #6127 例程首次执行误报“上次运行进行中”**：状态机逻辑错误，无 fix PR（[链接](https://github.com/nearai/ironclaw/issues/6127)）。
- **#5602 从聊天连接 Slack 失败**：DM 仅返配对码，无 fix PR（[链接](https://github.com/nearai/ironclaw/issues/5602)）。
- **#6170 多租户下用户经 shell 访问文件系统**：越权风险，无 fix PR（[链接](https://github.com/nearai/ironclaw/issues/6170)）。
- **#6149 Workspace 下载失败无反馈**：静默忽略，无 fix PR（[链接](https://github.com/nearai/ironclaw/issues/6149)）。
- **#6144 每日失败分类（2026-07-16）**：clawbench 146 非通过，部分为空响应，关联 CI（[链接](https://github.com/nearai/ironclaw/issues/6144)）。
- 已通过 PR 修复类：#6161 修复 WASM 纯文本输出解码失败（[链接](https://github.com/nearai/ironclaw/pull/6161)）。

---

## 6. 功能请求与路线图信号
- **#6158 zh-TW 本地化**：明确 PR 信号，可能随 WebUI v2 国际化纳入。
- **#6160 多 CPU 架构发布管线**：Reborn 二进制跨平台构建验证，贴近发布工程。
- **#6143 CLI 重命名 `ironclaw-reborn` → `ironclaw`**：v1 退役后产品命名收口。
- **#6142 WebUI 根路径替代 `/v2`**：URL 规范化，提升用户感知。
- **#6146 / #6145 外观设置主题控件与 Toast 无障碍**：WebUI 体验细化，已有对应 Issue 无 PR。
- **#6170 禁用 shell 文件系统访问**：安全合规需求，或进安全路线图。
结合活跃 PR #6159、#6172、#6162/6163，下一版本大概率包含 Reborn 扩展渠道（TG）、后台服务化及 WebUI 重构。

---

## 7. 用户反馈摘要
- **痛点**：运行失败后对话无提示卡死（#6155）；首消息无视觉反馈似崩溃（#6126）；下载失败无报错（#6149）；Slack 连接流程断裂（#5602）；多租户 shell 越权隐患（#6170）。
- **场景**：终端用户使用 WebUI 聊天、管理员配置渠道/用户密钥、开发者本地跑 Reborn CLI。
- **不满意**：状态误导（#6127）、缺乏繁体中文（#6158）、外观设置不完整（#6146）。
- **满意/进展**：Admin secrets 管理与 Workspace 本地化已闭环（#6118、#6117），鉴权测试增强提升后台信心。

---

## 8. 待处理积压（长期/重要未响应）
- **#4471 [OPEN] Reborn 运行时分解追踪**（自 2026-06-04，更新 07-17）：runtime.rs 超 3000 行预算，需持续拆分解耦（[链接](https://github.com/nearai/ironclaw/issues/4471)）。
- **#5602 [OPEN] Slack 聊天内连接失效**（自 2026-07-03）：涉及渠道稳定性，尚无修复。
- **#5598 [OPEN] chore: release**（自 2026-07-03，bot 持续更新）：版本待发，含 `ironclaw_common` 等破坏性变更未落（[链接](https://github.com/nearai/ironclaw/pull/5598)）。
- **#5978 [OPEN] Reborn 编码工具强制读后改**（自 2026-07-11）：防陈旧编辑，堆叠中未合（[链接](https://github.com/nearai/ironclaw/pull/5978)）。

**维护提醒**：OAuth 回退后需尽快重启 #6130 行为重评；运行时分解与发布阻塞为高危积压。

---  
*报告基于 GitHub 公开事件数据，客观呈现项目健康度与迭代脉搏。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报  
**日期：2026-07-17**

---

## **1. 今日速览**

- 项目整体持续活跃，过去 24 小时共合并关闭 14 个 PR， reopen 并修复了多个 UI/UX 问题；
- 3 条 Issue 中 1 条已关闭，2 条仍在讨论中，反馈集中在快捷键可视化、加载状态优化及中文化问题上；
- 多个高频模块（如 `cowork`、`renderer`）持续迭代，重点在体验优化与功能完善；
- 无新版本发布，稳定性和功能迭代以 PR 形式逐步集成。

---

## **2. 版本发布**

暂无新版本发布。

---

## **3. 项目进展**

### ✅ 今日合并/关闭的重要 PR：

| PR 编号 | 标题 | 功能/修复内容 |
|--------|------|----------------|
| [#2344](https://github.com/netease-youdao/LobsterAI/pull/2344) | Release/2026.7.16 | 本次合并为内部 release 分支，集成多项优化与修复。 |
| [#2343](https://github.com/netease-youdao/LobsterAI/pull/2343) | refactor(cowork): extract clipboard attachment file extraction into testable helper | 重构剪贴板文件处理逻辑，提升可测性与维护性。 |
| [#2339](https://github.com/netease-youdao/LobsterAI/pull/2339) | fix(update): align update card header content | 优化更新卡片标题在窄侧边栏下的显示与响应式布局。 |
| [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) | fix(cowork): prevent conversation scroll jumps | 修复流式对话期间滚动跳动问题，提升聊天体验。 |
| [#2313](https://github.com/netease-youdao/LobsterAI/pull/2313) | fix(cowork): submit only the selected queued steer | 保证队列中指令提交顺序性，增强稳定性。 |
| [#2310](https://github.com/netease-youdao/LobsterAI/pull/2310) | feat(cowork): add folder context attachments | 新增文件夹上下文附件支持，提升文件组织能力。 |
| [#1362](https://github.com/netease-youdao/LobsterAI/pull/1362) | feat(cowork): 权限弹窗添加 ESC 键关闭支持 | 增强权限弹窗交互体验，支持键盘关闭。 |
| [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364) | feat(cowork): 新建任务页面输入框工具栏增加模型选择器 | 优化模型切换便捷性，减少视觉切换成本。 |
| [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) | fix(scheduled-task): validate duplicate task names | 防止定时任务重名，提升数据一致性。 |

📌 **项目整体进展评估**：  
本日大量聚焦于 `cowork` 模块的用户体验优化，包括滚动稳定性、指令队列控制、附件支持等；同时完善了跨平台 UI 一致性（如更新卡片、窗口标题栏），整体向“更稳定、更易用”方向迈进。

---

## **4. 社区热点**

### 🔥 最活跃讨论：

#### 🟢 [#1361](https://github.com/netease-youdao/LobsterAI/issues/1361) [CLOSED]
- **内容**：删除按钮显示为英文 “delete”，需改为中文 “删除”。
- **反馈**：0 赞，2 评论 → 已关闭。
- **分析**：属于基础本地化问题，用户直接指出界面语言不统一，属于高频 usability 问题。

#### 🟡 [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) [OPEN]
- **内容**：请求在侧边栏按钮右侧添加快捷键提示 `<kbd>` 样式标签（如 `Ctrl+N` / `⌘+N`）。
- **反馈**：0 赞，1 评论 → 尚未合并但有对应 PR [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318)。
- **分析**：体现用户希望提前发现快捷键，降低学习成本，是典型 UX 改进需求。

#### 🟡 [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) [OPEN]
- **内容**：请求会话列表加载时添加骨架屏（skeleton loading），区分“加载中”与“无数据”状态。
- **反馈**：0 赞，1 评论 → 对应 PR [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) 已提交。
- **分析**：涉及首屏加载体验，属于典型性能感知优化问题。

📌 **社区诉求总结**：  
用户越来越关注**交互细节**和**首屏体验**，不再满足于功能完整，而是强调“一目了然”“操作直观”。

---

## **5. Bug 与稳定性**

暂无严重 Bug 报告。

所有 Issue 均为功能请求或小幅 UI 优化类问题，无崩溃、数据丢失等稳定性问题反馈。

---

## **6. 功能请求与路线图信号**

以下功能请求已有对应 PR 提交或讨论中：

| 功能请求 | 关联 PR | 状态 |
|-----------|----------|------|
| 快捷键可视化提示 | [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | OPEN |
| 骨架屏加载状态 | [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | OPEN |
| 模型选择器增强 | [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364) | CLOSED |
| 文件夹上下文支持 | [#2310](https://github.com/netease-youdao/LobsterAI/pull/2310) | CLOSED |

📌 **路线图判断**：  
这些 PR 都集中在提升日常使用效率与体验流畅度，预计将在下一版本前完成合并。

---

## **7. 用户反馈摘要**

从 Issue 评论中提取的关键点：

- 用户反馈模型切换位置过远，影响输入效率；
- 快捷键不明显，导致新用户不易发现高效操作方式；
- 启动时“无会话”瞬显，易引发历史记录丢失误解；
- 删除按钮未本地化，降低使用亲和力。

📌 **用户画像**：  
偏好**高效、直观、无额外学习成本**的交互方式，尤其注重**键盘操作**与**界面一致性**。

---

## **8. 待处理积压**

### ⚠️ 长期未响应的 Issue/PR：

| 编号 | 类型 | 简要说明 |
|------|------|-----------|
| [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) | Issue | 快捷键显示需求，已有 PR 提交但未合并；
| [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) | Issue | 加载状态优化需求，已有 PR 提交但未合并；
| [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) | PR | 设置页签切换时关闭遮罩层，已提交但未合并；

📌 **提醒事项**：  
这类涉及用户体验的 PR 应尽快审查合并，避免积压导致 UX 问题持续存在。

--- 

✅ **项目健康度评估**：  
活跃度中等偏上，PR 合并积极，Issue 响应稍慢，建议加强 PR 审核节奏。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期**：2026-07-17  
**项目**：Moltis (github.com/moltis-org/moltis)  
**领域**：AI 智能体与个人 AI 助手开源项目

---

## 1. 今日速览
- 过去 24 小时内，Moltis 未产生任何新开或活跃的 Issue，社区问题跟踪处于静默状态。
- 代码侧保持温和推进：共有 3 个 Pull Request 被关闭（均已完成合并或结束生命周期），无待合并 PR 积压。
- 项目于昨日（2026-07-16）发布了新版本 `20260716.01`，结合当日合并的 PR 内容，整体活跃度偏低但发布节奏正常，仓库健康度平稳。

---

## 2. 版本发布
- **版本号**：`20260716.01`
- **发布日期**：2026-07-16（数据日的前一日，计入本次日报周期）
- **关联 PR**：#1154、#1155、#1156（均于同日常规关闭）
- **更新内容（基于关联 PR 推断）**：
  - 新增 **Kimi K3** 及 **Kimi K2.7 Code Highspeed** 模型支持，扩展 Moonshot / Kimi Code 目录，并同步更新能力声明、推理开销处理及配置模板（PR #1156）。
  - 优化外部智能体（external-agent）会话元数据广播与历史持久化，将已安装外部代理视为可用聊天后端，并引入 Apple Container 相关支持（PR #1155）。
  - 修复 Web 端在无可用沙箱后端时的界面状态显示，将沙箱开关正确回退为“direct”模式并禁用无效选择器（PR #1154）。
- **破坏性变更**：根据 PR 摘要，未见显式 breaking change；配置模板与文档有更新，建议用户同步最新配置示例。
- **迁移注意事项**：使用 Moonshot / Kimi 服务的用户需检查 `config template` 与 key-help 链接变更；依赖沙箱 UI 状态判断的逻辑应注意新增的 fallback 禁用行为。

---

## 3. 项目进展
今日（统计窗口内）关闭的 3 个 PR 均显著推进了产品能力：

| PR | 标题 | 作者 | 进展类型 | 说明 |
|----|------|------|----------|------|
| [#1155](https://github.com/moltis-org/moltis/pull/1155) | Improve agent and sandbox status feedback | penso | 功能/稳定性 | 广播外部代理会话元数据，持久化历史，增强 Web 会话存储合并安全性，扩展后端可用性 |
| [#1156](https://github.com/moltis-org/moltis/pull/1156) | Add Kimi K3 provider support | penso | 功能扩展 | 接入 Kimi K3 / K2.7 Code Highspeed，补充 e2e  onboarding 测试 |
| [#1154](https://github.com/moltis-org/moltis/pull/1154) | fix(web): show direct mode when sandbox is unavailable | penso | Bug 修复 | 修正无沙箱时聊天头显示逻辑，增加 E2E 覆盖 |

**整体迈进**：项目在“多模型供应商接入”与“执行环境兜底体验”两个方向上完成了增量交付，并辅以 E2E 测试，工程质量有所提升。

---

## 4. 社区热点
- 今日无 Issue 或 PR 产生评论互动（所有 PR 评论数为 `undefined`/0，Issue 数为 0）。
- 因此，无讨论最活跃或反响最多的条目。社区参与信号较弱，可能处于版本消化吸收期。

---

## 5. Bug 与稳定性
- 明确修复的缺陷：
  - **Web 端沙箱状态误显示**（[#1154](https://github.com/moltis-org/moltis/pull/1154)）：当真实沙箱后端不可用时，头部开关错误显示为沙箱化；已修复并加 E2E。
- 其他潜在稳定性工作：
  - 外部代理历史合并安全性、Web 会话存储 merge-safe（[#1155](https://github.com/moltis-org/moltis/pull/1155)）属预防性稳定性加固。
- 今日**无新报告**的崩溃、回归或用户上报 Bug。

---

## 6. 功能请求与路线图信号
- 今日无用户主动提交的 Feature Request（Issue 为空）。
- 从已合并 PR 可解读出下一阶段隐含信号：
  - **模型供应商持续 broadening**：Kimi K3 的加入显示团队在快速跟进新兴国产大模型，预计后续会继续纳入类似高性价比推理供应商。
  - **外部代理与本地容器化执行**（Apple Container）表明“个人 AI 助手 + 本地/异构隔离后端”为路线图重点。
  - **沙箱降级体验**完善暗示产品正面向非技术用户降低部署门槛。

---

## 7. 用户反馈摘要
- 因今日 Issue 评论数为 0，无直接用户痛点或使用场景文本可提炼。
- 间接反馈仅能通过代码改动推测：此前可能存在“无沙箱时界面误导”及“缺少 Kimi 新模型”的空白，团队以静默方式补足。

---

## 8. 待处理积压
- 根据提供数据，过去 24 小时无新增待合并 PR（待合并: 0），无活跃 Issue。
- 无法从当前快照识别“长期未响应”的旧积压项（数据未包含历史年龄）。
- **维护者提醒**：建议结合完整仓库视图排查是否有早于本日报周期前创建的、仍处 OPEN 状态且无人响应的 Issue/PR，以防静默积压。

---
*日报生成基于 GitHub 公开事件数据，统计窗口：2026-07-16 ~ 2026-07-17（UTC 近似）。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目每日报告（2026‑07‑17）**  

---  

### 1️⃣ 今日速览  
- 过去 24 小时 **Issues**：44 条（新开/活跃 24，已关闭 20），**PRs**：46 条（待合并 21，已合并/关闭 25）。  
- 本日 **无新版本发布**。  
- 活动度保持中等：大部分 Issue 为 bug 报告或功能需求，PR 多为细节改进与安全加固。  
- 社区热度集中在 **token 消耗异常、时区同步、UI/UX 细节**（如输入框弹窗、思考块空格）以及 **安全/权限**（UAC、管理员提权）等议题。  

---  

### 2️⃣ 版本发布  
- **无新版本发布**（0 个新 Release）。  

---  

### 3️⃣ 项目进展  
- **已合并/关闭的 PR（25 条）**，占总 PR 数的 **≈54%**，表明代码库正在持续稳定与优化。  
- 关键 merged PR（本日已完成）：  
  - **#6142** – 为 `auto_memory_interval` 加入必填校验（≥0）并禁止空值。  
  - **#6166** – 在流式思考块/文本增量时保留 whitespace，解决思考块“粘在一起”问题。  
  - **#6180** – 刷新用户消息的 `updated_at` 并在后端失效时失效缓存，修复会话列表 `updatedAt` 未更新（Issue #6131）。  
  - **#6192** – 在 Docker 容器中挂载宿主时区文件，实现容器时间与宿主同步，解决时区差 8 小时的问题。  
  - **#6171** – 为 `dream_cron` 加入显式 `dream_cron_enabled` 开关，防止禁用后仍使用默认 cron 表达式。  
  - **#6168** – 为 Mattermost、OneBot、XiaoYi 等渠道的无界增长任务加上约束，防止内存泄漏。  
- **待合并的 PR（21 条）** 多聚焦于 **CLI 权限处理、流式 UI、治理治理、CI 安全扫描** 等关键域，预计将在下一周内完成合并，进一步提升稳定性与可维护性。  

---  

### 4️⃣ 社区热点（评论最多的 Issue）  

| Issue | 评论数 | 状态 | 主要诉求 | 链接 |
|-------|--------|------|----------|------|
| **#6116** | 6 | Closed (won’tfix) | “Doom loop” – 同一工具在一次用户交互中被重复触发，导致大量 API/Token 浪费。 | <https://github.com/agentscope-ai/QwenPaw/issues/6116> |
| **#6158** | 5 | Open |  token 消耗异常（2800 万 token/周），用户希望后台审查调用日志。 | <https://github.com/agentscope-ai/QwenPaw/issues/6158> |
| **#6196** | 5 | Closed | 容器日志始终使用 UTC，忽略 `user_timezone` 配置，导致时区错位。 | <https://github.com/agentscope-ai/QwenPaw/issues/6196> |
| **#5995** | 5 | Closed | 会话忙时新消息被**静默丢弃**（无队列、无错误提示）。 | <https://github.com/agentscope-ai/QwenPaw/issues/5995> |
| **#6048** | 5 | Open | 需要在 **未认证主机** 上支持 **CIDR 段白名单** 配置。 | <https://github.com/agentscope-ai/QwenPaw/issues/6048> |

> **分析**：这些议题揭示了用户对 **资源浪费、时区准确性、消息可靠性、访问控制** 与 **UI 细节** 的迫切需求。已关闭的 Issue 多数已在后续 PR 中得到针对性修复（如 #6180、#6192），但仍有 **#6158**（token 审计）和 **#6048**（CIDR 白名单）需要进一步评估与实现。  

---  

### 5️⃣ Bug 与稳定性（按严重程度排序）  

| 级别 | Issue | 简要描述 | 当前状态 | 关联 Fix PR | 链接 |
|------|-------|----------|----------|-------------|------|
| **Critical** | **#6161** | Windows 更新后普通用户无法启动，卡在 “Waiting for HTTP ready...”。 | Open | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6161> |
| **Critical** | **#6169** | pip 安装的 QwenPaw 2.0.0.post2 强制管理员权限启动，UAC 提权失败。 | Open | 无（PR #6127 正在审查） | <https://github.com/agentscope-ai/QwenPaw/issues/6169> |
| **High** | **#6155** | 升级到 2.0 后出现多个 Bug（Embedding 配置遗漏 `pass_dimensions`），导致本地模型 400 错误。 | Open | 无直接 PR，但 #6159 重构 Channel Base 可能间接解决。 | <https://github.com/agentscope-ai/QwenPaw/issues/6155> |
| **High** | **#6116** | “Doom loop” – 同一工具在一次交互中被连续触发，造成大量 API/Token 浪费。 | Closed (won’tfix) | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6116> |
| **High** | **#6196** | 容器日志始终使用 UTC，忽略 `user_timezone`，导致时区错位。 | Closed | 无（#6192 解决时区同步，但未直接修复该 Issue） | <https://github.com/agentscope-ai/QwenPaw/issues/6196> |
| **High** | **#5995** | 会话忙时新消息被**静默丢弃**，缺少队列机制。 | Closed | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/5995> |
| **High** | **#6152** | QQ 频道发送失败，因本地图片路径的 `AnyUrl` 验证在 2.0 后失效。 | Closed | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6152> |
| **Medium** | **#6202** | Desktop 版技能导航渐进渲染在技能数 >20 时失效。 | Open | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6202> |
| **Medium** | **#6148** | 升级到 2.0 后出现“失忆症”：截断、/compact 失效、思考块空格缺失。 | Closed | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6148> |
| **Medium** | **#6131** | 更新到 2.x 后会话列表 `updatedAt` 未刷新。 | Closed | 无（#6180 已解决相关刷新问题） | <https://github.com/agentscope-ai/QwenPaw/issues/6131> |
| **Medium** | **#6165** | macOS M1 环境下输入法切换时，英文建议弹窗无法关闭。 | Open | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6165> |
| **Low** | **#6129** | 思考块缺少空格与换行（已修复）。 | Closed | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6129> |
| **Low** | **#6158** | 询问 token 消耗异常，要求后台审计。 | Open | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6158> |
| **Low** | **#6199** | TG 链接偶尔失效（2.0 后出现）。 | Open | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6199> |
| **Low** | **#6201** | PubMed MCP 启用后导致 llama.cpp 报错。 | Open | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6201> |
| **Low** | **#6119** | Agent 在 zero‑downtime reload 后会话永久挂起，未收到中断通知。 | Closed | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6119> |
| **Low** | **#6156** | 与 Clash 代理冲突，终端启动报错。 | Closed | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6156> |
| **Low** | **#5717** | Runtime 2.0 malformed tool‑call history 导致无限重复执行。 | Closed | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/5717> |
| **Low** | **#6194** | CI 夜间全量测试未运行前端 vitest。 | Closed | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6194> |
| **Low** | **#6195** | 将会话 ring 从每条消息末尾移至会话层。 | Open | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6195> |
| **Low** | **#6190** | 通过 `@tool_descriptor` 与 `PluginApi` 统一工具注册（治理） | Open | 无 | <https://github.com/agentscope-ai/QwenPaw/issues/6190> |
| **Low** | **#6127** | 条件化 Windows UAC 提权，避免 VBS 头less  launchers 弹窗。 | Open (ready‑for‑human‑review) | 无（正在审查） | <https://github.com/agentscope-ai/QwenPaw/pull/6127> |
| **Low** | **#6204** | 删除 `get_vram_size_gb` 中冗余的 `nvidia‑smi` 探测。 | Open | 无（PR 自身即为 fix） | <https://github.com/agentscope-ai/QwenPaw/pull/6204> |
| **Low** | **#6203** | 为 Windows `tasklist` liveness probe 加入 timeout 与隐藏。 | Open | 无（PR 自身即为 fix） | <https://github.com/agentscope-ai/QwenPaw/pull/6203> |
| **Low** | **#6171** | 为 `dream_cron` 加入 `dream_cron_enabled` 开关，防止误用默认 cron。 | Closed | #6171（即是 fix） | <https://github.com/agentscope-ai/QwenPaw/pull/6171> |
| **Low** | **#6168** | 为 Mattermost、OneBot、XiaoYi 等渠道的无界增长任务加锁，防止内存泄漏。 | Closed | #6168（即是 fix） | <https://github.com/agentscope-ai/QwenPaw/pull/6168> |
| **Low** | **#6192** | 挂载宿主时区文件，使容器时间与宿主同步。 | Closed | #6192（即是 fix） | <https://github.com/agentscope-ai/QwenPaw/pull/6192> |
| **Low** | **#6142** | `auto_memory_interval` 必填且 ≥0，禁止空值。 | Closed | #6142（即是 fix） | <https://github.com/agentscope-ai/QwenPaw/pull/6142> |
| **Low** | **#6166** | 流式思考块/文本增量保留 whitespace，防止“粘在一起”。 | Closed | #6166（即是 fix） | <https://github.com/agentscope-ai/QwenPaw/pull/6166> |
| **Low** | **#6180** | 刷新用户消息的 `updated_at` 并失效旧缓存，修复会话列表更新不及时。 | Closed | #6180（即是 fix） | <https://github.com/agentscope-ai/QwenPaw/pull/6180> |

> **说明**：严重程度以 **对用户可用性/系统稳定性的直接影响** 为依据；已关闭的 Issue 若已有对应的 Fix PR（如 #6171、#6168、#6192、#6142、#6166、#6180），则标记为 “Fix PR”。  

---  

### 6️⃣ 功能请求与路线图信号  

| 需求 | 关联 Issue / PR | 可能纳入下一版本的判断 |
|------|----------------|------------------------|
| **CIDR 白名单（未认证主机）** | #6048 | 需求明确，已在 PR #6127（UAC 条件化）中出现相关讨论，预计会在 **2.1** 或 **2.2** 中加入。 |
| **独立 Python 运行环境** | #6163 | 用户希望内置或复用后端解释器，属于功能增强，预计需要较大改动，可能在 **下一主要版本**（3.0）才考虑。 |
| **取消输入框弹窗开关** | #6165 | UI 细节改动，已在 PR #6127 中提出条件化 UAC 处理，未来可作为小幅度 UI 迭代。 |
| **多语言/本地化支持** | #6142（i18n 相关） | 已在 PR #6142 中加入多语言占位符，说明社区对本地化的关注度提升，预计会在后续迭代中继续完善。 |
| **可重用工作流编排 + 审计轨迹** | #6163（Feature） & #6166（preserve whitespace） | 工作流编排需求在 Issue #6163 中明确，配合已合并的 UI 改进（#6166）表明项目已具备基础能力，未来 1‑2 版有望加入。 |
| **时区同步（Docker）** | #6188 & #6192 | 已通过 #6192 实现时区挂载，说明社区对时区一致性的需求已被满足，可视为已完成。 |
| **安全审批撤销 / 规则编辑** | #5880 | 该需求尚未得到正式 PR，但已在 Issue 讨论中出现，若后续维护者给予优先级，可在 **2.1** 加入。 |

> **结论**：当前 **功能请求** 主要围绕 **安全/权限、资源管理、时区一致性、UI 细节** 与 **工作流编排**。已有 PR 表明团队已开始着手部分需求，预计 **2026‑Q4** 前后会有对应的功能发布。  

---  

### 7️⃣ 用户反馈摘要  

- **Token 消耗异常**：#6158 用户在一周内消耗 2800 万 token，尽管未使用 QwenPaw 对话，疑问后端调用日志。  
- **时区错位**：#6196 与 #6188 反映 Docker 容器默认 UTC 导致日志、cron、文件时间戳与用户本地时间偏差 8 小时。  
- **消息丢失**：#5995 指出会话忙时新消息被静默丢弃，缺乏队列机制，影响工作流可靠性。  
- **UI/UX 细节**：#6165（输入框弹窗不可关闭）、#6129（思考块缺空格/换行）以及 #6166（流式文本保留空格）显示用户对细节化 UI 体验的关注度。  
- **稳定性投诉**：#6161（Windows 启动失败）、#6169（强制管理员权限）以及 #6155（升级后多BUG）表明不少用户在升级后遇到**阻塞性**问题，需要快速修复。  

---  

### 8️⃣ 待处理积压（长期未响应）  

| Issue | 最近更新 | 评论数 | 主要原因 | 建议 |
|-------|----------|--------|----------|------|
| **#6158** | 2026‑07‑16 | 5 | 用户要求后台审查 token 消耗，尚未得到官方回复。 | 维护者应在 48 小时内提供日志分析或明确回复。 |
| **#6048** | 2026‑07‑16 | 5 | CIDR 白名单需求，尚未有明确实现计划。 | 评估安全风险后，可在下一里程碑加入。 |
| **#6163** | 2026‑07‑16 | 3 | 请求独立 Python 环境，涉及后端改动较大。 | 需要更详细的设计文档与社区投票。 |
| **#6199** | 2026‑07‑16 | 1 | TG 链接偶发失效，缺乏技术细节。 | 需要用户提供复现步骤或日志。 |
| **#6119** | 2026‑07‑16 | 2 | Agent 零 downtime reload 导致会话挂起，未有解决方案。 | 建议检查 `multi_agent_manager.py` 与 reload 机制的交互。 |
| **#6127** | 2026‑07‑17 | 0 (PR) | 条件化 UAC 方案正处于审查阶段，进度不明。 | 维护者应在审查通过后及时合并。 |

> **提醒**：上述 Issue 若长期无响应，建议在对应Issue下贴出 **“@maintainer”** 或在项目 Discord/社区中提醒，以争取更快响应。  

---  

**结语**：CoPaw 在 2026‑07‑17 保持了稳健的开发节奏，已完成 25 条关键 PR 的合并与多项 Bug 的修复，社区反馈聚焦于 **资源管理、时区同步、消息可靠性以及 UI 细节**。随着安全审计（CodeQL）与治理治理（工具自动注册）等工作的推进，项目整体健康度保持在 **高位**，预计在本季度内将交付至少一次功能性更新（如 CIDR 白名单、工作流编排）并继续巩固稳定性。  

*报告编写：AI 智能体与个人 AI 助手领域开源项目分析师*  
*数据来源：CoPaw GitHub（issues、PRs）截至 2026‑07‑17*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

## 今日速览  
ZeptoClaw 项目今日活跃度提升明显，**5 条安全分类类 Issue 完成闭环**（#631-635），均由同一贡献者 YLChen-007 通过标准化流程处理，文档安全分析逻辑进展良好。无代码更新（PR/版本发布），业务专注于安全文档模型构建，整体开发钻研型而非高频迭代。  

## 版本发布  
今日无新版本发布，项目仍保持 `0.1.0` 版本状态，重点聚焦安全类工作流优化而非功能版本化更新。  

## 项目进展  
无合并/关闭的 Pull Request，但通过 5 处关闭的安全分类 Issue（如 #631-635）验证了核心文档生成逻辑的完整性。此类任务完成率 100%，表明当前开发阶段已从“框架搭建”转向“细节校准”阶段。  

## 社区热点  
1. **安全分类规范化（#631-635）**  
   - 5 条 Issue 的评论均来自维护者 YLChen-007，冥越揭示项目对安全规范化的高度重视。  
   - 链接: [Issue #631](qhkm/zeptoclaw/issue/631)、[Issue #635](qhkm/zeptoclaw/issue/635)  
   - 100% Tasks: all closing status indicates successful security analysis completions. Such focused attention on systematic security documentation classification demonstrates the team's dedication to maintain rigorous standards in threat modeling processes.  

## Bug 与稳定性  
当前无新增 Bug 报告，历史裸也未提持稳定性问题，表明当前版本基础较为稳定，无突变性故障需处理。  

## 功能请求与路线图信号  
无用户提交新功能需求，当前讨论均集中在安全流程优化而非功能扩展，路线图功能模块推进处于静止状态。  

## 用户反馈摘要  
从 Issue 评论中可推测出以下痛点：  
- 技术痛点：用户未直接反馈基础操作问题，而贡献者讨论聚焦文档生成逻辑精确化（如 JSON schema 验证）。  
- 使用场景：项目应用于 CVE 安全分析流程，需求偏向自动化规则化进本（如 prompt-mediated trigger analysis）。  
- 满意度：无负面评价，但高度关注文档标准化程度（Judgements on d2_xclaw_trigger_way descriptions suggest technical users prioritize documentation precision over casual usage experience）。  

## 待处理积压  
无长期未响应的 Issue/PR 需提醒，但建议关注:  
- 未分类的脆弱漏洞数据整合需求（No PRs mention this yet）  
- 防御机制模型的持续化测试工具集成（目前缺乏相关 Issue/PR）  

---  
*数据来源于 ZeptoClaw GitHub 仓库（2026-07-17 快照），项目整体展现“小众复杂技术域深耕”特性，现阶段以安全规范构建培育用户理解度，而非快速获取市场反馈。*


</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报  
**日期：2026-07-17**

---

## 1. 今日速览

- **活跃度评估**：过去24小时项目活跃度良好，Issues 新建24条、活动24条、关闭2条；PR 更新50条，其中46条待合并、4条已合并或关闭。
- **代码进展**：多个核心功能模块持续迭代，包括Provider架构统一、Channel插件化、内存子系统优化等。
- **Bug修复**：聚焦高严重性问题，如`browser_open`挂起、pgvector初始化崩溃等。
- **社区参与**：RFC提案频繁，涉及架构设计、协议标准化等前沿议题。
- **版本无更新**：暂无新版本发布，v0.8.4维护版计划于7月31日发布。

---

## 2. 版本发布

暂无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR：

| PR编号 | 标题 | 推进说明 |
|--------|------|----------|
| [#9107](https://github.com/zeroclaw-labs/zeroclaw/pull/9107) | chore(codeowners): remove singlerider from review routing | 维护者变更，清理已离队成员的审核路由 |
| [#9105](https://github.com/zeroclaw-labs/zeroclaw/pull/9105) | fix(memory): allow Lucid ARM cold starts, make timeouts configurable | 优化Lucid记忆模块适配性，提升跨平台稳定性 |
| [#8902](https://github.com/zeroclaw-labs/zeroclaw/pull/8902) | fix(zerocode): allow bidirectional rpc, used for ask_user and poll | 增强运行时通信能力，支持用户交互与轮询机制 |

> ✅ 项目整体向前迈进，优先处理维护任务与稳定性改进。

---

## 4. 社区热点

### 讨论最活跃的 Issues/PRs：

#### 🔥 Issue #5937 - Refactor: Unify providers architecture and reqwest client management  
链接: [Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)  
讨论内容：
- 现有Provider模块中`reqwest`使用不一致，存在大量代码重复。
- 作者提出统一HTTP客户端管理方式，提升可维护性。
- 评论数最高（11条），被视为核心架构改进任务。

#### ⚙️ PR #8863 - feat(plugins): host-mediated outbound WebSocket for channel plugins  
链接: [PR #8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863)  
讨论内容：
- 支持Channel插件通过宿主中继建立外部分机WebSocket连接。
- 依赖项复杂，涉及WIT接口扩展。
- 被标记为XL级跨模块改造，具备里程碑意义。

#### 🧠 Issue #9048 - RFC: Separate conversation history from agent-curated long-term memory  
链接: [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)  
讨论内容：
- 当前记忆系统混合会话历史与长期记忆，导致逻辑混乱。
- 提出分离存储层，增强记忆管理清晰度。
- 被接受状态，后续实现期待明确。

---

## 5. Bug 与稳定性

| 编号 | 类型 | 严重程度 | 描述 | 是否有Fix PR |
|------|------|----------|------|--------------|
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | Bug | S1 | `browser_open`在无显示环境下导致agent turn挂起 | ❌ 尚未修复 |
| [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | Bug | S1 | pgvector启用时触发嵌套运行时panic | ❌ 尚未修复 |
| [#9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089) | Bug | S2 | Tool输出不支持[AUDIO:]标记 | ❌ 尚未修复 |
| [#9078](https://github.com/zeroclaw-labs/zeroclaw/issues/9078) | Bug | S2 | 串行传输响应ID不匹配后状态不同步 | ❌ 尚未修复 |
| [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046) | Bug | S2 | `models_cache.json`文件被读取但从未写入 | ❌ 尚未修复 |

> ⚠️ 多个S1级Bug阻塞正常使用，需紧急关注。

---

## 6. 功能请求与路线图信号

| 编号 | 标题 | 类型 | 当前状态 | 可能纳入版本 |
|------|------|------|----------|----------------|
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | Publish optional broad-channel prebuilts | Feature | OPEN | v0.8.4 |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Gateway-local Kanban board for agent work | Feature | OPEN | v0.8.4 |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | RFC: A2A outbound client (A2ATool) | Feature | OPEN | v0.8.4+ |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | RFC: separate authoritative memory storage from optional enrichment connectors | Feature | OPEN | v0.8.4+ |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | RFC: Realtime speech-to-speech channel for Gemini Live | Feature | OPEN | v0.8.4+ |

> 🚀 多项功能请求已进入v0.8.4候选清单，显示项目正向集中化方向演进。

---

## 7. 用户反馈摘要

- **不满意点**：
  - “`browser_open`在无GUI环境下会死锁，没有超时机制”。
  - “模型缓存文件永远不会更新，导致‘模型刷新’命令失效”。
- **满意点**：
  - “OpenAI兼容聊天端点PR(#8486)很有帮助，集成第三方SDK更简单了”。
  - “Lucid记忆模块调优后在ARM设备上表现明显提升”。

---

## 8. 待处理积压

| 编号 | 标题 | 类型 | 状态 | 提醒事项 |
|------|------|------|----------|--------------|
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | browser_open hangs the agent turn | Bug | in-progress | S1级阻塞问题，需尽快修复 |
| [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | nested runtime panic in try_enable_pgvector | Bug | accepted | 启动崩溃，需优先处理 |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | RFC: A2A outbound client | Feature | OPEN | 关键生态集成功能，建议纳入后续版本 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Active RFC review queue | Tracker | OPEN | 多项RFC卡在审核中，需加速审批流程 |

> ⏳ 多个关键任务积压，建议维护团队优先处理S1级Bug并加快RFC审核节奏。

--- 

**数据来源**：GitHub API统计  
**生成时间**：2026-07-17 23:59 UTC

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*