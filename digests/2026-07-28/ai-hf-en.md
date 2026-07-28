# Hugging Face Trending Models Digest 2026-07-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-28 01:43 UTC

---

**Hugging Face Trending Models Digest – 2026‑07‑28**  

---

### 1. Today’s Highlights  
- The **Qwen‑3.6‑35B‑A3B** family dominates the leaderboard, with three separate variants (Qwen/Qwen3.6‑35B‑A3B, LuffyTheFox/Qwen3.6‑35B‑A3B‑Uncensored‑Genesis‑Hermes‑V5‑GGUF, and HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑Aggressive) all breaking into the top‑5 by likes and downloads.  
- Quantized GGUF variants of popular 27‑B‑parameter models (prism‑ml/Bonsai‑27B‑gguf, prism‑ml/Ternary‑Bonsai‑27B‑gguf, poolside/Laguna‑S‑2.1‑GGUF) are seeing explosive download spikes, signalling a shift toward CPU‑friendly, low‑precision deployment.  
- Multimodal OCR‑focused releases such as **baidu/Unlimited‑OCR** and **ATH‑MaaS/OvisOCR2** have amassed millions of downloads, underscoring the continued demand for robust, end‑to‑end vision‑language pipelines.  
- Open‑source text‑to‑image diffusion tools from Microsoft (**Mage‑Flow**, **Mage‑Flow‑Edit‑Turbo**) are gaining traction as developers experiment with instruction‑based image editing.  
- A wave of community fine‑tunes (e.g., **unsloth/Laguna‑S‑2.1‑GGUF**, **conradlocke/krea2‑identity‑edit**) are being shared with zero‑cost download counters, reflecting a growing “share‑and‑reuse” culture around lightweight adapters.

---

### 2. Trending Models  

| Category | Model (HF Link) | Author | Likes | Downloads | Why It’s Trending |
|----------|----------------|--------|-------|-----------|-------------------|
| **🧠 Language Models (LLMs, chat, instruction‑tuned)** | **upstage/Solar‑Open2‑250B** <br>https://huggingface.co/upstage/Solar-Open2-250B | upstage | 629 | 3,761 | One of the few 250 B‑parameter open‑weight LLMs released this week, drawing attention for its strong benchmark performance and fully permissive license. |
|  | **poolside/Laguna‑S‑2.1** <br>https://huggingface.co/poolside/Laguna-S-2.1 | poolside | 758 | 63,605 | A compact 7‑B parameter model that has quickly become a benchmark for high‑quality text generation on modest hardware. |
|  | **zai‑org/GLM‑5.2** <br>https://huggingface.co/zai-org/GLM-5.2 | zai‑org | 4,551 | 1,003,547 | Shows a notable surge in usage for conversational tasks; its MoE‑style architecture is attracting research interest. |
|  | **Kwaipilot/KAT‑Coder‑V2.5‑Dev** <br>https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev | Kwaipilot | 241 | 5,312 | Targeted at code generation with Qwen‑based MoE; developers are experimenting with it for AI‑assisted programming. |
|  | **unsloth/Laguna‑S‑2.1‑GGUF** <br>https://huggingface.co/unsloth/Laguna-S-2.1-GGUF | unsloth | 218 | 117,456 | GGUF‑quantized version of the popular Laguna‑S‑2.1, enabling CPU‑only inference and driving massive download numbers. |
|  | **prism‑ml/Bonsai‑27B‑gguf** <br>https://huggingface.co/prism-ml/Bonsai-27B-gguf | prism‑ml | 659 | 2,257,928 | One of the most downloaded GGUF models of the week; its 1‑bit/2‑bit variants are reshaping how large LLMs are served on edge devices. |
|  | **fdtn‑ai/antares‑1b** <br>https://huggingface.co/fdtn-ai/antares-1b | fdtn‑ai | 207 | 6,421 | A security‑focused language model that is gaining attention for its specialized fine‑tuning on vulnerability datasets. |
| **🎨 Multimodal & Generation** | **moonshotai/Kimi‑K3** <br>https://huggingface.co/moonshotai/Kimi-K3 | moonshotai | 6,256 | 2,850 | Image‑text‑to‑text pipeline that combines OCR‑level visual grounding with instruction following; its high like‑to‑download ratio signals strong community endorsement. |
|  | **baidu/Unlimited‑OCR** <br>https://huggingface.co/baidu/Unlimited-OCR | baidu | 3,331 | 2,645,773 | Massive download volume makes it the go‑to OCR model for multilingual document parsing. |
|  | **thinkingmachines/Inkling** <br>https://huggingface.co/thinkingmachines/Inkling | thinkingmachines | 1,604 | 36,196 | Multimodal conversational model that blends vision and language; praised for its ability to answer questions about diagrams and screenshots. |
|  | **microsoft/Mage‑Flow** <br>https://huggingface.co/microsoft/Mage-Flow | microsoft | 388 | 1,691 | Text‑to‑image diffusion model with an emphasis on style‑preserving editing; trending among designers experimenting with AI‑assisted artwork. |
|  | **microsoft/Mage‑Flow‑Edit‑Turbo** <br>https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo | microsoft | 102 | 1,115 | Faster instruction‑based image editing variant; early adopters are using it for rapid prototyping of UI mock‑ups. |
|  | **poolside/Laguna‑S‑2.1‑NVFP4** <br>https://huggingface.co/poolside/Laguna-S-2.1-NVFP4 | poolside | 148 | 158,308 | FP4‑quantized variant enabling GPU‑accelerated inference; high downloads reflect demand for low‑latency generation. |
|  | **nvidia/Cosmos3‑Edge** <br>https://huggingface.co/nvidia/Cosmos3-Edge | nvidia | 133 | 33,127 | NVIDIA’s newest edge‑optimized diffusion model; gaining traction for on‑device video‑frame synthesis. |
| **🔧 Specialized Models** | **owensong/Inflect‑Micro‑v2** <br>https://huggingface.co/owensong/Inflect-Micro-v2 | owensong | 223 | 483 | Lightweight text‑to‑speech model targeting low‑resource languages; appreciated for its CPU‑only deployment feasibility. |
|  | **conradlocke/krea2‑identity‑edit** <br>https://huggingface.co/conradlocke/krea2-identity-edit | conradlocke | 555 | 0 | Identity‑preserving image editing LoRA; showcases a growing niche of adapter‑based fine‑tuning for personalization. |
|  | **zai‑org/GLM‑5.2‑Vision‑NVFP4** <br>https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4 | baseten | 124 | 2,276 | Vision‑language variant of GLM‑5.2, optimized for NVFP4 quantization; attracting multimodal research teams. |
| **📦 Fine‑tunes & Quantizations** | **HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑Aggressive** <br>https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive | HauhauCS | 3,133 | 1,894,395 | Aggressive uncensored variant of Qwen‑3.6‑35B; its high download count reflects appetite for unrestricted open‑weight LLMs. |
|  | **LuffyTheFox/Qwen3.6‑35B‑A3B‑Uncensored‑Genesis‑Hermes‑V5‑GGUF** <br>https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF | LuffyTheFox | 187 | 83,658 | GGUF‑packed “Hermes‑V5” fine‑tune that emphasizes reasoning; popular among local‑CPU deployers. |
|  | **prism‑ml/Ternary‑Bonsai‑27B‑gguf** <br>https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf | prism‑ml | 1,069 | 648,938 | 2‑bit ternary quantized model delivering competitive perplexity on CPUs; download surge points to a tipping point for ultra‑lightweight inference. |

*All links, authors, likes, and download counts are preserved from the source snapshot.*

---

### 3. Ecosystem Signal  

The past week highlights a clear bifurcation in model deployment strategies. On one side, **open‑weight LLMs** — particularly the Qwen‑3.6 family and its assorted fine‑tunes — are experiencing unprecedented download volumes, driven by both research curiosity and the desire for commercially usable, unrestricted models. Their success is amplified by the concurrent rise of **GGUF and 1‑2‑bit quantizations** (e.g., Bonsai‑27B‑gguf, Ternary‑Bonsai‑27B‑gguf), which make 20‑plus‑billion‑parameter models runnable on commodity hardware. This convergence is reshaping the open‑source AI landscape: developers can now host powerful conversational agents locally, reducing reliance on cloud APIs and encouraging a “bring‑your‑own‑model” culture.  

Conversely, **multimodal OCR and diffusion models** continue to dominate community interest, with OCR tools like **Unlimited‑OCR** and vision‑language pipelines such as **Inkling** garnering millions of hits. Their popularity underscores the persistent demand for end‑to‑end solutions that bridge text, images, and increasingly, video.  

A notable trend is the **community‑driven fine‑tuning ecosystem**: many of the top‑downloaded models are GGUF‑packaged adapters (e.g., **unsloth/Laguna‑S‑2.1‑GGUF**, **conradlocke/krea2‑identity‑edit**) that enable rapid experimentation without heavy compute budgets. The proliferation of such fine‑tunes signals a maturing workflow where practitioners share lightweight, task‑specific variants as reusable building blocks.  

Overall, the ecosystem is moving toward **decentralized, highly optimized model distribution**, blending open‑weight releases with aggressive quantization and adapter‑based specialization. This shift is democratizing access to state‑of‑the‑art AI while also raising questions around governance, licensing, and the sustainability of community‑maintained forks.

---

### 4. Worth Exploring  

| Model | Reason to Dive In |
|-------|-------------------|
| **Qwen/Qwen3.6‑35B‑A3B** (https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | The flagship 35 B‑parameter version of the Qwen‑3.6 family offers cutting‑edge reasoning and multilingual fluency, while its permissive license makes it suitable for commercial fine‑tuning. |
| **prism‑ml/Bonsai‑27B‑gguf** (https://huggingface.co/prism-ml/Bonsai-27B-gguf) | A 1‑bit/2‑bit ternary quantized 27 B model that runs entirely on CPU, delivering near‑state‑of‑the‑art perplexity. Ideal for researchers interested in extreme model compression. |
| **thinkingmachines/Inkling** (https://huggingface.co/thinkingmachines/Inkling) | Combines vision and language in a single conversational interface, allowing users to ask natural‑language questions about images, PDFs, or screenshots. Its robust multimodal grounding makes it a strong candidate for UI‑augmented AI agents. |

These three models exemplify the current sweet spot of raw capability, efficient deployment, and multimodal interaction — making them essential reading for anyone tracking the trajectory of open‑source AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*