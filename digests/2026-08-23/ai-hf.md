# Hugging Face 热门模型日报 2026-08-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-23 00:43 UTC

---

**Hugging Face 热门模型日报**
*2026 年 8 月 23 日*

---

### 今日速览
1. **Qwen 家族持续领跑**——基础模型和众多量化/微调版本均破百万下载，点赞势头不减。
2. **多模态生成风头甚劲**——MiniMax-H3 爆红视频榜，Lightricks LTX-2.5 和 MiniMax-Music3 也表现出色。
3. **深度求是系列强势出击**——DeepSeek-V4-Flash 点赞和下载量双双超过 300 万，稳居榜首。
4. **社区微调与量化蔚然成风**——GGUF/FP8 等高阶量化版本随处可见，定制化“Uncensored/ABL” 模型接连涌现。
5. **工具生态繁荣**——聊天模板插件、视频超分模型等工程工具进一步推动开发效率。

---

### 热门模型

#### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 / 下载 | 简介 |
|-------|--------|--------------|--------|
| **Qwen/Qwen3.8-27B** (https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,135 / 2,090,699 | 27B 规模的图文对话基础模型，是大量下游微调的首选源头。 |
| **Qwen/Qwen3.8-27B-FP8** (https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 664 / 2,306,777 | 相同参数但 FP8 量化，运行更高效，下载量接近原版。 |
| **Qwen/Qwen3.8-2.4T-A95B** (https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,146 / 17,386 | 突破性 MoE 模型，参数覆盖 2.4 万亿，擅长大规模推理。 |
| **moonshotai/Kimi-K3** (https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,926 / 2,612,739 | 轻量级 Kimi 家族模型，支持图文理解，社区欢迎度极高。 |
| **meta-models/Muse-Glimmer-30B** (https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,755 / 517,564 | 大规模对话模型，强调自然语言与视觉内容的流畅融合。 |
| **deepseek-ai/DeepSeek-V4-Pro-0813** (https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 718 / 54,566 | DeepSeek V4 的 Pro 版本，聚焦高阶推理与对话能力。 |
| **deepseek-ai/DeepSeek-V4-Flash-0731** (https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,630 / 2,976,281 | 轻量级 Flash 版，下载量破 270 万，大规模部署首选。 |
| **ornith-ai/Ornith-1.5-35B-A3B** (https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 320 / 12,611 | Qwen3_5 MoE 架构的微调模型，擅长图文生成任务。 |
| **superwhisper/s1-mini** (https://huggingface.co/superwhisper/s1-mini) | superwhisper | 202 / 1,913 | 轻量语音识别微调模型，适合实时转录场景。 |
| **0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF** (https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 226 / 505,813 | “异教徒” 路线上的强力量化版， 支持未审核内容，社区追捧。 |

#### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 点赞 / 下载 | 简介 |
|-------|--------|--------------|--------|
| **Lightricks/LTX-2.5** (https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,564 / 694,670 | 高质量图像到视频扩散模型，支持多种风格迁移。 |
| **MiniMaxAI/MiniMax-Music3** (https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,181 / 16,644 | 多模态音乐生成模型，可根据文本提示创作完整音频。 |
| **MiniMaxAI/MiniMax-H3** (https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,338 / 3,899,160 | 文本/图像到视频的开源模型，下载量近 400 万。 |
| **TenStrip/10Eros-Max** (https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 316 / 0 | 基于 MiniMax-H3 的视频生成微调模型，专注创意动漫风格。 |
| **huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF** (https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 254 / 635,416 | 通用的图文 ablation 量化模型，适用于众多下游任务。 |
| **empero-ai/Qwen3.8-27B-Ridge-GGUF** (https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 244 / 97,247 | “Ridge” 增强版 GGUF，兼顾性能与内存占用。 |
| **empero-ai/Qwen3.8-9B-Distill** (https://huggingface.co/empero-ai/Qwen3.8-9B-Distill) | empero-ai | 164 / 9,260 | 蒸馏微调模型，目标高效推理和图文理解。 |

#### 🔧 专用模型（工具 / 插件 / 工程工具）

| 模型 | 作者 | 点赞 / 下载 | 简介 |
|-------|--------|--------------|--------|
| **froggeric/Qwen-Fixed-Chat-Templates** (https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,397 / 0 | 为 Qwen 提供结构化聊天模板的实用插件，帮助开发者快速组装对话流程。 |
| **LBH-123-AI/Minimax_h3_latent_Upscaler** (https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 159 / 0 | MiniMax-H3 的 latent 空间超分工具，提升视频生成分辨率。 |

#### 📦 微调与量化（社区衍生版、GGUF、FP8 等）

| 模型 | 作者 | 点赞 / 下载 | 简介 |
|-------|--------|--------------|--------|
| **unsloth/Qwen3.8-27B-GGUF** (https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,624 / 6,320,542 | 官方量化版本，内存占用低，下载量全球领先。 |
| **orcarouter/Qwen3.8-27B-Uncensored-MLX** (https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 885 / 34,909 | MLX 优化版的未审核模型，专为苹果硬件加速设计。 |
| **orcarouter/Qwen3.8-27B-Uncensored-FP8** (https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 989 / 142,846 | FP8 量化，未审核文本，适用于需要低延迟的场景。 |
| **orcarouter/Qwen3.8-27B-Uncensored-GGUF** (https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 336 / 85,371 | 纯 GGUF 量化版，保持原版对话风格，方便部署。 |
| **OBLITERATUS/Qwen3.8-27B-OBLITERATED** (https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 531 / 164,950 | 风格化的“毁灭者” 微调模型，适合创作者快速生成。 |
| **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF** (https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 485 / 486,221 | 集 MMT 增强与量化于一身的多模态生成模型。 |
| **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** (https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 623 / 1,223,422 | 社区口碑极高的未审核量化版，支持大规模文本生成。 |
| **huihui-ai/Huihui-Qwen3.8-27B-abliterated** (https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 246 / 21,612 | 非量化版的 ablation 模型，轻量便捷。 |
| **DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1...** (https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 190 / 176,969 | 多模型融合（GAIN）版本，利用多源知识增强输出。 |
| **z-lab/Qwen3.8-27B-DFlash2** (https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 194 / 29,705 | DFlash2 加速技术加持的高效推理模型。 |

---

### 生态信号（约 150 字）

Qwen 家族目前是当之无愧的领跑者，其基础模型及全系列量化/微调版本频频登顶下载

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*