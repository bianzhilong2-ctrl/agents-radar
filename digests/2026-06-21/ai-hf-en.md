# Hugging Face Trending Models Digest 2026-06-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-21 02:47 UTC

---

**Hugging Face Trending Models Digest – 2026‑06‑21**  
---

### 1. Today's Highlights  
The week’s buzz centers on high‑performance, open‑weight LLMs and multimodal transformers. DeepSeek‑V4‑Pro, a 4‑B open‑weight chat model, tops the likes with 4,986, alongside the Qwen3.6‑35B block‑level model from HauhauCS, which sees massive downloads (3.8 M). In multimodal space, nvidia/LocateAnything‑3B (2.2 k likes) and google/diffusiongemma‑26B‑A4B‑it (1.0 k likes) illustrate the continued growth of large vision‑language pipelines. Across the board, many community developers are shipping GGUF‑quantised versions (e.g., yuxinlu1’s gemma‑4‑12B‑coder‑fable5) and fine‑tuned Cantonese‑style prompts, signalling a shift toward lightweight, on‑device inference.

---

### 2. Trending Models  

#### 🧠 Language Models  
| Model (HF link) | Author | Likes | Downloads | Why It’s Trending |
|-----------------|--------|-------|-----------|-------------------|
| **[deepseek-ai/DeepSeek‑V4‑Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4,986 | 2.8 M | Open‑weight 4 B chat model that outperforms many commercial GPT‑4‑style peers on speed and instruction adherence, attracting large download bursts. |
| **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 2,042 | 3.8 M | Aggressive‑tone Qwen3.6‑35B fine‑tuned for uncensored dialogue, burning through data with rapid adoption. |
| **[google/gemma‑4‑12B‑it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1,107 | 1.7 M | Unified “any‑to‑any” Gemma‑4 model that blends text, vision, and audio prompts, seizing the multimodal chat window. |
| **[yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 1,988 | 312 k | Gemma‑4 12B encoder‑decoder packed in GGUF, tuned for coding & reasoning, fueling developer repos. |

#### 🎨 Multimodal & Generation  
| Model (HF link) | Author | Likes | Downloads | Why It’s Trending |
|-----------------|--------|-------|-----------|-------------------|
| **[nvidia/LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,217 | 236 k | 3‑B vision‑language model engineered for object localisation; its speed makes it ideal for edge devices. |
| **[google/diffusiongemma‑26B‑A4B‑it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 1,022 | 673 k | Diffusion‑Gemma hybrid that fuses diffusion generation with language grounding; large download spikes from artists. |
| **[MiniMaxAI/MiniMax‑M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 1,161 | 85 k | 3‑B multimodal transformer optimized for image‑txt‑to‑text tasks, exploitable in AIGC workflows. |
| **[moonshotai/Kimi‑K2.7‑Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 930 | 318 k | Image‑based code generation model; its speed and accuracy have sparked a wave of code‑assistant bots. |

#### 🔧 Specialized Models  
| Model (HF link) | Author | Likes | Downloads | Why It’s Trending |
|-----------------|--------|-------|-----------|-------------------|
| **[nvidia/nemotron‑3.5‑asr‑streaming‑0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 587 | 21 k | 0.6 B ASR model offering low‑latency streaming, useful for real‑time captioning. |
| **[owensong/Inflect‑Nano‑v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | owensong | 143 | 0 | Ultra‑small TTS model targeted at embedded devices; niche community interest. |
| **[LiquidAI/LFM2.5‑Embedding‑350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | LiquidAI | 81 | 6 k | 350 M‑parameter sentence‑embedding for similarity, used in search‑engine prototypes. |
| **[zai-org/SCAIL‑2](https://huggingface.co/zai-org/SCAIL-2)** | zai-org | 241 | 0 | Diffusion‑based character‑animation model for pose‑driven video generation. |

#### 📦 Fine‑tunes & Quantizations  
| Model (HF link) | Author | Likes | Downloads | Why It’s Trending |
|-----------------|--------|-------|-----------|-------------------|
| **[yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 1,988 | 312 k | GGUF quantised gemma‑4 for code, enabling close‑to‑CPU inference. |
| **[unsloth/GLM‑5.2‑GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth | 205 | 22 k | GLM‑5.2 released in GGUF for swift llama.cpp integration. |
| **[Jackrong/Qwopus3.6‑27B‑Coder‑MTP‑GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Jackrong | 269 | 168 k | Light‑weight codex‑style 27B model in GGUF, gaining traction among dev bots. |
| **[bytkim/Qwen3.6‑27B‑MTP‑pi‑tune‑GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** | bytkim | 97 | 20 k | 27 B MTP Qwen model fine‑tuned for prompts–it‑sends, targeting generative code & text. |

---

### 3. Ecosystem Signal  
The ecosystem is increasingly dominated by **open‑weight, community‑quantised models**. DeepSeek‑V4‑Pro and HGSM‑Qwen3.6 variants show that 4‑ to 35‑B models can now be openly licensed and still draw massive attention, rivaling proprietary offerings. Quantization is a major driver: GGUF releases (gemma‑4‑12B coder, GLM‑5.2, Qwen3.6‑27B) make large‑scale inference reachable on consumer hardware, encouraging local deployment. Fine‑tuning trends lean toward *domain‑specific* tasks (code, image‑to‑text, ASR) rather than generic chat. Meanwhile, multimodal pipelines are expanding beyond text, with diffusion‑based visual models (diffusiongemma‑26B, LocateAnything) and 3‑B vision‑language adapters moving into mainstream AIGC. Proprietary models (e.g., WeiboAI, MoonshotAI) exhibit lower impact, suggesting the community prefers flexible, open‑source solutions for rapid experimentation.

---

### 4. Worth Exploring  
1. **[deepseek-ai/DeepSeek‑V4‑Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – A balanced 4‑B chat model that excels in instruction compliance and speed. Ideal for building low‑cost, high‑quality conversational agents.  
2. **[google/diffusiongemma‑26B‑A4B‑it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** – Combines diffusion generation with image‑text grounding; perfect for creative industries exploring visual storytelling.  
3. **[yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – Lightning‑fast, fully quantised gemma‑4 for coding tasks; offers a near‑native inference speed with minimal GPU memory, great for edge‑ai projects.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*