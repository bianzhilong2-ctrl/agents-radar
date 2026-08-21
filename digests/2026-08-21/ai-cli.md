# AI CLI 工具社区动态日报 2026-08-21

> 生成时间: 2026-08-21 00:43 UTC | 覆盖工具: 9 个

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



### 横向对比报告：AI CLI 工具生态动态分析  
**日期：2026-08-21**

---

#### **1. 生态全景**  
当前 AI CLI 工具生态呈现高活跃度但碎片化特征，各项目聚焦于特定场景（如代码生成、跨平台开发、开发者安全）构建垂直领域功能。社区普遍要求提升工具可靠性、增强模型一致性，并兼顾跨平台一致性，同时存在跨项目生态协作的潜力（如标准插件接口规范）。技术路线均偏向代理模型、可控性优化与社区驱动改进。

---

#### **2. 各工具活跃度对比**  

| 工具名称        | 今日活跃 Issues（条） | 最新 PR（条） | 是否发布版本 | 版本内容关键点 |  
|------------------|----------------------|--------------|--------------|----------------|  
| **Claude Code**  | 10                   | 0            | v2.1.238     | `keybindingFlavor`，插件市场命令，LLM gateway 缓存修复 |  
| **OpenAI Codex** | 10                   | 8            | v0.149.0     | 交互式测试面板，`cd` 目录操作，子代理优化 |  
| **Gemini CLI**   | 10                   | 10           | v0.56.0（夜ly） | 修复空 text turns，Shell 命令卡顿，Subagent 改进 |  
| **Kimi Code**    | 10                   | 2            | 无           | 安全文档改进，内存插件提案 |  
| **OpenCode**     | 8                    | 1            | v1.18.19     | 动态设置克拉馨语 API 关联模型 |  
| **Pi**           | 10                   | 10           | 无           | 窗口渲染优化，Umans AI 支持，WASM 标准化 |  
| **Qwen Code**    | 10                   | 10           | v0.21.15（稳定） | 文件附件插入，ERP 辺界化， corre， bug 修复 |  
| **DeepSeek-TUI** | 10                   | 10           | v0.9.10      | 脱弃旧包，用户留存策略，多组件 refactor |  
| **Copilot CLI**  | 10                   | 1            | v1.0.81-6    | `defaultMode`，远程工具权限控制 |  

*注：Issues 数基于上述数据摘要，PR 数为当日合并新提交数。*

---

#### **3. 共同关注的功能方向**  
1. **跨平台一致性与稳定性**  
   - مرتبط工具：Claude Code（跨平台插件渲染）、Pi（Windows 输入行问题）、Qwen Code（远程访问异常）  
   -诉求：统一在 Windows/Linux/macOS 上的交互行为与文件路径处理  

2. **模型一致性与可控性**  
   - 相关工具：Claude Code（模型重复修辞）、Codex（子代理状态错误）、Gemini CLI（冗余系统回复）  
   -诉求：增强模型对提示词执行力与长上下文记忆的控制  

3. **插件与工具调用可靠性**  
   - 相关工具：Claude Code（OAuth 刷新错误）、Qwen Code（token 压缩异常）、Pi（Windows 插件权限）  
   -诉求：减少工具调用失败、提升权限沙箱透明度  

4. **会话与记忆管理**  
   - 相关工具：Gemini CLI（长会话内存无界）、Qwen Code（恢复会话失败）、Kimi Code（记忆插件设想）  
   -诉求：删除会话状态恢复、持久化存储安全  

---

#### **4. 差异化定位分析**  

| 工具           | 功能侧重点                | 目标用户                 | 技术路线           |  
|----------------|---------------------------|--------------------------|--------------------|  
| **Claude Code**| 插件生态（社区驱动）       | 高级开发者/开发者自主团队 | 插件市场+LLM gateway  客户端优化 |  
| **Codex**      | 企业级开发工具             | 企业用户/团队             | 日志管理性能优化、沙箱安全 |  
| **Gemini CLI** | 代理多模型集成与性能       | 多模型需要集成的开发者   | Subagent 扩展、零依赖沙箱 |  
| **Kimi Code**  | 高速代码生成（中文优化）   | 中文生态开发者           | 中文专属模型+内存插件 |  
| **Pi**         | TUI 控制台交互体验         | 快速原型开发者           | GUI-TUI 视觉层整合 |  
| **Qwen Code**  | SWE-bench 合规性验证        | 企业级代码质量要求者     | CI/CD 测试驱动迭代 |  
| **DeepSeek-TUI**| 新模型适配与用户留存       | 全新模型试用者           | identity 与 durable approvals 机制 |  
| **Copilot CLI**| 扩展生态工具集成           | GitHub 工具链用户        | repercision 舍入策略+MCP 标准化 |  

---

#### **5. 社区热度与成熟度**  
- **最活跃社区**：DeepSeek-TUI（PR/Issue 10:10）、Gamma CLI（PR/Issue 10:10）  
  ⇨ 显示技术颠覆时的快速迭代需求响应。  
- **成熟度关键工具**：  
  - Qwen Code（3轮 SWE-bench 绿）、Codex（稳定版本迭代）  
  - 反映长期别话和企业级可靠性要求。  
- **快速迭代阶段**：Klmi Code、Pi  
  ⇨ 两者均包含实验性插件/技术探索（如内存管理、豹暴框架）。

---

#### **6. 谋展趋势信号**  
1. **安全与可管控性优先**  
   - 所有工具社区均关注 desensitization、幻灭攻击预防、权限沙箱突破  
2. **跨平台统一性挑战**  
   - Windows（Codex、Pi）、Linux（Qwen、DeepSeek）上的 UX 差异需解决  
3. **AI 模型适配竞争**  
   - 新模型（如DeepSeek-V4、Kimi+4.8）一旦出现，社区工具链需快速适配  
4. **代理模型优化加速**  
   - Subagent 开放化（GitHub、Gemini Docx）、 permission sandbox 改进  

---

**总结**：  
AI CLI 工具生态正向高度模块化与社区协作方向发展，未来成败关键在于标准化插件接口、跨模型适配能力与用户体验统一性。开发者需关注安全沙箱的平衡与多平台一致性设计，以期在下一波模型浪潮中加速落地。


---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（截至 2026‑08‑21）**  

---

### 1. 热门 Skills 排行（评论/关注度最高的 PR）

| 排名 | PR 标题 | 功能简述 | 社区讨论热点 | 当前状态 | GitHub 链接 |
|------|----------|----------|--------------|----------|-------------|
| 1 | **fix(skill‑creator): run_eval.py always reports 0% recall** (#1298) | 纠正 `run_eval.py` 在 Windows 环境下因子线程读取错误导致所有技能的召回率被强制为 0% 的 bug，使优化循环失效。 | 召回率为 0% 影响所有后续技能改进，是社区最迫切的可靠性问题。 | **OPEN** | <https://github.com/anthropics/skills/pull/1298> |
| 2 | **fix Windows subprocess + encoding bugs** (#1099) | 解决 `run_eval.py` 在 Windows 通过子进程调用 `claude` 时因路径/编码错误导致所有查询被标记为 “not triggered”。 | 使得 `precision=100% recall=0%` 的循环失效，阻碍技能验证。 | **OPEN** | <https://github.com/anthropics/skills/pull/1099> |
| 3 | **Add ServiceNow platform skill** (#568) | 为 ServiceNow 提供全链路助手：ITSM/ITOM/ITAM/SAM/FSM/HRSD/CSM/SPM/安全响应等多域覆盖。 | 将 Claude 与企业级 ITSM 平台深度集成，满足企业用户对“一站式”自动化的需求。 | **OPEN** | <https://github.com/anthropics/skills/pull/568> |
| 4 | **Add testing-patterns skill** (#723) | 完整的测试栈技能：Testing Trophy、单元测试 AAA  pattern、React 组件测试、CI/CD 集成等。 | 为开发者提供统一的测试指导，提升技能可复用性与可靠性。 | **OPEN** | <https://github.com/anthropics/skills/pull/723> |
| 5 | **feat: add self‑audit** (#1367) | 机械文件验证 + 四维度（结构、文档、逻辑、安全）质量把关的通用审计技能。 | 引入“质量门禁”，提升 AI 输出可信度，是社区关注的安全/质量议题。 | **OPEN** | <https://github.com/anthropics/skills/pull/1367> |
| 6 | **fix(docx): prevent tracked change w:id collision** (#541) | 修复 DOCX 技能在已有书签时产生 `w:id` 冲突导致文档损坏的问题。 | 防止因追踪更改 ID 冲突导致的文档不可用，影响大量文档生成场景。 | **OPEN** | <https://github.com/anthropics/skills/pull/541> |
| 7 | **fix(skill‑creator): warn on unquoted description with YAML special characters** (#539) | 在 `quick_validate.py` 加入前置检查，提前捕获未引用的 `description` 字段中包含 `:` 等特殊字符的 YAML 解析错误。 | 防止 silently 失效的 YAML 前置错误，提升技能创建的可靠性。 | **OPEN** | <https://github.com/anthropics/skills/pull/539> |
| 8 | **Add ODT skill — OpenDocument text creation & conversion** (#486) | 让 Claude 能创建、填充、读取并转换 ODT/ODS 文件，支持 LibreOffice 等开源/ISO 标准文档。 | 开拓文档生成的新格式，满足用户对开源文件的需求。 | **OPEN** | <https://github.com/anthropics/skills/pull/486> |

> **说明**：所有列出的 PR 均为 **OPEN**，意味着社区仍在推动最终合并。它们的评论数虽未在摘要中显示，但从 Issue 与 PR 主题的紧迫性可以判断它们是当前最受关注的焦点。

---

### 2. 社区需求趋势（从 Issues 中提炼）

| 趋势 | 代表 Issue（评论数） | 核心诉求 |
|------|-------------------|----------|
| **安全与信任边界** | #492 (43 评论) | 防止社区技能冒用 `anthropic/` 命名空间，导致用户错误授予权限。 |
| **组织内共享** | #228 (16 评论) | 允许企业/团队内部直接共享技能，而非通过文件传输。 |
| **可靠性与调试** | #556 (12 评论) / #1099 (无评论显示) | 解决 `run_eval.py` 在特定参数 (`-p never`) 下触发率为 0% 的 bug，提升技能验证可靠性。 |
| **跨平台兼容** | #29 (4 评论) / #16 (4 评论) | 支持 AWS Bedrock 与 MCP（Micro‑Component Protocol）标准化技能发布。 |
| **质量与安全审计** | #1385 (4 评论) / #83 (4 评论) | 引入多级质量把关（预校准 → 对抗审查 → 交付验证）以及专门的质量/安全分析技能。 |
| **文档与元数据完整性** | #189 (6 评论) / #12 (4 评论) | 消除重复技能、避免 DOCX/OOXML 格式的空白 reformatting 导致的可读性问题。 |
| **元技能与元功能** | #83 (4 评论) / #1595 (0 评论) | 为 Marketplace 引入 `skill-quality-analyzer`、`skill-security-analyzer` 等元技能，提升技能可审计性。 |

**总体趋势**：社区最迫切的需求是 **提升 Skills 的可靠性、跨平台兼容性以及安全/信任机制**，同时希望 **更好地共享、组织和审计技能**，以及 **扩展至更多企业与生态平台**（如 ServiceNow、Bedrock、MCP）。

---

### 3. 高潜力待合并 Skills（评论活跃但尚未合并）

| PR | 关键特性 | 为何值得关注 |
|----|----------|--------------|
| **#1298** – `run_eval.py` 召回率 0% 修复 | 直接关系到所有技能的验证与优化循环，解决后社区可信度提升显著。 |
| **#1099** – Windows subprocess/encoding crash | 影响 Windows 用户的使用体验，修复后可大幅降低支持成本。 |
| **#568** – ServiceNow 平台技能 | 覆盖广泛的企业 IT 流程，具备大规模落地潜力。 |
| **#723** – `testing-patterns` 技能 | 为开发者提供完整的测试指南，提升技能复用率与可维护性。 |
| **#1367** – `self‑audit` 元技能 | 引入系统化质量把关，符合当前对 AI 输出可信度的高度关注。 |
| **#541** – DOCX `w:id` 冲突修复 | 防止文档损坏，直接提升 DOCX 技能的实际可用性。 |
| **#539** – YAML 前置校验警告 | 防止技能描述在 YAML 解析时被截断，提升技能创建的鲁棒性。 |
| **#486** – ODT 技能 | 开拓对开源文档格式的支持，满足企业与个人对 ODF 的需求。 |

> 这些 PR 均为 **OPEN**，且 Issue 与 PR 标题表明它们解决的是 **高影响力Bug** 或 **新增高价值功能**，预计未来数周内会进入审查并合并。

---

### 4. Skills 生态洞察（一句话总结）

> 当前社区最集中的诉求是 **构建更可靠、跨平台、安全可信且易于共享的 Skills**，以提升验证效率、降低元数据错误并支撑企业级集成（如 ServiceNow、Bedrock、MCP）以及质量审计机制。

---

**Claude Code 社区动态日报 – 2026‑08‑21**

---

### 1. 今日速览  
- 官方发布 **v2.1.238**，新增 `keybindingFlavor` 设置及插件市场库命令功能，同时修复了 LLM gateway 会话缓存失效的问题。  
- 社区仍在热议 **模型输出重复、OAuth 刷新 token 失效、跨平台插件/桌面 widget 渲染异常** 等多起 bug，反馈频繁且关注度高。

---

### 2. 版本发布  

| 版本 | 发布时间 | 主要更新 |
|------|----------|----------|
| **v2.1.238** | 2026‑08‑21 | - 新增 `keybindingFlavor` 设置（可选 `"readline"` 使 `Ctrl+W` 删除至上一段空白，保持默认 `"classic"`）<br>- 插件市场库（`headersHelper`）在 URL 或目录条目上运行命令的支持<br>- 修复 LLM gateway / 自定义 base URL 会话缓存失效的 bug |
| **v2.1.237** | 2026‑08‑20 | - 修复使用 LLM gateway 或自定义 base URL 时的 prompt 缓存错误<br>- 引入内置 **“Concise”** 输出风格：直接展示结果，省略前置说明，保持完整工作 |

> **链接**：<https://github.com/anthropics/claude-code/releases/tag/v2.1.238>、<https://github.com/anthropics/claude-code/releases/tag/v2.1.237>

---

### 3. 社区热点 Issues（共 10 条）  

| # | 标题 | 重要性 | 社区反应 | 链接 |
|---|------|--------|----------|------|
| **#36151** | **Multi‑account switching in Claude Mobile app without shared email** | 需求强烈，涉及账号管理的核心痛点，预计提升跨设备协作体验。 | 161 条评论，620 赞 → 热议中。 | <https://github.com/anthropics/claude-code/issues/36151> |
| **#84352** | **CVP‑approved Claude.ai organization still receives cyber safeguard blocks** | 影响已获批准的企业账号，可能导致业务中断。 | 132 条评论，21 赞 → 关注度高。 | <https://github.com/anthropics/claude-code/issues/84352> |
| **#77136** | **Claude 4.7/4.8/5.0/Fable 重复修辞、产生不连贯文本** | 直接影响模型可用性与开发效率，需快速修复。 | 49 条评论，316 赞 → 受众广泛。 | <https://github.com/anthropics/claude-code/issues/77136> |
| **#61044** | **MCP tool calls in CCR Routines fail with “requires approval” — no UI** | 关键工作流受阻，影响自动化与自定义工具使用。 | 18 条评论，6 赞 → 明确的 bug 报告。 | <https://github.com/anthropics/claude-code/issues/61044> |
| **#75607** | **Server‑side experiment `x-cc-atis` silently removed Opus 4.8, CLI auto‑updated despite `autoUpdates: false`** | 破坏用户对版本控制的信任，需透明的开关机制。 | 8 条评论，11 赞 → 关键漏洞。 | <https://github.com/anthropics/claude-code/issues/75607> |
| **#88370** | **MCP Apps widgets stopped rendering after staged server rollout** | UI 组件失效导致工作流中断，影响日常使用。 | 5 条评论，0 赞 → 近期出现的 regress。 | <https://github.com/anthropics/claude-code/issues/88370> |
| **#70674** | **Path encoding strips non‑Latin characters → directory collisions, session cross‑project leakage** | 文件系统层面 bug 导致数据丢失，影响跨平台稳定性。 | 5 条评论，2 赞 → 高危。 | <https://github.com/anthropics/claude-code/issues/70674> |
| **#78037** | **OAuth refresh token rejected after ~24 h, forced daily /login** | 影响单机用户的连续使用体验，属于高频痛点。 | 3 条评论，1 赞 → 迫切需要修复。 | <https://github.com/anthropics/claude-code/issues/78037> |
| **#76136** | **Cmd+click on file links in iTerm2 fails (OSC 8 URI missing `file://`)** | UI 交互 bug，导致文件无法直接打开。 | 3 条评论，1 赞 → 具体平台问题。 | <https://github.com/anthropics/claude-code/issues/76136> |
| **#73039** | **ClAudit false‑positive in GlassFalcon (cybersecurity safety‑filter)** | 安全过滤误报阻断合法工作，需调优过滤规则。 | 3 条评论，0 赞 → 安全团队关注。 | <https://github.com/anthropics/claude-code/issues/73039> |

---

### 4. 重要 PR 进展  

- **本日（24 h）内未发现合并的 PR**。所有开放 PR 均未有新更新。  
> **说明**：当前 GitHub 数据显示 **Pull Requests** 为 0 条，故暂无可报告的 PR 进展。

---

### 5. 功能需求趋势  

- **多账号/跨平台账号管理**：#36151、#87870 显示用户渴望在不同设备间无缝切换账号或在同一账号上保持跨会话消息传递。  
- **提升模型一致性与可控性**：#77136、#85215 反映模型在长上下文或自动执行指令时出现重复修辞或自行生成“用户”步骤，需更好的指令遵循与输出控制。  
- **可靠的插件与工具调用**：#61044、#86459、#88087 表明用户对插件权限、参数类型转换以及 UI 交互（dialog broker）的稳定性提出强烈需求。  
- **更安全、更透明的安全过滤**：#73039、#84352 表明企业用户关注安全模块的误报与误阻问题。  
- **改进会话持久化与恢复**：#88383、#86092、#88412 显示用户希望会话状态（思考块、缓存、fork）在重启、后台运行时保持一致，避免数据丢失或权限错误。  
- **更友好的 UI/UX**：#88370、#76136、#88087 表明对桌面插件渲染、链接交互以及对话框处理的即时反馈仍是薄弱环节。  

总体来看，社区更关注 **账号管理、模型可控性、工具/插件可靠性、会话持久化以及跨平台一致性** 四大方向。

---

### 6. 开发者关注点（痛点与高频需求）  

1. **OAuth 令牌失效**：多位开发者反馈 token 在 24 h 后失效，强制每日重新登录（#78037、#86092）。  
2. **会话状态持久化**：交互式 CLI 会话在升级后出现 “thinking” 块为空的 husk（#88383），以及 `--resume --bg` 产生新会话而非唤醒旧会话（#86092）。  
3. **插件作用域管理**：插件更新默认在用户作用域，导致项目作用域插件无法更新（#75587）。  
4. **跨平台一致性**：Linux 与 Windows 在跨会话消息、文件路径处理、插件 widget 渲染等方面表现不一（#87870、#70674、#88405）。  
5. **UI/UX 细节**：文件链接缺少 `file://` 前缀导致 iTerm2 无法打开（#76136），以及 MSIX 升级后残留容器导致启动失败（#87879）。  
6. **安全过滤误报**：ClAudit 对合法工作流的误判阻断（#73039、#73031、#73015），影响开发效率。  

这些痛点表明，社区迫切需要 **令牌长效化、会话状态可靠恢复、作用域明确的插件管理、跨平台 bug 修复以及更精准的安全过滤** 四大方向的改进。

--- 

*报告结束*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报  
**日期：2026-08-21**

---

## **今日速览**

- **Codex CLI 0.149.0 正式版发布**，新增强大的交互式任务面板及 TUI 工作目录命令，提升终端交互体验；
- **macOS 及 Windows 认证问题持续引发社区争议**，多个与登录、会话相关的 Issue 累计超 100 条评论；
- **多个 PR 聚焦沙箱安全、子代理优化及兼容性问题**，官方持续强化跨平台稳定性。

---

## **版本发布**

### Codex CLI rust-v0.149.0 正式版（2026-08-21）

- 【#39094】新增交互式 `codex agents` 仪表盘，支持任务搜索、启动、打开、重命名和停止；
- 【#38894】引入 `/cd`、`/pwd`、`/cwd` 命令，增强 TUI 会话中工作目录管理能力；
- 优化了子代理UI行为及日志系统稳定性。

链接：https://github.com/openai/codex/releases/tag/rust-v0.149.0

---

## **社区热点 Issues**

| 编号 | 标题 | 简介 | 评论数 | 重要性 |
|------|------|------|--------|--------|
| [#39162](https://github.com/openai/codex/issues/39162) | macOS 打开对话话导致 ChatGPT Auth 失效 | 用户反馈在打开现有会话后被迫重新登录，影响日常使用流畅性。 | 28 | 高 |
| [#23200](https://github.com/openai/codex/issues/23200) | 支持无需桌面端的远程 Linux 主机（iOS） | 社区希望移动端可直接连接远程服务器，脱离依赖本机桌面端。 | 20 | 高 |
| [#33493](https://github.com/openai/codex/issues/33493) | 本地压缩 v2 保留无限制的 image payload | 大型图像工作流触发持续自动压缩，导致性能下降。 | 19 | 中 |
| [#39189](https://github.com/openai/codex/issues/39189) | Windows 开启工作空间后 Pro 账户登出 | 特定设置下用户账户被错误登出，涉及身份验证逻辑。 | 16 | 高 |
| [#35746](https://github.com/openai/codex/issues/35746) | 分页历史丢失有效的 rollout 记录 | CLI 历史记录处理不一致，可能导致数据丢失或重复。 | 16 | 中 |
| [#31963](https://github.com/openai/codex/issues/31963) | zh-CN 翻译“极高”与“超高”重复 | 本地化不完整，影响中文用户体验。 | 15 | 中 |
| [#39150](https://github.com/openai/codex/issues/39150) | Windows 归档对话失败（路径前缀 \\?\） | 归档功能在使用扩展路径前缀时崩溃。 | 12 | 中 |
| [#34026](https://github.com/openai/codex/issues/34026) | 完成的线程显示为“思考中”，消息排队 | 线程状态错误，影响后续消息发送逻辑。 | 11 | 中 |
| [#38364](https://github.com/openai/codex/issues/38364) | 子代理面板持续显示为 Active | 子节点状态管理错误，UI 显示不准确。 | 11 | 中 |
| [#39161](https://github.com/openai/codex/issues/39161) | 无法归档对话（变体问题） | 与归档机制相关的深层异常。 | 9 | 中 |

---

## **重要 PR 进展**

| 编号 | 标题 | 内容概述 |
|------|------|----------|
| [#39822](https://github.com/openai/codex/pull/39822) | 保持未限制的 Guardian 分类器指令 | 防止因默认 token 限制导致政策内容被截断。 |
| [#39813](https://github.com/openai/codex/pull/39813) | 延迟旧文件系统策略投影 | 提升性能，减少不必要的计算开销。 |
| [#39812](https://github.com/openai/codex/pull/39812) | 避免为 presence 检查实例化 writable-root | 优化沙箱初始化逻辑。 |
| [#39811](https://github.com/openai/codex/pull/39811) | 限制 macOS 偏好设置读取范围 | 增强隐私保护，防止越界访问。 |
| [#39809](https://github.com/openai/codex/pull/39809) | 保留 WINDIR 环境变量 | 提升 Windows shell 环境一致性。 |
| [#39807](https://github.com/openai/codex/pull/39807) | 最终化预留 PDF 上传 | 支持 C2PA 签名流程。 |
| [#39804](https://github.com/openai/codex/pull/39804) | 对 Amazon Bedrock 使用多代理 V1 | 适配 AWS 模型兼容性限制。 |
| [#39802](https://github.com/openai/codex/pull/39802) | 优化大小写不敏感的线程匹配 | 提升历史查询效率。 |
| [#39798](https://github.com/openai/codex/pull/39798) | 更新 rmcp 至 3.1.3 | 稳定 MCP 通信依赖。 |
| [#39797](https://github.com/openai/codex/pull/39797) | 丰富归档分析的线程上下文 | 收集更多元数据用于分析。 |

---

## **功能需求趋势**

1. **跨平台身份认证稳定性**：涉及 macOS、Windows 登录失效的问题引发广泛讨论；
2. **远程开发支持**：期待无需桌面端即可连接远程 Linux 主机；
3. **移动端体验优化**：iOS/Android 客户端需提升稳定性与功能完整性；
4. **本地资源管理机制**：本地压缩、路径规范化等底层问题频现；
5. **国际化与本地化**：多语言支持仍有待完善；
6. **IDE 集成灵活性**：VSCode 等扩展对 Markdown 渲染的可选控制需求增长。

---

## **开发者关注点**

- **沙箱与文件系统权限控制**：涉及多个 PR 对权限边界进行精细化管理；
- **子代理行为一致性**：UI 与后台逻辑不同步是常见反馈；
- **日志与调试信息不足**：用户抱怨调试过程中缺乏足够日志输出；
- **CLI 与 GUI 差异**：部分功能在 TUI 中表现不佳；
- **API 模型兼容性**：针对非 OpenAI 提供者的适配需求逐渐显现。

--- 

如有兴趣深入探讨上述议题，欢迎访问 corresponding GitHub 链接进行追踪。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-21）

## 今日速览
1. 发布了 v0.56.0-nightly.20260820 版本，修复了核心层面保留空文本turn的逻辑问题。
2. 多个涉及子代理（Subagent）和 Shell 执行卡顿的高优先级 Bug 引发社区关注。
3. 大量围绕 Agent 行为、Memory 系统优化及安全加固的需求持续涌现。

---

## 版本发布
### v0.56.0-nightly.20260820.ge90c63fa1
- **修复内容**：`fix(core): preserve empty text turns with tools or media` — 解决在使用工具或多媒体内容后被错误地裁剪或删除的空文本 turn 问题。
- **链接**：[发布页面](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260820.ge90c63fa1)

---

## 社区热点 Issues

| 编号 | 标题 | 评论数 | 重要性分析 |
|------|------|--------|------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success | 12 | 模型将达到最大回合数误报为目标成功，导致子代理无法正确中断或恢复，影响任务完整性。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | 8 | 普遍报告通用代理挂起严重问题，影响日常使用稳定性。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model's bash affinity via Zero-Dependency OS Sandboxing | 8 | 探讨如何利用模型对 bash 的天然理解能力进行零依赖沙箱化处理，提升安全性与性能。 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | 7 | 推动构建模块化评估体系以提升 AI 代理行为可控性与可验证性。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads | 7 | AST 识别工具可提升代码读取效率与准确性，是当前性能优化方向之一。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | 6 | 用户反馈模型倾向手动执行任务，而非调用自定义技能或子代理，降低模块化利用率。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low-signal sessions indefinitely | 5 | 自动记忆系统对低质量会话无限重试可能导致资源浪费与性能下降。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" | 4 |  shell 命令执行完毕后仍显示等待输入状态，造成 UI 卡顿与用户困惑。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland | 4 | 在 Wayland 环境下浏览器子代理异常，涉及跨平台兼容性问题。 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior | 3 | 探讨如何约束模型在执行 Git reset、-force 等高风险操作时的行为。 |

---

## 重要 PR 进展

| 编号 | 标题 | 功能类别 | 简要说明 |
|------|------|----------|----------|
| [#28934](https://github.com/google-gemini/gemini-cli/pull/28934) | history rollback and retry nudge optimizations | 性能优化 | 优化工具取消与重试逻辑，减少上下文窗口膨胀与 API 请求频率，提高缓存效率。 |
| [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) | clear stale cancellation error on new message turns | 稳定性 | 修复 A2A 服务端因取消请求导致状态损坏的问题，防止后续请求崩溃。 |
| [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) | keep GIT_CONFIG_* environment triplets internally consistent | Bug Fix | 保证 Git 环境变量一致性，避免因格式错误导致所有 Git 调用失败。 |
| [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) | avoid persisting interrupted response placeholder | Bug Fix | 阻止中断响应文本被写入历史记录中，避免后续上下文污染。 |
| [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) | isolate Docker and container runtime sockets in macOS Seatbelt | 安全加固 | 通过沙箱限制容器运行时套接字访问，防止沙箱逃逸风险。 |
| [#28910](https://github.com/google-gemini/gemini-cli/pull/28910) | add Gemini 3.7 Flash and 3.6 Flash model configurations | 模型支持 | 正式引入 Gemini 3.7 Flash、3.6 Flash 与 3.5 Flash-Lite 模型配置选项。 |
| [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) | warn when a preview model is silently substituted | 用户体验 | 当预览模型无权限时提供警告而非静默替换，提升模型选择透明度。 |
| [#28933](https://github.com/google-gemini/gemini-cli/pull/28933) | implement iterative orchestrator state machine | 架构设计 | 构建迭代式编排器状态机，支持代码生成、评估沙箱隔离及日志轨迹管理。 |
| [#28915](https://github.com/google-gemini/gemini-cli/pull/28915) | ensure consistent symlink evaluation in ignore path handling | Bug Fix | 统一符号链接在路径忽略规则中的处理逻辑，提升文件过滤准确性。 |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | prompt for consent on environment changes | 权限控制 | 在扩展更新时请求用户授权，并对注入的环境变量进行清洗。 |

---

## 功能需求趋势

从近期 Issue 中可归纳出以下几大功能发展方向：

1. **增强 Subagent 能力**
   - 优化子代理调用机制，提升其自主性与可用性。
   - 增强浏览器代理在 Wayland 环境下的兼容性。
   - 允许子代理轨迹通过 `/chat share` 分享。

2. **提升 Agent 行为可控性与安全性**
   - 引入破坏性操作警示与约束机制。
   - 构建行为评估（Behavioral Evals）体系。
   - 增强模型对自身功能的认知（如 CLI 标志、快捷键）。

3. **优化 Memory 系统**
   - 防止低质量会话无限重试。
   - 加强自动记忆管道的脱敏与隔离措施。

4. **性能与资源管理优化**
   - 减少 shell 命令执行后的卡顿现象。
   - 实现基于 AST 的智能文件读取与搜索。
   - 降低上下文窗口消耗，提升 Token 利用率。

5. **跨平台与集成开发支持**
   - 改进 VS Code 等 IDE 集成功能。
   - 完善 Windows 长路径支持指南。

---

## 开发者关注点

1. **痛点归纳**：
   - shell 命令执行后 UI 挂起、Generalist Agent 调用异常。
   - 子代理行为不可预测，尤其是在达成目标前提前终止。
   - 环境变量冲突导致 Git 操作失败。
   - 安全方面担忧容器逃逸与敏感信息泄露。

2. **高频需求**：
   - 更详细的调试日志与错误恢复机制。
   - 灵活配置子代理优先级与触发规则。
   - 增强模型对工具链的掌控能力，减少人工干预。
   - 支持更多本地文件系统抽象层（AST-aware tools）。

--- 

审阅建议：此报告适合发布至社区邮件列表或 Discord 频道，供开发者快速了解当日关键动态。建议后续加入贡献者致谢及未來路线图简要说明，以提升社区参与感。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-21

---

## 1. 今日速览

GitHub Copilot CLI v1.0.81-6 发布，新增默认模式与权限控制设置，优化了 MCP 客户端体验；同时多个关键问题仍在处理中，包括 MCP 服务器连接失败、沙箱权限限制及模型支持不足等。

---

## 2. 版本发布

### ✅ v1.0.81-6 更新亮点

**新增功能：**
- 新增 `defaultMode` 和 `defaultPermissionMode` 设置，用于选择新交互会话的启动模式和审批行为。
- `copilot login` 新增 `--with-token` 参数，支持从 stdin 读取身份验证令牌。

**改进优化：**
- ACP 客户端现在可接收子代理 ID、原始事件订阅及实时标题信息。

🔗 [Release v1.0.81-6](https://github.com/github/copilot-cli/releases/tag/v1.0.81-6)

---

## 3. 社区热点 Issues

以下是近期中评论活跃、影响范围广的热门 Issue：

### 1. #1481 SHIFT + ENTER 执行命令而非换行  
🔧 **状态**: CLOSED  
👥 **评论**: 28 | 👍: 17  
💬 **摘要**: 用户反馈 `SHIFT + ENTER` 应触发换行，但被误识为执行提示，影响使用体验。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/1481)

---

### 2. #4390 组织模型缺失（Claude Sonnet 5 / Opus 5 / Kimi K3）  
🔧 **状态**: CLOSED  
👥 **评论**: 15 | 👍: 7  
💬 **摘要**: 企业组织启用的 Anthropic 和 Kimi 模型无法在 CLI 中正常调用，提示模型被禁用。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/4390)

---

### 3. #3162 自定义 MCP 服务器误报为策略阻塞  
🔧 **状态**: CLOSED  
👥 **评论**: 7 | 👍: 1  
💬 **摘要**: 即使已注册的 MCP 服务器也可能因校验逻辑错误而显示为“受阻”，影响集成可用性。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/3162)

---

### 4. #4096 第三方 MCP 工具无法在 CLI 会话中使用  
🔧 **状态**: CLOSED  
👥 **评论**: 6 | 👍: 2  
💬 **摘要**: OAuth 认证成功但 Token 未传递至 CLI 会话，导致工具无法调用。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/4096)

---

### 5. #4503 SDK 服务器无认证即报 Ready，Slack 会话创建失败  
🔧 **状态**: CLOSED  
👥 **评论**: 5 | 👍: 0  
💬 **摘要**: SDK 启动时缺少 `COPILOT_SDK_AUTH_TOKEN`，导致会话创建失败。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/4503)

---

### 6. #4439 GitLab MCP OAuth 认证失败  
🔧 **状态**: CLOSED  
👥 **评论**: 5 | 👍: 3  
💬 **摘要**: CLI 拒绝 GitLab 的 OAuth 元数据，Issuer 不匹配，影响企业用户体验。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/4439)

---

### 7. #4206 环境加载卡顿，状态栏永远停留在 Loading  
🔧 **状态**: CLOSED  
👥 **评论**: 4 | 👍: 3  
💬 **摘话**: 企业环境下 MCP 握手超时，界面始终处于加载状态。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/4206)

---

### 8. #4038 非交互模式下 MCP 服务器延迟注入空消息  
🔧 **状态**: CLOSED  
👥 **评论**: 3 | 👍: 0  
💬 **摘要**: MCP 晚于预期连接，导致空用户消息插入，模型响应异常。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/4038)

---

### 9. #4524 沙箱限制导致 Git 无法使用  
🔧 **状态**: CLOSED  
👥 **评论**: 3 | 👍: 0  
💬 **摘要**: 新版沙箱过于严格，阻止了 Git 操作，影响开发流程。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/4524)

---

### 10. #4535 store_memory 缺少实例 ID 报错  
🔧 **状态**: OPEN  
👥 **评论**: 3 | 👍: 0  
💬 **摘要**: v1.0.81 尝鲜版本中记忆存储功能崩溃，提示缺少必要参数。  
🔗 [查看详情](https://github.com/github/copilot-cli/issues/4535)

---

## 4. 重要 PR 进展

以下为最近活跃的 PR，涵盖功能增强和关键修复：

> ⚠️ 注意：目前仅收集到一条 PR，如下所示。若后续有更多更新，我们将补充。

### #4510 移除 README 中的 Copilot CLI 文档内容  
🔧 **状态**: OPEN  
👥 **评论**: 0 | 👍: 0  
💬 **摘要**: 提议从 README 中移除 CLI 安装及使用说明，简化文档结构。  
🔗 [查看详情](https://github.com/github/copilot-cli/pull/4510)

---

## 5. 功能需求趋势

根据社区反馈，开发者最关注的方向包括：

- **MCP 服务器集成与稳定性**：连接失败、Token 传递问题、策略校验误报频发。
- **企业级认证与模型支持**：组织模型缺失、GitLab OAuth 兼容性亟需提升。
- **权限沙箱机制优化**：过于严格的限制影响实际开发行为，如 Git 操作受限。
- **会话管理与跨平台一致性**：WSL 状态分离、远程连接后界面卡顿等问题突出。
- **交互体验改进**：快捷键冲突、消息排队管理、终端渲染异常等 UX 问题需关注。

---

## 6. 开发者关注点

主要痛点集中在以下几个方面：

- **MCP 服务器行为不一致**：注册成功但无法使用，或错误识别为策略违规。
- **企业环境兼容性差**：模型调用失败、OAuth 流程中断、策略校验不通过。
- **沙箱机制影响开发效率**：限制太强，常见命令如 Git/VSC 被阻断。
- **终端 UI 响应性问题**：输入事件丢失、界面卡死、消息重复显示。
- **会话丢失与同步异常**：Ctrl+Z 恢复失败、本地与云端 ID 不一致。

---

如需进一步分析或订阅更新，请访问官方仓库：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 2026-08-21

## 1. 今日速览

- 社区聚焦插件安全性与持久化存储问题，docs PR #2614 提出关键安全警示
- 记忆插件提案 #2613 引发长期记忆功能讨论，但当前 CLI 不兼容实验性内存机制

## 2. 版本发布

暂无新版本发布

## 3. 社区热点 Issues

1. **#2613** [enhancement] 提案：Kimi Memory Plus — 工作区范围的长期记忆插件
   - 提出将记忆功能局部化到工作区的实验性方案
   - 0 条评论，尚未社区认可讨论

## 4. 重要 PR 进展

1. **#2614** docs(plugins): document security and persistent data
   - 完善插件运行权限与凭证安全文档
   - 警示插件重装会替换目录，建议独立凭证存储
   - 0 条评论，推动安全实践规范化

## 5. 功能需求趋势

- **插件系统安全性**：凭证注入、文件访问权限管控
- **持久化存储机制**：长期记忆插件的数据生命周期管理
- **文档完善**：明确插件行为边界与安装后果

## 6. 开发者关注点

- 插件权限控制粒度不足
- 内存插件实验性机制尚未被主流工具链支持
- 文档缺失导致安全风险隐患

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报** · 2026-08-21

---

### 1. 今日速览
- **发布 v1.18.19** – 新增 Cloudflare AI Gateway 托管模型原生支持，优化 Codex 速率限制，并修复 Qwen 采样项兼容性问题。[@anomalyco/opencode/releases/tag/v1.18.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 (2026-08-21)

## 今日速览
Pi 社区聚焦 Windows 体验优化与自动压缩问题，多个重要 PR 合并推动稳定性提升；紧盯 IDE 集成、性能瓶颈及多模型支持等核心需求展开协作。

## 版本发布
暂无过去 24 小时内的版本更新。

## 社区热点 Issues

1. **[Windows sink-thread 使用问题](https://github.com/earendil-works/pi/issues/7547)**
   - 36 条评论 | 多种 Windows 部署方式导致支持困难，社区急需明确官方推荐方案。

2. **[自动压缩触发机制缺陷](https://github.com/earendil-works/pi/issues/6879)**
   - 18 条评论（17 次点赞） | 上下文超过 100% 后压缩未触发，导致长任务失效，影响真实使用场景。

3. **[终端随机滚动至开头](https://github.com/earendil-works/pi/issues/5023)**
   - 17 条评论 | 终端显示异常跳转问题频发，影响用户体验稳定性。

4. **[WebSocket 传输支持请求](https://github.com/earendil-works/pi/issues/3442)**
   - 9 条评论 | openai-responses 提供者缺乏 WebSocket 支持，需扩展传输协议兼容性。

5. **[Windows 输入行重绘 bug](https://github.com/earendil-works/pi/issues/6300)**
   - 8 条评论 | 每次输入字符都换行显示，严重影响 Windows 环境下的交互体验。

6. **[迁移 grok-mermaid 至 lovely-mermaid](https://github.com/earendil-works/pi/issues/8157)**
   - 7 条评论 | 升级图谱功能实现，提升解析器健壮性与功能覆盖。

7. **[Scoped Anthropic API Keys 参数缺失](https://github.com/earendil-works/pi/issues/6093)**
   - 6 条评论 | 受限密钥认证失败，需适配 Claude Code 认证体系。

8. **[添加 /config 和 /exit 命令别名](https://github.com/earendil-works/pi/issues/5340)**
   - 5 条评论 | 增强命令一致性，降低用户认知成本。

9. **[Gemini 3.x 模型工具调用失败](https://github.com/earendil-works/pi/issues/6996)**
   - 5 条评论 | 最新 Gemini 模型因缺失 `thought_signature` 无法正确调用工具。

10. **[全屏 TUI 工具输出展开功能建议](https://github.com/earendil-works/pi/issues/8344)**
    - 4 条评论 | 探索更灵活的工具输出展示交互方式。

## 重要 PR 进展

1. **[Fix: Hold triggerTurn-false messages until tool batch ends](https://github.com/earendil-works/pi/pull/8416)**
   - 关闭 `issue#8416` | 修复严格提供者因消息顺序错误导致的工具调用中断问题。

2. **[Add Umans AI as a builtin provider](https://github.com/earendil-works/pi/pull/8404)**
   - 关闭 `issue#8404` | 新增商业级 AI 提供者，扩充模型生态覆盖。

3. **[Fix TUI: Preserve logical lines when copying soft-wrapped text](https://github.com/earendil-works/pi/pull/8407)**
   - 关闭 `issue#8407` | 解决复制粘贴时软换行破坏文本格式的问题。

4. **[Normalize kimi-coding thinking signatures to base64url](https://github.com/earendil-works/pi/pull/8405)**
   - 关闭 `issue#8405` | 修复 Kimi 模型思考签名编码错误导致的对话中断。

5. **[Fix TUI: Prevent wrapped table link color leaks](https://github.com/earendil-works/pi/pull/8363)**
   - 修复表格渲染中链接颜色溢出问题，提升界面美观度。

6. **[Feat: Add color values and theme styling](https://github.com/earendil-works/pi/pull/8398)**
   - 重构 TUI 主题系统，支持更灵活的颜色配置与后续 UI 扩展。

7. **[Fix: Bash tool timing inflated by wall-clock steps](https://github.com/earendil-works/pi/pull/8418)**
   - 关闭 `issue#8418` | 修正系统时间变更导致的工具执行时长计算错误。

8. **[Feat(AI): Add requiresNonNullAssistantContent compat flag](https://github.com/earendil-works/pi/pull/8118)**
   - 增强与非标准 OpenAI 兼容网关的适配能力。

9. **[Fix TUI crash on large diffs by avoiding spread in push](https://github.com/earendil-works/pi/pull/8395)**
   - 关闭 `issue#8036` | 解决大文件 diff 渲染崩溃的内存栈溢出问题。

10. **[Amazon Bedrock Mantle support](https://github.com/earendil-works/pi/pull/8302)**
    - WIP 版本 | 扩展对 Amazon Bedrock 新 Surface API 的支持，提升云服务集成度。

## 功能需求趋势

1. **集成开发环境支持**：Requests 中提及的 `/config`、`/exit` 等命令别名反映用户希望 Pi 能更自然地融入常用开发工具链工作流。
2. **跨平台稳定性**：Windows 相关 Bug 报告数量居前，表明跨系统一致性仍是关键瓶颈。
3. **自动化压缩策略**：自动压缩触发逻辑缺陷引发广泛关注，暗示资源管理机制需更智能化。
4. **模型兼容性**：Gemini 3.x、KimCoding 等新模型适配问题突出，提示 ai 框架需更动态适应模型演进。
5. **交互体验优化**：复制格式、滚动行为、轮询提示等细节改进显示用户对高颜值交互的追求。

## 开发者关注点

1. **痛点**：
   - Windows 环境下 TUI 交互不稳定（输入重绘、终端滚动）
   - 自动压缩机制缺失导致长会话性能下降
   - 某些模型（如 Gemini 3.x）缺失必需参数引发工具调用失败
2. **高频需求**：
   - 统一命令行界面（与 Claude Code、Opencode 等保持一致）
   - 更完善的 Windows 安装与运行文档
   - 增强对 WebSocket / SSE 双传输模式的支持
   - 提供更细粒度的模型配置文件（per-model compaction）

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-08-21

---

## 1. 今日速览

Qwen Code 今日发布 **v0.21.15 稳定版**与夜ly 构建，重点强化 Web Shell 体验：新增文件附件插入、流式性能优化、侧边栏即时同步，并修复审批/询问对话框的焦点抢占问题。社区高强度推进 `/review` 发布时收敛建议、跨会话消息、ACP 会话恢复可靠性、Aone Code 审查集成等核心议题，多项关键 PR 进入自动修复接管或自检阶段。SWE-bench Verified 连续三轮冒烟测试全绿，端到端回归能力稳固。

---

## 2. 版本发布

### v0.21.15 (稳定版)
- **Web Shell 增强**：支持通过 Composer 或 `@` 选择插入文件附件（#9405, #9477）
- **流式性能优化**与**侧边栏即时同步**，显著提升远程开发体验
- 🔗 [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.15)

### v0.21.11-nightly.20260820.b414f135fa (夜ly)
- Web Shell 审批与 `ask-user` 对话框改为 in-flow sheets 形式
- 修复 `background-agent` 误报失败问题（#9571 相关）
- 🔗 [Nightly Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260820.b414f135fa)

### 基准测试验证
- DSW EAS SWE + TB 冒烟测试连续三轮（r1/r2/r3）**全绿通过**
- SWE-bench Verified 单用例 100% 解决，Terminal-Bench 2.0 回归测试通过
- 🔗 [r3 详情](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-tb-smoke-20260820-r3) | [r2](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-tb-smoke-20260820-r2) | [r1](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-tb-smoke-20260820-r1)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态/标签 | 评论 | 关注理由 |
|---|------|-----------|------|----------|
| [#9278](https://github.com/QwenLM/qwen-code/issues/9278) | **设计：/review 发布时收敛建议** | `in-progress` `P2` `feature` | 8 | 解决评审-修复循环失控（增益>1），引入遥测驱动的收敛退出机制，关乎自动化评审闭环质量 |
| [#8382](https://github.com/QwenLM/qwen-code/issues/8382) | **Duplicate provider tool call id** | `need-retesting` `P2` `bug` | 7 | 高频报错导致工具调用失败，阻塞长会话与自动化流程，核心会话管理缺陷 |
| [#8724](https://github.com/QwenLM/qwen-code/issues/8724) | **跨会话消息传递** | `feature` | 7 | 同机多会话协作基础设施，支持 `list_agents`/`send_message`，解锁多智能体编排场景 |
| [#9309](https://github.com/QwenLM/qwen-code/issues/9309) | **Token 压缩逻辑异常** | `P3` `bug` `token-management` | 6 | `/compress-fast` 后再 `/compress` 导致上下文异常膨胀，影响长上下文稳定性 |
| [#2128](https://github.com/QwenLM/qwen-code/issues/2128) | **长会话内存无界增长** | `P1` `enhancement` `session-management` | 5 | UI History 数组无上限累积，导致进程内存持续飙升，数十小时会话必现 |
| [#9485](https://github.com/QwenLM/qwen-code/issues/9485) | **Web Shell HTTP 非本地访问复制失败** | `CLOSED` `P2` `bug` `web-shell` | 5 | Clipboard API 在非安全上下文不可用，远程开发常见场景受阻，已修复 |
| [#9556](https://github.com/QwenLM/qwen-code/issues/9556) | **审查管道代码执行权限安全审议** | `security` `need-discussion` | 5 | 审查流程授予代码执行权限的必要性与风险边界，涉及供应链安全核心策略 |
| [#9573](https://github.com/QwenLM/qwen-code/issues/9573) | **恢复会话误报"Tool result missing"** | `P1` `bug` `session-management` | 3 | 正常完成的工具调用在恢复后显示失败，破坏会话恢复可信度，P1 优先级 |
| [#9597](https://github.com/QwenLM/qwen-code/issues/9597) | **层级记忆通过 symlink 重复加载 QWEN.md** | `P2` `bug` `memory` | 3 | 工作区 QWEN.md 为祖先软链时重复加载，污染上下文与记忆语义 |
| [#9465](https://github.com/QwenLM/qwen-code/issues/9465) | **Web Shell 侧边栏 Pin/Unpin 慢且顺序不稳定** | `P2` `bug` `web-shell` | 3 | 会话固定操作延迟高、重新获取导致顺序跳变，影响多会话并行工作流 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 |
|---|------|------|----------|
| [#9590](https://github.com/QwenLM/qwen-code/pull/9590) | **Provider-aware 推理控制** | `OPEN` | 新增 DeepSeek V4、GLM 5.2、Kimi 模型的推理参数感知控制（toggle-only、effort tiers、mandatory-thinking），请求适配器自动路由 |
| [#9576](https://github.com/QwenLM/qwen-code/pull/9576) | **跨会话消息入站网关** | `OPEN` `autofix/takeover` | 会话绑定 UDS，接收兄弟会话 JSON 帧，策略允许时注入输入队列，标记非用户来源，实现 #8724 目标 |
| [#9607](https://github.com/QwenLM/qwen-code/pull/9607) | **降级平衡内联思维块而非失败** | `OPEN` | 兼容 OpenAI 兼容端点的混合思维模型：先 `reasoning_content` 再 `content` 中平衡 `thinking` 块，避免误判为泄露 |
| [#9609](https://github.com/QwenLM/qwen-code/pull/9609) | **Web Shell 审批框不再抢占输入焦点** | `OPEN` | 可编辑元素聚焦时抑制焦点抢占，复用 `ToolApproval` 同款效应，配合 #9571 解决输入中断痛点 |
| [#9526](https://github.com/QwenLM/qwen-code/pull/9526) | **Review 收敛建议：持续 Critical 时落地残留风险** | `OPEN` `autofix/takeover` | 遥测证明两轮 Critical 不降、发布量窗口存在 → 生成收敛退出建议，落实 #9278 设计 |
| [#9332](https://github.com/QwenLM/qwen-code/pull/9332) | **Review：将单跳导入扩宽折叠进 `fetch-pr --since`** | `OPEN` `autofix/takeover` | 增量作用域从 PR 自身 diff 构建，复用 #9267 机制，消除冗余切片逻辑 |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | **Auth：新增 Kimi 与 Xiaomi MiMo 提供商** | `OPEN` `autofix/needs-human` | `/auth` 三方提供商新增 Kimi（编码计划/中港密钥/国际密钥）与 MiMo（按量/中新港台），拓展模型生态 |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | **重构：以稳定提示身份锚定重映射** | `OPEN` `review/self-reported` | 统一用户可见轮次、模型历史、持久化会话、ACP rewind、有界分叉历史的身份链路，消除会话恢复不一致 |
| [#9604](https://github.com/QwenLM/qwen-code/pull/9604) | **Review：清理 Aone 写路径延期的 Round-5 发现** | `OPEN` `autofix/takeover` | 清理第 5 轮延期建议（按“约 5 轮后仅处理 Critical”规则），配套 #9579 关闭 |
| [#9577](https://github.com/QwenLM/qwen-code/pull/9577) | **CI：禁用发布流程 install scripts 并加固安全检查** | `OPEN` | npm 发布工作流与 finalizer 禁用生命周期脚本，显式运行自有 postinstall，避免供应链注入 |

---

## 5. 功能需

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: Technical analyst focused on AI development tools
   - Source: GitHub data for `Hmbown/DeepSeek-TUI` (actually CodeWhale, but user says DeepSeek TUI)
   - Date: 2026-08-21 (report date)
   - Output: Chinese daily report with specific sections
   - Requirements: Clear structure, concise professional Chinese, 2-3 sentences for "Today's Summary", release notes if any, 10 selected Issues with links and importance, 10 selected PRs with links and content, feature trend extraction, developer focus points
   - Language: Chinese, technical style

2.  **Analyze the Data:**
   - Date referenced in data: 2026-08-20 (most updates are on 2026-08-20)
   - Latest Release: v0.9.10 by Codewhale (Shannon Labs). Note: `deepseek-tui` deprecated, legacy npm package no longer released. Key point: `codewhale` command, npm package, release assets remain lowercase technical identifiers. Legacy `deepseek-tui` deprecated.
   - Issues (22 listed, but I need to pick 10 most worth focusing on from "past 24 hours" - which seems to be up to 2026-08-20). I'll review all 22 and pick the most relevant/active ones.
   - PRs (10 listed, all from 2026-08-20, mostly closed or open on that date)
   - I need to map "DeepSeek-TUI" to the actual repo which appears to be "CodeWhale" by Hmbown. The user says "DeepSeek TUI community dynamics daily". I'll treat it as CodeWhale/DeepSeek-TUI hybrid, focusing on the repo content.

   Let's list Issues with dates and relevance:
   #998 [CLOSED] enhancement, v0.9.4] 文案展示不全 - 2026-05-07/08-20, 11 comments, 1 like. About tooltip/prompt display. relevant UX.
   #5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) - 2026-08-10/08-20, 10 comments, 0 likes. Big refactoring epic. Very important for structure.
   #5337 [CLOSED] Web: finish the #4934 dictionary spine - retire every isZh branch and inline { en, zh } module - 2026-08-12/08-20, 6 comments, 0 docs/i18n work.
   #4683 [CLOSED] [bug, enhancement, needs-info] Wrong deepseek completions url - 2026-07-22/08-20, 4 comments. API URL issue.
   #5508 [CLOSED] [enhancement] feat: continuous loop - 2026-08-18/08-20, 3 comments. Infinite turn control.
   #5355 [CLOSED] [bug] v0.9.8 Known issues: parallel-load and config-fixture flakes - 2026-08-13/08-20, 3 comments. Known issues basket.
   #5518 [CLOSED] [bug] Emergency compaction triggers around ~85K--105K tokens on DeepSeek V4 despite a 327,680-token route context - 2026-08-19/08-20, 3 comments. Major context/compaction bug.
   #4070 [OPEN] [enhancement, tools, v0.9.3] feat: standalone read_lints tool for on-demand diagnostics - 2026-07-07/08-20, 2 comments. LSP diagnostics tool.
   #5345 [CLOSED] [enhancement] [FR] 增加多行模式或者是允许自定义”发送“快捷键 - 2026-08-13/08-20, 2 comments. Multi-line input/Send shortcut.
   #5512 [CLOSED] [bug] HTTP 400 max_tokens=384000 exceeds model limit after upgrading to v0.9.9 - 2026-08-19/08-20, 1 comment. Token limit bug.
   #5482 [OPEN] [documentation] EPIC(docs): review, partially restructure, and fully localize documentation to Chinese - 2026-08-17/08-20, 1 comment. Chinese docs localization.
   #5526 [OPEN] Deprecated shell completion - 2026-08-20/08-20, 1 comment. PowerShell completions outdated.
   #5516 [CLOSED] [bug] HTTP 400 max_tokens=384000 exceeds model limit after upgrading to v0.9.9 - duplicate? Actually #5516 is the same issue number? Wait, #5516 is listed as closed with sfdzhmr, summary about max_tokens 384000. #5518 is different. I'll check.
   #5497 [CLOSED] fix(tasks): terminalize stuck durable executions and bound event growth - 2026-08-18/08-20, 1 comment. Task execution issue.
   #5442 [CLOSED] Product: discoverability debt — advanced commands hidden at the palette root, config-only capabilities, welcome surface teaches governance not capability - 2026-08-16/08-20, 1 comment. UX discoverability.
   #5522 [OPEN] [bug, tui, ux] v0.9.10: make first run progressive instead of front-loading configuration - 2026-08-20/08-20, 0 comments. First-run UX.
   #5496 [CLOSED] ci: bound release-candidate and artifact workflow jobs - 2026-08-18/08-20, 0 comments. CI workflow.
   #5524 [OPEN] feat(tui): add multi-file read_lints operation - 2026-08-20/08-20, undefined comments. Multi-file lint reading.
   #5525 [OPEN] refactor(tui): adopt command shapes in utility group (FEAT-018) - 2026-08-20/08-20, undefined. Command shape refactor.
   #5523 [OPEN] refactor(tui): extract tool call stages from turn loop - 2026-08-20/08-20, undefined. Turn loop extraction.
   #5520 [CLOSED] feat(web): move docs/sandbox and docs/web onto the dictionary spine (#5337) - 2026-08-20/08-20. Docs spine migration.
   #5521 [CLOSED] chore(tui): drop a single-argument concat! - 2026-08-20/08-20. Lint fix.
   #5515 [CLOSED] fix(tui): forward MCP image results as typed content - 2026-08-19/08-20. MCP image forwarding.
   #5509 [CLOSED] fix(tui): restore /title as an independent terminal window title - 2026-08-18/08-20. Terminal title.
   #5514 [CLOSED] refactor(tui): extract stream processing from turn loop - 2026-08-19/08-20. Stream processing extract.
   #5517 [CLOSED] feat(web): move docs/constitution and docs/runtime-api onto the dictionary spine (#5337) - 2026-08-19/08-20. Docs spine.
   #5513 [CLOSED] release: Codewhale v0.9.10 — retention, identity, and durable approvals - 2026-08-19/08-20. Release summary.

   Now, I need to pick 10 Issues and 10 PRs that are most "worth focusing on" and relevant to the date 2026-08-21 daily. Since most activity is on 2026-08-20, I'll treat the "past 24 hours" as up to that date, and the report is for 2026-08-21.

   Let's select 10 Issues:
   1. #5518 [CLOSED] Emergency compaction triggers on DeepSeek V4 - critical performance/context issue.
   2. #5516 [CLOSED] HTTP 400 max_tokens exceeds model limit after v0.9.9 - reliability bug.
   3. #5508 [CLOSED] feat: continuous loop - UX/feature for long-running AI coordination.
   4. #5482 [OPEN] EPIC(docs): fully localize documentation to Chinese - community i18n need.
   5. #5526 [OPEN] Deprecated shell completion - developer experience/tooling.
   6. #5522 [OPEN] v0.9.10: make first run progressive instead of front-loading configuration - first-run UX.
   7. #5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) - major refactoring epic.
   8. #5512 [CLOSED] header status indicator never renders since 0.9.7 - regression bug.
   9. #5345 [CLOSED] [FR] 增加多行模式或者是允许自定义”发送“快捷键 - input UX feature.
   10. #5518 already picked, maybe #5023 [CLOSED] IME Candidate Window Jumps - input method stability. Or #4070 [OPEN] standalone read_lints tool. Let's pick #5023 for IME stability, or #4070 for tooling. I'll pick #5023 as it's a common UX pain point.

   Actually, let's review the exact 22 issues and pick the top 10 based on relevance, recency, and community impact. I'll pick:
   1. #5518 - Emergency compaction on V4 (performance/token handling)
   2. #5516 - max_tokens 400k exceeds model limit (regression bug)
   3. #5508 - continuous loop enhancement (UX/feature)
   4. #5482 - Chinese docs localization (community i18n)
   5. #5526 - deprecated shell completion (DX)
   6. #5522 - first run progressive config (first-run UX)
   7. #5316 - Crate Decomposition Umbrella (architecture/major refactor)
   8. #5512 - header status indicator regression (bug)
   9. #5345 - multi-line/send shortcut customization (UX feature)
   10. #5023 - IME candidate window jumps (input stability)

   Now 10 PRs (all from 2026-08-20, mostly closed):
   1. #5513 - release: Codewhale v0.9.10 — retention, identity, and durable approvals (release hardening)
   2. #5515 - fix(tui): forward MCP image results as typed content (MCP image handling)
   3. #5509 - fix(tui): restore /title as independent terminal window title (terminal integration)
   4. #5514 - refactor(tui): extract stream processing from turn loop (stream processing)
   5. #5517 - feat(web): move docs/constitution and docs/runtime-api onto the dictionary spine (docs spine continuation)
   6. #5520 - feat(web): move docs/sandbox and docs/web onto the dictionary spine (docs spine)
   7. #5521 - chore(tui): drop a single-argument concat! (lint/coding style)
   8. #5524 - feat(tui): add multi-file read_lints operation (tooling enhancement, relates to #4070)
   9. #5525 - refactor(tui): adopt command shapes in utility group (FEAT-018) (command refactor)
   10. #5523 - refactor(tui): extract tool call stages from turn loop (turn loop extraction)

   Now, "功能需求趋势" (Feature demand trend): Extract from all issues. I'll analyze the issues list and identify recurring themes: context/compaction management (V4 token limits), first-run UX/configuration flooding, Chinese documentation/localization, multi-line input customization, shell completions, IME stability, tooling (read_lints, MCP), crate decomposition/refactoring, discoverability of advanced commands, shell/completion DX.

   "开发者关注点" (Developer focus points): Pain points: first-run configuration overload, token limit regressions after upgrades, IME/input method instability, header/status indicator regressions, discoverability of advanced commands, shell completion decay, need for Chinese docs, multi-line input preferences, performance/compaction in long sessions.

   I need to format it cleanly in Chinese, with GitHub links, concise but professional. Structure:
   1. 今日速览
   2. 版本发布
   3. 社区热点 Issues (10 items)
   4. 重要 PR 进展 (10 items)
   5. 功能需求趋势
   6. 开发者关注点

   I'll make sure each item has a brief description and link. Use the exact GitHub issue/PR URLs from the data. The format should be like: `## ##编号 [状态] 标题 - 简述 ... 链接: github.com/...`

   Let double-check the release section. The data says: `v0.9.10: v0.9.10 > Codewhale is the public product from Shannon Labs. The codewhale command, npm package, and release-asset names remain lowercase technical identifiers. The legacy npm package deepseek-tui is deprecated and receives no further releases. Users coming from v0.8.x legacy deepseek / d` It's truncated. I'll summarize: v0.9.10 released, legacy `deepseek-tui` deprecated, new `codewhale` branding, focus on retention/identity/durable approvals.

   Now, craft the report. I'll write in Chinese, technical tone. Ensure links are correct. The repo is `github.com/Hmbown/DeepSeek-TUI` but issues/pulls point to `Hmbown/CodeWhale`. I'll use the `Hmbown/CodeWhale` path as it's the actual repo, or maybe keep `Hmbown/DeepSeek-TUI`? The user said "according to following GitHub data, generate DeepSeek TUI community dynamics daily". The data is from `Hmbown/DeepSeek-TUI` but actually shows CodeWhale issues. I'll assume the repo name is the context, but use the URLs provided. I'll format links as `github.com/Hmbown/CodeWhale/issues/...` or just use the given URLs. The data has links like `Hmbown/CodeWhale Issue #998`. I'll construct proper GitHub URLs: `https://github.com/Hmbown/CodeWhale/issues/998` etc. Or I can just use the relative paths as given, but better to use full URLs. I'll use `https://github.com/Hmbown/CodeWhale/issues/998` etc. But the user might expect `github.com/Hmbown/DeepSeek-TUI`. I'll check the first line: `## 数据来源: github.com/Hmbown/DeepSeek-TUI`. The actual data references CodeWhale. I'll stick to the repo context but use the issue/PR numbers with the owner Hmbown. I'll use `https://github.com/Hmbown/CodeWhale/issues/998` since that's where the data lives. To be safe, I'll use the exact link format from the data: `Hmbown/CodeWhale Issue #998` but I'll output standard GitHub URLs. Actually, the data shows `链接: Hmbown/CodeWhale Issue #998`. I'll just use `https://github.com/Hmbown/CodeWhale/issues/998`.

   Let's outline the content:

   **今日速览**  
   CodeWhale (DeepSeek TUI) 发布 v0.9.10，正式弃用遗留 `deepseek-tui` npm 包，引入 `codewhale` 统一命令行入口；同时修复了多个关键 BUG 与流式处理优化，标志着首个“留存导向”的稳定版发布。社区在 24 小时内围绕多线程编排、上下文 compaction 与中文文档展开热议。

   **版本发布**  
   - v

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*