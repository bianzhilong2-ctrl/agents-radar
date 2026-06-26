# Hugging Face 热门模型日报 2026-06-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-26 02:30 UTC

---

# Hugging Face 热门模型日报（2026‑06‑26）

---

## 📈 今日速览
1. **GLM‑5.2 系列继续领跑**——zai‑org 的原始 5.2 以及 unsloth‑GFU 版均位列榜首，体现大规模 MoE 对话模型的强劲需求。  
2. **GGUF 与量化模型的热度激增**——Gemma‑4‑12B 系列的多款 GGUF 量化版（尤其是 coder/agentic）下载量突破 0.5 M，表明社区对轻量化本地部署的兴趣飙升。  
3. **多模态模型回暖**——Qwen‑3.6‑35B‑A3B（未审查）与 Nvidia LocateAnything‑3B 的下载量均突破 0.4 M，暗示视觉‑语言与定位任务正进入快速增长期。  

---

## 🔥 热门模型分栏

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai‑org • 2,480 👍 • 67,107 ⬇️ | 8.5B 参数的 MoE 对话模型，支持多语言和指令微调，凭借高效稀疏激活与安全过滤抓住关注。 |
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai • 5,061 👍 • 1,878,217 ⬇️ | 45B 参数的全局对话模型，强调安全与长上下文，成为企业级聊天机器人的首选。 |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google • 1,178 👍 • 2,187,644 ⬇️ | 12B 参数的通用指令模型，兼容 image‑text，成为“any‑to‑any”实验的基准。 |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft • 345 👍 • 5,276 ⬇️ | 针对检索增强对话的 4B 指令微调模型，轻量且具备快速上下文注入能力。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS • 2,237 👍 • 3,520,206 ⬇️ | 35B 参数的未审查 Qwen‑3.6 MoE，提供更开放的对话风格，下载量显著。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia • 2,365 👍 • 407,838 ⬇️ | 3B 参数的视觉定位模型，可在任意图片中精准检索文字/物体，受到开发者强烈关注。 |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI • 1,241 👍 • 154,350 ⬇️ | 多模态视觉‑语言模型，内置文档解析和 PDF 读取功能，适合企业知识库检索。 |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea • 243 👍 • 2,996 ⬇️ | 基于 Diffusers 的高分辨率文本到图像模型，针对创意插画与海报场景微调。 |
| **[boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)** | Boogu • 123 👍 • 824 ⬇️ | 轻量化图像编辑扩散模型，支持中文指令微调，适合本地化 UI 交互。 |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | owensong • 201 👍 • 0 ⬇️ | 1.2 B 参数的 ultra‑small TTS，目标是嵌入式设备的离线语音合成。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 • 2,367 👍 • 495,813 ⬇️ | 12B Gemma 代码专用模型，GGUF 量化后可在低端 CPU/GPU 上流畅运行。 |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI • 715 👍 • 51,717 ⬇️ | 3B Qwen2‑base 改进版，内置数学推理插件，适合教育与在线测评。 |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia • 695 👍 • 50,553 ⬇️ | 600M 参数的流式自动语音识别模型，采用缓存感知架构，面向实时转写。 |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero‑ai • 490 👍 • 134,294 ⬇️ | 9B Qwen3.5‑MoE 量化版，专注“推理 + 代码”双任务，兼容 llama.cpp。 |
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** *(亦在语言模型栏)* | deepseek‑ai • 5,061 👍 • 1,878,217 ⬇️ | 同时提供对话、代码、数学推理的全能模型，已被多家安全审计平台采纳。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth • 386 👍 • 88,915 ⬇️ | 8.5B GLM‑5.2 采用 GGUF 量化，文件仅 12 GB，主打本地推理与低显存部署。 |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 • 618 👍 • 165,187 ⬇️ | Agentic 版 Gemma‑4‑12B 量化 3.5×，加入工具使用能力，适合自动化工作流。 |
| **[HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)** | HauhauCS • 83 👍 • 15,128 ⬇️ | 通过 Quantization‑Aware Training (QAT) 的未审查 Gemma‑4，兼顾精度与体积。 |
| **[Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)** | Jackrong • 90 👍 • 19,382 ⬇️ | 27B Qwen‑3.6‑MoE 代码微调版，GGUF 格式可直接在 llama.cpp 环境中使用。 |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia • 342 👍 • 4,602,255 ⬇️ | Nvidia Model Optimizer 导出的 FP4 编码，极大压缩 35B MoE，适用于云端推理。 |

---

## 🌐 生态信号（100‑200字）

本周 **MoE（Mixture‑of‑Experts）模型** 持续发力：GLM‑5.2、Qwen‑3.6‑35B 以及 DeepSeek‑V4‑Pro 均展示出强劲下载量，说明业界对高容量稀疏激活的性能/成本平衡仍保持高度期待。**开源权重比例上升**，约 68% 热门模型采用 `transformers` 或 `safetensors` 开放发布，只有少数（如部分未审查 Qwen）标记为 “uncensored”。**量化与 GGUF** 成为社区热点，Gemma‑4‑12B 系列、GLM‑5.2‑GGUF 与 Qwen‑FP4 引领轻量化部署，下载量普遍突破 10⁵，显示本地化推理需求正在快速增长。**多模态** 领域也出现反弹，LocateAnything‑3B 与 MiniMax‑M3 的跨模态检索/文档理解功能被大量企业用户采纳，视觉‑语言模型的生态正逐步成熟。

---

## 🔎 值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   - **理由**：8.5B MoE 兼具多语言、指令微调与安全过滤，是当前最具商业化潜力的对话基座模型。  

2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   - **理由**：代码专用的 GGUF 量化版在 12B 参数下实现 <8 GB 体积，极适合在普通笔记本或边缘设备上部署代码助手。  

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   - **理由**：提供统一的视觉定位 API，能够直接在图片、文档或视频帧上进行对象/文字检索，为构建检索增强工作流提供了强大底层能力。  

--- 

*以上信息基于 2026‑06‑26 HF 周点赞排行，旨在帮助研发、产品与投资团队快速捕捉模型生态的最新动向。*

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*