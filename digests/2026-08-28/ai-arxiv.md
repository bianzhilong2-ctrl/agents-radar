# ArXiv AI 研究日报 2026-08-28

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-28 08:01 UTC

---

# ArXiv AI 研究日报
**2026-08-28 · 共 50 篇新发论文**

---

## 一、今日速览

今日投稿呈现两个鲜明主线：**推理能力后训练进入"精细化阶段"**——多篇论文围绕 RLVR 训练中的熵崩溃、专家融合、测试时策略优化等问题展开（如 #4、#12、#14、#32）；**智能体研究走向"工程化与可审计"**——从 Agent Skill 的持久化、代码评审 benchmark、到 Persona-Execution 分离架构与 harness 进化（#2、#5、#9、#40）。此外，世界模型与视频生成（#15、#18、#26、#34）作为模态基础设施持续输出新工作，值得关注。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1)**
- 作者：Kairong Luo, Jiarui Cui, Yaorui Yin 等
- 核心：在单卡 RTX 5090、5000 美元预算内完成 2B 模型预训练，验证低成本可复现的 LLM 训练路径，对学术社区意义重大。

**2. [TTPO: Test-Time Policy Optimization](http://arxiv.org/abs/2608.27448v1)**
- 作者：Aozhe Wang, Zhengxi Lu, Jianze Wang 等
- 核心：提出无监督测试时训练策略优化的方法，打破 RLVR 对真值标签的依赖。

**3. [Boosting LLM Exploration via Weak-Model Guidance in RLVR](http://arxiv.org/abs/2608.27420v1)**
- 作者：Xingyu Shen, Huishuai Zhang, Peng Li 等
- 核心：用弱模型引导缓解 RLVR 中的熵崩溃，提升大 k 值的 pass@k 性能。

**4. [Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO](http://arxiv.org/abs/2608.27351v1)**
- 作者：Yunpeng Ba, Zhi Zheng, Yue Xie 等
- 核心：系统分析 ES 范式在后训练中的优化行为，揭示其在推理覆盖度上优于 GRPO 的机制。

**5. [Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search](http://arxiv.org/abs/2608.27266v1)**
- 作者：Yuan Chang, Xiaoqi Chen
- 核心：质疑复杂 prompt 搜索的必要性，倡导更朴素的 prompt 优化方法用于递归自我改进。

**6. [SCIT: Testing Causal Cache Carriers in Latent Chain-of-Thought Models](http://arxiv.org/abs/2608.27265v1)**
- 作者：Yi Ding, Lijun Huang, Menglin Yang
- 核心：为隐式 CoT 模型提出因果缓存交换测试协议，识别真正的因果推理对象。

---

### 🤖 智能体与推理

**7. [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1)**
- 作者：Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng 等
- 核心：把智能体经验编译为持久化的 wiki 知识，实现可演化的技能库管理。

**8. [SWE-Prime: Fewer Trajectories, Better Performance](http://arxiv.org/abs/2608.27449v1)**
- 作者：Dewu Zheng, Ruizhe Ye, Yanlin Wang 等
- 核心：提出高质量轨迹筛选准则，证明少量优质 SFT 轨迹即可超越大规模数据集训练效果。

**9. [MCR-Bench: From Static to Dynamic Benchmarking Real-World Code Review](http://arxiv.org/abs/2608.27442v1)**
- 作者：Dewu Zheng, Yanlin Wang, Xiwen Wang 等
- 核心：构建动态交互式代码评审 benchmark，贴近真实多轮评审流程。

**10. [Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit](http://arxiv.org/abs/2608.27427v1)**
- 作者：Yisen Xi
- 核心：提出 PES 架构模式，将人格演化与可审计执行解耦，适配受监管组织的部署需求。

**11. [INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment](http://arxiv.org/abs/2608.27348v1)**
- 作者：Yutong Zhang, Jianshuo Dong, Peng Xu 等
- 核心：通过 CoT 监控识别智能体意图-执行的错位，追踪有害行为根源。

**12. [RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution](http://arxiv.org/abs/2608.27439v1)**
- 作者：Junjie Zhang, Hui Liu, Kecheng Chen 等
- 核心：经验驱动的红队智能体，针对产品级 Agent 越狱与工具滥用进行持续演化攻击。

**13. [What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](http://arxiv.org/abs/2608.27260v1)**
- 作者：Xingshan Zeng, Zishan Xu, Boju Zhang 等
- 核心：从环境-任务-交互-信号一致性维度，剖析智能体数据生成的质量要素。

---

### 🔧 方法与框架

**14. [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1)**
- 作者：Yufan Wu, Yinghui He, Zhengyi Hu 等
- 核心：从弱模型失败模式引导强模型推理，无需重复生成或外部验证即可实现推理时泛化。

**15. [Consolidating RLVR Capabilities Across Domains: Fusion Paradigms](http://arxiv.org/abs/2608.27409v1)**
- 作者：Siye Wu, Kai Yang, Yuchen Cai 等
- 核心：系统梳理 RLVR 多领域能力融合的三种范式（合并/数据/参数），为多能力 LLM 后训练提供路线图。

**16. [Beyond F1: Evaluating Coverage and Failure Recovery in AI Model Security Scanners](http://arxiv.org/abs/2608.27424v1)**
- 作者：Qianlong Lan, Vinothini Pandurangan, Anuj Kaul 等
- 核心：超越 F1 指标，评估 ModelScan 等模型安全扫描器的覆盖度与失效恢复能力。

---

### 📊 应用

**17. [CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators](http://arxiv.org/abs/2608.27406v1)**
- 作者：Kechen Liu, Ola Shorinwa
- 核心：跨本体视频世界模型，首次实现异构机器人数据的零样本物理仿真。

**18. [PAWBench: How Far Are We from Probabilistically Aligned World Modeling?](http://arxiv.org/abs/2608.27345v1)**
- 作者：Yuandong Pu, Le Zhuo, Sayak Paul 等
- 核心：提出概率对齐世界建模基准，评估生成模型对真实物理分布的捕捉能力。

**19. [CAST: Making Clinical Language Models Auditable](http://arxiv.org/abs/2608.27397v1)**
- 作者：Jin Mu, Guanhua Chen
- 核心：基于 SAE 概念引导的微调框架，提升临床 LM 在部署漂移下的鲁棒性与可审计性。

**20. [LLMs Can Design Near-Optimal OR Algorithms](http://arxiv.org/abs/2608.27296v1)**
- 作者：Jackie Baek
- 核心：证明 LLM 能在库存控制、排队网络、组合优化等经典 OR 问题上设计近最优算法。

**21. [BrailleBench: Multi-Criteria Braille Comprehension in LLMs](http://arxiv.org/abs/2608.27268v1)**
- 作者：Jinghan Zhang, Fengran Mo, Zhiyu Chen 等
- 核心：首套多维度盲文理解基准，揭示主流 LLM 对盲聋用户群体的可用性差距。

---

## 三、研究趋势信号

今日投稿清晰呈现三个新兴方向：**（1）RLVR 后训练走向"机制级优化"**——研究焦点从单纯性能提升转向熵控制、专家融合、ES vs GRPO 等底层机制（#4、#12、#14、#32）；**（2）智能体安全与可审计性成为工程落地的核心瓶颈**——身份-执行分离架构、红队智能体、意图追踪与 CoT 因果测试（#9、#11、#12、#6）共同构成可信赖 Agent 的方法论基石；**（3）跨模态世界模型在物理一致性上提出新基准**——CLAP、PAWBench 等工作标志着从"生成逼真视频"向"建模真实分布"的转向（#15、#34）。此外，低成本预训练（#25）与领域可解释性（#17、#21）共同体现了 AI 民主化与可信化并行的研究张力。

---

## 四、值得精读

**1. [WikiSkill (arxiv.org/abs/2608.27454v1)](http://arxiv.org/abs/2608.27454v1)**
技能持久化是 Agent 长期进化的关键基础设施。本文从经验编译、知识组织、演化机制三层展开，对构建生产级持续学习智能体具有体系级参考价值。

**2. [Consolidating RLVR Capabilities Across Domains (arxiv.org/abs/2608.27409v1)](http://arxiv.org/abs/2608.27409v1)**
首次系统化梳理 RLVR 多能力融合的三种范式（合并/数据/参数），为"如何避免一个专家模型管一项能力"的工程痛点提供方法论地图，研究与工程双重价值高。

**3. [SCIT: Testing Causal Cache Carriers (arxiv.org/abs/2608.27265v1)](http://arxiv.org/abs/2608.27265v1)**
针对隐式 CoT 这一前沿但缺乏解释工具的范式，提出严格的因果交换测试，方法论上具有开创性，对未来可解释推理研究影响深远。

---

*日报生成于 2026-08-28 · 数据来源：ArXiv cs.AI / cs.CL / cs.LG*

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*