# Hugging Face Trending Models Digest 2026-06-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-14 02:43 UTC

---

## 📊 Hugging Face Trending Models Digest – 14 Jun 2026  

---

### 1. Today’s Highlights  
The week’s hot‑spot is **multimodal diffusion‑augmented language models** – Google’s *DiffusionGemma* family (26 B) dominates the “image‑text‑to‑text” lane, while community‑repacked GGUF variants from Uns⁠loth and Obliteratus spread the same weights to edge devices.  On the pure‑LLM side, DeepSeek’s **V4‑Pro** towers above all with >4 800 likes, confirming the demand for high‑capacity, instruction‑tuned chat models.  Finally, NVIDIA’s **LocateAnything‑3B** shows the growing appetite for open‑weight vision‑language models that can ground text in arbitrary images without proprietary APIs.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat, instruction‑tuned)  
| Model | Author | Likes / D/L | Why it’s trending |
|-------|--------|-------------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4 813 / 3.25 M | Flagship 35 B instruction‑tuned chat model; strong benchmarks and open‑weight licensing drive massive community adoption. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 995 / 1.01 M | First 12 B “it” (instruction‑tuned) variant of the unified Gemma‑4 family, praised for balanced performance and permissive licence. |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 356 / 6.5 K | Compact 1.5 B code‑generation model that ships with a specialized tokenizer; popular among low‑resource dev‑ops. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 820 / 98.9 K | 26 B Gemma‑4 “uncensored” GGUF for llama.cpp; high throughput on CPUs makes it a go‑to for unrestricted chat. |
| **[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)** | huihui‑ai | 152 / 8.3 K | Ablated version of Gemma‑4‑12B‑it that removes safety layers; attracts users needing full‑model output for research. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  
| Model | Author | Likes / D/L | Why it’s trending |
|-------|--------|-------------|-------------------|
| **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 711 / 92.1 K | First‑generation diffusion‑enhanced Gemma that can *see* and *write*; sets a new baseline for image‑conditioned text generation. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1 962 / 69.4 K | Open‑weight vision‑language model that can localize arbitrary objects from textual prompts; wide‑scale adoption in robotics and AR. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1 763 / 2.41 M | 35 B Qwen‑3.6 variant with aggressive sampling and no content filters; dominates the uncensored multimodal chat niche. |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram‑ai | 517 / 6.5 K | FP8‑quantized text‑to‑image diffusion model, delivering near‑state‑of‑the‑art visual quality on consumer GPUs. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 414 / 32.2 K | 4 B multilingual TTS model with low‑latency inference; trending in voice‑assistant prototyping. |
| **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | zai‑org | 154 / 0 | Pose‑driven video‑generation diffusion; early‑adopter interest in animated character pipelines. |

#### 🔧 Specialized Models (code, math, medical, embeddings)  
| Model | Author | Likes / D/L | Why it’s trending |
|-------|--------|-------------|-------------------|
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 520 / 1.7 K | 2.7 B code‑focused LM with image‑feature extraction; popular for code‑comment generation from screenshots. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 402 / 4.0 K | Tiny streaming ASR model optimized for edge devices; sees uptake in real‑time transcription apps. |
| **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)** | XiaomiMiMo | 106 / 3.6 K | FP4‑quantized text generation tuned for mobile flash memory; niche but technically impressive. |

#### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)  
| Model | Author | Likes / D/L | Why it’s trending |
|-------|--------|-------------|-------------------|
| **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | unsloth | 248 / 42.9 K | GGUF‑packed diffusion‑Gemma for CPU‑only inference; democratizes 26 B multimodal capability. |
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 580 / 872.9 K | Highly optimized GGUF of Gemma‑4‑12B‑it, providing 2‑3× speedup on consumer hardware. |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 214 / 227.8 K | Quant‑aware‑training (QAT) GGUF; leads the current wave of 4‑bit inference for LLMs. |
| **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth | 151 / 260.8 K | First 26 B QAT‑GGUF of the Gemma‑4 family, showing community appetite for ultra‑large, ultra‑compact models. |
| **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS | 279 / 50.3 K | “Obliterated” fine‑tune that removes safety filters; a go‑to for research requiring unrestricted generation. |

---

### 3. Ecosystem Signal (100‑200 words)  
The current week underscores a **convergence of diffusion and language modeling**. Google’s DiffusionGemma line (26 B) and its community‑ported GGUF builds illustrate that large multimodal foundations are moving from cloud‑only APIs to portable, open‑weight formats. NVIDIA’s LocateAnything‑3B confirms that open‑source vision‑language models are no longer niche; they’re becoming standard components for retrieval‑augmented pipelines.  

On the pure‑LLM front, **DeepSeek V4‑Pro** continues to set the popularity benchmark, suggesting that the market still prizes large, instruction‑tuned chat models with permissive licences. At the same time, a micro‑trend toward **uncensored/ablated variants** (Gemma‑4‑12B‑it‑abliterated, Qwen3.6‑Aggressive) indicates a growing researcher demand for raw model behaviour, even as platforms grapple with policy implications.  

Quantization activity is **explosive**: GGUF and QAT releases from Uns⁠loth dominate downloads, providing 4‑bit and 8‑bit inference that brings 12‑B‑30‑B models onto laptops and edge devices. Overall, open‑weight, community‑quantized, multimodal models are the primary growth engine, while proprietary‑only APIs see relative slowdown.

---

### 4. Worth Exploring  

1. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** – The flagship multimodal model that fuses diffusion image reasoning with a 26 B language backbone; ideal for research on image‑conditioned generation and cross‑modal retrieval.  

2. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – Best‑in‑class open‑weight chat model with strong reasoning benchmarks; a solid baseline for any instruction‑tuned LLM experiment.  

3. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** – The most downloaded quantized Gemma variant; provides near‑full‑model quality on a single GPU/CPU, making it perfect for rapid prototyping and deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*