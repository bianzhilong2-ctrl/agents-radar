# AI 开源趋势日报 2026-07-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-06 02:12 UTC

---

#📊 AI 开源趋势日报 | 2026-07-06

---

## 1. 今日速览

- **Agent 生态爆发式增长**：GitHub Trending 榜单被 Claude Code 技能、智能体多路复用器、持久化规划工具等「Agent 基础设施」项目霸屏，标志着开发者关注点从「模型调用」转向「工程化落地」。
- **本地化/隐私优先成主流**：会议助手 Meetily（+1.4k⭐）、渗透测试 Strix（+1.1k⭐）等应用强调 100% 本地推理，Ollama、RAGFlow、Mem0 等基础设施项目持续高星，数据主权成核心诉求。
- **Token 成本优化成硬指标**：Caveman（-65% Token）、Headroom（-60~95% Token）等压缩/精简工具高热，反映大模型落地阶段推理成本已成第一约束。
- **RAG 向「图谱化/记忆化」演进**：Graphify（代码转知识图谱）、Mem0/Cognee（通用记忆层）、Claude-Mem（跨会话上下文）热度高涨，单纯向量检索已不足以支撑复杂 Agent 任务。
- **AI 安全/代码生成双赛道并进**：Strix 开源 AI 渗透测试，Page-Agent 实现网页原生 GUI 控制，Codex/Unity/Claude Code 形成多极编码助手矩阵。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
|------|------------------------|------------|
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 0 / **+156** | 官方原生终端编码 Agent，理解代码库、执行 Git 工作流，成 Claude 生态核心入口。 |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | 0 / **+1,532** | 让 Codex 在 Claude Code 中直接跑 Code Review/任务委派，打通双巨头工具链。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 175,551 / — | 本地大模型运行标准，新增 Kimi-K2.6/GLM-5.1 等 SOTA 模型一键拉取，隐私首选。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 85,441 / — | 高吞吐推理引擎，PagedAttention 架构成生产环境 LLM Serving 事实标准。 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 0 / **+805** | 页面级 GUI Agent，自然语言直接操作 DOM，开启「无 API 自动化」新范式。 |
| [facebook/astryx](https://github.com/facebook/astryx) | 0 / **+522** | 面向 Agent 的可定制设计系统，组件内置语义元数据，让 LLM 直接「懂 UI」。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,284 / — | 模型定义/推理/训练全链路框架，多模态 SOTA 模型首发落地平台。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,833 / — | Rust 原生 LLM 应用框架，模块化/类型安全，适合高性能生产级部署。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
|------|------------------------|------------|
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 0 / **+392** | 337 个 Claude Code 技能包，覆盖工程/营销/合规/金融等全场景，即装即用。 |
| [ogulcancelik/herdr](https://github.com/ogulcancelik/herdr) | 0 / **+651** | 终端原生 Agent 多路复用器，单窗口并行管理多个编码/运维 Agent，解决上下文碎片化。 |
| [gastownhall/gastown](https://github.com/gastownhall/gastown) | 0 / **+51** | 多 Agent 工作区管理器，支持技能共享、状态持久化、跨 Agent 协作编排。 |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 0 / **+66** | 基于文件的持久化规划引擎，Markdown 计划可跨会话/跨 Agent 共享，Manus 风格落地。 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 84,918 / **+1,052** | 「原始人」提示词技能：用极简英语压缩 65% Token，同等效果大幅降本。 |
| [langgenius/dify](https://github.com/langgenius/dify) | 147,802 / — | 生产级 Agentic Workflow 平台，可视化编排 RAG/工具/插件，企业落地首选。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 79,532 / — | 开源「AI 软件工程师」，端到端完成 Issue→PR，支持沙箱执行与技能扩展。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 226,346 / — | Agent 性能优化框架：技能/本能/记忆/安全一体化，兼容 Claude Code/Codex/Cursor 等主流客户端。 |

---

### 📦 AI 应用（垂直场景解决方案）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
|------|------------------------|------------|
| [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | 0 / **+1,409** | 隐私优先会议助手：Rust + Parakeet/Whisper 4倍速实时转写 + 说话人分离 + Ollama 本地总结。 |
| [usestrix/strix](https://github.com/usestrix/strix) | 0 / **+1,114** | 开源 AI 渗透测试工具，自动发现/修复 Web/APP 漏洞，安全左移落地典范。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 48,187 / — | 全模型聚合生产力工作台，内置 300+ Assistant、自主 Agent、知识库，本地优先。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 36,858 / — | 文档/网页/Markdown 一键生成可编辑 PPT（原生形状/动画/图表/备注语音），办公刚需。 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 70,095 / — | 面向量化/分析师的开放数据平台，集成 AI Agent 自动化研报/回测/因子挖掘。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 59,143 / — | YOLO 系列统一库，目标检测/分割/姿态/追踪 SOTA，工业级 CV 部署标配。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 58,686 / — | 基于 Claude Code 的求职自动化系统：14 技能模式、简历生成、批量投递、仪表盘全流程。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
|------|------------------------|------------|
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 101,520 / — | 动态图深度学习框架事实标准，生态最全、硬件适配最广。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 196,116 / — | Google 端到端 ML 平台，TFX/TFLite/TFJS 覆盖训练/推理/边缘全链路。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,156 / — | 大模型评测平台，支持 100+ 数据集、主流闭源/开源模型横向对比，选型必跑。 |
| [AarambhDevHub/aarambh-ai](https://github.com/AarambhDevHub/aarambh-ai) | 8 / — | 纯 Rust 从零实现 Decoder-only LLM（Candle），含 INT4/GGUF/LoRA/GRPO 对齐全栈。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 313 / — | 端侧 LLM 推理引擎，X-Bit 量化实现手机/嵌入式设备毫秒级响应。 |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | 6,028 / — | 原子化 Agent 开发范式：将 Agent 拆解为可组合、可测试、可版本化的最小单元。 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
|------|------------------------|------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 84,350 / — | 企业级 RAG 引擎：深度文档解析 + 图谱增强 + Agent 编排，开箱即用 Docker 部署。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 60,150 / — | 通用 AI 记忆层：自动抽取/更新/遗忘长期记忆，跨 Session/跨 Agent 共享上下文。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 78,192 / — | 代码/文档/Schema/视频 → 统一知识图谱，支持自然语言查询全仓库上下文。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 85,996 / — | 跨会话持久化上下文：自动捕获/压缩/注入相关历史，兼容 10+ 主流编码 Agent。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,083 / — | 云原生向量数据库，十亿级 ANN 检索，多租户/混合检索/GPU 加速生产就绪。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 32,961 / — | Rust 高性能向量引擎，支持 Payload 过滤/稀疏

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*