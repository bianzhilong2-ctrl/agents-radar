# Hugging Face 热门模型日报 2026-10-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-18 02:11 UTC

---

**Hugging Face 热门模型日报（2026‑10‑18）**

---

### 今日速览
今天的榜单被多模态大模型和社区量化/微调版本占据主导，Qwen 系列的图文模型以及 Lightricks 的图像‑视频生成模型点赞数遥遥领先。与此同时，嵌入模型（如 Google 的 EmbeddingGemma‑2）和专用分割/OCR 模型也保持稳定下载量，显示出开发者正在同时追求通用多模态能力与垂直领域精准工具。量化形式（GGUF、FP4、LoRA）在榜单中频繁出现，表明社区对低资源部署和定制化微调的需求持续升温。

---

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **jialinyyzz/humanizer** – 作者: jialinyyzz | 点赞: 1,900 | 下载: 95,870  
  一句话：专注于让生成文本更具人类写作风格的轻量级文本生成模型，适用于润色和创作辅助。

- **LiquidAI/LFM2.5-24B-A2B** – 作者: LiquidAI | 点赞: 448 | 下载: 11,926  
  一句话：基于混合专家（MoE）架构的 24B 参数语言模型，在推理效率与表达能力之间取得良好平衡。

- **ConwayResearch/Underdog-Saluki-27B-1.0** – 作者: ConwayResearch | 点赞: 529 | 下载: 394,277  
  一句话：带有 GGUF 量化并内置工具调用（tool‑calling）功能的 27B 大模型，便于在本地环境中执行复杂指令。

- **LiquidAI/LFM2.5-24B-A2B-GGUF** – 作者: LiquidAI | 点赞: 197 | 下载: 82,115  
  一句话：同上模型的 GGUF 量化版本，进一步降低显存占用，适合资源受限的部署场景。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **Lightricks/LTX-2.5** – 作者: Lightricks | 点赞: 8,235 | 下载: 1,993,003  
  一句话：领先的图像‑到‑视频生成模型，支持文本驱动的视频合成与帧间平滑过渡，适用于创意内容制作。

- **Qwen/Qwen3.8-27B** – 作者: Qwen | 点赞: 17,912 | 下载: 7,795,543  
  一句话：Qwen 系列最新 27B 多模态基座，能够同时理解图像并生成连贯文本，广泛用于视觉问答与图文创作。

- **abenzerps/Qwen-Image-2.1-Uncensored-Quantized** – 作者: abenzerps | 点赞: 4,495 | 下载: 2,571,722  
  一句话：基于 Qwen 的文本‑到‑图像模型，采用未经审查的权重并进行 GGUF 量化，便于在本地生成高质量图像。

- **autotrust/JEV-27B-VL** – 作者: autotrust | 点赞: 6,741 | 下载: 1,704,732  
  一句话：27B 参数的图文到文本模型，侧重于复杂场景的视觉理解与指令遵循，适合多轮视觉对话。

- **Qwen/Qwen3.8-Flash-Next** – 作者: Qwen | 点赞: 6,310 | 下载: 2,457,201  
  一句话：Qwen 的轻量级闪存版图文模型，在保持强多模态能力的同时大幅提升推理速度。

- **deepseek-ai/DeepSeek-V4.1-Flash** – 作者: deepseek-ai | 点赞: 4,606 | 下载: 1,306,744  
  一句话：DeepSeek 最新的图文到文本闪存版，兼顾生成质量与推理延迟，适用于实时交互场景。

- **black-forest-labs/flux-3-image-klein-comfy** – 作者: black-forest-labs | 点赞: 658 | 下载: 224,108  
  一句话：基于 Flux 的图像‑到‑图像编辑模型，已预置 ComfyUI 工作流，便于进行风格迁移与局部修改。

- **fishaudio/drama-3** – 作者: fishaudio | 点赞: 620 | 下载: 8,193  
  一句话：多讲话人文本‑到‑语音合成模型，支持情感控制与角色切换，适用于有声书与游戏配音。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **google/embeddinggemma-2** – 作者: google | 点赞: 2,598 | 下载: 158,490  
  一句话：基于 Gemma 架构的通用文本嵌入模型，提供高质量语义向量，适用于检索、聚类及多分类任务。

- **facebook/sam3** – 作者: facebook | 点赞: 4,564 | 下载: 2,013,498  
  一句话：最新的分段一切（Segment Anything）模型，能够通过提示快速生成高精度掩码，广泛用于图像分割与标注。

- **nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2** – 作者: nerkyor | 点赞: 414 | 下载: 228,320  
  一句话：在 Qwen 27B 基础上融合代码专用指令与多种推理技巧的微调版，擅长代码生成、调试及算法推导。

- **datalab-to/indra-ocr** – 作者: datalab-to | 点赞: 170 | 下载: 1,053  
  一句话：轻量级 OCR 模型，采用 ONNX 格式，专注于中文场景的文字识别，适合嵌入式设备。

- **vllm-sr/d3** – 作者: vllm-sr | 点赞: 231 | 下载: 4,263  
  一句话：零样本分类模型，利用 Qwen3.5 的特征提取能力实现跨任务的快速标签预测，无需额外微调。

#### 📦 微

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*