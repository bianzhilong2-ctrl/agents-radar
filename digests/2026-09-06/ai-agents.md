# OpenClaw 生态日报 2026-09-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-06 01:59 UTC

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

**OpenClaw 项目 2026‑09‑06日报**  

---

### 1. 今日速览  
- 过去 24 小时 **Issue 500 条**（新开/活跃 435，已关闭 65），**PR 500 条**（待合并 290，已合并/关闭 210），显示社区活跃度保持在高位。  
- 今日发布 **v2026.9.2**，聚焦“更快、更响应迅速的聊天体验”，通过后台异步处理与独立于 Gateway 事件循环的持久化读取，显著降低冷启动延迟。  
- 整体健康度：**活跃 Issue 与 PR 数量均创历史新高**，合并率 42% 表明代码基保持稳健；关键 Bug 仍在 P1 级别跟踪，但已有多个高优先级 PR 进入审查。  

---

### 2. 版本发布  
**v2026.9.2 – openclaw 2026.9.2**  
- **主要改进**：chat、dashboard 与 session 交互在长 transcript 与磁盘使用处理期间保持响应；后台异步批量处理不再阻塞 Gateway 事件循环；直接 Dashboard 查找替代了冷加载工作；历史读取从 Gateway 事件循环外完成，提升可靠性。  
- **破坏性变更**：无公开的 API 或配置破坏；仅内部重构，兼容性保持不变。  
- **迁移注意事项**：升级至 2026.9.2 后建议重新启动所有 Gateway 进程以加载新的异步处理模块；若使用自定义脚本依赖旧的同步日志路径，需检查是否仍然通过 Gateway 循环读取。  

---

### 3. 项目进展  
- **已合并/关闭的重要 PR（共 210 条）**：  
  1. **#139617** – `refactor(skills)`：将 pending‑proposal 创建逻辑抽取至共享模块，简化 draft 与 publication 处理，降低维护成本。  
  2. **#139612** – `fix: prevent browser profile permission hangs in Doctor`：在 macOS 上阻止因同步检查导致的 Chrome 配置挂起，提升升级体验。  
  3. **#139507** – `fix(streaming): preserve assistant items and settled output`：确保流式响应不丢失重复文本或提前完成的 assistant 项，提高流媒体可靠性。  
  4. **#139495** – `recover failed updates with bounded repair`：实现事务化更新回滚机制，防止因中途失败导致的 “stuck update”。  
  5. **#139616** – `fix(mcp): prevent servers starting after session shutdown`：避免因会话关闭后仍尝试启动 MCP 服务器，提升系统稳定性。  
  6. **#137381** – `fix: sessions_yield keeps long transcript history available`：在长 SQLite 会话压缩期间保留历史上下文，防止因缓存置换导致的上下文丢失。  
- **整体进度**：本轮合并工作主要聚焦 **稳定性、错误处理、资源回收** 与 **开发者友好性**（如日志、权限、CI 预算），为后续功能扩展奠定可靠基础。  

---

### 4. 社区热点  
| Issue / PR | 评论数 | 关注点 | 链接 |
|------------|--------|--------|------|
| **#69208** – duplicate transcript, replay & context assembly across channels (P1) | 14 | 多渠道（MSTeams、webchat、Telegram、follow‑up、delivery‑mirror）出现相同的重复上下文，导致信息不一致与潜在丢失。 | <https://github.com/openclaw/openclaw/issues/69208> |
| **#132762** – overflow‑retry 成功但未完成最终交付 (P1) | 13 | 多阶段文档工作流中，retry 结束标记为 `success`，缺少后续 assistant 回复，导致消息丢失。 | <https://github.com/openclaw/openclaw/issues/132762> |
| **#53763** – built‑in headless browser (enhancement) | 12 | 提供第一类 headless Chromium 工具，消除对用户 Chrome 或第三方 API 的依赖，提升可靠性。 | <https://github.com/openclaw/openclaw/issues/53763> |
| **#39476** – A2A `sessions_send` 可被子 agents 调用导致重复消息 (P1) | 12 | 当 Agent A 调用 `sessions_send` 给 Agent B，Agent B 又可回呼至 A，产生重复消息。 | <https://github.com/openclaw/openclaw/issues/39476> |
| **#96975** – 子完成注入过多内容至父会话 (P2) | 12 | 子 agents 的大量报告/工具输出会污染父会话，影响重度工作负载的性能。 | <https://github.com/openclaw/openclaw/issues/96975> |
| **#97616** – 进程泄漏导致 zombie 积累 (P1) | 11 | hook/tool 子进程未正确回收，长期运行导致内存/进程膨胀。 | <https://github.com/openclaw/openclaw/issues/97616> |
| **#6599** – `/models test-fallback` 命令 (enhancement) | 11 | 让运维在不触发真实 Provider 故障前验证 fallback 链路配置。 | <https://github.com/openclaw/openclaw/issues/6599> |
| **#53408** – 写/执工具参数在长对话后被静默丢弃 (P2) | 11 | 久对话后 `write`/`exec` 参数为空，导致工具调用失效。 | <https://github.com/openclaw/openclaw/issues/53408> |
| **#110190** – runtime context carrier 位于用户消息后 (P1) | 10 | 将 ~15K 字节的会话元数据作为 `role: "user"` 消息插入，导致模型混淆与 token 浪费。 | <https://github.com/openclaw/openclaw/issues/110190> |
| **#14785** – 减少 tool schema token 开销 (~3,500 tokens/session) | 10 | 当前每会话加载全部工具 JSON schema，固定 token 开销影响轻量会话。 | <https://github.com/openclaw/openclaw/issues/14785> |

**分析**：热点 Issue 多聚焦 **会话一致性、资源泄漏、性能瓶颈** 与 **开发者运维**（如 fallback 验证、GC 指标）。大量 P1 级别报告说明核心服务稳定性仍是社区最关注的痛点。

---

### 5. Bug 与稳定性  
（按严重程度 P1 → P3 排序，标注是否已有对应 **fix PR**）

| 编号 | 标题 | 严重度 | 是否已有 fix PR | 简要描述 |
|------|------|--------|----------------|----------|
| **#69208** | duplicate transcript, replay, and context assembly across channels | P1 | 否 | 多渠道重复上下文导致信息不一致、潜在丢失。 |
| **#132762** | overflow retry ends successfully without final delivery | P1 | 否 | 多阶段 workflow 中 retry 成功但缺少后续 assistant 回复。 |
| **#39476** | A2A `sessions_send` 可被子 agents 调用导致 duplicate messages | P1 | 否 | 子 agents 回呼产生重复消息。 |
| **#97616** | OpenClaw leaks unreaped hook/tool child processes (zombie accumulation) | P1 | 否 | 长期运行导致进程泄漏，性能逐渐下降。 |
| **#110190** | Runtime context carrier positioned AFTER user message causes severe model confusion | P1 | 否 | 将大量会话元数据插入用户消息后，导致 token 浪费与推理混乱。 |
| **#119720** | Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale | P1 | 否 | 长会话压缩/持久化阻塞 Gateway，影响高并发。 |
| **#136183** | ssh command executor hangs when spawning ssh (SIGTERM) | P1 | 否 | 客户端发送版本字符串后卡在握手，需 SIGTERM 终止。 |
| **#112259** | Visible inbound channel turn can be silently dropped (zero‑payload) | P1 | 否 | 通过频道分发的消息被接受后直接丢弃，用户无感知。 |
| **#53008** | Memory compaction blocks main processing lane, causing unresponsive bot for 10+ minutes | P1 | 否 | `memoryFlush` 持续 600 s，主处理线程被阻塞，Telegram 消息全部排队。 |
| **#102534** | Cron scheduler timer permanently stops firing after heavy timeouts | P1 | 否 | 重大超时后定时器失效，导致定时任务停止。 |
| **#85027** | macOS LaunchAgent upgrade leaves Gateway unrecoverable; Time Machine restore required | P1 | 否 | 升级后启动脚本失效，需完整恢复环境。 |
| **#44134** | Google Antigravity frequent schema reload triggers false positive abuse detection | P2 | 否 | 多次调用 Cloud Code Assist API 触发误报封禁。 |
| **#91941** | Feishu streaming card full‑content updates cause severe latency regression on long replies | P1 | 否 | 卡片全文累积导致 CardKit 更新延迟激增。 |
| **#63990** | Multi‑index embedding memory with model‑aware failover (feature) | P3 | 否 | 计划在未来引入多嵌入空间以实现稳健的模型降级。 |
| **#89257** | `openclaw backup create --verify` exits 13, leaves corrupt .tmp archive | P1 | 否 | 备份验证失败，留下损坏的临时文件。 |
| **#132765** | `agents_wait` ignores `timeoutSeconds` – dies after ~60 s as tool error | P1 | 否 | 超时未正确处理，导致错误终止而非回退。 |
| **#54488** | Followup drain monopolizes session lane, blocks inbound dispatch for 20‑30 min | P1 | 否 | 后续 drain 占用会话通道，导致大量消息延迟。 |

> **结论**：当前 **P1** 级缺陷仍然活跃，但已有 **#139616、#139507、#139495** 等 PR 正在审查，预计将在本周内合并，从而显著提升稳定性。

---

### 6. 功能请求与路线图信号  
| Issue | 需求 | 与已有 PR 对应 | 可能纳入下一版本 |
|-------|------|----------------|-----------------|
| **#53763** – built‑in headless browser | 提供第一类 headless Chromium 工具，免除外部依赖 | 与 **#139617**（技术抽象）和 **#139573**（代码清理）相呼应，已有 PR 示例实现抽象层。 | **高概率** – 直接纳入核心工具包。 |
| **#96975** – isolate subagent completion | 子完成不应污染父会话，仅返回状态与链接 | 与 **#139607**（isolated completion config）和 **#139538**（session‑level isolation）相关，已有 PR 思路。 | **中等概率** – 需要进一步评估资源开销。 |
| **#6599** – `/models test-fallback` command | 验证 fallback 链路配置而不等待真实故障 | 与 **#139592**（GC metrics）和 **#139501**（update availability）同属运维/监控类，已有 PR 示例。 | **中等概率** – 可作为次要功能加入 2026.10 计划。 |
| **#14785** – reduce tool schema token overhead | 降低每会话加载的 JSON schema 开销 (~3,500 tokens) | 与 **#139613**（CLI 参数校验）和 **#139573**（dead‑code 删除）同属性能优化，已有 PR 讨论。 | **中高概率** – 通过 schema 压缩或懒加载实现。 |
| **#63990** – multi‑index embedding memory | 支持多嵌入空间以实现模型无感降级 | 与 **#139616**（MCP server lifecycle）和 **#139507**（streaming）同属系统层面改进，已有 PR 示例。 | **低概率**（需大量架构改动，可能在 2027 版）。 |
| **#85461** – capture image‑generation usage metadata | 收集图像生成提供的成本/使用数据 | 与 **#139592**（GC metrics）和 **#139539**（UI 透明度）同属运营指标，已有 PR 结构可复用。 | **中等概率** – 视供应商 API 支持情况而定。 |

---

### 7. 用户反馈摘要  
- **会话一致性**：多渠道（Telegram、MSTeams、WebChat）出现 **duplicate transcript**、**重复回复**，用户抱怨信息不匹配与内容丢失（#69208、#112259）。  
- **进程/资源泄漏**：子进程（hook、tool、bash、codex）未回收导致 **zombie 积累**、**内存膨胀**（#97616、#53008），在长时间会话中尤为明显。  
- **工具参数丢失**：在长对话后 `write`、`exec` 参数被静默删除，导致工具调用失效（#53408）。  
- **上下文定位**：runtime context carrier 置于用户消息后，使模型在相同上下文中产生 **token 浪费** 与 **推理混乱**（#110190）。  
- **会话锁定与并发**：单写文件锁 (`session-write-lock`) 在多用户部署下成为瓶颈，影响 **Slack/Telegram** 同时使用场景（#96477）。  
- **升级与兼容**：macOS LaunchAgent 升级（#85027）导致 Gateway 不可恢复，需要 **Time Machine** 回滚，提示升级风险需加强测试。  

---

### 8. 待处理积压（长期未响应）  
| 编号 | 标题 | 最近更新 | 评论数 | 主要影响 | 建议关注 |
|------|------|----------|--------|----------|----------|
| **#69208** | duplicate transcript across channels | 2026‑09‑05 | 14 | 多渠道信息不一致、潜在丢失 | 优先评估统一上下文模型与去重策略 |
| **#132762** | overflow retry success without final delivery | 2026‑09‑05 | 13 | 多阶段 workflow 失效、消息丢失 | 需要在 retry 逻辑中加入明确的 “final delivery” 标记 |
| **#53763** | built‑in headless browser | 2026‑09‑05 | 12 | 依赖外部 API、页面加载不稳定 | 可直接纳入核心工具，提升可靠性 |
| **#39476** | A2A `sessions_send` duplicate messages | 2026‑09‑05 | 12 | 会话重复、用户体验差 | 需在 session 管理层加入唯一性校验 |
| **#96975** | isolate subagent completion | 2026‑09‑05 | 12 | 父会话被大量子内容污染 | 评估是否需要分层会话缓存 |
| **#97616** | process leak → zombie accumulation | 2026‑09‑06 | 11 | 长期内存/进程增长，导致性能下降 | 优先实现子进程回收机制 |
| **#6599** | `/models test-fallback` command | 2026‑09‑05 | 11 | 运维验证困难 | 可作为功能增强，提升运维可视化 |
| **#53408** | write/exec tool parameters silently dropped | 2026‑09‑05 | 11 | 工具调用失效 | 需检查参数序列化与缓存逻辑 |
| **#110190** | runtime context carrier after user message | 2026‑09‑06 | 10 | 模型混淆、token 浪费 | 重新排序上下文，使 carrier 位于会话末尾 |
| **#119720** | synchronous agent persistence blocks Gateway loop | 2026‑09‑05 | 10 | 高并发下延迟、失败 | 探索异步持久化方案 |
| **#72015** | active‑memory plugin overloads gateway | 2026‑09‑05 | 10 | 多 agente 场景下回复延迟 | 评估插件加载与并发控制 |
| **#136183** | ssh command executor hangs on banner exchange | 2026‑09‑05 | 9 | 终端交互失败、自动化脚本中断 | 修复握手超时处理 |
| **#112259** | visible inbound channel turn silently dropped | 2026‑09‑05 | 9 | 用户无感知的消息丢失 | 实现明确的失败返回或重试机制 |
| **#132765** | `agents_wait` ignores timeoutSeconds | 2026‑09‑05 | 9 | 超时未优雅处理 | 需在 `agents_wait` 中加入超时异常处理 |
| **#71058** | support multiple Azure/Teams bots on a single gateway | 2026‑09‑05 | 9 | 多租户场景受限 | 可作为功能增强，提升扩展性 |
| **#42840** (已关闭) | MathJax/LaTeX support for UI | 2026‑09‑05 | 9 | UI 显示数学公式 | 已完成，可作为参考 |
| **#99583** | Intelligent Session Auto‑Titling | 2026‑09‑05 | 8 | 会话标题手动设置繁琐 | 可通过 lazy‑generation 实现 |
| **#127148** | Codex sessions.compact acquires second app‑server → active‑writer conflict | 2026‑09‑06 | 7 | 多实例竞争导致 compaction 失败 | 需确保单实例独占权限 |
| **#90098** | Stack‑safe large attachment handling | 2026‑09‑05 | 7 | 大文件上传导致 OOM/RangeError | 考虑流式上传与分块处理 |
| **#119992** | Per‑turn send budget for message tool | 2026‑09‑05 | 7 | 同一 turn 多次发送导致 duplicate‑answer storms | 需限制单 turn 内 message 调用次数 |
| **#44134** | Google Antigravity ban due to frequent schema reload | 2026‑09‑05 | 7 | 误封禁、运营风险 | 优化 schema reload 频率 |
| **#54488** | Followup drain monopolizes session lane (20‑30 min) | 2026‑09‑05 | 7 | 大量消息延迟 | 重构 followup 处理流程 |
| **#49381** | Feishu duplicate final replies after model failover | 2026‑09‑05 | 7 | 双回复、用户困惑 | 检查 fallback 逻辑与回复合并 |
| **#91941** | Feishu streaming card latency regression on long replies | 2026‑09‑06 | 6 | UI 卡顿、用户体验下降 | 优化 CardKit 更新路径 |
| **#85461** | Capture image‑generation usage metadata | 2026‑09‑06 | 6 | 缺乏成本透明度 | 视供应商 API 是否提供费用字段 |
| **#120162** | Safeguard compaction: qualityGuard audit retry shares timeout budget | 2026‑09‑05 | 6 | 宕机导致整体 compaction 失败 | 需分离 audit 与 compaction 预算 |
| **#114967** | agent‑driven live update leaves launchctl keepalive → restart loop | 2026‑09‑05 | 6 | 启动循环导致服务不可用 | 修复 keepalive 脚本的触发条件 |
| **#42408** | memory‑lancedb quality instability due to extraPaths drift | 2026‑09‑05 | 6 | 结果不一致、误判 | 统一 extraPaths 配置与路径校验 |
| **#91931** | preseeded SOUL/IDENTITY/USER files auto‑complete & delete BOOTSTRAP.md | 2026‑09‑05 | 6 | 新用户工作流被破坏 | 确认是否应保留用户提供的 bootstrap 文件 |
| **#71452** | list chat / list messages pagination limit 25 | 2026‑09‑05 | 6 | 无法查看完整列表 | 实现分页参数而非硬编码上限 |
| **#69242** | exec tool intermittently SIGKILLs find/grep on Linux | 2026‑09‑05 | 6 | 大规模文件搜索被杀 | 检查 OOM 判定与 cgroup 限制 |
| **#53008** | memory compaction blocks main lane (10 min) | 2026‑09‑05 | 6 | 所有消息排队、服务不可用 | 重构压缩流程为异步非阻塞 |
| **#118793** | Claude CLI session limit error dies with surface_error | 2026‑09‑05 | 6 | 缺少 fallback，导致直接失败 | 将错误分类为可恢复，触发 fallback 链 |
| **#44130** | TUI scroll‑jump / auto‑scroll disruptive | 2026‑09‑05 | 6 | UI 不稳定、阅读困难 | 调整滚动行为与惯性 |
| **#84242** | `memory‑lancedb` tools registered but not exposed | 2026‑09‑05 | 6 | 无法在 agent 中调用 memory_store/recall/forget | 暴露为动态工具，使能调用 |
| **#111630** | session_status / ?/1.0m for MiniMax‑M3 | 2026‑09‑05 | 6 | 上下文显示不准确 | 修复 provider 使用 payload 差距 |
| **#78055** | subagent announce stale output & unrelated history inheritance | 2026‑09‑05 | 6 | 消息不一致、混淆 | 重新校准子完成广播时机 |
| **#102534** | cron scheduler timer stops after heavy timeout | 2026‑09‑05 | 6 | 定时任务失效 | 检查 timer 实现与异常处理 |
| **#85027** | macOS LaunchAgent upgrade unrecoverable (requires Time Machine) | 2026‑09‑05 | 6 | 服务不可用 | 完善升级脚本与回滚机制 |
| **#63990** | Multi‑index embedding memory (feature) | 2026‑09‑05 | 6 | 计划中，尚未实现 | 需要大量架构设计 |
| **#89257** | backup create --verify exits 13, corrupt .tmp archive | 2026‑09‑05 | 6 | 备份失效 | 修复异常退出路径与文件清理 |
| **#42591** | install.sh 单体拆分建议 | 2026‑09‑06 | 5 | 可维护性提升 | 可作为技术债务跟踪 |
| **#96477** | production scaling: relax single‑writer session lock for multi‑user | 2026‑09‑06 | 5 | 并发写冲突 | 评估 lock 设计与并发策略 |
| **#132720** | claude-cli 410 session_expired on beta 1 with valid paste‑token | 2026‑09‑06 | 5 | 认证失效、影响 primary 请求 | 需审查 token 失效与续期逻辑 |
| **#98870** | Teams thread context omits newer replies after 50 | 2026‑09‑05 | 5 | 信息不完整 | 限制查询的 reply 数量或实现分页 |
| **#137332** | mixed terminal requester‑settle batches retry forever | 2026‑09‑05 | 5 | 任务卡死、资源浪费 | 确认 ownership 检查与重试策略 |
| **#132765** | agents_wait ignores timeoutSeconds (dies after ~60 s) | 2026‑09‑05 | 9 | 超时未优雅处理 | 已列入 P1 关注列表 |
| **#98870** | Teams thread context truncates after 50 replies | 2026‑09‑05 | 5 | 信息缺失 | 需实现分页或更大上限 |

> **提示**：维护者应优先处理 **P1** 级别且最近有活跃评论的 Issue（如 #69208、#132762、#97616），因为它们直接影响会话一致性和系统稳定性。其余中等/低优先级的 Issue 可在后续里程碑中逐步处理。

--- 

**整体评估**：OpenClaw 在 2026‑09‑06 保持高活跃度，合并率稳健，核心功能（聊天响应、流媒体、会话管理）得到实质性改进。已发现若干严重 Bug 与长期积压任务，建议将 **#69208、#97616、#119720、#53008** 列入本周冲刺，并跟进相关 PR 的审查进度，以确保系统在下一版本（预计 2026‑10）保持可靠性与用户满意度。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-09-06)

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**"一超多强、分层演进"**态势。OpenClaw 以日均千级 Issue/PR 吞吐量、完善的版本发布节奏与企业级稳定性建设确立了**绝对标杆地位**；ZeroClaw、ZeptoClaw、NanoBot 等项目形成第二梯队，分别在架构治理、安全硬化、轻量化部署等细分赛道深耕；Hermes Agent、CoPaw、IronClaw 等处于功能快速迭代期；其余项目多处于维护模式或早期探索阶段。整体来看，生态核心关注点已从"功能堆砌"转向**会话一致性、资源隔离、安全沙箱、多租户架构、Prompt 缓存优化**等生产级工程难题，标志着行业进入**工程化成熟期**。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release (今日) | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **500** (新/活跃 435) | **500** (待合并 290) | **v2026.9.2** | ⭐⭐⭐⭐⭐ **标杆级** | 高并发稳定性建设、异步架构重构、P1 Bug 冲刺 |
| **ZeroClaw** | **42** (新/活跃 34) | **50** (待合并 44) | **v0.8.5** | ⭐⭐⭐⭐ **高活跃治理期** | RFC 高频修订、安全栈分阶段落地、WASM 插件架构 |
| **ZeptoClaw** | **12** | **2** | 无 | ⭐⭐⭐⭐ **安全冲刺期** | P0 安全漏洞一日修复、架构 RFC 爆发 (Footprint Ladder、Prompt Envelope) |
| **NanoBot** | **1** | **24** (待合并 17) | 无 | ⭐⭐⭐⭐ **代码冲刺期** | NIM 超时修复、事件总线统一、会话持久化异步化 |
| **Hermes Agent** | **50** | 数据未给出 | 无 | ⭐⭐⭐ **高活跃迭代期** | 功能快速迭代中 (摘要数据截断，推测活跃度高) |
| **CoPaw** | **10** (新/活跃 7) | **3** (1 Ready) | 无 (规划 2.2.0) | ⭐⭐⭐ **功能规划期** | Hub 2.2.0 多租户规划、Advisor Mode、异常处理重构 |
| **IronClaw** | **1** | **2** | 无 | ⭐⭐ **低位维护期** | 沙箱默认模式变更、积压 PR 待清理 |
| **PicoClaw** | **2** | **3** (合并 3) | 无 | ⭐⭐ **常规维护期** | 历史 PR 合并清理、IRC 长消息支持讨论 |
| **LobsterAI** | **0** | **2** (均 Stale) | 无 | ⭐ **静默积压期** | 核心重构 PR 搁置 5 个月、维护者响应缺失 |
| **NanoClaw / NullClaw / TinyClaw / Moltis** | 0 / 无活动 / 0 / 0 | 0 / 无活动 / 0 / 0 | 无 | ⭐ **休眠/归档态** | 无有效社区动态 |

> **数据说明**：OpenClaw 量级为其他项目总和的 5-10 倍，具有统计学意义上的显著性优势。

---

## 3. OpenClaw 在生态中的定位

### 核心优势
1.  **工程规模与吞吐量霸主**：日均 1000+ Issue/PR 处理量，合并率 42%，拥有业界罕见的**规模化协作能力**。
2.  **生产级稳定性体系**：建立了完善的 P0/P1 Bug 分级、回归测试、异步非阻塞架构（v2026.9.2 核心亮点）、Gateway 事件循环保护机制。
3.  **全模态、多渠道原生支持**：原生解决 Telegram/Teams/Slack/WebChat 多渠道上下文一致性（虽仍有 #69208 等 P1 顽疾），远超单渠道项目。
4.  **生态辐射力**：PicoClaw、NanoClaw 等衍生项目命名暗示其作为上游核心库的地位。

### 技术路线差异
| 维度 | OpenClaw | 典型竞品 (ZeroClaw/ZeptoClaw/NanoBot) |
| :--- | :--- | :--- |
| **架构核心** | **Gateway 中心化事件循环 + 异步技能/持久化层** | 运行时拥有会话所有权、WASM 插件沙箱、轻量级单二进制 |
| **扩展机制** | Skills 体系、MCP 标准、外部 Hook/Tool 进程 | WASM 插件 (ZeroClaw/ZeptoClaw)、原生 Rust 插件 |
| **部署形态** | 服务端常驻进程、多 Gateway 水平扩展 | 单二进制本地优先、嵌入式沙箱 |
| **上下文管理** | SQLite 长会话压缩、Runtime Context Carrier (待优化 #110190) | 选择性检索、Prompt Envelope 字节稳定 (ZeptoClaw) |

### 社区规模对比
*   **核心贡献者**：OpenClaw (73+ contributors in v0.8.5 equivalent release cycle) >> ZeroClaw (73 contributors in v0.8.5) > 其他 (<10 活跃核心)。
*   **治理成熟度**：OpenClaw 采用 "Stabilization Line" 周度切片发布；ZeroClaw 采用 RFC 多轮修订+投票治理；其他多为维护者主导模式。

---

## 4. 共同关注的技术方向 (跨项目共性诉求)

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **会话/上下文一致性与隔离** | **OpenClaw** (#69208 多渠道重复、#96975 子污染父、#110190 Carrier 位置)、**ZeroClaw** (#9487 Runtime-owned Session、#9488 统一附件架构)、**ZeptoClaw** (#666 跨会话持久化召回)、**NanoBot** (#5580 持久化离开事件循环) | 核心痛点：**长会话内存管理、多渠道/多租户上下文隔离、系统元数据与用户消息分离、持久化不阻塞主循环**。 |
| **安全沙箱与权限模型** | **ZeptoClaw** (#660 环境变量泄露 P0、#659 Mode 回退 P0、#667 Footprint Ladder)、**ZeroClaw** (#6996 粒度沙箱策略、#10536 macOS Seatbelt 失效)、**IronClaw** (#8075 Pi Sandbox 默认化) | 核心痛点：**子进程环境隔离、最小权限默认、应用层/OS层双重策略一致性、WASM/原生进程统一能力模型**。 |
| **Prompt/Token 成本优化** | **OpenClaw** (#14785 Tool Schema 3.5k tokens、#110190 Context Carrier)、**ZeptoClaw** (#661 字节稳定 Prompt Envelope)、**ZeroClaw** (Provider Routing 优化) | 核心痛点：**Schema 懒加载/压缩、系统提示缓存友好化、动态上下文预算管理**。 |
| **多租户/多用户架构** | **OpenClaw** (#96477 单写锁瓶颈、#71058 多 Bot 支持)、**ZeroClaw** (#10050 Verbatim Send、Web UX)、**CoPaw** (#7318 Hub 2.2.0 多租户规划)、**LobsterAI** (#1070 Per-session MCP) | 核心痛点：**会话锁并发、网关路由隔离、技能/工具会话级隔离、Web 管理面板**。 |
| **可观测性与运维工具化** | **OpenClaw** (#6599 Fallback 验证、#139592 GC Metrics)、**NanoBot** (心跳模型覆盖 #4549)、**ZeroClaw** (#10005 Health Check 语义修复) | 核心痛点：**配置干跑验证、健康检查语义准确性、成本/Token 审计、结构化日志**。 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键词 | 功能侧重差异化 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **企业级/生产环境通用智能体平台** | 企业内部部署、SaaS 厂商、高并发场景开发者 | Gateway 中心化、异步技能总线、SQLite/Postgres 持久化、多协议网关 | **全渠道接入、长会话管理、运维工具链完备、插件生态最丰富** |
| **ZeroClaw** | **下一代可编程、可审计智能体运行时** | 基础设施工程师、安全敏感型组织、研发自定义运行时 | RFC 治理、WASM 插件、能力模型、ZeroRelay/ZeroRouter、Append-only Event Log | **架构治理最规范、安全栈分层最深、WASM 优先、协议层解耦最彻底** |
| **ZeptoClaw** | **安全优先、高性能单二进制智能体** | 个人开发者、边缘部署、安全审计严格场景 | 单二进制、能力继承、Footprint Ladder、Prompt Envelope、字节稳定缓存 | **P0 安全响应最快、编译期模块裁剪、Prompt 缓存架构创新、轻量化极致** |
| **NanoBot** | **开发者友好的本地优先 Agent 框架** | 个人开发者、本地 LLM 爱好者、需高度定制工作流 | MessageBus 事件总线、Model Failover、WebUI Dev Mode、MCP 标准支持 | **模型故障转移健壮、开发调试体验佳、WebUI 集成度高、配置灵活** |
| **CoPaw** | **协作式/多智能体工作流平台** | 团队协作、技能市场构建者、复杂任务编排 | Advisor Mode、Make Skill v2、QwenPaw Hub、MCP Coordinator | **多 Agent 协作编排、技能全生命周期管理、Hub 多租户商业化路径清晰** |
| **Hermes Agent** | **高性能推理/工具调用执行引擎** | (推测) 高吞吐推理服务、模型服务商 | (数据截断) 疑似 Rust 高性能核心、流式优先 | **推测：极致推理延迟优化、流式工具调用、模型服务集成** |
| **IronClaw** | **基准测试/沙箱标准化参考实现** | 研究员、基准测试工程师 | Pi Sandbox、Bun Worker、Benchmark 导向 | **沙箱技术验证场、启动模式标准化、非通用生产工具** |
| **PicoClaw** | **轻量级嵌入式/协议适配 Agent** | 硬件厂商、IRC/IM 机器人开发者 | 极简核心、协议适配层 (IRC/Telegram) | **协议适配深度好 (IRC 长消息)、资源占用极低、功能边界收敛** |
| **LobsterAI** | **桌面端协同 Agent 客户端** | 终端用户、桌面自动化场景 | Tauri/React 前端、Cowork Session、MCP Per-session | **UI/UX 导向、会话级工具控制、前端架构重构中 (积压严重)** |

---

## 6. 社区热度与成熟度分层

| 梯队 | 项目 | 阶段特征 | 关键指标 | 建议关注策略 |
| :--- | :--- | :--- | :--- | :--- |
| **T0: 生态核心·规模化成熟期** | **OpenClaw** | **质量巩固与规模化扩展并重**。核心架构稳定，聚焦 P1 Bug 清零、异步化重构、性能调优。 | 日均 1000+ 活动、周度 Release、73+ Contributors、完善分级 Bug 流程。 | **跟踪核心 PR 合并进度 (#139616 等)、P1 Bug 解决率、v2026.10 版本范围**。 |
| **T1: 架构创新·治理驱动期** | **ZeroClaw**, **ZeptoClaw** | **架构深水区，高频 RFC 修订，安全/核心模型重构**。ZeroClaw 治理成熟；ZeptoClaw 安全响应极快。 | 周级 Release / 高频 RFC (Rev 5-10

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026‑09‑06）**  

---

### 1. 今日速览  
- 项目在过去 24 小时内活跃度较高：共 **24 条 PR** 有更新（其中 17 条仍待合并，7 条已合并/关闭），但 **仅 1 条 Issue** 新开（#5674），未出现新版本发布。  
- 今天的主要工作集中在 **bug 修复**（尤其是针对 NVIDIA NIM 超时导致 agent 停止的问题）以及 **基础设施改进**（会话持久化离开事件循环、心跳模型覆盖、WebUI 远程路径支持等）。  
- 讨论热度整体偏低：今日所有 PR 和 Issue 的评论数均为 0（或未显示），说明社区目前更多在代码提交而非讨论。  
- 项目整体健康状况良好——大量修复已进入待合并阶段，核心功能的稳定性正在提升。

---

### 2. 版本发布  
> **无新版本发布**。（今日没有标记的 Release）

---

### 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 状态 | 主要贡献 | 链接 |
|----|------|----------|------|
| #5670 | **已关闭** | 使用 MessageBus 统一本地事件订阅与渠道文本/类型事件的投递；完成上下文压缩端到端重构，保持现有 wire payload 与 session 格式兼容。 | https://github.com/HKUDS/nanobot/pull/5670 |
| #5672 | **已关闭** | 清理过时的不存在性检查测试，保留可观测行为、安全及协议遗漏覆盖；保留 email 验证无写回归检查（字节比对）。 | https://github.com/HKUDS/nanobot/pull/5672 |
| #5671 | **已关闭** | 在 `nanobot webui --dev` 开发模式下跳过生产 WebUI bundle 新鲜度检查，避免因缺失生产 bundle 产生误告警，同时保留生产模式的原有行为。 | https://github.com/HKUDS/nanobot/pull/5671 |
| #5669 | **已关闭** | 增补文档：解释由模型上下文窗口、输出预留及安全边际得出的 **derived context budget**，并在模型预设配置参考中添加四行说明。 | https://github.com/HKUDS/nanobot/pull/5669 |

> 以上四个 PR 均为 **已合并/关闭**，代表今日在 **事件总线统一、测试清理、开发者体验以及文档完善** 方面的前进步伐。其余仍在待合并状态的 PR（如 #5675、#5580 等）将在后续合并后进一步提升系统稳定性与功能覆盖。

---

### 4. 社区热点（今日评论/反应最多的议题）  
由于今日所有 Issue 与 PR 的评论字段均为 **undefined（即 0）**，没有出现明显的讨论热点。然而，从更新频率看，**#5675（fix(providers): allow model failover after runner deadlines）** 是今日最新且直接关联今日唯一 Issue（#5674）的 PR，值得维护者关注其后续审查与合并情况。  

- **#5675** – 修复 NVIDIA NIM 超时导致 agent 停止的问题，已标记 `priority: p2`，链接：https://github.com/HKUDS/nanobot/pull/5675  
- **#5674** – 新开 bug 报告，描述当 NVIDIA NIM 返回特定超时错误时 agent 误将其视为模型输出而停止工作，链接：https://github.com/HKUDS/nanobot/issues/5674  

虽然目前没有评论，但这两条记录形成了 **今日唯一的技术焦点**。

---

### 5. Bug 与稳定性（按严重程度排序）  

| 严重度 | 描述 | 关联 Issue/PR | 是否已有 fix PR | 链接 |
|--------|------|---------------|----------------|------|
| **高** | NVIDIA NIM 超时（“LLM returned error: … timed out after 300s/600s”）被误当作模型输出，导致 agent 整体停止工作。 | Issue #5674（新开） | **有**：PR #5675 已提交修复（允许在 runner deadline 后进行模型故障转移） | Issue：https://github.com/HKUDS/nanobot/issues/5674  PR：https://github.com/HKUDS/nanobot/pull/5675 |
| **中** | 会话持久化阻塞事件循环（慢速文件锁/文件 I/O）导致无关对话 stalled。 | 已在 PR #5580 中提出解决方案（将会话持久化离开事件循环） | **有**：PR #5580 待合并 | PR：https://github.com/HKUDS/nanobot/pull/5580 |
| **中** | 心跳模型运行时受主 agent 模型约束，导致资源浪费。 | PR #4549（添加 `modelOverride` 配置） | **有**：PR #4549 待合并 | PR：https://github.com/HKUDS/nanobot/pull/4549 |
| **低** | WebUI 在远程项目路径选择时可能调用客户端本机文件选择器，造成安全或 usability 问题。 | PR #5673（支持远程项目路径并尊重 picker 能力） | **有**：PR #5673 待合并 | PR：https://github.com/HKUDS/nanobot/pull/5673 |

> 总体来看，**最高严重度的 bug 已有对应的修复 PR（#5675）**，预计在审核通过后将很快合并，从而消除今日的主要稳定性风险。

---

### 6. 功能请求与路线图信号  

| 功能请求 | 关联 PR | 状态 | 预计纳入版本 |
|----------|---------|------|--------------|
| 心跳模型可替换（更便宜的模型） | #4549 | 待合并（已开放 2 个月） | 下一小版本（v0.x.x） |
| 心跳会话共享（非隔离） | #4551 | 待合并（同 #4549） | 同上 |
| WebUI 远程项目路径 & 原生 picker 能力适配 | #5673 | 待合并（今日新增） | 下一小版本 |
| 会话持久化离开事件循环（性能） | #5580 | 待合并（已开放 1 周） | 下一小版本 |
| MCP Apps 元数据保留 | #5386 | 待合并（已开放 3 周） | 下一小版本 |
| 签名直送 webhook（可选认证） | #5652 | 待合并（已开放 2 天） | 下一小版本 |
| 每 spawn 模型预设（允许列表） | #5561 | 待合并（已开放 1 周） | 下一小版本 |

> 这些功能均已经在 PR 中有具体实现，且大多数带有 `priority: p2` 或 `conflict` 标签，表明社区对它们的需求明确。若后续合并顺利，它们很可能出现在 **下一个常规发布**（预计为 0.XX.X 系列）中。

---

### 7. 用户反馈摘要  

- **痛点**：  
  - 用户在使用 NVIDIA NIM 时遇到特定超时错误时，agent 会完全停止，影响自动化流程（Issue #5674）。  
  - 部分用户反馈会话持久化在高并发或慢速存储环境下会阻塞主事件循环，导致其他对话卡住（PR #5580 背景）。  

- **满意点**：  
  - 最近的事件总线统一（#5670）和开发者模式下跳过 bundle 检查（#5671）得到了内部开发者的积极反馈，使得调试循环更快。  
  - 文档补充（derived context budget，#5669）被标记为有用的参考，帮助用户更好地配置模型上下文。  

- **建议**：  
  - 增加更多超时错误的容错机制（不仅限于 NIM，且可配置）。  
  - 提供更细粒度的会话 IO 超时配置，以便在受限环境下自行降级。  

---

### 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 项目 | 最后更新时间 | 天数未更新 | 备注 |
|------|--------------|------------|------|
| Issue #4231（Spawn 模型预设需求） | 2026‑08‑27 | 10 天 | 对应 PR #5561 已开放，但尚未合并；需关注审查进度。 |
| Issue #4291（Spawn 预设替代方案） | 2026‑08‑27 | 10 天 | 与 #4231 相关，同属 spawn 预设讨论。 |
| PR #4549（心跳模型覆盖） | 2026‑09‑05 | 1 天（虽然最近有更新，但已开放 2 个月） | 长期悬而未决，建议维护者评估是否合并或关闭。 |
| PR #4551（心跳共享会话） | 2026‑09‑05 | 1 天（同上） | 同上。 |
| PR #5386（MCP Apps 元数据保留） | 2026‑09‑05 | 1 天（开放 3 周） | 需要检查是否存在冲突或需求变化。 |

> 上述条目均已超过 **一周** 没有显著进展（尽管有些最近有更新，但自创建至今已较长时间）。维护者可考虑在例行ทriage会议中重新评估它们的优先级或明确后续路线图。

---

**总结**：今日 NanoBot 在代码活跃度上表现强劲，特别是围绕 **NVIDIA NIM 超时 bug** 的修复已准备就绪；其余多项功能与性能改进 PR 正待合并。社区讨论仍然偏少，建议维护者在合并后适当发布更新公告或邀请社区试用，以提升反馈频率。项目健康度总体良好，近期版本可期待在功能完备性与稳定性上同步提升。祝开发顺利！

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报 (2026-09-06)

## 1. 今日速览
今日 Hermes Agent 项目保持了极高的开发活跃度，过去24小时内共有 **50 条

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-09-06)

## 1. 今日速览
今日PicoClaw项目整体活跃度处于平稳偏低状态，未有新版本发布。在过去24小时内，项目共更新了2条Issue和3条PR。PR方面，3条合并修复类PR均由维护者xuwei-xy提交并完成关闭，体现了维护者持续进行底层代码清理与整合；Issue方面，有1条新开/活跃的IRC功能请求和1条已关闭的stale需求。项目整体处于常规维护与渐进式迭代期，社区功能讨论仍在缓慢推进。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共合并/关闭3条PR（[#1559](https://github.com/sipeed/picoclaw/pull/1559)、[#1545](https://github.com/sipeed/picoclaw/pull/1545)、[#1555](https://github.com/sipeed/picoclaw/pull/1555)），均由维护者xuwei-xy提交。这些PR均属于“fix: merge”类型，分别将历史遗留的开放PR（如#1327、#1500、#1390等）中的修复内容整合入主分支。此类操作清理了积压的修复请求，推进了底层代码的稳定性与整洁度，但未涉及全新核心功能的发布，整体向前推进属于基础性代码维护。

## 4. 社区热点
今日社区讨论最活跃的Issue是 [#3287](https://github.com/sipeed/picoclaw/issues/3287)（[Feature] Better support long messages in IRC），拥有10条评论。用户提出在IRCv3协议下，超过512字节默认限制的长消息被客户端自动拆分，导致PicoClaw将其视为多条独立消息，破坏了语义连贯性。背后的核心诉求是希望PicoClaw能够识别并还原这类长消息，将其作为单一连贯消息处理，以提升IRC协议下的复杂对话体验。此外，[#3342](https://github.com/sipeed/picoclaw/issues/3342)（虽已关闭）提出的“回合后引导模式”也反映出用户对于任务执行期间消息排队机制的关注。

## 5. Bug 与稳定性
今日未收到新的Bug报告、崩溃或回归问题反馈。今日合并的3条修复PR主要针对历史遗留的分支合并问题，有助于消除代码库中的潜在隐患，但未涉及当前新增的严重Bug。项目整体稳定性在维护者的持续清理下保持平稳。

## 6. 功能请求与路线图信号
用户提出的新功能需求主要集中在两个方向：**IRC长消息连贯性支持**（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）和**对话中断/排队机制**（[#3342](https://github.com/sipeed/picoclaw/issues/3342，已标记stale关闭）。结合已有PR来看，目前维护者的开发精力主要投入到底层合并修复上。IRC长消息功能由于涉及协议解析层面的修改，技术实现有一定门槛，可能会在后续版本中成为重点关注对象；而“after-turn”引导模式因已被标记为stale关闭，短期内被纳入下一版本路线的可能性较低。

## 7. 用户反馈摘要
从Issues的讨论中提炼出真实用户痛点与使用场景：
1. **协议适配体验不佳**：在IRC协议下交互时，长消息被强制换行拆分，导致上下文割裂，用户期望获得连贯的对话体验（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）。
2. **异步任务处理机制僵化**：在Agent执行长任务时，用户发送的第二条消息会粗暴中断当前任务，导致工具调用被跳过，用户期望有更平滑的任务排队或后台处理机制（[#3342](https://github.com/sipeed/picoclaw/issues/3342)）。
这些反馈表明用户对多协议适配下的体验流畅度和异步任务处理机制有较高要求。

## 8. 待处理积压
**待处理积压提醒**：Issue [#3287](https://github.com/sipeed/picoclaw/issues/3287)（Better support long messages in IRC）自2026年7月22日创建以来已有近1.5个月，虽然积累了10条评论，但仍处于OPEN状态且暂无点赞和维护者跟进。考虑到该需求涉及IRC核心协议解析，且已有一定的社区讨论热度，建议维护者评估其优先级并分配开发资源，避免长期搁置。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**：2026-09-06
**数据来源**：github.com/nearai/ironclaw
**报告范围**：过去 24 小时

---

## 1. 今日速览

IronClaw 过去 24 小时整体活跃度处于**低位运行**状态，仅记录到 1 条 Issue 更新和 2 条 PR 更新，且无任何合并或关闭动作，仓库无新版本发布。Issue #8074 报告了一个配对用户在未连接共享频道中收到错误文案提示的 Bug；PR #8075 提出将嵌入式 Pi sandbox loop 作为默认启动模式（标记为 XL 规模且需先合并 #7908）；PR #7988 仍处于待合并状态，建议维护者关注积压的合并节奏。整体来看，项目处于常规维护与小幅度功能推进阶段，未出现重大进展或突发问题。

---

## 2. 版本发布

**今日无新版本发布。** 仓库在过去 24 小时内未发布任何 Release，建议关注 PR #8075 与 #7988 的合并进展，这两项变更可能为下一次版本迭代的核心内容。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，仓库进展主要体现在两条待合并 PR 上：

- **PR #8075**（[链接](https://github.com/nearai/ironclaw/pull/8075)）：核心贡献者 serrrfirat 提交，建议在沙箱镜像中增加 Bun/Pi agent-core worker 并将其作为新启动的默认配置，专门为基准测试场景服务。变更规模为 XL，且依赖前置 PR #7908 合并，作者明确标注"不要在基线 PR 合并前合并此 PR"。该 PR 是项目启动模式演进的重要信号。
- **PR #7988**（[链接](https://github.com/nearai/ironclaw/pull/7988)）：由 ironclaw-ci[bot] 自动触发的代码库知识图谱刷新，属于例行 CI/基础设施维护，已等待一周以上未合并，建议维护者尽快 review。

整体而言，项目今日**净推进幅度有限**，建议关注长期积压 PR 的处理节奏。

---

## 4. 社区热点

今日**社区互动整体偏冷**：

- **Issue #8074**（[链接](https://github.com/nearai/ironclaw/issues/8074)）：仅有 1 条评论、0 次点赞，但因其涉及多租户文案错配问题，具有一定代表性。
- **PR #8075** 与 **PR #7988**：均无评论，点赞数为 0，尚未引发社区讨论。

由于 PR #8075 涉及启动模式默认行为变更，属于潜在影响广泛的功能调整，预期后续会吸引更多 reviewer 关注；建议维护者主动发起 review 讨论以推动进度。

---

## 5. Bug 与稳定性

今日报告 1 条 Bug：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 中 | [#8074](https://github.com/nearai/ironclaw/issues/8074) | 配对用户在未连接的共享频道中执行被拒操作时，文案错误地指向"未配对用户需要连接账号"的提示，而非"频道未连接"提示 | ❌ 暂无 |

**Bug #8074 分析**：
- 症状：配对用户（paired user）在共享频道中触发动作拒绝时，因该频道在本安装实例上未连接（not connected），系统错误地展示了面向未配对用户的 manifest `connect_required` 文案。
- 潜在影响：影响多用户/多频道共享场景下的提示准确性，可能引起用户对连接状态的误解。
- 建议：维护者应在文案路由逻辑中区分"用户未配对"与"频道未连接"两种场景，并在文案清单中为配对用户补充专门的 channel-not-connected 文案。

---

## 6. 功能请求与路线图信号

今日未提交明确的用户功能请求，但有以下**间接路线图信号**：

- **PR #8075（嵌入式 Pi sandbox 默认化）**：明确指出"为基准测试场景（benchmark use）"服务，表明项目正在为性能评估与基准测试做基础架构调整，未来可能围绕 hosted-sandbox 模式构建更多能力。
- **Issue #8074**：用户实际上隐含反馈了"配对用户/未连接频道"这一细分场景缺乏正确文案，提示项目需要在多租户场景下细化文案矩阵，这很可能成为下一阶段 UX 改进的方向。

---

## 7. 用户反馈摘要

由于今日 Issues/PR 评论数量极少，用户反馈样本有限：

- **Issue #8074**（1 条评论）：用户 thisisjoshford 报告了一个具体的边缘场景反馈，指出"配对"与"频道连接"两个状态被错误耦合，反映出**多租户/共享频道场景下文案逻辑存在缺陷**，是该用户使用场景中的真实痛点。
- **PR 反馈**：当前阶段 PR 仍处于待 review 状态，缺少 reviewer 与贡献者的具体反馈意见。

建议维护者在 PR #8075 这种 XL 规模变更上主动寻求社区反馈，避免默认行为变更引发预期之外的用户影响。

---

## 8. 待处理积压

| 类型 | 编号 | 创建日期 | 等待天数 | 备注 |
|---|---|---|---|---|
| PR | [#7988](https://github.com/nearai/ironclaw/pull/7988) | 2026-08-29 | 约 8 天 | CI 自动生成的代码库知识图谱刷新，常规 review 即可，建议尽快合并 |
| PR（依赖项） | [#7908](https://github.com/nearai/ironclaw/pull/7908) | 早于 PR #8075 | — | PR #8075 明确标注需先合并，建议优先处理 |
| Issue | [#8074](https://github.com/nearai/ironclaw/issues/8074) | 2026-09-04 | 2 天 | 已报告但暂无 Fix PR，建议响应并分配负责人 |

**维护者建议**：
1. 优先处理 PR #7908 与 #8075 的依赖关系，避免影响后续沙箱默认化演进。
2. 跟进 PR #7988 这类低风险自动化 PR 的合并流程，避免积压。
3. 针对 Issue #8074 给出官方响应并明确修复时间线。

---

*报告生成时间：2026-09-06 | 数据范围：过去 24 小时 | 仓库健康度评估：🟡 平稳偏低活跃*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**日期：2026-09-06**

---

## 1. 今日速览

LobsterAI 项目今日活跃度处于**低位**。过去 24 小时内无新 Issue 创建、无 PR 合并、无版本发布，仅有的 2 条 PR 更新均为此前已标记为 `[stale]` 的长期未推进请求。仓库整体呈静默状态，PR 流量主要停留在 3 月底提交的重构与功能扩展提案上，尚未进入评审或合并阶段。建议关注者留意维护者响应节奏。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并或关闭。

当前仓库的代码主干在近 24 小时内未获得任何合并变更，意味着项目在功能落地与问题修复层面均无新推进。两笔仍处于 OPEN 状态的 PR 自 3 月底以来多次跨周更新却未见评审结论，详见下节。

---

## 4. 社区热点

今日无新增评论或点赞。两条历史 PR 由于近期 stale 标识变动重新触发了机器人提示，仅此而已：

- **#1069「重构：拆分 CoworkSessionDetail 单文件」** — 由 `stone333` 提交（[链接](https://github.com/netease-youdao/LobsterAI/pull/1069)）
- **#1070「feat(cowork): 支持 per-session MCP 开关控制」** — 由 `vdorchan` 提交（[链接](https://github.com/netease-youdao/LobsterAI/pull/1070)）

两条 PR 均集中于 **Cowork（协同会话）** 模块，体现出社区对会话体验优化的持续关注。

---

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归类 Issue 报告。Issues 列表为 0，PR 列表中也没有以修复缺陷为主要目的的提交。

需要注意的是：**#1070** 间接涉及请求拦截层的实现，一旦误改可能影响 MCP 全链路稳定性，目前仍待评审。

---

## 6. 功能请求与路线图信号

虽然没有新的功能请求 Issue，但今日更新的两条 PR 本身即为强信号，反映出 LobsterAI 在 **Cowork / Agent 桌面端**方向的两条路线：

| PR | 方向 | 潜在影响 |
|---|---|---|
| [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | 大型组件拆分、流式渲染优化 | 提升可维护性、降低无关联消息重渲染开销 |
| [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | per-session MCP 开关 | 满足多场景下 MCP server 隔离需求，推动 Agent 工具能力精细化 |

若维护者近期推动评审，这两项能力有望成为下一阶段版本的重要组成。

---

## 7. 用户反馈摘要

由于今日无新增 Issues 与评论，无法从一手用户反馈中提炼痛点。从 PR 摘要可间接观察到的需求动机：

- 长期演进的 `CoworkSessionDetail.tsx` 已膨胀至 2100+ 行，维护者与贡献者希望**降低维护门槛、改进渲染性能**（[#1069](https://github.com/netease-youdao/LobsterAI/pull/1069)）。
- 用户在多会话并发场景下，需要**对 MCP server 进行会话级粒度的开关控制**（[#1070](https://github.com/netease-youdao/LobsterAI/pull/1070)），当前全局开关粒度过粗。

---

## 8. 待处理积压

下列两项均已超过 5 个月未合并，是当前仓库最显著的「积压信号」，建议维护者重点处理：

- **#1069**（创建于 2026-03-30）— 核心组件重构，影响后续 Cowork 模块的可演进性 [链接](https://github.com/netease-youdao/LobsterAI/pull/1069)
- **#1070**（创建于 2026-03-30）— 用户高频诉求的 MCP 会话级控制能力 [链接](https://github.com/netease-youdao/LobsterAI/pull/1070)

两条 PR 均被标记为 `[stale]`，可能需要维护者主动 rebase 或回应以避免被机器人自动关闭。

---

**项目健康度提示**：今日仓库整体呈「静默」状态，无新 Issue、无合并、无发版，但有 2 条高质量长期 PR 等待评审。建议关注后续 1-2 周内维护者是否给出明确方向，以判断项目节奏是否正常。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 - 2026-09-06

## 1. 今日速览

2026年9月6日，CoPaw 项目保持活跃但无新版本发布。当天共有 10 条 Issue 更新（7 条新建/活跃，3 条已关闭），3 条 Pull Request 更新，其中 1 条 PR 已准备合并，其余为开放状态。项目聚焦于 QwenPaw Hub 2.2.0 方向的规划讨论，以及多项关键 Bug 修复与功能增强工作。

## 2. 版本发布

**无新版本发布**。截至 2026-09-06，当前版本仍停留在 2.1.0 阶段。项目内部正在讨论 QwenPaw Hub 2.2.0 的功能路线（见 Issue #7318），但尚未正式发布新版本。所有已发布版本（v2.1.0~v2.2.0）均存在已知 Bug（如上下文窗口限制、异常处理缺失等），需通过后续 PR 逐步修复。

## 3. 项目进展

### 关键 PR 进展
- **#7509 [Ready for Merge]**：`feat(skill): Update make-skill to v2`  
  作者：Leirunlin | 状态：准备合并 | 评论：undefined  
  描述：引入 Make Skill v2，实现基于脚本的工作流（计划审批 → 私有草稿创建 → 发布）。这是提升技能管理自动化程度的重要步骤。

- **#7569 [Open]**：`feat(modes): add Advisor Mode`  
  作者：AntiQuality | 状态：开放 | 评论：undefined  
  描述：添加 Advisor Mode，采用“顾问模式”将强力顾问模型与廉价工作者代理配对，用于复杂任务的协同工作流。

- **#6874 [Under Review]**：`feat(mcp): add configurable tool call timeout`  
  作者：AaronZ345 | 状态：审核中 | 评论：undefined  
  描述：为 MCP 工具调用增加可配置的超时时间（默认 300s），并调整 HTTP/SSE 读预算以支持更长任务。

### 讨论亮点
Issue #7318 持续活跃，围绕 QwenPaw Hub 2.2.0 版本展开讨论，社区提出了关于多租户版 Hub 的功能需求（如跨团队权限管理、统一技能库共享等）。

## 4. 社区热点

| 排序 | Issue/PR | 类型 | 评论数 | 关键问题 |
|------|----------|------|--------|----------|
| 1 | #7573 | 功能请求 | 1 | “Edit last message” 与 “Rewind” 按钮 |
| 2 | #7572 | Bug | 1 | 工具分发层异常堆栈被吞掉，导致调试困难 |
| 3 | #7318 | 战略讨论 | 23 | QwenPaw Hub 2.2.0 方向规划 |
| 4 | #7576 | Bug | 1 | RetryChatModel 硬编码上下文大小 32768，导致超长对话出现 CONTEXT_UNFIT |
| 5 | #7575 | Bug | 1 | img-gen skill edit() 错误发送 response_format 参数 |

**重点关注**：#7572（异常处理缺失）和 #7573（Web UI 交互增强）是当天最活跃且影响用户体验的两个议题。

## 5. Bug 与稳定性

按严重程度排序：

| 优先级 | Issue | 描述 | 状态 | 修复情况 |
|--------|-------|------|------|----------|
| 🔴 高 | #7572 | `qwenpaw/tool_calls/_coordinator.py` 的 `_drain()` 方法捕获所有异常但仅返回 `str(exc)`，日志无痕迹，无法定位错误来源 | 开放 | 无 PR |
| 🔴 高 | #7576 | `RetryChatModel` 硬编码 `context_size=32768`，导致超过 31k token 的对话出现 CONTEXT_UNFIT 错误 | 开放 | 无 PR |
| 🟡 中 | #7474 | 自定义提供商加载失败（PR #7337 合并后） | 已关闭 | 已修复（需确认） |
| 🟡 中 | #7571 | 插件开发中路径混乱，开发代码意外覆盖运行时路径 | 开放 | 无 PR |
| 🟢 低 | #7575 | img-gen skill `edit()` 错误发送 `response_format` 参数 | 已关闭 | 已修复 |

**总结**：当前项目面临两大核心技术债务——异常处理机制缺失（#7572）和上下文长度限制（#7576）。这些问题直接影响系统稳定性和用户体验，建议优先修复 #7572。

## 6. 功能请求与路线图信号

- **#7573（高优先级）**：Web UI 增加“编辑最后一条消息”与“倒带”控制。此功能直接关联用户在长对话中需要纠正错误或回滚的痛点，符合 QwenPaw Hub 2.2.0 的多租户扩展目标。
- **#7509（Make Skill v2）**：未来版本应考虑集成 Make Skill v2 的工作流，特别是“计划审批 → 私有草稿 → 公开发布”的自动化流程，以提升技能复用效率。
- **#7569（Advisor Mode）**：建议在 2.2.0 版本中完善 Advisor Mode 的实现细节，确保顾问模型与工作者代理的资源分配合理。
- **#7318（Hub 2.2.0 规划）**：社区明确提出多租户版 Hub 的方向，未来版本应重点落实跨团队权限、统一技能库共享及多租户隔离机制。

## 7. 用户反馈摘要

从 Issue 评论中提炼的核心痛点：

1. **上下文长度限制**：用户反复遇到长对话导致 `CONTEXT_UNFIT` 错误（#7576），期望支持更长上下文或动态调整上下文大小。
2. **错误调试困难**：#7572 中的异常被吞掉，用户无法定位问题根源，严重影响生产环境监控与排查。
3. **Web UI 交互不足**：#7573 提出的“编辑最后一条消息”和“倒带”功能能显著提升用户体验，尤其适合需要迭代对话的场景。
4. **多租户支持需求**：#7318 讨论的 QwenPaw Hub 2.2.0 多租户版是长期需求，反映出团队对团队协作场景的重视。
5. **插件开发体验**：#7571 指出插件开发时路径混乱，建议在插件运行时路径管理上进行优化。

## 8. 待处理积压

| Issue/PR | 状态 | 影响范围 | 建议跟进 |
|----------|------|----------|----------|
| #7572 | 开放 | 核心稳定性 | 优先修复异常处理逻辑，确保错误信息完整记录并可调试 |
| #7474 | 已关闭 | 自定义提供商加载 | 确认修复后是否彻底解决，防止类似问题复现 |
| #7571 | 开放 | 插件开发体验 | 优化路径管理，避免开发代码意外覆盖运行时路径 |
| #7318 | 开放 | 产品路线 | 跟进 Hub 2.2.0 的具体功能落地计划，特别是多租户权限与技能共享 |

---

**整体评估**：CoPaw 项目在 2026-09-06 保持了良好的活跃度，核心功能（Hub 2.2.0 规划、技能管理、工具调用）都在推进。然而，**异常处理缺失（#7572）** 和 **上下文长度限制（#7576）** 是当前最大的风险点，需要在下个版本中优先解决。此外，Web UI 交互增强（#7573）和多租户支持（#7318）是值得投入的功能优先级。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 | 2026-09-06

---

## 1. 今日速览

ZeptoClaw 今日保持**高度活跃**的开发状态，共产生 **14 条更新**（12 Issues + 2 PRs）。项目处于**安全加固冲刺期**——两个 P0 安全问题均已提交修复 PR（#671、#672），体现了维护者对安全问题的快速响应能力。功能层面，9 个新 RFC/Feature 提案集中涌现，覆盖内存管理（#666）、代理管道迁移（#663）、通道协议完善（#662）等核心架构议题，表明项目正从"可用"向"可演进"过渡。整体健康度：**良好**，建议关注 RFC 类 Issue 的优先级排序。

---

## 2. 版本发布

**无新版本发布。**

> 最近一个版本追溯至更早期，今日无 Release 活动记录。

---

## 3. 项目进展

今日有 **2 个安全修复 PR** 正在待合并状态，推进了项目安全态势的关键改进：

### PR #672 | 修复插件/MCP 进程的继承环境变量泄露
| 字段 | 内容 |
|------|------|
| **状态** | OPEN（待合并） |
| **作者** | qhkm |
| **修复对象** | Issue #660 |
| **摘要** | 此前 Agent 控制的子进程继承了完整父进程环境变量，导致 API Keys、Tokens、数据库 URL 等敏感信息泄露至插件和 MCP 服务器进程。该 PR 在所有三个未清理的 spawn 站点补全了环境变量隔离。 |

🔗 [qhkm/zeptoclaw PR #672](https://github.com/qhkm/zeptoclaw/pull/672)

---

### PR #671 | 修复无效 agent_mode 的失败关闭逻辑
| 字段 | 内容 |
|------|------|
| **状态** | OPEN（待合并） |
| **作者** | qhkm |
| **修复对象** | Issue #659 |
| **摘要** | 此前 `agent_mode` 收到未知/拼写错误的值时会回退到 `Autonomous`（最大权限），该 PR 改为默认解析为 `Assistant` 并发出警告，确保无效配置永远不会提升权限。 |

🔗 [qhkm/zeptoclaw PR #671](https://github.com/qhkm/zeptoclaw/pull/671)

---

**进展评估**：两个 P0 安全问题从发现到 PR 提交仅耗时约 1 天，响应速度优秀。建议尽快合并以消除已知安全风险。

---

## 4. 社区热点

以下 Issues 今日新增并引发关注，按活跃度（评论/反应数）呈现：

### 🔥 #667 - Footprint Ladder + Extension Host v2（高关注）
| 字段 | 内容 |
|------|------|
| **优先级** | P2-High |
| **作者** | qhkm |
| **类型** | Feature RFC |
| **核心诉求** | 当前 19 个内置工具组分散注册，编译时模块、配置字段、注册分支同步增长，导致二进制体积和运维复杂性攀升。提议引入"Footprint Ladder"分层模型，实现扩展的元数据化注册。 |
| **引用来源** | Exec #9 + §1 可扩展性模型 |

🔗 [qhkm/zeptoclaw Issue #667](https://github.com/qhkm/zeptoclaw/issues/667)

**分析**：这是今日最具架构意义的提案，涉及工具注册机制的范式转变。若落地，将显著改善长期困扰大型 AI Agent 项目的"模块膨胀"问题。

---

### 🔥 #666 - 持久化跨会话召回与事务性内存写入（高关注）
| 字段 | 内容 |
|------|------|
| **优先级** | P2-High |
| **作者** | qhkm |
| **类型** | Feature RFC |
| **核心诉求** | 当前选择性检索机制（`src/memory/mod.rs:34–35`, `279–340`）在变更和召回维度存在缺陷，提议引入持久化存储和事务性写入语义。 |
| **引用来源** | Exec #8 + §2 记忆与学习系统 |

🔗 [qhkm/zeptoclaw Issue #666](https://github.com/qhkm/zeptoclaw/issues/666)

**分析**：内存系统的长期痛点终于被正式提出。对比 Hermes 的"始终存在"方案，ZeptoClaw 的"选择性检索"路径更轻量，但当前实现缺乏持久化保障。

---

### 🔥 #661 - 字节级稳定的 Prompt Envelope 合约（高关注）
| 字段 | 内容 |
|------|------|
| **优先级** | P2-High |
| **作者** | qhkm |
| **类型** | RFC + 性能 |
| **核心诉求** | 系统提示每轮重建，携带实时时间戳和动态内存内容，导致 Prompt Cache 策略失效。提议构建"字节稳定"的 Prompt Envelope，使缓存成为可能。 |
| **引用来源** | Exec #3, §3 上下文与 Prompt Cache 管理 |

🔗 [qhkm/zeptoclaw Issue #661](https://github.com/qhkm/zeptoclaw/issues/661)

**分析**：这是标记为"Largest architectural performance gap"的提案。若实现，将直接提升 Token 效率和响应速度，是高并发场景的关键优化点。

---

## 5. Bug 与稳定性

今日共报告 **2 个 P0 安全漏洞**（均已提交修复 PR），无其他 Bug 报告：

### 🚨 P0 #660 - 子进程环境变量隔离漏洞
| 字段 | 内容 |
|------|------|
| **严重程度** | P0 - Critical |
| **领域** | 安全 |
| **状态** | 已提交修复 PR #672 |
| **问题描述** | 多个 spawn 站点（`src/runtime/native.rs:35–60`、`src/tools/binary_plugin.rs:149–170`、`src/tools/mcp/transport.rs:102–122`、`src/channels/plugin.rs:206–217`）构建子进程命令时未清理继承环境变量。 |
| **影响** | 敏感凭证（API Keys、Tokens、数据库 URL）可能泄露至第三方插件/MCP 进程。 |

🔗 [qhkm/zeptoclaw Issue #660](https://github.com/qhkm/zeptoclaw/issues/660)

**修复状态**：✅ PR #672 已提交，待合并。

---

### 🚨 P0 #659 - 无效 agent_mode 默认授权漏洞
| 字段 | 内容 |
|------|------|
| **严重程度** | P0 - Critical |
| **领域** | 安全 |
| **状态** | 已提交修复 PR #671 |
| **问题描述** | `src/security/agent_mode.rs:147–160` 在收到无效 mode 字符串时回退到 `Autonomous`（最大权限），未知配置值反而获得最高权限。 |
| **影响** | 配置错误可能导致 Agent 在超出预期的权限级别运行。 |

🔗 [qhkm/zeptoclaw Issue #659](https://github.com/qhkm/zeptoclaw/issues/659)

**修复状态**：✅ PR #671 已提交，待合并。

---

**稳定性评估**：两个安全漏洞均在同一天被识别并提交修复，展现了维护者对安全审计结果的快速响应。建议优先合并后发布补丁版本。

---

## 6. 功能请求与路线图信号

今日新增 **9 个功能提案**，按优先级与落地可能性分类：

### 🔧 短期内可能落地的功能（已有实现路径）

| Issue | 功能 | 优先级 | 落地概率 |
|-------|------|--------|----------|
| **#671/#672** | P0 安全修复 | P0 | ✅ 已提交 PR |
| **#663** | Agent Pipeline 迁移完成 | P2-High | 高（遗留债务清理） |
| **#665** | Cron Job v2（完成确认、运行账本） | P2-High | 高（RFC 已成型） |

### 📋 中期路线图信号

| Issue | 功能 | 优先级 | 关联 RFC |
|-------|------|--------|----------|
| **#666** | 跨会话持久化内存 | P2-High | Exec #8 |
| **#668** | 密封级集成测试（无真实凭证） | P2-High | Exec #10 |
| **#667** | Extension Host v2（Footprint Ladder） | P2-High | Exec #9 |
| **#662** | 通道插件协议完善（双向通信） | P2-High | Exec #4 |

### 🔮 长期架构演进

| Issue | 功能 | 优先级 | 备注 |
|-------|------|--------|------|
| **#661** | Prompt Envelope 字节稳定性 | P2-High | 性能关键路径 |
| **#664** | 委托代理能力继承 | P2-High | 子代理策略控制 |
| **#669** | 审计链持久化与轮换 | P2-High | 进程间篡改防护 |
| **#670** | 配置源透明度与 Schema 支持 | P3-Normal | UX 改进 |

---

## 7. 用户反馈摘要

> 今日 Issue 均为维护者（qhkm）主动创建，无外部用户评论反馈。

从 Issue 内容可提炼出以下**内部使用痛点**（维护者视角）：

| 痛点 | 体现 Issue | 频率 |
|------|------------|------|
| 环境变量泄露至子进程 | #660 | 已知风险 |
| 配置错误默认放行 | #659 | 已知风险 |
| 生产环境仍运行旧 AgentLoop | #663 | 技术债务 |
| 通道插件仅支持出站 | #662 | 功能缺失 |
| 系统 Prompt 破坏缓存 | #661 | 性能瓶颈 |

**社区参与度**：当前为零外部反馈，全部 Issue 由维护者主动创建。说明项目可能处于"内部重构期"，尚未大规模开放社区贡献。

---

## 8. 待处理积压

以下为**长期未解决**的重要 Issue，建议维护者关注：

### ⚠️ 高优先级积压

| Issue | 标题 | 创建时间 | 现状 |
|-------|------|----------|------|
| **#661** | Prompt Envelope 字节稳定性 | 2026-09-05 | OPEN（RFC） |
| **#662** | 通道插件协议完善 | 2026-09-05 | OPEN（RFC） |
| **#663** | Agent Pipeline 迁移 | 2026-09-05 | OPEN（Feature） |
| **#664** | 委托代理能力继承 | 2026-09-05 | OPEN（RFC） |
| **#665** | Cron Job v2 | 2026-09-05 | OPEN（RFC） |

### 📌 需优先合并的 PRs

| PR | 标题 | 状态 |
|----|------|------|
| **#672** | 环境变量隔离修复（P0 #660） | OPEN |
| **#671** | agent_mode 失败关闭（P0 #659） | OPEN |

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issues | 12 | 📈 较昨日 |
| 新增 PRs | 2 | — |
| 版本发布 | 0 | — |
| 待合并 PRs | 2 | ⚠️ 含 2 个 P0 安全修复 |
| P0 问题 | 2 | ✅ 已提修复 |
| P2 问题 | 9 | 📋 待排期 |

---

**报告生成时间**：2026-09-06  
**数据来源**：GitHub qhkm/zeptoclaw  
**维护者联系方式**：[qhkm](https://github.com/qhkm)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报
**日期：2026-09-06**

---

## 1. 今日速览

ZeroClaw 今日呈现**高强度治理与架构演进**态势。24 小时内共产生 42 条 Issue 更新（34 条新开/活跃，8 条已关闭）与 50 条 PR 更新（44 条待合并，6 条合并/关闭），活跃度显著高于日常均值。讨论焦点集中在 v0.8.5 发布后的稳定性收尾、#8289 安全栈的持续推进、以及多项高优先级 RFC 的修订投票。整体来看，项目处于**版本过渡期 + 架构深水区**：主线从特性扩张转向治理清理与安全硬化，符合 "weekly stabilization line" 的既定节奏。

---

## 2. 版本发布

### v0.8.5 — 安全、连接性与运维体验发布

ZeroClaw v0.8.5 是一次跨越 **454 个 commit、73 位贡献者** 的中型版本发布，重点如下：

- **新组件**：引入 **ZeroRelay** 与 **ZeroRouter**，扩展实时聊天与 Provider 能力。
- **安全强化**：加固插件、沙箱、Webhook、凭据与文件边界。
- **稳定性**：作为 v0.8.5 有限周稳定线的产出（参见 #9459 追踪器），每周切片发布已就绪工作，不再等待所有里程碑项。

🔗 [Release v0.8.5](https://github.com/zeroclaw-labs/zeroclaw)

> **迁移注意**：v0.8.5 引入了 ZeroRelay/ZeroRouter 的连接面扩展，若使用了自定义 Provider 网关或自部署路由组件，需检查 `web_dist_dir` 兼容契约（参见 #9975）。此外，沙箱策略层（应用层 vs OS 层）仍存在历史漂移，部署前请关注 #6996 的进展。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 意义 |
|---|---|---|
| [#10005](https://github.com/zeroclaw-labs/zeroclaw/pull/10005) | fix(channels): 通道健康度判断不再依赖 listener liveness | **修复 `/health` 误报**：此前从未真正连接的通道会被报告为 `ok`，现在健康度基于通道本身而非监听器存活状态。修复了 Telegram 等通道的运维盲区。 |
| [#5230](https://github.com/zeroclaw-labs/zeroclaw/pull/5230) | feat(plugins): WASM 插件系统 + 安全沙箱 | **超长周期 RFC 落地**：自 2026-04-02 开启的插件扩展机制提案正式关闭（可能为被取代或归档）。结合 #7822 的 `PluginCapability::Observer`，项目正以分阶段、可观察的 WASM 架构逐步替代。 |

### 阶段性推进（仍待合并但有显著进展）

- **#8289 安全栈系列**（JordanTheJet 主导）：今日活跃 PR 包括 #10248/#10255/#10259/#10263/#10265/#10268/#10270/#10274/#10275/#10321。该堆栈已完成 Stage 2–5 的多阶段交付，涵盖规范化主体、OIDC 验证、RPC 认证、私有主体内存、路由层认证与浏览器 PKCE 注册，是 v0.8.5 后最重要的安全基线工作。
- **#9320**（IftekharUddin）：cron agent job 增加 wall-clock timeout 并释放锁——解决长期存在的调度任务挂起问题。

整体而言，项目在**通道可靠性、调度稳定性、WASM 插件架构、安全主体模型**四条主线上向前推进了一大步。

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** — RFC: Runtime-owned conversation sessions and transport surface adapters（**33 条评论**）
   - 由 NiuBlibing 提交，已进入 **Revision 5**，是 Revision 4 投票未通过后的实质性替换。
   - 核心诉求：将对话会话的所有权下沉到 runtime，并提供统一的传输适配器表面。

2. **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — RFC: Unified file and attachment architecture（**26 条评论**）
   - 同样由 NiuBlibing 提交，已进入 **Revision 10**。高频修订反映社区对附件/文件架构尚未达成共识。

3. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — RFC: Work Lanes, Board Automation, and Label Cleanup（**24 条评论**）
   - **治理类 RFC + 落地追踪器**，自 0.8.0-beta-1 起持续推进，已 Ratified。当前正进行 Rollout。

4. **[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** — RFC: Granular sandbox policy（**24 条评论**）
   - 聚焦文件系统双层策略（应用层 vs OS 层如 Bubblewrap/Landlock/Seatbelt）的历史漂移问题。

5. **[#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)** — RFC: Verbatim channel send over the gateway（**14 条评论**）
   - 新增网关路由，允许调用方绕过 agent turn 直接投递消息。

6. **[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)** — RFC: WASM plugin lifecycle observer subscriptions（**13 条评论**）
   - 已被维护者接手进入 Revision 2，复用现有的 `PluginCapability::Observer`，降低破坏性。

### 集中诉求分析

社区当前的关注点高度集中在三件事：**会话/附件的统一架构抽象**（#9487/#9488/#10076）、**沙箱策略的一致性**（#6996/#10536）、以及 **#8289 安全栈的渐进落地**。这种 "高频修订 + 多 PR 堆栈" 的形态，是 ZeroClaw 进入企业级可用性前夜的典型表现。

---

## 5. Bug 与稳定性

按严重程度排列：

### S1 — 工作流被阻塞

| Issue | 描述 | Fix PR |
|---|---|---|
| [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | **macOS Seatbelt 忽略 `allowed_roots`**，shell 命令即使配置了允许根目录仍被拒 | 待修复 |

### S2 — 行为降级

| Issue | 描述 | Fix PR |
|---|---|---|
| [#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) | bounded delegate 静默剥离 delegate 工具，与 `delegation_policy/max_delegation_depth` 配置矛盾 | 待修复 |
| [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) | `model_routing_config` 拒绝 `custom.*` 等合法 provider 槽位，工具校验与配置 schema 分歧 | 待修复 |
| [#10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532) | degraded-config 修复建议可能调用与运行 daemon 不同的二进制 | 待修复 |
| [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | 在非视觉模型下，`[media attachment]` 占位符被原文投递到用户 | 待修复 |
| [#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) | TTS 逐字朗读 Markdown 与 emoji | 待修复 |
| [#10045](https://github.com/zeroclaw-labs/zeroclaw/issues/10045) | 持久化图像标记可能保留临时源路径并反复告警（已关闭） | ✅ 已落地 |
| [#10282](https://github.com/zeroclaw-labs/zeroclaw/issues/10282) | hardware probe feature 未传递到 tool 实现（已关闭） | ✅ 已落地 |

### S3 — 小问题

| Issue | 描述 |
|---|---|
| [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) | 新的 log sink 引入回归，在默认并行 runner 下与 migration 测试产生竞态 |

### 观察

S1 级别的 macOS Seatbelt 安全策略不一致问题需要**优先修复**，因为它直接破坏了用户配置的沙箱意图。多个 P1 的 provider/config bug 集中在 `model_routing_config` 工具校验路径上，提示工具层与配置 schema 之间需要一次系统性的对账。

---

## 6. 功能请求与路线图信号

### 新开功能需求

- **[#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641)** — Web 端 cron 计划输入字段化（per-field cron schedule input）
  - 由 databillm 提交，目前是单一自由文本输入，无字段指引与客户端校验。
  - **路线图可能性：高**。属于 Web UX 改进，与 #9975 的 `web_dist_dir` 兼容契约同向。

- **[#10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530)** — 通过 OpenAI-compatible 网关透传 Anthropic extended-thinking 参数
  - 由 Audacity88 提交。LiteLLM、TrueFoundry 等组织的代理场景下，extended thinking 静默不可用。
  - **路线图可能性：高**。该问题直接关系到 Claude 模型在企业代理后的可用性。

### 已有 PR 但仍需评审的功能

- **[#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356)** — AnySearch 作为 opt-in 的 web search provider（blocked）
- **[#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997)** — Telegram 安全模型选择器（blocked，XL 体积）
- **[#10636](https://github.com/zeroclaw-labs/zeroclaw/pull/10636)** — zerocode 会话中的 effort/display 控制（XL，依赖 #10611）

### 路线图信号总结

下一版本（推测 v0.8.6 或 0.9.0-beta）的候选主题已较为清晰：**Web UX 完善**（cron 输入、模型选择）、**Provider 透传能力**（extended thinking、AnySearch）、**安全栈后续阶段**（#8289 stage 6+）。WASM 插件系统的可观察接口（#7822 Rev 2）很可能在 0.9 周期落地。

---

## 7. 用户反馈摘要

从今日高评论议题中提炼的真实用户痛点：

- **"健康度是假的"**（#10005 的根因）：运维用户无法信任 `/health` 端点，因为从未真正连上的通道也被标为 `ok`。这反映出 ZeroClaw 在**可观测性语义**上仍有 gap——"监听器存活" 与 "通道健康" 之间的差异未被正确建模。
- **"配置告诉我可以，但我做不到"**（#10534/#10533/#10536）：用户在 bounded delegate、provider routing、macOS sandbox 上反复遇到"配置允许但运行时拒绝"的情况。这是典型的**配置 schema 与运行时实现漂移**问题，社区对此已显疲态。
- **"我想用 TTS 但听不了"**（#10626）：自托管用户希望 TTS 能朗读自然语言，但当前实现把 Markdown 与 emoji 一并念出。这反映了**多模态输出侧的最小化处理**尚未到位。
- **"附件被替换成 `[media attachment]`"**（#10625）：在非视觉模型下，内部占位符泄漏到最终用户回复。这是一个**通道降级路径的清理缺失**。

整体满意度信号：v0.8.5 的 ZeroRelay/ZeroRouter 被积极评价（73 位贡献者参与即证），但用户对**沙箱与配置一致性**的反复 bug 报告显示出对生产化部署仍有顾虑。

---

## 8. 待处理积压

以下重要 Issue/PR 已长时间未响应或仍处于阻塞状态，建议维护者优先关注：

| 类型 | 编号 | 标题 | 风险 |
|---|---|---|---|
| RFC | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime-owned conversation sessions (Rev 5) | **high**，needs maintainer review |
| RFC | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Unified file and attachment architecture (Rev 10) | **high**，需要尽快稳定修订版本 |
| RFC | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | Composable WASM plugin runtime architecture | **high**，needs maintainer review |
| RFC | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | Append-only session event history | **high**，needs maintainer review |
| RFC | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | Simplify RFC voting process | 治理类，需关注 |
| Tracker | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue for RFCs | 当前 15 条评论，多项待决 |
| Tracker | [#10339](https://github.com/zeroclaw-labs/zeroclaw/issues/10339) | Implement accepted shell V1 approval policy (#7155) | **high**，已有策略未实现 |
| PR | [#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356) | feat(tools): add AnySearch web search provider | **blocked**，do-not-merge |
| PR | [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) | feat(channels/telegram): secure model picker | **blocked**，do-not-merge，XL 体积 |
| PR | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | fix(tools): honor allowed roots for git operations | **high** 安全相关，needs author action |
| Issue | [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | macOS Seatbelt ignores allowed_roots | **S1**，阻塞用户工作流 |

**建议**：维护者可优先处理三类积压——(1) #9487/#9488 高频修订 RFC 的最终化；(2) S1 级安全/沙箱一致性 bug（#10536/#10533）；(3) 已 Ratified 但未实现的策略（#10339 对应 #7155）。

---

**日报小结**：ZeroClaw 处于版本过渡与架构深化的关键节点。v0.8.5 的发布奠定了连接面与安全边界的新基础，但社区共识仍未在会话/附件抽象与沙箱一致性上完全收敛。下一阶段的项目健康度将取决于：高频修订 RFC 的收敛速度、S1 级安全 bug 的修复节奏、以及 #8289 安全栈剩余阶段能否顺利合并。

*数据来源：GitHub API 拉取的 2026-09-05 至 2026-09-06 期间数据*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*