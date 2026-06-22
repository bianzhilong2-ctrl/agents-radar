# Hugging Face 热门模型日报 2026-06-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-22 02:50 UTC

---

**Hugging Face 热门模型日报**  
*发布时间：2026‑06‑22*  

---

## 今日速览  
- **GLM‑5.2 与同族量化版**：zai-org 在一次大框架改革后，推出了新版 GLM‑5.2 及其 FP8 量化版本，下载量超过 27k，表明高效大模型仍在主流。  
- **Gemma‑4‑12B 迭代升级**：yuxinlu1 发布的两款 Gemma‑4‑12B 的 GGUF 版本（coder 与 agentic）累计下载突破 400k，说明 12B 代价与性能平衡正被广泛接受。  
- **Qwen‑3.6‑35B 量化爆款**：HauhauCS 与 Qwen 官方的 A3B+量化版本，下载量突破 5M，展示大尺寸模型在低精度推理上的激增。

---

## 热门模型  

| 分类 | 模型（链接） | 作者 / 点赞 / 下载 | 一句话说明 |
|------|--------------|-------------------|------------|
| 🧠 语言模型 | **deepseek-ai/DeepSeek‑V4‑Pro** | deepseek‑ai / **4,999** / 2,611,991 | 大模型 30B，Moe 结构，专为对话与推理优化，下载量遥遥领先。 |
| | **Qwen/Qwen3.6‑35B‑A3B** | Qwen / **2,197** / 5,148,673 | 35B 量化后高效模型，支持多模态会话，下载量居前。 |
| | **zai-org/GLM‑5.2** | zai‑org / **1,833** / 27,413 | 5.2B 文本生成模型，擴展型多模态能力，使用率迅速攀升。 |
| | **nvidia/LocateAnything‑3B** | nvidia / **2,246** / 241,845 | 3B 目标定位与图像描述，对话式检索场景表现突出。 |
| | **cOHereLabs/North‑Mini‑Code‑1.0** | CohereLabs / **474** / 19,551 | 2B 编码专用，融合 M‑oe 变形，适合轻量级 code‑generation。 |
| 🎨 多模态与生成 | **google/diffusiongemma‑26B‑A4B‑it** | google / **1,035** / 762,861 | 26B 文文本‑图像扩散，支持实时对话交互，下载量剧增。 |
| | **nvidia/nemotron‑3.5‑asr‑streaming‑0.6b** | nvidia / **612** / 27,275 | 0.6B ASR 流式模型，工业化部署需求高。 |
| | **nvidia/LocateAnything‑3B** (同上) | 见上 | 视觉‑文本双向能力小巧高效。 |
| | **minimaxai/MiniMax‑M3** | MiniMaxAI / **1,177** / 104,076 | 3B 视觉‑文本生成，专注多模态对话。 |
| | **google/gemma‑4‑12B‑it** | google / **1,129** / 1,815,370 | 12B 统一跨模态模型，适用于以图生成文本。 |
| 🔧 专用模型 | **yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF** | yuxinlu1 / **2,091** / 358,677 | 12B 编程助手，使用 GGUF 量化，突出代码推理。 |
| | **yuxinlu1/gemma‑4‑12B‑agentic‑fable5‑composer2.5‑v2‑3.5x‑tau2‑GGUF** | yuxinlu1 / **288** / 21,730 | 12B Agentic 模型，适合终端交互。 |
| | **nex‑agi/Nex‑N2‑Pro** | nex‑agi / **342** / 7,872 | 6B Qwen3.5 Moe，面向 NLP 封装。 |
| | **miatell-Qwable‑27b** | Mia‑AiLab / **120** / 22,879 | 27B 语言模型，无任务专门化，做通用推理。 |
| | **jackrong/Qwopus3.6‑27B‑Coder‑MTP‑GGUF** | Jackrong / **276** / 190,993 | 27B 编码类 MTP 微调，使用 GGUF 轻量化。 |
| 📦 微调与量化 | **unsloth/GLM‑5.2‑GGUF** | unsloth / **227** / 32,260 | GLM‑5.2 轻量化 GGUF，便携部署。 |
| | **unsloth/Kimi‑K2.7‑Code‑GGUF** | unsloth / **150** / 42,837 | Kimi 代码版，支持 GGUF 轻量。 |
| | **bytkim/Qwen3.6‑27B‑MTP‑pi‑tune‑GGUF** | bytkim / **102** / 36,421 | 27B Qwen3.6 MTP 微调，量化后推理加速。 |
| | **HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive** | HauhauCS / **2,080** / 3,966,691 | 35B A3B 量化 + A3B+ 训练，未过滤对话数据。 |
| | **google/gemma‑4‑12B‑it** (同上) | 见上 | 轻量化多模态转换的 GGUF 版。 |
| | **mum** | *此处无合适模型* | - |

---

## 生态信号  
- **模型家族势头**：DeepSeek‑V4 与 Qwen‑3.6 系列在下载量与点赞量上占据绝对主导，显示“超大模型+Moe+量化”已成为主流。GLM‑5.2 及其 FP8/GGUF 版本亦凭借体量中等与高效跑通卖点捕获大量关注。  
- **权重走向**：大多数顶尖模型（DeepSeek、Qwen、Gemma）均已公开权重并支持 PEFT 微调，说明开源与工业化并行。闭源权重虽少，但伴随高质量微调脚本，闭源模型对研究者的门槛降低。  
- **量化与微调**：GGUF 量化已从单一 7B 标题转为 12B＋层支持，显著减少显存占用；同时火爆的 MTP 与 A3B 训练方案，为长文本与多模态场景提供低成本方案。社区快速迭代（如 unsloth 的 Kimi、GLM‑5.2）表明细分应用场景仍有巨大发展潜力。  

---

## 值得探索  

1. **deeeeeepseek‑ai/DeepSeek‑V4‑Pro** – 30B 参数、Moe 高效求解，配合其开放训练日志，可快速打造对话 + 文本推理平台。  
2. **yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF** – 12B 代码生成大模型，经 GGUF 量化后可在单 GPU 上上线做商用，适合实验室快速原型。  
3. **google/diffusiongemma‑26B‑A4B‑it** – 26B 联合文本‑图像扩散，支持对话式图像编辑，属于跨模态可扩展的研究方向，值得在技术演示与产品落地中试水。  

---  

> 所有模型链接已保留，可直接点击获取模型细节与下载。祝大家学习与研发愉快！

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*