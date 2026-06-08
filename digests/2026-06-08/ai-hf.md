# Hugging Face 热门模型日报 2026-06-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-08 03:58 UTC

---

**Hugging Face 热门模型日报（2026‑06‑08）**

---

### 📌 今日速览  
本周，面向多模态生成的 **Qwen3.6‑35B‑A3B‑Uncensored** 与 **LocateAnything‑3B** 领跑点赞榜，证明 Open‑AI 流水线的多模态与 “大模型去中心化” 方向仍是热点。与此同时，**DeepSeek‑V4‑Pro** 与 **DeepSeek‑V4‑Flash** 凭借极致压缩与高下载量，再次验证社区社区微调 & GGUF 生态的生机。整个生态明显向大规模已量化模型与“高效推理”为核心的方向聚拢。

---

### 🔍 热门模型

| 分类 | 模型（链接） | 作者 / 点赞 / 下载 | 一句话说明 |
|---|---|---|---|
| 🧠 语言模型 | **deepseek‑ai/DeepSeek‑V4‑Pro**<br>https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro | deepseek-ai / 4 700 / 5 515 325 | 大规模多模态 LLM，支持统一指令交互，显著提升对话与生成质量。 |
| 🧠 语言模型 | **deepseek‑ai/DeepSeek‑V4‑Flash**<br>https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash | deepseek-ai / 1 435 / 3 347 429 | 采用 FlashAttention + GGUF 混合量化，极低成本推理，最受部署者关注。 |
| 🧠 语言模型 | **nvidia/LocateAnything‑3B**<br>https://huggingface.co/nvidia/LocateAnything-3B | nvidia / 1 535 / 115 556 | 大规模局部检索 + 文本生成融合模型，应用场景开箱即用。 |
| 🧠 语言模型 | **HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive**<br>https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive | HauhauCS / 1 523 / 2 923 564 | 大规模非符号化多模态对话，实验性更强，社区讨论度高。 |
| 🧠 语言模型 | **unsloth/Qwen3.6‑27B‑MTP‑GGUF**<br>https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF | unsloth / 687 / 1 150 295 | 轻量化 GGUF 版本，支持图文多模态推理，易于迁移。 |
| 🧠 语言模型 | **openbmb/MiniCPM5‑1B**<br>https://huggingface.co/openbmb/MiniCPM5-1B | openbmb / 779 / 114 329 | 超轻量级私有指令 LLM，适合边缘部署与快速实验。 |
| 🎨 多模态与生成 | **ideogram-ai/ideogram‑4‑fp8**<br>https://huggingface.co/ideogram-ai/ideogram-4-fp8 | ideogram-ai / 356 / 4 377 | FP8 量化版文本‑图像生成器，推理速度大幅提升。 |
| 🎨 多模态与生成 | **Google/gemma‑4‑12B‑it**<br>https://huggingface.co/google/gemma-4-12B-it | google / 698 / 434 969 | 文本‑图像跨模态通用模型，兼具高质量与推理可控。 |
| 🎨 多模态与生成 | **nvidia/Cosmos3‑Super‑Text2Image**<br>https://huggingface.co/nvidia/Cosmos3-Super-Text2Image | nvidia / 124 / 5 075 | 文本到图像生成的专用大模型，输出细节极佳。 |
| 🎨 多模态与生成 | **SulphurAI/Sulphur‑2‑base**<br>https://huggingface.co/SulphurAI/Sulphur-2-base | SulphurAI / 1 588 / 1 715 710 | 强大的文本‑视频生成模型，侧重实时预览。 |
| 🎨 多模态与生成 | **ByteDance/Bernini-R**<br>https://huggingface.co/ByteDance/Bernini-R | ByteDance / 170 / 246 | 基于 3D 渲染器的 Text‑to‑Video，实验性与行业前沿。 |
| 🎨 多模态与生成 | **nvidia/Cosmos3‑Nano**<br>https://huggingface.co/nvidia/Cosmos3-Nano | nvidia / 197 / 29 697 | 轻量化神经图像生成模型，适合资源受限环境。 |
| 🔧 专用模型 | **nvidia/nemotron‑3.5‑asr‑streaming‑0.6b**<br>https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b | nvidia / 262 / 3 439 | 流式语音识别模型，低延迟实时转写。 |
| 🔧 专用模型 | **bosonai/higgs‑audio‑v3‑tts‑4b**<br>https://huggingface.co/bosonai/higgs-audio-v3-tts-4b | bosonai / 199 / 7 557 | 高质量文本‑语音转换，适合多语言 TTS。 |
| 🔧 专用模型 | **MisoLabs/MisoTTS**<br>https://huggingface.co/MisoLabs/MisoTTS | MisoLabs / 144 / 0 | 轻量化 TTS，未公开下载，参照社区版可自行复现。 |
| 🔧 专用模型 | **google/magenta‑realtime‑2**<br>https://huggingface.co/google/magenta-realtime-2 | google / 133 / 13 338 | 实时音频合成，基于 TFLite 部署，适合移动端。 |
| 📦 微调与量化 | **unsloth/gemma‑4‑12B‑it‑GGUF**<br>https://huggingface.co/unsloth/gemma-4-12b-it-GGUF | unsloth / 459 / 568 158 | GGUF 版转储，支持 32767 词表量化，易于跨平台推理。 |
| 📦 微调与量化 | **unsloth/Qwen3.6‑27B‑MTP‑GGUF**<br>https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF | unsloth / 687 / 1 150 295 | 轻量化多模态 GGUF，社区微调范本丰富。 |
| 📦 微调与量化 | **JetBrains/Mellum2‑12B‑A2.5B‑Thinking**<br>https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking | JetBrains / 252 / 16 924 | 对话式 LLM，经过 23B 微调后输出更连贯。 |
| 📦 微调与量化 | **LiquidAI/LFM2.5‑8B‑A1B**<br>https://huggingface.co/LiquidAI/LFM2.5-8B-A1B | LiquidAI / 541 / 118 326 | 大型多模态模型的可压缩 8B 变体，适合教育与实验。 |

---

### 🌱 生态信号  
- **模型家族势头**：Qwen3.6 与 Gemma4 系列继续占据榜首，表明企业级超大模型（50‑100B 参数）与轻量化版（10‑30B）并行发展。同时，Nvidia 自研“Cosmos3”与“LocateAnything”倾向插件化实现与低成本推理。  
- **开源权重 vs 闭源**：绝大多数高点赞模型依旧提供公开权重，体现 Hugging Face 的“全链路开源”哲学。闭源版本主要出现在 Nvidia 量化版本（NVFP4/BF16）与安全封装模型（A3B‑Uncensored）中，主要面向企业部署。  
- **量化 & 微调热点**：GGUF 量化已成主流，unsloth 与 JetBrains 提供多种 GGUF 版本；AWQ 与 BF16 混合量化在 Nvidia 量化模型中得到验证；同时社区微调（如 Qwen3.6‑27B‑MTP‑GGUF）展示了灵活的 “模型→量化→微调” 生态链。  

---

### 🚀 值得探索  
1. **deepseek‑ai/DeepSeek‑V4‑Pro** – 大规模全局模型，支持多模态指令，适合作为“显式大模型”实验基线。  
2. **nvidia/LocateAnything‑3B** – 结合视觉检索与文本生成，开启了交互式知识检索+文本补全的新使用场景。  
3. **SulphurAI/Sulphur‑2‑base** – 领先的 Text‑to‑Video 量化模型，适合 CV 研究与工业团队快速落地视频生成。

---

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*