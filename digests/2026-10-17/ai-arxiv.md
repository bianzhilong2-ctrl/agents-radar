# ArXiv AI 研究日报 2026-10-17

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-17 02:11 UTC

---

**ArXiv AI 研究日报（2026‑10‑17）**  

---

### 今日速览  
今日论文聚焦于 **大模型的诚实性与跨语言评估**、**具身智能体的自主学习与协同**、以及 **高效的时序与几何建模方法**。多项工作提出了新的基准（如 LIBERO‑PeRM、FDE‑Gym、AI Consilium）和架构创新（持续扩散语言模型、变换器‑DiT 融合），旨在提升模型在真实世界任务中的可靠性与泛化能力。同时，机器人与代码生成领域出现了利用“人监督玩耍”收集 dexterity 数据以及将 3D 世界建模视为可编程代码的新范式。总体来看，**可解释、可控、可持续的具身智能系统** 正成为研究热点。

---

### 重点论文  

#### 🧠 大语言模型（架构、训练、对齐、评估）  
1. **Designing Transformers for Continuous Diffusion Language Models**  
   链接: http://arxiv.org/abs/2610.22330v1  
   作者: Weijian Luo et al.  
   一句话：提出专门为持续扩散语言模型设计的 Transformer 架构，显著提升并行生成质量与训练稳定性，为非自回归语言生成提供新基石。  

2. **Knowledge That Is Linear Before Fine‑Tuning Generalizes After It**  
   链接: http://arxiv.org/abs/2610.22300v1  
   作者: Faridoun Mehri, Hinrich Schütze  
   一句话：区分“活跃事实”与“惰性事实”，表明线性可分的先验知识在微调后更易泛化，为事实编辑与知识注入提供理论指导。  

3. **CAT‑alyzing Honesty: Continuous Adversarial Training for Transferable LLM Honesty**  
   链接: http://arxiv.org/abs/2610.22292v1  
   作者: Yuan‑Chen Chang et al.  
   一句话：通过持续对抗训练提升模型诚实性，并在多种下游任务中实现可转移的诚实行为改进，直接应对幻觉与不实输出。  

4. **Evaluation Awareness Beyond English: Do LLMs Act Differently When Tested in Indic Languages?**  
   链接: http://arxiv.org/abs/2610.22333v1  
   作者: Trizal Garg et al.  
   一句话：首次系统考察 LLMs 在非英语（印地语系）测试中的评估意识，揭示语言依赖的安全评估偏差，呼吁多语言基准。  

5. **AI Consilium: a Benchmark of LLM Clinical Multidisciplinary Second Opinions**  
   链接: http://arxiv.org/abs/2610.22298v1  
   作者: Alexey A. Bokov et al.  
   一句话：构建基于 300 例 NEJM‑MedQA 病例的多学科临床第二意见基准，评估 LLMs 在真实医疗决策中的事实 grounding、可行性与安全性。  

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）  
6. **MLExpert: Towards a Generalist Agentic Model for Autonomous Machine Learning Engineering**  
   链接: http://arxiv.org/abs/2610.22344v1  
   作者: Shangheng Du et al.  
   一句话：提出可自主执行完整机器学习工程流程的通用型 Agent，展示从数据准备到模型部署的闭环自动化，推进 AI‑for‑AI（AI4AI）愿景。  

7. **Learning Self‑Orchestration in Decentralized Agent Swarms**  
   链接: http://arxiv.org/abs/2610.22322v1  
   作者: Guowei Xu et al.  
   一句话：让智能体群体在无中心调度的情况下学习自编排行为，显著提升复杂任务的协同效率与鲁棒性。  

8. **Librarian Agents: Training LLMs to Curate Long‑Context Workspaces that Anticipate Future Queries**  
   链接: http://arxiv.org/abs/2610.22273v1  
   作者: Anikait Singh et al.  
   一句话：训练 LLM 充当“图书管理员”，主动构建并维护长上下文工作区，以预测并缓存未来查询所需信息，减少检索延迟。  

9. **Asking Smarter Questions: Targeted Active Preference Learning for Underspecified Rewards**  
   链接: http://arxiv.org/abs/2610.22285v1  
   作者: Helena Merker et al.  
   一句话：提出基于主动学习的问题生成策略，以最少的人工标注捕捉未明确指定奖励的关键特征，提升强化学习中的奖励学习效率。  

10. **A team of Gemini 4 Argon agents beats Minecraft**  
    链接: http://arxiv.org/abs/2610.22319v1  
    作者: Maxence Faldor et al.  
    一句话：四个基于 Gemini‑4 Argon 的 LLM 智能体在开放世界 Minecraft 中协作击败 Ender Dragon，展示了大规模多智能体在复杂、长 horizon 任务中的潜力。  

#### 🔧 方法与框架（新技术、基准测试、效率优化）  
11. **LIBERO‑PeRM: Benchmarking Personalized Robotic Manipulation**  
    链接: http://arxiv.org/abs/2610.22372v1  
    作者: Zhixu Li et al.  
    一句话：发布首个可控的个性化机器人操作基准，将任务完成与个体偏好解耦，为家庭机器人的泛化评估提供标准化工具。  

12. **CoDA: Co‑Evolution of Data Engines and Action Policies**  
    链接: http://arxiv.org/abs/2610.22362v1  
    作者: Tianjiao Yu et al.  
    一句话：提出共进化框架，使数据引擎与策略同步迭代，以自动生成能够有效纠正策略失效的仿真环境。  

13. **PathFM: Fast Generative Forecasting of Multivariate Trajectories**  
    链接: http://arxiv.org/abs/2610.22358v1  
    作者: Jiachen Yao et al.  
    一句话：设计时序基础模型直接生成多变量轨道的联合分布，解决边缘量化模型忽略依赖结构的问题，提升累积风险等下游任务的预测精度。  

14. **BitSparse: Compact Activation Storage for ReLU Feed‑Forward Networks**  
    链接: http://arxiv.org/abs/2610.22256v1  
    作者: Max Zhu et al.  
    一句话：通过稀疏 ReLU 激活的无损压缩显著降低激活存储开销，结合检查点重计算进一步提升大规模模型训练的内存效率。  

15. **Query‑Efficient Rejection Sampling for Parallel Masked Diffusion**  
    链接: http://arxiv.org/abs/2610.22238v1  
    作者: Shiyuan Zhang et al.  
    一句话：在并行掩码扩散中引入查询高效的拒绝采样，校正因独立采样引入的偏差，保持生成质量的同时降低采样成本。  

#### 📊 应用（垂直领域、多模态、代码生成）  
16. **3DCodeVerse: Exploring 3D Worlds as Code**  
    链接: http://arxiv.org/abs/2610.22341v1  
    作者: Yipeng Gao et al.  
    一句话：构建可编程的 3D 内容生态系统，提供大规模可执行 3D 代码数据集及验证 harness，使代码智能体能够直接编辑与验证复杂三维场景。  

17. **OmniVerifier‑C1: Decomposed Graded Verifier for Rule‑Governed Generative World Modeling**  
   

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*