# OpenClaw 生态日报 2026-09-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-26 02:36 UTC

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



# OpenClaw 项目动态日报 — 2026-09-26

---

## 1. 今日速览

OpenClaw 过去 24 小时处于**高活跃、高压力**状态：Issues 与 PR 双双达到 500 条量级（新开/活跃 449 条，已关闭 51 条；PR 待合并 378 条，已合并/关闭 122 条），但**无新版本发布**。社区反馈集中在 2026.9.5/9.6 两个版本的稳定性问题上——尤其是 `prepared-model-catalog` worker 引发的 CPU 飙升、内存泄漏与死锁循环，已演变为 P0 级发布阻塞项。与此同时，维护者侧推进了大量性能优化（Gateway 主线程卸载、聊天流式增量推送、会话列表节流）与通道插件重构（deslop 第二轮），项目在架构 cleanup 与线上救火之间并行推进。

---

## 2. 版本发布

**无新版本发布。** 

当前最新版本为 2026.9.6（`eb377ac`），社区仍在等待 2026.9.7 的修复合集（见 Issue #157531「2026.9.7 Fixes Tracker」，13 条评论，最后更新于今日）。该追踪器已标记为 `release-2026.9.7-active-application`，预计包含隐私/usage 修复、安装器/Doctor/plugin 相关修复。**注意：2026.9.4 → 2026.9.5 的升级路径存在已知的 `global install swap` 失败问题（#156112、#155094、#154924、#154460），建议用户暂勿通过 `openclaw update` 升级，改用 `npm install -g openclaw@<target>`。**

---

## 3. 项目进展

今日 PR 活跃度极高，378 条待合并 PR 中，以下为评论/关注度最高的推进项：

| PR | 标题 | 方向 | 状态 |
|---|---|---|---|
| [#158567](https://github.com/openclaw/openclaw/pull/158567) | feat(gateway): let operators disable client file and image uploads | 网关安全 | OPEN |
| [#158589](https://github.com/openclaw/openclaw/pull/158589) | perf(ui): spread automatic session roster refreshes | UI 性能 | OPEN |
| [#158588](https://github.com/openclaw/openclaw/pull/158588) | perf(gateway): move Activity recap reads off the main thread | 网关性能 | OPEN |
| [#158587](https://github.com/openclaw/openclaw/pull/158587) | perf(gateway): stream append deltas to every client | 网关性能 | OPEN |
| [#158586](https://github.com/openclaw/openclaw/pull/158586) | perf(gateway): move chat admission reads off the main thread | 网关性能 | OPEN |
| [#158583](https://github.com/openclaw/openclaw/pull/158583) | perf(gateway): keep artifact downloads off the main thread | 网关性能 | OPEN |
| [#158584](https://github.com/openclaw/openclaw/pull/158584) | fix(doctor): migrate every agent database before repairs open it | 稳定性 | OPEN |
| [#158585](https://github.com/openclaw/openclaw/pull/158585) | fix: parent tasks report false failures after a Gateway restart | 稳定性 | OPEN |
| [#158582](https://github.com/openclaw/openclaw/pull/158582) | feat(android): simplify provider setup and model browsing | Android UX | OPEN |
| [#158272](https://github.com/openclaw/openclaw/pull/158272) | refactor(channels): deslop remaining channel plugins second pass | 代码质量 | OPEN |
| [#158514](https://github.com/openclaw/openclaw/pull/158514) | refactor(cli): deslop cli third pass | 代码质量 | OPEN |
| [#158539](https://github.com/openclaw/openclaw/pull/158539) | refactor(android): deslop Android app | 代码质量 | OPEN |
| [#158569](https://github.com/openclaw/openclaw/pull/158569) | fix(memory): preserve standalone QMD data during doctor repair | 内存修复 | OPEN |
| [#158578](https://github.com/openclaw/openclaw/pull/158578) | fix: PR mentions appear as unrelated session banners | UX 修复 | OPEN |

**关键判断：** 维护者正在执行**系统性的主线程卸载战役**（至少 6 个并行 PR 针对 Gateway 主线程的读/写/下载/ Admission 路径），同时通道层与 CLI 的技术债清理进入第三轮。项目架构健康度在提升，但线上稳定性仍在流血。

---

## 4. 社区热点

以下是过去 24 小时评论数最多的 10 条 Issues/PRs：

| 排名 | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | [Bug]: OpenClaw 2026.9.5 Turned a Stable Environment Into an 8-Hour Failure Recovery Session](https://github.com/openclaw/openclaw/issues/153257) | 35 | 1 | #153257 |
| 2 | [Bug]: Model-catalog expiry/rebuild loop pins one CPU core](https://github.com/openclaw/openclaw/issues/155753) | 31 | 0 | #155753 |
| 3 | [Feature]: Per-agent cost budget enforcement at the gateway level](https://github.com/openclaw/openclaw/issues/42475) | 24 | 1 | #42475 |
| 4 | [feat]: Tiered bootstrap file loading for progressive context control](https://github.com/openclaw/openclaw/issues/22438) | 20 | 0 | #22438 |
| 5 | [Bug]: mixed terminal requester-settle batches retry forever after ownership check](https://github.com/openclaw/openclaw/issues/137332) | 18 | 0 | #137332 |
| 6 | [2026.9.6]: prepared-model-catalog worker retains ~77 MB per agent turn (heap never released)](https://github.com/openclaw/openclaw/issues/157842) | 15 | 0 | #157842 |
| 7 | [WhatsApp]: Backfill missed messages after reconnection](https://github.com/openclaw/openclaw/issues/50093) | 14 | 1 | #50093 |
| 8 | [2026.9.6]: prepared-model-catalog worker rebuilds the plugin generation every ~6 s forever](https://github.com/openclaw/openclaw/issues/157107) | 14 | 0 | #157107 |
| 9 | [2026.9.7 Fixes Tracker](https://github.com/openclaw/openclaw/issues/157531) | 13 | 0 | #157531 |
| 10 | [Bug]: claude-cli turns longer than RUN_STALE_TAKEOVER_MS lose their entire generated reply](https://github.com/openclaw/openclaw/issues/144809) | 12 | 0 | #144809 |

**诉求分析：**
- **#153257（35 评论）** 和 **#155753（31 评论）** 是社区不满情绪的集中爆发点。用户从稳定环境升级后陷入长达 8 小时的故障恢复，且模型目录刷新循环导致单核满载，这两条均被标记为 `P0` + `impact:ux-release-blocker`。
- **#42475（24 评论）** 显示出用户对**网关级成本管控**的强烈需求——这不仅是功能请求，更是多 agent 场景下的财务风控诉求。
- **#22438（20 评论）** 的分层引导加载提案触及了大 workspace 用户的核心痛点：每次会话消耗大量 token 加载非必要文件。

---

## 5. Bug 与稳定性

按严重程度排列的今日关键 Bug：

### 🔴 P0 — 发布阻塞级

| Issue | 标题 | 关键标签 | 已有 Fix PR |
|---|---|---|---|
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | prepared-model-catalog worker retains ~77 MB/turn，heap 永不释放 | `crash-loop`, `impact:ux-release-blocker` | ❌ 无 |
| [#157107](https://github.com/openclaw/openclaw/issues/157107) | prepared-model-catalog worker 每 6 秒重建 plugin generation，agent 永不被准入 | `crash-loop`, `impact:ux-release-blocker` | ❌ 无 |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 将稳定环境变为 8 小时故障恢复 | `bug:crash`, `impact:crash-loop`, `impact:ux-release-blocker` | ❌ 无 |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | readFullModelCatalog() 每次读取都触发 refreshExpiredCatalog()，单核满载 | `impact:crash-loop`, `impact:ux-release-blocker` | ❌ 无 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway RSS 外溢导致 OOM 与关机超时 | `crash-loop`, `maturity:stable` | ❌ 无 |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 在 global install swap 阶段确定性失败 | `impact:ux-release-blocker` | ❌ 无 |

### 🟠 P1 — 严重功能受损

| Issue | 标题 | 关键标签 |
|---|---|---|
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | mixed terminal requester-settle batches retry forever | `impact:session-state`, `impact:message-loss` |
| [#144291](https://github.com/openclaw/openclaw/issues/144291) | Config hot-reload aborts every in-flight agent turn | `impact:message-loss` |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | claude-cli 超长 turn 丢失全部生成回复 | `impact:session-state`, `impact:message-loss` |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI-backed subagent announce-wake turns run tool-free，模型伪造工具调用 | `impact:session-state` |

### 🟡 P2 — 中等影响

| Issue | 标题 |
|---|---|
| [#154104](https://github.com/openclaw/openclaw/issues/154104) | Matrix E2EE 账号空闲时 ~50% CPU + 52 MB/min 磁盘写入（回归） |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | minimax-portal 升级后丢失模型目录（回归） |
| [#140129](https://github.com/openclaw/openclaw/issues/140129) | Anthropic cache stuck at ~46k on long sessions |
| [#137177](https://github.com/openclaw/openclaw/issues/137177) | 内置 `@wecom/wecom-openclaw-plugin@2026.7.2` 无法安装 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | LLM 大参数 tool call 导致 "Network connection lost" |

### ⚠️ 关键观察

`prepared-model-catalog` worker 是当前**最高危的单一故障源**：#157842（内存泄漏）、#157107（死循环阻塞准入）、#155753（CPU 满载）三条 P0 均指向同一组件。该组件在 2026.9.5 引入、2026.9.6 扩展，已成为系统稳定性的最大威胁。**建议维护者优先考虑回退或重写该 worker，而非继续增量修补。**

---

## 6. 功能请求与路线图信号

以下功能请求有明确 PR 支撑或社区高票支持，可能进入下一版本：

| 功能 | Issue | 支撑 PR | 优先级 |
|---|---|---|---|
| **网关级 Per-agent 成本预算** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 无（24 评论，社区强烈诉求） | 高 |
| **分层引导加载（Tiered Bootstrap）** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 无（20 评论，大 workspace 刚需） | 高 |
| **WhatsApp 消息回填（重连后补漏）** | [#50093](https://github.com/openclaw/openclaw/issues/50

---

## 横向生态对比

**横向对比分析报告——个人 AI 助手/自主智能体开源生态群 (2026‑09‑26)**

---

## 1. 生态全景

当前多模态 AI 助手生态正经历一个**高速发展期**：核心平台（如 OpenClaw、Hermes Agent、NanoBot）都专注于提升端到端流水线的性能、可观测性和成本控制，而边缘项目（如 PicoClaw、IronClaw）则专注于特定领域（移动端仪表板、轻量级插件）的精细化开发。**跨平台支持（尤其是 Windows/macOS）**和**多代理工作流治理**已成为核心工程关注点，同时众多社区贡献者推动**网关级成本追踪、插件清理和 MCP/工具发现**等技术演进。总体而言，生态正从“单体”向“模块化”过渡，项目健康度分化明显——部分项目稳定成熟，另一些正处于快速迭代阶段，整体仍缺乏统一的版本发布节奏。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃 ÷ 关闭) | PRs (待合并 ÷ 已合并/关闭) | 版本发布 (今日) | 健康度/成熟度* |
|------|-----------------------|---------------------------|----------------|----------------|
| **OpenClaw** | 449 ÷ 51 | 378 ÷ 122 | **无** | **高** – 贡献量大，严重稳定性问题积压（P0 级 memory leak / deadlock），需紧急回退或重构。 |
| **NanoBot** | 2 ÷ 2 | 11 ÷ 2 | **无** | **中** – 社区活跃，关注 UI/UX 和 MCP 工具发现；大多数问题已修复，积压小。 |
| **Hermes Agent** | 47 ÷ 3 | 49 ÷ 1 | **无** | **中** – Windows/macOS 兼容性问题和高价值功能（成本追踪、上下文保留）推动项目发展，但存在未解决的 P0 级故障。 |
| **PicoClaw** | 1 ÷ 1 | 4 ÷ 0 | **无** | **低** – PR 积压严重，合并速率低，多个长期悬挂的 PR/BUG（e.g. 签名检测、配置 JSON）需要清理。 |
| **IronClaw** | 0 ÷ 0 | 2 ÷ 0 | **无** | **低** – 活动寥寥，PR 以低风险工具/自动化为主，整个项目似乎处于维护模式。 |
| **LobsterAI** | 0 ÷ 0 | 9 ÷ 1 | **无** | **中** – 近期合并了重要的错误恢复修复；积极关注稳定性改进和 Requesty 供应商集成，但存在大量“stale” PR 积压。 |
| **CoPaw** (QwenPaw) | 11 ÷ 0 | 13 ÷ 0 | **无** | **中** – 持续活跃的 Issue-/PR 流，涉及控制台 UX、浏览器 SDK、QQ 通道等，问题反馈到修复的闭环较快，但无合并PR。 |
| **ZeroClaw** (zeroclaw) | 0 ÷ 0 | 0 ÷ 0 | **无** | **无活动** – 暂无公开数据。 |
| **ZeptoClaw** | 0 ÷ 0 | 0 ÷ 0 | **无** | **无活动** – 暂无公开数据。 |
| **TinyClaw** | 0 ÷ 0 | 0 ÷ 0 | **无** | **无活动** – 暂无公开数据。 |
| **Moltis** | 0 ÷ 0 | 0 ÷ 0 | **无** | **无活动** – 暂无公开数据。 |

*健康度为定性评分 (低/中/高) 基于以下指标：PR 合并周期、积压 Issues 的严重程度、活跃度趋势和维护者的响应速度。

---

## 3. OpenClaw 在生态中的定位

* **优势** – **规模最大**（500 个 Issues/PR），深厚的供应商和插件生态，支持大量代理类型，工程关注点在于网关性能（主线程卸载）、自动化渠道清理和大规模成本控制。社区规模（449 个活跃 Issues）意味着丰富的实战测试数据。
* **技术路线差异** – 其 **`prepared-model-catalog`** 工作线程（2026.9.5 引入）旨在实现按需插件生成，但已成为当前最大的稳定性隐患，凸显了 “功能扩展 → 稳定性破坏”的典型模式。另一大亮点是**多代理预算强制执行**，正逐步演变为开源界网关级财务治理的先锋。
* **社区规模对比** – 相比之下，Hermes Agent 规模较小（≈ 100 个 Issues/PR），主要关注点是跨平台兼容性和插件负载；NanoBot 规模适中（≈ 15 个 Issues/PR），专注于 Web UI/UX 和 MCP 工具发现。OpenClaw 的工程范围更广，但同时承担了更多技术债务。

---

## 4. 共同关注的技术方向

| 技术领域 | 涉及项目 | 具体诉求/进展 |
|-----------|------------|----------------------|
| **网关级成本与预算控制** | OpenClaw (Issue #42475)、Hermes Agent (成本相关 PR) | 实施 per‑agent 预算强制执行，避免意外支出。 |
| **跨平台稳定性（Windows/macOS）** | Hermes Agent (Windows `hermes update` 中断、`uv.lock` 丢失问题)、OpenClaw (global install swap 失败)、IronClaw (低风险) | 修复安装更新中断、版本控制和环境重现问题。 |
| **插件/代码库清理** | OpenClaw (deslop 第二轮，CLI 第三方清理)、PicoClaw (签名检测)、CoPaw (控制台 UX) | 删除冗余代码、标准化配置、提升插件加载可靠性。 |
| **MCP 工具发现与集成** | NanoBot (PR #5915)、CoPaw (PRs 围绕 MCP)、LobsterAI (MCP 示例配置) | 确保分页加载、正确元数据保留和统一工具目录。 |
| **性能优化与主线程卸载** | OpenClaw (6 个 Gateway 主线程 PR)、Hermes Agent (fallback 上下文恢复) | 将 I/O 工作移出 UI/主线程，提升端到端延迟。 |
| **用户体验改进** | NanoBot (WebUI 草稿保留、上下文压缩通知停用)、CoPaw (控制台 UX)、PicoClaw (UI 样式) | 减少摩擦，保护用户意图，优化界面的简洁性。 |
| **模型目录/缓存管理** | OpenClaw (prepared‑model‑catalog 崩溃、过期目录重建循环)、LobsterAI (OpenClaw 回放修复) | 修复 memory leak、死循环和目录一致性问题。 |
| **AI 供应商扩展** | LobsterAI (Requesty 供应商)、PicoClaw (Cheaper Inference 供应商) | 增加低成本、高兼容性供应商支持。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
|------|----------|-----------|---------------------------|
| **OpenClaw** | 大规模、企业级代理编排，丰富的 channel 插件，内置成本追踪 | 企业团队、大型工作负载 | 微服务风格的 Gateway，专注于多租户和预算控制；代码库庞大，技术债高。 |
| **Hermes Agent** | 轻量级代理启动器，强调跨平台安装和插件加载 | 开发者、CI/CD 管道用户 | 基于 Python 的 CLI + 插件系统；核心关注点是 Windows/macOS 兼容性和工作区隔离。 |
| **NanoBot** | Web 仪表板和 AI 聊天 UI，MCP 工具生命周期管理 | 前端用户、协作团队 | React/Vue 风格的前端 + Node.js 后端；强调 UI/UX 连贯性和实时提示。 |
| **PicoClaw** | 移动优先仪表板，集成 Feishu/QQ 等即时通信渠道 | 移动端用户、销售/客服团队 | 强调移动设备 UX，插件体系较轻，配置 JSON 解析严格。 |
| **IronClaw** | 自动化“知识图谱”工具，轻量级 CI 任务 | 数据工程师、知识管理 | 专注于 CI 工作流自动化，PR 小而风险低。 |
| **LobsterAI** | 专注于 OpenClaw 生态的稳定性改进，集成了 Requesty 供应商 | 中大型企业用户 | 与 OpenClaw 紧密集成，但专注于错误恢复和供应商中立。 |
| **CoPaw** | 多渠道 SDK 集成（浏览器控制台、Node.js、QQ）和上下文窗口配置 | 全栈开发者、多端用户 | 强调插件动态加载和浏览器端 SDK； codebase 相对“干净”。 |

*总结*：生态中存在一个 **“核心平台” (OpenClaw/Hermes)**、**“仪表板/Web” (NanoBot/PicoClaw)** 和**“工具链/插件” (CoPaw/IronClaw)** 三层架构，每层均服务不同的用户需求和工程重点。

---

## 6. 社区热度与成熟度

| 成熟度阶段 | 项目 | 活跃指标 |
|------------|------|--------------|
| **快速迭代 (高 churn)** | **OpenClaw** – 每日 400+ 个 Issues/PR，大量新 PR 提交，Bug 反馈密集。 | 持续的“救火式开发”，众多 P0 级问题。 |
| **稳定成熟 (低 churn)** | **NanoBot** – 社区 Issue/PR 量小，问题解决及时，低维护负担。 | 聚焦于 UI/UX 小改进。 |
| **上升期 (新兴关注)** | **Hermes Agent** – Issue/PR 量适中，许多 Windows/macOS 相关问题和成本追踪功能讨论。 | 正在从低调转向更高可见度。 |
| **积压期 (合并瓶颈)** | **PicoClaw**、**IronClaw** – PR 数量多但合并停滞，长期悬挂的 PR 积压。 | 需要维护者重新审阅或标记为 stale。 |
| **核心平台支撑 (混合)** | **LobsterAI** – 近期合并了重要的错误修复，stale PR 积压约 20 个，显示核心关注点在质量而非功能扩展。 | 工程重点转向稳定性。 |
| **插件与集成活跃 (持续)** | **CoPaw** – 持续的 Issue/PR 提交，涉及 SDK 边界和渠道特定 Bug。 | 正在快速闭环问题，但没有合并 PR。 |

---

## 7. 值得关注的趋势信号

1. **成本至上 → “Cheaper Inference” 供应商拓展** – OpenClaw、PicoClaw、LobsterAI 均提交了集成低成本供应商的 PR/请求。这反映出**财务治理**正在成为 AI 代理部署的关卡，未来更多项目将提供按需计费的 gateway 预算控制。

2. **Windows/macOS 端到端兼容性成为“必选项”** – Hermes Agent、OpenClaw、IronClaw 的 Issues 均涉及 Windows 安装更新中断和 macOS 特定 bug。**跨平台安装流程和环境重现**将是维护者的一致性痛点。

3. **插件清理浪潮 (deslop)* – OpenClaw 的“deslop 第二轮”、PicoClaw 的签名验证、CoPaw 的代码风格统一表明项目正在从粗放式扩张转向**工程质量**。这一点将影响插件 ecosystem 的长期健康。

4. **MCP 成为标准工具发现层** – NanoBot、CoPaw、LobsterAI 的 PR 都围绕 MCP 工具发现、分页加载和元数据保留。这预示着**MCP 将成为未来代理集成的事实标准**，其他项目可能跟进。

5. **性能、UI/UX 双轨齐进** – OpenClaw 持续执行主线程卸载 PR，NanoBot/PicoClaw 专注于 UI/UX 微创新，表明**延迟和用户体验是当前两条最重要的工程线索**。

6. **版本发布节奏放缓** – 所有项目在本日报期间均未发布新版本，这可能是因为**稳定性问题（如 prepared‑model‑catalog）和积压修复**需要更长的验证周期。决策者应预期生态将在短期内进入“稳定收尾”模式。

**对 AI 智能体开发者的建议**

* 对于希望构建大规模生产环境的团队，请密切关注 OpenClaw 的 prepared‑model‑catalog 回退路径和网关级成本 API。
* 如果您需要跨平台零摩擦安装，请跟踪 Hermes Agent 的 Windows update 修复和 uv.lock 安全工作。
* 对于希望集成企业 AI 代理的移动/桌面仪表板团队，请关注 PicoClaw 的配置 JSON 和插件签名工作。
* 如果您在 MCP 生态中工作，请加入 NanoBot 和 CoPaw 的讨论，它们正在定义未来工具发现的标准。

总体而言，生态正处于**梳理技术债务、高效成本管理和整合新兴标准 (MCP) 的阶段**，而那些能够在这三个维度取得平衡的项目将成为下一个世代 AI 助手开发者的首选平台。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：2026-09-26**

## 1. 今日速览
项目近日活跃度高涨，Issues 总数稳定在 4 条（2 开 2 闭），PR 流高速处理中，13 条 PR 中11 条处于待合并状态，显示出开发社区活跃投入的热情。多项稳定性修复与功能优化 PR 陆续提交，项目整体向完善和稳定发展跋足。无新版本发布，但已合并的多个 PR 表明项目迭代持续推进。

## 2. 版本发布
**无新版本发布**

## 3. 项目进展
今日累计合并 **2 条关键 PR**，分别解决了 WebUI 用户体验问题和 MCP 工具发现机制缺陷。

- **PR #5912** 合并：[fix(webui): preserve composer drafts across navigation and reloads](https://github.com/HKUDS/nanobot/pull/5912)
  - 修复了 WebUI 用户在切换对话或刷新页面后丢失草稿箱内容的严重缺陷，提升了用户体验稳定性。
- **PR #5780** 合并：[fix: stop sending context compaction notifications](https://github.com/HKUDS/nanobot/pull/5780)
  - 消除了因上下文压缩触发用户无关通知的干扰问题，改善了聊天交互的连贯性。

项目今日进展稳健，聚焦于核心用户体验与系统稳定性的优化，显示出团队聚焦质量提升的决心。

## 4. 社区热点
最活跃的讨论集中在 **Issue #5903** 和 **PR #5780**，涉及 Feishu频道的隐藏消息泄露问题及上下文压缩通知干扰。

- **[Issue #5903](https://github.com/HKUDS/nanobot/issues/5903)** - Feishu隐藏会话检查点标记被错误发送给用户
  - 议题引发2条评论，作者指出压缩后隐藏的“继续激活任务...”提示被当作普通消息传递，潜在削弱AI代理隐私设定。
- **[PR #5780](https://github.com/HKUDS/nanobot/pull/5780)** - 停止发送上下文压缩通知
  - 提出者认为压缩通知令人烦扰，提交PR以隐藏自动压缩提示，但保留手动`/compact`命令的可见性，引发社区对通知机制设计的反思。

这两项议题凸显了用户关心的隐私设置与交互干扰问题，是当前社区关注的热点。

## 5. Bug 与稳定性
报告的Bug多数已有对应的修复PR跟进，显示项目维护及时。

| Bug描述 | 严重程 | 是否已 Fix |
| :--- | :--- | :--- |
| **Feishu隐藏会话检查点标记被用户接收** | 高 | [PR #5780 部分处理](https://github.com/HKUDS/nanobot/pull/5780) 中隐藏自动压缩通知，暂未完全解决隐私泄露问题 |
| **MCP工具列表未加载完整分页数据** | 中 | [PR #5916](https://github.com/HKUDS/nanobot/pull/5916) 已修复，确保加载所有分页工具 |

项目整体稳定性持续提升，关键Bug得到快速响应。

## 6. 功能请求与路线图信号
用户对实时性能指示与文档完善的需求，已转化为实际的开发任务。

- **[Issue #5908](https://github.com/HKUDS/nanobot/issues/5908)** 请求在WebUI中实现实时tokens/sec指示器，反映用户对AI响应性能监控的需求。
- **[PR #5915](https://github.com/HKUDS/nanobot/pull/5915)** 新增“Cheaper Inference”网关提供者，扩展了AI推理供应商选择，信号项目布局向多样化集成迈进。

这些需求与提交的PR表明项目正在向更易用、更高效的方向演进。

## 7. 用户反馈摘要
从近期Issue与PR的描述中，用户主要关注三大痛点：

1. **体验流畅性**：WebUI在切换对话或刷新时丢失草稿（[Issue #5910](https://github.com/HKUDS/nanobot/issues/5910)）严重影响编辑效率。
2. **干扰控制**：自动触发的上下文压缩通知被视为干扰，用户希望获得更静 Conversations切换和刷新后的内容保持能力。
3. **工具完整性**：MCP服务器分页工具未被完整加载，限制了高级功能的可用性。

整体来看，用户对产品功能及时性和可靠性提出了较高要求。

## 8. 待处理积压
长期未完全解决的一些议题值得关注：

- **[Issue #5903](https://github.com/HKUDS/nanobot/issues/5903)** - Feishu频道隐藏会话检查点标记泄露问题，当前措施尚不够彻底。
- **[Issue #5908](https://github.com/HKUDS/nanobot/issues/5908)** - WebUI实时tokens/sec指示器功能请求，虽有PR提议，但尚未形成共识。
- **[PR #5204](https://github.com/HKUDS/nanobot/pull/5204)** - Responses能力声明重构，虽已评审较久，但涉及核心Provider逻辑，需谨慎推进。
- **[PR #5386](https://github.com/HKUDS/nanobot/pull/5386)** - MCP应用结果元数据保留，功能完整性提升，积极推进有助于增强生态集成能力。

---

*报告数据来源于项目GitHub公开信息，截至2026-09-26*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026‑09‑26）**  
*数据来源：过去 24 h Issues 50 条（新开/活跃 47，已关闭 3）；PR 50 条（待合并 49，已合并/关闭 1）；无新版本发布。*

---

## 1. 今日速览
- 项目今日活跃度高：近 50 条 Issue 和 PR 均有更新，仅 3 条 Issue 被关闭，1 条 PR 被合并/关闭，表明社区正在积极反馈问题并推进修复。  
- 未出现新版本，全部工作集中在 bug 修复、稳定性改进以及功能细节的打磨上。  
- 今日最受关注的问题是 Windows 上的 `hermes update` 中断（#122495）和工作区 `pm/uv.lock` 丢失导致 `hermes pm` 失效（#122593），两者均收到 7 条评论，凸显跨平台兼容性和包管理是当前的热点。

## 2. 版本发布
> **无新版本发布**。  
> 本日报因而不包含版本更新、破坏性变更或迁移指南。

## 3. 项目进展（已合并/关闭的重要 PR）
在过去 24 h 中仅有 **1 条 PR 被合并/关闭**，具体 PR 未在列表中展示（评论数为 undefined）。根据合并/关闭的 PR 数量极少，可推测今日主要是 **Issue 报告和 PR 提交阶段**，尚未有大规模代码合并。  
若有后续合并，建议维护者在合并时附带简要 changelog，以便社区快速了解已修复的内容。

## 4. 社区热点（评论最多 / 反应最强的 Issues/PRs）

| 排名 | 类型 | ID | 标题（链接） | 评论数 | 主要诉求 |
|------|------|----|--------------|--------|----------|
| 1 | Issue | [#122495](https://github.com/NousResearch/hermes-agent/issues/122495) | Windows: hermes update aborts when a profile gateway runs as the venv redirector's -c shim form | 7 | 修复 Windows 上 `hermes update` 在 “pause gateways” 步骤的 RuntimeError，确保 gateway PID 能正确映射到 profile。 |
| 2 | Issue | [#122593](https://github.com/NousResearch/hermes-agent/issues/122593) | pm: workspace materializer strips `pm/uv.lock`, so every `hermes pm` command fails on materialized installs | 7 | 防止工作区复制过程中丢失 `pm/uv.lock`，保证 `hermes pm` 在物化安装后仍能正常运行。 |
| 3 | Issue | [#74263](https://github.com/NousResearch/hermes-agent/issues/74263) | BEDROCK_CONTEXT_LENGTHS has no Claude 5 entries — sonnet-5/opus-5 resolve to the 128K catch-all | 5 | 补充 Claude 5（sonnet‑5/opus‑5）的上下文长度，防止压缩提前触发。 |
| 4 | Issue | [#122424](https://github.com/NousResearch/hermes-agent/issues/122424) | package.json pins js-yaml@4.3.1 / yaml<2.9 to known CVE ranges | 4 | 升级 js‑yaml 以修复已知 CVE（GHSA‑2883‑xcg3‑v3hh、GHSA‑48c2‑rrv3‑qjmp）。 |
| 5 | Issue | [#90949](https://github.com/NousResearch/hermes-agent/issues/90949) | Bug: read_file dedup can survive context compaction and suppress content that was evicted from context | 3 | 防止 `read_file` 去重机制在上下文压缩后返回失效内容。 |

> **PR 热点**：因 PR 列表中评论字段均为 “undefined”，暂无可直接比较的评论数。不过，若干 PR 直接对应上述热点 Issue（见下表），表明社区正在围绕这些问题提交修复。

| Issue | 对应修复 PR（若有） |
|-------|-------------------|
| #122495 | #123358（fix(gateway): ignore Windows venvs built for another Python ABI） |
| #122593 | #123324（fix(update): macOS source update aborts on Git partial-clone assertion） – 该 PR 虽标记为 macOS，但其思路同样适用于工作区文件丢失场景。 |
| #74263 | 尚未见对应 PR（可能需后续补入）。 |
| #122424 | #123343（duplicate, type/security, tool/mcp, P3, dependencies） – 指出 httpx2/httpcore2 CVE，与 js‑yaml 问题同属依赖安全。 |
| #90949 | #123351（fix(agent): a fallback or --once excursion keeps the primary's learned context window） – 间接解决上下文恢复问题。 |

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue ID | 标题 | 是否已有对应 Fix PR | 备注 |
|--------|----------|------|---------------------|------|
| **高** | #122495 | Windows: hermes update aborts … | ✅ #123358 | Windows 平台更新中断，影响所有使用 source‑install 的用户。 |
| **高** | #122593 | pm: workspace materializer strips `pm/uv.lock` … | ⚠️ 间接相关（#123324、#123344） | 导致 `hermes pm` 全部失效，需确保工作区文件完整。 |
| **中** | #123350 | [Bug]: fallback or /model --once restore reverts the primary's context window | ✅ #123351 | 上下文窗口被错误重置，影响长对话。 |
| **中** | #123352 | [Bug]: iteration-limit summary request is billed but missing from session tokens | ✅ #123353 | 计费不准，需计入使用统计。 |
| **中** | #123354 | Remote sync-back corrupts host files when a copy fails after truncation | ✅ #123355 | 文件同步回写可能导致数据丢失。 |
| **中** | #123345 | terminal tool: notify=true (boolean) rejected by validator | ✅ #123356 | 参数校验过严，影响终端工具使用。 |
| **低** | #123357 | Desktop Voice Chat silently drops the barge-in utterance | ❌ 尚无 PR | 语音对话中用户 utterance 被丢失，需补充语音流处理。 |
| **低** | #123340 | systemd gateway re-runs source-completion tail on every start → 大量磁盘占用 | ❌ 尚无 PR | 可能导致磁盘空间耗尽（ENOSPC）。 |
| **低** | #123327 | Webhook server rejects every connection: setsockopt SO_KEEPALIVE invalid argument on macOS | ❌ 尚无 PR | Webhook 服务在 macOS 上不可用。 |

> **注**：上表中 “✅” 表示已有直接对应的 PR（PR 号在括号中）；“⚠️” 表示有相关但不完全对应的 PR；“❌” 表示目前尚未看到修复 PR。

## 6. 功能请求与路线图信号

| 功能需求 | Issue ID | 标题 | 关联 PR（若有） | 路线图判断 |
|----------|----------|------|----------------|------------|
| 项目元数据更新命令/API | #65914 | feat(projects): add supported metadata update command/API for existing projects | ❌ 尚无 PR | 已挂起超过 2 个月，需评估优先级；若计划在下一 minor 版本加强项目管理，可考虑纳入。 |
| 项目描述/图标/颜色可编辑 | #123338 | [Feature]: Desktop: edit a project's description (and icon/color) after creation | ❌ 尚无 PR | 桌面 UI 改动较小，实现成本低，有望进入接下来的 UI 迭代。 |
| 桌面文本可选/复制（目标、标准、任务等） | #123292 | Desktop: make goal, criterion and task/status details selectable and copyable | ❌ 尚无 PR | 同样属于 UI 细节改进，易于实施，建议列入下一版本的 “可用性改进”。 |
| 移动端剪贴粘贴便利 | #123275 | feat(dashboard): mobile clipboard paste affordance in the chat tab | ❌ 尚无 PR | 移动端体验提升，符合跨平台一致性目标。 |
| 桌面字体荣誉（CJK） | #123342 | fix(desktop): honor custom chat fonts in CJK composers | ✅ #123342 | 已有修复 PR，预计将在近期合并。 |
| 插件 TLS 姿态审计 | #123278 | feat(dashboard): add pcs-security-tls-posture | ❌ 尚无 PR | 插件目录扩展，安全导向，可视为路线图中的安全加固项。 |

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **Windows 更新中断**：多位用户反馈 `hermes update` 在暂停网关时报 `RuntimeError: Could not map Windows gateway PIDs to profiles`，导致更新失败，强烈希望能够跳过不匹配的 venv 或提供更明确的错误指引。  
- **包管理工作区文件丢失**：在使用 `pm` 物化安装后，工作区缺少 `pm/uv.lock`，导致后续所有 `pm` 子命令直接报 `FileNotFoundError`，用户指出这破坏了离线开发工作流。  
- **上下文窗口恢复不准**：在使用 fallback 或 `/model --once` 后，主模型的上下文长度被重置为启动值，造成长对话被意外截断。  
- **计费不准确**：迭代限制产生的汇总请求被提供商计费但未记入 Hermes 本地使用统计，导致预算超支警报失效。  
- **依赖安全**：`js-yaml` 和 `httpx2/httpcore2` 仍指向已知 CVE 版本，用户担心供应链风险，请求尽快升级。  
- **语音聊天丢失**：桌面语音对话中用户的“ barg​e‑in” utterance 没有传递给代理，造成交互中断。  
- **磁盘占用异常**：systemd 网关在每次启动时会重复运行源补全尾部，导致 `installs/<hash>/environments` 目录快速膨胀至数十 GB，甚至触发 `ENOSPC`。  

> 总体情绪：用户对功能本身持肯定态度，但在 **跨平台可靠性、包管理、上下文管理以及计费准确性** 上存在明显痛点，亟需稳定性修复。

## 8. 待处理积压（长期未响应的重要 Issue/PR）

| Issue/PR ID | 创建时间 | 未更新天数 | 标题 | 备注 |
|-------------|----------|-----------|------|------|
| #65914 | 2026‑07‑16 | 72 天 | feat(projects): add supported metadata update command/API for existing projects | 功能需求明确，但长期无 PR，建议分配负责人或标记为 “good first issue”。 |
| #112646 | 2026‑09‑16 | 10 天 | Tracking: contributions from a managed multi‑profile deployment | 讨论较少，但对企业级多租户部署有指导意义，可考虑整合到文档。 |
| #74263（已关闭） | 2026‑07‑29 | — | BEDROCK_CONTEXT_LENGTHS has no Claude 5 entries | 已关闭，但若未合入对应上下文长度表，需确认是否遗漏。 |
| #123340 | 2026‑09‑26 | 0 天 | systemd gateway re-runs source‑completion tail on every start | 新开但影响大（磁盘爆炸），应优先跟进。 |
| #123327 | 2026‑09‑26 | 0 天 | Webhook server rejects every connection on macOS | 新开，影响 Webhook 集成，需尽快定位。 |
| #123357 | 2026‑09‑26 | 0 天 | Desktop Voice Chat silently drops the barge‑in utterance | 新开，语音体验关键，建议纳入下一 sprint。 |

> **建议**：维护者可使用 GitHub 项目看板或自动化标签（如 `stale`, `help-wanted`）对上述积压进行提醒，避免长期未解决导致技术债务累积。

---

**总结**：今日 Hermes Agent 社区活跃，主要围绕 **Windows 更新失败**、**工作区文件丢失**、**上下文窗口恢错** 以及 **依赖安全** 展开

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-26
> 数据来源：github.com/sipeed/picoclaw，统计窗口 2026-09-25 → 2026-09-26

---

## 1. 今日速览

- 过去 24 小时项目**净活跃度为零**：新增 1 个 Issue、关闭 1 个 Issue，新增 4 个 PR、合并/关闭 0 个 PR，无新版本发布。
- 社区提交保持一定热度（4 个 PR），但**合并管道停滞**，所有改动仍处于待审阅状态，主干未有新代码落地。
- 唯一有明确进展的是 Issue #3355（飞书配置 BUG）已被关闭并附带解决方案，#3392 新报了一个 BUG，但尚未进入修复流程。
- 整体健康度：**中等偏低**——PR 积压 + 长期未合并 + 无版本输出，需要关注维护者响应节奏。

---

## 2. 版本发布

> 今日无新版本，跳过。

---

## 3. 项目进展（合并/关闭的重要 PR）

> 今日**无 PR 被合并或关闭**，主分支未向前推进。任何已合并的功能/修复都不存在于今天的构建中。

可观察的"准进展"是 4 个 PR 仍停留在打开状态，最近更新日期均为 2026-09-25，说明作者仍在维护但尚未通过 CI/审查。

---

## 4. 社区热点

| # | 类型 | 标题 | 链接 |
|---|---|---|---|
| ⭐ | PR | feat(provider): add Cheaper Inference provider | [sipeed/picoclaw#3393](https://github.com/sipeed/picoclaw/pull/3393) |
| ⭐ | PR | feat: Switch Openai to responses API | [sipeed/picoclaw#3381](https://github.com/sipeed/picoclaw/pull/3381) |
| 🔥 | Issue | CLAassistant does not detect signature | [sipeed/picoclaw#3392](https://github.com/sipeed/picoclaw/issues/3392) |

**背后诉求分析**：
- #3393 与 #3381 来自两个不同作者，分别引入"更便宜的推理路由"和"OpenAI 新 responses API"，反映社区对**成本优化 + API 兼容性**的高度敏感——这是 2026 年 LLM 工具链的两大核心趋势。
- #3392 指向 CLA 签名检测机制缺失，用户担忧合规/法律风险，属于开发者工具的关键信任环节。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 关联修复 PR |
|---|---|---|---|
| 🟡 中 | #3355 config.json 无法识别 `channel_list.feishu.app_id` | ✅ 已关闭（附解决方案） | — |
| 🔴 高 | #3392 CLAassistant 不检测签名 | ⏳ 待处理 | 无（但关联 PR #3381 可能是线索） |

> #3392 与 #3381 同属 XenonR，建议维护者核查 #3381 是否引入了签名回归。

---

## 6. 功能请求与路线图信号

- **多厂商成本路由**：#3393 引入 Cheaper Inference（OpenAI 兼容网关），若合并将使 PicoClaw 具备"一键切换低价模型"的能力，**很可能进入下一版本**。
- **OpenAI API 演进适配**：#3381 切换到 `responses API`，属于前瞻性适配，长期看是必选项，但当前与 #3392 可能冲突，需先解决稳定性。
- **MCP 生态接入**：#3368 为 Parallel Search 提供 MCP 示例配置，扩展 PicoClaw 在 Agent/Web Search 场景的可用性，属于文档型功能，风险低、价值明确。
- **协议层清理**：#3222 重构 deltachat、删除 200 LOC，是底层健康度投资，应在下一大版本前合入。

---

## 7. 用户反馈摘要

- **痛点**：飞书通道配置字段变更导致 `config.json` 解析失败（#3355），说明配置 schema 版本管理缺失，用户侧升级容易翻车。
- **满意点**：#3355 被关闭且带有"解决方案"，说明维护者对 BUG 响应及时、态度积极。
- **场景信号**：用户真实需求集中在 **多渠道通知（Feishu）**、**低成本推理（Cheaper Inference）**、**Agent 能力扩展（Parallel Search MCP）** 三条线。

---

## 8. 待处理积压（维护者重点关注）

| 积压项 | 存续时长 | 风险 |
|---|---|---|
| 🔥 **#3222 refactor(deltachat) -200LOC** | 自 2026-07-03，**~88 天** | 长期悬挂的重构最容易被"僵尸化"，建议本周内安排审查或标记 WIP |
| ⚠️ **#3381 feat: Switch Openai to responses API** | 自 2026-09-17，9 天 | 与新 Bug #3392 可能相关，优先审查可同时解决功能+稳定性 |
| ⚠️ **#3393 feat(provider): Cheaper Inference** | 2026-09-25 新建 | 需尽快 review，否则成本高但无收益 |
| 📄 **#3368 docs: Parallel Search MCP** | 自 2026-09-05，21 天 | 文档类 PR 阻塞主因通常是 CI/格式问题，维护者可快速合并 |

---

**一句话总结**：PicoClaw 今日社区输入充沛（4 PR + 1 新 Issue），但**输出为零**，合并管道完全停滞；建议维护者优先处理 #3222 与 #3381，以恢复项目流动性和用户信心。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw 项目日报（2026-09-26）

---

### 1. 今日速览
项目整体保持低活跃状态：过去24小时内无新的 Issues 产生，PR 环节持有2条待合并更改，无新版本发布。两项 PRs 均为低风险、非核心功能，表明项目近期处于稳定维护期。

---

### 2. 版本发布
**暂无新版本发布**

---

### 3. 项目进展
本日无 PR 合并，处于待处理状态：
- **#8108**（2026-09-22 创建，2026-09-25 更新）— 提供 `builtin.time` 的 shift 功能支持
- **#7988**（2026-08-29 创建，2026-09-25 更新）— 自动化更新知识图谱的维护任务

---

### 4. 社区热点
目前无活跃讨论的 Issue。最热门的 PR 为：
- **[#8108](https://github.com/nearai/ironclaw/pull/8108)**：涉及时间操作功能扩展，虽无评论但近期有更新，显示维护者正在审查中
- **[#7988](https://github.com/nearai/ironclaw/pull/7988)**：由 CI 机器人发起的自动化流程，持续跟踪 codebases 知识图谱刷新

---

### 5. Bug 与稳定性
暂无新增 Bug 或稳定性问题报告。

---

### 6. 功能请求与路线图信号
暂无用户提出的新功能请求。  
已合并的功能虽少，但可见：
- 时间数据建模能力增强（来自 #8108）
- 开发者工具链自动化改进（来自 #7988）

这些暗示后续版本可能加强时间相关建模与开发者体验。

---

### 7. 用户反馈摘要
暂无用户在 Issue 中发表意见或反馈。

---

### 8. 待处理积压
以下 PR 长期未被合并，值得关注：
- **[#7988](https://github.com/nearai/ironclaw/pull/7988)**：由机器人自动生成，理论上应属低风险routine合并，是否需人工复核仍存疑问
- **[#8108](https://github.com/nearai/ironclaw/pull/8108)**：虽标注风险为 low，却属于较大尺寸（size: XL），审查耗时较长

建议维护者 prioritizing 合并此两项 PR 以维持 contributor 激励与代码流动性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报  
**日期：2026-09-26**

---

## 1. 今日速览

- **整体活跃度中等偏上**：过去24小时无新Issue产生，PR sustained活跃，共有10条PR更新，其中9条待合并，1条已合并，表明项目持续开发中。
- **稳定性优化持续推进**：多个PR聚焦于OpenClaw核心稳定性，包括错误恢复、策略热加载等关键机制。
- **功能迭代稳步进行**：新增Requesty模型供应商支持，完善模型选择器UI等前端体验优化。
- **旧改版PR持续闲置**：多个2026年4月左右的PR因“stale”标签缓慢推进，可能面临归档风险。

---

## 2. 版本发布

- **无本次版本发布**

---

## 3. 项目进展

### 已合并PR：
- **#2763** 关闭  
  - [链接](https://github.com/netease-youdao/LobsterAI/pull/2763)
  - **修复**：OpenClaw回放机制中因模型调用开始后replay导致的错误消息展示问题。
  - **影响**：提升用户对真实错误信息的感知，优化Agent出错后的体验。

### 合并意义：
此PR解决了OpenClaw在容错重试过程中的一种典型bug，避免因内部状态冲突误报“LLM请求失败”，从而提升了系统诊断能力和用户信任度。

---

## 4. 社区热点

### 高关注度PR：

- **#2766 [OPEN]**  
  - [链接](https://github.com/netease-youdao/LobsterAI/pull/2766)
  - **标题**：为模型提供商添加Requesty支持
  - **背景**：作为集成新的LLM网关，Requesty aims to simplify多模型调用架构。
  - **讨论点**：目前尚未获得 upvotes 或评论，需后续跟进。

---

## 5. Bug 与稳定性

### 当前已知Bug情况：

| 编号     | 类型           | 描述                                                                 | 修复状态     |
|----------|----------------|------------------------------------------------------------------------|--------------|
| #2765    | 功能Bug        | OpenClaw经压缩与恢复后，部分已接受的工作未被保留                     | 已提交PR修复 |
| #2764    | 稳定性Bug      | 修改Gateway策略后需重启才能生效                                       | 修复中       |
| #1547/#1550 | 定时任务Bug   | 定时任务“不通知”模式下数据不一致问题                                 | 已提交PR修复 |

> 注：上述PR大多标记为`[stale]`，长期未更新，需关注是否进入归档流程。

---

## 6. 功能请求与路线图信号

### 待集成功能信号：

- **#2766**：新增Requesty模型供应商 —— 若合并，可拓展模型选择边界。
- **#1628 / #1634 / #1660**：多项Cowork区域优化功能，涵盖模型选择器、全局搜索、主页欢迎语等模块。

这些PR反映出项目在提升用户粘性和交互可用性上的战略重心，值得观察其是否将进入下一主版本。

---

## 7. 用户反馈摘要

目前无直接来自Issue评论的用户反馈摘录。所有活跃讨论集中于PR中，尚未形成较大规模的外部用户反馈。

---

## 8. 待处理积压

以下PR因长期未活跃（超过几个月以上）且被标记为`stale`，建议维护者评估是否继续保留或关闭：

| 编号     | 标题摘要                                            | 更新时间     |
|----------|-----------------------------------------------------|--------------|
| #1547    | 修复定时任务通知渠道选择后恢复“不通知”问题           | 2026-09-25   |
| #1550    | 投递模式为“不通知”时移除不必要字段                   | 2026-09-25   |
| #1628    | 优化模型选择器UI及统一工具栏样式                     | 2026-09-25   |
| #1634    | 全局搜索功能修复与体验升级                           | 2026-09-25   |
| #1660    |非main agent首页欢迎区域个性化显示                   | 2026-09-25   |

> 建议：维护者审查这些PR以确认其是否仍具备实际价值，若无及时跟进，可考虑关闭以释放维护资源。

--- 

**总结语气**：LobsterAI 项目继续保持稳健的开发节奏，聚焦于核心组件稳定性与用户体验优化。需警惕一批老PR的积压风险，避免影响社区参与感。

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

> **注**：所提供数据实际来源于 `agentscope-ai/QwenPaw`，与标题中的 CoPaw 仓库不一致。以下报告严格基于提供的 11 条 Issue 与 13 条 PR 数据生成。

---

## 1. 今日速览

过去 24 小时，项目共新增/活跃 Issues 11 条、PR 13 条，无新版本发布，**0 条 PR 合并、0 条 Issue 关闭**。活跃度集中在控制台 UX、浏览器 SDK、QQ 通道、grep 工具与上下文窗口配置五大方向。今日提交的修复 PR 与前日曝光的 Bug 高度对应，形成"问题-修复"快速闭环，社区响应效率较高，但长期未关闭的历史 PR 与 Issue 已有积压迹象。

## 2. 版本发布

无新版本。

## 3. 项目进展

今日无 PR 合并

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

User Safety: safe

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*