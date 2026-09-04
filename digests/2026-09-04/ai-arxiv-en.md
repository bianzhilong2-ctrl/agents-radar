# ArXiv AI Research Digest 2026-09-04

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-04 02:03 UTC

---

# ArXiv AI Research Digest — 2026-09-04

---

## 1. Today's Highlights

Today's submissions reveal a maturing focus on **agentic infrastructure over raw model scaling**. Multiple papers address the *operational* challenges of deploying LLM agents: lifecycle-hook security vulnerabilities, situational awareness in meetings, proactive opportunity detection, and reconstructable decision graphs. A parallel trend is **principled replay and data efficiency** — Headroom-Drift Replay introduces a theoretically grounded primitive for GRPO, while Free Pause Tokens offer a compute-efficient alternative to chain-of-thought. In multimodal reasoning, **3D spatial grounding via scene graphs (GraFT)** and **fully open diffusion recipes (LLaDA-Image)** signal a push toward reproducible, geometrically faithful generation. Finally, **safety evaluation is diversifying beyond English** with IndicSafeEval's multilingual persuasive jailbreaks, and **watermarking is becoming inference-speed-native** via stateless Bernoulli trials.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Headroom-Drift Replay: A Primitive for Principled Replay Control in GRPO](http://arxiv.org/abs/2609.03941v1)** | Park, Chang | Introduces a theoretically grounded replay primitive for GRPO that quantifies "headroom" (policy improvement potential) and "drift" (distribution shift), enabling principled reuse of trajectories in agentic RL where rollouts are expensive. |
| **[Free Pause Tokens](http://arxiv.org/abs/2609.03807v1)** | Langford, Godey, Monea et al. | Proposes parallel "pause" tokens that share backbone weights but run in a separate prediction stream, giving models extra compute per next-token prediction *without* sequence length overhead — a compute-efficient alternative to explicit CoT. |
| **[Xiaomi-TabLDM: A Tabular Foundation Model Technical Report](http://arxiv.org/abs/2609.03880v1)** | Xiaomi-TabLDM Team | A tabular foundation model pretrained *exclusively on synthetic data from structural causal models* that achieves strong in-context classification/regression without task-specific fine-tuning. |
| **[LLaDA-Image: Building Strong Image Generators with Fully Open Training Recipes](http://arxiv.org/abs/2609.03796v1)** | Chen, Chen, Chen et al. | Unified diffusion framework pairing a from-scratch 6B DiT with a frozen LLaDA2.0-Mini understanding module; releases full training recipes, reducing reliance on paired image-text data. |
| **[Flip, Don't Shuffle: Watermarking LLMs at the Speed of Inference](http://arxiv.org/abs/2609.03844v1)** | Ceppi, Sanchez | Stateless Bernoulli Watermarking (SBW) determines green-list membership via independent per-token Bernoulli trials — zero vocabulary permutation, single comparison per token, negligible latency. |
| **[Beyond Endpoint Scores: Time- and Capacity-Conditioned Evaluation of Continual Knowledge Updating](http://arxiv.org/abs/2609.03900v1)** | Choi | Shows single-checkpoint evaluation is insufficient; compares periodic hierarchy vs. cumulative replay over 24-month Wikidata, revealing different operating points dominate at different times/capacities. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[Speak for Me: Giving LLMs the Situational Awareness to Participate in a Meeting](http://arxiv.org/abs/2609.03923v1)** | Khan, Kirstein, Ruas et al. | Identifies that prompt-only delegates miss 51.4% of speaking opportunities on AMI; introduces structured tracking of stances, coverage, and floor to give agents meeting situational awareness. |
| **[Value-Preserving Architectures for Agentic AI Systems](http://arxiv.org/abs/2609.03920v1)** | Pesare, Dolci, Hose et al. | Proposes architectural patterns (not just prompts) to enforce privacy, fairness, safety in LLM-based multi-agent systems — treating values as first-class architectural constraints. |
| **[Proactive Service Agents: A Unified Decision Framework, Methods, and Evaluation](http://arxiv.org/abs/2609.03727v1)** | Tang, Cao, Tang et al. | Shifts agent paradigm from *reactive* (user instruction → action) to *proactive* (infer service opportunities from incomplete environmental/user signals); provides framework + benchmark. |
| **[DNative-Twin: Decision Graphs and Digital Twins for Reconstructable Agentic Decisions](http://arxiv.org/abs/2609.03787v1)** | Pang, Xie, Han et al. | Graph-native digital twin that records evidence, tool state, rules, authorizations, and action paths — making agent decisions auditable and reconstructable post-hoc. |
| **[Towards Numerical TOHTN Planning with SMT-based HTN-SAT Encoding](http://arxiv.org/abs/2609.03938v1)** | Quenard, Togarepi, Pellier et al. | Extends SAT-based HTN planning with SMT to handle numeric fluents, enabling hierarchical planning with quantitative resources/constraints. |
| **[SimSkill: A Lifelong Learning AI Agent for Autonomous Mastery of Traffic Simulation](http://arxiv.org/abs/2609.03753v1)** | Liu, Wang, Bie | Self-evolving agent that transforms experience into reusable competence for traffic simulation; emphasizes durable skill acquisition over single-request solving. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[GraFT: A Training-Free Framework for Spatial Reasoning in MLLMs via 3D Scene Graphs](http://arxiv.org/abs/2609.03892v1)** | Du, Ropero, Turkoz et al. | Training-free: constructs 3D scene graphs from vision inputs, grounds MLLM reasoning in precise geometry, enables egocentric↔allocentric transformation and fine-grained measurement. |
| **[RATL: Learning from Retrieved Residuals for Robust Multivariate Time-Series Forecasting](http://arxiv.org/abs/2609.03937v1)** | He, Cang, Ning et al. | Retrieval-augmented forecasting that learns *residuals* (not raw targets) from similar historical patterns, robust to scale/shift/dynamics mismatch across retrieved samples. |
| **[STAIR (STructure Aware Information Retriever): A novel dataset and LLM based retriever for document structure augmentation](http://arxiv.org/abs/2609.03874v1)** | Kumar, Pulivarthi, kumar et al. | Addresses "lost in the middle" by retrieving *document structure* (sections, hierarchy) alongside content; new dataset + LLM-based retriever for structure-aware RAG. |
| **[Differentiable Interval Bottlenecks for Interpretable Anomaly Detection in Numerical Data](http://arxiv.org/abs/2609.03878v1)** | Diop, Plantevit | Autoencoder with latent bottleneck as learned soft interval memberships — flags anomalies *and* explains which feature ranges drove the decision, natively. |
| **[Pushing the (Decision) Boundaries: Dynamically Calibrating Differentially Private Noise to Explainability in Federated Learning](http://arxiv.org/abs/2609.03851v1)** | Khavkin, Lee, Jin et al. | Dynamically adjusts DP noise magnitude per-client based on local explanation fidelity, preserving utility for trustworthy FL explanations. |
| **[A Blind Trust, the Bloody Thrust: When Attacker-Controlled Hook Updates Steer AI Agent Harnesses towards Malicious Behaviors](http://arxiv.org/abs/2609.03884v1)** | Li, Zhang, Hou et al. | Exposes critical supply-chain vulnerability: lifecycle hooks (session start, tool calls, file edits) run with host privileges but ship as config — can be weaponized without LLM awareness. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Key Contribution |
|-------|---------|------------------|
| **[IndicSafeEval: Safety Robustness of LLMs under Multilingual Persuasive Jailbreak Attacks](http://arxiv.org/abs/2609.03781v1)** | Mondal, Mamta, Varshney et al. | First multilingual persuasive jailbreak benchmark covering low-resource Indic languages; reveals alignment failures invisible in English-only evaluation. |
| **[Rethinking World Models for Safety-Critical Embodied Systems](http://arxiv.org/abs/2609.03774v1)** | Ma, Huang, Kim et al. | Argues high predictive likelihood ≠ safe decision-making; proposes evaluation criteria for world models preserving *safety-critical evidence* in embodied settings. |
| **[CauseCollab: Causal Unified and Modality-Agnostic Network for Heterogeneous Collaborative Perception](http://arxiv.org/abs/2609.03818v1)** | Li, Li, Yuan et al. | Causal, modality-agnostic fusion for multi-agent perception — handles heterogeneous sensors/models via causal invariant representations, not just protocol alignment. |
| **[Can LLMs Extract Architectural Design Decisions from Source Code Commits?](http://arxiv.org/abs/2609.03721v1)** | Karan, Dhar, Soliman et al. | Exploratory study on recovering undocumented Architectural Design Decisions from commits; evaluates LLM capability for Architectural Knowledge Management. |
| **[Beyond BLEU: A Case for Redefining Sign Language Translation Benchmarks](http://arxiv.org/abs/2609.03734v1)** | Ranum, Fish, Hadfield et al. | Demonstrates BLEU-4 inadequacy for SLT: models exploit spurious spoken-language correlations; argues for multimodal, linguistically grounded metrics. |

---

## 3. Research Trend Signal

**Three convergent directions are crystallizing.** First, **agent infrastructure hardening**: the community is moving from "can the agent do X?" to "can we trust/audit/secure the agent harness?" — evidenced by lifecycle-hook attacks (Blind Trust), value-preserving architectures, decision-graph auditability (DNative-Twin), and multilingual safety benches (IndicSafeEval). Second, **compute-native efficiency primitives**: Free Pause Tokens (parallel compute without sequence growth), Headroom-Drift Replay (principled trajectory reuse in GRPO), and SBW watermarking (inference-speed stateless marking) all optimize the *marginal cost of reasoning* rather than raw model quality. Third, **geometric and causal grounding for multimodal reasoning**: GraFT's 3D scene graphs, CauseCollab's causal fusion, LLaDA-Image's open diffusion recipes, and Semantic Bayesian World Models all reject pure pixel/token prediction in favor of structured, interpretable representations that support verification and composition. Together, these signal a shift from *capability demonstration* to *deployable, auditable, efficient systems* — the hallmarks of a field entering its engineering phase.

---

## 4. Worth Deep Reading

| Paper | Why It Demands Full Reading |
|-------|-----------------------------|
| **[Headroom-Drift Replay](http://arxiv.org/abs/2609.03941v1)** | Provides the first *principled* replay control primitive for GRPO with formal headroom/drift quantification. If you work on RL post-training, agentic RL, or data-efficient reasoning, this directly addresses the "repeated fresh rollout" bottleneck with theory-backed mechanics — not heuristics. |
| **[A Blind Trust, the Bloody Thrust](http://arxiv.org/abs/2609.03884v1)** | Exposes a *new attack surface* (lifecycle hooks) that bypasses LLM oversight entirely. The implications for agent harness design, supply-chain security, and privilege separation are immediate and severe. Required reading for anyone building or deploying agent infrastructure. |
| **[GraFT](http://arxiv.org/abs/2609.03892v1)** | Training-free 3D spatial reasoning via scene graphs is a rare *practical* advance: it works with frozen MLLMs, enables precise measurement/viewpoint transformation, and grounds language in geometry. The ablation on egocentric↔allocentric transformation alone makes it a reference for embodied multimodal work. |

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*