# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-11 01:00 UTC

---

**🤖 Today’s Highlights**  
- **MiniMax‑H3 family dominates the video‑generation space** with three new releases (Turbo, Turbo‑LoRA, Prompt‑Rewriter) and a ready‑to‑use ComfyUI build, showing strong community momentum around text‑to‑video pipelines.  
- **DeepSeek’s V4 Flash model (deepseek‑ai/DeepSeek‑V4‑Flash‑0731) surged past 3 k weekly likes**, highlighting rapid adoption of the latest open‑weight reasoning model.  
- **Quantization and fine‑tuning tools are exploding** – dozens of GGUF, INT8, NVFP4 and LoRA variants of MiniMax‑H3, DeepSeek, and Muse‑Glimmer are now available, lowering the barrier for local deployment.  
- **Multimodal giants like FLUX.1‑dev (14 k likes) and the Kimi‑K3 chat model keep reshaping the frontier**, while specialized OCR (Unlimited‑OCR) and safety models (Shieldstral‑1.0) prove niche segments are still thriving.  

---  

## 🧠 Language Models (LLMs, chat models, instruction‑tuned)  

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,059 | 954,441 | The latest open‑weight reasoning model delivering strong performance on reasoning tasks, quickly capturing the community’s interest. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,471 | 1,510,032 | A compact multimodal LLM that excels at image‑text understanding and generation, now widely used for both research and production. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 490 | 89,680 | A lightweight, liquid‑parameter model that offers competitive text‑generation performance while being memory‑efficient. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 312 | 1,344 | An MoE‑based causal LM that showcases the community’s push toward more parameter‑efficient transformers. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 287 | 5,261 | A fast, instruction‑tuned chat model designed for low‑latency applications, gaining traction for its speed‑efficiency trade‑off. |
| [SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 115 | 2,129 | A Qwen‑3.5‑MoE model built with ternary additive compression, offering a novel take on MoE scaling. |

---  

## 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)  

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,430 | 47,468 | A state‑of‑the‑art image‑text‑to‑video model that bridges vision and language for cinematic generation. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 716 | 0 | An emerging multimodal encoder that aligns images with text, attracting attention for its open‑weight nature. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 259 | 15,087 | A streamlined image‑to‑video version of MiniMax‑H3, popular for quick video synthesis. |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | A highly quantized video‑generation model that runs efficiently on consumer GPUs while preserving quality. |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,076 | 480,762 | The leading open‑weight text‑to‑image model, still the benchmark for diffusion‑based generation. |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | A LoRA adapter that refines prompts for MiniMax‑H3, easing user interaction with video models. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 250 | 0 | A creative LoRA fine‑tune that adds stylistic flair to MiniMax‑H3 video generation. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 599 | 0 | A text‑to‑video LoRA that also adds audio generation, expanding the multimodal capabilities of MiniMax‑H3. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 251 | 0 | A ComfyUI‑ready LoRA that makes Turbo‑style video generation seamless in node‑based workflows. |
| [Kijai/MiniMax-H3_experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 184 | 0 | An experimental branch exploring new conditioning strategies for MiniMax‑H3 video models. |

---  

## 🔧 Specialized Models (code, math, medical, embeddings, safety, OCR)  

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 297 | 597 | A large‑scale multilingual voice‑chat model that blends speech synthesis with contextual understanding. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 221 | 6,343 | An open‑weight safety model designed to filter harmful content, gaining traction as organizations prioritize responsible AI. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,002 | 2,921,751 | A high‑throughput OCR pipeline that extracts text from scanned documents, videos, and images—essential for many real‑world applications. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 152 | 617 | An image‑text encoder fine‑tuned for multimodal retrieval, showing promise for search‑and‑caption use cases. |

---  

## 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ, INT8, etc.)  

| Model | Author | Likes | Downloads | Why it’s trending |
|-------|--------|-------|-----------|-------------------|
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,146 | 6,009,639 | A ready‑to‑use ComfyUI node pack for MiniMax‑H3, dramatically simplifying video generation in node workflows. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 192 | 174,862 | Quantized GGUF files that enable fast inference on consumer hardware while preserving the original model’s capabilities. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 637 | 199,167 | An optimized GGUF release of DeepSeek V4 that runs efficiently on GPUs with limited VRAM. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 207 | 0 | GGUF quantization of the multimodal Muse‑Glimmer, expanding access to its image‑text reasoning. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 148 | 0 | Another GGUF version of Muse‑Glimmer, catering to users who need low‑precision inference. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 184 | 89,611 | GGUF variant of LFM2.5, making the liquid‑parameter model accessible on standard hardware. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,862 | 2,439,083 | A heavily quantized, “heretic”‑style fine‑tune of Qwen‑3.6 that pushes the limits of text‑generation safety and creativity. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 440 | 0 | INT8 quantized multimodal model integrated with ComfyUI, offering fast vision‑language inference. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 152 | 0 | A cutting‑edge NVFP4 quantization that squeezes a large vision‑language model into minimal memory. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 256 | 0 | A ComfyUI wrapper focused on region‑specific optimizations for MiniMax‑H3 video generation. |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | Multi‑quantized video model supporting INT4/INT8 and NVFP4

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*