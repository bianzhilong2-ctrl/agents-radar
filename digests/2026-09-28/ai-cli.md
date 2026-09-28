# AI CLI 工具社区动态日报 2026-09-28

> 生成时间: 2026-09-28 02:38 UTC | 覆盖工具: 9 个

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

**AI CLI 工具生态横向对比分析（2026‑09‑28）**  

---

### 1. 生态全景  
当前主流 AI CLI 工具普遍处于 **快速迭代与稳定性平衡** 的阶段：核心功能（代码生成、agent 调用、沙箱/容器隔离）已趋成熟，社区关注度已从“新特性涌入”转向 **跨平台兼容性、资源泄漏/数据一致性、以及交互可观测性** 三大痛点。Windows 平台的控制台窗口闪烁、沙箱启动失败、以及跨平台凭据与 hook 安全性成为共性热点；与此同时，各工具在 **多语言/国际化、会话持久化与自动补全、以及模型切换透明度** 上呈现不同的侧重点，形成互补的生态格局。

---

### 2. 各工具活跃度对比  

| 工具 | 过去 24 h Issues（更新/新增） | 过去 24 h PR（更新/合并） | 最新 Release（是否发布） | 备注 |
|------|----------------------------|--------------------------|--------------------------|------|
| **Claude Code** | **≈50** (社区活跃度高，TOP 10 已列出) | **1** (安全遥测 PR #97688) | 无新版本（仅维护） | Cowork 功能线 bug 集中，Windows/macOS 桌面端为主要战场 |
| **OpenAI Codex** | **≥30** (热点 Issue 列出 10 条，累计评论 >200) | **≈10** (列出的重要 PR) | **多个 alpha**：rust‑v0.158.0‑alpha.15.{3,4}, rust‑v0.159.0‑alpha.{9‑11} 等 | 重点在沙箱/窗口管理、跨平台凭据存储；版本快速迭代但仍为预览 |
| **Gemini CLI** | **≥10** (热点 Issue 列出 10 条) | **≈10** (重要 PR 列出 10 条) | **v0.63.0‑nightly.20260928.g2fe7c2d3f** (夜ly 版) | 核心修复围绕重试、截断、代理资源清理、配额透明等 |
| **OpenCode** | **≥10** (TOP 10 Issue 列出) | **≈10** (重要 PR 列出 10 条) | 无新版本（最新稳定 1.18.9） | 国际化（RTL）、上下文压缩阈值、WAL 日志泄漏为高优先级 |
| **Pi** | **≥10** (精选 Issue 列出 10 条) | **4** (全部 PR 列出) | 无新版本 | 启动时间/内存峰值、插件凭据持久化、工具调用重复为热点 |
| **Qwen Code** | **≥10** (热点 Issue 列出 10 条) | **≈10** (重要 PR 列出 10 条) | 无新版本 | Managed Agent 架构推进、macOS 面板 toggle、凭证泄露修复为焦点 |
| **DeepSeek TUI** | **≥10** (热点 Issue 列出 10 条) | **≈10** (重要 PR 列出 10 条) | 无新版本 | UI 响应性、成本可视化、Hook 数据完整性为社区诉求 |
| **GitHub Copilot CLI** | 未给出具体 Issue 数（活跃度较低） | 未给出具体 PR 数 | **v1.0.89‑5** (小版本发布) | 主要为交互式表单增量改动，社区讨论较少 |
| **Kimo​t Code CLI** | 0（过去 24 h 无活动） | 0 | 无新版本 | 暂无社区动态 |

> **说明**：各工具的 “Issues” 数为过去 24 h 内被更新或新增的 Issue 数（基于日报中列出的热点及可推算的总量）；“PR” 救为同期间内更新或合并的 PR 数。若文中未给出确切总数，则采用“≥”表示最低可观测值。

---

### 3. 共同关注的功能方向  

| 功能方向 | 涉及工具 | 具体诉求 / 常见表现 |
|----------|----------|---------------------|
| **跨平台窗口/控制台管理** | Claude Code、OpenAI Codex、Gemini CLI、Pi | Windows/macOS 上终端闪烁、弹出可见控制台窗口、沙箱启动时弹窗；期望后台守护进程完全隐藏或仅以日志形式报错 |
| **沙箱/容器启动可靠性** | OpenAI Codex（Windows/macOS/Linux）、Gemini CLI（沙盒信任状态）、Pi（插件提供者默认覆盖） | 路径校验、环境变量缺失、SIGCHLD 处理导致启动失败；需要更健壮的等待/回退机制及明确错误上下文 |
| **凭据与 Hook 安全性** | Claude Code（UserPromptSubmit hook 缺少来源标记）、Gemini CLI（API‑key 持久化插件需求）、Pi（API‑key 持久化、默认提供者被覆盖） | 防止注入、确保插件能安全存储/读取 API‑key，以及 hook 能区分用户输入与系统注入 |
| **资源泄漏 / 数据一致性** | Claude Code（Cowork device_commit_files 数据滞后、WAL 日志无限增长）、OpenCode（WAL 文件 1GB+、压缩导致内存峰值）、Pi（上下文压缩导致内存峰值、思维块冗余） | 需要即时刷新磁盘、限制 WAL 增长、改进压缩算法避免字符串复制、确保 compaction 不丢失数据 |
| **会话与补全稳定性** | Claude Code（会话永久空闲、Auto‑fix CI 不生效）、OpenCode（多会话导致系统冻结、CJK 自动补全失效）、Gemini CLI（会话恢复、代理资源清理） | 期望会话在空闲时能自动恢复或给出明确错误，跨平台补全（尤其是 CJK）可靠，多人协作不卡死 |
| **模型切换与透明度** | Claude Code（/model opusplan Unsupported）、Gemini CLI（显式版本模型 ID 保留、额度信息可见）、Qwen Code（辅助模型选择器凭证泄露） | 用户想要准确的模型别名解析、明确的额度限制与重置窗口、以及模型选择过程不泄露敏感信息 |

---

### 4. 差异化定位分析  

| 工具 | 功能侧重 | 目标用户 | 技术路线 / 架构特点 |
|------|----------|----------|----------------------|
| **Claude Code** | 深度集成 **Cowork**（多协作代理）、桌面端 UI、Hook 系统 | 企业级开发团队、需要强协作与自定义工作流的用户 | 基于 Anthropic 的模型 + 自研插件框架，桌面端 Electron/UI + 本地 agent 调度 |
| **OpenAI Codex** | 高性能 **沙箱 + Rust 基础工具链**、跨平台凭据存储、实时语音/音视频同步 | 个人开发者 & 初创公司，注重低延迟代码生成与多模态交互 | Rust 实现的 CLI + daemon，采用 MCP OAuth 凭据实验特性，强调跨平台一致性 |
| **Gemini CLI** | 夜ly 版本快速迭代、**额度透明**、**代理资源清理**、内存安全（UTF‑16 代理对） | 需要精细计费与长上下文处理的研究/产品团队 | 基于 Google Gemini 模型，夜ly 频繁发布，重点在核心 SDK 与 CLI 的健壮性 |
| **OpenCode** | 国际化（RTL 多语言）、上下文压缩阈值可调、插件生态（Bee 提供商） | 全球化产品团队、对多语言代码库有强需求的用户 | 插件化架构，支持自定义提供商、MCP 标准输入流，强调跨平台一致性与国际化 |
| **Pi** | 插件生态完善（API‑key 持久化、默认提供者尊重）、启动时间与内存预算、工具调用去重 | 插件开发者及对自定义工作流有深度需求的用户 | 基于轻量级核心 + 插件机型，强调启动预算、内存峰值控制和插件生命周期管理 |
| **Qwen Code** | Managed Agent 多阶段架构（API 合约、持久化、容错门禁）、跨平台桌面体验（macOS/Windows） | 需要企业级 agent 持久化与故障恢复的大规模代码基盘 | 分阶段交付的 Managed Agent、持久化工作区代理、本地决策门禁（Von）等 |
| **DeepSeek TUI** | 终端 UI 响应性、成本可视化、Hook 数据完整性、撤销/redo 精确性 | 善用终端、注重实时费用监控与可审计操作的开发者 | 基于 TUI 框架，重点在渲染循环、后台任务调度以及 Hook 事件的完整暴露 |
| **GitHub Copilot CLI** | 交互式表单增量改动、轻量级 CLI 包装 | 已使用 GitHub Copilot 生态的开发者，想在终端快速调用补全 | 基于 Node/TS 包装，侧重于轻量化集成而非深度自定义 |
| **Kimo​t Code CLI** | （无活动） | — | — |

---

### 5. 社区热度与成熟度  

| 工具 | 社区热度（Issues+PR 数量） | 迭代阶段 | 成熟度评价 |
|------|---------------------------|----------|------------|
| **OpenAI Codex** | 高（30+ Issues，10+ PR，频繁 alpha） | 快速迭代（alpha 预览） | **成长期** – 功能激进，稳定性尚在打磨 |
| **Claude Code** | 中高（≈50 Issues，1 PR） | 维护+补丁 | **成熟期** – 核心功能稳定，聚焦 bug 修复与平台适配 |
| **Gemini CLI** | 中（≈10 Issues，≈10 PR，夜ly 发布） | 持续夜ly 迭代 | **成熟期+快速补丁** – 核心稳定，频繁细节改进 |
| **OpenCode** | 中（≈10 Issues，≈10 PR） | 维护+功能增强 | **成熟期** – 国际化与性能为主要改进方向 |
| **Pi** | 中低（≈10 Issues，4 PR） | 维护+插件生态建设 | **成长期** – 插件体系尚在完善，启动性能是瓶颈 |
| **Qwen Code** | 中（≈10 Issues，≈10 PR） | 架构阶段推进 | **成长期** – Managed Agent 架构尚在分阶段交付 |
| **DeepSeek TUI** | 中（≈10 Issues，≈10 PR） | 维护+UI 细化 | **成熟期** – 核心功能稳定，聚焦 UI/体验 |
| **GitHub Copilot CLI** | 低（未详细 Issue/PR，仅小版本） | 维护+小幅功能 | **成熟期** – 作为插件式 CLI，变动较少 |
| **Kimo​t Code CLI** | 极低（0） | 暂无活动 | **停滞/低活跃** | 

---

### 6. 值得关注的趋势信号  

| 趋势 | 社区反馈 | 对开发者的参考价值 |
|------|----------|-------------------|
| **跨平台窗口与沙箱统一隐藏** | Windows/macOS 控制台闪烁、沙箱启动弹窗在 Claude Code、OpenAI Codex、Pi 中频繁出现 | 开发者若构建或集成 AI CLI，应优先使用 **后台守护进程 + 日志仅报错** 的模式，避免终端弹窗干扰工作流。 |
| **凭据与 Hook 安全性需求** | Claude Code 的 `UserPromptSubmit` 缺少来源标记、Gemini CLI 与 Pi 对 API‑key 持久化插件的强烈诉求 | 建议在插件系统中提供 **显式的 prompt_source/is_meta 字段**，并实现 **安全凭据存储接口**（如 `storeCredential()`）以防注入攻击。 |
| **资源泄漏与内存峰值控制** | WAL 日志无限增长、上下文压缩导致内存峰值、思维块冗余在 Claude Code、OpenCode、Pi 中被多次提及 | 需要在 **压缩/检查点** 阶段采用 **流式或工作线程处理**，并对 **WAL

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills 社区热点报告（截至 2026-09-28）

---

### 1️⃣ 热门 Skills 排行（按讨论热度排序）

| # | Skill（PR） | 核心功能 | 讨论亮点 | 状态 |
|---|-------------|------------------|----------------|--------|
| **1** | **[PR #1298](https://github.com/anthropics/skills/pull/1298)** – `skill-creator` – 触发评估隔离与 Windows/运行时故障修复 | 修复基于Claude Skills的评估引擎中检测错误的“触发器”问题——跨工作线程竞争、Windows 上的 `select()` 错误以及无关工具干扰。添加运行时故障处理和负样本保护。 | 社区关注评估基础设施的可靠性；直接关系到技能测试和优化。 | **[OPEN]** |
| **2** | **[PR #1742](https://github.com/anthropics/skills/pull/1742)** – `mcp-builder` – 支持 mcp≥2 流式 HTTP 客户端及自定义头部 | 解决MCP协议升级中的导入别名 (`streamablehttp_client → streamable_http_client`) 及头部配置问题。使技能能够与最新 MCP 服务器进行标准 HTTP 通信。 | 随着MCP生态的扩展，用户要求向前兼容；PR 连接了技能创建者与第三方服务器。 | **[OPEN]** |
| **3** | **[PR #1771](https://github.com/anthropics/skills/pull/1771)** – `proofcore-contract-auditor` – 智能合约防篡改技能 | 为 Solidity 和 Rust 智能合约提供静态分析，将审计结果 anchored 到 TON 公链，利用零存储 Merkle 协议生成可验证的审计证明。 | 反映出 Web3 社区对安全审计和审计证据存储的需求；第一个链原生审计技能。 | **[OPEN]** |
| **4** | **[PR #1734](https://github.com/anthropics/skills/pull/1734)** – `docx` – 检测孤立文档注释 | 扫描 Word 文档以发现“孤立”段落（即可能不必要的分页前/后注释）。帮助用户清理生成的 .docx 文件。 | 高频问题——Claude 生成的文档常有 widows/orphans；用户希望自动修复。 | **[OPEN]** |
| **5** | **[PR #1703](https://github.com/anthropics/skills/pull/1703)** – `md2video-audio` – Markdown → 专业 MP4 视频技能 | 零成本将 Markdown（通过 Marp）编译为带自然语言旁白的高质量 MP4 演示视频。适用于教程、文档和快速可视化。 | 满足用户将静态文档转化为动态视频内容的诉求；融合了新渲染和语音合成能力。 | **[OPEN]** |
| **6** | **[PR #1792](https://github.com/anthropics/skills/pull/1792)** – `docx` – 超时处理与输出验证 | 修复 LibreOffice 超时逻辑，在超时时返回错误；验证输出 DOCX 以确保修改（修订标记）已清除。 | 提升文档处理韧性；确保技能失败时不会悄悄报告“成功”。 | **[OPEN]** |
| **7** | **[PR #525](https://github.com/anthropics/skills/pull/525)** – `pyxel` – 复古游戏开发技能 | 提供 Pyxel 游戏引擎的完整功能指南，包括头端运行、直接帧检查和任务专用状态断言——适合代码助手快速构建复古风格的游戏。 | 满足“游戏化”工作流需求；提供了直接的可执行测试框架。 | **[OPEN]** |
| **8** | **[PR #514](https://github.com/anthropics/skills/pull/514)** – `document-typography` – 生成文档排版质量控制 | 自动检测并修复 AI 生成文本的常见排版错误：孤立词（1-6 个词溢出下一行）、 widows/orphans 和编号对齐。 | 直接解决用户对低质量排版的反馈；新出现的文档质量技能之一。 | **[OPEN]** |

*排名基于仓库提供的“按评论数排序”列表。所有 PR 均处于 **[OPEN]** 状态（未合并）。*

---

### 2️⃣ 社区需求趋势（Issues 分析）

| 需求领域 | 主要问题（评论数） | 社区关注焦点 |
|------------|--------------------------|---------------------|
| **安全与信任** | **#492 (43 条评论)** – `anthropic/` 命名空间下的社区技能导致信任边界滥用 | 用户向可信的官方技能授予权限，导致风险。 |
| **协作与共享** | **#228 (16 条评论)** – 组织级技能共享功能缺失 | 需要内置的技能库/共享链接，而不是手动 .skill 文件分发。 |
| **评估工具** | **#556 (12 条评论)** – `run_eval.py` 永远不会触发技能，导致工具调用成功率为 0% | 技能开发人员难以验证其技能是否被 Claude 实际使用。 |
| **版本控制/意外事件** | **#62 (10 条评论)** – 技能突然消失和文件丢失 | 用户对持久性和技能传播表示担忧。 |
| **新兴功能** | **#1329 (9 条评论)** – 提案：`compact-memory` 符号表示法 | 一个独立的技能提案，侧重于长期运行代理的符号化状态管理。 |
| **质量保证** | **#1394 (4 条评论)** – `skill-creator` 中的 XSS 漏洞 | 工具中的安全漏洞可能导致代码执行。 |
| **集成** | **#29 (4 条评论)** – Skills 与 AWS Bedrock 的兼容性 | 社区希望Skills在云端服务中的通用性。 |
| **治理与合规** | **#1175 (4 条评论)** – SharePoint Online 文档处理中的安全与上下文限制 | 对在企业文档系统上运行的安全控制的需求增加。 |

**三大趋势**：
1. **安全性和信任验证** – 对技能来源的验证和更高的安全标准。
2. **协作和组织共享** – 对内置技能库和权限管理的持续需求。
3. **测试、评估和质量** – 持续改进评估工具和治理（如触发评估、质量检查）。

---

### 3️⃣ 高潜力待合并 Skills

| Skill（PR） | 原因预计会进入候选列表 |
|--------------|-----------------------------------|
| **#1771 proofcore-contract-auditor** | 标志性 Web3 技能，直接满足安全审计市场；拥有完整的合约和区块链组件。 |
| **#1703 md2video-audio** | 将 Markdown 转化为视频的能力，满足用户内容变现和演示的需求；支持自动化。 |
| **#525 pyxel** | 提供了完整的游戏开发工作流；与教育/游戏化趋势契合。 |
| **#514 document-typography** | 直接解决 Cloude 生成文档的痛点；新的质量控制技能，可能成为标准技能之一。 |
| **#1776 blast-radius** | 破坏性操作前的检查清单工具；对于变更管理和风险管理至关重要。 |
| **#723 testing-patterns** | 完整的测试栈指南；随着测试驱动开发的增长，用户对测试基础的需求日益增加。 |
| **#822 AWT (AI Watch Tester)** | 零代码 E2E 测试自动化；与测试趋势和 AI 驱动测试一致。 |
| **#1245 notion-spec-to-implementation & quantitative-resume-auditor** | 两者都是新出现的元技能；分别针对技术规范的结构化和人岗匹配的定量分析。 |

*所有 PR 均处于 **[OPEN]** 状态；近期可能合并，因为它们分别解决了安全、新媒体、游戏、教育文档和测试的核心社区需求。*

---

### 4️⃣ Skills 生态洞察

> **社区当前的诉求是：**快速交付具备**安全可靠性、高度自动化和良好评估**的技能，同时支持**企业协作**——从**代码/文档工具**扩展到**多媒体、游戏和治理**，同时确保**信任边界**并提供协作分享机制。

这反映了一个成熟的生态系统，正在超越简单的工具链，朝着一个**可信赖、可共享、可评估的技能市场**迈进。

---



# Claude Code 社区动态日报 — 2026-09-28

---

## 1. 今日速览

今日无新版本发布，但社区活跃度较高，共 50 个 Issue 在过去 24 小时内更新。最突出的信号是 **Cowork 功能线出现多起高关注 Bug**（#76694 以 35 条评论、28 👍 高居榜首），同时 **MCP 协议兼容性**、**Windows 平台体验** 和 **Hooks 安全性** 成为开发者讨论最密集的方向。安全方向有 1 条 PR 合并，涉及遥测收集策略调整。

---

## 2. 版本发布

**无新版本发布**（过去 24 小时内 `anthropics/claude-code` 无 Release）。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #76694 — Cowork 新项目丢失「选择文件夹」入口
- **标签**: `bug` / `platform:windows,macos` / `area:cowork,desktop`
- **数据**: 35 评论 | 28 👍
- **摘要**: Chat/Cowork 合并后，新建项目的右键上下文菜单被替换为 Chat 风格的「仅上传知识库」菜单，原有的「Choose a folder」入口丢失，导致无法在 Cowork 中指定工作目录。
- **为何重要**: 直接影响 Cowork 核心工作流，阻碍用户创建项目；社区反响极大（28 👍），极可能被列为高优先级修复。
- 🔗 [anthropics/claude-code#76694](https://github.com/anthropics/claude-code/issues/76694)

### 🔴 #89398 — 斜杠命令选择器不打开，但命令仍会执行
- **标签**: `bug` / `platform:windows` / `area:ui,desktop`
- **数据**: 15 评论 | 7 👍
- **摘要**: 在 Windows 桌面端，除非 `/` 是 composer 的首字符，否则斜杠命令自动补全面板不会弹出；但用户手动输入完整命令后按回车，命令仍会静默执行——用户以为自己在输入纯文本，实际触发了 unintended 命令。
- **为何重要**: UI/UX 缺陷 + 潜在的非预期操作风险，影响日常高频使用的命令输入。
- 🔗 [anthropics/claude-code#89398](https://github.com/anthropics/claude-code/issues/89398)

### 🔴 #93482 — Cowork device_commit_files 声明成功但磁盘内容滞后一个 commit
- **标签**: `bug` / `platform:windows` / `area:cowork` / `data-loss`
- **数据**: 14 评论 | 0 👍
- **摘要**: `device_commit_files` 对覆盖写入返回 `success`，但磁盘上的实际内容比预期落后恰好一个 commit，且 mtime 为最新——属于静默数据滞后，可能让用户误以为写入已生效。
- **为何重要**: 标有 `data-loss`，直接威胁 Cowork 场景下的数据一致性，可能导致工作成果丢失或回滚。
- 🔗 [anthropics/claude-code#93482](https://github.com/anthropics/claude-code/issues/93482)

### 🟡 #92007 — `/model opusplan` 报「Unsupported model」
- **标签**: `bug` / `platform:windows` / `area:model`
- **数据**: 7 评论 | 12 👍
- **摘要**: 使用数月的 `/model opusplan` 在 2026-09-04 突然报错不支持，影响 Claude 桌面端 Code 标签页下的模型切换流程。
- **为何重要**: 12 👍 表明受影响用户广泛，可能涉及模型注册表或别名映射变更，需快速恢复。
- 🔗 [anthropics/claude-code#92007](https://github.com/anthropics/claude-code/issues/92007)

### 🟡 #68083 — 桌面端全局「Auto-fix CI」开关对 gh 创建的 PR 不生效
- **标签**: `bug` / `platform:macos` / `area:desktop`
- **数据**: 5 评论 | 8 👍
- **摘要**: 桌面端全局开启的「Auto-fix CI and address comments」对通过 `gh` 从本地会话创建的 PR 不生效，且配置无法持久化到 `claude_desktop_config.json`。
- **为何重要**: 影响 CI/CD 自动化工作流，8 👍 说明大量用户依赖此功能。
- 🔗 [anthropics/claude-code#68083](https://github.com/anthropics/claude-code/issues/68083)

### 🔴 #94252 — 会话永久空闲（事件循环 idle，无错误）
- **标签**: `bug` / `api:bedrock` / `platform:macos` / `area:tools,core,agents`
- **数据**: 4 评论 | 0 👍
- **摘要**: 在 macOS + Bedrock API 下（2.1.268–2.1.283），某个 turn 之后会话永久空闲，事件循环卡在 `kevent64`，疑似 tool_result 丢失、compaction 卡死或排队输入未被消费。
- **为何重要**: 属于「会话假死」类致命缺陷，用户无能为力只能重启；同一作者还报告了 #94335（tool_result 后空闲）和 #94261（compaction 卡在 95%），可能指向同一根因。
- 🔗 [anthropics/claude-code#94252](https://github.com/anthropics/claude-code/issues/94252)

### 🟡 #94675 — UserPromptSubmit hook 对 agent/系统注入消息触发，且 payload 中无 `prompt_source` / `is_meta` 标记
- **标签**: `bug` / `platform:macos` / `area:security,hooks,agents`
- **数据**: 3 评论 | 1 👍
- **摘要**: 跨 session `SendMessage`、子 agent 完成通知、loop/cron 重注入、heartbeat、compaction 续跑等非用户输入的消息，全部走 `UserPromptSubmit` hook，且 payload 中没有字段区分来源——hook 无法判断是真人输入还是系统注入，构成 prompt-injection 攻击面。
- **为何重要**: 安全敏感。如果 hook 无法区分真人与系统消息，恶意构造的注入内容可能被误当作用户指令执行。
- 🔗 [anthropics/claude-code#94675](https://github.com/anthropics/claude-code/issues/94675)

### 🟡 #93967 — Windows 下 `claude auth login` / `claude setup-token` 报 OAuth 403「missing user:profile scope」
- **标签**: `bug` / `platform:windows` / `area:auth`
- **数据**: 3 评论 | 1 👍
- **摘要**: Windows CLI 登录失败（缺 `user:profile` scope），但同一账号在 Claude Desktop 上登录正常，说明 CLI 与 Desktop 的 OAuth scope 请求存在差异。
- **为何重要**: 阻碍 Windows CLI 新用户接入，影响平台一致性体验。
- 🔗 [anthropics/claude-code#93967](https://github.com/anthropics/claude-code/issues/93967)

### 🔴 #89938 — SendMessage 对未送达的消息返回 `{"success":true}`，长驻会话双向失聪
- **标签**: `bug` / `platform:linux` / `area:agents`
- **数据**: 3 评论 | 1 👍
- **摘要**: `SendMessage` 对从未送达的消息错误返回成功；长生命周期的 session 实例双向消息均无法送达，陈旧的 bridge 指针使宿主显示「Connected」但 worker 数为 0（2.1.234 起）。
- **为何重要**: Agent 间通信是 Cowork/Dispatch 的基础，消息丢失且无错误反馈会直接导致多 agent 协作失败。
- 🔗 [anthropics/claude-code#89938](https://github.com/claude-code/issues/89938)

### 🟡 #82017 — Compaction 续跑会话丢失 skill inventory
- **标签**: `bug` / `area:core,skills`
- **数据**: 1 评论 | 0 👍
- **摘要**: 自动 compaction 后，续跑的会话丢失 `skill_listing` 附件，harness 不重新注入，模型对所有已注册 skill 变成「路由盲」，只能感知新增/变更的 skill delta。
- **为何重要**: 影响 Skills 系统的可用性，用户在长会话中 compaction 后可能发现 skill 调用能力退化。
- 🔗 [anthropics/claude-code#82017](https://github.com/anthropics/claude-code/issues/82017)

---

## 4. 重要 PR 近展

今日仅 1 条 PR 在过去 24 小时内更新：

### #97688 — sec-default: collector 记录超越 user tier
- **作者**: poteat | **状态**: OPEN
- **摘要**: 在组织级 `sec-default` 配置下，插件无法再删除或重写发送给 collector 的遥测记录。`telemetry.log` 的 collector 流现在像 `classic.*` 和 `settings.read` 一样持续记录，不受 user tier 限制。组织自身的 `prepend` / `append` 操作继续生效。
- **为何重要**: 安全/合规方向，确保组织对遥测数据流的管控能力，防止插件层面的数据篡改。
- 🔗 [anthropics/claude-code#97688](https://github.com/anthropics/claude-code/pull/97688)

---

## 5. 功能需求趋势

从今日 Issue 分布来看，社区关注集中在以下方向：

| 方向 | 相关 Issue | 热度 |
|---|---|---|
| **Cowork / 桌面端功能完整性** | #76694, #93482, #68083, #97685, #94399, #97058 | 🔥🔥🔥🔥🔥 |
| **MCP 协议兼容与稳定性** | #97677, #88128, #76239, #97701 | 🔥🔥🔥🔥 |
| **Windows 平台体验** | #89398, #92007, #93967, #97409, #97716, #91699 | 🔥🔥🔥🔥 |
| **Hooks 系统安全性与可观测性** | #94675, #96699 | 🔥🔥🔥 |
| **会话稳定性（空闲/卡死/compaction）** | #94252, #94335, #94261, #89938, #80427 | 🔥🔥🔥🔥 |
| **模型支持与切换** | #92007 | 🔥🔥 |
| **UI/UX 细节改进** | #95721, #74447 | 🔥🔥 |
| **性能与成本** | #97218（API 消耗异常 30x） | 🔥🔥 |

---

## 6. 开发者关注点总结

1. **Cowork 是当前最高优先级的痛点**：文件夹选择、数据一致性、Linux 支持缺失、会话管理等多个维度同时出现 Bug，且 #76694 的社区反响（35 评论 / 28 👍）远超其他 Issue，说明 Cowork 的快速迭代正在牺牲稳定性。

2. **MCP 生态进入「兼容性阵痛期」**：20

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026‑09‑28）**  

---

### 1. 今日速览
- 过去 24 小时内 Codex CLI 持续发布了一系列 Rust 基础的 alpha 版本（0.158‑0.159 系列），表明团队正在快速迭代底层工具链。  
- Windows 平台的终端闪烁、控制台窗口弹出以及沙箱启动失败仍是社区热点，累计评论数超过 200 条，显示这些问题对日常使用影响较大。  
- 近期所有合并的 PR 均来自内部自动化机器人（copyberry[bot]，主要聚焦 UI/UX 细微改进、声频时间戳对齐、历史记录预热等），说明功能层面已趋于稳定，重点转向细节打磨和跨平台兼容性。

---

### 2. 版本发布
| 版本 | 发布时间 | 备注 |
|------|----------|------|
| **rust‑v0.158.0‑alpha.15.4** | 2026‑09‑28 | 小幅补丁，修复了 CLI 在 Windows 上的句柄泄漏。 |
| **rust‑v0.158.0‑alpha.15.3** | 2026‑09‑28 | 同步上述修改，回滚了一处导致 sandbox 启动超时的回归。 |
| **rust‑v0.159.0‑alpha.9** → **rust‑v0.159.0‑alpha.11** | 2026‑09‑28 | 连续发布四个 alpha，主要引入了新的 **MCP OAuth 凭据存储** 实验特性以及对 **Windows sandbox provisioning service** 的等待逻辑（后续 PR 已合并）。 |
| **rust‑v0.159.0‑alpha.8** / **rust‑v0.159.0‑alpha.10** | 2026‑09‑28 | 细节改进：日志格式统一、对长符号链接的 Unix socket 连接容错。 |

> 总体来看，本日的版本更新均为 **alpha 预览**，重点在稳定底层 RPC、沙箱启动以及跨平台凭据管理。正式版尚未发布，社区仍在测试这些变动对日常工作流的影响。

---

### 3. 社区热点 Issues（挑选 10 条）

| # | 标题 & 链接 | 关键信息 | 为何重要 | 社区反应（评论/👍） |
|---|-------------|----------|----------|-------------------|
| **#48074** | [Windows: terminal windows repeatedly flash during requests after installing the Codex daemon](https://github.com/openai/codex/issues/48074) | Win11，codex‑cli 0.157.0，终端在每次请求后闪烁。 | 直接影响开发者使用体验，频繁弹窗导致注意力分散。 | 40 评论 / 76 👍 |
| **#45119** | [macOS 14.2: sandbox startup fails with unbound variable TIOCSTI](https://github.com/openai/codex/issues/45119) | Apple Silicon，沙箱启动时报错未定义变量。 | 阻碍 macOS 开发者使用 Codex，尤其是 Apple Silicon 用户。 | 33 评论 / 0 👍 |
| **#48016** | [can't start in windows](https://github.com/openai/codex/issues/48016) | Win，codex‑cli 0.157.0，启动即失败。 | 阻止新用户上手，是首次安装的主要障碍。 | 32 评论 / 18 👍 |
| **#48554** | [Linux Desktop][26.924] Electron runtime replaces libuv's SIGCHLD handler …](https://github.com/openai/codex/issues/48554) | Linux 桌面，子进程未被回收导致 shell 超时、Git 不可用。 | 影响后台任务和版本控制操作，严重影响 CI 工作流。 | 23 评论 / 13 👍 |
| **#46388** | [Windows] Regression in CLI 0.155.0: elevated sandbox initialization fails during runtime path validation; 0.154.0 works](https://github.com/openai/codex/issues/46388) | Win10 Pro，0.155.0 引入的沙箱路径校验导致提权失败。 | 为企业内部提权场景提供了回滚依据，显示回归风险。 | 20 评论 / 3 👍 |
| **#48090** | [Windows managed daemon opens two visible console windows when starting Codex CLI](https://github.com/openai/codex/issues/48090) | Win，守护进程启动时弹出两个控制台窗口。 | 与 #48074 类似，进一步证实守护进程窗口管理问题。 | 17 评论 / 7 👍 |
| **#16786** | [Windows app repeatedly spawns \`git ls-files …\`; ntfs.sys NtFC nonpaged pool grows continuously](https://github.com/openai/codex/issues/16786) | 长期运行导致内核非分页池持续增长。 | 性能泄漏，长时间使用后可能导致系统不稳定。 | 17 评论 / 4 👍 |
| **#48216** | [Windows][26.924.1866.0] Desktop stuck on gray loading screen while backend and Pet remain active](https://github.com/openai/codex/issues/48216) | Win 桌面更新后卡在灰色加载屏幕。 | UI 阻塞，用户无法进入工作区。 | 15 评论 / 0 👍 |
| **#44768** | [Windows: app-server daemon opens a visible console window for every hook and shell command it runs](https://github.com/openai/codex/issues/44768) | 每个 hook/shell 均弹出控制台窗口。 | 放大了控制台闪烁问题，影响脚本自动化场景。 | 14 评论 / 4 👍 |
| **#48039** | [External console windows appear when Codex starts or runs background tasks on Windows](https://github.com/openai/codex/issues/48039) | Win，启动或后台任务时出现外部控制台。 | 与上述多个窗口问题形成闭环，需统一解决守护进程窗口可见性。 | 14 评论 / 9 👍 |

> **共性**：Windows 平台的 **控制台窗口弹出/闪烁**、 **沙箱启动失败**、以及 **Linux 下子进程回收**（SIGCHLD）是目前社区最集中的痛点。评论数和点赞均表明这些问题正在积极讨论，且多数用户期待尽快修复。

---

### 4. 重要 PR 进展（挑选 10 条）

| # | 标题 & 链接 | 主要改动 | 为什么重要 |
|---|-------------|----------|------------|
| **#48830** | [Show a short, neutral TUI interruption notice](https://github.com/openai/codex/pull/48830) | 中断提示改为次要文本样式，去除“建议告诉模型怎么做不同”。 | 减少 UI 噪音，使中断状态更清晰，提升 TUI 可读性。 |
| **#48829** | [Wait briefly for the Windows sandbox provisioning service to start](https://github.com/openai/codex/pull/48829) | 在就绪检查前最多等待 5 s，轮询服务状态。 | 直接针对 #48074、#48090 等窗口闪烁问题，减少因服务未就绪导致的提前 UI 阻塞。 |
| **#48828** | [Allow archiving threads before their first turn](https://github.com/openai/codex/pull/48828) | 在查询回滚前先持久化非临时线程。 | 解决首次存档时报错（missing‑rollout），提升线程管理鲁棒性。 |
| **#48827** | [Show a hand pointer over transcript links in Ghostty and Kitty](https://github.com/openai/codex/pull/48827) | 在支持的终端中为可点击的 transcript 链接显示手形光标。 | 改善交互体验，尤其在轻量终端用户中提升可发现性。 |
| **#48824** | [Keep voice RTP timestamps aligned to 20 ms packets](https://github.com/openai/codex/pull/48824) | 对齐语音 RTP 时间戳，防止帧丢失。 | 提升实时语音模型的稳定性，减少音频断裂。 |
| **#48819** | [Use explicit histogram buckets for tool and skill context metrics](https://github.com/openai/codex/pull/48819) | 为工具碎片大小和技能计数显式定义直方图桶。 | 提高遥测数据的可比性，便于性能分析和容量规划。 |
| **#48814** | [Preserve punctuation and semicolons in Mermaid labels](https://github.com/openai/codex/pull/48814) | 不再在分号处拆分标签，保留标点。 | 修复 Mermaid 图表渲染错误，影响文档和图表生成功能。 |
| **#48812** | [Add history-aware prewarming for idle threads](https://github.com/openai/codex/pull/48812) | 为空闲线程预热时携带已有对话历史和工具元数据。 | 减少首次 Turn 的延迟，提升交互响应速度。 |
| **#48807** | [Show short turn durations in TUI completion footers](https://github.com/openai/codex/pull/48807) | 所有已知时长（包括亚秒）均显示在完成页脚。 | 让用户能够实时感知每轮执行时间，便于性能调优。 |
| **#48805** | [Allow transcript wheel scrolling while a modal is open](https://github.com/openai/codex/pull/48805) | 模态对话框打开时仍可滚动 transcript。 | 提升多任务场景下的可用性，用户不必关闭提示才能查看历史。 |

> 总体趋势：这些 PR 主要聚焦在 **TUI/UX 细化**、**声音同步**、**遥测精度**以及 **线程预热**——表明在核心功能（代码生成、沙箱、模型调用）已相对稳定后，团队把精力投入到交互流畅性和可观测性上。

---

### 5. 功能需求趋势（从 Issues 中提炼）

| 需求方向 | 体现的 Issues（代表） | 说明 |
|----------|---------------------|------|
| **Windows 终端/控制台窗口管理** | #48074, #48090, #44768, #48039, #48325, #48498 | 用户反复报告启动、后台任务或 hook 时弹出可见控制台窗口，影响专注度。 |
| **沙箱启动与权限** | #45119 (macOS), #46388 (Windows), #48554 (Linux) | 沙箱在不同平台上因环境变量、路径校验或 SIGCHLD 处理失败而无法启动。 |
| **子进程回收 / 资源泄漏** | #48554, #16786 | 长期运行导致句柄或内核池泄漏，后续 shell/Git 不可用。 |
| **跨平台凭据与 MCP OAuth** | #48507, #48835 | 多进程并发导致凭据竞争、OAuth 授权失效，需要更稳健的文件锁或内部缓存。 |
| **UI 响起与加载卡顿** | #48216, #48345, #48535, #48602 | 桌面客户端在更新后卡在加载界面或聊天列表无法渲染，回滚旧版可暂时缓解。 |
| **实时语音/音视频同步** | #47370, #48824 | Voice 模型在 WSLg 或 RTP 时间戳对齐上出现丢帧或静音。 |

> 综上，**Windows 平台的交互窗口问题**与 **跨平台沙箱/子进程可靠性**是社区当前最迫切的两大功能方向。此外，语音同步和凭据并发安全也在逐渐浮现。

---

### 6. 开发者关注点（痛点 & 高频需求）

| 痛点 / 需求 | 出现频率（基于评论数） | 开发者表达的期望 |
|------------|----------------------|-------------------|
| **消除可见控制台闪烁/弹窗** | 高（#48074、#48090、#44768、#48039 等合计 >100 评论） | 希望后台守护进程完全隐藏，或仅在错误时以日志形式输出；在 hook、沙箱启动时不弹出新窗口。 |
| **沙箱启动可靠性（尤其是针对提权/环境变量）** | 中高（#45119、#46388、#48554） | 需要更健壮的环境变量检测、回退机制以及明确的错误上下文（如缺少哪些权限或变量）。 |
| **子进程及资源回收（SIGCHLD、句柄泄漏）** | 中（#48554、#16786） | 期望在退出或超时时自动回收所有子进程，避免内核池增长导致系统不稳定。 |
| **持久化凭据与并发安全** | 中低（#48507、#48835） | 希望凭据文件采用文件锁或原子写入，避免多实例

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报 (2026-09-28)**

---

### 1. 今日速览
v0.63.0‑nightly.20260928.g2fe7c2d3f 发布，带来多项核心修复和 Nightly 版本升级。社区核心关注点集中在子代理可靠性、浏览器代理配置、自动记忆系统和额度信息可见性等领域，多项优先级 P1/P2 的 Bug 持续引发讨论。开发者的主要痛点集中在代理卡顿、UI 渲染异常及沙盒信任流程繁琐等方面。

---

### 2. 版本发布
- **v0.63.0‑nightly.20260928.g2fe7c2d3f** – 包含修正版错误修复：
  - `RetryInfo` 为 0 时直接重试，避免误判终端额度错误 [#29532]。
  - 修复 `$HOME/.gemini/agents` 下 `.md` 链接识别问题。
  - 修复 A2A 服务端 JSON 请求体解析顺序 [#29320]。
  - 修复核心代理资源清理逻辑 [#29432]。
  - 修复字符串截断时 UTF‑16 代理对分割问题（CLI、ExpandableText）[#29304]、[#29303]。
  - 修复模型 TURN 结束时请求 400 错误 [#29527]。
  - 修复显式版本模型 ID 保留逻辑（Gemini‑3‑Pro‑Preview、gemini‑2.5‑flash 等）[#29420]、[29422]。
  - 修复额度错误中服务器上报的限制和重置窗口信息缺失 [#29429]。
  - 修复沙盒中文件夹信任状态持久化问题 [#29423]。
  - 修复无头模式中信任状态分歧问题 [#29528]。

---

### 3. 社区热点 Issues（按讨论热度排序，10 个最值得关注）

| # | 标题 | 重要性 | 社区反映 |
|---|-------|--------------|--------------|
| **#22323** | `[Bug] Subagent 恢复逻辑：MAX_TURNS 达到时报告 GOAL 成功` | 子代理在达到最大轮次后仍被标记为成功，导致中断隐藏。优先级 P1，直接影响到代码调研代理的有效性。 | 13 条评论，2 个 👍 |
| **#21409** | `Generalist 代理在简单任务（如新建文件夹）时永久挂起` | 代理在首次调用时卡死，反复等待约 1 小时才能取消。优先级 P1，影响日常使用流畅度。 | 8 条评论，8 个 👍 |
| **#19873** | `利用 Gemini 3 模型的 Bash 亲和力——零依赖沙盒与意图路由` | 探讨如何安全地利用模型的原生 Shell 工具链，提高代码操作效率。优先级 P2，影响执行性能。 | 9 条评论，1 个 👍 |
| **#22745** | `评估 AST‑aware 文件读取/搜索/映射功能对代码调查器的价值` | 通过 AST 语法树实现更精确的代码边界读取，减少轮次和 token 噪声。优先级 P2，关系到代码理解质量。 | 7 条评论，1 个 👍 |
| **#21968** | `Gemini 基本不自行使用技能和子代理` | 用户自定义的 Gradle/Git 技能基本不会被模型自动触发，导致重复工作。优先级 P2，影响生产力提升。 | 6 条评论，0 个 👍 |
| **#26525** | `增加确定性脱敏规则并减少 Auto‑Memory 日志记录` | Auto‑Memory 在模型上下文处理前已记录明文，脱敏逻辑滞后，存在泄漏风险。优先级 P2，安全相关。 | 5 条评论，0 个 👍 |
| **#22267** | `[Bug] 浏览器代理忽略 settings.json 覆盖（如 maxTurns）` | 全局或项目级配置无法被浏览器代理读取，导致行为与预期不符。优先级 P2，配置可用性问题。 | 4 条评论，0 个 👍 |
| **#22232** | `增强浏览器代理的鲁棒性——自动会话接管与锁恢复` | 当前对锁定的持久化浏览器配置文件采取“快速失败”策略，易导致用户体验中断。优先级 P3。 | 4 条评论，0 个 👍 |
| **#21983** | `浏览器子代理在 Wayland 环境下崩溃` | 浏览器代理在 Wayland 窗口系统上无法正常工作，导致无法使用浏览器工具。优先级 P1。 | 4 条评论，1 个 👍 |
| **#26522** | `停止 Auto‑Memory 无限重试低信号会话` | 低信号会话无法被提取，即使未读取也会永久留在待处理队列中。优先级 P2，影响资源利用率。 | 4 条评论，0 个 👍 |

*链接示例：`google-gemini/gemini-cli Issue #22323`*。

---

### 4. 重要 PR 进展（选 10 个核心修复）

| # | PR 标题 | 核心修复/功能 | 备注 |
|---|----------|----------------|------|
| **#29532** | `fix(core): honor a RetryInfo delay of zero when classifying quota errors` | 避免将服务器明确要求的即时重试误判为终端额度错误，进而触发额度耗尽回退流程。 | 直接影响用户额度使用体验。 |
| **#29531** | `chore/release: bump version to 0.63.0‑nightly.20260928.g2fe7c2d3f` | 自动化版本升级，发布当前 Nightly 快照。 | 提供最新的开发快照。 |
| **#29319** | `fix(sdk): guard JSON.parse on tool‑call args in sendStream` | 捕获 `JSON.parse` 异常，避免代理流因非法 JSON 而崩溃。 | 提升代理调用的健壮性。 |
| **#29304** | `fix(cli): avoid splitting surrogate pairs during truncation` | 修正文本截断时不分裂 UTF‑16 代理对的问题，防止 emoji 字符丢失。 | 改善终端显示效果。 |
| **#29303** | `fix(cli): keep surrogate pairs intact at ExpandableText truncation boundaries` | 相同问题适用于 UI 组件 ExpandableText，确保标签显示完整。 | 提升用户界面美观度。 |
| **#29432** | `fix(core): settle queued tool calls on scheduler disposal` | 清理排队中的工具调用，防止在调度器销毁后仍继续执行导致的资源泄漏。 | 保障代理资源释放。 |
| **#29431** | `fix(core): skip invalid TOML policy rules` | 检测并跳过验证失败的策略规则，防止空工具名导致启动崩溃。 | 增强配置安全性。 |
| **#29420** | `fix(core): preserve explicit Gemini 3 Pro preview model IDs` | 用户指定的 `--model gemini-3-pro-preview` 将保持原值，不因模型扩展策略而被替换。 | 尊重用户模型固定需求。 |
| **#29429** | `fix(quota): surface the limit and reset window the server reports` | 将服务器 `ErrorInfo.metadata` 中包含的 `quotaResetTimeStamp`、`quotaResetDelay` 等信息对外 expose，便于用户了解额度状态。 | 提高额度透明度。 |
| **#29527** |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## 2026-09-28 GitHub Copilot CLI 社区动态日报

### 今日速览
GitHub Copilot CLI 社区迎来了一次小版本发布（**v1.0.89-5**），新增了交互式表单

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 - 2026-09-28

## 1. 今日速览

今天是 OpenCode 社区的重要一天，主要亮点包括：**RTL 多语言翻译文件功能**的最新 Issue 活跃，持续优化 Windows 平台多参数工具的兼容性，修复多个关键稳定性问题（任务提前终止、WAL 文件无限增长、CJK 自动补全故障），并推进跨平台和国际化支持。社区对性能优化、跨平台一致性以及自定义插件集成的需求持续强烈。

---

## 2. 版本发布

**无新版本发布**（过去 24 小时）。目前最新稳定版本为 **OpenCode 1.18.9**，已累积多项修复和增强。开发者正在通过 Pull Request 逐步完善多项功能，包括提供商列表、会话管理、跨平台兼容性等方面。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 社区反响 |
|---|-------|--------|----------|
| 1 | **#34697** | RTL 多语言翻译文件（阿拉伯语、波斯语、乌尔都语、帕什托语等） | 用户请求全面支持 11 种 RTL 脚本语言，体现全球化需求 |
| 2 | **#38851** | GPT-5.6-SOL 上下文压缩触发过早（30-35%） | 严重影响上下文窗口利用率，用户反馈频繁 |
| 3 | **#39600** | Windows 平台多参数工具 SchemaError | 1.18.9 版本导致 bash、write、glob 等工具崩溃，需升级 |
| 4 | **#39204** | deepseek-v4-flash-free 导致代理循环中断 | 工具调用后立即停止，`continue` 无法恢复 |
| 5 | **#39463** | WAL 日志文件无限增长至 1GB+ | 系统临时目录占用空间激增，影响性能 |
| 6 | **#39462** | CJK 字符前 `@` 自动补全失效 | 输入法交互受阻，影响中文用户体验 |
| 7 | **#39292** | Mac M4 多会话同时运行导致系统冻结 | 高负载场景下的稳定性问题，需优化资源调度 |
| 8 | **#39266** | AI 删除工作字典时程序崩溃 | 边缘情况处理缺失，导致不可恢复的错误 |
| 9 | **#51739** | 提供商列表中非内置模型不可用 | `models.dev` 目录未被正确加载，影响多提供商集成 |
| 10 | **#39598** | `getDirectory()` 根路径返回虚假父目录 | 路径解析逻辑错误，产生无效文件引用 |

> **重点关注**：#34697（RTL 多语言）、#38851（压缩过早）、#39600（Windows 多参数工具）三大问题直接影响用户体验和生产效率。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 关键贡献 | 状态 |
|---|----|----------|------|
| 1 | **#50221** | 更新 NixPKG 以支持 Bun 1.4.2+ | ✅ Closed（修复 #47332） |
| 2 | **#51757** | 修改 TUI 链接保留原始终端超链接 | ✅ Open（修复 #51756） |
| 3 | **#51751** | 修复失败会话唤醒问题 | ✅ Open（待审核） |
| 4 | **#51743** | 修复超大 MCP 标准输入流导致连接断开 | ✅ Open（修复 #51092） |
| 5 | **#51736** | 添加 `--no-open` 选项启动 `opencode web` 服务 | ✅ Open（修复 #43636） |
| 6 | **#51734** | 文档化 Bee 提供商设置 | ✅ Open（替代 #44547） |
| 7 | **#45759** | 恢复启动失败后的 Console 模型 | ✅ Closed（修复 #45759） |
| 8 | **#45608** | 修复 npm 提供商在 V1 Desktop Node 上的入口点问题 | ✅ Closed（自动修复） |
| 9 | **#46719** | 等待 stdout 写入前退出，确保管道 JSON 不被截断 | ✅ Open（修复 #29330） |
| 10 | **#50260** | 防止删除会话时遗漏预 V2 数据库行 | ✅ Open（修复 #50260） |

> **亮点**：#51757 和 #51736 是用户体验改进的典型案例，#51743 解决了 MCP 性能瓶颈，#50221 提升了开发环境兼容性。

---

## 5. 功能需求趋势

从 Issue 分析可见，社区关注点呈现以下趋势：

1. **国际化与多语言支持**  
   - RTL 多语言翻译（#34697）是核心需求，反映对全球用户群体的重视。
   - 多语言文件支持扩展（阿拉伯语、波斯语、乌尔都语、帕什托语等）。

2. **性能优化与资源管理**  
   - 压缩触发阈值调整（#38851）、WAL 文件内存泄漏（#39463）、CJK 自动补全修复（#39462）。
   - 多参数工具在 Windows 上的兼容性问题（#39600）。

3. **稳定性与容错**  
   - 任务提前终止（#38766）、子代理模型加载失败（#39303）、工作字典删除崩溃（#39266）。
   - 多会话并发下的系统稳定性（#39292）。

4. **跨平台与生态扩展**  
   - macOS/Linux 执行器后缀问题（#28639）。
   - 新提供商集成（Bee 提供商 #51734）。
   - 通知适配器扩展（Termux #45676）。

5. **API 与协议兼容性**  
   - MCP 标准输入流大小限制（#51743）。
   - ACP 协议 `session/list` 规范修正（#39579）。

---

## 6. 开发者关注点

| 痛点 | 描述 | 优先级 |
|------|------|--------|
| **上下文窗口利用率** | 压缩触发过早（30-35%），浪费大量上下文 | 🔴 高 |
| **跨平台一致性** | macOS/Linux 执行器后缀泄露，导致 tmux 窗口标题异常 | 🟠 高 |
| **多参数工具兼容性** | Windows 平台多参数工具在 1.18.9 版本崩溃 | 🔴 高 |
| **会话管理稳定性** | 任务在 30 秒后自行终止，无警告 | 🟠 高 |
| **数据库清理** | 删除会话时遗漏预 V2 历史记录，造成数据孤立 | 🟡 中 |
| **自定义插件支持** | 子代理中自定义模型注册失败 | 🟡 中 |
| **性能瓶颈** | 长上下文（300k）下流式响应失败 | 🟢 中 |
| **主题与 UI 渲染** | 透明背景下徽章文字不可见 | 🟢 低 |

### 总结

OpenCode 社区在本日聚焦于 **性能优化**、**跨平台稳定性** 和 **国际化扩展** 三大方向。开发者最迫切需要的是更智能的上下文压缩策略、更健壮的多参数工具支持，以及更完整的多语言/多平台覆盖。建议团队优先处理 #38851（压缩阈值）、#39600（Windows 多参数工具）和 #39463（WAL 内存泄漏）三个关键问题，同时继续推进 RTL 多语言支持和 MCP 标准化改进。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报 — 2026‑09‑28**  
*基于 github.com/badlogic/pi-mono（earendil-works/pi）最近 24 小时的 Issues 与 PR 数据*

---

### 今日速览
- 今天没有新版本发布，社区活跃度集中在 **性能与可靠性** 方面：启动时间预算、上下文压缩导致的内存峰值、以及插件加载延迟成为热议焦点。  
- 多个与 **ESC 中断卡住**、**思维块泄漏**、**工具调用重复** 相关的 bug 被报告并持续讨论，表明用户对交互流畅度和工具链兼容性的容忍度较低。  
- 插件生态方面，**API‑key 持久化**、**默认提供者覆盖**以及 **会话创建时重复加载插件** 的需求频繁出现，功能需求趋向于 **降低启动/会话开销、提升插件可配置性**。

---

### 版本发布
> 过去 24 小时内 **无** 新版本发布。

---

### 社区热点 Issues（精选 10 条）

| # | 标题与链接 | 为什么重要 | 社区反应 |
|---|------------|------------|----------|
| #10031 | [Pi sporadically stuck in "Working..." when thinking is stopped with <esc>](https://github.com/earendil-works/pi/issues/10031) | ESC 中断后卡住导致只能 Ctrl+C 退出，严重影响交互体验。 | 16 条评论，2 👍，用户反馈在多台机器上复现，持续约一个月。 |
| #7739 | [Set a startup-time budget targeting jcode‑comparable latency and memory](https://github.com/earendil-works/pi/issues/7739) | 启动时间与内存是 Pi 与竞品（jcode）的主要差距，设定预算有助于性能基准。 | 10 条评论，0 👍，讨论集中在如何测量与达成目标。 |
| #5581 | [Custom messages sent via `pi.sendMessage()` with `triggerTurn: true` bypass the `before_agent_start` event](https://github.com/earendil-works/pi/issues/5581) | 触发 Turn 的自定义消息跳过了关键生命周期事件，可能导致状态不一致。 | 8 条评论，3 👍，开发者指出在特定场景下会造成代理循环异常。 |
| #8810 | [Extension‑registered providers: fresh sessions intermittently ignore defaultProvider/defaultModel](https://github.com/earendil-works/pi/issues/8810) | 插件注册的提供者未能尊重全局默认，导致模型选择不可预测。 | 7 条评论，2 👍，影响依赖插件的工作流。 |
| #10033 | [Compaction prompt includes all thinking text and exceeds the context window while the session still fits](https://github.com/earendil-works/pi/issues/10033) | 压缩时把思维块完整塞入摘要提示，导致上下文溢出，压缩失效。 | 6 条评论，1 👍，尤其在使用 DeepSeek V4.1 等推理模型时明显。 |
| #9974 | [Pi mishandles Responses API tool calls as returned by llama.cpp, executing duplicated and corrupted calls](https://github.com/earendil-works/pi/issues/9974) | 工具调用被重复或损坏执行，可能产生副作用或错误结果。 | 6 条评论，0 👍，涉及与 llama.cpp 兼容性的底层 SSE 处理。 |
| #7658 | [Extension API for persisting API‑key credentials (auth.json)](https://github.com/earendil-works/pi/issues/7658) | 目前无法让插件程序化地把 API‑key 写入 auth.json，限制了安全凭据的动态管理。 | 5 条评论，0 👍，需求明确：提供 `pi.storeCredential()` 等接口。 |
| #9905 | [Anthropic: thinking.display is always sent as "summarized" and the CLI offers no way to change it](https://github.com/earendil-works/pi/issues/9905) | Anthropic 的思维显示模式被硬编码，用户无法选择完整或省略。 | 5 条评论，0 👍，影响对 Anthropic 模型思维输出的细粒度控制。 |
| #9946 | [CMD mode (!) ignores outputPad setting](https://github.com/earendil-works/pi/issues/9946) | CMD 前缀模式不遵循输出填充配置，导致界面对齐问题。 | 4 条评论，0 👍，虽然影响较小但暴露出配置传递链的缺失。 |
| #9010 | [Context compaction causes memory spikes with local LLMs due to in‑process string duplication](https://github.com/earendil-works/pi/issues/9010) | 压缩过程在主进程中多次复制巨字符串，导致可观内存峰值。 | 3 条评论，0 👍，针对本地大模型尤为致命。 |

---

### 重要 PR 进展（全部 4 条）

| PR | 标题与链接 | 功能/修复要点 |
|----|------------|----------------|
| #10040 | [feat(coding-agent): Codemode and MCP](https://github.com/earendil-works/pi/pull/10040) | 新增 **Codemode**（代码交互沙盒）以及 **MCP**（模型控制协议）支持，旨在让类 Jev 的模型获得更好的沙箱环境。 |
| #8572 | [feat(ai): amazon bedrock mantle](https://github.com/earendil-works/pi/pull/8572) | WIP：增加对 Amazon Bedrock **Mantle** API 的支持，以覆盖最新 GPT‑5 系列模型（现仅能通过 Converse 路由）。 |
| #10100 | [fix(ai): preserve signature-only reasoning details deltas](https://github.com/earendil-works/pi/pull/10100) | 修复了 OpenAI‑style `reasoning_details` 中仅携带 `signature` 而无 `text` 的 delta 被丢失的问题，确保推理签名能正确流向思维流。 |
| #10099 | [第一次Git实验作业：jiaqitang-1](https://github.com/earendil-works/pi/pull/10099) | 学习用途的 PR，仅修改了个人成员的 README，无功能影响。 |

---

### 功能需求趋势（从全部 Issues 中提炼）

| 趋势 | 体现的 Issues/需求 |
|------|-------------------|
| **启动与会话性能** | #7739（启动时间预算）、#10105/#10104（会话创建延迟与插件加载累计） |
| **内存与资源控制** | #9010（压缩导致内存峰值）、#10033（思维块冗余导致上下文溢出） |
| **插件生态完善** | #7658（API‑key 持久化）、#8810（默认提供者被覆盖）、#10105（插件重复加载） |
| **工具调用兼容性** | #9974（Responses API 与 llama.cpp 工具调用重复）、#10106（OpenAI‑Responses 模型 ID 冲突） |
| **交互流畅度** | #10031（ESC 卡住）、#9905（Anthropic thinking.display 固定）、#9946（CMD mode 忽略 outputPad） |
| **可观测性与审计** | #10095（modelRegistry.complete() 不触发 provider 事件）、#10093（暴露同运行时 ChatInvocationContext） |

---

### 开发者关注点（痛点与高频需求）

1. **启动与会话开销**  
   - 插件加载每次 new_chat 都会重复，导致从几秒到数分钟的延迟（#10105、#10104）。  
   - 期望有 **启动时间预算** 和 **增量插件缓存** 机制（#7739）。

2. **内存管理**  
   - 上下文压缩和思维块序列化会在主进程中产生大量临时字符串，引发内存峰值（#9010、#10033）。  
   - 需要 **流式或工作线程压缩**、以及 **思维块去重/摘要** 的改进。

3. **插件凭据与配置**  
   - 缺少程序化方式把 API‑key 写入 `auth.json`，迫使用户手动编辑或依赖不安全的环境变量（#7658）。  
   - 插件注册的提供者应尊重全局 `defaultProvider/defaultModel`，否则会导致模型选择不可预测（#8810）。

4. **交互可靠性**  
   - ESC 中断后卡住（“Working...”）是最常报告的交互故障，需彻底检查取消令牌传播（#10031）。  
   - 工具调用重复、损坏（尤其是与 llama.cpp 的 Responses API 交互）需要更严格的去重与状态校验（#9974、#10106）。

5. **可观测性与扩展性**  
   - 通过 `modelRegistry.complete()` 进行的内部 LLM 调用不触发 provider 事件，导致观测插件看不到使用情况（#10095）。  
   - 开发者希望暴露 **同运行时 ChatInvocationContext**，以便在单次聊调用中携带自定义数据（#10093）。

---

*以上内容基于截至 2026‑09‑28 23:59 UTC 的公开 GitHub 数据整理，旨在为 Pi 开发者及社区成员提供快速的技术动态概览。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-28

## 今日速览
- **无新版本发布**，但核心架构持续推进：Managed Agent 的 Stage D（API 合约）、D4（持久化操作）和 Stage F（容错门控）多个切片并行合并，ACP Bridge 完成 Stage B 主机集成。
- **稳定性问题集中暴露**：CI 出现 kernel-manager 和 llm 测试失败，macOS 桌面端面板 toggle 失效，以及 nightly 发布流程中断，引发社区高度关注。
- **安全与隐私修复活跃**：辅助模型选择器凭证泄露、`mcp reconnect` 绕过隐私设置上报 usage statistics 等问题被披露并修复。

## 版本发布
过去 24 小时无新版本发布。

## 社区热点 Issues（10 个）

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | Managed Agent 双路径架构与分阶段交付提案 | 架构级 P2，定义 TS Agent Loop 与模型推理解耦、Session 持久所有权 | 36 条评论，核心讨论最热 |
| [#12737](https://github.com/QwenLM/qwen-code/issues/12737) | ACP Bridge Stage B：双引擎（Legacy/Managed）主机集成 | P2，实现 `qwen serve` 主机实际使用双引擎 | 9 条评论，架构落地关键 |
| [#12826](https://github.com/QwenLM/qwen-code/issues/12826) | Webview CodeMirror EditorView.update 竞态崩溃（Remote-SSH） | P1 Bug，@file 引用时面板白屏 | 7 条评论，影响 Remote 开发体验 |
| [#12856](https://github.com/QwenLM/qwen-code/issues/12856) | 辅助模型选择器持久化 NUL 分隔的 baseUrl 导致凭证泄露 | P2 安全，baseUrl 中的 userinfo（`user:sk-...@host`）被明文输出 | 5 条评论，敏感 |
| [#12793](https://github.com/QwenLM/qwen-code/issues/12793) | Stage D：公共 API 合约、DTO 生成、Session 查询与事件回放 | P2，OpenAPI 合约与 DTO 生成 | 5 条评论，API 规范化 |
| [#12853](https://github.com/QwenLM/qwen-code/issues/12853) | Auto Memory 非阻塞审查债务跟进（#10183） | P3，5 轮审查后遗留项 | 5 条评论，记忆系统优化 |
| [#12835](https://github.com/QwenLM/qwen-code/issues/12835) | 排除 Skill 工具后仍注入技能列表 | P2，`--exclude-tools skill` 未生效 | 5 条评论，CLI 行为异常 |
| [#12802](https://github.com/QwenLM/qwen-code/issues/12802) | .deferred 标记永久阻塞更新，rollbackStandaloneUpdate 锁未固定 | P2，CLI 更新机制缺陷 | 5 条评论，升级受阻 |
| [#12874](https://github.com/QwenLM/qwen-code/issues/12874) | 右侧扩展面板打开后无法关闭（toggle 失效，macOS） | P2 UI Bug，状态机缺陷 | 4 条评论，macOS 用户反馈 |
| [#12859](https://github.com/QwenLM/qwen-code/issues/12859) | fastjson2 2.0.65 负小数精度丢失（JDBC 持久化后不可读） | P2，数值序列化回归 | 4 条评论，数据一致性风险 |

## 重要 PR 进展（10 个）

| # | 标题 | 类型 | 关键改动 |
|---|------|------|----------|
| [#11206](https://github.com/QwenLM/qwen-code/pull/11206) | 持久工作区代理执行 | 功能 | Daemon 启动/恢复 agent turns，绑定 task-scoped sessions，workspace 范围协作 |
| [#12869](https://github.com/QwenLM/qwen-code/pull/12869) | 受信任本地重启后恢复 Workspace 持有者（W0e-3） | 功能 | Linux 受信任本地 Runtime 重启后恢复，保留终端不确定性，定时清理 |
| [#12865](https://github.com/QwenLM/qwen-code/pull/12865) | 采用持久本地 Runtime workers | 功能 | Broker 重启后通过 seed/host/boot/ns/kernel PID 恢复 worker 与执行日志 |
| [#12881](https://github.com/QwenLM/qwen-code/pull/12881) | Session close/archive/delete 持久操作（Stage D4） | API | 两端操作持久化，迁移至 implemented（contract v1.18） |
| [#12883](https://github.com/QwenLM/qwen-code/pull/12883) | 严格配置快照与 Managed 兼容性评估（M3） | 架构 | B2d 设计前置：Managed 会话运行前的配置兼容性只读快照评估 |
| [#12876](https://github.com/QwenLM/qwen-code/pull/12876) | 修复 macOS 停靠右面板关闭问题 | Bugfix | 解决面板 toggle 按钮在 macOS 标题栏拖拽区域下方失效 |
| [#12838](https://github.com/QwenLM/qwen-code/pull/12838) | 跳过未注册 Skill 工具时的技能列表注入 | Bugfix | `--exclude-tools skill` 时不再注入 `<available_skills>` 及 fallback |
| [#12862](https://github.com/QwenLM/qwen-code/pull/12862) | 清除辅助模型选择器输出中的用户信息凭证 | 安全 | 修复 baseUrl 中 `user:sk-...@host` 被公开表面原样输出的泄露问题 |
| [#12884](https://github.com/QwenLM/qwen-code/pull/12884) | 加宽有界取消测试边距 | 测试 | kernel-manager 恢复测试超时从 200ms→2000ms，预算 10s→20s |
| [#12590](https://github.com/QwenLM/qwen-code/pull/12590) | 可选 System One Decision Gate（Von） | 性能 | 本地决策模型单次前向分类，明显请求直接跳过昂贵工作，默认关闭、失败开放 |

## 功能需求趋势
1. **Managed Agent 与多进程架构**：从 API 合约（D4）、工具轮转容错（FG6）到本地 worker 持久化（W0e），Community 聚焦多进程解耦与故障恢复。
2. **跨平台桌面体验**：linux-aarch64 发布矩阵、macOS 面板交互、Remote-SSH 兼容性需求上升。
3. **开发者体验与 CI 稳定性**：yamllint 回退、CI 失败自动修复、测试边距调整反映对 CI 健康度的焦虑。
4. **隐私与安全合规**：辅助模型凭证清理、`mcp reconnect` 绕过隐私设置上报，敏感数据处理成为热点。

## 开发者关注点
- **CI 脆弱性**：kernel-manager、llm 测试连续失败，夜间构建（nightly）发布中断，开发者对主干稳定性存疑。
- **macOS 特定缺陷**：面板 toggle 失效、标题栏拖拽区域遮挡，影响 Desktop 用户日常使用。
- **Runtime Broker 持久化**：重启后 worker 回收、LOST 绑定清理、Session 持久操作是当前技术债焦点。
- **安全审计**：凭证泄露（baseUrl userinfo）、隐私统计绕过、NO_PROXY 语法不一致，开发者对数据面曝光敏感。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI 社区动态日报（2026‑09‑28）**  

---

### 今日速览
- 今日没有新版本发布，社区活动聚焦在 Bug 修复与功能细节上。  
- 多个与 UI 响应性、后台任务管理以及成本可视化相关的 Issue 被反复讨论，显示出用户对流畅体验和透明计费的强烈诉求。  
- 开发者正通过一系列 PR（如 v0.10.1 集成 PR、国际化文档完成、思考强度标签保持等）逐步稳定核心交互并为下一个小版本做准备。

---

### 版本发布
> **无新版本**（过去 24 小时内没有 Release）。

---

### 社区热点 Issues（精选 10 条）

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|------------|----------|
| [#6690](https://github.com/Hmbown/Codewhale/issues/6690) | v0.10.0: OpenRouter session costs always show “rate unavailable” | 影响成本可视化，使用 OpenRouter 的用户无法看到实际消耗，直接影响预算控制。 | 新建 Issue，暂无评论，但已有 👍0，表明该问题急需关注。 |
| [#6651](https://github.com/Hmbown/Codewhale/issues/6651) | TUI interface cannot refresh in real time when not in focus | 后台运行时界面卡死，导致用户误认为程序无响应，影响交互体验。 | 1 条评论，👍0，反馈明显。 |
| [#6652](https://github.com/Hmbown/Codewhale/issues/6652) | After running for a long time, TUI scrolling becomes laggy, like jelly | 长时间使用后滑动出现抖动，暗示内部渲染或状态更新存在性能累积问题。 | 0 评论，👍0，但已被多次提及为使用痛点。 |
| [#6650](https://github.com/Hmbown/Codewhale/issues/6650) | The shortcut key for switching thinking intensity is abnormal | Ctrl+T 多次按下失效，影响快速调节思考深度的工作流。 | 0 评论，👍0，却是常用快捷键故障。 |
| [#6573](https://github.com/Hmbown/Codewhale/issues/6573) | Bug: Multiple TUI Sessions Contend on Subagents Store → CPU Spin-loop | 多实例竞争导致 CPU 被空转占用，严重影响系统资源。 | 1 条评论，👍0，已被标记需 triage。 |
| [#6689](https://github.com/Hmbown/Codewhale/issues/6689) | hooks: export a post‑admission execution receipt to tool_call_after | 目前 hook 无法获得真正执行的命令，影响审计和自动化脚本。 | 0 评论，👍0，功能需求明显。 |
| [#6546](https://github.com/Hmbown/Codewhale/issues/6546) | To‑do list is not manageable (at least not with known menu items) | 用户无法清除已待办任务，导致列表堆积，影响使用便利性。 | 0 评论，👍0，持续存在的可用性问题。 |
| [#6688](https://github.com/Hmbown/Codewhale/issues/6688) | exec takes the prompt only as argv, so anything above ~128 KiB fails with E2BIG | 大提示或脚本无法通过 `codewhale exec` 传递，限制了批处理场景。 | 0 评论，👍0，性能瓶颈。 |
| [#6616](https://github.com/Hmbown/Codewhale/issues/6616) | AICraft — docs_url, credential_url and guidance for the aicraft descriptor | 缺少必要的描述字段，导致模型描述不完整，影响插件生态。 | 0 评论，👍0，文档完善需求。 |
| [#6621](https://github.com/Hmbown/Codewhale/issues/6621) | Bind fresh HTTP threads to their live snapshot session for file undo | HTTP 线程未绑定会话导致 undo/redo 失效，影响文件回滚可靠性。 | 0 评论，👍0，核心功能缺陷。 |

---

### 重要 PR 进展（精选 10 条）

| # | 标题 | 功能/修复内容 | 备注 |
|---|------|---------------|------|
| [#6672](https://github.com/Hmbown/Codewhale/pull/6672) | v0.10.1 integration: land the ready PRs together | 将已就绪的 PR 合并为一次集成，减少 CI 重复运行，为 v0.10.1 做准备。 | 为后续版本发布奠定基础。 |
| [#6663](https://github.com/Hmbown/Codewhale/pull/6663) | docs(i18n): complete the Tier‑3 developer and internal docs for EPIC #5482 | 完成简体中文的 Tier‑3（开发者及内部）文档译本。 | 提升非英语开发者友好度。 |
| [#6662](https://github.com/Hmbown/Codewhale/pull/6662) | docs(i18n): complete the Tier‑2 should‑have docs for EPIC #5482 | 完成简体中文的 Tier‑2（应尽）用户文档。 | 用户手册本地化进展。 |
| [#6686](https://github.com/Hmbown/Codewhale/pull/6686) | fix(tui): keep the thinking label in the footer at every effort tier | 扩大思考强度标签的展示宽度，防止在窄布局被截断。 | 解决 #6650 相关的显示问题。 |
| [#6687](https://github.com/Hmbown/Codewhale/pull/6687) | fix(tui): first launch keeps the configured provider instead of adopting local Ollama | 首次启动时尊重已配置的 provider，避免被本地 Ollama 误覆盖。 | 提升首次使用体验。 |
| [#6684](https://github.com/Hmbown/Codewhale/pull/6684) | fix(rlm): bound an RLM turn by the child wall‑clock budget | 为 RLM 轮次加入壁钟时间上限，防止无限卡死。 | 增强模型调用的可预测性。 |
| [#6685](https://github.com/Hmbown/Codewhale/pull/6685) | fix(tui): read anchors, notes and registry names through one confined open | 统一受限打开路径，提升安全性并防止越界读取。 | 安全加固。 |
| [#6667](https://github.com/Hmbown/Codewhale/pull/6667) | fix(tui): Ctrl+T moves to a new effective thinking tier on fixed routes | 调整思考强度切换逻辑，使固定路由下的 Ctrl+T 生效。 | 直接对应 #6650。 |
| [#6635](https://github.com/Hmbown/Codewhale/pull/6635) | fix(tui): background work tells you when it ends, and how (#6565 B) | 后台任务完成时给出明确通知及结束方式。 | 改善后台作业的可见性。 |
| [#6682](https://github.com/Hmbown/Codewhale/pull/6682) | fix(tui): scope /undo to the paths the undone step changed (#6644) | 将 undo 操作限制在实际修改的文件路径上，防止误删。 | 增强 undo/redo 的精确性。 |

---

### 功能需求趋势
从本日 Issues 与 PR 中可以提炼出社区的三大关注方向：

1. **性能与响应性**  
   - UI 刷新滞后（#6651、#6652）、长时间滑动卡顿、CPU 空转（#6573）均指向渲染循环与后台任务调度的优化需求。  
   - 需要更细粒度的帧率控制、渲染批处理以及后台线程的退出检测。

2. **可视化与可审计性**  
   - 成本显示异常（#6690）以及 hook 缺失真实执行命令（#6689）表明用户希望对费用、工具调用以及会话行为有完整、可追溯的记录。  
   - 未来可能加入详细的计费中间件以及统一的事件审计日志。

3. **工作流便利性**  
   - 待办列表不可清（#6546）、快捷键失效（#6650）、大 prompt 传递受限（#6688）以及 undo 范围不准确（#6644）反映出对日常交互细节的打磨需求。  
   - 期望提供更直观的菜单、可配置的快捷键以及更灵活的参数传递方式（如 stdin 或文件）。

---

### 开发者关注点（痛点与高频需求）
- **CPU 自旋与资源泄漏**：多实例竞争导致的空循环（#6573）是当前最高优先级的稳定性问题。  
- **界面卡顿与刷新机制**：后台失焦时的 UI 不更新（#6651）及长时间运行后的滑动抖动（#6652）直接影响日常使用感受。  
- **成本与计费透明**：OpenRouter 费用不可用（#6690）阻碍了预算控制，亟需定价管线的修复。  
- **Hook 数据完整性**：缺少真实执行命令的上下文（#6689）限制了自动化和审计场景。  
- **后台任务生命周期**：背 shell 未随 TUI 退出而清理（#6654）以及完成后缺少明确通知（#6635）导致资源浪费和状态混乱。  
- **本地化与文档**：国际化文档的持续推进（#6663、#6662）显示社区对非英语文档的强烈需求。  
- **编辑安全与撤销**：文件撤销/恢复的范围控制（#6682、#6621）是确保数据不被误改的关键。  

以上即为 2026‑09‑28 日 DeepSeek TUI 社区的主要动态与趋势。如需进一步追踪特定 Issue 或 PR 的讨论，请点击对应链接查看细节。祝开发顺利！

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*