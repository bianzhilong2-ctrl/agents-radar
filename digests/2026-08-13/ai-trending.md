# AI 开源趋势日报 2026-08-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-13 01:08 UTC

---

## 📅 **AI 开源趋势日报**（2026‑08‑13）

### 🌟 今日速览
- **多智能体协作工具爆炸式增长**——`agency‑agents`、`orca` 和新出现的 `Switchyard` 等项目大幅上涨，反映出社区对构建互操作 Agent 编队的兴趣激增。
- **小型边缘基础模型崛起**——`needle`（14 MB 模型）和 `Kronos`（金融语言模型）成为明日热门，凸显出将 AI 能力下沉到手机、可穿戴设备和专用硬件的强劲需求。
- **RAG + Agent 融合成为标准**——`RAGFlow`、`Flowise` 和 `Cognee` 等项目成为关注焦点，表明开发者正在将检索增强功能与自主工作流无缝集成。
- **AI 原生生产力平台崛起**——`macro`（统一团队工作空间）和 `embabel‑agent`（JVM Agent 框架）等项目证明，AI 正在超越原型阶段，进入开源商业产品的开发阶段。

---

### 🔧 **AI 基础工具**
| 项目 | Star 数 | 一句话说明 |
|---|---|---|
| **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐ 164 018 (topic:llm) | 成熟的开源框架，定义了文本、视觉、音频和多模态模型，涵盖推理和训练。 |
| **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** ⭐ 144 097 (topic:llm) | 「Agent 工程平台」，统一 LLM 链、记忆和工具调用。 |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐ 166 457 (topic:llm) | 可扩展的上下文 API，用于网络搜索、抓取和大规模 AI 内容获取。 |
| **[open-webui/open-webui](https://github.com/open-webui/open-webui)** ⭐ 148 613 (topic:llm) | 开箱即用的 AI 界面，支持本地 Ollama、OpenAI API 等后端。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐ 108 973 (topic:llm) | 让网页对 AI 代理可见，通过浏览器自动化实现复杂在线任务。 |
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐ 87 551 (topic:rag) | 领先的开源 RAG 引擎，结合检索增强和自主 Agent 功能。 |
| **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** ⭐ 66 096 (topic:rag) | 智能压缩工具输出、日志和 RAG 分片，节省 20‑95 % 的 LLM Token 成本。 |
| **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐ 63 137 (topic:rag) | 为 AI Agent 提供持久化跨会话记忆的通用内存层。 |

---

### 🤖 **AI 智能体/工作流**
| 项目 | Star 数 | 一句话说明 |
|---|---|---|
| **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** ⭐ 186 563 (topic:llm) | 自治 AI Agent 框架，追求目标、自主规划和执行任务。 |
| **[affaan-m/ECC](https://github.com/affaan-m/ECC)** ⭐ 239 759 (topic:llm) | 高性能 Agent  harness 优化系统，支持 Claude Code、Cursor 等 IDE。 |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐ 229 582 (topic:llm) | 可扩展的 Agent 架构，随用户需求动态演化。 |
| **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** ⭐ 0 (+1873 today) | 完整 AI 代理商店：前端魔术师、Reddit 问题专家、奇思妙想注入器等。 |
| **[stablyai/orca](https://github.com/stablyai/orca)** ⭐ 0 (+1235 today) | ADE 平台，管理并行 Agent 编队，支持任意编码 Agent 订阅。 |
| **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** ⭐ 74 006 (topic:ai-agent) | Bash 即开即用的「Claude Code 风格」Agent harness，纯本地部署。 |
| **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** ⭐ 71 154 (topic:ai-agent) | 为 Agent 提供「眼睛」，可无费用访问 Twitter、Reddit、YouTube、Bilibili、Xiaohongshu 等。 |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** ⭐ 50 355 (topic:ai-agent) | 生产力工作室，集成智能聊天、自主 Agent 和 300 + 助理，支持所有主流 LLM。 |
| **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** ⭐ 46 901 (topic:ai-agent) | 轻量级、自托管的个人 AI Agent 框架，内含 WebUI、工具、记忆和多 Agent 工作流。 |
| **[zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)** ⭐ 46 472 (topic:ai-agent) | 开源超级 AI 助手 & Agent harness，支持任务规划、工具调用和自演化记忆。 |

---

### 📦 **AI 应用（垂直场景与产品）**
| 项目 | Star 数 | 一句话说明 |
|---|---|---|
| **[hugohe3/ppt‑master](https://github.com/hugohe3/ppt-master)** ⭐ 45 585 (topic:ai-agent) / ⭐ 0 (+476 today) | AI 将文档/主题一键转为原生 PowerPoint 演示，带图表、动画和语音旁白。 |
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** ⭐ 102 815 (topic:rag) | 根据关键词自动生成高清短视频，集 AI 大模型和工作流自动化于一体。 |
| **[Lightricks/LTX‑2](https://github.com/Lightricks/LTX-2)** ⭐ 0 (+65 today) | LTX‑2 音频‑视频生成模型的官方 Python 推理和 LoRA 训练包。 |
| **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** ⭐ 0 (+571 today) | 开箱即用的工作场所 Agent 管理器，让团队轻松协作。 |
| **[cactus-compute/needle](https://github.com/cactus-compute/needle)** ⭐ 0 (+315 today) | 14 MB 边缘优化基础模型，适用于手机、可穿戴设备、智能家居和机器人。 |
| **[ZuodaoTech/everyone-can-use-english](https://github.com/ZuodaoTech/everyone-can-use-english)** ⭐ 0 (+86 today) | 基于 AI 的英语学习平台，旨在让每个人都能流利使用英语。 |

---

### 🧠 **大模型与训练**
| 项目 | Star 数 | 一句话说明 |
|---|---|---|
| **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** ⭐ 0 (+266 today) | 金融市场语言的 foundation model，支持量化交易和市场分析。 |
| **[cactus-compute/needle](https://github.com/cactus-compute/needle)** ⭐ 0 (+315 today) | 仅 14 MB 的边缘设备基础模型，适用于手机、可穿戴设备等。 |
| **[Lightricks/LTX‑2](https://github.com/Lightricks/LTX-2)** ⭐ 0 (+65 today) | LTX‑2 音频‑视频生成模型的官方训练和推理包。 |
| **[AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio)** ⭐ 75 (topic:llm-model) | 用纯 Rust 和 Candle 从头构建的解码器 only LLM，支持 Tiny（25 M）到 Large（1.3 B）。 |
| **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** ⭐ 8 251 (topic:llm-model) | 在 Rust 中构建模块化、可扩展的 LLM 应用，稳定的前缀缓存机制。 |
| **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐ 7 297 (topic:llm-model) | 多模型（Llama3、GPT‑4、Qwen 等）和 100 + 数据集的 LLM 评估平台。 |
| **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** ⭐ 196 982 (topic:ml) | 广泛使用的机器学习框架，支持所有级别上的模型训练和部署。 |
| **[pytorch/pytorch](https://github.com/pytorch/pytorch)** ⭐ 102 351 (topic:ml) | 动态神经网络框架，GPU 加速性能领先。 |

---

### 🔍 **RAG / 知识图谱

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*