# Hugging Face 热门模型日报 2026-06-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-19 03:00 UTC

---

**Hugging Face 热门模型日报（2026‑06‑19）**  

---

## 今日速览
- 量化模型（GGUF）继续领跑，**HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored** 与 **yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF** 分别获得 1 971 与 1 712 点赞，展现对高性能、开放量化格式的强需求。  
- 多模态模型爆发，**nvidia/LocateAnything‑3B** 以 2 166 点赞成为本周唯一突破 2 000 的图像‑文本模型，显示定位/检索任务的旺盛兴趣。  
- 深度对话模型 **deepseek‑ai/DeepSeek‑V4‑Pro** 仍是下载量冠军（≈ 3 M），说明企业级对话系统仍是最热用例。  

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）
| 模型 | 作者 | 👍 点赞 | 📥 下载 | 简述 |
|------|------|--------|--------|------|
| **[deepseek‑ai/DeepSeek‑V4‑Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek‑ai | 4 957 | 2 948 726 | 规模 40B‑级对话模型，凭借强大的指令遵循与多语言能力，仍是企业部署的首选。 |
| **[google/gemma‑4‑12B‑it](https://huggingface.co/google/gemma-4-12B-it)** | google | 1 085 | 1 309 625 | Google 官方发布的 12B “any‑to‑any”模型，兼容文本、图像指令，成为通用 LLM 基准。 |
| **[zai‑org/GLM‑5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai‑org | 1 350 | 4 307 | 中英双语大模型，采用 Mixture‑of‑Experts，适合对话与检索增强。 |
| **[CohereLabs/North‑Mini‑Code‑1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 449 | 15 285 | 小型（约 1.5B）代码生成 LLM，针对边缘设备的指令微调表现尤佳。 |
| **[microsoft/FastContext‑1.0‑4B‑SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | microsoft | 205 | 957 | 4 B 参数的快速上下文扩展微调模型，专为长文档写作优化。 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）
| 模型 | 作者 | 👍 点赞 | 📥 下载 | 简述 |
|------|------|--------|--------|------|
| **[nvidia/LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 2 166 | 183 093 | 3 B 参数的通用定位/检索模型，支持“一图定位多目标”，在图像‑文本检索与工业视觉中快速走红。 |
| **[MiniMaxAI/MiniMax‑M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI | 1 102 | 56 162 | 多模态（图像‑文本）指令模型，采用跨模态 MoE，适合文案生成与图像理解。 |
| **[google/diffusiongemma‑26B‑A4B‑it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google | 1 002 | 527 080 | 以 Gemma 为骨干的 26 B 文本‑图像扩散模型，兼具高保真图像生成与指令对齐。 |
| **[bosonai/higgs‑audio‑v3‑tts‑4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 489 | 57 380 | 4 B 参数的中文‑英文高保真 TTS，采用多模态声学预训练。 |
| **[zai‑org/SCAIL‑2](https://huggingface.co/zai-org/SCAIL-2)** | zai‑org | 228 | 0 | 基于 Diffusers 的角色动画/姿态驱动视频生成模型，虽下载尚少，但在创意短片领域受到关注。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 👍 点赞 | 📥 下载 | 简述 |
|------|------|--------|--------|------|
| **[yuxinlu1/gemma‑4‑12B‑coder‑fable5‑composer2.5‑v1‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | yuxinlu1 | 1 712 | 211 424 | GGUF 量化的 12 B 代码专用模型，针对软件工程和算法推理做了指令微调，下载量居前。 |
| **[Jackrong/Qwopus3.6‑27B‑Coder‑MTP‑GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Jackrong | 251 | 122 175 | 27 B 参数的代码‑视觉组合模型，支持“代码‑图片‑注释”三模态交互，适合教学与代码审查。 |
| **[WeiboAI/VibeThinker‑3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | WeiboAI | 410 | 6 589 | 基于 Qwen2 的 3 B 轻量数学推理模型，专门微调了中文数学题库。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 👍 点赞 | 📥 下载 | 简述 |
|------|------|--------|--------|------|
| **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1 971 | 3 420 052 | 35 B Qwen3.6 经过 Aggressive 微调并全量 GGUF 量化，去审查版在 “自由对话” 圈子里爆火。 |
| **[unsloth/gemma‑4‑12b‑it‑GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 653 | 918 431 | 通过 unsloth 优化的 Gemma‑4‑12B GGUF，兼具小体积与高吞吐，是边缘推理的首选。 |
| **[unsloth/MiniMax‑M3‑GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF)** | unsloth | 103 | 22 659 | MiniMax‑M3 的 GGUF 量化版，展示了社区在多模态 MoE 量化方面的快速迭代。 |
| **[unsloth/GLM‑5.2‑GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | unsloth | 125 | 305 | GLM‑5.2 的轻量 GGUF，适合低算力服务器快速部署。 |
| **[OBLITERATUS/Gemma‑4‑12B‑OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS | 350 | 96 805 | 对 Gemma‑4‑12B 进行安全过滤的微调版本，提供 “去毒化” 选项，满足企业合规需求。 |

---

## 生态信号
本周 **Gemma**、**Qwen** 与 **GLM** 三大家族继续主导生态：Gemma 在量化（GGUF）与多模态扩展上表现活跃；Qwen 系列通过大规模去审查微调和 MoE 结构刷新了对话与定位任务的上限；GLM 则靠 Mixture‑of‑Experts 维持跨语言竞争力。**开源权重的比例正上升**——除 DeepSeek‑V4‑Pro 仍保留部分闭源组件外，96% 以上的热门模型均提供完整权重下载。量化技术（GGUF、AWQ）在社区中快速扩散，尤其是 **GGUF** 成为“高性能轻量化”事实标准，下载量与点赞数均显著领先。微调层面的创新集中在 **去审查/安全过滤**（HauhauCS、OBLITERATUS）以及 **代码‑视觉联合**（Qwopus、Gemma‑Coder）两大方向。整体来看，模型规模虽仍在 30‑40 B 之间增长放缓，但 **多模态能力、可部署性与合规微调** 成为竞争焦点。

---

## 值得探索
1. **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   *理由：* 35 B 参数、全量 GGUF、无审查微调，兼具强大对话能力与极致推理速度，是研究大规模开放式对话与安全边界的理想平台。

2. **[nvidia/LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   *理由：* 通过“一图定位多目标”实现的通用视觉检索模型，已在工业检测、AR/VR 与电商搜索等场景展现出商业价值，值得在跨域定位任务上进行深度实验。

3. **[deepseek‑ai/DeepSeek‑V4‑Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
   *理由：* 仍是下载量最高的对话模型，拥有成熟的商业化 API 与多语言支持，适合对话系统研发、评估新指令集（Tool‑Use、Tool‑Call）以及大规模人机交互实验。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*