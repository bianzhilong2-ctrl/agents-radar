# ArXiv AI 研究日报 2026-09-30

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-30 03:03 UTC

---

# 《ArXiv AI 研究日报》2026-09-30

---

## 📌 今日速览
今日 50 篇论文呈现三大核心看点：**智能体控制权上移至“元推理”层**，不再满足于生成计划，转而研究如何在推理时动态管理执行策略（如 *Thinking Before Thinking*、**Meta-Skills**）；**线性注意力与低比特量化迎来工程化突破**，LeapQuant、STEPQuant、WUSH-KV 等工作从算子层面解决长上下文 KV Cache 瓶颈，零阶优化更将万亿参数训练显存需求降至推理级；**可信度审查深入微观**，从 CoT 痕迹的忠实性验证、规划-执行一致性检查，到针对目标缺失的视觉 grounding 失效分析，模型可靠性评估已成独立研究赛道。

---

## 📂 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）
| 标题 | 作者 | 一句话核心贡献 |
|------|------|----------------|
| **[LeapQuant: Efficient Linear Attention with Accurate Recurrent State Quantization](http://arxiv.org/abs/2609.38166v1)** | Yi Pan et al. | 针对 GDN/KDA 等线性注意力架构，提出首个能在极低比特下保持精度的循环状态量化方案，解决长上下文推理的内存墙难题。 |
| **[STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization](http://arxiv.org/abs/2609.38169v1)** | Bingchen Yao et al. | 从误差传播动力学视角拆解 Delta-Rule 量化敏感性，设计时空自适应量化策略，显著优于均匀量化基线。 |
| **[WUSH-KV: KV Cache Quantization with Data-Adaptive Transforms](http://arxiv.org/abs/2609.38121v1)** | Jiale Chen et al. | 引入二阶统计量感知的可变换 WUSH，实现 KV Cache 低比特量化的数据自适应，极小化分布偁移带来的精度损失。 |
| **[Probe-Space Preconditioning for Fast and Stable Zero-Order Training](http://arxiv.org/abs/2609.38095v1)** | Francois Chaubard et al. | 首次在探针子空间做预条件，使零阶优化收敛速度逼近一阶方法，且仅需推理级显存（OPT-30B 从 600GB 降至 ~40GB）。 |
| **[Pretraining Latent Information Feedback Transformers with Teacher Supervision](http://arxiv.org/abs/2609.38149v1)** | Dor Tirosh et al. | 打破纯前馈范式，引入深层向浅层的潜在信息反馈机制，配合教师监督预训练，缓解中间表示丢弃与重复计算问题。 |
| **[Probability is Not Enough: Exploring and Counting Divergent Tokens for Reasoning Uncertainty Quantification in LLMs](http://arxiv.org/abs/2609.38070v1)** | Feiyang Li et al. | 指出仅用 token 概率估计推理置信度的局限，提出基于发散 token 探索与计数的不确定性量化新指标，显著提升校准性能。 |
| **[Gender bias across LLMs is common and highly heterogenous](http://arxiv.org/abs/2609.38036v1)** | Edoardo Bolzoni, Valerio Capraro | 大规模跨模型实证研究揭示性别偏见普遍存在且表现高度异质，呼吁超越单一基准的系统性偏见审计框架。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
| 标题 | 作者 | 一句话核心贡献 |
|------|------|----------------|
| **[Thinking Before Thinking: Scaling Agentic Inference Through Meta-Reasoning](http://arxiv.org/abs/2609.38147v1)** | Paras Dahal et al. | 引入“元推理”控制器，在推理时动态决定分支、回溯、重启与停止，将推理时算力转化为长链任务的性能增益。 |
| **[Learning Meta-Skills for Agent Harness Design in Test-Time AI4AI](http://arxiv.org/abs/2609.38143v1)** | Cheng Qian et al. | 形式化“Builder-Target”双模型协作，Builder 学习可复用的元技能来构建执行环境，实现测试时的自我进化。 |
| **[Do LLM Agents Execute the Plans They Declare? From Planning-Mode Declaration to Pattern-Specific Execution](http://arxiv.org/abs/2609.38108v1)** | Subba Reddy Oota et al. | 系统性揭示“规划-执行”解耦导致的执行不忠实现象，按模式分类错误并提出针对性缓解策略。 |
| **[Correct Answers, Invalid Traces: What Verifiable Grade-School Math Reveals About Chain-of-Thought Traces](http://arxiv.org/abs/2609.38107v1)** | Ratish Puduppully et al. | 构建可机械验证的合成数学基准 iGSM，实证发现高准确率伴随高比例无效推理轨迹，动摇 CoT 可解释性假设。 |
| **[AdviSD: Learning to Advise Frontier LLMs via Targeted Multi-Turn Self-Distillation](http://arxiv.org/abs/2609.38142v1)** | Rishabh Agrawal et al. | 小型 Advisor 通过多轮自我蒸馏学会给冻结的大模型发自然语言建议，无需更新大模型参数即可提升复杂任务表现。 |
| **[Character Training for Risk-Averse Agents](http://arxiv.org/abs/2609.38093v1)** | Arav Dhoot et al. | 通过“人设训练”注入风险厌恶偏好，使智能体在对抗性环境中倾向安全策略（交易而非叛变），为对齐提供新杠杆。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）
| 标ITLE | 作者 | 一句话核心贡献 |
|------|------|----------------|
| **[LongHarness Bench: Stress-Testing Language Model Harnesses for Long-Context Reasoning](http://arxiv.org/abs/2609.38137v1)** | Quang Hieu Pham et al. | 首个专门针对长上下文 Harness（检索+压缩+记忆等）的压力测试基准，打破现有评测饱和，暴露不同策略在极长依赖下的真实差距。 |
| **[Auditable Long-Term Memory: A Deterministic Retrieval Chain Measured at 479/475 of 500 on LongMemEval-S](http://arxiv.org/abs/2609.38021v1)** | Christopher J. Chanhnourack | 设计全链路确定性检索管线（混合召回→重排→覆盖优先打包→推理脚手架），仅用 LLM 做最终读取，实现可审计的长时记忆 SOTA。 |
| **[Effective Dense Retrieval using Only In-Context Examples](http://arxiv.org/abs/2609.38099v1)** | Nour Jedidi et al. | 证明解码器-only LLM 仅需少量上下文示例即可输出高质量稠密向量，免去专门检索器训练，极大降低部署门槛。 |

### 📊 应用（垂直领域、多模态、代码生成）
| 标题 | 作者 | 一句话核心贡献 |
|------|------|----------------|
| **[Imagine3D-LLM: Teaching MLLMs to Imagine 3D Scenes Before Answering](http://arxiv.org/abs/2609.38177v1)** | Jaewoo Jung et al. | 引导 MLLM 先在潜空间“想象”多视角一致的 3D 场景再作答，显著提升多视图 3D 推理能力，无需 3D 标注监督。 |
| **[Beyond the Timeline: Augmenting Long-Video Memory with Grounded Entity Biographies](http://arxiv.org/abs/2609.38155v1)** | Hui Ren et al. | 构建实体级“传记”记忆结构，跨时空关联同一物理实体的多次出现，解决长视频问答中的身份消歧与长程依赖难题。 |
| **[From Routing Signals to Selective Review: Visual regrounding in MoE VLMs](http://arxiv.org/abs/2609.38111v1)** | Hongzhu Guo et al. | 发现 MoE-VLM 的路由信号可作为视觉 grounding 失效探测器，设计“选择性复核”机制修正目标缺失时的幻觉回答。 |
| **[Skill-Space Shooting for Autonomous Robot Policy Improvement](http://arxiv.org/abs/2609.38178v1)** | Zihang Rui et al. | 在技能空间而非动作空间进行“射击式”策略优化，机器人自主利用失败经验迭代，无需人工演示即可跨任务泛化改进。 |

---

## 📈 研究趋势信号
1. **推理时计算分配显式化**：从“生成更长 CoT”转向“元控制器动态分配算力”（分支/回溯/重启），Harness 设计成为新架构决策点。  
2. **线性注意力量化走向生产级**：LeapQuant/STEPQuant/WUSH-KV 同期涌现，标志着 Delta-Rule 类循环状态量化从理论可行走向工程鲁棒，长上下文服务成本有望再降数量级。  
3. **零阶优化挑战反向传播垄断**：Probe-Space Preconditioning

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*