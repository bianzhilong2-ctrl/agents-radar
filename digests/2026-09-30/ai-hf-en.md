# Hugging Face Trending Models Digest 2026-09-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-30 03:03 UTC

---

# Hugging Face Trending Models Digest — 2026-09-30

---

## 🎯 Today's Highlights

The Qwen ecosystem dominates this week's trending list, with **Qwen-Image-2.1** and **Qwen3.8-27B** spawning dozens of community fine-tunes, quantizations (GGUF, 2-bit ternary, GSQ-RCO), and ComfyUI integrations. **Lightricks' LTX-2.5** leads video generation with 1.5M+ downloads, signaling strong adoption of unified image-to-video/text-to-video pipelines. Audio intelligence surges: three ASR/diarization models (Audio8-ASR-Infinite, Confucius4-R2T2, Nemotron-3-Diarization) appear in the top 30, reflecting demand for streaming and multilingual speech processing. Apple's **LensVLM-9B** marks its vision-language entry, while DeepSeek-V4.1-Flash signals continued open-weight LLM momentum from Chinese labs.

---

## 📊 Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,571 | 7,020,239 | Flagship 27B multimodal LLM with image-text-to-text and conversational capabilities; base for massive quantization/fine-tune ecosystem. |
| [**deepseek-ai/DeepSeek-V4.1-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,897 | 690,388 | Latest open-weight DeepSeek iteration with image-text-to-text; fast inference focus for production deployment. |
| [**XingChen-AGI/Xing4.0-29B-A4B**](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,808 | 46,557 | 29B MoE (4B active) model optimized for text-generation and conversational tasks; strong Chinese/English bilingual performance. |
| [**XiaomiMiMo/MiMo-V2.6-Pro-RL**](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 602 | 78,135 | RL-tuned multimodal model with text-generation focus; part of Xiaomi's expanding MiMo series. |
| [**orcarouter/OrcaSAQ-2-27B**](https://huggingface.co/orcarouter/OrcaSAQ-2-27B) | orcarouter | 212 | 2,143 | Qwen3.5-based model optimized for vLLM serving; targets high-throughput text-generation workloads. |
| [**Contrastive-LM/CLM-v0.1-8B**](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 531 | 1,910 | Contrastive learning-based reranker/verifier for text-ranking; novel approach to retrieval augmentation. |
| [**Altworld/Hemmingway-1**](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 773 | 7,880 | Qwen3.8-based text-generation fine-tune with creative writing emphasis; community-driven uncensored variant. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,574 | 1,589,098 | Unified diffusion model for image→video, text→video, video→video; 1.5M+ downloads signal broad creator adoption. |
| [**Qwen/Qwen-Image-2.1**](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,659 | 64,362 | Base text-to-image & image-editing model; foundation for extensive fine-tune/quant ecosystem (see below). |
| [**TaichuAI/ZDTaichu5.0-9B**](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,948 | 11,836 | Vision-language model with spatial-reasoning focus; 9B params for efficient multimodal deployment. |
| [**apple/LensVLM-9B**](https://huggingface.co/apple/LensVLM-9B) | apple | 266 | 1,956 | Apple's open vision-language model (Qwen3.5 backbone); targets research & on-device multimodal applications. |
| [**Viggle/Qwen-Image-2.1-viggle-turbo**](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 426 | 190,649 | LoRA-accelerated Qwen-Image-2.1 variant for fast text-to-image & image-to-image; ComfyUI-ready. |
| [**inclusionAI/Ming-Image-0.1-Design**](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 347 | 0 | Design-focused text-to-image model; early release with custom diffusion architecture. |
| [**XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B**](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 572 | 11,131 | Distilled 9B multimodal model from MiMo-V2.6 teacher; balances efficiency and vision-language capability. |
| [**abenzerps/Qwen-Image-2.1-Uncensored-GGUF**](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,449 | 1,152,523 | Uncensored Qwen-Image-2.1 fine-tune in GGUF; 1.1M downloads show strong demand for unrestricted image generation. |
| [**unsloth/Qwen-Image-2.1-GGUF**](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 299 | 251,937 | Official unsloth GGUF quantization of Qwen-Image-2.1; optimized for consumer GPU inference. |
| [**pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF**](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 322 | 168,249 | FP8-quantized text encoder for Qwen-Image-2.1; ComfyUI integration for memory-efficient generation. |

---

### 🔧 Specialized Models (ASR, OCR, diarization, classification, extraction)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**Edge0/Audio8-ASR-Infinite**](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,543 | 23,674 | Streaming ASR with infinite context; transformers-based for real-time transcription. |
| [**XingChen-AGI/TeleOCR**](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 877 | 30,354 | Qwen2.5-VL-based OCR model for image-text-to-text; targets document/telecom text extraction. |
| [**nvidia/Nemotron-3-Diarization**](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 520 | 30,931 | Speaker diarization & voice activity detection; NeMo-based, GGUF-available for edge deployment. |
| [**netease-youdao/Confucius4-R2T2**](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 469 | 10,482 | Qwen3-ASR based speech recognition; R2T2 architecture for robust multilingual ASR. |
| [**fastino/GLiNER2.5-Decide**](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 241 | 29,199 | Token-classification model for intent classification & entity extraction; lightweight extractor. |
| [**convaiinnovations/laya**](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,523 | 0 | Text-classification system for calibrated decisions; "System One" reasoning architecture. |
| [**SupersonicLabs/Julia-1**](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 295 | 1,725 | Multilingual decision-model for text-classification; targets structured decision-making tasks. |
| [**akhilaaa3/Jev-Omni**](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 310 | 923 | Gemma4-unified based multimodal classifier; combines image-text-to-text with text-classification. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, ternary)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,732 | 6,425,606 | Official unsloth GGUF quantization of Qwen3.8-27B; 6.4M downloads = de facto standard for local LLM inference. |
| [**prism-ml/Ternary-Bonsai-2-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,271 | 3,581,027 | 2-bit ternary quantization (llama.cpp); extreme compression with 3.5M downloads proving viability. |
| [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,830 | 1,678,861 | Mixed-precision GSQ-RCO quantization; research-grade compression preserving quality at low bit-widths. |
| [**DavidAU/Qwen3.8-27B-TURBO-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,283 | 1,726,231 | Heavily merged/uncensored fine-tune + GGUF; "kitchen sink" community model with MTP (multi-token prediction). |
| [**Comfy-Org/Qwen-Image-2.1**](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 854 |

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*