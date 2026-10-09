# Hugging Face 热门模型日报 2026-10-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-09 03:42 UTC

---

**Hugging Face 热门模型日报**  
*2026 年 10 月 9 日*

---

### 今日速览
Lite 视频生成模型 **Lightricks/LTX-2.5** 单日点赞爆发，破 6,955 赞，下载量近 170 万，展现出视频合成领域的强劲人气。Qwen 3.8 家族多款 27B 级多模态大模型持续霸榜，最新量化分支（GSQ/RCO、abliterated）频频登顶社区热榜。文本到图像生成模型（如 abenzerps/Qwen-Image-2.1-Uncensored-GGUF）下载量突破 180 万，显示用户对图生文能力的高度关注。同时，低比特量化（2-bit Ternary-Bonsai、NVFP4）和社区微调模型的数量稳步增长，标志着“小体积、高效率”模型的生态红利正在加速释放。

---

### 热门模型

#### 🧠 语言模型（LLM/对话/指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 17,295 | 6,841,660 | 旗舰多模态对话大模型，支持图像-文本交互，表现卓越成为当前最受欢迎的 LLM 之一。 |
| **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** | deepseek-ai | 4,263 | 1,282,524 | 高效多模态生成模型，融合文本和图像语义理解，适合实时应用场景。 |
| **[autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL)** | autotrust | 2,998 | 1,533,034 | 图像-文本到文本多模态模型，旨在提升复杂任务的推理能力，表现抢眼。 |
| **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** | prism-ml | 2,550 | 4,345,410 | 27B 级 2-bit 量化语言模型，基于 llama.cpp 构建，在低显存环境下实现极致性能。 |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 6,045 | 1,640,938 | 轻量级多模态模型，专注快速对话和指令微调，下载量持续攀升。 |

#### 🎨 多模态与生成（图像/视频/音频/文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 6,955 | 1,688,807 | 强大的图像到视频和文本到视频生成模型，算法成熟，效果逼真。 |
| **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** | abenzerps | 3,684 | 1,933,066 | 高质量文本到图像生成模型，GGUF 量化版易部署，广泛用于创意设计。 |
| **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** | Qwen | 3,128 | 116,957 | 官方图生文模型，擅长图像编辑和细节控制。 |
| **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** | canberkkkkkk | 304 | 9,467 | 高效语音合成模型，支持多种语言语音输出。 |
| **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** | Alissonerdx | 1,321 | 243,910 | 基于 Diffusion+LORA 的脸部换脸模型，实现高质量图像到图像变换。 |

#### 🔧 专用模型（代码/数学/医疗/嵌入）
| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** | google | 1,214 | 21,148 | Gemma-2 的高效文本嵌入模型，擅长语义搜索和特征提取任务。 |
| **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** | unsloth | 204 | 29,692 | GGUF 量化版本的 Gemma-2 嵌入模型，便捷部署。 |
| **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** | Cactus-Compute | 193 | 2,594 | 高精度语音转录模型，支持离线部署。 |
| **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** | ISTA-DASLab | 725 | 3,405,442 | 量化优化版多模态模型，通过 GSQ/RCO 技术降低精度损耗。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA-DASLab | 2,071 | 1,517,150 | 对 Qwen3.8-27B 进行 GSQ/RCO 量化，兼顾性能与显存效率。 |
| **[DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 1,571 | 2,037,446 | 多个微调分支合并的“NEO-CODER MAX”模型，专为编程增强。 |
| **[autotrust/GEV-26B-Decide-NVFP4](https://huggingface.co/autotrust/GEV-26B-Decide-NVFP4)** | autotrust | 165 | 19,655 | 使用 NVFP4 极低比特量化进行二分类微调，减配下的高效解决方案。 |
| **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** | SC117 | 157 | 612,411 | Abliterated 风格量化版，面向开源安全。 |
| **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** | orcarouter | 681 | 492,022 | 社区 abliterated 改版，支持各种安全限制。 |

---

### 生态信号
当前 Hugging Face 的潮流呈现三足鼎立之势：**Qwen 家族**（包括 3.8 系列 27B、Flash-Next、Image-2.1 等）以多模态和量化版本占据主导，体现了中国智造在开源模型领域持续深耕的趋势。**社区量化**（GGUF、EXL3、NVFP4、Ternary-Bonsai）热度不减，低比特技术成为提升模型普适性的核心动力，用户可以利用有限硬件体验大模型能力。**多模态生成**（视频合成、图生文）领域涌现出几款高下载量模型，表明生产力工具正向“即开即用”方向演进。总的来看，开源权重主导生态仍在稳步发展，闭源模型较少出现；微调与量化协作优化成为加速落地的主要途径。

---

### 值得探索

1. **Lightricks/LTX-2.5** – 视频生成市场新宠，算法成熟、效果出众，是创意工作者提升视频产出效率的理想工具。
2. **Qwen/Qwen3.8-27B** – 性能与开源并重的大模型代表，支持图像输入且下载量近 700 万次，适合深入研究多模态推理能力。
3. **prism-ml/Ternary-Bonsai-2-27B-gguf** – 全球首款 2-bit 量化大模型之一，超低内存占用（约 8GB）和高性价比，是探索边缘端高效推理的绝佳案例。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*