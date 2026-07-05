# Hugging Face 热门模型日报 2026-07-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-05 02:07 UTC

---


# Hugging Face 热门模型日报（2026-07-05）

## 🚀 今日速览  
本周 Hugging Face 热门模型继续围绕 **Qwen/Claude 系列** 和 **GLM-5.2** 打造的多模态语言模型，其中 `Ornith` 和 `Qwythos` 系列因其 **GGUF 量化优化 + 多模态能力** 受到开发者青睐。值得注意的是，来自 **deepreinforce-ai** 和 **yuxinlu1** 等社区的模型展示了高度定制化的趋势，如“agentic”和“coder”变体。同时，**NVIDIA 和 Google** 等厂商在模型优化（NVFP4）和轻量化任务（图像定位、表格分类）上的布局也引起关注。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  作者: zai-org | 点赞: 3,399 | 下载: 208,920  
  GLM-5.2 是基于 GLM-MOE-DSA 架构的对话模型，支持高效推理和多轮对话，适用于企业级应用。

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**  
  作者: Qwen | 点赞: 534 | 下载: 50,188  
  35B 参数的 agentic 模型，结合视觉推理能力，适用于智能代理场景。

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)**  
  作者: huihui-ai | 点赞: 162 | 下载: 4,701  
  GLM-5.2 的 GGUF 版本，经过“abliterated”处理，可能具备更广泛的内容生成能力。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**  
  作者: deepseek-ai | 点赞: 370 | 下载: 10,306  
  DeepSeek-V4 的强化版，支持学术级长文本生成（arXiv 2606.19348），适用于研究场景。

- **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)**  
  作者: deepseek-ai | 点赞: 157 | 下载: 40,271  
  轻量化版 DeepSeek-V4，注重速度与效率，适合快速部署。

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  作者: baidu | 点赞: 1,714 | 下载: 988,379  
  多语言 OCR 模型，支持图像转文本，适用于文档处理与信息提取。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
  作者: nvidia | 点赞: 2,604 | 下载: 1,194,542  
  图像-文本到文本模型，支持任意对象定位，具有高效率与广泛适用性。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  作者: HauhauCS | 点赞: 2,454 | 下载: 2,993,053  
  35B 滴定模型，支持视觉 + 文本输出，具备“Uncensored”特性，可能适用于开放内容生成。

- **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)**  
  作者: Jackrong | 点赞: 131 | 下载: 59,971  
  视觉代码生成模型，GGUF 格式适用于边缘设备部署。

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**  
  作者: fal | 点赞: 157 | 下载: 0  
  LoRA 微调模型，专注于图像到视频的 3D 真实渲染，适用于创意内容生成。

---

## 🔧 专用模型（代码、数学、医疗、嵌入）

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
  作者: yuxinlu1 | 点赞: 1,010 | 下载: 342,752  
  Gemma4 12B 定制模型，专注于代码编写与推理，支持终端交互，适用于开发者工具。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
  作者: yuxinlu1 | 点赞: 2,595 | 下载: 641,260  
  同样基于 Gemma4 的 coder 版本，GGUF 格式降低了硬件门槛，适用于编码辅助。

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
  作者: google | 点赞: 197 | 下载: 1,177  
  TabFM 模型，支持表格分类与回归，适用于结构化数据分析。

- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**  
  作者: nationaldesignstudio | 点赞: 123 | 下载: 1,881  
  基于 BERT 的 Token 分类模型，目标识别 PII（个人身份信息），适用于隐私保护场景。

- **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**  
  作者: BugTraceAI | 点赞: 132 | 下载: 12,001  
  27B 规模的网络安全模型，GGUF 格式，侧重攻击性安全分析。

---

## 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  作者: empero-ai | 点赞: 1,462 | 下载: 1,464,047  
  基于 Qwen3.5 的 9B 模型，GGUF 量化后支持 llama.cpp，适用于高效部署。

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
  作者: deepreinforce-ai | 点赞: 712 | 下载: 359,659  
  35B 参数的大模型，GGUF 格式降低内存需求，适用于资源受限环境。

- **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)**  
  作者: deepreinforce-ai | 点赞: 424 | 下载: 320,660  
  同样基于 Qwen3.5，9B 规模适合个人或小型团队部署。

- **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**  
  作者: deepreinforce-ai | 点赞: 209 | 下载: 33,268  
  超大规模模型（397B），展示社区在探索极端参数规模的趋势。

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**  
  作者: nvidia | 点赞: 250 | 下载: 184,521  
  NVIDIA 推出的 NVFP4 量化模型，优化了模型大小与性能平衡。

---

## 🔎 生态信号  
本周模型生态中，**Qwen** 和 **GLM-5.2** 家族持续领跑，特别是在多模态和量化方面。与此同时，**NVIDIA** 的 NVFP4 量化技术和 **Google** 的轻量化模型（如 TabFM）展示了企业在效率优化上的积极布局。社区模型（如 `Ornith`, `Qwythos`, `Huihui-GLM`）大量采用 **GGUF/LLaMA.cpp** 格式，显示出对边缘部署与低资源运行的强烈需求。此外，“agentic”、“coder”等多样化微调趋势，表明开发者更倾向于构建 **领域专属模型**，而非通用模型。闭源模型（如 DeepSeek）也保持活跃，尽管其下载量相对较低，可能由学术或企业闭环使用驱动。

---

## 🌟 值得探索

1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   35B 参数 + 多模态 + uncensored，训练数据可能更开放，适合内容生成与创意实验。

2. **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**  
   397B 规模的模型展示了社区在极端参数上的探索能力，值得研究其训练与推理优化策略。

3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   GGUF 格式 + 高下载量，适合快速部署在开发者个人设备中，成为“AI 编程助手”的优选。

--- 

*报告由 Hugging Face 模型生态分析员自动生成，数据来源于 Hugging Face Hub 2026-07-05 周热门模型榜单。*


---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*