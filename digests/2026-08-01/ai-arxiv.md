# ArXiv AI 研究日报 2026-08-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-01 01:55 UTC

---

**今日速览**  
1. 系统提示审计与自我约束成为 LLM 可信度的关键突破；  
2. 将控制理论、感知安全与端到端推理相结合，提升机器人和自动驾驶的实时安全；  
3. 元学习、自洽剂分量化与推理‑时缩放等新方法显著提升模型效率和鲁棒性；  
4. 跨医学、金融、材料等垂直领域的多模态检索与结构化信息抽取快速落地，使 AI 从实验走向真实业务。  

---

## 重点论文  

### 🧠 大语言模型（架构、训练、对齐、评估）  
- **《AISPA: User‑Centric System Prompt Auditing for Large Language Model Applications》**【[链接]】  
  *作者缩写：Lin X. 等* – 首次提出系统提示审计框架，揭示提示缺失导致的信任与问责鸿沟。  
- **《Inducing language models to assert their own consciousness...》**【[链接]】  
  *作者缩写：Kim J., Street W., Rocca R. 等* – 通过提示自认意识，恢复模型对他者心理的表达，恢复被安全微调压制的价值观。  
- **《$β$‑OPSD: Deriving with Policy Optimization, Training with Self‑Distillation》**【[链接]】  
  *作者缩写：Xu J., Liu M., Zhang J. 等* – 揭示 $β$‑OPSD 本质是 $β=1$ 的自散装，提出改进方向以降低工程成本。  

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）  
- **《PAC‑MAN: Perception‑Aware CBF‑RL for Whole‑Body Safety in Humanoid Dodgeball》**【[链接]】  
  *作者缩写：Yang L., Li J., Ames A.D. 等* – 将控制屏障安全与感知‑驱动 RL 融合，实现全身安全的实时躲避动作。  
- **《Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments》**【[链接]】  
  *作者缩写：Qi H., Wang X., Gao X. 等* – 将代码库的增量改动直接映射为可执行的 agente 预设任务，解决数据供给瓶颈。  
- **《ORCA‑bench: How Ready Are Language Model Agents for Oncall?》**【[链接]】  
  *作者缩写：Gong A., Choi K., Agarwal A. 等* – 构建首个面向真实 oncall 场景的评测基准，暴露模型在噪声日志与指标上的推理薄弱。  
- **《Agents That Certify Their Own Exploits: Confidence‑Scheduled Restricted Responses for Safe Opponent Exploitation》**【[链接]】  
  *作者缩写：Li B., Huang L. 等* – 赋予智能体自我校验能力，仅在置信度达标时进行对手利用，实现安全的博弈策略。  

### 🔧 方法与框架（新技术、基准测试、效率优化）  
- **《Learning to Trace Seiberg Dualities》**【[链接]】  
  *作者缩写：Heckman J.J., Meynet S., Mininno A. 等* – 首个基于图卷积的系统自动生成代数－拓扑同构映射的学习框架。  
- **《MixFrag: Fragility‑Guided Mixed‑Precision Post‑Training Quantization for Vision Transformers》**【[链接]】  
  *作者缩写：Opi M.M.H., Ryad R.I., Faruk M. 等* – 引入脆性度评估，为不同子模块分配适配的量化位宽。  
- **《SVR: Self‑Verifying Refinement via Joint Verdict‑Confidence Reinforcement Learning for Adaptive Test‑Time Compute》**【[链接]

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*