# ArXiv AI 研究日报 2026-09-11

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-11 02:06 UTC

---

**ArXiv AI 研究日报**

---

### 1. 今日速览  
本日的提交集中围绕 **扩散模型在多变量时间序列的缺失值填补**、**低帧率流式语音编码**、**空间视频生成与交互**、**物理信息神经网络在聚变装置中的逆问题求解** 以及 **大规模知识图谱理解** 四大方向展开。其中，扩散模型的概率隐式生成为时间序列缺失恢复提供了全新的框架；低帧率语音编码突破了传统码率瓶颈；空间视频系统实现了实时交互编辑；物理‑信息神经网络（PINN）在极端高温环境下的热导率推断取得突破。与此同时，针对金融替代数据、临床多语言标注、协同智能体评估以及多轮对话路由等垂直应用的创新工作也层出不穷，为实际场景的落地奠定基础。

---

### 2. 重点论文  

#### 🧠 大语言模型（架构、训练、对齐、评估）  
| 编号 | 标题（ArXiv 链接） | 作者（缩写） | 核心贡献 |
|------|--------------------|--------------|----------|
| 1 | **RDDMPI: Residual Denoising Diffusion Model for Probabilistic Multivariate Time Series Imputation** <br> https://arxiv.org/abs/2609.11648v1 | Ramiro Valdes Jara et al. | 提出基于残差去噪扩散的概率多变量时间序列缺失值填补模型，实现高维时序数据的鲁棒重建。 |
| 2 | **MAPLE: Memory‑Augmented Planning with Language and Evolution** <br> https://arxiv.org/abs/2609.11636v1 | Kesheng Chen et al. | 将记忆模块嵌入语言模型，构建能够从自然语言需求自动生成规划程序的混合架构。 |
| 3 | **Generalized Score Matching for Parameter Estimation on Convex Domains** <br> https://arxiv.org/abs/2609.11521v1 | Nishanth Shetty et al. | 给出了在凸域上参数估计的通用分数匹配框架，提升了非参数化模型的统计效率。 |
| 4 | **Calibration‑Aware Uncertainty Cascades for Efficient Heterogeneous Model Collaboration** <br> https://arxiv.org/abs/2609.11446v1 | Yilin Zhang et al. | 为异构模型协作设计了统一的置信度校准机制，使得多模型融合更可靠且计算成本可控。 |

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）  
| 编号 | 标题（ArXiv 链接） | 作者（缩写） | 核心贡献 |
|------|--------------------|--------------|----------|
| 5 | **Vidu S2: Real‑Time Interactive, Editable, and Spatial Video Generation** <br> https://arxiv.org/abs/2609.11638v1 | Jintao Zhang et al. | 引入 Vidu S2‑Avatar 与 Vidu S2‑Editing，实现实时交互式数字人模型及其编辑功能，并探索空间视频生成的可行性。 |
| 6 | **SWRouter: Similarity‑Contractive Window Routing for Multi‑Turn Large Language Model Conversations** <br> https://arxiv.org/abs/2609.11414v1 | Yu Wang et al. | 通过相似度收缩窗口实现多轮对话中的路由优化，使长对话保持高质量与低延迟。 |
| 7 | **RouteRepair: Instance‑Level Failure Diagnosis and Targeted Repair in LLM‑Based Automated Heuristic Design for Routing Optimization** <br> https://arxiv.org/abs/2609.11452v1 | Binghao Ji et al. | 提出实例级故障诊断与有针对性的修复策略，提升 LLM 驱动的路由系统鲁棒性。 |
| 8 | **The Convention Gap: Towards Measuring Implicit Communication in Cooperative AI Evaluation** <br> https://arxiv.org/abs/2609.11489v1 | Makoto Fukushima et al. | 定义并量化了协同 AI 评估中“约定差距”，揭示人类合作依赖的隐性协议。 |

#### 🔧 方法与框架（新技术、基准测试、效率优化）  
| 编号 | 标题（ArXiv 链接） | 作者（缩写） | 核心贡献 |
|------|--------------------|--------------|----------|
| 9 | **ZipCodec: Ultra‑Low

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*