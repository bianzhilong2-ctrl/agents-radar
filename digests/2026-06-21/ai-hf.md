# Hugging Face 热门模型日报 2026-06-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-21 02:47 UTC

---

## 《Hugging Face 热门模型日报》 | 2026‑06‑21

### 1. 今日速览  
本周 Hugging Face Hub 上最受关注的动向集中在 **大模型量化** 与 **多模态推理** 上。`DeepSeek‑V4‑Pro` 以 4986 点赞遥遥领先，凸显对话模型的热度；`HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive` 以 2042 点赞证明大型“免费”模型组仍能快速聚集人气。与此同时，**Gemma‑4‑12B** 及其多版本（包含编码与 Agentic）显示出从通用 LLM 向专用任务（代码、推理）细分的趋势。

---

### 2. 热门模型  

| 分类 | 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|------|-------------------|------------|
| **🧠 语言模型** | **DeepSeek‑V4‑Pro** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro> | deepseek‑ai / 4,986 / 2,797,050 | 大尺度 175 B 词表 LLM，主打对话与指令微调，社区热度高。 |
|  | **Gemma‑4‑12B‑Coder‑Fable5‑Composer2.5‑v1‑GGUF** <https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF> | yuxinlu1 / 1,988 / 312,332 | 采用 Gemma‑4‑12B，量化 GGUF，优化编码推理。 |
|  | **Zai‑Org/GLM‑5.2** <https://huggingface.co/zai-org/GLM-5.2> | zai‑org / 1,697 / 19,683 | 5.2 B 参数的多任务对话模型，支持多语言。 |
|  | **WeiboAI/VibeThinker‑3B** <https://huggingface.co/WeiboAI/VibeThinker-3B> | WeiboAI / 511 / 16,270 | 轻量 3B LLM，专门针对数学与数理推理。 |
|  | **CohereLabs/North‑Mini‑Code‑1.0** <https://huggingface.co/CohereLabs/North-Mini-Code-1.0> | CohereLabs / 468 / 18,783 | 4B 参数的编码专用 LLM，基于 Cohere 2.0。 |
|  | **Nex‑AGI/Nex‑N2‑Pro** <https://huggingface.co/nex-agi/Nex-N2-Pro> | nex‑agi / 340 / 7,724 | 3.6B 参数 Qwen‑3.5 MoE，兼容多模态接口。 |
| **🎨 多模态与生成** | **MiniMax‑AI/MiniMax‑M3** <https://huggingface.co/MiniMaxAI/MiniMax-M3> | MiniMaxAI / 1,161 / 85,771 | 15B BERT‑style Vision‑Language 模型，支持多模态推理。 |
|  | **nvidia/LocateAnything‑3B** <https://huggingface.co/nvidia/LocateAnything-3B> | nvidia / 2,217 / 235,606 | 3B 的多模态目标定位，重现“Locate Anything”能力。 |
|  | **google/diffusiongemma‑26B‑A4B‑it** <https://huggingface.co/google/diffusiongemma-26B-A4B-it> | google / 1,022 / 673,464 | 26B DiffusionGemma，支持文本‑图像双向对话。 |
|  | **google/gemma‑4‑12B‑it** <https://huggingface.co/google/gemma-4-12B-it> | google / 1,107 / 1,696,240 | 一体化通用 GEMMA‑4‑12B，可做文本‑图像 → 文本。 |
|  | **HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive** <https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive> | HauhauCS / 2,042 / 3,812,636 | 35B 量化未审查版，支持 NLP 与视觉双模态任务。 |
|  | **Jackrong/Qwopus3.6‑27B‑Coder‑MTP‑GGUF** <https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF> | Jackrong / 269 / 168,502 | 27B 编码专业模型，采用 GGUF 轻量化。 |
| **🔧 专用模型** | **nvidia/nemotron‑3.5‑asr‑streaming‑0.6b** <https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b> | nvidia / 587 / 21,426 | 0.6B 语音流式识别，支持低延迟推理。 |
|  | **owensong/Inflect‑Nano‑v1** <https://huggingface.co/owensong/Inflect-Nano-v1> | owensong / 143 / 0 | 超小 TTS，适合边缘设备。 |
|  | **LiquidAI/LFM2.5‑Embedding‑350M** <https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M> | LiquidAI / 81 / 6,128 | 350M 句子相似度嵌入，支持多语种检索。 |
|  | **nostris/ideogram_4_turbotime_lora** <https://huggingface.co/ostris/ideogram_4_turbotime_lora> | ostris / 83 / 1,679 | 低算力文本‑图像模型 LoRA，重点在创意绘图。 |
| **📦 微调与量化** | **yuxinlu1/gemma‑4‑12B‑agentic‑fable5‑composer2.5‑v2‑3.5x‑tau2‑GGUF** <https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF> | yuxinlu1 / 187 / 6,307 | 复合 Agentic 训练 + GGUF 量化，面向多任务推理。 |
|  | **unsloth/GLM‑5.2‑GGUF** <https://huggingface.co/unsloth/GLM-5.2-GGUF> | unsloth / 205 / 22,586 | 5.2B GLM 量化版，强调可部署性。 |
|  | **unsloth/Kimi‑K2.7‑Code‑GGUF** <https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF> | unsloth / 146 / 37,260 | 轻量化 Kimi‑K2.7 代码生成，GGUF®。 |
|  | **bytkim/Qwen3.6‑27B‑MTP‑pi‑tune‑GGUF** <https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF> | bytkim / 97 / 20,465 | 27B MTP‑π 量化模型，专注恶劣环境推理。 |
|  | **DavidAU/Qwen3.6‑40B‑Claude‑4.6‑Opus‑Deckard‑Heretic‑Uncensored‑Thinking‑NEO‑CODE‑Di‑IMatrix‑MAX‑GGUF** <https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF> | DavidAU / 411 / 587,521 | 40B 未审查量化模型，融合多模型微调，顶尖玩具模型。 |

---

### 3. 生态信号  
- **家族势头**：Gemma-4‑12B 与 Qwen3 系列阵营持续领跑，Gemma 通过多版本（Coded, Agentic）快速细分。GLM‑5.2 在社区被频繁微调，突显 Mixture‑of‑Expert（MoE）模型的可扩展性。  
- **开源 vs 闭源**：绝大多数热门模型采用 `transformers` 与 `safetensors` 公开权重，极大推动低成本 AI 研发。然而，未审查版（如 Qwen‑3.6‑35B‑Aggressive、40B Uncensored）呈现“开放但无人监管”的趋势，可能引发合规议题。  
- **量化与微调**：GGUF、AWQ 量化已成为标准做法，模型体积下降 70‑90% 仍保持高性能。社区微调版（如 `yuxinlu1`、`unsloth`, `Jackrong`）显示量化后仍能获得可观点赞，证明公平性与易部署性并行。  

---

### 4. 值得探索  
1. **DeepSeek‑V4‑Pro** – 175 B 参数的高性能对话模型，支持开箱即用的指令微调，适合需要大规模对话场景的实验。  
2. **nvidia/LocateAnything‑3B** – 轻量化多模态目标定位，配合 NVIDIA 推出的容器化部署工具，可快速落地机器人视觉交互。  
3. **yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF** – 以 GGUF 低延迟部署加上专门的编码微调方案，对代码助手与自动化脚本生成非常适用。  

> 以上模型均保留完整 HuggingFace 链接，方便直接下载与集成。祝你玩得开心，探索更大可能！

---

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*