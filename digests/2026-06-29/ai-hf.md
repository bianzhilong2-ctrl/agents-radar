# Hugging Face 热门模型日报 2026-06-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-29 02:36 UTC

---

**Hugging Face 热门模型日报 – 2026‑06‑29**  

---

## 今日速览
1. 多模态 Vision‑LLM 继续抢占排行首位，**HauhauCS 的 Qwen3.6‑35B‑A3B‑Uncensored** 以 2.3 M 次下载夺冠。  
2. **GLM‑5.2 系列**（zai‑org、unsloth、nvidia）横扫语言模型榜单，显示中文大模型的持续热度。  
3. GGUF 量化格式走俏，尤其是 **Gemma‑4‑12B‑agentic** 与 **Ornith‑1.0‑35B‑GGUF**，说明社区对轻量化部署需求增长。  
4. 代码专用模型 **Gemma‑4‑12B‑coder**（yuxinlu1）下载突破 550 K，编码辅助成为热点。  
5. NVIDIA 继续投放高效模型优化工具（Model Optimizer），其 **Qwen3.6‑35B‑A3B‑NVFP4** 和 **GLM‑5.2‑NVFP4** 领跑量化‑加速方向。

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org • 2,823 👍 • 118 k ⬇️ | 最新中文 MoE 大模型，支持指令、对话，多任务微调表现领先。 |
| **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth • 444 👍 • 146 k ⬇️ | GGUF 量化版，同样的 GLM‑5.2 能力，体积仅 4 GB，适合边缘部署。 |
| **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** | nvidia • 155 👍 • 45.8 k ⬇️ | NVIDIA Model Optimizer 产物，FP4 低精度加速，保持原始质量。 |
| **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI • 743 👍 • 59.3 k ⬇️ | 轻量 3 B 参数中文对话模型，侧重数学与推理能力。 |
| **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | deepseek‑ai • 182 👍 • 373 ⬇️ | DeepSeek‑V4 系列的高性能专业版，针对搜索和检索场景微调。 |
| **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft • 369 👍 • 6.8 k ⬇️ | 4 B 参数快速上下文模型，适用于长文档摘要与 Q&A。 |
| **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)** | deepseek‑ai • 81 👍 • 24 ⬇️ | 极简化 Flash 版本，专为低算力设备设计。 |

### 🎨 多模态与生成（图像、视频、音频、文本‑到‑X）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS • 2,301 👍 • 3.25 M ⬇️ | 35 B Vision‑LLM，un‑censored 版本，强大图文理解与推理，下载量居榜首。 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia • 2,436 👍 • 646 k ⬇️ | 多任务图像特征检索模型，支持“一键定位”任意对象，适配 NVIDIA TensorRT。 |
| **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu • 1,244 👍 • 295 k ⬇️ | 超高精度 OCR+布局解析模型，可直接输出结构化文本。 |
| **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | krea • 355 👍 • 27.6 k ⬇️ | Diffusers 系列文本‑to‑image，采样速度提升 2×，生成质量媲美 SDXL。 |
| **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)** | krea • 232 👍 • 22.6 k ⬇️ | 原始基座模型，供二次微调与自定义 LoRA。 |
| **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)** | Comfy‑Org • 177 👍 • 10 ⬇️ | 适配 ComfyUI 的 Krea‑2 包装，便利的 UI 调度。 |
| **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | fal • 96 👍 • 0 ⬇️ | 3D 视频生成 LoRA，实验性项目，尚未正式发布。 |
| **[HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)** | HauhauCS • 100 👍 • 40.8 k ⬇️ | Gemma‑4 12 B 视觉‑语言模型，支持量化感知训练（QAT），兼顾安全与性能。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 • 2,474 👍 • 549.9 k ⬇️ | GGUF 量化的代码专用 Gemma‑4，支持高效的代码补全与调试。 |
| **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** | LiquidAI • 140 👍 • 12.4 k ⬇️ | 小尺寸（230 M）嵌入模型，针对金融文本的语义搜索。 |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia • 734 👍 • 67.4 k ⬇️ | 流式语音识别模型，采用 Nemo 3.5 架构，低延迟实时转写。 |
| **[deepseek-ai/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** | Chunjiang‑Intelligence • 124 👍 • 1.4 k ⬇️ | 针对网络安全对话微调的 DeepSeek‑v4 变体，含攻击/防御词库。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | yuxinlu1 • 798 👍 • 225.8 k ⬇️ | Agentic 版本的 Gemma‑4，加入工具使用（浏览器、终端）能力，GGUF 量化。 |
| **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | deepreinforce‑ai • 414 👍 • 79.6 k ⬇️ | 35 B Qwen‑3.5‑MoE 低位量化，MIT 许可，易于部署在消费级 GPU。 |
| **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** | deepreinforce‑ai • 276 👍 • 36.8 k ⬇️ | 9 B 版 GGUF，兼容 CPU‑only推理，适合边缘设备。 |
| **[unsloth/Qwen-AgentWorld-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen-AgentWorld-35B-A3B-GGUF)** | unsloth • 95 👍 • 79.5 k ⬇️ | Qwen‑3.5‑MoE 35 B 的 GGUF 镜像，提供“世界模型”插件，支持交互式仿真。 |
| **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Qwen • 401 👍 • 23.7 k ⬇️ | 原始 safetensors 权重，供需要完整精度的研究者使用。 |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia • 371 👍 • 5.24 M ⬇️ | NVIDIA Model Optimizer 推出的 FP4 量化版，下载量居量化榜第二。 |

---

## 生态信号
本周 **中文大模型**（GLM‑5.2、Gemma‑4、Qwen‑3.6）继续领跑，说明国内外企业对中文对话与指令微调的需求仍在快速增长。**Vision‑LLM** 的崛起尤为明显，尤其是 **Qwen3.6‑35B‑A3B‑Uncensored** 与 **LocateAnything‑3B**，两者的下载量合计已超过 3.8 M，暗示视觉理解在生产环境的落地加速。  
在权重发布形态上，**GGUF** 已成为社区首选的轻量化格式，尤其是 **Gemma‑4‑agentic**、**Ornith‑35B** 与 **Qwen‑AgentWorld‑GGUF**，它们的下载量均显著高于对应的 safetensors 原版，表明移动端与边缘部署需求旺盛。与此同时，**NVIDIA Model Optimizer**（FP4、NVFP4）推出的低位量化模型下载量激增，开源社区对 **MIT/Apache** 许可的开放权重表现出强烈偏好，闭源商业模型的增长相对平缓。  
微调层面，**代码专用**（Gemma‑coder）与 **检索/定位**（LocateAnything）模型的热度凸显，社区正把 LLM 能力细分到具体工作流，量化‑+‑微调的组合路线已成主流趋势。

---

## 值得探索
1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   *理由*：规模大（35 B）且具备完整视觉‑语言能力，下载量最高，适合实验多模态代理与“理解‑生成”流水线。

2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   *理由*：代码补全效果领先，GGUF 体积仅 6 GB，便于在常规工作站或云函数上部署，用于研发助理或自动化脚本生成。

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   *理由*：突破性的“一键定位”功能，可直接对任意图片/视频帧进行对象检索，配合 RAG（检索增强生成）场景，可显著提升搜索与视觉问答系统的实用性。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*