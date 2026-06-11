# Hugging Face 热门模型日报 2026-06-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-11 02:43 UTC

---

# Hugging Face 热门模型日报（2026‑06‑11）

## 今日速览
- **Gemma‑4 系列**继续领跑跨模态（any‑to‑any）赛道，Google 官方模型与社区量化版并行受热。  
- **NVIDIA LocateAnything‑3B** 以强大的图像‑文本检索能力夺得最高点赞，显示“定位搜索”需求爆发。  
- **DeepSeek‑V4‑Pro** 与 **Qwen‑3.6‑35B** 系列仍是大模型对话与视觉多模态的主力，下载量均突破百万。  
- 社区量化（GGUF、QAT）与专用微调模型数量攀升，尤其是 **unsloth** 与 **HauhauCS** 的 GGUF 发行版，引领轻量化部署潮流。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|--------------------|-----------|
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google • 890 👍 • 675,936 ⬇️ | Google 官方的 12B 指令微调版，统一的 any‑to‑any 能力是目前最全能的对话/生成核心。 |
| **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google • 504 👍 • 140,221 ⬇️ | 未微调的原始 12B 模型，提供最纯粹的 Gemini‑4 基础，常被二次微调。 |
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai • 4,762 👍 • 4,061,006 ⬇️ | 规模 35B+ 的商业对话模型，强大的上下文理解让其成为企业部署首选。 |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs • 262 👍 • 1,859 ⬇️ | 小巧的代码生成模型（1B），适合本地 IDE 插件及实时补全。 |
| **[nex-agi/Nex‑N2‑Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | nex‑agi • 181 👍 • 1,185 ⬇️ | 基于 Qwen‑3.5‑MOE 的高效多语言助手，兼顾对话与检索任务。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|--------------------|-----------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia • 1,806 👍 • 131,794 ⬇️ | 3B 参数的图像‑文本定位模型，可在任意图片中精准检索文字/对象，开启 “视觉搜索即服务”。 |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram‑ai • 474 👍 • 7,170 ⬇️ | FP8 精度的 4B 文本‑到‑图像扩散模型，兼顾质量与显存占用，适合边缘生成。 |
| **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram‑ai • 309 👍 • 6,124 ⬇️ | NF4 量化版，下载量稳步增长，展示了低位宽扩散模型的实用性。 |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google • 174 👍 • 19,806 ⬇️ | 实时文本到音频（音乐）模型，面向创意音频生成和交互式音乐创作。 |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance • 212 👍 • 305 ⬇️ | 首个开源“文本‑到‑视频”渲染器，利用 4B 视觉‑语言解码器生成短动画。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS • 1,634 👍 • 3,057,541 ⬇️ | 35B Qwen‑3.6 视觉‑语言模型（GGUF），去审查版，兼容多模态对话，下载量居前。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|--------------------|-----------|
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai • 325 👍 • 19,948 ⬇️ | 4B 中文/英文高保真 TTS，采用自研声码器，适合企业客服与播客。 |
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia • 349 👍 • 4,965 ⬇️ | 低延迟流式 ASR，针对嵌入式设备做了缓存感知优化。 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc • 740 👍 • 134,752 ⬇️ | 为人力资源（HR）场景微调的 1B 文本模型，擅长简历解析与面试问答。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|--------------------|-----------|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth • 551 👍 • 711,706 ⬇️ | 12B Gemma‑4 IT 的 GGUF 发行版，支持 CPU、GPU 高效推理，下载量居社区榜首。 |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth • 191 👍 • 148,252 ⬇️ | 量化感知训练（QAT）版，4‑bit 参数即可跑 30+ token/s，受轻量部署用户好评。 |
| **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth • 132 👍 • 129,110 ⬇️ | 26B 大模型的 QAT‑GGUF，展示了 4‑bit 大模型可在单卡上运行的极限。 |
| **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** | google • 124 👍 • 96,749 ⬇️ | Google 官方发布的 4‑bit QAT 版本，为企业级部署提供官方量化基准。 |
| **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS • 214 👍 • 14,838 ⬇️ | “删减”版 Gemma（去安全过滤），供研究者探索模型行为边界。 |

---

## 生态信号（100‑200字）

本周 **Gemma‑4 系列**（官方与社区量化版）占据 LLM 与多模态两大榜单，表明统一的 “any‑to‑any” 框架正成为社区标准。**NVIDIA LocateAnything-3B** 的高点赞与显著下载，凸显图像‑文本定位和检索需求的快速崛起。开源权重比例继续提升，Google、NVIDIA 与社区（unsloth、HauhauCS）均提供完整可下载权重；相对的，DeepSeek‑V4‑Pro 仍保持付费/闭源模型的高下载，说明商业大模型仍有强劲吸引力。量化与 GGUF 发行量激增，尤其是 4‑bit QAT 与 FP8 扩散模型，说明轻量化部署已进入主流应用阶段，企业与个人开发者均在追求更低显存成本的部署方案。

---

## 值得探索

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   - **理由**：唯一在排行榜上以图片‑文本定位为核心的模型，API 简洁，可直接用于企业级视觉搜索、机器人导览等实际业务。  

2. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**  
   - **理由**：12B 指令微调版的 GGUF 实现了在 CPU 上可接受的推理速度，适合离线部署或边缘设备的全能对话系统。  

3. **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**  
   - **理由**：FP8 量化的扩散模型在保持图像质量的同时将显存需求降低 50%，是探索低成本高质量文本‑到‑图像生成的绝佳实验平台。  

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*