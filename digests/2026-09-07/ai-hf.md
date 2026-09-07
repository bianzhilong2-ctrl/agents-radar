# Hugging Face 热门模型日报 2026-09-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-07 01:56 UTC

---

# Hugging Face 热门模型日报
**日期：2026-09-07**

---

## 📰 今日速览

Qwen 系列延续统治级表现，**Qwen3.8-27B** 以 14,135 点赞领跑全榜，其 GGUF 量化版本（unsloth 出品）下载量突破千万。**MiniMax-H3** 凭借近 500 万下载成为视频生成领域当红炸子鸡。社区微调生态持续活跃，围绕 Qwen3.8 的"uncensored / abliterated"变体扎堆出现，反映出用户对模型可控性的强烈需求。量化方面，GGUF 仍是主流，FP8、NVFP4 等新格式也开始崭露头角。

---

## 🧠 语言模型（LLM、对话、指令微调）

### 1. [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
- **作者**：Qwen | **点赞**：14,135 | **下载**：6,190,807
- **说明**：阿里通义千问最新主力模型，多模态能力加持下依旧保持顶级文本生成质量，是当前综合性能最强的开源模型之一。

### 2. [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)
- **作者**：zai-org | **点赞**：1,739 | **下载**：410,074
- **说明**：智谱 GLM 系列最新版本，采用 MoE + DSA 架构，定位高性能对话与生成。

### 3. [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)
- **作者**：zai-org | **点赞**：2,099 | **下载**：761,364
- **说明**：GLM-5.3 的轻量快速版本，兼顾速度与多模态能力，适合边缘部署与高吞吐场景。

### 4. [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)
- **作者**：tencent | **点赞**：445 | **下载**：6,441
- **说明**：腾讯混元 4 代预览版，关注其在中文场景与多任务上的表现。

### 5. [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)
- **作者**：google-bert | **点赞**：2,989 | **下载**：52,338,347
- **说明**：经典老牌 NLP 基座，至今仍是 NLP 入门与下游任务微调的事实标准。

### 6. [openai-community/gpt2](https://huggingface.co/openai-community/gpt2)
- **作者**：openai-community | **点赞**：3,707 | **下载**：14,612,342
- **说明**：开源 LLM 鼻祖，凭借超 1400 万下载依然是教学与轻量场景的首选。

---

## 🎨 多模态与生成（图像、视频、音频）

### 1. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)
- **作者**：MiniMaxAI | **点赞**：4,968 | **下载**：4,986,349
- **说明**：当前最火的视频生成模型之一，支持文生视频、图生视频，多平台兼容，社区微调活跃。

### 2. [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)
- **作者**：Lightricks | **点赞**：2,970 | **下载**：1,526,928
- **说明**：单文件视频生成模型，支持图生视频 / 文生视频 / 视频生视频，端到端流程体验佳。

### 3. [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
- **作者**：deepseek-ai | **点赞**：747 | **下载**：209,191
- **说明**：DeepSeek-V4 系列的多模态视觉实验版，主打快速推理与图文理解。

### 4. [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- **作者**：Qwen | **点赞**：4,943 | **下载**：432,966
- **说明**：Qwen 面向下一代架构的实验性 Flash 模型，多模态 + 高速推理，承接前沿研究。

### 5. [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)
- **作者**：BreezeBlue | **点赞**：461 | **下载**：6,357
- **说明**：高质量文本转语音模型，适合对话、播客与有声内容生成场景。

### 6. [facebook/mms-300m](https://huggingface.co/facebook/mms-300m)
- **作者**：facebook | **点赞**：263 | **下载**：12,464
- **说明**：Meta 多语言语音（MMS）预训练模型，覆盖超 1000 种语言，是语音研究的宝库。

### 7. [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)
- **作者**：microsoft | **点赞**：116 | **下载**：889
- **说明**：微软推出的实时流式语音识别模型，专为会议转写与直播场景设计。

---

## 🔧 专用模型（代码、数学、嵌入、检索）

### 1. [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
- **作者**：sentence-transformers | **点赞**：5,568 | **下载**：253,029,336
- **说明**：史上下载量最高的嵌入模型，2.53 亿次下载，已成为 RAG 与语义检索的事实基线。

### 2. [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)
- **作者**：google | **点赞**：507 | **下载**：144,455
- **说明**：Google 时间序列基础模型 3.0 版本，零样本预测能力在金融、运维、能源领域受到关注。

### 3. [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)
- **作者**：openai | **点赞**：1,211 | **下载**：20,579,479
- **说明**：跨模态经典之作，图文对齐能力稳定，至今仍是零样本图像分类的常用底座。

### 4. [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)
- **作者**：IFM | **点赞**：186 | **下载**：1,723
- **说明**：MoVA 架构（MoE + 多视觉对齐）的 36B 参数模型，激活参数小但容量大。

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

### 1. [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
- **作者**：unsloth | **点赞**：3,590 | **下载**：10,311,462
- **说明**：Unsloth 出品的 Qwen3.8 量化版本，下载量突破千万，是本地部署消费级显卡的首选。

### 2. [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)
- **作者**：OBLITERATUS | **点赞**：1,107 | **下载**：995,160
- **说明**：通过"abliteration"技术去除模型安全对齐，提供 MLX / GGUF / Safetensors 三种格式。

### 3. [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)
- **作者**：HauhauCS | **点赞**：982 | **下载**：1,568,315
- **说明**：激进版 uncensored 微调，针对创意写作与角色扮演场景，MTP 多 token 预测加持。

### 4. [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
- **作者**：ISTA-DASLab | **点赞**：469 | **下载**：348,389
- **说明**：采用 GSQ（Group-wise Search Quantization）+ RCO（Row-wise Column Offset）新量化算法，精度更佳。

### 5. [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)
- **作者**：orcarouter | **点赞**：752 | **下载**：287,720
- **说明**：另一个 uncensored 变体，移除拒绝行为，强调开放生成。

### 6. [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)
- **作者**：dealignai | **点赞**：165 | **下载**：15,648
- **说明**：GLM-5.3 的网络安全领域微调 + FP8 量化版本，针对攻防、红队、漏洞分析场景。

### 7. [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)
- **作者**：unsloth | **点赞**：810 | **下载**：823,733
- **说明**：Qwen3.8-Flash-Next 的 GGUF 量化版，让前沿实验模型也能在本地跑起来。

### 8. [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)
- **作者**：nvidia | **点赞**：114 | **下载**：13,321
- **说明**：使用 NVIDIA Model Optimizer 的 NVFP4 新量化格式，针对 Blackwell 架构优化。

### 9. [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)
- **作者**：Jackrong | **点赞**：130 | **下载**：22,128
- **说明**：Qwen3.8 的"章鱼"魔改版本，多卡推理优化，主打长上下文与高效生成。

### 10. [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
- **作者**：DavidAU | **点赞**：249 | **下载**：211,018
- **说明**：作者一贯的"超长命名"风格实验作品，融合 Heretic / Cold-Fusion / 编程增强等多项技术。

### 11. [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)
- **作者**：OpenVDN | **点赞**：209 | **下载**：0
- **说明**：基于 MiniMax-H3 的微调变体，新发布，关注后续下载与社区反馈。

---

## 📊 生态信号

本周榜单呈现出三大明显趋势**。第一，Qwen 家族形成"生态垄断"**，榜单中超过三分之一条目与 Qwen3.8 相关，覆盖基座、Flash、实验版、量化版、uncensored 版等全链路。**第二，开源权重继续主导潮流**，除 OpenAI/Google 等老牌基座外，新晋明星（DeepSeek、智谱、MiniMax、腾讯、Lightricks）几乎全部采用开源权重策略，闭源厂商在开源社区声量下滑。第三，**社区微调 + 量化**成为最活跃的方向，"uncensored / abliterated" 与 GGUF 变体扎堆，反映用户对模型可控性、本地化、跨平台部署的强烈需求。值得关注的是，ISTA-DASLab 的 **GSQ/RCO** 量化算法与 NVIDIA 的 **NVFP4** 格式代表了量化领域的新探索，预示未来推理成本仍有下探空间。

---

## 🌟 值得探索

### 1. [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
综合性能与生态成熟度的最佳折中，无论做研究、部署还是下游任务微调，Qwen3.8 都是当前最值得投入时间的开源底座。

### 2. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)
视频生成领域的现象级模型，社区微调（如 OpenVDN 变体）已经出现，适合探索视频生成的可控性与风格化潜力。

### 3. [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
如果关注**量化算法研究**，这个 GSQ+RCO 组合非常前沿，值得在精度与推理速度之间做实测对比。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*