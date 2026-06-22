# Hugging Face Trending Models Digest 2026-06-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-22 02:50 UTC

---

**Hugging Face Trending Models Digest – 22 June 2026**

---

## 1. Today’s Highlights
The most‑liked model this week is **DeepSeek‑V4‑Pro** (nearly 5 K likes, 2.6 M downloads), confirming DeepSeek’s dominance in conversational LLMs.  Multimodal vision‑language models are surging – **Qwen3.6‑35B‑A3B** (2 197 likes) and **LocateAnything‑3B** (2 246 likes) each broke the 200 K‑download barrier, driven by strong open‑weight releases and broad developer adoption.  A noticeable wave of community‑driven quantization (GGUF/FP8) is also evident, with many Gemma‑4 and GLM‑5.2 variants climbing the likes chart.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes / Downloads | Why it’s hot |
|-------|--------|-------------------|--------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4 999 / 2 611 991 | Flagship 34 B conversational model; strong benchmarks and open‑weight licensing. |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai‑org | 1 833 / 27 413 | Large MoE LLM with multilingual chat capabilities, popular for its “glm_moe_dsa” architecture. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1 129 / 1 815 370 | Unified “any‑to‑any” model, widely adopted for both text and vision tasks. |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 474 / 19 551 | Compact 1.4 B code‑focused LLM, praised for strong reasoning in limited compute environments. |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft | 263 / 2 593 | 4 B instruction‑tuned model targeting low‑latency chat assistants. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes / Downloads | Why it’s hot |
|-------|--------|-------------------|--------------|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 2 197 / 5 148 673 | Vision‑language MoE model with strong OCR & reasoning, open‑weight and widely benchmarked. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2 246 / 241 845 | General‑purpose image‑to‑text model that excels at object localisation and captioning. |
| **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 1 035 / 762 861 | 26 B diffusion model paired with Gemma‑4 for text‑guided image generation, quickly adopted by creatives. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 507 / 76 120 | 4 B multimodal TTS model delivering high‑fidelity, low‑latency speech synthesis. |
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 945 / 363 308 | Vision‑language model specialized for code‑related screenshots and UI extraction. |

### 🔧 Specialized Models (code, math, embeddings, speech)

| Model | Author | Likes / Downloads | Why it’s hot |
|-------|--------|-------------------|--------------|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 2 091 / 358 677 | GGUF‑quantized Gemma‑4 tuned for programming; fast inference on consumer CPUs. |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI | 563 / 20 277 | Qwen2‑based math‑oriented LLM, gaining traction in education bots. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 612 / 27 275 | Small streaming ASR model with cache‑aware architecture for edge devices. |
| **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | LiquidAI | 93 / 7 726 | Efficient 350 M sentence‑embedding model for retrieval‑augmented generation. |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | owensong | 155 / 0 | Ultra‑small (≈20 M) TTS model for embedded systems; still early‑stage but promising. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, FP8)

| Model | Author | Likes / Downloads | Why it’s hot |
|-------|--------|-------------------|--------------|
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth | 227 / 32 260 | GGUF version of GLM‑5.2 delivering 2× speed on consumer GPUs. |
| **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** | zai‑org | 123 / 217 361 | FP8‑quantized GLM‑5.2; large download count reflects production‑grade usage. |
| **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** | bytkim | 102 / 36 421 | Community‑tuned GGUF of Qwen‑3.6‑27B with MTP (mixture‑of‑token‑prototypes) for better reasoning. |
| **[unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF)** | unsloth | 150 / 42 837 | Compressed‑tensor version of Kimi‑K2.7, enabling code‑generation on low‑end laptops. |
| **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)** | lordx64 | 145 / 3 351 | Fine‑tuned Qwen‑3.5 MoE for image‑text tasks; niche but shows growing community fine‑tunes. |

---

## 3. Ecosystem Signal (≈150 words)

The current week underscores a **dual thrust**: large open‑weight multimodal MoEs (Qwen 3.6, GLM‑5.2, LocateAnything) are consolidating their leadership, while **compact, quantized variants** of top LLM families (Gemma‑4, GLM‑5.2, Kimi) are exploding in popularity for edge deployment.  The **GGUF format** now dominates community fine‑tunes, delivering 2‑4× speed gains on consumer CPUs/GPUs, and the **FP8** releases from ZAI illustrate early adoption of mixed‑precision training for production workloads.  Open‑weight models continue to eclipse proprietary APIs, as seen by DeepSeek‑V4‑Pro’s massive download count despite being a “commercial‑friendly” release.  Specialized code‑oriented models (Gemma‑4‑Coder, North‑Mini‑Code) are attracting significant attention, indicating a shift toward domain‑specific LLMs.  Overall, the ecosystem is moving toward **high‑performance, low‑resource inference** while retaining a strong appetite for **large multimodal foundations**.

---

## 4. Worth Exploring  

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – Best‑in‑class conversational LLM with open weights; ideal for benchmarking new chat pipelines and fine‑tuning for instruction following.  

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – A versatile vision‑language model that handles object detection, captioning, and visual QA out‑of‑the‑box; great for building mixed‑modality assistants.  

3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – GGUF‑quantized Gemma‑4 tuned for code generation, delivering near‑full‑size quality on a laptop GPU; perfect for exploring low‑latency developer assistants.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*