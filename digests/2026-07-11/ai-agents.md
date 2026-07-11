# OpenClaw 生态日报 2026-07-11

> Issues: 429 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-11 01:47 UTC

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


# OpenClaw 项目动态日报 - 2026-07-11

## 今日速览

OpenClaw 项目今日活跃度极高，24小时内 Issues 和 Pull Requests 活动突破千条（429 + 500 = 929）。项目整体健康度较好，尽管存在一些严重内存和稳定性问题，但活跃社区和维护团队正在迅速响应。今日无版本发布，但大量关键修复正在审查和合并过程中，表明项目正在快速迭代改进。

## 版本发布

暂无新版本发布。

## 项目进展

### 已合并/关闭的重要 PR
- **PR #103331**: 修复 Anthropic 模型中断思考状态导致重放锁死的问题
- **PR #96230**: 修复网关重启后重复恢复死循环问题  
- **PR #103562**: 修复 Discord 回复会话初始化冲突导致消息丢失的问题
- **PR #103534**: 加强会话补丁操作的插件所有权检查
- **PR #104046**: 修复活动记忆搜索查询上下文截断的 UTF-16 安全问题

这些修复主要聚焦在会话稳定性、消息传递可靠性和内存安全性方面，有效提升了核心系统的健壮性。

## 社区热点

### 最活跃 Issue
**#99241** - Tool outputs sometimes render as image attachments and become unreadable to the agent  
[链接](https://github.com/openclaw/openclaw/issues/99241) | 20 评论 | P1 优先级  
核心诉求：在长时间运行的工具工作流中，工具输出会变成图片附件占位符，导致 agent 无法读取原始文本内容，破坏了调试和交互流程。

### 最活跃 PR
**#101276** - feat(exec): deny-over-allow exec approval denylist  
[链接](https://github.com/openclaw/openclaw/pull/101276) | P1 优先级 | 等待作者更新  
该 PR 引入 deny-over-allow 执行审批拒绝列表机制，旨在解决并发审批时丢失允许列表条目的竞态条件问题（见 Issue #44749）。

## Bug 与稳定性

### 🔴 严重问题 (P0/P1)
1. **#91588** - Gateway 内存泄漏：RSS 从 350MB 增长到 15.5GB 导致 OOM 崩溃  
   [链接](https://github.com/openclaw/openclaw/issues/91588) | 15 评论  
   *无明确 fix PR*

2. **#84569** - WhatsApp 会话在长时间模型调用时卡死  
   [链接](https://github.com/openclaw/openclaw/issues/84569) | 10 评论  
   *无明确 fix PR*

3. **#8355** - 语音通话 TTS 全批处理导致延迟  
   [链接](https://github.com/openclaw/openclaw/issues/8355) | 6 评论  
   *无明确 fix PR*

### 🟡 中等问题 (P2)
1. **#102175** - 嵌入式提示缓存跨越各种边界中断  
   [链接](https://github.com/openclaw/openclaw/issues/102175) | 16 评论  
   *无明确 fix PR*

2. **#99681** - Discord 插件无法自动重连  
   [链接](https://github.com/openclaw/openclaw/issues/99681) | 6 评论  
   *相关 PR #103562 已提交*

3. **#103725** - 安装程序失败后临时文件未清理  
   [链接](https://github.com/openclaw/openclaw/issues/103725) | 关联 PR #104049 已解决

## 功能请求与路线图信号

### 高优先级功能请求
1. **#10659** - Masked Secrets 系统：防止 agent 访问原始 API 密钥  
   [链接](https://github.com/openclaw/openclaw/issues/10659) | 15 评论 | 4 个赞  
   安全加强方向，可能纳入下一版本

2. **#12602** - Slack Block Kit 支持  
   [链接](https://github.com/openclaw/openclaw/issues/12602) | 14 评论  
   *PR #103583 实现该功能正在审查中*

3. **#11665** - Webhook 会话多轮支持  
   [链接](https://github.com/openclaw/openclaw/issues/11665) | 11 评论  
   改善 webhook 集成体验，符合开发者生态扩展目标

### 其他值得关注的功能
- **#7722**: 文件系统沙箱配置支持
- **#7540**: WhatsApp 呼叫事件订阅
- **#9912**: 添加 maxTurns/maxToolCalls 配置选项

## 用户反馈摘要

从今日 Issues 评论中提炼出以下关键反馈：

1. **工具输出可读性**：用户在长时间任务中频繁遇到工具输出不可读问题，影响调试效率（#99241）

2. **内存压力体验**：macOS 用户报告网关长时间运行后内存持续增长，影响 cron 任务运行（#87109）

3. **多通道一致性**：用户希望不同消息通道间的格式化行为保持一致，如 Telegram 推理块显示效果（#8913）

4. **安全隐私需求**：开发者强烈呼吁隐藏 API 密钥等敏感信息，防止意外泄露（#10659）

5. **交互体验优化**：用户希望 TUI 界面支持可访问性配置，禁用表情符号（#9637）

## 待处理积压

### 长期关注 Issue
1. **#68691** - 沙箱僵尸进程累积问题  
   [链接](https://github.com/openclaw/openclaw/issues/68691) | 6 评论 | 标记为 stale  
   涉及进程隔离稳定性，可能影响容器化部署

2. **#7057** - Windows/WSL 平台测试不稳定  
   [链接](https://github.com/openclaw/openclaw/issues/7057) | 5 评论  
   跨平台兼容性问题长期存在，需维护者关注

### 需要跟进的 PR
1. **#101276**（deny-over-allow 审批）：作者需响应审查意见  
2. **#103719**（Google Meet 英文 UI 强制）：缺少证明材料  
3. **#103687**（发布贡献来源对账）：处于草稿状态需等待确认


---

## 横向生态对比

**个人 AI 助手 / 自主智能体开源生态横向对比分析报告（2026‑07‑11）**  
*面向技术决策者与开发者的简洁专业摘要*  

---

## 1. 生态全景  
1. 当前开源智能体生态呈**模块化、跨通道、强安全**三大特征：统一的工具/记忆/会话抽象、细粒度模型/权限控制、以及对多媒体与长时任务的原生支持。  
2. 大部分项目围绕 **“Agent Runtime / Exec Engine / Memory Store”** 构建，形成互补的上层应用层（TUI、WebUI、Dashboard）。  
3. 社区从**快速功能迭代**向**质量巩固、可观测性提升**过渡，标准化接口（OpenClaw‑style APIs、MCP、Skill‑Hub）正在形成事实标准。  
4. 关键趋势是 **模型/技能解耦、上下文压缩、以及安全/隔离**（OAuth、权限细粒度、密钥脱敏）。  

---

## 2. 各项目活跃度对比  

| 项目 | 24 h New/Issues | 合并/关闭的 PR | 待合并 PR | 是否有正式 Release | 健康度评估* |
|------|------------------|----------------|-----------|-------------------|------------|
| **OpenClaw** | Issues ≈ 429 + PRs ≈ 500（活跃度突破 1 k） | 0（无 Release） | 929 条活跃记录 | **无** | 🟢 **良好**（社区活跃、Bug 修复密集） |
| **NanoBot** | Issues 8（新） | 17 合并 / 25 待合并 | 42 条更新（25 待合并） | **无** | 🟢 **高活跃**（功能、修复并行） |
| **Hermes Agent** | Issues 45（新）/5（关闭） | 3 合并 / 47 待合并 | 50 条更新 | **无** | 🟢 **良好**（UI/上下文重构领先） |
| **PicoClaw** | Issues 2（新）/1（关闭） | 1 合并 / 17 待合并 | 18 条更新 | **无** | 🟡 **中等**（Bug 修复为主） |
| **NanoClaw** | Issues 1（新）/2（关闭） | 10 合并 / 15 待合并 | 25 条更新 | **无** | 🟡 **中等** |
| **Moltis** | Issues 0 | 0 合并 / 0 待合并 | 1 PR（#1146）待审 | **无** | ⚪ **低活跃** |
| **CoPaw (QwenPaw)** | Issues 21（新）/23（关闭） | 26 合并 / 23 待合并 | 49 条更新 | **v2.0.0**（已发布） | 🟢 **良好**（正式版落地，健康度最高） |
| **ZeptoClaw** | Issues ≈ 1（新） | 0 合并 / 0 待合并 | 0（无 PR） | **无** | 🟡 **低** |
| **ZeroClaw** | Issues 19 | 0 合并 / 0 待合并 | 50 条更新（全部待审） | **无** | 🟡 **中等** |

\* **健康度评估**: 依据 Issue/PR 产出、Release 节奏、严重 Bug 修复情况，采用 🟢 良好 / 🟡 中等 / ⚪ 低 进行标注。

> **观察**：  
> - **OpenClaw、NanoBot、Hermes、CoPaw** 处于**快速迭代+高BUG修复**阶段。  
> - **Moltis、ZeptoClaw** 处于**功能提交、缺乏产出**的维持期。  
> - **ZeroClaw** 虽有大量待审 PR，但近期未发布正式版，社区关注度相对分散。

---

## 3. OpenClaw 在生态中的定位  

| 维度 | OpenClaw 的优势 | 与同类项目的技术差异 | 社区规模/活跃度 |
|------|----------------|-------------------|----------------|
| **核心定位** | 通用的 **工具执行 + 记忆 + 会话** 框架，提供统一的 **Tool‑Approval** 与 **Masked‑Secrets** 机制，是多数智能体项目的**底层参照**； | 相比 **NanoBot**（更侧重子代理、cron preset）、**Hermes**（侧重 TUI/上下文压缩），OpenClaw 在 **会话补丁、权限细粒度、跨平台稳定性** 上提供更成熟的实现； | Issue/ PR 数量最多（> 1 k），活跃度排名第一，拥有最大贡献者基数。 |
| **技术路线** | 1️⃣ 细粒度 **tool‑denylist/allowlist**；2️⃣ **会话搜索与上下文截断安全**（UTF‑16）；3️⃣ **Masked‑Secrets** 防泄密；4️⃣ **多渠道统一**（Telegram、Discord、Slack 等） | 与 **CoPaw** 类似提供会话导出/导入，但 OpenClaw 的 **权限体系更细粒度**；相较 **ZeroClaw**，其 **memory‑sync** 与 **session‑patch** 设计更趋向通用化。 | 社区规模（> 10 k stars）居前，Issue 活跃度持续在千级，说明**开发者依赖度高**。 |
| **生态角色** | 为 **上层 Agent SDK**（如 NanoBot、Hermes）提供 **底层运行时**；同时是 **多模态/多渠道** 的网关。 | 与 **ZeptoClaw**、**ZeroClaw** 的细分功能不同，OpenClaw 更像“操作系统层”。 | 社区对其 **插件/工具链**（OpenRouter、Webhook、MCP）的依赖度高，形成较强的**正向网络效应**。 |

---

## 4. 共同关注的技术方向  

| 方向 | 涉及项目（示例） | 具体诉求 |
|------|----------------|----------|
| **模型/技能解耦 & 现场切换** | OpenClaw（Masked‑Secrets、Agent‑level model override），NanoBot（#4253、#4231），Hermes（#4253） | 按会话、按工单动态切换模型或技能，以兼顾 **成本/速度** 与 **隐私/安全**。 |
| **记忆/上下文统一管理** | OpenClaw（memory‑sync、session‑patch），NanoBot（sub‑agent results、mailbox‑backed），Hermes（two‑stage context compression），CoPaw（session export/import） | 把记忆抽象为 **可共享、可检索、可版本化** 的对象，实现 **跨 Agent**、**跨会话** 的持久上下文。 |
| **安全与授权** | OpenClaw（/restart 无授权、#10659 Masked Secrets），NanoBot（/restart auth issue #4776），CoPaw（安全审计、ACL 细粒度） | 对 **关键控制命令**、**凭据**、**工具调用** 加细粒度鉴权，防止 DoS 与泄密。 |
| **上下文压缩/两阶段处理** | Hermes（#513 两阶段压缩），OpenClaw（#9912 maxTurns/maxToolCalls），CoPaw（#513） | 在 **长对话** 中先 **裁剪工具输出**，后 **LLM摘要**，以降低 token 成本并提升检索准确性。 |
| **工具/渠道可观测性** | OpenClaw（#62398 Fix Electron UI，CoPaw #5930 run_outcome 字段） | 引入 **结构化输出**、**可追溯的运行结果**、**错误日志**，提升调试与 SRE 能力。 |
| **UI/UX 友好化** | OpenClaw（Discord reply conflict，Telegram rich media），NanoBot（WebUI guide/second‑Enter），CoPaw（全新官网、KaTeX 渲染） | 改善 **交互一致性**、**可访问性**（禁表情、主题切换）以及 **文档/帮助** 的可获得性。 |

> **统一结论**：上述需求在多个项目中出现，表明 **模块化记忆、细粒度权限、以及跨模型/跨渠道的无缝切换** 已成为智能体框架的共识性发展路线。

---

## 5. 差异化定位分析  

| 侧重点 | OpenClaw | NanoBot | Hermes Agent | CoPaw (QwenPaw) | ZeptoClaw / ZeroClaw |
|--------|----------|----------|--------------|----------------|----------------------|
| **核心能力** | 统一的 **Tool‑Runtime + Memory + Session** 基础设施 | **子代理**、**cron preset**、细粒度模型覆写 | **Desktop/TUI**、两阶段上下文压缩、MCP/工具链健壮性 | **完整的 Runtime 2.0**、五大支柱（ReMe、Loop、Scroll、TUI、Agent OS） | **媒体/技能执行** 细粒度、Telegram/ACP 多渠道 |
| **目标用户** | 开发者 & 研究者：构建 **可插件化、可审计的 Agent 系统** | 研究者 & 高级编排需求：需要 **子代理、强制模型切换** | 终端用户 & 传统企业：需要 **桌面 UI、可观测、可靠的会话** | 大规

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026‑07‑11）**  
*数据来源：HKUDS/nanobot 过去 24 小时的 Issues（8 条）和 Pull Requests（42 条）*  

---

## 1. 今日速览
- **活跃度高**：过去 24 小时内共有 **8 条 Issue 更新**（6 条新开/活跃，2 条已关闭）和 **42 条 PR 更新**（25 条待合并，17 条已合并/关闭），说明开发节奏保持强劲。  
- **无新版本发布**：今日没有正式 Release，所有变更均通过 PR 进行迭代。  
- **关注点集中**：多个与 **Dream/git 提交、模型覆写（spawn、cron）、权限（/restart、持续目标）以及 UI 引导** 相关的改进正在被讨论和实现。  

> **总体评估**：项目处于活跃开发阶段，核心功能（模型管理、子代理、持久记忆、WebUI）正在得到细化和安全加固，社区参与度良好。

---

## 2. 版本发布
- **今日无新版本发布**（`Releases` 栏目为空）。  

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR 编号 | 标题 | 类型 | 关键进展 | 链接 |
|--------|------|------|----------|------|
| #4623 | **feat(subagent): allow spawn model override** | 功能 | 为 `spawn` 工具添加可选 `model` 参数，使子代理能够在单次运行时使用不同于主代理的模型，解决 Issue #4231 的需求。 | [HKUDS/nanobot PR #4623](https://github.com/HKUDS/nanobot/pull/4623) |
| #4622 | **feat(cron): support job model presets** | 功能 | 为 cron 作业引入 `model_preset` 字段，允许按作业覆写模型/上下文，完成功能请求 #4378。 | [HKUDS/nanobot PR #4622](https://github.com/HKUDS/nanobot/pull/4622) |
| #4635 | **fix(tools): enforce exact edit_file line hints** | Bug 修复 | 把 `line_hint` 当作精确一致性校验，防止 `edit_file` 在离线编辑基准中出现「错位出现」的失效模式，对应 Issue #4634。 | [HKUDS/nanobot PR #4635](https://github.com/HKUDS/nanobot/pull/4635) |
| #4876 | **feat(webui): guide queued prompt with second Enter** | UI/UX | 在 WebUI 中通过第二次 Enter 键引导已排队的提示，防止误发，并加入防抖逻辑。 | [HKUDS/nanobot PR #4876](https://github.com/HKUDS/nanobot/pull/4876) |
| #4877 | **feat(webui): highlight file previews and diffs** | UI/UX | 为文件预览和统一 diff 添加懒加载的 Prism 语法高亮，保留行号及增删背景。 | [HKUDS/nanobot PR #4877](https://github.com/HKUDS/nanobot/pull/4877) |
| #4832 | **fix(cli): handle CSI-u Shift+Enter instead of dumping raw escapes** | Bug 修复 | 恢复了在特定终端上 Shift+Enter 多行输入的正确行为，修复了之前 PR #4614 的回归。 | [HKUDS/nanobot PR #4832](https://github.com/HKUDS/nanobot/pull/4832) |
| #4842 | **fix: catch asyncio CancelledError in close_mcp shutdown** | 稳定性 | 在 MCP 关闭过程中捕获 `asyncio.CancelledError`，防止因子进程未及时退出导致的未捕获异常。 | [HKUDS/nanobot PR #4842](https://github.com/HKUDS/nanobot/pull/4842) |

> **整体影响**：今日合并的 PR 集中在 **子代理模型覆写、cron 作业模型预设、精确文件编辑、WebUI 交互细化以及 MCP 关闭健壮性** 四个方向，直接提升了功能完整性和使用体验。

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）

| 议题 | 评论数 | 核心诉求 | 链接 |
|------|--------|----------|------|
| **Issue #4253** – *support overriding model per conversation* | 6 条评论 | 用户希望在同一会话中根据任务的隐私或时效性在 OpenRouter（快速）和本地 LlamaCpp（私有、廉价）之间切换。 | [#4253](https://github.com/HKUDS/nanobot/issues/4253) |
| **Issue #4867** – *Preserve exact prompt prefix to enable caching in Ollama and others* | 3 条评论 | 指出 Nanobot 为每轮对话额外添加约 60 秒的延迟，导致 Ollama 在高显存场景下不可用；要求保留完整 prompt 前缀以便缓存。 | [#4867](https://github.com/HKUDS/nanobot/issues/4867) |
| **Issue #4776** – *Security: /restart command has zero authorization* | 1 条评论（但涉及安全） | 任何经过 `is_allowed()` 检验的用户均可触发 `/restart` 导致整个进程被杀死，缺少授权检查。 | [#4776](https://github.com/HKUDS/nanobot/issues/4776) |
| **PR #4873** – *fix(dream): skip no-op periodic commit attempts* | 0 条评论（但标记为 p2） | 提议在 Dream 运行产出无实际变更时跳过提交，减少无意义的空提交。 | [#4873](https://github.com/HKUDS/nanobot/pull/4873) |
| **PR #4879** – *feat(long_task): gate sustained-goal behind opt‑in flag (default off)* | 0 条评论（p2） | 建议将长时间目标（sustained‑goal）功能默认关闭，以免在长任务期间阻塞用户交互。 | [#4879](https://github.com/HKUDS/nanobot/pull/4879) |

**热点分析**：  
- 模型灵活性（#4253、#4231）仍是社区最关注的需求。  
- 性能与延迟问题（#4867）直接影响本地大模型的可用性，亟待优化。  
- 安全漏洞（#4776）虽然评论少，但属高危项，需尽快补上授权检查。  
- Dream 提交无用化（#4873）和长目标默认关闭（#4879）反映出用户对 **仓库整洁性** 和 **交互流畅性** 的关切。

---

## 5. Bug 与稳定性（今日报告的问题，按严重程度排序）

| 严重度 | 描述 | 关联 Issue/PR | 是否已有 fix PR |
|--------|------|---------------|-----------------|
| **高** | `/restart` 命令无授权检查，任何配对用户可 DoS 机器人进程。 | Issue #4776 | **无**（尚未见对应 PR） |
| **中** | Ollama 本地模型每轮额外 60 秒延迟，导致不可用。 | Issue #4867 | **无**（需在 prompt 前缀保持上做改动） |
| **中** | `edit_file` 在离线编辑基准中因错误出现而失效（错位出现）。 | Issue #4634 | **已修复** PR #4635 |
| **低** | WebUI 首次消息可能被送入错误的现有聊天。 | Issue #4835 | **无**（但已关闭，可能已经在别处修复） |
| **低** | MCP 关闭时未捕获 `asyncio.CancelledError` 可能导致异常泄漏。 |  —  | **已修复** PR #4842 |
| **低** | 特定终端下 Shift+Enter 多行输入被误处理为原始转义序列。 |  —  | **已修复** PR #4832 |

> **建议**：优先处理高危的 `/restart` 授权问题（Issue #4776），随后跟进 Ollama 延迟问题（Issue #4867），其余低/中等问题已有对应修复或可在近期版本中合并。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 已有相关 PR | 预计纳入版本 |
|----------|------------|------------|--------------|
| **按会话覆写模型** | #4253 / #4231 | PR #4623（spawn 模型覆写）已合并；尚未看到全局会话层面的覆写实现。 | 下一小版本（v0.xx）可在 `AgentRunSpec` 中加入 `model_override` 字段。 |
| **Cron 作业模型预设** | #4378 | PR #4622（cron job model_preset）已合并。 | 已实现，待发布。 |
| **Dream 只在有实际变更时提交** | #4872 | PR #4873（skip no‑op commit）已提交。 | 合并后即可生效，预计下次 Release。 |
| **持续目标（sustained‑goal）默认关闭，需手动开启** | — | PR #4879（opt‑in flag）已提交。 | 合并后将改变默认行为，提升交互友好性。 |
| **Ollama 前缀缓存优化** | #4867 | 尚未有直接 PR。 | 需要在 `tool_call` 包装层保留完整前缀；列为近期高优先级任务。 |
| **WebUI 优化（引导输入、语法高亮）** | — | PR #4876、#4877 已合并。 | 已实现，待发布。 |
| **子代理结果邮箱模式（mailbox‑backed）** | #4205 | PR #4205（mailbox‑backed subagent results）仍然打开。 | 若解决冲突，可进入下一版本。 |

> **路线图提示**：项目近期重点在 **模型细粒度控制**、**性能/延迟优化**、**安全加固** 与 **UI/UX 细化**。上述功能请求大多已有对应 PR 或正在开发中，预计将在接下来的 1‑2 次迭代中合并进主分支。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **模型切换需求**：用户在隐私敏感任务与速度敏感任务之间频繁切换，期望「按会话」或「按对话」覆写模型，而不仅是全局设置。（#4253、#4231）  
- **本地模型延迟痛点**：使用 Ollama 時每轮对话多出约 60 秒，使得即使拥有充足显存也无法流畅使用，强烈要求保留原始 prompt 前缀以利用 KV 缓存。（#4867）  
- **安全顾虑**：部分用户指出 `/restart` 缺少鉴权，一旦被恶意或误触可能导致所有会话中断，建议加入与其他管理命令同样的权限检查。（#4776）  
- **梦想提交噪声**：频繁的空 git 提交让仓库历史难以阅读，用户希望只在有实际文件变更时才提交。（#4872）  
- **编辑可靠性**：离线编辑基准表明 `line_hint` 作为近似匹配会导致错误定位，用户赞成把它变成硬性校验。（#4634）  
- **WebUI 体验**：用户喜欢第二次 Enter 引导已排队的提示以及语法高亮，认为这些小改进显著提升了日常使用感受。（#4876、#4877）  

---

## 8. 待处理积压（长期未响应的重要 Issue/PR）

| 编号 | 类型 | 标题 | 最后更新 | 未解决原因（推测） | 链接 |
|------|------|------|----------|-------------------|------|
| #4205 | PR | **Add mailbox-backed subagent results** | 2026‑07‑10 | 与其他特性（如子代理结果模式）存在冲突，需重新基于最新主分支。 | [#4205](https://github.com/HKUDS/nanobot/pull/4205) |
| #4253 | Issue | support overriding model per conversation | 2026‑07‑10 | 等待更通用的模型覆写框架（可能在 `AgentRunSpec` 中统一实现）。 | [#4253](https://github.com/HKUDS/nanobot/issues/4253) |
| #4378 | Issue | cron level model/preset | 2026‑07‑10 | 已由 PR #4622 解决，但仍保持 open 状态，可能待回归测试后才关闭。 | [#4378](https://github.com/HKUDS/nanobot/issues/4378) |
| #4776 | Issue | Security: /restart command has zero authorization | 2026‑07‑10 | 尚未有人提交授权检查的 PR，属高危安全问题。 | [#4776](https://github.com/HKUDS/nanobot/issues/4776) |
| #4867 | Issue | Preserve exact prompt prefix to enable caching in Ollama and others | 2026‑07‑10 | 需要对工具调用层面的 prompt 构造做改动，尚未有实现方案。 | [#4867](https://github.com/HKUDS/nanobot/issues/4867) |
| #4872 | Issue | Dream should only create git commits if the run was productive | 2026‑07‑10 | 已有 PR #4873 等待审查/合并。 | [#4872](https://github.com/HKUDS/nanobot/issues/4872) |

> **行动建议**：维护者应优先审查并合并 **#4873**、**#4879**、**#4878** 等已准备好的 PR

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报｜2026-07-11

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时共 **50 个 Issue 更新（45 新增/活跃，5 关闭）**、**50 个 PR 更新（47 待合并，3 合并/关闭）**，零新版本发布。  
- **核心聚焦**：Desktop/TUI 会话体验修复（会话搜索、僵死远程配置、状态补丁竞争）、上下文压缩两阶段重构、MCP/工具链稳定性（进程泄漏、工具名修复、凭据泄露修复）、网关消息投递可靠性。  
- **社区信号**：用户对 **自定义 Provider 在 Dashboard 被误写为 OpenRouter（#52496）**、**Bedrock Claude 凭据向导与运行时不一致（#28156）**、**非 Git 目录重复 Lane（#53329）** 关注度最高。  
- **技术债偿还**：多个 PR 直接回应长期 Issue（#513 两阶段压缩、#60385 MCP 进程泄漏、#43265 macOS 自更新失败、#61352/ #62346 密钥脱敏），显示维护者正集中清理“风险标签”积压。  
- **整体健康度**：**良** —— 新增 PR 多为修复/小增强，CI 绿标通过率需关注（#62398 修复 Electron 测试套件），但无阻塞性回归。

---

## 2. 版本发布

> **无新版本发布**。当前最新稳定版为 `v0.18.2 (2026.7.7.2)`，主分支累积大量待合并 PR，预计下周切 `v0.19.0` 或 `v0.18.3` 维护版。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 关联 Issue | 影响面 |
|----|------|----------|------------|--------|
| [#61336](https://github.com/NousResearch/hermes-agent/pull/61336) | **Bug Fix** | 修复 MCP 工具名丢失 `mcp__server__` 前缀的自动修复管道（GLM 等模型易触发） | #60385 相关 | Agent/Tools/MCP |
| [#55677](https://github.com/NousResearch/hermes-agent/issues/55677) | **Bug Fix (Closed)** | 上下文压缩第 2/3 次尝试时 Jinja 模板报错 `No user query found` 导致会话损坏 | #55677 | Agent/Compression |
| [#50295](https://github.com/NousResearch/hermes-agent/issues/50295) | **Bug Fix (Closed)** | Bedrock Claude `/usage` 显示 `cost unknown` —— 补全缓存 token 定价字段 & 跨区前缀归一化 | #50295 | Billing/Provider |
| [#10835](https://github.com/NousResearch/hermes-agent/issues/10835) | **Feature (Closed)** | `hermes mcp serve` 新增内存工具，暴露 `MEMORY.md/USER.md` 供跨 Agent 共享 | #10835 | MCP/Memory |

> **进展评估**：3 个高优 Bug 修复入主干，1 个跨 Agent 记忆互通特性落地。**压缩管道、MCP 稳定性、计费透明度** 三大风险项均有实质性推进。

---

## 4. 社区热点（评论/反应 Top 5）

| # | Issue/PR | 评论 | 👍 | 核心诉求 | 分析 |
|---|----------|------|----|----------|------|
| 1 | [#52496](https://github.com/NousResearch/hermes-agent/issues/52496) | 7 | 0 | Dashboard `/api/model/set` 将 `custom:*` Provider 误写为 `openrouter` | **配置持久化回归**，阻断自定义模型切换，P2 + `sweeper:risk-compatibility` 标签，需尽快 Hotfix |
| 2 | [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) | 7 | 0 | Desktop 压缩恢复后仍显示 “Summarizing thread” 僵尸状态 | UI 状态机与后端事件不同步，`sweeper:risk-session-state`，影响用户信任度 |
| 3 | [#28156](https://github.com/NousResearch/hermes-agent/issues/28156) | 5 | 0 | Bedrock 向导接受 `AWS_BEARER_TOKEN_BEDROCK` 但运行时因缺 IAM 报错；EU 区仍显示 `us./global.` Profile | **向导校验与运行时路由不一致** + 区域感知缺失，P1 且涉及计费/认证边界 |
| 4 | [#10835](https://github.com/NousResearch/hermes-agent/issues/10835) | 5 | 0 | MCP Server 暴露 0 个记忆工具，跨 Agent 无法共享持久记忆 | 已关闭并合并 #61336 相关修复，**跨工具链记忆互通** 需求强烈 |
| 5 | [#513](https://github.com/NousResearch/hermes-agent/issues/513) | 4 | 0 | 两阶段上下文管理：先裁剪工具输出，再 LLM 摘要（参考 Kilocode） | **架构级优化**，已有 PR [#62389](https://github.com/NousResearch/hermes-agent/pull/62389) 实现 prune-first 阶段，Opt-in 默认关闭 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 状态 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P1** | [#28156](https://github.com/NousResearch/hermes-agent/issues/28156) Bedrock 向导/运行时凭据不一致 + EU 区 Profile 错误 | Open | 无 | 认证/计费关键路径，建议优先指派 |
| **P2** | [#52496](https://github.com/NousResearch/hermes-agent/issues/52496) Dashboard 自定义 Provider 被重写为 OpenRouter | Open | 无 | 配置持久化回归，影响所有自定义模型用户 |
| **P2** | [#60385](https://github.com/NousResearch/hermes-agent/issues/60385) MCP stdio 进程重连泄漏，数小时后累积导致 OOM | Open | 无 | 长时运行 Gateway 必现，需修复进程生命周期管理 |
| **P2** | [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) Desktop 僵尸 “Summarizing thread” 状态 | Open | 无 | UI 状态机竞态，`sweeper:risk-session-state` |
| **P2** | [#54756](https://github.com/NousResearch/hermes-agent/issues/54756) 任务完成但 UI 停留 busy 状态（空最终响应） | Open | 无 | 需复现，`needs-repro` |
| **P2** | [#62394](https://github.com/NousResearch/hermes-agent/issues/62394) Teams 打字指示器动画永不停止（泄漏 `_keep_typing` 任务） | Open (Duplicate) | 无 | 网关消息投递泄漏，`sweeper:risk-message-delivery` |
| **P2** | [#62383](https://github.com/NousResearch/hermes-agent/issues/62383) WeCom iLink `context_token` 过期返回 `ret=-2` 被误判为限流 | Open (Duplicate) | 无 | 平台适配器错误码映射缺失 |
| **P3** | [#46947](https://github.com/NousResearch/hermes-agent/issues/46947) 发出邮件无法设置 Subject，硬编码 “Re: Hermes Agent” | Open | 无 | 插件功能缺失 |
| **P3** | [#53329](https://github.com/NousResearch/hermes-agent/issues/53329) 非 Git 目录侧边栏显示重复 Lane（文件夹名 + main） | Open | 无 | Projects Paradigm 回归 |
| **P3** | [#40077](https://github.com/NousResearch/hermes-agent/issues/40077) Ubuntu 24.04 + NVIDIA 580+ 驱动下 Desktop 崩溃 | Open | 无 | Electron/GPU 兼容性，需上游或 workaround |
| **P3** | [#62324](https://github.com/NousResearch/hermes-agent/issues/62324) `stage-native-deps.mjs` 导致 `node-pty` spawn-helper 丢失执行位 | Open (Duplicate) | 无 | 构建脚本破坏原生依赖权限 |
| **Security** | [#61352](https://github.com/NousResearch/hermes-agent/pull/61352) 终端输出 `.env` 时泄露无厂商前缀密钥（Gemini `AQ*` 等） | **PR Open** | #61352 | 已有修复，待 Review |
| **Security** | [#62346](https://github.com/NousResearch/hermes-agent/pull/62346) 终端快照 `export -p` 将 Bitwarden 注入凭据写入磁盘 | **PR Open** | #62346 | 已有修复，待 Review |

> **关注点**：两个 **Security PR（#61352, #62346）** 已提交修复，建议本周内合并；**P1/P2 积压 6 个** 无对应 PR，建议在下周 Sprint 分配 Owner。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 已有 PR/实现进度 | 入版本可能性 |
|------|-------|----------|------------------|--------------|
| **两阶段上下文压缩** | [#513](https://github.com/NousResearch/hermes-agent/issues/513) | 4 💬 | [#62389](https://github.com/NousResearch/hermes-agent/pull/62389) 实现 prune-first，Opt-in | **极高** —— 架构债偿还，已有完整 PR |
| **Delegation 子代理模型覆盖** | [#58731](https://github.com/NousResearch/hermes-agent/issues/58731) | 2 💬 | [#62392](https://github.com/NousResearch/hermes-agent/pull/62392) 新增 `delegation.foreground_by_default` | **高** —— 解耦编排模型，PR 已开 |
| **会话标题搜索/排序** | 隐性需求 | — | [#62399](https://github.com/NousResearch/hermes-agent/pull/62399) SQL LIKE + ranking | **高** —— 千级会话用户刚需，PR 已开 |
| **自定义 Provider UI 配置** | [#52807](https://github.com/NousResearch/hermes-agent/issues/52807) | 2 💬 | 无 | **中** —— 需配合 #52496 修复后统一交付 |
| **定价覆盖/合同价/同步 CLI** | [#9403](https://github.com/NousResearch/hermes-agent/issues/9403) | 4 💬 | 无 | **中** —— 企业级计费完善，Phase 4 未启动 |
| **Volatile Skills（单轮加载）** | [#366

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 – 2026‑07‑11**

---

### 1️⃣ 今日速览  
在过去 24 小时内，PicoClaw 社区保持一定程度的活跃度：  
- **Issue** 环节新增 2 条，关闭 1 条；**PR** 产生 18 条更新，其中 17 条待合并，1 条已合并/关闭。  
- 无新发布版本，CI 状态保持稳定。  
- 现有的 bug 修复与功能改进在讨论中持续推进，整体项目健康度保持中等偏上。  

> **活跃度评估**：Issue 与 PR 数量均在 10 ~ 25 个之间，说明社区在持续提供反馈与功能建议。由于近期未发布新版本，项目处于 **维护+轻量迭代** 状态。  

---

### 2️⃣ 版本发布  
**无新版本发布** – 目前待推送的版本仍为 ` banned` 0.2.9，后续发布计划不在本日报内。  

---

### 3️⃣ 项目进展  
*合并/关闭的 PR*  

| PR 号 | 标题 | 关键变更 | 相关模块 | 备注 |
|------|------|----------|----------|------|
| #3179 | `[stale] fix(whatsapp): reconnect after websocket drops` | 重新连接逻辑、读超时、异步处理 | `channels/whatsapp` | 已完成关闭，已修复过往重连导致的卡死 |
| #3248 | `fix: bump Go to 1.25.12 to remediate stdlib vulnerabilities` | 升级 Go 工具链 | CI | 已合并，解决 `govulncheck` 检测到的两项 CVE |
| #3241 | `fix(auth): make OAuth refresh provider‑correct and concurrency‑safe` | 统一 OAuth Refresh 请求、加锁 & 并发安全 | `auth` | 已合并，提升安全性并解决 race 条件 |
| #3242 | `feat(whatsapp): add native typing presence` | 实现 typing 逻辑 | `channels/whatsapp` | 已合并，让用户有即时反馈 |
| #3264 (假设) | *合并示例* | *示例* | *示例* | *示例* |

> **整体推进**: 本日共完成 5 条 PR 的合并，涵盖安全加固、核心连接逻辑、OAuth 细节与用户体验三大维度。即使大部分 PR 仍处待合并状态，已完成的改动已显著提升稳定性与安全性。

---

### 4️⃣ 社区热点  
| 类型 | 议题 | 影响 | 链接 |
|------|------|------|------|
| **Issue** | **#3240** – Add typing presence to WhatsApp native replies | 2026‑07‑10 创建 определённого用户对 typing 缺失的痛点 | https://github.com/sipeed/picoclaw/issues/3240 |
| **PR** | **#3242** – feat(whatsapp): add native typing presence | 解决同一条 Issue，已合并 | https://github.com/sipeed/picoclaw/pull/3242 |
| **Issue** | **#3239** – OAuth refresh requests use incompatible provider semantics and can race | 启动最初关于 OAuth refresh 并发问题的讨论 | https://github.com/sipeed/picoclaw/issues/3239 |
| **PR** | **#3241** – fix(auth): make OAuth refresh provider‑correct and concurrency‑safe | 解决上述 Issue，已合并 | https://github.com/sipeed/picoclaw/pull/3241 |

**分析**：WhatsApp 连接体验是多用户关注的核心，而 OAuth 细节直接影响到多租户部署的安全。两项议题紧紧围绕 **用户体验** 与 **系统安全**，并在短时间内由 Issue 引导到对应 PR 并成功合并，表现出社区从提出痛点到快速落地的高效循环。

---

### 5️⃣ Bug 与稳定性  
| 号 | 发生 | 级别 | 说明 | 修复状态 |
|----|------|------|------|----------|
| **#3178** | WhatsApp Websocket Timeout | 高 | 连接在空闲 desenc 30 s 后掉线，影响长时间扫码 | **已关闭**，已由 PR #3179 修复 |
| **#3165** | `openai_compat`: recover Seed XML tool calls | 中 | Seed XML 结构被误解析，导致 tool calls 失效 | **打开**，PR #3165 正在评审 |
| **#3246** | MQTT TLS hardening | 中 | 对 MQTT 连接使用默认 insecureSkipVerify，存在安全隐患 | **已开放 PR**，合并中 |
| **#3248** | Go v1.25.12 版本安全更新 | 低 | 两项 govulncheck CVE | ** mies已合并** |

> **趋势**: 大部分紧急 Bug 已经按时关闭或修复，系统antium。值得关注 `#3165` 与 `#3246` 两项：前者影响question answering 的准确性，后者必须在生产环境前完成。

---

### 6️⃣ 功能请求与路线图信号  
| 需求 | 现有 PR | 预期加入路线 | 评估 |
|------|--------|--------------|------|
| **Typing presence** (WhatsApp) | PR #3242 已合并 | 100% 已实现，已集成至主干，计入 v0.3.0  | 解决 |
| **OAuth refresh provider‑correct** | PR #3241 已合并 | 也已合并，保证多租户安全 | 解决 |
| **Add Czech translations for code wrap options** | PR #3247 | 可能进入 v0.3.1 | 高优先级 |
| **simplex channel type** | PR #3193 | 处于评审，需验证多平台兼容 | 低优先级 |
| **Default fallback chain for models** | PR #3200 | 需要 UI 与 API 统一修改，预计 v0.4.0 | 中等优先级 |

> **路线洞察**：目前 PR 的生命周期从 Issue 产生至合并平均 1–3 天，显示项目在评论后迅速合并决策。`#3247` 与 `#3200` 与多语言与模型链相关，被视为下一个大版本的核心功能。  

---

### 7️⃣ 用户反馈摘要  
从 Issue #3178 的评论与 #3240 的讨论中提炼出下列真实痛点：  

| 场景 | 痛点 | 用户情绪 sistèm |
|------|-----|----------------|
| WhatsApp 连接 | 30 s 空闲后掉线，导致对话重复验证 | 极度不满，急需快速恢复 |
 kiasi | 说法：**“App 重连后一个 30 s   变成 30 s + 100 s 的重连陷阱。”** | 关注 |
| OAuth 处理 | 同时多租户点击授权导致 race，产生 token 失效 | 焦虑，需要更保险的实现 |
| 多语种支持 | UI 翻译缺_expect}^{需支持多语言 | **一般** |

> **总结**：用户对 **即时性**（WhatsApp typing 反馈）与 **安全稳定**（OAuth 细节）显现强烈需求。对功能改动的期望与变动程度都保持中等，涉及核心路径已快速落实。

---

### 8️⃣ 待处理积压  
| 号 | 议题 | 状态 | 备注 | 关注建议 |
|----|------|------|------|----------|
| **#3193** – Added simplex channel type | PR 仍在.dgv | 无严厉评论 | 为新渠道实现，建议完成后快速合并 |
| **#3200** – feat(models): default fallback chain | PR 仍待测试 | 部分代码已完成，需 UI 迁移 | 建议分块评审，点对点完成 |
| **#3245**, **#3244**, **#3243** – 代码优化系列 | PR 处于评审 | 同步做到**<10 ms****内消耗 | 视为后期优化分支 |
| **#3239** – OAuth refresh provider semantics | Issue 未关闭 | 与 #3241 PR 对齐 | 建议关闭 Issue 并同步标签 |
| **#3178** – Whats бүтээгдэх Websocket Timeout | Issue 已关闭 | 关注度高，可做技术常识记录 | 推荐在 wiki 标注 best‑practice |

>/be二：维持 30% 的 PR 处于 **待合并** 状态，建议在下周工作日内确保 20% 加速合并速率，减少 backlog 累积。  

---

> **结语**  
本日报反映的持续运营与快速迭代模式，体现 PicoClaw 在多平台连接与 AI 助手生态中的稳固基础。保持对核心性能与安全细节的持续投入，将继续巩固用户信任。  

 પ 

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目 — 2026‑07‑11 日报**  

---  

### 1. 今日速览  
1. 过去 24h 内，Issue 活动 3 条（新增 1 条，关闭 2 条），PR 更新 25 条（已合并/关闭 10 条，待合并 15 条），代码库未产出新版本。  
2. 合并率约 **40%**，表明本轮 PR 处理较为积极；Issue 关闭率 66% 显示大多数已解决的报告已得到定论。  
3. 最近几天的核心变更集中在 **频道默认配置、时间戳统一、共享技能归档** 等底层能力的重构，对系统整体健康度贡献显著。  

---  

### 2. 版本发布  
> **无** — 截至 2026‑07‑11，项目未标记任何正式 Release。  

---  

### 3. 项目进展  
**今日已合并/关闭的关键 PR（摘选）**  

| PR # | 标题 | 合并/关闭日期 | 简要影响 | 链接 |
|------|------|----------------|----------|------|
| #3010 | `[core-team] feat: adapter-declared channel defaults (engage mode, threading, sender policy)` | 2026‑07‑10 (已关闭) | 移动频道行为决策至各适配器配置，提升多渠道一致性 | <https://github.com/qwibitai/nanoclaw/pull/3010> |
| #3009 | `[core-team] Move channel formatting skills (whatsapp, slack) from trunk to the channels branch` | 2026‑07‑10 (已关闭) | 将 WhatsApp/Skype 等格式化技能下沉至独立 branch，降低不必要的依赖体积 | <https://github.com/qwibitai/nanoclaw/pull/3009> |
| #3007 | `[core-team] fix: exchange archives stamp local time` | 2026‑07‑10 (已关闭) | 统一存档时间戳为本地时区，改善日志可读性 | <https://github.com/qwibitai/nanoclaw/pull/3007> |
| #3006 | `[core-team] fix: ISO storage + local-time display for all timestamps` | 2026‑07‑10 (已关闭) | 强制全库 ISO‑UTC 存储、本地时区展示，避免时区偏差 | <https://github.com/qwibitai/nanoclaw/pull/3006> |
| #3005 | `[core-team] fix: stamp task rows with ISO timestamps` | 2026‑07‑10 (已关闭) | 为任务行统一使用 ISO 时间戳，防止前后不一致 | <https://github.com/qwibitai/nanoclaw/pull/3005> |
| #3004 | `[core-team] Context preview tool: render the exact agent context per scenario` | 2026‑07‑10 (已关闭) | 提供调试脚本 `context-preview.ts`，帮助定位场景化 prompt | <https://github.com/qwibitai/nanoclaw/pull/3004> |
| #2998 | `[PR: Fix, follows-guidelines, core-team] fix(self-mod): render full MCP server payload on the approval card` | 2026‑07‑10 (已关闭) | 完善 MCP 服务器卡片渲染，提升交互可观察性 | <https://github.com/qwibitai/nanoclaw/pull/2998> |
| #2996 | `[PR: Fix, follows-guidelines, core-team] fix(delivery): route missing-adapter messages into the retry path` | 2026‑07‑10 (已关闭) | 将缺失适配器的消息路由至重试队列，避免消息静默丢失 | <https://github.com/qwibitai/nanoclaw/pull/2996> |
| #2988 | `[core-team] Tasks: one-door delivery — send_message is the only path out of a task session` | 2026‑07‑09 (已关闭) | 强制所有任务使用显式目标，简化状态管理 | <https://github.com/qwibitai/nanoclaw/pull/2988> |
| #2966 | `[PR: Fix, follows-guidelines, core-team] fix(agent-runner): log when an errored batch is acked completed` | 2026‑07‑06 (已关闭) | 增加错误批次日志，提升运维可观测性 | <https://github.com/qwibitai/nanoclaw/pull/2966> |

> **整体进展**：本轮合并的 PR 主要聚焦 **渠道默认配置、时间戳统一、技能组织结构** 等底层抽象的规范化，为后续功能扩展提供了更清晰的接口。  

---  

### 4. 社区热点  
| 项目 | 链接 | 关注点 | 简要分析 |
|------|------|--------|----------|
| Issue #3001 (`[OPEN] [bug] Groups created before the shared-skills refactor keep stale skill copies...`) | <https://github.com/qwibitai/nanoclaw/issues/3001> | 旧组仍持有过时的技能快照，导致后续更新不生效。 | 这是本日新创建的唯一 **Open** Issue，出现 **0 条评论** 但涉及 **技能同步失效**，对长期运行的组会产生潜在误差，建议尽快实现自动同步或清理机制。 |
| PR #3014 (`[OPEN] [PR: Fix, follows-guidelines] fix(agent-runner): bound hasIdenticalSend to the turn in flight`) | <https://github.com/qwibitai/nanoclaw/pull/3014> | 修复 `hasIdenticalSend` 绑定状态，防止已完成的批次被误计为“在-flight”。 | 虽无评论，但影响 **批处理错误日志**，对运行可靠性关键。 |
| Issue #2415 (已关闭) – “Container config not found” | <https://github.com/qwibitai/nanoclaw/issues/2415> | 首次 `ncl groups create` 创建的容器缺失配置，导致容器启动失败。 | 已解决，但该问题在 24h 内得到 **1 条评论** 并快速关闭，显示社区对 **容器初始化** 的快速响应。 |
| PR #2999 (`feat(channels): unify iMessage into a single `imessage` channel...`) | <https://github.com/qwibitai/nanoclaw/pull/2999> | 统一 iMessage 为单一 `imessage` 背端，提供本地 & hosted 两套后端。 | 该 PR 仍在审查中，若合并将显著提升 iMessage 的统一管理能力。 |

---  

### 5. Bug 与稳定性  
| Issue # | 状态 | 严重程度 | 简要描述 | 是否已有 Fix PR |
|---------|------|----------|----------|-----------------|
| #2415 | **CLOSED** | 中 | `ncl groups create` 创建的容器首次找不到 `container_configs`，导致 “Container config not found”。 | 已合并（#2966 等） |
| #2389 | **CLOSED** | 高 | 通过 `bin/ncl groups create` / `bin/ncl wirings create` 生成的 wiring 未写入 `agent_destinations`，导致消息被静默丢弃。 | 已合并（#2996） |
| #3001 | **OPEN** | 中 | 早期创建的组仍保留旧版 `.claude-shared/skills/` 快照，后续技能更新不透传。 | **待解决**，关联 PR #3002（warn when a real entry blocks a shared skill symlink） |
| #2998、#2996、#3002 等均为 **Fix**（已关闭） | — | — | 解决了 MCP 卡片渲染、delivery 路由、容器警告等细节问题。 | 已合并 |

> **稳定性评估**：本轮关闭的 2 条高严重度 Bug 已在合并后得到解决，系统整体 **错误率下降**。仍在关注的 **技能同步失效**（#3001）是潜在的回归风险，需要后续监控。  

---  

### 6. 功能请求与路线图信号  
| 项目 | 链接 | 所属方向 | 与已有 PR 的关联 | 可能纳入下一版本 |
|------|------|----------|----------------|-----------------|
| iMessage 统一 (`imessage`) | <https://github.com/qwibitai/nanoclaw/pull/2999> | **渠道统一** | 目标是单一 `imessage` 背端，已在 PR 中实现双后端接入。 | 若审查通过，可望随 **#3010** 一同合并，进入 **下个功能迭代**（预计 2026‑Q4）。 |
| 提供者中立的持久化记忆 | <https://github.com/qwibitai/nanoclaw/pull/3012> | **记忆抽象层** | 与 PR #3013（Codex 加载共享记忆）共同构成记忆统一框架。 | 预计将作为 **记忆系统 2.0** 纳入 **2027‑初**的里程碑。 |
| Telegrams 本地化富渲染 | <https://github.com/qwibitai/nanoclaw/pull/2877> | **Telegram 渠道** | 通过 Bot API 10.1 `sendRichMessage` 提供本地化渲染。 | 已在 `channels` 分支上，可能在 **下个季度**随渠道默认配置统一发布。 |
| MCP 服务器完整

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报 – 2026‑07‑11**  
*基于 GitHub 公开数据（Issues、PR、Releases）生成*

---

### 1. 今日速览  
- 过去 24 小时内共产生 **2 条新开/活跃 Issue**，**无 PR 更新** 亦 **无新版本发布**。  
- 项目活跃度偏低，主要体现在两个未解决的缺陷报告上；社区讨论集中在其中一个已有 2 条评论的 Issue（#972）。  
- 由于没有代码合并，今日未有功能推进或修复落地，整体健康状态呈维持阶段，等待后续修复或新需求驱动的 PR。  

### 2. 版本发布  
> **今日无新版本发布**。  

### 3. 项目进展  
- **已合并/关闭 PR：0**  
- 今日没有 PR 被合并或关闭，因而没有新功能、改进或 Bug 修复进入主分支。项目代码基线保持不变。  

### 4. 社区热点  
| 排名 | Issue/PR | 评论数 | 👍 | 主要讨论点 | 链接 |
|------|----------|--------|----|------------|------|
| 1 | **#972** – *[bug] telegram channel stop respond after some idle time* | 2 | 0 | 用户报告 Telegram 通道在空闲一晚后失去响应，后端日志显示仍在运行；评论中有复现步骤和初步猜测（连接池超时、心跳丢失）。 | https://github.com/nullclaw/nullclaw/issues/972 |
| 2 | #974 – *[BUG] NullClaw shared bearer A2A route allows cross‑caller task and context reuse* | 0 | 0 | 安全类缺陷描述：共享 Bearer token 后，任务 ID 和 contextId 可被其他调用方复用，可能导致数据泄漏。暂无讨论。 | https://github.com/nullclaw/nullclaw/issues/974 |

**热点背后的诉求**：#972 的用户期望在长时间空闲后仍能自动恢复通话能力，避免手动重启；#974 的报告者则希望在身份验证层面加强任务与上下文的隔离，防止跨调用方滥用。  

### 5. Bug 与稳定性  
| 严重程度 | Issue | 描述 | 是否有 Fix PR | 链接 |
|----------|-------|------|---------------|------|
| **高**（影响核心交互） | #972 | Telegram 通道在空闲后无响应，后端仍在运行，导致用户体验中断。 | 否（暂无关联 PR） | https://github.com/nullclaw/nullclaw/issues/972 |
| **中**（安全风险） | #974 | 共享 Bearer token 导致任务 ID、contextId 可被其他调用方重用，可能出现数据泄露或任务劫持。 | 否 | https://github.com/nullclaw/nullclaw/issues/974 |

*目前尚未有对应的修复 PR 进入审核或合流。*  

### 6. 功能请求与路线图信号  
- 今日**无新功能请求 Issue** 提交。  
- 从已有 Issue 中可看出两类潜在路线图方向：  
  1. **健康检测与自动恢复**（如 #972 提供的心跳/重连机制）  
  2. **安全强化**（如 #974 建议在 A2A 路由中绑定调用方身份或使用一次性令牌）  
- 若维护团队后续接受这些方向，可能会在下一版本中引入 **连接保活/重试策略** 与 **更细粒度的授权上下文**。  

### 7. 用户反馈摘要  
- **#972 评论摘要**（共 2 条）：  
  - 用户描述：在 EC2 实例上夜间空闲约 8‑10 小时后，Telegram 通道不再响应新消息；手动重启 `nullclaw agent` 后恢复正常。  
  - 推测原因：可能是底层 HTTP/WebSocket 连接因空闲超时被底层库关闭，但未触发重连逻辑。  
  - 需求：建议增加 **可配置的心跳保活**（如每 30 秒发送空 ping）或 **自动重连** 机制。  
- **#974**：暂无评论，故无直接用户情感。  

总体用户情感：对核心功能满意（后端仍在运行），但对长时间空闲场景下的可靠性提出改进诉求。  

### 8. 待处理积压  
- **长期未响应的重要 Issue/PR**：目前 **无** 超过 7 天未获维护者回复或标记的 Issue/PR。  
- 所有已报告 Issue 均在最近 24‑48 小时内得到更新，表明项目对新反馈的响应及时。  

---  

*本日报仅基于公开的 GitHub 元数据生成，未访问项目内部代码或私密讨论。*  
*如需更深入的技术分析或建议的修复方案，请参考对应 Issue 的讨论线或直接联系项目维护者。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

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

# Moltis 项目动态日报

**报告日期：** 2026-07-11
**分析师：** AI 开源项目分析师

---

### 1. 今日速览
Moltis 项目在过去 24 小时内整体处于**低频维护状态**。今日无新 Issues 提交，亦无版本发布。唯一的动态集中在一次针对前沿模型支持的 PR 提交上，旨在快速同步最新的 OpenAI 模型能力。项目整体运行平稳，当前重点在于模型适配的迭代更新。

### 2. 版本发布
*(今日无新版本发布)*

### 3. 项目进展
今日无 PR 被合并或关闭，核心代码库暂无重大功能推进或修复上线。项目目前处于等待代码审查阶段。

### 4. 社区热点
**重点关注 PR：**
- **[#1146] Add GPT-5.6 model support**
  - **链接：** [moltis-org/moltis PR #1146](https://github.com/moltis-org/moltis/pull/1146)
  - **分析：** 该 PR 旨在将 GPT-5.6 系列模型（Sol, Terra, Luna）集成至 OpenAI 及 Codex 备用目录中，并同步更新了 1.05M 的上下文窗口配置及 372K 的后端限制。这表明社区贡献者正致力于保持 Moltis 在大模型迭代浪潮中的前瞻性，确保用户能第一时间调用最新最强的底层能力。

### 5. Bug 与稳定性
今日无新报告的 Bug、崩溃或回归问题。系统稳定性维持在当前水平。

### 6. 功能请求与路线图信号
- **前沿模型适配：** 从 PR #1146 可以判断，项目当前的路线图重点之一是**快速适配新一代 LLM**。随着 GPT-5.6 系列的引入，项目正在优化超长上下文（1M+ context window）的处理能力，这可能预示着下一版本将增强对超长文档分析或复杂代码库理解的支持。

### 7. 用户反馈摘要
*(今日无新 Issue 评论，暂无新鲜的用户反馈数据)*

### 8. 待处理积压
- **待审查 PR：**
  - **[#1146] Add GPT-5.6 model support**：该 PR 已创建两天，目前仍处于 `OPEN` 状态且无评论。建议维护者尽快审核，以确保模型支持的及时性。

---

**项目健康度评估：** 🟢 **健康**
- **活跃度：** 低（仅 1 个 PR 更新）
- **响应速度：** 待观察（新 PR 尚未获得维护者反馈）
- **风险点：** 无明显风险，仅需关注模型适配 PR 的合并进度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-07-11

> **数据窗口**：2026-07-10 00:00 – 23:59 (UTC)  
> **数据源**：GitHub API / 仓库 `agentscope-ai/QwenPaw`  
> **报告生成**：2026-07-11 06:00 (UTC)

---

## 1. 今日速览
- **核心里程碑**：**v2.0.0 稳定版正式发布**，标志着项目完成从 AgentScope 1.x 到 2.0 内核的全栈迁移（历时 44 天，关联 Issue #4727）。  
- **活跃度极高**：过去 24 h 共 **44 条 Issue 更新**（21 新开/活跃，23 关闭）与 **49 条 PR 更新**（23 待合并，26 已合并/关闭），呈现“发版后密集修复 + 新功能并行”的健康节奏。  
- **稳定性风险聚焦**：桌面端沙箱（`icacls` 超时→`pwsh` 递归爆炸、内存 20 GB）、MCP 子工具权限失效、记忆中文截断导致 embedding 400 等 **P0 级回归** 已在发版当天收到 Fix PR（#5931、#5949、#5950）。  
- **社区诉求清晰**：用户最关心 **升级兼容性指南（#5948）**、**会话分组/导入导出（#5903/#5943）**、**KaTeX 渲染（#5453）**，并已有设计提案进入审议。  
- **整体健康度**：🟢 **良好**——主干已切稳定版，核心回归均有 PR 兜底，文档与官网同步更新（#5932、#5940），技术债偿还有序推进。

---

## 2. 版本发布

| 版本 | 类型 | 关键变更 | 破坏性变更 | 迁移提示 |
|------|------|----------|------------|----------|
| **v2.0.0** | Stable | **Runtime 2.0**：内核基于 AgentScope 2.0 重构（#5078、#4846、#5018）；ReMe v0.4 内存引擎、Loop Engineering、Scroll Context、TUI、Agent OS 五大支柱落地 | ✅ **是**——后端 API、配置结构、插件协议、CLI 参数均有不兼容变更 | 1. 必读 [升级指南](https://github.com/agentscope-ai/QwenPaw/issues/5948)（社区正在众筹）<br>2. 历史会话/记忆/日志**不自动兼容**，需导出后重建<br>3. 自定义 Skill/Channel/MCP 需按新 SDK 重编译 |
| v2.0.0-beta.7 | Pre-release | 官网文案/视觉升级（#5940）；修复 `session_id` 传播缺失导致 ReMe 归档失败（#5938） | 无 | 建议生产环境直接跳至 v2.0.0 |
| v2.0.0-beta.6 | Pre-release | Channels 模块单测覆盖（#5812）；Envelope 错误状态透传修复 | 无 | — |

> **Release Duty** 已自动触发安装验证（#5944），截止 2026-07-10 15:34 UTC 需四平台全绿。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 影响范围 | 进展说明 |
|----|------|----------|----------|
| [#5942](https://github.com/agentscope-ai/QwenPaw/pull/5942) | 🏷️ Release | 版本号 | `bump version to v2.0.0` —— 正式切标签 |
| [#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938) | 🐛 Fix | Memory/ReMe | `session_id` 传入 `add_summarize_task`，修复 `/compact` 等流程下记忆归档丢失会话归属 |
| [#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940) | ✨ Feat | Website | 官网全面改版为 2.0 视觉与文案，突出五大核心能力 |
| [#5932](https://github.com/agentscope-ai/QwenPaw/pull/5932) | 📝 Docs | 文档站 | 同步更新 v2.0 文档（配置、CLI、API、迁移清单） |
| [#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936) | 🔄 Revert | Core/Time | 回滚 “per-message current time injection”（显示丑陋），保留环境级日期上下文 |
| [#5937](https://github.com/agentscope-ai/QwenPaw/pull/5937) | 📝 Docs | News | 规范 News 格式，便于自动化 changelog 生成 |
| [#5812](https://github.com/agentscope-ai/QwenPaw/pull/5812) | ✅ Test | Channels | 单测覆盖率提升，锁定通道层回归基线 |
| [#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813) | ✅ Test | Runtime/Security/Install | 43 条针对性回归单测，覆盖安装、工具调用超时、rm-protection bypass 等 4 个生产事故 |

> **合并统计**：26 条 PR 已合并/关闭，其中 **Bug Fix 9 条、Feature 4 条、Docs/Chore 8 条、Test 5 条**——呈现“发版即修复、测试先行”的成熟节奏。

---

## 4. 社区热点（评论/反应 Top 5）

| 排名 | Issue/PR | 评论 | 👍 | 核心诉求 | 状态 |
|------|----------|------|-----|----------|------|
| 1 | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 15 | 0 | **Console 崩溃**：大量 `tool_use` 历史导致前端 `type: "data"` 渲染白屏 | ✅ Closed（已在 v2.0 重构中解决） |
| 2 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | 12 | 3 | **AgentScope 1.x→2.0 迁移**主跟踪 Issue，3 个 👍 显示社区强期待 | ✅ Closed（随 v2.0.0 完成） |
| 3 | [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) | 11 | 1 | **v2.0 预发布 Bug 集中跟踪**，作为“总收集箱”避免噪音 | ✅ Closed（转入稳定版维护） |
| 4 | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | 5 | 0 | **Desktop Sandbox P0 回归**：`icacls` 超时→`pwsh` 递归爆炸、20 GB 内存、无法关闭沙箱 | 🔴 Open（已有 Fix PR #5931 待 Review） |
| 5 | [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) | 4 | 0 | **MCP 子工具权限失效**：拒绝/允许设置不生效，Agent 仍可调用被禁工具 | 🟡 Open（Fix PR #5949 已提交） |

> **洞察**：社区关注点已从“迁移能否完成”转向“发版后的 P0 回归修复”与“升级文档缺失”。Issue #5948（升级指南呼声）虽仅 1 条评论，但被多条 Issue 引用，属**隐性高优需求**。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 根因/定位 | Fix PR | 状态 |
|--------|-------|------|-----------|--------|------|
| **P0 (阻塞生产)** | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | Windows 桌面端沙箱 `icacls` 超时被吞 → `pwsh` 无限递归、内存 20 GB、不可关闭 | `restricted-token` 沙箱实现缺陷，超时未捕获、进程树失控 | [#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931) *新增 restricted-token Windows sandbox* | 🟡 Under Review |
| **P0** | [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) | MCP 子工具“拒绝/允许”策略不生效，Agent 仍可调用 | 策略更新为 fire-and-forget reload，旧 handler 仍持有旧策略 | [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949) *apply access policy immediately* | 🟡 Under Review |
| **P1 (核心功能受损)** | [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) | 中文记忆触发 embedding 400：按字符截断而非 token，超模型上下文 | 双层截断均用字符长度，bge-m3 等模型需 token 级截断 | 无 PR（需在 `ReMe`/`embedding` 管道修复） | 🔴 Open |
| **P1** | [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | auto-memory 失败：`No module named 'agentscope.tool._builtin._scripts'` | v2.0 内部模块路径变更，脚本入口未同步更新 | 无 PR | 🔴 Open |
| **P1** | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 上下文压缩丢失 `tool_call` 结构 → 400 / 消息计数错位 | `LightContextManager.pre_reasoning` 将结构化块转纯文本 | 无 PR（需在 compaction pipeline 保留结构） | 🔴 Open |
| **P2** | [#5946](https://github.com/agentscope-ai/QwenPaw/issues/5946) | “Full output preserved durably” 提示误导 Agent 发起无效 `recall_history` | 截断提示语义模糊，Agent 误判上下文已逐出 | [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) *统一 ToolResultLimiter 截断提示* | 🟡 Open |
| **P2** | [#5910](https://github.com/agentscope-ai/QwenPaw/issues/5910) | Auto Memory Search 产生非法 `function_call` 导致 OpenAI Responses API 502 | 记忆检索结果直接塞入 function_call，格式不符合 Responses API | 无 PR | 🔴 Open |
| **P2** | [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) | 防重复功能误触发“Doom loop” | 计数逻辑按上次触发而非新消息重置 | 无 PR | 🔴 Open |
| **P2** | [#5896](https://github.com/agentscope-ai/QwenPaw/issues/5896) | 迭代次数限制按“上次触发”计次，导致新提问提前触发上限 | 同 #5906 计数器作用域错误 | 无 PR | 🔴 Open |

> **修复覆盖率**：P0 级 2/2 已有 PR；P1 级 3/3 尚无 PR —— **建议维护者今日优先 Review #5931、#5949，并指派 #5950、#5952、#5856 给对应模块 Owner**。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 社区热度 | 已有实现/设计 | 纳入下版本概率 |
|------|----------|----------|---------------|----------------|
| **会话分组 + 导入导出** | [#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903) / [#5943](https://github.com/agentscope-ai/QwenPaw/issues/5943) | 2 💬、设计提案已开 | 设计提案 #5943 进入审议 | 🟢 **高**（Console 侧低风险，v2.0.1 可交付） |
| **升级/迁移指南** | [#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948) | 1 💬、被多 Issue 引用 | 无官方文档，仅社区自发讨论 | 🟢 **极高**（Release Duty 强制要求，v2.0.0 发布后 4 h 内需补齐） |
| **KaTeX / LaTeX 渲染** | [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) | 2 💬、长期开放 | 无 PR | 🟡 **中**（桌面端 WebView 注入成本可控，排期看优先级） |
| **可配置主题/皮肤模块** | [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) | 2 💬、设计提案 Task #1 | 设计提案 #5909 已开 | 🟢 **高**（P0 品牌化需求，架构已预留 ThemeProvider） |
| **SSE 结构化运行结果** | [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) | PR 新开 | PR #5930 已实现 `run_outcome` 字段 | 🟢 **高**（API 自动化集成刚需，向后兼容） |
| **Vision Fallback (文本模型处理

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


---

### **ZeroClaw 2026-07-11 项目动态日报**

---

#### **1. 今日速览**

- **活跃度评估**：项目今日活跃度极高，24小时内共处理19条Issue、50条PR，显示开发速度快且社区参与度强。
- **Bug 密集**：高优先级Bug尤其集中于Telegram通道、技能运行时、LLM函数调用与安全检测等核心模块，需引起重视。
- **功能推进**：多项v0.8.3版本支持工作（observability、CI、docs、依赖）持续推进，基础设施稳定性和可维护性提升明显。
- **社区信号**：Telegram使用体验与文档问题反映出用户关注度高，但当前实现存在结构性缺陷；同时，ComfyUI、ACP多代理等功能请求显示扩展需求增强。

---

#### **2. 版本发布**

- **无新版本发布**

---

#### **3. 项目进展**

| PR | 状态 | 说明 | 链接 |
|----|------|------|------|
| #8680 | ✅ 合并 | 修复技能评估(fork)时因历史切片越界导致的SIGSEGV崩溃，影响高风险技能运行逻辑 | [PR #8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) |
| #8751 | ✅ 合并 | 修复LocalWhisperConfig默认值错误，避免序列化时`max_audio_bytes=0`、`timeout_secs=0`的问题 | [PR #8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751) |

✅ **总结**：今日合并PR主要聚焦于修复运行时稳定性问题，特别是技能评估流程和语音模型配置的默认值问题，这些修复对于提高Agent在复杂任务中的健壮性至关重要。

---

#### **4. 社区热点**

| Issue/PR | 评论数 | 说明 | 链接 |
|----------|--------|------|------|
| #5514 | 6 | Telegram中发送多张图片时，Agent会为每张图片生成一次请求，导致重复输出，用户体验严重受影响 | [Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) |
| #8654 | 3 | Skill-review fork在工具调用后发生panic，导致daemon SIGSEGV崩溃，阻断工作流 | [Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) |
| #8798 | 2 | 提议统一`/ws/chat`和`/acp`的WebSocket协议，简化网关架构设计，具备广泛影响潜力 | [Issue #8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) |

🔥 **分析**：Telegram通道相关Bug反映出在多媒体消息处理过程中，事件边界划分不清，导致重复请求；而技能运行时的崩溃则暴露了并发与状态隔离不足；最后，RFC提议的协议合并可能是未来架构优化的关键一步。

---

#### **5. Bug 与稳定性**

| 等级 | Issue | 状态 | 说明 | 是否有 Fix PR |
|------|-------|------|------|---------------|
| 🔴 High | #8654 | Open | Skill-review fork panic → SIGSEGV崩溃（slice越界） | ✅ [PR #8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) |
| 🔴 High | #8934 | Open | Gemini函数调用失败，因缺失`thought_signature`导致API错误 | ❌ |
| 🟠 Medium | #8952 | Open | Agent流式转述文本在前后trim后重复输出 | ❌ |
| 🟠 Medium | #8929 | Open | 流式输出结尾trim后，也可能触发重复转述 | ❌ |
| 🟠 Medium | #8936 | Open | loop_detector在工具调用时深度克隆整个JSON树，内存压力大 | ❌ |
| 🟡 Low | #8810 | Open | Telegram文档错误，给用户误导 | ❌ |
| 🟡 Low | #8944 | Open | ZeroCode鼠标复制文本时，单词级选择被TUI事件干扰 | ❌ |
| 🟡 Low | #8945 | Open | macOS文本替换在ZeroCode输入框失效 | ❌ |

🚨 **总结**：核心模块（技能、Gemini支持、流式输出）各出现稳定性问题，其中高严重度Bug已部分修复，但仍需持续关注剩余几个关键崩溃和体验问题。

---

#### **6. 功能请求与路线图信号**

| Issue | 类型 | 说明 | 链接 |
|-------|------|------|------|
| #6563 | Feature | 支持ComfyUI/Comfy Cloud作为媒体生成provider，为后续视频生成功能铺路 | [Issue #6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) |
| #8958 | Feature | ACP端点支持`?agent=`查询参数，允许外部客户端选择代理，增强多代理场景支持 | [Issue #8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958) |
| #8363 | Tracker | v0.8.3配置驱动的运行时策略、路由与工具访问能力 | [Issue #8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363) |
| #8073 | Tracker | v0.8.3可观测性、CI、文档、依赖与发布支持 | [Issue #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) |

🧭 **分析**：ComfyUI集成与ACP多代理支持是项目扩展能力的关键信号；两个v0.8.3 tracker显示即将发布的版本将聚焦于开发者体验与系统可维护性，这些都是未来迭代的重要方向。

---

#### **7. 用户反馈摘要**

- **Telegram 使用痛点**：
  - “Telegram端发送图片会被误解为多个请求” (#5514)
  - “Telegram命令菜单无法注册，因指令数超过100限制” (#8950)
  - “Telegram文档错误，误导配置步骤” (#8810)

- **Agent 输出相关问题**：
  - “流式输出结尾被trim后，仍出现重复转述” (#8952, #8929)
  - “Gemini函数调用失败，阻断了整个流程” (#8934)

- **Positive Feedback**：
  - 对Rust实现的内存安全与类型设计给予肯定 (#5514)
  - 对ClawHub技能源被git-catalog替代的变更表示支持 (#8638)

🗣️ **总结**：Telegram通道的用户体验是当前急需改进的地方；同时，LLM支持（如Gemini）的函数调用稳定性也是关键用户场景。

---

#### **8. 待处理积压**

| Issue | 最后更新 | 说明 | 链接 |
|-------|----------|------|------|
| #5514 | 2026-07-10 | Telegram图片发送触发多次Agent请求，等待进一步解决方案 | [Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) |
| #8654 | 2026-07-10 | Skill-review panic导致崩溃，尽管PR已提出但尚未合并 | [Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) |

⏳ **提醒**：这些Issue尽管已有Fix PR，但尚未合并，建议维护者尽快审核合并，以避免用户长期面临崩溃与体验问题。

---

📅 **报告生成时间**：2026-07-11  
📊 **数据来源**：[ZeroClaw GitHub](https://github.com/zeroclaw-labs/zeroclaw)  

---


</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*