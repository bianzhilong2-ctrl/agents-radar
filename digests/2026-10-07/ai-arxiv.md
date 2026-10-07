# ArXiv AI 研究日报 2026-10-07

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-07 03:22 UTC

---

Here's a thinking process:

1.  **Analyze the Request:**
   - **Role:** AI Research Analyst
   - **Input:** 50 ArXiv papers from 2026-10-07, categorized under cs.AI, cs.CL, cs.LG (and some cross-overs like cs.RO, cs.CV, etc.)
   - **Output Requirements:**
     - "今日速览" (3-5 sentences): Summary of today's most notable research directions/breakthroughs
     - "重点论文" (8-15 papers): Selected important papers, categorized by theme:
       - 🧠 大语言模型（架构、训练、对齐、评估）
       - 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
       - 🔧 方法与框架（新技术、基准测试、效率优化）
       - 📊 应用（垂直领域、多模态、代码生成）
     - Each paper: Title (with ArXiv link), Authors (abbreviated), One-sentence contribution & why it's worth noticing
     - "研究趋势信号" (100-200 words): Emerging directions observed from today's submissions
     - "值得精读" (2-3 papers): Brief reason for why they're worth full reading
   - **Language:** Chinese, concise and professional, keep all ArXiv links.

2.  **Process the Input Papers:**
   I need to go through all 50 papers, understand their core contributions, and group them into the specified categories. Let me list them with brief mental summaries:

   1. QF3: Fast Flow RL with Filtered Q-Gradients - RL, flow policies, efficiency
   2. Conformal Prediction Sets Quantify Information Gain - uncertainty, information theory
   3. 4D-HOF: Hand-Object Flow Matching - 4D reconstruction, generative
   4. IdeaAnchor: Teaching LLMs to Turn Literature into Research Ideas - LLM ideation, literature synthesis
   5. DepthWorld: 3D World Model for Robot Manipulation - world models, 3D geometry
   6. Sherpa: Teaching LLMs to Teach Adaptively - LLM as teacher, pedagogy
   7. Agent in a Bottle: Can LLM Agents Turn Their Capabilities Into Cheap, Scalable Artifacts? - LLM agents, capability compression, bottling
   8. AdvSim2Real: Training Web Agents Against Adaptive Prompt Injection - web agents, security, robustness
   9. Rapid Fredholm stabilization... - control theory, PDE, not core AI/ML but cs.LG
   10. VeriFine: Scaling Verification for Self-Improvement in Embodied Reasoning - self-improving policies, verification
   11. WorldSonus: Bringing Sound to Worlds - world models, audio, multimodal
   12. Neural Petri flows for chemical reactions - chemistry, Petri nets, diffusion
   13. The Missing Minimal Pair: Stereotype Evaluation in LLMs - bias evaluation, LLM stereotypes
   14. Linear Bandits under Exact Sliding-Window Constraints - bandits, optimization
   15. Reinforcement Learning with Conformal Action Sets: An Application to Sequential Recommendation - RL, conformal, recommendation
   16. On the Computational Tractability of Robust Bandits - robust bandits, agnostic learning
   17. Denoising Hierarchical Representations: Joint Continuous Diffusion for Language Modeling - DLMs, diffusion, language
   18. Optimal and Efficient Online Inverse Optimization - inverse optimization, online learning
   19. A Systematic Study of Semantic ID Spaces for Generative Information Retrieval - GIR, semantic IDs, retrieval
   20. EgoLAP: Learning from Egocentric Human Data through Language-Action Reasoning - robot learning, egocentric data, language-action
   21. Does an Agent's History Tell You When Compaction Will Hurt? - context compaction, replay, TRACE
   22. WorldSolver: Can LLM Agents Simulate the Physical Dynamics via Solver Generation? - LLM agents, physics simulation, solvers
   23. Holdout Best-of-N: Unbiased Evaluation and Its Cost - evaluation methodology, Best-of-N
   24. When Forgetting is not Catastrophic: On the Mechanics of Spurious Forgetting - LLM forgetting, spurious forgetting
   25. Co-Evolving Paths and Flows via Path-Flow Alignment - flow matching, path learning
   26. Disentangling Paradigm, Identifier, and Decoding in Generative Retrieval - generative retrieval, paradigm study
   27. Prediction-powered inference for time series across space - spatiotemporal inference, prediction-powered
   28. Agreement Is Not Validity: Cross-Model LLM Consensus in Diagnosing Student Failure Modes - LLM consensus, math tutoring, diagnostics
   29. nanoMuse: An Open-Source Personal Agent for Every Device You Own - personal agents, device ecosystem, AGI-like
   30. GeneICL: A Tabular Foundation Model for Bulk Transcriptomics - foundation models, biomedicine, tabular data
   31. ScienceClaw: Benchmarking Continual Self-Evolution of AI-for-Science Agents - AI agents, self-evolution, scientific automation
   32. Probabilistic Counterfactual Inference for Discrete Outcomes in Gaussian-Process Causal Models - causal inference, GP-SCMs, discrete outcomes
   33. Coupled but Late: Turn-Taking Between Full-Duplex Speech Models in Unscripted Dialogue - speech models, turn-taking, full-duplex
   34. A Systematic Study of Small Language Models on Abstract Reasoning Tasks - small LMs, abstract reasoning, ARC-TGI
   35. Secure Speculative Decoding for Large Language Models - speculative decoding, security, inference acceleration
   36. Variance-Optimal Off-Policy Evaluation with Conjunct Effect Modeling - OPE, variance reduction, bandits
   37. Same-Number Citation Swaps: Stress-Testing Jev as a Financial Evidence Judge - financial LLM evaluation, citation verification
   38. Principled Under Pressure: Post-Training Decides Whether LLMs Act on Their Own Moral Judgment - LLM moral judgment, post-training, pressure scenarios
   39. MemFLoRA: Memory-Floor LoRA for CNN Adaptation at the Edge - edge adaptation, LoRA, memory efficiency
   40. Semantic Behavioral Watermarking: Paraphrase-Robust and Forgery-Resistant Provenance for LLM Agents - behavioral watermarking, LLM agents, provenance
   41. ParanoiaEval: Benchmarking Unnecessary Defensive Work in Agentic Coding - coding agents, defensive work, benchmark
   42. Evidence-Bound Reasoning: Neuro-Semantic Verification of Biomedical AI in Glioblastoma Radiogenomics - biomedical AI, neuro-semantic verification, radiogenomics
   43. Selective Transfer of RL Updates for Visual Reasoning - RL updates transfer, VLMs, visual reasoning
   44. Steering Diffusion Models to Rare Events with Sequential Monte Carlo - diffusion models, rare events, SMC
   45. A Case Study in Assuring AI-Written Software - AI-generated software, assurance, code review
   46. SquidAgent: Parallelize Wisely, Coordinate Efficiently - parallel LLM agents, coordination, efficiency
   47. HygieneRoboBench: Benchmarking Hygiene-Aware Planning for Household Robots - robot planning, hygiene, benchmark
   48. Towards In-Parameter Memory Augmentation for Large Language Models - in-param memory, LLM augmentation, context
   49. Parallel Predictive World Models for Accurate and Efficient Long-Horizon Planning - world models, planning, parallel rollouts
   50. Feature Information Dynamics in Diffusion - diffusion, information dynamics, feature analysis

3.  **Categorization & Selection:**
   Now I need to select 8-15 papers and categorize them into the 4 themes. I'll go through each and assign to themes based on core contribution.

   Theme 1: 🧠 大语言模型（架构、训练、对齐、评估）
   - 4. IdeaAnchor: Teaching LLMs to Turn Literature into Research Ideas - LLM ideation
   - 13. The Missing Minimal Pair: Stereotype Evaluation in LLMs - bias eval
   - 24. When Forgetting is not Catastrophic: On the Mechanics of Spurious Forgetting - LLM forgetting
   - 28. Agreement Is Not Validity: Cross-Model LLM Consensus in Diagnosing Student Failure Modes - LLM consensus/diagnostics
   - 34. A Systematic Study of Small Language Models on Abstract Reasoning Tasks - small LMs reasoning
   - 38. Principled Under Pressure: Post-Training Decides Whether LLMs Act on Their Own Moral Judgment - LLM moral judgment post-training
   - 35. Secure Speculative Decoding for Large Language Models - speculative decoding (efficiency/security)
   - 48. Towards In-Parameter Memory Augmentation for Large Language Models - LLM memory augmentation
   - 31. ScienceClaw: Benchmarking Continual Self-Evolution of AI-for-Science Agents - AI agents self-evolution

   Theme 2: 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
   - 1. QF3: Fast Flow RL with Filtered Q-Gradients - RL, flow policies
   - 7. Agent in a Bottle: Can LLM Agents Turn Their Capabilities Into Cheap, Scalable Artifacts? - LLM agents bottling
   - 8. AdvSim2Real: Training Web Agents Against Adaptive Prompt Injection - web agents, robustness
   - 10. VeriFine: Scaling Verification for Self-Improvement in Embodied Reasoning - verification, self-improving policies
   - 21. Does an Agent's History Tell You When Compaction Will Hurt? - context compaction, replay
   - 22. WorldSolver: Can LLM Agents Simulate the Physical Dynamics via Solver Generation? - LLM agents physics simulation
   - 41. ParanoiaEval: Benchmarking Unnecessary Defensive Work in Agentic Coding - coding agents
   - 46. SquidAgent: Parallelize Wisely, Coordinate Efficiently - parallel agent coordination
   - 42. Evidence-Bound Reasoning: Neuro-Semantic Verification of Biomedical AI... - biomedical AI reasoning

   Theme 3: 🔧 方法与框架（新技术、基准测试、效率优化）
   - 2. Conformal Prediction Sets Quantify Information Gain - conformal prediction, info gain
   - 15. Reinforcement Learning with Conformal Action Sets: An Application to Sequential Recommendation - conformal RL
   - 16. On the Computational Tractability of Robust Bandits - robust bandits
   - 17. Denoising Hierarchical Representations: Joint Continuous Diffusion for Language Modeling - DLMs, diffusion
   - 18. Optimal and Efficient Online Inverse Optimization - inverse optimization
   - 19. A Systematic Study of Semantic ID Spaces for Generative Information Retrieval - GIR, semantic IDs
   - 25. Co-Evolving Paths and Flows via Path-Flow Alignment - flow matching, joint path-flow
   - 26. Disentangling Paradigm, Identifier, and Decoding in Generative Retrieval - generative retrieval study
   - 36. Variance-Optimal Off-Policy Evaluation with Conjunct Effect Modeling - OPE variance reduction
   - 44. Steering Diffusion Models to Rare Events with Sequential Monte Carlo - diffusion, rare events
   - 49. Parallel Predictive World Models for Accurate and Efficient Long-Horizon Planning - world models, parallel planning

   Theme 4: 📊 应用（垂直领域、多模态、代码生成）
   - 3. 4D-HOF: Hand-Object Flow Matching for Feed-Forward 4D Interaction Reconstruction - 4D reconstruction, hand-object
   - 11. WorldSonus: Bringing Sound to Worlds - world models, audio, multimodal
   - 12. Neural Petri flows for chemical reactions - chemistry, Petri nets
   - 20. EgoLAP: Learning from Egocentric Human Data through Language-Action Reasoning - robot learning, egocentric data
   - 27. Prediction-powered inference for time series across space - spatiotemporal inference
   - 33. Coupled but Late: Turn-Taking Between Full-Duplex Speech Models in Unscripted Dialogue - speech models, turn-taking
   - 37. Same-Number Citation Swaps: Stress-Testing Jev as a Financial Evidence Judge - financial LLM evaluation
   - 40. Semantic Behavioral Watermarking: Paraphrase-Robust and Forgery-Resistant Provenance for LLM Agents - behavioral watermarking
   - 43. Selective Transfer of RL Updates for Visual Reasoning - VLM reasoning transfer
   - 45. A Case Study in Assuring AI-Written Software - AI-generated software assurance
   - 47. HygieneRoboBench: Benchmarking Hygiene-Aware Planning for Household Robots - robot benchmark, hygiene

   I need to select exactly 8-15 papers total, distributed across themes. Let me aim for ~4 per theme, totaling ~16, but I can adjust to 8-15. I'll pick the most impactful/representative ones.

   Let's finalize selection:

   Theme 1 (LLM): 
   - 4. IdeaAnchor (LLM ideation)
   - 13. Stereotype Evaluation (bias eval)
   - 24. Spurious Forgetting (LLM forgetting)
   - 38. Moral Judgment Under Pressure (LLM alignment/moral)
   - 35. Secure Speculative Decoding (LLM efficiency/security)
   - 48. In-Parameter Memory Augmentation (LLM memory)
   That's 6. I'll pick 4: 4, 13, 24, 38. Or maybe 4, 13, 38, 35. Let's see.

   Theme 2 (Agents & Reasoning):
   - 1. QF3 (RL flow)
   - 7. Agent in a Bottle
   - 8. AdvSim2Real (web agents robustness)
   - 10. VeriFine (self-improvement verification)
   - 21. Context compaction
   - 22. WorldSolver (LLM physics)
   - 41. ParanoiaEval (coding agents)
   - 46. SquidAgent (parallel agents)
   Pick 4: 7, 8, 22, 41. Or 1, 7, 22, 41. I'll include 1 maybe in Methods or Agents. Let's put 1 in Theme 3 or 2. I'll decide later.

   Theme 3 (Methods & Frameworks):
   - 2. Conformal Prediction Sets
   - 15. RL with Conformal Action Sets
   - 16. Robust Bandits
   - 17. Denoising Hierarchical Representations
   - 18. Online Inverse Optimization
   - 19. Semantic ID Spaces for GIR
   - 25. Path-Flow Alignment
   - 26. Generative Retrieval Disentangling
   - 36. Variance-Optimal OPE
   - 44. Diffusion to Rare Events
   - 49. Parallel Predictive World Models
   Pick 4: 2, 25, 49, 17. Or 2, 17, 25, 49.

   Theme 4 (Applications):
   - 3. 4D-HOF (4D reconstruction)
   - 11. WorldSonus (audio world models)
   - 20. EgoLAP (robot learning from egocentric)
   - 27. Prediction-powered inference (spatiotemporal)
   - 33. Turn-Taking speech models
   - 37. Financial citation verification
   - 40. Behavioral watermarking
   - 45. AI-written software assurance
   - 47. HygieneRoboBench
   Pick 4: 3, 20, 40, 45. Or 3, 11, 20, 45.

   I need to ensure total is 8-15. Let's aim for 14, 3-4 per theme. I'll select exactly 14 papers, 3-4 per theme.

   Let me restructure and finalize:

   **Theme 1: 🧠 大语言模型**
   1. IdeaAnchor: Teaching LLMs to Turn Literature into Research Ideas
   2. The Missing Minimal Pair: Stereotype Evaluation in LLMs
   3. When Forgetting is not Catastrophic: On the Mechanics of Spurious Forgetting
   4. Principled Under Pressure: Post-Training Decides Whether LLMs Act on Their Own Moral Judgment
   5. Secure Speculative Decoding for Large Language Models
   6. Towards In-Parameter Memory Augmentation for Large Language Models
   (6 papers)

   **Theme 2: 🤖 智能体与推理**
   1. QF3: Fast Flow RL with Filtered Q-Gradients
   2. Agent in a Bottle: Can LLM Agents Turn Their Capabilities Into Cheap, Scalable Artifacts?
   3. WorldSolver: Can LLM Agents Simulate the Physical Dynamics via Solver Generation?
   4

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*