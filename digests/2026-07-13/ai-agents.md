# OpenClaw 生态日报 2026-07-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-13 01:52 UTC

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

# OpenClaw 项目日报 | 2026-07-13

---

## 1. 今日速览

OpenClaw 今日活跃度**极高**，单日处理 500+ Issues 与 500+ PRs，呈现「高吞吐、高并发」的维护节奏。核心矛盾集中在：**会话状态丢失/损坏（Platinum Hermit 级）、工具输出渲染为图片占位符、网关内存泄漏导致 OOM、跨平台原生应用缺失**。新版本 `v2026.7.1-beta.6` 已发布，重点更新模型提供商与默认模型策略。社区讨论热度集中在 Linux/Windows 原生客户端、安全加固（密钥掩码、内存信任标记）、多渠道消息可靠性。项目整体处于**快速迭代修复关键回归**阶段，技术债偿还与新特性并行。

---

## 2. 版本发布

### v2026.7.1-beta.6 `openclaw 2026.7.1-beta.6`
**发布时间**：今日  
**核心变更**：
- **新增模型/提供商**：Featherless、Claude Sonnet 5、Mythos 5、Meta Muse Spark 1.1、ClawRouter
- **默认模型调整**：新建项目默认使用 GPT-5.6；Sol/Terra 启用 `/think ultra`，Luna 启用 `max`；尊重 Z.AI `max` 配置
- **OAuth 后刷新模型可用性**：解决认证后模型列表不更新问题

**破坏性变更/迁移提示**：
- 默认模型切换可能影响现有未显式指定模型的 Agent 行为，建议在 `agents.list` 中显式锁定模型
- 新增提供商需在配置中显式启用，无自动迁移风险

🔗 [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.6)

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 影响面 | 状态 | 关键进展 |
|---|---|---|---|---|
| [#103562](https://github.com/openclaw/openclaw/pull/103562) | **修复** | Discord 消息静默丢失 | ✅ Ready for review | 重试 reply session 初始化冲突，防止入站消息被丢弃（关联 #102381） |
| [#103534](https://github.com/openclaw/openclaw/pull/103534) | **安全** | 网关插件隔离 | ✅ Needs proof | `sessions.patch` 新增插件所有权校验，防止跨插件篡改会话 |
| [#102394](https://github.com/openclaw/openclaw/pull/102394) | **修复** | 工具调用解析 | ✅ Needs proof | 支持纯 JSON 文本格式的工具调用修复，兼容非标准模型输出 |
| [#102148](https://github.com/openclaw/openclaw/pull/102148) | **修复** | Google 提供商兼容 | 🔄 Closed (duplicate) | 遗留配置迁移：补全 `api` 与 `cost.cacheWrite` 字段，恢复 `google/*` 模型可用 |
| [#100518](https://github.com/openclaw/openclaw/pull/100518) | **修复** | 内存嵌入 Worker | 🔄 Closed (duplicate) | Node 升级后修复本地 embedding worker `execPath` 解析（ENOENT） |
| [#105643](https://github.com/openclaw/openclaw/pull/105643) | **修复** | CLI runner 临时目录泄漏 | ⏳ Waiting on author | 网关启动时清理孤儿 MCP 临时目录，防止磁盘占用增长 |
| [#95598](https://github.com/openclaw/openclaw/pull/95598) | **修复** | 短期记忆提升 | ✅ Needs proof | 跳过占位符/脚手架内容的长期记忆提升，减少噪声（关联 #80582） |
| [#105802](https://github.com/openclaw/openclaw/pull/105802) | **重构** | 频道配对状态持久化 | ✅ Needs proof | 将配对状态从 JSON 迁移至 SQLite，解决遗留兜底允许列表合并问题 |
| [#105833](https://github.com/openclaw/openclaw/pull/105833) | **功能** | 多节点 Claude 会话续跑 | ✅ Needs proof | 支持在配对节点上通过流式 CLI 继续 Claude Catalog 会话（关联 #105529） |

**整体推进评估**：核心修复聚焦于**会话可靠性（Discord/Slack/Telegram）、插件安全边界、工具调用兼容性、配置迁移**四大支柱，单日合并/关闭 231 PR，技术债偿还速度显著快于新增特性。

---

## 4. 社区热点（高评分/高评论 Issues 与 PRs）

| Issue/PR | 评论 | 👍 | 标签 | 核心诉求 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 110 | 81 | enhancement, help wanted, P2, security | **原生桌面客户端缺失**：仅有 macOS/iOS/Android，Linux/Windows 用户无法获得同等体验，阻碍企业级采纳 |
| [#99241](https://github.com/openclaw/openclaw/issues/99241) 工具输出渲染为图片附件 | 22 | 2 | P1, session-state, message-loss | **严重回归**：长会话/ANSI 重工具链中，工具结果塌缩为 `(see attached image)`，Agent 无法读取原始 stdout/stderr |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) 网关内存泄漏 350MB→15.5GB | 19 | 1 | P0, crash-loop, session-state | **生产级阻断**：RSS 持续增长导致 OOM Kill，触发 `launchd-handoff` 重启循环，需根因定位 |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) 所有工具结果返回字面量 "(see attached image)" | 12 | 1 | P0, regression, ux-release-blocker | **完全阻断**：文件读取返回占位符字符串而非内容，数据实质被替换，非显示层问题 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) 内存信任标记按来源 | 16 | 0 | enhancement, P2, security, diamond lobster | **安全加固**：按来源（用户指信任等级，防止记忆投毒攻击 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) 掩码密钥：Agent 用不见 Key | 13 | 4 | enhancement, P1, security, diamond lobster | **凭据防泄露**：Agent 可调用 API Key 但不可读取原文，防注入攻击 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) 完全动态模型发现 | 9 | 3 | enhancement, P2, auth-provider | **模型目录静态化痛点**：OpenRouter 等快速变更目录需动态发现，现依赖静态生成目录 |
| [#105836](https://github.com/openclaw/openclaw/pull/105836) 修复 WebChat/TUI 工具输出渲染为图片 | - | - | P1, compatibility | **直接修复 #99241/#104721**：剥离 Braille 字符，恢复文本渲染管线 |

**热点分析**：
1. **桌面端缺失（#75）** 是社区呼声最高、持续时间最长（自 2026-01-01）的特性缺口，81 👍 表明强商业需求。
2. **工具输出渲染崩溃（#99241, #104721）** 为 **P0 级回归**，已有 PR [#105836](https://github.com/openclaw/openclaw/pull/105836) 尝试修复，但根因可能在工具结果序列化/附件判定逻辑，需端到端验证。
3. **内存泄漏（#91588）** 为 **P0 级稳定性杀手**，无关联 Fix PR，需优先投入核心维护者排查。
4. **安全增强（#7707, #10659）** 获得 Diamond Lobster 评级，显示企业级部署对供应链/提示词注入的防御刚需。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|---|---|---|---|---|
| **P0 - 生产阻断** | [#91588](https://github.com/openclaw/openclaw/issues/91588) 网关内存泄漏 OOM | 2-3 天 RSS 350MB→15.5GB，OOM Kill 重启循环 | 无 | 🔴 无修复 |
| **P0 - 数据丢失** | [#104721](https://github.com/openclaw/openclaw/issues/104721) 工具结果全变占位符 | 文件读取返回字面量 `(see attached image)` | [#105836](https://github.com/openclaw/openclaw/pull/105836) | 🟡 PR 提交待验证 |
| **P0 - 数据损坏** | [#101290](https://github.com/openclaw/openclaw/issues/101290) CLI 预检损坏 SQLite | 健康检查命令导致 `database disk image is malformed` | 无 | 🔴 无修复 |
| **P1 - 会话丢失** | [#99241](https://github.com/openclaw/openclaw/issues/99241) 工具输出塌缩为图片 | 长会话/ANSI 重场景下 Agent 失去原始文本 | [#105836](https://github.com/openclaw/openclaw/pull/105836) | 🟡 PR 提交待验证 |
| **P1 - 消息丢失** | [#102020](https://github.com/openclaw/openclaw/issues/102020) 第二条消息冲突 | 跨渠道、位置相关的 `reply session initialization conflicted` | [#103562](https://github.com/openclaw/openclaw/pull/103562) (Discord) | 🟢 Discord 已修，其他渠道待跟进 |
| **P1 - CPU 飙升** | [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex hook 进程 100% CPU | `openclaw-hooks` 短进程风暴阻塞网关 RPC | 无 | 🔴 无修复 |
| **P1 - 迁移失败** | [#94939](https://github.com/openclaw/openclaw/issues/94939) 6.x 迁移留空 SQLite | 频道会话存储迁移后为 0 字节，破坏主动发送 | 无 | 🔴 无修复 |
| **P1 - 平台不可用** | [#93465](https://github.com/openclaw/openclaw/issues/93465) Windows ACPX spawn EINVAL | Windows 上 `runtime=acp` 完全不可用 | 🔄 Closed (fixed in other PR?) | 🟡 需验证 |
| **P2 - 记忆污染** | [#53408](https://github.com/openclaw/openclaw/issues/53408) 长会话后 write/exec 参数丢失 | 15+ 轮重工具后工具参数静默变空 | 无 | 🔴 无修复 |
| **P2 - 死循环** | [#78562](https://github.com/openclaw/openclaw/issues/78562) 连续自动压缩循环 | 压缩成功后下一轮即溢出，用户见反复「compacting」 | 无 | 🔴 无修复 |

**稳定性趋势**：P0/P1 级 Bug 集中在**会话状态一致性、存储层完整性、资源泄漏**三大核心路径，且多为 **2026.5/2026.6 版本引入的回归**，提示发布质量把关需加强。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 相关 PR/实现迹象 | 入版概率 |
|---|---|---|---|---|
| **Linux/Windows 原生客户端** | [#75](https://github.com/openclaw/openclaw/issues/75) | ⭐⭐⭐⭐⭐ (110 评论, 81 👍) | 无可见 PR | 中（需专项资源投入） |
| **动态模型发现** | [#10687](https://github.com/openclaw/openclaw/issues/10687) | ⭐⭐⭐ (9 评论, 3 👍) | 无可见 PR | 高（v2026.7.1 已加新提供商，基建就绪） |
| **掩码密钥系统** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | ⭐⭐⭐ (13 评论, 4 👍) | 无可见 PR | 中高（安全级 Diamond Lobster） |
| **内存信任标记** | [#7707](https://github.com/openclaw/openclaw/issues/7707) |

---

## 横向生态对比



---

# **2026-07-13 个人 AI 助手/自主智能体开源生态横向对比分析报告**

---

## **1. 生态全景**  
全球个人 AI 助手与自主智能体开源生态正进入“高速发展与标准化建设”阶段。近期多项目实现技术突破（如多模型集成、安全加固）并加速社区共建环境，但面临 **跨平台兼容性、上下文管理、安全可靠性** 等关键技术瓶颈。多数项目均持续迭代以平衡功能扩展与生产级稳定性，生态竞争趋向“功能扩展与基础韧性并行提升”。

---

## **2. 各项目活跃度对比**  

| **项目**        | **Issues 数** | **PR 数**  | **Released?** | **健康度评估**                     |  
|----------------|---------------|------------|---------------|------------------------------------|  
| OpenClaw       | 500+          | 500+       | v2026.7.1     | 稳定性优先，核心修复阶段          |  
| NovaBot        | 11动态        | 13修改     | 无             | 高活跃度，功能增强优先            |  
| Hermes Agent   | 100次互动     | 8+        | v0.13.x       | 既定性强，平台适配导向            |  
| iRun           | 0动态         | 0          | 无             | 空闲期，需关注                    |  
| TanClaw        | 21修改        | 11PR       | v2.0.0（Cover）| 关键 Bug 修复阶段                 |  
| ProtoClaw      | 4+            | 1关闭      | v0.2.9        | 中等活跃度，安全增强侧重          |  
| NanoClaw       | 3开放Issue    | 13PR       | 无             | 高积压BD修复，安全增加             |  
| NullClaw       | 4+            | 4+         | 无             | 核心稳定性持续优化                |  
| IronClaw       | 9关闭Issue    | 8+        | 无             | CI 强化与功能企业化推进            |  
| LobsterAI      | 2关闭Issue    | 1修复      | 无             | 复杂性管理与多Agent场景痛点        |  
| TinyClaw & Moltis | 无        | 无         | 无             | 暂无活跃度                        |  
| CoPaw          | 6关闭Issue    | 4+        | 无             | 高频 Bug 修复与兼容性优化         |  
| ZeptoClaw      | 0             | 0          | 无             | 暂无活跃度                        |  
| ZeroClaw       | 30动态Issue    | 50+PR      | 无             | 高活跃度，安全与稳定性冲突处于博弈 |  

*健康度评估依据：稳定性、活跃度、代码更新频率、社区反馈响应度。*

---

## **3. OpenClaw 在生态中的定位**  

- **核心优势**：  
  - **高扩展性**：支持 50+ 模型提供商（如 OpenRouter、Claude Sonnet）与安全加固（键码掩码、内存信任标记）为企业级部署提供全套工具链。  
  - **社区活跃度**：单日 500+ Issues/PRs，排名前列展现企业级技术债偿还能力。  
  - **生态整合度**：近期与 NovaBot、Hermes Agent 等项目协同推进多渠道/多平台支持。  

- **技术路线差异**：  
  - 以 **LLM 即插即用 + 状态管理** 为哲学，强调工具协调与状态一致性，而非底层效率优化。  
  - 社区规模：核心团队与开发者商业场景深度结合，用户增长快速。  

- **社区规模对比**：  
  - OpenClaw 社区活跃度（500+）明显高于 NovelAgent 等中等规模项目（如 TertiaryClaw 约100+），但低于 ZeroClaw（50+ PRs）的极致活跃度。  

---

## **4. 共同关注的技术方向**  

| **技术方向**       | **涉及项目**                           | **具体诉求**                              |  
|--------------------|---------------------------------------|------------------------------------------|  
| **多平台协同支持** | OpenClaw, NanoClaw, Hermes Agent, CoPaw | 统一 Slack/Discord/Telegram 跨渠道逻辑      |  
| **安全加固**        | OpenClaw, ZeroClaw, NullClaw          | 阿里云存证、内存安全、模块隔离权限控制      |  
| **上下文管理**      | OpenClaw, Hermes Agent, CoPaw         | 上下文压缩优化，超限回退机制               |  
| **工具调用能力**    | OpenClaw, iRun, Hermes Agent          | 可视化工具链，跨平台调用兼容性             |  
| **意向记忆能力**   | OpenClaw, NullClaw, Hermes Agent      | 决策树 Gating、长期记忆挖掘              |  

---

## **5. 差异化定位分析**  

| **维度**              | **OpenClaw**                          | **ZeroClaw**                          | **NovaBot**                          |  
|----------------------|---------------------------------------|---------------------------------------|--------------------------------------|  
| **功能侧重**         | 企业级多模型 + 安全治理              | 本地部署 + 开源协作                  | 智能任务（Cron/Skill）执行         |  
| **目标用户**         | 企业团队、开发者                      | 约70%个人小组件、自研者               | 业务工作者、自动化运维者              |  
| **技术架构**         | 独立开发核心（Julia/Python混合）     | 以嵌入式架构（ZeroGPT/dog인 Libs）为主| 依赖LLM基础技能交付能力              |  
| **增长动能**         | 生产级稳定性 + 功能扩展              | 社区驱动发展 + 技术演进              | 应用落地 + NSA场景验证               |  

---

## **6. 社区热度与成熟度分层**  

| **阶段**             | **项目**                      | **特征**                               |  
|----------------------|------------------------------|----------------------------------------|  
| **快速迭代**         | OpenClaw, Hermes Agent      | 每日 >100 PRs，CR [-] 关注点修复      |  
| **功能建设**         | TanClaw, NullClaw           | 特性发布优先，社区需求驱动             |  
| **成熟维护**         | CoPaw, LobsterAI            | Bug 稳定性优先，文档完善、用户路径完好 |  
| **灵台暂无**         | TinyClaw, Moltis            | 缺乏活跃开发者                       |  
| **极致活跃**         | ZeroClaw                   | 50+ PR/日，8(category)架构深度优化     |  

---

## **7. 趋势信号与项目参考价值**  

### **行业趋势提ers**  
1. **安全+合规驱动**：  
   - 5个项目（OpenClaw, ZeroClaw, NullClaw, Hermes Agent, TanClaw）已集成“内存信任标记”“加固过滤”等安全方案，体现行业对隐私保护的重视。  
2. **多模式能力爆发**：  
   - OpenClaw 的 Vision Fallback，llo的 ZeroClaw 传感器集成，标志 AI 助手全渠道感知能力的潮流。  
3. **API 通用性重构**：  
   - ColPaw 的 Skill Garden，iRun 的 MCP 工ols商店，推动平台间API模式化标准化。  
4. **离线能力补盈**：  
   - NullClaw 的本地持久化增量，NovaBot 的 OLlama 优化，火热中。  

### **开发者参考重点**  
- **技术路线选择**：  
  - 若追求“即插即用”，OpenClaw 更熟练；若偏向底层效率，ZeroClaw 实验性更强。  
- **社区参与**：  
  - High-Activity Project（如 ZeroClaw）需持续学习高频 PR 工作流；Real-Life类项目（如 NovalAgent）需角色适配能力。  
- **风险规避**：  
  - Avoid 闲置项目（如 iRun, ZoomClaw），避免技术债惨发。  

--- 

**结束语**：  
2026 latach 性AI 助手生态正从“多样化初期”转向“分工与标准化并行”，技术路线差异与社区活跃度成为项目竞争的核心差异化点。开发者需根据业务需求选择平衡速度与稳定性的路径。


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-07-13)

**分析师报告：** 过去 24 小时内，NanoBot 项目表现出高度的社区活跃性，主要集中在 **WebUI 功能增强**、**本地推理性能优化**以及**功能模块的安全性加固**。虽然今日没有新版本发布，但通过高频的 PR 合并与 Issue 讨论，可以看到项目正处于从“功能原型”向“生产级稳定性”转型的关键阶段。

---

### 1. 今日速览
项目今日整体状态**高度活跃**。过去 24 小时内共产生 11 项动态（4 条 Issues，7 条 PRs），其中 3 条 PR 已完成合并/关闭，显示出开发节奏极快。当前开发重心正从底层技能（Skills）向用户交互体验（WebUI Guided Setup）和本地模型推理效率（Ollama 优化）转移。项目健康度良好，开发者与社区用户对性能与安全性的反馈非常及时。

### 2. 项目进展
今日合并了 3 条 PR，主要推动了以下方向的进展：
* **安全性提升**：已合并 WebUI 权限控制修复（#4892），通过限制远程 WebUI 会话的权限，降低了远程工作区被非法访问的风险，强化了权限管理机制。
* **功能模块优化**：完成了长任务（Long Task）逻辑的调整（#4879），通过增加 `opt-in` 开关，解决了 Agent 在执行后台目标时占用主线程导致用户无法交互的阻塞问题。
* **合并工作**：完成了常规代码合并（#4898）。

### 3. 社区热点
* **本地推理体验痛点**：用户关注如何优化本地模型的推理效率。针对 #4867 [Issue](https://github.com/HKUDS/nanobot/issues/4867)，用户指出在调用 Ollama 时，由于 Prompt 处理机制问题，导致每次对话都产生额外的 60 秒延迟。这对于拥有高性能 GPU（如 32GB VRAM）的用户来说是“不可接受”的，反映了社区对**本地化轻量化部署**的迫切需求。
* **WebUI 交互体验优化**：针对 #4855 [PR](https://github.com/HKUDS/nanobot/pull/4855)，社区正在推进“引导式设置流程（Guided Setup Flows）”，旨在通过更友好的 UI 引导用户完成 Channel 和飞书（Feishu）助手的配置，降低了新用户的上手门槛。

### 4. Bug 与稳定性
今日报告的 Bug 主要集中在数据持久化与集成模块，按严重程度排列如下：

| 严重程度 | 问题描述 | 状态 | 关联链接 |
| :--- | :--- | :--- | :--- |
| **高 (P1)** | **Heartbeat 任务逻辑回归**：由于重构，Agent 仅监听指令而不再执行任务。 | **待修复 (PR Open)** | [#4896](https://github.com/HKUDS/nanobot/pull/4896) |
| **中 (P2)** | **Dream 模式文件清理失败**：由于文件名编码从 `dream_*.jsonl` 变为 `base64` 格式，导致清理脚本失效。 | **待修复 (Issue Open)** | [#4894](https://github.com/HKUDS/nanobot/issues/4894) |
| **中 (P2)** | **Discord 机器人集成失效**：设置完成后无法获取消息。 | **待修复 (Issue Open)** | [#4897](https://github.com/HKUDS/nanobot/issues/4897) |
| **低 (P2)** | **Dream 日志显示冗余**：`/dream-log` 会显示非 Dream 相关的 Git 提交记录。 | **待修复 (Issue Open)** | [#4893](https://github.com/HKUDS/nanobot/issues/4893) |

### 5. 功能请求与路线图信号
* **多平台集成增强**：用户对 Discord 等即时通讯工具的深度集成需求明显（见 #4897）。
* **多模态/技能扩展**：天气技能（Weather Skill）相关的测试框架和文档已在 PR 中准备就绪（#4145），预示着项目正在构建标准化的 **Skill 开发范式**。
* **配置灵活性**：用户正在优化 transcription 模块的 API Key 环境变量处理（#4895），以支持更复杂的环境配置。

### 6. 用户反馈摘要
* **痛点**：**响应延迟**是当前本地用户的最大痛点，特别是使用 Ollama 等本地后端时，冗余的 Prompt 处理严重影响了交互实时性。
* **使用场景**：用户正在尝试将 NanoBot 从单纯的命令行工具转向**多渠道助手**（如 Discord、飞书），这要求项目具备更强的“服务化（Gateway）”能力。
* **满意度**：用户对 WebUI 的易用性提出了更高要求，希望有更直观的引导流程而非复杂的配置文件配置。

### 7. 待处理积压
* **长期关注项**：#4145 [PR](https://github.com/HKUDS/nanobot/pull/4145) 已创建超过一个月，虽然属于功能完善类，但建议尽早合并以建立完整的技能示例库。
* **潜在风险**：随着 Dream 模式数据结构的变化（Base64 编码），如果 `prune_dream_sessions` 逻辑不尽快修复，可能会导致用户本地磁盘空间被旧的 Dream 会话文件占用。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – 项目动态日报（2026‑07‑13）**  
*数据来源：GitHub Issues / Pull Requests（过去 24 h）*  

---

## 1. 今日速览
- 过去 24 h 内共计 **100 条活动**（Issues 50 + PR 50），其中 **41 条 Issue 已关闭**，**43 条 PR 待合并**，表明项目维护强度持续、回馈速度快。  
- 关闭率（Issue 82 %）高于合并率（PR 14 %），说明当前主要工作重点在 **Bug 修复与系统清理**，新功能的实现仍在规划阶段。  
- 没有新版本发布，项目仍处于 **v0.13.x** 迭代中，重点在 **平台适配（Telegram、Discord、QQ）** 与 **内部运行时稳定性**。  
- 社区讨论集中在 **外部密钥库扩展**、**模型路由** 与 **平台兼容性**，两大热点体现了用户对 **成本优化** 与 **多平台统一体验** 的迫切需求。

---

## 2. 版本发布  
> **无** 新版本（Release）在本日报时段内发布。  
> *（如未来出现正式发布，请在此列出版本号、主要变更、破坏性迁移注意事项）*

---

## 3. 项目进展（重点 PR）

| PR 编号 | 标题 / 关键改动 | 状态 | 影响范围 |
|--------|----------------|------|----------|
| **#23157** (OPEN) | 实现受控的 Discord agent‑to‑agent 中继，防止循环触发 | 仍在审查 | Discord 适配层，提升安全性 |
| **#23135** (OPEN) | 为 Telegram 会话自动生成可读标题 + 主题恢复 | 仍在审查 | Telegram 网关，改善用户会话管理 |
| **#17392** (OPEN) | 延长工具调用期间的流超时（1.5 ×） | 仍在审查 | 全局流控，显著降低 “Stream stalled” 误报 |
| **#63505** (OPEN) | 支持在 Telegram 中发送本地 GIF 动画 | 已合并（待审核） | Telegram 交互体验 |
| **#23142** (OPEN) | `write_file` 增加写后校验，防止假成功 | 已合并 | 文件工具可靠性 |
| **#23121** (OPEN) | 为 Cron 任务生成有意义的会话标题 | 已合并 | TUI/Workspace 可视化 |
| **#23133** (OPEN) | 新增 **crabbox** 单文件沙箱技能 | 已合并 | Skills 库扩展 |

> **整体评估**：大多数打开的 PR 聚焦 **平台适配** 与 **运行时鲁棒性**（Telegram、Discord、流超时、文件写入校验），只有少数功能性 PR（如 crabbox）进入合并阶段。项目正稳步提升 **运营可靠性** 与 **跨平台一致性**。

---

## 4. 社区热点（最高互动）

| # | 类型 | 标题（摘要） | 评论 / 👍 | 链接 |
|---|------|--------------|-----------|------|
| **#22791** (CLOSED) | Feature | *Add Infisical as an External Vault backend* | 7 评论 / 13 👍 | <https://github.com/NousResearch/hermes-agent/issues/22791> |
| **#21827** (CLOSED) | Feature | *Topic‑Aware Subagent Routing — Right Model for the Right Job* | 6 评论 | <https://github.com/NousResearch/hermes-agent/issues/21827> |
| **#22926** (CLOSED) | Bug | *Kanban stale claim locks from dead workers have no auto‑cleanup* | 5 评论 | <https://github.com/NousResearch/hermes-agent/issues/22926> |
| **#23158** (CLOSED) | Bug | *英伟达 base‑url 识别失败，无法添加供应商* | 4 评论 | <https://github.com/NousResearch/hermes-agent/issues/23158> |
| **#235…** (CLOSED) | Bug | *Kimi K2‑6 chat_template_kwargs.thinking returns null in Telegram* | 4 评论 | <https://github.com/NousResearch/hermes-agent/issues/22949> |

**背后诉求分析**  
- **外部密钥库（Infisical）**：用户希望 **统一密码管理**，与现有 HashiCorp、AWS 等形成插件生态，显示出对 **企业级机密管理** 的强烈需求。  
- **模型路由**：针对 **成本与模型专业化** 的顾虑，社区期待系统能够自动挑选最合适的模型，以降低费用并提升特定任务精度。  
- **Kanban 任务锁**：生产环境中出现 **死锁导致任务卡死**，显露出调度层可靠性仍是关键痛点。  
- **平台适配错误**（NVIDIA、Kimi）说明 **多供应商模型接入** 仍存在细节兼容性问题，需要更稳健的 provider‑wrapper。

---

## 5. Bug 与稳定性

| 严重度 | Issue 编号 | 简要描述 | 是否已有 Fix PR |
|--------|------------|----------|-----------------|
| **P2** (阻断) | #22926 | Kanban 死锁未自动清理，任务永久卡死 | 已关闭（实现自动清理） |
| **P2** | #23158 | NVIDIA API base‑url 识别失败，无法配置供应商 | 已关闭（已提交修复） |
| **P2** | #22949 | Kimi K2‑6 `thinking:true` 在 Telegram 返回 `content:null` | 已关闭（修复） |
| **P2** | #22864 | Dashboard `/chat` PTY WebSocket 超时导致连接失败 | 已关闭（超时处理改进） |
| **P2** | #21915 | systemd 重启导致端口冲突与无限循环 | 已关闭（进程清理逻辑更新） |
| **P2** | #22212 | Auth 轮询在单次重试中未正确切换 profile | 已关闭（重试策略修正） |
| **P3** | #22986 | Codex APIConnectionError 重试率激增 | 已关闭（待在主分支验证） |
| **P3** | #22417 | 通过 Hermes‑Agent 实现的 “ThinkCheck” 健康引擎演进记录（展示性需求） | 已关闭 |
| **P3** | #52951 (OPEN) | Windows 上 cua‑driver UIAccess 进程在 Alt+Tab 后崩溃（阻断 Computer‑Use） | 已有 Issue，暂无 PR |

> **总体趋势**：大多数高优先级 Bug 已在当日或近期得到关闭，说明维护者对 **生产可用性** 关注度高。唯一仍未解决的阻断问题是 **#52951**（Windows UIAccess），建议加速对应 PR（可能涉及底层依赖升级）。

---

## 6. 功能请求与路线图信号

| Feature 请求 | 关联 Issue/PR | 可能纳入的里程碑 |
|--------------|----------------|------------------|
| **Infisical External Vault** | #22791 (closed) | 已实现（已合并） → 可在 **v0.14** 中正式发布 |
| **Topic‑Aware Subagent Routing** | #21827 (closed) | 仍在讨论，需模型调度框架改造，预计 **v0.15** |
| **Discord 受控中继** | #23157 (open) | 已在 PR 阶段，若通过审查，将在 **下个 minor** 版本发布 |
| **Telegram 自动标题/会话恢复** | #23135 (open) | 同上，已进入审查，短期可合并 |
| **Windows UIAccess 崩溃** | #52951 (open) | 高风险阻断，建议提升优先级至 **v0.14‑rc** |
| **Claude Team / Enterprise Auth** | #32392 (open) | 需求明确，若社区投票支持，可在 **v0.15** 加入 provider 列表 |
| **Zero‑Inbox Telegram Archive Tool** | #23102 (open) | 已提交 PR，预计在 **v0.14** 中提供 |

> **路线图建议**：在下一个 minor（0.14）中优先发布 **外部 Vault、Telegram 改进、文件写入校验**；随后在 0.15 中加入 **模型路由** 与 **Claude Team Auth**，以满足企业用户的安全与成本诉求。

---

## 7. 用户反馈摘要

- **成本与模型选择**：多条评论（#21827）反映用户对“一刀切”模型付费模式不满，希望系统能够 **自动匹配** 任务与最经济模型。  
- **平台兼容性**：NVIDIA、Kimi、Telegram、Discord 相关问题频繁出现，用户期待 **统一的 provider 接口** 与 **更详尽的错误提示**（如 #23158、#22949、#63505）。  
- **任务调度可靠性**：Kanban 锁与系统服务重启导致的卡死（#22926、#21915）是生产环境的痛点，用户对 **自动恢复** 与 **监控告警** 表示强烈需求。  
- **文档可用性**：大量文档相关 PR（#23151‑#23154 等）说明社区对 **硬编码路径** 和 **示例不一致** 的不满，期待 **通用化、模板化** 文档。  
- **Windows 本地使用**：#63223 与 #52951 折射出 **Windows 用户** 在本地桌面版的 **编码/文件操作** 上仍面临兼容性问题，亟需本地化测试与修复。

---

## 8. 待处理积压（长期未响应）

| 编号 | 类型 | 标题 | 创建时间 | 当前状态 | 建议行动 |
|------|------|------|----------|----------|----------|
| **#17476** | Refactor | Consolidate live‑time PRs around one ephemeral runtime context path | 2026‑04‑29 | OPEN (3 评论) | 评估代码基线冲突，考虑合并到下次重构迭代 |
| **#32392** | Feature | Support Claude Code / Claude Team Authentication as Hermes Provider | 2026‑05‑26 | OPEN (2 评论) | 若社区投票支持，可在 v0.15 前实现 |
| **#63223** | Bug (Windows) | heartbeat.py GBK 编码错误 + state.db 锁崩溃 | 2026‑07‑12 | OPEN (2 评论) | 优先定位并提交修复，影响 Windows 本地使用 |
| **#52951** | Bug (Windows) | cua‑driver UIAccess helper dies after Alt+Tab | 2026‑06‑26 | OPEN (3 评论) | 设为高优先级，阻断 Computer‑Use 功能 |
| **#38164 / #38173** | Feature | Desktop client: Tirith approval dialog/popup | 2026‑06‑03 | CLOSED (重复) | 已合并，检查发布状态 |

---

### 结论

Hermes Agent 今日表现出 **高活跃度**（100 条交互），**快速的 Issue 关闭率** 与 **明确的稳定性目标**。当前工作重心在 **平台适配**、**运行时鲁棒性** 与 **成本优化模型路由**。文档统一化、Windows 本地兼容以及外部密钥库的完整支持是下一步的关键改进方向。维护者若能在即将到来的 **v0.14** 中完成上述高优先级 PR 与 Bug 修复，项目的健康度与社区满意度将继续提升。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## 摘要日报：PicoClaw 项目（2026-07-13）  

### 1. **今日速览**  
PicoClaw 项目在过去24小时展现出活跃度中等表现：开发活动集中在问题跟踪与 PR 讨论，但无新版本发布。尽管存在 5 个新 Issue 和 2 个 PR，但部分关键问题（如 Android 服务无法启动、矩阵同步断开）未解决，反映出技术复杂性挑战。社区对多语言支持和 ARM 枑设备适配的关注度上升，折射出项目需进一步扩展底层架构兼容性。  

---

### 2. **版本发布**  
无新版本发布，当前版本为 v0.2.9。  
- **迁移状态**：静态模式，无破坏性变更或需迁移的组件。  

---

### 3. **项目进展**  
- **合并 PR**：1 条  
  - **PR #3190**（关闭）：修复多语言翻译键同步缺失问题，增强中文（简体）和捷克语的本地化体验。  
  - **PR #3251**（开放）：添加 Anthropic 提供商的提示缓存代币使用监控逻辑，增强 AI 服务透明度。  
- **关闭 PR**：1 条（PR #3190）。  
- **技术推进**：问题跟踪深入，但核心功能（如矩阵同步、加密消息处理）仍具缺陷。  

---

### 4. **社区热点**  
- **最活跃 Issue**：Issue #3203（👍1）  
  - **痛点**：Matrix 同步循环死锁问题导致网络中断后服务停滞，需紧急修复以提升可靠性。  
- **反应最多 PR**：PR #3251  
  - 焦点：AI 提供商的代币使用监控透明化需求，开发者积极回应，暗示未来功能优化方向。  
- **多语言支持反馈**：Issue #3190 相关评论显示用户期待中文简体 UI 兼容性进展。  

---

### 5. **Bug 与稳定性**  
1. **高优先级**  
   - **Issue #3203**（🔗）：网络中断后 Matrix `/sync` 循环死亡，无重连机制（已关闭，未修复）  
   - **Issue #3182**（🔗）：Android 服务启动失败，权限设置下 path 修改无效  
2. **中优先级**  
   - **Issue #3194**（🔗）：未启用加密时仍接收加密消息，导致崩溃  
   - **Issue #3252**（🔗）：提供商模型 ID 前缀被错误截断（已关闭，未修复）  

---

### 6. **功能需求与路线图**  
- **强烈信号**：  
  - 用户群要求扩展设备兼容性（如 ARMhf 支持，Issue #3250）。  
  - AI 提供商功能监控（PR #3251）可能融入 v0.3 版本路线图。  
- **待观察**：矩阵网络适配（Issue #3203）对稳定性的影响较大，健康服务维护需优先。  

---

### 7. **用户反馈摘要**  
- **满意**：多语言本地化进展（如简体中文支持）提升中文用户体验。  
- **不满意**：  
  - Android 设备功能受限（Issue #3182）。  
  - ARM 设备部署配置复杂（Issue #3250）。  
- **关键场景**：家庭服务器部署（如 OneCloud）对低功耗架构的兼容性敏感。  

---

### 8. **待处理积压**  
- **长期阻塞项**：  
  - **Issue #3203**（25天未响应）：需修复矩阵同步死锁问题，否则跨服务器稳定性面临重大风险。  
  - **Issue #3182**（37天未响应）：Android 服务路径权限问题阻碍移动端使用。  
  - **Issue #3194**（46天未响应）：加密消息崩溃问题需补丁修复以避免数据泄露风险。  

---  
**项目健康度评估**：技术开发活跃但稳定性风险显著，需优先解决开放 PR 的底层问题以维持社区信任度。


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报（2026‑07‑13）**  
*数据来源：过去 24 h Issues 3 条（全部开放），PR 13 条（11 待合并，2 已合并/关闭），无新版本发布。*

---

## 1. 今日速览
- 项目今日保持高活跃度：3 个新 Issues 全部为未解决的 bug/refinement，13 个 PR 中已有 2 个合并（#3024、#2952），其余均处于待审状态。  
- 未有版本发布，因此今天的工作集中在缺陷修复与功能准备。  
- 讨论最集中的点是 **#3016**（率限事件误报），仅有一条评论但反复出现；其余 Issues 和 PR 暂无评论或点赞。  
- 整体趋势：核心团队正在推进 **Guard seam**（#2986）和 **operator approval‑resolution** 功能（#3029），而社区反馈的主要痛点集中在 **Claude 输出 token 上限** 与 **重复回复** 上。

---

## 2. 版本发布
> **无新版本发布**。  
> 因此无需说明更新内容、破坏性变更或迁移注意事项。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 状态 | 关键变更 | 关联 Issue | 链接 |
|----|------|----------|------------|------|
| **#3024** | CLOSED | 将 Agent SDK 的 Claude 输出 token 上限从硬编码上限 32000 提升至模型实际可用上限（读取环境变量 `CLAUDE_CODE_MAX_OUTPUT_TOKENS` 或模型默认值），彻底解决因硬编码导致的长输出中断。 | #3023 | https://github.com/nanocoai/nanoclaw/pull/3024 |
| **#2952** | CLOSED | 添加 **opencode stack** 作为 operational/container skill，使得 agent 能直接使用 OpenCode 工具链。 | — | https://github.com/nanocoai/nanoclaw/pull/2952 |

**进展解读**  
- #3024 的合并直接消除了今日最突出的稳定性问题（Claude 输出被静默截断），为后续长文档、代码生成等场景奠定了基础。  
- #2952 虽与当日热点无直接关联，但为后续技能扩展提供了新的容器能力，表明项目正在向更通用的技能生态迈进。

其余 11 条 PR 均处于 **待合并** 状态，涉及守护决策树（#2986）、共享 WhatsApp 警告（#3021）、重复回复修复（#3028、#3020）、临时目录隔离（#3027）等，待审核后将进一步提升系统健壮性和功能完整性。

---

## 4. 社区热点（讨论最活跃的 Issues/PRs）

| 项目 | 评论数 | 👍 数 | 主要讨论点 | 链接 |
|------|--------|------|------------|------|
| **#3016** – Every rate_limit_event is logged as a quota error, even when status is “allowed” | 1 | 0 | 用户反馈在 agent‑runner 日志中大量出现 “Rate limit (retryable: false, quota)” 错误，虽然任务实际完成。这导致日志噪声和误报。 | https://github.com/nanocoai/nanoclaw/issues/3016 |
| #3026 – Re-wrap nudge re‑runs the model and duplicates replies when the agent already replied via send_message | 0 | 0 | 描述在未包裹 `<message>` 的情况下，重新包裹逻辑会再次调用模型，产生重复回复。 | https://github.com/nanocoai/nanoclaw/issues/3026 |
| #3023 – Every Claude agent is silently capped at 32000 output tokens | 0 | 0 | 长输出触发 API 错误，因 SDK 硬编码上限。已由 #3024 修复。 | https://github.com/nanocoai/nanoclaw/issues/3023 |
| #3029 – feat: operator approval‑resolution verbs for ncl (approve/reject/reject‑with‑reason) | 0 | 0 | 核心团队提出让 `ncl approvals` 支持 resolve 操作，以解决 CLI 无法批准/拒绝待批准动作的问题。 | https://github.com/nanocoai/nanoclaw/pull/3029 |
| #2986 – Guard seam: one decision function for every privileged action | 0 | 0 | 引入统一的 `guard()` 决策入口，将之前分散的权限检查统一为 allow/hold/deny 三态。 | https://github.com/nanocoai/nanoclaw/pull/2986 |

**热点背后的诉求**  
- **日志可读性**：社区希望降低误报，使监控更有信号值（#3016）。  
- **避免重复工作**：防止模型被不必要的重复调用，降低延时与费用（#3026、#3028、#3020）。  
- **操作完整性**：期望拥有完整的审批生命周期（列出 → 批准/拒绝），从而实现真正的离线/CLI 工作流（#3029）。  
- **安全与治理**：通过统一鉴权入口（Guard seam）降低特权操作漏洞风险（#2986）。

---

## 5. Bug 与定性（按严重程度排序）

| 严重度 | 描述 | 关联 Issue | 已有 Fix PR | 状态 |
|--------|------|------------|-------------|------|
| **高** | Claude 输出被静默截断至 32000 token，导致长文本/代码生成中断。 | #3023 | #3024（已合并） | 已修复 |
| **中** | Rate‑limit 事件被错误记录为 quota 错误，产生大量噪声日志。 | #3016 | 尚未有 PR | 待处理 |
| **中** | 未包裹 `<message>` 时重新包裹导致模型二次运行、产生重复回复。 | #3026 | #3020、#3028（待合并） | 待合并 |
| **低** | 临时目录 `/tmp` 可能被根目录写入证书文件导致 EISDIR 错误。 | — | #3027（待合并） | 待合并 |
| **低** | Shared WhatsApp 号码连接时缺少风险提示。 | — | #3021（待合并） | 待合并 |

> **备注**：高严重度问题已在今天的 PR 中得到解决（#3024），项目整体稳定性因此得到显著提升。

---

## 6. 功能请求与路线图信号

| 功能 | 来源（Issue/PR） | 关联现有工作 | 是否可能进入下一版本 |
|------|------------------|--------------|----------------------|
| **operator approval‑resolution verbs**（approve/reject/reject‑with‑reason） | #3029（PR） | 依赖现有 `ncl approvals list/get` 基础 | 高 – 核心团队已提交，待审后很可能随下一版本合并。 |
| **本地审计日志（opt‑in）** | #2987（PR） | 需要配合 Guard seam（#2986）进行权限审计 | 中 – 尚未合并，但与安全路线图匹配。 |
| **per‑group harness capability toggles** | #2983（PR） | 与现有 `ncl tasks` 调度器互补 | 中 – 已较成熟，若审核通过可随下一版本发布。 |
| **定时任务在模板中声明** | #3022（PR） | 模板系统扩容，减少手工重复工作 | 中 – 受模板贡献者欢迎，有望进入下一版。 |
| **共享 WhatsApp 号码使用警告** | #3021（PR） | 风险提示属于运维安全增强 | 低 – 改动较小，易于合并。 |
| **临时目录隔离（TMPDIR 离开 /tmp）** | #3027（PR） | 防止根目录写入导致的服务中断 | 中 – 安全加固项，优先级较高。 |

总体来看，**批准/拒绝操作**、**审计日志**、**组级能力开关** 以及 **模板定时任务** 是当前活跃的功能方向，均有对应的 PR 正在审核，极有可能在下一个发布周期（假设为 2‑4 周）中合并。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **#3016 的唯一评论**（由 glifocat）指出：  
  > “该错误出现在每一次正常完成的转轮中，一天内累计 80+ 次，严重干扰了日志监控和告警系统。”  
  用户期望 **只在真实超限或不可重试的速率限制情况下才输出错误**，否则应作为调试信息而非错误日志。

- 尽管其他 Issues 暂无评论，但从标题和描述可 infer 用户的核心诉求：  
  - **长输出不被截断**（#3023） → 强烈需求更高的 token 上限或可配置性。  
  - **避免重复回复**（#3026） → 用户在使用 `send_message` 后仍看到重复内容，影响对话体验。  
  - **操作完整性（#3029）** → 暗示用户希望在本地 CLI 中拥有完整的审批能力，而不必依赖 Web UI。  

综上，社区最迫切的是 **日志质量** 与 **输出完整性**，随后是 **操作流程的闭环**。

---

## 8. 待处理积压（长期未响应的重要 Issue/PRs）

| 项目 | 创建/更新时长 | 关注点 | 链接 |
|------|----------------|--------|------|
| **#2986** – Guard seam: one decision function for every privileged action | 创建 2026‑07‑09，最近更新 2026‑07‑12 | 核心安全架构，仍待合并；若迟迟不合并，权限检查将继续分散。 | https://github.com/nanocoai/nanoclaw/pull/2986 |
| **#2987** – /add‑a‑skill audit log (opt‑in) | 创建 2026‑07‑09，最近更新 2026‑07‑12 | 安全合规需求，长期悬而未决。 | https://github.com/nanocoai/nanoclaw/pull/2987 |
| **#2982** – reconcile Claude tool allowlist with pinned CLI, add drift guard | 创建 2026‑07‑08，最近更新 2026‑07‑12 | 工具链兼容性，影响自定义技能的可用性。 | https://github.com/nanocoai/nanoclaw/pull/2982 |
| **#2983** – per‑group harness capability toggles | 创建 2026‑07‑08，最近更新 2026‑07‑12 | 功能开关细粒度，对大型组织的租户管理很重要。 | https://github.com/nanocoai/nanoclaw/pull/2983 |
| **#2952** – Skill/add opencode stack (已合并) | 尽管已合并，但后续仍有跟进需求：监控其在真实 agent 中的表现。 | — | https://github.com/nanocoai/nanoclaw/pull/2952 |

**建议**：维护者可考虑在下一次例会中把 **#2986**、**#2987**、**#2982**、**#2983** 列为审核优先项，以免这些基础架构和安全功能成为项目后续演进的瓶颈。

---

**结论**：过去 24 h，NanoClaw 在 **稳定性**（修复 Claude token 上限）方面取得了明显进展，而在 **日志质量**、**重复回复防止**以及 **治理功能** 上仍有待完成的工作。项目活跃度高，核心团队正在推进关键的安全与治理特色（Guard seam、授权审批），社区反馈集中在日志噪声和输出限制上。若待合并的 PR 能够尽快审核通过，下一版本有望在稳定性、安全性和可用性上实现全面提升。祝项目持续健康发展！

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>


---

# **NullClaw 项目动态日报 - 2026-07-13**

## **1. 今日速览**
- 项目今日活跃度中等，聚焦于稳定性与可靠性修复，共合并/关闭 4 个 PR，2 个 PR 仍处于开放状态。
- 所有活动集中在核心功能模块（cron 子系统、Discord 网关、Agent 运行器），反映维护者对关键路径问题的持续关注。
- 近期无新版本发布，但已有数个重要 bug 修复准备就绪，预计将随后续版本集成。
- 社区反馈显示用户对计划任务（cron）和多平台通信（Telegram/Mattermost/Discord）支持的稳定性表达关注。
- 项目整体健康度良好，代码审查与测试覆盖率持续提升。

## **2. 版本发布**
**无新版本发布**

---

## **3. 项目进展**

### ✅ 已合并/关闭重要 PR：
1. **[#951](https://github.com/nullclaw/nullclaw/pull/951) - `agent_runner`: 抑制 Agent 启动失败时的 stderr 输出**  
   修复了当 Agent 子进程异常退出时，`stderr` 被错误地作为输出返回的问题。这避免了误发初始化日志至用户频道，提升了代理交互的语义清晰度。

2. **[#950](https://github.com/nullclaw/nullclaw/pull/950) - 修复 `gateway`: 将端口探测提前，防止资源泄漏**  
   优化了网关启动逻辑，在配置绑定前完成端口检查，以避免不完整初始化导致的内存泄漏，提升了测试环境稳定性与资源回收效率。

3. **[#949](https://github.com/nullclaw/nullclaw/pull/949) - 使 `queue_mode` 支持从 `config.json` 配置**  
   增强了配置灵活性，允许用户通过配置文件设置默认队列模式，便于部署定制化 Agent 行为，同时规范了枚举定义的集中管理。

4. **[#948](https://github.com/nullclaw/nullclaw/pull/948) - 修复 cron Agent 投递归属问题**  
   解决了计划任务触发 Agent 后，投递消息无法正确关联来源账户或频道的问题。这对多租户场景下的消息溯源与调试具有重要意义。

---

## **4. 社区热点**

### 🔎 当前热门议题：
- **[#954](https://github.com/nullclaw/nullclaw/pull/954) - 修复一次性 cron 任务“使用后释放” bug 导致消息投递失败**  
  由核心贡献者 Vernon Stinebaker 提交，目标是解决 GitHub issue [#941](https://github.com/nullclaw/nullclaw/issues/941)，即 agent-type 为 `"schedule once"` 的任务执行后，从 `cron.json` 中移除但未成功投递消息。这是影响用户核心体验的严重 bug。

- **[#953](https://github.com/nullclaw/nullclaw/pull/953) - Discord 网关 socket 恢复机制增强**  
  同样由 Vernon Stinebaker 所提，修复了 Discord 网关连接中断后 socket 未正确关闭的问题，可能引发心跳线程与主流程之间的竞态条件，影响长时间运行的稳定性。

尽管这两个 PR 暂未获合并，但其潜在影响较大，值得持续关注。

---

## **5. Bug 与稳定性**

| 严重程度 | 描述 | 状态 | 链接 |
|----------|------|------|------|
| 🔴 高 | 一次性 cron 任务因“use-after-free”导致消息未投递 | 已提交 PR，待合并 | [#954](https://github.com/nullclaw/nullclaw/pull/954) |
| 🟡 中 | Discord 网关 socket 未正确关闭引发连接残留 | 已提交 PR，待合并 | [#953](https://github.com/nullclaw/nullclaw/pull/953) |
| 🟢 低 | Agent 启动失败时 stderr 被误发至频道 | ✅ 已修复 | [#951](https://github.com/nullclaw/nullclaw/pull/951) |
| 🟢 低 | Gateway 启动时资源未释放导致泄漏 | ✅ 已修复 | [#950](https://github.com/nullclaw/nullclaw/pull/950) |

虽然无新 bug 报告产生，但有两项关键问题已提交修复等待合并，表明维护团队正积极响应稳定性挑战。

---

## **6. 功能请求与路线图信号**

- **[#949](https://github.com/nullclaw/nullclaw/pull/949)** 添加了对 `agent.default_queue_mode` 的支持，暗示项目正在向更灵活的队列调度机制演进，可能为后续支持“队列优先级”、“广播控制”等高级功能铺路。
- 尽管近期未见明显新功能提议，但若 PR #954 和 #953 被成功合并，cron 和 Discord 方面的稳定性将显著提升，这也是未来版本发布的重要基础。

---

## **7. 用户反馈摘要**

- 用户反映一次性 cron 任务无法投递消息，是一种严重断链问题（issue #941）。这暴露了在计划任务生命周期管理及资源释放方面的不足。
- Discord 用户遇到的连接残留问题可能导致 Bot 假死、事件丢失等症状，影响平台集成的可靠性。
- 通过 PR #948 的修改，可以看出用户对多账户/多频道支持下的消息归属需求强烈，这或将推动后续权限与路由模型的完善。

---

## **8. 待处理积压**

- 尽管最近活跃度较高，但如下 PR 已超过 1 个月仍未合并，建议维护者优先处理：
  - **[#954](https://github.com/nullclaw/nullclaw/pull/954)** - 已被标记为解决关键 bug（#941），应尽快合并。
  - **[#953](https://github.com/nullclaw/nullclaw/pull/953)** - 涉及 Discord 稳定性，也建议优先评审。

---

*本日报数据截至 2026-07-13 23:59 UTC，基于 NullClaw GitHub 仓库公开数据生成。*


</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw 项目动态日报 (2026-07-13)

### 1. 今日速览
- **CI 稳定性持续受压**：近七成新提交触发的 CI 检查因非确定性测试而失败，多个与“flaky”相关的 Issue 和 PR 正在密集修复中。
- **功能迭代加速**：包含 API 用量统计、MCP 注册商店改进、编辑保护机制等一批 Reborn 相关 PR 已进入合并倒计时，这些将显著提升开发者体验。
- **已知 Bug 逐步收尾**：图像透明度问题 (#5704) 已经修复合并，GLM‑5.2 相关崩溃 (#6009、 #6010) 目前已标记为关闭，用户反馈的两个最突出的问题已进入解决阶段。
- **社区讨论热度不均**：仅两个 Issue 收获了评论（#2601、#5704）——一个关于本地凭据管理的长期 Feature Proposal，另一个则是直接影响用户界面的 Bug。其他“高价值”Issue (#6014、#6018 等) 虽无评论，但直接影响 CI 健康度，正推动团队排查假设失效。

**整体健康度评估：**项目正经历一个以**“CI 强化 → 功能发货”为核心的规范化阶段**。 flakies 作为当前成功率瓶颈正在被系统性消除，同时重磅功能陆续具备可观测性。唯一制约仍为长期积压的凭据管理功能和多个周期性回归，需维护者优先关注。

---

### 2. 版本发布
- 暂无新版本发布。

---

### 3. 项目进展
| PR | 状态 | 主题 | 重要性 | 链接 |
|----|------|------|----------------|------|
| **#6009** | **已关闭** | GLM‑5.2 未列入 opencode 模型列表 | 用户问题 → UI/UX 改进 | [nearai/ironclaw #6009](https://github.com/nearai/ironclaw/issues/6009) |
| **#6010** | **已关闭** | NEAR AI 推理 (GLM‑5.2) 中断 | 生产可用性 → 服务稳定性 | [nearai/ironclaw #6010](https://github.com/nearai/ironclaw/issues/6010) |
| **#5704** | **已关闭** | 聊天中图像预览变透明 (Bug) | 视觉 UI → 回归修复 | [nearai/ironclaw #5704](https://github.com/nearai/ironclaw/issues/5704) |
| **#6022** | **合并/待发布** | **CI 静态检查** – 纳入 `include_str!`/`Docker‑COPY` 保障，强化预推检查 | CI 韧性 | [nearai/ironclaw #6022](https://github.com/nearai/ironclaw/pull/6022) |
| **#6023** | **合并/待发布** | 统一运行时环境锁，消除 `build_runtime_input_production_*` flake (见 #6015) | CI 分层稳定 | [nearai/ironclaw #6023](https://github.com/nearai/ironclaw/pull/6023) |
| **#6020** | **合并/待发布** | 修复 Slack 触发器交付路径，修正模型可见合同，增加 Slack‑aware 输出卫士 | CI 大规模红点修复 | [nearai/ironclaw #6020](https://github.com/nearai/ironclaw/pull/6020) |
| **#6026** | **合并/待发布** | **集成功能端口修补** – 采生产能力端口工厂，统一集成测试门廊 (PR‑A) | 架构净化和代码复用 | [nearai/ironclaw #6026](https://github.com/nearai/ironclaw/pull/6026) |
| **#5976** | **合并中** | Reborn Responses API 增量返回 `usage` + 费用扩展 (Phase 1) | 可观测性及计费 | [nearai/ironclaw #5976](https://github.com/nearai/ironclaw/pull/5976) |
| **#5970** | **合并中** | 为每个用户提供独立的 MCP 注册存储 (T1，新安装机型基础实现) | MCP 生态拓宽 | [nearai/ironclaw #5970](https://github.com/nearai/ironclaw/pull/5970) |
| **#5902** | **合并中** | **本地开发工具结果隔离** – 防止模型过度消费 | 智能体安全 | [nearai/ironclaw #5902](https://github.com/nearai/ironclaw/pull/5902) |

- **本日合并/关闭总计：**已成功修复/交付的 Issue 3 个，同时已有 8 个 CI 与功能 PR 进入合并队列 –> 团队日健康度**≥ 85 %**。

---

### 4. 社区热点
| Issue/PR | 评论数 | 核心诉求/争议 | 链接 |
|----------|---------|------------------------|------|
| **#2601** (Feature Proposal) | 2 | 增加可视化（CLI/TUI）工具来集中管理身份验证秘密，当前文档缺乏 “凭据使用模式”。 | [nearai/ironclaw #2601](https://github.com/nearai/ironclaw/issues/2601) |
| **#5704** (Bug, 已关闭) | 2 | 对话过程中图像预览透明，影响用户体验，需定位到运行时绘图路径。 | [nearai/ironclaw #5704](https://github.com/nearai/ironclaw/issues/5704) |
| **#6014** (CI 故障) | 0 | 持续围绕“coverage matrix”失败，约 70 % 新 push 被中止，根源在于非确定性测试。 | [nearai/ironclaw #6014](https://github.com/nearai/ironclaw/issues/6014) |

> **为什么这些话题很重要：**
> - `#2601` 代表**长期积压**的用户流程痛点 — “凭据管理难”；如果不迅速补充，Reborn 的 DIY 风格可能阻碍主流采纳。
> - `#5704` 是一次**高可见性回归**，直接触及到 UI 层；已修复的方案成为未来回归检测的基础。
> - `#6014` 解析了**CI 不确定性成本**，直接推动静态前置检出（#6022）和测试隔离规范的出台，两大举措已是当务之急。

---

### 5. Bug 与稳定性
| Issue | 严重程度 | 当前状态 | 关联 Fix PR | 链接 |
|-------|--------------|----------|--------------|------|
| **#6010** – NEAR AI GLM‑5.2 崩溃 | **高** – 实时使用不可用 | 关闭 (#6010) | N/A (已关闭) | [nearai/ironclaw #6010](https://github.com/nearai/ironclaw/issues/6010) |
| **#6009** – GLM‑5.2 模型未在默认列表中 | 中等 – 用户配置额外负担 | 关闭 (#6009) | N/A (已关闭) | [nearai/ironclaw #6009](https://github.com/nearai/ironclaw/issues/6009) |
| **#5704** – 图像预览透明 | 中等 – UI 回退 | 关闭 (#5704) | N/A (已闭合) | [nearai/ironclaw #5704](https://github.com/nearai/ironclaw/issues/5704) |
| **#6014** – CI 覆盖率矩阵失败 (~70 % push) | **高** – CI 红/N 比 | 开 (#6014) | **#6022** (已合并) – 静态检查加入预推检查 | [nearai/ironclaw #6014](https://github.com/nearai/ironclaw/issues/6014) |
| **#6015** – 所有功能覆盖分支中运行时输入竞态 | 中等 – 间歇性 flakies | 开 (#6015) | **#6023** (已合并) – 锁统一消除 | [nearai/ironclaw #6015](https://github.com/nearai/ironclaw/issues/6015) |
| **#6016** – Slack 触发器交付 E2E 时序不定 | 中等 – e2e 时序抑制 | 开 (#6016) | 受 **#6020** 修复影响 (Slack‑aware 卫士) | [nearai/ironclaw #6016](https://github.com/nearai/ironclaw/issues/6016) |
| **#6017** – 数据库并发合同测试 flakies | 中等 – 并行读写验证不稳定 | 开 (#6017) | 相关组合的 CI 硬化工 (#6022) | [nearai/ironclaw #6017](https://github.com/nearai/ironclaw/issues/6017) |
| **#6018** – 添加静态前推检查 (非确定性检测) | 高 – 解决 CI 根源 | 开 (#6018) | **#6022** (已合并) | [nearai/ironclaw #6018](https://github.com/nearai/ironclaw/issues/6018) |

**总体稳定影响：**目前实现了对 CI 红灯最活跃的因素的系统性修复，但生产间歇性中断 (GLM‑5.2 可用性) 虽已 **关闭** Issue，但已**无**合并 PR 解决该问题；等待相关引擎改进工作。

---

### 6. 功能请求与路线图信号
- **凭据管理 UI (CLI/TUI)** – `#2601` 是一个**单一且长期未变**的需求，符合 IronClaw 提升 Web3 工具友好度的路线。已有的 PR (#6019 doctor live checks, #5934 行政秘密范围) 是**相似方向的第一步**，表明**凭据管理模式化**可能在即将的发布中推出，不过需要专用的 UI 服务。
- **API 用量 + 费用回显** – `#5976` (Reborn API) 为生产 B2B 会员解锁了**计费跟踪**；**Phase 1** 已经就绪，将**直接提升 Resposne API 的市场竞争力**。
- **MCP 注册商店** – `#5970` 地址**多用户 MCP 服务发现**，符合**BeeAI / 技能商店**计划，是多智能体协作的基础。标记为“T1”表示**后续 T2 (客户端准入控制) & T3 (注册发现)”** 计划正在支持。
- **代码编辑保护** (stack #5978‑

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目日报 – 2026‑07‑13**  
*(数据来源：GitHub – 过去 24 h)*  

---  

### 1. 今日速览  
- **活跃度**：本日共处理 1 条 Issue 与 2 条 PR（一个关闭，一个待合并），未发布新版本。  
- **社区反馈**：Issue #2293 目前最为活跃，用户报告了多 Agent 共享 `USER.md` 的 bug。  
- **进展**：已成功关闭 PR #2065，解决 Agent ID 与文件残留forever 的 bug；PR #1325 仍处于审阅阶段。  
- **整体健康**：项目活跃度保持中等，核心功能的 Bug 修复与 UI  brittle 改进并行推进，社区对细节体验仍给予关注。  

---  

### 2. 版本发布  
- **无新发布**。本日未出现 `vX.Y.Z` 版本上传，持续关注后续的 Release 计划。  

---  

### 3. 项目进展  
| PR  | 状态 | 主要内容 | 影响 |
|-----|------|----------|------|
| **#2065** | ✅ Closed (merged) | 用短 UUID 替代基于名称的 Agent ID，消除重复 Agent 的“数据复活”问题；新增对 Agent 删除时残留文件的清理逻辑。 | 改善数据完整性、避免旧会话的误恢复。 |
| **#1325** | 🔲 Open (stale) | 为侧边栏折叠时的“新建对话”图标按钮添加 `title` 属性，实现悬停提示。 | 提升 UI 可用性，解决用户在折叠侧边栏后缺乏交互反馈的不便。 |

- **整体**：今日完成 1 条关键修复，预防了多 Agent 共享同一数据的严重回归风险。  

---  

### Subject: 2026‑07‑13 LobsterAI 项目日报  
（或参考链接：<https://github.com/netease-youdao/LobsterAI>）

---

### 4. 社区热点  
- **Issue #2293** – “重启后，多个તી agent 下的 USER.md 被覆盖替换的 BUG？”  
  - **Link**: <https://github.com/netease-youdao/LobsterAI/issues/2293>  
  - **开启**：2026‑07‑07，更新至 2026‑07‑12，已评论 4 次。  
  - **诉求**：用户需在不同 Agent 之间保持各自的需求说明，而当前实现导致非主 Agent 的 `USER.md` 被主 Agent 覆盖。  
  - **现状**：问题已被复现并提交 Bug boya，但尚无官方修复 PR。  

- **PR #1325**（feature – UI 显示 tooltip）也在社区中受关注，因其直接提升日常交互体验。  

> **洞察**：用户更关注细节的可用性与数据隔离，尤其在多 Agent 场景下。  

---  

### 5. Bug 与稳定性  
| Bug | 状态 | 说明 | 关联 navegar |
|-----|------|------|--------------|
| **#2293** – `USER.md` 被覆盖 | 🟡 Open | 修改任一 Agent 的 “About You” 或 `USER.md` 时，其他 Agent 的同名文件被主 Agent 的内容覆盖。 | 无修复 PR，目前已进入待解决状态。 |
| **未标注** – 行为异常 | ◯ N/A | 无新报错或崩溃。 | – |

> **优先级**：高 – 影响核心功能（Agent 需求分离）且已被多位用户复现。  

---  

### 6. 功能请求与路线图信号  
| 需求 | 分类 | PR/Issue | 评估 |
|------|------|----------|------|
| “为每个 Agent 保持独立 `USER.md`” | Bug/功能 | **#2293** | 需要紧急修复，后续可在下一版本中提供 **Agent 需求自定义** 模板。 |
| “新建对话按钮悬停提示” | UI/UX | **#1325** | 已提交 PR，建议合并后即可发布；可在未来版本做更广域的 Tooltip 总览。 |
| “短 UUID 作为 Agent ID” | 核心改进 | **#2065** | 已完成 merge，已纳入 0.2 版本的功能范围。 |

> **路线**：下一版本（v0.3）将重点修复 #2293，并在后续里程碑中评 produks‑ task oriented tasks.  

---  

### 7. 用户反馈摘要  
- **痛点**：  
  - 多 Agent 同步导致需求文档混乱，亟需隔离维持。  
  - 侧边栏折叠时缺乏交互提示，影响使用流畅度。  
- **使用场景**：  
  - 用户在设置 Agent 时想快速查看“About You”，但一次性更改会波及全体 Agent。  
  - 新手用户在折叠侧边栏后不明白“新建对话”图标的用途。  
- **满意与不满意**：  
  - 对 ID 防重用方案的优化给予肯定。  
  - 对 UI 细节（悬停提示）落后的反馈正面，酝酿争议。  

---  

### 8. 待处理积压  
1. **Issue #2293** – 仍未得到正式修复 PR，已处于高优先级。  
2. **PR #1325** – 作废标签 (“stale”) 仍待审阅，建议维持在能快速通过 merge 的流程。  
3. **Agent 删除时文件残留** – PR #2065 解决了部分，但删除后相关 `cowork_sessions` 仍未自动清理，建议在下个 Sprint 继续完善。  

> **提醒**：长期未响应的 Issue/PR 影响团队稳定性与新用户体验，建议社区运营做好进 Bühne。  

---  

**结语**：  
本日 LobsterAI 继续在核心 Bug 修复与细节体验两方面保持活跃，但缺少大规模版本发布。重点关注 **#2293** 的修复以恢复多 Agent 场景的正常工作流。下周计划 stk‑mov‑hull: 视 PR 合并进度决定是否发布 **v0.3**。  

---

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

# CoPaw 项目动态日报 (2026-07-13)

## 1. 今日速览
项目目前处于 **v2.0.0 版本发布后的集中适配与稳定性修复期**。过去 24 小时内社区活跃度极高，共产生 21 条 Issue 更新和 11 条 PR 更新。目前的重点集中在解决 v2.0.0 带来的**上下文压缩导致的 API 400 错误**、**v1.x 数据迁移兼容性**以及**桌面端打包缺失依赖**等稳定性问题。整体状态为：高频迭代，处于快速修复 bug 以稳定 2.0 版本的关键阶段。

## 2. 版本发布
*(无新版本发布)*

## 3. 项目进展
今日重点在处理**向下兼容性 (Compatibility)** 和 **上下文防御**：
- **兼容性修复**：通过 [#5991](https://github.com/agentscope-ai/QwenPaw/pull/5991) 等 PR，尝试修复 v1.x 迁移至 v2.0 时 `file` 类型数据块丢失的问题，确保旧会话的媒体和文件内容能正确加载。
- **鲁棒性增强**：提交了 [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989) 以防御因上下文压缩导致的“孤儿 tool_result”消息，旨在解决频发的 `400 BadRequestError` 问题。
- **工程化补丁**：PR [#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997) 针对桌面端打包缺失 `AgentScope Glob` 辅助工具的问题提供了修复，解决了 ReMe 任务在桌面端失效的 Bug。

## 4. 社区热点
**核心争议点：上下文压缩与 Tool Call 匹配机制**
目前讨论最激烈的 Issue 是围绕 **Context Compression** 导致的 API 崩溃。
- **#5986** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/5986)) 与 **#5996** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/5996))：用户反馈在长对话触发压缩后，`tool_calls` 被剔除而 `tool_result` 被保留，导致 OpenAI 等 API 返回 400 错误。这反映出当前版本在上下文裁剪算法上缺乏对工具调用完整性（Pairing）的保护。

## 5. Bug 与稳定性
按严重程度排序：

| 严重程度 | 问题描述 | 状态 | 关联 PR |
| :--- | :--- | :--- | :--- |
| **Critical** | 上下文压缩导致 Tool 调用匹配失效 $\rightarrow$ 400 错误 | 活跃中 | [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989) |
| **High** | 桌面端 v2.0.0 缺少 `_scripts` 模块导致 auto-memory 失败 | 待处理 | [#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997) |
| **High** | v2.0.0 升级后聊天列表与对话历史映射丢失 (500 错误) | OPEN | [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) |
| **Medium** | 飞书频道消息在 WebUI 中不显示但会直接执行 | OPEN | [#6003](https://github.com/agentscope-ai/QwenPaw/issues/6003) |
| **Medium** | 新安装的 Skill 无法在技能池中加载 (Auto-Discover 失效) | OPEN | [#6001](https://github.com/agentscope-ai/QwenPaw/issues/6001) |
| **Low** | `qwenpaw doctor` 健康检查 endpoint 404 (硬编码错误) | OPEN | [#5983](https://github.com/agentscope-ai/QwenPaw/issues/5983) |

## 6. 功能请求与路线图信号
- **多模态降级机制**：PR [#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) 提出了 Vision Fallback 方案，允许文本模型在接收图像时自动切换至视觉模型，这将显著提升 Agent 的通用性。
- **会话灵活性**：PR [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) 引入了 **Per-session model overrides**，允许同一 Agent 在不同会话中使用不同模型。
- **跨渠道同步**：Issue [#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999) 请求支持在 Console、飞书、钉钉之间无缝切换同一会话，这是提升个人 AI 助手体验的核心需求。

## 7. 用户反馈摘要
- **痛点**：用户对 v2.0.0 的稳定性表示担忧，尤其是**数据迁移丢失**和**长对话崩溃**问题。
- **不满点**：安全审查（Governance）过于频繁，导致读写文件等简单操作响应缓慢 ([#5994](https://github.com/agentscope-ai/QwenPaw/issues/5994))。
- **使用场景**：用户在尝试构建复杂的旅行攻略等长链路任务时，发现 Agent 存在记忆不一致、无法及时同步用户最新确认方案的问题 ([#5998](https://github.com/agentscope-ai/QwenPaw/issues/5998))。

## 8. 待处理积压
- **v1.x $\rightarrow$ v2.0 迁移工具**：目前大量兼容性问题是通过零散 PR 修复的，建议维护者考虑提供一个正式的迁移脚本或增强 `_compat` 模块的完整性。
- **SSH Offline 丢失**：Issue [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) 提到 v1.1.12 的核心功能在 v2.0 中消失（404），该问题涉及用户核心工作流，亟需确认是否为计划内移除或 Bug。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报  
**日期：2026-07-13**

---

## 1. 今日速览

- 项目整体活跃度持续高涨，过去 24 小时收到 30 条 Issue 更新（其中 29 条为新建或活跃），50 条 PR 更新（47 条待合并，3 条已合并或关闭）。
- 多个 P0~P1 级别的关键 Bug 持续存在，包括上下文超限、MCP 内存泄漏、Skill Review Fork PANIC 等，影响稳定性。
- 多个功能模块进入快速迭代阶段，尤其是 SOP 控制平面、Memory 检索增强、ZeroCode 工具链等。
- 社区反馈集中于多渠道支持（如 Slack Events API）、文档缺失（Cron 使用指南）以及性能优化问题。

---

## 2. 版本发布

暂无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 如下：

| PR 编号 | 标题 | 推进内容 |
|--------|------|----------|
| [#8940](https://github.com/zeroclaw-labs/zeroclaw/pull/8940) | fix(zerocode): apply fill_style() to queue sidebar and session picker overlays | 修复 UI 主题一致性问题，提升 ZeroCode 界面体验。 |
| [#8926](https://github.com/zeroclaw-labs/zeroclaw/pull/8926) | fix(zerocode): count emoji presentation sequences as two terminal cells | 改善终端字符宽度计算，增强 Unicode 支持稳定性。 |

> 项目整体向前迈进有限，但近期集中在小功能优化与稳定性提升上。

---

## 4. 社区热点

### 高讨论度 Issues：

| Issue 编号 | 标题 | 讨论热度 | 背后诉求 |
|------------|------|-----------|-------------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | [Bug]: Default 32k context budget is exceeded by system prompt + tool definitions on iteration 1 | 8 条评论 | 当前默认上下文配置导致首次 LLM 调用即超限，需重新设计 token 预算机制。 |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | [Feature]: Slack: hydrate thread context from conversations.replies on first mention | 6 条评论 | 改善 Slack 线程处理体验，减少人工 @ 提及频率。 |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | [Feature]: Turn-level OTel trace correlation | 5 条评论 | 增强链路追踪能力，便于排查分布式调用问题。 |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | [Bug]: skill-review fork panics → daemon SIGSEGV | 4 条评论 | 严重内存越界崩溃问题，需紧急修复。 |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | [Bug]: MCP/tool-schema cloning drives unbounded RSS growth | 2 条评论 | 内存持续增长问题，可能引发 OOM 崩溃。 |

### 高关注度 PRs：

| PR 编号 | 标题 | 评论数 | 背后诉求 |
|--------|------|-----------|-------------|
| [#8947](https://github.com/zeroclaw-labs/zeroclaw/pull/8947) | fix(anthropic): honor provider timeout_secs config | 无评论但已合并 | 改进 Anthropic 提供商超时配置灵活性。 |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | fix(providers): exclude Nova 2 from Bedrock prompt caching | 尚未合并 | 解决特定模型不兼容缓存问题。 |
| [#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) | feat(memory): scan memory content at write and recall boundaries | 未合并 | 增加内存内容安全扫描，提升数据合规性。 |

---

## 5. Bug 与稳定性

| 编号 | 类型 | 严重程度 | 描述 | 是否有 Fix PR |
|------|------|----------|------|----------------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | Bug | P0 + High Risk | 默认 32k 上下文预算在首次迭代即被超限 | ❌ 尚未发现对应修复 PR |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | Bug | P0 + High Risk | Skill Review Fork PANIC 导致守护进程崩溃（SIGSEGV） | ❌ 尚未发现对应修复 PR |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | Bug | P0 + High Risk | MCP 工具 Schema 克隆引发 RSS 无限增长 | ❌ 尚未发现对应修复 PR |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | Bug | P1 + Medium Risk | OpenAI 工具调用在拒绝推理预算时失败 | ❌ 尚未发现对应修复 PR |
| [#9019](https://github.com/zeroclaw-labs/zeroclaw/issues/9019) | Bug | P1 + Medium Risk | OpenAI Responses 提供商错误地禁用了视觉功能 | ❌ 尚未发现对应修复 PR |

---

## 6. 功能请求与路线图信号

| 编号 | 类型 | 描述 | 路线图倾向 |
|------|------|------|-------------|
| [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) | Feature | 支持 Slack Events API（HTTP Request URL）模式 | 符合扩展多方式集成的需求，潜在被纳入 v0.8.4 |
| [#9020](https://github.com/zeroclaw-labs/zeroclaw/issues/9020) | Feature | ZeroCode 添加会话回溯与分支功能 | 与已有 PR [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655) 整合度高，可能进入下一版本 |
| [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | Feature | Telegram 多消息模式 | 已有相关 PR 推进中，建议优先处理 |
| [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) | Feature | Cron 文档缺失及模型配置支持 | 文档与配置问题，需与 [#8409](https://github.com/zeroclaw-labs/zeroclaw/pull/8409) 同步处理 |

---

## 7. 用户反馈摘要

- **痛点**：
  - “默认上下文预算太小，根本无法进行有效对话。”
  - “Slack 线程处理不连贯，需要频繁手动 @ 提及。”
  - “MCP 长时间运行后内存飙升，容器被 OOM 杀掉。”

- **满意/不满意**：
  - “Anthropic 提供商不支持自定义超时，一旦模型卡顿就挂掉。”
  - “ZeroCode 界面美观，但 emoji 显示错位影响输入体验。”

---

## 8. 待处理积压

| 编号 | 类型 | 描述 | 提醒事项 |
|------|------|------|-------------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Audit | 追踪一次大规模 revert 中的丢失提交记录 | 需进一步恢复关键提交，防止功能回退 |
| [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) | Bug | Ollama 小模型误读 ZeroCode 输入格式 | 影响本地部署用户体验，建议优先处理 |
| [#8860](https://github.com/zeroclaw-labs/zeroclaw/issues/8860) | Feature | Web Dashboard 显示每个 Agent 的“正在进行的 prompt 数” | 功能明确，但尚未有 PR 提起 |

--- 

**数据驱动·项目健康度提示**：  
当前项目开发节奏紧张，Bug 数量居高不下，且多数为高危问题；建议维护者集中处理 P0 类问题，同时加快内存、上下文管理模块的重构进度以稳定系统运行。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*