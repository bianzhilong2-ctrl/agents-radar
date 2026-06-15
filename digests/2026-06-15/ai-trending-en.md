# AI Open Source Trends 2026-06-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-15 02:48 UTC

---

# AI Open Source Trends Report — 2026-06-15

---

## 1. Today's Highlights

**NVIDIA's SkillSpector** erupted onto the trending list with **+964 stars today**, signaling intense community focus on **AI agent security**—a previously under-invested layer now surfacing as critical for production deployments. **Kronos** (+244★) and **aisuite** (+291★) highlight dual momentum in **domain-specific foundation models** (finance) and **provider-agnostic inference abstraction**, respectively. Vector database innovation continues accelerating: **LEANN** (97% storage savings) and **zvec** (in-process, C++) push efficiency boundaries for on-device RAG. The trending list's lone security tool (SkillSpector) and two new financial AI projects suggest **verticalization and hardening** are the dominant narratives this week.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 174,176 / — | De facto standard for local LLM execution; new model support (Kimi-K2.6, GLM-5.1) keeps it central. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 82,863 / — | High-throughput inference engine; PagedAttention architecture now baseline for production serving. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,589 / — | Universal model hub & framework; adds new architectures weekly (vision, audio, multimodal). |
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | — / **+291** | Unified Python SDK across OpenAI, Anthropic, Google, Ollama, etc.—reduces vendor lock-in friction. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 132,819 / — | Scalable web scraping → structured data pipeline purpose-built for RAG/agent ingestion. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 98,840 / — | Headless browser automation exposing DOM to LLMs; key for agentic web tasks. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,617 / — | Rust-native LLM app framework; type-safe, composable, zero-cost abstractions gaining traction. |

### 🤖 AI Agents / Workflows
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 193,607 / — | Self-evolving agent with persistent memory; "grows with you" narrative resonates strongly. |
| [langgenius/dify](https://github.com/langgenius/dify) | 145,220 / — | Production-grade low-code platform for agentic workflows; visual builder + backend APIs. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 139,294 / — | Foundational agent engineering toolkit; LCEL + LangGraph now standard for complex graphs. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 82,730 / — | Fuses deep RAG with agent loops; handles unstructured enterprise data at scale. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 77,079 / — | AI software engineer agent; solves full repos, runs tests, iterates—benchmark leader. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 86,193 / — | Multi-agent financial trading (analyst, researcher, trader roles); vertical agent blueprint. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 215,561 / — | Agent harness optimizer: skills, instincts, memory, security—meta-layer for Claude Code et al. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 58,565 / — | Universal memory layer; plugs into any agent framework for cross-session persistence. |

### 📦 AI Applications
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | — / **+244** | Foundation model for financial market "language"; timestamps + tickers → forecasting/generation. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 47,332 / — | All-in-one desktop: chat, autonomous agents, 300+ assistants, multi-LLM routing. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 27,559 / — | Document → editable .pptx (shapes, animations, speaker audio); not slide images—real PPTX. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 53,746 / — | End-to-end AI job search: 14 skill modes, PDF gen, batch processing, Go dashboard. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 42,541 / — | LLM-driven A/H/US stock analysis: multi-source data + news + dashboard + push, zero API cost. |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 69,146 / — | Professional financial terminal for quants/agents; unified data layer + copilot. |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | — / **+964** | **Today's #1 AI trend.** Security scanner for agent skills—detects vulns, malicious patterns, supply-chain risks. |

### 🧠 LLMs / Training
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 100,758 / — | Dominant training framework; 2.5+ adds compile, flex attention, distributed improvements. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 195,658 / — | Enterprise production path; TFX, Lite, JS ecosystems remain vast. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,084 / — | Comprehensive LLM eval platform: 100+ datasets, multi-model, leaderboard automation. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,278 / — | Hands-on course: build tiny vLLM + Qwen on Apple Silicon—systems engineering focus. |
| [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) | 628 / — | Curated resources on **on-policy distillation**—emerging technique for efficient alignment. |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) | 598 / — | Machine unlearning for LLMs—critical for compliance, copyright, safety. |

### 🔍 RAG / Knowledge
| Project | Stars (Total / Today) | Why It Matters |
|---------|----------------------|----------------|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 141,529 / — | Polished self-hosted ChatGPT UI; Ollama/OpenAI compatible, RAG, auth, pipelines. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 82,730 / — | Enterprise RAG engine: deep document understanding + agentic retrieval + citation. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 58,097 / — | Hybrid search (vector + BM25) with typo tolerance; deploys in minutes, scales horizontally. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,777 / — | Cloud-native vector DB; GPU indexing, multi-tenancy, tiered storage—production standard. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 32,275 / — | Rust-based, filterable vector search; payload indexing, quantization, cloud offering. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 11,923 / — | **MLsys'26 paper.** 97% storage reduction via learned indexes; enables on-device RAG. |
| [alibaba/zvec](https://github.com/alibaba/zvec) | 10,017 / — | In-process C++ vector DB; zero-copy, SIMD-accelerated, <1ms latency—edge/embedded target. |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 27,946 / — | Living notebook encyclopedia of advanced RAG patterns (HyDE, GraphRAG, Corrective, etc.). |

---

## 3. Trend Signal Analysis (≈250 words)

Three convergent signals define today's landscape. **First, agent security has arrived as a first-class concern.** NVIDIA's SkillSpector rocketing to +964 stars in a single day—surpassing every other AI project on the trending list—reveals a pent-up demand for automated skill/skill vulnerability scanning. As agents gain tool-use, code execution, and external API access, the attack surface expands dramatically; SkillSpector's focus on malicious patterns, prompt injection, and supply-chain risks in skill definitions addresses a gap that framework-level guardrails cannot.

**Second, vertical foundation models are moving from research to reusable artifacts.** Kronos (financial markets, +244★) and the earlier BloombergGPT-style efforts signal a maturation: instead of prompting general LLMs with domain context, teams are releasing **domain-native tokenizers, architectures, and pre-training corpora** as open weights. This lowers the barrier for fintech, legal, and scientific agents to achieve specialist performance without massive compute.

**Third, the RAG infrastructure layer is splitting into "cloud-scale" and "local-first" extremes.** Milvus, Qdrant, and Meilisearch dominate the distributed, multi-tenant tier; simultaneously, LEANN (97% compression, MLsys'26) and zvec (in-process, C++, SIMD) push **on-device RAG** for privacy, latency, and cost. This bifurcation mirrors the LLM inference split (vLLM vs. Ollama/llama.cpp) and suggests the next wave of innovation will be **hybrid architectures** that route retrieval dynamically between local and remote indexes based on sensitivity and latency budgets.

Together, these trends indicate a shift from **"make it work"** to **"make it safe, specialized, and deployable anywhere."**

---

## 4. Community Hot Spots (Developer Focus)

- **[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector)** — **Immediate action item:** Integrate skill scanning into CI/CD for any agent framework (LangGraph, AutoGPT, OpenHands). Early adopters shape the rule set.
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — **Watch the weight release & tokenizer.** If open weights drop, fintech agents can swap generic LLMs for a market-native backbone; benchmark against GPT-4o on earnings-call QA.
- **[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** / **[alibaba/zvec](https://github.com/alibaba/zvec)** — **Prototype on-device RAG** this week. LEANN's Python bindings + zvec's C++ core cover mobile/edge and serverless; test 97% storage claim on your corpus.
- **[andrewyng/aisuite](https://github.com/andrewyng/aisuite)** — **Adopt as provider abstraction layer** now. Switching between OpenAI, Anthropic, Ollama, Gemini via one-line config changes eliminates vendor lock-in during rapid model iteration.
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — **Audit your agent harness.** ECC's "instincts + memory + security" meta-layer wraps Claude Code, Codex, Cursor—plug it in to cut token costs (caveman-style) and add persistent cross-session memory.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*