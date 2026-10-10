# ArXiv AI 研究日报 2026-10-10

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-10 03:25 UTC

---

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: AI Research Analyst
   - Input: 50 ArXiv papers from 2026-10-10, categories: cs.AI, cs.CL, cs.LG (and some cross-lists)
   - Output Requirements:
     a. "今日速览" (3-5 sentences): Summarize most noteworthy research directions and breakthroughs today
     b. "重点论文" (8-15 papers): Categorized into 4 themes:
        - 🧠 大语言模型（架构、训练、对齐、评估）
        - 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
        - 🔧 方法与框架（新技术、基准测试、效率优化）
        - 📊 应用（垂直领域、多模态、代码生成）
        Each paper needs: Title (with ArXiv link), Authors (abbreviated), One-sentence contribution & why it's worth noticing
     c. "研究趋势信号" (100-200 words): Emerging research directions observed from today's submissions
     d. "值得精读" (2-3 papers): Brief rationale for why they're worth full reading
   - Language: Chinese, concise and professional, keep all ArXiv links

2.  **Scan & Categorize the 50 Papers:**
   I need to go through each paper, determine its primary theme, and extract key contributions. Let me list them with quick tags:

   1. On the estimation and validity of AI time horizons---a statistical look at the METR plot
      - cs.AI: AI capability measurement, time horizons, statistical methods
   
   2. CSF: Contextual Safety Filtering for Motion Generators
     - cs.RO, cs.LG: Motion generation, safety filtering, scene-dependent safety
   
   3. A Balanced Data Diet: Addressing the Exploration Bottleneck in Mega-Scale RL for Robot Control
     - cs.RO, cs.LG: RL, robot control, data efficiency, exploration
   
   4. From Reactive Containment to Proactive Assurance: Lessons from OpenAI, Anthropic, and Google Agent Security Incidents
     - cs.CR, cs.AI: Agent security, cybersecurity, safety incidents
   
   5. BrickBench: Evaluating Agentic Brick Design
     - cs.AI, cs.CV, cs.GR: LEGO design, agentic text-to-assembly, physical buildability
   
   6. Bi-FORK: Generative Modeling of High-Dimensional Bifurcating Systems
     - cs.LG, cs.AI, cs.CE: Bifurcation modeling, symmetry breaking, deep learning
   
   7. One Block, Multiple Depths: Recurrent Vision Transformers with Depth-Programmed Experts
     - cs.CV, cs.LG: ViT, recurrent depth, efficiency
   
   8. Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception
     - cs.LG, cs.AI: LLM deception detection, probes, white-box monitoring
   
   9. Rounding in Preconditioner Space: Redesigning 4-bit AdamW Optimizer-State Quantization
     - cs.LG: Optimization, 4-bit quantization, AdamW
   
   10. Density Ratio Estimation with Stein Displacement Fields
      - stat.ML, cs.LG: Density ratios, displacement fields, distribution shift
   
   11. Ecology of AI Agents: Collaboration Creates a Population Threshold for Takeoff
       - cs.AI, cond-mat.dis-nn, cs.MA: Multi-agent systems, population dynamics, takeoff risk
   
   12. VioLA: Learning Generalist Humanoid Control Policies from Human Data
       - cs.RO, cs.LG: Humanoid control, imitation from human data, action space
   
   13. FAITH: Feasibility-Aware Safety-Filtered RL for High-Dimensional Systems
       - cs.RO, cs.LG, eess.SY: Safe RL, safety filters, high-dimensional systems
   
   14. Toward Joint Optimization of Circuit Depth and Training Data Size in Adaptively Grown Quantum Classifiers
       - quant-ph, cs.LG: Quantum circuits, training data efficiency
   
   15. FastBench: Can Streaming VLMs Perceive High-Dynamic Real-World Streams?
       - cs.CV, cs.CL: Streaming VLMs, dynamic video, benchmark
   
   16. RoboRSI: Stable, efficient, and reusable robot self-evolution in complex real-world environments
       - cs.RO, cs.AI: Robot self-evolution, code-based learning, reuse
   
   17. Beyond Spatio-Temporal Priors: A Generalizable Approach for Dense Correspondence Matching
       - cs.CV, cs.LG: Dense correspondence, image editing, reference-guided generation
   
   18. A Unified Bellman Operator for Safety-Critical Reinforcement Learning
       - cs.LG: Safe RL, Bellman operator, constraints
   
   19. WOVEN: Weaving Visual World Modeling into Multimodal LLMs
       - cs.CV, cs.CL, cs.LG: MLLMs, visual transition reasoning, multimodal
   
   20. MAMHOI: Factorizing Scene-Aware Human-Object Interaction through Affordances
       - cs.CV, cs.AI: HOI generation, 3D scenes, affordances
   
   21. Predicting Alignment Generalization with Value Representations
       - cs.CL, cs.AI, cs.LG: LLM alignment, value representations, generalization
   
   22. Searching for "Harmful Refusal": A Psychometric Audit of an AI Safety Benchmark
       - cs.AI: Safety benchmarks, refusal, attribute profiling
   
   23. LeWAM: A JEPA World Action Model with Diffusion-Steering-Based MPC
       - cs.RO, cs.AI, cs.CV: World action models, MPC, diffusion steering
   
   24. ViSkill: Reinforcing VLM Agents with Evolving Visual-Native Skills
       - cs.CV, cs.CL: VLM agents, skill distillation, visual-native skills
   
   25. SpaceCast-Bench: Evaluating Predictive Spatial Reasoning in Vision-Language Models
       - cs.CV, cs.CL: Spatial reasoning, predictive, VLM benchmarks
   
   26. Learning Kilometer-Scale Weather Prediction with Global-Regional Alignment
       - cs.LG: Weather prediction, global-regional alignment, kilometer-scale
   
   27. SpaceFlow: Locally Controllable 3D Generation
       - cs.CV, cs.AI, cs.GR: 3D generation, local control, text-guided
   
   28. Prospective Prediction of OOD Degradation from Source-Side Training Dynamics
       - cs.LG: OOD degradation prediction, training dynamics, shortcut learning
   
   29. HRIL: Learning Multimodal Synergy via Higher-Order Tensor Modeling
       - cs.AI, cs.LG: Multimodal representation, higher-order tensors, synergy
   
   30. GeoReform: Reflective Formalization Evolution for Multimodal Geometry Problem Solving
       - cs.AI: MLLMs, geometry problems, formalization
   
   31. Long Text to Predictive Features: LLM-Guided Blockwise Feature Engineering via Executable Program Search
       - cs.LG, cs.CL: Long text, feature engineering, LLM-guided
   
   32. ARC: A Reasoning Recipe for Robot Foundation Models
       - cs.RO, cs.AI: Robot foundation models, reasoning, zero-shot task
   
   33. Marformer: A Transformer for Predicting Missing Data Distributions
       - cs.LG, stat.ME: Missing data prediction, conditional marginals, Bayes risk
   
   34. Latent Core Tokenizer: Compress, but Meaningfully
       - cs.CL: Tokenizer, compression, language-agnostic, core discovery
   
   35. OnTrack: Real-Time Monitoring and Intervention in LLM Agent Trajectories via Streaming Structure-Aware Optimal Transport
       - cs.AI, cs.CL, cs.CY: LLM agent monitoring, optimal transport, trajectories
   
   36. Bilevel optimization for data-driven learning of Koopman embeddings using kernel-based autoencoders
       - cs.LG, math.DS, stat.ML: Koopman embeddings, bilevel optimization, autoencoders
   
   37. Which Skill to Distill? SGUID: Selecting a Compact Skill Bank for Model-Skill Co-Evolution
       - cs.CL: Skill selection, distillation, LLM downstream performance
   
   38. HANS: A Handwritten Answer Sheet Dataset for Noisy Hybrid Document Parsing
       - cs.AI, cs.CV: Handwritten answers, document parsing, education
   
   39. Closing the Horizon Gap in Policy Optimization for Adversarial MDPs
       - cs.LG, stat.ML: Policy optimization, adversarial MDPs, regret bounds
   
   40. Cited but Not Consulted: A Counterfactual Audit of Legal Chain-of-Thought Faithfulness
       - cs.AI, cs.CL, cs.CY: Legal CoT, faithfulness, counterfactual audit
   
   41. Accurate but Not Humble: Evaluating Epistemic Humility in LLM Agents under Knowledge Conflict
       - cs.AI, cs.CL: LLM agents, epistemic humility, knowledge conflict
   
   42. Subspace Uncertainty and Sharp Sampling Thresholds on the Boolean Cube
       - math.PR, cs.IT, cs.LG: Gaussian regression, Boolean cube, subspace uncertainty
   
   43. Distilling Routed 3D Privilege for Spatial Reasoning in Vision-Language Models
       - cs.CV, cs.AI: VLM spatial reasoning, 3D privilege, routing
   
   44. SplitJEPA: Learning Invariant and Variant Latent Worlds without Reconstruction
       - cs.LG: JEPA, latent worlds, invariant/variant factors
   
   45. Overcoming Prior Barriers: Supervised Fine-Tuning under Long-Tail Distribution
       - cs.AI, cs.CL, cs.LG: SFT, long-tail distribution, concept frequency
   
   46. Can AI Agents Learn Their Way to the Top? Evaluating Heuristic Learning in a Long-Running Game Agent Competition
       - cs.AI, cs.CL: Game agents, heuristic learning, policy evolution
   
   47. Ambient Discrete Diffusion: Using the Wrong Data at the Right Time for Data Efficient Learning
       - cs.LG: Discrete diffusion, RefineMix, data scarcity
   
   48. VFold: Symmetry-Aware Cross-Layer Value Cache Compression
       - cs.CL, cs.LG: LLM KV cache compression, symmetry-aware
   
   49. ContiLNN: Mitigating Slice Sampling Discontinuity with Liquid Neural Networks for Medical Image Restoration
       - cs.CV, cs.AI: Medical image restoration, liquid neural networks, anatomical continuity
   
   50. asdex: Automatic Sparse Differentiation in JAX
       - cs.MS, cs.LG, math.NA: Automatic differentiation, Jacobian/Hessian, sparse differentiation

3.  **Categorize and Select 8-15 Papers per Theme, Write Abbreviated Contributions:**

   Let me group them logically:

   **🧠 Large Language Models (architecture, training, alignment, evaluation):**
   - Paper 1: On the estimation and validity of AI time horizons... (AI capability measurement, METR plot statistical analysis)
   - Paper 4: From Reactive Containment to Proactive Assurance... (Agent security incidents, OpenAI/Anthropic/Google, real-system deployment)
   - Paper 8: Caught in the Act: Probes Effectively Detect Sabotage... (Deception detection via probes, largest deception dataset)
   - Paper 22: Searching for "Harmful Refusal": A Psychometric Audit... (Safety benchmark attribute profiling, model comparison)
   - Paper 41: Accurate but Not Humble: Evaluating Epistemic Humility... (LLM agents under knowledge conflict, uncertainty modeling)
   - Paper 30: GeoReform: Reflective Formalization Evolution... (MLLMs geometry problems, formalization evolution)
   - Paper 37: Which Skill to Distill? SGUID... (Skill selection for model-skill co-evolution, compact skill bank)
   - Paper 40: Cited but Not Consulted: A Counterfactual Audit... (Legal CoT faithfulness, counterfactual authority substitution)

   **🤖 Intelligent Agents and Reasoning (planning, tool use, multi-agent, chain-of-thought):**
   - Paper 11: Ecology of AI Agents: Collaboration Creates a Population Threshold for Takeoff... (Multi-agent collaboration, population threshold, takeoff risk)
   - Paper 16: RoboRSI: Stable, efficient, and reusable robot self-evolution... (Robot self-evolution, code-based capability reuse)
   - Paper 25: SpaceCast-Bench: Evaluating Predictive Spatial Reasoning... (VLM predictive spatial reasoning, scene intervention anticipation)
   - Paper 35: OnTrack: Real-Time Monitoring and Intervention... (LLM agent trajectories, optimal transport, streaming monitoring)
   - Paper 46: Can AI Agents Learn Their Way to the Top?... (Heuristic learning in game agent competition, policy revision)
   - Paper 3: A Balanced Data Diet: Addressing the Exploration Bottleneck... (Mega-scale RL, data efficiency, exploration)
   - Paper 19: WOVEN: Weaving Visual World Modeling into Multimodal LLMs... (Visual transition reasoning, multimodal training primitive)
   - Paper 7: One Block, Multiple Depths: Recurrent Vision Transformers... (Not strictly agent/reasoning, but recurrent depth for efficiency - might fit better in methods)
   - Paper 23: LeWAM: A JEPA World Action Model... (World action models, diffusion-steering MPC, planning)
   - Paper 44: SplitJEPA: Learning Invariant and Variant Latent Worlds... (JEPA latent factors, invariant/variant decomposition)

   Let me restructure the categories as requested:
   - 🧠 大语言模型（架构、训练、对齐、评估）
   - 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
   - 🔧 方法与框架（新技术、基准测试、效率优化）
   - 📊 应用（垂直领域、多模态、代码生成）

   I need to assign each paper to exactly one theme, or allow overlap but prioritize primary theme. Let me re-evaluate and pick 8-15 total, with distribution across themes.

   Total selected: 13 papers (within 8-15 range). Let me distribute:
   - 🧠 LLM: 4 papers
   - 🤖 Agents & Reasoning: 4 papers
   - 🔧 Methods & Frameworks: 3 papers
   - 📊 Applications: 2 papers

   Let pick:

   **🧠 大语言模型（架构、训练、对齐、评估）**:
   1. Paper 1: On the estimation and validity of AI time horizons... (AI capability measurement, statistical rigor on METR plot)
   2. Paper 8: Caught in the Act: Probes Effectively Detect Sabotage... (White-box deception detection, large-scale probe training, monitoring LLM agents)
   3. Paper 22: Searching for "Harmful Refusal": A Psychometric Audit... (Safety benchmark attribute-level comparison, model profiling)
   4. Paper 41: Accurate but Not Humble: Evaluating Epistemic Humility... (LLM agents under knowledge conflict, uncertainty calibration)

   **🤖 智能体与推理（规划、工具使用、多智能体、思维链）**:
   5. Paper 11: Ecology of AI Agents: Collaboration Creates a Population Threshold for Takeoff... (Multi-agent collaboration, population threshold, takeoff risk)
   6. Paper 16: RoboRSI: Stable, efficient, and reusable robot self-evolution... (Robot self-evolution via code, capability reuse)
   7. Paper 25: SpaceCast-Bench: Evaluating Predictive Spatial Reasoning... (VLM predictive spatial reasoning, scene intervention anticipation)
   8. Paper 35: OnTrack: Real-Time Monitoring and Intervention in LLM Agent Trajectories... (Streaming optimal transport, real-time agent monitoring)

   **🔧 方法与框架（新技术、基准测试、效率优化）**:
   9. Paper 7: One Block, Multiple Depths: Recurrent Vision Transformers... (Single block recurrent ViT, depth efficiency, FLOPs)
   10. Paper 19: WOVEN: Weaving Visual World Modeling into Multimodal LLMs... (Visual transition reasoning, shared training primitive for MLLMs)
   11. Paper 44: SplitJEPA: Learning Invariant and Variant Latent Worlds without Reconstruction... (JEPA latent decomposition, invariant/variant factors)

   **📊 应用（垂直领域、多模态、代码生成）**:
   12. Paper 5: BrickBench: Evaluating Agentic Brick Design... (Agentic LEGO design, text-to-assembly, physical buildability)
   13. Paper 28:

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*