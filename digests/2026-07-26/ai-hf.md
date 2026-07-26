# Hugging Face 热门模型日报 2026-07-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-26 01:53 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-07-26

---

## 🚀 今日速览

百度 **Unlimited-OCR** 以 3.1k 点赞、256 万下载霸榜，确立中文 OCR 新标杆；Z.ai **GLM-5.2**（4.4k 点赞）与 Qwen **Qwen3.6-35B-A3B**（2.5k 点赞、640 万下载）双巨头领跑 MoE 大模型；**2-bit/1-bit 极致量化**（Ternary-Bonsai、Bonsai）与 **Uncensored 社区微调**（HauhauCS、DavidAU、LuffyTheFox）形成“压缩部署 + 去对齐”双轮驱动生态；Microsoft 发布 **Mage-Flow**（文生图/编辑）与 **Fara1.5**（Computer Use），OpenBMB 推双机器人 VLA 模型，多模态向具身智能延伸。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / MoE / 对话）

| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|----------|------------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,446 / 707,029 | 国产 MoE 旗舰，DSA 稀疏架构，长上下文与推理双强，开箱即用的 Chat/Reasoning 基座。 |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,516 / 6,413,105 | 阿里新一代 35B 激活 3B MoE，多模态原生支持，下载量断层第一，社区微调母体。 |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 562 / 2,784 | 韩国团队 250B 参数开源巨模，Depth-Upscaling 构建，适合极致性能追求者。 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 661 / 45,260 | 代码专用小模型（~3B），强调推理效率与代码生成质量，附带 GGUF/NVFP4 量化版。 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 406 / 11,573 | 国产 3B 密集模型，中英双语平衡，边缘部署友好。 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 163 / 5,661 | 基于 GraniteMoEHybrid 的 1B 安全对齐小模型，面向受限算力场景。 |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 191 / 2,270 | 新兴架构实验模型，主打特征提取与可控生成。 |

---

### 🎨 多模态与生成（视觉 / 语音 / 具身）

| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|----------|------------|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | **3,106 / 2,564,264** | **本周王者**：无限分辨率 OCR，端到端识别长文本/表格/公式，中文场景 SOTA，生产级就绪。 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,091 / 1,988,680 | Qwen3.6 MoE 去对齐版，保留视觉推理，社区最热“解锁”权重。 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,465 / 1,570,995 | 9B 多模态推理模型，蒸馏 Claude 思维链，GGUF 量化即拿即用。 |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,277 / 749,449 | Kimi 代码专用多模态版，支持图像理解编程，Compressed-Tensors 量化部署。 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,570 / 31,575 | 轻量多模态对话模型，架构创新（Inkling-MM），适合端侧交互。 |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 277 / 1,156 | Flow-based 文生图/编辑统一框架，非扩散范式，推理快、可控性强。 |
| [**conradlocke/krea2-identity-edit**](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 539 / 0 | Krea-2 LoRA，人脸身份保持编辑，ComfyUI 直插。 |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 121 / 31,759 | 边缘端世界模型，面向机器人/自动驾驶的视频生成与预测。 |
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 175 / 607 | **VLA 模型**：视觉-语言-动作三模态，机器人抓取操作端到端。 |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 128 / 379 | 机器人视觉跟踪专用 VLA，配合 Manip 组成完整管线。 |
| [**microsoft/Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 90 / 1,039 | Computer Use Agent，基于 Qwen3.5 微调，能操作 GUI 完成任务。 |
| [**baseten/GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 99 / 1,977 | GLM-5.2 视觉版 NVFP4 量化，SGLang 加速推理。 |
| [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 82 / 47 | 极致小模型 TTS，CPU/边缘实时语音合成。 |

---

### 🔧 专用模型（代码 / 数学 / 安全）

| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|----------|------------|
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 166 / 841 | 基于 Qwen3.5 MoE 的代码专用模型，强化 Agentic Coding 能力。 |

---

### 📦 微调与量化（社区 / GGUF / 极致压缩）

| 模型 | 作者 | ❤️ / 📥 | 一句话解读 |
|------|------|----------|------------|
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,028 / 611,685 | **2-bit 三值量化** 27B，llama.cpp 原生，显存 < 8GB 跑满血大模型。 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 638 / 2,114,965 | **1-bit 二值量化** 27B，下载量全榜第二，极限压缩边界探索。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 545 / 483,845 | 多路融合 + Uncensored + MTP 多Token预测 + GGUF，社区“炼丹”集大成者。 |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 187 / 71,893 | Unsloth 优化量化，vLLM 兼容，代码小模型部署首选。 |
| [**poolside/Laguna-S-2.1-GGUF**](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 141 / 76,957 | 官方发布 GGUF，端侧代码助手即插即用。 |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 135 / 117,106 | NVFP4 量化，H100/B200 Tensor Core 加速推理。 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 153 / 60,643 | Hermes 风格去对齐 + GGUF，角色扮演/创写强。 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 551 / 27,064 | 增强推理/思维链微调，保留视觉多模态。 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 287 / 33,109 | 基于 Qwen3.5 微调的 OCR 专用多模态，中文表格/公式强。 |

---

## 📡 生态信号

**模型家族势头**：**Qwen3.5/3.6 系列**成社区微调绝对主力（12+ 衍生模型上榜），GLM-5.2 以 MoE+DSA 架构确立国产旗舰地位，百度 OCR 证明垂直任务仍有“专用模型 > 通用大模型”红利。  
**开源 vs 闭源**：头部厂商（Z.ai、阿里、百度、微软、NVIDIA、Moonshot）持续投喂开源权重，闭源仅剩 API 服务层；社区形成“官方放基座 → 社区做量化/去对齐/垂直微调 → 官方再吸纳”的正循环。  
**量化/微调热点**：**Sub-4bit 极致压缩**（1-bit/2-bit/NF4/NVFP4）成标配，**Uncensored 去对齐**与 **MTP 多Token预测**成微调标配，**VLA (Vision-Language-Action)** 成具身智能新赛道，**Computer Use Agent** 开始从演示走向可复现权重。

---

## 💎 值得探索

1. **baidu/Unlimited-OCR** — 生产级中文 OCR 即插即用，无限分辨率/长文本/表格/公式全覆盖，**文档数字化/ RAG 入口首选**。  
2. **prism-ml/Ternary-Bonsai-27B-gguf** — **2-bit 27B 仅需 ~6 GB 显存**，llama.cpp 原生，边缘/消费级 GPU 跑大模型的最佳实验标的。  
3. **openbmb/MiniCPM-RobotManip + RobotTrack** — 仅 175/128 赞但**极具信号值**：VLA 双模型覆盖“抓取+跟踪”，最轻量的端到端机器人大脑，**具身智能入门必跑**。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*