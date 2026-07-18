# ArXiv AI 研究日报 2026-07-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-18 01:40 UTC

---

# ArXiv AI 研究日报（2026-07-18）

## 一、今日速览
今日 AI 研究呈现“上下文与记忆极致扩展”与“评估体系反思”两大主线：机器人策略将视觉运动上下文扩展至 8K 步（RoboTTT），LLM 测试时训练与长上下文微调降低资源门槛；同时多篇论文质疑现有基准（IRT、静态检索效用、成功率为王的安防评测）。多模态空间理解、智能体协作（搜索、GUI、科研）及数据投毒/物理安全风险亦成焦点。

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）
1. **Partition, Prompt, Aggregate: Statistical Self-Consistency in Language Models**  
   http://arxiv.org/abs/2607.15277v1 | Wolf et al.  
   从概率推断视角提出统计自一致性提示聚合，检验 LLM 上下文学习是否真满足基本条件分布。

2. **In-Place Tokenizer Expansion for Pre-trained LLMs**  
   http://arxiv.org/abs/2607.15232v1 | Smith et al.  
   提出原地分词器扩展，解决后期新增语言被过度切分导致的延迟与能耗问题。

3. **Mask-Aware Policy Gradients for Diffusion Language Models**  
   http://arxiv.org/abs/2607.15200v1 | Raajesh et al.  
   面向掩码扩散语言模型提出掩码感知策略梯度，弥补其 RL 微调中似然难估的缺口。

4. **Can We Trust Item Response Theory for AI Evaluation?**  
   http://arxiv.org/abs/2607.15190v1 | Jiang et al.  
   批判性审视 IRT 在 AI 基准的适用性，揭示人机测试数据体制差异带来的排名偏差。

5. **On-Policy Delta Distillation**  
   http://arxiv.org/abs/2607.15161v1 | Heo et al.  
   厘清在线策略蒸馏的理论基础，以教师 token 级监督缓解奖励模型约束。

### 🤖 智能体与推理
6. **RoboTTT: Context Scaling for Robot Policies**  
   http://arxiv.org/abs/2607.15275v1 | Jiang et al.  
   测试时训练机器人策略将视觉运动上下文扩至 8K 步，量级超前 SOTA 千倍。

7. **SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration**  
   http://arxiv.org/abs/2607.15257v1 | Zhang et al.  
   构建开放域多智能体搜索协作系统，缓解长交互历史下的任务追踪失效。

8. **Plover: Steering GUI Agents through Plan-Centric Interaction**  
   http://arxiv.org/abs/2607.15193v1 | Venkatesan et al.  
   以计划为中心引导 GUI 智能体，应对动态布局与意图漂移。

9. **AutoSynthesis: An agentic system for automated meta-analysis**  
   http://arxiv.org/abs/2607.15247v1 | Taherinezhad et al.  
   端到端多智能体系统实现自动元分析，将证据合成从手工推向可规模化的智能体流程。

10. **Digital Pantheon: Simulating and Auditing Coalition Formation with LLM Agents**  
    http://arxiv.org/abs/2607.15095v1 | Van Mulders et al.  
    用 LLM 智能体模拟政治联盟形成，审计其意识形态偏见与协商行为。

### 🔧 方法与框架
11. **Long-Context Fine-Tuning with Limited VRAM**  
    http://arxiv.org/abs/2607.15105v1 | Fedosov et al.  
    分层全局注意力+段级反向传播，在有限显存下实现长上下文微调。

12. **Bridge Evidence: Static Retrieval Utility Does Not Predict Causal Utility in Multi-Step Agentic Search**  
    http://arxiv.org/abs/2607.15253v1 | Mukhopadhyay et al.  
    证明静态检索评分无法预测智能体多步搜索中的因果效用，呼吁新评测范式。

13. **Beyond Success Rate: Cost-Aware Evaluation of Offensive and Defensive Security Agents**  
    http://arxiv.org/abs/2607.15263v1 | Kassianik et al.  
    提出成本感知的安防智能体评估，超越峰值成功率衡量真实运营开销。

14. **MeanFlowNFT: Bringing Forward-Process RL to Average-Velocity Generators**  
    http://arxiv.org/abs/2607.15273v1 | Huang et al.  
    将前向过程 RL 引入平均速度生成器，兼顾少步采样与偏好对齐。

### 📊 应用
15. **SceneBind: Binding What and Where Across Vision, Audio and Language**  
    http://arxiv.org/abs/2607.15265v1 | Chen et al.  
    全模态场景表示联合语义与 3D 空间，弥补现有编码器缺乏“在何处”的结构。

16. **MedFailBench: A Clinician-Built Open-Source Benchmark for Medical AI Safety Boundary Inspection**  
    http://arxiv.org/abs/2607.15166v1 | Ozkan  
    医生构建的失效图谱基准，按严重度与安检门类标注医疗 AI 安全边界突破。

17. **SciDiagramEdit: Learning to Edit Scientific Diagrams from Paper Revisions**  
    http://arxiv.org/abs/2607.15272v1 | Sun et al.  
    从论文修订中学习科学图表编辑，用自然语言指令自动化繁琐作图流程。

## 三、研究趋势信号
今日投稿显示三大新兴信号：其一，测试时训练（TTT）与上下文缩放正从语言模型外溢至机器人、视觉合成（RoboTTT、Online NST Memory），成为“部署期持续适应”的通用杆；其二，评测范式受到集中质疑——IRT、静态检索、成功率指标被指偏离智能体真实效用，成本/因果感知评估兴起；其三，AI 工业化与中立性审计升温（Grokipedia 政治中性、LLM 联盟模拟），反映社区对“AI 作为科研/社会参与者”的治理关切。多模态空间绑定与低资源语言词表扩展亦稳步推进。

## 四、值得精读
- **RoboTTT**（http://arxiv.org/abs/2607.15275v1）：将机器人上下文拉长三个数量级且无需重训，对 embodied foundation model 的扩展律与系统实现均有启发。  
- **Bridge Evidence**（http://arxiv.org/abs/2607.15253v1）：用严谨实验打破“检索相关性=智能体有用性”的默认假设，对 RAG/Agent 评测设计具纠偏价值。  
- **Can We Trust Item Response Theory for AI Evaluation?**（http://arxiv.org/abs/2607.15190v1）：系统揭示基准统计模型的误用风险，适合所有做评测与排行榜的研究者细读。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*