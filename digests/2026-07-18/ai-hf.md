# Hugging Face 热门模型日报 2026-07-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-18 01:40 UTC

---

# Hugging Face 热门模型日报（2026-07-18）

## 一、今日速览
本周 Hugging Face 热度由多模态与超大规模量化模型主导：GLM-5.2、Qwen 系变体及 Bonsai 极致低位量化（1~2bit）下载量破百万。社区对 GGUF/MLX 量化与本地部署需求旺盛，国产模型（智谱、腾讯、百度、MiniCPM）占据重要份额。多模态 OCR、图像/视频生成 LoRA 与边缘推理成为新兴热点。

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  作者：zai-org ｜ 点赞：4,071 ｜ 下载：534,698  
  智谱开源 GLM-5.2 MoE 对话模型，以高周赞登顶，代表国产基模新势力。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
  作者：tencent ｜ 点赞：820 ｜ 下载：12,719  
  腾讯混元三代文本生成基模，吸引社区快速推出 GGUF 衍生版。
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
  作者：InternScience ｜ 点赞：572 ｜ 下载：34,066  
  基于 Qwen3.5-MoE 的 Agent 向多模态文本模型，面向工具调用场景。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
  作者：prism-ml ｜ 点赞：396 ｜ 下载：1,045,182  
  27B 的 1-bit 极致量化对话模型，以破百万下载证明低位推理可行性。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
  作者：thinkingmachines ｜ 点赞：956 ｜ 下载：7,870  
  图文多模态对话模型，登周榜首显多模态原生交互受捧。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  作者：empero-ai ｜ 点赞：2,274 ｜ 下载：2,096,147  
  Qwen3.5 系多模态推理量化包，下载超两百万居全榜前列。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  作者：HauhauCS ｜ 点赞：2,828 ｜ 下载：2,295,313  
  无审查 Qwen3.6 MoE 视觉模型，社区对开放权重多模态需求强烈。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  作者：baidu ｜ 点赞：2,019 ｜ 下载：1,992,355  
  百度通用 OCR 多模态模型，近两百万下载成实用落地代表。
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**  
  作者：Wan-AI ｜ 点赞：108 ｜ 下载：2,185  
  图生视频扩散模型，延续 Wan 系列在视频生成方向布局。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
  作者：OpenMOSS-Team ｜ 点赞：249 ｜ 下载：83,160  
  MOSS 音频转写与说话人分离模型，补齐全模态音频短板。

### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**  
  作者：ATH-MaaS ｜ 点赞：153 ｜ 下载：10,795  
  基于 Qwen3.5 的 OCR 专用多模态模型，垂直场景精细化。
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
  作者：Cactus-Compute ｜ 点赞：257 ｜ 下载：874  
  JAX 实现的函数调用/工具使用模型，指向 Agent 基础设施。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  作者：prism-ml ｜ 点赞：679 ｜ 下载：200,774  
  27B 三值 2-bit GGUF，低位量化下载表现仅次于 1-bit 版。
- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**  
  作者：AngelSlim ｜ 点赞：122 ｜ 下载：84,834  
  腾讯 Hy3 的 GGUF 量化版，反映基模发布即被本地化。
- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**  
  作者：unsloth ｜ 点赞：225 ｜ 下载：1,924,495  
  Unsloth 的 Qwen3.6 NVFP4 量化，近两百万下载显优化权重号召力。
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**  
  作者：GnLOLot ｜ 点赞：273 ｜ 下载：154,762  
  端侧 1B 思考模型 GGUF，轻量推理受社区欢迎。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
  作者：froggeric ｜ 点赞：934 ｜ 下载：0  
  Qwen 聊天模板修正包，高赞零下载说明为工具型资产。

## 三、生态信号
本周模型家族中 **Qwen（3.5/3.6）** 与 **GLM** 势头最旺，衍生出大量量化、微调与多模态版；**Bonsai/Ternary-Bonsai** 将 1~2bit 量化推向主流。开源权重占绝对主导，腾讯、智谱、百度均公开基模并催生社区 GGUF/MLX 生态。量化活动集中在 llama.cpp（GGUF）与 Apple MLX，边缘部署与“无审查/极致压缩”成为明显分支，LoRA 则活跃于 Krea、LTX 视频与图像身份保持场景。

## 四、值得探索
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 周赞最高国产 MoE 基模，适合研究中文对齐与专家路由。
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 下载破两百万的多模态无审查 MoE，观察开放视觉模型边界。
3. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — 1-bit 27B 破百万下载，验证超低比特本地大模型可行性。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*