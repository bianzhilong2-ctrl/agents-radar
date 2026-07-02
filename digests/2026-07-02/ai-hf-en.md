# Hugging Face Trending Models Digest 2026-07-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-02 02:26 UTC

---

## 📰 Hugging Face Trending Models Digest (2026‑07‑02)

---

### 1. Today's Highlights  
The community is buzzing around a wave of **GGUF‑quantized** releases from several research labs, pushing 35‑billion‑parameter models into CPU‑friendly sizes while preserving strong reasoning capabilities. Simultaneously, **multimodal vision‑to‑text** pipelines such as *nvidia/LocateAnything‑3B* and *deepreinforce‑ai/Ornith‑1.0‑35B* are gaining traction for real‑world grounding tasks. Finally, a handful of unrestricted “uncensored” checkpoints (e.g., *HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive*) are attracting attention for safety‑critical research and open‑source experimentation.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat models, instruction‑tuned)  
| Model | HF Link | Author | Likes | Downloads | Trending Note |
|-------|---------|--------|-------|-----------|---------------|
| **zai‑org/GLM‑5.2** | https://huggingface.co/zai-org/GLM-5.2 | zai‑org | 3,172 | 159,967 | State‑of‑the‑art MoE architecture with strong conversational abilities and low latency. |
| **deepreinforce‑ai/Ornith‑1.0‑9B** | https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B | deepreinforce-ai | 368 | 191,409 | Highly efficient 9‑B‑parameter model with powerful reasoning and multi‑turn dialogue support. |
| **Qwen/Qwen‑AgentWorld‑35B‑A3B** | https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B | Qwen | 498 | 34,371 | 35‑B MoE model designed for multi‑agent orchestration and tool‑use scenarios. |
| **deepreinforce‑ai/Ornith‑1.0‑35B** | https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B | deepreinforce-ai | 293 | 135,452 | 35‑B reasoning‑focused checkpoint with robust instruction following. |
| **nvidia/GLM‑5.2‑NVFP4** | https://huggingface.co/nvidia/GLM-5.2-NVFP4 | nvidia | 200 | 136,933 | NVIDIA‑optimized version with NVFP4 kernels, delivering faster inference on GPUs. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  
| Model | HF Link | Author | Likes | Downloads | Trending Note |
|-------|---------|--------|-------|-----------|---------------|
| **bassamh/SDXL‑Non‑Realistic‑Enhance‑v1‑5‑SDXL‑30** | https://huggingface.co/bassamh/SDXL-Non-Realistic-Enhance-v1-5-SDXL-30 | bassamh | 2,784 | 106,677 | Specialized diffusion variant that improves non‑photorealistic rendering while preserving texture fidelity. |
| **nvidia/LocateAnything‑3B** | https://huggingface.co/nvidia/LocateAnything-3B | nvidia | 2,547 | 896,058 | Vision‑to‑text model excelling at grounding objects in complex scenes for interactive perception pipelines. |
| **krea/Krea‑2‑Turbo** | https://huggingface.co/krea/Krea-2-Turbo | krea | 438 | 56,953 | High‑speed text‑to‑image diffusion engine optimized for rapid prototyping. |
| **fal/LTX‑2.3‑3DREAL‑LoRA** | https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA | fal | 137 | 0 | LoRA weights enabling 3‑D realistic rendering in existing diffusion pipelines. |

#### 🔧 Specialized Models (code, math, medical, embeddings)  
| Model | HF Link | Author | Likes | Downloads | Trending Note |
|-------|---------|--------|-------|-----------|---------------|
| **yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF** | https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF | yuxinlu1 | 2,553 | 597,090 | Code‑centric GGUF checkpoint with strong reasoning and language generation capabilities. |
| **unsloth/GLM‑5.2‑GGUF** | https://huggingface.co/unsloth/GLM-5.2-GGUF | unsloth | 490 | 212,201 | GGUF‑quantized GLM‑5.2 offering a balance of accuracy and CPU‑friendliness for research notebooks. |
| **bugtraceai/BugTraceAI‑CORE‑Ultra‑27B‑Q6** | https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6 | BugTraceAI | 109 | 3,377 | Security‑oriented model fine‑tuned for vulnerability detection and offensive‑security reasoning. |

#### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)  
| Model | HF Link | Author | Likes | Downloads | Trending Note |
|-------|---------|--------|-------|-----------|---------------|
| **deepreinforce‑ai/Ornith‑1.0‑9B‑GGUF** | https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF | deepreinforce-ai | 368 | 191,409 | Same checkpoint as #3 but delivered in GGUF for on‑device inference. |
| **unsloth/Qwen‑AgentWorld‑35B‑A3B‑GGUF** | https://huggingface.co/unsloth/Qwen-AgentWorld-35B-A3B-GGUF | unsloth | 129 | 196,441 | 35‑B MoE model quantized to GGUF, enabling powerful multi‑agent workflows on limited hardware. |
| **huihui‑ai/Huihui‑GLM‑5.2‑abliterated‑GGUF** | https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF | huihui-ai | 115 | 901 | Community‑abliterated GLM‑5.2 checkpoint aimed at reducing bias while preserving performance. |
| **yuxinlu1/gemma‑4‑12B‑agentic‑fable5‑composer2.5‑v2‑3.5x‑tau2‑GGUF** | https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF | yuxinlu1 | 920 | 288,741 | Agentic composer model (GGUF) excelling at structured code generation and terminal interaction. |
| **deepreinforce‑ai/Ornith‑1.0‑35B‑GGUF** | https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF | deepreinforce-ai | 186 | 5,792 | 35‑B reasoning checkpoint in CPU‑compatible GGUF format. |

---

### 3. Ecosystem Signal (≈150 words)  
The current Hugging Face landscape shows a **polarized split between open‑weight giants and community‑driven quantizations**. MoE‑based families such as GLM‑5.2 and Qwen‑AgentWorld dominate the high‑parameter tier, with several projects offering **GGUF or AWQ variants** that shrink 30‑+ B models to sub‑5 GB footprints without sacrificing instruction fidelity. This democratizes access to powerful reasoning engines on commodity hardware, spurring experimentation in edge AI and on‑device personal assistants. At the same time, **restricted “uncensored” releases** (e.g., *HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive*) are creating niche demand for transparent safety research, while diffusion‑centric pipelines like *LocateAnything‑3B* illustrate a growing convergence of vision, language, and grounding capabilities. Overall, the ecosystem is moving fast toward **compressible, multimodal, and agent‑oriented models**, with a vibrant community driving both performance improvements and practical deployment tooling.

---

### 4. Worth Exploring  
- **zai‑org/GLM‑5.2** – Boasts the highest likes among language models and a robust MoE architecture that delivers state‑of‑the‑art instruction following with modest latency; ideal for anyone evaluating next‑generation open LLMs.  
- **nvidia/LocateAnything‑3B** – Combines high‑quality vision grounding with a massive 896k download base, making it a strong candidate for building interactive perception pipelines that can power robotics or AR applications.  
- **unsloth/Qwen‑AgentWorld‑35B‑A3B‑GGUF** – The 35‑B MoE checkpoint quantized to GGUF brings multi‑agent orchestration capabilities to CPU‑only environments; a compelling testbed for researching scalable, on‑device agent frameworks.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*