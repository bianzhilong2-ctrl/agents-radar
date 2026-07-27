# Hugging Face Trending Models Digest 2026-07-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-27 02:01 UTC

---

# Hugging Face Trending Models Digest — 2026-07-27

---

## 1. Today's Highlights

The Hugging Face Hub is dominated by **multimodal foundation models** and **extreme quantization** this week. Baidu's **Unlimited-OCR** leads with 2.6M downloads, signaling production-grade OCR demand. Z.ai's **GLM-5.2** (4.5K likes) and the Qwen3.6 family drive open-weight MoE adoption, while community fine-tunes like **HauhauCS's Uncensored Qwen3.6-35B** (3.1K likes, 1.9M downloads) show massive appetite for unrestricted models. Microsoft, NVIDIA, and Poolside are pushing **deployment-ready formats** (NVFP4, GGUF, 1-bit), and robotics/VLA models from OpenBMB mark a new frontier.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,477 | 827,191 | Flagship MoE model with DSA architecture; top-trending open LLM for reasoning and chat. |
| **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | poolside | 701 | 56,445 | Code-specialized LLM optimized for software engineering tasks; base for multiple quant variants. |
| **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | upstage | 595 | 3,305 | Massive 250B parameter open model; pushes parameter-efficient scaling for enterprise use. |
| **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Nanbeige | 447 | 14,049 | Compact 3B model with strong Chinese/English bilingual performance for edge deployment. |
| **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | fdtn-ai | 187 | 5,978 | Security-focused 1B model using GraniteMoE hybrid architecture for safe generation. |

### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 3,207 | 2,593,460 | Production OCR model with unlimited context; dominant in document understanding pipelines. |
| **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | 1,579 | 34,511 | Novel multimodal conversational model blending vision-language with persistent memory. |
| **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | microsoft | 335 | 1,375 | Diffusion-based text-to-image and editing model with flow-matching for high fidelity. |
| **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** | microsoft | 110 | 1,225 | Qwen3.5-based vision-language model targeting computer-use agents and GUI grounding. |
| **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** | nvidia | 125 | 32,700 | Edge-optimized world model for physical AI; diffusion backbone for video generation. |
| **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** | owensong | 179 | 298 | Tiny TTS model for CPU/edge deployment; local speech synthesis without cloud. |
| **[microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo)** | microsoft | 89 | 946 | Turbo instruction-based image editing; real-time iterative refinement. |
| **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | 544 | 0 | LoRA for Krea-2 enabling identity-preserving image editing in ComfyUI workflows. |

### 🔧 Specialized Models (Code, Math, Medical, Embeddings, Robotics)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 1,298 | 730,129 | Code-specialized multimodal model with compressed-tensors for efficient inference. |
| **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | Kwaipilot | 198 | 3,764 | Qwen3.5 MoE-based coder with vision support for repository-level development. |
| **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | openbmb | 177 | 643 | Vision-Language-Action model for robotic manipulation; VLA frontier. |
| **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | openbmb | 130 | 398 | VLA model for robotic tracking tasks; extends MiniCPM to embodied AI. |
| **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | ATH-MaaS | 309 | 35,562 | Qwen3.5-based OCR specialist; strong multilingual document parsing. |
| **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** | Motif-Technologies | 193 | 2,400 | Feature-extraction model for specialized embedding/retrieval tasks. |
| **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** | baseten | 113 | 2,033 | GLM-5.2 vision variant quantized to NVFP4 for SGLang high-throughput serving. |

### 📦 Fine-tunes & Quantizations (Community Fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Description |
|-------|--------|-------|-----------|-------------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 3,112 | 1,927,138 | Aggressively uncensored Qwen3.6 MoE fine-tune; GGUF + vision; top community model. |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 2,480 | 1,410,054 | Reasoning-focused 9B fine-tune on Claude-distilled data; GGUF for local inference. |
| **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism-ml | 651 | 2,187,304 | **1-bit quantized** 27B model; extreme compression with llama.cpp; 2.2M downloads. |
| **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 1,050 | 631,970 | **2-bit ternary** quantization of Bonsai-27B; pushes sub-4-bit viability. |
| **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 638 | 552,026 | Multi-merge uncensored fine-tune with MTP; GGUF + Unsloth optimized. |
| **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** | unsloth | 203 | 102,684 | Unsloth-optimized GGUF of Poolside's code model; vLLM compatible. |
| **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)** | poolside | 143 | 138,671 | Official NVFP4 quantization for TensorRT-LLM / vLLM high-throughput serving. |
| **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** | poolside | 143

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*