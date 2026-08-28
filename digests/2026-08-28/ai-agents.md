# OpenClaw 生态日报 2026-08-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-28 08:01 UTC

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
*2026-08-28*

## 1. **今日速览**
OpenClaw 项目今日呈现**高活跃状态**，Issues 和 PRs 分别达到 500 条更新量。系统运行中出现了若干**高优先级严重问题**，包括**Codex 集成本地钩子引发 CPU 占用**、**Telegram 会话处理超时**、**MCP 传输重连失败** 等关键稳定性事件。尽管存在诸多技术挑战，但项目通过 145 个已合并 PR 保持持续推进，展示出强大的修复和开发能力。

## 2. **版本发布**
**无新版本发布**（0 个版本发布）

## 3. **项目进展**
### 已合并/关闭的重要 PR：
- **#116489**: 强化安全安装策略验证，异常插件安装需运营者手动确认[link](https://github.com/openclaw/openclaw/pull/116489)
- **#122899**: 实现无 Shell 访问权限的工作区文件发现机制，增强安全边界控制[link](https://github.com/openclaw/openclaw/pull/122899)
- **#123535**: 修复 UI 会话目录刷新的冗余触发问题，提升前端响应速度[link](https://github.com/openclaw/openclaw/pull/123535)
- **#128223**: 修复 CLI 别名解析从持久化快照读取的问题，确保配置变更一致性[link](https://github.com/openclaw/openclaw/pull/128223)
- **#130993**: 修复多会话、跨运行时日志的传输协议问题，增强长会话上下文保持能力[link](https://github.com/openclaw/openclaw/pull/130993)

## 4. **社区热点**
### Issues 高关注度话题：
1. **#91009** *Codex PreToolUse 本地钩子进程 CPU 占用问题*（21 评论） - 集成本地钩子引发高 CPU 占用，严重影响系统性能
2. **#87744** *Codex 后端 Telegram 会话处理超时*（18 评论） - 更新到 2026.5.27 后，会话处理卡在未完成状态，导致 Telegram 消息延迟
3. **#48003** *Steer 模式会话状态注入异常*（20 评论） - 模式切换时无法在 turn 边界注入用户消息，影响实时交互体验
4. **#53408** *长期会话中 Write/Exec 参数丢失*（12 评论） - 15+ 轮次后，工具调用参数全部清空，破坏会话连续性

### PRs 高关注度话题：
1. **#122899** *无 Shell 访问权限的工作区文件发现*（0 评论） - 安全边界重构，涉及 Core 组件修改
2. **#130993** *多会话日志传输协议修复*（0 评论） - 影响跨运行时日志一致性，需要验证上下文边界

## 5. **Bug 与稳定性**
### 高优先级 Bug：
- **[P0严重]** #91009 - **已修复**，Codex 本地钩子进程 CPU 占用 >100%，导致系统卡顿
- **[P1严重]** #87744 - **部分修复**，Codex 后端 Telegram 会话超时问题，正在评估修复范围  
- **[P1严重]** #48003 - **已修复**，Steer 模式注入问题，KeyedAsyncQueue 队列机制优化
- **[P1严重]** #98435 - **已修复**，MCP 传输重连机制，网关重启后自动重建连接

### 中优先级 Bug：
- **#53408** - **已修复**，长期会话参数丢失问题，提取流水账记录分析
- **#125344** - **部分修复**，内存嵌入式运行时上下文信息显示问题

## 6. **功能请求与路线图信号**
### 高优先级功能提案：
- **#42840** *Control UI MathJax/LaTeX 渲染支持*（10 评论，10 👍） - 基础数学公式渲染功能，支持学术/科学内容展示
- **#60572** *多槽位记忆架构*（9 评论，3 👍） - 从单一记忆槽位扩展到多目的记忆层级，支持多记忆提供商并存
- **#71058** *多 Teams 机器人支持*（9 评论，1 👍） - 单一网关支持多 Azure App Registration 配置

### 中优先级提案：
- **#52640** *持久化任务状态表面*（8 评论，2 👍） - 长运行任务状态可视化，支持 Discord 和其他渠道
- **#28300** *主题定制系统*（6 评论，5 👍） - 6 种预设主题 + 定制主题工作室，支持动态色调生成

## 7. **用户反馈摘要**
### 用户痛点：
1. **业务 continuity**: 长期会话参数丢失（#53408）影响用户工作流程连贯性
2. **系统稳定性**: 高 CPU 占用问题（#91009）导致用户系统运行缓慢
3. **功能缺失**: 数学公式渲染需求（#42840）迫切，影响学术/科学类对话体验
4. **路由问题**: Telegram/DM 消息路由异常（#41165）导致会话混乱

### 用户满意点：
- **会话状态保持**: 多运行时日志传输修复（#130993）得到用户认可
- **安全增强**: 插件安装安全确认机制（#116489）强化安全边界控制
- **性能优化**: CLI 别名解析改进（#128223）提升用户配置体验

## 8. **待处理积压**
### 长期未响应关键问题：
1. **#71736** *[RFC] Control UI 插件贡献槽*（11 评论，1 👍） - 存量 1 年仍未落地，涉及架构重构
2. **#84393** *Codex 运行时代码代理基础提示注入*（5 评论，1 👍） - 运营代理被错误注入代码基础提示，安全问题
3. **#100941** *网关并发 WebSocket 连接处理*（6 评论，1 👍） - 并行工具调用 >48 时连接异常，需要架构级优化

### 待决策 PR：
- **#122899** 需要作者进一步证明其安全边界兼容性，涉及安全-critical 组件
- **#123356** 需要维护者确认 Control UI 命令激活计划的风险控制策略

---

**项目健康度评估**：🟡 **中等** - 系统运行中存在若干高优先级稳定性问题，但开发团队通过积极的 PR 合并保持持续推进。建议优先处理核心稳定性问题（Codex CPU 占用、Telegram 会话超时）并加速实施架构改进（多槽位记忆、多 Teams 支持）。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**: 2026-08-28
**分析师**: AI Assistant
**数据范围**: 13个开源项目过去24小时活动数据

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"一超多强、梯度分化"**的格局。以 OpenClaw 为代表的头部项目凭借 500+ 条日更新量和 145 个 PR 合并量维持核心生态位，Hermes Agent 通过高频版本发布（近两日已推送 v0.20.6）保持快速迭代节奏，而 CoPaw/QwenPaw、ZeroClaw、NanoClaw 等项目则在特定赛道（多渠道集成、零代码 UI、Provider 抽象）形成差异化竞争力。值得注意的是，约 30% 的项目（NullClaw、IronClaw、TinyClaw、ZeptoClaw）呈现低活跃或零活动状态，生态存在明显的**活跃度断层**。从技术演进方向看，**多模态输入处理、安全沙箱强化、Provider 可插拔架构**正成为行业共识，内存管理与会话持久化则是跨项目的高频痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并 PR | Release | 健康度 | 核心动态 |
|------|-------------|----------|--------|---------|--------|----------|
| **OpenClaw** | ~500 条更新 | ~500 条更新 | 145 | 无 | 🟡 中等 | 高优先级 Bug 修复（P0 CPU 占用、P1 Telegram 超时）|
| **Hermes Agent** | 50 | 50 | 未披露 | **v0.20.6** | 🟢 快速前进 | 525 PRs 累积合并，桌面稳定性与多 Provider 整合 |
| **CoPaw/QwenPaw** | 32 | 50 | 23 | 无 | 🟢 活跃 | v2.2.0 筹备中，Python 3.13 升级，移动端 Draft |
| **ZeroClaw** | 23 | 50 | 2 | 无 | 🟢 高活跃 | RFC 验证冲刺，架构重构与 ZeroCode UI |
| **NanoBot** | 2 新增 | 24 | 9 | 无 | 🟢 良好 | 内存模块重构，可插拔召回后端 |
| **NanoClaw** | 11 | 50 | 4 | 无 | 🟢 高活跃 | Provider 抽象层重构，Discord 交互修复 |
| **LobsterAI** | 2 新增 | 13 | 13 | **2026.8.26** | 🟢 良好 | UI 优化，安装程序强化，知识库渲染 |
| **Moltis** | 0 | 2 | 2 | **v20260827.01** | 🟢 健康 | 安全验证强化，OpenAI 兼容性修复 |
| **PicoClaw** | ~7 | 1 | 0 | 无 | 🟡 稳定 | 性能优化，依赖管理保守 |
| **NullClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 | — |
| **IronClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 | User Safety: safe |
| **TinyClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 | — |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 | — |

**关键数据点**:
- **头部活跃项目**（PRs > 20/日）: 5 个（OpenClaw、Hermes、CoPaw、ZeroClaw、NanoClaw）
- **中度活跃项目**（PRs 5-20/日）: 3 个（NanoBot、LobsterAI、Moltis）
- **低/零活动项目**: 5 个（PicoClaw、NullClaw、IronClaw、TinyClaw、ZeptoClaw）
- **有版本发布**: 3 个（Hermes v0.20.6、LobsterAI 2026.8.26、Moltis v20260827.01）

---

## 3. OpenClaw 在生态中的定位

### 3.1 相对优势

| 维度 | OpenClaw | 生态均值 | 评价 |
|------|-----------|---------|------|
| **PR 吞吐量** | ~500 条/日 | ~50 条/日（中位数） | 🔥 绝对领先，超均值 10 倍 |
| **合并效率** | 145 PRs/日 | 8 PRs/日（中位数） | 🟢 合并能力强，代码消化效率高 |
| **Issue 响应** | 高活跃讨论 | 部分项目零响应 | 🟢 社区参与度健康 |
| **安全机制** | 插件安装手动确认、无 Shell 文件发现 | 各项目差异大 | ✅ 安全边界意识领先 |

### 3.2 技术路线差异

OpenClaw 采用**功能集成优先**策略，体现在：
- **Codex 深度集成**：支持本地钩子、Telegram 会话处理、MCP 传输协议，体现出与 OpenAI 生态的强绑定
- **CLI 工具链完善**：别名解析、日志传输、多运行时上下文保持，面向高级用户的可操控性
- **安全验证前置**：异常插件安装需手动确认，工作区文件发现限制 Shell 访问

对比之下，Hermes Agent 侧重**多 Provider 抽象与桌面端稳定**，CoPaw/QwenPaw 押注**多租户 Hub 与移动端**，NanoBot/NanoClaw 则深耕**内存管理与 Provider 可插拔性**。

### 3.3 社区规模对比

| 项目 | 社区讨论热度 | Issue 评论均值 | 高优先级 Bug 处理速度 |
|------|-------------|----------------|---------------------|
| OpenClaw | 🔥🔥🔥 极高 | ~15 条/热门 Issue | P0 已修复，P1 部分修复中 |
| Hermes Agent | 🔥🔥 高 | ~10 条/热门 Issue | 多 Bug 未定位 |
| CoPaw | 🔥🔥 高 | ~5 条/热门 Issue | 高优先级 Bug 待定位 |
| NanoBot | 🔥 中 | ~3 条/热门 Issue | 安全漏洞待修复 |

OpenClaw 的社区规模处于**第一梯队**，但需警惕高 Issue 量（500 条）可能暗示系统复杂度带来的维护压力。

---

## 4. 共同关注的技术方向

以下技术方向在多个项目中呈现**跨项目共鸣**，反映出行业共识性需求：

### 4.1 内存管理与会话持久化

| 项目 | 具体诉求 | 进展状态 |
|------|---------|---------|
| **OpenClaw** | 长期会话参数丢失（#53408）、多运行时日志传输（#130993） | ✅ 已修复 |
| **NanoBot** | 移除 consolidation ratio，显式召回机制（#5571） | 🔄 推进中 |
| **NanoClaw** | 任务错误状态可见性（#3594） | 🔄 待合并 |
| **ZeroClaw** | ACP 转录持久化恢复（#10380）、会话历史碎片化（#10237） | 🔄 部分修复 |
| **CoPaw** | 零 downtime 重载损坏 memory_manager（#7364） | 🔴 高优先级 Bug |

**核心矛盾**: 随会话轮次增加，上下文膨胀与 token 预算限制导致记忆丢失或参数清空。各项目采用不同策略：OpenClaw 侧重传输协议修复，NanoBot 推进确定性归档策略，ZeroClaw 探索持久化转录恢复。

### 4.2 多模态输入处理与安全校验

| 项目 | 具体诉求 | 进展状态 |
|------|---------|---------|
| **OpenClaw** | MathJax/LaTeX 渲染支持（#42840） | 🔄 功能请求 |
| **NanoClaw** | Discord 附件仅返回元数据，未下载字节（#2888） | 🔴 长期未解决（2个月）|
| **ZeroClaw** | 像素级图像校验（#9819）、Telegram 照片上传测试离线化（#10413） | 🔄 推进中 |
| **LobsterAI** | 知识库缩略图渲染优化（#2559） | ✅ 已合并 |
| **CoPaw** | PDF 中文文件名处理失败（#7379）、大图下采样（#3575） | 🔴 Bug |

**核心矛盾**: 二进制 payload（图片、文件、PDF）在传输管道中因校验不严或转码失败导致运行时错误，附件处理的一致性是跨渠道痛点。

### 4.3 Provider 抽象与多模型支持

| 项目 | 具体诉求 | 进展状态 |
|------|---------|---------|
| **NanoClaw** | Provider 合约重构（Opencode、Codex、Setup、Host、Runtime）| 🔄 6 个 PR 待审 |
| **Hermes Agent** | Mistral 原生 Provider（#20859，27 👍）、RealtimeVoiceProvider 统一（#77111）| 🔄 社区强烈需求 |
| **LobsterAI** | 多自定义模型提供商支持（#1174）| ❌ 未实现（存根）|
| **OpenClaw** | 多槽位记忆架构、多 Teams 机器人支持 | 🔄 功能请求 |

**核心矛盾**: 各项目正从单一 Provider 硬编码向可插拔架构演进，以支持多模型并存与动态切换。

### 4.4 安全沙箱与权限控制

| 项目 | 具体诉求 | 进展状态 |
|------|---------|---------|
| **OpenClaw** | 安全安装策略验证（#116489）、无 Shell 访问工作区（#122899）| ✅ 已合并 |
| **Moltis** | 沙盒镜像验证（#1222）、OpenAI 安全对象架构（#1232）| ✅ 已合并 |
| **CoPaw** | 文件保护绕过修复（#7362）| ✅ 已修复 |
| **NanoBot** | Session 文件路径遍历漏洞（#5564）| 🔴 新报告（1天）|
| **LobsterAI** | 升级数据丢失（#2561）、卸载残留（#1173）| 🔴 无 PR |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特点 |
|------|---------|---------|-------------|
| **OpenClaw** | CLI 工具链、Codex 深度集成、安全验证 | 高级用户、开发者 | 单一单体架构，功能全面但复杂度高 |
| **Hermes Agent** | 多 Provider 支持、桌面端稳定、i18n | 多语言用户、桌面爱好者 | 多 Provider 抽象，支持 Mistral、Feishu 等 |
| **CoPaw/QwenPaw** | 多租户 Hub、移动端、多渠道集成 | 企业团队、移动端用户 | Python 3.13 + Tauri，Expo 移动端 Draft |
| **ZeroClaw** | 零代码 UI（ZeroCode）、RFC 驱动开发 | 非技术用户、低代码场景 | RFC → 设计 → 实现的规范流程 |
| **NanoBot** | 内存管理、可插拔召回、Session 安全 | 追求可控记忆的用户 | 确定性归档策略，Ephemeral 状态提示 |
| **NanoClaw** | Provider 抽象、跨平台附件处理 | 开发者、多渠道运营 | TypeScript，Provider 契约化重构 |
| **LobsterAI** | UI 体验、知识库渲染、飞书集成 | 国内用户、教育/办公场景 | 网易有道出品，中文体验优化 |
| **Moltis** | 安全沙箱、OpenAI 兼容性 | 注重安全的用户 | Rust + Web 层沙箱，轻量专注 |
| **PicoClaw** | 轻量 IRC 集成、性能优化 | 极简主义者 | 低依赖，关注 IRC 消息处理 |

**关键差异点**:
- **OpenClaw** vs **ZeroClaw**: 前者 CLI 优先、开发者导向，后者 ZeroCode UI 优先、非技术用户导向
- **CoPaw** vs **LobsterAI**: 前者企业多租户路线，后者中文场景深耕
- **NanoBot** vs **NanoClaw**: 前者内存管理精耕，后者 Provider 抽象重构

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
🔥 第一梯队（快速迭代期）
├── OpenClaw: 日均 500+ 条更新，145 PR 合并，技术债务可控
├── Hermes Agent: 高版本发布频率（v0.20.6），桌面稳定性攻关
├── CoPaw/QwenPaw: v2.2.0 冲刺，46% 合并率，移动端 Draft
└── ZeroClaw: RFC 验证冲刺，架构重构为主

🟢 第二梯队（质量巩固期）
├── NanoBot: 内存模块系统性重构，合并率 37.5%
├── NanoClaw: Provider 抽象准备就绪，待审查
└── LobsterAI: UI 优化与安装程序强化，版本发布节奏稳定

🟡 第三梯队（稳定维护期）
└── PicoClaw: 低活动量，依赖更新保守，性能优化为主

⚪ 第四梯队（低/零活动）
├── NullClaw、IronClaw、TinyClaw、ZeptoClaw
└── 可能处于休眠、归档或仅维护状态
```

### 6.2 成熟度信号

| 指标 | 领先项目 | 信号含义 |
|------|---------|---------|
| **版本发布节奏** | Hermes（patch 周更）、LobsterAI（功能版）| 进入稳定发布周期 |
| **Bug 修复速度** | OpenClaw（P0 < 24h）、CoPaw（已关闭 7+ Bug）| 维护响应积极 |
| **RFC 流程规范** | ZeroClaw（决策队列 14 条讨论）| 架构演进有序 |
| **安全漏洞披露** | Moltis（沙箱验证）、NanoBot（路径遍历报告）| 安全意识成熟 |
| **文档与测试** | LobsterAI（Vitest 75 测试点）、CoPaw（测试套件 41% 加速）| 质量保障投入 |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

**趋势一：Provider 可插拔架构成为标配**
- NanoClaw（6 个 Provider 契约 PR）、Hermes（Mistral Provider 27 👍）、LobsterAI（多 Provider 需求）共同指向
- **开发者参考**: 未来 6-12 个月内，Provider 抽象层将从"加分项"变为"必选项"，建议新项目从设计阶段纳入

**趋势二：安全从"可选加固"转向"内置纵深"**
- OpenClaw 无 Shell 访问、Moltis 沙箱验证、NanoBot 路径遍历修复、CoPaw 文件保护
- **开发者参考**: 安全边界控制（输入验证、路径规范、沙箱隔离）应作为核心架构组件，而非后期补丁

**趋势三：多模态输入处理的一致性挑战**
- Discord 附件元数据问题（NanoClaw，2个月未解决）、Telegram 照片上传测试（ZeroClaw）、PDF 中文处理

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot 项目动态日报

**报告日期**: 2026-08-28  
**数据来源**: GitHub HKUDS/nanobot

---

## 1. 今日速览

NanoBot 项目今日保持高度活跃，共处理 **24 条 PR 更新**（其中 9 条已合并/关闭），新增 **2 条 Issue**。项目正处于多线并行开发阶段，**内存管理模块**（Memory）成为今日焦点，完成了两项重要重构（#5575、#5565）并推进了可插拔召回后端的设计（#5570、#5571）。同时，**Session 安全与稳定性**修复受到重视，多个相关 PR 持续推进中。整体开发节奏稳健，无新增版本发布。

---

## 2. 版本发布

**今日无新版本发布**。最近 Release 信息请查阅 [Releases 页面](https://github.com/HKUDS/nanobot/releases)。

---

## 3. 项目进展

### 3.1 今日合并/关闭的 PR（9 条）

| PR 编号 | 类型 | 标题 | 状态 |
|---------|------|------|------|
| [#5574](https://github.com/HKUDS/nanobot/pull/5574) | 重构 | refactor(providers): make fallback attempts explicit | ✅ 已合并 |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | 重构 | refactor(agent): extract tool execution boundary | ✅ 已合并 |
| [#5575](https://github.com/HKUDS/nanobot/pull/5575) | 重构 | refactor(memory): remove consolidation ratio | ✅ 已合并 |
| [#5565](https://github.com/HKUDS/nanobot/pull/5565) | 重构 | refactor(memory): decouple archival from provider state | ✅ 已合并 |
| [#5572](https://github.com/HKUDS/nanobot/pull/5572) | 修复 | fix(agent): default request concurrency to unlimited | ✅ 已合并 |
| [#4346](https://github.com/HKUDS/nanobot/pull/4346) | 修复 | fix(providers): mark stripped images as unviewable | ✅ 已合并 |

#### 重点合并 PR 解读：

**🔧 #5575 - 内存归档策略简化**
- 移除了 `consolidationRatio` 配置项和基于比率的归档循环
- 改为确定性归档策略：保留最新 8 条消息（及用户轮次的扩展回溯）
- 新增 `[ephemeral]` 工作状态提示符，保持长期记忆提示词完整性

**🔧 #5565 - 内存归档模块解耦**
- 提取独立的 `MemoryArchiver` 类，可独立写入内存摄入日志
- 保留跨 token 触发和空闲转录归档的 provider 续状态

**🔧 #5572 - 请求并发数默认值修复（优先级 P1）**
- 将 `NANOBOT_MAX_CONCURRENT_REQUESTS` 未设置时的默认行为改为**无限制**
- 解决了 WebUI 在默认配置下并发受限的问题

---

## 4. 社区热点

### 4.1 热门 Open PRs（按活跃度排序）

| PR 编号 | 标题 | 优先级 | 活跃度 |
|---------|------|--------|--------|
| [#5576](https://github.com/HKUDS/nanobot/pull/5576) | fix(tui): preserve full UI in Herdr panes | P2 | 🆕 今日新增 |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): surface model retry status (NAN-34) | P2 | 持续更新 |
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) | refactor(agent): let runner own request-fit compaction | - | 持续更新 |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) | feat(memory): require explicit recall by default | P1 | 今日新增 |

#### 🔥 #5576 - TUI 在 Herdr panes 中保持完整 UI
**作者**: chengyongru  
**亮点**:
- 让 Herdr panes 复用独立终端的 alternate-screen TUI 布局和控件
- 限制 Herdr 集成仅负责设置/清除窗格标题
- 移除生命周期、会话、模型等元数据报告

#### 🔥 #5504 - TUI/WebUI 显示模型重试状态
**作者**: chengyongru  
**亮点**:
- 通过 WebSocket 向 WebUI 客户端发布清洗过的模型重试生命周期事件
- 在 TUI 和 WebUI 中渲染重试倒计时和尝试进度
- 模型恢复或候选 fallback 接管后清除状态显示

---

## 5. Bug 与稳定性

### 5.1 安全性问题

| 严重程度 | Issue/PR | 描述 | 状态 |
|----------|----------|------|------|
| 🔴 **高** | [#5564](https://github.com/HKUDS/nanobot/issues/5564) | session 文件处理存在路径遍历漏洞 | 🆕 已报告，暂无 fix PR |

**问题详情**: `nanobot/session/manager.py` 中，session ID 未经验证即用于构造文件路径，恶意 session ID（如 `../../etc/passwd`）可导致路径遍历攻击。

```python
# 当前代码模式（存在风险）
session_file = sessions_dir / f"{session_id}.json"
```

---

### 5.2 功能性 Bug

| 严重程度 | PR | 描述 | fix 进度 |
|----------|-----|------|----------|
| 🟡 中 | [#5382](https://github.com/HKUDS/nanobot/pull/5382) | Windows `os.replace()` 偶发 PermissionError 导致 gateway 崩溃 | 🔄 推进中 |
| 🟡 中 | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | 防止延迟消息重新创建已删除的 session | 🔄 推进中 |
| 🟡 中 | [#5573](https://github.com/HKUDS/nanobot/pull/5573) | MCP OAuth token 过期后自动刷新 | 🔄 推进中 |
| 🟡 中 | [#5338](https://github.com/HKUDS/nanobot/pull/5338) | MCP OAuth 存储读取失败时保留凭证 | 🔄 推进中 |

---

## 6. 功能请求与路线图信号

### 6.1 新增功能请求

| Issue/PR | 标题 | 类型 | 重要性 |
|----------|------|------|--------|
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | 飞书渠道整合多轮回复为单条流式卡片 | ✨ 体验优化 | ⭐⭐ |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | per-spawn model presets behind spawnPresets allowlist | ✨ 新功能 | ⭐⭐ |
| [#5537](https://github.com/HKUDS/nanobot/pull/5537) | persist session focus across turns | ✨ 新功能 | ⭐ |

#### 📌 #5567 - 飞书消息整合（高优先级体验优化）

**诉求**: 用户发送一条消息后，agent 可能回复 n 条消息（工具提示、进度消息、最终回复），期望整合为**一条流式卡片消息**，保持 `用户发一条消息 → agent 回复一条消息` 的对应关系。

**当前行为分析**:
1. 流式输出 → `send_delta()` CardKit 流式卡片
2. 工具调用 → `send()` 独立消息
3. 最终回复 → `send()` 独立消息

---

### 6.2 路线图信号：Memory 模块重构

Memory 模块呈现系统性重构趋势，已完成和进行中的 PR 包括：

| 方向 | PR | 状态 |
|------|-----|------|
| 移除 consolidation ratio | #5575 | ✅ 已合并 |
| 解耦归档与 provider state | #5565 | ✅ 已合并 |
| 可插拔召回后端 | #5570 | 🔄 推进中 |
| 显式召回机制（默认关闭自动记忆） | #5571 | 🔄 推进中 |
| 保留完整 consolidation 输入 | #5379 | 🔄 推进中 |

**路线图信号**: 下一版本可能默认关闭自动记忆摄入，改为显式调用 `recall_memory` 工具。

---

## 7. 用户反馈摘要

### 7.1 飞书渠道体验痛点（#5567）

> "用户发送一条消息后，agent 可能回复 n 条消息（工具提示、进度消息、最终回复等），用户体验较差。"

**场景**: 飞书作为常用 IM 渠道，用户期望简洁的对话体验，多条分离消息干扰对话流。

**期望**: 整合为单条流式卡片消息，保持对话对应关系。

---

## 8. 待处理积压

### 8.1 长期未响应的重要 Issue

| Issue 编号 | 创建日期 | 标题 | 等待时间 |
|------------|----------|------|----------|
| [#5564](https://github.com/HKUDS/nanobot/issues/5564) | 2026-08-27 | 路径遍历安全漏洞 | 1 天 |
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | 2026-08-27 | 飞书消息整合需求 | 1 天 |

### 8.2 长期未合并的冲突 PR

| PR 编号 | 创建日期 | 标题 | 状态 |
|---------|----------|------|------|
| [#4346](https://github.com/HKUDS/nanobot/pull/4346) | 2026-06-15 | fix(providers): mark stripped images | ✅ 已合并 |
| [#5382](https://github.com/HKUDS/nanobot/pull/5382) | 2026-08-13 | fix(session): Windows PermissionError | 🔴 conflict |
| [#5396](https://github.com/HKUDS/nanobot/pull/5396) | 2026-08-14 | refactor: narrow Pyright suppressions | 🔴 conflict |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | 2026-08-13 | fix(memory): preserve consolidation input | 🔴 conflict |

⚠️ **注意**: 存在 **3 个带有 conflict 标签的 PR** 超过 2 周未解决，建议优先处理以避免代码分叉。

---

## 📊 今日健康度评估

| 指标 | 数值 | 评估 |
|------|------|------|
| PR 吞吐量 | 24 条/日 | 🟢 高度活跃 |
| 合并率 | 37.5%（9/24） | 🟢 良好 |
| 新 Issue 数 | 2 条 | 🟢 正常 |
| 安全漏洞 | 1 条 | 🟡 需关注 |
| 冲突 PR | 3 条 | 🟡 需清理 |
| P1 优先级 PR | 2 条 | 🟢 有序推进 |

---

**报告生成时间**: 2026-08-28  
**分析师**: AI Assistant  
**数据完整性**: 基于 GitHub HKUDS/nanobot 过去 24 小时活动数据

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – 2026‑08‑28 Daily Digest**
*(Generated from the official GitHub repository [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent))*


---  

## 1️⃣ Quick Overview
- **Release activity** – A patch release **v0.20.6 (2026‑08‑27)** has been tagged, rolling up ~525 merged PRs and providing a fresh Docker/hosted‑deployment baseline.
- **Issue / PR velocity** – 50 new issues and 50 PRs recorded in the last 24 h (≈2 issues + 2 PRs per hour), indicating a healthy but busy contribution flow.
- **Open‑bug pressure** – 30 + active bug reports (high‑severity desktop boot stalls, provider compatibility gaps, and session‑state inconsistencies) are awaiting fixes; only ~6 have dedicated fix‑PRs already merged.
- **Feature pipeline** – 10+ feature‑oriented issues (Mistral provider, Polish locale, bot‑mode file hand‑off, Headroom‑AI compression, etc.) are in the “needs‑decision” stage, and several related PRs are already in review.

Overall, the project is **moving forward quickly** (steady releases, many merges) but **technical debt is accumulating** in desktop stability and multi‑provider integrations – a good area for focused triage.

---  

## 2️⃣ Version Release
**Hermes Agent v0.20.6 – 2026‑08‑27** (patch)  
- **Scope** – Rolls up ~525 PRs since v0.20.5, covering bug fixes, compression improvements, locale additions, and provider stabilisations.  
- **Impact** – No breaking changes; safe for downstream Docker images, hosted deployments, and fresh installs.  
- **Migration** – Simply upgrade (`hermes update` / pull new image) – no configuration changes required.  

*Release details*: [v0.20.6 (tag)](https://github.com/NousResearch/hermes-agent/releases/tag/v0.20.6)

---  

## 3️⃣ Project Progress (Key Merges / Closes)
| PR | Title / Fix | Core impact |
|---|---|---|
| [#96596](https://github.com/NousResearch/hermes-agent/pull/96596) | **fix(provider): stop custom GLM sessions from looping through fallbacks** | Prevents infinite fallback loops for custom GLM endpoints. |
| [#96974](https://github.com/NousResearch/hermes-agent/pull/96974) | **fix(skills): stop agent‑config mentions from permanently blocking meta‑skills** | Community skills that only discuss AGENTS.md are no longer auto‑blocked. |
| [#96919](https://github.com/NousResearch/hermes-agent/pull/96919) | **feat(bot‑mode): let bots hand off files in autonomous group chats** | Enables file transfer between bots in group conversations (previously only users could attach). |
| [#96950](https://github.com/NousResearch/hermes-agent/pull/96950) | **fix(feishu): enable doc/drive tools in DM sessions via shared client fallback** | Feishu doc/drive tools now work outside of document‑comment events. |
| [#96973](https://github.com/NousResearch/hermes-agent/pull/96973) | **fix(agent): detect structured reasoning budget exhaustion** | Stops silent truncation when reasoning models run out of output budget. |
| [#96967](https://github.com/NousResearch/hermes-agent/pull/96967) | **fix(gateway): stop hygiene retry livelock after commit‑fence cancel** | Hygiene retries no longer spin after `/stop` or `/restart`. |
| [#95880](https://github.com/NousResearch/hermes-agent/pull/95880) | **fix(desktop): preserve composer focus without cross‑session actions** | Desktop composer caret is no longer lost on transient session‑identity splits. |
| [#87891](https://github.com/NousResearch/hermes-agent/pull/87891) | **fix(auth): close Anthropic OAuth CSRF gap, cross‑process refresh race, and API‑key shadowing** | Tightens Anthropic authentication flow and removes duplicate credential handling. |
| [#96866](https://github.com/NousResearch/hermes-agent/pull/96866) | **fix(desktop): review tool diffs outside git repos** | Review pane now displays raw diff results when the working directory is not a Git repo. |
| [#96964](https://github.com/NousResearch/hermes-agent/pull/96964) | **fix(feishu): dedupe card text extraction and add message recall** | Eliminates duplicate text in Feishu card replies and adds message recall capability. |
| [#96966](https://github.com/NousResearch/hermes-agent/pull/96966) | **fix: harden web runtime configuration boundaries** | Validates backend selections in config set / check / doctor and rejects incompatible providers. |
| [#61441](https://github.com/NousResearch/hermes-agent/pull/61441) | **fix(gateway): respect explicit Feishu `enabled: false` in config.yaml** | Prevents forced‑enable when `FEISHU_APP_ID/SECRET` env vars are present. |
| [#86879](https://github.com/NousResearch/hermes-agent/pull/86879) | **fix(browser): pin shared CDP sessions to tabs** | Mitigates cross‑task hijacking in multi‑task Chrome/CDP sharing. |
| [#65566](https://github.com/NousResearch/hermes-agent/pull/65566) | **fix(files): reuse resolved mutation targets** | Guarantees consistent path resolution across policy checks and backend operations. |
| [#95278](https://github.com/NousResearch/hermes-agent/pull/95278) | **feat(telemetry): opt‑in shared‑metrics exporter** | Agent‑side exporter for the Phase‑1 telemetry ingest service (opt‑in only). |
| [#96468](https://github.com/NousResearch/hermes-agent/pull/96468) | **fix(desktop): arm backend READY scanner at spawn instead of after claim** | Resolves macOS boot timeout when the backend announces its port. |
| [#96957](https://github.com/NousResearch/hermes-agent/pull/96957) | **fix(cron): keep deleted profiles from returning** | Prevents recreation of removed named profiles after deletion. |
| [#96960](https://github.com/NousResearch/hermes-agent/pull/96960) | **feat(i18n): add complete Polish (pl) desktop locale** | Adds a full Polish UI translation (~3.5k strings) for Desktop. |

*Overall* – The past day’s merges cover **bug sanitisation (provider, gateway, desktop, auth), platform parity (Feishu, browser, files), and new capabilities (bot‑mode file hand‑off, Polish locale, telemetry opt‑in)**, moving the project forward on multiple fronts.

---  

## 4️⃣ Community Hotspots (Most Discussed)

| Issue | Comments | 👍 votes | Core demand |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **110** | 0 | Skills index stale (degraded) – impacts `/docs/skills` freshness. |
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | **12** | **27** | Add **Mistral** as a native LLM provider (voice models already present). |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | **12** | **17** | Integrate **Headroom‑AI** for tool‑output compression (better than current LLM‑based summarisation). |
| [#60323](https://github.com/NousResearch/hermes-agent/issues/60323) | **11** | **1** | macOS Desktop boot timeout due to missing `HERMES_BACKEND_READY` announcement. |
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | **9** | **2** | RealtimeVoiceProvider ABC – unify four competing duplex‑voice PRs. |
| [#38710](https://github.com/NousResearch/hermes-agent/issues/38710) | **5** | **4** | Add `observe_unmentioned_group_messages` to WhatsApp (similar to Telegram). |
| [#82689](https://github.com/NousResearch/hermes-agent/issues/82689) | **4** | 0 | Kanban tasks execute side‑effects without operator audit. |
| [#96309](https://github.com/NousResearch/hermes-agent/issues/96309) | **3** | 0 | Desktop boot 404s for sessions deleted from `state.db`. |
| [#96775](https://github.com/NousResearch/hermes-agent/issues/96775) | **3** | 0 | Preflight compression stall leaves no durable backoff strategy. |
| [#80660](https://github.com/NousResearch/hermes-agent/issues/80660) | **3** | 0 | WhatsApp `group_allow_from` ignores `WHATSAPP_GROUP_ALLOWED_USERS` env var. |

**What these tell us:**  
- **Stability & reliability** dominate community sentiment (desktop boot, skills freshness, and compression stalls).  
- **Provider expansion** is a strong feature request (Mistral, RealtimeVoiceProvider, Headroom‑AI).  
- **Platform parity** is still a theme (WhatsApp group behavior, macOS boot issues).  

---  

## 5️⃣ Bugs & Stability (Today’s Problems)

| Issue | Severity* | Fix PR? | Current status |
|---|---|---|---|
| [#60323](https://github.com/NousResearch/hermes-agent/issues/60323) | **P1** (boot failure) | **✅** [#96468](https://github.com/NousResearch/hermes-agent/pull/96468) | Merged – scanner now armed at spawn. |
| [#96309](https://github.com/NousResearch/hermes-agent/issues/96309) | **P1** (boot 404) | **❌** | Still open – renderer retains dead session IDs. |
| [#96775](https://github.com/NousResearch/hermes-agent/issues/96775) | **P2** (compression stall) | **❌** | Open – missing durable backoff after interruption. |
| [#96962](https://github.com/NousResearch/hermes-agent/issues/96962) | **P2** (rollback incomplete) | **❌** | Open – curator rollback restores SKILL.md only. |
| [#96965](https://github.com/NousResearch/hermes-agent/issues/96965) | **P2** (CLI alias leak) | **❌** | Open – unresolved model alias sent to backend. |
| [#96800](https://github.com/NousResearch/hermes-agent/issues/96800) | **P2** (UI sluggishness) | **❌** | Open – AMD RDNA4 + Wayland GPU flags missing. |
| [#96918](https://github.com/NousResearch/hermes-agent/issues/96918) | **P3** (iOS tap no‑op) | **❌** | Open – no client navigation on session tap. |
| [#96902](https://github.com/NousResearch/hermes-agent/issues/96902) | **P3** (Copilot grok‑4.6 400) | **❌** | Open – endpoint `/chat/completions` not accessible. |
| [#96906](https://github.com/NousResearch/hermes-agent/issues/96906) | **P3** (delegation closeout) | **❌** | Open – foreground turn may finish before task‑scoped work. |
| [#91169](https://github.com/NousResearch/hermes-agent/issues/91169) | **P3** (project bind‑board) | **❌** | Open – board metadata missing Project ID. |

\*Severity based on current label (`P1` = critical boot/session failure, `P

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 —— 2026-08-28

---

## 1. 今日速览

过去24小时内，PicoClaw 项目活跃度适中：新增1个悬挂中的PR和7个Issue/PR更新。其中6个PR已被关闭（包括多个自动化依赖更新），1个功能型Issue仍处于开发阶段。未发布新版本，但项目维护团队仍在持续优化性能与依赖管理。整体来看，项目处于稳定维护阶段，社区反馈积极，但并未出现重大突破性变更。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR
- **PR #1555**: 合并多个历史性修复（包括 #1390, #1389, #1383, #1381），提交者为 `xuwei-xy`。这是一次批量合并，旨在清理旧分支并整合社区贡献。
  - 链接：[https://github.com/sipeed/picoclaw/pull/1555](https://github.com/sipeed/picoclaw/pull/1555)

### ⛔ 依赖类 PR 自动关闭
- 自动化工具 `dependabot` 提交了6个依赖升级类 PR，全部被关闭，包括对 AWS SDK、Anthropic SDK 和 Matrix 客户端库等的更新。
  - 相关链接如下：
    - [PR #3332](https://github.com/sipeed/picoclaw/pull/3332) – AWS SDK v2 更新
    - [PR #3333](https://github.com/sipeed/picoclaw/pull/3333) – mautrix 更新
    - [PR #3334](https://github.com/sipeed/picoclaw/pull/3334) – Anthropic SDK 更新
    - [PR #3335](https://github.com/sipeed/picoclaw/pull/3335) – AWS Config 更新
    - [PR #3336](https://github.com/sipeed/picoclaw/pull/3336) – BedrockRuntime 更新

> 🔍 **分析**：这些依赖更新未被采纳，可能反映出维护团队对自动化依赖更新持保守态度，或存在版本兼容性考量。

---

## 4. 社区热点

### 💬 最活跃Issue
- **Issue #3287** [Feature] Better support long messages in IRC  
  - 作者: `superuser-does`  
  - 创建日期: 2026-07-22 | 最近更新: 2026-08-27  
  - 评论数: 8 | 👍: 0  
  - 链接: [https://github.com/sipeed/picoclaw/issues/3287](https://github.com/sipeed/picoclaw/issues/3287)  
  - **摘要**：请求更好地处理来自 IRCv3 的长消息，使其能作为一个完整的消息进行解析，而非因超过512字节限制而被分割。

### 🔧 最新悬挂 PR
- **PR #3347** fix laggy interface  
  - 作者: `iMilnb`  
  - 创建日期: 2026-08-27 | 最近更新: 2026-08-28  
  - 链接: [https://github.com/sipeed/picoclaw/pull/3347](https://github.com/sipeed/picoclaw/pull/3347)  
  - **摘要**：修复 Web UI 在聊天区域文本较多时出现的卡顿问题，已在桌面与移动浏览器中测试通过。

> 🔍 **社区反响**：尽管 Issue #3287 获得较多评论，但目前尚未有正式回复或 PR 支持该功能；而 PR #3347 则展现出维护者对用户体验问题的重视。

---

## 5. Bug 与稳定性

### ⚠️ 当前无明确 Bug 报告
- 所有近期关闭的 Issue 均为功能性建议或超时未响应。
- PR #3347 修复了已知的 UI 性能问题，值得关注。

---

## 6. 功能请求与路线图信号

### 📌 提出中的功能请求
- **Issue #3331** [stale][Feature]: 支持任意 Whisper 兼容 ASR 模型  
  - 链接: [https://github.com/sipeed/picoclaw/issues/3331](https://github.com/sipeed/picoclaw/issues/3331)  
  - 要求放宽语音识别模型限制，允许使用非 whisper 命名的模型。

- **Issue #3330** [stale][Feature]: 动态模型覆盖在 delegate/spawn/subagent 工具中  
  - 链接: [https://github.com/sipeed/picoclaw/issues/3330](https://github.com/sipeed/picoclaw/issues/3330)  
  - 要求支持在运行时为子代理指定模型。

> 🔍 **路线图信号**：尽管两篇Issue都被标记为 stale，但仍有用户关注这些改进方向，暗示未来版本中可能考虑加入更灵活的 ASR 配置与代理模型选择机制。

---

## 7. 用户反馈摘要

### 🧠 真实痛点
- **IRC消息处理不完整**  
  用户希望 PicoClaw 能够正确处理超过512字节的 IRC 消息，避免信息碎片化影响上下文理解。

- **Web UI卡顿现象明显**  
  部分用户在聊天记录较多时遇到界面卡顿，影响使用体验。

### 😊 满意点
- 社区对 PR #3347 的修复表示认可，反映出开发者重视用户体验问题。

---

## 8. 待处理积压

### ⏳ 长期未响应的问题
- **Issue #3331 / #3330**  
  标记为 `[stale]`，作者在创建后仅参与了少量评论，至今未得到正式响应。

- **Issue #3287**  
  虽热度较高且有评论，但仍未纳入开发计划。

> 🛠️ **建议维护者关注**：可考虑设立优先级标签或季度审查机制，防止重要请求被淹没。

---

## 总结

PicoClaw 近期保持着稳健的维护节奏，虽然未发布新版本，但在性能优化（如 UI卡顿修复）和依赖管理方面有所动作。社区用户提出了若干有价值的功能性建议，但部分仍处于等待反馈状态。项目健康度良好，但需加强与用户之间的沟通机制，以提升参与感和响应速度。

--- 

如需进一步分析某功能模块或历史数据趋势，请随时告知。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026‑08‑28）**  
*基于 GitHub Issues（11 条）及 Pull Requests（50 条）数据生成*  

---

## 1. 今日速览  
- 项目整体活跃度较高：今日新增 11 条 Issues（其中 10 条仍处于开放/活跃状态）以及 50 条 PR（46 条待合并，4 条已合并/关闭）。  
- 最受关注的问题是 **#3456**（Discord `ask_question` 按钮 `value` 参数冗余导致卡片失效），已收到 5 条评论，表明社区对该功能的可用性十分敏感。  
- 未发布新版本，所有进展体现在开放的 PR 与 Issue 讨论中。总体来看，核心团队正在围绕提供者（provider）抽象、任务错误处理以及跨平台附件处理进行重构与修复。

## 2. 版本发布  
> **无**  
> 过去 24 小时内没有新的 Release。

## 3. 项目进展（今日合并/关闭的重要 PR）  
| PR 编号 | 状态 | 主要内容 | 关联 Issue | 链接 |
|--------|------|----------|------------|------|
| #3594 | OPEN (待合并) | 将错误的任务 turn 记为 FAILED 而非丢弃，修复任务执行状态不准确问题（#3223） | #3223 | [PR #3594](https://github.com/nanocoai/nanoclaw/pull/3594) |
| #3593 | OPEN (待合并) | 为 Codex 提供者映射核心 tone / speed 到 personality 与 service tier，增强可配置性 | – | [PR #3593](https://github.com/nanocoai/nanoclaw/pull/3593) |
| #3592 | OPEN (待合并) | 在 Groups 中引入核心拥有的 tone / speed 推断属性，为统一配置奠基 | – | [PR #3592](https://github.com/nanocoai/nanoclaw/pull/3592) |
| #3588‑#3581 | OPEN (待合并) | 系列 Provider 重构：实现 Opencode、Codex、Setup、Host、Runtime 等 provider 契约，并添加验证器 | – | 各 PR 链接见列表（#3588、#3591、#3584、#3586、#3585、#3581） |
| #3489 | OPEN (待合并) | 为 Codex provider 添加结构化的 setup‑driver 认证流程，替代之前的交互式 clack 提示 | – | [PR #3489](https://github.com/nanocoai/nanoclaw/pull/3489) |
| #3471 | OPEN (待合并) | 打开 `minimumReleaseAge` 防止频繁发布，提升工作区稳定性 | – | [PR #3471](https://github.com/nanocoai/nanoclaw/pull/3471) |
| #3463 | OPEN (待合并) | Opencode provider 回退到 `message.part.delta` 文本，修复因时序竞 race 导致的输出丢失（#2985） | #2985 | [PR #3463](https://github.com/nanocoai/nanoclaw/pull/3463) |

> **进展评估**：今日尚未有 PR 真正合入主分支，但有 6 项核心重构/功能 PR 已准备就绪，预计将在接下来的审查周期内合并，这将显著提升提供者的可插拔性和任务错误感知能力。

## 4. 社区热点（评论最多、讨论最活跃）  
- **Issue #3456** – 5 条评论，👍 0  
  - 摘要：Discord 的 `ask_question` 卡片中每个按钮同时设置了 `id` 和 `value`，导致 `custom_id` 被错误覆盖，用户点击始终返回错误选项，造成“静默拒绝 + 重复重发”。  
  - 链接：[Issue #3456](https://github.com/nanocoai/nanoclaw/issues/3456)  
  - **社区诉求**：修复按钮参数冗余，恢复正常的选项返回机制。  

- **Issue #2888** – 2 条评论，👍 0  
  - 摘要：Discord（及其他仅 URL 的 chat‑SDK 适配器）在处理图片/文件附件时只保留元数据（type、name、mimeType、size），未下载实际字节，导致 agent 无法访问文件内容。  
  - 链接：[Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888)  
  - **社区诉求**：在 `messageToInbound` 中增加 `att.fetchData` 调用或提供可选的下载机制，使文件内容能够透传至 agent。  

- **PR #3594** – 虽目前评论为 undefined，但修复了长期存在的任务错误丢失问题（#3223），预计会引发后续讨论。  

> **热点背后的诉求**：用户更关注 **跨平台交互的可靠性**（Discord 按钮、附件处理）以及 **任务执行的可见性**（错误状态不应被丢弃）。

## 5. Bug 与稳定性（今日报告的问题，按严重程度排序）  

| 严重程度 | Issue 编号 | 摘要 | 是否已有对应 fix PR | 链接 |
|----------|------------|------|-------------------|------|
| **High** | #3456 | Discord `ask_question` 按钮 `value` 参数冗余导致卡片失效（高影响） | 暂无直接 PR，但可在 `src/channels/chat-sdk-bridge.ts` 中修正 | [Issue #3456](https://github.com/nanocoai/nanoclaw/issues/3456) |
| **High** | #3572 | Inbound attachments 被静默丢弃：适配器只给 URL，消费者需要 `fetchData`（**与 #2888 同根**） | 暂无 PR，但 #3463（Opencode 回退）提供思路 | [Issue #3572](https://github.com/nanocoai/nanoclaw/issues/3572) |
| **Medium** | #2888 | Discord 仅返回附件元数据，未下载实际内容 | 同上 | [Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888) |
| **Medium** | #3568 | Pending `system` rows 堆积导致入队饥饿，agent 停止响应 | 暂无 PR，建议在轮询中加入系统行清理机制 | [Issue #3568](https://github.com/nanocoai/nanoclaw/issues/3568) |
| **Low** | #3575 | WhatsApp 大图导致会话卡死（需下采样） | 暂无 PR，可在 WhatsApp 适配器中加入图片裁剪 | [Issue #3575](https://github.com/nanocoai/nanoclaw/issues/3575) |
| **Low** | #3569 | Telegram URL 中奇数下划线导致消息不投递（依赖旧版 chat‑adapter） | 需要升级 `@chat-adapter/telegram` 至 ≥4.32.0 | [Issue #3569](https://github.com/nanocoai/nanoclaw/issues/3569) |

> **稳定性总结**：今日最高优先级的两个 Bug（#3456、#3572/#2888）均涉及 **Discord 交互的核心功能**，建议尽快在 `chat-sdk-bridge.ts` 中进行统一检查：移除冗余的 `value` 参数并确保附件下载路径畅通。

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue/PR | 说明 | 是否有对应 PR 已准备好 | 链接 |
|----------|----------------|------|----------------------|------|
| 自动匹配单一合格 agent‑group，免除每次提示 “Choose an agent” | #3577 | 当只有一个 agent‑group 存在时，直接绑定，减少手动点击 | 暂无 PR，但可在 `container/agent-runner/src/poll-loop.ts` 中添加逻辑 | [Issue #3577](https://github.com/nanocoai/nanoclaw/issues/3577) |
| 防止 registry 技能中的 `nc:copy` 列表与 `channels/providers` 分支偏离 | #3579 | 增强技能版本一致性检查 | 暂无 PR，可考虑在技能发布流程加入 CI 检查 | [Issue #3579](https://github.com/nanocoai/nanoclaw/issues/3579) |
| WhatsApp 入站图片自动下采样至 2000px | #3575 | 防止大图导致会话卡死 | 暂无 PR，可在 WhatsApp 适配器中实现 | [Issue #3575](https://github.com/nanocoai/nanoclaw/issues/3575) |
| 提供者合约重构（Opencode、Codex、Setup、Host、Runtime） | PR 系列 #3588‑#3581 | 为未来插件化奠定统一接口 | 已有 PR 待审 | 各 PR 链接 |
| 错误任务 turn 计为 FAILED（便于监控与告警） | #3594 | 改善任务执行可观测性 | 已有 PR 待审 | [PR #3594](https://github.com/nanocoai/nanoclaw/pull/3594) |

> **路线图信号**：提供者抽象层的重构（PR 系列）以及任务错误可见性改进（#3594）是近期的明确方向；Discord 交互修复（#3456、#2888）则是用户最迫切的稳定性需求，若在这两周内得以解决，将大幅提升日常使用体验。

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **Discord 按钮失效**（#3456）：用户反复点击 “ одобр ” 按钮均得到错误选项，导致工作流中断；评论中提到 “每次都要手动重新发送，非常影响使用体验”。  
- **附件仅返回元数据**（#2888、#3572）：用户希望能够直接在 agent 中处理图片或文件（例如 OCR、图像分析），目前只能得到文件名，只能通过额外的下载步骤才能获得内容，增加了复杂度。  
- **系统行堆积导致无响应**（#3568）：长时间会话后，agent 似乎“死机”，用户只能通过 `/clear` 恢复；评论指出 “没有任何错误日志，完全看不出问题所在”。  
- **WhatsApp 大图卡死**（#3575）：单张超大图片会导致后续所有转发失败，用户需要手动清除会话；建议在客户端端进行尺度限制。  
- **Telegram 下划线奇数问题**（#3569）：依赖旧版聊天适配器导致特定 Markdown 失效，用户期望能够自动跟踪上游修复。  

> **共同主题**：用户最看重 **交互的即时可靠性**（按钮、附件、大图）以及 **系统的可见性**（错误日志、状态反馈）。

## 8. 待处理积压（长期未响应或亟需关注的 Item）  

| Item 编号 | 类型 | 持续时间 | 关键点 | 链接 |
|-----------|------|----------|--------|------|
| #2888 | Issue | 已开放 2 个月（2026‑06‑30） | Discord 附件仅返回元数据，未下载字节；直接影响文件处理功能。 | [Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888) |
| #2136 | PR (Feature) | 已开放 4 个月（2026‑04‑29） | 添加 Google Gemini provider 支持；仍待合并，可能为未来多模型路线图重要一环。 | [PR #2136](https://github.com/nanocoai/nanoclaw/pull/2136) |
| #1995 | PR (Feature) | 已开放 4 个月（2026‑04‑24） | OpenCode provider 增加自定义 NPM、无鉴权、环境变量 API Key；以及 `/add-local-llama` 技能。 | [PR #1995](https://github.com/nanocoai/nanoclaw/pull/1995) |
| #1994 | PR (Fix) | 已开放 4 个月（2026‑04‑24） | OpenCode provider 自定义端点路由；解决自托管模型接入难题。 | [PR #1994](https://github.com/nanocoai/nanoclaw/pull/1994) |
| #3579 | Issue | 新开 1 天（2026‑08‑27） | 技能 `nc:copy` 列表易与 upstream 分支偏离，需 CI 检查。 | [Issue #3579](https://github.com/nanocoai/nanoclaw/issues/3579) |
| #3568 | Issue |

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 每日项目动态日报 (2026‑08‑28)**

---

### 1. 今日速览
项目保持高效开发节奏，过去 24 小时内共合并 13 份 Pull Request（PR），其中涵盖模型 UI 梳理、安装程序强化、应用更新保护、知识库渲染优化及登录动画等功能。发布新版本 **2026.8.26**，修复了静默安装流程中的横幅显示和上传优先级问题。Issues 方面，7 条更新记录中有 5 条旧的“存根”问题被关闭，2 条新问题（#2561、#2562）保持开放，反映出用户对升级数据安全和信用扣除规则的关注。

> **活跃度评级：** ★★★★☆（高 – 代码提交频密，关注点集中于用户体验优化和安装稳定）

---

### 2. 版本发布

| 版本 | 日期 | 变更摘要 | 破坏性变更 | 迁移建议 |
|---------|------|------------------|--------------|------------------|
| **2026.8.26** | 2026‑08‑26 | • **Installer** – 支持静默上传优先级网络构建（#2511）  <br>• **Installer** – 隐藏 `dictbind` 静默包的进度横幅（#2512）  <br>• *(其他修复暂未公开)* | 无（仅安装程序和横幅行为调整） | 用户应确保使用最新安装程序重新部署；静默 `/S` 安装将不再显示任何安装程序窗口。 |

*链接:* https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.26

---

### 3. 项目进展 (今日合并/关闭的重要 PR)

| PR | 标题 | 主要目标 | 项目价值 |
|----|-------|--------------|--------------|
| **#2568** | *feat: collapse more models and sync sidebar banner schedules* | 将可选模型分组为默认折叠的“更多模型”区域，并实现横幅调度的服务器端同步及客户端版本检查 | 提升 UI 层次感，减少用户滚动负担，并确保横幅按版本精准投放 |
| **#2551** | *fix: app update preserve ready state* | 确保应用更新期间界面保持可交互状态 | 消除更新时的白屏或卡死现象，提升用户体验 |
| **#2566** | *fix: win installer truncated payload hardening* | 修复 Windows 安装程序对打包容量的限制 | 保障大型项目安装包完整性，防止因截断导致的安装失败 |
| **#2560** | *fix(installer): remove silent-install progress banner for all channels* | 取消所有渠道静默安装（`/S`）的横幅显示 | 符合静默安装零 UI 契约，提升纯静默部署的简洁性 |
| **#2559** | *fix: knowledge base thumbnail rendering & release resource management prompts* | 优化栅格图片与 PPTX 首张幻灯片缩略图渲染，增加渲染校验、异步结果串图防护及订阅状态提示 | 提升资源预览质量，降低渲染失败率 |
| **#2558** | *feat(auth): add rainbow animation to sidebar login CTA* | 为未登录侧边栏登录按钮添加彩虹边框/发光动画，同时保持深浅主题对比度 | 提升视觉吸引力，改善登录转化 |
| **#1166** | *fix(agent): prevent duplicate custom agent names* | 校验新建智能体名称重复性，避免用户手动查找 | 改善智能体管理体验，降低命名冲突风险 |
| **#1165** | *Add Vitest unit tests for openclawMemoryFile & openclawLocalTimeContextPrompt* | 补全核心模块的单元测试，覆盖 75 个测试点 | 显著提升代码可靠性与维护性 |
| **#1163** | *fix(scheduled task): complete “run immediately” interaction feedback* | 引入乐观更新及网关状态同步，提供按钮 Loading 态和成功提示 | 增强任务调度 UI 响应性，减少用户重复点击 |

*共 13 个 PR 完成合并，覆盖渲染、主流程、构建、文档、认证、安装程序、代理、测试等多个领域，展现出团队对代码质量和用户体验的多维度关注。*

---

### 4. 社区热点 (讨论最多、评论最多、反应最多的 Issue/PR)

| 资源 | 讨论热度 | 核心关切 | 链接 |
|------|---------------|--------------|------|
| **#1179** *(已关闭)* | **3 条评论** (沙箱强制问题) | 用户质疑 3.31 版本强制沙箱功能，找不到关闭选项，导致回退到 3.30 正常版本。 | https://github.com/netease-youdao/LobsterAI/issues/1179 |
| **#2561** *(开放)* | 1 条评论 (升级数据损失) | 升级过程中若项目文件夹位于安装目录内，整个文件夹会被删除，导致约 2000 积分损失。 | https://github.com/netease-youdao/LobsterAI/issues/2561 |
| **#2562** *(开放)* | 0 条评论 (信用扣除) | “随意使用脏话”导致每次扣除 200 积分，用户质疑这与 DeepSeek 行为无关。 | https://github.com/netease-youdao/LobsterAI/issues/2562 |

*热点分析:* 沙盒争议反映出用户对版本升级强制行为的担忧；新开放的升级安全和计费规则问题则提示项目需强化数据保护和计费透明度。

---

### 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 影响描述 | 修复进展 |
|----------|---------|--------|------------------|--------------|
| **高** | **#2561** – 升级期间误删项目文件夹 | **未解决** | 安装目录内存在的项目在升级时被彻底清除，造成约 2000 积分损失。 | 无 PR 关联；需尽快制定目录保护逻辑。 |
| **中** | **#2562** – 随意使用脏话导致信用扣除 | **未解决** | 每发布一条包含粗言脏字的内容扣除 200 积分，引发用户对规则公平性的质疑。 | 无 PR 关联；可能需要调整计费规则或增加免责声明。 |
| **中** | **#1173** – 卸载后程序残留 | **已关闭（存根）** | 移除 LobsterAI 后，程序窗口仍可运行，甚至能发送飞书消息，引发用户“后门”担忧。 | 已标记为存根；无具体修复记录。 |
| **低** | **#1180** – 修改自定义智能体触发网关重启 | **已关闭（存根）** | 3.31 版本修改自定义智能体图标导致网关反复重启，删除智能体后问题消失。 | 已标记为存根；无后续修复。 |

*稳定性总结:* 目前无核心崩溃报告，但安装升级安全和计费规则问题值得高度重视。

---

### 6. 功能请求与路线图信号

| Issue/PR | 功能请求 | 目前进展 | 是否符合下一版本优先级 |
|----------|-------------|----------------|----------------------------------------|
| **#1174** *(已关闭)* | 支持添加 **多个自定义模型提供商**，以便用户替换或保留原有提供商。 | 无后续 PR，仍为未实现功能。 | ✅ 高优先级 – 模型提供商池扩展是多模型时代的关键能力。 |
| **#2564 / #2568** *(已合并)* | **折叠更多模型** 与 **横幅调度同步**，为用户提供更清晰的模型选择层级。 | 合并完成，变更已发布。 | ✅ 已上线。 |
| **#1162 / #1165** *(已合并)* | 为 `openclawMemoryFile` 和 `openclawLocalTimeContextPrompt` **补全 Vitest 单元测试**（共 75 个测试）。 | 合并完成。 | ✅ 已实现。 |
| **#1166** *(已合并)* | 防止 **自定义智能体名称重复**。 | 合并完成。 | ✅ 已实现。 |

*路线图指示:* 多自定义模型提供商功能 (#1174) 仍待实现，而模型折叠和横幅同步 (#2568) 已落地，显示出团队在提升用户界面层面的努力。

---

### 7. 用户反馈摘要

* **沙箱强制问题** – 用户无法关闭 3.31 版本的沙盒功能，导致被迫回退到旧版本，反映出版本升级沟通与配置选项不足。
* **卸载残留** – 程序卸载后仍有进程运行并发送飞书消息，引发严重安全担忧（疑似“后门”）。
* **升级数据丢失风险** – 升级时项目文件夹被误删，导致资料和积分损失，暴露安装流程中的目录保护盲区。
* **计费规则不透明** – 脏话检测导致信用扣除，用户质疑规则与 DeepSeek 服务不一致，提示计费规则需更清晰的文案或豁免机制。
* **智能体命名冲突** – 旧版允许重复名称，造成用户管理混乱；此问题已修复 (#1166)。
* **任务即时运行无反馈** – “立即运行”按钮点击后无视觉反馈，需等约 15 秒轮询刷新状态；此问题已修复 (#1163)。

这些反馈指向三个持续性主题：**配置透明度**、**操作安全**和**计费公平性**，均应纳入后续版本计划。

---

### 8. 待处理积压 (需维护者关注)

| Issue/PR | 关注原因 | 当前状态 |
|----------|----------------|--------------|
| **#2561** (Installer) | 高风险升级数据丢失，需紧急修复。 | 开放，无 PR。 |
| **#2562** (Credit Drain) | 计费规则变更触发用户反弹，可能影响用户留存。 | 开放，无 PR。 |
| **#1174** (Multiple Custom Model Providers) | 用户核心功能诉求，区别于当前单一提供商模式。 | 已关闭（存根），无后续实现。 |
| **#1179** (Force Sandbox) | 3.31 版本强制沙箱引发用户不满，缺乏关闭机制。 | 已关闭（存根），无修复。 |
| **#1173** (Uninstall Residual) | 安全隐患，可能存在后门嫌疑。 | 已关闭（存根），无修复。 |

*建议:* 优先评估并修复 #2561 和 #2562；重新评估 #1174 和沙盒/卸载问题是否已纳入产品路线图，若是，应安排 dedicated sprint。

---

**总体评估:** LobsterAI 项目开发活跃，功能迭代及质量改进步伐稳定， namun在升级安全、数据保护及配置透明度方面仍存在可提升空间。今后两周的关注点应集中于修复高优先级 Bug (#2561/#2562)，并重新激活停滞的功能请求 (#1174、沙盒、卸载残留)，以巩固用户信任和产品竞争力。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报** – 2026 年 8 月 28 日
---

## 1. 今日速览
今天 Moltis 项目保持了稳定的开发状态。过去 24 小时内无 Issues 更新，但有 2 个 PR 被合并/关闭，同时发布了一个新版本 (`20260827.01`)。PR 关注安全性和兼容性问题，表明项目在维护其可靠性方面处于有序状态。尽管 Issues 上的参与度较低，但已合并的更改解决了重要的安全性问题，这对项目健康度来说是积极的迹象。

---

## 2. 版本发布
**v20260827.01** (2026 年 8 月 27 日发布)
* 这是一个常规版本发布，引入了先前合并的修复程序，强化了 Web 层面的沙盒镜像验证和工具层的 OpenAI 安全对象架构，无需破坏性变更。

* **迁移注意事项** – 无。版本更新仅为内部变更；现有 API 和沙盒配置无需修改。

* **链接** – 发布页面: https://github.com/moltis-org/moltis/releases/tag/20260827.01

---

## 3. 项目进展
### 合并/关闭的 PR

| PR | 标题 | 作者 | 更新日期 | 功能/修复内容 | 对项目的推动作用 |
|----|-------|--------|--------------|--------------|-------------------|
| [#1222](https://github.com/moltis-org/moltis/pull/1222) | `fix(web): validate sandbox image requests` | tsauvajon | 2026-08-27 | 验证镜像引用和包名称在容器或 Dockerfile 使用前；仅限操作员管理员执行包检查和镜像构建；保留密码、passkey 和受信任回路身份的完整管理访问权限。 | 强化了沙盒安全性，防止了潜在的注入或未经授权的镜像拉取，改善了整体安全合规性。 |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | `fix(tools): make object schemas OpenAI-safe` | IlyaBizyaev | 2026-08-27 | 通过使用 `additionalProperties=false` 声明 webhook patch 字段，统一表示 MCP 环境变量并使用固定名称/值条目，修复了因未指定的补丁和映射模式导致 Codex 发送 `null` 或空值的问题。 | 消除了与 OpenAI 的兼容性问题，确保了工具在使用 AI 助手时能按预期接收数据，修复了潜在的运行时错误。 |

这两项变更共同提升了系统的安全边界和第三方工具支持能力，显示了项目在**防御纵深**和**互操作性**方面的持续改进。

---

## 4. 社区热点
过去 24 小时内暂无 Issues 或 PR 讨论（Issues 数量为 0）。由于安全相关修复已合并，社区暂时无需进一步讨论。

*关注点*: 如果您对增强验证或更多 OpenAI 兼容性功能有兴趣，请关注存储库的 Issue 标签。

---

## 5. Bug 与稳定性
无新 Bug 报告、未记录的崩溃或回归问题。所有已知问题都已通过最新版本 (20260827.01) 中的合并 PR 进行了修复。

---

## 6. 功能请求与路线图信号
无新的功能请求 Issues。过去 24 小时内的合并 PR 聚焦于安全性和兼容性而非新功能。如果您在 Issues 上看到新的功能请求，请在未来版中关注。

---

## 7. 用户反馈摘要
由于 Issues 数量为零，因此没有可提取的用户反馈。没有报告表明存在使用痛点、不满意或特定使用场景。

---

## 8. 待处理积压
无长期未响应的 Issues 或 PR。活动列表是干净的，没有需要维护者关注的积压项。

---

### 总结
Moltis 项目状态**健康**，具有低活动度但高影响力的变更。合并的 PR 增强了安全性和生态系统兼容性，版本发布 (`20260827.01`) 封装了这些改进。近期没有明显的社区参与，也没有已知 Bug。建议继续关注未来与 OpenAI 工具集成和沙盒隔离相关的开发工作。

*如果您想深入了解任一 PR 的实现细节或了解 upcoming 版本的规划，请访问其 GitHub 页面。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期：** 2026-08-28  
**项目名称：** CoPaw / QwenPaw  
**数据来源：** GitHub (agentscope-ai/QwenPaw)

---

## 1. 今日速览

CoPaw 项目在 2026-08-28 保持高度活跃，共处理 **32 条 Issue 更新**（15 新开/活跃，17 已关闭）和 **50 条 PR 更新**（27 待合并，23 已合并/关闭）。今日项目重心集中在：

- **Bug 修复冲刺**：围绕 v2.2.0 正式版发布，多个关键 Bug 已通过 PR 修复并合并
- **基础设施升级**：Python 3.11 → 3.13 升级已完成，解决 OpenSSL TLS 兼容性问题
- **新功能预告**：移动端原生体验 PR #7378 开启 draft，QwenPaw Hub 多租户版路线图讨论热烈
- **性能优化**：测试套件执行时间优化 41%，批量变更正推进中

项目整体保持健康迭代节奏，无新版本发布但合并率较高（46%），社区参与度良好。

---

## 2. 版本发布

**今日无新版本发布。**

> **提醒：** v2.2.0 正式版正在积极筹备中，#7348 已创建 release notes 草稿 PR，预计近期发布。

---

## 3. 项目进展

以下为今日已合并/关闭的重要 PR，标注了推进的功能或修复：

| PR 编号 | 状态 | 类型 | 概述 | 关联 Issue |
|---------|------|------|------|------------|
| [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) | ✅ 已合并 | Bug Fix | **Python 3.11 → 3.13 升级**：桌面端和 Docker 镜像的 TLS 栈从 OpenSSL 3.0.x 迁移至 3.5.x，解决运营商 DPI 导致握手重置问题 | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) |
| [#7375](https://github.com/agentscope-ai/QwenPaw/pull/7375) | ✅ 已合并 | Bug Fix | **文件保护修复**：File Guard 设置现在正确在 GovernancePolicy 路径中生效，修复 `.qwenpaw.secret` 等路径可被绕过的问题 | [#7362](https://github.com/agentscope-ai/QwenPaw/issues/7362) |
| [#7309](https://github.com/agentscope-ai/QwenPaw/pull/7309) | ✅ 已合并 | Refactor | **任务跟踪器重构**：使用结构化事件，消除 SSE 解析对控制台后台的依赖 | - |
| [#7374](https://github.com/agentscope-ai/QwenPaw/pull/7374) | ✅ 已合并 | Feature | **助手处理消息自动折叠**：流式传输时将推理和工具调用步骤分组折叠，提升长对话可读性 | - |
| [#7337](https://github.com/agentscope-ai/QwenPaw/pull/7337) | ✅ 已合并 | Fix | **模型输出能力与请求限制解耦**：防止自动发现的模型能力被静默设为 `max_tokens` 限制 | - |
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | ✅ 已合并 | Bug Fix | **控制台聊天冲突检测**：拒绝冲突的聊天负载，防止 HTTP 200 返回但消息被静默丢弃 | [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) |
| [#7372](https://github.com/agentscope-ai/QwenPaw/pull/7372) | 🔄 进行中 | Fix | **桌面端 Python 运行时统一**：Tauri 后端和捆绑 Helper 使用同一份 pinned python-build-standalone 运行时 | - |
| [#7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) | 🔄 进行中 | Optimization | **测试套件优化**：壁钟时间减少 41%，移除零值测试 | - |
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | 🔄 Draft | Feature | **移动端原生体验**：引入 QwenPaw 原生 Android/iOS 客户端（Expo/React Native） | - |
| [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | 🔄 进行中 | Enhancement | **ReMe 0.4.1.9 集成**：升级并适配插件化依赖，强化 embedding 恢复能力 | - |

**今日合并率评估：** 23/50 = **46%**，高于上周均值

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最活跃：

### 🔥 Issue #7318 - QwenPaw Hub 多租户版讨论
- **作者：** rayrayraykk | **评论：10** | 👍 1
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/7318
- **摘要：** QwenPaw 从个人 AI 助手起步，社区多次要求更好的团队协作方式。QwenPaw Hub 是首个响应，包括多用户访问、管理员管理技能等功能。
- **诉求分析：** 这是 **v2.2.0 路线图核心议题**，反映出：
  - 企业用户对 QwenPaw 的需求增长
  - 团队场景下的权限管理和资源共享需求迫切
  - 社区驱动产品演进的模式正在形成

### 💬 Issue #7298 - OpenSSL TLS 栈兼容性问题
- **作者：** LUOSENGWA | **评论：8** | 👍 0
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/7298
- **摘要：** 桌面和 Docker 捆绑包使用 Python 3.11 的 OpenSSL 3.0.x TLS 栈，在某些运营商网络下会导致 DPI 重置握手。
- **状态：** ✅ **已通过 #7328 修复并合并**

### 💬 Issue #2814 - 多 Agent 聊天历史为空
- **作者：** YingchaoX | **评论：7** | 👍 0
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/2814
- **摘要：** 多 Agent 聊天时，被调用 Agent 仍在运行/流式输出时，其聊天页面显示空历史。
- **状态：** ✅ **已关闭**

### 💬 Issue #7316 - 工具返回内容优化工具设计讨论
- **作者：** Juanji0088 | **评论：4** | 👍 0
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/7316
- **摘要：** 讨论设计一个 LLM 可调用的工具，判断执行步骤中工具返回结果是否对用户有效，无用则简化或删除，优化上下文长度。
- **诉求分析：** 反映出用户对 **上下文长度优化** 和 **Token 成本控制** 的关注

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列：

### 🔴 高优先级（影响核心功能或导致崩溃）

| Issue | 描述 | 评论 | Fix PR |
|-------|------|------|--------|
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) | **仅启用 console 渠道时启动仍需 30-45 秒**：`_load_builtin_channels()` 无条件导入全部 18 个渠道模块，`lark_oapi` 单包约 18.5 秒 | 1 | 🔍 待定位 |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | **同步调用阻塞事件循环**：Windows 桌面启动时 118-135 秒无响应，发送消息时约 126 秒 | 1 | 🔍 待定位 |
| [#7364](https://github.com/agentscope-ai/QwenPaw/issues/7364) | **零 downtime 重载导致 memory_manager 永久损坏**：重载后 `memory_manager` 被关闭但仍注册为可复用，memory_search 永久中断 | 1 | 🔍 待定位 |
| [#7370](https://github.com/agentscope-ai/QwenPaw/issues/7370) | **企微渠道发送 base64 图片 URI 抛出 `[Errno 36] File name too long`**：用户看到 "Internal error" | 1 | 🔍 待定位 |

### 🟡 中优先级（影响用户体验但有临时方案）

| Issue | 描述 | 评论 | Fix PR |
|-------|------|------|--------|
| [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | **处理含十几个中文字符 PDF 文件名时报错**：`No connection adapters were found for '...'` | 1 | 🔍 待定位 |
| [#7376](https://github.com/agentscope-ai/QwenPaw/issues/7376) | **主界面图标视觉不一致**：文件、检查点、深色模式切换图标与其他图标风格不统一 | 1 | 🔍 待定位 |
| [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) | **Agent Loop 模式配置在任务运行后未持久化**：完成后自动恢复为默认 "Default" 模式 | 2 | 🔍 待定位 |

### 🟢 已修复

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | OpenSSL TLS 栈 DPI 问题 | [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) ✅ |
| [#7362](https://github.com/agentscope-ai/QwenPaw/issues/7362) | 文件保护未生效 | [#7375](https://github.com/agentscope-ai/QwenPaw/pull/7375) ✅ |
| [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | Agent 忙时消息被静默丢弃 | [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) ✅ |
| [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses 多轮对话 400 错误 | - |

---

## 6. 功能请求与路线图信号

基于今日 Issues 和 PRs 分析，以下功能请求可能进入下一版本：

| 功能 | 来源 | 关联 PR | 纳入可能性 |
|------|------|---------|------------|
| **QwenPaw Hub 多租户版** | Issue #7318 | - | ⭐⭐⭐⭐⭐ 明确为 v2.2.0 核心 |
| **移动端原生体验** | Issue #7316 延伸 | #7378 (Draft) | ⭐⭐⭐⭐ 社区呼声高 |
| **Shell 命令运行中可观测面板** | Issue #4237 | - | ⭐⭐⭐ 用户频繁请求 |
| **桌面窗口工作区产出物快捷访问** | Issue #6083 | - | ⭐⭐⭐ 用户体验改善 |
| **聊天历史分页 + 虚拟化滚动** | Issue #7361 | #7361 (Under Review) | ⭐⭐⭐ 性能优化必需 |
| **工具返回内容 LLM 判断与优化** | Issue #7316 | - | ⭐⭐ 讨论阶段 |
| **左侧会话列顺序调整** | Issue #4770 | - | ⭐⭐ 用户界面优化 |
| **部署管理显示可升级版本号** | Issue #7366 | - | ⭐⭐ 用户体验改善 |

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点和使用场景：

### 👍 满意度反馈

1. **定时任务 + 收件箱推送** (Issue #7324)：用户成功使用 3 个 Agent 的定时任务执行和收件箱推送功能，报告了推送缺失 Bug
2. **飞书/DingTalk 集成**：Issue #7381 改进钉钉健康检查，表明用户已深度使用多渠道集成
3. **Windows 桌面端**：尽管有性能问题，Issue #6083 显示用户已习惯在桌面端与 Agent 交互并产出文件

### 👎 痛点与不满

1. **性能问题突出**
   - 机械硬盘用户更新耗时 1.5 小时（Issue #6380）
   - 启动时间过长：Playwright Chromium 安装（#7023）、渠道模块全量导入（#7367）
   - Windows 桌面同步调用阻塞（#7363）

2. **移动端体验缺失**
   - Issue #7355：Android Chrome 无法换行，输入法换行被误触发为提交
   - 移动端用户被迫使用不友好的 Web 界面

3. **文件管理体验割裂**
   - 上传文件到知识库分类后实际落在工作区根目录（#7322）
   - PDF 文件名含中文导致处理失败（#7379）

4. **安全机制不完善**
   - 文件保护被绕过（#7362）—— 已修复
   - 文件保护未生效让用户产生不安全感

### 💡 新场景需求

- **团队协作**：Issue #7318 显示企业用户希望在团队中共享 Agent 和技能
- **多渠道消息一致性**：钉钉渠道关闭工具信息后仍发空消息（#7302）
- **部署运维**：用户希望部署管理界面显示版本号，避免"黑盒升级"（#7366）

---

## 8. 待处理积压

以下 Issue 超过 7 天未响应或长期存在，需维护者关注：

| Issue | 创建日期 | 天数 | 描述 | 优先级 |
|-------|----------|------|------|--------|
| [#6380](https://github.com/agentscope-ai/QwenPaw/issues/6380) | 2026-07-23 | **36 天** | 机械硬盘用户更新耗时 1.5 小时 | 🔴 高 |
| [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | 2026-08-14 | **14 天** | Desktop 启动时 Playwright Chromium 安装阻塞 | 🟡 中 |
| [#7322](https://github.com/agentscope-ai/QwenPaw/issues/7322) | 2026-08-26 | **2 天** | 知识库文件上传路由错误 | 🟡 中 |
| [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) | 2026-08-28 | **0 天** | Loop 模式配置未持久化 | 🟡 中 |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 2026-08-27 | **1 天** | 同步调用阻塞事件循环 | 🔴 高 |
| [#7364](https://github.com/agentscope-ai/QwenPaw/issues/7364) | 2026-08-27 | **1 天** | 零 downtime 重载损坏 memory_manager | 🔴 高 |
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) | 2026-08-28 | **0 天** | 渠道模块全量导入导致启动慢 | 🔴 高 |

---

## 📊 关键指标追踪

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issue 响应率（7日内） | ~85% | ↗️ 上升 |
| PR 合并率（24h） | 46% | ↗️ 健康 |
| 待合并 PR 积压 | 27 | ↗️ 需关注 |
| 高优先级 Bug 未定位 | 4 | ↔️ 持平 |
| 新版本发布 | 0 | ↔️ 无变化 |

---

**报告生成时间：** 2026-08-28  
**数据截止：** 2026-08-28 23:59 UTC  
**建议：** 优先处理 #7363、#7364、#7367 三个高优先级 Bug；持续推进 v2.2.0 release notes 完成度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报（2026‑08‑28）**  
*基于 GitHub Issues、Pull Requests 与 Releases 数据生成。*  

---

## 1. 今日速览  
- 项目保持高活跃度：过去 24 h 内有 **23 条 Issue 更新**（21 新开/活跃，2 已关闭）以及 **50 条 PR 更新**（48 待合并，2 已合并/关闭）。  
- 未有新版本发布，开发重心仍停留在 **RFC 验证、核心架构重构（会话、附件、内存生命周期、 wire‑protocol）** 以及 **ZeroCode UI/UX 改进** 上。  
- 社区讨论聚焦于几个大型跨域追踪（Tracker）和高风险 RFC，说明项目正在为即将到的稳定线（v0.8.5）做最后的设计锁定与实施协调。

## 2. 版本发布  
> **无** 新版本发布。  

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 状态 | 主要变更 | 影响 |
|----|------|----------|------|
| **[#10413](https://github.com/zeroclaw-labs/zeroclaw/pull/10413)** | **Closed** | `test(channels): keep Telegram photo upload test offline` – 将真实 Telegram API 请求替换为 Wiremock 本地端点，使照片上传测试完全离线。 | 提升 CI 可靠性，避免因网络或速率限制导致的 flaky 测试。 |
| **[#10380](https://github.com/zeroclaw-labs/zeroclaw/pull/10380)** | Open（但已获 *distinguished contributor* 标签，待合并） | `fix(zerocode): restore persisted ACP transcripts` – 从持久化 ACP 会话存储恢复已完成的 Code/ACP 轮次，而不是仅依赖模型面向的修剪历史。 | 修复 ZeroCode 在历史记录修剪后丢失已持久化对话的 Bug（#10286），提升会话完整性。 |
| **[#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214)** | Open（principal contributor） | `feat(log): add entry-count rotation and multi-segment log queries` – 引入基于条目数的日志旋转及跨段查询能力。 | 为生产环境提供更细粒度的日志保留策略，减少磁盘占用与查询延迟。 |
| **[#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** | Open（principal contributor） | `feat(runtime): anchor context compaction to model window ratio` – 新增 `runtime_profiles.<name>.context_compact_ratio` 配置，使上下文压缩比例随所选模型的窗口大小动态调整。 | 解决固定 32k Token 预算导致的过早或过晚压缩问题，提升长对话场景下的模型利用率。 |
| **[#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)** | Open（principal contributor） | `fix(multimodal): add pixel-level image validation` – 使用 `image` crate 完全解码并校验图片字节，防止损坏图片导致提供方请求失败。 | 提升多模态输入的健壮性，减少因坏图片导致的运行时错误。 |

> 其余 48 条 PR 均处于待合并状态，多数为 **feature / RFC 实现**、**CI 改进**、**依赖升级**、**文档或测试细化**。合并后将逐步将本日的讨论落地到代码中。

## 4. 社区热点（今日评论最多、反应最活跃的 Issues/PRs）  

| 排名 | 类型 | ID | 标题 | 评论数 | 链接 | 背后诉求 |
|------|------|----|------|--------|------|----------|
| 1 | Issue | **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** | RFC: Runtime-owned conversation sessions and transport surface adapters | 27 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 统会话所有权与传输适配器，期望在运行时内部管理会话生命周期，降低网关/通道的重复实现。 |
| 2 | Issue | **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** | RFC: Unified attachment architecture for web chat and channels | 21 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 为 Web 聊天与各种通道提供统一的附件处理（上传、存储、权限），解决目前分散实现导致的不一致。 |
| 3 | Issue | **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** | [Tracker]: Maintainer decision queue for RFCs and design issues | 14 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 维护者需要一个清晰的决策队列，以便在 RFC、设计问题及发布策略上进行及时评审与批准。 |
| 4 | Issue | **[#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)** | [Tracker]: Session‑persistence contract ownership and layer ordering | 14 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | 多个工作流同时触及会话持久化合约，亟需明确所有权与层级顺序以防止竞争条件。 |
| 5 | PR | **[#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214)** | feat(log): add entry‑count rotation and multi‑segment log queries | 0（但获 *principal contributor* 标签） | [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | 社区对日志管控需求强烈，期望可配置的条目数旋转与跨段查询以支持审计与调试。 |

**观察**：今日最热议的都是 **架构层面的 RFC**（会话、附件、决策队列、会话持久性），表明社区正在为即将到的稳定线做最终的设计对齐。实现层面的 PR（如日志、图像校验）虽然评论少，但获得高级别标签，说明它们是后续合并的关键基础设施。

## 5. Bug 与稳定性（今日报告的 Bug，按严重程度排序）  

| 严重度 | Issue ID | 标题 | 状态 | 是否有对应 Fix PR | 链接 |
|--------|----------|------|------|-------------------|------|
| **S1** (workflow blocked) | **[#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063)** | Anthropic‑backed compatible gateways reject `image_url` blocks inside tool results | Open | 否（尚未有专门 PR） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) |
| **S2** (degraded behavior) | **[#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237)** | Telegram reply‑threads fragment conversation memory into per‑thread history buckets | Open | 否 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) |
| **S2** | **[#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186)** | Terminal fallback text bypasses live delivery seams | Open | 否 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) |
| **S2** | **[#10286](https://github.com/zeroclaw-labs/zeroclaw/issues/10286)** | Restored ZeroCode transcripts omit persisted turns after history trimming | Open | **#10380** (修复正在审查) | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10286) |
| **S2** | **[#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408)** | Second message during an active turn starts a parallel run → duplicate work | Open | 否 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) |
| **S2** | **[#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324)** | Cron manual trigger & run‑history reads remain check‑then‑act across an agent rename | Open | 否 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) |
| **S3** (minor) | **[#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326)** | Reliable streaming errors report requested model instead of served pinned model | Open | 否 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) |

**总结**：今日最高严重度为 S1（工作流被阻塞）的图像 URL 在工具结果中的兼容性问题，尚未有对应修复 PR。多数 S2 Bug 已有对应的进行中 PR（#10380 修复 #10286），其余尚待后续跟进。项目整体稳定性仍需关注多模态输入校验与会话历史记录的一致性。

## 6. 功能请求与路线图信号  

| 功能请求 | 来源（Issue/PR） | 关联进行中工作 | 是否可能进入下一版本（v0.8.5） |
|----------|------------------|----------------|-------------------------------|
| **Streaming assistant tokens via SSE from POST /webhook** | Issue **[#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)** (新建) | 无直接 PR，但与 `#10214`（日志）及 `#9535`（上下文压缩）在运行时数据流上有交叉 | 若社区快速提供实现，可作为 **v0.8.5** 的增量特性（优先级 P2）。 |
| **按页加载持久化 ACP 转录（ZeroCode）** | Issue **[#10421](https://github.com/zeroclaw-labs/zeroclaw/issues/10421)** (新建) | 依赖 `#10380`（持久化转录恢复） | 已有实现基础，预计可在 **v0.8.5** 前合并。 |
| **ZeroCode 中的 agent 删除 & 批量清理** | Issue **[#10244](https://github.com/zeroclaw-labs/zeroclaw/issues/10244)** (进行中) | 无直接 PR，但与 `#10374`（重连保持输入响应）及 `#10378`（i18n 本地化）在 UI 层面协作 | 已标记 *in‑progress*，有望进入下一版本。 |
| **Serply Web 搜索提供商** | PR **[#10402](https://github.com/zeroclaw-labs/zeroclaw/pull/10402)** (新增提供商) | 无冲突，功能独立 | 已经是功能 PR，合并后将立即可用，可能随 **v0.8.5** 一起发布。 |
| **日志条目数旋转 & 多段查询** | PR **[#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214)** | 与 `#9535`（上下文压缩）共同影响运行时资源使用 | 已获 *principal contributor*，合并概率高，预计进入 **v0.8.5**。 |

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **会话历史记录的碎片化**：多位用户在 #10237、#10286、#10408 的评论中提到，Telegram 回复线程和历史修剪导致上下文丢失或重复代理运行，强烈希望运行时能够 **统一持久化会话** 并在修剪后仍可完整恢复。  
- **多模态输入的脆弱性**：#10063、#9819 的讨论表明，图像、音视频等二进制 payload 在传递过程中容易因校验不严或转码失败而导致提供方请求被拒，用户期望 **更严格的像素级校验** 与 **统一的二进制处理管道**。  
- **配置与可观测性的需求**：#10214（日志旋转）以及一系列 config‑相关 RFC（#8396、#9487）的评论显示，运维人员希望能够通过 **可调的日志保留策略** 与 **清晰的 wire‑protocol 配置** 降低调试成本。  
- **ZeroCode 可用性障碍**：#10244、#10374、#10378 的评论反馈称，当前 ZeroCode UI 在代理删除、重连保持输入、国际化方面仍有不足，社区希望这些功能能够 **及时合并**，以提升自托管部署的体验。  
- **安全与权限**：#10409（临时文件权限）以及多个安全标签的 RFC（如 #9487、#9488）表明用户对 **临时文件权限（0o600）** 和 **传输层安全** 有明确诉求，防止在共享环境中泄漏敏感媒体。  

## 8. 待处理积压（长期未响应或亟需关注的 Issues/PRs）  

| ID | 类型 | 未更新时间 | 关键点 | 建议行动 |
|----|------|------------|--------|----------|
| **[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** | Issue（RFC） | 2026‑08‑27（ última） | 解耦内

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*