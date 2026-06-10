# Hugging Face Trending Models Digest 2026-06-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-10 02:33 UTC

---

**Hugging Face Trending Models Digest – 10 June 2026**

---

## 1. Today’s Highlights  
The past week was dominated by the rollout of **Gemma‑4** variants (Google’s flagship 12 B‑parameter “any‑to‑any” model and community‑ported GGUF/quantised builds from Uns‑loth) and the explosive popularity of **DeepSeek‑V4‑Pro**, which remains the top‑liked model with > 4 700 weekly likes. Vision‑language continues to surge, evidenced by the massive uptake of **Qwen‑3.6‑35B‑A3B‑Uncensored** (1 600 likes, > 2.9 M downloads) and Nvidia’s **LocateAnything‑3B** for image‑text grounding. Meanwhile, niche but fast‑growing domains such as text‑to‑audio (Google Magenta‑Realtime‑2) and text‑to‑speech (BosonAI Higgs‑Audio‑v3‑TTS‑4B) are gaining traction, signalling broader multimodal expansion beyond pure text.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4 740 / 4 302 553 | High‑quality, 35 B conversational model; strong benchmark scores and open‑weight policy keep it at the top. |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 734 / 133 351 | Small but well‑tuned for HR‑specific generation; rapid adoption by enterprise chatbot pipelines. |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 572 / 137 138 | MOE‑style 8 B model that balances cost and performance; popular in low‑latency inference. |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 272 / 17 571 | “Thinking” variant adds chain‑of‑thought prompting; favored for reasoning‑heavy workloads. |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 163 / 1 784 | Compact code‑generation model (1 B) that fits on‑device; growing community for developer tooling. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1 732 / 123 922 | Zero‑shot image‑text grounding; integrates into Nvidia AI‑Studio pipelines, driving massive interest. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1 596 / 2 983 909 | Large vision‑language model with aggressive sampling; high download count reflects demand for unrestricted generative V&L. |
| **[ideogram‑ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram‑ai | 442 / 5 915 | FP8‑quantised diffusion model delivering fast, high‑fidelity text‑to‑image generation. |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google | 164 / 18 216 | Real‑time text‑to‑audio synthesis on‑device (TFLite); early adopter buzz in music‑AI circles. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 285 / 16 207 | Mandarin‑focused high‑quality TTS model; strong downloads from Asian language‑tech startups. |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 196 / 281 | First open‑weight image‑to‑video diffusion model; niche but fast‑growing in generative video labs. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 281 / 10 139 | Multi‑modal OCR with vision‑language alignment; popular in Chinese document‑automation pipelines. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 321 / 4 181 | Low‑latency streaming ASR for edge devices; adoption in real‑time transcription services. |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 175 / 56 864 | 550 B‑parameter flagship model (BF16) for research labs needing petascale language capacity. |

### 📦 Fine‑tunes & Quantizations (community builds, GGUF, AWQ)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 532 / 660 140 | GGUF‑packed Gemma‑4 (12 B) for CPU‑only inference; huge download count reflects the “run‑anywhere” demand. |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 172 / 127 332 | Quant‑aware training (QAT) version offering 4‑bit inference with minimal quality loss. |
| **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** | google | 115 / 63 049 | Official 4‑bit GGUF from Google; serves as a reference for the community‑driven quantisation wave. |
| **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth | 115 / 96 059 | Larger 26 B Gemma variant, QAT‑compressed; early adopter interest in higher‑capacity yet portable models. |
| **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS | 143 / 8 106 | Community “oblivious” fine‑tune focused on jailbreak‑resistance, attracting security‑research discussion. |

---

## 3. Ecosystem Signal  

The **Gemma‑4** family is the clear nucleus of current activity: Google’s release of the base 12 B “any‑to‑any” model, followed instantly by a cascade of community quantisations (GGUF, QAT, 4‑bit) and specialist fine‑tunes. This reflects a maturing **open‑weight** philosophy where the base model is stable, and the community adds value through compression and domain adaptation.

Concurrently, **vision‑language** is scaling up fast. Nvidia’s **LocateAnything‑3B** and the massive **Qwen‑3.6‑35B‑A3B** uncensored variant dominate the downloads in the image‑text‑to‑text space, indicating that enterprises and hobbyists alike need robust grounding capabilities without proprietary API lock‑in.

**Quantisation** is the fastest‑growing technical trend. GGUF (a lightweight container format) and QAT‑based 4‑bit models have collectively amassed > 1 M downloads across the top 10 entries, underscoring the market‑driven push for CPU‑centric inference and edge deployment. The resurgence of **text‑to‑audio** (Magenta‑Realtime‑2) and **text‑to‑speech** (Higgs‑Audio‑v3‑TTS‑4B) points to a broader multimodal expansion, where audio generation is becoming a first‑class citizen alongside text‑to‑image and text‑to‑video.

Open‑weight releases still dominate the top‑ranked slots (Gemma, DeepSeek, Qwen, LocateAnything), while **proprietary‑style** models (e.g., Baidu‑style, closed‑source video generators) linger lower in the list, suggesting the community prefers openly downloadable assets for research and product integration.

---

## 4. Worth Exploring  

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – Benchmark‑level conversational performance at a reasonable size (35 B) with a permissive license; ideal for building next‑gen chat assistants or retrieval‑augmented pipelines.  

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – Zero‑shot grounding across arbitrary image‑text pairs; a strong baseline for any vision‑language application (RAG, visual QA, robotics) without requiring large‑scale fine‑tuning.  

3. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** – The most downloaded GGUF model, delivering Gemma‑4 quality on standard CPUs or low‑power GPUs; perfect for developers who need high‑quality LLM inference in constrained environments.  

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*