# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-20 03:19 UTC

---

# Hugging Face 热门模型日报（2026-07-20）

---

## 🌟 今日速览  
今日榜单显示：**开源大模型与量化奇迹并行崛起**。Inkling（2K+点赞）和GLM-5.2（4K+点赞）成为对话型与混合模型的代表；Ternary-Bonsai和Bonsai家族凭借27B规模在量化效率上爆发式增长；Google的Gemma-4-31B-it则以400万+下载量展现闭源大模型的开源化热。转向的是：**专用模型（OCR/视频）和社区微调 weights 正吸引高频浏览**，证明了垂直方向需求的重要性。

---

## 🧠 语言模型（LLM、对话、指令微调）  
1. **[thinkingmachines/Inkling](https://huggingface.co/thingorgmas/Inkling)**  
   顾名思义，专注于图文混合对话场景，擅长视觉推理。  
2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   百亿参数能力突破，MoE架构加DSA技术解决长序列效率问题。  
3. **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
   拟人化对话模型，集成多模态交互能力。  

🔥 **热点**：MoE模型（GLM-5.2）和代理驱动架构（Agents-A1）凸显行业对灵活扩展性的需求。

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）  
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   支持多语言OCR，图文提取能力超越竞品。  
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   35B参量量化出炉，未审查权重触发用户爆炸式下载（200万+）。  
3. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**  
   图文一键生成视频的i2v模型，算力需求较高但演示贴花。  
4. **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**  
   LoRA微调模板 promesse， PTR-to-video 场景能力强。  

🔥 **热点**：未审查权重（HauhauCS）和LoRA模板化开发（Cseti LMX）主导趋势。

---

## 🔧 专用模型（代码、数学、医疗、嵌入）  
1. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
   Jax生态功能调用工具，API化人工智能工作流。  
2. **[Google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
   Google自家参数验证，图文生成能力突出（1200万+下载）。  
3. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
  ən格式对话模板优化基础工具包，解决上下文混乱问题。  

🔥 **热点**：工业级工具（Needle）和基础模型微调模板（froggeric）在生态中扮演"系统胶水"角色。

---

## 📦 微调与量化（社区微调、GGUF、AWQ）  
1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
   三元量化27B模型，插进llama.cpp，性能/体积比极高。  
2. **[unsloth/inling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)**  
   Inkling转换为GGUF格式，推广多模型生成佳冠。  
3. **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)**  
   /TRANSFORMERS/初始化后 GGUF兼容性工作基准。  

🔥 **热点**：社区驱动的GGUF包装工作协作增加（UnsloTF/prism-ml），量化标签成了求解方程。

---

## 🔍 生态信号：趋势&amp;风险解读  
**家族势头**：  
- Qwen系列（3.5/3.6）在权重优化、微调策略和量化处理上持续迭代，分明领军地位。  
- Llama.cpp+GGUF生态崛起，推动本地部署效率，对应开源权重 vs 闭源模型争议风向。  
- 27B/35B尺度是行业竞争聚焦点，渐趋性能/成本的黄金比。  

**开源 vs 闭源**：  
开源权重依旧主导（90%+下载量在经典模型上），但Gemma-4以闭源闭环模式成功演绎"开源化部署"路径。  

**量化/微调热点**：  
LTX2.3、MoE模型需要高性能量化方案，社区工具链（如Unsltf GGUF适配）成为关键拓展器。  

---

## 🚀 值得探索  
1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   MoE树+DSA技术解决长序列微调效率瓶颈，性能框架值得学习。  
2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
   3调度 신경망结构+LLamaCPP桥接，技术上极具挑战性的成果。  
3. **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**  
   视频生成的"多视角与LoRA微调"结合设计，偏好生态中的想象力工具箱。  

---


---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*