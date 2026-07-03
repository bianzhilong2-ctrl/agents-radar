# Hugging Face Trending Models Digest 2026-07-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-03 02:01 UTC

---

**📅 Hugging Face Trending Models Digest – 3 July 2026**

---

### 1. Today’s Highlights  
The week’s top‑liked models are dominated by **multimodal Qwen‑3.5/3.6 family releases** (e.g., `empero‑ai/Qwythos-9B‑Claude‑Mythos‑5‑1M‑GGUF`, `HauhauCS/Qwen3.6-35B‑A3B‑Uncensored‑HauhauCS‑Aggressive`) and a strong surge of **GGUF‑quantized variants** that make 30 B‑plus models runnable on consumer‑grade hardware. China’s Baidu pushes the OCR frontier with `Unlimited‑OCR`, while the open‑source community continues to iterate on **code‑focused Gemini/Gemma forks** (`yuxinlu1/gemma‑4‑12B‑agentic‑fable5‑composer2.5‑v2‑GGUF`). NVIDIA’s Model Optimizer (NVFP4) pipelines are also gaining traction, highlighting a growing focus on production‑ready model compression.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author & Stats | Why it’s Trending |
|-------|----------------|-------------------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai‑org • 3,256 ♥ · 176 k ⬇️ | A 5.2 B MoE LLM that out‑performs many 7 B models on Chinese & multilingual benchmarks, driving a wave of GLM‑based research. |
| **[deepreinforce-ai/Ornith-1.0-35B‑GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | deepreinforce‑ai • 658 ♥ · 284 k ⬇️ | 35 B Qwen‑3.5‑MOE quantized to GGUF, enabling desktop inference with near‑enterprise quality. |
| **[deepreinforce-ai/Ornith-1.0-9B‑GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** | deepreinforce‑ai • 397 ♥ · 255 k ⬇️ | The 9 B sibling of Ornith‑35B, popular for low‑latency chat bots on edge devices. |
| **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | deepseek‑ai • 303 ♥ · 8 k ⬇️ | Pro‑level variant of DeepSeek‑V4, marketed for enterprise R‑AG pipelines; still early but gaining attention. |
| **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Qwen • 511 ♥ · 39 k ⬇️ | 35 B agent‑oriented model with integrated vision‑language capabilities, fueling “agent‑world” experiments. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author & Stats | Why it’s Trending |
|-------|----------------|-------------------|
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M‑GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero‑ai • 1,256 ♥ · 1.25 M ⬇️ | 9 B Qwen‑3.5 with Claude‑style instruction tuning, GGUF‑ready for image‑text‑to‑text pipelines; very high download count. |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu • 1,652 ♥ · 758 k ⬇️ | Claims “unlimited” language & script coverage; strong uptake in document‑processing pipelines. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia • 2,573 ♥ · 1.01 M ⬇️ | 3 B vision‑language model for zero‑shot object localisation, heavily used in robotics and surveillance demos. |
| **[krea/Krea-2‑Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea • 462 ♥ · 69 k ⬇️ | Fast, high‑fidelity text‑to‑image diffusion model based on the Krea‑2 raw checkpoint; popular in creative‑AI circles. |
| **[HauhauCS/Qwen3.6-35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS • 2,397 ♥ · 3.08 M ⬇️ | Uncensored 35 B multimodal model, GGUF‑packed, used for jailbreak research and unrestricted generation. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author & Stats | Why it’s Trending |
|-------|----------------|-------------------|
| **[yuxinlu1/gemma-4-12B‑agentic‑fable5‑composer2.5‑v2‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 • 963 ♥ · 314 k ⬇️ | 12 B Gemma‑4 fine‑tuned for autonomous tool‑use; GGUF makes it easy for local “agentic” experiments. |
| **[yuxinlu1/gemma-4-12B‑coder‑fable5‑composer2.5‑v1‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 • 2,573 ♥ · 614 k ⬇️ | Code‑generation specialist, top‑ranked in the “Gemma‑4 coding” sub‑community. |
| **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** | LiquidAI • 192 ♥ · 26 k ⬇️ | Small (230 M) language model focused on finance‑legal text; gaining traction as a cheap baseline. |
| **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** | BugTraceAI • 121 ♥ · 8 k ⬇️ | Security‑oriented LLM trained on vulnerability reports; used for automated pen‑testing suggestions. |

#### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author & Stats | Why it’s Trending |
|-------|----------------|-------------------|
| **[empero-ai/Qwythos-9B‑Claude‑Mythos‑5‑1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** | empero‑ai • 645 ♥ · 124 k ⬇️ | The original non‑GGUF checkpoint; many forks (GGUF, AWQ) reference it, showing high community reuse. |
| **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)** | deepreinforce‑ai • 312 ♥ · 185 k ⬇️ | Full‑precision 35 B version, serving as the source model for the GGUF and AWQ quantizations above. |
| **[nvidia/Qwen3.6-27B‑NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** | nvidia • 211 ♥ · 27 k ⬇️ | NVIDIA Model Optimizer (NVFP4) checkpoint, illustrating growing adoption of vendor‑specific quant pipelines. |
| **[nvidia/GLM-5.2‑NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** | nvidia • 208 ♥ · 159 k ⬇️ | Optimized GLM‑5.2 for NVIDIA GPUs, frequently paired with the open‑source GLM‑5.2 checkpoint. |
| **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | fal • 145 ♥ · 0 ⬇️ | LoRA adaptor for 3‑D video generation, gaining early interest from the emerging 3‑D content community. |

---

### 3. Ecosystem Signal  

The **Qwen‑3.5/3.6 family** is the clear engine of growth, with both open‑weight releases (e.g., Qwen‑AgentWorld, LocateAnything) and community‑driven quantizations (GGUF, NVFP4) exploding in likes and downloads. This surge reflects a maturation of the **“run‑anywhere”** paradigm: 30 B‑plus MoE models are being shipped in GGUF format, making high‑capacity inference feasible on laptops and even smartphones.  

Open‑source Chinese‑origin models (Qwen, GLM, Ornith) now dominate the top ranks, while **proprietary‑friendly pipelines** from NVIDIA (Model Optimizer) and Baidu (Unlimited‑OCR) illustrate a hybrid ecosystem where commercial entities release production‑grade checkpoints under permissive licenses.  

Quantization activity is noteworthy: **GGUF** is the de‑facto standard for community distribution, overtaking older AWQ/GPTQ formats, and the NVFP4 optimizer shows NVIDIA’s push to capture the high‑throughput inference market. Code‑specialized forks of Gemma‑4 have also become a micro‑trend, pointing to a demand for lightweight, tool‑use capable agents.  

Overall, the landscape is shifting from “large‑only” research models to **compact, multimodal, and highly‑optimized variants** that can be integrated into end‑user applications with minimal hardware overhead.

---

### 4. Worth Exploring  

1. **[empero-ai/Qwythos-9B‑Claude‑Mythos‑5‑1M‑GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – Best blend of instruction‑tuned reasoning, vision‑language capability, and GGUF‑level efficiency; ideal for building local multimodal assistants.  

2. **[yuxinlu1/gemma-4-12B‑coder‑fable5‑composer2.5‑v1‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – State‑of‑the‑art open‑source code generator, lightweight enough for desktop IDE plugins and performs strongly on benchmarked coding tasks.  

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – A versatile vision‑language model for zero‑shot object localisation; its small footprint and strong diffusion‑style grounding make it a must‑try for robotics and edge‑vision projects.  

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*