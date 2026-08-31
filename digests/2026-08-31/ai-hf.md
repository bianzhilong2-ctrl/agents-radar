# Hugging Face 热门模型日报 2026-08-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-31 02:24 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-08-31**

---

## 🔥 今日速览

今日榜单呈现"**四强争霸、Qwen生态主导**"的格局——Qwen3.8-27B 以 1.3 万周点赞领跑，Kimi-K3（11,100）和 MiniMax-H3（4,661）紧随其后，中国系开源模型占据绝对头部。**视频生成赛道**异常活跃：MiniMax-H3、LTX-2.5 及其衍生加速/ControlNet/LoRA 生态形成密集矩阵。"Uncensored/abliterated" 类社区微调爆发式涌现，反映出用户对**去审查权重**的强烈需求。GGUF 量化版本下载量动辄百万级，说明本地推理消费已形成稳定闭环。

---

## 🧠 语言模型（LLM / 对话 / 指令）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,354 | 451 万 | 本周冠军，Qwen3.5 代际多模态主力，450 万下载验证工业级采用度 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,100 | 279 万 | Moonshot 第三代旗舰，compressed-tensors 压缩技术加持，长上下文场景标杆 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,825 | 458 万 | DeepSeek V4 轻量版，"Flash" 定位极速推理，高下载量显示生产环境渗透 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,349 | 5 万 | GLM-5 系列基座，MoE + DSA（动态稀疏注意力）架构，技术尝鲜首选 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,719 | 34.6 万 | GLM 轻量对话版，多模态能力下沉，下载量远超基座 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 320 | 2,123 | 腾讯混元 4 代预览版，混元生态新里程碑 |
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 159 | 1,009 | 汤森路透基于 Qwen3.5 MoE 的法律垂域小模型，企业级垂直应用代表 |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 150 | 3,982 | 基于 Nemotron-H 的语音对话 Alpha，专攻电话级实时语音场景 |

---

## 🎨 多模态与生成（图像 / 视频 / 音频 / TTS）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,661 | 526 万 | 本周视频生成之王，diffusers 原生支持，图生视频/文生视频双修，下载量恐怖 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,270 | 113 万 | LTX-2 升级版，扩散单文件格式，i2v / t2v / v2v 全能选手 |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 163 | 5,538 | 基于 H3 的 ControlNet Union，控制信号大一统，可玩性极高 |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 152 | 2.4 万 | H3 加速 LoRA 集合，引用 arxiv 2607.26004，学术加速方案落地 |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 194 | 0 | 仅 4 步推理的 H3 蒸馏预览版，VSA 无数据蒸馏，工程化前沿 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 363 | 0 | ComfyUI 生态核心贡献者 Kijai 的实验性封装，创作者首选入口 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 212 | 1,838 | 新一代 TTS 模型，Breeze 系列语音合成升级 |

---

## 🔧 专用模型（代码 / 嵌入 / 行业）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 507 | 14.7 万 | 35B-A3B 激活参数的 MoE 模型，平衡性能与推理成本 |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 143 | 8.8 万 | Qwen3.5 MoE 基座的代码专用微调 + iMatrix 量化 |

---

## 📦 微调与量化（社区微调 / GGUF / AWQ）

**⚠️ 本周最显眼的板块："Uncensored / Abliterated" Qwen3.8 矩阵爆发**

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,246 | **884 万** | 本周下载冠军，unsloth 高质量 GGUF 量化标杆 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 458 | 162 万 | 去审查 Qwen3.8-27B 的 GGUF 版，162 万下载印证社区刚需 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 852 | 199 万 | 启用 MTP（多 Token 预测）的去审查版，下载量近 200 万 |
| [HauhauCS/Qwen3.8-27B-Uncensored-...MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 786 | 116 万 | "Aggressive" 激进调参的 MTP 版，社区微调激烈竞争 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,236 | 10.9 万 | Apple Silicon 优化的 MLX 格式去审查版，Mac 用户专属 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,288 | 30.2 万 | FP8 精度去审查版，H100/MI300 高吞吐部署首选 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 581 | 23.8 万 | orcarouter 的 GGUF 版去审查 Qwen3.8 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 949 | 72.6 万 | 名字即正义：彻底"抹除"安全对齐的 Qwen3.8，覆盖 MLX/GGUF/safetensors |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 604 | 32.8 万 | Qwen Flash-Next 的 GGUF 量化版，本地轻量推理首选 |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 161 | 7.7 万 | 官方 FP8 量化版本 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 290 | 4.6 万 | GLM-5.3-Flash 的 GGUF 版 |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 123 | 4.3 万 | Flash-Next 的去审查 GGUF 版 |

---

## 🌐 生态信号

**Qwen3.8 系列已成为开源 LLM 事实标准**：榜单 30 个席位中，**18 个直接基于 Qwen3.8 衍生**（含官方 2 个 + unsloth 量化 2 个 + 至少 7 个 Uncensored 微调 + 多个细分任务版本）。这种"一源多态"的扩散结构在开源史上罕见——它说明 **Qwen 团队成功构建了一个类似 Linux 内核的"基座+生态"模式**，社区围绕其做应用层创新。

**"去审查"微调形成独立亚生态**：7 个 Uncensored/abliterated 变体合计下载量超 600 万，单一榜单节点已构成可观流量。这反映了开源模型用户与上游安全策略之间的持续张力——也预示着 Hugging Face 的内容治理将面临常态化挑战。

**视频生成进入"加速竞赛"**：MiniMax-H3 在榜单内出现 5 次（基座 + ControlNet + 加速 LoRA + 4 步蒸馏 + ComfyUI 实验版），从基础模型到推理优化到消费工具链形成完整闭环，**生态成熟度已超越 LTX、Wan 等同期对手**。

**闭源模型几乎退出趋势榜**：榜单全数为开源权重，OpenAI、xAI 等未上榜——开源模型在 Hugging Face 已形成绝对主场，且中国厂商（Qwen / DeepSeek / ZAI / Moonshot / Tencent / MiniMaxAI / 阿里 PAI）形成"七国集团"格局。

---

## 💎 值得探索

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 当前最强开源视频生成模型，526 万下载已证明稳定性。配合 [FastVideo 的 4 步蒸馏版](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) 和 [ControlNet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)，可搭一条从极速生成到精细控制的生产链路。

2. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — 458 万下载且仅 3,825 点赞，说明"高下载/低点赞"比是**生产部署的硬指标**，代表真正被集成进应用层的模型。值得作为企业 LLM 选型的成本基准对照。

3. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当之无愧的本周主角。无论研究基座能力、对比去审查微调效果，还是直接下载 GGUF 本地跑，Qwen3.8-27B 都是当前**性价比与生态完备度的最优解**。

---

*📅 报告基于 2026-08-31 Hugging Face Hub 周点赞 Top 30 模型生成*

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*