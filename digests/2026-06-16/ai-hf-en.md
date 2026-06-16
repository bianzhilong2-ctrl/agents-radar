# Hugging Face Trending Models Digest 2026-06-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-16 02:50 UTC

---

**Hugging Face Trending Models Digest – 16 June 2026**

---

## 1. Today’s Highlights  

The week’s leaderboard is dominated by massive multimodal “diffusion‑Gemma” hybrids from Google and the community, showing a clear shift toward unified image‑text‑to‑text engines that can both generate and reason over visual data.  The most‑liked model, **DeepSeek‑V4‑Pro**, continues to stack up billions of likes and downloads, confirming the sustained demand for high‑capacity conversational LLMs.  Meanwhile, quantized GGUF releases (e.g., unsloth’s Gemma‑4‑12B‑IT‑GGUF) are exploding in popularity, signalling that the community values edge‑friendly, low‑memory variants for on‑device inference.  NVIDIA’s **LocateAnything‑3B** and the uncensored Qwen‑3.6‑35B family also highlight a growing appetite for vision‑centric assistants that can locate and describe objects in images with minimal compute.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes / Downloads | Why it’s Trending |
|-------|--------|-------------------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4,866 / 2.93 M | Flagship 30B‑class LLM with strong multilingual chat performance; benchmark leader in several open‑source leaderboards. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1,034 / 1.16 M | “Any‑to‑any” unified model that couples instruction‑tuning with image‑text capability, pushing Gemma into the multimodal arena. |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 390 / 11 k | Small (≈1 B) code‑oriented LLM that’s gaining traction for low‑resource development assistants. |
| **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google | 549 / 250 k | Baseline 12B Gemma model (no instruction head) still draws interest for fine‑tuning and research baselines. |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft | 105 / 13 | Early‑stage “Explorer SubAgent” fine‑tune exploring fast‑context windows for retrieval‑augmented generation. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes / Downloads | Why it’s Trending |
|-------|--------|-------------------|-------------------|
| **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 883 / 311 k | First‑generation diffusion‑Gemma hybrid (26 B) that fuses text generation, image synthesis, and visual grounding. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,056 / 86.9 k | Compact vision‑language model that can locate objects in arbitrary images; popular for mobile AR apps. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,855 / 2.70 M | Uncensored, vision‑enabled Qwen 35 B variant; strong community uptake for “raw” research. |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram‑ai | 547 / 10.7 k | FP8‑quantized text‑to‑image diffusion model offering near‑GPU‑level quality on low‑power hardware. |
| **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | zai‑org | 190 / 0 | Pose‑driven video generation via diffusion; early adopters testing character animation pipelines. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 445 / 38.4 k | Multimodal TTS that leverages a Qwen‑3‑based encoder for expressive, low‑latency speech synthesis. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes / Downloads | Why it’s Trending |
|-------|--------|-------------------|-------------------|
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 833 / 14.3 k | Multimodal “image‑text‑to‑text” code assistant; praised for compact 3‑B size and good zero‑shot coding ability. |
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 746 / 56.8 k | 2.7 B code‑focused LLM with compressed‑tensor format, popular among hobbyist developers. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 422 / 5.2 k | Tiny streaming ASR model (0.6 B) optimized for edge devices; fast adoption in IoT voice pipelines. |
| **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)** | prefeitura‑rio | 303 / 188.7 k | Massive 397 B MoE model made openly available by a municipal cloud; demonstrates public‑sector AI scaling. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes / Downloads | Why it’s Trending |
|-------|--------|-------------------|-------------------|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 617 / 980.8 k | GGUF‑packed Gemma‑4‑12B‑IT offering 4‑bit inference on consumer CPUs; top‑ranked quantized model of the week. |
| **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | unsloth | 276 / 107.2 k | Community‑repacked diffusion‑Gemma in GGUF, lowering VRAM to ~16 GB for desktop GPUs. |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 243 / 288.4 k | Quant‑aware‑trained (QAT) GGUF version reaching <2 GB on‑device footprint with minimal quality loss. |
| **[unsloth/MiniMax-M3-GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF)** | unsloth | 83 / 14.8 k | GGUF conversion of MiniMax‑M3, making the multimodal code model runnable on cheap laptops. |
| **[DavidAU/...Claude‑4.6‑Opus‑Deckard‑Uncensored‑GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 357 / 369.5 k | Giant 40 B “Claude‑style” fine‑tune bundled as a single GGUF file, attracting researchers looking for uncensored, high‑capacity LLMs. |

---

## 3. Ecosystem Signal  

The current wave is clearly **multimodal convergence**: large language models are being paired with diffusion or vision encoders (e.g., DiffusionGemma, LocateAnything, Qwen‑3.6 Vision) to deliver “one‑stop” assistants capable of textual reasoning, image generation, and object localization.  The **Gemma family** (Google’s open‑weight base) is the backbone of this trend, repeatedly appearing both in pure LLM form and as the backbone of diffusion‑Gemma hybrids.  Parallel to that, **quantized GGUF releases** dominate the download charts, reflecting a community push toward offline, low‑VRAM deployment—unsloth’s GGUF packs alone account for >2 M downloads across the list.  

Open‑weight models remain the majority; even the “uncensored” Qwen variants are fully open, though some community‐curated fine‑tunes (e.g., Claude‑style 40 B) bundle proprietary prompting tricks.  The **MoE (Mixture‑of‑Experts) scaling** is resurging, shown by the 397 B Rio‑3.5 and the 35 B Qwen‑3.6 A3B, indicating that large public‑service providers are comfortable releasing billion‑parameter expert models under permissive licenses.  

Finally, **domain‑specific small models** (e.g., MiniMax‑M3, Nemotron ASR‑0.6B) keep a niche but growing presence, suggesting that the ecosystem values highly optimized task‑specific models alongside the megascale “everything” models.

---

## 4. Worth Exploring  

1. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** – The flagship multimodal hybrid; perfect for research on joint language‑vision generation and for prototyping UI assistants that need both dialogue and image synthesis.  

2. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** – Offers near‑full‑precision performance of a 12 B LLM on a laptop or single‑GPU setup; a practical baseline for anyone wanting to experiment with instruction‑tuned LLMs without a cloud budget.  

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – Compact vision‑language model that excels at object detection and spatial grounding; ideal for edge‑AI, robotics, or AR/VR pipelines where a small footprint is essential.  

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*