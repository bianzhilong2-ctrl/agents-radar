# ArXiv AI 研究日报 2026-10-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-23 02:35 UTC

---



好的，这是为您整理的《ArXiv AI 研究日报》。

### **今日速览**

今日投稿的50篇论文展现了AI研究的深度与广度。一个显著趋势是**测试时计算（Test-Time Compute）** 成为提升推理能力的核心焦点，相关研究从优化推理路径、管理计算成本到探索新范式（如扩散语言模型）层层递进。同时，**智能体（Agent）的可靠性与记忆机制**成为另一大热点，涉及长程对话中的状态保持、工具使用稳定性以及多智能体互动。此外，针对**低资源语言和垂直领域（如医疗、工业）** 的专业化模型与基准测试也在持续深化，推动AI向更实用、更公平的方向发展。

---

### **重点论文**

#### **🧠 大语言模型（架构、训练、对齐、评估）**

1.  **Direct Pass@$k$ Optimization for Thought Pruning: Balancing Quality and Diversity in Test-Time Reasoning**
    -   **链接**: http://arxiv.org/abs/2610.31667v1
    -   **作者**: Mahdi Salmani, Adel Javanmard, Devansh Gupta et al.
    -   **一句话说明**: 提出了一种直接优化测试时推理中“思维链”质量的算法，通过平衡候选解答的多样性与正确率来提升效率，对改进大模型的推理策略有直接价值。

2.  **Cola2: Co-Adaptive Hierarchical Language Modeling with Continuous Semantic Compression and Balanced Discrete Generation**
    -   **链接**: http://arxiv.org/abs/2610.31305v1
    -   **作者**: Hongcan Guo, Yian Zhao, Feng Wang et al.
    -   **一句话说明**: 提出了一种新的分层语言生成框架，通过协同优化连续语义压缩和离散文本生成，旨在提升模型效率和生成质量，是架构创新的代表。

3.  **When LLMs Forget What They Believe: Characterizing State Integrity Collapse in Long-Horizon Dialogues**
    -   **链接**: http://arxiv.org/abs/2610.31314v1
    -   **作者**: Yancheng Zhu, Yifan Yuan
    -   **一句话说明**: 首次定义并系统研究了长对话中LLM的“状态完整性崩溃”问题，即模型记住约束却不再遵守，对构建可靠、一致的对话智能体至关重要。

4.  **Low-Bit N-Gram Embeddings for Language Models**
    -   **链接**: http://arxiv.org/abs/2610.31646v1
    -   **作者**: Stephen Chung, Wenyu Du
    -   **一句话说明**: 针对近期流行的n-gram嵌入表内存消耗大的问题，提出了低比特压缩方法，是提升大模型部署效率的实用技术。

#### **🤖 智能体与推理（规划、工具使用、多智能体、思维链）**

5.  **Can an Agent Debug a Web Corpus? Agentic Auditing of Slovak FineWeb2**
    -  

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*