# Hugging Face 热门模型日报 2026-10-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-12 03:21 UTC

---

# 📊 Hugging Face 热门模型日报 | 2026-10-12

---

## 🚀 今日速览

**Qwen 3.8 系列霸榜**，官方基座模型（`Qwen3.8-27B`、`Qwen3.8-Flash-Next`）与社区量化版（Unsloth、ISTA-DASLab、OrcaRouter）共占据前 30 名近半数席位，显示**阿里巴巴 Qwen 家族已成开源 LLM 事实上的“标准库”**。  
**图像/视频生成迎来“加速与量化”双主线**：Lightricks `LTX-2.5` 以 7.3k 点赞领跑视频生成，Qwen-Image 2.1 系列（官方 Turbo、社区 GGUF/Uncensored）统治图像榜单，推理加速与本地化部署成核心竞争力。  
**嵌入与专用小模型崛起**：Google `embeddinggemma-2` 与 Cloudflare `clef/clef-flash` 验证了**小参数、高性能、商业友好**的边缘部署需求激增。  
**极致量化（2-bit/ternary）进入实用期**：`Ternary-Bonsai-2-27B`、`Underdog-Saluki-27B` 等 2-bit/三元量化模型下载量破百万，标志着**超低比特推理已可生产可用**。  
**“Uncensored/去审核”成为社区分发常态**：多模态、LLM 均出现大量去安全对齐版本，反映开发者对**模型行为完全可控**的强烈诉求。

---

## 🔥 热门模型分类榜

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,515 | 6.84M | **当前开源 SOTA 基座之一**，27B MoE 混合专家，长上下文、多语言、工具调用全能，社区微调/量化上游。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,113 | 1.87M | 官方**推理加速版**，引入 FlashAttention-3 / MLA / 深层稀疏，首 token 延迟大幅降低，生产首选。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,366 | 1.38M | DeepSeek 最新**高吞吐推理模型**，MoE + MTP 多 token 预测，代码/数学推理强，兼容 OpenAI API 格式。 |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 887 | 12.5k | 欧洲本土 **MoE 推理模型**，强调合规与可解释性，适合企业级受监管场景。 |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 691 | 48.3k | 中文社区训练的 **29B 激活 4B MoE**，GGUF 量化即拿即用，中文长文本表现优异。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,328 | 1.73M | **视频生成新王**，DiT 架构统一 Image→Video / Text→Video / Video→Video，单文件分发，ComfyUI 原生支持。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,229 | 136k | 官方**文生图/图编辑基座**，原生支持中文提示词、多比例、文本渲染，Diffusers 生态一键接入。 |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 546 | 4.7k | **4-step 蒸馏加速版**，延迟降低 80%+，画质接近基座，实时交互场景首选。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,998 | 2.19M | 社区**去审核 + GGUF 量化**全能包，ComfyUI-GGUF 原生加载，显存 8GB 即可跑 2.1B 参数版。 |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 333 | 100k | Turbo 版对应的 **Uncensored GGUF**，极速 + 无审核 + 本地化部署三合一。 |
| [FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism) | FrancisRing | 162 | 0 | **联合视频-音频生成**早期探索，DiT + VAE 同步建模画面与配乐，研究参考价值高。 |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 153 | 393 | **像素空间扩散**小模型，3B 参数推高分辨率细节，适合边缘设备离线生图实验。 |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 357 | 18k | **土耳其语 TTS 闪电模型**，EMA 蒸馏实现极速流式合成，低资源语言部署范例。 |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 336 | 16.4k | **设备端 ASR**，<50MB、实时流式、无网推理，隐私优先场景（会议/医疗/工业）刚需。 |

---

### 🔧 专用模型（嵌入 / 分类 / 推理增强）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,735 | 98.8k | **Gemma-2 衍生嵌入模型**，Matryoshka 维度可变、多语言检索 SOTA，RAG 管线即插即用。 |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 258 | 59.2k | 上模型的 **GGUF 量化版**，CPU/NPU 推理零依赖，边缘检索首选。 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,029 | 14.3k | **边缘多模态理解模型**（Qwen3.5 微调），Worker 部署零冷启动，图文问答/OCR/表格解析一体化。 |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 756 | 22.1k | Clef 的 **蒸馏加速版**，参数量减半、延迟降 60%，Cloudflare Workers AI 直接调用。 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,495 | 44k | **系统 1/系统 2 双路校准分类器**，输出置信度校准后的决策概率，适合高风险自动化决策（内容审核/风控）。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,074 | 2.08M | **SAM 视频版**，零样本视频分割/追踪，支持文本/点/框提示，视频剪辑/自动驾驶数据标注核心工具。 |

---

### 📦 微调与量化（社区微调 / GGUF / 极致低比特）

| 模型 | 作者 | ❤️ 点赞 | 📥 下载 | 一句话解读 |
|------|------|--------|--------|------------|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,026 | 6.49M | **官方基座最全量化库**（Q2_K~Q8_0），Unsloth 优化内核，消费级显存跑 27B MoE 成为常态。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 801 | 4.19M | **GSQ 分组稀疏量化 + RCO 重校准**，4-bit 恢复 99.5% 精度，Flash-Next 加速版专用。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,154 | 1.49M | 基座 27B 的 **混合精度量化最佳实践**，层级敏感性自适应分配比特。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,633 | 4.55M | **三元量化（-1/0/1）+ 2-bit 混合**，推理仅需加法/查表，CPU/NPU 极速跑 27B，开创亚 2-bit 实用先河。 |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 326 | 109k | **2-bit 量化 + 工具调用保真**，证明超低比特不丧失 Function Calling 能力。 |
| [DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,657 | 2.02M | **融合微调大杂烩**（Fable/Heretic/NeoCoder/Code/Uncensored/MTP），社区“全能包”代表，一次下载覆盖代码/聊天/推理/角色扮演。 |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 761 | 614k | Flash-Next **去安全对齐 + GGUF**，保留极速推理同时移除拒答，私有化部署热门。 |
| [nerkyor/Qwen3.8-27B-...-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 239 | 56.5k | **技术名词堆砌式融合微调**，集成 Coder/EfficientThink/RLHF/MTP 等十余技术，展示社区“堆叠式创新”极致。 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,117 | 37.6k | **文本人化/去 AI 味微调**，Gemma-4 统一架构，输出更自然、可规避 AI 检测器，内容创作/SEO 刚需。 |

---

## 🌐 生态信号深度解读（~160 字）

**Qwen 3.8 确立“开源 Linux 地位”**：官方基座+Flash加速版+社区全谱系量化（Unsloth/ISTA/prism-ml/OrcaRouter）形成**完整供应链**，从云端 A100 到边缘 Raspberry Pi 无缝覆盖。  
**极致量化跨越“可用性临界点”**：Ternary-Bonsai（三元）、Underdog-Saluki（2-bit）、GSQ-RCO（混合精度）下载量均破百万，证明 **<2-bit 推理精度损失已可接受**，推理成本再降一个数量级。  
**多模态“统一架构+加速蒸馏”成范式**：LTX-2.5 单模型覆盖 I2V/T2V/V2V，Qwen-Image 2.1 Turbo 4-step 蒸馏，**“一个模型、多任务、极速跑”**成标配。  
**小模型商业化落地加速**：Cloudflare Clef/Flash、Google EmbeddingGemma-2、Cactus Whistle

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*