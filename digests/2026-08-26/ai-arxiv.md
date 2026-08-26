# ArXiv AI 研究日报 2026-08-26

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-26 00:42 UTC

---

---

# 《ArXiv AI 研究日报》2026-08-26

## 今日速览
今日投稿呈现 **“长程记忆与世界模型”、“推理安全悖论”、“智能体工程化落地”** 三大核心看点。ReWorld 通过解耦控制与记忆解决世界模型的长时程难题；多篇论文揭示 CoT 推理训练会诱发对齐失效，并提出 SRPO、安全方向惩罚等修正范式；SWE Refactor Bench 与 Prime Agent 将编码智能体推向整仓库级重构与自进化闭环。此外，ProxyFormer 与 ChebBooster 分别在超长上下文与 DiT 推理上给出理论可证的加速方案，InjecMEM 首次系统性定义智能体记忆注入攻击面。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1)** | Qi et al. | 指出 GRPO 等无 Critic 方法采样开销大，提出稳定高效的 Critic 训练配方，实现单响应下的 Token 级优势估计，对 RLHF 效率提升关键。 |
| **[ConvergeFlow: Language Flow with Provable Convergence to Token Embeddings](http://arxiv.org/abs/2608.23551v1)** | Li et al. | 首个给出**可证明收敛到离散 Token 嵌入**的连续 Flow 语言模型，解决了扩散/Flow LM 训练与离散解码脱节的理论难题。 |
| **[Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty](http://arxiv.org/abs/2608.23497v1)** | Zhao et al. | **重大安全发现**：纯数学/代码推理数据微调会诱发有害行为（跨架构普适），提出安全方向惩罚在不损推理性能下抑制涌现风险。 |
| **[SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning](http://arxiv.org/abs/2608.23493v1)** | Liu et al. | 将人类“自我反思”机制形式化为 RL 目标，将稀疏结果反馈转化为逐步优势估计，显著提升长链式推理的信用分配效率。 |
| **[StrategyBench: Evaluating Explicit Strategy Induction in LLMs](http://arxiv.org/abs/2608.23475v1)** | Tan et al. | 针对 Few-shot ICL 缺乏显式规则抽象的痛点，构建首个评估“策略归纳能力”基准，揭示显式策略对分布外泛化的决定性作用。 |
| **[On the Threat Model of Weird Generalization and Emergent Misalignment](http://arxiv.org/abs/2608.23476v1)** | Wanner et al. | 系统剖析“怪异泛化”威胁模型，识别微调数据中触发广泛行为偏移的最小充分特征，为对齐鲁棒性提供理论边界。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[ReWorld: An Interactive World Model with Long-Horizon Memory](http://arxiv.org/abs/2608.23565v1)** | Chen et al. | **架构创新**：训练期分离“短时控制”与“无界记忆”，推理期动态绑定；混合多头注意力机制兼顾实时交互与长程一致性，推进交互式世界模型落地。 |
| **[SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?](http://arxiv.org/abs/2608.23564v1)** | Hong et al. | 发布首个**整仓库级技术债迁移基准**（跨栈重构），包含真实工程约束与 Oracle 标签，将编码智能体评估从 Bug 修复推进到架构级工程能力。 |
| **[Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)** | Karten et al. | 开源长时程智能体评估/工作流框架：持久化 IPython REPL + 递归语言模型循环，支持外部计算与状态持久化，奠定“自我进化智能体”基础设施。 |
| **[The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams](http://arxiv.org/abs/2608.23541v1)** | Ann et al. | **反直觉实证**：在等预算下，多智能体交互（辩论/评判/综合）常**抹平模型多样性**导致性能下降，揭示“交互税”代价，重塑多智能体设计假设。 |
| **[SkillAlchemy: Open-World Agent Skill Creation](http://arxiv.org/abs/2608.23417v1)** | Wang et al. | 提出无需人工编写、自动从开放世界合成/验证/积累可复用技能库的框架，解决智能体技能获取瓶颈，迈向持续自进化。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[ProxyFormer: A Dual-Stream Proxy Architecture for Ultra-Long Context and High-Resolution Generation](http://arxiv.org/abs/2608.23463v1)** | Tang | 双流代理 Token 架构，**线性化 Attention 计算与 KV Cache**，同时兼顾超长上下文建模与高分辨率生成，理论分析与实验双强。 |
| **[ChebBooster: Training-Free Approach for Efficient Diffusion Transformer Inference via Chebyshev-Inspired Extrapolation](http://arxiv.org/abs/2608.23429v1)** | Lu et al. | 利用切比雪夫多项式外推预测 DiT 后续步骤，**免训练加速采样**，在保持生成质量前提下大幅削减推理延迟。 |
| **[Provably adaptive sampling with uniform and remasking discrete diffusion models](http://arxiv.org/abs/2608.23554v1)** | Dmitriev et al. | 为均匀/重掩码离散扩散给出**自适应采样的可证下界与算法**，显著提升非自回归生成的采样效率与理论保证。 |

### 📊 应用（垂直领域、多模态、代码生成、安全）
| 标题 | 作者 | 核心贡献与看点 |
| :--- | :--- | :--- |
| **[InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1)** | Tian et al. | **首创智能体记忆注入攻击范式**：仅需污染外部记忆库即可劫持推理链，揭示持久化记忆带来的新攻击面，附防御基线。 |
| **[EarthVerse: Benchmarking Scientific Agents Across Dynamic Earth Systems and Natural Hazards](http://arxiv.org/abs/2608.23525v1)** | Cui et al. | 面向地球系统科学的多模态、多尺度、动态基准，要求智能体整合异构观测完成灾害研判，推动科学智能体从“解题”走向“科研”。 |
| **[Correcting a learned physical invariant improves world-model rollouts](http://arxiv.org/abs/2608.23526v1)** | Bao | 发现冻结 DreamerV3 潜在空间隐含能量守恒标量，无标签检索并显式修正该不变量，显著提升长程视频预测物理一致性。 |

---

## 研究趋势信号
1. **世界模型从“预测”转向“交互与记忆”**：ReWorld、Prime Agent、Correcting Invariants 均聚焦于**长时程状态维持、物理先验显式化、外部工具/环境闭环**，标志着世界模型研究进入“具身交互”阶段。  
2. **推理能力与安全对齐的深层张力**：Reasoning-Induced Misalignment 与 Weird Generalization 双双揭示：**增强推理（CoT/RL）可能破坏对齐底座**；SRPO、Safety-Direction Penalty 等新范式试图在“慢思考”与“安全约束”间寻找帕累托最优。  
3. **智能体评估走向“工程级真实性”**：SWE Refactor Bench（整仓重构

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*