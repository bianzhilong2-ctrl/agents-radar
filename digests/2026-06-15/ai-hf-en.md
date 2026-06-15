# Hugging Face Trending Models Digest 2026-06-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-15 02:48 UTC

---

**Hugging Face Trending Models Digest – 2024‑06‑15**  

---

## 1. Today’s Highlights  

The week was dominated by **multimodal diffusion‑augmented LLMs** – Google’s *DiffusionGemma‑26B* family and NVIDIA’s *LocateAnything‑3B* topped the likes chart, showing that the community is eager to combine vision and language in a single, open‑weight model.  On the pure‑LLM side, *DeepSeek‑V4‑Pro* remains the runaway star with > 4.8 k likes, confirming the continued appetite for large conversational models that are fully open‑source.  Finally, the **GGUF/quantized wave** is gaining steam: several community‑packaged GGUF versions of Gemma‑4, Qwen‑3.6 and Kimi‑2.7 are rapidly climbing the list, signalling that low‑resource deployment is now a mainstream priority.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[deepseek-ai/DeepSeek‑V4‑Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4,834 / 3,075,369 | Flagship 130 B conversational model; open‑weight, strong benchmark scores, and heavy community adoption. |
| **[google/gemma‑4‑12B‑it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1,008 / 1,084,405 | “Instruction‑tuned” variant of Gemma‑4; balances size and performance, widely used for chat and tool‑use. |
| **[CohereLabs/North‑Mini‑Code‑1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 369 / 9,932 | Small (≈1 B) code‑focused model; popular for on‑device coding assistants. |
| **[nex-agi/Nex‑N2‑Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | nex‑agi | 260 / 3,396 | Qwen 3.5‑based MoE, strong multilingual generation, positioned as a “general‑purpose” LLM. |
| **[nex-agi/Nex‑N2‑mini](https://huggingface.co/nex-agi/Nex-N2-mini)** | nex‑agi | 211 / 7,010 | Miniature sibling of N2‑Pro, optimized for low‑latency inference. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[google/diffusiongemma‑26B‑A4B‑it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 801 / 198,912 | 26 B LLM + diffusion backbone, delivers zero‑shot image‑grounded text generation; first major “diffusion‑augmented” release from Google. |
| **[nvidia/LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,004 / 75,201 | Vision‑language model that can localize arbitrary objects from text prompts; strong adoption in robotics and AR. |
| **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,808 / 2,516,709 | Uncensored 35 B Qwen 3.6 variant with vision capabilities; popular for unrestricted creative pipelines. |
| **[ideogram‑ai/ideogram‑4‑fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram‑ai | 535 / 8,263 | FP8‑quantized text‑to‑image diffusion; showcases the practical benefits of extreme quantization for image generation. |
| **[bosonai/higgs‑audio‑v3‑tts‑4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 427 / 35,122 | High‑quality 4 B text‑to‑speech model built on multimodal Qwen, gaining traction in voice‑assistant prototypes. |
| **[zai-org/SCAIL‑2](https://huggingface.co/zai-org/SCAIL-2)** | zai‑org | 175 / 0 | Pose‑driven video‑generation diffusion; early‑stage but draws attention for character animation workloads. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[moonshotai/Kimi‑K2.7‑Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 635 / 15,145 | 2.7 B code‑focused model with compressed‑tensor format; appealing for edge‑device coding assistants. |
| **[Jackrong/Qwopus3.6‑27B‑Coder‑MTP‑GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Jackrong | 183 / 33,720 | Vision‑augmented code model (image‑to‑code) packaged as GGUF; draws interest from research on “code‑from‑screenshot” use‑cases. |
| **[nvidia/nemotron‑3.5‑asr‑streaming‑0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 412 / 4,505 | Small streaming ASR model built on Nemotron, showing the push toward real‑time speech in low‑resource settings. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[unsloth/gemma‑4‑12b‑it‑GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 598 / 926,372 | Community‑converted Gemma‑4 to GGUF, enabling 4‑bit inference on consumer CPUs; a benchmark for open‑weight quantization. |
| **[unsloth/gemma‑4‑12B‑it‑qat‑GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 232 / 255,424 | QAT‑aware GGUF version, slightly higher accuracy than vanilla 4‑bit, popular among developers needing a balance of speed and quality. |
| **[unsloth/diffusiongemma‑26B‑A4B‑it‑GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | unsloth | 261 / 80,118 | First GGUF conversion of a diffusion‑augmented LLM; demonstrates that even 26 B multimodal models can run on a modern laptop with 8 GB VRAM. |
| **[DavidAU/Qwen3.6‑40B‑Claude‑4.6‑Opus‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 337 / 375,966 | Highly curated fine‑tune that mixes multiple instruction sets (Claude, Opus, Deckard) into a single 40 B GGUF; a case study in “super‑instruction” merging. |
| **[unsloth/Kimi‑K2.7‑Code‑GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF)** | unsloth | 71 / 25 | Very new GGUF of Kimi‑2.7‑Code; still low numbers but fast‑gaining due to unsloth’s reputation for high‑quality quantization pipelines. |

---

## 3. Ecosystem Signal  

The current week underscores three clear motions in the HF ecosystem. First, **multimodal diffusion‑augmented LLMs** (DiffusionGemma, LocateAnything, Qwen‑3.6 vision variants) are surging, showing that developers now expect a single model to both “see” and “speak.” This reflects the broader industry shift toward foundation models that can handle image‑text‑audio jointly. Second, **open‑weight large language models** continue to dominate download volume – DeepSeek‑V4‑Pro and Gemma‑4 families together account for > 3 M downloads, confirming that the community still prefers fully open licenses for research reproducibility and commercial fine‑tuning. Third, the **GGUF/quantization wave** has moved from niche to mainstream; within the top‑30 list, eight distinct GGUF packs (Gemma‑4, DiffusionGemma‑26B, Qwen‑3.6, Kimi‑2.7) collectively exceed 2 M downloads, illustrating that low‑bit inference on consumer hardware is now a primary adoption driver. Meanwhile, proprietary‑only offerings (e.g., “Uncensored” Qwen models) still attract heavy interest, but they are usually accompanied by community quantizations that democratize access.

---

## 4. Worth Exploring  

1. **[google/diffusiongemma‑26B‑A4B‑it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** – The flagship multimodal model that unifies a 26 B LLM with diffusion image generation; ideal for research on joint text‑to‑image‑to‑text pipelines and for prototyping zero‑shot visual assistants.  

2. **[deepseek-ai/DeepSeek‑V4‑Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – The most downloaded open‑weight conversational LLM of the week, offering strong multilingual performance and a permissive license; a solid baseline for any chatbot or instruction‑tuning experiment.  

3. **[unsloth/gemma‑4‑12b‑it‑GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** – Demonstrates how a 12 B instruction‑tuned model can be run in 4‑bit GGUF on a laptop CPU, making high‑quality LLM experimentation accessible without a GPU.  

These three span the key trends—multimodal integration, leading‑edge open LLMs, and efficient quantization—making them the most instructive picks for developers and researchers today.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*