# AI CLI 工具社区动态日报 2026-10-04

> 生成时间: 2026-10-04 03:27 UTC | 覆盖工具: 9 个

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

**AI CLI Tool Ecosystem Comparative Analysis | 2026-10-04**

### 1. 生态全景
当前 AI CLI 生态呈现**“安全稳固化 + Agent可靠性提升 + 跨平台体验差异化”**的双轨并进态势。各工具均在基础设施、权限模型与上下文治理上加码，但Windows原生稳定性、跨设备会话持久化以及多模态编排 remain the critical bottlenecks。发布节奏分化明显：Claude Code与Qwen Code实现日夜迭代与版本化发布，OpenAI Codex与GitHub Copilot CLI维持alpha/维护模式，DeepSeek TUI/OpenCode处于内核重构与TUI专业化的攻坚期，Kimi Code CLI处于静默周期。

### 2. 各工具活跃度对比

| 工具 | 今日Issue数 (精选) | 今日PR数 (状态) | Release情况 |
|------|-------------------|----------------|-------------|
| **Claude Code** | 10条 (含#37951内联diff开关、#94478 Win进程泄漏、#98747空压缩静默丢失) | 5开 (安全默认收紧、diff渲染修复、hookify路径解耦) | ✅ v2.1.289 当日发布 |
| **OpenAI Codex** | 10条 (Win终端闪烁#48074、VS Code扩展清空composer#49988、DOT tools缺失#49458) | 20+合并 (含2个rust alpha、大量闭环bug修复) | ⚡ rust-alpha v0.162.0-alpha.10/11 发布，无正式版 |
| **Gemini CLI** | 10条 (Subagent转真实#22323、Generalist Agent挂起#21409、Browser Wayland#21983、工具计数溢出#24246) | 10开/闭 (4性能优化PR同日合并、Windows quoting加固、Subagent多模态保留) | 🌙 nightly 0.52.0.20260722，无新版本 |
| **GitHub Copilot CLI** | 10条 (macOS设备ID过期#4998、MCP目录回归#5044、Entra ID OAuth#5040、ACP暴露辅助审批#5047) | 1仅初始提交 (#5046)、其余无实质变更 | ❌ 无新版本，维护/BUG-mod仅 |
| **Kimi Code CLI** | 0条 | 0条 | ❌ 过去24h无活动 |
| **OpenCode** | 10条 (模型重复输出#25270、日文莫比乌斯#30068、MCP权限卡死#51223、子进程泄漏#52410) | 10+合并 (Google协议、请求验证、主题发现、失败闭合、UTF-8凭证等) | 📦 无正式版，最新代码推送 |
| **DeepSeek TUI** | 5条 (EPIC-005 Crate分解#5316、Win npm杀进程#6827、会话恢复失败#6418、定时任务UI#6328、组件目录#6818) | 9开/闭 (Engine convergence、Command shapes、Plugin OAuth、TUX细节修复、RFC合规) | ❌ 无新版本，内部重构为主 |
| **Qwen Code** | 10条 (Managed Agent双路径#12380、上下文令牌治理#12028、ACP Stage B#12737、无早终止#10887) | 10+合纳 (Managed Agent权限止回、可靠Workspace删除、预算侧查询、Session isolation恢复) | ✅ v0.24.7-nightly.20261003.2c591ecc08 当夜构建 |

### 3. 共同关注的功能方向
跨工具社区高度重合的核心诉求包括：
- **会话/上下文持久化**：Claude Code(#31992, #98747)、Gemini CLI(#22323, #21409)、Qwen Code(#12380, #13354)、OpenCode(#41354)均聚焦跨机

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（截至 2026‑10‑04）**  

---

### 1. 热门 Skills 排行  
*(基于 PR 的最近活跃度、更新频率及社区关注度（尽管评论数未公开，但通过更新时间、参与者及功能热度判断）)*  

| 排名 | PR 链接 | Skill 名称 | 功能简介 | 社区讨论热点 | 当前状态 |
|------|---------|------------|----------|--------------|----------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill‑creator** | 改进触发器评估隔离、Windows 兼容性及运行时故障处理 | 修复跨平台触发失效、防止误报，是技能开发流程的基石 | **OPEN**（最后更新 2026‑09‑16） |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp‑builder** | 适配 MCP ≥ 2.0 的 `streamable_http_client` 接口变更并支持自定义 HTTP Header | 解决随 MCP 版本升级而失效的连接脚本，影响所有基于 MCP 的技能 | **OPEN**（最后更新 2026‑09‑29） |
| 3 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore‑contract‑auditor** | Web3 开发者用于 Solidity/Rust 合约静态分析并将审计证明锚定到 TON 区块链（零存储 Merkle 协议） | 首次引入链上可验证的合约审计，吸引加密安全社区关注 | **OPEN**（最后更新 2026‑09‑16） |
| 4 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video‑audio** | 将 Markdown 文档直接转为带有人声旁白的 MP4 视频（基于 Marp + TTS） | 零成本的文档‑视频一键转换，适用于教学、产品演示等场景 | **OPEN**（最后更新 2026‑09‑15） |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) | **notion‑spec‑to‑implementation** + **quantitative‑resume‑auditor** | 前者把产品/技术规格自动拆解为 Notion 任务；后者对简历进行定量化审计（关键词匹配、指标校验） | 两个技能分别服务于产品交付与人力资源，社区普遍认为填补了“需求落地”与“简历优化”的空白 | **OPEN**（最后更新 2026‑09‑30） |
| 6 | [#1792](https://github.com/anthropics/skills/pull/1792) | **docx** | 在 LibreOffice 超时时返回错误，并校验输出 DOCX 不再包含修订痕迹 | 提升文档自动化的可靠性，解决之前误判成功的问题 | **OPEN**（最后更新 2026‑09‑25） |
| 7 | [#1607](https://github.com/anthropics/skills/pull/1607) | **claude‑api** | 将四个已退役的模型 ID 标记为 retired，防止误用 | 防止开发者在旧模型上浪费 token，提升技能的正确性 | **OPEN**（最后更新 2026‑10‑03） |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 复古游戏开发全流程（创建、调试、帧检测） | 对怀旧游戏制作者及教学场景有持续兴趣 | **OPEN**（最后更新 2026‑09‑22） |

> **备注**：因 PR 列表中未返回具体评论数，上述排名综合考虑了最近更新时间、修复的核心问题以及技能的广泛适用性。

---

### 2. 社区需求趋势（从 Issues 中提炼）  

| 高频议题 | 代表 Issue（评论数） | 社区期待的 Skill 方向 |
|----------|----------------------|----------------------|
| **信任边界与安全** | #492（43 评论） | 防止社区技能冒充官方 `anthropic/` 名称空间，建议命名空间隔离、签名或审计机制。 |
| **组织内共享与协作** | #228（16 评论） | 提供组织级技能库或直接共享链接，降低手动上传/下载成本。 |
| **技能触发可靠性** | #556（12 评论） | 改进 `run_eval.py` 与 `claude -p` 的触发检测，确保技能在实际查询中被正确调用。 |
| **技能丢失/状态同步** | #62（10 评论） | 提供技能导出/导入、版本控制或云同步功能，防止本地文件误操作导致丢失。 |
| **记忆压缩与上下文管理** | #1329（9 评论） | 引入 `compact-memory` 等符号化状态技能，减少长代理会话的 token 消耗。 |
| **技能开发最佳实践** | #202（8 评论） | 更新 `skill-creator` 使其更像可执行的操作指南，而非纯文档。 |
| **AI 治理与安全** | #412（6 评论） | 呼声最高的 `agent-governance` 技能，涵盖策略执行、威胁检测、信任评分、审计轨迹。 |
| **重复技能与插件冲突** | #189（6 评论） | 明确 `document-skills` 与 `example-skills` 插件的职责边界，避免重复安装。 |
| **技能体积与上下文窗口** | #1487（4 评论） | 对体积庞大的技能（如 `claude-api`）实施懒加载或按需注入，防止一次性耗尽 context。 |

**趋势总结**：社区最迫切的需求围绕 **安全/信任**、**协作共享**、**可靠性（触发与评估）**、以及 **上下文效率**。与此对应的期待技能包括：防冒名技能、组织技能库、可靠触发框架、记忆压缩、AI治理以及轻量级技能加载机制。

---

### 3. 高潜力待合并 Skills  
（评论活跃、最近更新且仍处于 **OPEN** 状态的 PR，预计近期会被合并并产生实际影响）

| PR | Skill | 为什么是高潜力 |
|----|-------|----------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp‑builder** | 修复 MCP 2.x 兼容性，直接影响所有依赖 MCP 连接的技能；更新及时，社区亟需。 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore‑contract‑auditor** | 首个链上可验证的合约审计技能，填补 Web3 安全空白，受到加密开发者关注。 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video‑audio** | 零成本文档‑视频转换，适用于教学、市场营销，具有广泛传播潜力。 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion‑spec‑to‑implementation** & **quantitative‑resume‑auditor** | 双功能 PR，分别服务产品交付与人力资源，实际落地价值高。 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | **docx** | 提升 LibreOffice 自动化的健壮性，解决之前误判成功的关键 bug。 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude‑api** | 清理过时模型 ID，防止 token 浪费，是维护官方技能质量的常规工作。 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **skill‑creator** | 允许直接执行 `package_skill.py` 并修正使用路径，降低技能打包门槛。 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | **claude‑api**（文档链接修复） | 虽是文档修复，但消除了死链，提升新手上手体验。 |

> 这些 PR 均在最近两周内有更新，且解决了社区在 Issues 中反馈的核心痛点（兼容性、可靠性、功能缺失），具备较高的近期合并概率。

---

### 4. Skills 生态洞察  
**当前社区在 Skills 层面最集中的诉求是：构建一个安全可信、易于组织共享且触发可靠的技能生态系统，同时通过轻量化、模块化的技能（如记忆压缩、链上审计、文档‑视频转换）提升实际工作流的自动化效率。**  

---  

*所有链接均指向 GitHub 上的对应 PR 或 Issue，便于直接查看详细讨论与代码。*

---

# Claude Code 社区动态日报 | 2026-10-04

---

## 1. 今日速览

- **v2.1.289 发布**，修复了托管机器上嵌套复合 Shell 命令的 deny/ask 规则不生效、终端因未闭合 `<script>` 标签或深层 `${` 替换冻结、以及 `Read` 相关的若干问题。
- 社区高呼声 Issue 集中在 **内联 diff 隐藏开关（#37951，101 👍）**、**跨机器会话恢复（#31992）**、**Windows 桌面端 Git 进程泄漏导致内存暴涨（#94478）**、**空闲压缩静默丢弃上下文（#98747）** 等核心体验与稳定性痛点。
- PR 端主要聚焦于 **diff 面板渲染修正**、**安全默认策略收紧（插件只能收紧权限，不能放宽）**、**hookify 包导入路径解耦** 等基础设施完善。

---

## 2. 版本发布

### v2.1.289 (2026-10-04)
| 变更类别 | 说明 |
|----------|------|
| **安全/权限** | 修复托管机器上：嵌套复合 Shell 命令的 `deny/ask` 规则，在用户安装的 mod 批准后不再意外失效 |
| **终端稳定性** | 修复短代码块中大量未闭合 `<script>` 标签或深层嵌套 `${` 替换导致终端冻结 |
| **文件读取** | 修复 `Read` 工具相关问题（日志截断，细节待完整 changelog） |

> 🔗 [Release v2.1.289](https://github.com/anthropics/claude-code/releases/tag/v2.1.289)

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 类型 | 热度 | 核心诉求 | 为什么重要 |
|---|-------|------|------|----------|------------|
| 1 | [#37951](https://github.com/anthropics/claude-code/issues/37951) | 增强 | 30 评论 / 101 👍 | 新增 `showDiffs: false` 设置，隐藏 Edit/Write 工具输出的内联 diff | **最高呼声功能**，直接影响日常编码阅读体验，大量用户认为内联 diff 干扰对话流 |
| 2 | [#31992](https://github.com/anthropics/claude-code/issues/31992) | 增强 | 12 评论 / 20 👍 | 跨机器 CLI→CLI 会话恢复：同步会话状态实现无缝切换 | 多设备开发刚需，解锁“办公室→家里→服务器”无缝流转 |
| 3 | [#94478](https://github.com/anthropics/claude-code/issues/94478) | Bug/性能 | 9 评论 | Windows 桌面端每秒生成 ~17 个 `git.exe` 进程，导致内核池泄漏 ~6 GB/天 | **严重资源泄漏**，长时间运行会拖垮整机性能，阻碍 Windows 生产力采用 |
| 4 | [#98747](https://github.com/anthropics/claude-code/issues/98747) | Bug | 9 评论 / 6 👍 | 2.1.286+ 空闲会话自动压缩，无开关、无提示，静默丢弃长会话上下文 | 破坏长任务连续性，用户失去对上下文生命周期的控制权 |
| 5 | [#87424](https://github.com/anthropics/claude-code/issues/87424) | Bug/网络 | 8 评论 / 8 👍 | macOS 上 CLI 与桌面端间歇性 `ECONNRESET`，无 VPN/代理环境 | 网络层不稳定导致会话中断，影响核心可用性 |
| 6 | [#72957](https://github.com/anthropics/claude-code/issues/72957) | Bug/工具 | 7 评论 | Write/Edit 工具静默解码 `\uXXXX`，导致无法写入字面转义序列 | 数据完整性缺陷，影响生成包含 Unicode 转义的代码/配置场景 |
| 7 | [#83841](https://github.com/anthropics/claude-code/issues/83841) | Bug/macOS | 7 评论 / 6 👍 | macOS 26 每次启动 Claude Code 都弹窗“访问其他 App 数据”且无法消除 | 系统级权限弹窗刷屏，严重破坏 macOS 用户首启体验 |
| 8 | [#97398](https://github.com/anthropics/claude-code/issues/97398) | Bug/计费 | 6 评论 | 9/25 重置后周限额消耗速度 ~3.6×，疑似计量异常 | 直接关系用户成本与信任，需官方确认是否为计费逻辑变更 |
| 9 | [#98159](https://github.com/anthropics/claude-code/issues/98159) | 增强/Web | 5 评论 / 8 👍 | claude.ai 支持设置默认权限模式（含“跳过所有批准”） | Web 端高频交互优化，减少重复确认点击 |
| 10 | [#99332](https://github.com/anthropics/claude-code/issues/99332) | Bug/a11y | 1 评论 | 虚拟化转录导致屏幕阅读器读取内容被卸载，阅读跳回顶部 | **无障碍严重缺陷**，已定位根因并提供 workaround，需尽快修复 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#99137](https://github.com/anthropics/claude-code/pull/99137) | Open | **sec-default**：用户插件只能收紧（deny/ask/pinned var），不能放宽权限 | 安全模型核心变更，防止恶意/误配插件提权 |
| 2 | [#99206](https://github.com/anthropics/claude-code/pull/99206) | Open | diff 面板：停靠模式下首行不再自留空行，由引擎统一保留关闭标记行 | UI 渲染一致性，消除多余空白行 |
| 3 | [#99141](https://github.com/anthropics/claude-code/pull/99141) | Open | diff 面板：尚无内容可绘制时保留面板占位，绘制就绪即显示 | 避免面板闪烁/布局抖动 |
| 4 | [#81672](https://github.com/anthropics/claude-code/pull/81672) | Open | hookify：包导入不再依赖安装目录名为 `hookify`，兼容 Marketplace 重命名安装 | 插件生态兼容性，解决 #69665 #81448 |
| 5 | [#77977](https://github.com/anthropics/claude-code/pull/77977) | **Closed** | 文档：记录 `github`/`git` marketplace source 的 `skipLfs` 选项 | 开发者体验，减少大型 LFS 仓库下载体积 |

> 💡 PR 数量较少但质量高，均为**基础设施/安全/渲染层**的精准修复，反映维护节奏偏向稳健迭代。

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **会话持久化与跨设备流转** | #31992, #99156, #98747 | 🔥🔥🔥 高 — 多机开发、长任务、压缩策略可控性 |
| **权限/批准体系精细化** | #37951, #98159, #98591, #99137(PR) | 🔥🔥 高 — 内联 diff 开关、默认权限模式、批准后脚本防篡改、插件权限收紧 |
| **Windows 原生体验达标** | #94478, #96792, #98082, #99347, #99265 | 🔥🔥 高 — 进程泄漏、MCP OAuth 失败、GPU 闪烁、Remote Control 稳定性、多聊天 UI 同步 |
| **macOS 系统集成与无障碍** | #83841, #87424, #99140, #99332 | 🔥🔥 中高 — TCC 反复弹窗、网络重置、Ghostty 图标重复、屏幕阅读器兼容 |
| **Token/用量透明化与计费信任** | #97398, #97449

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报**  
**报告日期：2026-10-04**  
*技术分析师视角 | 聚焦 AI 开发工具链与社区动态*

---

### 1. 今日速览
今日 GitHub `openai/codex` 累计推送 50 条 Issue 更新与 20 条 PR 合并，社区关注点集中在 **Windows 平台稳定性、VS Code 扩展可靠性以及 Dot 远程任务管理** 三大块。两个 rust alpha 版本发布，大量闭环 bug 修复与体验优化 PR 陆续上线，整体节奏体现出 OpenAI 对跨平台兼容性与 Claude/Codex 功能一致性的持续微调。

🔗 [GitHub 官方动态页面](https://github.com/openai/codex)

---

### 2. 版本发布
- **rust-v0.162.0-alpha.11** / **rust-v0.162.0-alpha.10**  
  两个内部预发版发布，均针对 `AbsolutePathBuf` 解析、守护进程启动与 WSL 环境权限等基础设施问题进行了细致修复，为下一代 CLI 0.162.0 的稳定发布打地基。暂无用户可直接使用的正式版更新。

🔗 #48074 / #48913（对应 alpha 变动关联）

---

### 3. 社区热点 Issues (精选 10)
| Issue | 评论 | 关键原因 | 社区反应 |
|------|------|----------|----------|
| #48074 | 143 | Windows 终端请求后反复闪烁，安装 Codex daemon 后出现 | 👍 152，被标记为 workflow-blocking，社区多次 reproduced，开发者呼吁紧急修复 |
| #49458 | 45 | Dot-started local tasks 缺失 Computer Use tools，普通 session 正常 | 👍 19，DOT 用户最常投诉的功能缺失，跨能力不一致引发重试 |
| #49988 | 38 | VS Code extension 更新后频繁清空 composer，消息丢失 | 👍 47，超高频 bug，多位用户反馈“输入几次才能成功”，影响日常效率 |
| #49488 | 23 | Windows 电脑任务缺少 browser/desktop tools，MCP 启动失败 | 👍 8，computer-use 与 MCP 耦合失败，阻碍自动化任务完成 |
| #49618 | 20 | Windows ↔ Android 远程配对循环，“Approve this phone” 反复出现 | 👍 12，跨设备配对失败是主要痛点，多设备用户直投 |
| #43347 | 19 | 关闭最后一个 in-app Browser Use tab 会 crash 整个桌面应用 | 👍 0，渲染器与 app-server 分离后的边界问题

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-10-04

---

## 1. 今日速览

今日无新版本发布。社区核心精力集中在 **Agent 子系统的稳定性治理**（Subagent 恢复逻辑、Generalist Agent 挂起、Browser Agent Wayland 兼容）与 **核心性能优化**（历史压缩算法线性化、状态快照查找优化、Windows 子进程安全加固）。多个 P1 级 Bug 正在复测，性能优化 PR 群（`#29512` `#29515` `#29516` `#29517`）显示团队正攻坚大上下文场景下的延迟问题。

---

## 2. 版本发布

> 过去 24 小时无新 Release。最新夜间构建为 `0.52.0-nightly.20260722`（PR `#28478`）。

---

## 3. 社区热点 Issues（精选 Top 10）

| # | Issue | 标签/优先级 | 核心问题 | 关注理由 & 社区反应 |
|---|-------|-------------|----------|---------------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **P1, Bug, Need-Retesting** | `codebase_investigator` Subagent 触及 `MAX_TURNS` 仍上报 `GOAL success`，掩盖中断事实 | **最热 Issue（13 评论，👍2）**。导致上层编排误判任务完成，破坏可靠性。正在复测。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **P1, Bug, Need-Retesting** | Generalist Agent 接管后无限挂起（文件夹创建等简单任务），需显式禁用 Subagent 才能规避 | **高赞（👍8）**。阻塞基础文件操作，严重影响可用性。正在复测。 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **P2, Enhancement, Large** | 引入零依赖 OS 沙箱 + 执行后意图路由，释放模型原生 Bash 亲和力 | **架构级探索（9 评论）**。旨在安全前提下解锁模型原生工具链能力，长期演进方向。 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **P2, Epic** | 评估 AST 感知的文件读取/搜索/代码库映射价值 | **7 评论**。关联 `#22746` `#22747`，探索结构化代码理解以减少 Token 消耗与轮次。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **P2, Bug, Need-Retesting** | 模型极少主动调用 Skills/Subagents，需显式指令才触发 | **7 评论**。Agent 编排核心痛点：自主规划能力不足，影响复杂任务自动化。 |
| 6 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **P2, Bug** | Browser Agent 忽略 `settings.json` 覆盖（如 `maxTurns`） | 配置失效，导致长任务无法通过配置控制超时。 |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **P1, Bug, Agent/Browser** | Browser Subagent 在 Wayland 环境下失败 | **👍1**。Linux 桌面主流显示协议兼容性缺失，阻塞部分用户。 |
| 8 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **P2, Bug, Need-Info** | 工具数 > 128（实为 400+）时触发 400 错误 | 工具注册表膨胀触发模型端限制，需动态剪枝策略。 |
| 9 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **P1, Bug, Need-Info** | `get-shit-done` 输出 Hook 在汇总阶段导致 CLI 崩溃 | **P1 崩溃**。输出管道处理存在竞态或空指针。 |
| 10 | [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) | **P3, Enhancement** | 替换 `WriteToDo` 为持久化文件任务追踪（CRUD） | **长期需求**。解决上下文腐烂、Token 成本、跨会话记忆丢失三大问题。 |

---

## 4. 重要 PR 进展（精选 Top 10）

| # | PR | 状态 | 类型 | 核心变更 | 影响 |
|---|----|------|------|----------|------|
| 1 | [#29411](https://github.com/google-gemini/gemini-cli/pull/29411) | **Closed** | Fix (Core) | `--resume` 现按“最近活跃时间”而非“创建时间”恢复会话 | 修复 `#29410`，符合用户直觉，避免误入旧分支会话。 |
| 2 | [#29407](https://github.com/google-gemini/gemini-cli/pull/29407) | **Closed** | Fix (Core) | JSON 序列化保留共享引用（祖先路径追踪替代全局 WeakSet） | 修复 `#29406`，OpenTelemetry 导出不再丢失重复数组数据。 |
| 3 | [#29517](https://github.com/google-gemini/gemini-cli/pull/29517) | Open | Perf (Core) | `truncateHistoryToBudget`：`unshift()` → `push()+reverse()` 线性化重建 | **大上下文压缩加速**，基准 10k 消息 18.97ms → 5.01ms。 |
| 4 | [#29515](https://github.com/google-gemini/gemini-cli/pull/29515) | Open | Perf (Agent) | 状态快照 ID 查找：`indexOf` → `Set` O(1) | 合成基准 291ms → **10ms**（28x 提升）。 |
| 5 | [#29516](https://github.com/google-gemini/gemini-cli/pull/29516) | Open | Perf (Agent) | 转录轮次索引缓存：`Map` 替代 `indexOf` | 格式化基准 414ms → **18ms**（23x 提升）。 |
| 6 | [#29512](https://github.com/google-gemini/gemini-cli/pull/29512) | Open | Perf (Agent) | 聊天压缩历史重建线性化（同 `#29517` 核心逻辑） | 核心热路径优化，减少 GC 压力。 |
| 7 | [#29510](https://github.com/google-gemini/gemini-cli/pull/29510) | Open | Fix/Security (Editor) | Windows `shell:true` 参数加固引用 `quoteCmdArg`，防命令注入 | **安全修复**，修复含特殊字符路径的 diff 调用失败。 |
| 8 | [#29621](https://github.com/google-gemini/gemini-cli/pull/29621) | Open | Fix (Core) | 保留 Subagent 多模态工具响应 `parts`（图片等） | 修复子代理返回截图/图像被丢弃导致模型“失明”。 |
| 9 | [#29622](https://github.com/google-gemini/gemini-cli/pull/29622) | Open | Fix (Core) | `tildeifyPath` 仅在路径边界替换 `~`，修复同名前缀目录误判 | 修复 `~/projects/foo` 与 `~/projects/foobar` 显示冲突。 |
| 10 | [#28664](https://github.com/google-gemini/gemini-cli/pull/28664) | Open | Fix (MCP) | 同意提示完整反映 MCP 服务器配置，新增 `env`/`cwd`/`headers` 对比 | 增强供应链安全，变更检测更严格。 |

> **性能专项观察**：`#29512` `#29515` `#29516` `#29517` 四个 PR 同日更新，均由 `harshitgupta31415` / `Kaushik2210` 推动，聚焦 **O(n²) → O(n) 算法降维**，直指长会话、大上下文、高轮次场景的交互延迟。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 |
|----------|------------|--------------|
| **Agent 编排与自主性增强** | `#21968` (主动用 Skill)、`#22323` (Subagent 状态诚实)、`#22598` (轨迹可视化)、`#18287` (并行协作) | ⭐⭐⭐⭐⭐ 核心阻塞点 |
| **结构化代码理解** | `#22745` `#22746` `#22747` (AST 感知读/搜/图)、`#19561` (Tactful Extraction) | ⭐⭐⭐⭐ 效率杠杆 |
| **持久化与上下文工程** | `#18836` (文件化 Todo)、`#21000` (原生文件工具做 Task Tracker)、`#18397` (Workspace 级 Policy) | ⭐⭐⭐⭐ 长期刚需 |
| **沙箱与原生工具链** | `#19873` (Zero-Dep Sandbox + Bash Affinity) | ⭐⭐⭐ 架构演进 |
| **跨平台兼容性** | `#21983` (Wayland)、`#29510` (Windows quoting)、`#29622` (路径显示) | ⭐⭐⭐ 基础体验 |
| **评测与可观测性** | `#23166` (内部 Eval 稳定)、`#23313` (Steering Test)、`#21763` (Bug Report 含 Subagent) | ⭐⭐⭐ 质量保障 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **Subagent 可信度危机**  
   - `#22323` `#21409` `#21968` 连环暴露：子代理**状态上报失真**、**挂死**、**不自主调用**。开发者被迫显式禁用 Subagent 才能完成基础任务，信任度降级。

2. **长上下文/多轮次性能悬崖**  
   - 压缩服务、快照查找、转录索引均出现 O(n²) 瓶颈。性能优化 PR 群集中合并，说明**生产环境已触及延迟红线**。

3. **配置系统一致性缺失**  
   - `#22267` Browser Agent 忽略 `settings.json`；`#20079` Symlink Agent 不识别。配置加载路径分裂，导致“文档说支持、运行不生效”反复出现。

4. **多模态数据在编排链路丢失**  
   - `#29621` 修复 Subagent 图片丢弃；`#22186` Hook 崩溃。工具响应 `parts` 在调度器、压缩器、序列化多环节被切片，需统一数据契约。

5. **Windows 原生体验差距**  
   - `#29510` 命令注入风险、路径引用破坏；`#29622` `~` 展开错误。Windows 用户占比不低但修复优先级常被延后。

6. **评测体系不可信**  
   - `#23313` 测试被迫注释跳过；`#23166` Eval “bleed” 导致结果不可复现。缺乏可信评测阻碍重构自信心。

---

## 关键链接汇总

- **Issue 看板**（按更新时间）：<https://github.com/google-gemini/gemini-cli/issues?q=sort%3Aupdated-desc+is%3Aissue>
- **PR 看板**：<https://github.com/google-gemini/gemini-cli/pulls?q=sort%3Aupdated-desc+is%3Apr>
- **性能优化 PR 群**：`#29512` `#29515` `#29516` `#29517`
- **P1 Bug 追踪**：`#22323` `#21409` `#21983` `#22186`

---

> **分析师注**：当前迭代呈现“**治理债务偿还 + 性能攻坚**”双主线。建议关注本周内 `#22323` `#21409` 复测结果，以及性能 PR 合并后的夜间版基准数据——这将决定下一个稳定版的发布节奏与质量基线。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报**  
*2026-10-04 | 数据源: github.com/github/copilot-cli*

---

### 1. 今日速览
过去24小时无新版本发布，但社区活跃度较高，共收到约10+条新问题与更新。重点关注 **macOS 重启后 CLI 失效**（#4998）、**MCP 工具目录回归**（#5044）以及 **Windows ACP 模式插件不可用**（#5049）等阻塞性缺陷。ACP 模式的权限控制与模型暴露成为新热点。

---

### 2. 版本发布
暂无新版本。

---

### 3. 社区热点 Issues

| # | 标题 | 状态 | 亮点 |
|---|------|------|------|
| [4998](https://github.com/github/copilot-cli/issues/4998) | macOS 更新后 `.mcp-writer.binding` 设备 ID 过期导致 CLI 不可用 | OPEN | ⭐7👍 7💬，**阻塞性 Bug**，影响所有会话 |
| [5044](https://github.com/github/copilot-cli/issues/5044) | 1.0.87 回归：MCP 工具调用因 `_meta` 差异失败 | OPEN | 回归问题，涉及工具目录快照机制 |
| [5040](https://github.com/github/copilot-cli/issues/5040) | MCP OAuth：Entra ID 拒绝 127.0.0.1 回调 | OPEN | 企业级认证失败，AADSTS50011 错误 |
| [5042](https://github.com/github/copilot-cli/issues/5042) | HydraFusion 路由模型 400 后切到小上下文模型 | OPEN | 会话中断，静态 Prompt 无法加载 |
| [5045](https://github.com/github/copilot-cli/issues/5045) | /compact 对 gpt-6.1-sol 反复返回空响应 | OPEN | 上下文压缩功能异常 |
| [5049](https://github.com/github/copilot-cli/issues/5049) | Windows 上 Computer Use 插件在 ACP 模式不可用 | OPEN | 捆绑插件 advertised 但不可用 |
| [5047](https://github.com/github/copilot-cli/issues/5047) | ACP 模式暴露辅助审批（Assisted Approval） | OPEN | 安全策略需求，T3 Code 等客户端期待 |
| [5050](https://github.com/github/copilot-cli/issues/5050) | `/mcp` 命令大小写敏感匹配问题 | OPEN | 用户体验缺陷，命令补全不友好 |
| [5041](https://github.com/github/copilot-cli/issues/5041) | Plan Mode：添加"接受计划并清空转录"动作 | OPEN | 工作流优化，保留 Artifacts |
| [5015](https://github.com/github/copilot-cli/issues/5015) | 键盘可访问的分页模式（Vim/less 风格导航） | OPEN | 无鼠标模式下的历史记录浏览痛点 |

---

### 4. 重要 PR 进展
- **[#5046](https://github.com/github/copilot-cli/pull/5046)**：`Initial commit`（作者：c6r8h48msf-debug）—— 仅初始提交，无实质代码变更，可能为调试或模板 PR。

---

### 5. 功能需求趋势
从 Issues 提炼出三大关注方向：
1. **MCP 生态稳定性**：OAuth 回调、工具目录变更通知、慢连接阈值配置（#2907/#5014/#5040/#5044）
2. **ACP 模式成熟度**：模型列表暴露（#4880）、权限策略（#5047）、插件可用性（#5049）
3. **会话与上下文管理**：压缩机制（#5045）、规划模式工作流（#5041）、多行输入（#2067）

---

### 6. 开发者关注点
- **痛点**：macOS 文件系统设备 ID 变更导致状态文件失效、MCP 服务器认证链路在企业环境（Entra ID）中的兼容性、Linux Sandbox DNS 解析（#5027）。
- **高频需求**：键盘导航优化、任务栏图标可禁用（#4839）、BYOK 模型 reasoning effort 支持（#4012，已关闭但需求强烈，23👍）。
- **风险提示**：1.0.87 版本引入的 MCP 工具目录回归（#5044）可能影响依赖 MCP 的自动化流程。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 - 2026-10-04

## 1. 今日速览
今天是 OpenCode 社区的重要一天，主要聚焦于 **性能优化**、**功能扩展** 与 **稳定性修复** 三大方向。模型响应一致性问题（#25270）、日文文本复制失真（#30068）以及 MCP 子进程内存泄漏（#52410）被标记为高优先级。此外，新增的“搜索历史记录”功能（#41354）和“导入 ZIP 文件”功能（#40215）也获得了积极反馈，显示用户对增强型交互体验的强烈需求。

## 2. 版本发布
目前尚无正式版本发布。最新代码更新集中在功能改进与 Bug 修复方面，特别是在 TUI 界面、MCP 集成和模型调用稳定性上持续迭代。

## 3. 社区热点 Issues

| 编号 | 标题 | 关键点 | 社区反响 |
|------|------|--------|----------|
| #41354 | 搜索历史记录功能 | 允许用户快速定位之前对 OpenCode 说过的重要指令、决策或约束 | ⭐⭐⭐ 高关注，反映用户对上下文记忆能力的需求 |
| #25270 | 模型重复输出 | 模型连续两次给出相同回复，影响可靠性 | ⭐⭐ 高频报修，影响用户信任度 |
| #30068 | 日文文本莫比乌斯病 | 从聊天输出复制日文内容后出现乱码 | ⭐⭐ 国际化支持问题，影响全球用户 |
| #51223 | MCP 权限请求卡死 | 代码模式下 MCP 工具执行请求未显示，导致挂起 | ⭐⭐ 阻塞工作流，需立即修复 |
| #40215 | 导入 ZIP 文件 | 缺乏本地压缩包导入功能 | ⭐⭐ 开发者常用操作缺失 |
| #40314 | 连接证书失败 | 使用 MTN Broadband 时提示无法连接首个证书 | ⭐ 网络环境差异下的兼容性问题 |
| #40319 | 无限重试 | 自定义提供商连接失败时持续重试超过 60 秒 | ⭐ 资源浪费，需加快超时机制 |
| #52410 | MCP 子进程泄漏 | 服务器创建大量模型连接器进程，导致内存增长至 20GB | ⭐ 严重性能隐患，已造成实际损害 |
| #38272 | TUI 会话列表限制 | 仅显示最近 100 条会话，超过 30 天或数量超限不可见 | ⭐ 用户体验受限，影响历史追溯 |
| #40321 | DeepSeek V4 Flash 字符异常 | 长时间生成时出现重复 'Q' 字符 | ⭐ 模型输出质量问题 |

## 4. 重要 PR 进展

| 编号 | 标题 | 类型 | 核心贡献 |
|------|------|------|-----------|
| #52981 | 添加 Google 交互协议 | 新功能 | 实现原生对话/工具结果回放、流式参数支持等 |
| #52909 | 优化请求体验证 | 重构 | 消除冗余请求体校验，提升 API 效率 |
| #53041 | 桌面端发现主题 | 新功能 | 桌面客户端自动加载主题配置与项目目录主题 |
| #53058 | 失败闭合 Unknown Agent | 修复 | 确保未知/子代理时默认回退到默认代理 |
| #53056 | 编码服务器凭证为 UTF-8 | 修复 | 解决基本认证中非 ASCII 凭证编码错误 |
| #52887 | 等待插件激活前生成文本 | 修复 | 修复 #52881，防止插件激活延迟导致的空白生成 |
| #53066 | 阻止项目路由启动默认位置 | 修复 | 修正 ProjectGroup 仍被位置中间件包装的问题 |
| #53057 | 暴露缺失的服务器插件入口点 | 修复 | 确保配置的插件即使无服务器入口也能被注册 |
| #53054 | 显示待处理 MCP 提示解算 | 修复 | 改善 MCP 交互状态可视化 |
| #53050 | 保留聊天请求槽位 | 修复 | 优化 MCP 发现过程中的请求队列管理 |

## 5. 功能需求趋势

1. **上下文记忆与检索**：用户高度关注“搜索历史记录”功能（#41354），希望能够快速定位之前对系统提出的重要指令或决策，这反映了对长期上下文管理的需求。
2. **IDE 集成与文件操作**：导入 ZIP 文件（#40215）和桌面端主题发现（#53041）表明开发者希望更便捷地处理本地资源和 UI 自定义。
3. **性能与稳定性**：MCP 子进程泄漏（#52410）、DeepSeek 模型输出异常（#40321）以及 TUI 会话限制（#38272）显示，性能优化和稳定性是当前的核心关注点。
4. **多模型支持**：DeepSeek V4 Flash 等模型的特定行为问题（#40321、#50206）推动了对多模型兼容性的需求提升。
5. **跨平台一致性**：桌面端与 Web/CLI 版本之间的版本同步问题（#35122）提醒开发者需要统一开发流程以避免版本错配。

## 6. 开发者关注点

- **性能瓶颈**：MCP 子进程泄漏导致显著内存增长（#52410），影响服务器稳定性。
- **稳定性问题**：模型输出异常（#25270、#40321）和工具执行卡死（#51223）直接影响开发效率。
- **国际化支持**：日文文本复制失真（#30068）是跨语言用户的痛点，需要更健壮的文本处理。
- **功能完整性**：缺少 ZIP 文件导入（#40215）和主题发现（#53041）等基础功能，影响开发者工作流。
- **版本同步**：桌面端与 CLI/Web 版本不一致（#35122）导致会话同步问题，需同步更新。
- **插件生态**：插件配置钩子未重新触发（#30955）和插件激活延迟（#52887）影响插件开发体验。

--- 
*数据来源：github.com/anomalyco/opencode*  
*报告日期：2026-10-04*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报（2026‑10‑04）**  

---

### 今日速览  
- 今日发布了夜间版 **v0.24.7‑nightly.20261003.2c591ecc08**，主要对 Code Mode 文本对齐与权限校验进行了细粒度修复。  
- 社区围绕 **Managed Agent**、**会话/工作区管理**、**上下文/令牌治理** 与 **内存/性能优化** 展开了热烈讨论，相关 Issues 与 PR 的评论数均处于最近 24 小时的高位。  
- 多个跨领域的功能需求（如分离托管与传统引擎、工作区可靠删除、Web Shell 快捷键）正在逐步落地，显示出对多代理、持久化工作流的强烈期待。

---

### 版本发布  
- **v0.24.7‑nightly.20261003.2c591ecc08**  
  - **fix(core)**: 将 Code Mode 文本与惰性工具发现保持对齐，避免因工具延迟加载导致的 UI/交互不一致。  
  - **fix(permissions)**: 确保已批准的权限被正确继承与使用，防止因权限检查漏失而产生的拒绝服务或数据泄露风险。  
  [Release 链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261003.2c591ecc08)

---

### 社区热点 Issues（按评论数排序）  

| # | 标题 | 评论 | 为何重要 | 社区反应 |
|---|------|------|----------|----------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | proposal(serve): Define Managed Agent dual‑path architecture and staged delivery | 45 | 提出托管代理的双路径架构，旨在解耦模型推理与工具环境供给，实现会话持久化、工作区绑定、可恢复工具执行等核心能力，是后续多代理与平台分发的基石。 | 讨论热烈，多数赞同方案需分阶段交付，部分成员关注实现细节与向后兼容性。 |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) | tracking(core): non‑conversation context token governance | 18 | 聚焦系统提示、内置工具 schema、`QWEN.md`、skill listing 等非对话上下文的令牌消耗，在长上下文模型中易被忽视却占大比例，直接影响成本与性能。 | 社区普遍认为需要治理机制，已有若干后续 PR 尝试引入预算与回收策略。 |
| [#12737](https://github.com/QwenLM/qwen-code/issues/12737) | feat(acp‑bridge): Stage B host integration for paired Legacy and Managed engines | 16 | 描述如何在宿主侧集成旧版与托管引擎的并行运行，保留 M1/M3 防护与配置，为渐进式迁移提供路径。 | 评论集中在实现细节与测试覆盖，部分人担心复杂度上升。 |
| [#13004](https://github.com/QwenLM/qwen-code/issues/13004) | perf(memory): add a bounded cooldown after no‑op extraction | 8 | 提出在成功无操作轮后加入有限冷却时间，防止内存抽取器频繁触发导致的无谓开销。 | 多数认同其必要性，建议将冷却时长做为可配置参数。 |
| [#13003](https://github.com/QwenLM/qwen-code/issues/13003) | perf(memory): skip the selector after a delivered unique strong recall hit | 7 | 在已获得唯一强召回时跳过模型选择器，以减少延迟。 | 讨论围绕何时认为“强召回”以及对误判的容忍度。 |
| [#10887](https://github.com/QwenLM/qwen-code/issues/10887) | [core] No early termination on repeated tool errors: sessions burn 5‑14M tokens in dead‑end loops | 7 | 描述因工具重复错误导致的死循环，会话会消耗巨量令牌。急需早期终止机制。 | 社区强烈呼吁加入错误计数与熔断策略，已有后续 PR 尝试实现。 |
| [#13175](https://github.com/QwenLM/qwen-code/issues/13175) | Web Shell: keyboard shortcuts for Session Overview and Split View | 6 | 为 Web Shell 提供常用视图切换快捷键（Session Overview、Split View），提升开箱即用体验。 | 评论积极，认为此类细节对日常使用影响大。 |
| [#13111](https://github.com/QwenLM/qwen-code/issues/13111) | Android Phase 2 follow‑up: regression coverage and export UX | 6 | 跟进 Android 阶段 2 的审查建议，补齐麦克风、无障碍、下载等回归测试与导出体验改进。 | 开发者关注兼容性与发布流程，提出自动化测试加强。 |
| [#12235](https://github.com/QwenLM/qwen-code/issues/12235) | Follow‑up: deferred Suggestions from #12119 (/context category accounting) | 6 | 追踪 `/context` 类别会计的延迟建议，确保上下文令牌计量准确。 | 社区认为这是令牌治理的基础，需尽快闭环。 |
| [#13300](https://github.com/QwenLM/qwen-code/issues/13300) | feat(managed‑agent): Close the H0c review follow‑ups deferred from #12855 | 5 | 收集并解决 H0c 合并后留下的审查建议，涉及配置、API 表面等细节，为托管代理的稳定性打基础。 | 评论聚焦在哪些建议仍需跟进，整体趋向完成。 |

---

### 重要 PR 进展（按影响度排序）  

| # | PR 标题 | 主要内容 | 为什么重要 |
|---|---------|----------|------------|
| [#13163](https://github.com/QwenLM/qwen-code/pull/13163) | fix(managed‑agent): stop a bound Turn under refused authorization | 在工作区绑定的会话中，当创建授权被撤销、工作区排空或注册变更时，仍可尝试取消已 admitted 的 Turn，并进行重试。 | 防止未授权的长时任务继续消耗资源，提升安全性与资源控制。 |
| [#13341](https://github.com/QwenLM/qwen-code/pull/13341) | test(core): close #12693 post‑merge review test and hygiene gaps | 补足 #12693 合并后遗留的测试覆盖与代码卫生问题，确保 HTTP store 套件能够触发失败/不一致响应。 | 提升核心模块的可靠性，为后续重构提供安全基线。 |
| [#13354](https://github.com/QwenLM/qwen-code/pull/13354) | feat(managed‑agent): add reliable ACTIVE Workspace deletion (L3) | 通过公共和 WebShell 路径实现对 ACTIVE `hosted‑workspace‑files/1` 会话的可靠删除，先完成 SessionEnd 再执行 SessionDelete，并验证提交结果。 | 解决了长期存在的“孤留工作区”问题，是多租户环境下必不可少的清理能力。 |
| [#13362](https://github.com/QwenLM/qwen-code/pull/13362) | test(core): wait for hook reap instead of bare assertion (#13356) | 为 HookRunner 进程树取消测试添加等待机制，避免因竞态导致的误判。 | 消除测试抖动，提高 CI 稳定性。 |
| [#13244](https://github.com/QwenLM/qwen-code/pull/13244) | fix(core): budget side‑query output tokens against the resolved context window | 为侧查询（side‑query）分配与其实际使用的上下文窗口匹配的输出预算，防止超窗口导致的 token 浪费。 | 直接缓解 #12028、#10887 等令牌治理问题，对长上下文场景尤为关键。 |
| [#13168](https://github.com/QwenLM/qwen-code/pull/13168) | feat(managed‑agent): give Hosted turns the Workspace's project context | 让托管 turn 在首次获取原生文件/Shell 工具时，自动读取工作区的 `QWEN.md` 与 `AGENTS.md`，提供项目级指令而不预留工具执行。 | 增强了托管代理对项目上下文的感知，减少手动配置负担。 |
| [#13361](https://github.com/QwenLM/qwen-code/pull/13361) | fix(managed‑agent): harden and diagnose Hosted cold‑load refusal gates | 增强并仪表托管会话冷加载拒绝门禁，针对间歇性失败（如 #13255）提供更详细的诊断信息。 | 提高托管代理的可用性，降低因加载失败导致的会话丢失。 |
| [#13257](https://github.com/QwenLM/qwen-code/pull/13257) | test(core): cover unfinished invocation guard before turn reclamation | 为 `ManagedToolRuntime.beginTurn` 中的未完成调用守护添加三种状态（准备中、执行中、取消确认中）的回归测试。 | 防止因状态判断错误导致的资源泄漏或死锁。 |
| [#13250](https://github.com/QwenLM/qwen-code/pull/13250) | fix(qqbot)!: restore per‑group session isolation under thread scope | 撤销 QQ Bot 预先强制的 `sessionScope: 'single'` 覆盖，恢复按群组隔离的会话行为。 | 修复了跨群组会话相互干扰的 bug，提升多场景使用的安全感。 |
| [#13289](https://github.com/QwenLM/qwen-code/pull/13289) | feat(runtime): add experimental Kubernetes CSI runtime and durable worker ACK | 将实验性的私有 Kubernetes 运行时从临时 scratch 扩展为 CSI‑backed 工作区验证路径，持久化 Pod、Boot Secret 等身份信息。 | 为在容器编排环境中使用 Qwen Code 提供了持久化、可审计的运行时基础。 |

---

### 功能需求趋势（从 Issues 中提炼）  

| 趋势方向 | 体现的 Issues / PR | 关键诉求 |
|----------|-------------------|----------|
| **托管代理（Managed Agent）成熟化** | #12380、#12737、#13300、#13163、#13168、#13354、#13361 | 双路径架构、工作区可靠删除、冷加载门禁、项目上下文注入、权限与取消机制。 |
| **会话/工作区生命周期管理** | #13133、#13358、#13162、#13269、#13300 | 空闲所有权、写锁租约、授权撤回时的 Turn 取消、持久化所有权与恢复。 |
| **上下文与令牌治理** | #12028、#12235、#13244、#13209、#10887 | 非对话上下文预算、侧查询输出预防、重复工具错误的早期终止、归一化模型 key。 |
| **内存/性能优化** | #13004、#13003、#13315、#13309 | 抽取器冷却、强召回跳过选择器、索引条目完整保留、Markdown 拆分误判。 |
| **多语言/平台支持** | #13111（Android）、#13289（K8s CSI）、#13314（SDK‑Java） | 移动端回归测试、容器编排运行时、Java 客户端可靠性。 |
| **IDE/Shell 交互细节** | #13175、#13353、#13340、#13175 | 快捷键、Split View 中的 Plan/Todo、Markdown 渲染、计划审批 UI。 |
| **安全与权限** | #13360、#13186、#13358、#13356 | 聚合结果被误判为外部事实、工作区信任授权审计、会话写锁冲突、Hook 进程竞态。 |

---

### 开发者关注点（痛点 & 高频需求）  

1. **令牌浪费与成本控制**  
   - 频繁出现的长上下文模型中系统

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 | 2026-10-04

> 数据来源：`github.com/Hmbown/DeepSeek-TUI` (实际数据对应 `Hmbown/Codewhale` 仓库)  
> 统计周期：2026-10-03 至 2026-10-04 (UTC)

---

## 1. 今日速览

*   **核心架构重构持续推进**：EPIC-005 (Crate 分解) 与 FEAT-027 (命令 Shape 标准化) 两大重构主线并行，旨在将单体 Rust Engine 拆解为可复用的库，并统一 `/permissions`、`/status` 等核心命令的内部数据结构。
*   **Windows 平台稳定性成焦点**：发现 npm 启动链路下 `node.exe` 被杀导致进程树崩溃且无清理的严重问题，引发对进程管理机制的重新审视。
*   **TUI 交互细节打磨加速**：连续合并多个修复 PR，涵盖 Diff/工具输出的字素边界换行、上下文检查器国际化补全、固定提示头跟随视口跳转、配置诊断协议大小写不敏感等，显著提升终端交互体验。

---

## 2. 版本发布

> 过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues (Top 5)

| # | Issue | 核心内容 | 关注理由与社区动态 |
|---|-------|----------|-------------------|
| 1 | **[#5316] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | 顶层追踪 Issue，规划将单体 Crate 拆解为独立库。 | **架构基石**。关联 Draft PR #6832 (FEAT-027)，已有 31 条评论深度讨论模块边界、依赖方向与迁移路径，是当前研发投入最大的长期工程。 |
| 2 | **[#6827] [bug] Windows (npm install): killing node.exe instantly terminates Codewhale** | Windows 下 npm 启动模式中，杀掉 `node.exe` 会直接终止 `codewhale.exe` 且无清理。 | **严重平台缺陷**。暴露了进程树管理、信号转发与资源清理机制在 Windows 下的缺失，直接影响企业级部署稳定性，急需在 Engine 层引入 Job Object 或独立守护进程方案。 |
| 3 | **[#6418] [bug] Unable to restore the session** | 会话恢复失败，报错 `Runtime store belongs to a different...`。 | **数据一致性风险**。涉及运行时存储版本兼容或会话绑定逻辑缺陷，虽评论仅 2 条但阻塞用户核心工作流，需排查存储 Schema 迁移与会话 ID 校验逻辑。 |
| 4 | **[#6328] Schedule list UI for watches and heartbeat** | 定时任务/心跳列表 UI 开发，含创建、暂停/恢复、下次运行时间渲染。 | **自动化能力前置依赖**。被 Core cron 路由阻塞，体现“会话持久化 -> 定时调度 -> UI 呈现”功能链条的推进节奏。 |
| 5 | **[#6818] Add the complete Ratatui component explorer to the Codewhale website** | 将 204 个 Ratatui 组件目录 (含学习源文件与生成目录) 集成至官网。 | **生态建设与文档化**。标志着 TUI 组件库沉淀进入对外输出阶段，便于社区贡献者复用 UI 模式，提升框架影响力。 |

---

## 4. 重要 PR 进展 (Top 9)

| # | PR | 状态 | 核心变更 | 技术影响 |
|---|----|------|----------|----------|
| 1 | **[#6815] 0.10.1 integration: Engine convergence, reviewed TypeScript mods and Ratatui UX** | Open | **里程碑级集成 PR**：统一 Rust Engine 执行/权限/事件/会话/存储/核算；ACP/子代理/递归 RLM 共享 Turn 路径；TypeScript Mods 复用权威/取消/检查点/父交付/用量结算。 | **架构收敛**。标志着核心执行引擎“单一事实来源”确立，为后续 Crate 分解 (EPIC-005) 奠定坚实基础。 |
| 2 | **[#6832] refactor(commands): adopt portable config policy and status shapes (FEAT-027)** | Open | 引入共享 Command Shapes 标准化 `/permissions` (含别名、兼容路由) 与 `/status`，保持公开行为不变。 | **接口治理**。消除命令处理器间的隐式耦合，为插件系统、远程调用、CLI/TUI 双端复用铺平道路。 |
| 3 | **[#6805] feat(plugins): support reviewed OAuth AI providers** | Open | 插件包可通过 `extensions.net.codewhale.providers` 声明 OpenAI 兼容 Provider 与公共 OAuth Client，复用现有模型目录/流式路径，无需额外代理进程。 | **插件生态扩展**。降低第三方模型接入门槛，支持 OAuth 标准认证流，增强企业级身份集成能力。 |
| 4 | **[#6830] feat(tui): follow viewport with pinned prompt header and jump on click** | **Closed** | 固定用户提示头跟随视口起始 Turn 而非最新消息；点击可跳转至对应消息。 | **交互体验质变**。解决长上下文对话中“迷失上下文”痛点，实现类 IDE 级的导航语义。 |
| 5 | **[#6829] fix(tui): wrap diff and tool output at grapheme boundaries** | **Closed** | Diff 渲染硬换行、工具输出换行均按字素簇 处理，对齐 Ratatui 单元格核算。 | **渲染正确性**。彻底修复 Emoji/ZWJ/组合字符导致的对齐错位、截断乱码，终端显示达到专业级水准。 |
| 6 | **[#6831] fix(tui): translate context inspector rows twelve packs in English** | **Closed** | 补全上下文检查器 12 个语言包 (除中文简繁) 的 `CtxInspRowCompaction/Anchors` 等行翻译。 | **国际化完善**。消除非中文环境下的 UI 语言混杂，提升全球化交付质量。 |
| 7 | **[#6820] fix(tui): apply per-call execution policy to Python and JS tools** | **Closed** | `code_execution`/`js_execution` 纳入权限感知启动器，审批后通过统一启动器派生解释器进程。 | **安全沙箱统一**。闭环工具执行权限控制，消除解释器直启绕过策略的风险。 |
| 8 | **[#6819] fix(cli): 配置诊断对 HTTP(S) 协议大小写误判** | **Closed** | `config doctor` 协议检查改为 `to_ascii_lowercase()` 后再比对，兼容 `HTTPS://` 等大小写变体。 | **工程鲁棒性**。修复 RFC 3986 合规性缺陷，避免因配置大小写导致的误报退出。 |
| 9 | **[#6806] build(deps): bump axios 1.18.1 -> 1.20.0** | **Closed** | Dependabot 自动更新 Feishu/WeCom 桥接集成的 axios 依赖。 | **供应链维护**。及时修复上游潜在漏洞，保持边缘集成组件安全基线。 |

---

## 5. 功能需求趋势洞察

从本期 Issue 与 PR 集群分析，社区核心诉求聚焦三大方向：

1.  **架构模块化与可复用性 (Architecture Modularity)**
    *   **信号**：EPIC-005 Crate 分解、FEAT-027 Command Shapes、Engine Convergence (#6815) 形成完整重构闭环。
    *   **趋势**：从“单体二进制”向“库生态”转型，核心能力 (执行、权限、会话、存储) 解耦为独立 Crate，支撑 CLI/TUI/插件/远程 Agent 多端复用。

2.  **跨平台生产级稳定性 (Cross-Platform Production Readiness)**
    *   **信号**：Windows 进程树崩溃 (#6827)、会话恢复失败 (#6418)、配置诊断 RFC 合规 (#6819)。
    *   **趋势**：不再满足“跑通主流程”，转而攻克 Windows 进程管理、信号语义差异、存储版本兼容等企业级部署拦截器。

3.  **终端交互专业化 (Professional TUI/UX)**
    *   **信号**：字素级换行 (#6829)、上下文导航跳转 (#6830)、国际化补全 (#6831)、定时任务列表 (#6328)。
    *   **趋势**：对标 VS Code/IDE 交互范式，解决长对话、多语言、复杂渲染 (Diff/Markdown/Emoji) 场景下的体验短板，确立“终端原生 IDE”定位。

---

## 6. 开发者关注点与痛点

| 痛点/需求 | 典型表现 | 社区响应建议 |
|-----------|----------|--------------|
| **Windows 原生支持薄弱** | npm 启动链路脆弱，进程清理缺失，信号处理不兼容 | 引入 `windows-rs` / `tokio` 原生启动器，替代 npm launcher；利用 Job Object 实现进程树原子终止。 |
| **会话/状态持久化可靠性** | Runtime store 归属冲突导致恢复失败，Checkpoint 机制不透明 | 引入存储 Schema 版本迁移框架；Expose `session inspect` 诊断命令；在 Engine 层统一会话生命周期状态机。 |
| **插件/Provider 扩展门槛** | 需支持任意 OpenAI 兼容端点、OAuth 标准流、无代理直连 | PR #6805 已奠定基础，后续需补充：Provider 健康检查、模型能力自动发现、沙箱权限声明。 |
| **长上下文导航与可观测性** | 固定头仅跟踪最新消息，无法定位历史 Turn；Context Inspector 缺乏可视化 | #6830 部分缓解；建议引入 “Turn Outline” 侧边栏、Token 使用热力图、工具调用树视图。 |
| **国际化 (i18n) 维护成本** | 14 语言包手动同步，易遗漏 (如 #6831 12 包缺译) | 接入 `crowdin` 或 `weblate` 自动化流程；建立 CI 门禁检查翻译覆盖率；采用 Fluent/FTL 替代简单键值对。 |

---

> **备注**：本日报基于 `Hmbown/Codewhale` 仓库近 24h 公开活动生成。内部代号 `Codewhale` 疑为 `DeepSeek-TUI` 上游核心引擎或并行项目，实际部署请以官方发布渠道为准。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*