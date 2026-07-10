# ArXiv AI 研究日报 2026-07-10

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-10 02:00 UTC

---

---

# ArXiv AI 研究日报 | 2026-07-10

### 今日速览
今日 ArXiv 新增 AI 论文 50 篇，核心看点集中在三大方向：**智能体评测体系化**（UniClawBench、WebSwarm、SolarChain-Eval）、**推理范式创新**（OpenCoF 视频生成推理、Latent Memory Palace 控制推理、IdeaGene 科学谱系推理）与 **大模型工程极致化**（UltraX 数据重编程、BiSCo-LLM 二进制压缩、MAESTRO MoE 专家剪枝、DominoTree 树形推测解码）。医疗、自动驾驶、科学发现等垂直领域呈现“深度推理+领域知识检索”融合趋势，因果推断、可解释性、隐私计算等基础方法论持续深化。

---

### 重点论文

#### 🧠 大语言模型（架构、训练、对齐、评估）
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[UltraX: Refining Pre-Training Data at Scale with Adaptive Programmatic Editing](http://arxiv.org/abs/2607.08646v1)** | Xinlong Zhao et al. | 提出自适应程序化编辑框架，在 TB 级语料上实现数据清洗与质量提升，直击 Scaling Law 遇到“数据墙”后的核心痛点。 |
| **[BiSCo-LLM: Lookup-Free Binary Spherical Coding for Extreme Low-Bit LLM Compression](http://arxiv.org/abs/2607.08643v1)** | Yuantian Shao et al. | 创新二进制球面编码，实现无需查找表的极致低比特压缩，兼顾推理速度与精度，为边缘部署提供新范式。 |
| **[DominoTree: Conditional Tree-Structured Drafting with Domino for Speculative Decoding](http://arxiv.org/abs/2607.08642v1)** | Saw S. Lin, Jyh-Shing Roger Jang | 融合块扩散与树形搜索，提出 Domino 机制协调草稿生成与验证，显著提升推测解码的接受率与吞吐。 |
| **[It Takes a MAESTRO To Prune Bad Experts](http://arxiv.org/abs/2607.08601v1)** | Palaash Goel et al. | 针对 MoE 模型专家冗余问题，设计基于重要性的结构化剪枝方法，在保持性能前提下大幅降低显存占用。 |
| **[The Illusion of Equivalency: Statistical Characterization of Quantization Effects in LLMs](http://arxiv.org/abs/2607.08734v1)** | Baha Rababah et al. | 揭示困惑度等标量指标无法捕捉量化导致的行为漂移，提出“正确性一致性”等新评估维度，修正量化评测盲区。 |

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[UniClawBench: A Universal Benchmark for Proactive Agents on Real-World Tasks](http://arxiv.org/abs/2607.08768v1)** | Zhekai Chen et al. | 首个面向主动式智能体的通用基准，涵盖真实工具调用、长时程规划与用户意图对齐，填补 Agent 评测空白。 |
| **[OpenCoF: Learning to Reason Through Video Generation](http://arxiv.org/abs/2607.08763v1)** | Xinyan Chen et al. | 开创“视频生成即推理”新范式：利用时序帧建模逻辑链条，将视觉合成能力迁移为结构化推理能力。 |
| **[Remember When It Matters: Proactive Memory Agent for Long-Horizon Agents](http://arxiv.org/abs/2607.08716v1)** | Yifan Wu et al. | 设计主动记忆机制，动态检索/压缩长轨迹中的决策关键状态，解决长时程任务上下文溢出与遗忘问题。 |
| **[WebSwarm: Recursive Multi-Agent Orchestration for Deep-and-Wide Web Search](http://arxiv.org/abs/2607.08662v1)** | Xiaoshuai Song et al. | 提出递归多智能体编排框架，将深度宽度搜索解耦为子任务协作，突破单轨迹 ReAct 的上下文与广度瓶颈。 |

#### 🔧 方法与框架（新技术、基准测试、效率优化）
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[SLORR: Simple and Efficient In-Training Low-Rank Regularization](http://arxiv.org/abs/2607.08754v1)** | David González-Martínez, Shiwei Liu | 训练时低秩正则化新作，避免昂贵 SVD 计算，以极低开销提升模型可压缩性，适配大规模训练流程。 |
| **[When Structured Sparse Autoencoders Learn Consistent Concepts Across Modalities](http://arxiv.org/abs/2607.08605v1)** | Weiduo Liao et al. | 结构化 SAE 实现跨模态概念对齐，为多模态模型机制可解释性提供关键技术路径。 |
| **[CAAD: Causality-Aware Multivariate Time Series Anomaly Detection](http://arxiv.org/abs

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*