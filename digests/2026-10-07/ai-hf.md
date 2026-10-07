# Hugging Face 热门模型日报 2026-10-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-07 03:22 UTC

---

# 📋 Hugging Face 热门模型日报 | 2026-10-07

---

## 🚀 今日速览

- **Qwen 3.8 系列霸榜**：官方发布的 `Qwen3.8-27B` 与 `Qwen3.8-Flash-Next` 双双冲入周点赞 Top 5，合计点赞 2.3 万+，确立了当前开源多模态 SOTA 的新基准。  
- **视频生成迎来“Lightricks 时刻”**：`LTX-2.5` 以 6.7k 点赞、167 万下载领跑 image-to-video 赛道，标志着开源视频模型从“可用”迈向“生产级”。  
- **量化生态全面向 GGUF/GSQ-RCO 收敛**：ISTA-DASLab、DavidAU、orcarouter 等社区大佬同天推出 10+ 个 Qwen3.8 量化变体，**2-bit/3-bit 混合精度**成为部署端主流选择。  
- **企业级嵌入与决策模型崛起**：Google `embeddinggemma-2`、Aleph-Alpha `Kolibri-1 (MoE)`、convaiinnovations `laya` 等走向**检索增强、校准决策**等垂直落地场景。  
- **“去审查/角色扮演”分支持续狂欢**：Uncensored、Heretic、Cold-Fusion 等微调版本下载量破百万，显示社区对**模型人格与安全边界**的探索仍处高潮。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,127 | 6,768,060 | Qwen 3.8 旗舰 27B 多模态基座，原生支持图文对话、工具调用，开源权重下的综合性能新天花板。 |
| [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,991 | 1,589,145 | 面向低延迟推理的蒸馏版，保留 90%+ 性能、推理速度提升 2-3×，适合实时交互场景。 |
| [**deepseek-ai/DeepSeek-V4.1-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,190 | 1,160,332 | DeepSeek 最新 MoE 闪电版，多模态对齐强、上下文窗口大，代理任务表现亮眼。 |
| [**Aleph-Alpha/Kolibri-1**](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 723 | 4,138 | 德企打造的 MoE 推理模型，主打欧盟合规、长链式推理，企业级 RAG 场景首选。 |
| [**Venastine-Research/Xing4.0-29B-A4B-GGUF**](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 518 | 30,585 | 国产 MoE 4.0 量化版，激活参数仅 4B、性能对标 27B Dense，边缘部署性价比极高。 |
| [**Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw**](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 272 | 1,660 | Z.ai GLM-5.3 去审查 + EXL3 3.0bpw 量化，显存极低仍保留强中文推理能力。 |
| [**orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 434 | 18,114 | 面向网络安全/代码审计的领域微调，Uncensored 版便于红队测试与漏洞挖掘。 |
| [**DavidAU/Qwen3.8-27B-TURBO-...-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,512 | 2,125,779 | 社区“厨神”融合 8+ 微调风格的终极合集，MTP 加速+Uncensored，角色扮演/创意写作顶流。 |
| [**jialinyyzz/humanizer**](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 406 | 15,134 | 专门将 AI 文本“洗白”为人类风格的微调模型，绕过检测器、内容合规化利器。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,686 | 1,679,035 | 当前开源视频生成 SOTA：支持 I2V/T2V/V2V，单文件 Diffusion、ComfyUI 原生，商业级画质与一致性。 |
| [**Qwen/Qwen-Image-2.1**](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,048 | 102,510 | Qwen 官方图像生成/编辑基座，原生中文提示词理解、指令编辑能力强，Diffusers 生态友好。 |
| [**abenzerps/Qwen-Image-2.1-Uncensored-GGUF**](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,448 | 1,721,760 | 去安全过滤 + GGUF 量化，CPU/苹果芯也能跑高分辨率生成，ComfyUI-GGUF 一键部署。 |
| [**Viggle/Qwen-Image-2.1-viggle-turbo**](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 640 | 302,425 | 蒸馏加速版，步数减半画质微降，适合实时交互式图像编辑工作流。 |
| [**Alissonerdx/BFS-Best-Face-Swap**](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,254 | 219,575 | 基于 Qwen-Image-2.1 的 LoRA 换脸专用模型，身份保真度高、伪影少，影视后期常驻。 |
| [**pablodawson/MiniMax-H3-360-Orbit-LoRA**](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 231 | 8,745 | MiniMax H3 视频模型的首帧/尾帧控制 LoRA，实现 360° 环绕镜头生成。 |
| [**FermionResearch/Phonon-2**](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 262 | 3,339 | 面向 Apple Silicon 优化的 ASR 模型，MLX 原生、实时因子 <0.3，离线语音转写首选。 |
| [**nvidia/Nemotron-3-Diarization**](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 730 | 58,703 | 企业级会议场景的说话人分离，支持长音频流式处理，NeMo 生态开箱即用。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入 / 决策）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [**google/embeddinggemma-2**](https://huggingface.co/google/embeddinggemma-2) | google | 553 | 364 | Gemma 2 衍生的高性能嵌入模型，MTEB 榜首级、矩阵乘法优化，RAG 检索核心组件。 |
| [**convaiinnovations/laya**](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,293 | 20,386 | 校准决策分类器：输出可信度校准后的概率，适合医疗/金融等高风险自动化决策链路。 |
| [**autotrust/GEV-26B-Decide**](https://huggingface.co/autotrust/GEV-26B-Decide) | autotrust | 740 | 854,574 | 基于 Gemma 4 的“系统一”快速决策头，毫秒级二分类/多标签路由，推理网关必备。 |
| [**autotrust/JEV-27B-VL**](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 993 | 1,525,286 | 面向自动驾驶/机器人的视觉语言决策模型，端到端感知-规划一体化。 |
| [**PSRben/VisionHOPE**](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 440 | 1,749 | 新型图像分类骨干（ArXiv 2609.33325），参数量小、对抗鲁棒性强，边缘视觉部署候选。 |
| [**Contrastive-LM/CLM-v0.1-8B**](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 744 | 3,904 | 对比学习训练的重排序/验证器，RAG 召回二阶段精排提升显著。 |
| [**Cloudflare/clef**](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,700 | 7,255 | 边缘侧轻量多模态模型（Qwen3.5 衍生），专为 Workers AI 部署优化，冷启动 <100ms。 |
| [**Cloudflare/clef-flash**](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 608 | 10,638 | Clef 的进一步蒸馏版，面向实时边缘推理的极致压缩。 |

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / 其它量化）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [**ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 658 | 2,709,781 | **GSQ (Group-wise Scalar Quantization) + RCO (Row-Column Outlier) 混合精度**，2.5bpw 无损、推理加速 40%。 |
| [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,007 | 1,589,314 | 旗舰 27B 的同技术栈量化，单张 24GB 显存即可跑满血多模态。 |
| [**ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 324 | 478,633 | 针对代码任务剪枝+量化的专用版，HumanEval +12% 且体积减半。 |
| [**prism-ml/Ternary-Bonsai-2-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,497 | 4,193,836 | **三元量化 (2-bit) 极限压缩**，仅 6.8 GB、CPU 推理 8 tok/s，树莓派 5 也能跑 27B。 |
| [**ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 658 | 2,709,781 | Flash-Next 版的 GSQ-RCO 量化，延迟敏感型应用最优解。 |

---

## 🌐 生态信号

**模型家族势头**：**Qwen 3.8** 已成事实上的“开源多模态 Linux”，官方基座+社区量化/微调形成完整生态闭环；**DeepSeek V4.1** 与 **Gemma 4** 衍生模型紧随其后，MoE 架构成主流。**视频生成**赛道由 Lightricks、MiniMax 等商业团队开源领跑，社区 LoRA 微调生态初具规模。

**开源 vs 闭源**：头部实验室（

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*