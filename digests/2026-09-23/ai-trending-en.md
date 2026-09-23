# AI Open Source Trends 2026-09-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-23 02:28 UTC

---

Here's a thinking process:

1.  **Analyze User Input:**
   - User is a technical analyst focused on AI open-source ecosystem
   - Data provided: GitHub trending (8 repos) + AI topic search results (80 repos, deduplicated)
   - Task: Filter for AI relevance, categorize, analyze trends
   - Output format: Structured report with 4 sections: Today's Highlights, Top Projects by Category, Trend Signal Analysis, Community Hot Spots
   - Requirements: English, professional, concise, include GitHub links for every project

2.  **Step 1: Filter for AI Relevance from Trending List:**
   Let's look at the 8 trending repos:
   - anthropics/financial-services: Python, 0 stars today (+438 total? Actually ⭐0 (+438 today) means total is 0, today +438. But financial services? Might be AI-related but could be fintech. Need to check context. Given the tag is just [Python], no AI tag. But the description isn't fully shown. I'll assume it's not primarily AI/ML framework/agent. I'll skip or note as borderline. The prompt says "exclude unrelated general tools, frontend frameworks, games, etc." So I need to judge if it's AI. Financial services could be AI-driven, but without explicit AI tag/description, I'll treat as non-AI trending repo and skip.
   - agent-substrate/substrate: Go, ⭐0 (+245 today). Description: "Agent Substrate: the core system". This is AI agents infrastructure. Definitely AI-related.
   - dream-num/univer: TypeScript, ⭐0 (+255 today). "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime." Clearly AI agents.
   - davila7/claude-code-templates: Python, ⭐0 (+64 today). "CLI tool for configuring and monitoring Claude Code". AI tooling, definitely AI-related.
   - google/ax: Go, ⭐0 (+2305 today). "Google's open agentic orchestration runtime". Definitely AI agents/infrastructure.
   - mvt-project/mvt: Python, ⭐0 (+441 today). "Mobile Verification Toolkit". Forensics, not AI. Skip.
   - superdesigndev/treg: Python, ⭐0 (+230 today). "OpenRouter for agent tools". AI agents/tools. Yes.
   - browser-use/video-use: Python, ⭐0 (+191 today). "Edit videos with coding agents". AI + video editing. AI-related, but could be tool. I'll include as AI application.

   Let's list the AI-relevant trending repos:
   1. agent-substrate/substrate (Go) - AI agents core system
   2. dream-num/univer (TS) - Office harness for AI agents
   3. davila7/claude-code-templates (Python) - Claude Code CLI tool
   4. google/ax (Go) - Google's open agentic orchestration runtime
   5. superdesigndev/treg (Python) - OpenRouter for agent tools
   6. browser-use/video-use (Python) - Edit videos with coding agents

   Wait, the prompt says "Skip non-AI trending repos." I'll filter carefully. I'll keep those clearly AI-related. The others I'll skip or mention as excluded. I'll focus on the AI ones.

   Let's also check the AI Topic Search Results. There are many, but I need to categorize and pick representative projects for the report. The user wants me to generate a structured report based on ALL the data, but Step 1 says "From the above data, select projects clearly related to AI/ML (exclude unrelated general tools, frontend frameworks, games, etc.). Skip non-AI trending repos." So I need to filter both the trending list and the topic search results to only AI-relevant projects.

   Actually, re-reading: "Step 1 (Filter): From the above data, select projects clearly related to AI/ML (exclude unrelated general tools, frontend frameworks, games, etc.). Skip non-AI trending repos." This primarily refers to the trending list, but I should also filter the topic search results accordingly. However, the topic search results are all tagged with AI topics (ai-agent, rag, ml, llm, vector-db, etc.), so they're all AI-relevant by definition. The trending list has some that aren't AI.

   I'll filter the trending list to AI-relevant only, and then from the topic search results, I'll select representative projects across categories.

   Let's re-examine trending list AI relevance:
   - anthropics/financial-services: Probably fintech, not necessarily AI. Skip.
   - agent-substrate/substrate: AI agents. Keep.
   - dream-num/univer: AI agents infrastructure. Keep.
   - davila7/claude-code-templates: Claude Code tooling. Keep.
   - google/ax: Agentic orchestration. Keep.
   - mvt-project/mvt: Mobile forensics. Skip.
   - superdesigndev/treg: OpenRouter for agent tools. Keep.
   - browser-use/video-use: Coding agents for video editing. Keep (AI + video).

   So 6 AI-relevant trending repos.

   Now, Step 2: Categorize. Categories:
   - 🔧 AI Infrastructure
   - 🤖 AI Agents / Workflows
   - 📦 AI Applications
   - 🧠 LLMs / Training
   - 🔍 RAG / Knowledge

   I need to pick 3-8 representative projects per category from the filtered data (both trending and topic search). But the report should be focused, not listing all 80. I'll pick the most notable/starred or trending ones.

   Let's look at the topic search results and group them. I'll go through the list and pick per category. I need to include GitHub links, stars data (total + today's new if available), one sentence.

   But note: The topic search results don't have "today's new stars" listed, only total stars. The trending list has today's stars. I'll use what's available. For topic search projects, I'll just use total stars.

   Let's categorize the topic search projects mentally:
   - AI Infrastructure: Things like langchain, langgraph, mem0, anything-llm, headroom, ragflow, etc. Actually categories overlap.
   - AI Agents / Workflows: Many with topic:ai-agent: hermes-agent, career-ops, daily_stock_analysis, ppt-master, cherry-studio, ai-agent-book, nanobot, CowAgent, siyuan, Codewhale, CopilotKit, DeepSeek-Reasonix, QwenPaw, Vibe-Trading, openclaude, open-webui, etc.
   - AI Applications: Specific apps. Could be covered under agents or other.
   - LLMs / Training: tensorflow, transformers, LLMs-from-scratch, pytorch, etc.
   - RAG / Knowledge: open-webui, langchain, awesome-llm-apps, graphify, claude-mem, ragflow, hello-agents, headroom, anything-llm, mem0, llama_index, jeecgboot, milvus, langgraph, etc.
   - Vector DB: meilisearch, PageIndex, qdrant, weaviate, zvec, langchain4j, txtai, LEANN, lancedb, oceanbase.
   - LLM model: minimind, rig, opencompass, tiny-llm, nestia, DATAGEN, home-llm, awesome-japanese-llm, etc.

   I need to pick 3-8 per category for the report. I'll select the most representative, high-impact, or trending ones.

   Let's structure the report as requested.

   First, "Today's Highlights" - 3-5 sentences on most noteworthy AI open-source developments today. I'll focus on the trending AI repos + maybe hot topics.

   "Top Projects by Category" - For each category, list 3-8 representative projects with name (link), stars data, one sentence.

   "Trend Signal Analysis" - 200-300 words.

   "Community Hot Spots" - Bullet list of 3-5 projects/directions.

   I need to ensure every project listed has a GitHub link.

   Let's start filtering and selecting.

   From trending AI repos:
   1. agent-substrate/substrate (Go) - ⭐0 (+245 today) - "Agent Substrate: the core system"
   2. dream-num/univer (TS) - ⭐0 (+255 today) - "The Office Harness for AI Agents"
   3. davila7/claude-code-templates (Python) - ⭐0 (+64 today) - "CLI tool for configuring and monitoring Claude Code"
   4. google/ax (Go) - ⭐0 (+2305 today) - "Google's open agentic orchestration runtime"
   5. superdesigndev/treg (Python) - ⭐0 (+230 today) - "OpenRouter for agent tools"
   6. browser-use/video-use (Python) - ⭐0 (+191 today) - "Edit videos with coding agents"

   These are the trending ones. I'll incorporate them where relevant.

   Now, for the category sections, I'll pick from the topic search results plus maybe include the trending ones as highlights.

   Let's define categories and pick projects:

   🔧 AI Infrastructure:
   - langchain-ai/langchain (Python) ⭐146,900 [topic:rag] - "The agent engineering platform." Actually langchain is framework/infrastructure.
   - langchain-ai/langgraph (Python) ⭐42,153 [topic:rag] - "Build resilient agents."
   - mem0ai/mem0 (Python) ⭐65,846 [topic:rag] - "The Memory Layer for AI Agents"
   - anything-llm/Mintplex-Labs/anything-llm (JavaScript) ⭐66,341 [topic:rag] - "Own your intelligence, local-first agent experience"
   - open-webui/open-webui (Python) ⭐152,856 [topic:rag] - "User-friendly AI Interface"
   - infiniflow/ragflow (Go) ⭐91,178 [topic:rag] - "Leading open-source RAG engine with Agent capabilities"
   - headroomlabs-ai/headroom (Python) ⭐73,538 [topic:rag] - "Compress tool outputs, logs, files, and RAG chunks"
   - qdrant/qdrant (Rust) ⭐34,758 [topic:vector-db] - "High-performance vector database"
   - meilisearch/meilisearch (Rust) ⭐59,374 [topic:vector-db] - "Lightning-fast search engine with AI-powered hybrid search"

   I'll pick 5-6 for Infrastructure.

   🤖 AI Agents / Workflows:
   - nousresearch/hermes-agent (Python) ⭐248,130 [topic:ai-agent] - "The agent that grows with you"
   - cherryhq/cherry-studio (TypeScript) ⭐52,085 [topic:ai-agent] - "AI productivity studio with smart chat, autonomous agents, 300+ assistants"
   - hkuds/nanobot (Python) ⭐48,490 [topic:ai-agent] - "Ultra-lightweight, open-source, self-hosted personal AI agent framework"
   - zhayujie/CowAgent (Python) ⭐47,089 [topic:ai-agent] - "Open-source super AI assistant & Agent Harness"
   - siyuan-note/siyuan (TypeScript) ⭐46,470 [topic:ai-agent] - "Knowledge workspace where humans and AI agents work together"
   - copilotkit/copilotkit (TypeScript) ⭐37,482 [topic:ai-agent] - "Frontend Stack for Agents & Generative UI"
   - esengine/DeepSeek-Reasonix (Go) ⭐35,679 [topic:ai-agent] - "DeepSeek-native AI coding agent for terminal"
   - agentscope-ai/QwenPaw (TypeScript) ⭐35,217 [topic:ai-agent] - "Personal AI Assistant, extensible capabilities"
   - hkuds/Vibe-Trading (Python) ⭐33,851 [topic:ai-agent] - "Personal Trading Agent"
   - gitlawb/openclaude (TypeScript) ⭐33,492 [topic:ai-agent] - "Runs anywhere. uses anything"

   Pick 5-7.

   📦 AI Applications:
   - open-webui/open-webui (also infrastructure but used as app) - maybe put in applications
   - firecrawl/firecrawl (TypeScript) ⭐183,461 [topic:llm] - "Web data API to search, scrape, and interact at scale"
   - browser-use/browser-use (Python) ⭐115,960 [topic:llm] - "Agents that use the browser"
   - significant-gravitas/AutoGPT (Python) ⭐187,503 [topic:llm] - "Accessible AI for everyone, tools to build on"
   - harry0703/MoneyPrinterTurbo (Python) ⭐125,192 [topic:llm] - "Generate HD short videos from topic/keyword with AI workflow"
   - tauricresearch/TradingAgents (Python) ⭐108,158 [topic:llm] - "Multi-Agents LLM Financial Trading Framework"
   - djidgen? No. I'll pick a few.

   🧠 LLMs / Training:
   - tensorflow/tensorflow (C++) ⭐200,260 [topic:ml] - "Open source ML framework"
   - huggingface/transformers (Python) ⭐166,542 [topic:ml] - "Model-definition framework for SOTA ML models"
   - pytorch/pytorch (Python) ⭐103,183 [topic:ml] - "Tensors and dynamic neural networks GPU acceleration"
   - raspbt/LLMs-from-scratch (Jupyter) ⭐105,404 - "Implement ChatGPT-like LLM in PyTorch from scratch"
   - open-compass/opencompass (Python) ⭐7,469 [topic:llm-model] - "LLM evaluation platform across 100+ datasets"
   - jinagyaogong/minimind (Python) ⭐62,205 [topic:llm-model] - "Train 64M-parameter LLM from scratch in 2h"
   - ollama/ollama (Go) ⭐181,495 [topic:llm] - "Get up and running with various models locally"

   Pick 5-6.

   🔍 RAG / Knowledge:
   - open-webui/open-webui (already listed, but has rag topic) - I'll maybe separate
   - langchain-ai/langchain (also infra)
   - infiniflow/ragflow (Go) ⭐91,178 [topic:rag] - "Leading open-source RAG engine with Agent capabilities"
   - headroomlabs-ai/headroom (Python) ⭐73,538 [topic:rag] - "Compress tool outputs/logs/files/RAG chunks"
   - qdrant/qdrant (Rust) ⭐34,758 [topic:vector-db] - "Vector database"
   - weaviate/weaviate (Go) ⭐16,839 [topic:vector-db] - "Vector database with object+vector search"
   - topoteretes/cognee (Python) ⭐30,924 [topic:vector-db] - "AI memory platform for agents, persistent long-term memory"
   - nirDiamant/RAG_Techniques (Jupyter) ⭐29,587 - "Advanced RAG techniques tutorials"
   - vectifyai/PageIndex (Python) ⭐35,808 [topic:vector-db] - "Document index for vectorless, reasoning-based RAG"
   - alibaba/zvec (C++) ⭐15,992 - "Lightweight in-process vector database"

   I'll pick 5-6 for RAG/Knowledge.

   Now, I need to ensure no overlap confusion. Some projects span categories. I'll assign primary category per the prompt's suggestion: "pick the primary one". I'll be careful.

   Let's restructure mentally:

   Actually, the prompt says: "Group filtered projects into these categories (a project can belong to multiple; pick the primary one)". So I'll pick primary category for each, but I can list them across categories if needed. The report sections say "For each category, list 3-8 representative projects". I'll pick distinct projects per category, focusing on primary category.

   Let's list projects with primary category:

   AI Infrastructure:
   - langchain-ai/langchain (Python) ⭐146,900 - framework for agents/RAG
   - mem0ai/mem0 (Python) ⭐65,846 - memory layer for agents
   - infiniflow/ragflow (Go) ⭐91,178 - RAG + agent engine
   - qdrant/qdrant (Rust) ⭐34,758 - vector database
   - meilisearch/meilisearch (Rust) ⭐59,374 - AI-powered hybrid search
   - anything-llm/Mintplex-Labs/anything-llm (JavaScript) ⭐66,341 - local-first agent experience
   - headroomlabs-ai/headroom (Python) ⭐73,538 - compress RAG chunks

   AI Agents / Workflows:
   - nousresearch/hermes-agent (Python) ⭐248,130 - agent growing with you
   - cherryhq/cherry-studio (TypeScript) ⭐52,085 - AI productivity studio with agents
   - hkuds/nanobot (Python) ⭐48,490 - self-hosted personal AI agent framework
   - zhayujie/CowAgent (Python) ⭐47,089 - super AI assistant & agent harness
   - copilotkit/CopilotKit (TypeScript) ⭐37,482 - frontend stack for agents & generative UI
   - esengine/DeepSeek-Reasonix (Go) ⭐35,679 - DeepSeek-native coding agent
   - agentscope-ai/QwenPaw (TypeScript) ⭐35,217 - personal AI assistant

   AI Applications:
   - firecrawl/firecrawl (TypeScript) ⭐183,461 - web data API at scale
   - browser-use/browser-use (Python) ⭐115,960 - agents that use the browser
   - significant-gravitas/AutoGPT (Python) ⭐187,503 - accessible AI tools
   - harry0703/MoneyPrinterTurbo (Python) ⭐125,192 - AI video generation from keywords
   - tauricresearch/TradingAgents (Python) ⭐108,158 - multi-agent LLM financial trading
   - browser-use/video-use (from trending) - edit videos with coding agents

   LLMs / Training:
   - tensorflow/tensorflow (C++) ⭐200,260 - ML framework
   - huggingface/transformers (Python) ⭐166,542 - model-definition framework
   - pytorch/pytorch (Python) ⭐103,183 - tensors & neural networks GPU
   - raspbt/LLMs-from-scratch (Jupyter) ⭐105,404 - implement LLM from scratch
   - ollama/ollama (Go) ⭐181,495 - run local models easily
   - open-compass/opencompass (Python) ⭐7,469 - LLM evaluation platform
   - jingyaogong/minimind (Python) ⭐62,205 - train 64M LLM in 2h

   RAG / Knowledge:
   - langchain-ai/langgraph (Python) ⭐42,153 - build resilient agents (also agents but primary RAG/agent workflow)
   - infiniflow/ragflow (Go) ⭐91,178 - RAG engine with agents (could be infra or RAG)
   - topoteretes/cognee (Python) ⭐30,924 - AI memory platform for agents, knowledge graph
   - nirDiamant/RAG_Techniques (Jupyter) ⭐29,587 - advanced RAG techniques
   - vectifyai/PageIndex (Python) ⭐35,808 - vectorless, reasoning-based RAG
   - weaviate/weaviate (Go) ⭐16,839 - vector database with structured filtering
   - meilisearch/meilisearch (Rust) ⭐59,374 - AI-powered hybrid search (also infra)

   I need to trim to 3-8 per category. I'll pick the most representative and impactful.

   Let's actually go through each category and select exactly 5 for balance, or up to 8. I'll aim for 5-6 each.

   Now, "Today's Highlights": I'll focus on the trending AI repos + major movements. E.g., Google open-sourcing agentic orchestration runtime (ax), the surge in agent substrate tools, Claude Code templates, Univer as office harness for AI agents, and video editing with coding agents. Also note the massive star gains.

   "Trend Signal Analysis": 200-300 words analyzing what type of AI tool getting explosive attention, new tech stacks, connection to recent LLM releases/industry events. I'll distill from the data: strong focus on agentic orchestration, RAG + agent integration, local-first LLM deployment (Ollama), vector DB evolution, and Google's entry. Also mention the dominance of Python/Go/Rust, and the shift toward practical application layers (memory, compression, tool use).

   "Community Hot Spots": 3-5 bullet points of projects/directions worth developer focus.

   I need to ensure every project listed has a GitHub link. I'll include links.

   Let's start writing the report step by step.

   First, filter and list selected projects with data.

   I'll create a curated list:

   From trending (AI only):
   1. agent-substrate/substrate: https://github.com/agent-substrate/substrate [Go] ⭐0 (+245 today) - Core system for AI agents
   2. dream-num/univer: https://github.com/dream-num/univer [TypeScript] ⭐0 (+255 today) - Office harness for AI agents (Spreadsheets, Docs, Slides)
   3. davila7/claude-code-templates: https://github.com/davila7/claude-code-templates [Python] ⭐0 (+64 today) - CLI tool for configuring/monitoring Claude Code
   4. google/ax: https://github.com/google/ax [Go] ⭐0 (+2305 today) - Google's open agentic orchestration runtime
   5. superdesigndev/treg: https://github.com/superdesigndev/treg [Python] ⭐0 (+230 today) - OpenRouter for agent tools
   6. browser-use/video-use: https://github.com/browser-use/video-use [Python] ⭐0 (+191 today) - Edit videos with coding agents

   From topic search, I'll pick representative projects. I need to make sure I don't exceed reasonable number, and links are correct.

   Let's pick for each category 5 projects, mostly from topic search, but I can include trending ones in highlights or as part of categories if relevant.

   Actually, the report's "Top Projects by Category" should be from the filtered data, which includes both trending and topic search. I'll integrate them naturally.

   Let's decide on final project lists per category. I'll pick the most starred/relevant, and include stars data.

   Category: 🔧 AI Infrastructure
   1. langchain-ai/langchain: https://github.com/langchain-ai/langchain [Python] ⭐146,900 - The agent engineering platform for LLM applications.
   2. mem0ai/mem0: https://github.com/mem0ai/mem0 [Python] ⭐65,846 - The Memory Layer for AI Agents; drop-in memory infrastructure for persistent context.
   3. infiniflow/ragflow: https://github.com/infiniflow/ragflow [Go] ⭐91,178 - Leading open-source RAG engine fusing cutting-edge RAG with Agent capabilities.
   4. qdrant/qdrant: https://github.com/qdrant/qdrant [Rust] ⭐34,758 - High-performance, massive-scale vector database and search engine for next-gen AI.
   5. meilisearch/meilisearch: https://github.com/meilisearch/meilisearch [Rust] ⭐59,374 - Lightning-fast search engine API bringing AI-powered hybrid search to applications.

   Category: 🤖 AI Agents / Workflows
   1. nousresearch/hermes-agent: https://github.com/NousResearch/hermes-agent [Python] ⭐248,130 - The agent that grows with you; core agent framework.
   2. cherryhq/cherry-studio: https://github.com/CherryHQ/cherry-studio [TypeScript] ⭐52,085 - AI productivity studio with smart chat, autonomous agents, and 300+ assistants.
   3. hkuds/nanobot: https://github.com/HKUDS/nanobot [Python] ⭐48,490 - Ultra-lightweight, open-source, self-hosted personal AI agent framework with WebUI, tools, memory, MCP.
   4. zhayujie/CowAgent: https://github.com/zhayujie/CowAgent [Python] ⭐47,089 - Open-source super AI assistant & agent harness; plans tasks, runs tools, self-evolves with memory.
   5. copilotkit/CopilotKit: https://github.com/CopilotKit/CopilotKit [TypeScript] ⭐37,

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*