# Hugging Face 热门模型日报 2026-10-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-08 03:37 UTC

---

**Hugging Face 热门模型日报（2026‑10‑08）**  

---

### 今日速览  
本周 Hub 上的热度仍被 **Qwen 系列** 多模态模型占据，尤其是 Qwen3.8‑27B 及其 Flash、GGUF 变体，点赞与下载均居前列。与此同时，**社区量化（GGUF、AWQ）和微调版本** 涌现大量，显示开发者更倾趣于在本地或低资源环境部署大模型。嵌入模型（EmbeddingGemma‑2 及其 GGUF 版）也保持稳定关注度，说明检索增强生成（RAG）场景需求持续增长。  

---

## 热门模型  

#### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型 | 作者 | 点赞 | 下载 | 一句话介绍 |
|------|------|------|------|------------|
| [autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide) | autotrust | 1,392 | 895,867 | 基于 Gemma4 的 26B 文本分类模型，擅长判断任务并在 System‑One 基准上表现突出。 |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 785 | 5,775 | 采用 MoE 架构的 1B 文本生成模型，强调推理能力并在 VLLM 中表现流畅。 |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 634 | 33,633 | 29B 参数的 GGUF 量化版本，兼容 Llama.cpp，适合低显存环境的文本生成。 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 488 | 19,483 | 基于 Gemma4‑Unified 的文本生成模型，专注于让机器输出更具人类风格的语言。 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,351 | 28,497 | 专为系统一决策（System‑One）设计的文本分类模型，经过校准可提供可靠的概率输出。 |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 292 | 1,903 | 使用 EXL3 量化的 GLM‑MoE 模型，提供未经审查的中文文本生成能力。 |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 462 | 19,030 | 基于 Qwen3.8 的 27B 未审查 GGUF 版本，适合需要开放式文本生成的场景。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,531 | 4,271,466 | 2‑bit 权重的 Ternary Bonsai 模型，极致压缩后仍保持较强的文本生成表现。 |
| [autotrust/GEV-26B-Decide-NVFP4](https://huggingface.co/autotrust/GEV-26B-Decide-NVFP4) | autotrust | 162 | 14,957 | 采用 NVFP4 低精度格式的 GEV‑26B 分类模型，进一步降低显存占用。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）  
| 模型 | 作者 | 点赞 | 下载 | 一句话介绍 |
|------|------|------|------|------------|
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 2,094 | 1,529,210 | 基于 Qwen3.5 的 27B 视觉语言模型，擅长图文理解与生成，点赞数居高不下。 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,831 | 9,513 | 使用 Qwen3.5 架构的轻量图文到文本模型，适合快速多模态推理。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,589 | 1,820,627 | 未经审查的 Qwen‑Image‑2.1 GGUF 版本，支持 ComfyUI 工作流的高质量文本到图像生成。 |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 663 | 15,722 | 清晰版的 CLEF，在保持图文理解能力的同时提升推理速度。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,821 | 1,674,291 | 扩散单文件模型，支持图像→视频、文本→视频及视频→视频的多向生成，是本周点赞冠军。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,220 | 6,758,993 | Qwen3.8 系列旗舰 27B 多模态模型，图文理解与生成能力均领先，下载量巨大。 |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 274 | 2,724 | 基于 EMA 技术的 Turkish 语音合成模型，展示小规模 TTS 在社区的创新。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 699 | 3,080,123 | Qwen3.8 Flash 的 GSQ‑RCO 量化 GGUF 版，兼顾速度与精度，适合图文任务。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,102 | 109,298 | 官方发布的 Qwen‑Image‑2.1 文本到图像 Diffusion 模型，支持图像编辑与再生成。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,908 | 12,970 | 9B 多模态视觉语言模型，强调空间推理能力，适合复杂图文任务。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,023 | 1,609,433 | Qwen3.8 的 Flash 变体，在保持高质量图文理解的同时大幅降低延迟。 |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,299 | 238,952 | 基于 Diffusers 的人脸交换 LoRA，专为 Qwen‑Image‑2.1 系列优化，实现高保真面部替换。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,237 | 1,255,513 | DeepSeek V4.1 的图文到文本 Flash 版本，兼具强大的语言生成与多模态理解。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,554 | 2,088,541 | 高度定制的未审查 GGUF 版本，融入 Turbo、Heretic 等多种技巧，追求极致生成效果。 |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 147 | 2,249 | 轻量级语音识别模型，采用 Cactus‑Needle 架构，适用于端侧

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*