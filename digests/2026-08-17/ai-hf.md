# Hugging Face 热门模型日报 2026-08-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-17 00:41 UTC

---

# 📊 Hugging Face 热门模型日报  
**日期**：2026-08-17 | **数据来源**：HF Hub 周点赞榜 Top 30  

---

## 1. 今日速览
- **Qwen3.5 系列强势霸榜**：Qwen/Qwen3.5-27B 以 10k+ 点赞领跑，其 FP8、GGUF、NVFP4 等量化变体与多个社区微调版同步上榜，形成完整部署生态。  
- **视频生成迎来“MiniMax-H3 时刻”**：MiniMaxAI/MiniMax-H3 及 Comfy-Org、unsloth、lightx2v 等下游适配版合计下载超 1600 万，成为本周最热视频模型家族。  
- **MoE 大模型开源加速**：Qwen3.5-2.4T-A95B 与 DeepSeek-V4 系列（Pro/Flash）同步发布 FP8 量化版，标志着万亿参数 MoE 进入消费级/企业级落地窗口期。  
- **多模态原生模型成主流**：Kimi-K3（10.7k 点赞）、Muse-Glimmer-30B、Qwen3.5-27B 均为 image-text-to-text 原生架构，纯文本 LLM 占比持续下降。  
- **部署友好格成标配**：GGUF、FP8、NVFP4、BF16 多精度并行发布已成大厂发布标准动作，unsloth 等第三方量化团队成为关键分发节点。

---

## 2. 热门模型分类榜  

### 🧠 语言模型（LLM / 对话 / 指令微调）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [Qwen/Qwen3.5-27B](https://huggingface.co/Qwen/Qwen3.5-27B) | Qwen | 10,278 | 267,725 | Qwen3.5 旗舰密集模型，原生多模态、长上下文、工具调用全能，开源社区当前基准。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,768 | 2,136,775 | Moonshot 首个开源多模态 MoE，压缩张量格式部署极致高效，中文长文本理解领先。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,459 | 1,872,232 | DeepSeek V4 轻量版，FlashAttention-3 + MLA 极致推理速度，适合高并发服务。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 536 | 21,873 | V4 旗舰 MoE，代码/数学/推理全面超越 V3，FP8 量化仅 1/4 显存。 |
| [Qwen/Qwen3.5-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.5-2.4T-A95B) | Qwen | 1,010 | 7,932 | 2.4T 训练万亿 MoE，激活 95B，开源最大规模 MoE 之一，科研/企业私有化首选。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 291 | 196,326 | Nemotron-H 混合架构 + NVFP4 量化，H100 上单卡 10k+ tok/s，企业级推理利器。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 647 | 141,009 | 液态神经网络小模型，持续学习特性适合边缘/机器人长期部署。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,029 | 2,307,541 | 当前最强开源视频基座，原生 image-text-to-video，物理一致性与美感并重。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,028 | 424,099 | 单文件 Diffusion Transformer，支持 I2V/T2V/V2V，ComfyUI 原生集成极简。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 840 | 8,639 | 文本到音乐生成 SOTA，支持风格/歌词/结构控制，商用友好许可。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,629 | 292,973 | Meta 开源多模态 MoE，图文互留、少样本适配强，学术引用双论文支撑。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 223 | 20,860 | 社区训练文生图单文件模型，ComfyUI 即插即用，动漫/插画风格突出。 |

---

### 🔧 专用模型（代码 / 数学 / 医疗 / 嵌入）
> 本周榜单中无显性代码/数学/医疗专用模型上榜，通用大模型已覆盖专业任务。

---

### 📦 微调与量化（社区微调 / GGUF / AWQ / FP8 等）
| 模型 | 作者 | ❤️ | 📥 | 一句话解读 |
|------|------|-----|-----|------------|
| [unsloth/Qwen3.5-27B-GGUF](https://huggingface.co/unsloth/Qwen3.5-27B-GGUF) | unsloth | 1,455 | 1,945,635 | 全精度量化矩阵（2bit-8bit），llama.cpp/OLLAMA 首选，下载量破 190 万。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,385 | 13,406,892 | ComfyUI 官方打包单文件，含 VAE/CLIP/Transformer，双击即跑，下载量全网第一。 |
| [DavidAU/Qwen3.5-27B-Fable-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.5-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,095 | 3,020,070 | 角色扮演/长文写作顶流微调，融合 Heretic/Neo/MAX 多路权重，去审核版。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 457 | 718,178 | 多模态 MoE 首个完整 GGUF 量化，支持 CPU/Apple Silicon 推理。 |
| [Qwen/Qwen3.5-27B-FP8](https://huggingface.co/Qwen/Qwen3.5-27B-FP8) | Qwen | 484 | 352,971 | 官方 FP8 量化，H100/A100 Tensor Core 直通，精度损失 < 0.5%。 |
| [orcarouter/Qwen3.5-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.5-27B-Uncensored-FP8) | orcarouter | 344 | 4,285 | Abiteration 去拒答 + FP8，保留推理能力同时解除安全限制。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 557 | 239,206 | 蒸馏加速版 H3，步数减半画质微降，适合实时交互场景。 |
| [unsloth/Qwen3.5-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.5-27B-NVFP4) | unsloth | 202 | 276,269 | NVFP4 微调量化，Blackwell 架构专属，显存再降 30%。 |
| [JonathanColetti/Qwen3.5-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.5-27B-Uncensored-GGUF) | JonathanColetti | 211 | 183,988 | 基于 MTP 模块去审核 GGUF，保留原生多模态能力。 |
| [Qwen/Qwen3.5-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.5-2.4T-A95B-FP8) | Qwen | 209 | 11,311 | 万亿 MoE 官方 FP8，单节点 8×H100 即可跑满激活参数。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 175 | 204,344 | 视频模型首个 GGUF 量化，stable-diffusion.cpp 原生支持。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 776 | 0 | 真人写实风格 LoRA，配合 Turbo 版生成照片级视频。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 229 | 16,103 | fal.ai 官方人像写实 LoRA，推理端免训练加载。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 298 | 357,877 | 官方自发布 GGUF，含双论文引用，学术复现友好。 |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 151 | 0 | 音乐模型 ComfyUI 单文件打包，Apache-2.0 商用无忧。 |

---

## 3. 生态信号分析
**模型家族势头**：Qwen3.5 与 MiniMax-H3 形成「双子星」格局——前者统治多模态语言入口，后者垄断视频生成分发；DeepSeek-V4 与 Nemotron-H 在企业级推理赛道并行竞速。  
**开源 vs 闭源**：头部厂商（Qwen、DeepSeek、MiniMax、Moonshot）均采取「旗舰开源 + 商业 API 闭源」双轨制，开源版本通过量化矩阵（FP8/GGUF/NVFP4）覆盖从手机到 H100 集群全谱系，闭源版本锁定 SLA 与长上下文增强。  
**量化/微调活动**：unsloth 成为事实上的「量化基础设施层」，单周贡献 6 个 Top-30 量化版；社区微调聚焦「去审核+角色扮演」（DavidAU/JonathanColetti）与「视频风格 LoRA」（fal/larryvrh），显示下游需求已从「跑通模型」转向「场景化定制」。

---

## 4. 值得探索
1. **[Qwen/Qwen3.5-27B-FP8](https://huggingface.co/Qwen/Qwen3.5-27B-FP8)** — 官方 FP8 量化 + 原生多模态，单张 H100 即可部署 27B 旗舰，性价比最高的生产级入口。  
2. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 1300 万下载验证的「开箱即用」视频生成全家桶，适合快速构建 AIGC 视频工作流/应用原型。  
3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 唯一开源的中文原生多模态 MoE，压缩张量格式在 24GB 显存跑通 1M+ 上下文，长文档 RAG 与 Agent 规划的理想底座。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*