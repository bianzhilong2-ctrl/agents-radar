# ArXiv AI 研究日报 2026-10-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-01 03:10 UTC

---

# ArXiv AI 研究日报 · 2026-10-01

---

## 今日速览

今日投稿围绕 **智能体 harness 进化、扩展律新范式、以及测试时间方法可靠性** 三条主线展开。智能体方向尤其活跃，从 harness 自适应优化到多智能体证明发现，再到机器人策略迭代，反映出"框架层创新"正与"模型层创新"并驾齐驱。同时，多篇论文对当前热门的测试时间扩展和 AI 数据污染提出警示，提醒社区关注可复现性与安全边界。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Scaling Laws for Looped Mixture of Experts](http://arxiv.org/abs/2609.40316v1)**
*Y. Chen, A. Goyal, R. Krishnamoorthi*
首次统一刻画 Looped Transformer 与 MoE 的联合扩展律，揭示递增强度与专家稀疏度如何协同影响模型效率，为高效架构设计提供理论标尺。

**2. [How Much Is an AI Token Worth? Scaling Laws for Wild AI-Generated Web Text](http://arxiv.org/abs/2609.40295v1)**
*J. Russell, B. Glickenhaus, K. Thai et al.*
基于 FineWeb 过滤发现 2026 年 6–8 月网络数据中 AI 生成 token 占比从 27.5% 升至 31.1%，首次量化"野生"AI 数据膨胀速度，对训练数据供应链提出预警。

**3. [Cheap to Draw, Expensive to Trust: Certifying Test-Time Scaling Curves](http://arxiv.org/abs/2609.40190v1)**
*Sohail, Sarkar, Baichoo et al.*
指出多数测试时采样扩展曲线"画起来便宜、信任起来昂贵"，提出预算认证方法，警示仅凭少量实验推断扩展趋势存在严重风险。

**4. [From Spectra to Joint Schedules in LLM Pre-training: 3+3(+2) Scaling-Law Regimes](http://arxiv.org/abs/2609.40148v1)**
*Y. Wang, F. Liu, Y. Chen*
揭示学习率与 batch size 调度如何改变观测到的损失曲线，在在线 SGD 与线性随机特征设定下建立精确的 Volterra 方程刻画，为预训练调度提供理论指导。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**5. [Turbo Harness: Instance-Adaptive Harness Optimization](http://arxiv.org/abs/2609.40330v1)**
*T. Zhang, H. Wang, K. Xu et al.*
提出实例自适应的 harness 优化方法，打破传统全局统一 harness 的局限，使不同任务实例获得定制化工具编排策略。

**6. [Cogentic: Multi-Agent Orchestration for Automated Proof Discovery](http://arxiv.org/abs/2609.40324v1)**
*Y. Cai, V. Gupta, Y. Jiang et al.*
多智能体框架攻克开放研究问题的自动证明发现，通过多竞争猜想并行探索解决单次生成难以覆盖的搜索空间。

**7. [PivotOPD: Learning to Recover from Pivotal Mistakes in Multi-Turn Agents](http://arxiv.org arXiv.org/abs/2609.40285v1)**
*Y. He, Y

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*