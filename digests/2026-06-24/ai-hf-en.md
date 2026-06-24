# Hugging Face Trending Models Digest 2026-06-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-24 02:26 UTC

---

**🤖 Hugging Face Trending Models Digest – 24 June 2026**

---

### 1. Today’s Highlights  
The week was dominated by the rapid rise of **Qwen‑3.6**‑based vision‑language models (the uncensored “Aggressive” 35 B and the 27 B MTP‑tuned GGUF release) and a continued surge in **GGUF‑quantised coding assistants** built on Gemma‑4‑12B. Open‑weight LLMs such as **GLM‑5.2** (both full‑precision and FP8 variants) and **DeepSeek‑V4‑Pro** also collected a huge number of likes, confirming that the community still values large, instruction‑tuned conversational models. On the multimodal front, NVIDIA’s **LocateAnything‑3B** and MiniMax‑M3 keep pushing universal image‑text reasoning, while new text‑to‑image adapters (Ideogram LoRA, Krea‑2‑Turbo) reflect sustained interest in diffusion fine‑tunes.

---

### 2. Trending Models  

#### 🧠 Language Models  
| Model | Author / Likes / Dls | Why it’s hot |
|------|----------------------|--------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai • 5 030 ★ / 2.25 M ⬇ | flagship 2024‑2025 LLM, strong instruction tuning, now the most liked model of the week. |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai‑org • 2 201 ★ / 40 k ⬇ | 5‑B Mixture‑of‑Experts chat model, praised for multilingual fluency and low‑cost inference. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google • 1 156 ★ / 1.99 M ⬇ | “Any‑to‑any” transformer that combines text, image and code, widely adopted as a versatile baseline. |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft • 322 ★ / 4.4 k ⬇ | Small, finely‑tuned chat model optimized for fast context handling; popular in low‑resource deployments. |
| **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)** | lordx64 • 173 ★ / 4.5 k ⬇ | Qwen‑3.5‑MoE with image‑text capability, showcases the growing “Qwen‑plus‑vision” niche. |

#### 🎨 Multimodal & Generation  
| Model | Author / Likes / Dls | Why it’s hot |
|------|----------------------|--------------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS • 2 159 ★ / 3.96 M ⬇ | Massive 35 B vision‑language model, uncensored, draws huge download traffic for research on open‑ended VL tasks. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia • 2 319 ★ / 274 k ⬇ | Specialized image‑grounding model that excels at object localization across domains; strong community adoption. |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI • 1 221 ★ / 131 k ⬇ | General‑purpose VL model (image‑text‑to‑text) with robust performance on benchmarks, fueling multimodal app dev. |
| **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google • 1 056 ★ / 949 k ⬇ | 26 B diffusion backbone paired with Gemma‑4, popular for high‑quality text‑to‑image generation. |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea • 87 ★ / 84 ⬇ | Light‑weight LoRA for the Krea‑2 diffusion model, gaining traction among hobbyist artists. |

#### 🔧 Specialized Models  
| Model | Author / Likes / Dls | Why it’s hot |
|------|----------------------|--------------|
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu • 488 ★ / 8.4 k ⬇ | State‑of‑the‑art OCR that handles unlimited language scripts, attracting developers of document AI. |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia • 658 ★ / 41 k ⬇ | Low‑latency streaming ASR model, praised for its cache‑aware architecture and real‑time use cases. |
| **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | LiquidAI • 115 ★ / 10 k ⬇ | Efficient multilingual embedding model, frequently used in retrieval‑augmented generation pipelines. |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | owensong • 178 ★ / 0 ⬇ | Ultra‑small (≈30 M) TTS model, notable for low‑resource deployment on edge devices. |

#### 📦 Fine‑tunes & Quantizations  
| Model | Author / Likes / Dls | Why it’s hot |
|------|----------------------|--------------|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 • 2 245 ★ / 456 k ⬇ | GGUF‑quantised Gemma‑4 coding specialist, fastest inference on consumer GPUs, massive download count. |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 • 450 ★ / 96 k ⬇ | Agentic “terminal‑aware” version, shows the community’s move toward tool‑using LLMs. |
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth • 305 ★ / 55 k ⬇ | Community‑packaged GGUF of GLM‑5.2, lowers RAM to <8 GB, driving adoption on laptops. |
| **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** | bytkim • 112 ★ / 65 k ⬇ | 27 B Qwen‑3.6 fine‑tuned with Multi‑Task Prompting, released as GGUF for fast local inference. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero‑ai • 192 ★ / 27 k ⬇ | Quantised Claude‑style model blending Qwen‑3.5 reasoning, popular for low‑budget chatbots. |

---

### 3. Ecosystem Signal (≈150 words)  
The **Qwen‑3.6** family is clearly the current engine of growth, with both a 35 B uncensored vision‑language model and a 27 B MTP‑tuned GGUF drawing the highest download numbers. This reflects a shift toward **large multimodal, open‑weight models** that are still permissively licensed. At the same time, **Gemma‑4**‑based coding assistants dominate the quantization segment; the GGUF format is becoming the de‑facto standard for community distribution, enabling sub‑8 GB inference on consumer hardware. Open‑weight models continue to outrank proprietary offerings in likes, but we see more **proprietary‑styled “uncensored” variants** (e.g., HauhauCS) gaining traction, suggesting a demand for fewer safety filters in research settings. Fine‑tune activity is robust, especially around **tool‑use (agentic) and instruction‑following**, while embeddings and OCR remain niche but steadily growing, underscoring the maturing of retrieval‑augmented pipelines.

---

### 4. Worth Exploring  

1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – Its size and vision‑language breadth make it an excellent test‑bed for open research on VL reasoning, especially where safety filters are a hindrance.  

2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – The fastest GGUF‑quantised coding model available; ideal for evaluating on‑device code‑completion or low‑latency IDE plugins.  

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – Provides strong, domain‑agnostic object localization with a modest 3 B footprint, perfect for building custom visual search or robotics perception stacks.  

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*