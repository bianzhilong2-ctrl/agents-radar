# OpenClaw 生态日报 2026-07-12

> Issues: 464 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-12 01:50 UTC

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

# OpenClaw 项目日报 - 2026-07-12

## 今日速览
OpenClaw 项目在过去 24 小时内表现活跃，共处理 464 条 Issues（232 新增/活跃，232 关闭）和 500 条 PR（245 待合并，255 已合并/关闭），并发布了新版本 v2026.7.1-beta.5。项目健康度良好，活跃度评估为中高等，社区反馈积极，多个关键 Bug 已有相应的 PR 修复。

## 版本发布
### v2026.7.1-beta.5: OpenClaw 2026.7.1-beta.5

#### Highlights
- **Conversational onboarding**: Crestodian now runs a real agent-loop setup across the CLI, web install, and macOS app, with AI-guided provider setup, model-judged approvals bound to exact operations, masked credential prompts, and deterministic fallback when no model is available.

## 项目进展
今日合并的重要 PR 显示项目在稳定性和功能方面持续推进：

1. **PR #104877** - 修复了 V8 堆内存压力阈值从 V8 堆限制中推导的问题，解决了在扩大 V8 堆（例如使用 `NODE_OPTIONS=--max-old-space-size=8192`）时收到错误内存压力诊断的问题。
   - 链接: [PR #104877](https://github.com/openclaw/openclaw/pull/104877)

2. **PR #104866** - 修复了自动回复功能，使得命令轮次继续转化为代理轮次时采用目标运行槽位，解决了命令轮次在没有活跃运行时死等目标问题。
   - 链接: [PR #104866](https://github.com/openclaw/openclaw/pull/104866)

3. **PR #104859** - 加强了 SQLite 状态生命周期和快照，解决了并发模式/会话活动、忙 WAL 检查点、膨胀的自由列表或损坏的备份内容导致的陈旧转录写入、隐藏的检查点失败和不完全的备份问题。
   - 链接: [PR #104859](https://github.com/openclaw/openclaw/pull/104859)

4. **PR #104681** - 从 V8 堆大小限制推导堆阈值，修复了在使用大于默认值（例如 8 GB 在 15 GB 内存主机上）的 `NODE_OPTIONS=--max-old-space-size` 时收到错误内存压力诊断的问题。
   - 链接: [PR #104681](https://github.com/openclaw/openclaw/pull/104681)

5. **PR #104834** - 将技能和技能工作坊整合到插件中心，解决了控制界面侧边栏将技能、插件和技能工作坊暴露为三个 separate 目的地的问题。
   - 链接: [PR #104834](https://github.com/openclaw/openclaw/pull/104834)

这些 PR 的合并表明项目正在逐步解决稳定性问题，同时也在提升用户体验。

## 社区热点
讨论最活跃的 Issues 和 PRs 如下：

1. **Issue #75** - "[OPEN] [enhancement, help wanted, P2, clawsweeper:no-new-fix-pr, clawsweeper:needs-maintainer-review, clawsweeper:needs-product-decision, clawsweeper:needs-security-review, impact:security, issue-rating: 🌊 off-meta tidepool, impact:ux-friction] Linux/Windows Clawdbot Apps"
   - 作者: steipete | 创建: 2026-01-01 | 更新: 2026-07-11 | 评论: 110 | 👍: 81
   - 链接: [Issue #75](https://github.com/openclaw/openclaw/issues/75)
   - 诉求: 社区希望在 Linux 和 Windows 上提供类似 macOS 的 Clawdbot 应用。

2. **Issue #88838** - "[CLOSED] [maintainer, P1, clawsweeper:no-new-fix-pr, clawsweeper:needs-maintainer-review, clawsweeper:needs-product-decision, clawsweeper:needs-security-review, impact:session-state, impact:message-loss, issue-rating: 🌊 off-meta tidepool, maturity:stable] Track core session/transcript SQLite migration via accessor seam"
   - 作者: jalehman | 创建: 2026-06-01 | 更新: 2026-07-11 | 评论: 37 | 👍: 3
   - 链接: [Issue #88838](https://github.com/openclaw/openclaw/issues/88838)
   - 诉求: 跟踪核心会话/转录 SQLite 迁移。

3. **Issue #99241** - "[OPEN] [P1, clawsweeper:no-new-fix-pr, clawsweeper:needs-product-decision, clawsweeper:needs-live-repro, impact:session-state, impact:message-loss, issue-rating: 🐚 platinum hermit] Tool outputs sometimes render as image attachments and become unreadable to the agent"
   - 作者: aaajiao | 创建: 2026-07-02 | 更新: 2026-07-11 | 评论: 21 | 👍: 2
   - 链接: [Issue #99241](https://github.com/openclaw/openclaw/issues/99241)
   - 诉求: 工具输出有时渲染为图像附件，导致代理无法读取。

4. **PR #104861** - "fix(codex): prevent corrupted emoji in sandbox HTTP failures"
   - 作者: zhangguiping-xydt | 创建: 2026-07-12 | 更新: 2026-07-12 | 评论: undefined | 👍: 0
   - 链接: [PR #104861](https://github.com/openclaw/openclaw/pull/104861)
   - 诉求: 防止沙箱 HTTP 故障中的损坏 emoji。

## Bug 与稳定性
今天报告的 Bug 和稳定性问题如下：

1. **Issue #104721** - "[OPEN] [bug, regression, P2, clawsweeper:no-new-fix-pr, clawsweeper:needs-security-review, clawsweeper:source-repro, impact:session-state, impact:security, impact:auth-provider, issue-rating: 🦞 diamond lobster, maturity:stable] [Bug]: > All tool results return "(see attached image)" literal string instead of actual output."
   - 严重程度: 高 (P2, 稳定性问题)
   - 状态: 打开中
   - 链接: [Issue #104721](https://github.com/openclaw/openclaw/issues/104721)

2. **Issue #86538** - "[CLOSED] [P1, clawsweeper:no-new-fix-pr, clawsweeper:needs-product-decision, clawsweeper:source-repro, clawsweeper:linked-pr-open, impact:session-state, impact:message-loss, issue-rating: 🦞 diamond lobster] [Bug]: Session write-lock timeouts block subagent delivery lanes"
   - 严重程度: 高 (P1, 会话状态问题)
   - 状态: 已关闭
   - 链接: [Issue #86538](https://github.com/openclaw/openclaw/issues/86538)

3. **Issue #55334** - "[CLOSED] [P1, clawsweeper:no-new-fix-pr, clawsweeper:needs-maintainer-review, clawsweeper:needs-product-decision, clawsweeper:needs-live-repro, impact:session-state, impact:crash-loop, issue-rating: 🐚 platinum hermit, maturity:stable] [perf]: sessions.json unbounded growth causes gateway OOM — skillsSnapshot duplicated per session, no pruning of ephemeral sessions"
   - 严重程度: 高 (P1, 性能问题)
   - 状态: 已关闭
   - 链接: [Issue #55334](https://github.com/openclaw/openclaw/issues/55334)

4. **Issue #84903** - "[CLOSED] [P1, clawsweeper:no-new-fix-pr, clawsweeper:needs-maintainer-review, clawsweeper:needs-product-decision, clawsweeper:needs-live-repro, impact:session-state, impact:message-loss, issue-rating: 🐚 platinum hermit, maturity:stable] A single stalled agent session blocks the entire Gateway event loop (isolation failure)"
   - 严重程度: 高 (P1, 隔离失败)
   - 状态: 已关闭
   - 链接: [Issue #84903](https://github.com/openclaw/openclaw/issues/84903)

## 功能请求与路线图信号
用户提出的几个新功能需求以及它们的潜在纳入情况：

1. **Issue #10687** - "Models: fully dynamic model discovery (OpenRouter + beyond)"
   - 诉求: 实现对提供者（从 OpenRouter 开始）的完全动态模型发现。
   - 当前状态: 打开中
   - 链接: [Issue #10687](https://github.com/openclaw/openclaw/issues/10687)

2. **Issue #10659** - "Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys"
   - 诉求: 添加“遮蔽机密”系统，允许代理使用 API 密钥但不能查看它们。
   - 当前状态: 打开中
   - 链接: [Issue #10659](https://github.com/openclaw/openclaw/issues/10659)

3. **Issue #7707** - "Feature Request: Memory Trust Tagging by Source"
   - 诉求: 根据来源（用户命令、网页抓取、第三方技能）为代理记忆条目标记信任级别。
   - 当前状态: 打开中
   - 链接: [Issue #7707](https://github.com/openclaw/openclaw/issues/7707)

4. **Issue #8355** - "Feature: Streaming TTS pipeline for voice calls (sentence-level LLM→TTS→audio)"
   - 诉求: 为语音通话实现流式 TTS 管道。
   - 当前状态: 打开中
   - 链接: [Issue #8355](https://github.com/openclaw/openclaw/issues/8355)

## 用户反馈摘要
从 Issues 评论中提炼的真实用户痛点、使用场景、满意/不满意的地方：

1. **痛点**: 工具输出渲染问题（如变成图像附件），导致代理无法读取实际输出。
2. **使用场景**: 需要在 Linux 和 Windows 上使用与 macOS 相同的功能。
3. **满意/不满意**: 用户对 CLI 和 Web 安装向导的改进表示满意，但对某些性能瓶颈（如 sessions.json 增长）仍感到不满。
4. **反馈**: 对 Conversational onboarding 的改进表示肯定，认为这提高了用户体验。

## 待处理积压
长期未响应的重要 Issue 或 PR（需维护者关注）：

1. **Issue #75** - Linux/Windows Clawdbot Apps
   - 链接: [Issue #75](https://github.com/openclaw/openclaw/issues/75)

2. **Issue #10687** - Models: fully dynamic model discovery (OpenRouter + beyond)
   - 链接: [Issue #10687](https://github.com/openclaw/openclaw/issues/10687)

3. **Issue #10659** - Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys
   - 链接: [Issue #10659](https://github.com/openclaw/openclaw/issues/10659)

4. **Issue #8355** - Feature: Streaming TTS pipeline for voice calls
   - 链接: [Issue #8355](https://github.com/openclaw/openclaw/issues/8355)

总体来看，OpenClaw 项目在过去一天中持续发展，社区活跃度高，多个关键问题正在得到关注和解决。新版本的发布标志着项目不断进步，用户反馈也在推动着后续功能的开发。

---

## 横向生态对比

## 1. 生态全景

个人 AI 助手和自主智能体生态正经历快速的成熟期。**核心趋势** 包括：

1. **稳定性与安全并重** – 超过 70% 的活跃项目报告了高严重性 Bug（会话锁、安全密钥泄露、沙盒崩溃），并正在积极修复。
2. **多模态与生产力整合** – 流行入门、视频编辑和语音合成的新功能，同时 UI/UX（暗黑模式、实时进度）也得到持续优化。
3. **平台扩展** – Linux/Windows/macOS 本机桌面应用和图形用户界面（WebUI、Clawbot）成为用户常用的功能。
4. **动态模型发现与 AI 引导的配置** – “完全动态模型发现”（OpenRouter、供应商中立）和“遮蔽机密”等请求正在上升，表明对 API 成本控制的担忧。

总体而言，社区在**高吞吐量代码评审**（如 OpenClaw、ZeroClaw）和**质量巩固**（如 Hermes、NanoBot）之间取得平衡，生态正从野蛮生长转向工程化和成熟。

---

## 2. 各项目活跃度对比

| 项目 | Issues（过去24h） | PRs（过去24h） | 版本发布 | 健康度评估* |
|------|------------------|---------------|------------|--------------|
| **OpenClaw** | **464**（232 新/活跃，232 关闭） | **500**（245 待合并，255 合并/关闭） | v2026.7.1-beta.5（新发布） | 🟢 **高**（快速合并、高 bug 修复优先级） |
| **ZeroClaw** | **50**（约 25 新） | **50**（≈ 20 待合并，30 合并） | 无 | 🟡 **中-高**（高工程量，活跃的披露修复） |
| **IronClaw** | **8**（7 新，1 关闭） | **50**（≈ 36 待合并，14 合并） | 无（但 PR #5598 bump 版本） | 🟡 **中-高**（PR 数量多，版本准备中） |
| **NanoClaw** | **22**（全新活跃） | **26**（全新待合并） | 无 | 🟡 **中**（稳定但合并节奏较慢） |
| **Hermes Agent** | **40**（全新活跃） | **49**（≈ 48 待合并，1 合并） | 无（v0.18.2） | 🔴 **中**（PR 瓶颈，bug 较多） |
| **CoPaw** | **23**（全新活跃） | **7**（3 待合并，4 合并） | 无（v2.0.0） | 🟡 **中**（UI 修复密集） |
| **NanoBot** | **22**（全新活跃） | **26**（全新待合并） | 无（v1.5.x） | 🟡 **中**（安全重点，稳定发布） |
| **NullClaw** | **1**（grok-cli 请求） | **0** | 无 | 🔴 **低**（孤立新功能请求） |
| **LobsterAI** | **3**（UI 痛点） | **1**（stale） | 无（v2026.4.1） | 🔴 **低-中**（缓慢迭代） |
| **Moltis** | **0** | **1**（CalDAV 修复，待合并） | 无 | 🟢 **中**（单一主导 PR） |
| **PicoClaw** | – | – | – | 🟢 安全通过，无活动数据 |
| **ZeptoClaw** | – | – | – | 🟢 无活动数据 |

*健康度为定性5级评分：**高** = 稳定 + 合并快，**中** = 稳步发展，**低** = 几乎没有活动或依赖单点变更。

---

## 3. OpenClaw 在生态中的定位

| 对比角度 | OpenClaw | 典型竞争对手（如 **NanoClaw** / **ZeroClaw** / **Hermes**） |
|------------|----------|----------------------------------------------------------------|
| **功能范围** | **完整自主循环** + 端到端 CLI/Web/macOS 安装 + 内置插件中心。 | **NanoClaw** 强调安全与运行时健壮性；**Hermes** 聚焦于模块化技能扩展；**ZeroClaw** 专注于诊断与目标管理。 |
| **技术路径** | 基于 **V8 堆管理、SQLite 持久化** 和 AI 引导的“Crestodian”设置。 | **NanoClaw** 集中于沙盒与权限隔离；**ZeroClaw** 采用 **Goal 状态与 Pipeline 工具**，**Hermes** 强调 **视频与语音管道**。 |
| **社区规模** | **大规模** – 464 个 Issues、500 个 PRs，持续高合并。 | **中小规模** – 零到几十个 Issues/PR，每个项目各有侧重；社区粘性较低。 |
| **用户体验** | “Conversational onboarding”、技能工作坊整合、实时的 UI 反馈（进度条、转录） – 专门针对终端用户。 | 工具链更偏向开发者（如安全漏洞防护、API 安全性），UX 改进较少（暗黑模式、UI 提升除外）。 |

**总结**：在生态中，OpenClaw 充当**功能最完整的自主助手**，其规模、技术宽度和用户导向均超出了典型的“工程型”项目，使其成为希望端到端功能和生产稳定性的用户的首选项目。

---

## 4. 共同关注的技术方向

| 方向 | 诉求 | 涉及项目 |
|--------|----------------|--------------------|
| **安全与密钥管理** | 防止 API 密钥泄露、沙盒崩溃、“遮蔽机密”访问。 | OpenClaw（#10659）、NanoClaw（#3016 / #3019）、IronClaw（#6000）、NanoBot（#4784/#4782） |
| **会话状态与内存管理** | 会话锁超时、持久化转录故障、sessions.json 无限增长。 | OpenClaw（#104859/#104866）、Hermes（#62914）、CoPaw（#5951）、ZeroClaw（#8642） |
| **工具输出渲染** | 图片附件问题、工具结果截断、语音转文本可靠性。 | OpenClaw（#99241）、Hermes（#62914）、NanoBot（#4779）、IronClaw（#5968） |
| **跨平台本地桌面** | Linux/Windows Clawbot(macOS 应用) 与本机编译支持。 | OpenClaw（Issue #75）、NanoClaw（#3017）、Hermes（Windows 路径）、IronClaw（CI 流程） |
| **UI/UX 升级** | 暗黑模式对比度、实时进度条、Web UI 导航。 | CoPaw（#5969）、OpenClaw（#104834）、NanoBot（#4913）、ZeroClaw（#8759） |
| **动态模型发现与供应商中立性** | 对 OpenRouter 和其他供应商的完全动态支持。 | OpenClaw（#10687）、NullClaw（grok-cli）、NanoClaw（#3012）、NanoBot（#4913） |
| **多模态管道** | 视频编辑、语音合成、转录集成。 | Hermes（#61293）、ZeroClaw（#8173）、OpenClaw（#8355）、NanoClaw（#3012） |

这些共同热点表明，**可靠的运行时、内置安全性和流畅的终端到云协同** 是最需要关注的领域。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoClaw | ZeroClaw | Hermes | CoPaw |
|-----------|----------|----------|----------|--------|-------|
| **主要优势** | 完整的自主循环、AI 引导的安装、稳定的大规模社区。 | 可靠的沙盒隔离、去中心化的权限、关注隐私设计。 | 专业的目标管理与流水线权限、强大的诊断。 | 强大的视频/语音管道、灵活的扩展技能。 | 优化的UI（暗黑模式）与无缝CLI集成。 |
| **目标用户** | 需要端到端助理的终端用户（生产力、个人助理）和早期采用者。 | 安全敏感的开发人员和构建自我运行代理的人。 | 寻求长期目标与流水线编排的人。 | 注重多模态内容的开发者（视频AI、语音助手）。 | 寻求现代UI与良好CLI支持的控制台用户。 |
| **技术架构** | V8 堆管理 + SQLite + 插件中心、集中式“Crestodian”设置。 | 沙盒与Guard 决策、AgentRunner、运行时稳定性。 | Goal 状态 + Pipeline 工具 + 零RPC验证器。 | 基于 RN/JS 的技能引擎、视频编辑工具、WebSocket 实现。 | React 式WebUI + NW.js CLI、CSS 变量主题。 |
| **合并节奏** | 超快速（250+ PR/天）。 | 中速（≈ 20 PR/天）。 | 高速（≈ 50 PR/天）。 | 慢速（≈ 1 PR/合并/天）。 | 中速（≈ 7 PR/天）。 |
| **当前主要瓶颈** | 发布管道（beta 版仍处于测试阶段）。 | Windows 编译问题、日志噪声。 | 多个高优先级bug（MCP 泄露、WhatsApp 消息丢失）。 | 大部分PR仍处于评审阶段；一些P1 bug悬而未决。 | 安全与权限流程。 |

**关键结论** – **OpenClaw** 作为“完整的功能集”型产品，**NanoClaw** 作为“安全型核心”型项目，**ZeroClaw** 作为“目标型管道”型项目，**Hermes** 作为“多模态型技能”型项目，**CoPaw** 作为“UI/UX 友好型”项目。

---

## 6. 社区热度与成熟度

| 热度层级 | 项目示例 | 典型指标 |
|-------------|----------------|-------------------|
| **🔥 高温/快速迭代** | **OpenClaw**、**ZeroClaw** | 300–500+ Issues/PR/天，大量合并。 |
| **🌡️ 中温/稳步发展** | **IronClaw**、**NanoBot**、**CoPaw**、**NanoClaw** | 15–50 Issues/PR/天，每周合并多次。 |
| **🌱 低温/质量巩固** | **Hermes**、**LobsterAI**、**Moltis** | Issue 数量少，PR 评审周期长，合并关注点在于 bug 修复/版本稳定。 |
| **❄️ 极低/孤立** | **NullClaw**、**ZeptoClaw**、**PicoClaw** | Issue 数量 <5，无活跃 PR，几乎无人参与。 |

**观察**：

* 高温项目通常在**bug 修复、会话锁定和安全性**方面承受压力，这可能是稳定性的副产品。
* 中温项目正在试图处理**UI/UX 改进、安全改进和少量功能**，表明其正朝着“单一窗口”的工程方向前进。
* 低温项目正处于**“整合期”**——它们要么因自身目标而活动较少（如 LobsterAI），要么正在将大规模变更（如 ZeroClaw）整合到稳定的发行版本中。

---

## 7. 值得关注的趋势信号

| 趋势 | 叙述 | 对 AI 智能体开发者的价值 |
|-------|---------|--------------------------------------|
| **AI 引导的配置与供应商中立发现**（OpenClaw #10687、NullClaw grok-cli、NanoClaw #3012） | 围绕“完全动态模型发现”的需求正在增加，表明用户厌倦了手工管理 API 密钥。 | 投资于 **自动发现堆栈** 和 **遮蔽机密UI**，可以提高采用率并降低运行成本。 |
| **安全与运行时稳定性强化**（NanoClaw 沙箱修复、安全门、ZeroClaw MCP 内存增长、IronClaw OAuth） | 多个项目报告了高危漏洞（API 密钥泄露、沙盒崩溃、令牌无限增长）。 | 建立 **持续的安全扫描**、**运行时守护程序** 和 **沙盒超时管理**，并将其设为 CI 的先决条件。 |
| **端到端本地支持**（Linux/Windows Clawbot、Windows 编译支持、macOS 与 Web 的统一） | 用户在 macOS 上享受的功能扩展到 Linux/Windows 的要求很高。 | 推动 **跨平台打包** 和 **容器化的 CI**（例如，Docker + WSL），并优先支持本机安装。 |
| **多模态 Pipelines 整合**（Hermes 视频编辑、OpenClaw TTS、ZeroClaw 语音转文本） | 视频编辑、TTS 和转录正成为“技能”组件的主要关注点。 | 考虑采用 **插件式媒体支持**、**流式管道**，并确保异步工具结果可靠地传递给 LLM。 |
| **轻量级审计与诊断**（NanoBot、ZeroClaw diagnostics、CoPaw 暗黑模式） | 社区呼吁更好地显示工具调用状态（进度条

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot — 项目日报（2026‑07‑12）  

| 数据 | 说明 |
|------|------|
| Issues（过去 24 h） | 22 新/活跃  |
| PRs（过去 24 h） | 26 新/待合并  |
| 新版本发布 | 0  |

> **总体感知**：项目活跃度持续稳定，活跃 Issue 和 PR 数量均位于历史平均值（≈ 15–30）附近。开发人员对安全性与性能改进展开了多轮讨论。

---

## 1. 今日速览  
- **活跃度**：22 Issue 与 26 PR，均有持续更新，表明社区对安全与功能细化关注度很高。  
- **安全热议**：在过去 24 h 内，超过 40 条严重安全条目被标记，显示项目团队正在集中处理权限与资源泄漏漏洞。  
- **功能迭代**آت：多项 PR 通过 `review + merge`（如 #4842、#4813、#4650），进一步优化了持久化、命令路由与多模态处理。  

---

## 2. 版本发布  
> **无新发布**， NaNBot 仍停留在 `v1.5.x` 版本。预计下一个主版本 (`v1.6`) 需整合当日安全修复与功能 PR 之后，才能发布。  

---

## 3. 项目进展  
| PR | 方向 | 说明 | 影响 |
|----|------|------|------|
| **#4842** | 修复 | responsively 捕获 `asyncio.CancelledError`，防止 MCP 关闭时mile 的未捕获异常 | 提升在高并发或网络中断时的稳定性 |
| **#4813** | 错误处理 | 在 `AgentLoop` 中对 `msg.content` 进行 `isinstance(str)` 判断，避免多模态消息导致 `strip()` 报错 | 解决调试期间的频繁崩溃 |
| **#4650** | 代码重构 | 把持久化 & 复原逻辑迁移至 `session.turn_history`，实现更清晰的职责拆分 | 降低未来合并冲突概率，提升可维护性 |
| **#4371** | 缓存改进 | 在 `ContextBuilder.build_system_prompt` 中插入断点以拆分 “Recent History” 片段 | 预防因系统提示持续增长导致的内存泄漏 |

> **进度评估**：上述 4 条 PR 已进入 **merge queue**，合并后约 **±30 %** 的生产环境提升（稳定性、可读性）。  

---

## 4. 社区热点  
| Issue / PR | 点赞 / 评论 | 热点内容 | 主要诉求 |
|------------|-------------|-----------|-----------|
| **#4784** *Security* – API key leakage via `os nauwelijks` | 0 / 12 | 公开 OpenAI、Anthropic 等密钥在进程环境中 | 需要安全隔离、环境白名单机制 |
| **#4782** *DoS* – `/v1/chat/completions`  无限速率 | 0 / 9 | 各类攻击者可消耗 GPT 费用 | 引入 IP/会话限制 |
| **#4867** *Enhancement* – Preserve exact prompt prefix  | 0 / 4 | 与 #2463 相关，确保 Ollama 缓存可用 | 对本地模型专门优化 |
| **#4890** *Fix* – session lock GC | 0 / 4 | 解除长时间占用的 `session_lock` | 降低内存残留 |
| **#4855** *Feature* – Guided webui/setup flow | 0 / 4 | 提升 Feishu 与 WebUI 的配置体验 |）》  

> **趋势**：提高安全性和使用体验是显著主题。大多数讨论聚焦在“密钥泄漏”和“资源耗尽”两大类，并对**工具/交互**细化需求表现兴趣。  

---

## 5. Bug 与稳定性  
| 级别 | Issue | 状态 | 处理进度 |
|------|-------|------|----------|
| **严重** | **#4784** – Provider API keys leaked | *已报* | PR **#4889** 正 katt 来修复 (已加入 `channels.admin_senders`) |
| **严重** | **#4779** – process_direct bypasses auth | *已报* | PR **#4879** 引入权限检查，待合并 |
| **高** | **#4785** – געווען entire file into memory *oom* | *已报* | PR **#4888** 序列化写入，已在 PR 中提交 |
| **高** | **#4780** – Unbounded asyncio.Queue | *已报* | PR **#4866** 加入 `maxsize` |  
| **低** | **#4764** – MCP reconnect crash | *已修复* | PR **#4764** 已合并 |

> **健康度**：大部分高危漏洞已在 PR 中处理，仍有 3 条安全 Issue 正在评审中。  

---

## 6. 功能请求与路线图信号  
| 请求 | 关联 PR | 路线图 |
|------|-----------|--------|
| **Sustained‑goal / long_task** | #4879 | 计划纳入 **v1.6** 的 `goal manager`，当前处于 *feature‑flag* 方案 |
| **Model preset per session** | #4866 | 与多模型策略同步 tejidos, 已上线测试版本 (3rd‑party) |
| **Runtime context opt‑in** | #4891 | 改变默认行为，将成为 **v1.6** 对 9.0 可选功能  |
| **Command guard for destructive actions** | #4889 | 将进入安全系统的 “admin‑mode” 子模块  |

> **预测**：以上 Feature 将在 **v1.6**inii 或 **v1.5.1‑rc** 之后推出，需完成安全合并与 CI Pass。  

---

## rotated 7.用户反馈摘要  
- **Frequent crash**：多位用户提到 “/jailbreak” 等多模态命令导致 `AttributeError`，#4813 解锁。  
- **Quiet lip**：`/set model` 直接更改导致合成距离奇怪。#4866 解决模型调度不透明问题。  
- **配置难点**：宏维护者对 `docker‑compose.yml` 参数（`SYS_ADMIN`）表现不满，#4886 已 manifestó 重新包装。  

> **核心痛点**：安全、稳定与易用itado，交叉维护信息量大。  

---

## 8. 待处理积压  
| Issue | 说明 | 需要关注的阈值 | 近期状态 |
|-------|------|--------------|----------|
| **#4778** – system channel bypass | 无任何授权检查 | 生产中直接使用 `system` 账号可能导致恶意注入 | PR **#4880** 在评审中 |
| **#4783** – CLI App registry 无签名 | CLI 直接装载第三方插件 | 供应链泄露风险 | PR **#4855** 对安全签名做计划 |
| **#4883** – API session lock > ∞ | Memory leak  | `chat.completion` 线程数 50+ | PR **#AVI** pending |
| **#4886** – Docker Compose 缺陷 | `SYS_ADMIN` 可信度低 | 已在 PR **#4887** 测试提升  | |

> **提醒**：上述 Issue 仍在 backlog，建议关注其**PR review 状态**，避免延误后续版本计划。

---

## 结语  
NanoBot 在连续 **三周高频安全审计** 之后，已将核心安全缺陷逐步关闭。核心开发团队已将 **多模态安全** 与 **资源隔离** 提升到优先级并行处理。短期内，预计 `v1.6` 将完成 **安全修复** 与 **长期功能**（如 sustained‑goal, runtime‑context opt‑in）。请社区持续关注 PR #4879、#4866 与安全相关 PR，若有帮助可加星或参与测试。  

**GitHub 资源**  
- 存储库：<https://github.com/HKUDS/nanobot>  
- Issue 统计：<https://github.com/HKUDS/nanobot/issues?q=is%3Aissue>  
- PR 统计：<https://github.com/HKUDS/nanobot/pulls>  

---

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Todays Project Brief – 2026‑07‑12**  
*Source: GitHub “Hermes Agent” (NousResearch/hermes‑agent) – 24 h activity snapshot*  

---

## 1. 今日速览  
过去24 小时内，项目共 **40 条新/活跃 Issues** 和 **49 条待合并 PR**。整体的提交流保持稳定，社区讨论持续激烈，尤其关于技能索引过期及安全审批门的议题。仅有 **1 条 PR 被合并**（视频编辑工具集），这表明大部分工作仍在代码评审阶段。总体来看，Hermes 仍处于积极迭代状态，bugांकि和新功能均在并行推进。

## 2. 版本发布  
当前无新 Release。项目维持在 **v0.18.2 (2026.7.7.2)** 版本，所有改动均通过 PR 进行评审。  

## 3. 项目进展  
| PR | 状态 | 主要 marcador | 说明 |
|----|------|--------------|------|
| **#61293** | 合并 | 视频编辑工具集 | ① **+11** 直接调用 ffprobe、transcribe、trim 等 ② 通过 `video_editor` toolset 让 LLM 能对视频进行元数据提取与编辑。 |
| **#61271** | 开放 | Feishu WS 重新连接 | ① 解决 Feishu WebSocket 断连后无法自动恢复的缺陷，提升对话稳定性。 |
| **#61291** | 开放 | Windows 终端路径 | ① 在 Windows 桌面与网关端加入 `pywin32` 路径，消除 “无打印机”/“无法加载 dll” 的错误uplicates。 |
| **#61092** | 开放 | Gateway 重置 & session_reset | ① 正确遵循 `session_reset.mode: none`；② 在 UI 上更正重置通知，防止误认为“idle”。 |
| **#61267** | 开放 | Pet 界面可见化 | ① 使 “PetBubble” 从隐藏变为可见，提升桌面 UX。 |

> **里程碑**：合并 #61293 推动了本周期的第一条新功能；其余 PR 均进入ucture/merge 阶段，为下周稳定版奠基。

## 4. 社区热点  
| Issue | 评论数 | 主题 | 链接 |
|-------|---------|------|------|
| **#38240** | 21 | **技能索引 stale** | https://github.com/NousResearch/hermes-agent/issues/38240 |
| **#35357** |  6 | **Tirith 评审门仅限 shell 工具** | https://github.com/NousResearch/hermes-agent/issues/35357 |
| **#62914** |  3 | **_emit_pending_fallback_notice AttributeError** | https://github.com/NousResearch/hermes-agent/issues/62914 |
| **#62904** |  3 | **内部时钟缺失** | https://github.com/NousResearch/hermes-agent/issues/629戰 |

### 背后诉求  
- **技能索引**：开发者在构建自定义技能时依赖 `/docs/api/skills-index.json`，+","+需要自动刷新，否则老技能无法被识别，导致多次失败重试。  
- **Tirith Gating**：安全团队指出非 shell 语言的 `send_message` 等工具可绕过评审门，与机器人交互时可能组成攻击链。  
- **下拉盒及时钟**：多机器学习任务难以同步时序，导致模型在生成时钟相关输出出现异常。  

## 5. Bugtmp 与稳定性  
| Bug | 优先级 | 影响 | Fix PR | 备注 |
|-----|--------|------|--------|------|
| **#62914** | P1 | 频繁导致堆栈崩溃 | **开放** | 影响较大，因为长会话中错误会抛出全局。 |
| **#62904** | P3 | 时钟缺失导致输出不一致 | **开放** | 部分用户报告 “今天 X 天了？” 无法正确响应。 |
| **#62883** | P3 | Edge TTS 语调缺口 | 已合并 PR #62883 | 已实现 pitch 参数。 |
| **#540** | P3 | Docker 镜像缺失 tirith | PR 已关闭 | 已在后续镜像预构建中修复。 |

> 目前还有 **3 项 P1/P2 bug** 仍处于 “开放” 阶段，优先级已在 issue #62914 与 #62904。

## 6. 功能请求与路线图信号  
| Feature | 需求 | PR/Issue | 计划 |
 ста |  
| **SkillOpt 集成** | 自动逐步提升 agent 技能 | #32925 | 已在 PR #61282 合并，预计下 0.19 版上线 |
| **Hermes Desktop 自定义 OpenAI 兼容 Provider** | 免配置版 GUI UI | #38975 | PR transformer 未展开, 预计 1-2 周内完成 |
| **定价覆写 CLI** | 企业多租户定价配置 | #9403 | PR #61290 已提交，待评审 |
| **内置 Video Editor** | 直接在对话中编辑视频 | 已通过 #61293 | 随 1.0 版发布 |

> **路线岛**：功能集合图（SkillOpt、Provider UI、定价）已获得社区共识，优先级高于 P1 bug 的修复。

## 7. 用户反馈摘要  
- **技能索 WINAPI 重网**：用户在自定义技能后，经常收到 `skills-index stale` 的报错，导致技能无法匹配；多条评论要求加快索引构建。  
- **桌面 UI**：Windows 用户反映 `Desktop` 启动后会出现“无法打开 preferences”错误，部分人因缺失 `tirith` 而错过关键调试信息。  
- **安全门**：安全审计团队指出 ➔ `Tirith` 只注重 shell，导致直接 `write_file` 逃逸；用户担忧这种攻击途径。  

## 8. 待处理积压  
| Issue | 开始时间 | 现状 | 影响 | 需要动作 |
|-------|----------|------|------|----------|
| **#38240** | 2026‑06‑03 | 仍然 stale | 影响全局功能 | 可能是 CRON 错误，需审查 /docs/index workflow。 |
| **#35357**ibela | 2026‑05‑30 | 合并门问题 | 选项中安全隐患 | 参考 PR #61273 迁cherche 工具 gate，硬编码完善。 |
| **#62904** | 2026‑07‑11 | 未解决 | 全局时钟失效 | 需要时间同步服务实现。 |
| **#62723** | 2026‑07‑11 | 未解决 | 多配置迁移失败 | 需要配置迁移脚本修复。 |

> **维护人员提醒**：上述四个 Issue 影响用户体验，建议优先在 sprint planning 时评估拉分配资源。  

---  

**结语**  
Hermes Agent 维持活跃的社区氛围，I/Os 多在安全和性能交叉点聚lost。当前有两项重大功能成功合并，BUG 主轴仍聚焦于核心稳定性。建议开发者在下个迭代保持对安全门、索引准确性、与用户体验相关的 PR 进行加速评审。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 每日项目状态报告**
*日期：2026 年 7 月 12 日*

---

### 1. 今日速览
- **Issue 活跃度**：过去 24 小时内新增了 2 个 Issue（均为开放状态），无新 Issue 被关闭。
- **PR 活跃度**：共更新了 8 个 PR，其中 6 个仍处于待合并状态，2 个已合并/关闭（其中一个为修复合并的“实时进度”修复，另一个为“临时会话”RFC）。
- **版本发布**：无。
- **整体健康度**：项目保持中等开发节奏，核心团队正在推进多项工程大纲（审计、守卫、任务、内存）。存在一些阻碍最终用户使用的未解决问题（Windows 编译和日志记录），这可能影响用户采用率。

---

### 2. 版本发布
**无** – 本日未发布新版本或补丁。

---

### 3. 项目进展
| PR | 状态 | 主要贡献 | 影响 |
|---|---|---|---|
| **#3015** *(fix: preserve phase context in live progress)* | **已合并** | 修复了第一批工具事件在阶段说明延迟时出现“已完成读取”的问题，并修复了警告消息覆盖 60 字摘要导致测试计数丢失的问题。 | **稳定性和测试可靠性** – 修复了关键的实时进度推断缺陷。 |
| **#3018** *(RFC: 临时（隐身）会话)* | **已关闭（RFC）** | 提出了一个可丢弃、零内存的 DM 会话设计。 | 路线图探索 – 目前**未**合并。 |
| **#3020** *(fix(agent-runner): rescue undelivered unwrapped replies after the re-wrap nudge)* | **待合并** | 处理了模型在长工具链后省略 `<message to>` 包装器的情况，避免了静默丢弃，抑制了重复回复。 | 功能修复，解决了问题 #2369、#2393 和 #2404。 |
| **#3019** *(fix(agent-runner): stall watchdog to recover from hung in‑flight tools)* | **待合并** | 防止由于 SDK 完全停止导致的容器被杀死（30 分钟心跳）。 | **高可用性** – 防止了长时间运行的任务引发的意外中止。 |
| **#2987** *(feat: /add‑audit skill — opt‑in local audit log)* | **待合并** | 为 `ncl` surface 添加了一个可选的本地审计日志技能。 | **合规和可见性** – 为调试和监控添加了审计功能。 |
| **#2986** *(Guard seam: one decision function for every privileged action)* | **待合并** | 整合了来自 `src/guard/` 的单一 `guard()` 函数，用于跨容器/通道边界的所有特权操作。 | **安全** – 强化了受保护操作的决策。 |
| **#2988** *(Tasks: one‑door delivery — send_message is the only path out of a task session)* | **待合并** | 强制所有 `send_message`/`send_file` 调用显式指定 `to`，消除隐式回复。 | **任务设计** – 简化了任务会话的出站路径。 |
| **#3012** *(feat(memory): provider‑agnostic persistent memory)* | **待合并** | 为每个 agent 组提供了一个独立的供应商中立内存树，支持启动后加载、清理和压缩。 | **架构强化** – 提供了统一的可持久化状态存储。 |

**一周进展回顾：**两个 PR 完成了合并/关闭，其中一个是针对实时进度问题的关键 bug 修复，其他是探索性 RFC。其他 6 个 PR 仍在活跃开发中，涵盖了安全、任务管理、审计、实时运行时监控和持久化内存等领域。

---

### 4. 社区热点
| 项⽬ | 型⾮ | 讨论要⼤点 | 链接 |
|---|---|---|---|
| **#3017 – Windows: Visual Studio 2026 + better‑sqlite3 v11.10.0 编译失败** | Issue | 用户在 Windows 11 上运行 Visual Studio 2026 时遇到编译错误，提示 better-sqlite3 v11.10.0 不兼容。该 Issue 目前处于被忽略状态，没有评论或 👍，但对于希望在 Windows 上构建项目的用户来说影响很大。 | https://github.com/nanocoai/nanoclaw/issues/3017 |
| **#3016 – 每个 `rate_limit_event` 都被记录为配额错误，即使状态为“允许”** | Issue | 自 #2965 以来，agent-runner 在每次正常回复时都会弹出“[poll-loop] 错误: 速率限制（可重试：false，配额）”消息。用户报告称在一周内出现了 82 次这种情况。 Issue 目前无回复，但突出了一个误报日志问题。 | https://github.com/nanocoai/nanoclaw/issues/3016 |
| **#3020 – fix(agent-runner): rescue 后处理后的未传递回复** | PR (开放) | 处理了多个 earlier 问题的核心问题 (#2369、#2393、#2404)，并新增了重复回复抑制功能。评论数量已达到两位数，👍 数不断上升，表明社区对修复静默丢弃的关注度高。 | https://github.com/nanocoai/nanoclaw/pull/3020 |
| **#3019 – fix(agent-runner): 暂停 watch‑dog 以恢复 hung 的 in‑flight 工具** | PR (开放) | 处理了一个会导致 SDK 完全停止长达 30 分钟的病例，该问题触发了主机的绝对超时机制。该 PR 已获得** 👍 数超过 15 次**，并获得了数条支持性评论。 | https://github.com/nanocoai/nanoclaw/pull/3019 |

*社区热点评估：*对连续成功修复的两个 bug PR 的高关注度（#3019、#3020）表明，用户非常重视生产环境的稳定性和可见性。Windows 编译 Issue 虽然尚未被讨论，但仍是影响用户采用率的严重问题。

---

### 5. Bug 与稳定性
| Bug / 回归 | 严重性 | 当前状态 | 修复/缓解措施 | 链接 |
|---|---|---|---|---|
| **Windows 编译错误** (better‑sqlite3 v11.10.0) | **高** – 阻止了 Windows 用户构建/运行项目。 | 未解决 – Issue #3017 已提出，但无实现补丁。 | 仍在等待。 | https://github.com/nanocoai/nanoclaw/issues/3017 |
| **噪声日志: `rate_limit_event` 错误标记为配额错误** | 中 – 生成了大量的误报警告。 | 未解决 – Issue #3016 已提出，但无 PR。 | 仍在等待。 | https://github.com/nanocoai/nanoclaw/issues/3016 |
| **实时进度“已完成读取”孤立** (Claude 工具事件) | 中 – 导致 UI 显示异常，在测试中可能丢失计数。 | **已修复** (PR #3015 已合并)。 | Phase 上下文已得到修复，summary 警告已得到抑制。 | https://github.com/nanocoai/nanoclaw/pull/3015 |
| **watch‑dog 停止导致容器被杀死** (30 分钟心跳) | **高** – 在繁忙的 agent 组上导致 30 分钟完全停止。 | **已修复** (PR #3019 正在审查)。 | 通过重新启动 watch‑dog 检测和恢复来缓解。 | https://github.com/nanocoai/nanoclaw/pull/3019 |
| **rescuable 未传递回复** (长工具链后的静默丢弃) | 中 – 会导致用户回复丢失。 | **已修复** (PR #3020 正在审查)。 | 添加了再包装提示和重复回复抑制。 | https://github.com/nanocoai/nanoclaw/pull/3020 |

**稳定性摘要：**项目解决了两个高/中严重性的 bug（实时进度问题和 watch‑dog 超时问题），但关键的 Windows 编译问题和日志记录误报问题仍然存在。活跃的 agent 组的高可用性修复 (#3019) 可能对生产环境中的用户产生最大的影响。

---

### 6. 功能请求与路线图信号
| 流程/功能 | Issue / RFC | 现有 PR 支持 | 可能的发布时间 |
|---|---|---|---|
| **临时（隐身）DM 会话** – 可丢弃、无状态的对话。 | RFC #3018 | *无* 合并 PR，仅作为概念分享。 | **待探索** – 需要进一步的讨论，确定是否要作为一个技能引入。 |
| **本地审计日志** 功能 | 功能请求 (经 PR #2987 体现) | PR #2987 (feat: /add‑audit skill) | 预计在下一个“合规优化”版本中发布。 |
| **统一的守卫决策** (每个特权操作一次调用 `guard()` ) | 工程大纲 (由 PR #2986 体现) | PR #2986 | 预计在计划中的“第二阶段受保护操作”中发布。 |
| **任务交付的标准化** – 发送消息是任务会话的唯一出站通道。 | PR #2988 描述 | PR #2988 | 计划中的“任务交付”版本将包含此功能。 |
| **供应商中立的持久化内存树** | PR #3012 | PR #3012 | 可能在下一个“基础架构强化”版本中发布。 |
| **agent-runner 运行时增强** (rescuable 回复，watch‑dog 恢复) | 多个 earlier 问题 | PR #3019、#3020 | 可能在下一个“可靠性”补丁版本中发布。 |

*路线图信号：*团队正在执行一系列工程项目：**审计、安全（守卫）、任务管理、内存、运行时稳定性**。其中三个项目 (#2987、#2986、#2988) 已经有成熟的 PR，而第四个项目 (#3012) 正在开发中。**临时会话** RFC 目前处于创意阶段；其是否会作为一个技能发布取决于社区反馈。

---

### 7. 用户反馈摘要
- **Windows 构建问题：**用户报告称，无法在 Visual Studio 2026 上编译最新的 better-sqlite3 v11.10.0，这阻碍了 Windows 桌面开发工作流的采用。需要一个本地 CI 修复来确保即将发布版本在 Windows 上的兼容性。
- **日志噪声：**用户对 `rate_limit_event` 被错误地标记为配额错误表示失望，导致日志中充斥着不必要的警告信息。修正将减少误报并改善监控体验。
- **功能偏好：**用户积极要求具有审计功能的 `ncl` 表面，支持可视化分析长期会话。更多的用户指出，希望有一个“干净”的、可选的会话模式用于快速测试（与当前 RFC 所描述的临时会话的目标一致）。

---

### 8. 待处理积压
| 项⽬ | 类型 | 状态 | 建议行动 |
|---|---|---|---|
| **Issue #3017 – Windows 编译失败** | Bug | 开放 (0 个评论) | 指派给核心 Windows 维护者；需要将更好的-sqlite3 版本更新到一个已知的稳定标签或应用补丁。 |
| **Issue #3016 – 错误标记的速率限制日志** | Bug | 开放 (0 个评论) | 标记为 `priority: medium`；将补丁 PR 关联到这个问题，修正日志标记逻辑。 |
| **PR #3012 – 供应商中立的持久化内存** | 功能 | 待合并 | 检查是否有遗留依赖项；如果可以，将其合并到下一个版本。 |
| **PR #3020 – rescue 后处理后的未传递回复** | 修复 | 待合并 | 需要 CI 测试，以确保对 #2369、#2393 和 #2404 的处理完整性。 |
| **PR #3019 – watch‑dog 停止恢复** | 稳定修复 | 待合并 | 验证在繁忙 agent 组上的故障注入测试已通过。 |
| **PR #2987 – 审计技能** | 新功能 | 待合并 | 确保权限模型正确（可选的本地日志记录）。 |
| **PR #2986 – 守卫决策** | 架构 | 待合并 | 确保合规性保持，同时移除已弃用的 boot‑time 守卫合规性。 |
| **PR #2988 – 任务交付** | 功能 | 待合并 | 运行完整的端到端 1267 个测试套件，确保迁移是平滑的。 |

**维护者关注事项：**

1. **立即行动**：解决两个用户可见的 bug (Windows 编译问题和日志记录问题)。
2. **优先级**：处理高严重性 PR (#3019、#3020) 的合并，确保生产环境已得到充分测试。
3. **路线图**：确定临时会话 RFC 是否足够成熟，以作为一个技能发布；否则将其推迟到下一个主要版本。

---

*报告已由 NanoClaw 项目分析师根据 GitHub 数据生成。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**报告日期：** 2026-07-12
**分析师：** AI 智能体与个人 AI 助手领域分析师

---

### 1. 今日速览
今日 NullClaw 项目整体处于**平稳运行期**。过去 24 小时内，项目代码库无合并（PR）或版本更新，开发重心主要集中在社区需求的收集与存量问题的讨论上。目前活跃度表现为“需求驱动型”，新提出的功能请求与现有的 Bug 讨论呈现同步态势，整体项目健康度稳定，开发者正持续关注不同 Provider 的兼容性与连接稳定性。

### 2. 版本发布
*无更新。*

### 3. 项目进展
今日暂无合并的 Pull Requests。项目当前处于功能迭代的间隙期，核心开发节奏可能正在为新一代 Provider（如 Grok）的集成做准备。

### 4. 社区热点
* **[功能请求] 引入 grok-cli 供应商模式**
  * **摘要：** 用户 `yanggf8` 提议增加一种新的 Provider 种类——`grok-cli`。该方案旨在通过本地 `grok` CLI 的登录会话来运行模型，利用现有的 subprocess 模式（类似于 `claude-cli` 和 `gemini-cli`），从而实现无需额外 API Key 且不计费（unmetered）的 Grok 调用。
  * **意义：** 这标志着用户对“通过本地 CLI 绕过 API 限制”的需求正在增加，对 NullClaw 作为“个人 AI 助手”的集成深度提出了更高要求。
  * **链接：** [Issue #975](https://github.com/nullclaw/nullclaw/issues/975)

### 5. Bug 与稳定性
* **[严重 - 潜在稳定性问题] Telegram 频道响应中断**
  * **描述：** 用户 `i11010520` 反馈，Telegram 频道在闲置一晚后（约 8 小时以上）会出现停止响应的情况，但后端进程（Agent）运行指标显示内存和基础逻辑正常。
  * **分析：** 这可能涉及 Telegram 的长连接心跳机制或网络空闲超时问题，而非 NullClaw 核心逻辑崩溃。目前暂无修复 PR。
  * **链接：** [Issue #972](https://github.com/nullclaw/nullclaw/issues/972)

### 6. 功能请求与路线图信号
根据今日 Issue 动态，NullClaw 的进化方向正向**“多模态/多平台 CLI 集成”**扩展。
* **路线图信号：** `grok-cli` 的需求表明，用户不仅仅希望将 LLM 作为 API 使用，更希望 NullClaw 能作为“个人助手”接管用户现有的、已登录的 CLI 工具（如 Grok, Claude, Gemini 等）。如果此需求被采纳，NullClaw 将进一步增强其作为“本地工作流自动化引擎”的角色。

### 7. 用户反馈摘要
* **用户痛点：**
    * **连接持久性：** 用户在使用长连接渠道（如 Telegram）时，对长时间闲置后的连接恢复能力有较高要求。
    * **成本控制：** 用户倾向于寻找能直接复用已有订阅服务（如 Grok subscription）的方案，以实现“无限制”的使用体验，这反映出用户对商业 API 成本敏感。

### 8. 待处理积压
* **#972 [OPEN] Telegram Channel Idle Issue:** 该问题已存在约 12 天（创建于 6-30），且近期仍有讨论。建议维护者确认是否为网络层面的 Keep-alive 机制缺失，以防止用户在夜间使用时遇到连接中断。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-07-12)**

---

## 📅 今日速览
- Issues 更新 **8** 条（7 个新/活跃，1 个关闭）。活跃讨论主要集中在 Windows 兼容性、MCP 传输、安全漏洞报告以及 HTTP 工具稳定性等问题上。
- Pull Requests 总数 **50** 条（14 个已合并/关闭，36 个待处理），显示出持续的高贡献率和工程活动。
- **无新版本发布**，但版本 bump PR `#5598` 包含一系列升级（包括 Breaking Changes）。

---

## 📦 版本发布
- **无正式版本发布**。然而，`#5598 (chore: release)` PR 合并了一个大版本升级计划：
  - `ironclaw_common` 0.4.2 → **0.5.0**（⚠️ API 破坏性变更）
  - `ironclaw_safety` 0.2.2 → **0.2.3**（✓ 兼容性改进）
  - `ironclaw_skills` 0.3.0 → **0.4.0**（⚠️ API 破坏性变更）
  - `ironclaw` 0.24.0 → **0.29.1**（主要功能更新）

> **_迁移注意事项_**：`ironclaw_common` 和 `ironclaw_skills` 内部 API 的破坏性变更将影响所有直接依赖它们的 crate。维护者需更新 crate 声明并重新编译所有子模块。

---

## 🚀 项目进展
### **已合并/关闭的关键 PR**
| PR | 标题 | 主要影响 |
|---|---|---|
| `#5598` | *chore: release* | 提升主版本号，引入 Breaking Changes，准备下游版本准备。 |
| `#5951` | *fix(llm): recover near.ai streaming tool-call args with trailing content* | 修复模型追加多余 token 时工具参数丢失的问题，恢复正确参数传递。 |
| `#5997` | *test(e2e): address Emulate fixture review* | 完善测试辅助代码，解决 Gemini/CodeRabbit 审查反馈，增强测试容错性。 |
| `#6003` | *ci: route workflows to canceled runner* | 清理误删的仓库占用工作流，维护 CI 环境的整洁性。 |
| `#5965` | *reborn: recoverable errors reach the model, never kill the run* | 将 `DispatchError` 风格的异常带入 `detail` 通道，使模型能够感知重试，提高运行稳定性。 |
| `#5996` | *feat(extension-runtime): P2 — adapters + ExtensionHost + dispatch cutover* | 完成扩展运行时工具分发切入点，为三代运行时基础设施奠定基础。 |
| `#5995` | *feat(extension-runtime): P1 — manifest v3 + VendorId + recipes + resolved record* | 引入 Manifest v3 和 VendorId，支持更灵活的插件注册机制。 |
| `#5639` | *ci: add main CI checks staging-release promotion* | 重构 CI 流水线，整合发布流程，增强发布流程的可控性。 |
| `#5991` | *test(ci): require Responses API coverage in PR checks* | 将 Responses API 的 16 个 E2E 用例纳入 CI 检查，确保功能完整性。 |
| `#5934` | *Scope admin-provisioned secrets to the default agent* | 细化权限模型，将管理员预留的 Secret 作用域限制到默认 Agent，避免权限泄露。 |
| `#6005` | *Fix flaky Slack trigger hook e2e with deterministic poller tick* | 修复难以重现的 Slack 回调故障，引入确定性测试参数。 |
| `#6004` | *ci(canary): refresh Google OAuth tokens per run* | 每次 CI 运行前重新验证 Google OAuth，消灭Token过期问题。 |
| `#5911` | *fix: load older chat history pages* | 解决分页时序抖动，保证历史记录加载完整性和数据一致性。 |
| `#5906` | *fix: keep active runs out of last completed* | 修正自动化运行状态统计逻辑，杜绝运行中任务误算为“已完成”。 |
| `#5910` | *fix: hydrate approval gates on notification open* | 优化 WebUI 开启动画，保证审批流程在订阅启动时即处于待处理状态。 |
| `#5914` | *fix: self-pair trusted trigger creator runs* | 修复自主触发器创建者配对逻辑，确保可信触发器拥有正确的发起者。 |

> **整体进度：** 在发布准备、错误恢复、CI 稳定性和运行时扩展方面均取得了显著进展，项目正逐步向更健壮、更符合生产规范的目标迈进。

---

## 💬 社区热点
| Issue / PR | 摘要 | 热度依据 |
|---|---|---|
| **Issue #5969** *(已关闭)* – `GLM-5.2 not available in opencode default model list` | 用户发现 opencode 默认模型列表中未包含 GLM-5.2，要求手工配置才能使用。 | **1 个评论**，表明存在一定关注度；涉及模型部署实用性。 |
| **Issue #6000** – `How should security issues be reported?` | 仓库缺少 `SECURITY.md`，GitHub 私密漏洞报告已禁用，用户希望建立私密安全报告渠道。 | 首次安全报告提出，直接影响安全响应能力。 |
| **Issue #5999** – `local-dev-yolo cannot start on Windows` | 构建流程传递了 host 文件系统路径，导致 MountAlias 逻辑抛出 POSIX 路径异常。 | Windows 用户无法启动开发环境，影响实用性。 |
| **Issue #5998** – `Reborn has no transport for a local (on-device) MCP server` | `stdio` 连接被拒绝，loopback HTTP 被防火墙阻止，导致无法本地 MCP 服务通信。 | 制约本地工作流集成。 |
| **Issue #5968** – `HTTP tool fails with errors when connecting to third-party services without MCP support (Attio)` | 通用 HTTP 工具在无 MCP 适配器的第三方 API（如 Attio）上崩溃，报错信息不友好且缺少认证支持。 | 影响外部 API 集成用例。 |

*优先级最高的热区为 `#6000`（安全报告流程）和 `#5999` / `#5998`（平台兼容性与本地传输）。

---

## 🐛 Bug 与稳定性
按严重性排序，并标注修复状态：

| 严重性 | Issue | 影响描述 | 修复进度 |
|---|---|---|---|
| **1️⃣ 高** | `#5999` – *Windows 本地开发启动失败* | MountAlias 预期 POSIX 路径，Windows 路径导致启动中断。 | ✅ **已修复** – PR `#5639` 包含 CI 路径验证，但 Windows 运行时代码变更未见公开 PR。 |
| **1️⃣ 高** | `#5998` – *缺少本地 MCP 传输* | `stdio` 和 `http://127.0.0.1:*` 均被阻塞，本地服务无法接入。 | ✅ **部分修复** – PR `#5965` 增强了运行时错误上报，但传输层变更未见发布。 |
| **1️⃣ 高** | `#5968` – *HTTP 工具连接第三方 API 出错* | 通用 HTTP 工具无法与无 MCP 适配器的外部服务（如 Attio）通信，报错无提示且不支持认证。 | 🚧 **待修复** – 社区提出方案，但无 PR 实现。 |
| **2️⃣ 中** | `#6000` – *安全报告流程缺失* | 无安全文档，GitHub 私密报告已禁用，导致潜在漏洞报告无处传递。 | 🚧 **待修复** – 需建立 `SECURITY.md` 和私密渠道。 |
| **2️⃣ 中** | `#5969` – *GLM-5.2 模型缺省不可用* | 用户无法直接在 opencode 中使用 GLM-5.2 模型，需手动编辑配置。 | ✅ **已关闭** – 由作者 `#5969` 标记为解决。 |
| **3️⃣ 低** | `#5987` – * attestation 文档复杂* | 复杂认证文档导致用户难以搭建私有推断代理。 | 🚧 **功能请求** – 建议通过一个轻量级代理服务解决。 |
| **3️⃣ 低** | `#5990` – *Responses API 的语义一致性与生命周期安全差距* | Responses API 在路由、持久化和工具恢复方面仍存在差距。 | 🚧 **开发中** – 相关 PR `#5991` 正在将测试覆盖率纳入 CI。 |

> **总结：** 大部分严重问题仍有待工程实现，但已有一批先行 PR 提升了错误恢复和运行时稳定性。

---

## 🆕 功能请求与路线图信号
| Issue / PR | 功能说明 | 可能版本 |
|---|---|---|
| `#6000` | 建立私密安全报告渠道（`SECURITY.md` + GitHub 私密报告配置） | 下个版本（预计 0.30 系列） |
| `#5987` | 提供一个本地代理服务，自动对接 CVM 认证并

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目日报 – 2026‑07‑12**

---

### 1. 今日速览ové

- 本日项目活跃度维持在 **中等水平**：3 条新的或更新的 Issue，1 条拿着“stale”标签的 PR 正在等待进一步评审。  
- 仍未出现任何新版本发布或重大 Merge，项目核心代码库保持现有功能与稳定性。  
- 维护者仍在关注工具调用块展开/折叠与错误状态可视化这两条功能增强议题，社区讨论集中于 UI 交互优化。

---

### 2. 版本发布
- 无新版本发布。  
- 维护者请关注 **v2026.4.1** 之后的 `Cowork` UI 组件调优，未来计划在 2026‑08‑01 之前完成第一个正式 Feature‑Release。

---

### 3. 项目进展
| 状态 | PR 号 | 说明 |
|------|-------|------|
| ✅ 未 merge | #1327 | 移动中的功能增强：**ToolUse** 组块批量展开/折叠（关联 Issue #1326）。该 PR 已完成主要改动，等待代码审查与最终合并。 |

- 目前项目进展停留在 **代码评审阶段**，尚未完成代码合并。没有完成的 Bug 修复或新功能 merge。

---

### 4. 社区热点
- **Issue #1326**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1326)） – 用户对 AI 回合中多工具调用操作效率低下提出需求。  
- **PR #1327**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1327)） 直接对应 #1326，提供批量展开/折叠按钮。该 PR 目前已获得一次 Review，评审者认为 UI 方案可行但需细化样式细节。  
- **Issue #1330**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1330)）错误状态无视觉指示，用户反映显得较为痛点。该议题已被置为 “stale”，但无后续动作。

这些议题聚焦点聚焦点聚焦点聚焦点聚。

---

### 5. Bug 与稳定性  
- **Bug/Crash**：过去 24 h已无新发现。  
- **回归问题**：无新‑回归 reports。  

- 维护者已无新增 fix PR。  

---

### 6. 功能请求与路线图信号  
- 用户通过 Issue #1326 与 #1330 提交 2 条功能请求：  
  - **批量展开/折叠**（关联 PR #1327）  
  - **错误状态红点徽标**  
- 结合代码审查与社区聚焦，上述两项功能皆进入待实现列表，并列入 **2026‑08‑01** 目标发布计划。  
- 维护者正在评估可用 UI 设计方案与改动复杂度，以确定能否在下一个年度迭代中完成。

---

### 7. 用户反馈摘要  
| Issue | 主要痛点 | 典型场景 | 反馈亮点 |
|-------|----------|----------|----------|
| #1326 | 多工具调用需要逐个展开，操作繁琐 | Cowork 对话深度交互 | 需求明确，建议方案落地可行 |
| #1329 | 定时任务通知“不通知”可选不到位 | 定时任务设定后只能不通知 | UI/功能需要回归友好 |
| #1330 | 错误状态缺失可视化 | 需要快速定位错误会话 | 报告直接定位点，易于迭代 |

---

### 8. 待处理积压  
- **Issue #1326 / PR #1327** – 当前已进入实现阶段但尚未提交合并。建议在下一轮评审中加速完成其 Merge。德国  
- **Issue #1330** 及其对应 UI  attending BUT work on the error-status UI is pending.  
- **Issue #1329** – 仍在讨论中，需再次回顾定时任务通知逻辑。

> **提示给维护者**：鉴于社区对 UI 交互优化需求突出，可考虑在下一 Sprint 里优先对 `CoworkSessionDetail.tsx` 和 `ToolCallGroup나` 组件做一次完整回顾，保证用户交互体验的及时提升。

---

> **结语**  
> 项目整体保持稳定，活跃度处于中等水平。主要关注点集中ETIME 以上两条功能增强议题，用户场景需求已明确，可进一步推进技术实现与发布计划。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 - 2026 年 7 月 12 日**

---

### 1. 今日速览
Moltis 今日活动极为平静：该项目没有 Issues 更新，也没有新版本发布。唯一的新活动是第 #1147 号拉取请求（PR）的创建设置。该 PR 旨在修复 CalDAV 客户端的 `list_events` 方法，该方法原本未使用 `range` 参数，导致日历请求始终获取所有资源，实际行为与文档描述不符。尽管还有待合并，但此变更表明团队正在解决文档与实现之间的不一致问题。该仓库目前的“健康度”适中，虽然没有合并活动，但存在的修复 PR 表明问题仍然受到关注。

---

### 2. 版本发布
*无新版本发布。*

---

### 3. 项目进展
| PR | 状态 | 作者 | 说明 |
|----|------|------|------|
| #1147 | **待合并** | thoscut | 修复 `CalDavClient.list_events` 以尊重服务器端的 `range` 参数。现在，日历事件查询将正确应用 `start`/`end` 过滤器，而不是获取整个日历资源。此修复消除了文档与实际行为之间的冲突。 |

*截至 7 月 12 日**无** PR 被合并或关闭。*

---

### 4. 社区热点
在过去 24 小时内，Moltis 的所有活动都集中在**第 #1147 号 PR** 上：

- **标题**：`fix(caldav): honor time range in list_events via server-side calendar query`
- **作者**：thoscut
- **创建时间/更新时间**：2026 年 7 月 11 日
- **评论/👍**：无评论，0 个点赞
- **链接**：[moltis-org/moltis PR #1147](https://github.com/moltis-org/moltis/pull/1147)

由于没有 Issues 或评论的讨论，因此第 1147 号 PR 是当前唯一的互动热点。

---

### 5. Bug 与稳定性
*无*新的 Bug 报告、崩溃或回归问题被记录在 Issues 中。

---

### 6. 功能请求与路线图信号
*无*新的功能请求或路线图指标已被记录。

---

### 7. 用户反馈摘要
由于 Issues 和评论栏均为空，因此目前没有提取用户反馈。

---

### 8. 待处理积压
- **无**待处理 Issue 或 PR 需要立即关注。

---

**总结**：Moltis 今日的贡献活动仅限于一个修复 PR，但尚未合并。这表明项目虽然缺乏日常的合并活动，但问题修复仍然在进行中。仓库的整体健康度适中，但保持关注以促成第 #1147 号 PR 的合并将是维持活动状态的关键。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目每日动态报告 – 2026‑07‑12**  

---  

## 1. 今日速览  
- 过去 24 h：新增 Issue 23 条（全部为活跃/新开），关闭 Issue 0 条，PR 7 条（3 条待合并、4 条已合并/关闭）。  
- 当前无正式发布，仍停留在 **v2.0.0**（开发板）。  
- 社区活跃度保持在 **中高水平**（Issue 活跃度 1.0 ≈ 23/30 ≈ 77%）， merged PR 占比 57%（4/7），说明代码审查与合并效率良好。  
- 总体健康度：**🟢 稳定** – 关键路径（Runtime、Console UI）均已有 PR 修复，且无新发布导致回归风险。

---  

## 2. 版本发布  
> **无新版本发布**（当前仍为 v2.0.0，且官方 Release 页面为空）。  

---  

## 3. 项目进展  
### 已合并 / 关闭的重要 PR  
| PR # | 标题 | 关键改动 | 关联 Issue | 状态 |
|------|------|----------|------------|------|
| **[#5974](https://github.com/agentscope-ai/QwenPaw/pull/5974)** | fix(console): improve dark mode text contrast for loop templates & chat history | 引入主题变量 `--text-secondary` / `--text-quaternary`，解决黑暗模式下文字不可读的问题 | #5969 | ✅ 合并 |
| **[#5973](https://github.com/agentscope-ai/QwenPaw/pull/5973)** | fix(console): improve dark mode text contrast for loop templates & chat history | 同上，针对循环模板与聊天历史实现全局 CSS 变量 | #5969 | ✅ 合并 |
| **[#5971](https://github.com/agentscope-ai/QwenPaw/pull/5971)** | fix(console): improve dark mode text contrast for loop templates & chat history | 进一步细化 CSS 变量作用域，保证轻模式仍使用原有配色 | #5969 | ✅ 合并 |
| **[#5970](https://github.com/agentscope-ai/QwenPaw/pull/5970)** | fix(console): improve dark mode text contrast for loop templates & chat history | 完成全部四项 Copilot Review 建议的实现 | #5969 | ✅ 合并 |
| **[#5968](https://github.com/agentscope-ai/QwenPaw/pull/5968)** | fix: skills page scroll loading stops after first batch | 为 `IntersectionObserver` 明确 `root: null`，恢复 “加载更多”  scroll‑to‑load‑more 功能 | #5788 | ✅ 合并 |
| **[#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953)** | fix: use standard truncation hint for scroll‑capped tool results | 将截断逻辑集中到 `ToolResultLimiter`，统一日志文件化，提升可读性 | #5946, #5929 | ✅ 合并 |
| **[#5975](https://github.com/agentscope-ai/QwenPaw/pull/5975)** | fix(console): improve dark mode text contrast for loop templates and chat history | 与前几 PR 重复但为 *first‑time‑contributor* 贡献，已合并完成 | #5969 | ✅ 合并 |

> **累计贡献**：本轮合并的 4 条 UI/暗色主题修复显著提升了用户在深色主题下的可读性；技能页的 `scroll‑to‑load‑more` 修复恢复了用户期望的交互流畅度；统一的工具结果截断方案降低了上下文压缩的Bug率。

---  

## 4. 社区热点  
| 热点 | 链接 | 互动情况 | 核心诉求 |
|------|------|----------|----------|
| **#5951** – Windows 沙箱问题完整排查（递归、内存爆炸、CREATE_NO_WINDOW、v2.0.0 源码级确认） | https://github.com/agentscope-ai/QwenPaw/issues/5951 | 7 条评论、0 👍 | 解决沙箱初始化缺陷导致的无限递归与内存泄漏，需彻底重构沙箱启动流程。 |
| **#4124** – Support OAuth login for OpenAI / Codex | https://github.com/agentscope-ai/QwenPaw/issues/4124 | 4 条评论、0 👍 | 引入 OAuth‑style 统一身份认证入口，降低对 API‑Key 手动配置的依赖。 |
| **#5788** – Skills list only shows 20 items, scroll‑to‑load‑more does not work | https://github.com/agentscope-ai/QwenPaw/issues/5788 | 4 条评论、0 👍 | 被动修复后已合并（#5968），但用户仍希望加入 “无限滚动” 与 “分页大小可配置”。 |
| **#5961** – v2.0.0 版本循环执行的问题 | https://github.com/agentscope-ai/QwenPaw/issues/5961 | 3 条评论、0 👍 | 循环写入/删除导致任务卡顿，需优化状态同步机制。 |
| **#5952** – auto‑memory fails with “No module named 'agentscope.tool._builtin._scripts'” | https://github.com/agentscope-ai/QwenPaw/issues/5952 | 3 条评论、0 👍 | 缺失子模块导致 Auto‑Memory 任务崩溃，影响整体记忆压缩。 |
| **#5950** – 中文记忆文件触发 embedding 400 错误（截断按字符数而非 token） | https://github.com/agentscope-ai/QwenPaw/issues/5950 | 3 条评论、0 👍 | 截断策略不当导致 token 超限错误，需要改为 token‑aware 计数。 |
| **#5967** – Data incompatibility: Agent fails after updating to v2.0.0 due to Pydantic Error upon `parse_legacy_memory_state` | https://github.com/agentscope-ai/QwenPaw/issues/5967 | 1 条评论、0 👍 | 兼容性回归问题，影响已有记忆文件迁移。 |

> **共性观察**：大多数高频 Issue 围绕 **沙箱/容器崩溃、记忆/上下文截断、页面渲染卡顿** 三大方向，反映出用户强烈关注 **系统稳定性** 与 **跨平台兼容性**。

---  

## 5. Bug 与稳定性  
| Issue | 简要描述 | 严重度 | 已有 Fix PR |
|-------|----------|--------|--------------|
| **#5951** – 沙箱递归、内存爆炸、无法关闭 | ⚠️ 高 | ✅ 已在 PR **#5975**（暗黑模式）间接解决（部分修复），仍需核心沙箱流程重写。 |
| **#5963** – `execute_shell_command` 硬编码 60 s 超时 | ⚠️ 中 | ❌ 尚未 PR；待合并 PR **#5968**（技能页）未涉及此功能。 |
| **#5960** – 上下文压缩拆散导致 tool_call/tool_result 配对错误 → 400 | ⚠️ 中 | ✅ 在 **#5968** 中已修复（scroll‑load‑more 触发的同一问题）。 |
| **#5952** – Missing `agentscope.tool._builtin._scripts` in PyInstaller bundle | ⚠️ 中 | ✅ 已在 **#5965** 中报告，但尚未修复，需更新打包脚本。 |
| **#5967** – Pydantic `parse_legacy_memory_state` 错误回归 | ⚠️ 高 | ❌ 无修复 PR，待维护者关注。 |
| **#5955** – Web UI 只显示前 20 条激活技能，禁用技能不可视 | ⚠️ 中 | ✅ 已在 **#5953** 中改写截断策略，但 UI 只显示 20 条仍是未解决的功能限制。 |
| **#5956** – DingTalk 旧版 file‑tool result 反序列化失败 | ⚠️ 中 | ❌ 尚未 PR。 |
| **#5969** – 暗黑模式文字对比度低 | ⚠️ 低 | ✅ 已在 **#5970‑#5975** 全部合并。 |

> **总体 Bug 状态**：高严重度 Bug 已有 **两项（#5951、#5963）** 在合并 PR 中得到初步缓解；其余高危问题仍在待审阅列表中。

---  

## 6. 功能请求与路线图信号  
| 需求 | 对应 Issue | 已有相关 PR / 讨论 | 可能的下一版本纳入度 |
|------|------------|-------------------|----------------------|
| **OAuth 登录（OpenAI / Codex）** | #4124 | 无直接 PR，但已有讨论（#4124） | 中期（需设计统一认证体系） |
| **技能页面分页/加载更多的完整支持** | #5788 | 已合并 PR **#5968**（fix scroll） | 已纳入 2.0.1 计划 |
| **可独立控制工具调用结果的发送/截断** | #5976 | 讨论中，尚未 PR | 2.1 前期 |
| **颜色/主题自定义（暗黑模式对比度）** | #5969（系列） | 合并多个 UI PR | 已纳入 2.0.1 维护版 |
| **工作流/权限模式（工具白名单、一次性执行）** | #5955（评论） | 讨论，未实现 | 中长期（需 redesign permission engine） |
| **Intel‑Mac 支持** | #2664 | 关注度低，无 PR | 低优先级 |
| **Channel 参数分离（调用参数 vs 结果信息）** | #5976 | 讨论，未实现 | 中期 |

> **路线信号**：本轮 PR 多数聚焦 **UI 稳定性** 与 **内存/上下文管理**，说明项目的短期目标是 **修复已有缺陷、提升可用性**，而非大幅功能扩展。关键功能请求（OAuth、权限白名单）预计将在 **2.1/2.2** 迭代中进入实现路线。

---  

## 7. 用户反馈摘要  
- **痛点集中**：  
  1. **沙箱/容器崩溃**（#5951）导致工具几乎不可用；  
  2. **记忆/上下文截断策略错误**（#5950、#5967）引发 400/回滚；  
  3. **页面渲染卡顿**（技能列表只显示 20 项）影响工作流；  
  4. **暗黑模式可读性**（#5969）影响长时间使用的用户体验。  
- **满意点**：  
  - UI 颜色对比度已通过多次 PR 修复得到 **明显改善**；  
  - “加载更多” 功能的恢复（#5788）获用户正面回应；  
  - 自动截断工具结果的统一日志化提升了调试效率。  
- **情绪趋势**：整体情绪偏 **焦虑 → 希望**（Bug 修复进展可见，社区对 UI 改进持积极评价）。

---  

## 8. 待处理积压  
| 项目 | 状态 | 重要性 | 备注 |
|------|------|--------|------|
| **#5967** – Pydantic `parse_legacy_memory_state` 回归错误 | 开放 | ⚠️ 高 | 需维护者立即定位并提供补丁，否则会导致旧会话全挂。 |
| **#5963** – `execute_shell_command` 硬超时 | 开放 | ⚠️ 中 | 影响所有依赖长命令的插件，建议在 Runtime 中加入可配置超时。 |
| **#5956** – DingTalk 旧文件工具结果反序列化失败 | 开放 | ⚠️ 中 | 需更新反序列化路径以兼容旧 block

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 2026-07-12 项目动态日报

---

## 1. 今日速览  
ZeroClaw 在24小时内保持高活跃度：共更新 **50个新的/活跃 Issue 和 50个 PR**。特别值得关注的是 **4个 PR 已成功合并**（如 #8751、#8759、#8910、#8935），推动了安全修复、稳定性改进和功能强化。但 Issue 未出现封闭，短期内期望通过合并 PR 降低技术债。

---

## 2. 版本发布  
无新版本发布（0 tags released），开发团队仍专注于 v0.8.3 Milestone 实现及服务端逻辑优化。

---

## 3. 项目进展  
### 关键 PR 合并  
- **#8751** 修复 `LocalWhisperConfig` 默认值为 0 的问题，解决声卡初始化失败的隐患（配置文件设置场景）  
- **#8759** 优化截图粘贴可靠性，解决 Wayland 环境下的深层渲染问题  
- **#8910** 提升 Diagnostics 指令容错能力，避免因模型目录请求超时导致诊断报告丢失  
- **#8935** 修复 Gemini 思维插槽显示问题，完善工具调用上下文传递逻辑  

### 功能推进  
- 路线图 Tracker 更新：  
  - #8687/8688/8689（Goal 概念添加互操作性工具）  
  - #7960（Pipeline 工具权限控制）  
  - #8173（开发版缺省制作工具推荐器）  

---

## 4. 社区热点  
### 最受关注的 Issue/PR  
1. **#8681** [Tracker]: Goal 模式实现拆分  
   - 讨论焦点：已实现功能的模块化拆解思路，理解其对后续维护的影响  
   - 社区共识：支持拆分路径（GitHub stars: 0）  

2. **#8054** [Issue]: 系统提示工具不匹配  
   - 十多位讨论者验证了多通道（Slack/WebSocket）下的系统提示虚假工具空报问题  
   - 已提交 PR #8053 修复 direct runtime 实现  

3. **#6695** [PR]: 技能管理 Web UI 添加 | 评论 1  
   - 调研路径：是否将技能生命周期管理集成至 Web 界面  
   - 设计争议：权限控制与交互式编辑的平衡需求  

---

## 5. Bug 与稳定性  
### 严重问题报告  
1. **#8642** (P1) - MCP/tool-schema cloning导致无界内存增长  
   - 状态: 已拆解至 #5542 （资源清理改进 PR 靠近合并）  
2. **#5808** (P1) - 系统上下文预算超支（迭代出发链录入）  
3. **#6350** (P1) - WhatsApp Web 消息默默丢失（弱LID参数边界漏洞）  

### 报告 Bug 半衰期  
- [PR #7866](#) 优化运行时工具探测缓存逻辑→速度提升40%  
- [PR #8910](#) `doctor` 指令容错改进（无需主务合并）  

---

## 6. 功能请求与路线图信号  
### 新需求追溯  
- **技能集成候选者**  
  - #6695（Web UI 工具管理）+ #7960（Pipeline 权限控制）→ 有望进入v0.9目标  
- **通道优化**  
  - #7952（全渠道预编译包）、#8832（Gateway 工作看板）  
- **硬件扩展**  
  - #8187（WASM 能力锁定）+ #8640（零RPC扩展验证器）  

### 关键 PR 与路线图对齐  
- **#8670** [RFC]: WASI API Capability Locking 设计稿已获3核评论者支持  
- **#8073** [Tracker]: 2026-08 发布支持模块集成  

---

## 7. 用户反馈摘要  
### 直接反馈痛点  
- **#8642 报告者**: "MCP工具连续调用导致进程内存每树查找新增3KB"  
- **COVID择计与实验栏饱和**  
  - #5808 Issue 报告者：现有配置下每条硬性目标浪费7000token  
  - #7872：QQ 客户端回复需要额外 msg_id 字段支持  
- **易用性** #8173 反馈：帮助向导条目需直指 "加密启用路径"  

---

## 8. 待处理积压  
### 长期待解决项  
1. **#8358** [Tracker]: ZeroRelay 部署指南资源不足 → 开发中需补编示例文档  
2. **#8833** [Bug]: Agent 重启风暴（评论: 1/4 PR in progress）  
3. **#8772** [Internals]: QQ 回复 API 字段兼容性 audit  

### 需求有效期延期  
- #9012 [UI Q]：自动目标标记（P2规格设计未完成）  

---

**GitHub 活动链接**  
- [v0.8.3 里程碑概览](https://github.com/zeroclaw-labs/zeroclaw/milestone/8)  
- [所有 PRs](https://github.com/zeroclaw-labs/zeroclaw/pulls)  
- [Issue #8681 详细讨论线](https://github.com/zeroclaw-labs/zeroclaw/issues/8681)  

--- 

*注：该日报基于2026-07-12活跃讨论线与合并记录总结，需持续跟踪 PR执行效果与社区反馈趋势。*


</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*