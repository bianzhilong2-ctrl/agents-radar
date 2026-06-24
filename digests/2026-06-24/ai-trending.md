# AI 开源趋势日报 2026-06-24

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-24 02:26 UTC

---

We need to produce a structured "AI 开源趋势日报" based on given trending data and search results.

Step 1: filter projects related to AI/ML, exclude generic tools, front-end frameworks, games, etc. For Trending list, directly omit non-AI projects.

Step 2: classify selected projects into categories: AI 基础工具, AI 智能体/工作流, AI 应用, 大模型/训练, RAG/知识库.

Step 3: output report with sections:

1. 今日速览: 3-5 sentences summarizing most noteworthy AI open source moves.

2. 各维度热门项目: each dimension list 3-8 representative projects, each with link, stars (total + today added), one-sentence description.

3. 趋势信号分析: 200-300 Chinese characters (approx). Summarize community attention: which AI tools gaining explosive attention; any new tech stacks appearing; relation to recent model releases/industry events.

4. 社区关注热点: bullet list 3-5 specific projects/directions with brief reasons.

Language Chinese, professional concise, each project must have GitHub link.

We must not include non-AI projects from Trending. Let's identify AI-related projects in Trending list:

- calesthio/OpenMontage: AI video production system => AI application.

- ZhuLinsen/daily_stock_analysis: LLM-driven stock analysis => AI application.

- mukul975/Anthropic-Cybersecurity-Skills: security skills for AI agents => AI tools.

- garrytan/gstack: Claude Code setup with tools => AI tools.

- bytedance/deer-flow: long-horizon SuperAgent harness => AI agent framework.

- koala73/worldmonitor: real-time global intelligence dashboard AI-powered => AI application.

- pmier-io/palmier-pro: macOS video editor built for AI => AI application (video editing tool)

- anthropics/claude-plugins-official => AI tools/plugins.

- shanraisshan/claude-code-best-practice => AI tools.

- revfactory/harness => meta-skill for agent teams => AI agent.

- jamiepine/voicebox => open-source AI voice studio => AI application.

- JCodesMore/ai-website-cloner-template => AI coding agents => AI tool.

- byoungd/English-level-up-tips => not AI, exclude.

- DeusData/codebase-memory-mcp => code intelligence MCP server => AI tool.

- NousResearch/hermes-agent => AI agent => AI tool.

- affaan-m/ECC => performance optimization system for agent harness => AI tool.

We need to remove non-AI projects.

From search results we have many AI-related projects (81). We need to filter and categorize.

We need to produce a report with categories and list 3-8 projects each.

Probably we will select top projects from both Trending and search results.

We need to include stars count (total + today added) if available.

We need to attach GitHub link.

We need to produce concise.

Let's craft categories:

- 🔧 AI 基础工具 (frameworks, SDKs, inference engines, dev tools, CLI)
- 🤖 AI 智能体/工作流 (agent frameworks, automation, multi-agent)
- 📦 AI 应用 (specific products, vertical solutions)
- 🧠 大模型/训练 (model weights, training frameworks, fine-tuning)
- 🔍 RAG/知识库 (vector DB, retrieval, knowledge management)

Now pick representative projects:

AI 基础工具: maybe "DeusData/codebase-memory-mcp" (C language, code intelligence), "affaan-m/ECC" (performance optimization), "zjunlp/LightThinker" maybe not. Also "lancedb/lancedb" is vector DB, but belongs to RAG category. For AI 基础工具: "DeusData/codebase-memory-mcp", "affaan-m/ECC", "anthro.."? Also "anthropics/claude-plugins-official" is plugin directory, maybe AI 基础工具. "garrytan/gstack" is CLI setup. "bytedance/deer-flow" maybe agent harness but also AI 工具.

AI 智能体/工作流: "bytedance/deer-flow", "revfactory/harness", "shanraisshan/claude-code-best-practice", "ZhuLinsen/daily_stock_analysis"? Actually that's application. "OpenMontage" is video production agentic system. "OpenMontage" maybe AI 应用. Let's categorize.

AI 应用: "OpenMontage", "palmier-pro", "voicebox", "ai-website-cloner-template", "worldmonitor", "cherry-studio"? Not in trending. "firecrawl" maybe not listed.

大模型/训练: maybe not many in trending list; but from search results we have "huggingface/transformers", "ollama", "vllm", "tensorflow", "pytorch", but those are large models but not trending today? They are not in trending list but can be included in search results for categories. However the instruction says to filter from above data (Trending + search). So we can include them.

RAG/知识库: many from search results (dify, open-webui, langchain, claudemem, ragflow, graphify, anything-llm, mem0, flowise, llama_index, headroom, milvus, weaviate, txtai, etc.)

We need to produce a clear report.

We need to include stars counts for selected projects: Use data from trending list where available (stars 0 + added). For others from search results, we have star counts (e.g., langgenius/dify ⭐146,334 [topic:rag]). Also for others like open-webui ⭐142,786, etc.

But the instruction: "每个项目包含：项目名（附链接） stars 数据（总量 + 今日新增，如有） 一句话说明：这个项目是什么，为什么今天值得关注". So we must provide stars total and today added. For many search results we only have total stars, not today added. We can note "（暂无今日新增）" or just omit today added if not provided. But better to include if known; if not, maybe say "（当日新增 stars 未公开）". But they said like "⭐0 (+3592 today)" in trending list. For others we can approximate: maybe "⭐146,334 (无今日新增数据)". Or just use total stars and note "（截至今日）". Probably okay.

Now produce sections.

We need to filter out non-AI projects from trending: exclude generic tools etc. So we keep:

- OpenMontage
- ZhuLinsen/daily_stock_analysis
- garrytan/gstack? maybe AI tool.
- bytedance/deer-flow
- koala73/worldmonitor (AI-powered)
- pmier-io/palmier-pro (AI video editor)
- anthropics/claude-plugins-official
- shanraisshan/claude-code-best-practice
- revfactory/harness
- jamiepine/voicebox
- JCodesMore/ai-website-cloner-template
- DeusData/codebase-memory-mcp (though not in trending? It is in search results)
- NousResearch/hermes-agent (search results)
- affaan-m/ECC (search results)
- etc.

But we need to produce final categories with representative projects.

Probably best to select from trending list the AI-related ones and also include top search results that are highly starred.

Let's craft categories:

1. 🔧 AI 基础工具
- gstack (garrytan/gstack) [TypeScript] ⭐0 (+1011 today) – 23 opinionated tools for Claude Code setup.
- codebase-memory-mcp (DeusData/codebase-memory-mcp) [C] ⭐0 (+1300 today) – High‑performance code indexing MCP server.
- ECC (affaan-m/ECC) [JavaScript] ⭐0 (+593 today) – Performance‑optimization harness for AI agents.
- Claude plugins official (anthropics/claude-plugins-official) [Python] ⭗0 (+77 today) – Official curated plugins for Claude Code.
- Deer Flow (bytedance/deer-flow) [Python] ⭐0 (+739 today) – Long‑horizon SuperAgent harness with memory, tools, sub‑agents.

2. 🤖 AI 智能体/工作流
- OpenMontage (calesthio/OpenMontage) [Python] ⭐0 (+3592 today) – Agentic video production system with 12 pipelines, 52 tools.
- Deer Flow (bytedance/deer-flow) also fits here (but already used). Maybe also "revfactory/harness" [HTML] ⭐0 (+128 today) – Meta‑skill for designing domain‑specific agent teams.
- zhayujie/CowAgent (zhayujie/CowAgent) [Python] ⭐45,583 – Open‑source super AI assistant & Agent Harness.
- OpenClaude (GitHub?) not in trending; but "iOfficeAI/AionUi" maybe not. Use "OpenWebUI"? Not in trending but search. Maybe include "thedotmack/claude-mem" (but not in trending). Let's pick from search: "thedotmack/claude-mem" – Persistent context across sessions. But it's not in trending. However classification doesn't restrict to trending; can include from search results.

But the instruction: "从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。" So we can choose from both trending and search results, but must filter non-AI. So we can include many from search.

Thus we can pick representative projects for each category from the filtered list (including both trending and search). Provide stars and today added if available.

Now design the report.

First, 今日速览: 3-5 sentences summarizing.

Then 各维度热门项目: list 3-8 per category with link, stars, description.

Then 趋势信号分析: 200-300 Chinese characters.

Then 社区关注热点: bullet list 3-5 items.

Now produce final answer.

We need to ensure each project links correctly.

Let's compile data:

From trending:

- OpenMontage: link https://github.com/calesthio/OpenMontage, stars 0 (+3592 today)
- ZhuLinsen/daily_stock_analysis: link https://github.com/ZhuLinsen/daily_stock_analysis, stars 0 (+1119 today)
- garrytan/gstack: link https://github.com/garrytan/gstack, stars 0 (+1011 today)
- bytedance/deer-flow: link https://github.com/bytedance/deer-flow, stars 0 (+739 today)
- koala73/worldmonitor: link https://github.com/koala73/worldmonitor, stars 0 (+294 today)
- pmier-io/palmier-pro: link https://github.com/palmier-io/palmier-pro, stars 0 (+1630 today)
- anthropics/claude-plugins-official: link https://github.com/anthropics/claude-plugins-official, stars 0 (+77 today)
- shanraisshan/claude-code-best-practice: link https://github.com/shanraisshan/claude-code-best-practice, stars 0 (+344 today)
- revfactory/harness: link https://github.com/revfactory/harness, stars 0 (+128 today)
- jamiepine/voicebox: link https://github.com/jamiepine/voicebox, stars 0 (+1045 today)
- JCodesMore/ai-website-cloner-template: link https://github.com/JCodesMore/ai-website-cloner-template, stars 0 (+826 today)
- DeusData/codebase-memory-mcp: this is not in trending list but appears in search; but it's in trending? Actually it's in trending list under "DeusData/codebase-memory-mcp". It shows stars 0 (+1300 today). So it's also in trending list. Good.

- NousResearch/hermes-agent: appears twice in search but also maybe not in trending? Actually "NousResearch/hermes-agent" appears in trending list? Not listed in trending, but appears in search as well. But fine.

- affaan-m/ECC: appears both in trending and search; in trending it's listed as "affaan-m/ECC" [JavaScript] ⭐0 (+593 today). So it's also in trending.

Now search results with high stars:

- langgenius/dify: ⭐146,334 [topic:rag] - no today added.
- open-webui/open-webui: ⭐142,786 [topic:rag]
- langchain-ai/langchain: ⭐140,016 [topic:rag]
- thedotmack/claude-mem: ⭐83,958 [topic:rag]
- PaddlePaddle/PaddleOCR: ⭐83,542 [topic:rag]
- infiniflow/ragflow: ⭐83,470 [topic:rag]
- safishamsi/graphify: ⭐71,229 [topic:rag]
- Mintplex-Labs/anything-llm: ⭐61,988 [topic:rag]
- datawhalechina/hello-agents: ⭐61,298 [topic:rag]
- mem0ai/mem0: ⭐59,258 [topic:rag]
- FlowiseAI/Flowise: ⭐53,956 [topic:rag]
- run-llama/llama_index: ⭐50,323 [topic:rag]
- headroomlabs-ai/headroom: ⭐48,617 [topic:rag]
- jeecgboot/JeecgBoot: ⭐46,852 [topic:rag] (but it's a low-code platform, maybe AI component)
- milvus-io/milvus: ⭐44,919 [topic:rag] (vector DB)
- NousResearch/hermes-agent: ⭐201,026 [topic:ai-agent] (big stars)
- zhayujie/CowAgent: ⭐45,583 [topic:ai-agent]
- HRI-EU/tulip_agent: ⭐44 [topic:llm-model] (tiny)
- etc.

Now categorize:

AI 基础工具: include "DeusData/codebase-memory-mcp", "garrytan/gstack", "affaan-m/ECC", "anthropics/claude-plugins-official", "bytedance/deer-flow" maybe belongs to AI Agent but also tool; "thedotmack/claude-mem" is a persistent context library, maybe base tool; "langchain" maybe base tool; "dify" maybe platform; but we can allocate accordingly.

But we need 3-8 per category.

Let's decide:

🔧 AI 基础工具 (tools, frameworks, SDKs, inference engines, dev tools, CLI)
- langchain-ai/langchain (Python) ⭐140,016 (no today add) – Leading agent engineering platform.
- langgenius/dify (TypeScript) ⭐146,334 – Production‑ready platform for agentic workflow development.
- open-webui/open-webui (Python) ⭐142,786 – User‑friendly AI interface supporting multiple backends.
- anthro..?? Actually "anthropics/claude-plugins-official" is a plugin directory; maybe include.
- gstack (garrytan/gstack) (TypeScript) ⭐0 (+1011 today) – 23 opinionated tools for Claude Code setup.
- codebase-memory-mcp (DeusData/codebase-memory-mcp) (C) ⭐0 (+1300 today) – High‑performance code indexing MCP server.
- deer-flow (bytedance/deer-flow) (Python) ⭐0 (+739 today) – Long‑horizon SuperAgent harness (also agent tool) but can be in 基础工具 as it's a harness.
- ECC (affaan-m/ECC) (JavaScript) ⭐0 (+593 today) – Performance‑optimization harness for AI agents.

But we need to limit to 3-8 per category; we can list up to 8.

🤖 AI 智能体/工作流 (Agent frameworks, automation, multi-agent)
- OpenMontage (calesthio/OpenMontage) (Python) ⭐0 (+3592 today) – Agentic video production system with 12 pipelines.
- revfactory/harness (revfactory/harness) (HTML) ⭐0 (+128 today) – Meta‑skill for designing domain‑specific agent teams.
- zhayujie/CowAgent (zhayujie/CowAgent) (Python) ⭐45,583 – Open‑source super AI assistant & Agent Harness.
- iOfficeAI/AionUi (iOfficeAI/AionUi) (TypeScript) ⭐28,731 – Free local 24/7 cowork app for multiple AI agents.
- bytedance/deer-flow (already used in 基础工具 maybe keep here) but also agent harness; maybe we allocate to this category.
- JCodesMore/ai-website-cloner-template (ai-website-cloner-template) (TypeScript) ⭐0 (+826 today) – Clone any website with one command using AI coding agents.
- monkey? maybe "OpenClaude"? Not needed.

📦 AI 应用 (具体应用产品、垂直场景解决方案)
- koala73/worldmonitor (TypeScript) ⭐0 (+294 today) – Real‑time global intelligence dashboard powered by AI.
- pmier-io/palmier-pro (Swift) ⭐0 (+1630 today) – macOS video editor built for AI.
- jamiepine/voicebox (TypeScript) ⭐0 (+1045 today) – Open‑source AI voice studio for cloning and dictation.
- ZhuLinsen/daily_stock_analysis (Python) ⭐0 (+1119 today) – LLM‑driven multi‑market stock analysis system.
- OpenMontage also fits here as video production, but already used.

🧠 大模型/训练 (模型权重、训练框架、微调工具)
- huggingface/transformers (Python) ⭐161,849 – Model‑definition framework for state‑of‑the‑art models.
- ollama/ollama (Go) ⭐174,810 – Runtime for running various LLMs locally.
- vllm-project/vllm (Python) ⭐83,664 – High‑throughput inference and serving engine.
- tensorflow/tensorflow (C++) ⭐195,927 – Open source ML framework.
- pytorch/pytorch (Python) ⭐101,036 – Dynamic NN framework with GPU acceleration.
- (maybe "OpenBB-finance/OpenBB" but that's more finance.)

🔍 RAG/知识库 (向量数据库、检索增强、知识管理)
- langgenius/dify (already used in 基础工具 but also RAG) but we can include here.
- raGFlow (infiniflow/ragflow) (Python) ⭐83,470 – RAG engine with agent capabilities.
- mem0ai/mem0 (Python) ⭐59,258 – Universal memory layer for AI agents.
- headroomlabs-ai/headroom (Python) ⭐48,617 – Compress tool outputs before LLM.
- firecrawl/firecrawl (TypeScript) ⭐138,227 – Web search/scrape API; not RAG but could be.
- milvus-io/milvus (Go) ⭐44,919 – Vector DB.
- qdrant/qdrant (Rust) ⭐32,590 – Vector DB.
- vectifyai/PageIndex (Python) ⭐33,340 – Document index for reasoning‑based RAG.
- weaviate/weaviate (Go) ⭐16,416 – Vector DB with hybrid search.
- etc.

Now we need to present "各维度热门项目" section: each dimension list 3-8 representative projects.

We can choose 5 per category maybe.

But instruction: "每个维度列出 3~8 个代表项目". So we can list up to 8.

Let's pick for each category 5 projects.

Now produce the report:

**第一步（过滤）** not needed in output, but we can just produce final report.

Now produce final answer in Chinese.

Make sure each project has GitHub link.

Now craft the content.

**今日速览**: 3-5 sentences summarizing.

Example: "今天，AI 开源生态聚焦在多模态Agent编排、长时任务自动化以及检索增强技术的快速落地。OpenMontage 以3592 stars 单日爆发，展示了AI驱动的视频制作新范式；Deer Flow 与 Codebase‑Memory MCP 为大模型提供持久记忆与高效工具调用；RAG 引擎如 RAGFlow、LangChain 与 Dify 持续吸粉，形成从检索到推理的闭环生态。与此同时，像 LangChain、Dify、Milvus 等基础设施项目保持高星量，为开发者提供即插即用的AI开发能力。"

Now each category:

**🔧 AI 基础工具** (5 projects)

- langchain-ai/langchain (Python) ⭐140,016 – 该项目是 Agent Engineering 的核心框架，提供工具链、记忆系统和链式调用，是构建 AI 应用的底层骨架。  
- The Open WebUI (open-webui/open-webui) (Python) ⭐142,786 – 用户友好的多后端界面，支持 Ollama、OpenAI API 等，简化本地模型交互。  
- langgenius/dify (TypeScript) ⭐146,334 – 面向企业的可插件化 Agent 工作流平台，聚焦可视化编排与插件市场。  
- garrytan/gstack (TypeScript) ⭐0 (+1011 today) – 基于 Claude Code 的 23 项工具集合，提供 CEO、设计师、工程经理等专属角色的 CLI 环境。  
- codebase-memory-mcp (DeusData/codebase-memory-mcp) (C) ⭐0 (+1300 today) – 高性能代码索引的 MCP 服务器，实现子毫秒查询，降低 token 消耗。  

**🤖 AI 智能体/工作流** (5 projects)

- calesthio/OpenMontage (Python) ⭐0 (+3592 today) – 首个面向 AI 视频制作的开源 Agentic 系统，集成 12 条生产链路与 500+ 技能。  
- revfactory/harness (HTML) ⭐0 (+128 today) – 元技能，自动设计并生成特定领域的 Agent 团队及其对应技能。  
- zhayujie/CowAgent (Python) ⭐45,583 – 超级 AI 助理与 Agent Harness，支持多模型、跨渠道，一键安装。  
- iOfficeAI/AionUi (TypeScript) ⭐28,731 – 本地 24/7 协作 studio，统一管理 Claude Code、Hermes 等多种 CLI 智能体。  
- JCodesMore/ai-website-cloner-template (TypeScript) ⭐0 (+826 today) – 一键使用 AI 编码代理复制任意网站的完整实现。  

**📦 AI 应用** (5 projects)

- koala73/worldmonitor (TypeScript) ⭐0 (+294 today) – 实时全球情报仪表盘，融合 AI 新闻聚合、地缘政治监测与基础设施追踪。  
- pmier-io/palmier-pro (Swift) ⭐0 (+1630 today) – macOS 视频编辑器，专为 AI 生成与后期处理优化。  
- jamiepine/voicebox (TypeScript) ⭐0 (+1045 today) – 开源 AI 语音工作室，支持声音克隆、文字转语音等。  
- ZhuLinsen/daily_stock_analysis (Python) ⭐0 (+1119 today) – 多市场股票分析系统，实时新闻+决策看板+自动通知。  
- bytedance/deer-flow (Python) ⭐0 (+739 today) – 长周期 SuperAgent，具备自主研究、代码、工具使用与子代理能力。  

**🧠 大模型/训练** (5 projects)

- huggingface/transformers (Python) ⭐161,849 – 业界领先的模型定义库，支持文本、视觉、音频及多模态模型的训练与推理。  
- ollama/ollama (Go) ⭐174,810 – 本地运行多家模型（Kimi、DeepSeek、Gemma 等）的统一入口。  
- vllm-project/vllm (Python) ⭐83,66

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*