# Hugging Face Trending Models Digest 2026-06-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-26 02:30 UTC

---

**Hugging Face Trending Models Digest – 26 June 2026**

---

## 1. Today’s Highlights
The week is dominated by two clear narratives: the rapid consolidation of **GLM‑5.2** as a versatile multilingual chat engine (both the original transformer checkpoint and the lightweight GGUF version are soaring), and the continued explosion of **Gemma‑4‑12B**‑based community models that target coding, agentic workflows, and multimodal vision extensions. Meanwhile, **Qwen‑3.6**‑based vision‑language and uncensored variants are attracting massive download volumes, underscoring the community’s appetite for large, open‑weight multimodal models. Quantized GGUF releases (especially from the *yuxinlu1* and *HauhauCS* repos) are also gaining traction, reflecting the push to run powerful LLMs on edge hardware.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai‑org | 2,480 / 67 k | Flagship 5‑billion‑parameter multilingual chat model; strong safety‑tuned finetune and MOE‑DSA architecture. |
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 5,061 / 1.88 M | Enterprise‑grade 30B conversational model; high benchmark scores and broad language coverage. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1,178 / 2.19 M | 12B “instruction‑tuned” checkpoint; used as the base for many community forks (coding, agentic). |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft | 345 / 5.3 k | Small (4B) Qwen‑3‑derived model tuned for rapid “context‑window” inference. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 2,237 / 3.52 M | Large (35B) uncensored Qwen‑3.6 MOE; popular for research requiring unrestricted output. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,365 / 407 k | General‑purpose vision‑language model for grounding and object localisation; widely adopted in robotics pipelines. |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 1,241 / 154 k | Multimodal VL model with strong OCR & PDF extraction capabilities, driving a surge in document‑AI use‑cases. |
| **[HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)** | HauhauCS | 83 / 15 k | First 12B Gemma‑4 checkpoint quantized with QAT and equipped with vision adapters, enabling on‑device multimodal inference. |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea | 243 / 2.9 k | Fast diffusion model (Turbo) built on Krea‑2‑Raw, gaining attention for low‑latency image generation. |
| **[boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)** | Boogu | 123 / 824 | Small edit‑focused diffusion model (English/Chinese) that’s easy to plug into UI tools. |

### 🔧 Specialized Models (code, math, embeddings, speech)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 2,367 / 495 k | GGUF‑quantized Gemma‑4 coder fine‑tuned on Fable5; top‑ranked for code generation on edge devices. |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 | 618 / 165 k | Agentic‑oriented variant with tool‑use prompting; popular among autonomous‑agent research. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 695 / 50 k | Ultra‑light 600 M streaming ASR model; widely integrated in low‑latency voice assistants. |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | owensong | 201 / 0 | 5 M parameter TTS model targeting micro‑controller deployment; early‑adopter buzz. |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI | 715 / 51 k | Qwen‑2‑based 3B model fine‑tuned for math reasoning; strong performance on competition datasets. |

### 📦 Fine‑tunes & Quantizations (GGUF, AWQ, community‑trained)

| Model | Author | Likes / Downloads | Why it’s trending |
|-------|--------|-------------------|-------------------|
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth | 386 / 88 k | Community‑packaged GGUF of GLM‑5.2 for CPU‑only inference; benefits from Unsloth’s speed tricks. |
| **[empero-ai/Qwydhos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero‑ai | 490 / 134 k | 9B Qwen‑3.5 model quantized to 1 M parameters with GGUF; showcases extreme compression without collapse. |
| **[HauhauCS/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 342 / 4.60 M | NVIDIA Model Optimizer‑processed checkpoint (FP4) for fast inference on GPUs; a reference for large‑scale deployment. |
| **[Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)** | Jackrong | 90 / 19 k | 27B Qwen‑3.6 coder fine‑tuned and GGUF‑packed for compatibility with llama.cpp; fills the high‑end code‑LLM niche. |
| **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | deepreinforce‑ai | 92 / 0 | MIT‑licensed 35B GGUF model; early‑access for researchers exploring open‑weight LLMS at scale. |

---

## 3. Ecosystem Signal (100‑200 words)

The current wave is clearly **multilingual, open‑weight LLMs**—GLM‑5.2, Gemma‑4, and Qwen‑3.6—being iteratively released in both full‑precision transformers and highly‑compressed GGUF formats. Community actors are capitalising on the “instruction‑tuned” backbone (Gemma‑4‑IT, GLM‑5.2‑IT) to spin out specialised coders, agentic assistants, and vision‑language hybrids, driving a surge in **domain‑specific fine‑tunes**. Quantization is no longer a niche tweak; GGUF checkpoints of 9‑12 B models now dominate the weekly‑likes chart, indicating that edge deployment (mobile, single‑GPU) is a priority. Proprietary‑only offerings are shrinking—most top‑downloaded models are MIT/Apache‑licensed, and even the largest uncensored Qwen‑3.6 variant is openly shared. Meanwhile, **multimodal grounding models** (LocateAnything, MiniMax‑M3) are gaining traction as foundational perception layers for robotics and document AI, suggesting a convergence of language and vision pipelines. The ecosystem is moving toward **standardised quantization formats (GGUF, FP4) and modular fine‑tunes**, enabling rapid prototyping across hardware tiers.

---

## 4. Worth Exploring  

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – The flagship multilingual chat model with MOE‑DSA architecture; ideal for research on scaling efficiency and cross‑lingual alignment.  

2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – State‑of‑the‑art code generation at 12 B, GGUF‑quantized for CPU/GPU edge; a practical benchmark for agentic coding assistants.  

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – Compact vision‑language model that excels at object grounding and scene understanding; perfect for prototyping robotics perception or document layout analysis.  

These three span the core trends (multilingual LLM, efficient code‑LLM, and multimodal grounding) and provide openly licensed checkpoints ready for immediate experimentation.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*