# AI 开源趋势日报 2026-11-19

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-19 05:05 UTC

---

# 📊 AI 开源趋势日报 | 2026-11-19

---

## 1. 今日速览
- **Agent Skills 标准化爆发**：GitHub Trending 榜单前列被“智能体技能/插件规范”类项目霸榜（`google-labs-code/stitch-skills`、`NVIDIA/SkillEvaluator`、`obra/superpowers`、`affaan-m/ECC`），标志着 **MCP（Model Context Protocol）与 Agent Skill 标准** 正从概念落地为工程基建。
- **深度研究型 Agent 成新宠**：`google-research/paper-orchestra`（+1.5k⭐）与 `mvanhorn/last30days-skill`（+1k⭐）双双登顶，多智能体协作完成**长周期、多源信息综合**的自动化科研/调研成为当前最热应用范式。
- **评估与护栏前置**：NVIDIA 发布 `SkillEvaluator`，将技能的**质量门禁、安全扫描、语义去重、CI 集成**标准化，反映企业级落地对 Agent 可靠性的刚需。
- **本地化/隐私优先基建持续升温**：`LEANN`（存储降 97%）、`RAGFlow`、`OpenViking` 等向量库与 RAG 引擎在 Topic 榜高星维持，`ollama`、`open-webui` 等本地运行栈稳居千万星级梯队。
- **垂直场景产品化加速**：PPT 生成（`ppt-master`）、股票分析（`daily_stock_analysis`/`TradingAgents`）、短视频生成（`MoneyPrinterTurbo`）等垂直应用在 Topic 榜星标极高，显示“Agent + 领域知识”正快速变现。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
| :--- | :--- | :--- |
| **[cursor/plugins](https://github.com/cursor/plugins)** | 0 / **+314** | Cursor 官方插件规范与插件集，定义了 AI 编辑器工具链的扩展标准，是插件生态建设的基石。 |
| **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** | 0 / **+312** | 企业级 Agent 技能评估框架：质量门禁、安全扫描、语义去重、CI 模板化，解决“技能不可信”痛点。 |
| **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** | 0 / **+365** | 基于 MCP 标准的 Agent Skills 库，兼容 Gemini CLI、Claude Code、Cursor 等主流编码 Agent，推动技能互操作。 |
| **[affaan-m/ECC](https://github.com/affaan-m/ECC)** | **306,683** / **+1,108** | Agent Harness 性能优化系统：技能、本能、记忆、安全一体化，极致压缩 Token 并提升编码 Agent 表现。 |
| **[ollama/ollama](https://github.com/ollama/ollama)** | **187,566** / - | 本地大模型运行标杆，支持 Kimi、GLM、DeepSeek、Qwen 等百余模型一键启动，隐私优先开发必备。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | **169,199** / - | 业界标准模型定义与推理框架，覆盖文本、视觉、音频、多模态，Hugging Face 生态核心。 |
| **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** | **149,860** / - | Agent 工程化平台，提供链式编排、工具调用、记忆、RAG 等完整抽象，生态最丰富。 |
| **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)** | 0 / **+24** | Intel 出品推理优化工具包，支持 CPU/GPU/NPU 异构加速，边缘端与本地部署核心组件。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
| :--- | :--- | :--- |
| **[google-research/paper-orchestra](https://github.com/google-research/paper-orchestra)** | 0 / **+1,524** | **今日 Trending 冠军**。多 Agent 自动撰写科研论文框架：从文献综述、实验设计到代码生成、论文撰写全流程自动化。 |
| **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** | 0 / **+1,059** | 跨平台深度调研 Agent Skill：覆盖 Reddit、X、YouTube、HN、Polymarket、Web，输出有据可查的综合报告。 |
| **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** | 0 / **+389** | “让所有软件变 Agent-Native”，通过 CLI Hub 统一调度任意命令行工具，打通传统软件与 LLM 交互鸿沟。 |
| **[obra/superpowers](https://github.com/obra/superpowers)** | 0 / **+822** | Agentic Skills 框架与方法论：定义技能原子化、可组合、可版本化的工程规范，附配套开发流程。 |
| **[n8n-io/n8n](https://github.com/n8n-io/n8n)** | 0 / **+325** | 公平代码工作流自动化平台，原生内置 AI 节点，400+ 集成，可视化编排 + 代码扩展，企业级落地首选。 |
| **[langgenius/dify](https://github.com/langgenius/dify)** | **161,463** / - | 一站式 Agentic Workflow/RAG 平台，支持云/私有化部署，可视化编排、模型管理、可观测性完备。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | **121,458** / - | 开源浏览器 Agent 库，提供隐身浏览器、云端托管 API，让 Agent 像人一样操作网页完成复杂任务。 |
| **[codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale)** | **41,183** / - | Rust 编写的终端编码 Agent，支持任务拆分多 Agent 协作，全代码开源、模型无关、极致可控。 |

### 📦 AI 应用（具体产品、垂直场景方案）
| 项目 | Stars (总量 / 今日新增) | 一句话说明 |
| :--- | :--- | :--- |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | **78,365** / - | 文档/主题一键生成**原生 PPTX**（形状、动画、图表、母版、语音备注），而非 Markdown 渲染，办公刚需杀手级应用。 |
| **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** | **73,399** / - | LLM 多市

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*