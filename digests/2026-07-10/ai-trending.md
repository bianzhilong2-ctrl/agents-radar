# AI 开源趋势日报 2026-07-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-10 02:00 UTC

---

We need to produce a report following instructions.

First step: filter out AI/ML related projects from the trending list, ignoring non-AI.

From trending list (15 repos), we need to extract those clearly AI/ML related.

List with tags:

- MadsLorentzen/ai-job-search: TypeScript, AI-powered job application framework built on Claude Code. That's AI related (job search using AI). Should keep? It's AI-powered job application, maybe qualifies as AI application. It's about using Claude Code for job search. It's AI related. Probably yes.

- SmartlyDressedGames/U3-SDK: C# for Unturned game. Non-AI, exclude.

- addyosmani/agent-skills: JavaScript, production-grade engineering skills for AI coding agents. That's AI related (skills for AI agents). Probably keep.

- VoltAgent/awesome-design-md: collection of DESIGN.md files analysis by brand design systems. Non-AI, exclude.

- iOfficeAI/OfficeCLI: C# Office suite for AI agents to read/edit/automate Office files. AI related (agents interacting with Office). Keep.

- wonderwhy-er/DesktopCommanderMCP: TypeScript MCP server for Claude giving terminal control. That's AI tooling, keep.

- anthropics/claude-cookbooks: Jupyter Notebook, notebooks/recipes for using Claude. AI related, keep.

- vxcontrol/pentagi: Go, fully autonomous AI Agents system for penetration testing. AI related (pen-test agents). Keep.

- unclecode/crawl4ai: Python, LLM-friendly web crawler/scraper. AI related (crawler). Keep.

- imthenachoman/How-To-Secure-A-Linux-Server: non-AI, exclude.

- huxingyi/autoremesher: C++, automatic quad remeshing tool. Not AI, exclude.

- bradautomates/claude-video: Python, give Claude ability to watch video. AI related, keep.

- prisma/prisma: TypeScript ORM. Not AI, exclude.

- kyutai-labs/pocket-tts: Python TTS. Could be AI related (TTS). It's a TTS model, but not necessarily open-source model? It's a TTS that fits in CPU. Probably AI related (speech synthesis). Keep? It's more a tool, but maybe considered AI. Might be borderline. The classification includes "AI 基础工具". Could include.

- asgeirtj/system_prompts_leaks: JavaScript, extracted system prompts. AI related (prompts). Keep.

We need to filter out non-AI projects. So from trending, the AI related ones are:

1. MadsLorentzen/ai-job-search
2. addyosmani/agent-skills
3. iOfficeAI/OfficeCLI
4. wonderwhy-er/DesktopCommanderMCP
5. anthropics/claude-cookbooks
6. vxcontrol/pentagi
7. unclecode/crawl4ai
8. bradautomates/claude-video
9. kyutai-labs/pocket-tts (maybe)
10. asgeirtj/system_prompts_leaks

But also maybe "prisma" is not AI. So exclude.

We need to produce filtered list, but not necessarily list all, just mention they are filtered.

Second step: categorize selected projects according to categories.

We have many projects from the AI theme search (80 repos). But the report likely focuses on trending projects? The instruction: "第二步（分类）：将筛选后的项目按以下维度分类". The filtered projects include both trending and search results? It says "从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。" So we filter the data, then categorize the filtered projects (both trending and search). The search results include many AI projects across categories.

Thus we need to categorize all filtered projects (maybe from both trending and search). But the output report includes "各维度热门项目" listing 3-8 representative projects per dimension. Likely we need to pick representative projects from the filtered set, focusing on trending ones? The instruction: "各维度热门项目 — 每个维度列出 3~8 个代表项目". Probably we should pick from the filtered projects (both trending and search) that are trending or popular. But we can include some from search as well. Provide stars and today stars.

Thus we need to produce a structured report:

1. 今日速览: 3-5 sentences summarizing.

2. 各维度热门项目: For each dimension, list 3-8 projects with name, link, stars (total + today), one-sentence description.

Dimensions: 🔧 AI 基础工具, 🤖 AI 智能体/工作流, 📦 AI 应用, 🧠 大模型/训练, 🔍 RAG/知识库.

We need to fill each dimension with 3-8 projects.

We need to ensure each project has link, stars data.

We can select from the filtered list.

Let's compile a list of notable projects across categories:

From search results, many projects:

- 🔧 AI 基础工具:
   - ollama/ollama (Go) - stars 175,836 (+? not given but we can approximate). It's a tool to run models locally. It's AI tool.
   - vllm-project/vllm (Python) - 85,846 stars.
   - huggingface/transformers (Python) - 162,422 stars.
   - firecrawl/firecrawl (TypeScript) - 148,463 stars.
   - langchain-ai/langchain (Python) - 141,412 stars.
   - OpenHands/OpenHands (Python) - 80,253 stars.
   - TauricResearch/TradingAgents (Python) - 92,066 stars (maybe more AI application but also tool).
   - mink? Actually "langgenius/dify" (TypeScript) - 148,339 stars (platform for agentic workflow).
   - open-webui/open-webui (Python) - 144,879 stars.
   - etc.

But we need to categorize accordingly.

Let's map each project to category:

- AI 基础工具 (framework, SDK, inference engine, dev tools, CLI):
   - ollama/ollama (Go) – local inference engine.
   - vllm-project/vllm (Python) – high-throughput inference engine.
   - huggingface/transformers (Python) – model framework.
   - pr maybe "langchain-ai/langchain" is more workflow but could be tool.
   - Unclecode/crawl4ai (Python) – web crawler for LLM, maybe tool.
   - bradautomates/claude-video – tool for video analysis.
   - iOfficeAI/OfficeCLI – CLI for Office automation by AI agents.
   - addyosmani/agent-skills – engineering skills for AI agents (tool).
   - w? maybe "MadsLorentzen/ai-job-search" – framework for job search using AI.

- 🤖 AI 智能体/工作流:
   - Significant-Gravitas/AutoGPT – Python – multi-agent framework.
   - OpenHands/OpenHands – AI-driven development platform (agent).
   - langgenius/dify – platform for agentic workflow.
   - OpenAI? Not in list.
   - "MadsLorentzen/ai-job-search" maybe also agent for job search.
   - "vxcontrol/pentagi" – autonomous AI agents for penetration testing.
   - "zhayujie/CowAgent" – open-source super AI assistant & agent harness.
   - "siyuan-note/siyuan" – knowledge management with AI agent? Not sure.
   - "OpenHands/OpenHands" is more dev platform.

- 📦 AI 应用:
   - "bradautomates/claude-video" – AI video tool.
   - "cherryhq/cherry-studio" – AI productivity studio.
   - "hugohe3/ppt-master" – AI generates PowerPoint.
   - "esengine/DeepSeek-Reasonix" – DeepSeek-native AI coding agent.
   - "ZhuLinsen/daily_stock_analysis" – LLM-driven stock analysis.
   - "shubhamsaboo/awesome-llm-apps" – list of LLM apps.
   - "Datawhalechina/hello-agents" – tutorial for building agents.
   - "mem0ai/mem0" – universal memory layer for agents.

- 🧠 大模型/训练:
   - "huggingface/transformers" – model framework.
   - "pytorch/pytorch" – training framework.
   - "tensorflow/tensorflow" – training framework.
   - "vllm-project/vllm" also inference but also training? maybe not.
   - "open-source" maybe "lancedb/lancedb" – retrieval library.
   - "milvus-io/milvus" – vector DB (more retrieval).
   - "meilisearch/meilisearch" – vector DB.
   - "run-llama/llama_index" – document agent and OCR platform.
   - "qwq"? Not.

- 🔍 RAG/知识库:
   - "langchain-ai/langchain" – RAG and agents.
   - "milvus-io/milvus" – vector DB.
   - "qdrant/qdrant" – vector DB.
   - "Weaviate/weaviate" – vector DB.
   - "cognee/cognee" – AI memory platform for agents.
   - "RAGFlow" – RAG engine.
   - "Graphify-Labs/graphify" – knowledge graph builder.
   - "datawhalechina/hello-agents"? Not exactly.
   - "infiniflow/ragflow" – RAG engine.
   - "ScrapeGraphAI/Scrapegraph-ai" – AI scraper.

We need to pick 3-8 projects per dimension, focusing on those with high stars and today stars.

Let's compile a table of candidate projects with stars.

From search results, stars numbers are given (total). For trending, we have stars as "⭐0 (+X today)" meaning total stars is 0? Actually they show "⭐0 (+3716 today)" meaning total stars is 0 but today added 3716. But for many it's 0 because they are new? Actually the trending list shows stars as 0 but with today delta. So we can use the delta as today's stars. But we can also note total stars as "0" (since it's 0). But we can also note the delta.

But maybe we can use the total stars from search results where they have numbers like 227,891 etc.

Thus for each project we need to provide stars total + today new.

For trending items, we can use the delta as today's stars, but total stars is 0? Actually they show "⭐0 (+3716 today)" meaning currently 0 stars? That seems odd; maybe it's a placeholder. But we can treat total stars as 0 and today's addition as the number.

Thus we can present as "0 (今 +3716)". But maybe better to use the delta as today's stars.

But for search results, we have total stars numbers (like 227,891) but no today delta. We can note the total stars (maybe also mention today's stars if known). The instruction: "stars 数据（总量 + 今日新增，如有）". So we can include total and today's if available. For trending we have today new. For search we may not have today new; we can just put total.

Thus we can present for each project: stars (e.g., 227,891) and if today delta present, include "(+X today)". For search results, we may not have today delta; we can just put total.

Now we need to produce a report with sections.

First, "今日速览" – 3-5 sentences summarizing.

Second, "各维度热门项目" – list per dimension with 3-8 projects.

We need to ensure each project has link.

We need to keep language Chinese, professional and concise.

We need to include link for each project.

Now we need to decide which projects to include.

Given the large number of projects, we can select representative ones per dimension.

Let's pick:

🔧 AI 基础工具:
1. ollama/ollama (Go) – stars 175,836 (+? maybe not given) – local LLM runner.
2. vllm-project/vllm (Python) – stars 85,846 – high-throughput inference engine.
3. huggingface/transformers (Python) – stars 162,422 – model framework.
4. iOfficeAI/OfficeCLI (C#) – stars 0 (+1929 today) – Office suite for AI agents.
5. addyosmani/agent-skills (JavaScript) – stars 0 (+2554 today) – engineering skills for AI agents.

But we need 3-8 per dimension; can include up to 8.

We can include 5.

🤖 AI 智能体/工作流:
1. Significant-Gravitas/AutoGPT (Python) – stars 185,443 – autonomous AI agent framework.
2. OpenHands/OpenHands (Python) – stars 80,253 – AI-driven development platform.
3. langgenius/dify (TypeScript) – stars 148,339 – platform for agentic workflow.
4. vxcontrol/pentagi (Go) – stars 0 (+535 today) – autonomous AI agents for penetration testing.
5. zhayujie/CowAgent (Python) – stars 45,898 – super AI assistant & agent harness.

📦 AI 应用:
1. bradautomates/claude-video (Python) – stars 0 (+718 today) – give Claude ability to watch video.
2. hugohe3/ppt-master (Python) – stars 38,034 – AI generates editable PowerPoint.
3. cherryhq/cherry-studio (TypeScript) – stars 48,375 – AI productivity studio.
4. zheng? maybe "esengine/DeepSeek-Reasonix" – stars 26,544 – DeepSeek-native AI coding agent.
5. David? Actually "MadsLorentzen/ai-job-search" – stars 0 (+3716 today) – AI-powered job application framework.

But maybe we can limit to 5.

🧠 大模型/训练:
1. huggingface/transformers (Python) – stars 162,422 – model framework.
2. pytorch/pytorch (Python) – stars 101,642 – training framework.
3. tensorflow/tensorflow (C++) – stars 196,166 – training framework.
4. vllm-project/vllm (Python) – also inference but also training? Might be considered base tool.
5. open-source "lancedb/lancedb"? Not exactly training. Could include "milvus-io/milvus"? That's vector DB, not training. Maybe "open-source "bert"? Not in list. But we can include "pytorch/pytorch" and "tensorflow/tensorflow". Also "huggingface/transformers". That's enough.

But we need 3-8 per dimension; we can include 4.

🔍 RAG/知识库:
1. langchain-ai/langchain (Python) – stars 141,412 – agent engineering platform, RAG.
2. milvus-io/milvus (Go) – stars 45,155 – vector DB.
3. qdrant/qdrant (Rust) – stars 33,106 – vector DB.
4. weaviate/weaviate (Go) – stars 16,549 – vector DB.
5. infiniflow/ragflow (Go) – stars 84,709 – RAG engine.
6. graphify-labs/graphify (Python) – stars 81,317 – knowledge graph builder.
7. mem0ai/mem0 (Python) – stars 60,498 – universal memory layer for agents (RAG memory).
8. ScrapeGraphAI/Scrapegraph-ai (Python) – stars 28,230 – AI scraper (RAG? maybe not).

We need 3-8; we can include 5-6.

Now we need to produce the report.

Structure:

**第一步（过滤）**： we can briefly mention we filtered out non-AI projects, list the filtered trending items maybe.

But the final output should be the report; the steps are internal but we can just produce the report.

The instruction: "请生成一份结构清晰的《AI 开源趋势日报》，要求： **第一步（过滤）** ...". So we need to include that step? Probably we need to show the filtered list? The report should include the filtered selection? Might be part of the report? The instruction says "第一步（过滤）" as part of the process, but the final output is the report. It doesn't explicitly require us to output the filtered list as part of the report; but we can include a brief note of filtering.

Better to include a short "过滤结果概览" maybe as part of the report before the main sections.

But the final output should contain the report sections: 今日速览, 各维度热门项目, 趋势信号分析, 社区关注热点.

We can embed the filtering as a note before the report.

Thus we can start with a brief statement: "经过筛选，以下项目为与 AI/ML 明确相关的 Trending 项目（非 AI 项目已剔除）". Then list them.

Then proceed to categories.

Now produce the report.

Let's craft.

**今日速览**: 3-5 sentences summarizing.

Possible: " Today, the GitHub trending list shows a surge of interest in AI agent frameworks, local LLM serving tools, and RAG infrastructure. Notably, AutoGPT, Ollama, and VLLM are gaining massive traction, while new projects like Claude‑Video and OfficeCLI demonstrate AI's expanding capabilities into multimedia and office automation. The community is also rapidly adopting vector databases and knowledge‑graph tools to support Retrieval‑Augmented Generation."

Now **各维度热门项目**: For each dimension, list projects with bullet or numbered list.

We need to include link, stars total + today delta if known.

Let's gather stars and delta:

From search results:

- Ollama/ollama: ⭐175,836 [topic:llm] – no today delta given. So we can just write "175,836".

- VLLM: ⭐85,846 [topic:llm] – no today delta.

- HuggingFace/transformers: ⭐162,422 [topic:ml] – no today delta.

- LangChain: ⭐141,412 [topic:llm] – no today delta.

- AutoGPT: ⭐185,443 [topic:llm] – no today delta.

- OpenHands/OpenHands: ⭐80,253 [topic:llm] – no today delta.

- Dify: ⭐148,339 [topic:llm] – no today delta.

- Pentagi: ⭐0 (+535 today) – total 0, today +535.

- CowAgent: ⭐45,898 [topic:ai-agent] – no today delta.

- Claude-Video: ⭐0 (+718 today) – total 0, today +718.

- OfficeCLI: ⭐0 (+1929 today) – total 0, today +1929.

- ai-job-search: ⭐0 (+3716 today) – total 0, today +3716.

- Agent-Skills: ⭐0 (+2554 today) – total 0, today +2554.

- DesktopCommanderMCP: ⭐0 (+185 today) – total 0, today +185.

- System_Prompts_Leaks: ⭐0 (+1125 today) – total 0, today +1125.

- RAGFlow: ⭐84,709 [topic:rag] – no today delta.

- Graphify: ⭐81,317 [topic:rag] – no today delta.

- Mem0: ⭐60,498 [topic:rag] – no today delta.

- ScrapeGraphAI: ⭐28,230 [topic:llm-model] – no today delta.

- etc.

Now we need to assign each project to dimension.

Let's map:

🔧 AI 基础工具:
- Ollama/ollama (Go) – stars 175,836 – local LLM runner.
- VLLM-project/vllm (Python) – stars 85,846 – high-throughput inference engine.
- HuggingFace/transformers (Python) – stars 162,422 – model framework (maybe considered base tool).
- iOfficeAI/OfficeCLI (C#) – stars 0 (+1929 today) – Office automation for AI agents.
- addyosmani/agent-skills (JavaScript) – stars 0 (+2554 today) – engineering skills for AI agents.

Also maybe "MadsLorentzen/ai-job-search" is more application.

But we can include these.

🤖 AI 智能体/工作流:
- Significant-Gravitas/AutoGPT (Python) – stars 185,443 – autonomous AI agent framework.
- OpenHands/OpenHands (Python) – stars 80,253 – AI-driven development platform.
- LangGenius/dify (TypeScript) – stars 148,339 – platform for agentic workflow.
- vxcontrol/pentagi (Go) – stars 0 (+535 today) – autonomous AI agents for penetration testing.
- zhayujie/CowAgent (Python) – stars 45,898 – super AI assistant & agent harness.
- MadsLorentzen/ai-job-search (TypeScript) – stars 0 (+3716 today) – AI-powered job application framework (could be considered AI application but also agent? maybe better to put in AI 应用).

But we can include it in AI 应用.

📦 AI 应用:
- bradautomates/claude-video (Python) – stars 0 (+718 today) – AI video analysis.
- hugohe3/ppt-master (Python) – stars 38,034 – AI-generated editable PowerPoint.
- cherryhq/cherry-studio (TypeScript) – stars 48,375 – AI productivity studio.
- esengine/DeepSeek-Reasonix (Go) – stars 26,544 – DeepSeek-native AI coding agent.
- shubhamsaboo/awesome-llm-apps (Python) – stars 117,100 – list of LLM apps (maybe not a specific app but a collection; could be AI 应用).
- iOfficeAI/AionUi (TypeScript) – stars 29,701 – local cowork app for many agents (maybe AI 应用).
- maybe "OpenHands/OpenHands" is also AI application? But we placed in AI 智能体.

But we need 3-8 per dimension; we can include up to 6.

🧠 大模型/训练:
- HuggingFace/transformers (Python) – stars 162,422 – model framework.
- PyTorch/pytorch (Python) – stars 101,642 – training framework.
- TensorFlow/tensorflow (C++) – stars 196,166 – training framework.
- (maybe) "lancedb/lancedb" – not training but retrieval; but we can skip.
- "Milvus" is vector DB, not training.

We can include "HuggingFace/transformers" also fits in RAG? but we can keep in both? But we need to prioritize primary category.

Probably "transformers" is more base tool, but we already used it in AI 基础工具. It can also be in 大模型/训练. But we need to assign primary category; maybe we put it in 大模型/训练.

Thus:

🧠 大模型/训练:
- HuggingFace/transformers (Python) – stars 162,422.
- PyTorch/pytorch (Python) – stars 101,642.
- TensorFlow/tensorflow (C++) – stars 196,166.

Could also include "vllm" but that's inference engine, maybe base tool.

But we need 3-8; we have 3.

🔍 RAG/知识库:
- LangChain AI/langchain (Python) – stars 141,412 – agent engineering platform (RAG).
- Milvus Io/milvus (Go) – stars 45,155 – vector DB.
- Qdrant/qdrant (Rust) – stars 33,106 – vector DB.
- Weaviate/weaviate (Go) – stars 16,549 – vector DB.
- Infiniflow/ragflow (Go) – stars 84,709 – RAG engine.
- Graphify-Labs/graphify (Python) – stars 81,317 – knowledge graph builder.
- Mem0ai/mem0 (Python) – stars 60,498 – universal memory layer for agents (RAG memory).

We can pick 5-6.

Now we need to produce "趋势信号分析" 200-300字, summarizing.

Then "社区关注热点" bullet list 3-5 items with reasons.

Now produce final answer.

Let's write the report in Chinese, with headings.

Make sure each project includes link.

Now compile.

**过滤概览** (maybe optional). Provide brief list of filtered trending AI projects.

List:

- MadsLorentzen/ai-job-search (TypeScript) – AI job search framework.
- addyosmani/agent-skills (JavaScript) – engineering skills for AI agents.
- iOfficeAI/OfficeCLI (C#) – Office suite for AI agents.
- wonderwhy-er/DesktopCommanderMCP (TypeScript) – MCP server for Claude.
- anthrop

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*