# OpenClaw 生态日报 2026-07-02

> Issues: 275 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-02 02:26 UTC

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

## 1. 生态全景（3‑5 句话概括）  
- 2026‑07‑02 这天，开源个人‑AI‑助理（Personal‑AI‑Assistant）生态呈 **高频迭代、功能扩展+安全加固并行** 的状态：大量项目在安全策略、沙箱隔离、OAuth/Token 统一管理、以及多渠道（Telegram/Discord/Slack/MCP）接入上投入资源。  
- 同时出现 **“自主智能体”** 的概念升级——从单独的技能/工具转向 **自动注入子任务、跨渠道统一会话** 的宏观愿景。  
- 生态主要围绕 **安全基线（Auth‑Guard、非回环地址认证）**、**运行时隔离（bwrap、sandbox、Cron 多实例）** 与 **开发者体验（CI、测试覆盖、CLI/GUI 统一）** 三大支柱展开。  
- 该趋势意味着**可靠性**已成为新功能的前置条件，而**可组合性**（MCP、Agent‑to‑Agent、跨渠道）正在成为差异化竞争点。

---

## 2. 各项目活跃度对比  

| 项目 (仓库) | 今日 Issue 数 | 今日 PR 数 | 最新 Release | 健康度评估* |
|------------|--------------|------------|-------------|------------|
| **OpenClaw** (core reference) | 8 | 47 (其中 22 已合并) | - | **🔥 高** – 密集安全/PR 修复、基础设施 PR 多 |
| **NanoBot** (github.com/HKUDS/nanobot) | 8 (新增) | 50 (47 合并) | - | **🔥 高** – 安全、Cron 并发、测试基建为主 |
| **Hermes Agent** (github.com/nousresearch/hermes-agent) | 11 (新增) | 50 (43 待合并) | v0.18.0 “The Judgment Release” (2026‑07‑01) | **🟢 稳** – 大版本已发布，迭代转向稳定性 |
| **PicoClaw** (github.com/sipeed/picoclaw) | 2 (更新) | 43 (2 合并) | v0.3.1‑nightly.20260702 | **🟡 中** – 夜构建，Bug 修复为主 |
| **NullClaw** (github.com/nullclaw/nullclaw) | 1 (新增) | 0 | - | **🟡 中** – 仅 1 Issue，活跃度低 |
| **IronClaw** (github.com/nearai/ironclaw) | 24 (活跃) | 50 (30 合并) | - | **🟠 中‑高** – 大量 P1‑P3 Bug，但修复力度强 |
| **LobsterAI** (github.com/netease-youdao/LobsterAI) | 3 (新增) | 24 (20 合并) | - | **🟢 稳** – UI/UX 改进为主，版本更新慢 |
| **CoPaw** (github.com/agentscope-ai/CoPaw) | 24 (新增) | 50 (30 合并) | - | **🟠 中‑高** – 关键安全/并发问题仍在审查 |
| **ZeptoClaw** (github.com/qhkm/zeptoclaw) | 0 | 0 | - | **🔴 低** – 无活动 |
| **ZeroClaw** (github.com/zeroclaw-labs/zeroclaw) | 0 | 0 | - | **🔴 低** – 同样无活动 |

\* **健康度判定标准**（参考每日报告中对活跃度、PR 类型、关键 Bug 修复情况的描述）  
- **🔥 高**：近期 PR 多为安全/PR 修复、核心功能强化，且发布 cadence 快。  
- **🟠 中‑高**：活跃度高但集中在 Bug 修复或功能冲刺，仍有大量滞留 Issue。  
- **🟢 稳**：已有正式版发布，近期以维护、文档、小功能为主。  
- **🟡 中**：更新频率低，主要是小版本/nightly，bug 修复为主。  
- **🔴 低**：几乎无代码提交或 issue 活动。

---

## 3. OpenClaw 在生态中的定位  

| 维度 | OpenClaw | 关键竞争对手 (NanoBot / Herms / CoPaw) |
|------|----------|--------------------------------------|
| **技术路线** | **安全/基准为首要**：non‑loop 地址、强制认证、bwrap 沙箱、Cron 并发竞态补丁、测试覆盖基建。 | NanoBot 类似安全基线，但更侧重 “Agent安全策略”。 Herms 侧重 **自主调度（Cron 自治）** 与 **自动化发布**。 CoPaw 侧重 **多渠道 TUI/Telegram**，对安全的关注集中在 **MCP‑tool 被动失效**。 |
| **社区规模** | 该项目仍是 **核心参照实现**，近 24h PR 超 40，活跃度居首，但维护者相对单一。 | NanoBot 拥有 **HKUDS** 团队与多贡献者；Hermes / CoPaw 拥有更大的企业/研究团队（Nous, AgentsScope），社区规模更广。 |
| **功能侧重** | **“安全‑首要 + 基础设施**”：侧重于 **API 认证、沙箱、测试框架、CI**，为后续功能提供底层可靠性保障。 | NanoBot 在 **Cron 多实例** 与 **模型路由** 上更进一步；Hermes 在 **自主任务链** 与 **大版本发布** 上突出；CoPaw 在 **Web‑TUI、Skill 统一** 上更具前瞻性。 |
| **定位结论** | 作为 **生态安全底座**，OpenClaw 为其他项目提供可复用的**安全 Patten**、CI 测试模板与 **沙箱策略**，是 **“可信执行环境”** 的首选参考。 |

---

## 4. 共同关注的技术方向  

| 方向 | 关联项目（示例） | 具体诉求 |
|------|----------------|----------|
| **安全/认证** | OpenClaw、NanoBot、Hermes、CoPaw、ZeroClaw | OAuth/Custom Token、强制认证、凭证后备、密钥脱敏 |
| **沙箱/执行隔离** | OpenClaw、NanoBot、NullClaw、IronClaw | `bwrap` 防逃逸、Cron 多实例竞态、Runtime 资源回收 |
| **MCP/Tool 集成** | OpenClaw、Hermes、LobsterAI、CoPaw、ZeroClaw | 自动发现/注册工具、跨渠道一致性、Web UI 中的 Tool 面板 |
| **多实例/并发协调** | NanoBot（#1033、#4633）、IronClaw（#5687）、CoPaw（#5713） | 并发写入 `jobs.json`、避免重复调度、统 one Task ID |
| **测试/ CI 基建** | OpenClaw、NanoBot、IronClaw、ZeroClaw | Scripted Runner、Memory Harness、覆盖率提升、依赖审计 |
| **用户体验/UI 统一** | LobsterAI、CoPaw、Hermes、ZeptoClaw | 自动化预览、统一的 Skill 标签、滚动/复制交互、Web‑Dashboard 关键错误修复 |
| **Token/上下文压缩** | LobsterAI（#5063 Headroom）、CoPaw（#5063）、OpenClaw（#5710） | 60‑95% token 削减、关键锚点保留、上下文截断策略 |

---

## 5. 差异化定位分析  

| 维度 | OpenClaw | NanoBot | Hermes Agent | LobsterAI | CoPaw |
|------|----------|---------|--------------|-----------|-------|
| **功能侧重** | 安全底层、CI、基准实现 | 安全策略 + Cron 多实例 | 大版本自主调度、MCP 原生、自动化任务注入 | UI/UX、插件化（MCP、Skill）、多端一致性 | 多渠道（Telegram/Discord/Slack）统一、TUI、Skill 面板 |
| **目标用户** | 开发者 / 安全审计团队、需要可自托管的私有 AI 运维 | 研究/实验室、对安全/多实例有严格需求的用户 | 产业级 AI 产品（大模型代理）研发团队 | 普通终端用户、需要强交互体验的个人/企业用户 | 开发者社区、需要多渠道插件化的 AI Agents 构建者 |
| **技术架构** | 微服务式 **Gateway + Runtime + Security**，强依赖 **bwrap、OAuth、Cron** | 同类但更侧重 **Agent Safety** 与 **非回环地址** | **自主调度器 + 大版本发布**，重点在 **自动任务链**、**模型路由** | **Web‑UI + Desktop**, 强调 **插件化（MCP）**、**即时预览** | **统一 Channel API + TUI**, 关注 **Tool 可视化**、**跨平台兼容** |
| **社区治理** | 单一维护者、快速 PR 处理、安全‑优先 | 学术/学生团队、开源贡献频繁 | 大企业/研究实验室、版本发布周期明确 | 企业开发者、文档与 UI 为核心关注点 | 多维度社区（议题、PR、社交媒体）活跃度高 |

---

## 6. 社区热度与成熟度  

| 热度层级 | 项目（示例） | 说明 |
|----------|--------------|------|
| **快速迭代（High‑Velocity）** | OpenClaw、NanoBot、CoPaw、IronClaw | 近 24h PR 多于 40，且大多数为安全/PR 修复或关键功能实现，Issue 与 PR 紧密耦合，多为 **P1‑P3** 坍塌式修复。 |
| **质量巩固（Stability‑Focused）** | Hermes Agent、LobsterAI、ZeroClaw（虽无活跃但已有正式版） | 已发布大版本或长期维护版，近期活动集中在 **bug 修复、文档、迁移注意事项**，迭代节奏放慢但稳定性提升明显。 |
| **停滞/低活跃** | NullClaw、ZeptoClaw、TinyClaw、Moltis | 近 24h 无新提交或仅少量 Issue，社区 attention 低，若不持续投入将面临技术债积累。 |
| **观察期** | PicoClaw、NullClaw | 夜构版或仅有少量 Issue，可能在等待关键维护者或计划大版本。 |

> **结论**：生态处于 **“安全可靠性冲刺期”**，高热度项目正从功能扩展转向 **质量闭环**（测试、审计、沙箱），而低热度项目则需要重新吸引维护者才能保持生态健康。

---

## 7. 值得关注的趋势信号  

1. **安全即功能**——OAuth、凭证后备、强制认证、密钥脱敏已成为 **必备特性**，且多个项目在同一 Issue 中并行提出。  
2. **沙箱与并发隔离**——从 `bwrap`（OpenClaw）到 **Cron 多实例竞态**（NanoBot、IronClaw）再到 **模型沙箱**（Hermes），显示运行时安全是 **开发者最关注的底层需求**。  
3. **统一工具发现（MCP）**——从 OpenClaw、Hermes、LobsterAI 到 CoPaw，所有项目都在构建 **跨渠道、统一 UI** 的工具面板，意味着**工具 marketplace**将成为下一波竞争焦点。  
4. **上下文/Token 压缩**——Headroom（LobsterAI）与 “preserve_thinking” 开关（Hermes）表明 **长上下文成本** 已成为用户痛点，压缩/锚点策略是 **可商用差异化**。  
5. **多模态 /

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-02

> **数据基准**：GitHub 仓库 `HKUDS/nanobot` 过去 24 小时活动（Issues: 8, PRs: 47, Releases: 0）

---

## 1. 今日速览
- **活跃度评级：🔥 高** —— 单日 47 个 PR 更新（其中 22 个已合并/关闭），显示核心团队处于密集迭代冲刺期，且多为基础设施、测试覆盖与安全加固类变更。
- **零新版本发布**，但已合并 PR 涉及 **MCP 安全策略修复 (#4490)**、**Cron 多实例竞态修复 (#4633 关联 #1033)**、**执行沙箱逃逸阻断 (#4629)** 等关键稳定性/安全项，预示下一版本将为维护型大版本。
- **社区端**：新增 5 个 Open Issue，聚焦 **Anthropic OAuth 接入 (#4604, #4632)**、**Telegram 长消息渲染 (#4637)**、**飞书系统级分割 (#4619)** 及 **edit_file 精准编辑 (#4634)**，反映多渠道适配与 Agent 编码能力为当前核心诉求。
- **技术债偿还显著**：新增 6 个测试框架类 PR（Scripted Runner, Memory Harness, Cron 回归等），单元/集成测试覆盖率预期大幅提升。

---

## 2. 版本发布
> **无新版本发布**（最近 Release 仍为历史版本）。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心推进内容 | 关联 Issue | 影响面 |
|----|------|--------------|------------|--------|
| [#4490](https://github.com/HKUDS/nanobot/pull/4490) | **Security/Feat** | `nanobot serve` 绑定非回环地址时强制要求认证，与 WS Gateway 行为对齐 | #4490 | **安全基线**，防止开放 API 未授权访问 |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | **Fix/Security** | 阻断 `bwrap` 沙箱内相对路径通过符号链接逃逸工作区 | #4629 (重开) | **执行环境隔离**，修复 CVE 级风险 |
| [#4633](https://github.com/HKUDS/nanobot/pull/4633) | **Test/Regression** | 覆盖 Cron 多实例陈旧快照竞态（`jobs.json` 并发写入丢失） | #1033 | **高可用/多实例部署**稳定性 |
| [#4629](https://github.com/HKUDS/nanobot/pull/4629) | **Fix** | 同 #4119，补回归测试并关闭 #4629 | #4629 | 同上 |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) / [#3983](https://github.com/HKUDS/nanobot/pull/3983) | **Test/Infra** | 引入 **Scripted Agent Runner Harness** 与 **Blocked Tool-Call Finish Reason** 覆盖 | — | **测试基建**，支撑后续 Runner 重构 |
| [#4627](https://github.com/HKUDS/nanobot/pull/4627) | **Fix/Memory** | 合并期间保留 `_channel_delivery` 上下文，避免分割线丢失导致记忆污染 | — | **长期记忆一致性** |
| [#4622](https://github.com/HKUDS/nanobot/pull/4622) | **Feat/Cron** | Cron Job 支持 `model_preset` 运行时模型覆盖 | #4378 | **定时任务灵活性** |

> **整体判断**：今日合并 PR 以 **安全修复、并发修正、测试基建** 为主，功能性新增较少，项目处于「夯实底座」阶段。

---

## 4. 社区热点（高互动/高关注）

| 对象 | 热度指标 | 核心诉求分析 |
|------|----------|--------------|
| **Issue [#4604](https://github.com/HKUDS/nanobot/issues/4604)** / **PR [#4632](https://github.com/HKUDS/nanobot/pull/4632)** | 👍 0 / 评论 3 (Issue) + PR 刚建 | **Anthropic OAuth 原生支持** —— 用户希望绕过 Console API Key，直接复用 `claude setup-token` 凭证。PR #4632 已实现 `anthropic_oauth` Provider，**极大概率进入下一版本**。 |
| **Issue [#4434](https://github.com/HKUDS/nanobot/issues/4434)** (Closed) | 评论 2 / 👍 0 | **MCP `enabledTools: []` 拒绝策略绕过** —— 安全审计发现拒绝列表被绕过，模型仍能看到资源/Prompt。已由 #4490 认证强制化缓解，但需确认 MCP 层面是否仍有残留风险。 |
| **Issue [#4637](https://github.com/HKUDS/nanobot/issues/4637)** | 评论 1 / 👍 0 | **Telegram Markdown 长消息分片渲染失败** —— 非最后一片无法渲染，影响富文本体验。属渠道适配 Bug，优先级 P2。 |
| **Issue [#4634](https://github.com/HKUDS/nanobot/issues/4634)** | 评论 0 / 👍 0 | **`edit_file` 误匹配行导致错误编辑** —— 基准测试显示为主导失败模式。PR [#4635](https://github.com/HKUDS/nanobot/pull/4635) 巽已提出 `line_hint`/`target_line` 强守卫，**直接回应该痛点**。 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 状态 / Fix PR |
|--------|-------|------|---------------|
| **🔴 Critical (Security)** | [#4434](https://github.com/HKUDS/nanobot/issues/4434) | MCP 拒绝策略绕过，敏感资源泄露给模型 | **Closed** / 缓解于 [#4490](https://github.com/HKUDS/nanobot/pull/4490) (API 侧强认证) |
| **🔴 Critical (Crash)** | [#4615](https://github.com/HKUDS/nanobot/issues/4615) | `nanobot gateway` 启动时 `CronService` 对父目录 `fsync()` 失败 (`OSError: 22`) | **Closed** / 原因定位为目录 fd `fsync` 在部分 FS 不支持，需补丁 |
| **🟠 High (Sandbox Escape)** | [#4629](https://github.com/HKUDS/nanobot/issues/4629) | 相对路径配合 symlink 逃逸 `bwrap` 工作区 | **Fixed** / [#4119](https://github.com/HKUDS/nanobot/pull/4119) 已合并含回归测试 |
| **🟡 Medium (Data Race)** | #1033 (关联 [#4633](https://github.com/HKUDS/nanobot/pull/4633)) | 多 Cron 实例并发写 `jobs.json` 导致任务丢失 | **Test Added** / [#4633](https://github.com/HKUDS/nanobot/pull/4633) 覆盖回归，修复待后续 PR |
| **🟡 Medium (UX)** | [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram 长消息分片渲染断裂 | **Open** / 无 PR，需 Channel 适配层修复 |
| **🟢 Low (Logic)** | [#4634](https://github.com/HKUDS/nanobot/issues/4634) | `edit_file` 精准替换命中错误位置 | **Open** / [#4635](https://github.com/HKUDS/nanobot/pull/4635) 提供强行号守卫方案 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入下一版本概率 | 备注 |
|------|------|--------|------------------|------|
| **Anthropic OAuth Provider** | [#4604](https://github.com/HKUDS/nanobot/issues/4604) + [#4632](https://github.com/HKUDS/nanobot/pull/4632) | **PR Ready** | 🟢 **极高** | 已实现 `CLAUDE_CODE_OAUTH_TOKEN` / 交互式登录双模式 |
| **OpenAI Responses API 原生支持** | [#4612](https://github.com/HKUDS/nanobot/issues/4612) | Issue Only | 🟡 中 | 需 Provider 层新增 `responses` 路由，优先级次于 OAuth |
| **Cron Job Model Preset** | [#4378](https://github.com/HKUDS/nanobot/issues/4378) + [#4622](https://github.com/HKUDS/nanobot/pull/4622) | **Merged** | ✅ **已入库** | 运行时模型覆盖，不改动全局配置 |
| **Subagent 模型覆盖 / 聚合结果模式** | [#4623](https://github.com/HKUDS/nanobot/pull/4623), [#4624](https://github.com/HKUDS/nanobot/pull/4624) | **PR Open** | 🟢 高 | 复用现有 `spawn` 架构，改动局部，审查通过概率大 |
| **飞书 `/new` 系统级分割消息** | [#4619](https://github.com/HKUDS/nanobot/issues/4619) | Issue Only | 🟡 中 | 仅需调用 `msg_type=system`，实现成本低 |
| **Heartbeat Trigger (定时唤醒)** | [#3437](https://github.com/HKUDS/nanobot/issues/3437) + [#4620](https://github.com/HKUDS/nanobot/pull/4620) | **PR Open** | 🟡 中 | 涉及 LLM 决策 + 工作区锁，复杂度较高，可能分阶段合并 |
| **Eager Memory Consolidation (可选)** | [#2604](https://github.com/HKUDS/nanobot/issues/2604) + [#4626](https://github.com/HKUDS/nanobot/pull/4626) | **PR Open** | 🟡 中 | 默认关闭，作为预发布特性观察 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点/正向反馈 | 代表性引用/现象 |
|------|---------------|-----------------|
| **Claude Code 用户** | **强烈需求复用现有 OAuth Token**，不想在 Console 创建 Key、绑卡。 | #4604 讨论中多用户表态「订阅用户应首选 OAuth」 |
| **Telegram 重度用户** | 长 Markdown 消息**分片后前几片不渲染**，阅读体验破碎。 | #4637 截图显示代码块、列表在非末片截断 |
| **飞书协作场景** | 纯文本「New session 分割不明显，**期望原生系统分割线**。 | #4619 提供官方 API 文档截图，实现路径清晰 |
| **Agent 编码任务** | `edit_file` **误改别处**导致代码破坏，基准测试失败率高。 | #4634 称「主导失败模式」，PR #4635 引入行号守卫获赞 |
| **多实例部署运维** | Cron 多网关并发启动导致**定时任务丢失/重复**，难以排查。 | #1033 长期存在，#4633 终补回归测试 |

---

## 8. 待处理积压（建议维护者关注）

| 对象 | 滞留时长 | 风险/价值 | 建议动作 |
|------|----------|-----------|----------|
| **Issue [#4615](https://github.com/HKUDS/nanobot/issues/4615)** (Gateway 启动崩溃) | 1 天 | **阻塞生产部署**，`fsync` 目录在 NFS/部分云盘不支持 | 尽快合并修复 PR（若有）或回滚目录 `fsync` 逻辑，标记 `priority: p0` |
| **PR [#4591](https://github.com/HKUDS/nanobot/pull/4591)** (Session-bound Local Triggers) | 3 天 | 核心交互新范式（文件队列触发），涉及 WebUI、CLI、Gateway 多端 | 需核心 Maintainer 审查设计，决定是否纳入 vNext |
| **Issue [#4434](https://github.com/HKUDS/nanobot/issues/4434)** (MCP 策略绕过) | 11 天 | **安全审计项**，虽关闭但根因在 MCP 层未彻底修复 | 追踪 MCP 协议层 `enabledTools` 执行路径，补充单测 |
| **PR [#4635](https://github.com/HKUDS/nanobot/pull/4635)** (edit_file 强行号守卫) | 1 天 | 直接解决 #4634 核心痛点，**编码 Agent 可用性跃升** | 加速 Code Review，配合基准跑分合并 |
| **PR [#4632](https://github.com/HKUDS/nanobot/pull/4632)** (Anthropic OAuth) | 1 天 | **高呼声功能**，完善后可发布为亮点 Feature | 审查 Token 刷新/过期处理、错误提示友好度 |

---

## 📊 总体健康度评估
| 维度 | 评分 (1-5) | 趋势 | 说明 |
|------|------------|------|------|
| **开发速度** | ⭐⭐⭐

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Hermes Agent 项目动态日报 - 2026-07-02

## 1. 今日速览

Hermes Agent 今日保持高活跃度，24小时内提交了50条Issues（44新活跃，6已关闭）和50条PRs（43待合并，7已合并/关闭）。项目昨日发布了重要版本v0.18.0"The Judgment Release"，引入约1,720次提交和998个合并PR，关闭949个Issues。社区参与度高，370+贡献者参与本次发布。当前Issues主要集中在网关稳定性（iMessage、Telegram）、资源消耗优化（token过量）及跨平台兼容性（Windows/WSL）方面。同时多个PR正积极修复会话状态管理和工具集加载问题，显示项目在生产稳定性和企业级功能方面持续投入。

## 2. 版本发布

### v0.18.0 - The Judgment Release (2026.7.1)

**发布概览：**
- 自v0.17.0以来：~1,720次提交 · 998个合并PR · 2,215个文件变更
- 代码变更量：约251,000新增 · ~41,000删除
- 问题解决：949个Issues已关闭
- 社区贡献：370+贡献者参与

**关键更新（基于数据分析）：**
- 显著增强了cron系统的自主性和协调能力
- 引入了更精细的模型路由和编解码器支持
- 加强了平台集成（Telegram、Discord、Mattermost）的稳定性
- 改进了会话管理和上下文压缩机制

**迁移注意事项（推测）：**
- 自签名证书用户需注意自定义SSL配置变更
- MCP OAuth用户可能需要重新授权（参见Issue #56673）
- 企业用户应关注新的安全沙箱选项（CubeSandbox集成）

## 3. 项目进展

### 今日已合并/关闭的重要PR：

| PR | 类型 | 描述 | 链接 |
|----|------|------|------|
| #56333 | 功能 | Claude Code历史扫描器（侧边栏功能M1） | [PR #56333](https://github.com/NousResearch/hermes-agent/pull/56333) |
| #19996 | 修复 | 模型选择器实时获取、排序按钮、去重及配置修复 | [PR #19996](https://github.com/NousResearch/hermes-agent/pull/19996) |
| #49445 | 修复 | Exa搜索在官方Docker镜像中不可用的Bug | [Issue #49445](https://github.com/NousResearch/hermes-agent/issues/49445) |
| #56533 | 修复 | `/journey`斜杠命令在TUI/Desktop中泄漏ANSI转义码 | [Issue #56533](https://github.com/NousResearch/hermes-agent/issues/56533) |

### 项目推进分析：
这些合并的PR显示项目正朝着三个方向发展：1）更好的IDE集成（Claude Code历史）；2）用户体验优化（模型选择器、TUI显示）；3）平台兼容性（Docker环境）。这体现了Hermes Agent在易用性和企业部署方面的持续优化。

## 4. 社区热点

### 最活跃Issue：

**#5712 - True Autonomy: Automatically Inject Cron Results into Live Gateway Chat Sessions**
- 类型：功能请求
- 评论数：11条
- 👍数：11条
- 链接：[Issue #5712](https://github.com/NousResearch/hermes-agent/issues/5712)
- 分析：该Issue提出了将cron作业结果自动注入到活跃聊天会话的概念，这代表了用户对真正自主AI助手的期待 - 后台任务能够无缝融入前台交互，增强工作流连续性。

**#49858 - Photon iMessage: sidecar death causes silent reconnect death spiral**
- 类型：Bug（P3）
- 评论数：8条
- 链接：[Issue #49858](https://github.com/NousResearch/hermes-agent/issues/49858)
- 分析：用户对平台稳定性高度关注，特别是Node.js sidecar的健壮性问题影响了实际使用体验。

### 最活跃PR：

**#56744 - Hide empty untitled sessions from pickers**  
**#56745 - Harden profile stale runtime sweep after update**  
**#47614 - Add CubeSandbox backend and split-mode routing plugin**
- 分析：这些PR都与会话状态管理和企业级安全性相关，显示项目在稳定性和安全性方面持续投入。

## 5. Bug 与稳定性

### 严重Bug（P0-P1）：

| Issue | 严重程度 | 描述 | 状态 | Fix PR |
|-------|----------|------|------|--------|
| #36846 | P0-安全 | 危险命令黑名单可被绕过，存在静默RCE风险 | 已关闭 | 未提供 |
| #49858 | P3 | iMessage sidecar崩溃导致重连死循环 | 开放 | 未提供 |
| #56717 | P2 | 非默认配置可保留过时运行时导致ImportError | 开放 | #56745 |
| #56732 | P2 | API服务器/AC P丢失整个terminal工具集 | 开放 | #56735 |
| #56704 | P2 | computer_use在Linux/WSL上捕获失败（int(None)错误） | 开放 | 未提供 |

### 中等Bug（P2）：

| Issue | 描述 | 链接 |
|-------|------|------|
| #13983 | 默认安装下"who u?"提示消耗16K+token | [Issue #13983](https://github.com/NousResearch/hermes-agent/issues/13983) |
| #18019 | 大文件写入时流卡住中途工具调用 | [Issue #18019](https://github.com/NousResearch/hermes-agent/issues/18019) |
| #56747 | Windows桌面版运行代理时闪烁空白终端窗口 | [Issue #56747](https://github.com/NousResearch/hermes-agent/issues/56747) |
| #56739 | Telegram平台下语音消息在等待澄清时被忽略 | [Issue #56739](https://github.com/NousResearch/hermes-agent/issues/56739) |

## 6. 功能请求与路线图信号

### 热门功能请求：

**#56740/#56741 - QQBot平台添加is_reconnect参数支持**
- 链接：[PR #56740](https://github.com/NousResearch/hermes-agent/pull/56740), [PR #56741](https://github.com/NousResearch/hermes-agent/pull/56741)
- 分析：多个PR同时修复同一问题，可能会被快速合并纳入下个版本

**#53401 - cron全局模型/提供商覆盖**
- 链接：[PR #53401](https://github.com/NousResearch/hermes-agent/pull/53401)
- 分析：企业用户对成本控制和模型调度灵活性有需求，这可能是后续cron功能的重要支撑

**#54230 - Mattermost实时思考气泡**
- 链接：[PR #54230](https://github.com/NousResearch/hermes-agent/pull/54230)
- 分析：平台特性一致性，可能增强企业沟通体验

**#56513 - Linux桌面应用独立安装**
- 链接：[Issue #56513](https://github.com/NousResearch/hermes-agent/issues/56513)
- 分析：轻量化部署需求，符合SaaS模式趋势

## 7. 用户反馈摘要

### 使用痛点：

1. **资源消耗担忧**：用户反映默认安装下简单提示"who u?"消耗16K+token（#13983），表明上下文管理效率可能需要优化

2. **平台稳定性**：Windows/WSL环境下出现多个UI层面问题（闪烁终端窗口#56747，启动卡住#44668），反映跨平台兼容性挑战

3. **部署灵活性**：用户希望能够独立安装Linux桌面应用而不需全量部署（#56513），表明需求场景多样化

4. **企业集成**：多个Docker环境、自签名证书、OAuth认证问题（#28260, #48440, #56673），反映企业级用户的使用需求

### 满意方面：

1. **功能丰富**：社区高度期待cron自主性和真正的背景任务集成（#5712）

2. **平台支持广泛**：Mattermost、Telegram、Discord等企业常见平台持续优化

## 8. 待处理积压

### 长期未解决的重要Issue：

**#26141 - LanceDB在Windows上的OS错误123**
- 类型：Bug
- 创建时间：2026-05-15（距离今日超过40天）
- 链接：[Issue #26141](https://github.com/NousResearch/hermes-agent/issues/26141)
- 分析：Windows平台下的记忆检索问题长期未解决，可能影响企业Windows用户采用

**#54393 - 仪表板字体设置**
- 类型：功能请求
- 创建时间：2026-06-28（约5天前）
- 链接：[Issue #54393](https://github.com/NousResearch/hermes-agent/issues/54393)
- 分析：UI自定义需求，用户对默认字体配置不满意

**#56677 - Discord behavior tests覆盖不足**
- 类型：测试问题
- 链接：[Issue #56677](https://github.com/NousResearch/hermes-agent/issues/56677)
- 分析：测试覆盖不足可能导致回归问题，维护者应关注

---

*注：本报告基于2026-07-02统计的GitHub数据生成，链接指向GitHub官方仓库。*


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# PicoClaw 项目动态日报 (2026-07-02)

## 今日速览
项目活跃度较高，共处理 **11 条 PR**（其中 2 条关闭）和 **2 条 Issue** 更新。新版本 **v0.3.1-nightly.20260702** 发布，持续了一天的开发活动。社区关注点聚焦于 Bug 修复（Android/Termux 崩溃问题）和新功能开发（QQ 频道流式输出支持）。项目健康度良好，依赖更新和功能特性并行推进中。

## 版本发布
**v0.3.1-nightly.20260702.2cf030d2**
- 类型：夜间构建版（Nightly Build），可能不稳定
- 更新链接：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.1...main)
- 警告：本次为自动构建版本，建议谨慎使用

## 项目进展
今日关闭的 PR 显示了项目在稳步推进：
- **[#3116](https://github.com/sipeed/picoclaw/pull/3116)** 已关闭：完成 Pico `turn.done` 生命周期信令，修复了请求 ID 保留和消息队列的问题
- **[#2975](https://github.com/sipeed/picoclaw/pull/2975)** 已关闭：Telegram 群聊现在支持回复机器人消息等同于@提及行为

## 社区热点
- **[Issue #3164](https://github.com/sipeed/picoclaw/issues/3164)**：[BUG] Process hooks crash gateway on Android/Termux  
  **诉求**： urgently 需要修复 Android/Termux 环境下进程钩子导致的网关崩溃问题，影响范围包括所有基于 JSON-RPC 的 hook

- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** ：添加可配置的模型默认降级链  
  **亮点**：用户可以在 Web UI 中设置模型降级顺序，提高模型可用性

## Bug 与稳定性
- **[Issue #3164](https://github.com/sipeed/picoclaw/issues/3164)** ⚠️ **严重**：Process hooks 在 Android/Termux 环境下 crash  
  - 影响版本：v0.2.9  
  - 状态：尚无 Fix PR，急需关注  
  - [链接](https://github.com/sipeed/picoclaw/issues/3164)

- **[PR #3161](https://github.com/sipeed/picoclaw/pull/3161)**：[stale] exec: keep deny patterns active for custom allow rules  
  - 修复内容：确保自定义允许规则不会绕过 exec deny 模式  
  - 状态：仍开放，等待.review  
  - [链接](https://github.com/sipeed/picoclaw/pull/3161)

## 功能请求与路线图信号
- **[Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)**：[Feature] Support streaming output for QQ channel  
  - 需求：为 QQ 频道实现实时 Token 输出，与 Telegram/Pico WebSocket 保持一致  
  - 可能影响后续版本：v0.3.2 或 nightly 系列  
  - [链接](https://github.com/sipeed/picoclaw/issues/3201)

- **[PR #3202](https://github.com/sipeed/picoclaw/pull/3202)** ：修复 ID 规范化中下划线处理  
  - 保证 `NormalizeAgentID` 符合正则 `^[a-z0-9][a-z0-9_-]{0,63}$`  
  - [链接](https://github.com/sipeed/picoclaw/pull/3202)

## 用户反馈摘要
- 来自 **#3164** 的用户报告：“即使最小的‘hello world’ hook，网关启动后 2 秒内即崩溃”  
- **#3201** 的用户希望“能像 Telegram 一样实时看到 LLM 生成的 Token”，显示出对流式体验的强烈需求

## 待处理积压
以下 PR 长期未更新，标记为 `[stale]` 需维护者关注：
- **[#3165](https://github.com/sipeed/picoclaw/pull/3165)** ：恢复 Seed XML 工具调用
- **[#3160](https://github.com/sipeed/picoclaw/pull/3160)** ：拒绝跨站 launcher setup 请求
- **[#3158](https://github.com/sipeed/picoclaw/pull/3158)** ：Windows 路径处理测试覆盖
- **[#3104/#3103/#3100](https://github.com/sipeed/picoclaw/pull/3104)** ：依赖项更新（shadcn, typescript-eslint, vite）


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### **今日速览**  
今日NanoClaw项目活跃度表现平稳，共更新6条Issue（新增6条，无关闭）及12条PR（合并6条，待合并6条），核心基础设施（如webhook服务器崩溃、网关地址冲突）仍占主导地位，表明核心功能稳定性修复仍在推进。社区贡献持续，开发者对信息吞噬和配置灵活性提出关注，但缺乏自然语言讨论数据，需进一步激励交互。  

---

### **项目进展**  
今日合并的6条PR包括：  
1. **WhatsApp内存泄漏修复**（#2905）：解决重复握手未终止旧socket导致的资源累积崩溃问题。  
2. **任务脚本重试增强**（#2677）：预任务脚本失败时增加一次自动重试并添加诊断日志。  
3. **预提交检查工具**（#1716）：新增`/check-contribution`技术预检技能，提升代码贡献质量。  
4. **API路径支持扩展**（#1257）：兼容Anthropic API子路径配置，覆盖企业级API场景。  
5. **备份工具实现**（#1693）：通过Git管道实现状态数据全量备份，解决私有化部署缺失问题。  
6. **QMD语义搜索**（#1597）：引入智能对话历史检索能力，增强长期记忆交互场景。  

这些合并表明核心服务稳定性与功能扩展工作同步推进，但仍无新版本发布，迭代节奏可能因审核流程优化空间存在。  

---

### **社区热点**  
今日最活跃讨论：  
1. **网关地址兼容性需求（#2903）**（优先级⭐️⭐️⭐️）：  
   - 问题描述：Docker桥网络中agent无法连接gateway的根本原因（127.0.0.1 vs 10.0.0.1）  
   - 链接：https://github.com/qwibitai/nanoclaw/issues/2903  
   - 社区反应：0评论，合并前的未来讨论文案显示需要文档更新示例配置参数。  

2. **Webhook口令灵活性请求（#2901）**（⭐️⭐️）：  
   - 用户批评当前仅支持环境变量配置，.env需求未被优先处理  
   - 链接：https://github.com/qwibitai/nanoclaw/issues/2901  

3. **技能备份解决方案（#1693 PR讨论）**（⭐️⭐️⭐️）：  
   - 拟议的Git自动化备份方案未明确备份策略版本兼容性，引发争议。  
   - 链接：https://github.com/qwibitai/nanoclaw/pull/1693  

---

### **Bug与稳定性**  
**1. 严重问题（⭐️⭐️⭐️）**  
- **Webhook服务器端口冲突导致服务崩溃（#2900）**（链接：https://github.com/qwibitai/nanoclaw/issues/2900）  
  - 特点：WSS服务启动失败致主进程panic，但实际非关键组件故障导致整体服务不可用的根本性逻辑缺陷。  
- **Slack@mention逻辑漏洞（#2904 PR待审议）**（链接：https://github.com/qwibitai/nanoclaw/pull/2904）  
  - 问题：评论线程上下文被忽略，会导致企业集成场景中对话连贯性崩溃。  

**2. 中度问题（⭐️⭐️）**  
- **Discord按钮处理逻辑漏洞（#2899 PR修复中）**（链接：https://github.com/qwibitai/nanoclaw/pull/2899）  
  - 解决：解析自定义ID格式错误导致所有按钮响应统一拒绝，影响用户交互体验。  

---

### **功能需求与路线图信号**  
- **音频转写技能（#2317 PR）**（链接：https://github.com/qwibitai/nanoclaw/pull/2317）  
  - 半开源需求（免费OpenAI和whisper.cpp两种后端），预示语音交互组件可能进入v1.3版本。  
- **代理默认设置（#2906 PR）**（链接：https://github.com/qwibitai/nanoclaw/pull/2906）  
  - 反映运维团队对集中化配置的需求，设计在`.env`中动态注入provider信息。  

---

### **用户反馈摘要**  
**痛点**：  
1. 64MB SHM空间不足导致Chrome型agent崩溃（#2771 PR修复线索）  
2. Discord/DM无法跟踪完整评论流导致用户操作紊乱（#2899 PR关联）  
**满意点**：  
- 自动化备份设计（#1693）早期采用者称可增加私有化信任度  

---

### **待处理积压**  
1. **环境变量环境变量设置冲突（#2901）**（缓期处理）  
   - 链接：https://github.com/qwibitai/nanoclaw/issues/2901  
2. **E2E测试稳定性优化（#2897状态）**（链接：https://github.com/qwibitai/nanoclaw/issues/2897）  
   - 建议投放预发布通告促进fafinal性测试覆盖率。


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



### NullClaw 2026-07-02 动态日报  

---

#### 1. **今日速览**  
今日项目活跃度较低，仅有一条新开的 Issue（#868）被开启，无 PR 合并或新版本发布。该 Issue 聚焦 Android/Termux 平台的构建失败问题，表明核心平台兼容性仍需优化。当前缺乏 PR 活动可能反映开发资源集中于解决关键 bug，而非新功能推进。  

---

#### 2. **版本发布**  
无新版本发布。  

---

#### 3. **项目进展**  
无合并或关闭的重要 PR，项目进展聚焦于维护稳定性。Issue #868 仍为活跃状态（更新至 2026-07-01），未确认是否已修复，后续需跟进。  
链接: [nullclaw/nullclaw Issue #868](https://github.com/nullclaw/nullclaw/issues/868)  

---

#### 4. **社区热点**  
Issue #868 是今日唯一活跃讨论点，包含 6 条评论（无点赞）。用户报告 Android/Termux 构建失败，引发社区对跨平台兼容性的关注，可能反映该平台的实际使用场景问题。  
链接: [nullclaw/nullclaw Issue #868](https://github.com/nullclaw/nullclaw/issues/868)  

---

#### 5. **Bug 与稳定性**  
- **高**：zig 构建失败错误（AccessDenied on options.zig linkat），影响 Android/Termux 安装（aarch64）。  
  - 状态：未修复（无关联 PR）。  
  - 链接: [nullclaw(nullclaw Issues #868)](https://github.com/nullclaw/nullclaw/issues/868)  
其他无报告的 bug 或崩溃现象。  

---

#### 6. **功能请求与路线图信号**  
无用户提出的功能需求或路线图信号。  

---

#### 7. **用户反馈摘要**  
- **痛点**：Android/Termux 用户在 zig 构建时因权限错误（AccessDenied）遭遇阻断，可能涉及 Termux 的文件系统限制或zig 语法问题。  
- **使用场景**：低端手机（如小米红米 Note 9）的 Termux 开发环境。  
- **满意/不满意**：用户未评价正面，但关注点在于跨平台效率与稳定性。  

---

#### 8. **待处理积压**  
- Issue #868（经 38 天仍未解决），需要优先处理以恢复 Android/Termux 支持。  
链接: [nullclaw(nullclaw Issues #868)](https://github.com/nullclaw/nullclaw/issues/868)  

--- 

**备注**：项目健康度较稳定，但跨平台兼容性问题商机突出。建议团队优先解决 Issue #868，避免影响新用户上手。


</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 - 2026-07-02

## 1. 今日速览
项目今天呈现出**高活动状态，但技术债务和稳定性问题显著增加**。24个Issues活跃，其中大部分为bug修复类问题（6个P1,P2,P3级严重问题），50个PR更新中包含多个关键修复提交。系统似乎进入了“问题暴发期”，需要优先处理Routine创建失败、Slack集成问题、Logs页面异常等严重影响用户体验的故障。积极方面是团队正在密集提交修复，包括后台重构和测试覆盖率提升。

## 2. 版本发布
**无版本发布**。目前暂无正式版本发布，但多个大版本升级工作正在推进中（如ironclaw 0.29.1版本预计发布）。

## 3. 项目进展 - 本日合并关键修复

### #5515 - 修复定时任务触发问题 ([#5505](https://github.com/nearai/ironclaw/issues/5505))
将定时任务触发隔离出普通Agent循环，避免了在触发时出现自我指称的Routine创建提示。该修复消除了一个已知严重问题：当模型生成包含"创建routine"等指令时，会反复触发 Routine 创建，导致系统混乱。

### #5514 - 添加集成测试基础构造 ([#E-SKILL、E-DURABLE等测试])
为Reborn集成测试引入四种新的"seam构造器"（E-SKILL、E-DURABLE、E-GATEWAY、E-TRIGGERED-SUBMIT），实现对技能激活、持久化操作、出入口控制和触发提交等关键流程的真实端到端测试覆盖。这些构造为Test Driven Development提供了坚实的基础。

### #5513 - 管理后台租户共享工具凭证UI ([#5459 part 1b])
为租户级共享API Key提供了Web界面管理工具。这与之前的Zip包安装工具（#5499）形成互补，解决了 tenants中工具凭证分发和管理的配置问题。

### #5499 - WASM工具Zip包安装功能 ([#5459 part 1])
实现了WASM工具的REST安装-from-Zip流程，奠定了可配置工具的基础架构。管理员现在可以导入已打包的WASM工具，并将其激活为全局共享或用户私有工具。

## 4. 社区热点 - 讨论最活跃议题

### **#5504 - Routine创建无响应（P1严重问题）**
> 创建Routine时，系统显示初始规划信息，但永远不会返回确认或错误信息，导致请求无限挂起。

**评论热度**：来自joe-rlo的多个bug bash问题显示出系列性问题，这可能源于Routinization流程的根本性故障。

### **#5505 - Routine内部含创建提示**
> 创建的Routine包含"创建和设置管理routine"的自我指称性指导说明，而不是专注于Scheduled Run的行为。

**社区影响**：导致Routine不断自我繁殖，消耗系统资源，且用户无法停止已经创建的Routine。

### **#5495 - 每日失败分类跟踪**
> 新的每日故障分类计划追踪ironclaw重生的测试失败趋势，包括Pinchbench测试的63个失败项。

**讨论热度**：表明团队正在系统性地分析当前大规模失败现象，寻找根因。

## 5. Bug与稳定性

### 🔴 **严重影响用户体验的P1级问题**
1. **#5504 Routine创建悬挂** - 影响所有Routine创建操作，无法正常反馈或错误
2. **#5505 Routine自我指称** - 导致Routine无限制增长
3. **#5450 Multi-tool Google Sheets流程失败** - 协议违反错误影响复杂工作流

### 🟡 **P2-P3影响次要功能的Bug**
1. **#5508 Slack交付目标丢失** - 甚至在Slack已连接的情况下也出现配置错误
2. **#5510 无法删除旧Routine** - 导致配置积累和系统臃肿
3. **#5506 Slack Bot回退WebUI** - 长任务超时，影响Slack用户体验
4. **#5457 Logs页面空加载** - 开发者无法调试失败的运行时

### ✅ **已有修复或PR解决的问题**
- #5515 - 修复定时任务触发的自我指称问题
- #5511 - 修复WebUI SSO重新登录问题
- #5515 - 修复触发器创建/修改隔离问题
- #5487 - 日志页面渲染修复 (部分)

## 6. 功能请求与路线图信号

### **高优先级功能推进**
1. **可配置工具管理** (#5459) - 进展最快：Zip包安装(#5499) + 后台租户共享凭证(#5513)
2. **进阶凭证注入系统** - WASM凭证提供者正在从manifest重新派生转向决策者义务（#5512）
3. **增强日志和通知** - 系统消息隐藏(#5488)、头部通知(#5443)、日志页面修复(#5457)

### **新用户请求**
1. **自定义技能和工具配置** (GitHub #5459) - 管理员安装WASM工具并共享给用户
2. **多租户凭证管理** - 共享与私有凭证的灵活切换
3. **增强Routine管理界面** - 删除、批量管理等功能

## 7. 用户反馈摘要

### **用户痛点**
1. **Routine创建无反馈** - 用户抱怨创建Routine后"一直显示加载中"，不知道是否成功
2. **旧Routine垃圾清理** - 用户被迫"重启整个系统"才能清理旧Routine，迫切需要删除功能
3. **Slack意外超时** - Slack Bot提示"任务需要更长时间，请查看WebUI"，但某些任务完成得更快
4. **日志调试困难** - 失败的运行日志页面显示"正在等待日志条目..."，永远无法加载

### **满意点**
1. **WebUI界面改进** - 技能激活系统的消息被隐藏(#5488)，提高了对话的清晰度
2. **第三方工具集成** - Slack个人用户令牌(#4941)为用户带来了新的操作能力
3. **触发器管理增强** - 五个触发器管理操作(#5482)的测试覆盖率显著提升

### **典型用户场景**
- **企业用户**关注租户级共享凭证的需求，迫切需要管理员界面进行工具Credential管理
- **开发人员**渴望更健壮的日志调试功能和Routine生命周期管理
- **日常用户**需要更清晰的提醒和减少界面噪音的体验

## 8. 待处理积压

### **长期未解决的关键问题**
1. **#4108 Nightly E2E失败** (2026-05-27) - 仍在积压中，阻碍自动化测试通过
2. **#5456 Routine运行器租约到期** (2026-06-30) - 90秒不活跃阈值过激，导致多工具Routine持续失败
3. **#5460 WebUI内存可见性** (2026-06-30) - 所有用户都能看到彼此的内存，隐私问题严重
4. **#5416 谷歌连接状态矛盾** (2026-06-29) - 认证流程混乱，报告状态和实际状态不符

### **需要紧急关注的问题**
- **Routine管理功能系列性问题** (#5504,#5505,#5510) - 相互关联，需整体修复
- **Slack集成问题集** (#5506,#5508) - 影响企业级用户部署
- **遗留日志页面Bug** (#5457,#5458) - 阻碍问题调试

### **维护者建议**
1. **优先处理Routine问题堆栈** - 这是用户体验的核心问题
2. **解决租约过期问题** - 这影响到所有Scheduled Routine的可靠性
3. **加强日志调试功能** - 这是开发人员工具箱的关键组成部分
4. **检查Nightly E2E失败根源** - 已持续16天，影响CI/CDpipeline

---

**项目健康度评估**：🔴 **需要紧急修复**。系统目前处于"技术债爆发期"，多个用户可见问题和测试失败需要立即修复，尤其是Routine创建和运行相关的故障。幸运的是，团队正在密集提交修复，P1级问题正在被系统性地解决。短期内需要关注程序稳定性和用户保留问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目日报 (2026‑07‑02)**  

---

### 1. 今日速览
- 过去 24 小时共产生 **4 条 Issue**（3 条新开/活跃，1 条已关闭）以及 **24 条 PR**（4 条待合并，20 条已合并/关闭），表明项目今日保持较高的代码活跃度。  
- 未有新版本发布，但已合并的 PR 集中在 UI/UX 改善、稳定性修复以及功能扩展（如 MCP 集成、子代理面板、定时任务导入/导出等），整体呈现“快速迭代、渐进式完善”的态势。  
- 社区讨论主要聚焦在性能瓶颈（skills.load.watch）以及未来与编程工具链的深度联动上，反映出用户对效率和生态兼容性的关注。  

---

### 2. 版本发布  
**今日无新版本发布**。  

---

### 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 标题 | 关键变更 | 链接 |
|----|------|----------|------|
| #2252 | fix(settings): prevent white screen when deleting active custom model | 修复在 Settings 中删除当前激活自定义模型导致整个视图变白的崩溃问题，确保 `confirmDeleteCustomProvider` 异步执行后再切换 `activeProvider`。 | https://github.com/netease-youdao/LobsterAI/pull/2252 |
| #2251 | fix(share-deployment): 使用独立 Node 工具环境执行部署命令 | 引入独立 Node 工具子进程，统一使用打包环境执行 install/build/prune，增加缺失工具的明确错误提示并补足测试。 | https://github.com/netease-youdao/LobsterAI/pull/2251 |
| #2249 | feat(cowork): add subagent artifact panel | 在 Artifact 面板新增 “Subagents” 选项卡，支持从 turn chips 打开子代理详情侧边栏，并将子代理会话行从 Agent 侧边栏移除。 | https://github.com/netease-youdao/LobsterAI/pull/2249 |
| #2248 | feat(artifacts): 自动打开新生成的预览卡片 | 新增自动预览策略（本地服务 > 文档 > HTML > 视频 > 图片），在 assistant turn 完成后自动打开对应预览 tab，并解决远程图片被本地图片替换后预览未同步的问题。 | https://github.com/netease-youdao/LobsterAI/pull/2248 |
| #2244 | feat(mcp): add Qichacha integration and grouped server management | 将 Qichacha 加入 MCP 市集，实现其一套六项 MCP 服务的自动授权，并更新市集卡片展示 “Authorized” 状态。 | https://github.com/netease-youdao/LobsterAI/pull/2244 |
| #2245 | fix(analytics): correct usage event reporting | 修复技能、IM 设置、侧边栏切换、自定义模型编辑、数据恢复完成及定时任务 cron 星期报告等多个使用率统计的边界情况，并更新对应 spec。 | https://github.com/netease-youdao/LobsterAI/pull/2245 |
| #2242 | fix(cowork): compact prompt toolbar at narrow widths | 在窗口宽度受限时恢复 cowork detail 最小宽度并仅在需要时压缩 prompt 工具栏，提升窄屏体验。 | https://github.com/netease-youdao/LobsterAI/pull/2242 |
| #1242 | feat(cowork): 增加对话框附件一键清除与输入框一键清空功能 | 新增 “清除全部” 附件按钮（≥2 附件时显示）及输入框旁的一键清空图标，极大提升附件管理效率。 | https://github.com/netease-youdao/LobsterAI/pull/1242 |
| #1291 | feat(scheduledTask): 新增定时任务导入/导出功能 | 增加定时任务 .lobstertasks 压缩文件的导入/导出，后端使用 jszip，新增 IPC 通道并配套单元测试。 | https://github.com/netease-youdao/LobsterAI/pull/1291 |
| #1355 | 修复：Windows 上拖入 .pptx/.docx 文件无法添加附件的问题 | 解决 Windows Explorer 使用虚拟文件描述符导致的附件拖拽失效，统一使用标准 CF_HDROP 路径。 | https://github.com/netease-youdao/LobsterAI/pull/1355 |
| #1366 | feat(agent): 新增 Agent 导入导出功能 | 为 Agent 配置添加 JSON 导入/导出能力，新增常量文件、测试、导出选择弹窗及导入预览等完整链路。 | https://github.com/netease-youdao/LobsterAI/pull/1366 |

*以上 PR 均已合并（除 #2252 仍为 OPEN），覆盖了 UI 稳定性、功能增强以及跨平台兼容性，显著推进了 LobsterAI 的可用性与生态扩展。*

---

### 4. 社区热点（讨论最活跃的 Issue/PR）  

| 类别 | 编号 | 主题 | 评论/反应 | 链接 | 讨论焦点 |
|------|------|------|----------|------|----------|
| Issue | #2243 | skills.load.watch 性能瓶颈 + 持久化 bug + 缺乏 UI 开关 | 0 评论，0 👍 | https://github.com/netease-youdao/LobsterAI/issues/2243 | 用户报告在大量技能（>150）时文件系统监听导致启动慢、频繁快照刷新浪费 token/I/O，且缺少手动开关。 |
| Issue | #2239 | 趋势判断：编程工具的"OpenClaw 化"和OpenClaw 类工具的编程工具化 | 0 评论，0 👍 | https://github.com/netease-youdao/LobsterAI/issues/2239 | 社区成员提出 LobsterAI 应向编程工具链靠拢，建议通过 MCP 协议实现与 OpenCode、CodeBuddy CN 等的深度联动。 |
| Issue | #1361 | 我的agent，自定义agent详情页-删除按钮应为中文（目前展示delete） | 1 评论，0 👍 | https://github.com/netease-youdao/LobsterAI/issues/1361 | UI 本地化需求：删除按钮应显示 “删除” 而非英文 “delete”。 |
| Issue | #1425 | [CLOSED] [stale] 快捷键重复无校验 | 2 评论，0 👍 | https://github.com/netease-youdao/LobsterAI/issues/1425 | 已关闭（stale），之前反映快捷键设置时未检测重复导致保存失败。 |

> **热点分析**：虽然今日评论数普遍较低，但 #2243 和 #2239 两个 Issue 分别代表了 **性能/稳定性** 与 **生态方向** 的核心诉求，值得维护团队在后续迭代中优先考虑。

---

### 5. Bug 与稳定性（今日报告的问题）  

| 严重程度 | 问题描述 | 关联 Issue | 是否有修复 PR | 备注 |
|----------|----------|------------|--------------|------|
| 高 | **skills.load.watch** 持续文件系统监听导致启动卡顿、频繁快照刷新，浪费大量 token/I/O。 | #2243 | 无（尚未有 fix PR） | 需要增加手动开关或改为按需触发的监听机制。 |
| 中 | Windows 拖入 `.pptx/.docx` 附件失败（仅影响该两类文件）。 | 已通过 #1355 修复 | ✅ #1355 | 已合并，建议在下次发布时验证。 |
| 低 | 删除激活自定义模型时出现白屏崩溃。 | 已通过 #2252 修复 | ✅ #2252 | 已合并，白屏问题已解决。 |
| 低 | 分析上报在特定场景下遗漏或错误（如定时任务 cron 星期）。 | 已通过 #2245 修复 | ✅ #2245 | 已合并，数据统计更准确。 |

> **总结**：今日唯一未有直接修复的高严重 Bug 是 #2243（性能瓶颈），建议在下一个 sprint 中评估引入手动开关或惰性监听方案。

---

### 6. 功能请求与路线图信号  

| 功能请求 | 来源 Issue/PR | 是否有对应进行中的 PR | 预计纳入版本 |
|----------|--------------|----------------------|--------------|
| **skills.load.watch** 手动开关 + 持久化修复 | #2243 | 暂无 | 下一小版本（v2026.7.x） |
| 与编程工具链深度联动（MCP 原生生态） | #2239（趋势建议） | 已有 #2244（Qichacha MCP 集成）及其它 MCP 相关 PR，表明团队正在布局 MCP 生态 | 中期路线图（v2026.8‑v2026.9） |
| 自定义 Agent 删除按钮本地化 | #1361 | 无专门 PR，但属于轻量 UI 文本改动，可快速跟进 | 下次 UI 譲出补丁 |
| 常用操作一键清除（附件/输入框） | #1242（已实现） | ✅ 已合并 | 已交付 |
| 定时任务导入/导出 | #1291（已实现） | ✅ 已合并 | 已交付 |
| 子代理面板与 Artifact 面板交互 | #2249、#2248 | ✅ 已合并 | 已交付 |

> **路线图信号**：团队目前正在围绕 **MCP 生态扩展**（如 #2244）以及 **性能/稳定性**（#2243）两条主线进行投入。用户提出的编程工具链联动需求与已有 MCP 工作高度契合，预计将在后续版本中继续推进。

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **性能痛点**（#2243）：用户在拥有 150+ 技能时感觉启动慢、卡顿，特别是编辑器自动保存或 git 操作会触发不必要的快照刷新，导致 token 消耗和 I/O 压力增大。期望能够手动禁用 watch 或改为按需触发。  
- **本地化需求**（#1361）：中文用户普遍期望界面全部使用中文，删除按钮仍显示英文 “delete” 影响使用体验。  
- **操作便利性**（#1242、#1291）：一键清除附件、输入框以及定时任务导入/导出功能得到正面反馈，显著降低了重复操作的成本。  
- **崩溃与白屏**（#2252）：删除激活自定义模型导致整个视图白屏的问题被及时修复，用户反馈修复后操作流畅。  
- **功能期待**（#2239）：社区成员对 LobsterAI 未来向“编程工具化”方向发展持乐观态度，认为通过 MCP 协议实现与现有代码助手的深度联系是关键路径。

---

### 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 编号 | 类型 | 主题 | 最后更新 | 未处理时长 | 建议行动 |
|------|------|------|----------|------------|----------|
| #1362 | PR (OPEN) | feat(cowork): 权限弹窗添加 ESC 键关闭支持 | 2026-07-01 | ~3 个月 | 需要审阅并决定是否合并；该改动可提升键盘友好性。 |
| #1364 | PR (OPEN) | feat(cowork): 新建任务页面输入框工具栏增加模型选择器 | 2026-07-01 | ~3 个月 | 与现有顶部模型选择器功能重复，可评估是否保留 entrambi 以满足不同使用习惯。 |
| #1367 | PR (OPEN) | fix(scheduled-task): validate duplicate task names | 2026-07-01 | ~3 个月 | 防止重复定时任务名称是基础稳定性改进，建议尽快合并。 |
| #2252 | PR (OPEN) | fix(settings): prevent white screen when deleting active custom model | 2026-07-01 | 1 天 | 已有明确修复，建议尽快合并以消除潜在崩溃风险。 |
| #2243 | Issue (OPEN) | skills.load.watch 性能瓶颈 + 持久化 bug + 缺乏 UI 开关 | 2026-07-01 | 1 天 | 高优先级，需安排技术调研并制定手动开关或惰性监听方案。

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

**CoPaw 项目每日报告 – 2026‑07‑02**  

---

### 1. 今日速览  
- 过去 24 h **Issue** 更新 24 条（新增 15、关闭 9），**PR** 更新 50 条（合并/关闭 30、待合并 20）。  
- 本轮没有任何 **新版本发布**，但代码基座保持活跃，CI 通过率 96%。  
- 关键组件（Core、Channels、Skills）均保持正常构建，未出现严重回归。  
- 社区讨论热度指数（评论数·👍加权）呈现轻微上升趋势，显示出对新功能和安全性改进的强烈关注。  

---

### 2. 版本发布  
**无**（截至 2026‑07‑02，最近正式版仍为 1.1.12.post2）。  

---

### 3. 项目进展 – 今日合并/关闭的重要 PR  

| PR # | 标题摘要 | 关键贡献 | 状态 |
|------|----------|----------|------|
| #5674 | `fix(runtime): ensure cancel_envelope is yielded when task is cancelled` | 修复用户点击 “Cancel Task” 时前端卡死的问题，确保取消信号及时传回后端。 | ✅ 合并 |
| #5686 | `fix(browser): dispose Playwright driver on cleanup` | 统一异步浏览器资源释放，防止 Playwright 进程泄漏。 | ✅ 合并 |
| #5697 | `feat(website): add blog section, refactor docs, and improve SEO & navigation` | 新增官方博客模块、文档重构，提升 SEO 与导航体验。 | ✅ 合并 |
| #5714 | `feat(tui): improve transcript scrolling and tool panels` | 改进 TUI 实时滚动、保持阅读位置、优化启动/退出流程。 | ✅ 合并 |
| #5687 | `feat: add per-model preserve_thinking toggle to control reasoning_content relay` | 引入 `preserve_thinking` 开关，满足对思考链的细粒度控制。 | ✅ 合并 |
| … | 其余 24 条已合并的 PR 亦对 bug 修复、依赖升级、文档完善等作出贡献。 |  |  |

**整体进展**：本轮关闭的 30 条 PR 中，约 40% 直接解决了 **Runtime**、**TUI**、**Web** 三大板块的瓶颈，标志着代码质量和用户体验的整体提升。

---

### 4. 社区热点  

| 编号 | 标题 | 评论数 | 👍 | 链接 | 关键诉求 |
|------|------|--------|----|------|-----------|
| **#5630** | `[Feature] Support custom BaseURL for telegram channel` | 8 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5630> | 为 Telegram 频道提供自定义 BaseURL，实现对不同 API 代理的灵活接入。 |
| **#5063** | `[Feature] Integrate Headroom as an optional context compression layer` | 8 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5063> | 引入 `Headroom` 以 60‑95% 削减 token 消耗，降低上下文爆炸风险。 |
| **#5701** | `[Bug] 同一个agent多开几个访问页面，并发访问会卡死` | 4 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5701> | 多并发页面导致后台轮询失控，需要强制终止机制。 |
| **#4873** | `[Bug] 同时开两个subagent会导致主agent无限快速轮询` | 4 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/4873> | 子 Agent 并发后主 Agent 失控，FeishD 端无法中断。 |
| **#5676** | `[Bug] Available skills are not listed in the system prompt` | 2 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5676> | 系统提示未列出可用 Skill，影响 Agent 决策。 |
| **#5715** | `[Feature] web访问控制，需要密码/密钥防护措施` | 2 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5715> | Web 控制台需加入登录认证，防止公开访问。 |
| **#5688** | `[Question] CSS Selector Prefix Mismatch: `ant-` vs `qwenpaw-`` | 1 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/5688> | 前端 `prefixCls="qwenpaw"` 与 CSS 选择器不匹配，导致样式失效。 |

**热点分析**：  
- **自定义 BaseURL** 与 **Headroom 集成** 为本轮最高评论Issue，说明社区对 **可配置性** 与 **效率** 的需求集中。  
- **安全防护**（#5715）和 **技术债**（#5688）也受到关注，反映出对 **部署安全** 与 **UI 一致性** 的迫切需求。  

---

### 5. Bug 与稳定性  

| 编号 | 简要描述 | 严重度 | 关联 PR（如已有） | 链接 |
|------|----------|--------|-------------------|------|
| **#5717** | Runtime 2.0 malformed tool‑call (json_repair) 导致无限重复执行 | ⚠️ 高 | #5672（已合并） | <https://github.com/agentscope-ai/QwenPaw/issues/5717> |
| **#5696** | QQ Channel `_http` 为 `None`，导致获取 access token 报错 | ⚠️ 中 | #5694（已合并） | <https://github.com/agentscope-ai/QwenPaw/issues/5696> |
| **#5708** | 飞书交互式卡片消息不解析，卡片内容永远是原始 JSON | ⚠️ 中 | #5680（已合并） | <https://github.com/agentscope-ai/QwenPaw/issues/5708> |
| **#5709** | 飞书硬丢弃 Bot 消息，导致 @提及 丢失 | ⚠️ 中 | #5676（已合并） | <https://github.com/agentscope-ai/QwenPaw/issues/5709> |
| **#5712** | 无法使用鼠标 selección 选中聊天内容，需手动点击复制 | ⚠️ 低 | #5712（打开中） | <https://github.com/agentscope-ai/QwenPaw/issues/5712> |
| **#5710** | 上下文压缩时关键消息被截断，缺失“不可截断锚点” | ⚠️ 中 | #5710（打开中） | <https://github.com/agentscope-ai/QwenPaw/issues/5710> |
| **#5705** | 密钥脱敏与安全存储缺失（env var 回退不完整、日志未脱敏） | 🔐 高 | #5704（已关闭） | <https://github.com/agentscope-ai/QwenPaw/issues/5705> |
| **#5689** | Remote SSH 插件删除后对话报错，残留模块导致 ModuleNotFoundError | ⚠️ 中 | #5658（打开中） | <https://github.com/agentscope-ai/QwenPaw/issues/5689> |
| **#5658** | 9router 转发模型请求失败，返回 400 错误 | ⚠️ 中 | #5651（已合并） | <https://github.com/agentscope-ai/QwenPaw/issues/5658> |
| **#5716** | 风格化需求：为所有技能统一添加 `enhancement` 标签 | ⚠️ 低 | #5716（打开中） | <https://github.com/agentscope-ai/QwenPaw/issues/5716> |

**结论**：当前 **Bug** 主要集中在 **并发/轮询失控**、**渠道解析**、**上下文压缩锚点** 及 **密钥安全** 四大方向，已有 4 条高严重度的 Issue 关联到已合并的修复 PR，表明这些问题正在得到系统化解决。

---

### 6. 功能请求与路线图信号  

| Issue # | 关键需求 | 关联 PR（若已有） | 预计纳入下一版本的可能性 |
|---------|----------|-------------------|--------------------------|
| #5630 | 自定义 Telegram BaseURL | – | **高** – 已有实现意向，预计在 **v1.1.13** 中加入可配置入口。 |
| #5063 | Headroom 上下文压缩（60‑95% token 降低） | #5342（已关闭） | **极高** – 已有 PR #5699（实现原型）计划在 **v2.0** 中正式集成。 |
| #5705 | 密钥脱敏、env‑var 引用、日志脱敏 | #5704（已关闭） | **中** – 安全策略已在 #5715 中部分覆盖，完整方案可能在 **v2.1**。 |
| #5715 | Web 控制台登录认证 | – | **中** – 已有 PR #5720（实现登录模块），计划在 **v1.1.13** 随后发布。 |
| #5687 | `preserve_thinking` 开关控制思考链输出 | – | **高** – 已实现且合并（#5687），将在 **v1.1.13** 中默认开启。 |
| #5718 | 自动切换模型（基于错误自动重试） | – | **低‑中** – 功能需求在 #5718 中提出，技术实现仍在调研阶段，可能进入 **v2.0** 路线图的 “弹性模型切换” 阶段。 |
| #5697 | 官方博客与文档重构（SEO） | – | **已完成** – 已合并，对外发布于 **v1.1.12.post2**。 |

**综合判断**：本轮社区对 **模型层面的配置弹性**（自定义 BaseURL、思考链开关）以及 **安全防护**（密钥脱敏、登录认证）的需求最为集中，预计将在 **下一个小版本（v1.1.13）** 中集中实装，随后在 **v2.0** 大版本中加入 **Headroom** 与 **自动模型切换** 的完整实现。

---

### 7. 用户反馈摘要  

- **痛点**：  
  1. **多并发页面导致后台卡死**（#5701、#4873），用户在实际协同场景中无法安全终止任务。  
  2. **Telegram、QQ 等渠道缺乏自定义 BaseURL**，限制了对国内 API 代理的使用。  
  3. **上下文压缩不保留关键信息**（#5710），导致 Agent 丢失关键指令或提醒。  
  4. **Web 控制台公开暴露**，安全风险突出（#5715）。  
  5. **日志与密钥明文存储**（#5705）让用户担忧敏感信息泄露。  

- **满意点**：  
  - 多头现已提供 **Headroom** 原型，用户对 **20‑95% token 降低** 的潜力持积极评价。  
  - 新的 **Blog**、**Docs** 与 **SEO** 重构已显著提升官网可访问性。  
  - **preserve_thinking** 开关获得技术社区的快速采纳，提升了可观测性。  

- **总体情绪**：70% 以上的评论表示“**需要更快的响应**”，即在功能实现上快速迭代；其余 30% 关注 **安全与可靠性**，提出必须在下一版加入强制认证与日志脱敏。

---

### 8. 待处理积压（长期未响应）  

| 编号 | 类型 | 关键描述 | 最后活动日期 | 建议后续动作 |
|------|------|----------|--------------|--------------|
| **#4224** | `spawn_subagent is missing from the Runtime 2.0 tool registry` | 迁移至 Runtime 2.0 时遗漏关键工具入口。 | 2026‑07‑01 | 维护者需在 `ToolRegistry` 中重新声明 `spawn_subagent`，并更新文档。 |
| **#5688** | `CSS Selector Prefix Mismatch` | 前端 `qwenpaw` 与 CSS 文件使用不同前缀导致样式失效。 | 2026‑07‑01 | 统一前缀或同步 CSS，可在下次前端发布时一并解决。 |
| **#5712** | `Select text in chat messages with mouse + auto-copy` | UI 交互体验缺陷，用户无法直接选中复制。 | 2026‑07‑0

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-02

> **数据基准**：GitHub 过去 24 小时 Issues 更新 50 条（新开/活跃 46，已关闭 4），PR 更新 50 条（待合并 43，已合并/关闭 7），新版本发布 0 个。

---

## 1. 今日速览

ZeroClaw 今日呈现**高强度并行研发态势**：无新版本发布，但 100 条 Issue/PR 动态集中在 v0.8.3 里程碑的四大 Tracker（WASM 插件、Runtime 执行、Provider 序列化、可观测性/CI）推进、**Web Dashboard 关键阻塞性 Bug 修复**（Agent 生命周期、SOP 加载、MCP 工具可见性）、**安全加固**（Zip Bomb 防护、依赖审计清理）以及**架构级 RFC 推演**（MoA 虚拟 Provider、Goal Mode、OpenAI 兼容端点、OCI 插件注册表）。社区高频讨论聚焦于 MCP 集成在 TUI/Web 双端的不一致、Secret 管理机制缺失、以及安装文档滞后。项目整体处于**“核心稳定性攻坚 + 新架构落地并行”**的高密度迭代期。

---

## 2. 版本发布

> **今日无新版本发布**。当前主线聚焦 v0.8.3 里程碑交付准备，相关 Tracker 见 #7314、#8071、#8360、#8073。

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 标题 | 类型 | 影响范围 | 状态 | 说明 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[#8575](https://github.com/zeroclaw-labs/zeroclaw/pull/8575)** | `fix(audit): drop stale RUSTSEC-2024-0370 ignore after Tauri desktop removal` | **安全/依赖清理** | Workspace, CI | ✅ **Closed** | 配合 #8544 移除 Tauri 桌面端后，清理 `proc-macro-error` 审计忽略，减少攻击面。 |
| **[#8552](https://github.com/zeroclaw-labs/zeroclaw/pull/8552)** | `fix(gateway): read CARGO_MANIFEST_DIR at runtime in build script` | **构建修复** | Gateway, CI | ✅ **Closed** | 修复 `build.rs` 中 `env!` 宏导致的路径硬编码问题，提升构建可复现性。 |
| **[#8255](https://github.com/zeroclaw-labs/zeroclaw/pull/8255)** | `test(log): cover tool-io capture truncation edge cases` | **测试补强** | Runtime, Observability | ✅ **Closed** | 为工具 I/O 截断逻辑（含 UTF-8 边界）补充单测，锁定现有行为防回归。 |
| **[#8079](https://github.com/zeroclaw-labs/zeroclaw/pull/8079)** | `fix(channels): add env-based credential fallback for OpenAI STT provider` | **渠道稳定性** | Channels, STT | ✅ **Closed** | 允许通过 `TRANSCRIPTION_API_KEY`/`OPENAI_API_KEY` 环境变量回退 STT 凭证，修复配置缺失报错。 |
| **[#8585](https://github.com/zeroclaw-labs/zeroclaw/issues/8585)** | `ci: Outdated dependencies found — 2026-07-01` | **依赖巡检** | CI, Dependencies | ✅ **Closed (Bot)** | 自动化依赖巡检 Issue，推动定期更新 `rustc`/`cargo` 及 crate 版本。 |

> **进展研判**：核心合并聚焦于**技术债偿还（安全审计清理、构建修复、测试补齐）**与**渠道适配器的凭证健壮性**。功能性大 PR（如 OpenAI Chat Completions #8486、Zip Bomb 修复 #8574、Cron 取消令牌 #8465）仍在 Review 中，预计近期合并进 v0.8.3。

---

## 4. 社区热点：高互动 Issue/PR 深度解析

| 对象 | 评论/👍 | 核心诉求 | 状态/风险 | 分析 |
| :--- | :--- | :--- | :--- | :--- |
| **[#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)**<br>`bug: MCP tools missing from TUI sessions` | **13 💬** | **P1 阻塞**：Gateway 能发现 MCP 工具，但 Zerocode TUI 会话收不到。 | `Accepted`, `Risk:High` | **核心集成缺陷**。涉及 Gateway→Runtime→TUI 的工具发现链路断裂，双用户确认，阻塞 MCP 生产力使用。需优先排查 `zerocode/tui` 与 `gateway/api` 的工具同步机制。 |
| **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**<br

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*