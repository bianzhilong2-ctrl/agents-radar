# AI 开源趋势日报 2026-08-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-29 04:50 UTC

---

# 📊 AI 开源趋势日报 | 2026-08-29

---

## 1. 今日速览

*   **Agent 技能生态标准化加速**：Anthropic 官方插件库、Cursor 插件规范、Archify 等“技能即代码”项目同登热榜，标志着 Agent 能力扩展从临时脚本走向工业级标准化分发。
*   **实时语音/多模态 Agent 框架成熟**：LiveKit Agents 登顶趋势，配合 OpenMontage 的 Agentic 视频制作管线，表明“实时交互+长任务编排”已成主流开发范式。
*   **本地化/零成本 LLM 接入需求爆发**：FreeLLMAPI（74亿 Token/月免费额度）与 Ollama 持续高星，开发者正大规模构建脱离商业 API 依赖的私有化推理栈。
*   **Graph RAG 与长时记忆成刚需**：GitNexus、Graphify、Cognee、Mem0 等项目高星，解决“代码库理解”与“跨会话记忆”成为 Agent 落地的核心基建。
*   **垂直场景 Agent 产品化突围**：从科研、视频、PPT、股票分析到求职，一批“开箱即用”的垂直 Agent 应用（如 OpenMontage, PPT-Master, Career-Ops）以完整交付物形态吸睛，超越单纯框架演示。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[ollama/ollama](https://github.com/ollama/ollama)** | 179,675 / - | 本地大模型运行事实标准，今日依然是私有化部署首选入口，支持最新 Kimi-K2.6、GLM-5.2 等模型。 |
| **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** | 145,216 / - | Agent 工程平台核心框架，生态位稳固，LangGraph 配合构建有状态多智能体应用。 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | 164,588 / - | 模型定义与推理的基石库，配合 `accelerate`/`peft` 覆盖训练微调全链路。 |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** | 173,709 / - | Agent 联网必备的“上下文 API”，将任意网页转为 LLM 就绪的 Markdown/结构化数据。 |
| **[tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi)** | 0 / **+433** | **今日趋势榜**。聚合 34 家免费提供商、635 个模型端点的 OpenAI 兼容网关，智能路由+故障转移，极大降低个人开发成本。 |
| **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** | 0 / **+67** | **今日趋势榜**。官方出品，让 Coding Agent 直接驱动 Chrome DevTools 进行调试、性能分析、DOM 操作，闭环“写-跑-改”。 |
| **[livekit/agents](https://github.com/livekit/agents)** | 0 / **+22** | **今日趋势榜**。实时语音/视频 AI Agent 框架，WebRTC 原生支持，是构建类 GPT-4o 实时交互助手的首选基建。 |
| **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** | 0 / **+457** | **今日趋势榜**。Anthropic 官方维护的 Claude Code 插件目录，确立了 Agent 技能分发的官方标准与信任链。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[langgenius/dify](https://github.com/langgenius/dify)** | 153,789 / - | 低代码 Agentic 工作流引擎，可视化编排 RAG、工具、插件，原型到生产零重构，团队协作首选。 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | 111,598 / - | 让 Agent 像人一样操作浏览器完成复杂 Web 任务，自动化测试、数据采集、表单填写的通用“手”。 |
| **[HKUDS/nanobot](https://github.com/HKUDS/nanobot)** | 47,510 / - | 超轻量自托管个人 Agent 框架，内置 WebUI、MCP、多 Agent 工作流、记忆，单文件部署，极客自建首选。 |
| **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** | 0 / **+1,144** | **今日趋势榜**。全球首个开源 Agentic 视频制作系统，12 条流水线、700+ Skill，将 Coding Agent 变身视频工作室。 |
| **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** | 0 / **+720** | **今日趋势榜**。面向科研的 Agent 技能库，163 个验证技能 + 100+ 科学数据库，兼容主流 Agent 客户端，科研自动化标杆。 |
| **[tt-a1i/archify](https://github.com/tt-a1i/archify)** | 0 / **+4,562** | **今日趋势榜单 Top 1**。Agent 技能：生成可验证的架构/时序/数据流图（自包含 HTML），解决“Agent 画图不可信”痛点。 |
| **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** | 112,065 / - | 将代码库、文档、SQL 转为可查询知识图谱，基于确定性 AST 解析而非向量检索，代码理解零幻觉。 |
| **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)** | 0 / **+1,396** | **今日趋势榜**。让 Agent 像“懒惰资深工程师”思考：先删代码、复用现有、避免过度设计，Token 效率极高。 |

---

### 📦 AI 应用（垂直场景解决方案、生产级产品）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** | 51,207 / - | 统一接入前沿 LLM 的生产力工作室，内置 300+ Assistant、自主 Agent、知识库，个人/团队开箱即用。 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | 50,066 / - | 文档/主题一键生成原生 PPTX（带动画、图表、母版、备注音频），解决“AI 做 PPT 只能给大纲/Markdown”痛点。 |
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | 118,223 / - | 一键从关键词生成高清短视频（脚本、素材、配音、字幕全自动），短视频批量化生产利器。 |
| **[abi/screenshot-to-code](https://github.com/abi/screenshot-to-code)** | 0 / **+326** | **今日趋势榜**。截图转干净前端代码，支持 React/Vue/Tailwind/HTML，UI 还原度高，前端重构/原型验证神器。 |
| **[bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)** | 0 / **+3,829** | **今日趋势榜 Top 2**。浏览器端真实数据驱动的 3D 间谍卫星模拟器，开源空间情报可视化的新范式。 |
| **[santifer/career-ops](https://github.com/santifer/career-ops)** | 69,118 / - | 开源 AI 求职 Agent：扫描招聘网站、结构化评分、定制简历、跟踪投递，全流程本地化运行在 CLI 中。 |
| **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** | 64,221 / - | 多市场股票智能分析系统：多源行情+实时新闻+决策看板+自动推送，零成本定时运行的量化研报助手。 |
| **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** | 50,683 / **+703** | **今日趋势榜**。手把手从零构建 LLM/Agent 系统的教学级代码库，配套书籍/视频，工程落地最佳入门资料。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具、评测）

| 项目 | Stars (总量 / 今日新增) | 一句话解读 |
| :--- | :--- | :--- |
| **[marin-community/marin](https://github.com/marin-community/marin)** | 0 / **+236** | **今日趋势榜**。开源基础模型研发框架，聚焦大规模分布式训练、数据处理、评测一体化，社区驱动的“第二个 Megatron/Llama-Factory”。 |
| **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** | 103,965 / - | PyTorch 从零实现 ChatGPT 级 LLM 的教科书级代码库，配套书籍畅销，理解 Transformer 内核机制必读。 |
| **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | 7,373 / - | 上海 AI 实验室出品的大模型评测平台，支持 100+ 数据集、主流模型一键跑分，榜单公信力高。 |
| **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** | 4,528 / - | 在 Apple Silicon

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*