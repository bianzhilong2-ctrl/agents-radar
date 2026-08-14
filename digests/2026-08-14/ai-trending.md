# AI 开源趋势日报 2026-08-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-14 01:07 UTC

---

We need to produce a structured report: First filter out AI/ML related projects from trending list, exclude non-AI. Then classify them into categories: AI 基础工具, AI 智能体/工作流, AI 应用, 大模型/训练, RAG/知识库. Each project may belong to multiple, prioritize most relevant.

Then produce report with sections: 第一天速览, 各维度热门项目 (list 3-8 per dimension), 趋势信号分析 (200-300 Chinese characters), 社区关注热点 (bullet list 3-5 items with brief reasons). Must include project name with link and stars data (total + today delta). Must be in Chinese, professional concise, each project must have GitHub link.

We need to parse trending list of 17 repos and identify AI/ML related ones. From trending list:

- [cathrynlavery/diagram-design] HTML - not AI, skip.
- [semantica-agi/semantica] Python - AI? "Graph-Native Infrastructure for Context and Accountable AI Systems" sounds AI. Likely related to AI. Could be AI foundation tool? It's about graph-native infrastructure for context and accountable AI. Likely AI core. We'll include in some category maybe "AI 基础工具" or "RAG/知识库"? It's about infrastructure for AI systems, maybe "AI 基础工具".

- [anthropics/skills] Python - "Public repository for Agent Skills" seems AI agent skills, so AI 智能体/工作流.

- [cactus-compute/needle] Python - "14MB foundation model for tiny devices". That's a model, "大模型/训练" maybe "大模型/训练" or "AI 基础工具"? It's a foundation model, so "大模型/训练".

- [altic-dev/FluidVoice] Swift - macOS dictation app with AI model, but it's an app, maybe "AI 应用". It uses on-device STT and custom trained AI enhancement. Could be "AI 应用". But it's more of an application for speech. Might be considered "AI 应用". However the classification prioritize main category; maybe "AI 应用".

- [unslothai/unsloth] Python - Local UI to run and train LLMs and diffusion models, including many models. That's "大模型/训练" (training UI) and also "AI 基础工具". We'll assign to "大模型/训练".

- [macro-inc/macro] Rust - unified workspace for teams with shared AI memory. It's a workspace tool, maybe "AI 智能体/工作流"? It mentions "shared AI memory". Could be "AI 智能体/工作流". But maybe more of a workspace, but includes AI memory. I'd place under "AI 智能体/工作流".

- [megadose/holehe] Python - checks mail usage; not AI.

- [smicallef/spiderfoot] Python - OSINT; not AI.

- [NVIDIA-NeMo/Switchyard] Rust - LLM routing across models and providers. That's an LLM routing tool, "AI 智能体/工作流" or "AI 基础工具". It's about routing traffic across models, so "AI 智能体/工作流".

- [holaboss-ai/holaOS] TypeScript - All in One AI agent workspace; "AI 智能体/工作流".

- [kepano/obsidian-skills] - Agent skills for Obsidian; "AI 智能体/工作流".

- [3b1b/manim] Python - Animation engine for math videos; not AI.

- [msitarzewski/agency-agents] Shell - AI agency with specialized agents; "AI 智能体/工作流".

- [Lightricks/LTX-2] Python - inference and LoRA trainer for LTX-2 audio–video generative model. That's a generative model; "大模型/训练" maybe.

- [lightningpixel/modly] TypeScript - Desktop app to generate 3D models from images using local AI; "AI 应用" maybe "AI 应用".

- [infiniflow/ragflow] Go - RAGFlow is a leading open-source RAG engine; "RAG/知识库".

Now filter non-AI from trending list: exclude diagram-design, holehe, spiderfoot, manim, etc. Also exclude generic tools like Airflow? Not in trending list. So we keep AI related ones.

Now also need to consider AI 主题搜索 results (79 repos) but the instruction says "筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。" So we only consider Trending list, not the search results? It says "从以上数据中筛选出与 AI/ML 明确相关的项目". Could include both Trending and search results? But then says "对于 Trending 榜单中的非 AI 项目直接略去". So we can include projects from both Trending and search results? The search results are separate list of 79 repos, many are AI related. The instruction ambiguous: It says "以下是 2026-08-14 的 GitHub AI 相关热门仓库数据，请进行 AI 相关性筛选、分类和趋势分析。" Then provides Trending list and AI 主题搜索 results. So we should consider both lists for filtering and classification. But then says "对于 Trending 榜单中的非 AI 项目直接略去。" So for Trending, we just ignore non-AI; for search results, we probably also filter but they are already AI topics? They have topics like rag, vector-db, ml, ai-agent etc. So we can include them as well.

But the final report likely should include projects from both sources? The instruction: "请生成一份结构清晰的《AI 开源趋势日报》，要求：第一步（过滤） — 从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。" So we need to filter overall data (both Trending and Search) and ignore non-AI. Then proceed to classification and output.

Thus we need to compile a list of AI related projects from both Trending and Search, then classify them.

But the report sections: "各维度热门项目" — list 3~8 per dimension. Should we include both from Trending and Search? Probably we should pick representative projects from the filtered list, maybe the most starred ones. Use the data we have: For each project we have stars total and today delta (when provided). For search results, stars are given only total (some have ~152k etc). For Trending, we have stars total? Not given; only today delta. We can assume stars total is not provided, but we can still include "⭐0 (+X today)" meaning total is 0? Actually they show "⭐0 (+4475 today)" meaning it's new with 0 total stars? Probably it's a new repo with 0 previous stars, but today gained X. So we can use that.

Thus we need to pick projects with high stars and today delta. For each dimension, list 3-8 projects.

Let's compile filtered projects:

From Trending (AI related):

1. semantica-agi/semantica (Python) ⭐0 (+713 today) - Graph-Native Infrastructure for Context and Accountable AI Systems. Likely "AI 基础工具" or "RAG/知识库"? Could be "AI 基础工具".

2. anthropics/skills (Python) ⭐0 (+312 today) - Public repository for Agent Skills. Category: AI 智能体/工作流.

3. cactus-compute/needle (Python) ⭐0 (+769 today) - 14MB foundation model for tiny devices. Category: 大模型/训练.

4. altic-dev/FluidVoice (Swift) ⭐0 (+76 today) - macOS dictation app with AI model. Category: AI 应用.

5. unslothai/unsloth (Python) ⭐0 (+328 today) - Local UI to run and train LLMs and diffusion models, including many models. Category: 大模型/训练.

6. macro-inc/macro (Rust) ⭐0 (+1239 today) - Unified workspace for teams with shared AI memory. Category: AI 智能体/工作流.

7. NVIDIA-NeMo/Switchyard (Rust) ⭐0 (+408 today) - LLM routing across models and providers. Category: AI 智能体/工作流 (or AI 基础工具). Could be "AI 智能体/工作流".

8. holaboss-ai/holaOS (TypeScript) ⭐0 (+241 today) - All in One AI agent workspace. Category: AI 智能体/工作流.

9. kepano/obsidian-skills - Agent skills for Obsidian. Category: AI 智能体/工作流.

10. Lightricks/LTX-2 (Python) ⭐0 (+205 today) - Official Python inference and LoRA trainer for LTX-2 model. Category: 大模型/训练.

11. lightningpixel/modly (TypeScript) ⭐0 (+118 today) - Desktop app to generate 3D models from images using local AI. Category: AI 应用.

12. infiniflow/ragflow (Go) ⭐0 (+465 today) - RAG engine with Agent capabilities. Category: RAG/知识库.

13. maybe others: but also "semantica-agi/semantica" etc.

Also "cactus-compute/needle" is a foundation model; "unslothai/unsloth" includes UI for training; "macro-inc/macro" includes AI memory; "NVIDIA-NeMo/Switchyard" is routing; "holaboss-ai/holaOS" is AI agent workspace.

Now from Search results (AI 主题搜索), we have many projects. We need to filter them for AI/ML related and include them in classification. But the instruction: "各维度热门项目 — 每个维度列出 3~8 个代表项目". It likely expects to list projects from the filtered set (including both trending and search). But we may want to choose the most prominent ones (by stars). So we can include from search results: langgenius/dify, open-webui/open-webui, langchain-ai/langchain, Shubhamsaboo/awesome-llm-apps, Graphify-Labs/graphify, thedotmack/claude-mem, infiniflow/ragflow (already in trending), datawhalechina/hello-agents, headroomlabs-ai/headroom, Mintplex-Labs/anything-llm, mem0ai/mem0, FlowiseAI/Flowise, run-llama/llama_index, etc. Also vector-db projects: milvus.io/milvus, meilisearch/meilisearch, VectifyAI/PageIndex, qdrant/qdrant, topoteretes/cognee, NirDiamant/RAG_Techniques, weaviate/weaviate, etc. Also other categories: ml models: tensorflow, etc.

But we need to prioritize categories: AI 基础工具, AI 智能体/工作流, AI 应用, 大模型/训练, RAG/知识库.

Thus we can pick representative projects:

- AI 基础工具: langchain-ai/langchain, huggingface/transformers, pytorch/pytorch, vllm? Not in list but maybe "lancedb/lancedb" is vector DB but also tool. But we can include "langchain", "huggingface/transformers", "pytorch/pytorch"? Those are frameworks, but maybe too broad. But they are ML frameworks, so yes.

But the filtered list includes many large projects with high stars: huggingface/transformers (164k stars), tensorflow (197k), pytorch (102k), etc. Those are definitely AI/ML foundational. However they are not in trending list but in search results. They are definitely AI related. So we can include them in "AI 基础工具". Also "unslothai/unsloth" is a UI for running/training models, but not as high stars.

But the instruction: "从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等）". So we can include any AI-related projects from both lists. So we can include huggingface, tensorflow, pytorch, etc.

But then "各维度热门项目 — 每个维度列出 3~8 个代表项目". So we need to list 3-8 per dimension. We can choose the most popular ones (by stars). So for AI 基础工具, we could list: huggingface/transformers, pytorch/pytorch, tensorflow/tensorflow, maybe "lancedb/lancedb"? Actually that's vector DB, belongs to RAG/知识库. So AI 基础工具 maybe: huggingface/transformers, pytorch/pytorch, tensorflow/tensorflow, maybe "langchain-ai/langchain" (though it's more agent framework). But we can still include.

But we must attach GitHub link and stars data. For huggingface/transformers, stars total 164,079, but today delta not given; we can just show "⭐164,079". For pytorch, stars 102,359. For tensorflow, stars 197,006.

But the report maybe expects to include only projects from the filtered list, not all massive ones? The instruction didn't limit to only trending; it said "从以上数据中筛选出与 AI/ML 明确相关的项目". So we can include any from the provided data. So we can include those massive ones.

But the report's "今日速览" should summarize top AI open source trends today. So we can mention that major frameworks are still dominant, but new vector DB and agent frameworks are rising.

Thus we can produce a report with sections:

- 第一步（过滤） results: list of AI related projects from trending (maybe 12 items) and from search (maybe 20 items). But we don't need to output the filtered list explicitly; we just need to produce the final report.

Thus we need to produce final report with:

1. 今日速览 — 3~5 句概括.

2. 各维度热门项目 — each dimension list 3-8 projects, each with link, stars (total + today delta if known), one-sentence description.

We need to decide which projects to include for each dimension.

Let's pick:

**AI 基础工具** (frameworks, SDKs, inference engines, dev tools, CLI)

- huggingface/transformers [Python] ⭐164,079 (no today delta) - The model-definition framework for state-of-the-art ML models.
- pytorch/pytorch [Python] ⭐102,359 (no today delta) - Tensors and dynamic neural networks with GPU acceleration.
- tensorflow/tensorflow [C++] ⭐197,006 (no today delta) - Open source ML framework for everyone.
- langchain-ai/langchain [Python] ⭐144,187 [topic:rag] - The agent engineering platform.
- unslothai/unsloth [Python] ⭐0 (+328 today) - Local UI to run and train LLMs and diffusion models, including many models.
- maybe "NVIDIA-NeMo/Switchyard" but that's more routing; but we can include "vllm"? Not in list. Maybe "lancedb/lancedb" is vector DB, not base tool.

But we need to keep within 3-8 items. Let's pick 5.

**AI 智能体/工作流**

- holaboss-ai/holaOS [TypeScript] ⭐0 (+241 today) - Open-source All in One AI agent workspace.
- anthropics/skills [Python] ⭐0 (+312 today) - Public repository for Agent Skills.
- macro-inc/macro [Rust] ⭐0 (+1239 today) - Unified workspace for teams with shared AI memory.
- NVIDIA-NeMo/Switchyard [Rust] ⭐0 (+408 today) - LLM routing across models and providers.
- kepano/obsidian-skills - Agent skills for Obsidian.
- maybe "shareAI-lab/learn-claude-code" but that's tutorial.

But we need 3-8 items; we can list 5.

**AI 应用**

- altic-dev/FluidVoice [Swift] ⭐0 (+76 today) - macOS dictation app with on-device STT and custom AI enhancement.
- lightningpixel/modly [TypeScript] ⭐0 (+118 today) - Desktop app to generate 3D models from images using local AI.
- Lightricks/LTX-2 [Python] ⭐0 (+205 today) - Official Python inference and LoRA trainer for LTX-2 audio–video generative model.
- maybe "firecrawl/firecrawl" is web API; but that's more tool. Could include "browser-use/browser-use" but that's not in trending. But we can include "ZhuLinsen/daily_stock_analysis" but that's AI agent for stock; maybe not.

But we need 3-8 items; we can list 4.

**大模型/训练**

- cactus-compute/needle [Python] ⭐0 (+769 today) - 14MB foundation model for tiny devices.
- unslothai/unsloth [Python] ⭐0 (+328 today) - Local UI to run and train LLMs and diffusion models, including many models.
- Lightricks/LTX-2 [Python] ⭐0 (+205 today) - Official Python inference and LoRA trainer for LTX-2 model.
- maybe "semantica-agi/semantica" is more infrastructure; but we can include "cactus-compute/needle" as foundation model; also "semantica-agi/semantica" maybe not training.

But we need 3-8 items; we can list 3.

**RAG/知识库**

- infiniflow/ragflow [Go] ⭐0 (+465 today) - RAGFlow is a leading open-source RAG engine with Agent capabilities.
- qdrant/qdrant [Rust] ⭐33,967 [topic:vector-db] - High-performance vector database.
- milvus-io/milvus [Go] ⭐45,628 [topic:vector-db] - High-performance vector database.
- weaviate/weaviate [Go] ⭐16,728 [topic:vector-db] - Vector database with hybrid search.
- maybe "meilisearch/meilisearch" [Rust] ⭐58,959 [topic:vector-db] - Hybrid search engine.

But we need 3-8 items; we can list 5.

Now we need to produce the report sections.

**第一步（过滤）**: Not required to output explicit filtered list, just part of process. But we can mention that we filtered out non-AI projects.

**第二步（分类）**: Already done.

**第三步（输出报告）**: Contains sections:

1. 今日速览 — 3~5 句话概括今日 AI 开源领域最值得关注的动向.

2. 各维度热门项目 — each dimension list 3-8 projects with link, stars, one-sentence description.

3. 趋势信号分析 — 200~300字, summarizing.

4. 社区关注热点 — bullet list 3-5 items with brief reasons.

We must ensure Chinese language, professional concise, each project must have GitHub link.

We need to include stars data: total + today delta if available. For projects without today delta, we can just show total stars. For those with delta, show "⭐0 (+X today)" or "⭐{total} (+X today)". For those with total stars, we can show "⭐164,073" etc.

Make sure to attach link.

Now craft the report.

First, 今日速览: maybe 4 sentences:

- 今日 AI 开源榜单显示，LLM 路由、微型模型和本地推理工具爆发式增长， especially Switchyard、Needle、Macro 等新项目今日星增超千。
- 同时，向量数据库和 RAG 引擎继续领跑社区关注，Milvus、Qdrant、RagFlow 等项目保持高活跃。
- 大模型框架如 Hugging Face Transformers、PyTorch 仍保持统治地位，而 Agent 框架和本地 UI 工具（Unsloth、FluidVoice）也迎来显著增长。
- 总的来说，社区正从模型训练转向模型部署、知识检索和多智能体协作的综合工作流。

Now 各维度热门项目:

We'll list each dimension with bullet points (or numbered) with project name linking, stars, and one-sentence description.

Make sure to include link in markdown format: [项目名](URL)

Now dimension headings with emoji.

Let's craft.

**AI 基础工具** (3-8 items)

Pick 5:

- [huggingface/transformers](https://github.com/huggingface/transformers) [Python] ⭐164,079 – 世界领先的模型定义框架，支持文本、视觉、音频等多模态模型。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) [Python] ⭐102,359 – 基于张量的动态计算图框架，提供强大的 GPU 加速和丰富的生态。
- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) [C++] ⭐197,006 – Google 开源的端到端机器学习平台，覆盖部署从服务器到移动设备的全场景。
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) [Python] ⭐144,187 – 面向LLM应用的模块化Agent框架，简化工具调用与记忆管理。
- [unslothai/unsloth](https://github.com/unslothai/unsloth) [Python] ⭐0 (+328 today) – 本地 UI，可运行并微调多个主流LLM和扩散模型，支持多种推理后端。

Now **AI 智能体/工作流** (3-8 items)

Pick 5:

- [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) [TypeScript] ⭐0 (+241 today) – 集成多个LLM的全能 AI 代理工作台，支持本地模型和云服务。
- [anthropics/skills](https://github.com/anthropics/skills) [Python] ⭐0 (+312 today) – 面向 Claude Code 等代理的技能库，提供可复用的功能模块。
- [macro-inc/macro](https://github.com/macro-inc/macro) [Rust] ⭐0 (+1239 today) – 统一工作区，提供共享 AI 记忆和任务调度，提升团队协作效率。
- [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) [Rust] ⭐0 (+408 today) – LLM 流量路由与切换框架，实现模型选择、benchmark 与成本优化。
- [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) – Agent 技能插件，让 Obsidian 具备调用外部工具和数据的能力。

Now **AI 应用** (3-8 items)

Pick 4:

- [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) [Swift] ⭐0 (+76 today) – macOS 上最快的本地语音转文字 app，使用自训练的 AI 增强模型。
- [lightningpixel/modly](https://github.com/lightningpixel/modly) [TypeScript] ⭐0 (+118 today) – 桌面应用，利用本地 AI 将图像转为 3D 模型，支持 GPU 加速。
- [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) [Python] ⭐0 (+205 today) – 提供 LTX-2 音视频生成模型的推理与 LoRA 微调工具包。
- [cactus-compute/needle](https://github.com/cactus-compute/needle) [Python] ⭐0 (+769 today) – 14MB 的超轻量基础模型，专为移动设备、可穿戴和嵌入式场景设计。

Now **大模型/训练** (3-8 items)

Pick 3:

- [cactus-compute/needle](https://github.com/cactus-compute/needle) [Python] ⭐0 (+769 today) – 超小 footprint 的基础模型，适用于边缘设备的实时推理。
- [unslothai/unsloth](https://github.com/unslothai/unsloth) [Python] ⭐0 (+328 today) – 本地 UI, 支持多模型

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*