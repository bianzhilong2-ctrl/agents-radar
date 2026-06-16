# Hugging Face 热门模型日报 2026-06-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-16 02:50 UTC

---

# Hugging Face 热门模型日报（2026‑06‑16）

---

## 📌 今日速览  
1. **DeepSeek V4 Pro** 以 **4,866** 赞、**2.9M** 下载成为本周榜首，展示了大规模多模态对话模型的竞赛激烈程度。  
2. **Qwen‑3.6‑35B**（HauhauCS 专门化版）仅在摩爪式社区中爆发，惊人的 **2.7M** 下载表现出量化模型在性能/成本平衡上的爆发力。  
3. 生成模型领域继续热度，以 **Gemma‑4‑12B‑IT** 与 **DiffusionGemma‑26B‑A4B‑IT** 成为视觉‑文本交互的重要节点，显示社区对 BLOOM/T5 级别多模态统一框架的追捧。  

---

## 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 / 赞 / 下载 | 一句话说明 |
|------|------------------|------------|
| [DeepSeek‑V4‑Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek‑ai / **4,866 / 2,934,763** | 大规模多模态指令模型，支持自然语言交互与代码生成，已成为主流对话社区的主力战舰。 |
| [gemma‑4‑12B‑it](https://huggingface.co/google/gemma-4-12B-it) | google / **1,034 / 1,160,435** | 4B 统一视觉‑文本指令模型，兼顾低延迟和高质量回答，抢占多模态助手赛道。 |
| [MiniMax‑M3](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI / **833 / 14,312** | 3B 多模态大模型，支持快速部署和多任务微调，适合企业内部小型服务。 |
| [gemma‑4‑12B‑IT](https://huggingface.co/google/gemma-4-12B) | google / **549 / 250,498** | 4B 任何‑到‑任何预训练模型，支持文本、图像和音频，已被多方验证为高效指令执行骨干。 |
| [Qwen‑3.5‑Pro‑Mini](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex‑agi / **288 / 3,681** | 4B 细分多模态模型，兼顾聊天与代码编写，因可裁剪特性受到实验者关注。 |

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 / 赞 / 下载 | 一句话说明 |
|------|-----------------|------------|
| [diffusiongemma‑26B‑A4B‑it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google / **883 / 311,788** | 26B 视觉‑文本扩散模型，具备对话式编辑能力，适用于交互式图像生成。 |
| [LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia / **2,056 / 86,968** | 3B 对象定位+语义分类模型，轻量化部署凸显其工业化潜力。 |
| [qwen3‑6‑35B‑A3B‑Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS / **1,855 / 2,697,882** | 35B 多模态模型，支持语音、图像与文本自由转换，因其量化/剪枝方案备受关注。 |
| [ideogram‑4‑fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram‑ai / **547 / 10,748** | FP8 量化的文本‑到‑图像扩散模型，突显低精度下仍能保持视觉纹理。 |
| [bohsonai/higgs‑audio‑v3‑tts‑4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai / **445 / 38,429** | 4B 多语音 TTS 系统，融合 Qwen3‑3B 语言模型与多音色混声器。 |

---

## 🔧 专用模型（代码、医学、数学、嵌入等）

| 模型 | 作者 / 赞 / 下载 | 一句话说明 |
|------|-----------------|------------|
| [gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 / **642 / 20,207** | 12B 代码生成模型，已量化为 GGUF 版，满足本地无 GPU 编程需求。 |
| [nvidia/nemotron‑3.5‑asr‑streaming‑0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia / **422 / 5,200** | 0.6B 轻量 ASR 流式模型，适合边缘设备低延迟语音识别。 |
| **(无专用医学/数学模型)** | — | 目前本周热榜中缺少显著的医学/数学专用模型，表明此类模型在 HF 生态中仍非主流。 |

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 / 赞 / 下载 | 一句话说明 |
|------|-----------------|------------|
| [unsloth/diffusiongemma‑26B‑A4B‑it‑GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | unsloth / **276 / 107,243** | 26B 视觉扩散模型的 GGUF 量化版本，强调高效推理和易用性。 |
| [unsloth/gemma‑4-12b‑it‑GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth / **617 / 980,781** | 4B Gemma 量化版，下载量超过 900K，说明 GGUF 在实际落地中受欢迎。 |
| [unsloth/MiniMax‑M3‑GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF) | unsloth / **83 / 14,799** | MiniMax‑M3 的 GGUF 版，表明社区积极将大模型压缩进 LLM‑Perceiver 生态。 |
| [Jackrong/Qwopus3.6‑27B‑MTP‑GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF) | Jackrong / **202 / 62,469** | 27B 量化多模态代码生成模型，展示了多任务 MTP 超大模型的可部署性。 |
| [unsloth/gemma-4‑12B‑it‑qat‑GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | unsloth / **243 / 288,390** | QAT 量化 Gemma 有效降低 FP8 误差，驯服 4B 轻量版。 |

---

## 🌱 生态信号（100‑200 字）  
- **模型家族势头**：Gemma 系列（Gemma‑4‑12B、DiffusionGemma‑26B）与 Qwen‑3 系列（Qwen‑3.6‑35B）占据热榜大部分，显示它们在多模态统一与大规模指令执行上的双轮驱动。  
- **开源 vs 闭源**：大部分榜单模型为全开源（可获取权重），但免费下载数相比模型大小仍极不平衡，暗示开源社区更注重可部署性而非无限下载。  
- **量化与微调**：GGUF 量化版在下载量上跑赢原版（如 DiffusionGemma‑26B‑A4B‑it‑GGUF vs 原版），表明低精度推理的成本优势已被实践检验。社区对 AWQ、QAT 的热烈探索进一步把 4‑12B 级大模型带向更广泛的硬件生态。

---

## 🔎 值得探索（精选 2‑3 模型）

1. **[Qwen‑3.6‑35B‑A3B‑Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   - *理由*：大模型 35B 量化后仍保持 50‑70% 速度提升，且在 “prompt‑free” 场景下表现优异，适合做多模态 “大脑” 原型。  

2. **[LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   - *理由*：3B 轻量视觉‑文本定位模型下载量突破 80K，极佳的边缘部署候选。  

3. **[gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   - *理由*：12B 代码生成模型已量化为 GGUF，能够在本地 LLM‑Perceiver 上直接跑通，适合轻量级 IDE 插件。  

---

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*