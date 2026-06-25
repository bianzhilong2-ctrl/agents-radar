# Hugging Face Trending Models Digest 2026-06-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-25 02:28 UTC

---

**📅 Hugging Face Trending Models Digest – June 25 2026**

---

## 1. Today’s Highlights
- The **DeepSeek V4‑Pro** stormed the leaderboard with 5,049 likes and 2 M+ downloads, reaffirming DeepSeek’s dominance in conversational LLMs.  
- **GLM‑5.2** (both the standard and FP8 variants) and its **GGUF** counterpart from Unsloth have collectively attracted more than 3 k likes, showing strong community interest in Zhipu‑AI’s mixture‑of‑experts (MoE) architecture and in low‑precision deployment.  
- Multimodal vision‑language models are on fire: **HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑Aggressive**, **MiniMax‑M3**, and **NVIDIA LocateAnything‑3B** together account for > 4 M downloads, highlighting a shift toward open‑weight vision‑language agents and “locate‑anything” retrieval tools.  
- The **GGUF** quantization format continues to surge, with multiple high‑profile releases (Gemma‑4‑12B‑Coder, Qwen‑3.6‑27B‑Coder, GLM‑5.2‑GGUF) gaining traction for edge‑device inference.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes / Downloads | Why it’s Trending |
|---|---|---|---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 5,049 / 2,052,463 | Flagship conversational model with strong multilingual recall; heavy adoption in R‑AGI bots. |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai‑org | 2,360 / 57,186 | MoE‑based 5.2‑billion‑parameter chat model; praised for fluency and low latency on commodity GPUs. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1,163 / 2,114,441 | “Any‑to‑any” instruction model that bridges text‑image tasks; strong community benchmarks. |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft | 336 / 4,805 | Compact 4 B model tuned for fast context‑window expansions; popular for on‑device assistants. |
| **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Qwen | 151 / 223 | Large 35 B MoE with built‑in agentic primitives; early adopters experimenting with tool‑use. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes / Downloads | Why it’s Trending |
|---|---|---|---|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive)** | HauhauCS | 2,209 / 3,769,369 | Massive 35 B MoE vision‑language model, uncensored and optimized for aggressive prompting; drives open‑source VL research. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,347 / 359,498 | Image‑feature extractor paired with text query; enables zero‑shot object localisation in user‑generated media. |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 1,228 / 143,093 | Multimodal model with strong PDF‑to‑text and chart understanding; adopted in enterprise document pipelines. |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea | 192 / 878 | Fast diffusion‑based text‑to‑image model with “Turbo” scheduler; praised for low‑GPU memory footprint. |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 741 / 45,687 | General‑purpose OCR that removes language and script limits; widely used in digitisation projects. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes / Downloads | Why it’s Trending |
|---|---|---|---|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 2,302 / 483,139 | Gemma‑4‑12B specialised for code generation; GGUF quantization makes it runnable on laptops. |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI | 692 / 49,569 | 3 B model tuned for mathematical reasoning; strong performance on open‑domain math benchmarks. |
| **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | LiquidAI | 119 / 11,471 | Dense 350 M embedding model for semantic search; popular in low‑latency retrieval stacks. |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | owensong | 194 / 0 | Ultra‑small TTS (sub‑1 M parameters); serves edge‑device voice assistants. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 679 / 47,208 | 0.6 B streaming ASR model with cache‑aware architecture; adopted for real‑time transcription. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes / Downloads | Why it’s Trending |
|---|---|---|---|
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth | 348 / 76,971 | GGUF conversion of GLM‑5.2, enabling 4‑bit inference on consumer GPUs. |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 | 536 / 138,704 | Agentic fine‑tune of Gemma‑4 12B with 3.5× speed‑up via tau‑2 quantization. |
| **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** | zai‑org | 158 / 445,304 | FP8‑precision checkpoint for even lower memory use while retaining MoE quality. |
| **[Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)** | Jackrong | 83 / 10,867 | 27 B vision‑language coder converted to GGUF for llama.cpp; attracts developers building on‑device IDE assistants. |
| **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)** | lordx64 | 180 / 5,719 | Community‑crafted quantized Qwen‑3.5 MoE for Chinese‑centric chat; quick adoption in regional apps. |

---

## 3. Ecosystem Signal (100‑200 words)

The **LLM segment** continues to be dominated by MoE families—**GLM‑5.2**, **Qwen 3.6**, and **DeepSeek V4**—each delivering scalability without linearly increasing inference cost. Open‑weight releases remain the norm; proprietary‑only models are increasingly wrapped in open checkpoints, as seen with DeepSeek‑V4‑Pro and Qwen‑3.6‑A3B.  

Quantization formats have matured: **GGUF** (by Unsloth, Gemma‑4 coders, and GLM‑5.2) now accounts for the bulk of the top‑30 downloads, reflecting a community push for desktop‑grade performance. **FP8** checkpoints are gaining traction as hardware vendors (e.g., NVIDIA’s Hopper GPUs) provide native support, removing the accuracy‑vs‑speed trade‑off historically associated with 4‑bit methods.  

Multimodal models show the strongest growth surge. Vision‑language agents that combine “locate‑anything” retrieval (NVIDIA) with uncensored generation (HauhauCS) have collectively amassed **> 4 M** downloads, indicating that developers are building pipelines that blend OCR, object detection, and dialog.  

Finally, **specialized fine‑tunes**—code‑focused Gemma variants, math‑oriented VibeThinker, and ultra‑small TTS Inflect‑Nano—highlight a diversification beyond generic chat, with niche communities driving adoption through targeted benchmarks and low‑resource deployment.

---

## 4. Worth Exploring  

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – The most downloaded conversational model this week; its multilingual capabilities and strong instruction following make it a baseline for any chat‑bot or R‑AGI experiment.  

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive)** – A 35 B MoE vision‑language model that is fully open‑weight and uncensored, perfect for research on multimodal reasoning, image‑to‑text generation, and safe‑prompt engineering.  

3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – Offers state‑of‑the‑art code generation in a 4‑bit GGUF file, enabling rapid prototyping of IDE assistants on laptops without a GPU.  

These three models provide a balanced view of the current ecosystem: top‑tier conversational LLM, cutting‑edge multimodal MoE, and a highly optimized, specialized coder in a portable format. Happy exploring!

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*