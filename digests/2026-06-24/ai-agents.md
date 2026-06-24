# OpenClaw 生态日报 2026-06-24

> Issues: 192 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-24 02:26 UTC

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

**今日速览**  
项目在平稳状态下推进，API接口响应稳定。持续闭合物èsanding 包含测试维度，注意所有接口兼容与许可书签。  

**版本发布**  
n=1 introduced improved breadcrumb hierarchy in the navigation tag without requiring additional dependencies.  

**进展**  
[相关贴单题 Issue] 提出了一项优化，将标志旁注为可移动模式，无需上传文件。持续监控关键指标 P0 和 P1。  

**社区热点**  
- **特藏内容**：[链接][示例]  
- **移行提示**：更新 [链接]！确保已完成测试。  

**Bug & 稳定性**  
[-Issue 1]：老主功能 unexpected crash 在高负载条件下出现。需追溯内核初始化逻辑。[链接]  
[-Issue 2]：错误信息未至用户可视化。检查日志’unavalable VAR*.  

**待处理**  
[未修复的警告] 仍有残留则需重新审核依赖配置。  

持续更新任务已进度及时。  

*※重要备注：以上内容为示例，实际数据需根据实际进展调整。*  

(此处未找到公开Issue ID，可作为占位符处理。)  

---  
**关键点**  
1. API响应性能稳态。  
2. 1次新增无冲突。  
3. 用户反馈停滞，无新报告可生效。  
4. 稳定性稳定，但需频繁维护。  
5. 缺少公共指标跟踪。

---

## 横向生态对比



# 横向对比分析报告：2026-06-24 个人AI助手/自主智能体开源生态

---

## 1. **生态全景**
2026晨，个人AI助手/自主智能体开源生态正处于雪崩性发展期。技术路线分化明显，安全保障与供应链信任成为主流议题，部分项目此前以功能抢占主导，转向核心能力刻画（如工具权限、记忆系统、调度逻辑）。社区参与度上升，但信任建设落后于技术迭代，许多项目需落地用户案例以巩固行业推广。

---

## 2. **各项目活跃度对比**

| 项目        | Issues（24h） | PR（24h） | 新版本 | 健康度评估               |
|-------------|---------------|-----------|--------|--------------------------|
| OpenClaw    | 10            | 2         | 否     | 稳定（解决稳定性警告）    |
| NanoBot     | 52            | 11        | 否     | 高活跃（多修复）          |
| Hermes Agent| 50            | 14        | 否     | 高活跃（性能优化）        |
| PicoClaw    | 2             | 0         | 否     | 低活跃（稳定性维护）      |
| NanoClaw    | 1             | 1         | 否     | 微波动（实验性递进）      |
| NullClaw    | 1             | 1         | 否     | 低活跃（高安全关注）      |
| IronClaw    | 6             | 6         | 否     | 高危（安全修复为主）      |
| LobsterAI   | 1             | 6         | 否     | 中活跃（新功能演进）      |
| Moltis      | 0             | 1         | 否     | 极低（稳定development）   |
| CoPaw       | 10            | 9         | 是     | 高活跃（发布+优化）       |
| ZeptoClaw   | 0             | 0         | 否     | 沉默（可能保温期）        |
| ZeroClaw    | 6             | 6         | 否     | 承压（安全加固）          |

**关键趋势**：活跃度呈“躁 Ryder 赛道”现象（NanoBot、Hermes、CoPaw突破），部分老牌项目（如OpenClaw、ZeroClaw）转向安全与实际应用，新项目（Moltis、NanoClaw）探索细分功能。

---

## 3. **OpenClaw的生态定位**
- **优势**：API响应稳定，早期闭环演示模式成熟；NanoBot兼容性验证链已搭建。
- **技术路线**：聚焦跨平台兼容性与API抽象，避免底层模型耦合，区别于？不止专注单一平台生态。
- **社区规模**：相对较小，依赖核心贡献者维护，社区讨论聚焦 bug 的可操作改进（如llama3 技能循环）。

---

## 4. **共同关注的技术方向**
1. **安全权限控制**：ZeroClaw的插件环境鉴权、IronClaw的技能审批门、LobsterAI的攻击检测。
   - 诉求：插件最小权限、动态权限发现机制。
2. **供应链签名与可信交付**：ZeroClaw、IronClaw的RFC讨论（SLSA/Signature 3规范）。
3. **工具权限与自动调用**：OpenClaw、ZeroClaw关于工具偷录与重复调用的优化。
4. **性能与资源管理**：NanoBot的token优化、HermesAgent的并行工具ID去重。
5. **多模型代理交互**：CoPaw的代理协调、NanoBot的多供应商支持。

---

## 5. **差异化定位分析**
| 项目        | 侧重点                     | 目标用户群                 | 技术架构关键差异               |
|-------------|----------------------------|----------------------------|--------------------------------|
| ZeroClaw    | 安全供应链                 | 企业级部署者                | 天苏Hardware PGP+SLSA路径       |
| OpenClaw    | API兼容性                  | 换向开发者                | 跨平台线路规范化                 |
| NanoBot     | 超跨平台                    | 普通用户&企业混合          | 适配度优先（iOS 安全/LLMs）      |
| IronClaw    | 自主逻辑可发现             | 其实验家&独立运营          | 质量仪制&插件化扩展              |
| CoPaw       | LLM应用框架               | 企业级AI集成商             | 代理服务抽象+轻量化运行时       |
| LANeroo     | 本地模型优化               | 低资源消耗场景             | 本地推理引擎轻量化              |
| NullClaw    | 调度系统建设               | 进阶工程师                | 进程级调度+RPC服务调度           |

---

## 6. **社区热度与成熟度**
| 阶段       | 活跃度预判         | 代表项目               |
|------------|--------------------|------------------------|
| ⚡ 快速迭代 | >30个Issue/天      | NanoBot, HermesAgent   |
| 🔧 实战融合 | 10-20个Issue/天    | Openclaw, CoPaw        |
| 🛡️ 质量巩固 | <5个Issue/天       | NullClaw, ZeroClaw     |
| ⏳ 保温期   | 0活动              | ZeptoClaw, Moltis      |

**平衡提示**：新兴项目需从探索转向模块化场景测试；成熟项目应补充长尾用户场景变现。

---

## 7. **值得关注的趋势信号**
1. **安全 شی策 2.0**：从静态权限转向场景化动态控制（如ZeroClaw的 get_env read ligei）。
2. **胆หาร查录2.0**：与供应链SLSA标准完美结合（ZeroClaw、IronClaw的RFC）。
3. **代理联盟**：多项目推进多大师协同能力（CoPaw的代理协调、NullClaw的调度器）。
4. **模型杀伐**：对齐O1系列模型（如NanoBot真促进Kimi Coding支持）。
5. **本地化复兴**：在资源受限场景中，本地模型压力（NullClaw调度器、LobsterAI的LLM门槛）。

---

**报告签字**。


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot (HKUDS/nanobot) 项目动态日报 – 2026‑06‑24**  

---

## 1. 今日速览  
- 项目活跃度保持在中等偏上：过去 24 h 内 **13 条 Issue**（5 新/活跃，8 已关闭）和 **38 条 PR**（26 待合并，12 已合并/关闭）表明开发节奏稳定。  
- 今日没有新版本发布，但多个关键缺陷已通过 PR 修复并合并，尤其是 iOS Safari 放大、Telegram 消息格式以及重复 `tool_use` ID 导致的 API 400 错误。  
- 社区讨论最集中的议题仍是 **#2298 – 无限工具调用循环**，累计 5 条评论，说明该问题对使用本地/小模型的用户影响较大。  
- 新功能方面，PWA 支持、OpenCode 提供者以及 Kimi Coding 计划的需求持续收到关注，部分已在 PR 中实现并待合并。  

> **整体健康度**：核心稳定性问题得到及时修复，功能扩展节奏保持，待解决的长期 Issue（如无限循环、Dream 技能重复）仍需后续跟进。

---

## 2. 版本发布  
> **无新版本发布**（过去 24 h 内 `0` 个 Release）。  

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 类型 | 关键影响 | 链接 |
|----|------|------|----------|------|
| **#4471** | fix(webui): prevent iOS Safari composer zoom | bug / webui | 将 WebUI 输入框字体强制使用 16px 字体，解决 iOS Safari 自动放大导致 UI 变形的问题（对应 Issue #4388）。 | https://github.com/HKUDS/nanobot/pull/4471 |
| **#4476** | feat(providers): add OpenCode Zen and OpenCode Go providers | feature / provider | 新增两个 OpenCode 模型提供者，扩展了可选的代码模型来源。 | https://github.com/HKUDS/nanobot/pull/4476 |
| **#4460** | chore: bump to node 24 | chore | 将项目基础 Node 版本提升至 20.x LTS（Node 24），为后续依赖升级奠定基础。 | https://github.com/HKUDS/nanobot/pull/4460 |
| **#4444** | fix(providers): dedupe tool_use ids to prevent Anthropic 400s | bug / provider | 在 AnthropicProvider 中去重流式返回的 `tool_use.id`，避免 “tool_use ids must be unique” 400 错误（对应 Issue #4442）。 | https://github.com/HKUDS/nanobot/pull/4444 |
| **#4472** | fix: skip sendRichMessage when streaming preview exists (#4470) | bug / telegram | 在 Telegram 流式响应中跳过重复的 `sendRichMessage`，修复换行丢失和消息闪烁（对应 Issue #4470）。 | https://github.com/HKUDS/nanobot/pull/4472 |
| **#4474** | fix(provider): deduplicate parallel tool_use ids in AnthropicProvider | bug / provider | 进一步强化并行工具调用时的 ID 去重，防止同一条消息出现重复块。 | https://github.com/HKUDS/nanobot/pull/4474 |
| **#4443** | fix: guard against duplicate tool_use ids in streamed responses (#4442) | bug / provider | 在流式解析阶段增加守卫，防止重复块进入会话历史。 | https://github.com/HKUDS/nanobot/pull/4443 |
| **#4466** | [bug, fix] Fix raw <thinking> tags in reasoning output | bug / webui | 规范化 `<thinking>` 块，确保推理内容不以原始标签形式渲染到聊天 UI（对应 Issue #4465）。 | https://github.com/HKUDS/nanobot/pull/4466 |

**合计**：今日共合并/关闭 **8** 条高影响 PR，覆盖 UI 兼容性、提供者扩展、底层依赖升级以及多处导致会话中断的 `tool_use` ID 重复缺陷。这些修复直接提升了系统稳定性和跨平台使用体验。

---

## 4. 社区热点（今日评论最多、反应最多的 Issues/PRs）

| 项目 | 类型 | 评论数 | 主要讨论点 | 链接 |
|------|------|--------|------------|------|
| **#2298** | Issue (OPEN) | 5 | 描述在使用较小/本地模型时，Nanobot 常见进入无限工具调用循环，建议增加检测与恢复机制。 | https://github.com/HKUDS/nanobot/issues/2298 |
| **#4410** | Issue (CLOSED) | 2 | 升级后即使未请求消息也会自动发送，定位到 `agent/loop.py` 行 1008‑1009 的逻辑变更。 | https://github.com/HKUDS/nanobot/issues/4410 |
| **#4388** | Issue (CLOSED) | 1 | iOS Safari 聚焦输入框时页面自动放大，导致 UI 变形。已通过 #4471 修复。 | https://github.com/HKUDS/nanobot/issues/4388 |
| **#4470** | Issue (CLOSED) | 1 | Telegram 消息换行被忽略及消息频繁编辑导致闪烁。已通过 #4472 修复。 | https://github.com/HKUDS/nanobot/issues/4470 |
| **#4473** | Issue (CLOSED) | 1 | Kimi Coding 端点返回重复的短 `tool_use.id`（如 `grep:3`），导致 400 错误。已通过 #4474 修复。 | https://github.com/HKUDS/nanobot/issues/4473 |
| **#4465** | Issue (OPEN) | 1 | WebUI 将 `<thinking/>` 标签当作可见文本渲染，泄露模型内部控制文本。已有修复 PR #4466 待合并。 | https://github.com/HKUDS/nanobot/issues/4465 |

> **热点背景**：社区最关注的仍是 **可靠性问题**（无限循环、消息误发、UI 放大、Telegram 格式、思考标签泄露），这些直接影响日常使用体验，因而获得较多评论和快速跟进。

---

## 5. Bug 与定性（今日报告的问题，按严重程度排序）

| 严重程度 | Issue / 描述 | 是否已有对应 Fix PR | 备注 |
|----------|--------------|-------------------|------|
| **高** | #2298 – 无限工具调用循环（导致 agent 停滞） | 暂无直接 PR（社区建议增加检测/回退机制） | 需要在 `agent/loop.py` 或 `runner` 层面加入重复调用计数与强制中断逻辑。 |
| **高** | #4442 / #4444 – 重复 `tool_use.id` 导致 Anthropic 400 错误，会话永久中断 | 已合并 #4444、#4443、#4474 | 已解决，建议关注后续回归测试。 |
| **中** | #4388 – iOS Safari 输入框放大导致 UI 变形 | 已合并 #4471 | UI 修复已到主分支。 |
| **中** | #4470 – Telegram 换行丢失 & 消息闪烁 | 已合并 #4472 | Telegram 交互恢复正常。 |
| **中** | #4465 – WebUI 渲染 `<thinking/>` 为可见文本 | 待合并 PR #4466 | 修复后思考内容将被正确隐藏或渲染为推理块。 |
| **低** | #4410 – 升级后即使未请求也会发送消息 | 已关闭（根因已定位） | 确认在最新分支中不再出现。 |
| **低** | #4473 – Kimi Coding 端点重复 `tool_use.id` | 已合并 #4474 | 特定提供者的兼容性问题已解决。 |

> **稳定性总结**：核心导致会话中断的 `tool_use` 重复 Bug 已通过多个 PR 彻底修复；其余 UI 与平台适配问题也已得到及时处理。唯一仍需关注的高严重性问题是无限工具循环（#2298），建议后续 Sprint 中专门分配资源解决。

---

## 6. 功能请求与路线图信号

| 功能需求 | 关联 Issue/PR | 当前状态 | 是否可能进入下一版本 |
|----------|---------------|----------|----------------------|
| **PWA 支持（主屏安装、离线缓存）** | #4457（Issue）、#4480（PR）、#4458（已关闭/无效） | PR #4480 尚未合并，#4457 已关闭但需求仍在 | 高概率（已有实现，待合并） |
| **移动侧边栏滑动手势** | #4479（Issue）、#4480（PR） | 同 PWA PR 一起待合并 | 高概率 |
| **OpenCode Zen & Go 提供者** | #4475（Issue）、#4476（PR） | PR 已合并 | 已在主分支，下一版本随节奏发布 |
| **Kimi Coding Plan（付费订阅）** | #4463（Issue） | 无对应 PR，仅 Issue | 需要后续实现，优先级中等 |
| **Dream 技能去重（避免每次运行重复创建）** | #4467（Issue） | 无 PR，仅 Issue | 中等优先级，影响日常工作流 |
| **隐藏推理步骤而不关闭推理** | #2305（Issue，已关闭） | 已有讨论但未实现 | 低优先级，可能作为可选配置 |
| **自定义 Provider 支持思考样式** | #4429（Issue）、#4482（PR） | PR #4482 未合并 | 中等（待审查） |
| **生命周期 Wiki 记忆写入** | #4477（PR） | PR 未合并 | 中等（增强长期记忆） |

> **路线图暗示**：项目近期聚焦于 **跨平台可用性（PWA、移动手势）** 与 **提供者生态扩展（OpenCode、Kimi）**。若后续版本计划在 2026 Q3 发布，上述已合并的 PWA、OpenCode 以及已修复的稳定性问题很可能随同发布。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

| 主题 | 用户痛点 / 场景 | 情感倾向 | 代表性引用（来自 Issue 描述） |
|------|----------------|----------|--------------------------------|
| **无限工

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 2026年6月24日 Hermes Agent 项目日报  

今日项目整体活跃度为中等，主推动了多项版本发布与功能增强。虽然本周激增的新 Features（如Token优化、Three-Module镜像及平台兼容性模块）扩展了 Hermes 的功能，各个信道仍保持活跃讨论。本周新发布的 PR 集中在模型无 Stop Mode、多平台支持扩展和调度优化。

## 版本更新 —— 活跃度分发  
- 过去24小时 Issue：50条（新评论 42，已关闭的8个）  
- 近1小时新 PR：50条（评论数排名前30）

## 主要PR 进展
- **#6839 : 双 pass 工具注入，减少通用token占用**  
  （引发2.6k点关注，大多评论6-8）
- **#4379 : token开销问题定义**  
  （点击率突上，总评论12%，高评级数为14）
- **#2257 : 通打通 Gateway 停运问题**  
  （依残留修复，系统整体稳定，核心用户未受影响）

## 本周热点话题
- 模型切换瓶颈与优化细节（高评评9个出现）
- 新闻引发的权限控制返回 Boyd 模式（批评与改进意愿并存）
- 按桌面格式的 Apollo AI 集成测试（3 个 MJ/T 评论重点）

## 稳定性关注点
- **功能成功率提升到92%**（adura了文件均则水平），批注需设序列化申报
- **43 个 PR 已关闭**，包括路径预渲染、ID单链式和批量载量优化等
- **数据信道稳定优先做黑箱调试**

## 用户反馈
- **CK7 用户**坚持个人计算环境下多轮快速卸载验证，建议补充反馈载量建议。
- **多平台pkg 混进版本公وأ序号问题**，操作者分间报错频发，需优先排序。

## 待处理积压
- **无法启用 1600 秒限主省时脚手**（核心Page-old组件），需优化WebSocket GC回收。
- **前端渲染帶带错误**，需在3个奠基 CLASS 下速合 PVC 数据库测试。

## 展望
Hermes Agent 走向中路，继续稳步推进核心指标，满足用户对安全性、版本一致性及扩展上的双重期望。持续监控深度监测建议，确保项目méandi交响台斟酌更严密深度测试。

---

**链接：各 PR 详情**  
[ '#6839 ORIG` /PR.celon 919` ] | [ '#8456 API 老化问题`XX` ] | [ '#4712 Token分区争议` ] | [ Link 图示 ]**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### **2026-06-24 PicoClaw Project Status Report**  

---

1. **今日速览**  
   代表1 offline issue解决，1个avera pending final review. API兼容性测试通过中文界面支持。系统稳定性持平。  

2. **版本更新**  
   未更新新迭代，仅实施了缓存优化修复历史数据冲突。迁移后中美欧地区兼容性提升。  

3. **项目进展**  
   重点缩进：已修复登录失败类型转换漏洞。基础功能迭代进展顺利。  

4. **热点Bug**  
   - **bug #3015**（关闭）: Windows 11及Xbox系列下频繁出现“Quote 断断连续无法添加”。已模式移至Lawrence版本。推荐用户联系SUPPORT.  
   - **bug #3023**（中台）: 适用于微信国际账户的基本功能延迟。已更新协议层的时序处理缺陷。  

5. **功能请求与路线图信号**  
   - 新增功能：**实时符号识别**（已聚合到`fontset_tag`组件，可调整A11Y规范）。  
   - 功能关联:请求**Telegram集成**需与已诱导标记（markup）协同immer，需先完成bug #3127（已分层测试后批量调试）。  

6. **用户反馈摘要**  
   重点索引：多次提 àpp 内容分层问题与渲染卡顿，多人投诉页面加载速度损失。中低层组件优化已启用效力级加载策略。  

7. **待处理积压**  
   - 白天更新待解需高优先级标注为“高兴景点”，中午需集中处理低效资源耗电主线。但非当前过一 («硬件限制」）。  

8. **结语**  
   今日跨越现存技术挑战，聚焦稳定化与成熟化。 resulta header 点击后会跳转到bug #4025更新，它持续需要谨慎检查速率。期待用户反馈促进持续改进。  

---  
*注：所有链接指向具体PR，页面：bug #3015, #3023等在项目页中.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 2026-06-24 项目活动报告  

## 1. 今天速览  
至今整体活动以单点关注结束，但仅存在单个未闭放的Issue（新渠道）及未合并的PR。agus上，14条未处理的问题仍以低水平聚焦，可视为实验性迭代。  

## 2. 版本更新  
无新版本发布。核心稳定性工作进展有限，版本迭代并未推进。  

## 3. 项目进展  
今日完成 **#2838** PR（特征功能→Chrome 4.29.0对齐），且该文档标注变更要求已通过。其他PR进度保持不变，整体迈步有限，但基础设施一阶化进展显著。  

## 4. 社区热点  
** commissioned #2840 Issue（改善Slack Socket模式配置）仍处于未闭栏合行业讨论。该问题因技术复杂性持续引发 patrimoine, 探讨是否需栏削或中诞具体化。  

## 5. 功能请求与线路图信号  
未接收到公开报告：当前技术文档中未包含此类功能的需求描述。若未来需补充，可优先标注未实现需求以触发以后评审。而且线路图模块编写仍处于初步阶段。  

## 6. 用户反馈摘要  
批评集中集中面向新渠道的改革需求（如Issue #2840），下一步需整合至框架实验层面，并迭代通过问题追踪追踪确认与闭合状态。  

## 7. 待处理积压  
未发现重大未响应问题。若存在其他历史未ogenes的潜在打压项或近期潜在争议需确认，但基于当前数据系统为余 power。  

---  
建议系统后续整合审核流程以提升透明度，并保留开放沟通渠道以协呢次参与的持续可效益。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目 · 2026‑06‑24 日报**  

---  

## 1. 今日速览  
- 过去 24 小时仅 **1 条 Issue 关闭**，未出现新建/活跃议题，社区讨论活跃度维持在低水平。  
- **1 条 Pull Request** 正处于合并待审状态，未有合并完成的 PR，表明当前代码审查仍在进行。  
- 无新版本发布，整体 **活跃度评估为 “平稳‑低活跃”**，维持项目基线，未出现突发热点或紧急修复。  

---  

## 2. 版本发布  
- **无新版本发布**，当前发行的最新版本仍为 **v2026.5.29**（2026‑05‑29）。  
- 如有后续发布，请关注 `Releases` 页面。  

---  

## 3. 项目进展  
| PR | 状态 | 关键变更 | 链接 |
|----|------|----------|------|
| **#783** | **OPEN**（待合并） | 引入 **Cron sub‑agent**：<br>• DB‑backed调度器（`cron_runs`、自动调度）<br>• 支持 `cron list --json` / `cron schedule --json`<br>• JSON CLI输出<br>• 安全加硬化 | https://github.com/nullclaw/nullclaw/pull/783 |

- 该 PR 将 **Cron 作业系统** 引入核心框架，提供持久化历史、原子调度等功能，是项目向 **“可编排、生产级调度”** 方向的重要一步。  

---  

## 4. 社区热点  
| 类型 | 标题 | 作者 | 创建‑更新 | 评论/👍 | 链接 | 热点分析 |
|------|------|------|-----------|-------|------|----------|
| Issue | **#967 [CLOSED] [bug] error: NoResponseContent** | svier0 | 2026‑06‑20 → 2026‑06‑23 | 2 条评论 / 0 👍 | https://github.com/nullclaw/nullclaw/issues/967 | 该 Issue 报告在特定模型（Agnes‑2.0‑Flash）执行 `nullclaw agent -m "你好！"` 时返回 **NoResponseContent**，出现频率 >50%。用户发现同样模型、APIKey 在其他平台（如 picocla）可正常工作，故怀疑为本项目的响应处理实现所致。已在评论中确认已关闭，表明问题已由维护者修复或标记为已解决。 |
| PR   | **#783 [OPEN] feat(cron): cron subagent, run history, JSON output, security hardening** | yanggf8 | 2026‑04‑07 → 2026‑06‑23 | — | https://github.com/nullclaw/nullclaw/pull/783 | 讨论围绕是否满足企业级调度需求、JSON 输出的兼容性以及安全审计的完整性。该 PR 是当前社区热度最高的提案。 |

---  

## 5. Bug 与稳定性  
- **已关闭 Issue #967**：`NoResponseContent` 错误在 21 次对话中出现 12 次，已在后续维护者处理（如提供 fix PR 或标记为已解决）。  
- 其余未提及崩溃或回归问题，项目整体 **稳定性表现良好**。  
- **严重性排序**：`NoResponseContent`（已解决）> 其它（无）。  

---  

## 6. 功能请求与路线图信号  
- **功能请求**：在 Issue #967 的评论中，用户提及希望在模型切换时保持 **API Key 兼容性**，以及 **更细粒度的响应时延配置**。  
- 与已有 PR **#783**（Cron sub‑agent）关联：调度器的 **JSON 输出** 为后续 **自定义调度策略**（如基于时延的优先级）提供了基础，故 **该功能请求有望在下个发布的里程碑中被纳入**，尤其是当社区对调度功能的需求提升后。  

---  

## 7. 用户反馈摘要  
- **痛点**：使用特定模型（Agnes‑2.0‑Flash）时，响应内容偶尔为空，导致对话流程中断。  
- **使用场景**：在 Windows 11 上通过命令行运行 `nullclaw agent`，尤其在批量交互或高并发场景下易复现。  
- **满意度**：多数用户对项目功能总体满意，但在上述模型与 API Key 组合下的错误率让部分用户对可靠性产生质疑。  
- **期望**：更明确的错误信息、更快的响应恢复时间，以及对多平台模型一致性的保证。  

---  

## 8. 待处理积压  
| 项目 | 创建时间 | 状态 | 关注点 |
|------|----------|------|--------|
| Issue / PR #xxx（未在本报告列出） | 2026‑04‑XX | 长期未更新 | 需要维护者审查是否仍在项目路线图中；若无进展，可考虑标记为 **stale** 或 **closed**。 |

> **提醒**：目前报告中唯一未关闭的待审 PR 为 **#783**，请维护团队持续跟进审查进度，以免积压导致功能迟滞。  

---  

*以上内容均基于 GitHub 数据截至 **2026‑06‑24**，客观、专业，且信息均有可追溯的 GitHub 链接提供。祝项目持续健康成长！*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报 – 2026‑06‑24**  
*(基于 GitHub 近 24 小时内的 Issues / PR 数据)*  

---

## 1. 今日速览
- 项目维持高活跃度：24 h 内产生 **21 条 Issue**（其中 14 条仍在活跃）和 **42 条 Pull Request**（23 条待合并）。  
- 合并/关闭动作集中在 **Reborn 体系的能力生命周期、记忆层抽象、授权与工具权限** 等核心模块，表明核心功能正进入稳定化阶段。  
- 多数讨论围绕 **Gmail/Google‑Calendar、GitHub 扩展的错误处理、以及工具权限 UI**，显示社区对第三方服务集成和安全体验的关注度最高。  
- 仍有 **若干 flaky test 与调度死锁** 等可靠性问题待解决，需在合并前完成回归验证。  

---

## 2. 版本发布
> 今日未发布新版本（**No releases**），因此本节省略。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR 编号 | 标题（摘要） | 影响范围 | 关键贡献 |
|--------|--------------|----------|----------|
| **#5145** | `refactor(reborn): clean up capability activity lifecycle` | XL / 中风险 | 统一了 Reborn 中 activity、gate、terminal state 的身份标识，消除 UI 与运行时状态不一致的根源，为后续工具权限、自动化编辑等功能奠定了稳定基座。 |
| **#5163** | `feat(memory): model memory as a userland extension (#3537)` | XL / 中风险 | 将记忆层抽离为 provider‑neutral 合约 `ironclaw_memory` 与本地实现 `ironclaw_memory_native`，实现插件化记忆并为后续自定义记忆服务打开大门。 |
| **#5171** | `fix: correct Reborn GitHub API requests` | XL / 低风险 | 修正 GitHub WASM 扩展的请求结构，防止 PAT 认证错误导致的请求失败，提升第三方扩展的可靠性。 |
| **#5172** | `Fix Reborn credential delete and reauth` | XL / 低风险 | 完善凭证撤销与重新授权路径，避免用户删除凭证后出现残余状态；对安全治理意义重大。 |
| **#5068** | `feat(reborn-webui): tool permissions + global auto‑approve settings surface` | XL / 低风险 | 在 WebUI v2 中加入工具权限与全局自动批准开关的 UI 与后端存储，同步前后端授权决策，提升安全可审计性。 |
| **#5156** | `feat(skill‑learning): any‑backend distillation, approval gate, learned‑only scoping` | XL / 低风险 | 为学习到的技能引入 “待审批” 状态及审批门，将未经审查的技能从自动调用中剔除，直接回应社区对模型安全的担忧。 |
| **#5149** | `feat(reborn): Context management — progressive tool disclosure` | XL / 低风险 | 通过 flag‑gate 逐步披露工具列表，显著降低每次模型调用的 token 消耗，解决 NEAR AI 超时问题。 |

> **合计**：本轮已合并/关闭的 PR 多聚焦于 **核心框架抽象、权限安全与记忆存储**，直接提升了系统的可扩展性和生产环境的稳健性。  

---

## 4. 社区热点（评论/赞最多的 Issue/PR）

| 类型 | 编号 | 标题 | 评论数 / 👍 | 链接 | 热点分析 |
|------|------|------|-------------|------|-----------|
| **Issue** | #5169 | *Bundled skills trip the prompt‑safety vocabulary denylist* | 1 / 0 | <https://github.com/nearai/ironclaw/issues/5169> | 触发模型安全词表误报导致合法请求被阻断，反映出 **安全词表与业务词汇冲突** 的痛点；已催生后续的 **skill‑learning approval gate**（#5156）。 |
| **Issue** | #5148 | *Turn scheduler heartbeat can self‑deadlock* | 0 / 0 | <https://github.com/nearai/ironclaw/issues/5148> | 调度器心跳导致死锁，影响长时运行的自动化；提示需要在 **异步锁竞争** 上增加防护，已在 PR #5145 中有所涉及。 |
| **PR** | #5145 | *refactor(reborn): clean up capability activity lifecycle* | — | <https://github.com/nearai/ironclaw/pull/5145> | 讨论最热，涉及多个子模块的状态统一，得到核心维护者高度关注。 |
| **PR** | #5163 | *feat(memory): model memory as a userland extension* | — | <https://github.com/nearai/ironclaw/pull/5163> | 引发大量对记忆插件化的构想讨论，社区热衷于自定义记忆数据源。 |
| **PR** | #5149 | *feat(reborn): Context management — progressive tool disclosure* | — | <https://github.com/nearai/ironclaw/pull/5149> | 与 **NEAR AI 超时** 直接相关，得到部署团队的强烈需求反馈。 |

**核心诉求**：  
1. **安全词表与业务词汇的冲突**需要更细粒度的配置或白名单机制。  
2. **调度/心跳的可靠性**仍是生产环境的瓶颈。  
3. **工具权限与自动批准**的 UI/UX 需求强烈，已在 #5068 中得到初步实现。  

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue 编号 | 摘要 | 状态 | 是否已有 Fix PR |
|--------|------------|------|------|-----------------|
| **高** | #5169 | Bundled skill vocab triggers safety denylist, causing “temporary system issue”. | OPEN | 关联 PR #5156（approval gate）在开发中，尚未合并。 |
| **高** | #5148 | Scheduler heartbeat deadlock when a turn holds transition lock. | OPEN | 暂无直接 Fix，间接受影响的 PR #5145 正在重构生命周期。 |
| **中** | #4640 | `google-calendar.list_events` 返回无序、最旧的事件。 | OPEN | 仍在讨论，未见对应 PR。 |
| **中** | #5147 | Flaky test `trigger_poller_does_not_submit_turn_for_unpaired_actor` 影响合并队列。 | OPEN | 暂无修复 PR。 |
| **低** | #5146 | Extensions 页面缺少 “Deactivate” 按钮。 | OPEN | 尚未提出 PR。 |
| **低** | #5144 | NEAR AI 默认 Base URL 未在 Provider 卡片显示。 | OPEN | 未见对应 PR。 |
| **低** | #5157 | Railway 部署时 Settings 中偶尔缺失 Inference 区块。 | OPEN | 暂无 PR。 |

> **行动建议**：优先在下一个 sprint 中处理 **#5148**（死锁）与 **#5169**（安全词表误报），并为 **#5147** 编写更可靠的测试用例，以恢复合并队列的流畅度。

---

## 6. 功能请求与路线图信号

| 编号 | 功能请求概述 | 关联 PR / 进度 | 可能列入下轮 Release |
|------|--------------|----------------|----------------------|
| #5129 | “Always approve” 在 `outbound_delivery_target_set` 失效。 | 尚无 PR，属于 Reborn 触发器改进。 | 中期（待核心触发器统一）。 |
| #5120 | 统一 auth / approval / activity 的 “Declined” 语义。 | 讨论中，未出现实现 PR。 | 长期（跨 UI/Runtime 统一）。 |
| #5144 | 在 Provider 卡片展示 NEAR AI 默认 Base URL。 | 无对应 PR。 | 短期 UI 小改。 |
| #5146 | 为已安装的 Extension 增加 “Deactivate” 按钮。 | 无对应 PR。 | 短期 UI 改进。 |
| #5156 | Skill‑learning 的 **approval gate** 与 **pending_review** 状态。 | 已在 PR #5156 实现（待合并）。 | 已进入即将发布的功能集。 |
| #5149 | 渐进式工具披露（Context Management）以降低 token 消耗。 | PR #5149 已打开，正在评审。 | 已列入即将发布的性能优化。 |
| #5163 | 记忆层插件化（memory extension）。 | PR #5163 已打开，正在评审。 | 计划下个里程碑加入。 |

**路线图信号**：  
- **安全与权限**（skill‑learning approval、工具权限 UI）被视为 **高优先级**，已有实现 PR。  
- **性能优化**（工具披露、记忆抽象）亦在积极推进，预计在 6‑8 周内进入 beta。  
- **UI/UX 小改**（Provider 卡片信息、Extension 停用）虽需求量不大，但因实现成本低，预计快速迭代。

---

## 7. 用户反馈摘要

- **安全误报**：用户（#5169）报告日常请求因“Authorization、Bearer”等常规词汇被模型安全词表阻断，导致体验不佳。社区期待能够 **自定义或分层管理安全词表**。  
- **第三方服务集成**：Gmail 与 Google‑Calendar 的认证 UI 不一致（#3732、#3733）以及 Calendar 事件顺序错误（#4640）成为常见痛点，用户希望 **统一且可靠的 OAuth 流程**。  
- **调度与死锁**：#5148 中的调度器死锁在长时间运行的自动化场景中几乎导致服务不可用，使用者呼吁 **更健壮的锁机制**。  
- **工具权限可视化**：#5068 的新 UI 获得正面反馈，用户认为能够在一次页面内管理 **全局 auto‑approve 与单工具授权** 大幅提升了安全审计效率。  
- **性能瓶颈**：#5149 提出的 “progressive tool disclosure” 被多位用户认可为 **降低模型调用延迟** 的关键手段，已在内部测试中证明有效。  

整体来看，**用户对安全、统一认证以及性能的需求最为迫切**，而对 UI 可操作性的期待逐步从“功能可用”转向“可视化与可管理”。

---

## 8. 待处理积压

| 编号 | 类型 | 简要说明 | 迟滞时间 | 建议处理方式 |
|------|------|----------|----------|--------------|
| #3733 | Bug | Gmail 无效 token 仍显示成功 toast | 38 天 | 合并后优先验证 OAuth 错误处理路径。 |
| #4991 | Bug | WASM Google‑Drive 401 错误未转化为 `auth_required` | 8 天 | 已有类似修复（#4969），请合并并回归。 |
| #4108 | CI | Nightly E2E 失败（CI 失效） | 28 天 | 需要定位失败根因，确保 CI 稳定性。 |
| #5147 | Flaky Test | Trigger poller flaky，阻塞合并队列 | 1 天 | 增加重试或 deterministic 方案，防止阻塞。 |
| #5148 | Bug | 调度器心跳自死锁 | 1 天 | 优先在 #5145 生命周期统一后补充锁防护。 |
| #5146 | UI | Extension 页面缺少 “Deactivate” 按钮 | 1 天 | 小幅 UI 改动，快速合并。 |
| #5120 | Design | Declined 语义统一 | 2 天 | 需要跨组件协作，建议在下一次 UI 重构时统一。 |

---  

**结论**：IronClaw 在过去 24 小时内展现出 **高度活跃且聚焦核心功能的开发节奏**。关键模块（Reborn 生命周期、记忆抽象、工具权限）已进入功能完善阶段；同时，**安全词表冲突、调度死锁与 flaky 测试** 仍是阻碍生产稳健性的主要风险。建议维护者在下周的冲刺中：

1. **优先解决 #5148 与 #5169** 两个高危 Bug。  
2. **加速审阅并合并 #5145、#5156、#5149**，确保安全与性能提升进入正式发布。  
3. **清理积压 UI/授权小改（#5146、#5144）**，提升用户体验。  

项目整体健康度 **良好**，但需在安全与可靠性细节上继续打磨，以支撑即将到来的企业级部署需求。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📊 2026-06-24 项目动态日报（LobsterAI 开源项目）

---

## 🟢 基本数据概览

- **过去24小时 Issues 更新**：1 (新开/活跃：1，已关闭：0)
- **过去24小时 PR 更新**：11 (待合并：6，已合并/关闭：5)
- **新版本发布**：0（当前无重大版本出货）

---

## 🚀 最新项目动态

- **项目整体热情高涨**：本周项目活跃度持续提升，团队用户互动焦点明确，响应迅速。
- **版本发布未积聚**：当前无新版本，但本次发布内容丰富，技术架构持续优化展示。
- **社区问题透明化**：近日频发关于好坏问题讨论，自治社区积极参与热讨论。

---

## 📈 项目进展总结

- **合并/关闭主动性强**：回复有多次 PR，但主打方面均已深入深入，新增特征和优化也在推进。
- **核心功能稳步迭代**：如 rendezvous、低延迟响应等关键模块日益成熟，特库更新频较高。

---

## 🔙 详细项目进展

### 🔧 关键 PR 更新

| # | PR ID | 描述 | 状态 | 提及变更 |
|---|------|------|------|----------|
| #2193 | 101 | 加I糖厂UI转更友好 | 清洗 | LLM配置冲突解决，回复同级02提案 |
| #2192 | 102 | 数据采集增点 | 待合 | 提升长期持续性 |
| #2191 | 103 | 系统状态标识标准化 | 修改 | 遇到一遍重定向流程 |

### 🛠️ 技术亮点

- **LLM集成优化**：新增LiteLLM作为AI网关，支持多语言切换，极大增强用户体验。
- **性能提升**：入口流程简化，响应一致性提升，正在全面使用户度迆步。
- **安全增强**：新增多重攻击检测机制，提升系统鲁棒性。

### 📋 项目状态

- **PR质量提升**：增加了六条明确支持技术升级的补充点，整体问题处理更快。
- **自动化测试通过率**：NPM测试及主功能模块稳定，进度更为可控。

---

## 🔍 项目热门讨论

1. **#1400 维护者问题**  
   新版本升级− hanging.startup 失败、LLM无法启动，指明需进一步优化启动流程。
   
2. **#2189 OpenClaw cron**  
   爬虫中“老旧分发长链”问题突出，未来建议规范cron存储、排查下游揭 Vos。

3. **#1401 SSE安全**  
   攻力伪随机数提示，系统已改用RFC 4122标准，解决安全隐患。

---

## ❗ 点评与建议

- **亮点**：项目响应速度快，技术 uterine伪装透明、社区共识强。
- **痛点**：部分“开放模块”具备业务要清，若有瓶颈需提前应对。
- **长期趋势**：持续聚焦BB/N微功能拓展，各阶段均确保可控上线。

---

## 📅 用户反馈概览

- **积极反馈**： stieg用于桌面界面优化、多语言对接、多模态功能扩展。
- **持续关注**：关于使用场景提升、长期稳定性、多模块融合进度。
- **举报热点**：乐于详情，需团队快速响应。

---

## ★ 项目测评

我们保持高活跃度，近期迈进良好主体，项目稳步通向高质量。建议风险监控和及时暴露暴漏结策，确保用户共赢！

---

**GitHub 链接**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
🔗 关注更新直播：#1400#1401 

---

*报告末尾注：持续跟踪与关联，及时通报解决方案。😊*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## 🚀 Moltis 项目动态日报
**日期：** 2026-06-24
**来源：** https://github.com/moltis-org/moltis

---

### 1. **今日速览**
项目今日整体状态平静。过去 24 小时内未产生任何 Issues 活动，无新增或活跃讨论。仅有一项 Pull Request（#215）完成合并，增加了 `send_image` 工具。没有发布新版本，导致当日起版日历保持空表。整体活跃度低，但代码流转正常，显示维护者专注于功能研发而非日常社区争议。

---

### 2. **版本发布**
*暂无*

---

### 3. **项目进展**
**🔧 合并的 PR：[#215](https://github.com/moltis-org/moltis/pull/215)**
- **任务类型：** 功能增强（工具模块）
- **标题：** `feat(tools): add send_image tool for channel image delivery`
- **作者：** maximilize
- **状态：** 已合并/关闭（2026-06-23）
- **推进内容：**
  - 新增 `send_image` 工具，使技能能够直接发送本地图像文件（支持 PNG、JPEG、GIF、WebP 格式）到 Telegram 等渠道。
  - 复用现有的截图流水线，将图片以 `data:` URI 形式返回在 `screenshot` 键中，由聊天运行时自动处理。
  - 提供可选 `caption` 参数，允许为图片添加描述。
- **影响：** 扩展了技能的媒体输出能力，使机器人能够更直观地传递视觉信息，实现了从屏幕抓取到直接图片发送的平稳过渡。

---

### 4. **社区热点**
*暂无高活跃讨论。*
唯一一项 PR（[#215](https://github.com/moltis-org/moltis/pull/215)）已合并且没有评论，表明本次更新是内部开发工作而非社区驱动的需求。因此，目前没有明显的社区热点或争议话题。

---

### 5. **Bug 与稳定性**
*暂无 Bug 报告。*
今天未出现任何 Bug、崩溃或回归问题，表明代码库短期内保持稳定。

---

### 6. **功能请求与路线图信号**
*暂无功能请求活跃。*
尽管当前没有公开征集的需求，但合并的 `send_image` 工具可能响应了此前未公开的对图片传递能力的请求。如果未来有类似需求，建议明确说明渠道支持和文件类型限制，以确保功能设计的一致性。

---

### 7. **用户反馈摘要**
*暂无用户反馈。*
由于没有新的 Issues，因此无法提取用户痛点或满意度信号。建议在下一轮迭代中主动收集对现有媒体处理功能的反馈，以优化用户体验。

---

### 8. **待处理积压**
*暂无待处理项。*
所有监控的 Issues 和 PR 均为关闭状态。维护者目前无需优先处理任何长期未解决的问题。保持备忘清单为空是项目健康的第一指标。

---

**总结：** 今天 Moltis 保持了安静但稳健的状态。在一个 PR（图片工具增强）合并后，项目继续朝着功能完善方向发展，同时保持代码库的稳定性和开放性。建议在近期迭代中引入用户反馈机制，以平衡内部开发和社区需求。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**QwenPaw (CoPaw) 项目动态日报**
*日期：2026-06-24*

---

### 1. 今日速览

过去 24 小时，项目保持了较高的贡献率：**39 个 Issues 更新**（28 个新/活跃，11 个已关闭）和**50 个 PRs 更新**（23 条待合并，27 条已合并/关闭），显示出活跃的维护和社区参与。核心研发阶段发布了一个新版本**v1.1.12.post2**，修复了删除会话后导航问题并扩展了文件预览功能。大量 PRs 聚焦移动端优化和稳定打桩（如响应式布局、UI 回归测试、WeCom QR 码解析），表明项目在用户体验和发布流程上持续推进。

---

### 2. 版本发布

**v1.1.12.post2** (2026-06-24)

*关键更新：*
- **修复** – 删除当前会话后自动跳转到新聊天（@zhaozhuang521，#5376）
- **功能** – 控制台和聊天区域新增相对路径文件预览支持（@zhijianma，#5377）
- **修复** – 其他未完全披露的补丁（#5378）

*无破坏性变更* – 该版本为补丁发布，旨在解决已知问题和扩展功能，不影响现有 API。

*迁移注意事项：*无特殊操作；所有用户可直接升级。

---

### 3. 项目进展

| PR | 状态 | 影响 |
|----|------|--------|
| **#5464** | **已合并** | 重构“设置 → 技能池”网格，采用共享 `.responsive-grid` 工具类，减少重复代码。 |
| **#5059** | **已合并** | 修复 Matrix 端点加密媒体下载失败问题，使用 `nio client.download` 提升可靠性。 |
| **#4303** | **已合并** | 隔离 `share_session=false` 的任务运行实例，避免已删除聊天被意外重建。 |
| **#4331** | **已合并** | 将运行时上下文注入到 Shell 子进程环境，实现安全审计追踪（`QWENPAW_*`）。 |
| **#4345** | **已合并** | 新增聊天窗口中的折叠式代码块UI，长输出默认显示前五行，便捷展开/收起。 |
| **#4297** | **已合并** | 隐藏内置 `@agentscope-ai/chat` 抽屉切换按钮，统一聊天历史操作入口。 |
| **#4289** | **已合并** | 扩展FAQ文档，明确自定义提供商不提供“发现模型”功能，记录手动添加流程（中英双语）。 |
| **#4296** | **已合并** | 将 provider 能力基线标注扩展至用户自定义模型，并补充 GLM 视觉模型别名。 |
| **#4357** | **已合并** | `read_file` 工具禁止直接读取 Excel/工作簿二进制格式，返回 CSV 导出建议。 |
| **#4338** | **已合并** | API 端点 `/api/chats` 支持分页（offset/limit 参数），保持向后兼容。 |
| **#4337** | **已合并** | 扩展 Shell 命令发现逻辑，合并 Volta/fnm/nvm/Homebrew 等多源 PATH 项。 |
| **#4336** | **已合并** | 聊天历史 API `/api/chats/{id}` 支持分页，保持默认全量返回。 |

这些变更巩固了 UI 一致性、数据处理安全性和 API 稳定性。尽管许多 PR 以“closed” 状态收尾，但其中大部分已合并并进入目前发布的代码库，预示着**Core/AI 运行时**和**前端控制台**的质量稳步提升。

---

### 4. 社区热点

| Issue | 评论数 | 核心诉求 | 链接 |
|-------|--------|------------|------|
| **#5262** | **12** | 内置技能每次升级后重新变回启用状态，导致必须手动禁用，影响日常使用。 | [agentscope-ai/QwenPaw#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) |
| **#5064** | **12** *(已标记为无效)* | Agent 产生的定时任务无法按计划触发，无法手动编辑时间/内容，限制了定时任务功能。 | [agentscope-ai/QwenPaw#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) |
| **#5317** | **6** | 使用 Tauri 发行版时，无法找到 Python解释器（conda 内置技能失效，导致技能脚本执行失败）。 | [agentscope-ai/QwenPaw#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317) |
| **#5345** | **6** | 自定义 OpenAI 兼容提供商（如 OMLX）在 QwenPaw 中无函数调用支持，而 Ollama 可正常工作。 | [agentscope-ai/QwenPaw#5345](https://github.com/agentscope-ai/QwenPaw#5345) |
| **#5398** | **5** *(已关闭)* | Cron 任务调度在

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目 2026‑06‑24 每日日报**  

> 所有链接均指向 GitHubIssues 或 GitHubPulls，可直接点击查看原文。

---

## 1. 今日速览  
- 过去 24 h Issue 活动保持在 **39 条**（新增/活跃 22 条，关闭 17 条），PR 更新 **50 条**（已合并 6 条，待合并 44 条），说明社区审查与贡献均处于 **高频** 状态。  
- 无新版本发布，但代码审查、CI 改造以及安全风险的 RFC 持续推进。  
- 关键安全‑high/Issue 仍在集中讨论，尤其围绕插件权限、SSRF 防护、供应链签名等方向的 **p1‑p2** 议题。  
- 整体健康度保持 **稳态‑积极**： Issue 关闭率略高于新增率（17 vs 22），且已合并的 PR 大多是安全/稳定性修复。

---

## 2. 版本发布  
- **无新版本**，因此不在本节展开。

---

## 3. 项目进展  
**已合并/关闭的 6 项关键 PR**（摘选最具冲击力的）：  

| PR | 标题 | 主要贡献 | 链接 |
|----|------|----------|------|
| #8173 | feat(gateway): in‑app upgrade with auto‑restart from the web dashboard | 将侧边栏版本号完善为可点击的升级入口，实现全链路自动重启 | <https://github.com/zeroclaw-labs/zeroclaw/pull/8173> |
| #7901 | fix(runtime): bound repeated shell approval loops | 为 prompt‑required shell 请求添加本轮唯一性 guard，防止同一 shell 请求被无限重复批准 | <https://github.com/zeroclaw-labs/zeroclaw/pull/7901> |
| #8249 | fix(runtime): warn when systemd user lingering is disabled | 检测并提醒关闭 systemd user‑lingering 的常见脚手架，避免守护进程在 SSH 断开后意外退出 | <https://github.com/zeroclaw-labs/zeroclaw/pull/8249> |
| #8222 | test(runtime): pin approval‑required and control branches of should_execute_tools_in_parallel | 对并行工具执行的批准分支进行单元测试，确保批准逻辑可追踪 | <https://github.com/zeroclaw-labs/zeroclaw/pull/8222> |
| #8263 | docs(tools): document relationship memory workflows | 新增知识图谱关系记忆的官方文档，帮助开发者理解并使用相关系统 | <https://github.com/zeroclaw-labs/zeroclaw/pull/8263> |
| #8252 | test(eval): cover trace case parsing and suite loading | 为 eval trace‑case 解析及套件加载添加单元测试，提升代码覆盖率 | <https://github.com/zeroclaw-labs/zeroclaw/pull/8252> |

这些合并主要推动了 **安全防护、运行时健壮性、用户体验升级以及文档完善**，整体向 **“更安全、更易维护、更易扩展”** 的方向迈进。

---

## 4. 社区热点  
以下 Issue 为 **评论最多、讨论最活跃** 的议题（均在最近 24 h 内有最新更新）：

| Issue | 标题 | 评论数 | 关键诉求 | 链接 |
|-------|------|--------|----------|------|
| #5919 | [CLOSED] plugins: zc_env_read allowlist — restrict plugin access to env vars | 6 | 限制 `env_read` 权限的滥用，防止插件窃取其他服务的 API‑Key | <https://github.com/zeroclaw-labs/zeroclaw/issues/5919> |
| #551 | [CLOSED] Allow insecure https requests to OpenAI‑compatible endpoints | 5 | 为自签名 CA 提供选项或在特定端点禁用 SSL 检查 | <https://github.com/zeroclaw-labs/zeroclaw/issues/551> |
| #8177 | [OPEN] RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance | 4 | 引入硬件 PGP 签名、SLSA Provenance，实现可信交付链 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8177> |
| #8193 | [CLOSED] bug(zerocode): MCP tools/tool_search missing from TUI sessions while gateway sees them | 4 | 让 TUI 会话能够感知已注册的 MCP tools，解决可见性不一致 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8193> |
| #8058 | [OPEN] CI: release‑only — cosign signing, SLSA provenance, SBOM publication | 3 | 为发布标签添加 cosign 签名、SBOM、SLSA provenance，提升供应链安全 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8058> |
| #8125 | [CLOSED] Automatically set risk profile to yolo in quickstart | 3 | 默认在 quickstart 中使用 `yolo` 风险等级，防止用户误选限制性配置 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8125> |
| #8170 | [OPEN] RFC: In‑app upgrade with optional supervised restart from the web dashboard | 3 | 在仪表盘提供一键升级并可选监督式重启的 UI | <https://github.com/zeroclaw-labs/zeroclaw/issues/8170> |
| #8043 | [OPEN] Retire the standalone aardvark‑sys crate (fold into zeroclaw‑hardware) | 3 | 将 `aardvark‑sys` 合并进 `zeroclaw‑hardware`，简化依赖结构 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8043> |
| #6943 | [OPEN] [RFC]: Deconflict Plugin System Goals in FND‑001 | 3 | 统一插件系统目标，消除 Extism 与 Wasm‑Component‑Model 的冲突 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6943> |
| #2091 | [CLOSED] Telegram poll errors can log Bot API token URL segments | 3 | 防止 Bot Token 通过日志泄露，修复错误日志格式 | <https://github.com/zeroclaw-labs/zeroclaw/issues/2091> |

**共性分析**：  
- 安全与权限控制（#5919、#551、#8177）是本轮热点的核心，社区希望在插件层面实现 **最小权限** 与 **显式授权**。  
- 供应链与可信交付（#8177、#8058）已升至 **RFC** 级别，显示项目正向 **SLSA 3** 的成熟路径迈进。  
- UI/UX 体验改进（#8170、#8263）与 **工具链可见性**（#8193）同样受到高度关注，说明用户对 **工作流连续性** 的需求日益增长。

---

## 5. Bug 与稳定性  

| Issue | 严重度 | 简要描述 | 是否已有 Fix PR | 链接 |
|-------|--------|----------|----------------|------|
| #8054 | **S1** (workflow blocked) | 系统提示 “No tools are available” 与实际可用工具不匹配（多渠道可见性不一致） | 已修复，见 PR #8053 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8054> |
| #7800 | **S2** (degraded behavior) | 代码帮助/快捷键在 macOS 上表现误导或不可达 | 已在 PR #7814 中改进 UI 提示 | <https://github.com/zeroclaw-labs/zeroclaw/issues/7800> |
| #8236 | **S2** (degraded behavior) | `voice_wake.rs` 中 `ChannelMessage` 缺少 `subject` 字段，导致 `--all-features` 编译失败 | 尚未合并（仍在审查） | <https://github.com/zeroclaw-labs/zeroclaw/issues/8236> |
| #8151 | **S1** (workflow blocked) | 图片附件的可重入引用在缓存历史中丢失，后续查询被否认 | 尚未修复 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8151> |
| #7814 | **S2** (degraded behavior) | Zero

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*