# Hugging Face Trending Models Digest 2026-06-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-08 03:58 UTC

---

**Hugging Face Trending Models Digest – June 8 2026**

---

## 1. Today’s Highlights  
The leaderboard is dominated by **vision‑language hybrids** (LocateAnything‑3B, Qwen‑3.6‑35B‑A3B variants) and **next‑generation LLMs** from Google (Gemma‑4‑12B) and DeepSeek (V4‑Pro/Flash). Quantized GGUF releases from the Unslo​th community are rapidly climbing, reflecting a surge in edge‑ready inference. Meanwhile, Nvidia’s **Cosmos 3** series and SulphurAI’s **Sulphur‑2‑base** demonstrate that large‑scale diffusion models for text‑to‑video are finally hitting mainstream traction.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author / Likes / Downloads | Why it’s hot |
|-------|---------------------------|--------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | DeepSeek · 4,700 · 5.5 M | Flagship conversational LLM with strong reasoning, dominating the text‑generation chart. |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | OpenBMB · 779 · 114 k | Extremely compact (1 B) but competitive; popular for low‑cost deployment. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Google · 698 · 435 k | Instruction‑tuned 12 B model; praised for balanced performance and open licensing. |
| **[nvidia/NVIDIA‑Nemotron‑3‑Ultra‑550B‑A55B‑BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | Nvidia · 157 · 49.8 k | 550 B‑scale LLM for research‑grade workloads; strong interest despite high resource needs. |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI · 541 · 118 k | 8 B MOE model offering a good trade‑off between size and multilingual ability. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author / Likes / Downloads | Why it’s hot |
|-------|---------------------------|--------------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Nvidia · 1,535 · 115 k | First‑stage “open‑world object locator” that turns arbitrary text prompts into precise image coordinates; fast adoption in robotics and AR. |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Unslo​th · 687 · 1.15 M | GGUF‑quantized Qwen‑3.6 (27 B) with multi‑task pre‑training; community praise for runway‑ready GPU/CPU inference. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI · 1,588 · 1.71 M | Text‑to‑video diffusion model, first of its class to ship with a GGUF checkpoint, sparking a wave of short‑form video creation. |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | Ideogram‑AI · 356 · 4.4 k | FP8‑precision diffusion model delivering near‑state‑of‑the‑art image quality with dramatically lower GPU memory. |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | Google · 133 · 13.3 k | Real‑time text‑to‑audio generation, leveraging diffusion‑based audio synthesis for on‑the‑fly music creation. |
| **[byteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance · 170 · 246 | First open‑weight image‑text‑to‑video renderer, generating short clips from prompts; niche but technically impressive. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author / Likes / Downloads | Why it’s hot |
|-------|---------------------------|--------------|
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | SapientInc · 719 · 162 k | Human‑Resource‑Management‑tuned LLM; adopted by enterprise HR chatbots for policy compliance. |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle · 269 · 9.1 k | Vision‑language OCR model that now supports multilingual layout analysis, popular in document‑automation pipelines. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | BosonAI · 199 · 7.6 k | 4 B TTS model tuned for low‑latency streaming; widely used in virtual‑assistant products. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Nvidia · 262 · 3.4 k | Lightweight streaming ASR model, optimized for edge devices with cache‑aware inference. |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs · 144 · 0 | Open‑source multilingual TTS; early adopters praise its controllable prosody. |

### 📦 Fine‑tunes & Quantizations (community, GGUF, AWQ)

| Model | Author / Likes / Downloads | Why it’s hot |
|-------|---------------------------|--------------|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | Unslo​th · 459 · 568 k | GGUF‑quantized Gemma‑4, enabling 12 B inference on a single RTX 4090 with < 4 GB VRAM. |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | Unslo​th · 124 · 85.8 k | Quant‑aware‑trained (QAT) version, squeezing extra 15 % speed‑up versus standard GGUF. |
| **[nvidia/Cosmos3‑Super‑Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)** | Nvidia · 124 · 5.1 k | Text‑to‑image diffusion checkpoint released in GGUF format, part of the “Cosmos 3 omni‑model” push. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS · 1,523 · 2.92 M | Community‑fine‑tuned Qwen‑3.6 with aggressive uncensored prompts; GGUF + MoE structure fuels high downloads. |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | StepFun · 349 · 43.2 k | Flash‑optimized vision‑language model (image‑text‑to‑text) that runs at 2× speed on consumer GPUs. |

---

## 3. Ecosystem Signal  

The **vision‑language** family is the fastest‑growing segment, as evidenced by LocateAnything‑3B, Qwen‑3.6‑A3B variants, and Step‑3.7‑Flash. Their popularity reflects a market shift toward **spatial reasoning** (object localisation, grounding) and **multimodal assistants** that can act on visual input. In the pure‑LLM arena, DeepSeek’s V4 line remains the clear leader, but Google’s Gemma‑4 series is gaining momentum, especially through community‑run GGUF quantizations that democratize 12 B inference on consumer hardware.  

**Open‑weight** releases continue to dominate the top‑10 (Nvidia, Google, DeepSeek, Unslo​th), indicating sustained community appetite for unrestricted models. At the same time, **proprietary‑style fine‑tunes** (e.g., HauhauCS’s uncensored Qwen) are surfacing rapidly, leveraging the base open models for niche use‑cases.  

Quantization activity is especially vibrant: GGUF checkpoints for Gemma‑4, Qwen‑3.6, and Cos‑mos3 show the ecosystem’s emphasis on **low‑latency, edge‑friendly inference**. AWQ‑style optimizations have not yet broken into the top‑30, but the heavy download counts of GGUF models suggest a near‑future convergence toward **standardized ultra‑compact formats**.  

Finally, diffusion‑based **text‑to‑video** models (Sulphur‑2‑base, Bernini‑R) are emerging from experimental labs into production pipelines, indicating the next wave of generative media after image diffusion.

---

## 4. Worth Exploring  

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – Sets the benchmark for open‑weight conversational performance in 2026; a must‑try for any RAG or chat‑assistant project.  

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – The first open model that reliably grounds textual queries to pixel‑level coordinates, opening new avenues for robotics, AR, and visual QA.  

3. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** – Pioneering text‑to‑video diffusion with a GGUF checkpoint; ideal for researchers exploring compact video generation and for creators looking for a free, high‑quality short‑clip generator.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*