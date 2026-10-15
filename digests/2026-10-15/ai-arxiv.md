# ArXiv AI 研究日报 2026-10-15

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-15 02:24 UTC

---

**ArXiv AI 研究日报（2026‑10‑15）**  

---

### 今日速览  
今日论文聚焦于三条交叉前沿：（1）模型弹性与资源感知——如可伸缩Transformer和测试时训练的KV缓存压缩；（2）智能体的自我改进与多智能体协作——从具身递归自改进到科学代理群；（3）专用领域的生成与验证——多模态代码理解、医学CT超分辨率以及低资源语言安全对齐。这些工作共同指向“在保证性能的前提下，让系统更轻量、更自适应、更可信”的趋势。

---

### 重点论文  

#### 🧠 大语言模型（架构、训练、对齐、评估）  
- **Your Transformer Is Secretly Elastic**  
  链接: http://arxiv.org/abs/2610.20588v1  
  作者: W. Simoncini *et al.*  
  一句话：提出一种弹性Transformer架构，可在推理时根据硬件与延迟需求动态调整模型宽度，无需重新训练，显著提升资源利用率。  

- **Co‑Evolving Acting and Forecasting for Language Agents**  
  链接: http://arxiv.org/abs/2610.20597v1  
  作者: H. Yu *et al.*  
  一句话：通过同时学习动作与未来状态的预测，利用中间步骤的监督信息，缓解长 horizon 任务中稀疏奖励的瓶颈。  

- **Manacá‑1B‑Instruct‑2: Reproducible Safety Alignment for a Native Brazilian‑Portuguese LLM**  
  链接: http://arxiv.org/abs/2610.20570v1  
  作者: B. L. S. Menezes *et al.*  
  一句话：提供首个可复现的巴西葡萄牙语安全对齐模型，并系统性分析了 DPO 负结果、判断器失效模式，为低资源语言对齐提供实证基准。  

- **Recovering Reliable Supervision via Critique‑Guided On‑Policy Distillation**  
  链接: http://arxiv.org/abs/2610.20572v1  
  作者: K. Zhao *et al.*  
  一句话：引入批判引导的 on‑policy 蒸馏，利用教师的自我纠正能力修复学生在错误轨迹上的监督缺失，提升蒸馏效果而无需额外标注。  

- **One Task, Many Interfaces: Simple Cross‑Interface Consistency Training Improves LLM Agent Robustness**  
  链接: http://arxiv.org/abs/2610.20576v1  
  作者: A. Tajdini *et al.*  
  一句话：通过在不同接口（如动作命名、符号表示）上的一致性训练，显著提升LLM代理在界面变化下的任务鲁棒性，且开销极低。  

- **VASPO: Self‑Distillation with Privileged Value Estimation**  
  链接: http://arxiv.org/abs/2610.20516v1  
  作者: F. Wu *et al.*  
  一句话：在自蒸馏中引入特权价值估计，使学生能够从教师的全局回报中获得更准确的 token 级指导，显著提升推理质量。  

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）  
- **Hierarchical Residual Policy Learning for Real‑World Mobile Manipulation with Sparse Human Guidance**  
  链接: http://arxiv.org/abs/2610.20607v1  
  作者: Z. Gong *et al.*  
  一句话：提出分层残差策略学习框架，利用稀疏人类演示在高维动作空间中实现真实世界移动操作的精细调节。  

- **AdaRSI: On‑Demand Recursive Self‑Improvement for Embodied Agents**  
  链接: http://arxiv.org/abs/2610.20474v1  
  作者: P. Wang *et al

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*