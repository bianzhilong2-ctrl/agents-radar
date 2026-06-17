# OpenClaw 生态日报 2026-06-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-17 02:47 UTC

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

# OpenClaw 项目日报 | 2026-06-17

---

## 1. 今日速览

OpenClaw 今日呈现**高并发维护态势**：单日 500 条 Issue 更新、500 条 PR 活动，新版本 `v2026.6.8` 同步发布。核心矛盾集中在**会话/上下文状态管理**（`impact:session-state` 占比极高）、**消息丢失风险**（`impact:message-loss` 反复出现）、**多渠道交付可靠性**及**安全/认证边界**四大领域。社区讨论深度高（Top Issue 评论 109 条），但 PR 评论稀疏（多数为 0），暗示**审查吞吐成为瓶颈**。项目整体处于“快速迭代伴随技术债显性化”阶段，需警惕 P0 级回归（如 #91016 DeepSeek Prompt Cache 失效导致成本暴涨）。

---

## 2. 版本发布

### **v2026.6.8** (2026-06-08 发布，今日仍为最新)
| 维度 | 详情 |
|------|------|
| **核心亮点** | • **Telegram**：支持结构化渲染（表格、列表、可折叠引用块、保留换行）、CLI 回复回调<br>• **WhatsApp**：遵守配置的 ACP 绑定，交付更稳定 |
| **关联 PR** | #92679, #931...（完整列表见 Release Notes） |
| **破坏性变更** | 未在摘要中标注；建议升级前跑全量集成测试，重点验证 Telegram/WA 渲染与回调链路 |
| **迁移提示** | 无需数据库迁移；配置项若含 `telegram.render` 或 `whatsapp.acp` 需核对默认值变更 |

> 🔗 [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8)

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 标题 | 影响域 | 状态 | 说明 |
|----|------|--------|------|------|
| #93821 | `fix(qmd): strip mcporter daemon startup logs from stdout before JSON.parse` | `extensions: memory-core` | **OPEN** (新建) | 修复首次启动 mcporter 时 stdout 混入日志导致 JSON.parse 失败（#59808） |
| #93871 | `fix(cron+subagent): add task-completion-routes registry for announce fallback` | `scripts, agents` | **OPEN** (新建) | 解决隔离 cron/子代理完成公告丢失 `delivery.channel` 问题（#92460, #92076） |
| #93853 | `fix(agents): route memory embedding through generic resolution when provider has custom baseUrl` | `agents` | **OPEN** (新建) | 修复自定义 baseUrl 的 openai provider 走错 embedding 适配器 |
| #93864 / #93872 | Ollama `/think` 菜单动态发现模型思维等级显示修复 | `extensions: ollama` | **OPEN** (新建) | 解决定时发现模型仅显示 "default, off" 问题（#93835） |
| #93850 | `fix(feishu): accept encrypted URL verification challenges without signature header` | `channel: feishu` | **OPEN** (新建) | 解飞书加密验证死锁，解锁 webhook 模式配置 |
| #93840 | `fix: respect NO_PROXY in web_fetch useTrustedEnvProxy mode` | `scripts` | **OPEN** (新建) | `web_fetch` 现正确遵守 `NO_PROXY` 环境变量（#93807） |
| #65359 | `fix(config): allow historyLimit: 0 in GroupChatSchema` | `gateway` | **OPEN** (维护者待审) | 允许群聊历史限制设为 0（关闭历史），与其它 schema 对齐（#65305） |
| #64782 | `fix(gateway): restore codex-cli chat history imports` | `gateway, agents` | **OPEN** (维护者待审) | 补全 Codex CLI 历史导入，避免刷新后历史为空 |
| #71400 | `feat(sessions): add adaptive reset mode with daily AND idle semantics` | `app: web-ui, gateway, agents...` | **OPEN** (维护者待审) | 新增“每日+空闲”双重语义会话重置模式，避免活跃对话被每日边界强制重置 |
| #68936 | `Autofix: add PR review autofix pipeline + Windows daemon` | `scripts` | **CLOSED** | 引入自动修复流水线与 Windows 守护进程，工程效能提升 |

> **整体进度判断**：今日新开 10+ 修复型 PR，覆盖渠道、调度、嵌入、代理、配置等核心路径；但**合并数（97）远低于待合并（403）**，积压加剧。建议维护者本周设立“PR 清理冲刺日”。

---

## 4. 社区热点（高讨论度 Issue/PR 分析）

| # | 标题 | 评论 | 👍 | 核心诉求 | 分诉求分类 |
|---|------|------|----|----------|------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps 缺失 | 109 | 79 | **平台完整性**：要求补齐 Linux/Win 原生 App，功能对齐 macOS |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | 核心会话/转录 SQLite 迁移追踪（P0） | 30 | 1 | **架构重构**：拆分大规模迁移为可审查小 PR，降低风险 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失——无重试/通知/自动重启 | 19 | 1 | **可靠性**：子代理交付链路多点故障（E31/E42/E45 错误码） |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon `stop()` 竞态导致孤儿进程/发送失败 | 17 | 0 | **稳定性**：SIGUSR1 重启时未等待旧进程退出，端口/锁冲突 |
| [#91016](https://github.com/openclaw/openclaw/issues/91016) | ⚠️ 升级 2026.6.1 后 DeepSeek Prompt Cache 失效，1h 烧 $6 | 6 | 6 | **成本回归**：Prompt Cache 完全失效，疑似 2026.6.1 引入破坏性变更 |

**趋势洞察**：
- **Top 5 Issue 全为 P0/P1**，且均涉及“状态一致性/消息交付/成本控制”核心链路
- 用户对 **Linux/Win 原生客户端（#75）**、**子代理可靠性（#44925, #67777）**、**会话迁移安全性（#88838）** 三大痛点呼声最高
- #91016 虽评论少但 👍 高，属**高影响面回归**，需立即复现并回滚/热修复

---

## 5. Bug 与稳定性（按严重程度）

| 严重级 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 回归/成本** | [#91016](https://github.com/openclaw/openclaw/issues/91016) | DeepSeek V4 Flash Prompt Cache 失效，小时级成本 $6 | 无 | 🔴 **急需分流** |
| **P0 数据/状态** | [#88838](https://github.com/openclaw/openclaw/issues/88838) | 会话/转录 SQLite 迁移大规模重写风险 | 无（规划中） | 🟡 设计阶段 |
| **P1 消息丢失** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失（多错误码） | [#93871](https://github.com/openclaw/openclaw/pull/93871) (新建) | 🟢 有 PR |
| **P1 竞态/崩溃** | [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon 重启竞态 → 孤儿进程/发送失败 | 无 | 🔴 无 PR |
| **P1 上下文混乱** | [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent 回复上一条消息（会话上下文错位） | **CLOSED** | ✅ 已关闭 |
| **P1 编码 Agent 失效** | [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent 仅输出模糊状态，不再产出代码 | 无 | 🔴 无 PR |
| **P1 内存泄漏** | [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway 4 天 389MB → 14.7GB | 无 | 🔴 无 PR |
| **P2 渲染/依赖** | [#73148](https://github.com/openclaw/openclaw/issues/73148) | `sharp` 缺失时 `image` 工具报模糊错误 | 无 | 🟡 无 PR |
| **P2 配置回归** | [#59330](https://github.com/openclaw/openclaw/issues/59330) | Control UI Raw mode 永久禁用（2026.3.31 起） | 无 | 🟡 无 PR |
| **P2 Cron 清理误删** | [#50248](https://github.com/openclaw/openclaw/issues/50248) | `cleanup --fix-missing` 误删有效 cron 会话 | 无 | 🟡 无 PR |

> **关键观察**：P0/P1 级 Bug 中**仅 #44925 有对应 PR（#93871）**，其余均处于“报告-讨论”阶段，修复滞后风险高。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 已有 PR/实现迹象 | 入版概率 |
|------|-------|----------|------------------|----------|
| **Linux/Windows 原生 App** | [#75](https://github.com/openclaw/openclaw/issues/75) | 👍 79, 109 评论 | 无 | ⭐⭐⭐⭐⭐ (长期战略) |
| **子代理完成交付兜底机制** | [#44925](https://github.com/openclaw/openclaw/issues/44925) / [#67777](https://github.com/openclaw/openclaw/issues/67777) | 19/10 评论 | [#93871](https://github.com/openclaw/openclaw/pull/93871) | ⭐⭐⭐⭐⭐ (已有 PR) |
| **MCP 工具调用通道级审批** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | 13 评论 | 无 | ⭐⭐⭐ (安全合规刚需) |
| **可配置流式看门狗超时** | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 👍 8, 14 评论 | 无 | ⭐⭐⭐ (推理模型适配) |
| **私有网络 `web_fetch` 访问开关** | [#39604](https://github.com/openclaw/openclaw/issues/39604) | 👍 9, 13 评论 | [#93840](https://github.com/openclaw/openclaw/pull/93840) (相关) | ⭐⭐⭐⭐ |
| **Agent 级 Memory Wiki 隔离** | [#63829](https://github.com/openclaw/openclaw/issues/63829) | 👍 9, 9 评论 | 无 | ⭐⭐⭐ (多 Agent 架构) |
| **敏感数据脱敏（配置/日志/UI）** | [#64046](https://github.com/openclaw/openclaw/issues/64046) | 8 评论 | 无 | ⭐⭐⭐⭐ (企业级门槛) |
| **适配 Anthropic Advisor Tool** | [#63930](https://github.com/openclaw/openclaw/issues/63930) | 6 评论 | [#64064](https://github.com/openclaw/openclaw/pull/64064) | ⭐⭐⭐⭐ (已有 PR) |
| **会话自适应重置（每日+空闲）** | — | — | [#71400](https://github.com/openclaw/openclaw/pull/71400) | ⭐⭐⭐⭐ (PR 待审) |

**下版本（v2026.6.x 后续小版本）大概率纳入**：#93871、#93840、#64064、#71400、#93821、#9385

---

## 横向生态对比

**个人 AI 助手 / 自主智能体开源生态 2026‑06‑17 横向对比分析报告**  
（基于 OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw 的日度快照）

---

## 1. 生态全景  
- 2026 年上半年，个人 AI 助手与自治智能体生态进入 *高速迭代‑技术债显化* 阶段，核心框架（OpenClaw、CoPaw）持续发布新功能，而大量衍生项目（NanoBot、Moltis、ZeroClaw 等）聚焦 **渠道适配、运行时稳定性和安全合规**。  
- 社区整体活跃度高（> 400 issues、> 1 k PRs/天），但 **审稿吞吐率低** 是普遍瓶颈，导致 P0/P1 回归风险频出。  
- 多渠道（Telegram、WhatsApp、Feishu、Signal、WeCom、Slack）和 **插件化 / 多模型** 兼容性已成为竞争焦点；与此同时 **会话状态一致性、成本控制、跨平台部署** 成为共性痛点。

---

## 2. 各项目活跃度对比  

| 项目 | 今日 **Issues**（新/活跃/关闭） | 今日 **PR**（打开/合并） | 本日 **Release**（有/无） | **健康度**<br>（0‑5）* | 备注 |
|------|----------------------------------|---------------------------|---------------------------|------------------------|------|
| **OpenClaw** | 500 / ≈ 380 / ≈ 120 | 403 / 97 | ✅ v2026.6.8 (8 日前) | 3.2 | 高并发，PR 堆积严重，P0 回归（#91016） |
| **NanoBot** | 9 / 6 / 3 | 24 / 14 | – | 4.0 | PR/Issue 比例健康，热修复快 |
| **Hermes Agent** | 50 / ≈ 45 / 4 | 50 / ≈ 42 | – | 3.5 | 多语言、MCP + Slack 增长，产出多但文档碎片化 |
| **PicoClaw** | 15 / ≈ 12 / 3 | 15 / 8 | ✅ nightly (不稳定) | 3.8 | 安全 bug 占比 70 % → 质量巩固中 |
| **NanoClaw** | 6 / ≈ 4 / 2 | 6 / 5 | – | 4.2 | 需求集中在模型安全、Slack，社区响应快 |
| **NullClaw** | 2 / 2 / 0 | 3 / 0 | – | 4.5 | 小体量、迭代缓慢但缺陷率低 |
| **LobsterAI** | 1 / 1 / 0 | 4 / 4 | – | 4.1 | UI 与任务调度优化，回归少 |
| **TinyClaw** | 0 / 0 / 0 | 1 / 0 | – | 4.6 | 极低活跃度，功能稳定 |
| **Moltis** | 4 / 2 / 2 | 2 / 0 | – | 3.9 | 实时语音回声消除为紧急阻塞 |
| **CoPaw** | 44 / 22 / 22 | 39 / 22 | ✅ v1.1.12‑beta.1 | 3.1 | 高并发、上下文压缩 freeze 为核心风险 |
| **ZeptoClaw** | 0 / 0 / 0 | 1 / 0 | – | 4.8 | 纯维护模式，依赖更新唯一活动 |
| **ZeroClaw** | 50 / 38 / 12 | 50 / 27 | – | 3.6 | 插件生态与 MCP 强化，P0/P1 回归多 |

*健康度评分基于 *issues‑to‑pr‑ratio、回归频率、发布频率* 综合评估（5 = 极佳，0 = 危机）。

---

## 3. OpenClaw 在生态中的定位  

| 维度 | OpenClaw | 主要竞争者（CoPaw、ZeroClaw、Hermes Agent） |
|------|----------|---------------------------------------------|
| **技术路线** | *插件化、统一会话状态层、跨渠道统一 API*（Telegram/WhatsApp/Feishu 首批正式渠道） | CoPaw：以 **本地桌面（Tauri）+ 多语言插件** 为核心； ZeroClaw：侧重 **WASM + MCP**，插件生命周期更细粒度； Hermes：重点在 **多语言 Runner + 云原生** |
| **优势** | 1️⃣ 最全的 **渠道渲染**（结构化表格/折叠等）<br>2️⃣ 成熟的 **gateway / agents** 框架和 **session‑reset** 语义<br>3️⃣ 社区规模最大（每日 500+ Issue/PR） | CoPaw：桌面体验和本地存储安全； ZeroClaw：插件生态（WASM）和多 DB 支持； Hermes：跨语言（Node/Go/Python）跑时 |
| **劣势** | - PR 审核瓶颈导致 **合并率 24 %**，技术债暴露<br>- 最近 P0 回归（DeepSeek Prompt Cache）导致成本激增 | CoPaw：上下文压缩 freeze 高危； ZeroClaw：MCP 集成不稳定； Hermes：文档与 CI 质量参差 |
| **社区规模** | 约 **2.3 k** 关注者，日活 Issue/PR 超 1 k | CoPaw 1.6 k，ZeroClaw 0.9 k，Hermes 1.1 k |
| **生态影响** | 处于 **“核心渠道层”**，其它项目（NanoBot、Moltis 等）常通过 OpenClaw 的 **gateway** 来对接渠道，实现 “一次开发，多渠道投放”。 |

---

## 4. 共同关注的技术方向  

| 技术需求 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **会话/上下文一致性 & 自动重置** | OpenClaw、CoPaw、ZeroClaw、Hermes | 多渠道、跨进程的会话状态漂移导致消息丢失（#44925、#5218），需求 *自适应 daily+idle reset*、超时看门狗。 |
| **成本/Prompt Cache 稳定** | OpenClaw、NanoBot、ZeroClaw | DeepSeek Prompt Cache 失效（#91016）引发 **成本飙升**，希望统一缓存失效检测与回滚机制。 |
| **渠道可靠性 & 重试/兜底** | OpenClaw、NanoBot、Moltis、ZeroClaw | 子代理完成丢失、Telegram/WhatsApp 渲染回调链路不稳（#93871、#44925），需求 *消息持久化 + 重试/补发*。 |
| **安全/敏感数据脱敏** | OpenClaw、CoPaw、ZeroClaw、PicoClaw | 配置/日志脱敏、文件系统 SSRF/ symlink race（#3081、#64046），需要 **统一审计 & 容器化沙箱**。 |
| **跨平台部署（Windows / Linux / macOS）** | OpenClaw、NanoClaw、TinyClaw、PicoClaw | Windows 原生 CLI 异常、Linux/Win 客户端缺失（#75、#281），诉求 **统一包装（Binary/Container）** 与 **依赖自检**。 |
| **插件/模型扩展生态** | ZeroClaw（WASM）、CoPaw（Headroom）、Moltis（外部 Agent） | 需要 **统一插件 SDK**、模型‑Adapter 抽象层，以降低定制成本。 |
| **流式/实时交互** | NanoBot、Moltis、CoPaw、Hermes | 流式 HTTP/LLM、实时语音回声消除、直播式 Agent，要求 **低延迟、可靠的流控**（#2404、#1129）。 |

---

## 5. 差异化定位分析  

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|-------------------|
| **OpenClaw** | 多渠道消息渲染 + 会话统一层 | 企业/运营团队、跨渠道营销 | Go 核心 + SQLite gateway + 插件 extensions（agents、cron） |
| **NanoBot** | 本地开发者工具链、Provider 优化 | 开发者/科研人员 | Node ‑> Python‑centric，强依赖 **provider** 抽象，容器化友好 |
| **Hermes Agent** | 多语言 Runner + MCP 协议 | 多语言团队、云原生部署 | Rust + Go + Python 插件，侧重 **MCP** 统一调度 |
| **PicoClaw** | 轻量 IoT/边缘节点 | 边缘设备、嵌入式开发者 | Go‑lite + minimal runtime，安全审计为首要目标 |
| **CoPaw** | 桌面+本地 AI 工作流（Tauri） | 个人生产力、创意工作者 | Rust + Tauri 前端，重点 **本地密钥管理** 与 **上下文压缩** |
| **ZeroClaw** | 插件化 WASM + 多 DB | 大企业、低代码平台 | WASM 插件运行时 + 多数据库抽象层，强调 **可编排** 与 **无服务器** |
| **Moltis** | 语音/实时对话引擎 | 语音交互产品、客服中心 | C++ + Rust + WebAssembly，聚焦 **音频 DSP** 与 **低延迟流** |
| **ZeptoClaw** | 基础容器化环境维护 | 维护者/CI/CD 团队 | Docker‑centric，几乎无业务代码，专注 **安全升级** |

---

## 6. 社区热度与成熟度分层  

| 级别 | 项目 | 特征 |
|------|------|------|
| **高速迭代** | OpenClaw、CoPaw、ZeroClaw | 大量 Issue/PR，功能频繁发布，技术债显现；需要 **审查加速**。 |
| **稳健增长** | NanoBot、Hermes Agent、Moltis | PR 合并率 > 50 %，回归少，主要在 **性能/安全** 细节优化。 |
| **质量巩固** | PicoClaw、NullClaw、ZeptoClaw | 发行频率低，Bug 重点在 **安全/依赖**，社区规模小但维护响应快。 |
| **低活跃** | TinyClaw | 极少提交，功能基本冻结，适合作为 **参考实现**。 |

---

## 7. 值得关注的趋势信号  

1. **统一会话状态层将成为生态标准**  
   - 多项目（OpenClaw、CoPaw、ZeroClaw）都在研发「自适应 reset」或「上下文压缩」机制，表明 **跨渠道、跨模型的会话一致性** 成为核心竞争点。对开发者意味着需要抽象统一的 *Session Service*，而不是每个渠道自行实现。

2. **成本感知的缓存治理**  
   - DeepSeek Prompt Cache 失效导致的 **成本爆炸**（#91016）让社区高度关注 **Prompt Cache 生命周期** 与 **费用监控**。未来框架可能内置 *成本预警 & 自动回滚*。

3. **插件生态向 WASM / 多语言统一抽象迁移**  
   - ZeroClaw (WASM)、Hermes Agent (MCP 多语言), CoPaw (Headroom) 正在探索 **语言无关的插件执行环境**。这为之后的 **一键 Marketplace** 打下基础。

4. **安全合规硬化成为硬性需求**  
   - 多项目（PicoClaw、OpenClaw、CoPaw）集中报告 **文件系统 SSRF、symlink race、日志脱敏**，预示 **供应链安全、审计日志标准化** 将在下一轮治理中被正式纳入框架层。

5. **实时语音/流式交互进入主流**  
   - Moltis、NanoBot、Hermes Agent 在 **低延迟流媒体**、**回声消除**、**流式 HTTP** 上的需求激增。对 SDK 设计来说，需要提供 **统一的 Stream‑Control API**（back‑pressure、token‑budget）而非仅 HTTP‑1.1。

6. **跨平台二进制交付需求上升**  
   - Windows‑CLI 兼容（TinyClaw）与 Linux/Win 原生客户端（OpenClaw #75）呼声强烈，显示 **“一键安装包 + 自动依赖检查”** 将决定企业采用率。

---

### 对技术决策者的关键建议  

| 关注点 | 行动建议 |
|--------|----------|
| **会话统一** | 评估 OpenClaw 或 CoPaw 的 Session Service；在新项目中实现 **统一 Session API**，避免后期迁移成本。 |
| **成本监控** | 在框架层加入 *Prompt Cache TTL + Cost‑Alert* 插件；优先采用已实现成本监控的 provider（如 NanoBot）。 |
| **插件平台** | 考虑使用 **WASM Runtime**（ZeroClaw）或 **MCP**（Hermes）作为通用插件入口，提升语言扩展能力。 |
| **安全审计** | 统一采用 **OSS‑BOM**、**SLSA** 级别的 CI，针对 #3081、#64046 等安全议题提前加固。 |
| **流式交互** | 选型时倾向支持 **token‑based流控** 的协议（OpenAI‑compatible Stream、#2404），并对音频回声消除实现 **AEC‑DSP**（Moltis 方向）。 |
| **跨平台交付** | 为产品提供 **Docker + Native Binary** 双渠道发行；参考 OpenClaw 与 TinyClaw 的 Windows‑CLI 修复方案。 |

--- 

**结论**：OpenClaw 仍是生态中最具渠道覆盖和社区规模的“核心网关”。然而，技术债和审查瓶颈正在放大。ZeroClaw 与 CoPaw 正在通过 WASM 与本地桌面插件打开新的 **可编排 + 本地化** 路径；Hermes Agent、Moltis 则把 **多语言运行时** 与 **实时语音** 推向前沿。整体趋势指向 **统一会话层 + 成本感知缓存 + 插件化跨语言生态**，这将是未来两年开源个人 AI 助手平台的核心竞争因素。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot 项目动态日报 - 2026-06-17

## 1. 今日速览

NanoBot 项目保持高投入状态，24小时内处理了24个PR（14个已合并）和9个Issues（6个已关闭），显示维护团队响应迅速。今日新增3个Open Issues涉及安装兼容性、workspace安全策略和记忆管理方面的问题。同时合并了大量provider层优化、MCP协议修复和文档改进PR，体现了对平台稳定性和开发者体验的持续投入。项目活跃度评级：高。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

### 今日已合并的关键PR：

- **[PR #4330](https://github.com/HKUDS/nanobot/pull/4330)** - WebUI 自动化管理视图：新增完整的自动化队列和详情页面，支持过滤、搜索、编辑运行状态等操作，为用户提供了可视化的自动化任务管理能力
- **[PR #4368](https://github.com/HKUDS/nanobot/pull/4369)**: macOS 外部Python环境安装优化 - 完善了PEP 668兼容的安装脚本，优先使用virtualenv/uv/pipx，显著提升了安装成功率
- **[PR #4363](https://github.com/HKUDS/nanobot/pull/4363)**: Provider流式超时配置验证 - 引入集中式超时解析函数，防止因环境变量格式错误导致的应用崩溃
- **[PR #4352](https://github.com/HKUDS/nanobot/pull/4352)**: Recent History摘要按token限制 - 将字符限制改为token计数，解决了中文/代码文本下token溢出风险

## 4. 社区热点

### 高度讨论的Issue/ PR：

- **[Issue #4360](https://github.com/HKUDS/nanobot/issues/4360)** - Dockerfile安装过程中出现的shell语法错误问题，反映了安装脚本在容器化环境下的兼容性挑战
- **[PR #4350](https://github.com/HKUDS/nanobot/pull/4350)** - 新增Keenable搜索提供方，由社区贡献者提交，反映出对多样化搜索引擎支持的需求
- **Issue #4242](https://github.com/HKUDS/nanobot/issues/4242)** - Dream功能禁用后仍然注入历史记录问题，暴露了记忆管理逻辑中的状态不一致

## 5. Bug 与稳定性

### 严重程度分类：

**🔴 高影响：**
- **[Issue #4375](https://github.com/HKUDS/nanobot/issues/4375)** - Git命令在子目录执行被workspace安全策略阻塞 - 潜在影响持续集成流程
- **[Issue #4374](https://github.com/HKUDS/nanobot/issues/4374)** - Project workspace读写不对称问题 - 可能导致配置写入错误位置

**🟡 中等影响（已有Fix PR）：**
- **[Issue #4366](https://github.com/HKUDS/nanobot/issues/4366)** → [PR #4367](https://github.com/HKUDS/nanobot/pull/4367) - HTTP代理设置干扰本地模型服务连接
- **[Issue #4079](https://github.com/HKUDS/nanobot/issues/4079)** → [PR #4358](https://github.com/HKUDS/nanobot/pull/4358) - API空响应重试导致用户消息重复记录

**🟢 低影响（已关闭）：**
- **[Issue #4286](https://github.com/HKUDS/nanobot/issues/4286)** - 持续目标上下文缺失（已关闭）
- **[Issue #4065](https://github.com/HKUDS/nanobot/issues/4065)** - STREAM_IDLE_TIMEOUT配置崩溃（已关闭）

## 6. 功能请求与路线图信号

### 值得关注的需求：

- **[PR #4350](https://github.com/HKUDS/nanobot/pull/4350)** - Keenable搜索提供方集成：社区驱动的功能扩展，可能成为下一个版本的标配提供方
- **[PR #4371](https://github.com/HKUDS/nanobot/pull/4371)** - 缓存优化：针对system prompt缓存机制的优化，提高长对话效率
- **[PR #3662](https://github.com/HKUDS/nanobot/pull/3662)** - 离线token估计：支持离线部署场景下的token计算，扩大适用范围
- **[PR #4053](https://github.com/HKUDS/nanobot/pull/4053)** - 只读目录写入保护：安全增强，预计纳入稳定性更新

## 7. 用户反馈摘要

### 核心痛点：

- **安装难度**：Issue #4360和PR #4368都指向安装流程在Docker/外部Python环境下的易用性问题
- **记忆管理**：Issue #4242和PR #4373表明Dream/memory机制的行为不一致引发困惑
- **provider兼容性**：Issue #4366和PR #4367反映本地LLM服务部署时的网络配置问题
- **开发者友好性**：PR #4365改进curl安装命令格式，响应开发者在脚本嵌入场景的反馈

## 8. 待处理积压

### 长期未关闭的关键项：

- **[Issue #4242](https://github.com/HKUDS/nanobot/issues/4242)**（创建于6月8日）- Dream禁用后历史记录行为异常，7天无更新，建议优先处理
- **[PR #3662](https://github.com/HKUDS/nanobot/pull/3662)**（创建于5月6日）- 离线token估计功能，等待审核，可能满足企业部署需求
- **[PR #4053](https://github.com/HKUDS/nanobot/pull/4053)**（创建于5月29日）- 写入权限边界修复，涉及安全层，建议尽快合并

---
*数据来源：GitHub API，统计周期：2026-06-16 00:00 至 2026-06-17 23:59 UTC*


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 2026-06-17 Hermes Agent 项目日报

**今日速览**  
Hermes Agent 在过去 24 小时内活跃度强, 在过去24 小时内开50条（新开/活跃：46，已关闭：4）。在 PR 管理方面，有50 条即将插发布 / 执行的 PR，主要集中于 MCP、Slack 集成和技能解锁。用户对多语言支持及数据加载效率的表达十分热烈。

**版本发布**  
目前没有新版本发布，但应用更新以 “42.5.0 + Stable Release” 命名。此版本会移除部分实验性库的发布包，并重构 reporter 选项到干净更主流的结构。建议关注 GitHub 分析以了解更新详解。

**项目进展**  
今日团队积极响应社区热点，实现了多语言支持的小幅提升，Runner with Claude Code OAuth 的 pay-per-token 问题已通过主线插件，扬阳层技术问题已补丁修复，WeCom 适配成功集成至启动器配置。整体技术稳定性明显提升。

**社区热点**  
讨论最活跃 PRs 集中在用户 Guides 功能优化、静态网页插件适配及待补丁的逐条修复。尤其是关于终端模块和多终端自动化指令支持的需求被多方优先考虑。

**Bug 与稳定性**  
今日有八处主动报告的 Bug/Crash 事件：
- 网站页面渲染问题与排版解析泄漏
- 导航 “hermes dashboard” 仍无法交换专属主题
- 远程部署时的移动端表单回退失败
建议关注这些 Release 链接，确保正确安装与稳定使用。

**功能请求与路线图**  
有用户提出建立全一直式壁樃式clarify 界面、新增分析色号及综合评分功能；还有提升远程安全断言的教程“如何快速鉴定项目隔离”。未来建议以安全选项堆砌和您手动诊断为增长点，逐项出版。

**用户反馈摘要**  
用户已多次反映Hermes任务进度明显放缓，需要更多易操作场景和模块化选项。对打卡功能、加载加速、多屏缩列响应的提升有明确期望，尤其支持无头开发者的“实用式插件”。

**待处理积压**  
1. 关闭多余 Issue #47581-#47572（权限/连接稳定、进程延时等问题）
2. 紧急处理 #59014 账号 API 限制相关死胡 Theodore 问题
3. 关闭 #29892 动画菜单缓慢的问题及改进需求

**附带链接**  
所有详细问题答复详情见 GitHub 描述页，功能建议见 GitHub Issues 集合。  
#—— Hermes Agent 官方router | 6 月 17日

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 2026-06-17 日报

---

## 1. **今日速览**
PicoClaw今日活跃度显著，并行处理了15条PR和15条Issues更新，同时新版本夜间构建发布。安全相关Issue占比过半，反映社区对稳定性的高度关注，开发节奏加快，关键功能迭代加速。

---

## 2. **版本发布**
- **新版本**：nightly版本`v0.3.0-nightly.20260617.a16a1e15`发布（自动构建，不稳定）。
- **更新内容**：基于v0.3.x分支的依赖优化与性能调整，具体Changelog可见[对比链接](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)。
- **迁移注意事项**： nocturnly版本仅适用于测试环境，不影响稳定版本用户。

---

## 3. **项目进展**
今日合并/关闭8条关键PR，主要推进方向：
- **安全修复**：#3132修复关键goroutine panic，#3127/3129处理文件操作误差，#3130防止JSON序列化错误吞吐。
- **功能增强**：#3137实现远程Cron命令支持，#3115修复data URL提取逻辑，#3135增强Telegram论坛工具兼容性。
- **性能优化**：#3116完善回复流程状态同步，#2990展示完整对话历史。
项目向关键逻辑稳定与安全可靠迭代方向进展，核心基础设施问题已显著解决。

---

## 4. **社区热点**
- ** isomer: #2404（流式HTTP请求配置）**：12条评论，用户需求明确支持流式LLM响应（类似OpenAI stream API），可能成为下一版本重点功能。
- **安全议题集群**：#3081（#3078等）关于文件系统惩空洞（symlink race）和SSRF防护绕过，评论关注度高，致力于重构验证逻辑。
- **PR #3135（Telegram论坛兼容）**：用户需求集中在论坛话题回复逻辑，当前讨论集中技术细节解决isolated问题。

---

## 5. **Bug 与稳定性**
- 🔴高危：#3081（symlink race导致任意执行路径）已关闭，但存在延迟修复PR（ #3132已修复goroutine崩溃，未连接 #3081）。
- 🟠中危：#3082 (#3078 #3074) 关于SSRF与IPC绕过，需紧急审查网络验证机制。
- 🟢低危：#3110（Telegram话题回复错误）已修复，#3136（Gemini参数格式问题）已验证解决。

---

## 6. **功能请求与路线图信号**
- ✅高优先：Issue #2404（流式HTTP）已产生多PR讨论衍生，可能纳入v0.3.1。
- ✅未决：Issue #3075（技能文本加载安全处理）尚无活跃讨论，但安全团队反复关注。
- 🚀潜在需求：多PR关于外部渠道扩展（如#3120），预示远程功能模块化趋势。

---

## 7. **用户反馈摘要**
- **痛点**：安全警告不足（如SSRF绕过通知不清晰）；流式请求使用场景不明确。
- **满意反馈**：后台站点话题记录#2990修复后用户反馈正面。
- **建议**：用户多次呼吁简化配置项，提升无代码扩展性。

---

## 8. **待处理积压**
- #3074 (SSRF via ISATAP IPv6)：需立即审查IP过滤逻辑。
- #2981 (线程ID处理补偿)：Issue关闭但无对应PR，可能遗留。
- #3134 (TCONV问题)：用户依赖此功能，需优先合并。

---

**数据驱动洞察**：安全问题占比77%，用户需求与安全性直接捆绑。PR合并速度持续提高（单日平均3-4条），复杂性逐步降低。


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-17

Today's snapshot: NanoClaw continues to evolve with steady progress in PRs, active discussions, and ongoing Q&A. The project maintains a healthy balance between new contributions and urgent fixes, with developers actively addressing both technical and community needs.

- **版本发布**: 无新版本发布。
- **Issue 更新**: Total 6 个（包括 5 replied: 1 withdrawn, 4 closed）。
- **PR 更新**: 5 条开始迭代，1 条已关闭、1 条待展示，合并量良好的APPs持续运动。
- **社区热点**: 关注 Issue #1669（模型安全风险） режисс Plus Issue #2779（Slack 支持）、####2781（NATCLOID与SSL资金限流）、####2783（`container-runner.sync.md`）、####2784（`handle` 参数）的讨论，值得关注。
- **Bug 与稳定性**: 报告的容器扩展模块存在资源耗尽现象，已有开发者积极回复，优先修复真实用户反馈。
- **用户反馈摘要**: 用户普遍认同项目安全性与可伸缩性的改进，希望更多功能聚焦下一版本。
- **待处理积压**: #2782和#2783 是重点下周任务，建议优先解决。

### [ Issuements ]
#### Issue #1669 — 模型安全审查
**版度**: 1 (OPEN)  
**背景**: 计算机科学类 Anthropic 规则禁止 OAuth 后端逆代理，项目将模型识别与 OAuth 协调风险。  
**链接**: [Issue #1669](https://nanoclaw.github.io/Issues/#1669)  
**总结**: 安全性建议需重新评估，建议将 OAuth 保留在闭包环境。

#### Issue #2784 — Slack 参数支持
**版度**: 0  
**背景**: 用户发现 Slack 处理中包含 `@handle` 时会出现无效链接。  
**链接**: [Issue #2784](https://nanoclaw.github.io/Issues/#2784)  
**总结**: 现有解决方案未完全覆盖所有提议支持，建议扩展处理方案。

#### Issue #2783 — Docker 工作模型超时
**版度**: 0 (已Closed)  
**背景**: 源码中误用 `index.ts` 作为 staleness signal 导致污染，实现已通过 PR 修复。  
**链接**: [Issue #2783](https://nanoclaw.github.io/Issues/#2783)  
**总结**: 清理代码成功，稳定性提升。

#### Issue #2751 — 限流限债
**版度**: 0 (已Closed)  
**背景**: LLM 达到资源边界后自动终止，返回“Spending Limit Reached” 错误。  
**链接**: [Issue #2751](https://nanoclaw.github.io/Issues/#2751)  
**总结**: 提示机制是否过敏需进一步验证。

---

## 项目进展与路线图
- **核心 PR 目标**: 整合 NANOCLAW_NATIVE_CREDENTIAL 与 OneCLI 降级支持，提升安全与用户管理可控能力。
- **技术模块进展**: 版本 2.3 多项路由与渠道工具实现，资料已入文。

---

## 社区热点解析
1. **安全性优化**：陆续讨论 Anthropic 模型安全影响，讨论方案从检测入手。
2. **Slack 集成**： Slack 官方反馈用户生成内容（ urine fraud 攻击）突增，需加以防范。
3. **性能瓶颈**：`container-runner.sync.md` 涉及服务健康性，需修复资源迁移问题。
4. **功能方向**：用户分箱反映对自动化集成与自定义权限的需求，未来待布置。

---

## 项目健康摘要

NanoClaw 在持续提升其安全性、稳定性和扩展性方面取得进步，尽管当前仍有优化空间。优先关注 Slack 异常处理、Docker 及JIT 警告的修复，并紧跟核心功能示 additive 快速交付。整体社区积极参与，展现健康的开发氛围。

**提交：2026-06-17 $\by$ AI 助手**

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

#.NullClaw 2026-06-17项目日报

---

## 1. 济日速览  
今日 NullClaw 项目活跃度适中，2条Issue（均Bug类型）和3条PR（均为open状态）持续进行，未发布新版本。PR更新全部集中于当日操作，表明开发进度稳定但需加速合并进度实现动态更新。Issue跟进时间均在过去2周内，体现社区和维护者的响应速度。

---

## 2. 版本发布  
无新版本发布。0个-released，当前最新版本为v2026.4.17（2026-04-17），涉及社区关注的调度器稳定性改进。

---

## 3. 项目进展  
今日3条PR推动了关键功能和修复进展：  
- **PR #959**：解决 #839（仿真器无法访问调度器）的根本兼容性问题，持久化存储授权token机制 naturelles（增强系统可信度）；  
- **PR #958**：修复MS Teams集成的JWT声明大小写校验漏洞，降低连接拒绝风险；  
- **PR #783**：新增cron子代理引擎，统一调度历史记录、安全强化（如分区token加密存储）  
项目整体向前让步中，第三方集成（ollama、Teams）的稳定性增强是明确方向。

---

## 4. 社区热点  
- **Issue #952**：用户报告ollama模型输出不完整（评论量2），需立即关注用户体验落地问题；  
- **PR #959**：技术方案量mundan的合并指标（持久化加密token），具备实际安全价值；  
- **PR #783**：社区贡献者yanggf8的提交描述技术细节完整，可能受到开发者团体关注  
链接：[#952](https://github.com/nullclaw/nullclaw/issues/952)、[#959](https://github.com/nullclaw/nullclaw/pull/959)、[#783](https://github.com/nullclaw/nullclaw/pull/783)

---

## 5. Bug与稳定性  
- **高危**：Issue #952（ollama模型输出不完整）  
  - 影响：直接影响用户使用体验，需优先修复PR关联版本  
  - 状态：无对应合并PR  
- **中等**：Issue #839（调度器无法访问权限）  
  - 影响：间接影响调度功能完整性  
  - 状态：已有PR #959在途，预计关联解决  
链接：[#952](https://github.com/nullclaw/nullclaw/issues/952)、[#839](https://github.com/nullclaw/nullclaw/issues/839)

---

## 6. 功能请求与路线图信号  
- **PR #783（cron子代理实现）** 与PR #959（token持久化）共同指向“agent生态系统扩展”方向，可能纳入v2026.5.X发布；  
- **PR #958（Teams JWT修复）** 表明对企业级通信集成的致力，未来版本可能强化对微软生态的兼容性措施  
链接：[#783](https://github.com/nullclaw/nullclaw/pull/783)、[#958](https://github.com/nullclaw/nullclaw/pull/958)

---

## 7. 用户反馈摘要  
- **痛点**：依赖ollama调用时的输出不完整（Issue #952）、微软Teams连接验证失败；  
- **场景反馈**：企业用户推动企业级安全集成（PR #959、#958的加密存储需求）；  
- **积极反馈**：社区贡献者提供完整技术提交（如PR #783的文档详尽度）  
无明确Satisfaction/不满意声明，需进一步追进评论区。

---

## 8. 待处理积压  
- **Issue #839**：创建于2026-04-18，进展仅更新到2026-06-16，需加速PR合并；  
- **长期敏感问题**：没有明确security相关PR（如PR #783的cron子代理行为监控能力未明确记录）  
链接：[#839](https://github.com/nullclaw/nullclaw/issues/839)

--- 

报告完成。建议于2026-06-18对即将合并的PR #959进行审评以加速进度。


</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI 项目日报（2026-06-17）

### 1. 今日速览  
LobsterAI 项目在过去24小时保持高活跃度，Pull Request 合并数占主导，以优化功能与技术改进为核心。今日新增1条Issue涉及快捷键重复校验漏洞，同时4条PR已关闭，包括改进共享任务搜索逻辑、优化预览卡片体验及定时任务错误反馈机制。定时任务错误提示修复与预览卡片UI优化已完成，但快捷键校验问题仍需优先处理。

### 2. 版本发布  
无新版本发布（过去24小时无发布记录）。当前稳定版本为LobsterAI v2026.4.1，后续版本可能聚焦未解决的快捷键校验及定时任务错误提示等缺陷修复。

### 3. 项目进展  
- **关键PR合并：v2170**  
  实现共享任务通过SQLite数据库全量搜索（关联Issue #1425），解决仅关注最近对话列表的局限性，确保跨场景搜索准确性。  
  链接: PR #2170  
- **优化预览体验：v2169**  
  统一文档卡片样式、暗黑主题交互效果及文件展示逻辑，增强可读性与浏览器兼容性，修复外部预览菜单混乱问题。  
  链接: PR #2169  
- **定时任务错误修复：v1424**  
  补充代码检查，确保任务中断操作后实际终止与前端错误状态同步，避免用户误判任务状态。  
  链接: Issue #1424  
- **共享对话滚动控制：v2168**  
  新增漂浮滚动按钮，支持一键到底部与轮滚层级穿透，提升长对话调试效率。  
  链接: PR #2168  

### 4. 社区热点  
- **最活跃Issue: #1425**  
  快捷键重复未校验问题（评论量1条、订阅0），反映用户对输入交互安全性的关注。  
  链接: Issue #1425  
- **最受关注PR: v2169**  
  预览卡片优化贡献由4位用户评论，关注的一致性设计与细节完善建议。  

### 5. Bug与稳定性  
**优先级高**  
- **Issue #1424（姊妹PR合并完成）**: 定时任务停止无实际效果（已修复）。  
**优先级中**  
- **Issue #1425**: 快捷键重复未校验，影响交互安全性。  

### 6. 功能请求与路线图信号  
无新增功能需求报告。当前用户反馈集中优化现有功能（如Issue #1425），稳定性与可用性改进将成为短期重点。

### 7. 用户反馈摘要  
- **使用场景痛点**：  
  用户报告定时任务中断操作后无错误提示（Issue #1424），导致状态判断错误。  
- **UI体验优先级**：  
  预览卡片样式刷新后用户认可度提升，但快捷键重复校验漏洞的缺失引发重复提交风险。  
- **满意度反馈**：  
  滑动控制功能（Issue #2168）如获多数认可，但快捷键空白校验需紧急修复以增强信任度。

### 8. 待处理积压  
- **Issue #1425（严重度中、开放状态）**: 快捷键重复未校验问题，需优先修复以避免用户误操作。  
- **PR待审问题**: 无待处理PR，但Issue #1425需紧急推动修复。

** abnormal_duration_monitoring


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>


以下是 based on TinyAGI/tinyagi GitHub 数据（截至 2026-06-17）的项目动态日报：

---

## 📊 TinyAGI 项目日报 (2026-06-17)

### 1. **今日速览**
- 项目活跃度偏低，过去24小时无新的 Issue 创建，仅有 1 个 PR 提交（PR #281），目前尚未被合并。
- 焦点工作聚集于“Windows 跨平台支持”问题，显示维护者正在积极修复 CLI 在原生 Windows 环境下的运行问题。
- 项目健康度良好：无版本发布、无崩溃或回归 Bug 上报，持续性问题得到及时关注。

---

### 2. **版本发布**
- **暂无新版本发布。**

---

### 3. **项目进展**
- **PR #281**（[fix: Windows cross-platform support in CLI](https://github.com/TinyAGI/tinyagi/pull/281)）正在进行中，旨在修复 CLI 在原生 Windows 环境下运行时出现的三类 Bug。这项修复若成功，项目将进一步增强跨平台兼容性。
- 该 PR 由社区贡献者 `@mperkins0155` 于 2026-06-16 提交，显示社区正在积极补充核心功能的鲁棒性。

---

### 4. **社区热点**
- **PR #281** 代表了当下社区关注的焦点话题。  
  - **诉求**：让 `tinyagi` CLI 在 Windows 环境下能像在 Linux/macOS 下一样稳定运行。
  - **背景**：原生 Windows 下的路径解析问题（如 `/C:/Users/...` 导致模块找不到）一直是阻塞问题。
  - **影响**：此类修复有助于扩大项目用户群，提升开发体验一致性。

---

### 5. **Bug 与稳定性**
- **PR #281 所修复的 Bug（Windows 平台）：**
  1. **路径解析错误**：`new URL('.', import.meta.url).pathname` 在 Windows 下返回带双重驱动器前缀的路径，导致 `path.resolve` 错误。
  2. **模块加载失败**：因节点视为非法路径，引发 `MODULE_NOT_FOUND` 错误。
  3. **CLI 命令无法正常初始化**：最终导致用户在 Windows 下无法运行工具。
- **状态**：这些 Bug 已被识别和修复，正在等待合并。

---

### 6. **功能请求与路线图信号**
- 当前暂无新的功能请求上报。
- Windows 兼容性的改善可视为“基础功能的完善”，有助于后续更多平台相关功能的拓展。

---

### 7. **用户反馈摘要**
- 来自 PR #281 的作者 `@mperkins0155` 的反馈显示：
  - 用户在 Windows 环境（非 WSL）下尝试使用 `tinyagi` CLI 时遇到了不可用问题。
  - 表示出对于跨平台一致体验的需求，尤别是开发工具链的可移植性。

---

### 8. **待处理积压**
- **PR #281** 当前处于待合并状态，建议 maintainers 尽快审阅，完成合并。
- 其他长期未响应的 Issue/PR 暂无明显积压（数据未显示）。

--- 

> 🔗 数据来源：[TinyAGI/tinyagi GitHub](https://github.com/TinyAGI/tinyagi)


</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-17)

## 1. 今日速览
Moltis 项目今日呈现出**中等活跃度**，主要集中在底层通信配置的优化与实时交互体验的 Bug 反馈上。过去 24 小时内共更新 4 条 Issues 和 2 条 PR，重点聚焦于 TTS 配置、RPC 超时以及实时模式下的音频回声消除问题。项目目前处于功能打磨期，正试图在增强外部 Agent 灵活性与提升语音交互稳定性之间取得平衡。

## 2. 版本发布
*(今日无新版本发布)*

## 3. 项目进展
今日暂无 PR 合并，但有两条关键的功能性 PR 处于待评审状态：
- **对话上下文增强**：PR #1124 旨在引入 `chat.context_command`，允许在每轮对话前运行指令并自动注入 stdout 到上下文中，这将显著提升自动化部署场景下的 runtime 注入效率。
- **外部 Agent 灵活配置**：PR #1125 增加了外部 Agent 的模型与 effort 选择支持，使 `/model` 接口能够更精细地控制外部代理的行为。

## 4. 社区热点
今日讨论热点集中在 **TTS（文本转语音）的自定义配置**上：
- **Issue #1126**: [allow to configure the format of tts output](https://github.com/moltis-org/moltis/issues/1126)
  - **分析**：用户希望能够自定义 TTS 的输出格式。这表明用户正尝试将 Moltis 集成到更复杂的音频管线或特定硬件终端中，对输出流的兼容性提出了更高要求。

## 5. Bug 与稳定性
今日报告了 2 项稳定性问题，均由同一贡献者 `khimaros` 提交，反映出实时语音交互链路的脆弱性：

| 严重程度 | 问题描述 | 状态 | 关联链接 | 修复进度 |
| :--- | :--- | :--- | :--- | :--- |
| **高** | **回声消除缺失**：导致 Agent 在 Live 模式下会被自己的输出重新触发（形成死循环） | OPEN | [#1129](https://github.com/moltis-org/moltis/issues/1129) | 待处理 |
| **中** | **转录错误**：使用自托管 whisper.cpp 时出现 transcription 异常 | CLOSED | [#1128](https://github.com/moltis-org/moltis/issues/1128) | 已关闭 |

## 6. 功能请求与路线图信号
今日用户提出的新需求集中在**底层通信控制**与**多媒体输出**，信号如下：
- **通信控制**：请求增加 RPC 超时配置 ([#1127](https://github.com/moltis-org/moltis/issues/1127))，这表明项目正面临复杂网络环境下的稳定性挑战，超时管理将成为接下来的优化重点。
- **多媒体定制**：TTS 格式配置 ([#1126](https://github.com/moltis-org/moltis/issues/1126))。
- **潜在趋势**：结合 PR #1124 和 #1125，项目的演进方向正向着“更高程度的可配置化”和“更强的外部生态集成能力”发展。

## 7. 用户反馈摘要
- **痛点**：在 Live 模式下，由于缺乏回声消除（AEC），Agent 出现“自触发”现象，严重影响实时交互的可用性。
- **使用场景**：用户在尝试将 Moltis 与自托管的 whisper.cpp 结合，以及在需要动态注入运行时上下文的部署场景中使用。
- **满意度**：用户对功能扩展持积极态度（积极提交 Enhancement），但对实时语音链路的鲁棒性表示担忧。

## 8. 待处理积压
以下项建议维护者优先关注，以避免阻塞用户在实时模式下的体验：
- **紧急修复**：Issue #1129 (回声消除问题) —— 这是一个典型的交互死循环 Bug，直接影响 Live 模式的核心可用性。
- **待评审 PR**：PR #1124 和 #1125 已提交超过 48 小时，建议尽快进行 Code Review 以推进功能落地。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# CoPaw 项目动态日报 (2026-06-17)

## 1. 今日速览

项目活跃度极高，24 小时内共处理 44 条 Issues（22 条新开/活跃、22 条关闭）和 39 条 PR（17 条待合并、22 条已合并/关闭）。同时发布了 v1.1.12-beta.1 测试版，反映了项目的快速迭代节奏。社区关注点集中在稳定性问题（上下文压缩 freeze、macOS 崩溃）和功能增强（Headroom 集成、Vietnamese 语言支持）。

## 2. 版本发布

**v1.1.12-beta.1**

### 更新内容
- **安全修复**: 为每个安装实例隔离 keychain 主密钥 [PR #5028](https://github.com/agentscope-ai/QwenPaw/pull/5028)
- **桌面端**: 强化 Tauri Windows CI，提高对 crates.io 获取失败的鲁棒性 [PR #5125](https://github.com/agentscope-ai/QwenPaw/pull/5125)

### 迁移注意事项
本次为 beta 版本，主要面向开发者和早期采用者。 keytar 相关的安全改动可能影响现有密钥存储机制。

## 3. 项目进展

今日已合并/关闭的重要 PR 包括：

- **[PR #5240](https://github.com/agentscope-ai/QwenPaw/pull/5240)** perf(config): 移除 agent 配置加载过程中的不必要深度拷贝操作，提升性能并减少内存Usage
- **[PR #5246](https://github.com/agentscope-ai/QwenPaw/pull/5246)** fix(memory): 为 macOS 上的 chromadb SIGSEGV 问题添加配置覆盖，提高内存模块稳定性
- **[PR #5248](https://github.com/agentscope-ai/QwenPaw/pull/5248)** feat(console): 在 ConsoleChannel 中添加 OSC 8 点击链接支持，提升终端可交互性
- **[PR #5251](https://github.com/agentscope-ai/QwenPaw/pull/5251)** feat(cron): 为 agent 作业添加 silent 选项，防止定时任务输出干扰主聊天

这些变化涵盖了性能优化、跨平台稳定性修复和用户体验提升。

## 4. 社区热点

### 顶尖关注度的 Issues：

1. **[#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)** [Bug] 子Agent触发上下文压缩时QwenPaw进程冻结无响应 (14 评论)
   - 用户反映：当子代理触发上下文压缩（Compaction）时，程序会完全冻结，只能重启恢复
   - 分析：这是影响可用性的 critical 问题，背后可能是缺少超时机制或死锁

2. **[#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)** [Enhancement] 集成 Headroom 以减少 60-95% 的 token 消耗 (6 评论)
   - 用户反馈：希望通过本地上下文压缩层 Headroom 来优化token使用
   - 状态：相关 PR [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) 已实现了基于 Headroom 的 Context Manager

3. **[#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)** [Bug] 使用MiniMax-M2.5模型时思考过程返回XML格式导致不兼容 (6 评论)
   - 用户痛点：不同厂商的推理模型返回格式差异导致指令执行中断

## 5. Bug 与稳定性

### 严重问题：

1. **[#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)** [Bug] 子Agent触发上下文压缩时进程冻结
   - 严重程度：⭐⭐⭐⭐⭐
   - 状态：活跃中，无关联 PR
   - 风险：完全冻结，影响生产使用

2. **[#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209)** [Bug] QwenPaw Desktop (Tauri) 崩溃循环 — macOS ARM64 (3 评论)
   - 严重程度：⭐⭐⭐⭐
   - 状态：相关修复 PR [#5238](https://github.com/agentscope-ai/QwenPaw/pull/5238) 正在审查中
   - 原因：`chromadb_rust_bindings.abi3.so` 空指针解引用

3. **[#5161](https://github.com/agentscope-ai/QwenPaw/issues/5161)** [Question] 长对话后 QwenPaw 无响应
   - 严重程度：⭐⭐⭐⭐
   - 状态：活跃中，可能与上下文管理相关

### 中等严重性：

- **[#5208](https://github.com/agentscope-ai/QwenPaw/issues/5208)** 推理块类型不匹配警告
- **[#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237)** uv 安装的钉钉频道不工作
- **[#5235](https://github.com/agentscope-ai/QwenPaw/issues/5235)** 定时任务未按时执行

## 6. 功能请求与路线图信号

### 值得关注的功能请求：

1. **[#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)** Headroom 上下文压缩集成
   - 状态：已有 [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) 实现
   - 可能进入 v1.1.12 正式版

2. **[#5175](https://github.com/agentscope-ai/QwenPaw/pull/5175)** Vietnamese 界面语言支持
   - 状态：首次贡献者 PR，正在审核中
   - 反映出项目正在扩大亚太地区用户覆盖

3. **[#5251](https://github.com/agentscope-ai/QwenPaw/pull/5251)** 定时任务静默模式
   - 解决了 [#5250](https://github.com/agentscope-ai/QwenPaw/issues/5250) 报告的问题
   - 有利于生产环境下的干净输出

## 7. 用户反馈摘要

### 主要痛点：

- **上下文管理问题**：用户频繁遇到进程冻结、长对话无响应等稳定性问题，显示上下文压缩机制需要加强
- **跨平台不一致**：UV 安装 vs 安装包安装在钉钉频道上的行为差异 [#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237)
- **UI 体验**：不少用户反映侧边栏过于复杂 [#4904](https://github.com/agentscope-ai/QwenPaw/issues/4904)，希望简化导航
- **模型兼容性**：MiniMax 等厂商的推理模型格式问题 [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)

### 满意之处：

- Feishu 流式卡片功能已基本通路，但用户希望优化长回复的刷新速度 [#5167](https://github.com/agentscope-ai/QwenPaw/issues/5167)
- 控制台的会话过滤和语言切换等新功能收到好评

## 8. 待处理积压

### 需要维护者关注的重要 Issue：

1. **[#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)** 子Agent上下文压缩 freeze 问题
   - 22 小时内无新进展，急需排查

2. **[#5161](https://github.com/agentscope-ai/QwenPaw/issues/5161)** 长对话无响应问题
   - 持续活跃，可能与内存管理或事件循环相关

3. **[#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)** MiniMax XML 格式不兼容
   - 老旧问题但影响广泛，用户急需解决

### 值得跟进的 PR：

- **[#5246](https://github.com/agentscope-ai/QwenPaw/pull/5246)** macOS SIGSEGV 修复，来自首次贡献者
- **[#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088)** 沙箱与治理接口讨论，可能影响未来架构方向


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**日期：** 2026-06-17
**分析师：** AI 智能体与个人 AI 助手领域分析师

---

### 1. 今日速览
今日 ZeptoClaw 项目整体处于**平稳维护期**。过去 24 小时内，项目未有功能性的代码合并或新功能发布，主要的工程活动集中在依赖项的自动化更新上。活跃度评估为：**低（Maintenance Mode）**，目前主要任务为维持基础设施的稳定性与安全性。

### 2. 项目进展
今日暂无重要功能合并。
- **工程维护：** 存在 1 项待处理的依赖更新请求，主要针对 Docker 容器环境下的 Debian 基础镜像进行版本迭代。这表明项目正在进行常规的底层环境维护，以确保 AI 智能体运行环境的安全性与最新补丁覆盖。
  - [PR #630: chore(deps): bump debian from `b6e2a15` to `4e401d9`](https://github.com/qhkm/zeptoclaw/pull/630)

### 3. 社区热点
今日社区讨论活跃度较低，未产生高热度讨论。主要关注点集中在自动化依赖管理工具（Dependabot）生成的常规更新请求上，暂无用户发起的深度技术讨论或架构讨论。

### 4. Bug 与稳定性
今日未报告新的 Bug、崩溃或回归问题。
- **当前状态：** 核心功能运行稳定，暂无已知严重故障。

### 5. 功能请求与路线图信号
目前暂无新的功能请求提交。
- **信号分析：** 从今日的 PR 动态看，开发重点目前不在业务逻辑层面的功能扩张，而是在**工程基础建设（Infrastructure）**上。这通常意味着项目正处于版本迭代的间隙期，旨在为下一阶段的大规模功能引入提供一个更稳固的容器化基础。

### 6. 用户反馈摘要
由于今日无新增 Issues 及相关讨论，暂无最新的用户痛点或使用场景反馈。

### 7. 待处理积压
- **工程积压：** 目前存在 1 个由 Dependabot 提交的依赖更新 PR (`#630`)。虽然其属于常规维护工作，但仍需维护者进行集成测试以确保基础镜像更新后不会对 AI 智能体的执行环境造成副作用。
  - [待处理 PR 详情](https://github.com/qhkm/zeptoclaw/pull/630)

---

**分析师总结：**
ZeptoClaw 当前表现出高度的工程规范性，通过自动化工具维持基础环境的更新。项目目前处于功能迭代的平稳期，建议维护者在完成底层依赖升级后，可以考虑在下一阶段引入新的 AI Agent 核心能力或交互逻辑。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



### ZeroClaw 项目 2026-06-17 日报

---

#### 1. **今日速览**  
昨日项目活跃度显著提升，Issues更新50条（其中38条活跃，12条关闭），PR更新50条（23条待合并，27条已合并）。无新版本发布，但核心功能迭代及基础设施修复持续进行。关键PR如WASM插件生命周期增强（#7822）、MCP工具集成（#7320）正在推进，核心⚙️架构稳定性提升。

#### 2. **版本发布**  
无新版本发布。当前代码正在积累质量提升，未触发发布管道。

---

#### 3. **项目进展**  
**合并关键PR**：  
- **#7780**: 修复经理轮转预算分配逻辑，避免资源浪费（⭐️high风险）。  
- **#7820**: 优化shell命令循环逻辑，减少冗余确认步骤。  
**关键进展**：  
- 多数据库插件支持（PostgreSQL、Oracle等）功能oc（#6893）接近稳定。  
- ZeroCode界面反馈优化（#7815）提升用户可发现性，符合路线图"No-code复杂性降低"目标。

---

#### 4. **社区热点**  
**活跃Issue/PRs**：  
1. **#6808** (RFC：Work Lanes/Auto Board)  
   - ⭐️11条评论，社区反映对工作流智能化的高需求（链接）。议题议程明确，可能成为0.9.0里程碑。  
2. **#7822** (WASM插件Hook机制)  
   - 提议新能力引发广泛讨论，9条评论反映，符合govtech领域扩展性需求（链接）。  
**背后诉求**：  
- 提升插件生态集成度（#7320关联）和自托管路由效率（#6808）。

---

#### 5. **Bug与稳定性**  
**按风险排序**：  
1. **#7756** (MCP工具集成失败)  
   - ⭐️s1严重级别，阻止Oracle/Anthropic工具正常调用（未合并fix PR）。  
2. **#7795** (Telegram语音会话缓存问题)  
   - SSOT构建漏洞，需优先修复（#7815有关联）。  
3. **#7810** (非Git仓库git操作报错)  
   - ⭐️p2风险，影响开发人员体验（已存在#6648修复逻辑）。  

---

#### 6. **功能请求与路线图信号**  
**潜在纳入下一版本**：  
- **#7794** (Dream Mode per-agent)  
   - ✅已接受，可视化步骤在#7823中。符合AI探索场景需求。  
- **#6893** (多DB插件)  
   - 🚀 merchants能直接应用于企业级客户。  
**未优先级明确需探讨**：  
- **#7809** (严格工具解析规则) — 可能影响架构演进。

---

#### 7. **用户反馈摘要**  
**痛点**：  
- ✂️ **工具重复调用**：#7820反映用户反复确认shell命令的困扰（S2级影响）。  
- 🧠 **历史记录管理**：GLM-5.1导致思维浮动（#6643），用户反复调整。  
**满意度**：  
- ✅ ZeroCode多提供列表用户viève增强（#7766测试通过）。  

---

#### 8. **待处理积压**  
- **#6643** (GLM思维与对话混合)  
   - creado 2026-05-13，未有新更新，需提醒核心团队。  
- **#7675** (硬化CI管道)  
   - rendez-vous 2026-06-15，准备时间敏感。  

---

**项目健康度评估**：  
- ⭐️代码活跃度（50PR/50Issues）和风险分级严谨性（高风险问题集中修复进度）表现优异。  
- ⚠️仍需加强MCP生态稳定性（#7756复现率高）。


</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*