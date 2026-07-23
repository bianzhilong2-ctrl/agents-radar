# Hugging Face Trending Models Digest 2026-07-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-23 01:54 UTC

---

## Hugging Face Trending Models Digest — 2026-07-23

---

### 1. Today's Highlights

The ecosystem is dominated by **multimodal flagship releases** from major labs: Google’s Gemma 4 31B, ZAI’s GLM‑5.2 MoE, and Moonshot’s Kimi‑K2.7‑Code lead likes and downloads. **Quantization innovation** is accelerating — ternary/1‑bit GGUF (Bonsai), NVFP4 (Laguna), and MLX 1‑bit variants enable edge deployment. **Chinese labs** (ZAI, Baidu, Moonshot, Upstage, Nanbeige) are shipping competitive open‑weight models at scale. **Robotics/VLA** (MiniCPM‑RobotManip/Track) and **specialized OCR/ASR** (Unlimited‑OCR, Nemotron‑ASR) show production‑ready tooling. Community fine‑tunes (uncensored Qwen, Heretic, Mythos) remain highly popular for roleplay and reasoning.

---

### 2. Trending Models by Category

#### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,338 | 545,109 | MoE model with DSA architecture; top‑trading open‑weight LLM for reasoning and chat. |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 258 | 0 | Massive 250B parameter open model; signals Upstage’s push for frontier‑scale open weights. |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 234 | 0 | Compact 3B model optimized for Chinese/English bilingual tasks. |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 161 | 125 | Early‑beta LLM focusing on feature extraction and structured reasoning. |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 396 | 3,056 | Code‑centric base model; multiple quantization variants (GGUF, NVFP4) released simultaneously. |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 596 | 1,404,962 | 1‑bit GGUF quant of a 27B model; extreme compression with usable quality. |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 945 | 432,196 | Ternary (2‑bit) quantization of Bonsai‑27B; pushes ultra‑low‑bit inference. |
| [**prism-ml/Bonsai-27B-mlx-1bit**](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 165 | 25,273 | MLX‑format 1‑bit quant for Apple Silicon deployment. |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 108 | 0 | Unsloth‑optimized GGUF of Laguna‑S‑2.1 for fast local inference. |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 93 | 1,953 | NVFP4 (4‑bit float) quantization targeting vLLM/H100 serving. |
| [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 153 | 51,746 | Community fine‑tune of MiniCPM5‑1B with “thinking” style reasoning, GGUF quantized. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,328 | 12,113,203 | Google’s flagship multimodal 31B model; image‑text‑to‑text, massive adoption. |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,224 | 722,058 | Code‑specialized multimodal model; strong on repository‑level reasoning. |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,453 | 16,441 | Novel image‑text‑to‑text model with conversational capabilities. |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,714 | 2,237,351 | Production‑grade OCR model; highest downloads, supports arbitrary layouts/languages. |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,002 | 1,997,690 | Uncensored MoE vision‑language fine‑tune; huge community traction. |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,417 | 2,133,420 | Reasoning‑focused multimodal fine‑tune (Qwen3.5 base), GGUF quantized. |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 514 | 12,002 | “Thinking” style multimodal fine‑tune with chain‑of‑thought prompting. |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 322 | 62,842 | Heavily merged uncensored multimodal model with Heretic/Fable fusions. |
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 154 | 58 | Vision‑language‑action model for robot manipulation. |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 114 | 72 | VLA model for robot tracking/navigation. |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 249 | 17,162 | Qwen3.5‑based OCR model optimized for document understanding. |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 124 | 0 | Diffusion‑based text‑to‑image/editing model with flow matching. |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 90 | 6,623 | World‑model/video generation for edge deployment (Cosmos family). |
| [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 914 | 590,230 | Streaming ASR model (0.6B) for real‑time transcription. |
| [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 308 | 92,265 | Audio transcription + speaker diarization pipeline. |
| [**unsloth/inkling-GGUF**](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 120 | 7,377 | GGUF quant of Inkling with audio‑text‑to‑text support. |
| [**Alissonerdx/LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 235 | 0 | LoRA for identity‑preserving text‑to‑video (LTX

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*