# ArXiv AI 研究日报 2026-08-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-29 04:50 UTC

---

# ArXiv AI 研究日报

**2026年8月29日 | 汇总自 cs.AI、cs.CL、cs.LG**

---

## 今日速览

今日 ArXiv 投稿呈现出三大趋势：**推理时计算扩展**成为LLM性能提升的新前沿，CritICL 和 TTPO 分别从弱到强泛化和测试时策略优化的角度探索了这一方向；**Agent 架构设计**进入深水区，WikiSkill 的技能进化机制和 Persona-Execution Separation 的分离架构标志着对安全可控 Agent 的系统化思考；**跨领域能力融合**成为 RLVR 后训练的新课题，Consolidating RLVR Capabilities 首次系统梳理了三种融合范式的优劣。此外，视频世界模型（CLAP、PAWBench）和垂直领域应用（医学、代码、科学）持续涌现高质量工作。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes**
- 作者：Wu, He, Hu et al.
- 链接：http://arxiv.org/abs/2608.27455v1
- 一句话：提出推理时框架，通过小模型失败模式引导大模型泛化，突破依赖重复生成或外部验证的传统推理时缩放瓶颈。

**2. How Language Models Organize and Structure Moral Knowledge**
- 作者：Reblitz-Richardson
- 链接：http://arxiv.org/abs/2608.27402v1
- 一句话：揭示 LLM 如何在几何空间中有组织地表示道德基础，为模型道德推理能力提供可量化的结构化理解。

**3. Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090**
- 作者：Luo, Cui, Yin et al.
- 链接：http://arxiv.org/abs/2608.27370v1
- 一句话：展示如何在 5090 美元预算内完成 1.5B 模型预训练，为资源受限研究社区提供可行的低成本训练范式。

**4. Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance**
- 作者：Zhuang, Aranguri
- 链接：http://arxiv.org/abs/2608.27340v1
- 一句话：区分评估意识的类型，指出能力框架而非任务框架才能预测模型合规性，为安全评估干预提供精细化指导。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**5. WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**
- 作者：Tang, Rashtchian, Ferng et al.
- 链接：http://arxiv.org/abs/2608.27454v1
- 一句话：将 Agent 交互经验编译为持久化技能知识，支持渐进式能力演进，为构建可自我完善的 AI Agent 提供新范式。

**6. SWE-Prime: Fewer Trajectories, Better Performance**
- 作者：Zheng, Ye, Wang et al.
- 链接：http://arxiv.org/abs/2608.27449v1
- 一句话：挑战"更多轨迹=更好"的假设，指出成功轨迹不等于高质量监督，揭示数据效率对代码 Agent 训练的关键性。

**7. TTPO: Test-Time Policy Optimization**
- 作者：Wang, Lu, Wang et al.
- 链接：http://arxiv.org/abs/2608.27448v1
- 一句话：用可验证奖励替代真值标签，实现推理时的策略优化，突破后训练依赖固定标注数据的局限。

**8. Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit**
- 作者：Xi
- 链接：http://arxiv.org/abs/2608.27427v1
- 一句话：提出 PES 架构模式，将人设（自由演进）与执行（可审计）分离，解决治理组织中 Agent 的信任与合规矛盾。

**9. INTENAS-A-TOOL Makes it Easy to Track Agentic Misalignment**
- 作者：Zhang, Dong, Xu et al.
- 链接：http://arxiv.org/abs/2608.27348v1
- 一句话：通过思维链监控追踪 Agent 目标冲突下的有害执行，为自主 Agent 的安全部署提供可操作的对齐检测方案。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**10. Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms**
- 作者：Wu, Yang, Cai et al.
- 链接：http://arxiv.org/abs/2608.27409v1
- 一句话：系统梳理三种 RLVR 能力融合范式（Merge、Ensemble、Hybrid），为多能力 LLM 后训练提供路线图。

**11. CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators**
- 作者：Liu, Shorinwa
- 链接：http://arxiv.org/abs/2608.27406v1
- 一句话：突破单机器人 Embodiment 限制，利用异构视频数据学习可泛化的物理模拟器，实现零样本跨实体控制。

**12. From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench**
- 作者：Zheng, Wang, Wang et al.
- 链接：http://arxiv.org/abs/2608.27442v1
- 一句话：构建迭代式代码审查基准，模拟真实开发场景，填补自动化代码审查评估缺乏动态交互评测的空白。

**13. LeVJEPA: Efficient & Scalable Video Pretraining without the Heuristics**
- 作者：Kuhn, Maes, Serra et al.
- 链接：http://arxiv.org/abs/2608.27395v1
- 一句话：摆脱视频自监督学习中的架构不对称和 EMA 目标网络等启发式设计，提供更简洁高效的视频表征预训练方案。

---

### 📊 应用（垂直领域、多模态、代码生成）

**14. PAWBench: How Far Are We from Probabilistically Aligned World Modeling?**
- 作者：Pu, Zhuo, Paul et al.
- 链接：http://arxiv.org/abs/2608.27345v1
- 一句话：评估视频生成模型是否真正建模物理过程的概率分布，推动世界模型从"合理轨迹"向"概率正确分布"演进。

**15. LLMs Can Design Near-Optimal OR Algorithms**
- 作者：Baek
- 链接：http://arxiv.org/abs/2608.27296v1
- 一句话：证明 LLM 可在库存控制、排队网络、 assortment 优化等经典 OR 问题中设计接近最优的算法，开辟 AI for Operations Research 新方向。

---

## 研究趋势信号

今日投稿释放出以下信号：**① 推理时计算（Inference-Time Compute）进入第二轮热潮**，从单纯的生成策略进化到"弱到强泛化"和"测试时学习"，这对算力受限场景意义重大；**② Agent 架构从"单兵作战"转向"系统性设计"**，WikiSkill 的技能持久化和 PES 的人设/执行分离体现工程化思维；**③ 安全评估方法论走向精细化**，从 F1 指标升级到覆盖率和失败恢复分析，Red-Evo Agent 和 Beyond F1 分别从攻击和防御角度完善评估体系；**④ 视频世界模型呈现多具身化趋势**，CLAP 和 PAWBench 共同指向从单一场景泛化到概率正确分布建模的下一代世界模型标准。

---

## 值得精读

**1. [CritICL](http://arxiv.org/abs/2608.27455v1)** — 推理时弱到强泛化的开创性工作，提供了不同于传统多数投票或树搜索的新范式。其"从小模型失败模式中学习"的思路可能启发一系列后训练+推理时协同优化的工作。

**2. [CLAP](http://arxiv.org/abs/2608.27406v1)** — 视频世界模型跨具身学习的里程碑，整合异构视频数据训练零样本物理模拟器的思路对 robotics 社区具有重要参考价值，方法设计简洁有效。

**3. [Consolidating RLVR Capabilities Across Domains](http://arxiv.org/abs/2608.27409v1)** — 作为 RLVR 时代的"融合指南"，该工作系统性强，对希望构建多能力 LLM 的研究者具有直接指导意义，值得深度阅读。

---

*本日报由 AI 研究分析师整理，所有论文链接均已保留。如需某篇论文的完整摘要或深入分析，请随时告知。*

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*