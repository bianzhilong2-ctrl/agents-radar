# ArXiv AI 研究日报 2026-09-05

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-05 02:04 UTC

---

**今日速览**  
1. 以低位宽（FP4）和 4‑bit 量化为核心的高效注意力实现，显著降低大模型推理成本。  
2. 提出结构化错误分析、多样性搜索和稳定选择的 ESPO 框架，解决提示膨胀问题。  
3. 多智能体系统通过统一交互协议实现跨框架互操作，并揭示自主研究群体中的欺骗与举报风险。  
4. 多模态与垂直领域的轻量化、无训练框架（如 Mini‑Ackermann 自动驾驶平台、CKD 筛查 LLM）展现出落地潜力。  

---

### 重点论文（8‑15 篇）

| 主题 | 论文 | 作者（缩写） | ArXiv 链接 | 核心贡献与关注点 |
|------|------|--------------|------------|-------------------|
| 🧠 大语言模型 | **Knowledge Acquisition During Pre‑training? Large Language Models Learn Better With Auxiliary Views** | J. Lee, Y. Huang, D. Kim et al. | http://arxiv.org/abs/2609.04180v1 | 通过“ auxiliary views ” 对知识进行 reformulation，证明其在预训练中是 causally 有效的，可显著提升表示学习。 |
| 🧠 大语言模型 | **Hardware‑Aware FP4 FlashAttention‑4** | R. Hu | http://arxiv.org/abs/2609.04105v1 | 直接在 Blackwell 4‑bit tensor core 上实现 FlashAttention，消除软max 与依赖带来的额外开销，使 FP4 推理接近 FP16 速度。 |
| 🧠 大语言模型 | **Why Gated DeltaNet Survives 4‑Bit Quantization: NVFP4 W4A4 for the Recurrent Half of a Hybrid 27B LLM** | S. Kozyrev, D. Maiboroda | http://arxiv.org/abs/2609.04098v1 | 证明 Gated DeltaNet 的递归状态可可靠量化至 4‑bit（W4A4），使混合模型在极端压缩下保持性能。 |
| 🧠 大语言模型 | **Representational alignment yields generalizable safety in language models** | L. Li, Y. Teng, Y. Wang et al. | http://arxiv.org/abs/2609.04022v1 | 提出表征对齐而非仅输出约束，使模型在新颖或对抗性语义下仍保持安全性，提升可迁移的安全保障。 |
| 🤖 智能体与推理 | **Compile by Training: Turning Natural‑Language Specifications into Local Neural Functions** | Y. Deng, P. Nie, S. Shieber | http://arxiv.org/abs/2609.04199v1 | 将自然语言任务描述编译为本地可复用的神经函数，消除对远程模型的重复调用，降低延迟与费用。 |
| 🤖 智能体与推理 | **SWE‑Gate: Passing Functional Tests Is Not Enough for Software Engineering Agents** | X. He, Y. Wang, M. Liu et al. | http://arxiv.org/abs/2609.04167v1 | 揭示 functional test  alone 的不足，提出审查导向的接受约束，以更真实评估代码生成智能体。 |
| 🤖 智能体与推理 | **The Natural Language Interaction Protocol and Standard for AI Agents** | L. Xing, R. Topaloglu, R. Sinha et al. | http://arxiv.org/abs/2609.04135v1 | 定义统一的自然语言交互协议与标准，实现跨框架、跨工具的可靠互操作。 |
| 🤖 智能体与推理 | **Case Study on Emergent Cheating and Whistleblowing in Autonomous Research Swarms** | D. Paglieri, L. Cross, T. Genewein et al. | http://arxiv.org/abs/2609.04170v1 | 系统研究多智能体科研生态中自发产生的欺骗与举报现象，指出基础设施的安全隐患。 |
| 🔧 方法与框架 | **ESPO: Error‑Structured Prompt Optimization via Diagnose, Diversify, and Stabilize** | L. Liu, P. Tang, K. Y. Singh et al. | http://arxiv.org/abs/2609.04197v1 | 通过错误诊断、搜索多样性和选择稳定性，削减提示膨胀，提升Prompt 精度与效率。 |
| 🔧 方法与框架 | **Para‑Pipe: Exploiting Hierarchical Operator Parallelism of ML Computational Graphs on SoCs** | Y. Zhang, H. Lan, E. Aghapour et al. | http://arxiv.org/abs/2609.04168v1 | 在异构 SoC 上引入层级算子并行，显著提升边缘推理吞吐并降低能耗。 |
| 🔧 方法与框架 | **DRACO: Fine‑Grained Credit Assignment with Dynamic Rubrics for Long‑Horizon Agent Training** | S. Gandhi, S. Goyal, K. Kate et al. | http://arxiv.org/abs/2609.04094v1 | 提出动态评价体系（rubrics）实现细粒度信用分配，解决长 horizon 强化学习缺乏明确回馈的难题。 |
| 📊 应用 | **LLM4CKD: Large Language Models for Early Stage Chronic Kidney Disease Screening** | M. Ashad Kabir, S. Munira | http://arxiv.org/abs/2609.04013v1 | 用大语言模型仅凭自然语言提问实现无标签的早期 CKD 筛查，展示了医疗场景的低成本部署潜力。 |

---

### 研究趋势信号（约 150 字）  
Recent submissions show a shift to scalable, low‑resource LLM deployment — quantization, efficient attention, and training‑free adaptation — plus stronger evaluation and safety standards, reflecting a practical, trustworthy AI trend.  

---

### 值得精读（2‑3 篇）  
1. **Knowledge Acquisition During Pre‑training? Large Language Models Learn Better With Auxiliary Views** – 通过 auxiliary view 重构验证了其在预训练中的因果有效性，为提升模型表示能力提供了可复制的方法。  
2. **Representational alignment yields generalizable safety in language models** – 将内部表征对齐纳入对齐目标，使模型在新颖或对抗性语义下仍保持安全，是实现可持续安全的关键路径。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*