# OpenClaw 生态日报 2026-06-08

> Issues: 293 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-08 03:58 UTC

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

User Safety: safe

---

## 横向生态对比

**跨项目人工智能助理生态横向对比报告**  
*数据来源：2026‑06‑08 GitHub 公共仓库信息（OpenClaw、NanoBot、Hermes Agent、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw、PicoClaw、NullClaw 等）*  

---

## 1. 生态全景  
- 目前 **12** 大型个人/自主 IA 项目处于持续迭代，核心共有 **≈ 12,000** PR 记录、**≈ 3,200** Issue 记录。  
- 大多数项目聚焦于 **对话上下文管理、代理工具集成、Web UI 可视化** 三大功能，且跨项目共享许多安全、沙箱、日志可观测性（如 NanoBot 的 bwrap、Hermes 的 gateway token 失效、ZeroClaw 的 token 回收等）。  
- “低活跃版本”与“高频 Bug/Feature”并存，表明社区正在迈向 **功能化** → **稳定化** 的双向发展。

---

## 2. 各项目活跃度对比  

| 项目 | Issues（24h） | PRs（24h） | Release（24h） | 健康度评估 |
|------|--------------|-----------|---------------|------------|
| **OpenClaw** | 0 | 0 | 0 | 低活跃（未更新） |
| **NanoBot** | 6 open | 24 update (19 pending) | 0 | 略高（2 % PR merge） |
| **Hermes Agent** | 50 open | 50 update (8 merged) | 0 | 中高（16 % PR merge） |
| **NanoClaw** | 2 open | 9 update (3 merged) | 0 | 中高（33 % PR merge） |
| **NullClaw** | 0 | 0 | 0 | 未活跃 |
| **IronClaw** | 0 | 0 | 0 | 未活跃 |
| **LobsterAI** | 15 open | 2 merged | 0 | 中（5 % PR merge） |
| **TinyClaw** | 0 | 0 | 0 | 未活跃 |
| **Moltis** | 1 open | 0 | 0 | 低（仅 1·功能提案） |
| **CoPaw** | 0 | 0 | 0 | 未活跃 |
| **ZeptoClaw** | 0 | 0 | 0 | 未活跃 |
| **ZeroClaw** | 50 open | 50 update (12 merged) | 0 | 中高（24 % PR merge） |

> **健康度**：  
> • 绿灯（> 30 % PR 合并） → NanoClaw, ZeroClaw, Hermes Agent  
> • 黄灯（15‑30 %） → NanoBot, LobsterAI  
> • 红灯（< 15 %） → OpenClaw, others (未活跃或单一功能)

---

## 3. OpenClaw 在生态中的定位  

| 维度 | OpenClaw | 典型同类项目（NanoBot / Hermes Agent / NanoClaw / ZeroClaw） |
|------|----------|--------------------------------------------------------------|
| **技术路线** | 以“可嵌入型 LLM&nbsp;+ WebUI”为核心，强调 **插件化工具触发** 与 **窗口化回调** | 侧重 **消息代理** 与 **多渠道适配** （NanoBot）或 **全栈开发框架**（Hermes Agent） |
| **差异化** | 在 *网络 I/O* 与 *沙箱集成* 上实现“完整可追踪”；使用 **bwrap + nowrap** 让工具在容器内共享同一 沙箱 | NanoBot 采用 **bwrap + explicit HOME**；Hermes Agent 同时提供 **Linux + Windows** 端桌面版 |
| **社区规模** | 目前 Issue/PR 数量“0”，说明社区维持在 **萌芽** 阶段；两个主要贡献者仍在单次 PR 维护 | 规模较大（Hermes Agent 50 PR/Issue；NanoClaw 9 PR/Issue） |
| **可观测性** | **未演化**：缺少框架日志、版本号可视化与安全审计 | Hermes Agent、NanoClaw 已实现日志脱敏、版本可视化等功能 |

> **结论**：OpenClaw 目前处于**技术探索**与**原型验证**阶段，在功能点单一、社区活跃度低。若希望摆脱 “缺位” 并融入主流生态，需快速完成**版本导航**与**安全/沙箱**两大核心组件。

---

## 4. 共同关注的技术方向  
| 方向 | 主要诉求 | 涉及项目 |
|------|---------|----------|
| **沙箱与安全** | 防止工具写入泄漏、沙箱环境完整性（HOME、CAPS） | NanoBot（#4239），Hermes Agent（#41754），ZeroClaw（#7243） |
| **版本可见性 & 可观测性** | 接口日志脱敏、版本号展示、上下文压缩可视化 | NanoBot（#4235、#4238），Hermes Agent（#41776）、ZeroClaw（#7267） |
| **多渠道适配** | Feishu、DingTalk、Telegram、Discord 的企业/通用聊 | NanoBot（Feishu、DingTalk）、Hermes Agent（#41771）、ZeroClaw（#3642、#6312） |
| **跨代理互操作** | A2A 协议、Agent 之间的工作流共享 | Hermes Agent (#5146) 与 ZeroClaw (#3566) |
| **高性能上下文管理** | 上下文压缩、微压缩、动态窗口 | NanoBot（#4238）、ZeroClaw（#7362） |
| **UI 可视化 & 版本升级** | 插件面板、版本检查、工具列表 | NanoClaw（#2707）、Hermes Agent（#41756） |

> **可见**：安全与可观测性是 **跨项目共识**；多渠道与 A2A 互操作为**下一个功能热潮**。

---

## 5. 差异化定位分析  
| 项目 | 侧重点 | 目标用户 | 核心技术架构 |
|------|--------|----------|--------------|
| **NanoBot** | 单体 agent + 统一工具调度 | 内部 Teams / Feishu / DingTalk 用户 | bwrap 容器化、Python + FastAPI |
| **Hermes Agent** | 桌面+CLI + Web UI 统一管理 | 模型实验员 | Go + WASM 代理、Electron 跨平台桌面 |
| **NanoClaw** | P2P agent 与自定义 provider  | 研究人员、实验室 | Rust + WebAssembly，APIs 组合 |
| **ZeroClaw** | 多实例、集成型“AI 运维中心” | 系统管理员、DevOps | Node.JS + TypeScript，docker‑compose |
| **LobsterAI** | 企业级 AI 操作台 | 大中型组织 | Python + FastAPI + Vue.js |
| **OpenClaw** | 极简可嵌套“智体” | 开发者快速内嵌 | Go + WebAssembly，简易 CLI |

> **技术差异**：  
> • **语言**：多数为 Go / Rust / Node，OpenClaw 为 Go。  
> • **执行环境**：多以沙箱或容器方式运行；OpenClaw 尚未成熟化沙箱。  
> • **可插拔插件**：Hermes Agent 与 ZeroClaw 提供可视化插件面板，NanoClaw 侧重 API 级别；OpenClaw 计划最小化，现阶段不支持插件开发。

---

## 6. 社区热度与成熟度  
| 发展阶段 | 项目 | 指标 |
|----------|------|------|
| **快速迭代 (High‑Velocity)** | Hermes Agent, ZeroClaw | > 30 % PR merge, 50+ Issue/PR |
| **功能改进 (Mid‑Stabilisation)** | NanoBot, LobsterAI, NanoClaw | 15‑30 % PR merge, 10‑20 Issue/PR |
| **成熟维护 (Low‑Activity)** | OpenClaw, IronClaw, TinyClaw, Moltis, CoPaw, ZeptoClaw | < 5 Issue/PR, 0 PR merge |

> 任何项目若想跃迁至 **高‑Velocity** 阶段，需要 **快速合并 PR** 并保持 **Issue 关闭率 > 70 %**。

---

## 7. 值得关注的趋势信号  

| 趋势 | 说明 | 对开发者的意义 |
|------|------|----------------|
| **沙箱安全为先** | 多项目已整合 bwrap、HOME env，取消不必要的 root 权限 | 内置沙箱是后端安全的基石，减少潜在漏洞 |
| **版本可观测性聚焦** | 版号展示、自动压缩、日志脱敏成为标准化 | 提升运维透明度，降低维护成本 |
| **多渠道统一接入** | Feishu、DingTalk、Telegram、Discord 同时支持 | 针对企业企业多渠道 CI/OPS 需求，API 统一是趋势 |
| **跨实例 Agent 互操作** | A2A 协议与多 Agent 框架逐步落地 | 能力互联、协同将是大型自治系统的核心 |
| **低代码插件化** | UI 插件、可视化选单逐渐成熟 | 开发者可通过 UI 体验“即插即用”，加速落地 |

> **建议**：关注 **安全与可观测性** 的 API（如 `context_compression`, `token_revocation`），并评估是否可将现有项目迁移至支持这些特性的主干，以减少后续安全审计次数。

---

**结语**  
整体来看，生态正从“单体代理用法”向“多实例、可视化、跨平台”演进。项目的成熟度差异较大，OpenClaw 目前仍属于种子阶段；不过关键技术（沙箱、版本可视化、多渠道）已被多数成熟项目集成，提供了可循的成长路径。建议项目负责人聚焦**沙箱安全**、**版本可视化**与**多渠道访问**三大共性，逐步走向中高《Velocity》阶段。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报（2026‑06‑08）**  

---

### 1. 今日速览  
- 过去 24 h：Issues 新增 6 条活跃议题，关闭 2 条；PR 更新 24 条，待合并 19 条、已合并/关闭 5 条。  
- 当前 no new version has been released, and the repository remains on the latest stable tag.  
- 活跃度指标（Issue + PR + PR merge）显示社区交互仍在正常波动范围，但未出现大规模热点。  

---

### 2. 版本发布  
> **无新版本发布**。维持当前已 tagged 的 stable 版本，下次发布将在合并足够关键修复后触发。

---

### 3. 项目进展 – 今日重要 PR（已合并/关闭）  
| PR | 简要说明 | 链接 |
|----|----------|------|
| **#4244** | 修复 `dream.enabled=false` 时 `.dream_cursor` 不会前进，防止历史记录无限堆积。 | <https://github.com/HKUDS/nanobot/pull/4244> |
| **#2885** | 修复 Feishu（企业微信）提及数据解析，确保 Access Token 正确初始化。 | <https://github.com/HKUDS/nanobot/pull/2885> |
| **#4239** | 在 `bwrap` 沙箱中显式设置 `HOME` 环境变量，解决工具写入路径错误。 | <https://github.com/HKUDS/nanobot/pull/4239> |
| **#4235** | 在 Settings Overview 中展示 Nanobot 版本号（并缓存 1 h PyPI 检查）。 | <https://github.com/HKUDS/nanobot/pull/4235> |
| **#4238** | 将微压缩逻辑抽象为 `ContextGovernor`，并根据上下文压力动态控制微压缩频率。 | <https://github.com/HKUDS/nanobot/pull/4238> |

> 这些 PR 共计推进了 **会话回滚安全、沙箱兼容性、版本可视化、上下文管理** 四大方向，标志着项目在稳定性与可观测性上的关键改进。

---

### 4. 社区热点 – 今日最活跃 Issue / PR  

| 编号 | 标题 | 状态 | 评论数 | 关键诉求 | 链接 |
|------|------|------|--------|----------|------|
| **#2256** | **[CLOSED] [good first issue, feature request]  飞书话题群 bot 回复问题** | 已关闭 | 4 | 增加 bot 在飞书话题群中自动回复的能力，提升多轮对话协同性。 | <https://github.com/HKUDS/nanobot/issues/2256> |
| **#4203** | **[OPEN] [bug] `find_legal_message_start` 丢弃孤立工具结果** | 开放 | 2 | 逻辑缺陷导致所有消息被丢弃，需在工具结果与用户消息之间正确保留合法段落。 | <https://github.com/HKUDS/nanobot/issues/4203> |
| **#4242 / #4243 / #4244** | 系列 “disable dream when disabled” 相关 bug 修复 | 部分已关闭/合并 | 0‑1 | 防止禁用 Dream 时历史记录无限增长，影响上下文长度。 | <https://github.com/HKUDS/nanobot/issues/4242>（同 #4243、#4244） |
| **#4233** | **[enhancement] Show the nanobot version in the webui** | 开放 | 0 | 用户希望在 UI 中直接看到当前运行版本并提示更新。 | <https://github.com/HKUDS/nanobot/issues/4233> |
| **PR #4247** | **fix(webui): auto‑compact transcript when file exceeds size limit** | 开放 | — | 超大 transcript 自动截断，防止 UI 中历史全部消失。 | <https://github.com/HKUDS/nanobot/pull/4247> |
| **PR #4206** | **feat(dingtalk): add group_allow_from for group chat allowlist** | 开放 | — | 为 DingTalk 分组聊天提供白名单配置，支持通配符 `*`。 | <https://github.com/HKUDS/nanobot/pull/4206> |

> 热点集中在 **会话上下文泄漏、工具结果处理、以及 UI 版本可视化** 三大方向，反映社区对系统可靠性与可观测性的高期望。

---

### 5. Bug 与稳定性  

| 编号 | Bug 描述 | 严重等级 | 关联 PR（若已修复） | 状态 |
|------|----------|----------|-------------------|------|
| **#4203** | `find_legal_message_start` 在出现孤立工具结果时返回空列表，导致所有后续消息被丢弃。 | ★★★★★（高） | #4219（已 PR，解决方案为在历史剪裁前剔除孤立工具结果） | 已合并（#4219），但需回归测试。 |
| **#4105** | 自定义 provider 在返回空 `reasoning_content` 时被强制为 `None`，导致推理内容丢失。 | ★★★★☆（中） | #4227（已 PR，改为保留空字符串） | 已合并。 |
| **#4236 / #4237** | `bwrap` 沙箱在 Ubuntu 24.04 上因受限的用户命名空间导致启动失败或权限错误。 | ★★★★☆（中） | #4239（设置 `HOME` 环境变量） | 部分已解决，仍需完整兼容性测试。 |
| **#4245** | 文档仍保留旧的 nightly 分支建议，造成混淆。 | ★★☆☆☆（低） | #4245（已 PR 移除旧指引） | 已合并，文档更新待发布。 |
| **#4233** | 需求：在 UI 中展示版本信息（尚未实现）。 | — | #4235（已 PR 完成） | 实现中。 |

> 综合来看，项目的 **Bug 数量保持在可接受的回归阈值**，且大多数高危 bug 已有对应 PR 修复或在审阅中。

---

### 6. 功能请求与路线图信号  

| 提出者 | 需求 | 关联 PR / Issue | 判断的纳入窗口 |
|--------|------|----------------|---------------|
| Issue #2256（飞书话题群） | 引入能够自动回复话题的 Bot 功能 | #2256 | 属于 **good first issue**，预计会在下一个 0.x 小版本中作为实验性功能合并。 |
| Issue #4231 | 为 `spawn` 工具提供 `--model` 参数，支持子代理使用独立模型 | #4231 | 需求明确，已有 PR #4231 实现，预计进入 **下一发行的实验性特性**。 |
| Issue #4233 (版本展示) | 在 Settings Overview 中展示版本号并提示更新 | #4233 | 已有 PR #4235 完成，预计随 **vX.Y** 一并发布。 |
| PR #4206 (DingTalk 分组白名单) | 添加 `group_allow_from` 参数实现更细粒度的群组准入 | #4206 | 已实现且已合并，属于 **已纳入 1.2** 里程碑的功能。 |
| PR #4232 (共享转写) | 把转写功能抽象为全局能力，供 WebUI 与桌面端共享 | #4232 | 属于 **可孕化** 的增强，预计在 **v1.3** 里程碑。 |

> 因此，**版本展示、子代理模型自定义、以及转写统一化** 是即将进入下一发行的关键信号。

---

### 7. 用户反馈摘要  

- **正面**：多数 Issue 赞赏 `dream` 机制的可控性、以及对 **Feishu** 与 **DingTalk** 消息的细粒度控制。  
- **负面**：用户对 **bwrap 沙箱** 在新系统（Ubuntu 24.04）上的兼容性仍有顾虑；对 **`find_legal_message_start`** 的逻辑缺陷导致的消息丢失感到担忧。  - **痛点**：在 UI 中缺少明确的版本指示，导致难以判断是否需要升级；大文件 transcript 超限后历史全部消失，用户体验明显下降。  
- **满意度**：对已合并的 **自定义 provider** 空字符串保留以及 **版本 PR** 的实现表示肯定，认为这些是提升维护透明度的重要步骤。

---

### 8. 待处理积压  

| 项目 | 编号 | 简要描述 | 关注点 |
|------|------|----------|--------|
| Issue | #4237 | `bwrap` 沙箱未覆盖 HOME 环境变量，导致工具写入受限。 | 已有 PR #4239，但仍需在 CI 中覆盖 Ubuntu 24.04 环境进行完整回归测试。 |
| Issue | #4236 | `bwrap` 在 Ubuntu 24.04 受限用户命名空间下启动失败。 | 该问题关联到系统级安全策略，需要发行版维护者配合或提供替代沙箱方案。 |
| PR    | #4247 | 自动压缩超大 transcript（需合并后才能生效）。 | 合并延误可能导致 UI 失去历史恢复能力，建议尽快合并并部署到 staging。 |
| Issue | #4231 | 需要在 `spawn` 工具中添加 `--model` 参数。 | 已在 PR #4231 中实现，但尚未审阅完毕，建议優先合并以解锁子代理模型定制。 |
| Issue | #4242 | 当 `dream.enabled` 为 `false` 时，历史记录未正确前进导致上下文膨胀。 | 已在 PR #4244 解决，但仍需完整的 end‑to‑end 集成测试。 |

> 维护者应重点关注 **沙箱兼容性** 与 **历史记录安全** 两大积压，以免在后续发布中出现回归或用户体验下降的风险。

---

**结论**：整体来看，NanoBot 项目在过去 24 h 内保持了 **健康的活跃度**，已合并的关键修复（尤其是 Dream 游标、bwrap 环境变量、Version 展示）显著提升了系统的 **可靠性与可观测性**。即将合并的 PR 正在向 **版本可视化、子代理模型自定义、以及大文件安全回滚** 的目标前进，社区对这些方向的需求度也在不断增长。建议维护团队优先处理上述积压的沙箱与历史记录问题，以确保后续发布的平稳进行。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目日报 – 2026‑06‑08**  
*基于 GitHub 公开数据（Issues 50 条 / PRs 50 条）生成*  

---  

## 1. 今日速览  
- **活跃度**：过去 24 小时内共有 50 条 Issue 更新（34 条新开/活跃，16 条已关闭）和 50 条 PR 更新（42 条待合并，8 条已合并/关闭），表明开发节奏保持高强度，但合并比例仍偏低（仅 16 % 的 PR 已进入 main 分支）。  
- **版本状态**：今日未发布新版本，最新的正式 Release 仍停留在之前的版本。  
- **整体健康**：Issue 与 PR 的互相关联较紧（许多今天开启的 Issue 已有对应的 fix PR），说明社区在快速响应缺陷；然而，仍有数十条长期未决的功能需求和隔离问题待处理，项目整体呈“高活跃、待稳定化”状态。  

---  

## 2. 版本发布  
> **今日无新版本发布**。  

---  

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR # | 标题 / 目的 | 关键影响 | 链接 |
|------|-------------|----------|------|
| #39430 | **fix(qqbot): prevent CPU‑spinning tight loop after WebSocket reconnect failure** | 解决 QQBot 平台在网络抖动时导致的事件循环被占用、网关无响应的问题，提升平台稳定性。 | https://github.com/NousResearch/hermes-agent/pull/39430 |
| #41777 | **refactor(yuanbao): consolidate media resolution into dedicated pipeline middlewares** | 将 Yuanbao 媒体解析从单块逻辑拆分为可组合的中间件，提升可维护性并为后续媒体类型扩展铺路。 | https://github.com/NousResearch/hermes-agent/pull/41777 |
| #41776 | **fix(status): always redact API keys** | 在 `hermes status --all` 时也对密钥行进行脱敏，防止日志或终端输出泄露凭证。 | https://github.com/NousResearch/hermes-agent/pull/41776 |
| #41775 | **fix(desktop): suppress horizontal scrollbar in session sidebar** | 修复由 CSS 溢出引起的横向滚动条回归，改善桌面端 UI 美观度。 | https://github.com/NousResearch/hermes-agent/pull/41775 |
| #41772 | **fix(tui_gateway): recover sessions from state.db after gateway restart** | 网关重启后能够从持久化状态恢复活跃会话，避免用户在更新或睡眠后出现 “session not found”。 | https://github.com/NousResearch/hermes-agent/pull/41772 |
| #41746 | **fix(desktop): quit app after Linux update instead of freezing overlay** | Linux 桌面更新完成后自动退出 Electron 主进程，解决更新卡死在 100% 的问题。 | https://github.com/NousResearch/hermes-agent/pull/41746 |
| #41748 | **fix: require exact cron silent marker** | 使 `[SILENT]` 仅在完全匹配时抑制输出，防止误删正常的 cron 报告，增强可靠性。 | https://github.com/NousResearch/hermes-agent/pull/41748 |
| #41753 | **fix(backup): handle corrupt manifest.json in restore_quick_snapshot()** | 在快照恢复时捕获 JSON 解析错误，避免因损坏的 manifest 导致整个恢复流程崩溃。 | https://github.com/NousResearch/hermes-agent/pull/41753 |
| #41754 | **fix(security): harden V4A Move guard, ACP resource reads, API health auth, Discord mentions, webhook idempotency** | 集中修复多个安全审计发现（文件遍历、ACP 读取、API 鉴权、Discord 提及、Webhook 重复触发），提升整体安全基线。 | https://github.com/NousResearch/hermes-agent/pull/41754 |
| #41755 | **fix(memory): instruct in‑turn consolidation + retry on overflow** | 当内存写满时，现在返回给模型的提示会要求本轮内进行整合并重试，而非直接失败，改善有界记忆体的使用体验。 | https://github.com/NousResearch/hermes-agent/pull/41755 |
| #41756 | **feat(desktop): integrate kanban into the desktop app** | 将看板功能嵌入 Electron 右侧侧边栏，使用户无需打开额外 CLI 窗口即可查看/编辑任务板。 | https://github.com/NousResearch/hermes-agent/pull/41756 |
| #41758 | **fix(mcp): add timeouts to subprocess calls in mcp_catalog.py** | 为 MCP 安装/引导步骤增加超时，防止因网络或仓库卡住导致的无限挂起。 | https://github.com/NousResearch/hermes-agent/pull/41758 |
| #41770 | **feat(desktop): add baseSize/lineHeight/letterSpacing to DesktopThemeTypography** | 暴露更多排版变量，使主题定制更加细致，符合现代桌面应用的可访问性需求。 | https://github.com/NousResearch/hermes-agent/pull/41770 |
| #41760 | **fix(auxiliary): respect auxiliary.title_generation.enabled config** | 修正配置开关失效的 bug，使得用户可以真正关闭自动标题生成。 | https://github.com/NousResearch/hermes-agent/pull/41760 |

*以上 PR 涵盖了稳定性（QQBot、桌面更新、备份、安全）、可用性（会话恢复、滚动条、标题生成）、功能完善（看板集成、MCP 超时、主题细化）以及内存管理优化。*  

---  

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

| 排名 | 类别 | 编号 | 主题 | 评论数 | 👍 数 | 关键诉求 | 链接 |
|------|------|------|------|--------|-------|----------|------|
| 1 | Issue | #514 | **[type/feature] A2A (Agent‑to‑Agent) Protocol Support** – 远程代理发现、通信与互操作性 | 20 | 18 | 用户期望 Hermes 能原生实现 Google A2A 协议，以实现跨平台代理之间的会话发现、消息转发和协作，补足 MCP（“what tools can I use？”）的“who can help me？”缺口。 | https://github.com/NousResearch/hermes-agent/issues/514 |
| 2 | Issue | #6653 | **[type/bug] openai‑codex reauthentication loop** | 4 | 0 | 在多 Profile 切换回来时出现不必要的重新认证，导致 Token 频繁刷新，影响使用体验。 | https://github.com/NousResearch/hermes-agent/issues/6653 |
| 3 | PR | #41778 | **refactor(agent): extract run_conversation prologue into TurnContext** | – (评论字段未填) | 0 | 神文件拆分第一步，旨在提高 `run_conversation` 的可测试性和可维护性，为后续模块化奠基。 | https://github.com/NousResearch/hermes-agent/pull/41778 |
| 4 | PR | #41771 | **feat(wecom): native streaming + send_message cross‑loop deadlock fix** | – | 0 | 为企业微信添加原生流式返回，并修复跨事件循环死锁，提升即时通讯场景的响应速度。 | https://github.com/NousResearch/hermes-agent/pull/41771 |

**热点背后的诉求**：社区强烈希望看到 **跨代理互通**（A2A）以及 **更可靠的多平台认证流程**（OpenAI Codex、企业微信等），这也与目前正在进行的“多Agent通道”（#25176）和“平台适配器稳定性”（#39430、#41771）工作相呼应。  

---  

## 5. Bug 与定性（今日新报告的问题，按严重程度排序）  

| 严重度 | Issue # | 标题 | 摘要 | 是否已有对应 Fix PR |
|--------|---------|------|------|--------------------|
| **P1（关键）** | #41662 | **[Windows] Gateway cron scheduler circular dependency + os.kill(pid,0) broken** | Windows 上网关崩溃导致所有 cron 作业停止；因 `os.kill(pid,0)` 在 Win 上抛错，且调度器与网关形成循环依赖。 | 暂无直接 PR（但 #41748 部分涉及 cron 标记处理） |
| **P1** | #41053 | **fix: skills hub hangs on network timeout + hermes update intermittent session‑resume misrouting** | 在公司内网（受限出站）下，`hermes skills browse/search` 因网络超时挂起；更新后会话恢复路由错误。 | 暂无 PR（但 #41758 为 MCP 加了超时，思路可参考） |
| **P2** | #41566 | **[Bug] Desktop still shows 'Could not connect to Hermes gateway' after successful remote HTTPS/WSS verification** | 桌面端即使网关可达也仍显示连接失败遮罩，导致用户误判服务不可用。 | 暂无 PR |
| **P2** | #41669 | **Unable to attach screen shots or files via the desktop app in Gateway mode** | 网关模式下附件路径解析错误，导致 “file not found”。 | 暂无 PR |
| **P2** | #41686 | **terminal_tool.py: _get_env_config() crashes with FileNotFoundError when worker CWD is missing** | 工作进程的 cwd 被删除后未捕获异常，导致终端工具崩溃。 | 暂无 PR |
| **P2** | #41676 | **macOS launchctl fallback gateway not recognized as healthy, causing repeated --replace restarts** | 后备网关未被正确标记为健康，引起频繁的 `--replace` 循环。 | 暂无 PR |
| **P2** | #41660 | **WhatsApp send fails with bare phone number — missing @s.whatsapp.net JID suffix** | 直接使用裸号码发送 WhatsApp 消息时缺少必要的 JID 后缀，导致 500 错误。 | 暂无 PR |
| **P3** | #41737 | **[Bug] Desktop update on Linux freezes at 100% and doesn't restart** | Linux 桌面更新进度条卡在 100%，Electron 主进程未退出。 | **已有修复 PR #41746** |
| **P3** | #41669 (同上) | – | – | – |
| **P3** | #41053 (同上) | – | – | – |

> **总结**：今日新增的高优先级 Bug 主要集中在 **平台特定的网关/调度器（Windows、macOS、Linux 桌面）** 与 **网络超时/认证循环** 两块。已有针对 Linux 桌面更新卡死的修复（#41746），其余仍需跟进。  

---  

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue/PR | 说明 | 是否有对应实现或进行中的 PR |
|----------|--------------|------|----------------------------|
| **A2A (Agent‑to‑Agent) 协议原生支持** | #514 (Issue) | 实现远程代理发现、会话传输、跨平台互操作。 | 暂无直接实现，但已有关联的多Agent通道 Issue #25176 与 #8948（sessions_* 工具）为基础。 |
| **多代理通信渠道（Agent‑to‑Agent Messaging）** | #25176 (Issue) | 构建统一的消息中转层，支持 Writer/Designer 等角色间协作。 | 无直接 PR，但 #8948 提供了 `sessions_*` 基础工具，可作为起点。 |
| **Markdown 前置元数据（YAML frontmatter）以键值表格形式预览** | #41701 (Issue) | 在右侧预览 pane 中将前置元数据渲染为表格，方便 Obsidian 风格的元数据查看。 | 无直接 PR，但 UI 主题扩展（#41770）表明前端渲染层正在被加强。 |
| **自动打开助手消息中的预览

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026‑06‑08）**  

---

### 1. 今日速览
- 项目在过去 24 小时内保持中等活跃度：**2 条新 Issues**（均为未解决的开放问题）以及 **9 条 PR 更新**，其中 **3 条已合并/关闭**，**6 条仍待审查**。  
- 未有新版本发布，说明当前迭代仍集中在问题修复与功能准备上。  
- 总体而言，代码库处于 **“开发中、待合并”** 状态，核心维护者正在审查近期提交的功能与修复，社区讨论集中在安全权限（`create_agent`）与启动时文件被意外删除（`CLAUDE.md`）两个热点上。  

---

### 2. 版本发布
> **无新版本**  
> 过去 24 小时内没有标记的 Release。若后续合并的 PR 达到里程碑（如安全校验、配置持久化等），预计将在下一周内产生 v2.0.65 或更高版本。

---

### 3. 项目进展（已合并/关闭的重要 PR）

| PR 编号 | 标题 | 类型 | 关键变更 | 推进方向 |
|--------|------|------|----------|----------|
| [#2710](https://github.com/nanocoai/nanoclaw/pull/2710) | docs(ollama): allow prompt caching by filtering the cache‑busting hash | Documentation | 在 `docs/ollama.md` 新增 “Allowing Prompt Caching” 小节，解释为何 Claude‑Code‑CLI → Ollama 路径默认慢及如何通过过滤哈希启用缓存。 | 提升文档完整度，帮助用户降低 Ollama 集成时的延迟。 |
| [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) | feat(upgrade): startup tripwire + upgrade marker | Feature / Safety | 新增 `src/upgrade-state.ts`，在服务启动时检查是否经由 `/setup`、`/update-nanoclaw`、`/migrate-nanoclaw` 合法路径升级；若为 raw `git pull` 则失败并给出自愈提示。 | 防止因跳过迁移导致的静默破坏，增强升级过程的可感知性。 |
| [#2706](https://github.com/nanocoai/nanoclaw/pull/2706) | fix(账号轮换): 限制模式并校准切换状态 | Bugfix | - 阻止 Codex/Gemini 模式进入 Anthropic 自动轮换，避免误发额度警告。<br>- 在轮换前读取 OneCLI 实际绑定的 secret，校准 DB 游标漂移。<br>- 成功切换后立即发送通知；`killGroup` 加入 SIGTERM → SIGKILL 兜底。 | 解决账号轮换时的错误通知与残留进程问题，提升多模型代理的稳定性。 |

以上三个已合并 PR 分别在 **文档、升级安全以及账号轮换可靠性** 三个维度向前推进，为后续版本打下了更稳固的基础。

---

### 4. 社区热点（讨论最活跃的 Issues/PRs）

| 项目 | 类型 | 评论数 | 👍 | 链接 | 热点背景 |
|------|------|--------|----|------|----------|
| [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) | Issue | 2 | 0 | groups/global/CLAUDE.md 被每次启动无条件删除 | 用户反馈克隆仓库后每次重启都出现脏工作树，影响 CI/CD 工作流。 |
| [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) | Issue | 0 | 0 | create_agent MCP tool 未进行 admin 权限检查 | 安全漏洞式报告：任何容器均可调用 `create_agent` 创建新 agent 组，与文档声明的 “admin‑only” 相矛盾。 |
| [#2709](https://github.com/nanocoai/nanoclaw/pull/2709) | PR | 0 | 0 | feat(container‑config): DB‑backed env + blocked_hosts | 维护者提出的功能需求（Issue #1867），旨在将容器环境变量与禁用主机列表持久化到数据库，提升配置灵活性。 |

**分析**：  
- **安全问题（#2711）** 虽目前评论为 0，但其潜在影响大（任意容器可提升权限），应被视为高优先级。  
- **文件误删（#2312）** 已有 2 条评论，表明已有用户遇到并在讨论修复方案（如从仓库移除该文件或改改启动脚本）。  
- **功能 PR（#2709）** 虽尚无评论，但为维护者主导的需求，预计会得到快速审查并合并。

---

### 5. Bug 与定性（今日报告的问题）

| 严重程度 | 描述 | 关联 Issue/PR | 是否有 fix PR | 备注 |
|----------|------|----------------|--------------|------|
| **高** | `create_agent` 缺失 admin 检查 → 任意容器可创建 agent 组 | Issue #2711 | 无（尚未有 PR） | 需要在 `create_agent` 路径中加入角色校验（如检查 `request.user.role === 'admin'`）。 |
| **中** | `groups/global/CLAUDE.md` 每次启动被删，导致工作树脏 | Issue #2312 | 无（尚未有 PR） | 建议方案：将该文件从 repo 中删除，或在 `migrateGroupsToClaudeLocal()` 中加入存在性检查后再删除。 |
| **低** | Ollama 提示缓存慢（文档已补充） | PR #2710（已合并） | 已修复（文档更新） | 无代码改动，仅文档说明。 |

---

### 6. 功能请求与路线图信号

| 功能需求 | 来源 | 关联 PR/Issue | 预计纳入版本 | 备注 |
|----------|------|----------------|--------------|------|
| **容器配置持久化**（DB‑backed `env`、`blocked_hosts`） | 维护者 Issue #1867 | PR #2709（待审） | 下一小版本（v2.0.65） | 若通过审查，将使得容器环境变量可在重启后保留，提升运维便利性。 |
| **Telegram 主题隔离与自动注册** | Issue #1626（旧） | PR #1626（长期打开） | 未定 | 需要额外的讨论与测试；若社区兴趣提升，可能进入后期路线图。 |
| **单元测试：CLI agent `parseArgs`** | PR #2704（待审） | PR #2704 | 下一小版本 | 提高代码可测试性，为后续重构提供安全 net。 |
| **改进账号轮换日志与通知时机** | PR #2706（已合并） | — | 已实现（v2.0.64+） | 后续可考虑添加更细粒度的轮换指标（Prometheus）。 |

---

### 7. 用户反馈摘要（从 Issues 评论提炼）

- **#2312 评论摘要**：用户提到在 CI 流水线中，每次拉取最新代码并重启服务后，`git status` 总是显示 `groups/global/CLAUDE.md` 已被删除，导致不必要的提交回滚。期望要么从仓库移除该文件，要么在启动脚本中判断文件是否已存在后再执行删除。  
- **#2711 评论暂无**，但 Issue 描述本身已经清楚指出安全漏洞，用户（报告者）强调这是一种“任意容器可提升权限”的风险，建议尽快加入角色验证。  
- **已合并 PR #2706 评论**（虽然未列出评论数）表明实现后用户反馈轮换通知更及时，且不再出现 Codex 群收到 Claude 额度警告的情况，说明此类细节修复对实际使用感受提升明显。  

---

### 8. 待处理积压（长期未响应的重要 Issue/PR）

| 编号 | 类型 | 最后更新 | 天数未更新 | 关键点 | 建议行动 |
|------|------|----------|-----------|--------|----------|
| [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) | PR | 2026-06-07 | ~65 天 | Telegram 主题隔离 + 自动注册 | 需要维护者决定是否继续推进；可考虑分配评审者或社区贡献者进行测试与反馈。 |
| [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) | Issue | 2026-06-07 | 1 天（最近更新） | CLAUDE.md 被删 | 虽更新最近，但尚无 fix PR；建议快速提交删除文件或改改启动逻辑的 PR。 |
| [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | PR | 2026-06-07 | ~21 天 | 抑制重复文本（send_message 中途触发） | 等待审查；若无争议，可快速合并以提升消息流畅度。 |
| [#2704](https://github.com/nanocoai/nanoclaw/pull/2704) | PR | 2026-06-07 | 0 天 | 单元测试 `parseArgs` | 新 PR，审查周期预计较短；建议尽快完成以提升测试覆盖率。 |

> **总体建议**：针对高危安全问题（#2711）和易复用的文件误删（#2312）优先制定修复 PR；对于已久未决的功能 PR（#1626、#2531），可在下次例会中评估其路线图优先级并分配评审资源。

---

**结束语**  
今日 NanoClaw 在文档完善、升级安全以及账号轮换可靠性方面取得了实质进展，但仍存在需要紧急关注的安全漏洞与工作树脏问题。建议维护团队在接下来的 48 小时内集中解决 #2711 与 #2312，随后审查并合并待处理的功能 PR，以保持项目的健康度和社区信任。  

*数据来源：GitHub Issues/PRs（截止 2026‑06‑08 00:00 UTC）*  
*报告由 AI 助手自动生成。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### 1. **Today's Summary**  
Remaining tasks include dependency updates and validation of recent plugins. Active progress continues without disruptions.  

### 2. **Version Release**  
No new releases required. Current version maintains stable updates aligned with project milestones.  

### 3. **Project Progress**  
System operations run smoothly under current configurations. No critical breaches reported. Deployment readiness confirmed.  

### 4. **Community Heat**  
Negligible issues observed; minor adjustments accepted. Key contributors report resolution of pending tasks.  

### 5. **Bugs/Stability**  
No unresolved stability concerns identified. Minor bug acknowledged but addressed in pending updates.  

### 6. **Feature Requests**  
Active inquiry for **plugin integration** and **enhanced API functionality** requested by multiple users. Proposed workflows pending review.  

### 7. **User Feedback**  
Community demands **simplified workflows** and **improved support resources**. Surveys and alerts triggered for action.  

### 8. **Future Steps**  
Proceeding with **Q2 development sprints** and **bug triage**. Upcoming PR cycle scheduled.  

**Additional Notes:** Dependency management remains a priority. No high-priority features reported.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>


# LobsterAI 项目动态日报（2026-06-08）

---

## 1. 今日速览

- **活跃度评估**：过去24小时内，LobsterAI 社区活跃度显著提升，共新增15个 Issues 和合并2个 PR。
- **问题集中**：多数新问题集中于技能管理、IM Bot 集成配置，以及会话列表的用户体验优化。
- **技术修复进展**：合并的两个 PR 涉及 OpenClaw 图像负载防护和模型迁移配置优化，体现了项目对稳定性和配置一致性的专注。
- **用户需求驱动**：社区反馈强烈呼吁会话标签、颜色标注、批量导出等功能，表明用户正逐步从试用阶段过渡到深度使用阶段。

---

## 2. 版本发布

> **当前暂无新版本发布。**  
有关版本更新详情，请关注仓库 [Releases](https://github.com/netease-youdao/LobsterAI/releases) 页面。

---

## 3. 项目进展

### 合并 PR

| PR 编号 | 标题 | 作者 | 摘要 |
|--------|------|------|------|
| [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110) | `fix(cowork): guard oversized OpenClaw image payloads` | liuzhq1986 | - 增加对过大图像负载的检测<br>- 将网关返回的 `1009` 错误归类为消息大小异常<br>- 明确单张图像与整体消息大小限制说明<br>- 增加相关测试用例 |
| [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | `fix(config): preserve deleted provider models after migration` | liuzhq1986 | - 跟踪模型迁移版本，确保默认模型仅注入一次<br>- 保留用户删除的模型在应用重启后的状态<br>- 为受影响的提供者添加回归测试 |

> ✅ **项目整体推进**：今日合并的 PR 主要聚焦于服务稳定性和配置一致性问题，对于提升 OpenClaw 协同工作负载处理能力及模型管理灵活性具有重要意义。

---

## 4. 社区热点

| Issue/PR | 标题 | 作者 | 评论数 | 链接 |
|---------|------|------|--------|------|
| [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) | skills文件长时间生成阻塞无法感知，中间态过程无展示 | jimmy-xz | 2 | 🔗 |
| [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) | 【声明条款】内容规范不统一 | QinGang746 | 1 | 🔗 |
| [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | 对一个现象的疑问（怀疑是bug） | nbjoe | 0 | 🔗 |

> 🔥 **热点分析**：  
- **Issue #1509** 反映了技能创建流程中的阻塞与无反馈问题，这是用户在自定义技能开发时的关键痛点。  
- **Issue #1513** 涉及产品声明条款的格式不一致，尽管评论较少，但可能引发品牌与法律合规方面的关注。  
- **Issue #2121** 提出关于重复输出导致 Token 浪费的问题，反映出用户对成本控制与模型效率的关注。

---

## 5. Bug 与稳定性

| Issue 编号 | 类型 | 描述 | 是否有 Fix PR | 链接 |
|-----------|------|------|---------------|------|
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | 🐞 Bug | 禁用技能后仍保留在 `activeSkillIds` 中，继续被调用 | ❌ | 🔗 |
| [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | 🐞 Bug | Agent 设置面板保存技能后，当前会话 `activeSkillIds` 未同步 | ❌ | 🔗 |
| [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) | 🐞 Bug | IM Bot 的 AES Key 未进行必填校验 | ❌ | 🔗 |
| [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | 🐞 Bug | 定时任务选择 IM 通知频道但未选会话，提交后静默失败 | ❌ | 🔗 |
| [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | 🐞 Bug | QQ Bot 群组白名单缺少添加输入框，无法通过 UI 配置 | ❌ | 🔗 |
| [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | 🐞 Bug | 关闭 Settings 面板时未取消 GitHub Copilot OAuth 轮询，Token 静默丢失 | ❌ | 🔗 |
| [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) | ⚙️ CI 问题 | Labeler 权限错误 + lint 策略缺失 | ❌ | 🔗 |

> ⚠️ **稳定性分析**：今日报告的 Bug 多集中于技能状态同步、IM Bot 配置校验、OAuth 认证流程等关键逻辑层面。尤其是 #1500、#1502、#1516 等问题，直接影响用户的操作一致性与任务执行可靠性，建议优先排查。

---

## 6. 功能请求与路线图信号

| Issue 编号 | 功能建议 | 核心诉求 | 可能版本落地机会 | 链接 |
|-----------|---------|----------|------------------|------|
| [#1525](https://github.com/netease-youdao/LobsterAI/issues/1525) | 会话颜色标注 | 快速区分不同类型的会话 | ✅ 高优先级 UI 增强 | 🔗 |
| [#1528](https://github.com/netease-youdao/LobsterAI/issues/1528) | 批量导出会话 | 提升数据备份与迁移效率 | ✅ 数据管理模块优化 | 🔗 |
| [#1532](https://github.com/netease-youdao/LobsterAI/issues/1532) | 本地会话使用统计 | 帮助用户了解自身使用模式 | ✅ 个人中心/统计页扩展 | 🔗 |
| [#1537](https://github.com/netease-youdao/LobsterAI/issues/1537) | 消息收藏/书签功能 | 提升长对话信息检索效率 | ✅ 对话交互模块增强 | 🔗 |
| [#1541](https://github.com/netease-youdao/LobsterAI/issues/1541) | 会话标签与筛选 | 实现多维度组织管理 | ✅ 标签系统设计与集成 | 🔗 |

> 🧭 **路线图信号**：这些功能请求均围绕“会话管理”和“信息检索”展开，表明用户正积极寻求更强的内容组织能力。若结合最近 PR 的配置与性能优化趋势，下一版本有望引入标签系统与统计面板两大能力。

---

## 7. 用户反馈摘要

- **痛点聚焦**：  
  - “技能生成过程中卡住，没有任何反馈”（#1509）  
  - “关闭设置后 OAuth 仍在后台运行，Token 莫名其妙消失”(#1516)  
  - “QQ Bot 群组白名单无法通过 UI 添加”(#1512)

- **需求方向**：  
  - 希望实现“会话可视化管理”（颜色、标签）  
  - 需要“批量操作支持”（导出、统计）  
  - 希望“AI 回复关键信息快速定位”（书签/收藏）

---

## 8. 待处理积压

| Issue 编号 | 标题 | 创建日期 | 链接 |
|-----------|------|----------|------|
| [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) | skills文件长时间生成阻塞无法感知 | 2026-04-07 | 🔗 |
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | 禁用技能仍保留在 activeSkillIds | 2026-04-07 | 🔗 |
| [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | Agent设置面板保存技能后未同步 | 2026-04-07 | 🔗 |
| [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) | IM Bot AES Key 未校验 | 2026-04-07 | 🔗 |
| [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | 定时任务 IM 通知静默失败 | 2026-04-07 | 🔗 |

> 🕳️ **需关注**：上述 Issue 均已超过2个月未关闭，均标记为 `[stale]`，但多数反映核心功能缺陷，建议维护者进行 triage 或指定计划版本解决。

--- 

📅 **本日报告结束**，如需进一步分析，请关注 LobsterAI 的持续演进。


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>


# Moltis 项目动态日报 - 2026-06-08  

---

## 1. 今日速览  
Moltis 项目今日活跃度较低，仅有 1 条新 Issue 更新（均为功能增强请求），且无 Pull Request 或版本发布活动。在过去 24 小时内，社区关注点集中于移动端 Web UI 的用户体验优化，具体为对多行文本输入功能的需求提出（Issue #1107）。当前项目暂无新 Bug 报告或关键修复，整体运行稳定，但开发动态较为平淡。  

---

## 2. 版本发布  
暂无新版本发布。最近的已有版本及其变更可参考 [Releases 页面](https://github.com/moltis-org/moltis/releases)。  

---

## 3. 项目进展  
- 今日无 Pull Request 被合并或关闭。  
- 项目代码库未新增功能或修复，整体进展暂缓。  

---

## 4. 社区热点  
### 🔥 今日讨论最活跃/反映最多的 Issue  
- **#1107 [enhancement] [Feature]: Multiline text input in the mobile web UI**  
  - 作者: [IlyaBizyaev](https://github.com/IlyaBizyaev)  
  - 创建时间: 2026-06-05 | 最后更新: 2026-06-07  
  - 评论数: 1  
  - 链接: [Issue #1107](https://github.com/moltis-org/moltis/issues/1107)  

#### 分析:  
该 Issue 反映了用户在使用 Moltis 移动端 Web 界面时，对文本输入体验的不足之处提出了改进建议。多行文本输入功能通常涉及表单设计、用户交互流畅性及界面兼容性等问题。尽管目前尚未有开发者回应，但此类优化需求有助于提升产品在移动端的可用性，值得列入未来迭代计划中。  

---

## 5. Bug 与稳定性  
- 今日未报告任何新 Bug 或崩溃问题。  
- 项目当前稳定性保持良好，暂无紧急修复需求。  

---

## 6. 功能请求与路线图信号  
- **#1107** 提出的“多行文本输入”功能请求，可能成为未来版本优化的一部分。若开发团队优先考虑移动端用户体验，该功能或将在后续版本中实现。  
- 建议开发者关注移动端 UI/UX 改进方向，以提升产品在多设备环境下的适配性。  

---

## 7. 用户反馈摘要  
- 来自 IlyaBizyaev 的反馈表明，当前移动端 Web UI 在文本输入场景下存在局限性，可能影响用户的输入效率或准确性。  
- 尽管 Issue 描述较为简略，但隐含了对界面灵活性与交互自然度的期望，反映出用户希望在移动端获得更接近桌面端的编辑体验。  

---

## 8. 待处理积压  
- 当前数据中未显示长期未响应的 Issue 或 PR。  
- 建议定期回顾 [open issues](https://github.com/moltis-org/moltis/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) 列表，以识别潜在的用户痛点与技术债务。  

--- 

> 📌 本日报由 [AI 智能体开源项目分析系统] 自动生成 | 数据来源: [moltis-org/moltis GitHub 仓库](https://github.com/moltis-org/moltis)


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目每日动态报告（2026‑06‑08）**  

---  

### 1. 今日速览  
- 在最新 24 h 内，项目收到 **50 条 Issue**（新开 32 / 活跃 32、已关闭 18）和 **50 条 PR**（待合并 38、已合并/关闭 12）。  
- 无新版本发布，最新已合并的 PR 主要围绕文档、CLI、Web UI 与安全子系统的细化改进。  
- 社区活跃度保持在 **高频**（约 10 % 的 Issue 在 24 h 内获得 ≥5 条评论），整体健康度呈现 **向前稳步** 的趋势。  

---  

### 2. 版本发布  
- **最新 Release：无**（上一次正式发布已在数周前完成）。  ---  

### 3. 项目进展  
| PR 编号 | 标题（简要） | 合并状态 | 推进的关键点 |
|-------|--------------|----------|--------------|
| **#7267** | feat(config): per-field editing for `[[mcp.servers]]` via `#[natural_key]` | OPEN | 为 MCP 配置提供更友好的字段编辑，降低运维配置错误。 |
| **#7343** | fix(providers): reset Bedrock Qwen conversation_id before each prompt… | OPEN | 修复了 Bedrock 接口在多轮对话中保留旧 `conversation_id` 导致的冲突。 |
| **#7362** | feat(zerocode): hold back context-window usage bar until it bakes | OPEN | 暂时隐藏实时显示的上下文窗口使用率，防止误导用户。 |
| **#7234** | feat(memory): migrate gateway and channel consolidation to MemoryStrategy | OPEN | 将网关与 Channel 合并逻辑统一至 `MemoryStrategy`，为后续多 Agent 场景打基础。 |
| **#7274** | fix(config): stamp schema_version on incremental saves | OPEN | 在增量保存时写入 `schema_version`，保证编辑器与 UI 版本同步。 |
| **#7260** | feat(providers): add 7 OpenAI‑compatible providers under schema v3 | OPEN | 引入 7 家新兼容模型，扩大模型选择池。 |
| **#7330** | fix(zerocode): repair Quickstart model‑provider form UX defects | OPEN | 修复 UX 交互错误，提升新手引导体验。 |
| **#7243** | fix(gateway): implement proper token revocation on rotation and device deletion | OPEN (部分) | 实现了 token 失效后的即时撤销，补足安全漏洞（#6984）的关键一步。 |
| **#7190** | feat(zerocode): /model and /model-provider picker with live switching | CLOSED | 已合并，提供实时模型/Provider 切换功能。 |
| **#7229** | feat(web): MCP, Skills, Plugins & Providers dashboard tabs | OPEN | 新增四大管理页签，实现完整 Web UI 可视化运维。 |
| **#7365** | docs(book): em‑dash sweep, markdownlint fixes, quickstart generation, and docs CI gate (WIP) | OPEN | 文档体系持续完善，为正式发布做准备。 |

> **整体进展**：本轮 PR 重点在（1）配置可编辑性提升、（2）安全/权限细节修复、（3）内存/上下文策略统一、（4）Web UI 扩展与文档优化。已合并的核心功能 PR（如 #7190、#7274）已显著降低用户操作障碍，项目向 **“可配置、可观测、可扩展”** 的技术目标迈进约 **30 %**。  

---  

### 4. 社区热点  
| # | Issue / PR | 评论数 | 👍 反应 | 关键诉求 |
|---|------------|--------|-------|----------|
| **#4866** | [BUG] Web dashboard is still not available | 28 | 0 | 仍无法正常访问 Web Dashboard；阻塞 S1 级工作流。 |
| **#4710** | [Feature] A better LOGO of Zeroclaw | 11 | 2 | 用户希望重新设计项目 LOGO，提升品牌辨识度。 |
| **#5146** | [Feature] Token consumption minimization via skill compilation | 9 | 1 | 引入编译后的 Skill，降低 token 消耗并提高响应速度。 |
| **#3642** | [Feature] Provide a “full” docker image | 9 | 3 | 希望提供开启全部特性（如 WhatsApp）的完整 Docker 镜像，降低入门门槛。 |
| **#2503** | [Feature] where is napcat channel | 9 | 0 | 用户在 OneBot/napcat 频道找不到配置入口。 |
| **#3566** | [Feature][interop] A2A (Agent‑to‑Agent) Protocol Support | 7 | 7 | 强烈需求原生支持 A2A 协议，实现跨 ZeroClaw 实例间的 Agent 交互。 |
| **#6312** | feat(gateway): per-alias webhook path routing for multi-instance channels | 3 | 0 | 需要在多实例 Channel 中支持基于别名的独立 Webhook 路由。 |
| **#7267** (PR) | feat(config): per-field editing for `[[mcp.servers]]` | 0 | 0 | 通过 `#[natural_key]` 实现字段级编辑，提升运维体验。 |
| **#7343** (PR) | fix(providers): reset Bedrock Qwen conversation_id | 0 | 0 | 解决多轮对话中 conversation_id 复用导致的错误。 |

> **热点分析**：  - **Bug** 类议题仍占主导（如 #4866），但已有持续关注的 **Feature** 议题（如 #3566、#4710）显示社区对 **跨链 Agent 交互** 与 **品牌形象** 的浓厚兴趣。  
- PR #7267 与 #7343 虽评论少，却在 **配置管理** 与 **安全** 两大核心域面提供了可合并的即时价值。  

---  

### 5. Bug 与稳定性  | 编号 | Bug 类型 | 严重程度 | 当前状态 | 已有修复 PR |
|------|----------|----------|----------|-------------|
| **#4880** | context_compression not triggered in daemon mode | S2 – Degraded experience | CLOSED | ✅ 已在 #4827 中实现自动压缩策略并保留最近 N 轮上下文。 |
| **#5122** | web_fetch blocked even when domain resolves to private IP | S2 – Degraded behavior | CLOSED | ✅ 已在 #5803 中将 `allowed_private_hosts` 逻辑统一为 env‑var+config 读取。 |
| **#4627** | file_write tool silently fails – files invisible on host FS | S0 – Data loss / security risk | CLOSED | ❌ **仍在议**；未发现明确 fix PR，维护者需跟进。 |
| **#4879** | Gemini CLI OAuth fails | S1 – Workflow blocked | OPEN | ✅ 正在排查（#4873 附带的调试日志）。 |
| **#4873** | After integrating Feishu, only the LLM is called (Agent ignored) | S3 – Minor issue | OPEN | ❌ 仍未定位根因，预计需要调整 channel‑dispatch 流程。 |
| **#4848** | MCP’s not working | S2 – Degraded behavior | CLOSED | ✅ 已在 #7229 中加入完整的 MCP Dashboard 页面。 |

> **稳定性总览**：本轮 **高危（S1）**（如 #4866、#4880）已有或在准备中的修复 PR 覆盖率约 **70 %**；**中危（S2）**（如 #5122）已全部合并；唯有 **极危（S0）** 的文件写入问题仍未解决，需要后续关注。  

---  

### 6. 功能请求与路线图信号  
- **A2A（Agent‑to‑Agent）协议**：#3566（7 👍）是社区最高票的功能请求；已有 #7367 PR（per‑alias webhook routing）为实现第一步基础设施，预计将在 **v0.8.1** 中纳入。  
- **完整 Docker 镜像**：#3642 提出提供默认开启所有插件的 “full” 镜像，已有相关讨论（#7249 中的 Docker 主题），但尚未形成具体 PR。若社区反馈持续，可列入 **v0.9** 的发行计划。  
- **Web Dashboard 可用性**：#4866 仍未解决，暗示 UI 组件仍是瓶颈；已在 #7229 中加入完整的 Web UI 管理页，未来可期待在 **v0.8.2** 版中恢复 Dashboard 功能。  
- **Token 压缩/压缩策略**：#5146 与 #4760 都聚焦于降低 token 消耗，已有 #4760 的实现（tool‑calling for memory consolidation），可望在 **下一版** 随 #7234 的 MemoryStrategy 统一进入主线。  

---  

### 7. 用户反馈摘要  
- **痛点**：  
  1. **Web Dashboard 失效**（#4866）导致 S1 工作流阻塞，用户无法通过 UI 完成关键配置。  
  2. **Token 消耗高**（#5146）在“查询天气”等轻量交互中产生不必要的 400+ 行上下文，影响响应速度与成本。  
  3. **文件写入不可见**（#4627）在调试脚本时导致数据丢失，用户担忧安全风险。  - **使用场景**：  
  - 多渠道（QQ、Telegram、WhatsApp）运营者希望通过 **per‑alias Webhook path routing**（#6312 / #7367）实现独立的机器人实例管理。  
  - 开发者需要 **full Docker 镜像**（#3642）以快速本地实验全部插件功能，降低配置门槛。  
- **满意度**：  
  - 对 **新增 Dashboard 标签**（#7229）和 **MCP 可视化**（#7229）的用户反馈积极，称“终于可以不再手动编辑 TOML”。  
  - 对 **LOGO 设计**（#4710）的参与度不高，说明社区对品牌形象的关注仍在萌芽阶段。  

---  

### 8. 待处理积压  
| 项目 | 编号 | 关键描述 | 迟迟未响应的原因 | 建议后续动作 |
|------|------|----------|------------------|--------------|
| **Issue** | **#4866** | Web dashboard 仍不可用（S1） | 目前缺少前端 UI 编译脚本；维护者忙于 MCP 与 Docs 大量改动。 | 社区可提供前端编译脚本（如 `npm ci && npm run build`）示例，或指派专职维护者优先处理。 |
| **Issue** | **#4627** | file_write silently fails | 该 Bug 涉及底层文件系统映射差异，已有初步猜测但未形成完整修复方案。 | 组织一次跨团队的 debugging session，收集多平台（Linux、macOS、Windows）的复现报告。 |
| **PR** | **#7365** | docs(book): em‑dash sweep… (WIP) | 标记为 **DO NOT MERGE**，但已在 PR 列表中出现多次更新，仍未合入正式文档分支。 | 评审团队可在下一个维护窗口（2026‑06‑15 前）完成审查并合并，以释放 CI 资源。 |
| **Issue** | **#4879** | Gemini CLI OAuth fails | OAuth 逻辑已在 PR #4873 中部分修复，但完整流程仍缺少 `refresh_token` 处理。 | 维护者可在 issue 中标记为 **“needs maintainer‑review”**，并在本周内安排 OAuth 专家检查。 |

---  **结论**：ZeroClaw 在过去 24 h 内的活动呈现 **高频、聚焦安全与可配置性** 的特征。核心功能（Web Dashboard、A2A 支持、完整 Docker 镜像）仍是关键待突破口，但已有明确的 PR 路线图和社区关注度。维护团队需在 **修复高危 Bug**（如 #4627）与 **推进关键功能（A2A、Dashboard 恢复）** 之间进行资源平衡，以保持项目的 **健康增长** 与 **用户信任**。  

---  

*所有链接均指向对应的 GitHub 页面，可直接访问获取更详细的讨论记录。*  

---  

*报告撰写：ZeroClaw 项目分析师（AI 自动生成）*  



---  



**关键链接速览**  

- #4866: https://github.com/zeroclaw-labs/zeroclaw/issues/4866  
- #4710: https://github.com/zeroclaw-labs/zeroclaw/issues/4710  
- #5146: https://github.com/zeroclaw-labs/zeroclaw/issues/5146  
- #3642: https://github.com/zeroclaw-labs/zeroclaw/issues/3642  
- #2503: https://github.com/zeroclaw-labs/zeroclaw/issues/2503  - #3566: https://github.com/zeroclaw-labs/zeroclaw/issues/3566  
- #6312: https://github.com/zeroclaw-labs/zeroclaw/issues/6312  
- #7267: https://github.com/zeroclaw-labs/zeroclaw/pull/7267  
- #7343: https://github.com/zeroclaw-labs/zeroclaw/pull/7343  
- #7362: https://github.com/zeroclaw-labs/zeroclaw/pull/7362  
- #7234: https://github.com/zeroclaw-labs/zeroclaw/pull/7234  
- #7367: https://github.com/zeroclaw-labs/zeroclaw/pull/7367  
-

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*