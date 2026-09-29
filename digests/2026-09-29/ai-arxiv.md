# ArXiv AI 研究日报 2026-09-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-29 03:21 UTC

---

# ArXiv AI 研究日报 · 2026-09-29

---

## 今日速览
今日 50 篇新投稿集中在 **大模型推理效率与对齐、智能体多轮交互与蒸馏、结构化知识/因果发现、以及垂直领域（医疗、金融、代码、脑机、等离子体）的落地验证** 四大方向。亮点包括：首个针对“价值轴”的目标导向机制解释、面向多 LoRA 智能体的 KV Cache 共享方案、带反馈的因果发现统计下界、以及首个面向动态图异常检测的智能体全生命周期基准。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 标题 | 作者 | 核心贡献 & 关注理由 |
|------|------|---------------------|
| **Steering Language Model Goals with Value Transplant** [[2609.34056v1](http://arxiv.org/abs/2609.34056v1)] | Jiang & Roger | 提出“价值移植”机制，沿模型内部“价值轴”干预目标导向，为推理模型对齐提供可解释的内部控制手柄。 |
| **Faithful Activation Verbalization: Reducing Hallucinations in LLM Representation Interpretation** [[2609.34033v1](http://arxiv.org/abs/2609.34033v1)] | Zhao et al. | 改进激活口语化方法，显著减少神经元/层解释中的幻觉，提升机制可解释性可靠性。 |
| **On the Token Value Inequality in Efficient Reasoning** [[2609.33970v1](http://arxiv.org/abs/2609.33970v1)] | Zeng et al. | 量化 CoT 中每个 token 的边际贡献，揭示大量推理 token 低价值，为动态截断/压缩提供理论依据。 |
| **GroupMask: Layer-Adaptive Group-wise Sparsity for Semi-Structured LLM Pruning** [[2609.33977v1](http://arxiv.org/abs/2609.33977v1)] | Li et al. | 首次在半结构化剪枝中实现层自适应组稀疏，突破固定 N:M 模式，在同等加速下显著恢复精度。 |
| **Simple Diffusion Language Models Are More Effective Few-Step Generators Than Reported** [[2609.33947v1](http://arxiv.org/abs/2609.33947v1)] | Amin et al. | 通过改进采样调度与噪声预测目标，让基础扩散语言模型在极少步数下逼近自回归质量，挑战“扩散需大量步数”共识。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 标题 | 作者 | 核心贡献 & 关注理由 |
|------|------|---------------------|
| **UOPD: Uncertainty-Aware Intervention for On-Policy Distillation of Multi-Turn Agents** [[2609.34036v1](http://arxiv.org/abs/2609.34036v1)] | Zhang et al. | 引入教师置信度作为不确定性信号，在关键决策步干预学生轨迹，解决多轮蒸馏中错误累积导致的分布偏移。 |
| **Opera: A Verbal Critic Framework for Long-horizon Coding Agents** [[2609.33987v1](http://arxiv.org/abs/2609.33987v1)] | Mei et al. | 设计“口语批评家”跟踪反馈后执行效果，实现长链代码任务的及时纠偏，显著提升通过率。 |
| **Beyond Solo and Consistency: Vindicating Multi-Agent Debate via Conditional Progressive Pruning** [[2609.33974v1](http://arxiv.org/abs/2609.33974v1)] | Ye et al. | 提出条件渐进剪枝机制，动态剔除低质量辩论分支，在保持多智能体辩论优势的同时大幅降低推理开销。 |
| **Maat: Independent Deterministic Contract-Based Governance for Multi-Agent LLM Workflows** [[2609.34017v1](http://arxiv.org/abs/2609.34017v1)] | Elina | 基于确定性合约而非 LLM 评判器治理多智能体工作流，从架构层面阻断错误级联，提供可形式化验证的可靠性保证。 |
| **ICMAPE: In-Context Multiagent Pure Exploration** [[2609.33986v1](http://arxiv.org/abs/2609.33986v1)] | Hu et al. | 将主动序列假设检验扩展到上下文学习多智能体设定，首创无外部奖励的纯探索协作范式。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 标题 | 作者 | 核心贡献 & 关注理由 |
|------|------|---------------------|
| **PReCache: Efficient KV Cache Sharing for Multi-LoRA Agents via Low-Rank Precomputation and Neutral Reconstruction** [[2609.34054v1](http://arxiv.org/abs/2609.34054v1)] | Jeon et al. | 低秩预计算+中性重构共享 KV Cache，消除多 LoRA 智能体重复编码共享轨迹的显存/算力冗余。 |
| **The Statistical Cost of Causal Discovery with Feedback** [[2609.34050v1](http://arxiv.org/abs/2609.34050v1)] | Oh et al. | 首次给出带反馈（循环）线性非高斯模型中精确凝聚恢复的样本复杂度下界，填补因果发现理论空白。 |
| **DynGraphAgentBench: A Benchmark for Agentic Lifecycle Control in Dynamic Graph Anomaly Detection** [[2609.33980v1](http://arxiv.org/abs/2609.33980v1)] | Han et al. | 首个面向动态图异常检测“全生命周期智能体控制”可执行基准，包含延迟反馈、分布漂移等真实挑战。 |
| **Thinking Outside the Box: Retention and Transmission of Information in Sliding-Window KV Inference** [[2609.34049v1](http://arxiv.org/abs/2609.34049v1)] | DeLise & Cromelin | 理论分析滑动窗口 KV 推理中信息保留/传递机制，揭示无需训练即可在固定显存下处理无限长序列的条件。 |
| **From HL to H+L-1 Parameters: A Hankel-Toeplitz Forecaster for Long-Term Time Series Forecasting** [[2609.33984v1](http://arxiv.org/abs/2609.33984v1)] | Zhang et al. | 用经典平稳预测理论指导参数共享，将线性预测器参数量从 HL 压缩至 H+L-1，保持 SOTA 精度。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 标题 | 作者 | 核心贡献 & 关注理由 |
|------|------|---------------------|
| **Large Language Models for Structured Clinical Data Analysis: Dual-Agent Grounding and Validation** [[2609.34039v1](http://arxiv.org/abs/2609.34039v1)] | Dehkalani et al. | CLEAR-Med 双智能体框架：一_agent_生成 SQL，一_agent_独立验证，解决结构化临床数据 NL2SQL 的幻觉与可信度问题。 |
| **EHRAdapt: Adapting Pretrained Language Models to Electronic Health Records with Semantic Priors for Rare Clinical Events** [[2609.34007v1](http://arxiv.org/abs/2609.34007v1)] | Goncalves et al. | 直接将 (time, modality, code) 元组映射为语义感知嵌入，避免文本序列化膨胀，显著提升罕见事件预测。 |
| **RICE-Alpha: Reliability-Informed Correction with Event Graphs for LLM-Agent Stock Forecasting** [[2609.34004v1](http://arxiv.org/abs/2609.34004v1)] | Liu et al. | 引入事件图建模企业新闻时序依赖，结合可靠性加权修正历史证据，提升金融智能体预测鲁棒性。 |
| **T-SNN: Temporal Simplicial Neural Network for EEG Decoding** [[2609.34002v1](http://arxiv.org/abs/2609.34002v1)] | Malik et al. | 用时序单纯复形捕捉脑区高阶动态交互，在主体无关 MI-EEG 解码中超越图/时序基线。 |
| **ARCH-B: Architectural Representation, Comprehension and Hierarchy Benchmark** [[2609.34047v1](http://arxiv.org/abs/2609.34047v1)] | Parikh & Garcia del Castillo y Lopez | 首个跨照片/平面/剖面/渲染图的建筑识别基准，揭示多模态模型在几何一致性理解上的系统性短板。 |

---

## 研究趋势信号
1. **内部机制干预成主流对齐路径**：从“价值轴”操控到激活口语化、Token 价值量化，研究正从外部 RLHF 转向可解释的内部表示编辑。  
2. **多智能体系统走向“工程化治理”**：合约治理、不确定性干预蒸馏、条件剪枝辩论、口语批评家等，聚焦可靠性、可审计性与推理预算的三角权衡。  
3. **结构化先验回归**：Hankel-Toeplitz 参数共享、事件图、单纯复形、EHR 元组嵌入等，均在用领域结构替代盲目堆参数，体现“小模型+强先验”范式的回潮。  
4. **基准向“全生命周期/动态环境”演进**：DynGraphAgentBench、ARCH-B、ICMAPE 均强调分布漂移、延迟反馈、跨模态一致性等部署实况，推动评估从静态榜单转向可执行环境。

---

## 值得精读

| 论文 | 理由 |
|------|------|
| **Steering Language Model Goals with Value Transplant** [[2609.34056v1](http://arxiv.org/abs/2609.34056v1)] | 首次将“价值轴”从现象描述转化为可干预的控制变量，为推理模型对齐提供了可复现的机制级手柄，理论与实验并重。 |
| **PReCache: Efficient KV Cache Sharing for Multi-LoRA Agents** [[2609.34054v1](http://arxiv.org/abs/2609.34054v1)] | 解决多 LoRA 协作部署的核心显存瓶颈，低秩预计算+中性重构方案通用性强，极具工程落地价值。 |
| **The Statistical Cost of Causal Discovery with Feedback** [[2609.34050v1](http://arxiv.org/abs/2609.34050v1)] | 给出循环因果模型精确恢复的首个样本复杂度下界，理论严谨且填补空白，是因果发现与反馈系统交叉的里程碑式工作。 |

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*