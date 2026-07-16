# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-16 01:46 UTC

---


---

**Hugging Face 热门模型日报（2026-07-16）**

---

### 📌 今日速览

Hugging Face 上的热门模型持续呈现两大趋势：一是基于 **Qwen、GLM 等主流语言模型家族的微调与量化版本**（如 Qwythos、GLM-5.2、ThinkingCap）热度极高，尤其是 9B~35B 参数规模的模型；二是 **多模态与生成类模型**（图像、视频、OCR）涌现，反映了社区对端到端 AIGC 能力的持续追求。与此同时，**GGUF 格式推动了大模型在本地部署与推理效率上的优化**，而一些专用模型（如 OCR、语音转写）展示出明确的垂直场景价值。

---

### 🧠 语言模型（LLM、对话模型、指令微调）

1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
   作者: prism-ml | 点赞: 474 | 下载: 23  
   - 27B 参数的 2-bit 量化模型，适用于资源受限环境下的大模型推理，体现了“小而美”效率潮流。

2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   作者: zai-org | 点赞: 3,998 | 下载: 489,611  
   - GLM 最新版本，采用 MoE 架构，高效生成能力受到广泛关注，热度持续上升。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   作者: HauhauCS | 点赞: 2,760 | 下载: 2,443,871  
   - 35B 参数视觉多模态模型，移除审查限制后更具实验性与开放性，下载量领先。

4. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
   作者: yuxinlu1 | 点赞: 1,198 | 下载: 468,629  
   - Gemma-4 12B 的 AGI 风格微调版本，支持 Agentic 行为，适用于终端任务自动化。

5. **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
   作者: deepreinforce-ai | 点赞: 894 | 下载: 1,533,354  
   - 35B GGUF 模型，NVIDIA 兼容端点支持，展示了开源模型与硬件生态的结合潜力。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
   作者: thinkingmachines | 点赞: 361 | 下载: 0  
   - 多模态模型支持图像-文本-音频输入，应用前景广泛但当前缺乏公开数据。

2. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**  
   作者: bottlecapai | 点赞: 366 | 下载: 6,208  
   - 27B 多模态 Qwen3.6 微调模型，支持图像-文本交互，性能与效率兼备。

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   作者: baidu | 点赞: 2,002 | 下载: 1,715,301  
   - 专注于 OCR 任务的模型，高下载量反映出其在落地场景中的实用价值。

4. **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**  
   作者: robbyant | 点赞: 99 | 下载: 0  
   - 图像转视频（I2V）模型，基于 World Model，展示了动态内容生成方向的探索。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

1. **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
   作者: OpenMOSS-Team | 点赞: 215 | 下载: 65,109  
   - 语音转写 + 说话人分离，适用于会议记录、客服分析等场景。

2. **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**  
   作者: ATH-MaaS | 点赞: 118 | 下载: 745  
   - 基于 Qwen3.5 的 OCR 模型，轻量部署 + 高准确率，适合边缘设备集成。

3. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
   作者: Cactus-Compute | 点赞: 236 | 下载: 571  
   - 函数调用专用模型，支持工具使用（Tool Use），适用于 Agent 架构辅助决策。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
   作者: empero-ai | 点赞: 2,216 | 下载: 2,006,265  
   - 9B 大小的高性能多模态模型，通过 GGUF 优化后部署性显著提升。

2. **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**  
   作者: GnLOLot | 点赞: 250 | 下载: 89,892  
   - MiniCPM5 1B 推理优化版，支持“thinking”能力，适合轻量 Agent 应用。

3. **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**  
   作者: jlnsrk | 点赞: 111 | 下载: 2,188  
   - GLM-5.2 INT4 量化版本，专为 CPU 推理优化，展示了低资源推理趋势。

4. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
   作者: froggeric | 点赞: 917 | 下载: 0  
   - Qwen 对话模板微调，提升了 chat 格式的一致性，影响广泛。

---

### 🌐 生态信号

当前 Hugging Face 模型生态正呈现出 **参数高效化与多模态融合** 的双重趋势。Qwen、GLM、Gemma 等模型家族持续被二次微调、量化，反映出社区活跃度与创新力。GGUF 成为主流量化格式，推动大模型在消费级硬件上的落地。同时，OCR、视频生成等专用模型开始突围，表明开源模型正在向垂直场景加速。闭源模型仍占少数，但开源许可（如 Apache 2.0）成为标配，降低了试用门槛。

---

### 🔍 值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   - MoE 架构下性能与效率的平衡，适合研究模型稀疏激活与推理优化机制。

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   - 多模态 + 去审查版本，适合探索模型行为边界与开放对话范式。

3. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
   - 函数调用能力模型，适用于构建 LLM Agent 驱动的自动化工具链。

---


---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*