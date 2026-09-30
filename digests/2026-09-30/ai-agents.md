# OpenClaw 生态日报 2026-09-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-30 03:03 UTC

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

# OpenClaw 项目日报 — 2026-09-30

**数据来源**: github.com/openclaw/openclaw | Issues 500/PRs 500/Release 1

---

## 1. 今日速览

OpenClaw 今日活跃度极高，Issues 与 PRs 单日更新均达 500 条，表明开发节奏持续高位。新发布 `v2026.8.33` extended-stable（等同 LTS）分支修复关键安全问题，而主线版本已至 `2026.9.6`。社区聚焦**内存泄漏**、**SQLite WAL 失控**、**Gateway 崩溃循环**三大稳定性痛点，P0 级 Issue 密集出现，项目整体处于功能扩张与稳定性攻坚并行的阶段。

---

## 2. 版本发布

**v2026.8.33（extended-stable / LTS 等效版）**
- 定位：gateway-only 稳定分支，含 8 月底基线 + 安全更新 + 可靠性/性能修复 + 新模型支持
- 当前主线最新：`2026.9.6`
- 迁移注意：extended-stable 与主线存在功能差，升级主线前需确认插件兼容性

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 方向 | 价值 |
|---|---|---|
| [#161488](https://github.com/openclaw/openclaw/pull/161488) | 插件清理：保留 reclamation 错误 | 提升清理失败可观测性 |
| [#161499](https://github.com/openclaw/openclaw/pull/161499) | 测试：保留兼容 Gateway 监听 | 修复启动测试竞态 |
| [#161514](https://github.com/openclaw/openclaw/pull/161514) | 日志：保留脱敏模式边界扫描 | 修复 #161089 回归 |
| [#161549](https://github.com/openclaw/openclaw/pull/161549) | Doctor：忽略 workspace 移动后归档备份 | 消除误报警 |
| [#161553](https://github.com/openclaw/openclaw/pull/161553) | 会话状态事件比对修复 | 解决 team.openclaw.ai 每小时 12 次日志风暴 |
| [#161551](https://github.com/openclaw/openclaw/pull/161551) | GitHub 发布选项读取优化 | 消除 snapshot 冲突导致的 FORBIDDEN |

项目当日向前推进主要集中在**基础设施清理**、**测试稳定性**与**启动/迁移可靠性**，无重大功能上线。

---

## 4. 社区热点

- **[#143524](https://github.com/openclaw/openclaw/issues/143524)**（94 论）：SQLite WAL 单日涨至 2.8 GB 并阻塞 Gateway 启动（Windows）— 用户诉求：自动 checkpoint 机制失效需根因修复
- **[#119720](https://github.com/openclaw/openclaw/issues/119720)**（21 论）：同步持久化阻塞事件循环 — 维护者已部分重写，仍待验证
- **[#157531](https://github.com/openclaw/openclaw/issues/157531)**（16 论）：2026.9.7 修复追踪器 — 社区主动参与版本质量控制
- **[#159596](https://github.com/openclaw/openclaw/issues/159596)**（9 论，👍2）：prepared-model-catalog 内存锯齿 — 每日 200 次内存压力事件，用户强烈要求限制 worker 堆增长

---

## 5. Bug 与稳定性（按严重度排列）

**P0 — 阻断发布/崩溃**
- [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL 失控增长，Gateway 无法启动（已有 fix PR 待合并）
- [#157325](https://github.com/openclaw/openclaw/issues/157325) agent-DB 资源卡住导致所有 agent 回复失败，需重启 Gateway
- [#158095](https://github.com/openclaw/openclaw/issues/158095) state-lifecycle 占用后所有 acquire 失败
- [#155859](https://github.com/openclaw/openclaw/issues/155859) Gateway 启动时间随插件数线性增长（discord/codex/weixin 占 120s）
- [#159662](https://github.com/openclaw/openclaw/issues/159662) prepared-model-catalog worker 每小时涨 4-5 GB
- [#159094](https://github.com/openclaw/openclaw/issues/159094) Gateway 持有 lease 但 worker 报告被占用
- [#154812](https://github.com/openclaw/openclaw/issues/154812) RSS 超出 V8 堆导致 OOM
- [#160548](https://github.com/openclaw/openclaw/issues/160548) prepared-model-catalog worker 每 5 分钟 leak ~1 GiB
- [#158936](https://github.com/openclaw/openclaw/issues/158936) macOS app watchdog SIGTERM 慢启动 Gateway
- [#157415](https://github.com/openclaw/openclaw/issues/157415) Doctor --fix 拒绝外部分安装的 acpx/codex 迁移

**P1 — 会话/消息丢失或重大回归**
- [#111897](https://github.com/openclaw/openclaw/issues/111897) 并发 lane 重复回复
- [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程 zombie 累积
- [#121661](https://github.com/openclaw/openclaw/issues/121661) CLI subagent 伪造 tool calls
- [#121953](https://github.com/openclaw/openclaw/issues/121953) DeepSeek cron 任务被降级
- [#127148](https://github.com/openclaw/openclaw/issues/127148) sessions.compact 写入冲突
- [#150132](https://github.com/openclaw/openclaw/issues/150132) claude-cli stdout 8MiB cap 截断长回复
- [#154572](https://github.com/openclaw/openclaw/issues/154572) sessions_spawn claude-cli 失败
- [#132303](https://github.com/openclaw/openclaw/issues/132303) tools.deny 对 claude-cli 后端无效
- [#150635](https://github.com/openclaw/openclaw/issues/150635) 记忆保留 nightly 被驱逐，dreaming 阶段无法提升
- [#125570](https://github.com/openclaw/openclaw/issues/125570) Skill Workshop 更新覆盖 description 导致路由失效
- [#159612](https://github.com/openclaw/openclaw/issues/159612) subagent 重试永远 "owner changed"
- [#157630](https://github.com/openclaw/openclaw/issues/157630) --max-old-space-size 覆盖 worker resourceLimits
- [#157575](https://github.com/openclaw/openclaw/issues/157575) 托管 Gateway 堆标志覆盖 per-worker 限制
- [#157617](https://github.com/openclaw/openclaw/issues/157617) session writer 队列等待数分钟

**已有 fix PR 的问题**：#158095、#157325、#159612、#159662、#160548、#154812、#158936、#157415、#152839、#155859、#157630、#157575、#157617

---

## 6. 功能请求与路线图信号

- **[#160352](https://github.com/openclaw/openclaw/pull/160352)**（XL，多种模型扩展）：Ultrafast 账户选择 — 接近主线，可能入 2026.9.7
- **[#157679](https://github.com/openclaw/openclaw/pull/157679)**（XL）：部署特定 supervisor 指引 — 提升托管体验
- **[#161114](https://github.com/openclaw/openclaw/pull/161114)**（XL，P1）：subagent 暂停后唤醒请求者 — 会话模型关键增强
- **[#156341](https://github.com/openclaw/openclaw/issues/156341)**（P3 RFC）：task-scoped 决策模型 — 路线图远期信号
- **[#16670](https://github.com/openclaw/openclaw/issues/16670)**（P2）：Onboarding 必填记忆/embedding 步骤 — 新用户留存相关
- **[#153706](https://github.com/openclaw/openclaw/issues/153706)**：closed ACP sessions 投射错误 runtime — 需清理隐式状态

---

## 7. 用户反馈摘要

**痛点集中区**：
1. **内存不可控**：prepared-model-catalog worker 在多份报告中确认每 5-60 分钟增长 1-10 GB，托管环境尤其严重
2. **SQLite 可靠性**：WAL 不 checkpoint、integrity_check 冗余执行、迁移恢复失败 — Windows/Synology NAS 用户高频中招
3. **Gateway 启动慢**：插件数量直接转化为启动延迟，discord/codex/weixin 是重灾区
4. **claude-cli 后端隐蔽缺陷**：tools.deny 失效、stdout cap 截断、sessions_spawn 反弹错误 — 用户感觉"配置被无视"
5. **更新流程脆弱**：macOS npm update 全局安装交换失败、managed preflight 失败

**满意/亮点**：Doctor 修复能力、Skill Workshop 更新机制、多账号微信/Feishu 通道稳定运行

---

## 8. 待处理积压（提醒维护者）

- **[#119720](https://github.com/openclaw/openclaw/issues/119720)**（21 论，P1，diamond lobster）：事件循环阻塞 — 已部分重写，仍缺最终验证
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)**（16 论，回归）：子进程 zombie 泄漏 — 自 6 月起未闭环
- **[#125570](https://github.com/openclaw/openclaw/issues/125570)**（9 论，P1）：Skill Workshop 覆盖 description — 影响路由正确性
- **[#126246](https://github.com/openclaw/openclaw/issues/126246)**（7 论，P1）：Telegram 消息卡 send_attempt_started
- **[#158231](https://github.com/openclaw/openclaw/issues/158231)**、[#154924](https://github.com/openclaw/openclaw/issues/154924)：更新失败报告需跟进 root-cause
- **[#161080](https://github.com/openclaw/openclaw/pull/161080)**（P1 PR）：启动恢复容量预算无上限 — 已提交待合并
- **[#123774](https://github.com/openclaw/openclaw/pull/123774)**：Windows 隐藏 launcher 孤儿问题 — 自 8 月悬而未决

---

**健康度评估**：🔴 功能活跃度极高，🟡 稳定性是当前最大风险点。P0 Issue 集中在内存与 SQLite，建议下一版本（2026.9.7）优先处置 prepared-model-catalog worker leak 与 WAL checkpoint，否则 Gateway OOM 与启动失败将继续阻塞生产部署。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

## 1. 生态全景

2026年9月末，个人 AI 助手与自主智能体开源生态呈现出**高度活跃但分化明显**的态势。核心项目如 OpenClaw、Hermes Agent、PicoClaw 等聚焦于**基础设施稳定性、桌面端体验与插件生态**，而 NanoBot、CoPaw 则强调**多端协同与任务调度**。整体来看，生态正从“功能快速迭代”向“稳定性与可扩展性”双重追求转型，社区活跃度普遍较高，但部分项目仍面临长期积压的技术债务。

---

## 2. 各项目活跃度对比

| 项目 | Issues (今日) | PRs (今日) | Release 情况 | 健康度评估 | 关键特征 |
|------|--------------|------------|--------------|------------|----------|
| **OpenClaw** | 500+ | 500+ | v2026.8.33 (extended-stable) | 🔴 高风险 | 内存泄漏、SQLite WAL 失控、Gateway 崩溃是核心痛点 |
| **NanoBot** | 43 | 38 | 无新版本 | ⚡ 良好 | 会话管理、subagent 协同、内存优化是主线 |
| **Hermes Agent** | 50 | 50 | 无正式版本 | 良好 | 桌面端 UI 修复、插件兼容性、跨平台稳定性 |
| **PicoClaw** | 6 | 3 | 无新版本 | 良好 | Web UI 重构、subagent 系统、附件传输优化 |
| **NanoClaw** | 15 | 7 | 无新版本 | 稳定 | 日志鲁棒性、arm64 支持、gateway 状态管理 |
| **NullClaw** | 1 | 1 | 无新版本 | 稳定 | 内部版本打磨、细节修复 |
| **IronClaw** | 2 | 3 | v1.4.1 (稳定版) | 良好 | OAuth 修复、Wasmtime 安全更新、稳定发布 |
| **LobsterAI** | 11 | 8 | 无新版本 | 活跃 | 网关重启预算、安装体验、渲染器增强 |
| **TinyClaw** | 0 | 0 | 无新版本 | 稳定 | 无活动，处于维护期 |
| **Moltis** | 1 | 0 | 无新版本 | 维护期 | 仅有 Goal mode/Ralph loop 提案 |
| **CoPaw** | 38 | 8 | 无新版本 | 活跃 | TaskTracker 僵尸条目、Termination 设置、市场源支持 |
| **ZeptoClaw** | 0 | 0 | 无新版本 | 稳定 | 无活动 |
| **ZeroClaw** | 0 | 0 | 无新版本 | 稳定 | 摘要生成失败 |

**活跃度分层**：
- **高活跃期**：OpenClaw、Hermes Agent、LobsterAI、CoPaw（PR 合并/关闭频繁，Issues 评论活跃）
- **中等活跃期**：NanoBot、PicoClaw、NanoClaw、IronClaw、NullClaw、TinyClaw、ZeptoClaw、ZeroClaw（功能迭代为主，稳定性重点）
- **维护期**：Moltis（仅有提案未落实）

---

## 3. OpenClaw 在生态中的定位

### 优势
- **核心基础设施**：作为生态首个“门户级”项目，OpenClaw 提供了 Gateway、Memory、State 等核心组件，成为其他项目的基石。
- **稳定性导向**：v2026.8.33 作为 extended-stable 分支，优先修复内存泄漏与 SQLite WAL 问题，体现了对生产环境的严谨要求。
- **社区规模**：今日 Issues 与 PR 均突破 500 条，社区参与度最高，吸引了大量对底层稳定性感兴趣的开发者。

### 技术路线差异
- **架构**：OpenClaw 采用 **Gateway 中心化** 模式，所有智能体通过 Gateway 统一调度，强调**状态一致性**与**可观测性**（如 P0 Issue 中的 memory leak、SQLite WAL 失控）。
- **生态定位**：定位为**“基础设施 + 核心模型支持”**，与 NanoClaw（日志鲁棒性）、Hermes Agent（桌面端体验）形成互补。
- **社区规模**：与 NanoBot（45条更新/日）和 CoPaw（38条更新/日）相比，OpenClaw 的开发频率最高，但也伴随更大的稳定性挑战。

### 社区规模对比
| 项目 | 社区活跃度 | 典型用户画像 |
|------|------------|-------------|
| OpenClaw | ★★★★★ | 开发者、研究者、企业级集成 |
| Hermes Agent | ★★★★☆ | 桌面端用户、自动化运维 |
| PicoClaw | ★★★★☆ | Web UI 开发者、插件爱好者 |
| CoPaw | ★★★★☆ | 多端协作、任务调度需求者 |
| NanoBot | ★★★☆☆ | 智能体集成、微服务架构 |
| 其他 | ★★☆☆☆ | 维护期项目 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 影响范围 |
|----------|----------|----------|----------|
| **内存管理与泄漏** | OpenClaw、NanoClaw、PicoClaw | prepared-model-catalog worker 内存泄漏、SQLite WAL 失控 | 影响所有依赖长期运行的智能体 |
| **状态一致性与可观测性** | OpenClaw、Hermes Agent、CoPaw | State-lifecycle 占用后 acquire 失败、Session 状态同步 | 影响多端协同与长任务执行 |
| **多端协同与任务调度** | CoPaw、OpenClaw、IronClaw | Goal mode/Ralph loop、TaskTracker 僵尸条目 | 决定智能体在复杂工作流中的表现 |
| **插件/市场源生态** | NanoBot、CoPaw、NullClaw | Custom Marketplace、Skill Workflow | 决定可扩展性与定制化能力 |
| **安全与权限控制** | IronClaw、Hermes Agent | OAuth 权限、Wasmtime 安全补丁 | 影响生产环境的合规性与安全性 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Hermes Agent | PicoClaw | CoPaw |
|------|----------|---------|--------------|----------|-------|
| **核心定位** | 基础设施 + 核心模型支持 | Web UI 体验与 session 管理 | 桌面端智能体调度 | Web UI 重构与 subagent 系统 | 任务调度与多端协同 |
| **目标用户** | 开发者、企业集成者 | 自动化运维、微服务 | 桌面端用户 | Web 开发者、插件工程师 | 多任务协作者 |
| **技术架构** | Gateway 中心化、状态机驱动 | 事件驱动、subagent 协同 | 进程级调度、插件化 | 轻量级 Web UI、状态队列 | 任务循环、长时间工作流 |
| **稳定性策略** | 优先修复 P0 级内存/数据库问题 | 关注内存泄漏与性能优化 | 重点解决 UI 卡顿与插件兼容 | 优化 WebSocket 与状态同步 | 强化任务追踪与状态一致性 |
| **社区活跃度** | 最高（500+/日） | 中等（40-50+/日） | 高（50+/日） | 中等（30-40+/日） | 高（35-45+/日） |

**关键差异**：
- **OpenClaw** 是**生态枢纽**，其稳定性直接影响其他项目的上层应用。
- **Hermes Agent** 侧重**本地端体验**，在桌面环境中表现突出。
- **CoPaw** 则是**任务调度专家**，其“Ralph loop”概念与 OpenClaw 的状态管理有深度交叉。
- **NanoBot/PicoClaw** 聚焦**Web UI 与 session 管理**，是多端协同的实践案例。

---

## 6. 社区热度与成熟度

| 项目 | 热度等级 | 成熟度 | 说明 |
|------|----------|--------|------|
| **OpenClaw** | 🔥 热 | 高 | 开发频率最高，P0 级稳定性问题突出，社区关注度最高 |
| **Hermes Agent** | 🔥 热 | 高 | 桌面端问题频发，修复速度快，社区活跃 |
| **CoPaw** | 🔥 热 | 高 | 多功能需求多样，PR 合并频繁，用户反馈丰富 |
| **NanoBot** | 🟠 中 | 中 | 功能迭代快，但某些核心 Bug 仍未闭合 |
| **PicoClaw** | 🟠 中 | 中 | Web UI 优化是主线，稳定性良好 |
| **NanoClaw** | 🟢 稳定 | 稳定 | 无新版本，处于维护期 |
| **IronClaw** | 🟢 稳定 | 稳定 | 稳定版发布，安全补丁及时 |
| **LobsterAI** | 🟢 活跃 | 活跃 | 功能需求明确，社区参与度高 |
| **Moltis** | 🟡 维护 | 维护 | 仅有提案未落实，技术路线不明确 |
| **其他** | 🟢 稳定 | 稳定 | 无新增活跃度 |

**成熟度分层**：
- **成熟期**：OpenClaw、Hermes Agent、IronClaw（稳定版已发布，问题已基本修复）
- **成长期**：CoPaw、NanoBot、PicoClaw（功能迭代快，稳定性良好）
- **维护期**：Moltis、NullClaw、TinyClaw、ZeptoClaw、ZeroClaw（无新增活跃度，技术债务积压）

---

## 7. 值得关注的趋势信号

1. **内存与状态管理成为共性痛点**  
   - OpenClaw（prepared-model-catalog 内存泄漏）、NanoClaw（memory pressure）、CoPaw（TaskTracker 僵尸条目）均指向**状态持久化与资源回收**的技术难题。未来的智能体项目需在**生命周期管理**上投入更多精力。

2. **多端协同与任务调度的需求上升**  
   - CoPaw 的 Goal mode/Ralph loop、OpenClaw 的 Gateway 状态同步、Hermes Agent 的多端插件兼容，表明**跨任务、跨平台的协同能力**是下一代智能体的核心竞争力。

3. **安全与权限控制的强化**  
   - IronClaw 的 OAuth 修复、Wasmtime 安全补丁、NanoClaw 的 OAuth 作用域配置，显示出**安全合规**将成为生态发展的必然趋势。

4. **Web UI 体验与可观测性**  
   - Hermes Agent、PicoClaw、CoPaw 都在积极优化 UI 响应与状态可视化，这与 OpenClaw 的“可观测性优先”理念一致，**可观测性**将成为质量标尺。

5. **插件/市场源生态的扩展**  
   - NanoBot 的 custom market source 请求、CoPaw 的 skill marketplace 想法，反映出**可扩展性**是智能体项目的关键差异化因素。

---

## 结论与建议

- **OpenClaw** 作为生态基石，其稳定性问题直接影响整个生态的健康度。建议优先解决 **prepared-model-catalog 内存泄漏** 与 **SQLite WAL 失控**，同时完善 **Gateway 状态一致性** 机制。
- **Hermes Agent** 与 **CoPaw** 在桌面端与任务调度领域表现突出，应继续深化 **多端协同** 与 **状态管理** 能力，以满足复杂工作流的需求。
- **NanoBot** 与 **PicoClaw** 在 Web UI 与 session 管理上处于领先地位，建议保持现有迭代节奏，同时关注 **跨端状态同步** 的技术挑战。
- **Moltis** 等项目处于维护期，建议在后续迭代中引入 **Ralph loop** 等先进调度机制，以提升长期任务的自主性。

整体来看，该生态正从“功能快速迭代”向“稳定性与可扩展性”双重追求转型，**内存管理、状态一致性、多端协同**是所有项目共同关注的技术方向。开发者应优先关注这些核心问题，以确保智能体在生产环境中的可靠性与可用性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-09-30)

## 1. 今日速览

项目今日保持**高活跃度**状态，24小时内共处理 43 条更新（Issues 5条 + PRs 38条）。PR 合并/关闭速率达 15 条，表明开发节奏紧凑。无新版本发布，但核心功能重构与多项关键修复正在并行推进。整体来看，项目处于功能迭代与稳定性修复并重的阶段。

## 2. 版本发布

**无新版本发布**

## 3. 项目进展

### 今日合并/关闭的重要 PR：

| PR | 内容 | 影响 |
|---|---|---|
| [#5968](https://github.com/HKUDS/nanobot/pull/5968) | fix(providers): honor configured fallbacks on "insufficient credits" | 修复 Fallback 机制在信用不足时的失效问题 |
| [#5976](https://github.com/HKUDS/nanobot/pull/5976) | fix(my): scope subagent snapshots to the current session | 安全修复：隔离 subagent 快照作用域 |
| [#5978](https://github.com/HKUDS/nanobot/pull/5978) | fix(webui): hide provider models past OpenAI shutdown_date | 修复模型选择器显示已停用模型 |
| [#5982](https://github.com/HKUDS/nanobot/pull/5982) | Correct misleading Taiwanese WebUI messages | 本地化修复：20 条 zh-TW 消息修正 |

**关键进展：**
- **会话状态重构** (#5943): 将 JSONL 存储替换为 SQLite 事务，将运行时状态操作路由至单一有界工作线程，存储 I/O 不再阻塞事件循环
- **Subagent 消息系统** (#5985): 新增 session-owned task messaging 和 cancellation 机制
- **附件上传修复** (#5980): 解决 TUI/WebUI 附件通过 WebSocket 传输导致的 1009 错误

## 4. 社区热点

**最活跃讨论：**
1. **[#5298](https://github.com/HKUDS/nanobot/issues/5298)** - MCP 工具集上下文成本优化方案（2条评论）
   - 诉求：大型 MCP 工具集下 `ToolRegistry.get_definitions()` 的 context cost 优化
   
2. **[#5900](https://github.com/HKUDS/nanobot/issues/5900)** - 静默上下文压缩与 WeChat 日志冗长问题（1条评论）
   - 诉求：`idleCompactAfterMinutes` 触发时不应发送通知到 WeChat/WeCom

**最受关注 PR：**
- [#5943](https://github.com/HKUDS/nanobot/pull/5943) - session 状态集中化重构（核心架构变更）
- [#1759](https://github.com/HKUDS/nanobot/pull/1759) - MCP 工具懒加载与自动降级（创建于3月前，仍在讨论）

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 关联 PR |
|---|---|---|---|
| **P1** | Fallback 模型在 "insufficient credits" 时被跳过 | ✅ 已修复 | [#5968](https://github.com/HKUDS/nanobot/pull/5968) |
| **P2** | WebUI 显示已停用 OpenAI 模型导致请求失败 | ✅ 已修复 | [#5979](https://github.com/HKUDS/nanobot/pull/5979) |
| **P2** | TUI/WebUI 附件上传 WebSocket 1009 错误 | ✅ 已修复 | [#5980](https://github.com/HKUDS/nanobot/pull/5980) |
| **P2** | TUI 活跃回合中 `/goal` 命令被拒绝 | 🔄 处理中 | [#5981](https://github.com/HKUDS/nanobot/pull/5981) |

## 6. 功能请求与路线图信号

**高潜力纳入下一版本：**

1. **Telegram 频道策略细化** [#5972](https://github.com/HKUDS/nanobot/issues/5972) / [#5973](https://github.com/HKUDS/nanobot/pull/5973) / [#5974](https://github.com/HKUDS/nanobot/pull/5974)
   - 诉求：supergroup 中按 topic 区分 bot 行为（项目主题 vs 公告主题）
   - 状态：PR 已提交，等待 #5973 合并后 rebase

2. **Reasoning Effort 选择器** [#5983](https://github.com/HKUDS/nanobot/pull/5983)
   - 从 Advanced 选项移至 Model 下方，基于 provider catalog 动态展示支持值

3. **Subagent 任务管理** [#5985](https://github.com/HKUDS/nanobot/pull/5985)
   - 全 UUID 标识、有界内存 inbox、收据机制

4. **MCP 上下文预算** [#5298](https://github.com/HKUDS/nanobot/issues/5298)
   - 大型工具集下的 schema 可见性预算控制

## 7. 用户反馈摘要

**痛点：**
- **Fallback 机制不可靠**：提供商返回 "insufficient credits" 时，配置好的 fallback 被静默跳过，用户感知为 "bot 停止工作" ([#5967](https://github.com/HKUDS/nanobot/issues/5967))
- **模型选择器误导**：WebUI 显示已 shutdown 的 OpenAI 模型，导致首次请求失败才暴露问题 ([#5977](https://github.com/HKUDS/nanobot/issues/5977))
- **通知干扰**：后台 context compaction 发送通知到 WeChat/WeCom，与用户预期不符 ([#5900](https://github.com/HKUDS/nanobot/issues/5900))

**满意点：**
- Subagent 工具链持续完善（spawn → my → messaging/cancellation）
- 多渠道（Telegram/WebUI/TUI）功能对齐迭代迅速

## 8. 待处理积压

**需关注的老旧未关闭项：**

| 类型 | ID | 标题 | 创建时间 | 积压时长 |
|---|---|---|---|---|
| PR | [#1759](https://github.com/HKUDS/nanobot/pull/1759) | MCP 工具懒加载与自动降级 | 2026-03-09 | ~7个月 |
| Issue | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | Budget model-visible MCP schemas | 2026-08-08 | ~2个月 |
| PR | [#5537](https://github.com/HKUDS/nanobot/pull/5537) | my tool 会话焦点持久化 | 2026-08-25 | ~1个月 |
| PR | [#5780](https://github.com/HKUDS/nanobot/pull/5780) | 停止发送 context compaction 通知 | 2026-09-15 | ~2周 |
| PR | [#5954](https://github.com/HKUDS/nanobot/pull/5954) | Subagent 并发结果聚合 | 2026-09-28 | 待冲突解决 |

**建议：** 优先处理 #1759（MCP 性能优化）和 #5954（subagent 功能完整性），这两项对用户体验影响较大且已有较长时间未合入。

---

**项目健康度评估：** ⚡ **良好**
- PR 处理效率高（38条/24h）
- 关键 Bug 修复及时（P1 级已解决）
- 架构重构持续推进（session 状态集中化）
- 需关注老旧 PR 的合并阻塞问题

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – 2026‑09‑30 项目日报**
*生成时间：2026‑09‑30*

---

## 1. 今日速览

过去24小时，Hermes Agent 保持了较高的开发热度：**50 条新 Issues** 和 **50 条新 PRs**（其中约 30% 已合并或关闭）。开发人员正在密集修复多项**严重影响用户体验的桌面 UI 故障**（侧边栏闪烁、重复消息、登录窗口卡死），同时持续解决**跨平台插件和认证问题**（mem0 锁冲突、Telegram/ Slack 文件发送退化、OAuth 凭据不持久化）。项目健康度得分相对较高，但大量**未修复的高优先级缺陷**表明还有一些长期存在的问题有待关注。

---

## 2. 版本发布

**无正式版本发布**。（快照分支上仍有变更，但无预览标签。）

---

## 3. 项目进展 – 本日合并/关闭的重要 PR

| # | PR 标题 | 状态 | 主要工作 | 影响 |
|---|----------|------|------------|--------|
| #128211 | *fix(desktop): the onboarding tour no longer leaves a preview row* | **已合并** | 修复欢迎导览后Composer上方出现“127.0.0.1:5174”行。 | 提升了新用户的初始体验。 |
| #128826 | *fmt(js): `npm run fix` 自动格式化* | **已合并** | 对代码库进行了一轮自动 prettier/lint 修复。 | 降低了提交时的 lint 报错率。 |
| #128341 | *fix(desktop): stop the boot cwd reconcile flipping the sidebar into Projects* | **已合并** | 纠正了登录后侧边栏错误的聚焦到“Projects”标签页。 | 修复了侧边栏状态恢复 bug。 |
| #128566 | *fix(cli): translate agent container paths for the host fs API* | **已合并** | Docker 容器中生成的 `/workspace/...` 路径现可正确映射到主机文件系统。 | 解决了容器化工作负载的文件访问问题。 |
| #128451 | *fix(desktop): show a session lease refusal as open elsewhere, not session not found* | **已合并** | 修复了当同一会话在另一个窗口打开时，点击“全部会话”列表造成的 404。 | 改善了多端登录的用户反馈。 |
| #128434 | *fix(desktop): keep a dropped Grok turn's stream id out of the next turn* | **已合并** | 防止了当 Grok（xAI）流中断时，`state.streamId` 污染下一轮消息。 | 消除了跨轮次生成重复内容的风险。 |
| #128526 | *fix(desktop): surface a hung gateway in the interactive login window* | **已合并** | 登录页面现在在网关不可用时显示一个带“重试”按钮的内嵌错误页，而不是空白白屏。 | 提升了桌面应用的容错性。 |
| #128523 | *fix(desktop): fail safe toward bytes when attaching an image* | **已合并** | 将粘贴图片转换为直接的二进制数据，而不是残留本地文件路径，避免了 `4016 image not found` 错误。 | 修复了桌面应用粘贴图片的功能。 |
| #128819 | *fix(tools): stop between-turn refresh from rewriting sent tool schemas* | **已合并** | 防止了工具刷新时，缓存的聊天模板被新 schema 覆盖，导致下一次请求不同步的问题。 | 保障了工具调用的一致性。 |

*这些合并 PR 表明项目正在快速修复桌面 UI 问题、多端登录支持以及容器化环境中的文件处理和工具持久化方面的问题。*

---

## 4. 社区热点 – 讨论最激烈的话题

| 评论数 | Issue | 热度分析 |
|--------|-------|----------------|
| **11** | [#58705](https://github.com/NousResearch/hermes-agent/issues/58705) **Bug: mem0 OSS - agent tools fail with Qdrant lock conflict** | 用户报告了 Qdrant 本地存储的锁竞争 bug，当主进程启动 mem0 插件并获取文件锁时，Agent 调用的 `mem0_search`/`mem0_add` 试图重新打开同一目录，导致“Storage folder is already locked” 错误。社区质疑 mem0 OSS 插件如何处理跨客户端锁管理。 |
| **10** | [#67368](https://github.com/NousResearch/hermes-agent/issues/67368) **[Bug] Desktop sidepanel PROJECTS tab flashes then disappears** | 桌面应用更新后，侧边栏的“Projects”标签页会在 UI 初始化时短暂显示（≈0.5 s）然后立即消失，只剩下“Sessions”。这影响了工作流的连贯性，用户希望 sidepanel 状态能正确持久化。 |
| **7** | [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) **Compressor context window clamped to model.ollama_num_ctx on cloud providers** | v0.21.0 引入的 clamp 逻辑会无条件应用 `model.ollama_num_ctx` 配置，即使实际 endpoint 是 Anthropic/DeepSeek 等云端模型。这导致上下文窗口从 1M 骤降至 ~65k，影响了长期对话。用户要求 smarter 地应用 clamp，仅限于实际使用的 provider。 |
| **5** | [#103694](https://github.com/NousResearch/hermes-agent/issues/103694) **Profile-scoped OAuth add for single-use providers prints Added but persists nothing** | `hermes -p <prof> auth add anthropic --type oauth` 提示“Added anthropic OAuth credential #1”，但凭证从未写入到磁盘；`auth list` 和 `status` 都显示“logged out”。用户困惑于 OAuth 流程为何会“消失”。 |
| **5** | [#78383](https://github.com/NousResearch/hermes-agent/issues/78383) **MEDIA: tag with spaces in path delivered twice - extensionless fallback defeats dedup (Windows)** | Windows + Feishu 网关下，当响应中包含一个 `MEDIA:<path with spaces>` 标签时，同一个文件会被发送两次，成为两份相同的附件。Bug 根源在于扩展名缺失时的备用路径导致去重失败。 |

*这些 Issue 获得了最高的社区关注度，因为它们直接影响核心功能：存储插件的并发安全、桌面 UI 的稳定性和上下文管理，以及关键认证流程。*

---

## 5. Bug 与稳定性 – 今日已知问题

| 严重程度 | Issue | 当前状态 | 修复 PR |
|----------|-------|------------|----------|
| **高** | **#58705** mem0 OSS Qdrant 锁冲突 | 🟡 开放，11 条评论 | *无* |
| **高** | **#99943** 云端 provider 上下文字段克隆 bug | 🟡 开放，7 条评论 | *无* |
| **中** | **#103694** OAuth 凭据未持久化 | 🟡 开放，5 条评论 | *无* |
| **中** | **#78383** Windows MEDIA 标签去重失败 | 🟡 开放，5 条评论 | *无* |
| **中** | **#125857** Telegram 文档静默降级为路径文本 | 🟡 开放，2 条评论 | *无* |
| **低** | **#76584** 解耦默认 profile（功能请求） | 🟢 开放，2 条评论，3 👍 | *无* |
| **低** | **#105188** Agent 单轮次无墙-clock 时限 | 🟢 开放，3 条评论 | *无* |
| **低** | **#123118** macOS 网关 LaunchAgent 标识为 osascript | 🟢 开放，3 条评论 | *无* |
| **修复中** | **#128523** 桌面图片附件二进制安全 | ✅ 已合并 | #128523 |
| **修复中** | **#128526** 桌面登录窗口卡死 | ✅ 已合并 | #128526 |
| **修复中** | **#128341** 登录后侧边栏 Projects 标签页错误聚焦 | ✅ 已合并 | #128341 |
| **修复中** | **#128566** 容器路径主机映射 | ✅ 已合并 | #128566 |
| **修复中** | **#128451** 会话租赁拒绝显示为“会话未找到” | ✅ 已合并 | #128451 |
| **修复中** | **#128434** 丢失的 Grok 流 ID 污染下一轮 | ✅ 已合并 | #128434 |
| **修复中** | **#128819** 工具 schema 间污染 | ✅ 已合并 | #128819 |

*总体而言，Hermes Agent 一直在消除桌面应用中的高可见度 bug，但一些核心插件问题（mem0、Compressor 配置、OAuth）仍然悬而未决，可能影响生产环境的使用。*

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 社区热度 | 可能的影响 |
|-------|------|------------|------------|
| **#76584** *[Feature] Decouple the default profile from the global root HERMES_HOME* | 架构改进 | 2

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 (2026-09-30)**  

---

## 1. 今日速览  
- 项目今日活跃度中等：6 个 Issue 均保持 **打开/活跃** 状态（无新闭合 Issue），4 个 PR 中有 3 个待审合并，1 个被标记为 *stale* 并关闭。  
- 主要讨论集中在 **Web UI 交互体验**（输入卡顿、消息队列不可见、会话幻影等）以及 **代理循环限制** 上。  
- 尽管没有新版本发布，但社区已针对今日最高投票的 Bug（#3281）提交了对应的修复 PR（#3410、#3411），表明维护者正在快速响应关键用户痛点。

---

## 2. 版本发布  
> **无新版本发布**  

---

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 状态 | 主要内容 | 影响 | 链接 |
|----|------|----------|------|------|
| #3337 | 已关闭（标记为 *stale*） | 修复 MCP 服务器连接失败导致 Agent 循环挂起的问题。 | 原本会导致聊天界置完全无响应；如今虽然被标记为 stale，但说明该问题已被社区注意到，后续若恢复活跃可直接复用。 | [sipeed/picoclaw PR #3337](https://github.com/sipeed/picoclaw/pull/3337) |

> **今日未有 PR 合并**，项目代码库在此日期未推进新功能或修复。未来待合并的 3 个 PR（#3410、#3411、#3378）一旦通过审查，将分别改善 Web UI 队列可见性、工作指示器真实性以及 OAuth 作用域配置。

---

## 4. 社区热点（今日讨论最活跃、评论最多、反应最多）  

| 类别 | 编号 | 标题 | 评论数 | 👍 | 关联链接 |
|------|------|------|--------|----|----------|
| Issue | #3281 | [BUG] Web UI chat input is very laggy when history has a little bit long | 16 | 2 | [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| Issue | #440 | [enhancement] Replace hard iteration limit with context‑window bounding and loop detection | 7 | 0 | [sipeed/picoclaw Issue #440](https://github.com/sipeed/picoclaw/issues/440) |
| PR | #3410 | fix(pico/web): surface steering queue state … | — (评论未显示) | 0 | [sipeed/picoclaw PR #3410](https://github.com/sipeed/picoclaw/pull/3410) |
| PR | #3411 | feat(web): honest, state‑driven working indicator | — | 0 | [sipeed/picoclaw PR #3411](https://github.com/sipeed/picoclaw/pull/3411) |

**热点分析**  
- #3281 是今日评论最多的 Issue，反馈表明在长时间聊天会话中，Web UI 的输入框出现明显卡顿，影响日常使用。  
- #440 虽评论较少，但关注度较高：硬性的 `max_tool_iterations: 20` 限制在复杂任务中会导致 agent 提前放弃，社区期望改为基于上下文窗口的动态边界以及循环检测机制。  
- 两个待合并 PR（#3410、#3411）直接对应今日最高投票的 UI 问题（#3408、#3406），说明社区正在围绕这些痛点快速提出解决方案。

---

## 5. Bug 与定性（今日报告的 Bug，按严重程度排序）  

| 严重程度 | Issue | 描述 | 是否已有对应 fix PR | 链接 |
|----------|-------|------|---------------------|------|
| **高** | #3408 | Web UI：在 agent 忙碌时发送的消息被放入隐藏队列，队列满时静默丢失，无 UI 反馈。 | ✅ PR #3410（待合并） | [sipeed/picoclaw Issue #3408](https://github.com/sipeed/picoclaw/issues/3408) |
| **高** | #3407 | Web UI：新建会话在模型思考期间会从列表中消失（“鬼魂会话”），无法返回。 | ❌ 尚无直接 PR | [sipeed/picoclaw Issue #3407](https://github.com/sipeed/picoclaw/issues/3407) |
| **中** | #3281 | Web UI：聊天历史稍长时输入卡顿。 | ❌ 尚无直接 PR（但 #3410/#3411 旨在改善整体 UI 响应） | [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| **中** | #3409 | 调度原始（ScheduleWakeup）被用作等待机制时触发不必要的自循环 tick。 | ❌ 尚无 PR | [sipeed/picoclaw Issue #3409](https://github.com/sipeed/picoclaw/issues/3409) |
| **低** | #3406 | Feature：需要更清晰的工作指示器、分离手动/渠道会话、更丰富的会话列表（含归档）。 | ✅ PR #3411（待合并） | [sipeed/picoclaw Issue #3406](https://github.com/sipeed/picoclaw/issues/3406) |

> **严重程度判断依据**：导致数据丢失或用户无法恢复会话的问题标记为 **高**; 影响交互流畅性但不造成数据丢失为 **中**; 纯功能增强或体验改进为 **低**。

---

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue/PR | 说明 | 路线图信号 |
|----------|---------------|------|------------|
| 替换硬性迭代上限为基于上下文窗口的动态边界 + 循环检测 | #440（Issue） | 当前 `max_tool_iterations: 20` 过于保守，导致合法工作流提前终止。 | 社区强烈期望在下一版本中实现此特性；若被采纳，将显著提升复杂任务的成功率。 |
| Web UI 更真实的工作状态指示器（替换旋转文字） | #3411（PR） & #3406（Issue） | 用状态驱动的指示器取代硬编码的 “thinking” 文本，提供透明的后台进度。 | PR 已提交，待审合并；合并后将直接满足 #3406 的第一部分需求。 |
| 显示转向队列状态，防止消息静默丢失 | #3410（PR） & #3408（Issue） | 前端在 agent 忙碌时应给出排队/已满的反馈，避免用户感觉消息“消失”。 | PR 已提交，待审合并；合并后解决高优先级的可见性 Bug。 |
| 改进会话管理（手动/渠道分离、归档、更丰富列表） | #3406（Issue） | 期望会话列表能够存档、过滤、并明确区分不同来源的会话。 | 尚未有对应代码，属于中期 UI 改进计划。 |
| 安全/OAuth 作用域配置正确传递 | #3378（PR） | 确保刷新令牌时使用用户配置的 Scopes，而非硬编码值。 | PR 已打开，等待审核；合并后将修正身份验证相关的潜在权限问题。 |

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **输入卡顿（#3281）**：用户报告在聊天历史达到几十条后，每次打字都有明显延迟，感觉像是“卡住”。有用户建议采用虚拟列表或延迟渲染以减少 DOM 开销。  
- **消息不可见（#3408）**：多位开发者反馈在等待 agent 完成长时间运行时，发送的后续指令似乎被“吞掉”，只有在 agent 空闲后才看到回复，导致误以为指令未发送。  
- **鬼魂会话（#3407）**：新建会话后，模型仍在思考时，会话条目会从下拉列表中消失，用户只能依赖浏览器回退或刷新才能恢复，影响工作流连续性。  
- **思考指示不明确（#3406）**：当前的「思考」提示仅是 rotating 文字 + loading spinner，用户无法判断 agent 是否真的在工作还是卡死。  
- **身份验证范围（#3378）**：有用户指出在使用自定义 OAuth Scope 时，刷新令牌请求仍然带有默认的 `openid profile email`，导致权限不足的错误。  

总体而言，社区的主要诉求是 **提升 Web UI 的响应性和透明度**，以及 **使代理的执行限制更具灵活性**。

---

## 8. 待处理积压（长期未响应的重要 Issue 或 PR）  

| 编号 | 类型 | 创建时间 | 未处理时长 | 主要内容 | 为什么值得关注 |
|------|------|----------|-----------|----------|----------------|
| #440 | Issue（增强） | 2026-02-18 | 約 7 个月 | 用上下文窗口动态替换硬性迭代上限，加入循环检测。 | 影响复杂任务的成功率，是核心调度能力的瓶颈。 |
| #3281 | Issue（Bug） | 2026-07-21 | 約 2.5 个月 | Web UI 输入卡顿。 | 直接影响日常使用体验，评论量最高。 |
| #3378 | PR（auth） | 2026-09-12 | 約 18 天 | 在 RefreshAccessToken 中使用配置的 Scopes。 | 关系到身份验证的正确性，若未合并可能导致权限问题。 |
| #3409 | Issue（Bug） | 2026-09-29 | 1 天 | 调度原始作为等待机制触发自循环。 | 虽新近，但若不修复可能在后台子代理场景下导致无限循环。 |
| #3407 | Issue（Bug） | 2026-09-29 | 1 天 | 鬼魂会话（会话列表消失）。 | 影响会话恢复，需配合 UI 状态改进一起解决。 |

> **建议**：维护者可考虑在接下来的冲刺中优先审合并 **#3410、#3411、#3378**（均为针对今日高频 Bug 的修复），并在后续规划中安排 **#440** 的实现，以提升系统整体的鲁棒性和功能表现力。

--- 

*以上信息均基于 GitHub 公开数据（Issues、PR、评论、点赞数）生成，旨在为项目维护者和社区成员提供客观、数据驱动的项目健康快照。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报  
**日期：2026-09-30**

---

## 1. **今日速览**

- 项目今日继续保持较高活动水平，**15 条 PR 更新**（8 条待合并 / 7 条已合并或关闭）以及 **2 条 Issue 关闭**，显示开发社区活跃且持续迭代中。
- 两条被关闭的 Issue 分别涉及平台兼容性问题（arm64 架构）和容器管理逻辑缺陷，反映出团队对稳定性和跨平台支持的持续关注。
- 多个 PR 聚焦增强功能（如网关声明端口、keyless HTTP 支持），同时也修复了日志序列化崩溃等关键 bug，整体向功能完善与稳健化发展。
- CI 安全性提升（依赖 pinning + Dependabot）表明项目正在 strengthening supply-chain security。
- 当前无新版本发布，但多个 feature 和 fix PR 已进入 main 分支，为下一版本奠定基础。

---

## 2. **版本发布**

暂无新版本发布。

---

## 3. **项目进展**

### 今日合并 / 关闭的关键 PR：

| PR 编号 | 标题 | 类型 | 影响 |
|--------|------|------|------|
| [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) | fix(log): never throw when a log value cannot be JSON-serialized | Bug Fix | 增强日志系统鲁棒性，防止因无法序列化对象导致宿主崩溃。 |
| [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) | fix(iron-proxy): stop early on arm64 engines that cannot run amd64 images | Bug Fix | 解决 Iron Proxy 在 arm64 主机上的 `exec format error` 问题，显式提示硬件限制。 |
| [#3955](https://github.com/nanocoai/nanoclaw/pull/3955) | docs(opencode): keep gateway notes in the gateway skills | Documentation | 优化文档结构，提升可维护性与清晰度。 |
| [#3954](https://github.com/nanocoai/nanoclaw/pull/3954) | docs(gateways): correct what the credential reread refuses | Documentation | 改进身份凭证处理逻辑的注释准确性。 |
| [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) | fix(setup): stop the ping agent's container before deleting its folder | Bug Fix | 防止清理期间残留运行中容器，提高 Setup 流程可靠性。 |
| [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) | fix(host): stop containers whose session or agent group was deleted | Bug Fix | 解决因删除会话/代理组而 orphaned container 的问题，提升资源回收一致性。 |

🔍 **总体评估**：  
这些合并的 PR 均为维护者主导，聚焦底层稳定性与文档完善，体现出项目在功能成熟度和可维护性方面的持续投入。

---

## 4. **社区热点**

### 高活跃度讨论（按更新时间排序）：

#### ✅ [Issue #3888](https://github.com/nanocoai/nanoclaw/issues/3888)  
- **标题**：Iron Proxy setup fails on arm64 hosts  
- **状态**：已关闭（由 PR #3953 fixes）  
- **用户痛点**：arm64 架构机器上运行 amd64 镜像失败，导致服务无法启动。  
- **社区反馈**：直接且明确，问题已被快速识别并修复。

#### ✅ [Issue #3909](https://github.com/nanocoai/nanoclaw/issues/3909)  
- **标题**：Host starts a session container for an agent group deleted mid-spawn  
- **状态**：已关闭（由 PR #3947 修复）  
- **问题描述**：在代理组被删除期间仍生成容器，造成资源浪费。  
- **社区关注**：问题发生在 `container-runner.ts` 中，属于并发边界条件错误，已获解决。

🔍 **总结**：  
这两个 Issue 均触及核心组件（Iron Proxy / Host 容器调度），且均已由维护者在短时间内闭环，表明问题响应速度较快。

---

## 5. **Bug 与稳定性**

| 编号 | 标题 | 严重程度 | 是否 Fix？ | 链接 |
|------|------|-----------|--------------|------|
| [#3888](https://github.com/nanocoai/nanoclaw/issues/3888) | Iron Proxy fails on arm64 hosts | 高 | ✅ 由 [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) 修复 | [Link](https://github.com/nanocoai/nanoclaw/issues/3888) |
| [#3909](https://github.com/nanocoai/nanoclaw/issues/3909) | Host spawns container for deleted agent group | 中 | ✅ 由 [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) 修复 | [Link](https://github.com/nanocoai/nanoclaw/issues/3909) |
| [#3966](https://github.com/nanocoai/nanoclaw/pull/3966) | feat(iron): allow keyless model over plain HTTP | 特性引入潜在风险 | ⚠️ 需进一步测试 | [Link](https://github.com/nanocoai/nanoclaw/pull/3966) |

🔍 **风险提示**：  
PR [#3966](https://github.com/nanocoai/nanoclaw/pull/3966) 引入了明文 HTTP 支持，虽简化了局部部署体验，但可能增加网络安全隐悔，后续需监控实际部署中的安全表现。

---

## 6. **功能请求与路线图信号**

虽无明确的用户 New Feature 请求被标记为 `kind/enhancement`，但从 PR 视角可观察到以下潜在方向：

- **Gateway 精确端口声明**：PR [#3964](https://github.com/nanocoai/nanoclaw/pull/3964) 表示计划支持模型通过非标准端口暴露，提升部署灵活性。
- **HTTPS Proxy 环境支持**：PR [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) 表明对企业内网部署友好性的增强。
- **CI/CD 安全加固**：PR [#3968](https://github.com/nanocoai/nanoclaw/pull/3968) 引入 Dependabot，说明项目致力于提升依赖链安全性。

这些变化暗示项目正朝向更安全、更标准化、更易于集成的方向演进。

---

## 7. **用户反馈摘要**

从 Issue 与 PR 描述中提炼以下用户需求与不满点：

- **跨平台支持不足**：arm64 架构用户遭遇兼容性问题 (#3888)，反映出平台覆盖不完整。
- **身份认证流程不够清晰**：原 OpenCode 文档中未明确区分不同网关的认证方式 (#3919)，导致配置困惑。
- **容器清理不彻底**：部署后仍残留停止不了的容器 (#3878)，影响资源释放与日志追踪。

👉 **建议方向**：
- 增加 arm64 支持或提供镜像选择机制；
- 完善 gateway 认证指南；
- 优化容器生命周期管理逻辑。

---

## 8. **待处理积压**

目前暂无长期未响应的重要 Issue 或 PR。  
所有打开状态的 PR（共 8 条）均活跃更新中，且多数由核心维护者提交。

🔍 **关注点**：
- PR [#3901](https://github.com/nanocoai/nanoclaw/pull/3901)（HTTPS Proxy 支持）尚未 Merge，属于重要环境兼容性改进；
- PR [#3918](https://github.com/nanocoai/nanoclaw/pull/3918)（代理响应重复问题）暂缓合并，等待 `send_message ack` 机制完成后方可落地。

---

## 🔚 总结

NanoClaw 项目在 2026-09-30 持续输出稳定性修复与功能优化，PR 流程规范，问题响应及时。尽管无正式版本发布，但多个关键功能正在逐步落地，具备向下一版本稳步前进的态势。社区参与度良好，开发节奏合理，项目整体健康度高。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报（2026‑09‑30）**  
*基于 GitHub 最近 24 小时的活动数据（Issues、PR、Releases）*  

---

## 1. 今日速览  
- 项目在过去 24 小时内保持 **低至中等活跃度**：新增 1 条 Issue 并在同一天关闭了 1 条 PR，未出现新版本发布。  
- 本日的唯一交互是社区成员 **Vivek Gupta**（MemCode 创始人）提出的关于托管 MemCode 引擎的功能需求（Issue #1015），以及维护者 **elwina** 提交并已合并的版本 bump PR（PR #1014），用于修复若干细节并标记 v20260929 版本。  
- 总体来看，代码库未出现重大回滚或破坏性变更，项目健康度稳定，但社区讨论深度仍有提升空间。  

## 2. 版本发布  
- **今日无新版本发布**。最近一次合并的 PR（#1014）仅完成了内部版本号 bump（v20260929）以及少量代码整理，未对外发布可下载的制品。  

## 3. 项目进展  
| PR | 状态 | 标题 | 主要改进 | 链接 |
|----|------|------|----------|------|
| #1014 | CLOSED（已合并） | v20260929 | - 将网络搜索锁定至配置的提供商，防止 Exa 因重复 `Content-Type` 头被拒绝。<br>- 在发送官方 QQ 回复前剥离 Markdown 标记，避免渲染问题。<br>- 版本号升至 v20260929。 | [nullclaw/nullclaw PR #1014](https://github.com/nullclaw/nullclaw/pull/1014) |

**影响**：这些更改虽然属于细节打磨，但在提升跨平台一致性（尤其在 QQ 和搜索提供商集成方面）上前进了一小步。版本号的 bump 为后续可能的正式发布奠定了基准。  

## 4. 社区热点  
- **Issue #1015** 是今日唯一且最受关注的讨论点（虽然目前评论数为 0，但已获得创作者的直接署名与链接）。  
  - 链接：[nullclaw/nullclaw Issue #1015](https://github.com/nullclaw/nullclaw/issues/1015)  
  - 诉求：用户希望在 nullclaw 中加入 **托管的 MemCode 引擎**，以便在不增加本地存储的前提下，让选定的记忆跨设备同步。这反映出对记忆持久化与多设备无缝体验的需求。  

## 5. Bug 与稳定性  
- 今日未有明确的 Bug 报告或崩溃相关的 Issue/PR。  
- PR #1014 中的两项修复（搜索提供商锁定、QQ Markdown 剥离）可视为对先前潜在问题的预防性修复，但未在 Issue 中被标记为 bug。  

## 6. 功能请求与路线图信号  
| 功能请求 | 来源 | 关联已有工作 | 是否可能进入下一版本 |
|----------|------|--------------|-------------------|
| 托管 MemCode 引擎（远程记忆存储） | Issue #1015（vivekgupta-memcode） | 项目已支持多种可插拔记忆引擎；此请求属于扩展现有插件机制的自然延伸。 | **中等可能性**：若社区进一步讨论并给出实现方案（如 API 接口、鉴权），维护者可在下一个功能迭代中考虑加入。 |  
| 搜索提供商固定 & Content-Type 去重 | PR #1014（已合并） | 已在当前分支解决，未来版本将直接继承此行为。 | **已实施**，将随 v20260929 一起发布。 |  
| QQ 回复前剥离 Markdown | PR #1014（已合并） | 同上 | **已实施**。 |  

## 7. 用户反馈摘要  
- 来自 Issue #1015 的初步陈述表明，**用户期望通过外部托管服务（MemCode）实现跨设备记忆共享**，而不愿增加本地磁盘占用。这暗示当前纯本地或插件式记忆方案可能在多终端场景下显得不足。  
- 由于目前该 Issue 尚未获得评论或点赞，无法量化社区兴趣程度，但提出者身份（MemCode 创始人）表明该需求具有一定的产品化潜力。  

## 8. 待处理积压  
- **长期未响应的 Issue/PR**：在本次数据窗口中没有出现超过 48 小时未更新的 Issue 或 PR；所有活动均在当天内完成。  
- 建议维护者在后续日志中关注：  
  - 若 Issue #1015 在接下来的几天内保持无评论，可考虑通过项目论坛或邮件列表主动征求社区意见，以判断是否值得纳入路线图。  
  - 保持 PR review 的及时性，确保已合并的修改在发布流程中得到充分测试（尽管当前无发布）。  

---

### 小结  
今日 Nullclaw 的活动主要围绕 **内部质量改进**（PR #1014）和 **一项新功能诉求**（Issue #1015）展开。项目代码基础稳定，未见 regressions；社区层面仍需围绕跨设备记忆共享这一潜在需求展开更深入的讨论，以决定其是否能够成为下一个里程碑功能。保持对 Issue 的跟踪及及时的 PR 审查，将有助于维持项目的健康增长速度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报（2026‑09‑30）**  

---

### 1. 今日速览  
- 项目保持 **中等活跃度**：过去 24 小时内产生 2 条 Issue（均为新开）和 3 条 PR（其中 1 条已合并，2 条仍在审查）。  
- 今日发布了 **稳定版 v1.4.1**，该版本是对之前 RC 的正式提升，主要修复了 Google OAuth 激活问题并同步了 Wasmtime 安全更新。  
- 社区讨论集中在两个功能提案（远程边缘工作器与 opt‑in 工具选择），而唯一有评论的 Issue（#7889）表明用户对扩展计算资源有明确诉求。  
- 总体而言，代码库健康度良好：关键缺陷已在最新发布中修正，长期挂起的基础设施 PR（#7988）仍需关注。

---

### 2. 版本发布  
**ironclaw‑v1.4.1** (发布时间：2026‑09‑29)  

| 内容 | 说明 |
|------|------|
| **类型** | 稳定版本（从 `1.4.1-rc.2` 提升） |
| **主要修复** | • **Google OAuth 激活修复** – 当操作员通过 Web UI 提供 Google OAuth client 时，Gmail、Google Calendar 等扩展现在可以正常激活。（见 Release Notes）<br>• **Wasmtime 安全更新** – 引入 Wasmtime 最新安全补丁，修复潜在的内存安全问题。 |
| **破坏性变更** | 发布说明中未提及任何破坏性改动；API 与配置保持向后兼容。 |
| **迁移注意事项** | 建议所有生产环境尽快升级至 `1.4.1`，以获取 OAuth 修复与安全补丁。升级步骤参考项目的 `UPGRADE.md`（未在本次数据中给出，但通常为 `cargo install ironclaw@1.4.1` 或对应的包管理指令）。 |
| **相关 PR** | #8120（已合并）——将 `ironclaw-v1.4.1-rc.2` 提升至稳定版 `1.4.1`。 |
| **链接** | <https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1> |

---

### 3. 项目进展  
| PR | 状态 | 主要贡献 | 备注 |
|----|------|----------|------|
| **#8120** | ✅ 已合并 (2026‑09‑29) | 将测试通过的 `ironclaw-v1.4.1-rc.2` 提升为稳定版 `1.4.1`，更新锁文件、根 changelog 以及公开 changelog。 | 直接对应今日的版本发布，是项目里程碑。 |
| **#7988** | 🔄 打开 (创建 2026‑08‑29，更新 2026‑09‑30) | CI/基础设施：刷新代码库知识图谱快照（夜间 `Codebase Graph Refresh` 工作流产物）。 | 尚未获得 review，属于基础设施维护，合并后能保持文档与代码图的一致性。 |
| **#8119** | 🔄 打开 (创建/更新 2026‑09‑29) | feat(loop-host)：实现 **opt‑in turn‑start 工具选择**（基于嵌入式排序），让模型在首次调用前直接获得最相关工具列表，省去一次 `tool_search` 往返。 | 与 Issue #8113 需求对应，是下一版本潜在特性。 |

**整体向前推进**：今日唯一已合并的 PR 完成了版本的稳定化；其余两个 PR 分别在基础设施刷新和新功能实验上推进项目技术栈与功能边界。

---

### 4. 社区热点  
| 项目 | 评论数 / 反应 | 热点摘要 | 链接 |
|------|--------------|----------|------|
| **Issue #7889** – *RFC: extend the scheduler/orchestrator with opt‑in remote edge workers* | 1 条评论，0 👍 | 作者 kvnloo 阐述了现有 worker pool 限于单机的瓶颈，提出利用闲置的边缘节点作为可选工作器，以提高并行作业吞吐。评论中有赞同并请求给出原型实现的路线图。 | <https://github.com/nearai/ironclaw/issues/7889> |
| Issue #8113 – *Proposal: opt‑in turn-0 tool selection (BM25F + embeddings)* | 0 条评论，0 👍 | 描述在首次模型调用前基于用户消息对授权工具进行排名，直接暴露顶部工具，省去一次 `tool_search`。社区尚未发表意见。 | <https://github.com/nearai/ironclaw/issues/8113> |
| PR #8119 – *feat(loop-host): opt‑in tool selection with embeddings* | 未定义评论数 | 实现了上述 Issue #8113 的核心思想，属于技术验证阶段。 | <https://github.com/nearai/ironclaw/pull/8119> |
| PR #7988 – *chore(agents): refresh codebase knowledge graph* | 未定义评论数 | 基础设施类 PR，长期未获 review，社区关注度较低。 | <https://github.com/nearai/ironclaw/pull/7988> |

**分析**：目前讨论最活跃的是 **#7889**，尽管只有 1 条评论，但它直接关系到系统的伸缩性与多机器部署，是社区关注的长期方向。工具选择功能（#8113 / #8119）虽然暂无评论，却已有代码实现，表明该特性已进入开发阶段，可能很快进入主干。

---

### 5. Bug 与稳定性  
| 严重程度 | 描述 | 关联的 Fix / PR | 状态 |
|----------|------|----------------|------|
| **高** | Google OAuth 客户端仅能通过环境变量提供时，扩展无法激活，导致 Gmail/Calendar 集成失效。 | **修复**：Release Notes 中提到的 *Google OAuth activation fix*，由 PR #8120 带入稳定版。 | 已修复，随 v1.4.1 发布。 |
| **中** | Wasmtime 旧版本中存在潜在的内存安全漏洞（可能导致沙箱逃逸）。 | **修复**：同版本中的 *Wasmtime security update*，同样随 #8120 合并。 | 已修复，随 v1.4.1 发布。 |
| **低** | 今日未有新报告的 Bug 或回归。 | — | — |

> **结论**：今日的唯一已知缺陷已在最新稳定版中得到解决，项目整体稳健。

---

### 6. 功能请求与路线图信号  
| 功能请求 | 关联 Issue/PR | 当前进展 | 路线图判断 |
|----------|---------------|----------|------------|
| **远程边缘工作器（opt‑in remote edge workers）** | Issue #7889 | 仅为 RFC，尚无实现 PR。社区表达了对利用闲置边缘节点的强烈需求。 | 若后续出现原型实验 PR，极有可能被纳入下一个小版本（如 v1.5.x）作为可选特性。 |
| **首次模型调用前的工具排序（BM25F + embeddings）** | Issue #8113 / PR #8119 | PR #8119 已完成核心实现，等待 review 与合并。 | 预计将在 v1.4.2 或 v1.5.0 中作为 **opt‑in** 特性发布，满足以降低工具搜索延迟的目标。 |
| **代码库知识图谱自动刷新** | PR #7988 | 基础设施刷震，长期未 review。 | 属于维护性工作，合并后将保持文档与代码图同步，对开发者体验有正面影响，但不直接影响功能路线图。 |
| **其他** | 无 | — | — |

总体来看，**工具选择**与 **边缘工作器** 是社区目前最活跃的两个方向，前者已经有代码实现，后者仍停留在概念阶段。

---

### 7. 用户反馈摘要  
- 来自 **Issue #7889** 的唯一评论（作者 kvnloo）指出：  
  - 当前工作池限制在单机器上导致资源利用率低，尤其在拥有多台闲置服务器或边缘设备的场景下。  
  - 用户期望能够以 **opt‑in** 方式将这些设备注册为工作器，且不影响现有调度器的安全审计模型。  
  - 暂无明确的不满情绪，而是对功能扩展的建设性诉求。  
- 尚未看到针对 Google OAuth 或 Wasmtime 修复的负面反馈，说明这些修复已成功解决用户痛点。

---

### 8. 待处理积压  
| 类别 | 编号 | 最后更新 | 未处理时长 | 关键点 | 链接 |
|------|------|----------|------------|--------|------|
| **基础设施 PR** | #7988 | 2026‑09‑30 | 约 32 天（自 2026‑08‑29 创建） | 长期未获 review 的 CI/基础设施快照刷新；合并后可保持代码库知识图谱与实际代码同步，防止文档过时。 | <https://github.com/nearai/ironclaw/pull/7988> |
| **长期未评论的 Issue** | 无（目前两个 Issue 均在最近 2 天内有更新） | — | — | — | — |

**建议**：维护者可优先审查并合并 #7988，以减少技术债务；同时密切关注 #7889 的后续发展，评估是否需要分配专门的里程碑来推进远程边缘工作器的原型实现。

--- 

*数据来源：近 24 小时内的 Issues、PR 与 Release 信息（截至 2026-09-30）。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-30）

## 1. 今日速览
项目今日无新版本发布，但合并/关闭了 11 个 PR，涵盖网关重启预算修复、安装器改进、渲染器功能增强及国际化补全。Issues 端活跃度较低（仅 2 关闭），但新暴露的 Bug 集中在**多 Agent 配置数据一致性**（#2779）与**安装备份失败**（#2395）两个核心路径。整体来看，代码合入节奏稳定，但用户侧报告的安装与数据损坏问题优先级需提升。

## 2. 版本发布
无新版本。

## 3. 项目进展
- **网关稳定性**：#2707、#2783 双 PR 修复 `gatewayRestartBudget` 逻辑，解决"健康后立即崩溃导致无限重启"的回归问题。
- **安装体验**：#2782、#2706 改进 Windows 安装器的 Skills 备份流程，增加本地化提示与 PSCustomObject 兼容。
- **渲染器功能**：#2758 新增 OpenClaw 原生进度卡片展示；#2780 统一 Markdown 链接在 Artifact 卡片内打开；#2781 修复 KaTeX 内联数学公式与货币符号冲突。
- **历史功能收尾**：#1682（TTS 朗读）、#1683（技能 URL 校验）、#1707（切换 Agent 清空输入框）、#1773（i18n 补全）均在本日标记 Closed。

## 4. 社区热点
- **#2293**（USER.md 覆盖）：6 条评论，多 Agent 配置下 `USER.md` 被 main agent 覆盖，直接影响多分身场景可用性。
- **#2342**（广告关闭）：3 条评论，用户诉求明确——去除左下角广告入口，触及商业化与用户体验边界。
- **#2779**（梦境日记为空）：最近一天创建，触及 OpenClaw 2026.8.1 runtime 与 `doctor.memory.*` ambient-owner 回退机制，属于高影响回归。

## 5. Bug 与稳定性
| 严重度 | Issue | 说明 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 严重 | #2393 | 加速器把 `\f` 替换为 `\x0C`，文件静默损坏 | 无 |
| 🔴 严重 | #2779 | 多分身下梦境日记面板恒为空 | 无 |
| 🟠 高 | #2395 | 安装因技能备份失败中断 | #2782/#2706 已修复 |
| 🟠 高 | #2390 / #2396 | exec 默认调用 PowerShell 5.1，中文路径/Linux 命令失败 | 无 |
| 🟡 中 | #2391 | 技能无法重命名 | 无 |

## 6. 功能请求与路线图信号
- **技能重命名**（#2391）与**定时任务 Agent/Skill 选择**（#2392）诉求明确，若下版本规划多 Agent 编排，应纳入。
- **远程技能 URL 校验**（#1683 已合入）为同类功能铺路，后续可扩展至技能市场。
- **TTS 朗读**（#1682）已合入，是少数已落地的高人气功能，可作为后续卖点。

## 7. 用户反馈摘要
- **痛点**：多 Agent 数据隔离不彻底（USER.md、DREAMS.md 互相覆盖）；Windows 用户名含中文时路径编码异常；安装过程缺少清晰的失败引导。
- **场景**：多分身配置、专业文档处理（PDF/DOCX/XLSX）技能商用疑问、安装迁移。
- **满意度**：对梦境日记、进度卡片等可视化功能有期待；对广告强制展示容忍度低。

## 8. 待处理积压
- **#2390、#2396**（exec Shell 与中文路径）：同一作者 woxinsj 于 7 月 27–28 日提交，评论仅 1 条，长期未获维护者响应，建议优先 triage。
- **#2391、#2392**（技能重命名/定时任务）：7 月 27 日创建，无进展，需明确路线图取舍。
- **#2395**：虽已有修复 PR（#2782/#2706），但 Issue 仍为 OPEN 状态，需手动闭合避免积压。
- **#2293、#2342**：7 月创建即被标 stale，需确认是否按预期关闭或重新打开。

---
**项目健康度评估**：代码合入质量尚可（PR 均有明确 area 标签与描述），但 Issue 响应滞后，尤其 Windows 平台与多 Agent 数据一致性场景需加强。建议维护者本周优先处理 #2393、#2779 与 #2395 三个阻塞性问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-09-30

---

## 1. 今日速览
- **整体活跃度：低** —— 过去 24 小时仅产生 1 条新 Issue，无 PR 活动、无版本发布，代码库处于维护期平稳期。
- **社区互动：静默** —— 新 Issue `#1289` 目前零评论、零 Reaction，尚未形成讨论热度。
- **交付节奏：暂停** —— 无合并 PR 与 Release，短期内无新功能落地或缺陷修复交付。
- **关注焦点：** 社区正在探讨引入 **“Goal mode / Ralph loop”** 长任务自主循环能力，属于增强类需求，尚处于提案早期阶段。
- **健康度提示：** 积压 Issue 与 PR 清理情况未见更新，建议维护者定期巡检长期未响应项。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展
> 过去 24 小时无 PR 合并或关闭，项目代码库无实质性前推进度。

---

## 4. 社区热点
| # | 标题 | 类型 | 作者 | 评论 | Reactions | 核心诉求 | 链接 |
|---|------|------|------|------|-----------|----------|------|
| **#1289** | **[Feature]: Goal mode or ralph loop** | Enhancement | abda11ah | 0 | 0 | 期望增加“目标模式”或“Ralph 循环”，让 Agent 能在长任务中自主规划、执行、反思并迭代，类似 Auto-GPT / BabyAGI 的自主循环能力。 | [#1289](https://github.com/moltis-org/moltis/issues/1289) |

- **热度分析：** 目前仅有提交者单向表达，缺乏维护者回应或社区跟帖，建议维护者在 48h 内给出初步评估（如：纳入 Roadmap、需求拆解或暂缓），避免贡献者预期落空。

---

## 5. Bug 与稳定性
> 过去 24 小时无新增 Bug 报告、崩溃或回归 Issue。

---

## 6. 功能请求与路线图信号
| Issue | 信号强度 | 可能落地版本 | 备注 |
|-------|----------|--------------|------|
| **#1289 Goal mode / Ralph loop** | ⭐⭐ (低) | 未明确 | 属于大型架构级增强，涉及任务编排、状态持久化、安全边界等，若纳入需拆解为多个子 PR，预计需经 RFC 流程。当前无关联 PR 或设计文档，短期内不太可能进入下一版本。 |

---

## 7. 用户反馈摘要
> 过去 24 小时 Issue 评论区为空，无法提炼用户痛点或满意度信息。

---

## 8. 待处理积压提醒
> 本日报数据源仅覆盖最近 24 小时增量，无法直接识别长期积压项。建议维护者执行以下查询并定期跟进：
- **长期未响应 Issue**：`is:issue is:open no:assignee sort:created-asc`（筛选创建 > 30 天且无人分配）
- **停滞 PR**：`is:pr is:open sort:updated-asc`（筛选更新 > 14 天无动作）
- **高优先级未关闭 Bug**：`is:issue is:open label:bug label:"priority:high"`

---

> **数据说明**：本报告基于 GitHub REST API 抓取的 2026-09-29 00:00–23:59 (UTC) 增量数据自动生成，仅反映单日活动快照，不代表项目长期趋势。如需趋势分析，请参考周报/月报。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-30

---

## 1. 今日速览

过去24小时内，CoPaw 项目保持中高活跃度，共处理38条 PR 更新与8条 Issue 更新。本日未发布新版本，重点集中在 Bugfix、CI优化与功能增强上。特别值得关注的是对任务追踪器、终端模块、安全机制等核心组件的优化修复，显示出团队正聚焦于稳定性与用户体验提升。社区反馈踊跃，多个 feature 请求涉及插件市场源配置、语音转录模型设置等场景，反映出用户对系统灵活性与可定制性的强烈需求。

---

## 2. 版本发布

暂无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR：

- **[PR #8037](https://github.com/agentscope-ai/QwenPaw/pull/8037)** – 更新 Console E2E 测试以适配重构后的 UI，涵盖 ACP、Channels、Skills 等多个模块。有助于保障前端一致性与回归测试覆盖率。
- **[PR #8032](https://github.com/agentscope-ai/QwenPaw/pull/8032)** – 替换终端模块中因 `select.select()` 引发的文件描述符限制问题（>1024），使用 `poll()` 提升兼容性，修复高负载场景下的 Terminal 回压异常。
- **[PR #8023](https://github.com/agentscope-ai/QwenPaw/pull/8023)** – 同上，解决高 POSIX 文件描述符支持问题。
- **[PR #8026](https://github.com/agentscope-ai/QwenPaw/pull/8026)** – 跨平台路径处理、沙箱清理逻辑、时区加载及 Windows 输入中断问题的综合修复，提升系统在多平台环境下的鲁棒性。
- **[PR #8024](https://github.com/agentscope-ai/QwenPaw/pull/8024)** – 修复 Qoder 时区为空白字符时引发的 ZoneInfo 加载错误。
- **[PR #8025](https://github.com/agentscope-ai/QwenPaw/pull/8025)** – 关闭 NSIS 固体压缩以减少 Windows 安装包构建风险。

这些 PR 共同提升了项目的平台兼容性、测试稳定性和构建流程可靠性。

---

## 4. 社区热点

### [Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) – TaskTracker 僵尸条目导致运行任务计数不一致

报告称 `/api/chats` 返回的运行中任务数与 `task_tracker.get_global_status()` 不匹配，推测为作用域不同导致的问题。该 Issue 有4条评论，引发维护者关注。

### [PR #8020](https://github.com/agentscope-ai/QwenPaw/pull/8020) – 为模型回退候选添加冷却机制

避免因连续调用失败的模型重复耗时，提升性能与容错率。目前处于待合并状态，评论较少但技术价值高。

### [Issue #8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) – 请求支持自定义 Skill/Plugin 市场源

用户急需自托管或内网部署场景下配置市场来源的能力，获得1条点赞，代表了对企业级使用场景的强烈兴趣。

---

## 5. Bug 与稳定性

### 🔴 高优先级

- **[Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)** – TaskTracker 僵尸条目导致运行任务计数异常  
  - 影响范围：Dashboard 显示错误，API 数据不一致  
  - 修复进展：无直接对应 PR，但相关 PR (#8007) 修改了注册逻辑，可能缓解部分问题  

- **[Issue #8036](https://github.com/agentscope-ai/QwenPaw/issues/8036)** – Creator 中的 OpenAI 图像模型集成与恢复失败  
  - 影响：连接测试通过但生成失败，错误信息被遮盖  
  - 修复进展：尚无 PR 回应  

### 🟡 中优先级

- **[Issue #8035](https://github.com/agentscope-ai/QwenPaw/issues/8035)** – 转录设置页无法更改 `transcription_model`  
  - 影响：切换 provider 后转录功能静默失效  
  - 修复进展：无 PR  

- **[Issue #8022](https://github.com/agentscope-ai/QwenPaw/issues/8022)** – `send_file_to_user` 生成的内容块污染上下文，引发后续请求 400 错误  
  - 影响：多模型持续报错  
  - 修复进展：尚无 PR  

### 🟢 低优先级 / 无效

- **[Issue #8030](https://github.com/agentscope-ai/QwenPaw/issues/8030)** – 无效内容，标记为 `invalid`

---

## 6. 功能请求与路线图信号

| 请求内容 | 链接 | 当前状态 | 是否可能纳入 Roadmap |
|---------|------|----------|-----------------------|
| HEARTBEAT/CRON 控制模型消息行为 | [Issue #2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | 留存未关闭 | 有潜力引入 OpenClaw 类似机制 |
| 自定义 Skill/Plugin 市场源 | [Issue #8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | 新近提出 | 高匹配度，适合 air-gapped 环境 |
| 模块化终端支持高文件描述符 | [PR #8032](https://github.com/agentscope-ai/QwenPaw/pull/8032) | 已合并 | 已实现 |
| Playwright 默认启动参数可配置 | [PR #8029](https://github.com/agentscope-ai/QwenPaw/pull/8029) | 待合并 | 有助于浏览器扩展加载场景 |

---

## 7. 用户反馈摘要

- **使用场景多样化**：用户涉及 QQ 官方机器人、Web Console、桌面应用、内网部署等多种使用方式，彰显项目的广泛适用性。
- **体验痛点突出**：在 Creator、Transcription Settings 等模块中存在配置不生效、错误提示不清晰的问题，影响用户信心。
- **自动化与协作需求旺盛**：许多 Issue 由 AI 代理提交，显示出项目已深度融入智能协作流程中。
- **对定制化要求强烈**：尤其是在企业或离线环境下，对本地镜像源、安全控制、插件可控性有明确诉求。

---

## 8. 待处理积压

- **[Issue #7946](https://github.com/agentscope-ai/QwenPaw/issues/7946)** – QQ 官方机器人网关事件重复重放问题  
  - 创建时间：2026-09-23，仍未分配修复  
  - 影响：消息重复处理，需紧急关注  

- **[PR #7903](https://github.com/agentscope-ai/QwenPaw/pull/7903)** – 社区模块集成（Community Feed + Inbox）  
  - 最后更新：2026-09-29，仍为 WIP  
  - 价值：增强社交互动与反馈闭环，但进展缓慢  

- **[Issue #2359](https://github.com/agentscope-ai/QwenPaw/issues/2359)** – HEARTBEAT/CRON 消息控制机制  
  - 创建时间早（2026-03），仍未采纳  
  - 建议：列入近期规划以响应活跃社区诉求  

---

**总结**：CoPaw 近期发展活跃，Bug 修复与平台兼容性优化并进，社区参与热情高涨。维护者应优先关注任务追踪器一致性问题、转录设置交互缺陷，以及来自企业用户的自定义市场源需求，以保持项目在稳定性与功能扩展之间的平衡。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*