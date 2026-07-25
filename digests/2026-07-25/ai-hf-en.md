# Hugging Face Trending Models Digest 2026-07-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-25 01:50 UTC

---

# Hugging Face Trending Models Digest — 2026-07-25

---

## 1. Today's Highlights

The Hugging Face Hub is dominated by **multimodal MoE architectures** and **aggressive quantization** this week. Z.ai’s **GLM-5.2** (4.4k likes) leads as the most-liked release, showcasing a massive MoE model with DSA attention. Google’s **Gemma-4-31B-it** (3.4k likes, 12.6M downloads) signals strong adoption of their latest multimodal generation. The Qwen3.6 family explodes with **10+ community fine-tunes and GGUF quantizations**, reflecting a vibrant open-weight ecosystem. Meanwhile, **sub-4-bit quantization (1-bit, 2-bit, NVFP4)** has moved mainstream—Prism-ML’s 1-bit Bonsai-27B surpasses 2M downloads, and NVFP4 variants from Poolside and Baseten target Blackwell-era inference. Robotics and OCR niches also heat up: OpenBMB drops two Vision-Language-Action models, while Baidu’s Unlimited-OCR and ATH-MaaS’s OvisOCR2 push document understanding.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,415 | 667,403 | Massive MoE (GLM-MoE-DSA) setting new open-weight SOTA; conversational & reasoning flagship. |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,360 | 12,629,921 | Google’s latest multimodal instruction-tuned model; huge download velocity signals broad adoption. |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,503 | 6,460,680 | Base MoE multimodal model (35B total, 3B active); foundation for dozens of community fine-tunes. |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 611 | 28,992 | Code-specialized LLM; also released in GGUF & NVFP4 for efficient deployment. |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 541 | 1,106 | 250B-parameter open model; early release, downstream fine-tunes expected. |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 372 | 8,169 | Compact 3B Chinese/English bilingual model gaining traction in APAC. |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 149 | 4,266 | Security-focused 1B Granite-MoE hybrid; niche but notable for safety research. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,012 | 2,500,391 | General-purpose OCR model; highest-download multimodal release this week. |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,546 | 27,883 | Conversational image-text model; notable for interactive multimodal dialogue. |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 234 | 891 | Text-to-image & editing via flow matching; research-oriented diffusion model. |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 112 | 30,303 | Edge-optimized world/video generation model (Cosmos family); diffusers-based. |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 532 | 0 | LoRA for Krea-2 identity-preserving editing; ComfyUI-ready. |

---

### 🔧 Specialized Models (code, math, medical, embeddings, robotics, speech)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,263 | 756,668 | Code-specialized multimodal model; compressed-tensors format for efficient serving. |
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 124 | 396 | Qwen3.5-MoE based coder; early dev release for agentic coding. |
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 173 | 559 | Vision-Language-Action model for robotic manipulation; VLA architecture. |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 123 | 349 | VLA model for robotic tracking; companion to RobotManip. |
| [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 937 | 797,525 | Streaming ASR (0.6B); NeMo-based, production-ready for real-time transcription. |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 276 | 30,292 | Qwen3.5-based OCR specialist; strong on structured document extraction. |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 185 | 2,108 | Feature-extraction focused; early beta for embedding/retrieval tasks. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, NVFP4)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,069 | 2,057,103 | Uncensored MoE vision fine-tune; GGUF, top community release by likes. |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,455 | 1,906,539 | Reasoning-focused Qwen3.5 fine-tune; GGUF quantized for local inference. |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 632 | 2,028,115 | **1-bit quantized** Llama-27B; 2M+ downloads prove extreme compression viability. |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,006 | 595,415 | **2-bit (ternary)** quantization; balances quality/size for consumer GPUs. |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 486 | 407,421 | Heavily merged/uncensored Qwen3.6 vision fine-tune; Unsloth-trained GGUF. |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 170 | 57,536 | Unsloth-optimized GGUF of Poolside’s code model; vLLM compatible. |
| [**poolside/Laguna-S-2.1-GGUF**](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 133 | 62,092 | Official GGUF release; endpoints-compatible. |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 129 | 89,186 | **NVFP4 (4-bit FP)** quantization for Blackwell GPUs; vLLM native. |
| [**baseten/GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 89 | 494 | NVFP4-quantized GLM-5.2 vision variant; SGLang serving

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*