# AI 开源趋势日报 2026-07-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-15 01:26 UTC

---

We need to produce a structured report with steps. First filter: select projects clearly AI/ML related. Exclude generic tools, front-end frameworks, games etc. From Trending list, we need to omit non-AI projects. Let's identify AI/ML related repos in Trending list:

List with stars and topics:

- [Shubhamsaboo/awesome-llm-apps] [Python] ⭐0 (+1106 today) -> AI related (LLM apps) keep.
- [mattpocock/skills] [Shell] ⭐0 (+1679 today) -> generic? It's "Skills for Real Engineers". Probably not AI specific. Exclude.
- [Dicklesworthstone/destructive_command_guard] [Rust] ⭐0 (+473 today) -> generic safety tool. Exclude.
- [OpenCut-app/OpenCut] [TypeScript] ⭗ video editor alternative. Not AI specific. Exclude.
- [virattt/ai-hedge-fund] [Python] ⭐0 (+109 today) -> AI related (AI hedge fund). Keep.
- [Nutlope/hallmark] [CSS] ⭐0 (+1015 today) -> anti-AI design. Not AI project. Exclude.
- [HKUDS/Vibe-Trading] [Python] ⭐0 (+1256 today) -> AI trading agent. Keep.
- [Raphire/Win11Debloat] [PowerShell] ⭐0 (+783 today) -> generic OS tweak. Exclude.
- [hasaneyldrm/exercises-dataset] [HTML] ⭐0 (+851 today) -> fitness dataset. Not AI. Exclude.
- [penpot/penpot] [Clojure] ⭐0 (+395 today) -> design platform. Not AI. Exclude.
- [AIEraDev/Clypra] [TypeScript] ⭐0 (+85 today) -> video editor. Exclude.
- [par274/sharpemu] [C#] ⭐0 (+332 today) -> emulator. Exclude.
- [chenyme/grok2api] [Go] ⭐0 (+186 today) -> API gateway for Grok. Could be AI related? It's about Grok Build, Web, Console API gateway. Might be considered AI related? Possibly but it's more infrastructure. Might keep if AI oriented. But likely a generic API gateway. The instruction: exclude generic tools. I'd exclude.
- [Graphify-Labs/graphify] [Python] ⭐0 (+1851 today) -> AI coding assistant skill (RAG). Keep.
- [HenryNdubuaku/maths-cs-ai-compendium] [TypeScript] ⭐0 (+112 today) -> AI/ML compendium. Keep? It's a compendium of maths-cs-ai. Could be considered AI related. Might keep as educational resource. But it's not a project but a compendium. Might include.

Now the AI theme search results list contains many projects. We need to filter those that are AI/ML related. Most are AI-agent related, LLM model, RAG, vector DB, etc. We'll keep them all as they are clearly AI related.

Thus step 1: compile filtered list.

Now step 2: categorize each selected project into categories. Provide up to 3-8 per category.

We need to output a report with sections: 今日速览, 各维度热门项目, 趋势信号分析, 社区关注热点.

We must include GitHub links and stars (total + today delta). For each project we need to show stars total and today delta. For those with stars shown as "⭐0 (+...)" meaning total stars is 0? Actually "⭐0 (+1106 today)" indicates total stars 0? Maybe they have 0 stars but today added 1106. But for many high-star repos, they have stars count like "⭐214,901 [topic:ai-agent]". So we need to include total stars and today delta if available. For those with no delta, maybe no +X. We can include whatever is shown.

We need to prioritize primary category. If a project belongs to multiple categories, list primary.

Let's compile filtered list:

From Trending filtered AI projects:

1. Shubhamsaboo/awesome-llm-apps (Python) ⭐120,821 [topic:rag] - but in trending list star is 0 +1106 today? Actually the trending list shows ⭐0 (+1106 today). But later in AI theme list there is also awesome-llm-apps with ⭐120,821. So we can use the actual stars count maybe from overall data. Use the stars count from AI theme list for more accurate. Provide both? The instruction: include stars 数据（总量 + 今日新增，如有）. So we can give total stars and today delta if provided. For those with "⭐0 (+1106 today)", total is 0, delta 1106. For others with "⭐214,901 [topic:ai-agent]" no delta provided. We may not have delta. Could note "无今日新增". We'll include whatever.

We'll need to list each project with link, stars total and today delta.

Now categorize.

Categories:

- 🔧 AI 基础工具 (frameworks, SDKs, inference engines, dev tools, CLI)
- 🤖 AI 智能体/工作流 (Agent frameworks, automation, multi-agent)
- 📦 AI 应用 (specific application products, vertical solutions)
- 🧠 大模型/训练 (model weights, training frameworks, fine-tuning tools)
- 🔍 RAG/知识库 (vector DB, retrieval-augmented, knowledge management)

Now assign each selected project to a primary category.

Let's list all selected projects (from both Trending filtered and AI theme search). I'll compile a master list of AI/ML related repos:

From Trending filtered:

- Shubhamsaboo/awesome-llm-apps (Python) - category? It's a curated list of LLM apps. Could be considered "AI 应用" or "RAG"? It's about AI Agent & RAG apps. Primary could be 📦 AI 应用 (or 🤖?). Maybe "AI 应用". But also could be "🔧 AI 基础工具"? It's a list, not a tool. I'd put under 📦 AI 应用.

- viraltt/ai-hedge-fund (Python) - AI application for finance. Could be 📦 AI 应用.

- HKUDS/Vibe-Trading (Python) - AI trading agent. Could be 🤖 AI 智能体/工作流 (agent for trading). Or 📦 AI 应用. Primary: 🤖.

- Graphify-Labs/graphify (Python) - AI coding assistant skill (RAG). Could be 🤖 or 🔧? It's a skill for agents. It's about knowledge graph. Could be 🤖 (agent workflow) or 🔍 RAG. Primary: 🤖 (agent).

- HenryNdubuaku/maths-cs-ai-compendium (TypeScript) - educational compendium. Could be 🧠 大模型/训练? Not exactly. Could be 🔧? maybe exclude? It's not a tool but a resource. Might be excluded? The instruction says filter out projects clearly AI/ML related; a compendium may be considered AI related educational resource. Could include under 🧠 大模型/训练? Actually it's about maths-cs-ai compendium, maybe "AI education". Could be 🧠? Not sure. Might skip because not a tool. But we can include as "AI 教育资源" maybe not needed. Might drop.

Now from AI theme search list (81 repos). We'll need to pick representative ones for categories.

We can pick top projects with high stars.

List with stars:

- NousResearch/hermes-agent (Python) ⭐214,901 [topic:ai-agent] -> primary 🤖 AI 智能体/工作流.

- santifer/career-ops (JavaScript) ⭐60,122 [topic:ai-agent] -> 🤖.

- ZhuLinsen/daily_stock_analysis (Python) ⭐57,226 [topic:ai-agent] -> 🤖 or 📦? It's stock analysis system. Could be 📦 AI 应用 (vertical). Primary maybe 📦.

- Panniantong/Agent-Reach (Python) ⭐56,280 [topic:ai-agent] -> 🤖.

- CherryHQ/cherry-studio (TypeScript) ⭐48,580 [topic:ai-agent] -> 🤖 (productivity studio) maybe 📦? It's a studio product. Could be 📦.

- zhayujie/CowAgent (Python) ⭐45,981 [topic:ai-agent] -> 🤖.

- HKUDS/nanobot (Python) ⭐45,577 [topic:ai-agent] -> 🤖.

- siyuan-note/siyuan (TypeScript) ⭐45,117 [topic:ai-agent] -> Actually it's a note-taking system, but with AI agent? Might be 📦? It's a knowledge management system. Could be 🔍 RAG? But primary maybe 📦 (application). However it's not AI-specific? It has AI-agent tag. Could be 🤖? Eh.

- hugohe3/ppt-master (Python) ⭐39,015 [topic:ai-agent] -> AI PPT generation, vertical application. Could be 📦.

- CopilotKit/CopilotKit (TypeScript) ⭐36,033 [topic:ai-agent] -> 🤖 (frontend stack). Could be 🔧 AI 基础工具? It's a framework for agents. Could be 🔧.

- iOfficeAI/AionUi (TypeScript) ⭐30,055 [topic:ai-agent] -> 🤖.

- Gitlawb/openclaude (TypeScript) ⭐29,996 [topic:ai-agent] -> 🤖.

- esengine/DeepSeek-Reasonix (Go) ⭐26,951 [topic:ai-agent] -> 🤖 (CLI agent). Could be 🔧.

- jackwener/OpenCLI (JavaScript) ⭐26,654 [topic:ai-agent] -> 🤖.

- nocobase/nocobase (TypeScript) ⭐23,341 [topic:ai-agent] -> 🤖 (no-code platform). Could be 📦.

- 0xPlaygrounds/rig (Rust) ⭐7,922 [topic:llm-model] -> AI model building toolkit. Could be 🔧 AI 基础工具.

- open-compass/opencompass (Python) ⭐7,192 [topic:llm-model] -> evaluation platform. Could be 🧠 大模型/训练? Actually it's evaluation, maybe 🧠.

- Eigenwise/atomic-agents (Python) ⭐6,043 [topic:llm-model] -> building agents. Could be 🤖.

- samchon/nestia (TypeScript) ⭐2,165 [topic:llm-model] -> NestJS helper, maybe 🔧.

- Awesome-Embodied-Robotics-and-Agent (markdown) ⭐1,829 [topic:llm-model] -> list, not a project. Exclude.

- chrisliu298/awesome-llm-unlearning (Jupyter) ⭐611 [topic:llm-model] -> unlearning. Could be 🧠.

- galilai-group/stable-pretraining (Python) ⭐285 [topic:llm-model] -> pretraining library. Could be 🧠.

- testtimescaling/testtimescaling.github.io (HTML) ⭐109 [topic:llm-model] -> survey. Exclude.

- HKBU-LAGAS/Awesome-Item-ID-Gen-RecSys ⭐108 [topic:llm-model] -> recommender. Could be 🧠.

- SuperBruceJia/Awesome-Mixture-of-Experts ⭐67 [topic:llm-model] -> list. Exclude.

- aiaccess/ai-access (PHP) ⭐54 [topic:llm-model] -> flexible PHP library for AI models. Could be 🔧.

- LancerLab/croqtile (C++) ⭐34 [topic:llm-model] -> kernel programming DSL. Could be 🔧.

- R-D-BioTech-Alaska/Qelm (Python) ⭐27 [topic:llm-model] -> Quantum Enhanced Language Model. Could be 🧠.

- AarambhDevHub/aarambh-ai (Rust) ⭐24 [topic:llm-model] -> Decoder-only LLM in Rust. Could be 🧠.

- AmirMotefaker/Create-your-own-ChatGPT (Jupyter) ⭐23 [topic:llm-model] -> tutorial. Exclude.

- affaan-m/ECC (JavaScript) ⭐229,736 [topic:llm] - huge project? Actually ECC is "The agent harness performance optimization system." It's about agent harness. Could be 🤖.

- Significant-Gravitas/AutoGPT (Python) ⭐185,539 [topic:llm] -> AutoGPT. Primary 🤖.

- ollama/ollama (Go) ⭐176,117 [topic:llm] -> model runner. Could be 🔧 AI 基础工具 (inference engine).

- f/prompts.chat (HTML) ⭐165,746 [topic:llm] -> prompts collection. Exclude.

- huggingface/transformers (Python) ⭐162,609 [topic:llm] -> core ML framework. Could be 🧠 大模型/训练.

- firecrawl/firecrawl (TypeScript) ⭐151,055 [topic:llm] -> web API. Could be 🤖? It's a web scraping API, maybe not directly AI tool. Could be 🔧? It's a tool for AI agents to interact with web. Might be 🤖.

- langgenius/dify (TypeScript) ⭐148,846 [topic:llm] -> platform for agentic workflow. Could be 🤖 or 📦? It's a platform. Could be 📦.

- open-webui/open-webui (Python) ⭐145,441 [topic:llm] -> UI for LLMs. Could be 🔧.

- langchain-ai/langchain (Python) ⭐141,781 [topic:llm] -> agent engineering platform. Could be 🤖.

- browser-use/browser-use (Python) ⭐104,761 [topic:llm] -> make websites accessible for AI agents. Could be 🤖.

- rasbt/LLMs-from-scratch (Jupyter) ⭐99,099 [topic:llm] -> implement LLMs from scratch. Could be 🧠.

- vllm-project/vllm (Python) ⭐86,270 [topic:llm] -> inference engine. Could be 🔧.

- DietrichGebert/ponytail (JavaScript) ⭐83,123 [topic:llm] -> makes AI agent think lazily. Could be 🤖.

- OpenHands/OpenHands (Python) ⭐80,792 [topic:llm] -> AI-driven development. Could be 🤖.

- Shubhamsaboo/awesome-llm-apps (Python) ⭐120,821 [topic:rag] -> RAG apps list. Could be 📦 or 🔍 RAG. Primary maybe 🔍 RAG? Actually it's about RAG apps, but also AI applications. Could be 🔍 RAG/知识库.

- thedotmack/claude-mem (JavaScript) ⭐87,267 [topic:rag] -> persistent context. Could be 🔍 RAG.

- Graphify-Labs/graphify (Python) ⭐86,407 [topic:rag] -> knowledge graph. Could be 🔍 RAG.

- PaddlePaddle/PaddleOCR (Python) ⭐85,488 [topic:rag] -> OCR for AI. Could be 🔍 RAG.

- infiniflow/ragflow (Go) ⭐85,046 [topic:rag] -> RAG engine with agent capabilities. Could be 🔍 RAG.

- datawhalechina/hello-agents (Python) ⭐66,182 [topic:rag] -> tutorial on building agents. Could be 🤖.

- Mintplex-Labs/anything-llm (JavaScript) ⭐63,299 [topic:rag] -> local-first agent experience. Could be 📦.

- mem0ai/mem0 (TypeScript) ⭐60,831 [topic:rag] -> universal memory layer. Could be 🔍 RAG.

- headroomlabs-ai/headroom (Python) ⭐59,172 [topic:rag] -> compress tool outputs. Could be 🔍 RAG.

- FlowiseAI/Flowise (TypeScript) ⭐54,615 [topic:rag] -> visual builder for agents. Could be 🤖.

- run-llama/llama_index (Python) ⭐50,849 [topic:rag] -> document agent and OCR platform. Could be 🔍 RAG.

- jeecgboot/JeecgBoot (Java) ⭐47,068 [topic:rag] -> low-code platform with AI skills. Could be 📦.

- ... many more.

- meilisearch/meilisearch (Rust) ⭐58,591 [topic:vector-db] -> search engine. Could be 🔍 vector-db (which is part of RAG). Primary maybe 🔍 RAG.

- milvus-io/milvus (Go) ⭐45,224 [topic:vector-db] -> vector DB. Could be 🔍 RAG.

- VectifyAI/PageIndex (Python) ⭐34,025 [topic:vector-db] -> document index for reasoning RAG. Could be 🔍 RAG.

- qdrant/qdrant (Rust) ⭐33,274 [topic:vector-db] -> vector DB. 🔍 RAG.

- NirDiamant/RAG_Techniques (Jupyter) ⭐28,548 [topic:vector-db] -> tutorials. Could be 🔍 RAG.

- topoteretes/cognee (Python) ⭐27,876 [topic:vector-db] -> AI memory platform. Could be 🔍 RAG.

- weaviate/weaviate (Go) ⭐16,597 [topic:vector-db] -> vector DB. 🔍 RAG.

- memvid/memvid (Rust) ⭐15,790 [topic:vector-db] -> memory layer. 🔍 RAG.

- alibaba/zvec (C++) ⭐14,899 [topic:vector-db] -> lightweight vector DB. 🔍 RAG.

- neuml/txtai (Python) ⭐12,722 [topic:vector-db] -> semantic search framework. 🔍 RAG.

- langchain4j/langchain4j (Java) ⭐12,599 [topic:vector-db] -> Java library for LLM and vector stores. Could be 🔍 RAG.

- zilliztech/claude-context (TypeScript) ⭐12,136 [topic:vector-db] -> code search MCP. Could be 🔍 RAG.

- lancedb/lancedb (HTML) ⭐10,894 [topic:vector-db] -> embedded retrieval library. 🔍 RAG.

Now we need to filter out non-AI related projects from Trending list. Already done.

Now we need to produce output: 今日速览 (3-5 sentences), 各维度热门项目 (each dimension 3-8 projects with link, stars total and today delta, one-sentence description), 趋势信号分析 (200-300 characters? Actually 200~300 字, Chinese characters). Then 社区关注热点 bullet list 3-5 items with brief reasons.

We need to ensure language Chinese, professional concise, each project must have GitHub link.

We must include stars 数据（总量 + 今日新增，如有）. Provide both numbers where available. For many projects we have only total stars; we can note "暂无今日增量". For those with delta like +1106, we include.

Now we need to decide which projects to list per dimension (3-8 each). Let's pick representative high-star ones.

Dimension 🔧 AI 基础工具 (frameworks, SDKs, inference engines, dev tools, CLI):

- ollama/ollama (Go) ⭐176,117 [no delta] -> lightweight inference engine for many models.
- vllm-project/vllm (Python) ⭐86,270 -> high-throughput inference engine.
- huggingface/transformers (Python) ⭐162,609 -> core ML library.
- rig (Rust) ⭐7,922 -> modular LLM app framework.
- langchain-ai/langchain (Python) ⭐141,781 -> agent engineering platform (maybe more agent than tool). Might be more 🤖. But we can include maybe under 🤖.

But for tool category, also include:

- firecrawl/firecrawl (TypeScript) ⭐151,055 -> API for web interaction, could be tool. But maybe not.

Better to pick:

- ollama/ollama
- vllm-project/vllm
- huggingface/transformers
- rig
- maybe "Destructive Command Guard"? Not AI. Skip.

Now 🤖 AI 智能体/工作流:

We need 3-8 projects. Choose high-star ones:

- Significant-Gravitas/AutoGPT ⭐185,539 -> AutoGPT autonomous agent.
- NousResearch/hermes-agent ⭐214,901 -> agent that grows with you.
- cherry-studio/cherry-studio? Actually CherryHQ/cherry-studio ⭐48,580 -> AI productivity studio.
- OpenHands/OpenHands ⭐80,792 -> AI-driven development platform.
- langchain-ai/langchain ⭐141,781 -> agent engineering platform (maybe more tool). Could be here.

- OpenWebUI/open-webui ⭐145,441 -> UI for LLMs (maybe tool). But we can include.

But we need primary classification as AI Agent. So choose:

- Significant-Gravitas/AutoGPT
- NousResearch/hermes-agent
- CherryHQ/cherry-studio
- OpenHands/OpenHands
- maybe "siyuan-note/siyuan"? It's more note taking. Might not.

Now 📦 AI 应用 (specific application products, vertical solutions):

Pick:

- HKUDS/Vibe-Trading (Python) ⭐0 (+1256 today) but star count unknown. Could be low. Maybe better to pick from AI theme list with high stars: "hugohe3/ppt-master" ⭐39,015 (AI PPT generator). Also "zhayujie/CowAgent" maybe more agent. But application: "hugohe3/ppt-master" is a specific application generating PowerPoints. Also "graphify/graphify" maybe more tool. Also "shubhamsaboo/awesome-llm-apps" is a curated list, not a specific app. Maybe "Mintplex-Labs/anything-llm" ⭐63,299 – local-first agent experience (application). Also "penpot/penpot" is design platform but not AI. Could include "OpenCut-app/OpenCut" but excluded. Let's pick:

- hugohe3/ppt-master (Python) ⭐39,015 (+395 today?) Actually the trending list shows ⭐0 (+395 today). But we have stars maybe not given. Could use from AI theme list? It doesn't have stars count there. We'll use the trending delta.

- Mintplex-Labs/anything-llm (JavaScript) ⭐63,299 (no delta). It's an all-in-one local-first agent platform.

- Graphify-Labs/graphify (Python) ⭐86,407 (+1851 today) – knowledge graph for code. Could be considered AI application for code understanding.

- firecrawl/firecrawl (TypeScript) ⭐151,055 – web API for AI agents (maybe more tool). But we can include as application.

- zhayujie/CowAgent (Python) ⭐45,981 – super AI assistant harness (application).

Now 🧠 大模型/训练 (model weights, training frameworks, fine-tuning tools):

Pick high-star:

- huggingface/transformers (Python) ⭐162,609 – model library (though also tool). But we can include here.

- pytorch/pytorch (Python) ⭐101,813 – training framework.

- tensorflow/tensorflow (C++) ⭐196,359 – training framework.

- vllm-project/vllm also inference but also training? It's inference engine.

- Maybe "opencompass/opencompass" ⭐7,192 – evaluation.

- "galilai-group/stable-pretraining" ⭐285 – pretraining library (tiny).

- "aarambh-ai" Rust LLM from scratch – small.

But we need 3-8 projects. Let's pick:

- tensorflow/tensorflow
- pytorch/pytorch
- huggingface/transformers
- vllm-project/vllm (though inference, but also training? Might be okay)
- open-compass/opencompass (evaluation)
- maybe "r-d-bio-tech

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*