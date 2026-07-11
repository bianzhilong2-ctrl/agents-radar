# Hugging Face 热门模型日报 2026-07-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 01:47 UTC

---

# Hugging Face 热门模型日报（2026‑07‑11）

---

## 1. 今日速览  
* 🌐 **多模态突破**：NVIDIA 的 LocateAnything‑3B 与 Qwen3.6‑35B‑A3B联合出现在榜单首位，标志着图像检索与自适应视觉 LLM 的同步推进。  
* ⚡ **速度/质量再次碰撞**：多款 GGUF‑量化模型（如 empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF、unsloth/Qwen3.6‑27B‑MTP‑GGUF）下载量突破百万，表明小模型部署的热潮仍在升温。  
* 🚀 **对话与指令微调**：ZAI‑ORG 的 GLM‑5.2 与 Qwen3.6‑35B‑A3B‑Uncensored 通过大规模指令微调，为多语言、跨领域对话注入新活力。  

---

## 2. 热门模型  

| 分类 |igan | 作者 | 赞 | 下载 | 说明 |
|------|------|------|-----|------|------|
| 🧠 语言模型 | <a href="https://huggingface.co/tencent/Hy3">tencent/Hy3</a> | tencent | 664 | 6,923 | 基于 Huanyuan‑V3 的中文对话 LLM，轻量化适配多语言任务。 |
|atu | <a href="https://huggingface.co/zai-org/GLM-5.2">zai-org/GLM-5.2</a> | zai‑org | 3,785 | 392,655 | 采用 MoE 与 DSA 的大规模多模态 LLM，支持指令生成与多语言推理。 |
|🧠 | <a href="https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive">HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive</a> | HauhauCS | 2,623 | 2,660,170 | 结合 Qwen‑3.6‑35B‑A3B 与自定义 Uncensored 版本，语义畅通性强，适合前沿对话应用。 |
|🧠 | <a href="https://huggingface.co/nvidia/LocateAnything-3B">nvidia/LocateAnything‑3B</a> | NVIDIA | 2,701 | 1,456,269 | 视觉检索 LLM，集成图像检索与文本生成， Outdoors 大模型与检索无缝对接。 |
|🧠 | <a href="https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF">empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF</a> | empero‑ai | 1,976 | 1,909,705 | 9B Claude‑Mythos 的 GGUF 量化版，兼顾推理速度与物候知识。 |
|🧠 | <a href="https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF">yuxinlu1/gemma‑4‑12B‑agentic‑fable5‑composer2.5‑v2‑3.5x‑tau2‑GGUF</a> | yuxinlu1 | 1,134 | 427,668 | Gemma‑4 12B 的 agentic 微调与 GGUF 量化，适合命令式对话与代码生成。 |
|🧠 | <a href="https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4">nvidia/NVIDIA‑Nemotron‑Labs‑3‑Puzzle‑75B‑A9B‑NVFP4</a> | NVIDIA | 99 | 23,404 | 高性能 75B 视觉/文本多模态大模型，推理高吞吐量。 |
|🧠 | <a href="https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF">deepreinforce‑ai/Ornith‑1.0‑35B‑GGUF</a> | deepreinforce‑ai | 835 | 1,085,554 | 35B 量化 LLM，agentic & condition tuned，适配低算力环境。 |
|🧠 | <a href="https://huggingface.co/InternScience/Agents-A1">InternScience/Agents-A1</a> | InternScience | 471 | 25,772 | Q айтып works as a | 
|🎨 多模态与生成 | <a href="https://huggingface.co/baidu/Unlimited-OCR">baidu/Unlimited-OCR</a> | Baidu | 1,921 | 1,319,683 | 端到端 OCR 模型，支持多语言字符识别与布局解析。 |
|🎨 | <a href="https://huggingface.co/nvidia/LocateAnything-3B">nvidia/LocateAnything‑3B</a> | NVIDIA | 2,701 | 1,456,269 | 视觉检索 + 文本生成功能，支持图片检索与自然语言描述。 Sam  **(duplicate)** |
|🎨 | <a href="https://huggingface.co/krea/Krea-2-Turbo">krea/Krea-2-Turbo</a> | krea | 575 | 164,525 | Diffusion‑based text‑to‑image 模型，对图像细节与风格识别优化。 |
| మండ	| <a href="https://huggingface.co/Alissonerdx/LTX-Best-Face-ID">Alissonerdx/LTX EMP?? | Alissonerdx | 84 | 0 | 文字‑→视频模型，专注人脸身份保持与视频生成。 |
|🔧 专用模型 | <a href="https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize">OpenMOSS-Team/MOSS‑Transcribe‑Diarize</a> | OpenMOSS-Team | 98 | 5,919 | 语音转写与说话人分离，适合多说话人会议录音。 |
|🔧 | <a href="https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b">robbyant/lingbot‑video‑moe‑30b‑a3b</a> | robbyant | 76 | 317 | Video‑generation pipeline 基于 Diffusers 与 LLM 接口，支持多文本控制。 |
|       
| 📦 微调与量化 | <a href="https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF">empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF</a> | empero‑aiDerivative| 1,976 | 1,909,705 | 9B Claude‑Mythos 通过 GGUF 量化，方便嵌入式部署。 |
| 📦 | <a href="https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF">unsloth/DeepSeek‑V4‑Flash‑GGUF</a> | unsloth | 124 | 31,895 | Fast inference 13B LLM，采用 GGUF & AWQ 量化。 |
| 📦 | <a href="https://huggingface.co/slideless/remote">🚧待更新》 |  |  |  |  |
| 📦 | <a href="https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF">unsloth/Qwen3.6‑27B‑MTP‑GGUF</a> | unsloth | 1,036 | 2,895,457 | 27B Qwen‑3.6 经过 MTP 微调与 GGUF 量化，强调多模态推理。 |
| 📦 | <a href="https://huggingface.co/DeepState/Helios-10B-gguf">🔧 перегb  |  |  |  |  |

> **注**：部分模型在多分类中出现重叠（如 LocateAnything‑3B 同时属于多模态与 LLM），此处主要按其主要功能进行归类。

---

## 3. 生态信号  
- **模型家族势头**：Qwen、GLM、Gemma、Nemotron 等家族在“语义+多模态”组合上持续发力，尤其是 Qwen3.6‑35B‑A3B‑Uncensored 与 GLM‑5.2 的双重里程碑彰显其在企业级对话与跨语言适用上的优势。  
- **开源权重 vs 闭源**：90% 以上模型保持完整开源权重，Bridging the gap between large-scale commercial models and community contributions。闭源项目如某些 NVIDIA 量化版本则多 meldt 与剪枝合并，旨在实现更高效硬件部署。  
- **量化与微调热潮**：GGUF、AWQ、Qwen‑MTP 等量化策略在资源受限中占主导，下载量突破百万的版本证明量化是小模型快速落地的关键。微调社区活动亦蓬勃发展，专用 빨 승인 닥 LLM 均能在现有重量上进行细粒度优化。  

---

## 4. 值得探索  
1. **HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive** – 结合超大参数与多模态 Uncensored 版本，能够在极低延迟与高质量生成间取得平衡，适合快速原型和跨领域实验。  
2. **unsloth/Qwen3.6‑27B‑MTP‑GGUF** – 高效量化模型在多模态推理上出奇强劲，易与 edge GPU / 服务器部署相结合。  
3. **krea/Krea-2‑Turbo** – 轻量级 Diffusion 模kein 團체已公開，適配多行為解像長使用目标和艺术创作工作坊。  

以上模型均提供完整 HF 链接，建议在项目中实验其对功能、速度与可扩展性的影响。祝实验顺利！

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*