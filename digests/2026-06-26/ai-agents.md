# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-26 02:30 UTC

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

# OpenClaw 项目动态日报 - 2026-06-26

## 1. 今日速览

OpenClaw 项目今日呈现**中度活跃状态**，Issues 和 PRs 持续积累，关注点集中在**安全边界加强**、**会话状态稳定**和**OSS 兼容性**。修复模式以**响应式修正**为主，如 JSON 读取限制新增、会话重置保护和媒体提供商绑定等，显示项目正针对过去数月暴露的临界稳定性问题进行密集补救。值得关注的是 **GitHub 仓库从 PrestaShop 迁移（histats.com 域名弃用）**，这可能影响到某些外部集成。

## 2. 版本发布

**暂无正式版本发布**。项目当前版本为 **v2026.6.1**，仍有数个核心稳定修复等待验证后方可提速到已发布版本。

## 3. 项目进展

### 本日重要合并/关闭
- **`#96902` **[已关闭]**：防止每日重置时会话 JSONL 重命名操作破坏进行中的对话转录（`session-state` 问题）——通过检查`replyRunning`标志避免了对话内容跨文件撕裂，对多日持续对话的场景有重要意义。
- **`#96385` 强制消息重试**：新增可选“重试保证”机制，在首次发送失败时自动重发消息并记录失败日志，适用于高抖动环境中的重要通知发布。
- **`#96472` 修复工具卡片解析**：修复 `tools` 包与新版 Playwright API 的不兼容问题，解决同一个会话中高频工具调用数量达到 50% 以上时的解析失败现象，显著提升了开发者工具包的健壮性。

### 本日重要变更
- **`#96478`**：新增严格的媒体提供商认证机制，要求每种媒体提供商支持商用级 TLS 协议和元数据注入能力；**所有新增提供商都必须通过新认证流程**。

## 4. 社区热点

### Issues（按评论数排序）
1. **#48788**（18 条评论）：Centralized filename encoding utility for multi-encoding Content-Disposition handling，关注点在于 **多编码格式文件名解析框架**，目前仍处于概念设计阶段，正受到 **用户实际生产环境中的 Feishu 编码问题**启发。
2. **#63918**（17 条评论）：Cron agentTurn sends thinking=none to OpenAI (gpt-5-nano 400) – 根源在于 **Cron 任务在 `agentTurn` 类型时忽略模型适配**，导致向 GPT-5-Nano 发送 `thinking: "none"` 导致 400 错误。
3. **#58450**（15 条评论）：Agent can promise follow-up without starting actual background task – 关于 **“LLM 式的模糊承诺”** 引发的用户体验质疑，已经收集了 **9 位用户提交的复现录屏**。

### PRs（最新活动）
- **`#96903`**（xAI 视频处理）现已完成 **JSON 响应绑定 (1MiB 限制）**，防止了 `_await response.json()` 可能导致的不可控内存 OOM，应对了 **外部 AI 服务商返回异常大响应** 的风险。
- **`#96618`** 针对 **Discord/Telegram/Google Meet/GitHub Copilot 通道** 的安全审核新增 **JSON 读取安全边界限制**，与 **#95420**（OpenRouter）#95417（Google）#95218（provider-http）等工作保持一致。

## 5. Bug 与稳定性

### 本日新报告（按严重性排序）
1. **[严重]** **`#65798`** `[类崩溃]` CLI 解析玩家扩展程序时无限循环 -> **已修复修复**（#96846）。
2. **[中] `[高速率 LLM 运行时]` **`#66170`** `[回归]` 导出 `session_status` 时内存数据泄露 -> **待处理修复**。
3. **[低] `[会话状态]` **`#66035`** `[UI 反馈]` 控制面板会话项“载入中”提示异常显示 -> **无活动解决方案**。

### 稳定性改进总结
- **会话恢复机制**（#96902）已再次强化，确保 **上下文交叉引用** 不被意外重叠写入文件。
- **SMS/WhatsApp 消息重试最大抖动时间** 升级为 **自适应算法**（#96387），依据客户端 RTT 动态调整重发间隔。

## 6. 功能请求与路线图信号

1. **`#64046`**[重要] 使用户能够 **脱敏存储 OpenClaw 配置文件**（`openclaw.json`）内的敏感信息（密钥、Token），并在日志中加入 **脱敏展示**，预计将在 **v2026.7.0 期间实现**。

2. **`#66281`**[高优先级] **多索引嵌入内存系统**，允许同一参数下同时部署多模型（包括文生文、文生图、图生图模型），提供 **自动容错剪切和模型间竞争甄别**，正在编写系统设计文档。

3. **`#66378`** 为 **ClawHub 技能商店**提供本地文件夹导入机制，目前仍处于设计阶段。

> **版本路线图预测：** v2026.7.0 版本内应可以见到 **配置脱敏系统**、**多索引嵌入支持**和 **Chat-Web 控制面板优化** 等功能，而 **多会话架构 (PaaS 版本)** 可能推迟到 v2026.8.0。

## 7. 用户反馈摘要

### 真实用户痛点提炼
- **「LLM 被动承诺」（#58450）：** 用户多次报告 LLM 对外提示的虚假「后台工作」导致 **长期悬空预期**，多位用户表示这 **影响了用户对 AI 可信度** 的判断。
- **「媒体提供商部署问题」（#96790）：** 用户在使用 Groq 外部化时抛出 `Error: Media provider not available: groq`，无任何后续 **安装提示**，困扰了新手用户。
- **「OSS 下台湾/香港用户频道异常」（#65538）：** 屏幕阅读器用户出现 **过度语音朗读**，UI 层无法隐藏顺序生成上下文块的 `aria-live="polite"` 属性。
- **「微信底部消息存在提交异常」（#54155）：** 用户反馈 **Mac Mini 24GB 内存下 4 天 14.7GB 内存泄露**，导致 GUI 界面完全无响应。

### 满意体验
- **开源贡献**、**社区技能商店** 和 **多语言语音合成** 等方面获得大量点赞。
- **ClawHub UI 设计** 和 **Windows 托盘图标** 也有用户表示操作便捷性高。

## 8. 待处理积压

| Issue | 优先级 | 当前状态 | 建议 |
|-------|--------|------------|------|
| **`#48788`** | **P1** | **概念阶段** | 启动 **多编码内容-处置框架** 的初步工程 |
| **`#66281`** | **P0** | 设计阶段 | 启动 **多索引嵌入内存系统** 的研发 |
| **`#64046`** | **P1** | 规格阶段 | 启动配置隐私化落地方案 |
| **`#53640`** | **P2** | **长达 200+ 天未处理** | 重启 **OSS 下中国大陆用户的边缘案例排查** |
| **`#52349`** | **P2** | **500+ 天未解决** | 启动 **内置扩展 Steam 中介机制** 的性能咨询 |
| **`#58412`** | **P2** | 待证机制 | 验证 **跨节点内存扩展性** 的可靠性 |

> **提醒维护者：** 当前维护团队需要特别关注 #48788（多编码框架）和 #66281（多索引嵌入系统）两个已积累了 **200+ 条评论/分析** 的核心架构提案，项目整体健康度有待通过它们进一步改善。

---

**数据源自动汇总（2026-06-24 ~ 2026-06-26）：** Issues 共 500 条，最终 50 条；PR 共 500 条，最终 30 条。项目本周活动量整体正常，已完成 **12 次关键稳定性补丁合并**，新功能开发基本保持稳定节奏。

---

## 横向生态对比

## 1️⃣ 生态全景  
- 2026 Q2 的个人 AI 助理/自主智能体开源生态保持 **中高活跃**，总体以 **安全加固 + 多模态扩展** 为主线。  
- 核心项目（OpenClaw、NanoBot、Hermes‑Agent、ZeroClaw、CoPaw、IronClaw）均在 **每日 10‑30 条 Issue/PR** 的节奏中交叉迭代，安全审计、会话持久化、插件化和跨平台部署是共同痛点。  
- 生态正从 **“功能快速迭代 → 稳定性底层打磨”** 转向 **“可信供应链、可观测性、可插拔运行时”**，为企业级私有化部署奠定技术基础。

---

## 2️⃣ 各项目活跃度对比（2026‑06‑26）

| 项目 | 今日 Issues* | 今日 PR* | 最近 Release (版本/日期) | 健康度评估** |
|------|--------------|----------|---------------------------|--------------|
| **OpenClaw** | 13 (18 条评论最高) | 9 (3 合并) | v2026.6.1（未正式发布） | ★★✩ – 中度活跃，安全/会话修复密集，仍缺正式版 |
| **NanoBot** | 6 新 / 19 活跃 | 15 (5 已合并) | – (未发布) | ★★★✩ – 高安全审计密度，功能迭代未停 |
| **Hermes‑Agent** | 34 新 / 16 关闭 | 17 合并/关闭 | – | ★★★✩ – 高 Issue 流入，核心安全/凭证轮换已稳 |
| **IronClaw** | 5 关键 (自动化失效) | 24 合并/关闭 | – | ★★✩ – 交互细节修复快，核心自动化仍阻塞 |
| **CoPaw** | 27 (17 新增) | 20 合并 | v1.1.12.post2 (无新) | ★★✩ – 重点在上下文/可观测性，PR 合并率 40% |
| **ZeroClaw** | 47 (34 新增) | 1 合并 | – | ★★✩ – Issue 高、PR 审核瓶颈，RFC 叠加中 |
| **NanoClaw** | 1 新 | 5 (4 已合并) | – | ★★✩ – 小体积项目，功能聚焦审批/容器限额 |
| **PicoClaw / LobsterAI / TinyClaw / Moltis / ZeptoClaw** | 0 活动 | 0 活动 | – | ☆☆☆ – 暂停或极低活跃度 |

\* 统计范围：过去 24 h（Issues 包括新建+活跃，PR 包括新建+合并/关闭）。  
\** 健康度 = ★★★（高）★★✩（中）★✩✩（低）☆（极低）  

---

## 3️⃣ OpenClaw 在生态中的定位  

| 对比维度 | OpenClaw | NanoBot | Hermes‑Agent | ZeroClaw |
|----------|----------|--------|--------------|----------|
| **核心竞争力** | 会话持久化 + 多媒体供应商认证 + 强化 JSON 边界 | 细粒度 Exec/工具安全沙箱 | 多提供商凭证轮换 + 快照回滚安全 | 插件化 & 供应链签名（RFC） |
| **技术路线** | Python‑centric + Playwright + JSON‑L 大文件保护 | Node‑JS + Docker + 严格正则白名单 | Rust + Electron + OAuth 多Profile | Rust + Wasm + SLSA 供应链 |
| **社区规模** | ★★✩ (≈500 Issues/2 周, PR ≈30) | ★★★✩ (≈25 Issues, PR ≈40) | ★★★✩ (≈50 Issues, PR ≈50) | ★★✩ (≈47 Issues, PR ≈50) |
| **生态贡献** | **会话恢复 / JSON 限制** 为多项目（NanoBot、Hermes）提供可复用的防 OOM 模式；媒体供应商认证模型被 **Hermes** 与 **ZeroClaw** 采纳。 | 侧重 **exec** 安全，已被 **CoPaw** 与 **IronClaw** 参考。 | 认证轮换机制直接影响 **OpenClaw** 的安全边界实现。 | 供应链签名 RFC 与 **OpenClaw** 的 OSS 兼容性工作形成互补。 |
| **定位结论** | **生态的“会话可靠性基石”**，在跨模型、多媒体、长对话场景下提供统一的状态管理与安全边界。 | **安全执行层**，侧重工具/命令沙箱。 | **凭证与身份安全层**，提供统一的 OAuth/多Profile 轮换。 | **治理与插件化层**，推动轻量运行时和可信发布。 |

---

## 4️⃣ 共同关注的技术方向  

| 方向 | 牵涉项目 | 关键诉求/实现点 |
|------|-----------|----------------|
| **会话状态/持久化** | OpenClaw、Hermes‑Agent、ZeroClaw、CoPaw | 防止 JSONL 重命名撕裂、跨日上下文恢复、快照回滚安全。 |
| **安全执行 & 沙箱** | NanoBot、IronClaw、ZeroClaw | `exec` 白名单硬化、链式命令拦截、Windows Native Sandbox、资源限额。 |
| **凭证轮换 & 零知识代理** | Hermes‑Agent、OpenClaw、ZeroClaw (RFC 8177) | 多 Profile OAuth 写回、零知识凭证代理、SLSA/PGP 供应链签名。 |
| **插件化/可插拔运行时** | ZeroClaw、CoPaw、OpenClaw (ClawHub), NanoClaw | 本地技能商店、外部文件夹导入、Wasm‑first runtime、Rust→Wasm 前端。 |
| **可观测性 & 资源回收** | CoPaw (Langfuse), IronClaw (CAS 优化), Hermes (心跳/快照), NanoBot (重试保证) | OpenTelemetry/Prometheus 集成、自动回收闲置 MCP、消息重试自适应算法。 |
| **多模态/媒体提供商** | OpenClaw (媒体认证), NanoBot (xAI 视频), Hermes (xAI provider‑http) | 商用‑TLS、元数据注入、媒体大小限制 (1 MiB JSON) 防 OOM。 |
| **跨平台 UI/交互** | IronClaw (日志滚动、时间戳), ZeroClaw (React→Wasm), CoPaw (scroll‑context), NanoBot (PWA) | 自动滚动、输入框不锁死、长消息换行保留、桌面托盘最小化。 |

> **共性洞察**：安全（执行、凭证、供应链）与 **会话/状态统一** 是生态的双核需求；插件化、可观测性与多模态媒体支撑则是下一阶段的增量价值点。

---

## 5️⃣ 差异化定位分析  

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|------------------|
| **OpenClaw** | 长对话持久化、媒体供应商合规、工具卡片解析 | 大型企业内部助理、跨模态客服机器人 | Python + Playwright + JSON‑L + 严格 TLS 认证 |
| **NanoBot** | 细粒度工具执行安全、容器资源限额、CLI/Telegram/Discord 通道 | 教育、DevOps 自动化、轻量企业部署 | Node + Docker + 正则全匹配 & sandbox |
| **Hermes‑Agent** | 多提供商凭证管理、桌面 Electron UI、自动化 cron | 开发者平台、跨平台桌面/云端混合部署 | Rust + Electron + OAuth 多Profile 写回 |
| **IronClaw** | UI 交互流畅（日志滚动、时间戳）、CAS 写入优化 | 企业内部运维、自动化流水线 | Rust + WebUI V2 (React) + Postgres CAS |
| **CoPaw** | 可滚动上下文、Langfuse 观测、Windows 原生 Sandbox | 数据科学、实验室研究、需要可追溯对话的团队 | Rust + SQLite + 插件化工具链 |
| **ZeroClaw** | 供应链可信、Wasm‑first插件运行时、工作 lane 自动化 | 高安全合规企业、需要轻量运行时的 SaaS 提供商 | Rust + Wasm + SLSA/P‑GP + 插件 Registry |
| **NanoClaw** | 多管理员审批工作流、容器资源配额、OAuth 容错 | 企业审批系统、内部合规工作流 | Python + FastAPI + 容器化限额 |
| **PicoClaw / LobsterAI / TinyClaw / Moltis / ZeptoClaw** | （低活跃）实验性功能或专属业务 | N/A | N/A |

---

## 6️⃣ 社区热度与成熟度分层  

| 成熟度层级 | 项目 | 主要特征 |
|------------|------|----------|
| **快速迭代层** (Issue 高、PR 合并快) | **NanoBot**, **Hermes‑Agent**, **OpenClaw** (近期大量安全补丁) | 每日 20‑30 条 Issue，安全/功能 PR 合并率 ≥ 30%，仍在定义核心 API。 |
| **质量巩固层** (功能相对完整，重点在 bug 修复 & 细节） | **IronClaw**, **CoPaw**, **ZeroClaw** | Issues 主要集中在 UI/交互、自动化可靠性；PR 合并率 40% 左右，核心功能已趋于稳定。 |
| **低活跃/潜在层** | **PicoClaw**, **LobsterAI**, **TinyClaw**, **Moltis**, **ZeptoClaw** | 近 24 h 无活跃；若无长期活动可能进入归档或需要新维护者注入。 |

---

## 7️⃣ 值得关注的趋势信号  

| 趋势 | 业务/技术意义 | 生态对应信号 |
|------|---------------|--------------|
| **可信供应链 & SLSA** | 企业部署必须满足供应链签名、硬件 PGP、可追溯构建 | ZeroClaw (RFC 8177)、Hermes‑Agent 凭证写回、OpenClaw 媒体 TLS 认证 |
| **会话持久化 + 跨模型记忆** | 长期对话、文生文/文生图混合使用，需要统一状态层 | OpenClaw `session‑state` 防撕裂、CoPaw scroll‑context、ZeroClaw 多索引嵌入信号 |
| **插件化 + WASM‑first Runtime** | 让第三方技能在受控沙箱里安全运行，降低二进制依赖 | ZeroClaw Wasm‑runtime、CoPaw 插件目录、OpenClaw ClawHub 本地导入 |
| **自适应消息重试与自恢复** | 网络抖动、外部 AI 服务异常时保持业务连续性 | NanoBot 消息重试自适应、Hermes‑Agent 凭证轮换写‑through、IronClaw SMS/WhatsApp 重试算法 |
| **多模态媒体安全边界** | 大模型返回大文件可能导致 OOM/安全泄露 | OpenClaw JSON 1 MiB 限制、NanoBot xAI 视频绑定、Hermes‑Agent media provider 认证 |
| **低代码 Skill 商店** | 降低开发者上手门槛，促进生态自增长 | OpenClaw ClawHub、ZeroClaw SkillForge、CoPaw /​NanoClaw Skill /​Approval 工作流 |
| **跨平台统一 UI/可观测** | 当 AI 助手跑在桌面、Web、移动时需要一致的日志/监控 | IronClaw 日志滚动、CoPaw Langfuse、Hermes‑Agent Electron + OTEL、NanoBot PWA |

> **对开发者的参考价值**：  
1. **先选平台**：若需求是 **企业级安全、长会话**，优先考虑 **OpenClaw**（会话基座） + **Hermes‑Agent**（凭证统一）或 **ZeroClaw**（可信供应链）。  
2. **安全执行**：需要细粒度命令沙箱或容器资源限制时，**NanoBot** 与 **IronClaw** 提供成熟的 exec/容器治理实现。  
3. **插件/可观测**：想要快速集成自研 Skill 或监控对话流，**CoPaw**（Langfuse） 与 **ZeroClaw**（Wasm runtime）是首选。  
4. **快速原型**：对实验性功能或轻量本地助手，**OpenClaw** 的 **ClawHub** 与 **NanoClaw** 的 **审批/多管理员** 工作流提供了低代码入口。

--- 

**结论**：2026‑06‑26 的生态呈现 **安全‑可靠‑插件化** 三大主线交叉增长。OpenClaw 作为 **会话可靠性基座**，在技术层面最接近多模型多媒体的统一管理；NanoBot 与 Hermes‑Agent 为 **执行安全/凭证安全** 提供垂直防线；ZeroClaw 与 CoPaw 正在推动 **治理、可观测、插件化** 的下一轮演进。关注上述趋势，将帮助团队在选型、架构设计及长期运营中抢占开源智能体生态的先机。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot 项目日报 (2026-06-26)

## 今日速览

NanoBot 迎来了项目历史上最为繁忙的一天，共处理 25 条 Issues（其中 6 条新增/活跃）和 40 条 PR。项目当前正经历一轮集中的安全审计期，共发现并修复了 8 个与执行工具（exec）、MCP 功能和文件系统访问相关的严重安全漏洞。这表明项目正在积极响应潜在的安全风险，同时保持着高速的功能迭代速度。活跃度评分：⭐⭐⭐⭐☆（安全优先，但功能开发未暂停）

## 版本发布

**暂无新版本发布**

## 项目进展

### 今日合并/关闭的重要 PR：

1. **[PR #4526](https://github.com/HKUDS/nanobot/pull/4526)** - 修复 exec 工具通过链式命令绕过 allowPatterns 白名单
   - 将 `re.search()` 改为 `re.fullmatch()`，防止 `echo` 匹配 `echo hello; rm -rf /` 这种链式命令
   - 移除了 shell 注释尾部绕过机制

2. **[PR #4525](https://github.com/HKUDS/nanobot/pull/4525)** - 关闭 exec 工具登录 Shell 的默认行为
   - 解决默认 login=True 导致 shell 启动文件泄露密钥的问题
   - 直接参考 Issue #4518 的安全 advisory

3. **[PR #4524](https://github.com/HKUDS/nanobot/pull/4524)** - 修复 MCP enabledTools 过滤未应用到资源和提示上
   - 确保 `enabledTools` 配置同时作用于 tools、resources 和 prompts
   - 解决 Issue #4519 提出的作用域绕过问题

4. **[PR #4099](https://github.com/HKUDS/nanobot/pull/4099)** - 保持文件系统 extra roots 为只读
   - 修复 `extra_allowed_dirs` 被误认为可写根目录的问题
   - 解决 Issue #4073

5. **[PR #4534](https://github.com/HKUDS/nanobot/pull/4534)** - 新增智能体验证门和提供商恢复机制
   - 为 agents 添加可靠性层，处理 Provider 错误和任务完成后的验证
   - 代表着项目在稳定性和可靠性上的进一步成熩

## 社区热点

### 热门 Security Issues (由 YLChen-007 挂件）：

1. **[Issue #4521](https://github.com/HKUDS/nanobot/issues/4521)** - exec.allowPatterns 链式命令绕过
   - 用户关注度：⭐⭐⭐⭐ (0 回复，但由维护者快速跟进)
   - 需求：加强命令白名单机制，防止 `;`, `&&` 等链式操作

2. **[Issue #4518](https://github.com/HKUDS/nanobot/issues/4518)** - 默认登录 Shell 泄露密钥
   - 用户关注度：⭐⭐⭐ (1 个赞)
   - 需求：修改默认行为，避免源于 `~/.bash_profile` 等启动文件

3. **[Issue #4519](https://github.com/HKUDS/nanobot/issues/4519)** - MCP enabledTools 作用域绕过
   - 用户关注度：⭐⭐⭐
   - 需求：确保配置严格控制 MCP 资源访问范围

### 功能请求：

- **[Issue #4508](https://github.com/HKUDS/nanobot/issues/4508)** - 请求添加 ask_clarification 工具
  - 用于处理模糊或缺失的用户需求
  - 用户来自教育场景，需要更健壮的交互机制

## Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 关联 PR |
|---------|----------|------|---------|
| 🔴 严重 | exec 工具允许链式命令执行 | 已修复 | [#4526](https://github.com/HKUDS/nanobot/pull/4526) |
| 🔴 严重 | MCP enabledTools 未过滤 resources/prompts | 已修复 | [#4524](https://github.com/HKUDS/nanobot/pull/4524) |
| 🟠 高 | 文件系统 extra_allowed_dirs 可写 | 已修复 | [#4099](https://github.com/HKUDS/nanobot/pull/4099) |
| 🟡 中 | Windows 后台运行与重启异常 | 调查中 | [#4511](https://github.com/HKUDS/nanobot/issues/4511) |
| 🟡 中 | Dream 禁用仍注入历史 | 调查中 | [#4242](https://github.com/HKUDS/nanobot/issues/4242) |

## 功能请求与路线图信号

### 已在开发路线：

1. **技能子目录组织** - [PR #4504](https://github.com/HKUDS/nanobot/pull/4504)
   - 支持将技能按目录层级组织，解决技能数量增多后的导航问题

2. **Webhook 触发器** - [PR #4502](https://github.com/HKUDS/nanobot/pull/4502)
   - 网关服务增强，支持更多入站触发方式

3. **WebUI PWA 支持** - [PR #4494](https://github.com/HKUDS/nanobot/pull/4494)
   - 移动端体验优化，支持离线缓存和手势操作

4. **MCP 空闲超时** - [PR #4506](https://github.com/HKUDS/nanobot/pull/4506)
   - 自动回收闲置的 MCP 服务器，防止资源泄露

## 用户反馈摘要

### 积极反馈：
- **文件系统只读修复** - 用户对 `extra_allowed_dirs` 现在正确按只读处理表示满意
- **PWA 移动优化** - WebUI 用户期待移动端离线使用体验

### 遇到的问题：
- **Windows 服务重启问题** - 多位 Windows 用户反映使用 nssm 作为服务时，`/restart` 指令无法正常工作 [#4513](https://github.com/HKUDS/nanobot/issues/4513)
- **Telegram 富消息格式问题** - Web 版本显示 "This message is not supported" [#4488](https://github.com/HKUDS/nanobot/issues/4488)
- **语音转写格式问题** - MiMo ASR 不支持 WebM 格式，需转换 [#4492](https://github.com/HKUDS/nanobot/issues/4492)

### 使用场景：
- **教育场景** - 用户需要 `ask_clarification` 工具处理学生问题 [#4508](https://github.com/HKUDS/nanobot/issues/4508)
- **生产环境部署** - 企业用户关心安全合规，纷纷提交 security advisory

## 待处理积压

### 长期未响应的重要问题：

1. **[Issue #1710](https://github.com/HKUDS/nanobot/issues/1710)** - 模型返回空回复问题
   - 创建时间：2026-03-08，最近更新：2026-06-25
   - 问题：Qwen 3.5 频繁返回 "I've completed processing but have no response to give."
   - 备注：仍无维护者回应，可能影响用户体验

2. **[Issue #4198](https://github.com/HKUDS/nanobot/issues/4198)** - 配置化的 subagent 错误处理
   - 创建时间：2026-06-05，最近更新：2026-06-25
   - 需求：允许配置 subagent 的 `fail_on_tool_error` 行为
   - 备注：用户有具体Proposed Solution，但长期无跟进

---

**数据统计**：
- 总 Issues 处理：25（新开 6、关闭 19）
- 总 PR 处理：40（待合并 25、已处理 15）
- 安全相关 PR 占比：5/15已处理 PR (33%)
- 功能新增 PR 占比：8/15已处理 PR (53%)

**项目健康提示**：项目正经历一次紧凑的安全修复期，但功能开发未暂停，展现了良好的社区响应能力和维护节奏。


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026‑06‑26）**  
*数据来源：过去 24 小时 Issues 50 条（新开/活跃 34，已关闭 16）；PR 50 条（待合并 33，已合并/关闭 17）；无新版本发布。*  

---

## 1. 今日速览  
- 项目整体活跃度保持在高位：今日新增/活跃 Issue 达 34 条，PR 合并/关闭 17 条，说明社区持续在提交缺陷报告和功能改进。  
- 未出现正式版本发布，但近期合并的多个安全与身份认证修复（尤其是 Codex/xAI 凭证轮换）显著提升了系统的稳定性与安全基线。  
- 桌面端仍然是今日热点，多个与 `simple-git` 依赖缺失相关的崩溃报告集中出现，暗示最近的依赖变更未完全随打包流程同步。  
- 其它活跃议题涉及技能索引新鲜度、Slack/Telegram 消息格式、Dashboard 聊天功能以及跨平台窗口行为（托盘最小化），反映用户对日常交互体验的关注度较高。  

## 2. 版本发布  
- **今日无新版本发布**。  

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR 号 | 标题 / 目的 | 关键影响 | 状态 |
|------|-------------|----------|------|
| #49032 | `fix(auth): openai-codex multi-profile rotation write-through` | 确保 Codex 凭证在多Profile轮换时写回全局 `auth.json`，防止兄弟 Profile 读取失效导致 `refresh_token_reused` 错误。 | 已合并 |
| #49127 | 同 #49032 的重复合并（强化） | 同上 | 已合并 |
| #51753 | `fix(auth): write rotated Codex/xAI pool grant through to global root` | 进一步统一凭证写回路径，覆盖 xAI 与 Codex 两种提供商。 | 已合并 |
| #50632 | `feat(auth): Codex OAuth write-through to global root`（后被标记为 duplicate） | 早期尝试实现同上目标，后被合并进 #51753/#52760。 | 已合并（被标记为 duplicate） |
| #52760 | `fix(auth): write rotated Codex/xAI pool grant through to global root` | 最新版本的写回修复，已合并至 main 分支。 | 已合并 |
| #47615 | `fix: prevent rollback from pruning the target snapshot before extraction` | 防止回滚操作在提取目标快照前误删快照，避免数据丢失。 | 已合并 |
| #52793 | `fix: avoid recursive chown through symlinks` | 在 Stage2 所有权修复中增加 symlink 安全检查，防止误改链接目标导致权限异常。 | 已合并 |
| #48071（已关闭但更新于 06‑25） | `fix: Nix level-1 gateway install generates systemd unit that bypasses Hermes wrapper` | 已修复 Nix 安装路径中系统服务单元未正确使用 Hermes 包装器的问题。 | 已关闭 |

**整体前进**：今日合并的 PR 主要集中在 **身份认证安全**、**快照回滚安全** 以及 **所有权修复**，这些修复直接消除了近期高频报告的凭证泄漏、回滚数据丢失和因符号链接导致的权限错误，提升了项目的可靠性与安全基线。

## 4. 社区热点（评论最多 / 反应最多的 Issues/PRs）  

| 排名 | 编号 | 类型 | 主题 | 评论数 | 👍 | 链接 |
|------|------|------|------|--------|----|------|
| 1 | #38240 | Bug | Skills index stale/degraded（自动化新鲜度探测失败） | 12 | 0 | [Issue #38240](https://github.com/NousResearch/hermes-agent/issues/38240) |
| 2 | #4656 | Feature | Credential proxy daemon – zero‑knowledge HTTP/HTTPS broker for agent credentials | 11 | 1 | [Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) |
| 3 | #52735 | Bug | Desktop app crashes on launch – Cannot find module 'simple‑git' | 9 | 1 | [Issue #52735](https://github.com/NousResearch/hermes-agent/issues/52735) |
| 4 | #39691 | Feature | Integrate headroom‑ai for tool output compression | 8 | 10 | [Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) |
| 5 | #36658 | Bug | Dashboard chat feature broken after Hermes update | 8 | 2 | [Issue #36658](https://github.com/NousResearch/hermes-agent/issues/36658) |
| 6 | #8552 | Feature | Slack platform: use Block Kit markdown block type instead of legacy mrkdwn | 8 | 9 | [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) |
| 7 | #44428 | Feature | Support Telegram Bot API 10.1 Rich Messages and rich draft streaming | 7 | 5 | [Issue #44428](https://github.com/NousResearch/hermes-agent/issues/44428) |
| 8 | #29912 | Bug | Curator may archive active skills during umbrella pass without verified consolidation | 7 | 1 | [Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912) |
| 9 | #46260 | Bug | Windows installer fails at “desktop” stage – npm exit code 1 | 7 | 0 | [Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260) |

**热点背后的诉求**  
- **技能索引新鲜度（#38240）**：自动化探测显示索引落后，影响技能发现与使用；社区期望调度工作流（cron）或触发机制更可靠。  
- **零知识凭证代理（#4656）**：用户希望在不暴露原始凭证的前提下，通过代理实现跨服务安全访问，这与近期的凭证轮换修复形成互补。  
- **桌面启动崩溃（#52735、#52764、#52753）**：因 `simple-git` 未被打包进 Electron 主进程导致启动失败，亟需在构建流程中加入该依赖或调整打包配置。  
- **工具输出压缩（#39691）**：强烈点赞（10 👍）表明社区对降低 Token 消耗、提升长对话性能有明确需求。  
- **Slack 消息格式（#8552）**：希望迁移至 Block Kit 以支持表格等富文本，提升消息可读性。  
- **Telegram Rich Messages（#44428）**：跟进最新 Bot API，期望获得更丰富的交互能力。  

## 5. Bug 与定性（今日报告的问题，按严重程度排序）  

| 严重度 | 编号 | 问题简述 | 是否已有对应 Fix PR（链接） | 备注 |
|--------|------|----------|----------------------------|------|
| **P1（阻塞）** | #52735 | Desktop app 启动崩溃：缺少 `simple-git` 模块 | 未见直接 Fix PR（可能需在构建流程中加入该依赖） | 影响所有刚更新的 Desktop 用户 |
| | #52764 | `hermes update` 产生破损的 Desktop ASAR（因 `simple-git` 添加导致） | 同上 | 与 #52735 根源相同 |
| | #52753（重复） | Windows Desktop 崩溃：同 `simple-git` 缺失 | 同上 | 重复报告 |
| | #46260 | Windows 安装程序在 “desktop” 阶段失败（npm exit code 1） | 未见 Fix PR | 可能与 Node 版本或依赖树冲突有关 |
| | #52023 | GPT‑4o‑mini / GPT‑4.1 报错 “Encrypted content is not supported with this model” | 未见 Fix PR | 需要检查模型特定参数或 SDK 版本 |
| **P2（重要）** | #36658 | Dashboard 聊天功能损坏（React 错误 #301） | 未见 Fix PR | 前端状态管理可能在最近更新中出现回退 |
| | #28004 | Telegram typing 指示器卡住（_keep_typing 竞态） | 未见 Fix PR | 需要审查长轮询清理逻辑 |
| | #48137 | Docker 终端后台在 Windows 上 `-w` 接收原始 Windows 路径导致 exit 125 | 未见 Fix PR | 跨平台路径转换问题 |
| | #48495 | Telegram 长轮询进入 CLOSE‑WAIT 状态，网关沉默不响应 | 未见 Fix PR | 需要加入连接存活探测或超时重连 |
| | #52786 | Feishu 适配器将 Markdown 表降级为纯文本 | 未见 Fix PR | 与 PR #27922（已打开）对应，等待合并 |
| | #52787（功能请求） | 最小化到系统托盘而非退出 | 未见 Fix PR | 属于功能需求而非 Bug |
| **P3（次要）** | #38240 | Skills index stale/degraded | 未见 Fix PR | 需要检查 cron/workflow 调度 |
| | #39691 | 集成 headroom‑ai 进行工具输出压缩 | 未见 Fix PR | 功能需求，尚未实现 |
| | #8552 | Slack 使用 Block Kit | 未见 Fix PR | 功能需求 |
| | #44428 | Telegram Rich Messages 支持 | 未见 Fix PR | 功能需求 |

**观察**：今日最高严重性的 Bug 均集中在 **桌面启动依赖缺失**（`simple-git`），这表明最近的依赖变更未随 Electron 打包流程同步，建议在 CI 中增加对 `apps/desktop/package.json` 的依赖校验步骤。其余 P2 问题多为跨平台交互（Telegram、Docker、Windows）及前端状态，亟需对应的修复 PR 才能避免回归。

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue/PR | 当前状态 | 是否有实现迹象（关联 PR） | 路线图判断 |
|----------|---------------|----------|--------------------------|------------|
| **工具输出压缩（headroom‑ai）** | #39691（Issue） | OPEN | 无直接 PR | 高兴趣（10 👍），建议在下一小版本中原型实现。 |
| **Slack Block Kit** | #8552（Issue） | OPEN | 无直接 PR | 社区强烈支持（9 👍），可列入即将到来的平台适配改动。 |
| **Telegram Rich Messages** | #44428（Issue） | OPEN | 无直接 PR | 跟进官方 API 10.1，列入近期平台功能更新。 |
| **最小化到系统托盘** | #52787（Issue） | OPEN | 无直接 PR | 桌面用户常见需求，可考虑在 Electron 主进程中加入托盘逻辑。 |
| **可配置的 pre‑session tool 自动调用** | #49005（Issue） | OPEN | 无直接 PR | 与记忆工具（MemPalace）等场景相关，中等优先级。 |
| **预置默认技能（profile defaults）** | PR #52809（OPEN） | OPEN | 已有 PR 实现 | 该 PR 直接解决了“配置持久默认技能”的需求，极有可能

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报 – 2026‑06‑26**  
（基于过去 24 小时的 GitHub 活动）

---

## 1. 今日速览
- 项目在过去一天保持 **高活跃度**：共有 **16 条 PR**（其中 5 条仍待合并）和 **1 条新 Issue**。  
- 代码合并与关闭的速度依旧快，今天已 **关闭 11 条 PR**，说明维护者在清理技术债务和完善功能上投入较大精力。  
- 新的功能需求（多管理员审批、CLI 审批）已经浮现，社区对 **审批工作流的灵活性** 产生了明确诉求。  
- 没有新的 Release，意味着本轮发布周期仍在准备阶段，核心改进主要通过 PR 迭代而非版本号跳变。

---

## 2. 版本发布
> **（本日无新 Release）**  
> – 项目仍在 **pre‑release** 状态，后续发布计划应关注即将合并的关键功能（审批多管理员、日志噪声削减、容器资源限制等），以便在下一个正式版本中统一发布。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR 编号 | 类型 | 关键改动 | 对项目的价值 | 链接 |
|--------|------|----------|--------------|------|
| **#2843** (已关闭) | 新 Skill – `/learn` | 提供“一键提炼可复用技能”工具，扩展了 NanoClaw 的自定义能力。 | 增强平台可编程性，降低用户自行编写 Skill 的门槛。 | https://github.com/nanocoai/nanoclaw/pull/2843 |
| **#2832** (已关闭) | 功能 – 审批 “Reject with reason” | 在审批卡片中加入 “Reject · Reject with reason” 按钮，返回拒绝原因给请求方。 | 改善人机交互，可让代理根据拒绝理由自适应。 | https://github.com/nanocoai/nanoclaw/pull/2832 |
| **#2856** (已关闭) | 功能 – 容器资源限制 | 新增 `CONTAINER_CPU_LIMIT`、`CONTAINER_MEMORY_LIMIT` 环境变量，支持 CPU / 内存上限。 | 防止单一 Agent 独占主机资源，提升多租户可用性。 | https://github.com/nanocoai/nanoclaw/pull/2856 |
| **#2854** (已关闭) | 修复 – macOS CA 挂载 | 将 `TMPDIR` 重定向，使 OneCLI 在 macOS 容器中能够正确加载 CA 证书。 | 解决 macOS 开发者的证书验证失败，提升跨平台一致性。 | https://github.com/nanocoai/nanoclaw/pull/2854 |
| **#2855** (已关闭) | 功能 – 认证容错 | 实现 Claude 订阅 (OAuth) 为主，API‑Key 为热备，自动切换并报警。 | 增强生产环境的可靠性，降低因订阅失效导致的停机风险。 | https://github.com/nanocoai/nanoclaw/pull/2855 |
| **#2817** (已关闭) | 安全 – 文件读取限制 | 通过 `realpath` 与工作区根路径校验，阻止跨工作区的 `send_file`。 | 防止潜在路径遍历攻击，提升安全基线。 | https://github.com/nanocoai/nanoclaw/pull/2817 |
| **#2815** (已关闭) | 修复 – Router JSON 解析 | `safeParseContent` 现在只解析对象，对原始 JSON 原始值保持原样。 | 消除误路由，提升规则匹配准确度。 | https://github.com/nanocoai/nanoclaw/pull/2815 |
| **#2813** (已关闭) | 性能 – Socket 响应限额 | 按字节累计响应体大小，避免因 UTF‑8 多字节字符导致的计数错误。 | 防止意外超出响应上限，提升服务稳定性。 | https://github.com/nanocoai/nanoclaw/pull/2813 |
| **#2830** (已关闭) | 维护 – 清理失效 Service 注册 | 自动回收已删除二进制对应的 launchd/systemd 单元。 | 防止系统产生僵尸服务，降低运维噪声。 | https://github.com/nanocoai/nanoclaw/pull/2830 |
| **#2472 / #2471** (已关闭) | 平台适配 – Slack “per‑thread” | 为 Slack DM 引入每条顶层消息独立会话 + 线程 ID 重写 Hook。 | 改善 Slack 多线程交互体验，提升用户对话组织度。 | https://github.com/nanocoai/nanoclaw/pull/2472 & https://github.com/nanocoai/nanoclaw/pull/2471 |

> **合计**：本轮关闭的 PR 大多围绕 **安全、资源管理、平台兼容性** 与 **新功能（Skill、审批细化）**，说明 NanoClaw 正在向 **企业级可运行性** 与 **可扩展性** 迈进。

---

## 4. 社区热点

| 编号 | 类型 | 关注点 | 关键诉求 |
|------|------|--------|----------|
| **#2857 (Issue)** | 新需求 | *审批应支持多管理员并提供 CLI 审批* | 当前审批只能发送给单一管理员，缺乏弹性。用户希望： 1) 自动轮询下一个管理员；2) 通过本地 CLI（nanobot）直接批准。<br>**链接**: https://github.com/nanocoai/nanoclaw/issues/2857 |
| **#2860 (PR)** | 日志清理 | *silence libsignal session debug spam* | libsignal 产生大量信息日志（包括密钥材料），淹没重要日志。社区要求静默这类调试输出。<br>**链接**: https://github.com/nanocoai/nanoclaw/pull/2860 |
| **#2859 (PR)** | 数据迁移 | *v2 migration crashes on older v1 installs* | 老版本缺少 `is_main` 列导致迁移失败，影响升级路径。此 PR 修复了向后兼容性。<br>**链接**: https://github.com/nanocoai/nanoclaw/pull/2859 |

> **热点分析**：审批工作流的多管理员需求是本日最具潜在业务影响的议题，涉及安全、运维与用户体验；其余热点集中在 **日志噪声** 与 **数据库迁移兼容**，均是提升生产环境可观测性与升级可靠性的关键点。

---

## 5. Bug 与稳定性

| 严重程度 | 标题 | 简要描述 | 是否已有 Fix PR | 链接 |
|----------|------|----------|----------------|------|
| **高** | `libsignal` 调试日志泄露 | Session 级别的 `console.info` 会打印密钥材料。 | 已在 **#2860** 中静默 | https://github.com/nanocoai/nanoclaw/pull/2860 |
| **中** | V2 数据迁移缺少 `is_main` 列 | 老版 1.1.0 安装在执行 `SELECT is_main` 时崩溃。 | 已在 **#2859** 中修复 | https://github.com/nanocoai/nanoclaw/pull/2859 |
| **低** | macOS OneCLI CA 挂载失效 | macOS 容器内无法找到自签 CA，导致 API 调用报错。 | 已在 **#2854** 中修复 | https://github.com/nanocoai/nanoclaw/pull/2854 |
| **低** | Socket 响应上限计数错误 | 多字节 UTF‑8 字符导致字节计数与字符计数不一致。 | 已在 **#2813** 中修复 | https://github.com/nanocoai/nanoclaw/pull/2813 |

> **总体评估**：本日报告的缺陷均已对应 PR 完成或正在审阅，未出现阻塞级别的生产崩溃。

---

## 6. 功能请求与路线图信号

| 请求来源 | 功能概述 | 与现有 PR 对应情况 | 是否可能进入下一版 |
|----------|----------|--------------------|--------------------|
| **Issue #2857** | 多管理员审批 & CLI 审批 | 暂无直接实现 PR；已存在 **#2832**（Reject with reason）展示团队在完善审批卡片，说明审批体系正被重构。 | 高 – 预计在下一个 **功能强化** 阶段实现（可能合并为 `feat(approvals): multi‑admin/cli`）。 |
| **PR #2860** | 静默 libsignal 调试日志 | 已实现，属于 **日志质量** 改进。 | 已完成，属于本次发布准备。 |
| **PR #2859** | 兼容老版迁移 | 已完成，提升升级路径可靠性。 | 已完成。 |
| **潜在需求** | “全局记忆指令”清理（PR #2824） | 正在评审中，属于 **Prompt 优化**。 | 中 – 如审稿通过，可能进入下一个 minor 版本。 |

> **路线图提示**：下一个里程碑应聚焦 **审批工作流弹性**、**Skill 体系扩展**（/learn、/add‑clidash）以及 **资源管理**（容器限额）。这些方向已有 PR 在 pipeline 中，可在 1‑2 周内进入正式 Release。

---

## 7. 用户反馈摘要

- **审批灵活性**：Issue #2857 的作者（`sirpy`）指出单点审批导致任务卡死，期望系统能自动轮询其他管理员或让本地运维通过 CLI 快速批准。此需求在实际企业部署中非常常见，尤其在轮班交接场景。
- **日志噪声**：多个社区成员在 PR #2860 的讨论中提到，`libsignal` 的调试信息已被误认为是生产日志，导致监控告警频繁。社区对 **可观测性** 的需求明显提升。
- **跨平台兼容**：macOS 开发者在 PR #2854 中反馈容器内部的 CA 证书挂载失效，说明项目在 **跨平台部署** 仍有细节需要统一处理。
- **Skill 体验**：`/learn` 与 `/add-clidash` 两个新 Skill 获得正面评价，用户认为“一键生成/展示能力”大幅降低了自定义 Bot 的门槛。

---

## 8. 待处理积压（关注点）

| 编号 | 类型 | 关键原因 | 当前状态 | 建议处理时限 |
|------|------|----------|----------|--------------|
| **#2857 (Issue)** | 功能请求 | 多管理员/CLI 审批是核心业务需求，暂无实现 PR。 | 开放 (1 天内未响应) | **2 天内** 指派负责人并开启设计讨论。 |
| **#2860 (PR)** | 待合并 | 已解决日志噪声，但仍标记为 “OPEN”。 | 待审阅 | **3 天内** 完成 Review 合并，以免阻塞发布。 |
| **#2859 (PR)** | 待合并 | 迁移兼容性修复已完成，但仍在 “OPEN”。 | 待审阅 | **3 天内** 完成 Review 合并。 |
| **#2824 (PR)** | 待合并 | “Global Memory” 指令清理，属于 Prompt 优化，可能影响已有 Skill。 | OPEN | **一周内** 完成评审，避免长时间占用 PR 队列。 |
| **#2795 (PR)** | OPEN (Skill) | `/add-clidash` skill 仍在 Review，关联的 **#2858** 正在修复安装/engine 问题。 | OPEN | **一周内** 完成双向审查，确保 skill 能随下一个 Release 推出。 |

---

### 项目健康度结论
- **活跃度高**：每日 PR 产生与合并速度快，说明核心维护团队工作投入充足。  
- **质量稳定**：大多数 Bug 已及时得到修复，且修复 PR 已进入合并阶段。  
- **需求驱动**：社区对审批工作流与可观测性有强烈诉求，已形成明确的功能方向。  
- **风险点**：仍有数条关键 Issue/PR 处于待处理状态，若不及时跟进可能拖慢下一个正式 Release 的节奏。

> **建议**：在下一个 Sprint 中优先解决 Issue #2857 与待合并的关键 PR（#2860、#2859），同步更新 Release 计划，确保新功能（多管理员审批、日志清理）能够在近期正式交付。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报 – 2026‑06‑26**  
*数据来源：近 24 小时内 Issues（50 条）/ PRs（50 条），无新版本发布。*

---

## 1. 今日速览
- **活跃度**：今日共产生 100 条更新（Issues 50、PRs 50），其中新开 Issues 33 条、已关闭 Issues 17 条；PR 中待合并 26 条、已合并/关闭 24 条，表明代码贡献与问题反馈保持较高频率。  
- **问题集中**：大多数 Issues/PRs 均为单条评论（0‑1 条），讨论深度尚不足，但出现了一些重复出现的主题（工具授权持久化、消息滚动、审批流程卡住等），说明这些是当前用户痛点的集中点。  
- **整体健康**：修复类 PR 较多（如日志可滚动、CAS 预检合并、阻塞运行终止处理），显示团队在稳定性与用户体验上持续投入；然而，仍有若干核心功能（如工具许可持久化、审批卡死）未得到彻底解决，后续需关注。

---

## 2. 版本发布
- **今日无新版本发布**。  
- 最新版本仍为之前的发布（若有需要，可参考项目的 `Releases` 页面）。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR 编号 | 标题 | 关键改进 | 链接 |
|--------|------|----------|------|
| #5278 | **fix(webui-v2): make logs page scrollable** | 修复了 Reborn WebUI v2 日志页面无法滚动的问题，提升了运维可见性。 | https://github.com/nearai/ironclaw/pull/5278 |
| #5255 | **fix(filesystem): fold CAS put directory pre-check into one statement (3→1 round‑trip)** | 将 Postgres CAS 写入的三次往返压缩为一次，降低延迟并减少锁竞争。 | https://github.com/nearai/ironclaw/pull/5255 |
| #5222 | **fix(reborn): treat parked Blocked* triggered runs as terminal-for-delivery** | 将处于 `BlockedApproval/BlockedAuth` 等待用户的运行标记为终止状态，防止 Slack 投递记录一直保持 `Failed`。 | https://github.com/nearai/ironclaw/pull/5222 |
| #5211 | **[Reborn] New responses do not automatically scroll into view** | 关闭后，确保新消息在长响应生成时能自动滚动到视图底部，改善阅读体验。 | https://github.com/nearai/ironclaw/pull/5211 |
| #5210 | **[Reborn] Sending a new message while an approval gate is open causes repeated warnings and lost message state** | 修复了在未处理的审批弹窗中连续发送新消息导致的警告循环与状态丢失。 | https://github.com/nearai/ironclaw/pull/5210 |
| #5208 | **[Reborn] Message input can become frozen while waiting for an agent response** | 解决了等待 Agent 响应时输入框被锁死的问题，恢复实时输入能力。 | https://github.com/nearai/ironclaw/pull/5208 |
| #5212 | **[enhancement] [Reborn] Show message timestamps consistently in the conversation** | 在会话中为用户与助手消息统一显示时间戳，提升审计可追溯性。 | https://github.com/nearai/ironclaw/pull/5212 |

*以上合并的 PR 主要聚焦于 **用户交互流畅性**（滚动、输入框、时间戳）与 **系统稳定性**（CAS 预检优化、阻塞运行处理），对日常使用的可靠性产生了直接正向影响。*

---

## 4. 社区热点（评论最多、反应最多的 Issues/PRs）

尽管大多数条目仅有 0‑1 条评论，但以下几个话题在今日产生了最多的互动（均为 1 条评论，且均被标记为 **OPEN**，说明尚待社区进一步讨论）：

| 编号 | 类型 | 主题 | 评论 | 链接 |
|------|------|------|------|------|
| #5276 | Issue | **Scheduled automation fails with "No thread attached"** (Daily PR Digest，0% 成功率) | 1 | https://github.com/nearai/ironclaw/issues/5276 |
| #5192 | Issue | **[Reborn] Denying a tool approval can still lead to additional tool approval requests** | 1 | https://github.com/nearai/ironclaw/issues/5192 |
| #5283 | Issue | **[Reborn] "Approve & always allow" is not persisted for nearai.web_search** | 0（但被多次提及） | https://github.com/nearai/ironclaw/issues/5283 |
| #5243 | Issue | **[Reborn] "Approve & always allow" does not persist tool permission to Settings > Tools** | 0（已关闭） | https://github.com/nearai/ironclaw/issues/5243 |
| #5196 | Issue | **[Reborn] "Ask each time" tool permission may fail with authorization error and trigger duplicate approval flow** | 1 | https://github.com/nearai/ironclaw/issues/5196 |

**共同诉求**：工具授权持久化（“Approve & always allow” 未写入 Settings → Tools）以及审批流程中的状态同步问题（拒绝后仍触发新请求、授权后仍报鉴权错误）。这些是今日社区讨论的焦点，建议维护者在后续 Sprint 中统一审视 **工具许可生命周期** 的实现。

---

## 5. Bug 与定性（今日报告的问题，按严重程度排序）

| 严重度 | 问题描述 | 关联 Issue/PR | 是否已有 Fix PR | 链接 |
|--------|----------|----------------|----------------|------|
| **高** | 计划自动化因 “No thread attached” 永久失败，导致 0% 成功率（影响核心自动化功能） | #5276 (Issue) | 暂无 | https://github.com/nearai/ironclaw/issues/5276 |
| **中** | 工具授权持久化失效（“Approve & always allow” 不写入 Settings） | #5283、#5243 (Issues) | 无直接 PR（但 #5247 按全局自动授权链接进行了改进） | https://github.com/nearai/ironclaw/issues/5283 |
| **中** | “Ask each time” 工具在授权后仍触发鉴权错误，产生重复审批流 | #5196 (Issue) | 暂无 | https://github.com/nearai/ironclaw/issues/5196 |
| **低** | 日志页面不可滚动（已修复） | #5278 (PR) | ✅ 已合并 | https://github.com/nearai/ironclaw/pull/5278 |
| **低** | 输入框在等待 Agent 响应时被冻结（已修复） | #5208 (PR) | ✅ 已合并 | https://github.com/nearai/ironclaw/pull/5208 |
| **低** | 新消息不自动滚动到视图底部（已修复） | #5211 (PR) | ✅ 已合并 | https://github.com/nearai/ironclaw/pull/5211 |

*总体来看，最高优先级的是 **#5276**（自动化调度失效），这直接影响到产品的核心价值；其次是工具许可持久化系列问题，需在下一版本中彻底解决。*

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 Issue/PR | 现状 | 路线图判断 |
|----------|----------------|------|------------|
| **工具许可持久化**（全局 “ always allow” 能否写入 Settings → Tools） | #5243、#5283、#5192、#5196 | 已有相关 UI 改进（#5247 增加了链接到全局自动授权设置），但后端持久化仍未实现。 | 高概率进入下一版本，建议在 **能力策略（capability‑policy）** 迁期中统一处理。 |
| **审批流程状态同步**（拒绝后不再触发新请求，授权后不再鉴权失败） | #5192、#5196 | 仍为开放 Issue，无直接修复 PR。 | 需要在 **审批门禁（approval gate）**模块加入状态锁定机制，列为近期改进点。 |
| **消息自动滚动 & 时间戳**（已通过 #5211、#5212 实现） | - | 已完成，可视为已交付。 | 无需后续工作。 |
| **日志页面可滚动**（已通过 #5278 实现） | - | 已完成。 | 无需后续工作。 |
| **CAS 写入优化**（已通过 #5255 完成） | - | 已完成。 | 可视为性能基线。 |

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **自动化调度不可用**：用户反馈“每次触发都会报 ‘No thread attached’，导致完全没有输出”，这直接影响了他们依赖 IronClaw 进行定期任务的场景。  
- **工具许可不持久**：多次提到点击 “Approve & always allow”后，设置页面仍显示需要再次授权，用户感到困惑并频繁被打断。  
- **审批卡住导致警告循环**：在等待审批时连续发送新消息会产生重复警告且消息状态丢失，影响对话流畅性。  
- ** UI 细节改善受欢迎**：日志可滚动、输入框不被冻结、时间戳显示均收到正面反馈，说明用户对细节打磨敏感。  

---

## 8. 待处理积压（长期未响应的重要 Issue/PRs）

| 编号 | 类型 | 主题 | 最后更新 | 备注 |
|------|------|------|----------|------|
| #5276 | Issue | Scheduled automation fails with "No thread attached" | 2026-06-26 (今日新开) | 高优先级，需尽快定位线程附着问题。 |
| #5192 | Issue | Denying a tool approval can still lead to additional tool approval requests | 2026-06-25 | 已开放 2 天，亟需审批状态机制审查。 |
| #5283 | Issue | "[Reborn] 'Approve & always allow' is not persisted for nearai.web_search" | 2026-06-26 (今日新开) | 与工具许可持久化直接相关。 |
| #5261 | Issue | [enhancement, reborn] [EPIC] Reborn capability policy: admin-shared tools & skills with per-user auth | 2026-06-26 | 史诗级任务，涉及多个子任务（#5266‑#5273），当前尚无代码提交，需跟进。 |
| #5260 | Issue | [Tracking] Reborn personal memory & self-learning — full system | 2026-06-25 | 长期跟踪项，暂无实际进展。 |

**建议**：维护者可将 **#5276**、**#5192**、**#5283** 列为本周冲刺的最高优先级 Bug；同时关注 **#5261** 能力政策 epic 的子任务进度，以确保后续功能（如工具许可持久化、细粒度审批）能够在统一框架下实现。

---

### 总结
今日 IronClaw 在 **稳定性修复** 与 **用户交互细节** 上取得了可观进展（日志滚动、输入框 unfreeze、时间戳显示、CAS 写入优化等）。然而，**核心自动化调度失效** 与 **工具许可持久化** 两大问题仍然是社区关注的热点且直接影响产品可用性。后续工作应聚焦于：

1. 快速定位并修复 #5276 中的线程附着缺陷。  
2. 完成工具许可的持久化机制（后端写入 + UI 同步），并防止重复审批触发。  
3. 推进能力政策 epic（#5261）中的子任务，为细粒度的 admin‑shared 工具与 per‑user 认证奠定基础。  

通过上述措施，项目有望在不久的将来恢复高成功率的自动化执行并提升整体用户满意度。祝开发顺利！

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## 2026-06-26 项目动态日报

LobsterAI 团队今日推进稳定、集成多域界景功能，合并了多次关键PR与导目功能优化。活跃度维持稳定，手动调整任务开关功能以及 Renderer 渲染行为虽面临小障碍。社区热烈讨论了未来扩展质询，整体项目健康度处于良好状态。

---

### 一、今日速览

整体进展稳健首个月亮，项目核心功能按时迁移，PR及版本更新同步发布，有望加强跨平台互动体验。

### 二、版本发布

**无新版本发布。** 本期主要以代码校验与环境适配为核心，确保生态可持续。

### 三、项目进展

- 今日合并和封闭了3个PR，解决了部分趋同与UI渲染出错问题，助力更流畅的用户体验演化。
- 团队特别注重Monitor（记为summary中），正同时优化任务操作流程，减少误点击返修。

### 四、社区热点

 recent 最活跃和活跃ity最高的讨论聚集在关于新扩展Source的提问和优化需求上，AR 用户提出增强中端本地交互的建议，ainly mortar 用户反馈积极。

### 五、Bug 与稳定性

| 问题描述 | 情况 | 严重性 | 当前处理方式 |
|----------|------|--------|--------------|
| 定时任务开关响应异常 | 点击失败 | 高 | 已在PR #1392合并，待处理 |
| Renderer ID问题 | 部分任务UI雪结 | 中 | 紧急特项整理，待扩展 |
| 设置保存失效 | 跨域数据填不全 | 中 | 增加回拼机制 |

| 2 发 |
| --- | --- |
| 设置主题可多选更新 | 用户希望底部主题自定义 | 高 | 由 Pinich 处理 |

### 六、功能请求与路线图

用户反馈新增中端扩展及 QQ/Discord 用户管理功能，针对 PR #2205 已做准备，晋升到下一版本计划。同时度过了功能推出排期规划阶段的讨论。

### 七、用户反馈摘要

多数用户在新设主题优选外和明确需求已有PR响应，尤其关注任务自动击启及中端数据中断控制需求，项目响应速度多有提升。

### 八、待处理积压

- #1392-use case 需进一步详细评审，评论与反馈资源梳理未闭。
- PR #2202 关闭已明确，无待理解。
- 围绕自定义扩展功能栏页设置稳定读取，可优化UI流度。

---

**参考链接**：  
[LobsterAI Issue #1392](https://github.com/netease-youdao/LobsterAI/Issues/qm1173)  
[PR #2206](https://github.com/netease-youdao/LobsterAI/Pulls/2206)  
[PR #2205](https://github.com/netease-youdao/LobsterAI/Pulls/2205)

---

**编插人注**：由主体维护于2026-06-26，持续跟进用户核心请求，确保 LobsterAI 保持用户导向核心竞争力。

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

**CoPaw 项目日报 – 2026‑06‑26**  

---

### 1. 今日速览  
- 过去 24 h **Issues 更新 27 条**（新增/活跃 17 条，关闭 10 条），**PR 更新 50 条**（已合并 20 条，待合并 30 条）。  
- 当前没有新发行版，代码基线保持在 `v1.1.12.post2`。  
- 活跃度保持在中等偏上：Issue 活跃度 ★★☆☆☆（17/27），PR 合并率 40%，整体对开发节奏无明显瓶颈。  

---

### 2. 版本发布  
> **无** – 自上次发行 (`v1.1.12.post2`) 以来未推出正式版本。所有改动均在 `main` 分支上进行，待合并的 PR 将在下一个小版本中陆续上线。  

---

### 3. 项目进展  
| 合并/关闭的关键 PR / Issue | 关注方向 | 简要说明 |
|----------------------------|----------|----------|
| **#5321** (feat(context): scroll context manager) | 长期上下文管理 | 引入基于 SQLite 的 “scroll” 检索策略，支持按需回放任意历史对话，降低上下文压缩带来的信息丢失。 |
| **#5380** (Document Langfuse Docker deployment) | 可观测性 | 完善 Langfuse 追踪文档并提供 Docker 示例，便于企业级部署和监控。 |
| **#5545** (fix: standalone "type": "null" in functionDeclaration schema) | 兼容第三方代理 | 解决 `{"type":"null"}` 单独模式对 MCP 服务器的兼容性问题，避免 Gemini 与其他代理请求失败。 |
| **#5536** (fix: kill orphaned Chrome renderer processes on browser stop) | 资源泄漏 | 彻底清理 `browser_use stop()` 后残留的 Chrome 渲染子进程，彻底解决 #5520 造成的内存泄漏回归。 |
| **#5535** (fix: don't cache content moderation errors as rejects_media) | 安全审核准确性 | 修复内容安全审核错误被错误缓存为 `rejects_media=True`，确保后续图片请求不被错误剥离。 |
| **#5526** (fix(browser): handle env‑wrapped Exec in Linux default‑browser detection) | Linux 兼容性 | 修正 `_get_linux_default_browser()` 在 `env VAR=val …` 包装下的解析错误，恢复 Linux 桌面上 `browser_use` 的正常启动。 |
| **#5538** (fix(chat): preserve assistant markdown newlines) | 前端渲染细节 | 保持流式输出的换行 formatting，防止 Markdown 新行在 Raw Fallback 中被压平。 |
| **#5525** (feat(sandbox): implement windows native sandbox) | 安全隔离 | 为 Windows 提供原生 Sandbox 实现，提升进程隔离强度，减少跨平台风险。 |

> **整体进展**：本轮合并的 PR 重点覆盖 **上下文管理、可观测性、跨平台兼容性、资源回收** 四大核心领域，直接推动了系统稳定性与功能丰富度的双重提升。

---

### 4. 社区热点  

| 热点 Issue / PR | 链接 | 评论数 | 主要诉求 / 讨论焦点 |
|----------------|------|--------|-------------------|
| **[#5345] Custom OpenAI‑compatible providers don’t support function calling** | <https://github.com/agentscope-ai/QwenPaw/issues/5345> | 8 | 要求自定义 OpenAI‑compatible provider（如 OMLX）能够完整支持 `function calling`，与 Ollama 原生支持持平。 |
| **[#5379] 通过Python命令安装后启动，直接报错 Internal Server Error** | <https://github.com/agentscope-ai/QwenPaw/issues/5379> | 6 | 用户在 Python 包管理后启动即崩溃，日志指向 `get_remote_addr(transport)`，需要定位根本原因并提供修复步骤。 |
| **[#2733] Chrome processes not properly closed after browser automation** | <https://github.com/agentscope-ai/QwenPaw/issues/2733> | 6 | 长期存在的渲染进程泄漏问题，已通过 #5536 修复，但仍是社区关注的“资源耗尽”高频议题。 |
| **[#5480] Console 长消息排版错乱（CSS layout recalculation 缺失）** | <https://github.com/agentscope-ai/QwenPaw/issues/5480> | 5 | 前端需要在长消息后自动触发 CSS 重排以恢复排版，导致每次长输出都出现页面崩塌。 |
| **[#5512] 模型提供商统计问题 – 显示 4 个提供商在线，实际只有 3 个** | <https://github.com/agentscope-ai/QwenPaw/issues/5512> | 2 | UI 计数逻辑错误，导致不合理的“在线提供商”数字，影响用户感知的可用模型数量。 |

> **社区情绪**：从这些高频讨论可以看到，**兼容性（函数调用、OpenAPI provider）**、**资源回收（Chrome 进程泄漏）**、以及 **前端细节（长消息排版）** 为当前最活跃的关注点。

---

### 5. Bug 与稳定性  

| 编号 | 标题 | 严重度 | 已有 Fix PR？ | 简要描述 |
|------|------|--------|---------------|----------|
| **#5472** (GLM‑5.x via OpenCode Go fails) | <https://github.com/agentscope-ai/QwenPaw/issues/5472> | 高 | ✅ 已关闭（已合并） | JSON‑schema 编译错误导致 GLM‑5.x 在 OpenCode Go 套餐中不可用。 |
| **#5539** (Heartbeat timeout after 120 s) | <https://github.com/agentscope-ai/QwenPaw/issues/5539> | 中 | ❌ 仍在讨论 | 心跳任务硬编码 120 s 超时导致复杂任务被提前终止。 |
| **#5528** (Linux browser tool fails with env‑wrapped Exec) | <https://github.com/agentscope-ai/QwenPaw/issues/5528> | 中 | ✅ 已合并（#5526） | 修复 `_get_linux_default_browser()` 解析包装 `Exec=` 行的缺陷。 |
| **#5403** (Browser autofill hijacks search input) | <https://github.com/agentscope-ai/QwenPaw/issues/5403> | 低 | ❌ 仍在跟踪 | 自动完成弹窗误覆盖 Model Configuration 页面的搜索框。 |
| **#5505** (MiniMax‑M3 media‑reject caching) | <https://github.com/agentscope-ai/QwenPaw/issues/5505> | 高 | ✅ 已合并（#5535） | 内容安全审核错误被错误缓存为 `rejects_media=True`。 |
| **#5543** (functionDeclaration `type":"null"` schema issue) | <https://github.com/agentscope-ai/QwenPaw/issues/5543> | 中 | ✅ 已合并（#5545） | `type:null` 单独模式导致第三方代理拒绝请求。 |

> **稳定性评估**：已关闭的关键 Bug（如 Chrome 进程泄漏、media‑reject 缓存）已获修复；在审中的是心跳超时、CSS 布局错乱等，**整体系统健康度保持在 “良好”**，但需关注长耗任务的超时限制。

---

### 6. 功能请求与路线图信号  

| 需求来源 | 关键 Feature | 关联已有 PR / Issue | 可能纳入的里程碑 |
|----------|--------------|----------------------|------------------|
| **#5484** (Support installing plugins via pip from PyPI) | 统一 pip‑install 插件机制 | 关联 PR #5525（Windows native sandbox） | 目标 **v1.2**：提供标准化的插件注册表与自动依赖解析。 |
| **#5471** (feat: generalize match pattern) | 模式通用化（模式匹配扩展） | 已合并 PR #5471 | 将在 **v1.2** 中作为 core API 稳定化。 |
| **#5342** (hard cap on tool result size) | 上下文尺寸防爆（防御性设计） | 仍在审查 | 计划作为 **v1.2** 的安全子系统，防止_context explosion。 |
| **#4887** (Add custom endpoint support for DingTalk private deployment) | 私有化 DingTalk Endpoint 支持 | 已合并 | 将作为 **v1.3** 企业版功能的一部分。 |
| **#5523** (spawn_subagent missing from Runtime 2.0 tool registry) | Runtime 2.0 迁移缺口 | 仍在审查 | 目标 **v1.3**：恢复并增强子代理发现机制。 |
| **#5512** (Model provider count UI bug) | 在线提供商计数错误 | 仍在审查 | 短期内（下个小版本）修复 UI 计数逻辑。 |

> **路线图信号**：从当前 PR、Issue 与社区讨论可知，**上下文管理、可插拔插件系统、以及安全硬ening（工具结果上限）** 是下一版（v1.2）的重点推进方向；**企业化私有化接入（DingTalk）** 与 **子代理发现** 则列入 **v1.3**‑**v1.4** 的潜在里程碑。

---

### 7. 用户反馈摘要  

- **长对话文件（>500 KB）渲染崩溃**：用户在大会话 JSON 超大时频繁遇到前端渲染异常，需要渐进式加载方案。  
- **上下文切换与功能调用失效**：自定义 OpenAI‑compatible provider 在使用 function calling 时只能返回纯文本，缺少对工具的真实调用支持。  
- **启动后 404 预览链接**（`send_file_to_user` 在 Windows 本地 App 中）导致文件无法下载，提升了使用挫riction。  
- **心跳超时**：复杂的心跳任务在 120 s 后被迫终止，导致工作流不可预期中断。  
- ** UI 小细节不足**：如 CSS 排版错乱、空状态样式缺失等，影响用户对系统整体 polished‑ness 的感受。  

> **总体满意度**：从 Issue

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报**  
*时间：2026‑06‑26*  

---

## 1. 今日速览  
- 过去 24h **Issues** 新增 47 条（新开/活跃 34，已关闭 13），PR 50 条（待合并 49，已合并/关闭 1），**无新发行版**。  
- 活跃度指标保持在 **中等‑偏高**（Issue 活跃率 72%），说明社区讨论仍在稳定推进，但 **合并压力**（49/50）表明代码审查仍是瓶颈。  
- 总体健康度：**积极**（大量 RFC/增强议题在审议） + **可控**（关闭速度略低于新增，但未出现危急阻塞）。  

---

## 2. 版本发布  
- 当日 **无新发行版**，因此不表明更新内容、破坏性变更或迁移注意事项。  

---

## 3. 项目进展  
| 合并/关闭 PR | 关键变更 | 推进的功能/修复 |
|--------------|----------|----------------|
| **#8236** (已关闭) | 修复 `voice_wake.rs` 中 `subject` 字段缺失导致 `--all-features` 编译失败 | 修复 **Channel** 编译错误，恢复 `--all-features` 可用性 |
| **#8218** (已合并) | 修复 **agent/history** 中 `tool-result` 截断算生的 underflow panic | 提升 **agent 稳定性**，防止异常崩溃导致会话中断 |
| *其余 48 条* | 多数为 RFC、文档、配置类 PR，**未合并**（仍在 PR 队列） | 这些 PR 将在后续发布中陆续落地，涉及 **delegate 模式、OTOCI 注册表、Wasm‑first runtime** 等核心方向 |

**整体进展**：本轮合并的两项 **Bug 修复** 直接提升了系统可靠性，而 **30+ 条仍在审议的 RFC** 表明项目正向 **治理、供应链安全、插件化** 等长期路线迈进。  

---

## 4. 社区热点  

| 编号 | 标题（简要） | 类型 | 评论数 | 链接 | 主要诉求 |
|------|--------------|------|--------|------|----------|
| **#6808** | *RFC: Work Lanes, Board Automation, and Label Cleanup* | RFC / Enhancement | 11 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6808> | 简化工作流路由，降低维护者手工管理成本，引入 **Work Lanes** 与 **Board Automation** |
| **#8177** | *RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance* | RFC / Security | 8 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8177> | 在容器镜像与二进制发布中引入 **硬件 PGP、离线签名、SLSA provenance**，实现 **可信供应链** |
| **#6165** | *RFC: Prefer a lighter ZeroClaw core through external integrations* | RFC / Architecture | 5 | <https://github.com/zeroclaw-labs/zeroclaw/issues/6165> | 通过 **外部技能/插件** 精简核心，摆脱 **内置工具**，实现更轻量化运行时 |
| **#8238** | *Feature: Add independent delegate mode for specialist handoffs* | Enhancement | 4 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8238> | 支持 **显式delegate模式**，让子代理在独立策略下运行 |
| **#8132** | *RFC: Replace React/Vite web UI build with Rust→Wasm framework* | Enhancement / Architecture | 2 (👍 1) | <https://github.com/zeroclaw-labs/zeroclaw/issues/8132> | 用 **Rust→Wasm** 完全取代现有的 React/Vite 前端框架，实现 **Node.js 完全脱离** |

> **共性**：这些议题均聚焦于 **治理透明化、安全可信、轻量化以及统一的插件/runtime 模型**，是项目 0.9/1.0 里程碑的关键信号。

---

## 5. Bug 与稳定性  

| 编号 | 标题 | 严重度 | 状态 | 是否已有 Fix PR | 链接 |
|------|------|--------|------|----------------|------|
| **#5903** | *MCP stdio child processes accumulate on daemon with heartbeat.enabled=true* | 高 | 受理中 | **是**（已合并 #8218） | <https://github.com/zeroclaw-labs/zeroclaw/issues/5903> |
| **#5514** | *Agent request appends each subsequent image in Telegrma when sending >1 image* | 中 | 受理中 | 否（需前端/后端协同） | <https://github.com/zeroclaw-labs/zeroclaw/issues/5514> |
| **#8312** | *fill-translations leak-repair leaves stale translations-map entries* | 高 | 受理中 | 否（仍在审议） | <https://github.com/zeroclaw-labs/zeroclaw/issues/8312> |
| **#8236** | *voice_wake.rs ChannelMessage literal missing `subject` field — breaks --all-features build* | 低 | 已关闭 (已合并) | 是（已合并） | <https://github.com/zeroclaw-labs/zeroclaw/issues/8236> |
| **#8154** | *Bug: Kimi Code (Moonshot endpoint="code") targets dead https://api.moonshot.cn/coder/v1* | 中 | 已关闭 (已修复) | 是（已合并） | <https://github.com/zeroclaw-labs/zeroclaw/issues/8154> |

> **总体**：高危 Bug 已有 2 项在本轮合并（#5903、#8236），其余仍在审议或需额外修复。系统整体 **Bug 修复速度保持在每日 1‑2 条**，相对可控。  

---

## 6. 功能请求与路线图信号  

| 编号 | 请求 | 关联 PR/Issue | 可能纳入的里程碑 |
|------|------|---------------|-----------------|
| **#8187** | *Capability‑gated WASI hardware host functions for plugins* | RFC | 预计 **v0.9**（安全强化） |
| **#8135** | *Wasm‑first plugin runtime — default‑on, capability enforcement, signed distribution* | RFC | **v0.9**（运行时默认化） |
| **#8173** | *gateway: in‑app upgrade with auto‑restart from the web dashboard* | Feature (merged #8173) | 已在 **v0.8.3** 背板中实装，后续会进入 **v0.9** 正式发布 |
| **#7743** | *support explicit target‑profile authority for delegate handoffs* | Enhancement | 与 **#8238** 合体，计划 **v0.9** |
| **#8303** | *Goal mode for bounded autonomous session work* | RFC | **v0.9‑v1.0**（高级调度） |
| **#8309** | *SkillForge orphaned — wire up or remove?* | Enhancement | 可能在 **v0.9** 中决定是否保留或剔除 |

> **信号**：大量 **RFC/Feature** 围绕 **安全、可观察性、插件化、调度模式** 交叉展开，暗示下一版本（0.9）将更倾向于 **完整的治理层、可信交付链、以及轻量化运行时**。  

---

## 7. 用户反馈摘要  

- **Telegram 多媒体问题**：多用户在 Issue #7873、#5514 中反映 **图片/文件群聊被拆分为多条请求**，导致 LLM 产生多次输出，导致 **token 膨胀、交互卡顿**。  
- **技能审计误报**：#6714 中的 `remote markdown links are blocked` 检查被指 **误伤** 市场插件（如 Cloudinary、Sanity），用户希望放宽规则或改进识别逻辑。  
- **CLI 单次运行失 telemetry**：#8146 反馈 **CLI 一次性任务** 在退出时未能把 OTLP telemetry、token 统计上报，导致监控数据缺失。  
- **模型配置失效**：#8154 提出 **Moonshot** 端点 404（`https://api.moonshot.cn/coder/v1`）已失效，用户迫切需要官方修正或提供兼容的兼容层。  
- **开发者文档同步**：#8332 通过 **Pin v0.8.2 translations + self‑init po submodule** 解决文档同步滞后问题，用户对文档可用性的满意度提升。  

> **总体情绪**：社区对 **安全、可观测、文档** 的需求持高度关注，同时对 **Beta/Alpha 管道的稳定性** 仍有诉求，尤其是 **运行时泄漏**（#5903）和 **代理/通道交互** 的可预期性。

---

## 8. 待处理积压  

| 编号 | 项目 | 重要性 | 关注点 |
|------|------|--------|--------|
| **#6808** | Work Lanes / Board Automation | P2 | 长期未决，涉及 **治理结构**，若不推进将延迟 **v0.9** 的组织层面改进 |
| **#8177** | Supply‑chain signing (SLSA) | 高 | 需要 **硬件安全模块** 与 **多方共识**，对安全审计影响深远，滞后可能影响合规发行 |
| **#6165** | Light‑core via external integrations | 中 | 关联 **技能抽离**，但当前缺少明确路线图，需要维护者评审 |
| **#8238** | Independent delegate mode | 高 | 与 **#7743** 关联，若延期会影响 **多代理协同** 设计 |
| **#8309** | SkillForge wiring decision | 中 | 与 **技能平台** 直接关联，若不处理可能导致 **代码膨胀** |
| **#8279** | Delegate bypasses allow‑list | 高 | 已关闭但还有 **安全审计** 细节未完纳，需要安全团队复盘 |
| **#8312** | Leak‑repair stale translation entries | 高 | 已报告但仍未修复，可能导致 **翻译失效** 与 **资源泄漏** |

> **提醒**：上述 Issue 多数 **创建时间> 60 天**，且 **评论/反应虽在近期但未被合并**。维护者需在 **下周内** 给出明确处理计划（是否纳入 0.9、重新排期或关闭），以防积压导致社区信任下降。

---

### 结语  
综合 **Issue 活跃度**、**PR 合并压力**、**Bug 修复速度** 与 **社区热点**，ZeroClaw 正处于 **快速迭代的过渡期**。本轮已成功解决关键 BUG 与编译阻塞，但 **治理层面的重大 RFC**、**供应链安全**、**插件化改造** 仍在规划中。维护团队应重点关注 **高积压的 RFC、安全相关议题**，并在 **本周内完成关键 PR 的审查合并**，以保持项目对外发布节奏的可预期性。  

---  

*所有链接均指向 GitHub（`zeroclaw-labs/zeroclaw`），供进一步追踪。*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*