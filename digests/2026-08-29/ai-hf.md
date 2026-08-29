# Hugging Face 热门模型日报 2026-08-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-29 04:50 UTC

---

# 📊 Hugging Face 热门模型日报｜2026-08-29

---

## 🚀 今日速览

1. **Qwen 3.8 系列霸榜**：Qwen 发布新一代 `Qwen3.8-Flash-Next` 与旗舰 `Qwen3.8-27B`，前者主打极速多模态推理，后者以 345 万周下载量稳坐开源 LLM 下载王，社区衍生版（GGUF、Uncensored、MLX、FP8）占据 Top 30 超半数席位。
2. **视频生成迎来「MiniMax 时刻」**：`MiniMax-H3` 以 458 万下载、近 4.6k 点赞领跑视频生成，阿里巴巴 PAI 同步推出 ControlNet Union 与加速 LoRA，生态闭环初现。
3. **国产 MoE 新贵集中亮相**：GLM-5.3 系列、DeepSeek-V4-Flash、Kimi-K3、Hunyuan-V4 预览版同周发布，MoE + 长上下文 + 多模态成为中国厂商标配竞技场。
4. **量化与部署工具链成熟**：Unsloth、OrcaRouter、HauhauCS 等社区主体同步推出 GGUF/FP8/MLX 量化包，下载量动辄百万级，「开箱即用」成开源分发新常态。
5. **非生成类模型破圈**：Thomson Reuters 发布法律垂类小模型、Breeze-TTS-2 与 MiniMax-Music3 推进语音/音乐生成，垂直领域开源加速。

---

## 🏷️ 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|-----|-----|------------|
| **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 13,160 | 3,457,687 | Qwen 3.8 旗舰密集模型，原生支持 128K 上下文与多模态，开源社区当周下载/点赞双冠王。 |
| **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** | zai-org | 1,160 | 0 | 智谱新一代 MoE 基座，DSA 稀疏注意力机制，主打超长上下文与工具调用。 |
| **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** | zai-org | 1,526 | 34 | GLM-5.3 蒸馏加速版，推理延迟大幅降低，适配实时对话场景。 |
| **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | deepseek-ai | 3,790 | 3,959,575 | DeepSeek V4 闪电版，MTP 多 token 预测 + FP8 训练，代码/数学推理性能接近满血版。 |
| **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 11,066 | 2,675,145 | Moonshot 首个开源 MoE 大模型，压缩张量格式部署友好，长文本理解表现亮眼。 |
| **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** | tencent | 249 | 0 | 腾讯混元 V4 预览版，MoE 架构，侧重中文长文本与多轮对话。 |
| **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** | ornith-ai | 486 | 88,102 | 社区基于 Qwen3.5 MoE 继续预训练，激活参数仅 3B，性价比极高。 |
| **[pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)** | pipecat-ai | 120 | 64 | 基于 Nemotron-H 的语音对话模型，面向实时语音 Agent 场景。 |
| **[thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)** | thomsonreuters | 145 | 349 | 罗伊特法律垂类小模型，Qwen3.5 MoE 微调，展示专业领域开源趋势。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|-----|-----|------------|
| **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 4,587 | 4,848,404 | 当周视频生成王者，原生支持文生视频/图生视频/视频编辑，下载量近 500 万。 |
| **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 2,030 | 912,729 | 单文件 Diffusion 视频模型，部署极简，适合消费级显存快速推理。 |
| **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** | MiniMaxAI | 1,289 | 19,726 | MiniMax 首个开源音乐生成模型，Diffusers 原生支持，文本到高保真音乐。 |
| **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 4,179 | 4,810 | Qwen 4 实验线极速多模态版，Image-Text-to-Text 推理延迟大幅优化。 |
| **[Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)** | Qwen | 148 | 2,219 | Flash-Next FP8 量化官方版，显存占用减半，精度损失可控。 |
| **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)** | alibaba-pai | 159 | 3,344 | MiniMax-H3 官方 ControlNet Union，统一姿态/深度/边缘等多条件控制。 |
| **[alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** | alibaba-pai | 136 | 609 | MiniMax-H3 推理加速 LoRA 合集，单步/少步蒸馏，显著提升生成速度。 |
| **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** | BreezeBlue | 167 | 240 | 中文自然语音合成 SOTA，流式推理延迟 < 200ms，适配实时通话。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 垂直领域）

> 本期榜单中垂直专用模型较少，主要集中在上述语言模型的代码/数学能力增强，以及 Thomson-1.0-Small 法律场景。暂无独立代码/嵌入模型入围 Top 30。

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / MLX / FP8）

| 模型 | 作者 | ❤️ | ⬇️ | 一句话解读 |
|------|------|-----|-----|------------|
| **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 3,152 | 7,758,790 | Unsloth 官方 GGUF 全量化套装（2bit~8bit），单文件部署，下载量破 770 万。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** | orcarouter | 530 | 188,460 | 去安全对齐版 GGUF，保留原模型推理能力，满足研究/角色扮演需求。 |
| **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** | JonathanColetti | 806 | 1,666,948 | 含 MTP 模块的 Uncensored GGUF，长文本生成连贯性更强。 |
| **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** | HauhauCS | 729 | 938,219 | 激进 MTP + 多模态视觉保留的 GGUF，边缘侧多模态部署首选。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** | orcarouter | 1,190 | 83,352 | Apple Silicon 原生 MLX 格式，Metal 加速，Mac 本地推理零配置。 |
| **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** | orcarouter | 1,236 | 273,577 | FP8 动态量化版，H100/A100 推理吞吐提升 2×，精度几乎无损。 |
| **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** | OBLITERATUS | 883 | 509,270 | Abliteration 手法移除拒答方向，同时提供 MLX/Safetensors/GGUF 三格式。 |
| **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** | huihui-ai | 425 | 1,355,482 | 社区知名 Abliterated 版本，GGUF 多量化等级，下载破 135 万。 |
| **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** | ornith-ai | 333 | 1,469,059 | MoE 模型 GGUF 量化稀有案例，MIT 许可，商用友好。 |
| **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)** | unsloth | 250 | 0 | GLM-5.3-Flash 首发即跟进 GGUF，填补国产 MoE 量化空白。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 1,511 | 0 | 修复 Qwen 系列 Jinja 聊天模板的工具包，解决工具调用/多轮对话格式错乱。 |

---

## 📈 生态信号（趋势深度解读）

**模型家族势头**：**Qwen 3.8** 以「旗舰+极速+实验线」三线并行，配合社区全量化/去审查/模板修复生态，形成「官方发布 → 社区秒级适配 → 百万级分发」的飞轮效应；**MiniMax-H3** 则以「基座 + ControlNet + 加速 LoRA」三件套确立视频生成开源标准；**国产 MoE 四巨头**（GLM-5.3、DeepSeek-V4、Kimi-K3、Hunyuan-V4）同周亮相，标志着中国开源正式进入 **MoE + 长上下文 + 多模态** 的「标配时代」。

**开源 vs 闭源**：头部厂商（阿里、智谱、深度求索、月之暗面、MiniMax、腾讯）均选择 **Apache-2.0 / MIT / 自定义宽松协议** 直接放权重，闭源 API 仅作为商业化补充；专有数据厂商（Thomson Reuters）亦开始开源垂类小模型，**「开源权重成企业技术宣发标配」**。

**量化与微调活跃度**：Unsloth、OrcaRouter、HauhauCS、JonathanColetti 等社区主体在基座发布 **24–48 小时内** 推出 GGUF/FP8/MLX/Uncensored/Abliterated 全矩阵，**量化不再是后处理，而是发布日必备交付物**；Abliteration 等「无损去对齐」技术成为社区共识，替代传统全参数微调。

---

## 💎 值得探索（Top Picks）

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   **理由**：当前开源视频生成 **综合体验最佳**——原生支持文生/图生/视频编辑，配套 ControlNet Union 与加速 LoRA 生态完备，单张 24GB 显存即可跑通全流程，适合快速原型与内容生产落地。

2. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Q

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*