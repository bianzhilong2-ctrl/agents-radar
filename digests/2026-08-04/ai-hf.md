# Hugging Face 热门模型日报 2026-08-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-04 01:29 UTC

---

# Hugging Face 热门模型日报 (2026-08-04)

## 今日速览
Hugging Face 上本周热门模型以多模态和语言模型为主，Moonshot AI 的 **Kimi-K3** 凭借其图像-文本处理能力再次登顶榜单。国产开源语言模型持续活跩，百度 **Unlimited-OCR** 和智谱 **GLM-5.2** 均展现强劲表现。社区微调与量化模型（如 GGUF 和 Unsloth 系列）持续吸引开发者关注，推动边缘部署和本地推理需求增长。

---

## 热门模型

### 🧠 语言模型

- [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2)  
  作者: zai-org | 点赞: 4,797 | 下载: 2,180,509  
  智谱推出的新一代 MoE 文本生成模型，在对话和推理任务中具备高性能表现。

- [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)  
  作者: deepseek-ai | 点赞: 2,058 | 下载: 236,076  
  DeepSeek 发布的轻量化文本生成模型，适用于高效推理场景。

- [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1)  
  作者: poolside | 点赞: 909 | 下载: 81,584  
  面向通用文本生成优化的新型开源语言模型。

- [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)  
  作者: Nanbeige | 点赞: 652 | 下载: 34,705  
  中文对话优化的小型语言模型，适合资源受限环境部署。

---

### 🎨 多模态与生成

- [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3)  
  作者: moonshotai | 点赞: 9,850 | 下载: 967,622  
  多模态图像-文本模型，凭借卓越的视觉理解与生成能力成为焦点。

- [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR)  
  作者: baidu | 点赞: 3,846 | 下载: 2,601,062  
  百度推出的 OCR 多模态模型，支持多语言文字识别与理解。

- [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3)  
  作者: MiniMaxAI | 点赞: 1,465 | 下载: 0  
  面向图像到视频生成的前沿多模态扩散模型。

- [**microsoft/Mage-VL**](https://huggingface.co/microsoft/Mage-VL)  
  作者: microsoft | 点赞: 233 | 下载: 431,487  
  微软发布的多模态视觉语言模型，擅长图像描述与推理任务。

---

### 🔧 专用模型

- [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)  
  作者: Kwaipilot | 点赞: 445 | 下载: 14,339  
  面向代码生成优化的专用文本生成模型。

- [**Audio8/Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)  
  作者: Audio8 | 点赞: 212 | 下载: 4,609  
  文本到语音合成模型，支持高质量音频生成。

- [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2)  
  作者: owensong | 点赞: 398 | 下载: 1,944  
  面向 CPU 与边缘设备优化的轻量化 TTS 模型。

---

### 📦 微调与量化

- [**DavidAU/Qwen3.6-27B-Fable-Fusion-711...**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)  
  作者: DavidAU | 点赞: 1,431 | 下载: 1,550,034  
  社区高度优化的 Qwen3.6 GGUF 微调版本，面向本地部署。

- [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)  
  作者: unsloth | 点赞: 429 | 下载: 69,656  
  Unsloth 提供的 DeepSeek 模型 GGUF 格式量化版本。

- [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)  
  作者: HauhauCS | 点赞: 3,269 | 下载: 1,895,741  
  面向多模态推理优化的 Qwen3.6 GGUF 模型。

---

## 生态信号
近期开源语言模型生态活跃，尤其是以 **Qwen3.6**、**Kimi-K3** 和 **GLM-MoE** 系列为代表的国产模型持续引领趋势。这些模型不仅在性能上领先，还通过 GGUF、AWQ 等量化方式拓宽了部署场景。社区微调也非常活跃，许多非商业用途的解锁版本广受欢迎，反映出开发者对灵活性与可控性的强烈需求。闭源模型虽仍占据重要地位，但开放权重的优势在吸引力与应用范围上正逐步增强。

---

## 值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**  
   凭其卓越的图像-文本处理能力，适合多模态应用开发者深入研究与尝试。

2. **[DavidAU/Qwen3.6-27B-Fable-Fusion...GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**  
   高性能且便携的本地 LLM 微调版本，非常适合资源受限环境下的实验。

3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   先进的图像到视频生成技术，拥有广阔的创意应用潜力。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*