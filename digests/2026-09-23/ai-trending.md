# AI 开源趋势日报 2026-09-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-23 02:28 UTC

---

Here's a thinking process:

1.  **Understand the Goal**: The user wants me to act as a technical analyst focused on the AI open source ecosystem. I need to process given GitHub data (Trending + AI topic search) for a specific date (2026-09-23), filter AI-related projects, categorize them, and generate a structured "AI Open Source Trend Daily" report.

2.  **Analyze the Input Data**:
   - **Trending Repos (8 listed)**: I need to filter out non-AI ones. Let's check each:
     - `anthropics/financial-services` [Python] ⭐0 (+438 today) - "financial-services" sounds like a domain-specific repo, not necessarily AI/ML core. I'll check topic/context. It's from anthropics, likely AI-related but the description isn't given. I'll assume it's AI-related if it's from anthropics, but the name "financial-services" could be a library/service. Looking at the trend, it has +438 stars today, which is high. I need to decide. The prompt says: "For Trending list non-AI projects, directly skip." I'll evaluate based on name/topic. Without explicit topic, I might skip or include if clearly AI. Let's look at others first.
     - `agent-substrate/substrate` [Go] ⭐0 (+245 today) - "Agent Substrate: the core system" - Clearly AI agents. Include.
     - `dream-num/univer` [TypeScript] ⭐0 (+255 today) - "The Office Harness for AI Agents" - Clearly AI agents. Include.
     - `davila7/claude-code-templates` [Python] ⭐0 (+64 today) - "CLI tool for configuring and monitoring Claude Code" - Clearly AI/CLI. Include.
     - `google/ax` [Go] ⭐0 (+2305 today) - "Google's open agentic orchestration runtime" - Clearly AI agents/orchestration. Include.
     - `mvt-project/mvt` [Python] ⭐0 (+441 today) - "Mobile Verification Toolkit" - Forensics, not AI. Skip.
     - `superdesigndev/treg` [Python] ⭐0 (+230 today) - "OpenRouter for agent tools" - AI agents/tools. Include.
     - `browser-use/video-use` [Python] ⭐0 (+191 today) - "Edit videos with coding agents" - AI + video. Include, but borderline. I'll include as AI tool.

   - **AI Topic Search (80 repos listed)**: All have `[topic:ai-agent]`, `[topic:rag]`, `[topic:ml]`, `[topic:vector-db]`, `[topic:llm-model]`, `[topic:llm]`. These are explicitly AI-tagged. I'll need to filter and categorize them. Many are already in the list, but I should process the full set. However, the prompt says "共 80 个仓库，已去重" - 80 repos after dedup. I need to select representative ones per category, not list all 80. I'll pick the most relevant/high-star ones per category.

   Wait, the prompt structure: "第一步（过滤）：从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。"

   So I need to produce a filtered list, then categorize, then output the report.

   Let's systematically go through the Trending list and keep only AI-related:
   - `anthropics/financial-services` - I'm not sure. "anthropics" is an AI company (Anthropic), but "financial-services" repo could be a SDK or sample. Given the company, I'll likely include it as AI, but the star delta is +438 today, which is high. I'll include it with a note, or maybe skip if not clearly AI. Let's look at the description: none given. I'll decide to include it as AI given the org, but I'll be cautious. Actually, the prompt says "排除与 AI 无关的通用工具、前端框架、游戏等". financial-services could be a fintech library without AI. I'll skip it to be safe, or include if I can justify. I'll skip it.
   - `agent-substrate/substrate` -> Keep (AI agents)
   - `dream-num/univer` -> Keep (AI agents/office)
   - `davila7/claude-code-templates` -> Keep (AI CLI)
   - `google/ax` -> Keep (AI orchestration)
   - `mvt-project/mvt` -> Skip (forensics, not AI)
   - `superdesigndev/treg` -> Keep (AI agent tools)
   - `browser-use/video-use` -> Keep (AI video editing)

   Now, the AI Topic Search has 80 repos. I need to filter them too, but the prompt says "AI 主题搜索结果（共 80 个仓库，已去重）". I'll select representative ones for the categories. Actually, the report should include "各维度热门项目" from the filtered set. I'll combine the filtered Trending + selected Topic Search repos.

   But wait, the report structure says:
   - "今日速览"
   - "各维度热门项目" — list 3-8 per category
   - "趋势信号分析"
   - "社区关注热点"

   I need to make sure no duplicate projects, and prioritize Trending ones if they overlap with Topic Search.

   Let's categorize the Trending kept repos:
   - `agent-substrate/substrate` [Go] -> AI Agents/Workflow
   - `dream-num/univer` [TypeScript] -> AI Agents/Workflow
   - `davila7/claude-code-templates` [Python] -> AI Tools/CLI
   - `google/ax` [Go] -> AI Agents/Workflow
   - `superdesigndev/treg` [Python] -> AI Agents/Tools
   - `browser-use/video-use` [Python] -> AI Tools/Application

   Now, from the Topic Search, I need to pick reps per category. The categories are:
   - 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
   - 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
   - 📦 AI 应用（具体应用产品、垂直场景解决方案）
   - 🧠 大模型/训练（模型权重、训练框架、微调工具）
   - 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

   I'll go through the Topic Search list and pick ~3-8 per category, focusing on highest stars or most relevant/trending.

   Let's list the Topic Search repos with their topics/stars:
   I'll parse mentally or systematically. There are many. I'll pick the most representative.

   Actually, I can structure the selection by scanning the list. Let's do it efficiently.

   First, I'll create the filtered combined list, then categorize.

   Let's list all Topic Search repos with clear categories:
   - [topic:ai-agent]: 
     - NousResearch/hermes-agent (248k)
     - career-ops-hq/career-ops (72k) - AI job search, maybe AI application/tool
     - ZhuLinsen/daily_stock_analysis (65k) - AI stock analysis, application
     - hugohe3/ppt-master (56k) - AI PPT generation, application
     - CherryHQ/cherry-studio (52k) - AI productivity studio, agent
     - bojieli/ai-agent-book (50k) - book, educational
     - HKUDS/nanobot (48k) - AI agent framework
     - zhayujie/CowAgent (47k) - AI assistant & agent harness
     - siyuan-note/siyuan (46k) - knowledge workspace with AI agents
     - Hmbown/Codewhale (41k) - coding agent
     - CopilotKit/CopilotKit (37k) - frontend stack for agents
     - esengine/DeepSeek-Reasonix (35k) - AI coding agent
     - agentscope-ai/QwenPaw (35k) - personal AI assistant
     - HKUDS/Vibe-Trading (33k) - trading agent
     - Gitlawb/openclaude (33k) - runs anything
     - (and maybe others, but these are the high-star ai-agent ones)

   - [topic:rag]:
     - open-webui/open-webui (152k)
     - langchain-ai/langchain (146k)
     - Shubhamsaboo/awesome-llm-apps (139k)
     - Graphify-Labs/graphify (120k)
     - thedotmack/claude-mem (94k)
     - infiniflow/ragflow (91k)
     - datawhalechina/hello-agents (80k)
     - headroomlabs-ai/headroom (73k)
     - Mintplex-Labs/anything-llm (66k)
     - mem0ai/mem0 (65k)
     - run-llama/llama_index (52k)
     - jeecgboot/JeecgBoot (47k) - low-code AI platform
     - milvus-io/milvus (46k) - vector db
     - langchain-ai/langgraph (42k)
     - (and others like input-tags, but these are core)

   - [topic:ml]:
     - tensorflow/tensorflow (200k)
     - huggingface/transformers (166k)
     - rasbt/LLMs-from-scratch (105k)
     - pytorch/pytorch (103k)
     - Developer-Y/cs-video-courses (83k) - courses, maybe not project
     - netdata/netdata (80k) - observability with AI, but topic ml
     - OpenBB-finance/OpenBB (73k) - AI quant platform
     - scikit-learn/scikit-learn (67k)
     - keras-team/keras (64k)
     - ultralytics/ultralytics (61k)
     - roboflow/supervision (50k)
     - microsoft/qlib (48k) - AI quant
     - apache/airflow (46k) - workflow, maybe AI
     - paperless-ngx/paperless-ngx (45k) - doc mgmt with AI
     - (many more, but I'll pick tops)

   - [topic:vector-db]:
     - meilisearch/meilisearch (59k)
     - VectifyAI/PageIndex (35k)
     - qdrant/qdrant (34k)
     - topoteretes/cognee (30k)
     - NirDiamant/RAG_Techniques (29k)
     - weaviate/weaviate (16k)
     - alibaba/zvec (15k)
     - langchain4j/langchain4j (13k)
     - neuml/txtai (12k)
     - StarTrail-org/LEANN (12k)
     - lancedb/lancedb (11k)
     - oceanbase/oceanbase (10k)

   - [topic:llm-model]:
     - jingyaogong/minimind (62k)
     - 0xPlaygrounds/rig (8k)
     - open-compass/opencompass (7k)
     - skyzh/tiny-llm (4k)
     - samchon/nestia (2k)
     - zi-yue-1129/DATAGEN (1k)
     - acon96/home-llm (1k)
     - llm-jp/awesome-japanese-llm (1k)
     - thinkwee/AwesomeOPD (868)
     - apache/casbin-gateway (636)
     - Event-AHU/Medical_Image_Analysis (241)
     - asukaminato0721/telegram-summary-bot (200)
     - testtimescaling/testtimescaling.github.io (112)
     - LancerLab/croqtile (62)
     - R-D-BioTech-Alaska/Qelm (27)

   - [topic:llm]:
     - affaan-m/ECC (265k) - performance optimization
     - Significant-Gravitas/AutoGPT (187k)
     - firecrawl/firecrawl (183k)
     - ollama/ollama (181k)
     - langgenius/dify (156k)
     - harry0703/MoneyPrinterTurbo (125k)
     - browser-use/browser-use (115k)
     - TauricResearch/TradingAgents (108k)
     - JuliusBrussee/caveman (107k)
     - (and others)

   Now, I need to produce the report. The prompt says: "第一步（过滤）：从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。"

   So in the report, I should implicitly filter by only including AI-related projects in the categories.

   Let's plan the output:

   **第一步（过滤）隐含**：I'll only list AI-related projects in the subsequent sections. I won't explicitly list the filtering step as a separate section, but the report starts with "今日速览", etc. The prompt says "生成一份结构清晰的《AI 开源趋势日报》，要求：第一步（过滤）... 第二步（分类）... 第三步（输出报告）". So I need to produce the report, and the filtering/category logic should be reflected in it. I can mention the filtering rationale in the analysis, but the final output is the report. I'll make sure the report's project lists are already filtered and categorized.

   Let's structure the report as requested:

   1. **今日速览** — 3-5 sentences
   2. **各维度热门项目** — each 3-8 per category, with name (link), stars (total + today new), one-line description
   3. **趋势信号分析** — 200-300 words
   4. **社区关注热点** — 3-5 bullet points with reasons

   I need to select the projects. I'll prioritize the Trending ones if they are AI, and then add high-star Topic Search ones to fill categories, ensuring no heavy overlap, or I can combine them naturally.

   Let's decide on the categories and pick reps:

   **🔧 AI 基础工具 (AI Basic Tools/Frameworks/SDK/CLI)**:
   - google/ax (Go, AI orchestration runtime) - from Trending, +2305 today, huge spike. Keep.
   - ollama/ollama (Go, run LLMs locally) - from Topic, 181k stars, essential.
   - anthropic/... wait, not in list. From Topic: affaan-m/ECC (265k) - performance optimization system for agents, maybe tools.
   - 0xPlaygrounds/rig (Rust, build modular LLM apps) - 8k stars, systems focus.
   - mem0ai/mem0 (Python, memory layer for AI agents) - 65k stars, good for tools.
   - browser-use/browser-use (Python, agents that use browser) - 115k stars, AI tool.
   - langgenius/dify (TypeScript, build agentic workflows/RAG) - 156k stars, collaborative workspace, tools.

   Actually, Dify is often categorized as AI application/platform, but has tools aspect. I'll decide.

   Let's re-evaluate categories as defined:
   - 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
   - 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
   - 📦 AI 应用（具体应用产品、垂直场景解决方案）
   - 🧠 大模型/训练（模型权重、训练框架、微调工具）
   - 🔍 RAG/知识库（向量数据库、检索增强、知识管理}

   I'll map each project to its primary category, noting a project can be in multiple but I'll put it in the main one.

   Let's pick reps:

   **🔧 AI 基础工具**:
   - google/ax [Go] ⭐(total? not given, but today +2305) - Google's open agentic orchestration runtime. Highlight: core infrastructure for agent orchestration, massive star surge today.
   - ollama/ollama [Go] ⭐181,495 - Get up and running with various LLMs locally. Essential inference engine/SDK.
   - 0xPlaygrounds/rig [Rust] ⭐8,702 - Build modular and scalable LLM applications in Rust. Systems-focused toolkit.
   - mem0ai/mem0 [Python] ⭐65,846 - The Memory Layer for AI Agents. Persistent context infrastructure.
   - langgenius/dify [TypeScript] ⭐156,895 - Build Agentic workflows, RAG pipelines, collaborative workspace. ( borderline tools vs application, I'll put in tools as it's a dev platform)

   Wait, Dify is often used as an app platform. I might put it in 📦 AI 应用 or 🤖 AI 智能体/工作流. I'll decide later.

   **🤖 AI 智能体/工作流**:
   - agent-substrate/substrate [Go] ⭐(today +245) - Core system for agents. From Trending.
   - dream-num/univer [TypeScript] ⭐(today +255) - The Office Harness for AI Agents. From Trending.
   - superdesigndev/treg [Python] ⭐(today +230) - OpenRouter for agent tools. From Trending.
   - NousResearch/hermes-agent [Python] ⭐248,130 - The agent that grows with you. High star, core agent framework.
   - HKUDS/nanobot [Python] ⭐48,490 - Ultra-lightweight, open-source, self-hosted personal AI agent framework.
   - zhayujie/CowAgent [Python] ⭐47,089 - Open-source super AI assistant & Agent Harness.
   - CopilotKit/CopilotKit [TypeScript] ⭐37,482 - The Frontend Stack for Agents & Generative UI.
   - esengine/DeepSeek-Reasonix [Go] ⭐35,679 - DeepSeek-native AI coding agent.
   - agentscope-ai/QwenPaw [TypeScript] ⭐35,217 - Personal AI Assistant with extensible capabilities.

   **📦 AI 应用**:
   - open-webui/open-webui [Python] ⭐152,856 - User-friendly AI Interface. Could be tools, but often used as UI for models/agents. I'll put in applications or tools. Let's put in tools? The category says "具体应用产品、垂直场景解决方案". Open-WebUI is an app. I'll put in 📦 AI 应用.
   - firecrawl/firecrawl [TypeScript] ⭐183,461 - Web data API to search, scrape, interact at scale. AI infrastructure/app.
   - Significant-Gravitas/AutoGPT [Python] ⭐187,503 - AutoGPT: vision of accessible AI, build tools.
   - browser-use/browser-use [Python] ⭐115,960 - Agents that use the browser. Application/tool.
   - TauricResearch/TradingAgents [Python] ⭐108,158 - Multi-Agents LLM Financial Trading Framework. Vertical application.
   - harry0703/MoneyPrinterTurbo [Python] ⭐125,192 - Generate HD short videos from topic/keyword with AI workflow. Vertical application.
   - OpenBB-finance/OpenBB [Python] ⭐73,387 - Open Data Platform for analysts, quants and AI agents. Vertical/quant application.

   **🧠 大模型/训练**:
   - jingyaogong/minimind [Python] ⭐62,205 - Train a 64M-parameter LLM from scratch in just 2h! Educational/model-building.
   - tensorflow/tensorflow [C++] ⭐200,260 - Core ML framework. Could be tools, but foundational. I'll include if needed, but maybe put in tools or ml. The category is "大模型/训练". TensorFlow is framework. I'll put in 🧠.
   - huggingface/transformers [Python] ⭐166,542 - Model-definition framework for SOTA models. Essential.
   - pytorch/pytorch [Python] ⭐103,183 - Tensors and dynamic neural networks. Essential.
   - raspbt/LLMs-from-scratch [Jupyter] ⭐105,404 - Implement ChatGPT-like LLM in PyTorch from scratch.
   - jingyaogong/minimind already listed.
   - open-compass/opencompass [Python] ⭐7,469 - LLM evaluation platform.
   - 0xPlaygrounds/rig [Rust] ⭐8,702 already in tools, but also model building.

   **🔍 RAG/知识库**:
   - open-webui/open-webui also has RAG, but I'll pick others.
   - langchain-ai/langchain [Python] ⭐146,900 - The agent engineering platform. (RAG+agents)
   - infiniflow/ragflow [Go] ⭐91,178 - Leading open-source RAG engine with agent capabilities.
   - meilisearch/meilisearch [Rust] ⭐59,374 - AI-powered hybrid search engine.
   - qdrant/qdrant [Rust] ⭐34,758 - Vector database & search engine.
   - weaviate/weaviate [Go] ⭐16,839 - Vector database with fault tolerance.
   - topoteretes/cognee [Python] ⭐30,924 - AI memory platform with knowledge graph.
   - NirDiamant/RAG_Techniques [Jupyter] ⭐29,587 - Advanced RAG techniques tutorials.
   - langchain4j/langchain4j [Java] ⭐13,146 - Java library for LLM-powered apps, tool calling, agents, RAG.

   Now, I need to ensure the Trending projects are integrated. The Trending AI ones I kept are: agent-substrate/substrate, dream-num/univer, davila7/claude-code-templates, google/ax, superdesigndev/treg, browser-use/video-use.

   Let's map them:
   - google/ax -> 🔧 AI 基础工具 (orchestration runtime)
   - agent-substrate/substrate -> 🤖 AI 智能体/工作流
   - dream-num/univer -> 🤖 AI 智能体/工作flow (office harness for agents)
   - davila7/claude-code-templates -> 🔧 AI 基础工具 (CLI tool for Claude Code)
   - superdesigndev/treg -> 🤖 AI 智能体/工作流 (OpenRouter for agent tools)
   - browser-use/video-use -> 📦 AI 应用 (edit videos with coding agents) or 🔧 tools. I'll put in 📦 AI 应用 as video editing app.

   Now, I need to pick 3-8 per category. I'll select the most representative and high-impact ones, ensuring diversity and recency/trend relevance.

   Let's finalize the selections:

   **🔧 AI 基础工具**:
   1. google/ax [Go] ⭐(today +2305) - Google's open agentic orchestration runtime. A core infrastructure piece seeing explosive daily star growth, signaling industry shift toward standardized agent orchestration runtimes.
   2. ollama/ollama [Go] ⭐181,495 - Get up and running with various LLMs locally. The de-facto standard for local LLM deployment and inference, crucial for on-prem agent development.
   3. 0xPlaygrounds/rig [Rust] ⭐8,702 - Build modular and scalable LLM applications in Rust. Systems-engineering focus, expanding the tech stack beyond Python for LLM tooling.
   4. mem0ai/mem0 [Python] ⭐65,846 - The Memory Layer for AI Agents. Provides persistent context across sessions, addressing a key bottleneck in agent reliability.

   **🤖 AI 智能体/工作流**:
   1. agent-substrate/substrate [Go] ⭐(today +245) - The core system for agent infrastructure. Trending today with +245 stars, representing foundational agent substrate interest.
   2. dream-num/univer [TypeScript] ⭐(today +255) - The Office Harness for AI Agents. Spreadsheets, docs, slides as a runtime for AI agents, blending productivity tools with agent frameworks.
   3. nousresearch/hermes-agent [Python] ⭐248,130 - The agent that grows with you. High-star framework emphasizing adaptive, self-improving agent capabilities.
   4. copilotkit/copilotkit [TypeScript] ⭐37,482 - The Frontend Stack for Agents & Generative UI. Enables agent integration across React, Angular, mobile, Slack, etc., reflecting the UI-agent

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*