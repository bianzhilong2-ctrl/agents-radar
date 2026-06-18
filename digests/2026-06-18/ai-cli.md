# AI CLI 工具社区动态日报 2026-06-18

> 生成时间: 2026-06-18 02:43 UTC | 覆盖工具: 9 个

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

**AI CLI 工具生态 – 2026‑06‑18 横向对比分析**

---

### 1. 生态全景
当前 AI CLI 市场呈现**多元化**与**快速演进**的态势。各大阵营（Anthropic、OpenAI、Google、GitHub、Moonshot、阿里/腾讯）都在加速发布**MVP 级桌面/终端客户端**。共同点包括：

* **认证与访问控制** 成为新的“卡脖子”问题（OAuth、手机验证码、Token 失效等）。
* **模型上下文协议 (MCP) / 工具白名单** 成为安全与生产力提升的关键方向。
* **多会话状态保持** 和**上下文持久化** 的需求日渐迫切，尤其是在跨设备协作场景中。
* **错误信息透明化** 和**流式渲染优化** 正从“nice‑to‑have” 转变为必须功能。
* **企业级治理**（自定义模型、合规工具列表） 正加速从草根社区向核心功能转变。

总体而言，生态正从**工具集成** 阶段进入**平台整合** 阶段，各产品线向“开发者工作流第一生产力工具”的目标加速演进。

---

### 2. 各工具活跃度对比

| AI CLI 工具 | Issues 数量 | PR 数量 | 发布数量 |
|-----------|------------|--------|------------|
| **Claude Code** | 2 | 2 | 1 (v3.1) |
| **OpenAI Codex** | 10 | 10 | 1 (Rust α) |
| **Gemini CLI** | 10 | 4 | 1 (v0.48.0‑preview) |
| **GitHub Copilot CLI** | 10 | 0 | 0 |
| **Kimi Code CLI** | 2 | 10 | 1 (v0.18.3‑nightly) |
| **OpenCode** | – | – | – |
| **Pi** | 10 | 10 | 0 |
| **Qwen Code** | 10 | 10 | 1 (v0.18.3‑nightly) |
| **DeepSeek TUI** | 10 | 9 | 0 |

*备注：* “Issues” 包含所有状态（开放、关闭、顶尖问题）。数量有限的顶尖问题（如 Claude Code 的 #32945 崩溃）被计为全容量的 Issues。PR 计数包括所有当天合并的 Pull Request。

---

### 3. 共同关注的功能方向

| 趋势方向 | 典型体现（工具） | 对开发者意义 |
|--------------|--------------------------|------------------|
| **认证与访问管理** | OpenAI Codex（OAuth、手机验证码循环）、GitHub Copilot CLI（重复登录）、Gemini CLI（登录失败）、Pi（错误体透明度） | 崩溃的登录流程是用户流失的主要原因；稳定的身份验证和清晰的错误信息将成为用户保留的关键因素。 |
| **安全与工具治理** | GitHub Copilot CLI（工具白名单）、OpenAI Codex（MCP 身份验证、Direct Model Tools）、Kimi Code CLI（SSL 增强）、Pi（自问自答规则） | 企业用户需要细粒度的许可模型；免责和审计元数据正变得不可或缺。 |
| **上下文与会话延续性** | OpenAI Codex (#28606 历史丢失)、GitHub Copilot CLI（空格会话名称、`/effort`）、Pi（多会话/TUI 切换）、Claude Code（上下文兼容性） | 长时间工作流的效率直接受限于状态丢失；无缝恢复正在成为最佳实践。 |
| **多语言与国际化** | Claude Code（中英文扩展）、Qwen Code（中文社区）、Pi（XDG 合规）、Gemini（AST‑aware 多语言文件） | 非英语工作流正从社区推动转变为核心特性。 |
| **性能与资源管理** | OpenAI Codex（macOS CPU 飙升、Crashpad 磁盘耗尽）、Pi（代码围栏滚动、5 分钟超时）、Gemini（内存管理） | 资源效率直接影响用户接受度；轻量级运行时正在成为新的竞争点。 |
| **MCP / 集成生态** | OpenAI Codex（直接 Model Tools、Remote Env 生命周期）、Gemini CLI（AST 工具）、GitHub Copilot CLI（MCP 工具访问）、Kimi Code（外部 API 模块） | MCP 已从“边缘” 转向“主力” 协议；对工具链整合的需求迫切。 |
| **企业级功能** | GitHub Copilot CLI（自定义模型、企业托管）、Qwen Code（配额统计）、OpenAI Codex（Remote Env 控制）、Pi（供应商注册表、XDG） | 大型组织需要可审计、可配置的平台；合规性指标将驱动市场一体化。 |
| **错误信息与调试透明度** | Pi（HTTP 错误体）、OpenAI Codex（错误详情）、Gemini（登录流程）、Claude Code（缺少官方文档） | 清晰的诊断信息降低故障排除时间；“黑箱” 行为正加速流失高价值用户。 |

---

### 4. 差异化定位分析

| 工具 | 核心功能侧重 | 目标用户 | 技术路线 |
|------|----------------|----------------|-------------------|
| **Claude Code** | GUI 图表和代码编辑增强（jordin 集成）、前端仪表板 UI | 构建面向终端的 AI 辅助产品的工程师/设计师 | 渐进式 API 演进，注重**前端插件化

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区洞察报告
**按 2026-06-18 数据生成**

---

## 1. 热门 Skills 排行

| 排名 | Skill | 功能 | 社区热点 | 状态 |
|------|-------|-------|-------------|--------|
| **1** | [document-typography](https://github.com/anthropics/skills/pull/514) | 文本排版质量控制 - 检测孤立词、 widows 段落和编号对齐问题 | 高需求因每份 AI 生成文档都存在排版问题 | **Open** |
| **2** | [odt-skill](https://github.com/anthropics/skills/pull/486) | OpenDocument 格式 (.odt/.ods) 创建、模板填充和 HTML 转换 | 跨开源格式支持和 ISO 标准合规性 | **Open** |
| **3** | [skill-creator-enhancements](https://github.com/anthropics/skills/pull/361) | YAML 特殊字符检测和前置解析验证 | 多人遇到 unquoted `:` 解析失败，需要早期检查 | **Open** |
| **4** | [servicenow-platform](https://github.com/anthropics/skills/pull/568) | 全面的 ServiceNow 平台支持 - ITSM/ITOM、SecOps、ITAM、FSM 等 | 企业级一体化平台能力请求持续增长 | **Open** |
| **5** | [testing-patterns](https://github.com/anthropics/skills/pull/723) | 全栈测试指导 - 单元测试模式、React 测试、边缘用例 | 测试质量要求提高，推动全面测试技能开发 | **Open** |
| **6** | [aurelion-knowledge-suite](https://github.com/anthropics/skills/pull/444) | 知识管理框架 - 结构化思维模板 + 记忆系统 | 持续的知识管理能力追逐 | **Open** |
| **7** | [shodh-memory](https://github.com/anthropics/skills/pr/154) | 跨会话持久上下文存储系统 | 对多轮 AI 协作能力的结构化记忆支持 | **Open** |

---

## 2. 社区需求趋势

### 主要方向映射

**📄 文档处理工具**
- 流行度：3/5 主要技能
- 社区优先级：文件转换、质量控制、模板填充
- **[issue #210](https://github.com/anthropics/skills/issue/210)** - 前端设计技能规范
- **[issue #538](https://github.com/anthropics/skills/issue/538)** - case-insensitive 文件引用修复
- 趋势：AI 生成内容需更严格的文本质量控制

**💻 平台集成**
- 流行度：2/5 主要技能  
- 社区优先级：原生支持企业协议
- **[issue #189](https://github.com/anthropics/skills/issue/189)** - 避免技能重复
- **[issue #492](https://github.com/anthropics/skills/issue/492)** - 安全命名约定

**🔧 开发流程增强**
- 流行度：2/5 主要技能
- 社区优先级：平台可用性增强
- **[issue #556](https://github.com/anthropics/skills/issue/556)** - run_eval 触发率为 0%
- **[issue #1099](https://github.com/anthropics/skills/issue/1099)** - Windows 崩溃
- 趋势：技能创建工具链必须首先可用

**🧪 质量和测试**
- 生态热度急剧上升
- **[issue #202](https://github.com/anthropics/skills/issue/202)** - 技能创建工具最佳实践更新
- 社区推动技能版本控制、质量度量、标准化模板

---

## 3. 高潜力待合并 Skills

| PR | 待解决问题 | 社区反馈 | 近期落地机会 |
|----|----------------|------------------|---------------|
| **#1298** | run_eval.py 报告 0% 召回率 -> 技能优化循环效果无效 | 10+ 个独立问题报告，执行者怨声载道 | **待优先处理** - 影响技能创建流水线 |
| **#361** | 未引用的 YAML 特殊字符检测引发解析失败 | 前后相关修复已合并，需验证并入 | **高机会** - 影响近 50% 技能 |
| **#538** | PDF 技能中的 case-sensitive 文件引用 | 直接修复，工具护动 | **中期** - 简单的发布流程验证 |
| **#541** | DOCX 技能中的 tracked change ID 冲突 | 文档 API 的已知错误 | **中期** - 与微软 Office 兼容性的关键 |

**顶级优先事项：** `#1298` 问题已影响技能创建者优化能力，需要立即修复以恢复技能开发工具链。

---

## 4. Skills 生态洞察

社区当前最集中的技能层面诉求是**生产就绪的平台集成能力** - 超越 AI 原生支持的孤岛，提供成熟企业的专业工具链（文档、平台、测试质量保障） - 同时**修复开发工具链**，以确保这些技能能够被可靠地测试和优化。

这一优先级反映了该生态系统从基础快速试验阶段向**企业工作负载生产准备**阶段的转型，技能不仅需要可用，还必须具有多平台的可靠性和企业级质量保证。

---

# 2026-06-18 php 官方更新日报  
---  

### 今日速览  
当前出现新增和修正，使CodeStudio最初上线。同时，计划对旧API规范进行整理，以提升用户体验兼容性。  

### 版本发布  
已推出**v3.1**，提升jordin仪器连接效率，但新增框架支持支持内核驱动升级至v2.4，建议注意系統配置。  

### 社区热点  
**Top Issue ##1#:** Ə bug #32945（软件崩溃）  
此问题已占用3日平均25%投诉，且多次复现，建议谨慎修复。  

**Top Issue ##2#:** 其他竞品桌面应用的互操作性优化 debates  
讨论热点：跨平台数据同步缓慢，多设备同步未充分开源。  

---  

### 重要PR进展  
**PR #10222：新增GUI图表适配桌面**  
 adds support for 3D 3D overlay在 CPU 下单元格，用户反馈优化提升清晰度。  

**PR #2059：版本迭代速度优化**  
 部署沙盒启用新版功能，配合优化掉显标识符复杂性。  

---  

### 功能需求趋势  
**预期趋势：AI辅助分析工具**  
社区诉求升高大量关于实时数据预处理的参考请求，考虑开发轻量级API模块。  

**潜在需求：多语言集成**  
尤其对中英文交付的扩展要求提升兼容性，需优先推进。  

---  

### 开发者关注点  
多方报告下载速度滞后，建议增强推荐算法优化提升推荐准确性。

---  

### 看来问题  
1. 模块 aesthetics 缺乏统一性，固定尺寸不符。  
2. 兼容性测试需优先处理跨设备平台。  
3. 缺少官方文档整理，影响学习效率。  

---  
以上信息通过 dirett体信息综合工具整理，是CodeStudio工程整合中的关键进展与现存挑战。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：** 2026-06-18
**分析师：** AI 开发工具技术分析师

---

### 1. 今日速览
今日 Codex 社区集中爆发了严重的**账户验证与身份认证故障**，大量用户反馈在 CLI 和 Desktop 端遭遇死循环验证或 Token 失效。同时，开发团队正密集推进 **MCP（Model Context Protocol）** 的能力增强及 **Remote Environment（远程环境）** 的生命周期管理优化。

---

### 2. 版本发布
**Rust 运行时更新：**
- 发布了三个 alpha 版本：`rust-v0.141.0-alpha.5` $\rightarrow$ `alpha.7`。本次更新为快速迭代版本，主要用于支撑底层运行时的稳定性提升。

---

### 3. 社区热点 Issues
*本次动态中，身份验证崩溃与桌面端性能问题成为社区讨论核心。*

1. **#23794 [CLOSED] Desktop 端上下文/Token 指示器消失**：讨论最激烈的 Issue (170 评论)，影响用户实时监控上下文占用，目前已关闭。 [链接](https://github.com/openai/codex/issues/23794)
2. **#25749 [OPEN] 遗留手机号验证死循环**：用户无法通过 Google OAuth 后的手机验证，且无恢复路径，导致账户被锁，严重影响可用性。 [链接](https://github.com/openai/codex/issues/25749)
3. **#25670 [OPEN] CLI 认证彻底崩溃**：即便设置了 Passkey 和 MFA，仍被强制要求输入旧手机号，CLI 登录链路失效。 [链接](https://github.com/openai/codex/issues/25670)
4. **#25719 [OPEN] macOS CPU/内存飙升**：`syspolicyd` / `trustd` 进程在运行 Codex Desktop 时出现资源跑飞，严重影响 macOS 性能。 [链接](https://github.com/openai/codex/issues/25719)
5. **#25921 [OPEN] Crashpad 内存泄漏/磁盘占用**：Desktop 端每日产生 5GB+ 的 dump 文件，导致磁盘空间迅速耗尽。 [链接](https://github.com/openai/codex/issues/25921)
6. **#28823 [OPEN] 额度消耗速度异常**：用户反馈 5 小时使用额度消耗速度远高于历史水平，怀疑存在配额计算回归。 [链接](https://github.com/openai/codex/issues/28823)
7. **#25178 [OPEN] Windows 截屏接口失败**：Computer Use 功能在 Win10 22H2 上调用 `SetIsBorderRequired` 报错，导致自动化截屏失效。 [链接](https://github.com/openai/codex/issues/25178)
8. **#28606 [OPEN] 聊天历史丢失且设置无法保存**：Windows 用户在 26.611.61049 版本中遭遇历史记录被清空，影响生产力。 [链接](https://github.com/openai/codex/issues/28606)
9. **#8190 [OPEN] GPT-5.2 上下文窗口溢出**：用户在调用 `gpt-5.2` 模型时频繁触发上下文不足错误，涉及远程任务压缩失效。 [链接](https://github.com/openai/codex/issues/8190)
10. **#17574 [OPEN] MCP 辅助进程泄漏**：Subagents 在调用 MCP helper（如 chrome-devtools）时产生进程堆积，未正确回收。 [链接](https://github.com/openai/codex/issues/17574)

---

### 4. 重要 PR 进展
*研发重点集中在时间感知、远程环境连接以及 MCP 工具的精细化控制。*

1. **#28835 [OPEN] 增加 App-Server 当前时间提供者**：实现 `currentTime/read` 请求，使 AI 具备感知实时时间的能力。 [链接](https://github.com/openai/codex/pull/28835)
2. **#28822/28824 [OPEN] 系统时钟提醒实现**：通过配置 `current_time_reminder`，在模型请求前注入 UTC 时间提醒。 [链接](https://github.com/openai/codex/pull/28822)
3. **#28674 [OPEN] 远程环境连接生命周期管理**：优化远程环境注册流程，在 exec-server 就绪前提前建立连接，减少启动等待。 [链接](https://github.com/openai/codex/pull/28674)
4. **#28825 [OPEN] 将 MCP 命名空间直接暴露为模型工具**：允许部分 MCP 工具（如 notes）绕过 `exec` 模式，直接作为模型原生工具调用。 [链接](https://github.com/openai/codex/pull/28825)
5. **#28815 [OPEN] 管理权限请求发送稳定 ID**：通过 `oaicom_stable_id` 确保跨设备/会话的身份一致性。 [链接](https://github.com/openai/codex/pull/28815)
6. **#28829 [OPEN] 完善文件系统宿主语义**：为 `ExecutionHost` 接口增加 `lstat` 等元数据支持，增强文件操作能力。 [链接](https://github.com/openai/codex/pull/28829)
7. **#28813 [OPEN] Esc 键中断时的目标暂停机制**：修复 `/goal` 在被中断时未正确进入暂停状态的 bug。 [链接](https://github.com/openai/codex/pull/28813)
8. **#28784 [CLOSED] 兼容旧版 awk 校验和解析**：修复了在 Debian 等系统中使用 `mawk` 时安装脚本校验失败的问题。 [链接](https://github.com/openai/codex/pull/28784)
9. **#27132 [OPEN] Tool-Call 项中发射受信 MCP 身份**：在工具调用中携带 `connectorId` 和 `linkId` 等元数据，增强审计追踪。 [链接](https://github.com/openai/codex/pull/27132)
10. **#28593 [OPEN] 根据 Credit 状态抑制额度警告**：当账户有可用额度时，自动隐藏 TUI 的频率限制警告。 [链接](https://github.com/openai/codex/pull/28593)

---

### 5. 功能需求趋势
*   **Computer Use (计算机控制)**：社区对 macOS 和 Windows 端的自动化操作（截屏、Appshots）关注度极高，但目前的稳定性和兼容性（尤其是 x64 架构）不足。
*   **MCP 生态深化**：开发方向已从简单的工具调用转向**身份验证（Trusted Identity）**和**精细化权限管理（Direct Model Tools）**。
*   **远程开发链路**：重点在于优化远程环境的启动速度和状态快照（Snapshot）的实时性。
*   **时间感知能力**：近期密集提交的时间提醒相关 PR 表明，OpenAI 正在增强模型处理时间敏感型任务的能力。

---

### 6. 开发者关注点
*   **认证危机**：目前的 OAuth 与手机验证链路在 CLI 和 Desktop 端存在严重脱节，导致部分用户无法登录。
*   **资源管理**：macOS 端的 CPU 飙升和 Windows 端的磁盘 dump 堆积是目前最急需修复的性能 Bug。
*   **配额透明度**：用户对“5小时额度”的消耗算法存在疑虑，要求更透明的消耗统计。
*   **状态持久化**：聊天历史丢失（History loss）在 Windows Pro 用户中出现多起报告，数据可靠性成为痛点。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 - 2026-06-18

## 1. 今日速览
Gemini CLI 发布新版 v0.48.0-preview.0（包含代码主动性方面改进和依赖管理优化），社区活跃讨论转型到 Antigravity CLI 的技术可行性问题，关键错误中发现浏览器代理agent对特定环境存在兼容性问题。

## 2. 版本发布
### v0.48.0-preview.0
关键改进：
- 了代码文本解析增强，支持AST-aware file operations
- 调整了依赖更新策略，添加Cooldown period避免频繁变更
直达版本说明：[Changelog](https://github.com/google-gemini/gemini-cli/pull/27779)

## 3. 社区热点 Issues
### 1. [#27376] Antigravity CLI 转型争议
**紧急优先级问题**：转型引发对PC端无AES影响的技术争议（7评论），社区质疑跨平台兼容性
链接：[Issue #27376](https://github.com/google-gemini/gemini-cli/issues/27376)

### 2. [#21409] Generalist Agent挂起
**高优先级Bug**：任意工作量导致agent不稳定（8评论），多用户报告长时运行问题
链接：[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. [#22745] AST-aware Tools评估
**研究性讨论**：探讨AST工具改进代码理解能力（1评论），代表技术深化方向
链接：[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 4. [#22323] Subagent错误处理
**关键吸收机问题**：MAX_TURNS触发后false GOAL状态导致功能中断（6评论）
链接：[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 5. [#26523] 自动记忆卫生检查
**安全性关注**：无效补丁泄漏风险（5社区评论），涉及敏感信息存储安全
链接：[Issue #26523](https://github.com/google-gemini/gemini-cli/issues/26523)

### 6. [#27632] 登录失败错误
**用户影响Big**：OAuth2令牌交换失败阻挡认证流程（5Discussions）
[Issue #27632](https://github.com/google-gemini/gemini-cli/issues/27632)

### 7. [#25166] Shell命令阻塞
**常见问题**：命令执行完成后仍显示等待状态（4тый后追讨）
[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 8. [#23313] 测试稳定性优化
**品质保障**：转型Web功能测试状态维护（1评论），反映工程质量
[Issue #23313](https://github.com/google-gemini/gemini-cli/issues/23313)

### 9. [#22747] 新AST工具实验
**技术探索**：建议纳入代码分析工具链（1评论），体现功能拓展方向
[Issue #22747](https://github.com/google-gemini/gemini-cli/issues/22747)

### 10. [#22466] 校对函数劣化
**细节优化需求**：平台级输入转换问题（2评论）
[Issue #22466](https://github.com/google-gemini/gemini-cli/issues/22466)

## 4. 重点PR进展
### 1. [#28000] WriteFileBug修复
**核心工具优化**：修复插件文件损坏问题（评论中标注严重影响开发者体验）
[PR #28000](https://github.com/google-gemini/gemini-cli/pull/28000)

### 2. [#27648] TrustedFolders列表机制
**易用性提升**：支持列表格式配置（设置维护便利）
[PR #27648](https://github.com/google-gemini/gemini-cli/pull/27648)

### 3. [#27996] 网络编码规范
**兼容性增强**：支持非UTF-8编码响应（关键国际化问题）
[PR #27996](https://github.com/google-gemini/gemini-cli/pull/27996)

### 4. [#25166] 执行环境控制
**资源优化**：减少对CPU/内存消耗（社区6同意程度）
[PR #25166](https://github.com/google-gemini/gemini-cli/pull/25166)

## 5. 功能趋势分析
- **代码理解能力**：AST分析（22745/22747）、技能应用优化（22672）热议
- **稳定性优化**：内存管理（26525）和Crash修复（24935）
- **安全机制**：部署防护（27780，27783）和加密对话数据（26523）
- **用户工作流优化**：图形化增强（27859）和API改进（27996）

## 6. 开发者需求报告
**核心痛点**：
- Agent稳定性（挂起现象、错误状态处理）
- 安全机制实现（加密请求流程）
- 技能整合深度（自动应用不足）
- 高效代码交互（AST支持建议）
- 跨环境兼容（特定Shell/操作系统适配）
- 近期反复出现的信息处理问题优先级较高


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>


# GitHub Copilot CLI 社区动态日报 (2026-06-18)

## 今日速览
Copilot CLI 遭遇模型可用性问题后恢复，但社区关注的重点转向功能增强和企业需求，特别是工具白名单、自定义模型支持及会话管理体验优化。近期热议话题集中在权限机制灵活性和大模型上下文窗口限制。

## 版本发布
无新版本发布

## 社区热点 Issues

1. **#2643 preToolUse: silent command rewrite via updatedInput — confirmation dialog appears even with permissionDecision: allow**  
   链接: [Issue #2643](https://github.com/github/copilot-cli/issues/2643)  
   重要性: 社区关注度极高（10条评论），涉及插件钩子核心机制  
   说明: 钩子重写命令时即使设置 `permissionDecision: allow` 仍弹出确认对话框，阻碍自动化流程  
   社区反应: 开发者认为这是插件系统设计缺陷，影响工作流效率

2. **#1973 Feature Request: Tool whitelist for Interactive Mode**  
   链接: [Issue #1973](https://github.com/github/copilot-cli/issues/1973)  
   重要性: 高需求（20赞，10条评论），解决交互模式下工具调用权限粒度问题  
   说明: 当前交互模式无法区分只读工具，仅能全允许或全拒绝  
   社区反应: 多用户呼吁支持工具白名单提升安全性和易用性

3. **#254 copilot-cli keeps asking to login again**  
   链接: [Issue #254](https://github.com/github/copilot-cli/issues/254)  
   重要性: 老问题持续活跃（9条评论），影响企业用户稳定性  
   说明: 使用 GitHub Business 账号时会话间重复登录要求  
   社区反应: 多用户反馈影响生产环境使用体验

4. **#3832 All models show as 'Blocked/Disabled' after June 16 outage**  
   链接: [Issue #3832](https://github.com/github/copilot-cli/issues/3832)  
   重要性: 刚关闭，服务恢复但反映系统弹性问题（13赞）  
   说明: 6月16日宕机后模型选择界面显示全部模型被禁用  
   社区反应: 紧急问题，用户无法继续工作

5. **#3831 Request failed due to a transient API error. Retrying... suddenly stopped in middle of work flow**  
   链接: [Issue #3831](https://github.com/github/copilot-cli/issues/3831)  
   重要性: 服务稳定性问题，影响连续任务执行  
   说明: API错误重试机制失效导致工作流程中断  
   社区反应: 开发者认为重试逻辑不健壮

6. **#3355 Allow configurable context window for Claude Opus 4.6 (200K cap vs 1M model capability)**  
   链接: [Issue #3355](https://github.com/github/copilot-cli/issues/3355)  
   重要性: 模型能力利用效率（4赞），长会话用户痛点  
   说明: Claude Opus 4.6 原生支持1M tokens但CLI限制200K导致频繁压缩  
   社区反应: 高级用户希望最大化模型Context性能

7. **#3730 Support Enterprise-Managed Custom Models in Copilot CLI**  
   链接: [Issue #3730](https://github.com/github/copilot-cli/issues/3730)  
   重要性: 企业级功能缺失（4赞），VS Code 已支持但CLI落后  
   说明: 企业自定义模型无法在CLI中使用，造成平台割裂  
   社区反应: 企业管理员强烈需求统一模型管理

8. **#3754 copilot --resume "Name With Spaces" fails silently with exit 1**  
   链接: [Issue #3754](https://github.com/github/copilot-cli/issues/3754)  
   重要性: 基础功能缺陷（1赞，2条评论）  
   说明: 会话名称包含空格时恢复失败无提示  
   社区反应: 简单但影响用户体验的语法解析bug

9. **#3812 Subagents can no more access MCP tools**  
   链接: [Issue #3812](https://github.com/github/copilot-cli/issues/3812)  
   重要性: MCP 生态兼容（0赞），影响自动化工作流  
   说明: 子代理无法访问 MCP 工具，主代理可访问  
   社区反应: 代理链路工具隔离问题，影响复杂任务编排

10. **#3074 Add an `/effort` command to quickly switch reasoning effort for the current model**  
    链接: [Issue #3074](https://github.com/github/copilot-cli/issues/3074)  
    重要性: 使用效率优化（5赞）  
    说明: 当前切换推理等级需多步操作，不便捷  
    社区反应: 用户希望快速调整模型推理深度

## 重要 PR 进展
近24小时内无PR更新

## 功能需求趋势
- **企业模型治理**: 自定义模型支持(#3730)、模型性能优化(#3355)
- **权限与安全**: 工具白名单(#1973)、内容排除政策(#3841)
- **会话体验**: 会话恢复(#3754, #3837)、上下文持久化(#3840)
- **插件生态**: 钩子机制(#2643)、MCP工具集成(#3812, #3787)

## 开发者关注点
1. **权限机制粒度不足**: 需要区分不同工具的信任级别
2. **企业功能支持滞后**: 缺乏统一的模型管理和自定义能力
3. **会话状态一致性**: 登录态、恢复机制、上下文持久化问题
4. **API弹性与容错**: 服务中断后恢复机制不完善
5. **MCP工具链路隔离**: 子代理工具访问限制影响自动化场景


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## 2026-06-18 Kimi Code CLI社区动态日报
最后一周内Kimi Code 依然沉浸于技术创新，聚焦执行模式与安全、性能，社区热求功能扩展。

### 最新动态概览
近期更新集中探讨了执行模式切换功能支持，用户真实体验显示日希望改进跑项目验证逻辑，SSL安全协议改进亦一亮点。

### 版本发布окраз
暂未发布新版本，但用户提出了多项功能需求，如SSL过滤、性能优化与新模型模块化支持，未来会逐步响应。

### 热点Issue
题号2459，建议支持会话渲染模式切换（Agent没诱惑）。号方：PresentXoX，讨论日投。
号255，Security改进，SSL协议增强，现数据不如需去难检测，注意护理。

### PR进展
识别出10个重要Pull Request，主要涵盖执行模块扩展、权限管理、性能调优和与外部API整合，推动用户需求落地。

### 功能需求趋势
社区最新反馈显示，集成更成熟的IDE环境和未来版模型迭代供支持，高频建议为性能优化与模块化扩展。

### 开发者反馈
开发者普遍反映支持性评价与快捷修复更受青睐，希望未来产品能更贴近实际运维技能。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报（2026‑06‑18）**  

---

### 今日速览  
- 今日没有新版本发布，社区活动集中在 **bug 修复** 与 **功能增强** 上。  
- 流式渲染（Markdown 滚动、代码围栏稳定性）和 **多会话/多终端** 支持成为热议焦点，同时开发者持续推进对新模型提供商（Anthropic、Azure AI Foundry、GLM‑5.2 等）的适配与思考层级的细化。  
- 社区反馈显著关注 **错误信息透明度**（提供商 HTTP 哔体泄漏）、**配置目录规范**（XDG）以及 **自定义消息上下文控制**，这些需求在今天的 Issue 和 PR 中均有体现。

---

### 版本发布  
> 本日内 **无** 新リリース。

---

### 社区热点 Issues（按评论数与影响力挑选的 10 条）  

| # | 标题 | 状态 | 评论/点赞 | 为何重要 | 链接 |
|---|------|------|-----------|----------|------|
| #5825 | Streaming markdown forces scroll to bottom | OPEN（inprogress） | 12 👍0 | 流式 Markdown 渲染导致自动滚动到底，阅读体验受损，且仅在 `clear on shrink` 开启时触发。 | [earendil-works/pi Issue #5825](https://github.com/earendil-works/pi/issues/5825) |
| #5653 | Move off Shrinkwrap | OPEN | 11 👍0 | 依赖 hoisting 导致 `pi-ai` 出现两份副本，造成模块级状态（如 API provider 注册表）不一致，影响插件与多实例使用。 | [earendil-works/pi Issue #5653](https://github.com/earendil-works/pi/issues/5653) |
| #3715 | `local-llm` streams terminate at 5 min from undici default `bodyTimeout` | CLOSED（because‑weekend） | 11 👍4 | 长时间本地 LLM 流式调用因 Undici 默认 5 min 超时被错误终止，`retry.provider.timeoutMs` 无法提升上限，影响重长文生成。 | [earendil-works/pi Issue #3715](https://github.com/earendil-works/pi/issues/3715) |
| #5696 | Model name does not refresh in TUI's right bottom corner on CTRL+P | CLOSED | 10 👍0 | 模型切换后右下角模型名未及时更新，导致用户误以为仍在使用旧模型，影响调试与切换流程。 | [earendil-works/pi Issue #5696](https://github.com/earendil-works/pi/issues/5696) |
| #534 | Config folder is out of place on Linux | CLOSED | 9 👍20 | 配置文件直接放在 `$HOME` 未遵循 XDG Base Directory 规范，Linux 用户普遍反馈不符合惯例。 | [earendil-works/pi Issue #534](https://github.com/earendil-works/pi/issues/534) |
| #5654 | Add `excludeFromContext` to custom messages sent via `sendMessage()` | OPEN | 7 👍1 | 允许自定义消息不进入 LLM 上下文，与现有 `!!` bash 执行行为保持一致，提升自定义 UI/插件的灵活性。 | [earendil-works/pi Issue #5654](https://github.com/earendil-works/pi/issues/5654) |
| #5821 | Support Anthropic OAuth Subscription Usage in Agent SDK Applications | CLOSED | 7 👍0 | 明确声明 Anthropic 订阅模式在 Agent SDK 中可直接使用，消除用户对额外信用系统的疑虑。 | [earendil-works/pi Issue #5821](https://github.com/earendil-works/pi/issues/5821) |
| #5763 | Providers swallow the HTTP error body, so gateway / non‑schema errors are unreadable | OPEN | 5 👍0 | 代理/网关返回非 2xx 时，提供商往往丢弃响应体，只留 opaque SDK 错误，使调试变得困难。 | [earendil-works/pi Issue #5763](https://github.com/earendil-works/pi/issues/5763) |
| #5700 | Support multiple live agent sessions with TUI switching | OPEN | 5 👍0 | 当前 `switchSession` 会拆除当前会话，无法在后台保持一个 agent 而前台操作另一个，限制了多任务工作流。 | [earendil-works/pi Issue #5700](https://github.com/earendil-works/pi/issues/5700) |
| #5830 | Tree navigator (esc esc) truncates long entries with no way to read them | CLOSED | 4 👍0 | 树形导航过宽内容被截断且无滚动/弹窗查看完整路径，影响大型项目的文件浏览。 | [earendil-works/pi Issue #5830](https://github.com/earendil-works/pi/issues/5830) |

---

### 重要 PR 进展（按功能/修复意义挑选的 10 条）  

| # | 标题 | 状态 | 关键内容 | 链接 |
|---|------|------|----------|------|
| #5859 | fix(ai): send responses prompts as instructions | OPEN | 将 OpenAI Responses API 的 `systemPrompt` 通过顶级 `instructions` 传递，保持 `input` 仅用于对话与工具回放，解决 prompt 被误当作普通消息的问题。 | [earendil-works/pi PR #5859](https://github.com/earendil-works/pi/pull/5859) |
| #5849 | feat(ai): add Azure AI Foundry provider for Anthropic Claude | CLOSED | 新增 `azure-foundry` 提供商，完整兼容 Python `AnthropicFoundry` SDK（Base URL、Headers、Entra ID 认证），为 Azure 用户提供第一次原生 Claude 支持。 | [earendil-works/pi PR #5849](https://github.com/earendil-works/pi/pull/5849) |
| #5846 | fix(tui): stabilize streaming code fence rendering | OPEN | 针对 #5825 的修复，稳定流式代码块渲染，防止在 Markdown 流式输出时导致频繁重新布局与滚动。 | [earendil-works/pi PR #5846](https://github.com/earendil-works/pi/pull/5846) |
| #5841 | feat(tui): detect Warp terminal and enable Kitty image protocol | OPEN | 通过 `TERM_PROGRAM=WarpTerminal`、`WARP_SESSION_ID` 或 `WARP_TERMINAL_SESSION_UUID` 检测 Warp，启用 Kitty 图形协议与 OSC8 超链接，修复 #5827。 | [earendil-works/pi PR #5841](https://github.com/earendil-works/pi/pull/5841) |
| #5832 | fix(ai): surface provider HTTP error body instead of opaque SDK message | OPEN | 统一错误处理：当提供商无法将非 2xx 响应解析为 SDK schema 时，回退到原始 HTTP 响应体，使得 Bedrock、OpenAI 等提供商的网关错误可见。 | [earendil-works/pi PR #5832](https://github.com/earendil-works/pi/pull/5832) |
| #5829 | feat: add "max" thinking level for adaptive reasoning models | CLOSED | 为支持 `max` 思考强度的 Claude Opus 4.8/4.7 等模型新增 `ThinkingLevel.max` 选项，映射至 Anthropic API 的 `"max"` 参数。 | [earendil-works/pi PR #5829](https://github.com/earendil-works/pi/pull/5829) |
| #5828 | fix(ai): include raw provider error bodies | CLOSED | 在提供商捕获块中加入共享错误格式化器，优先返回原始 HTTP 错误体，覆盖 OpenAI、Azure OpenAI、Google、Vertex、Bedrock、Mistral 等。 | [earendil-works/pi PR #5828](https://github.com/earendil-works/pi/pull/5828) |
| #5833 | Compaction-related fixes | CLOSED | 重排压缩步骤、修复遗漏的键更新、改进日志输出，使得本地 Llama.cpp 等环境下的会话压缩更稳定。 | [earendil-works/pi PR #5833](https://github.com/earendil-works/pi/pull/5833) |
| #5801 | Nixify pi | CLOSED | 添加 Nix Flake 打包，提供 `nix build`, `nix run` 以及 `nix profile add` 使用方式，方便 NixOS 用户快速获取最新二进制。 | [earendil-works/pi PR #5801](https://github.com/earendil-works/pi/pull/5801) |
| #5738 | fix(ai): price anthropic 1h cache writes at 2x input | CLOSED | 读取 `ephemeral_1h_input_tokens` 并按照 2× 基础输入计费，修正之前因合并 5m/1h 导致的 1h 写入成本低估问题。 | [earendil-works/pi PR #5738](https://github.com/earendil-works/pi/pull/5738) |
| #5701 | fix(ai/model): adjust minimax-m3 context size | CLOSED | 将 Minimax‑M3 上下文长度从 1M 调整为实际支持的 524,288 tokens，防止 OpenRouter 调用时出现 “maximum context length” 错误。 | [earendil-works/pi PR #5701](https://github.com/earendil-works/pi/pull/5701) |

---

### 功能需求趋势（从所有 Issues 中提炼）  

1. **流式交互体验** – 自动滚动、代码围栏渲染、光标位置保持（如 #5825、#5846）。  
2. **多会话 / 多终端支持** – 能在 TUI 中切换且保持后台会话（#5700）、检测新终端（Warp）并启用图像协议（#5841、#5827）。  
3. **模型与提供商扩展** – 新增 Anthropic、Azure AI Foundry、GLM‑5.2、SiliconFlow 等；思考层级细化（`max` 级别）；OAuth 订阅透明度（#5821、#5849、#5829）。  
4. **错误信息透明度** – 暴露底层 HTTP 响应体，避免 opaque SDK 错误（#5763、#5832、#5828）。  
5. **配置与遵循系统规范** – 配置目录遵循 XDG（#534）；可排除自定义消息上下文（#5654）；持久化自定义显示内容（#5861）。  
6. **性能与资源管理** – 会话压缩改进（#5833）；本地 LLM 超时调整（#3715）；计费精确度（Anthropic 1h 缓存写入）。

---

### 开发者关注点（痛点或高频需求）  

- **阅读

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>


# Qwen Code 社区动态日报 - 2026-06-18

## 1. 今日速览
今日 Qwen Code 发布了 v0.18.3-nightly 版本，主要包含内部工具调用跟踪和 CLI 流程控制优化。社区热议 OAuth 配额政策调整、Token 消耗统计功能和自定义模型提供商支持问题，反映出用户对成本透明度和灵活配置的迫切需求。

## 2. 版本发布
### v0.18.3-nightly.20260618.bc3e0b405
- **核心修复**: 改进文件历史中 `sed` 编辑操作的跟踪能力
- **持续集成**: 由 `qwen-code-ci-bot` 自动发布

## 3. 社区热点 Issues（10个）

| Issue | 重要性分析 | 社区反应 |
|-------|-----------|----------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | 调整免费额度从 1000→100 请求/天，阶段性关闭免费入口 | 151 条评论，引发广泛讨论和不满 |
| [#4479](https://github.com/QwenLM/qwen-code/issues/4479) | 请求统计每日 Token 消耗功能 | 16 条评论，用户强调成本透明度需求 |
| [#3384](https://github.com/QwenLM/qwen-code/issues/3384) | 无法添加 OpenAI 兼容的本地 LLM | 15 条评论，身份认同 provider 模型 ID 冲突 |
| [#1855](https://github.com/QwenLM/qwen-code/issues/1855) | OAuth 会话切换到 Coding Plan API key 后仍 401 错误 | 14 条评论，认证机制 BUG |
| [#5234](https://github.com/QwenLM/qwen-code/issues/5234) | 工具调用死循环问题 | 4 条评论，导致资源浪费 |
| [#5173](https://github.com/QwenLM/qwen-code/issues/5173) | 相同 model ID 多 provider 选择无法持久化 | 3 条评论，配置体验问题 |
| [#5267](https://github.com/QwenLM/qwen-code/issues/5267) | settings.json 中 `context.fileName` 配置无效 | 5 条评论，自定义上下文失败 |
| [#3914](https://github.com/QwenLM/qwen-code/issues/3914) | API 连接成功但请求失败 | 9 条评论，OpenRouter 集成问题 |
| [#5180](https://github.com/QwenLM/qwen-code/issues/5180) | 主子会话中 subagent 任务中途崩溃 | 4 条评论，多代理架构稳定性 |
| [#5159](https://github.com/QwenLM/qwen-code/issues/5159) | tmux 下触控板滚动触发历史导航 | 3 条评论，macOS 使用体验 |

## 4. 重要 PR 进展（10个）

| PR | 功能/修复内容 | 链接 |
|----|------------|------|
| [#5284](https://github.com/QwenLM/qwen-code/pull/5284) | 编译 macOS 26+ Liquid Glass Assets.car | feat(desktop): macOS 26+ |
| [#5202](https://github.com/QwenLM/qwen-code/pull/5202) | 添加 QQ Bot 官方 Channel Adapter | feat(channel): QQ Bot |
| [#5259](https://github.com/QwenLM/qwen-code/pull/5259) | 支持 Ctrl+P/N 在补全菜单导航 | fix(cli): Vim keymaps |
| [#5279](https://github.com/QwenLM/qwen-code/pull/5279) | 添加工具调用防死循环断路器 | fix(core): circuit breaker |
| [#5179](https://github.com/QwenLM/qwen-code/pull/5179) | 记住多 provider 共享 model ID 的选择 | fix(model): provider selection |
| [#5030](https://github.com/QwenLM/qwen-code/pull/5030) | 支持无合成消息恢复中断轮次 | feat(core): resume turn |
| [#5245](https://github.com/QwenLM/qwen-code/pull/5245) | 修复 Windows 空会话显示和路径扩展 | fix(Windows) |
| [#5248](https://github.com/QwenLM/qwen-code/pull/5248) | 文档记录 tmux 滚动 workaround | docs: tmux workaround |
| [#2915](https://github.com/QwenLM/qwen-code/pull/2915) | 添加 `/clear --all` 完全重置会话 | feat(cli): /clear --all |
| [#4242](https://github.com/QwenLM/qwen-code/pull/4242) | 修复压缩后 rewind 目标映射 | fix(cli): rewind mapping |

## 5. 功能需求趋势
1. **认证与配额管理** (30%+ 热度): OAuth 额度调整、Token 统计、API key 切换失败
2. **模型提供商灵活性** (20%): Custom Provider 支持、相同 ID 多源选择、协议解耦
3. **CLI 体验优化** (15%): Vim 按键、tmux 兼容、菜单导航
4. **多代理架构稳定性** (10%): Subagent 崩溃、工具调用死循环
5. **成本透明度** (10%): Token 消耗统计、Context 配置验证

## 6. 开发者关注点
- **工具调用失控**: 死循环导致长时间资源浪费（#5234）
- **配置文件验证**: `context.fileName` 等高级配置未生效（#5267）
- **跨平台兼容**: Windows 路径和会话管理问题（#5245）
- **Vim 模式支持**: 补全菜单不支持 Ctrl+P/N 快捷键（#2561）
- **恢复机制**: 会话中断后需要合成 continue 消息（#5030）


</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**2026‑06‑18 DeepSeek‑TUI 社区动态日报**  

---

### 1. 今日速览  
- 社区在 **EPIC‑001 命令边界重构**（#2870）上取得实质性进展，已在 `hunter` 分支上复现并提交。  
- **Plan/Agent 模式切换**的Bug（#3279）得到修复，且多个 PR 同步修复了模式恢复、批准模式恢复及自动执行守卫问题。  
- 用户对 **OpenCode Go/Zen** 作为 DeepSeek‑V4 提供者的支持（#1481）提出热烈需求，已在 PR #3290 中加入防护性规则防止自问自答循环。  

---

### 2. 版本发布  
>  past 24 h **无新发行版**，暂无需更新日志。

---

### 3. 社区热点 Issues（过去 24 h）  

| # | 标题（简要） | 关键意义 | 社区反应 | 链接 |
|---|--------------|----------|----------|------|
| 2870 | **[OPEN] EPIC: staged command‑boundary refactor for #2791** | 关键的命令边界拆分，为后续子代理和工作流铺路 | 5 条评论，聚焦 PR #2851 的证明显原 | https://github.com/Hmbown/CodeWhale/issues/2870 |
| 3275 | **[OPEN] [bug, question] CodeWhale is overly involved in making modifications…** | 发现 AI 会自我循环、过度自我提问，削弱用户意图 | 4 条评论，社区呼吁更严格的 “user‑confirm” 机制 | https://github.com/Hmbown/CodeWhale/issues/3275 |
| 2917 | **[CLOSED] [bug, v0.8.61, v0.8.63] Cargo distribution: error: failed to spawn `codewhale' after changed from deepseek‑tui** | 发布脚本因路径问题失效，影响升级流程 | 虽已关闭，但仍是用户报告的典型卡点 | https://github.com/Hmbown/CodeWhale/issues/2917 |
| 3279 | **[OPEN] [bug, documentation, enhancement] Plan/Agent 模式切换不一致 & 工具权限混乱** | 模式切换后权限状态不一致导致写文件/执行 shell 被拒 | 3 条评论，已在 PR #3283 修复 | https://github.com/Hmbown/CodeWhale/issues/3279 |
| 1481 | **[OPEN] [enhancement] Support OpenCode Go/Zen please, it provides DeepSeek‑V4 as well.** | 社区渴求对更便宜且兼容的 OpenCode Go/Zen 提供者的支持 | 2 条赞同，已在 PR #3290 中加入规则防自问自答 | https://github.com/Hmbown/CodeWhale/issues/1481 |
| 3289 | **[OPEN] [bug] v0.8.61 ui freezed after auto spawn seveval agent** | TUI 在自动生成 Agent 后出现卡死，阻塞工作流 | 2 条评论，已在 PR #3294 中改写历史记录路径 | https://github.com/Hmbown/CodeWhale/issues/3289 |
| 3281 | **[OPEN] [bug] [moonshot] v0.8.61 #3265 fix incomplete — parameters still missing type:object** | 对 Kimi/Moonshot 参数根节点缺少 `type:"object"` 导致 400 错误 | 2 条评论，已在 PR #3286 完成全局修复 | https://github.com/Hmbown/CodeWhale/issues/3281 |
| 3209 | **[OPEN] [documentation, enhancement, v0.9.0, workflow‑runtime, pod‑workflows, external‑memory, subagents, ux, reliability] v0.9.0 EPIC: Chat‑native CodeWhale workrooms…** | 构想面向聊天、线程、分享的工作间，是长期愿景的核心 | 2 条评论，已在 PR #3239 添加 Atlas Cloud 文档 | https://github.com/Hmbown/CodeWhale/issues/3209 |
| 3292 | **[OPEN] [bug] pre_tool_snapshot did not respect config snapshots.enabled=false** | 即使关闭快照功能，仍会写入巨量快照文件 | 1 条评论，已在 PR #3293 中加入 `enabled` 判断 | https://github.com/Hmbown/CodeWhale/issues/3292 |
| 3282 | **[OPEN] [enhancement, question] config.toml file content improvement** | 用户希望在 TUI 修改时保留注释行以作笔记 | 1 条评论，已在 PR #3291 实现 | https://github.com/Hmbown/CodeWhale/issues/3282 |

> **共计 10 条**（包括已关闭的 #2917 与 #1530），均得到社区活跃讨论，标志着当前最紧迫的Bug修复与功能需求点。

---

### 4. 重要 PR 进展（过去 24 h）  

| # | 标题（简要） | 关键改动 | 链接 |
|---|--------------|----------|------|
| 3290 | **fix(prompts): add scope_discipline rules to prevent self‑questioning** | 在 `constitution.md` 增加规则库，阻止 AI 自问自答 | https://github.com/Hmbown/CodeWhale/pull/3290 |
| 3291 | **Fix/preserve comments in config files** | 使用 `toml_edit` 合并序列化后保留原始注释，防止写入时被擦除 | https://github.com/Hmbown/CodeWhale/pull/3291 |
| 3293 | **fix(tui): respect snapshots.enabled for per‑tool snapshots** | 为 `snapshots.enabled = false` 时的 per‑tool 快照加入守卫 | https://github.com/Hmbown/CodeWhale/pull/3293 |
| 3294 | **fix(tui): write composer history under .codewhale, not legacy .deepseek** | 将历史文件写入新目录，避免在 Windows 上重复创建 `.deepseek` | https://github.com/Hmbown/CodeWhale/pull/3294 |
| 3280 | **fix(auto): allow heuristic‑only auto routing when flash router unavailable** | 当无可用路由器时仍可使用自动模式 heuristics | https://github.com/Hmbown/CodeWhale/pull/3280 |
| 3242 | **feat: add workspace_follow_symlinks setting for symlink‑aware tool operations** | 新增 `workspace_follow_symlinks` 配置，支持遍历符号链接 | https://github.com/Hmbown/CodeWhale/pull/3242 |
| 3283 | **Fix: Plan/Agent Mode Toggle — approval_mode restore + auto‑execution guard** | 修复模式切换后 `approval_mode` 未恢复及自动执行风险 | https://github.com/Hmbown/CodeWhale/pull/3283 |
| 3285 | **fix(tui): persist session before stall/cancel recovery so --continue keeps history** | 在 stall/cancel 恢复前持久化会话，确保 `--continue` 可继续历史 | https://github.com/Hmbown/CodeWhale/pull/3285 |
| 3287 | **[codex] docs(runtime-api): document app-server no-auth flag

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*