# Hugging Face 热门模型日报 2026-09-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-08 02:08 UTC

---

# Hugging Face 热门模型日报  

---

## 1. 今日速览  

Hugging Face 上本周热榜显示多模态生成模型持续领跑，尤其以 Qwen 和 MiniMax 相关系列为代表的视觉语言模型备受关注。社区对量化与微调模型的需求旺盛，众多 GGUF 版本的大模型如期发布，满足不同硬件设备的部署需求。同时，嵌入式与语音识别模型也保持较强活跃度，反映出开发者对实际落地应用场景的兴趣日益提升。

---

## 2. 热门模型  

### 🧠 语言模型 (LLM、对话模型、指令微调)

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)**  
  *Google | 点赞: 578 | 下载: 271,713*  
  面向时间序列预测任务的预训练模型，适用于金融、气象等领域的数据分析场景。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)**  
  *openbmb | 点赞: 262 | 下载: 13*  
  国产轻量化对话语言模型，设计用于资源受限环境下的高效推理。

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)**  
  *zai-org | 点赞: 1,753 | 下载: 442,064*  
  智谱 AI 发布的新一代通义千问系列语言模型，具备强大的多语言理解与生成能力。

- **[dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)**  
  *dealignai | 点赞: 274 | 下载: 18,602*  
  专为网络安全领域优化的 GLM-5.3 分支，使用 FP8 精度量化以提升性能。

---

### 🎨 多模态与生成 (图像、视频、音频、文本到X)

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
  *Qwen | 点赞: 14,274 | 下载: 6,416,358*  
  阿里云推出的多模态大模型，在图像理解与对话方面表现优异，广受欢迎。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**  
  *Lightricks | 点赞: 3,083 | 下载: 1,584,382*  
  专注于图像到视频生成任务的扩散模型，支持丰富的视频编辑功能。

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)**  
  *deepseek-ai | 点赞: 800 | 下载: 251,611*  
  DeepSeek 推出的实验性视觉语言模型，兼具文本生成与图像理解能力。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
  *MiniMaxAI | 点赞: 5,008 | 下载: 4,990,034*  
  来自 MiniMax 的多模态视频生成模型，可实现文本到视频及图像到视频等多种生成方式。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)**  
  *BreezeBlue | 点赞: 478 | 下载: 6,754*  
  台湾团队开发的语音合成模型，支持多语种语音生成与自然语言控制。

---

### 🔧 专用模型 (代码、数学、医疗、嵌入)

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)**  
  *sentence-transformers | 点赞: 5,577 | 下载: 251,367,312*  
  广泛用于语义搜索与文本相似度计算的轻量嵌入模型，下载量极高。

- **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)**  
  *microsoft | 点赞: 139 | 下载: 1,144*  
  微软发布的流式语音识别模型，具备实时转录能力，适用于语音助手等场景。

- **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)**  
  *facebook | 点赞: 265 | 下载: 12,213*  
  Meta 推出的多语言语音预训练模型，覆盖 1,100 多种语言。

---

### 📦 微调与量化 (社区微调、GGUF、AWQ)

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
  *unsloth | 点赞: 3,642 | 下载: 10,479,045*  
  适配 Qwen3.8-27B 的 GGUF 格式量化版本，便于在本地运行大模型。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**  
  *ISTA-DASLab | 点赞: 561 | 下载: 403,292*  
  经过 GSQ 与 RCO 优化的 Qwen3.8 GGUF 量化版本，兼顾效率与精度。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**  
  *DavidAU | 点赞: 301 | 下载: 258,896*  
  社区微调的 Qwen3.8 多模态变体，面向角色扮演与创意写作场景。

- **[Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)**  
  *Jackrong | 点赞: 142 | 下载: 60,343*  
  结合 Qwen 与 Llama 的混合结构微调模型，旨在提升多任务表现。

---

## 3. 生态信号  

Qwen 系列模型继续引领潮流，尤其是在多模态领域展现出强劲的生命力。阿里云通过持续迭代 Qwen3.8 等产品，巩固了其在开源多模态空间中的领先地位。社区微调与量化活动频繁，多个 GGUF 版本的发布体现出开发者对低成本部署的济急需求。尽管闭源模型仍占据一定市场份额，但开源权重在技术创新与场景适配方面更具灵活性，吸引了越来越多的研究者与开发者参与其中。

---

## 4. 值得探索  

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**  
  下载量远超其它同类型模型，说明其在本地部署中的实用性非常强，特别适合硬件条件有限的开发者。

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)**  
  作为经典嵌入模型，依然保持高下载量，适用于各类 NLP 应用中的语义匹配任务。

- **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)**  
  实时语音识别能力突出，适用于构建智能客服系统、语音助手等交互式应用。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*