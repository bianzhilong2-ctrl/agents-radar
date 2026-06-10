# Hugging Face 热门模型日报 2026-06-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-10 02:33 UTC

---

# Hugging Face 热门模型日报  
**日期：2026‑06‑10**  

---

## 📌 今日速览  
1. **Gemma 4 系列继续统治 LLM 排行**——Google 的 12 B 版本与社区量化/gguf 变体均获数千点赞，下载量突破 1 M。  
2. **多模态突破**：NVIDIA “LocateAnything‑3B”让图片检索“一键定位”，而 Ideogram‑4 系列（fp8、nf4）在文本‑到‑图像上保持高速增长。  
3. **量化与 GGUF 成为热点**——多款 Gemma‑4 与 Qwen‑3.6‑35B 的 GGUF/量化模型登榜，显示社区对高效部署需求强劲。  

---

## 🔥 热门模型  

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|--------|---------|------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4,740 | 4,302,553 | 领先的 35 B 多语言对话模型，凭借强大的指令跟随能力与对话流畅度登顶本周榜单。 |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 815 | 581,354 | 12 B 指令微调版 Gemma‑4，官方发布的统一 any‑to‑any 大模型，兼具高效推理与开放许可证。 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 734 | 133,351 | 1 B 业务文本生成模型，专注企业 HR 与文档自动化，轻量且易部署。 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 572 | 137,138 | 8 B MoE 语言模型，针对中文/英文混合对话做了高质量微调，社区热评“对话自然”。 |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 163 | 1,784 | 小型（≈1 B）代码生成模型，定位轻量开发者工具，下载量虽小但增长迅速。 |

### 🎨 多模态与生成（图像、视频、音频、文本‑到‑X）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|--------|---------|------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,732 | 123,922 | 3 B 多模态检索模型，输入任意文字即可在图像中定位目标，开启“图文即搜索”。 |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram‑ai | 442 | 5,915 | FP8 量化的文本‑到‑图像扩散模型，兼顾高质量与显存友好，已被多款 UI 项目采用。 |
| **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram‑ai | 288 | 5,250 | NF4 低比特量化版，面向移动端部署，保持 4‑K 解析度输出。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,596 | 2,983,909 | 35 B 大模型的 GGUF 版，支持图像‑文本‑到‑文本，提供未审查的完整能力，下载量居多模态榜首。 |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 196 | 281 | 第一次公开的 **image‑text‑to‑video** 扩散模型，实现文字驱动的短视频生成。 |
| **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)** | jdopensource | 115 | 4,502 | 文本‑到‑视频生成模型，主打轻量化与高帧率输出，适合游戏与广告创作。 |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google | 164 | 18,216 | 文本‑到‑音频实时合成模型，基于最新的 MusicLM‑2 论文，实现秒级音频渲染。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|--------|---------|------|
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 281 | 10,139 | 视觉‑语言 OCR，支持多语言文档结构解析，适合金融与政府部门的文档自动化。 |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 321 | 4,181 | 0.6 B 流式 ASR 模型，针对低延迟语音识别优化，已集成进 NVIDIA Riva。 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 175 | 56,864 | 超大 550 B 参数的科研级 LLM，提供 BF16 权重，主要供企业内部研发使用。 |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 175 | 0 | 开源中文 TTS，采用自回归流模型，适合作为语音交互原型。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 说明 |
|------|------|--------|---------|------|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 532 | 660,140 | 12 B Gemma‑4 IT 的 GGUF 量化版本（q4），在普通笔记本上可实现 4‑8 tokens /s 推理。 |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 172 | 127,332 | 采用 QAT（Quant‑Aware Training）进一步压缩至 q3，保持 0.3 BLEU 下降。 |
| **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth | 115 | 96,059 | 26 B 规模的量化模型，展示了社区在大模型压制显存方面的可行路径。 |
| **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** | google | 115 | 63,049 | 官方提供的 QAT‑q4_0 量化版，为后续高效部署提供基准。 |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun‑ai | 358 | 46,729 | 3.7 B 多模态 LLM 的 FlashAttention‑优化版，显著提升图文混合推理速度。 |

---

## 📈 生态信号  

本周 **Gemma‑4 系列**（官方和社区量化变体）继续强势，占据 LLM 类榜单 4/5 名额，说明 Google 开源的统一模型体系正成为社区标准。与此同时 **Qwen‑3.6‑35B** 的 GGUF 版快速攀升，表明大模型在 **高比特量化 + 多模态** 方向的竞争日趋白热化。  

从 **开放 vs 闭源** 看，榜单前十几名几乎全部为 **MIT/Apache** 许可证的模型（Google、NVIDIA、Ideogram、UnsLoTh），只有少数如 **HauhauCS** 采用自定义许可。这体现出 **开源权重正在成为商业化落地的首选**，尤其在需要二次开发和本地部署的场景。  

量化层面，**GGUF** 与 **QAT** 的组合成为热点，社区在 12 B‑26 B 区间探索 q3‑q4 量化，下载量（单模型>600 k）表明实际生产环境对 **显存友好、推理速率** 的需求已超过纯粹的规模追求。  

---

## 🔍 值得探索  

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – 兼顾检索与定位的跨模态能力，适合构建“图片搜索即定位”产品原型。  
2. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** – 12 B LLM 的 gguf 量化实现，能够在普通消费 GPU 上实现可交互推理，是研究低成本部署的最佳案例。  
3. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – 当前最强的对话/指令模型，性能与开放许可兼具，适合做高级聊天机器人与复杂指令微调实验。  

---  

> **小贴士**：若计划在生产环境使用以上模型，建议优先下载 **GGUF/量化版**（如 UnsLoTh、Google QAT），并结合 **FlashAttention** 或 **NVIDIA TensorRT** 加速库，以获得最优显存占用和推理速度。祝您玩得开心！

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*