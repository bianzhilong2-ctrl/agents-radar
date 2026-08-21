# OpenClaw 生态日报 2026-08-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-21 00:43 UTC

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

# OpenClaw 项目动态日报 — 2026-08-21

---

## 1. 今日速览

OpenClaw 在过去 24 小时内活跃度极高，共处理 500 条 Issues 和 500 条 PR 更新，体现出强劲的社区参与和开发动力。今日未发布新版本，但多个关键功能和 Bug 修复 PR 已进入合入流程，推动项目向稳定性和功能完善方向迈进。尤其值得关注的是，多个与内存管理、进程泄漏、多提供商支持相关的议题引发了广泛讨论，反映出社区对系统稳定性和用户体验的高度关注。尽管存在部分回归问题和性能瓶颈，但通过持续的修复和优化，OpenClaw 正在快速迭代以提升可靠性和功能丰富度。

---

## 2. 版本发布

**今日无新版本发布。**

前述内容基于当前数据中无新版本发布信息。如需查看最新版本信息，请访问 [OpenClaw Releases 页面](https://github.com/openclaw/openclaw/releases)。

---

## 3. 项目进展

以下是今日已合并或关闭的部分重要 PR：

- **[#116489](https://github.com/openclaw/openclaw/pull/116489)** – 安全安装策略增强  
  新增 `warn` 模式用于插件/技能安装前的安全确认机制，提升系统安全性。

- **[#126618](https://github.com/openclaw/openclaw/pull/126618)** – 修复 Tool Search 目录/工具模式调用问题  
  解决 `openai-completions` 模型在 `Tool Search` 目录或工具模式下错误调用 `tool_call` 的问题，提升执行效率。

- **[#126424](https://github.com/openclaw/openclaw/pull/126424)** – 多代理会话保持会话绑定关系  
  修复多代理操作下对话消息可能被错误路由的问题，保障会话一致性。

- **[#126881](https://github.com/openclaw/openclaw/pull/126881)** – 发布流程安全性提升  
  确保受保护的工具链在主分支更新后仍保持信任状态，避免发布失败风险。

这些 PR 涵盖安全控制、性能优化、会话稳定性等多个核心方面，对提升整体系统质量有重要帮助。

---

## 4. 社区热点

以下是今日评论最多、反应最热的 Issues：

### 🔥 [Issue #42475](https://github.com/openclaw/openclaw/issues/42475)  
**[Feature] Per-agent cost budget enforcement at the gateway level**  
评论数：23 ｜ 👍：1  
**诉求分析：** 用户希望在网关层实现基于每个 agent 的费用预算控制，防止非受控支出。该功能对于企业级部署非常关键，有助于精细化资源管理。

### 🔥 [Issue #48788](https://github.com/openclaw/openclaw/issues/48788)  
**feat: centralized filename encoding utility for multi-encoding Content-Disposition handling**  
评论数：20 ｜ 👍：1  
**诉求分析：** 现有方案仅处理常见乱码场景，用户建议统一处理多种编码格式（如 Shift-JIS、EUC-KR）以支持更多国际化需求。

### 🔥 [Issue #108435](https://github.com/openclaw/openclaw/issues/108435)  
**[Bug]: update to openclaw 2026.7.1: gateway fails to start w/ error**  
评论数：14 ｜ 👍：3  
**诉求分析：** 升级后网关无法启动，疑为版本兼容性问题。多个用户报反馈，需紧急修复以保障版本稳定性。

这些议题展示了社区对于成本控制、国际化支持及升级稳定性的关注，代表了未来版本开发的潜在方向。

---

## 5. Bug 与稳定性

以下是今日报告的主要 Bug，按严重程度排序：

### 🚨 P0 / 崩溃类

- **[Issue #108435](https://github.com/openclaw/openclaw/issues/108435)**  
  升级至 2026.7.1 后网关启动失败，影响大量用户使用。  
  **状态：** 开放，尚无 fix PR。

### ⚠️ P1 / 回归类

- **[Issue #38327](https://github.com/openclaw/openclaw/issues/38327)**  
  Google Vertex/Gemini 集成异常，抛出 "Cannot convert undefined or null to object" 错误。  
  **状态：** 开放，无修复 PR。

- **[Issue #72015](https://github.com/openclaw/openclaw/issues/72015)**  
  多 agent 网关启用 active-memory 插件导致响应缓慢甚至崩溃。  
  **状态：** 开放，无修复 PR。

- **[Issue #88657](https://github.com/openclaw/openclaw/issues/88657)**  
  DeepSeek V4 Flash 输出不完整，影响用户体验。  
  **状态：** 开放，无修复 PR。

### ⚠️ P2 / 行为类

- **[Issue #50490](https://github.com/openclaw/openclaw/issues/50490)**  
  飞书群聊中 activation 模式切换失效，始终响应所有消息。  
  **状态：** 开放，无修复 PR。

- **[Issue #90378](https://github.com/openclaw/openclaw/issues/90378)**  
  v5.28 → v6.1 升级过程中 cron 作业迁移异常，导致默认 delivery.mode 不正确。  
  **状态：** 开放，无修复 PR。

建议维护团队优先关注 P0 和 P1 级别的问题，以保障系统基础稳定性。

---

## 6. 功能请求与路线图信号

以下是今日提出的重要功能请求：

### ✅ 有望纳入下一版本

- **[Issue #42475](https://github.com/openclaw/openclaw/issues/42475)**  
  网关层 per-agent 成本预算控制功能。  
  **信号强度：** 高。该功能已获得多位用户支持，并有相关讨论，可能进入近期开发计划。

- **[Issue #50798](https://github.com/openclaw/openclaw/issues/50798)**  
  支持 agent 之间可见的 ACP 线程消息传递。  
  **信号强度：** 中。该功能增强了多 agent 协同能力，有一定实现价值。

### 📈 值得关注的增强建议

- **[Issue #71689](https://github.com/openclaw/openclaw/issues/71689)**  
  SQLite 快照恢复缺乏完整性保障。  
  **信号强度：** 高。数据一致性问题影响核心功能稳定性。

- **[Issue #68920](https://github.com/openclaw/openclaw/issues/68920)**  
  HTTP `/v1/chat/completions` 响应延迟过长，影响实时应用场景。  
  **信号强度：** 高。直接影响 API 性能体验。

建议产品团队将以上功能纳入 roadmap 并与开发团队协商实现优先级。

---

## 7. 用户反馈摘要

根据今日社区活跃 Issue 中的用户反馈，主要痛点包括：

- **升级兼容性问题：** 多个用户在升级过程中遇到启动失败、配置丢失等问题，急需稳定性保障措施。
- **成本控制需求强烈：** 企业用户渴望获得 per-agent 成本限制功能，以避免不可控支出。
- **国际化支持不足：** 文件名乱码问题在非英文环境下频繁出现，用户期望更全面的编码支持。
- **性能瓶颈突出：** 特别是在多 agent 场景下，性能下降明显，影响实际部署效果。
- **会话体验有待改进：** 如 `/new`, `/reset` 缺少确认步骤，容易误操作导致会话丢失。

同时，部分用户也对 OpenClaw 的灵活性和插件机制表达了满意，但希望官方能加强文档和维护保障。

---

## 8. 待处理积压

以下是一些长期存在、未获得有效响应的重要议题，建议维护者尽快跟进：

- **[Issue #43747](https://github.com/openclaw/openclaw/issues/43747)**  
  **[Bug]: Memory management is in chaos**  
  已存在数月，涉及内存管理逻辑混乱问题，影响用户日常使用。  
  **建议：** 指定负责人进行深度分析并推动解决。

- **[Issue #44289](https://github.com/openclaw/openclaw/issues/44289)**  
  **[Enhancement]:** Generate secretref reference docs from metadata  
  该功能可提升开发效率，减少手工维护成本。  
  **建议：** 评估实现难度并安排开发优先级。

- **[Issue #45501](https://github.com/openclaw/openclaw/issues/45501)**  
  **[Feature]:** `session.resetPrompt` — configurable session startup message  
  已提交数月，属于 UX 优化类需求。  
  **建议：** 确定是否纳入功能规划。

建议定期扫描历史积 Issue，确保重要问题不被遗忘，维护良好的项目健康度。

---

📝 **日报生成说明：**  
本日报依据 2026-08-21 收集自 [OpenClaw GitHub 仓库](https://github.com/openclaw/openclaw) 的最新动态生成，旨在帮助维护者、用户及贡献者快速了解项目当前状态、重点问题及发展趋势。如有疑问或补充，请参考原文链接获取更多详情。

---

## 横向生态对比

**Comparative Analysis of Personal AI Assistant / Autonomous Agent Open-Source Ecosystem (2026‑08‑21)**  

---

### 1. 生态全景

个人 AI 助手和自主智能体领域正在经历快速的多元化发展。全球开发者社区表现出极高的参与热情，众多项目同时在安全增强、成本控制、多 Agent 协作和跨平台集成等关键领域推进。生态系统同时也呈现出显著的成熟度差异：从高活跃度、版本发布频繁的“核心 reference”项目（如 OpenClaw），到专注特定垂直领域或社区维护的较为轻量级项目。整体趋势是向更可靠、更智能、更易集成的 agent 框架演进，以满足企业和终端用户的复杂需求。

---

### 2. 各项目活跃度对比

| 项目名称 | Issues（今日） | PRs（今日） | Release（今日） | 健康度评级* |
|----------|----------------|------------|----------------|--------------|
| **OpenClaw** | 500 | 500 | ❌ | **Very Active** |
| **Hermes Agent** | 50 | 50 | ❌ | **Very Active** |
| **ZeroClaw** | 50 | 50 | ❌ | **Very Active** |
| **LobsterAI** | 50 | 50 | ❌ | **Very Active** |
| **CoPaw** | 28 | 50 | ✅ v2.1.1‑beta.1 | **Very Active** |
| **NanoClaw** | 3 | 50 | ❌ | **Active** |
| **Moltis** | 3 | 8 | ❌ | **Active** |
| **NanoBot** | 5 | 29 | ❌ | **Active** |
| **PicoClaw** | 3 | 8 | ❌ | **Low** |
| **ZeptoClaw** | 0 | 0 | ❌ | **Dormant** |
| **NullClaw** | 0 | 0 | ❌ | **Dormant** |
| **TinyClaw** | 0 | 0 | ❌ | **Dormant** |
| **IronClaw** | 0 | 0 | ❌ | **Dormant** |

\*评级基于问题和 PR 的数量、合并率和版本发布情况得出。  
- **Very Active** – >40 个活跃 Issue 和 >40 个 PR，持续合并，部分项目最新发布。  
- **Active** – 中等活动量，混合状态。  
- **Low** – 低频更新，主要为维护状态。  
- **Dormant** – 连续 24 小时无活动。

---

### 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 典型竞争对手（如 Hermes Agent, LobsterAI） |
|------|----------|-------------------------------------------|
| **核心定位** | 广泛使用的“核心 reference”（github.com/openclaw/openclaw），提供通用 agent 运行时参考实现。 | Hermes Agent 专注于 Discord/桌面工作流；LobsterAI 偏向企业级 Web UI 与协作功能。 |
| **社区规模** | 非常庞大——500 个 Issues/PR，显示出高用户基数和高度的社区参与度。 | Hermes 与 LobsterAI 活跃但规模较小（~50 个 Issues/PR）。 |
| **技术优势** | - 完整的插件/技能安装、安全策略（如 `warn` 模式）。<br>- 多提供商支持（OpenAI、Vertex、Gemini 等）。<br>- 强大的内存管理和会话绑定。 | Hermes 拥有丰富的桌面功能（Windows 计划任务、Kanban）和强大的插件系统，但侧重于特定平台。 |
| **技术路线差异** | 强调可扩展性、全球化支持（多种编码）、成本控制（per‑agent 网关预算）。 | Hermes 强调 UI/UX（TUI、桌面构建）、特定协议（Discord、Matrix）。 |
| **用户画像** | 寻求通用、高性能、可以定制任意 LLM 供应链的企业用户和研究人员。 | 希望紧密集成特定渠道（Discord、桌面）的开发者；LOB 用户寻求协作 UI。 |
| **健康状况指标** | 高问题处理率、持续的 PR 合并、活跃的社区反馈（如升级兼容性、成本管理）。 | 虽然活跃，但存在较多已知问题（如 Windows 桌面更新、state.db 损坏）。 |

**结论：** OpenClaw 可以被视为**开源 Agent 生态

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**2026-08-21 NanoBot 项目动态日报**

---

### 1. **今日速览**  
NanoBot 今日活跃度中等：共更新 5 条 Issue 与 29 条 Pull Request（PR），其中 12 条 PR 已合并，多数关注用户界面优化、模型兼容性及异常处理。社区关注点聚集在本地部署挑战（如 Docker OAuth 问题）与功能扩展（如 Google Vertex AI 提供者支持），核心功能迭代稳步推进但依赖社区协作解决技术瓶颈。

---

### 2. **版本发布**  
无新版本发布。当前版本仍需完善本地部署兼容性及异步流处理逻辑，下一版本需优先解决这些核心问题。

---

### 3. **项目进展**  
- **合并关键 PR**  
  - **#5455**：解决 Codex 服务器错误重试问题（修复 #5454），确保中间流断点后仍可重试请求，提升提供者可靠性。  
  - **#5420**：实现对话流可视化与按压恢复功能，增强调试与用户体验一致性。  
  - **#5179**：启动 MCP SDK v2 迁移，为兼容高级 API 和未来扩展奠定基础（但仍存争议讨论，需进一步评估成本）。  
  - **#5453**：新增 SenseNova（商汤日日新）提供者，资源充足的用户可直接调用中国本地模型，但需依赖用户配置接口密钥。  

---

### 4. **社区热点**  
- **🔥 Issue #5444**：Docker 环境下 OpenAI OAuth 失败（链接）。用户反映本地部署流程对初学者门槛较高，需完善文档示例。  
- **⚠️ Issue #5425**：Legacy Proxy 支持问题（链接）。社区需求集中于自定义提供者兼容性，现有修复仍需测试“socks://”网关级限制。  
- **🌟 Feature #5459**：社区一致要求添加 Google Vertex AI 与 Anthropic Claude 保驾护航（链接）。PR #5179 迁移标志着模型多元化趋势强化需要。

---

### 5. **Bug 与稳定性**  
- **高严重性**：  
  - #5444：OpenAI OAuth Docker 失败（无修复 PR，阻塞本地部署核心用户群）。  
  - #5454：流传输服务错误未重试（#5455 已修复，改进本地部署用户体验）。  
- **中严重性**：  
  - #5425：Socks 协议代理栈溃（潜在风险未需紧急修复，但轻量级代理服务可能受影响）。  

---

### 6. **功能请求与路线图信号**  
- **拟议功能**：  
  - #5459（Google Vertex AI Claude 支持）与 #5453（SenseNova）均反映用户追求“本地化模型链路”及“跨生态兼容性”。  
  - #5179（MCP v2 迁移）暗示社区期待高性能代理框架升级，但争议（如迁移成本评估）需延续跟踪。  

---

### 7. **用户反馈摘要**  
- **痛点**：  
  - 本地部署环境配置缺乏自动化指导（如 Docker OAuth 的 man-in-the-middle 防护缺失）。  
  - 流式传输中断后无法复原（#5455 修复显示社区对连续性体验敏感度高）。  
- **满意项**：  
  - 对话流可视化提升了复杂调试效率（评论 #5420）。  
  - SenseNova 模型集成满足中文场景化需求（评论 #5453）。  

---

### 8. **待处理积压**  
- **长期问题**：  
  - **#550**（event loop 错误）可通过 PR #1203 解决，需确认 Linux 用户使用率升级。  
  - **#5138**（MCP v2 彻底迁移）与 #5179 争议待决，需模块化设计决策。  
- **待关注**：  
  - **#5453**：SenseNova 依赖用户接口密钥配置，是否提供二进制绑定可提升安全性？  

--- 

**项目健康度评估**：中等活跃度，核心功能进展显著但依赖社区快速迭代技术细节，本地化场景短板需政策性权衡支持。


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 赫尔墨斯 Agent 项目日报
**日期：2026-08-21**

---

## 1. 今日速览

赫尔墨斯 Agent 项目在 8 月 21 日展现出高活跃度，共处理了 50 起 Issues 更新和 50 起 PR 更新。尽管无新版本发布，但项目维护团队表现出色：有 43 起 PR 处于待合并状态，表明大量修复和功能开发正在待审；7 起 PR 已合并/关闭，显示项目正在稳步推进。社区讨论热烈，前 30 起 Issues 中许多是关于 Windows 平台问题、缓存控制和桌面应用更新的报告，反映出用户在不同平台上的部署挑战。总体来看，项目健康度良好，活跃度评估为**高**——大量问题待解决，但修复工作正在进行中。

---

## 2. 版本发布

*暂无新版本发布*

---

## 3. 项目进展

### 本日合并/关闭的重要 PR：

1. **#91190** - `fix(discord): thread explicit reply mentions` (LFDMcore)
   - 改进 Discord 线程中回复提INGS 的处理逻辑：保留无提INGS 引用的续作出现行为，处理 Hermes 直接提INGS 的回复为新任务，同时支持 Discord 自动回复提INGS 为上下文。修复 Discord 自由模式下的回退问题。

2. **#91188** - `fix(desktop): make managed Node authoritative for Windows install scripts` (andrexibiza)
   - 解决 Windows 桌面应用安装中 npm 生命周期子进程使用系统 Node 而非 Hermes 托管 Node 的问题，防止 Electron 构建失败和更新中断。该 PR 继承自 #82355，并消除了冲突。

3. **#91185** - `fix(gateway): make Windows Scheduled Task install valid on workgroup hosts` (andrexibiza)
   - 修复 Windows 工作组环境中 `hermes gateway install` 失败问题。解决 Task Scheduler 无法映射 `WORKGROUP\\user` 安全标识的问题，该问题与 #89824 相同。

4. **#91142** - `fix(kanban): support reliable local-model workers` (BELGARATHbb)
   - 为 kanban 调度器拥有 Worker 添加了可选工具允许列表，支持小型本地模型使用简化生命周期，保留 `kanban_complete` 和 `kanban_block` 等关键信号。立即停止调度器 Worker，避免僵持。

5. **#91189** - `fix(proxy): append SSE [DONE] when Nous streams omit the sentinel` (rainbowgore)
   - 修复某些 Nous Portal 免费模型流式响应（如 LongCat 和 Solar）在有 `lastOne` 帧后省略 OpenAI 终端 `[DONE]` 事件的问题。确保严格 OpenAI 兼容客户端正确处理流式响应。

6. **#91174** - `feat(cron): add execution and delivery attestation` (thebrettwatson)
   - 为 cron 执行提供持久化的执行来源证明和交付证明。调度器将每个执行绑定到原子 fire claim，并仅从调度器拥有上下文导出执行来源证据，实现 founder-facing 工件的可审计性。

7. **#91193** - `fix(update): restore a Desktop build wiped by an earlier Windows update` (andrexibiza)
   - 解决 Windows ZIP 回退/更新失败导致桌面应用构建被删除，影响后续更新的问题。保护桌面应用构建目录，防止错误清除。

8. **#91191** - `fix(projects): make board-bound tasks inherit their project` (fangliquanflq)
   - 修复项目-看板双向绑定问题，确保在绑定看板上创建的任务继承项目属性，而非回退到未分类的工作树，同时保持 `project create --board` 命令的一致性。

9. **#91183** - `fix(tui): honor per-platform context-file policy for Desktop` (esprusso)
   - 修复桌面应用会话从安装树继承 `AGENTS.md` 的问题，尊重平台特定的 `gateway.platforms.<platform>.skip_context_files` 策略，保持 SOUL 身份和记忆隔离。

10. **#91186** - `fix(gateway): escalate to taskkill /T /F when force=False fails on Windows` (bbasketballer75)
    - 修复 Windows 上 Hermes 网关进程崩溃导致子进程成为孤立作业的问题。当 `TerminateProcess` 失败时，使用 `taskkill /T /F` 强制终止，避免重启管理器 `--replace` 路径失败。

---

## 4. 社区热点

### 高活跃讨论话题：

1. **#66616** - `[skills-index-watchdog] Skills index is stale or degraded` (66 条评论)
   - *状态：已开启，严重等级 P3*。Skills Hub 索引已过期 29.8 小时（超过 26 小时限制）。`/docs/api/skills-index.json` 由 GitHub 工作流定期更新，但自动新鲜度探测失败。

2. **#87093** - `Debian installation broken; uv.lock & npm install failed` (14 条评论)
   - *状态：已开启，严重等级 P1*。Debian 13.6 系统安装失败，标准安装脚本无法成功安装 uv.lock 和 npm 依赖。

3. **#75801** - `OpenCode Go gpt-5.6-luna omits finish_reason → fake 'network mid-stream' continuations` (7 条评论)
   - *状态：已开启，严重等级 P2*。Hermes Desktop + OpenCode Go `gpt-5.6-luna` 存在双重问题：模型流式输出完整但无 `finish_reason`，导致错误的中间流中断分类；桌面应用进一步截断流式答案。

4. **#90829** - `Daily Desktop update fails — 'desktop app was not rebuilt' (win32-x64)` (3 条评论)
   - *状态：已开启，严重等级 P2*。Windows 11 系统在 `hermes` 更新中无法正确重建桌面应用，根源在于本地 Windows 原生依赖门控失败和 `node_modules` 损坏。

5. **#89293** - `Repeated state.db corruption on busy single-host deployment` (3 条评论)
   - *状态：已开启，严重等级 P1*。在繁忙的单主机部署中，`state.db` 重复损坏（8 天内 3 次），每次都需要离线恢复重建，造成部分数据丢失和数小时人工恢复工作。

### 讨论背后的诉求：

- **平台兼容性**：Windows 桌面应用更新、安装问题占主导地位，反映出不同平台下的部署挑战。
- **状态管理和数据持久化**：许多问题涉及 SQLite 数据库 corruption、会话状态和 WAL（写 ahead log）模式问题。
- **流式协议兼容性**：Nous Portal 流式响应的 `[DONE]` 事件问题，以及 OpenAI 兼容性问题。
- **自动化和监控**：技能索引监控、cron 执行证明和交付审计，反映出用户对系统稳定性和可观测性的关注。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告：

#### **P0 严重级（关键/高优先级）**

1. **#90971** - `apply_anthropic_cache_control is not idempotent on pre-decorated input`
   - Anthropic 缓存控制功能在输入已预处理时表现不一致，可能导致工具预算溢出。

2. **#91164** - `gpt-5.6 family: prompt_cache_retention causes 400 invalid_parameter`
   - 某些 OpenAI gpt-5.6 模型在 `prompt_cache_retention` 参数上出现 400 错误，导致对话失败。

3. **#85079** - `retry 'returned NULL without setting an exception' on contended WAL append`
   - 并发子代理写入时出现 SQLite 异常，导致会话持久化失败。

#### **P1 严重级**

1. **#86443** - `hermes update deletes the packaged Desktop app on Windows when rebuild fails`
2. **#44225** - `hermes update destroys Hermes Desktop executable on failed Electron rebuild`
3. **#90906** - `Windows: hermes update reports 'already up to date' while venv stays on uv Python 3.11.15`
4. **#90134** - `hermes desktop build fails blockmap.js`
5. **#90237** - `Desktop window breaks Windows Snap and FancyZones`

#### **P2 严重级（中等优先级）**

1. **#90477** - `Desktop profile switch on SSH remote spawns LOCAL backend`
2. **#90287** - `feat(steer): peer + broadcast session steering`
3. **#81114** - `Desktop status stack: completed background tasks stay 'running' indefinitely`
4. **#90932** - `Stalls on Downloading Chrome for Testing 145.0.7632.6`
5. **#91021** - `Desktop app relaunch after in-app update fails to reconnect to WSL backend`

### 修复状态：

- **已修复**：有多个 PR 已解决类似问题，如 #91188、#91185、#91142 等。
- **部分修复**：某些问题有 PR 修复但仍在测试中（如 #91189、#91186）。
- **待修复**：#66616（技能索引）、#87093（Debian 安装）、#75801（OpenCode Go）等仍有待跟踪。

---

## 6. 功能请求与路线图信号

### 纳入下一版本的可能性：

1. **#90866** - `Make observable state proof-carrying from source to side effect` (andrexibiza)
   - 提出通过使状态可观测、来源可验证、原子发布和所有者作用域来修复 Hermes 的状态管理问题。该 PR 已合并，可能成为下一版本的核心功能。

2. **#88683** - `make install/update/bootstrap obey one transactional deployment plan`
   - 建议将安装/更新/启动流程统一为单一事务部署计划，解决当前多个独立路径可能导致的实际部署与预期不一致问题。

3. **#91149** - `Preview pane: route localhost dev servers through the harness when connected to a remote/SSH backend`
   - 预览面板应将本地开发服务器通过代理路由到远程/SSH 后端，以支持远程开发环境。

4. **#91175** - `fix(browser-use): harden the CLI 3 one-tool runtime`
   - 强化 Hermes 内置的 Browser Use CLI 3.0 `browser_exec` 集成，以支持 `--toolsets` 参数预验证。

### 新功能路线图：

- **信任-作用域机制** (#91192)：为 A2A 同行添加显式的 trusted-operator 层，以支持本地或私有资源任务的代理。
- **Kaban 看板改进** (#91184)：添加宽⇔折叠切换功能。
- **任务继承** (#91191)：修复项目-看板双向绑定，确保任务继承项目属性。

---

## 7. 用户反馈摘要

### 用户痛点：

1. **Windows 平台部署问题**
   - 多位用户报告 Windows 桌面应用更新失败（#86443、#44225、#90829）。
   - `node_modules` 损坏和本地系统 Node 干扰导致的问题。
   - 桌面应用重建失败后导致软件完全不可用（快捷方式死链）。

2. **平台兼容性问题**
   - Debian 13.6 系统无法使用标准安装脚本（#87093）。
   - MacOS/iOS 用户在 SSH 连接上切换桌面配置时出现本地后端问题（#90477）。

3. **流式协议兼容性**
   - 某些 Nous Portal 模型的流式响应缺少 `[DONE]` 事件，导致严格 OpenAI 兼容客户端无法正确处理。
   - OpenAI gpt-5.6 模型出现 `prompt_cache_retention` 无效参数错误。

4. **状态管理和数据持久化**
   - `state.db` 数据库在繁忙环境中出现反复 corruption，导致数据丢失和人工恢复工作。
   - 会话持久化写入失败时无法获得具体错误信息。

### 用户满意度：

1. **高满意度**：
   - 许多用户对技能监控和错误分类改进（如 #66616、#90971）表示认可。
   - Windows 网关安装问题修复（如 #89824、#91185）受到欢迎。

2. **中度满意度**：
   - Discord 线程提INGS 处理改进、桌面应用平台政策遵守等功能改进受到正面反馈。

3. **低满意度/未解决问题**：
   - 长期存在的 Windows 桌面应用更新问题导致用户抱怨。
   - 会话状态管理问题和数据库 corruption 导致用户不便。

---

## 8. 待处理积压

### 长期未响应的重要 Issue：

1. **#66616** - `Skills index is stale or degraded` (66 条评论，P3)
   - 问题：Skills Hub 索引新鲜度监测失效。技能索引已过期 29.8 小时，需检查 GitHub 工作流配置。

2. **#87093** - `Debian installation broken` (14 条评论，P1)
   - 问题：Debian 13.6 系统无法使用标准安装脚本。需修复 uv.lock 和 npm 依赖安装流程。

3. **#89293** - `Repeated state.db corruption on busy single-host deployment` (3 条评论，P1)
   - 问题：8 天内 3 次 `state.db` 损坏，导致部分数据丢失。需调查 WAL 模式切换和锁争用问题。

4. **#90477** - `Desktop profile switch on SSH remote spawns LOCAL backend` (3 条评论，P2)
   - 问题：SSH 远程连接时桌面应用配置切换会错误使用本地后端，导致连接到错误的 SSH 主机。

5. **#90287** - `feat(steer): peer + broadcast session steering` (2 条评论，P3)
   - 问题：缺少对子agent 进行器和广播会话进行器的支持。需进行决策讨论。

### 近期关注 Issue：

1. **#90837** - `Potential session state corruption risk (WAL rollback)`
   - 讨论可能的会话状态 corruption 风险，需进一步跟进。

2. **#90795** - `Re-entrant useSyncExternalStore in @assistant-ui/tap`
   - React 16520 更新深度超限错误，影响 web UI 工作区渲染。

3. **#91021** - `Desktop app relaunch after in-app update fails to reconnect to WSL backend`
   - Windows + WSL2 环境中，桌面应用更新后重新连接到 WSL 后端失败。

### 建议关注 Issue：

- 检查 Windows 桌面应用更新和依赖修复的彻底性（#86443、#44225、#90906、#90134、#90237）。
- 评估技能索引和工作流的稳定性和新鲜度。
- 跟踪会话持久化和状态管理的稳定性和可观测性。

---

**本日报由 GitHub 数据自动生成。所有链接指向原始 Issue 或 PR。**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报（2026‑08‑21）**  

---

### 1. 今日速览  
- 过去 24 小时内共有 **3 条 Issue** 被更新（全部处于开放/活跃状态，**0 条关闭**），表明社区仍在持续反馈问题。  
- **8 条 PR** 有更新，其中 **3 条已合并/关闭**，**5 条仍待合并**，整体代码贡献活跃度中等。  
- 未有新版本发布，项目目前维持在 **v0.3.1** 基线上，主要工作集中在依赖升级、功能原型以及 Bug 调查。  

---

### 2. 版本发布  
> **今日无新版本发布。**  

---

### 3. 项目进展（已合并/关闭的重要 PR）  

| PR | 标题 | 关键进展 | 链接 |
|----|------|----------|------|
| **#1158** | feat: add anthropic‑messages protocol for native Anthropic API format (Fixes #269) | 新增 `anthropic-messages` 前缀，使仅支持 Anthropic 原生 `/v1/messages` 端点的服务能够正常使用，解决了长期存在的兼容性问题。 | [sipeed/picoclaw PR #1158](https://github.com/sipeed/picoclaw/pull/1158) |
| **#423** | WIP: feat: base multi‑agent collaboration framework & shared context | 虽仍标记为 WIP，但已合并进入主干，奠定了 **Blackboard**（线程安全共享上下文池）、Agent handoff 与 discovery 工具的基础，为后续多智能体协同特性提供框架。 | [sipeed/picoclaw PR #423](https://github.com/sipeed/picoclaw/pull/423) |
| **#3318** | fix(web): repair unparseable pnpm‑lock.yaml | 修复了 `web/frontend/pnpm-lock.yaml` 中重复键导致的 `ERR_PNPM_BROKEN_LOCKFILE`，恢复了前端依赖锁文件的可用性，保证了 CI 构建的稳定性。 | [sipeed/picoclaw PR #3318](https://github.com/sipeed/picoclaw/pull/3318) |

> **整体影响**：以上合并 PR 分别在 **API 适配**、**多智能体架构** 与 **构建可靠性** 三个维度前进，为后续功能迭代打下了更坚实的基础。

---

### 4. 社区热点（讨论最活跃的 Issue/PR）  

| 热点 | 评论数 / 反应 | 主要诉求 | 链接 |
|------|--------------|----------|------|
| **#3281** – *Web UI chat input is very laggy when history has a little bit long* | 6 评论，👍 1 | 用户在长会话中出现输入卡顿，亟需前端渲染或状态更新的性能优化。 | [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| #3331 – *Feature: support any model with /audio/transcriptions* | 1 评论 | 希望增加配置项（如 `whisper-transcription: true`）以强制使用 Whisper 路径，突破当前仅限 `*-whisper-*` 模型的限制。 | [sipeed/picoclaw Issue #3331](https://github.com/sipeed/picoclaw/issues/3331) |
| #3330 – *Feature: dynamic model override in delegate/spawn/subagent tools* | 1 评论 | 期望在运行时为 `delegate`、`spawn`、`subagent` 指定模型，而非仅依赖静态配置。 | [sipeed/picoclaw Issue #3330](https://github.com/sipeed/picoclaw/issues/3330) |

> **分析**：今日讨论集中在 **前端交互体验（#3281）** 与 **模型灵活性（#3331、#3330）** 两方面，前者因评论数最高成为社区热点，反映出用户对交互流畅度的关注度较高。

---

### 5. Bug 与定性（今日报告的问题）  

| 问题 | 严重程度 | 状态 | 是否已有修复 PR | 链接 |
|------|----------|------|----------------|------|
| Web UI 聊天输入卡顿（历史记录稍长时） | 中等（影响日常使用） | **Open** | 暂无直接 fix PR（仅有讨论） | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| （无其他崩溃或回归报告） | — | — | — | — |

> **建议**：可考虑在前端采用虚拟滚动或增量渲染策略，以降低长历史记录下的 DOM 开销；后续可跟进相关性能优化 PR。

---

### 6. 功能请求与路线图信号  

| 功能需求 | 关联 Issue/PR | 是否已有实现迹象 | 下一步可能性 |
|----------|--------------|------------------|--------------|
| 支持任意模型的音频转录端点（非仅 `*-whisper-*`） | Issue #3331 | 未有实现 PR，仅有讨论 | 中等 — 需要在 ASR 层增加配置开关，后续可依赖此 Issue 推进。 |
| 在 `delegate`/`spawn`/`subagent` 工具中动态覆盖模型 | Issue #3330 | 未有实现 PR | 中等 — 与现有模型回退链（#131）及多智能体框架（#423）有自然结合点，可在后续版本中一起考虑。 |
| 原生 Anthropic Messages API 适配 | PR #1158（已合并） | 已完成 | 高 — 已交付，未来可在此基础上增加更多 Anthropic 特性（如工具使用、流式输出）。 |
| 多智能体共享上下文框架 | PR #423（WIP 已合并） | 基础设施已入主干 | 高 — 为后续 Agent handoff、任务规划等特性提供基石，预计将在下个小版本中逐步启用。 |

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **性能痛点**：多位用户在 Issue #3281 中反馈，当会话历史超过一定长度时，Web 输入框出现明显卡顿，影响实时对话体验。建议优化前端状态管理或采用分页虚拟列表。  
- **模型灵活性需求**：Issue #3331 与 #3330 的评论均指出，现有系统对模型选择过于静态，期望能够在运行时通过配置或工具参数指定不同的 LLM/ASR 模型，以适应不同成本、延迟和精度的需求。  
- **构建工具稳定性**：虽然 #3318 已修复，但部分用户仍对前端依赖锁文件的易碎性表示担忧，建议加入 CI 检测以防止类似重复键问题再次发生。  

---

### 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 项 | 创建时间 | 未更新时间 | 关注点 | 链接 |
|----|----------|------------|--------|------|
| **#3281** – Web UI 输入卡顿 | 2026‑07‑21 | 2026‑08‑20（最后评论） | 高频交互性能问题，需性能分析与优化。 | [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| **#3331** – 支持任意音频转录模型 | 2026‑08‑13 | 2026‑08‑20 | 功能需求明确，缺少实现 PR。 | [Issue #3331](https://github.com/sipeed/picoclaw/issues/3331) |
| **#3330** – 动态模型覆盖（delegate/spawn/subagent） | 2026‑08‑13 | 2026‑08‑20 | 与多智能体框架（#423）耦合度高，可同步推进。 | [Issue #3330](https://github.com/sipeed/picoclaw/issues/3330) |
| PR #3336 – bump aws bedrockruntime | 2026‑08‑13 | 2026‑08‑20 | 依赖升级，待审核合并。 | [PR #3336](https://github.com/sipeed/picoclaw/pull/3336) |
| PR #3335 – bump aws config | 2026‑08‑13 | 2026‑08‑20 | 同上。 | [PR #3335](https://github.com/sipeed/picoclaw/pull/3335) |
| PR #3334 – bump anthropic-sdk-go | 2026‑08‑13 | 2026‑08‑20 | 已有 Anthropic 适配（#1158），此升级可进一步兼容新特性。 | [PR #3334](https://github.com/sipeed/picoclaw/pull/3334) |
| PR #3333 – bump mautrix | 2026‑08‑13 | 2026‑08‑20 | Matrix 客户端库升级，影响可能的聊天桥接功能。 | [PR #3333](https://github.com/sipeed/picoclaw/pull/3333) |
| PR #3332 – bump aws sdk v2 | 2026‑08‑13 | 2026‑08‑20 | 基础依赖升级，保持安全与特性更新。 | [PR #3332](https://github.com/sipeed/picoclaw/pull/3332) |

> **建议**：维护者可优先审查并合并上述依赖升级 PR（#3332‑#3336），以保持项目的安全性和兼容性；随后聚焦于 **#3281** 的性能优化以及 **#3331/#3330** 的功能实现，这些直接关系到用户核心体验和系统可扩展性。

---  

*报告基于截至 2026‑08‑20 的 GitHub 公开数据生成，旨在为项目维护者和社区成员提供客观、数据驱动的项目健康概览。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报 – 2026‑08‑21**  
*(数据来源：GitHub 2026‑08‑20 23:59:59 之后的统计)*  

---

### 1. 今日速览  
- **活跃度**：过去 24 h 内共 3 条 Issues（2 新开/活跃，1 已关闭）与 50 条 PR（35 待合并，15 已合并/关闭）。  
- **整体健康**：代码库保持高提交频率，PR 通过率约 30 %（15/50），说明社区贡献者在积极修复与迭代。  
- **关注点**：两大功能缺陷（WhatsApp 附件、mention‑sticky）仍未解决，且多条关键修复 PR 正在等待审阅。  

---

### 2. 版本发布  
- **无新版本发布**。  
- 维护者可关注 `main` 分支的 `CHANGELOG.md` 以获取即将合并的功能与修复细节。  

---

### 3. 项目进展  
| PR 号 | 标题 | 主要贡献 | 备注 |
|-------|------|----------|------|
| **#1311** | Feature create new session | 新增会话创建 API 与 UI | 已合并，提升了用户快速启动 Agent 的体验 |
| **#3421** | docs+setup: announce one‑click Slack agents | 在 README 中加入“一键 Slack Agent”入口 | 已合并，降低了 Slack 集成门槛 |
| **#3247** | Fix: retire malformed cron string | 处理无效 cron 语法，避免每次扫荡产生错误日志 | 仍待审阅，已提交 0 评论 |
| **#3423** | Fix(add‑slack): add missing app_mentions:read bot scope | 补全 Slack Bot 权限，解决 `app_mention` 事件缺失 | 仍待审阅 |
| **#3422** | Fix(router): mention‑sticky subscribes on a mention, not on a session… | 修正 `mention‑sticky` 订阅逻辑，防止误触发 | 仍待审阅 |
| **#3402** | Fix(codex): deliver provider‑generated files | 统一文件交付路径与权限 | 仍待审阅 |
| **#3403** | Fix(matrix): use a refresh‑safe ESM patch | 解决 Node 22 下 ESM 导入失败 | 仍待审阅 |
| **#3196** | Fix/add mount readonly | 为容器挂载添加只读标记，提升安全性 | 仍待审阅 |
| **#3270** | Feat/ncl token usage | 新增 NCL Token 使用示例 | 仍待审阅 |
| **#3189** | Feat(skill): add‑why | 新增“为什么”技能，解释单条消息处理结果 | 仍待审阅 |

> **进度概览**：已合并 PR 2 条，剩余 8 条关键修复/功能 PR 正在等待审阅，预计在下周内完成合并。  

---

### 4. 社区热点  
| 议题 | 链接 | 主要诉求 | 讨论状态 |
|------|------|----------|----------|
| **#2715** | <https://github.com/nanocoai/nanoclaw/issues/2715> | WhatsApp 附件下载路径错误，导致 Agent 无法访问媒体 | 1 条评论，仍未解决 |
| **#3369** | <https://github.com/nanocoai/nanoclaw/issues/3369> | `mention‑sticky` 在未被提及时错误触发，影响线程交互 | 0 条评论，仍未解决 |
| **#2606** | <https://github.com/nanocoai/nanoclaw/issues/2606> | `engage_mode='always'` 造成所有消息被静默丢弃 | 已关闭，已修复 |

> **洞察**：两大功能缺陷（#2715、#3369）是社区最关注的议题，建议优先推进对应 PR（#3247、#3422）并在 PR 讨论中主动邀请维护者加速审阅。  

---

### 5. Bug 与稳定性  
| 级别 | 议题/PR | 描述 | 状态 |
|------|---------|------|------|
| **高** | #2606 | `engage_mode='always'` 造成所有消息被静默丢弃 | ✅ 已关闭 |
| **中** | #2715 | WhatsApp 附件下载路径错误，Agent 无法访问媒体 | ❌ 未修复 |
| **中** | #3369 | `mention‑sticky` 在未被提及时错误触发 | ❌ 未修复 |
| **低** | #3247 | 处理无效 cron 语法 | 待审阅 |
| **低** | #3423 | Slack Bot 缺失 `app_mentions:read` 权限 | 待审阅 |
| **低** | #3422 | `mention‑sticky` 订阅逻辑错误 | 待审阅 |
| **低** | #3402 | Codex 文件交付路径不一致 | 待审阅 |
| **低** | #3403 | Matrix ESM 导入失败 | 待审阅 |
| **低** | #3196 | 容器挂载未设置只读 | 待审阅 |

> **建议**：优先解决 #2715 与 #3369，因其直接影响 Agent 的核心功能。  

---

### 6. 功能请求与路线图信号  
| 需求 | PR | 评估 | 预期版本 |
|------|----|------|----------|
| **NCL Token 使用示例** | #3270 | 已提交，功能完整 | v2.3 |
| **add‑why 技能** | #3189 | 已提交，已通过单元测试 | v2.3 |
| **add‑cursor agent provider** | #3355 | 已提交，文档齐全 | v2.3 |
| **add‑tavily tool** | #3418 | 已提交，已通过集成测试 | v2.3 |
| **add‑dashboard** | #3417 | 已提交，已修复 UI 兼容性 | v2.3 |
| **add‑ollama tool** | #3416 | 已提交，已通过安全审计 | v2.3 |
| **add‑atomic‑chat‑tool** | #3415 | 已提交，已通过配置验证 | v2.3 |
| **add‑clidash** | #3414 | 已提交，已修复刷新性能 | v2.3 |

> **路线图**：上述功能均已进入 `main` 分支的合并候选，预计在 **v2.3**（预计 2026‑09‑15）正式发布。  

---

### 7. 用户反馈摘要  
- **#2715**：用户报告 WhatsApp 附件下载失败，导致 Agent 无法读取图片/音频。  
- **#3369**：用户在 Slack 线程中发现 Agent 在未被提及时自动回复，破坏了对话流。  
- **#2606**：用户在使用 `engage_mode='always'` 时发现所有消息被静默丢弃，导致 Agent 无响应。  

> **痛点**：核心功能的可靠性与可配置性是用户最关注的。  

---

### 8. 待处理积压  
| 议题/PR | 链接 | 说明 | 建议行动 |
|---------|------|------|----------|
| **#3369** | <https://github.com/nanocoai/nanoclaw/issues/3369> | `mention‑sticky` 误触发 | 需要 PR #3422 通过审阅并合并 |
| **#2715** | <https://github.com/nanocoai/nanoclaw/issues/2715> | WhatsApp 附件路径错误 | 需要 PR #3247 通过审阅并合并 |
| **#3247** | <https://github.com/nanocoai/nanoclaw/pull/3247> | 处理无效 cron 语法 | 需要维护者加速审阅 |
| **#3423** | <https://github.com/nanocoai/nanoclaw/pull/3423> | Slack 权限缺失 | 需要审阅 |
| **#3422** | <https://github.com/nanocoai/nanoclaw/pull/3422> | mention‑sticky 订阅错误 | 需要审阅 |
| **#3402** | <https://github.com/nanocoai/nanoclaw/pull/3402> | Codex 文件交付 | 需要审阅 |
| **#3403** | <https://github.com/nanocoai/nanoclaw/pull/3403> | Matrix ESM 导入 | 需要审阅 |

> **提醒**：上述议题均已在 PR 或 Issue 中标记为 “待审阅”，建议维护者在下周内优先处理，以保持项目的持续交付节奏。  

---  

**结语**：NanoClaw 在过去 24 h 内保持了高活跃度，核心功能缺陷仍在修复中，功能扩展正稳步推进。请维护者关注上述待处理议题，确保下一版本的稳定与可用性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



根据您提供的 GitHub 数据，以下是 **LobsterAI (netease-youdao/LobsterAI)** 在 **2026-08-21** 的项目动态日报。

---

# 📊 LobsterAI 项目动态日报 (2026-08-21)

## 1. 今日速览
LobsterAI 项目在过去的 24 小时内呈现出**中等活跃、重在清债与体验优化**的开发态势。项目整体健康度稳定，核心开发力量集中在修复历史遗留的用户体验阻断性 Bug（如 Agent 切换、技能同步、构建失败等），并成功合并了社区期盼已久的文件预览与分屏多任务（CoWork）特性。然而，项目仍存在部分长期未维护的“陈旧项”（Stale Issues/PRs），需关注其维护周期。

## 2. 版本发布
*   **今日无新版本发布（无新 Releases 记录）。** 本部分省略。

## 3. 项目进展（合并/关闭的重要 PR）
今日共有 **6 条 PR 被合并或关闭**，主要聚焦于核心交互逻辑的修复、开发构建链的兼容性，以及 CoWork 模式下文件交互的重大升级：

*   **重大特性落地：AI 产物预览与文件卡片** (`#1553` [CLOSED])
    *   **内容**：实现了 Write 工具的内联文件卡片（FileCard）及可拖拽的右侧分屏预览面板（FilePreviewPanel），支持 Markdown 渲染、HTML 沙箱、SVG 及代码语法高亮。
    *   **意义**：直接解决了用户在生成文档时无法在应用内直接预览的痛点，标志着 CoWork 协作模式交互体验的重大飞跃。同时关闭了关联 Issue `#1552`。
    *   **链接**：[netease-youdao/LobsterAI PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553)
*   **核心交互与引擎稳定性修复**：
    *   **Agent 技能即时同步** (`#1545` [CLOSED])：修复了修改 Agent 技能后，当前对话界面技能徽章不立即刷新的 Bug，无需切屏即可生效。修复了 Issue `#1502`。([PR #1545](https://github.com/netease-youdao/LobsterAI/pull/1545))
    *   **引擎启动超时 UI 逃逸** (`#1546` [CLOSED])：为全屏启动遮罩增加了“取消启动”和“查看日志”按钮，避免因网络或缓存问题导致用户被卡在 5 分钟硬超时中。([PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546))
    *   **Agent 编辑后导航恢复** (`#1560` [CLOSED])：修复了编辑 Agent 后，点击已选中的 Agent 无法正常切回聊天界面的导航死锁问题。([PR #1560](https://github.com/netease-youdao/LobsterAI/pull/1560))
    *   **macOS 打包构建修复** (`#1555` [CLOSED])：解决了 `dist:mac:x64` 打包失败的问题，对 macOS 的 `sha256sum` 命令做了 `shasum` 兼容。([PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555))
*   **UI/UX 增强**：
    *   **设置面板搜索功能** (`#1557` [CLOSED])：在设置侧边栏引入搜索框，支持中英文分词 AND 匹配，并支持无匹配时的自动 Tab 切换，极大提升了设置页的易用性。([PR #1557](https://github.com/netease-youdao/LobsterAI/pull/1557))

**进展总结**：项目整体向前迈进了一大步，重点填补了多任务预览的生态空白，并系统性地清理了阻碍日常开发和终端用户操作的底层逻辑缺陷。

## 4. 社区热点
今日社区交互主要集中在文档完整性 bug 和文件预览需求上：
*   **最高讨论 Issue：IM 机器人配置指南 404** (`#1556` [OPEN]) — 拥有 2 条评论。
    *   **链接**：[netease-youdao/LobsterAI Issue #1556](https://github.com/netease-youdao/LobsterAI/issues/1556)
    *   **分析**：社区用户反馈 IM 配置指南链接失效（404），这直接阻碍了用户将 LobsterAI 接入飞书、微信等 IM 平台。文档的时效性对开源项目至关重要，是当前社区支持的热点痛点。
*   **核心功能诉求：Markdown 预览与文件卡片** (`#1552` [OPEN] - 已由 `#1553` 关闭)。
    *   **链接**：[netease-youdao/LobsterAI Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552)
    *   **分析**：用户强烈呼吁在应用内直接预览 AI 生成的 Markdown 和 HTML，避免“大段贴图”式聊天。该诉求已通过 PR `#1553` 得到正式响应，社区满意度预计较高。

## 5. Bug 与稳定性
按严重程度排列今日报告/更新的 Bug（部分已有修复 PR，部分仍待处理）：

| 严重程度 | Bug 描述 | 关联 Issue/PR | 当前状态 |
| :--- | :--- | :--- | :

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 – 2026-08-21**

---

## 1️⃣ 今日速览
Moltis 今天整体活动适中：**1 个安全相关 Issues 获得修复**，**4 个 PR 成功合并**，**4 个 PR 仍处于打开状态**，并**发布了一个新版本 (20260820.01)**。仓库在修复严重漏洞（CVE‑306）的同时，继续推进 Web、WhatsApp、网关和插件层面的稳定改进。活跃度指标显示，协作节奏稳定，安全修复工作正在按计划推进。

---

## 2️⃣ 版本发布

**版本：`20260820.01`**（发布于 2026‑08‑20）

* 亮点
  * 修复了未经验证的沙箱镜像请求处理问题（Web）。
  * 修复了 WhatsApp 消息中文本中的 Markdown 渲染问题。
  * 更新了网关中用于 Snyk Agent Scan 的依赖项（固定到 0.5.17），以防止供应链攻击。
  * 修复了 Windows 插件执行问题（使用 `cmd.exe /C` 替代 `sh -c`）。
  * **安全修补**：对 `/api/auth/vault/unlock` 和 `/api/auth/vault/recovery` 端点添加了身份验证（修复 CVE‑306）。

* 破坏性变更/迁移注意事项
  * 没有通告向后不兼容的 API 变更；所有更改均为错误修复或安全强化。

* 获取方式
  * `git checkout tags/20260820.01`
  * 发布页面：https://github.com/moltis-org/moltis/releases/tag/20260820.01

---

## 3️⃣ 项目进展

| PR | 状态 | 子系统 | 主要推进点 |
|----|------|--------|------------|
| **#1216** | ✅ **已合并** | `httpd` | 对 `/api/auth/vault/unlock` 和 `/api/auth/vault/recovery` 端点强制执行身份验证 – 修复 CVE‑306。 |
| **#1218** | ✅ **已合并** | `whatsapp` | 停止硬编码推送名称“Moltis”，使用动态客户端 ID。 |
| **#1219** | ✅ **已合并** | `channels` | 使“untrusted‑turn”工具的允许上限可配置，以便更灵活的策略分层。 |
| **#1217** | ✅ **已合并** | `whatsapp` | 将对机器人的回复识别为直接提及，即使在没有 `@` 提及的情况下。 |
| **#1222** | 🔄 **打开** | `web` | 对沙箱镜像引用和包名进行预验证，并限制操作员管理员的镜像构建权限。 |
| **#1221** | 🔄 **打开** | `gateway` | 使用 `uvx` 固定 Snyk Agent Scan 为 0.5.17，并移除独立的 `mcp‑scan` 后备选项。 |
| **#1220** | 🔄 **打开** | `whatsapp` | 转换会话历史记录和 Web UI 中存储的 Markdown，将其转换为 WhatsApp 原生标记进行发送。 |
| **#468** | 🔄 **打开** | `plugins` | 在 Windows 上使用 `cmd.exe /C` 替代 `sh -c` 执行 shell 钩子。 |

**整体进展：** 4 个合并的 PR 巩固了安全性、客户端显示和渠道策略，显示了项目对生产问题（尤其是 WhatsApp 客户端 ID 显示和安全漏洞修复）的快速响应。

---

## 4️⃣ 社区热点

* **Issue #1177 – “Vault Unlock/Recovery Endpoints Missing Authentication (CWE‑306)”** ([链接](https://github.com/moltis-org/moltis/issues/1177))
  * *讨论热度：* 高 – 这是一个重要的安全问题，已被标记为“Bug”并指出了 CVE‑306 风险。社区普遍认为这个问题需要尽快修复。

* **PR #1216 – “fix(httpd): require authentication for vault unlock and recovery”** ([链接](https://github.com/moltis-org/moltis/pull/1216))
  * *社区反响：* 直接解决了 Issue #1177，得到了项目维护者的赞同。

* **PR #1220 – “fix(whatsapp): render Markdown in outbound messages”** ([链接](https://github.com/moltis-org/moltis/pull/1220))
  * *用户关注点：* 高 – 这直接影响到了外部用户对消息的阅读体验（Markdown 格式消息格式化问题）。

这些讨论表明了两个优先事项：安全性和用户界面质量。

---

## 5️⃣ Bug 与稳定性

| 严重程度 | Bug 描述 | PR 状态 |
|----------|---------|----------|
| 🔴 **高** | **CVE‑306** – `/api/auth/vault/unlock` 和 `/api/auth/vault/recovery` 端点缺少身份验证，导致任何未经验证的远程攻击者都能暴力破解钱包恢复代码。 | ✅ **已修复** (PR #1216 合并) |
| 🟡 **中** | WhatsApp 客户端推送名称硬编码为“Moltis”，导致所有未保存联系人看到机器人名称为“Ada”等不一致情况。 | ✅ **已修复** (PR #1218 合并) |
| 🟢 **低** | 在 Windows 上执行 shell 钩子时出现 `sh -c` 命令未找到的问题，导致插件功能在 Windows 主机上不可用。 | 🔄 **打开** (PR #468) |

当前没有新的崩溃报告；所有已报告的缺陷都已分配给对应优先级。

---

## 6️⃣ 功能请求与路线图信号

* **沙盒镜像验证 (PR #1222)**
  * *路线图信号：* 虽然是修复，但它引入了对输入资源的更严格验证，可能预示着在未来版本中加强沙箱安全。

* **WhatsApp 消息中的 Markdown 渲染 (PR #1220)**
  * *用户驱动型改进：* 这直接提升了外部用户的消息格式化体验，反映了团队关注用户界面质量。

由于本日没有新的原始功能请求，关注点主要集中在质量和安全修复上。

---

## 7️⃣ 用户反馈摘要

* **安全性 – Issue #1177** 的社区反应强烈，表明了安全是首要考虑因素，用户希望钱包解锁/恢复端点得到充分保护。
* **客户端显示 – Issue #1218** 突显了外部用户（非联系人）对机器人名称的不一致感知，用户对统一、个性化的客户端标识提出了明确意见。
* **渠道策略 – Issue #1219** 反映了运营团队对工具允许上限可配置性的需求，以便更好地控制“untrusted‑turn”功能。

总体而言，用户反馈集中在三个主题上：**安全保障、客户端显示和配置灵活性**，所有这些都在今天的合并 PR 中得到了解决。

---

## 8️⃣ 待处理积压

| PR / Issue | 待办事项 | 备注 |
|------------|------|------|
| **#1222** (`fix(web): validate sandbox image requests`) | 等待最终批准和合并 | 目前状态：✅ 已通过格式检查；Cargo 测试进行中。 |
| **#1221** (`fix(gateway): pin Snyk Agent Scan`) | 等待剩余的 `cargo test` 通过 | 存在一个失败的单元测试；需要代码更新。 |
| **#1220** (`fix(whatsapp): render Markdown in outbound messages`) | 等待最终批准 | 现已通过格式检查，仍需要全面集成测试。 |
| **#468** (`fix(plugins): use cmd.exe on Windows for shell hooks`) | 已准备就绪，但可能需要批准以合并更早的更改 | Windows CI 通过，但可能需要协调。 |
| **Issue #1177** (已关闭) | ✅ 已解决 | 其修复 PR (#1216) 已被合并。 |

**建议：** 维护者应优先处理 PR #1222 和 #1221，它们是 Web 和网关层面的最新安全强化，且目前仅存在轻微的测试阻塞。Windows 插件修复 (#468) 应纳入下一次 Windows 兼容性迭代中。

---

### 总结
Moltis 今天在安全性和可用性方面取得了稳步进展。一个关键的 CVE 修复已得到应用，WhatsApp 和渠道的 UI/UX 缺陷已得到修复，Web 层面的沙箱验证和网关层面的依赖项固定正在进入收尾阶段。持续的待处理事项主要集中在三个开放的 PR 上，处理这些问题将进一步提升项目的安全态势和跨平台稳定性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



---

**CoPaw 项目 2026-08-21 日常工作报告**  

---

### **1. 今日速览**  
今日项目活跃度显著：28条Issue（部分已关闭）与50条PR提交，新版本v2.1.1-beta.1正式发布，暗示迭代进度良好。PR关闭率达60%（28/50合并），Issue活跃数量维持在均衡水平，显示团队对优化与问题修复均有重点布局。项目健康信号中，关键复杂功能（如多模型路由、权限管理）持续迭代测试。  

---

### **2. 版本发布**  
**新版本 v2.1.1-beta.1（Beta）**  
- **核心更新**：  
  1. 提升控制台编辑器页签导航体验（PR #6983）。  
  2. 降低Env_logger日志级别以减少启动日志噪音（PR #6988）。  
  3. 更新版本备注文档风格与一致性。  
- **破坏性变更**：无。  
- **迁移注意事项**：无需用户干预，但建议用户验证新版本下一切组件（如权限管理、内存功能）为预期状态。  
- **GitHub 链接**：[v2.1.1-beta.1 发布记录](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.1)  

---

### **3. 项目进展**  
今日关闭/合并的关键PR推动了多个里程碑：  
- **安全优化**：  
  - PR #7119：确保`envs.json`密钥文件仅所有者可读（防止敏感信息泄露）。  
- **功能完善**：  
  - PR #7175：恢复控制台中免费模型列表异常裁剪问题（提升用户体验）。  
  - PR #7161：为Assistant响应卡片集成工件展示（增强可视化交互）。  
- **技术迭代**：  
  - 多次重构内存系统（如PR #7133、#7163），优化服务器资源利用率。  
- **项目提前期**：通过优化任务并行处理（PR #7174），降低速度敏感型会话延迟。  
- **GitHub 链接总览**：[PR合并记录查询](https://github.com/agentscope-ai/QwenPaw/pulls)  

---

### **4. 社区热点**  
今日活跃度最高的Issue与PR：  
- **Issue #6921（Bug：对话流程自动停止）**：评论10，用户抱怨多步骤任务中模型主动终止且无明确提示（需用户主动“继续”）。  
  - **痛点**：交互体验急需改进，可能关联到Reasoning策略或模型输出格式调整。  
- **Issue #7013（Feature：工具面板群聚）**：评论3，用户提出统一工具面板、Web服务预览与终端集成功能，显示社区期待更丰富的交互式Workspace功能。  
- **PR #7061（视频传递修复）**：关联评论讨论控制台视频传递逻辑优化方案。  
- **GitHub 链接**：  
  - Issue #6921：[视频自动停止Bug](https://github.com/agentscope-ai/QwenPaw/issues/6921)  
  - PR #7013：[工具面板提案](https://github.com/agentscope-ai/QwenPaw/pull/7013)  

---

### **5. Bug 与稳定性**  
按严重程度排列：  
1. **网络中断恢复失败（Issue #6932，评论3）**：网络恢复后仍报时效错误，需手动重启。  
   - **影响**：生产环境可能因网络波动导致服务中断。  
   - **处置**：无关联PR，需立即优化网络连接重连逻辑。  
2. **流式输出卡顿（Issue #7162，评论2）**：`httpx.ReadError`导致`UNKNOWN_AGENT_ERROR`。  
   - **PR关联**：无（目前无对应Pull Request）。  
3. **内存爆胀（Issue #7168，评论1）**：`recal_history`操作导致`history.db`抽取7.6G数据。  
   - **PR关联**：无，需紧急压力测试内存管理。  
- **其他Bug**：多条关于媒体上传、嵌入式超时的问题仍待关注。  

---

### **6. 功能请求与路线图信号**  
用户提交的多项需求反映下一版本可能覆盖方向：  
- **多模型路由共识**：Issue #6436（自动路由）有3条评论，强烈呼吁支持智能路由至适配模型。  
- **功能卡组扩展**：PR #7080（PowerContext内存）提案，若实现将提升长程记忆能力。  
- **Qwen_Code引擎支持**：PR #7181（本地代理引擎）符合需求，可能纳入beta.2补充发布。  
- **路线图信号**：问န်း့群自动发布（Issue #7159）与钉钉共享上下文（Issue #7158）反映用户对频道集成的迫切需求。  

---

### **7. 用户反馈摘要**  
真实使用中暴露的核心痛点：  
- **对话不连贯**：多报告模型自动终止且无提示（Issue #6921），需强化交互反馈机制。  
- **多任务状态混乱**：用户抱怨输出遗留在`media`目录（Issue #6643），需更优的对象命名与路径管理。  
- **界面冻结与性能**：如10分钟无响应（Issue #7102），主要集中在驱动初始化或模型推理瓶颈。  
- **积极反馈**：过度关注功能封装质量（如多模型评估机制），符合项目目标。  

---

### **8. 待处理积压**  
需追跟的高优先级Item：  
- **Issue #6436（模型路由）**：5条评论已累积，但仍无解决跟进，需评估技术可行性。  
- **PR #6399（Reranker UI）**：长期处于Review，但3名评论者等待后续更新。  
- **PR #7180（Beta发布验证）**：8小时后需完成平台关键测试，当日需立即关注艾灶环境表现。  

---

**项目状态评估**：今日进展正面，但关键Bug与用户反馈仍需高效响应。结合路线图信号，建议后续迭代重点放在“跨平台协同》《交互解耦 ">


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-21

---

## 1. 今日速览

ZeroClaw 在过去 24 小时内保持了较高的开发活跃度：共处理了 50 条 Issue 更新和 50 条 PR 更新。尽管未发布新版本，但多个关键特性和 Bug 修复正在积极推进，尤其在 WASM 插件系统、安全策略增强和运行时稳定性方面表现突出。当前共有 48 个 PR 处于待合并状态，显示出社区的持续贡献热情。项目整体处于快速迭代阶段，重点聚焦于架构升级、权限控制和用户体验优化。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

以下是今日已合并或关闭的重要 PR，对项目推动作用显著：

- **[PR #9415](https://github.com/zeroclaw-labs/zeroclaw/pull/9415)**  
  已关闭 — 记录执行树预算所有权的架构文档（ADR-014），为资源管理提供清晰边界定义。

- **[PR #10198](https://github.com/zeroclaw-labs/zeroclaw/pull/10198)**  
  待合并 — 使 shell 方言断言平台感知，提升跨平台测试兼容性，修复潜在 Windows 测试失败问题。

- **[PR #10084](https://github.com/zeroclaw-labs/zeroclaw/pull/10084)**  
  待合并 — 更新 WhatsApp Web 依赖并支持通过设备配对完成链接，解决实际使用中遇到的登录障碍。

这些 PR 推进了项目在架构文档、跨平台支持和第三方集成方面的建设，增强了项目的可维护性与用户体验。

---

## 4. 社区热点

以下 Issue 和 PR 是今日社区讨论最活跃的内容：

### 🔥 [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)  
**标题：** RFC: 添加高风险 shell 命令的执行确认层级 + Claude Code 风格命令模式策略  
**评论数：** 23 条  
**摘要：** 提议为高风险命令引入三层确认机制（allow/ask/deny），提升安全性。此为安全增强的重要提案，已获得维护者认可并进入实施阶段。

### 💬 [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)  
**标题：** RFC: 运行时拥有的会话管理与传输适配器  
**评论数：** 22 条  
**摘要：** 探讨运行时如何管理会话生命周期与多通道集成，关系到未来网关与频道的解耦设计，是架构层面的重要变更。

### 🛠️ [Issue #10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118)  
**标题：** [Tracker]: Rust 反懒惰政策债务清理  
**评论数：** 16 条  
**摘要：** 跟踪清理 Rust 代码中违反项目规范的“懒惰”写法，旨在提升代码质量与一致性。

这些讨论反映了项目在安全性、架构设计和代码质量方面的持续关注，社区参与度高，代表了项目未来的发展方向。

---

## 5. Bug 与稳定性

以下是今日报告的重要 Bug，按严重程度排序：

### ⚠️ [Issue #10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) *(已关闭)*  
**标题：** PR 审核员在 PR 合并后发布进行中结果  
**等级：** S2 - 行为降级  
**详情：** AI 审核员可能在 PR 合并后仍发布评审结果，引发信息延迟问题。  
**状态：** 已关闭，暂无对应的修复 PR。

### ❗ [Issue #10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)  
**标题：** 交互式 agent session 忽略 max_context_tokens 设置  
**等级：** S2 - 行为降级  
**详情：** 默认限制上下文为 32k tokens，忽略用户配置的 131072 上限。  
**状态：** 进行中，等待进一步处理。

### 🐞 [Issue #9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) *(已关闭)*  
**标题：** OpenAI 兼容模型因 reasoning effort 失败  
**等级：** S1 - 阻塞工作流  
**详情：** 当发送带 reasoning effort 的 tool 调用时，OpenAI 接口返回错误。  
**状态：** 已关闭，可能已修复。

项目面临一些影响用户体验的稳定性问题，但维护团队正积极响应并推进相关修复。

---

## 6. 功能请求与路线图信号

以下为用户提出的新功能请求，值得关注：

### 🌟 [Issue #10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025)  
**标题：** RFC: zeroclaw swarm — 临时 agent 群组与 TUI 界面  
**类型：** Enhancement / Architecture  
**潜力：** 高 — 支持动态构建 agent 群组，是构建多 Agent 协作场景的基础。

### 🧩 [Issue #8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)  
**标题：** 将可选 channel/tool 从编译特性转为运行时插件  
**类型：** Feature Tracker  
**潜力：** 高 — 推动系统模块化改造，有助于减小默认二进制体积并提升扩展性。

### 📦 [Issue #10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069)  
**标题：** RFC: Agent 端口能力  
**类型：** Enhancement  
**潜力：** 中 — 实现 Agent 的导出与分享功能，有助于生态共享与部署便利性。

这些请求多与系统架构升级、多 Agent 协同和插件机制相关，有助于提升项目的灵活性和扩展能力，有较大可能纳入近期版本规划中。

---

## 7. 用户反馈摘要

从 Issues 评论中可以梳理出以下用户真实痛点：

- **上下文管理瓶颈**：用户希望更大上下文窗口生效，但目前被默认限制影响使用体验。
- **插件权限粗糙**：对插件系统的权限细化要求强烈，希望实现更精细的权限控制。
- **跨平台兼容性差**：在 Windows 上的兼容性问题频发，包括安装入口异常和测试失败等。
- **文档滞后**：部分文档未能及时更新，导致用户在配置与使用过程中产生困惑。

项目维护者应优先关注插件权限模型优化、上下文限制问题解决以及文档补全工作。

---

## 8. 待处理积压

以下为长期未响应或仍处于活跃讨论阶段的重要 Issue/PR：

- **[Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** — 粒度沙箱策略（文件系统与网络限制）RFC，仍在讨论阶段。
- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — 维护者决策队列跟踪器，许多设计类议题仍排队等待处理。
- **[PR #9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637)** — React Router RSC 异常临时修复 PR，标记为 `do-not-merge`，存在争议。

建议维护者尽快处理上述积压事项，以避免团队分散注意力或陷入重复讨论。

---

> 📊 数据来源：GitHub API / 项目主页 [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
> 📅 报告时间：2026-08-21

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*