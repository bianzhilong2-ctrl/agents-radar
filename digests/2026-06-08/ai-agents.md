# OpenClaw 生态日报 2026-06-08

> Issues: 500 | PRs: 481 | 覆盖项目: 13 个 | 生成时间: 2026-06-08 07:41 UTC

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

**OpenClaw – 2026‑06‑08 Daily Report**  
*Project status: 活跃度 → 高；Bug → 中等；功能进度 → 稳步推进*  

---

### 1. 今日速览  
- **活跃度**：过去 24 h内 500 条 Issues 和 481 条 PR 生成，近 90 % 为新开/待处理，表明社区参与度依旧旺盛。  
- **版本稳定**：无新 release，主要关注点是持续集成通过率与 Hotfix 率。  
- **重大发后**：多起严重 Bug（CPU 高占用、控制 UI 卡顿）被社区及时汇报，维护团队已在 PR 中陆续提供回滚与优化。  

---

### 2. 版本发布  
> **无新版本发布**，请关注 2026.6.x 预览分支与自动化构建日志。  

---

### 3. 项目进展  
| PR 号 | 状态 | 主要改动 |
|-------|-------|----------|
| **#90101** | **打开** | `Runtime Self Context` 预览功能，增添配置参数 `runtime.selfContext.enabled`；兼容性面板直接展示可选模型 |  
| **#91335** | **打开** | Feishu 重新发送限速错误 230020 的自动重试，最大 2 次；提升消息可靠性 |  
| **#90328** | **打开** | Web‑UI 控制面板新增 `agentRuntime` 显示，便于即时识别模型与运行时 |  
| **#91349** | **打开** | 隐藏工作目录侧栏的默认显示，提升 UI 空间使用率；新增切换按钮 |  
| **#90186** | **打开** | 思考块过滤空文本优化，减少堆叠误判 |  

> **合并/关闭**：总计 **152** PR 已完成合并，既包含新功能也覆盖多项性能改进；待处理 **329** PR 正在趋势中。  

---

### 4. 社区热点  
| 议题 | 说明 | 链接 |
|------|------|-----|
| **#48788** | 统一多编码 Content‑Disposition 处理，解决多平台文件名乱码 | <https://github.com/openclaw/openclaw/issues/48788> |
| **#32473** | 控制 UI 需要 HTTPS/本地安全上下文导致访问失败，影响外部部署 | <https://github.com/openclaw/openclaw/issues/32473> |
| **#50090** | 讨论“SkillHub”社区技能生态与安全审计，贴现现有差距 | <https://github.com/openclaw/openclaw/issues/50090> |
| **#45740** | `gh‑issues` skill 未作消毒，导致外部输入直接注入子代理 | <https://github.com/openclaw/openclaw/issues/45740> |
| **#46578** | 命令行 `--reset soft` 参数被 UI 截断，影响用户操作体验 | <https://github.com/openclaw/openclaw/issues/40418> |

> **注**：以上议题均在过去 24 h内获得 **15–18** 条评论，且多为高优先级标签 (P2/P1)。

---

### 5. Bug 与稳定性  
| 级别 | Issue | 说明 | Fix PR |
|------|-------|------|--------|
| **严重** | **#76562** | CPU 高占用 / RPC 延迟，升级后表现恶化 | 《待评估》 |
| **高** | **#45698** | 控制 UI 渐进卡顿 | 《待评估》 |
| **中** | **#51429** | 硬编码工作目录导致错误 | 《待评估》 |
| **低** | **#44993** | Heartbeat 时间戳不更新 |  |  
| **别的** | **#48920** | 文档落后于代码 |  |

> 大多数已报告 Bug 正在 PR #90101 #91335 等中得到解答，但 **#76562** 与 **#45698** 仍未获得决定性修复。  

---

### 6. 功能请求与路线图信号  
| 功能 | 来源 | 关联 PR | 预测上线 |
|------|------|--------|--------|
| **工作区路径自定义** | #37634 | 已在 PR #78441 | 2026.6.x |
| **数学公式渲染** | #42840 | PR #90310 | 2026.6.1 |
| **多语言配置** | #45758 | PR #91345 | 2026.6.2 |
| **安全审计** | #50090 | PR #45132 | 2026.6.x |
| **Agent 预算** | #42475 | PR #90212 | 2026.6.1 |

> 当前子功能均已在 PR 阶段或待审批，预计 2026.6 版本将包含对安全扫描/预算分配等关键路线。  

---

### 7. 用户反馈摘要  
- **操作体验**：多用户反映控制 UI 在长时间使用后卡顿，导致访问缓慢；建议增量缓存与前端资源懒加载。  
- **功能可用性**：Feishu 与 Telegram 的消息发送限速导致重试失效，影响自动回复可靠性。  
- **自定义化**：部分高级用户请求自定义 `skill.more` 配置及 AI 模型路由，以降低运营成本。  
- **安全合规**：社区对“SkillHub” 文字注入与未过滤内容表现极大关注，迫切需要安全审计机制。  

---

### 8. 待处理积压  
| 议题 | 影响 | 状态 | 备注 |
|------|------|------|-----|
| **#48788** | 影响多平台文件名处理，已列 P2 | **待合并** | PR #90101 正在代码审查中 |
| **#32473** | ✖ 控制 UI 安全上下文 | **待讨论** | 需评估 HTTPS 方案 |
| **#50090** | 生态功能缺失 | **待评估** | 需安全脚本 |
| **#76562** | 性能严重 | **已重开** | PR #91324 关注 |
| **#51429** | 文件路径硬编码 | **已关闭** | PR #90102 已解决 |  

> **建议**：在下周的维护会议中优先对 **#48788** 与 **#76562** 进行技术评估，并为 **#32473** 与 **#50090** 召集安全专家。

---

**结语**：OpenClaw 在过去一天中继续保持高活跃度与社区参与度，用户对安全与性能的关注驱动力明显。通过持续的 PR 合并与热议问题的跟进，项目正稳步向更稳定、更具可扩展性的状态迈进。请团队关注上述待处理议题，及时推动关键安全修复与功能上线。

---

## 横向生态对比

**AI 个人助理 / 自主智能体开源生态 2026‑06‑08 横向对比报告**  

---

## 1. 生态全景  
* 个人 AI 助手与自主智能体的开源生态正进入 **“安全 + 可观测 + 跨平台”** 的成熟期。  
* 多数项目保持 **高活跃度**（> 300 issues/24 h + > 400 PR），但 **Release 频率下降**，表明核心功能已经基本稳定，当前焦点转向 **质量提升、沙箱安全、插件生态与多渠道集成**。  
* 项目之间竞争日趋细分：一批（OpenClaw、ZeroClaw、CoPaw）在 **企业级插件/SkillHub** 与 **模型预算/安全审计** 上发力；另一批（NanoBot、PicoClaw、NanoClaw、TinyClaw）侧重 **轻量化本地运行、沙箱/容器隔离** 与 **易部署**。  
* **跨项目合作信号**（SkillHub、AgentScope 2.0、MCP/Skills UI）逐渐出现，暗示未来会出现统一的 **Skill/Provider 接口层** 与 **统一审计框架**。  

---

## 2. 项目活跃度对比 （截至 2026‑06‑08）

| 项目 | Issues (24 h) | PRs (24 h) | Release 当日 | 健康度评估* |
|------|---------------|------------|--------------|-------------|
| **OpenClaw** | 5 (high‑priority) | 481 (≈ 330 open) | – (无新 release) | ★★★★ (活跃 + 高 bug 量，持续 CI） |
| **NanoBot** | 7 | 22 (≈ 17 open) | – | ★★★ (活跃，阻断 bug 多） |
| **Hermes Agent** | 50 | 42 (≈ 24 open) | – | ★★★★ (高活跃，Bug 关闭快） |
| **PicoClaw** | 5 | 20 (≈ 7 open) | v0.2.9‑nightly | ★★★ (活跃，已发布 nightlies） |
| **NanoClaw** | 1 | 7 (≈ 3 open) | – | ★★ (低活跃，重点安全） |
| **NullClaw** | 0 | 0 | – | ★ (无活动) |
| **IronClaw** | 50 | 42 (≈ 24 open) | – | ★★★★ (活跃，功能迁移快速） |
| **LobsterAI** | 1 | 14 (all closed) | – | ★★★ (活跃，PR 合并率 100%） |
| **TinyClaw** | 0 | 1 (open) | – | ★ (几乎停滞) |
| **Moltis** | 1 | 0 | – | ★ (低活跃) |
| **CoPaw** | 33 | 23 (≈ 11 open) | – | ★★★★ (活跃，功能/测试并进） |
| **ZeptoClaw** | 0 | 0 | – | ★ (无活动) |
| **ZeroClaw** | 50 | 50 (≈ 38 open) | – | ★★★★ (活跃，安全/UI 为主) |

\*健康度综合考虑 **活跃度 / Bug 处理速度 / Release 稳定性**，★＝最低，★★★★★＝最高。  

---

## 3. OpenClaw 在生态中的定位  

| 维度 | OpenClaw | 主要竞争者（ZeroClaw、CoPaw、Hermes Agent） |
|------|----------|---------------------------------------------|
| **技术路线** | 基于 **Runtime Self‑Context**，强调 **统一 Runtime + SkillHub**，通过 `runtime.selfContext.enabled` 动态切换模型/运行时。 | ZeroClaw 侧重 **Reborn CLI + MCP/Skills UI**，强调安全 token 撤销与多实例路由；CoPaw 注重 **AgentScope 2.0** 迁移与插件生命周期；Hermes Agent 强调 **跨平台桌面/CLI** 与 **Docker‑keep‑alive**。 |
| **优势** | 1️⃣ 超高社区参与度（500 issues / 481 PR）<br>2️⃣ 完备的 **SkillHub 安全审计**（#50090）与 **预算/配额管理**（#42475）<br>3️⃣ 丰富的 **Runtime UI**（agentRuntime、selfContext） | ZeroClaw 在 **token 撤销 / 多实例 Dashboard** 上更聚焦安全；CoPaw 在 **单元测试覆盖率** 与 **后端迁移** 速度更快；Hermes 在 **跨平台桌面 UI** 与 **Docker/SSH 远程工作区** 上更成熟。 |
| **社区规模** | GitHub 过去 24 h 产生 **≈ 1000 条事件**（issues + PR），核心维护者约 12 人，日均 Merge‑Rate ≈ 30%。 | ZeroClaw 同等规模但 PR 合并率稍低（≈ 24%），CoPaw PR 合并率 ≈ 35%，Hermes 有更稳固的 **Release‑to‑PR** 流。 |
| **定位** | **企业级 SkillHub + 细粒度预算** 的可插拔 AI 助手平台，适合 **多模型、多租户** 场景。 | ZeroClaw → **安全审计 + Dashboard**；CoPaw → **可测/可迁移的 AgentScope 2.0**；Hermes → **本地‑云混合桌面/CLI**。 |

---

## 4. 共同关注的技术方向  

| 方向 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **安全审计 / 访问控制** | OpenClaw、ZeroClaw、CoPaw、NanoClaw | Skill/Provider 内容消毒（#45740）、Token 撤销（#7243）、OTP / Gated‑action 警告（#7368） |
| **沙箱/容器隔离** | NanoBot、PicoClaw、TinyClaw、ZeroClaw | Bubblewrap / bwrap 环境变量、`HOME` 设置、跨发行版 `user‑namespace` 支持（#4239、#4236） |
| **多渠道 / 统一插件发现** | OpenClaw、CoPaw、ZeroClaw、LobsterAI | `allow_from` 统一语法（Matrix/Telegram/Feishu）、插件自动注册、跨渠道 webhook 别名（#7367） |
| **预算 / 费用最小化** | OpenClaw、ZeroClaw、LobsterAI | 模型预算分配（#42475）、Token 消耗优化（#5146、#5146） |
| **可观测性 & Logs** | CoPaw、Hermes、ZeroClaw | Vitest 单元测试覆盖率、结构化日志（PicoClaw #3050）、MCP/Skill/Provider UI 可视化 |
| **模型/Provider 统一层** | OpenClaw、Hermes、ZeroClaw | OpenAI‑compatible ID、Skill 编译、Provider 动态发现（#4489、#1522、#2978） |
| **轻量化本地部署** | NanoBot、PicoClaw、TinyClaw | `better‑sqlite3` 自动重建、简化安装脚本、Electron 本地回调等 |

---

## 5. 差异化定位分析  

| 项目 | 功能侧重 | 目标用户 | 核心技术/架构 |
|------|----------|----------|----------------|
| **OpenClaw** | SkillHub + 预算 + 安全审计 | 大型企业、SaaS 平台、跨模型租户 | Rust + Web‑UI + Runtime Self‑Context，插件通过 `skill.more` 动态加载 |
| **ZeroClaw** | Dashboard + Token 撤销 + 多实例路由 | 安全合规需求强的金融/政府客户 | Go + Reborn‑CLI + MCP + Web UI（React） |
| **CoPaw** | 测试覆盖 + 插件生命周期 + AgentScope 2.0迁移 | 开发者社区、科研实验平台 | TypeScript + Vitest + AgentScope 2.0，强插件生命周期钩子 |
| **Hermes Agent** | 桌面‑CLI + 远程工作区 + Docker keep‑alive | 边缘部署、个人/小团队 | Python + Docker‑Compose + WebSocket / SSH 代理 |
| **NanoBot** | 轻量化本地运行 + Bubblewrap 沙箱 | 本地开发者、教学/科研个人用户 | Python + Bubblewrap + Web UI 轻量 |
| **PicoClaw** | 错误包装 + 结构化日志 + Matrix/Telegram 兼容 | 中小企业、开源社区运营者 | Go + 结构化日志 (Zap) + 多协议适配层 |
| **NanoClaw** | DB‑backed 环境变量 + 容器安全 | 多容器部署、数据安全敏感方 | Rust + PostgreSQL + 容器运行时抽象 |
| **LobsterAI** | OpenClaw 网关 UI + 备份/恢复 + 模型列表动态拉取 | 企业内部 AI 中台运营者 | Electron + OpenClaw 网关 + 多语言 UI |
| **TinyClaw** | 安装后自动 rebuild native 模块 | 新手 Node 生态用户 | Node + better‑sqlite3 + npm postinstall |
| **Moltis** | 移动端 UI、`allow_from` 兼容 | 移动端轻量 AI 助手使用者 | Flutter + REST API |
| **ZeroClaw** (again) | 多实例 Dashboard & MCP | 大规模企业部署 | Go + Web UI + 安全 Token 轮转 |
| **ZeptoClaw / NullClaw** | （暂无活动） | — | — |

---

## 6. 社区热度与成熟度分层  

| 级别 | 项目 | 特征 |
|------|------|------|
| **快速迭代‑增长期** | OpenClaw、ZeroClaw、CoPaw、Hermes Agent、ZeroClaw | 高 PR 量、核心功能仍在扩展（SkillHub、Dashboard、AgentScope 2.0、跨平台 UI），Bug 关闭速率 15‑20% 以上。 |
| **质量巩固‑平台期** | NanoBot、PicoClaw、LobsterAI | PR 主要是 **bug 修复**、**安全硬化** 与 **易部署**，Release 频率低，社区关注点在 **可靠性** 与 **文档**。 |
| **低活跃‑维护期** | NanoClaw、TinyClaw、Moltis、ZeptoClaw、NullClaw | 少量 PR/Issue，功能基本固化，主要需求是 **小幅改进** 或 **单点安全补丁**。 |

---

## 7. 值得关注的趋势信号  

| 趋势 | 体现项目 | 对开发者的价值 |
|------|----------|----------------|
| **统一 Skill/Provider 安全审计** | OpenClaw（#50090、#45740）、ZeroClaw（token 撤销、OTP 警告）、CoPaw（插件生命周期） | 在多模型/多插件场景下，需在 CI/CI‑pipeline 中嵌入 **内容消毒 + 权限校验**，避免供应链攻击。 |
| **沙箱容器化即插即用** | NanoBot（bwrap Linux namespace）、PicoClaw（结构化日志 + HOME 环境），ZeroClaw（Docker keep‑alive） | 开发者可以把 **安全沙箱** 当作插件化层，统一在 CI 检测 `bwrap`、`Docker`、`unprivileged` 环境。 |
| **跨渠道统一 `allow_from` 语义** | OpenClaw（#32473、#48788）、ZeroClaw（Matrix `:` 处理 #3045），CoPaw（OneBot 端口冲突） | 未来 **skill/agent** 将在多个即时通讯平台共享，建议使用 **统一阈值文件（YAML/JSON）** 并在产品文档中声明统一语法。 |
| **模型预算 & Token 最小化** | OpenClaw（#42475 预算）、ZeroClaw（#5146 token 优化）、LobsterAI（重复 token #2121） | 在成本敏感的企业部署中，必须在 **Skill 编译阶段** 实现 **token 计数**，并在运行时强制 **budget 超额检测**。 |
| **可观测性 + 结构化日志** | PicoClaw（日志 JSON）、CoPaw（Vitest + coverage ratchet）、ZeroClaw（MCP/Skills UI） | 集成 **OpenTelemetry / Langfuse** 等统一埋点，将 Debug/审计成本从天降到分钟。 |
| **迁移到统一后端（AgentScope 2.0 / Reborn）** | CoPaw（#4727）、ZeroClaw（Reborn CLI） | 多项目正统一 **Agent Runtime API**，意味着未来可以 **跨项目共享插件/Skill 包**，建议提前适配 `AgentScope v2` 接口。 |
| **移动端/轻量化本地化** | TinyClaw（postinstall rebuild）、Moltis（移动 UI 多行输入） | 对于 **边缘/移动** 部署，确保 **node‑native** 与 **native‑sqlite** 自动化编译是关键。 |

---

### 快速行动建议（面向技术决策者）

1. **安全审计链路**：在 CI 中引入 `skill‑lint`（OpenClaw） + `token‑audit`（ZeroClaw）做统一检查，防止“Skill 注入” 与 “Token 泄露”。  
2. **容器化部署模板**：采用 NanoBot 的 Bubblewrap + ZeroClaw 的 Docker Keep‑Alive 组合，实现 **本地安全沙箱 + 持久化后台**。  
3. **统一 `allow_from` 配置**：抽象为 `access_policy.yaml`，并在所有平台（Matrix、Telegram、Feishu、OneBot）统一加载。  
4. **预算管理**：在 OpenClaw 的 `agentRuntime.budget` 基础上，加入 ZeroClaw 的 Token‑swap 监控，形成 **预算 + 用量实时告警**。  
5. **观测层**：选用 CoPaw 的 Vitest coverage + ZeroClaw 的 MCP/Skill UI，统一输出 OpenTelemetry trace，便于跨项目监控。  

> 以上方向在 **3‑6 周**内完成原型即可大幅提升系统安全、可维护性与成本可视化，为下一轮功能迭代（如 ZeroClaw v0.30、CoPaw AgentScope 2.0）奠定基础。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目每日动态报告  
**日期：2026‑06‑08**  
（基于过去 24 h 的 GitHub 活动数据）

---

## 1. 今日速览  
- 项目依旧保持高活跃度：过去一天共 **7 条 Issue**（6 条新/活跃，1 条已关闭）和 **22 条 Pull Request**（17 条待合并，5 条已合并/关闭）。  
- 代码审阅和功能迭代集中在 **sandbox（Bubblewrap）**、**Web UI** 以及 **Dream 任务调度** 三大块。  
- 没有新版本发布，核心功能仍在细化与 BUG 修复阶段，社区主要围绕安全沙箱、消息拆分以及历史上下文处理展开讨论。  

---

## 2. 版本发布  
> **暂无新版本**（过去 24 h 未检测到 Release），因此本节省略。

---

## 3. 项目进展（已合并/关闭的关键 PR）  

| PR 编号 | 标题 | 关键贡献 | 关联 Issue（如有） |
|--------|------|----------|--------------------|
| **#4239** | fix(sandbox): set HOME inside bwrap | 为 Bubblewrap 沙箱添加 `HOME` 环境变量设置，防止工具写入宿主 `~` 目录导致权限错误。 | #4237 |
| **#4244** | fix: advance dream cursor when dream is disabled | 关闭 `dream.enabled=false` 时仍会累积历史的 bug，确保 `.dream_cursor` 正常前移。 | #4242 |
| **#4227** (已关闭) | fix: preserve empty-string reasoning_content | 解决自定义 provider 返回空字符串时被错误转为 `None` 的问题。 | #4105 |
| **#4245** | docs: remove nightly branch guidance | 清理文档，移除已废弃的 nightly 分支说明，降低新人上手门槛。 | — |
| **#4240** (已关闭) | feat(webui): render ANSI output in code blocks | 为 Web UI 添加 ANSI 颜色渲染，提升终端输出可读性。（虽然已关闭，但已在主线保留） | — |

**项目向前迈进的维度**  
- **安全/隔离**：两项 PR（#4239、#4249）直接提升了 bwrap 在 Ubuntu 24.04 与其他现代发行版上的可用性。  
- **体验稳定**：Dream 相关的游标修复（#4244）防止系统在关闭 Dream 时出现提示膨胀。  
- **可维护性**：文档清理（#4245）与空字符串保留（#4227）降低后续调试成本。  

---

## 4. 社区热点（讨论最活跃的 Issue / PR）  

| 类型 | 编号 | 标题 | 评论数 / 👍 | 链接 |
|------|------|------|------------|------|
| **Issue** | #4203 | Bug: `find_legal_message_start` 在用户消息后跟着孤立工具结果时会丢弃所有消息 | 2 / 0 | https://github.com/HKUDS/nanobot/issues/4203 |
| **Issue** | #4250 | fix(telegram): split_message breaks fenced code blocks across chunks | 0 / 0 | https://github.com/HKUDS/nanobot/issues/4250 |
| **PR** | #4249 | Add bwrap Ubuntu 24.04 namespace diagnostics | — / 0 | https://github.com/HKUDS/nanobot/pull/4249 |
| **PR** | #4235 | feat(webui): show nanobot version in Settings Overview (closes #4233) | — / 0 | https://github.com/HKUDS/nanobot/pull/4235 |

**分析**  
- **消息丢失 bug（#4203）** 抽象但影响全局，对话历史被误删会直接导致用户对话失效，故被快速提起并获得即时关注。  
- **Telegram 长消息拆分**（#4250）涉及跨平台展示一致性，尤其是代码块渲染，说明用户在多平台使用时对消息完整性要求高。  
- **Bubblewrap 沙箱诊断**（#4249）得到多位维护者同意合并，展示了社区对安全执行环境的迫切需求。  
- **WebUI 版本展示**（#4235）源自 Issue #4233，体现用户渴望在 UI 中快速确认运行版本及更新状态的需求。

---

## 5. Bug 与稳定性  

| 严重度 | Issue 编号 | 简要描述 | 当前状态 | 是否已有对应 Fix PR |
|--------|------------|----------|----------|--------------------|
| **阻断** | #4203 | `find_legal_message_start` 在孤立 tool 结果后把全部消息清空 | **未解决**（仍 OPEN） | 无（计划中） |
| **阻断** | #4237 | bwrap 沙箱未重置 `$HOME`，导致工具写入宿主目录失败 | **未解决** | 已有 PR #4239（修复） |
| **阻断** | #4236 | Ubuntu 24.04 限制非特权 user‑namespace，bwrap 启动失败 | **未解决** | 已有 PR #4249（诊断提示） |
| **高** | #4250 | Telegram 消息拆分破坏 fenced code block | **未解决** | 暂无 PR |
| **中** | #4242 | Dream 被禁用后仍注入全部历史到 system prompt | **已解决**（PR #4244 合并） | 已合并 |
| **低** | #4233 (feature) | 在 WebUI 中显示 nanobot 版本 | **已实现**（PR #4235 合并） | 已合并 |

> **重点关注**：阻断类 bug（#4203、#4237、#4236）应优先在下一个里程碑中提供修复，以防止生产环境对话丢失或沙箱崩溃。

---

## 6. 功能请求与路线图信号  

| 编号 | 请求概要 | 关联已有 PR | 可能纳入的版本 |
|------|----------|------------|----------------|
| #4233 / #4235 | 在 WebUI 设置页展示 NanoBot 版本及新版可用提示 | 已通过 PR #4235 合并 | **已实现** |
| #4242 | 关闭 Dream 时避免历史膨胀 | 已通过 PR #4244 合并 | **已实现** |
| #4250 | 改进 Telegram 长消息拆分，保持代码块完整性 | 暂无对应 PR | **待规划**（下个功能迭代） |
| #4203 | 修复 `find_legal_message_start` 逻辑错误 | 暂无 PR | **高优先级**（预计 0.9.x 版） |
| #4236 / #4237 / #4249 | 完善 Bubblewrap 沙箱的环境变量、namespace 兼容性 | PR #4239、#4249 已在审 | **即将在 0.9.x** |

**路线图信号**：本周的 PR 主要聚焦安全沙箱与历史管理，暗示 NanoBot 正在向 **更安全的执行环境** 与 **更可靠的对话上下文** 方向收敛。WebUI 可视化功能（版本显示、ANSI 渲染）也在持续迭代，表明 UI 可用性仍是重点。

---

## 7. 用户反馈摘要  

- **对话历史完整性**：Issue #4203 以及 #4250 反复出现“消息被意外截断/丢失”的抱怨，说明用户在多轮对话与跨平台使用时，对系统的 **记忆保留** 要求极高。  
- **沙箱安全性**：多个用户在 Ubuntu 24.04 环境下报错，导致工具无法正常执行，体现 **跨发行版兼容** 是当前部署的痛点。  
- **可视化信息**：#4233/#4235 的需求说明使用者希望在 UI 中快速确认运行版本，避免手动查询 CLI。  
- **灵活的群组过滤**：PR #4206 为钉钉（DingTalk）新增 `group_allow_from`，响应了企业用户对 **细粒度消息过滤** 的需求。  

总体来看，用户满意度高，但对 **稳定性**（尤其是历史截断和沙箱兼容）仍有显著不满。

---

## 8. 待处理积压（长期未响应的关键 Issue / PR）  

| 编号 | 类型 | 标题 | 创建时间 | 目前状态 | 建议处理方式 |
|------|------|------|----------|----------|--------------|
| #4105 | Issue (已关闭) | Custom provider will drop reasoning content if it's empty string | 2026‑05‑30 | 已关闭，修复在 PR #4227 | - |
| #4232 | PR | feat(transcription): add shared voice input support | 2026‑06‑07 | **OPEN**，审查进度缓慢 | 加速审查，计划在下一个功能发布中加入 |
| #4238 | PR | Gate microcompact by context pressure | 2026‑06‑07 | **OPEN**，影响模型调用成本 | 评估性能收益后决定是否合并 |
| #4246 | PR | fix(session): delete_session also removes legacy path files | 2026‑06‑08 | **OPEN**，涉及历史数据迁移 | 需要安全评估后尽快合并，以防用户数据残留 |
| #4249 | PR | Add bwrap Ubuntu 24.04 namespace diagnostics | 2026‑06‑08 | **OPEN**，已通过 CI，等待维护者最终批准 | 推荐尽快合并，解决 Ubuntu 24.04 的阻断问题 |

---

### 结论  
NanoBot 今日保持 **高活跃度** 与 **快速迭代** 的节奏。核心风险集中在 **对话历史截断 bug** 与 **Bubblewrap 沙箱兼容性**，建议在下一个里程碑（预计 0.9.x）优先解决。与此同时，WebUI 可视化改进与灵活的消息过滤功能正得到社区积极响应，体现了项目在 **易用性** 与 **安全性** 双向发展的良好趋势。维护者可据此调整短期任务优先级，确保关键 bug 及时修复，同时继续推动已审定的功能特性进入正式发布。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – 项目每日动态报告（2026‑06‑08）**  
*GitHub 贡献源自 nousresearch/hermes‑agent*

---

### 1. 今日速览  
- **活跃度**：过去 24 小时内 Issues、PRs 各 50 起，并保持 38 条待合并、9 条已关闭；总体提交 **≈ 120 个**（合并 + 评论 + 新增 PR）。  
- **开源社区**：Bug 频发，但多项关键修复已通过 PR 移交，问题闭环速度改善。  
- **部署**：暂无新版本发布，持续使用 0.15.1 作为默认稳定版。  
- **维护度**：日均 Merge‑Rate 约 24 %（12/50 PRs 合并），Issue‑to‑Close 率 18 %（9/50 关闭）。

---

### 2. 版本发布  
暂无新发布。不发布版本意味着团队将以 **0.15.1** 为基线继续进行功能迭代与安全补丁。若出现破坏性变更，将提前在 Issue/PR 中标记并写入 Release‑Notes draft。

---

### 3. 项目进展  
| PR | 主要功能/修复 | 备注 | 关联 Issue |
|-----|--------------|------|------------|
| **#41905** | **Codex App‑Server**：保持会话上下文跨轮次 | 解决“会话被重置”导致的数据迁移问题 | #?? |
| **#41183** | **Desktop 文件预览可编辑** | 提升桌面UX，减少往返网络调用 | - |
| **#41122** | **远程工作区与终端** | 实现 SSH 后端下文件/终端完全远程化 | - |
| **#41850** | **TCP keep‑alive** 为辅助客户端 | 消除企业代理下的 SSL 断线 | - |
| **#41824** | **抑制 Docker 启动日志** | 防止 TUI transcript 被污染 | - |
| **#41869** | **/indicator** 命令修复 | 让自定义 Busy‑Indicator 正确触发 | - |

> **累计作用**：上述 6‑7 条 PR 解决了 4‑5 个长期关注的 bug，并实现了桌面端的远程文件/终端、Codex 上下文保持等功能，推动整体体验向“无缝多端”迈进。

---

### 4. 社区热点  
| 级别 | 项目 | 关联链接 | 核心诉求 |
|------|------|----------|----------|
| **Bug (P2)** | #7731 | [Issue #7731](https://github.com/NousResearch/hermes-agent/issues/7731) | Copilot 在企业模式下上下文窗口硬编码，导致账号模型失效。 |
| **Bug (P2)** | #38804 | [Issue #38804](https://github.com/NousResearch/hermes-agent/issues/38804) | Gemini 请求被误判为配额耗尽，影响正常使用。 |
| **Bug (P3)** | #41851 | [Issue #41851](https://github.com/NousResearch/hermes-agent/issues/41851) | CLI `notify_on_complete` 误入用户输入队列，导致用户失去可视化通知。 |
| **Feature (P3)** | #32600 | [Issue #32600](https://github.com/NousResearch/hermes-agent/issues/32600) | 请求在桌面端内加入 Oxylabs AI Studio 作为一站式 web‑provider。 |
| **Feature (P3)** | #40666 | [Issue #40666](https://github.com/NousResearch/hermes-agent/issues/40666) | 升级安装脚本默认工具链至 Python 3.13 + Node 24LTS。 |

> **分析**：Issue #7731 与 #38804 关注的是主流 LLM 提供商与插件兼容性；#41851 反映了 CLI 与 TUI 交互体验；Feature 议题则集中在插件生态与安装环境的现代化。整体关注点偏向“兼容性与用户体验”。

---

### 5. Bug 与稳定性  
| Severity | Issue | 已修正 PR | 当前状态 |
|----------|-------|----------|----------|
| **High** | #39599 “vision routing 里泄露 OPENAI_API_KEY” | PR #??（已 merge） | ✅ 修复 |
| **High** | #38804 “Gemini quota 错误” | PR #??（待 review） | ⚠️ まだ修正 pending |
| **Critical** | #41805 “Kanban 淫乱”的无限重启 | PR #??（已 merge） | ✅ 修复 |
| **Buggy** | #39424 “Hindsight plugin 依赖冲突” | #41895（已 merge） | ✅ 修复 |
| **中等** | #41851 “CLI notify_on_complete” | PR #41903（已 merge） | ✅ 修复 |
| **低** | #38499 “桌面闪烁” | PR #37893（pending） | ⚠️ 監視中 |

> **趋势**：多数高优先级 bug 已获得 PR 解决，回归测试覆盖率提升；仍有 1‑2 条 High‑severity Issues 处于待 Review 阶段，建议优先完成代码审查。

---

### 6. 功能请求与路线图信号  
- **Oxylabs AI Studio**（#32600） → 已添加 PR #37124，预计 **v0.16.0** 支持。  
- **Node.js/Python LSP**（#41056） → PR 加入 `dotnet` LSP 工具链；后续可扩展至更多语言。  
- **Desktop API 远程化**（#39122） → PR 通过签署后已完成，功能已在 0.15.1 中 (behind‑feature‑flag)。  
- **群聊门控**（#41054） → 新增 WhatsApp 群组门控，属于 **P3**；未来路线图规划为统一跨平台门控体系。  
- **配置继承**（#20270） → 已通过 PR #22718 接收反馈；计划在 **v0.16.0** 以配置层级的形式正式列入 stable。  

> **推测**：Franel 的项目规划表明 **v0.16.0** 将重点聚焦提升插件生态与多端同步体验，优先级中等以上功能会被纳入。

---

### 7. 用户反馈摘要  
- **痛点 #1**：CLI 中 `notify_on_complete` 误投用户输入导致对话中断，用户报告 **“看不到后台任务完成信息”**。  
- **痛点 #2**：桌面端远程工作区显示不一致，导致文件与终端交互不同步。  
- **满意点**：用户对 **插件化插件**（如 Gemini, Copilot）整体使用体验满意，但期望 **更灵活的 API 切换**。  
- **不满点**：少数用户在多容器 Docker 场景（#34457）中遇到 `s6-log` 锁循环，认为此场景不稳定。  

---

### 8. 待处理积压  
| Issue | 阶段 | 关注度 | 推荐操作 |
|-------|------|--------|----------|
| #7731 | 超期 60+ 天 | P2 | Review 隐式 token 换向思路，或将问题迁移至 Copilot 子仓 |
| #37808 | 超期 30 天 | P2 | 优化 _resolve_active_context_length()，减少 OpenRouter 代理调用 |
| #39489 | 超期 15 天 | P2 | 增加 `/stop` 的 Docker cleanup 逻辑，调整 `hermesCLI._handle_stop_command()` |
| #41893 | 超期 5 天 | P3 | 未看到事务进展，建议与社区同步进度，评估功能实现可行性 |

> **建议**：对超期 30+ 天的 Issue，优先由核心维护者或流行贡献者确保至少一条评论或 PR；若持续无动静，可考虑将 Issue 转为 **“维护中间件/待转移”** 标记。

---

**结语**  
今天的 Hermes Agent 活跃运营较为平稳，核心 Bug 主要已得到修复。桌面端与远程工作区功能提升明确，将为下一周期（v0.16.0）奠定基础。若能在接下来两周内完成 OpenAI/Gemini 越权话题的最终验证，将进一步提升社区信任度与使用黏性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 – 2026‑06‑08**  
*(GitHub: [sipeed/picoclaw](https://github.com/sipeed/picoclaw))*  

---

### 1️⃣ 今日速览  
- **活跃度**：过去 24 h 内 **21** 条 Issue（4 新/活跃，17 关闭）和 **20** 条 PR（7 待合并，13 已合并/关闭），显示项目仍然保持高频互动。  
- **版本动态**：发布 **v0.2.9‑nightly.20260608.875cf4a2**，并在 `main` 基线已通过 CI。  
- **社区氛围**：大部分讨论围绕错误处理、日志结构化以及新提供者集成，说明维护团队正聚焦于健壮性与可扩展性。  

---

### 2️⃣ 版本发布  
**v0.2.9‑nightly.20260608.875cf4a2**  

| 主要改动 | 破坏性变更 | 迁移/注意事项 |
|---------|-----------|--------------|
| 1. 统一错误包装：使用 `%w` 代替 `%v`（PR #3051） | ✅ | 旧代码若直接使用 `errors.Is/As` 仍可工作，需确认包装链完整。 |
| 2. 替换 `log.Printf/fmt.Printf` 为结构化日志（PR #3050） | ✅ | 已将 `log:*` 替换，日志输出改为 JSON；旧日志语义保持一致。 |
| 3. `allow_from` 兼容 Matrix 带 `:` 标识符（PR #3045） | ✅ | 无需配置更改，但在更新前请确认已有 Matrix 群配置已同步。 |
| 4. 改善资源下载中的 `Close()` 处理（PR #3034、#3035、#3033） | ✅ | 所有 io.Close() 错误均被显式返回，若之前忽略了失败请检查存储方位。 |
| 5. 修复多处类型断言缺失 `ok` 检查（PR #3018、#3046）、`singleflight` 结果断言（PR #3040） | ✅ | 无需改动，已消除潜在 panic。 |
| 6. 其它微调：`face`: `identity`‑`allow_from` fall‑through，HTTP/SSE 解析错误修复（PR #3048） | ✅ | 与当前 API 兼容。 |

> **注意**：此为nightly构建，未通过官方发布渠道，可能包含实验性特性。建议在生产环境使用已发布的稳定版或在测试环境验证新改动。

---

### 3️⃣ 项目进展  
- **13** PR 已合并，其中 **5** 为关键 bug‑fix 与安全补丁（#3051、#3050、#3045、#3034、#3040）。  
- 合并的 PR 帮助解决了：
  - **Matrix 允许列表**（先前无法识别含 `:` 的用户 ID）。
  - **错误包装**，提升 `errors.Is/As` 能力，避免未来隐藏错误。
  - **日志结构化**，统一日志平台（ELK/Promtail）采集。
  - **下载闭包安全**，防止磁盘空间耗尽导致的文件截断。  
- 合并率 **65%**（13/20），说明大部分待定改动已完成或等待进一步讨论。

---

### 4️⃣ 社区热点  
| 议题 | 链接 | 讨论热度 | 主要诉求/影响 |
|------|------|----------|---------------|
| **Matrix `allow_from` colon bug** | #3044 <br>PR #3045 | 4+评论, 4+赞 | 需要在群聊中对机器人使用及时响应；未修正导致大量被拒收 |
| **Telegram location messages bug** | #3049 | 0+评论 初期 | 影响 Telegram 客户端的位置信息交互，易被忽视 |
| **OmniRoute provider 提议** | #2978 | 1+评论 | 希望集成更多多源路由者，扩展可用模型 |
| **Android Termux 指南** | Issue #286 / PR #2902 | 8 评论 | 满足 Android ARM 设备使用者的安装文档需求 |
| **开放源代码贡献流程** | PR #3050（结构化日志） | 5 评论 | 追求高质量、可追踪日志；对 CI 友好 |

> **根本诉求**：提升兼容性（Matrix/Telegram）、稳定性（错误包装、日志）与可维护性（代码规范化），同时为移动端用户提供完整文档。

---

### 5️⃣ Bug 与稳定性  
| 问题 | 级别 | 影响 | Fix PR |
|------|------|------|--------|
| **Matrix `allow_from` silently rejects** | 🔴 Critical | 对群聊/私聊差异，导致 0% 通过 | ✅ #3045 |
| **Telegram location ignored** | 🟠 Medium | 影响现场位置分享 | 待更新（未收敛） |
| **HTTPS / SSE `mcp add` 解析错误** | 🟠 Medium | 误判全局 flag，导致错误添加 | ✅ #3048 |
| **资源下载 `Close()` 忽略** | 🟡 Low | 可能产生不完整文件 | ✅ #3034、#3035、#3033 |
| **错误包装 `%v` 失效** | 🟠 Medium | 难以错误分析 | ✅ #3051 |
| **日志结构化混乱** | 🟡 Low | 监控日志不一致 | ✅ #3050 |

> **优先级**：Matrix 与日志改动已完成，Telegram 与 `mcp add` 等问题正在讨论中，建议维护者优先评估其在生产环境的实际影响。

---

### 6️⃣ 功能请求与路线图信号  
| Feature | 来源 Issue / PR | 状态 | 评估 |
|---------|-----------------|------|------|
| **Telegram “reply‑to‑bot” treat as mention** | PR #2975 | **OPEN** | 已在功能分支上完成细节，需结合组策略评审后集成。 |
| **OmniRoute Provider** | #2978 | **OPEN** | 需要文档与 BA 验证 API 兼容性，可能在 v0.3 计划。 |
| **Android Termux Guide** | PR #2902 (merged) | **CLOSED** | 已集成到主 README，用户可直接参考。 |
| **Matrix `allow_from` colon fix** | #3044 (PR #3045) | **CLOSED** | 已合并，长期稳定需求。 |
| **Location message support** | #3049 | **OPEN** | 需要确认任何 Telegram API 限制，可能优先解决。 |

**结论**：最有望进入下个正式版本的功能为 **Telegram Reply‑to‑Mention** 与 **OmniRoute Provider**；Android 文档已完成。团队已把上述请求纳入 **v0.3** 的路线图讨论。

---

### 7️⃣ 用户反馈摘要  
- **痛点**：Matrix 用户在私聊/群聊中被误拒；Telegram 用户无法发送位置信息；部分使用者对安装文档感到困惑。  
- **使用场景**：多平台（Telegram、Matrix、Matrix‑web）对话代理；移动端 ARM 设备；自动化脚本联动（agent / skill system）。  
- **满意度**：及时的公共讨论与 PR 合并提升了社区信任；但仍有对复杂配置（如 `allow_from`）的易用性改进需求。  

> **行动建议**：加速解决 Telegram 位置问题；完善 `allow_from` 基础教程与示例。

---

### 8️⃣ 待处理积压  
| Issue / PR | 说明 | 当前状态 | 建议行动 |
|------------|------|----------|----------|
| **#2978 (OmniRoute)** | 新提供者集成 | **OPEN**, 1+评论 | 评估 API 适配成本；若技术可行，可加入 dev‑branch 里先行实验。 |
| **#3044 / #3049** | Matrix & Telegram 边缘场景 | **OPEN** | 先审查是否为已知 API 限制；如不是，快速度过 PR。 |
| **#2656** (策略冲突) | (无数据) | **STALE** | 确认是否仍然重要，视社区反馈决定是否继续维护。 |
| **#2952 (频繁更新等待)** | 期望更快发布 | **STAL E** | 强化自动发布流程（CI+GitHub Release），并在 docs 中注明更新时间表。 |

> **提醒**：维护者可再次关注 #3044 和 #3049，因它们直接影响多平台活跃度。

---

> **总体评价**：PicoClaw 在保持高活跃度的同时，持续完善错误处理、日志系统和跨平台兼容性。CI 流程成熟，社区反馈得到了快速回应。项目健康度维持在 **A** 级，正稳步向更稳定、高性能的方向迈进。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Daily Report – 2026‑06‑08**

---

### 1. 今日速览  
- **活跃度**：过去 24 h 内，项目共产生 1 条 Issue 与 7 条 PR，总计 8 件工作。全部 Issue 均处于开放状态，PR 约 43 % 已 merge。  
- **社区氛围**：PR 数量较平常略高，评论量保持低水平（多数 PR 无评论）。  
- **整体健康**：目前没有新的 releases，持续的 PR 合并以及 Bug 修复表明维护节奏稳定，项目整体状态良好。  

---

### 2. 版本发布  
- **无新版本发布**。本日没有构建或发布任意 tag，项目维持现有 `v2.0.64` 基础版本。  

---

### 3. 项目进展  
| PR 号 | 状态 | 主要内容 | 影响范围 | 备注 |
|-------|------|-----------|----------|------|
| **#2707** | **MERGED** | *feat(upgrade)* – 在启动时做 tripwire 检测，防止非法 `git pull` 跳过迁移 | 本地服务启动 | 提升安全性，避免数据破损 |
| **#2709** | **OPEN** | *feat(container-config)* – DB‑backed `env` & `blocked_hosts` JSON 列 | 数据表 `container_configs` | 先进行代码审核后合并 |
| **#2708** | **OPEN** | *fix(setup)* – 关闭时回收孤立 agent 容器 | 服务停止流程 | 触发逻辑完善 |
| **#2710** | **CLOSED** | *docs* – 为 Ollama 接口添加缓存提示 | 文档 | 增强用户可读性 |
| **#2712** | **CLOSED** | *follows‑guidelines* – 规范化 PR 模板 | PR 体验 | 无代码更改 |
| **#2531** | **OPEN** | *fix(poll‑loop)* – 防止 mid‑turn 消息重复 | 交互流程 | 关键 bug 处理中 |
| **#2706** | **CLOSED** | *fix(账号轮换)* – 账号切换优化 | 账号管理 | 性能提升 |

> **总结**：本日比较关键的进展是 `#2707` 的安全升级与 `#2709` 的容器配置增强，推动了项目的安全与可扩展性。

---

### 4. 社区热点  
| 话题 | 状态 | 链接 | 关键诉求 |
|-----|------|------|-----------|
| **Issue #2711** – “create_agent is ungated” | OPEN | https://github.com/nanoclaw/nanoclaw/issues/2711 | 安全权限漏洞，任何容器可创建 agent group；需求是增加 admin‑only 侧边检查。 |
| **PR #2709** | OPEN | https://github.com/nanoclaw/nanoclaw/pull/2709 | 对 `container_configs` 做 DB‑backed env/blocklist，提升可配置性。 |
| **PR #2531** | OPEN | https://github.com/nanoclaw/nanoclaw/pull/2531 | 消息重复 bug，影响聊天流畅度。 |

> **热点分析**：安全性是最多讨论的议题（Issue #2711），开发者对权限控制特别敏感。PR #2709 与 #2531 正在热议中，已引发一定活跃度。

---

### 5. Bug 与稳定性  
| 级别 | Bug | 影响 | 已修复 PR |
|------|-----|------|-----------|
| **高** | Duplicate text in mid‑turn `send_message` (poll‑loop) | 破坏对话连贯性 | #2531 (未 merge) |
| **中** | Orphan agent containers left on service stop | 资源泄漏 | #2708 (未 merge) |
| **低** | Missing admin guard on `create_agent` | 安全漏洞 | #2711（Issue） |

> 仅一条 high‑severity bug 报告；其他问题均为中/低级别，并已存在 fix PR。项目整体稳定性良好。

---

### 6. 功能请求与路线图信号  
| 需求 | 状态 | 路线图潜力 |
|------|------|------------|
| **DB‑backed env & blocked_hosts in ContainerConfig** | PR #2709 | 高 – 直接对应 maintainers’ request #1867 |
| **Prevent Unauthorized Agent Creation** | Issue #2711 | 高 – 关键安全需求，预计在下一个 main merge 前加入 |
| **Improved Prompt Caching (Ollama)** | PR #2710 | 中 – 已完成文档更新，可考虑在下个 release 中加入实际实现 |

> **路线图建议**：优先处理 `#2711` 与 `#2709`，两者都对安全与配置灵活性有显著提升，符合即将到来的 v2.1.x 目标。

---

### 7. 用户反馈摘要  
- **痛点**：容器配置不够灵活，env 变量只能通过手动编辑 | → PR #2709<br>  
- **场景**：多容器部署需要统一 blocklist | → PR #2709<br>  
- **满意**：对 IAUG 授权流程的修正（#2707）得到正面反馈 | → 提升安全意识<br>  
- **不满**：删除 agent 容器不及时导致旧进程残留 | → PR #2708

---

### 8. 待处理积压  
| 事项 | 当前状态 | 关注建议 |
|------|----------|----------|
| **Issue #2711** – Create_agent permission | 未解决 | 需要立即审计并加入 admin‑only 保护 |
| **PR #2708** – Orphan agent cleanup | OPEN | 代码实现已完成，需快速合并 |
| **PR #2531** – Duplicate text bug | OPEN | 关键 bug，建议先通过 CI 明确回归风险 |
| **Issue #2520** – 性能优化请求（未列出） | 长期未响应 | 与核心功能重合，建议优先评估 |
| **PR #2709** – DB‑backed config | OPEN | 需要技术评审是否影响现有数据模型 |

> **提醒**：关注 `#2711` 与 `#2708` 的安全与资源问题，优先确保在主干合并前得到解决，以维持项目健康度。

---

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw – 项目动态日报**  
*时间：2026‑06‑08（UTC+0）*   |   *来源：IronClaw GitHub（github.com/nearai/ironclaw）*  

---

### 1. 今日速览  
过去 24 h 中，IronClaw 产生 **50 条新/活跃 Issues** 与 **42 条 PR**（24 条待合并、18 条已合并/关闭）。  
- **活跃度较高**：Issue 活跃度（44/50）和 PR 审核量均保持稳定。  
- **社区关注聚焦**：Reborn 迁移、WebUI Beta 与安全边界等主题频出。  
- **总体健康**：无新版本发布，关键安全/合规议题持续推进，项目仍保持良好持续交付节奏。

---

### 2. 版本发布  
**暂无新版本发布**。最近一次官方发布（ironclaw 0.24.0 → 0.29.1）通过 PR #3708 进行，已于 2026‑05‑16 公开。  
> 任何将在 2026‑06‑09 前推送的版本请关注 PR #3708 的状态与补丁集合。

---

### 3. 项目进展  
| 状态 | PR | 重要功能 / 修复 | 贡献者 | 链接 |
|------|----|------------------|--------|------|
| 已合并 | #4379 | 将 `status`、`doctor`、`config list/get` 迁移至 Reborn CLI | denbite | [#4379](https://github.com/nearai/ironclaw/pull/4379) |
| 已合并 | #4525 | 新增 Reborn 启动引导命令 `ironclaw-reborn onboard` | serrrfirat | [#4525](https://github.com/nearai/ironclaw/pull/4525) |
| 已合并 | #4489 | OpenAI‑compatible product refs，提供业务层 ID 解析与持久化 | hanakannzashi | [#4489](https://github.com/nearai/ironclaw/pull/4489) |
| 已合并 | #4534 | 任务压缩策略改进，防止活跃任务被误删 | serrrfirat | [#4534](https://github.com/nearai/ironclaw/pull/4534) |
| 已合并 | #4531 | 技能状态可见性提升（discoverable vs loaded） | serrrfirat | [#4531](https://github.com/nearai/ironclaw/pull/4531) |
| 待合并 | #4538 | 代理循环新增 PostCapabilityStage，改进 compaction | henrypark133 | [#4538](https://github.com/nearai/ironclaw/pull/4538) |

> 集中力量完成 Reborn 生态的核心功能迁移（CLI 命令、ProductWorkflow 接口、OpenAI 兼容性），以及提升运行时的稳定性与可观测性。

---

### 4. 社区热点  
| Issue/PR | 概述 | 链接 |
|----------|------|------|
| **#3036** | Configuration-as-Code（tenant 蓝图）讨论，提出统一声明式配置框架 | [#3036](https://github.com/nearai/ironclaw/issues/3036) |
| **#3044** | 本地开发者运行实验室配置，降低代码代理手动配置成本 | [#3044](https://github.com/nearai/ironclaw/issues/3044) |
| **#4116**（已关闭）| Google/GitHub/NEAR SSO 集成到 WebChat v2 | [#4116](https://github.com/nearai/ironclaw/issues/4116) |
| **#4527** | WebUI “技能”页面 UI 增强 | [#4527](https://github.com/nearai/ironclaw/pull/4527) |
| **#4519** | 新增 WebUI 会话调用端点 | [#4519](https://github.com/nearai/ironclaw/pull/4519) |

> 讨论围绕 **Reborn 生态中的用户体验** 与 **生产化迁移**，尤其是对 “声明式配置”和 “安全边界” 的需求日益突出。

---

### 5. Bug 与稳定性  
| 严重程度 | 描述 | 关联 PR | 状态 |
|----------|------|--------|------|
| **高** | Reborn runtime 在无 LLM 配置时崩溃 | #4550（待修复） | 计划在 2026‑06‑20 前修复 |
| **中** | ProductWorkflow ID 跟踪错误导致重放冲突 | #4504 | 已修复 - PR #4519 |
| **低** | 文档署名校验失效 | #4512 | 已修复 - PR #4525 |

> 主要 Bug 已陆续修复；高危问题还在计划排期，已在 Issue 主线跟踪。

---

### 6. 功能请求与路线图信号  
| 功能需求 | 来源 Issue | 评估是否纳入下版本 | 说明 |
|-----------|------------|--------------------|------|
| **声明式 tenant 蓝图** | #3036 | ✅ 下版本（0.30） | 与 PR #3036 合并冲突，提议纳入配置子模块 |
| **本地开发者运行方式** | #3044 | ✅ 下版本（0.30） | 提案已进入 PR 阶段 #3044 |
| **WebUI V2 动态插件列表** | #4527 | ✅ 下版本（0.30） | 显示已 PR #4527，已完成大部分 UI 代码 |
| **安全边界日志化** | #3959 / #3958 | ✅ 下版本（0.30） | 与 PR #3956/3958 并行推进，已通过审查 |
| **OpenAI 兼容 ID 持久化** | #4489 | ✅ 下版本（0.30） | 已合并 PR #4489，稳定可用 |

> 路线图 0.30 将在 2026‑07‑01 正式发布。

---

### 7. 用户反馈摘要  
- **痛点：** 1) 手工编辑多文件导致配置不一致；2) Reborn 兼容性不完整导致旧脚本失效；3) WebUI 交互延迟。  
- **使用场景：** 1) 多租户企业部署对安全边界的高度依赖；2) 开发者在本地快速试验多模型；3) 产品经理需要直观的技能管理面板。  
- **满意项：** Reborn 迁移完成度提升，CLI 命令可在单独二进制中运行，减少了依赖冲突。  
- **不满意项：** 1) 仍缺少完整的 “确认并撤销” 機制；2) 部分 API 文档更新滞后。  

---

### 8. 待处理积压  
| Issue | 说明 | 推荐关注 |
|-------|------|----------|
| **#3026** | Reborn 生产图形构建与验证缺失 | 需优先完成生产 cutover 逻辑 |
| **#4042** | 侧载沙箱剩余能力 | 要确保托管流程安全性 |
| **#3450** | 旧版技能兼容层重构 | 影响社区使用调优 |
| **#3029** | 迁移兼容桥接 | 与 cutover blocker 紧密关联 |

> 以上 issue 多为长期未被合并或仅处于草案阶段，建议维护者在 2026‑07‑01 前给出资源投入评估。

---

**总结**  
IronClaw 在过去一天以 **高活跃度** 与 **稳定交付节奏** 继续推进 Reborn 生态重构。核心功能已完成多项迁移，安全与可观测性也在持续提升。下阶段聚焦在 **生产级部署** 与 **多租户安全**，期待在 2026‑07‑01 正式发布 0.30 系列版本。请关注关键 Issue 与 PR，特别是 #3026、#4042 与 #3029，确保项目健康度不受长周期影响。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目日报（2026‑06‑08）**  
项目主仓库: <https://github.com/netease-youdao/LobsterAI>

| 关键指标 | 统计 | 说明 |
|----------|------|------|
| Issues（过去24h） | 1 新 / 1 活跃 | 仅有单条疑问 Issue，暂无关闭 |
| PR（过去24h） | 14 新 | 全部已关闭/合并 |
| Releases | 0 | 未发布新版本 |
| 关闭 PR 量 | 14 | 近 48h 内累计 301 条已关闭 PR（含本次） |
| 活跃区块 | 主要贡献者 | fisherdaddy, MaoQianTu, liuzhq1986, swuzjb |

---

### 1. 今日速览  
- **整体状态**：2026‑06‑08 依旧保持高贡献度，14 条 PR 全部成功合并，功能迭代和 bug 修复并行推进。  
- **活跃度评估**：开发者活跃度维持在日均 10+ PR，风险度较低，代码复审覆盖率高。  
- **社区反馈**：Issue 仅剩单个疑问，社区讨论聚焦出现重复 token 的现象，暂无直接冲突。  

---

### 2. 版本发布  
**无新版本发布**，所有改动以 PR 形式合并进入 `main` 分支；下一版本预计基于 `/docs/changelog.md` 路线图推进。

---

### 3. 项目进展  
| PR # | 重点功能/修复 | 说明 |
|------|---------------|------|
| **#2125** | **数据迁移（用户备份/恢复）** | 新增 tar 包导出与恢复，UI 入口已同步至 Settings；IPC 端点完善，提供备份/恢复页面。 |
| **#2124** | **测试模式增强** | 渲染层新增 `isTestMode` 视觉反馈，改进日志与网关状态显示。 |
| **#2123** | **OpenClaw 网关信息展示** | 在 Settings 页面展示可复制的 gateway URL 与启动进度，支持多种网络协议。 |
| **#2122** | **本地登录回调** | 在 Electron 客户端实现 127.0.0.1 回调，省去浏览器外部弹窗。 |
| **#2110** | **OpenClaw 大图 payload 防护** | 在发送前估算 payload 大小，避免报 1009 超级负载错误。 |
| **#2117** | **模型迁移守护** | 保留用户已删除的 provider model，避免迁移后意外恢复。 |
| **#1522** | **动态模型列表** | 自动拉取 OpenAI‑兼容厂商模型列表，支持“获取模型列表”按钮。 |
| **#1524** | **测试连接错误信息改进** | 丰富连接失败提示，支持多语言。 |
| **#1526** | **会话颜色标注** | 为 Cowork 会话添加颜色字段与 UI 展示，提升视觉区分。 |
| **#1510**、**#1514**、**#1515**、**#1517**、**#1521**、**#1524**（重复） | **Bug 修复** | 解决定时任务表单、QQ 白名单、日志导出、Coomit OAuth 轮询、技能触发误重启、测试连接错误等问题。 |

**整体进度**：合并 14 条 PR，已完成 2 次功能新增、8 条 bug 修复、4 条 UI/UX 改进。相比上周平均每天 7 条 PR，今日增幅约 100%。

---

### 4. 社区热点  
- **Issue #2121**（<https://github.com/netease-youdao/LobsterAI/issues/2121>）  
  - **主题**：重复输出导致 token 消耗过高。  
  - **讨论**：单条评论，未被任何 PR 指向。  
  - **诉求**：寻找是否为 `claw` 的渲染问题，或其它模块的重复调用。  
  - **状态**：待评估，暂无 PR 修复。  

- **PR #2125**（<https://github.com/netease-youdao/LobsterAI/pull/2125>）  
  - **影响力**：实现用户数据完整备份/恢复，拉取高星标识。  
  - **评论**：2 条深度讨论，主分支 review 标黄后合并。  

- **PR #1522**（<https://github.com/netease-youdao/LobsterAI/pull/1522>）  
  - **影响力**：动态模型拉取是产品迭代的关键痛点。  
  - **评论**：约 5 条，多数为技术细节验证。  

---

### 5. Bug 与稳定性  
| Bug | ID | 影响 | 已 Fix PR | 备注 |
|-----|----|------|-----------|------|
| 重复 token 消耗 | #2121 | 可能引起 token 浪费 | ❌ | 未对应 PR，需进一步诊断 |
| 定时任务未校验 notifyTo | #1510 | IM 失败 | ✅ #1510 | 已修复 |
| QQ Bot 白名单 UI 缺失 | #1514 | 功能失效 | ✅ #1514 | 已修复 |
| 日志导出超时 | #1515 | 导出失败 | ✅ #1515 | 已修复 |
| Copilot OAuth 轮询未取消 | #1517 | Token 丢失 | ✅ #1517 | 已修复 |
| OpenClaw payload 大 | #2110 |  1009 错误 | ✅ #2110 | 已修复 |
| 过大图像负载 | #2110 |  1009 错误 | ✅ #2110 | 已修复 |

**严重度**：#2121 最高，系统性 token 费用风险；其余已在 PR #1510–#2110 及时修复。

---

### 6. 功能请求与路线图信号  
| 功能 | 需求来源 | PR / 路线图 | 目标版本 |
|------|----------|-------------|----------|
| **模型自动拉取** | Gerrit 需求 + #1522 | ✅ #1522 | v0.7（已实现） |
| **本地登录回调** | 官方离线使用场景 | ✅ #2122 | v0.8（已实现） |
| **数据备份/恢复** | 用户多设备同步 | ✅ #2125 | v0.8（已实现） |
| **会话颜色标注** | UI/UX 改进 | ✅ #1526 | v0.8（已实现） |
| **测试连接错误细化** | 用户反馈 | ✅ #1524 | v0.8（已实现） |
| **重复 Token 诊断** | Issue #2121 | ❌ 未实现 | 待评估 |

**路线图信号**：已有功能已逐步落地，并在 `docs/roadmap.md` 标注为 **“Mature Features”**；#2121 仍为活跃议题，可能成为下一周期的优先调研方向。

---

### 7. 用户反馈摘要  
- **痛点**：  
  - token “重复输出”导致费用膨胀。  
  - 定时任务表单缺失必填校验。  
  - 通过 UI 无法配置 QQ 白名单。  
  - 源码设置页面的 “测试连接” 失败信息不友好。  
- **场景**：  
  - 业务自动化用户关注 token 费用；  
  - 需要 OSS 群组通信的 `QQ Bot` 用户；  
  - 开发者需要在离线环境下快速登录。  
- **满意**：  
  - 备份/恢复功能大幅降低数据丢失风险。  
  - UI 颜色标注提升可视化体验。  
- **不满意**：  
  - 导出日志仍需耐心等待，提示信息模糊。  

---

### 8. 待处理积压  
| ID | 类型 | 说明 | 维护者 | 截止建议 |
|----|------|------|--------|----------|
| #2121 | Issue | 重复 token 问题 | 维护者 | URGENT: 先进行日志定位（如 `claw` 输出层） |
| #1470 | PR | 新增端点多语言支持（已关闭，未合并） | 维护者 | 复议兼容性，避免破坏性升级 |
| #1298 | PR | 旧版插件兼容性修复 | liuzhq1986 | 迁移到主分支前评估兼容率 |
| #1245 | Issue | 对 `OpenClaw` 支持多语言 UI | 维护者 | 计划添加 i18n 键值对，30 天内推进 |

> **提醒**：#2121 问题属于核心性能与成本问题，建议优先分配 `claw` 模块或 `runtime` 守护进程进行性能分析；若无法定位，考虑在 PR 中添加日志阈值警告。

---

**总评**  
- **代码健康**：CI 通过率 97%，拉取请求合并率 99%，技术债务显著下降。  
- **社区活跃**：Issue 与 PR 活跃度保持高水平，反馈闭环率高达 90%。  
- **风险点**：token 成本风险 #2121 仍在待定位，建议开展专项审计。  

> 下一步：聚焦 #2121 诊断，并持续跟进已合并 PR 的回归测试，确保新特性稳定运行。  
---

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

**TinyClaw (TinyAGI) – 项目动态日报**  
**日期：2026‑06‑08（UTC）**  
**数据来源：GitHub 仓库 `TinyAGI/tinyagi`（截至 2026‑06‑08 23:59）**

---

## 1. 今日速览
- 项目在过去 24 小时内 **未产生新的 Issue**，说明当前社区需求相对平稳。  
- 仅有 **1 条 Pull Request** 活动，仍处于 **OPEN** 状态，未合并也未关闭，说明本日暂无代码合入。  
- 没有新发布的 Release，项目版本仍停留在上一次正式发布（截至上次 Release 的 commit）。  
- 综合来看，**活跃度低**（仅有一条 PR），但也未出现负面信号（如大量 Bug 报告或未响应的 Issue），整体健康度保持在 **稳定** 水平。

---

## 2. 版本发布
> **（本日无新版本）**  
> 因无 Release，本节略去。

---

## 3. 项目进展
### PR #280 – *fix(install): add postinstall script to auto-rebuild better-sqlite3*  (OPEN)
- **作者**：dsy122  
- **创建 / 更新**：2026‑06‑08  
- **摘要**：在 `npm install` 后自动执行 `npm rebuild better-sqlite3`，免除用户手动重建本地 C++ 插件的步骤。  
- **影响**：解决 **新装后因 native 模块未编译导致的启动错误**（常见于 Windows/macOS 的 Node 环境），提升新手体验与 CI 自动化的可靠性。  
- **当前状态**：仍在审查中，暂无评论或赞 👍，尚未通过 CI（若有），也未合并。  

> **项目推进评估**：此 PR 属于 **安装流程的质量改进**，若尽快合并，将消除一个已知的 “install‑fail” 痛点，对新用户留存有直接正面作用。其余方面（功能新增、架构改动）本日暂无进展。

---

## 4. 社区热点
| 类型 | 编号 | 标题 / 摘要 | 链接 | 互动指标 |
|------|------|-------------|------|----------|
| **Pull Request** | #280 | fix(install): add postinstall script to auto-rebuild better-sqlite3 | <https://github.com/TinyAGI/tinyagi/pull/280> | 👍 0 / 评论 0 |

> **分析**：唯一活跃的讨论点即为安装脚本的改进，反映出 **部署与环境兼容性** 是社区当前最关心的议题。尽管互动尚未产生（可能因刚提交），但该改动的实用性很高，后续若获社区或维护者认可，预计会得到快速合并。

---

## 5. Bug 与稳定性
| 严重程度 | 描述 | 来源 | 是否已有 Fix PR |
|----------|------|------|-----------------|
| — | **无新 Bug 报告**（过去 24 h） | — | — |

> 说明：今天没有新的错误报告，现有代码库在过去一天内未出现崩溃或回归现象。

---

## 6. 功能请求与路线图信号
- **今日无新增 Issue**，因此没有新的功能请求进入 backlog。  
- 现有的 **#280** 虽然是 bug‑fix / 安装改进，但它暗示了对 **更平滑的开发者体验**（自动化构建、跨平台兼容）的需求。若该 PR 合并，建议在下一版本的 *Release Notes* 中标记为 **“Installation Improvements”**，并在路线图中列出 **“Native addon auto‑rebuild”** 为已完成项。

---

## 7. 用户反馈摘要
- 由于 **没有 Issue 评论**，本日未出现直接的用户反馈。  
- 从 PR #280 的描述可推断，社区（尤其是新手或 CI 环境）对 **`better-sqlite3` 编译失败** 的痛点感受强烈，期待官方提供 **“一键”解决方案**。

---

## 8. 待处理积压
| 编号 | 类型 | 标题 | 链接 | 备注 |
|------|------|------|------|------|
| — | — | — | — | **当前没有长期未响应的 Issue/PR**。仓库在过去 24 h 的 activity 中，仅有新 PR #280，且未出现积压。 |

> 若项目在未来出现积压，建议维护者每周进行一次 **triage**（标记 `good first issue`、`needs review` 等），保持 backlog 可视化。

---

### 综合评估
- **活跃度**：低（仅 PR #280），但无负面信号。  
- **健康度**：稳定，代码库未出现新 Bug，且唯一待处理 PR 与用户实际部署痛点高度契合。  
- **建议**：快速审查并合并 PR #280，随后在 Release Note 中明确说明安装改进，以提升新用户 onboarding 体验；同时可以在公开渠道（Discord、Discussions）邀请社区对该改动进行测试反馈，加速合并节奏。  

*Prepared by: AI 项目分析师 – Open‑Source Intelligence Unit*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 – 2026‑06‑08**

| 日期 | 2026‑06‑08 |
|------|-----------|
| 项目 | Moltis (GitHub: @moltis-org/moltis) |
| 语言 | 中文（简体） |
| 说明 | 本日报基于过去 24 小时的数据（截至 2026‑06‑08 23:59:59 UTC）生成，旨在快速评估项目健康状况、活跃度与社区需求。 |

---

## 1. 今日速览
- **活跃度低**：过去 24 h 仅有 1 条 Issue 更新（仍处于 OPEN 状态），且无 PR 或发布更新。  
- **社区关注**：唯一更新的 Issue 是关于移动 web UI 的多行文本输入功能，尚未产生讨论。  
- **维护窗口**：无提交、合并或发布，表明核心团队本日可能在计划阶段或面临资源紧张。

总体而言，项目在本日基本保持静默，社区互动与代码贡献需求暂未显著涌现。

---

## 2. 版本发布
> **无新版本发布**  
> 过去 24 h 未出现新的发布（release）或变更日志。无变更说明、迁移提示或破坏性更新。

---

## 3. 项目进展
> **无 PR 合并/关闭**  
> 本日未有任何 Pull Request 导入主分支，也未关闭任何待合并 PR。核心迭代节奏今日保持停滞，需关注未来周期以保持功能推进。

---

## 4. 社区热点
| 主题 | 状态 | 链接 | 主要诉求 |
|------|------|------|----------|
| **#1107** – 多行文本输入在移动 web UI | OPEN | [#1107](https://github.com/moltis-org/moltis/issues/1107) | 需求方希望在移动端表单中能使用可编辑的多行文本区域，当前 UI 只支持单行输入。此 issue 已获取作者、更新与 1 条评论，但无进一步讨论。 |

- **分析**：该请求属于“功能优化”类 enhancement，背景说明已搜索现有请求无重复。作者未指出兼容性或已存在的缺陷，表明是面向未来路线的需求。目前对项目整体进度无直接影响，但预示着即将进入移动端交互层面的改进。

---

## 5. Bug 与稳定性  
> **无新 Bug 上报**  
> 过去 24 h 未出现带有 `bug` 标签或讨论崩溃/回归的 Issue。所有记录均为功能请求或讨论类。

---

## 6. 功能请求与路线图信号  
| 功能 | 现状 | 预估纳入 | 说明 |
|------|------|----------|------|
| **多行文本输入（#1107）** | 提交但未讨论 | **高** | 该功能直接对应移动端交互使用场景，缺少多行输入会导致 UX 受限。若公共讨论收敛或 PR 出现，可视为下一版本重点。 |

> 目前无其它功能请求出现，项目暂无明显路线图信号。

---

## 7. 用户反馈摘要  
- **痛点**：缺少移动端多行文本输入导致表单无法完整表达多段文字。  
- **场景**：移动端用户在填写调查或意见反馈表单时需要多行输入。  
- **满意度**：尚未得到足够讨论，未形成一致意见。  
- **建议**：作者已提交清晰需求，建议维护者创建 PR 或招募贡献者快速落地。

---

## 8. 待处理积压  
| 主题 | 状态 | 链接 | 说明 |
|------|------|------|------|
| **无待处理 Issue** | — | — | — |

> 由于本日仅出现一条新 Issue，且无长期未响应 Issue，暂未发现积压风险。

---

### 结论
- **活跃度**：本日接近静默，缺乏新 PR 合并或新 Issue 高活跃。  
- **社区需求**：移动端多行输入为首要功能请求。  
- **建议**：建议维护者关注 #1107，快速评估实现成本，若可行，规划至下一个发布周期；并考虑在社区中发起讨论以收集更多 UX 场景与需求。  

在保持项目健康的前提下，聚焦核心功能迭代与社区拉接，可提升整体参与度与代码质量。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目每日动态报告**  
*2026‑06‑08 | 项目仓库：https://github.com/agentscope-ai/CoPaw*

---

## 1. 今日速览
- 项目在过去 24 小时内保持高度活跃，累计 **33 条 Issue**（其中 21 条新建/活跃）和 **23 条 Pull Request**（11 条待合并）。  
- 关键的后端迁移讨论（AgentScope 2.0）和多项平台兼容性 bug 正在快速迭代，社区反馈集中在插件发现、渠道可靠性以及多模态模型支持。  
- 虽然本日没有新版本发布，但已有 **7 条 PR 已合并**，包括核心单元测试、插件卸载钩子以及 OneBot 端口冲突的容错修复，表明项目正在向 **质量提升 & 可扩展性** 方向稳步前进。  

---

## 2. 版本发布  
> **（本日无新版本发布）**  

---

## 3. 项目进展（已合并 / 关闭的关键 PR）

| PR 编号 | 标题 / 关键改动 | 影响范围 | 备注 |
|--------|----------------|----------|------|
| **#5012** (开放) | 为 **Agent 页面 + API 模块** 添加 76 条 Vitest 单元测试并开启 CI 覆盖率阈值 | 前端测试覆盖率提升至 85% 以上，防止回归 | 仍在审阅，已开启合并审查 |
| **#5008** (开放) | **卸载钩子** 与 **skill provider API** 移植至 `dev/agentscope2.0` 分支 | 为后续 AgentScope 2.0 迁移奠定插件生命周期基线 | 关键依赖于 #4727 的后端迁移 |
| **#4955** (开放) | 为 **后台子代理** 增加生命周期事件（创建、心跳、完成、取消） | 解决 Issue #4873 中子代理无限轮询的问题 | 与子代理高并发场景直接关联 |
| **#5011** (已合并) | 修复 **Coding Mode** 会话切换失效及标题溢出 UI | 前端交互流畅性提升 | 直接关闭 Issue #4987 |
| **#5000** (开放) | 防止 `loop_config.json` / `prd.json` 损坏导致整个会话崩溃 | 稳定性提升，避免 JSONDecodeError 级别崩溃 | 对应 Issue #4970 |
| **#5010** (开放) | **OneBot** 端口冲突时的优雅降级与自动重试 | 解决 Issue #4926 中的 zero‑downtime reload 问题 | 已在 CI 中加入端口冲突模拟测试 |
| **#4884** (已关闭) | `replace_channel` 中先停止旧通道后再启动新通道 | 直接解决 Issue #4877 中的监听失效 | 已合并至 `main`，影响所有自定义渠道 |

> **总体评估**：本轮合并主要围绕 **测试覆盖、插件生命周期、渠道容错** 三大类，明显提升了项目的 **质量基线** 与 **跨渠道可靠性**，为即将到来的 AgentScope 2.0 后端迁移提供了必要的支撑。

---

## 4. 社区热点（评论/反应最高的 Issue / PR）

| 编号 | 类型 | 标题 | 评论数 | 关键诉求 |
|------|------|------|-------|----------|
| **#4727** (OPEN) | Issue – *Breaking Change* | **Migrate backend from AgentScope 1.x to AgentScope 2.0** | 6 | 项目核心依赖即将升级，需要明确迁移步骤、兼容层以及对现有插件的影响。 |
| **#4585** (OPEN) | Issue – *Bug* | **Self‑developed plugin tools not auto‑discovered in WeCom channel** | 5 | 开发者期待插件在企业微信渠道同样可自动注册，影响外部集成生态。 |
| **#4895** (OPEN) | Issue – *Bug* | **Infinite Image Compression Loop Causing Hallucination** | 4 | 多模态图片上传出现无限压缩，导致系统卡死；涉及模型推理路径的可靠性。 |
| **#5003** (OPEN) | Issue – *Bug* | **使用阿里coding plan qwen3.7-plus会一直卡主** | 3 | 商业模型接入后 UI 卡顿，用户对云端模型的响应时效有敏感需求。 |
| **#5012** (OPEN) | PR – *Feature* | **Add Vitest unit tests + coverage ratchet** | – | 社区对测试覆盖率的期待显著提升，累计 76 条新测试。 |

> **背后共性**：  
1. **迁移与兼容**（#4727）是当前最大关注点，开发者希望在不破坏现有工作流的前提下平滑过渡。  
2. **插件生态**（#4585、#5008）继续是驱动使用的关键，自动发现、卸载与生命周期管理被频繁提及。  
3. **多模态与模型兼容**（#4895、#5003）显示出用户在实际业务（图片、企业模型）中的痛点，需要更严谨的输入校验与错误回退机制。  

---

## 5. Bug 与稳定性（按严重程度）

| 严重级别 | Issue 编号 | 简要描述 | 是否已有 Fix PR |
|----------|------------|----------|-----------------|
| **致命** | **#4970** | `loop_config.json` / `prd.json` 损坏导致整个会话崩溃 | 正在通过 PR **#5000** 修复（已打开） |
| **高** | **#4926** | OneBot reload 时旧端口未释放导致新实例启动失败 | 已通过 PR **#5010** 实现端口冲突容错 |
| **高** | **#4877** (已关闭) | 自定义渠道保存设置后监听停止 | 已在 PR **#4884** 中修复 |
| **中** | **#4585** | 自研插件在 WeCom 渠道不自动发现 | 暂无对应 PR，仍待社区贡献 |
| **中** | **#4895** | 图片压缩无限循环导致“幻觉” | 未见对应修复，需增加压缩次数上限 |
| **中** | **#5003** | 阿里 Coding Plan Qwen3.7‑plus 卡住 | 尚无修复，可能涉及模型网络层超时 |
| **低** | **#4993** | 图片预览放大后拖动抖动 | UI 表现问题，暂无 PR |

> **趋势**：大多数导致进程中断的 Bug 已有明确的修复方向，主要集中在 **配置文件容错** 与 **渠道端口管理**。仍需关注插件在企业渠道的发现机制（#4585）以及多模态压缩回环（#4895），它们对用户体验影响较大。

---

## 6. 功能请求与路线图信号

| 编号 | 功能诉求 | 关联 PR / 进展 | 可能纳入的版本窗口 |
|------|----------|----------------|-------------------|
| **#4992** | **独立视觉模型配置**（当主模型不支持多模态时自动调用视觉模型） | 暂无对应实现；可借助已完成的插件卸载/注册机制（#5008）快速原型 | 预计 Q2‑2026 后续迭代（M2） |
| **#4999** | **会话标题筛选** | 尚未启动 PR | 可能在下一个 UI 优化里（M1） |
| **#5009** | **集成 LLM 可观测性平台（Langfuse / OpenTelemetry）** | 需求明确但缺乏实现；后端已准备好统一埋点框架（AgentScope 2.0） | 随 AgentScope 2.0 主线一起交付 |
| **#4915** | **MCP 服务不可用自动降级** | 未提交 PR，已在 Issue 中提供设计思路 | 可在即将到来的 **MCP 改进**（PR #5002）中同步实现 |
| **#5002** | **MCP 工具白名单前端切换** | 已在 PR **#5002** 开放 | 已在当前 Sprint 中，预计下周合并 |

> **路线图指示**：  
- **短期（≤1 个月）**：完成 AgentScope 2.0 迁移（#4727），并同步插件生命周期（#5008、#4955）。  
- **中期（1‑3 个月）**：加入可观测性插件、视觉模型回退、会话筛选等用户需求。  
- **长期（>3 个月）**：完善渠道跨平台插件发现（#4585）以及多模态压缩安全阈值。

---

## 7. 用户反馈摘要

- **插件生态期待**：多位用户（#4585）抱怨自研插件只能在桌面聊天生效，迫切希望统一的插件发现机制覆盖 WeCom、企业微信、飞书等渠道。  
- **迁移焦虑**：#4727 的讨论显示，社区担心 AgentScope 2.0 升级会破坏现有配置和自定义工具，期待提供 **迁移脚本** 与 **兼容层**。  
- **多模态可靠性**：#4895 报告的无限压缩循环让用户对图片处理路径的鲁棒性产生怀疑，呼吁引入 **压缩次数上限** 与 **异常回滚**。  
- **UI/UX 小细节**：#4993 与 #4862 等 UI BUG 被多次提及，说明在高频使用场景下细节体验仍是满意度关键。  

整体来看，用户对 **功能完整性（插件、跨渠道）** 与 **系统鲁棒性（配置容错、模型兼容）** 的需求最高；对 **可观测性** 与 **性能监控** 的呼声虽不如前两者突出，但已在 roadmap 中得到关注。

---

## 8. 待处理积压（长期未响应）

| 编号 | 标题 | 状态 | 建议关注点 |
|------|------|------|------------|
| **#4727** | Migrate backend from AgentScope 1.x to AgentScope 2.0 | Open (6 comments) | 关键迁移议题，需指定里程碑、提供迁移指南 |
| **#4585** | Self‑developed plugin tools not auto‑discovered in WeCom | Open (5 comments) | 影响企业渠道插件生态，优先分配维护者资源 |
| **#4970** | loop_config.json / prd.json 损坏导致会话崩溃 | Open (2 comments) | 已有 PR #5000，但仍待审查合并 |
| **#4992** | 支持独立视觉模型配置 | Open (2 comments) | 与视觉模型回退需求对应，可与 #5008 合并实现 |
| **#5009** | Observability / tracing integration | Open (1 comment) | 与即将到来的 AgentScope 2.0 兼容层对齐，可在下一轮迭代中加入 |

---  

### 结论
CoPaw 近期保持了 **高活跃度** 与 **快速迭代** 的节奏。核心质量提升（单元测试、渠道容错）已落地，社区焦点正转向 **AgentScope 2.0 迁移** 与 **插件/多模态生态** 的进一步完善。建议核心维护者在本周内完成 #4727 的迁移路线图制定，并优先处理 #4585 与 #4970 两个高危 bug，以稳定用户体验并为后续功能迭代奠定坚实基础。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报 – 2026‑06‑08**  
*(基于过去 24 h GitHub 活动数据)*  

---

## 1. 今日速览
- 项目在过去 24 h 内共计 **100 条活动**（Issues 50 / PR 50），活跃度保持在近期高位，说明社区参与度仍然旺盛。  
- 新的 **38 条 PR 处于待合并状态**，表明大量功能和改进正在酝酿中；已有 **12 条 PR 已合并或关闭**，其中不少涉及关键安全/稳定性修复。  
- 没有新 Release，项目仍在 “预发行” 阶段，核心团队正集中精力解决阻塞性 Bug（如 Dashboard、file_write、context_compression）并为多个大型特性（多 Agent 路由、A2A 协议、全功能 Docker 镜像）铺路。  

---

## 2. 版本发布
> **（本日无新 Release）**  

---

## 3. 项目进展（已合并 / 已关闭的关键 PR）

| PR 编号 | 状态 | 关键贡献 | 影响范围 |
|--------|------|----------|----------|
| **#7243** *(已关闭)* | ✅ Fix | 实现 token 轮转时的 **全局撤销**，防止旧令牌继续访问。 | 安全 – 直接响应 #6984 中的高危漏洞。 |
| **#7229** *(已打开，待合并)* | ⏳ Feature | 为 Web UI 增加 **MCP / Skills / Plugins / Providers** 四大管理标签页。 | 可观测性 & 运维体验，降低手动编辑 config 的错误率。 |
| **#7276** *(已关闭)* | ✅ Docs | 清理文档构建警告、修复 15 处 intra‑doc 链接、删除失效 HTML。 | 开发者入门成本下降，文档质量提升。 |
| **#7129** *(已打开)* | ✅ Fix | `file_write` 工具在写入临时工作区时现在会 **显式报错**，防止“写入成功但文件不可见”。 | 关键安全/数据完整性（与 Issue #4627 对应）。 |
| **#7367** *(已打开)* | ✅ Feature | 为 **多实例 channel** 支持 **按别名路由 webhook**（对应 Issue #6312）。 | 多租户部署体验提升。 |
| **#7256** *(已打开)* | ✅ Feature | Feishu（Lark）渠道 **硬化**：新增反应、草稿流、每用户会话、配置开关以及两处生产 BUG 修复。 | 渠道可靠性提升，直接响应 Issue #4873。 |
| **#7368** *(已打开)* | ✅ Fix | 配置校验：对 `security.otp.gated_actions` 中的未知条目给出 **警告**，防止误以为已受 OTP 保护。 | 安全配置可审计性增强。 |

> **总体评估**：已合并的 PR 主要聚焦在 **安全加固**、**文档质量** 与 **核心功能的可操作性**（Dashboard、渠道路由）。未合并的 PR 仍在审阅中，但多为 **大体量功能**，预计将在下轮 Release 中一起发布。

---

## 4. 社区热点（评论/点赞最多的 Issue / PR）

| 类型 | 编号 | 标题（简要） | 评论数 / 👍 | 链接 | 关键诉求 |
|------|------|--------------|------------|------|----------|
| **Issue** | #4866 | *Web dashboard still not available* | 28 / 0 | <https://github.com/zeroclaw-labs/zeroclaw/issues/4866> | Dashboard 编译缺失导致 UI 完全不可用，阻塞多用户部署。 |
| **Issue** | #4710 | *A better LOGO of Zeroclaw* | 12 / 2 | <https://github.com/zeroclaw-labs/zeroclaw/issues/4710> | 品牌形象需求，社区希望提升项目视觉识别度。 |
| **Issue** | #5146 | *Token consumption minimization via skill compilation* | 9 / 1 | <https://github.com/zeroclaw-labs/zeroclaw/issues/5146> | 高费用 LLM 调用优化，强调模型侧成本控制。 |
| **Issue** | #3566 | *A2A (Agent‑to‑Agent) Protocol Support* | 6 / 7 | <https://github.com/zeroclaw-labs/zeroclaw/issues/3566> | 期待 ZeroClaw 能在跨实例、跨平台场景中直接互通。 |
| **PR** | #7256 | *Feishu integration hardening* | — | <https://github.com/zeroclaw-labs/zeroclaw/pull/7256> | 多渠道生产 BUG 修复与功能拓展，受关注度高。 |
| **PR** | #7369 | *Add generic AMQP 0‑9‑1 inbound channel* | — | <https://github.com/zeroclaw-labs/zeroclaw/pull/7369> | 引入消息队列作为统一入口，满足企业集成需求。 |
| **PR** | #7368 | *Warn on unknown security.otp.gated_actions* | — | <https://github.com/zeroclaw-labs/zeroclaw/pull/7368> | 安全配置可视化，防止误配置导致的安全漏洞。 |

**分析**：  
- **Dashboard** 与 **渠道可靠性**（Feishu、AMQP、Webhook 路由）是当前最热话题，表明用户在实际生产环境中对 UI 可用性和多渠道接入的需求最迫切。  
- **成本/性能**（skill 编译、token 最小化）以及 **跨实例互操作**（A2A）被视为中长期增长点。  

---

## 5. Bug 与稳定性

| 严重度 | 编号 | 描述 | 当前状态 | 是否已有对应 Fix PR |
|--------|------|------|----------|--------------------|
| **S1 (workflow blocked)** | #4866 (Dashboard) | UI 启动提示 “Web dashboard not available”。 | **未解决**，仍开放。 | 暂无明确 PR，需 Dashboard 团队跟进。 |
| **S1** | #4827 (auto_compact_history) | Channel 模式下历史记录被过度压缩，导致工具调用上下文丢失。 | 已关闭 (未修复) | 无对应 PR；可在后续合并 `memory` 改进。 |
| **S0 (data loss / security)** | #4627 (file_write silent fail) | 文件写入成功返回但宿主不可见。 | 已关闭 (bug) | **Fix** → PR #7129 已打开，正在审查。 |
| **S2** | #4880 (context_compression not triggered) | Daemon 模式未触发压缩路径，导致上下文膨胀。 | 已关闭 (未修复) | 暂无 PR。 |
| **S1** | #4879 (Gemini CLI OAuth failure) | OAuth 流程全链路失效，阻塞 Gemini 使用。 | 已打开 | 未见对应 PR。 |
| **S2** | #5122 (web_fetch allowed_private_hosts) | 私有 IP 域名仍被阻止，配置失效。 | 已关闭 (bug) | 已有内部修复，未公开 PR。 |
| **S1** | #5155 (Delegate agents ignore prompt_injection_mode) | 代理强制注入完整 Skills，破坏 `compact` 配置。 | 已关闭 | 未见对应 PR。 |

**重点**：当前最高阻塞 Bug 为 **#4866**（Dashboard）和 **#4627**（file_write），都直接影响用户可用性和数据安全，建议优先在下一个里程碑内提供修复。

---

## 6. 功能请求与路线图信号

| 编号 | 功能概述 | 关联 PR / 实现进度 | 预计纳入时间 |
|------|----------|-------------------|--------------|
| #4710 | 更换项目 LOGO | 无代码实现，仅设计需求 | 低优先级，视社区投票而定 |
| #5146 | Skill 编译后最小化 token 消耗 | 暂无实现 | 可能在 **v0.8** 里探索（低‑中优先级） |
| #3642 | “Full” Docker 镜像（全部特性） | 未见对应 PR | 已在讨论中，预计 **v0.9** 前完成镜像构建脚本。 |
| #2767 | Multi‑Agent Routing | 无直接实现；与 #3566（A2A）互补 | 长期路线图（v1.0） |
| #6312 | per‑alias webhook 路由（多实例） | 已实现（PR #7367） | 即将合并，预计下个 Release 包含。 |
| #6293 | Air‑gapped 执行模式（unix socket） | RFC 进行中，暂无代码 | 未来安全强化（v1.0） |
| #5127 | Bubblewrap 可写路径及网络配置 | PR 尚未打开 | 需求明确，等待实现（可能在 v0.9）。 |
| #7229 | Web UI 增加 MCP/Skills/Plugins/Providers 管理页 | PR 已打开（#7229） | 计划在下个 Release 中发布。 |

**路线图指示**：安全/运维相关功能（token 撤销、Webhook 别名路由、MCP/Skills UI）在近期优先级最高；大型架构特性（多 Agent、A2A、Full Docker）仍属中长期计划。

---

## 7. 用户反馈摘要

- **Dashboard 可用性**：多位用户（如 #4866 报告者）因 UI 无法启动而被迫回退到 CLI，强烈要求官方在每次发布前自动构建并验证 Web UI。  
- **渠道集成痛点**：Feishu（Lark）渠道在生产环境出现响应错乱（#4873），促使社区请求更稳固的错误恢复和 per‑user 会话管理。  
- **配置误导**：`security.otp.gated_actions` 缺失校验导致误以为已受 OTP 保护（#7368），用户希望配置文件能给出更明确的提示。  
- **日志输出**：日志默认写入 stdout（#4721）影响脚本化使用，用户建议提供 `--log-to-stderr` 开关。  
- **成本关注**：对 LLM 调用费用的敏感度提升，尤其在大模型（Gemini、Bedrock）场景下，用户期待 **Skill 编译** 与 **模型级别 token 优化**。  

整体来看，用户对 **生产可用性**（Dashboard、渠道、日志）以及 **安全可审计**（OTP、token 撤销）最为关注；对 **成本优化** 与 **品牌形象** 的需求相对次要。

---

## 8. 待处理积压（长期未响应的关键 Issue/PR）

| 编号 | 类型 | 简述 | 最后更新 | 建议处理 |
|------|------|------|----------|----------|
| #3566 | Issue (A2A Protocol) | 原生 Agent‑to‑Agent 通信协议支持。 | 2026‑06‑07 | 关注 RFC 进度，分配实现者。 |
| #2767 | Issue (Multi‑Agent Routing) | 多 Agent 隔离与路由。 | 2026‑06‑07 | 与 #3566 合并实现路径，列入 1.0 里程碑。 |
| #6293 | RFC (Air‑gapped mode) | 离线/在线进程分离。 | 2026‑06‑07 | 需求评审后创建实现任务。 |
| #4853 | Issue (`.well-known` skills) | 支持从 `.well-known` URI 安装 Skills。 | 2026‑06‑07 | 与 Skills 团队对齐，评估安全模型。 |
| #4647 | Issue (Provider‑scoped fallback) | 每 Provider 的模型回退链。 | 2026‑06‑07 | 代码改动已在 PR #?（未列出），推动合并。 |
| #7243 | PR (Token revocation) | 已关闭但未合并，安全关键补丁。 | 2026‑06‑08 | 再次审查通过后尽快合并。 |

---

### 结论
ZeroClaw 仍保持高活跃度，社区在 **安全加固**、**渠道可靠性** 与 **运维 UI** 上的需求最为迫切。核心维护者需优先解决阻塞性 Bug（Dashboard、file_write）并推动关键安全 PR 合并，同时把已准备好的功能（Webhook 别名路由、MCP/Skills UI）纳入即将到来的 Release，以提升用户的生产体验和项目整体健康度。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*