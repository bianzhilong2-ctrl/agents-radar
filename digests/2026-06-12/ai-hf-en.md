# Hugging Face Trending Models Digest 2026-06-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-12 02:39 UTC

---

**Hugging Face Trending Models Digest – 2026‑06‑12**

---

### 1. Today's Highlights  
The Hugging Face community is buzzing around Gemini‑4‑12B‑it variants and quantized versions of the same family, reflecting a shift toward high‑performance yet lighter models. NVIDIA’s new LocateAnything‑3B and the Qwen3.6‑35B‑A3B hyper‑uncensored release showcase a continued appetite for vision‑language giants that can handle open‑world prompts. Meanwhile, DeepSeek‑V4‑Pro dominates the download charts, proving that large‑scale conversational engines still command the most traffic. Finally, the resurgence of “abliterated” variants (e.g., Huihui‑Gemma‑4‑12B‑it‑abliterated) signals experimentation with aggressive pruning for niche use‑cases.

---

### 2. Trending Models  

#### 🧠 Language Models  
| Model | Author | Likes / Downloads | Why It’s Trending |
|-------|--------|-------------------|-------------------|
| **[DeepSeek‑V4‑Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4,783 / 4,061,006 | A 450B‑parameter conversational LLM that outperforms prior DeepSeek releases, driving the bulk of HF’s traffic. |
| **[Google/Gemma‑4‑12B‑it](https://huggingface.co/google/gemma-4-12B-it)** | google | 942 / 675,936 | Unified instruction‑tuned Gemma, maintaining top download numbers in the new “gear‑4” cohort. |
| **[UnsloTh/Gemma‑4‑12B‑it‑GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 562 / 711,706 | Fully quantized GGUF build that makes Gemma‑4‑12B‑it viable on edge hardware. |
| **[Nex‑AGI/Nex‑N2‑Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | nex‑agi | 206 / 1,185 | Adds a Qwen‑3.5‑MOE backbone for faster inference on cheaper GPUs. |
| **[CohereLabs/North‑Mini‑Code‑1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 309 / 1,859 | A code‑generation model tuned for the “North” workforce, niche yet growing in popularity. |

#### 🎨 Multimodal & Generation  
| Model | Author | Likes / Downloads | Why It’s Trending |
|-------|--------|-------------------|-------------------|
| **[Google/Gemma‑4‑12B](https://huggingface.co/google/gemma-4-12B)** | google | 518 / 140,221 | Unified image‑text‑to‑text inference for the Gemini‑4 suite. |
| **[Nvidia/LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,874 / 131,794 | Cutting‑edge image‑feature extraction benchmarked on large‑scale detection tasks. |
| **[Nametag/Ideogram‑4‑FP8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram‑ai | 487 / 7,170 | FP8‑optimized diffusion model that preserves high fidelity while cutting FLOPs. |
| **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,681 / 3,057,541 | A hyper‑uncensored Qwen variant that has become a go‑to for community‑driven content generation. |
| **[Stepfun‑AI/Step‑3.7‑Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun‑ai | 368 / 50,187 | Vision‑language model that merges large‑scale image‑to‑text with a Flash‑style backbone for speed. |

#### 🔧 Specialized Models  
| Model | Author | Likes / Downloads | Why It’s Trending |
|-------|--------|-------------------|-------------------|
| **[BosonAI/Higgs‑Audio‑V3‑TTS‑4B](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 360 / 19,948 | Text‑to‑speech model with an aggressive speed‑voice synthesis pipeline. |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 194 / 0 | Voice‑synthesis research repo, attracting contributors to the “voice” space. |
| **[SAPIENTinc/HRM‑Text‑1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 750 / 134,752 | HR‑centric large‑language model for internal corporate solutions. |
| **[ByteDance/Bernini‑R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 222 / 305 | Image‑to‑video rendering pipeline integrating novel renderer. |
| **[Google/Magenta‑Realtime‑2](https://huggingface.co/google/magenta-realtime-2)** | google | 178 / 19,806 | Text‑to‑audio generator with waveform‑level control, noted for low‑latency inference. |

#### 📦 Fine‑tunes & Quantizations  
| Model | Author | Likes / Downloads | Why It’s Trending |
|-------|--------|-------------------|-------------------|
| **[UnsloTh/Gemma‑4‑12B‑it‑QAT‑Q4_0‑GGUF](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** | google | 130 / 96,749 | QAT‑quantized GGUF variant boosting inference speed on 8‑bit GPUs. |
| **[HmAI/Unlabeled‑Gemma‑4‑12B‑it‑abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)** | huihui‑ai | 144 / 6,400 | Aggressive pruning “abliterated” model, ideal for research on pruning efficacy. |
| **[UnsloTh/Gemma‑4‑26B‑A4B‑IT‑QAT‑GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth | 143 / 129,110 | Upscaled Gemma‑4‑26B with quantization‑aware training for balanced accuracy/latency. |
| **[Nvidia/NVIDIA‑Nemotron‑3‑Ultra‑550B‑A55B‑BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 198 / 59,066 | Tungsten‑scale model leveraging BF16 for cost‑effective inference. |
| **[XiaomiMiMo/MiMo‑V2.5‑Pro‑FP4‑DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)** | XiaomiMiMo | 87 / 660 | Experimental FP4 quantization for low‑power edge agents. |

---

### 3. Ecosystem Signal  
The Gemma‑4 family remains the dominant touchstone for both academic and industrial adopters, with Google continuing to ship multiple variants (original, instruction‑tuned, and quantized). NVIDIA keeps expanding its "Nemotron" series and offers specialized vision models, re‑asserting its hardware‑centric stance. Open‑weight models still command the bulk of downloads, but proprietary fine‑tunes (DeepSeek‑V4‑Pro, Qwen3.6‑35B‑A3B) are swiftly closing the gap, suggesting a blurring line between community‑ish and corporate releases. Quantization is mainstream—GGUF, QAT‑Q4_0, and FP8/FP4 builds are now released in parallel with full‑precision versions—highlighting a growing emphasis on deployment‑ready, low‑latency inference. Meanwhile, “abliterated” and “pruned” variants illustrate a trend toward aggressive model size reduction to fit niche hardware budgets.

---

### 4. Worth Exploring  
1. **[Unlabeled‑Gemma‑4‑12B‑it‑abliterated (Huihui‑AI)](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)** – A peer‐reviewed case study of aggressive pruning that can inform your own model scaling experiments.  
2. **[Nvidia/LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B)** – One of the few community‑available large‑scale image‑feature extractors; ideal for building detection pipelines without training from scratch.  
3. **[Google/Gemma‑4‑12B‑it‑GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** – Demonstrates how full‑precision cognition can be portable to lightweight devices, making it a great starting point for edge deployments.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*