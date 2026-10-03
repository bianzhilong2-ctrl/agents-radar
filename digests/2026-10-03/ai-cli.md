# AI CLI 工具社区动态日报 2026-10-03

> 生成时间: 2026-10-03 02:57 UTC | 覆盖工具: 9 个

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



# AI CLI 工具生态横向对比分析报告
**日期：** 2026-10-03  
**报告类型：** 社区动态与生态竞争分析  
**适用对象：** 技术决策者、开发者、工具选型负责人

---

## 1. 生态全景

2026 年 10 月初，AI CLI 工具生态正从“功能扩张期”转向“稳定性与可扩展性深耕期”。主流工具的核心竞争焦点已从单纯增强对话能力，转移到 **插件/技能生态构建（Extensibility）**、**权限与安全控制粒度**以及**本地跨平台体验一致性**上。商业工具（Claude/Codex/Copilot）普遍面临 VS Code 扩展稳定性与权限摩擦的挑战，而开源工具（Gemini/Pi）则在 TUI 性能优化与多云模型支持上展现出更快的迭代敏捷性。安全边界正从模型层下沉至调度层（Scheduling Layer）和工具执行层，成为开发者关注的第二曲线。

## 2. 各工具活跃度对比

| 工具 | Issues (24h) | PR (24h) | 版本发布 | 今日关键动态 |
| :--- | :--- | :--- | :--- | :--- |
| **Gemini CLI** | 🔥 高 (精选 10 条，P1 密集) | 🔥 10+ (精选 10 条) | 1 (夜间版 v0.64.0) | 子智能体恢复、AST 感知工具、调度层权限控制 |
| **Pi (pi-mono)** | 🔥 50+ (精选 10 条) | 🔥 17 (精选 10 条) | 无 | TUI 渲染性能优化、OAuth 修复、多云模型支持 |
| **GitHub Copilot CLI** | 🔥 高 (精选 10 条) | ~1 (仅 1 个新提交) | 3 (补丁 v1.0.92-1/2/3) | BYOK 兼容修复、MCP 配置加载、权限提示优化 |
| **Claude Code** | 🔥 高 (#91870 237 评论) | 3 (文档/UI/底层) | 1 (v2.1.288) | 插件可扩展性 (#91870)、IDE 集成、组织订阅错误 |
| **OpenAI Codex** | 🔥 高 (回归问题频发) | 未统计 (大量修复) | 7 (Rust Alpha) | VS Code 扩展大规模回归、Rust SDK 高频迭代 |
| **Kimi Code CLI** | 0 | 0 | 0 | 过去 24 小时无活动 |
| **OpenCode** | ⚠️ 数据获取失败 | ⚠️ 数据获取失败 | ⚠️ 数据获取失败 | 摘要生成异常，需后续确认 |
| **Qwen Code** | ⚠️ 数据获取失败 | ⚠️ 数据获取失败 | ⚠️ 数据获取失败 | 摘要生成异常，需后续确认 |
| **DeepSeek TUI** | ⚠️ 数据获取失败 | ⚠️ 数据获取失败 | ⚠️ 数据获取失败 | 摘要生成异常，需后续确认 |

> 注：OpenCode、Qwen Code、DeepSeek TUI 今日数据源采集异常，无法评估当日状态，需关注后续恢复。

## 3. 共同关注的功能方向

尽管技术路线不同，社区反馈在以下四个维度高度趋同：

| 关注方向 | 具体诉求 | 涉及工具 |
| :--- | :--- | :--- |
| **可扩展性与生态** | 插件框架（hooks）、Sub-agent/Skill 自动触发、MCP 动态加载 | Claude (#91870), Gemini (Subagent), Copilot (Skills) |
| **权限与摩擦控制** | 细粒度目录白名单生效、破坏性命令防护、Prompt 模式下的确认机制 | Claude, Gemini (Scheduler), Copilot (allowed_directories) |
| **跨平台与稳定性** | Windows/Mac/Linux/移动端一致性、Wayland 支持、高负载 CPU 优化 | Gemini (Wayland), Pi (Windows/CPU), Claude (Desktop) |
| **多云与 BYOK 支持** | 本地模型接入、自定义推理参数（reasoning effort）、OAuth 稳定性 | Copilot (BYOK), Pi (Bedrock/Azure), Gemini (Tools 限制) |

## 4. 差异化定位分析

*   **Claude Code — 企业级插件生态标杆**
    *   **侧重**：IDE 深度集成（VS Code Diff Review）、插件（Mods）生态、工作流规则稳定性。
    *   **定位**：适合重度依赖企业工作流、需要定制化扩展的企业开发者。痛点在于订阅权限校验与插件加载配置。
*   **OpenAI Codex — 高频迭代中的 VS Code 中心**
    *   **侧重**：VS Code 原生扩展体验 + Rust SDK 底层能力。
    *   **定位**：技术激进派，单日发布 7 个 Rust Alpha 版本，但伴随严重的回归风险（VS Code 队列崩溃）。适合追求前沿能力且能承受不稳定性的开发者。
*   **Gemini CLI — 自主智能体与配置安全**
    *   **侧重**：Sub-agent 调度、AST 感知工具、调度层权限拦截（防止误删/误改）。
    *   **定位**：最适合处理复杂、自主性要求高的任务，且在“防破坏”设计上最为激进（P1 级优先级）。
*   **GitHub Copilot CLI — 生态兼容与补丁修复**
    *   **侧重**：与 GitHub 生态、MCP 服务、企业 BYOK 模型的兼容性。
    *   **定位**：稳健派，采用多补丁发布策略（v1.0.92-1/2/3）快速止血，适合已有 GitHub 企业架构的团队。
*   **Pi (pi-mono) — 极客驱动的 TUI 性能优化**
    *   **侧重**：TUI 渲染性能（指针相等性 Diff）、多云原生模型支持（Bedrock/Azure/llama.cpp）、开源贡献。
    *   **定位**：适合关注终端体验、希望低成本接入多种模型的独立开发者与开源爱好者。

## 5. 社区热度与成熟度

*   **高活跃度 & 快速迭代**：**Gemini CLI** 与 **Pi**。Gemini 保持 P1 级问题的高响应度（10+ PR/天），Pi 拥有活跃的社区修复力（50+ Issues/17 PRs）。两者均处于功能完善与性能优化的活跃期。
*   **高关注度 & 成熟但摩擦多**：**Claude Code** 与 **Copilot CLI**。用户基数大，社区讨论密度极高（Claude 单一 Issue 237 评论），但企业级功能（插件、权限、订阅）的成熟度尚未完全跟上预期，处于“边用边修”阶段。
*   **高风险 & 高波动**：**OpenAI Codex**。极高的发布频率伴随着明显的质量波动（VS Code 大规模回归），适合用于追踪技术风向，不宜直接用于关键生产路径。
*   **数据缺失**：Kimi Code 当前休眠；OpenCode、Qwen

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-03）

---

## 1. 热门 Skills 排行（高关注度 PR Top 8）

| # | Skill / PR | 核心功能 | 社区讨论焦点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (#1771) | Web3 智能合约静态分析 + 零存储 Merkle 证明上链（TON） | 首个引入区块链审计链上存证的 Skill，涉及 Solidity/Rust 双语言支持 | `OPEN` (2026-09-15) |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** (#1703) | Markdown → Marp 幻灯片 → 专业级 MP4 + 真人语音合成 | 零成本视频生成工作流，打通文档→视频全链路 | `OPEN` (2026-09-01) |
| 3 | **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)** (#1245) | Notion 规格文档 → 结构化实施任务（验收标准、进度追踪） | 连接产品规格与代码实现的“最后一公里”，附带简历量化审计技能 | `OPEN` (2026-06-02) |
| 4 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (#83) | 元技能：从结构、文档、测试、安全、维护五维度评分 Skill 质量 | 社区呼声最高的**治理类工具**，解决“谁来审核 Skill”问题 | `OPEN` (2025-11-06) |
| 5 | **[AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** (#822) | 零代码 E2E 测试：视觉定位 + 浏览器控制 + 自动回归检测 | 引入**视觉模型驱动测试**新范式，解决传统选择器脆弱性 | `OPEN` (2026-03-31) |
| 6 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (#723) | 全栈测试指南：Testing Trophy、AAA、React Testing Library、契约测试 | 系统化测试最佳实践落地，填补“如何测”的方法论空白 | `OPEN` (2026-03-22) |
| 7 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** (#1776) | 破坏性批量操作前的核对清单：归档/撤销/删除/群发的风险分级 | 运维安全“最后一道防线”，针对**人为误操作**的显式确认机制 | `OPEN` (2026-09-17) |
| 8 | **[compact-memory](https://github.com/anthropics/skills/issues/1329)** (#1329 Issue) | 符号化压缩 Agent 长期记忆，降低上下文占用 | 长任务 Agent 的上下文爆炸痛点，社区自发提议 | `OPEN` (2026-06-17) |

> **注**：PR 评论数字段显示 `undefined`，疑为 API 采集限制。以上排名综合考量：Issue 关联热度、功能创新度、解决痛点普遍性、最近活跃度。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 | 热度指标 |
|----------|------------|----------|----------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) (43💬, 2👍) | 社区 Skill 占用 `anthropic/` 命名空间导致信任边界滥用，需官方/社区隔离机制 | ⭐⭐⭐⭐⭐ **最高** |
| **组织级协作分发** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍) | 技能库在组织内一键共享，避免手动下载/上传/配置的碎片化流程 | ⭐⭐⭐⭐ |
| **评估体系修复** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍) | `run_eval.py` 触发率 0%，`claude -p` 无法激活 Skill/Command，阻断 CI/CD 集成 | ⭐⭐⭐⭐ |
| **Skill 元治理** | [#83](https://github.com/anthropics/skills/pull/83)、[#202](https://github.com/anthropics/skills/issues/202) | Skill 质量分级、安全扫描、`skill-creator` 从“文档风”转为“可执行指令风” | ⭐⭐⭐ |
| **上下文窗口优化** | [#1487](https://github.com/anthropics/skills/issues/1487)、[#1329](https://github.com/anthropics/skills/issues/1329) | 单个 Skill 注入 156k tokens 耗尽窗口；需符号化压缩长期记忆 | ⭐⭐⭐ |
| **文档/办公自动化深化** | [#1734](https://github.com/anthropics/skills/pull/1734)、[#1792](https://github.com/anthropics/skills/pull/1792)、[#486](https://github.com/anthropics/skills/pull/486)、[#514](https://github.com/anthropics/skills/pull/514) | DOCX 批注/修订/超时、ODT、排版规范、Markdown→视频 | ⭐⭐⭐ |
| **AI 治理/合规** | [#412](https://github.com/anthropics/skills/issues/412)、[#1385](https://github.com/anthropics/skills/issues/1385) | Agent 治理模式（策略执行、威胁检测、审计追踪）、推理质量三道关卡 | ⭐⭐ |

---

## 3. 高潜力待合并 Skills（活跃讨论 + 近期更新，大概率近期落地）

| PR | Skill | 关键进展信号 | 预估落地窗口 |
|----|-------|--------------|--------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP 2.0 兼容** | 修复 `streamable_http_client` 重命名 + 自定义 Header，关联 Issue #1668，作者近期高频提交 | **1-2 周**（基础设施修复，优先级高） |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: 触发评估修复** | 解决 Windows `select()` 失败、竞态条件、运行时错误误判，持续更新至 9/16 | **2-3 周**（核心工具链稳定性） |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **skill-creator: package_skill.py 直运支持** | 修复 `ModuleNotFoundError`、更新过时路径引用，作者同为 #1742 作者 | **2-3 周** |
| [#1730](https://github.com/anthropics/skills/pull/1730) | **claude-api: 死链替换** | 3 处 404 链接已验证替换为 canonical URL，10/02 仍在更新 | **1 周内**（文档维护类，阻力小） |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api: 退役模型标记** | 修正 4 个模型分类错误，关联 Issue #1603，9/28 仍活跃 | **1-2 周** |
| [#1792](https://github.com/anthropics/skills/pull/1792) | **docx: LibreOffice 超时错误化 + 产物校验** | 超时不再报成功、校验 `w:ins/w:del` 残留，9/25 更新 | **2-3 周** |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel: 复古游戏开发** | 作者为 Pyxel 原作者，含无头运行/逐帧校验/状态检查，长周期打磨至 9/22 | **1-2 月**（垂直领域，完整度高） |

---

## 4. Skills 生态洞察（一句话总结）

> **社区正从“技能堆砌”转向“技能治理”：** 核心诉求不再是单纯新增 Skill，而是解决**命名空间信任隔离、组织级分发、评估体系可用性、上下文窗口压缩、元技能质量把关**等基础设施层面的规模化落地障碍——**“能用、可信、可管、可共享”**成为当前最集中的共识。

---

**Claude Code 社区动态日报 – 2026‑10‑03**

---

### 1. 今日速览  
- 发布 **v2.1.288**，新增 `$.ui.selection()` 与内置 `gh api`，提升全屏选择及无 GitHub CLI 环境的调用能力。  
- 社区热议 Issue #91870（可扩展性提升）已有 237 条评论，表明插件生态是当前最受关注的方向。  

---

### 2. 版本发布  
**v2.1.288**  
- **新增**：`$.ui.selection()` – 返回全屏模式下最后一次选中的文本，并在选中位于单行时回传该行。  
- **新增**：内置 `gh api` 用于无 GitHub CLI 的云会话，并修复发送控制字符的 bug。  

---

### 3. 社区热点 Issues（挑选 10 条）  

| Issue | 关键意义 | 社区反应 | 链接 |
|-------|----------|----------|------|
| **#91870** – Mods : make Claude 10× more extensible | 通过 hooks/插件大幅提升可扩展性，是社区迫切的功能。 | 237 评论、130 👍，热度最高。 | <https://github.com/anthropics/claude-code/issues/91870> |
| **#8327** – Bug/Documentation : “Organization has been disabled” error when API key overrides subscription | 导致 Pro/Max 订阅用户无法使用 CLI，影响正式工作流。 | 121 评论、19 👍，已在 2026‑10‑03 更新。 | <https://github.com/anthropics/claude-code/issues/8327> |
| **#33932** – Feature : VS Code Extension Diff review UI similar to GitHub Copilot Edits Review | 期待更直观的差异审阅体验，提升开发者生产力。 | 39 评论、201 👍，社区投票强烈支持。 | <https://github.com/anthropics/claude-code/issues/33932> |
| **#15148** – Bug : LSP plugin `lspServers` config not processed from `marketplace.json` | LSP 插件虽安装但不可用，严重削弱集成能力。 | 23 评论、73 👍，明确的复现步骤。 | <https://github.com/anthropics/claude-code/issues/15148> |
| **#43255** – Bug : Chrome MCP tools “Navigation to this domain is not allowed” on all domains | Chrome 环境下所有 MCP 调用失败，影响跨域交互。 | 22 评论、13 👍，已确认是 regression。 | <https://github.com/anthropics/claude-code/issues/43255> |
| **#90450** – Bug : Auto Mode’s Bash‑first instruction silently disables nested `CLAUDE.md` and path‑scoped rules | 导致规则生效异常，影响自动化工作流。 | 18 评论、48 👍，已确认复现。 | <https://github.com/anthropics/claude-code/issues/90450> |
| **#87971** – Bug : Claude abuses bash tools for reads/writes/edits in Auto Mode (Windows) | Bash 工具滥用导致不必要的系统调用，影响稳定性。 | 16 评论、90 👍，社区关注度高。 | <https://github.com/anthropics/claude-code/issues/87971> |
| **#48511** – Bug : Desktop app session history lost when switching accounts | 账户切换后历史记录消失，影响连续工作。 | 8 评论、12 👍，已在 2026‑10‑03 确认。 | <https://github.com/anthropics/claude-code/issues/48511> |
| **#87003** – Bug : Remote Control CLI reports “Mobile push requested” but Android never receives it | 移动推送失效，影响跨平台协作。 | 7 评论、6 👍，已在 2.1.233 起复现。 | <https://github.com/anthropics/claude-code/issues/87003> |
| **#78985** – Closed : Prohibited‑actions rule blocks agents from testing login/account‑creation flows in sandboxed environments | 安全规则阻碍 QA/ dev 环境的自动化测试。 | 6 评论、7 👍，已关闭但仍是社区讨论焦点。 | <https://github.com/anthropics/claude-code/issues/78985> |

---

### 4. 重要 PR 进展（截至 24 小时）  

| PR | 主要内容 | 链接 |
|----|----------|------|
| **#77977** (closed) – docs(plugin‑dev): document `skipLfs` marketplace sources | 为插件开发者明确 `skipLfs` 选项的用法，并提供 GitHub shorthand 与普通 Git URL 示例。 | <https://github.com/anthropics/claude-code/pull/77977> |
| **#99118** (open) – diff: toasts show while the pane is open | 修复 `/diff` 打开后仍会阻塞其他插件的 toast，使多插件同时显示消息。 | <https://github.com/anthropics/claude-code/pull/99118> |
| **#97293** (open) – mods: declarations carry `process.run` truncation flags and `mtimeMs` on list entries | 确保插件声明能正确获取已安装 CLI 的 truncation 与时间戳信息，防止不匹配导致的运行时错误。 | <https://github.com/anthropics/claude-code/pull/97293> |

> 目前 24 小时内仅有上述 3 条 PR 被更新，均为文档、UI 与底层声明的细化改进。

---

### 5. 功能需求趋势  

- **插件可扩展性**：Issue #91870 显示社区强烈需求更强的 hooks 与插件框架，以便自定义 UI、工具和工作流。  
- **IDE 深度集成**：#33932（VS Code 差异审阅 UI）和 #15148（LSP 配置处理）表明开发者期待更流畅的 VS Code 与语言_server 集成。  
- **工作流与规则稳定性**：#90450、#87971、#88550 等围绕 Auto Mode 与 worktree  isolation 的 bug 表明，稳定的 Bash/文件路径处理是关键痛点。  
- **跨平台体验**：#48511（会话历史丢失）、#87003（移动推送）以及 #88756（Ghostty 粘贴）显示不同平台（桌面、移动、Linux）对会话持久化、通知与交互的迫切需求。  
- **安全与权限**：#78985（禁止行为规则）和 #98262（beta 项目权限 bypass）反映出在受限环境下的权限管理与测试需求。  

总体来看，社区主要围绕 **插件生态、IDE 集成、工作流可靠性以及跨平台一致性** 展开。

---

### 6. 开发者关注点（痛点与高频需求）  

- **组织/订阅错误**：#8327 与 #98134 表明当 API 密钥覆盖订阅时会出现 “Organization has been disabled” 错误，需更清晰的权限校验逻辑。  
- **会话持久化**：#48511 与 #99088（VS Code 会话崩溃）显示在切换账号或大 transcript 时会话数据容易丢失，影响连续工作。  
- **移动端交互**：#87003 与 #99105 反映移动端推送与文本选择功能缺失，用户需要在手机上快速复制关键信息。  
- **Bash/工作流兼容**：#87971、#90450、#88550 系列 Issue 透露 Auto Mode 与 worktree 在 Bash 命令展开、路径处理上的 bug，导致规则失效或命令被拒。  
- **插件与 LSP 配置**：#15148 与 #97293 表明插件加载时 `marketplace.json` 中的 LSP 与 process‑run 配置未被正确解析，影响自动化工具链。  

这些痛点若能在下一代 releases 中得到系统性解决，将显著提升 Claude Code 的使用体验与企业采用率。  

---  

*报告结束*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：** 2026-10-03  
**数据源：** github.com/openai/codex  
**统计周期：** 过去 24 小时

---

## 1. 今日速览

今日 Codex 社区最显著的事件是 **VS Code 扩展出现大规模回归**，多起报告指出消息发送队列崩溃、JSON 解析错误及提示词在提交后消失，影响版本集中在 `26.928.x` 和 `26.930.x`。同时，**浏览器与计算机使用工具（Computer Use）** 的安全性检查引发高频讨论，包括特定网站被拒和 Windows 沙盒 ACL 错误。Rust SDK/CLI 保持了极高频率的 Alpha 迭代节奏，单日发布 7 个版本。

---

## 2. 版本发布

过去 24 小时内，`rust` 通道发布了 7 个 `0.162.0-alpha` 版本，显示团队正在进行快速迭代或自动化发布。

- **0.162.0-alpha.3** 至 **0.162.0-alpha.9**
  - 涉及 Rust 版 Codex SDK/CLI 的快速迭代，未附带详细的变更日志，建议开发者留意 Rust 依赖的版本兼容性。

> [查看 Releases](https://github.com/openai/codex/releases)

---

## 3. 社区热点 Issues

挑选了 10 个当前关注度和影响面最高的 Issue：

1.  **[Bug] Chrome 插件、浏览器及计算机使用拒绝与特定网站交互** (#29343)
    - 自 6 月创建以来关注度极高，近日再次活跃。用户反映 Codex 静默拒绝加载某些站点，涉及安全检测与 Computer Use 工具。
    - 👍 16 | 💬 40 | [链接](https://github.com/openai/codex/issues/29343)
2.  **[Bug] VS Code 未定义的内部 fetch 响应导致 JSON 解析错误** (#49834)
    - 揭示了发送锁释放时的

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报（2026-10-03）**  

---

### 今日速览
- 今日仅发布了一个夜间版本 **v0.64.0-nightly.20261003.gfb972b2f8**，主要修复了交互式选择列表的确认键（Enter/Space）可靠性问题。  
- 社区活跃度较高，围绕 **subagent 可靠性、AST 感知工具、设置覆盖、性能与安全** 等主题展开了多条热议 Issue 与 PR。  
- 开发者普遍关注 **agent 挂起、技能使用不足、破坏性命令防护以及持久化状态的容错** 四大痛点。

---

### 版本发布
| 版本 | 更新内容 | 链接 |
|------|----------|------|
| v0.64.0-nightly.20261003.gfb972b2f8 | **fix(cli)**: 确保 Enter 与 Space 能够可靠地确认选择列表选项（修复了在某些终端下无法触发的确认问题）。 | [Release v0.64.0-nightly.20261003.gfb972b2f8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261003.gfb972b2f8) |

---

### 社区热点 Issues（精选 10 条）

| # | 标题 | 评论 | 为什么重要 | 社区反应 |
|---|------|------|------------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption | 13 | 揭示子智能体在达到最大 turn 时仍返回 `status: "success"`，导致上层误判任务完成，掩盖了实际中断。 | 优先级 P1，需重新测试；多位维护者已关注，期待明确的终止原因区分。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | 9 | 提出利用模型原生 bash 能力、零依赖沙箱以及执行后意图路由，以提升代码探索效率同时保证安全。 | P2 需求，社区点赞 1，表示对提升本地工具链使用有强烈期待。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | 8 | 当交由通用型 agent 处理时，即使是简单的文件夹创建也会导致无限挂起，严重影响可用性。 | P1，点赞 8，表明这是广泛遇到的阻塞问题，需定位调度或 prompt 导致的死循环。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads, search, and mapping | 7 | 探索 AST 感知工具（如 tree‑sitter、augmented grep）对精准读取、减少 token 噪声、降低 turn 数的潜在收益。 | P2，点赞 1，社区对 AST 工具的兴趣明显，后续可能孵化相关 skill。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | 7 | 模型在未显式指令的情况下很少自行调用已有 skill 或 sub‑agent，导致功能未被充分利用。 | P2，虽然点赞 0，但多位维护者在评论中建议改进自动触发机制。 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | [BUG] Browser Agent ignores settings.json overrides (e.g., maxTurns) | 4 | Browser Agent 在读取全局/项目级 settings 时未应用用户自定义的 `maxTurns` 等覆盖，导致配置失效。 | P2，社区反映在持久化浏览器会话场景下尤为突出。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland | 4 | 在 Wayland 会话下，Browser Agent 因无法获取 X11 句柄而失败，终止理由被误报为 GOAL。 | P1，点赞 1，提示需要 Wayland 兼容的后端或后备方案。 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | ~/.gemini/agents/filename.md is not recognized as an agent if filename.md is a symlink | 4 | 当代理文件为符号链接时，CLI 未能将其识别为有效 agent，限制了插件式管理的灵活性。 | P2，社区期望支持 symlink 以便版本控制共享代理。 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | Gemini CLI encounters 400 error with > 128 tools | 3 | 工具数量超过 128 时出现 HTTP 400，表明内部工具分片或请求大小有上限，影响大型插件生态。 | P2，亟需动态工具裁剪或分页机制。 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model frequently creates tmp scripts in random spots | 3 | 受限 shell 执行后，模型倾向于在各目录生成零散的临时脚本，增加清理负担并可能留下敏感残留。 | P2，社区建议统一临时目录或加入自动清理钩子。 |

---

### 重要 PR 进展（精选 10 条）

| # | 标题 | 优先级 | 功能/修复要点 | 链接 |
|---|------|--------|--------------|------|
| [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) | fix(cli): make persistent state writes failure‑safe | P1 | 持久化状态写入采用临时文件 + fsync + 原子重命名，防止意外中断导致 `state.json` 截断。 | 
| [#29400](https://github.com/google-gemini/gemini-cli/pull/29400) | Fix/29365 duplicate tool responses | P1 | 修复恢复会话时 `functionResponse` 被重复回放的问题，避免工具结果被双重执行。 | 
| [#29399](https://github.com/google-gemini/gemini-cli/pull/29399) | fix(core): preserve unrelated comments during edits | P2 | 加强 replace 工具契约，确保编辑过程中不相关的注释和代码保持原样，推动模型进行更小范围、分块编辑。 | 
| [#29398](https://github.com/google-gemini/gemini-cli/pull/29398) | fix(mcp): bound initial tool discovery to a short timeout | P1 | 对 MCP server 的 `tools/list` 响应加入超时控制，防止因 ID 不匹配导致的 10 min 等待。 | 
| [#29397](https://github.com/google-gemini/gemini-cli/pull/29397) | fix(agent): prevent session context poisoning and infinite loops on interrupted turns | P2 | 中断时不再将合成的助手直接追加到聊天历史，避免上下文毒化和无限循环。 | 
| [#29394](https://github.com/google-gemini/gemini-cli/pull/29394) | fix(scheduler): enforce user hold directives by blocking mutating tools at scheduler layer | P1 | 在调度层拦截 `replace`, `write_file`, `run_shell_command` 等具变更性工具，以尊重用户的 “wait / explain first” 指令。 | 
| [#29505](https://github.com/google-gemini/gemini-cli/pull/29505) | fix: support rootless Podman with keep‑id | P1 | 为 rootless Podman 容器正确映射宿主 UID/GID，解决因缺少匹配用户而导致的沙箱启动失败。 | 
| [#29618](https://github.com/google-gemini/gemini-cli/pull/29618) | fix(core): avoid duplicate tool response turns when resuming sessions | P1 | 与 #29400 互补，确保在 `convertSessionToClientHistory` 中不重放已记录的 functionResponse。 | 
| [#29616](https://github.com/google-gemini/gemini-cli/pull/29616) | fix(core): align OAuth callback iss parameter validation with RFC 9207 metadata | P1 | 将 OAuth 回调的 `iss` 校验对齐至 RFC 9207 与 MCP 授权规范，提升安全性并防止误配。 | 
| [#29617](https://github.com/google-gemini/gemini-cli/pull/29617) | fix(cli): skip eager recursive file reading for @<directory> references | P1 | 处理 `@<path>` 时仅返回相对工作区路径，不再递归展开目录，显著减少不必要的文件遍历开销。 | 

---

### 功能需求趋势（从全部 Issues 中提炼）

| 趋势方向 | 体现的 Issue / PR | 说明 |
|----------|-------------------|------|
| **AST 感知工具集成** | #22745, #22746, #22747, #29582（性能优化） | 社区希望利用语法树实现精准文件读取、定位与导航，以减少 token 浪费和 turn 次数。 |
| **SubAgent / Skill 自动化使用** | #21968, #21409, #22323, #29546（技能激活） | 开发者期望模型在相关任务中自动调用已注册的 skill 或 sub‑agent，减少手动干预。 |
| **设置与覆盖的可靠性** | #22267, #20079, #29505（根容器） | 对 `settings.json`、`symlink` 代理、容器环境变量等配置的传递与覆盖提出更严格的验证需求。 |
| **安全与防破坏** | #22672（阻止破坏性命令）, #29616（OAuth iss 校验），#29394（调度层阻止变更） | 防止模型在复杂 Git/DB 操作中误用 `git reset --force`、`rm -rf` 等危险命令，增强审计与回滚能力。 |
| **性能与资源控制** | #24246（工具数上限）, #29582（忽略过滤 & 子树剪枝）, #29502（持久化状态容错） | 大型代码库或插件生态下，对文件遍历、工具调度、状态同步的效率提出更高要求。 |
| **跨平台兼容性** | #21983（Wayland）, #29505（Rootless Podman），#29617（

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报（2026‑10‑03）**  

---

### 今日速览  
- 过去 24 小时内发布了三个补丁版本（v1.0.92‑1/2/3），重点修复了键盘/鼠标输入顺序、沙箱命令网络旁路提示以及远程 MCP 服务器重连等问题。  
- 社区活跃度集中在 **skill 配置失效、BYOK 与自定义模型兼容性、MCP 配置加载以及权限提示** 四个方向，相关 Issue 的评论数和点赞均居前列。  
- 仅有一个新提交的 PR（#5046），尚未进入代码审查阶段，表明今天的开发工作主要聚焦于 Issue 的讨论和修复。

---

### 版本发布  
| 版本 | 关键更新 | 链接 |
|------|----------|------|
| **v1.0.92‑3** | • 新增 **Ctrl+E** 环境选择器，可在对话前快速切换本地/云端运行。<br>• 键盘、粘贴和鼠标输入在高频交互下保持有序且响应灵敏。<br>• 沙箱 shell 命令在被代理阻止时会出现网络旁路提示。 | [v1.0.92‑3](https://github.com/github/copilot-cli/releases/tag/v1.0.92-3) |
| **v1.0.92‑2** | • Windows 上的沙箱命令临时文件现在写入授权的临时目录，支持重命名后落地的工具。<br>• Prompt‑mode 会话在 Stop‑hook 完成后仅触发一次 `sessionEnd` 钩子。 | [v1.0.92‑2](https://github.com/github/copilot-cli/releases/tag/v1.0.92-2) |
| **v1.0.92‑1** | • 空闲的可流式 HTTP MCP 会话过期后自动重连远程 MCP 服务器。<br>• 向后台运行的 Agent 发送消息时，会在其下一次处理机会转向活跃 turn。<br>• 上下文回滚保留最新请求于恢复上下文。<br>• 隐藏自动沙箱 CA 安装进度提示。 | [v1.0.92‑1](https://github.com/github/copilot-cli/releases/tag/v1.0.92-1) |

---

### 社区热点 Issues（精选 10 条）  

| # | 标题 & 链接 | 为什么重要 | 社区反应（评论/点赞） |
|---|-------------|------------|----------------------|
| **#4438** | [disable-model-invocation: true 使 skill 不可达](https://github.com/github/copilot-cli/issues/4438) | 技能配置失效导致 `copilot skill list` 能看到但实际调用时报 “Skill not found”，阻碍自定义工作流。 | 11 评论 · 12 👍 |
| **#3172** | [剪切板被其他进程占用的提示误触布局](https://github.com/github/copilot-cli/issues/3172) | 频繁出现 “Somebody else is owning the clipboard” 导致状态栏错位，影响终端使用体验。 | 4 评论 · 13 👍 |
| **#4012** | [BYOK：reasoning effort 不支持 glm‑5.2:cloud](https://github.com/github/copilot-cli/issues/4012) | 自定义模型在使用 `--reasoning-effort max` 时返回错误，限制了高级推理能力的发挥。 | 3 评论 · 23 👍 |
| **#1825** | [空 Input Schema 导致 MCP 工具被完全拒绝](https://github.com/github/copilot-cli/issues/1825) | 工具未定义输入参数时 CLI 直接报 “Invalid schema”，使得许多轻量工具不可用。 | 3 评论 · 10 👍 |
| **#5015** | [键盘可访问的分页器，支持 Vim/less 风格导航](https://github.com/github/copilot-cli/issues/5015) | 当鼠标模式关闭时，仅有 PageUp/Down 能翻屏，长输出难以逐行审阅。 | 2 评论 · 3 👍 |
| **#4840** | [BYOK 与 Deepseek 不再兼容](https://github.com/github/copilot-cli/issues/4840) | 选定 GPT5.4 后出现 JSON 反序列化错误（`custom` 类型未被识别），影响自研模型接入。 | 3 评论 · 1 👍 |
| **#4569** | [GitHub Mobile 保持 “Queued for Copilot” 状态](https://github.com/github/copilot-cli/issues/4569) | 移动端未及时刷新会话状态，导致用户误以为卡住，影响跨设备协作。 | 2 评论 · 0 👍 |
| **#4482** | [allowed_directories 配置未能抑制路径外提示](https://github.com/github/copilot-cli/issues/4482) | 即使在权限文件中添加了目录，仍会弹出 “path outside your allowed directory list” 提示。 | 2 评论 · 0 👍 |
| **#3032** | [允许白名单特定 shell 命令模式以跳过确认](https://github.com/github/copilot-cli/issues/3032) | 目前只有 `/allow-all` 一种全局方式，缺乏细粒度的免确认机制。 | 2 评论 · 2 👍 |
| **#2024** | [禁止通过配置追加内置 agent‑types](https://github.com/github/copilot-cli/issues/2024) | 用户希望通过配置文件禁用内置 agent 类型，以避免不必要的自建 agent 冲突。 | 2 评论 · 2 👍 |

> **注**：评论数和点赞均截至 2026‑10‑02 23:59 UTC，反映最近一天的社区关注度。

---

### 重要 PR 进展（过去 24 小时）  

| PR | 标题 & 链接 | 内容摘要 |
|----|-------------|----------|
| **#5046** | [Initial commit](https://github.com/github/copilot-cli/pull/5046) | 暂无详细描述，为后续功能或修复的基础提交。目前尚未进入审查流程。 |

> 由于今天仅有一个 PR，未出现大规模代码合并；社区精力主要投入到 Issue 的讨论和已发布补丁的验证。

---

### 功能需求趋势  

从今日 Issue 中可以提炼出以下几个社区关注的方向：  

1. **键盘与可访问性增强**  
   - 分页器的 Vim/less 风格导航（#5015）  
   - 剪切板冲突提示的修复（#3172）  

2. **BYOK 与自定义模型的深度兼容**  
   - reasoning effort、模型特定参数支持（#4012、#4840）  
   - 自定义提供商 URL、身份验证流程的稳定性（#5040、#5039）  

3. **MCP 配置与服务管理**  
   - 工作区 `.mcp.json` 加载失败（#4832、#4562）  
   - 工具输入 schema 为空时的容错（#1825）  
   - 工具目录状态通知的可选隐藏（#5034）  

4. **权限与安全细粒度控制**  
   - 允许目录列表不生效的问题（#4482）  
   - 特定 shell 命令白名单的需求（#3032）  
   - 禁用内置 agent-types 的配置选项（#2024）  

5. **会话与状态同步**  
   - 跨端（Mobile vs. Web/CLI）状态同步延迟（#4569）  
   - 长时间会话中上下文压缩/ compact 失败（#5045）  
   - 自动生成的 “Task complete” 摘要可关闭（#5033）  

6. **工具链与命令行体验**  
   - `grep` 工具对 `-n` 参数的处理（#5038）  
   - 图片粘贴后在回滚时丢失（#5037）  
   - 控制台更新卡顿（events.jsonl 持续增长）#5035  

---

### 开发者关注点（痛点与高频需求）  

- **权限提示频繁弹出**：即使在 `allowed-directory` 中配置了路径，仍会出现路径外确认，影响自动化脚本的流畅性。  
- **MCP 配置未能实时生效**：工作区的 `.mcp.json` 更改需要重启 CLI 才能生效，且重载后仍使用旧快照，导致调试困难。  
- **BYOK 与模型特性不匹配**：自定义模型在使用高级推理、工具调用等特性时经常返回 400 或 schema 错误，使得企业级自建模型难以充分发挥。  
- **技能（Skill）可达性受配置影响**：`disable-model-invocation: true` 导致技能彻底不可被调用，而文档仅说明其作用为 “手动のみ”。  
- **剪切板与终端交互冲突**：频繁的剪切板所有权提示破坏状态栏布局，尤其是在多应用复制粘贴场景下。  
- **会话状态同步延迟**：GitHub Mobile 与本地 CLI 的状态不同步，导致用户误认为卡住或需要手动刷新。  
- **分页与导航体验**：仅依赖 PageUp/Down 的全屏翻页使得审阅长段落、代码 diff 或工具输出变得困难，社区普遍期望更细粒度的键盘导航（类似 Vim/less）。  

> 以上痛点正是后续 Issue 与 PR 主要围绕的改进方向，预计在接下来的版本中会看到针对权限配置、MCP 动态加载、BYOK 兼容性以及键盘可访问性的专项修复。  

---  

*此日报基于 GitHub 公开数据（issues、releases、pull requests）自动生成，旨在为开发者提供快速的项目动态概览。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-10-03

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

---

## 1. 今日速览

今日无新版本发布，但社区活跃度较高，过去 24 小时内新增/更新了 50 个 Issue 和 17 个 PR。核心动态集中在 **TUI 渲染性能优化**（多条 PR 针对全量重绘问题）、**OpenAI/ChatGPT OAuth 登录修复**（至少 3 个相关 Issue），以及 **Bedrock 与 Azure 新模型支持**。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔥 #7547 — Windows 平台使用问题汇总（72 条评论）
- **作者**: petrroll | [链接](https://github.com/earendil-works/pi/issues/7547)
- **重要性**: ⭐⭐⭐⭐⭐ Windows 用户基数庞大，但 Pi 在 Windows 上的运行路径繁多（mintty、ConPTY、WSL 等），社区缺乏明确的优先级指引。该 Issue 已成为 Windows 兼容性的"集散地"，72 条评论说明社区高度关注。
- **社区反应**: 多位 Windows 用户参与讨论，但核心维护者尚未给出明确路线图。

### 🔥 #7730 — Mac OS 高 CPU 占用（18 条评论，10 👍）
- **作者**: gterzian | [链接](https://github.com/earendil-works/pi/issues/7730)
- **重要性**: ⭐⭐⭐⭐⭐ 长会话下 CPU 飙升至 100%+，内存 600-800MB，疑似与上下文长度相关。直接影响日常使用体验，10 个赞说明同类受害者众多。
- **社区反应**: 已有初步定位方向（上下文/会话长度），等待维护者确认根因。

### #10300 — ChatGPT OAuth ID Token 未持久化（13 条评论）
- **作者**: hyird | [链接](https://github.com/earendil-works/pi/issues/10300)
- **重要性**: ⭐⭐⭐⭐ OAuth 登录流程中 `credentialFromTokenResponse` 丢弃了 ID Token，导致扩展无法获取账户身份信息。影响扩展生态的鉴权能力。
- **社区反应**: 有明确的代码级分析和修复建议，社区期待维护者合并修复。

### #9255 — TuiMainScreen 全屏重绘风暴（10 条评论，1 👍）
- **作者**: vicmuchina | [链接](https://github.com/earendil-works/pi/issues/9255)
- **重要性**: ⭐⭐⭐⭐ 长 transcript（高度远超终端可视区域）时，`doRender()` 几乎每帧触发全量重绘，导致文本跳动、重复渲染。这是 TUI 渲染引擎的深层性能问题。
- **社区反应**: 已有开发者提交了 PR #10383（见下文），尝试通过指针相等性 diff 优化。

### #10258 — ChatGPT OAuth 登录 400 错误（7 条评论，1 👍）
- **作者**: khaleelu | [链接](https://github.com/earendil-works/pi/issues/10258)
- **重要性**: ⭐⭐⭐⭐ `invalid_grant` 错误导致 OpenAI provider 无法登录，但 legacy codex 模式正常。影响新 OAuth 流程的可用性。
- **社区反应**: 有用户反馈同样的问题，等待修复。

### #10162 — 输入图片过多导致 Agent 任务中断（6 条评论）
- **作者**: S1M0N38 | [链接](https://github.com/earendil-works/pi/issues/10162)
- **重要性**: ⭐⭐⭐⭐ 长时间运行的 Agent 任务（如 babysit PR）依赖自动 compaction，但大量图片输入会阻塞任务。影响 Pi 作为自主 Agent 的可靠性。
- **社区反应**: 用户希望增强图片输入的上限和 compaction 逻辑。

### #10256 — 终端颜色查询泄露到 Prompt（6 条评论，1 👍）
- **作者**: dawidkc | [链接](https://github.com/earendil-works/pi/issues/10256)
- **重要性**: ⭐⭐⭐⭐ 0.99.x 版本在 mintty/ConPTY 环境下启动时，终端颜色查询响应（`;0;rgb:...`）泄漏到 prompt 中，且 BEL 字符触发外部编辑器。影响输入纯净度。
- **社区反应**: 已有版本回归定位（0.87.1 正常），等待修复。

### #10257 — 切换到 Codex 失败（5 条评论）
- **作者**: redreceipt | [链接](https://github.com/earendil-works/pi/issues/10257)
- **重要性**: ⭐⭐⭐⭐ 中途切换模型时 `input[1].id` 格式不匹配（`fc_` vs `ctc_` 前缀），导致请求被拒绝。影响多模型无缝切换体验。
- **社区反应**: 有具体的错误日志和根因分析。

### #9807 — 大会话下 TUI 滚动/输入卡顿（4 条评论）
- **作者**: hernanharco | [链接](https://github.com/earendil-works/pi/issues/9807)
- **重要性**: ⭐⭐⭐⭐ 800+ 消息的会话中，全量重绘导致滚动和输入明显卡顿。与 OpenCode 的 OpenTUI 增量 diff 形成对比，社区呼吁类似的优化。
- **社区反应**: 已有 PR #10383 尝试解决此问题。

### #9557 — Anthropic 适配器丢弃 JSON Schema 关键字（4 条评论，1 👍）
- **作者**: Lubaoshuai | [链接](https://github.com/earendil-works/pi/issues/9557)
- **重要性**: ⭐⭐⭐ 非严格模式下 `convertTools()` 只保留 `type/properties/required`，丢弃了 `anyOf`、`oneOf` 等关键字，影响复杂工具参数的 schema 完整性。
- **社区反应**: 有明确的代码级修复建议。

---

## 4. 重要 PR 进展（精选 10 条）

### 🚀 #10383 — TUI 渲染性能优化：指针相等性 Diff
- **作者**: ReStranger | [链接](https://github.com/earendil-works/pi/pull/10383)
- **内容**: 修复 `doRender()` 在 diff 前对每行做归一化导致指针相等性失效的问题，使未变化行保持引用一致，避免全量字符串比较。**直接解决 #9255 和 #9807 的性能问题**。
- **状态**: 已合并（CLOSED）

### 🚀 #10382 — 原生支持 llama.cpp 分类器模型
- **作者**: mitsuhiko | [链接](https://github.com/earendil-works/pi/pull/10382)
- **内容**: 通过 `/v1/systemone` 探测加载的 llama.cpp 模型，将决策模型（Julia-1、Laya、Kev 等）列为 `typesafe-system-one` 分类器而非聊天模型。
- **状态**: 开放中（OPEN）

### 🚀 #9714 — Azure Foundry Chat Completions 支持
- **作者**: jsanter27 | [链接](https://github.com/earendil-works/pi/pull/9714)
- **内容**: Azure provider 原本只实现了 Responses API，现在扩展支持 Chat Completions，使 DeepSeek V4 Pro 等 Foundry 部署可用。** closes #9645**。
- **状态**: 开放中（OPEN）

### 🚀 #10328 — Bedrock 丢弃不匹配的 thinking blocks
- **作者**: jsanter27 | [链接](https://github.com/earendil-works/pi/pull/10328)
- **内容**: Bedrock adaptive thinking 请求现在发送 `block_binding: { prefix_mismatch_behavior: "drop_block" }`，使系统 prompt 或工具变更后重放的 thinking block 被丢弃而非 400 报错。** closes #10324**。
- **状态**: 已合并（CLOSED）

### 🚀 #10372 — C++ 骨架：Bazel 构建基础
- **作者**: driver005 | [链接](https://github.com/earendil-works/pi/pull/10372)
- **内容**: 为 Pi 的 C++ 核心创建 Bazel 8 工作区，包含模块宏、风格检查器（含测试）、clang-tidy 配置、`interfaces/` 和 `src/` 目录布局，以及 `IClock`/`SystemClock` 参考模块对。
- **状态**: 已合并（CLOSED）

### 🚀 #10329 — Bedrock OpenAI 模型长上下文定价档位
- **作者**: jsanter27 | [链接](https://github.com/earendil-works/pi/pull/10329)
- **内容**: Bedrock 中 OpenAI GPT 模型原本缺少 `cost.tiers`，导致超过 272k 输入 token 的请求按短上下文费率计价。现已修正为 2x 输入和 1.5x 输出的长上下文费率。** closes #10326**。
- **状态**: 已合并（CLOSED）

### 🚀 #10368 — 隐藏工具声明不泄漏到 rules/skills 提示
- **作者**: eatmoreduck | [链接](https://github.com/earendil-works/pi/pull/10368)
- **内容**: `prepareLoadout` 的 `hiddenDeclarations` 之前只从 `<tools>` 中移除工具声明，但 `<rules>` 和 skills hint 仍基于可执行工具集构建，导致模型看到不可见工具的引导。现已修复。
- **状态**: 已合并（CLOSED）

### 🚀 #10365 — OpenAI 兼容网关 reasoning_tokens 合并
- **作者**: unixzen | [链接](https://github.com/earendil-works/pi/pull/10365)
- **内容**: 修复部分 OpenAI 兼容网关在 streaming/non-streaming 模式下 `completion_tokens` 是否包含 `reasoning_tokens` 的不一致问题，将分离的 `reasoning_tokens` 折叠进输出 token 计数。
- **状态**: 已合并（CLOSED）

### 🚀 #10316 — Cloudflare Clef 分类器接入 Workers AI
- **作者**: ndisidore | [链接](https://github.com/earendil-works/pi/pull/10316)
- **内容**: 在 Workers AI 分类器目录中添加 Cloudflare 的 Clef 决策模型（`@cf/cloudflare/clef` 27B 和 `@cf/cloudflare/clef-flash` 9B），与现有的 `typesafe/jev` 并列。** closes #10321**。
- **状态**: 已合并（CLOSED）

### 🚀 #10361 — 多行语法高亮保留
- **作者**: zhangqian-silk | [链接](https://github.com/earendil-works/pi/pull/10361)
- **内容**: 修复 highlight.js 多行 span 在 TUI 拆分后 continuation lines 丢失 ANSI 样式的问题，对每行单独应用格式化。** Fixes #10143**。
- **状态**: 已合并（CLOSED）

---

## 5. 功能需求趋势

从近期 Issues 和 PR 可提炼出以下社区关注方向：

| 方向 | 相关 Issue/PR | 热度 |
|------|--------------|------|
| **TUI 渲染性能** | #9255, #9807, #10383 | 🔥🔥🔥🔥🔥 |
| **OpenAI / ChatGPT OAuth 稳定性** | #10300, #10258, #10377 | 🔥🔥🔥🔥 |
| **多模型/多云厂商支持** | #9714, #10316, #10382, #10329 | 🔥🔥🔥🔥 |
| **Windows 兼容性** | #7547, #10256 | 🔥🔥🔥 |
| **Bedrock 适配完善** | #10328, #10324, #9557 | 🔥🔥🔥 |
| **长会话/大上下文稳定性** | #7730, #10162, #10287, #8301 | 🔥🔥🔥 |
| **pi-web（Web UI）功能完整性** | #10371, #10366 | 🔥🔥 |
| **C++ 底层建设** | #10372, #9137 | 🔥 |

---

## 6. 开发者关注点

总结近期社区反馈的核心痛点：

1. **TUI 渲染是性能瓶颈**：长会话下的全量重绘问题已经引发多个 PR 和 Issue，社区期待增量 diff 方案（参考 OpenCode/OpenTUI）。#10383 的指针相等性优化是第一步，但离真正的 cell 级 diff 还有距离。

2. **OAuth 登录体验亟待稳定**：ChatGPT OAuth 在 0.99.x 版本中出现 ID Token 丢失、`invalid_grant`、refresh token 失效等多个问题，影响 OpenAI provider 的正常使用。

3. **Windows 是最大的兼容性盲区**：#7547 的 72 条评论暴露出 Windows 用户面临多种运行路径（mintty、ConPTY、WSL、native node），缺乏官方推荐的"开箱即用"方案。

4. **长会话可靠性**：高 CPU 占用（#7730）、图片阻塞（#10162）、compaction 与 prompt queue 冲突（#8301）等问题，影响 Pi 作为长时间自主 Agent 的可信度。

5. **pi-web 功能滞后**：

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*