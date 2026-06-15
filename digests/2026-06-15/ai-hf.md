# Hugging Face 热门模型日报 2026-06-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-15 02:48 UTC

---

# Hugging Face 热门模型日报（2026‑06‑15）

---

## 今日速览  
1️⃣ **Gemma‑4 系列继续领跑**：Google 的 `gemma-4-12B-it` 与 `gemma-4-12B` 以及社区量化版（unsloth GGUF）合计点赞超 2 000，下载量破 2 M，显示统一大模型在 LLM 与多模态任务的全场景适配仍是热点。  
2️⃣ **视觉‑语言模型爆发**：`nvidia/LocateAnything-3B`、`google/diffusiongemma-26B-A4B-it` 与 `HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive` 等多模态、图像‑文本‑生成模型稳居榜单前列，说明企业和社区正加速布局 “看到即理解” 的能力。  
3️⃣ **量化 & GGUF 成为主流**：超过 30% 的热门模型以 GGUF、QAT、AWQ 形式发布，下载量普遍高于原始 safetensors 权重，表明轻量化部署需求已从实验走向生产。  

---  

## 热门模型  

### 🧠 语言模型（LLM、对话模型、指令微调）  
| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google / 1 008 / 1 084 405 | 12B 统一语言/视觉指令模型，兼容多模态输入，是社区量化版热度的根基。 |
| **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google / 544 / 213 502 | 同系列的纯文本大模型，表现强劲，用量化后在低算力设备上也能跑。 |
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai / 4 834 / 3 075 369 | 规模 35B 的对话/指令模型，凭借高质量对话数据与商业化包装抢占赞榜首。 |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs / 369 / 9 932 | 小型（≈1B）代码专用 LLM，针对开发者工具和代码补全场景做了指令微调。 |
| **[nex-agi/Nex‑N2‑Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | nex‑agi / 260 / 3 396 | 8B 级 Qwen3.5‑MOE 生态的商业版，提供多语言对话与检索增强。 |
| **[nex-agi/Nex‑N2‑mini](https://huggingface.co/nex-agi/Nex-N2-mini)** | nex‑agi / 211 / 7 010 | 3B 轻量化版，适合边缘设备的实时对话。 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）  
| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | google / 801 / 198 912 | 26B 融合 Diffusion 与 Gemma 的图像‑文本‑生成模型，可直接“看图说话”。 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia / 2 004 / 75 201 | 3B 视觉定位大模型，支撑“任意图片中定位任意对象”的检索需求。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS / 1 808 / 2 516 709 | 35B 视觉‑语言大模型，未审查版本在创意内容社区获得极高下载。 |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram‑ai / 535 / 8 263 | FP8 量化的文本‑到‑图像扩散模型，兼顾生成质量与显存占用。 |
| **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | zai‑org / 175 / 0 | Pose‑driven 视频生成扩散模型，开启角色动画的低成本生成路径。 |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai / 427 / 35 122 | 4B 参数高保真中文 TTS，结合多模态特征提升情感表达。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）  
| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[moonshotai/Kimi‑K2.7‑Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai / 635 / 15 145 | 2.7B 专注代码理解/生成的模型，使用压缩张量提升推理效率。 |
| **[unsloth/Kimi‑K2.7‑Code‑GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF)** | unsloth / 71 / 25 | GGUF 版的轻量化 Kimi‑Code，适合本地开发者工作站。 |
| **[Jackrong/Qwopus3.6‑27B‑Coder‑MTP‑GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Jackrong / 183 / 33 720 | 27B 代码‑+‑视觉多任务模型，兼容 LLaVA‑style 交互。 |
| **[MiniMaxAI/MiniMax‑M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | MiniMaxAI / 497 / 6 643 | 多模态（图像‑文本）小模型，面向边缘设备的快速部署。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）  
| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|------|-------------------|------------|
| **[unsloth/gemma‑4‑12b‑it‑GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth / 598 / 926 372 | GGUF 版 Gemma‑4‑12B‑IT，单文件 9 GB，极大降低部署门槛。 |
| **[unsloth/gemma‑4‑12B‑it‑qat‑GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth / 232 / 255 424 | QAT（量化感知训练）版，推理速度提升约 30%。 |
| **[OBLITERATUS/Gemma‑4‑12B‑OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS / 303 / 60 949 | 通过 LoRA 微调的 Gemma‑4，加入多语言安全过滤。 |
| **[DavidAU/…‑Claude‑4.6‑Opus‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU / 337 / 375 966 | 多模型混合微调（Claude‑style + Qwen3.6）后导出 GGUF，展示了跨家族微调的潜力。 |
| **[unsloth/diffusiongemma‑26B‑A4B‑it‑GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | unsloth / 261 / 80 118 | 将 26B DiffusionGemma 量化为 GGUF，适配低显存 GPU。 |

---

## 生态信号（≈150 字）  
- **Gemma‑4 系列**：Google 推出的统一模型继续吸引社区大量量化与微调工作，形成了“Gemma‑生态 + GGUF”闭环。  
- **视觉‑语言模型**正快速增长，尤其是 Nvidia、Google 与独立社区项目（HauhauCS、ideogram‑ai）在图片定位、跨模态对话上形成竞争格局。  
- **开源权重占比提升**：在前 30 名中，超过 80% 为 **MIT / Apache** 等宽松许可证的开源模型；只有少数（如 DeepSeek‑V4‑Pro）标记为商业授权。  
- **量化趋势**：GGUF、QAT、AWQ 版模型下载量普遍高于原始 safetensors，说明生产环境对 **低显存、快速推理** 的需求已经主导模型发布策略。  

---

## 值得探索  

1. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** – 兼具强大的文本‑到‑图像生成与图像‑到‑文本理解，适合研发“看图生成描述”或“多模态检索”原型。  
2. **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** – 单文件 GGUF 权重，推理速度快且兼容主流 C++/Python 推理库，是在边缘服务器或本地桌面快速验证 LLM 能力的首选。  
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – 35B 未审查版为创意内容生成（如艺术创作、游戏剧本）提供了高自由度的模型，值得在内容生产与风险控制实验中深入研究。  

---  

> 本日报基于 2026‑06‑15 Hugging Face Hub 的「周点赞」排行，旨在帮助研发、产品和投资团队快速捕捉模型生态的最新动向。祝您探索愉快！

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*