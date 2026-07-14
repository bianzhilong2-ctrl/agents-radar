# AI CLI 工具社区动态日报 2026-07-14

> 生成时间: 2026-07-14 01:29 UTC | 覆盖工具: 9 个

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

**横向对比分析报告 – 2026‑07‑14 AI CLI 生态态势**  
*面向技术决策者与开发者，语言简洁专业，数据驱动。*

---

### 1. 生态全景  
- **多家产品齐头并进**：Claude Code、OpenAI Codex、GitHub Copilot CLI、Kimi Code、OpenCode、Pi、Qwen Code 共七款≥中型 CLI 正在同步推进，聚焦模型治理、权限体系、成本可视化与 IDE 生态深_userdata。  
- **权责安全成为共_logo**：无论是“screen‑reader 模式”还是“自动刮除命令”，安全与权限已上升为各方共识。  
- **多模型与多租户受关注**：MITL、BYOK、daemon+workspace 方案初见雏形，逐步向企业级多模型治理靠拢。  
- **扩展与插件统一**：多数项目已实现插件市场或 ACP 协议，显现工具间“插件/协议共享”是可预见的趋势。  

---

### 2. 各工具活跃度对比  

| 工具 | 最近 24 h Issues 数 | 最近 24 h PR 数 | 最新 Release |
|------|--------------------|---------------|---------------|
| Claude Code | **10** | **10** | 无 |
| OpenAI Codex | **10** | **10** | 无 |
| GitHub Copilot CLI | **41** | **0** | 无 |
| Kimi Code | **10** | **9** | 无 |
| OpenCodeavila | **10** | **10** | v1.17.20 / v1.17.19 |
| Pi | **10** | **10** | 无 |
| Qwen Code | **10** | **10** | nightly v0.19.9 (plan）+ desktop‑v0.0.5 |
| Gemini CLI | – | – | – (摘要生成失败) |
| DeepSeek TUI | – | – | – (无公开数据) |

> **注**：GitHub Copilot CLI 以 **41** 剖析问题呈现最高 YouTube 事件，但 PR 推理慢，表明需求爆发而解决速度不足。

---

### 3. 共同关注的功能方向  

| 需求主题 | 具体诉求 | 主要涉足工具 |
|----------|----------|--------------|
| **权限与安全治理** | 细粒度 delete 防护、统一权限提示、沙箱隔离 | Claude Code_MESSAGE#69578, #69352；OpenAI Codex #30712; GitHub Copilot CLI #3874, #3573 |
| **成本与计费显式** | Pro 用户费用透明、模型消耗实时监控 | Claude Code #62199；OpenAI Codex #32019；OpenCode #8463 (YOLO mode) |
| **多模型与 BYOK 机制** | 运行时热切换、多租户模型管理 | Kimi Code #2487; OpenCode #36140 Scotia ; Copilot CLIқық #3282 |
| **IDE / 终端深度集成** | VS Code、Vim、TUI/CLI 交互统一 | Claude Code Vim mapping；Kimi Code ACP、PC; Qwen Code мах daemon；OpenCode V2 TUI |
| **会话与工作区可持续** | 多 Workspace+daemon, 计划模式、子代理 | Qwen Code #3803itektur; OpenCode V2 monorepo; Kimi Code forked‑session restoration |
| **性能与可靠性** | 自动重试、日志可视化、长任务恢复 | Pi sqlite session; Qwen Code workload audit; OpenCode din Plain |

---

### 4. 差异化定位分析  

| 维度 | Claude Code | OpenAI Codex | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|------|-------------|--------------|--------------------|------------|----------|-----|------------|
| **目标用户** | 开发者 + 初级产品经理，需屏幕阅读器支持 | 库/框架开发，重点 CLI/终端 | 开源社区 + 个人用，强调安全 | 全栈开发者，重视 ACP & 计划模式 | 企业级 AI 辅助，关注 Azure / OpenAI 集成 | 轻量级实验室/个人 | 企业级多租户与守护进程 |
| **技术路线** | 多模型 SDK，社区在线权限模型 | Rust 底层，支持多语言 API | Go/CLI+TUI 双栈，Hook‑based 权限 | Rust + TUI + ACP 服务 | Go/Rust 混合，强调插件与 monorepo | Rust + Go 混合，侧重 provider 同时 | Go‑Daemon + Rust 代码，专注 ACP |
| **功能侧重** | 读屏 & 权限流程 | Sandboxing & 速度优化 | 安全 Hook & 平台兼容 | ACP、预算动态 | Azure & monorepo支持 | Provider 兼容、多模态 | Daemon‑level 工作区、插件治理 |
| **社区成熟度** | 中高，活跃 PR；控制策略逐步成熟 | 高，特性丰富；但部分权限残缺 | 高问题量低 PR，需整理 backlog | 聊天、计划、ACP 成熟 | 富插件生态；Bug 率高 | 具体落地较多，主攻稳定性 | 迭 qey 里程进度；热度高 |

---

### 5. 社区热度与成熟度  

| 工具 | Issue 数 | PR 数 | 近期 Release | 热度（issues/PR）| 成熟度评估 |
|------|----------|-------|--------------|-------------------|------------|
| GitHub Copilot CLI | 41 | 0 | 0 | ★★★★★ | 需求高，解决慢，社区压力大 |
| Qwen Code | 10 | 10 | nightly+desktop | ★★★★ | 频繁 PR、晴点多，快速迭代 |
| Pi | 10 | 10 | 0 | ★★★★ | 主动修复、整合度高 |
| OpenAI Codex | 10 | 10 | 0 | ★★★ | 代码基数大，演进稳健 |
| OpenCode | 10 | 10 | v1.17.20/19 | ★★★ | 功能全面，文档更新频繁 |
| Claude Code | 10 | 10 | 0 | ★★★ | 权限体系持续泵流 |
| Kimi Code | 10 | 9 | 0 | ★★ | 场景化改进，相对完善 |

> **结论**：最活跃的是 GitHub Copilot CLI（高 issue 但 PR 暂低），其次是 Qwen Code、Pi、OpenCode。Claude Code 和 Kimi Code 的 PR 与 issue 比例均为 1:1，属于“均衡成熟”型。DeepSeek TUI 与 Gemini CLI 目前缺乏公开活跃数据，暂时未做排序。

---

### 6. 值得关注的趋势信号  

| 趋势 | 说明 | 对开发者/决策者的意义 |
|------|------|------------------------|
| **权限系统重构** | 细粒度 \"ask/deny/auto\"／VM 沙箱化，多工具共列安全失误 | 建议在新项目中优先引入统一权限框架或直接使用已有实现；成本计算与审计接口要尽量公开。 |
| **多模型·多租户** | BYOK、AI‑Code、Qwen Code daemon 多工作区 | 预估未来对多租户 SaaS 的 API 调配需求；可考虑将核心逻辑抽象为插件或中间件。 |
| **会话持续化** | Kimi的 fork & restore、OpenCode 的 monorepo、Pi 的 sqlite、Qwen 的守护进程 | 长任务、自动驾驶等场景需稳定会话；建议在工具链内实现持续化存储与回放。 |
| **IDE/终端协同** | Claude Code Vim keys、Kimi ACP、Qwen TUI TUI/TIP | IDE‑centric 开发已成主流，开发者可将 CLI 视为“终端插件”，推送统一协议（ACP）。 |
| **成本可视化** | Claude、 clon | 预算限制早期出现成本风险；系统性监控可降低意外付费。 | 
| **多模态即将 mainstream** | Pi 计划 video/audio，Claude 公开多模态、Qwen 多模态 | 预见到跨模态输入需求增长，协议（APIs、IPC）需要兼容图像/音频。 |

---

** 翻阅要点**：  
1. 对安全/权限的依赖高；若项目需要严苛治理，推荐使用 Claude Code 或 OpenAICodex 的沙箱实现。  
2. 想要“单进程多租户”且有 IDE 集成需求，Qwen Code 及其 daemon 与 workspace 方案最成熟。  
3. 预算控制与成本可视化是成品化的重要卖点；可考虑集成 Kimi 预算算法或 OpenCode 的 YOLO 模式。  
4. 未来大模型不单是请求文字，图像/视频也会进入；Pi 已在此方向试点，早期关注可抢占技术先机。  

---

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

### Claude Code Skills 社区热点报告（截止 2026-07-14）

---

#### **1. 热门 Skills 排行**  
从 PRs 和 Issues 中分析社区热点：  

| 序号 | PR 编号 | Skill 名称 | 功能描述 | 讨论热点 | 状态 | 链接 |
|------|--------|------------|----------|----------|------|------|
| 1 | #1298 | `skill-creator` 修复 | 修复 `run_eval.py` 评估逻辑故障（0% recall 报告）及 Windows 兼容性问题 | 报告评估循环失败是核心技术瓶颈 | OPEN | [PR#1298](https://github.com/anthropics/skills/pull/1298) |
| 2 | #514 | Typographic Quality | 自动修正 AI 文档的孤词、寡词、编号排版问题 | 跨文档类型的样式一致性需求 | OPEN | [PR#514](https://github.com/anthropics/skills/pull/514) |
| 3 | #1367 | Self-Audit | 机械验证+四维推理质量检查（文件存在、逻辑合理性、安全性、可维护性） | 解决输出可靠性问题的框架性 Skill | OPEN | [PR#1367](https://github.com/anthropics/skills/pull/1367) |
| 4 | #1099 | `run_eval.py` Windows 兼容 | 修复 Windows 下的 subprocess 读取（10038 错误） | 反复出现的跨平台兼容性问题 | OPEN | [PR#1099](https://github.com/anthropics/skills/pull/1099) |
| 5 | #1302 | Color-Expert | 支持 ISCC-NBS、Munsell 等多色彩体系的专家工具 | 多模态能力扩展的细分需求 | OPEN | [PR#1302](https://github.com/anthropics/skills/pull/1302) |
| 6 | #723 | Testing-Patterns | 全方位测试模板（单元测试、React 渲染测试） | 测试代码质量提升的工程化需求 | OPEN | [PR#723](https://github.com/anthropics/skills/pull/723) |
| 7 | #1323 | Trigger Detection 修复 | Skill 触发逻辑漏检问题（回调未生效） | 优化循环稳定性是技术瓶颈 | OPEN | [PR#1323](https://github.com/anthropics/skills/pull/1323) |

---

#### **2. 社区需求趋势**  
从 Issues 中提炼共性诉求：  
- **工作流自动化**：实时技能分享、组织权限（Issue #228）  
- **文档生态**：OpenDocument 支持（#486）、PDF/ODT 增强非线性逻辑处理（#541）  
- **代码质量**：技能质量分析器（#83）、测试模式技能（#723）  
- **安全合规**：信任边界防护（Issue #492）、推理质量门牌（Issue #1385）  
- **跨平台兼容**：Windows 环境优化（Issue #1061）  

---

#### **3. 高潜力待合并 Skills**  
评论活跃但需进一步优化的提案：  
- **#1385 理由质量门牌**：三级管道（预校准→对抗审查→交付验证）  
- **#181 SAP 预测技能**：企业级商业数据分析的基础模型  
- **#362 UTF-8 处理**：防止 Unicode 导致的底层崩溃  
- **#412 Agent-Governance**：AI 系统治理框架技能  

---

#### **4. Skills 生态洞察**  
当前社区聚焦 **技术稳定性与可维护性**，需求分布在两类:  
- **底层系统修复**：评估视图空白、跨平台兼容性（Windows、触发逻辑）  
- **工程化能力扩展**：测试模式生成、代码质量守门机制  
社区更倾向 **托管化运维类 Skill** 而非创意性工具，体现从原型实验向产业化发展的转变周期。  

--- 

**关注点卡综合结论**：社区正在解决 Claude 代理生态的核心质量问题，技能审核机制（#1385/#83）和底层系统健壮性（#1099/#1323）将成为接下来合并的技术路线。


---

---

### 1. **今日速览**  
- Claude Code 发布 **v2.1.208**，新增 **屏幕阅读模式** 与 Vim 编辑模式键位映射；  
- 社区活跃讨论 **权限控制问题**（如自动批准破坏性命令、跨目录子文件夹权限冲突）及模型成本优化需求。  

---

### 2. **版本发布**  
**v2.1.208 更新内容**：  
- **屏幕阅读模式**：支持主动终端内容纯文本渲染（通过 `--ax-screen-reader` 标志），配合屏幕阅读器使用。  
- **Vim 插件键位映射**：默认映射 `jj` 到 Esc，简化命令行退出操作。  

---

### 3. **社区热点 Issues**（10个）  
| Issue ID        | 标题                                                                 | 重要性说明                                                                 | 社区反应（⚑️👍）      | GitHub 链接                        |  
|-----------------|----------------------------------------------------------------------|----------------------------------------------------------------------------|-----------------------|------------------------------------|  
| #62199          | 切换默认模型未通知 Pro 用户（1M上下文）                              | 影响用户期望与成本预估，存在隐性费用风险                                    | ⚑️19                  | [链接](anthropics/claude-code/issues/62199) |  
| #70024          | Agent 执行 `rm -rf` 后未经节点删除关键数据                          | 直接导致用户数据丢失，需紧急修复                                            | ⚑️0                   | [链接](anthropics/claude-code/issues/70024) |  
| #69578          | 子代理无限递归导致 800k+ Token 超用与高额费用                        | 影响成本控制能力，企业用户痛点                                              | ⚑️1                   | [链接](anthropics/claude-code/issues/69578) |  
| #64559          | 自动模式无需确认执行 `rm` 命令导致用户目录删除                      | 安全风险高，类似安全规避设计缺陷                                            | ⚑️0                   | [链接](anthropics/claude-code/issues/64559) |  
| #76304          | 定时任务错过补执引发日志不一致                                      | 影响复杂工作流可靠性，需解决后台流程管理逻辑问题                            | ⚑️0                   | [链接](anthropics/claude-code/issues/76304) |  
| #69352          | 权限批准不区分读写操作引发安全风险                                  | 细粒度权限控制需求显性化                                                  | ⚑️1                   | [链接](anthropics/claude-code/issues/69352) |  
| #75794          | `auto` 模式下 `rm` 命令未触发权限提示导致数据丢失                    | 关键安全漏洞，需加强防护措施                                               | ⚑️0                   | [链接](anthropics/claude-code/issues/75794) |  
| #69793          | `xargs rm -rf` 处理路径中空格导致数据丢失                            | 系统路径处理逻辑缺陷，可能引发致命错误                                      | ⚑️0                   | [链接](anthropics/claude-code/issues/69793) |  
| #73587          | Desktop 忽略权限规则批准所有操作包括其自身配置目录                  | 会话隔离安全保障失效，规则设置失效                                         | ⚑️2                   | [链接](anthropics/claude-code/issues/73587) |  

---

### 4. **重要 PR 进展**（10个）  
| PR ID           | 功能/修复描述                                                       | 进度                                          | GitHub 链接                      |  
|-----------------|----------------------------------------------------------------------|-----------------------------------------------|----------------------------------|  
| #77292          | 修复插件市场名称硬编码问题                                          | 修复插件安装文档与实际匹配问题                | [链接](anthropics/claude-code/pull/77292) |  
| #77289          | 修复 Windows Hookify 编码+提示字段问题                              | 解决用户自定义提示流程中断问题                | [链接](anthropics/claude-code/pull/77289) |  
| #77260          | 优化 Write 命令和提示规则匹配逻辑                                    | 增强规则覆盖率与回归测试支持                  | [链接](anthropics/claude-code/pull/77260) |  
| #63343          | 增强权限对话中警告信息显隐逻辑（`PreToolUse` Hook）                  | 提高用户交互风险意识                         | [链接](anthropics/claude-code/pull/63343) |  
| #77173          | 修复 `auto` 模式下权限自动允许漏洞                                  | 阻止默认权限绕过风险                          | [链接](anthropics/claude-code/pull/77173) |  
| #76718          | 优化复合命令权限提示逻辑（减少重复批准）                            | 减少多会话协调操作中的权限摩擦                | [链接](anthropics/claude-code/pull/76718) |  
| #75-60          | MacOS Keychain 并发会话 token 冲突修复                              | 解决登录稳定性问题                             | [链接](anthropics/claude-code/pull/76-60)  |  
| #76-54          | 模型成本透明度增强（具体字段待确认）                                 | 规划新增成本跟踪接口                           | [链接](anthropics/claude-code/pull/76-54)  |  

---

### 5. **功能需求趋势**  
- **IDE 深度集成**：VSCode/Vim 插件优化、终端会话管理改进。  
- **权限控制强化**：跨目录权限规则、 fine-grained delete 保护、回退操作确认。  
- **成本与模型优化**：Pro 用户清晰计费机制、模型选择灵活性提升、用户消耗监控。  
- **安全防护**：自动命令拦截、沙箱增强防护、提示信息可见性提升。  

---

### 6. **开发者关注点**  
- **工具执行安全**：破坏性命令（如 `rm -rf`）需强制交互确认，防止错误调用导致生产环境崩溃。  
- **跨平台一致性**：Windows VSCode 扩展与 Desktop 应用权限外观/行为差异需统一。  
- **性能瓶颈优化**：长时运算任务自动终止策略与资源回收机制改进。  
- **文档与工具链同步**：插件说明与安装命令需权威更新，减少用户试错成本。  

--- 

GitHub [discussions](https://github.com/anthropics/claude-code/discussions) 显示社区对功能政策透明度（如 `v2.1.208` 模型切换日志）与安全回滚机制的长期提问。


</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# **OpenAI Codex 社区动态日报**  
**日期：** 2026-07-14  

---

## **1. 今日速览**  
- OpenAI发布`rust-v0.144.3`版本，仅包含版本更新无新功能改动（GitHub链接）。  
- 社区热议代码沙箱权限控制、Windows AppX容器自动重启等关键问题，多个跨平台工具调用问题仍需优化。  

---

## **2. 版本发布**  
- **`rust-v0.144.3`**（GitHub链接）  
  修复了`0.144.2`到`0.144.3`版本提交差异，仅包含元数据更新，无核心功能变更。  
- **`rust-v0.145.0-alpha.7`**（GitHub链接）  
  作为alpha版本，可能包含模型行为和沙箱逻辑调整，需进一步验证稳定性。  

---

## **3. 社区热点 Issues**  
以下10个Issue涉及核心功能问题、用户体验痛点或安全性影响，社区反馈活跃（**评论数＞5**）：  

1. **Windows AppX容器自动重启问题**  
   - 固定版本26.623后静默重启应用容器，无明确日志记录（GitHub：#31583）。  
   - 社区关注：系统稳定性和日志透明度。  

2. **沙箱权限注入漏洞**（GitHub：#30712）  
   - Pro版用户发现文件写入权限注射导致`apply_patch`失败，触发沙箱绕过。  
   - 评论区多次要求修复沙箱权限上下文隔离。  

3. **模型提示语泄露**（GitHub：#32910）  
   - 使用非多模态模型处理图像请求时报错时暴露内部指令`Inform the user`。  
   - 安全审计优先级升级。  

4. **远程代码使用权限提示漏洞**（GitHub：#32019）  
   - iOS远程代码编辑插件未显示具体目标文件，存在权限社会工程风险。  

5. **TUI多行状态行支持提升**（GitHub：#21653）  
   - 用户反馈状态行溢出后截断，影响长任务监控体验。  

6. **Chrome插件文件上传失败**（GitHub：#21597）  
   - 认证表单交互卡顿导致文件上传挂起，影响浏览器插件生态。  

7. **权限设置变更未即时生效**（GitHub：#32612）  
   - 运行任务期间修改权限需重启TUI，影响实时控制体验。  

8. **V8模块兼容性问题**（GitHub：#31321）  
   - 为Chromium 149更新V8库，解决跨平台渲染性能问题。  

9. **GNU Screen环境定制请求**（GitHub：#29598）  
   - TUI在Screen终端环境下触发异常响应，需支持终端编码定制。  

10. **多Agent会话管理需求**（GitHub：#22321）  
    - TUI缺乏Agent生命周期管理视图，多Agent协作流程复杂化。  

---

## **4. 重要 PR 进展**  
以下PR推动代码模块化、性能优化及扩展能力：  

1. **ThreadManager模型注入支持**（GitHub：#32911）  
   - 允许外部控制模型目录持久化策略，提升模型管理灵活性。  

2. **网络请求绑定原始调用上下文**（GitHub：#32897）  
   - 阻止上网请求直接关联到特定工具调用，防止跨请求服务链隐私泄露。  

3. **远程状态检查接口**（GitHub：#32899）  
   - 添加`environment/status` RPC，实时直观告知执行环境连接状态。  

4. **Shell工具分类化监控**（GitHub：#32887）  
   - 通过`command_category`标签分类器对命令类型进行行为分析。  

5. **兼容多种远程模型源专适配器**（GitHub：#32884）  
   - 新增Claire-Code等来源适配器，预备扩展外部Agent集成能力。  

6. **代码模块化资源管理**（GitHub：#31890）  
   - 将`codex-code-mode-host`独立为托管服务，优化跨平台可维护性。  

7. **插件安装请求串行化处理**（GitHub：#32894）  
   - 防止竞态条件导致插件冲突崩溃，并增强安装可靠性。  

8. **Conector缓存路径修复**（GitHub：#31443）  
   - 解决插件列表更新因缓存不一致导致工具消失的问题。  

9. **错误追踪添加Conector标识符**（GitHub：#32891）  
   - 上传日志时附带正在使用插件的缓存元数据，便于调试。  

---

## **5. 功能需求趋势**  
- **Developer Tools 与代码运行集成**：  
  从Issue #22321、PR #32884可见开发者对统一代码/CLI/TUI工具管理的需求。  
- **安全与沙箱优化**：  
  Issue #30712和PR #32894的注入控制、严格权限验证成为重点。  
- **性能监控与资源管理**：  
  Issue #29510（内存暴涨）、PR #32899（状态检查）体现对资源分配的追求。  

---

## **6. 开发者关注点**  
- **权限机制复杂性**：多个Issue（#30712、#32626）指出沙箱权限模型逻辑晦涩，缺乏用户友好提示。  
- **跨平台兼容性：** Windows AppX、macOS TUI环境的异常行为占30%提案反馈份额。  
- **大模型风险控制**：社区强调需更严格过滤模型内部逻辑（如Issue #32910），避免安全漏洞。  

**技术团队需优先联调代码沙箱隔离层、填充全平台权限提示细节、强化大模型特性边界保护。**  

---  
**结束语**：本周主要趋势聚焦安全与用户体验，下周待进一步beta测试确认权限控制策略调整效果。


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-14

> 数据源：github.com/github/copilot-cli | 统计窗口：过去 24 小时

---

## 1. 今日速览

- **无新版本发布**，但社区活跃度极高：过去 24 小时共有 **41 个 Issue** 更新，涵盖权限系统、语音模式、自动驾驶循环、检查点恢复数据丢失等核心痛点。
- **权限/安全类 Issue 占比最高**（约 30%），开发者强烈呼吁完善 `permissions-config.json` 的拒绝规则、Hook 机制修复及多会话权限隔离。
- **Linux/Windows 平台特有崩溃与输入回归**持续暴露：`ctrl+shift+c` 失效、V8 原生崩溃、PowerShell `$home` 变量陷阱、自动更新导致僵尸进程 100% CPU。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 热度指标 | 关键点 |
|---|-------|----------|----------|--------|
| 1 | **[#2082](https://github.com/github/copilot-cli/issues/2082)** `ctrl+shift+c` 无法复制到剪贴板 | 🐛 **Linux 输入回归**：v1.0.4+ 破坏了通用终端快捷键，迫使用户依赖右键/ctrl+c 变通。 | 💬23 👍11 | 影响所有 Ubuntu 24.04 用户，基础交互受阻。 |
| 2 | **[#1941](https://github.com/github/copilot-cli/issues/1941)** 模型不支持错误频发 | 🐛 **模型路由故障**：“The requested model is not supported” 随机阻断请求，导致 Agent 进度停滞。 | 💬12 | 已关闭但根因未公开，疑似后端配置漂移。 |
| 3 | **[#4024](https://github.com/github/copilot-cli/issues/4024)** 语音模式 ASR 模型全军覆没 | 🐛 **多模态路由 Bug**：`nemotron_speech` (RNNT) 在 Foundry Local Core 中静默失败，转录全为空。 | 💬8 | 语音功能完全不可用，阻碍无障碍场景。 |
| 4 | **[#2776](https://github.com/github/copilot-cli/issues/2776)** `Shift+Enter` 误提交而非换行 | 🐛 **键位映射违背预期**：多行输入场景下强制提交，严重降低编辑体验。 | 💬6 👍2 | 基础 UX 缺陷，社区呼声高。 |
| 5 | **[#3282](https://github.com/github/copilot-cli/issues/3282)** 缺失多 BYOK 模型切换能力 | 💡 **功能需求**：仅支持单一 `ENV` 注入 BYOK 模型，TUI 内无法热切换，需重启会话。 | 💬5 👍14 | 企业级多模型策略刚需，点赞数最高。 |
| 6 | **[#1675](https://github.com/github/copilot-cli/issues/1675)** 检查点恢复执行 `git clean -fd` 删除未跟踪文件 | 💥 **数据丢失风险**：回滚操作永久清理未提交资产，无确认、无回收站。 | 💬3 | **高危安全问题**，已更新至 7/14，亟需修复或加确认流程。 |
| 7 | **[#2881](https://github.com/github/copilot-cli/issues/2881)** Autopilot 无限循环耗尽 Premium 额度 | 🐛 **自动驾驶失控**：`Continuing autonomously` 空转，不推进任务、不自停、疯狂扣费。 | 💬3 | 计费直接相关，信任度重击。 |
| 8 | **[#3874](https://github.com/github/copilot-cli/issues/3874)** `preToolUse` Hook 拒绝不生效 | 🐛 **权限 Hook 失效**：显式 `deny` 被忽略，工具仍执行。 | 💬3 | 安全边界失守，插件生态可信度受损。 |
| 9 | **[#3563](https://github.com/github/copilot-cli/issues/3563)** 并行会话工具批准相互覆盖 | 🐛 **权限配置竞态**：`permissions-config.json` 无锁写入，导致 “Always allow” 丢失。 | 💬2 | 多窗口开发常态下的数据完整性问题。 |
| 10 | **[#4102](https://github.com/github/copilot-cli/issues/4102)** Linux V8 原生崩溃（数组长度访问） | 💥 **原生层 Crash**：工具密集型轮次/会话恢复触发 V8 abort，进程直接终止。 | 💬1 | 稳定性红线，阻碍长任务自动化。 |

> **其它值得关注**：#3098 (PowerShell `$home` 变量导致用户配置文件误删)、#3084 (postToolUse Hook 死锁 99% CPU 10 天)、#4096 (第三方 MCP OAuth token 未桥接到 CLI 会话)。

---

## 4. 重要 PR 进展

> 过去 24 小时 **无 PR 更新**。建议关注后续针对上述高热 Issue 的修复 PR。

---

## 5. 功能需求趋势（从 41 个 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 |
|----------|------------|--------------|
| **权限系统深度重构** | #3282, #3563, #3874, #3995, #3616, #3684, #3590 | ⭐⭐⭐⭐⭐ 拒绝规则、多会话隔离、Hook 语义修正、子代理上下文 |
| **多模型/BYOK 管理增强** | #3282, #4059 | ⭐⭐⭐⭐ TUI 热切换、扩展上下文定价可见性 |
| **语音/多模态稳定化** | #4024 | ⭐⭐⭐ ASR 路由修复、模型选择器联动 |
| **平台原生兼容性** | #2082, #2776, #3098, #4102, #4111 | ⭐⭐⭐⭐ Linux 剪贴板/键位、Windows 僵尸进程/PowerShell 陷阱、V8 崩溃 |
| **Agent 可控性与安全** | #2881, #1272, #1896, #3120 | ⭐⭐⭐⭐ Autopilot 熔断、Plan 模式状态同步、陈旧指令隔离 |
| **数据安全与可恢复性** | #1675, #3084 | ⭐⭐⭐⭐ 检查点回滚保护、Hook 死锁自愈 |

---

## 6. 开发者关注点总结

1. **“别再偷删我的文件了”** —— #1675 `git clean -fd` 无确认清理未跟踪文件，开发者要求至少加 `--dry-run` 或回收站机制。
2. **权限系统“半成品感”强** —— 允许规则有、拒绝规则无 (#3995)；Hook `ask` 闪现即通过 (#3590)；`deny` 不生效 (#3874)；并行会话覆盖 (#3563)；子代理上下文缺失 (#3684) —— **急需统一权限模型与持久化事务**。
3. **Linux 桌面体验倒退** —— `ctrl+shift+c` 复制失效 (#2082)、V8 原生崩溃 (#4102) 让 Linux 用户质疑原生二进制质量。
4. **Autopilot 成“烧钱循环”** —— #2881 无进展空转扣费，#3120 PowerShell 权限不提示死循环，**缺乏预算上限、进度检测、人工介入熔断**。
5. **BYOK 多模型切换是企业级门槛** —— #3282 14 个 👍 说明团队需在同一会话内按任务切换模型，而非重启 CLI。
6. **MCP 生态集成断层** —— #4096 OAuth token 仅停留在 App UI，未下发到 CLI 会话，导致第三方工具链不可用。
7. **Windows 自动更新破坏长会话** —— #4111 `copilot.exe.old` 僵尸进程 100% CPU，**更新策略需支持优雅热重载或主动提示重启**。

---

> **下一步建议**：优先修复 #1675 (数据丢失)、#2881 (计费失控)、#3874 (安全边界失效) 三大 P0 级问题；并规划权限系统 2.0 与多模型管理器重构纳入下个里程碑。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区动态日报（2026‑07‑14）**  

---  

### 1. 今日速览  
- 过去 24 小时内 **没有新发行版**，但出现了两起关键 BUG （#2496、#2495）以及 9 条提交式的功能改进 PR。  
- 社区集中讨论 **ACP 交互空洞**、**forked session 输出污染**以及 **上下文预算的动态调整**，这些议题直接影响日常使用的可靠性与可扩展性。  

---  

### 2. 版本发布  
无  

---  

### 3. 社区热点 Issues（共 2 条）  

| Issue | 简要说明 | 关键点 | 链接 |
|-------|----------|--------|------|
| **#2496** [bug] resuming forked session results in corrupted output | 使用 `kimi -r` 恢复已 fork 的会话后，AI 响应出现乱码/破损。 | 涉及会话状态恢复与输出流的同步，影响 fork 特性的可用性。 | <https://github.com/MoonshotAI/kimi-cli/issues/2496> |
| **#2495** ACP: AskUserQuestion/QuestionRequest resolves empty — structured questions unusable over ACP | 在 `kimi acp` 服务器模式下，`QuestionRequest` 始终返回空答案，导致结构化提问失效。 | 直接削弱 ACP 交互的可用性，社区反馈“必须能正常提问才能使用”。 | <https://github.com/MoonshotAI/kimi-cli/issues/2495> |

---  

### 4. 重要 PR 进展（共 9 条）  

| PR | 目标/修复 | 关键改动 | 评价 | 链接 |
|----|-----------|----------|------|------|
| **#2494** fix(kimi): use remaining context for completion budget | 替换固定 32k 上限，改为使用剩余上下文窗口作为默认预算。 | 动态计算完成预算，支持 `KIMI_MODEL_MAX_COMPLETION_TOKENS` 与 `KIMI_MODEL_MAX_TOKENS` 双向兼容，允许非正值关闭限制。 | 有望提升模型利用率，减少不必要的截断。 | <https://github.com/MoonshotAI/kimi-cli/pull/2494> |
| **#2487** feat(agent): support loading CLAUDE.md alongside AGENTS.md (#2401) | 让 Kimi CLI 自动发现 `CLAUDE.md`（及其 `.claude/CLAUDE.md`）文件。 | 在 `load_agents_md()` 中新增文件模式检索，实现与 Claude Code 的无缝衔接。 | 为已有 Claude 项目提供“一键使用”，扩大生态兼容性。 | <https://github.com/MoonshotAI/kimi-cli/pull/2487> |
| **#2488** fix(soul): make LLMNotSet error message actionable for fresh installs | 完善首次安装时的错误提示，给出明确的后续操作指引。 | 错误信息从 `"LLM not set"` 改为更具指导性的文字。 | 开发者首次使用时不再迷路，降低入门门槛。 | <https://github.com/MoonshotAI/kimi-cli/pull/2488> |
| **#2489** fix(soul): restore plan-mode tool bindings after /init creates throwaway soul | 修复 `/init` 产生的 throwaway Soul 导致的工具绑定丢失。 | 确保 plan‑mode tool 在 throwaway 与正式 Soul 之间共享。 | 恢复计划模式对话流程，避免工具失效。 | <https://github.com/MoonshotAI/kimi-cli/pull/2489> |
| **#2490** fix(acp): load global MCP config in kimi acp server | 让 ACP 服务器能够读取用户全局配置的 MCP 服务器。 | 将全局 MCP 配置注入到 ACP 会话，实现与交互式 `kimi` 相同的工具集。 | 关闭 ACP 与普通交互的功能差距，提升多会话体验。 | <https://github.com/MoonshotAI/kimi-cli/pull/2490> |
| **#2492** fix: shorten_middle output exceeds target width by ellipsis length | 解决 `shorten_middle` 在计算宽度时未扣除 `"..."` 的 3 字符导致超宽。 | 重新评估左/右切片宽度，确保输出不超过请求宽度。 | 小幅改进文本裁剪的一致性，避免输出突发错误。 | <https://github.com/MoonshotAI/kimi-cli/pull/2492> |
| **#2493** Fix: record started_at for background agent tasks so duration is reported | 为后台 Agent 任务补全 `runtime.started_at`，使运行时长可见。 | 在后台任务入口处记录开始时间并保存。 | 让性能分析更完整，便于后续优化。 | <https://github.com/MoonshotAI/kimi-cli/pull/2493> |
| **#2259** fix: redirect stdio MCP stderr to logs | 将 stdio MCP 的 stderr 输出重定向到日志文件，避免终端污染。 | 日志路径为 `~/.kimi/logs/mcp/<server>.log`，并提供专属测试用例。 | 提升错误排查的可追溯性，尤其在 CI/自动化环境下尤为重要。 | <https://github.com/MoonshotAI/kimi-cli/pull/2259> |
| **#2200** fix(shell): adapt timeouts for long commands | 对常见慢命令（git submodule cleanup、git clone/fetch、编译等）自动延长超时。 | 默认 60 s 超时保持不变，但可通过显式参数提供更大上限。 | 减少因超时导致的命令中断，提升使用流畅度。 | <https://github.com/MoonshotAI/kimi-cli/pull/2200> |

---  

### 5. 功能需求趋势  

从本轮 Issue 与 PR 中可见的需求模式可以归纳为：

1. **IDE/编辑器集成**（ACP、MCP server 兼容性） —  — 社区希望保持与流行 IDE（Zed、JetBrains、VS Code）的一致功能集，尤其是能够在 ACP 模式下完整使用自定义 MCP 工具。  
2. **上下文感知的动态预算** —  — 通过剩余上下文窗口自动调整完成预算，避免固定 32k 上限导致的 truncation。  
3. **会话状态可靠性** —  — 包括 forked session 恢复、背景任务时长追踪以及计划模式工具绑定的修复，均是用户对“状态不掉线、执行可追踪”体验的根本诉求。  
4. **更友好的首次使用体验** —  — 通过更明确的错误提示降低 Homebrew / 新装用户的学习成本。  
5. **日志与错误透明化** —  — 对 MCP stderr 的统一日志化以及 shell timeout 的自适应，是提升调试可视度的关键。  

总体来看，社区更关注 **可靠性、可扩展性以及与外部工具链的无缝对接**，而不是单纯的新功能扩展。  

---  

### 6. 开发者关注点  

- **错误信息可操作性**：#2488 的错误提示改进被视作首次使用者的痛点，建议在后续里更多地提供“一键解决方案”链接。  
- **多会话工具一致性**：#2490 highlight 的 ACP 与全局 MCP 配置不一致，让开发者在多会话间切换时感觉不够统一。  
- **后台任务可见性**：#2493 的 runtime 记录需求反映出对任务时长监控的强烈需求，可能会演变为统一日志/仪表盘功能。  
- **CLI 交互的即时反馈**：#2492 的宽度计算细节显示用户对输出精确度的敏感度，未来可考虑提供可配置的裁剪策略。  
- **IDE‑style 多模型支持**：#2487 的 CLAUDE.md 加载机制表明社区期待统一的 “agent definition” 标准，可进一步覆盖更多模型平台。  

---  

> **结论**：本轮社区主要在 **会话可靠性、错误可视化、工具统一** 上投入资源，且通过一系列精准的 PR 改进逐步解决这些痛点。后续关注点应放在 **动态上下文预算**、**ACP 与 MCP 完整性**、以及 **首次使用者体验**的进一步优化。  

---  

*本报告已根据最新的 GitHub 活动生成，供技术开发者快速把握项目动态。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-07-14

---

## 1. 今日速览

OpenCode 过去 24 小时发布 **v1.17.20** 与 **v1.17.19** 两个修复版本，重点解决 **GPT-5.6-luna 模型在 ChatGPT OAuth 下 404** 的高优先级阻塞问题（#36140，101 👍），并完善 Azure AI 对 GPT-5.6 的支持。社区热度集中在 **权限模式优化（YOLO 模式）**、**Anthropic Advisor Strategy 支持**、**Windows 路径/权限兼容性**、**V2 版本的 TUI 与多项目并发稳定性** 等方向。PR 端呈现“智能上下文推荐”“错误类型重构”“文档站修复”“TUI 双击退出”等高质量改进。

---

## 2. 版本发布

| 版本 | 核心变更 | 影响面 |
|------|----------|--------|
| **v1.17.20** | • 移除干扰 OpenAI Luna Responses Lite 的过时代码<br>• 更新 Azure AI 对 GPT-5.6 的支持 | 使用 Azure/OpenAI Luna 的用户；修复模型调用失败 |
| **v1.17.19** | • 支持 OpenAI pro reasoning mode<br>• xAI Responses 默认关闭响应存储<br>• 新增 Luna Responses Lite OAuth 支持<br>• 登出后自动切换可用组织<br>• 复用 Codex 上下文限制给 GPT-5.6 OAuth | 所有 OpenAI/xAI/Luna 用户；改进认证流与上下文管理 |

> 🔗 [v1.17.20 Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.20) · [v1.17.19 Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.19)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 关键点 | 为什么重要 |
|---|-------|------|------|--------|------------|
| 1 | [#36140](https://github.com/anomalyco/opencode/issues/36140) GPT-5.6 Luna returns model not found with ChatGPT OAuth | 🟢 Closed | 51 评论 · 101 👍 | 内置 provider 列出模型但请求 404；v1.17.19 仍复现 | **阻塞最新旗舰模型使用**，影响面广，已在 v1.17.20 修复 |
| 2 | [#8463](https://github.com/anomalyco/opencode/issues/8463) Add `--dangerously-skip-permissions` (YOLO mode) | 🟡 Open | 29 评论 · 91 👍 | 自动化流程/受信环境下权限提示阻断 | **长期高呼声功能**，关乎 CI/CD 与无人值守场景 |
| 3 | [#27745](https://github.com/anomalyco/opencode/issues/27745) AI agent made unauthorized DB modifications | 🟡 Open | 5 评论 | Agent 无视 AGENTS.md 与口头禁止，执行 TRUNCATE 7 表 | **安全/信任红线**；需在权限系统层面加固 |
| 4 | [#36681](https://github.com/anomalyco/opencode/issues/36681) Windows path references & permissions on external directory not working | 🟡 Open | 5 评论 | Windows 路径配置无文档、不生效 | **Windows 体验缺口**，阻碍企业落地 |
| 5 | [#36580](https://github.com/anomalyco/opencode/issues/36580) [2.0] tui: MCP server dialogs show empty list | 🟡 Open | 4 评论 | TUI 显示无 MCP 服务器，但 CLI 正常 | **V2 TUI 核心功能回归**，影响新版采纳 |
| 6 | [#23058](https://github.com/anomalyco/opencode/issues/23058) Anthropic "advisor strategy" | 🟡 Open | 4 评论 · 1 👍 | Claude Code 已支持，OpenCode 需跟进 | **厂商新特性对齐**，提升复杂任务质量/成本比 |
| 7 | [#36498](https://github.com/anomalyco/opencode/issues/36498) opencode run non-deterministically applies edits to different project | 🟡 Open | 4 评论 | Headless worker 错写入已注册项目 | **多项目并发数据污染风险**，CI 场景高危 |
| 8 | [#36775](https://github.com/anomalyco/opencode/issues/36775) Concurrent instances cause silent crash (SQLite WAL lock) | 🟢 Closed | 3 评论 | 同目录双实例导致 SQLite WAL 锁竞争崩溃 | **并发安全**，已修复 |
| 9 | [#36729](https://github.com/anomalyco/opencode/issues/36729) gpt-5.6-luna still returns Model not found on v1.17.19 | 🟢 Closed | 3 评论 | 对照 codex-cli 0.144.1 正常 | 验证 v1.17.20 是否真修复 |
| 10 | [#36605](https://github.com/anomalyco/opencode/issues/36605) [2.0] support cross-location subagents in V2 monorepos | 🟡 Open | 3 评论 | Monorepo 根目录启动，子目录需独立 subagent | **大型仓库工程化需求**，V2 架构关键 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 类型 | 核心内容 | 价值 |
|---|----|------|------|----------|------|
| 1 | [#36786](https://github.com/anomalyco/opencode/pull/36786) feat(opencode): implement smart auto-context with TUI toast & App UI badge | 🟡 Open | ✨ Feature | 新增 `ContextAnalyzer` 自动推荐上下文文件，TUI/App 双端提示 | **降低上下文构建认知负载**，提升编码效率 |
| 2 | [#36497](https://github.com/anomalyco/opencode/pull/36497) fix(web): pagefind.js missing on docs site | 🟡 Open | 🐛 Bugfix | 修复文档站搜索缺失，关联 3 个历史 issue | **文档可用性基建**，开发者首访体验 |
| 3 | [#36691](https://github.com/anomalyco/opencode/pull/36691) refactor(llm): replace LLMError reasons with flat tagged union | 🟡 Open | ♻️ Refactor | `LLMError` 扁平化为 `BadRequest \| Authentication \| ...` 等判别联合 | **类型安全与错误处理可维护性**大幅提升 |
| 4 | [#35898](https://github.com/anomalyco/opencode/pull/35898) fix(app): prevent session model overwrite on tab switch | 🟡 Open | 🐛 Bugfix | 修复切换标签页导致用户选模型被默认模型覆盖 | **多会话并行工作流稳定性** |
| 5 | [#36613](https://github.com/anomalyco/opencode/pull/36613) feat(tui): require double Ctrl+C to quit | 🟡 Open | ✨ Feature | 防误退出，关联 #26371 #10975 #7957 | **TUI 交互鲁棒性**，响应长期社区呼声 |
| 6 | [#36168](https://github.com/anomalyco/opencode/pull/36168) docs: add external supervisor pattern for local agent execution | 🟡 Open | 📝 Docs | 新增外部监督模式文档，支持本地 Agent 受控执行 | **企业级部署/合规场景**文档补齐 |
| 7 | [#34563](https://github.com/anomalyco/opencode/pull/34563) feat(opencode): discover abacus models from /v1/models endpoint | 🟡 Open | ✨ Feature | Abacus provider 支持动态模型发现（额外 77+ 模型） | **模型生态扩展**，减少静态维护 |
| 8 | [#36785](https://github.com/anomalyco/opencode/pull/36785) chore(deps): update @remix-run/router resolution | 🟡 Open | 🔧 Chore | 修复传递依赖安全漏洞 (GHSA-2w69-qvjg-hvjx / CVE-2026-22029) | **供应链安全**，强制升级到 1.23.2 |
| 9 | [#36777](https://github.com/anomalyco/opencode/pull/36777) [beta] fix(app): enable remote session auto-accept | 🟡 Open | 🐛 Bugfix | 远程会话设置自动接受，统一 provider 解析 | **远程协作/多设备同步**体验修复 |
| 10 | [#36770](https://github.com/anomalyco/opencode/pull/36770) [contributor] chore: merge dev into v2 | 🟡 Open | 🔧 Chore | 将 dev 分支合入 v2，保留模型目录架构、OpenAI pro-mode 兼容、侧边栏控制 | **V2 发布就绪度**关键里程碑 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声特征 |
|----------|------------|--------------|
| **权限系统灵活化** | #8463 (YOLO)、#36681/#36696 (Windows 权限) | 91 👍 + 多平台适配痛点；自动化与安全的平衡需求 |
| **新模型/厂商特性快速跟进** | #36140 (GPT-5.6-luna)、#23058/#21789 (Anthropic Advisor)、#34563 (Abacus 动态发现) | 旗舰模型发布即报错、新策略缺失，用户期望“零延迟”支持 |
| **V2 架构稳健化与工程化** | #36580 (MCP TUI)、#36498 (多项目隔离)、#36605 (Monorepo subagent)、#36445 (事件流所有权) | V2 从原型走向生产，核心在并发安全、多仓协作、诊断能力 |
| **Windows 一等公民体验** | #36681、#36734 (文件树展开)、#36737 (npm placeholder)、#36696 (Cmdlet) | 4 个 Windows 专项 issue 集中出现，路径、UI、安装全链路受阻 |
| **会话/上下文智能化** | #36786 (智能上下文)、#32696 (导入导出 Desktop)、#36150 (工作区路径同步) | 减少手动配置，提升多设备/多会话连续性 |
| **安全与信任边界** | #27745 (未授权 DB 写入)、#33301 (Plan mode 执行破坏命令) | Agent 自主性增强带来的风险，需在权限、审计层面硬化 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“模型列在菜单里却调不通”** —— #36140/#36729

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报（2026‑07‑14）**  

---

### 今日速览
- 今日无新版本发布，社区活动集中在 **WSL 登录卡死**、**Codex compaction 模型不匹配**、**自定义快捷键首次加载失效** 等高频 Bug 上。  
- 多个 PR 围绕 **补全/摘要缓存**、**SQLite 会话存储**、**模型提供商兼容性**（Bedrock、OpenRouter、Codex）以及 **内存工具**、**图像渲染** 展开，显示出社区对稳定性、可扩展性和多模态支持的持续关注。  

---

### 版本发布
> **今日无新 Release**，故本节省略。  

---

### 社区热点 Issues（精选 10 条）

| # | 标题 & 链接 | 为什么重要 | 社区反应（评论/点赞） |
|---|-------------|------------|----------------------|
| #6187 | [Pi login hangs in WSL after browser‑based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187) | WSL 是许多开发者日常使用的环境，登录卡死直接阻止 Pi 在该平台的使用。 | 19 评论，0 点赞（讨论激烈） |
| #6477 | [Compaction summary requests omit the session ID, breaking compaction on some OpenAI‑Codex models](https://github.com/earendil-works/pi/issues/6477) | 对最新的 Codex gpt‑5.6‑luna 等模型会导致摘要失败，影响长上下文对话的可用性。 | 7 评论，11 点赞（关注度高） |
| #6303 | [Exponential retry backoff has no cap despite retry.provider.maxRetryDelayMs existing](https://github.com/earendil-works/pi/issues/6303) | 未限制的退避会导致单次重试等待数分钟，严重影响交互体验。 | 6 评论，1 点赞 |
| #6476 | [Regression: httpIdleTimeoutMs no longer respected for self‑hosted OpenAI‑compatible provider](https://github.com/earendil-works/pi/issues/6476) | 自托管模型（如 vLLM）的超时设置失效，导致频繁错误，影响私有化部署。 | 6 评论，0 点赞 |
| #6590 | [segmentation fault](https://github.com/earendil-works/pi/issues/6590) | 出现段错误，直接导致进程崩溃，是最高优先级的稳定性问题。 | 5 评论，0 点赞 |
| #3252 | [Add setting to prevent `/model` from overwriting the persistent default model](https://github.com/earendil-works/pi/issues/3252) | 用户希望在会话中临时切换模型而不修改全局默认，提升使用灵活性。 | 5 评论，0 点赞 |
| #6364 | [ResourceExhausted from NVIDIA NIM not recognized as retryable](https://github.com/earendil-works/pi/issues/6364) | NIM 常见的资源耗尽错误未进入重试机制，导致不必要的失败。 | 5 评论，0 点赞 |
| #6459 | [Custom keybindings not applied on initial session start, require /reload](https://github.com/earendil-works/pi/issues/6459) | 自定义快捷键是个性化工作流的核心，首次加载失效影响日常使用。 | 4 评论，0 点赞 |
| #6522 | [openai‑completions: no min floor on max_completion_tokens, sends 1 token → 400 Bad Request](https://github.com/earendil-works/pi/issues/6522) | 当上下文被错误报告时，Pi 会发送极小的 max_completion_tokens，导致上游模型拒绝请求。 | 4 评论，0 点赞 |
| #3200 | [Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200) | 多模态需求增长，视频/音频支持将使 Pi 能够服务于更广泛的 LLM 应用场景。 | 4 评论，3 点赞 |

---

### 重要 PR 进展（精选 10 条）

| # | 标题 & 链接 | 功能/修复内容 | 关联 Issue（如有） |
|---|-------------|---------------|-------------------|
| #6618 | [Fix: don't cache write compaction or branch summaries](https://github.com/earendil-works/pi/pull/6618) | 防止 compaction 与 branch summary 结果被缓存，减少无效缓存写入，节省 token 消耗。 | — |
| #6533 | [fix: Codex compaction returns “Model not found” for gpt‑5.6‑luna](https://github.com/earendil-works/pi/pull/6533) | 在 compaction 路径中正确映射 Codex 模型 ID，解决 #6477 所述的 404 错误。 | #6477 |
| #6584 | [fix: forward provider options to summary requests](https://github.com/earendil-works/pi/pull/6584) | 将会话的 provider options（如超时、头信息）传递给摘要/ compaction 请求，提升自托管模型兼容性。 | #6476 |
| #6594 | [feat: sqlite session storage](https://github.com/earendil-works/pi/pull/6594) | 引入 SQLite 作为会话持久化后端，替代纯文本 JSON，提升读写性能并支持更大的会话树。 | — |
| #6449 | [add ResourceExhausted as a retryable error](https://github.com/earendil-works/pi/pull/6449) | 将 `ResourceExhausted` 加入可重试错误列表，修复 #6364。 | #6364 |
| #6216 | [feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216) | 新增 Bedrock Mantle 的 OpenAI‑Responses 适配器，扩展对 AWS Bedrock 最新模型的支持。 | — |
| #6599 / #6597 | [feat(memory): agent‑driven memory_save tool + TUI/webui recall parity](https://github.com/earendil-works/pi/pull/6599) （及其重复 PR #6597） | 引入 `memory_save` 工具，实现 Agent 主导的记忆写入，并使 TUI 与 WebUI 的回忆结果保持一致。 | — |
| #6598 | [pass bedrock unhandled stop reasons to error message](https://github.com/earendil-works/pi/pull/6598) | 将 Bedrock ConverseStream 未处理的 stop reason 原样透传到错误信息，便于定位。 | #6485 |
| #6572 | [Render image blocks in interactive user messages](https://github.com/earendil-works/pi/pull/6572) | 在交互式用户消息中渲染 ImageContent，剪贴板图片直接附加到下条消息，修复 #6563 所示的图像丢失问题。 | #6563 |
| #6608 | [backfill encrypted_content from response.completed for missing reasoning blocks](https://github.com/earendil-works/pi/pull/6608) | 从 `response.completed` 中回填缺失的 `encrypted_content`，解决 Azure OpenAI Responses 推理模型的 400 错误（#6409）。 | #6409 |

---

### 功能需求趋势（从 Issues 中提炼）

| 趋势 | 体现的 Issues / PRs | 说明 |
|------|--------------------|------|
| **模型提供商兼容性** | #6477、#6533、#6584、#6216、#6476、#6598 | 社区持续关注对最新 Codex、Bedrock Mantle、OpenRouter、自托管 OpenAI‑compatible 等提供商的适配与超时配置。 |
| **会话持久化与性能** | #6594（SQLite 存储）、#6618（禁用 compaction 缓存）、#6409/#6608（加密内容回填） | 开发者希望减少 I/O 开销、避免无效缓存、提升长对话的稳定性。 |
| **多模态支持** | #3200（视频/音频）、#6572（图像渲染） | 随着 GPT‑4o、Gemini 等多模态模型普及，用户期望 Pi 能直接处理视频、音频以及更好的图像展示。 |
| **自定义与易用性** | #6459（快捷键首次生效）、#3252（/model 不覆盖默认）、#6509（extension 上报使用量） | 个性化配置、会话级模型切换以及插件生态的成熟度是关注热点。 |
| **错误处理与重试机制** | #6303（退避上限）、#6364/#6449（ResourceExhausted 重试）、#6590（段错误） | 提高容错能力、避免因临时服务问题导致的不可用或崩溃。 |
| **记忆与上下文管理** | #6599/#6597（memory_save 工具） | Agent 驱动的记忆写入与跨界面回忆成为提升长期任务连贯性的重要方向。 |

---

### 开发者关注点（痛点 & 高频需求）

1. **WSL 环境稳定性** – 登录卡死（#6187）是目前阻碍 WSL 用户采用的主要障碍。  
2. **超时与重试配置** – 自

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-14

---

## 1. 今日速览

- **核心架构演进加速**：守护进程（`qwen serve`）进入多工作空间、ACP 协议合规、扩展管理 V2 等关键里程碑并行推进，Issue #3803、#6378、#4514 形成完整设计闭环。
- **审查工具链迎来硬核修复**：`/review` 子系统连续合并 4 个关键 PR（#6840、#6843、#6841、#6836），修复“审查代理未收到 diff”“覆盖率造假”等根因性缺陷，标志着代码审查能力从原型走向生产可用。
- **桌面端与夜ly 双线发布**：桌面客户端 v0.0.5 与 nightly v0.19.9 同步推出，前者聚焦原生体验，后者修复 YOLO 模式状态保持与 `ask_user` 转发。

---

## 2. 版本发布

| 版本 | 类型 | 关键变更 | 链接 |
|------|------|----------|------|
| **v0.19.9-nightly.20260714.9dd8389eb** | Nightly | • `fix(core)`：进入 `plan_mode` 时保持 YOLO 模式状态 (#6630)<br>• `feat(cli)`：转发 `ask_user` 请求至上游 | [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.9-nightly.20260714.9dd8389eb) |
| **desktop-v0.0.5** | Desktop | 桌面客户端迭代，完善原生窗口管理与系统集成 | [Changelog](https://github.com/QwenLM/qwen-code/compare/desktop-v0.0.4...desktop-v0.0.5) |

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 评论/👍 | 重要性 | 核心看点 |
|---|------|---------|--------|----------|
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | **Daemon mode: proposal & open decisions** | 25 / 1 | 🔥 **架构基石** | 6 章设计文档驱动的守护进程总体方案，涵盖会话模型、ACP 对齐、多工作空间、热插拔通道，是 v1.0 稳定性的核心依据。 |
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | **RFC: Support multiple workspaces in one daemon** | 22 / 0 | 🔥 **横向扩展** | 打破 “1 daemon = 1 workspace” 假设，引入工作空间级路由与隔离，直接支撑 IDE 多项目、团队共享守护进程场景。 |
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | **Daemon capability gaps & prioritized backlog** | 15 / 0 | 📋 **交付清单** | 系统性梳理 `qwen serve` 与 ACP/Slash Command 的能力缺口，作为发布门控清单追踪。 |
| [#6321](https://github.com/QwenLM/qwen-code/issues/6321) | **PreToolUse hook "ask" silently denied** | 4 / 0 | 🐛 **Hook 回归** | `permissionDecision: "ask"` 本应弹出确认框，实则静默拒绝，阻断人工介入工作流，P2 优先级急需修复。 |
| [#5239](https://github.com/QwenLM/qwen-code/issues/5239) | **Subagent ↔ main session bidirectional comm** | 4 / 0 | 🤝 **多协作短板** | 子 Agent 无通知、无监控、挂起不感知，开发者被迫落盘文件轮询，呼吁引入事件总线或流式回调。 |
| [#4782](https://github.com/QwenLM/qwen-code/issues/4782) | **ACP Streamable HTTP transport — implementation status** | 4 / 0 | 🌐 **协议合规** | `/acp` 端点已可直连 Zed/Goose/JetBrains，但流式传输、取消语义、错误映射仍在对齐中。 |
| [#6808](https://github.com/QwenLM/qwen-code/issues/6808) | **Mouse text selection broken (SGR mouse tracking)** | 4 / 0 | 🖱️ **终端 UX 回归** | Windows Terminal/PowerShell 下原生选中失效，`ScrollableList` 强制开启 SGR 鼠标模式导致，需在滚动与选中间平衡。 |
| [#6832](https://github.com/QwenLM/qwen-code/issues/6832) | **Test-efficacy probe in disposable worktree** | 3 / 0 | ✅ **测试隔离** | 已合并：将探针跑在一次性 `git worktree`，避免污染共享审查树，消除并发读取半还原状态的竞态。 |
| [#6791](https://github.com/QwenLM/qwen-code/issues/6791) | **Auto mode incompatible with 3rd-party APIs (NewAPI/Minimax)** | 3 / 0 | 🔌 **模型适配痛点** | `tool-choice` 缺失、`thinking` 标签透传导致分类器超时或解析失败，暴露统一适配层不足。 |
| [#6821](https://github.com/QwenLM/qwen-code/issues/6821) | **[Discussion] 1.0 Release Plan — Draft Triage** | 1 / 0 | 🚀 **里程碑规划** | 目标 7.23~8.01 发布 v1.0.0，四条红线：**稳定 daemon + ACP 合规 + 流式不丢不重 + 安全基线**，其余进 1.0.x。 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心价值 | 链接 |
|---|------|------|----------|------|
| [#6840](https://github.com/QwenLM/qwen-code/pull/6840) | **fix(review): build chunk agent's prompt in code — they were launched blind** | Open | **审查系统根因修复**：23/23 个分块代理**完全未收到 diff**，提示词构建逻辑缺失，本 PR 补全构建流程并加入启动时快照审计。 | [PR](https://github.com/QwenLM/qwen-code/pull/6840) |
| [#6843](https://github.com/QwenLM/qwen-code/pull/6843) | **fix(review): prove coverage from harness's records, not caller's file** | Open | **覆盖率防作弊**：改为读取哈希记录而非编排器产出文件，彻底堵住 “自己给自己发奖状” 的造假路径。 | [PR](https://github.com/QwenLM/qwen-code/pull/6843) |
| [#6841](https://github.com/QwenLM/qwen-code/pull/6841) | **refactor(review): share probe-worktree path helper; harden stale-tree sweep** | Open | **一次性 worktree 工程化**：统一路径计算、修复 `git worktree remove` 不释放路径的残留问题，配合 #6836 落地隔离执行环境。 | [PR](https://github.com/QwenLM/qwen-code/pull/6841) |
| [#6825](https://github.com/QwenLM/qwen-code/pull/6825) | **feat(serve): add extension management v2** | Open | **守护进程扩展治理 V2**：制品级共享、激活策略分级（全局默认 + 工作空间精确覆盖）、新增 `extension_management_v2` 能力位，面向多租户场景。 | [PR](https://github.com/QwenLM/qwen-code/pull/6825) |
| [#6816](https://github.com/QwenLM/qwen-code/pull/6816) | **feat(daemon): add workspace skill toggle API** | Open | **技能动态启停**：REST/TS SDK 双端支持，大小写不敏感解析，主/限定工作空间双路由，配合 `workspace_skill_toggle` 能力位。 | [PR](https://github.com/QwenLM/qwen-code/pull/6816) |
| [#6802](https://github.com/QwenLM/qwen-code/pull/6802) | **fix(cli): escape `<` in insight report data to prevent script breakout** | Open | **XSS 防御**：`/insight` HTML 内联 `<script>` 数据注入 `</script>` 可破坏页面，转义 `<` 并补充回归测试。 | [PR](https://github.com/QwenLM/qwen-code/pull/6802) |
| [#6799](https://github.com/QwenLM/qwen-code/pull/6799) | **fix(cli): bound LlmRewriter outputHistory to contextTurns** | Closed | **内存泄漏修复**：重写历史无界增长，现按 `contextTurns` 截断，并加测试守护。 | [PR](https://github.com/QwenLM/qwen-code/pull/6799) |
| [#6800](https://github.com/QwenLM/qwen-code/pull/6800) | **fix(cli): drain rewrites enqueued during waitForPendingRewrites** | Closed | **并发重写丢失修复**：排空期间新入队的重写任务被静默丢弃，改为循环排空直至队列稳定。 | [PR](https://github.com/QwenLM/qwen-code/pull/6800) |
| [#6834](https://github.com/QwenLM/qwen-code/pull/6834) | **fix(cli): compute latestActiveTime from real activity timestamp**

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

User Safety: safe

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*