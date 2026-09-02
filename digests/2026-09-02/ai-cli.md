# AI CLI 工具社区动态日报 2026-09-02

> 生成时间: 2026-09-02 02:02 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

Here's a thinking process:

1.  **Analyze User Request:**
   - User wants a cross-tool comparison analysis report based on the provided AI CLI tool dynamics for 2026-09-02
   - Required sections: 1-6 as specified
   - Language: concise professional, data-supported, for technical decision-makers/developers
   - Tools covered in the data: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, Qwen Code, DeepSeek TUI

2.  **Review All Provided Data:**
   I need to extract key metrics and themes from each tool's report to build the comparison. Let me summarize each tool's data:

   **Claude Code** (github.com/anthropics/claude-code):
   - Only has "User Safety: safe" mentioned, no detailed dynamics provided in the excerpt. Actually, the format shows "## Claude Code (github.com/anthropics/claude-code)" then "User Safety: safe". That's it. No issues/PRs/releases data. I'll need to note that data is limited or assume it's not fully detailed in the prompt. Wait, looking again: The prompt says "以下是 2026-09-02 各主流 AI CLI 工具的社区动态摘要：" then lists them. For Claude Code, it only shows "User Safety: safe". That seems incomplete compared to others. I'll have to work with what's given or note limited data. Actually, maybe it's just a placeholder. I'll treat it as having minimal data available, or perhaps I should infer from context? The prompt says "以下是...摘要", so I must use only what's provided. For Claude Code, only "User Safety: safe" is given. I'll mention limited data but still include it in the comparison where appropriate, or focus on the ones with rich data.

   **OpenAI Codex** (github.com/openai/codex):
   - 5 releases today (1 bug fix, 3 alpha, 1 stable patch)
   - 50 Issues + 50 PRs in past 24h
   - Top issues: Remote control, Windows problems, quota/depletion, browser/chrome plugin, TUI interactions
   - Top PRs: Security/guardian, network/header injections, observability, Vim composer redo, shell snapshots, symlink fork support
   - Trends: Remote cross-device, Windows stability, CLI/TUI experience, quota monitoring, browser tools

   **Gemini CLI** (github.com/google-gemini/gemini-cli):
   - Nightly/preview releases: v0.59.0-nightly.20260902.g4963a4456, v0.59.0-preview.0, v0.58.0
   - 50 Issues + 39 PRs in past 24h (showing top 30 issues, 20 PRs)
   - Key issues: Subagent recovery, agent hangs, Auto Memory redaction, tool count limits (>128 tools -> 400), Wayland browser, config overrides, non-interactive mode, security/OAuth
   - Key PRs: Version bumps, extension consent/env vars, stdin restore, a2a launcher, model IDs, function-call turns, plan-routing, non-interactive mode fix, extension install races, evaluation suite
   - Trends: Agent reliability, browser/Wayland, Auto Memory privacy, tool scalability, non-interactive mode, security/OAuth, AST-aware tools

   **GitHub Copilot CLI** (github.com/github/copilot-cli):
   - Release v1.0.83-1: sidebar sorting, enterprise sign-in pinning, MCP improvements
   - 36 Issues + 0 PRs in past 24h (data says "Latest Pull Requests (past 24h updates) (total 0) No data")
   - Key issues: Vim mode (9 comments, 75 likes), heap OOM on session resume, legacy initialize after modern discover, agent resolution dir conflict, disable-model-invocation skill unreachable, MCP OAuth missing User-Agent, wrong model ID to custom endpoint, expired token forces re-auth, Node.js OOM after 37 min, Azure DevOps "Request.Path" error
   - No new PRs in past 24h

   **Kimi Code CLI** (github.com/MoonshotAI/kimi-cli):
   - Release v1.50.0 (2026-09-01): deprecation-aware update flow, shell deprecation warnings, migration to Kimi Code
   - 2 Issues + 4 PRs in past 24h (data shows 2 issues, 4 PRs active)
   - Key issues: #1287 (multi-task concurrent prompt input), #1292 (Task sub-task hang on macOS)
   - Key PRs: #2630 (deprecation-aware update), #2614 (plugin security doc), #742 (Skills list), #2632 (version release)
   - Trends: Multi-task/concurrent handling, plugin ecosystem maturity, brand migration Kimi Code

   **Qwen Code** (github.com/QwenLM/qwen-code):
   - 50 Issues + 50 PRs in past 24h
   - Release: cua-driver-rs v0.20.3 (multi-platform precompiled binaries)
   - Key issues: #8662 (TUI ink->OpenTUI migration), #10520 (llama.cpp threshold 400 error), #10530 (grammar parse failure), #10218 (permissions.allow semantic change), #10162 (ACP NDJSON queue saturation), #2339 (Telegram Bot mode), #10583 (Linux Bubblewrap sandbox), #10400 (eager tool name crash), #10749 (TUI scroll anomaly), #10698 (Node 20 ESM build failure)
   - Key PRs: #10713 (BTW side question in channels), #10679 (workspace-scoped MCP management), #10136 (review fix-audit shape), #10347 (network error retry), #6606 (daemon key cleanup), #10756 (lint/static split CI), #10455 (non-crash start on read-only files), #10611 (task session grouping), #10752 (git pull validation), #9402 (Agent Board)
   - Trends: TUI migration to OpenTUI, llama.cpp compatibility, permissions.allow breaking change, Telegram/DingTalk integration, Web Shell session management, local model support, MCP ecosystem, Agent Board

   **DeepSeek TUI** (github.com/Hmbown/DeepSeek-TUI):
   - 29 Issues + 48 PRs in past 24h
   - No new release
   - Key issues: #4956 (WSL2 provider connection failure), #4568 (slash command lag), #4564 (Windows param parse bug), #3751 (Neuralwatt Provider support), #1330 (ZenMux integration), #2535 (ACP+MCP tool support + streaming), #5806 (OpenDesign compatibility), #4394 (context compression structured survival contract), #4721 (settings menu audit), #5605 (test stability flaky under parallel load)
   - Key PRs: #5816 (persistent goal reinjection), #5812 (ANSI color preserve), #5813 (diff highlight words), #5815 (Fleet model add/shift), #5814 (fullscreen/inline toggle), #5810 (unified settings schema), #5809 (default bottom rail), #5784 (ChatGPT PKCE native login), #5805 (isZh i18n ceiling), #5743 (Web Tideline docs)
   - Trends: Model supplier expansion (Neuralwatt, ZenMux), cross-platform compatibility (WSL2, Windows), TUI experience polishing (layout, color, diff), settings system normalization, MCP/tool ecosystem evolution, test stability

3.  **Synthesize Comparison Data:**
   I need to create 6 sections. Let plan each:

   **1. 生态全景 (Ecosystem Overview):**
   3-5 sentences summarizing overall state. I'll note that the AI CLI landscape is highly fragmented but actively innovating, with major players focusing on cross-device workflows, TUI modernization, MCP/plugin ecosystems, and platform compatibility. Smaller/niche tools are iterating rapidly on specific pain points. There's a clear trend toward non-interactive/remote stability, model-agnostic integration, and developer experience over pure capability.

   **2. 各工具活跃度对比 (Activity Comparison Table):**
   Columns: Tool, New Releases, Issues (24h), PRs (24h), Key Highlight
   Data:
   - Claude Code: ? (only "User Safety: safe" given, maybe 0 or unknown) - I'll note data limited, or assume 0 releases/issues shown. Actually, the prompt says "以下是 2026-09-02 各主流 AI CLI 工具的社区动态摘要", and Claude Code only has "User Safety: safe". I'll treat it as having no reported dynamics in the snapshot, or perhaps it's a placeholder. I'll put "Limited data" or "0" but note it. To be consistent, I'll maybe assign based on what's implied: The format for others has dates, counts. For Claude Code, I'll put "N/A/No detailed data in snapshot" or similar. But the table needs consistency. I'll put releases: 0 (none mentioned), issues: 0 (none mentioned), PRs: 0 (none mentioned), highlight: "User safety flag only". Or I could infer it's not fully reported. I'll be transparent.
   - OpenAI Codex: 5 releases, 50 issues, 50 PRs
   - Gemini CLI: 3 releases (nightly/preview), 50 issues, 39 PRs (showing top 20)
   - GitHub Copilot CLI: 1 release, 36 issues, 0 PRs
   - Kimi Code CLI: 1 release (v1.50.0, but dated 2026-09-01), 2 issues, 4 PRs
   - Qwen Code: 1 release (cua-driver-rs v0.20.3), 50 issues, 50 PRs
   - DeepSeek TUI: 0 releases, 29 issues, 48 PRs

   I'll construct the table carefully.

   **3. 共同关注的功能方向 (Common Focus Areas):**
   Identify overlapping themes across multiple tools:
   - Cross-device/Remote workflow stability (Codex, Gemini, Kimi Code? Kimi has #1287 multi-task, not exactly remote)
   - TUI/CLI experience modernization (Gemini OpenTUI migration, Qwen ink->OpenTUI, DeepSeek TUI polish)
   - MCP/plugin ecosystem expansion (All except maybe Claude Code limited data; Gemini PRs on MCP, Qwen #10679, DeepSeek #2535, Kimi #2614)
   - Platform compatibility & stability (Codex Windows/macOS Remote, Gemini Wayland/browser, Qwen Node 20/llama.cpp, DeepSeek WSL2/Windows param parse, Copilot CLI auth)
   - Agent reliability & sub-agent coordination (Codex subagent hangs, Gemini Auto Memory/subagent, Qwen #8662/#10713, DeepSeek #5816 persistent goals)
   - Security/permissions model changes (Qwen #10218 permissions.allow, Gemini guardian/PR, Copilot CLI forceLoginOrgs)
   - Non-interactive/headless mode stability (Gemini plan mode, Codex auto-update drain, Qwen #10347)

   I'll list 5-6 common directions with which tools.

   **4. 差异化定位分析 (Differentiated Positioning):**
   - OpenAI Codex: Enterprise/heavy remote workflow focus, Windows-heavy pain points, strong GitHub integration, quota/resource management
   - Gemini CLI: Developer tooling, non-interactive/headless modes, model-agnostic (supports multiple backends), heavy AST/ code-aware tooling research
   - GitHub Copilot CLI: Microsoft ecosystem, enterprise org management, CI/CD adjacent, precompiled binaries, focus on auth/organization governance
   - Kimi Code CLI: MoonshotAI product push, Kimi Code migration, deprecation handling, smaller open-source community but product-integrated
   - Qwen Code: Model execution focus (llama.cpp, local models), TUI modernization, message platform integration (Telegram/DingTalk), strong CI/refactoring activity
   - DeepSeek TUI: Pure TUI experience, cross-platform (WSL2, Windows, macOS), model supplier expansion (Neuralwatt, ZenMuck), community-driven, 0.9.12 version push

   **5. 社区热度与成熟度 (Community Activity & Maturity):**
   - Most active: Qwen Code (50 issues + 50 PRs), OpenAI Codex (50/50), DeepSeek TUI (29/48) - all high volume, indicating active development
   - Moderate: Gemini CLI (50 issues, 39 PRs, plus nightly releases)
   - Lower but product-focused: GitHub Copilot CLI (36 issues, 0 PRs in snapshot, but 1 release, enterprise focus)
   - Small/niche: Kimi Code CLI (2 issues, 4 PRs, 1 release) - focused on product migration
   - Claude Code: Insufficient data in snapshot, only safety flag
   - Maturity signals: Qwen Code and DeepSeek TUI have wide issue/PR variety suggesting maturing feature sets; Codex has enterprise-scale activity; Copilot CLI has official Microsoft backing but lower open PR count; Kimi Code is product-driven.

   **6. 值得关注的趋势信号 (Valuable Trend Signals):**
   - TUI migration/rewrite wave: ink->OpenTUI (Gemini, Qwen), TUI polish (DeepSeek) - indicates UI layer becoming differentiator
   - Remote/cross-device reliability crisis: Codex Remote SSH/macOS issues, Gemini non-interactive mode, shows remote is hardest problem
   - MCP/plugin going mainstream: All tools adding MCP support, moving from experimental to core (Qwen #10679, DeepSeek #2535, Kimi #2614, Gemini many)
   - Model-agnostic/local execution pressure: Qwen llama.cpp issues, Gemini Auto Memory/redaction, DeepSeek Neuralwatt/ZenMux - users want non-OpenAI paths
   - Permissions/breaking change friction: Qwen #10218 semantic change, Copilot CLI org policies - ecosystem needs better migration paths
   - CI/test maturity: Qwen splitting lint jobs, DeepSeek flaky test focus - tooling for dev tools is improving
   - AI safety/guardrail integration: Codex Guardian, Qwen review systems - safety moving from optional to core

   Now, I'll write the report in professional Chinese, ensuring each section is concise, data-backed, and follows the structure. I'll make sure to reference specific tools and data points. I'll avoid hallucination by strictly using provided data. For Claude Code limited data, I'll note "数据在摘要中仅包含安全标识，未提供动态统计" or similar.

   Let's draft section by section.

   **1. 生态全景**: 3-5 sentences. I'll write in Chinese.
   **2. 表格**: Use Markdown table. I'll ensure counts are accurate from data.
   **3. 共同关注**: bullet list or small table, mention which tools.
   **4. 差异化定位**: paragraphs per tool or grouped.
   **5. 热度与成熟度**: table or bullet, with evaluation criteria.
   **6. 趋势信号**: bullet list with impact.

   Check data accuracy:
   - Claude Code: Only "User Safety: safe". I'll put in table: Releases: 0 (none mentioned), Issues: 0, PRs: 0, Highlight: 安全标识仅. Or maybe the prompt expects me to treat it as having data but only that. I'll handle transparently.
   - OpenAI Codex: "5 Release (含一个 bug 修复版本和多个 alpha 预发布版本)", "50 个 Issue 和 50 个 PR 在过去 24 小时内有更新"
   - Gemini CLI: "50 个 Issues 和 50 个 Pull Requests" (the report says "共新增 50 个 Issues 和 50 个 Pull Requests"), releases: nightly/preview/v0.58.0. I'll note 3 releases or 1 nightly + preview + stable. The data shows v0.59.0-nightly.20260902.g4963a4456, v0.59.0-preview.0, v0.58.0. I'll say 3 releases in past period.
   - GitHub Copilot CLI: "v1.0.83-1" released, "36 个 Issues", "Latest Pull Requests (past 24h updates) (total 0) No data"
   - Kimi Code CLI: "v1.50.0" released on 2026-09-01, "2 个 Issues 和 4 个 Pull Requests" (the summary says "2 Issues" and "4 PRs are actively updated", also "2 updates Issues" and "4 PRs". I'll use 2 issues, 4 PRs.)
   - Qwen Code: "50 个 Issues 和 50 个 Pull Requests",

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

## 1. 热门 Skills 排行

| 排名 | PR 编号 | 名称 | 功能概述 | 社区热点 | 当前状态 |
|------|----------|------|----------|----------|----------|
| 1 | #492 | Security: Community skills distributed under `anthropic/` namespace enable trust boundary abuse | 揭示社区技能被误认为官方技能，存在权限滥用风险 | 安全合规、信任边界 | OPEN (高优先级修复) |
| 2 | #228 | Enable org-wide skill sharing in Claude | 支持组织内直接技能共享，替代手动上传流程 | 协作效率、团队协同 | OPEN |
| 3 | #556 | run_eval.py: claude -p never triggers skills/commands (0% trigger rate) | `run_eval.py` 无法触发技能，导致评估全零 | 核心功能稳定性、技能评估 | OPEN |
| 4 | #1628 | Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill | 让 Claude Code 委托机械任务给头less OpenCode 工作者 | 多代理协调、工作流自动化 | OPEN (近期热议) |
| 5 | #1615 | Add scnet-hpc skill | SCNet HPC 集群的 profile-based SSH/Slurm 工作流 | HPC 集群管理、计算资源调度 | OPEN (近期热议) |
| 6 | #1367 | feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate | 机械文件验证 + 四维推理质量门禁 | 质量保障、输出可靠性 | OPEN |
| 7 | #568 | Add ServiceNow platform skill | 全面覆盖 ITSM、ITAM、FSM、SPM、CSDM 等 ServiceNow 平台能力 | 企业级平台集成 | OPEN |
| 8 | #1298 | fix(skill-creator): run_eval.py always reports 0% recall | 修复 `run_eval.py` 在所有技能描述上的回忆率为 0% 的问题 | 核心评估工具稳定性 | OPEN |

> **备注**：上述排名基于评论数和社区关注度综合评估。#492 因涉及安全合规风险，社区关注度最高；#556 和 #1298 分别是影响技能评估闭环的关键功能；#1628 和 #1615 代表新兴的多代理协调和 HPC 领域需求。

---

## 2. 社区需求趋势

从 Issues 分析，社区最期待的新 Skill 方向主要集中在以下几个领域：

1. **安全与信任边界**  
   - #492 显示社区高度关注社区技能被误认官方的安全风险，推动对技能来源验证、权限控制的规范化需求。

2. **组织级协作与共享**  
   - #228 反映用户希望在组织内部实现更便捷的技能共享与协同，减少手动上传繁琐的流程。

3. **核心功能稳定性**  
   - #556（`run_eval.py` 触发失败）、#1298（同样涉及 `run_eval.py` 回忆率问题）表明社区对技能评估闭环的可靠性极其敏感，任何影响技能执行的 Bug 都会引发广泛关注。

4. **多代理协调与工作流自动化**  
   - #1628（Hivemind）和 #1615（scnet-hpc）展示了社区对高级协作模式的兴趣，特别是能够将机械任务卸载给外部工作者的能力。

5. **质量保障与测试驱动开发**  
   - #1367（自审计技能）、#723（测试模式技能）反映社区希望在技能生命周期中嵌入质量检查机制，确保输出符合标准。

6. **平台集成扩展**  
   - #568（ServiceNow）、#29（Bedrock）、#1175（SharePoint）等请求显示社区希望技能能更好地适配主流企业应用和云服务。

---

## 3. 高潜力待合并 Skills

以下 PR 具有较高的活跃度和潜在价值，建议优先合并：

| PR 编号 | 名称 | 关键特性 | 社区关注度 | 推荐合并理由 |
|---------|------|----------|------------|--------------|
| #1298 | fix(skill-creator): run_eval.py always reports 0% recall | 修复核心评估工具的回忆率问题 | 高（#556 相关） | 直接影响技能评估闭环，是整个生态的基石 |
| #1615 | Add scnet-hpc skill | SCNet HPC 集群的 profile-based SSH/Slurm 工作流 | 高（近期热议） | 新兴 HPC 领域需求，具备独特技术价值 |
| #1628 | Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill | 多代理协调，外部工作者执行机械任务 | 高（趋势方向） | 代表下一代协作范式，社区关注度持续上升 |
| #1367 | feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate | 机械验证 + 四维推理质量门禁 | 高 | 提升整体技能质量，符合行业最佳实践 |
| #568 | Add ServiceNow platform skill | 全面覆盖 ServiceNow 平台能力 | 中高 | 企业级平台集成需求强烈，覆盖范围广 |
| #519 | Add compact-memory skill | 符号化表示的紧凑智能体状态管理 | 中 | 针对长上下文场景的优化，技术创新值得关注 |

---

## 4. Skills 生态洞察

当前社区在 Skills 层面最集中的诉求是：**提升技能的可靠性、安全性与跨平台适配能力**，同时推动从单一任务执行向多代理协同、质量自检和企业级集成演进。

---

User Safety: safe

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>


# OpenAI Codex 社区动态日报
**日期：** 2026-09-02  
**报告人：** AI 开发工具技术分析师

---

## 1. 今日速览

今日 OpenAI Codex 项目共推送 **5 个 Release**（含一个 bug 修复版本和多个 alpha 预发布版本），社区围绕 **远程控制（Remote）功能** 和 **配额/限流异常** 持续展开深度讨论，共有 50 个 Issue 和 50 个 PR 在过去 24 小时内有更新。值得关注的是，Windows 平台的问题在当日 Issue 中占比显著提升，Remote SSH、Browser 工具、Quota 追踪成为三大焦点话题。

---

## 2. 版本发布

### 🛠️ rust-v0.152.1（稳定版补丁）
**发布时间：** 2026-09-02  
**变更类型：** Bug 修复

> **修复内容：** Guardian 审批流程现已正确遵循通过模型元数据提供的 Node REPL 策略。

**完整变更日志：** https://github.com/openai/codex/compare/rust-v0.152.0...rust-v0.152.1

---

### 🔬 rust-v0.153.0-alpha.4 / alpha.2 / alpha.1（预发布版本）
**发布时间：** 2026-09-02  
**说明：** 0.153.0 系列的早期迭代版本，主要面向内部测试，当前未公开详细变更说明。开发者如需尝鲜请注意其不稳定属性。

---

## 3. 社区热点 Issues（TOP 10）

以下按讨论热度（评论数）排序，挑选 10 个最值得关注的 Issue：

| # | Issue 标题 | 评论 | 👍 | 重要性说明 |
|---|-----------|------|----|-----------|
| 1 | **add an option to disable "Ran N commands" collapsing** (#39903) | 56 | 77 | CLI 核心交互体验问题。用户强烈要求控制命令折叠行为，社区呼声极高，是呼声最高的 TUI/CLI 改进请求 |
| 2 | **[macOS][regression] Desktop cannot resume Remote Control** (#37403) | 47 | 34 | 重大回归缺陷。8月7日更新后 macOS Remote Control 无法恢复 CLI 线程，直接影响跨设备工作流 |
| 3 | **Windows + Android Remote Control enters reconnect loop** (#39954) | 18 | 0 | Remote 跨平台连接受阻问题，虽👍较少但影响特定用户群体的实际可用性 |
| 4 | **[Windows] Local execution fails to start after updating Codex Desktop** (#41088) | 12 | 0 | Windows 平台更新后本地执行挂起，影响 Plus 用户日常使用 |
| 5 | **[GitHub connector] Ready-for-review operation queries invalid Repository.fullDatabaseId** (#41433) | 12 | 7 | GitHub 集成关键 bug。GraphQL API 字段错误导致 PR "Ready for Review" 操作失败，影响开发者工作流 |
| 6 | **[Meta] Abnormal Codex usage/quota depletion** (#41220) | 11 | 6 | 元问题追踪器。多个用户报告配额消耗异常，已成为社区资源管理热点的汇聚点 |
| 7 | **Undo / redo typing** (#2379) | 10 | 32 | 长期功能请求。TUI 文本编辑基础能力需求，👍与评论数反差说明这是被广泛认同的刚需 |
| 8 | **Browser/Chrome plugin fails trusted RPC dependency path validation** (#39399) | 10 | 0 | Windows 平台 Browser 工具启动失败，与插件缓存路径强相关 |
| 9 | **[RFC] Towards Self-Evolving Agents: /learn and Rule Metabolism** (#40575) | 9 | 0 | 社区提出的自进化代理架构提案，代表了长期发展方向的前沿思考 |
| 10 | **TUI markdown hyperlinks not clickable in OSC 8 terminals** (#25934) | 8 | 4 | 终端链接可访问性问题，影响开发者文档和日志体验 |

### 🔗 GitHub Issues 链接汇总

- #39903: https://github.com/openai/codex/issues/39903
- #37403: https://github.com/openai/codex/issues/37403
- #39954: https://github.com/openai/codex/issues/39954
- #41088: https://github.com/openai/codex/issues/41088
- #41433: https://github.com/openai/codex/issues/41433
- #41220: https://github.com/openai/codex/issues/41220
- #2379: https://github.com/openai/codex/issues/2379
- #39399: https://github.com/openai/codex/issues/39399
- #40575: https://github.com/openai/codex/issues/40575
- #25934: https://github.com/openai/codex/issues/25934

---

## 4. 重要 PR 进展（TOP 10）

以下按功能领域组织，挑选 10 个最具代表性的 PR：

### 🔐 安全与权限
- **#42147 — Skip Guardian reviews in Full Access**  
  检测 Full Access 模式下跳过 Guardian 审批，减少不必要的模型审查，提升 Full Access 用户体验。

- **#42144 — Add Guardian V2 analytics events**  
  新增 Guardian V2 分类事件、快速决策事件的埋点，为安全审查流程提供数据监控基础。

- **#42146 — Resolve permission requests in the executor context**  
  在选定的执行器上下文中评估权限请求和授权，包括路径约定、主目录、workspace roots 等环境信息。

### 🌐 网络与集成
- **#42173 — Support header injections in network requirements**  
  新增 `experimental_network.header_injections` 规则解析，支持 host、method、path-prefix 与 header 的映射配置。

- **#42128 — Prepare MCP connections for coordinated OAuth refresh**  
  为 MCP 连接添加协调式 OAuth 刷新机制，为多连接场景下的认证管理奠定基础。

### 📊 可观测性与分析
- **#42164 — Record result sources in app tool analytics**  
  在工具分析中增加 `analytics_result_source` 字段，支持 `detailed_message_search_v1` 格式，增强工具执行链路追踪能力。

- **#42151 — Expose model settings in app-server thread metadata**  
  将模型和推理努力（reasoningEffort）配置暴露到 app-server Thread 对象中，便于元数据查询和 UI 展示。

### 🛠️ 开发者体验
- **#42140 — Add redo support to Vim composer history**  
  为 Vim 编辑器增加重做（redo）功能，支持 `Ctrl+R` 快捷键，完善终端代码编辑能力。

- **#42137 — Prewarm shell snapshots for eligible turns**  
  在 turn hooks 接受后异步启动 shell 快照预热，降低命令执行时延，提升响应速度。

- **#42135 — Support thread forks from symlinked session roots**  
  修复符号链接 session 目录下 fork 线程时路径验证失败的问题，扩展文件系统兼容性。

### 🔗 GitHub PRs 链接汇总

- #42147: https://github.com/openai/codex/pull/42147
- #42144: https://github.com/openai/codex/pull/42144
- #42146: https://github.com/openai/codex/pull/42146
- #42173: https://github.com/openai/codex/pull/42173
- #42128: https://github.com/openai/codex/pull/42128
- #42164: https://github.com/openai/codex/pull/42164
- #42151: https://github.com/openai/codex/pull/42151
- #42140: https://github.com/openai/codex/pull/42140
- #42137: https://github.com/openai/codex/pull/42137
- #42135: https://github.com/openai/codex/pull/42135

---

## 5. 功能需求趋势

通过对今日所有 Issues 的标签（tag）和主题进行聚类分析，社区当前最关注的功能方向如下：

### 📊 热度排行

| 排名 | 功能方向 | 热度信号 | 代表 Issue |
|------|---------|---------|-----------|
| 🥇 | **Remote / 跨设备连接** | 高（多平台 bug 报告） | #37403, #39954, #34263 |
| 🥈 | **Windows 平台稳定性** | 高（Windows bug 集中） | #41088, #39399, #41809 |
| 🥉 | **CLI/TUI 交互体验** | 高（评论最活跃） | #39903, #2379, #25934 |
| 4 | **配额/限流监控** | 中高（多个用户受影响） | #41220, #41968, #41520 |
| 5 | **Browser/Node 工具链** | 中（Remote SSH 下缺失） | #34263, #22844, #39399 |
| 6 | **GitHub 集成增强** | 中 | #41433, #40575 |
| 7 | **自进化代理（长期愿景）** | 中（RFC 阶段） | #40575 |
| 8 | **性能与可靠性** | 中（长任务完成度） | #42080, #39473 |

**趋势洞察：**
- **Remote 功能成为最大痛点**：无论是 macOS、Windows 还是移动端，Remote Control/Secure Shell 相关的 Issue 数量和讨论热度均居首位，说明跨设备协作是当前用户体验的核心瓶颈。
- **Windows 平台问题突出**：当日 Issue 中带有 `windows-os` 标签的占比约 35%，暗示 Windows 版本的测试覆盖或兼容性适配存在短板。
- **配额异常引发系统性关注**：#41220 作为元问题追踪器，将多个用户的配额异常报告汇聚，反映出计费透明度和用量监控是 Plus/Pro 用户高度敏感的领域。

---

## 6. 开发者关注点

综合今日 Issue 和 PR 中的开发者反馈，以下是最需关注的痛点与高频需求：

### 🔴 高优先级痛点

1. **Remote SSH 环境下的工具缺失**  
   Browser 工具和 `node_repl/js` 在通过桌面端 Remote SSH 连接 Linux 主机时不可用，导致远端任务的工具链不完整（#34263, #22844）。

2. **Windows 本地执行挂起**  
   `apply_patch` 调用在 Windows 平台出现无限挂起，shell I/O 正常但补丁应用卡死（#38190）。

3. **配额异常消耗无明确归因**  
   用户报告用量远超预期，但缺乏详细的 token 级使用报告，难以定位原因（#41220, #41968）。

4. **auto-update 强制中断活跃任务**  
   app-server 在 60s drain 超时后强制杀死正在进行的 turns，用户无法禁用自动更新行为（#40969）。

### 🟡 高频需求

| 需求 | 出现频率 | 说明 |
|------|---------|------|
| 命令折叠开关 | 高 | 用户强烈要求控制 "Ran N commands" 的折叠行为（#39903，77 👍） |
| 文本撤销/重做 | 高 | TUI 中的基础编辑能力呼声持续（#2379，32 👍） |
| 文件上传（Mobile Remote） | 中 | 移动端 Remote 仅支持图片，希望扩展至任意文件类型（#37074） |
| 速率限制提前预警 | 中 | Plus/Team 用户希望在 50% 用量时即收到警告（PR #42142 已合入） |
| MCP 连接 OAuth 协调 | 中 | 多 MCP 连接场景下的统一刷新机制需求（#42128 已合入） |

### 🔗 推荐开发者行动

- 若使用 **Remote SSH 功能**，需注意当前远端环境可能缺失 Browser 工具，建议在本地环境完成浏览器相关任务。
- **Windows 用户**在更新至最新版本后，建议关注本地执行和 sandbox 相关 Issue 的状态。
- 对于 **配额监控**，当前 PR 已加入 Plus/Team 的 50% 预警，开发者可关注正式版的这一改进。

---

> **报告说明：** 本日报基于 2026-09-02 当日 GitHub openai/codex 仓库的公开数据生成。Issues 与 PR 按评论数（Issues）或功能重要性（PR）筛选，选取最具代表性的条目进行深度解读。数据采集时间窗口：过去 24 小时。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here's a thinking process:

1.  **Analyze the Request:**
   - Role: Technical analyst focused on AI development tools
   - Task: Generate a community dynamics report (日報) for Gemini CLI dated 2026-09-02
   - Source Data: GitHub data provided (releases, issues, PRs)
   - Structure Required:
     - 今日速览 (2-3 sentences)
     - 版本发布 (if new version, summarize; else omit)
     - 社区热点 Issues (10 most noteworthy, with importance/community reaction)
     - 重要 PR 进展 (10 important PRs, with function/fix content)
     - 功能需求趋势 (extract from all issues)
     - 开发者关注点 (summarize pain points/high-frequency demands)
   - Language: Concise professional Chinese, suitable for technical developers
   - Each item must have GitHub link

2.  **Analyze the Data:**
   - **Releases (past 24h):**
     - v0.59.0-nightly.20260902.g4963a4456: fix(core): improve destination validation and connection routing in web fetch utilities by @diegogodinezr
     - v0.59.0-preview.0: changelog bump, version bump
     - v0.58.0: changelog for v0.57.0-preview.0, fix(core): ensure consistent symlink evaluation
   - **New Contributors:** @diegogodinezr first contribution
   - **Issues (past 24h, top 30 by comments):** Listed 50 total, showing 30. I need to pick 10 most noteworthy. I'll look at comment count, priority, and recency/activity.
   - **PRs (past 24h, top 20 by comments):** Listed 39 total, showing 20. I'll pick 10 important ones.

   Let's categorize the issues by comment count and priority:
   - #22323: 13 comments, p1, bug about subagent recovery after MAX_TURNS
   - #21409: 8 comments, p1, generalist agent hangs
   - #22745: 7 comments, EPIC about AST-aware file reads
   - #27957: 6 comments, closed, checkout branch not reflected
   - #27989: 6 comments, closed, 429 RESOURCE_EXHAUSTED
   - #27785: 6 comments, closed, thinking too long
   - #21968: 6 comments, open, doesn't use skills/sub-agents enough
   - #26525: 5 comments, open, deterministic redaction
   - #28846: 4 comments, closed, OAuth personal fails
   - #28238: 4 comments, open, sandbox config question
   - #25166: 4 comments, open, shell command stuck
   - #22232: 4 comments, open, browser_agent resilience
   - #21983: 4 comments, open, browser subagent fails in Wayland
   - #28025: 3 comments, closed, feedback duplicate
   - #26523: 3 comments, open, surface invalid Auto Memory patches
   - #26522: 3 comments, open, stop Auto Memory retrying low-signal
   - #24246: 3 comments, open, 400 error with >128 tools
   - #23571: 3 comments, open, model creates tmp scripts randomly
   - #22672: 3 comments, open, discourage destructive behavior
   - #22267: 3 comments, open, browser agent ignores settings.json
   - #21924: 2 comments, open, terminal resize flicker
   - #21763: 2 comments, open, bugreport lacks subagent context
   - #28011: 2 comments, closed, infinite thinking loop
   - #28005: 2 comments, closed, code check missing
   - #26516: 2 comments, open, memory system bugs
   - #22746: 2 comments, open, investigate AST aware CLI tools
   - #22598: 2 comments, open, subagent trajectory visible via /chat share
   - #22466: 2 comments, open, incorrect \n escape behavior
   - #22465: 2 comments, open, stuck at interactive prompt creating vite app
   - #21924: 2 comments, open, terminal resize
   - And some with 1 comment or undefined

   I'll pick 10 that represent key trends: agent reliability, browser/Wayland issues, Auto Memory, tool limits, OAuth, AST awareness, etc.

   - #22323 (13 comments): Subagent recovery after MAX_TURNS - critical for agent reliability
   - #21409 (8 comments): Generalist agent hangs - major UX blocker
   - #21968 (6 comments): Doesn't use skills/sub-agents enough - design/feature gap
   - #26525/26523/26522 (5-3 comments): Auto Memory redaction/invalid patches/low-signal retry - privacy/security/trust
   - #24246 (3 comments): 400 error with >128 tools - scalability/CLI limits
   - #22267 (3 comments): Browser agent ignores settings.json - config reliability
   - #21983 (3 comments): Browser subagent fails in Wayland - platform compatibility
   - #22745 (7 comments total but 7 comments on the EPIC, though it's listed as 7 comments): AST-aware tools trend
   - #22598 (2 comments): Subagent trajectory visibility - observability
   - #22746 (2 comments): Investigate AST aware CLI tools - codebase mapping

   Actually, let's look at the comment counts more carefully from the text:
   - #22323: 13
   - #21409: 8
   - #22745: 7
   - #27957: 6
   - #27989: 6
   - #27785: 6
   - #21968: 6
   - #26525: 5
   - #28846: 4
   - #28238: 4
   - #25166: 4
   - #22232: 4
   - #21983: 4
   - #28025: 3
   - #26523: 3
   - #26522: 3
   - #24246: 3
   - #23571: 3
   - #22672: 3
   - #22267: 3
   - #21924: 2
   - #21763: 2
   - #28011: 2
   - #28005: 2
   - #26516: 2
   - #22746: 2
   - #22598: 2
   - #22466: 2
   - #22465: 2
   - Many with 1 or 0/undefined

   I'll pick 10 that are open, have meaningful comments, and represent broad community concerns. I'll avoid closed ones unless they signal a trend.

   PRs analysis:
   - #29165: version bump nightly
   - #28863: fix extensions consent & env vars
   - #28889: restore paused stdin after capability detection
   - #28888: fix a2a launcher workspace outside home
   - #28893: preserve explicit flash model IDs
   - #28895: recognize mixed function-call turns
   - #28897: respect plan-routing model availability
   - #28875: fix fetchJson malformed JSON
   - #28898: harden subprocess execution security
   - #29067: remove misleading security schemes A2A server
   - #29089: forward abortSignal to retryWithBackoff
   - #29088: resolve stop() with MCP stream open
   - #29087: prevent concurrent extension install races
   - #29063: stop Plan Mode waiting on user feedback in non-interactive
   - #28951: add Cloud Run job, workflow, deployment pipeline
   - #28953: add evaluation diff PR submission helper and tests
   - #28952: add interactive diff comparison visualizer generator
   - #28948: add evaluation suite harness and e2e benchmark runner
   - #28949: add LLM diff judge evaluation module and rubric

   I'll pick 10 that represent real progress: security, model handling, non-interactive mode, extension safety, AST/PR generation pipeline, etc.

   Functional trends from issues:
   - Agent reliability & sub-agent coordination (MAX_TURNS, hanging, not using skills)
   - Browser/Wayland compatibility
   - Auto Memory privacy/security/validity
   - Tool/limit scalability (>128 tools causes 400)
   - Non-interactive/Plan mode usability
   - IDE/VS Code companion integration
   - Model selection/ID stability
   - Terminal/responsive UI behavior
   - Security/OAuth migrations
   - Code generation quality & cleanup

   Developer pain points:
   - Agent hangs/infinite loops
   - Sub-agent context loss
   - Browser platform issues (Wayland)
   - Memory/privacy concerns
   - Tool count limits
   - Configuration overrides ignored
   - Non-interactive mode hanging
   - Security/client errors

3.  **Structure the Output:**
   I'll follow the exact requested structure, ensure each item has a GitHub link, write in professional Chinese, concise but informative. I'll format links as `[text](url)` or just `链接: URL`. The prompt says "每个条目附上 GitHub 链接", so I'll include links clearly.

   Let's draft each section:

   **今日速览**: 
   - v0.59.0-nightly released with core fetch utility fixes; community active with 13+ comment issues and 20+ PRs merged/updated, focusing on agent reliability, Auto Memory security, and non-interactive mode stability.
   - Summary in 2-3 sentences.

   **版本发布**: 
   - Since there are releases, I'll summarize the nightly and preview. Or I can group them. The prompt says "如有新版本，总结更新内容；无则省略". There are new nightly/preview releases, so I'll summarize.

   **社区热点 Issues**: Pick 10. I'll select based on comment count, priority, and relevance. I'll make sure they're open and representative.

   **重要 PR 进展**: Pick 10. I'll select those that fix real issues or add meaningful features.

   **功能需求趋势**: Extract from all issues. I'll list 5-6 key directions.

   **开发者关注点**: Summarize pain points.

   I need to make sure links are correct from the data. The data provides links like `google-gemini/gemini-cli Issue #22323`. I'll format them properly. GitHub full URL would be `https://github.com/google-gemini/gemini-cli/issues/22323`. I'll use that.

   Let's verify a few links from the data pattern: 
   - Issue #22323 link: `https://github.com/google-gemini/gemini-cli/issues/22323`
   - PR #29165: `https://github.com/google-gemini/gemini-cli/pull/29165`

   I'll construct all links consistently.

   Now, select 10 issues:
   1. #22323 - Subagent recovery after MAX_TURNS (13 comments, p1) - critical for agent reliability
   2. #21409 - Generalist agent hangs (8 comments, p1) - major UX blocker
   3. #21968 - Doesn't use skills/sub-agents enough (6 comments) - design gap
   4. #26525 - Deterministic redaction & reduce Auto Memory logging (5 comments) - privacy/security
   5. #24246 - 400 error with >128 tools (3 comments) - scalability limit
   6. #22267 - Browser agent ignores settings.json overrides (3 comments) - config reliability
   7. #21983 - Browser subagent fails in Wayland (3 comments) - platform compatibility
   8. #22745 - EPIC: AST-aware file reads, search, mapping (7 comments) - future tooling direction
   9. #22598 - Subagent trajectory visible via /chat share (2 comments) - observability
   10. #22746 - Investigate using AST aware CLI tools to map codebase (2 comments) - codebase mapping

   Wait, #22745 has 7 comments, #22746 has 2. I'll maybe swap #22598 with something higher comment, but #22598 is about feature request. I'll keep based on relevance. Actually, I can pick #27957 or others but they're closed. I'll stick with open ones. Let's check #26523/26522 - Auto Memory issues. I'll maybe pick #26525 as representative. I'll include #26523 or #26522 if needed, but 10 is enough.

   Let's re-evaluate: I want a mix of bug, feature, security, scalability. 
   1. #22323 (bug, agent reliability)
   2. #21409 (bug, hangs)
   3. #21968 (feature/design, sub-agent usage)
   4. #26525 (security, Auto Memory)
   5. #24246 (bug, tool limits)
   6. #22267 (bug, config overrides)
   7. #21983 (bug, Wayland)
   8. #22745 (EPIC, AST-aware tools)
   9. #22598 (feature, trajectory visibility)
   10. #22746 (feature, codebase mapping)

   That's good.

   Now 10 important PRs:
   1. #29165 - Nightly version bump
   2. #28863 - Fix extensions consent & env var sanitization
   3. #28889 - Restore paused stdin after capability detection
   4. #28888 - Fix a2a launcher workspace outside home
   5. #28893 - Preserve explicit flash model IDs
   6. #28895 - Recognize mixed function-call turns
   7. #28897 - Respect plan-routing model availability
   8. #29063 - Stop Plan Mode waiting on user feedback in non-interactive
   9. #29087 - Prevent concurrent extension install races
   10. #28948 - Add evaluation suite harness and e2e benchmark runner

   These cover security, model handling, non-interactive mode, extension safety, and PR generation pipeline.

   Functional trends from all issues:
   - Agent coordination & sub-agent reliability (MAX_TURNS, hanging, skill usage)
   - Browser/Platform compatibility (Wayland, config overrides)
   - Auto Memory privacy, security, and validity
   - CLI tool scalability (tool count limits, 400 errors)
   - Non-interactive/Plan mode stability
   - Security & OAuth client migrations
   - AST-aware codebase tools & mapping
   - Observability & trajectory tracking
   - IDE/CLI companion integration & consent handling

   Developer pain points:
   - Agent infinite loops/hangs, especially in non-interactive mode
   - Sub-agent context loss and inconsistent turn handling
   - Browser failures on non-Windows platforms (Wayland)
   - Auto Memory privacy leaks and invalid patch handling
   - CLI crashing or hanging with many tools (>128)
   - Configuration overrides (especially in settings.json) ignored
   - Security/OAuth client deprecation causing hard exits
   - Lack of observability into sub-agent trajectories

   I'll now draft the Chinese report, ensuring conciseness, professional tone, and each item has a GitHub link. I'll make sure the links are correct: `https://github.com/google-gemini/gemini-cli/issues/XXX` and `https://github.com/google-gemini/gemini-cli/pull/XXX`.

   Check the release section: v0.59.0-nightly.20260902.g4963a4456 was released today (2026-09-02). v0.59.0-preview.0 and v0.58.0 also mentioned. I'll summarize the nightly and preview.

   Draft structure:

   **今日速览**

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here's a thinking process:

1.  **Analyze the Request:**
   - **Role:** Technical analyst focused on AI development tools
   - **Task:** Generate a GitHub Copilot CLI community dynamics report for 2026-09-02
   - **Data Source:** github.com/github/copilot-cli
   - **Report Structure Required:**
     - Today's Overview (2-3 sentences)
     - Version Release (if new, summarize; if not, omit)
     - Community Hot Issues (10 selected, explain importance & community reaction)
     - Important PR Progress (10 selected, explain functionality/fixes)
     - Feature Demand Trends (extract from all issues)
     - Developer Concerns (summarize pain points/high-frequency needs)
   - **Language:** Concise professional, suitable for tech developers
   - **Each item must have GitHub links**

2.  **Analyze the Provided Data:**
   - **Latest Releases (past 24h):** v1.0.83-1. Changes: Added sorting to split Sessions sidebar, save selected order across restarts; Enterprise admins can pin sign-in to approved GitHub organizations with forceLoginOrgs managed setting. Improved: /mcp config and MCP add/edit.
   - **Latest Issues (past 24h, 36 total, showing top 30 by comments):** Listed with authors, dates, comment counts, likes, links, summaries.
   - **Latest PRs (past 24h):** 0 updates, "No data"
   - **Date:** Report is for 2026-09-02

3.  **Map Data to Report Sections:**

   - **Today's Overview (2-3 sentences):** Need to summarize the key highlight from the past 24h. The release v1.0.83-1 is the main positive news. Also notable issues like crashes, MCP problems, etc. I'll craft a concise overview.

   - **Version Release:** v1.0.83-1 is explicitly listed. I'll summarize its changes: sidebar sorting, saved preferences, enterprise sign-in pinning, MCP config improvements.

   - **Community Hot Issues (10 picks):** From the 30 shown (and some others not shown but in the 36 total), I need to pick 10 that are most worth focusing on. I'll look at comment counts, relevance, and community impact. 
     - #13: Vim/Vi input mode - 9 comments, 75 likes. High community interest.
     - #4664: JavaScript heap out of memory on long session resume - 5 comments, 0 likes. Critical performance/bug.
     - #4525: Legacy initialize after modern server/discover - 4 comments, 0 likes. MCP compatibility.
     - #3688: Repository-level custom agents resolved relative to git root vs cwd - 3 comments, 3 likes. Important for agents/config.
     - #3421: Azure DevOps MCP "Dangerous Request.Path" - 3 comments, 0 likes. Enterprise integration.
     - #4438: disable-model-invocation: true makes skill unreachable - 3 comments, 6 likes. Skill discovery issue.
     - #4681: MCP OAuth initialize omits User-Agent - 2 comments, 0 headers. OAuth/transport issue.
     - #4680: Wrong model ID to custom OpenAI endpoint - 2 comments, 0 likes. Model config bug.
     - #4203: Expired access token forces interactive re-auth instead of silent refresh - 1 comment, 0 likes. Auth flow.
     - #4686: Node.js OOM crash after ~37 min - 1 comment, 0 likes. Critical stability.
     I need exactly 10. I'll select the most impactful/interesting ones, ensuring variety (bugs, features, compatibility). I'll check comment counts and relevance. I'll also include some with 0 likes but high comment counts or vice versa. The prompt says "chosen 10 most worth paying attention to, explain why important, community reaction". I'll pick based on a mix of comment count, like count, and issue relevance.

     Let's list the 30 shown with key metrics:
     1. #13: 9 comments, 75 👍
     2. #4664: 5 comments, 0 👍
     3. #4525: 4 comments, 0 👍
     4. #3688: 3 comments, 3 👍
     5. #3421: 3 comments, 0 👍
     6. #4438: 3 comments, 6 👍
     7. #4681: 2 comments, 0 👍
     8. #4680: 2 comments, 0 👍
     9. #4414: 2 comments, 2 👍 (but closed)
     10. #4672: 2 comments, 1 👍
     11. #4203: 1 comment, 0 👍
     12. #4686: 1 comment, 0 👍
     13. #3971: 1 comment, 0 👍
     14. #4683: 1 comment, 0 👍
     15. #4684: 1 comment, 0 👍 (closed)
     16. #4637: 1 comment, 0 👍
     17. #4655: 1 comment, 0 👍
     18. #4113: 1 comment, 3 👍 (closed)
     19. #4633: 0 comments, 0 👍
     20. #4690: 0 comments, 0 👍 (today 2026-09-02)
     21. #4689: 0 comments, 0 👍
     22. #4688: 0 comments, 0 👍
     23. #4687: 0 comments, 0 👍
     24. #4685: 0 comments, 0 👍
     25. #4682: 0 comments, 0 👍
     26. #4413: 0 comments, 0 👍 (closed)
     27. #4645: 0 comments, 0 👍 (closed)
     28. #4679: 0 comments, 0 👍
     29. #4678: 0 comments, 0 👍
     30. #4677: 0 comments, 0 👍

     I'll pick 10 that represent major themes: stability, MCP, auth, models, agents, UX. I'll include #13 (high engagement), #4664 (critical crash), #4525 (MCP incompatibility), #3688 (agent discovery), #4438 (skill invocation), #4681 (OAuth User-Agent), #4680 (model ID), #4203 (auth refresh), #4686 (OOM), and maybe #3421 (Azure DevOps) or #3971 (session browser). I'll aim for 10 diverse, high-impact ones.

     Let's finalize the 10:
     1. #13 - Vim mode (high likes/comments, UX feature)
     2. #4664 - Heap OOM on session resume (critical stability)
     3. #4525 - Legacy initialize after modern discover (MCP compat)
     4. #3688 - Agent resolution dir conflict (agents/config)
     5. #4438 - disable-model-invocation skill unreachable (skills)
     6. #4681 - MCP OAuth missing User-Agent (auth/transport)
     7. #4680 - Wrong model ID to custom endpoint (model config)
     8. #4203 - Expired token forces re-auth (auth flow)
     9. #4686 - Node.js OOM after 37 min (stability)
     10. #3421 - Azure DevOps MCP "Request.Path" error (enterprise integration)

     That's 10. I'll write concise summaries for each, explaining importance and community reaction (based on comments/likes).

   - **Important PR Progress:** The data says "Latest Pull Requests (past 24h updates) (total 0) No data". So this section should be omitted or stated as "No new PRs in the past 24 hours". The prompt says "like if new version, summarize; if not, omit". For PRs, it says "挑选 10 个重要的 PR，说明功能或修复内容". But there are 0. I'll note that no new PRs were merged/updated in the past 24h, and maybe mention the release v1.0.83-1 changes as the PR context, or just state "No new PRs". I'll follow the structure: if no PRs, I'll state "No new Pull Requests merged in the past 24 hours" and perhaps link to the release. But the prompt says "Important PR Progress - Choose 10 important PRs, explain functionality or fix content". Since there are 0, I'll output a note that no new PRs were updated, but I can reference the release's underlying changes if they came from PRs, but I don't have PR numbers. I'll just say "No new PRs in the past 24h" and move on, or include a placeholder. I'll read carefully: "4. 重要 PR 进展 - 挑选 10 个重要的 PR，说明功能或修复内容". It's part of the required sections. I'll handle it by stating "无新的 Pull Request 在过去24小时内更新" and perhaps mention that the release v1.0.83-1 likely includes merged PRs, but without specific PR data, I'll keep it brief. Actually, I can check if the release notes imply PRs, but I don't have PR IDs. I'll just state "过去24小时内无新 Pull Request 合并/更新" and maybe note the release version as the main deliverable. To be safe, I'll output a short sentence and ensure the section is present but acknowledges zero activity.

   - **Feature Demand Trends:** Extract from all Issues. Themes: 
     - Vim/Vi input mode (UX/keyboard navigation) - from #13
     - Session stability/performance - heap OOM, OOM crashes (from #4664, #4686)
     - MCP compatibility & OAuth - legacy vs modern, User-Agent, Azure DevOps (from #4525, #4681, #3421)
     - Agent/custom skill discovery & invocation - relative paths, disable-model-invocation, skill reachability (from #3688, #4438, #4655)
     - Model configuration for BYOK/custom endpoints - wrong model IDs, environment variable handling (from #4680, #4414, #4672)
     - Authentication flow - interactive vs silent refresh, expired tokens (from #4203, #4414)
     - Sandbox/constraint mode issues - PowerShell ConstrainedLanguage, shell execution blocking (from #4683, #4678)
     - File/viewing limits - false positives on file size (from #4633)
     - General stability - concurrency, subagent load, compact preservation (from #4688, #4687)
     I'll synthesize these into a concise trends section.

   - **Developer Concerns:** Summarize pain points/high-frequency needs from feedback. Based on issues: 
     - Stability: Memory leaks, OOM crashes, long session hangs
     - Authentication: Token expiration forcing re-auth, OAuth header issues, 403 errors
     - MCP Integration: Compatibility between legacy/modern, Azure DevOps, custom endpoints
     - Agent/Plugin Discovery: Skill resolution paths, relative vs git root, invocation flags
     - UX: Vim mode request, constrained language mode errors, file size warnings
     - Model Configuration: BYOK model ID mismatches, environment variable handling
     I'll summarize these professionally.

4.  **Draft the Report (in Chinese, concise, professional, with GitHub links):**

   Structure:
   1. 今日速览
   2. 版本发布
   3. 社区热点 Issues (10 items, each with link, importance, reaction)
   4. 重要 PR 进展 (note: none in past 24h)
   5. 功能需求趋势
   6. 开发者关注点

   I need to ensure each item has a GitHub link. The data already has links. I'll format them properly.

   Let's write each section carefully.

   **Today's Overview:** 
   GitHub Copilot CLI 发布 v1.0.83-1，新增分栏会话排序与企业签名组织托管功能；与此同时，社区持续涌现大量 session 稳定性、MCP 兼容性及模型配置类 Issue，显示开发者对长会话性能与跨平台集成的高度关注。

   **Version Release:** 
   - 版本: v1.0.83-1
   - 新增: Split Sessions 侧边栏按 Recent/Created/Name/经典 None 排序，并保存选项 Across restarts; Enterprise admins can pin sign-in to approved GitHub organizations via forceLoginOrgs managed setting
   - 优化: /mcp config 与 MCP add/edit 流程

   **Community Hot Issues (10 picks):**
   I'll list them with brief why important + community reaction (comment/like counts from data). I'll format as bullet points with bold title, link, summary.

   Let's verify the link format: `github/copilot-cli Issue #13` etc. I'll use the exact format or construct standard GitHub links: `https://github.com/github/copilot-cli/issues/13`. The data shows links like `github/copilot-cli Issue #13`, I'll use the full URL or the shorthand. The prompt says "每个条目附上 GitHub 链接". I'll provide Markdown links: `[#13](https://github.com/github/copilot-cli/issues/13)`.

   I'll pick 10 and write 1-2 sentences each.

   Let's finalize the 10 issues with their data:
   1. **#13** [CLOSED] Vim/Vi input mode - 9 comments, 75 likes. High community interest, requested keyboard-driven navigation for modal editor users.
   2. **#4664** [OPEN] JavaScript heap out of memory on long session resume - 5 comments. Critical stability bug, session crashes loading large old sessions.
   3. **#4525** [OPEN] Legacy `initialize` after modern `server/discover` causes -32022 - 4 comments. MCP SDK compatibility issue, breaks Python 2.0.0 dual-era runner.
   4. **#3688** [OPEN] Repository-level custom agents resolved relative to git root, but skills/.mcp.json relative to cwd - 3 comments, 3 likes. Inconsistent base directories break agent discovery.
   5. **#4438** [OPEN] `disable-model-invocation: true` makes skill unreachable - 3 comments, 6 likes. Skill marked non-invocable still exposed, causing "Skill not found" on explicit call.
   6. **#4681** [OPEN] MCP OAuth initialize omits User-Agent header - 2 comments. Missing header breaks OAuth auth on remote MCP servers.
   7. **#4680** [OPEN] CLI sends wrong model ID to custom OpenAI-compatible endpoint - 2 comments. Config model name overridden, session killed.
   8. **#4203** [OPEN] Expired access token forces interactive re-auth instead of silent refresh_token grant - 1 comment. Valid refresh token ignored, tools dropped at session start.
   9. **#4686** [OPEN] Node.js OOM crash after ~37 min — 31,965 leaked async libuv handles - 1 comment. Critical memory leak, crashes on Linux EC2 after 37 min uptime.
   10. **#3421** [OPEN] Azure DevOps MCP Server connected but CLI commands fail with "Dangerous Request.Path" - 3 comments. Enterprise integration blocker, works in VS Code but not CLI.

   That's 10. I'll check if any duplicates or better choices. I think it's good.

   **Important PR Progress:** 
   过去24小时内，GitHub Copilot CLI 无新的 Pull Request 合并或更新。本次发布 v1.0.83-1 的变更可能源于之前的合并PR，具体请参考 Release Notes。

   **Feature Demand Trends:** 
   From the 36 issues in the past 24h, community focus areas include:
   - **Session & Performance Stability:** Heap OOM crashes (#4664, #4686), long session resume failures, memory leak concerns. Indicates urgent need for memory management and session lifecycle optimization.
   - **MCP & Server Compatibility:** Legacy/modern initialize conflicts (#4525), OAuth User-Agent omissions (#4681), Azure DevOps "Request.Path" errors (#34

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**: 2026-09-02  
**数据来源**: github.com/MoonshotAI/kimi-cli  
**分析师**: AI 开发工具技术分析师

---

## 1. 今日速览

Kimi Code CLI 于 2026-09-01 正式发布 **v1.50.0** 版本，重点引入了 Shell 命令废弃警告与一键迁移至 Kimi Code 的功能，标志着产品线战略转型。社区层面，两个长期待处理的并发任务处理问题（#1287、#1292）已关闭，另有 4 个 Pull Request 处于活跃更新状态，其中文档完善和插件安全规范成为近期关注焦点。

---

## 2. 版本发布

### 🔖 v1.50.0 发布

**发布时间**: 2026-09-01  
**变更类型**: 功能更新 + Bug 修复 + 依赖升级  
**PR 链接**: [MoonshotAI/kimi-cli PR #2632](https://github.com/MoonshotAI/kimi-cli/pull/2632)

#### 核心变更

| 变更类型 | 描述 | 关联 PR |
|---------|------|---------|
| 🐛 Bug 修复 | 修复 kosong 组件在无 beta 功能声明时仍发送空 `anthropic-beta` header 的问题 | [#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580) |
| ⬆️ 依赖升级 | kosong 组件升级至 0.56.0 | [#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581) |
| ✨ 新功能 | Shell 命令废弃警告流程，支持一键迁移至 Kimi Code | [#2630](https://github.com/MoonshotAI/kimi-cli/pull/2630) |
| 📦 发布管理 | 同步 `packages/kimi-code` wrapper 版本并锁定 `kimi-cli==1.50.0` 依赖 | [#2632](https://github.com/MoonshotAI/kimi-cli/pull/2632) |

#### 技术解读

本次更新最值得关注的特性是 **deprecation-aware update flow**。当 CDN 发布废弃/迁移通知时，CLI 将自动识别当前 Python 版本已废弃，并通过引导流程帮助用户平滑过渡到 Kimi Code 产品线。这是团队推动产品品牌升级的关键基础设施更新。

---

## 3. 社区热点 Issues

> 以下挑选过去 24 小时内有更新的 Issues，按重要性排序：

### 🔥 Issue #1287 - 并发任务提示词输入限制

| 属性 | 值 |
|-----|-----|
| **状态** | ✅ CLOSED |
| **类型** | Enhancement（功能需求） |
| **作者** | XiaoPengYouCode |
| **创建时间** | 2026-02-28 |
| **更新时间** | 2026-09-01 |
| **评论数** | 1 |
| **链接** | [Issue #1287](https://github.com/MoonshotAI/kimi-cli/issues/1287) |

**问题摘要**：
当前用户执行某个任务时，无法同时为下一个任务编写提示词。后续任务的输入框被锁定，必须等待当前任务完成才能输入。

**为什么重要**：
- 严重影响多任务并行处理效率
- 是高级用户工作流的刚性需求
- 解决后将显著提升产品竞争力（对标 Cursor、Claude Code 等竞品）

**社区反应**：⭐⭐⭐⭐⭐（期待度高，但反馈数据有限）

---

### 🔥 Issue #1292 - Task 子任务调用卡死问题

| 属性 | 值 |
|-----|-----|
| **状态** | ✅ CLOSED |
| **类型** | Bug（严重） |
| **作者** | Wolido |
| **创建时间** | 2026-03-01 |
| **更新时间** | 2026-09-01 |
| **评论数** | 0 |
| **链接** | [Issue #1292](https://github.com/MoonshotAI/kimi-cli/issues/1292) |

**问题摘要**：
在调用 Task 子任务时，多个子任务中的某一个会出现卡住的情况（macOS Darwin 25.3.0 环境）。

**环境信息**：
- CLI 版本: kimi v1.16.0
- 平台: Darwin 25.3.0 arm64

**为什么重要**：
- 阻塞用户核心工作流
- 特定平台（macOS）相关，可能影响大量用户
- 长期未解决（历时 6 个月）

---

## 4. 重要 PR 进展

> 按更新时间和影响力排序：

### 📌 PR #2630 - Shell 废弃感知更新流程

| 属性 | 值 |
|-----|-----|
| **状态** | ✅ CLOSED |
| **类型** | Feature |
| **作者** | jackfish212 |
| **创建时间** | 2026-08-31 |
| **合并时间** | 2026-09-01 |
| **链接** | [PR #2630](https://github.com/MoonshotAI/kimi-cli/pull/2630) |

**功能说明**：
实现自动检测 CDN 发布的废弃通知（`https://cdn.kimi.com/kimi-code-tips/kimi_cli/migration.json`），当检测到当前版本废弃时，驱动用户完成一键迁移至 Kimi Code。

**技术价值**：
- 支撑产品品牌升级战略
- 保障用户体验连续性
- 降低用户流失风险

---

### 📌 PR #2614 - 插件安全与持久化文档

| 属性 | 值 |
|-----|-----|
| **状态** | 🔄 OPEN |
| **类型** | Documentation |
| **作者** | QIANLING-0831 |
| **创建时间** | 2026-08-20 |
| **链接** | [PR #2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) |

**范围说明**：
- 文档仅描述 `MoonshotAI/kimi-cli` 的插件契约
- 涵盖根级 `plugin.json`、命令式工具、`inject` 机制
- 明确 `~/.kimi/plugins/` 安装路径规范
- **不涉及**插件实现的变更

**为什么值得关注**：
- 插件系统是生态扩展的关键基础设施
- 文档完善度直接影响开发者入驻意愿
- 安全规范的明确对企业用户尤为重要

---

### 📌 PR #742 - 添加 Skills 列表功能

| 属性 | 值 |
|-----|-----|
| **状态** | ✅ CLOSED |
| **类型** | Enhancement |
| **作者** | ZacharyZhang-NY |
| **创建时间** | 2026-01-28 |
| **合并时间** | 2026-09-01 |
| **链接** | [PR #742](https://github.com/MoonshotAI/kimi-cli/pull/742) |

**功能说明**：
模仿 Codex 的 `$ list skills` 命令，提供 Skills 列表查询能力。

**为什么值得关注**：
- 对标竞品功能，提升开发者体验
- 简化新用户上手流程
- 促进 Skill 生态可见性

---

### 📌 PR #2632 - 版本发布管理

| 属性 | 值 |
|-----|-----|
| **状态** | ✅ CLOSED |
| **类型** | Chore |
| **作者** | sailist |
| **创建时间** | 2026-09-01 |
| **链接** | [PR #2632](https://github.com/MoonshotAI/kimi-cli/pull/2632) |

**工作内容**：
- 升级 kimi-cli 至 1.50.0
- 移动当前 release notes 至 1.50.0 版本下
- 同步 `packages/kimi-code` wrapper 版本
- 锁定 `kimi-cli==1.50.0` 依赖

---

## 5. 功能需求趋势

基于过去 24 小时活跃的 Issues 和 PR，以及历史数据特征，可提炼以下趋势：

### 📊 社区关注度排行

| 排名 | 功能方向 | 热度 | 典型 Issue/PR |
|-----|---------|-----|--------------|
| 🥇 | **多任务并发处理** | ⭐⭐⭐⭐⭐ | #1287 |
| 🥈 | **性能稳定性** | ⭐⭐⭐⭐ | #1292 |
| 🥉 | **开发者工具链** | ⭐⭐⭐⭐ | #742 (Skills) |
| 4 | **插件生态规范** | ⭐⭐⭐ | #2614 (文档) |
| 5 | **产品迁移体验** | ⭐⭐⭐ | #2630 (一键迁移) |

### 🔍 趋势分析

1. **并发/多任务能力成为核心诉求**
   - 用户期望在执行长任务时仍能操作界面
   - 这是 Claude Code、Cursor 等竞品的标配功能
   - 社区已明确表达需求（Issue #1287），预计将成为下一个重点迭代方向

2. **插件系统走向成熟**
   - 文档完善（PR #2614）表明团队开始重视插件生态治理
   - 安全规范、持久化机制的明确有助于吸引第三方开发者

3. **品牌升级平滑过渡**
   - kimi-cli → Kimi Code 的迁移基础设施已落地
   - 预计后续将推动更多用户切换至新产品线

---

## 6. 开发者关注点

### 🎯 痛点与高频需求

| 痛点类型 | 具体描述 | 优先级 |
|---------|---------|-------|
| **任务阻塞** | 执行任务时无法同时准备下一个任务的提示词，严重影响效率 | 🔴 高 |
| **子任务稳定性** | Task 调用在特定场景下会卡死，必须重启 CLI | 🔴 高 |
| **技能可见性** | 缺乏 Skills 列表命令，不便于探索可用能力 | 🟡 中 |
| **插件开发规范** | 安全边界、持久化机制未明确，制约生态发展 | 🟡 中 |

### 💡 开发者建议

1. **优先解决并发任务问题** - 这是影响核心用户体验的关键阻塞，建议尽快规划实现路径
2. **加强子任务异常处理** - 增加超时机制和优雅降级策略，避免完全卡死
3. **完善插件开发文档** - 建议在安全规范明确后，更新开发者入门指南
4. **关注 macOS 兼容** - Issue #1292 显示特定平台问题，建议建立多平台 CI 覆盖

---

## 📋 附录

### 快速链接

- **官方文档**: https://github.com/MoonshotAI/kimi-cli#readme
- **Release Notes**: https://github.com/MoonshotAI/kimi-cli/releases
- **Issue Tracker**: https://github.com/MoonshotAI/kimi-cli/issues
- **PR List**: https://github.com/MoonshotAI/kimi-cli/pulls

### 统计摘要（过去 24 小时）

| 指标 | 数值 |
|-----|------|
| 新 Releases | 1 (v1.50.0) |
| 更新 Issues | 2 |
| 更新 PRs | 4 |
| 合并 PRs | 3 |

---

> **免责声明**: 本报告基于 GitHub 公开数据生成，分析观点仅供参考。数据截取时间点为 2026-09-02，请以官方仓库最新动态为准。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期**: 2026-09-02
**数据来源**: github.com/QwenLM/qwen-code

---

## 1. 今日速览

今天 Qwen Code 社区继续保持活跃，共新增 50 个 Issues 和 50 个 Pull Requests。**UI/终端体验**成为焦点——TUI 从 ink 迁移到 OpenTUI 的追踪 Issue 获得 16 条评论，同时多个 P1/P2 级 bug 正在修复中。**cua-driver-rs v0.20.3** 正式发布，为三大平台提供预编译二进制。新增 `/btw` 侧问功能、workspace 作用域 MCP 管理等重要功能 PR，review 系统也迎来多项增强。

---

## 2. 版本发布

### 🆕 cua-driver-rs v0.20.3

| 平台 | 特性 |
|------|------|
| **macOS** | 代码签名 + 公证的通用二进制 + `QwenCuaDriver.app` |
| **Linux** | 无签名版（x86_64 + arm64，glibc 2.31 最低要求） |
| **Windows** | 无签名 UIAccess worker + 原生 SDK（x86_64 + arm64） |

> 📦 预编译二进制托管于 `packages/cua-driver` 目录

---

## 3. 社区热点 Issues

### 🔥 #8662 **[P3] TUI 渲染层从 ink 迁移到 OpenTUI（追踪）**
- **重要性**: 当前 TUI 基于 ink 7 + React 19，存在闪烁、渲染抖动、结构性问题难以修复
- **社区反应**: 16 条评论，开发者正在讨论迁移计划和 OpenTUI 集成方案
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/8662)

### 🐛 #10520 **[P2] toolSearch threshold > 0 导致 llama.cpp 400 错误**
- **问题**: 使用本地 llama.cpp 服务器时，设置 `tools.toolSearch.threshold` 为 10 会导致所有请求失败
- **临时方案**: threshold 设为 0 可正常工作
- **社区反应**: 7 条评论，多位用户确认问题
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/10520)

### 🐛 #10530 **[P2] 0.22.3 版本 400 Failed to initialize samplers 错误**
- **问题**: Qwen 3.8 27b 或 Qwen 3.6 35b 在 llama-server 上出现 grammar 解析失败
- **影响范围**: gemma4-12b 正常，Pi 和 OpenCode 无此问题
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/10530)

### ⚠️ #10218 **[P2] permissions.allow 语义变更：0.22.1 起未覆盖工具直接禁用**
- **问题**: 从 0.22.1 开始，`permissions.allow` 变为"注册表白名单"，未覆盖的工具直接禁用而非询问
- **影响**: 文档未说明此变更，升级后行为不符合预期
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/10218)

### 🔧 #10162 **[P2] ACP NDJSON 通道队列饱和时的优雅降级**
- **问题**: 当前队列满时直接终止整个通道，应改为优雅降级
- **社区反应**: 5 条评论，涉及 daemon 稳定性
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/10162)

### ✨ #2339 **[Feature] Telegram Bot Mode (--telegram flag)**
- **需求**: 添加 `--telegram` 标志，使 qwen-code 可作为 Telegram 机器人运行
- **社区反应**: 4 条评论，3 个 👍，用户对此远程交互方式感兴趣
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/2339)

### 🛡️ #10583 **[P2] 为 Linux 添加轻量级 Bubblewrap 沙箱后端**
- **需求**: 在 Docker/Podman 之外，提供基于 `bwrap` 的轻量级 OS 级隔离方案
- **适用场景**: 本地工具执行需要强隔离但不需要完整容器
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/10583)

### 🐛 #10400 **[P1] tools.eager 入口名为 Object.prototype 键时崩溃 PermissionManager**
- **问题**: 使用 `__proto__`、`constructor` 等作为 eager 工具名会触发初始化崩溃
- **严重性**: P1 级别，影响核心功能
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/10400)

### 📱 #10749 **[P2] TUI 滚动行为异常**
- **问题**: 滚动会话历史时，内容被加载到输入框而非滚动对话
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/10749)

### 🔒 #10698 **[P3] Node 20 构建失败：ESM 错误**
- **问题**: 升级到 Node 20 后构建失败，报 `ERR_REQUIRE_ESM` 错误
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/issues/10698)

---

## 4. 重要 PR 进展

### 🔍 #10713 **feat(channels): 为 Channel 对话添加 BTW 侧问功能**
- **内容**: 将 `/btw` 侧问能力扩展到 Channel 对话，用户可在不打断主任务的情况下提问
- **状态**: OPEN，2026-09-01 更新
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/10713)

### 🏗️ #10679 **feat(serve): 添加 workspace 作用域 MCP 管理**
- **内容**: 在共享 workspace 运行时基础上，增加 workspace 级别的 MCP 配置和运行时管理
- **特性**: 配置持久化、运行时重载/重连/审批/认证路由到选定的工作空间
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/10679)

### 🤖 #10136 **feat(review): 关键姿态下切换为 fix-audit 形状**
- **内容**: 多轮 review 可预测进入"仅关键"姿态时，使用缩小的 fix-audit 形状而非完整形状
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/10136)

### 🔧 #10347 **feat(core): 在 Ctrl+Y 不可用时自动重试瞬态网络错误**
- **内容**: 将包装的低级网络失败（如 `EOF`）分类为可重试的传输错误
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/10347)

### 🔒 #6606 **fix(core): 从 shell 子进程环境清理内部守护进程密钥**
- **内容**: 清理 shell 子进程环境中的内部 daemon 密钥，提升安全性
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/6606)

### ⚡ #10756 **ci: 将 lint 和静态检查从 Test 作业中拆分出来**
- **内容**: 将 20 个确定性 lint/static 步骤移至独立的 `lint_and_static` 作业
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/10756)

### 🔧 #10455 **fix(cli): 输出语言文件不可写时不崩溃启动**
- **内容**: 修复读取目录或文件只读时，CLI 启动时抛出未捕获异常的问题
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/10455)

### 📊 #10611 **feat(web-shell): 分组计划任务运行会话**
- **内容**: 自动将同一计划任务的重复运行会话分组显示，使用任务标题作为标签
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/10611)

### 🎯 #10752 **fix(core): 验证 git pull 选项组合和 detached HEAD**
- **内容**: 对脏工作树的 git 更新进行后验，确保选项组合有效、检测 detached HEAD
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/10752)

### 📦 #9402 **feat: Agent Board — 跨独立启动的 agent 共享工作**
- **内容**: 实现便携式 Board 层，支持跨 agent 的工作共享
- [🔗 查看详情](https://github.com/QwenLM/qwen-code/pull/9402)

---

## 5. 功能需求趋势

通过分析今日 Issues，社区关注的功能方向如下：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **终端/TUI 体验** | #8662 (OpenTUI 迁移), #10749 (滚动修复), #10718 (Ctrl+C 警告溢出) | 🔥🔥🔥 |
| **安全/沙箱** | #10583 (Bubblewrap), #6606 (守护进程密钥清理) | 🔥🔥 |
| **消息平台集成** | #2339 (Telegram Bot), #10457 (钉钉原生卡片) | 🔥🔥 |
| **Web Shell 增强** | #10750 (会话级轮次导航), #10717 (结构化任务标题) | 🔥🔥 |
| **本地模型支持** | #10520, #10530 (llama.cpp 兼容性) | 🔥🔥 |
| **MCP 生态** | #10679 (workspace 作用域 MCP) | 🔥 |
| **Agent 协作** | #9402 (Agent Board) | 🔥 |

---

## 6. 开发者关注点

### 🔴 高优先级痛点

1. **llama.cpp 兼容性问题**
   - `toolSearch.threshold` 和 grammar 解析在多个版本中存在问题
   - 影响使用本地模型的开发者

2. **permissions.allow 语义变更**
   - 0.22.1 的breaking change 导致用户工具被静默禁用
   - 需要更新文档和迁移指南

3. **TUI 渲染稳定性**
   - ink 7 的结构性限制导致闪烁、滚动异常等问题
   - OpenTUI 迁移是长期解决方案

4. **CI 性能瓶颈**
   - Quality Checks 作业耗时约 44 分钟，拖累发布流程
   - 正在拆分 lint 作业优化

### 🟡 高频需求

- **多平台集成**: Telegram Bot、钉钉等消息平台
- **沙箱安全**: 轻量级 Linux 隔离方案
- **Web Shell 会话管理**: 轮次导航、计划任务分组
- **Review 系统增强**: fix-audit、prose-execution 审计

---

> **报告说明**: 本日报基于 GitHub 数据自动生成，数据截取时间 2026-09-02。如需更详细的技术分析或特定领域深度解读，请告知。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：** 2026-09-02  
**数据来源：** github.com/Hmbown/DeepSeek-TUI

---

## 1. 今日速览

截至 2026-09-02，DeepSeek TUI 社区在过去 24 小时内保持高度活跃，共处理 **29 个 Issues** 和 **48 个 Pull Requests**。今日未发布新版本（Releases 0 条），但多项重要功能 PR 处于开放状态，集中在 **TUI 交互体验重构**、**设置系统规范化** 和 **模型供应商扩展** 三大方向。社区整体向 0.9.12 版本稳步推进。

---

## 2. 版本发布

**本期无新版本发布。** 社区正在紧锣密鼓地进行 0.9.12 版本的开发冲刺，多个核心 PR 已进入 Review 阶段，预计近期将合并发布。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|----------|
| **1** | **[#4956](https://github.com/Hmbown/CodeWhale/issues/4956)** - Provider 网络连接失败（WSL2 环境） | ⚠️ 高 | 4 条评论，用户报告在 WSL2 中重启后无法连接 API Provider，疑似网络配置或环境变量问题 |
| **2** | **[#4568](https://github.com/Hmbown/CodeWhale/issues/4568)** - 斜杠指令响应迟缓 | ⚠️ 高 | 3 条评论，中文用户反馈新版 `/xxx` 指令明显卡顿，怀疑性能优化回退 |
| **3** | **[#4564](https://github.com/Hmbown/CodeWhale/issues/4564)** - Windows 平台参数解析 Bug | 🔧 中 | 4 条评论，`--model` 和 `--toolsets` 参数在 Windows npm 全局安装时被错误合并，建议增加环境变量支持 |
| **4** | **[#3751](https://github.com/Hmbown/CodeWhale/issues/3751)** - Neuralwatt Provider 支持请求 | ✨ 亮点 | 3 条评论，Neuralwatt 提供 GLM 5.2 模型和创新的非 token 计费模式，社区呼声较高 |
| **5** | **[#1330](https://github.com/Hmbown/CodeWhale/issues/1330)** - ZenMux 作为主要供应商集成 | ✨ 亮点 | 3 条评论，用户希望将 ZenMux 的 DeepSeek-V4-Pro/Flash 支持升级为原生集成，而非通过 generic OpenAI provider 曲线支持 |
| **6** | **[#2535](https://github.com/Hmbown/CodeWhale/issues/2535)** - ACP+MCP 工具支持及流式输出 | 🔧 核心 | 2 条评论，飞书 IM 场景用户请求在 ACP 模式下支持 MCP 工具调用，实现完整的 Agent 工作流 |
| **7** | **[#5806](https://github.com/Hmbown/CodeWhale/issues/5806)** - OpenDesign (nexu-io/open-design) 兼容性 | 🚀 新兴 | 0 条评论，OpenDesign 是一个开源的 Claude Design 替代品，支持将 coding-agent CLIs 转为设计引擎，社区开始关注 |
| **8** | **[#4394](https://github.com/Hmbown/CodeWhale/issues/4394)** - 上下文压缩：发布并强制执行结构化生存契约 | 📐 架构 | 4 条评论，提议建立明确的上下文压缩策略规范，确保摘要质量和工具结果剪枝的一致性 |
| **9** | **[#4721](https://github.com/Hmbown/CodeWhale/issues/4721)** - 设置菜单审计：清理遗留/密度/标签问题 | 🔧 体验 | 2 条评论，对 Settings/Config 菜单进行系统性审计，修复误导性标签和冗余项 |
| **10** | **[#5605](https://github.com/Hmbown/CodeWhale/issues/5605)** - 测试稳定性：并行负载下的 flaky test | 🐛 质量 | 3 条评论，远程控制模块在 CI 全量并行测试时偶发失败，需修复竞态条件 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 内容摘要 |
|---|-----|------|----------|
| **1** | **[#5816](https://github.com/Hmbown/CodeWhale/pull/5816)** - 重新实现持久化目标 | 🟢 OPEN | 目标可在主机重启后恢复运行，`PUT /v1/threads/{id}/goal` 现注入缓存引擎并在空闲时自动触发 |
| **2** | **[#5812](https://github.com/Hmbown/CodeWhale/pull/5812)** - 工具输出保留 ANSI 颜色 | 🟢 OPEN | shell 工具输出现保持原始颜色（cargo 构建、git diff 等），提升可读性 |
| **3** | **[#5813](https://github.com/Hmbown/CodeWhale/pull/5813)** - Diff 卡片强调变更单词 | 🟢 OPEN | 替换行内实际变更的单词以粗体+反色高亮，阅读 diff 更高效 |
| **4** | **[#5815](https://github.com/Hmbown/CodeWhale/pull/5815)** - Fleet 定义为用户添加的模型 | 🟢 OPEN | ⇧F 快捷键将模型加入 Fleet 并置顶显示，优化模型切换体验 |
| **5** | **[#5814](https://github.com/Hmbown/CodeWhale/pull/5814)** - /fullscreen 和 /inline 运行时切换 | 🟢 OPEN | 新增全屏/内联模式切换命令，内联模式下 shell 回滚保留会话历史 |
| **6** | **[#5810](https://github.com/Hmbown/CodeWhale/pull/5810)** - 统一设置 Schema | 🟢 OPEN | `/settings` 界面重构为标签页布局，设置项必须有说明文案才显示 |
| **7** | **[#5809](https://github.com/Hmbown/CodeWhale/pull/5809)** - 工作面默认置于 Composer 下方 | 🔴 CLOSED | `/rail on` 可恢复底部轨道布局，提供更沉浸的工作空间 |
| **8** | **[#5784](https://github.com/Hmbown/CodeWhale/pull/5784)** - ChatGPT PKCE 原生登录 | 🔴 CLOSED | 消除对 Codex CLI 的依赖，浏览器 PKCE + localhost 回调实现原生登录 |
| **9** | **[#5805](https://github.com/Hmbown/CodeWhale/pull/5805)** - isZh 国际化单向天花板 | 🔴 CLOSED | 限制 `isZh` 分支文件数量不超过 28 个，防止国际化债务累积 |
| **10** | **[#5743](https://github.com/Hmbown/CodeWhale/pull/5743)** - Web Tideline 文档中心 | 🔴 CLOSED | 新增 Tideline 文档站点，含任务/主题搜索、上下文帮助带和更新日志 |

---

## 5. 功能需求趋势

通过分析本期 Issues，社区关注的功能方向呈现以下特征：

### 📊 功能方向分布

| 方向 | 热度 | 代表 Issues |
|------|------|-------------|
| **模型供应商扩展** | 🔥🔥🔥 | #3751 (Neuralwatt)、#1330 (ZenMux) |
| **跨平台兼容性** | 🔥🔥 | #4956 (WSL2)、#4564 (Windows) |
| **TUI 交互体验** | 🔥🔥🔥 | #5811/#5814 (布局)、#5813 (Diff) |
| **设置系统规范化** | 🔥🔥 | #4721、#5810 |
| **MCP/工具生态** | 🔥🔥 | #2535 (ACP+MCP)、#5806 (OpenDesign) |
| **性能优化** | 🔥 | #4568 (指令延迟) |
| **国际化 (i18n)** | 🔥 | #5519、#5805 |
| **测试稳定性** | 🔥 | #5605、#5735 |

### 💡 趋势解读

1. **供应商多元化**：社区强烈需求 Neuralwatt、ZenMux 等新兴供应商的原生支持，反映用户对非 OpenAI 生态的渴望
2. **TUI 深度打磨**：多个 PR 聚焦界面细节（颜色、布局、交互），0.9.12 定位为"TUI 体验大版本"
3. **工具链扩展**：MCP 支持从实验性功能向生产级功能演进，OpenDesign 集成开启新的可能
4. **跨平台补足**：WSL2/Windows 问题持续存在，需系统性测试覆盖

---

## 6. 开发者关注点

### 🎯 核心痛点

1. **跨平台环境差异**
   - WSL2 网络配置导致 API Provider 连接失败
   - Windows npm 全局安装时命令行参数解析行为不一致
   - **建议**：增加 CI 环境矩阵覆盖，补充跨平台安装指南

2. **性能回退风险**
   - 斜杠指令响应延迟问题引发用户担忧
   - **建议**：建立性能基准测试，定期跑分监控

3. **配置复杂度**
   - 首次运行配置项过多，用户心理负担重（见 #5522）
   - 设置菜单存在遗留标签和冗余项
   - **建议**：参考 #5810 的"无说明不显示"策略，降低上手门槛

### 🔄 高频需求

- **Fleet 模型管理**：快速切换常用模型
- **ACP 模式工具化**：在飞书等 IM 场景中使用 MCP 工具
- **流式输出支持**：exec 模式的实时反馈
- **测试稳定性**：CI 并行负载下的 flaky test 修复

### 📈 社区健康度

| 指标 | 数值 | 评估 |
|------|------|------|
| Issues 处理速度 | 29 条/24h | 🟢 优秀 |
| PR 吞吐量 | 48 条/24h | 🟢 优秀 |
| Open Issues 占比 | ~3% | 🟢 健康 |
| 社区参与度 | 稳定 | 🟢 良好 |

---

> **📌 明日关注**
> - PR #5816 持久化目标功能是否合并
> - #4568 性能问题是否有官方回应
> - 0.9.12 版本发布时间线确认

---

*本报告由 DeepSeek TUI 社区数据自动生成 | 2026-09-02*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*