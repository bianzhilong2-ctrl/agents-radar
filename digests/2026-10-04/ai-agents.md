# OpenClaw 生态日报 2026-10-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-04 03:27 UTC

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

# OpenClaw 项目动态日报（2026-10-04）

---

### 1. 今日速览  
OpenClaw 项目社区活跃度较高，过去 24 小时累计发起 500 条 Issues（391 条新/活跃，109 条关闭）和 500 条 PR（291 条待合并，209 条合并/关闭）。社区聚焦于高严重性稳定性问题及性能瓶颈，尤其是 SQLite 存储、分体式代理会话和 Gateway 资源管理方面。暂无新版本发布，但多个关键 bug 的修复 PR 已进入审查阶段，显示项目处于快速迭代优化中。

链接：[GitHub 活动概览](https://github.com/openclaw/openclaw/issues)

---

### 2. 版本发布  
暂无新版本发布。

---

### 3. 项目进展  
今日合并/关闭的关键 PR 如下：  
- **#164735**（[PR 链接](https://github.com/openclaw/openclaw/pull/164735)）  
  优化 Control UI 启动下载体积，减少 1,993 Gzip 字节，提升页面加载性能。  
- **#164653**（[PR 链接](https://github.com/openclaw/openclaw/pull/164653)）  
  精简 2026.9.8 版本发布说明，增强文档可读性与用户沟通效率。  
- **#164724**（[PR 链接](https://github.com/openclaw/openclaw/pull/164724)）  
  修复版本管理器在回滚时的 custody reader 丢失问题，确保升级路径安全。  
这些变更体现项目在性能优化、文档完善和版本一致性方面的持续投入。

---

### 4. 社区热点  
当前社区讨论活跃度集中在以下议题：  
- **Issue #143524**（[链接](https://github.com/openclaw/openclaw/issues/143524)）  
  SQLite WAL 文件持续增长致 Gateway 启动失败（影响 P0），已追踪 105 条评论，是当前最活跃的议题之一。  
- **Issue #119720**（[链接](https://github.com/openclaw/openclaw/issues/119720)）  
  报告同步持久化操作阻塞事件循环，引发大规模会话性能瓶颈。  
- **PR #164653**（[链接](https://github.com/openclaw/openclaw/pull/164653)）  
  提交文档修订，获得广泛认可，体现维护者对社区反馈的快速响应。  
这些议题反映出社区对系统可靠性与可维护性的高度关注。

---

### 5. Bug 与稳定性  
当前高危 Bug 列表（按严重性排序）：  
- **P0 级 Bug**  
  - **#143524**（SQLite WAL 无限增长）  
    已关联 #145252 作为跟踪 issue，无直接 fix PR。  
  - **#162031**（Gateway 崩溃循环）  
    由更新触发，需额外排查依赖链问题。  
  - **#154812**（RSS 内存溢出导致 OOM）  
    影响 Linux 环境，需关注 Node.js 内存配置。  
- **P1 级 Bug**  
  - **#137332**（终端请求延迟 settlement 重试失效）  
    已关闭，显示社区对消息一致性的重视。  
  - **#121953**（DeepSeek 延迟任务）  
    提及模型驱动因素，需优化前缀处理逻辑。  

> 注：多个 Bug 已关联至 #145252，作为 2026.9.3/9.4 版本专项修复 tracker。

---

### 6. 功能请求与路线图信号  
用户反馈的功能需求与潜在路线：  
- **#67440**（[TOTP 身份验证需求](https://github.com/openclaw/openclaw/issues/67440)）  
  社区提出 Exec 命令需 TOTP 双因素认证，体现安全敏感场景需求。目前 PR #110102（[链接](https://github.com/openclaw/openclaw/pull/110102)）探索权限沙箱机制，可能为后续安全增强提供方案。  
- **#101422**（可配置记忆回溯路径）  
  支持 Markdown 工作区优化，PR #122019（[链接](https://github.com/openclaw/openclaw/issues/122019)）已反馈此类功能缺失，值得纳入后续版本规划。  

---

### 7. 用户反馈摘要  
从 Issue 评论中提炼的关键痛点：  
- **崩溃与资源耗尽**  
  多位用户抱怨 Windows 环境下 Gateway 启动失败（#143524），Linux 宿主内存泄漏（#154812），反映平台兼容性薄弱。  
- **会话一致性问题**  
  subagent settlement 死循环（#159612）、记忆回溯丢失（#150635）为用户核心痛点，影响交互可靠性。  
- **配置热加载失效**  
  #144291 报告热加载中断 agent 运行，用户渴望“热插拔”能力提升运维体验。  

---

### 8. 待处理积压  
需紧急关注的长期未解决议题：  
- **#142271**（[链接](https://github.com/openclaw/openclaw/issues/142271)）  
  cron 任务在代理活跃时无法执行系统命令，已追踪 7 条评论但无 fix PR。  
- **#123799**（[链接](https://github.com/openclaw/openclaw/issues/123799)）  
  Codex 老版本用户遭遇 404 错误，需提供回退方案。  
- **#81595**（[链接](https://github.com/openclaw/openclaw/issues/81595)）  
  MCP 服务器冷启动成本不可见，影响诊断效率。  

> 这些议题涉及跨平台稳定性、版本兼容性与可观测性，属于下一版本优先级修复候选。

--- 

此报告由 OpenClaw 社区数据自动生成，旨在为维护者与用户提供项目健康度的结构化洞察。

---

## 横向生态对比

# 2026-10-04 个人 AI 助手/自主智能体开源生态横向对比分析报告

## 1. 生态全景

2026 年 10 月 4 日，个人 AI 助手与自主智能体开源生态呈现**活跃度分化**的态势。核心项目（OpenClaw、NanoBot、NullClaw、ZeroClaw）保持高活跃度，聚焦于稳定性修复、性能优化与功能迭代；而部分项目（PicoClaw、Hermes Agent、TinyClaw 等）处于低维护状态，仅有少量 Bug 修复或功能推进。整体来看，生态正从“快速迭代探索”向“质量巩固与架构成熟”过渡，各项目在安全加固、跨平台兼容性与用户体验优化上呈现不同的发展轨迹。

## 2. 各项目活跃度对比

| 项目 | Issues（今日） | PR 数（今日） | Release 状态 | 健康度评估 |
|------|----------------|--------------|-------------|------------|
| **OpenClaw** | 500（391 新/活跃，109 关闭） | 500（291 待合并，209 合并/关闭） | 无新版本 | ⭐⭐⭐⭐⭐ 高活跃，快速迭代优化 |
| **NanoBot** | 未明确统计（多 PR 合并） | 47（21 合并/关闭） | 无新版本 | ⭐⭐⭐⭐ 高活跃，功能与稳定性并重 |
| **Hermes Agent** | 1（新） | 0 | 无新版本 | ⭐⭐ 稳定但低交互，维护频率低 |
| **PicoClaw** | 未明确统计 | 0 | 无新版本 | ⭐ 低活跃，单点 QQ 适配问题 |
| **NanoClaw** | 7（新/活跃） | 31（18 合并/关闭） | 无新版本 | ⭐⭐⭐ 良好推进，中等活跃度 |
| **NullClaw** | 0 | 20（全部待合并） | 无新版本 | ⭐⭐⭐⭐ 高 PR 产出但阻塞严重 |
| **IronClaw** | 1（#8122 关键） | 0 | 无新版本 | ⭐⭐ 存在 P0 级阻塞，需优先响应 |
| **LobsterAI** | 6（新/活跃） | 1 | 无新版本 | ⭐⭐ 低维护，平台兼容性问题突出 |
| **TinyClaw** | 未明确 | 0 | 无新版本 | ⭐ 几乎静止 |
| **Moltis** | 未明确 | 0 | 无新版本 | ⭐ 低活跃 |
| **CoPaw** | 未明确 | 0 | 无新版本 | ⭐ 低活跃 |
| **ZeptoClaw** | 未明确 | 0 | 无新版本 | ⭐ 低活跃 |
| **ZeroClaw** | 50（新） | 50（全部待合并） | 无新版本 | ⭐⭐⭐⭐ 高 PR 产出但长期阻塞 |

## 3. OpenClaw 在生态中的定位

**优势**：
- **核心地位**：作为 OpenClaw 系列旗舰项目，拥有最高的 Issue/PR 活跃度（500+/日），代表了生态中最活跃的 AI 助手框架。
- **技术路线**：聚焦于 SQLite 存储优化、分体式代理会话管理与 Gateway 资源调度，强调稳定性与性能平衡。
- **社区规模**：社区活跃度最高，涵盖多领域用户（企业级、研究、个人开发），贡献者基数大。

**与同类项目的差异**：
- 相较于 **NanoBot**（侧重 UI 体验与 TUI 优化）和 **NullClaw**（侧重通道生态与安全加固），OpenClaw 更强调**底层系统稳定性**与**跨平台兼容性**（SQLite WAL 问题、Gateway 资源管理）。
- 相较于 **ZeroClaw**（侧重多通道协同与功能扩展），OpenClaw 更偏向**核心框架的健壮性**，在性能优化与故障恢复上表现更为突出。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **跨平台兼容性** | OpenClaw、NanoBot、LobsterAI | 解决 SQLite WAL 增长、GNOME/Wayland 环境变量传递、macOS 权限隔离等问题 |
| **安全加固** | NullClaw、IronClaw、LobsterAI | 防御 Credential Backend 注入、Discord 自反馈循环、OAuth 凭证编码安全 |
| **资源管理与性能** | OpenClaw、NanoClaw、ZeroClaw | 优化 SQLite 查询、内存泄漏修复、GC 调优、CPU 占用控制 |
| **功能扩展与自动化** | NanoBot、NullClaw、ZeroClaw | 后台任务静默化、技能记忆层、子代理系统、Agent 循环优化 |
| **分布式协同** | IronClaw、NullClaw | 多通道（Discord、WeChat、Telegram）统一 API、Provider 生态扩展 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|-------------------|
| **OpenClaw** | 核心框架稳定性、性能优化 | 企业级开发者、研究团队 | 采用分体式代理会话、Gateway 资源管理，强调 SQLite 存储与 WAL 优化 |
| **NanoBot** | UI/UX 体验、TUI 增强 | 个人开发者、桌面自动化用户 | 侧重触摸设备交互、WebUI 移动端适配、MCP 生态集成 |
| **NullClaw** | 通道生态、安全加固 | 多平台多渠道用户 | 通道统一接口、Discord/WeChat 同步、安全审计机制 |
| **ZeroClaw** | 功能扩展、流式处理 | 研发团队、复杂工作流 | 支持多通道协同、流式工具调用、Agent 循环优化 |
| **IronClaw** | 安全与可靠性 | 生产环境部署 | 严格的凭证后端验证、WebApp 扩展集成、权限最小化 |
| **LobsterAI** | 用户体验、基础功能 | 大众消费者 | 登录/支付、微信分享、跨平台 UI 兼容 |

## 6. 社区热度与成熟度

| 成熟度层级 | 项目 | 特征 |
|------------|------|------|
| **快速迭代阶段** | OpenClaw、NanoBot、NullClaw、ZeroClaw | 高 Issue/PR 产出，功能推进快，但部分存在阻塞（IronClaw #8122） |
| **质量巩固阶段** | NanoClaw、NanoBot | 稳定性提升明显，功能完善，社区反馈积极 |
| **低维护/阻塞期** | PicoClaw、Hermes Agent、TinyClaw、Moltis、CoPaw、ZeptoClaw | 活跃度低，部分项目存在长期未合并 PR（NullClaw 20 条 PR 全部待合并） |
| **危机/阻塞期** | IronClaw | 单一 P0 级阻塞（macOS 开发者启动失败），需立即响应 |

## 7. 值得关注的趋势信号

1. **安全加固成为共识**：NullClaw、IronClaw、LobsterAI 均在加强凭证管理、OAuth 认证与权限隔离，反映出行业对 AI 系统安全的重视。
2. **跨平台兼容性挑战**：OpenClaw 的 SQLite WAL 问题、NanoBot 的 GNOME/Wayland 环境变量传递、LobsterAI 的 Windows 命令失效，表明多平台适配仍是关键难点。
3. **功能扩展与自动化**：NanoBot 的后台任务静默化、ZeroClaw 的技能记忆层、NullClaw 的子代理系统，显示智能体向“自主协作”方向演进。
4. **性能优化与资源管理**：OpenClaw 的 SQLite 存储优化、NanoClaw 的内存召回控制、ZeroClaw 的 GC 调优，凸显对资源效率的持续追求。
5. **分布式协同趋势**：NullClaw 与 IronClaw 都在推进多通道统一 API，LobsterAI 关注跨平台分享（微信、Telegram），暗示未来智能体将更倾向于“多源协同”架构。

---

**结论**：2026 年 10 月 4 日的生态呈现“核心驱动、边缘支撑”的格局。OpenClaw 作为生态枢纽保持高活跃度，聚焦稳定性与性能；NullClaw 与 ZeroClaw 在功能扩展与安全加固上表现突出；而部分项目（PicoClaw、Hermes Agent、TinyClaw 等）处于低维护状态，需关注长期阻塞（如 IronClaw 的 macOS 启动失败）。对于 AI 智能体开发者而言，**安全加固、跨平台兼容性与资源管理**是共同关注的技术方向，而**功能扩展（后台自动化、技能记忆、子代理）**则是各项目的差异化竞争点。建议优先响应 IronClaw 的 P0 级阻塞，并在 OpenClaw、NullClaw 等核心项目上持续投入稳定性与安全加固力度。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



好的，这是根据您提供的 NanoBot GitHub 数据生成的 2026-10-04 项目动态日报。

---

### **NanoBot 项目动态日报 - 2026-10-04**

#### **1. 今日速览**
NanoBot 项目在2026年10月4日展现出极高的开发活跃度，主要由大量的 Pull Requests 推动，标志着项目正处于一个密集的 bug 修复和功能增强阶段。今日无新版本发布，但社区提交了新的功能请求和错误报告，表明用户参与度持续。项目整体健康度良好，维护者响应积极，多个关键模块（如 TUI、WebUI、MCP）均有重要改进合并。

#### **2. 版本发布**
**无新版本发布。**

#### **3. 项目进展**
今日有大量 PR 更新（47条），其中已合并/关闭的 PR 达 21 条，显著推动了项目进展，主要集中在稳定性、用户体验和功能完善上：
-   **WebUI 增强**：多个 PR 合并，重点改善了触摸设备上的用户体验，包括 (#6023, #6022, #6021)，使界面在移动设备上更易用。
-   **关键 Bug 修复**：TUI 模块有三个重要修复合并，解决了提示词发送失败、文件编辑顺序错乱和键盘输入兼容性问题 (#6026, #6027, #6025)，直接提升了核心交互的可靠性。
-   **功能扩展**：一个长期的 PR (#1651) 被更新，引入了可选的技能记忆层，为 AI 助手的长期学习能力奠定了基础。
-   **其他修复**：涉及 MCP 服务器连接 (#6018, #6019)、提供者回退逻辑 (#5764)、API 响应处理 (#5763, #6020) 等多个方面的稳定性提升。

**整体迈进**：项目正从功能开发阶段转向打磨细节、提升稳定性和扩展生态的阶段。

#### **4. 社区热点**
今日社区讨论的热点主要集中在两个新提出的 Issues 上，反映了用户在实际使用中遇到的具体问题：
-   **Issue #6029**：用户 `npike` 请求在后台维护任务（如上下文压缩、心跳检测）中实现静默操作并抑制广播通知。这反映了用户对后台任务干扰前台对话体验的普遍关切。
    -   **链接**：`HKUDS/nanobot#6029`
-   **Issue #6024**：用户 `austinleekelly` 报告了在 GNOME/Wayland 环境下，通过 CLI App 使用 Obsidian 时出现的环境变量传递问题。此问题已有一个高度相关的 PR (#6030) 提出解决方案，显示了社区问题的快速响应。
    -   **链接**：`HKUDS/nanobot#6024`

#### **5. Bug 与稳定性**
**今日新报告 Bug (按严重程度排序)：**
1.  **高严重度**：**#6024** - CLI App 无法在 GNOME/Wayland 下定位 Obsidian。可能影响特定桌面环境下的核心工作流。
    -   **状态**：已有相关修复 PR **#6030** 提出，等待合并。
    -   **链接**：`HKUDS/nanobot#6024`
2.  **中严重度**：**#6029** - 后台任务触发上下文压缩时会向频道广播状态消息，干扰用户。
    -   **状态**：功能请求型 Bug，尚无修复 PR。
    -   **链接**：`HKUDS/nanobot#6029`

**已合并/关闭的重要 Bug 修复：**
-   **TUI 核心交互**：修复了提示词发送失败、文件编辑顺序错乱、Kitty 键盘兼容性问题 (#6026, #6027, #6025)。
-   **WebUI 移动端**：修复了触摸设备上的多个界面交互问题 (#6021, #6022, #6023)。
-   **MCP 生态**：修复了 MCP 服务器资源分页和连接无工具能力服务器的问题 (#6018, #6019)。
-   **提供者逻辑**：修复了回退探测的竞态条件和 Codex 图像生成流式响应问题 (#5764, #6011)。

#### **6. 功能请求与路线图信号**
-   **静默后台任务 (#6029)**：该功能请求若被采纳，将显著提升用户体验，使 nanobot 的后台自动化功能（如记忆整理、定时任务）更加“无感”和可靠。这可能是下一个版本的重要用户体验优化点。
-   **技能记忆层 (#1651)**：此 PR 是一个长期的功能性增强，旨在让 AI 能够学习和复用工作流模式。如果合并，将标志着项目在“智能”层面迈出了重要一步，可能成为未来版本的核心卖点。
-   **子代理系统 (#5985)**：此功能为每个会话创建独立的子代理来处理任务，并支持消息传递和取消，为构建更复杂的自动化工作流提供了基础，是路线图上的关键特性。

#### **7. 用户反馈摘要**
-   **痛点**：用户在使用特定桌面环境（GNOME/Wayland）时遇到环境变量传递问题 (#6024)，表明跨平台兼容性仍是关注点。后台任务的 intrusive 行为 (#6029) 是另一个主要的体验痛点。
-   **场景**：用户积极使用后台自动化功能（如空闲压缩、心跳检测）和桌面集成（Obsidian CLI），这些高级功能的易用性和稳定性是他们的核心诉求。
-   **满意度**：从大量 Bug 被迅速修复（尤其是 TUI 和 WebUI）可以看出，社区对维护者的响应速度和修复质量表示认可。

#### **8. 待处理积压**
-   **长期 PR**：**#1651** (技能记忆层) 和 **#5985** (子代理系统) 均已开放数月，虽有近期更新，但尚未合并。这两个是重要的架构性功能，建议维护者优先评估其成熟度和与主分支的集成计划。
-   **新 Issue**：**#6029** (静默后台任务) 作为新提出的功能型 Bug，若不及时处理，可能会影响用户对后台功能的使用意愿。
-   **建议**：维护者可考虑将 #6030 (修复 #6024) 优先合并，以解决一个明确的用户阻塞问题。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-04）

> 数据源：github.com/sipeed/picoclaw｜统计窗口：2026-10-03 ~ 2026-10-04

---

## 1. 今日速览

过去 24 小时项目整体活跃度较低：新增/活跃 Issue 1 条，PR 变动 0 条，无新版本发布。维护频率处于低位，社区交互集中于单个 QQ 频道适配问题。项目目前呈现"低提交、低发布、社区单点反馈"状态，需关注是否进入维护窗口期。

---

## 2. 版本发布

❌ 今日无新版本发布，跳过。

---

## 3. 项目进展

❌ 今日无 PR 合并或关闭记录，功能推进与缺陷修复的代码合并量为 0。项目整体代码库未因今日活动产生向前推进。

---

## 4. 社区热点

| Rank | Issue | 热度 | 链接 |
|---|---|---|---|
| 1 | #3394 QQ 机器人接口更新不同步 | 评论 2，👍 0 | [sipeed/picoclaw#3394](https://github.com/sipeed/picoclaw/issues/3394) |

**诉求分析**：用户 qinglt 反映 QQ 机器人端 API 已升级，但 PicoClaw 的 QQ 聊天通道（channel）实现未同步更新，导致调用失败或行为异常。诉求明确为"接口对齐"，属于集成层适配问题，非核心架构变更。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 链接 |
|---|---|---|---|
| 中 | QQ 聊天通道接口不兼容（可能影响消息收发） | 无对应 fix PR | [#3394](https://github.com/sipeed/picoclaw/issues/3394) |

> 当前仅 1 条 Bug 报告，无崩溃或回归问题溢出。

---

## 6. 功能请求与路线图信号

今日无新功能请求提出。QQ 接口适配诉求虽以 BUG 形式提交，但实质隐含"多通道同步维护"的路线图信号，建议维护者评估是否将 QQ 通道纳入自动化 API 兼容测试。

---

## 7. 用户反馈摘要

- **痛点**：QQ 频道作为常用接入方式，API 版本漂移后缺乏自动同步机制，用户需手动等待修复。
- **使用场景**：通过 QQ 聊天通道调用 PicoClaw 接入 AI 模型（具体模型未在摘要中披露）。
- **满意度**：用户持负面预期（"希望修复"），反映对项目响应速度的信心不足。

---

## 8. 待处理积压

| Issue | 积压时长 | 最后活动 | 建议 |
|---|---|---|---|
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) | 8 天（09-26 创建） | 10-03 更新 | 已标记 stale，建议维护者确认是否仍计划修复，或在 10 月底前关闭/移交 |

---

**项目健康度小结**：⭐️⭐️☆☆☆（低活跃 + 有积压 + 无发布）  
**建议行动**：1) 确认 #3394 修复排期；2) 评估是否需为 QQ 通道建立 API 版本锁定机制；3) 关注是否有静默提交未统计到本次窗口。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026‑10‑04）**  

---

### 1. 今日速览  
- 在过去 24 h 中，项目共处理 **7 条 Issue**（4 条新增/活跃，3 条已关闭）和 **31 条 PR**（18 条待合并，13 条已合并/关闭）。  
- 未发布新版本；最近的活动主要围绕 **更新/回滚稳定性**、**安全强化** 以及 **文档与流程规范** 展开。  
- 整体活跃度保持在中等偏上，且多数最近的 PR 已被合并，表明核心团队在快速迭代修复已知问题。

### 2. 版本发布  
- 今日 **无** 新版本发布。

### 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 标题 | 关联 Issue | 主要影响 | 链接 |
|----|------|------------|----------|------|
| #4016 | fix(update): load gateway helpers before cutover swaps node_modules | #4004（更新剪裁崩溃） | 在 `cutover` 阶段提前加载网关助手，防止因 `tsx` / `esbuild` 版本 bump 导致的节点模块替换崩溃。 | <https://github.com/qwibitai/nanoclaw/pull/4016> |
| #4008 | fix(add-imessage): open chat.db under Node with core's prebuilt better-sqlite3 | – | 使本地 iMessage 后端能够使用核心预编译的 `better-sqlite3`，避免因缺少二进制导致的安装失败。 | <https://github.com/qwibitai/nanoclaw/pull/4008> |
| #4001 | test(setup): mirror host pnpm patches and overrides in the nested-pnpm probe | – | 确保嵌套 pnpn 探针准确反映宿主的补丁/覆盖，消除本地后端添加后的测试闪退。 | <https://github.com/qwibitai/nanoclaw/pull/4001> |
| #4013 | fix(chat-sdk): authenticate the loopback Gateway webhook | #2970（本地动作伪造） | 为回环网关 Webhook 添加发送方身份验证，闭合未授权注入的攻击面。 | <https://github.com/qwibitai/nanoclaw/pull/4013> |
| #3989 | fix(onecli): pin the gateway to 1.42.0 for the host-enforcement bypass fix | – | 将 OneCLI 网关锁定至 1.42.0，修复凭证注入绕过主机强制执行的漏洞。 | <https://github.com/qwibitai/nanoclaw/pull/3989> |
| #4005 | build(deps): bump @grpc/grpc-js to 1.14.5 in the Iron approval bridge | – | 升级 gRPC 依赖，修复两个已知安全 advisory。 | <https://github.com/qwibitai/nanoclaw/pull/4005> |
| #3997 | fix(setup): commit applied skill files so a fresh install can update | – | 首次安装后自动提交技能文件，使后续 `/update-nanoclaw` 无需人工提交即可运行。 | <https://github.com/qwibitai/nanoclaw/pull/3997> |
| #3985 | fix(setup): keep proxy credentials out of readable service files | – | 防止代理凭据泄露到全局可读的 systemd 单元文件中。 | <https://github.com/qwibitai/nanoclaw/pull/3985> |
| #3987 | feat(release): self-approved x.y.z-rc.N pre-releases; widen stable approvers | – | 允许维护者单独发布 RC 预览版，稳定版仍保留二次审批，提升发布流程灵活性。 | <https://github.com/qwibitai/nanoclaw/pull/3987> |
| #3912 | ci(labels): run the area labeler after label-pr, not in parallel | – | 修复标签冲突，使 area 标签不会被并行的 label‑pr 工作流意外覆盖。 | <https://github.com/qwibitai/nanoclaw/pull/3912> |
| #4011 | docs(contributing): write down the core-or-fork rule | – | 在贡献指南中明确“小修补自行 fork”规则，减少不必要的 PR。 | <https://github.com/qwibitai/nanoclaw/pull/4011> |

> **整体趋势**：今日合并的 PR 集中在 **更新/回滚可靠性（#4016、#4001）**、 **安全强化（#4013、#3989）** 以及 **构建/依赖健康（#4005、#4008）** 上，直接对应了最近闭止的高优先级 Issue（#4004、#2970）。

### 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

| 项目 | 评论数 | 核心诉求 | 链接 |
|------|--------|----------|------|
| Issue #3643 – Hardcoded 30‑min ABSOLUTE_CEILING_MS cold‑kills long local‑model turns | 2 | 用户希望能够通过配置调整或取消硬编码的 30 分钟上限，以支持长时局部模型对话。 | <https://github.com/qwibitai/nanoclaw/issues/3643> |
| Issue #3223 – Scheduled‑task errors silently dropped | 1 | 期望任务错误能够被路由回调或记录，以便运维感知失败。 | <https://github.com/qwibitai/nanoclaw/issues/3223> |
| Issue #3301 – Tasks firing in chat sessions run one‑door (logs dropped, replies eaten) | 1 | 想要恢复任务在聊天会话中的正常日志与回复传递，避免信息丢失。 | <https://github.com/qwibitai/nanoclaw/issues/3301> |
| Issue #3984 – PreCompact hook fails: missing mailbox registration | 1 | 需要在压缩前挂起的 hook 中正确初始化邮箱，以免导致 kompaction 中断。 | <https://github.com/qwibitai/nanoclaw/issues/3984> |
| PR #4016 – load gateway helpers before cutover swaps node_modules | 0（但已合并） | 社区因剪裁崩溃（#4004）而广泛关注，合并后得到确认修复。 | <https://github.com/qwibit

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报 — 2026-10-04

---

## 1. 今日速览

NullClaw 项目在 2026-10-04 无新 Issues、无新版本发布，但 Pull Request 活跃度显著——过去 24 小时内 20 条 PR 更新全部来自核心贡献者 `vernonstinebaker`，覆盖通道、定时任务、提供者、内存、CLI、流式处理、Agent 循环等关键子系统。整体活跃度评估：**高（PR 侧）/ 低（Issue 侧）**。项目当前处于集中修复与功能增强的迭代周期，所有 PR 均处于待合并状态，尚未进入主分支。

---

## 2. 版本发布

**无新版本发布。** 最新 Releases 为空，今日无版本更新需说明。

---

## 3. 项目进展

今日无 PR 被合并或关闭，但 20 条 OPEN PR 集中更新，标志着项目在多个方向上的实质性推进：

| 方向 | PR | 核心内容 |
|------|-----|---------|
| **通道修复** | [#953](https://github.com/nullclaw/nullclaw/pull/953) | Discord 网关套接字安全关闭与重连退避 |
| | [#954](https://github.com/nullclaw/nullclaw/pull/954) | 出站发送分配失败时保留所有权 |
| | [#1002](https://github.com/nullclaw/nullclaw/pull/1002) | HTTPS typing workers 使用 2 MiB 重栈 |
| | [#1010](https://github.com/nullclaw/nullclaw/pull/1010) | Discord 忽略机器人自身发送的消息 |
| **定时任务** | [#959](https://github.com/nullclaw/nullclaw/pull/959) | 调度器凭据安全持久化（加密 token 文件） |
| **提供者** | [#962](https://github.com/nullclaw/nullclaw/pull/962) | 原生 Anthropic 提供者文档与加固 |
| | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) | 非 2xx 响应记录脱敏错误体 |
| **流式处理** | [#971](https://github.com/nullclaw/nullclaw/pull/971) | SSE 流式期间原生工具调用支持 |
| **Agent 循环** | [#987](https://github.com/nullclaw/nullclaw/pull/987) | 长时工具密集运行的循环卫生（压缩、前缀拆分） |
| | [#1011](https://github.com/nullclaw/nullclaw/pull/1011) | 释放解析失败时泄漏的工具调用分配 |
| **内存** | [#1001](https://github.com/nullclaw/nullclaw/pull/1001) | 可配置自动召回、召回上限、上下文字节上限 |
| | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | 归档分片排除出实时对话轮次 |
| **CLI** | [#970](https://github.com/nullclaw/nullclaw/pull/970) | Agent REPL 箭头键行编辑器 |
| | [#1006](https://github.com/nullclaw/nullclaw/pull/1006) | 流式 stdout 追加写入而非覆盖 |
| **技能** | [#1003](https://github.com/nullclaw/nullclaw/pull/1003) | 跟随符号链接的技能目录 |
| **通道文档** | [#963](https://github.com/nullclaw/nullclaw/pull/963) | 微信 iLink QR 授权流程文档与加固 |
| **HTTP** | [#966](https://github.com/nullclaw/nullclaw/pull/966) | Android curl 回退安全加固 |
| **A2A** | [#1012](https://github.com/nullclaw/nullclaw/pull/1012) | 按 bearer principal 隔离任务与上下文会话 |
| **文档** | [#1007](https://github.com/nullclaw/nullclaw/pull/1007) | 诊断日志标志说明 |
| | [#1008](https://github.com/nullclaw/nullclaw/pull/1008) | 索引修复与子系统指南 |

**整体评估：** 项目在本周期内完成了 20 项实质性改进，覆盖稳定性（内存泄漏、栈溢出、重连逻辑）、功能（流式工具调用、自动召回配置）、开发者体验（CLI 编辑器、文档体系）和安全（凭据加密、错误体脱敏）。若全部合并，将显著提升项目的成熟度与生产就绪度。

---

## 4. 社区热点

今日无新 Issues，社区讨论数据为零。20 条 PR 均由 `vernonstinebaker` 提交，暂无其他开发者参与 PR 评论或反应（👍 均为 0，评论均为 undefined）。社区热度处于低位，但 PR 质量从摘要看较为扎实，聚焦具体工程问题。

---

## 5. Bug 与稳定性

今日无新 Bug 报告（Issues 为 0），但当前 20 条 OPEN PR 中有明确的稳定性导向修复：

| 严重程度 | PR | 问题描述 | 修复状态 |
|---------|-----|---------|---------|
| **高** | [#1002](https://github.com/nullclaw/nullclaw/pull/1002) | HTTPS typing workers 在 Zig TLS 初始化时 512 KiB 栈溢出导致网关终止 | ✅ 已提交 PR |
| **高** | [#1010](https://github.com/nullclaw/nullclaw/pull/1010) | Discord `allow_bots = true` 时机器人回复形成自反馈循环 | ✅ 已提交 PR |
| **中** | [#953](https://github.com/nullclaw/nullclaw/pull/953) | Discord 网关连接停滞，RESUME 重试无退避 | ✅ 已提交 PR |
| **中** | [#1006](https://github.com/nullclaw/nullclaw/pull/1006) | macOS 流式 stdout 位置写入导致首行损坏 | ✅ 已提交 PR |
| **中** | [#1011](https://github.com/nullclaw/nullclaw/pull/1011) | `parseXmlToolCalls` 分配泄漏（name/arguments 未释放） | ✅ 已提交 PR |
| **低** | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | 归档分片被错误召回进当前对话 | ✅ 已提交 PR |
| **低** | [#966](https://github.com/nullclaw/nullclaw/pull/966) | Android Termux Zig HTTP DNS 解析失败 | ✅ 已提交 PR |

---

## 6. 功能请求与路线图信号

无新功能请求 Issue。但从 PR 方向可推断下一版本路线图重点：

- **内存管理成熟化** — [#1001](https://github.com/nullclaw/nullclaw/pull/1001)（自动召回开关与上下文预算）表明项目正从"能用"向"可控"演进，赋予用户对记忆召回的精确控制。
- **流式原生工具调用** — [#971](https://github.com/nullclaw/nullclaw/pull/971) 解耦流式路径与工具支持，是 Agent 能力的关键补强，暗示路线图中将强化多步工具调用体验。
- **通道生态扩展** — [#963](https://github.com/nullclaw/nullclaw/pull/963)（微信 iLink）、[#1010](https://github.com/nullclaw/nullclaw/pull/1010)（Discord 自反过滤）显示多通道支持仍是重点方向。
- **A2A 协议安全** — [#1012](https://github.com/nullclaw/nullclaw/pull/1012) 引入 bearer principal 隔离，表明项目正从实验性协议支持走向生产级安全加固。
- **文档体系化** — [#1007](https://github.com/nullclaw/nullclaw/pull/1007)、[#1008](https://github.com/nullclaw/nullclaw/pull/1008) 补齐了诊断日志、MCP、子系统指南，暗示项目正加速降低新用户准入门槛。

---

## 7. 用户反馈摘要

今日无 Issues 评论数据，无法提炼用户直接反馈。但从 PR 修复方向可间接推断用户痛点：

- **Discord 自反馈循环**（[#1010](https://github.com/nullclaw/nullclaw/pull/1010)）暗示存在用户部署中 `allow_bots = true` 导致的机器人空转问题。
- **macOS stdout 损坏**（[#1006](https://github.com/nullclaw/nullclaw/pull/1006)）反映 CLI 输出在特定平台上的可靠性问题。
- **Android DNS 解析**（[#966](https://github.com/nullclaw/nullclaw/pull/966)）指向 Termux 用户的特定网络栈兼容性痛点。
- **内存召回不可控**（[#1001](https://github.com/nullclaw/nullclaw/pull/1001)）暗示用户对自动注入历史上下文的行为缺乏调节手段。

---

## 8. 待处理积压

- **Issues 积压：** 当前为 0 条，无长期未响应 Issue。
- **PR 积压：** 20 条 OPEN PR 全部处于待合并状态，平均创建时间跨度较大（从 2026-06-12 至 2026-09-27），其中 #953、#954、#959、#962、#963、#966、#970、#971 已创建超过 3 个月。建议维护者评估合并优先级，避免长期分支漂移。
- **特别关注：** #1001（内存召回控制）是对已删除分支 #979 的重建，需确认与主分支当前架构的兼容性，避免重复工作。

---

*报告生成时间：2026-10-04 | 数据来源：GitHub API (nullclaw/nullclaw) | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-10-04

---

## 1. 今日速览
**项目整体活跃度：低**  
过去 24 小时仅记录到 **1 条新 Issue（#8122）**，无 PR 活动、无版本发布。核心开发流程（合并/关闭 PR）处于静默状态。唯一活跃信号来自 macOS (Apple Silicon) 环境下 `ironclaw serve` 在 `local-dev` 配置下启动失败的阻塞性报告，提示当前发布版本（1.4.1/1.4.0）在凭证后端与 Web App 扩展集成上存在平台兼容性缺陷。社区互动指标（评论、Reactions）均为零，表明该问题尚未引发广泛讨论或复现。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展
**无 PR 合并或关闭，代码库无实质性前进。**

---

## 4. 社区热点
| 排名 | 标题 | 类型 | 评论 | Reactions | 核心诉求 |
|------|------|------|------|-----------|----------|
| 1 | **[#8122] ironclaw serve fails with credential read failed: BackendUnavailable for extension web-app on macOS (local-dev profile)** | Bug | 0 | 0 | macOS (aarch64) 上 `local-dev` 配置下，凭证后端不可用导致 `serve` 命令崩溃，阻断本地开发工作流。 |

> **链接**：[nearai/ironclaw#8122](https://github.com/nearai/ironclaw/issues/8122)  
> **分析**：该 Issue 为当日唯一活动，虽无社区跟帖，但属于 **“安装即崩”** 级别的阻塞性缺陷，涉及官方安装脚本与 `cargo install` 两条分发路径，优先级应判定为 **P0/Critical**。

---

## 5. Bug 与稳定性
| 严重度 | Issue | 现象 | 环境 | 是否有 Fix PR |
|--------|-------|------|------|---------------|
| **Critical (P0)** | [#8122](https://github.com/nearai/ironclaw/issues/8122) | `ironclaw serve` 报错 `credential read failed: BackendUnavailable`，进程退出 | macOS Darwin 27.0.0 (Apple Silicon), IronClaw 1.4.1 & 1.4.0, `local-dev` profile | **无** |

**关键细节**：
- `ironclaw doctor` 8/8 通过，排除基础环境配置问题。
- 两种安装方式（官方脚本 / `cargo install`）均复现，指向代码层面而非打包问题。
- 涉及组件：Credential Backend、Web App Extension、Local Dev Profile 加载逻辑。

---

## 6. 功能请求与路线图信号
**今日无新功能请求，无 PR 暗示路线图变动。**

---

## 7. 用户反馈摘要
**仅单一用户（rahhbster）报告，痛点高度聚焦**：
- **场景**：本地开发模式（`local-dev` profile）启动服务。
- **阻塞点**：凭证后端初始化失败，导致 Web App 扩展无法加载，完全阻断 `serve` 工作流。
- **情绪**：中性客观（提供完整环境、复现步骤、诊断日志），无情绪化表达。
- **隐性需求**：期望官方发布版本在主流开发平台（macOS ARM64）开箱即用，无需自行编译调试。

---

## 8. 待处理积压提醒
| 条目 | 类型 | 停滞时长 | 风险提示 |
|------|------|----------|----------|
| **[#8122](https://github.com/nearai/ironclaw/issues/8122)** | Bug (Critical) | < 24h | **首发即阻塞**：影响 macOS 开发者首次体验，若 48h 内无响应或 Hotfix，将显著降低新用户留存与项目可信度。建议维护者：<br>1. 立即复现并定位 Credential Backend 初始化路径；<br>2. 评估是否需发布 1.4.2 热修复版；<br>3. 在 README/安装脚本增加已知问题标注。 |

---

> **总结**：项目今日处于 **“静默期 + 单一严重阻塞”** 状态。维护团队应优先响应 #8122，避免该平台特有缺陷扩大为发布信任危机。建议在下一个工作日内给出初步诊断或 Workaround。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-10-04）**  

---

### 1. 今日速览
- 过去 24 小时内共有 **6 条 Issue** 更新（全部为新开/活跃，未有关闭），以及 **1 条 PR** 更新（仍处于打开状态）。  
- 项目整体活跃度处于 **低维护状态**：所有讨论均为“stale”标记，且没有任何版本发布或 PR 合并。  
- 唯一的進行中工作是 PR #2374（添加永久隐藏侧边栏广告横幅的设置），尚待评审。  
- 社区讨论集中在登录/付费功能疑问、微信链接不可用以及若干底层 bug（事务不一致、外键未启用、快捷键失效）。  
- 总体来看，代码库近期没有新功能投入，主要是待处理的遗留问题和用户咨询。

### 2. 版本发布
- **无新版本发布**（过去 24 小时内没有 Release）。

### 3. 项目进展
- **今日合并/关闭的重要 PR**：无。  
- 目前仅有一个 **打开的 PR**：  
  - **#2374** – *[area: renderer] feat: add permanent setting to hide sidebar ad banner*  
    - 添加用户可在 **Settings → General** 中永久关闭侧边栏广告横幅的开关，解决 issue #2342。  
    - 尚未收到评审反馈，需维护者进一步审查并决定是否合并。  

### 4. 社区热点（按评论数排序）
| 排名 | Issue/PR | 评论数 | 👍 | 主要讨论内容 | 链接 |
|------|----------|--------|----|--------------|------|
| 1 | **#884** – [问题]关于账户登录和付费加油包的问题 | 2 | 0 | 用户询问登录 vs 未登录功能差异、加油包积分使用范围以及与自建 Model 的关系。 | https://github.com/netease-youdao/LobsterAI/issues/884 |
| 1 | **#885** – 微信链接不可用 | 2 | 0 | 用户截图展示微信分享链接在客户端中无法打开，疑似 URL 处理或 WebView 配置问题。 | https://github.com/netease-youdao/LobsterAI/issues/885 |
| 3 | #867 – autoDeleteNonPersonalMemories() 方法存在的事务不一致问题 | 1 | 0 | 报告事务回滚导致删除未生效的潜在数据不一致。 | https://github.com/netease-youdao/LobsterAI/issues/867 |
| 3 | #873 – 给产品用ears原则转化prd，适合产品spec输入给AI，同时增加研发常用的skill git worktree | 1 | 0 | 功能建议：将 PRD 转为 EARS 格式以便 AI 消费，并内置 git‑worktree 使用指南。 | https://github.com/netease-youdao/LobsterAI/issues/873 |
| 3 | #879 – bug(sqlite): 外键约束未启用，删除 session 不会级联删除 messages，导致数据库持续膨胀 | 1 | 0 | 指出 SQLite 默认关闭外键，导致声明的 ON DELETE CASCADE 不生效，建议在连接时执行 `PRAGMA foreign_keys=ON`。 | https://github.com/netease-youdao/LobsterAI/issues/879 |
| 3 | #883 – Desktop client (Windows): all slash commands (e.g. /status, /reasoning, /help) don't work | 1 | 0 | Windows 桌面客户端全部斜杠命令失效，影响快捷操作。 | https://github.com/netease-youdao/LobsterAI/issues/883 |

**背后诉求**：  
- 用户对**基础使用**（登录、付费、微信分享）的清晰文档和功能确认有强烈需求。  
- 开发者更关注**底层稳定性**（事务一致性、外键约束、快捷键可用性），这些直接影响长期使用体验和数据安全。

### 5. Bug 与稳定性（按严重程度排序）
| 严重度 | Issue | 描述 | 是否有对应 fix PR | 链接 |
|--------|-------|------|-------------------|------|
| 高 | **#879** – SQLite 外键约束未启用 | 删除 session 未级联删除 messages，导致数据库无限增长。 | 暂无 PR（需在 sqliteStore.ts 初始化时加入 `PRAGMA foreign_keys=ON`） | https://github.com/netease-youdao/LobsterAI/issues/879 |
| 中 | **#867** – autoDeleteNonPersonalMemories() 事务不一致 | 事务回滚导致删除未生效，可能造成孤立数据。 | 暂无 PR | https://github.com/netease-youdao/LobsterAI/issues/867 |
| 中 | **#883** – Windows 桌面客户端斜杠命令失效 | 所有 `/status、/reasoning、/help` 等快捷键无响应，影响开发者调试。 | 暂无 PR | https://github.com/netease-youdao/LobsterAI/issues/883 |
| 低 | **#885** – 微信链接不可用 | 分享链接在客户端中打开失败，可能是 URL  scheme 或 WebView 配置问题。 | 暂无 PR | https://github.com/netease-youdao/LobsterAI/issues/885 |
| 低 | **#884** – 登录与加油包功能疑问 | 使用咨询而非代码缺陷，需补充文档或 FAQ。 | 无需代码修改 | https://github.com/netease-youdao/LobsterAI/issues/884 |

### 6. 功能请求与路线图信号
| 功能请求 | 关联 Issue/PR | 是否有对应实现迹象 | 备注 |
|----------|----------------|-------------------|------|
| **永久隐藏侧边栏广告横幅** | PR #2374 | 已实现等待合并 | 直接响应 issue #2342，预计在下一个版本中发布。 |
| **PRD → EARS 转换工具** | Issue #873 | 无实现 PR | 建议作为 CLI 或插件功能，可纳入研发效能工具包。 |
| **git‑worktree 使用指南** | Issue #873（同） | 无实现 PR | 可写入项目 Wiki 或开发者手册。 |
| **改进微信分享链接处理** | Issue #885 | 无实现 PR | 需要检查 Electron/WebView 的 URL 拦截或协议处理。 |
| **登录/付费功能文档** | Issue #884 | 无实现 PR | 建议补充 README 或 FAQ 部分，降低新手使用门槛。 |

### 7. 用户反馈摘要
- **登录与付费疑问（#884）**：用户不清楚登录状态下能否使用更多 AI 功能、加油包积分的具体抵扣场景以及积分是否仅限于官方模型或也可用于自建 Model。反馈表明**文档缺失**导致使用困惑。  
- **微信链接失效（#885）**：用户尝试在客户端内直接点击微信分享卡片，得到“无法打开”的提示，影响了内容传播便利性。  
- **事务与外键 bug（#867、#879）**：多位开发者提到数据删除不干净导致磁盘空间异常增长，特别是在长时间运行的服务部署中，这直接关系到**系统可靠性**。  
- **斜杠命令失效（#883）**：Windows 桌面用户普遍反映快捷键不可用，影响日常调试与效率，期待早期修复。  
- **功能建议（#873）**：产品经理希望能够把 PRD 自动转为 EARS 格式喂给 AI，并内置常用的 git‑worktree 操作指南，显示出对**研发工作流自动化**的需求。

### 8. 待处理积压（长期未响应）
| Issue/PR | 最后更新时间 | 天数（约） | 关注点 | 链接 |
|----------|--------------|-----------|--------|------|
| #879 – SQLite 外键约束未启用 | 2026-10-03 | 1（但为 stale） | 数据库安全与增长问题，亟需 fix。 | https://github.com/netease-youdao/LobsterAI/issues/879 |
| #867 – autoDeleteNonPersonalMemories() 事务不一致 | 2026-10-03 | 1 | 可能导致数据残留，需审查事务边界。 | https://github.com/netease-youdao/LobsterAI/issues/867 |
| #883 – Windows 桌面斜杠命令失效 | 2026-10-03 | 1 | 影响核心交互体验，需定位快捷键绑定。 | https://github.com/netease-youdao/LobsterAI/issues/883 |
| #885 – 微信链接不可用 | 2026-10-03 | 1 | 内容分发渠道受阻，需检查 URL 处理。 | https://github.com/netease-youdao/LobsterAI/issues/885 |
| #884 – 登录与加油包使用疑问 | 2026-10-03 | 1 | 虽为使用咨询，但反映文档缺口，应补充 FAQ。 | https://github.com/netease-youdao/LobsterAI/issues/884 |
| #2374 – 添加永久隐藏侧边栏广告横幅的 PR | 2026-10-03 | 1 | 功能已实现，待 Review；若长期无反馈可能被搁置。 | https://github.com/netease-youdao/LobsterAI/pull/2374 |

> **建议**：维护者应优先审查并合并 **#2374**（已完成功能），随后针对高严重性 bug（**#879**、**#867**）提供补丁或 workaround，并在项目 Wiki/README 中补足登录、付费及微信分享的使用说明，以提升新手友好度并降低长期积压。

--- 

*本报告基于 GitHub 公开数据（Issues、PR、Release）生成，旨在为项目维护者和社区提供客观、数据驱动的周期性健康检视。*

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

# CoPaw 项目日报 (2026-10-04)

## 1. 今日速

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目 2026-10-04 项目动态日报**

---

### **1. 今日速览**
- 项目整体活跃度中等偏上，Issues 与 PRs 更新量均为 50 条，反映出开发社区持续参与。
- 无新版本发布，仍以技术性问题修复与功能迭代为主。
- 多个与安全、运行时、代理行为相关的高优先级 Bug 仍在积压，需重点关注。
- 多条 PR 正在推进中，涉及 OAuth 认证、委托代理、内存监控等核心系统模块。
- 用户对 ZeroCode 集成、Slack 状态反馈、Copy 功能等体验问题有明确反馈。

---

### **2. 版本发布**
暂无新版本发布。

---

### **3. 项目进展**
- 今日合并的 PR 数量为 1 条，其余为待合并或讨论中。
- 合并的 PR 为 [#10687](https://github.com/zeroclaw-labs/zeroclaw/pull/10687)，修复了自定义 OpenAI 兼容端点默认不使用原生工具调用的问题，提升了与 vLLM / LiteLLM 等工具的集成兼容性。
- 项目整体推进缓慢，尤其在 OAuth、委托安全、内存审计等方面仍有大量未完成任务。

---

### **4. 社区热点**
#### 高讨论度 Issues：
- [#11423](https://github.com/zeroclaw-labs/zeroclaw/pull/11423)（PR）  
  - 标题：`fix(oidc): preserve reserved characters in enrollment credentials`  
  - 讨论聚焦于 OAuth 凭证编码问题，若不处理将导致身份 provider 错误解析，涉及安全认证链路。
- [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)（Issue）  
  - 标题：`[Task]: harden runtime-written executable test fixtures under the parallel runtime gate`  
  - 测试硬化任务，影响 CI 稳定性，当前仍在进行中。
- [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)（Issue - 已关闭）  
  - CI 性能优化任务，虽已关闭，但持续影响构建效率。

#### 高讨论度 PRs：
- [#11411-#11423](https://github.com/zeroclaw-labs/zeroclaw/pulls?q=is%3Apr+author%3AAarlington) 系列 OAuth/权限控制 PR，涉及 SOP 访问控制、Cron 写入限制、委托路径安全等，为 v0.9.0 版本奠定安全基础。

---

### **5. Bug 与稳定性**
#### S0-S1 严重 Bug：
- [#11478](https://github.com/zeroclaw-labs/zeroclaw/issues/11478)：`Images >64KB are silently truncated mid-file`  
  - 影响图像处理功能，模型只能看到图片顶部内容，极度影响实用性。
- [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)：`macOS Seatbelt ignores configured allowed_roots`  
  - macOS orts 沙箱策略失效，安全风险明显。

#### S2 一般 Bug：
- [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387)：`zerocode ignores its launch directory`（已关闭）  
  - 退化问题，已修复。
- [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)：`daemon can enter CPU spin`  
  - 持续占用高 CPU，影响资源消耗。
- [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)：`SQLite rewrites created_at`  
  - 记录时间丢失，影响审计链路。

#### 待修复 Bug：
- [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)：Copy 功能失效  
  - 明确的用户体验问题，当前尚未指派解决。

---

### **6. 功能请求与路线图信号**
#### 高意愿需求：
- [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)：`Effort-based local/cloud model routing`  
  - 由 [#11516](https://github.com/zeroclaw-labs/zeroclaw/pull/11516) 已实现，届时可支持根据任务复杂度自动切换模型。
- [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310)：配置清理任务  
  - 正在推进中，将为未来版本清理冗余配置项。

#### 可能进入 v0.9.0：
- [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002)：Gateway 独立进程化  
  - 架构升级目标，支持更灵活的部署方式。
- [#10766](https://github.com/zeroclaw-labs/zeroclaw/issues/10766)：ZeroRelay 身份传递  
  - 多用户安全需求，正在设计中。

---

### **7. 用户反馈摘要**
- **Slack 状态反馈**：[#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) 报告 v0.8.5 后 Slack 线程不再显示“思考中”状态，影响用户体验。
- **Copy 功能失效**：[#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) 用户反馈“一键复制”无响应，影响日常操作。
- **Cron 上下文缺失**：[#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) 报告 agent 执行 cron 时无法感知关联消息，限制了提醒类任务的可用性。
- **图像处理限制**：[#11478](https://github.com/zeroclaw-labs/zeroclaw/issues/11478) 图像被截断，严重影响视觉任务。

---

### **8. 待处理积压**
- [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)：daemon 持续高 CPU 占用  
  - 长期存在，影响稳定性与资源使用。
- [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)：Copy 功能失效  
  - 用户报告明确，需优先排查。
- [#11478](https://github.com/zeroclaw-labs/zeroclaw/issues/11478)：图像截断问题  
  - 高危数据完整性问题，需紧急定位原因。
- [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)：SQLite 时间戳混写  
  - 影响审计日志一致性，需在下一版本修复。
- [#8766](https://github.com/zeroclaw-labs/zeroclaw/issues/8766)：首次运行端到端测试覆盖  
  - 长期跟踪项，尚未启动实际开发。

--- 

**总结**：ZeroClaw 当前处于活跃迭代期，但多个核心稳定性与安全问题尚未解决。社区反馈集中于用户体验退化与功能限制。下一版本（v0.9.0）将聚焦架构解耦与身份安全，值得关注其 OAuth、委托路径、ZeroRelay 等模块的进展。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*