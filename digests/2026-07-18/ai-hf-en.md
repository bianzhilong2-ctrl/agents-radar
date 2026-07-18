# Hugging Face Trending Models Digest 2026-07-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-18 01:40 UTC

---

# Hugging Face Trending Models Digest — 2026-07-18

## 1. Today's Highlights
This week’s trending models are dominated by extreme quantization and multimodal openness, with prism-ml’s Bonsai/Ternary series (1–2 bit) and empero-ai’s Qwythos GGUF builds leading downloads. Zai-org’s **GLM-5.2** and Tencent’s **Hy3** show strong open-weight LLM momentum, while uncensored and vision-capable MoE fine-tunes (e.g., HauhauCS Qwen3.6) are gaining rapid community traction. Multimodal OCR and image/video generation LoRAs round out a visibly decentralized, community-driven release wave.

## 2. Trending Models

### 🧠 Language Models
- **zai-org/GLM-5.2** — zai-org · 4,071 likes · 534,698 downloads  
  https://huggingface.co/zai-org/GLM-5.2  
  A new open-weight MoE LLM with DSA sparsity that tops weekly likes as a strong general chat model.
- **tencent/Hy3** — tencent · 820 likes · 12,719 downloads  
  https://huggingface.co/tencent/Hy3  
  Tencent’s Hunyuan v3 open text-generation model attracting attention as a major lab release.
- **InternScience/Agents-A1** — InternScience · 572 likes · 34,066 downloads  
  https://huggingface.co/InternScience/Agents-A1  
  A Qwen3.5-MoE-based agentic text/image model showing momentum in open agent workloads.

### 🎨 Multimodal & Generation
- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** — empero-ai · 2,274 likes · 2,096,147 downloads  
  https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF  
  A 1M-context quantized multimodal model that leads downloads via extreme reach and reasoning tags.
- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** — HauhauCS · 2,828 likes · 2,295,313 downloads  
  https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive  
  An uncensored vision MoE fine-tune topping downloads with aggressive open-weight positioning.
- **baidu/Unlimited-OCR** — baidu · 2,019 likes · 1,992,355 downloads  
  https://huggingface.co/baidu/Unlimited-OCR  
  Baidu’s high-throughput OCR multimodal model with near-2M weekly downloads.
- **Wan-AI/Wan-Dancer-14B** — Wan-AI · 108 likes · 2,185 downloads  
  https://huggingface.co/Wan-AI/Wan-Dancer-14B  
  An image-to-video diffusion model extending Wan’s video generation line.
- **mgwr/M87** — mgwr · 146 likes · 3,874 downloads  
  https://huggingface.co/mgwr/M87  
  A text-to-image LoRA built on Krea-2-Turbo for stylized generation.

### 🔧 Specialized Models
- **OpenMOSS-Team/MOSS-Transcribe-Diarize** — OpenMOSS-Team · 249 likes · 83,160 downloads  
  https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize  
  An audio-text transcription+diarization model for meeting/speech pipelines.
- **ATH-MaaS/OvisOCR2** — ATH-MaaS · 153 likes · 10,795 downloads  
  https://huggingface.co/ATH-MaaS/OvisOCR2  
  A Qwen3.5-based OCR model targeting document understanding.
- **Cactus-Compute/needle** — Cactus-Compute · 257 likes · 874 downloads  
  https://huggingface.co/Cactus-Compute/needle  
  A JAX function-calling/tool-use model for lightweight agent stacks.

### 📦 Fine-tunes & Quantizations
- **prism-ml/Bonsai-27B-gguf** — prism-ml · 396 likes · 1,045,182 downloads  
  https://huggingface.co/prism-ml/Bonsai-27B-gguf  
  A 1-bit GGUF of a 27B model enabling massive local deployment at tiny size.
- **prism-ml/Ternary-Bonsai-27B-gguf** — prism-ml · 679 likes · 200,774 downloads  
  https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf  
  A 2-bit ternary 27B GGUF balancing quality and compression popularity.
- **unsloth/Qwen3.6-27B-NVFP4** — unsloth · 225 likes · 1,924,495 downloads  
  https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4  
  An NVFP4 quantized Qwen3.6 multimodal build with near-2M downloads.
- **AngelSlim/Hy3-GGUF** — AngelSlim · 122 likes · 84,834 downloads  
  https://huggingface.co/AngelSlim/Hy3-GGUF  
  Community GGUF port of Tencent Hy3 for llama.cpp users.
- **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF** — GnLOLot · 273 likes · 154,762 downloads  
  https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF  
  A small 1B thinking GGUF showing edge-LLM fine-tune interest.

## 3. Ecosystem Signal
The HF ecosystem this week shows clear momentum behind **Qwen3.5/3.6-derived families** (Bonsai, Qwythos, HauhauCS, Unsloth) and **Chinese lab open weights** (GLM-5.2, Hy3, Unlimited-OCR). Extreme quantization (1–2 bit GGUF/MLX) is no longer niche—prism-ml and empero-ai dominate download charts, indicating strong local-first adoption. Open-weight releases outpace proprietary here: all top-liked models are openly licensed or community-published. Fine-tuning activity is fragmented but vibrant, with uncensored MoEs, OCR, and video LoRAs (Krea/LTX/Wan) showing the long tail of creative specialization. Tool-use and agent models (Needle, Agents-A1) suggest a shift toward functional, not just conversational, open models.

## 4. Worth Exploring
- **zai-org/GLM-5.2** (https://huggingface.co/zai-org/GLM-5.2) — Best-liked open LLM of the week; evaluate its MoE-DSA efficiency vs Qwen/GLM prior.
- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** (https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — Highest-download vision MoE; useful to study open uncensored multimodal alignment.
- **prism-ml/Bonsai-27B-gguf** (https://huggingface.co/prism-ml/Bonsai-27B-gguf) — 1-bit 27B at 1M+ downloads; a benchmark for practical ultra-low-bit inference.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*