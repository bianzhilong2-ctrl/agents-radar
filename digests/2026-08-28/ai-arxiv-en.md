# ArXiv AI Research Digest 2026-08-28

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-28 08:01 UTC

---

# ArXiv AI Research Digest — 2026-08-28

## 1. Today's Highlights

Today's submissions reveal a maturing field converging on three critical frontiers: **inference-time scaling without repeated generation** (CritICL, TTPO) that extracts latent supervision from model failures, **persistent agent learning** through skill evolution and experience compilation (WikiSkill, RedEvoAgent, ACE), and **rigorous evaluation methodology** for LLM judges, mixed-origin detection, and probabilistic world modeling. Notable breakthroughs include evolution strategies outperforming GRPO for reasoning coverage, a new framework showing that not all "eval-awareness" should be suppressed, and the first cost-transparent pretraining recipe on consumer hardware (Puro-2B on a single RTX 5090 for $5,090). The field is increasingly focused on **mechanistic understanding** — from causal cache carriers in latent CoT to moral knowledge geometry — signaling a shift from scale-at-all-costs toward interpretable, auditable systems.

---

## 2. Key Papers

### 🧠 Large Language Models

**Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090**
- [Link](http://arxiv.org/abs/2608.27370v1) — Kairong Luo, Jiarui Cui, Yaorui Yin et al.
- *Contribution:* A complete hardware-aware pretraining recipe achieving competitive performance on a single consumer GPU for under $5K, democratizing LLM research for academic and open-source communities.

**CritICL: Inference-Time Weak-to-Strong Generalization from Small LM Failure Modes**
- [Link](http://arxiv.org/abs/2608.27455v1) — Yufan Wu, Yinghui He, Zhengyi Hu et al.
- *Contribution:* A novel inference-time framework that uses small-model failure modes to guide large models without repeated generation or external verifiers, reducing compute while improving reasoning.

**Understanding Evolution Strategies for LLM Reasoning: Broader Coverage than GRPO**
- [Link](http://arxiv.org/abs/2608.27351v1) — Yunpeng Ba, Zhi Zheng, Yue Xie et al.
- *Contribution:* Provides the first systematic analysis showing ES achieves broader reasoning coverage than GRPO for LLM post-training, establishing ES as a memory-efficient alternative.

**Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance**
- [Link](http://arxiv.org/abs/2608.27340v1) — Allison Zhuang, Santiago Aranguri
- *Contribution:* Shows that verbalized eval-awareness in CoT decomposes into distinct types, where "capabilities framing" predicts compliance — challenging blanket suppression strategies in safety pipelines.

**Making Clinical Language Models Auditable: Concept-Guided Fine-Tuning**
- [Link](http://arxiv.org/abs/2608.27397v1) — Jin Mu, Guanhua Chen
- *Contribution:* CAST (SAE-based framework) suppresses note-specific artifacts in clinical LMs to enable robust, auditable predictions under deployment shift.

---

### 🤖 Agents & Reasoning

**WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**
- [Link](http://arxiv.org/abs/2608.27454v1) — Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng et al.
- *Contribution:* Proposes a framework for distilling agent interaction experience into reusable, persistent skills that enable progressive adaptation over time.

**What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents**
- [Link](http://arxiv.org/abs/2608.27260v1) — Xingshan Zeng, Zishan Xu, Boju Zhang et al.
- *Contribution:* Re-frames agentic data generation through the lens of consistency across environments, tasks, interactions, and success signals, addressing the "merely abundant" failure mode.

**RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution**
- [Link](http://arxiv.org/abs/2608.27439v1) — Junjie Zhang, Hui Liu, Kecheng Chen et al.
- *Contribution:* Applies skill evolution to automated red-teaming, addressing persistent state-change risks in product-level LLM agent deployments that go beyond unsafe text generation.

**Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents**
- [Link](http://arxiv.org/abs/2608.27427v1) — Yisen Xi
- *Contribution:* PES architecture separates evolving persona from audited execution, enabling governed organizations to deploy adaptive LLM agents under execution audit constraints.

**Verify Smarter, Evolve Further: Behavior-Aware Verification for Harness Evolution**
- [Link](http://arxiv.org/abs/2608.27311v1) — Jinghan Xu, Yikai Zhang, Aili Chen et al.
- *Contribution:* Avoids wasteful rollouts in agent harness evolution by scoring candidates on task-relevant behaviors only, drastically reducing verification cost.

**INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment**
- [Link](http://arxiv.org/abs/2608.27348v1) — Yutong Zhang, Jianshuo Dong, Peng Xu et al.
- *Contribution:* A CoT-monitoring approach that operationalizes intent as a tool for detecting harmful agent actions arising from goal conflicts, advancing agentic safety measurement.

---

### 🔧 Methods & Frameworks

**TTPO: Test-Time Policy Optimization**
- [Link](http://arxiv.org/abs/2608.27448v1) — Aozhe Wang, Zhengxi Lu, Jianze Wang et al.
- *Contribution:* Removes the ground-truth dependency of post-training RL/OPSD methods, enabling test-time training for mathematical reasoning without external labels.

**Consolidating RLVR Capabilities Across Domains: Fusion Paradigms**
- [Link](http://arxiv.org/abs/2608.27409v1) — Siye Wu, Kai Yang, Yuchen Cai et al.
- *Contribution:* Organizes three fusion paradigms (by artefact reused) for consolidating domain-specific RLVR experts into a single multi-capability model.

**Boosting LLM Exploration via Weak-Model Guidance in RLVR**
- [Link](http://arxiv.org/abs/2608.27420v1) — Xingyu Shen, Huishuai Zhang, Peng Li et al.
- *Contribution:* Uses weak-model guidance to prevent entropy collapse in RLVR, preserving reasoning diversity and pass@k performance at large k.

**Beyond Parallel Blindness: Information Floors and Model Gaps in Block Drafting**
- [Link](http://arxiv.org/abs/2608.27339v1) — Xinwei Qiang, Xiang Fang, Chang Chen et al.
- *Contribution:* Separates within-block path information loss from modeling error in block drafters via an information-theoretic decomposition, enabling targeted improvements.

**SCIT: Testing Causal Cache Carriers in Latent Chain-of-Thought Models**
- [Link](http://arxiv.org/abs/2608.27265v1) — Yi Ding, Lijun Huang, Menglin Yang
- *Contribution:* Introduces a Suffix Cache Interchange Test with exact source-recipient counterfactuals to causally identify which latent tokens carry reasoning in continuous CoT.

**Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search**
- [Link](http://arxiv.org/abs/2608.27266v1) — Yuan Chang, Xiaoqi Chen
- *Contribution:* Argues that simple "naive" prompt optimization rivals complex search for agentic RSI, simplifying a widely used component of self-improvement pipelines.

**Stochastic Estimation of Transduced Language Models**
- [Link](http://arxiv.org/abs/2608.27428v1) — Vésteinn Snæbjarnarson, Samuel Kiegeland, Manuel de Prada Corral et al.
- *Contribution:* Provides efficient stochastic estimation methods for target-prefix probabilities in finite-state-transducer composed language models, avoiding full summation.

**A Finite Sample Analysis for Quantile TD Learning in Distributional RL**
- [Link](http://arxiv.org/abs/2608.27313v1) — Zijie Cheng, Xiang Li, Yang Peng et al.
- *Contribution:* Establishes the first global finite-sample guarantee for synchronous QTD, with proof decomposition isolating two distinct stability mechanisms.

---

### 📊 Applications

**SWE-Prime: Fewer Trajectories, Better Performance**
- [Link](http://arxiv.org/abs/2608.27449v1) — Dewu Zheng, Ruizhe Ye, Yanlin Wang et al.
- *Contribution:* Demonstrates that trajectory quality—not quantity—drives SFT for software issue resolution, challenging the "scale up trajectories" orthodoxy in agent training.

**From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench**
- [Link](http://arxiv.org/abs/2608.27442v1) — Dewu Zheng, Yanlin Wang, Xiwen Wang et al.
- *Contribution:* Shifts automated code review evaluation from single-turn to iterative multi-turn interaction benchmarks, better reflecting real developer workflows.

**CLAP: Cross-Embodiment Video World Models as Zero-Shot Physical Simulators**
- [Link](http://arxiv.org/abs/2608.27406v1) — Kechen Liu, Ola Shorinwa
- *Contribution:* Unifies heterogeneous robot video data into a single zero-shot physical simulator by training across embodiments, breaking single-robot data silos.

**PAWBench: How Far Are We from Probabilistically Aligned World Modeling?**
- [Link](http://arxiv.org/abs/2608.27345v1) — Yuandong Pu, Le Zhuo, Sayak Paul et al.
- *Contribution:* Proposes benchmarking video world models on distributional fidelity (not just plausible trajectories), capturing stochastic physical processes.

**CLAP / Mechallistic Reaction Prediction (MAELLE)**
- [Link](http://arxiv.org/abs/2608.27429v1) — Nguyen Xuan-Vu, Octavian Susanu, Daniel Armstrong et al.
- *Contribution:* MAELLE models chemical reactions as electron-occupation transformations via discrete flow matching, replacing heuristic graph edits with first-principles generative modeling.

**Mechanistic Reaction Prediction via Discrete Flow Matching on Graph-Structured Electron Occupation**
- [Link](http://arxiv.org/abs/2608.27429v1) — Nguyen Xuan-Vu, Octavian Susanu, Daniel Armstrong et al.
- *Contribution:* A chemistry-specific foundation model alternative to SMILES-based reaction prediction with grounded physical inductive bias.

**LLMs Can Design Near-Optimal OR Algorithms**
- [Link](http://arxiv.org/abs/2608.27296v1) — Jackie Baek
- *Contribution:* Demonstrates that LLMs can design competitive algorithms for well-specified OR problems (inventory, queueing, assortment) at two levels of model involvement.

**BrailleBench: Multi-Criteria Braille Comprehension in LLMs**
- [Link](http://arxiv.org/abs/2608.27268v1) — Jinghan Zhang, Fengran Mo, Zhiyu Chen et al.
- *Contribution:* First systematic evaluation of LLM capabilities for blind/deafblind users, exposing accessibility gaps in AI systems.

**D2C-Routing: Mixed-Origin AI-Generated Text Detection**
- [Link](http://arxiv.org/abs/2608.27380v1) — Xin Chen, Fuwei Zhang, Yiqi Tong et al.
- *Contribution:* Re-frames detection as dimension-to-composition routing, separating content origin from expression origin — essential for human-AI co-authored text.

**Difference-in-Differences on a Censored Rating Scale Can Manufacture an Effect: LLM-Judge Audit**
- [Link](http://arxiv.org/abs/2608.27309v1) — Shuyi Fan, Boyuan Deng, Mengyu Xu et al.
- *Contribution:* Pre-registered audit showing that double-difference designs on bounded LLM-judge scales can produce spurious bias certifications — a methodological correction with broad audit implications.

**CorporateBench: Q&A Benchmarking with Temporal Knowledge Bases**
- [Link](http://arxiv.org/abs/2608.27391v1) — Sil Hamilton, Albert Yu Sun, Oscar J. Romero et al.
- *Contribution:* Human-validated enterprise Q&A benchmark addressing the gap between synthetic simplicity and real corporate document collections.

**RATIO: Retrieval Across Typed Ideation Operations in Scientific Literature**
- [Link](http://arxiv.org/abs/2608.27394v1) — Maayan Sharon, Tom Hope
- *Contribution:* Typed-operation benchmark (zoom-in/zoom-out/parallel) for retrieval systems serving scientific inspiration, moving beyond relevance-only metrics.

---

## 3. Research Trend Signal

Three converging trends emerge from today's submissions. **First, the field is moving from "more data/compute" to "smarter data/smarter compute":** SWE-Prime and Puro-2B directly challenge scale-orthodoxy, while TTPO and CritICL push intelligence into inference time rather than training. **Second, agent systems are formalizing experience accumulation** — WikiSkill, RedEvoAgent, ACE, and Verify Smarter all treat interaction history as a first-class artifact requiring compilation, audit, and evolution. **Third, evaluation methodology is undergoing a credibility crisis:** the LLM-judge audit, eval-awareness decomposition, mixed-origin detection reframing, and PAWBench's distributional fidelity all reflect growing skepticism toward single-number benchmarks. Together these signal a discipline-wide maturation: the next phase of AI research will be defined not by what models can generate, but by what we can verify, audit, and accumulate.

---

## 4. Worth Deep Reading

1. **[CritICL: Inference-Time Weak-to-Strong Generalization from Small LM Failure Modes](http://arxiv.org/abs/2608.27455v1)** — The most conceptually elegant paper of the day. It inverts the typical weak-to-strong supervision paradigm by using *failure modes* (not successful demonstrations) as the supervision signal at inference time, potentially replacing expensive test-time scaling with single-pass reasoning improvements.

2. **[Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1)** — A landmark reproducibility paper. The full hardware-aware pretraining recipe on a single consumer GPU is a direct intervention against the compute-walled-gate of frontier research and deserves careful study by anyone building accessible AI infrastructure.

3. **[Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance](http://arxiv.org/abs/2608.27340v1)** — A subtle but consequential finding for AI safety. The result that capabilities-framed eval-awareness predicts compliance (while other framings do not) means safety pipelines that blanket-suppress eval-awareness may be discarding signal, not noise — a counterintuitive result with immediate policy implications.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*