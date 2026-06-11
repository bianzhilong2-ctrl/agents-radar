# Hugging Face Trending Models Digest 2026-06-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-11 02:43 UTC

---

**Hugging Face Trending Models Digest – 2026‑06‑11**

---

### 1. Today’s Highlights  
The Hub is dominated by Gemma‑4‑12B variants, with Google’s latest **gemma‑4‑12B‑it** garnering 890 likes and almost 676k downloads. NVIDIA’s **LocateAnything‑3B** shines in the vision‑to‑text space, topping the weekly likes at 1,806. The community‑driven quantized Gemma and Qwen3.6 models are gaining traction, demonstrating a surge in low‑latency inference solutions. Meanwhile, the diffusion‑based **Ideogram‑4‑fp8** shows a modest rise, hinting at growing interest in fp8‑accelerated image generation.

---

### 2. Trending Models

#### 🧠 Language Models
| Model (link) | Author | Likes | Downloads | Summary |
|--------------|--------|-------|-----------|---------|
| **google/gemma-4-12B-it** | google | **890** | **675,936** | Instruction‑tuned Gemini‑style LLM, fast and versatile for general‑purpose NLP. |
| **google/gemma-4-12B** | google | 504 | 140,221 | Base Gemma‑4‑12B, ideal for downstream fine‑tuning. |
| **unsloth/gemma-4-12b-it-GGUF** | unsloth | 551 | 711,706 | GGUF quantized for ultra‑fast mobile inference with minimal loss. |
| **google/gemma-4-12B-it-qat-q4_0-gguf** | google | 124 | 96,749 | Fully quantized (Q4_0) Gemma‑4‑12B‑it, striking a balance between speed and accuracy. |
| **deepseek-ai/DeepSeek-V4-Pro** | deepseek‑ai | **4,762** | 4,061,006 | Conversational LLM with a massive user base, highlighting DeepSeek’s rise. |

#### 🎨 Multimodal & Generation
| Model (link) | Author | Likes | Downloads | Summary |
|--------------|--------|-------|-----------|---------|
| **nvidia/LocateAnything-3B** | nvidia | **1,806** | 131,794 | Vision‑to‑text model that localizes text in images, ideal for accessibility tools. |
| **ideogram-ai/ideogram-4-fp8** | ideogram‑ai | 474 | 7,170 | FP8‑accelerated text‑to‑image diffusion model, delivering high‑fidelity visuals. |
| **ideogram-ai/ideogram-4-nf4** | ideogram‑ai | 309 | 6,124 | NF4 quantized version, enabling cloud‑scale inference with reduced bandwidth. |
| **google/diffusiongemma-26B-A4B-it** | google | 248 | 0 | Diffusion‑enhanced Gemma‑26B, bridging LLMs and image generation. |
| **ByteDance/Bernini-R** | ByteDance | 212 | 305 | Image‑to‑video synthesis model, the first large‑scale repo in this niche. |

#### 🔧 Specialized Models
| Model (link) | Author | Likes | Downloads | Summary |
|--------------|--------|-------|-----------|---------|
| **CohereLabs/North-Mini-Code-1.0** | CohereLabs | 262 | 1,859 | Instruction‑tuned code generation LLM, useful for developer productivity. |
| **nvidia/nemotron-3.5-asr-streaming-0.6b** | nvidia | 349 | 4,965 | Streaming ASR with cache‑aware optimizations, suited for real‑time transcription. |
| **bosonai/higgs-audio-v3-tts-4b** | bosonai | 325 | 19,948 | Text‑to‑speech TTS model fine‑tuned on high‑quality audio datasets. |
| **MisoLabs/MisoTTS** | MisoLabs | 186 | 0 | Experimental TTS pipeline, popular among audio research labs. |

#### 📦 Fine‑tunes & Quantizations
| Model (link) | Author | Likes | Downloads | Summary |
|--------------|--------|-------|-----------|---------|
| **unsloth/gemma-4-12B-it-qat-GGUF** | unsloth | 191 | 148,252 | QAT‑quantized Gemma‑4‑12B‑it for edge deployment. |
| **unsloth/diffusiongemma-26B-A4B-it-GGUF** | unsloth | 94 | 0 | GGUF diffusion‑Gemma for low‑latency image‑text generation. |
| **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** | HauhauCS | **1,634** | 3,057,541 | Uncensored Qwen3.6 with MoE, demonstrating community‑customized policies. |
| **nex-agi/Nex-N2-Pro** | nex‑agi | 181 | 1,185 | Qwen3.5‑based expert model tailored for domain‑specific knowledge. |

---

### 3. Ecosystem Signal  
Gemma‑4 families dominate the language space, with both base and instruction‑tuned variants attracting bulk downloads, indicating sustained interest in high‑capacity yet efficient LLMs. NVIDIA’s vision models continue to lead the multimodal arena, thanks to versatile pipelines that lower the barrier to image‑text applications. Meanwhile, the surge in GGUF and QAT‑quantized releases—especially from unsloth—shows a clear shift toward deployment‑ready, edge‑friendly models. Proprietary releases (Google, NVIDIA, DeepSeek) still hold a majority of likes, but the community‑driven fine‑tunes and quantized variants are quickly catching up, underscoring a democratization trend. Audio and code generation remain smaller niches, yet they exhibit steady growth, suggesting a widening spectrum of specialized use‑cases.

---

### 4. Worth Exploring  
1. **nvidia/LocateAnything-3B** – Its high weekly likes and robust downloads signal a mature implementation for vision‑to‑text tasks; ideal for building accessibility tools or multimodal search engines.  
2. **unsloth/gemma-4-12b-it-GGUF** – Combines the power of Gemma‑4‑12B‑it with state‑of‑the‑art GGUF quantization, offering near‑native speed on consumer GPUs, perfect for real‑time inference demonstrations.  
3. **ideogram-ai/ideogram-4-fp8** – As the first FP8‑accelerated text‑to‑image model, it provides a benchmark for next‑gen diffusion efficiency; worthwhile for research into high‑throughput generative pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*