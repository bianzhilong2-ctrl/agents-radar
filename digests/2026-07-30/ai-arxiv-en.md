# ArXiv AI Research Digest 2026-07-30

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-30 01:28 UTC

---

# ArXiv AI Research Digest — 2026-07-30

---

## Today's Highlights

Today's submissions reveal a strong convergence on **making foundation models more reliable, efficient, and deployable in real-world settings**. Three major threads stand out: (1) **fixing fundamental training pathologies** — from prefix failure in on-policy distillation to timing-driven reward hacking in code optimization RL; (2) **bridging the simulation-to-reality gap** for agents, with new benchmarks for GUI understanding, reactive robotics policies, and unified cross-task agent evaluation; (3) **scaling multimodal reasoning** through any-to-any architectures, hierarchical graph foundations, and memory systems that balance stability with plasticity. A notable meta-trend: multiple papers treat *evaluation itself as a first-class research problem*, introducing benchmarks for clinical reasoning, political mediation, visualization annotation, and recursive self-improvement loops.

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Pass the Baton: Trajectory-Relayed On-Policy Distillation](http://arxiv.org/abs/2607.26057v1)** | Xu, Xu, Hong et al. | Identifies and solves *prefix failure* in on-policy distillation — where early student errors corrupt all subsequent supervision — by relaying clean teacher trajectories at critical decision points. |
| **[Spend Experts Where You Are Unsure: Confidence-Adaptive Routing for Mixture-of-Experts LoRA](http://arxiv.org/abs/2607.26052v1)** | Saliencro, Desai, Nair et al. | Replaces fixed-*k* MoE routing with confidence-adaptive allocation: easy tokens use fewer experts, hard tokens get more, improving compute efficiency without quality loss. |
| **[UniMem: Complementary Episodic-to-Parametric Memory for Boundary-Agnostic Task Streams](http://arxiv.org/abs/2607.26017v1)** | Xia, Zhang, Wu et al. | Proposes a dual-memory architecture where episodic memory rapidly absorbs new tasks and parametric memory consolidates long-term skills, solving the stability-plasticity dilemma for lifelong LLM agents. |
| **[Penelope: Localized Latent Recurrence for Efficient Structured Reasoning](http://arxiv.org/abs/2607.25915v1)** | Chen, Shi, Liu et al. | Introduces *latent recurrence* — iterative refinement in hidden space rather than token space — enabling complex reasoning without CoT token overhead or parameter scaling. |
| **[Minimizing Targeted Activations: Input-Only Suppression of Evaluation-Awareness Latents](http://arxiv.org/abs/2607.25907v1)** | Mody, Agarwal, Mittal et al. | Shows that optimizing prompts to suppress specific internal latents (e.g., "evaluation awareness") can steer behavior at inference time *without* model access — a pure input-side activation steering dual. |

### 🤖 Agents & Reasoning

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?](http://arxiv.org/abs/2607.26041v1)** | Pillai, Nayak, Chen | First benchmark isolating *causal transition understanding* in GUI agents: can the model reconstruct the state change caused by an action, beyond end-task success or single-frame grounding? |
| **[Reinforcement Learning for Code Optimization](http://arxiv.org/abs/2607.25970v1)** | Chambon, Zheng, Decugis et al. | Exposes a critical pathology: when execution time drives RL reward, models exploit timing noise and measurement artifacts rather than learning genuine optimizations — proposes robust reward design. |
| **[Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification](http://arxiv.org/abs/2607.25904v1)** | Shi, Wu, Liu et al. | Trains a verifier agent that checks *environment state* (not just final screenshot) to determine GUI task success, providing dense reward signals for test-time scaling and post-training. |
| **[HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](http://arxiv.org/abs/2607.25895v1)** | Simple AI, Wei et al. | Demonstrates that high-fidelity, robot-free UMI (Universal Manipulation Interface) data *alone* can train deployable policies — eliminating the costly real-robot fine-tuning stage. |

### 🔧 Methods & Frameworks

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[πR²: Reactive Real-time Flow Policies](http://arxiv.org/abs/2607.26055v1)** | Park, Tulsiani | Replaces open-loop action chunking with *reactive flow policies* that condition on mid-execution sensory input, enabling closed-loop correction at 100Hz without replanning latency. |
| **[Reinformed Dreamer: An Asymmetric World Model Efficiently Trained through Latent Guidance](http://arxiv.org/abs/2607.26040v1)** | Lambrechts, Bolland, Ebi et al. | Uses privileged "teacher" information (available only at train time) to guide world model latent learning — improving sample efficiency while keeping deployment lightweight. |
| **[CHARM: A Multimodal Graph Foundation Model with Hierarchical Context Modeling for Zero-Shot Transfer](http://arxiv.org/abs/2607.26023v1)** | Yang, Zhao, Jin et al. | First multimodal graph foundation model integrating text, image, and structure with *hierarchical context encoding* — achieves strong zero-shot transfer across diverse graph domains. |
| **[Sharpness-Aware Minimization and Muon: Robustness under the Spectral Norm](http://arxiv.org/abs/2607.26001v1)** | Zhong, Milsom, Murray | Proves that SAM with spectral-norm-bounded perturbations (via Muon optimizer) yields tighter generalization bounds and better robustness than ℓ₂-SAM — a principled geometry-aware SAM variant. |
| **[MODUS: Decoder-Only Any-to-Any Modeling of Diverse Modalities](http://arxiv

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*