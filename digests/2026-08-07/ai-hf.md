# Hugging Face 热门模型日报 2026-08-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-07 02:08 UTC

---

**Hugging Face 热门模型日报（2026‑08‑07）**  

---

### 今日速览  
本周榜单显示，**多模态视频生成**（MiniMax‑H3 系列及其社区 LoRA/量化版）继续领跑点赞榜；与此同时，**GGUF 量化与社区微调**活跃度提升，众多基础模型出现不少衍生版本；在纯语言方向，**中文大模型家族**（GLM、DeepSeek、Kimi）依然保持高下载量，而代码与专用模型则开始出现细分领域的探索。整体来看，开源权重仍是主流，但社区在量化、LoRA 和多模态融合上的创新正在加速。

---

### 热门模型  

#### 🧠 语言模型（LLM、对话模型、指令微调）  
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**  
  作者: deepseek‑ai | 点赞: 2,648 | 下载: 617,900  
  最新版的 DeepSeek‑V4 Flash，兼顾推理速度与对话能力，因而受到广泛关注。  

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**  
  作者: deepseek‑ai | 点赞: 2,042 | 下载: 2,639,756  
  基础版 DeepSeek‑V4 Flash，下载量巨大，说明其在通用文本生成场景中的广泛采用。  

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  作者: zai-org | 点赞: 4,871 | 下载: 2,391,730  
  GLM 系列的最新版本，凭借强大的多语言理解和指令跟随能力，持续占据热榜。  

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)**  
  作者: LiquidAI | 点赞: 333 | 下载: 73,573  
  轻量级的 Liquid Flow Model，适合资源受限环境的文本生成任务。  

- **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)**  
  作者: inclusionAI | 点赞: 186 | 下载: 1,196  
  专注于中文对话的闪电版模型，低延迟且易于部署。  

- **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)**  
  作者: deepgrove | 点赞: 207 | 下载: 419  
  混合专家（MoE）架构的预览版，展示了在大规模指令微调中的潜力。  

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**  
  作者: Kwaipilot | 点赞: 519 | 下载: 16,961  
  面向代码生成的 Qwen3‑5‑MoE 变体，结合了代码理解与文本生成能力。  

- **[XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)**  
  作者: XYZAILab | 点赞: 424 | 下载: 1,570  
  基于 Qwen3‑5‑MoE 的小型化版本，便于快速实验与微调。  

- **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)**  
  作者: EschaLabs | 点赞: 222 | 下载: 3,394  
  Qwen3.6 大模型的社区微调版，在特定领域（如角色扮演）表现出色。  

#### 🎨 多模态与生成（图像、视频、音频、文本到X）  
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
  作者: MiniMaxAI | 点赞: 2,754 | 下载: 12,102  
  图像‑文本‑到视频生成模型，支持从图像+文字合成短视频，是本周点赞最高的多模态模型。  

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**  
  作者: moonshotai | 点赞: 10,200 | 下载: 1,258,043  
  多模态理解与生成模型（图像‑文本‑到文本），凭借强大的跨模态对话能力受到广泛关注。  

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  作者: baidu | 点赞: 3,929 | 下载: 2,791,862  
  OCR 领域的图像‑文本‑到文本模型，下载量巨大，显示其在文档理解中的实用价值。  

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**  
  作者: DavidAU | 点赞: 1,652 | 下载: 2,087,189  
  基于 Qwen3.6 的未经审查的多模态模型，采用 GGUF 量化便于本地部署。  

- **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)**  
  作者: ethanfel | 点赞: 337 | 下载: 0  
  集成 Qwen3‑VL 与 MiniMax‑H3 的 INT8 量化版，适用于 ComfyUI 工作流。  

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)**  
  作者: LuffyTheFox | 点赞: 407 | 下载: 309,149

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*