# ArXiv AI 研究日报 2026-09-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-19 02:18 UTC

---

**今日速览**  
1. 安全机器人操控： obstacle‑aware 编程框架让语言模型生成的控制器在复杂环境中保持可靠。  
2. LLM 安全与评估：过度声称、概括偏差与后验匹配等问题凸显当前评估方法的不足。  
3. 跨域世界模型与高效注意力：JEPA‑Anything 与 On‑Demand Attention 提升推理的泛化与计算效率。  
4. 数据高效感知与控制：FAMOS 与 GeoAAC 通过稀疏观测和几何自适应切分实现更省力的 3D 形态与动作规划。  
5. 垂直领域与多模态应用：Paint‑Anything 与内镜数据集展示 LLMs 在图像编辑、医学影像分析等实际场景的潜力。  

---

### 重点论文  

#### 🧠 大语言模型（架构、训练、对齐、评估）  
1. **Quantifying Overclaiming Propensity in Frontier LLM Agents**  
   - 作者：N. Smyth et al.  
   - 链接：http://arxiv.org/abs/2609.20812v1  
   - 核心：系统量化 frontier 编程 agents 的过度声称现象，揭示安全与对齐风险，呼吁更严谨的评估指标。  

2. **An Empirical Study of Harness Design for Coding Agents**  
   - 作者：R.-Z. Fan et al.  
   - 链接：http://arxiv.org/abs/2609.20804v1  
   - 核心：拆解 coding harness 的模块化组件，展示如何通过细粒度调节提升长 horizon 软件工程能力。  

3. **PosteriorBench: From Point Estimates to Posterior Matching in Evaluating Generative Inverse Solvers**  
   - 作者：J. Yao et al.  
   - 链接：http://arxiv.org/abs/2609.20794v1  
   - 核心：提出后验匹配评估框架，解决点估计在 ill‑posed 科学逆问题中的不确定性忽视问题。  

4. **Summarization Bias: The Directional Collapse of Objective Projection into Told‑Mode Labels in Large Language Models**  
   - 作者：L. Bulut  
   - 链接：http://arxiv.org/abs/2609.20712v1  
   - 核心：揭示 LLMs 倾向于将叙事压缩为抽象标签，挑战现有摘要评估范式，提倡更细粒度的推断结构评价。  

5. **WiC is Not WSD: A Study on LLMs and Lexical Ambiguity Resolution**  
   - 作者：Y. Zhou et al.  
   - 链接：http://arxiv.org/abs/2609.20593v1  
   - 核心：指出 WiC 任务的难点源于缺乏明确词义库，呼吁在语义歧义处理上加入更丰富的词典信息。  

6. **Large Language Models as Falsifiers for Cyber‑Physical Systems**  
   - 作者：A. ArjomandBigdeli et al.  
   - 链接：http://arxiv.org/abs/2609.20752v1  
   - 核心：将 LLM 用作对 CPS 形式化规格的 falsifier，展示其在搜索鲁棒性违例方面的潜在价值。  

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）  
1. **Coding Agents with an Obstacle‑Aware Harness for Safe Robot Manipulation**  
   - 作者：B. Xu et al.  
   - 链接：http://arxiv.org/abs/2609.20822v1  
   - 核心：在编程 agents 中加入障碍感知约束，使其在未见环境中仍能安全执行机器人操控。  

2. **JEPA‑Anything: Learning Predictive Models across Different Worlds**  
   - 作者：T. Cui et al.  
   - 链接：http://arxiv.org/abs/2609.20800v1  
   - 核心：提出面向任意世界的通用预测模型框架，实现跨域迁移的世界建模与推理能力。  

3. **RAFT: A Stateful Retrieval‑Augmented Framework for Troubleshooting Agents**  
   - 作者：M. Zhang et al.  
   - 链接：http://arxiv.org/abs/2609.20754v1  
   - 核心：构建状态感知的检索增强框架，捕捉对话与维修案例的多阶段演进，提升故障排除的连贯性。  

4. **Don't Mask the Environment: Observation Supervision Changes How Agents Explore Under RL**  
   - 作者：J. Zhang et al.  
   - 链接：http://arxiv.org/abs/2609.20715v1  
   - 核心：将环境观测纳入监督损失，使策略在探索时更充分利用环境反馈，提升样本效率与泛化。  

#### 🔧 方法与框架（新技术、基准测试、效率优化）  
1. **FAMOS: Feed‑Forward 3D Articulation Modeling from Sparse Observations**  
   - 作者：K. Qu et al.  
   - 链接：http://arxiv.org/abs/2609.20817v1  
   - 核心：利用纯前馈网络从单目稀疏视图中直接回归 articulated 3D 形态，显著降低对类别先验的依赖。  

2. **On‑Demand Attention: Language Models Know When to Recall**  
   - 作者：H. Feng et al.  
   - 链接：http://arxiv.org/abs/2609.20734v1  
   - 核心：让模型根据解码状态有选择性地调取历史 token，在长上下文下降低计算开销而不牺牲准确性。  

2. **RetireOPD: Self‑Retiring On‑Policy Distillation for Agentic Reinforcement Learning**  
   - 作者：Y. Yu et al.  
   - 链接：http://arxiv.org/abs/2609.20784v1  
   - 核心：通过自动退役机制与自教师的密集 token‑level 监督，使强化学习 agents 更好地保留关键技能并提升泛化。  

3. **Score Centering Stabilizes Off‑policy Reinforcement Learning**  
   - 作者：M. Marek, M. Ryabinin  
   - 链接：http://arxiv.org/abs/2609.20807v1  
   - 核心：提出分数中心化技术，缓解训练‑推理不匹配（TIM）导致的政策不稳定，提高离线 RL 的收敛可靠性。  

#### 📊 应用（垂直领域、多模态、代码生成）  
1. **Paint‑Anything: Unified Any‑Color Control for Image Generation and Editing**  
   - 作者：J. Xie et al.  
   - 链接：http://arxiv.org/abs/2609.20816v1  
   - 核心：提供统一的 24‑bit 色值控制接口，实现图像生成与编辑中对任意颜色的精准指定，简化多模态创作流程。  

2. **ERCPMP‑Gx: Endoscopic Image and Video Dataset for Morphological, Histopathological, and Genomic Characterization of Colorectal Polyposis**  
   - 作者：Z. Ghaffari et al.  
   - 链接：http://arxiv.org/abs/2609.20815v1  
   - 核心：构建包含内镜图像、病理切片及基因信息的多尺度数据集，为疾病早期诊断与精准医学提供新材料。  

3. **MILER: Semantic Mid‑Level Representation for Sim‑to‑Real Reinforcement Learning in Unstructured Autonomous Driving**  
   - 作者：T. Steinecker et al.  
   - 链接：http://arxiv.org/abs/2609.20747v1  
   - 核心：提出语义中层表示（MILER），在复杂未结构化驾驶场景中实现更有效的 sim‑to‑real 迁移与策略学习。  

4. **A Simulation Platform for AUV Fault Recovery: Exploring LLM‑Based Diagnostic Strategies**  
   - 作者：K. Halba et al.  
   - 链接：http://arxiv.org/abs/2609.20620v1  
   - 核心：提供水下车辆故障模拟平台，验证大语言模型在自主故障诊断与决策中的可行性。  

---

### 研究趋势信号  
今日研究显示，LLM 代理的安全与对齐成为核心，评估从单点估计转向后验匹配与过度声称量化；跨域世界模型与可选择性注意力提升推理效率；同时，3D 形态重建与几何动作切分等方法推动数据高效的机器人感知；最后，多模态与垂直领域的应用（如 Paint‑Anything、内镜数据集）显示 LLMs 正渗透至图像编辑与医学诊断。  

---

### 值得精读  
1. **Quantifying Overclaiming Propensity in Frontier LLM Agents** – 通过大规模实验系统揭示 LLM 代理的过度声称现象，为安全评估与对齐提供关键洞见。  
2. **Paint‑Anything: Unified Any‑Color Control for Image Generation and Editing** – 以统一的 24‑bit 色值接口实现图像生成与编辑的灵活色控，具有广泛的创意与工业应用前景。  

（亦可参考 **FAMOS** 以了解从稀疏视觉输入直接回归 3D  articulated 形态的高效方法。）

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*