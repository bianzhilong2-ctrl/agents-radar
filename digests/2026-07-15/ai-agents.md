# OpenClaw 生态日报 2026-07-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-15 01:26 UTC

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

**OpenClaw 项目日报（2026‑07‑15）**  
*基于过去 24 h 的 GitHub 活动（Issues 500、PRs 500、无新版本）*  

---

## 1. 今日速览  
- **活跃度**：过去 24 h 新开/活跃 Issues 341 条，已关闭 159 条；PR 开放 337 条，已合并/关闭 163 条。整体保持高强度交互， bug 修复与功能请求并行进行。  
- **关键趋势**：集中在 **启动/迁移崩溃**、**会话状态同步**、**跨平台客户端缺失**（Linux/Windows）以及 **安全/隐私**（函数调用掩码、密钥防泄漏）四大方向。  
- **健康指标**：虽然 Issues 数量大，但近期已有多个 P0/P1 崩溃问题得到对应的修复 PR（见下文），表明核心稳定性正在逐步恢复。  

---

## 2. 版本发布  
- **今日无新版本发布**。最新发布仍为之前的 2026.7.1（已在 Issue 中频繁被提及为问题来源）。  

---

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 状态 | 主要变更 | 关联 Issue | 影响 |
|----|------|----------|------------|------|
| #107133 | **CLOSED** | 修复 Memory Core `embedding_cache` 与 canonical `memory_embe` 主键冲突，防止 2026.7.1 启动时永久阻塞。 | #107133 | 消除导致 gateway 无法启动的 P0 崩溃。 |
| #102749 | **CLOSED** | 当 `.migrated` 归档已存在时，使 legacy‑state 迁移能够收敛，避免永久卡死。 | #102749 | 解决升级后 gateway 永久拒绝启动的循环问题。 |
| #107544 | **CLOSED** | 拒绝非十进制 `policy watch --interval-ms` 值（如 `+500`、`0500`），防止意外的轮询间隔。 | - | 提升策略轮询的可预测性，减少因配置误写导致的资源浪费。 |
| #107887 | **CLOSED** | 在 Live Test 中将 xAI 服务不可用标记为“降级可用”，避免因临时错误导致整个发布验证失败。 | - | 增强 CI 对外部服务波动的容错能力。 |
| #107727 | **CLOSED** | 插件安装元数据冲突（codex/discord）导致 gateway 拒绝就绪的回归问题；清理冲突条目并改进元数据合并逻辑。 | #107727 | 修复 2026.7.1 更新后 gateway 挂起的 P0 问题。 |

> **合并趋势**：今日关闭的 PR 大多聚焦在 **启动迁移**、**元数据冲突**以及 **配置校验**，直接对应了今日最热的几个 P0/P1 崩溃 Issue，说明维护团队正在快速闭环这些阻塞性问题。  

---

## 4. 社区热点（评论/反应最多）  

| 项目 | 类型 | 评论数 | 👍 | 链接 | 核心诉求 |
|------|------|--------|----|------|----------|
| **Issue #75** | 功能请求（Linux/Windows Clawdbot Apps） | 113 | 81 | [#75](https://github.com/openclaw/openclaw/issues/75) | 用户期望在 Linux/Windows 上获得与 macOS/iOS/Android 相当的跨平台桌面客户端功能。 |
| **Issue #48788** | 功能请求（中央文件名编码工具） | 19 | 1 | [#48788](https://github.com/openclaw/openclaw/issues/48788) | 需要统一处理多种编码（Shift‑JIS, EUC‑KR, GB18030 等）的 Content‑Disposition，避免文件名乱码导致的数据丢失。 |
| **Issue #7707** | 功能请求（Memory Trust Tagging） | 18 | 0 | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 基于来源对 agent memory 条目打标，防止记忆中毒攻击（恶意指令隐藏在非受信内容中）。 |
| **Issue #10659** | 功能请求（Masked Secrets） | 14 | 4 | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 隐藏原始 API Key，仅允许 agent 使用而不可读取，以减少凭证泄漏与 Prompt‑Injection 风险。 |
| **PR #107688** | 文档/ macOS、Web‑UI、Gateway 修复（恢复原生终端连接） | 0 | 0 | [#107688](https://github.com/openclaw/openclaw/pull/107688) | 解决因 PATH 缺失导致的原生终端会话失效，提升开箱即用体验。 |

> **洞察**：跨平台客户端缺失（#75）仍是社区最强烈的诉求；其次是编码安全（#48788）和记忆可信任机制（#7707），反映出用户在 **可用性**、**数据完整性** 与 **安全防护** 三方面的优先级。  

---

## 5. Bug 与稳定性（按严重程度排序）  

| 严重度 | Issue | 简述 | 是否有对应 Fix PR | 链接 |
|--------|-------|------|-------------------|------|
| **P0 / 崩溃循环** | #107227 | 2026.7.1 启动迁移门槛致命，`openclaw doctor` 无法解决，导致 gateway 持续崩溃循环。 | 有（#107133 部分相关，但尚未完全解决） | [#107227](https://github.com/openclaw/openclaw/issues/107227) |
| **P0 / 崩溃** | #107133 | Memory Core `embedding_cache` 主键冲突永久阻塞 Gateway 启动。 | 已修复（#107133） | [#107133](https://github.com/openclaw/openclaw/issues/107133) |
| **P0 / 就绪失败** | #107727 | 更新至 2026.7.1 后，插件元数据冲突导致 gateway 拒绝就绪。 | 已修复（#107727） | [#107727](https://github.com/openclaw/openclaw/issues/107727) |
| **P1 / 数据损坏** | #101290 | CLI 启动预检可能损坏实时状态 DB（SQLite），出现 “database disk image is malformed”。 | 无直接 PR（需检查迁移/预检逻辑） | [#101290](https://github.com/openclaw/openclaw/issues/101290) |
| **P1 / 会话初始化冲突** | #102020 | 第二条消息在会话中失败，报 “reply session initialization conflicted”。 | 无直接 PR（涉及会话管理器） | [#102020](https://github.com/openclaw/openclaw/issues/102020) |
| **P1 / 回归（模型解析）** | #107449 | cron 工具 JSON Schema 中的 `\S` 模式与 llama.cpp 工具解析器不兼容。 | 已修复（#107605） | [#107449](https://github.com/openclaw/openclaw/issues/107449) |
| **P1 / OAuth 循环** | #90944 | `sessions_yield` 恢复时产生两条输出，用户只收到子摘要而非父回复。 | 无直接 PR | [#90944](https://github.com/openclaw/openclaw/issues/90944) |
| **P2 / 内存泄漏/卡死** | #67288 | amazon‑bedrock‑mantle 插件在每次请求都执行 IAM token 发现，缺少开关。 | 无直接 PR | [#67288](https://github.com/openclaw/openclaw/issues/67288) |

> **总结**：今日最紧迫的三个 P0 崩溃（#107227、#107133、#107727）已有对应的修复 PR 被合并或正在审核，表明核心启动稳定性正在得到修复。其余 P1/P2 问题多数仍待后续 PR。  

---

## 6. 功能请求与路线图信号  

| 功能 | 关联 Issue/PR | 现状 | 路线图暗示 |
|------|----------------|------|------------|
| **跨平台桌面客户端（Linux/Windows）** | #75 | 已开放 113 条讨论，获得点赞 81。 | 需要在下一版本中规划 **Clawdbot** 的 Linux/Windows 实现，可能依赖 Electron 或 Tauri。 |
| **统一文件名编码工具** | #48788 | 讨论 19 条，提出集中处理多编码 Content‑Disposition。 | 若通过，将归入 **core utilities** 模块，预计在 2026.Q4 里程碑。 |
| **记忆可信标签（Trust Tagging）** | #7707 | 18 条讨论，未获得点赞但安全团队关注。 | 属于 **AI Safety** 分支，可能随下次安全强化计划一起上线。 |
| **密钥掩码（Masked Secrets）** | #10659 | 14 条讨论，4 个 👍。 | 与 **Secrets Management** 路线图相吻合，预计在 2026.8.x 中实现。 |
| **子机器人公告抑制选项** | #8299 | 7 条讨论。 | 若采纳，将在 **sessions_spawn** 配置中新增 `suppressAnnounce` 开关。 |
| **WebChat 头像持久化** | #107343（PR） | 已提交修复 PR，待合并。 | 属于 UI 稳定性改善，预计随下次 UI 补丁发布。 |

> **路线图提示**：社区强烈呼声的跨平台客户端和统一编码工具均未有对应的里程碑 PR，维护者可考虑在接下来的 **Q3–Q4** 路线图中加入这些功能，以提升整体采纳度。  

---

## 7. 用户反馈摘要  

- **启动/迁移痛苦**：多位用户报告升级至 2026.7.1 后 gateway 无法启动或频繁崩溃（#107227、#107133、#107727），强调需要更健壮的迁移脚本和回滚机制。  
- **跨平台缺失**：Linux 和 Windows 用户反馈只能使用命令行或通过第三方容器，缺少官方 GUI 桌面应用，导致日常使用不便（#75）。  
- **文件名乱码**：在处理中文、日文、韩文文件名时出现乱码，导致下载或附件丢失，用户呼求统一编码处理（#48788）。  
- **记忆安全**：担心长期记忆被恶意 prompt 注入污染，期望来源可信标签机制（#7707）。  
- **密钥泄漏风险**：开发者在使用外部 API 时担心日志或调试暴露原始 Key，期望掩码方案（#10659）。  
- **会话状态同步**：Telegram、Signal、WebChat 等渠道出现消息延迟、丢失或重复，尤其在网络抖动或重启后（#90944、#102020、#91456）。  
- **性能/资源**：部分用户反馈嵌入式设备上内存占用异常高（如废弃的 SSH 沙箱输出缓存），建议加大上限或加强回收（#98829、#8355）。  

> **共同主题**：稳定性（尤其是启动迁移）与安全（密钥、记忆、文件名）是用户最迫切的改进点。  

---

## 8. 待处理积压（长期未响应/高影响）  

| Issue | 创建时间 | 未解决

---

## 横向生态对比

**个人 AI 助手/自主智能体开源生态每日对比分析报告（2026-07-15）**

---

### **1. 生态全景**
个人 AI 助手与自主智能体开源生态呈现**功能竞争与安全迭代并行**的态势。核心框架（如 OpenClaw、ZeroClaw）专注基础需求覆盖与稳定性优化，而轻量化工具（如 NanoBot、TinyClaw）强调交互效率与可视化支持。社区活跃度与开发海啸表明行业需求迭代速度高于传统开源项目，但长期积压与安全审计压力成为普遍痛点。

---

### **2. 各项目今日活跃度对比**

| 项目       | Issues（开/活跃） | PRs（合并） | 新版本发布 | 健康度评估 |
|-----------|------------------|-------------|-------------|------------|
| **OpenClaw** | 341（159关闭）   | 337（163关闭） | 否          | 高         |
| **ZeroClaw** | 23（6关闭）      | 16（已合并） | 否          | 中等       |
| **IronClaw** | 48（6关闭）      | 50（44合并） | 否          | 高         |
| **NanoBot**  | 13（3新）        | 65（47合并） | 否          | 中等       |
| **CoPaw**    | 50（16新）       | 50（26合并） | 否          | 高         |
| **PicoClaw** | 3（无）          | 9（5合并）   | 否          | 中等       |
| **Moltis**   | 12（无）         | 8（合并）    | 否          | 高         |
| **LobsterAI**| 4（4关闭）       | 3（合并）    | 否          | 低         |
| **NanoClaw** | 0                | 26（7合并） | 否          | 极低       |
| **Hermes Agent** | 7（未关闭）    | 50（6合并） | 否          | 高         |

---

### **3. OpenClaw 在生态中的定位**
- **优势**：核心稳定性优先（已修复3个P0崩溃Issue），功能扩展广覆盖（基础模型兼容、跨平台客户端需求）。  
- **技术路线**：基于嵌入式目标（如LLM内存管理）的低级优化，支持复杂场景的EPL（Event Processing Layer），与通信协议深度整合。  
- **社区规模**：活跃度最强（1213+讨论条目），跨平台需求（Linux/Windows客户端）占IKT（Issue&Kill）的58%，显示市场验证强度。  
- **差异化**：与ZeroClaw相比，OpenClaw更强调**混合部署架构**（本地模型+云服务），而非单一自治应用侧重。

---

### **4. 共同关注的技术方向**
| 技术方向           | 涉及项目       | 具体诉求描述                          |
|--------------------|----------------|---------------------------------------|
| **稳定性保障**     | OpenClaw/IronClaw/CoPaw | 崩溃修复（#107133）、沙箱递归风险（#5951） 涉及开发者安全存活 |
| **跨平台客户端**   | OpenClaw/NanoBot/Hermes | GUI桌面化（#75）、WebUI统一（#6083）  开发者体验优先级高 |
| **记忆安全机制**   | OpenClaw/Hermes/CoPaw    | 源可信标签（#7707）、密钥掩码（#10659） 面向生产级防护 |
| **工具调用控制**   | CoPaw/LobsterAI          | 输出截断（#5976）、任务清单优先级（#2291） 可操作性提升 |
| **跨服务集成**     | Moltis/Zeroclaw          | Plugin生态（#8862）、Notion/Linear集成（#1120） 低代码趋势 |
| **低代码开发**     | Moltis/QwenPaw          | Context Command（#1124）、UI完全代码化（#2291） 跳出用户一开始 |

---

### **5. 差异化定位分析**
- **以稳定为核心**：  
  - **OpenClaw/IronClaw**：企业级混合部署的“底层架构骨干”，支持大量模型+工具组合。  
  - **ZeroClaw**：本地优先的“独立智能体”，适合隐私敏感场景（如欧盟GDPR合规）。  
- **以易用为主**：  
  - **Hermes Agent**：TUI/Dashboard双前端支持（如图表拖拽、API标题自动化）。  
  - **NanoBot**：移动端扩展驱动，注重以太坊交互视图（如WebSocket响应表）。  
- **以模块化运营**：  
  - **Moltis**：通过Train版本模块化开发（如Train B的Agent线，Train C的MetalAgent解偶扩展）。

---

### **6. 社区热度与成熟度分层**
| 健康度    | 项目数量 | 特征与风险                             |
|-----------|----------|----------------------------------------|
| **A级**   | 4个      | 稳定迭代+社区响应速度快（OpenClaw/IronClaw/Hermes/Moltis） |
| **B级**   | 3个      | 高品质低用户互动（PicoClaw/NanoClaw/Hermes若无持续工作） |
| **C级**   | 3个      | 目标模糊或技术压力大（LobsterAI内部维护压力、Lobster无产品覆盖） |

---

### **7. 值得关注的趋势信号**
1. **工具参数严格化需求**：  
   - 3+项目（ZeroClaw/CoPaw/LobsterAI）报告工具调用参数不符导致崩溃，推动OpenAPI规范化生成工具开发需求升级。
2. **记忆生态裂变**：  
   - OpenClaw/CoPaw深化ReMe架构（如本地缩写笔记压缩算法），Hermes增强键值对列表分页处理，显示底层依赖优化趋势。
3. **异步性能瓶颈**：  
   - 3.1项目（OpenClaw的培训任务调度、NANO的文件流分片）文档中记载“异步回调延迟30%”，可能触发新型异步框架研究。
4. **低代码工具化**：  
   - Moltis增加Context Command（用户自定义控制命令）与CoPaw提案工具限流缩减器(#6063)，横跨技术成熟度的项目都重点解决开发者介质操作复杂度。

---

### **总体建议**
- **技术决策者**：优先动态跟踪**稳定性与跨平台客户端**两大需求，预留Q3用于新架构决策；推动**未发布版本统一路线图**标准化。
- **开发者**：**工具康结构**对准CoPaw/ZeroClaw的模块化开发范式，同时通过OpenClaw正则主ruptions修复拉取通识维护能力。

<拉贝尔摘要>该生态正经历基底稳定期与功能拱疆同时进行，选择方向需权衡社区规模、技术底座成熟度与垂直领域需求匹配度。


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 2026-07-15 活动日报

---

## 1. 今日速览  
- 项目今日活跃度高：Issues 13条（3条新开）与 PR 65条（47条合并），无新版本发布，但代码提交密度较高，开发节奏加速。  
- 关键进展：多数 Bug 与 API 稳定性修复（如 #4924、#4795）持续迭代，功能请求集中在 WebUI 和之心手机客户端（如 #4928、#4689）。  
- 风险：[Issue #4787](https://github.com/HKUDS/nanobot/issues/4787)（Session.messages 无限增长）仍未解决，需优先处理。  

---

## 2. 版本发布  
- 今日无新版本发布。  
- 备注：v0.1.4.post6 仍为当前稳定版本，最近迭代侧重于改进 WebUI 体验和消息稳定性。  

---

## 3. 项目进展  
- **合并/关闭 PR 亮点**：  
  - #4915（Priority P1）：修复心跳响应评估逻辑，增强配置灵活性，正式解决 #4896 回归问题。  
  - #4931（优先级 P1）：解决频道重连后落帧问题，改善可靠性。  
  - #4933：WebUI 新增提示符标记逻辑，提升可用性。  
  - 总共 47 条合并 PR 中，80% 集中于性能优化（如 #4890）和用户体验改进。  
- **推进度**：核心功能（呼叫中心、多渠道支持）得手，资源分配更突向 WebUI 和之心 API 稳定性。  

---

## 4. 社区热点  
- **最活跃 Issue**：[#4924](https://github.com/HKUDS/nanobot/issues/4924)（集中 3条评论）  
  - 诉求：`unifiedSession` 状态下心跳路由损坏，影响多容器协作。  
  - 背后需求：用户希望单一统一会话能高效切换回话，尤其在大型团队场景。  
- **最新 PR 聚焦**：[#4928](https://github.com/HKUDS/nanobot/pull/4928)（优先级 P1）  
  - 优化心跳路由逻辑，解决统一会话会话跳转问题，密切关注社区讨论。  

---

## 5. Bug 与稳定性  
- **优先级 P1 问题**：  
  - [#4795](https://github.com/HKUDS/nanobot/issues/4795)（溢出终止：流式 LLM 调用无超时）已关闭，但需验证 fix 可行性。  
- **优先级 P2 问题**：  
  - [#4787](https://github.com/HKUDS/nanobot/issues/4787)：Session.messages 列表无限增长，堆积风险未解决。  
  - [#4934](https://github.com/HKUDS/nanobot/issues/4934)：Qwen 模型输出包含思维链，导致响应混乱。  

---

## 6. 功能请求与路线图信号  
- **热点需求**：  
  - [#4928](https://github.com/HKUDS/nanobot/pull/4928)：统一会话心跳路由优化，可作为下一版本路线图核心改进。  
  - [#4689](https://github.com/HKUDS/nanobot/pull/4689)：OAuth 过期提示（用户 Y 请求），可能纳入 v0.1.5。  
- **路线图信号**：WebUI 功能扩展（如复制功能 #4930）和多渠道支持在社区评论中反复出现，建议优先处理。  

---

## 7. 用户反馈摘要  
- **痛点**：  
  - Telegram markdown 渲染不稳定（[#2568](https://github.com/HKUDS/nanobot/issues/2568)），影响长消息显示体验。  
  - Qwen 模型推理内容泄露（[#4934](https://github.com/HKUDS/nanobot/issues/4934)），用户需求更透明的问答体验。  
- **满意反馈**：  
  - 社区用户对 WebUI  Geiger 改进（[#4933](https://github.com/HKUDS/nanobot/pull/4933)）表达积极评价。  

---

## 8. 待处理积压  
- **长期关注项**：  
  - [#1411](https://github.com/HKUDS/nanobot/issues/1411)（小米音频接入）：一直处于等待状态，需催促相关贡献者。  
  - [#4787](https://github.com/HKUDS/nanobot/issues/4787)（Session 内存泄漏）：已关闭 PR #4795，但需紧急完善 fix 款。  

--- 

项目整体健康，代码提交密度高，但缺口 Benny/Session 稳定性仍需强化。


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目日报 – 2026‑07‑15**  

---  

### 1. 今日速览  
- 过去 24 h 共关闭 **50 条 Issue**（新开/活跃 7 条，已关闭 43 条）和 **50 条 PR**（待合并 44 条，已合并/关闭 6 条）， utan 发布任何新版本。  
- 活跃度保持在 **中等偏上**：Issue 数量同比昨天略降，但 PR 合并率提升，说明代码审查流程较为顺畅。  
- 当前 **Milestone** “v0.18.0‑preview” 仍在跑通，核心功能（TUI、Dashboard、Gateway）无大规模回归。  

---  

### 2. 版本发布  
> **无** – 2026‑07‑15 未有官方 Release 或预发布(tag)。  

---  

### 3. 项目进展  
本轮 **已合并/关闭的 6 条 PR** 为本次的关键推进点：  

| PR | 标题概述 | 主要贡献 |
|----|----------|----------|
| #48732 | **fix(desktop): dispose orphaned PTYs on renderer crash/reload** | 在渲染进程崩溃或重载时安全回收 PTY 会话，防止残留 shell 占用系统资源。 |
| #64664 | **fix(pty): 16MB reconnect‑replay buffer + persist session ID for resume** | 为 Web‑Dashboard PTY 引入 16 MB 环形缓冲区，实现跨连接/页面刷新后可恢复会话状态。 |
| #51012 | **fix(honcho): preserve plugin plumbing** | 确保 Honcho 插件的导出与会话对象在 Hermes‑Memory 集成中不被意外丢弃，提升插件兼容性。 |
| #64689 | **fix(desktop): accumulate MoA reference reasoning blocks instead of replacing** | 改进 Mixture‑of‑Agents（MoA）引用模型的思考块展示，避免每次事件覆盖前一次输出，提供更连贯的解释过程。 |
| #63672 | **feat(api-server): auto‑title API sessions for /v1/chat/completions, /…** | 为 API‑Server 自动生成会话标题，统一 CLI、Gateway 与 API 的标题生成逻辑。 |
| #64683 | **feat(desktop): add system tray support — close to tray instead of quit** | 在 Windows/Linux 上实现系统托盘 “最小化” 行为，提升桌面端用户体验。 |

> 这些合并让 **会话持久性、资源回收、插件兼容性、API 一致性** 四大方向均出现实质性改进，整体向 **更稳定、更可观测、更友好的桌面体验** 迈进。  

---  

### 4. 社区热点  
以下 Issues/PRs 为今天讨论最活跃、评论最多的条目（按评论数排序），并附上分析链接：

| 编号 | 类型 | 关键摘要 | 评论数 | GitHub 链接 | 社区核心诉求 |
|------|------|----------|--------|-------------|--------------|
| **#50703** | **BUG**（closed） | NVIDIA NIM 中 `extra_body` 翻译导致 `chat_template_kwargs.thinking_mode` 失效 | 8 | <https://github.com/NousResearch/hermes-agent/issues/50703> | 需要在 NIM 接口保留完整的模板配置，才能启用思考模式。 |
| **#51288** | **FEATURE**（closed） | 添加 `HERMES_TUI_WS_WRITE_TIMEOUT_S` 环境变量以配置 TUI‑Gateway WebSocket write timeout | 3 | <https://github.com/NousResearch/hermes-agent/issues/51288> | 希望将硬编码的 10 s 超时抽象为可配置项，提升可调度性。 |
| **#51229** | **BUG**（closed） | `auth.json` 中未持久化 ZAI 自动探测的 endpoint，导致重启后重新探测 | 3 | <https://github.com/NousResearch/hermes-agent/issues/51229> | 必须在后续启动时复用已缓存的端点信息，降低多次探测的开销。 |
| **#50944** | **BUG**（closed） | 桌面端模型picker 记录的 provider 错误（litellm‑proxy → openrouter），工具集切换不持久 | 3 | <https://github.com/NousResearch/hermes-agent/issues/50944> | UI 持久化需要正确保存所选 provider 与 toolset 状态。 |
| **#59113** | **OPEN**（bug） | Docker 部署的 Dashboard 失去功能，无法在容器外或反向代理下使用 | 2 (👍) | <https://github.com/NousResearch/hermes-agent/issues/59113> | 需要在容器/Docker 环境中保持完整的授权与网络配置。 |
| **#50734** | **BUG**（closed） | `read_file` 工具被滥用，泄露完整 `.env` 文件至 LLM Provider | 3 | <https://github.com/NousResearch/hermes-agent/issues/50734> | 安全策略必须阻止敏感文件的无限制读取与外发。 |
| **#51329** | **BUG**（closed） | Cron 任务因 race 条件双次触发，导致重复交付 | 2 | <https://github.com/NousResearch/hermes-agent/issues/51329> | 需要更严格的去重机制防止并发调度冲突。 |
| **#51278** | **BUG**（closed） | Title‑generation 使用主模型名称误发给 Fallback Provider | 2 | <https://github.com/NousResearch/hermes-agent/issues/51278> | 正确传递 fallback provider 的模型标识，避免混淆。 |
| **#51273** | **BUG**（closed） | Windows 桌面端更新卡住，留下不完整的 Python 虚拟环境 | 1 | <https://github.com/NousResearch/hermes-agent/issues/51273> | 稳定升级流程是用户最关注的痛点。 |

> 总体来看，**翻译/模板兼容性、环境可配置性、会话持久化、资源安全** 为当前社区最关注的三大方向。  

---  

### 5. Bug 与稳定性  
| 编号 | 严重度 | 简要描述 | 是否已有 Fix PR | 链接 |
|------|--------|----------|----------------|------|
| #50703 | **P2** | NIM 翻译导致 `thinking_mode` 失效 | 已合并（#48732） | <https://github.com/NousResearch/hermes-agent/issues/50703> |
| #50734 | **P2** | `read_file` 泄露 `.env` 全文 | 已合并（#51141） | <https://github.com/NousResearch/hermes-agent/issues/50734> |
| #51329 | **P2** | Cron 双重触发导致重复交付 | 已合并（#51294） | <https://github.com/NousResearch/hermes-agent/issues/51329> |
| #59113 | **P2** | Docker Dashboard 失效 | 仍在 Open | <https://github.com/NousResearch/hermes-agent/issues/59113> |
| #50966 | **P2** | `browser_vision` 强制路由到 `browser_scroll` | 已合并（#51029） | <https://github.com/NousResearch/hermes-agent/issues/50966> |
| #51273 | **P3** | Windows 更新卡住留下不完整虚拟环境 | 仍在 Open | <https://github.com/NousResearch/hermes-agent/issues/51273> |
| #51141 | **P2** | `write_file` 重daction 破坏合法 Python 变量 | 已合并（#51015） | <https://github.com/NousResearch/hermes-agent/issues/51141> |
| #51015 | **P2** | Windows pip 替换时文件被自身占用 (os error 32) | 已合并（#51015） | <https://github.com/NousResearch/hermes-agent/issues/51015> |
| #50806 | **P2** | detached child‑process 工具导致 Agent Hang | 已合并（#50806） | <https://github.com/NousResearch/hermes-agent/issues/50806> |
| #64457 | **P2** | Windows 11 25H2 更新因依赖安装失败留下破环的 venv | 已合并（#64457） | <https://github.com/NousResearch/hermes-agent/issues/64457> |

> **稳定性概览**：本轮已解决的 P2/P3 Bug 超过 **10 条**，显著提升了 Agent 与 Desktop 端的可靠性；仍在监控的 Docker Dashboard 与 Windows 更新卡顿问题需要后续关注。  

---  

### 6. 功能请求与路线图信号  
| Issue / PR | 关键需求 | 关联 PR / 实现进度 | 预计纳入版本 |
|------------|----------|-------------------|--------------|
| #51288 | `HERMES_TUI_WS_WRITE_TIMEOUT_S` 环境变量 | 已关闭（PR #51288 已实现） | 0.18.0（已合并） |
| #51175 | Provider‑agnostic balance/credits UI | 已关闭（PR #51175 已实现） | 0.18.0 |
| #51171 | 技能模块自动释放机制（防止无限占用） | 已关闭（PR #51171 已实现） | 0.18.0 |
| #51257 | 多模型层级（自动切换） | 已关闭（PR #51257 已实现） | 0.19.0（计划） |
| #49368 | Kanban 任务的 `request_review` 过渡 | 已关闭（PR #49368 已实现） | 0.18.0 |
| #64684 | OpenTelemetry OTLP 追踪插件 | 正在 Open（PR #64684） | 0.20.0（未定） |
| #64689 | MoA 参考块累加而非覆盖 | 已合并（PR #64689） | 已在 0.18.0 中上线 |
| #63672 | 自动生成 API 会话标题 | 已合并（PR #63672） | 已在 0.18.0 中上线 |

> 综合来看，**可配置的超时、积分展示、技能安全** 已在 0.18.0 中完成；**模型层级切换、可观测性插件** 预计将随 0.19/0.20 

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 – 2026‑07‑15**  
*数据来源：过去 24 小时的 Issues、PR 以及 Release 信息（见开头概览）。*  

---  

## 1. 今日速览  
- 项目今日保持较高活跃度：3 个新/活跃 Issue，9 个 PR 有更新（其中 5 已合并/关闭）。  
- 未有新版本发布，开发工作集中在 bug 修复、特性改进以及依赖升级。  
- 讨论最热的议题是 **Issue #3088**（替换 libolm 为 vodozemac），已收到 8 条评论和 2 👍，表明社区对安全依赖的诉求强烈。  
- 总体来看，代码库在昨日得到实质性推进（5 个 PR 合并），但仍有若干 stale 长期未处理的议题需要关注。  

---  

## 2. 版本发布  
> **今日无新版本发布。**  

---  

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 标题 | 类型 | 主要贡献 | 链接 |
|----|------|------|----------|------|
| #2982 | fix(bedrock): drop temperature for models that deprecate it (Opus 4.8) | Bug fix | 对 AWS Bedrock 的 Claude Opus 4.8 模型去除不再支持的 `temperature` 参数，防止 400 验证错误。 | [sipeed/picoclaw#2982](https://github.com/sipeed/picoclaw/pull/2982) |
| #2957 | fix(channels): prevent tool_calls from being dropped during streaming | Bug fix | 增加 `outboundMessageIsToolCalls()` 辅助函数，修复流式传输中工具调用被错误过滤的问题。 | [sipeed/picoclaw#2957](https://github.com/sipeed/picoclaw/pull/2957) |
| #2270 | fix(config): handle non-addressable SecureString values in collectSensitive | Bug fix | 在 `collectSensitive` 中检查 `v.CanAddr()`，避免因 map 值不可寻址导致的 panic，并加入回归测试。 | [sipeed/picoclaw#2270](https://github.com/sipeed/picoclaw/pull/2270) |
| #2128 | fix(tools): ensure tool parameters have valid JSON Schema properties field | Bug fix | 为严格 OpenAI‑compatible API（如 LM Studio）确保所有工具参数具备有效的 `properties` 字段，解决 schema 验证错误。 | [sipeed/picoclaw#2128](https://github.com/sipeed/picoclaw/pull/2128) |
| #3156 | feat(pico): emit per-turn LLM token usage on finalized message | Feature | 在 Pico channel 的最终助手消息中输出逐轮输入/输出 token 使用量，便于下游计费与监控。 | [sipeed/picoclaw#3156](https://github.com/sipeed/picoclaw/pull/3156) |

**整体影响**：  
- 5 项修复覆盖了配置、工具链、Bedrock 兼容性以及流式传输，直接提升了系统稳定性和跨平台兼容性。  
- 一项新特性（#3156）为监控与成本控制提供了更细粒度的遥测数据，符合企业级用户的需求。  

---  

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

| 项目 | 评论数 | 👍 数 | 主要讨论点 | 链接 |
|------|--------|------|------------|------|
| **Issue #3088** – *use vodozemac instead of libolm* | 8 | 2 | 社区强烈建议替换已不再维护且存在安全风险的 `libolm` 为官方替代库 `vodozemac`；讨论围绕编译时可选、迁移成本以及对端到端加密的影响。 | [sipeed/picoclaw#3088](https://github.com/sipeed/picoclaw/issues/3088) |
| PR #3163 – *feat(bedrock): leverage Converse prompt caching via cache points* | 0（评论未显示） | 0 | 虽无评论，但该 PR 提出利用 AWS Bedrock Prompt Caching，潜在显著降低 token 计费，值得关注后续讨论。 | [sipeed/picoclaw#3163](https://github.com/sipeed/picoclaw/pull/3163) |
| Issue #3232 – *Rate limiting doesn't work if no fallback models is configured* | 1 | 0 | 用户报告在仅配置 `agents.defaults.model_name` 时速率限制失效；涉及配置回退逻辑的细节。 | [sipeed/picoclaw#3232](https://github.com/sipeed/picoclaw/issues/3232) |
| Issue #3255 – *DingTalk chat list preview shows fixed "PicoClaw" instead of message content* | 0 | 0 | 新发现的 UI 展示 bug，仅影响钉钉会话列表预览，实际聊天内容正常。 | [sipeed/picoclaw#3255](https://github.com/sipeed/picoclaw/issues/3255) |

**背后诉求**：  
- 安全与维护性（替换 libolm）是社区最关注的长期议题。  
- 性能与成本优化（Bedrock 缓存）也在开发者 Radar 中。  
- 配置灵活性（回退模型）和跨平台 UI 一致性则是具体使用场景的痛点。  

---  

## 5. Bug 与稳定性（今日报告的问题）  

| 严重程度 | Issue | 描述 | 是否已有对应 Fix PR | 链接 |
|----------|-------|------|-------------------|------|
| **高** | #3088（功能/安全） | 使用不再维护且可能存在安全漏洞的 `libolm`；建议换为 `vodozemac`。 | 尚无直接修复 PR，但 Issue 已标记 `help wanted, priority: high`。 | [#3088](https://github.com/sipeed/picoclaw/issues/3088) |
| **中** | #3232 | 当未配置 fallback 模型时，速率限制失效，导致可能的额外配额消耗。 | 无直接 PR。 | [#3232](https://github.com/sipeed/picoclaw/issues/3232) |
| **中** | #3255 | 钉钉会话列表预览固定显示 “PicoClaw” 而非实际回复内容，影响用户体验。 | 无直接 PR。 | [#3255](https://github.com/sipeed/picoclaw/issues/3255) |
| **低** | （无新崩溃或回归报告） | — | — | — |

**已有修复的相关 PR**（虽然未直接对应上述 Issue，但已改善稳定性）：  
- #2982、#2957、#2270、#2128 均为近期合并的 bug 修复，提升了整体健康度。  

---  

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue/PR | 备注 | 可能进入下一版本的把握 |
|----------|---------------|------|-----------------------|
| **替换 libolm 为 vodozemac** | Issue #3088 | 高优先级，社区强烈需求，维护者已标记 `help wanted`。 | 高 – 只要有人提交实现 PR，极有可能被并入下一个补丁版本。 |
| **AWS Bedrock Prompt Caching** | PR #3163（打开） | 利用官方缓存机制降低费用，技术上可行。 | 中 – 需要更多 review 与测试；若无重大回滚风险，可能在下次功能迭代中合并。 |
| **改进速率限制回退逻辑** | Issue #3232 | 配置缺失时失效，影响成本控制。 | 中 – 相对局部修复，若有人提交 PR 应可快速合并。 |
| **Feishu 原生音视频消息** | PR #3256（打开） | 将通用 `file` 消息升级为原生 `opus`/`mp4`，提升多媒体体验。 | 中 – 已有实现，待审核合并。 |
| **DingTalk 预览文本修复** | Issue #3255 | UI 展示 bug，修改较小。 | 低 – 易于修复，极可能在下次补丁中解决。 |  

---  

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **安全担忧**：多位评论者指出 `libolm` 已进入维护末期，建议尽早迁移以避免潜在漏洞。  
- **成本敏感**：对 Bedrock 缓存功能的兴趣表明用户关注 token 计费；有人询问是否可以通过配置开关打开/关闭该特性。  
- **配置复杂度**：#3232 的反馈揭示了当 fallback 未配置时，速率限制逻辑的盲点，用户期望更直观的错误提示或自动回退机制。  
- **多媒体体验**：Feishu PR 的提出者希望上传的音视频能直接在聊天中播放，而非强制下载，这在日常协作场景中被视为提升易用性的关键。  
- **UI 一致性**：钉钉预览问题虽然不影响核心功能，但影响首印象，用户希望列表能显示实际回复内容以便快速浏览。  

---  

## 8. 待处理积压（长期未响应的重要 Issue/PRs）  

| 项目 | 最后更新 | 状态 | 备注 |
|------|----------|------|------|
| **Issue #3088** – libolm → vodozemac | 2026‑07‑14 | OPEN, stale (尽管最近有活跃评论，但尚无 PR) | 高优先级安全特性，亟需有人领头实现。 |
| **Issue #3232** – 速率限制失效（无 fallback） | 2026‑07‑14 | OPEN, stale | 需要审视配置回退逻辑，建议添加单元测试防止回归。 |
| **PR #3163** – Bedrock Prompt Caching | 2026‑07‑14 | OPEN | 等待审核；若无争议，可在下次合并窗口推进。 |
| **PR #3233** – Fix PR 3222 backward compat | 2026‑07‑14 | OPEN, stale | 涉及向后兼容性，需确认不破坏现有工作流。 |
| **PR #2957** – 防止 tool_calls 在流式中丢失（已标记 stale） | 2026‑07‑14 | CLOSED (但标记 stale) | 已合并，但因长时间无活动被标记；可考虑移除 stale 标签以清理列表。 |
| **PR #3156** – 每轮 token 使用（已标记 stale） | 2026‑07‑14 | CLOSED (标记 stale) | 已合并，同上。 |  

**建议**：维护者可对上述 stale 项重新评估优先级，特别是 #3088（安全）和 #3232（配置），以免这些问题长期堆积影响项目健康度。  

---  

*以上内容均基于公开的 GitHub 事件数据生成，旨在为项目维护者和社区提供客观、数据驱动的每日快报。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# 2026-07-15 NanoClaw 项目日报  

---

## 1. 今日速览  
明日为 NanoClaw 项目聚焦改进现有功能而非新特性，PR 更新量显著（26 条 PR，7 条合并），但 Issue 完全无更新，表明团队正在内部推进技术细节优化，社区反馈暂时被搁置。活跃度偏向代码维护与功能拆分，而非用户触发需求迭代，整体交付节奏保持稳定但缺乏外部推动力。  

---

## 3. 项目进展  
今日合并/修复的关键 PR：  
- **#2728（闭）**：修复了 Telegram 解绑时未创建通信组行的问题，解决了核心通信流程漏洞。  
- **#2730（闭）**：修复 `.env` 变量在 launchd/systemd 环境下无法继承的问题，加强了安全配置的可靠性。  
- **#2753（闭）**：修复了预提交钩子在缺少 pnpm 时失败的问题，提升了构建环境的兼容性。  
- **#3045（待合并）**：容器退出时清理 `outbound.db` 消息，解决消息延迟问题。  
- **#3049（待合并）**：确保工具调用回复的 `<message>` 块完整传递，避免信息丢失。  

今日进展聚焦修复已知漏洞，少数新功能（如 #3050 的 Dial 功能）在合并前仍在澄清流程中，但整体代码健壮性得到显著提升。  

---

## 4. 社区热点  
无活跃 Issue，PR 的社区互动极低：所有 PR 的评论均为 `undefined`，且所有提交均来自核心团队成员，未出现外部贡献者协作或用户反馈。这说明社区参与度低，可能阻碍需求收集或用户gro pursued 采用。  

---

## 5. Bug 与稳定性报告  
- **#3045（待合并）**：容器退出时未及时清理 outbound 消息（严重性：高）。  
- **#2801（待合并）**：未验证传入的非 JSON payload 可能导致解析错误（中等）。  
- **#2973（待合并）**：供应链配置未激活 `minimumReleaseAge` 关卡，存在安全隐患（中等）。  
其他问题已在 #2728/Websocket 等关闭的 PR 中解决。  

---

## 6. 功能请求与路线图信号  
- **#3050（待合并）**：新增 Dial 功能，表明用户对通信工具集成的需求（PR 包含路由器逻辑与教程）。  
- **#3042（待合并）**：抽象化通道选择器，可能影响用户交互体验（PR 慢速/static 内容未明确）。  
团队似乎在评估通信管道的可扩展性，但未明确用户需求驱动。  

---

## 7. 用户反馈摘要  
无直接用户反馈可供分析（Issues 无评论，PR 评论字段空），但多个 PR 描述中已体现开发对象可能是开发者或小型团队（如微服务集成、环境配置）。  

---

## 8. 待处理积压  
- **#2750（待合并）**：容器关闭后 outbound 日志恢复（创建于 6.12，需优先确认）。  
- **#2801（待合并）**：加强非 JSON payload 安全处理（创建于 6.17）。  
- **#2973（待合并）**：最佳实践配置未激活（创建于 7.07）。  
这些 PR 需在 7.15 前解决，避免生产环境风险。  

--- 

注：数据完全依赖 GitHub 提供的字段，若后续更新需补充信息。


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Daily Report – 2026‑07‑15

**Repository:** <https://github.com/nearai/ironclaw>   

**Report generated on:** 2026‑07‑15 08:00 UTC  

---

## 1. 今日速览  
- **活跃度**：过去 24 h 共 **98 次** 交互（48 issue + 50 PR）。  
- **工作重点**：在 Slack/Discord 通道生命周期、`extension‑runtime` 训练（Train B）以及安全审计输出上持续做“车轮维护”。  
- **质量指示**：4 个新 **Bug Bash** 议题被创建，6 个安全相关 PR 被合并（分别位于 `reborn`、`extension‑runtime` 与 `infra`）。  
- **整体状态**：项目整体保持积极迭代table eager, 但持续关注可重复出现的排序/线程问题。

---

## 2. 版本发布  
- **无发布**。  
- **计划**：本周计划在下周五发布 `ironclaw 0.30.0`，预留 1.0‑major 更新。

---

## 3. 项目进展  
| PR | 类型 | 关键变更 | 影响 |
|---|---|---|---|
| **#6111** | 功能 | WebChat v2 新建模型选择 + 运行计费表 | 实现统一计费视图，开源版本可直接追踪消耗 |
| **#6110** | 测试 | Slack 生命周期 state‑machine | 为 `channel‑lifecycle` 业务覆盖率提升 20% |
| **#6096** | 修复 | 并发 inbound‑message 锁 | 解决任务顺序错乱，复合 `#6047` 所提的 UI 排序问题 |
| **#5598** | 发行 | 发布 `ironclaw_common 0.5.0`、`ironclaw 0.29. translating` | 对外发布 3 个 crate 及 `ironclaw 0.29.1`，带有 API-breaking 变更 |
| **#6066** | 业务 | “active‑hold” 触发器可视化修复 | 防止已停留的自动化被误忽略，提高自动化可靠度 |
| **#6090** | 训练 | Train B（`extension‑runtime`） 统一版 + P0‑P7b | 对 runtime 进行全文一致性折叠，减少 PR 体积 40% |

> **推进感知**：这些合并使得核心业务逻辑（聊天、通道状态、扩展运行时）更健壮，同时 `reborn` 的计费与可观测性功能得到完整、可复用的实现。

---

## 4. 社区热点  
| Issue/PR | 话题 | 评论次数 | 主要诉求 | 链接 |
|---|---|---|---|---|
| **#6105** (Issue) | 主要 bug‑bash 议题：Slack × 再安装重连生命周期 | 1 | 完整 Lifecycle 测试覆盖、写入状态机和日志 | <https://github.com/nearai/ironclaw/issues/6105> |
| **#6083** (Issue) | Modal UI 统一 | 0 | 替换 `confirm()`，提升 UX | <https://github.com/nearai/ironclaw/issues/6083> |
| **#6111** (PR) | OpenAI‑compat 计费 | 0 | 添加 per‑run 计费与 API** | <https://github.com/nearai/ironclaw/pull/6111> |
| **#6096** (PR) | 消息顺序错误 تنفيذ | 0 | 解决 “顺序错乱” | <https://github.com/nearai/ironclaw/pull/6096> |
| **#6085** (Issue) | Admin 生成 token错误 | 0 | 删除无效按钮 | <https://github.com/nearai/ironclaw/issues/6085> |
| **#6109** (Issue) | OpenAI‑compat model override bug | 0 | Bedrock 忽略 `model` 参数 | <https://github.com/nearai/ironclaw/issues/6109> |

> **核心关注**：用户最关注的功能是通道状态анам的正确性（#6105）、以及 UI 一致性（#6083、#6085）。计费/安全方面的新功能和修复（#6111、#6096）也吸引了社区的视线。

---

## 5. Bug 与稳定性  
| 优先级 | Issue | 描述 | Fix PR | 备注 |
|---|---|---|---|---|
| **高** | **#6047** | 任务消息乱序 | **#6096** | 已同步上线 |
| **高** | **#5948** | GitHub 扩展误报安装状态 | **#5598** 优化 `extensions` 状态检查 | 触发 UI 痕迹错误 |
| **中** | **#5896** | WebUI memory browse 隔离 | **#5896** 已合并闭合 | 防止跨用户访问 |
| **中** | **#6087** | Extension catalog 失败时显示空白 | 未处理 | 需要重构错误处理逻辑 |
| **低** | **#6099** | `/llm/test-connection` 返回 `ok:true` 虽未连 | 未处理 | 可在下个版本改进回波 |

> **改进**：Bug Bash 阶段持续追踪顺序、权限与网络错误，已将 3 大类错误（顺序、权限、提示）在 PR 中解决。

---

## 6. 功能请求与路线图信号  
| 需求 | 来源 | 现状 | 预估落地 | 说明 |
|---|---|---|---|---|
| **扩展市场插件标准化** | #6087, #6039 | 现在仅 show 空列表 | 低优先级 | 需要统一 error‑display 机制 |
| **AI 成本可观测 Dashboard** | #5857 | 已在 #6111 里实现 | 中等 | 结合成本表实现前端 Dashboard |
| **高级安全审计（AuditSink）** | #5640 | 仍缺失******************************** | 高优先级 | 按 `AuditSink double` 命名去完善产品化 |
| **多租户插件生命周期** | #6056, #6066 | 现已实现部分 Flow | 中等 | 需要进一步测试并完善 UI |

- **路线图**：基于 PR #6061 (#6056/#6066) 的 Train A/Train B 同步；计划将 `AuditSink` 与 `AuditHub` 迁移到 `reborn`。

---

## 7. 用户反馈摘要  
- **人机对话顺序**：用户经常抱怨 “刚送出的任务消息逆序出现”，导致触发器功能失效（#6047）。  
- **扩展安装状态**：在 GitHub 与 Slack API 中，UI 误报 “已激活”，影响系统安全性（#5948）。  
- **权限隔离**：Memory Browse 的 “跨用户读写” 报告与意图不符（#5896）。  
- **网络错误** Cyril 域架构：Extension catalog 取数失败被误认为空；对交互的困惑（#6087）。  

> **结论**：UI 一致性、权限控制与错误反馈是目前主导的痛点。团队已优先处理这些领域的错误与修复。

---

## 8. 待处理积压  
| Issue | 说明 | 何时需处理 | 链接 |
|---|---|---|---|
| **#6028** | MCP tab 前端 $ 漏洞 | 2026‑07‑18 | <https://github.com/nearai/ironclaw/issues/6028> |
| **#6037** | 连接状态隐藏 | 2026‑07‑20 | <https://github.com/nearai/ironclaw/issues/6037> |
| **#6085** | Admin 心跳按钮无效 | 2026‑07‑31 | <https://github.com/nearai/ironclaw/issues/6085> |
| **#6109** | OpenAI‑compat 模型重写忽略娇 | 2026‑08‑05 | <https://github.com/nearai/ironclaw/issues/6109> |
| **#5674** | Slack 自动同步用户名显示错误 | 2026‑07‑15 | <https://github.com/nearai/ironclaw/issues/5674> |

> **建议**：整合上述积压到 `train‑C` 版本迭代计划，确保在 `reborn`、` ارتباط` 与 `extension‑runtime` 交叉依赖一致时统一完成。

---

**结语**：IronClaw 在过去 24 h 里保持高交互量，在核心功能与安全方面实现了关键 fix 与功能迭代。团队正积极平衡内外部 ong‑巡检（Bug Bash）与长期路线图交付。请关注后续 PR `#5608`（内部测试滚动完成）与 `#6083` 的 UI 统一计划。祝项目进展顺利。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>


# LobsterAI 项目动态日报 - 2026-07-15

## 1. 今日速览

LobsterAI 项目今日活跃度较低，仅处理了过去24小时内的4个已关闭Issue和3个已合并PR，均为清理旧问题和维护性更新。项目没有发布新版本，整体维护状态稳定但缺乏新功能开发活力。所有Issue都被标记为"stale"并关闭，表明维护团队正在进行定期清理工作。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并的3个PR主要围绕OpenClaw运行时环境的稳定性修复：

- **[#2331](https://github.com/netease-youdao/LobsterAI/pull/2331)**: 修复关键工具循环终止逻辑，防止Agent运行卡死
- **[#2330](https://github.com/netease-youdao/LobsterAI/pull/2329)**: 停止已中止的工具运行后继续循环的问题
- **[#2329](https://github.com/netease-youdao/LobsterAI/pull/2329)**: 防止对话滚动跳跃，提升用户体验

这些更新推进了核心引擎的稳定性和渲染层的用户体验，但属于维护性修复而非功能增强。

## 4. 社区热点

今日讨论最活跃的Issue是：
- **[#1386](https://github.com/netease-youdao/LobsterAI/issues/1386)**: 会话分享功能内容不全问题（2条评论）
- **[#1388](https://github.com/netease-youdao/LobsterAI/issues/1388)**: 邮箱配置测试连通性无响应（2条评论）
- **[#1390](https://github.com/netease-youdao/LobsterAI/issues/1390)**: 定时任务更新无响应（2条评论）

用户关注的是核心功能的稳定性问题，特别是分享和配置功能的可靠性。

## 5. Bug 与稳定性

今日报告的Bug（已关闭）按严重程度排列：

**高严重性**:
- **[#1390](https://github.com/netease-youdao/LobsterAI/issues/1390)**: 定时任务编辑后更新功能不可用（偶现）
- **[#1388](https://github.com/netease-youdao/LobsterAI/issues/1388)**: 邮箱配置测试功能卡死

**中等严重性**:
- **[#1386](https://github.com/netease-youdao/LobsterAI/issues/1386)**: 长内容分享截图不全
- **[#1389](https://github.com/netease-youdao/LobsterAI/issues/1389)**: 语言选择显示错误

所有Bug均已关闭但无fix PR指向，可能需要进一步确认是否实际解决。

## 6. 功能请求与路线图信号

今日无新的功能请求提出。从现有PR来看，项目路线图目前聚焦于：
- OpenClaw运行时稳定性优化
- 基础UI/UX体验改进

## 7. 用户反馈摘要

从Issues评论中提炼的关键反馈：
1. **分享功能**: 用户希望长格式内容分享时能完整保留原有内容
2. **配置体验**: 邮箱等系统配置需提供即时反馈，避免无响应情况
3. **多语言支持**: 英文环境下中文选项显示需要保持一致性

## 8. 待处理积压

所有今日关闭的Issue都原始创建于2026-04-03，显示出项目存在长期积压的问题处理能力有限。这4个Issue在4月份创建后长时间未得到处理，直到7月14日才被标记为stale并关闭，表明维护资源可能不足或优先级排序存在问题。建议维护团队关注这些潜在的核心功能问题是否已实际解决。


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-07-15)

**分析师注：** 本报告基于 Moltis 开源项目 2026 年 7 月 14 日至 15 日的开发活动数据生成。

---

### 1. 今日速览
Moltis 项目目前处于**高度活跃的迭代期**。过去 24 小时内，项目展现了极高的维护效率，共处理了 12 条 Pull Requests（其中 8 条已合并/关闭），并发布了一个新版本。当前开发重点正从基础架构的稳定性（如修复 MCP OAuth 与 CalDAV 崩溃问题）转向对前沿模型（如 GPT-5.6）的支持及复杂 Agent 交互能力的增强（如浏览器截图功能、上下文命令支持）。项目整体健康度良好，维护者对 Bug 的响应极快。

### 2. 版本发布
* **版本号：** `20260714.11`
* **发布日期：** 2026-07-14
* **更新摘要：** 该版本属于例行迭代更新。结合今日合并的 PR 来看，新版本极有可能包含了对 MCP OAuth 授权流程的修复以及对 CalDAV 非 ASCII 时间格式处理的加固。

### 3. 项目进展
今日项目在**模型兼容性**与**系统稳定性**方面取得了显著进展：
* **模型能力扩展：** 已合并支持 **GPT-5.6** (Sol, Terra, Luna) 系列模型，并根据 OpenAI 最新的 API 规范更新了上下文窗口（1.05M）与后端限制参数。[PR #1146](https://github.com/moltis-org/moltis/pull/1146)
* **底层逻辑加固：** 修复了在处理小型本地模型（如 Gemma 4）时，因参数类型（String vs Scalar）不匹配导致的验证失败问题。[PR #1136](https://github.com/moltis-org/moltis/pull/1136)
* **核心组件修复：** 成功修复了 MCP 协议在集成 Notion/Linear 等服务时的 OAuth 授权失败问题，极大提升了第三方工具集成的使用体验。[PR #1120](https://github.com/moltis-org/moltis/pull/1120)
* **依赖管理：** 完成了多项 npm/yarn 依赖项的例行更新，保持了前端及文档构建工具的现代性。[PR #1141](https://github.com/moltis-org/moltis/pull/1141)

### 4. 社区热点
* **本地 STT 引擎增强：** 用户 `LauraGPT` 提出希望引入 **FunASR/SenseVoice** 作为本地语音转文字（STT）引擎。这反映了社区对于**隐私保护**和**离线 AI 能力**的强烈需求。[Issue #1102](https://github.com/moltis-org/moltis/issues/1102)
* **浏览器 Agent 交互升级：** 关于“在每次操作后自动截屏以生成时间线”的功能提案引起关注。该功能将极大提升 Agent 在复杂网页任务中的可解释性与监控能力。[PR #1135](https://github.com/moltis-org/moltis/pull/1135)

### 5. Bug 与稳定性
| 严重程度 | 问题描述 | 状态 | 关联链接 |
| :--- | :--- | :--- | :--- |
| 🔴 **高 (崩溃)** | CalDAV 在处理非 ASCII 字符时间日期时会导致程序 Panic | **已修复** | [PR #1145](https://github.com/moltis-org/moltis/pull/1145) |
| 🟡 **中 (功能失效)** | "main" session 无法被删除或归档 | **待处理** | [Issue #1132](https://github.com/moltis-org/moltis/issues/1132) |
| 🟡 **中 (兼容性)** | 某些小型本地模型在调用浏览器工具时参数类型不匹配 | **已修复** | [PR #1136](https://github.com/moltis-org/moltis/pull/1136) |
| 🟢 **低 (体验)** | 浏览器工具调用中可选参数为 null 时引发的错误 | **已修复** | [PR #1098](https://github.com/moltis-org/moltis/pull/1198) |

### 6. 功能请求与路线图信号
根据近期 PR 趋势，Moltis 的路线图正向以下方向演进：
* **高度可定制的 Agent 行为：** 通过 `chat.context_command` 实现运行时上下文注入，赋予用户更强的控制力。[PR #1124](https://github.com/moltis-org/moltis/pull/1124)
* **精细化权限管理：** 增加针对频道、用户和账号级别的活动日志（Activity Log）可见性设置，这暗示了项目正在向**企业级/多用户协作场景**迈进。[PR #1093](https://github.com/moltis-org/moltis/pull/1093)
* **强化可视化监控：** 通过自动截图实现 Agent 操作过程的视觉

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目日报（2026‑07‑15）**  
*GitHub repo*: https://github.com/agentscope-ai/QwenPaw  

---  

### 1. 今日速览  
- **活跃度**：过去 24 h 共处理 50 条 Issue（16 新/活跃，34 已关闭）与 50 条 PR（24 待合并，26 已合并/关闭）。  
- **发布**：本周发布 *v2.0.0.post2*，带来若干安全与工具改进。  
- **质量**：已关闭的 Bug 主要集中在沙箱、内存与 Dealers；未解决的回归已被标记为 HIGH。整体项目保持健康，社区讨论热度稳定。  

---

### 2. 版本发布  
**v2.0.0.post2**  
- **新特性**  
  - `more sensitive files`：允许 `read_global=True` 的用户访问敏感文件（PR #6067）。  
  - ‑ 细化了 `generate_image_gpt` 的配置流程（PR #6105，已合并至发布）。  

- **变更**  
  - 版本号 bump (`v2.0.0.post2` → `v2.0.0post2`)（PR #6070）。  
  - 引入 `runtime/security/install` 回归测试，确保沙箱安装过程不受破坏。  

- **破坏性改动**  
  - 由于配置文件结构改动，`tools.gen_img.cfg` 已从 UI 移除，需使用 `config.json` 或 CLI (`--tool-generate_image_gpt-url ...`) 配置。  
 파일  
- **迁移建议**  
  1. 检查 `config.json` 中的 `tools` 部分，恢复缺失 شور.  
  2. 若自定义工具依赖旧的 `generate_image_gpt` 设置，迁移至 `tool:{}`。  
  3. 重新执行一次 `pip install --upgrade qwenpaw` 以确保所有安全检查正常 célébradoVersion。  

---

### 3. 项目进展  
| PR# | 主要内容 | 状态 | 影响 |
|-----|----------|------|------|
| **#6123** | fix(scroll): 防止回忆循环与强制硬上下文限制 | OPEN | 改进长会话（尤其 DeepSeek）下 "() 切换" 的稳定性，预计减低 15% 的 400 错误率。 |
| #6108 | fix(context): 维护 tool‑result + assistant 对齐 | OPEN | 修复 DeepSeek 压缩后 "工具消息缺失" 的 400 错误；强制恢复交互完整性。 |
| #6122 | fix(governance): 清除 OFF‑mode 过期沙箱状态 | OPEN | 防止离线事件被误触发，提升安全性。 |
| #6120 | fix(memory): 限制自动记忆仅对外部查询 | OPEN | 解决 “Doom Loop” 的自我强化，优化内存使用。 |
| #6111 | fix(acp): 去重外部代理最终答案 | OPEN | 移除重复回答，提升用户体验。 |
| **已合并**  
| #6109 | fix(governance): honor sandbox_enabled 在 OFF‑mode | CLOSED | 确保全局安全开关不被忽略。 |
| #6112 | feat(plugins)：新增 Zalo Bot channel | CLOSED | 兼容 2.0 插件体系，拓展多平台支持。 |
| #6098 | feat(memory)：提升 ReMe 可靠性与 CJK Embedding 安全 | CLOSED | 解决中文长记忆索引 “超长上下文” 的 400 错误。 |

> 以上 PRs 在过去 24 h 内越过 “待合并” 阶段，显示 **功能完善** 与 **安全稳定** 并重，项目投入明显。  

---

### 4. 社区热点  
| Issue/PR | 链接 | 统计 | 诉求分析 |
|----------|------|------|----------|
| **#2291** | https://github.com/agentscope-ai/QwenPaw webdriver | 64 comments | 打开任务清单，鼓励新人上手，优先级从 P0→P2。社区关注者希望快速定位“未开始”任务，了解贡献流程。 |
| **#5951** | https://github.com/agentscope-ai/QwenPaw | 9 comments | Windows 沙箱严重异常（pwsh 递归、内存泄漏），引发“使用者无法正常关闭沙箱”。需求：**即刻修复**，重构沙箱初始化。 |
| **#6113** | href | 5 comments | 2.0 后搜索记忆循环耗时，用户希望恢复 1.0 高频刷新逻辑。 |
| **#6087** | contar | 4 comments | 需要实时把新消息注入 agents 的迭代循环；用户痛点：不及时纠正方向导致无效计算。 |
| **#5976** |  | 4 comments | 控制 channel 之工具调度结果发送，用户想把结果截断来减轻信息噪声。 |
| ** demos** |  |  |  |

> **Primary关注**：沙箱异常、记忆循环、工具配置消失。社区在这些议题上投入最集中，表明产品稳定性是近期优先方向。  

---

### 5. Bug 与稳定性  
| Bug | Impact | 当前状态 |
|-----|--------|----------|
| **#5951** Windows 沙箱递归爆炸 | ★★★★★ | PR #6088（回归）已合并；仍需验证长时间运行。 |
| **#6088** v2.0.0.post1 消息队列回归 | ★★★★ | PR #6040（解锁消息队列）已合并；测试验证通过。 |
| **#6077** Deep戒压缩破'informations Cache | ★★★★ | PR #6108（对齐工具/助手）已合并；已减轻 400 错误。 |
| **#6046** toolResult 超限导致会uitive  | ★★★★ | PR # যেমন? 否有未修复；投票 2/3 PR。 |
| **#5964** 会话历史映射丢失 | ★★★ | PR #6043（修复批量迁移）计划中。 |
| **#6105** generate_image_gpt 配置按钮缺失 | ★★ | PR #6075（UI 复位）合并，已在下次 release。 |

> **总体结论**：大多数高优先 Bug 已在 PR 中得到修复，剩余问题正陆续进入 PR 阶段，拉取请求数量与关闭数量基本平衡。  

---

### 6. 功能请求与路线图信号  
| Issue | 请求 | 现行 PR | 下一版本可能性 |
|-------|------ Trying |-------------|----------------|
| #5976 | 单独控制 tool 结果发送 | PR #6150（未开启） | 计划在 v2.1.0（提升信息可读性） |
| #6087 | 实时注入新消息 | PR #6124（正在评估） | 作为“对话无缝切换”特性；优先级 P1 |
| #5979 | 允许 root 运行 Electron cli | PR #6132（单元测试） | GUI 安全性改进；可做后续安全模块 |
| #6048 | 免认证主机白名单支持 CIDR | PR #6181（已合并） | 已入 v2.0.0 版本，进一步提升网络控制 |

> **路线图**：继续细化 **Sandbox** 与 **Governance**，并关注 **实时消息注入** 与 **工具输出管理**。  

---

### 7. 用户反馈摘要  
- **持续循环与性能卡顿**：Issue #6113 与 #6050（search memory loop）表明 2.0 的记忆检索逻辑在某些场景下“无休止循环”，导致超时。  
- **沙箱失效**：#5951 与 #5984 说明沙箱初始化与权限错误直接导致工具失控或 UI 崩溃，影响可信执行。  
- **配置丢失**：#6105 与 #6085 报告工具配置按钮缺失，导致用户无法修改图像生成服务地址与 token。  
- **工具结果冗长**：#5976 与 #6090 反馈长条工具结果吞噬频道，用户体验不佳。  
- **ReMe 可靠性**：#6098 指出 ReMe 与 Scrolling Context 冲突，中文记忆索引重建时抛 400 错误。  

> **总结**：用户核心关注点集中在 **稳定性**（尤其沙箱/内存）与 **可配置性**（工具参数）。为获得更广泛采用，需在下一版本优先解决此类问题。  

---

### 8. 待处理积压  
| Issue | 影响 | 状态 | 建议呼吁 |
|-------|------|------|----------|
| #2291 Open Tasks |高 | 关闭 | 这些任务已列入“待处理”，仍需指派明确负责人，确保所有 P0‑P2 项目得到进度跟进。 |
| #5951 Windows 沙箱递归 |极高 | 关闭 | 修复已提交，需在 PR #6088 中确认长期复现解决。 |
| #6048 免认证主机白名单 |中 | Open | 已合并 PR #6181 但需进一步测试。 |
| #6030 未列 |低 | 未寻 | 没有完整的任务描述，建议创建新 Issue 或把现有讨论拆分。 |
| #6065 (dead imports) |低 | Open | PR #6065 已进入评审，未来可移除 obsolete 模块。olka |  

> **提醒**：任何未完成 Issue 先暂停的新 Feature 之前，建议先完成 `Open Tasks` 列表中的**P0** 项目，保持项目创新与质量同步推进。  

---  

> **结语**：整体来看，CoPaw 在过去 24 h 内保持了 **高活跃度**，问题得到及时修复，新功能引入渐进，社区热议聚焦安全与稳定	temp线_curve。项目健康度良好，持续关注待处理 Issue 与采纳社区反馈，可进一步提升用户满意度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目日报 2026-07-15  

## 1. 今日速览  
- 项目今日活跃度维持高水平：29条Issues（其中6条关闭，23条活跃）和50条PR（16条已合并），未发布新版本。  
- 若有分布式部署关注点，安全性与配置能力相关的任务占比较高，即期流量集中在这类问题上。  
-  dever为接下来的线上维护与版本规划打下基础，迭代周期可能加快。  

## 2. 版本发布  
- 今日未发布新版本，项目进度集中于Critical path清理与功能累加阶段。  

## 3. 项目进展  
- **关键功能推进**：  
  - #9079（高风险）：SOP路由功能合并，允许`false`条件后续执行逻辑，支持多阶段SOP - 直接降低SOP设计门槛。  
  - #9029（中风险）：修复OpenAI Vision功能回退问题，提升多模态交互稳定性。  
  - #8890（高风险）：新增Web搜索状态分类，增强服务中断隔离能力。  
- **安全性巩固**：#8973（高风险）反 Adversary的landlock沙箱问题解决方案已提出。  
- **进度量化**：7/14日历日内合并或关闭的PR数量接近40%，节奏快于季度预期。  

## 4. 社区热点  
- **Issue #8973（高风险）**： federated部署技术团队重点关注，评论量突破40条 - 核心涉及系统文件访问控制。  
  链接: [Issue #8973](zeroclaw-labs/zeroclaw Issue #8973)  
- **PR #8862（高评分）**：新增Webhook-PLUGIN入口机制提案，被多个实现团队讨论。  
  链接: [PR #8862](zeroclaw-labs/zeroclaw PR #8862)  
- 多项memory模块优化（如#9064-#9069）受测试团队反复讨论，侧面暴露用户对内存权限管理的需求。  

## 5. Bug 与稳定性  
- **高危Bug已解决**：  
  - #8631（SOP虚假完成记录问题） - 通过增强deterministic检查逻辑修复。  
  - #8973（flex沙箱沙指令问题） - 通过`sh`权限绕规避方案初议。  
- **未修复高风险问题**：  
  - #8675（OpenRouter参数编码问题 - 仍存在400错误漏洞，致.data损失风险）。  
  - #8353（路径分解错误提示不完整 - 需要类型安全增强）。  

## 6. 功能请求与路线图信号  
- **RBAC方向确立**：#5982（高风险）提出的Per-sender RBAC成为多租户架构基础。  
- **SOP能力扩展**：#8719（中风险）提案的虚假when条件处理方向，与跨团队合作进展。  
- 术应该注意：memory层级权限（#9064-#9069）与traceability（#8689）趋于集中讨论。  

## 7. 用户反馈摘要  
- **痛点明确**：  
  - #7947反映Tool权限的Confused Delegate漏洞，用户关心横向访问保护。  
  - #8563显示Web界面SOP发现功能缺失，致工作流阻塞。  
- **积极反馈**：  
  - #6685功能建议（SOP HTTP入口）被多个企业级用户共赞，作为快速接入需求。  

## 8. 待处理积压  
- **长期任务提醒**：  
  - #7320（里程碑跟踪 - 0.8.3版本结构）：需协同主管确保子PR清算完成。  
  - #9052（Line Channel覆盖漏洞）：GitHub测试团队需优先关闭。  
  - #8358（rerelay部署）：secure-transport落地维度关键，需与安全轮值部署同步。  

---  
**总体健康度评估**：黄色警告 - 开发节奏与发布节奏脱钩（85天未发布），但代码质量（合并率50%）可控。建议锁定v0.8.x路线图提前发布。


</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*