# OpenClaw 生态日报 2026-08-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-29 04:50 UTC

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

# OpenClaw 项目日报 · 2026-08-29

---

## 一、今日速览

OpenClaw 今日处于**高活跃度、强发版前奏**状态：24 小时内 Issue 互动 500 条（新开/活跃 414、已关闭 86），PR 互动 500 条（待合并 272、已合并/关闭 228），并伴随 **`v2026.9.1-beta.1`** 的发布。当日新增和活跃的 Issue 高度集中于 **Gateway 内存泄漏（#91588，O 级）**、**会话通道拥塞 / 消息丢失（#54488、#87711、#96834）**、**Codex 子代理静默截断 / 子代理丢弃（#84516、#88856）** 等稳定性议题。多个重要 PR（#126424、#130731、#131669、#131949）已在维护者评审中或已合入，整体在「beta 质量收敛 + 长会话 compaction 重构 + 安全/策略告警」方向上推进明显。

---

## 二、版本发布

### `v2026.9.1-beta.1`（PR #130731，发布者 @vincentkoc）

**官方 Highlights：**
- **Gateway 重启恢复强化**：在多次 Gateway 重启之间保留已 admitted 的 turn，使 restart-safe run 能跨 checkpoint 持续推进并交付最终响应。([#130491](https://github.com/openclaw/openclaw/pull/130491)，致谢 @jalehman)
- **Gateway 配置写入可靠性提升**：保持已 commit 的配置写入语义（changelog 截断）。

**覆盖范围与体量：**
本次 beta 候选涉及 channel、gateway、agents、maintainer、scripts、docs 全栈 XL 级变更，标签超过 100 个子域（含 17+ channel、40+ extensions/plugins、release/security/automation 自动化脚本），属于典型「release-lineage 同步 + Linux installer resilience + 已审核补丁合集」。

**破坏性变更 / 迁移注意事项：**
- 同步的 `feat(security): require acknowledgement for install policy warnings`（#116489）已合入：外部 `security.installPolicy` 现在可返回 `warn`，要求运维人员**精确输入目标名**后才能继续；Control UI 也引入 `acknowledgeInstallPolicyWarning` 字段（#120900）。**插件运维者需注意 CLI/UI 的新确认流程。**
- `fix(gateway): keep conversation delivery within agent bindings`（#126424）：多 agent 运营者使用 conversation tools 的发送范围被严格限制在 agent bindings 内，**跨 agent 发送/创建子会话的隐式行为被收紧**。
- `fix(workers): honor session tool policies on cloud sessions`（#131669）：云 worker 上的 `before_tool_call` 策略已对子会话和跨会话消息生效。
- `improve(control-ui): add explicit command activation plans`（#123356）：Control UI 命令菜单引入「command grammar vs. command interaction」明确边界，第三方插件/skill 行为可能受影响。
- `fix(ui): avoid session catalog refresh storms`（#123535）：侧边栏目录在焦点/presence 事件下不再触发全量刷新。

> 建议：升级前先在 staging 跑通 `openclaw doctor --fix`，并复核 `channels.*` 的多 agent bindings 与 `before_tool_call` 策略。

---

## 三、项目进展

### 已合入 / 已关闭 PR（重要）

| PR | 标题 | 关键意义 |
|---|---|---|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | `fix(gateway): keep conversation delivery within agent bindings` | 修复多 agent 场景下 conversation tools 越过 bindings 投递；直接减少 message-delivery 误用风险 |
| [#131669](https://github.com/openclaw/openclaw/pull/131669) | `fix(workers): honor session tool policies on cloud sessions` | cloud worker 的 `before_tool_call` 策略对子会话和跨会话消息同样生效 |
| [#131949](https://github.com/openclaw/openclaw/pull/131949) | `fix(gateway): completed replies duplicate after a late abort` | 修复「已完成的回复在晚到 abort 信号下被作为 aborted 重复落盘」 |
| [#130731](https://github.com/openclaw/openclaw/pull/130731) | `chore(release): prepare 2026.9.1-beta.1` | 9.1-beta.1 候选 |
| [#130493](https://github.com/openclaw/openclaw/pull/130493) | `feat(security): require acknowledgement for install policy warnings`（#116489 链路） | install policy 告警交互闭合 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | `feat(ui): review install policy warnings` | Control UI 端补齐策略告警的人审 |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | `fix(scripts): clean up tsgo process trees on timeout or signal` | `tsgo` 包装器改走 managed-process owner，新增 `OPENCLAW_TSGO_TIMEOUT_MS` 守门 |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | `fix(ui): avoid session catalog refresh storms` | 侧边栏目录刷新风暴治理 |
| [#130115](https://github.com/openclaw/openclaw/pull/130115) | `fix(mac): avoid duplicate Codex sessions with a local Gateway` | Mac 用户本机 Gateway + 配对 Mac 节点出现的 Codex 重复会话修复 |
| [#130182](https://github.com/openclaw/openclaw/pull/130182) | `fix(agents): disclose 64 KiB code-mode stderr-tail truncation` | 透明披露 tool_search_code 子进程截断策略 |
| [#132360](https://github.com/openclaw/openclaw/pull/132360) | `test(github-copilot): accelerate real transport deadlines` | CI 单测提速 20s |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | `fix(cli): resolve alias targets from the write snapshot` | CLI alias 链解析基于写入快照，避免别名循环 |
| [#116237](https://github.com/openclaw/openclaw/pull/116237) | `fix(feishu): send caption text before media in card+media payloads` | 飞书 card+media 文本不再被静默吞 |
| [#120138](https://github.com/openclaw/openclaw/pull/120138) | `docs(secrets): keep SecretRef reference docs in sync` | SecretRef 文档与 registry 用统一确定性生成器 |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | `feat: make full session actions available from chat header` | 顶部菜单补齐 pin / unread / icon / copy-id / move-to-group |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | `feat(security): require acknowledgement for install policy warnings` | 外部 security.installPolicy 支持 warn 态 |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | `fix(models): keep Claude CLI OAuth available in Control UI` | 关闭后历史 OAuth 失效已修 |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | `fix(release): authorize focused beta evidence` | 关闭 canonical publisher 对 frozen candidate 的全量校验阻断 |
| [#132326](https://github.com/openclaw/openclaw/pull/132326) | `fix(release): preserve plugin validation for frozen targets` | frozen commit 的 Plugin Prerelease 不再因 job-split 失败 |
| [#132364](https://github.com/openclaw/openclaw/pull/132364) | `fix(sessions): accept inert defaults when creating visible sessions` | 修复 `mode: "run"` + 空 attachments 导致 sessions_spawn 早拒 |
| [#132362](https://github.com/openclaw/openclaw/pull/132362) | `fix(fireworks): prevent unsupported images reaching GLM 5.2 Fast` | catalog 与 docs 统一，去掉 text-only 模型误宣 image input |

> **整体判断**：今日主线推进集中在 **(1) 安全/策略门控 (2) Gateway 投递与 compaction 收敛 (3) 飞书/Codex 子代理健壮性 (4) 9.1-beta.1 发布流程治理**。这 4 条线均向前实质性推进；其中 compaction（#130993）仍处 maintainer look，但已合入 1 个相关修复（#131949）。

---

## 四、社区热点（按评论 / 👍）

### Issues
| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 23 | 1 | **Gateway RSS 350MB → 15.5GB 内存泄漏 → OOM 反复 kill**（P0） |
| 2 | [#48788](https://github.com/openclaw/openclaw/issues/48788) | 20 | 1 | 多编码 Content-Disposition 集中化工具 |
| 3 | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 15 | **8** | 流式 watchdog 阈值可配置（kimi-k2.5 / R1 长推理常误报） |
| 4 | [#96834]( https://github.com/openclaw/openclaw/issues/96834) | 14 | 1 | WhatsApp 1:1 入站图片卡主 lane ~3 分钟 |
| 5 | [#84516](https://github.com/openclaw/openclaw/issues/84516) | 13 | 2 | Codex app-server 长回复 ~1000-1100 字符被静默截断 |
| 6 | [#41744](https://github.com/openclaw/openclaw/issues/41744) | 13 | 0 | 飞书 read image 结果在出站前丢失 |
| 7 | [#51429](https://github.com/openclaw/openclaw/issues/51429) | 12 | 0 | 工作目录被硬编码到 `/Users/wangtao` |
| 8 | [#87756](https://github.com/openclaw/openclaw/issues/87756) | 10 | 1 | 嵌套 `/tools/invoke` 在 prompt 启动时挂起 |
| 9 | [#87711](https://github.com/openclaw/openclaw/issues/87711)（CLOSED） | 10 | 1 | Telegram 主题 lane 在 `/new` 首轮空投递 |
| 10 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 9 | 1 | hook/tool 子进程未被 reap，僵尸累积 |
| 11 | [#54488](https://github.com/openclaw/openclaw/issues/54488) | 7 | 0 | 后续 drain 独占 session lane，20-30 分钟入站阻塞 |
| 12 | [#126906](https://github.com/openclaw/openclaw/issues/126906) | 6 | 0 | 拒 write 工具静默关闭 memory 持久化且 agent 仍报成功 |
| 13 | [#55694](https://github.com/openclaw/openclaw/issues/55694) | 6 | 0 | 飞书工具失败死循环，重复刷屏 |
| 14 | [#51429](https://github.com/openclaw/openclaw/issues/51429) | — | — | 同上 |

### PRs
- 🔥 **#130731** (XL, gold shrimp)：9.1-beta.1 release prep，跨 100+ 子域同步
- **#126424** (XL, platinum hermit)：跨 12+ channel 的 gateway 投递收敛
- **#125471** (XL, gold shrimp)：Claude CLI OAuth 在 Control UI 中保留（已合入）
- **#130993** (XL, gold shrimp)：Responses 会话 compaction 早触发与多状态修复
- **#131669** (XL, gold shrimp)：cloud session 强制执行 `before_tool_call`
- **#120900** (XL, platinum hermit)：Control UI 端 install policy 告警 review（已合入）
- **#132370** (XL, codex)：复用 active Codex placements 的审批
- **#132367**（P2，unranked krab）：voice agent 主动挂断电话

**诉求共性**：
- **稳定性 / 可观察性**：内存泄漏、僵尸进程、lane 阻塞、truncation 是社区最痛点
- **AI 模型多样性**：长推理（kimi-k2.5、R1）、vLLM thinking、Codex 适配成为新一轮适配焦点
- **多 channel 治理**：飞书 / Telegram / WhatsApp / Slack / Feishu 行为不一致是常态话题

---

## 五、Bug 与稳定性（按严重度）

### P0 / Critical
| Issue | 现象 | 是否已有 fix PR |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 350MB→15.5GB / OOM 反复 kill，触发 `launchd-handoff` 循环 | ❌（needs-live-repro，0 new fix PR） |

### P1 / High
| Issue | 现象 | 是否已有 fix PR |
|---|---|---|
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 入站图片 wedge 主 lane ~3min | ❌（needs-live-repro） |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex app-server 长回复 1000-1100 字符静默截断 | ❌（fix-shape-clear，无新 PR） |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏 → 僵尸累积 | ❌（needs-info） |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | 拒 write 工具静默关闭 memory 持久化 | ❌（needs-product-decision） |
| [#55694](https://github.com/openclaw/openclaw/issues/55694) | 飞书工具失败死循环刷屏 | ❌（needs-product-decision） |
| [#85027](https://github.com/openclaw/openclaw/issues/85027) | macOS LaunchAgent 2026.5.6→5.19 升级后不可逆 | ❌（needs-maintainer-review） |
| [#107814](https://github.com/openclaw/openclaw/issues/107814) | `gpt-5.3-codex-spark` 必填工具参数空对象 | ❌（needs-info） |
| [#87711](https://github.com/openclaw/openclaw/issues/87711) | Telegram 主题 lane `/new` 首轮空投递 | ✅ 已 CLOSED（推测同 #128371 治理链路） |
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | Windows 2026.6.x exec/read 静默空输出 | ❌（needs-info） |
| [#87938](https://github.com/openclaw/openclaw/issues/87938) | 飞书 DM session 在重启后重复键 + 维护性 prune | ✅ 已 CLOSED |
| [#85027](https://github.com/openclaw/openclaw/issues/85027) | LaunchAgent 升级后不可恢复 | ❌ |

### P2 / Medium（精选）
- [#87756](https://github.com/openclaw/openclaw/issues/87756) 嵌套 `/tools/invoke` 在 prompt 启动时挂起（regression）
- [#54488](https://github.com/openclaw/openclaw/issues/54488) followup drain 独占 session lane，阻塞 20-30min
- [#41744](https://github.com/openclaw/openclaw/issues/41744) 飞书 read image 出站前丢失
- [#51429](https://github.com/openclaw/openclaw/issues/51429) 工作目录硬编码 `/Users/wangtao`（**疑似敏感信息泄漏**）
- [#82662](https://github.com/openclaw/openclaw/issues/82662) isolated cron `agentTurn` 6 个 fallback 全部超时
- [#105528](https://github.com/openclaw/openclaw/issues/105528) Windows 2026.6.x exec/read 空输出回归
- [#42803](https://github.com/openclaw/openclaw/issues/42803) 飞书 `/stop` `/new` `/status` 不再绕过队列（3.8 regression）
- [#124284](https://github.com/openclaw/openclaw/issues/124284) vLLM openai-completions + thinking 自 2026.8.1-beta.2 起子代理 spawn 失败

### P3
- [#102755](https://github.com/openclaw/openclaw/issues/102755) Windows / WSL 第二次构建挂起（**beta blocker**）
- [#69242](https://github.com/openclaw/openclaw/issues/69242) Linux 上 exec 工具对宽范围 find/grep SIGKILL

> **健康度评估**：24h 内 P0 仍存在（#91588），但 P1 中 1 个关键 Telegram 主题 lane bug（#87711）已合入修复；Windows 回归（#105528、#102755）累计需要 maintainer 关注；workdir 硬编码（#51429）属于**安全与合规风险**，建议优先处理。

---

## 六、功能请求与路线图信号

| 诉求 | Issue | 已有 PR | 评估 |
|---|---|---|---|
| Voice agent 主动挂断电话 | [#132334](https://github.com/openclaw/openclaw/issues/132334) | ✅ [#132367](https://github.com/openclaw/openclaw/pull/132367) | **很可能进入 9.1.x** |
| Slack Modal 交互式工作流 | [#88154](https://github.com/openclaw/openclaw/issues/88154) | — | 等待产品决策 |
| 多 Azure/Teams bot 同 Gateway | [#71058](https://github.com/openclaw/openclaw/issues/71058) | — | 需 schema 改动 |
| 集中化多编码 Content-Disposition | [#48788](https://github.com/openclaw/openclaw/issues/48788) | — | 架构级 RFC |
| 流式 watchdog 阈值可配 | [#68596](https://github.com/openclaw/openclaw/issues/68596) | — | 👍 8 票，社区共识强 |
| Agent 通信通道感知 | [#20837](https://github.com/openclaw/openclaw/issues/20837) | ✅ CLOSED | 已合入 |
| Discord messageUpdate/Delete | [#53654](https://github.com/openclaw/openclaw/issues/53654) | — | 👍 3 

---

## 横向生态对比



# 开源 AI 智能体与个人 AI 助手生态横向对比分析报告
**数据基准日：2026-08-29**  
**分析范围：GitHub 主要活跃项目**

---

## 1. 生态全景

当前个人 AI 助手 / 自主智能体开源生态正处于 **“架构收敛 + 性能攻坚”** 的关键窗口期。头部项目（OpenClaw、CoPaw）已进入高频发版节奏，焦点从功能堆砌转向 **稳定性治理**（内存泄漏、会话拥塞、子代理截断）与 **协议标准化**（MCP 双栈兼容、安装策略告警）。中游项目（IronClaw、NanoClaw）则在安全加固、容器化与可观测性上持续深耕，而轻量级方案（PicoClaw）保持小步迭代，验证多平台适配路径。整体生态呈现 **“头部牵引、分层演进”** 的态势，但跨项目的技术债（如上下文压缩、工具结果投影）仍普遍存在。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h 新增/活跃） | PRs（24h 合并/待合并） | 最近 Release | 健康度评估 |
|------|------------------------|----------------------|-------------|-----------|
| **OpenClaw** | 414 活跃 / 86 关闭 | 272 待合并 / 228 合并或关闭 | `v2026.9.1-beta.1` | 高活跃度，强发版前奏 |
| **CoPaw** | 关闭 33（新增未明） | 16 合并或关闭 | `v2.2.0-beta.2` / `v2.2.0-beta.3` | 优，高强度迭代冲刺 |
| **IronClaw** | 10 活跃 / 3 关闭 | 16 合并或关闭 / 13 待合并 | `v1.4.0`（8/27） | 高，架构探针并行推进 |
| **NanoClaw** | 3 活跃 | 5 合并或关闭 / 45 待合并 | 无 | 积极贡献，但存在关键缺陷 |
| **LobsterAI** | 5（3 关闭） | 9 合并或关闭 | `2026.8.28` | 中高活跃，迭代收敛期 |
| **NanoBot** | 6 活跃 / 1 关闭 | 8 合并或关闭 / 12 待合并 | 无 | 稳定，聚焦会话与内存管理 |
| **PicoClaw** | 1 | 1 合并 / 1 进行中 | 无 | 稳定且聚焦，平台适配期 |

> **说明**：Hermes Agent、Moltis、ZeroClaw、TinyClaw、ZeptoClaw、NullClaw 在过去 24 小时内无显著活动，未纳入对比。

---

## 3. OpenClaw 在生态中的定位

**优势**：
- **社区规模与维护者密度**：单日 Issue/PR 互动量达 500 条级，远超其他项目，形成显著的网络效应与反馈闭环。
- **发版节奏与技术深度**：已进入 `v2026.9.1-beta.1` 阶段，覆盖 100+ 子域，具备完整的 release-lineage 治理与 installer resilience 能力。
- **问题收敛速度**：多个 P0/P1 级问题（如 Telegram 主题 lane 空投递）已有明确修复路径，维护者对稳定性议题响应迅速。

**技术路线差异**：
- OpenClaw 采用 **“Gateway 中心化 + 多 Channel 插件化”** 架构，强调 **会话通道的可靠性与 agent bindings 的严格隔离**，与 NanoClaw 的容器沙箱路线、IronClaw 的 Extension 投影层路线形成对比。
- 其 compaction 策略仍在重构中（#130993），但已通过 #131949 等修复部分边缘情况，整体偏向 **“先修复再重构”

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 - 2026-08-29

## 1. 今日速览
2026年8月29日，NanoBot 项目保持稳定运行态势。过去 24 小时共有 7 条 Issue 更新（6 条新建/活跃，1 条已关闭）和 20 条 Pull Request 更新（12 条待合并，8 条已合并/关闭）。项目未发布新版本，主要聚焦于系统稳定性改进、内存管理优化以及 MCP 应用扩展支持的深化。整体进度平稳推进，重点在于修复会话持久化、工具结果摘要以及 TUI 交互体验的稳定性问题。

## 2. 版本发布
本周期未发布任何新版本。项目处于持续迭代阶段，所有改动均以 PR 形式提交并逐步集成。未来版本将围绕 MCP 协议扩展、内存架构重构及会话管理稳定性展开。

## 3. 项目进展
- **PR #5591**（fix(webui)）：修复名为的面板组在保存/删除时丢失标题问题，确保用户自定义分组的名称在状态恢复后仍能保留。
- **PR #5560**（feat(cli)）：使 `nanobot` 命令成为默认代理命令，支持直接在根层级接受 `-m`、`--workspace` 等选项，无需重复定义命令。
- **PR #5590**（bug, fix）：修复大工具结果被截断导致关键字段（如 `ok`、`status`、`error`）消失的问题，优先级 P2。
- **PR #5589**（bug, fix）：解决已弃用会话被重新激活导致的消息泄漏问题，当会话被丢弃但队列中仍有等待消息时，防止这些消息污染全局消息总线。
- **PR #5588**（bug, fix）：在工具异常抛出时添加恢复提示，使错误信息更友好，优先级 P1。
- **PR #5587**（bug, fix）：对 Cron 任务的原生元数据进行安全化处理，避免在提醒机制中重新播放过期的引用/提及上下文。

## 4. 社区热点
| 项目 | 类型 | 状态 | 链接 |
|------|------|------|------|
| #5586 | 开启 | 活跃 | [Issue #5586](https://github.com/HKUDS/nanobot/issues/5586) |
| #5585 | 开启 | 活跃 | [Issue #5585](https://github.com/HKUDS/nanobot/issues/5585) |
| #5584 | 开启 | 活跃 | [Issue #5584](https://github.com/HKUDS/nanobot/issues/5584) |
| #5583 | 开启 | 活跃 | [Issue #5583](https://github.com/HKUDS/nanobot/issues/5583) |
| #5582 | 开启 | 活跃 | [Issue #5582](https://github.com/HKUDS/nanobot/issues/5582) |

**热点分析**：当前最活跃的 Issue 是 #5586（让运行上下文块可选退出历史持久化）和 #5585（将 RetryWaitEvent 推送到通道），反映了团队对会话生命周期管理和错误恢复机制的重视。#5584 关于推送推理内容的限制也获得高关注，涉及核心的上下文回放逻辑。#5582 关于 Cron 任务在 WebUI 引用/提及时崩溃的问题是近期出现的关键 Bug，影响自动化任务的可靠性。

## 5. Bug 与稳定性
按严重程度排序：

| 严重程度 | Bug ID | 描述 | 状态 | 是否有修复 PR |
|----------|--------|------|------|--------------|
| 高 | #5582 | WebUI 转述/提及时创建的 Cron 任务在创建或触发时崩溃，导致提醒任务死亡 | 开启 | ✅ [#5587](https://github.com/HKUDS/nanobot/pull/5587) |
| 高 | #5584 | Session.get_history 无限复制 reasoning_content/thinking_blocks，导致历史记录膨胀 | 开启 | ❌ 尚未修复 |
| 中 | #5583 | 工具异常结果缺少“尝试不同方法”的提示 | 开启 | ✅ [#5588](https://github.com/HKUDS/nanobot/pull/5588) |
| 中 | #5585 | RetryWaitEvent 在 ChannelManager 中被丢弃 | 开启 | ✅ [#5585](https://github.com/HKUDS/nanobot/pull/5585) |
| 中 | #5586 | Runtime-context 块无法选择退出历史持久化 | 开启 | ❌ 尚未修复 |
| 低 | #5581 | TUI 退出时窗口光标位置丢失（Windows） | 开启 | ✅ [#5581](https://github.com/HKUDS/nanobot/pull/5581) |

**总结**：当前主要稳定性风险集中在会话持久化逻辑（#5584、#5586）和工具执行错误处理（#5583、#5585）。已有 4 条相关 PR 正在修复，但 #5584 和 #5586 仍处于未合并状态，需优先关注。

## 6. 功能请求与路线图信号
- **显式记忆回顾**：PR #5571、#5570 引入了 `recall_memory` 工具，并规划将其作为默认记忆策略，体现向显式记忆管理的转型。
- **MCP 方案预算控制**：PR #5388 提出对模型可见 MCP 方案设置字节预算，优先级 P2，旨在防止超长工具调用导致资源耗尽。
- **Agent 运行器上下文压缩**：PR #5568 让 `AgentRunner` 负责上下文压缩，提升提供者调用效率，是性能优化方向的关键。
- **WebUI 改进**：#5586、#5585、#5583 等 PR 表明对 WebUI 交互体验的持续优化需求，特别是错误提示、历史管理和上下文可视化。

## 7. 用户反馈摘要
从 Issue 评论中提取的用户痛点：
- **会话状态丢失**：用户反复遇到会话被意外终止后信息丢失的情况，尤其是在 WebUI 引用/提及触发的 Cron 任务崩溃时，导致后续任务失败。
- **工具结果截断**：当工具返回大对象时，模型前置预览被截断至 1200 字符，导致关键字段（如 `status`、`error`）不可见，影响调试体验。
- **错误提示不足**：用户在工具失败时缺乏引导性提示，导致用户难以自行定位问题根源。
- **TUI 交互问题**：Windows 下 TUI 退出时光标位置丢失，影响用户流畅性。

整体而言，用户对系统的稳定性和交互体验有较高期待，同时对 MCP 扩展和记忆管理功能表现出积极兴趣。

## 8. 待处理积压
1. **Issue #5584**（Open）：运行上下文块的历史持久化限制，可能导致上下文信息过早丢失。需在下一个版本内完成实现。
2. **Issue #5586**（Open）：Runtime-context 块无法选择退出历史持久化，影响会话管理灵活性。优先级较高，建议尽快修复。
3. **PR #5584**（Open）：推送推理内容到提供的有限历史长度，可能导致旧上下文被剔除。需评估是否需要调整推送策略。
4. **PR #5586**（Open）：同上，属于会话生命周期管理的关键问题。
5. **PR #5582**（Open）：Cron 任务在 WebUI 引用/提及时崩溃，已有修复 PR #5587 提交中，需跟进合并进度。

**行动建议**：优先处理 #5584 和 #5586 两个会话持久化相关的活跃 Issue，因为它们直接影响用户体验的核心稳定性；同时跟进 #5582 的修复 PR 确保自动化任务的可靠性。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 (2026-08-29)**  
*AI 智能体与个人 AI 助手领域开源项目分析*

---

### 1. 今日速览
过去24小时内，PicoClaw 共收到 1 条 Issue 活动（#3342，涉及转向模式优化）和 2 条 PR 更新（#1349 正式合并，#3347 界面修复进行时）。无新版本发布。Issue 活跃度极低，但 PR 流水线保持持续产出，表明维护者正聚焦于具体功能落地与体验优化而非广度扩张。总体健康度呈现 **“稳定且聚焦”** 的态势，短期内无风险激增迹象。

- 📊 **活跃度评估**：Issue 单日 1 条，PR 双日 2 条。社区关注点从“新功能讨论”转向“平台适配与界面打磨”。  
- 🔗 [GitHub 项目主页](https://github.com/sipeed/picoclaw) | [今日 Issue 动态](https://github.com/sipeed/picoclaw/issues?q=is%3Aopen+updated%3A2026-08-28) | [今日 PR 动态](https://github.com/sipeed/picoclaw/pulls?q=is%3Aclosed+merged%3A2026-08-28)

---

### 2. 版本发布
**无新版本发布** (0 个)。项目版本节奏以合并 PR 与 Issue 回滚为主，未见大规模 release 操作。

---

### 3. 项目进展
今日有 2 条 PR 产出，其中 1 条已合并/关闭，1 条处于开发后期：

| PR | 状态 | 推进内容 |
|----|------|----------|
| **#1349** | [CLOSED] ✅ | **QQ Channel 生态拓展**：支持解析 QQ 频道 Emoji 结构，处理语音/图片/视频/文件消息的接收与回复（先上传后发送），优先使用 Markdown 消息发送。该合并标志 picoclaw 在即时通讯平台兼容性上的重要突破，将直接惠及 QQ 用户群体。 |
| **#3347** | [OPEN] 进行中 | **界面卡顿修复**：针对聊天区大文本量时的渲染 Lag 问题完成分析并测试。提报者已使用 `picoclaw-launcher` 在 Brave（桌面/移动端）验证无卡顿。虽仍为 Open 状态，但代码变更已就绪，预计将在近期 PR 流程中完成合并或发布预览版。 |

**整体进度**：项目正从“多平

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目每日报告（2026‑08‑29）**

---

### 1. 今日速览  
- 过去 24 小时 **Issues**：新开/活跃 3 条，已关闭 0 条；活跃度中等，主要围绕脚本可靠性和长任务超时展开。  
- **PRs**：共 50 条，已合并/关闭 5 条，待合并 45 条，表明代码基仍在持续演进，但审查队列较长。  
- 无新版本发布，项目处于 **功能完善 + 安全加固** 的过渡阶段。  
- 总体健康度：issue 数量稳定、PR 合并速度尚可，但关键缺陷（脚本挂起、容器强制终止）仍未得到正式修复，需关注。

---

### 2. 版本发布  
❌ **无新版本发布**（`New Releases: 0`）。  

---

### 3. 项目进展 – 今日合并/关闭的重要 PR  

| PR | 状态 | 主要内容 | 推动的功能/修复 | 影响 |
|----|------|----------|----------------|------|
| #216 | **CLOSED** | security: fix secret sanitization bypass via `/proc` and Read tool | 解决了通过进程环境泄露 API 密钥的安全漏洞 | 提升整体安全性，防止机密泄露 |
| #2361 | **CLOSED** | [codex] tighten codex provider contracts | 替换过时的 Codex SDK 草案，使 provider 与当前 JSON‑RPC 契约保持一致 | 增强 Codex 集成的可靠性与可维护性 |
| #2363 | **CLOSED** | fix(credential-proxy): proactively refresh expiring Anthropic OAuth tokens (v2) | 自动刷新即将过期的 Anthropic OAuth token，防止 401 错误 | 提升长期运行时的可用性，降低运营中断风险 |
| #1102 | **CLOSED** | fix(credential-proxy): auto-refresh OAuth token, handle keychain‑only auth | 完整的 token 自动刷新机制，兼容 keychain 只认证的情况 | 与 #2363 同步，进一步强化凭证管理 |
| #2326 | **CLOSED** | docs: add issue templates (bug, enhancement, skill) | 为 Issue 提供统一的模板，引导用户提供更完整的复现步骤 | 改善Issue质量，加速故障定位与处理 |

> **总体进展**：本轮合并主要聚焦 **安全**、**凭证管理**、**文档规范** 与 **集成契约**，为下一阶段的功能扩展奠定了稳固的基础。

---

### 4. 社区热点 – 最活跃的 Issue / PR  

| 编号 | 标题 | 链接 | 热点分析 |
|------|------|------|----------|
| #3645 | `bash nanoclaw.sh` just hangs indefinitely with no feedback or logging | <https://github.com/qwibitai/nanoclaw/issues/3645> | 用户反映脚本在执行时毫无进度、日志，导致无法判断是否成功。需求为 **透明化输出 + 可配置日志**，迫切需要改进用户体验。 |
| #3644 | chore(github): add issue forms | <https://github.com/qwibitai/nanoclaw/pull/3644> | 通过统一的 Issue 表单引导用户提供更完整的上下文（复现步骤、环境信息），有助于后续调试。社区对 Issue 质量的提升表现出强烈需求。 |
| #3642 | fix(update-skills): report local adapter state instead of failing or silently reverting | <https://github.com/qwibitai/nanoclaw/pull/3642> | 解决技能更新时因适配器状态未知而导致的失败或沉默回退问题，提升技能管理的可观测性。 |

**共性诉求**：提升 **可观测性**（日志、错误信息）以及 **Issue 复现信息的完整性**，是当前社区最迫切的改进方向。

---

### 5. Bug 与稳定性  

| 编号 | 严重程度 | 描述 | 是否已有 fix PR |
|------|----------|------|-----------------|
| #3645 | **Critical** | `bash nanoclaw.sh` 在执行时无响应、无日志，导致用户无法判断进程状态。 | ❌ 无对应的修复 PR（仍在开放状态） |
| #3643 | **High** | 硬编码的 30 min `ABSOLUTE_CEILING_MS` 导致本地模型长任务被提前杀死，缺乏配置入口。 | ❌ 无直接 fix PR，仅提出改进建议。 |
| #3599 | **Medium** | 缺乏对 `rate_limit/quota` 分类的持久化，导致失败运行难以区分真正原因，影响自动重试。 | ❌ 无 fix PR，仍在讨论中。 |

> **稳定性评估**：当前有 **2 条高严重度** 的已知缺陷尚未得到正式修复，需要优先处理，尤其是脚本挂起（#3645）会直接阻碍用户使用。

---

### 6. 功能请求与路线图信号  

| 需求 | 关联 Issue / PR | 可能纳入下一版本的理由 |
|------|----------------|----------------------|
| **持久化费率/配额分类**（便于自动重试） | #3599 | 已有 PR 示例（#3599）提出实现，属于明确的功能需求，预计会在 **v2.2** 之后的迭代中加入。 |
| **Voice transcription V2（容器端、主权默认）** | #2003 | 实现已在 PR 中，表明社区对 **本地化、离线** 语音处理有强烈需求，预计会随 **Agent 容器化** 进程一起上线。 |
| **机器驱动的安全门（拒绝命令行/环境变量凭证）** | #3638 | 与安全与运维最佳实践相符，已在多个 PR（#3638、#3639、#3640）中陆续出现，预计成为 **v2.3** 的核心安全特性。 |
| **改进技能更新的适配器状态报告** | #3642 | 解决沉默失败问题，提升技能管理的可观测性，已在审查中，极大概率会被合并进下一版本。 |

> **路线图信号**：本周的 PR 与 Issue 明显倾向于 **安全强化、可观测性提升、容器化能力** 三大方向，未来 1‑2 个月内大概率会在正式发布中加入上述功能。

---

### 7. 用户反馈摘要  

- **脚本可靠性**：多位用户在 Issue #3645 中反映 `bash nanoclaw.sh` **无日志、无进度**，导致长时间等待后怀疑脚本是否卡死。  
- **错误信息缺失**：Issue #3643 与 #3599 显示用户对 **硬编码超时** 与 **缺乏错误分类** 表示困惑，渴望更清晰的错误提示与配置选项。  
- **凭证管理**：#1102 与 #2363 的讨论表明用户在 **OAuth token 过期** 后仍然收到 401，需要更自动化的刷新机制。  
- **文档与 Issue 复现**：#3644 的 Issue 表单请求得到社区积极响应，用户希望在报告故障时能够提供完整的环境信息，从而加速故障排查。  

总体来看，用户的核心痛点在于 **透明度不足**（日志/错误）以及 **运营中断**（长任务被强制终止、凭证失效），同时对 **文档规范** 与 **功能可维护性** 表示满意。

---

### 8. 待处理积压  

| 类型 | 编号 | 最近更新 | 关键关注点 |
|------|------|----------|------------|
| Issue | #3645 | 2026‑08‑29 | 脚本挂起、缺乏日志，需要快速响应以免影响用户体验。 |
| Issue | #3643 | 2026‑08‑28 | 硬编码 30 min 超时，可能导致长任务被提前终止，需评估是否改为可配置。 |
| Issue | #3599 | 2026‑08‑28 | 费率/配额分类缺失，影响自动重试逻辑，建议优先实现。 |
| PR | #3635 | 2026‑08‑28 | `refactor(setup): drive the channel loop, drop ndjson back navigation` – 仍在审查，后续可能影响交互流程。 |
| PR | #3636 | 2026‑08‑28 | `feat(setup): drive the first chat and bound its machine child` – 涉及机器驱动的首次交互，需确保兼容性。 |
| PR | #3637 | 2026‑08‑28 | `feat(uninstall): add the ndjson machine uninstall path` – 为 GUI  uninstall 实现提供机器可读 receipt，仍在开发。 |
| PR | #3638 | 2026‑08‑28 | `feat(setup): add machine entry guards refusing secrets on argv/env` – 安全加固，审查进度不明。 |
| PR | #3639 | 2026‑08‑28 | `feat(setup): gate machine completion on a proven service receipt` – 需验证机器完成检查点的可靠性。 |
| PR | #3640 | 2026‑08‑28 | `test(setup): add renderer parity test and auto.ts driver lint` – 测试用例尚未完成，影响后续 CI。 |

> **提醒**：维护者应当优先审查 **#3645**（脚本挂起）与 **#3643**（硬编码超时），因为它们直接影响日常使用；其余 PR 虽然数量众多，但多为 ** refactor / test / documentation**，对稳定性影响相对较小，可在后续版本中逐步合并。

---

**结论**：NanoClaw 项目在本日报告日呈现 **积极的代码贡献节奏**（5 条合并 PR）与 **明确的社区痛点**（脚本可靠性、长任务超时、凭证管理）。若能及时解决关键 Bug 并推进已在审查中的安全与可观测性改进，项目的健康度将进一步提升，为下一阶段的功能扩展奠定坚实基础。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-29

> **数据基准**：过去 24 小时（2026-08-28 至 2026-08-29）GitHub 活动快照  
> **统计口径**：Issues 13 条（新开/活跃 10，关闭 3），PRs 29 条（待合并 13，合并/关闭 16），Release 1 个

---

## 1. 今日速览

- **整体活跃度：高**。单日 29 条 PR 更新、13 条 Issue 互动，核心维护者（`henrypark133`、`serrrfirat`、`italic-jinxin`）并行推进性能优化、通知体系、压缩策略、沙箱架构等多条主线。
- **发布节奏**：`ironclaw-v1.4.0` 于 8-27 正式落地（RC1 转稳），本周重心已转向 **v1.5 规划期** 的技术债清理与架构探针。
- **核心矛盾**：**上下文膨胀与工具调用效率** 成为当前最大痛点 —— 多个 Performance 类 Issue 指向“原始载荷未投影、Schema 过度展开、Result 重复传递”导致推理延迟指数级上升。
- **架构演进信号**：`Reborn` 架构下的 **持久化用户级沙箱执行器**（#7903/#7908）与 **Agent 生命周期 Hook 体系**（#7770）两大 Epic 并行 Spike，预示 v1.5+ 将重构执行边界与扩展点。
- **交付质量**：16 个 PR 合并/关闭，覆盖通知持久化、工具搜索截断、压硬化、CI 拓扑校验等，回归风险可控（均标注 `risk: low`）。

---

## 2. 版本发布

### `ironclaw-v1.4.0` (2026-08-27) ← **最新稳定版**
- **范围**：自 `v1.3.0` 起 81 commits，含 `1.4.0-rc.1` 全量功能。
- **关键新增**：
  - **耐久通知收件箱**：Run 发布权威结果与可执行 Gate 到用户级 Inbox，WebUI 实时呈现。
- **破坏性变更**：Release Notes 未显式列出 Breaking Changes；建议升级前跑全量集成测试矩阵（`tests/integration/group_*`）。
- **迁移提示**：通知持久化依赖 `ScopedFilesystem` 租户隔离存储，现有部署需确认存储后端兼容性。

> 🔗 [Release 详情](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.0)

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心推进 | 关联 Issue | 状态 |
|----|------|----------|------------|------|
| [#7899](https://github.com/nearai/ironclaw/pull/7899) | **Feature** | 发布 Automation 预运行失败通知（`RunFailed` 持久化至 Inbox） | #7873 | ✅ Merged |
| [#7901](https://github.com/nearai/ironclaw/pull/7901) | **Fix** | 认证 Gate 持久化前置，防止 Enrichment 故障丢失可恢复项 | #7875 | ✅ Merged |
| [#7900](https://github.com/nearai/ironclaw/pull/7900) | **Feature** | 资源/策略阻塞映射为 `RunBlocked` 通知，去重基于 Gate Ref | #7874 | ✅ Merged |
| [#7982](https://github.com/nearai/ironclaw/pull/7982) | **Fix** | `builtin.result_read` 预算失败错误指向修正，避免模型盲目重试 | #7981 | ✅ Merged |
| [#7965](https://github.com/nearai/ironclaw/pull/7965) | **Perf** | `tool_search` 提升 BM25 阈值，剔除单词匹配噪音，减少无效 Tool Offer | — | ✅ Merged |
| [#7979](https://github.com/nearai/ironclaw/pull/7979) | **Test/Arch** | 扩展编码输出边界所有权清单，Fail-closed 架构门禁 | — | ✅ Merged |
| [#7980](https://github.com/nearai/ironclaw/pull/7980) | **CI** | 集成测试组拓扑预检，防止分组错配落入通用分区 | — | ✅ Merged |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) / [#5084](https://github.com/nearai/ironclaw/pull/5084) | **Design System** | WebUI v2 设计系统 Token 与 Automations 页面重设计（长周期 PR 终结） | — | ✅ Merged |

**里程碑意义**：通知链路（预运行失败、认证失效、资源阻塞）全链路打通，**Inbox 成为用户感知异步执行状态的单一入口**；工具搜索与结果读取的“降噪+纠偏”显著降低无效 Token 消耗。

---

## 4. 社区热点（高互动/高关注）

| Item | 类型 | 评论/👍 | 核心诉求 | 分析 |
|------|------|---------|----------|------|
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | **Perf Bug** | 10 💬 / 0 👍 | `gmail.get_message` 返回 49 KB 原始 MIME 头，未经投影直接入 Prompt，导致单轮 19.2 s 推理 | **最痛点**：Extension 返回载荷无投影、Head-slice 盲切、**无 Schema Hint** 三重叠加。需在 Extension 层强制投影 + Tool Result 预算感知截断。 |
| [#7981](https://github.com/nearai/ironclaw/issues/7981) | **Perf Bug** | 3 💬 / 0 👍 | `github.list_repos` 519 KB 载荷 → 64 次 Tool 调用 / 3 min 列出 98 个 Repo | 同根问题：Extension 未使用自带 Projection Seam；`result_read` Schema 无 Hint 导致模型盲目分页。 |
| [#7770](https://github.com/nearai/ironclaw/issues/7770) | **Epic** | 4 💬 / 0 👍 | Agent 生命周期 Hook（after-turn / before-turn / compaction / tool-result） | **架构级需求**：将“编辑核心引擎”降维为“注册 Hook”，支撑插件化观测、审计、策略注入。 |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) / [#7908](https://github.com/nearai/ironclaw/pull/7908) | **Spike** | 2 💬 / 0 👍 | 可信宿主内核后，持久化用户级沙箱跑 Canonical Loop Executor | **方向性决策**：将执行面下沉沙箱，宿主仅保留调度/授权/模型网关/持久化。PR #7908 为 Demo 分支，尚未合并。 |

> **洞察**：Performance 类 Issue 评论密度最高，反映**生产负载已触及架构天花板**；Epic/Spike 类讨论虽评论少，但标 `risk: high`、`scope: agent/sandbox`，属核心维护者内部对齐，外部贡献者介入门槛高。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 现象 | 已有 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 (生产阻塞)** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | 两封邮件触发 19.7 s 轮次，97% 时间花在推理 | ❌ 无 | 需 Extension 层投影 + `result_read` 预算联动，**建议本周内出 Hotfix** |
| **P0** | [#7981](https://github.com/nearai/ironclaw/issues/7981) | 列 Repo 3 min / 64 calls | ✅ [#7982](https://github.com/nearai/ironclaw/pull/7982) (已合并) | `result_read` 错误消息修正已生效，但 **Extension 投影缺失** 仍需后续 PR |
| **P1** | [#7986](https://github.com/nearai/ironclaw/issues/7986) | `github.list_repos` 81 字段/Repo，519 KB 单次返回 | ❌ 无 | 同 #7981 根因，需在 `github` Extension 侧启用 Projection |
| **P1** | [#7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` 白名单重建 Schema，静默丢弃约束 | ❌ 无 | **Schema 保真度缺陷**，影响 Provider 侧验证，建议改为“减法”策略并加测试 |
| **P2** | [#7930](https://github.com/nearai/ironclaw/issues/7930) | Tool Args 无法引用前序 Result，强制重发 Payload | ❌ 无 | 设计层面：需引入 `ResultRef` 机制，减少 Output Token 与网络开销 |
| **P2** | [#7985](https://github.com/nearai/ironclaw/pull/7985) | `read_document` 返回 `None` 被误判为 `InputEncode` | ✅ [#7985](https://github.com/nearai/ironclaw/pull/7985) (Open) | 错误分类修正，用户可见语义从“编码失败”→“文档不存在” |

---

## 6. 功能请求与路线图信号

| 需求来源 | 信号强度 | 可能纳入版本 | 备注 |
|----------|----------|--------------|------|
| **Agent Lifecycle Hooks** (#7770) | 🔴 High (Epic, Phased) | **v1.5** | Phase 1 (after-turn) 已可独立交付，PR 草稿预计本周出现 |
| **Persistent User Sandbox Executor** (#7903/#7908) | 🟡 Medium (Spike) | **v1.6+** | 架构变更大，需解决宿主-沙箱权限边界、检查点同步、网络隔离，当前为 Demo 验证可行性 |
| **NEAR AI Model Capabilities Surfacing** (#7969/#7970/#7971) | 🟢 High (3 连开 Issue) | **v1.5** | 纯数据流扩展：`ModelInfo` 增加 modalities → WebUI 渲染 Tag，无破坏性变更，PR 即将涌现 |
| **Tool Argument Result Reference** (#7930) | 🟡 Medium | **v1.5/1.6** | 需跨 Loop/Tool/Schema 协同，设计评审中 |
| **Shared Review Router (Learning)** (#7958) | 🟢 Medium | **v1.5** | PR 已开，Post-run Learning 路径可选，技术债低 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

> **注**：当前 24h 内 Issues 多为内部维护者创建，外部用户评论极少（👍 均为 0）。以下为代码/日志层面暴露的**隐性用户痛点**：

1. **“我看不见工具在干什么”** —— #7891/#7981 显示模型在巨大 JSON 中迷路，用户侧表现为**极高延迟、无进度反馈、费用失控**。
2. **“通知要么刷屏要么丢失”** —— #7873/#7874/#7875 三连闭环前，用户仅能通过日志排查 Automation 失败/认证失效/资源阻塞，**Inbox 统一入口极大降低认知负荷**。
3. **“Model 选型盲盒”** —— #7969/#7971 指出 NEAR AI 模型多模态能力不可见，用户在 Workspace/Caller/Provider 三级选择器中**无法判断模型是否支持 Image/Tool/Structured Output**。
4. **“Compaction 吃掉关键上下文”** —— #7975/#7976/#7978 连续 PR 说明当前压缩策略**硬截断导致 Tool Call/Result 对丢失**，用户感知为“Agent 突然健忘”。

---

## 8. 待处理积压（长期未响应/高价值）

| Item | 停滞时长 | 价值 | 建议动作 |
|------|----------|------|----------|
| [#7930](https://github.com/nearai/ironclaw/issues/7930) *Tool Args Result Reference* | 2 天 (0 评论) | **高** — 根治 Payload 重复传输，节省 Token/延迟 | 指派 Owner，输出 RFC 设计文档，纳入 v1.5 Milestone |
| [#7987](https://github.com/nearai/ironclaw/issues/7987) *Schema Flatten 静默丢弃* | 1 天 (0 评论) | **高** — 破坏 Provider 侧约束校验 | `henrypark133` 已关注，建议 48h 内出 Fix + Regression Test |
| [#7908](https://github.com/nearai/ironclaw/pull/7908) *Sandbox Executor Spike* | 3 天 (0 评论) | **战略** — 决定 v1.6 架构走向 | 安排专题 Design Review，产出 ADR，决定是否并入主干或长期分支 |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) / [#5084](https://github.com/nearai/ironclaw/pull/5084) *WebUI Design System* | **60+ 天** | **中** — 设计系统

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-08-29** 
**数据源：github.com/netease-youdao/LobsterAI**

---

### 1. 今日速览
今日 LobsterAI 项目整体处于**中高活跃度的迭代收敛期**。在过去24小时内，项目完成了 **2026.8.28 版本**的发布与合并，共处理了10条 Pull Request（9条已合并/关闭）和5条 Issues（3条已关闭）。版本核心聚焦于登录引导完善、计划模型目录新增及账号展示逻辑修复；同时，开发者社区在底层安全模块单元测试及 API URL 拼接 Bug 上持续输出，整体项目健康度良好，版本交付节奏稳定。

### 2. 版本发布
**🎉 LobsterAI 2026.8.28**
*   **更新内容：**
    *   **登录体验优化**：新增登录引导流程（PR #2525），降低新用户上手门槛。
    *   **模型管理增强**：在设置中新增“计划模型目录”功能（PR #2530），便于用户管理自定义/订阅模型列表。
    *   **UI 与账号显示修复**：修复了手机号昵称显示异常及脱敏合并冲突（PR #2569, #2570, #2571），提升了账号信息的展示准确性。
    *   **侧边栏与模型折叠**：将可选模型折叠至“更多模型”区域，并新增服务端同步的侧边栏横幅计划（PR #2568）。
*   **破坏性变更与迁移注意**：侧边栏 UI 布局发生变更，“更多模型”默认折叠，旧版自定样式可能受影响；账号模块数据脱敏逻辑调整，测试数据已替换为合成数据。

### 3. 项目进展
今日共合并/关闭了9条 PR，项目在**用户体验、底层健壮性、安全测试**三个维度向前推进：
*   **核心功能推进**：合并了 `feat: collapse more models and sync sidebar banner schedules`（PR #2568），实现了模型列表的精简与服务端同步调度，提升了设置页的整洁度与智能化水平。
*   **底层 Bug 修复**：合入了 `fix buildOpenAIChatCompletionsURL`（PR #1153），解决了 Google Gemini API 请求路径拼接错误，保障了海外模型调用的连通性。
*   **代码质量提升**：合入了为 `commandSafety` 和 `coworkMemoryJudge` 补充 Vitest 单元测试的 PR（PR #1156），消除了核心安全/质量模块的测试盲区，大幅降低回归风险。
*   **整体评估**：项目今日迈出了从“功能堆砌”向“体验精细化与底层质量保障”转型的坚实一步。

### 4. 社区热点
*   **Issue #2489 [CLOSED] [快更新v4pro！](https://github.com/netease-youdao/LobsterAI/issues/2489)**：获得3条评论，是今日讨论最活跃的议题。反映出核心用户对大版本（v4pro）更新的极度期盼与焦急等待。
*   **Issue #2536 [CLOSED] [微信群已满人](https://github.com/netease-youdao/LobsterAI/issues/2536)**：2条评论，暴露了当前社区运营渠道（微信群）承载力不足的痛点，用户急需新增社区入口。
*   **PR #2568 [feat: collapse more models and sync sidebar banner schedules](https://github.com/netease-youdao/LobsterAI/pull/2568)**：涉及侧边栏核心交互变更，关注度较高。

### 5. Bug 与稳定性
按严重程度排列：
1.  **[高严重性] API URL 拼接错误**：`buildOpenAIChatCompletionsURL` 处理 Google Gemini `/v1` 路径时 off-by-one 错误，导致 URL 缺少 `/` 分隔符，API 调用直接失败。**状态**：已有 Fix PR ([#1153](https://github.com/netease-youdao/LobsterAI/pull/1153))，关联 Issue [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) 今日已更新。
2.  **[中严重性] Agent 任务记录丢失**：新建重名 Agent 后切换回原状态，无法正确获取任务记录数据。**状态**：已有修复 PR ([#1146](https://github.com/netease-youdao/LobsterAI/pull/1146)) 待合并。
3.  **[低严重性] 手机号昵称及脱敏异常**：账号展示模块存在合并冲突及脱敏显示错误。**状态**：已在今日版本通过 PR (#2569, #2570, #2571) 修复。

### 6. 功能请求与路线图信号
*   **会话内页内搜索（Ctrl+F）**：PR [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) 已合并此功能。基于 TreeWalker 实现精准定位与高亮，解决了长会话中信息检索的痛点，该功能极大概率已成为项目标配。
*   **计划模型目录**：PR [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) 的加入，表明项目正在构建更灵活的模型路由与订阅体系，暗示未来可能支持更多第三方模型接入与动态切换。
*   **大版本更新期待**：Issue [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) 强烈催促 v4pro 更新，结合当前的模型目录与侧边栏功能，暗示 v4pro 可能会在**模型生态整合与 UI 架构重构**上带来颠覆性更新。

### 7. 用户反馈摘要
*   **社区渠道拥堵**：用户反馈微信群已满（#2536），新用户无法加入社群获取帮助与支持，反映出国内用户社区的扩张速度已超出当前私域运营池的承载极限。
*   **版本迭代渴望**：用户急切呼唤 v4pro（#2489），对现有功能的更新速度提出了更高要求，同时也暗示当前 2026.8.24/28 的更新已不能满足部分重度用户的需求。
*   **底层质量认可**：虽然用户未直接评论，但开发者 MaoQianTu 密集提交了针对核心安全模块（commandSafety）和记忆系统的高质量测试用例（#1149, #1154, #1156），侧面反映出项目对用户数据安全与记忆准确性的高度重视，这将是提升用户信任度的关键。

### 8. 待处理积压
以下 Item 创建于 2026-03-31，已积压近5个月，建议维护者优先审查：
*   **Issue #1149 [OPEN]**：[为 coworkMemoryExtractor 补充 Vitest 单元测试](https://github.com/netease-youdao/LobsterAI/issues/1149) 
    *   *说明*：记忆提取核心模块缺乏测试，存在回归风险。关联的测试 PR 尚未出现，需关注开发者进度。
*   **Issue #1151 [OPEN]**：[修复 Google Gemini /v1 路径 URL 拼接错误](https://github.com/netease-youdao/LobsterAI/issues/1151) 
    *   *说明*：虽有 Fix PR (#1153)，但 Issue 本身仍处于 OPEN 状态，建议在确认 PR 合并后及时关闭此 Issue 以清理积压。
*   **PR #1146 [OPEN]**：[修复新建agent未获取到任务记录数据的问题](https://github.com/netease-youdao/LobsterAI/pull/1146) 
    *   *说明*：影响用户体验的任务记录异常修复，长期处于待合并状态，需维护者尽快 Code Review 并合入。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 | 2026-08-29

---

## 1. 今日速览

**整体状态：高强度迭代冲刺期，v2.2.0 Beta 系列加速发布，核心基建与多租户架构并行推进。**

- **发布节奏**：24 小时内连续推送 **v2.2.0-beta.3** 与 **v2.2.0-beta.2** 两个版本，核心聚焦 MCP 协议双栈兼容、启动器容错性、端到端测试覆盖率提升。
- **交付效能**：过去 24h **关闭 Issue 33 条、合并/关闭 PR 16 条**，关闭率远超新增，呈现典型“版本冻结前清零技术债”特征。
- **社区信号**：**多租户版 Hub（QwenPaw Hub）进入社区共建讨论期**（#7318，13 条评论），标志着项目从“个人助手”向“团队级平台”战略转型的关键里程碑。
- **风险点**：桌面端/Docker 因 OpenSSL 3.0.x 导致的 TLS 握手被运营商重置（#7298，9 条评论）尚无修复 PR，可能阻断部分企业私有化部署场景。
- **健康度评级**：🟢 **优** —— 发布节奏可控、核心 Bug 修复闭环快、架构级 PR（延迟启动、长期记忆、分页虚拟化）有序进入 Review 阶段。

---

## 2. 版本发布

### 🚀 v2.2.0-beta.3 (2026-08-28 发布)
> **核心主题：MCP 协议栈现代化与会话级容错**

| 变更类型 | 核心内容 | 关联 PR | 影响面 |
| :--- | :--- | :--- | :--- |
| **Feat** | **Streamable-HTTP 双协议客户端**：优先尝试 MCP 2026-07-28 规范，自动回退至 2025-03/06/11 旧版握手，解决异构 MCP Server 兼容性难题。 | [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | MCP 接入层、所有 Streamable-HTTP 场景 |
| **Fix** | **会话拆卸时强制中止挂起 RPC**：修复 MCP Server 重启导致 `list_tools`/`call_tool` 永久阻塞、Agent Schema 采集卡死问题。 | [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) | MCP 客户端生命周期、高可用场景 |
| **Chore** | 版本号推进至 `v2.2.0b3` | [#7393](https://github.com/agentscope-ai/QwenPaw/pull/7393) | 全量 |

> **迁移提示**：无破坏性变更。旧版 `streamable_http` 配置自动兼容；若依赖自定义 MCP 传输层，建议验证 `HttpAutoClient` 探测逻辑。

---

### 🚀 v2.2.0-beta.2 (2026-08-28 发布)
> **核心主题：启动器鲁棒性与测试基建**

| 变更类型 | 核心内容 | 关联 PR | 影响面 |
| :--- | :--- | :--- | :--- |
| **Fix** | **启动失败清理取消安全化**：解决并发启动/取消竞态导致的资源泄漏与残留进程。 | [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) | 后端启动器、Docker/桌面端打包 |
| **Test** | **E2E 控制台覆盖率大幅提升**：新增 23 个针对性用例 + 扩展断言，覆盖聊天流、工具调用、审批卡等核心链路。 | [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | CI/CD 质量门禁、回归防护 |

---

## 3. 项目进展

今日合并/关闭的 16 个 PR 形成 **“MCP 强化 → Provider 稳定 → 启动性能 → 渠道容错 → 测试提速”** 五大推进面：

| 领域 | 代表性 PR | 核心推进 | 状态 |
| :--- | :--- | :--- | :--- |
| **MCP 协议栈** | [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330), [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) | 双协议自动协商、挂起 RPC 强制熔断、Stale `list_tools` 自动恢复 | ✅ **已合并 (beta.3)** |
| **Provider 模型发现** | [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320), [#7386](https://github.com/agentscope-ai/QwenPaw/pull/7386) | 修复自定义 OpenAI 兼容 Provider 模型列表不自动填充；迁移遗留 `max_tokens` 至 `discovered_models`，保密凭证恢复不丢失 | ✅ **已合并** |
| **启动性能架构** | [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384), [#7387](https://github.com/agentscope-ai/QwenPaw/pull/7387) | **共享 A-tier 延迟启动架构**：Tauri 后端与 Python App 共用 ASGI 运行时；“Ready”定义从“进程存活”升级为“默认 Agent 可对话”，非核心插件/维护任务后台异步加载 | ✅ **已合并** |
| **渠道稳定性** | [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) | 钉钉 Stream WebSocket 僵连检测（睡眠唤醒/VPN 切换场景）+ SDK 请求超时下界 | ✅ **已合并** |
| **ACP/输出限额** | [#7388](https://github.com/agentscope-ai/QwenPaw/pull/7388) | 显式运行时限额改用 `max_completion_tokens`，规避 Reasoning 模型多轮 `reasoning item expired` 报错 | ✅ **已合并** |
| **上下文保护** | [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | 单行超长工具结果入上下文前截断，完整结果落盘 Artifact 并挂载恢复元数据 | ✅ **已合并** |
| **测试工程化** | [#7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) | **全量测试套耗时 -41%**：剔除零价值用例、修复实时等待硬编码、拆分集成测试进程税 | ✅ **已合并** |

> **里程碑判读**：v2.2.0-beta.3 标志着 **MCP 兼容性、启动冷启动体验、Provider 自动化发现** 三大历史痛点基本清零，版本进入“仅修关键 Bug”的 RC 预备期。

---

## 4. 社区热点

| 热度排序 | Issue/PR | 核心诉求 | 讨论焦点 | 维护者响应 |
| :--- | :--- | :--- | :--- | :--- |
| **🔥 #1** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **【Open, 13💬, 1👍】** | **QwenPaw Hub 多租户版路线图共创** | 1. 权限模型（RBAC/ABAC）<br>2. 技能/工作区隔离策略<br>3. 审计日志与合规导出<br>4. 对接现有 SSO (OIDC/SAML/LDAP) | **rayrayraykk (Core)** 发起讨论，明确“Hub 将随 2.2.0 推出”，邀请社区提名 MVP 功能，**战略级信号** |
| **🔥 #2** | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) **【Closed, 15💬】** | **飞书渠道：首条消息回复后后续全静默** | Docker/Platform 实例复现；Webhook 收到但不触发 Agent；怀疑 Session 状态机或 Token 刷新死锁 | 已关闭，但**无修复 PR 引用**，疑似归因于 #7381 类钉钉修复的旁路效应，**需回归验证** |
| **🔥 #3** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) **【Open, 9💬】** | **桌面端/Docker 携带 OpenSSL 3.0.x 导致运营商 DPI 重置 TLS 握手** | Python 3.11 + OpenSSL 3.0.x 指纹被识别；桌面端无变通方案；建议升级 Python 3.12+ / 静态链接 BoringSSL / 提供 `sslkeylogfile` 调试 | **无对应 PR**，属基础设施级阻塞，**建议优先级 P0** |
| **🔥 #4** | [#7395](https://github.com/agentscope-ai/QwenPaw/issues/7395) **【Closed, 2💬】** | **Claude Code 第三方 Agent Harness 进度追问** | `harnesses/registry.py` 中 `claude` 标记 `coming_soon=True`，社区期望时间表

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

User Safety: safe

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*