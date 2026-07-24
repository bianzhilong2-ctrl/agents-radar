# AI 开源趋势日报 2026-07-24

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-24 01:50 UTC

---

# 📈 AI 开源趋势日报 | 2026-07-24

---

## 1. 今日速览
- **AI 网关/路由层成今日最大赢家**：`OmniRoute` 单日狂揽 **1.9k+ Stars**，以“统一端点、290+ 供应商、配额感知降级、Token 压缩”解决多模型调用的工程化痛点，标志着 **LLM 接入层标准化竞赛** 进入白热化。
- **垂直领域基础模型落地提速**：金融时序基座 `Kronos`、WiFi 感知空间智能 `RuView`、地缘情报仪表盘 `WorldMonitor` 三大垂直应用同日登榜，证明 **“小而专” 的 Foundation Model + Agent 组合** 已成商业化最短路径。
- **编码 Agent 生态完成“最后一公里”补齐**：Alibaba 开源企业级代码审查 Agent、`pi-web`/`ego-lite` 等编码 Agent 前端界面、Composio 汇总 Claude Skills，工具链从“模型调用”转向 **“工程化交付”**。
- **Rust 在 AI 基础设施渗透率显著上升**：`RuView`（感知）、`Harper`（语法）、`OmniRoute` 生态组件、`Rig`（LLM 框架）均采用 Rust，性能敏感型 AI Infra 正加速 Rust 化。
- **RAG 向“推理型/压缩型”进化**：`LightRAG`、`Headroom`（Token 压缩 60-95%）、`Mem0`（长期记忆）等项目将 RAG 从“检索召回”推向“上下文工程与成本控制”。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
| :--- | :--- | :--- |
| **[diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)** | 0 / **+1,929** | **今日 Trending 冠军**。MIT 协议 AI 网关：统一端点接入 290+ 供应商/500+ 模型，内置配额感知降级、RTK 压缩省 15-95% Token、MCP/A2A 协议支持，解决多模型生产环境路由与成本难题。 |
| **[vllm-project/vllm](https://github.com/vllm-project/vllm)** | 86,998 / - | 高吞吐、显存高效的 LLM 推理服务引擎，生产环境部署事实标准，持续优化 PagedAttention 与离线推理性能。 |
| **[ollama/ollama](https://github.com/ollama/ollama)** | 176,740 / - | 本地大模型运行“Docker 化”工具，一键拉取 Kimi-K2、GLM、DeepSeek 等模型，零配置跨平台推理，个人/边缘部署首选。 |
| **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** | 142,452 / - | Agent 工程化平台，提供 LCEL、LangGraph 等编排原语，生态最全的工具/模型/向量库集成层。 |
| **[citrolabs/ego-lite](https://github.com/citrolabs/ego-lite)** | 0 / **+247** | 面向“人机并行”的浏览器：原生支持 AI Agent 与人类协同操作网页，提供 DOM 结构化接口，解决 Agent 网页交互的稳定性痛点。 |
| **[agegr/pi-web](https://github.com/agegr/pi-web)** | 0 / **+315** | `pi` 编码 Agent 的 Web UI，提供会话可视化、工具调用透明化、人工介入检查点，让 CLI Agent 具备协作界面。 |
| **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** | 0 / **+180** | 阿里巴巴千万行代码验证的代码审查 Agent：确定性流水线 + LLM 智能体，行级精准评论，内置 NPE/线程安全/XSS/SQLi 规则集，OpenAI/Anthropic 兼容。 |
| **[Automattic/harper](https://github.com/Automattic/harper)** | 0 / **+624** | 离线优先、隐私优先的语法检查器，Rust 实现，毫秒级响应，集成 VS Code/Obsidian/浏览器，无需联网即可获得 LLM 级纠错能力。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
| :--- | :--- | :--- |
| **[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)** | 0 / **+636** | Claude Skills 官方精选集：覆盖 GitHub、Linear、Notion、Salesforce 等 100+ 工具的标准化技能包，推动 Agent “技能即插即用”生态标准化。 |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | 219,536 / - | “与你共同成长”的 Agent：持久化记忆、自我进化、多模型路由，主打长期陪伴与个性化适应能力。 |
| **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** | 46,137 / - | 轻量级开源 AI Agent 核心，极简插件架构，适配工具调用、聊天、工作流三大场景，单文件部署，极客首选。 |
| **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** | 36,238 / - | **面向前端的 Agent 堆栈**：React/Angular/Slack 原生组件，AG-UI 协议制定者，让任意 Web 应用 1 小时接入生成式 UI 与 Agent。 |
| **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** | 26,954 / - | 个人量化交易 Agent：自然语言下单、多策略回测、风控隔离、实时监控，展示垂直领域 Agent 产品化范式。 |
| **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** | 0 / **+180** | *(重复收录)* 企业级代码审查 Agent，工程化落地标杆：混合架构、精准行级评论、内置安全规则集。 |
| **[googleworkspace/cli](https://github.com/googleworkspace/cli)** | 29,950 / - | Google Workspace 全套 CLI，动态生成自 Discovery Service，内置 Agent Skills 可直接让 LLM 操作 Drive/Gmail/Sheets。 |

---

### 📦 AI 应用（具体产品、垂直场景方案）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
| :--- | :--- | :--- |
| **[koala73/worldmonitor](https://github.com/koala73/worldmonitor)** | 0 / **+3,175** | **今日 Trending 总榜亚军**。实时地缘情报仪表盘：AI 聚合全球新闻/基建/航运/卫星数据，统一态势感知界面，展示“多模态数据流 + LLM 摘要 + 地理可视化”的硬核应用形态。 |
| **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** | 0 / **+401** | **金融时序基础模型**：用 Transformer 学习市场“语言”，支持多资产/多周期/多任务（预测/异常检测/策略生成），垂直 FinLLM 落地标杆。 |
| **[ruvnet/RuView](https://github.com/ruvnet/RuView)** | 0 / **+1,708** | **无摄像头空间智能**：利用商用 WiFi 信号（CSI）实现实时人体姿态、生命体征、在检测，Rust 实现边缘推理，隐私计算与环境感知新范式。 |
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | 98,921 / - | 一键生成高清短视频：主题 → 大纲 → 文案 → TTS → 素材检索 → 剪辑 → 字幕 → 成片，全自动化内容生产流水线。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | 106,400 / - | 让网站对 Agent 可访问：结构化 DOM 提取 + 交互执行引擎，支撑 AutoGPT 等自主 Agent 完成真实网页任务。 |
| **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** | 94,316 / - | 多 Agent 金融交易框架：分析师/研究员/交易员/风控官协作，RAG 增强研报，可回测可实盘，Agent 协作复杂决策典范。 |
| **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** | 0 / **+230** | 面向 CAD/机器人/硬件设计的 Agent Skills 集合：自然语言生成 OpenSCAD/STL/URDF，连接 LLM 与物理制造工具链。 |
| **[Automattic/harper](https://github.com/Automattic/harper)** | 0 / **+624** | *(重复收录)* 离线隐私优先语法检查器，Rust 高性能，集成开发者日常工具链。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
| :--- | :--- | :--- |
| **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** | 53,785 / - | **教学级神作**：2 小时从零训练 64M 参数 LLM，完整复现 Pre-train/SFT/RLHF/DPO 全流程，代码极简可读，入门大模型训练首选。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | 162,892 / - | 模型定义与加载标准库，覆盖文本/视觉/音频/多模态，Hugging Face Hub 生态基石。 |
| **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** | 8,026 / - | **Rust 原生 LLM 应用框架**：类型安全、模块化、异步优先，提供 Completion/Embedding/Tool Calling 统一抽象，Rust 生态建设标杆。 |
| **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | 7,231 / - | 大模型评测平台：支持 100+ 数据集、主流闭源/开源模型，提供标准化排行榜与可复现评测配方。 |
| **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** | 4,402 / - | 系统工程师视角的 LLM 推理实战课：在 Apple Silicon 上从零手写 tiny vLLM + Qwen，深度剖析 KV Cache、PagedAttention、推理内核。 |
| **[Hai-chao-Zhang/ThinkJEPA](https://github.com/Hai-chao-Zhang/ThinkJEPA)** | 46 / - | **新兴方向**：结合 JEPA（联合嵌入预测架构）与大型视觉语言模型，赋能潜在世界模型具备推理能力，代表“世界模型+推理”前沿探索。 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
| :--- | :--- | :--- |
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | 85,801 / - | 企业级 RAG 引擎：**深度文档理解（OCR/版面/表格）+ Agentic

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*