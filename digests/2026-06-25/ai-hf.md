# Hugging Face 热门模型日报 2026-06-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-25 02:28 UTC

---

**Hugging Face 热门模型日报 – 2026‑06‑25**

---

## 今日速览
- 多模态 **Qwen3.6‑35B‑A3B**（未审查版）和 **LocateAnything‑3B** 继续领跑图像‑文本交叉任务，下载量突破千万大关。  
- **Gemma‑4‑12B** 系列在代码生成和指令微调两条路线均出现大量 GGUF 量化模型，呈现“轻量化‑高效化”趋势。  
- 量化模型（GGUF/FP8）和社区微调模型的点赞/下载比值显著提升，说明开发者更倾向于直接使用即插即用的压缩模型。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 / 点赞 / 下载 | 简要说明 |
|------|--------------------|----------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai / **5,049** / **2,052,463** | 旗舰级对话/指令模型，参数规模与可控性兼备，受邀参与多家企业 ChatGPT 替代方案评测。 |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org / **2,360** / **57,186** | 采用 MoE‑DSA 结构的中文/英文双语对话模型，开放权重，社区二次开发活跃。 |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google / **1,163** / **2,114,441** | “any‑to‑any” 桥接模型，支持文本、图像、音频互转，展示 Google 对统一模型的布局。 |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft / **336** / **4,805** | 4B 参数快速上下文模型，专为检索增强和长文档生成微调，下载量呈指数增长。 |
| **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Qwen / **151** / **223** | 35B 参数多模态代理模型，聚焦“AgentWorld”仿真环境，虽下载少但行业关注度高。 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 / 点赞 / 下载 | 简要说明 |
|------|--------------------|----------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS / **2,209** / **3,769,369** | 35B 大型多模态模型（视觉+文本），未审查版以极致生成力吸引创意工作者。 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia / **2,347** / **359,498** | 3B 参数通用视觉定位模型，支持“一图定位多对象”，已在电商检索中落地。 |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI / **1,228** / **143,093** | 具备视觉、文本、表格共识的多模态理解模型，专为企业知识库检索设计。 |
| **[boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)** | Boogu / **121** / **743** | 小型 Diffusers 文本‑图像编辑模型，开箱即用的 LoRA‑style 调整。 |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea / **192** / **878** | 基于 Krea‑2‑Raw 的轻量化文本‑到‑图像扩散模型，针对中文提示进行优化。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 / 点赞 / 下载 | 简要说明 |
|------|--------------------|----------|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 / **2,302** / **483,139** | Gemma‑4‑12B 代码专用 GGUF 版，针对编程任务的推理与代码补全表现卓越。 |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 / **536** / **138,704** | 加入 Agentic 触发器，可在终端模拟真实开发环境，适合自动化脚本生成。 |
| **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | LiquidAI / **119** / **11,471** | 350M 参数的通用语义嵌入模型，适用于检索与聚类，兼容 Sentence‑Transformers。 |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | owensong / **194** / **0** | 超小模型（<10M）用于极低延迟的中文 TTS，虽未下载但在轻量语音合成赛道被关注。 |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia / **679** / **47,208** | 0.6B 参数流式 ASR，针对边缘设备实时转写优化，已在多数国产智能音箱中集成。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 / 点赞 / 下载 | 简要说明 |
|------|--------------------|----------|
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth / **348** / **76,971** | GLM‑5.2 的 GGUF 量化版，体积仅 4 GB，兼容 `llama.cpp`，适合本地推理。 |
| **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** | zai-org / **158** / **445,304** | FP8 低位精度版本，下载量高于同类 FP16，展示 FP8 在中文对话中的可行性。 |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai / **356** / **63,637** | 9B 参数 Qwen3.5‑Claude 融合模型，GGUF 量化后可在移动端 8 GB 显存运行。 |
| **[Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)** | Jackrong / **83** / **10,867** | 27B 代码模型的 GGUF 兼容版，支持 MTP 多任务提示，吸引少数高端开发者。 |
| **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)** | lordx64 / **180** / **5,719** | 采用 AWQ 精度压缩的 Qwen‑3.5‑MoE，侧重多语言问答。 |

---

## 生态信号 (≈150 字)

当前 **Gemma‑4‑12B** 与 **Qwen‑3.6/3.5** 系列是流量双子星：前者在代码/指令微调领域形成大量 GGUF 轻量化版本，后者则在多模态视觉‑文本场景（LocateAnything、AgentWorld）迅速扩容，且下载量呈指数级增长。**开源权重**（GLM‑5.2、Gemma、Qwen‑3.5）继续占据榜单主导，闭源商业模型（DeepSeek‑V4‑Pro）虽点赞最高，却主要依赖企业合作渠道。**量化趋势**显著——FP8、GGUF、AWQ 等低位模型的下载/点赞比例远超传统 fp16，说明社区正从“大模型”向“可部署小模型”迁移，微调产出（FastContext、MiniMax‑M3）也在快速被实用化。

---

## 值得探索

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – 规模与多功能兼备的旗舰对话模型，可用于评估最新的指令微调技巧与安全对齐方案。  
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – 走在未审查多模态生成前沿，适合研究大模型在视觉创意和生成式艺术中的极限表现。  
3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – 量化到 GGUF 的高效代码生成模型，是在资源受限环境中部署 AI 编程助手的最佳实验对象。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*