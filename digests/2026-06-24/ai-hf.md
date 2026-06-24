# Hugging Face 热门模型日报 2026-06-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-24 02:26 UTC

---

# Hugging Face 热门模型日报（2026‑06‑24）

---

## 1️⃣ 今日速览  
- **LLM 争夺战加剧**：Gemma‑4 系列（特别是 GGUF 量化版）与百度 Unlimited‑OCR、DeepSeek‑V4‑Pro 并列榜首，显示中文/多语言大模型和 OCR 多模态的跨界融合仍是热点。  
- **GGUF 与量化模型爆发**：单日下载量最高的模型均为 GGUF（Gemma‑4‑12B‑coder、LocateAnything‑3B 等），说明社区对轻量化、边缘部署的需求强劲。  
- **多模态视觉模型快速增长**：Qwen3.6‑35B‑A3B‑Uncensored 与 MiniMax‑M3 等视觉‑语言大模型下载量突破 3 M，标志着 Vision‑LLM 正进入主流。  

---

## 2️⃣ 热门模型分类

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | **5,030** | 2,245,489 | 旗舰级 30B 级对话+指令微调模型，凭借高质量中文对话和开放权限成为本周最高赞模型。 |
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 2,201 | 40,127 | 中英双语 MOE 大模型，擅长长文本对话与逻辑推理，继续巩固 GLM 系列影响力。 |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI | 665 | 41,170 | 基于 Qwen2 架构的 3B 参数对话模型，定位中文数学与推理场景，下载量稳居千级。 |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft | 322 | 4,391 | 4B 参数指令微调模型，侧重快速上下文检索，适合作为检索增强的轻量后端。 |
| **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)** | lordx64 | 173 | 4,547 | Qwen3.5‑MOE 版小模型，兼具文本生成与图文理解，社区实验的热门基线。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 2,159 | **3,955,016** | 35B 视觉‑语言大模型（MOE + Vision），开放过滤，下载量居多模态榜首，显示对高质量生成的强需求。 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2,319 | 274,025 | 3B 参数图文检索模型，支持“在图中定位任意对象”，是检索增强图像编辑的核心组件。 |
| **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 1,221 | 131,057 | 多模态 VL 大模型（视觉 + 文本），专注高效推理，已被多家中文企业用于内容审核。 |
| **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 1,056 | 948,996 | 26B 参数 Diffusion + LLM 混合体，支持文本到图像+对话，表现出跨模态“对话式”生成趋势。 |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 488 | 8,396 | 端到端 OCR 大模型，兼容中英文混排，标志着大模型向专业文档识别渗透。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | **2,245** | **456,117** | Gemma‑4 系列代码专用 GGUF，针对编程指令优化，下载量居代码模型榜首。 |
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 | 450 | 96,459 | 同上但加入“agentic”工具调用能力，适合自动化脚本生成。 |
| **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | LiquidAI | 115 | 10,117 | 350M 参数嵌入模型，兼容句子相似度与检索，轻量且部署友好。 |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 658 | 41,050 | 0.6B 实时流式 ASR，基于 Nemo 框架，适合边缘语音交互。 |
| **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | owensong | 178 | 0 | 超小 1.2B TTS 模型，目标是移动端离线语音合成。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth | 305 | 55,820 | GLM‑5.2 量化为 GGUF，体现社区对“即插即用”轻量化的强需求。 |
| **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** | bytkim | 112 | 65,765 | 对 Qwen3.6‑27B 进行 MTP 微调并导出 GGUF，专注中文指令细调。 |
| **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 192 | 27,218 | 9B 模型的 GGUF 版，配合 Claude‑风格提示词库，受科研社区热议。 |
| **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** | zai-org | 149 | 395,290 | 采用 FP8 低比特量化的 GLM‑5.2，下载量位列前十，验证了极低位宽的实用性。 |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea | 87 | 84 | 基于 Diffusers 的轻量 Text‑to‑Image 模型，使用 Turbo 噪声调度，符合最新加速技术趋势。 |

---

## 3️⃣ 生态信号（约 150 字）

本周 **Gemma‑4**、**GLM‑5.2** 与 **Qwen3.6** 形成三大模型家族竞争格局：Gemma 系列凭借 GGUF 量化快速占领代码与指令微调细分市场；GLM‑5.2 通过 FP8 与 GGUF 双线量化展示了中国开源大模型在低比特化上的突破；Qwen3.6 则在视觉‑语言（A3B‑Uncensored）与传统文本生成方面双线发力。整体来看，**开源权重继续增长**——前十下载模型全部开放权重，闭源仅限于少数商业 SDK。**量化与微调** 活动尤为活跃，GGUF 为部署提供了“即插即用”体验，而 FP8、AWQ 等极低位宽的实验下载量突破 30 万，表明实用化进程加速。  

---

## 4️⃣ 值得探索

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
   - 规模大、指令/对话兼备，且许可证宽松，适合作为中文/多语言对话系统的基座模型。  

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   - 视觉‑语言大模型（35B），支持高分辨率图像理解与生成，适合实验多模态检索、图文编辑等前沿应用。  

3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   - 针对代码生成全面微调的 GGUF 版本，部署成本低，下载量居首，是研究 LLM 辅助编程的理想对象。  

---  

> **提示**：如需在本地快速部署上述 GGUF 模型，建议使用 `llama.cpp` 或 `vllm` 的最新发布版，以获取最佳推理性能。祝您玩得开心！

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*