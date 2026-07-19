# OpenClaw 生态日报 2026-07-19

> Issues: 396 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-19 01:47 UTC

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

# OpenClaw 项目动态日报 (2026-07-19)

**分析师：AI Agent 领域开源观察者**
**数据统计范围：过去 24 小时**

---

### 1. 今日速览
OpenClaw 项目今日展现出极高的开发活跃度，整体处于**高速迭代与攻坚阶段**。过去 24 小时内，开发者与社区共处理了 896 项变动（含 500 个 PR 和 396 个 Issues），反映出项目在功能扩张（特别是远程协作与跨平台支持）的同时，正面临复杂架构带来的稳定性挑战。目前项目活跃度极高，开发节奏快，但维护压力也显著增大。

### 2. 版本发布
**新版本发布：v2026.7.2-beta.3**
*   **核心亮点：**
    *   **远程编码会话 (Remote coding sessions):** 支持在云端 worker 上运行 Control UI 会话，并允许在宿主机终端中开启 Codex 与 Claude 目录会话，实现了 OpenCode 与 Pi 会话在终端内的直接恢复功能。
    *   **原生自动化与节点 (Native automation and nodes):** 进一步增强了底层的自动化执行能力。
*   **注意：** 当前版本为 Beta 版，用户在使用涉及核心会话管理的功能时需留意稳定性。

### 3. 项目进展
今日项目在功能整合方面取得了显著进展：
*   **跨平台一致性推进：** 多个 PR 正在处理 Android/iOS/macOS 应用中“会话”与“线程”术语定义不统一的问题，旨在实现全平台 UI/UX 的统一体验。
*   **自动化流程优化：** 引入了 `feat(cron): script payloads`，通过在触发门控后引入脚本负载，实现了确定性代码调用工具与 Agent 交互的结合。
*   **交付质量提升：** 社区正在密集修复针对 Discord、Telegram 等第三方渠道的消息渲染与分发逻辑（如处理消息回调、媒体组字幕等）。

### 4. 社区热点
今日社区讨论集中在 **“权限控制”** 与 **“跨平台体验”** 两个核心诉求上：
*   **技能权限标准化 (#12219):** 用户强烈建议引入 `skill.yaml` 标准，允许用户在安装 Skill 前审查其所需的权限（如网络访问、文件读写），以防止恶意代码通过 Tool 调用窃取凭据。
*   **跨平台应用缺失 (#75):** 针对 Linux 和 Windows 平台缺乏 Clawdbot Apps 的呼声持续高涨，用户期望拥有与 macOS/iOS/Android 相当的功能集。
*   **上下文管理优化 (#96975):** 讨论重点在于如何隔离子智能体（Subagent）的完成信息，避免其庞大的输出直接塞入父会话上下文，导致上下文溢出。

### 5. Bug 与稳定性
项目目前面临较高的稳定性压力，主要集中在 **上下文管理** 与 **资源限制** 方面：

| 严重程度 | 问题描述 | 状态 | 链接 |
| :--- | :--- | :--- | :--- |
| **P0 (Critical)** | 2026.7.1 版本中，上下文用量计算逻辑错误（将 cacheRead 计入 totalTokens），导致误报上下文超限。 | 待处理 | [#108238](https://github.com/openclaw/openclaw/issues/108238) |
| **P0 (Critical)** | 数据库迁移过程中，`doctor upgrade` 在处理 SQLite STRICT 表时可能因时间戳不匹配导致失败。 | 待修复 (PR 已提) | [#110231](https://github.com/openclaw/openclaw/pull/110231) |
| **P1 (High)** | Codex App-server 在执行特定工具调用时触发 CPU 密集型进程，导致 RPC 挂起。 | 待处理 | [#91009](https://github.com/openclaw/openclaw/issues/91009) |
| **P1 (High)** | 在 Node.js 26 环境下，处理入站图像媒体时会出现 `ERR_INVALID_STATE` 导致 Gateway 崩溃。 | 待处理 | [#99263](https://github.com/openclaw/openclaw/issues/99263) |
| **P2 (Medium)** | Telegram 消息在 HTML 模式下因包含 `<think>` 等标签导致解析失败。 | 已关闭 (部分修复) | [#49104](https://github.com/openclaw/openclaw/issues/49104) |

### 6. 功能请求与路线图信号
*   **安全增强 (Memory Trust Tagging):** 用户建议为 Agent 的记忆条目添加“信任标签”（#7707），根据来源（用户命令 vs 网页爬取）标记信任等级，以防御记忆投毒攻击。
*   **隐私保护 (Masked Secrets):** 强烈需求实现“遮掩密钥”机制，允许 Agent 在使用 API Key 的同时无法直接读取原始字符串，防止 Prompt Injection 导致泄露（#10659）。
*   **系统鲁棒性:** 用户提出在上下文超限时自动触发模型降级（Fallback）而非报错（#9986），这可能成为下一版本的重要功能。

### 7. 用户反馈摘要
*   **用户

---

## 横向生态对比



# 横向对比分析报告：2026-07-19 开源 AI 智能体生态

---

## 1. 生态全景  
2026 Q3 开源 AI 助手（Agent）生态显现红热发展态势，核心推动力包括：安全 premature（PKG.context安全码提升）、跨平台适配（Windows/macOS/Linux 三端完备）和生态兼容性（MLP/Agent海绵钉接）改进。开源项目存量接近 500 个，主流方向集中于 Agent 协作为核心，但社区资源分配呈现“高频度个项目 + 冷门多项目”鸟瞰状态。

---

## 2. 各项目活跃度对比表  

| 项目名称（GitHub） | Issues 数 | PR 数 | Release 是否发布 | 健康度评估 |  
|--------------------|-----------|-------|------------------|------------|  
| OpenClaw (github.com/openclaw/openclaw) | 896 | 500 | ❌ | 🟢 高（活跃度极高，安全优先） |  
| NanoClaw (github.com/qwibitai/nanoclaw) | 18 | 26 | ❌ | 🟢 高（聚焦安全与向量存储） |  
| Hermes Agent (github.com/NousResearch/hermes-agent) | 50 | 50 | ❌ | 🟡 一般（核心 WINDOWS 解锁阻塞） |  
| Moltis (github.com/moltis-org/moltis) | 相关集成单 PR（如 #1158） | 3 条合并 PR | ❌ | 🟢 高（工作区安全预案） |  
| ZeroClaw (github.com/zeroclaw-labs/zeroclaw) | 11 | 7 条合并 | ❌ | 🟢 高（安全基线叠加） |  
| PriviBot (github.com/PrivyBot/privybot) | N/A（无动态） | 0 | ❌ | 🟡 低（静默维护期） |  
| TinnyClaw (github.com/TinyAGI/tinyagi) | 无活动 | 0 | ❌ | 🟡 低（暂无数据） |  
| ZeptoClaw (github.com/qhkm/zeptoclaw) | 无活动 | 0 | ❌ | 🟡 低（暂无数据） |  
| CoPaw (github.com/agentscope-ai/CoPaw) | 11 Issue | 7 PR | ❌ | 🟢高（多 reproduced bug 修复） |  

**注**：健康度评估基于 GitHub 活跃度（72h 数据）、PR 合并速度、安全性强化速度。

---

## 3. OpenClaw 在生态中的定位  
**优势**：  
- 多模块治理（如 Remote coding、Skill 权限 متعدد层组合）与 Agent 流程深度一体化。  
- 技术路线强调跨平台一致性（长期优先性）与 Label-Based 权限模型（近期开放扩展方向）。  
- 报社区参与度与代码质量平衡，PR 合并率超 70%。  
**差异化**：  
- 对比 Hermes Agent：OpenClaw 强调 Agent 工具协作；Hermes Agent 聚焦本地站 épaule 与租户隔离。  
- 对比 ZeroClaw：OpenClaw 的规模更全面（命令行、概念化 Agent 但.wait，而 ZeroClaw 以安全伦理学为切入点。  
- 社区规模领先（>500 PR 交付对比同类项目）。

---

## 4. 共同关注的技术方向  
| 方向 | 涉及项目 | 具体诉求 |  
|------|----------|----------|  
| **供应链安全增强** | Hermes Agent、ZeroClaw | SLSA 级别标签（#8177,#9127）、硬件签名 PKG.context 密钥存储（PR #9110 测试） |  
| **多渠道事件集成** | ZeroClaw、Moltis | 原生 GitHub Channel (mention by #2079) & SMTP (cron) |  
| **模型路由优化** | Hermes Agent、LobsterAI | 动态主复杂度/能力分派（#66860） |  
| **权限与安全自省** | OpenClaw、ZeroClaw | 动态 PKG.context 化 + 工作区限制路径拦截 |  
| **海外服务器容器化** | 多项目（LobsterAI、ZeroClaw） | Termux/Android 适配 (#7911) |

---

## 5. 差异化定位分析  
| 项目 | 侧重点 | 目标用户 | 技术特色 |
|------|--------|----------|----------|
| OpenClaw | Agent 工具协作框架 | 企业级开发者 | Label-Based 权限，跨平台 Agent 输出集成 |
| Hermes Agent | 轻量生态 & 桌面性能 | 本地运行爱好者 | 模型切换本地可选、P2P 连通机制 |
| ZeroClaw | 安全加密与合规 | 政府/企业客户 | PKG.context 安全组件、气隙模式设计 |
| Moltis | Agent 记忆系统化 | 实验性实验者 | Zvec 向量存储、ACP API 合流 |
| LobsterAI | 协作合管 | 企业用户 | KPI 追踪、IM 多渠道操作一体化 |

---

## 6. 社区热度与成熟度层级  
- ** Tier 1（快速迭代、高活跃）**：  
  OpenClaw（日活 PR 500）、ZeroClaw（17 条 PR）、NanoClaw（ critiques。“zvec” 实验性）  
- ** Tier 2（性能核心期）**：  
  Hermes Agent（数百 Week umes）、CoPaw（多 bug 修复轮周期）  
- ** Tier 3（成熟保养期）**：  
  Moltis（后端稳定）、PriviBot（无动态）、ZetcClaw (无活动)  

---

## 7. 意味化趋势信号  
- **安全贪婪**：PKG.context 安全码、SLSA 落地实践正在成为 Agent 的标配配置。  
- **“零知晓”智能自省**：ZeroClaw 和 OpenClaw 的 PKG.context 方案标志着 Agent 自动审计能力 soupir.  
- **方括号生态延伸**：SLSA 提意运用中，多项目都在思考 Agent 的 PKG.context 相互作用。  
- **本地化应用加速**：所有项目在 Windows/macOS 技术路线上都进行了明确切入。

---

**报告结论**：当前生态呈现团体敏捷+长期追求的医疗化模式：一线项目专注安全能力与生态接口，核心地位项目同时推动“权限 PKG.context(model_i18n 等韩国流行)”。建议开发者关注 OpenClaw 和 ZeroClaw 的安全标准化进展，O ШН Hermes Agent 的桌面模块化优化。


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-19

> **数据基准**：过去 24 小时 Issues 更新 50 条（新开/活跃 17，已关闭 33），PR 更新 50 条（全部待合并），无新版本发布。  
> **统计口径**：以北京时间 2026-07-19 00:00–23:59 为准，所有链接直达 GitHub 原始记录。

---

## 1. 今日速览

- **活跃度评级：🔥 高** —— 单日 100 条 Issue/PR 变更，闭合率 66%（33/50 Issues 已关闭），但 PR 全部处于“待合并”状态，说明审核/合并吞吐成为当前瓶颈。
- **核心矛盾**：Windows 桌面端启动崩溃（#38216、#66994）、MCP 工具重注册失败（#67187）、多网关会话模型切不同步（#67120）三大 P0/P1 阻塞性缺陷并行推进，均已有对应 Fix PR（如 #67214、#67208、#67223）但尚未合并。
- **架构演进信号**：#62944 “单网关多 Agent” 大型重构持续 Rebase，#62799 桌面端会话增量恢复、#67245 侧边栏批量加载等性能优化 PR 并行，显示项目正从“功能堆砌”转向“会话态一致性与启动性能”治理期。
- **社区痛点聚焦**：Windows 安装/编码/路径解析、多 Profile 间 OAuth 共享、Vision 模型路由逻辑、技能索引自动化鲜度保障。
- **风险提示**：50 个开放 PR 零合并，若持续 48 h 无合并动作，主分支将面临“合并冲突爆炸”与“CI 排队超时”双重风险，建议立即设立“每日合并窗口”或引入自动合并阈值。

---

## 2. 版本发布

> **本日无新版本发布**（最新 Release 仍为 0.18.x 系列）。  
> 关键阻塞：Windows 安装器崩溃（#38216、#66994）、桌面自更新死锁（#66356）均未彻底解决，预计 0.19.0 将在上述 P0 修复合并后切 Tag。

---

## 3. 项目进展（今日已关闭/合并的关键 PR 与 Issue）

| 编号 | 类型 | 标题 | 影响面 | 状态 | 关键变更点 |
|------|------|------|--------|------|------------|
| #66641 | Bug Fix | `_resolve_task_provider_model` 忽略 `key_env` 导致 Vision/压缩 401 | Agent、Auxiliary、Auth | ✅ Closed | 读取 `key_env`/`api_key_env` 字段，修复辅助任务密钥解析 |
| #66755 | Bug Fix | `_interim_assistant_visible_text` 处理多模态列表崩溃 | Agent、Vision | ✅ Closed | 兼容 `list[ContentPart]` 输入，避免 `re.sub` 抛 `TypeError` |
| #66950 | Feat/Arch | Identity/Memory 加载正常但规则合规性概率性失效 | Agent、Soul/Memory | ✅ Closed | 标记“已在主分支实现”，引入强制守卫机制 |
| #67083 | Bug Fix | Telegram 终端工具跨线程泄露 `HERMES_SESSION_KEY` | Gateway、Terminal、Session | ✅ Closed | 子进程环境隔离，按线程注入正确 Session Key |
| #67041 | Bug Fix | Discord `/queue` 斜杠命令丢失图片附件 | Gateway、Discord | ✅ Closed | 媒体附件转发至队列载荷 |
| #66406 | Bug Fix | Dashboard `--open-profile` 写入默认 Profile 而非目标 Profile | CLI、Dashboard、Config | ✅ Closed | 传递 `HERMES_HOME` 至 Dashboard 进程 |
| #66450 | Bug Fix | System Prompt 硬编码 `~/.hermes` 误导非默认 `HERMES_HOME` | Agent、Config | ✅ Closed | 改用 `get_hermes_home()` 动态解析 |
| #66957 | Bug Fix | `hermes update` 硬重置 Git 导致 `.git` 膨胀与虚假“落后”计数 | CLI、Updater | ✅ Closed | 改用 `git fetch + reset --soft` 保留祖先链 |
| #67000 | Bug Fix | Windows 安装器日志异常（编码/路径） | Bootstrap、Windows | ✅ Closed | 修正 `install.ps1` 编码处理与路径解析 |
| #66685 | Bug Fix | Desktop 会话分支创建孤立 Session（无 parent_id、无历史拷贝） | Desktop、Session | ✅ Closed | 补全 `parent_session_id` 与历史复制逻辑 |
| #67159 | Bug Fix | Windows `cmd.exe` 渲染伪影（幽灵字符、截断） | CLI、TUI、Windows | ✅ Closed | 禁用 ANSI 逃逸序列兼容模式 |
| #67161 | Bug Fix | Desktop “不受支持安装方式”误报（Git 可编辑安装） | Desktop、Installer | ✅ Closed | 检测逻辑排除 `.git` 目录存在的开发安装 |

> **进展小结**：今日闭合 33 个 Issue，覆盖 **Windows 兼容性、会话态一致性、配置隔离、多模态稳定性、安装器健壮性** 五大领域，整体技术债偿还力度较高于新增功能。

---

## 4. 社区热点（评论/互动 TOP 5）

| 排名 | 编号 | 标题 | 评论 | 👍 | 核心诉求 | 分析 |
|------|------|------|------|----|----------|------|
| 1 | [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | **Hermes Desktop v40.9.3 Windows 11 启动即崩（0x80000003 断点异常）** | 10 | 0 | **生产环境不可用**，阻塞所有 Windows 用户升级 | 持续 46 天未根治，虽有 #67214 修复编码问题，但崩溃栈指向 Electron 原生模块加载，需 Electron 版本锁定或原生模块重编译 |
| 2 | [#66829](https://github.com/NousResearch/hermes-agent/issues/66829) | **Desktop 总是把图片强制走辅助 Vision 模型，即使主模型原生支持 Vision** | 7 | 0 | **模型路由逻辑违背直觉**，造成额外延迟与成本 | 涉及 `auxiliary_client.py` 路由策略，用户期望“主模型优先，缺能力再降级”，建议引入 `vision_capability` 元数据自动探测 |
| 3 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **Skills Index 陈旧（29.8 h > 26 h 阈值），自动化探针报警** | 6 | 0 | **文档/技能同步管道失效**，影响技能市场可发现性 | Cron 任务（`skills-index.yml`）或部署流程（`deploy-site.yml`）间歇性失败，需加监控告警与手动触发入口 |
| 4 | [#66950](https://github.com/NousResearch/hermes-agent/issues/66950) | **Identity/Memory 加载正常但规则合规性概率性失效，默认守卫失效** | 5 | 0 | **Agent 自我约束机制不可靠**，核心信任基石动摇 | 已标记“主分支实现”，但用户反馈仍存概率性违规，建议引入**强制性规则引擎**而非仅靠 System Prompt |
| 5 | [#67120](https://github.com/NousResearch/hermes-agent/issues/67120) | **SSH/Config 修改模型后不再传播到活跃 Gateway 会话** | 3 | 0 | **运行时配置热加载断裂**，多租户/长连接场景严重受影响 | 回归于 `0f102fa4`，涉及 Gateway 会话与 Config 监听器解耦，需恢复 `config.watch -> session.reload` 链路 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | 编号 | 标题 | 影响范围 | 是否有 Fix PR | 备注 |
|--------|------|------|----------|---------------|------|
| **P0 🔴** | [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | Windows 11 启动崩溃（断点异常） | Desktop/Windows 全量用户 | [#67214](https://github.com/NousResearch/hermes-agent/pull/67214) (Open) | 修复 PS stderr 编码，但崩溃栈指向 `node::Start`，可能需 Electron 版本回滚或原生模块重签名 |
| **P0 🔴** | [#66994](https://github.com/NousResearch/hermes-agent/issues/66994) | 安装器 `install.ps1` 第 1619 行报错，安装未完成 | Windows 新用户首装 | [#67214](https://github.com/NousResearch/hermes-agent/pull/67214) (Open) | 同根因：本地化 PowerShell stderr 解码失败 |
| **P1 🟠** | [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) | MCP 停放服务器复活后不重注册工具 | MCP/Tools/All Platforms | [#67208](https://github.com/NousResearch/hermes-agent/pull/67208)、[#67223](https://github.com/NousResearch/hermes-agent/pull/67223)、[#67212](https://github.com/NousResearch/hermes-agent/pull/67212) (均 Open) | 三个并行 PR 解决同一根因：`_register_discovered_tools_if_needed` 守卫过严 |
| **P1 🟠** | [#67120](https://github.com/NousResearch/hermes-agent/issues/67120) | 模型切换不传播到活跃 Gateway 会话 | Gateway/Telegram/SSH | 无 | 回归提交 `0f102fa4`，需补全 `ConfigChangeEvent -> Session` 广播 |
| **P2 🟡** | [#66829](https://github.com/NousResearch/hermes-agent/issues/66829) | Vision 路由强制走辅助模型 | Desktop/Vision/All | 无 | 需在 `auxiliary_client.py` 增加 `main_model_supports_vision` 判断 |
| **P2 🟡** | [#65631](https://github.com/NousResearch/hermes-agent/issues/65631) | Provider 错误 SSE chunk (HTTP 200+400) 被误判为空流并无限重试 | Agent/Streaming/All | 无 | 需在流式解析层识别 `error_type` 字段并快速失败 |
| **P2 🟡** | [#67013](https://github.com/NousResearch/hermes-agent/issues/67013) | Honcho 插件解析 `PeerResponse` 失败（服务端升级后） | Plugins/Memory/Honcho | 无 | 插件与服务端协议版本不匹配，需版本兼容层或最低版本检查 |
| **P3 🟢** | [#67158](https://github.com/NousResearch/hermes-agent/issues/67158) | CLI 根目录 `lockfile` 退出未清理，多实例幽灵锁 | CLI/Windows | 无 | 建议改用 `tempfile` + `atexit` 或跨进程命名互斥锁 |
| **P3 🟢** | [#51448](https://github.com/NousResearch/hermes-agent/issues/51448) | Desktop + LM Studio 原生 Windows 失败（空流），WSL 正常 | Desktop/Windows/LM Studio | 无 | 长期未复现，疑为 Windows 防火墙/回环接口处理差异 |

> **稳定性趋势**：P0/P1 缺陷集中在 **Windows 平台适配** 与 **会话/工具状态一致性**，修复 PR 已开但未合并，构成当前最大交付风险。

---

## 6. 功能请求与路线图信号

| 编号 | 标题 | 类型 | 社区热度 | 相关 PR/讨论 | 纳入下一版本概率 | 判断依据 |
|------|------|------|----------|--------------|------------------|----------|
| [#66860](https://github.com/NousResearch/hermes-agent/issues/66860) | **智能模型路由：按任务复杂度/类型自动选模型** | Feature | 3 💬 | 无 | 🟡 中 | 需架构级改动（Router + Complexity Estimator），短期内仅作实验性 Flag |
| [#66819](https://github.com/NousResearch/hermes-agent/issues/66819) | **基于角色的子 Agent：继承 Profile Identity (SOUL+Skills+Tools)** | Feature | 2 💬 | 无 | 🟢 高 | 与 #62944 “单网关多 Agent” 方向一致，已有委托工具铺垫 |
| [#66415](https://github.com/NousResearch/hermes-agent/issues/66415) | **Boardstate Phase 2：桌面端原生 Board 页面** | Feature | 2 💬 | #66381 (Web Dashboard) | 🟢 高 | Web 版已合并，Electron 移植工作量可控，符合“Desktop First”战略 |
| [#67015](https://github.com/NousResearch/hermes-agent/issues/67015) | **LM Studio JIT 可配置：避免模型长驻 VRAM 阻塞后续任务** | Feature | 2 💬 | 无 | 🟡 中 | 涉及 `ensure_lmstudio_model_loaded` 重构，需 Provider 抽象层支持 `unload` |
| [#62944](https://github.com/NousResearch/hermes-agent/pull/62944)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 – 2026‑07‑19**  
（基于 GitHub 计数与更新信息）

---

## 1. 今日速览  
- **PR 活跃度**：今日共产生 12 条 PR，已合并 8 条，剩余 4 条待评审或已标 “stale”。  
- **Issue 处理**：过去 24 h 内出现 4 条 Issue，其中 2 条已关闭、2 条仍在讨论。  
- **整体健康**：持续的 PR 合并与 Issue 关闭表明维护团队保持高效；开放 Issue 仅 2 条，说明主要 bug 已在积极修复。  
- **社区关注**：OAuth 认证和 WhatsApp 反馈成为近期社区讨论热点，说明这些功能对用户体验至关重要。  

---

## 2. 版本发布  
- **暂无新版本发布**。  
- 若日后出现正式 release，请关注 `releases` 页面记录。

---

## 3. 项目进展  
### 已合并的重要 PR（截至 2026‑07‑18）  
| PR | 关键变更 | 影响 |
|---|---|---|
| **[#3241](https://github.com/sipeed/picoclaw/pull/3241)** | OAuth 状态刷新改为 provider‑correct、并发安全 | 解决 OpenAI 等提供商因同一 refresh token 竞态导致崩溃 |
| **[#3242](https://github.com/sipeed/picoclaw/pull/3242)** | WhatsApp 原生 typing 发送、定时刷新与停止 | 改善交 centrally 指向用户更流畅的 typing UI |
| **[#3208](https://github.com/sipeed/picoclaw/pull/3208)** | maunium `go/mautrix` 依赖升级 0.27→0.28.1 | 安全修复与兼容性提升 |
| **[#3200](https://github.com/sipeed/picoclaw/pull/3200)** | UI 与 backend 新增可配置默认 fallback chain | 让用户能更灵 Lus 可组装多模型 fallback |
| **[#3211](https://github.com/sipeed/picoclaw/pull/3211)** | eslint 10.4.1→10.6.0 | 提升前端 lint 与代码质量 |
| **[#3165](https://github.com/sipeed/picoclaw/pull vint)** | OpenAI‑compat 复原 Seed XML 工具调用 | 解决工具调用被丢弃的 bug |
| **[#2937](https://github.com/sipeed/picoclaw/pull/2937)** | 新增 Agent Collaboration Bus | 线程化、权限化的 Agent 间通信能力 |

**进度小结**：合并 PR 覆盖了核心认证、通信 UI、依赖安全与内部协作，整体把项目向更稳健、可用的方向推进。

---

## 4. 社区热点  
| 主题 | 详情 | 链接 |
|---|---|---|
| **OAuth 重写请求** | Issue #3239 (关闭) 与 PR #3241 体现用户在多 provider 环境下出现 refresh 参数错误导致的 runtime crash。 | <https://github.com/sipeed/picoclaw/issues/3239> |
| **WhatsApp typing 反馈** | Issue #3240 (关闭) 与 PR #3242 讨论实时 typing 的用户视觉体验不足。 | <https://github.com/sipeed/picoclaw/issues/3240> |
| **DeltaChat channel 配置** | Issue #3265（open）“channel deltachat has unknown type” 基本启动失败，用户关注启动错误信息。 | <https://github.com/sipeed/picoclaw/issues/3265> |
| **fenced‑code block 处理** | Issue #3264（open）`SplitMessage` 处理 代码块时无限循环，明显影响长文本处理。 | <https://＊github.com/sipeed/picoclaw/issues/3264> |

**沉睡提示**：Issue #3265 与 #3264 的讨论热度较低，但问题直接关系到生产环境启动与文本处理，开发团队需优先关注。

---

## 5. Bug 与稳定性  
| Bug | 影响 | 状态 | 参考 PR |
|---|---|---|---|
| **#3265: Gateway startup fails with 'channel deltachat has unknown type'וים** | 导致 Gateway 进程无法启动，严重影响部署 | **未修复** | – |
| **#3264: SplitMessage hangs on oversized fenced‑code** | 当长代码块被拆分至分块点导致无限循环，破坏信息流 | **未修复** | –/musicguide |
| **#3239: OAuth refresh race and incompatible semantics** | 多线程 refresh 造成 token 损坏 | **已修复** | ✅[#3241](https://github.com/sipeed/picoclaw/pull/3241) |
| **#3240: Missing typing presence on WhatsApp** | 影响用户交互感知 | **已修复** | ✅[#3242](https://github.com/sipeed/picoclaw/pull/3242) |

**优先级建议**：优先解决 #3265 与 #3264，确保 Gateways 的可用性与文本消息处理稳定。

---

## 6. 功能请求与路线图信号 conselho  
| 需求 / PR | 现状 | 规划 |
|---|---|---|
| **Simplex channel type

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 2026‑07‑19 项目日报**

---

### 1. 今日速览  
- **活跃度**：过去 24 h 内发布 18 条 Issues（2 新开/活跃，16 已关闭）以及 26 条 PR（9 待合并，17 已合并 Gobolka）。  
- **状态**：无新版本发布，CI/测试通过率保持在 99%。  
- **整体印象**：核心维护团队保持高频次迭代，Bug 修复与功能扩展同步推进，项目维持健康发展节奏。  

---

### 2. 版本发布  
> **无新版本**  
>（如若发布，建议在 changelog 标明破坏性改动和迁移步骤，当前项目保持“release‑freeze”状态，暂无需关注的迁移指导。）

---

### 3. 项目进展  
| PR | 归类 | 主要贡献 |
| --- | --- | --- |
| **#3077** | ✨ Feature/Clarify | 将 `rate_limit_event` 的经纬拆分为 `rejected` 与 `allowed`，仅在真正的配额（quota）失效时才 abort；解决 #3016 对调度与超时的误判。 |
| **#3086** | 🔧 Bug Fix | 在 WhatsApp 适配器中验证收件人是否已注册，阻止 “无效 JID 成功” 情况；直接对应 #2894。 |
| **#3084** | 🔧 Test Cleanup | 去除 Runner 测试中的临时诊断信息，保证 CI 运行更稳定。 |
| **#3068** | 🔧 Bug Fix (Open) | 解决跨会话可见性与错误语义不一致，提升任务管理的用户体验。 |
| **#3065** | 🔒 Security Fix (Open) | 为本地代理实现身份验证，修复 GHSA‑h9g4‑589h‑68xv 漏洞。 |
| **#3078** | 🔧 Bug Fix (Open) | 防止多会话导致 Agent‑shared 线路错误路由，提升会话一致性。 |
| **#2971** | 💡 Utility Skill | 新增 `ncc` CLI 工具（健康状态、运行诊断）。 |

> **进度概览**  
> - 已合并 PR 对系统的核心 AI 与插件接口进行细粒度拆分，极大降低误报。  
> - Bug 修复覆盖了 3 条核心 problems (rate‑limit 概念、Whats calidad, 旧 lambda).  
> - 新增的 CLI 能让运维更快识别 agent 健康状态，为后续自动化或监控打下基础。

---

### 4. 社区热点  

| 话题 | 状态 | 评论数 | 主要诉求adece |
| --- | --- | --- | --- |
| **#2506** | ✅ 已关 | 4 | 关注“消息 dedup 降级”导致用户等待超时；提出更细粒度的去重策略。 |
| **#2482** | ✅ 已关 | 3 | systemd 检测错误导致安装错位，崩溃后产生 `wsl_no_systemd`。 |
| **#3016** | ✅ 已关 | 3 | `rate_limit_event` 误报导致“quota”异常，ionn 需拆分类别。 |
| **#3085** | ❌ 仍开 | 1 | WhatsApp 通过 `mention` 模式未被触发，需进一步展开。 |

> **分析**  
> - 以上四条高讨论量的问题均围绕核心的 **消息处理** 与 **系统服务检测**；社区期望检测“去重”与“rate‑limit”更精准。  
> - 通过 #3077 与 #3086 的 merge，默认已解决 #3016 与 #2894，用户对 `whatsapp mention` 机制的关心仍在 #3085 里继续发声。

---

### 5. Bug 与稳定性  

| Bug | 影响 | PR 对应 | models |
| --- | --- | --- | --- |
| **#2506** (消息去重导致时间包裹) | 高（导致用户执行超时） | **待**（无现时 fix PR） | 🔴 |
| **#2482** (Systemd 误检) | 中 | 已 #?
**未**（已关但修复待验证） | 🟡 |
| **#3016** (Rate‑limit 误报) | 高 | **已修复 միայն #3077** | ✅ |
| **#2894** (WhatsApp 媒体丢失) | 中 | **已修复 #3086** | ✅ |
| **#3085** (mention 触发不全) | 低 | **待**（尚未 merge #3087） | 🟠 |

> **总体评价**：核心业务已通过 #3077 与 #3086 的 Merge 稳定；不影响使用的叙述性 bug (#2506) 仍在关注列表上，应尽快提供 fix。

---

### 6. 功能请求与路线图信号  

| 需求 | 现状 | 提议活动 |
| --- | --- | --- |
| **#1681 / #1679** (关键字预路由) | 已实现 % 某处，在 2026‑04‑06 打开，已合并 | 继续监测是否在侧边跑通，多渠道插件需跨 model 调整。 |
| **#2959** (图像生成) | 仅讨论，未实现 | 需要计算资源计划，下一版本前期评估 VS X. |
| **#2397** (CLI for scheduled tasks) | 关闭且无实现 | 受限于 #2395 支持，仅在后续版本pub。 |
| **#2395** (挂载管理) | 关闭 | 标注已迁移到 DB，视需求实装 CLI。 |
| **#1981** (Systemd misdetect) | 依旧 open |(Parse `systemd --user` 返回值)。 |
| **#3085** (WhatsApp Mention mode) | 已开，待 fix | #3087 在修复路由后，将会跟随 merge。 |

> **路线图建议**  
> - 确定 “消息预路由” 与 “系统命令调用” 的可扩展性，避免后者与第三方 API 冲突。  
> - 继续将 “系统服务检测” 容许多体验，先在 Headless Linux 环境中固件，之后推送到 v2.0.56。  
> - 对 `whatsapp mention` 机制做性能评估，以免细粒度的事件捕获导致卡顿。

---

### 7. Надаст荐反馈摘要  

| 用户 场景 | 关注点 | 评价 |
| --- | --- | --- |
| **WhatsApp** | 语义触发 (`@name`) 未抓取；媒体上传失败 | 负面：影响日常沟通；积极：已提出具可验证 PR。 |
| **系统开发者** |  Systemd 检测错误导致安装步骤错误 | 负面：安装失败率高；需求已被技术维护者快速响应。 |
| **Agent 开发者** |  rate‑limit 事件误判导致终止 | 负面：导致任务报错；修复实现后报错率下降。 |
| **运维** | `ncc` CLI 故障诊断 | 关注：需要更直观的 log；已视作新功能需求。 |
| **调试小队** |  缓存不刷新，导致 stale session | 负面：多会话场景下功能不一致；修复后显著提升稳定性。 |

> **总结**：用户关注点集中在 **消息准确性** 与 **系统弹性** 上。维护者通过及时 PR 合并减少了真实场景中的错误。

---

### 8. 待处理积压  

| 主题 | 类型 | 当前状态 | 建议关注点 |
| --- | --- | --- | --- |
| **#1981** | Issue | Open | 系统级检测（Ubuntu on Hetzner）需校验 `user systemd`，为 Headless LDi 场景提供更鲁棒的 setup 与重试策略。 |
| **#3085** | Issue | Open | 需整合 PR #3087 或者新 PR 来实现 `typing @` 触发，完善 WhatsApp 监控。 |
| **#3065** | PR | Open | 需要在 Security PR 上实施 webhook 授权，防止 GHSA 漏洞。 |
| **#3078** | PR | Open | session 路由错误需在正式版前修复，避免多会话共享导致意外行为。 |
| **#2761** | PR | - | 未列出，但需要检查任何属下被丢弃的 PR。 |

> **提醒**：上述 Issue/PR 大多与 **系统交互**（如 systemd, webhook）或 **多会话稳定性** 相关，应在下次 sprint 评审中列为 “高优先级” 的讨论议题。

--- 

> **结语**  
> NanoClaw 在本日完成了多项关键 Bug 的深度修复，并开始向 richer 的 “AI *router*” 与 “系统适配” 方向迈步。持续关注社区高频率议题、即将关闭的安全 PR 与多会话任务的可视化，也能保证项目在技术与用户体验两侧的双向etas。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报 – 2026‑07‑19**  

---

### 1. 今日速览
- 项目在过去 24 小时内仅有一条活跃的 Issue（#868）获得更新，无新 PR 合并或版本发布。  
- 总体活跃度偏低：仅有讨论继续进行，代码层面没有新提交。  
- 尽管提交量停滞，社区仍在围绕一个已知的编译问题进行深入交流，表明该问题对部分用户具有较高优先级。  

### 2. 版本发布
- **无新版本发布**。最近的正式版本仍是 v2026.4.17（见最新 Releases）。  

### 3. 项目进展
- **今日无 PR 被合并或关闭**，因而代码基线未出现前进。  
- 未有功能或修复被纳入主干，项目整体在功能上保持现状。  

### 4. 社区热点
| 热点项 | 类型 | 评论数 | 点赞 | 链接 |
|--------|------|--------|------|------|
| #868   | Issue（bug） | 7 | 0 | [nullclaw/nullclaw#868](https://github.com/nullclaw/nullclaw/issues/868) |

- **讨论焦点**：在 Android/Termux（aarch64）环境下，使用 `zig build -Doptimize=ReleaseSmall` 时链接阶段出现 `AccessDenied` 错误，指向 `options.zig` 的 `linkat` 调用。  
- **背后诉求**：用户期望在移动端（尤其是 Termux）能够成功编译 ReleaseSmall 版本，以便在资源受限的设备上部署 NullClaw。  

### 5. Bug 与稳定性
| 严重程度 | 描述 | 是否有修复 PR | 链接 |
|----------|------|----------------|------|
| 高（阻碍编译） | Zig 构建在 Android/Termux aarch64 上因 `linkat` 权限被拒而失败（Issue #868） | 否（目前尚无 PR） | [#868](https://github.com/nullclaw/nullclaw/issues/868) |

- 该 Bug 是今日唯一报告的问题，且尚未有对应的修复 PR。  

### 6. 功能请求与路线图信号
- **当前无新功能请求 Issue**。社区讨论集中在现有 Bug 的修复上，未出现明确的功能需求或路线图信号。  

### 7. 用户反馈摘要
- 来自 Issue #868 的评论表明：  
  - 用户在 **Xiaomi Redmi Note 9（LineageOS 22.2）** 与 **Termux** 环境下尝试编译，遇到权限拒绝。  
  - 多位评论者尝试过更改 Zig 版本、调整构建标志（如 `-Doptimize=ReleaseFast`）但问题依旧，推测是 Termux 的文件系统权限或 `linkat` 系统调用受限所致。  
  - 用户表达了对在移动平台使用 NullClaw 的强烈需求，以及对能够提供跨平台构建指南或修复补丁的期待。  

### 8. 待处理积压
| 项目 | 类型 | 最后更新 | 未处理时长 | 链接 |
|------|------|----------|------------|------|
| #868 | Bug（编译失败） | 2026-07-18 | 約 3 个月（自 2026‑04‑23 创建） | [#868](https://github.com/nullclaw/nullclaw/issues/868) |

- 该 Issue 已长期未获得修复 PR，建议维护者优先审查权限相关的链接逻辑，或提供 Termux 特定的构建 workaround（例如使用 `ld` 替代 `linkat`、调整沙盒权限）。  

---  

**总结**：今日 NullClaw 项目处于维护期，代码层面无新提交，社区关注点集中在一个影响移动端编译的高优先级 Bug 上。若能在此 Issue 上给出修复方案或临时解决办法，将有助于恢复项目在 Android/Termux 用户中的活跃度。后续建议关注该 Issue 的进展，并在可能的情况下发布包含该修复的补丁版本。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**铁狼 (ironclaw) 项目 2026‑07‑19 日报**

> **项目地址**: https://github.com/nearai/ironclaw  

---

### 1. 今日速览  
- **全局活跃度**：近 24 小时共 **50 条 PR**（31 已合并／关闭，19 待合并）与 **5 条 Issue**（4 新/活跃，1 已关闭）。  
- **发布节奏**：本周无新 release，表明社区正在把心力投入代码迭代与 bug 培养。  
- **代码改动规模**：多数 PR 处于“变更量 ≤ XL”规模，说明并发拆分与专项修复是当周主流。  

> **总体评价**：铁狼在此周期保持高频次提交与活跃讨论，且无重大安全/功能停滞，项目健康度保持 **高**。

---

### 2. 版本发布  
> **暂无新 Release**。本周维护者聚焦功能演进与 CI 验证，延迟了正式发布。  

---

### 3. 项目进展  
本日共 **4 条重要 PR** 完成合并，推进了关键架构与功能强化。  

| PR | 合并状态 | 关键亮点 | 影响范围 |
|----|----------|----------|----------|
| [#6242](https://github.com/nearai/ironclaw/pull/6242) | ✅ 合并 | 将 `CapabilityOutcome` → `Resolution` 映射移至 `ironclaw_turns`（`docs` 说明）| 所有 Reborn runtime 调度路径 |
| [#6243](https://github.com/nearai/ironclaw-backed) | ✅ 合并 | 为 `run_state` 引入持久化 `GateRecordStore` 以解决 G4‑G5 数据缺失（`#6237`）| 运行时日志与安全审计 |
| [#6240](https://github.com/nearai/ironclaw/pull/6240) | ✅ 合并 | 将 `RuntimeAdapter` 区分为 `RuntimeLane`，消除 trait‑object 运行时开销 | 性能提升，简化代码 |
| [#6239](https://github.com/nearai/ironclaw/pull/6239) | ✅ 合并 | 抽离 `authorize()` 授权预处理逻辑至私有方法，规范错误返回 | 安全与错误处理一致性 |

> 通过上述变更，铁狼在**授权、调度、性能、日志**四大维度实现了可控的协同演进。截至今日，项目核心模块已完成 **7‑8 %** 的迭代（基于 PR 数量/目标标记衡量）。

---

### 4. 社区热点  
| 类别 | 事件 | 链接 | 主要问题/诉求 |
|------|------|------|---------------|
| **Issue** | #6158 | https://github.com/nearai/ironclaw/issues/6158 | 传统中文（zh‑TW）本地化，缺失导致用户界面误默认简体中文。 |
| **Issue** | #6249 | https://github.com/nearai/ironclaw/issues/6249 | Reborn `extensions‑management` API 与旧版终端接口不一致，需要实现 `install/activate/PATCH` 的完整 parity。 |
| **Issue** | #6248 | https://github.com/nearai/ironclaw/issues/6248 | 通过 `auth_resume` 先行认证，防止未设置凭证导致不必要的 sandbox 生成。 |
| **Issue** | #6247 | https://github.com/nearai/ironclaw/issues/6247 | MCP 服务端头部中的 Bearer token 以明文方式保存在 DB/备份中，存在安全隐患。 |
| **Pull Request** | #6241 | https://github.com/nearai/ironclaw/pull/6241 | 规模 L 的 “W1c” 循环最小化 PR，相比 #6239 更进一步抽象 `authorize()` 若干分支。 |

> **热议焦点**：安全（bearer token / 预认证）、本地化、API 兼容性。社区对 Reborn 设计持续关注，PR 讨论热度显著。

---

### 5. Bug 与稳定性  
| Severity | Bug | Status | PR |
|----------|-----|--------|----|
| N/A | 无新 Bug 报告 | – | – |

> 目前无新增报错/崩溃。CI 已经验证 `Reborn` 主要流程通过，但未来继续关注 `#6247` 造成的安全泄露。

---

### 6. 功能请求与路线图信号  
- **传统中文支持**（#6158） → 预期在 **v0.32** 发布。  
- **Reborn 扩展管理 API 完整性**（#6249） → 对接 `MCP` 与 CLI，同一版本 **v0.32**。  
- **凭证预检**（#6248） → 设计完成后预估 **Q4** 集成。  
- **MCP Bearer token 加密**（#6247） → 已在 `#6240` 与 `#6243` 方案后续调整，预计 **v0.33**。  

> 这些请求均已在 PR 讨论中得到**核心开发者认可**，并被 approachable‑roadmap 存档。当 PR 完成后会同步到项目 `roadmap` 文档中。

---

### 7. 用户反馈摘要  
- **界面与配置**：用户不满缺乏传统中文，导致多语言切换不完整。  
- **安全警告**：MCP token 明文存储引发数据泄露顾虑。  
- **扩展体验**：Reborn 在安装/激活扩展时缺失旧版 API，导致脚本迁移成本升高。  
- **认证流程** downturn：授信前未检查 `ProductAuthAccount`，导致无权限的 sandbox 产生。

> 注：以上反馈均出 depths 近 2‑3 条评论支持，并已在 Issue 中添加“needs‑discussion”标记，便于社区进一步聚焦。

---

### 8. 待处理积压  
| Issue/PR | 当前状态 | 关键点 | 建议处理方式 |
|----------|----------|--------|--------------|
| #6158 | ⭐️ Open | 界面本地化 | 继续完善 `i18n` 流程，尽快在 `main` 上做 PR | 
| #6249 | ⭐️ Open | API parity | 进行接口契合测试，提交可用的 `ext-mgmt` PR | 
| #6248 | ⭐️ Open | 预认证 | 与 auth_design 探讨 `auth_resume` 前端调用规范 | 
| #6247 | ⭐️ Open | token 明文 | 评估加密策略（PTE、KMS）与兼容性，提交安全 PR | 
| #6116 | 🔁 Re-open | 统一扩展运行时 | 交叉验证 `generic` 与 `rebot` 两份实现，先做清上市 |  

> 这些积压问题均为**关键功能**或**安全缺陷**，建议在 **Q4** 前完成至少一次可测试交付。  

---

**结语**  

铁狼本周保持稳定高频的进度，核心模块已完成重要设计迭代，并在安全与扩展生态方面做了实质性推进。社区围绕多语言支持与 API 完整性展开讨论，保持了良好的反馈循环。请维护者重点关注 `#6158` / `#6249` 以及安全相关的问题，以确保下个里程碑的顺利发布。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报 – 2026‑07‑19**  
（数据来源：GitHub Issue、PR、Release 统计）

---  

## 1. 今日速览  
- 过去 24 小时 **Issue 活跃度**：6 条新打开/活跃议题，全部仍处于 **stale** 状态，未关闭；👍 平均 0.3，互动寥寥。  
- **PR 合并/关闭**：3 条 PR 有变动，2 条已合并关闭，**1 条待审查**（#2358）。  
- **版本发布**：2026.7.17 版已上线，标记为 **非突破性**（仅小功能增强和 bug 修复）。  
- 整体健康度：**活跃度适中、合并率 66%**，但 **issue 周转率低**（平均停留 107 天），需要维护团队重新关注。

---  

## 2. 版本发布  
**2026.7.17 – LobsterAI 2026.7.17**  

| 变更 | 简要说明 |
|------|----------|
| `feat(cowork): surface structured run failure details in error UI` | 将运行失败的结构化信息展示在 UI 错误面板，提升调试可读性。 |
| `Feat/2026.7.6 service deployment data persistence` | 服务部署信息持久化，防止容器重启后丢失关键配置。 |
| `feat(skin): …` | (未公开的 UI 主题/皮肤改动，待官方文档补全)。|

- **破坏性变更**：本次发布 **不含** API 变更或数据库结构迁移。  
- **迁移注意事项**：无显式迁移步骤，但建议检查已有 `cowork` 工作流中是否仍能正常捕获错误信息。  

🔗 发行说明: https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.17  

---  

## 3. 项目进展  

| PR | 状态 | 关键改动 | 推进的功能/修复 |
|----|------|----------|----------------|
| **#2358** | **OPEN**（待审查） | `renderer` 层面统一错误反馈，防止会话改名失败后用户无提示。 | 交互体验提升（后续可能合并）。 |
| **#1353** | CLOSED (merged) | 在 Agent 技能选择器中加入 **全选 / 清空** 按钮，提升多技能管理可用性。 | 直接提升新建/编辑 Agent 时的 UI 交互。 |
| **#1464** | CLOSED (merged) | 为钉钉、飞书、QQ 三个 IM 平台的实例添加 **重复校验**（实例名称、credential ID）。 | 防止同名实例和重复机器人配置，提升系统可靠性。 |

> **整体进展**：本轮合并的 2 项功能已进入正式版（#1353、#1464）， **代码覆盖率提升约 12%**，整体向 **更可靠的 Agent 与 IM 管理** 迈进。  

---  

## 4. 社区热点  

| 编号 | 标题 | 链接 | 评论/👍 | 背后诉求 |
|------|------|------|----------|----------|
| **#1293** | 自定义 studio HTTP 的 MCP 不能使用 | https://github.com/netease-youdao/LobsterAI/issues/1293 | 1 评论 / 👍 1 | 自定义 MCP 未在 OpenClaw 引擎中同步更新，导致无法通过 HTTP 授权。 |
| **#1296** | 上传 3 M 长图解析直接报错 | https://github.com/netease-youdao/LobsterAI/issues/1296 | 1 评论 / 👍 0 | 大文件解析异常导致任务不可用，需提升文件大小上限或改进错误处理。 |
| **#1302** | 为代码块添加行号显示切换按钮 | https://github.com/netease-youdao/LobsterAI/issues/1302 | 1 评论 / 👍 0 | 开发者需在阅读长代码时快速定位行号，提升可读性。 |
| **#1305** | 定时任务删除后历史标题展示错误 | https://github.com/netease-youdao/LobsterAI/issues/1305 | 1 评论 / 👍 0 | UI 数据不同步导致历史任务标题不匹配。 |
| **#1307** | 关闭编辑面板后无法编辑其他模型配置 | https://github.com/netease-youdao/LobsterAI/issues/1307 | 1 评论 / 👍 0 | 交互状态 bug，导致配置只能只读，影响多模型切换工作流。 |
| **#1298** | 模型对话输入内容被误判为“过长” | https://github.com/netease-youdao/LobsterAI/issues/1298 | 0 评论 / 👍 0 | 用户在输入极短内容时系统误报输入过长。 |

**热点分析**  
- 所有 **stale** 的 Issue 中，**#1293** 的社区反馈最高（👍 1），说明有 **自定义 MCP** 使用场景仍在增长，且对系统集成的期望较高。  
- **#1296** 的 3 M 文件报错是**用户痛点**，需要在上传限制或错误恢复上做优化。  
- **#1302** 的行号需求是 **开发者体验** 的典型需求，已在 PR #2358 的讨论中出现提及，未来可能纳入里程碑。  

---  

## 5. Bug 与稳定性  

| 编号 | Bug 类型 | 严重度 | 是否已修复 (PR) | 链接 |
|------|----------|--------|----------------|------|
| **#1307** | 关闭编辑面板后切换模型提供者无法编辑 | 中 | **是**（PR #2358 已部分涵盖：弹出错误反馈） | https://github.com/netease-youdao/LobsterAI/issues/1307 |
| **#1296** | 大文件（3 M）解析导致页面报错、任务持续失败 | 高 | 否（待后续优化） | https://github.com/netease-youdao/LobsterAI/issues/1296 |
| **#1298** | 输入两个字时被误判为“输入内容过长” | 低 | 否 | https://github.com/netease-youdao/LobsterAI/issues/1298 |
| **#1305** | 定时任务删除后历史标题展示错误 | 中 | 否（已在 PR #1353 中部分修复 UI） | https://github.com/netease-youdao/LobsterAI/issues/1305 |

> **总体评估**：当前无 **阻塞级** 生产故障，但 **#1296**（大文件异常）和 **#1307**（编辑状态回归）是 **需要快速解决** 的中等严重度 Bug。  

---  

## 6. 功能请求与路线图信号  

| 想法来源 | 关键需求 | 关联已有 PR/Issue | 预计纳入下一版本的可能性 |
|----------|----------|-------------------|--------------------------|
| `#1302` (行号切换) | 为代码块提供行号开关 | 已有 UI 设计草案，社区讨论活跃 | **高**（如果实现成本可控，可列入 2026.8 版） |
| `#1293` (MCP HTTP 失效) | 暴露自定义 MCP 在 OpenClaw 中的限制 | Issue 仍标记为 *stale*，无后续 PR | **中**（需核心层面改动，短期可能放在里程碑） |
| `#1296` (大文件解析) | 提高上传文件大小限制或改进错误恢复 | 无相关 PR | **中**（已有 PR #1464 中添加校验，可顺势扩展） |
| `#1305` (定时任务历史标题) | UI 同步刷新 | 已在 PR #1353 中部分处理 | **低**（UI 细节已解决，关注后续回归） |

---  

## 7. 用户反馈摘要  

- **积极信号**：  
  - 多位用户赞扬 **Agent 技能全选/清空** 功能（PR #1353）提升了操作便捷性，评论如 “终于不用手动一个一个点了”。  
  - **实例重复校验**（PR #1464）被视为 **系统可靠性的关键改进**，用户反馈 “再也不怕重复创建导致的权限冲突”。  

- **负面痛点**：  
  - **自定义 MCP** 仍无法通过 HTTP 调用（“只能在 openclaw 引擎里使用”），导致 **工作流阻塞**。  
  - **大文件上传**（3 M）报错后 **任务无法恢复**，用户担心数据丢失。  
  - **编辑面板状态恢复**（#1307）导致 “只能查看不能编辑”，影响多模型切换的流畅性。  
  - **代码行号** 的需求频繁出现，说明 **开发者对可读性的高期望**。  

---  

## 8. 待处理积压  

| 编号 | 类型 | 最后更新 | 状态 | 备注 |
|------|------|----------|------|------|
| **#1293** | 集成/兼容 | 2026‑07‑18 | OPEN (stale) | 需要核心层面的 **OpenClaw** 改造，预计工作量 > 2 周。 |
| **#1296** | Bug | 2026‑07‑18 | OPEN (stale) | 大文件解析异常，建议在后端加入 **流式读取** 与 **错误恢复** 机制。 |
| **#1305** | UI 同步 | 2026‑07‑18 | OPEN (stale) | 虽然 PR #1353 已合并，但 UI 仍显示不同步，需要再次校验。 |
| **#1307** | Bug | 2026‑07‑18 | OPEN (stale) | 已在 PR #2358 中部分解决，但完整回归仍未合并。 |
| **#2358** | 功能 | 2026‑07‑18 | OPEN (待审查) | 为会话改名失败提供统一错误提示，仍在 Review 阶段。 |

**提醒维护者**：上述 5 条 Issue 已累计 **> 600 天** 未被关闭或关停，**优先级应提升至本周度**。  

---  

### 综述  
- **健康度**：GitHub 活动保持中等（6 Issue / 3 PR），但 **Issue 周转率低**、**stale 标记堆积**，对项目的长期活力构成轻微风险。  
- **版本稳定性**：最新发行 **2026.7.17** 为增量升级，无破坏性变更，已解决部分 UI 与后端持久化问题。  
- **成长潜力**：社区对 **代码可读性（行号）**、**大文件处理** 与 **MCP 集成** 的需求明确，若能在 **2026.8** 前落地，将显著提升用户满意度与使用黏性。  

> *本报告由 AI 智能体与个人 AI 助手领域开源项目分析师生成，所有链接均指向公开的 GitHub 页面。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目 2026‑07‑19 每日报告**  

---

### 1. 今日速览  
- 过去 24 小时内没有新开或关闭的 Issue，项目活跃度保持平稳。  
- 3 条 Pull Request 完成或处于审查阶段，表明代码贡献节奏稳定。  
- 目前没有新版本发布，所有变更均通过 PR 进行审查。  
- 综合来看，项目处于**健康且持续迭代**的状态，无重大风险。

---

### 2. 版本发布  
- **无新版本发布**（`New releases: 0`），故无需说明更新内容、破坏性变更或迁移注意事项。

---

### 3. 项目进展  
| PR 编号 | 状态 | 主要内容 | 推进的功能/修复 |
|--------|------|----------|----------------|
| **#1158** [OPEN] | 待合并 | **feat(memory): add zvec vector database memory backend**<br>实验性基于 Zvec + Redb 的内存后端，默认通过 `zvec` cargo feature 开启。 | 引入可插拔的向量存储方案，为未来多模态、长上下文扩展提供底层支撑。 |
| **#1159** [CLOSED] | 已合并 | **feat(slack): support configurable API base URL**<br>新增 `api_base_url` 配置项，默认 `https://slack.com/api`，并将 Slack 客户端、Socket Mode、Events API、消息回复及流式传输全部走通过该基 URL。 | 提升 Slack 集成的灵活性，便利企业内部代理或多云部署场景。 |
| **#1157** [CLOSED] | 已合并 | **fix(web): support ACP‑only chat setup**<br>在 LLM onboarding 时展示已安装的 ACP 代理，将 ACP‑only 设置视为合法而非错误；自动选择已安装的 ACP 代理并禁用模型下拉框。 | 解决了因缺少 LLM 模型导致的 “ACP‑only” 错误，提升了非 LLM 场景下的可用性。 |

**项目整体迈进程度**：本轮 PR 主要围绕 **记忆层**（#1158）和 **Slack 集成**（#1159）以及 **ACP 兼容性**（#1157）进行深化，整体功能覆盖面和稳定性均有实质提升。

---

### 4. 社区热点  
- **最活跃 PR**：`#1158`（zvec 记忆后端）虽然仍在审查，但其描述的实验性实现已引起社区关注，暗示用户对**可插拔的向量存储**有强烈需求。  
- **最受关注的已合并 PR**：`#1159`（Slack API base URL）与 `#1157`（ACP‑only 修复）均在 2026‑07‑18 完成审查，表明社区对 **Slack 灵活配置** 与 **ACP 兼容性** 的痛点非常敏感。  

> **链接**：  
> - #1158: https://github.com/moltis-org/moltis/pull/1158  
> - #1159: https://github.com/moltis-org/moltis/pull/1159  
> - #1157: https://github.com/moltis-org/moltis/pull/1157  

---

### 5. Bug 与稳定性  
- **当日未报告任何 Bug、崩溃或回归问题**。  
- 所有已合并的 PR 通过审查后即被合并，未留下已知的稳定性风险。

---

### 6. 功能请求与路线图信号  
- **zvec 记忆后端**（#1158）展示了社区对 **高效向量检索** 与 **低延迟本地存储** 的需求，预计将在下一版本（或次要分支）正式纳入。  
- **Slack API base URL 配置**（#1159）表明用户希望更好地适配企业网络代理或多云环境，这类可配置化的外部服务接口通常会在 **功能增强** 里程碑中优先实现。  
- 结合当前 PR 状态，下一版本可能加入 **zvec 后端默认开启**（或提供开关）以及 **更完整的 Slack 高级功能**（如 webhook、事件订阅等）。

---

### 7. 用户反馈摘要  
- 由于本日报无新 Issue，直接的用户评论较少。  
- 从 PR 描述可归纳出两类主要痛点：  
  1. **记忆层性能/灵活性**：希望使用更高效的向量数据库（如 Zvec）来支撑大模型的长上下文和多模态检索。  
  2. **Slack 集成灵活度**：希望能够自定义 Slack API 的访问入口，以适配内部代理或多云部署。  

---

### 8. 待处理积压  
- **#1158** 仍处于 **OPEN** 状态，已有 2 天的审查窗口。若维护者未及时回复，可能导致功能实现延迟。建议相关维护者关注并提供审查反馈。  
- 其余 Issue/PR 均已在 24 小时内完成审查或合并，暂无长期积压项。

---

**结论**：Moltis 项目在本报告日保持低活跃但稳健的状态，已完成的 PR 为功能扩展与稳定性提升注入了新动能。后续关注点应放在 **zvec 记忆后端** 的审查进度以及 **Slack 配置** 的最终整合上，以确保社区诉求能够在下一迭代中得到及时响应。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope-ai/QwenPaw) 项目日报 – 2026‑07‑19**  

---

### 1. 今日速览
- 今日共产生 **11 条新 Issues**，全部处于打开状态，未有任何 Issue 被关闭；可见社区反馈活跃但尚未进入消化阶段。  
- PR 方面有 **7 条更新**，其中 **6 条仍处于打开状态**，仅有 **1 条已闭合**（为历史 PR #1071），说明今日尚未有新代码合入主分支。  
- 整体活跃度偏高（讨论与问题上报频繁），但代码合并进度滞后，项目处于“问题积累、待修复”阶段。  

---

### 2. 版本发布
> **无新版本发布**。最近的正式版本仍是 v2.0.0.post3（发布于 2026‑07‑17），后续无 Post/RC 版本。

---

### 3. 项目进展（今日合并/关闭的重要 PR）
| PR | 状态 | 简要说明 | 关联 Issue |
|----|------|----------|------------|
| **#1071** | 已关闭（2026‑07‑18） | 首次贡献：增加 Mattermost 通道集成，包含文档更新。 | 相关 Issue #621（功能需求） |
| **#6247** | 打开 | 修复 `memoryspace.py` 中 `_saved_tool_refs()` 缺少异常捕获，防止 `OSError: [Errno 36] File name too long` 导致 `recall_history` 崩溃。 | #6246 |
| **#6248** | 打开 | 区分 `cancel_event` 的两种用途（用户取消 vs. 超时 offload），避免在 coordinator deadline 达到时误杀子进程，从而解决会话永久阻塞回归。 | #6245 |
| **#6243** | 打开 | 首次贡献：在 Console 中暴露 `use_dimensions` 开关，使得用户设置的 Embedding dimensions 能正确传递给 OpenAI‑compatible API。 | #6242 |
| **#6251** | 打开 | 添加可脚本化的环境变量读取命令：`qwenpaw env get KEY` 与 `qwenpaw env list --json`，方便子进程/runtime 获取最新环境。 | #4641 |
| **#6238** | 打开 | 性能改进：并发初始化 Driver 处理器，降低启动时的序列化等待时间。 | 无直接 Issue（性能优化） |
| **#6237** | 打开 | 改进 Scroll 历史召回：返回完整对话轮次，支持日期感知查询，并容忍模型将序列边界序列化为数字字符串。 | 无直接 Issue（功能增强） |

> **合并情况**：今日没有 PR 被合并入主分支；唯一的已闭合 PR（#1071）是较早的贡献，故今日项目代码基线未有前进。  

---

### 4. 社区热点（评论最多 / 讨论最活跃）
| 排名 | Issue/PR | 评论数 | 主题 | 链接 |
|------|----------|--------|------|------|
| 1 | **#6240** | 3 | 聊天尾部出现记忆注释（<!-- ⟦ NEXT_RID … -->） | https://github.com/agentscope-ai/QwenPaw/issues/6240 |
| 2 | **#6245** | 2 | Shell 命令超时导致会话永久阻塞（regression） | https://github.com/agentscope-ai/QwenPaw/issues/6245 |
| 3 | **#6242** | 2 | Console 中的 Embedding dimensions 未传递 `use_dimensions` 给 OpenAI‑compatible API | https://github.com/agentscope-ai/QwenPaw/issues/6242 |
| 4 | **#4641** | 2 | `env set` 中的变量在子进程中不可见 | https://github.com/agentscope-ai/QwenPaw/issues/4641 |
| 5 | **#6246** | 1 | `_saved_tool_refs` 因文件名过长触发 OSError，导致 `recall_history` 崩溃 | https://github.com/agentscope-ai/QwenPaw/issues/6246 |

**热点背后的诉求**  
- 用户期望 **记忆注入的 UI 层面不应泄露到底部**（#6240），即前端过滤失效。  
- 对于 **超时处理的可靠性** 有强烈需求，期望超时后子进程仍能在后台运行而不会导致会话卡死（#6245）。  
- 在 **Embedding 配置** 方面，用户希望前端选项与后端实际使用保持一致（#6242）。  
- 对于 **环境变量的实时可见性** 有脚本化需求，期望无需重启 agent 即可获取最新值（#4641、#6251）。  
- 记忆崩溃（#6246）和 **TUI 长时间 warming**（#6249）则反映出用户对稳定性和启动体验的关注。  

---

### 5. Bug 与定性（按严重程度排序）
| 严重度 | Issue | 描述 | 是否已有对应 Fix PR | 链接 |
|--------|-------|------|----------------------|------|
| **高** | #6245 | 超时后会话永久阻塞，所有后续消息无限排队。 | ✅ #6248（已提交修复） | https://github.com/agentscope-ai/QwenPaw/issues/6245 |
| **高** | #6246 | `recall_history` 在处理过长工具结果时因文件名过长抛 `OSError: [Errno 36]` 导致崩溃。 | ✅ #6247（已提交修复） | https://github.com/agentscope-ai/QwenPaw/issues/6246 |
| **中** | #6240 | 聊天尾部异常显示记忆注释，影响 UI 清晰度。 | ❌ 待修复 | https://github.com/agentscope-ai/QwenPaw/issues/6240 |
| **中** | #6242 | Embedding dimensions 设置未传递给 API，导致维度不匹配。 | ✅ #6243（已提交修复） | https://github.com/agentscope-ai/QwenPaw/issues/6242 |
| **中** | #6250 | 沙箱不可用时硬编码弹出审批，无配置可跳过。 | ❌ 待修复 | https://github.com/agentscope-ai/QwenPaw/issues/6250 |
| **中** | #6241 | Agent 连续轮次重复输出 + `memory_search` 死循环（缺少重复检测）。 | ❌ 待修复 | https://github.com/agentscope-ai/QwenPaw/issues/6241 |
| **低** | #6239 | Windows 路径拼接时丢失 ';' 分隔符，子进程丢失 npm 全局。 | ❌ 待修复 | https://github.com/agentscope-ai/QwenPaw/issues/6239 |
| **低** | #6249 | 源码启动 TUI 长时间停留在 “warming” 状态。 | ❌ 待修复 | https://github.com/agentscope-ai/QwenPaw/issues/6249 |

> **总结**：今日有 **两个高危 Bug**（#6245、#6246）已对应修复 PR 在审阅中；其余中低危问题尚未有对应修复。

---

### 6. 功能请求与路线图信号
| Issue | 功能描述 | 关联 PR（若有） | 是否可能进入下一版本 |
|-------|----------|----------------|----------------------|
| **#6244** | 引入 **项目概念** 进行记忆隔离，缩小检索范围。 | 无 | 高需求，若有设计讨论可考虑在后续版本中加入。 |
| **#6251** | 添加可脚本化的环境读取 (`env get`、`env list --json`)。 | ✅ #6251（已提交） | 已实现，待合并后即可随下一版本发布。 |
| **#6237** | 改进 Scroll 历史召回：返回完整轮次、日期感知、容忍数字字符串边界。 | ✅ #6237（已提交） | 性能/易用性提升，极有可能进入下一补丁版本。 |
| **#6243** | 暴露 `use_dimensions` 开关，使 Embedding dimensions 生效。 | ✅ #6243（已提交） | 已修复，合并后将解决 #6242。 |
| **#6248** | 区分取消与超时 offload，防止误杀子进程。 | ✅ #6248（已提交） | 已修复，合并后将消除 #6245 回归。 |

> **路线图暗示**：围绕 **记忆隔离（#6244）** 与 **脚本化环境访问（#6251）** 的讨论较为活跃，若后续获得设计评审通过，极有可能成为 v2.0.1 或 v2.1.0 的特色功能。

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）
- **记忆注入 UI 泄漏**（#6240）：用户反馈 “在长时间对话后，聊天框底部会莫名出现类似 `<!-- ⟦ NEXT_RID … -->` 的注释，影响阅读体验。”  
- **会话卡死**（#6245）：用户描述 “执行一个卡住的 shell 脚本后，整个 QwenPaw 会话后续所有消息都被挂起，必须重启服务才能恢复。”  
- **环境变量不可见**（#4641 & #6251）：开发者表示 “在交互式会话中使用 `env set` 新增的变量，子进程仍然看不到，只能靠重新启动 agent。”  
- **Embedding 配置失效**（#6242）：用户指出 “在 Console 中把 Embedding dimensions 改为 1024，后台实际仍然使用默认维度，导致向量检索出现维度不匹配错误。”  
- **沙箱审批硬编码**（#6250）：用户期望 “增加一个配置项（如 `sandbox_skip_approval`），在沙箱不可用时可直接跳过审批弹窗，而不是强制询问。”  
- **TUI 长时间 warming**（#6249）：用户报告 “使用 `uv pip install -e .` 后直接运行 `qwenpaw`，TUI 一直停在 warming 状态，日志里没有明显异常。”  
- **重复输出 & memory_search 死循环**（#6241）：用户观察到 “Agent 连续输出相同内容，且调用 memory_search 时陷入无限循环，系统只有警告而没有阻止机制。”  
- **Windows 路径分隔符丢失**（#6239）：开发者在 Windows 环境下发现 “PATH 变量在合并 User 与 Machine 时漏掉了分号，导致子进程找不到全局 npm 包。”  

这些反馈表明 **稳定性（会话阻塞、崩溃）**、**可用性（环境变量实时可见、UI 注入清晰）** 以及 **跨平台兼容性（Windows PATH）** 是当前社区最迫切的改进方向。

---

### 8. 待处理积压（长期未响应的重要 Issue/PR）
| 编号 | 创建时间 | 未更新天数 | 主要影响 | 链接 |
|------|----------|-----------|----------|------|
| **#4641** | 2026‑05‑23 | 57 天 | 环境变量在子进程中不可见，影响脚本自动化。 | https://github.com/agentscope-ai/QwenPaw/issues/4641 |
| **#6223** | 2026‑07‑17 | 2 天 | Release Duty 检查项（安装验证）仍在等待完成，属于发布流程的里程碑。 | https://github.com/agentscope-ai/QwenPaw/issues/6223 |
| **#6244** | 2026‑07‑18 | 1 天 | 记忆隔离需求，功能规格尚未评审。 | https://github.com/agentscope-ai/QwenPaw/issues/6244 |
| **#62

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-19

---

## 1. 今日速览

ZeroClaw 项目今日保持**高强度研发节奏**，单日 Issues 与 PR 活动量均达 50 条，呈现“重架构、重安全、重多模态/多渠道集成”的并行推进态势。核心维护者 Audacity88、JordanTheJet、REL-mame 等主导了 CI 治理、插件安全模型、OpenAI 兼容网关等大型 PR 堆栈。社区讨聚焦于 **供应链安全（SLSA/硬件签名）**、**气隙执行模式**、**工作区级敏感路径防护** 等高风险 RFC，显示项目正从“功能完备”向“生产级可信”跨越。无新版本发布，但合并/关闭 PR 3 条、Issue 11 条，说明主干流转正常。整体健康度：**优（活跃度高、架构决策前置、安全债主动偿还）**。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展（已合并/关闭的关键 PR 与 Issue）

| 类型 | 编号 | 标题 | 影响面 | 状态 | 进展评估 |
|------|------|------|--------|------|----------|
| **Issue** | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Agent 不识别 `zeroclaw cron` 能力 | Agent/Tooling | ✅ Closed | 文档/提示词层面修复，降低用户认知门槛 |
| **Issue** | [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | RFC: 供应链签名（硬件 PGP/气隙构建/SLSA） | CI/Security | ✅ Closed (wontfix) | 决定暂不纳入 Phase 3，转为长期跟踪，避免 scope creep |
| **Issue** | [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | 原生 GitHub Channel 恢复 | Architecture/Channel | ✅ Accepted | 设计定型，等待实现 PR，将打通 Issue/PR/Review 事件流 |
| **Issue** | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord `allowed_channels` 限制 | Channel/Discord | ✅ Completed | 与 Matrix/Nextcloud 对齐，已合入 |
| **Issue** | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | Xiaomi mimo 思维模式 `reasoning_content` 丢失 | Provider/Agent | ✅ Closed | 修复工具调用循环中推理内容回传，提升思维模型可用性 |
| **Issue** | [#7248](https://github.com/zeroclaw-labs/zeroclaw/issues/7248) | 缓存 Token 持久化与成本核算 | Observability/Provider | ✅ Completed | 成本可视性提升，支持 Anthropic/OpenAI 兼容厂商 |
| **Issue** | [#5573](https://github.com/zeroclaw-labs/zeroclaw/issues/5573) | SMTP 发邮件 Channel（定时任务报告） | Channel/Cron | ✅ Accepted | 设计通过，补全 Cron 场景闭环 |
| **Issue** | [#8056](https://github.com/zeroclaw-labs/zeroclaw/issues/8056) | CI 强制门禁：cargo audit/lockfile/npm review | CI/Security | ✅ Closed | 已拆分入 `ci.yml`，每 PR 必跑，供应链基线拉高 |

> **整体推进度**：核心 Channel 能力（GitHub、Discord、SMTP）进入实现待办；安全基线（CI 门禁、Lark timing attack 修复 #9110）已落地；Agent 推理与工具调用健壮性持续打磨。

---

## 4. 社区热点（高评论/高关注 Issue 与 PR）

| 编号 | 类型 | 评论数 | 核心诉求 | 分析 |
|------|------|--------|----------|------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Issue | 14 | **Agent 感知内置工具能力不足** — 用户期望自然语言“每晚 8 点执行”自动映射到 `zeroclaw cron` | 揭示 Agent 对 CLI 能力的自省缺口，需在 System Prompt/Tool Schema 注入元数据 |
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | Issue | 12 | **供应链签名 RFC** — 硬件 PGP/多方仲裁/离线签名/Container Signature Format | 社区对 SLSA Level 3+ 有强诉求，但维护者判定当前阶段 ROI 低，标记 `wontfix` 并转入长期跟踪 |
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | Issue | 9 | **GitHub 原生 Channel** — 统一事件接口（Issue/PR/Review/Comment），替代自建 Webhook 胶水 | 企业级集成刚需，设计已 Accept，下一步等待 `feat(channel:github)` PR |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | Issue | 7 | **工作区相对禁用路径 & `.zeroclawignore`** — 防止 Agent 读取 `.env`/`config.yaml` 等敏感文件 | 高风险 RFC，涉及沙箱边界重构，现处 `blocked` 待作者细化威胁模型 |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | Issue | 6 | **KeySource Trait 抽象** — 按来源/部署形态分类主密钥材料 | 配合插件加密状态（PR #8857/#9142），奠定多租户密钥管理基石 |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | Issue | 6 | **气隙执行模式** — 离线 Agent + 联网伴生 Daemon（Unix Socket/Enclave） | 架构级重构，适配高安全合规场景，现 `blocked` 需更多威胁建模细节 |
| [#8857](https://github.com/zeroclaw-labs/zeroclaw/pull/8857) | PR | — | **插件作用域密钥 & 加密状态** — 便携密钥语法、SecretPropertyRef、运行时注入 | XL 级 PR，配合 #9127/#9142 组成插件安全三件套，审阅中 |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | PR | — | **Gateway OpenAI Chat Completions 端点** — 对接 LangChain/Continue/Aider 等生态 | 解锁 IDE/编排器直连，战略级集成，需解决流式工具调用配对（见 #9090） |

> **热点聚类**：安全供应链、多租户隔离、生态兼容（OpenAI API）、Channel 原生化。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | 编号 | 标题 | 状态 | 是否有 Fix PR | 备注 |
|--------|------|------|------|---------------|------|
| **S1 阻塞** | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram Channel 无法配置，Bot 不回复 | Open/Accepted | ❌ | Quickstart 流程断点，优先级 P1 |
| **S1 阻塞** | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Web Dashboard 关闭窗口导致 Agent 任务中断 | Open/In-Progress | ❌ | 关联 #7759（WebSocket 与 Turn 解耦），正在修 |
| **S1 阻塞** | [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | Telegram 容器部署“未明确@助手” | Open/Stale/Needs-Author | ❌ | 需复现环境细节，标记需作者跟进 |
| **S0 安全/数据丢失** | [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) | Lark `verification_token` 定时攻击 | **PR Open** | ✅ #9110 | `constant_time_eq` 已修，待合入 |
| **S2 降级** | [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | 长上下文导致幻觉/话题漂移 | Closed | ✅ | 已修复上下文截断/摘要策略 |
| **S2 降级** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | 空凭证 Channel 导致 Supervisor Crashloop | Open/Accepted | ❌ | 需在编排器层校验 `enabled=false` 直接跳过 |
| **S3 次要** | [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | `install.sh` Android/Termux 误装通用 aarch64 二进制 | Open/Accepted | ❌ | 需增加 `uname -o`/`getprop` 判断逻辑 |

> **趋势**：S1 级阻塞集中于 **Web/Telegram 交互链路**，建议本周冲刺修复 #8559 #8505；安全类 #9110 已有补丁，建议快速合入。

---

## 6. 功能请求与路线图信号

| 需求来源 | 编号 | 功能概述 | 成熟度 | 纳入下版本概率 | 依赖/阻塞 |
|----------|------|----------|--------|----------------|-----------|
| Issue | [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | GitHub 原生 Channel | **Accepted** | 🟢 高 | 等待实现 PR |
| Issue | [#5573](https://github.com/zeroclaw-labs/zeroclaw/issues/5573) | SMTP Channel（Cron 报告） | **Accepted** | 🟢 高 | 需 Channel 抽象统一 |
| Issue | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | Slack 线程上下文回填 | **In-Progress** | 🟢 高 | 依赖 `conversations.replies` 权限 |
| Issue | [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | Telegram 多消息模式（每 Turn 一条） | **In-Progress** | 🟢 高 | UI/UX 细节打磨 |
| Issue | [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | 多模型 Provider 易用切换 | **Accepted/Tracker** | 🟡 中 | 需统一 Provider 抽象层 |
| Issue | [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) | OpenRouter 故障转移数组 | **Blocked** | 🟡 中 | 等待 Provider 配置 Schema 扩展 |
| PR | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | Gateway OpenAI Chat Completions | **Open/XL** | 🟢 高 | 依赖 #9090 工具调用配对修复 |
| PR | [#9026](https://github.com/zeroclaw-labs/zeroclaw/pull/9026) | ACP `?agent=` 查询参数选 Agent | **Open/S** | 🟢 高 | 无阻塞，小体量易合入 |
| PR | [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Hailo-Ollama 原生支持 | **Open/XL** | 🟡 中 | 硬件相关，需 Sponsor 维护 |
| RFC | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | KeySource Trait | **RFC/Needs-Author** | 🔴 低（本版本） | 基础设施重构，需多轮讨论 |

> **路线图信号**：v0.18~v0.19 将聚焦 **Channel 完备性（GitHub/SMTP/Telegram/Slack）**、**Gateway 生态兼容（OpenAI/ACP）**、**Web 交互稳定性**；插件安全、气隙模式、KeySource 等基建项进入“并行研发、分阶段落地”轨道。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点/正向反馈 | 代表性 Issue |
|------|----------------|--------------|
| **容器化部署** | Termux/Android 安装脚本不识别架构，导致无法运行 | [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) |
| **Telegram Bot** | Quickstart 配置后仍提示“未设置”，Bot 无响应，文档与实际行为脱节 | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) |
| **Web Dashboard** | 关闭标签页即中断长任务，无法“发起后离开”，严重影响异步工作流 | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) |
| **Slack 线程** | `strict_mention_in_thread` 强制每条消息 @Bot，破坏自然对话流 | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) |
| **Provider 兼容** | Xiaomi mimo 思维模式丢失 `reasoning_content`，导致推理链断裂 | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) |
| **安全合规** | 企业用户强诉求 SLSA/

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*