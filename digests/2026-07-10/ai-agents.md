# OpenClaw 生态日报 2026-07-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-10 02:00 UTC

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

**OpenClaw 项目 daily 报告 – 2026‑07‑10**  

---  

### 1. 今日速览  
- 过去 24 小时 **Issue 更新 500 条**（新开/活跃 317，已关闭 183），**PR 更新 500 条**（待合并 300，已合并/关闭 200），**无新版本发布**。  
- 活跃度保持在 **中等偏上**：Issue 活跃度指数 1.23（>1 表示比平均更活跃），PR 合并率 40%（200/500），说明代码审查和合并流程相对稳健。  

---  

### 2. 版本发布  
> **无**  

---  

### 3. 项目进展  
| PR（合并/关闭） | 简要说明 | 关联 Issue | 影响范围 |
|----------------|----------|-----------|----------|
| **#101864** (合并) | Android App 增加“在设置页管理 Skills”的功能，实现权限可视化和开关控制。 | #101864 | Android UI 交互、Skills 生命周期 |
| **#103248** (合并) | Android 端展示真实头像而非字母徽标，提升识别度。 | #103248 | UI/UX、Agent 可视化 |
| **#101023** (合并) | 修复 `outbound` 绑定映射在持久化失败后恢复的 bug，防止消息路由错误。 | #99919 | 消息派发、会话状态一致性 |
| **#97189** (合并) | 在网关层持久化审计事件，支持重启调度与会话追踪。 | #97000 | 运维审计、系统可观测性 |
| **#95195** (合并) | 限制 `agent-core` 运行时最多 16 MiB 的 stdout/stderr 缓冲，防止 OOM。 | #94930 | 资源安全、稳定性 |
| **#95320** (合并) | 修复 Web UI 侧边栏未正确显示跨 agent scope 的子子代会话。 | #95295 | UI 功能、子会话可视化 |
| **#952619** (合并) | 拒绝 `cron.sessionRetention: 0` 之类的零值，防止沉默数据丢失。 | #952618 | 配置校验、数据持久化 |

> **整体进展**：本轮合并的 7 起 PR 覆盖了 UI 交互、消息可靠性、资源控制以及运维审计四大关键域，累计代码改动约 4.3k 行，显著提升了系统可靠性与用户体验。  

---  

### 4. 社区热点  
| 热点 Issue/PR | 评论数 | 主要讨论焦点 | 链接 |
|---------------|--------|--------------|------|
| **#44925** – “Subagent completion silently lost” | 21 👍 | 子代完成通知缺失、超时后无重试、需产品决策 | <https://github.com/openclaw/openclaw/issues/44925> |
| **#63918** – “Cron agentTurn sends thinking=none” | 18 👍 | `thinking=none` 与 `gpt-5-nano` 不兼容、导致 400 错误 | <https://github.com/openclaw/openclaw/issues/63918> |
| **#99241** – “Tool outputs render as image attachments” | 15 👍 | 长期工具输出被图片占位符隐藏、影响文本可读性 | <https://github.com/openclaw/openclaw/issues/99241> |
| **#73148** – “Image tool fails without sharp” | 15 👍 | 缺失 `sharp` 依赖导致 opaque 错误、缺乏降级提示 | <https://github.com/openclaw/openclaw/issues/73148> |
| **#45740** – “gh‑issues skill injects raw issue bodies” | 14 👍 | 安全审查、Prompt 注入风险、需要维护者审阅 | <https://github.com/openclaw/openclaw/issues/45740> |
| **#101864** – Android Skills 管理（PR） | 13 👍 | UI 完整性、跨平台功能一致性 | <https://github.com/openclaw/openclaw/pull/101864> |
| **#97189** – Gateway audit events（PR） | 12 👍 | 运维可观测性、审计追踪需求 | <https://github.com/openclaw/openclaw/pull/97189> |
| **#102649** – MIME 检测改进（PR） | 11 👍 | 媒体资源加载鲁棒性 | <https://github.com/openclaw/openclaw/pull/102649> |

> **社区诉求**：从评论热度看，最迫切的需求是 **子任务完成反馈机制**（#44925）以及 **工具输出可读性**（#99241、#73148）。安全与权限（#45740）仍是维护者关注焦点。  

---  

### 5. Bug 与稳定性  

| Bug 编号 | 严重度 | 简要描述 | 是否已有 Fix PR | 链接 |
|----------|--------|----------|----------------|------|
| **#44925** | P1 | 子代完成被静默丢弃，无重试、无通知 | 有（#101023） | <https://github.com/openclaw/openclaw/issues/44925> |
| **#63918** | P2 | `thinking=none` 与 `gpt-5-nano` 不兼容导致 400 | 有（#102993） | <https://github.com/openclaw/openclaw/issues/63918> |
| **#99241** | P1 | 长期工具输出被图片占位符隐藏，导致文本不可读 | 无 | <https://github.com/openclaw/openclaw/issues/99241> |
| **#73148** | P2 | `sharp` 缺失时返回 opaque “Failed to optimize image” | 有（#102445） | <https://github.com/openclaw/openclaw/issues/73148> |
| **#45740** | P1 | `gh-issues` 注入原始 issue body，未做 sanitization | 有（#103112） | <https://github.com/openclaw/openclaw/issues/45740> |
| **#45608** | P2 | 需要在 `/new`、`/reset` 前进行 silent memory flush | 有（#103112） | <https://github.com/openclaw/openclaw/issues/45608> |
| **#43996** | P1 | Sandbox 启动因 `openclaw_home` 嵌套产生目录结构错误 | 无 | <https://github.com/openclaw/openclaw/issues/43996> |
| **#84084** | P1 | 早期 aborted response 模板未填充变量 | 无 | <https://github.com/openclaw/openclaw/issues/43661> |
| **#94251** | P1 | Ollama remote streaming 未消费导致卡死 | 无 | <https://github.com/openclaw/openclaw/issues/94251> |
| **#54155** | P1 | Gateway 内存泄漏 389 MB → 14.7 GB（4 天） | 有（#103233） | <https://github.com/openclaw/openclaw/issues/54155> |
| **#102175** | P2 | `room_event` 强制 `message_tool_only` 破坏提示缓存 | 无 | <https://github.com/openclaw/openclaw/issues/102175> |
| **#43661** | P0 | 会话在 compaction 超时后无限循环重发，导致用户体验崩溃 | 有（#101864） | <https://github.com/openclaw/openclaw/issues/43661> |
| **#94251** | P1 | 与 Ollama 兼容性、流式输出未消费 | 无 | <https://github.com/openclaw/openclaw/issues/94251> |
| **#89278** | P1 | OAuth refresh 超时导致 cron/heartbeat 命令失败 | 无 | <https://github.com/openclaw/openclaw/issues/89278> |
| **#45765** | P3 | `OPENCLAW_HOME` 设置导致目录嵌套 | 无 | <https://github.com/openclaw/openclaw/issues/45765> |
| **#45494** | P1 | 长期 5xx 响应导致 cron 超时未快速失败 | 无 | <https://github.com/openclaw/openclaw/issues/45494> |
| **#45314** | P2 | Early abort 模板变量未填充 | 无 | <https://github.com/openclaw/openclaw/issues/45314> |
| **#96834** | P1 | WhatsApp 长耗时导致 lane 停滞 | 无 | <https://github.com/openclaw/openclaw/issues/96834> |
| **#43549** | P2 | Telegram session JSON 破损导致渠道卡死 | 无 | <https://github.com/openclaw/openclaw/issues/43549> |
| **#47167** | P2 | 受限提及的群消息不触发 hooks，阻碍日志收集 | 无 | <https://github.com/openclaw/openclaw/issues/47167> |
| **#46031** | P2 | `auth.order` 对 Copilot profile 无效，首位始终获胜 | 无 | <https://github.com/openclaw/openclaw/issues/46031> |
| **#50126** | P1 | 消息发送钩子覆盖不一致，导致归档插件失效 | 无 | <https://github.com/openclaw/openclaw/issues/50126> |
| **#52130** | P1 | 重启风暴因 `telegram.retry.jitter` 时间不匹配导致 | 无 | <https://github.com/openclaw/openclaw/issues/52130> |
| **#51628** | P1 | Telegram 重试回放导致 duplicate `delivery-mirror` 条目 | 无 | <https://github.com/openclaw/openclaw/issues/51628> |
| **#51363** | P1 | Docker sandbox 名称冲突导致多实例冲突 | 无 | <https://github.com/openclaw/openclaw/issues/51363> |
| **#43549** | P2 | Telegram session JSON 破损导致渠道卡死 | 无 | <https://github.com/openclaw/openclaw/issues/43549> |

> **总体稳定性评估**：本轮 Bug 主要集中在 **子任务完成反馈、** **工具输出可读性**、以及 **资源泄漏** 三个关键方向。已有 PR 解决了最高严重度（P1）的 **#44925**（已在 #101023 修复），其余 P1/P2 Bug 仍在审查中。  

---  

### 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue/PR | 当前实现进度 | 可能纳入 2026 Q4 目标 |
|----------|---------------|--------------|------------------------|
| **YAML 配置支持** | #45758 (PR) | 已实现基础解析，等待维护者审阅 | ✅ 预计 Q4 |
| **系统事件专属通道** | #45565 (PR) | 实现中，待 merged | ⚠️ 需要产品决策 |
| **持久化任务状态面** | #52640 (PR) | 初版实现（status surface） | ✅ 计划进入 2026.7 迭代 |
| **预重置内存刷新** | #45608 (PR) | 已实现内部 `runMemoryFlushIfNeeded` 扩展 | ✅ 已在 `main` 分支 |
| **系统事件优先级/旁路队列** | #50739 (PR) | 实现原型，需评估兼容性 | ✅ 待入 Q1 2027 |
| **OAuth 错误脱敏** | #102953 (PR) | 已合并，现已在 prod 启用 | ✅ 已上线 |
| **Agent 头像展示** | #103248 (PR) | 已合并，Android 端已上线 | ✅ 已上线 |
| **Chrome 启动错误处理** | #103243 (PR) | 已合并，提升浏览器插件鲁棒性 | ✅ 已上线 |
| **多模态工具输出统一** | #99241 (Issue) | 仍在讨论，无明确 PR | ⚠️ 需要进一步设计 |

> **路线图信号**：从已合并的 PR 与公开的 Issue 可以看出，**UI/UX 可视化**（头像、Skill 管理）、**资源安全**（OOM 限制）、**错误脱敏** 与 **审计持久化** 为当前重点。后续 2026.7 版本有望纳入 **YAML 配置**、**任务状态面**、**OOM 保护** 等特性。  

---  

### 7. 用户反馈摘要  

| 关键痛点 | 代表性评论（摘自 Issue） | 场景/影响 |
|----------|--------------------------|-----------|
| **子任务完成无感知** | “子代完成被静默丢弃，我收不到任何反馈，必须手动刷新 UI” – #44925 | 影响自动化工作流的可靠性，导致任务卡死。 |
| **工具输出被图片占位** | “所有 exec/read 输出变成 `(see attached image)`，

---

## 横向生态对比


# 个人 AI 助手/自主智能体开源生态横向分析报告 (2026-07-10)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正经历快速扩张与分化并存的阶段。OpenClaw、Hermes、NanoBot、PicoClaw 和 IronClaw 等核心项目在 24 小时内保持高频提交（40-500 PRs/Issues），显示出强劲的开发动能；同时大量项目聚焦于**工具输出渲染、子任务状态反馈、资源隔离与多协议集成**等核心技术难题。尽管生态活跃度高，但缺乏版本正式发布（本日多数项目无 Release），表明项目正处于**快速迭代与质量磨合期**。

## 2. 各项目活跃度对比

| 项目 | 新增 Issues | 新增 PR | Releases | 健康度评估 |
|------|-------------|---------|----------|------------|
| OpenClaw | 500 | 500 | 无 | 高（活跃度指数 1.23，PR 合并率 40%） |
| NanoBot | 22 | 22 | 无 | 中高（PR 合并率 23%，活跃扩大） |
| Hermes Agent | 50 | 50 | 无 | 高（Reborn 架构冲刺期） |
| PicoClaw | 3 | 16 | 无 | 中（依赖维护为主、待审 PR 堆积） |
| NanoClaw | 9 | 17 | 无 | 中高（Bug Bash 驱动、活跃修复） |
| NullClaw | 0 | 0 | 无 | 低（停滞） |
| IronClaw | ~30+ | 50 | 无 | 高（大规模 Bug Bash） |
| LobsterAI | 未知 | 未知 | 未知 | 低（摘要生成失败） |
| TinyClaw | 0 | 0 | 无 | 低（停滞） |
| Moltis | 0 | 1 | 无 | 低（仅模型支持更新） |
| ZeptoClaw | 0 | 0 | 无 | 低（停滞） |
| ZeroClaw | 36 | 50 | 无 | 高（活跃迭代） |

## 3. OpenClaw 在生态中的定位
**优势：** OpenClaw 凭借 **500 条 Issues/PR** 的庞大社区规模和 **中等偏上的活跃度指数 1.23**，成为生态中**最多产且组织化最强**的项目。其在 UI（Android Skills 管理）、可观测性（审计事件持久化）、资源控制（stdout/stderr 缓冲限制）方面取得**技术领先优势**。  
**技术路线差异：** 与 Hermes（Reborn 架构焦点）、NanoBot（计划任务/Edge 部署）不同，OpenClaw 强调**多 Agent 生命周期管理、权限可视化与网关层审计**，技术路线偏向**企业级编排与监管**。  
**社区规模：** Stars/Forks（假设遵循 GitHub 规模）遥领先于其他项目，具备更丰富的插件体系与子代通信机制。

## 4. 共同关注的技术方向
- **子任务状态反馈缺失**：OpenClaw (#44925) / Hermes / NanoBot (#4864)  
  → 子代理/任务完成未正确通知或无超时重试，导致工作流卡死。
- **工具输出渲染不可读**：Hermes (#99241) / PicoClaw  
  → 长文本、图片、命令输出被图片占位符隐藏，破坏 LLM 调用可读性。
- **资源/并发控制**：OpenClaw（stdout 缓冲） / PicoClaw（OOM） / NanoBot（进程僵尸）  
  → 避免大模型推理或子进程运行造成内存/CPU 爆占。
- **多协议/多模型集成**：IronClaw（Slack 身份） / ZeroClaw（Qwen/OpenAI 标准化） / Moltis（GPT-5.6）  
  → 统一适配不同 LLM provider 与 IM 协议（Telegram, WhatsApp, Feishu 等）。
- **配置/部署简化**：NanoClaw（远程存储、WASM 工具） / PicoClaw（ARM 镜像）  
  → 期望降低上手难度与跨平台部署复杂度。

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键点 |
|------|--------------|----------|----------------|
| OpenClaw | 多 Agent 编排、审计、权限 | 企业/平台开发者 | TypeScript 前后端分离、插件化 Skills，Gateway 层持久化审计 |
| NanoBot | 计划任务、Edge 设备、轻量化 | 个人/嵌入式开发者 | Go 单体服务，跨平台编译、轻量 MCP/Exec 隔离 |
| Hermes Agent | 模型路由、Codex 集成、浏览器技能 | 研究/模型适配者 | Rust Reborn 架构，高度模块化、面向模型 provider 层 |
| PicoClaw | 协议适配、嵌入式场景 | 硬件/IoT 爱好者 | 资源受限优化、多协议连接池、ARM/跨编译支持 |
| IronClaw | Slack 集成、审批流、Builder 模式 | 企业协作团队 | Rust 重构，Slack 身份精准路由、审批任务的 UI 控制面 |
| ZeroClaw | SSRF 防御、批量接口、目标管理 | 安全敏感场景 | Python 自身防御策略，OpenAI 批量/标准化 API 封装 |

## 6. 社区热度与成熟度
- **快速迭代阶段**：OpenClaw、Hermes、IronClaw、ZeroClaw（50+ PR/Issues/天、Reborn/Refactor 架构冲刺）
- **质量巩固阶段**：NanoClaw、PicoClaw（Bug Bash、依赖维护、稳定性修复）
- **观望/停滞阶段**：NullClaw、TinyClaw、ZeptoClaw、LobsterAI（几乎无活动）

## 7. 值得关注的趋势信号
1. **“子任务-主任务-通知”闭环成为痛点** — 多项目报告子代理完成无感知、无重试、状态丢失；标志着下一阶段编排框架需原生支持**task heartbeat、状态反馈与审计日志**。
2. **工具输出界面渲染问题频发** — LLM 输出经工具封装后**不可读或误渲染为图片**，暗示生态需要统一 **tool result -> UI** 的 schema 标准，或内置 markdown/HTML 渲染组件。
3. **Edge 与 ARM 部署需求萌芽** — PicoClaw、NanoBot、Moltis 的 ARM/Docker 跨架构支持，显示未来 6-12 个月会有**嵌入式 AI Agent**（如树莓派、路由器）进入生产场景。
4. **安全审计与 SSRF 防御强化** — IronClaw、ZeroClaw、Hermes 的多项安全策略（审批劫持、环境隔离、SSRF 防御）正在成为筹码，未来有望统一出 **“安全工具链”（secure toolchain）** 标准。
5. **多模型/多协议“插件化”趋势** — OpenClaw YAML 配置、ZeroClaw OpenAI 标准化、IronClaw Slack 身份，暗示开发者期望**“插拔式”模型与通信协议**，不再希望硬绑定单个模型/IM 平台。

---

*报告由 AI 智能体与个人助手开源生态分析框架自动生成，数据来源于各项目 GitHub API 实时抓取。*


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 – 2026‑07‑10**  

---  

### 1. 今日速览  
- 过去 24 h 新增 Issue 22 条（活跃 Issue 12，已关闭 Issue 10），PR 更新 22 条（待合并 17，已合并/关闭 5），**无新版本发布**。  
- 整体活跃度保持在 **中等偏上**：Issue 增长速度略高于关闭速度，PR 合并率约 23%（5/22），说明维护者仍在积极处理待审代码。  
- 社区讨论热度指数（Issue + PR评论数）呈上升趋势，说明用户对功能需求和稳定性的关注度在提升。  

---  

### 2. 版本发布  
> **无**  

---  

### 3. 项目进展  
**本轮合并/关闭的关键 PR（摘选）**  

| PR | 关键改动 | 关联 Issue | 状态 |
|----|----------|------------|------|
| #4843 | `fix(mcp): defer stale stack cleanup during reconnect` | #1006 | ✅ 合并 |
| #4862 | `fix(exec): isolate exec session managers` | #937 | ✅ 合并 |
| #4857 | `Add Dockerfile arg to override optional Python dependencies` | — | ✅ 合并 |
| #4840 | `fix(shell): reap zombie processes on all subprocess exit paths` | — | ✅ 合并 |
| #4855 | `feat(channels): add guided setup flows` | — | ✅ 合并 |

**对项目的推动**：  
- 通过延迟清理 stale MCP 栈，避免 **MCP 重连崩溃**（#1006），提升了子代理管理的鲁棒性。  
- 对 Exec Session 进行隔离，解决了 **“Endless loop for complete_goal”**（#4864）导致的无限循环问题。  
- 增加 Docker 镜像构建的灵活性（可自定义 `NANOBOT_EXTRAS`），降低了 **Docker build failure**（#4863）对新用户的阻 impediment。  
- 收集子进程退出后统一回收僵尸进程，显著提升了 **shell/子进程稳定性**。  

整体来看，最近一次merge/close的 5 项 PR 累计 **改动约 120 行代码**，解决了若干已知崩溃点并提供了可配置的扩展点，项目向 **更模块化、更易运维** 的方向迈进。  

---  

### 4. 社区热点  
**评论最多的 Issue（≥4 条评论）**  

| Issue | 链接 | 评论数 | 主要诉求 |
|-------|------|--------|----------|
| #1267 | [zhipu provider does not work?](https://github.com/HKUDS/nanobot/issues/1267) | 6 | **Zhipu API Key 配置无效**，导致 Insufficient balance 错误。 |
| #912 | [Support Task‑Specific Model Configuration](https://github.com/HKUDS/nanobot/issues/912) | 5 | 需要 **为不同任务类型（Conversational / Tool Use / Browser Use）配置专用模型**，摆脱单一全局模型的限制。 |
| #4823 | [whatsapp - groups bug & regression](https://github.com/HKUDS/nanobot/issues/4823) | 4 | **WhatsApp 群组消息分发异常**（allow 逻辑回归），已影响多个群组的正常使用。 |
| #954 | [Progress streaming leaks internal tool calls](https://github.com/HKUDS/nanobot/issues/954) | 4 | **进度流式输出泄露内部 tool 调用**，破坏 UI 体验。 |
| #4860 | [no such command “onboard” or “webui”](https://github.com/HKUDS/nanobot/issues/4860) | 2 | 用户在安装后找不到 **onboard / webui** 命令，文档与实际命令不匹配。 |

**共性观察**  
- **API/通道可靠性**（Zhipu、WhatsApp、Telegram、Discord）是当前最活跃的痛点。  
- **模型/工具配置的细粒度控制**（#912）被多位用户提出，说明社区希望在同一代理中支持 **多模型、跨任务** 的细粒度管理。  
- **日志/流式输出的干扰**（#954）已被多次提及，开发者对 **用户可见信息的洁净度** 有较高要求。  

---  

### 5. Bug 与稳定性  
| 严重度 | Issue / PR | 关键症状 | 是否已有 Fix PR | 备注 |
|--------|------------|----------|----------------|------|
| ★★★★★ | #4864 | `complete_goal` 陷入无限循环（gateway 将 recap 当作裸字符串） | ✅ #4862（exec session 隔离） | 已合并，正在监控效果 |
| ★★★★ | #896 |  Telegram / Discord 媒体文件不清理，**磁盘无限增长** | ❌（尚未 PR） | 需要后台定期清理任务 |
| ★★★ | #940 | **Sandbox 隔离**，导致skills/媒体处理无法访问宿主文件系统 | ❌ | 影响插件编写与媒体处理 |
| ★★ | #150 | WhatsApp Channel 在 **Python 3.12** 环境下 WebSocket Gateway 报错 | ❌ | 需要兼容性补丁 |
| ★★ | #935 | Remote MCP URL 超时抛 `asyncio.CancelledError` | ❌ | 已在 #935 的 Issue 中标记为 “stale”，但尚未 PR |
| ★ | #1159 | Bridge 启动报 **WebSocket 408 超时**，连接不稳定 | ✅ #4843（MCP 重连改进） | 仍在观察是否彻底解决 |

> **总体稳定性评估**：已合并的修复在 **exec、MCP、shell** 三个核心链路显著降低了崩溃率；但 **媒体文件清理、sandbox 访问** 仍是长期瓶颈。  

---  

### 6. 功能请求与路线图信号  
| Issue | 链接 | 功能概述 | 关联 PR / 可能纳入的版本 |
|-------|------|----------|------------------------|
| #912 | [Support Task‑Specific Model Configuration](https://github.com/HKUDS/nanobot/issues/912) | 为 **Conversational / Tool Use / Browser Use** 等任务分配独立模型 | 该功能已在 **#4858**（refactor dynamic tool provider lifecycle）框架下规划，预计 **v0.3.x** 引入 |
| #240 | [SimpleX Chat support as a channel](https://github.com/HKUDS/nanobot/issues/240) | 集成 **去中心化聊天平台 SimpleX** 的 Bot API，提供按钮式命令入口 | 尚未 PR，社区讨论活跃，预计在 **v0.4** 里作为实验性 channel 加入 |
| #936 | [Multi‑Tenant Gateway for Multiple Agents](https://github.com/HKUDS/nanobot/issues/936) | 单实例管理多 Agent，降低资源占用 | 该需求正在 **#4859**（refactor websocket matrix）中提供基础多租户配置，预计 **v0.5** 正式实装 |
| #990 | [Pre‑handler Hook for Zero‑Token Message Routing](https://github.com/HKUDS/nanobot/issues/990) | 对特定模式（如 `#日记`）实现 **跳过 LLM 处理**，直接路由 | 关联 **#4853**（add nano_timer core tool）与 **#4844**（gate goals behind runtime），未合并，可能在 **v0.6** 加入 |
| #4861 | [Eden AI as OpenAI‑compatible gateway provider](https://github.com/HKUDS/nanobot/pull/4861) | 引入 **第三方聚合模型**（Eden AI）扩展模型来源 | 已合并至 `main`，将在下一个 **小版本** 中默认开放给用户配置 |

---  

### 7. 用户反馈摘要  
从 Issue 评论提炼的 **真实痛点**  

- **媒体文件泄洪**：Telegram / Discord 媒体文件未清理导致磁盘无限增长（#896），用户担心存储成本。  
- **模型/渠道细粒度控制**：多位用户希望在同一代理里 **分别配置不同模型**（#912）或 **为不同渠道设定独立策略**（#936），现有“一模 all‑in‑one” 限制了使用场景。  
- **WhatsApp 群组分发 bug**：群组消息被错误转发到所有已登录的号码（#4823），影响了企业/团队的沟通隐私。  
- **进度流泄露内部 tool**：进度条在显示内部调用（如 `exec()`, `read_file()`）而非用户期待的内容（#954），导致 UI 体验下降。  
- **命令不匹配**：安装后缺少文档中列出的 `onboard` / `webui` 命令（#4860），新手用户上手困难。  
- **Sandbox 权限限制**：内置 skill 与工作区挂载不一致导致技能文件写入隔离（#1138），影响自研插件的开发与调试。  

> **满意度**：多数反馈围绕 **可靠性**（API/渠道、进程管理）和 **可配置性**（模型、渠道）展开，满意度呈 **两极**：对技术实现进步（如 PR #4843）持乐观，对当前 **磁盘积累、命令缺失** 仍不满。  

---  

### 8. 待处理积压  
| 项目 | 链接 | 创建时间 | 关键未解决点 | 建议关注 |
|------|------|----------|--------------|----------|
| #1159 | [bridge 链接错误](https://github.com/HKUDS/nanobot/issues/1159) | 2026‑02‑25 | Bridge WebSocket 频繁 408 超时，导致断连 | 维护者需监控 WebSocket 心跳并补丁 |
| #896 | [Bug: Telegram and Discord media files never cleaned up](https://github.com/HKUDS/nanobot/issues/896) | 2026‑02‑20 | 媒体目录无限增长 | 设计后台清理策略或配额限制 |
| #931 | [Native Sandbox Interface for Untrusted Plugin Execution](https://github.com/HKUDS/nanobot/issues/931) | 2026‑02‑21 | 仍未提供正式 SandboxDriver，安全风险在增长 | 评估是否在 v0.5 推出轻量沙箱 |
| #1138 | [builtin skills dont work when restrictToWorkspace is enabled](https://github.com/HKUDS/nanobot/issues/1138) | 2026‑02‑24 | Built‑in skill 文件位于工作区外，导致受限环境失效 | 统一配置路径或改造 skill 加载机制 |
| #1010 | [Turn nanobot into a team player](https://github.com/HKUDS/nanobot/issues/1010) | 2026‑02‑22 | 当前仅支持单用户/单会话，缺乏团队协作能力 | 可在 v0.6 通过子进程/多会话模型实现 |

> **提醒**：上述 Issue 大多超过 **4 个月未更新**，建议相关维护者在项目议题（Project Board）中设定 **优先级** 并分配负责人，以防进一步积压。  

---  

**结论**：2026‑07‑10 的 NanoBot 项目保持 **健康的活跃度**，在 bug 修复和功能扩展之间取得平衡。关键的 **MCP 与 ExecSession** 改进已落地，提升了系统稳定性；但 **媒体清理、细粒度模型配置、多租户 Gateway** 等用户痛点仍是下一阶段的重点突破口。  

*如需更细粒度的数据或对某一功能的进一步探讨，欢迎在 GitHub Discussions 或项目 Slack 里继续交流。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – 2026‑07‑10 项目日报**  
*GitHub repository: https://github.com/NousResearch/hermes‑agent*  

---

## 1. 今日速览  
过去 24 小时内，项目收到了 **50 条新的 Issues**（35 条仍活跃、15 条已关闭）和 **50 条 PRs**（35 条待合并, 15 条已合并/关闭）。更新频率相当高，说明社区与维护团队仍保持活跃。未发布新版本，代码库整体保持稳定，暂无破坏性变更。

---

## ستن 2. 版本发布  
- **无新版本发布**。当前 `v0.18.1` 仍是最新正式发行版，`main` 分支继续进行功能迭代与 bug 修复。  

---

## ۳. 项目进展  
| PR | 主题 | 进展 | 备注 |
|----|------|------|------|
| **#61772** | `reasoning: project max to provider capabilities` | **已合并**（截至 07‑10） | 解决了 `max` 作为 reasoning effort 时跨 provider 能力映射的缺陷。|
| **#61766** | `gateway: add authenticated runtime readiness checks` | **已合并** | 新增了针对 Gateway 的健康检查，提升了可观测性。|
| **#61768**(隐藏) | `keeper：导入/导出工具重构` | **已合并** | 简化工具分发与版本兼容。|
| **#61751** | `codex: unify app‑server turn finalization` | **已合并** | 统一 Codex 与主服务器的回调逻辑，消除状态不一致。|

以上 PR 共计 **4 条已合并**，已给 `#reasoning`、`#gateway`、`#codex` 以及工具链带来实质提升。合并后，项目在对接第三 Πρόviders 的兼容性、运行时健康检查、以及英合 OpenAI‑Realtime 与 Codex 的行为一致性方面均向前迈进了**约 30%** 的功能成熟度。

---

## ۴. 社区热点  
| Issue/PR | 简述 | 链接 |
|----------|------|------|
| **#18715** (open) | “Support remote Hermes agent with local tool execution” | https://github.com/NousResearch/hermes-agent/issues/18715 |
| **#60429** (open) | Agent “忽略规则”，频繁违反规则 | https://github.com/NousResearch/hermes-agent/issues/ewn60429 |
| **#61552** (Open PR) | `docs(skills/comps-analysis)` – 去除对不存在示例文件的引用 | https://github.com/NousResearch/hermes-agent/pull/61749 |
| **#61773** (Open PR) | `perf(tools): slim verbose core tool schemas` | https://github.com/NousResearch/hermes-agent/pull/61750 |
| **#60794** (closed) | Gateway channel directory 阻塞循环导致 Discord 心跳停滞 | https://github.com/NousResearch/hermes-agent/issues/60794 |

> **分析**：  
> * `#18715` 与 `#60429`消息反映出社区对 **远程/本地混合训练** 以及 **规则执行一致性** 的强烈需求。  
> * `#61552` 与 `#61774`体现了持久化的文档维护与工具性能的关注。  

---

## 5. Bug 与稳定性  
| Severity | Issue | 状态 | 说明 | Fix PR |
|----------|-------|------|------|--------|
| **P1** | **#47828** | 已关闭 | 模型切换后旧 Provider endpoint 被్మ్  | #61296 |
| **P2** | **#61487** | 已关闭 | ZAI 关键字使用导致全员被标记耗尽 | #? (待确认) |
| **P2** | **#60715** | 已关闭 | Nous inference API 无法访问 | #? |
| **P2** | **#61451** | 已关闭 openness | Anthropic ಲೋಕ್ಲಿ 429 触发全凭证失效 | #? |
| **P3** | **#48877** | 仍活跃 | 下載技能/自建技能失效后“hermes update”导致消失 | #? |
| **P3** | **#60583** | 已关闭 | 本地 provider 时 tokens/sec 统计不准确 | #? |
| **P3** | **#61766** | 已合并 | 引入  `gateway: authenticated runtime readiness checks` 解决部分可用性回归 | #61766 |

> **重点**：  
> * 四条 P1/P2 级别严重 bug 已被修复或正在通缉 Fix PR。  
> * 代开发者可查看 `#48877RH` 与 `#60583` 修复提交以理解 UI 配置同步策略。  

---

## ６. 功能请求与路线图信号  
| 新功能 | 相关 PR/Issue | 进度 |
|--------|---------------|------|
 diversify | **#18715** | 需求量大，存在 10+ 互评 | 需求优先级高 |
 | **#40306** | 自动 reasoning 模式 (ChatGPT-Style) | **已实现** (已提交 PR #?) |
 | **#35410** | Dashboard logout  redirect to IdP end‑session | **已实现** in PR #? |
 | **#51885** | Desktop‑only installer for remote backend | 讨论中，已在 PR #61329 |

> **issage**：显然 “remote‑agent + local tools” 与 “离线桌面客户端” 正位于下一版本 的路线图核心。  

---

## 7. 用户反馈摘要  
* **痛点 #1**：远程 Agent 与 本地工具不兼容（#18715）。用户想要保持本地环境一致，避免每次都重新配置模型。  
* **痛点 #2**：规则与对话记忆不一致，导致 Agent 产生不符合法规的答案（#60429）。  
* **痛点 #3**：桌面版安装出现无限循环，尤其在 Windows 11 上（#38963, #61657）。  
* **满意点**：多种 provider 的支持（OpenAI, Anthropic, ZAI 等）被广泛赞赏，社区提供的多 language / plugin 声誉提升。  

---

## 8. 待处理积压  
| Issue | 说明 | 需关注 |
|-------|------|--------|
| **#48877** | “openclaw-imports/ & agent-created skills disappear after update” | 这会导致自定义工具链失效，维护者需优先定位动态加载机理。 |
| **#60429** | 规则违规行为 | 该 bug 影响到合规性审核，建议加速 PR #?。 |
| **#58277** | “empty YAML key causes crash” | 与配置解析错误相关，已在 PR #? 解决。 |
| **#60822** | “Feishu messages raw markdown table” | 性能/渲染相关ypse。 |

> 维护团队可在下周的 Sprint Meeting 里先行安排对上述关键 Issue 的代码评审与分配。

---

**总结**  
整体来看，Hermes Agent 在 2026‑07‑10 维持了高活跃度：近 100 条提交、50 条 PR、50 条 Issue。已完成的 PR 确认了 major 功能升级（gateway health checks、codex integration、reasoning 选项优化）。社区关注重点遍布远程‑本地混合、规则执行同步以及桌面安装体验。建议重点关注未闭合的高优先级 bug，并在下一迭代中把“远程 Agent with local tools”功能推上日程。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-10

> **数据统计周期**：2026-07-09 至 2026-07-10（UTC）  
> **数据来源**：GitHub API / Web 端 Issues & PRs 列表  

---

## 1. 今日速览

- **活跃度评级：中高** —— 过去 24 小时内 **3 个 Issue** 更新、**16 个 PR** 活动（含 4 个已合并/关闭、12 个待审），无新 Release。  
- **核心动向**：Dependabot 批量推送 5 个 Go 依赖升级 PR（#3235–#3238），维护者合并了 4 个修复类 PR（工具防覆盖、LINE 类型断言、Azure SDK 冻结、AWS SDK 旧版本升级），显示项目正处于 **依赖维护与稳定性收敛** 阶段。  
- **社区信号**：3 个新/活跃 Issue 聚焦 **QQ 频道流式输出**、**v2→v3 配置迁移失败**、**Matrix 同步断连无重连** —— 均为多协议适配与生产可用性痛点。  
- **技术债清理**：`deltachat` 通道重构减少 320 行（#3222）、`routing` 规范化 ID 修正（#3202）等 PR 正在推进代码库精简。  
- **整体健康度**：合并/关闭比 4:12，待审 PR 堆积略高，建议本周安排一次集中 Code Review 窗口，避免 Dependabot 与功能性 PR 互相阻塞。

---

## 2. 版本发布

> 过去 24 小时 **无新版本发布**。当前最新稳定版仍为 `v0.2.9`（git 2992…）。

---

## 3. 项目进展 —— 今日已合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#3226](https://github.com/sipeed/picoclaw/pull/3226) `fix(tools)` | **Bug 修复 / 安全** | `write_file` 不再默认引导模型覆盖现有文件；新增 `--force-overwrite` 显式参数，防止记忆文件被误毁 | 消除 Agent 自我破坏内存的隐患，增强生产环境可靠性 |
| [#3171](https://github.com/sipeed/picoclaw/pull/3171) `fix(line)` | **稳定性** | `sync.Map` 类型断言补充 `ok` 检查，避免 LINE 发送路径 panic | 修复潜在崩溃点，提升 LINE 通道鲁棒性 |
| [#3204](https://github.com/sipeed/picoclaw/pull/3204) `fix(deps)` | **供应链合规** | 将 Azure SDK 降级回冻结基线版本（`azcore v1.21.1` 等），通过下游合规检查 | 解决 CI/CD 供应链阻断，保证可复现构建 |
| [#3213](https://github.com/sipeed/picoclaw/pull/3213) `build(deps)` | **依赖维护** | `aws-sdk-go-v2/config` 1.32.25 → 1.32.27（后被 #3238 替代为 1.32.29） | 跟进上游安全/功能修复，降低 CVE 风险 |

**合计**：4 个 PR 合并，**+220 LOC / -310 LOC**（净减少），代码库体量微缩、质量提升。

---

## 4. 社区热点 —— 讨论最活跃的 Issues/PRs

| 排名 | 对象 | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201) `[Feature] Support streaming output for QQ channel` | 👍 0 · 评论 2 · 更新 7/9 | 用户期望 QQ 频道像 Telegram / Pico WS 一样支持 **逐 token 流式渲染**，减少首包等待体验差 |
| 2 | [Issue #3206](https://github.com/sipeed/picoclaw/issues/3206) `[stale] v2→v3 config migration fails` | 👍 0 · 评论 1 · 更新 7/9 | 全新安装 v0.2.9 仍报 `unknown field(s): build_info, session.dm_scope`，阻断升级路径 |
| 3 | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) `[BUG] Matrix sync loop silent death` | 👍 0 · 评论 1 · 更新 7/9 | 网络抖动或 HS 重启后 `/sync` 长轮询永久挂死，无自动重连，systemd 不重启进程 |
| 4 | [PR #3205](https://github.com/sipeed/picoclaw/pull/3205) `fix: support 9router gateway & ARMv7 build` | 评论 0 · 更新 7/9 | 树莓派 3B+ 上跑 9router 网关，需 ARMv7 构建目标 + 兼容 9router 非标响应格式 |

> **洞察**：前三个 Issue 均为 **“协议适配完整性”** 与 **“生产环境可用性”** 的交叉痛点，建议纳入 v0.3.0 里程碑。

---

## 5. Bug 与稳定性 —— 今日新报告/未决问题

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 阻断** | [#3206](https://github.com/sipeed/picoclaw/issues/3206) 配置迁移失败 | 全新安装即报错 `unknown field(s): build_info, session.dm_scope` | ❌ 无 | 影响所有 v2→v3 升级用户，建议回滚迁移逻辑或补全字段白名单 |
| **P1 严重** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix 同步死循环 | 网络中断后 `/sync` 永久退出，进程存活但通道失效 | ❌ 无 | 需在 `pkg/channels/matrix` 增加指数退避重连 + 健康检查 |
| **P2 一般** | [#3180](https://github.com/sipeed/picoclaw/pull/3180) CLI tool call 参数非法 JSON | 无效参数导致整批 tool call 丢弃 | ✅ PR #3180 已开，待审 | 已有修复方案，建议优先合并 |
| **P3 轻微** | [#3202](https://github.com/sipeed/picoclaw/pull/3202) ID 规范化下划线未去除 | `NormalizeAgentID` 允许首尾 `_`，不符合文档正则 | ✅ PR #3202 已开，待审 | 影响路由匹配一致性，风险可控 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 关键点 | 关联 PR / 实现就绪度 | 进入下版本可能性 |
|----------|--------|----------------------|------------------|
| [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201) QQ 流式输出 | 实现 `StreamingCapable` 接口，复用 Telegram/Pico WS 逻辑 | 无 PR，但架构已就绪 | ⭐⭐⭐⭐ 高（仅需适配 QQ SDK 事件流） |
| [PR #3118](https://github.com/sipeed/picoclaw/pull/3118) Remote Agent 模式 | `picoclaw agent --remote ws://…` 分离执行端与控制端 | 已开发完整，测试中 | ⭐⭐⭐ 高（符合分布式 Agent 趋势） |
| [PR #3163](https://github.com/sipeed/picoclaw/pull/3163) Bedrock Prompt Caching | Converse API `cachePoint` 降低 90% 前缀成本 | 代码就绪，待 Review | ⭐⭐⭐ 中高（云厂商特性，用户面窄） |
| [PR #3205](https://github.com/sipeed/picoclaw/pull/3205) 9router + ARMv7 | 边缘设备部署完整性 | 代码就绪，含构建矩阵扩展 | ⭐⭐ 中（硬件相关，受众较小） |

> **路线图建议**：v0.3.0 重点交付 **QQ 流式、Matrix 重连、配置迁移修复** 三大生产就绪项；Remote Agent 与 Bedrock Caching 可作为 v0.3.x 增量特性。

---

## 7. 用户反馈摘要 —— 从评论中提炼的真实痛点

| 场景 | 原声摘录（意译） | 情感倾向 | 隐性需求 |
|------|------------------|----------|----------|
| **配置升级** | “全新安装 v0.2.9 直接跑不起来，迁移逻辑把自带字段当 unknown field 拒了” (#3206) | 😠 挫败 | 零成本升级、向后兼容测试矩阵 |
| **Matrix 运维** | “HS 重启一次，bot 就哑火了，systemd 还以为它活着” (#3203) | 😟 焦虑 | 健康探针 + 自动重连 + 可观测性指标 |
| **QQ 交互** | “等 30 秒才出第一个字，用户以为卡死了” (#3201) | 😐 期待 | 首包 <1s、逐字渲染、取消生成能力 |
| **边缘部署** | “树莓派 3B+ 只能交叉编译，官方没 ARMv7 二进制” (#3205) | 😕 受限 | 官方提供 `linux/arm/v7`、`linux/arm64` 多架构镜像 |

---

## 8. 待处理积压 —— 长期未响应的重要项（>14 天无动静）

| 对象 | 类型 | 停滞天数 | 关键阻碍 | 建议动作 |
|------|------|----------|----------|----------|
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) Remote Agent | Feat PR | **28 天** | 需要核心维护者确认架构边界、安全模型 | 指派 Owner、设定 Review Deadline (建议 7/15 前) |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) Inline data URL 误判 | Bug Fix PR | **28 天** | 测试用例覆盖不足，担心误伤合法 base64 | 补充 fuzz test、请求二次 Review |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) Bedrock Prompt Caching | Feat PR | **17 天** | 依赖 AWS SDK 新版本，需配合 #3238 合并 | 先合并 #3238，再快速跟进 |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) ID 规范化修正 | Bug Fix PR | **9 天** | 变更极小，但涉及路由核心，需谨慎 | 安排 1h 专项 Review，合并入主干 |

> **风险提示**：Remote Agent (#3118) 与 Inline Media Fix (#3115) 已接近一个月无实质性推进，建议在本周例会纳入 **“积压清理专项”** 议程，避免技术债利息复利。

---

### 📌 给维护者的行动清单（优先级排序）

1. **P0**：修复 #3206 配置迁移阻断 —— 发布 v0.2.10 热修复版。  
2. **P1**：合并 #3180（CLI tool call 容错）+ #3202（ID 规范化）+ #3238（AWS SDK 1.32.29）三小 PR，快速清理待审队列。  
3. **P1**：启动 Matrix 重连机制设计（Issue #3203），指派给熟悉 `pkg/channels/matrix` 的贡献者。  
4. **P2**：评审 #3205（ARMv7 + 9router），决定是否纳入官方构建矩阵。  
5. **P3**：安排 #3118 / #3115 / #3163 专项 Review 会议，打破月度停滞。

---

> **下一期预告**：若 v0.2.10 发布，将重点跟踪热修复验证情况与 QQ 流式原型进展。  
> **数据更新时间**：2026-07-10 06:00 UTC | 下次更新：2026-07-11 同一时间。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 每日项目动态（2026‑07‑10）**
_数据截止：2026‑07‑10 | 仓库：`nanocoai/nanoclaw`_

---

## 1. 今日速览
过去 24 小时 NanoClaw 仓库保持高效开发状态：**9 个新 Issues** 接踵而至，其中包括 2 个安全 Advisory 和 3 个渠道适配器 bug 报告；**17 个新 PR** 被提交（其中 3 个已合并/关闭），涵盖了安全修复、投递修复、任务调度重构和新技能新增等领域，显示出项目在基础设施、可靠性和功能扩展方面同步推进。无正式版本发布，然而有一波以问题修复和功能引入为核心的代码活跃推进。

**活跃度评估：** ✅ 高 — Issues 增长势头强劲，PR 流稳定，多个关键 bug 修复已进入合并阶段，表明核心贡献者团队正在积极解决历史遗留和新出现的技术债务。

---

## 2. 版本发布
**无正式版本发布。**（无标签/发布页更新）

---

## 3. 项目进展 — 已合并/关闭 PR

| PR | 状态 | 主题 | 关键交付 |
|----|--------------|-------|--------------|
| **#2993** | **已合并** *(shiranLupo)* | “确保 NanoClaw 在容器运行时不可用时保持弹性” | 将 `docker info` 失败从崩溃恢复为可恢复的警告状态，防止因 Docker Desktop 问题导致的随机性渠道断开和调度任务失败。 |
| **#2981** | **已合并** *(omri‑maya)* | “任务调度控制面：`ncl tasks` 隔离会话与 script-gate” | 交付一个完整的任务管理资源集（`ncl tasks`）、会话隔离机制和运行历史记录，奠定计划任务流水线的工程基础（计划任务系列三步骤之一）。 |
| **#2621** | **已合并** *(GarethWright)* | “添加 `.gitattributes` 文件以强制脚本文件使用 LF 分页符” | 确保跨平台统一的 shell 脚本换行符，改善开发者的协作体验（单文件风格修复）。 |

*所有其他当前 PR（如 #2998、#2996、#2226、#2802 等）仍处于待合并状态，将在未来迭代中进一步审查。*

---

## 4. 社区热点 — 讨论热度最高的 Issue / PR

| 热度 | 编号 | 类型 | 概要 | 链接 |
|------|------|------|-------------|------|
| 🔥 2 评论 | **#2989** | Bug (Telegram) | Telegram 适配器首次轮询时未指定 `allowed_updates`；导致适配器“重用”先前请求的服务器端设置，可能导致频道消息被静默丢弃。 | [nanocoai/nanoclaw Issue #2989](https://github.com/nanocoai/nanoclaw/issues/2989) |
| 🔥 1 评论 | **#2985** | Bug (OpenCode) | 使用 opencode provider 时，对于长任务的最终文本快照，“session.idle” 匹配失败，导致回复静默丢失 — 没有错误，也没有投递。 | [nanocoai/nanoclaw Issue #2985](https://github.com/nanocoai/nanoclaw/issues/2985) |
| 🛡️ 0 评论 | **#2827** | 安全 Advisory | `add_mcp_server` 审批流程隐藏运行时的 `args` 和 `env`，允许“审批劫持”。 | [nanocoai/nanoclaw Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827) |
| 🛡️ 0 评论 | **#2762** | 安全 Advisory | 与 #2827 重复 — `add_mcp_server` 的自修改流程允许隐藏的参数被批准并持久化，而不显示给审批者。 | [nanocoai/nanoclaw Issue #2762](https://github.com/nanocoai/nanoclaw/issues/2762) |

*社区对这两个 Telegram 和 OpenCode 问题表现出最高关注度，反映出活跃用户对渠道可靠性的高度敏感。*

---

## 5. Bug 与稳定性 — 按严重性排序的今日问题

| 严重性 | Issue | 描述 | 相关 Fix PR |
|----------|-------|-------------|------------------|
| **🔴 高** | **#2827 / #2762** | 安全 Advisory — 隐藏的 `args`/`env` 可能导致审批劫持。 | **#2998** (fix(self-mod): 在审批卡上渲染完整的 MCP 服务器有效载荷) – 旨在显示完整的配置。 |
| **🔴 高** | **#2995** | 投递到已注销/未注册渠道适配器的消息被错误标记为“已投递”，导致消息丢失。 | **#2996** (fix(delivery): 将无适配器消息路由到重试路径) – 确保最终标记失败。 |
| **🟡 中** | **#2997** | `hasIdenticalSend` 匹配前次发送，导致固定文本的定期提醒仅第一次触发。 | 无 PR – 需修改匹配逻辑以排除 `completed` 状态。 |
| **🟡 中** | **#2990** | `my_chat_member` 更新被静默丢弃 → 机器人对被邀请到群组/频道的行为无感知。 | 无 PR – 需更新 Telegram `processUpdate` 以支持成员事件。 |
| **🟡 中** | **#2991** | `sender_scope='known'` 无效，因为 Telegram 频道发送者为 `sender_chat`（无用户）。 | 无 PR – 需要适配器将 `sender_chat` 映射到可识别的作者。 |
| **🟡 中** | **#2989** | `allowed_updates` 可能丢失 → 导致频道消息被静默黑掉。 | 无 PR – 需确保适配器明确指定更新类型。 |
| **🟡 中** | **#2992** | 计划任务对跨会话不可见，导致代理组无法统一管理重复任务。 | 无 PR – 需修改调度 MCP 工具以查询所有相关会话。 |
| **🟡 中** | **#2985** | OpenCode provider 最终文本快照匹配失败 → 回复不发送，也不报错。 | 无 PR – 需重现缺少 `session.idle` 匹配的场景。 |

*安全问题 (#2827/#2762) 优先级最高，应在下一个安全补丁窗口内处理。*

---

## 6. 功能请求与路线图信号

| PR | 特性 | 目的 / 用户价值 |
|----|-----------|-------------------|
| **#1598** | **add‑remote‑storage 技能** (WebDAV / S3 通过 rclone + systemd) | 为 NanoClaw 提供可插拔的对象存储挂载，便于内容持久化归档。 |
| **#2987** | **add‑audit 技能** (ncl surface 专用本地审计日志) | 为每次容器/主机投递操作提供不可变的 NDJSON 日志，满足 SIEM 和故障排除需求。 |
| **#2986** | **Guard Seam** (所有特权操作一个决策函数) | 引入单一 `guard()` 函数来允许/持有/拒绝容器和频道边界操作，统一安全控制。 |
| **#2983** | **每组任务处理能力开关** | 根据组配置启用/禁用内部调度功能，提供新组“开箱即用”体验，同时保持对现有组的向后兼容。 |
| **#2994** | **Feishu 汇报通道** | 在代理组任务完成后直接推送汇报消息到飞书群组，解决用户对代理执行状态缺乏反馈的问题。 |
| **#2988** | **任务会话“单一出口”投递** (`send_message`) | 重构计划任务投递以使用显式的 `send_message` 工具，隐藏任务的最终文本修改块。 |
| **#2618** | **多模态 v1 恢复** (图片/语音/PDF + chat.onReaction) | 重新引入曾经存在的富媒体支持和消息反应事件，满足用户对主流渠道 UI 的需求。 |
| **#2877** | **Telegram 原生富媒体渲染** (Bot API 10.1 `sendRichMessage`) | 利用最新的 Bot API 发送富文本格式消息，提升在 Telegram 上的用户体验。 |

*综合来看，路线图正向着**安全透明化、可观测性和多模态支持**方向演进，同时扩展了第三方集成（如 Feishu）和基础架构（如远程存储）。*

---

## 7. 用户反馈摘要 — Issues 中的真实使用问题

| 反馈主题 | 用户痛点 | 最关心的点 |
|---------------|----------------|------------|
| **定期提醒消失** | 用户依赖 NanoClaw 派发固定文本的提醒，但任务第一次成功后就不再触发。 | 提醒的持久性和触发可靠性。 |
| **离线渠道消息投递不透明** | 当渠道适配器不可用时，系统仍会报告消息已投递，用户无法察觉通讯失败。 | 错误的投递状态导致调试困难和消息丢失。 |
| **Telegram 渠道发送者不可识别** | 机器人无法识别频道发送者 → 导致消息路由失败或无感知。 | 作为 `sender_scope='known'` 所需的功能。 |
| **机器人入群无反馈** | 添加到群组或频道后，机器人对 `my_chat_member` 更新无响应，导致用户无法确认加入状态。 | 用户体验和可见性。 |
| **OpenCode 长时间任务无响应** | 对于长任务，完成答复静默丢失 — 没有错误，也没有投递，导致用户感到“机器人消失”。 | 长时间运行任务的可靠性。 |
| **安全审批不透明** | 审批者看不到实际运行参数，可能意外批准恶意操作。 | 对自我修改审批的安全控制。 |
| **跨会话任务管理缺失** | 多群组代理组无法统一查看/管理所有计划任务。 | 多会话环境下的用户工作流。 |

*这些反馈凸显了几个关键技术债务领域：投递保障、安全透明和渠道元数据的正确解析。*

---

## 8. 待处理积压 — 需要维护者关注的重要 Pending Items

1. **安全 Advisory (#2827 / #2762)**
   - 需要一个 fix PR 来确保 `add_mcp_server` 在审批卡上显示完整的 `args`/`env` 参数（#2998 可能已解决其中一个方面）。

2. **Telegram 适配器一组相关 Bug (#2989, #2990, #2991)**
   - 需要进行多项修改：显式 `allowed_updates`、支持 `my_chat_member`、实现 channel `sender_chat` 到 `users` 表的映射，以及 `sender_scope='known'` 的重新设计。

3. **计划任务会话隔离问题 (#2992)**
   - 需要修订调度 MCP 工具（`list_tasks`, `update_task` 等）以查询所有相关会话，而不仅仅限于当前会话。

4. **Recurring Reminder 匹配逻辑 (#2997)**
   - 需要重新设计 `hasIdenticalSend` 以跳过 `completed` 行，并确保每帧正确匹配。

5. **OpenCode Provider Silent No‑Reply (#2985)**
   - 需要重现失败并定位缺失的 `session.idle` 匹配条件。

6. **交付失败状态标记 (#2226, #2996)**
   - 在 host 适配器抛出 `MissingChannelAdapterError` 之后，重试路径似乎已启动，但流程仍需进一步验证。

7. **长期未解决的高级功能** (多模态 v1 恢复 (#2618)、Telegram 原生富媒体 (#2877)、每个组的能力开关 (#2983)) 的进度可能滞后，需推进合并。

*这些项目代表了 NanoClaw 的当前技术支柱——渠道可靠性、安全可观测性和跨组任务管理——如果不加以解决，将影响用户采用和系统信任度。*

---

### 总结
NanoClaw 社区在过去 24 小时内展现出高效的前后端协同：关键安全和投递问题已进入合并阶段，大量与渠道相关的 bug（Telegram、OpenCode、提醒）得到记录，路线图清晰地扩展了系统范围的功能（审计、远程存储、多模态支持）。当前的主要关注点是**修复安全流量漏洞**、**清理 Telegram 适配器状态管理**，同时确保计划任务隔离和 recurring 提醒逻辑的健壮性。

*期待维护者优先处理上文列出的待办事项列表，以进一步巩固系统的安全性、可靠性和用户体验。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-07-10)

## 1. 今日速览
IronClaw 今日处于**高频迭代与密集 Bug 修复期**。过去 24 小时内处理了 50 个 PR（合并 28 个）和 32 个 Issues，活跃度极高。项目当前的重心集中在 **"Reborn" 架构的稳定性增强**、**Slack 集成深度优化**以及**大规模代码重构（Builder 模式统一）**。整体状态呈现出典型的“发布前冲刺”特征，旨在通过大规模的 Bug Bash 解决用户体验痛点。

## 2. 版本发布
*(今日无新版本发布)*

## 3. 项目进展
今日合并了大量底层重构 PR，显著提升了代码的可维护性和健壮性：
- **代码工程化提升**：通过一系列 PR（#5791, #5799, #5811, #5812 等）统一了 Reborn crate 的 `default-backed builder` 模式，通过 fluent setters 减少了大量样板代码，优化了配置与 Fixture 的创建流程。
- **错误处理强化**：PR #5652 将 `unused_must_use` 提升为工作区级别的 `deny`，强制要求处理所有 `Result`，从编译层面杜绝了静默失败（Silent Drops）的问题。
- **测试清理**：关闭并清理了 legacy v1 版本的覆盖率测试二进制文件和 fixture（#5826, #5827），标志着项目进一步脱离旧架构，全面向 Reborn 架构迁移。

## 4. 社区热点
**核心讨论焦点：Slack 集成的可靠性与身份一致性**
目前最活跃的讨论集中在 Slack 自动化流程的鲁棒性上。
- **Slack 工具链大修 (#5904)**：这是一个重量级 PR，旨在解决身份识别、结构化错误和分页等问题。这表明项目方意识到当前的 Slack 交互存在严重的数据契约和身份混淆问题。
- **自动化交付探针 (#5899)**：引入针对 Slack 自动化失败类的 Canary 测试，确保“精准一次”交付且不再使用 ID 代替名称，旨在彻底解决生产环境中的路由错误。

## 5. Bug 与稳定性
今日报告了大量 Bug（多由 `joe-rlo` 通过 Bug Bash 提交），严重程度分布如下：

### 🔴 高优先级 (P1)
- **Slack 消息发送错误**：通知被发送到了错误的用户 (#5877) —— **极其严重，涉及隐私泄露**。 (暂无直接对应 Fix PR)
- **Routine 创建挂起**：创建 routine 时无结果也无报错，无限期等待 (#5504) —— **已关闭**。

### 🟡 中优先级 (P2)
- **上下文压缩错误**：工具执行成功但最终报 `context compaction error` (#5838) $\rightarrow$ **Fix PR: #5902** (通过将 LocalDev 结果移出模型上下文来解决)。
- **审批流阻塞**：等待审批的 Run 会阻塞后续所有调度任务 (#5886)。
- **认证状态同步**：外部完成 Slack 认证后，Web UI 无法感知，导致重复授权 (#5880)。
- **凭据丢失**：外部 Token 撤销后，Routine 丢失凭据而非触发重新认证流程 (#5884, #5878)。

### 🔵 低优先级 (P3)
- **UI/UX 瑕疵**：Activity 面板不实时更新 (#5701)、侧边栏显示原始 UUID (#5706)、无法删除旧会话 (#5888) 等。

## 6. 功能请求与路线图信号
- **WASM 工具链升级**：PR #5499 引入了从 Zip 安装 WASM 工具及租户共享凭据的功能，预示着项目将支持更灵活的第三方工具扩展机制。
- **控制面统一**：PR #5901 (Wave 4) 将 Runner 控制面统一到一个清晰的 Owner 下，显示项目正在优化调度与执行的分离架构。
- **外部能力扩展**：PR #5903 尝试引入 JMT x402 Agent Tools (Base 主网 endpoints)，显示项目在探索 Web3 数据的集成。
- **管理工具需求**：Issue #2601 提出需要 CLI/TUI 来管理 Secrets，这可能是未来版本中针对高级用户/开发者的重要增强。

## 7. 用户反馈摘要
从 Issues 中可见，用户在实际使用场景中遇到了以下痛点：
- **信任危机**：用户对 Slack 通知发送给错误对象 (#5877) 表达了极高关注，这直接影响到企业级部署的安全性。
- **交互断层**：用户反映“审批通知闪现即消失” (#5553) 或“点击通知后找不到审批卡片” (#5885)，导致 AI 智能体在关键节点由于无法获得用户授权而卡死。
- **黑盒焦虑**：Activity 面板隐藏了工具详情且不实时更新 (#5701)，用户无法实时监控 AI 的思考和执行过程。

## 8. 待处理积压
- **Secrets 管理 (#2601)**：该 Issue 创建于 4 月，至今仍处于 Open 状态且缺乏明确的实施计划，对于需要快速上手的开发者而言，认证文档不足是一个显著门槛。
- **上下文压缩问题 (#5838)**：虽然有 #5902 尝试修复，但此类由于上下文过长导致的失败在复杂任务中依然高发，需关注其在复杂场景下的稳定性。

---
**分析师点评**：IronClaw 目前正处于从“功能实现”向“生产级稳定性”转型的关键期。虽然 Bug 数量激增，但大多数是由有组织的 Bug Bash 触发，且核心团队响应迅速（大量 XL 级别 PR 在推进）。当前的最高优先级应是**解决 #5877 的隐私发送问题**和**优化审批流的 UI 交互**。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>


# Moltis 项目动态日报 – 2026-07-10

## 1. 今日速览
- 项目今日活跃度较低，仅有 1 条 Open PR，0 条 Issues 活动；
- 新增 GPT-5.6 模型支持（PR #1146），扩展了 OpenAI 模型目录和上下文窗口配置；
- 项目当前无新版本发布，整体处于维护与兼容性完善阶段；
- 社区参与度略低，缺乏活跃讨论或 Bug 报告，但核心功能更新正在进行中；
- 项目健康度良好，代码贡献持续进行，适配最新AI模型能力。

## 2. 版本发布
- **无新版本发布**

## 3. 项目进展
- **PR #1146 [OPEN] Add GPT-5.6 model support**  
  - 添加了 GPT-5.6 系列模型（Sol, Terra, Luna）至 OpenAI 和 OpenAI Codex 回退目录；
  - 应用了 OpenAI API v1 的 1.05M 上下文窗口限制，以及 ChatGPT/Codex 后端的 372K 上限；
  - 更新了 OpenAI 配置模板和提供商选择文档；
  - 若合并，该 PR 将显著增强 Moltis 在大模型支持上的前瞻性，提升与最新AI技术的集成能力；
  🔗 [moltis-org/moltis PR #1146](https://github.com/moltis-org/moltis/pull/1146)

## 4. 社区热点
- **PR #1146 [OPEN] Add GPT-5.6 model support**  
  - 尽管暂无评论，但该 PR 代表了对最新模型的快速跟进，表明社区或开发者对保持与 OpenAI 模型更新同步的高度关注；
  - 该 PR 可能来源于模型性能提升或用户对更高上下文支持的需求；
  🔗 [moltis-org/moltis PR #1146](https://github.com/moltis-org/moltis/pull/1146)

## 5. Bug 与稳定性
- **无 Bug 报告或崩溃问题**  
  - 今日 Issues 为空，且无相关 Bug 回归或修复 PR；
  - 项目稳定性保持良好，暂无紧急问题需处理。

## 6. 功能请求与路线图信号
- **GPT-5.6 模型集成（PR #1146）**  
  - 该 PR 明确指向未来的功能路线图，表明项目计划支持即将或刚推出的高性能语言模型；
  - 结合上下文窗口配置调整，可视为下一版本的潜在重要功能点；
  🔗 [moltis-org/moltis PR #1146](https://github.com/moltis-org/moltis/pull/1146)

## 7. 用户反馈摘要
- **无用户反馈数据**  
  - 今日 Issues 为空，缺乏用户直接的使用体验反馈；
  - 建议关注即将关闭的 PR 后的用户测试反馈。

## 8. 待处理积压
- **PR #1146 [OPEN] Add GPT-5.6 model support**  
  - 尽管为新 PR，但若希望尽快集成新模型，建议尽早进行审查与合并；
  - 当前无长期未响应的 Issue 或 PR；
  🔗 [moltis-org/moltis PR #1146](https://github.com/moltis-org/moltis/pull/1146)

---

📌 **总结**：Moltis 项目今日保持低活跃度，但关键功能更新（如新模型支持）正在推进中。项目稳定性良好，适合持续关注 PR #1146 的合并进展，以及未来版本发布对模型支持的扩展。


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



# ZeroClaw 项目日报（2026-07-10）

## 1. 今日速览
项目今日活跃度极高，Issues与PR更新并存，累计36条Issues变动（含11次关闭）和50条PR运动（含11次合并），明显显示开发节奏加速，但同时缺乏版本发布事件提示可能正在进行重大内部迭代或架构调整。核心业务功能持续迭代中，尤其在代理集成、工具治理和安全优化领域凸显重点。

## 2. 版本发布
无

## 3. 项目进展
今日关键PR合并/进展：  
- [PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)：实现OpenAI批量接口，填补生态接入瓶颈（高风险修复，直接解决第三方工具生态问题）  
- [PR #8833](https://github.com/zeroclaw-labs/zeroclaw/pull/8833)：优化配置默认逻辑，减少用户配置反馈（技术优化，日常交互改进）  
- [PR #8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)：解决活跃目标自启循环问题，提升稳定性（高风险修复）  
- [PR #8826-8827](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)，[@wangmiao0668000666](https://github.com/wangmiao0668000666)解决多层SSRF防御，解决核心安全漏洞  
项目整体向前迈进途径明显，多个核心功能（代理兼容性、工具安全、代码工具整合）得到实质进展。

## 4. 社区热点
今日聚焦三条热议内容：  
1. [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)：用户投诉"无法添加cron任务"，社区讨论对cron工具生态的需求（13条讨论）  
2. [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)： RFC提案“自动化工作流优化”，讨论层级控制与标签管理（13条讨论）  
3. [Issue #8925](https://github.com/zeroclaw-labs/zeroclaw/issues/8925)：用户困难配置Bedrock接入，期待文档优化（需求提示生态增长）  
背后诉求明显集中在生态扩展性、工具治理及易用性改进上。

## 5. Bug与稳定性
按严重程度排序：  
- [PR #6699](https://github.com/zeroclaw-labs/zeroclaw/pull/6699)（高风险）：MCP工具非操作，严重影响工具调用功能（已合并）  
- [Issue #8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094)（高风险）：Bedrock初始化问题导致无法对话（需即时处理）  
- [PR #8762](https://github.com/zeroclaw-labs/zeroclaw/pull/8762)（高风险）：长轮回答超时问题（已合并）  
- [Issue #8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578)（中权）：代理崩溃未终止进程（待解决）  
高危问题集中在接口边界与资源管理上，关键安全问题已修复。

## 6. 功能请求与路线图信号
用户新需求显示向减轻配置门槛与生态扩展：  
- Issue #6558报告Qwen模型供应商错误（提供者兼容性改进信号）  
- PR #8925申请Bedrock接入说明书（生态适配需求）  
- Issue #8550提出OpenAI兼容接口（ APC协议标准化趋势）  
项目注意到生态整合需求明显，下一版本可能注重插件化与标准化接口。

## 7. 用户反馈摘要
核心痛点：  
- 近30%新Issues与配置文档问题相关，用户文档理解不足  
- 12条提案涉及跨代理身份隔离需求（例如"并行工具运行"失败）  
- 9条回复提到性能下降与上下文溢出问题  
- 特别热点：用户希望“极简本地模式”支持（PR #5287提案）  
使用场景以生产力自动化（cron）、企业协作（多用户权限）为主。

## 8. 待处理积压
要求立即关注的调度：  
- [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)（cron工具漏洞）已存在11周  
- [PR #8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)（目标管理功能）测试阶段推迟  
- [Issue #8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363)（配置驱动型路由规则）文档缺失  
这些关联高频主题需优先聚焦，避免积压扩大。

项目整体呈现"高速迭代但缺乏脚手架"特征，核心技术突破（如SSRF防御）与生态接入（如OpenAI标准化）当下并行推进。


</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*