# Hugging Face Trending Models Digest 2026-09-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-28 02:38 UTC

---

**🗞️ Today's Highlights**  
The Hugging Face hub is buzzing around three themes: (1) **Qwen‑centric multimodal families** – the base Qwen‑Image‑2.1 and its many GGUF/LoRA variants dominate download charts, while Qwen‑3.8‑27B leads in likes as a powerful image‑text‑to‑text model. (2) **Video generation emerges** – Lightricks’ LTX‑2.5 (image‑to‑video) crosses 5 k likes and 1.6 M downloads, signalling growing interest in diffusion‑based video models. (3) **Aggressive quantization** – GGUF‑packed models (Ternary‑Bonsai, various Qwen image‑and‑language quantisations) collectively amass millions of downloads, reflecting a community push for lightweight, deployable LLMs.  

---

## 📊 Trending Models  

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,108 | 0 | A calibrated‑decision text‑classifier built on the “System‑One” architecture, gaining traction for reliable binary judgments. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,783 | 45,028 | A 29 B‑parameter conversational LLM (text‑generation) that balances size and quality, attracting developers seeking mid‑scale chat models. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,195 | 3,343,748 | A 2‑bit ternary‑quantised LLaMA‑style model in GGUF format, enabling low‑resource inference while preserving perplexity. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 740 | 5,904 | A Qwen‑3.5‑based text‑generation model fine‑tuned for creative writing, praised for its stylistic coherence. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 558 | 75,079 | A multimodal RL‑optimised text‑generation model that shows improved instruction following on downstream tasks. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 491 | 25,661 | A faster‑inference variant of MiMo‑V2.6‑Pro‑RL, trading a few points of quality for substantially lower latency. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,814 | 651,078 | An image‑text‑to‑text model (vision‑language) that combines strong reasoning with flash‑speed inference, driving high like‑counts. |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 349 | 3,456 | A massive 80 B‑parameter autoregressive LLM (text‑generation) released under an open‑weight license, drawing interest from researchers exploring scaling limits. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,097 | 964,220 | A GGUF‑quantised, uncensored version of Qwen‑Image‑2.1 for ComfyUI, enabling low‑VRAM text‑to‑image generation. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,502 | 52,804 | The official diffusion‑based text‑to‑image model from the Qwen family, noted for high fidelity and prompt adherence. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 808 | 3,987,373 | A ready‑to‑use diffusion‑single‑file checkpoint optimised for ComfyUI, driving massive download numbers despite modest likes. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 342 | 133,151 | A LoRA‑enhanced turbo variant that speeds up sampling while preserving quality, popular in real‑time demo pipelines. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 302 | 0 | A custom diffusion model focused on design‑oriented image generation, gaining traction among graphic‑design communities. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokac | 302 | 145,246 | A GGUF‑quantised text‑encoder for Qwen‑Image‑2.1, enabling faster CLIP‑guided generation in low‑memory settings. |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 271 | 194,341 | Another GGUF release of Qwen‑Image‑2.1, highlighted for its efficient FP8 quantisation and easy integration. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,681 | 11,612 | A 9 B‑parameter vision‑language model with strong spatial‑reasoning abilities, useful for diagram‑understanding tasks. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,431 | 6,727,629 | The flagship 27 B image‑text‑to‑text model; its high like count reflects broad adoption for multimodal chat and reasoning. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,778 | 1,608,439 | A mixed‑precision GGUF quantisation of Qwen‑3.8‑27B that retains quality while cutting VRAM usage. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,814 | 651,078 | See Language Models section – also a top multimodal performer. |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 243 | 1,740 | A compact 9 B vision‑language model from Apple, noted for efficient deployment on edge devices. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 524 | 8,839 | A distilled image‑text‑to‑text model derived from Qwen‑9B, offering a strong quality‑size trade‑off. |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 606 | 27,837 | An OCR‑focused image‑text‑to‑text model built on Qwen‑2.5‑VL, achieving high accuracy on scene‑text benchmarks. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,339 | 1,601,089 | An image‑to‑video diffusion model that turns still frames into coherent short clips, sparking excitement in generative video circles. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,128 | 19,434 | A streaming automatic‑speech‑recognition model with infinite‑context capability, ideal for live transcription. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 437 | 8,243 | A Qwen‑based ASR model tuned for Mandarin, showing strong performance on conversational speech. |

### 🔧 Specialized Models (code, math, medical, embeddings)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 208 | 19,757 | A token‑classification model for NER/intent detection, leveraging GLiNER 2.5 architecture for high‑speed entity extraction. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 411 | 766 | A text‑ranking verifier based on contrastive learning, useful for reranking search results or LLM outputs. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 410 | 22,514 | A voice‑activity‑detection / diarization model from the Nemotron‑3 family, widely used in pipelines needing speaker segmentation. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 272 | 248 | A unified text‑classification model built on Gemma‑4, demonstrating strong zero‑shot transfer across domains. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 610 | 0 | A cross‑encoder NLI model based on Qwen‑3.5, excelling at sentence‑pair similarity tasks. |

### 📦 Fine-tunes & Quantizations (community fine‑tunes, GGUF, AWQ)  
| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,097 | 964,220 | GGUF‑quantised, uncensored variant for low‑VRAM text‑to‑image; popular in ComfyUI workflows. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/T

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*