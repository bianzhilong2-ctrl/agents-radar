# Hugging Face 热门模型日报 2026-09-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-03 02:07 UTC

---

**Hugging Face 热门模型日报**
*2026‑09‑03*

---

### 📅 今日速览
Hugging Face 榜单再次证明了**多模态生成**和**高效量化**的热度，MiniMax‑H3 视频模型下载量飙升至 500 多万，Qwen‑3.8‑27B 家族稳居点赞冠军之位，多个**GGUF/FP8 微调版本**（如 unsloth、orcarouter）迅速扩散。此外，**中文大模型**（GLM‑5.3‑Flash）和**视频生成扩散模型**（LTX‑2.5）也成为关注焦点。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai-org | 1,519 | 94,403 | 22B 语言模型，擅长中英文对话，专注轻量化推理。 |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai-org | 1,968 | 441,348 | Flash 优化版，支持文本-图像→文本任务，速度更快。 |
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13,696 | 4,960,483 | 27B 通才大模型，支持中文/英文指令及多模态理解。 |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,740 | 207,941 | 闪存优先版本，可高效处理图像-文本问答。 |
| **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** | deepseek-ai | 507 | 17,893 | 多模态实验模型，融合视觉理解与文本生成能力。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 1,026 | 805,791 | “被抹除”风格微调版，过滤安全标签以实现更自由的输出。 |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth | 338 | 63,718 | GGUF 量化版本，运行效率更高，适合移动端部署。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,813 | 5,532,597 | 高下载量文本-视频生成模型，支持多语言文本驱动。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,578 | 1,232,274 | 基于图像的视频扩展模型，支持文本/视频到视频转换。 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 357 | 3,086 | 中文语音合成模型，音色自然，支持多种语速调节。 |
| **[Qwen/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 659 | 254,529 | 移除安全过滤的量化版本，适合需要自由输出的场景。 |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS | 871 | 1,276,092 | 多模态 Uncensored 版本，支持视觉问答及更自由的文本生成。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** | sentence-transformers | 5,393 | 250,280,836 | 极轻量嵌入模型，广泛用于语义相似性任务。 |
| **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** | google | 299 | 0 | 纯 PyTorch 时间序列预训练模型，暂无下载。 |
| **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** | XHToken | 123 | 429 | 4B 开源中文代码模型，擅长编程任务。 |
| **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** | peculiar-ragdoll | 194 | 130,086 | 大规模 MoE 代码模型，适用于复杂编程场景。 |

### 📦 微调与量化（社区微调、GGUF、FP8）
| 模型 | 作者 | 点赞 | 下载 | 简介 |
|------|------|------|------|------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,393 | 9,354,057 | 高效量化版本，占用内存小，下载量全球第一。 |
| **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** | unsloth | 728 | 431,339 | Flash-Next 的 GGUF 量化模型，移动设备友好。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1,371 | 316,128 | FP8 精度量化及内容“免 censored”处理。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1,274 | 121,028 | MLX 框架下运行的 Uncensored 版本。 |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 919 | 2,143,289 | 社区微调的 GGUF 版，兼顾性能与自由度。 |
| **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)** | openai-community | 3,537 | 14,290,101 | 经典文本生成基准模型，历史持久度最高。 |

---

### 📈 生态信号（约 150 字）

本周榜单反映出三个明显趋势：

1. **多模态与视频生成崛起**——MiniMax‑H3 下载量跃居榜首，Lightricks LTX‑2.5 亦跻身下载前列，表明社区对从文本/图像到视频的生成能力需求旺盛。

2. **量化与效率优化成为主流**——Qwen 家族的 GGUF/FP8 量化版本（如 unsloth、orcarouter）下载量动辄数百万，体现了对内存友好型模型的强烈偏好，尤其适用于移动端及边缘计算场景。

3. **“免审核/无审查”微调潮流**——多个 Uncensored 版本（HauhauCS、orcarouter、JonathanColetti）持续高榜，说明用户对自由内容输出的兴趣，尽管引发了安全与伦理讨论。

**开源权重**仍占据主导地位（如 all‑MiniLM‑L6‑v2 2.5 亿次下载），而闭源商业模型数量相对较少。量化活动集中在 GGUF、FP8 及 MLX 框架，反映出效率优先的开发趋势。

---

### 🔎 值得探索

1. **MiniMaxAI/MiniMax-H3** – 视频生成领域的顶级模型之一，提供丰富的文本驱动视频能力与超高下载量，适合研究大规模多模态扩散模型。

2. **unsloth/Qwen3.8-27B-GGUF** – 量化效率与原生性能兼得，适用于资源有限的场景，是当前最实用的开源 27B 模型之一。

3. **sentence-transformers

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*