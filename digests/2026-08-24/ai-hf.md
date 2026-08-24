# Hugging Face 热门模型日报 2026-08-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-24 00:42 UTC

---

**今日速览**

Hugging Face 热门榜单再次展现出 **Qwen-3.8‑27B 家族的影响力**，其众多社区微调和量化版本（GGUF、FP8、MLX 等）同时占据多个细分榜单。视频生成领域持续升温，**MiniMax‑H3** 和 **Lightricks LTX‑2.5** 分别在文本到视频与图像到视频任务上取得高下载量与热度。**DeepSeek V4** 系列（Flash 与 Pro）和新兴 MoE 模型 **Ornith‑1.5** 进一步推动了开源大模型向更宽上下文与多模态的演进，而量化工具（GGUF、DFlash2）和聊天模板资源也成为模型落地的关键“加速器”。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

| 模型（链接） | 作者 | 点赞 / 下载 | 为什么上榜 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,313 / 2,358,347 | 功能强大的多模态对话基础模型，点赞数最高。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 364 / 23,516 | MoE 架构驱动的 35B 语言模型，支持文本与图像交互。 |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 182 / 31,496 | 紧凑型 9B MoE 模型，兼顾文本生成与多模态理解。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,652 / 3,089,709 | 新一代对话式文本生成模型，社区热度与下载量双高。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 734 / 57,928 | DeepSeek V4 的 Pro 版本，专为强交互场景优化。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,950 / 2,727,920 | 轻量级多模态模型，在图像理解与文本生成上表现优异。 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 214 / 2,280 | 集 ASR 与文本生成于一体的微型模型，适合边缘部署。 |

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型（链接） | 作者 | 点赞 / 下载 | 为什么上榜 |
|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,641 / 738,345 | 高质量图像到视频生成模型，当前视频生成领域的重要工具。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,378 / 4,039,236 | 多模态视频生成模型，覆盖文本到视频与图像到视频任务。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,205 / 17,421 | 文本到音乐生成模型，满足音频创意创作需求。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 672 / 2,653,678 | Qwen3.8 的 FP8 量化版本，兼具多模态对话能力。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) *(多模态分支)* | Qwen | 12,313 / 2,358,347 | 原生支持图像-文本到文本交互，是多模态应用的基石。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 258 / 24,844 | Abliterated 版本的 Qwen3.8，专注于多模态生成任务。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 249 / 131,435 | Qwen3.8 的 GGUF 量化模型，支持图像-文本交互。 |

---

## 🔧 专用模型（代码、数学、医疗、嵌入等）

| 模型（链接） | 作者 | 点赞 / 下载 | 为什么上榜 |
|---|---|---|---|
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 202 / 36,234 | 支持 DFlash2 加速的文本生成模型，适用于高性能推理。 |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 162 / 69,783 | 与 DFlash2 相关的微调模型，主攻文本生成任务。 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-...](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 210 / 193,794 | 创新“冷融合”训练的 Qwen3.8 变体，支持多模态理解。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,420 / 0 | 实用的聊天模板资源，帮助开发者快速构建 Qwen 对话应用。 |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 200 / 0 | 另一套高质量的聊天模板，适用于 Qwen3.5 对话系统。 |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 166 / 0 | MiniMax‑H3 的潜奸 Upscaler 插件，用于视频分辨率提升。 |

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型（链接） | 作者 | 点赞 / 下载 | 为什么上榜 |
|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,738 / 6,674,515 | 社区最佳实践的 GGUF 量化版本，下载量极高。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 954 / 47,098 | MLX 优化的取消审查版本，适合 Apple 硬件加速。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,047 / 190,062 | FP8 量化取消审查模型，兼顾性能与安全性。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 538 / 676,697 | 带 MTP 增强的 GGUF 变体，支持更深层次的文本生成。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 648 / 1,334,820 | 另一款 GGUF 取消审查模型，社区活跃度高。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 375 / 108,666 | 标准的 GGUF 取消审查版本，广泛用于测试。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 297 / 943,360 | GGUF 量化 abliterated 模型，兼顾安全与性能。 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 245 / 579,334 | Heretic 风格的 abliterated GGUF 变体，突显多样化微调。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 249 / 131,435 | 社区推荐的 GGUF 量化模型，支持快速

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*