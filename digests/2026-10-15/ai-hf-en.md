# Hugging Face Trending Models Digest 2026-10-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-15 02:24 UTC

---

# Hugging Face Trending Models Digest — 2026-10-15

---

## 1. Today's Highlights

The Qwen ecosystem dominates this week’s trending list, with **Qwen3.8-27B** (17.7K likes) and **Qwen3.8-Flash-Next** (6.2K likes) anchoring a wave of community fine-tunes, uncensored variants, and advanced quantizations (GGUF, FP8, GSQ/RCO). Video generation surges with **Lightricks/LTX-2.5** (7.8K likes, 1.8M downloads) leading image-to-video workflows, while **MiniMax-H3 LoRA** enables first-last-frame control. Embedding and specialized models gain traction: **google/embeddinggemma-2** (2.3K likes) and **baidu/Unlimited-OCR** (4.6K likes) show strong demand for production-ready feature extraction. Quantization innovation accelerates—**ISTA-DASLab’s GSQ-RCO GGUF** (4.9M downloads) and **autotrust’s NVFP4** variants demonstrate mixed-precision and 2-bit/4-bit deployment maturity. Uncensored/abliterated releases remain a consistent community preference across both LLM and image models.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 17,708 | 7,221,327 | Flagship 27B multimodal LLM with strong reasoning and conversational ability; base for numerous fine-tunes. |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 6,212 | 2,185,644 | Next-gen efficient multimodal model (Qwen4 experimental) optimized for speed and quality. |
| **[LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)** | LiquidAI | 311 | 4,067 | MoE-based Liquid Foundation Model (24B, 2B active) offering novel architecture for text generation. |
| **[dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)** | dealignai | 642 | 78,156 | FP8-quantized, uncensored variant of DeepSeek-V4.1-Flash for high-throughput inference. |
| **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** | deepseek-ai | 4,504 | 1,262,357 | Official efficient multimodal Flash model from DeepSeek, balancing speed and capability. |
| **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** | ConwayResearch | 458 | 311,969 | 2-bit quantized Llama-based model with tool/function calling, showcasing extreme compression. |
| **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** | jialinyyzz | 1,640 | 65,616 | Gemma4-unified model tuned to humanize AI-generated text; multimodal (image-text-to-text). |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 7,799 | 1,823,507 | State-of-the-art diffusion model for image→video, text→video, video→video; single-file deployment. |
| **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** | Qwen | 778 | 12,704 | Fast, high-quality text-to-image and image-editing model from Qwen. |
| **[openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)** | openbmb | 633 | 4,157 | Large MoE multimodal model (35B, 3B active) for image-text understanding. |
| **[openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B)** | openbmb | 333 | 2,543 | Compact 1B version of MiniCPM-V 4.7 for on-device multimodal tasks. |
| **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** | fishaudio | 319 | 839 | Multi-speaker text-to-speech model (Fish Omni) with expressive control. |
| **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)** | speridlabs | 258 | 1,132 | Pixel-space diffusion for text-to-image; lightweight 3B parameter model. |
| **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** | LiquidAI | 396 | 14,854 | Small multimodal Liquid Foundation Model (3B) for image-text tasks. |
| **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)** | pablodawson | 449 | 16,890 | LoRA for MiniMax-H3 enabling first-last-frame video generation (FLF2V). |
| **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** | Cloudflare | 2,160 | 18,304 | Qwen3.5-based multimodal model optimized for edge/cloud deployment. |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 4,639 | 1,154,213 | High-performance OCR model for unlimited-length document understanding. |

### 🔧 Specialized Models (embeddings, segmentation, speech, classification)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** | google | 2,268 | 135,175 | Gemma-2 based embedding model for feature extraction and semantic search. |
| **[facebook/sam3](https://huggingface.co/facebook/sam3)** | facebook | 4,341 | 2,019,842 | Segment Anything Model 3 with video support (SAM3-Video) for mask generation. |
| **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** | Cactus-Compute | 396 | 23,589 | On-device automatic speech recognition (ASR) model optimized for mobile. |
| **[autotrust/JEV-35B](https://huggingface.co/autotrust/JEV-35B)** | autotrust | 743 | 27,970 | Qwen3.5-MoE based model for text classification with “system-one” calibrated decisions. |
| **[autotrust/JEV-35B-NVFP4](https://huggingface.co/autotrust/JEV-35B-NVFP4)** | autotrust | 306 | 33,343 | NVFP4-quantized version of JEV-35B for efficient classification inference. |
| **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** | convaiinnovations | 5,602 | 47,754 | Calibrated decision-making classifier for high-stakes conversational AI. |
| **[vllm-sr/d3](https://huggingface.co/vllm-sr/d3)** | vllm-sr | 165 | 1,805 | Qwen3.5-based zero-shot classification model for flexible labeling. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, FP8)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** | ISTA-DASLab | 874 | 4,894,108 | Mixed-precision GSQ+RCO quantized GGUF of Qwen3.8-Flash-Next; 4.9M downloads. |
| **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 1,771 | 1,900,731 | Heavily merged/uncensored fine-tune of Qwen3.8-27B with MTP, GGUF quantized. |
| **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter | 866 | 692,812 | Abliterated/uncensored GGUF of Qwen3.8-Flash-Next for unrestricted generation. |
| **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)** | nerkyor | 334 | 114,351 | Kitchen-sink merge fine-tune targeting coding, reasoning, and efficient thinking. |
| **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** | abenzerps | 4,312 | 2,315,771 | Uncensored GGUF quant of Qwen-Image-2.1; top downloads for image generation. |
| **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)** | AtomicChat | 452 | 258,320 | Uncensored GGUF of Qwen-Image-2.1-Turbo for ComfyUI

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*