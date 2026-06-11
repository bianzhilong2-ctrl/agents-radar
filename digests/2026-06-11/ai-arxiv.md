# ArXiv AI 研究日报 2026-06-11

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-11 02:43 UTC

---

**ArXiv AI 研究日报（2026‑06‑11）**  

---

### 📰 今日速览  
今日投稿聚焦于 **高效多模态表示**、**具身智能的测时计算与力觉感知**、以及 **混合专家（MoE）路由与强化学习的协同优化**。多篇工作提出可恢复的视觉token路由、基于扩散的次优数据模仿学习、以及利用外部力矩估计提升机器人策略学习，表明社区正从“粗暴裁剪”转向“可恢复、可调节”的资源分配范式，同时在科学发现、医疗VLM和文本到SQL等垂直领域深化推理与对齐能力。

---

### 🔖 重点论文  

#### 🧠 大语言模型（架构、训练、对齐、评估）  
- **TAHOE: Text-to-SQL with Automated Hint Optimization from Experience**  
  [http://arxiv.org/abs/2606.12387v1](http://arxiv.org/abs/2606.12387v1)  
  *作者：Z. Chen 等*  
  通过从历史交互中学习提示词，显著提升 LLMs 在复杂、多方言 SQL 生成上的准确率，减少人工调试成本。  

- **Redesign Mixture-of-Experts Routers with Manifold Power Iteration**  
  [http://arxiv.org/abs/2606.12397v1](http://arxiv.org/abs/2606.12397v1)  
  *作者：S. Wu 等*  
  使用流形幂迭代重新参数化 MoE 路由矩阵，使专家激活更稀疏且负载更均衡，在保持性能的同时降低路由计算开销。  

- **OpenMedReason: Scientific Reasoning Supervision for Medical Vision-Language Models**  
  [http://arxiv.org/abs/2606.12169v1](http://arxiv.org/abs/2606.12169v1)  
  *作者：N. Baghbanzadeh 等*  
  构建 450K 图像‑问答对的医学推理 corpus，提供细粒度的科学监督，使 VLM 在临床决策中不仅给出正确答案还能解释依据。  

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）  
- **DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?**  
  [http://arxiv.org/abs/2606.12402v1](http://arxiv.org/abs/2606.12402v1)  
  *作者：J. Dao 等*  
  通过分析测时计算在不同规划阶段的收益曲线，提出自适应分配策略，显著降低延迟同时保持或提升任务成功率。  

- **APPO: Agentic Procedural Policy Optimization**  
  [http://arxiv.org/abs/2606.12384v1](http://arxiv.org/abs/2606.12384v1)  
  *作者：X. Wang 等*  
  将程序化工具使用细化为可微的子过程，利用强化学习进行细粒度信用分配，显著提升多步骤工具链的成功率。  

- **CHORUS: Decentralized Multi-Embodiment Collaboration with One VLA Policy**  
  [http://arxiv.org/abs/2606.12352v1](http://arxiv.org/abs/2606.12352v1)  
  *作者：R. Doshi 等*  
  在单一 VLA 策略下实现去中心化多具身协作，通过局部通信和共享 latent 目标，实现家具搬运、结构搭建等复杂任务的高效协同。  

- **Ambient Diffusion Policy: Imitation Learning from Suboptimal Data in Robotics**  
  [http://arxiv.org/abs/2606.12365v1](http://arxiv.org/abs/2606.12365v1)  
  *作者：A. Wei 等*  
  利用扩散模型将次优演示转化为高质量策略，无需精确标注即可在真实机器人上实现鲁棒模仿学习。  

#### 🔧 方法与框架（新技术、基准测试、效率优化）  
- **Reroute, Don't Remove: Recoverable Visual Token Routing for Vision-Language Models**  
  [http://arxiv.org/abs/2606.12412v1](http://arxiv.org/abs/2606.12412v1)  
  *作者：C‑Y. Yang 等*  
  提出可恢复的视觉 token 路由机制，在保留被路由外的 token 信息的前提下大幅降注意力与 KV-cache 开销，推理速度提升 2‑3×。  

- **Latent World Recovery for Multimodal Learning with Missing Modalities**  
  [http://arxiv.org/abs/2606.12362v1](http://arxiv.org/abs/2606.12362v1)  
  *作者：H. Wang 等*  
  通过学习共享 latent 世界并从可用模态重建缺失模态，实现在缺模态情况下的稳健多模态预测，适用于生物科学等数据稀疏场景。  

- **DAM-VLA: Decoupled Asynchronous Multimodal Vision Language Action model**  
  [http://arxiv.org/abs/2606.12105v1](http://arxiv.org/abs/2606.12105v1)  
  *作者：P. Vanjani 等*  
  解耦视觉、语言和动作的时间步，允许高频传感器与低频语言异步处理，显著提升 dexterous 机械手的实时控制频率。  

#### 📊 应用（垂直领域、多模态、代码生成）  
- **FACTR 2: Learning External Force Sensing for Commodity Robot Arms Improves Policy Learning**  
  [http://arxiv.org/abs/2606.12406v1](http://arxiv.org/abs/2606.12406v1)  
  *作者：S. Oh 等*  
  利用神经网络从关节位置和电流估计外部力矩，无需额外力传感器即可提升力觉下的抓取和装配策略学习效率。  

- **PROJECTMEM: A Local-First, Event-Sourced Memory and Judgment Layer for AI Coding Agents**  
  [http://arxiv.org/abs/2606.12329v1](http://arxiv.org/abs/2606.12329v1)  
  *作者：R. C. Malo, T. Qiu*  
  为 AI 编码代理构建基于事件溯源的本地记忆层，使代理能够跨会话保留项目决策，避免重复调试并提升长期代码质量。  

---

### 📈 研究趋势信号（约150字）  
本批论文显示出三个明显趋势：（1）**可恢复、可调节的资源分配**——从视觉 token 路由到 MoE 路由，强调在不丢失信息的前提下动态稀疏化；（2）**具身智能的多感官融合与测时计算**，力觉估计、测时决策和异步 VLA 架构共同推动机器人在真实、噪声环境中的鲁棒性与效率；（3）**领域特化的推理监督**，无论是医学 VLM 的因果解释、Text-to‑SQL 的提示优化，还是科学自动发现的主动理论学习，都在通过高质量、任务驱动的监信号提升模型的可解释性与可靠性。  

---

### 🔍 值得精读（2‑3篇）  

1. **Reroute, Don't Remove: Recoverable Visual Token Routing for Vision-Language Models**  
   *理由:* 提出的可恢复 token 路由直接解决了 VLM 推理中的算法与内存瓶颈，实验显示在保持略微下降的准确率下实现 2‑3× 加速，且能在需要时恢复被路由 token，具有广泛的迁移价值。  

2. **DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?**  
   *理由:* 为测时计算的分配提供了 principled、任务感知的框架，结合理论分析与实机实验，为后续在真实机器人上进行计算‑性能权衡提供了重要参考。  

3. **OpenMedReason: Scientific Reasoning Supervision for Medical Vision-Language Models**  
   *理由:* 该工作提供了规模庞大且带有科学推理标注的医学 VLM 基准，填补了临床 VLM 在解释性和因果理解上的空白，对医疗 AI 的安全可信度具有重要指导意义。  

---  

*如需获取全文，请点击对应的 ArXiv 链接。*

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*