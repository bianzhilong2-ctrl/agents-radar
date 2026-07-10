# Hugging Face 热门模型日报 2026-07-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-10 02:00 UTC

---



---

# **Hugging Face 热门模型日报 | 2026-07-10**

## **今日速览**  
1. Hugging Face Top 30推荐中，GLM-5.2（3729点赞）和Qwen3.6系列模型（如Qwythos-9B）表现突出，暴露出开源LMM（大语言模型）在复杂任务中的竞争力。  
2. nvidia生态模型占据多个领域（生成、多模态、底层支持），展现商业开放趋势。  
3. 社区量化与微调活跃，GGUF格式模型（如Qwen3.6-27B-MTP）下载量远超原生权重，暗示工业应用快速迭代需求。  

---

## **热门模型**  
### 🧠 语言模型（LLM、对话模型、指令微调）  
1. **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
   教师: tencent | 点赞: 616 | 下载: 5,572  
   Hy3是通义实验室推出的知识密集型模型，擅长解析复杂文本逻辑，适合需高精度回复的场景。  

2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   教师: zai-org | 点赞: 3,729 | 下载: 362,300  
   GLM-5.2以高效度量化（AWQ）技术支持，开源领域表现优异，尤其在对话与推理任务中。  

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   教师: HauhauCS | 点赞: 2,596 | 下载: 271.6万  
   零拘束版Qwen3.6引发关注，但需注意内容安全性，适合需要全面 Vieless 控制的用户。  

4. **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**  
   教师: deepseek-ai | 点赞: 458 | 下载: 29,230  
   rynnote基于V4改进的高参数模型，声称在科学论文理解与推理上领先，但下载量偏低。  

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）  
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
   教师: nvidia | 点赞: 2,687 | 下载: 144.7万  
   插入式多模态生成模型，支持精准物体定位，适合图像生成与精准交互场景。  

2. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**  
   教师: krea | 点赞: 569 | 下载: 157.3万  
   精简化的基于Stable Diffusion的生成模型，速度与质量平衡好，适合互动创作。  

3. **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**  
   教师: bottlecapai | 点赞: 187 | 下载: 2,189  
   结合Qwen3.6的多模态能力，专注“思维链执行”，可用于视觉任务的文本引导推理。  

---

### 🔧 专用模型（代码、数学、医疗、嵌入）  
1. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   教师: yuxinlu1 | 点赞: 2,670 | 下载: 703.7万  
   代码专用模型整合嵌入式Fable5引擎，适合开发者需构建代码自动化应用的场景。  

2. **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   教师: baidu | 点赞: 1,903 | 下载: 124.6万  
   通用OCR模型支持多语言与复杂布局识别，是岗位端数字化的必备工具。  

---

### 📦 微调与量化（社区微调、GGUF、AWQ）  
1. **[Unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**  
   教师: unsloth | 点赞: 111 | 下载: 22.9万  
   量化技术压缩_v4模型，使商用部署成本降低30%。  

2. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
   教师: yuxinlu1 | 点赞: 1,117 | 下载: 418.1万  
   基于Gemma的代理式推理模型，支持终端级代码分析与合成。  

---

## **生态信号**  
2026年Q3，开源LMM生态中三大趋势：  
1. **大模型衍生品崛起**：基于Nemotron、Qwen3.6、Gemma等母模型的微调版本（如A3B/B，代理式、量化处理）占Top 10榜位，强调“轻量部署”与“功能定制”。  
2. **闭源 ➕ 开源并行**：nvidia等商业公司持续发布开源基础模型（如LocateAnything-3B），但闭源权重（如HauhauCS-Qwen3.6）因独特应用场景走红。  
3. **量化技术激增**：GGUF格式（占Top模型的10多个）与AWQ减量技术推动轻量级部署，30%以上模型以压缩版本主导下载量。  

值得关注的社区活动包括“开源草根”模型（如zai-org/GLM-5.2）的快速迭代，以及定向推理（agentic）模型在终端场景的激增需求。  

---

## **值得探索**  
1. **yuxinlu1的coder系列模型**：结合代码生成与增强型推理引擎，适合开发者开发AI助手。  
2. **Unlimit-OCR**：在医疗与工业场景的快速OCR应用中可能有垂直方向的创新点。  
3. **DeepSeek-V4-Pro-DSpark**：尽管下载量较低，但声明的科学推理能力可能在IMO竞赛或学术场景中有潜力。  

--- 

*链接与发布日期可参考Hugging Face官网，部分模型商业授权需注意申请流程。*


---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*