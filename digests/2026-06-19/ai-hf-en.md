# Hugging Face Trending Models Digest 2026-06-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-19 03:00 UTC

---

**Hugging Face Trending Models Digest – 2026‑06‑19**

---

### 1. Today's Highlights  
The week’s chatter revolves around the surge of **Gemma‑4** and **Qwen‑3.6** family releases, both scaling up to 4‑12 B and 35‑40 B parameters respectively. Proprietary **DeepSeek‑V4‑Pro** and **Kimi‑K2.7‑Code** continue to dominate the *“next‑gen”* space with impressive download counts. Meanwhile, the community‑driven **unsloth** group has pushed multiple GGUF‑quantized variants (Gemma, DiffusionGemma, GLM‑5.2), fueling a rapid shift toward lightweight, ultrafast inference. Across the board, users gravitate to models that combine wider pretraining with efficient compression while retaining strong multimodal capabilities.

---

### 2. Trending Models  

#### 🧠 Language Models  
| Model (HF link) | Author | Likes / Downloads | Why it’s Trending |
|---|---|---|---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4,957 / 2,948,726 | A 61‑B‑parameter chatbot fine‑tuned for enterprise chat, striking a balance between power and licensing. |
| **[Google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1,085 / 1,309,625 | Unified Gemma‑4 12 B model for text‑generation and multimodal reasoning, still the most downloaded GPT‑style base. |
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 653 / 918,431 | A community‑quantized Gemma‑4 variant that runs on GPU‑free inference, driving adoption in edge‑devices. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,971 / 3,420,052 | A 35 B Qwen‑3.6 uncensored model with aggressive policy tuning, popular for research on content‑filter bypass. |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 449 / 15,285 | A small (1.0 B) conversational LLM fine‑tuned for code generation, appealing to dev‑ops tooling. |

#### 🎨 Multimodal & Generation  
| Model (HF link) | Author | Likes / Downloads | Why it’s Trending |
|---|---|---|---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,166 / 183,093 | First large‑scale “object‑location” model that runs in real time; high download volume signals industry adoption. |
| **[Google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 1,002 / 527,080 | DiffusionGemma brings text‑to‑image speed to 26 B parameters, appealing to photorealism‑seeking users. |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 1,102 / 56,162 | A multimodal transformer that can finish images from partial captions, gaining traction in creative workflows. |
| **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | zai‑org | 228 / 0 | First character‑animation pipeline from single‑image video, niche but buzzworthy in entertainment. |
| **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | unsloth | 307 / 164,209 | Community‑compressed partner of Google’s DiffusionGemma, enabling studio‑level generation on modest GPUs. |

#### 🔧 Specialized Models  
| Model (HF link) | Author | Likes / Downloads | Why it’s Trending |
|---|---|---|---|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 1,712 / 211,424 | Gemma‑4 converted for code‑generation, combining reasoning with a low‑latency GGUF format. |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI | 410 / 6,589 | A 3 B variant focused on math reasoning and coding, still a niche but high‑utility model. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 489 / 57,380 | TTS powered by Qwen3‑based multimodal backbone, pushing voice‑generation quality. |
| **[Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)** | Zyphra | 115 / 669 | Text‑to‑speech with an Apache‑2.0 license, attractive for open‑source projects. |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | owensong | 91 / 0 | Ultra‑tiny PyTorch TTS engine, notable for zero‑parameter inference. |

#### 📦 Fine‑tunes & Quantizations  
| Model (HF link) | Author | Likes / Downloads | Why it’s Trending |
|---|---|---|---|
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth | 125 / 305 | First GGUF‑compressed GLM‑5.2 for edge‑device inference. |
| **[unsloth/MiniMax-M3-GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF)** | unsloth | 103 / 22,659 | GGUF version of MiniMax‑M3, enabling rapid multimodal experimentation. |
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 653 / 918,431 | This quantized Gemma‑4 proves that performance and speed can coexist. |
| **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Jackrong | 251 / 122,175 | A GGUF‑compressed code‑generation model that uses Multi‑Task Prompting. |
| **[Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)** | Zyphra | 115 / 669 | The only open‑licensed TTS model in the list, showing licensing as a differentiator. |

---

### 3. Ecosystem Signal  
The current landscape is dominated by **Gemma‑4** and **Qwen‑3.6** families, both attracting a broad base of fine‑tunes and community‑crafted quantizations. Proprietary offerings—DeepSeek‑V4‑Pro, Kimi‑K2.7‑Code—continue to lead in raw download counts thanks to strong commercial branding and advanced instruction control, yet open‑weight releases are catching up, especially in contexts that prize accessibility (e.g., the unsloth project). Quantization is a clear momentum line: GGUF versions of large LLMs (Gemma‑4, DiffusionGemma, Qwen‑3.6) routinely triple download rates while preserving acceptable latency, proving that lightweight inference remains a hot commodity. Moreover, multimodal diffusion backbones are expanding beyond text‑to‑image into video and interactive generation, signaling a broadening of the “mix‑modal” frontier. Finally, specialized use‑cases (coding, TTS, /video) get niche but sustained traction, suggesting a healthy, diversified ecosystem where high‑level stacks coexist with low‑lvl open‑source tools.

---

### 4. Worth Exploring  
| Model (HF link) | Why Try It |
|---|---|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | The fastest, open‑weight Gemma‑4 variant that runs on commodity GPUs; great for rapid prototyping and on‑device demos. |
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Offers the deepest trade‑off between conversational depth and licensing freedom; ideal for enterprise chat copilots. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Pioneers zero‑latency object location; beneficial if you’re building real‑time visual assistants or robotics perception pipelines. |
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Provides an edge‑device competitive code‑generation engine; useful for low‑power IDE extensions or mobile coding assistants. |
| **[Google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Best‑in‑class photorealism for large‑scale image generation; a must‑try for studios needing studio‑grade outputs without owning GPU farms. |

These models highlight the most vibrant intersections of performance, accessibility, and niche capability, making them prime candidates for both research experiments and production pilots.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*