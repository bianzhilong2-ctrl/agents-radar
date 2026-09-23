# AI CLI 工具社区动态日报 2026-09-23

> 生成时间: 2026-09-23 02:28 UTC | 覆盖工具: 9 个

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



基于 2026-09-23 各主流 AI CLI 工具的社区动态数据，为您生成以下横向对比分析报告。

---

# 2026-09-23 AI CLI 工具生态横向对比分析报告

## 1. 生态全景
当前 AI CLI 工具生态正从“单次代码生成”向**“长周期、高可靠性的 Agent 执行环境”**快速演进。各主流工具普遍进入了架构重构期（如 Kimi 的 TypeScript 迁移、Codewhale 的巨石文件拆分与品牌升级），社区焦点高度集中在**会话持久化稳定性、多 Agent 协作编排、以及安全与可观测性**三大底层能力上。模型选择日益丰富（Gemini 3.8 Flash、Claude Opus 5.5 等新模型接入），但底层的沙箱机制、内存管理和认证锁死问题仍是制约用户体验的关键瓶颈。

---

## 2. 各工具活跃度对比
> 注：Claude Code 与 OpenAI Codex 的摘要生成失败，暂无今日数据。

| 工具 | 今日 Release 数 | 核心 Issues 数 (精选) | 核心 PR 数 (精选) | 活跃度定性 |
| :--- | :--- | :--- | :--- | :--- |
| **Gemini CLI** | 1 (nightly) | 10 | 10 | **极高**：模型更新与底层安全/可靠性 PR 并重。 |
| **GitHub Copilot CLI** | 1 (preview) | 10 | 1 | **高**：社区 Issue 爆棚（多为严重 OOM 和死锁），但今日 PR 较少，处于问题收敛期。 |
| **Kimi Code CLI** | 1 (v1.52.0) | 1 | 7 | **中高**：处于技术栈切换（Python 归档）的稳定期，PR 多集中在依赖升级与协议兼容。 |
| **OpenCode** | 0 | 10 | 10 | **高**：无发布，但社区讨论活跃，IDE 集成、账号计费和模型兼容性问题突出。 |
| **Pi** | 1 (v0.87.1) | 10 | 10 | **高**：模型支持更新快，但伴随较多 0.86.x 版本回归 Bug（如 LiteLLM 断连）。 |
| **Qwen Code** | 4 (含 nightly/desktop) | 10 | 10 | **极高**：Managed Agent 架构、Linux 粘贴板和 Daemon 稳定性问题并行推进。 |
| **DeepSeek TUI (Codewhale)** | 1 (v0.10.0) | 10 | 10 | **极高**：品牌与架构升级，可观测性、可插拔内存及 Chrome 扩展多线并进。 |

---

## 3. 共同关注的功能方向

### 会话稳定性与内存管理（痛点趋同）
*   **Copilot CLI**：会话压缩 OOM 死循环、事件存储耗尽导致 Node OOM、队列消息卡死。
*   **Kimi Code**：内存压力下会话状态损坏、恢复时工具调用 400。
*   **Gemini CLI**：自动记忆系统低信号会话无限重试、工具输出大小限制。
*   **分析**：长

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-23）

---

## 1. 热门 Skills 排行

### ① skill-creator（触发器评估修复系列）
- **关联 PR**：[#1298](https://github.com/anthropics/skills/pull/1298)、[#1769](https://github.com/anthropics/skills/pull/1769)
- **功能**：修复 skill-creator 的 trigger evaluation 系统，解决 Windows 上 `select()` 子进程管道失败、per-worker 命令竞争、以及"假阴性"召回率问题。
- **社区热度**：触发器评估是 Skills 生态的基石设施，#1298 与 #1769 形成修复链，且关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（`claude -p` 0% 触发率，12条评论）和 Issue [#1721](https://github.com/anthropics/skills/issues/1721)。社区对 trigger 可靠性的关注度极高。
- **状态**：OPEN（持续更新至 2026-09-19）

### ② mcp-builder
- **关联 PR**：[#1742](https://github.com/anthropics/skills/pull/1742)
- **关联 Issue**：[#1390](https://github.com/anthropics/skills/issues/1390)
- **功能**：支持 `mcp>=2` 的 `streamable_http_client` 导入路径变更及自定义 HTTP 头配置。
- **社区热度**：MCP 协议是 Claude Code 生态的核心扩展机制，#1390 报告了 evaluation.py 对所有真实 MCP 服务器返回 0/N 评分，严重影响 MCP Server 开发调试流程。
- **状态**：OPEN（持续更新至 2026-09-19）

### ③ AWT (AI Watch Tester)
- **PR**：[#822](https://github.com/anthropics/skills/pull/822)
- **功能**：集成 [AI-Watch-Tester](https://github.com/ksgisang/AI-Watch-Tester)，赋予 Claude 视觉能力和浏览器控制，实现零代码 E2E 自动化测试。
- **社区热度**：将 Claude Code 从代码助手升级为测试执行者，更新频繁（2026-09-19），切中 AI 测试自动化的强需求。
- **状态**：OPEN（持续更新）

### ④ 文档技能系列（docx / pdf / odt / pptx / xlsx）
- **关联 PR**：[#1790](https://github.com/anthropics/skills/pull/1790)、[#1765](https://github.com/anthropics/skills/pull/1765)、[#541](https://github.com/anthropics/skills/pull/541)、[#538](https://github.com/anthropics/skills/pull/538)、[#486](https://github.com/anthropics/skills/pull/486)
- **功能**：覆盖 OOXML 文档创建、修订跟踪、书签冲突修复、PDF 大小写敏感修复、ODF 文件处理等。
- **社区热度**：文档类 Skill 是提交量最大的品类，#1790（2026-09-19 最新提交）和 #1765 均在近期修复了关键兼容性问题，说明文档处理是高频使用场景。
- **状态**：大部分 MERGED，修复型 PR 持续跟进中

### ⑤ testing-patterns
- **PR**：[#723](https://github.com/anthropics/skills/pull/723)
- **功能**：覆盖完整测试栈——Testing Trophy 模型、AAA 模式、React Component Testing（Testing Library）、端到端测试等。
- **社区热度**：自 2026-03-22 创建以来持续更新至 2026-09-21，内容体系完整，契合社区对"如何让 Claude 写测试"的需求。
- **状态**：OPEN（长期维护中）

### ⑥ frontend-design
- **PR**：[#210](https://github.com/anthropics/skills/pull/210)
- **功能**：改进前端设计技能的清晰度和可操作性，确保 Claude 能在单次对话中执行具体的前端构建指令。
- **社区热度**：最早的 PR 之一（2026-01-05），持续更新至 2026-03-07，反映社区对"AI 生成前端代码质量"的长期关注。
- **状态**：OPEN（已成熟）

### ⑦ blast-radius
- **PR**：[#1776](https://github.com/anthropics/skills/pull/1776)
- **功能**：批量/破坏性操作前的安全检查清单——归档用户、撤销权限、删除行、批量邮件等。核心是将"查询正确的行"与"批量操作正确的世界"之间的鸿沟显式化。
- **社区热度**：最新提交（2026-09-17），安全导向的 Skill 设计理念新颖，切中 Agent 自主执行时的风险管控痛点。
- **状态**：OPEN（新提交）

### ⑧ document-skills 与 example-skills 重复问题
- **关联 Issue**：[#189](https://github.com/anthropics/skills/issues/189)（6评论，9👍）
- **说明**：两个插件安装后包含相同 Skill 导致上下文窗口重复。虽然不是单个 Skill 的排行，但反映了 Skill 分类和去重机制的社区关注。
- **状态**：OPEN

---

## 2. 社区需求趋势

基于 Issues 讨论热度（按评论数排序），社区需求集中在以下方向：

### 🔒 安全与信任（最热）
- **Issue #492**（43评论，2👍）：社区技能被置于 `anthropic/` 命名空间下伪装官方 Skill，构成信任边界漏洞。这是当前讨论最激烈的话题，社区强烈呼吁命名空间隔离和来源验证机制。
- **Issue #412**：提议 agent-governance 技能（安全模式、威胁检测、审计追踪），6评论。
- **Issue #1175**：SharePoint Online 文档处理的权限安全顾虑，4评论。

### 🤝 协作与分享
- **Issue #228**（16评论，8👍）：组织级 Skill 共享。用户希望在组织内直接共享 Skill，而非通过手动传输文件。已有 8 个点赞，说明需求强烈。
- **Issue #16**（4评论）：将 Skills 暴露为 MCPs，标准化 Skill 的 API 签名。

### 🛠️ Skill 创建与工具链
- **Issue #202**（8评论，1👍）：skill-creator 本身应遵循最佳实践——从"教育文档"转向"可执行指令"，提升 token 效率。
- **Issue #556**（12评论，7👍）：`run_eval.py` 中 `claude -p` 永远不触发 Skill，0% 触发率。
- **Issue #1385**（4评论，1👍）：推理质量门控管道提案——任务前校准 → 对抗审查 → 交付验证。

### 🌐 平台兼容性
- **Issue #29**（4评论）：Bedrock 兼容性问题。
- **Issue #1487**（4评论）：`claude-api` Skill 注入 ~156k tokens 耗尽上下文窗口。

### 📊 关键趋势总结
| 趋势方向 | 代表 Issues | 评论总数 |
|---------|------------|---------|
| 安全与信任 | #492, #412, #1175 | ~53 |
| 协作与分享 | #228, #16 | ~20 |
| 测试与质量 | #723, #822, #1385 | ~24 |
| 基础设施修复 | #556, #1390, #202 | ~24 |
| 新场景拓展 | #1329, #486, #1703 | ~22 |

---

## 3. 高潜力待合并 Skills

以下 PR 评论/更新活跃，尚未合并，有望近期落地：

| PR | Skill 名称 | 功能描述 | 更新日期 | 潜力理由 |
|---|-----------|---------|---------|---------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 智能合约自动静态分析 + TON 区块链审计证明锚定 | 2026-09-16 | Web3 审计是新赛道，零存储 Merkle 协议具创新性 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | Markdown → 专业级 MP4 视频（含拟人配音） | 2026-09-15 | 多模态内容生成的新方向，零成本转换概念有吸引力 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 破坏性操作前的安全检查清单 | 2026-09-18 | 安全思维融入 Skill 设计，契合社区对 Agent 安全性的核心关切 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc | SCNet HPC 集群操作技能（SSH + Slurm） | 2026-08-24 | 高性能计算垂直领域补位，企业级场景需求 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT (AI Watch Tester) | AI 驱动的 E2E 自动化测试（视觉+浏览器控制） | 2026-09-19 | 已有独立开源项目支撑，填补"AI 测试执行"空白 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 完整测试方法论 Skill | 2026-09-21 | 内容体系最全面，持续维护中 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder (fix) | MCP>=2 兼容性修复 | 2026-09-19 | 修复型 PR 直接影响 MCP 生态稳定性 |

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：安全可信的 Skill 分发机制与可靠的触发评估基础设施。** Issue #492（43条评论）揭示的信任边界滥用问题，以及 PR #1298/#1769/#556 共同暴露的 trigger 0% 召回率问题，说明社区正处于"Skills 规模化部署"与"基础设施成熟度"之间的关键矛盾期——用户渴望更多 Skill，但首先需要确保 Skill 是可信的、且能被正确触发。

---

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报（2026‑09‑23）**  

---

### 1. 今日速览
- 今日唯一发布的夜间版本 **v0.62.0-nightly.20260923.g62364cb20** 引入了 Gemini 3.8 Flash 与 Gemini 3.5 Flash‑Lite 两款最新 GA 模型，进一步丰富了模型选择。  
- 社区活跃度集中在 **subagent 可恢复性、通用代理卡死、内存系统以及浏览器代理稳定性** 四大方向，相关 Issue 评论数均位列前十。  
- 多个核心基础设施 PR（原子文件写入、路径遍历防护、配置合并、工具输出大小限制等）已合并，说明团队正在加强可靠性与安全性底层。

---

### 2. 版本发布
| 版本 | 发布时间 | 关键变更 | 链接 |
|------|----------|----------|------|
| v0.62.0-nightly.20260923.g62364cb20 | 2026‑09‑23 | **Feat/gemini 3.8 flash 3.5 flash lite** – 添加 Gemini 3.8 Flash（`gemini-3.8-flash`）和 Gemini 3.5 Flash‑Lite（`gemini-3.5-flash-lite`）作为最新 GA 模型，供 Flash 与 Flash‑Lite 层使用。 | https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260923.g62364cb20 |

---

### 3. 社区热点 Issues（按评论数排序）

| # | 标题 | 评论 / 👍 | 为何重要 | 社区反应 |
|---|------|-----------|----------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption | 13 / 2 | 子代理在达到最大轮次时仍返回 `status: "success"`，导致中断被掩盖，影响调试与可靠性。 | 讨论活跃，维护者已标记需要重新测试。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model's bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing | 9 / 1 | 提出利用模型原生 bash 能力，通过零依赖沙箱提升代码探索安全性与性能。 | 获得一点赞，说明社区对底层执行环境改进有兴趣。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | 8 / 8 | 通用代理在简单任务（如创建文件夹）时无限等待，严重影响日常使用。 | 高赞数表明这是广泛痛点，亟需修复。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST‑aware file reads, search, and mapping | 7 / 1 | 探索 AST 感知工具是否能减少 token 浪费、提升代码导航精度。 | 讨论集中在可行性与收益评估。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough | 6 / 0 | 模型主动调用自定义技能/子代理的频率低，限制了功能扩展。 | 虽无点赞，但多次提及，表明用户期望更智能的技能调度。 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | 5 / 0 | 自动记忆系统在日志中可能泄露秘密，需要确定性脱敏以及降低日志噪声。 | 安全与隐私关注度高。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low‑signal sessions indefinitely | 4 / 0 | 低信号会话被无限重试，导致资源浪费。 | 需要改进会话筛选机制。 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides (e.g., maxTurns) | 4 / 0 | 浏览器代理未遵循全局/项目级配置，造成行为不可预测。 | 配置传播问题是常见痛点。 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser_agent resilience: Automatic session takeover and lock recovery | 4 / 0 | 持久化浏览器会话遇到锁定时直接失败，缺少自动恢复机制。 | 社区期望更强容错能力。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in Wayland | 4 / 1 | 在 Wayland 环境下浏览器子代理启动失败，限制了 Linux 桌面用户。 | 表明跨平台兼容性仍需加强。 |

> **注**：其余高评分 Issue（如 #21335、`/compress` 持久性）同样值得关注，但因评论数较低暂未列入前十。

---

### 4. 重要 PR 进展（按影响程度排序）

| # | 标题 | 关键内容 | 链接 |
|---|------|----------|------|
| [#29443](https://github.com/google-gemini/gemini-cli/pull/29443) | Feat/gemini 3.8 flash 3.5 flash lite | 添加 Gemini 3.8 Flash 与 Gemini 3.5 Flash‑Lite 支持，扩展模型选择。 | https://github.com/google-gemini/gemini-cli/pull/29443 |
| [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) | fix(auth): prevent infinite auth loop from file contention, headless keyring, and supervisor state drops | 解决 Windows/WSL/headless 环境下因文件竞争导致的无限认证循环，增加加密文件存储回退。 | https://github.com/google-gemini/gemini-cli/pull/29448 |
| [#29244](https://github.com/google-gemini/gemini-cli/pull/29244) | fix(core): make tool file writes atomic and serialize same‑path writes | 让同一路径的并发文件写入变为原子且序列化，防止覆盖丢失。 | https://github.com/google-gemini/gemini-cli/pull/29244 |
| [#29249](https://github.com/google-gemini/gemini-cli/pull/29249) | fix(core): close sibling‑prefix bypass in get_internal_docs path guard | 改进路径遍历防护，使用真正的路径组件比对，避免兄弟目录越界读取。 | https://github.com/google-gemini/gemini-cli/pull/29249 |
| [#29248](https://github.com/google-gemini/gemini-cli/pull/29248) | fix(cli): avoid duplicate history and telemetry after confirmation | 去除确认操作后重复写入历史与遥测的问题。 | https://github.com/google-gemini/gemini-cli/pull/29248 |
| [#29247](https://github.com/google-gemini/gemini-cli/pull/29247) | fix(core): make isWithinRoot case‑insensitive on Windows | 在 Windows 上使路径根判断不区分大小写，修正因盘符/文件夹大小写差异导致的误拒。 | https://github.com/google-gemini/gemini-cli/pull/29247 |
| [#29342](https://github.com/google-gemini/gemini-cli/pull/29342) | fix(cli): avoid nested input history state updates | 重构输入历史存储，防止 React StrictMode 下的嵌套状态更新导致的双重调用。 | https://github.com/google-gemini/gemini-cli/pull/29342 |
| [#29451](https://github.com/google-gemini/gemini-cli/pull/29451) | fix(core): bound tool output size and optimize memory lifecycle in long‑running agent loops | 对工具输出大小设定上限，并在长周期 agent 循环中优化内存释放，防止 OOM。 | https://github.com/google-gemini/gemini-cli/pull/29451 |
| [#29452](https://github.com/google-gemini/gemini-cli/pull/29452) | fix(cli): decouple tool confirmation from IDE diff RPCs to prevent UI freeze | 将工具确认派发与 IDE 差分解耦，避免在 IDE 集成终端出现卡死。 | https://github.com/google-gemini/gemini-cli/pull/29452 |
| [#29450](https://github.com/google-gemini/gemini-cli/pull/29450) | refactor(a2a-server): implement V1 to V2 settings migration logic | 在 A2A 服务器中实现从扁平 V1 配置到层级 V2 配置的平滑迁移，保持向后兼容。 | https://github.com/google-gemini/gemini-cli/pull/29450 |

> 其余值得注意的 PR 包括版本号自动 bump（#29454）、PkgDiet 技能守护（#29449）、 surrogate‑pair 安全截断（#29304）以及 ACP 会话加载修复（#29368），均在今天有更新。

---

### 5. 功能需求趋势
从今日 Issue 与 PR 中可以提炼出以下社区关注方向：

| 趋势 |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-09-23)

## 1. 今日速览
今日 GitHub Copilot CLI 发布了 v1.0.89-0 预览版，新增了对 claude-opus-5.5 模型的支持，并优化了 Connector 的授权流程。社区方面，会话稳定性问题依然是焦点，频现因内存溢出（OOM）导致的压缩死循环、队列卡死以及认证令牌失效等严重缺陷；同时，自定义模型兼容性与配置并发覆盖问题也引发了大量讨论。

## 2. 版本发布
- **v1.0.89-0** 
  - **新增**：支持 claude-opus-5.5 模型。
  - **改进**：在连接和重新连接时，展示可复制授权 URL 的托管 Connector 同意进度。
- **v1.0.88** (2026-09-22)
  - 为 Ghostty 和 WezTerm 会话添加了可选的 OSC 777 终端通知。
  - 修复了底部锚定对话框（包括登录设备代码）中的文本选择问题。
  - 优化了托管设置刷新失败时的逻辑，保留 `/allow-all` 并记住缺失路径的精确会话批准。
- **v1.0.88-2**
  - **修复**：底部锚定对话框文本选择异常。

## 3. 社区热点 Issues
从过去24小时更新的 50 条 Issue 中，筛选出 10 个最值得关注的问题：

1. **[#4780](github/copilot-cli Issue #4780)** [triage] Session compaction OOMs and never completes
   - **重要性**：会话在达到上下文压缩阈值后进入不可恢复的崩溃循环，堆内存耗尽（约4.3GB），每次 `--resume` 都会重入，导致会话永久不可用。
2. **[#4639](github/copilot-cli Issue #4639)** [triage] event-storage exhaustion retry storm drives long-running session into GC/compaction loop and Node OOM
   - **重要性**：长会话在事件存储耗尽后，导出器不断尝试500事件刷新，引发内存压力、强制GC和OOM，严重影响长程任务稳定性。
3. **[#4755](github/copilot-cli Issue #4755)** [area:sessions, area:agents] Session wedges permanently when a queued-lane message lands at turn end
   - **重要性**：会话在回合结束时永久卡死（既不空闲也不运行），接受不到任何输入，队列静默丢失，唯一恢复方式是kill进程。
4. **[#4929](github/copilot-cli Issue #4929)** [triage] Process-local auth token stops refreshing; all prompts fail until restart
   - **重要性**：长运行进程永久失去认证，所有提示和 /ask 均返回授权错误，且 /login 无法恢复，只能重启进程。
5. **[#4663](github/copilot-cli Issue #4663)** [area:context-memory, area:models] Failed compaction is retried unchanged on every turn
   - **重要性**：压缩失败后CLI在后续每个回合原样重试，无退避、无回退，导致计费无界增长且上下文单调递增。
6. **[#4646](github/copilot-cli Issue #4646)** [triage] Compaction fails with "CAPIError: 400 Tool choice must be auto" on custom models
   - **重要性**：使用自定义模型（如通过OpenRouter注册的模型）时，手动/自动压缩均失败，阻碍了自定义模型用户的核心工作流。
7. **[#4840](github/copilot-cli Issue #4840)** [triage] BYOK Copilot CLI not working anymore with Deepseek
   - **重要性**：BYOK 模式下 Deepseek 报错 JSON 反序列化失败（unknownvariant `custom`），导致自带模型无法正常运行。
8. **[#4900](github/copilot-cli Issue #4900)** [triage] config.json trustedFolders lost when concurrent sessions overwrite the file on exit
   - **重要性**：并发会话退出时互相覆盖 `config.json`，导致 `trustedFolders` 等托管状态丢失，影响多会话协作的可靠性。
9. **[#4003](github/copilot-cli Issue #4003)** [area:models] Support custom model endpoint in Copilot CLI (like VS Code)
   - **重要性**：社区强烈呼吁支持类似VS Code的自定义模型端点配置，以满足本地模型开发和企业私有模型接入需求。
10. **[#4927](github/copilot-cli Issue #4927)** [triage] GPT-6 Astra: long_context tier reports 872k prompt tokens while model capabilities report 1,050k
    - **重要性**：模型目录中 GPT-6 Astra 的上下文窗口限制与实际计费层级不一致，可能导致开发者误判上下文容量及计费预期。

## 4. 重要 PR 进展
过去24小时内仅有 1 条 PR 更新：

1. **[#4770](github/copilot-cli PR #4770)** [OPEN] Document the WebSocket responses opt-out
   - **内容**：针对网络阻断 WebSocket 连接或会话因 `400 input item ID does not belong to this connection` 失败的情况，记录了退出 WebSocket 传输的替代方案（escape hatch），为传输层异常提供恢复文档。

## 5. 功能需求趋势
综合所有 Issues，社区最关注的功能方向主要集中在以下四个维度：

*   **自定义模型与端点支持**：随着 BYOK 和私有化部署需求激增，如何支持自定义模型端点、解决自定义模型在压缩和工具调用上的兼容性（如 #4003, #4646, #4840）成为核心诉求。
*   **会话稳定性与性能优化**：长会话场景下的内存泄漏、事件存储耗尽、队列死锁以及压缩失败重试风暴（如 #4639, #4755, #4780）是当前最亟待解决的底层稳定性问题。
*   **认证与状态管理健壮性**：并发场景下的配置覆盖、认证令牌刷新失效、以及托管设置（managed settings）的同步失败（如 #4900, #4929, #4556）

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-09-23

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **核心里程碑**：发布 **v1.52.0**，正式将 Python 版 `kimi-cli` 入口重定向至新版 TypeScript 实现的 Kimi Code CLI，标志着旧仓库完成“归档迁移”闭环（对应 PR #2666、#2659）。
- **Web 端体验修复**：合并 PR #2667，修复 CJK 输入法合成态下误触发 Enter 提交的长期痛点。
- **生态兼容推进**：PR #2656 为 OpenCode Go 宿主补齐 `x-opencode-session` 头，解决 400 报错，推进多 Agent 协议互通。
- **依赖集中升级**：Dependabot 批量提交 5 个依赖更新 PR（`agent-client-protocol`、`ruff`、`rich`、`fastapi`），技术债偿还进入常态化。

---

## 2. 版本发布
### v1.52.0 — Migration Release
- **核心变更**：`kimi-cli` (Python) 入口点短路跳转至新版 Kimi Code CLI (TypeScript) 安装器。
- **背景**：配合 #2659 归档 Python 仓库、PyPI `kimi-code` 包置墓碑版本，彻底切换技术栈。
- **影响**：`uv tool install kimi-cli` 现在将直接落地新版 CLI，旧代码库不再维护功能迭代。
- **完整日志**：[compare/1.51.0...1.52.0](https://github.com/MoonshotAI/kimi-cli/compare/1.51.0...1.52.0)

---

## 3. 社区热点 Issues
| # | 标题 | 关注理由 | 社区反应 |
|---|------|----------|----------|
| **[#2336](https://github.com/MoonshotAI/kimi-cli/issues/2336)** | **[Bug] Session corruption under memory pressure: lost conversation + 400 tool_call response error on resume** | **高优先级**：内存压力导致会话状态损坏、恢复时工具调用返回 400，属于数据完整性核心缺陷，影响长任务可靠性。 | 2 条评论讨论复现路径，暂无 workaround，需核心组介入根因分析。 |

> 过去 24h 仅 1 条 Issue 更新，说明社区焦点已从“提新 Bug”转向“验证迁移稳定性”。

---

## 4. 重要 PR 进展
| # | 标题 | 类型 | 核心内容 | 状态 |
|---|------|------|----------|------|
| **[#2666](https://github.com/MoonshotAI/kimi-cli/pull/2666)** | feat(cli): short-circuit entry points to a Kimi Code installer | 🚀 Feature | Python 入口点重定向至 TS 版安装器，完成迁移闭环。 | **Merged → v1.52.0** |
| **[#2667](https://github.com/MoonshotAI/kimi-cli/pull/2667)** | fix(web): guard IME composition Enter keydowns | 🐛 Fix | WebKit 下 CJK 输入法合成态 `keyCode===229` 误触发提交，加入兼容性守卫。 | **Merged** |
| **[#2656](https://github.com/MoonshotAI/kimi-cli/pull/2656)** | fix(llm): send x-opencode-session for OpenCode Go hosts | 🔧 Compat | 识别官方 OpenCode 域名，自动注入 `x-opencode-session` 头，修复 400 报错。 | **Open** (待 Review) |
| **[#2664](https://github.com/MoonshotAI/kimi-cli/pull/2664)** | chore(deps): bump agent-client-protocol 0.8.0 → 0.12.1 | 📦 Deps | ACP Python SDK 大版本跟进，含协议新特性与破坏性变更适配。 | **Open** |
| **[#2665](https://github.com/MoonshotAI/kimi-cli/pull/2665)** | chore(deps-dev): bump ruff 0.14.14 → 0.16.8 | 📦 Deps | Linter 升级，修复规则误报、提升检查速度。 | **Open** |
| **[#2663](https://github.com/MoonshotAI/kimi-cli/pull/2663)** | chore(deps): bump rich 14.2.0 → 15.0.0 | 📦 Deps | 终端渲染库主版本升级，放弃 Python 3.8 支持，含 Breaking Changes 需验证。 | **Open** |
| **[#2662](https://github.com/MoonshotAI/kimi-cli/pull/2662)** | chore(deps): bump fastapi 0.128.0 → 0.141.1 | 📦 Deps | Web 框架累积修复，含安全补丁与性能优化。 | **Open** |
| **[#884](https://github.com/MoonshotAI/kimi-cli/pull/884)** | chore(deps-dev): bump ruff 0.14.14 → 0.15.0 | 📦 Deps | 旧 Dependabot PR，已被 #2665 取代，建议关闭。 | **Stale** |

> **小结**：1 个里程碑 Feature、1 个用户体验 Fix、1 个协议兼容 Fix、5 个依赖升级（含 1 个过期 PR）。

---

## 5. 功能需求趋势
从近期 Issue/PR 模式推断，社区关注点集中在三大方向：
1. **多 Agent 互操作**  
   - PR #2656 引入 `x-opencode-session`，显式适配 OpenCode Go；  
   - `agent-client-protocol` 狂升 4 个小版本（0.8→0.12），说明 ACP 生态正快速演进，Kimi 需紧跟协议标准。
2. **Web/前端体验打磨**  
   - IME 兼容性修复（#2667）反映中日韩开发者真实使用场景被重视；  
   - `rich` 15.0 升级暗示 TUI 重构或增强在路上。
3. **技术栈彻底切换与债务清理**  
   - Python 仓库归档、PyPI 墓碑、入口点短路、依赖批量升级，标志着“Python 时代”正式谢幕，TypeScript 版将成为唯一维护主线。

---

## 6. 开发者关注点
| 痛点 / 需求 | 证据 | 优先级 |
|-------------|------|--------|
| **会话持久化可靠性** | #2336 内存压力下会话损坏、恢复失败，阻塞长任务场景 | 🔴 Critical |
| **跨平台输入法支持** | #2667 修复 WebKit/IME 组合键冲突，CJK 用户高频痛点 | 🟠 High |
| **OpenCode / ACP 生态互通** | #2656 补齐 Session 头，#2664 升级 ACP SDK，多 Agent 协作刚需 | 🟠 High |
| **依赖版本锁定与供应链安全** | 5 个 Dependabot PR 同日涌现，`rich` 15.0 破坏 3.8 兼容性需评估 | 🟡 Medium |
| **迁移文档与工具链平滑度** | v1.52.0 仅做入口重定向，缺乏配置迁移、插件兼容指引 | 🟡 Medium |

---

> **下一步建议**：  
> 1. **立即复现 #2336** 并给出热修复或 workaround，避免生产环境数据丢失；  
> 2. **合并 #2656** 并补齐 OpenCode 兼容测例，纳入 CI；  
> 3. **评估 `rich` 15.0 / `fastapi` 0.141 破坏性变更**，制定最低 Python 版本策略（若 TS 版已完全接管则可忽略）；  
> 4. **发布迁移指南**（配置、插件、环境变量映射），降低存量用户切换成本。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报（2026‑09‑23）**  

---

### 1. 今日速览  
- 本日无新版本发布，社区活动集中在 **Issue 修复与功能增强** 上。  
- 高关注度的问题围绕 **VSCode 扩展失效、付费订单异常、模型提供商兼容性以及跨平台 UI/稳定性** 四个维度展开。  
- 多个 PR 已合并，主要涉及 **SSE 帧容错、AI SDK V2 使用统计、项目排序、代码模式增强以及 TUI 细节优化**。

---

### 2. 版本发布  
> 今日（2026‑09‑23）未有新リリース。  

---

### 3. 社区热点 Issues（精选 10 条）  

| # | 标题 | 评论 | 关注点 & 社区反应 | 链接 |
|---|------|------|-------------------|------|
| #10119 | VSCode extension “OpenCode Beta” - “There is no data provider registered that can provide view data.” | 23 | VSCode 侧边栏打开后仅显示错误信息，影响插件可用性。社区提出重新注册数据提供者或检查扩展激活顺序的修复方案。 | [链接](https://github.com/anomalyco/opencode/issues/10119) |
| #49768 | [Billing] Paid OpenCode Go subscription is shown as inactive and requests fail with Account.Disabled | 6（OPEN） | 付费用户在 Console 迁移后订阅显示为不可用，导致所有 Go 模型请求失败。付费凭证已提供，社区强烈要求尽快恢复服务并改善迁移过程的透明度。 | [链接](https://github.com/anomalyco/opencode/issues/49768) |
| #50201 | opencode account lost in dashboard migration | 4（OPEN） | 类似于 #49768，工作空间在迁移后被重置为个人组织，丢失 Go 订阅与使用记录。用户期望能够恢复原始工作空间或提供手动迁移工具。 | [链接](https://github.com/anomalyco/opencode/issues/50201) |
| #25130 | opencode jumping into a difference language -- How do I fix it? | 11 | 使用 Big Pickle 时模型输出会突然切换语言（如中文↔英文），破坏提示一致性。社区讨论是否需要在请求中强制语言或改进模型路由。 | [链接](https://github.com/anomalyco/opencode/issues/25130) |
| #6479 | opencode reads agents.md from parent directories | 11 | 配置文件向上查找导致子项目意外继承父级 agents.md，造成行为不可预期。建议限制读取范围或提供显式覆盖机制。 | [链接](https://github.com/anomalyco/opencode/issues/6479) |
| #29757 | Opencode + Qwen gives JSON output instead of writing to disk | 10 | 与 Qwen2.5‑code:7b 结合时，写文件请求被原样返回为 JSON，未实际落盘。怀疑是工具调用序列化问题，需检查 AI SDK 适配层。 | [链接](https://github.com/anomalyco/opencode/issues/29757) |
| #38378 | [Bug] OpenCode Go: kimi-k3 fails on /v1/messages with “Upstream request failed” while /v1/chat/completions succeeds | 5 | 同一模型在不同端点（Anthropic‑compat vs OpenAI‑compat）表现不一，提示网关或请求构造上的差异。社区要求统一错误日志并提供 fallback 机制。 | [链接](https://github.com/anomalyco/opencode/issues/38378) |
| #21277 | [Windows] Terminal left with raw ANSI escape codes after crash (PowerShell) | 5 | 意外退出时终端残留原始转义序列，影响后续命令可读性。建议在退出前恢复终端属性或增加清理钩子。 | [链接](https://github.com/anomalyco/opencode/issues/21277) |
| #38770 | Background subagent notification silently reverts manually-selected model to config default | 4 | 后台子代理通知会把用户手动选择的模型重置为 opencode.json 中的默认值，削弱灵活性。社区期望保持用户覆盖或提供明确的 opt‑out 开关。 | [链接](https://github.com/anomalyco/opencode/issues/38770) |
| #31219 | Background hook stderr output can be painted into the input box until terminal repaint | 4 | 子进程的 stderr 被直接写入输入框，导致输入被干扰。需在输出重定向或延迟刷新时做防抖处理。 | [链接](https://github.com/anomalyco/opencode/issues/31219) |

---

### 4. 重要 PR 进展（精选 10 条）  

| PR # | 标题 | 类型 | 主要内容 & 影响 | 链接 |
|------|------|------|----------------|------|
| #50790 | feat(core): order projects by recent activity | 新功能 | 按最近使用时间排序项目列表，提升快速切换体验。 | [链接](https://github.com/anomalyco/opencode/pull/50790) |
| #50793 | fix(ai): ignore bare null SSE frames | Bug 修复 | 忽略 OpenAI‑compatible 代理中出现的 `data: null` 帧，防止流中断（修复 #50314）。 | [链接](https://github.com/anomalyco/opencode/pull/50793) |
| #50788 | fix(client): throw declared API errors as Error instances | Bug 修复 | 确保客户端对已声明的错误状态抛出真正的 `Error` 对象，便于上层捕获和统一错误处理。 | [链接](https://github.com/anomalyco/opencode/pull/50788) |
| #50791 | feat(codemode): add tagged templates and String.raw | 新功能 | 支持 Tagged Template Literals 与 `String.raw`，使 SQL、路径等 DSL 在代码模式下可被正确解析。 | [链接](https://github.com/anomalyco/opencode/pull/50791) |
| #50797 | fix(core): keep usage and finish reason from AI SDK V2 providers | Bug 修复 | 保留 V2 提供商返回的 token 使用量与结束原因，恢复自动补全及成本追踪功能。 | [链接](https://github.com/anomalyco/opencode/pull/50797) |
| #50796 | fix(core): ignore impossible usage reports in compaction preflight | Bug 修复 | 在会话压缩前过滤掉明显不合理的 token 估算，防止误触压缩导致数据丢失。 | [链接](https://github.com/anomalyco/opencode/pull/50796) |
| #50620 | fix(tui): restore shared model preferences in mini | Bug 修复（OPEN） | `opencode mini` 现在会读取 `model.json` 中最近使用的模型，保持与主 TUI 一致的偏好。 | [链接](https://github.com/anomalyco/opencode/pull/50620) |
| #50798 | feat(tui): show effective subagent model and variant in v2 tab | 新功能（OPEN） | 在子代理标签页展示每个子会话实际使用的模型与变体，便于调试与审计。 | [链接](https://github.com/anomalyco/opencode/pull/50798) |
| #50783 | fix: show API error messages in remaining CLI and TUI paths | Bug 修复 | 补充剩余的 CLI/TUI 路径，确保 API 错误信息以 toast 形式可见，提升故障定位效率。 | [链接](https://github.com/anomalyco/opencode/pull/50783) |
| #50785 | fix(ui): retain Kimi icons for renamed coding plan providers | Bug 修复 | 重命名的 Kimi 编程方案提供者现在能正确映射到对应图标，避免回退到通用图标。 | [链接](https://github.com/anomalyco/opencode/pull/50785) |

---

### 5. 功能需求趋势（从所有 Issues 提炼）  

| 需求方向 | 体现的 Issue / PR | 趋势说明 |
|----------|------------------|----------|
| **模型提供商兼容性** | #29757（Qwen），#38378（kimi‑k3），#24636（Crof AI），#50793（SSE 框架） | 社区持续追求对更多本地/第三方模型的无缝接入，尤其是在流式响应和工具调用方面的健壮性。 |
| **IDE / 编辑器集成** | #10119（VSCode 扩展），#50790（项目排序） | 插件稳定性与项目导航体验是开发者日常使用的关键点。 |
| **账号与计费系统** | #49768（订阅失效），#50201（工作空间丢失） | 付费用户对计费可见性和服务连续性有强烈期待，迁移过程需要更透明且可回滚。 |
| **跨平台 UI/稳定性** | #21277（Windows ANSI 剩余），#38770（后台子代理模型重置），#31219（stderr 干扰输入） | 减少崩溃残留、统一模型选择行为以及改善终端交互是提升可用性的重点。 |
| **配置与项目隔离** | #6479（agents.md 向上查找），#50372（OpenTUI 渲染升级） | 配置文件作用域的明确化以及渲染层的性能优化正被反复提及。 |
| **使用量统计与成本可视化** | #50797/#50796（使用量保存与预检） | 开发者希望获得准确的 token 使用报告以控制成本，尤其在后台子代理和自动研究场景中。 |

---

### 6. 开发者关注点（痛点 & 高频需求）  

1. **稳定性与错误恢复**  
   - 频繁出现的崩溃导致终端残留 ANSI、会话丢失或模型被意外重置。开发者期望在异常路径中统一清理状态、提供可重试的机制以及更详细的错误日志。  

2. **计费与账户可靠性**  
   - 付费订阅在后台迁移后出现“不活跃”或被错误重置为个人组织的情况，直接影响服务可用性。社区呼吁增加迁移前后的校验步骤、提供手动恢复入口以及更透明的计费仪表盘。  

3. **模型提供商适配层健壮性**  
   - 流式响应中的异常帧（如 `data: null`）、不同端点（OpenAI‑compat vs Anthropic‑compat）行为不一致导致工具调用失败。需要在 SDK

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-23

> 来源：`earendil-works/pi`（数据截至 2026-09-23）

---

## 一、今日速览

- **v0.87.1 发布**，新增 Claude Opus 5.5 / GPT-6 Sol / GPT-6 Luna 支持，Grok 4.7 设为默认模型，并修复多项 0.86.x 回归问题。
- 社区聚焦 **LiteLLM 代理兼容性**、**Fullscreen 渲染性能**、**RPC steer 丢失** 三个高讨论度回归。
- PR 侧推进 **Yolo-Auto 提供商**、**主题颜色重构**、**Codex 协议对齐** 等重要功能。

---

## 二、版本发布

### v0.87.1
- **新模型**：Claude Opus 5.5、GPT-6 Sol、GPT-6 Luna（通过 GitHub Copilot 等支持商可用）。
- **默认变更**：Grok 4.7 升级为默认模型。
- 修复若干 0.86.x 回归，提升稳定性。

---

## 三、社区热点 Issues（精选 10）

| # | 标题 | 评论 | 要点 |
|---|------|------|------|
| [#7885](https://github.com/earendil-works/pi/issues/7885) | npm search 不索引新 pi-package | 13 | `pi-affix-prompt` 无法被搜索，gallery 镜像 npm search 机制失效 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | `PI_OFFLINE` 静默禁用模型发现 | 12 | 文档与实际行为不符，会话级模型目录拉取被阻断 |
| [#9843](https://github.com/earendil-works/pi/issues/9843) | LiteLLM 代理下长请求断连 | 10 | 0.86.x 回归，OpenAI-compatible 提供商间歇性 `APIConnectionError` |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | Fullscreen 滚轮速度过慢 | 10 (👍6) | UX 痛点，滚动体验劣于普通模式 |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | RPC steer 无法关联扩展输入 | 10 | 0.86.0 回归，客户端无法可靠追踪排队操作 |
| [#9652](https://github.com/earendil-works/pi/issues/9652) | Fable 拒绝压缩思考块 | 7 (👍2) | `serializeConversation` 触发 Anthropic Classifier 拦截 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | Fullscreen 大文本逐帧重渲染 | 7 | 2 核机器 CPU 饱和，性能回归 |
| [#9884](https://github.com/earendil-works/pi/issues/9884) | 启动时默认模型被回退替换 | 4 | 4/20 概率出现，扩展注册模型被错误选中 |
| [#9852](https://github.com/earendil-works/pi/issues/9852) | MCP 工具名含冒号触发 400 | 2 | `function_call.name` 未净化，OpenAI Responses API 校验失败 |
| [#9787](https://github.com/earendil-works/pi/issues/9787) | SDK 嵌入后 undici 污染全局调度器 | 2 | `@earendil-works/pi-coding-agent` 安装时带出嵌套 undici，破坏 abort/streaming |

---

## 四、重要 PR 进展（精选 10）

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| [#9934](https://github.com/earendil-works/pi/pull/9934) | Yolo-Auto 提供商 | feat | 内置 OpenAI 兼容订阅网关，支持 `/v1/models` 按计划发现 |
| [#9569](https://github.com/earendil-works/pi/pull/9569) | JSON 工具参数强转 | fix | 模型误将 object/array 编码为字符串时自动恢复 |
| [#9570](https://github.com/earendil-works/pi/pull/9570) | Gemini TOO_MANY_TOOL_CALLS 映射 | fix | 新增 FinishReason 分支，防止崩溃 |
| [#9889](https://github.com/earendil-works/pi/pull/9889) | manifest 资源发现对齐 | fix | 统一解析管道，支持点相对扩展 glob |
| [#9908](https://github.com/earendil-works/pi/pull/9908) | Fable 分割摘要拒绝修复 | fix | 改写摘要提示词，关闭 #9652 |
| [#9926](https://github.com/earendil-works/pi/pull/9926) | 自定义提供商显示名 | feat | `models.json` 支持 `providers.<id>.name`，状态栏展示 |
| [#8398](https://github.com/earendil-works/pi/pull/8398) | 颜色值与主题重构 | feat | TUI 直接暴露颜色 API，保留向后兼容 |
| [#9920](https://github.com/earendil-works/pi/pull/9920) | 忽略空 Codex 最终答案 | fix | 防止重放空白 signed answer，关闭 #9918 |
| [#9902](https://github.com/earendil-works/pi/pull/9902) | 切换模型时保留思考等级 | fix | 防止全局默认覆盖手动选择 |
| [#9901](https://github.com/earendil-works/pi/pull/9901) | 向扩展暴露流式事件 | feat | `onProviderStreamEvent` 支持 Anthropic/OpenAI/Codex |

---

## 五、功能需求趋势

1. **新模型/新提供商接入**：Claude Opus 5.5、GPT-6、Grok 4.7、Yolo-Auto、opencode-go 持续加入，模型目录治理成为核心。
2. **扩展性与 SDK 能力**：流式事件暴露、厂商响应字段访问、`read/bash` 技能清单注入，扩展 API 诉求明显。
3. **性能与渲染优化**：Fullscreen 模式下的重渲染与滚动性能是高频痛点。
4. **会话与压缩机制**：自动压缩阈值、思考块处理、会话元数据一致性。
5. **文档与开发者体验**：RPC 接口文档、`invalidate()` 必要说明、`--no-extensions` 标志修正。

---

## 六、开发者关注点

- **回归敏感**：0.86.x 系列 LiteLLM 断连、RPC steer 丢失、模型发现异常多次被报，版本升级门槛升高。
- **Provider 字段透明**：`Meta-Issue #9784` 要求访问厂商专属响应字段，当前 `AssistantMessage` 被视为 "Procrustean bed"。
- **SDK 嵌入副作用**：嵌套 undici 污染全局 dispatcher，影响 Fastify 等嵌入式宿主。
- **配置语义清晰化**：`PI_OFFLINE` 范围、技能过滤 `-` vs `!`、`thinking.display` 可配置性。
- **本地模型兼容**：llama.cpp 崩溃、Ollama 路径识别问题仍零星出现。

---

*日报由技术分析师基于 GitHub 公开数据自动生成，建议结合仓库 CHANGELOG 与 PR 评审记录做最终决策参考。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-23

## 一、今日速览

今日社区活跃度持续走高，Issues 与 PRs 合计新增约 50 条。核心焦点集中在 **Managed Agent 架构落地**、**CLI/Linux 粘贴板问题修复** 以及 **Agent-Prepared Batch API 工作流** 三个方向。同时，Desktop 与 Web Shell 端的 UI 可用性修复（软键盘适配、边栏对齐）也在并行推进。

---

## 二、版本发布

| 版本 | 类型 | 更新要点 |
|------|------|----------|
| [v0.24.5-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5-preview.0) | 预览版 | 修复 deferred-tool bridge 导致的文档/功能陈旧问题 |
| [v0.24.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.4) | 正式版 | 新增 monitor tool 到系统提示词引导；无已知破坏性变更 |
| [v0.24.4-nightly.20260922](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.4-nightly.20260922.99bf4ce86b) | 夜 build | 同步上述修复与 daemon 批量工作区能力 |
| [desktop-v0.24.4](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.4) | Desktop 版 | 修复 review 覆盖率统计精度问题 |

---

## 三、社区热点 Issues（精选 10 个）

1. **[#12380] Managed Agent 双路径架构提案** ⭐ 10评论  
   由 doudouOUC 提出的 P2 级功能请求，定义分阶段 Managed Agent 架构：将 TypeScript agent loop 与模型推理解耦，赋予 Session 持久化所有权和可恢复工具执行能力。这是 multi-agent 路线图的关键节点，社区关注度极高。  
   🔗 [Issue #12380](https://github.com/QwenLM/qwen-code/issues/12380)

2. **[#12449] TUI 移动端软键盘下丢失 transcript 行** ⭐ 10评论  
   报告 ink 7.0.3 导致的渲染回归问题：`ui.useTerminalBuffer: false` 模式下每缩小一次行高就吞掉一行 transcript，Virtualized History 不受影响。已被确认为稳定复现的 bug。  
   🔗 [Issue #12449](https://github.com/QwenLM/qwen-code/issues/12449)

3. **[#12417] CLI 工具执行沙箱设置加固跟进** ⭐ 7评论  
   P2 安全类问题，PR #12267 将 Linux bubblewrap  confinement 从 CLI 全局粒度下沉到单工具执行后，历经约 5 轮审查仍未合入，需要进一步讨论确定审阅规则。  
   🔗 [Issue #12417](https://github.com/QwenLM/qwen-code/issues/12417)

4. **[#12381] Daemon HTTP 超时丢失 session-create 结果** ⭐ 7评论  
   P2 级可靠性问题：`POST /session` 在浏览器收到 gateway timeout 后仍可能成功创建 session，但客户端无法获取 session ID，导致无法安全继续。影响 web-shell 和 SDK 场景。  
   🔗 [Issue #12381](https://github.com/QwenLM/qwen-code/issues/12381)

5. **[#12488] Linux/WSL 粘贴板静默失败** ⭐ 6评论  
   当 `wl-paste`/`xclip` 缺失时 Ctrl+V 完全无任何错误提示或回退，图像和文本均无法粘贴。已关闭并由 PR #12489 修复。  
   🔗 [Issue #12488](https://github.com/QwenLM/qwen-code/issues/12488)

6. **[#12164] Web Shell 作为实时语音 Live Host** ⭐ 5评论  
   P2 功能请求：让 Web Shell 本身成为 `qwen3.5-omni-plus-realtime` 的音频端点，使实时语音可在任意浏览器中使用，不再依赖 Mac 原生 Qwen Live Host.app。  
   🔗 [Issue #12164](https://github.com/QwenLM/qwen-code/issues/12164)

7. **[#12424] Bundled-reference 路由无法感知 per-agent 工具策略** ⭐ 5评论  
   当 subagent 被 skill 拒绝时，`resolveBundledReferenceRoute` 仍可能给出用户无法跟随的 pointer，指向核心的工具权限与 subagent 协同问题。  
   🔗 [Issue #12424](https://github.com/QwenLM/qwen-code/issues/12424)

8. **[#11908] ACP oversized notification 撕裂通道** ⭐ 5评论  
   P1 严重问题：`available_commands_update` 超 `MAX_JSON_NODES` (10000) 时触发 `ndjson_invalid_message`，通道被关闭、进程被 SIGKILL，且后续请求全部 404。影响 serve/acp 稳定性。  
   🔗 [Issue #11908](https://github.com/QwenLM/qwen-code/issues/11908)

9. **[#12460] Git commit --amend 网关在 Auto 模式下形同虚设** ⭐ 4评论  
   安全类问题：`sessionCommitShas` 始终未填充，导致本应被保护的"会话内 agent 修改"豁免成为死代码，`git commit --amend` 在 Auto 模式下一律被阻。  
   🔗 [Issue #12460](https://github.com/QwenLM/qwen-code/issues/12460)

10. **[#12440] 单工作区 daemon 上无法打开 Live Voice session** ⭐ 4评论  
    P1 bug：侧边栏列出 Voice chat 但点击即报错 `Daemon does not advertise multi-workspace session routing`，在单工作区 daemon 上完全不可用。  
    🔗 [Issue #12440](https://github.com/QwenLM/qwen-code/issues/12440)

---

## 四、重要 PR 进展（精选 10 个）

1. **[#12508] fix(cli): 报告剪贴板不可用状态**  
   作者：yiliang114 | 修复 native module 抛异常时未通过 `onUnavailable` 回调汇报的问题，填补剪贴板错误处理的空白路径。  
   🔗 [PR #12508](https://github.com/QwenLM/qwen-code/pull/12508)

2. **[#12492] feat(cli): Agent-Prepared Batch API 工作流**  
   作者：yiliang114 | 在 #11874 批次 API 传输基础上构建智能工作流：用户输入 `/batch --api <task>` 后，agent 自动判断适配度、采样文件、撰写计划并执行确定性的批量处理。  
   🔗 [PR #12492](https://github.com/QwenLM/qwen-code/pull/12492)

3. **[#12506] feat(cli): Managed Runtime Attestation Worker**  
   作者：doudouOUC | 新增隐藏的 `qwen managed-runtime-worker` 启动路径，仅加载最小化 attestation 运行时，不加载 CLI/模型/Harness/Session 等模块，提供安全证明能力。  
   🔗 [PR #12506](https://github.com/QwenLM/qwen-code/pull/12506)

4. **[#12463] fix(core): 注册 session commits 以使 amend 豁免可达**  
   作者：yiliang114 | 修复 `sessionCommitShas` 注册的生产端管线，使 Auto 模式下 `git commit --amend` 的"会话内 agent 修改"豁免机制真正生效。  
   🔗 [PR #12463](https://github.com/QwenLM/qwen-code/pull/12463)

5. **[#12462] fix(web-shell): 软键盘上方保持 composer 控件可达**  
   作者：wenshao | 修复移动端三种触摸 composer 布局问题，workspace/Git 行高现在计入 composer 高度上限，确保附件空间不被挤压。  
   🔗 [PR #12462](https://github.com/QwenLM/qwen-code/pull/12462)

6. **[#12437] feat(workflows): 为 subagent prompt 标注来源上下文**  
   作者：qqqys | 工作流 subagent 的首条用户消息现在会标明任务文本来源（文件、上一 agent 输出或 host args），提升 multi-agent 可追溯性。  
   🔗 [PR #12437](https://github.com/QwenLM/qwen-code/pull/12437)

7. **[#12452] feat(web-shell): 支持侧边栏顶部置顶工作区**  
   作者：jpg1024 | 新增工作区置顶功能，按置顶时间排序，状态在 daemon 重启后持久化。修复 #12444。  
   🔗 [PR #12452](https://github.com/QwenLM/qwen-code/pull/12452)

8. **[#12495] fix(core): 将 sed --quiet/--silent 归类为只读命令**  
   作者：waybarrios | GNU sed 长拼写 `--quiet`/`--silent` 现在与短拼写 `-n` 同等对待，避免不必要的确认弹窗。  
   🔗 [PR #12495](https://github.com/QwenLM/qwen-code/pull/12495)

9. **[#12403] feat(acp): 投递被接受的跨会话消息至目标 session**  
   作者：qqqys | ACP 驱动的 session 现在对跨会话消息进行门控过滤：接受门控通过的消息作为后台 turn 执行，拒绝的消息被正确拦截。  
   🔗 [PR #12403](https://github.com/QwenLM/qwen-code/pull/12403)

10. **[#12358] feat(managed-agent): 添加独立 Managed Agent 栈**  
    作者：doudouOUC | 提供从 resident Harness 到 Java 控制平面再到 session-scoped Tool Runtimes 的端到端预览，包含持久化 Managed Session 记录和 Spring Boot standalone 支持。  
    🔗 [PR #12358](https://github.com/QwenLM/qwen-code/pull/12358)

---

## 五、功能需求趋势

从 Issues 和 PRs 的分布，社区当前最关注的几大方向为：

| 方向 | 热度 | 代表 Issue/PR |
|------|------|---------------|
| **Multi-Agent / Managed Agent** | 🔥🔥🔥 | #12380, #12358, #12437, #12470 |
| **跨平台粘贴板（Linux/WSL）** | 🔥🔥🔥 | #12488, #12505, #12503, #12508 |
| **实时语音（Live Voice）** | 🔥🔥 | #12164, #12440 |
| **Daemon / ACP 稳定性** | 🔥🔥 | #11908, #12381, #10978 |
| **IDE 集成（VS Code Companion）** | 🔥 | #12501 |
| **Session / Token / Memory 管理** | 🔥 | #12257, #12380 |
| **Web Shell UI/UX** | 🔥 | #12449, #12452, #12462, #12453 |

---

## 六、开发者关注点

### 高频痛点
- **Linux 粘贴板体验差**：至少 4 个相关问题（#12488/#12505/#12504/#12503）集中在 Linux/WSL 下粘贴板静默失败、错误信息不准确、WSL2 powershell.exe 互操作缺失。这是 Linux 用户最大痛点。
- **Daemon 时序与可靠性**：HTTP 超时丢失 session ID（#12381）、ACP 通道被大通知撕裂（#11908）、跨 session 消息被拒（#12403）、Live Voice 在单工作区 daemon 上不可用（#12440）—— daemon 作为核心守护进程的可靠性问题集中暴露。
- **安全 gates 形同虚设**：`git commit --amend` 的 Auto 模式豁免（#12460）和 sessionCommitShas 未注册问题，反映安全防护存在"注册但未启用"类的系统性风险。

### 高频需求
- **Session 管理与持久化**：Managed Agent 架构（#12380）、session 恢复（#12381）、notes-based compaction（#12257）形成完整的 session 生命周期管理需求链。
- **移动端/Web Shell 适配**：软键盘适配、边栏对齐、composer 交互等 UI 修复密集出现（#12449、#12453、#12462），反映移动端使用场景正在快速增长。
- **MCP 工具可靠性**：MCP 图片超限（#12471）、MCP 工具状态误判（#12496）等 MCP 集成问题持续涌现。

### 值得关注的新能力
- **Batch API 工作流**（#12492）：Agent 自主判断并执行批量任务，有望大幅扩展 CLI 场景下的自动化能力边界。
- **Managed Runtime Attestation**（#12506）：独立于主流程的安全运行时，为供应链安全提供基础设施级能力。
- **Workspace Pin 与 Worktree 管理**（#12452、#12154）：Web Shell git 工作流逐步完善，对企业级多仓库场景友好。

---

*日报生成时间：2026-09-23 | 数据来源：github.com/QwenLM/qwen-code*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



好的，这是一份为您生成的 2026-09-23 DeepSeek TUI (Codewhale) 社区动态日报。

---

### **2026-09-23 DeepSeek TUI (Codewhale) 社区动态日报**

#### **1. 今日速览**
Codewhale 项目迎来了重要的 **v0.10.0 版本发布**，标志着项目从 `deepseek-tui` 到 `codewhale` 的品牌与技术架构升级。社区讨论热度集中在核心架构重构（如文件拆分、事件循环优化）、可观测性增强（Token与工具诊断）以及 IDE 集成等前瞻性功能上。过去24小时内，社区贡献了多个高质量 PR，主要集中在 Bug 修复、文档完善和新客户端（Chrome 扩展）的开发上。

#### **2. 版本发布**
**v0.10.0** 是一次里程碑式更新，核心变化是推出公共产品 **Codewhale**。
- **品牌与技术标识统一**：`codewhale` 命令、npm 包及发布资产名称均采用小写技术标识符。旧的 `deepseek-tui` 包已被标记为废弃，不再接收更新。
- **架构演进**：此版本为后续的架构重构（如 Issues 中讨论的巨石文件拆分、MCP 栈统一）奠定了基础。
- **相关链接**：[GitHub Release](https://github.com/Hmbown/Codewhale/releases/tag/v0.10.0)

#### **3. 社区热点 Issues**
以下挑选了 10 个最受关注的 Issue，涵盖了架构、功能、体验等多个层面：

1.  **#6011 - Token 与工具使用诊断 (9条评论)**
    - **重要性**：直接关系到 AI 模型的使用成本和效率。社区强烈希望获得细粒度的 Token 消耗（按组件、按模型、缓存命中率）、工具调用错误模式等数据。
    - **社区反应**：高度关注，被视为提升开发效率和成本控制的关键功能。
    - **链接**：[Hmbown/Codewhale Issue #6011](https://github.com/Hmbown/Codewhale/issues/6011)

2.  **#5586 - 拆分巨型源文件 (8条评论)**
    - **重要性**：直接指向代码库的可维护性。`lib.rs` 等文件已膨胀至近 19k 行，严重阻碍开发。此 Issue 是核心重构计划的一部分。
    - **社区反应**：开发者普遍认同其必要性，是长期的技术债务清理。
    - **链接**：[Hmbown/Codewhale Issue #5586](https://github.com/Hmbown/Codewhale/issues/5586)

3.  **#6050 - 可插拔的 Agent 内存后端 (6条评论)**
    - **重要性**：打破现有硬编码的内存实现，允许集成如 `mem0` 等第三方记忆系统，为构建更复杂的 Agent 应用铺平道路。
    - **社区反应**：被视为一项重要的架构增强，吸引了对高级 Agent 功能感兴趣的开发者。
    - **链接**：[Hmbown/Codewhale Issue #6050](https://github.com/Hmbown/Codewhale/issues/6050)

4.  **#6142 - 统一两套 MCP 客户端栈 (5条评论)**
    - **重要性**：消除 `tui/src/mcp` 和 `crates/mcp` 之间的重复代码，降低维护成本并确保功能一致性。
    - **社区反应**：典型的“清理类”议题，获得维护者和技术社区的支持。
    - **链接**：[Hmbown/Codewhale Issue #6142](https://github.com/Hmbown/Codewhale/issues/6142)

5.  **#2342 - 输出文件点击预览 (5条评论)**
    - **重要性**：纯粹的用户体验优化，旨在减少用户在文件目录中查找结果的步骤，提升工作流效率。
    - **社区反应**：来自长期用户的直接需求，获得了积极反馈。
    - **链接**：[Hmbown/Codewhale Issue #2342](https://github.com/Hmbown/Codewhale/issues/2342)

6.  **#6036 - 澄清“Fleet”与“Agent”概念 (5条评论)**
    - **重要性**：解决用户界面和概念上的混淆，明确“Fleet”和“Agent”的职责与关系，是完善产品模型的关键。
    - **社区反应**：创始人亲自提出并认同此问题的紧迫性，表明了修复的决心。
    - **链接**：[Hmbown/Codewhale Issue #6036](https://github.com/Hmbown/Codewhale/issues/6036)

7.  **#4955 - 请求零沙箱/`--no-sandbox` 模式 (5条评论, 1 👍)**
    - **重要性**：直接反映部分开发者的核心痛点。内核级沙箱（Seatbelt）在某些本地开发场景下会中断基本命令，此功能将提升开发灵活性。
    - **社区反应**：获得了实质性支持（1个赞），说明有类似需求的用户不在少数。
    - **链接**：[Hmbown/Codewhale Issue #4955](https://github.com/Hmbown/Codewhale/issues/4955)

8.  **#6086 - 会话临时工作区与统一寻址方案 (4条评论)**
    - **重要性**：旨在整合临时文件、Agent Mail 和工作坊输出，为 Agent 提供一个统一的临时存储和通信层。
    - **社区反应**：属于前瞻性架构设计，获得了技术层面的关注。
    - **链接**：[Hmbown/Codewhale Issue #6086](https://github.com/Hmbown/Codewhale/issues/6086)

9.  **#5915 - Fleet 模型选择流程 (4条评论)**
    - **重要性**：细化 Agent 模型的管理和调度逻辑，从提供商选择到角色分配，为复杂的多 Agent 协作打下基础。
    - **社区反应**：被视为完善 Fleet 功能的关键设计环节。
    - **链接**：[Hmbown/Codewhale Issue #5915](https://github.com/Hmbown/Codewhale/issues/5915)

10. **#2323 - 中文输入法适配 (3条评论, 1 👍)**
    - **重要性**：直接影响中文用户的使用体验，涉及输入法候选词显示、拼音输入等问题。
    - **社区反应**：获得了来自中文社区的实际反馈和支持，是本地化工作的重要部分。
    - **链接**：[Hmbown/Codewhale Issue #2323](https://github.com/Hmbown/Codewhale/issues/2323)

#### **4. 重要 PR 进展**
以下是 10 个重要的 PR，展示了项目的实际开发进展：

1.  **#6408 - 新增 Yolo-Auto 兼容主机**
    - **功能**：将 Yolo-Auto（一个统一定价的 OpenAI Chat Completions 网关）作为数据驱动的兼容主机接入，扩宽了模型服务提供商的选择。
    - **链接**：[Hmbown/Codewhale PR #6408](https://github.com/Hmbown/Codewhale/pull/6408)

2.  **#6407 - 集成：网站第一波 + 0.10.1 CI/自动化 (OPEN)**
    - **功能**：面向未来的集成分支，内容包括重构网站 CSS、构建 GPUI 角色令牌等，旨在通过 CI 保证主分支代码质量。
    - **链接**：[Hmbown/Codewhale PR #6407](https://github.com/Hmbown/Codewhale/pull/6407)

3.  **#6406 - 修复会话与线程重复问题 (CLOSED)**
    - **修复**：解决了两个导致恢复会话或分支时创建重复线程和会话的身份标识 Bug，提升了数据一致性。
    - **链接**：[Hmbown/Codewhale PR #6406](https://github.com/Hmbown/Codewhale/pull/6406)

4.  **#6404 - 向原生客户端暴露用户定义的提供商路由 (CLOSED)**
    - **修复**：修复了用户自定义的 `[providers.<name>]` 路由无法被原生客户端（如 TUI）在提供商列表中看到的 Bug。
    - **链接**：[Hmbown/Codewhale PR #6404](https://github.com/Hmbown/Codewhale/pull/6404)

5.  **#6398 - 新增 Chrome 扩展客户端 Chromewhale (CLOSED)**
    - **功能**：开发了一个 Manifest V3 浏览器侧边栏，使用户可以在 Chrome 标签页内直接与本地 Codewhale 运行时交互，赋予模型额外工具能力。
    - **链接**：[Hmbown/Codewhale PR #6398](https://github.com/Hmbown/Codewhale/pull/6398)

6.  **#6392 - 八项内部测试修复 (CLOSED)**
    - **修复**：一次性合并了八项在 0.10.0 版本内部测试中发现的修复，包括计划模式下切换权限、未捕获的 panic 等，每项修复都附带了回归测试。
    - **链接**：[Hmbown/Codewhale PR #6392](https://github.com/Hmbown/Codewhale/pull/6392)

7.  **#6405 - 将文档/工作区迁移至字典骨架 (CLOSED)**
    - **功能**：重构了文档网站的国际化（i18n）实现，将 `docs/work` 的内容按语言拆分，消除了代码分支。
    - **链接**：[Hmbown/Codewhale PR #6405](https://github.com/Hmbown/Codewhale/pull/6405)

8.  **#6402 - 移除未使用的特性阶段和全局允许 (CLOSED)**
    - **功能**：清理了 `features.rs` 中的死代码允许属性，删除了未使用的 `Stage::Deprecated` 和 `Stage::Removed` 变体，简化了特性管理。
    - **链接**：[Hmbown/Codewhale PR #6402](https://github.com/Hmbown/Codewhale/pull/6402)

9.  **#6400 - 吞入仅存在于命名空间目录中的模型条目 (CLOSED)**
    - **修复**：修复了配置解析 Bug，确保仅在 `catalog.models` 命名空间映射中定义的模型能正确出现在模型列表中。
    - **链接**：[Hmbown/Codewhale PR #6400](https://github.com/Hmbown/Codewhale/pull/6400)

10. **#6399 - 为 `load_skill` 表面重新设定运行时合同预算 (CLOSED)**
    - **修复**：修复了因新增 `load_skill` 工具而导致的主 CI 流程失败问题，更新了运行时合同预算检查。
    - **链接**：[Hmbown/Codewhale PR #6399](https://github.com/Hmbown/Codewhale/pull/6399)

#### **5. 功能需求趋势**
从近期的 Issues 可以提炼出以下核心功能需求趋势：
- **可观测性与成本控制**：社区高度关注 Token 使用的精细化计量、工具调用监控和缓存效率分析。
- **架构现代化与可维护性**：持续推动巨石文件拆分、代码库统一（如 MCP 栈、配置层）和异步任务管理优化。
- **Agent 能力增强**：焦点在于可插拔的记忆后端、更清晰的多 Agent/Fleet 管理模型和工作流编排。
- **开发体验优化**：包括对沙箱限制的灵活性要求、更直观的 TUI 交互（如文件预览）和 IDE 集成。
- **多客户端与生态扩展**：向 Web、Chrome 扩展等多客户端形态发展，以及更广泛的第三方模型服务提供商集成。

#### **6. 开发者关注点**
开发者反馈中反复出现的痛点和高频需求包括：
- **沙箱限制的干扰**：部分开发者在本地开发时深受内核沙箱机制的困扰，强烈需要一种“无沙箱”的运行模式。
- **输入法兼容性**：特别是中文输入法的支持问题，直接影响全球非英语用户群体的使用体验。
- **概念与界面混淆**：如“Fleet”与“Agent”的重复和混淆，以及配置项在不同客户端间可见性不一致的问题。
- **性能与稳定性**：对运行时性能缺乏基准测试和性能门禁表示担忧，同时某些测试（如目录过滤）的挂起也指向潜在的稳定性问题。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*