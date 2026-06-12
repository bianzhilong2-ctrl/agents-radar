# Hugging Face 热门模型日报 2026-06-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-12 02:39 UTC

---

# 📊 Hugging Face 热门模型日报（2026‑06‑12）  

## 今日速览
1️⃣ **Gemma‑4 系列狂卷排行榜**——Google 的 gemma‑4‑12B / gemma‑4‑12B‑it 以及社区量化版（unsloth GGUF、OBLITERATUS）持续占据 LLM 版块，下载量均突破 10⁵。  
2️⃣ **多模态爆发**——NVIDIA 的 LocateAnything‑3B（图像‑文本‑文本）和 Qwen3.6‑35B‑A3B（未审查视觉）分别凭借 1.8k 点赞与 3.0M 下载领跑多模态与生成类。  
3️⃣ **量化& GGUF 成为热点**——多个大型模型（Gemma‑4、DiffusionGemma‑26B、Qwen3.6）推出 GGUF/量化版，下载量激增，说明社区对低‑位部署需求强烈。  

---

## 热门模型

| 分类 | 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|------|--------------------|------------|
| **🧠 语言模型** | **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Google / 942 / 675 936 | 12B 统一指令微调模型，性能接近 26B，广受对话/指令任务青睐。 |
| | **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | DeepSeek‑AI / 4 783 / 4 061 006 | 旗舰 40B 对话模型，支持长上下文与多语言，榜单最高点赞。 |
| | **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth / 562 / 711 706 | GGUF 量化版，4‑bit 运行在本地 CPU/GPU，下载量仅次于原始模型。 |
| | **[Google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | Google / 518 / 140 221 | “any‑to‑any” 多任务模型，兼容文本、图像、代码等多模态输入。 |
| | **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs / 309 / 1 859 | 小型代码生成模型，针对嵌入式开发和低算力环境优化。 |
| **🎨 多模态与生成** | **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | NVIDIA / 1 874 / 131 794 | 3B 参数的图像‑文本‑定位模型，可在任意图片中定位自然语言描述的对象。 |
| | **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS / 1 681 / 3 057 541 | 35B 未审查视觉‑语言大模型，兼容图像理解与生成，下载量最高。 |
| | **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | Ideogram‑AI / 487 / 7 170 | FP8 量化的文本‑到‑图像扩散模型，兼顾画质与显存占用。 |
| | **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Google / 504 / 0 | 26B 扩散 + Gemma 指令微调的混合体，面向图片‑文本联想实验。 |
| | **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | ZAI‑ORG / 118 / 0 | 基于姿态驱动的图像‑到‑视频扩散模型，开启轻量级角色动画生成。 |
| **🔧 专用模型** | **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | SapientInc / 750 / 134 752 | 人力资源管理专用文本生成模型，针对招聘/评估语料微调。 |
| | **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | NVIDIA / 372 / 4 965 | 0.6B 流式自动语音识别模型，适配实时转写场景。 |
| | **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | BosonAI / 360 / 19 948 | 4B 端到端中文 TTS，使用多模态预训练提升音质流畅度。 |
| | **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | Google / 178 / 19 806 | 轻量实时文本‑到‑音频模型，支持即兴音乐创作。 |
| **📦 微调与量化** | **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth / 200 / 148 252 | 采用 QAT 4‑bit GGUF，兼顾精度与显存，仅 8 GB 可跑。 |
| | **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth / 143 / 129 110 | 26B 超大模型的 QAT‑GGUF 版，吸引想尝试 26B 但受限硬件的用户。 |
| | **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS / 234 / 14 838 | “去审查”版 Gemma‑4，提供更自由的对话内容，虽下载不高但话题热度高。 |
| | **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | unsloth / 184 / 0 | DiffusionGemma 的 GGUF 量化实现，面向本地桌面部署的图片‑文本生成。 |
| | **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun‑AI / 368 / 50 187 | 轻量化的 Vision‑Language Transformer，已微调适配多任务推理。 |

---

## 生态信号（100 ~ 200 字）

本周 **Gemma‑4 系列** 继续领跑 LLM 领域，无论是原始、指令微调版还是社区量化版（GGUF、QAT），都表现出强劲的下载与点赞势头，显示出 **统一模型+微调+量化三层生态** 正在成熟。**NVIDIA 的 LocateAnything‑3B** 与 **Qwen3.6‑35B‑A3B** 成为多模态趋势的双子星，一方面提供定位/视觉推理能力，另一方面保持开放权重，鼓励二次开发。另一方面，**开源权重占比进一步提升**——除 DeepSeek‑V4‑Pro 仍为闭源外，前 20 条记录均为可自由下载的模型；但 **量化/压缩技术**（GGUF、QAT、FP8）正快速渗透大型模型，压缩比例 4‑8×，推动本地部署成为主流需求。  

---

## 值得探索

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   *理由：* 首个公开的“图像‑文本‑定位”统一模型，适合研发检索、机器人视觉定位等实际场景，且参数仅 3B，易于在中等算力服务器上实验。

2. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**  
   *理由：* 4‑bit GGUF 版在 8 GB 显存的消费级 GPU 上即可跑全参数推理，为个人研发对话系统、指令微调提供了极佳的成本/性能平衡。

3. **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**  
   *理由：* FP8 量化的文本‑到‑图像扩散模型，在保持细节质量的同时大幅降低显存需求，是探索低算力艺术生成的首选基线。  

--- 

*以上信息基于 2026‑06‑12 Hugging Face Hub 本周点赞/下载排行，供模型选型与生态趋势参考。*

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*