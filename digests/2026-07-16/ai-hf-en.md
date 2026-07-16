# Hugging Face Trending Models Digest 2026-07-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-16 01:46 UTC

---

**Hugging Face Trending Models Digest – 2026‑07‑16**

---

### 1. Today's Highlights  
The top of the likes list is dominated by large multilingual and multimodal beasts: the 27‑B Qwen‑3.6 “A3B‑Uncensored” model from HauhauCS pulls in over **2.7 k likes** alongside an astonishing 2.4 M downloads. Meanwhile, **Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF**—with 2.2 k likes and over 2 M downloads—stands out as a highly‑compressed, Eagle‑style 9‑B model with a focus on reasoning. On the lighter side, the 2‑bit *Ternary‑Bonsai‑27B* released by prism‑ml re‑ignites interest in ultra‑low‑precision inference for edge devices. Across the board, we see a surge of GGUF‑quantized variants and a return of community‑made fine‑tunes, signalling a shift toward more democratized model deployment.

---

### 2. Trending Models  

#### 🧠 Language Models  
| Model (HF) | Author | Likes / Downloads | Summary |
|---|---|---|---|
| **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 2,760 / 2,443,871 | A 35‑B Qwen‑3.6 backbone fine‑tuned for uncensored chat with aggressive richness, driving high engagement. |
| **[empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero‑ai | 2,216 / 2,006,265 | 9‑B Claude‑style model quantized to GGUF (≈1 M‑parameter snapshot) aimed at reasoning tasks; its low‑memory layout fuels widespread downloads. |
| **[zai-org/GLM‑5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai‑org | 3,998 / 489,611 | 5‑B GLM‑5.2 MFA‑style model engineered for multilingual instruction following, achieving a high likes‑to‑download ratio due to strong community trust. |
| **[InternScience/Agents-A1江](https://huggingface.co/InternScience/Agents-A1)** | InternScience | 556 / 30,539 | A 3‑B Qwen‑3.5 MOE tuned for autonomous agent workflows, blending vision prompts with text prediction. |
| **[deepreinforce‑ai/Ornith‑1.0‑35B‑GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | deepreinforce‑ai | 894 / 1,533,354 | 35‑B Ornith model compressed in GGUF; a general LLM aiming at multilingual tasks with a 1‑token latency in Edge‑CPU deployments. |

#### 🎨 Multimodal & Generation  
| Model (HF) | Author | Likes$mail downloads | Summary |
|---|---|---|---|
| **[OpenMOSS‑Team/MOSS‑Transcribe‑Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS‑Team | 215 / 65,109 | Audio‑to‑text + diarization pipeline leveraging MOSS‑based models, useful for meeting analytics. |
| **[baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 2,002 / 1,715,301 | OCR feature‑extraction model tuned on 150M images, deployed as a lightweight endpoint for rapid character recognition. |
| **[bottlecapai/ThinkingCap‑Qwen3.6‑27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | bottlecapai | 366 / 6,208 | Image‑to‑text pipeline based on Qwen‑3.6, tailored for document summarization with chat‑style responses. |
| **[unsloth/Qwen3.6‑27B‑NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** | unsloth | 208 / 1,599,150 | NVFP4‑quantized Qwen‑3.6 model delivering fast multimodal inference for embedded GPUs, powered by a fine‑tuned vision‑language head. |
| **[robbyant/lingbot‑world‑v2‑14b‑causal‑fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** | robbyant | 99 / 0 | A 14‑B diffusion model harnessed for quick image‑to‑video generation using a world‑model backbone. |

#### 🔧 Specialized Models  
| Model (HF) | Author | Likes / Downloads | Summary |
|---|---|---|---|
| **[conradlocke/krea2‑identity‑edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | 307 / 0 | Lora‑based image editing on Krea‑2 that preserves identity, ideal for avatar creation. |
| **[mgwr/M87](https://huggingface.co/mgwr/M87)** | mgwr | 127 / 2,408 | Diffuser Lora tuned for text‑to‑image; leverages Krea‑2 Turbo as the base for faster rendering. |
| **[Alissonerdx/LTX‑Best‑Face‑ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Alissonerdx | 154 / 0 | Video‑to‑video identity preservation model, using IPT2V for reference‑based edits. |

#### 📦 Fine‑tunes & Quantizations  
| Model (HF) | Author | Likes / Downloads | Summary |
|---|---|---|---|
| **[prism‑ml/Ternary‑Bonsai‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism‑ml | 474 / 23 | A 27‑B Llama‑cpp model backed by ternary 2‑bit quantization; perfect for inference on 1‑core CPUs. |
| **[prism‑ml/Bonsai‑27B‑gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism‑ml | 269 / 513 | 1‑bit Llama‑cpp compression, ideal for small‑batch inference on edge devices. |
| **[GnLOLot/MiniCPM5‑1B‑Claude‑Depuis‑Opus‑Fable5‑Thinking‑GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | GnLOLot | 250 / 89,892 | 1‑B MiniCPM quantized in GGUF with a Claude‑style instruction tune, popular for local chat bots. |
| **[yuxinlu1/gemma‑4‑12B‑agentic‑fable5‑composer2.5‑v2‑3.5x‑tau2‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 | 1,198 / 468,629 | GGUF‑compressed Gemma‑4 aligned for agentic tasks, underpinning tool‑use and terminal automation. |
| **[nvidia/Nemotron‑Labs‑Audex‑30B‑A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** | nvidia | 156 / 1,332 | A 30‑B Nemotron‐Lab variant fine‑tuned for audio‑to‑text with aggressive artifact rejection. |

---

### 3. Ecosystem Signal  
The current landscape shows an unmistakable shift toward **community‑driven, low‑precision inference**. Models like *Ternary‑Bonsairoffenen* and *Bonsai‑27B* prove that 1‑/2‑bit compression is now viable even for 27‑B scales, opening the door to on‑device deployment. At the same time, **open‑weight large models** (Qwen‑3.6, GLM‑5.2, ornith‑35B) dominate downloads, suggesting that the community remains committed to transparent research. Proprietary tuning rather than outright training is also rising—fine‑tunes such as *Agents‑A1* and *ThinkingCap‑Qwen3.6* showcase the synergy between open backbones and specialized instruction sets. In multimodal space, OCR and audio‑to‑text continue to attract traffic, underscoring a consistently high demand for **real‑world input processing**. Overall, the ecosystem is gravitating toward **quantized, open‑source families** combined with **instruction‑tuned fine‑tunes**, striking a balance between performance, accessibility, and responsibility.

---

### 4. Worth Exploring  
1. **empero‑ai/Qwythos‑9B‑Claude‑My-char** – Its 1‑M‑parameter GGUF snapshot delivers Claude‑style reasoning at an affordable compute cost; ideal for rapid prototyping of question‑answer systems.  
2. **prism‑ml/Ternary‑Bonsai‑27B‑gguf** – As a 2‑bit, 27‑B model, it represents the frontier of edge inference; a must‑try if you’re building low‑latency chatbots on commodity hardware.  
3. **Deep Reinforce‑AI/Ornith‑1.0‑35B‑GGUF** – The largest model in this digest that still runs in GGUF; its high download count signals strong community trust, and it offers a competitive edge for multilingual tasks without the hardware load of a full 35‑B LLM.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*