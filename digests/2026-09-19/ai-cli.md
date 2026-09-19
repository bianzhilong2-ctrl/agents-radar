# AI CLI 工具社区动态日报 2026-09-19

> 生成时间: 2026-09-19 02:18 UTC | 覆盖工具: 9 个

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
   - User wants a horizontal comparison analysis report based on provided AI CLI tool community dynamics for 2026-09-19.
   - Report must include 6 specific sections:
     1. Ecosystem panorama (3-5 sentences)
     2. Activity comparison table (Issues, PRs, Releases per tool)
     3. Common functional directions (which tools, what they want)
     4. Differentiation analysis (function focus, target users, tech routes)
     5. Community热度 & maturity (which active, which fast-iterating)
     6. Trend signals (industry trends, value for developers)
   - Language: concise professional, data-supported, for technical decision-makers & developers.

2.  **Extract Data from All Tool Summaries:**
   Let me go through each tool's summary carefully and extract the relevant metrics and themes.

   **Claude Code (github.com/anthropics/claude-code)**
   - Today's version: v2.1.277 (2026-09-19)
   - Key features: AGENTS.md native support, gateway proxy egress env var
   - Community issues: AGENTS.md standardization, hooks/plugin extensibility, Windows stability
   - Issues/PRs: Not explicitly numbered, but mentions "community Issue heat high", 3 focal points. No specific issue count given, but says "Issue热度居高不下" (issues heat high). No PR count mentioned explicitly, but implies ongoing.
   - Release: v2.1.277 released today.
   - Focus: cross-agent unification, cross-platform robustness.

   **OpenAI Codex**
   - Summary generation failed. So no data. I'll note it as "data unavailable" or skip appropriate sections. But I need to handle it. Probably mention data missing, or infer from context that it's not available. I'll treat it as "no data" and perhaps mark accordingly. But the user wants comparison based on the given texts. I'll note "No community data available in summary".

   **Gemini CLI (github.com/google-gemini/gemini-cli)**
   - Version: v0.62.0-nightly.20260919.gcfbcaa8df
   - Released today
   - Issues highlighted: 
     - #19430 Parallel Agent Teams (44 likes, P2)
     - #21409 Generalist agent hangs (8 likes, P1)
     - #26390 Severe Action-Bias Overriding User Directives (2 likes, P1)
     - #22323 Subagent recovery after MAX_TURNS (unspecified likes, P1)
   - 10+ issues discussed in table, but the summary lists specific rankings with likes/comments. It says "community hotspot Issues (by discussion heat/priority)". I can count the number of issues discussed. The table has 4 rows, but the "社区热点 Issues" section mentions "按讨论热度/优先级排序" and lists 4 ranked issues, plus later says "挑选 10 条" in Copilot section but for Gemini it's a table with rankings. Actually looking: "### 3. 社区热点 Issues（按讨论热度/优先级排序）" then a table with 4 rows. Then it says "| 排名 | Issue | ... |" with 4 entries. But earlier in the prompt it says "社区热点集中在...". I'll count the issues listed in the table: 4 issues. But also mentions other issues like #21409, #26390, #22323. Actually the table has 4 rows, but the text before mentions "社区热点集中在...". I'll assume 4 major issues tracked, but there might be more. The summary says "14 条评论；优先级 P2，Area: agent" for #19430. I'll extract: 4 issues in the table, but community mentions others. For consistency, I'll count the issues explicitly listed in the "社区热点 Issues" table: 4 items. However, the later part "### 4. 重要 PR 进展" says "本日报告期内暂无 PR 更新（过去 24 小时内 PR 数量为 0）". So PR count = 0 today.
   - Release: v0.62.0-nightly... released today.
   - Focus: multi-agent collaboration, agent security/reliability, code navigation/performance.

   **GitHub Copilot CLI (github.com/github/copilot-cli)**
   - Version: v1.0.87-0 released today
   - Issues: 33 issues in past 24h, 0 PRs
   - Table of 10 selected issues: #1632 (closed), #1285 (open), #4870 (open), #1824 (closed), #4765 (open), #1086 (closed), #4839 (open), #4886 (open), #4905 (open), #2892 (closed)
   - So 10 issues highlighted, but total 33 in 24h.
   - PRs: 0 in last 24h.
   - Focus: skill organization, model config, cross-platform compat, plugin/skill integration, session stability, OAuth, UI/UX.

   **Kimi Code CLI (github.com/MoonshotAI/kimi-cli)**
   - No new version today
   - Issues: 13 updated in past 24h, selected 10 highlighted
   - Table of 10 issues: #2652 (new bug, macOS paste image silent fail), #1234 (proxy env var invalid at login), #1680 (VSCode font size adjustment), #1296 (MCP disconnect intermittent), #1291 (invalid markdown format crash), #1339 (@ shows .git/objects), #1459 (Kimi can't self-configure MCP), #1342 (task completion OSC 9/777 notification), #734 (Google GenAI tool param $schema error), #1480 (flow:skill interrupt/select impossible)
   - PRs: 1 important PR: #2176 fix(hooks): extract text from ContentPart for UserPromptSubmit hook
   - Focus: macOS stability, proxy config, IDE integration, MCP stability, input robustness, CJK support, terminal notifications.

   **OpenCode (github.com/anomalyco/opencode)**
   - No formal version release this week
   - Issues: 10 highlighted (from the "社区热点 Issues" list). Actually the list has 10 items #31041 to #49742, but some are closed, some open. The summary says "社区热点 Issues（按影响排序}" and lists 10 items. I'll count 10 issues featured.
   - PRs: 10 important PRs listed (#49882 to #49869, plus others). Actually the "重要 PR 进展" lists 10 PRs. But the summary says "本周暂无正式版本发布". PRs are in progress.
   - Focus: CORS/proxy, i18n, TUI stability, performance, encoding support, state management.

   **Pi (github.com/badlogic/pi-mono)**
   - No new version today
   - Issues: 10 highlighted from the "社区热点 Issues" list. The table shows #6278 to #9718, with comment counts. I'll count 10 issues.
   - PRs: 1 important PR #9763 (compatibility check), plus many others #9762 to #9714. The "重要 PR 进展" lists several, but I'll count the ones explicitly mentioned as "important". Actually the section "### 4. 重要 PR 进展" lists multiple PRs, but I need to count how many are "important" or just list them. The summary says "PR 侧则密集合并了会话管理、TUI 健壮性、CJK 输入支持及 Azure Chat Completions 等实用修复与功能扩展." I'll count the PRs explicitly numbered: #9763, #9762, #9434, #9754, #9746, #9744, #9742, #9720, #9736, #9735? Actually let's count: #9763, #9762, #9434, #9754, #9746, #9744, #9742, #9720, #9736, #9714. That's 10 PRs. But the text says "仅有 1 条重要 PR 更新" for Kimi, but for Pi it's different. I'll just note the PR activity level based on the list. The summary mentions "PR 侧则密集合并了...". I'll assume several PRs merged/active. For consistency, I'll extract the count of highlighted PRs from the list: 10 PRs mentioned, but some might be closed/open. I'll note the PR activity as "multiple PRs merged/fixed".
   - Focus: model directory maintenance, performance/stability, TUI experience, cross-platform compat, session/compression.

   **Qwen Code (github.com/QwenLM/qwen-code)**
   - Preview release: v0.24.1-preview.0 today
   - Issues: Several highlighted: #11872 (P1), #12224 (P1), #11783 (P1), #12206 (P1), #12053 (P2), #12165 (P2), #12216 (P2), #12217 (P2), #12028 (P2), #12226 (P3). So at least 10 issues listed, but the "社区热点 Issues" table has 10 rows. I'll count 10 issues.
   - PRs: 10 important PRs listed: #12225, #12227, #12191, #12115, #12156, #12008, #12119, #11854, #12085, #11859. That's 10 PRs.
   - Focus: Web terminal PTY, CLI regression, TUI stability, LSP non-ASCII, runtime slimming, MCP OAuth, workflow startup, hybrid code mode, web-shell remote, installer glibc.

   **DeepSeek TUI (github.com/Hmbown/DeepSeek-TUI)**
   - No new version today
   - Issues: 10 highlighted from the table: #6011, #6015, #5587, #6184, #6187, #6142, #6310, #6087, #5915, #6086. That's 10 issues.
   - PRs: 10 important PRs listed: #6353, #6354, #6350, #6347, #6348, #6349, #6351, #6352, #5752, #6134. All closed.
   - Focus: provider neutrality, fleet/agent orchestration, MPC reliability, ACP/IDE integration, AST-level editing.

   **OpenAI Codex**: data missing. I'll note "No summary data available".

   Now I need to organize into the 6 sections.

   Let me structure the data extraction clearly:

   **Tools & Metrics:**
   1. Claude Code: Release v2.1.277 today. Issues: high heat, 3 focal points (not numbered count, but "community Issue heat high"). PRs: not explicitly counted, but implies ongoing. I'll say "multiple issues/PRs active" or estimate. Since no specific numbers, I'll note "community activity high, focus on AGENTS.md, hooks, Windows stability". For table, I need Issues count and PR count. I'll have to infer or state "data not fully quantified in summary". But the user wants a table with Issues, PRs, Release. I'll extract what's possible:
      - Claude Code: Release: yes (v2.1.277). Issues: "社区 Issue 热度居高不下" but no number. I'll maybe put "N/A" or "high". PRs: not mentioned, but "community dynamics" implies PRs exist. I'll check the text: no PR count given. I'll put "TBD" or "active". Actually, the summary says "今日发布 v2.1.277，主要引入 AGENTS.md 原生支持与网关出口边界环境变量；与此同时，社区 Issue 热度居高不下，AGENTS.md 标准化、hooks/插件扩展性以及 Windows 平台稳定性成为三大焦点". No PR count. I'll note "Issues: high activity (count not specified), PRs: not specified".
      - OpenAI Codex: No data. I'll put "No data".
      - Gemini CLI: Release: yes (v0.62.0-nightly...). Issues: the table shows 4 ranked issues, but community mentions others; total "33" no, that's Copilot. Gemini says "社区热点 Issues（按讨论热度/优先级排序} table with 4 rows, but later says "挑选 10 条" no that's Copilot. I'll count the explicit issues in the table: 4. But the text before mentions "社区热点集中在...". I'll put "4+ issues highlighted, total community issues higher". PRs: 0 in last 24h.
      - Copilot CLI: Release: yes (v1.0.87-0). Issues: 33 in past 24h. PRs: 0 in last 24h. Highlighted 10.
      - Kimi Code CLI: Release: no new version today. Issues: 13 updated in past 24h, highlighted 10. PRs: 1 important PR.
      - OpenCode: Release: no formal version this week. Issues: 10 highlighted. PRs: 10 important PRs listed (but some may be closed). I'll count PRs as "10 active/merged".
      - Pi: Release: no new version today. Issues: 10 highlighted. PRs: multiple, at least 10 mentioned, several closed.
      - Qwen Code: Release: v0.24.1-preview.0 today. Issues: 10 highlighted. PRs: 10 important PRs listed.
      - DeepSeek TUI: Release: no. Issues: 10 highlighted. PRs: 10 closed PRs listed.

   To make a consistent table, I'll define columns: Tool, Today's Release, Issues (count/status), PRs (count/status). I'll put reasonable numbers based on summaries, noting where data is estimated or highlighted.

   Let me draft the table:

   | Tool | Today's Release | Issues (24h) | PRs (24h) |
   |------|----------------|------------|----------|
   | Claude Code | v2.1.277 (Sep 19) | High activity; focal points: AGENTS.md, hooks, Windows stability (count not specified) | Not specified; community PRs active |
   | OpenAI Codex | No summary data available | No data | No data |
   | Gemini CLI | v0.62.0-nightly.20260919.gcfbcaa8df | 4+ ranked issues highlighted; broader community issues ongoing | 0 (past 24h) |
   | GitHub Copilot CLI | v1.0.87-0 | 33 issues (past 24h); 10 highlighted for skill/org/config stability | 0 (past 24h) |
   | Kimi Code CLI | No new version | 13 updated; 10 highlighted (macOS proxy, MCP, IDE etc.) | 1 important PR (#2176 hook fix) |
   | OpenCode | No formal version this week | 10 highlighted (CORS, i18n, TUI, performance) | 10 important PRs (mixed status) |
   | Pi (badlogic/pi-mono) | No new version today | 10 highlighted (model dir, perf, TUI, cross-platform) | Multiple PRs; at least 9762-9763 active, several closed |
   | Qwen Code | v0.24.1-preview.0 | 10 highlighted (PTY, CLI, LSP, MCP, runtime) | 10 important PRs (mixed status) |
   | DeepSeek TUI | No new version | 10 highlighted (provider neutrality, stability, UX) | 10 closed PRs (feature/fixes) |

   Now section 3: Common functional directions. I need to identify which tools share which focuses.

   From analysis:
   - MCP/skill organization: Claude Code (AGENTS.md, hooks), Copilot CLI (skills, #1632), Kimi Code (MCP stability #1296, #1459), Pi (model directory, #9652 compaction), Qwen Code (MCP OAuth #12165, workspace-discovery #12216), DeepSeek TUI (MPC reliability #6187), OpenCode (maybe not directly).
   - Cross-platform/terminal stability: Claude Code (Windows), Copilot CLI (Win PowerShell, #1086), Kimi Code (

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-09-19 | 来源：github.com/anthropics/skills

---

## 1. 热门 Skills 排行（按 PR 活跃度与关注度）

| # | Skill | 功能概述 | 社区热点 | 状态 |
|---|-------|---------|---------|------|
| 1 | **blast-radius** ([PR #1776](https://github.com/anthropics/skills/pull/1776)) | 批量/破坏性操作前的安全检查清单（归档用户、撤销权限、批量删改等） | 填补"查询对行正确"与"批量操作对世界正确"之间的差距，关注操作安全边界 | 🟢 Open (2026-09-17) |
| 2 | **proofcore-contract-auditor** ([PR #1771](https://github.com/anthropics/skills/pull/1771)) | Solidity/Rust 智能合约静态分析 + 将审计证明锚定到 TON 区块链 | Web3 安全审计 + 零存储 Merkle 协议，链上可验证 | 🟢 Open (2026-09-15) |
| 3 | **md2video-audio** ([PR #1703](https://github.com/anthropics/skills/pull/1703)) | 将 Markdown 直接编译为带拟人配音的 MP4 视频 | 零成本视频生成，扩展 Markdown 表达能力 | 🟢 Open (2026-09-01) |
| 4 | **mcp-builder** ([PR #1742](https://github.com/anthropics/skills/pull/1742)) | MCP 服务构建工具，修复 streamable_http_client 导入与自定义 Header | 兼容 mcp>=2.0，修复历史遗留 API 变更 | 🟢 Open (2026-09-08) |
| 5 | **skill-creator** ([PR #1298](https://github.com/anthropics/skills/pull/1298)) | 创建/优化 Skill 的元技能，修复触发评估机制 | 解决 Windows 兼容性、select() 管道失败、误判触发等核心缺陷 | 🟢 Open (2026-06-10) |
| 6 | **pyxel** ([PR #525](https://github.com/anthropics/skills/pull/525)) | Python 复古游戏开发（创作、调试、帧级检查） | 确定性无头运行 + 任务状态检查，兼顾趣味性与教学 | 🟢 Open (2026-03-05) |
| 7 | **scnet-hpc** ([PR #1615](https://github.com/anthropics/skills/pull/1615)) | 通过 SSH + Slurm 管理超算集群 | 面向科研 HPC 场景的 profile 化工作流 | 🟢 Open (2026-08-20) |
| 8 | **Hivemind** ([PR #1628](https://github.com/anthropics/skills/pull/1628)) | 零成本多 Agent 编排（调用 headless opencode worker） | 核心思路：昂贵模型的 context 是稀缺资源，应让免费模型做机械工作 | 🟢 Open (2026-08-21) |

---

## 2. 社区需求趋势（从 Issues 提炼）

| 方向 | 代表 Issue | 核心诉求 |
|------|-----------|---------|
| **🔒 安全与治理** | [Issue #492](https://github.com/anthropics/skills/issues/492)（评论 43） | 社区技能伪装官方 `anthropic/` 命名空间导致信任边界滥用；[Issue #412](https://github.com/anthropics/skills/issues/412)：agent-governance 技能（策略执行、威胁检测、信任评分、审计追踪） |
| **🤝 分发与共享** | [Issue #228](https://github.com/anthropics/skills/issues/228)（评论 16） | 组织内技能共享（当前需手动下载→传输→上传，缺乏共享库/链接） |
| **🧠 记忆与状态** | [Issue #1329](https://github.com/anthropics/skills/issues/1329)（评论 9） | compact-memory：用符号化记号压缩 agent 状态，减少 context 占用 |
| **🛠️ 评估与质量** | [Issue #556](https://github.com/anthropics/skills/issues/556)（评论 12） | run_eval.py 中 `claude -p` 触发率为 0%，评估框架失效 |
| **📄 文档/排版** | [PR #514](https://github.com/anthropics/skills/pull/514) | document-typography：消除孤儿词、寡妇段落、编号错位 |
| **🔗 MCP/API 集成** | [Issue #16](https://github.com/anthropics/skills/issues/16) | 将 Skills 暴露为 MCP，统一软件 API 协议 |

---

## 3. 高潜力待合并 Skills（评论活跃 / 近期可落地）

| PR | Skill | 预期落地理由 |
|----|-------|------------|
| [PR #1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator trigger 修复** | 直接修复 #1721 — trigger 评估报告 0% recall 的严重 Bug，影响所有 Skill 的自动优化 |
| [PR #1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | 2026-09-17 提交，紧随安全信任问题 #492 之后，匹配社区对安全操作的强需求 |
| [PR #1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 多模态输出热门方向，零成本方案易推广 |
| [PR #1627](https://github.com/anthropics/skills/pull/1627) | **buffer-api** | 社交管理平台 Buffer 的通用 Agent 集成，覆盖多平台 |
| [PR #1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | 多 Agent 编排 + 零成本模型利用，架构创新且实用 |
| [PR #1765](https://github.com/anthropics/skills/pull/1765) | **office UTF-8 解码修复** | 修复 DOCX/PPTX/XLSX 红线对比在非 UTF-8 环境的乱码问题 |

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：安全可信的技能分发机制（防冒充、可共享、可审计）与自动化的 Skill 质量评估体系（trigger 检测、评估框架修复）**——二者分别对应"信任底座"和"质量飞轮"，是 Skills 规模化落地的前置条件。

---

### 关键跟踪指标建议
- **Issue #492**（安全命名空间冒用，43 条评论）——最高优先级，可能触发官方治理策略变更
- **Issue #228**（组织共享，16 条评论）——直接关联商业化/企业版能力
- **PR #1769**（skill-creator recall 修复）——决定 Skill 自优化链路是否可用

---

**Claude Code 社区动态日报 (2026-09-19)**  
基于 `anthropics/claude-code` 最新 GitHub 数据编制，技术视角简报。

---

### 今日速览
今日发布 v2.1.277，主要引入 AGENTS.md 原生支持与网关出口边界环境变量；与此同时，社区 Issue 热度居高不下，AGENTS.md 标准化、hooks/插件扩展性以及 Windows 平台稳定性成为三大焦点，反映出社区在跨代理统一性与跨平台健壮性之间的双重拉扯。

### 版本发布
- **v2.1.277** (2026-09-19)  
  - **AGENTS.md 支持**：在无 CLAUDE.md 的项目中，Claude Code 会回退读取 `/config` 下的 `AGENTS.md`（目前 Bedrock/Vertex/Foundry 暂不支持）  
  - **新环境变量**：`CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1`，供仅出口边界的 Claude Apps Gateway 使用  
  - 

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报**  (2026-09-19)

---

### 1. 今日速览
- 🚀 最新 **v0.62.0‑nightly.20260919.gcfbcaa8df** 发布，核心 ConPTY 生命周期同步及输出-finalization 强化修复正式生效。
- 🔥 社区热点集中在**多智能体协作**、**Agent 安全性和可靠性**（悬挂、数据销毁、无限循环等）以及**代码导航/性能增强**（AST 感知工具、搜索工具等）上。
- 🔧 多项关键 PR 完成或合并，涵盖 MCP 提示词处理、安全外壳包装、状态持久化、重复工具响应去重及 Google 搜索工具落地等。

---

### 2. 版本发布
**v0.62.0‑nightly.20260919.gcfbcaa8df** (`#29383`, `#29403`)
- 版本号更新，合并 PR `#29383`（自动化版本提升）。
- 核心修复 PR `#29383` 合并后，由 `@jvargassanchez-dot` 提交的 `fix(core): synchronize ConPTY process exit lifecycle and harden PTY output finalization` 正式合并，解决了终端进程退出和输出结束的可靠性问题。

---

### 3. 社区热点 Issues（按讨论热度/优先级排序）

| 排名 | Issue | 为什么重要 | 社区反应 |
|------|-------|----------------|--------------------|
| 1 | **[#19430] Parallel Agent Teams / Multi-Agent Collaboration**<br>一个类似 Claude Code Agent Teams 的 Gemini CLI 多智能体协作功能请求。 | 解决当前 Gemini CLI 中智能体“单打独斗”的问题，是实现真正的协作编程和代码审查的基础。 | 👍 44，支持者众多；14 条评论；优先级 P2，Area: agent。 |
| 2 | **[#21409] Generalist agent hangs**<br>当 Gemini CLI 下派给通用智能体时，会无限制卡死（如文件夹创建等简单任务）。 | 这是一个严重影响用户体验的崩溃问题，直接导致工作流中断。 | 👍 8；8 条评论；优先级 P1，Maintainer-only。 |
| 3 | **[#26390] Severe Action‑Bias Overriding User Directives**<br>智能体对“完成任务”的驱动过于强烈，经常无视 `.gemini.md` 中的保护性约束，执行 destructive 动作（如文件替换、删除）。 | 安全隐患极大，可能导致源代码丢失或意外修改；急需行为约束机制。 | 👍 2；9 条评论；优先级 P1。 |
| 4 | **[#22323] Subagent recovery after MAX_TURNS is reported as GOAL success**<br>codebase_investigator 等子智能体在达到 turn 限制后仍被标记为“成功”，从而隐藏了中断。 |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报（2026‑09‑19）**

---

### 1. 今日速览  
- 今天发布 **v1.0.87‑0**，为 Auto‑routing tier 引入用户/托管启动默认值，并优化连续 steering 提示的合并与编辑体验。  
- 社区仍然非常活跃，过去 24 小时内出现 33 条 Issue 与 0 条 PR，主要围绕 **技能组织、模型默认、配置读取、UI/UX 细节** 等痛点展开。

---

### 2. 版本发布  
**v1.0.87‑0**  
- **Added** 用户与托管启动默认值（strict 与可被组织策略覆盖）用于 Auto‑routing tier。  
- **Improved** 同一模式下的连续 steering 提示会合并为一个待处理消息；在空输入框中按 **↑** 可撤销并编辑（含粘贴文本）。  

> 更多细节请见发布页：<https://github.com/github/copilot-cli/releases/tag/v1.0.87-0>

---

### 3. 社区热点 Issues（挑选 10 条）  

| # | 标题 | 重要性 | 社区反应 | 链接 |
|---|------|--------|----------|------|
| **#1632** | **Support subfolders for skills to better organize them** (CLOSED) | 技能数量激增导致扁平结构难以管理，子文件夹能显著提升可维护性。 | 12 条评论、24 👍，作者已在 2026‑09‑18 进行后续讨论，表明需求迫切。 | <https://github.com/github/copilot-cli/issues/1632> |
| **#1285** | **Organisation level Agent not showing up** (OPEN) | 企业级 Agent 失踪影响团队协作，直接阻碍 Copilot 在组织层面的落地。 | 10 条评论、13 👍，已有多位用户确认复现，期待官方回应。 | <https://github.com/github/copilot-cli/issues/1285> |
| **#4870** | **MCP: Figma remote server fails to load — `-32601` on `server/discover`** (OPEN) | Figma MCP 服务在 CLI 中注册失败，导致工具不可用，影响设计工作流。 | 6 条评论、11 👍，明确指出是致命错误，需快速修复。 | <https://github.com/github/copilot-cli/issues/4870> |
| **#1824** | **Default model selection** (CLOSED) | 用户希望自定义默认模型，当前硬编码为 Claude Sonnet，限制灵活性。 | 6 条评论、3 👍，提议提供 `--default-model` 参数。 | <https://github.com/github/copilot-cli/issues/1824> |
| **#4765** | **copilot cli fails to read config from working directory which isn't a repo root** (OPEN) | 多仓库工作区场景下配置文件读取失败，影响跨仓库使用。 | 4 条评论、0 👍，已确认是 bug，需修复。 | <https://github.com/github/copilot-cli/issues/4765> |
| **#1086** | **Do not enforce PowerShell on Windows** (CLOSED) | 强制使用 PowerShell 限制用户在已有 CMD 环境的使用体验。 | 4 条评论、2 👍，社区呼吁保留原有终端。 | <https://github.com/github/copilot-cli/issues/1086> |
| **#4839** | **Make option to disable taskbar icon** (OPEN) | 任务栏图标导致会话堆积，用户希望关闭。 | 3 条评论、2 👍，需求明确，缺少实现入口。 | <https://github.com/github/copilot-cli/issues/4839> |
| **#4886** | **`--plugin-dir` skills load but are omitted from `/skills` and `/env`** (OPEN) | 本地插件技能虽能加载，但交互面板不展示，导致可见性不一致。 | 3 条评论、0 👍，描述清晰，属于功能缺陷。 | <https://github.com/github/copilot-cli/issues/4886> |
| **#4905** | **Desktop app: sessions die minutes after spawn — “GitHub credential registration is no longer available for this session”** (OPEN) | 桌面端会话异常终止，导致 MCP 目录失效，影响长期使用。 | 3 条评论、2 👍，用户反馈严重，需要紧急修复。 | <https://github.com/github/copilot-cli/issues/4905> |
| **#2892** | **MCP stdio transport for sub‑agents (task tool) closes after ~4 s** (CLOSED) | 子任务的 stdio 连接提前断开，导致后续 tool 调用失败。 | 3 条评论、0 👍，属于稳定性关键 bug。 | <https://github.com/github/copilot-cli/issues/2892> |

> 以上 Issue 代表了 **组织/技能管理、模型配置、跨平台兼容性、插件/技能集成、会话稳定性** 等核心痛点，社区关注度高，值得后续跟踪。

---

### 4. 重要 PR 进展  
- **本日报告期内暂无 PR 更新**（过去 24 小时内 PR 数量为 0）。  

---

### 5. 功能需求趋势  
- **技能组织结构**：子文件夹、更细粒度的技能分层（#1632、#4886）。  
- **模型可配置性**：默认模型选择、rubber‑duck 使用模型自定义（#1824、#3480）。  
- **配置文件鲁棒性**：支持非仓库根目录读取、合并托管状态（#4765、#4900）。  
- **跨平台/终端体验**：取消 PowerShell 强制、任务栏图标开关、键盘快捷键改进（#1086、#3858、#4839）。  
- **会话与插件稳定性**：会话意外退出、MCP  transport 超时、session_store_sql 空值、插件技能不暴露（#4905、#2892、#2654、#4886）。  
- ** OAuth 与身份**：客户端名称登记冲突、OAuth 重定向白名单限制（#4906、#4901）。  

总体来看，社区更关注 **可维护性（组织/技能）**、**可配置性（模型、配置）**、**跨平台一致性（终端、UI）** 与 **稳定性（会话、MCP）** 四大方向。

---

### 6. 开发者关注点（痛点与高频需求）  
- **配置读取**：在多仓库工作区或非 Git 根目录下，`.mcp.json` 与 Hook 文件读取失败（#4765）。  
- **终端兼容性**：Windows 强制 PowerShell、缺少 `cmd` 环境对 `gradlew` 等批处理的支持（#1086）。  
- **UI/UX 细节**：任务栏图标堆积、缺少关闭开关、Ctrl+Backspace 在 Windows 上失效（#4839、#3858）。  
- **技能与插件整合**：插件加载后技能不在 `/skills` 与 `/env` 中显示（#4886），子文件夹组织需求（#1632）。  
- **会话稳定**：长时间会话因凭证失效或 stdio 超时而意外终止（#4905、#2892）。  
- **模型默认**：希望自定义默认模型或在 rubber‑duck 模式中指定模型（#1824、#3480）。  
- **OAuth 登记**：客户端名称被 Figma 白名单拒绝，需改为 “GitHub Copilot CLI”（#4906）。  
- **提示解析**：以 `-` 开头的提示文本被误判为 CLI 参数（#4902）。  
- **自动化延迟**：在 autopilot 模式下立即跳过 clarification，缺少可配置的延迟（#4899）。  

这些高频痛点表明，**配置健壮性、跨平台兼容、插件/技能组织、会话可靠性** 与 **用户可控的交互体验** 是当前社区最迫切的改进方向。  

---  

*报告结束，祝大家开发顺利 🚀*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-19**

---

### 1. 今日速览
今日 Kimi Code CLI 社区无新版本发布，但社区活跃度依然较高。最值得关注的是新提交的 macOS 平台图片粘贴静默失败回归 Bug（#2652），以及针对 UserPromptSubmit hook 空值问题的核心 PR 修复（#2176）。此外，多项历史遗留问题如代理配置失效、MCP 断开连接等在今日持续获得社区反馈与推进。

### 2. 版本发布
*本日无新版本发布。*

### 3. 社区热点 Issues
从过去24小时更新的 13 条 Issues 中，挑选以下 10 个最值得关注的社区动态：

1. **[Bug] macOS 2.0.0 粘贴图片偶发静默失败（回归）** [#2652](https://github.com/MoonshotAI/kimi-cli/issues/2652)
   * **重要性**：今日新提交的 Bug，属于 0.43.x 版本的回归问题，直接影响 macOS 用户核心的图片输入体验。
   * **社区反应**：刚创建，暂未收到评论，但作为近期版本回归问题需优先关注。
2. **[Bug] 环境变量代理在 `kimi login` 时失效** [#1234](https://github.com/MoonshotAI/kimi-cli/issues/1234)
   * **重要性**：涉及底层网络代理配置，影响企业及受限网络环境用户的正常登录与使用。
   * **社区反应**：获得 2 👍，14 条评论，讨论激烈，属于高频网络配置痛点。
3. **[Enhancement] VSCode 中独立调节 Kimi 窗口字体大小** [#1680](https://github.com/MoonshotAI/kimi-cli/issues/1680)
   * **重要性**：针对 IDE 插件的深度定制需求，解决与其他窗口字体大小冲突的痛点。
   * **社区反应**：获得 2 👍，2 条评论，反映了用户对于 IDE 集成个性化的高要求。
4. **[Bug] MCP 断开连接时间歇性报错** [#1296](https://github.com/MoonshotAI/kimi-cli/issues/1296)
   * **重要性**：MCP 是当前 AI CLI 的核心生态，断开连接时的静默报错严重影响 Agent 工作流的稳定性。
   * **社区反应**：暂未获得点赞，但属于底层通信健壮性关键问题。
5. **[Bug] 无效 Markdown 格式化导致 stdin 提示词崩溃** [#1291](https://github.com/MoonshotAI/kimi-cli/issues/1291)
   * **重要性**：输入鲁棒性问题，特定的 Markdown 语法会导致 CLI 直接崩溃，影响开发效率。
   * **社区反应**：暂未获得点赞，属于影响输入体验的底层 Bug。
6. **[Bug] @ 提文件时显示内部 .git/objects 文件** [#1339](https://github.com/MoonshotAI/kimi-cli/issues/1339)
   * **重要性**：文件提及（@）功能泄露了项目内部对象文件，不仅影响体验，更可能存在信息泄露风险。
   * **社区反应**：暂未获得点赞，属于代码隔离与安全细节问题。
7. **[Bug] Kimi 无法自主配置自身 MCP** [#1459](https://github.com/MoonshotAI/kimi-cli/issues/1459)
   * **重要性**：反映了 AI 在配置自身工具链时的逻辑缺陷，影响了自动化配置的用户体验。
   * **社区反应**：暂未获得点赞，但点出了 AI 自我管理能力的期待与现实差距。
8. **[Feature] 添加任务完成时的 OSC 9/777 终端通知** [#1342](https://github.com/MoonshotAI/kimi-cli/issues/1342)
   * **重要性**：增强终端 multiplexer（如 iTerm2, kitty）的桌面通知能力，提升异步任务感知。
   * **社区反应**：暂未获得点赞，属于提升开发者工作流体验的优质功能需求。
9. **[Bug] Google GenAI 提供者工具参数 `$schema` 报错** [#734](https://github.com/MoonshotAI/kimi-cli/issues/734)
   * **重要性**：影响特定模型提供者（Google GenAI）的工具调用兼容性，限制了 MCP 生态的扩展。
   * **社区反应**：暂未获得点赞，属于多模型适配的边界问题。
10. **[Bug] flow:skill 交互模式无法中断或选择** [#1480](https://github.com/MoonshotAI/kimi-cli/issues/1480)
    * **重要性**：影响了复杂技能流程（Skill）的交互控制，用户无法中途打断或决策。
    * **社区反应**：暂未获得点赞，属于交互流程控制的逻辑缺陷。

### 4. 重要 PR 进展
本次数据周期内仅有 1 条重要 PR 更新：

*   **[PR] fix(hooks): extract text from ContentPart for UserPromptSubmit hook** [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176)
    * **功能/修复内容**：修复了 `UserPromptSubmit` hook 在 `user_input` 为 `list[ContentPart]`（所有消息的默认格式）时，`prompt` 和 `matcher_value` 为空的问题。此前代码仅处理了 `str` 类型，导致正则匹配失效。
    * **意义**：保障了 hooks 机制在处理复杂结构化消息时的数据完整性，对插件生态和自定义工具链的开发至关重要。

### 5. 功能需求趋势
从所有 Issues 的反馈中，可以提炼出社区最关注的三大功能方向：

1.  **IDE 深度集成与个性化**：以 VSCode 字体独立调节为代表，社区不再满足于基础连通，而是要求 AI CLI 深度融入现有开发环境并允许精细化定制。
2.  **MCP 生态的稳定性与兼容性**：无论是 MCP 断开连接报错、Google GenAI 参数冲突，还是自身配置逻辑缺陷，均指向 MCP 作为核心扩展生态，其连接健壮性与跨平台/跨模型兼容性亟需加固。
3.  **交互体验与终端感知增强**：从图片粘贴失败、Markdown 崩溃，到要求终端桌面通知（OSC 9/777），社区对无缝、低打断、高反馈的交互体验期望极高。

### 6. 开发者关注点
总结开发者反馈中的核心痛点与高频需求：

*   **环境配置与网络穿透**：代理变量失效（#1234）、安装脚本 Bug（#1107）是开发者遇到的高频门槛，尤其在企业网络环境下。
*   **跨平台一致性**：macOS 图片粘贴回归（#2652）、Windows 端 MCP 断开（#1296）、Linux 端 Markdown 崩溃（#1291），表明跨平台适配仍有较多盲区。
*   **输入与输出的鲁棒性**：CLI 对异常输入（如恶意/特殊 Markdown）和异步输出（如任务完成通知）的处理能力仍需加强，以减少开发过程中的意外中断。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# 2026-09-19 OpenCode 社区动态日报

## 今日速览
OpenCode 持续修复关键浏览器兼容性问题（CORS 预检失败）并推进多项性能优化。社区积极响应网络限制需求，推出代理支持和编码改进，同时解决桌面端 TUI 渲染崩溃、并行子任务取消等问题。多个新特性如富媒体文件预览、非 UTF-8 文件支持等已合并开发。

## 版本发布
本周暂无正式版本发布

## 社区热点 Issues（按影响排序）

### 1. **#31041** [CLOSED] Zen API 端点 CORS 预检失败，阻断所有浏览器客户端
*作者: OHKNO | 评论: 12* | [:link:](https://github.com/anomalyco/opencode/issues/31041)
**重要性:** 这是一个严重影响浏览器用户的问题，所有 Zen 路由在 OPTIONS 请求时返回 404，导致前端无法调用后端服务。**社区反应热烈**（12 条评论，11 个赞）表明这影响了大量用户。

### 2. **#37993** [CLOSED] [FEATURE] 网络限制环境下的内置代理支持
*作者: tianshan233 | 评论: 5* | [:link:](https://github.com/anomalyco/opencode/issues/37993)
**重要性:** 针对企业/校园网络环境，用户迫切需要自动代理支持。**社区关注度高**，反映了远程工作环境的需求。

### 3. **#35601** [CLOSED] [FEATURE] 桌面应用菜单 i18n 支持（简体中文）
*作者: 2024sy | 评论: 5* | [:link:](https://github.com/anomalyco/opencode/issues/35601)
**重要性:** 桌面端菜单完全无国际化支持。用户希望界面本地化，这反映了产品全球化发展需求。

### 4. **#17856** [CLOSED] [FEATURE] 提示输入中的 Git 分支指示器
*作者: slorenzot | 评论: 4* | [:link:](https://github.com/anomalyco/opencode/issues/17856)
**重要性:** 用户体验优化，当前 Git 状态一目了然，提高开发效率。社区积极讨论实现方案。

### 5. **#37803** [CLOSED] TUI 画面完全变黑，Agent 开始工作时渲染循环静默失败
*作者: AH64-dll | 评论: 4* | [:link:](https://github.com/anomalyco/opencode/issues/37803)
**重要性:** 这是一个严重影响桌面端用户体验的 BUG，Agent 运行时会导致整个 TUI 界面黑屏。

### 6. **#49742** [OPEN] OpenCode CLI v2.0.8 消息时间戳选项缺失
*作者: cateyes99 | 评论: 2* | [:link:](https://github.com/anomalyco/opencode/issues/49742)
**重要性:** 展示了 v1 版本存在的 CLI 时间戳功能在 v2 中丢失，用户体验倒退。

### 7. **#38018** [CLOSED] 停止默认自动压缩
*作者: phly95 | 评论: 2* | [:link:](https://github.com/anomalyco/opencode/issues/38018)
**重要性:** 自动压缩导致上下文丢失和 AI 幻觉，用户希望获得更多控制权，反映了性能与可靠性之间的权衡。

### 8. **#37959** [CLOSED] 并行长运行的任务子代理被中途取消（Windows 1.18.3）
*作者: Wertech-Projetos | 评论: 2* | [:link:](https://github.com/anomalyco/opencode/issues/37959)
**重要性:** 多代理并行执行时，一份失败导致全部子任务终止，严重影响批处理工作流。 Portugues 社区用户特别强调这一问题。

### 9. **#37947** [CLOSED] [Bug] OpenCode Go deepseek-v4-pro 发送无效的 max_completion_tokens
*作者: woohahahaaa | 评论: 2* | [:link:](https://github.com/anomalyco/opencode/issues/37947)
**重要性:** 模型特定参数验证导致请求失败，影响 DeepSeek 模型用户体验。

### 10. **#37966** [CLOSED] 显示代理按钮状态不持久
*作者: Aresitoo | 评论: 2* | [:link:](https://github.com/anomalyco/opencode/issues/37966)
**重要性:** 界面状态记忆丢失，影响用户操作连续性。

## 重要 PR 进展（按优先级排序）

### 1. **#49882** [OPEN] feat(app): 代理智能体引用的文件为富媒体标签页展示
*作者: Hona* | [:link:](https://github.com/anomalyco/opencode/pull/49882)
**功能:** 智能体生成的截图、录屏、报告、网页等文件现在以富媒体标签页形式直接展示，避免 DOMPurify 和 Electron 对 file:// 链接的拦截。

### 2. **#49881** [OPEN] [needs:compliance] feat(tool): 支持非 UTF-8 文件编码
*作者: MasEne* | [:link:](https://github.com/anomalyco/opencode/pull/49881)
**修复:** Windows CJK 环境下常见的 GBK、Shift-JIS、Big5 等编码文件不再因 UTF-8 解码而损坏，支持了 per-file 编码处理。

### 3. **#49875** [OPEN] [needs:compliance] fix(app): 路由 opencode://new-session 到新布局下的草稿
*作者: stu-ball* | [:link:](https://github.com/anomalyco/opencode/pull/49875)
**修复:** 修复新会话深度链接路由到旧布局的问题，统一管理所有新会话入口。

### 4. **#49870** [OPEN] [contributor] refactor(codemode): 删除 TypeScript 剥离
*作者: opencode-agent[bot]* | [:link:](https://github.com/anomalyco/opencode/pull/49870)
**重构:** 删除 `@opencode/codemode` 的 TypeScript 运行时依赖，直接使用 Acorn 解析 JavaScript，无需条件编译模块。

### 5. **#49874** [CLOSED] feat(console): 安装链接切换到 v2
*作者: thdxr* | [:link:](https://github.com/anomalyco/opencode/pull/49874)
**更新:** 更新文档导航指向 `/v2/docs`，GitHub 导航指向 `v2` 分支，统一升级到 v2 文档体系。

### 6. **#49873** [CLOSED] [contributor] fix(core): 保留控制台配置刷新错误后的状态
*作者: opencode-agent[bot]* | [:link:](https://github.com/anomalyco/opencode/pull/49873)
**修复:** 防止在控制台配置周期性刷新失败时丢失上一次成功配置的状态，解决了 transient 错误导致的完全重建问题。

### 7. **#49871** [CLOSED] fix(core): 技能指导说明用户发起的技能
*作者: rekram1-node* | [:link:](https://github.com/anomalyco/opencode/pull/49871)
**改进:** 当用户在提示中提到技能时，系统现在会明确说明这已包含在 `<skill_content>` 中，避免重复工具调用。

### 8. **#49869** [CLOSED] perf(desktop): 在 Electron 就绪时立即显示窗口
*作者: Hona* | [:link:](https://github.com/anomalyco/opencode/pull/49869)
**优化:** 减少启动时间约 900ms，通过异步加载布局和窗口创建，用户能更早看到界面。

### 9. **#49780** [CLOSED] perf(client): 服务启动轮询间隔优化到 25ms
*作者: Hona* | [:link:](https://github.com/anomalyco/opencode/pull/49780)
**优化:** 将服务探测轮询从 100ms 降到 25ms，提高服务就绪检测速度。

### 10. **#49778** [CLOSED] perf(ui): 让 ResizeObserver 承担首个滚动条测量任务
*作者: Hona* | [:link:](https://github.com/anomalyco/opencode/pull/49778)
**优化:** 通过 ResizeObserver 替代同步测量 scrollHeight/clientHeight，减少桌面端启动过程中的 24ms 卡顿。

## 功能需求趋势

### 1. **网络基础设施**
- 代理支持和 CORS 修复成为当务之急
- 网络限制环境支持需求增长
- 服务可靠性优化（轮询、错误恢复）

### 2. **国际化与编码支持**
- Windows CJK 环境下的 GBK、Shift-JIS、Big5 等编码支持
- 桌面应用菜单国际化扩展（首选简体中文）
- 文件系统编码处理完善

### 3. **性能优化**
- 启动时间优化（桌面端初始化、node-pty 懒加载）
- 渲染性能提升（luxon 移除、V8 代码缓存）
- 内存占用控制（Toast 字符串、草稿存储优化）

### 4. **状态管理与会话**
- 会话同步（跨设备一致性）
- 配置状态持久化（折叠、代理显示状态）
- 会话深度链接统一管理

### 5. **开发者工具链**
- 并行子代理可靠性改进
- Git 集成增强（分支状态指示）
- 技能使用说明优化

## 开发者关注点

### 1. **严重 BUG**
- **TUI 渲染崩溃**: Agent 启动时界面变黑，导致桌面端无法正常使用
- **CORS 预检失败**: 严重阻断浏览器客户端使用 Zen API
- **并行任务取消**: 多代理执行时一份失败导致全部子任务终止

### 2. **性能与可靠性权衡**
- 自动压缩导致幻觉问题，用户希望获得更多控制
- 性能改进与功能之间的平衡成为设计重点

### 3. **国际化与本地化**
- 桌面端菜单完全无本地化支持
- Windows 非英文字符环境下的文件编码支持不足
- 语言包更新迫切

### 4. **配置与状态管理**
- 界面设置状态不持久（如代理显示、折叠状态）
- 配置错误后恢复机制不足
- 会话跨设备同步需求强烈

### 5. **用户体验优化**
- CLI 时间戳选项丢失影响用户工作流
- 文件预览方式有待改进
- 启动速度和界面流畅度成为竞争点

本次社区活动体现了 OpenCode 在稳定性、国际化、性能方面的持续优化，同时用户对网络限制环境、国际化支持等方面的需求日益增长。未来版本将集中解决 TUI 渲染崩溃、CORS 兼容性等严重影响用户体验的问题。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-19

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

---

## 1. 今日速览

今日无新版本发布，社区聚焦于三方面：Anthropic Claude 新模型的编辑工具兼容性缺陷与高负载性能问题备受关注，模型目录（catalog）层面的多起供应商变更（GLM、DeepSeek、OpenCode Go）引发用户反馈；PR 侧则密集合并了会话管理、TUI 健壮性、CJK 输入支持及 Azure Chat Completions 等实用修复与功能扩展。

---

## 2. 版本发布

**无新版本发布。**（过去 24 小时内无 Release 动态。）

---

## 3. 社区热点 Issues

**[#6278](https://github.com/earendil-works/pi/issues/6278)** — Claude 新模型与 Pi 编辑工具严重不兼容，约 20% 的编辑操作因 LLM 产出额外字段（如 `new_text_x`、`type`）而失败。已关闭，25 条评论，社区关注度高。

**[#7730](https://github.com/earendil-works/pi/issues/7730)** — macOS 长时间会话 CPU 占用飙升至 50–110%，内存维持 600–800MB，疑似与会话上下文长度相关。16 条评论，性能问题引起开发者重视。

**[#8928](https://github.com/earendil-works/pi/issues/8928)** — 多进程并行启动时，若 `auth.json` 含过期 OAuth 凭证，会持续约 48s 报错 "No API key found"。11 条评论，根因定位清晰但尚未修复。

**[#8684](https://github.com/earendil-works/pi/issues/8684)** — `PI_OFFLINE` 被文档声明仅禁用启动网络操作，实际上整个会话期间禁用了所有 provider 模型目录发现，属于文档与行为不符。11 条评论。

**[#9652](https://github.com/earendil-works/pi/issues/9652)** — `/compact` 在 `claude-fable-5` 上失败：`serializeConversation` 将 thinking blocks 转写进摘要提示后触发 Anthropic 的 `reasoning_extraction` 拦截。6 条评论，影响大模型工作流。

**[#9549](https://github.com/earendil-works/pi/issues/9549)** — Windows 大型转录下 Fullscreen 模式每帧重渲染，调整窗口时整个 transcript 重新输出，导致单核满载。5 条评论。

**[#9036](https://github.com/earendil-works/pi/issues/9036)** — `openai-codex` SSE 解析器将完整响应缓冲到单一字符串，导致 V8 堆内存致命溢出（FATAL ERROR: heap out of memory）。4 条评论，流式解析性能问题。

**[#9062](https://github.com/earendil-works/pi/issues/9062)** — `processResponsesStream()` 中每次 delta 都对完整累积缓冲区做 `parseStreamingJson()`，工具调用参数解析呈 O(N²)。4 条评论，算法层面优化需求。

**[#9737](https://github.com/earendil-works/pi/issues/9737)** — `@earendil-works/pi-ai@0.85.1` 的 `opencode-go` 目录缺少 `deepseek-v4.1-flash`，模型目录同步滞后。5 条评论。

**[#9718](https://github.com/earendil-works/pi/issues/9718)** — `pi --print` 在模型输出预算耗尽时以 exit code 0 退出且无任何 stdout/stderr 输出，调用方无法区分"无输出"与"预算耗尽"。3 条评论。

---

## 4. 重要 PR 进展

**[#9763](https://github.com/earendil-works/pi/pull/9763)** — 新增 `pi.dev` 兼容性检查机制，将 PR 提交同步至内部兼容性工作流并上报稳定的状态报告。Open，进度跟进中。

**[#9762](https://github.com/earendil-works/pi/pull/9762)** — 修复 TUI 在收到不含 `content` 数组的工具结果时崩溃的问题（`TypeError: Cannot read properties of undefined (reading 'filter')`）。Closed，健壮性提升。

**[#9434](https://github.com/earendil-works/pi/pull/9434)** — 允许扩展通过 `session_start` 处理器追加 `systemPromptAppend`，支持扩展向会话系统提示词追加内容。Open，扩展性增强。

**[#9754](https://github.com/earendil-works/pi/pull/9754)** — 修复同一仓库内 worktree 间会话恢复被误判为跨项目 fork 的问题：对 session-dir 做 symlink 解析后，相同仓库的不同 checkout 可静默本地恢复。Closed。

**[#9746](https://github.com/earendil-works/pi/pull/9746)** — TUI 文件自动补全现在识别 CJK 标点作为边界，例如 `我们需要实现新功能，docs<Tab>` 可正常触发补全。Closed，中文用户体验改善。

**[#9744](https://github.com/earendil-works/pi/pull/9744)** — 新增 `/retry` 命令，用于在连接失败重试放弃回合后继续会话，无需重新输入。Closed，本地 LLM 用户高频需求。

**[#9742](https://github.com/earendil-works/pi/pull/9742)** — Shell 耗时展示支持小时/分钟/秒格式。Closed，修复 #9628。

**[#9720](https://github.com/earendil-works/pi/pull/9720)** — Mistral 推理级别由 `thinkingLevelMap` 驱动，并新增 `zai-glm-5-3` 模型。Closed，模型适配完善。

**[#9736](https://github.com/earendil-works/pi/pull/9736)** — 统一重试语义：无论来自 Pi 自身代码还是 Anthropic SDK 的 "stream cut" 提示，均可在终端事件前触发重试。Closed。

**[#9714](https://github.com/earendil-works/pi/pull/9714)** — Azure provider 新增 Chat Completions 部署支持，使 Foundry 上的 DeepSeek V4 Pro 等模型可用。Open，对应 #9645。

---

## 5. 功能需求趋势

从 Issues 与 PR 综合分析，社区当前最关注的方向如下：

- **模型目录维护与新模型适配**：多起 Issue 涉及 GLM Coding Plan 收窄（[#9616](https://github.com/earendil-works/pi/issues/9616)）、OpenCode Go 缺 model（[#9737](https://github.com/earendil-works/pi/issues/9737)）、Azure Foundry Chat Completions 支持（[#9645](https://github.com/earendil-works/pi/issues/9645) / [PR #9714](https://github.com/earendil-works/pi/pull/9714)）、Qwen Token Plan 拓展（[PR #7989](https://github.com/earendil-works/pi/pull/7989)）。模型供给的实时同步成为刚需。
- **性能与稳定性**：长时间会话 CPU 飙升（[#7730](https://github.com/earendil-works/pi/issues/7730)）、大型 transcript 重渲染（[#9549](https://github.com/earendil-works/pi/issues/9549)）、流式解析 O(n²)（[#9062](https://github.com/earendil-works/pi/issues/9062)）、SSE 内存溢出（[#9036](https://github.com/earendil-works/pi/issues/9036)）构成性能主线。
- **TUI 与交互体验**：全屏模式滚动性能（[#9052](https://github.com/earendil-works/pi/issues/9052)）、鼠标滚轮步长可调（[#9758](https://github.com/earendil-works/pi/issues/9758)）、CJK 输入补全（[PR #9746](https://github.com/earendil-works/pi/pull/9746)）、行断复制语义（[#8019](https://github.com/earendil-works/pi/issues/8019)）。
- **跨平台与系统兼容**：Wayland clipboard（[#9011](https://github.com/earendil-works/pi/issues/9011)）、Windows 进程树清理（[#9129](https://github.com/earendil-works/pi/issues/9129)）、Linux musl 静态链接工具链（[#9033](https://github.com/earendil-works/pi/issues/9033)）。
- **会话与压缩**：compaction 被 Claude 拒绝（[#9652](https://github.com/earendil-works/pi/issues/9652)）、last-read 阈值静默失效（[#9740](https://github.com/earendil-works/pi/issues/9740)）、`--print` 预算耗尽信号（[#9718](https://github.com/earendil-works/pi/issues/9718)）。

---

## 6. 开发者关注点

开发者反馈集中体现为以下痛点：

- **模型目录漂移导致工作流中断**：`zai-coding-cn`（[#9616](https://github.com/earendil-works/pi/issues/9616)）、`opencode-go`（[#9737](https://github.com/earendil-works/pi/issues/9737)）目录与实际供应商不同步，且多数情况下请求被服务端静默重定向，用户难以感知。开发者要求目录与上游保持强一致并给出显式告警。
- **`PI_OFFLINE` 语义违反预期**（[#8684](https://github.com/earendil-works/pi/issues/8684)）：文档与实现不一致，对离线调试场景构成阻碍，需明确行为边界。
- **流式解析与内存效率**：SSE 缓冲整个响应（[#9036](https://github.com/earendil-works/pi/issues/9036)）和 O(N²) JSON 增量解析（[#9062](https://github.com/earendil-works/pi/issues/9062)）已成为大上下文长会话的实际瓶颈，社区呼吁流式增量解析。
- **LLM 输出与 schema 稳定性**：Claude 新模型的编辑工具 schema 漂移（[#6278](https://github.com/earendil-works/pi/issues/6278)）、thinking blocks 阻断 compaction（[#9652](https://github.com/earendil-works/pi/issues/9652)）表明 provider 端变更对 Pi 的连锁影响显著。
- **跨平台健壮性**：Windows 进程清理遗留（[#9129](https://github.com/earendil-works/pi/issues/9129)）、macOS 高 CPU（[#7730](https://github.com/earendil-works/pi/issues/7730)）、Wayland `wl-paste` stderr 泄漏（[#9011](https://github.com/earendil-works/pi/issues/9011)）持续分散开发者精力。
- **CLI 诊断缺失**：`--mode` 无效值被静默忽略（[#9045](https://github.com/earendil-works/pi/issues/9045)）、`--print` 预算耗尽无信号（[#9718](https://github.com/earendil-works/pi/issues/9718)），脚本化场景下缺乏显式错误反馈，影响自动化集成。
- **包发布与 npm 索引同步**：`npm search` 无法索引新包（[#7885](https://github.com/earendil-works/pi/issues/7885)）、重新发布后仍不显示（[#7987](https://github.com/earendil-works/pi/issues/7987)）反复出现，extension 生态的发布体验亟待改进。

---

*日报基于 [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) 数据生成，统计时间窗口：2026-09-18 → 2026-09-19。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-19

> 数据来源：`github.com/QwenLM/qwen-code`（过去 24 小时）

---

## 1. 今日速览

- **预览版发布**：`v0.24.1-preview.0` 已推送，主要记录 ACP 边界接受状态并修复 CI 打包顺序。
- **Web Terminal 阻塞问题**：macOS 上 `@lydell/node-pty` 未被打包且代码签名拦截本地 prebuild，导致 Web Shell PTY 不可用（#11872，10 条评论，P1）。
- **CLI 回归**：v0.24.0 后 `/cd` 命令在无活动会话时仍报错"response in progress"（#12224，P1）。

---

## 2. 版本发布

### v0.24.1-preview.0
| 变更 | 说明 |
|------|------|
| `docs(serve)` | 记录已合并的 ACP boundary acceptance |
| `fix(ci)` | 等待 published export renderer 完成后才打包 |

> 同期 nightly：`v0.24.0-nightly.20260918.537311b8a5` 包含相同修复集。

---

## 3. 社区热点 Issues

| # | 优先级 | 标题 | 为什么重要 |
|---|--------|------|-----------|
| [11872](https://github.com/QwenLM/qwen-code/issues/11872) | P1 | Web Terminal `[Error: PTY not available]` | macOS code signing 拦截 `@lydell/node-pty` prebuild，web shell 核心功能受损 |
| [12224](https://github.com/QwenLM/qwen-code/issues/12224) | P1 | `/cd` 在 v0.24.0 后无法切换目录 | CLI 回归，用户无法正常操作工作区 |
| [11783](https://github.com/QwenLM/qwen-code/issues/11783) | P1 | TUI React error #185（Maximum update depth） | 后台任务注册后 TUI 崩溃，交互中断 |
| [12206](https://github.com/QwenLM/qwen-code/issues/12206) | P1 | LSP non-ASCII responses silently dropped | 中文等 CJK 标题返回空结果，`Content-Length` 按字节 vs UTF-16 字符串长度不匹配 |
| [12053](https://github.com/QwenLM/qwen-code/issues/12053) | P2 | Slim the Goal runtime | 单轮 100+ tool calls 后证据目录膨胀，需裁剪 checkpoint |
| [12165](https://github.com/QwenLM/qwen-code/issues/12165) | P2 | MCP OAuth 丢失 `registrationUrl` | Atlassian 远程 MCP 认证流程断裂 |
| [12216](https://github.com/QwenLM/qwen-code/issues/12216) | P2 | MCP workspace-discovery 启动两套 LSP | `--experimental-lsp` 继承导致 ACP 进程内重复服务 |
| [12217](https://github.com/QwenLM/qwen-code/issues/12217) | P2 | `export const meta` 前注释导致 workflow 启动失败 | 正则锚点缺 `/m` 标志，`\s*` 仅匹配空白 |
| [12028](https://github.com/QwenLM/qwen-code/issues/12028) | P2 | Non-conversation context token governance | system prompt / tool schema / QWEN.md 每次请求均计入 token，成本不透明 |
| [12226](https://github.com/QwenLM/qwen-code/issues/12226) | P3 | Filesystem-scoped permission authority | 请求按文件系统范围评估权限，仓库级 `.qwen` 配置仅管本仓库 |

---

## 4. 重要 PR 进展

| # | 标题 | 关键内容 |
|---|------|---------|
| [12225](https://github.com/QwenLM/qwen-code/pull/12225) | fix(desktop): stage node-pty prebuild | 将 `@lydell/node-pty` 及平台 prebuild 打入 Desktop runtime，直接回应 #11872 |
| [12227](https://github.com/QwenLM/qwen-code/pull/12227) | fix(cli): keep local slash commands idle | 本地 slash command 解析期间保持 idle 状态，通过 idle-only guards |
| [12191](https://github.com/QwenLM/qwen-code/pull/12191) | fix(web-shell): harden published artifacts | 声明外置化、运行时依赖隔离，防止 MCP Apps runtime 被意外吸收 |
| [12115](https://github.com/QwenLM/qwen-code/pull/12115) | fix(installer): preflight glibc | CentOS 7 等旧发行版在安装前预检 GLIBC，避免安装后报错 |
| [12156](https://github.com/QwenLM/qwen-code/pull/12156) | fix(core): bound gitignore matcher retention | 大规模文件扫描时释放重复编译的 gitignore 规则内存 |
| [12008](https://github.com/QwenLM/qwen-code/pull/12008) | feat(serve): stop workspace runtimes | 用户可手动停止占用 ACP capacity 的 workspace runtime |
| [12119](https://github.com/QwenLM/qwen-code/pull/12119) | fix(cli): /context categories add up | 重构 `/context` 分解，使其与 provider 报告总量一致 |
| [11854](https://github.com/QwenLM/qwen-code/pull/11854) | feat: add hybrid code mode | 引入 `tools.mode` 枚举（`direct` / `code_mode` / `code_mode_only`），隔离 `exec` JS 工具 |
| [12085](https://github.com/QwenLM/qwen-code/pull/12085) | feat(web-shell): restore remote workspace | Web Shell 增加 Codex 风格远程连接管理 |
| [11859](https://github.com/QwenLM/qwen-code/pull/11859) | ci(pnpm): install everywhere, retire lockfile | 全仓切换 pnpm，退役 `package-lock.json` |

---

## 5. 功能需求趋势

1. **IDE / 编辑器集成深化**：ACP/Zed 兼容（#11361）、Web Shell 远程工作区（#12085）、Desktop 打包（#12225）。
2. **权限与安全粒度**：project-local 覆盖 user-level（#12223）、filesystem-scoped authority（#12226）。
3. **MCP 生态打通**：OAuth 修复（#12165）、workspace-discovery 去重（#12216）。
4. **扩展与部署管理**：`--extension-dir` 加载部署扩展（#121

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-09-19

> 数据来源：`github.com/Hmbown/DeepSeek-TUI`（仓库已迁移至 Codewhale 名称）

---

## 1. 今日速览

- **无新版本发布**：过去 24 小时内无 Release 推送。
- **CSDN 星图接入**：PR #6353 关闭，新增 CSDN 星图（StarMap）作为首个中文生态提供商，支持 `glm_for_coding` 默认模型。
- **CI 稳定性修复**：PR #6354 解决 main 分支 lint 失败与 MCP stdio 竞态条件；PR #6347/6348 修复 TUI 栈溢出与 Windows 路径断言问题。

## 2. 版本发布

（无）

## 3. 社区热点 Issues

| # | 标题 | 评论 | 重要性 |
|---|------|------|--------|
| [#6011](https://github.com/Hmbown/DeepSeek-TUI/issues/6011) | TUI 用量与工具诊断：token 计数、缓存命中率、工具调用错误模式 | 9 | ⭐⭐⭐ 开发者观测性刚需 |
| [#6015](https://github.com/Hmbown/DeepSeek-TUI/issues/6015) | 自适应防停滞 + 只读 shell 语法扩展 | 9 | ⭐⭐⭐ 核心执行体验 |
| [#5587](https://github.com/Hmbown/DeepSeek-TUI/issues/5587) | 死代码清理 Phase 2-4：75 个测试标记、242 个过期 allow | 9 | ⭐⭐ 代码健康度 |
| [#6184](https://github.com/Hmbown/DeepSeek-TUI/issues/6184) | **引擎静默冻结**：用户消息持久化但无响应，无错误日志 | 6 | 🔴 P0 严重缺陷 |
| [#6187](https://github.com/Hmbown/DeepSeek-TUI/issues/6187) | MCP 无连接监控：死服务保持 "ready" 状态 | 5 | ⭐⭐⭐ 可靠性 |
| [#6142](https://github.com/Hmbown/DeepSeek-TUI/issues/6142) | 合并两套 MCP 客户端栈（tui/src vs crates/mcp） | 5 | ⭐⭐ 架构重构 |
| [#6310](https://github.com/Hmbown/DeepSeek-TUI/issues/6310) | `serve --acp` 忽略 config.toml sandbox_mode/ask | 4 | ⭐⭐ ACP 集成缺陷 |
| [#6087](https://github.com/Hmbown/DeepSeek-TUI/issues/6087) | TUI 界面精简：/settings 71 行扁平化、/setup providers 整理 | 5 | ⭐⭐ UX 改进 |
| [#5915](https://github.com/Hmbown/DeepSeek-TUI/issues/5915) | Fleet 模型：provider → model → shortlist → role 流程 | 4 | ⭐⭐ 多模型调度 |
| [#6086](https://github.com/Hmbown/DeepSeek-TUI/issues/6086) | Session Scratchpad + 三存储统一寻址方案 | 4 | ⭐⭐ 记忆架构 |

## 4. 重要 PR 进展

| # | 标题 | 状态 |
|---|------|------|
| [#6353](https://github.com/Hmbown/DeepSeek-TUI/pull/6353) | feat(providers): CSDN 星图 + Coding Plan billing | ✅ closed |
| [#6354](https://github.com/Hmbown/DeepSeek-TUI/pull/6354) | fix(ci): main lint 失败 + MCP stdio 竞态 | ✅ closed |
| [#6350](https://github.com/Hmbown/DeepSeek-TUI/pull/6350) | refactor(tui): 移除 provider-neutral 机制中的 DeepSeek 残留 | ✅ closed |
| [#6347](https://github.com/Hmbown/DeepSeek-TUI/pull/6347) | fix(tui): debug poll 链栈大小翻倍至 32MiB | ✅ closed |
| [#6348](https://github.com/Hmbown/DeepSeek-TUI/pull/6348) | test(tui): Windows 路径规范化断言修复 | ✅ closed |
| [#6349](https://github.com/Hmbown/DeepSeek-TUI/pull/6349) | chore(ci): windows crate 分组 + docker action pins | ✅ closed |
| [#6351](https://github.com/Hmbown/DeepSeek-TUI/pull/6351) | feat(web): Shoreline 调色板导出至站点 tokens | ✅ closed |
| [#6352](https://github.com/Hmbown/DeepSeek-TUI/pull/6352) | feat(web): Shoreline tokens 解析 GPUI 镜像 | ✅ closed |
| [#5752](https://github.com/Hmbown/DeepSeek-TUI/pull/5752) | feat(cloud-facts): Supabase 签名缓存 facts 通道 | ✅ closed |
| [#6134](https://github.com/Hmbown/DeepSeek-TUI/pull/6134) | Professionalize Computer Use + 官方下载页 | ✅ closed |

## 5. 功能需求趋势

1. **Provider 中性化**：DeepSeek 特有命名被系统性替换（CSDN、DeepSeek fossils 清理），转向通用路由。
2. **Fleet/Agent 编排**：模型 shortlist、子 agent 角色分配、工作流子任务 cwd 隔离（#6232）。
3. **MPC 可靠性**：连接监控、自动重连、`list_changed` 支持（#6187）。
4. **IDE/ACP 集成**：ACP 运行时与编辑器深度整合（#5835）、远程 SSH 工作区（#6158）。
5. **AST 级别编辑**：`edit_symbol` 替代文本匹配锚点（#6203）。

## 6. 开发者关注点

- **稳定性痛点**：引擎静默冻结（#6184）无任何错误输出，调试困难。
- **架构债务**：两套 MCP 栈并存（#6142）、Config 权威分裂（#6143）、依赖重复（reqwest 0.12/0.13、toml 双版本）。
- **可观测性缺失**：运行时性能无度量（#6193）、子 agent 用量不持久化（#6315）。
- **配置漂移**：`max_parallel_writes_without_worktree` 有文档无代码（#6312）。
- **高风险操作**：YAML 模式未声明 cwd 导致工作流拒绝（#6314）。

---

*报告生成时间：2026-09-19 | 数据窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*