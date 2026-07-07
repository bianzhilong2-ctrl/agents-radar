# Hugging Face 热门模型日报 2026-07-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-07 02:08 UTC

---

# Hugging Face 热门模型日报（2026-07-07）

## 今日速览  
本周热门模型呈现“大模型+轻量化”双轮驱动：顶级开源模型如Qwen3.6、GLM-5.2持续引领语言模型版图，同时GGUF量化模型以本地部署为主流趋势蓬勃发展。图像生成与OCR任务模型（如LocateAnything、Unlimited-OCR）获得企业级应用青睐，社区微调生态进一步活跃。

---

## 热门模型  

### 🧠 语言模型  
1. **zai-org/GLM-5.2**  
   - 作者：zai-org | 点赞：3,532 | 下载：231,218  
   - 说明：智谱AI全新GLM大模型，凭借对话能力与参数规模登顶周榜。  

2. **deepseek-ai/DeepSeek-V4-Pro-DSpark**  
   - 作者：deepseek-ai | 点赞：409 | 下载：14,276  
   - 说明：DeepSeek新一代推理优化模型，标注论文支持科研场景落地。  

3. **meituan-longcat/LongCat-2.0**  
   - 作者：meituan-longcat | 点赞：115 | 下载：43  
   - 说明：美团推出的 conversational 大模型，聚焦中文场景优化。  

4. **Qwen/Qwen-AgentWorld-35B-A3B**  
   - 作者：Qwen | 点赞：556 | 下载：57,835  
   - 说明：通义千问推出的 agent-oriented 模型，支持复杂任务推理。  

5. **AliesTaha/fable-traces**  
   - 作者：AliesTaha | 点赞：177 | 下载：2,903  
   - 说明：Qwen3微调版本，专注指令跟随与推理链输出。  

---

### 🎨 多模态与生成  
1. **nvidia/LocateAnything-3B**  
   - 作者：nvidia | 点赞：2,635 | 下载：1,340,559  
   - 说明：NVIDIA开源的通用目标定位模型，支持图像特征提取与定位。  

2. **baidu/Unlimited-OCR**  
   - 作者：baidu | 点赞：1,795 | 下载：1,070,230  
   - 说明：百度推出的无限OCR模型，实现高精度文档与场景文字识别。  

3. **krea/Krea-2-Turbo**  
   - 作者：krea | 点赞：529 | 下载：109,470  
   - 说明：Krea团队的 text-to-image 模型，专注快速生成与风格化输出。  

4. **eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B**  
   - 作者：eric-venti-seeds | 点赞：79 | 下载：0  
   - 说明：基于LoRA的图像导向微调模型，聚焦光照与渲染控制。  

---

### 🔧 专用模型  
1. **google/tabfm-1.0.0-pytorch**  
   - 作者：google | 点赞：257 | 下载：7,036  
   - 说明：Google表格预测模型，支持分类与回归任务的零样本学习。  

2. **nationaldesignstudio/rampart**  
   - 作者：nationaldesignstudio | 点赞：136 | 下载：3,821  
   - 说明：面向PII检测的 token-classification 模型，内置隐私敏感信息识别。  

---

### 📦 微调与量化  
1. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
   - 作者：HauhauCS | 点赞：2,529 | 下载：2,910,241    
   - 说明：社区微调的Qwen3.6视觉模型，支持开放话题推理。  

2. **unsloth/Qwen3.6-27B-MTP-GGUF**  
   - 作者：unsloth | 点赞：974 | 下载：2,818,499  
   - 说明：基于Qwen3.6的 GGUF 量化版本，优化llama.cpp本地部署性能。  

3. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**  
   - 作者：empero-ai | 点赞：1,642 | 下载：1,617,508  
   - 说明：Claude风格微调的Qwen3.5模型，支持GGUF轻量化推理。  

4. **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**  
   - 作者：yuxinlu1 | 点赞：2,623 | 下载：664,319  
   - 说明：Gemma4大模型的 GGUF 量化版，专注代码生成与推理优化。  

5. **huihui-ai/Huihui-GLM-5.2-abliterated-GGUF**  
   - 作者：huihui-ai | 点赞：178 | 下载：6,660  
   - 说明：GLM-5.2的 GGUF 版本，采用ablation技术提升安全性。  

---

## 生态信号  
本周模型生态呈现“三足鼎立”格局：Qwen3.6、GLM-5.2与Gemma4成为核心模型阵营，分别代表通义、智谱与Google生态。GGUF量化模型以本地部署为核心驱动力，社区对开源权重的推崇持续提升，尤其在民间大模型（如Qwythos、Ornith）中表现突出。企业级模型（如baidu OCR、nvidia LocateAnything）凸显工业落地需求，而LoRA微调与量化技术（如Sun-Direction-Lora）进一步降低模型改造门槛。

---

## 值得探索  
1. **nvidia/LocateAnything-3B**  
   - 以功能定位模型为代表，正在重构计算机视觉任务的基础设施，值得关注其在无人驾驶与智能制造领域的潜在应用。  

2. **unsloth/Qwen3.6-27B-MTP-GGUF**  
   - 社区量化技术优化标杆，结合MTP（多目标预测）架构，为轻量化部署提供新思路。  

3. **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**  
   - 代码生成模型的量化版本，兼具推理速度与编程能力，具备工具链集成的研究价值。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*