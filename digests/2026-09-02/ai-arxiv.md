# ArXiv AI 研究日报 2026-09-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-02 02:02 UTC

---

# ArXiv AI 研究日报

**发布日期：2026-09-02 | 收录论文：50 篇（cs.AI / cs.CL / cs.LG）**

---

## 一、今日速览

今日 ArXiv AI 投稿呈现出三大主线交汇的态势：大语言模型基础理论的深化（Transformer 注意力的代数结构、连续空间推理范式）、智能体系统的自主化与评估体系化（自动化智能体设计、RL 驱动的自我进化、多语言基准），以及多模态与垂直领域的精细化应用（病理图像标准化、临床长程推理、晶体结构生成）。其中，连续表示推理对传统离散思维链的替代、MoE 架构中细粒度路由机制的设计，以及 LLM-as-a-judge 的校准对齐问题，构成了本期最具前瞻性的研究方向。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Scaled Idempotence in Transformer Attention: Paired OV Geometry and Shared-Value Algebras](http://arxiv.org/abs/2609.01129v1)**
*作者：Jiming Feng, Junliang Li | cs.LG*
**核心贡献：** 发现 Transformer 注意力中存在一个普遍的代数正则性——稀疏的 OV 算子子在复合下近似闭合（$T^2 \approx \alpha T$），该规律在 2.8B–235B 参数规模的六个预训练模型上均成立。
**为何值得关注：** 这是对 Transformer 内部机制的基础理论洞察，可能为模型压缩、架构设计和注意力稀疏化提供理论依据。

**2. [Latent Recurrent Thoughts: Recurrent Refinement of Proposed Latents for Reasoning with Frozen LLMs](http://arxiv.org/abs/2609.01117v1)**
*作者：Zhaoliang Chen, Jie Fu | cs.AI, cs.CL*
**核心贡献：** 提出在模型连续表示空间中而非离散 token 空间中进行推理的方法，通过循环细化潜在向量实现思维链推理，规避了传统 CoT 中误差累积和轨迹模仿依赖。
**为何值得关注：** 代表了一种全新的推理范式——连续空间推理，有望解决离散思维链中错误传播和轨迹质量依赖的核心瓶颈。

**3. [Beyond Magnitude: Contrastive Routing for Modular Mixture-of-Experts](http://arxiv.org/abs/2609.01100v1)**
*作者：Nikolaos Xiros, Dimitrios Damianos, Maria-Eleni Zoumpoulidi et al. | cs.CL*
**核心贡献：** 提出对比路由机制——将每个 token 与该层隐藏状态的指数移动平均进行对比而非仅依赖共享表示路由，以促进专家专业化。
**为何值得关注：** 直接针对 MoE 架构中路由同质化的核心问题，为提升专家模型的容量效率提供了简洁而有效的改进。

**4. [Subliminal Learning as Trait-Direction Drift: A Mechanism and Targeted Control under SFT Distillation](http://arxiv.org/abs/2609.01091v1)**
*作者：Zhixuan Liu, Zhichen Dong, Yuyu Fan et al. | cs.LG*
**核心贡献：** 揭示了模型蒸馏中"潜学习"现象的机制——教师模型的系统提示偏见可通过语义干净的训练数据（如数值序列）隐性传递给学生模型，导致学生继承非预期偏好。
**为何值得关注：** 对模型蒸馏的安全性提出了重要警示，为可控知识传递提供了理论基础。

**5. [Post-hoc Alignment of LLM-judges to Human Judgment Distribution](http://arxiv.org/abs/2609.01073v1)**
*作者：Sebastian Steindl, Nikos Voskarides, Alberto Gasparin et al. | cs.CL*
**核心贡献：** 提出将 LLM 评判器与人类判断分布进行事后对齐的方法，充分利用人类标签变异性（HLV）中蕴含的信息，而非仅对比聚合标签。
**为何值得关注：** 改进 LLM-as-a-judge 评估框架的可靠性，对自动评估领域具有方法论意义（与论文 #4 同作者系列工作）。

**6. [Lagged Coupling: Internal Representations Become Readable Before They Become Causal](http://arxiv.org/abs/2609.01048v1)**
*作者：Xining Xun | cs.CL, cs.AI*
**核心贡献：** 在 Pythia 系列（160M–12B）上发现线性探针可在训练早期读取目标变量，但沿该方向进行操控在 43/48 个检查点中仍为零效果——表示可读性与因果可控性之间存在系统性滞后。
**为何值得关注：** 对表征学习中的"可读性≠可控性"悖论提供了系统性实证，对模型可解释性研究具有深远影响。

**7. [PCoMoE: Shifting MoE Inference from Monolithic Expert Selection to Fine-Grained Path Composition](http://arxiv.org/abs/2609.01024v1)**
*作者：Ziyan Gan, Fangxin Liu, Chenyang Guan et al. | cs.CL*
**核心贡献：** 提出将 MoE 推理从整体专家选择转变为细粒度路径组合的框架，打破 rigid whole-expert 抽象。
**为何值得关注：** 为 MoE 推理效率优化提供了新思路，可能影响未来大规模 LLM 的部署架构。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**8. [ARISE-RL: Agentic Rubric-Grounded Iterative Self-Evolution with Reinforcement Learning](http://arxiv.org/abs/2609.01058v1)**
*作者：Fanrui Zhang, Ruixue Ding, Qiang Zhang et al. | cs.AI*
**核心贡献：** 提出基于评分标准的迭代自我进化 RL 训练框架，通过可验证评分标准解决开放域智能体训练中缺乏黄金答案和奖励不稳定的问题。
**为何值得关注：** 为解决开放域智能体 RL 训练中的奖励稀疏性和不稳定性提供了系统性方案。

**9. [WorldBench: Culturally Grounded Benchmark for Multilingual Agents](http://arxiv.org/abs/2609.01056v1)**
*作者：Leonardo Ranaldi, Sherrie Shen, Jushi Kai et al. | cs.AI, cs.CL*
**核心贡献：** 提出一个综合性的多语言智能体基准测试，重点考察状态保持、跨语言性能和真实场景应用能力。
**为何值得关注：** 填补了现有智能体基准在跨语言和状态保持评估方面的空白，对推动多语言智能体发展具有重要意义。

**10. [AgentFactory: Towards Automated Agentic System Design and Optimization](http://arxiv.org/abs/2609.01045v1)**
*作者：Enci Zhang, Haofeng Wang, Yuesheng Zhu et al. | cs.AI*
**核心贡献：** 提出自动化智能体系统设计与优化的框架，减少当前手动设计智能体系统所需的大量人工投入。
**为何值得关注：** "用 AI 设计 AI 智能体"的自动化范式，是智能体领域的重要发展方向。

**11. [Spawn Freely, Act Sparingly: Progressive Risk Vesting for Recursive LLM-Agent Trees](http://arxiv.org/abs/2609.01035v1)**
*作者：Molly Wang | cs.AI, cs.LG, math.PR*
**核心贡献：** 提出递归 LLM 智能体树的渐进风险授权机制，区分沙箱生成与能力激活两种权限级别，解决分支何时获得工具调用权的问题。
**为何值得关注：** 为多智能体系统中的安全与效率权衡提供了理论框架，对生产级智能体系统设计具有指导意义。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**12. [ClinTraceBench: Source-Verifiable Longitudinal Clinical Reasoning over EHR-Derived Dialogues](http://arxiv.org/abs/2609.01111v1)**
*作者：Huimin Wang, Zhengyi Zhao, Yutian Zhao | cs.CL*
**核心贡献：** 构建了一个基于电子健康记录对话的临床推理基准，要求 LLM 在多就诊轨迹中进行可溯源的长程推理，并系统评估了不同历史表示方法的纵向信号保持能力。
**为何值得关注：** 首次系统测量临床 LLM 中的纵向推理能力，对医疗 AI 的可信推理评估具有里程碑意义。

**13. [SinkPruner: Sink-Free Visual Token Pruning for Multimodal Large Language Models](http://arxiv.org/abs/2609.01004v1)**
*作者：Shiyu Li, Zi-Yuan Hu, Shijia Huang et al. | cs.CV, cs.AI, cs.CL*
**核心贡献：** 提出无沉没视觉 token 修剪方法，通过去除冗余视觉 token 降低多模态大语言模型的推理开销，同时避免信息丢失。
**为何值得关注：** 直接解决 MLLM 长视觉序列推理

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*