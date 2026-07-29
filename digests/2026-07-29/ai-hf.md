# Hugging Face 热门模型日报 2026-07-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-29 01:45 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-07-29

---

## 📌 今日速览

今日榜单由 **Moonshot AI 的 Kimi-K3**（8k+ 赞）与 **百度 Unlimited-OCR**（269 万下载）双雄领跑，凸显**长上下文多模态**与**工业级 OCR**的强劲需求。Qwen3.6 系模型（官方版、MoE 版、社区微调量化版）合计占据 Top 30 近 1/3 席位，确立了**中文开源生态主力**地位。GLM-5.2（Z.ai）与 Solar-Open2-250B（Upstage）代表**超大规模 MoE**新高度。量化侧，**2-bit/1-bit Ternary 量化**（prism-ml）与 **NVFP4/原生 GGUF** 加速落地，边缘侧 TTS（Inflect 系列）亦现亮眼身影。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 赞 / 下载 | 一句话解读 |
|------|------|-----------|------------|
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,606 / 1.27M | 千亿级 MoE 基座，DSA 稀疏注意力，长上下文与推理能力强，开箱即用对话 SOTA 级。 |
| [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 645 / 4.8k | 250B 参数开源 MoE，延续 Solar 深度稀疏架构，单卡 8×H100 即可推理，企业级落地首选。 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 801 / 67k | 代码专用 34B 模型，强化学习对齐，HumanEval+ 破 90%，软件工程智能体核心引擎。 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 528 / 18.9k | 3B 小参数高性能中文基座，适配边缘设备与私有化部署，指令跟随表现超同量级。 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 222 / 7.6k | 1B GraniteMoE 混合专家，主打安全对齐与低资源推理，适合端侧护栏模型。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 赞 / 下载 | 一句话解读 |
|------|------|-----------|------------|
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | **8,011 / 99k** | **今日榜首**。原生多模态 MoE，200k+ 上下文，图文互留、长文档理解、工具调用一体化，中文多模态新标杆。 |
| [**Qwen/Qwen3.6-35B-A3B**](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,570 / 6.16M | 官方最新 MoE 多模态旗舰，35B 总参/3B 激活，视觉编码器原生对齐，下载量断层第一。 |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 417 / 2k | 流匹配架构文生图/图编辑统一模型，零样本指令编辑能力强，Diffusers 生态原生支持。 |
| [**microsoft/Mage-Flow-Edit-Turbo**](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 109 / 1.2k | Mage-Flow 蒸馏加速版，4-step 生成/编辑，实时交互场景可用。 |
| [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 265 / 645 | **纯 CPU/边缘端可跑的流式 TTS**，<50ms 首包延迟，支持音色克隆，语音交互入口级模型。 |
| [**owensong/Inflect-Nano-v2**](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 104 / 434 | Micro 进一步蒸馏版，<10M 参数，适配 MCU 与浏览器 WASM。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / OCR / 嵌入）

| 模型 | 作者 | 赞 / 下载 | 一句话解读 |
|------|------|-----------|------------|
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,420 / **2.69M** | **下载量王**。工业级通用 OCR，任意分辨率/长文本/复杂版式零样本识别，生产环境验证最充分。 |
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 288 / 6.2k | 基于 Qwen3.5-Moe 继续预训练+RL，代码生成/补全/重构全能，企业级代码助手内核。 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 340 / 47k | Qwen3.5 视觉语言微调 OCR 专用版，支持公式/表格/手写混排，轻量部署友好。 |
| [**microsoft/Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 179 / 1.5k | 面向 Computer Use 的 27B 多模态 Agent 基座，原生支持 GUI 操作与工具链调用。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 极致压缩）

| 模型 | 作者 | 赞 / 下载 | 一句话解读 |
|------|------|-----------|------------|
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,085 / 665k | **2-bit 三值量化**，准确率损失 <1%，单张 24GB 显存跑 27B，量化技术里程碑。 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 679 / 2.34M | **1-bit 二值量化**版，同架构极限压缩，下载量超 230 万，边缘部署参考实现。 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,159 / 1.86M | 社区最热**去审查/长上下文/视觉**三合一微调，GGUF 全量化系列，角色扮演与创作首选。 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 198 / 99k | Hermes 系指令微调+去审查，写作/编程风格更自然，GGUF 多量化档位可选。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 853 / 736k | 多模型融合+MTP(多token预测)+去审查，综合能力极强，社区融合微调代表作。 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,502 / 1.26M | 9B 小模型蒸馏 Claude 风格推理轨迹，GGUF 量化，推理透明化与可控生成实验田。 |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 153 / 180k | **原生 NVFP4 量化**，H100/H200 Tensor Core 直跑，无需校准，推理吞吐提升 2-3×。 |
| [**baseten/GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 131 / 2.7k | GLM-5.2 视觉版 NVFP4 量化，SGLang 加速引擎适配，大模型低成本推理示范。 |
| [**unsloth/Kimi-K3-GGUF**](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 90 / 0 | Kimi-K3 发布即跟进 GGUF，Unsloth 极速量化流程验证，社区适配速度标杆。 |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 232 / 129k | 同源官方 GGUF，vLLM/llama.cpp 双兼容，开发者友好。 |

---

## 🌐 生态信号（趋势研判）

**模型家族势头**：**Qwen3.6 系**（官方 MoE + 社区微调/量化/去审查）与 **Kimi-K3/K2** 双塔领跑中文多模态；**GLM-5.2** 确立国产超大 MoE 标杆；**Laguna-S** 成代码垂类开源王者。  
**开源 vs 闭源**：头部实验室持续**开放权重+技术报告**（Kimi, Qwen, GLM, Solar），闭源仅保留训练数据/算力细节；社区微调（Uncensored/Fusion/RLHF）成为能力补全主渠道。  
**量化/微调热点**：**极致低比特**（1-bit/2-bit Ternary, NVFP4）已达生产可用线，**GGUF 仍是部署通用货币**，Unsloth/prism-ml 等工具链大幅降低量化门槛。**MTP 多 token 预测**与**模型融合**成微调新范式。

---

## 💎 值得探索（Top Picks）

1. **moonshotai/Kimi-K3** — **原生 200k 上下文多模态 MoE**，长文档/多图推理/工具链一体化，中文知识密集型任务首选基座。  
2. **prism-ml/Ternary-Bonsai-27B-gguf** — **2-bit 三值量化实战验证**，单张消费级显存跑 27B MoE，边缘/私有化部署成本降维打击的参考实现。  
3. **baidu/Unlimited-OCR** — **269 万下载验证的工业级 OCR**，任意分辨率/版式/语言零样本，文档数字化/知识库构建管线可直接集成。  

--- 

*数据来源：Hugging Face Hub Trending (Weekly Likes) | 报告生成：2026-07-29*

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*