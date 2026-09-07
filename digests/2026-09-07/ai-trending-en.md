# AI Open Source Trends 2026-09-07

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-07 01:56 UTC

---

# AI Open Source Trends Report — 2026-09-07

---

## Step 1 & 2: Filtered & Categorized

Non-AI trending items excluded: `llvm/llvm-project`, `Stremio/stremio-web`, `BraveOPotato/FckSignups`.

---

## 1. Today's Highlights

The GitHub AI ecosystem today is dominated by an explosive surge in **agent skill/harness infrastructure**, not in raw LLMs. More than half of today's trending slots are occupied by repositories that package reusable "skills," "harnesses," or "memory layers" for Claude Code, Codex, Hermes, OpenCode, and Cursor — indicating the community has decisively moved past the "build an agent" phase into the "monetize and operationalize the agent stack" phase. Notably, **NousResearch/hermes-agent** (+520 today, 242k total) and **magnitudedev/magnitude** (+604) are positioning themselves as the default local-inference and self-evolving-agent backbones. Meanwhile, vectorless RAG (PageIndex, cognee) and on-device vector databases (zvec, LEANN) are quietly outperforming traditional RAG stacks, signaling a shift toward cheaper, more deterministic retrieval.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference, Dev Tools, CLI)

| Project | Stars (today) | Why it matters |
|---|---|---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 242,576 (+520) | Self-evolving agent runtime with persistent memory, emerging as a default local agent stack. |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | ⭐0 (+551) | Open-source coding agent CLI positioning itself against Claude Code / Cursor. |
| [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | ⭐0 (+604) | Universal local inference server plugging into every major agent runtime — strong ecosystem play. |
| [ollama/ollama](https://github.com/ollama/ollama) | 180,318 | The de facto local LLM runner, now supporting Kimi-K2.6, GLM-5.2, DeepSeek, and gpt-oss. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 164,914 | Still the canonical model-definition framework for text/vision/audio/multimodal. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 251,425 (+1,485) | "Agent harness performance optimization" — the day's biggest mover; sells skills/instincts/memory bundles. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | 129,473 (+1,539) | Viral agent-style prompt library telling LLMs to "be a lazy senior dev." |
| [ruflo/ruflo](https://github.com/ruvnet/ruflo) | ⭐0 (+276) | Multi-agent swarm harness, self-learning, RAG-native — Claude/Hermes/Codex interop. |

### 🤖 AI Agents / Workflows

| Project | Stars (today) | Why it matters |
|---|---|---|
| [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) | 77,310 | The most popular Chinese-language "build agents from scratch" tutorial — strong educational pull. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 47,792 | Ultra-lightweight self-hosted agent framework in Python; MCP + memory built-in. |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 41,141 | The de facto standard for stateful, resumable multi-agent graphs. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 78,457 | Gives agents zero-API-cost "eyes" across Twitter/Reddit/YouTube/Bilibili/Xiaohongshu. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 37,216 | Frontend framework for embedding agents + Generative UI in React/Angular/Slack. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | ⭐0 (+2,207) | The day's #2 star gainer — a curated skill catalog for engineers using coding agents. |
| [humanlayer/skills](https://github.com/humanlayer/skills) | ⭐0 (+451) | High-signal curated agent skills, gaining traction in the Claude Code ecosystem. |
| [The-Swarm-Corporation/AutoHedge](https://github.com/The-Swarm-Corporation/AutoHedge) | ⭐0 (+142) | Swarm-intelligence hedge fund built on autonomous agents — vertical play. |

### 📦 AI Applications (Vertical Solutions)

| Project | Stars (today) | Why it matters |
|---|---|---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 151,143 | The standard self-hosted chat UI for Ollama/OpenAI — still the most-starred AI app. |
| [langgenius/dify](https://github.com/langgenius/dify) | 154,649 | Visual agentic workflow + RAG builder for non-engineers; enterprise traction. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 65,699 | "Local-first agent experience" — privacy-first Docker deploy. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 51,523 | Unified AI productivity studio with 300+ assistants across frontier LLMs. |
| [aipoch/open-science](https://github.com/aipoch/open-science) | ⭐0 (+146) | Local-first, model-agnostic AI research workbench with provenance — niche but differentiated. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 64,711 | LLM-driven multi-market stock analysis with zero-cost scheduled runs. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 52,465 | Topic → native PowerPoint with shapes/charts/audio — strong vertical AI app. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 121,169 | One-click AI short-video generation; viral in Chinese-speaking communities. |

### 🧠 LLMs / Training

| Project | Stars (today) | Why it matters |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 59,170 | Trains a 64M-param LLM from scratch in 2 hours — the "hello world" of LLM training. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 104,482 | The most cited educational LLM-in-PyTorch implementation. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,542 | Rust-native LLM application framework — type-safe alternative to LangChain. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,547 | Builds a mini vLLM + Qwen on Apple Silicon — systems-engineering angle. |
| [ridgerchu/matmulfreellm](https://github.com/ridgerchu/matmulfreellm) | 3,090 | MatMul-free language model — efficiency research that could reshape inference. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,395 | Standard LLM evaluation harness supporting 100+ models and datasets. |

### 🔍 RAG / Knowledge / Vector DBs

| Project | Stars (today) | Why it matters |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 90,149 | Leading open-source RAG engine fusing retrieval with agent capabilities. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 64,800 | The "memory layer for AI agents" — drop-in persistent context infrastructure. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 52,040 | Document agent + OCR platform; still the most-used RAG SDK. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 69,151 | Compresses tool outputs/JSON/RAG chunks 60-95% before the LLM sees them — cost play. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 115,376 | Deterministic AST-based codebase → knowledge graph; vectorless alternative. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 35,553 | "Vectorless, reasoning-based RAG" — a credible alternative to embedding search. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 30,539 | Self-hosted knowledge-graph memory for long-term agent context. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,890 | 97% storage-savings RAG for personal devices — MLSys 2026 Best Paper. |

---

## 3. Trend Signal Analysis

The single loudest signal today is the **commoditization of the "agent skill/harness" layer**. Repositories like `affaan-m/ECC` (+1,485), `mattpocock/skills` (+2,207), `ponytail` (+1,539), `humanlayer/skills` (+451), `openai/skills` (+46), and `coreyhaines31/marketingskills` (+329) all converge on the same idea: modular, reusable, prompt-and-tool bundles that any coding agent (Claude Code, Codex, OpenCode, Cursor, Hermes) can consume. This mirrors what happened with npm packages after Node.js matured — the agent runtime wars are settling, and the next competitive surface is the **content/distribution of skills themselves**. New tech stacks appearing for the first time include **vectorless, reasoning-based RAG** (PageIndex, cognee, graphify) — a credible post-embedding-search paradigm — and **swarm/hive multi-agent frameworks** (ruflo, AutoHedge) that lean into distributed cognition rather than single-agent loops. The connection to recent industry events is clear: the maturation of local model serving (Kimi-K2.6, GLM-5.2, gpt-oss, DeepSeek) directly fuels `magnitudedev/magnitude` and `ollama`'s continued momentum, while MCP (Model Context Protocol) standardization is now a load-bearing assumption in nearly every trending agent repo. Finally, `headroom`'s token-compression proxy hints at a coming wave of **middleware that sits between agents and LLMs** to control cost — a category likely to grow sharply.

---

## 4. Community Hot Spots

- **🦞 Agent Skill Marketplaces** — [mattpocock/skills](https://github.com/mattpocock/skills), [affaan-m/ECC](https://github.com/affaan-m/ECC), [humanlayer/skills](https://github.com/humanlayer/skills). The fastest-growing star pattern today; signals an emerging "App Store for agent prompts."
- **🧠 Vectorless RAG** — [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex), [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify), [topoteretes/cognee](https://github.com/topoteretes/cognee). Post-embedding retrieval is the most interesting research-to-product pipeline right now.
- **🪶 Local-First Agent Stacks** — [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent), [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude), [HKUDS/nanobot](https://github.com/HKUDS/nanobot). Privacy + zero API cost is pulling developers off hosted agent platforms.
- **💸 LLM Cost Middleware** — [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy). Token compression + multi-provider routing is becoming its own product category.
- **🧬 Swarm / Multi-Agent Coordination** — [ruvnet/ruflo](https://github.com/ruvnet/ruflo), [The-Swarm-Corporation/AutoHedge](https://github.com/The-Swarm-Corporation/AutoHedge). The frontier is moving from one-agent-loops to coordinated agent populations with shared memory.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*