# OpenClaw 生态日报 2026-10-03

> Issues: 473 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-03 02:57 UTC

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

# OpenClaw 项目日报 | 2026-10-03

> **数据基准**：GitHub 过去 24 小时原始数据（Issues: 473 条更新，PRs: 500 条更新，Releases: 1 个）。  
> **统计口径**：Issue/PR “今日”指创建或更新时间落在 2026-10-03 的记录；Release 以发布时间为准。

---

## 1. 今日速览
- **活跃度极高**：单日 973 条 Issue/PR 更新（新开/活跃 Issue 319、关闭 154；待合并 PR 293、合并/关闭 207），核心维护团队与社区贡献者并行推进“路由重构、稳定性修复、插件治理”三大主线。  
- **发布节奏**：推出 **v2026.8.35 extended-stable (LTS 等价版本)**，聚焦安全、可靠性、性能修复及新模型支持，标志着 8 月底代码库进入长期维护通道。  
- **核心风险聚焦**：P0 级崩溃循环、SQLite WAL 无限增长、Gateway 启动超时、内存泄漏（catalog worker ~1 GiB/5min）、插件捕获目录未清理等生产环境阻塞性缺陷集中出现，且多个 Issue 关联“release-blocker”标签。  
- **架构演进信号**：`feat(gateway): route same-root local state mutations through the live owner`（PR #163853 等 4 连环 PR）正在落地，旨在解决 CLI 与 Gateway 并发写状态的长期一致性难题。  
- **技术债偿还**：大量 `refactor/deslop`、`fix(test)`、配置迁移清理（OAuth sidecar 退役、警告去重测试修正）PR 密集合并，显示项目在 2026.9.x 快速迭代后进入“稳定化冲刺期”。

---

## 2. 版本发布
### 📦 v2026.8.35 `extended-stable` (LTS 等价)
- **发布时间**：2026-10-03  
- **定位**：基于 2026 年 8 月底代码库 + 关键安全/可靠性/性能补丁 + 新模型支持的**仅网关**长期支持版本。  
- **核心变更**：
  - 安全更新（含供应链依赖修复）
  - 可靠性修复：启动竞态、SQLite 检查点、子进程清理
  - 性能修复：模型目录缓存、插件加载冷启动
  - 新模型支持：`google-vertex/gemini-3.1-pro-preview`、OpenAI `gpt-5.6-luna` 等
- **破坏性变更**：无（明确标注 “gateway-only”，不含 CLI/插件 breaking change）。  
- **迁移建议**：生产环境建议从 2026.9.x 回滚或直接升级至该 LTS；开发/测试环境可继续跟踪 `latest`。  
- **链接**：[Release v2026.8.35](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35)

---

## 3. 项目进展（今日合并/关闭的关键 PR）
| PR | 类型 | 核心推进 | 影响面 | 链接 |
|---|---|---|---|---|
| **#163954** | `fix(nodes)` | Warm worker 回复提前结束，中位首包→结束延迟显著下降 | Gateway 性能、会话体验 | [#163954](https://github.com/openclaw/openclaw/pull/163954) |
| **#163972** | `fix(sessions)` | 修复会话证据边界丢失导致的 4 条真实断言失败 | 会话生命周期、数据一致性 | [#163972](https://github.com/openclaw/openclaw/pull/163972) |
| **#163966** | `fix(ui)` | 恢复工作区选择竞态测试覆盖 | Control UI 稳定性 | [#163966](https://github.com/openclaw/openclaw/pull/163966) |
| **#163922** | `feat(diagnostics)` | 堆采样画像新增依赖/原生帧归属 | 可观测性、内存泄漏定位 | [#163922](https://github.com/openclaw/openclaw/pull/163922) |
| **#163977** | `chore(ui)` | Control UI 多语言自动同步（受保护分支流程） | 国际化维护成本降低 | [#163977](https://github.com/openclaw/openclaw/pull/163977) |
| **#163955** | `fix(pr)` | 刷新已审核修正基线，解决冻结基线阻塞合并 | CI/CD 吞吐 | [#163955](https://github.com/openclaw/openclaw/pull/163955) |
| **#163979/80/81** | `fix(test)` | 修复 beta 切片下 `update-status`、`warning-dedupe` 等测试脆性 | 发布验证流水线绿建 | [#163979](https://github.com/openclaw/openclaw/pull/163979) / [#163980](https://github.com/openclaw/openclaw/pull/163980) / [#163981](https://github.com/openclaw/openclaw/pull/163981) |

> **整体推进度**：核心路由重构（Routing 1/4~4/4）仍在 **“需维护者审阅/等待作者”** 状态，尚未合并；今日合并以 **稳定性修复、测试治理、可观测性增强** 为主，架构大 PR 处于“堆栈式审阅”中期。

---

## 4. 社区热点（评论/互动 TOP 5）
| # | 标题 | 评论 | 👍 | 核心诉求 | 链接 |
|---|---|---|---|---|---|
| **#143524** | **Agent SQLite WAL 无限增长 (1.4–2.8 GB) 阻塞 Gateway 启动 (Windows)** | 104 | 0 | 生产环境数据目录膨胀导致服务不可用，`wal_autocheckpoint=1000` 失效，急需自动截断/检查点机制 | [#143524](https://github.com/openclaw/openclaw/issues/143524) |
| **#116201** | **实时语音会话保留无界 Provider/Consult 状态** | 59 | 0 | 长连接下内存/文件句柄泄漏，导致会话状态污染与资源耗尽 | [#116201](https://github.com/openclaw/openclaw/issues/116201) |
| **#144911** | **MCP Server 初始化超时触发未处理 Promise 拒绝崩溃整个 Gateway** | 31 | 0 | 子进程清理路径异常未捕获，单点故障扩散至全进程 | [#144911](https://github.com/openclaw/openclaw/issues/144911) |
| **#102175** | **嵌入式 Prompt Cache 跨 Room-Event/Policy/Responses 边界失效** | 21 | 1 | 长会话中模型可见工具清单变更导致缓存命中率骤降，Token 成本飙升 | [#102175](https://github.com/openclaw/openclaw/issues/102175) |
| **#97616** | **Hook/Tool 子进程泄漏导致僵尸进程累积 & 运行时退化** | 17 | 1 | 长期运行网关出现大量 `<defunct>` 进程，最终耗尽 PID/句柄 | [#97616](https://github.com/openclaw/openclaw/issues/97616) |

> **趋势**：Top 5 均为 **P0/P1 级稳定性/资源泄漏** 老问题，跨版本回归明显，社区期待“彻底修复”而非临时缓解。

---

## 5. Bug 与稳定性（按严重程度）
| 严重度 | Issue | 现象 | 是否已有 Fix PR | 备注 |
|---|---|---|---|---|
| **P0 / Crash-Loop / Release-Blocker** | [#143524](https://github.com/openclaw/openclaw/issues/143524) | Windows 上 Agent SQLite-WAL 持续增长至 GB 级，启动卡死 | ❌ 无 | 需引入 `wal_autocheckpoint(RESTART)` 或定时 `TRUNCATE` |
| **P0 / Crash-Loop** | [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway 读准入封印 → “Worker inventory closed” → `reconcileActive` 未处理拒绝 | ❌ 无 | 状态 DB 并发访问竞态 |
| **P0 / Crash-Loop / UX-Blocker** | [#162031](https://github.com/openclaw/openclaw/issues/162031) | 2026.9.7 运行时工具集装配期 `Unhandled promise rejection: undefined` 导致崩溃循环 | ❌ 无 | `doctor --only core/doctor/runtime-tool-schemas` 可复现 |
| **P0 / Memory Leak** | [#160548](https://github.com/openclaw/openclaw/issues/160548) | `prepared-model-catalog.worker` 每 5 min 泄漏 ~1 GiB，触发内存回收杀死等待轮次 | ❌ 无 | 关联 #159514（模块未卸载） |
| **P1 / Crash-Loop** | [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP stdio 初始化超时 → 子进程清理未处理拒绝 → Gateway 崩溃 | ✅ **#144911 已关闭**，修复含在 `clawsweeper:fix-shape-clear` 队列 | 已进入修复队列 |
| **P1 / SSD Wear** | [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源码捕获每次 CLI/Gateway 启动重写 1.1–6.5 GB，导致 SSD 寿命损耗 | ❌ 无 | 需引入增量捕获/内容寻址存储 |
| **P1 / Message Loss** | [#154299](https://github.com/openclaw/openclaw/issues/154299) | 子代理完成交付文本静默丢失（无队列条目、无失败记录） | ❌ 无 | 仅 Telegram 出站正常 |
| **P1 / Startup Regression** | [#155859](https://github.com/openclaw/openclaw/issues/155859) | 启动墙钟时间随插件数线性增长，discord/codex/weixin 单插件 >10s | ❌ 无 | 发布预算 120s 被挤占 |
| **P2 / Data Integrity** | [#118885](https://github.com/openclaw/openclaw/issues/118885) | 单次启动对同一多 GB DB 执行多次完整 `integrity_check` | ❌ 无 | 启动延迟放大 |
| **P2 / Session State** | [#119411](https://github.com/openclaw/openclaw/issues/119411) | Memory 文件监视器从不重建索引，`Dirty: no` 但索引计数 < 磁盘计数 | ❌ 无 | 索引静默冻结 |

> **Fix PR 覆盖率**：今日 473 条 Issue 更新中，**仅 #144911 显式标注已进入修复队列**；其余 P0/P1 均处于 “needs-maintainer-review / needs-live-repro / no-new-fix-pr” 状态，**修复滞后风险高**。

---

## 6. 功能请求与路线图信号
| Issue/PR | 诉求 | 关联 PR 进展 | 入版本可能性 |
|---|---|---|---|
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | **Per-agent dreaming 配置**（避免全量 dreaming 触发 OOM） | 无 PR | ⭐⭐⭐ 高 — 与 #150635（short-term recall 回收阻塞 deep phase）同根，LTS 后可能纳入 2026.10.x |
| [#118785](https://github.com/openclaw/openclaw/issues/118785) | **容器 & 外部 App SDK 首轮 QA 证明** | 无 PR | ⭐⭐ 中 — 属“维护者追踪”类，依赖 23 容器 ID + 31 SDK ID 审计完成 |
| [#161609](https://github.com/openclaw/openclaw/pull/161609) | **Agents API 选用插件自托管执行器** | 👀 Ready for maintainer look | ⭐⭐⭐ 高 — 企业级自托管核心能力，已通过安全/兼容性风险标注 |
| [#133376](https://github.com/openclaw/openclaw/pull/133376) | **读取已安装本地 Skill 的伴随文件** | 👀 Ready for maintainer look | ⭐⭐ 中 — Code Mode 增强，低风险 |
| [#147886](https://github.com/openclaw/openclaw/pull/147886) | **Feishu 接受文档化 `markdown.tables` 选项** | 👀 Ready for maintainer look | ⭐⭐⭐ 高 — 修复启动阻塞，用户痛点明确 |

> **路线图推测**：下一版本（2026.10.x 或 2026.9.8 patch）大概率聚焦 **“稳定性修复包 + 路由重构落地 + Agents API 执行器

---

## 横向生态对比



# AI 智能体开源生态周报 | 横向对比分析报告
**报告日期**：2026-10-03  
**覆盖项目**：13 个（5 个活跃，4 个静止，2 个数据缺失，2 个僵尸/低活）

---

## 1. 生态全景
个人 AI 助手与自主智能体开源生态呈现**“头部高度集中，尾部大量沉寂”**的两极分化态势。2026 年 10 月的生态重心已从“功能拼多普”全面转向**“稳定性与数据安全攻坚”**，跨项目的 P0 级缺陷集中在 SQLite 数据完整性、内存泄漏及更新回滚机制上。OpenClaw 作为生态锚点，其日活量级（近千条更新）与其他活跃项目（数十条）存在数量级断层，表明生态正形成“核心网关 + 边缘客户端”的分层结构。值得注意的是，LobsterAI 等早期项目虽有关键安全修复，但核心数据风险议题已停滞超 6 个月，提示早期开源助手项目的长期维护风险。**生态进入“质量清洗期”，无版本发布的停滞项目占比达 46%。**

---

## 2. 各项目活跃度对比

| 项目 (Project) | 项目 ID | Issues (更新/新) | PR (更新/合并) | Release | 健康度评估 | 备注 |
|---|---|---|---|---|---|---|
| **OpenClaw** | openclaw | **473 / 319** | **500 / 207** | ✅ v2026.8.35 | 🔥 **极高 (高风险负债)** | 生产级 Gateway，P0 阻塞缺陷集中 |
| **NanoClaw** | qwibitai | 33 (活跃) | 30 (6 合并) | ❌ | 🟡 **中 (3.2/5)** | 更新回滚机制存在高危 Bug |
| **NanoBot** | HKUDS | 6 (5 活跃) | 37 (8 合并) | ❌ | 🟡 **中高** | 渠道边缘 Case 与 Provider 纠偏 |
| **CoPaw** | agentscope-ai | 13 (0 关闭) | 12 (7 合并) | ❌ | 🟢 **中** | 侧重 UI/UX 细节打磨 |
| **PicoClaw** | sipeed | 3 (0 新) | 4 (2 合并) | ❌ | 🟡 **中低** | 存在 3 个 Stale 高需求 PR |
| **LobsterAI** | netease-youdao | 0 (新增) | 0 (新增) | ❌ | 🔴 **极低 (高危)** | 9 条动态全为陈旧项，安全债积压 191 天 |
| **Hermes Agent** | nousresearch | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 未知 | 摘要生成失败 |
| **ZeroClaw** | zeroclaw | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 数据缺失 | ⚠️ 未知 | 摘要生成失败 |
| **NullClaw/IronClaw/TinyClaw/Moltis/ZeptoClaw** | - | 0 | 0 | ❌ | ⚪ **静止** | 过去 24h 无活动 |

---

## 3. OpenClaw 在生态中的定位

*   **规模断层优势**：日活 973 条更新是第二活跃项目（NanoClaw, 63 条）的 **15 倍**，拥有唯一的 LTS 发布节奏（`extended-stable`），确立了其作为**企业级网关基础设施**的地位。
*   **架构差异化**：与 NanoBot/CoPaw 等单体/混合架构不同，OpenClaw 明确推进 **Gateway-only 长期支持模式**（v2026.8.35），并将 CLI/Gateway 状态并发一致性作为核心重构主线（`route same-root local state mutations`），适合高并发生产环境。
*   **社区治理成熟度**：具备严格的标签体系（`release-blocker`, `needs-live-repro`）与 CI/CD 基线治理机制，而 LobsterAI 等项目的 Issue 平均停滞天数高达 191 天，反衬出 OpenClaw 维护团队带宽的优势。
*   **生态依赖风险**：作为核心参照，其 SQLite WAL 膨胀、Worker 内存泄漏等问题具有行业普遍性，其修复方案（如 `TRUNCATE`、增量捕获）将成为其他中小型项目的参考范式。

---

## 4. 共同关注的技术方向

1.  **数据存储完整性 (Data Integrity)** ⭐⭐⭐⭐⭐
    *   **OpenClaw**：Agent SQLite WAL 无限增长（Issue #143524）、启动时多次完整 `integrity_check`。
    *   **NanoClaw**：更新回滚删除部分数据文件（#4003）、PreCompact 全量重写文件导致 OOM（#3716）。
    *   **LobsterAI**：SQLite 无异常处理/原子写导致静默丢数据（#906）。
    *   **诉求**：跨项目均暴露**非原子写入**与**日志轮转**缺陷，需引入检查点/事务锁定机制。

2.  **更新与部署安全性 (Update & Deploy Security)** ⭐⭐⭐⭐
    *   **NanoClaw**：依赖升级（tsx/esbuild）导致 cutover 崩溃（#4004）。
    *   **LobsterAI**：合并了明文 Token 加密（#911）与供应链扫描兜底（#909），但 MCP 命令注入（#908）仍未修复。
    *   **诉求**：原子性更新与凭据落盘加密已成为**P0 级刚需**。

3.  **推理成本与 Provider 中立性 (Cost & Vendor Neutrality)** ⭐⭐⭐
    *   **PicoClaw**：引入 Cheaper Inference 提供商（PR #3393）、迁移至 OpenAI responses API（PR #3381）。
    *   **OpenClaw**：Prompt Cache 跨边界失效导致 Token 成本飙升（Issue #102175）。
    *   **NanoBot**：OpenAI 兼容 Provider 配置纠偏。

4.  **资源泄漏治理 (Resource Leaks)** ⭐⭐⭐⭐
    *   **OpenClaw**：Catalog

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



根据您提供的 GitHub 数据，以下是 **2026-10-03 NanoBot (`HKUDS/nanobot`) 项目动态日报**。

---

# 📊 NanoBot 项目动态日报 (2026-10-03)

### 1. 今日速览
NanoBot 项目在过去24小时内展现出极高的开发活跃度与健康的社区参与度。虽然今日**无新版本发布**，但项目共处理了 **37 条 PR 更新**（其中 8 条已合并/关闭，29 条待合并）和 **6 条 Issues 更新**（5 条活跃，1 条关闭）。整体开发重心聚焦于**核心 Agent 逻辑的稳健性修复、多通道（Channel）集成的边缘 case 优化，以及 OpenAI 兼容 provider 的配置纠偏**。项目整体处于高强度的Bug

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报（2026‑10‑03）**  
*数据来源：过去 24 小时 Issues（3 条）、PR（4 条）以及最新 Releases（无）*

---

## 1. 今日速览
- 项目整体保持 **中等活跃度**：过去 24 小时内有 3 条 Issue 被更新（全部仍处于开放状态），以及 4 条 PR 有动态，其中 2 条已经合并/关闭。  
- 未有新版本发布，主要工作集中在 **缺陷修复、文档補充以及功能原型**（如反向代理支持、更经济的推理提供商）。  
- 讨论最活跃的议题是 **Web UI 输入卡顿**（Issue #3281，17 条评论），表明用户对交互体验的关注度较高。  
- 总体来看，代码库的健康状况良好，但仍有若干 **stale**（长时间无更新）的 PR 和 Issue 需要维护者关注。

---

## 2. 版本发布
> **今日无新版本发布**。  

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 状态 | 标题 | 主要贡献 | 链接 |
|----|------|------|----------|------|
| #3368 | ✅ CLOSED (stale) | docs: add Parallel Search MCP setup example | 为 CLI 指南补充 Parallel Search MCP 的 copy‑paste 示例，说明如何在不具备 Parallel 账号或 API Key 的情况下使用网页搜索与页面抽取，并提供移除说明。 | [sipeed/picoclaw PR #3368](https://github.com/sipeed/picoclaw/pull/3368) |
| #1544 | ✅ CLOSED | fix: merge PR #1514 #1513 #1512 #1510 #1509 | 将五个早期的修复 PR 集中合并，修复了若干零散的 bug（包括 UI、日志、配置加载等），提升了代码库的整体稳定性。 | [sipeed/picoclaw PR #1544](https://github.com/sipeed/picoclaw/pull/1544) |

**进展概览**  
- 文档方面，**#3368** 为想要快速体验网页搜索功能的用户提供了零门槛的上手指南，降低了使用门槛。  
- 代码方面，**#1544** 集中合并了多个先前分散的修复，虽然这些 PR 已经较早（2026‑03），但它们的合并表明项目在清理旧未合并的工作，有助于减少后续回归风险。

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）

| 项目 | 类型 | 评论数 | 👍 | 主题摘要 | 链接 |
|------|------|--------|----|----------|------|
| Issue #3281 | BUG | 17 | 2 | Web UI 聊天输入框在历史记录略长时出现明显卡顿，影响输入流畅度。 | [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| Issue #3392 | BUG (stale) | 1 | 0 | CLAassistant 未能正确检测 CLA 签名，导致签名验证失败。 | [sipeed/picoclaw Issue #3392](https://github.com/sipeed/picoclaw/issues/3392) |
| Issue #3415 | Feature | 0 | 0 | 需要支持 Nginx 反向代理，使 PicoClaw 能够挂载到自定义路径（如 `/pico/`）下，全部资源走同一前缀。 | [sipeed/picoclaw Issue #3415](https://github.com/sipeed/picoclaw/issues/3415) |
| PR #3393 | Feature (stale) | 0 | 0 | 添加 **Cheaper Inference** 作为 OpenAI‑compatible 推理提供商，以降低成本。 | [sipeed/picoclaw PR #3393](https://github.com/sipeed/picoclaw/pull/3393) |
| PR #3381 | Feature (stale) | 0 | 0 | 将 OpenAI provider 切换到最新的 **responses API**，以获得更好的兼容性与功能。 | [sipeed/picoclaw PR #3381](https://github.com/sipeed/picoclaw/pull/3381) |

**热点背后的诉求**  
- 用户对 **交互性能**（特别是聊天历史增长导致的输入延迟）极为敏感，期望前端能够采用虚拟滚动或增量渲染来保持低延迟。  
- 对 **鉴权/签名机制** 的稳定性也有关注，CLAassistant 未能检测签名可能影响安全合规场景。  
- 部署灵活性需求日益增加，尤其是在已有域名下通过反向代理实现路径隔离的需求（Issue #3415），说明用户希望 PicoClaw 能够无缝嵌入现有站点。

---

## 5. Bug 与稳定性（今日报告的 Bug，按严重程度排序）

| 严重程度 | Issue | 描述 | 是否已有对应的 Fix PR | 链接 |
|----------|-------|------|----------------------|------|
| **高** | #3281 | Web UI 输入卡顿（历史记录较长时） | 尚无专门的修复 PR；可参考前端虚拟列表优化方案。 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| **中** | #3392 | CLAassistant 未检测 CLA 签名 | 无直接 PR；问题涉及签名验证逻辑，需检查 `CLAassistant` 实现。 | [#3392](https://github.com/sipeed/picoclaw/issues/3392) |
| **低** | 无其他新 Bug 报告 | – | – | – |

> **注**：所有 Bug 均仍处于 **OPEN** 状态，尚未有对应的修复 PR 被提交或合并。

---

## 6. 功能请求与路线图信号（用户提出的新功能，结合现有 PR 判断纳入可能性）

| 功能请求 | 关联 Issue/PR | 现有实现进展 | 是否可能进入近期版本 |
|----------|----------------|--------------|----------------------|
| **Nginx 反向代理支持（自定义路径前缀）** | Issue #3415 | PR 中尚未有实现；需要在后端路由注入可配置的基础路径以及前端资源前缀。 | **中等** – 需要后端路由抽象以及前端基础 URL 配划，若维护者看重部署灵活性，可能在下一个小版本中加入。 |
| **更经济的推理提供商（Cheaper Inference）** | PR #3393（open, stale） | PR 已提交但长时间无更新（stale）。若社区测试通过且无重大兼容性问题，易于合并。 | **高** – 功能本质是增加一个 provider 接口，风险低，合并后可立即使用。 |
| **OpenAI responses API 迁移** | PR #3381 (open, stale) | PR 已完成核心逻辑，但同样处于 stale 状态。切换到新 API 能带来更好的功能支持与成本优化。 | **高** – 若没有破坏性变更（根据描述是 non‑breaking），合并后可提升服务质量。 |
| **文档补全：Parallel Search MCP 示例** | PR #3368 (已合并) | 已完成，可视为文档路线的一部分。 | **已完成** |
| **其他细微修复（合并旧 PR）** | PR #1544 (已合并) | 已完成，表明项目在清理旧工作。 | **已完成** |

**路线图暗示**：项目正在朝着 **Provider 可插拔化**、**部署灵活性（路径前缀）**、以及 **API 现代化**（responses API）三个方向前进。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼的真实痛点/场景）

- **输入卡顿（Issue #3281）**  
  - 用户报告：在一次会话中累积约几百条聊天记录后，输入框每次按键都会出现明显延迟（约 200‑300 ms），体验类似于“卡顿”。  
  - 期望：希望前端能够仅渲染可见区域的消息（虚拟滚动）或在历超过一定阈值时自动压缩/分页。  
  - 影响：尤其对长时间对话、代码审查或逐步调试场景尤为不友好。

- **CLA 签名检测失败（Issue #3392）**  
  - 用户在尝试使用自动 CLA 检测工作流时，系统一直报告 “signature not found”，即使已经在 PR 中签名。  
  - 反馈：签名验证逻辑似乎未正确解析 GitHub event payload 中的 `signature` 字段。  
  - 期望：修复检测函数或增加更详细的日志，以便定位问题。

- **反向代理需求（Issue #3415）**  
  - 用户希望在现有站点（如 `example.com`）下通过 Nginx 将 PicoClaw 挂载到 `/pico/`，使所有前端资源、API、WebSocket 等均走相同前缀。  
  - 当前硬编码的根路径（如 `/api/…`、`/launcher-login`、`/pico/ws`）导致仅配置 Nginx 转发无法正常工作。  
  - 期望：增加启动参数（如 `-base-path /pico/`）或环境变量，使前端和后端均能基于该前缀生成URL。

- **Cheaper Inference 提供商（PR #3393）**  
  - 用户评价：该 PR 提供了一个成本更低的 OpenAI‑compatible 网关，能够显著降低每 token 费用（15‑60% 折扣）。  
  - 关注点：需要确认其认证方式（API key）与错误处理是否与现有 provider 接口完全一致。

---

## 8. 待处理积压（长期未响应的重要 Issue/PRs）

| 项目 | 类型 | 最后更新 | 备注 | 链接 |
|------|------|----------|------|------|
| Issue #3392 | BUG (stale) | 2026-10-02 | 仅有一条评论，未得到维护者回复；涉及核心鉴权功能，建议尽快分配责任人。 | [#3392](https://github.com/sipeed/picoclaw/issues/3392) |
| PR #3393 | Feature (stale) | 2026-10-02 | 虽无评论，但功能完整且风险低；建议维护者 review 并尽快合并，以惠及成本敏感用户。 | [#3393](https://github.com/sipeed/picoclaw/pull/3393) |
| PR #3381 | Feature (stale) | 2026-10-02 | 同上，无评论，切换到 responses API 为非破坏性新功能，建议尽快合并。 | [#3381](https://github.com/sipeed/picoclaw/pull/3381) |
| Issue #3281 | BUG (活跃) | 2026-10-02 | 虽有 17 条评论，但尚无针对性的修复 PR；属于用户体验瓶颈，优先级应提升。 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| Issue #3415 | Feature (新) | 2026-10-02 | 刚提出，尚无讨论；若产品路线图包含部署灵活性，可列为近期迭代目标。 | [#3415](https://github.com/sipeed/picoclaw/issues/3415) |

**建议**：维护者可考虑在下一次例行会审中，**优先处理高影响 Bug（#3281）和核心鉴权问题（#3392）**，同时审阅并合并 **Cheaper Inference** 与 **OpenAI responses API** 两个功能 PR，以快速兑现社区对成本降低与 API 现代化的期待。

--- 

*本报告基于公开的 GitHub 事件数据生成，旨在为项目维护者及社区成员提供客观、数据驱动的项目健康视角。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – 2026-10-03 项目日报**
*数据截止日期：2026-10-03 23:59 UTC*

---

### 1. 今日速览
- **Issues** – 33 个新/活跃 Issue，17 个已关闭，活动相对集中在生产稳定性、更新流程和 Multi-user 场景。
- **PRs** – 30 个更新，其中 6 个已合并/关闭，主要为 bug 修复（故障通知、代理挑战、平台 ID 处理）和合并 `channels` 分支工作。
- **发布** – 无新版本发布。项目仍处于持续集成和修复“隐蔽式”缺陷（如 OOM、更新回滚）的状态。

**健康评分（0-5）**：**3.2 / 5** – 活跃度良好，但存在较多长期未决的高严重性 Bug，影响用户生产环境稳定性和更新流程安全。

---

### 2. 版本发布
**无** – 暂无新版本发布。

---

### 3. 项目进展 – 今日合并/关闭的重要 PR

| PR | 状态 | 区域 | 影响 |
|----|------|------|------|
| **#3969** | **已关闭** | 核心/代理 | 修复 Iron Proxy 链路 – 发送基础认证挑战（407），使 Git 能通过代理。|
| **#4006** | **已关闭** | 开箱即用/提供者 | 初始化项目 OpenCode 提供者配置，扩展了默认AI供应商生态。|
| **#2654** | **已关闭** | 平台 ID | 信任预先标记的 `prefix:id` 格式，解决跨渠道ID碰撞问题。|
| **#67** | **已关闭** | 技能 | 合并 Telegram 技能，支持NanoClaw机器人直接管理Telegram群组/频道。|
| **#3994** | **已关闭** | 运行者/渠道 | 让 Claude SDK 的原始失败通知显示出来，而非通用“运行失败”信息。|

*这些 PR 缩小了核心流程中的差距，改善了诊断透明度，并重新激活了一个重要技能。项目在故障通知、代理互操作性和多渠道 ID 处理方面取得了实质性进展。*

---

### 4. 社区热点 – 讨论最多、评论最多、反应最多的话题

**Issues（按评论数排序）**

1. **#1424** – *“Securing One's Fork?”*（7 条评论）—— 讨论初始安装时自动创建公开 Fork 且无法设为私有的问题；涉及隐私控制和自动化安装最佳实践。
   *链接：* `nanocoai/nanoclaw Issue #1424`

2. **#3716** – *“PreCompact conversation-archive writes an unbounded, full-rewrite file per firing”*（3 条评论）—— 生产环境中每当 `PreCompact` 触发时都会写入完整的对话历史文件，导致 OOM 崩溃；引发了对转录管理器和磁盘 I/O 控制的讨论。
   *链接：* `nanocoai/nanoclaw Issue #3716`

3. **#3529**、 **#2173**、 **#1573** – 各 2 条评论—— 分别涉及更新技能验证、运行中断检测和环境变量文档不一致；显示了用户对更新机制和运行时可见性的关注。

**PRs（按社区关注度排序）**

- **#4000** – *“chore(channels): merge main into channels”* – 这是一个大型同步 PR（463 个提交），需要额外的批准；高关注度，因为它影响了整个 `channels` 分支的状态和后续测试运行。
- **#3995** – *“fix(channels): load every adapter and make the branch green”* – 专注于适配器加载问题，社区希望这能解决广泛存在的适配器兼容性问题。
- **#3978** – *“ci: add Dependabot for GitHub Actions, remove the inert Renovate config”* – CI 基础设施更新，直接影响安全补丁的自动化。

*用户最关心的是生产稳定性问题（OOM）、多渠道互操作性和将仓库保持在可构建状态的问题。*

---

### 5. Bug 与稳定性

| 严重程度 | Issue | 摘要 | 是否有 fix PR？ |
|----------|-------|-------|------------|
| **高** | **#4003** – *update rollback 回滚时删除部分 data/ 文件，主机进入不可用状态* | 回滚过程中权限冲突导致主机无法访问数据目录。 | ❌ |
| **高** | **#4004** – *update cutover 因 tsx 或 esbuild 更新而崩溃* | 升级依赖项时最终步骤失败，触发回滚；凸显了迁移过程中原子性问题的不足。 | ❌ |
| **中-高** | **#3716** – *PreCompact OOM* | PreCompact 每 30 分钟写一个完整的会话转录，磁盘耗尽 → 生产环境中容器 OOM。 | ❌ |
| **中-高** | **#3951** – *ncl tasks delete 失败* (Linux) | Docker 创建的根所有权挂载点阻止 `rmSync`，导致活动会话被孤立

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-10-03

> **数据基准**：GitHub 过去 24 小时（2026-10-02 至 2026-10-03）活动聚合  
> **核心提示**：本周期无**新增** Issue/PR，**无版本发布**。全部 9 条动态均为 6 个月前（2026-03-26）创建的陈旧项在 2026-10-02 被自动/人工更新（多打 `stale` 标签），实质为“存量清理”而非“新增进展”。

---

## 1. 今日速览
- **活跃度评级：⭐☆☆☆☆（极低）** —— 过去 24h **零新增** Issue/PR/Release，仅 6 个陈旧 Issue 与 3 个陈旧 PR 于昨日（10-02）刷新时间戳，疑似 Stale Bot 批量打标或维护者集中回查。
- **安全修复推进**：两项高危安全 PR（`#909` 供应链扫描绕过、`#911` 明文 Token 存储）已于昨日关闭合并，消除了两个Critical级风险点。
- **遗留风险暴露**：`#908`（MCP 命令注入）仍处 Open 状态；`#906`（SQLite 数据丢失）等核心稳定性 Issue 无人认领，技术债持续累积。
- **社区信号**：用户关注点集中于 **数据可靠性（导入导出/丢失风险）**、**多端协同** 与 **定时任务准确性**，但均缺乏维护者响应承诺。

---

## 2. 版本发布
> 过去 24h 无新版本发布。

---

## 3. 项目进展（合并/关闭的重要 PR）

| PR | 标题 | 状态 | 核心变更 | 风险等级 | 合并时间 |
|----|------|------|----------|----------|----------|
| [#911](https://github.com/netease-youdao/LobsterAI/pull/911) | `fix(auth): encrypt auth tokens at rest using safeStorage` | **CLOSED** | 将 SQLite 明文存储的 `accessToken`/`refreshToken` 迁移至 Electron `safeStorage`（Keychain/DPAPI/Secret Service），彻底修复物理/备份介质泄露风险。 | 🔴 Critical | 2026-10-02 |
| [#909](https://github.com/netease-youdao/LobsterAI/pull/909) | `fix(security): require user confirmation when skill security scan fails` | **CLOSED** | 修复扫描器崩溃时 `auditReport=null` 导致的“静默安装”绕过漏洞，改为 **扫描失败 = 高风险**，强制用户二次确认。 | 🔴 Critical | 2026-10-02 |

> **进展评估**：安全侧迈出关键两步，**认证凭据落盘加密** 与 **供应链扫描兜底** 均已落地。但 **MCP 命令注入（#908）** 仍悬而未决，建议优先级对齐至 P0。

---

## 4. 社区热点（过去 24h 更新/评论最多）

| 排名 | Item | 更新/评论 | 核心诉求 | 维护者响应 |
|------|------|-----------|----------|------------|
| 1 | [Issue #906](https://github.com/netease-youdao/LobsterAI/issues/906) SQLite 数据丢失风险 | 1 评论 / 👍0 | **数据完整性**：`writeFileSync` 无异常处理/重试/原子写，磁盘满/权限/锁冲突直接丢数据且损坏文件。 | ❌ 无人回应 |
| 2 | [Issue #886](https://github.com/netease-youdao/LobsterAI/issues/886) CopyButton 裸 `setTimeout` 内存泄漏 | 1 评论 / 👍0 | **前端稳定性**：组件卸载后定时器仍触发 `setState`，产生 React Warning 与潜在泄漏。 | ❌ 无人回应 |
| 3 | [Issue #914](https://github.com/netease-youdao/LobsterAI/issues/914) 记忆导入导出 | 1 评论 / 👍0 | **数据流转**：换机/分享场景下无法迁移长期记忆，阻断用户粘性。 | ❌ 无人回应 |
| 4 | [PR #908](https://github.com/netease-youdao/LobsterAI/pull/908) MCP stdio 命令注入修复 | 0 评论 / 👍0 | **安全加固**：校验 `command` 字段防注入，**唯一仍在审的安全 PR**。 | ⏳ 待 Review |

> **热点洞察**：社区关注点从“新功能”转向 **“基础设施可靠性”**（存储、内存、安全），但维护者带宽疑似不足，形成“报告→沉底”闭环。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 影响面 | 是否有 Fix PR |
|--------|-------|------|--------|---------------|
| 🔴 **Critical** | [#906](https://github.com/netease-youdao/LobsterAI/issues/906) SQLite 无异常处理/原子写 | 磁盘满/权限/锁 → 写入失败静默丢数据 + 文件损坏 | 全量用户核心数据 | ❌ 无 |
| 🟠 **High** | [#908](https://github.com/netease-youdao/LobsterAI/pull/908) MCP `command` 无校验 → RCE | 渲染进程被攻陷后可任意命令执行 | 启用 MCP Server 的所有实例 | ✅ **PR Open 待合** |
| 🟡 **Medium** | [#900](https://github.com/netease-youdao/LobsterAI/issues/900) 定时任务间隔 1h 错变 1min | Cron 解析/持久化逻辑异常 | 依赖定时技能的自动化流程 | ❌ 无 |
| 🟡 **Medium** | [#910](https://github.com/netease-youdao/LobsterAI/issues/910) Feishu 定时任务推送失败 | `target` 参数缺失导致投递报错 | 飞书集成用户 | ❌ 无 |
| 🟢 **Low** | [#886](https://github.com/netease-youdao/LobsterAI/issues/886) `setTimeout` 未清理 | React Warning + 极小概率泄漏 | 高频复制场景 | ❌ 无 |
| 🟢 **Low** | [#898](https://github.com/netease-youdao/LobsterAI/issues/898) Cherry Studio 重启断开网关 | 端口 18789 疑似被 Ban/冲突 | Cherry Studio 联动用户 | ❌ 无 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 现有 PR 支撑 | 纳入下版本概率 |
|------|-------|----------|--------------|----------------|
| **记忆导入/导出** | [#914](https://github.com/netease-youdao/LobsterAI/issues/914) | 👍0 / 1评 | 无 | 🟡 **中** —— 结合 `#911` 加密存储重构，顺势实现导出加密包可行性高 |
| **定时任务可靠性增强** | [#900](https://github.com/netease-youdao/LobsterAI/issues/900) | 👍0 / 1评 | 无 | 🟠 **中高** —— 属于回归 Bug，修复成本低但影响信任 |
| **Feishu Bot 完善** | [#910](https://github.com/netease-youdao/LobsterAI/issues/910) | 👍0 / 1评 | 无 | 🟢 **低** —— 仅涉及特定 IM 渠道，优先级靠后 |
| **Cherry Studio 兼容** | [#898](https://github.com/netease-youdao/LobsterAI/issues/898) | 👍0 / 1评 | 无 | 🟢 **低** —— 第三方集成边界问题，需对方配合 |

> **路线图推测**：下一版本（若发布）大概率聚焦 **“安全收尾（合并 #908）+ 数据可靠性（解决 #906/#914）+ 定时任务修复”**，而非新特性。

---

## 7. 用户反馈摘要（从评论/描述提炼）

| 痛点场景 | 原始语证 | 情感倾向 |
|----------|----------|----------|
| **数据不敢信** | “SQLite 保存存在严重数据丢失风险……用户操作数据直接丢失” ([#906](https://github.com/netease-youdao/LobsterAI/issues/906)) | 😡 **强烈不满/焦虑** |
| **迁移受阻** | “换了台机子，想导入记忆，以及分享记忆” ([#914](https://github.com/netease-youdao/LobsterAI/issues/914)) | 😟 **刚需未满足** |
| **自动化失灵** | “定时任务改成每 1 小时，却变成 1 分钟一次” ([#900](https://github.com/netease-youdao/LobsterAI/issues/900)) | 😤 **信任受损** |
| **集成易碎** | “Cherry Studio 更新重启会导致 LobsterAI 网关断开” ([#898](https://github.com/netease-youdao/LobsterAI/issues/898)) | 😕 **体验割裂** |
| **企业级缺失** | “飞书定时任务无法发送，报错 target 缺失” ([#910](https://github.com/netease-youdao/LobsterAI/issues/910)) | 😐 **功能残缺** |

> **共识**：用户已从“体验优化”转向 **“核心数据安全与基础可用性”** 的生存线诉求。

---

## 8. 待处理积压（长期无响应，建议本周介入）

| Item | 创建时间 | 停滞天数 | 优先级 | 建议动作 |
|------|----------|----------|--------|----------|
| [#906](https://github.com/netease-youdao/LobsterAI/issues/906) SQLite 数据丢失风险 | 2026-03-26 | **191 天** | **P0** | 指派核心成员实现 **原子写 + 重试 + 校验和**；同步补齐 `#914` 导出能力。 |
| [#908](https://github.com/netease-youdao/LobsterAI/pull/908) MCP 命令注入修复 | 2026-03-26 | **191 天** | **P0** | **立即 Code Review 并合并**；配合发布 Security Advisory。 |
| [#900](https://github.com/netease-youdao/LobsterAI/issues/900) 定时任务间隔错乱 | 2026-03-26 | **191 天** | **P1** | 复现 Cron 解析/持久化链路，补充单测回归。 |
| [#910](https://github.com/netease-youdao/LobsterAI/issues/910) Feishu 定时推送失败 | 2026-03-26 | **191 天** | **P2** | 补全 `target` 参数兜底逻辑，完善 IM 抽象层。 |
| [#886](https://github.com/netease-youdao/LobsterAI/issues/886) `setTimeout` 清理 | 2026-03-26 | **191 天** | **P3** | 引入 `useRef`/`useEffect` 清理，纳入 Lint 规则防回归。 |
| [#898](https://github.com/netease-youdao/LobsterAI/issues/898) Cherry Studio 端口冲突 | 2026-03-26 | **191 天** | **P3** | 与 Cherry Studio 侧确认端口协商机制，或文档化规避方案。 |

---

## 📌 维护者行动清单（建议今日执行）
1. **Review & Merge [#908](https://github.com/netease-youdao/LobsterAI/pull/908)** —— 封堵最后一条已知 RCE 链路。  
2. **Triage [#906](https://github.com/netease-youdao/LobsterAI/issues/906)** —— 创建 `good first issue` 拆解任务（原子写/重试/校验/导出），引导社区贡献。  
3. **发布 Security Patch (v2026.10.x)** —— 打包 `#909` `#911` `#908` 三连合，附带升级指南（Token 迁移自动化）。  
4. **关闭/归档无效 Stale 项** —— 若 `#898` `#910` 确为下游/配置问题，标注 `w

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

**CoPaw 项目日报 – 2026‑10‑03**

---

### 1. 今日速览
昨日 CoPaw 社区保持了适度的活跃度：**13 个 Issues** 被更新（无新关闭项），**12 个 PR** 发生状态变化（5 个待合并，7 个已合并/关闭）。开发工作以 UI/UX 改进为主（移动端抽屉导航、聊天滚动锁定的实现、工具卡片隐藏功能），同时有多个用户反馈暴露了 UI 层面的 bug（例如聊天历史丢失、图像处理异常）和文档缺口。总体而言，项目正稳步从功能开发转向稳定性与用户体验的完善阶段。

---

### 2. 版本发布
**无正式版本发布。**（无最新 Release）

---

### 3. 项目进展 – 合并/关闭的重要 PR
| PR | 状态 | 作者 | 标题/核心目标 | 影响 |
|---|---|---|---|---|
| [#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347) | **已合并** | AaronZ345 | 修复富文本输入光标在扩展时的可见性问题 | 用户在长提示框中仍能看见光标，避免了输入中断。 |
| [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) | **已合并** | AaronZ345 | 桌面端窗口位置与尺寸持久化 | 提升用户多会话工作效率，启动时恢复窗口状态。 |
| [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | **已合并** | AaronZ345 | 控制台聊天滚动锁 | 用户在生成过程中可自由浏览历史消息，防止界面“抖动”。 |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | **已合并** | AaronZ345 | 聊天工具卡片显示开关 | 降低正常对话的视觉噪音，方便调试时可选显示。 |
| [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | **已合并** | AaronZ345 | 提供商媒体内嵌内容大小限制 | 为图片/视频/音频添加统一配额控制，防止超限请求。 |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | **已合并【待审】** | AaronZ345 | MCP 工具调用超时可配置 | 避免无限挂起，增加新的 `tool_call_timeout` 配置项。 |
| [#7344](https://github.com/agentscope-ai/QwenPaw/pull/7344) | **已合并** | AaronZ345 | 游戏开发语言文件支持 | 通过 Monaco 添加 C#、着色器等语言高亮支持。 |
| [#8

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