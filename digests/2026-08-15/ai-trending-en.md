# AI Open Source Trends 2026-08-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-15 00:41 UTC

---

We need to produce a structured AI Open Source Trends Report in English.

Step 1 filter: select from the combined trending list and topic search results. Exclude non-AI repos (e.g., diagram-design (html), holehe Python maybe security, not AI; need to filter for AI relevance.

We have two main datasets: trending list (17 repos) and topic search results (~79). Need to filter for AI relevance.

We should likely include projects related to AI agents, LLMs, RAG, vector DB, training, inference, agent frameworks, etc.

From trending list:

- cactus-compute/needle [Python] 14MB foundation model for tiny devices. This is AI model.

- megadose/holehe [Python] looks security scanning; not AI.

- macro-inc/macro [Rust] workspace for teams with shared AI memory; AI agent workspace maybe.

- smicallef/spiderfoot [Python] OSINT; not directly AI.

- citrolabs/ego-lite [JS] fastest browser for AI agents; AI agents.

- holaboss-ai/holaOS [TS] open-source all in one AI agent workspace; AI.

- github/spec-kit [Python] toolkit for Spec-Driven Development; maybe not AI.

- lightningpixel/modly [TS] Desktop app to generate 3D models using local AI; AI.

- infiniflow/ragflow [Go] leading open-source RAG engine; definitely AI.

- cursor/plugins [TS] plugin spec and official plugins; maybe not AI.

- deepseek-ai/awesome-deepseek-agent; topics not provided; but likely AI.

- semantica-agi/semantica [Python] Graph-Native Infrastructure for Context and Accountable AI Systems; AI.

- rustdesk/rustdesk [Rust] remote desktop; not AI.

- OpenCut-app/OpenCut TypeScript; not AI.

- unslothai/unsloth [Python] local UI to run/train LLMs; AI.

- ToolJet/ToolJet JavaScript; not AI (enterprise app generation platform maybe AI? but tool not directly AI, but includes AI? but maybe not primary).

From topic search results, we need to select clearly AI relevant:

- NousResearch/hermes-agent, shareAI-lab/learn-claude-code, etc. Many are AI agent frameworks etc. Must include.

We should build categories: AI Infrastructure, AI Agents/Workflows, AI Applications, LLMs/Training, RAG/Knowledge.

List representative 3-8 per category.

Need to include stars data (total + today's new, if available). For trending list we have stars counts but only "⭐0 (+...today)" meaning they have 0 total stars? Probably it's a placeholder, but we can still use the trending count for today. For topic search we have star counts like ⭐230,643 etc.

We'll provide links.

Step 3 sections: Today's Highlights (3-5 sentences), Top Projects by Category (list each with link, stars total and today's new if known, one-sentence description), Trend Signal Analysis (200-300 words), Community Hot Spots (bulleted list of 3-5 specific projects/directions).

Make sure professional tone, concise, include GitHub links for each project.

We need to output structured report.

Now compile filtered projects.

From trending:

AI-related:

- cactus-compute/needle (Python) AI foundation model for tiny devices. Stars: 0 (+662 today). (AI Infrastructure maybe also Application? It's a model.)

- macro-inc/macro (Rust) unified workspace for teams with shared AI memory. Might be AI Agents/Workflows or Infrastructure.

- citrolabs/ego-lite (JS) fastest browser for AI agents; Agent Infrastructure.

- holaboss-ai/holaOS (TS) open-source all in one AI agent workspace; Agent.

- lightningpixel/modly (TS) Desktop app to generate 3D models from images or prompt using local AI. Could be AI Application (3D generation). Probably Application.

- infiniflow/ragflow (Go) leading open-source RAG engine with agent capabilities. That's RAG/Knowledge category.

- unslothai/unsloth (Python) Local UI to run and train LLMs and diffusion models; LLMs/Training infrastructure.

- tooljet? maybe not AI; exclude.

- smicallef/spiderfoot not AI.

- etc.

Now topic search results: many AI agent projects with high stars.

Select top ones for categories.

Category AI Agents/Workflows: include deepseek-ai/awesome-deepseek-agent? Actually that's a list; but we can include:

- NousResearch/hermes-agent (topic:ai-agent) ⭐230,643

- shareAI-lab/learn-claude-code (topic:ai-agent) ⭐74,244

- Panniantong/Agent-Reach (topic:ai-agent) ⭐71,741

- zhayujie/CowAgent (topic:ai-agent) ⭐46,511

- hugohe3/ppt-master (topic:ai-agent?) Actually listed under topic:ai-agent? It says [topic:ai-agent] yes.

- semantica-agi/semantica (topic not indicated but likely AI? It mentions "Graph-Native Infrastructure for Context and Accountable AI Systems" maybe belongs to RAG? But could be AI Agents.

- infiniflow/ragflow also appears in topic list duplicate; but categorize as RAG.

- deepseek-ai/awesome-deepseek-agent not categorized under topic but likely AI.

- etc.

Category LLMs/Training: huggingface/transformers, pytorch/pytorch, etc. But these may not be trending today (stars count maybe not in trending list). However they appear in topic search results but not necessarily trending today; but they are AI relevant. However the instruction: "Step 1 (Filter): From the above data, select projects clearly related to AI/ML (exclude unrelated general tools, frontend frameworks, games, etc.). Skip non-AI trending repos." So we can include them even if not trending? The data includes both trending list and topic search results; we can include from both sources if AI relevant. So we can include huggingface/transformers etc.

But we need to list top projects by category, 3-8 each. Should choose representative popular ones.

We'll pick for each category:

AI Infrastructure: unslothai/unsloth, cactus-compute/needle, github/spec-kit? maybe not; also righ? Could include huggingface/transformers (though that's a library). Also langchain-ai/langchain (but that's agent framework maybe). Also infiniflow/ragflow might be infrastructure for RAG. But we have separate RAG category.

Let's define categories precisely:

- 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
Examples: huggingface/transformers, pytorch/pytorch, ollama/ollama, DeepSeek-Reasonix (maybe), r migru? Also unslothai/unsloth.

- 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
Examples: NousResearch/hermes-agent, shareAI-lab/learn-claude-code, Agent-Reach, CowAgent, hugohe3/ppt-master maybe, etc.

- 📦 AI Applications (specific apps, vertical solutions)
Examples: cursor/plugins? maybe not; modly (3D model generation), OpenCut (CapCut alternative) maybe not AI; but maybe ppt-master is an AI application for generating PowerPoint; also CherryHQ/cherry-studio? Not in filtered list; but we can include ppt-master; also unslothai/unsloth UI is more infrastructure; but maybe include tooljet? But exclude.

- 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
Examples: huggingface/transformers, pytorch/pytorch, llama.cpp? Not listed; but we can include Ollama/ollama (inference engine), DeepSeek-Reasonix, etc.

- 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)
Examples: infiniflow/ragflow (also appears in both), milvus-io/milvus, qdrant/qdrant, weaviate/weaviate, vectifyai/pageindex, etc.

Need to pick 3-8 per category.

Ok let's compile filtered list:

From trending list (AI relevant):
1. cactus-compute/needle [Python] ⭐0 (+662 today) – foundation model for tiny devices.
2. macro-inc/macro [Rust] ⭐0 (+436 today) – unified workspace with shared AI memory (Agent/Infrastructure).
3. citrolabs/ego-lite [JavaScript] ⭐0 (+165 today) – fast browser for AI agents.
4. holaboss-ai/holaOS [TypeScript] ⭐0 (+769 today) – all-in-one AI agent workspace.
5. lightpixel/modly [TypeScript] ⭐0 (+579 today) – desktop app to generate 3D models from images/prompt using local AI.
6. infiniflow/ragflow [Go] ⭐0 (+473 today) – leading open-source RAG engine with agent capabilities.
7. unslothai/unsloth [Python] ⭐0 (+501 today) – local UI to run and train LLMs and diffusion models.
8. lightningpixel? Already counted.
9. github/spec-kit maybe not AI.

Also from trending: "lightningpixel/modly" already.

Now from topic search results:

Select top AI projects:

- NousResearch/hermes-agent [Python] ⭐230,643 – The agent that grows with you (AI Agents).
- shareAI-lab/learn-claude-code [Python] ⭐74,244 – Bash is all you need – a nano claude code-like agent harness.
- Panniantong/Agent-Reach [Python] ⭐71,741 – Give your AI agent eyes to see the entire internet.
- zhayujie/CowAgent [Python] ⭐46,511 – Open-source super AI assistant & Agent Harness.
- hugohe3/ppt-master [Python] ⭐46,843 – AI turns documents/topics into native PowerPoint decks.
- semantica-agi/semantica [Python] – Graph-Native Infrastructure for Context and Accountable AI Systems (maybe RAG/Infrastructure).
- infiniflow/ragflow appears again (but already counted).
- CherryHQ/cherry-studio not in filtered? It is listed under topic:ai-agent with 50,478 stars; it's an AI productivity studio. Could be categorized as AI Application? Or Agent? Let's include.
- infinibytes? Not relevant.
- deepseek-ai/awesome-deepseek-agent – not sure but likely a list; maybe not needed.

- huggingface/transformers [Python] ⭐164,084 – model-definition framework for SOTA models.
- pytorch/pytorch [Python] ⭐102,378 – Tensors and dynamic neural networks.
- ollama/ollama [Go] ⭐178,511 – Get up and running with various models.
- firecracker? Not.
- firecrawl/firecrawl [TypeScript] – context API to search/scrape; maybe infrastructure.
- huggingface/transformers is infrastructure.
- langchain-ai/langchain [Python] ⭐144,234 – agent engineering platform.
- browser-use/browser-use [Python] – make websites accessible for AI agents.
- Graphify-Labs/graphify [Python] – turn codebase into knowledge graph (RAG/infrastructure).
- mem0ai/mem0 [Python] – universal memory layer for AI agents (RAG/Knowledge).
- FlowiseAI/Flowise [TypeScript] – build AI agents visually (Agent workflow builder).
- run-llama/llama_index [Python] – leading document agent and OCR platform (RAG).
- etc.

We need to choose representative projects per category with stars.

Now we need to output report sections.

Structure:

1. Today's Highlights – 3-5 sentences.

2. Top Projects by Category – For each category, list 3-8 representative projects with link, stars (total + today's new if available), one-sentence description.

Categories: (a) AI Infrastructure, (b) AI Agents / Workflows, (c) AI Applications, (d) LLMs / Training, (e) RAG / Knowledge.

We can maybe merge some categories if insufficient projects.

We need at least 3-8 per category; might not have that many for some; we can list up to 8 each but can be fewer if not enough.

We need to include stars data: total stars and today's new if available. For many topic search repos, we have total stars; for trending we have "⭐0 (+X today)" which indicates 0 total stars, but we can mention "0 total, +X today". But maybe better to use actual total stars from topic search for those projects.

So for each project we will list: Stars: X ⭐ (Y today) maybe.

We'll need to include GitHub link.

Now Trend Signal Analysis: 200-300 words summarizing explosive attention, new tech stacks, connections to recent LLM releases / industry events.

Community Hot Spots: bullet list 3-5 specific projects or directions with brief reasoning.

Now produce final report with headings.

Make sure professional, concise, English, include links.

Let's craft.

We'll first compile filtered projects list:

AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI):

- huggingface/transformers (Python) ⭐164,084 – Model definition framework for SOTA LLMs across modalities.
- pytorch/pytorch (Python) ⭐102,378 – Popular deep learning framework with strong GPU acceleration.
- ollama/ollama (Go) ⭐178,511 – Simple local server to run dozens of LLMs (Kimi, DeepSeek, etc.) via API.
- langchain-ai/langchain (Python) ⭐144,234 – Agent engineering platform with extensive integrations.
- unslothai/unsloth (Python) ⭐0 (+501 today) – Local UI to run/train LLMs and diffusion models efficiently.
- cactus-compute/needle (Python) ⭐0 (+662 today) – 14MB foundation model for tiny devices (phones, wearables).
- infiniflow/ragflow (Go) ⭐0 (+473 today) – RAG engine with built‑in agent capabilities (also RAG category but can be infrastructure).
- llama_index (run-llama/llama_index) (Python) ⭐51,642 – Document retrieval and indexing library for LLMs.
- GitHub spec-kit maybe not included.
- firecracker? Not relevant.

But we need 3-8 items; we can list 6-7.

AI Agents / Workflows:

- NousResearch/hermes-agent (Python) ⭐230,643 – Grows with you, multi‑model autonomous agent framework.
- shareAI-lab/learn-claude-code (Python) ⭐74,244 – Nano Claude‑Code‑like harness built from scratch for autonomous tasks.
- Panniantong/Agent-Reach (Python) ⭐71,741 – Gives AI agents eyes to browse the whole internet via CLI.
- zhayujie/CowAgent (Python) ⭐46,511 – Super AI assistant and agent harness with memory and self‑evolution.
- hugohe3/ppt-master (Python) ⭐46,843 – AI that creates native PowerPoint decks from documents/topics.
- CherryHQ/cherry-studio (TypeScript) ⭅ 50,478 – AI productivity studio with smart chat, autonomous agents, 300+ assistants.
- infiniflow/ragflow also could be here but already in RAG; but we can include as agent-augmented RAG.
- semantica-agi/semantica (Python) – Graph‑native infrastructure for accountable AI systems; maybe agent infrastructure.

But need to keep to primary category AI Agents / Workflows.

We'll select a set of 5-6.

AI Applications:

- lightningpixel/modly (TypeScript) ⭐0 (+579 today) – Desktop app that generates 3D models from images or prompts using local AI.
- holaboss-ai/holaOS (TypeScript) ⭐0 (+769 today) – All‑in‑one AI agent workspace integrating many services (though could be infrastructure).
- cherry-studio? Actually cherry-studio is in topic list but not filtered? It is AI productivity studio; we can include.
- ppt-master (AI application for PowerPoint generation) – counted above but maybe belongs to AI Applications.

But we need distinct categories; maybe AI Applications includes specific end‑user tools like modly, ppt-master, cherry-studio.

LLMs / Training:

- huggingface/transformers (already in AI Infrastructure but also training) but can list again? Might duplicate; maybe better to allocate to LLMs/Training category: include huggingface/transformers, pytorch/pytorch, ollama/ollama (inference but also training?), deepseek-ai/awesome-deepseek-agent? Not exactly training. Maybe include "deepseek-ai/awesome-deepseek-agent" is a list; not training. Could include "tensorflow/tensorflow" (but not in topic search results?). It appears in topic search results but not necessarily AI relevant? It's ML framework; we can include.

But we already used huggingface/transformers in AI Infrastructure; might be okay to also list under LLMs/Training; but each project can belong to multiple categories; we can list under both? The instruction says primary one; pick primary.

Let's decide primary categories and assign each project to one primary category.

Better to have clear mapping:

- AI Infrastructure: frameworks, SDKs, inference engines, dev tools, CLI that are not end‑user apps. So include huggingface/transformers, pytorch/pytorch, ollama/ollama, langchain, llama_index, unslothai/unsloth, cactus-compute/needle, infiniflow/ragflow (maybe infrastructure), etc.

- AI Agents / Workflows: agent frameworks, harnesses, multi‑agent systems, automation tools. Include hermes-agent, learn-claude-code, Agent-Reach, CowAgent, ppt-master (maybe more knowledge work), cherry-studio.

- AI Applications: specific end‑user apps that solve a domain problem: modly (3D model generation), ppt-master (PowerPoint generation), maybe open‑cut (not AI), but we can include "holaOS" maybe as workspace but that's more infrastructure.

- LLMs / Training: model weights, training frameworks, fine‑tuning tools. Could include "tensorflow/tensorflow", "pytorch/pytorch", "huggingface/transformers" (but already in Infrastructure) maybe "ollama/ollama" also serves as inference; but we could allocate "tensorflow/tensorflow" and "pytorch/pytorch" here.

- RAG / Knowledge: vector DBs, retrieval pipelines, knowledge management. Include infiniflow/ragflow (also infrastructure), milvus-io/milvus, qdrant/qdrant, weaviate/weaviate, vectifyai/pageindex, mem0ai/mem0, llama_index (also retrieval), etc.

But to avoid duplication we need to assign each project a primary category.

Let's pick representatives:

Category AI Infrastructure (frameworks/SDKs/CLI):
- huggingface/transformers (Python) ⭐164,084
- pytorch/pytorch (Python) ⭐102,378
- ollama/ollama (Go) ⭐178,511
- langchain-ai/langchain (Python) ⭐144,234
- cactus-compute/needle (Python) ⭐0 (+662 today)
- infiniflow/ragflow (Go) ⭐0 (+473 today) – maybe primary RAG but also infrastructure; choose RAG category later.
- llama_index (run-llama/llama_index) (Python) ⭐51,642 – retrieval library.
- ollama/ollama also can be considered infrastructure.

Maybe better to limit to 5-6.

Category AI Agents / Workflows:
- NousResearch/hermes-agent (Python) ⭐230,643
- shareAI-lab/learn-claude-code (Python) ⭐74,244
- Panniantong/Agent-Reach (Python) ⭐71,741
- zhayujie/CowAgent (Python) ⭐46,511
- CherryHQ/cherry-studio (TypeScript) ⭐50,478
- hugohe3/ppt-master (Python) ⭐46,843 (maybe belongs to Application but can be Agent for content creation)
- ai21? Not.

Category AI Applications:
- lightningpixel/modly (TypeScript) ⭐0 (+579 today)
- holaboss-ai/holaOS (TypeScript) ⭐0 (+769 today) – all‑in‑one AI agent workspace (maybe infrastructure)
- cherry-studio maybe already counted.
- ppt-master maybe considered Application.

But we need distinct categories; perhaps we can merge applications into Agents? The categories given: AI Applications (specific apps, vertical solutions). So we can list modly, ppt-master, and maybe "holoS" as workspace but that's more agent.

Category LLMs / Training:
- tensorflow/tensorflow (C++) ⭐197,024
- pytorch/pytorch (Python) ⭐102,378
- huggingface/transformers maybe here but we already used; could include "deepseek-ai/awesome-deepseek-agent"? Not training.

But we can list "tensorflow/tensorflow", "pytorch/pytorch", "ollama/ollama" maybe training? Actually Ollama is inference; but we can include "deepseek-ai/awesome-deepseek-agent"? Not.

Better to include "tensorflow/tensorflow", "pytorch/pytorch", "huggingface/transformers" maybe not; but we can still include.

Category RAG / Knowledge:
- infiniflow/ragflow (Go) ⭐0 (+473 today)
- milvus-io/milvus (Go) ⭐45,639
- qdrant/qdrant (Rust) ⭐33,981
- weaviate/weaviate (Go) ⭐16,729
- vectifyai/PageIndex (Python) ⭐35,184
- mem0ai/mem0 (Python) ⭐63,275
- llama_index maybe also but already used.

Now produce report.

Need to include stars data for each project.

For trending projects we have only "⭐0 (+X today)", but for many topic search we have total stars.

We need to provide stars data for each listed project. For trending ones we can note "0 total stars, +X today".

Now craft the report.

Let's draft sections.

**Today's Highlights** (3-5 sentences):
- The community is rallying around lightweight AI agents and RAG engines that can run locally on edge devices, with several projects releasing new CLI tools and browser‑automation frameworks.
- Open‑source RAG platforms like RAGFlow are gaining massive traction, crossing 400 daily stars as developers seek production‑ready context layers.
- AI‑centric workspaces (e.g., HolaOS, Cherry Studio) are consolidating chat, CRM, and task management into a single AI‑augmented environment.
- There is a surge of interest in “tiny” foundation models for micro‑controllers and wearables, indicating a push to bring LLMs to ultra‑low‑power hardware.
- New agent harnesses that integrate internet‑wide browsing (Agent‑Reach) and persistent memory (t️⃣) are emerging, reflecting a shift toward more autonomous, memory‑rich agents.

**Top Projects by Category**:

We'll list each category with bullet points.

Category 🔧 AI Infrastructure:

- huggingface/transformers (Python) ⭐164,084 – The de‑facto library for building and serving state‑of‑the‑art LLMs across text, vision, and multimodal modalities.
- pytorch/pytorch (Python) ⭐102,378 – Leading deep‑learning framework with dynamic computation graphs and extensive GPU support.
- ollama/ollama (Go) ⭐178,511 – Simple local server that downloads and runs dozens of LLMs (e.g., DeepSeek, Gemma) via a unified API.
- langchain-ai/langchain (Python) ⭐144,234 – Comprehensive agent‑engineering toolkit for chaining LLMs, tools, and memory.
- cactus-compute/needle (Python) ⭐0 (+662 today) – 14 MB foundation model designed for ultra‑small devices such as phones and wearables.

Category 🤖 AI Agents / Workflows:

- NousResearch/hermes-agent (Python) ⭐230,643 – Scalable autonomous agent framework that continuously grows its capability set.
- shareAI-lab/learn-claude-code (Python) ⭐74,244 – Minimalist “bash‑only” harness that mimics Claude‑Code’s agent behavior for rapid prototyping.
- Panniantong/Agent-Reach (Python) ⭐71,741 – Gives agents browser‑level visibility across the entire public web without API fees.
- zhayujie/CowAgent (Python) ⭐46,511 – Super‑assistant harness with self‑evolution, multi‑model support, and one‑line install.
- CherryHQ/cherry-studio (TypeScript) ⭐50,478 – AI productivity studio that bundles smart chat, autonomous agents, and 300+ ready‑made assistants.

Category 📦 AI Applications:

- lightningpixel/modly (TypeScript) ⭐0 (+579 today) – Desktop tool that creates 3D models from images or text prompts using local AI.
- hugohe3/ppt-master (Python) ⭐46,843 – AI that transforms documents or topics into fully‑featured PowerPoint decks with charts and animations.
- holaboss-ai/holaOS (TypeScript) ⭐0 (+769 today) – All‑in‑one AI agent workspace integrating chat, CRM, tasks, and file management.

Category 🧠 LLMs / Training:

- tensorflow/tensorflow (C++) ⭐197,024 – End‑to‑end open‑source ML library for building and deploying a wide range of models.
- pytorch/pytorch (Python) ⭐102,378 – Dominant framework for research and production of deep learning models with strong GPU acceleration.
- deepseek-ai/

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*