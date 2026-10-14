# OpenClaw 生态日报 2026-10-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-14 02:45 UTC

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

# OpenClaw 项目动态日报  
**生成时间：2026-10-14**

---

## 1. 今日速览

OpenClaw 项目今日持续高活跃度，Issues 和 PRs 均有大量更新（各 500 条），其中部分关键问题如代理数据库扩容、启动回归、配置热加载失效等仍未解决，整体健康度受阻。社区对 Windows 支持、Telegram 适配器及插件架构提出诉求增多，反映出平台稳定性与跨平台体验仍是当前关注焦点。

---

## 2. 版本发布

### v2026.10.5-beta.3 – openclaw 2026.10.5-beta.3

#### Highlights：

- **更新保留 Gateway 服务运行**：pnpm 12 安装路径保持持久化，Windows 更新支持受信任的计划任务账户及其驱动，macOS 支持受保护的 Bun 服务。
- 此版本为 beta 版本，聚焦于跨平台更新兼容性增强，为稳定版提供技术储备。

> 🔗 [查看 Release 详情](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3)

### v2026.10.3 – openclaw 2026.10.3

- 包含 90 次提交，涵盖 79 个 PR，239 个贡献者共同完成。
- 主要聚焦于性能优化、稳定性提升及部分 API 改进。

> 🔗 [查看 Release 详情](https://github.com/openclaw/openclaw/releases/tag/v2026.10.3)

---

## 3. 项目进展

尽管 PR 数量庞大，但今日合并的 PR 主要集中在以下方向：

| PR 编号 | 类型 | 简要说明 |
|--------|------|----------|
| [#171583](https://github.com/openclaw/openclaw/pull/171583) | Fix | 修复 CI 大页失败时安全审核状态卡住的问题 |
| [#171582](https://github.com/openclaw/openclaw/pull/171582) | Perf | 改进子进程启动过程中的资源归属标识 |
| [#171507](https://github.com/openclaw/openclaw/pull/171507) | Fix | 稳定恢复清理验证逻辑 |
| [#171580](https://github.com/openclaw/openclaw/pull/171580) | Fix | 保留会话分支中的活动工具调用状态 |
| [#171573](https://github.com/openclaw/openclaw/pull/171573) | Perf | 减少引用 XML 后的 Markdown 解析开销 |

项目整体向前推进中，核心稳定性与 CI 链路持续优化，但大量 Bug 尚未修复，整体前进速度受制于缺陷修复任务量。

---

## 4. 社区热点

以下 Issues/PR 评论数最高，反映出社区关注点：

### Issue #143524
🔗 [[Link]](https://github.com/openclaw/openclaw/issues/143524)

- **标题**：Agent SQLite WAL 文件无限增长致 Gateway 启动失败（Windows）
- **评论数**：123
- **诉求**：该问题影响生产环境稳定性，涉及数据库管理与自动检查点机制，需要紧急关注。

### Issue #148707
🔗 [[Link]](https://github.com/openclaw/openclaw/issues/148707)

- **标题**：回复丢失：“Reply operation has no active tool authority snapshot”
- **评论数**：19
- **诉求**：2026.9.4 引入的回归错误导致会话中断，严重影响交互式会话体验。

### PR #171573
🔗 [[Link]](https://github.com/openclaw/openclaw/pull/171573)

- **标题**：避免引用工具 XML 后的逐-Token Markdown 解析
- **评论数**：未显示（PR 页面）
- **诉求**：性能瓶颈消除，提升回复流畅度

这些热门讨论反映出用户对 **数据库稳定性**、**会话一致性** 与 **性能体验** 的高度关注。

---

## 5. Bug 与稳定性

按严重程度排序：

### P0 级别 Bug

1. **Issue #168955**：启动回归 — 2026.10.1 启动时间从 410 秒增至 1030 秒（Windows）
   - 🔗 [查看](https://github.com/openclaw/openclaw/issues/168955)
2. **Issue #156112**：`openclaw update` 在全局安装交换步骤失败
   - 🔗 [查看](https://github.com/openclaw/openclaw/issues/156112)
3. **Issue #166894**：Gateway 重启时在 Windows 多代理环境下挂起 30 分钟至 2 小时
   - 🔗 [查看](https://github.com/openclaw/openclaw/issues/166894)

### P1 级别 Bug

1. **Issue #155859**：Gateway 启动时间随启用的插件数量线性增长
   - 🔗 [查看](https://github.com/openclaw/openclaw/issues/155859)
2. **Issue #144291**：配置热加载中止每一次活动代理回合
   - 🔗 [查看](https://github.com/openclaw/openclaw/issues/144291)
3. **Issue #125764**：Telegram  outbound send 失败仅重试一次，消息丢失
   - 🔗 [查看](https://github.com/openclaw/openclaw/issues/125764)

> ⚠️ 当前无明确 Fix PR 对上述 P0/P1 问题施压，需优先排查。

---

## 6. 功能请求与路线图信号

部分用户提出的功能需求与已提交 PR 对应：

| 功能请求 | 对应 PR | 状态 |
|---------|----------|------|
| 支持 Databricks Unity Gateway 提供商 | [#155633](https://github.com/openclaw/openclaw/issues/155633) | 已建立基础 |
| 允许将插件标签固定在 Control UI 侧边栏 | [#111143](https://github.com/openclaw/openclaw/issues/111143) | 待评审 |
| 增强自托管 STT/TTS 支持（WebChat） | [#45508](https://github.com/openclaw/openclaw/issues/45508) | 功能提案中 |

这些需求反映用户希望进一步扩展 **模型集成能力**、**UI 可定制性** 与 **语音交互体验**。

---

## 7. 用户反馈摘要

从 Issues 注释中提炼关键反馈点：

- ❌ “Gateway 启动速度普遍变慢，尤其是 Windows 多代理环境”
- ❌ “配置热加载后，正在进行的会话会被中断”
- ⚠️ “更新后插件数据迁移不完成，Gateway 状态异常”
- ✅ “最近版本的更新机制改进，跨平台部署更顺畅”
- 💬 “希望官方支持更多云模型集成（如 Databricks）”

总体来看，用户对稳定性与恢复性满意度下降，但对更新机制方面持积极态度。

---

## 8. 待处理积压

以下 Issue 严重且长期未响应，需加急跟进：

| Issue 编号 | 标题 | 跟进建议 |
|------------|------|----------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄露未收割的子进程 | 已关闭，但未合并 Fix PR |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite 内存表无上限策略 | 高风险积压问题 |
| [#161379](https://github.com/openclaw/openclaw/issues/161379) | Gateway 固定 CPU 核心 | 性能瓶颈问题 |
| [#128809](https://github.com/openclaw/openclaw/issues/128809) | Slack Socket 模式下的 Socket 泄漏 | 影响生产环境稳定性 |

维护者建议优先处理上述活跃度与稳定性相关的积压任务。

--- 

✅ **总结建议**：  
当前阶段应集中精力于 **启动性能**、**配置热加载**、**子进程/数据库资源管理** 三大核心稳定性问题，避免因功能开发导致问题复发。社区反馈显示用户迫切需要稳定可靠的跨平台体验。

---

## 横向生态对比

# AI 智能体/个人助手开源生态横向对比分析报告 (2026-10-14)

## 1. 生态全景
当前个人 AI 助手/自主智能体开源生态呈现**功能迭代与稳定性修复并存**的态势，跨平台兼容性、插件生态扩展与费用/token 计费精度是社区共同核心痛点。各项目普遍面临**数据库/会话管理瓶颈**、**跨平台启动退化** 与**安全实现流于形式**等问题，开源社区在“从可跑向稳定、可控”阶段的转型正加速进行。

## 2. 各项目活跃度对比
| 项目 | Issues (今日) | PRs (今日) | Release (近30d) | 健康度评估 |
|------|--------------|------------|----------------|------------|
| **OpenClaw** | ~500 (活跃) | ~500 (活跃) | Beta v2026.10.5 & Stable v2026.10.3 | ⚠️ 受 P0/P1 启动回归、多代理挂起 等严重 Bug 累累 |
| **NanoBot** | 6 | 28 (4合并/关闭) | 无 stable 版 | ⚠️ Docker 构建失败 + AutoCompact 全量扫描 影响入门体验 |
| **Hermes Agent** | 50 | 50 (7合并/关闭) | 无版本 | ⚠️ macOS 网关崩溃、Cron SQLite 锁 中断 稳定性持续压力 |
| **PicoClaw** | 7 (新1关6) | 2 (1合并) | 无新版 | ✅ UI/UX 与 Agent 循环韧性优化居多，稳定性已修复核心 Issue |
| **NanoClaw** | 1 (关) | 3 (2待合并/1合并) | 无版本 | ✅ 核心 Bug (无限循环、回复丢失) 已关闭，聚焦 macOS 容器与更新通道 |
| **NullClaw** | 0 | 0 | 无 | 💤 极度冷门，维护停滞 |
| **IronClaw** | 1 | 1 (Dependabot) | 无 | ✅ 极简维护期，聚焦依赖安全与声明式扩展 |
| **LobsterAI** | 1 (安全报警) | 8 (合并/关) | 无版本 | ⚠️ Provider API 导出硬编码密码 安全警报 需紧急响应 |
| **ZeroClaw** | 25 | 50 (44待合并/6合并) | 无版本 | ⚠️ SQLite created_at 丢失、OpenRouter 费用$0 等 P1/P2 关键 Bug 未落地 |
| **Moltis** | 0 | 2 (待合并) | 无版本 | 🌱 架构治理导向，聚焦多 Agent 一致性与白名单控制 |

## 3. OpenClaw 在生态中的定位
OpenClaw 作为**跨平台网关与插件编排的大规模基础项目**，其技术路线聚焦于**网关服务运行、跨平台更新适配与数据库扩容**，与 Hermes Agent（委任/桌面稳定）、NanoBot（Google Drive/Sheets 计算提供商）和 ZeroClaw（插件生态/WASM host）形成**平台层、功能层、插件层**的分层协同。其社区规模最庞大（Issues/PRs 均近500），但因启动回归、配置热加载失效 等 P0/P1 问题积压严重，健康度受阻；相比之下，IronClaw 与 Moltis 则处于精细化治理的孤立补强阶段，PicoClaw 与 NanoClaw 作为轻量级变体，聚焦 UI/UX 与局部稳定性优化。

## 4. 共同关注的技术方向（跨项目映射）
| 方向 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **数据库/会话稳定性** | OpenClaw, ZeroClaw, Hermes | SQLite WAL 无限增长、created_at 统一更新导致时序丢失、cron SQLite 写锁 中断 |
| **跨平台兼容与更新** | OpenClaw, NanoBot, NanoClaw | Windows 启动回归、macOS Apple 容器支持、更新通道选择与自动化失败 |
| **插件/提供商扩展** | IronClaw, LobsterAI, PicoClaw, ZeroClaw | 声明式 Plazmi 扩展、Kenable AI 搜索、Mermaid/KaTeX 升级、Tsubasa OpenAI 目录扩展 |
| **安全/权限治理** | LobsterAI (硬编码密钥), Moltis (spawn 白名单), ZeroCrow (JPEG admission) | API 密钥硬编码、细粒度 Agent 调用白名单、资源边界检查 |
| **会话一致性与热加载** | OpenClaw, Hermes, NanoClaw | 配置热加ock 中断活跃会话、直接对话 子 Agent 配置割裂、流式回复丢失/重复 |

## 5. 差异化定位分析
| 维度 | OpenClaw | Hermes Agent | NanoBot | PicoClaw | ZeroClaw | IronClaw / Moltis |
|------|----------|------------|---------|--------|----------|-------------------|
| **功能侧重** | 网关服务、跨平台编排、代理数据库 | 桌面更新、委任任务、远程 Linux 桌面 | 文件协作 (Google Drive/Sheets)、Compute 供应商 | UI/UX、Agent 循环韧性、移动通道 (iMessage) | 插件生态 (W

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报 (2026-10-14)**

---

### 1. 今日速览
过去 24 小时 Nanobot 保持了较高的社区活跃度：新提交了 **6 个 Issues**，同时 GitHub 上共有 **28 个 PRs 更新**（其中 4 个已合并/关闭），反映出工程活动频繁。无新版本发布，但有多个重要重构和 bug 修复 PR 正在推进，表明项目代码健康状况良好。尽管如此，**Docker 镜像构建失败**（问题 #6165）和 **AutoCompact 性能问题**（问题 #6192）等严重问题仍然悬而未决，可能影响用户入门体验和大规模部署表现。

---

### 2. 版本发布
*无 stable 版本发布。*

---

### 3. 项目进展
**合并/closed PRs（今日）**
- **PR #6201** – 完成内置工具描述重构，精简了 `my`、`message`、`subagent`、`cron`、`apply_patch`、`generate_image` 等工具的描述文本，避免冗余操作说明 ([#6201](https://github.com/HKUDS/nanobot/pull/6201))。
- **PR #6179** – WebUI 组件画廊重构，引入无网关组件参考页面，涵盖 120 个示例家族，覆盖 159 个源模块 ([#6179](https://github.com/HKUDS/nanobot/pull/6179))。

**在建 Feature PRs**
- **PR #6195** – 新增 `google_drive` 工具，支持服务账号访问共享文件夹（含文件元数据获取和下载），为 Google Docs、Sheets、Slides 提供文本/CSV/PDF 导出 ([#6195](https://github.com/HKUDS/nanobot/pull/6195))。
- **PR #6196** – 新增 `google_sheets` 工具，实现读取和更新共享电子表格的功能 ([#6196](https://github.com/HKUDS/nanobot/pull/6196))。
- **PR #6168** – 更新管理器集成托管安装和恢复流程，继续推进 #5817 的工作，并纳入 #6154 的 prepare-only 候选管道 ([#6168](https://github.com/HKUDS/nanobot/pull/6168))。

以上 PR 的合并将显著提升 Nanobot 的文件协作能力和用户体验，并为下一次稳定版本积累新功能。

---

### 4. 社区热点
| 资源 | 评论/关注 | 简要概述 |
|------|-----------|-----------|
| **Issue #6165** | 2 条评论 | 官方 Docker 镜像在本地部署时无法正常运行，用户遭遇“安装即用”承诺破灭的问题，并指出文档不友好 ([#6165](https://github.com/HKUDS/nanobot/issues/6165))。 |
| **PR #6168** | 最新更新（2026-10-14） | 进度条可见，已合并 7 个提交，仍在协调多个更新 PR 的合并 ([#6168](https://github.com/HKUDS/nanobot/pull/6168))。 |
| **PR #6199** | 关注度高 | 引入 Standard Compute 供应商，实现 OpenAI/AI 兼容网关，支持月付套餐和固定算力预算 ([#6199](https://github.com/HKUDS/nanobot/pull/6199))。 |

Issue #6165 是当前最受关注的议题，反映出用户对核心安装流程的高度关注，而 PR #6168 和 #6199 则显示团队在更新管理和新供应商接入方面的持续推进。

---

### 5. Bug 与稳定性
| 问题 | 严重程度 | 当前状态 | 修复情况 |
|------|----------|----------|------------|
| **#6165 – Docker 镜像不可用** | 高（影响入门体验） | 开放，2 条评论 | 无 fix PR |
| **#6192 – AutoCompact.check_expired 每秒全量扫描 sessions** | 中（性能问题） | 开放 | 无 fix PR |
| **#6197 – 图片媒体类型大小写不匹配导致 web_fetch 错误** | 中（解析错误） | 已提 fix PR ([#6197](https://github.com/HKUDS/nanobot/pull/6197))，状态：open |
| **#6194 – 闲置会话锁永久保留** | 中（资源泄漏） | 已提 fix PR ([#6194](https://github.com/HKUDS/nanobot/pull/6194))，状态：open |
| **#6186 – 带内嵌 .eml 文件的邮件主体提取错误** | 低（内容提取） | 已提 fix PR ([#6186](https://github.com/HKUDS/nanobot/pull/6186))，状态：open |
| **#6185 – Cron 作业 DST 时区偏移不稳定** | 低（计划任务） | 已提 fix PR ([#6185](https://github.com/HKUDS/nanobot/pull/6185))，状态：open |
| **#6184 – 相同附件文件名冲突导致覆盖** | 低（附件处理） | 已提 fix PR ([#6184](https://github.com/HKUDS/nanobot/pull/6184))，状态：open |
| **#6183 – XLSX grep 忽略单元格内换行** | 低（Excel 解析） | 已提 fix PR ([#6183](https://github.com/HKUDS/nanobot/pull/6183))，状态：open |
| **#6198 – WebUI 上传附件 cookie 同源问题** | 中（边缘部署） | 已提 fix PR ([#6198](https://github.com/HKUDS/nanobot/pull/6198))，状态：open |

**优先处理建议：** Docker 镜像问题和 AutoCompact 性能问题目前无修复 PR，应尽快指派开发人员处理。

---

### 6. 功能请求与路线图信号
| Issue | 请求内容 | 目前进展 | 预计纳入下一版本的可能性 |
|-------|----------|----------|----------------------------|
| **#6200 – 免费托管 Nanobot 服务** | 为社区用户提供一个包含 100 台云电脑的免费实例，支持 GitHub/Google 登录，无安装和计费流程 | 正在讨论中，暂无 PR | **中等** – 若维护者同意，可作为官方推广功能快速跟进 |
| **#6188 – Google Sheets 工具** | 读取/更新共享电子表格，实现数据追踪自动化 | **已实现**（PR #6196） | **高** – 预计合并后将随下一次稳定版本发布 |
| **#6187 – Google Drive 工具** | 通过服务账号访问共享文件夹，支持元数据读取和文件下载 | **已实现**（PR #6195） | **高** – 与 Sheets 工具一起发布 |
| **#6182 – Plazmi MCP 示例** | 提供 MCP 配置示例，帮助代理在 Plazmi 世界中实现状态持续 | 仅提案阶段，无实现 | **低** – 取决于社区贡献意愿 |
| **#6199 – Standard Compute 供应商** | 集成 OpenAI/AI 兼容网关，支持月付套餐 | PR #6199 状态：open，已合并主要变更 | **高** – 已在合并队列中，预计下次发布包含 |

**结论：** Google Drive 与 Sheets 工具即将面世，Standard Compute 供应商推进顺利，免费云服务建议有一定社区基础，但需进一步协调。

---

### 7. 用户反馈摘要
- **痛点 #1 – Docker 部署失败**: 多个用户（issue #6165）反馈使用 `docker compose up` 后，Nanobot 无法正常启动，怀疑镜像构建异常。此外，文档中缺少清晰的故障排查步骤，导致“安装即用”承诺无法兑现。
- **痛点 #2 – 文件协作障碍**: 用户反复提到无法直接访问 Google Drive 和 Sheets 等云服务，必须先下载文件再上传到工作区。Google Drive 和 Sheets 工具的加入将有效缓解这一问题。
- **满意点 – 免费云服务提案**: Issue #6200 提出的免安装、免计费云实例获得积极响应，用户希望快速体验 Nanobot，无需本地配置，这体现了对低门槛接入的需求。

---

### 8. 待处理积压
| 优先级 | Issue/PR | 悬而未决原因 | 建议行动 |
|--------|----------|--------------|------------|
| **高** | **#6165 – Docker 镜像故障** | 无修复 PR，需重新审视镜像构建流程 | 分配 dev 修复并补充入门文档 |
| **高** | **#6192 – AutoCompact 每秒全量扫描** | 无修复 PR，需优化 SessionManager.list_sessions 调用 | 优化循环逻辑，增加批量或增量扫描机制 |
| **中** | **#6200 – 免费托管 Nanobot 服务** | 需决策是否开源、计费和管理 | 确定服务范围和维护方案，纳入 roadmap |
| **中** | **#6182 – Plazmi 世界 MCP 示例** | 缺少具体实现代码 | 可从社区征集 PR 贡献者 |
| **低** | **#5943 – 会话状态 SQLite 重构** (长期进行中) | 大量测试和迁移工作 | 持续跟进，确保稳定过渡 |

这些 issue/PR 的进展情况将直接影响 Nanobot 的用户入门体验、核心性能表现和生态扩展能力，建议维护者优先处理 Docker 问题和 AutoCompact 性能瓶颈。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – 2026‑10‑14 项目动态日报**
*数据来源：GitHub 仓库 NousResearch/hermes-agent（过去 24 小时 Issues/PR 活动统计）*

---

## 1. 今日速览
- **Issues 与 PR 活动**：Issues 更新量激增（共 50 条，其中 46 条新开/活跃，4 条已关闭）。PR 更新量与之相当（共 50 条，其中 43 条待合并，7 条已合并/关闭）。无新版本发布。
- **健康度评估**：虽然周转率高，但合并数量有限表明进展不均衡。大量高优先级（P1–P2）Bug 处于待解决状态（macOS 网关崩溃、cron 死锁、桌面启动失败等），表明稳定性方面存在持续压力。社区对增强核心功能（权限管理、委托任务、子代理生命周期）的热烈讨论表明用户需求旺盛，但开发工作尚未有效释放。

---

## 2. 版本发布
**无** – 本日没有正式版本、实验版或发布候选版本发布。

---

## 3. 项目进展（合并/关闭的 PR）
| PR | 状态 | 主要贡献 | 影响 |
|---|---|---|---|
| **#138155** *(关闭)* | 已合并 | 修复 Telegram 工具进度重复计数器，使其位于独立的计数行 | 修复了 Telegram 消息中代码块转义的问题（相关 Issues #138148）。 |
| **#138155** | 已合并 | 确保重复计数不会污染结束的代码围栏 | 提升了 Telegram 消息的渲染可靠性。 |
| **其他 6 个 PR** | 已合并 | 范围较小（如 cron 清理、监控哈希）—— 详细内容在“Outstanding Backlog”中 | 为后续改进奠定了基础，但整体可见功能提升有限。 |

*本日合并了 7 个 PR（按 GitHub 统计），但其中只有一个（#138155）对用户可见。剩余 PR 主要涉及内部清理和回归修复。*

---

## 4. 社区热点（Issues & PR 讨论）

| 排名 | Issue / PR | 评论数 / 反应 | 核心诉求 | 链接 |
|---|---|---|---|---|
| **1** | **#131859** *(Issues)* | **38 条评论** (👍 0) – 最多讨论的议题 | 权限问题：`gh pr create` 失败（仅限 `kuehnberger` 用户）。用户无法通过 API 创建 PR，但可以正常创建 Issues 和 Fork PR。 | [Issue #131859](https://github.com/NousResearch/hermes-agent/issues/131859) |
| **2** | **#80222** *(Issues)* | **8 条评论** (👍 3) | `delegate_task` 缺少每调用模型/推理努力覆盖功能 – 需要在 `delegate_task` 工具处覆写 `config.yaml` 的 `delegation` 块设置。 | [Issue #80222](https://github.com/NousResearch/hermes-agent/issues/80222) |
| **3** | **#106592** *(Issues)* | **8 条评论** (👍 0) | 远程 Linux 桌面更新后，Hermes 桌面报告“更新未完成/后端更新失败”，尽管代码更新已完成。 | [Issue #106592](https://github.com/NousResearch/hermes-agent/issues/106592) |
| **4** | **#133212** *(Issues)* | **7 条评论** (👍 0) | 子代理生命周期插件 (`subagent_lifecycle`) 需要 v1.1 版本支持主机隔离传输和 facade 层上的努力/路由/后续操作。 | [Issue #133212](https://github.com/NousResearch/hermes-agent/issues/133212) |
| **5** | **#68536** *(Issues)* | **6 条评论** (👍 0) | `/model` 拾取器显示状态为 “Shutdown/Retiring” 的模型，导致可用模型难以查找。 | [Issue #68536](https://github.com/NousResearch/hermes-agent/issues/68536) |
| **6** | **#137838** *(Issues)* | **6 条评论** (👍 0) | macOS 网关因未确认的存活探测问题反复退出；根因尚未确定。 | [Issue #137838](https://github.com/NousResearch/hermes-agent/issues/137838) |
| **7** | **#138156** *(PR)* | **未列出评论** (归档 Issues #101427 和 #101428) | `search_files` 现在能在 Office 文件和 PDF 中提取文本 – 修复了长期存在的搜索功能缺陷。 | [PR #138156](https://github.com/NousResearch/hermes-agent/pull/138156) |

*这些讨论表明了三个优先事项领域的压力：**(1) 权限/身份验证**、**(2) 增强的委托和子代理功能**、**(3) 桌面/网关稳定性**。用户对核心可靠性功能（如桌面更新、网关存活）的技术细节极为关注。*

---

## 5. Bug 与稳定性（今日报告，按严重性排序）

| 严重程度 | Issue | 影响描述 | 修复状态 | 修复 PR |
|---|---|---|---|---|
| **P1** | **#137838** – macOS 网关反复退出 | 网关进程崩溃，导致消息传递中断。 | 🔴 **待修复** (根因不确定) | — |
| **P1** | **#138160** – Cron 转储因 SQLite 写锁中止，无重试，发生 RuntimeError | 计划任务在短暂锁争用时中止，永久损坏会话状态。 | 🔴 **待修复** | — |
| **P2** | **#138154** – 桌面在 omarchy 中启动时悬停 | Hermes 桌面无法启动，可能崩溃。 | 🟡 **有 PR (#138161)** – 修复了 Node 进程在隐藏 stdin 上的挂起，但启动问题尚未解决。 | #138161 |
| **P2** | **#138162** – 桌面云登录打开营销页面 | “Hermes 云” 登录不完成发现。 | 🟡 **待修复** | — |
| **P2** | **#138105** – 多路复用 cron 定时器导致 Discord 心跳饥饿 | 每分钟 O(profiles) 配置重新解析，导致重要服务饱和。 | 🟡 **待修复** | — |
| **P3** | **#138148** – 工具进度重复计数器破坏 Telegram 代码围栏 | 导致回显反斜杠并使代码块失效。 | ✅ **已修复** (通过 PR #138155、#138150、#138151) | #138155、#138150、#138151 |
| **P3** | **#101427** – `search_files` 无法读取 Office/PDF 内部文本 | 内容搜索在有文件时返回零结果。 | ✅ **已修复** (PR #138156) – 合并 | #138156 |
| **P4** | **#63681** – ACP 会话持久化丢失命名自定义提供程序命名空间 | 命名提供程序 (`custom:anthropic`) 在恢复时丢失。 | 🟡 **待修复** (自 2026-07-13 以来无更新) | — |

***稳定性总结**：尽管网关和 cron 等关键服务的多个 P1/P2 级别 Bug 悬而未决，但 PR #138155 等修复努力正在减轻用户可见的症状。待办事项清单中还存在许多高优先级问题的长期未解决问题。*

---

## 6. 功能请求与路线图信号

| Issue / PR | 类型 | 用户价值 | 可能何时得到解决 |
|---|---|---|---|
| **#80222** | `delegate_task` 每调用

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

---

**PicoClaw 项目日报（2026-10-14）**  

---

### **1. 今日速览**  
项目整体活跃度中等，今日共处理7条Issue（新建1条，关闭6条）和2条PR（合并1条，剩余1条待合并）。无新版本发布，社区聚焦于UI/UX优化、可靠性修复及安全功能需求。核心维护者持续推进稳定性和扩展性改进，整体健康度良好。  

---

### **2. 版本发布**  
暂无新版本发布。  

---

### **3. 项目进展**  
- **合并PR #3370**（[链接](https://github.com/sipeed/picoclaw/pull/3370)）：  
  由 `ilya-bogin-keenable` 贡献的 `feat(tools): add Keenable web search provider` 合并，新增对 Keenable AI 搜索服务的集成，无需额外API密钥即可使用，提升工具链扩展性。  
- **关闭Issue #3404**（[链接](https://github.com/sipeed/picoclaw/issues/3404)）：  
  作者 `x1F916` 报告的核心稳定性问题（agent loop、channels manager 等）被修复，促进了系统可靠性。  

---

### **4. 社区热点**  
#### **讨论度最高的Issue/PR**  
1. **Issue #440**（[链接](https://github.com/sipeed/picoclaw/issues/440)）：  
   - 9 条评论，0 👍  
   - 内容：提出替换硬限制 `max_tool_iterations: 20` 为上下文窗口绑定和循环检测，缓解复杂任务失败问题。  
   - 诉求：优化 agent 流程韧性，避免因迭代次数限制导致的提前中断。  

2. **Issue #3427**（[链接](https://github.com/sipeed/picoclaw/issues/3427)）：  
   - 0 条评论，0 👍  
   - 内容：提案构建基于 MCP 的低依赖持久化代理示例（Plazmi），支持 UTC 时间交互。  
   - 信号：反映社区对分布式部署和实时交互的需求，可能为后续功能方向。  

3. **PR #3416**（[链接](https://github.com/sipeed/picoclaw/pull/3416)）：  
   - 0 条评论，0 👍（数据不完整）  
   - 内容：新增 Sendblue iMessage/SMS 通道，支持手机端直连 PicoClaw 交互。  
   - 信号：扩展通信渠道，提升项目实用性。  

---

### **5. Bug 与稳定性**  
- **Issue #3407**（[链接](https://github.com/sipeed/picoclaw/issues/3407)）：  
  - 类型：重大 Bug（Web UI会话消失问题）  
  - 状态：已关闭  
  - 描述：Web UI中会话在模型“思考”期间消失，导致“幽灵会话”。  
  - 修复：由作者自行解决，暂无fix PR。  

- **Issue #3404**（[链接](https://github.com/sipeed/picoclaw/issues/3404)）：  
  - 类型：可靠性 Bug  
  - 状态：已关闭  
  - 描述：核心模块（agent loop、channels manager）存在可复现的问题。  
  - 修复：由维护者审核并合并修复。  

---

### **6. 功能请求与路线图信号**  
1. **Issue #3406**（[链接](https://github.com/sipeed/picoclaw/issues/3406)）：  
   - 需求：改进 Web UI 的加载指示、会话列表及归档功能。  
   - 信号：若后续迭代重点，可能与用户体验优化有关。  

2. **Issue #3405**（[链接](https://github.com/sipeed/picoclaw/issues/3405)）：  
   - 需求：启用私密漏洞报告（GitHub Security Advisories）。  
   - 信号：暗示项目正在考虑安全治理，可能纳入下一版本。  

3. **Issue #3397**（[链接](https://github.com/sipeed/picoclaw/issues/3397)）：  
   - 需求：将 Tsubasa 纳入 OpenAI兼容提供商目录。  
   - 信号：扩展模型集成能力，符合生态化发展趋势。  

4. **PR #3416**（[链接](https://github.com/sipeed/picoclaw/pull/3416)）：  
   - 功能：SMS/iMessage 通道集成，若合并后续，可能成为下一版本亮点。  

---

### **7. 用户反馈摘要**  
- **痛点**：  
  - Web UI的“思考中”状态不明确（Issue #3406）；  
  - 会话消失导致操作困难（Issue #3407）；  
  - 无私密漏洞报告渠道（Issue #3405）。  
- **场景**：  
  - 用户希望 PicoClaw 可靠稳定运行于复杂任务（Issue #440）；  
  - 移动端需直连交互（PR #3416）。  
- **满意/不满意**：  
  - 上游 PR #3370 被快速合并，反馈积极；  
  - Issue #3404 被否决前关闭（stale bot干扰），引发信心疑虑。  

---

### **8. 待处理积压**  
- **PR #3416**（[链接](https://github.com/sipeed/picoclaw/pull/3416)）：  
  - 状态：Open，待合并  
  - 作用：新增 Sendblue iMessage/SMS 通道  
  - 建议：若优先级高，应尽快审核合并，提升跨平台交互能力。  
- **Issue #440**（[链接](https://github.com/sipeed/picoclaw/issues/440)）：  
  - 状态：Open，9 条评论  
  - 作用：优化 agent 迭代机制  
  - 建议：需权衡硬限制与鲁棒性，后续版本应聚焦。  

---

**注**：以上数据基于 GitHub 最近24小时动态，长期问题（如Issue #3405的私密报告需求）需持续跟踪。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 —— 2026-10-14

---

## 1. 今日速览

NanoClaw 项目在过去24小时内活跃度中等偏低，共处理了1条Issue（已关闭）和3条PR（2待合并，1已合并）。本日未发布新版本，但社区持续推进功能优化与稳定性修复。特别值得关注的是关于代理循环限制、Apple容器支持以及更新通道选择等多个方向的开发活动，反映出项目正着重于提升用户体验与系统稳定性。

- **活动等级**：一般  
- **Issue 更新数**：+1（关闭）  
- **PR 更新数**：+3（2待合并 / 1合并）  
- **新版本发布**：0  

---

## 2. 版本发布

暂无新版本发布。

---

## 3. 项目进展

### ✅ 已合并 PR

#### 🔧 `#3918` - fix(agent-runner): never lose or repeat a reply around `send_message`

- **类型**：Bug 修复  
- **领域**：agent-runner / core / tools  
- **合并时间**：2026-10-13  
- **链接**：[https://github.com/nanocoai/nanoclaw/pull/3918](https://github.com/nanocoai/nanoclaw/pull/3918)

**说明**：  
该 PR 解决了在流式传输或结束时回复可能丢失或重复的问题。这是提升 Agent 运行稳定性的重要修复，有助于确保用户获得一致、准确的响应。

**项目推进**：  
增强了 Agent 的响应一致性和可靠性，是对核心运行逻辑的一次关键优化。

---

### ⏳ 待合并 PR

#### 🍎 `#3503` - feat(add-apple-container): run v2 agent sessions on Apple container instead of Docker (macOS)

- **类型**：Feature  
- **创建时间**：2026-08-24  
- **链接**：[https://github.com/nanocoai/nanoclaw/pull/3503](https://github.com/nanocoai/nanoclaw/pull/3503)

**摘要**：  
为 macOS 用户引入 `/add-apple-container` 技能，使得 Agent 会话可以使用 Apple 容器运行时替代 Docker，提升性能与兼容性。

**项目推进**：  
拓展了平台支持范围，增强了对 Apple 生态系统用户的关注度。

---

#### 🛠️ `#4084` - feat(setup): new installs choose their update channel

- **类型**：Feature  
- **创建时间**：2026-10-13  
- **链接**：[https://github.com/nanocoai/nanoclaw/pull/4084](https://github.com/nanocoai/nanoclaw/pull/4084)

**摘要**：  
安装流程将允许用户在初始设置时选择更新通道，避免当前默认安装 `main` 分支导致后续 `/update-nanoclaw` 执行失败的问题。

**项目推进**：  
解决了安装后的版本管理困难问题，提升了新用户的入门体验。

---

## 4. 社区热点

🔥 **最热议 Issue**：  
#### #30 [CLOSED] `fix: Add maxTurns limit to prevent agent loop runaway`  
- **作者**：randomm  
- **链接**：[https://github.com/nanocoai/nanoclaw/issues/30](https://github.com/nanocoai/nanoclaw/issues/30)

**讨论亮点**：  
该 Issue 描述了一个生产环境问题：Claude Agent SDK 的 `query()` 函数缺少 `maxTurns` 参数，导致无限循环生成重复消息（如21条重复消息在32秒内）。该问题引发了维护者与用户的讨论，最终通过添加最大轮次限制进行了关闭。

**社区反响**：  
获得1个点赞👍，共有3条评论，显示社区对此类防御性编程问题的关注度较高。

---

🔥 **最热议 PR**：  
#### #3503 - feat(add-apple-container)  
- **评论数**：undefined  
- **点赞数**：0  

虽然尚未获得评论或点赞，但其针对 macOS 用户的改进使其成为潜在热点。

---

## 5. Bug 与稳定性

| 严重等级 | 类型 | 描述 | 是否修复 | 链接 |
|---------|------|------|----------|------|
| 高 | Bug | Agent 可能因 `query()` 缺少 `maxTurns` 导致无限循环 | ✅ 已关闭 | [Issue #30](https://github.com/nanocoai/nanoclaw/issues/30) |
| 中 | Bug | Agent 回复在 `send_message` 周围丢失或重复 | ✅ 已修复 | [PR #3918](https://github.com/nanocoai/nanoclaw/pull/3918) |

---

## 6. 功能请求与路线图信号

#### 📌 新功能建议

- **Apple 容器支持** (`#3503`): 为 macOS 提供更轻量级的容器运行方式，有望成为下一版本的重要特性。
- **更新通道选择** (`#4084`): 简化部署与维护流程，有助于提升用户自主控制能力。

> 🧭 推荐纳入近期版本计划中。

---

## 7. 用户反馈摘要

从 Issue #30 中可见用户在使用过程中遇到如下问题：

- **痛点**：Agent 陷入无限循环，重复发送消息。
- **场景**：Fin 助手场景下提醒设置失败。
- **满意度**：用户对问题被识别并关闭感到满意，但期望更主动的监控机制。

> 💡 用户希望系统具备更强的自我保护机制，防止类似意外递归行为。

---

## 8. 待处理积压

| 类型 | 标题 | 创建日期 | 最后活跃 | 链接 |
|------|------|-----------|------------|------|
| PR | feat(add-apple-container) | 2026-08-24 | 2026-10-13 | [PR #3503](https://github.com/nanocoai/nanoclaw/pull/3503) |
| PR | feat(setup): new installs choose their update channel | 2026-10-13 | 2026-10-13 | [PR #4084](https://github.com/nanocoai/nanoclaw/pull/4084) |

> ⚠️ 长时间悬挂的 PR #3503 建议维护者尽快评审并决定是否合并。

---

📝 **汇编说明**：本日报依据 2026 年 10 月 14 日前 24 小时的 GitHub 数据整理，用于跟踪 NanoClaw 项目开发进度、社区互动与潜在风险。如需订阅每日更新，请关注项目仓库动态。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



好的，这是根据您提供的 GitHub 数据生成的 IronClaw 项目动态日报。

---

### **IronClaw 项目动态日报 - 2026-10-14**

#### **1. 今日速览**
IronClaw 项目在过去24小时内活跃度较低，主要由社区贡献驱动。记录了一条新的功能提案 Issue 和一条由 Dependabot 自动发起的依赖更新 PR。项目整体处于稳定维护期，暂无版本发布或严重问题报告。

#### **2. 版本发布**
*   **无新版本发布**。今日无相关数据。

#### **3. 项目进展**
今日无合并或关闭的重要 PR，项目核心功能暂无直接推进。

*   **待处理 PR**：`#8137 [dependencies, javascript] chore(deps): bump brace-expansion in /docs/internal/architecture-video`
    *   **作者**：dependabot[bot]
    *   **链接**：[nearai/ironclaw PR #8137](https://github.com/nearai/ironclaw/pull/8137)
    *   **说明**：此 PR 由自动化工具 Dependabot 创建，旨在将文档内部架构视频部分使用的 `brace-expansion` 依赖从 1.1.18 更新至 1.1.21。此类更新对于维护项目整体安全性和稳定性至关重要，通常应被优先合并。

#### **4. 社区热点**
今日唯一的 Issue 成为社区讨论的潜在热点。

*   **热点 Issue**：`#8136 [OPEN] Proposal: optional hosted-MCP Plazmi extension using declarative auth and egress`
    *   **作者**：cairn-agent
    *   **链接**：[nearai/ironclaw Issue #8136](https://github.com/nearai/ironclaw/issues/8136)
    *   **分析**：该提案旨在利用 IronClaw 已有的“Reborn extension” declarative 接口，为可选的 [Plazmi](https://plazmi.gg) 服务创建一个配套扩展，而不是直接在宿主逻辑中添加供应商特定代码。这反映了社区对**保持核心平台中立性、通过标准化插件集成第三方服务**的强烈诉求。如果该提案获得认可并实现，将显著增强 IronClaw 的扩展生态。

#### **5. Bug 与稳定性**
今日无 Bug 或稳定性问题报告。

#### **6. 功能请求与路线图信号**
*   **新功能请求**：Issue `#8136` 提出了一个明确的功能方向——构建一个可选的、基于 declarative 接口的 Plazmi 扩展。
*   **路线图信号**：结合该 Issue 和项目现有的扩展系统，可以判断“丰富官方或社区认证的扩展生态”是项目发展的一个重要方向。未来版本可能会看到更多类似的、利用标准化接口的扩展集成。

#### **7. 用户反馈摘要**
*   **正面反馈/诉求**：Issue `#8136` 的作者 `cairn-agent` 明确肯定了项目现有的“Reborn extension guidance”设计，并希望基于此进行开发。这表明现有架构获得了社区成员的认可，为其进一步推广奠定了基础。
*   **使用场景**：用户希望将 IronClaw 作为一个平台，通过插件形式集成 Plazmi 的托管 MCP 功能，涉及 API 密钥认证和网络出口等企业级需求。

#### **8. 待处理积压**
目前数据中未发现长期未响应的重要 Issue 或 PR。但建议维护者关注新开启的 `#8136`，因为一个高质量的社区功能提案是吸引贡献者和提升项目影响力的良好契机。

---
**报告生成说明**：本报告基于提供的有限 GitHub 数据生成，如需更全面的分析，建议扩大数据范围（如更长的时间跨度、更多的 Issue/PR）。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



根据您提供的 GitHub 数据，以下是 **LobsterAI** 在 **2026-10-14** 的项目动态日报。

---

# 📊 LobsterAI 项目动态日报 (2026-10-14)

## 1. 今日速览
今日 LobsterAI 项目保持了极高的开发活跃度，整体处于**高强度功能迭代与关键稳定性修复并存**的状态。
*   **开发主线清晰**：项目正全力推进“Desktop Companion（桌面伴侣）”功能的整合，并同步优化多 provider 模型目录、专家广场（Expert Plaza）以及桌面会话体验。
*   **安全警报拉响**：一个高危安全漏洞（API 导出密钥使用硬编码公开密码）被报告（`#2851`），若不及时修复，将对用户密钥安全构成严重威胁。
*   **自动化维护良好**：机器人（dependabot）批量提交了底层依赖（如 Electron, KaTeX, Mermaid 等）的版本更新，保障了技术栈的时效性。

## 2. 版本发布
*   **无新版本发布**：过去 24 小时内无新的 Release（ Releases 数量为 0）。当前开发版本仍在紧密集成中，预计桌面伴侣等大功能合并后将有新版本面世。

## 3. 项目进展（今日合并/关闭的重要 PR）
今日共有 **8 个 PR 成功合并或关闭**，项目在功能广度与深度上均向前迈进了一大步：

*   **核心功能落地**：
    *   **专家广场与首次运行交付物** (`#2849` [CLOSED])：构建了可配置的专家广场，支持用户发现特定任务 Agent 并一键唤起对话，同时重构了 Kits 目录结构，增强了生态扩展性。
    *   **桌面会话智能标题生成** (`#2846` [CLOSED])：优化了新建桌面会话的 UX，支持根据首条提问异步静默生成简短标题，失败不阻塞对话，提升了桌面端交互体验。
    *   **桌面伴侣功能矩阵** (`#2847`, `#2848` [CLOSED])：分别实现了“桌面伴侣作曲家（Composer）”和“打开方式（Open with）”支持，完善了桌面端的场景入口。
*   **稳定性与体验修复**：
    *   **修复 IM 后台累加器崩溃** (`#2850` [CLOSED])：解决了 `IMCoworkHandler.destroy()` 在清理后台交付累加器时可能抛出异常的问题（修复了 Issue #926），提升了后台运行稳定性。
    *   **解决系统提示词重复注入** (`#2812` [CLOSED])：阻止了 OpenClaw 会话首次消息中重复注入 `AGENTS.md` 指令，避免了系统提示词冗余，节省了 Token 消耗并减少 LLM 干扰。
*   **依赖与组件升级**：
    *   **Mermaid 图表库升级** (`#2672` [CLOSED])：从 10.9.8 升级至 12.1.0，增强了图表渲染能力与兼容性。
    *   **Node 安全扫描组件升级** (`#2459` [CLOSED])：`@nodesecure/js-x-ray` 升级至 16.0.0，强化了依赖包安全分析能力。

## 4. 社区热点
今日最瞩目的焦点为安全漏洞报告：
*   **【安全事件】Provider API 导出功能使用公开硬编码密码** (`#2851` [OPEN])
    *   **链接**：[netease-youdao/LobsterAI Issue #2851](https://github.com/netease-youdao/LobsterAI/issues/2851)
    *   **分析**：该 Issue 指出“导出 Providers”功能虽然使用了 AES-GCM 加密和 PBKDF2 密钥派生，但其加密密码为**硬编码的公开常量**。任何拿到导出文件的用户都可以 trivially（轻而易举地）解密出 API Key。这表明项目的加密实现流于形式，存在严重的安全隐患。社区对安全问题的关注度极高，维护者需优先响应。

## 5. Bug 与稳定性
今日报告并追踪了以下 Bug，按严重程度排列：

| 严重程度 | Bug/Issue 标题 | 状态 | 是否有 Fix PR | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **严重 (Security)** | Provider API Key Exports Use a Public Hardcoded Password, Allowing Trivial Decryption by Anyone With the Export File (`#2851`) | **OPEN** | **暂无** | [Issue #2851](https://github.com/netease-youdao/LobsterAI/issues/2851) |
| **中等 (Crash)** | `IMCoworkHandler.destroy()` 在清理后台累加器时抛出异常 (Fixes #926) | **CLOSED** | **已修复** (`#2850`) | [PR #2850](https://github.com/netease-youdao/LobsterAI/pull/2850) |
| **轻微 (Logic)** | 

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



根据您提供的 Moltis 项目 GitHub 数据，以下是为您生成的 **2026-10-14 项目动态日报**：

---

# Moltis 项目动态日报 (2026-10-14)

## 1. 今日速览
今日 Moltis 项目整体处于**活跃的架构优化与功能开发阶段**，但社区互动（如 Issue 和 PR 评论）处于相对低谷（无新增评论与点赞）。项目核心开发人员 ManuRakh 提交了两项关键的 PR（#1301 和 #1302），重点解决多智能体协作中的一致性与安全权限控制问题。虽然今日无新版本发布或 PR 合并，但这些待合并的 PR 预示着项目正朝着更企业级、更安全的多 Agent 协调方向演进。

## 2. 版本发布
*   **新版本发布**：无。
*   目前无可用的 Release 版本，因此暂无更新内容、破坏性变更或迁移注意事项需要说明。

## 3. 项目进展
过去 24 小时内无合并或关闭的 PR，但有 **2 个高价值的特性 PR 处于待合并（OPEN）状态**，由核心贡献者 ManuRakh 主导开发：
*   **PR #1301：Chat ↔ sub-agent parity (对话与子 Agent 行为对齐)**
    *   **核心内容**：解决了当前预设字段（如 persona、system_prompt_suffix、delegate_only、preset model）仅作用于 `spawn_agent` 子运行，而不影响直接聊天（Direct Chat）的分歧。此 PR 对齐了两条路径，确保协调器/工作器（coordinator/worker） setups 中 agent 行为的一致性。
    *   **链接**：[moltis-org/moltis PR #1301](https://github.com/moltis-org/moltis/pull/1301)
*   **PR #1302：Preset spawn.allow (预设生成白名单限制)**
    *   **核心内容**：引入了可选的 `agents.presets.<id>.spawn.allow` 配置，允许调用者限制 `spawn_agent` 仅能指向特定的预设列表（如 org-chart / coordinator graphs）。安全控制在 `resolve_preset` 中、provider 工作之前执行，并在工具 schema 中进行约束。
    *   **链接**：[moltis-org/moltis PR #1302](https://github.com/moltis-org/moltis/pull/1302)

**整体进程评估**：项目正处于多 Agent 编排引擎的“精细化打磨期”，从单纯的“能跑”向“安全、一致、可控”的工业级框架迈进。

## 4. 社区热点
今日无新开启或活跃的 Issues，社区讨论度较低。目前社区和开发者关注的焦点完全集中在上述两个 PR：
*   **PR #1301 (Chat ↔ sub-agent parity)**：关注多 Agent 协同场景下，主控 Agent 与子 Agent 交互时的“行为漂移”问题。
*   **PR #1302 (Preset spawn.allow)**：关注多层级组织架构（如 Org-chart）中的越权控制和安全隔离。
*   虽然目前这两个 PR 的评论数（Comments）和点赞数（👍）均为 0/undefined，但它们代表了 Moltis 在 AI Agent 治理（Governance）和行为一致性上的核心研发方向。

## 5. Bug 与稳定性
*   **今日报告的 Bug**：无（过去 24 小时无新开 Issue，无已关闭 Issue）。
*   **潜在稳定性收益**：PR #1301 的推进有望修复因“直接对话”与“子 Agent 调用”配置不一致导致的线上行为回归（Regression）问题，提升多 Agent 协作的稳定性和可预测性。

## 6. 功能请求与路线图信号
结合当前的 PR 状态，项目路线图释放了以下强烈信号：
*   **多 Agent 对话一致性（Chat Parity）**：下一版本将重点解决直接对话与子 Agent 委托之间的配置割裂，统一 `persona` 和 `system_prompt_suffix` 的加载逻辑。
*   **细粒度的 Agent 生成控制（Spawn Allowlist）**：引入白名单机制表明项目正积极构建生产级的 Agent 权限体系，未来可能会有更丰富的 spawn 控制策略（如角色 RBAC 控制）。
*   **建议**：这两项 PR（#1301, #1302）功能互补且高度相关，建议维护者优先审查并合并，以形成完整的“安全、一致的多 Agent 协同”版本。

## 7. 用户反馈摘要
*   **数据情况**：今日无新增 Issue 评论，无直接的用户反馈文本。
*   **痛点推导**：从 PR #1301 的描述（"This makes coordinator/worker setups and 'talk to the agent as itself' diverge"）可以提炼出核心用户痛点：开发者在构建复杂的 coordinator/worker 架构时，深感直接测试 Agent 与实际被委派运行的 Agent 行为不一致，增加了调试成本和逻辑复杂度。

## 8. 待处理积压 (Backlog)
*   目前无长期未响应的历史 Issue 数据。
*   **重点关注**：PR **#1301** 和 **#1302** 均创建于 2026-10-12，并于 2026-10-13 更新，目前处于 OPEN 状态。由于它们对项目架构影响较大，建议维护者尽快进行代码审查（Code Review）和集成测试，以防分支漂移导致合并冲突。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报 – 2026‑10‑14**  

---  

### 1️⃣ 今日速览  
- 过去 24 小时 **Issue** 数量 25（全部新开/活跃），**PR** 数量 50（44 待合并、6 已合并/关闭），显示出持续的功能迭代与 bug 修复活跃度。  
- 当前 **无** 新版本发布，所有变更均通过代码 PR 完成。  
- 关键 bug（如 SQLite `created_at` 重写、OpenRouter 费用为 0）仍在 **P1/P2** 级别上存在，迫切需要审查与修复。  
- 整体项目健康度保持 **中等偏上**：代码提交频繁、审查活跃，但高风险缺陷仍未落地。  

---  

### 2️⃣ 版本发布  
- **无** 新版本发布（`New Release` 为空）。  

---  

### 3️⃣ 项目进展 – 今日合并/关闭的重要 PR  

| PR | 状态 | 主要贡献 | 链接 |
|----|------|----------|------|
| #9453 | **CLOSED** | 修正运行时上下文使用估算，使本地 OpenAI‑compatible 提供商能正确统计 token 使用量。 | <https://github.com/zeroclaw-labs/zeroclaw/pull/9453> |
| #11419 | **CLOSED** | 将 secret key/value map 设为可编辑（在 zerocode 与 Dashboard 中），提升配置管理的灵活性。 | <https://github.com/zeroclaw-labs/zeroclaw/pull/11419> |
| #11261 | **CLOSED** | 通过分层 admission 实现插件的“replace‑install”，消除半写入状态，提升升级安全性。 | <https://github.com/zeroclaw-labs/zeroclaw/pull/11261> |
| #11262 | **CLOSED** | 为 `zeroclaw plugin update` 加入验证的替换机制，确保更新后可回滚至旧版本。 | <https://github.com/zeroclaw-labs/zeroclaw/pull/11262> |
| #11347 | **CLOSED** | 在发行包中加入 **WASM plugin host**，扩展插件生态的可部署性。 | <https://github.com/zeroclaw-labs/zeroclaw/pull/11347> |
| #11708 | **CLOSED** (bug) | 修复 `model_routing_config` 的 `upsert_agent` 操作漏掉必要字段，恢复工具 schema 完整性。 | <https://github.com/zeroclaw-labs/zeroclaw/pull/11708> |

> **进度概览**：今日共完成 **6** 起关键 PR（含安全、配置、插件管理、WASM 支持），推动了 **runtime 稳定性**、**插件生态** 与 **配置可编辑性** 三大方向的前进。  

---  

### 4️⃣ 社区热点 – 最活跃的 Issue / PR  

| 编号 | 标题（简要） | 评论数 | 关注度 | 主要诉求 |
|------|--------------|--------|--------|----------|
| **#11420** | SQLite session backend 重写 `created_at` 丢失 per‑message 时间戳 | 8 | ⭐⭐⭐⭐ | 批量替换导致所有行时间戳相同，影响日志、审计与时序分析。 |
| **#7432** | Runtime & gateway delivery – Phase 2/3 跟踪 (v0.8.6 / v0.9.0) | 6 | ⭐⭐⭐⭐ | 需要完成剩余 Phase 2/3 工作，明确交付路线图与风险。 |
| **#11204** | OpenRouter 费用显示 $0.00、所有 token 归为 “free tok” | 5 | ⭐⭐⭐⭐ | `usage.cost` 未被正确 ingestion，导致 Dashboard 成本报告失真。 |
| **#10573** | Bind gateway pairing tokens to roster users (scoped remote principals) | 5 | ⭐⭐⭐⭐ | 实现 token ↔️ user 绑定，提升多租户安全与访问控制。 |
| **#11613** | Cost ledger 丢弃 provider `total_tokens`，隐藏 reasoning token 计数不足 | 4 | ⭐⭐⭐ | 计费系统对 reasoning token 的忽略导致 under‑count。 |

> **分析**：以上 Issue 集中在 **数据准确性（时间戳、费用、token 计数）** 与 **安全/访问控制** 两大痛点。大量评论表明社区对 **数据一致性** 与 **可预测的计费** 高度敏感，后续改进应优先保证 **单次写入不影响历史记录**，并确保 **费用报告与实际使用完全对应**。  

---  

### 5️⃣ Bug 与稳定性 – 今日报告的问题（按严重程度排序）  

| 编号 | 标题 | 严重程度 (S‑level) | 影响范围 | 是否已有 fix PR |
|------|------|-------------------|----------|-----------------|
| **#11420** | SQLite session backend 重写 `created_at` 丢失 per‑message 时间戳 | **S2** (degraded) | 数据准确性、审计 | ❌ 无专门 fix PR（相关 PR #11675 只部分覆盖） |
| **#11204** | OpenRouter 费用显示 $0.00、所有 token 归为 “free tok” | **S2** | 费用报告、用户感知 | ❌ 无 fix PR |
| **#10950** | `cost.warn_at_percent` 警告被忽略 | **S2** | 预算警示失效 | ❌ 无 fix PR |
| **#10777** | `thinking/effort` 配置在连续 turn 之间翻转，导致缓存历史被重写 | **S2** | 缓存一致性、性能 | ❌ 无 fix PR |
| **#11654** | JPEG admission 先 copy 与解析 header，再检查 decode‑memory cap | **S3** | 资源使用、潜在 OOM | ❌ 无 fix PR |
| **#11675** | ACP session store 在 transcript 替换时重新戳 `created_at`，导致历史时间戳错误 | **S3** | 会话审计、时序追溯 | ❌ 无 fix PR |
| **#11694** | Cost tab 混淆 UTC 与本地日 totals，缺乏明确标签 | **S3** | UI 可读性、数据解读 | ❌ 无 fix PR |
| **#11696** | 系统 prompt 每次 turn 从磁盘重读，导致 personality‑file 编辑瞬间失效 | **S2** | 缓存命中率、响应延迟 | ❌ 无 fix PR |
| **#11704** | channel 与 agent::run 系统 prompt 包含日期，午夜后 cache 被失效 | **S3** | 成本（一次全量前缀） | ❌ 无 fix PR |
| **#11711** | 长会话 trim 永久删除旧 turn，导致上下文信息丢失 | **S2** | 对话上下文完整性 | ❌ 无 fix PR |
| **#11710** | 截断工作区文件仍被提示读取，但 header 禁止读取 | **S3** | 误导性行为 | ❌ 无 fix PR |
| **#11709** | 升级后的 WebSocket 仍保持旧实例的连接，导致 outlive 状态 | **S2** | 服务可靠性 | ❌ 无 fix PR |
| **#11706** | `max_image_turns` 导致 vision provider 长时间保持 pinned 状态 | **S2** | 多模态资源占用 | ❌ 无 fix PR |

> **结论**：当前 **P1** 级别的关键 bug（#11420、#11204）仍未得到正式修复，建议在本周内审查相关 PR（如 #11675、#11463）是否能够覆盖或需额外补丁。  

---  

### 6️⃣ 功能请求与路线图信号  

| Issue | 需求概述 | 与现有 PR 的关联 |
|-------|----------|-----------------|
| **#10573** – 绑定 gateway pairing tokens 到 roster users | 实现 token ↔️ user 的绑定，提升多租户安全。 | 与 **#11573**（drag‑to‑arrange session）和 **#11725**（mid‑turn steering）共享 **session 管理** 代码路径，可能在下一版（v0.9.0）中一起实现。 |
| **#11207** – 文档 bounded Tsubasa custom‑provider | 需要在官方自定义 Provider 指南中加入简明示例。 | 与 **#11347**（WASM plugin host）及 **#11261/11262**（插件 staged admission）同属 **插件生态** 扩展，预计在 **v0.8.6** 后续迭代中纳入文档。 |
| **#11705** – Plazmi 示例（per‑agent MCP 与 bounded catch‑up） | 提供真实游戏世界的 MCP 使用案例，展示细粒度授权。 | 与 **#11726**（tailscale tunnel）以及 **#11656**（Firejail sandbox）共享 **安全/网络** 实现思路，可作为 **v0.9.0** 里 “MCP 与安全” 子路线图的示例。 |
| **#11724** – 让 per‑pane 会话上限可配置 | 将硬编码的 `MAX_TRACKED_SESSIONS_PER_PANE: 8` 改为可配置项。 | 与 **#11573**（session UI 拖拽）直接相关，已在 **#11725**（deliver steering mid‑turn）中暗示 UI 可配置性提升。 |
| **#11708** – `model_routing_config` 缺少 action‑specific arguments | 修复 `upsert_scenario` 调用时缺失字段导致 schema 错误。 | 已在 **#11708**（已关闭）中解决，表明此类 **schema 完整性** 已被纳入路线图。 |

> **路线图信号**：本周的 **P2/P3** 问题（如 token 计数、费用报告、session 上限配置）与已合并的 **安全/插件** PR 表明 **功能与稳定性同步推进**，预计 **v0.9.0** 将包含 **runtime Phase 3**、**插件生态成熟** 与 **费用精准** 三大提升。  

---  

### 7️⃣ 用户反馈摘要  

- **数据一致性痛点**：多位用户反映 **SQLite `created_at` 统一更新** 导致历史记录失真（#11420），以及 **OpenRouter 费用为 0**、**token 归为 free** 的计费错误（#11204、#11613）。  
- **缓存失效**：系统 prompt、channel 日期、mid‑turn steering 导致 **prompt cache 频繁失效**，影响响应速度与成本（#11696、#11704、#11725）。  
- **安全/访问控制**：用户希望 **token 与 roster 用户绑定**（#10573）以及 **更细粒度的 MCP 权限**（#11705），显示出对 **多租户** 与 **细粒度授权** 的强烈需求。  
- **UI/体验**：Cost tab 混淆 UTC/本地日、Telegram edited_message 被忽略、Telegram 长会话 trim 永久删除历史等 UI/交互问题导致 **使用体验不佳**。  

---  

### 8️⃣ 待处理积压（长期未响应）  

| 编号 | 标题 | 最近更新 | 评论数 | 备注 |
|------|------|-----------|--------|------|
| **#7432** | Runtime & gateway delivery – Phase 2/3 跟踪 | 2026‑10‑14 | 6 | 自 2026‑06‑09 起长期未进展，涉及重大功能交付，需维护者明确路线图。 |
| **#10573** | Bind gateway pairing tokens to roster users | 2026‑10‑13 | 5 | 虽为 “accepted” 状态，但实现仍未落地，建议检查是否已分配到相应里程碑。 |
| **#11204** | OpenRouter 费用为 0、所有 token 为 free | 2026‑10‑13 | 5 | 高风险（p1），需快速定位并修复 ingestion 流程。 |
| **#11613** | Cost ledger 丢弃 provider `total_tokens` | 2026‑10‑13 | 4 | 影响计费准确性，建议审查 ledger 解析逻辑。 |
| **#11179** | Flaky test `pending_park_retry_respects_pending_pool_cap` | 2026‑10‑13 | 1 | CI 失稳，建议复现并修复测试逻辑。 |
| **#10261** | 让 filesystem dispatch‑loop 交付负载更可靠 | 2026‑10‑13 | 1 | 与 #11708、#11673 相关，长期积压的性能改进。 |
| **#11709** | 升级后的 WebSocket 仍保持旧实例的连接 | 2026‑10‑13 | 0 | 可能导致旧实例资源泄漏，需审查 WebSocket 管理流程。 |
| **#11710** | 截断工作区文件仍被提示读取，但 header 禁止 | 2026‑10‑13 | 0 | 逻辑冲突，影响开发者预期。 |
| **#11711** | 长会话 trim 永久删除旧 turn | 2026‑10‑13 | 0 | 影响上下文完整性，需确认是否为故意行为或 bug。 |

> **提醒**：维护者应优先关注 **#7432**、**#11204**、**#11613** 等高风险 Issue，尽快评审或闭合，以免积压导致后续功能冲刺受阻。  

---  

**总结**：2026‑10‑14 为 ZeroClaw 项目提供了 **稳定的代码提交节奏** 与 **多元化的社区反馈**。虽然本日无版本发布，但关键 **bug**（尤其是 SQLite 时间戳与 OpenRouter 费用）仍在高优先级待办列表中，配合已合并的 **安全、插件、配置** PR，项目整体向 **更高可靠性与可维护性** 方向稳步前进。后续工作应聚焦于 **数据一致性**、**费用准确性** 与 **细粒度安全/访问控制** 的闭环修复，并在下一版本（v0.9.0）中实现 **session 上限配置**、**MCP 示例** 与 **WASM 插件生态** 的完整交付。

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*