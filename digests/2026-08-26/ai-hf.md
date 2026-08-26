# Hugging Face 热门模型日报 2026-08-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-26 00:42 UTC

---

# Hugging Face 热门模型日报
**2026-08-26**

---

## 一、今日速览

本周 Hugging Face 趋势榜被 **Qwen3.8-27B 生态全面统治**，官方原版以 12,708 点赞稳居榜首，催生出至少 12 个衍生变体（GGUF 量化、Abliterated、Uncensored、Speculative Decoding 等），形成"一模型、多分支"的开源典型范式。**MoonshotAI/Kimi-K3**（10,996 点赞）紧随其后，多模态对话能力继续引领长上下文赛道。**DeepSeek-V4 系列**（Flash + Pro）双双进榜，反映开源权重模型对生产部署的吸引力持续走高。视频生成方面 **MiniMax-H3**（4,457 点赞）与 **LTX-2.5** 形成正面竞争，文本到音乐赛道则由 **MiniMaxAI/MiniMax-Music3** 抢占首位。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

**1. [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
- 作者：Qwen ｜ 点赞 12,708 ｜ 下载 2,945,415
- 本周榜首的图像-文本多模态基座模型，是所有 Qwen3.8 衍生版的源头，单周下载量近 300 万次。

**2. [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
- 作者：moonshotai ｜ 点赞 10,996 ｜ 下载 2,865,293
- Kimi 系列第三代多模态模型，定位长上下文与高质量对话，是榜单中唯一能与 Qwen3.8 在点赞数上抗衡的中文系模型。

**3. [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
- 作者：deepseek-ai ｜ 点赞 3,714 ｜ 下载 3,528,373
- 强调推理速度的 Flash 变体，下载量已超过 350 万次，是企业级部署的高性价比选择。

**4. [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)**
- 作者：deepseek-ai ｜ 点赞 758 ｜ 下载 74,707
- Pro 版本主打更强能力与复杂任务，点赞数与 Flash 差距明显，反映"性价比"在开源社区的权重更高。

**5. [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)**
- 作者：superwhisper ｜ 点赞 238 ｜ 下载 3,474
- 轻量级 ASR 语音识别模型，基于 Qwen3 架构，是榜单中少数专注语音转文字的 LLM 类项目。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

**6. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
- 作者：MiniMaxAI ｜ 点赞 4,457 ｜ 下载 4,639,786
- 文本/图像到视频的多模态生成模型，下载量高达 460 万次，是当前开源视频生成最受欢迎的项目之一。

**7. [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
- 作者：Lightricks ｜ 点赞 1,799 ｜ 下载 833,845
- 支持图生视频、文生视频、视频到视频的扩散模型，LTX 系列的最新迭代，社区关注度持续上升。

**8. [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
- 作者：MiniMaxAI ｜ 点赞 1,245 ｜ 下载 18,705
- 文本到音乐生成模型，diffusers 生态内最受欢迎的音乐生成项目之一，填补了开源音乐生成的空白。

**9. [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)**
- 作者：sensenova ｜ 点赞 152 ｜ 下载 2,682
- 任意模态到任意模态（any-to-any）的原生多模态模型，采用 Mixture of Tokens 架构，定位前沿多模态研究。

**10. [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)**
- 作者：Audio8 ｜ 点赞 156 ｜ 下载 3,640
- 极小型（0.1B）文本转语音预览版，定位轻量级 TTS 场景与快速实验。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

> 今日 Top 30 中专用任务模型占比较低，仅 [s1-mini](https://huggingface.co/superwhisper/s1-mini) 涉及 ASR 领域。榜单明显向通用 LLM 与多模态倾斜，专用模型可能需在垂直榜单中关注。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

**11. [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
- 作者：unsloth ｜ 点赞 2,915 ｜ 下载 7,334,695
- 下载量 733 万次，是榜单中下载量最高的模型，Unsloth 团队的高质量 GGUF 量化是消费级硬件部署的事实标准。

**12. [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)**
- 作者：JonathanColetti ｜ 点赞 721 ｜ 下载 1,525,645
- 移除对齐限制的 GGUF 版本，下载量 150 万次以上，反映社区对"无审查"模型的稳定需求。

**13. [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)**
- 作者：huihui-ai ｜ 点赞 357 ｜ 下载 1,230,831
- 长期活跃的 abliterated 量化项目，下载量超 123 万次，Huihui 系列是 abliteration 技术的代表性作品。

**14. [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)**
- 作者：orcarouter ｜ 点赞 1,148 ｜ 下载 249,744
- 提供 FP8 精度的非审查版本，适合显存受限但追求质量的部署场景。

**15. [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)**
- 作者：orcarouter ｜ 点赞 1,095 ｜ 下载 68,855
- 针对 Apple Silicon（MLX 框架）优化的版本，Mac 用户本地部署的首选。

**16. [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)**
- 作者：OBLITERATUS ｜ 点赞 749 ｜ 下载 389,747
- 同时提供 MLX、Safetensors、GGUF 三种格式，是 abliteration 工作流的一次性打包方案。

**17. [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF)**
- 作者：0bserverx ｜ 点赞 275 ｜ 下载 735,183
- 使用 Heretic 工具（自动化 abliteration）处理的版本，下载量 73 万次，代表 abliteration 工具链的成熟。

**18. [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**
- 作者：HauhauCS ｜ 点赞 623 ｜ 下载 832,185
- 多 Token 预测（MTP）优化版本，下载量 83 万次，是"激进采样"实验派用户的热门选择。

**19. [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)**
- 作者：z-lab ｜ 点赞 227 ｜ 下载 64,984
- DFlash2 推测解码（Speculative Decoding）实现，可显著加速推理。

**20. [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2)**
- 作者：incoai ｜ 点赞 179 ｜ 下载 105,786
- 同样基于 DFlash2 的推测解码实现，下载量更高，反映推理加速是社区关注焦点。

**21. [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)**
- 作者：DavidAU ｜ 点赞 240 ｜ 下载 221,918
- 应用 "Cold Fusion GAIN" 训练方法的实验性微调，结合 MTP 优化，是 DavidAU 复杂训练流水线的代表作。

**22. [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2)**
- 作者：EschaLabs ｜ 点赞 126 ｜ 下载 2,319
- 极限 2-bit 量化实验，挑战超低精度部署的极限，主要用于研究价值。

**23. [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)**
- 作者：ornith-ai ｜ 点赞 419 ｜ 下载 70,158
- 基于 Qwen3.5 MoE 架构的 35B 稀疏激活模型（3B 激活参数），是榜单中少有的非 27B 规格主力变体。

**24. [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)**
- 作者：ornith-ai ｜ 点赞 297 ｜ 下载 1,156,903
- 上述模型的 GGUF 量化版，下载量超 115 万次，MoE 模型的量化部署需求旺盛。

**25. [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)**
- 作者：ornith-ai ｜ 点赞 216 ｜ 下载 98,323
- 同一系列的小规格版本，9B 密度模型，适合低资源设备。

**26. [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF)**
- 作者：ornith-ai ｜ 点赞 201 ｜ 下载 1,144,037
- 9B 的 GGUF 量化版，下载量 114 万次，是入门级本地部署的热门选择。

**27. [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
- 作者：froggeric ｜ 点赞 1,468 ｜ 下载 0
- 纯模板项目（无模型权重），通过 1,468 点赞说明 Qwen3.5 系列的 chat template 存在被广泛关注的兼容性问题。

**28. [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)**
- 作者：peculiar-ragdoll ｜ 点赞 244 ｜ 下载 0
- 同样是 Jinja 模板项目，证明 chat template 兼容性已成为 Qwen 生态的痛点之一。

**29. [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)**
- 作者：orcarouter ｜ 点赞 452 ｜ 下载 154,225
- 又一份 GGUF 非审查版本，作者 orcarouter 在榜中提供了 MLX、FP8、GGUF、原始 safetensors 完整矩阵。

**30. [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)**
- 作者：orcarouter ｜ 点赞 183 ｜ 下载 15,341
- 同系列的完整精度版本，权重保留最完整。

---

## 三、生态信号

**Qwen3.8-27B 已成为 2026 年 8 月的"现象级基座"**：原版占榜 30 个席位中至少 12 个，衍生态覆盖 GGUF 量化、MLX 优化、FP8、2-bit、Abliterated、MTP、Speculative Decoding 等几乎所有主流下游技术栈。这种"一原版、多分支"的爆发反映了三大趋势：

1. **强基座 + 强社区** 的飞轮效应——Qwen 官方迭代节奏快，社区微调与量化生态迅速形成正反馈。
2. **Abliteration 已成为标准微调动作**——至少 5 个相关模型（Huihui、OBLITERATUS、orcarouter、0bserverx、DavidAU）入榜，且下载量普遍在数十万至百万级别，说明"去对齐"需求有稳定用户群。
3. **量化生态高度成熟**——Unsloth GGUF、MLX、FP8、2-bit 同步推进，单一模型最多可被拆出 6 种消费级部署形态，开源权重的"最后一公里"问题基本被解决。

值得关注的反差：**DeepSeek-V4-Flash（3,714 点赞、350 万下载）** 明显跑赢 **Pro 版（758 点赞、7 万下载）**，印证"开源场景下速度优先于能力"的部署哲学。中文系模型（Kimi-K3、Qwen3.8、MiniMax 系列、SenseNova）在榜单中合计占比超 60%，中国开源生态在 Hugging Face 的影响力已达历史高位。

---

## 四、值得探索

**🥇 [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)**
推测解码（Speculative Decoding）是 2026 年 LLM 推理加速的最热方向之一，DFlash2 在 Qwen3.8 上实现了显著的 token/s 提升，是研究高效推理、实现低成本 API 的关键参考实现。

**🥈 [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
开源音乐生成赛道目前仍由 MiniMax 主导，diffusers 生态原生支持，是少数能"开箱即用"生成可商用音乐片段的项目，适合做 AI 配乐、播客背景音乐等下游应用。

**🥉 [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)**
采用 Mixture of Tokens 的原生 any-to-any 多模态模型，是探索"统一模态架构"的重要前沿实验，8B 规模也使个人研究者有条件进行消融实验。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*