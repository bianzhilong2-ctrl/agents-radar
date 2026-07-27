# Hugging Face 热门模型日报 2026-07-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-27 02:01 UTC

---

# Hugging Face 热门模型日报 (2026-07-27)

### 🚀 今日速览
今日 Hugging Face 榜单呈现出极强的“多模态驱动”与“极致量化”特征。**Qwen 3.6 系列**及其衍生微调版本持续统治榜单，成为社区讨论的核心；同时，**百度 (Baidu)** 的 OCR 模型展现了惊人的下载量，反映了工业级视觉感知工具的需求激增；此外，**GGUF 量化格式**模型占据了大量下载权重，显示出端侧（Edge AI）运行大型模型的强劲需求。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
* **zai-org/GLM-5.2** | [链接](https://huggingface.co/zai-org/GLM-5.2)
  * 作者: zai-org | 点赞: 4,477 | 下载: 827,191
  * 说明：高性能对话模型，凭借其强大的 MoE 架构和极高的社区认可度稳居榜首。
* **upstage/Solar-Open2-250B** | [链接](https://huggingface.co/upstage/Solar-Open2-250B)
  * 作者: upstage | 点赞: 595 | 下载: 3,305
  * 说明：超大规模参数模型，代表了目前开源界挑战顶级闭源模型的主流力量。
* **poolside/Laguna-S-2.1** | [链接](https://huggingface.co/poolside/Laguna-S-2.1)
  * 作者: poolside | 点赞: 701 | 下载: 56,445
  * 说明：Poolside 推出的高性能文本生成模型，在指令遵循能力上表现出色。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
* **baidu/Unlimited-OCR** | [链接](https://huggingface.co/baidu/Unlimited-OCR)
  * 作者: baidu | 点赞: 3,207 | 下载: 2,593,460
  * 说明：极高下载量的图像转文本工具，展示了 OCR 领域对高精度模型的需求。
* **thinkingmachines/Inkling** | [链接](https://huggingface.co/thinkingmachines/Inkling)
  * 作者: thinkingmachines | 点赞: 1,579 | 下载: 34,511
  * 说明：先进的多模态对话模型，擅长理解复杂的图像信息。
* **microsoft/Mage-Flow** | [链接](https://huggingface.co/microsoft/Mage-Flow)
  * 作者: microsoft | 点赞: 335 | 下载: 1,375
  * 说明：微软推出的文本到图像生成模型，代表了扩散模型（Diffusion）的最新进展。
* **openbmb/MiniCPM-RobotManip** | [链接](https://huggingface.co/openbmb/MiniCPM-RobotManip)
  * 作者: openbmb | 点赞: 177 | 下载: 643
  * 说明：结合视觉语言与动作（VLA）的机器人操控模型，探索 AI 与物理世界的交互。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
* **moonshotai/Kimi-K2.7-Code** | [链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
  * 作者: moonshotai | 点赞: 1,298 | 下载: 730,129
  * 说明：针对编程任务优化的代码模型，是开发者提升生产力的利器。
* **Kwaipilot/KAT-Coder-V2.5-Dev** | [链接](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)
  * 作者: Kwaipilot | 点赞: 198 | 下载: 3,764
  * 说明：基于 Qwen 架构的开发者专用模型，专注于代码理解与生成。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
* **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** | [链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)
  * 作者: empero-ai | 点赞: 2,480 | 下载: 1,410,054
  * 说明：极高性能的量化微调模型，通过极致压缩实现在个人设备上的高性能推理。
* **prism-ml/Bonsai-27B-gguf** | [链接](https://huggingface.co/prism-ml/Bonsai-27B-gguf)
  * 作者: prism-ml | 点赞: 651 | 下载: 2,187,304
  * 说明：大规模参数模型的量化版本，是研究低比特（1-bit/2-bit）推理的典型案例。
* **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** | [链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)
  * 作者: HauhauCS | 点赞: 3,112 | 下载: 1,927,138
  * 说明：社区对 Qwen 架构进行的“无限制（Uncensored）”微调，满足了特定偏好的对话需求。

---

### 📊 生态信号
从数据可以看出，**Qwen 系列**已成为当前的生态基座，无论是作为基础模型还是作为微调底座，其活跃度极高。**多模态（Multimodal）** 正从纯文本向“视觉感知+代码+机器人动作”全面渗透。

另一个核心趋势是**“量化民主化”**：像 GGUF 格式的模型下载量远超原始权重模型，这表明开发者正加速将大型模型（如 27B、35B）部署到消费级硬件上。同时，**“Uncensored（无限制）”** 微调模型在下载量上的爆发，反映了用户在开源生态中对模型限制性（Guardrails）的强烈反弹与多样化需求。

---

### 🧪 值得探索
1.  **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**: 如果你需要在本地设备上获得接近顶级模型的推理体验，这款高度优化的量化模型是首选。
2.  **baidu/Unlimited-OCR**: 对于需要处理大规模图像文本数据的自动化流水线，这款模型提供了极高的工业实用性。
3.  **openbmb/MiniCPM-RobotManip**: 机器人学研究者不容错过的 VLA 模型，展示了端到端物理控制的未来方向。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*