# Hugging Face Trending Models Digest 2026-10-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-13 04:36 UTC

---

# Hugging Face Trending Models Digest — 2026-10-13

---

## 1. Today's Highlights

The Qwen ecosystem dominates this week's trending list, with **Qwen/Qwen3.8-27B** (17.6k likes) and **Qwen/Qwen3.8-Flash-Next** (6.1k likes) leading a wave of multimodal and text-only releases. Community quantization is exploding: nine of the top 30 models are GGUF/quantized variants, including uncensored and mixed-precision builds from **unsloth**, **ISTA-DASLab**, and **DavidAU**. Video generation arrives in force with **Lightricks/LTX-2.5** (7.5k likes), while **google/embeddinggemma-2** and its GGUF port signal strong demand for efficient multimodal embeddings. Cloudflare enters the multimodal arena with **CLEF** and **CLEF-Flash**, and **baidu/Unlimited-OCR** (4.5k likes) shows enterprise-grade document understanding gaining traction.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,585 | 6,895,303 | Flagship 27B multimodal model with strong reasoning and conversational abilities; base for countless fine-tunes. |
| [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,151 | 1,934,542 | Experimental “Flash” variant optimized for speed and efficiency, targeting real-time multimodal chat. |
| [**deepseek-ai/DeepSeek-V4.1-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,417 | 1,294,550 | Latest flash-optimized DeepSeek release, balancing code, reasoning, and multimodal understanding. |
| [**Aleph-Alpha/Kolibri-1**](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 916 | 14,018 | MoE-based reasoning model with vLLM support, aimed at efficient long-context inference. |
| [**ConwayResearch/Underdog-Saluki-27B-1.0**](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 379 | 242,329 | Heavily quantized (2-bit) Llama-family model with tool/function-calling capabilities. |
| [**LiquidAI/d1-3B**](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 353 | 11,866 | Compact 3B liquid foundation model (LFm2-VL) for on-device multimodal tasks. |
| [**Venastine-Research/Xing4.0-29B-A4B-GGUF**](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 705 | 52,788 | GGUF-quantized 29B MoE model optimized for local inference. |
| [**autotrust/JEV-35B**](https://huggingface.co/autotrust/JEV-35B) | autotrust | 235 | 6,262 | Qwen3.5-MoE based classifier for “system-one” calibrated decisions. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,503 | 1,719,766 | State-of-the-art image-to-video, text-to-video, and video-to-video diffusion model; single-file deployment. |
| [**Qwen/Qwen-Image-2.1**](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,266 | 142,375 | High-quality text-to-image and image-editing model with strong prompt adherence. |
| [**Qwen/Qwen-Image-2.1-Turbo**](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 646 | 6,787 | Distilled Turbo variant for faster inference with minimal quality loss. |
| [**Cloudflare/clef**](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,101 | 15,064 | Cloudflare’s first open multimodal model (Qwen3.5-based) for image-text understanding. |
| [**Cloudflare/clef-flash**](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 791 | 23,285 | Lightweight flash variant of CLEF for edge deployment. |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,525 | 1,205,646 | Enterprise-grade OCR/document understanding model with feature-extraction capabilities. |
| [**openbmb/MiniCPM-V-4.7-35B-A3B**](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 171 | 166 | Latest MiniCPM-V iteration: 35B MoE with 3B active params for efficient multimodal chat. |
| [**speridlabs/iris-3b**](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 203 | 706 | Pixel-space diffusion model for text-to-image generation at 3B params. |
| [**canberkkkkkk/ema-lightning**](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 393 | 20,310 | Turkish-focused EMA-based lightning-fast TTS model. |
| [**Cactus-Compute/whistle**](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 365 | 18,643 | On-device speech recognition (ASR) model optimized for low-resource environments. |

---

### 🔧 Specialized Models (embeddings, classification, segmentation, OCR)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**google/embeddinggemma-2**](https://huggingface.co/google/embeddinggemma-2) | google | 1,960 | 115,763 | Google’s new multimodal embedding model (Gemma-2 family) for retrieval and similarity tasks. |
| [**facebook/sam3**](https://huggingface.co/facebook/sam3) | facebook | 4,168 | 2,054,071 | Segment Anything Model 3 with video support (SAM3-Video); zero-shot mask generation. |
| [**convaiinnovations/laya**](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,536 | 45,062 | Calibrated text-classification system (“System-One”) for reliable decision-making. |
| [**unsloth/embeddinggemma-2-GGUF**](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 285 | 71,914 | GGUF-quantized version of Google’s EmbeddingGemma-2 for local embedding inference. |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,525 | 1,205,646 | (Also listed above) End-to-end OCR and document understanding pipeline. |

---

### 📦 Fine-tunes & Quantizations (community GGUF, AWQ, uncensored, merged)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,063 | 6,597,425 | Official Unsloth GGUF quantization of Qwen3.8-27B; multiple bit-widths for consumer GPUs. |
| [**abenzerps/Qwen-Image-2.1-Uncensored-Quantized**](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,111 | 2,188,658 | Uncensored + quantized Qwen-Image-2.1; ComfyUI-ready GGUF for unrestricted image generation. |
| [**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,697 | 2,025,498 | Heavily merged/uncensored Qwen3.8-27B GGUF with “Heretic” and “NEO-CODER” personas. |
| [**ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 834 | 4,413,142 | Mixed-precision GSQ+RCO quantization of Qwen3.8-Flash-Next for optimal quality/size trade-off. |
| [**orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 820 | 629,886 | Abliterated/uncensored GGUF of Qwen3.8-Flash-Next for unrestricted multimodal chat. |
| [**AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF**](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 376 | 161,715 | Uncensored GGUF of Qwen-Image-2.1-Turbo with Qwen3-VL integration. |
| [**nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2**](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 286 | 75,302 | Kitchen-sink merge of multiple reasoning/coding datasets on Qwen3.8-27B with RLOO and MTP. |
| [**jialinyyzz/humanizer**](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,343 | 46,070 | Gemma-4-based “humanizer” for naturalizing AI-generated text (image-text-to-text pipeline). |
| [**Venastine-Research/Xing4.0-29B-A4B-GGUF**](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-G

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*