# Hugging Face Trending Models Digest 2026-06-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-08 07:41 UTC

---

**Today's Highlights**  
Hugging Face’s leaderboard is dominated by Nvidia‑backed releases, with **DeepSeek‑V4‑Pro** (5.4 M downloads) and **Qwen3.6‑35B‑A3B‑Uncensored** (3.0 M downloads) taking the top spots. The community is gravitating toward high‑performance multimodal models such as **Sulphur‑2‑base** (1.7 M downloads) for text‑to‑video and **ideogram‑4‑fp8** for fast text‑to‑image generation. Quantized, low‑precision variants remain hot: Uns loth’s **Gemma‑4‑12B‑it‑GGUF** and **Qwen3.6‑27B‑MTP‑GGUF** combine speed and fidelity, while Nvidia’s **Cosmos3‑Super** diffusers introduce efficient text‑to‑image pipelines.

---

### Trending Models

#### 🧠 Language Models  
| Model (Link) | Author | Likes | Downloads | What it is & why it’s trending |
|--------------|--------|-------|-----------|--------------------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek‑ai | 4 705 | 5 399 597 | A 4B‑parameter conversational LLM fine‑tuned on open‑society data, offering competitive chat performance while remaining lightweight for edge deployment. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1 531 | 3 036 465 | A 35B MoE‑enhanced Qwen version “uncensored” for unrestricted dialogue, gaining traction for its balance of capacity and freedom. |
| [unsloth/gemma-4-12B-it-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-GGUF) | unsloth | 467 | 568 158 | Lightweight GGUF‑quantized Gemma fine‑tuned for instruction following; popular for rapid fine‑tuning on modest hardware. |
| [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 779 | 114 329 | A 1B Chinese‑centric LLM derived from CPM‑5, admired for high‑quality Chinese instruction alignment. |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | 160 | 49 784 | 550B‑parameter transformer optimized for BF16 inference, buffering for next‑gen data‑center workloads. |

#### 🎨 Multimodal & Generation  
| Model (Link) | Author | Likes | Downloads | What it is & why it’s trending |
|--------------|--------|-------|-----------|--------------------------------|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1 550 | 121 594 | Vision‑to‑text model that localises objects for grounded reasoning, widely adopted in downstream VQA tasks. |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram‑ai | 362 | 4 377 | FP8‑quantized text‑to‑image diffusion that drastically cuts GPU memory, attracting creative designers. |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun‑ai | 349 | 43 196 | Vision‑language model converting images to descriptive text; its energy‑efficient flash architecture suits mobile inference. |
| [nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) | nvidia | 199 | 34 104 | Ultra‑compact text‑to‑image generator, ideal for edge and embed‑system deployments. |
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1 589 | 1 707 062 | Text‑to‑video diffusion that balances quality with speed, gathering a strong community following. |

#### 🔧 Specialized Models  
| Model (Link) | Author | Likes | Downloads | What it is & why it’s trending |
|--------------|--------|-------|-----------|--------------------------------|
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 266 | 3 957 | Streaming ASR model optimized for low‑latency voice assistants. |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 205 | 7 557 | Text‑to‑speech powered by Qwen‑based LLM, noted for natural prosody. |
| [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | 145 | 0 | End‑to‑end neural TTS aiming for lifelike voice synthesis, still maturing. |
| [google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2) | google | 137 | 13 338 | Real‑time text‑to‑audio conversion using lightweight TFLite models, popular among audio‑centric startups. |

#### 📦 Fine‑tunes & Quantizations  
| Model (Link) | Author | Likes | Downloads | What it is & why it’s trending |
|--------------|--------|-------|-----------|--------------------------------|
| [unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | unsloth | 127 | 85 842 | QAT‑trained GGUF variant for ultra‑fast inference on edge GPUs. |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 690 | 1 186 648 | MTP‑quantized Qwen 27B GGUF, balancing speed and accuracy for large‑scale inference. |
| [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 201 | 1 185 362 | NVFP4 quantized Qwen3.6, enabling 4‑bit precision while retaining flagship performance. |
| [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video) | nvidia | 116 | 4 515 | Image‑to‑video diffusion streamlined for decent FPS at modest GPU cost. |
| [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) | nvidia | 124 | 5 075 | Text‑to‑image generation with an emphasis on semantic accuracy and reduced memory footprint. |

---

### Ecosystem Signal  
The current Hugging Face landscape shows a pronounced shift toward **high‑capacity, fine‑tuned foundational models** (DeepSeek‑V4‑Pro, Qwen3.6) coupled with **massive multimodal backbones** (Cosmos, Sulphur). Proprietary vendors, especially Nvidia and ByteDance, dominate the top spots, yet community‑driven quantizations—Uns loth’s GGUF releases and Nvidia’s FP8/FP4 variants—are rapidly bringing large models to sub‑GPU consumers. Open‑weight LLMs stay visible but are increasingly hybridized with low‑precision formats, reflecting a pragmatic balance between performance and resource constraints. The upward trend in **text‑to‑video and real‑time audio generation** signals growing application readiness in creative and interactive domains.

---

### Worth Exploring  
1. **unsloth/gemma-4-12B-it-GGUF** – A highly compressed, instruction‑tuned Gemma offers a cost‑effective entry point for custom chatbots on commodity hardware.  
2. **SulphurAI/Sulphur-2-base** – This text‑to‑video diffusion strikes a sweet spot between speed and visual fidelity; ideal for prototyping short‑form video content.  
3. **deepseek-ai/DeepSeek-V4-Pro** – Its conversational tuning and low footprint make it a top candidate for deploying a full‑featured conversational agent in a cloud‑scale setting.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*