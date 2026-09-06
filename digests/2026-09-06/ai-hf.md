# Hugging Face 热门模型日报 2026-09-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-06 01:59 UTC

---

# 📊 Hugging Face 热门模型日报 · 2026-09-06

---

## 🔥 今日速览

本周 Hugging Face 热点高度集中在 **Qwen3.8 系列** 与 **GLM-5.3 系列** 两大模型家族的爆发式扩散上。DeepSeek-V4 Flash Vision 实验版本以 680 点赞首发登场，多模态视频生成赛道（MiniMax-H3、LTX-2.5）热度持续攀升。社区量化活动异常活跃，仅 Qwen3.8-27B 一款的 GGUF 衍生版本就超过 10 个，abliteration（去对齐/无审查）变体成为新趋势。时间序列预测领域 Google 发布 TimesFM 3.0，为垂直应用注入新动能。

---

## 📋 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 | 📥 | 一句话说明 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,038 | 6,024,467 | 本周最受宠爱的多模态大模型，多任务对话能力强劲，下载量与点赞双爆 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,914 | 401,327 | Qwen 系列的轻量实验版本，主打高效推理与对话平衡 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,079 | 727,610 | GLM 5.3 轻量版，兼容多模态输入，社区热度紧随 Qwen 之后 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,719 | 370,417 | GLM 5.3 完整版，MOE + DSA 架构，对话与推理能力进阶 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 443 | 6,195 | 腾讯 Hunyuan 家族最新预览版，中文场景潜力值得关注 |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 174 | 1,333 | MoVA 架构模型，稀疏激活设计提升推理效率 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,701 | 14,739,982 | 经典基线模型，长期教育与研究基础设施级存在 |

### 🎨 多模态与生成（图像、视频、音频、文本→X）

| 模型 | 作者 | 👍 | 📥 | 一句话说明 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,934 | 5,057,414 | 视频生成新贵，文本/图像驱动高质量视频输出，下载量惊人 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,891 | 1,484,329 | LTX 系列升级版，支持图生视频/视频生视频/文生视频多模态生成 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 680 | 184,542 | DeepSeek V4 视觉实验版，多模态理解能力首度开源曝光 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,210 | 20,755,211 | CLIP 经典骨干，零样本图像分类基石模型 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 448 | 5,962 | 第二代 Breeze TTS，中文语音合成新选择 |

### 🔧 专用模型（代码、数学、嵌入、时序）

| 模型 | 作者 | 👍 | 📥 | 一句话说明 |
|---|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,559 | 255,006,933 | 最受欢迎的轻量句嵌入模型，搜索/聚类/检索场景绝对首选 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 457 | 123,025 | Google 时序预测开源最新版，覆盖长序列预测场景 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,986 | 56,175,564 | NLP 领域"水分子"，掩码语言建模基线，长期基础设施地位稳固 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,101,423 | BERT 轻量化版本，在资源受限场景广泛部署 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 263 | 12,961 | Meta 多语言语音预训练骨干，覆盖千级语言 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 | 📥 | 一句话说明 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,545 | 10,157,510 | Qwen3.8-27B 官方量化入口，下载量破千万，社区量化标杆 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,096 | 968,936 | Abliteration 去对齐版，解除安全限制，争议性与实用性并存 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 964 | 1,527,627 | 激进无审查 MTP 变体，本周下载量突破 150 万 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 987 | 2,453,361 | llama.cpp 生态友好型无审查量化，兼容性优秀 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 798 | 780,823 | Flash-Next 轻量版量化，在资源受限设备上提供多模态能力 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 728 | 283,774 | orcarouter 系列的 27B 无审查量化，风格鲜明 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-G

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*