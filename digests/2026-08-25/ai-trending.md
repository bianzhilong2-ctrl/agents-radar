# AI 开源趋势日报 2026-08-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-25 00:42 UTC

---

#  📈 AI 开源趋势日报 | 2026-08-25

---

## 1. 今日速览

- **编码智能体成「必争之地」**：OpenAI 官方 `codex` 单日狂揽 **近 2000 Stars** 登顶 Trending，Rust 原生、终端优先成为新标配；社区同步爆发 `free-claude-code`、`hermes-agent`、`openhuman` 等本地化/免费替代方案，**「终端原生 AI 编码助手」已成标准形态**。
- **Prompt/Skill 生态显性化**：`awesome-gpt-image-2`（+2449⭐）、`awesome-agent-skills`（+602⭐）、`andrej-karpathy-skills`（+588⭐）三大「技能/提示词库」同时登榜，标志着 **Prompt Engineering 从隐性经验转为可复用、可版本化的开源资产**。
- **本地优先+隐私优先成共识**：`maka` (Apache孵化)、`openhuman`、`freellmapi`、`claude-obsidian` 均强调 **本地数据所有权、离线运行、零遥测**，开发者对数据主权的诉求已渗透至基础设施层。
- **RAG 向「知识图谱+向量混合检索」进化**：`Graphify-Labs/graphify`、`cognee`、`LightRAG` 等项目热度持续，**纯向量检索让位于「图谱增强+结构化推理」**，解决长文本幻觉与上下文丢失。
- **AI 应用层垂直化深化**：`ai-job-search`（求职全流程）、`ppt-master`（专业级 PPT）、`daily_stock_analysis`（金融研报）等垂直 Agent 应用星标高、**落地即用**，单一功能 Agent 正向「可交付产品」跨越。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI、网关）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[openai/codex](https://github.com/openai/codex)** | 0 (+1,994 today) | **OpenAI 官方终端编码 Agent**，Rust 写就、零配置、原生支持沙箱与工具调用，定义「终端原生编码」新标准。 |
| **[ollama/ollama](https://github.com/ollama/ollama)** | 179,352 | 本地大模型运行「事实标准」，新增支持 Kimi-K2.6/GLM-5.2 等最新 SOTA，推动「模型即二进制」分发范式。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | 164,403 | 模型定义与推理基石，持续同步最新架构（如 GPT-OSS、Qwen3），是所有上层应用的「标准库」。 |
| **[tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)** | 0 (+174 today) | **统一 LLM 网关**，聚合 34 家免费提供商 635+ 端点，智能路由/熔断/加密密钥，解决「多模型管理」痛点。 |
| **[anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community)** | 0 (+489 today) | Claude 官方插件市场镜像，确立 **MCP (Model Context Protocol)** 生态标准，工具调用互操作性关键设施。 |
| **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** | 8,390 | Rust 生态模块化 LLM 应用框架，类型安全、零成本抽象，适合高性能生产级 Agent 构建。 |
| **[freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2)** | 0 (+2,449 today) | GPT-Image-2 **工业级提示词引擎**，530+ 逆向案例+20+ 模板+Skill 体系，将「提示词」工程化、资产化。 |
| **[VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)** | 0 (+602 today) | 1000+ 跨平台兼容 Agent Skill 集市（支持 Claude Code/Codex/Gemini/Cursor），推动技能复用标准化。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体编排）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | 235,794 (+896 today) | **「会成长的 Agent」**，核心卖点是长期记忆、自我进化与多模型编排，主打个性化超级助理赛道。 |
| **[tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman)** | 0 (+515 today) | Rust 构建的**本地优先超级智能**：生命周期记忆图谱 + Agent 舰队编排 + 深度研究员，隐私优先的「第二大脑」。 |
| **[apache/maka](https://github.com/apache/maka)** | 0 (+411 today) | Apache 孵化项目，**只读追加日志**记录模型/工具/权限全链路，提供可审计、可复现的 Agent 工作空间基础设施。 |
| **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** | 40,373 | 生产级有向循环图编排框架，状态持久化、人机介入、时间旅行调试，已成复杂多 Agent 系统「事实标准」。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | 110,370 | 让 Agent **像人一样操作浏览器**（点击/输入/滚动/下载），Web 自动化与数据采集的核心基础设施。 |
| **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** | 47,353 | 超轻量自托管 Agent 框架（<500 行核心），内置 WebUI/MCP/多 Agent 工作流，适合个人/中小团队快速落地。 |
| **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** | 37,019 | **Agent 前端栈**，提供 React 组件、AG-UI 协议，解决「Agent 如何在 Web/Slack/Mobile 原生交互」的工程难题。 |
| **[MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)** | 0 (+434 today) | **全流程求职 Agent**：JD 评分→简历定制→Cover Letter→面试模拟，跑在本地 Claude Code 上，数据不出机。 |

---

### 📦 AI 应用（垂直场景、生产力工具、行业方案）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[langgenius/dify](https://github.com/langgenius/dify)** | 153,391 | **低代码 Agentic 工作流平台**，可视化编排 RAG/Plugin/Workflow，支持云/私有化部署，企业级 AI 应用交付首选。 |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** | 51,007 | 桌面级 **AI 生产力工作台**：300+ 内置助手、多模型统一入口、知识库/联网/工具箱一体化，开箱即用。 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | 49,037 | **文档/主题 → 原生 PPTX**（形状/动画/图表/母版/语音），解决「大模型不会排版」痛点，办公自动化杀手级应用。 |
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | 115,960 | 一键「主题→高清短视频」（脚本/素材/剪辑/配音/字幕全自动），短视频内容工业化生产标杆。 |
| **[AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian)** | 0 (+310 today) | **Obsidian + Claude Code = 自组织二脑**，自动读取/链接/归档 Markdown，构建可查询知识图谱，开源 Notion 替代品。 |
| **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** | 63,780 | 多源行情+实时新闻+LLM 决策看板+自动推送，**金融垂直 Agent** 验证了「专业领域+工具链」商业化路径。 |
| **[siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)** | 45,967 | 隐私优先的**块级知识工作空间**，原生支持 AI 聊天/知识库/技能调用，人机共创新范式。 |
| **[openclaw/openclaw](https://github.com/openclaw/openclaw)** | 0 (+173 today) | 跨平台个人 AI 助手，支持语音/视觉/工具调用，主打「人人可部署的 Jarvis」，消费级 Agent 入口探索。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调、从零构建）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** | 54,972 | **2 小时从零训练 64M 参数 LLM**，极简代码库（<1000 行），是理解 Transformer 训练全流程的最佳教具。 |
| **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** | 103,683 | 手把手用 PyTorch 实现 ChatGPT 级 LLM（分词/注意力/预训练/SFT/RLHF），教学与工程参考双料标杆。 |
| **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** | 48,278 (+349 today) | **系统性 AI 工程训练营**：从张量到部署，强调「Learn → Build → Ship」，填补科研与工程鸿沟。 |
| **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** | 4,515 | 面向系统工程师的 **Apple Silicon 推理栈**（tiny vLLM + Qwen），深度剖析 KV Cache/Metal/内存带宽优化。 |
| **[pytorch/pytorch](https://github.com/pytorch/pytorch)** | 102,578 | 深度学习动态图框架霸主，2.6+ 强化编译器/分布式/量化，支撑绝大多数开源模型训练推理。 |
| **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** | 60,925 | YOLO 系列最新版（YOLO26/11/8），统一接口覆盖检测/分割/姿态/跟踪/分类，CV 落地首选。 |
| **[Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents)** | 6,196 | **原子化 Agent 构建理念**：将 Agent 拆解为可组合、可测试、可版本化的原子单元，对抗复杂度爆炸。 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、记忆层、知识图谱）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[open-webui/open-webui](https://github.com/open-webui/open-webui)** | 149,806 | **全能自托管 AI 界面**，集成 Ollama/OpenAI/RAG/工具/多模态，社区插件生态最活跃的「私有化 ChatGPT」。 |
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | 89,164 | **企业级 RAG 引擎**：深度文档解析(OCR/表格/公式)+ 图谱增强+ Agentic 工作流，解决复杂非结构化数据问答。 |
| **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** | 110,131 | **代码库/文档 → 可查询知识图谱**，基于确定性 AST 解析（非向量），边可解释、无幻觉，Claude Code/Cursor 原生技能。 |
| **[mem0ai/mem0](https://github.com/mem0ai/mem0)** | 63,965 | **Agent 通用记忆层**：长期/短期/工作记忆分层，自动抽取/更新/遗忘，让 Agent 跨会话「记住用户」。 |
| **[HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)** | 39,146 | **简洁高效 GraphRAG**：双层检索(低频实体+高频关键词)+ 增量更新，EMNLP 2025 收录，资源受限环境首选。 |
| **[qdrant/qdrant](https://github.com/qdrant/qdrant)** | 34,168 | Rust 写就的**高性能向量数据

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*