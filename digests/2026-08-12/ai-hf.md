# Hugging Face 热门模型日报 2026-08-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-12 01:06 UTC

---

《Hugging Face 热门模型日报》｜2026-08-12

---

### ✅ 今日速览

本周 Hugging Face 热榜延续以 **MiniMax-H3 系列** 为核心的多模态生成潮，尤其在视频生成任务上持续发力；同时 **DeepSeek-V4** 与 **Kimi-K3** 继续在大语言模型领域保持强势， downloads 与 likes 双双名列前茅。值得注意的是，GGUF 格式的模型也随之涌现，reflecting 持续的量化需求。社区 LoRA 适配器与 ComfyUI 生态进一步成熟，ushering in 更高效的本地化部署。

---

## 🌟 热门模型分类汇总

#### 🧠 语言模型（LLM、对话模型、指令微调）

1. [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3)  
   作者：moonshotai | 点赞：10,525 | 下载：1,565,484  
   一句话说明：支持多模态输入的超大语言模型，推出即凭借强大的推理与压缩能力迅速走红。

2. [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)  
   作者：deepseek-ai | 点赞：3,150 | 下载：1,048,685  
   一句话说明：DeepSeek  latest text-generation model，表现出色，适合对话与指令任务。

3. [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)  
   作者：DavidAU | 点赞：1,897 | 下载：2,521,093  
   一句话说明：社区对 Qwen3.6 系列进行的激进微调版本，提供开放且具实验性质的生成能力。

---

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

1. [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3)  
   作者：MiniMaxAI | 点赞：3,574 | 下载：59,368  
   一句话说明：支持图像+文本输入生成视频的前沿模型，广泛应用于短视频创作。

2. [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3)  
   作者：Comfy-Org | 点赞：1,212 | 下载：6,798,796  
   一句话说明：ComfyUI 生态中集成的 MiniMax-H3 基础模型，下载量领跑榜单。

3. [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo)  
   作者：lightx2v | 点赞：340 | 下载：20,376  
   一句话说明：轻量化 turbo 版视频生成模型，适合快速原型开发与实验。

4. [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5)  
   作者：Lightricks | 点赞：211 | 下载：39  
   一句话说明：轻量级图像到视频生成模型，由 Lightricks 官方发布，强调高效推理。

5. [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR)  
   作者：baidu | 点赞：4,018 | 下载：2,892,191  
   一句话说明：通用OCR模型，支持多语言识别与文档结构化输出，广泛用于内容解析。

---

#### 🔧 专用模型（代码、数学、医疗、嵌入）

暂无明显贡献。

---

#### 📦 微调与量化（社区微调、GGUF、AWQ）

1. [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)  
   作者：unsloth | 点赞：649 | 下载：207,990  
   一句话说明：基于 DeepSeek 提供的 GGUF 量化版本，适合 llama.cpp 使用。

2. [**unsloth/Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)  
   作者：unsloth | 点赞：304 | 下载：0  
   一句话说明：Muse-Glimmer 30B 系列的 GGUF 格式量化模型，尚未大规模下载。

3. [**lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA**](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA)  
   作者：lightx2v | 点赞：129 | 下载：353  
   一句话说明：针对文本到视频任务的 prompt 重写增强 LoRA adapter，提升生成多样性。

4. [**fal/MiniMax-H3-Realism-People-LoRA**](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)  
   作者：fal | 点赞：111 | 下载：0  
   一句话说明：专为人物写实风格优化的 LoRA 权重，适用于角色设定场景。

---

## 🚨 生态信号

当前模型生态正回归“**模块化**”与“**轻量化部署**”：MiniMax-H3 母模型以其兼容性强、资源占用低，引领了多个 LoRA 和 ComfyUI 适配器的涌现趋势；与此同时，Qwen、Kimi、DeepSeek 等主流模型推出多种量化版本（特别是 GGUF），表明用户对本地推理的需求持续增长。值得关注的是，越来越多的社区开发者开始围绕同一位模型构建“工具链”，如 LoRA + Prompt Rewriter + UI 集成等，这种协作模式有望成为开源模型生态的新常态。

---

## 🔍 值得探索的模型

1. **MiniMaxAI/MiniMax-H3**  
   作为当前最热门的文本到视频模型，其训练数据丰富、生成质量稳定，值得用于视频内容生产原型测试。

2. **baidu/Unlimited-OCR**  
   拥有超高的下载量与点赞，表明其在通用OCR任务中表现突出，适合作为文档处理 pipeline 的前置组件。

3. **unsloth/DeepSeek-V4-Flash-0731-GGUF**  
   若你关注本地部署高性能大模型，此 GGUF 版本可在 CPU 上高效运行，性价比极高。

--- 

以上均基于 Hugging Face 2026-08-12 周点赞榜统计与生态分析撰写。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*