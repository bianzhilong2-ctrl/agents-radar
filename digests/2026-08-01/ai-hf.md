# Hugging Face 热门模型日报 2026-08-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-01 01:55 UTC

---

**Hugging Face 热门模型日报**  
*2026‑08‑01*

---

### 今日速览  
1. **Kimi‑K3 系列**（moonshotai 与 unsloth）以 9,282 赞和 493k 下载再次登顶，表明多模态对话模型仍是主流。  
2. **DeepSeek‑V4‑Flash** 及其 GGUF 版本在文本生成领域持续领跑，下载量突破 2.9M，显示大模型量化的成熟度。  
3. **Qwen3.6‑35B‑A3B** 系列（LuffyTheFox、HauhauCS、DavidAU）在图像‑文本任务上频繁出现，暗示 3B‑35B 级别的多模态模型正快速迭代。  
4. **Solar‑Open2‑250B** 与其 NVFP4 量化版在 250B 参数规模上保持高活跃度，凸显超大模型的可部署性。  
5. **多模态音频模型**（Inflect‑Micro、Audio8‑TTS、VibeVoice‑ASR）在下载量与点赞数上均有显著增长，说明音频生成与识别正成为新焦点。

---

### 热门模型  

| 分类 | 模型（链接） | 作者 / 赞 / 下载 | 说明 |
|------|--------------|------------------|------|
| 🧠 语言模型 | **deepseek‑ai/DeepSeek‑V4‑Flash** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash> | deepseek‑ai / 1,923 / 2,923,499 | 大规模对话 LLM，支持多轮指令微调，下载量突破 2.9M。 |
| | **zai-org/GLM‑5.2** <https://huggingface.co/zai-org/GLM-5.2> | zai‑org / 4,708 / 1,651,533 | 5.2B 参数的多语言对话模型，兼容多种指令格式。 |
| | **poolside/Laguna‑S‑2.1** <https://huggingface.co/poolside/Laguna-S-2.1> | poolside / 863 / 76,212 | 2.1B 参数的对话模型，强调高效推理。 |
| | **Nanbeige/Nanbeige4.2‑3B** <https://huggingface.co/Nanbeige/Nanbeige4.2-3B> | Nanbeige / 595 / 26,928 | 3B 参数的通用 LLM，轻量化部署。 |
| | **XYZAILab/XYZ‑Aquila‑mini** <https://huggingface.co/XYZAILab/XYZ-Aquila-mini> | XYZAILab / 352 / 579 | 轻量化 Qwen3.5‑mini，适合边缘设备。 |
| | **XYZAILab/XYZ‑Aquila‑pro** <https://huggingface.co/XYZAILab/XYZ-Aquila-pro> | XYZAILab / 326 / 869 | 进阶版，支持更复杂指令。 |
| | **EschaLabs/Qwen3.6‑35B‑A3B‑Escha‑W2** <https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2> | EschaLabs / 107 / 599 | 35B 参数的 Qwen3.6 微调版，侧重多模态推理。 |
| | **deepseek‑ai/DeepSeek‑V4‑Flash‑0731** <https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731> | deepseek‑ai / 1,017 / 0 | 预训练版本，未发布下载。 |
| 🎨 多模态与生成 | **moonshotai/Kimi‑K3** <https://huggingface.co/moonshotai/Kimi-K3> | moonshotai / 9,282 / 493,481 | 以图像+文本为输入的对话模型，压缩张量提升推理速度。 |
| | **baidu/Unlimited‑OCR** <https://huggingface.co/baidu/Unlimited-OCR> | baidu / 3,663 / 2,513,603 | OCR 任务的通用模型，支持多语言文本识别。 |
| | **unsloth/Kimi‑K3‑GGUF** <https://huggingface.co/unsloth/Kimi-K3-GGUF> | unsloth / 228 / 36,180 | Kimi‑K3 的 GGUF 量化版，适合 CPU 推理。 |
| | **unsloth/Kimi‑K3** <https://huggingface.co/unsloth/Kimi-K3> | unsloth / 216 / 1,044 | 轻量化多模态模型，兼容多任务。 |
| | **microsoft/Fara1.5‑27B** <https://huggingface.co/microsoft/Fara1.5-27B> | microsoft / 234 / 2,726 | 27B 参数的图像‑文本生成模型，支持视觉指令。 |
| | **microsoft/Mage‑VL** <https://huggingface.co/microsoft/Mage-VL> | microsoft / 150 / 5,650 | 视觉‑语言模型，支持多模态推理。 |
| | **Audio8/Audio8‑TTS‑Preview‑0.6b** <https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b> | Audio8 / 151 / 2,481 | 轻量化 TTS 模型，支持多语种合成。 |
| | **VibeVoice‑ASR‑BitNet** <https://huggingface.co/microsoft/VibeVoice-ASR-BitNet> | microsoft / 135 / 5,464 | 低延迟 ASR 模型，适合边缘设备。 |
| | **thinkingmachines/Inkling** <https://huggingface.co/thinkingmachines/Inkling> | thinkingmachines / 1,664 / 57,259 | 视觉‑文本生成模型，支持对话式交互。 |
| | **thinkingmachines/Inkling‑Small** <https://huggingface.co/thinkingmachines/Inkling-Small> | thinkingmachines / 196 / 2,971 | Inkling 的小型版本，推理更快。 |
| | **Comfy-Org/Mage‑Flow** <https://huggingface.co/Comfy-Org/Mage-Flow> | Comfy-Org / 107 / 60,162 | 以 Mage‑Flow 为基础的 diffusion 单文件模型。 |
| | **DavidAU/Qwen3.6‑27B‑Fable‑Fusion‑711‑Uncensored‑Heretic‑NM‑DAU‑NEO‑MAX‑MTP‑GGUF** <https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF> | DavidAU / 1,148 / 1,119,057 | 3B 参数的多模态微调模型，支持图像+文本生成。 |
| | **DavidAU/Qwen3.5‑9B‑The‑Defiant‑Fable‑Uncensored‑Heretic‑NEO‑IMATRIX‑MAX‑MTP‑GGUF** <https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF> | DavidAU / 174 / 261,856 | 9B 参数的多模态微调模型，兼容多任务。 |
| | **LuffyTheFox/Qwen3.6‑35B‑A3B‑Uncensored‑Genesis‑Hermes‑V6‑GGUF** <https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF> | LuffyTheFox / 272 / 212,426 | 35B 参数的多模态 GGUF 版本，支持高质量生成。 |
| | **HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive** <https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive> | HauhauCS / 3,205 / 1,835,931 | 35B 参数的多模态 GGUF 版本，强调视觉推理。 |
| | **owensong/Inflect‑Micro‑v2** <https://huggingface.co/owensong/Inflect-Micro-v2> | owensong / 348 / 1,449 | 轻量化 TTS 模型，适合 CPU 边缘。 |
| | **owensong/Inflect‑Nano‑v2** <https://huggingface.co/owensong/Inflect-Nano-v2> | owensong / 121 / 802 | 更小的 TTS 版本，推理速度更快。 |
| | **upstage/Solar‑Open2‑250B** <https://huggingface.co/upstage/Solar-Open2-250B> | upstage / 714 / 12,911 | 250B 参数的对话模型，支持多轮指令。 |
| | **nota‑ai/Solar‑Open2‑250B‑Nota‑NVFP4** <https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4> | nota‑ai / 151 / 18,531 | Solar‑Open2 的 NVFP4 量化版，显著减小模型体积。 |
| 🔧 专用模型 | **Kwaipilot/KAT‑Coder‑V2.5‑Dev** <https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev> | Kwaipilot / 371 / 10,241 | 代码生成模型，基于 Qwen3.5‑MOE，支持多语言编程。 |
| | **microsoft/VibeVoice‑ASR‑BitNet** <https://huggingface.co/microsoft/VibeVoice-ASR-BitNet> | microsoft / 135 / 5,464 | 低延迟 ASR 模型，适合实时语音识别。 |
| | **Comfy-Org/Mage‑Flow** <https://huggingface.co/Comfy-Org/Mage-Flow> | Comfy-Org / 107 / 60,162 | diffusion 单文件模型，支持 ComfyUI。 |
| 📦 微调与量化 | **unsloth/DeepSeek‑V4‑Flash‑0731‑GGUF** <https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF> | unsloth / 185 / 0 | DeepSeek‑V4‑Flash 的 GGUF 量化版，适合 CPU 推理。 |
| | **unsloth/Kimi‑K3‑GGUF** <https://huggingface.co/unsloth/Kimi-K3-GGUF> | unsloth / 228 / 36,180 | Kimi‑K3 的 GGUF 量化版，轻量化推理。 |
| | **nota‑ai/Solar‑Open2‑250B‑Nota‑NVFP4** <https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4> | nota‑ai / 151 / 18,531 | Solar‑Open2 的 NVFP4 量化版，显著减小模型体积。 |
| | **prism‑ml/Ternary‑Bonsai‑27B‑gguf** <https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf> | prism‑ml / 1,125 / 712,835 | 27B 参数的 2‑bit Ternary 量化模型，适合低功耗设备。 |
| | **EschaLabs/Qwen3.6‑35B‑A3B‑Escha‑W2** <https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2> | EschaLabs / 107 / 599 | Qwen3.6‑35B 的 W2 量化版，推理速度提升。 |

---

### 生态信号  
- **家族势头**：Kimi‑K3、Qwen3.6‑35B‑A3B 系列在多模态任务上持续高热度，说明 3B‑35B 级别的多模态 LLM 正在快速迭代。  
- **开源 vs 闭源**：大多数热门模型均为开源权重，尤其是 Microsoft、DeepSeek、Moonshot 等企业在保持闭源核心的同时，积极发布可商用的开源版本。  
- **量化与微调**：GGUF、AWQ、NVFP4、Ternary 等量化技术在 

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*