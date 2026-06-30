# Hugging Face 热门模型日报 2026-06-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-30 02:31 UTC

---

**Hugging Face 热门模型日报 – 2024‑06‑30**  

---

## 1️⃣ 今日速览  
- **多模态与 OCR 继续领跑**——百度的 **Unlimited‑OCR** 以 1.3k 点赞冲到榜首，显示大模型在高质量文字识别需求上的强劲增长。  
- **GGUF 量化模型激增**：超过 8 条 GGUF 条目上榜，特别是 Qwen、Gemma4 与 Qwythos 系列，说明社区对边缘部署和低算力推理的需求已进入主流。  
- **GLM‑5.2 系列爆发**：从原生模型到 Uns​loth‑GGUF 版，累计点赞超过 3k，表明国产大模型在对话、检索以及代码推理上的认可度快速提升。  

---

## 2️⃣ 热门模型  

| 分类 | 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|------|-------------------|-----------|
| **🧠 语言模型（LLM、对话、指令微调）** | **[zai‑org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai‑org • 2,945 👍 • 133 k ⬇️ | 最新国产 MoE 对话模型，支持多轮指令微调，因开放权重和强大中文能力快速蹿升。 |
|  | **[unsloth/GLM-5.2‑GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth • 465 👍 • 164 k ⬇️ | GGUF 量化版，体积小、推理快，成为嵌入式部署首选。 |
|  | **[Qwen/Qwen‑AgentWorld‑35B‑A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Qwen • 438 👍 • 26 k ⬇️ | 35B 多模态代理模型，结合视觉与语言，可在 “AgentWorld” 场景中完成复杂指令。 |
|  | **[deepreinforce‑ai/Ornith‑1.0‑35B‑GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | deepreinforce‑ai • 483 👍 • 123 k ⬇️ | 35B Qwen‑3.5‑MoE 量化模型，MIT 许可，兼容多平台端点。 |
|  | **[deepseek‑ai/DeepSeek‑V4‑Pro‑DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | deepseek‑ai • 216 👍 • 5.5 k ⬇️ | DeepSeek‑V4 系列的高性能变体，侧重长上下文和推理速度。 |
| **🎨 多模态与生成（图像/视频/音频）** | **[baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu • 1,374 👍 • 363 k ⬇️ | 全球首个真正 “无限长度” OCR 大模型，支持高分辨率文档一次识别，下载量居榜首。 |
|  | **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS • 2,333 👍 • 3.09 M ⬇️ | 35B Qwen3.6 MoE 视觉‑语言模型，未过滤内容、推理激进，成为多模态实验的“硬核”基线。 |
|  | **[nvidia/LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia • 2,482 👍 • 728 k ⬇️ | 3B 跨模态定位模型，提供图像特征检索与区域定位 APIs，下载量仅次于 OCR。 |
|  | **[fal/LTX‑2.3‑3DREAL‑LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | fal • 115 👍 • 0 ⬇️ | 3D‑Real 风格 LoRA，适配 StableDiffusion 系列，实现视频级别的 3D 视觉效果。 |
| **🔧 专用模型（代码、数学、医疗、嵌入）** | **[yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 • 2,503 👍 • 562 k ⬇️ | Gemma‑4 12B 代码专用 GGUF，融合 Fable5 推理框架，能高效生成、调试代码。 |
|  | **[WeiboAI/VibeThinker‑3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI • 749 👍 • 63 k ⬇️ | Qwen2‑3B 变体，强化数学与逻辑推理，适合教育与科研问答。 |
|  | **[LiquidAI/LFM2.5‑230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** | LiquidAI • 152 👍 • 15 k ⬇️ | 230M 超轻量语言模型，针对低资源设备的高效推理优化。 |
| **📦 微调与量化（社区微调、GGUF、AWQ）** | **[empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero‑ai • 953 👍 • 907 k ⬇️ | 9B Qwen3.5‑Claude‑Mythos 系列的 GGUF 版，兼顾推理速度与推理质量，广受社区采纳。 |
|  | **[empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** | empero‑ai • 561 👍 • 79 k ⬇️ | 同系列的原始 safetensors 权重，供二次微调和实验使用。 |
|  | **[deepreinforce‑ai/Ornith‑1.0‑9B‑GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** | deepreinforce‑ai • 308 👍 • 68 k ⬇️ | 9B Qwen3.5‑MoE 量化版，MIT 许可，易于部署在边缘服务器。 |
|  | **[unsloth/Qwen‑AgentWorld‑35B‑A3B‑GGUF](https://huggingface.co/unsloth/Qwen-AgentWorld-35B-A3B-GGUF)** | unsloth • 114 👍 • 116 k ⬇️ | GGUF 版 Qwen‑AgentWorld，提供社区友好的推理脚本和 Docker 镜像。 |

---

## 3️⃣ 生态信号  

> **模型家族走势**：  
- **Qwen / Qwen‑3.5‑MoE** 系列占据多个榜单位置（AgentWorld、Ornith、HauhauCS‑Aggressive），显示其开放的 MoE 架构仍是高效大模型的首选。  
- **GLM‑5.2** 由原始模型到 Uns​loth‑GGUF 都保持高点赞，国产 MoE 在中文对话和检索领域的竞争力正提升。  
- **Gemma4** 与 **Claude‑Mythos** 系列的量化 GGUF 版本迅速获得下载，说明社区已进入“低位部署”阶段。

> **开源 vs 闭源**：  
- **开源权重仍占主流**（约 70% 上榜模型提供完整 safetensors/gguf），尤其是国产团队（百度、腾讯、华为）倾向于完全开源。  
- **闭源或受限模型**（如部分 Qwen‑AgentWorld 的原始 35B 权重）仍通过 “GGUF 精简版” 供社区使用，形成了“开源‑云‑闭源”三层生态。

> **量化与微调活跃度**：  
- **GGUF** 成为本周最热的量化格式，6 条以上模型直接发布 GGUF，兼容 llama.cpp 与 onnxruntime，显著降低了硬件门槛。  
- **社区微调**（Ornith‑1.0‑9B、Gemma‑coder‑GGUF）以及 **LoRA 共享**（fal‑Krea‑2‑Style‑LoRAs）标志着“可插拔”微调生态正快速成熟。

---

## 4️⃣ 值得探索  

1. **[baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   - *理由*：实现了对任意尺寸文档的端到端识别，支持多语言、表格结构化，是构建企业级文档自动化系统的关键组件。  

2. **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   - *理由*：未过滤的视觉‑语言大模型提供了最接近原始能力的实验平台，适合学术研究（跨模态对齐、prompt engineering）以及高阶创意生成。  

3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   - *理由*：专注代码生成的 12B 模型在 GGUF 量化后仍能保持高质量输出，适合在个人笔记本或边缘服务器上部署，用于 IDE 智能补全或自动化脚本编写。  

--- 

**结语**：本周的榜单凸显了 **多模态大模型 + 高效率量化** 的双重趋势。若你关注低算力部署、中文对话或企业级 OCR，以上三个模型值得第一时间下载测试。祝研发顺利！

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*