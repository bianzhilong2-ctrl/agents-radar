# AI 开源趋势日报 2026-07-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-29 01:45 UTC

---

We need to produce a structured report per instructions. Steps:

1. Filter: from Trending list and AI theme search results, keep only those clearly AI/ML related, exclude generic tools, front-end, games, etc. For Trending, non-AI projects directly omit.

We have Trending list of 13 repos. Need to filter AI/ML relevant ones.

Let's examine each:

- pascalorg/editor (TS) - "Create and share 3D architectural projects." Not directly AI/ML. Exclude.

- jenkinsci/jenkins (Java) - CI server. Exclude.

- moeru-ai/airi (TS) - self-hosted Grok Companion, container of souls... It mentions "realtime voice chat, Minecraft, Factorio playing". Could be AI-related? It's about AI agents? It seems more about a companion AI. It mentions "Grok Companion". Might be AI related? Possibly but ambiguous. It's more of a AI companion. Could be considered AI agent? It's about AI agent? Might be borderline. The prompt says exclude general tools, front-end, games. This is more like AI agent but not clearly AI/ML tool. Might be excluded.

- andrewyng/aisuite (Python) - "Simple, unified interface to multiple Generative AI providers". That's clearly AI tool. Include.

- affaan-m/ECC (JS) - "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond." That's AI agent harness. Include.

- hello245m/free-stockdb (HTML) - finance data engine. Not AI.

- huggingface/speech-to-speech (Python) - "Build local voice agents with open-source models". That's AI speech-to-speech, relevant.

- virgiliojr94/book-to-skill (Python) - "Turn any technical book PDF into a Claude Code skill". That's about generating skills; maybe AI related but more tool. Might be included under AI workflow? It uses Claude Code, but it's more a script. Could be borderline; likely include as AI tool? It's about turning PDF into skill, not core AI. Might be excluded.

- opengeos/GeoLibre (TS) - GIS platform. Not AI.

- paperswithbacktest/awesome-systematic-trading (Python) - list of systematic trading libraries. That's finance, not AI core.

- microsoft/agent-governance-toolkit (Python) - "AI Agent Governance Toolkit". That's clearly AI governance, include.

- yorukot/superfile (Go) - terminal file manager. Not AI.

- bradautomates/claude-video (Python) - "Give Claude the ability to watch any video". That's AI video understanding, include.

- huggingface/speech-to-speech is already considered.

- langgenius/dify etc is in theme search, not trending. We'll handle later.

Thus from Trending, AI relevant ones:

- andrewyng/aisuite (Python) ⭐0 (+62 today)
- affaan-m/ECC (JS) ⭐0 (+636 today)
- huggingface/speech-to-speech (Python) ⭐0 (+227 today)
- microsoft/agent-governance-toolkit (Python) ⭐0 (+46 today)
- bradautomates/claude-video (Python) ⭐0 (+988 today)

Potentially also moeru-ai/airi? It mentions "Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings ...". Could be considered AI agent? It's more like a personal AI companion. Might be included under AI intelligent agent? The prompt says categorize AI intelligent agent/workflows. It might be relevant. But it's more like a container of AI characters. Might be borderline. Let's maybe include it as AI agent? But it's quite exotic. The user likely expects inclusion of AI agent-like repos. The trending list includes "moeru-ai/airi" with huge +797 today. That seems very popular. It describes "Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing." That's definitely AI agent oriented. So include it under AI intelligent agent/workflow.

Thus include moeru-ai/airi.

Also maybe "virgiliojr94/book-to-skill" is about generating Claude Code skill from PDF, not core AI. Probably exclude.

Thus filtered Trending AI projects (including AI agent) are:

- andrewyng/aisuite
- affaan-m/ECC
- huggingface/speech-to-speech
- microsoft/agent-governance-toolkit
- bradautomates/claude-video
- moeru-ai/airi

Now also need to consider AI theme search results (79 repos). Those include many AI related projects. We need to select those relevant and classify them.

The theme search list includes many AI-related repos across categories: RAG, agent, vector DB, LLM model, etc. We need to filter out non-AI (but all seem AI). However some are generic like "f/prompts.chat" (HTML) - It's a collection of prompts, maybe AI related? It's about prompts, but not a tool. Could be considered AI related? It's about prompts for ChatGPT. Might be borderline; but we can include as community resource. However the instruction: "排除与 AI 无关的通用工具、前端框架、游戏等". So prompts collection maybe not a tool but a collection; still AI related? Might be considered AI community resource, but not a tool. Could be included as "AI 主题搜索结果" but maybe not needed for classification? The prompt says "将筛选后的项目按以下维度分类". So we need to include projects from both Trending and AI theme search that are AI related.

Thus we need to compile a list of selected projects (both from filtered Trending and from theme search) and then classify them into categories: AI 基础工具, AI 智能体/工作流, AI 应用, 大模型/训练, RAG/知识库.

We need to list 3-8 representative projects per category.

Thus we need to pick top projects from filtered list for each category.

Let's map each project to category:

- aisuite: unified interface to multiple Generative AI providers => AI 基础工具 (SDK/interface). Could also be AI 工作流? Probably AI 基础工具.

- ECC: agent harness performance optimization system => AI 智能体/工作流 (agent harness). Could also be AI 基础工具? It's more about agent harness, so categorize under AI 智能体/工作流.

- huggingface/speech-to-speech: Build local voice agents with open-source models => AI 应用? Or AI 基础工具? It's about voice agents, maybe AI 智能体/工作流 (voice agent). Could be AI 应用? It's a tool to build voice agents. I'd put under AI 智能体/工作流 or AI 基础工具. Let's put under AI 智能体/工作流.

- microsoft/agent-governance-toolkit: AI Agent Governance Toolkit => AI 智能体/工作流 (governance). Could also be AI 基础工具? It's governance, so maybe AI 智能体/工作流.

- bradautomates/claude-video: Give Claude ability to watch any video => AI 应用? It's about video understanding, maybe AI 基础工具 (vision). Could be AI 应用? It's a tool to enable video analysis. I'd put under AI 基础工具 (vision API). Could also be AI 应用? It's more a capability. Let's put under AI 基础工具.

- moeru-ai/airi: Self-hosted Grok Companion, AI agent with voice chat, Minecraft, Factorio playing => AI 智能体/工作流 (agent). Could also be AI 应用? It's an agent product. So category AI 智能体/工作流.

Now from theme search, we have many projects across categories. Need to pick representative ones per category.

Categories definitions:

- 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- 📦 AI 应用（具体应用产品、垂直场景解决方案）
- 🧠 大模型/训练（模型权重、训练框架、微调工具）
- 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

We need to list 3-8 representative projects per category.

Let's collect relevant projects from theme search:

List with categories:

- langgenius/dify [topic:rag] - Build Agentic workflows, RAG pipelines. This is a platform for building agentic workflows, RAG, etc. Could be AI 应用? Actually it's a tool for building workflows; could be AI 智能体/工作流 or RAG/知识库. Might be more of a platform (AI 应用). Could be RAG/知识库? It's about RAG pipelines. Could be RAG/知识库.

- open-webui/open-webui [topic:rag] - User-friendly AI Interface (Supports Ollama, OpenAI API, ...). That's an UI for running LLMs, could be AI 应用 (frontend) but also AI 基础工具? It's more of a UI for interacting with models. Could be AI 应用.

- langchain-ai/langchain [topic:rag] - The agent engineering platform. That's AI 智能体/工作流 (agent engineering). Could be AI 智能体/工作流.

- Shubhamsaboo/awesome-llm-apps [topic:rag] - 100+ AI Agents, Agent Skills and RAG Apps - Free and Open Source. That's a curated list, not a project itself. Might be considered a resource, maybe not a project to highlight. Could be omitted.

- Graphify-Labs/graphify [topic:rag] - Turn any codebase into a queryable knowledge graph. That's RAG/知识库.

- thedotmack/claude-mem [topic:rag] - Persistent Context Across Sessions for Every Agent. That's AI 智能体/工作流 (memory). Could be AI 智能体/工作流.

- infiniflow/ragflow [topic:rag] - RAG engine with Agent capabilities. That's RAG/知识库.

- datawhalechina/hello-agents [topic:rag] - tutorial on building agents. That's AI 智能体/工作流 (educational). Could be AI 智能体/工作流.

- Mintplex-Labs/anything-llm [topic:rag] - local-first agent experience. That's AI 应用.

- headroomlabs-ai/headroom [topic:rag] - Compress tool outputs before LLM. That's AI 基础工具 (optimization). Could be AI 智能体/工作流? It's a library for compressing outputs. Might be AI 基础工具.

- mem0ai/mem0 [topic:rag] - Universal memory layer for AI Agents. That's AI 智能体/工作流.

- FlowiseAI/Flowise [topic:rag] - Build AI Agents, Visually. That's AI 智能体/工作流.

- run-llama/llama_index [topic:rag] - LlamaIndex is the leading document agent and OCR platform. That's AI 应用? It's a framework for indexing documents for LLM. Could be AI 智能体/工作流 or RAG/知识库.

- milvus-io/milvus [topic:rag] - vector database. That's 🔍 RAG/知识库.

- langchain-ai/langgraph [topic:rag] - Build resilient agents. That's AI 智能体/工作流.

- NousResearch/hermes-agent [topic:ai-agent] - The agent that grows with you. That's AI 智能体/工作流.

- shareAI-lab/learn-claude-code [topic:ai-agent] - Bash is all you need - A nano claude code–like agent harness. That's AI 智能体/工作流.

- santifer/career-ops [topic:ai-agent] - Open-source AI job search. That's AI 应用? Could be AI 应用 (job search). Might be AI 应用.

- Panniantong/Agent-Reach [topic:ai-agent] - Give your AI agent eyes to see the entire internet. That's AI 智能体/工作流.

- ZhuLinsen/daily_stock_analysis [topic:ai-agent] - LLM-driven multi-market stock analysis. That's AI 应用 (finance). Could be AI 应用.

- CherryHQ/cherry-studio [topic:ai-agent] - AI productivity studio with smart chat, autonomous agents. That's AI 应用.

- HKUDS/nanobot [topic:ai-agent] - Ultra-lightweight personal AI agent framework. That's AI 智能体/工作流.

- zhayujie/CowAgent [topic:ai-agent] - Open-source super AI assistant & Agent Harness. That's AI 智能体/工作流.

- siyuan-note/siyuan [topic:ai-agent] - privacy-first personal knowledge management. That's AI 应用? It's more note-taking, could be AI 应用.

- hugohe3/ppt-master [topic:ai-agent] - AI turns docs into PowerPoint decks. That's AI 应用.

- CopilotKit/CopilotKit [topic:ai-agent] - Frontend stack for Agents & Generative UI. That's AI 基础工具? It's a frontend stack, maybe AI 应用.

- iOfficeAI/AionUi [topic:ai-agent] - Free local open-source 24/7 Cowork app for AI agents. That's AI 应用.

- openclaude/openclaude [topic:ai-agent] - runs anywhere. uses anything. That's AI 基础工具? It's a runtime for Claude? Might be AI 基础工具.

- googleworkspace/cli [topic:ai-agent] - Google Workspace CLI with AI agent skills. That's AI 基础工具? It's a CLI with AI agent skills, maybe AI 智能体/工作流.

- HKUDS/Vibe-Trading [topic:ai-agent] - Personal Trading Agent. That's AI 应用.

- etc.

We need to select representative projects per category, 3-8 each. Provide stars and today stars.

We must include star numbers (total + today). For theme search items, stars are given (e.g., ⭐150,587). For Trending items, we have today stars added, but total stars maybe not given (0). We can still output total stars? The data shows stars count as 0 (maybe not available). But we can still output "⭐0 (+XX today)". That's okay.

We need to provide link.

Now we need to produce the report sections:

1. 今日速览: 3-5 sentences summarizing today's AI open source trends.

2. 各维度热门项目: each dimension list 3-8 representative projects, each with link, stars (total + today), one-sentence description.

3. 趋势信号分析: 200-300 Chinese characters, analyzing hot categories, new tech stacks, relation to recent model releases/events.

4. 社区关注热点: bullet list 3-5 items with brief reasons.

Need to ensure language Chinese, professional concise, each project must have GitHub link.

We must filter out non-AI projects from Trending; we already did.

Now compile final list.

First, gather filtered Trending projects with stars:

- andrewyng/aisuite [Python] ⭐0 (+62 today)
- affaan-m/ECC [JavaScript] ⭐0 (+636 today)
- huggingface/speech-to-speech [Python] ⭐0 (+227 today)
- microsoft/agent-governance-toolkit [Python] ⭐0 (+46 today)
- bradautomates/claude-video [Python] ⭐0 (+988 today)
- moeru-ai/airi [TypeScript] ⭐0 (+797 today)

Now from theme search, we need to select representative projects across categories.

Let's pick:

Category AI 基础工具 (AI基础工具) – include tools like:

- langgenius/dify (though it's more workflow platform but could be considered tool). Maybe better to pick "ollama/ollama"? Not in filtered list but it's in theme search? Actually ollama is not listed in theme search; it's in Trending? Not in Trending list but in theme search? Not listed. But we have "ollama/ollama" in theme search? Not present. However we have "huggingface/transformers" etc in theme search? Actually theme search includes many ML libraries like transformers, pytorch, etc. Those are AI 基础工具. So we can include them.

Let's list some from theme search for each category:

- 🔧 AI 基础工具:
   - huggingface/transformers [Python] ⭐163,074 (no today stars)
   - pytorch/pytorch [Python] ⭐102,043
   - tensorflow/tensorflow [C++] ⭐196,573
   - langchain-ai/langchain [Python] ⭐142,822 (maybe more agent oriented)
   - run-llama/llama_index [Python] ⭐51,176 (document agent)
   - milvus-io/milvus [Go] ⭐45,404 (vector DB but also tool)
   - qdrant/qdrant [Rust] ⭐33,631
   - lancedb/lancedb [Rust] ⭐11,017
   - orama [TypeScript] ⭐10,505
   - etc.

But we need to pick representative 3-8 per category. Let's decide categories:

- 🔧 AI 基础工具: include frameworks/SDKs like LangChain, HuggingFace Transformers, PyTorch, TensorFlow, Ollama (if not included), and maybe "ollama/ollama" but not in our filtered list; but we can still include from theme search as it's relevant. Actually "ollama/ollama" is not in theme search list; but we have "ollama/ollama" in Trending? Not in Trending list; but it's popular. However we only need to include projects from filtered data (both Trending and theme search). So we can include "huggingface/transformers", "pytorch/pytorch", "tensorflow/tensorflow", "langchain-ai/langchain", "run-llama/llama_index", "milvus-io/milvus" maybe belongs to RAG category though. But for AI 基础工具 we can include "huggingface/transformers", "pytorch/pytorch", "tensorflow/tensorflow", "langchain-ai/langchain". That's 4.

- 🤖 AI 智能体/工作流: include "langchain-ai/langgraph", "microsoft/agent-governance-toolkit", "moeru-ai/airi", "affaan-m/ECC", "shareAI-lab/learn-claude-code", "nanobot", "CowAgent", "Vibe-Trading"? Many. Choose 5-6.

- 📦 AI 应用: include "anything-llm", "ppt-master", "cherry-studio", "nanobot"? Actually nanobot is framework. "cherry-studio", "ppt-master", "anything-llm", "Vibe-Trading", "daily_stock_analysis"? maybe not. Also "open-webui/open-webui" is UI for LLMs, could be AI 应用. Also "dify" is platform for building workflows, maybe AI 应用. Also "flowiseai/flowise" is visual builder, could be AI 应用. Also "mem0ai/mem0" is memory layer, maybe tool. But we need to pick 3-8 per category.

- 🧠 大模型/训练: include "huggingface/transformers", "pytorch/pytorch", "tensorflow/tensorflow", "ml-For-Beginners"? Not AI model? "zhu.../tiny-llm"? Actually "skyzh/tiny-llm" is a course. "jos.../ML-For-Beginners"? Not model. "huggingface/transformers" includes models? It's library. "opencompass/opencompass" is evaluation platform. "ml-For-Beginners" is educational. "langgenius/dify"? Not model. "langchain-ai/langchain"? Not model. But we can include "huggingface/transformers", "pytorch/pytorch", "tensorflow/tensorflow", "huggingface/speech-to-speech"? That's inference. Maybe "huggingface/transformers" is enough. Also "huggingface/transformers" is a library for models; "huggingface/speech-to-speech" is a repo for speech. But we can include "huggingface/transformers" in 大模型/训练. Also "pytorch/pytorch". Also "tensorflow/tensorflow". Also "huggingface/transformers" already included in AI 基础工具; but can also be in 大模型/训练. Might need to assign each project to a single primary category. So we need to decide distinct categories for each project.

Thus we need to assign each selected project to exactly one category (or multiple but prioritize primary). Let's map:

- 🔧 AI 基础工具: huggingface/transformers, pytorch/pytorch, tensorflow/tensorflow, ollama/ollama (if we include), maybe "langchain-ai/langchain" could be considered tool but it's more agent framework, but we can put it under AI 智能体/工作流.

- 🤖 AI 智能体/工作流: langchain-ai/langgraph, microsoft/agent-governance-toolkit, moeru-ai/airi, affaan-m/ECC, shareAI-lab/learn-claude-code, Panniantong/Agent-Reach, ZhuLinsen/daily_stock_analysis? maybe not. Also "nanobot" maybe.

- 📦 AI 应用: anything-llm, ppt-master, cherry-studio, open-webui/open-webui, dify? Actually dify is platform for building workflows, maybe AI 应用. Also "headroomlabs-ai/headroom" maybe tool. Could include "Vibe-Trading". Also "huggingface/speech-to-speech"? That's more tool for voice agents, maybe AI 应用. But we need to allocate.

- 🧠 大模型/训练: huggingface/transformers, pytorch/pytorch, tensorflow/tensorflow, maybe "huggingface/speech-to-speech"? Not training. Could include "huggingface/transformers" already used; maybe we can also include "ml-For-Beginners"? Not model. Could include "huggingface/transformers" again? Duplicate not allowed. Could include "huggingface/transformers" as representative of 大模型/训练, but we already used it in AI 基础工具. Maybe we can put it in 大模型/训练 instead, and use other tools for AI 基础工具 like "langchain-ai/langchain"? But that's more agent. Let's restructure.

Better to choose distinct sets:

Category AI 基础工具 (框架、SDK、推理引擎、开发工具、CLI) – choose projects that are primarily developer libraries/tools:

- huggingface/transformers (Python) – model library.
- pytorch/pytorch (Python) – deep learning framework.
- tensorflow/tensorflow (C++) – deep learning framework.
- ollama/ollama (Go) – local model runner (though not in theme search, but it's popular; but not in our filtered data; maybe we can still include? The instruction says "从以上数据中筛选". So we must only use data provided. So we cannot add projects not in the given data. So we must restrict to those present in the provided lists (Trending and AI theme search). So we cannot add ollama.

Thus AI 基础工具 candidates from theme search:

- huggingface/transformers (⭐163,074)
- pytorch/pytorch (⭐102,043)
- tensorflow/tensorflow (⭐196,573)
- langchain-ai/langchain (⭐142,822) – though more agent, but can be considered tool SDK.
- run-llama/llama_index (⭐51,176) – document retrieval tool.
- milvus-io/milvus (⭐45,404) – vector DB (but maybe RAG category).
- qdrant/qdrant (⭐33,631) – vector DB.
- lancedb/lancedb (⭐11,017) – vector DB.
- orama (⭐10,505) – vector DB.
- meilisearch/meilisearch (⭐58,769) – search engine (maybe not AI tool but could be considered search).
- etc.

But we need to limit to 3-8 per category. Let's decide:

AI 基础工具: include huggingface/transformers, pytorch/pytorch, tensorflow/tensorflow, run-llama/llama_index. That's 4.

Now AI 智能体/工作流: include microsoft/agent-governance-toolkit, moeru-ai/airi, affaan-m/ECC, shareAI-lab/learn-claude-code, nanobot (maybe not in theme search? It is in theme search with 46,342 stars). Also "langchain-ai/langgraph". Also "open-webui/open-webui"? It's UI for LLMs, maybe more application. But we can include "open-webui/open-webui". Also "FlowiseAI/Flowise". Also "mem0ai/mem0". Let's pick 5-6.

Select:

- microsoft/agent-governance-toolkit (⭐0 (+46 today))
- moeru

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*