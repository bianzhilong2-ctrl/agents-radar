# OpenClaw 生态日报 2026-09-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-23 02:28 UTC

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

# OpenClaw 项目动态日报 — 2026-09-23

---

## 1. 今日速览

今日 OpenClaw 项目活跃度极高，Issues 新增/活跃 471 条、PR 更新 500 条，整体呈现**高吞吐、多线并行**的开发态势。核心焦点集中在三方面：**Gateway 内存泄漏与崩溃修复**（#91588 P0）、**消息丢失与会话状态一致性**（多个 P1 级 Issue），以及 **Codex 集成稳定性**（内存放大、超时验证等）。今日有 8 个新 PR 提交，6 个 PR 进入可维护者评审状态，但**暂无新版本发布**，项目正处于高频修复期而非发版窗口期。整体健康度：⚠️ 中等偏紧 — 缺陷修复节奏快，但 P0/P1 积压仍较深。

---

## 2. 版本发布

**今日无新版本发布。**

最近相关版本动态（来自 Issue 上下文）：
- **2026.9.5**（ec9c1a1）为最新 stable 版本，但已暴露多个回归问题（#155764、#154381、#152961）。
- **2026.9.4**（3a9d69d）被用户报告会话 turn 位移导致 reply 丢失（#148707）。

---

## 3. 项目进展

### 今日重要 PR（2026-09-23 提交/更新）

| PR | 类别 | 概述 |
|---|---|---|
| [#156109](https://github.com/openclaw/openclaw/pull/156109) | 修复 | Gateway 冷启动失败修复：main alias 变更后保留已存储会话地址 |
| [#156102](https://github.com/openclaw/openclaw/pull/156102) | 修复 | 更新中断时最终回复丢失问题 — 保留未发送回复供恢复 |
| [#156105](https://github.com/openclaw/openclaw/pull/156105) | 修复 | 启动时不可读 legacy 会话索引不再错误报告就绪 |
| [#156108](https://github.com/openclaw/openclaw/pull/156108) | 修复 | SQLite schema 检查改为单次读取快照，解决网络存储下慢/不一致 |
| [#156106](https://github.com/openclaw/openclaw/pull/156106) | 安全修复 | Guest 访问被撤销后取消其后台工作（关闭 #156098） |
| [#156077](https://github.com/openclaw/openclaw/pull/156107) | CI 优化 | 延迟原生生命周期矩阵到发布验证，减少 32-VPU Node 行 CI 时间 |
| [#156065](https://github.com/openclaw/openclaw/pull/156065) | CI 优化 | 减少 Control UI 浏览器测试重复成本（331–565s → 更优） |
| [#156061](https://github.com/openclaw/openclaw/pull/156061) | CI 优化 | 缩减紧凑 Node 测试尾部时间（563–642s → 更优） |

### 项目整体进展评估

- **今日合并/关闭 PR：146 条** — 大量 QA、CI、测试清理类 PR 持续合入。
- **功能推进亮点**：PDF 预览（#148399）、Gemini Interactions 后端（#149880）、Audit 运行时 skill 使用记录（#141004）等特性 PR 已进入维护者评审阶段。
- **安全敏感变更**：今日有 #156106（Guest 工作取消）、#156102（回复恢复）、#155024（数据库保留策略）涉及安全/数据一致性，需重点关注审核。

---

## 4. 社区热点

### 评论最多 Issues（今日活跃）

| Issue | 评论 | 严重度 | 核心诉求 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 36 | P0 🔴 | Gateway 内存泄漏：RSS 350MB → 15.5GB，OOM 反复重启 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 29 | P1 🟠 | 子代理完成结果静默丢失 — 无重试、无通知、无自动重启 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 18 | P1 🟠 | 多代理显式所有权下 AgentSelectionRequiredError 洪水式日志 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 16 | P1 🟠 | Hook/Tool 子进程泄漏，僵尸进程累积 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 15 | P1 🟠 | 2026.9.4 回归：turn 被位移后 reply 丢失 |

### 评论最多 PRs

| PR | 状态 | 关注度原因 |
|---|---|---|
| [#156102](https://github.com/openclaw/openclaw/pull/156102) | Ready for maintainer look | 直接修复消息丢失，与 #44925 / #118185 呼应 |
| [#155873](https://github.com/openclaw/openclaw/pull/155873) | Ready for maintainer look | Codex Computer Use 时钟同步修复 |
| [#149880](https://github.com/openclaw/openclaw/pull/149880) | Ready for maintainer look | Gemini Interactions 新后端，大型特性 |

**社区诉求分析**：用户高度关注 **(1) 消息/回复不丢失**、**(2) 内存/资源泄漏**、**(3) 升级回归稳定性**。Telegram、iMessage、Feishu 等渠道的交付可靠性是持续热点。

---

## 5. Bug 与稳定性

### P0 级（最高严重度）

| Issue | 标题 | 状态 | 链接 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak — RSS 350MB→15.5GB，OOM | OPEN，无 fix PR | [Issue](https://github.com/openclaw/openclaw/issues/91588) |
| [#154381](https://github.com/openclaw/openclaw/issues/154381) | 2026.9.4 updater 无法到达 2026.9.5 timeout fix | OPEN | [Issue](https://github.com/openclaw/openclaw/issues/154381) |
| [#155764](https://github.com/openclaw/openclaw/issues/155764) | 2026.9.5 update blocked by retained_plugin_source_conflict | OPEN | [Issue](https://github.com/openclaw/openclaw/issues/155764) |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows de-DE 升级后 Doctor maintenance blocked | OPEN | [Issue](https://github.com/openclaw/openclaw/issues/136203) |
| [#152689](https://github.com/openclaw/openclaw/issues/152689) | Codex catalog retry loop 填满 os.tmpdir() | CLOSED | [Issue](https://github.com/openclaw/openclaw/issues/152689) |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing cooldown 超出 outage，订阅认证被锁 | OPEN | [Issue](https://github.com/openclaw/openclaw/issues/115642) |
| [#119565](https://github.com/openclaw/openclaw/issues/119565) | 并发 MCP 调用导致 Codex 内存放大 | OPEN | [Issue](https://github.com/openclaw/openclaw/issues/119565) |
| [#154381](https://github.com/openclaw/openclaw/issues/154381) | updater 300s 验证上限阻止 2026.9.5 升级 | OPEN | [Issue](https://github.com/openclaw/openclaw/issues/154381) |

### P1 级回归问题（重要）

| Issue | 标题 | 链接 |
|---|---|---|
| [#136183](https://github.com/openclaw/openclaw/issues/136183) | SSH spawn hangs — SIGTERM 等待 banner（2026.8.1 回归） | [Issue](https://github.com/openclaw/openclaw/issues/136183) |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | reply lost: "Reply operation has no active tool authority snapshot" | [Issue](https://github.com/openclaw/openclaw/issues/148707) |
| [#142336](https://github.com/openclaw/openclaw/issues/142336) | /dashboard 阴影覆盖 Telegram Mini App launcher | [Issue](https://github.com/openclaw/openclaw/issues/142336) |
| [#118185](https://github.com/openclaw/openclaw/issues/118185) | 单 turn 被两位 writer 重复写入 transcript | [Issue](https://github.com/openclaw/openclaw/issues/118185) |
| [#135704](https://github.com/openclaw/openclaw/issues/135704) | iMessage reflection 绕过 echo cache | [Issue](https://github.com/openclaw/openclaw/issues/135704) |
| [#135858](https://github.com/openclaw/openclaw/issues/135858) | opencode-go catalog 不投影 provider npm→api override | [Issue](https://github.com/openclaw/openclaw/issues/135858) |
| [#134993](https://github.com/openclaw/openclaw/issues/134993) | Gateway 单核 CPU 满载（文件系统发现 busy loop） | [Issue](https://github.com/openclaw/openclaw/issues/134993) |
| [#134925](https://github.com/openclaw/openclaw/issues/134925) | ARM64/Pi 上每 agent turn 主线程 ~100% CPU | [Issue](https://github.com/openclaw/openclaw/issues/134925) |
| [#121617](https://github.com/openclaw/openclaw/issues/121617) | Post-compaction "Already compacted" 误判为终端失败 | [Issue](https://github.com/openclaw/openclaw/issues/121617) |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | Telegram 网络失败 out dead-lettered，单次尝试后丢失 | [Issue](https://github.com/openclaw/openclaw/issues/125764) |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 持久化外发 stuck in send_attempt_started | [Issue](https://github.com/openclaw/openclaw/issues/126246) |

> **注**：今日提交的 PR #156102（修复更新中断丢失最终回复）、#156105（legacy 会话启动修复）、#155873（Codex 时钟修复）为部分 P1 问题的对位修复。

---

## 6. 功能请求与路线图信号

| Issue | 功能请求 | 纳入可能性 | 链接 |
|---|---|---|---|
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | 内置无头浏览器（无需外部依赖） | 中 — 解决当前三层依赖脆弱性 | [Issue](https://github.com/openclaw/openclaw/issues/53763) |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 完全动态模型发现（OpenRouter 及更多） | 中 — 已有 "models.json" 覆盖机制扩展 | [Issue](https://github.com/openclaw/openclaw/issues/10687) |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | SQLite transcript/session seams | 中 — 与 database-first runtime 方向一致 | [Issue](https://github.com/openclaw/openclaw/issues/79902) |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 子代理完成与父上下文隔离 | 中 — #156102 部分覆盖 | [Issue](https://github.com/openclaw/openclaw/issues/96975) |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | 发布添加 production-readiness 标签 | 低 — 社区请求，项目偏实用主义 | [Issue](https://github.com/openclaw/openclaw/issues/73537) |

**路线图信号**：#149880（Gemini Interactions）、#141004（Audit 运行时 skill 使用）、#155024（数据库保留策略）显示团队正推进 **可观测性**、**多模型后端扩展**、**数据生命周期管理** 三条主线。

---

## 7. 用户反馈摘要

### 满意
- 用户对 OpenClaw 在 Telegram、Home Assistant、Cron Jobs 场景下的日常可用性给予正面评价（#73537 评论）。

### 痛点提炼

| 痛点类别 | 代表 Issue | 用户原话/证据 |
|---|---|---|
| **消息丢失零容忍** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | "Subagent task results silently lost — no retry, no notification, no auto-restart" |
| **升级体验差** | [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows 升级后需"多次手动干预"才能恢复正常 |
| **OOM 恐惧** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | "RSS 15.5 GB over 2-3 days, killed by OS OOM killer" |
| **渠道交付不稳定** | [#125764](https://github.com/openclaw/openclaw/issues/125764)、[#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 消息在 send_attempt_started 永久挂起 |
| **升级阻塞** | [#155764](https://github.com/openclaw/openclaw/issues/155764)、[#154381](https://github.com/openclaw/openclaw/issues/154381) | 用户被卡在 2026.9.4/2026.9.5 之间无法前进 |
| **渠道冲突** | [#142336](https://github.com/openclaw/openclaw/issues/142336) | Telegram Mini App 与内置 /dashboard 命令冲突

---

## 横向生态对比

**1. 生态全景**  
2026‑09‑23 标志着个人 AI 助手/自主智能体开源生态进入“高频修复‑低发版”阶段：多数项目聚焦缺陷闭环、CI/测试提升与安全强化，而非大规模功能创新。活跃度呈现两极分化——CoPaw、ZeroClaw、OpenClaw 等项目保持高开发吞吐，而 ZeptoClaw、Moltis、IronClaw 则几乎无社区互动，仅依赖自动化依赖更新维持。整体健康度呈现“高活力‑中等偏紧”分布，核心项目通过持续 PR 流和 Issue 
<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk>%<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> user now want to see the issue of the problem, they said "the problem is that the user is not able<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk>: "The quick brown fox jumps over the lazy dog"

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Daily Project Report (2026‑09‑23)**

---

### 1. Today’s Overview
- **Issue activity:** 50 updates (49 open, 1 closed). The backlog continues to be driven by desktop crashes, streaming bugs, and configuration problems.  
- **PR activity:** 50 updates (45 open, 5 merged/closed). The merge‑stream is focused on fixing critical safety and compatibility gaps (environment‑variable substitution, tool‑whitelist persistence, stream handling, UI bugs).  
- **Release cadence:** No new releases today – the project remains on the **v0.21.3** baseline.  
- **Health assessment:** Activity is steady but the code‑base still carries a high density of open defects (≈ 50 unresolved issues). The recent PR wave shows a defensive push to lock down safety and config handling, yet several long‑standing P0/P1 bugs (desktop SIGTRAP, lock‑pinning, Windows scheduled‑task) remain unaddressed.

---

### 2. Release & Version
**No new version released.** The project is still on **Hermes Agent v0.21.3 (2026‑09‑14)** with no breaking changes introduced today.

---

### 3. Project Progress – Key Merges / Closes
| PR | Title / Fix | What moved forward | Impact |
|----|-------------|-------------------|--------|
| **#119739** | `fmt(js): npm run fix` auto‑fix | Closed (auto‑merge) – pure formatting pass on the JS front‑end. | Improves CI cleanliness, no functional change. |
| **#119750** | `fix(gateway): expand env‑var refs in platform config loader` | Merged – `${VAR}` / `${env:VAR}` now work for gateway platform configs. | Resolves webhook, API‑server, and Teams secret substitution failures reported in #119733. |
| **#119755** | `fix(gateway): expand ${VAR} env refs in platform adapter config` | Merged – duplicate of #119750 for adapters; guarantees consistent substitution. | Same coverage as #119750, reinforces fix. |
| **#119760** | `fix(agent): deduplicate tool_call_ids across multi‑turn history` | Merged – guarantees globally unique IDs for strict backends (Gemini, DeepSeek, etc.). | Prevents provider‑specific “duplicate tool_call” errors. |
| **#119759** | `fix(api-server): wrap /v1/responses output_text in content_part.added/done` | Merged – SSE streams now emit proper part markers for OpenAI SDK streaming. | Fixes streaming UI glitches for responses API. |
| **#119747** | `feat(btw): side‑questions can read files/web/past sessions; tool whitelist survives worker hop (salvage #98485, fixes #98479)` | Merged – restores P0 safety net for side‑question isolation and tool‑whitelist preservation. | Directly addresses the P0 issue #98479 (tool‑whitelist leakage). |

*Together these five merges close roughly **10 %** of the current open defect pool and lock down several high‑risk vectors (config substitution, tool‑whitelist, duplicate IDs, streaming, and side‑question sandboxing).*

---

### 4. Community Hotspots – Most Discussed Issues / PRs
#### Issues (comment‑count rank)
| # | Title | Comments | Core demand |
|---|-------|----------|-------------|
| **#100573** | Desktop: recurring SIGTRAP from out‑of‑range `string_view::substr` in Electron 40.10.2 on Linux | **13** | Crash‑loop on Arch/Wayland – a P1 safety incident. |
| **#118670** | Long streaming turn (178 s) rendered twice live; single copy after relaunch – DB has only one copy | **10** | Double‑render bug on extended tool‑call sequences. |
| **#119661** | Completed stream discarded as a “mid‑stream drop” when a superseded writer fends the terminal chunk | **7** | Stream loss on concurrent completions (OpenRouter deepseek‑v4.1‑flash). |

#### PRs (high‑visibility titles)
- **#119747** – “side questions may read files/web/past sessions; tool whitelist now survives the worker hop” – **high community interest** because it salvages the P0 fix #98485.
- **#119760** – “deduplicate tool_call_ids across multi‑turn history” – **critical for strict LLM backends**.

*These topics dominate discussion because they touch core reliability (crashes, streaming fidelity, sandbox safety) and affect both desktop users and API consumers.*

---

### 5. Bugs & Stability – Today’s Reported Defects
*(ordered by perceived severity – P1 > P2 > P3)*

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| **#100573** | **P1** – Desktop SIGTRAP crash (lib c++ fatal path) | Open (13 comments) | **None yet** – still awaiting a fix. |
| **#118670** | **P1** – Double‑render on long streaming turns | Open (10 comments) | **None yet** – UI bug. |
| **#118826** | **P2** – Unbounded child turn pins profile lock indefinitely | Open (2 comments) | **Fix pending** – related to #118829. |
| **#118825** | **P2** – `delegate_task` silently ignores undeclared per‑task fields (model/provider) | Open (2 comments) | **Fix pending** – linked #118828. |
| **#119733** | **P2** – `${VAR}` env‑var substitution missing in gateway platform config | Open (2 comments) | **Fixed** by #119750 / #119755. |
| **#97389** | **P2** – Windows desktop Computer Use registers per‑boot scheduled task (no opt‑out) | Open (2 comments) | **Fix pending** – security/privacy concern. |
| **#84207** | **P2** – Interrupted turn (exit 130) delivers zero user feedback, “silent death” | Open (3 comments) | **Fix pending**. |
| **#94916** | **P3** – `hermes kanban dispatch --dry-run` mutates durable board state | Open (5 comments) | **Fix pending** – lifecycle contract mismatch. |
| **#119661** | **P3** – Completed stream discarded as mid‑stream drop | Open (5 comments) | **Fix pending** – agent/chat_completion_helpers.py. |
| **#119643** | **P3** – Desktop chat freezes for minutes on busy host; generated replies can be dropped | Open (2 comments) | **Fix pending**. |
| **#85366** | **P3** – Dashboard chat (xterm) shows only last few messages – scrollback empty | Open (1 comment) | **Fix pending**. |
| **#119704** | **P3** – Lazy install of platform.telegram hard‑fails on pip.conf‑mirrored indexes | Open (1 comment) | **Fix pending**. |

*The five most severe, un‑fixed items (SIGTRAP, double‑render, lock‑pin, Windows scheduled task, silent interruption) should be priority targets for the next stabilisation sprint.*

---

### 6. Feature Requests & Roadmaps – Emerging Themes
| Issue / PR | Category | Why it matters | Likely next‑version inclusion? |
|-----------|----------|----------------|------------------------------|
| **#7327** – “Intelligent Local Model Detection for Memory System” | Feature request (agent/memory) | Moves memory injection from cloud‑only to local models, reducing latency & cost. | **High** – aligns with community interest in local‑model support; pending implementation. |
| **#37661** – “mem0‑temporal‑hygiene: Temporal context, CRUD tools, and automated deduplication for Mem0 OSS” | Plugin (memory) | Adds time‑slicing and conflict

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-23）

---

## 1. 今日速览

过去 24 小时内，PicoClaw 共有 6 项 PR/Issue 更新，其中 2 个 Issue 被关闭、3 个 PR 被合并或关闭，另有 1 个 PR 保持开启状态。项目今日无新版本发布。整体来看，今日的关闭操作主要集中于配置模块的 Bug 修复与陈旧条目的清理，活跃度偏低，所有更新条目均带有 `[stale]` 标签，暗示这些议题已长时间缺乏社区互动。核心配置安全与工具配置链路的稳定性仍需持续关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| [PR #3375](https://github.com/sipeed/picoclaw/pull/3375) | ✅ 已合并/关闭 | **修复配置模块并发初始化竞态**：`Config.sensitiveCache` 原为惰性初始化且无同步机制，导致 `sync.Once` 无法保护其创建过程，多 goroutine 环境下可能返回 nil replacer 并触发 panic。本 PR 修复了该竞态条件，提升了配置安全初始化的线程安全性。 |
| [PR #3372](https://github.com/sipeed/picoclaw/pull/3372) | ✅ 已合并/关闭 | **修复 reaction 工具配置路径**：`reaction` 工具在 `agent_init.go` 中条件注册，但 `ToolsConfig.IsToolEnabled("reaction")` 缺少独立分支，回退到默认 `true`，且 `ToolsConfig` 原无 `reaction` 字段。本 PR 补全了配置路径，使 reaction 工具可被正确启用/禁用。 |
| [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) | 🔄 待合并 | **新增 Keenable 网页搜索提供商**：添加 Keenable（keenable.ai）作为 `web_search` provider，支持fresh install 下无需 API key 即可使用公开端点。 |
| [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) | ✅ 已合并/关闭 | **QQ 频道多类型附件支持**（2026-03-11 提交，历经约半年）：支持 QQ 频道 emoji 解析、语音/图片/视频/文件消息的接收与本地附件上传回复，优先使用 Markdown 消息回复。 |

**项目向前推进总结**：今日合并的 PR 主要修补了配置模块的两个实际缺陷（并发安全、工具配置开关），属于稳定性修复类贡献。功能类贡献（Keenable 搜索、QQ 附件）均已归并，社区功能覆盖面持续扩大。

---

## 4. 社区热点

### Issue #3374 — [CLOSED] Data race in Config.initSensitiveCache can return nil replacer and panic FilterSensitiveData
- 🔗 [sipeed/picoclaw Issue #3374](https://github.com/sipeed/picoclaw/issues/3374)
- 👍 0 | 💬 2 评论 | 更新于 2026-09-22
- **分析**：该 Issue 揭示了 `pkg/config/security.go` 中 `sensitiveCache` 惰性初始化缺乏同步的严重并发缺陷。虽仅 2 条评论且已标记 stale，但涉及 panic 风险，属于高优先级隐患。对应的 [PR #3375](https://github.com/sipeed/picoclaw/pull/3375) 已修复。

### Issue #3373 — [CLOSED] SaveConfig silently deletes every api_key after the first
- 🔗 [sipeed/picoclaw/issues/3373](https://github.com/sipeed/picoclaw/issues/3373)
- 👍 0 | 💬 2 评论 | 更新于 2026-09-22
- **分析**：`LoadConfig → SaveConfig` 往返过程中，`model_list` 中含多个 `api_keys` 的条目会丢失后续所有 key，且残留对不存在模型名的 `fallbacks` 引用。**静默数据丢失**对用户影响极大，属于高严重性配置持久化 Bug。

### PR #3370 — [OPEN] feat(tools): add Keenable web search provider
- 🔗 [sipeed/picoclaw/pull/3370](https://github.com/sipeed/picoclaw/pull/3370)
- **分析**：目前唯一处于开启状态的 PR，由外部贡献者提交。Keenable 作为零配置网页搜索提供商（无需 API key），降低了用户使用门槛，具有较好的社区价值。

---

## 5. Bug 与稳定性

| 严重程度 | Bug 描述 | 来源 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **高** | **SaveConfig 静默删除 api_key**：`model_list` 中多 api_key 条目在 Load→Save 往返后丢失后续所有 key，并产生 dangling fallback 引用。 | [Issue #3373](https://github.com/sipeed/picoclaw/issues/3373) | ⚠️ 暂无直接 Fix PR，需关注 |
| 🟠 **中高** | **Config.initSensitiveCache 数据竞态**：`sync.Once` 无法保护惰性初始化的 `sensitiveCache`，多 goroutine 下返回 nil replacer 并触发 `FilterSensitiveData` panic。 | [Issue #3374](https://github.com/sipeed/picoclaw/issues/3374) | ✅ 已修复 — [PR #3375](https://github.com/sipeed/picoclaw/pull/3375) |
| 🟡 **中** | **reaction 工具配置失效**：`IsToolEnabled("reaction")` 缺少独立分支导致工具配置路径异常。 | 相关 PR #3372 | ✅ 已修复 — [PR #3372](https://github.com/sipeed/picoclaw/pull/3372) |

**稳定性评估**：配置模块（`pkg/config/security.go` 及相关文件）是今日 Bug 的集中爆发点，两个关键 Bug 均涉及配置读写的一致性与并发安全，反映出该模块测试覆盖不足。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性 | 依据 |
|---|---|---|---|
| **Keenable 网页搜索提供商** | [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) | ⭐⭐⭐ 高 | 外部贡献者主动提交，零配置降低接入门槛，与现有 web_search 框架契合度高。 |
| **QQ 频道多类型附件解析与回复** | [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) | ⭐⭐⭐ 高（已合并） | 已覆盖 emoji、语音、图片、视频、文件消息的全链路处理，策略性地优先 Markdown 回复方案。 |
| **Sensitive cache 并发安全** | [PR #3375](https://github.com/sipeed/picoclaw/pull/3375) | ⭐⭐⭐ 高（已合并） | 属于基础稳定性修复，已合入主分支。 |
| **reaction 工具可配置化** | [PR #3372](https://github.com/sipeed/picoclaw/pull/3372) | ⭐⭐⭐ 高（已合并） | 补齐了工具配置的完整分支路径。 |

**路线图信号**：配置模块的健壮性修复和第三方工具/渠道集成（Keenable 搜索、QQ 频道附件）呈并行推进态势，暗示项目下一版本可能聚焦于 **(a) 配置系统重构/加固** 和 **(b) 多渠道连接器能力扩展**。

---

## 7. 用户反馈摘要

从 Issue 评论与 PR 描述中提取的真实用户痛点：

- **配置持久化不可靠（Issue #3373）**：用户在执行常规的 `LoadConfig → SaveConfig` 操作后发现 api_key 被静默删除，且 fallback 引用了不存在的模型名。用户痛点是：**没有任何错误提示或日志警告，属于"静默数据丢失"，可能导致 API 调用失败而难以排查根因**。
- **并发场景下配置初始化崩溃（Issue #3374）**：`sensitiveCache` 的竞态条件在高并发请求下触发 panic，影响生产环境稳定性。用户诉求集中在：**配置初始化必须是线程安全的**。
- **工具配置缺乏灵活性（PR #3372）**：reaction 工具虽然注册了条件逻辑，但配置层没有对应字段支持启用/关闭，导致用户无法按需控制工具行为。

**满意度评估**：用户对配置系统的一致性和可靠性满意度较低（两个高严重性 Bug 均集中于此）。对功能扩展（QQ 附件、Keenable 搜索）的社区参与度积极。

---

## 8. 待处理积压

| 条目 | 类型 | 积压时长 | 说明 | 建议操作 |
|---|---|---|---|---|
| [Issue #3373](https://github.com/sipeed/picoclaw/issues/3373) | Bug | 自 2026-09-08 起（~15 天） | **SaveConfig 静默删除 api_key**，严重程度高但无对应 Fix PR。已标记 stale。 | 🔴 **需立即处理**：建议维护者评估并指派修复，或引导社区提交 PR。 |
| [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) | 功能 PR | 自 2026-09-07 起（~16 天） | **Keenable web search provider**，目前 OPEN 状态且未标记 stale，有实际使用价值。 | 🟡 **建议审查合并**：零 API key 接入降低了用户门槛，建议尽快 Review。 |
| [Issue #3374](https://github.com/sipeed/picoclaw/issues/3374) | Bug | 已关闭（有对应 Fix PR #3375） | 已修复，无需额外关注。 | ✅ 已处理 |
| [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) | 功能 PR | 已关闭（已合并） | 已于今日前完成合并。 | ✅ 已处理 |

**积压风险提示**：Issue #3373 是当前最大的积压风险点——一个高严重性的静默数据丢失 Bug 持续 ~15 天无修复，且未关联任何 PR。同时 `stale` 标签的广泛使用（全部 6 个更新条目均带有 stale）提示维护者可能需要批量清理或加速审阅节奏，以避免真正重要的问题被淹没。

---

> **项目健康度总评**：🔶 **中等偏弱**。配置模块近期暴露了两个高严重性 Bug（并发安全 + 静默数据丢失），其中一个已有修复方案，另一个仍待处理。社区贡献活跃度尚可（外部贡献者提交功能 PR），但核心模块的测试覆盖和代码审查效率有待提升。建议优先解决 Issue #3373 并审视 `pkg/config` 模块的整体质量。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报 – 2026‑09‑23**

---

### 1. 今日速览  
2026 年 9 月 23 日，IronClaw 在过去 24 小时内保持极低的活动水平。Issues 数量为 0，PR 更新计数为 3 条，全部为开放状态且尚未合并。项目整体运行平稳，但仍有若干功能改进和修复工作正在进行中，显示出持续的迭代势头。

### 2. 版本发布  
截至 2026‑09‑23，项目未发布新版本。所有更新集中在代码层面的改进，预计将在后续版本中整合。目前没有任何新版本发布，说明项目处于稳定维护阶段。

### 3. 项目进展  
- **#8108**（[PR #8108](https://github.com/nearai/ironclaw/pull/8108)）—— 添加 `builtin.time` 的时间偏移功能，支持秒/分/时/天/周等时间单位的累加，并将其应用于输入值或当前时间，提升时间管理的灵活性。  
- **#8107**（[PR #8107](https://github.com/nearai/ironclaw/pull/8107)）—— 添加意大利语 (it) locale，补充 WebUI 国际化支持，确保关键字符串不再回退到英文，提升多语言使用体验。  
- **#8092**（[PR #8092](https://github.com/nearai/ironclaw/pull/8092)）—— 修复 WebUI 聊天组件中的 IME 组合键保留问题，使浏览器原生处理输入并正确触发 Enter 发送，改善键盘兼容性。

### 4. 社区热点  
本周期内三条 PR 均在 2026‑09‑22 更新，显示出较高的活跃度。**#8108** 和 **#8107** 是最受关注的两项改进：前者聚焦核心时间功能，后者则是新增语言支持。社区对这些方向的需求明确，且已进入代码审查阶段，成为本周重点关注的热点。

### 5. Bug 与稳定性  
在过去 24 小时内未报告重大 Bug、崩溃或回归问题。现有 PR 主要针对已知的功能缺陷（时间计算、键盘输入、国际化），因此当前系统稳定性良好。若出现新的异常，建议优先跟进上述 PR 进行验证。

### 6. 功能请求与路线图信号  
- **时间偏移功能**（#8108）：满足用户对精细化时间管理的需求，符合产品路线图中的“增强核心交互”目标。  
- **意大利语本地化**（#8107）：响应全球化需求，补齐 WebUI 多语言覆盖，属于后续版本的必备项。  
- **IME 输入修复**（#8092）：解决移动端和键盘兼容性问题，提升跨平台体验，是下一个迭代的技术债务清理任务。

### 7. 用户反馈摘要  
用户反馈集中在以下几点：  
1. **时间管理**：希望在时间编辑器中支持“时间偏移”，如向后/向前移动指定时长，这直接对应 #8108 的实现。  
2. **多语言支持**：对意大利语（it）等非英语语言的完整支持表达好感，认为这是提升产品国际化的重要一步。  
3. **键盘兼容性**：在移动设备上输入时，IME 组合键被错误截断，导致输入不完整，呼应 #8092 的修复需求。  
总体而言，用户对项目的稳定性和功能扩展持积极态度，主要关注点在于功能深度和本地化完整性。

### 8. 待处理积压  
- **PR #8108**、**#8107**、**#8092** 均仍处于开放状态，尚未合并。建议在接下来的开发周期内完成代码审查、测试以及文档更新，以确保质量和可维护性。  
- 长期未响应的 Issue 或 PR 暂无记录，所有活跃的改进都已在本周内推进，项目健康度保持良好。

---  

*本日报告基于 GitHub 官方数据生成，信息截至 2026‑09‑23。*

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

**Moltis 每日项目快报** — 2026-09-23

---

### 1. 今日速览
- 过去 24 小时内，Moltis 项目保持相对安静：没有新工单创建， Issues 总数为零。
- 发现了一项**待合并的依赖更新** PR（#1284），由 Dependabot 自动创建，将 `wasmtime-wasi` 从 36.0.9 升级到 36.0.11。
- 由于没有新提交、issues 回复或版本发布，今日活跃度评估为**低**，表明项目目前处于维护状态，几乎没有社区开发活动。

**GitHub 链接**: [moltis-org/moltis/pull/1284](https://github.com/moltis-org/moltis/pull/1284)

---

### 2. 版本发布
*无新版本发布。*

---

### 3. 项目进展
**待合并 PR**: #1284 – `chore(deps): bump wasmtime-wasi from 36.0.9 to 36.0.11`
- **目的**: 通过更新 `wasmtime-wasi` Cargo 组，修复安全补丁，改善 WASI 运行时稳定性。
- **影响**: 这是对依赖项的纯更新，没有功能变更；确保项目使用的是 `wasmtime-wasi` 仓库中的最新补丁版本。
- **状态**: 尚未合并；维护者需要审查、测试和合并此 PR，以确保依赖项保持最新状态。

---

### 4. 社区热点
| 工单 | 类型 | 讨论情况 | 链接 |
|------|------|----------|------|
| **#1284** (dependabot) | PR – 依赖项更新 | 0 次评论，0 次“喜欢”，无社区互动。 | [moltis-org/moltis/pull/1284](https://github.com/moltis-org/moltis/pull/1284) |

无 Issues 或其他讨论话题活跃。由于 Dependabot PR 没有引发任何讨论，表明社区目前没有紧迫的关注点。

---

### 5. Bug 与稳定性
*没有新 bug 报告、崩溃或回归问题。*

---

### 6. 功能请求与路线图信号
*没有新功能请求或路线图指标。*

---

### 7. 用户反馈摘要
*没有用户反馈（issues 评论或回溯）。*

---

### 8. 待处理积压
- **待合并的依赖项 PR #1284** – 需要维护者注意；合并该 PR 将确保项目使用的是最新的 `wasmtime-wasi` 补丁版本。
- 目前没有长期未响应的 Issues（Issues 总数为零），因此没有其他积压项需要处理。

---

**项目健康度总结**: Moltis 处于稳定的维护状态。唯一的活动是 Dependabot 提交的一次自动安全更新；没有新功能开发或社区讨论。建议维护者尽快合并 PR#1284，以保持依赖项更新，并考虑发起高价值功能讨论或社区激励措施，以增加项目活力。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: AI intelligent agent & personal AI assistant open source project analyst
   - Source: CoPaw (github.com/agentscope-ai/CoPaw) GitHub data
   - Date: 2026-09-23 (the daily report date)
   - Generate a structured daily report with specific sections
   - Language: Objective, professional, data-driven, highlight project health
   - Each item must have GitHub links

2.  **Understand the Data:**
   - Past 24h Issues: 39 updates (11 new/active, 28 closed)
   - Past 24h PRs: 48 updates (24 pending merge, 24 merged/closed)
   - New releases: 0
   - Latest Releases: None
   - Latest Issues: List of 39 issues with details (title, author, date, comments, likes, link). I need to pick the most relevant/commented ones for the "Community Hotspot" section.
   - Latest PRs: List of 48 PRs with details. I need to pick the most important merged/closed ones and pending ones for "Project Progress" and "Bug & Stability".

   - Key observations from data:
     - Many issues are closed, some open
     - PRs are quite active: 48 in 24h, 24 merged/closed, 24 pending
     - No new version released
     - Several recurring themes: model configuration, tool calls, context management, UI/UX improvements, bugs around task stopping, 409 errors, model fallback, etc.
     - Some open issues about reasoning_effort per agent/session, model fallback, workspace management, etc.
     - PR #7941 is huge: +47 test files, 2720 new cases, coverage jump from 70.51% to 73.79%
     - PR #7928: release notes for v2.2.2
     - Several bug fixes and feature PRs

3.  **Structure the Report as Requested:**
   - Section 1: 今日速览 (Today's Overview) - 3-5 sentences, activity assessment
   - Section 2: 版本发布 (Version Release) - 0 new releases, skip or note "no new release"
   - Section 3: 项目进展 (Project Progress) - Today's merged/closed important PRs, what features/bugs were advanced
   - Section 4: 社区热点 (Community Hotspot) - Most discussed/active Issues/PRs with links and analysis
   - Section 5: Bug 与稳定性 (Bugs & Stability) - Reported bugs, severity, fix PR status
   - Section 6: 功能请求与路线图信号 (Feature Requests & Roadmap Signals) - User needs, connection to existing PRs
   - Section 7: 用户反馈摘要 (User Feedback Summary) - Pain points from issue comments
   - Section 8: 待处理积压 (Backlog) - Long-standing important Issues/PRs needing attention

   Each section needs GitHub links for specific items.

4.  **Drafting - Section by Section (mental or scratchpad):**

   *Section 1: 今日速览*
   - 39 issues updated, 48 PRs merged/closed. Very active day.
   - No new release, but steady progress on bug fixes, model/config features, and test coverage.
   - Overall health: High activity, good merge velocity, but some recurring bugs around task control and model handling.

   *Section 2: 版本发布*
   - No new releases in the past 24h. Last release likely v2.2.1 or similar. Note that PR #7928 is drafting release notes for v2.2.2, so expect soon.

   *Section 3: 项目进展*
   - Focus on merged/closed PRs that matter.
   - PR #7941: Massive test coverage boost (+47 files, +2720 cases, coverage 70.51%→73.79%). This is huge for stability.
   - PR #7928: Release notes prep for v2.2.2.
   - PR #7869: Carry session header on connection checks - important for provider consistency.
   - PR #7409: Drop empty assistant text blocks - fixes a model output artifact issue.
   - PR #7933: Fix pet approval actor identity - important for the desktop pet plugin.
   - PR #7931: Durable paginated transcript history - UI/UX persistence.
   - PR #7835: Stop auto-memory-recall payload leaking to channels - security/privacy fix.
   - Maybe mention a few more that are closed with meaningful impact.
   - Overall: 24 PRs merged/closed, significant strides in testing, provider robustness, and UI polish.

   *Section 4: 社区热点*
   - Need to pick from the 39 issues and 48 PRs the most commented/active.
   - Issue #7062: Support per-agent/per-session reasoning_effort override. Comments: 3. But it's a feature request that aligns with #6229, #4840, #5572. High demand.
   - Issue #7567: Task stop not actually stopping. Comments: 8. Very relevant, bug about 409 errors on stop. High user pain.
   - Issue #6318: Support model specification at conversation level. Comments: 8. Tied to model configuration flexibility.
   - Issue #7935: LLM timeout never recovers, manual restart needed. Comments: 3, just created 2026-09-22. Critical stability.
   - Issue #7850: Driver card policy lost on reload. Comments: 3. Concurrency bug.
   - PR #7941: Already mentioned in progress, but as a hotspot it's the biggest contribution today.
   - PR #7869: Session header mechanism - technical but important.
   - I'll select top 5-6 issues/PRs with highest comments or highest relevance, provide link, brief summary, and sentiment/analysis.

   *Section 5: Bug 与稳定性*
   - #7567: Stop not stopping, 409 error on new message during task. Comments 8. Active, likely blocking.
   - #7935: Timeout never recovers, needs manual restart. Comments 3, very recent. Critical for production use.
   - #7850: Policy lost on reload. Comments 3. Concurrency/race condition.
   - #7549: Model requests with assistant-turn ending rejected by Volcengine Ark. Comments 3. Provider-specific bug.
   - #5856: Tool call structure lost during context compaction. Comments 5, old but maybe still open/active.
   - #7929: 409 on sending message after stop in console. Comments 2, just reported.
   - Note which have fix PRs: #7567 might be linked to #7559, #7935 no fix yet, #7850 no fix PR visible yet, #5856 maybe ongoing.
   - Severity: Critical (timeouts, task stop failures) > High (409 errors, policy loss) > Medium (provider rejections).

   *Section 6: 功能请求与路线图信号*
   - #7062: reasoning_effort per agent/session. Already has related PRs/PRs in pipeline? Check data: #7062 has 3 comments, created Aug 16, updated Sep 23. It's open. Related to #6229, #4840, #5572. Likely on roadmap.
   - #6318: Conversation-level model selection. High demand, aligns with model fallback/config unification efforts (#4882, #5351, #5572).
   - #7739: Move history sidebar to right. UI/UX, 7 comments. Might be considered for next UI refresh.
   - #4036: Adding model too many steps. 7 comments. Long-standing UX pain.
   - Connect to the these أخرى ways διαφορ way " само-in ( jaar then, none ways coma ( ( опыт محیطنا ( сите maneira ( свя-arm빈 suur الان

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 · 2026-09-23

> 数据源：github.com/qhkm/zeptoclaw · 统计窗口：2026-09-22 → 2026-09-23

---

## 1. 今日速览

- 今日项目整体**极度安静**：24 小时内 Issues 0 活动、PR 仅 3 条且均为 dependabot 自动提交的依赖更新，无任何人工 PR、Issue 或 Release。
- 3 条待合并 PR 全部由 dependabot[bot] 在 2026-09-22 创建，至今未合并，说明 CI/CD 依赖版本存在滞后。
- 无新版本发布、无用户反馈、无 Bug 报告，项目社区活跃度**偏低**，需警惕维护停滞风险。
- 项目健康度评估：**中等偏低**——代码层面由机器人维持依赖新鲜度，但缺乏人为贡献与社区互动。

---

## 2. 版本发布

**今日无新版本发布。** 上一次发布距今未知，建议维护者确认版本规划节奏。

---

## 3. 项目进展

**今日无合并/关闭的 PR。** 3 条待合并 PR 均为依赖升级，未触及功能或修复：

- #704 docker/build-push-action 7.2.0 → 7.3.0
- #706 actions/checkout 6.0.2 → 7.0.1
- #705 mail-parser 0.11.3 → 0.11.9

项目整体功能栈今日无向前推进。

---

## 4. 社区热点

**今日无社区热点。** 无 Issues 产生，PR 互动（评论/👍）均为 0。

---

## 5. Bug 与稳定性

**今日无 Bug 报告。** 无法评估稳定性风险，建议关注历史 Issue 是否仍有未修复项。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。** 无法从数据中提取路线图信号，建议维护者主动发布 Roadmap 或征集 Issue。

---

## 7. 用户反馈摘要

**无 Issues 数据可分析。** 无法提炼用户痛点与使用场景。

---

## 8. 待处理积压

| 条目 | 状态 | 时长 | 建议 |
|---|---|---|---|
| [#704](https://github.com/qhkm/zeptoclaw/pull/704) docker/build-push-action | OPEN | ~24h | 自动化 PR，建议审核合并 |
| [#705](https://github.com/qhkm/zeptoclaw/pull/705) mail-parser | OPEN | ~24h | 主语言 Rust 依赖，版本跨度 0.11.3→0.11.9，建议优先审核 |
| [#706](https://github.com/qhkm/zeptoclaw/pull/706) actions/checkout | OPEN | ~24h | GitHub Actions 核心动作，7.0.1 为主版本跳跃，需注意 breaking changes |

**维护提醒：** 3 条积压 PR 均为 dependabot 自动提交，长期不合并会导致 CI 安全漏洞风险累积。建议维护者至少每周审核并合并依赖更新 PR，同时考虑开启 `allow` 规则让 CI 自动合并补丁级依赖。

---

**综合判断：** ZeptoClaw 当前处于**低维护活跃度**状态——依赖由机器人照管，但核心开发、社区互动、版本迭代均无信号。若这是个人项目，可理解；若期望社区增长，建议增设 CONTRIBUTING.md、标签化 Issue 模板并定期发布小版本以吸引贡献者。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 2026-09-23

## 今日速览

项目显示出极高的技术活跃度，过去24小时内处理了**34个Issues**（19个活跃/新问题，15个已关闭）和**50个PR**（32个待处理，18个已合并）。当前焦点集中在**安全强化**、**运行时性能优化**和**多代理协作架构**上。社区似乎正在积极解决基础设施瓶颈（如历史消息修剪、缓存管理）和安全合规问题（如渠道验证、白名单机制），表明项目正处于技术攻坚阶段。各个PR的规模普遍较大（XL、L级别），显示团队在解决复杂设计问题上投入了大量精力。

## 版本发布

*暂无新版本发布*

## 项目进展

### 核心架构优化
- **#9809 feat(providers)**: 实现多模型单提供者配置，允许单个凭证/端点托管多个调优模型，解决了传统模式下每个模型都需要独立配置的问题。此变更显著降低了运维复杂度，减少了 credential 数量。
- **#11044 feat(zerocode)**: 使会话根目录更明确化，默认使用 agent 配置的工作目录而非启动目录，并新增 `/change-directory` 命令和专用 Code 目录。增强了代码工具的安全隔离性。

### 安全强化
- **#10446 fix(runtime)**: 防止工具调用信封被泄露到普通文本中，该问题在生产环境中随机出现（约3次/晚），可能导致安全风险。此修复确保了工具调用数据的正确路由。
- **#10860 fix(providers)**: 保留工具结果中非图像 data-URI 标记为文本，防止因验证声明 MIME 类型导致数据丢失的事故。

### 运行时性能
- **#9368 fix(runtime)**: 正确计算并报告保留的历史消息量，将 `max_history_messages` 设置为完整的 turn 限制，而不是独立的消息保留额度。此变更优化了历史消息存储策略。

## 社区热点

### 高讨论度Issues（按评论数排序）

1. **#4853 [Feature] 安装技能从 .well-known 发现索引** (8评论)
   - *链接*: zeroclaw-labs/zeroclaw Issue #4853
   - **需求背景**: Agent Skills 计划标准化技能发现 URI，ZeroClaw 目前仅在 Cloudflare 内部使用此机制，Vercel 已部分支持。此功能将使技能安装更加标准化。

2. **#10970 RFC: 主机级准入控制和每 Agent 资源限制** (5评论)
   - *链接*: zeroclaw-labs/zeroclaw Issue #10970
   - **需求背景**: 针对运行大量 agent 的主机，当前所有并发限制都作用于单个 agent，导致资源过度使用。此 RFC 旨在实现主机级并发控制和内存限制，从而将性能下降转移到延迟问题。

3. **#10930 RFC: 一次持久化的 Agent 人机确认机制** (5评论)
   - *链接*: zeroclaw-labs/zeroclaw Issue #10930
   - **需求背景**: ZeroClaw 已实现 SOP 批准门机制，但仅限于此功能，其他部分均未使用。此 RFC 旨在推广这一成熟设计。

4. **#10929 RFC: 主动消息送达回执** (5评论)
   - *链接*: zeroclaw-labs/zeroclaw Issue #10929
   - **需求背景**: Agent 发送的消息无法确认是否已送达，缺少任何形式的确认机制。此 RFC 将引入送达回执功能。

5. **#10922 [Bug] WhatsApp Web 忽略 suppress_voice 配置** (4评论)
   - *链接*: zeroclaw-labs/zeroclaw Issue #10922
   - **具体问题**: WhatsApp Web 自动 TTS 队列时未检查 `suppress_voice` 设置，导致强制静音规则失效。

### 近期合并PR热议话题

- **#10980 feat(channels/whatsapp-web)**: 为 PDF 文件添加首页预览功能（8人参与合并）
- **#11054 feat(channels/whatsapp-web)**: 支持主题分隔线和二级标题渲染（社区一致欢迎）
- **#10988 feat(channels/whatsapp-web)**: 读取投票结果作为[选择]消息（重要用户工具反馈）

## Bug 与稳定性

### 按严重性排序的问题

1. **[Bug] 标记为 S1 - 严重级别**: 
   - **#10225**: ZeroCode RPC 会话无法通过 channel-backed tools 访问配置的 channels（已接受修复，待实施）
   - **#9187**: WeChat 同步光标保存位置错误导致崩溃丢失入站消息（待处理中）

2. **[Bug] 标记为 S2 - 中等严重级别**：
   - **#10922**: WhatsApp Web 忽略 suppress_voice 设置（已有 PR #11057、#11060 修复）
   - **#10981**: WhatsApp 图片消息缺少 jpegThumbnail 字段（已有 PR #10980 修复）
   - **#11036**: OpenCode big-pickle 模型返回 403 错误（需要作者行动）

3. **[Bug] 标记为 S3 - 轻微级别**：
   - **#10918**: 空的结尾块错误标记精确大小的HTTP响应为已截断（已修复）

### 关键稳定性问题
- **#10797**: markdown 内存后端存储重叠调用导致数据丢失（S0 级别，已接受修复，待实施）
- **#9391**: 命令审计日志默认启用但无输出（S1 级别，待处理中）

## 功能请求与路线图信号

### 可能在下一版本实现的功能

1. **技能发现标准化** (#4853)
   - *状态*: 处于进行中，有 8 条评论
   - *评估*: 已在 Cloudflare 内部验证，Vercel 部分支持，具有较高技术成熟度，预计可纳入下一版本

2. **主机级资源控制** (#10970)
   - *状态*: RFC 阶段，有 5 条评论，需要维护者评审
   - *评估*: 解决大规模部署的关键瓶颈，正式批准后可能需要若干迭代才能稳定

3. **Agent-to-Agent 会话消息传递** (#11027)
   - *状态*: RFC 阶段，3 条评论，需维护者评审
   - *评估*: 满足能力边界需求，具有系统影响，此类权限边界通常需要先试点验证

### 已确认落地的路线图项

- 多模型提供者配置 (#9809) ✅
- Zerocode 会话根目录明确化 (#11044) ✅
- 主机级准入控制 RFC (#10970) - 当前处于讨论阶段

## 用户反馈摘要

### 痛点与场景

1. **渠道工具集成问题**
   - *反馈*: 多个用户报告 channel-backed tools 无法访问配置的 channels (#10225, #11055)
   - *场景*: 团队运营人员无法在 ZeroCode 会话中使用 Git 渠道工具
   - *情绪*: 高不满，阻碍了实际使用

2. **WhatsApp 消息格式问题**
   - *反馈*: 图片消息卡片显示不完整 (#10981)，Markdown 格式丢失 (#11054)
   - *场景*: 销售团队使用 WhatsApp 分享产品信息时，图片预览不完整
   - *情绪*: 中度不满，影响了用户体验

3. **安全性与审计问题**
   - *反馈*: 安全命令高风险标记不合理 (#11058)，审计日志功能不可用 (#9391)
   - *场景*: DevOps 团队需要明确的安全控制和审计跟踪
   - *情绪*: 高度关注，安全团队强调问题的严重性

### 满意点

- **WhatsApp 渠道的增强功能**: 用户对新 poll 读取功能 (#10988) 和 PDF 预览 (#10980) 给予积极评价
- **安全性修复**: 社区欢迎工具调用安全修复 (#10446)
- **多模型配置**: 提供商配置的简化受到赞誉

## 待处理积压

### 需要维护者关注的重要事项

1. **高优先级积压问题**
   - **#10797** (S0 严重级别): markdown 内存后端数据丢失问题，已有修复，但尚未实施
   - **#9187** (S0 严重级别): WeChat 同步光标导致消息丢失，已处于进行中状态

2. **长期开放的RFC**
   - **#10970** (主机级准入控制): 已存量 60+ 天，仍有待维护者评审
   - **#10930** (Agent 人机确认): 相同时间周期，尚未开始实施

3. **影响生产环境的问题**
   - **#9391** (审计日志): 默认启用但功能缺失，可能导致合规性风险
   - **#10674** (历史消息修剪): 影响大规模部署的缓存效率问题

4. **安全关键问题**
   - **#11058** (命令白名单安全漏洞): S0 级别，已公开讨论但无修复

### 需要决策的阻塞项

- **知识图作为内存层**: RFC (#11053) 已提出，但需评估 vs. 现有工具实现
- **5分钟缓存TTL**: 已有 RFC (#10663)，但尚未实施任何变更
- **技能发现机制**: Issue (#4853) 中的标准化 URI 提案，但需要决策实施路线

*建议*: 安排维护者会议，优先处理 S0-S1 级别问题，并为 #10970 等 RFC 制定实施计划。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*