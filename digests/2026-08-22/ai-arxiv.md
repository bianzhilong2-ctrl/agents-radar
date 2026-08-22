# ArXiv AI 研究日报 2026-08-22

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-22 00:40 UTC

---

# ArXiv AI 研究日报｜2026-08-22

---

## 今日速览
本期 50 篇论文集中反映三大前沿动向：**LLM 知识编辑与遗忘评测**（ConceptGuard）、**智能体自主进化与工具内化**（AI4AI-Bench、MidTool、Inject-Align-Recover）、**因果推理与可解释性向垂直领域渗透**（医疗报告解读 G-CARL、睡眠因果建模、法律证据仲裁 InsufficiencyBench）。同时，**推理时算力自适应分配**（Learning When to Think）、**语义缓存淘汰策略系统评测**、**离散扩散推理控制**等工程落地课题获得实质性进展。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）
| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **[ConceptGuard: Benchmarking Context-Sensitive Unlearning in LLMs](http://arxiv.org/abs/2608.20338v1)** | Kale, Harris | 首个面向**上下文敏感遗忘**的基准，揭示现有方法在关联知识残留、语境泛化上的系统性失效。 |
| **[Phantom Gains: Auditing Self-Improvement Against a Measured Null](http://arxiv.org/abs/2608.20290v1)** | Xu, Yan, Chen 等 | 指出自我改进评估中“个体增益/损失差分”易受测量噪声误导，提出审计框架量化虚假增益。 |
| **[OenoBench: A Wine-Domain Benchmark for Knowledge-Grounded Evaluation of LLMs](http://arxiv.org/abs/2608.20106v1)** | Khudov | 构建 3.2 万+ 原子事实、3.2k 多选题的葡萄酒领域基准，推动**可溯源知识评测**标准化。 |
| **[FormalTCS: Benchmarking End-to-End Frontier Formal TCS Research of LLMs](http://arxiv.org/abs/2608.20153v1)** | Wang, Zhang, Xu 等 | 面向**理论计算机科学前沿研究**的端到端基准，覆盖定理发现、证明构造、复杂度分析全链路。 |
| **[Daedalus-150M: A Convolution-Attention Hybrid Designed for CPU Inference](http://arxiv.org/abs/2608.20210v1)** | Koutsiaris | 反向设计：固定 4-bit CPU 单流推理目标，得出 18 层混合架构（仅 6 层全注意力），实测吞吐超同参数 Transformer。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **[AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement](http://arxiv.org/abs/2608.20318v1)** | Chi, Li, Hong 等 | 首个**递归自我改进（RSI）**基准：让 Agent 优化训练算法本身，量化“算力-能力兑换率”提升。 |
| **[MidTool: Mid-training Data Synthesis for Agentic Tool Use](http://arxiv.org/abs/2608.20314v1)** | Jiang, Wang, Liu 等 | 提出**中间训练阶段**合成工具调用数据，显著提升 Agent 规划与工具组合能力，且不损害通用推理。 |
| **[Inject, Align, Recover: Staged Post-Training for Retrieval-Free Document Knowledge Internalization](http://arxiv.org/abs/2608.20281v1)** | Kou, Shi, Qiu 等 | 三阶段后训练（注入-对齐-恢复）将固定语料内化为参数知识，**检索自由 QA** 击败 RAG 基线。 |
| **[Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1)** | Kassenaar, Yang, François-Lavet | 训练模型**自主决定推理深度**，在易题少思考、难题多思考，同等算力下准确率显著提升。 |
| **[Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](http://arxiv.org/abs/2608.20274v1)** | Feng, Sarker Bijoy, Balasubramanian 等 | 系统实证 Agent 诱导技能的**跨任务迁移条件**，发现技能粒度、任务相似度、检索噪声为关键调节因子。 |
| **[Reward-Guided Autoregressive Graph Generation for Efficient Multi-Agent Communication Topology Design](http://arxiv.org/abs/2608.20099v1)** | Suwannapichat, Changaival, Wu 等 | 将多智能体通信拓扑建模为**自回归图生成**，奖励引导搜索将 Token 消耗降低 40%+ 且保持性能。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）
| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **[Pandora's AI Model Routing Box: Efficient Allocation with Costly Value Estimation](http://arxiv.org/abs/2608.20316v1)** | Fisch, Trivedi, Huot 等 | 引入**潘多拉盒子模型**建模路由决策：在“评估专家价值昂贵”时，最优策略为顺序试探+最优停止。 |
| **[Which Eviction Policy Should an LLM Cache Use?](http://arxiv.org/abs/2608.20280v1)** | Kulkarni, Harkare, Babu | 用统一协议 CLEVER 评测 7 种语义缓存淘汰策略，**语义感知策略**在高命中率、低延迟上全面领先。 |
| **[Discrete Diffusion Inference-Time Control with Nested Sequential Monte Carlo](http://arxiv.org/abs/2608.20123v1)** | Chanchu, Abdulsamad, Naesseth | 提出**嵌套 SMC** 在离散扩散推理时控制序列级奖励，避免重训练，生成质量显著超越 best-of-n。 |
| **[DICS: Data-Informed Centroid Splitting for Decision Tree Classifiers](http://arxiv.org/abs/2608.20258v1)** | Mazumder, Yu | 用数据驱动质心分裂替代穷举搜索，决策树训练加速 **10-50×** 且精度不降。 |
| **[Task-CoEvolve: Efficient Harness Optimization via Adaptive Validation Task Selection](http://arxiv.org/abs/2608.20169v1)** | Miyai, Aizawa, Yamasaki | **自适应选择验证任务**优化 Agent harness 代码，迭代轮数减半达同等性能。 |

### 📊 应用（垂直领域、多模态、代码生成）
| 标题 | 作者 | 核心贡献 |
|------|------|----------|
| **[G-CARL: Grounded Checklist-Aligned Reward Learning for Patient-Oriented Medical Report Interpretation](http://arxiv.org/abs/2608.20331v1)** | Xie, Chen, Lv 等 | 构建**清单对齐奖励模型**，同时保证医学事实准确性与患者可理解性，人类评估胜率 +23%。 |
| **[InsufficiencyBench: Evaluating LLM Legal Advice on Underspecified User Queries](http://arxiv.org/abs/2608.20220v1)** | Vincent, Calloway, Yu 等 | 首个针对**查询侧信息不足**的法律基准，暴露模型倾向于“臆造事实”而非追问澄清。 |
| **[Dynamic Structural Causal Modeling for Sleep](http://arxiv.org/abs/2608.20285v1)** | Singh, Mathur, Tenali 等 | 从 HSAT 记录学习**动态因果图**，揭示睡眠呼吸暂停在不同人群的因果机制异质性，指导个性化干预。 |
| **[Explainable Transformer Models for Clinical Prediction Tasks on Structured EHRs](http://arxiv.org/abs/2608.20315v1)** | Du, Adamek, Kryukov 等 | 提出 **BERT-LER**：在编码 EHR 上结合定量实验值与事件级可解释注意力，AUC 提升且临床医生可审计。 |
| **[QUASAR: A Quantum-Classical Neural Network for SAR Satellite Physical-Layer Authentication](http://arxiv.org/abs/2608.20240v1)** | Sammartino, Denis, Di Pietro | 首个**量子-经典混合网络**用于 X 波段 SAR 卫星物理层认证，抗伪造鲁棒性超纯经典基线。 |

---

## 研究趋势信号
1. **“评测先行，方法跟进”成常态**：ConceptGuard、AI4AI-Bench、InsufficiencyBench、FormalTCS、OenoBench 五大基准同期落地，覆盖遗忘、自我改进、法律咨询、理论 CS、垂直知识——**可测量性驱动能力边界拓展**。  
2. **智能体生命周期工程化**：从 MidTool（中间训练）、Inject-Align-Recover（后训练内化）、Task-CoEvolve（Harness 优化）到 Learning When to Think（推理时自适应），**数据→训练→部署→推理**全链路出现专用优化算子。  
3. **因果与可解释性下沉垂直场景**：医疗（G-CARL、BERT-LER、睡眠因果）、法律、卫星认证均引入**结构化因果/证据仲裁**模块，标志着可信 AI 从通用理论转向**领域合规刚需**。  
4. **算力受约束架构创新回潮**：Daedalus-150M 反向设计、TCP_α 置信度校准、语义缓存淘汰、离散扩散推理控制，均瞄准**推理端能耗/延迟/显存**硬指标。

---

## 值得精读
1. **ConceptGuard** — 遗忘评测的“ImageNet 时刻”，上下文敏感设定贴近真实部署风险，实验矩阵完整（方法×模型×指标），直接指导后续非结构化知识编辑研究。  
2. **Inject, Align, Recover** — 给出**检索自由知识内化**的可复现三阶段范式，消融实验清晰拆解每阶段贡献，工程落地参考价值极高。  
3. **Learning When to Think** — 将“思考多少”建模为可学习策略，实验覆盖数学、代码、常识推理，且给出**算力-精度帕累托前沿**分析，适合直接迁移至生产级推理服务。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*