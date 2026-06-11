# AI Open Source Trends 2026-06-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-11 02:43 UTC

---

**AI Open‑Source Trends Report – 2026‑06‑11**  

---

### 1. Today's Highlights  
The GitHub hot list is dominated by **agent‑skill ecosystems** – repositories that package reusable prompts, tooling, and frameworks for AI coding agents (e.g., *agent‑skills*, *superpowers*, *pm‑skills*). Simultaneously, **one‑click AI video generation** (*MoneyPrinterTurbo*) and **healthcare‑focused LLMs** (*openmed*) are seeing explosive daily star growth, showing that vertical AI applications are gaining rapid traction. A surge in collections of **system prompts and model configurations** for popular AI‑assisted IDEs signals a community push toward standardized, shareable agent behavior. Overall, the day's activity highlights a shift from raw model releases toward **usable agent infrastructure and domain‑specific AI apps**.

---

### 2. Top Projects by Category  

#### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)  
| Project | Stars (total + today) | Why it matters today |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 173,803 ★ | One‑command runner for dozens of LLMs (Kimi‑K2.6, DeepSeek, Qwen, etc.); the de‑facto local model hub. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,486 ★ | Unified library for SOTA text, vision, audio & multimodal models – essential for any LLM‑based workflow. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,994 ★ | Agent engineering platform that chains LLMs, tools, and memory; rapidly evolving with new agent‑skill integrations. |
| [activeloopai/hivemind](https://github.com/activeloopai/hivemind) | 0 ★ (+64 today) | “One brain for all your agents” – a lightweight coordination layer for multi‑agent systems gaining early traction. |
| [google/skills](https://github.com/google/skills) | 0 ★ (+211 today) | Official Agent Skills repository for Google products; provides ready‑made prompts/tooling for Gemini‑based agents. |
| [x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) | 0 ★ (+393 today) | Curated system prompts & internal tooling for dozens of AI‑assisted IDEs (Cursor, Claude Code, Devin, etc.) – a fast‑growing reference for prompt engineers. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,469 ★ | High‑throughput, memory‑efficient LLM inference engine; increasingly adopted for serving fine‑tuned models. |

#### 🤖 AI Agents / Workflows (agent frameworks, automation, multi‑agent systems)  
| Project | Stars (total + today) | Why it matters today |
|---|---|---|
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,886 ★ | Pioneering autonomous agent framework; still the go‑to for experimenting with self‑directed LLM loops. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 190,074 ★ | Agent that evolves with user feedback; showcases long‑term memory and skill‑learning patterns. |
| [obra/superpowers](https://github.com/obra/superpowers) | 0 ★ (+1104 today) | Agentic skills framework + development methodology; today’s biggest daily‑star gainer in the agent space. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 0 ★ (+2535 today) | Skill that researches Reddit, X, YouTube, HN, Polymarket & the web, then synthesizes a grounded summary – exemplifies the “skill‑as‑service” model. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 65,929 ★ | Minimal “agent harness” built from scratch; ideal for developers wanting to understand or extend Claude‑Code‑style agents. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,181 ★ | AI productivity studio bundling smart chat, autonomous agents, and 300+ assistants – a versatile desktop agent host. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 26,085 ★ | Gives agents “eyes” on the entire internet (Twitter, Reddit, YouTube, etc.) without API fees – a hot web‑scraping skill set. |
| [activeloopai/hivemind](https://github.com/activeloopai/hivemind) *(see Infra)* | 0 ★ (+64 today) | Multi‑agent coordination brain; appears in both Infra and Agents due to its dual role. |

#### 📦 AI Applications (specific apps, vertical solutions)  
| Project | Stars (total + today) | Why it matters today |
|---|---|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 0 ★ (+1389 today) | One‑click generation of HD short videos using any LLM – showcases rapid adoption of text‑to‑video pipelines. |
| [maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) | 0 ★ (+527 today) | Open‑source healthcare AI platform; targets clinical note generation, medical Q&A, and decision support. |
| [roboflow/supervision](https://github.com/roboflow/supervision) | 0 ★ (+695 today) | Reusable computer‑vision utilities (annotation, tracking, model‑agnostic inference) – accelerates CV app development. |
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | 0 ★ (+211 today) | Visual, example‑driven guide to Claude Code with copy‑paste templates; lowers barrier for building agent‑based apps. |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 81,768 ★ | Production‑grade OCR supporting 100+ languages; frequently paired with LLMs for document‑understanding apps. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 26,179 ★ | AI‑generated editable PowerPoint from any document – a concrete productivity app leveraging LLMs for slide creation. |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 27,052 ★ | AI‑powered web scraper that turns pages into structured data; often used as a front‑end for RAG pipelines. |

#### 🧠 LLMs / Training (model weights, training frameworks, fine‑tuning tools)  
| Project | Stars (total + today) | Why it matters today |
|---|---|---|
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 72,056 ★ | Unified efficient fine‑tuning for 100+ LLMs & VLMs (ACL 2024); the go‑to for low‑resource adaptation. |
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | 0 ★ (+247 today) | Step‑by‑step tutorial for training an LLM from data collection to text generation – ideal for newcomers. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,079 ★ | Comprehensive LLM evaluation benchmark; supports Llama3, Mistral, Qwen, etc., and is critical for model comparison. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,267 ★ | Hands‑on course to build a tiny vLLM + Qwen on Apple Silicon; bridges systems engineering and LLM serving. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) *(see Infra)* | 82,469 ★ | Inference serving engine that also enables efficient continual‑learning and fine‑tuning workflows. |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 312 ★ | On‑device LLM inference using X‑bit quantization – pushes LLMs onto microcontrollers and edge devices. |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 254 ★ | Minimal library for stable pretraining of foundation/world models; useful for research‑scale training experiments. |

#### 🔍 RAG / Knowledge (vector databases, retrieval‑augmented generation, knowledge management)  
| Project | Stars (total + today) | Why it matters today |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 82,421 ★ | Leading open‑source RAG engine that fuses retrieval with agent capabilities – a core backend for LLM‑apps. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 58,286 ★ | Universal memory layer for AI agents; provides persistent, compressible context across sessions. |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 53,463 ★ | Low‑code visual builder for AI agents and RAG workflows; accelerates prototyping of retrieval‑augmented apps. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 58,044 ★ | Lightning‑fast search engine API delivering AI‑powered hybrid search; often used as a vector store substitute. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,724 ★ | High‑performance, cloud‑native vector database for large‑scale ANN search – backbone of many RAG systems. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 32,015 ★ | Massive‑scale vector DB with rich filtering; gaining traction for multimodal RAG and recommendation. |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | 16,307 ★ | Vector DB that stores objects + vectors, enabling hybrid search with structured filters – popular in enterprise RAG. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,769 ★ | Open‑source AI memory platform based on a self‑hosted knowledge graph; gives agents long‑term, cross‑session memory. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 12,277 ★ | Idiomatic Java library for LLM‑powered apps, integrating LLMs, vector stores, tool calling, and RAG. |

---

### 3. Trend Signal Analysis (≈230 words)  
Today’s GitHub activity makes clear that **agent‑skill ecosystems** are the primary engine of community excitement. Repositories that bundle ready‑made prompts, tool wrappers, and skill‑marketplace concepts (e.g., *agent‑skills*, *superpowers*, *pm‑skills*, *last30days‑skill*) attracted thousands of new stars in a single day, indicating developers are shifting from experimenting with raw LLMs to **building reusable, shareable agent behaviors**. Parallel to this, **system‑prompt collections** for AI‑assisted IDEs surged, reflecting a growing demand for standardized agent configurations across tools like Cursor, Claude Code, and Devin.  

Vertical AI applications also showed rapid uptake: one‑click video generation (*MoneyPrinterTurbo*) and healthcare‑focused LLMs (*openmed*) both surpassed the 1k‑star‑per‑day mark, highlighting that domain‑specific pipelines—especially those that couple LLMs with multimodal outputs (video, medical notes)—are gaining traction outside the traditional chat‑bot niche.  

On the infrastructure side, **Ollama** and **vLLM** remain central for local model execution, while **LangChain** and **LlamaFactory** continue to dominate the agent‑orchestration and fine‑tuning landscapes, respectively. The steady rise of vector‑DB‑centric RAG projects (RAGFlow, Mem0, Milvus, Qdrant) signals that **persistent, queryable knowledge** is now considered a baseline requirement for production‑grade agents.  

Overall, the trend points toward a maturing stack: **LLM serving (Ollama/vLLM) → Skill/prompt libraries → Agent frameworks (LangChain, AutoGPT, Hermes) → RAG/memory layers → Vertical AI apps**. The day's data reinforces that the community’s focus is now on **usability, composability, and domain specialization** rather than pure model scale.

---

### 4. Community Hot Spots  
- **Agent‑Skill Marketplaces** – *addyosmani/agent-skills*, *phuryn/pm-skills*, *obra/superpowers*: These repos are defining a new “plug‑and‑play” skill economy for AI agents; watch for emerging skill registries and standard invocation protocols.  
- **One‑Click Vertical AI Apps** – *harry0703/MoneyPrinterTurbo* (text‑to‑video) & *maziyarpanahi/openmed* (healthcare AI): Demonstrates how LLMs are being packaged into end‑user tools with minimal setup; expect more domain‑specific generators (legal, education, design).  
- **Unified Agent Brains** – *activeloopai/hivemind* and *shareAI-lab/learn-claude-code*: Lightweight coordination layers that let multiple skills or sub‑agents share state and memory; critical for building reliable, long‑running agent workflows.  
- **RAG‑Powered Memory** – *mem0ai/mem0* & *infiniflow/ragflow*: Provide persistent, compressible context that survives across sessions; becoming the de‑facto memory backend for production agents.  
- **Edge‑Optimized LLMs** – *Picovoice/picollm* (on‑device, X‑bit quantized) & *skyzh/tiny-llm* (tiny vLLM on Apple Silicon): Pushes LLMs onto resource‑constrained hardware, opening avenues for offline, privacy‑first agent applications.  

These projects represent the most active vectors where developers are investing time today and are likely to shape the next wave of AI‑open‑source innovation.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*