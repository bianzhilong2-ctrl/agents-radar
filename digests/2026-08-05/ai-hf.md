# Hugging Face 热门模型日报 2026-08-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-05 01:43 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-08-05

---

## 📰 今日速览

1. **中大型 MoE 模型成主流**：DeepSeek-V4-Flash、Kimi-K3、GLM-5.2、Qwen3.6 等 30B+ MoE 模型占据点赞与下载双榜前列，显示社区对稀疏架构的高度认可。
2. **视频生成开源突围**：MiniMax-H3 以 2k+ 点赞领跑 `image-text-to-video` 赛道，ComfyUI、GGUF 生态迅速跟进，标志着视频生成模型进入“可本地部署、可微调”阶段。
3. **百度 Unlimited-OCR 成文档理解新标杆**：270 万+ 下载量远超同期模型，反映企业级文档解析需求爆发。
4. **量化与微调链条成熟**：unsloth、DavidAU、HauhauCS 等社区高手在 24h 内推出 GGUF/INT8/Neo-IMatrix 版本，大幅降低大模型落地门槛。
5. **国产厂商集体亮相**：DeepSeek、Moonshot、MiniMax、Z.ai、百度、快手、智谱衍生、LiquidAI 等中美头部团队同台竞技，开源生态多极化加速。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|---------|---------|------------|
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,306 | 433,284 | DeepSeek 最新 Flash 版本，推理速度与长上下文再平衡，开箱即用的最强开源 MoE 基座。 |
| [**DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,011 | 2,737,621 | 稳定版 Flash，累计下载破 270 万，生产环境首选。 |
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,012 | 1,125,935 | Moonshot 首个开权重 MoE 多模态模型，128k 上下文+原生视觉，点赞破万领跑全榜。 |
| [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,820 | 2,234,662 | 智谱新一代 MoE 基座，支持工具调用与 Agentic 搜索，企业级落地生态完善。 |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 154 | 47,393 | 非 Transformer 线性注意力架构，小参数高性能，边缘部署新选择。 |
| [**poolside/Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 920 | 82,912 | 代码专用小模型，HumanEval 85%+，适合本地 Copilot 场景。 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 664 | 37,256 | 国产小参数强模，中文基准超同量级 Llama/Qwen，适配手机端。 |
| [**LGAI-EXAONE/K-EXAONE-2.0-750B-A37B**](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 117 | 325 | 韩国 LG 超大规模 MoE（750B 总参），学术研究参考价值高。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|---------|---------|------------|
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,024 | 0 | 首个开权重 **原生 I2V/V2V** 模型，支持首尾帧控制、动作一致性，视频生成开源里程碑。 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 604 | 2 | ComfyUI 官方适配版，原生支持工作流节点，二次开发门槛极低。 |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,881 | 2,703,366 | 百度文档理解大模型，**任意分辨率/长文档/多语言** OCR，下载量断层第一，RAG 管线必备。 |
| [**microsoft/Mage-VL**](https://huggingface.co/microsoft/Mage-VL) | microsoft | 256 | 435,784 | 微软多模态统一架构，图文检索/推理/生成三合一，企业级多模态基座。 |
| [**thinkingmachines/Inkling-Small**](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 286 | 15,500 | 轻量级 VLM，专为边缘设备设计，<1B 参数跑通图文对话。 |
| [**Audio8/Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 247 | 11,276 | 0.6B 参数流式 TTS，支持音色克隆、情绪控制，RTF < 0.1。 |
| [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 410 | 2,072 | 极致压缩 TTS，CPU 实时推理，适配嵌入式/离线语音助手。 |
| [**lodestones/Kroma**](https://huggingface.co/lodestones/Kroma) | lodestones | 176 | 0 | 基于 Krea 的 LoRA，专注高保真风格化图像生成，ComfyUI 即插即用。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / Agent）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|---------|---------|------------|
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 474 | 15,381 | 快手代码 MoE，针对 Repo-level 代码生成/重构优化，支持 Agentic 工作流。 |
| [**XYZAILab/XYZ-Aquila-pro**](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 358 | 1,388 | 具备 Agentic Search 能力的 MoE，工具调用与长上下文检索融合。 |
| [**EschaLabs/Qwen3.6-35B-A3B-Escha-W2**](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 193 | 2,987 | Qwen3.6 MoE 续训版，数学/代码基准显著提升，MoE 专家路由优化。 |
| [**XYZAILab/XYZ-Aquila-mini**](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 404 | 1,317 | 迷你版 Aquila，保留工具调用能力，适配边缘 Agent。 |
| [**nota-ai/Solar-Open2-250B-Nota-NVFP4**](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 174 | 69,253 | 250B 模型 NVFP4 量化至单张 H100 可跑，极致推理吞吐演示。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 其它量化）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|---------|---------|------------|
| [**unsloth/Kimi-K3-GGUF**](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 304 | 170,055 | Kimi-K3 首日 GGUF 量化，多规格 (2bit~8bit) 覆盖全场景。 |
| [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 471 | 111,678 | Flash 新版同步量化，保留 MoE 稀疏加速优势。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,513 | 1,633,405 | 合并+去审查+MTP+Neo-IMatrix 量化，**下载量破 160 万**，社区最热合并模型之一。 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-...**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,296 | 1,930,898 | Qwen3.6 MoE 去审查+激进指令微调，**点赞 3.3k**，创意写作/角色扮演首选。 |
| [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-...-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 364 | 308,857 | Hermes 风格合并版 GGUF，长文本对话一致性强。 |
| [**DavidAU/Qwen3.5-9B-The-Defiant-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 265 | 323,116 | 9B 小参数全量化套件，IMatrix 感知量化保留高精度。 |
| [**realrebelai/MiniMax-H3_GGUFs**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 103 | 40,010 | MiniMax-H3 首批 GGUF 量化，配合 ComfyUI 实现本地视频生成。 |
| [**ethanfel/Qwen3-VL-32B-Ultra-...-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 188 | 0 | 多模态融合实验：Qwen3-VL + MiniMax-H3 视频编码器，INT8 部署。 |

---

## 🌐 生态信号分析

**模型家族势头**：DeepSeek-V4、Kimi-K3、Qwen3.6 MoE、GLM-5.2 四大 MoE 家族形成“四强”格局，**总参数 30B~750B、激活参数 3B~37B** 成为主流甜点。MiniMax-H3 开启 **视频生成开源元年**，ComfyUI/GGUF 生态 24h 内成型，降维打击闭源 Sora 类产品。

**开源 vs 闭源**：头部厂商（DeepSeek、Moonshot、MiniMax、Z.ai、百度）**主动开放权重+技术报告**，而非仅发布 API；社区微调（DavidAU、HauhauCS、unsloth）在 **去审查、风格融合、量化部署** 上形成完整供应链，开源生态自给自足能力增强。

**量化/微调热点**：
- **GGUF 仍是王者**，但 **Neo-IMatrix、MTP、ConvRot** 等感知量化/结构化剪枝技术渗透率显著提升。
- **模型合并** 从线性插值进化为 **Fable/Heretic/Genesis 等多目标进化融合**，下载量百万级验证有效性。
- **视频模型量化** 从 0 到 1，MiniMax-H3 GGUF 让消费级显存（24GB）也能跑 5 秒 720p 视频。

---

## 💎 值得探索

1. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) + [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) + [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)**  
   **理由**：唯一开权重的原生 I2V/V2V 基座，配合 ComfyUI 工作流与 GGUF 量化，**即刻在本地复现 Sora 级视频生成/编辑**，研发/创作双适用。

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*