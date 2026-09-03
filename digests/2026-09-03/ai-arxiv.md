# ArXiv AI 研究日报 2026-09-03

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-03 02:07 UTC

---



好的，以下是为您生成的《ArXiv AI 研究日报》。

---

### **ArXiv AI 研究日报 (2026-09-03)**

#### **今日速览**
今日投稿呈现出对“智能体”能力评估的高度重视，出现了多个用于测试长期规划、工具使用和不确定性的新基准测试（如 CivBench, UTP-Bench）。同时，研究焦点深入至 LLM 的核心机制，包括模型压缩中的偏见问题、多教师蒸馏的优化，以及对逻辑推理内部表征的探究。此外，安全对齐领域提出了新的多轮越狱攻击框架，凸显了该方向的持续挑战。

---

#### **重点论文**

##### **🧠 大语言模型（架构、训练、对齐、评估）**

1.  **Debias-SparseGPT: Bias-Aware Pruning for Large Language Models**
    *   **作者**: I. Proskurina, G. Metzler, A. Gourru et al.
    *   **链接**: http://arxiv.org/abs/2609.02496v1
    *   **一句话说明**: 首次系统性地揭示并尝试缓解模型剪枝（如 SparseGPT）对模型固有偏见的放大效应，对构建更公平的压缩模型至关重要。

2.  **Learn from Whoever Is Right: Answer-Verified Multi-Teacher Distillation for Multi-Domain LLMs**
    *   **作者**: X. He, X. Li, B. Wu et al.
    *   **链接**: http://arxiv.org/abs/2609.02548v1
    *   **一句话说明**: 提出一种创新的多教师蒸馏方法，通过“答案验证”动态选择最合适的教师模型，解决了多领域 LLM 能力整合的难题。

3.  **When Persona Attributes Improve Population Alignment in Large Language Models**
    *   **作者**: L. Fröhling, J. Rupprecht, M. Strohmaier et al.
    *   **链接**: http://arxiv.org/abs/2609.02526v1
    *   **一句话说明**: 探讨了“角色提示”技术如何帮助 LLM 更好地对齐特定人群（如调查参与者）的响应，对提升模型社会适用性有参考价值。

4.  **When Decodability Is Not Enough: Logical Validity Representations, Behavioral Dissociation, and Causal Tests in Language Models**
    *   **作者**: S.M. Sudheendra, J. Srivastava
    *   **链接**: http://arxiv.org/abs/2609.02438v1
    *   **一句话说明**: 超越表层答案正确性，通过精心设计的实验探究 LLM 内部是否真正表征了逻辑有效性，为可解释性研究提供了新视角。

##### **🤖 智能体与推理（规划、工具使用、多智能体、思维链）**

5.  **CivBench: A Long-Horizon Benchmark for Tool-Mediated Agents in Civilization VI**
    *   **作者**: A.T.D. Andrews, L. Wilkinson, J. Heagerty et al.
    *   **链接**: http://arxiv.org/abs/2609.02459v1
    *   **一句话说明**: 提出了一个极具挑战性的长周期（300+回合）智能体基准测试，全面评估 LLM 智能体在复杂策略游戏中的规划、记忆和工具调用能力。

6.  **UTP-Bench: Uncertainty-aware Travel Planning Benchmark**
    *   **作者**: E.R. Rao, P. Karmakar, S. Mallick et al.
    *   **链接**: http://arxiv.org/abs/2609.02421v1
    *   **一句话说明**: 针对旅行规划场景，构建了一个强调现实世界不确定性的基准，用于测试 LLM 智能体的动态调整和鲁棒性。

7.  **Coverage, Not Targeting: A Structural Regime in Multi-Turn Agent Credit Assignment**
    *   **作者**: C. Zhou, Q. Jiang, S. Wu et al.
    *   **链接**: http://arxiv.org/abs/2609.02417v1
    *   **一句话说明**: 对多轮智能体强化学习中的信用分配问题提出了新见解，指出在某些情况下“覆盖”策略优于“精准定位”策略。

8.  **Before the Script, Set the Stage: How Worldview Simulation Amplifies Psychologically Grounded Persuasion in Multi-Turn Jailbreaking**
    *   **作者**: S. Chen, H. Wang, X. Li et al.
    *   **链接**: http://arxiv.org/abs/2609.02414v1
    *   **一句话说明**: 提出 BLUEPRINT 框架，揭示了通过模拟世界观进行多轮越狱攻击的机制，为安全对齐研究提供了新的攻击面分析。

##### **🔧 方法与框架（新技术、基准测试、效率优化）**

9.  **Scalable Kronecker-Fisher Approximation: Efficient Hessian Analysis for Billion-Parameter Language Models Compression**
    *   **作者**: V. Yusupov, D. Cherniuk, E. Frolov
    *   **链接**: http://arxiv.org/abs/2609.02451v1
    *   **一句话说明**: 提出可扩展的 Kronecker-Fisher 近似方法，使得对数十亿参数模型进行高效的 Hessian 分析成为可能，用于指导模型压缩。

10. **RINSE: Robust Target-Time Normality Estimation for Zero-Shot Graph Anomaly检测**
    *   **作者**: T.R. Fuad, M.A. Jahin, A. Hussain
    *   **链接**: http://arxiv.org/abs/2609.02497v1
    *   **一句话说明**: 提出一种无需训练的零样本图异常检测框架，能直接在目标图上估计正常性，有效应对领域偏移问题。

11. **SALA: Semantic-Aware Logical Alignment for Complex Reasoning in In-Context Learning**
    *   **作者**: Z. Ji, W. Chen, Z. Chu et al.
    *   **链接**: http://arxiv.org/abs/2609.02336v1
    *   **一句话说明**: 改进了上下文学习中的示例检索方法，通过语义感知的逻辑对齐来选择更有效的演示，提升复杂推理性能。

##### **📊 应用（垂直领域、多模态、代码生成）**

12. **Automated Vulnerability Injection in Smart Contracts Using Large Language Models**
    *   **作者**: L. Migliaccio, R. Natella, N. Ivaki et al.
    *   **链接**: http://arxiv.org/abs/2609.02624v1
    *   **一句话说明**: 利用 LLM 自动向智能合约注入已知漏洞，为构建高质量的漏洞检测工具评估数据集提供了新方法。

13. **Predictors of Loneliness in Older Adults Using Multimodal分析 of Speech and Language**
    *   **作者**: V. Khandode, S.K. Kosuri, N.K.R. Sehgal et al.
    *   **链接**: http://arxiv.org/abs/2609.02606v1
    *   **一句话说明**: 通过分析语音和语言特征来预测老年人的孤独感，展示了多模态 AI 在公共卫生领域的应用潜力。

14. **Improving Health Literacy through Lay Summarization of Radiological Reports**
    *   **作者**: E.Ç. Evgin, İ. Karadeniz, O.T. Yıldız
    *   **链接**: http://arxiv.org/abs/2609.02396v1
    *   **一句话说明**: 评估了使用 BioNER 和 RAG 技术将专业放射学报告转化为通俗摘要的方法，旨在提升患者的健康素养。

15. **DeepAffinity: Long-Term Aspect Preference Prediction in eCommerce using Small Language Models**
    *   **作者**: Y. Eshel, G. Hadad, G. Feigenblat et al.
    *   **链接**: http://arxiv.org/abs/2609.02468v1
    *   **一句话说明**: 定义了“方面亲和力”预测任务，并利用小型语言模型在电商场景中实现长期、细粒度的用户偏好建模。

---

#### **研究趋势信号**
近期研究呈现出从“单点能力”向“系统化评估”和“深层机制”的转变。智能体评估不再局限于简单任务，而是走向长周期、高不确定性的真实世界模拟（如 CivBench, UTP-Bench）。同时，模型压缩、蒸馏等效率优化技术开始更深入地考虑公平性、偏见等社会性因素。安全研究也从单轮攻击转向对多轮、心理化越狱策略的剖析，表明领域正努力应对更复杂的挑战。

---

#### **值得精读**

1.  **CivBench: A Long-Horizon Benchmark for Tool-Mediated Agents in Civilization VI**
    *   **理由**: 该基准测试设计精良，直击当前智能体研究在长期规划、记忆和工具使用方面的核心痛点，其开源特性将极大推动相关领域的研究进展，是了解智能体评估前沿的必读论文。

2.  **Before the Script, Set the Stage: How Worldview Simulation Amplifies Psychologically Grounded Persuasion in Multi-Turn Jailbreaking**
    *   **理由**: BLUEPRINT 框架为理解 LLM 的脆弱性提供了全新的、更贴近真实攻击场景的视角。其因子化的策略空间分析不仅具有安全意义，对于理解 LLM 的社会推理和说服机制也具有启发性。

3.  **Debias-SparseGPT: Bias-Aware Pruning for Large Language Models**
    *   **理由**: 这篇工作揭示了一个被忽视的重要问题——模型压缩可能加剧偏见。它不仅是技术上的创新，更引发了对 AI 模型开发全流程中公平性责任的思考，对从事模型部署和优化的研究者至关重要。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*