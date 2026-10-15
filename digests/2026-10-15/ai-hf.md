# Hugging Face 热门模型日报 2026-10-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-15 02:24 UTC

---

**Hugging Face 热门模型日报（2026‑10‑15）**

---

## 今日速览  
本周榜单继续被 **Qwen 系列多模态模型** 主导，尤其在图像‑文本‑到‑文本和文本‑到‑图像方向上涌现大量 GGUF 量化与未经审查的社区版本。与此同时，**视频生成**（图像→视频、文本→视频）和 **专用嵌入/OCR** 模型下载量显著上升，表明开发者正把多模态能力向更高维的时序信息延伸。量化（GGUF、FP8）和社区微调（LoRA、Unsloth）仍是推动模型易用性的关键力量。

---

## 热门模型  

### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型 | 作者 | 点赞 | 下载 | 一句话介绍 |
|------|------|------|------|------------|
| [autotrust/JEV-35B](https://huggingface.co/autotrust/JEV-35B) | autotrust | 743 | 27,970 | 基于 Qwen3‑5‑MoE 的文本分类模型，在系统决策任务上表现突出。 |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 458 | 311,969 | 27B 参数的 GGUF 量化语言模型，支持工具调用和函数调用，适合低资源部署。 |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 311 | 4,067 | 基于 LFM‑MoE 架构的 24B 参数文本生成模型，强调高效推理。 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,602 | 47,754 | 文本分类模型，专注于系统一决策与校准，适用于安全审查场景。 |
| [autotrust/JEV-35B-NVFP4](https://huggingface.co/autotrust/JEV-35B-NVFP4) | autotrust | 306 | 33,343 | 采用 NVFP4 量化的 JEV‑35B 分支，在保持精度的同时大幅降低显存占用。 |
| [vllm-sr/d3](https://huggingface.co/vllm-sr/d3) | vllm-sr | 165 | 1,805 | 零射击分类模型，利用 Qwen3‑5 特征进行快速任务适配。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）  
| 模型 | 作者 | 点赞 | 下载 | 一句话介绍 |
|------|------|------|------|------------|
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,640 | 65,616 | 结合图像‑文本‑到‑文本与 Gemma4 Unified 的人性化文本生成模型。 |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 778 | 12,704 | 高速文本‑到‑图像扩散模型，适合实时创作。 |
| [openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 633 | 4,157 | 35B 参数的多模态视觉语言模型，支持图像理解与生成。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,312 | 2,315,771 | 未经审查的 Qwen‑Image‑2.1 Turbo GGUF 版本，下载量爆发。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,799 | 1,823,507 | 图像‑到‑视频扩散模型，兼容文本‑到‑视频与视频‑到‑视频任务。 |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 452 | 258,320 | Qwen‑Image‑2.1 Turbo 的未经审查 GGUF 版本，便于本地推理。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,708 | 7,221,327 | 27B 参数的图像‑文本‑到‑文本模型，兼具强大对话能力。 |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 319 | 839 | 多说话人文本‑到‑语音合成模型，适用于有声剧场景。 |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 396 | 14,854 | 3B 参数的轻量图像‑文本‑到‑文本模型，适合边缘设备。 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,160 | 18,304 | 基于 Qwen3‑5 的图像‑文本‑到‑文本模型，专注于高效推理。 |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 258 | 1,132 | 基于像素空间的文本‑到‑图像扩散模型，旨在降低生成延迟。 |
| [openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B) | openbmb | 333 | 2,543 | 1B 参数的 MiniCPM‑V 系列多模态模型，适用于资源受限场景。 |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 449 | 16,890 | 基于 MiniMax‑H3 的图像‑文本‑到‑视频 LoRA 适配器，支持首尾帧控制。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,771 | 1,900,731 | 未经审查的 Qwen3.8‑27B Turbo GGUF 版本，融合多种微调技巧。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,212 | 2,185,644 | 高速图像‑文本‑到‑文本模型，采用 Flash‑Next 架构提升吞吐。 |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 642 | 78,156 | 基于 DeepSeek‑V4.1 的 FP8 量化未经审查多模态模型。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://h

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*