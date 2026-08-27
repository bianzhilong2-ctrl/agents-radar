# Hugging Face 热门模型日报 2026-08-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-27 05:50 UTC

---

# Hugging Face 热门模型日报
**2026-08-27**

---

## 1. 今日速览

Qwen3.8 系列毫无悬念地霸榜，27B 旗舰模型 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 12,933 点赞和超 329 万次下载成为本周最热模型。同期 [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) 强势上榜，与 [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)、[GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) 共同构成中国 LLM 的"四强格局"。多模态方面，[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 视频生成模型以 4505 点赞领跑生成式赛道，"Uncensored/Abliterated"社区微调潮持续火爆——榜单上超过三分之一是 Qwen3.8 的去审查/量化变体。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  - 作者: Qwen ｜ 点赞: 12,933 ｜ 下载: 3,298,569
  - 通义千问新一代 27B 多模态基座，原生支持图像-文本理解，是本周点赞与下载双料冠军，生态影响力极大。

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  - 作者: moonshotai ｜ 点赞: 11,023 ｜ 下载: 2,921,257
  - 月之暗面 K3 多模态模型，采用 compressed-tensors 高效推理，定位长上下文与多模态融合场景。

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
  - 作者: deepseek-ai ｜ 点赞: 3,743 ｜ 下载: 3,857,140
  - DeepSeek V4 轻量版（Flash），主打高吞吐低延迟，0743 时间戳表明这是 7 月底发布的稳定快照，下载量已经相当可观。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)**
  - 作者: zai-org ｜ 点赞: 1,017 ｜ 下载: 0
  - 智谱 GLM-5.3 Flash 版本，今日新发布即冲榜，是榜单中唯一一款"下载量为 0"的高热度新模型，社区期待值极高。

- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)**
  - 作者: ornith-ai ｜ 点赞: 457 ｜ 下载: 83,342
  - 基于 Qwen3.5 MoE 架构的 35B-A3B（激活 3B）稀疏激活模型，主打高效推理，MIT 开源。

- **[ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)**
  - 作者: ornith-ai ｜ 点赞: 229 ｜ 下载: 119,053
  - 同系列密集 9B 模型，是 MoE 版本的轻量替代，适合本地部署。

- **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)**
  - 作者: superwhisper ｜ 点赞: 252 ｜ 下载: 3,921
  - 基于 Qwen3 的小尺寸 ASR + 文本生成联合模型，专攻语音转写场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  - 作者: MiniMaxAI ｜ 点赞: 4,505 ｜ 下载: 4,793,098
  - 本周最热多模态生成模型，支持文本到视频、图像到视频，下载量近 480 万，是当下开源视频生成的标杆。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  - 作者: Lightricks ｜ 点赞: 1,877 ｜ 下载: 894,094
  - 商业级 LTX 视频模型升级版，覆盖 image-to-video / text-to-video / video-to-video 全流程，单文件 diffusion 部署友好。

- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
  - 作者: MiniMaxAI ｜ 点赞: 1,265 ｜ 下载: 19,501
  - 文本到音乐生成模型，基于 diffusers，支持多风格音乐创作。

- **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)**
  - 作者: sensenova ｜ 点赞: 173 ｜ 下载: 3,264
  - 商汤"日日新"U1.5，8B 参数 any-to-any 原生多模态模型，采用 Mixture-of-Tokens 架构。

- **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)**
  - 作者: alibaba-pai ｜ 点赞: 141 ｜ 下载: 3,148
  - 基于 H3 的 ControlNet 视频控制模型，支持结构化条件（姿态、深度、边缘）下的视频生成。

- **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)**
  - 作者: Audio8 ｜ 点赞: 176 ｜ 下载: 4,257
  - 极小（0.1B）TTS 预览模型，基于 arktts 架构，主打低资源场景语音合成。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- 本日榜中无强相关专用模型上榜（多数专用能力已被通用大模型内化）。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  - 作者: unsloth ｜ 点赞: 3,016 ｜ 下载: 7,638,591
  - Qwen3.8-27B 的 GGUF 量化版本，下载量 763 万，是社区本地部署的事实标准。

- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)**
  - 作者: JonathanColetti ｜ 点赞: 757 ｜ 下载: 1,620,754
  - 去审查 GGUF 版本，引入 MTP（Multi-Token Prediction）优化，下载量超 162 万。

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**
  - 作者: HauhauCS ｜ 点赞: 666 ｜ 下载: 911,795
  - 更激进的去审查 + MTP 多 token 预测 GGUF，面向创意写作场景。

- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)**
  - 作者: orcarouter ｜ 点赞: 1,145 ｜ 下载: 79,395
  - Apple Silicon 专用 MLX 版本，是 Mac 用户的首选去审查模型。

- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)**
  - 作者: orcarouter ｜ 点赞: 1,182 ｜ 下载: 269,805
  - FP8 精度去审查版本，平衡显存占用与质量，部署门槛更低。

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)**
  - 作者: huihui-ai ｜ 点赞: 378 ｜ 下载: 1,318,749
  - huihui-ai 老牌去审查系列的 Qwen3.8 升级版，社区口碑稳定。

- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)**
  - 作者: OBLITERATUS ｜ 点赞: 817 ｜ 下载: 468,746
  - 提供 MLX / safetensors / GGUF 三种格式的去审查变体，多端部署覆盖全面。

- **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)**
  - 作者: DavidAU ｜ 点赞: 255 ｜ 下载: 232,525
  - 采用 DavidAU 招牌"COLD-FUSION GAIN"训练法叠加 MTP 的极限微调版本。

- **[EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2)**
  - 作者: EschaLabs ｜ 点赞: 134 ｜ 下载: 2,481
  - 罕见的 2-bit 极致量化实验版本，探索超低精度部署边界。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** · **[unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)**
  - unsloth 同步推出 Qwen3.8-Flash-Next 与 GLM-5.3-Flash 的 GGUF 量化，跟进速度一如既往。

- **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** · **[ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF)**
  - ornith-ai 同步发布两个规格的 GGUF 量化版，MIT 协议，端点兼容。

- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** · **[orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)**
  - orcarouter 补齐了 GGUF 与 transformers 两种格式的官方权重。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric ｜ 点赞: 1,489 ｜ 下载: 0
  - 社区维护的 Qwen 聊天模板修复集合（jinja），解决了官方模板在多轮对话中的诸多问题，点赞量高但无下载属"纯参考"资源。

---

## 3. 生态信号

本周榜单呈现出**「Qwen3.8 一家独大 + 国产 LLM 集体进位」**的鲜明格局：Top 30 中有 16 个条目与 Qwen3.8 直接相关（官方 2 个 + 社区衍生 14 个），其中 Uncensored / Abliterated 系列又占据 8 席，说明去审查微调已从早期极客玩法演化为成熟细分赛道。**Qwen、DeepSeek、Kimi、GLM、SenseNova** 五大国产系列同框亮相，标志中国开源 LLM 正式进入"多极对抗"阶段。**量化生态方面**，unsloth 再次展现"24 小时跟进"的恐怖效率，Qwen3.8-Flash-Next 与 GLM-5.3-Flash 发布当天 GGUF 版本即同步上线；MLX、FP8、2-bit 等多精度矩阵说明社区正在向 Apple Silicon 与极致低显存两端同时下探。**多模态侧**，MiniMax-H3 与 LTX-2.5 共同推动开源视频生成进入"准商用"质量层级，配套 ControlNet 也快速跟进。值得注意的是 [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) 与 [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) 均主打"Flash"轻量定位，2026 下半年的竞争焦点已从"拼参数"转向"拼每 token 成本"。

---

## 4. 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当前开源多模态 LLM 的事实标杆，12933 点赞 + 329 万下载已证明其稳定性，建议作为基线评估一切新模型的参照系。
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 若你关注 AI 视频生成，这是目前下载量最大、社区最活跃的开源选择；搭配 [MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) 可解锁可控视频生成工作流。
3. **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** — 新发布即冲榜的国产新锐，下载量为 0 反而说明你有机会在第一时间实测并形成对比观察报告，对研究者尤其有价值。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*