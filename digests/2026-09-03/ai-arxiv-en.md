# ArXiv AI Research Digest 2026-09-03

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-03 02:07 UTC

---

**1. Today’s Highlights**  
The flood of ArXiv submissions on 3 September 2026 reveals a decisive shift toward *practical safety and alignment* of large language models, with new methods for automated vulnerability injection, bias‑aware pruning, and shared‑expert alignment.  Simultaneously, multimodal health diagnostics (loneliness, radiology summarisation) and domain‑specific benchmarks (CivBench, UT‑Bench, MultiGhostBench) illustrate the expanding use of LLMs beyond pure text generation.  In systems engineering, researchers are building *efficient, scalable* foundations—Kronecker‑Fisher Hessian approximations, streaming model selection, and real‑time video compression—while theory continues to explore *graph‑based* and *knowledge‑graph* reasoning, uncertainty propagation, and robust RL credit assignment.

**2. Key Papers**  

| # | Title (ArXiv link) | Authors (abbr.) | One‑sentence contribution & impact |
|---|--------------------|----------------|-----------------------------------|
| 1 | **Automated Vulnerability Injection in Smart Contracts Using Large Language Models** (http://arxiv.org/abs/2609.02624v1) | L. Migliaccio, R. Natella, N. Ivaki et al. | Shows how LLMs can generate realistic Solidity bugs, providing the first large‑scale, ground‑truth dataset for evaluating smart‑contract security tools. |
| 2 | **Scalable Direction-Following TTS via Voice Impression‑Guided Pseudo Triplet Construction** (http://arxiv.org/abs/2609.02623v1) | K. Fujita, Y. Ijima | Introduces a pseudo‑triplet framework that lets TTS systems obey arbitrary speaker‑style directions while preserving speaker identity, enabling controllable voice synthesis at scale. |
| 3 | **Collective Creativity in Hybrid Societies** (http://arxiv.org/abs/2609.02620v1) | M. Youngblood, K. Mudd, M. Anglada‑Tort et al. | Argues that AI‑generated cultural artifacts arise from two distinct creativity streams (human‑machine co‑creation), offering a taxonomy that reconciles debates on enrichment vs. impoverishment. |
| 4 | **Predictors of Loneliness in Older Adults Using Multimodal Analysis of Speech and Language** (http://arxiv.org/abs/2609.02606v1) | V. Khandode, S. Kosuri, N. Sehgal et al. | Demonstrates that combined speech‑prosody and lexical features reliably forecast loneliness in natural conversations, opening a scalable, objective health‑monitoring tool. |
| 5 | **Competitive Market Behavior of LLMs** (http://arxiv.org/abs/2609.02580v1) | P. Struski, J. Swistak, I. Okulska et al. | Empirically tests LLM agents in market‑mechanism simulations, revealing mismatches between human‑designed incentives and LLM strategic behavior. |
| 6 | **ProbeMatchDTI: Probe-Driven Multi‑Scale Biochemical Pattern Matching for Drug‑Target Interaction Prediction** (http://arxiv.org/abs/2609.02549v1) | Q. Hao, M. Fan, Z. Dong et al. | Proposes a multi‑scale probe‑driven matching scheme that captures weak but binding‑relevant molecular patterns, improving DTI prediction over passive representation learning. |
| 7 | **Learn from Whoever Is Right: Answer‑Verified Multi‑Teacher Distillation for Multi‑Domain LLMs** (http://arxiv.org/abs/2609.02548v1) | X. He, X. Li, B. Wu et al. | Routes each training example to the teacher best suited to its domain, yielding a single distilled model that matches the performance of multiple specialized teachers. |
| 8 | **Debias‑SparseGPT: Bias‑Aware Pruning for Large Language Models** (http://arxiv.org/abs/2609.02496v1) | I. Proskurina, G. Metzler, A. Gourru et al. | Extends SparseGPT pruning with bias‑sensitivity, reducing amplification of social biases while preserving model compression gains. |
| 9 | **CivBench: A Long‑Horizon Benchmark for Tool‑Mediated Agents in Civilization VI** (http://arxiv.org/abs/2609.02459v1) | A. Tudor‑David, L. Andrews, J. Wilkinson et al. | Provides a 300‑turn, tool‑use intensive environment for evaluating agents’ sustained planning, offering the first large‑scale testbed for long‑horizon LLM‑agent behavior. |
|10| **SEAL: Reinforcing Global Safety in Mixture‑of‑Experts through Shared Expert Alignment** (http://arxiv.org/abs/2609.02293v1) | Q. Meng, Y. Zha, J. Pei et al. | Introduces shared experts that enforce consistent safety constraints across all MoE activations, improving global alignment without sacrificing scaling efficiency. |
|11| **SCX Router: Streaming Zero‑Shot Model Selection with a Decoder‑KV Classifier and a Real‑World Task Ontology** (http://arxiv.org/abs/2609.02292v1) | I. Stepanov, A. Smechov, M. Shtopko et al. | Enables per‑task, on‑the‑fly selection of the most appropriate LLM endpoint based on a lightweight decoder‑KV classifier and a domain ontology, optimizing speed, cost, and quality. |
|12| **Entangled Representations Amplify Collateral Damage in Unlearning** (http://arxiv.org/abs/2609.02285v1) | E. Wybitul, T.G.J. Rudner, C. Schroeder de Witt | Provides the first controlled experiment confirming that entangled knowledge in neural weights hinders targeted unlearning, guiding future model‑design and privacy‑preserving training. |

**3. Research Trend Signal (≈150 words)**  
The September 2026 ArXiv landscape highlights a dual thrust: *safety‑centric* advances (vulnerability injection, bias‑aware pruning, shared‑expert alignment) and *efficiency‑centric* scaling (Kronecker‑Fisher Hessian approximation, streaming model selection, real‑time video compression).  Simultaneously, there is a surge of multimodal health applications (loneliness detection, radiology summarisation) and domain‑specific benchmarks (CivBench, UT‑Bench) that push LLMs beyond text generation into long‑horizon, tool‑mediated, and cross‑lingual settings.  Theoretical work on graph‑based reasoning, uncertainty propagation, and percolation dynamics in optimization underscores a growing interest in *structured* representations for knowledge‑graph completion and anomaly detection.  Overall, the community is moving toward models that are simultaneously safer, more interpretable, and capable of operating reliably in complex, real‑world pipelines.

**4. Worth Deep Reading**  

1. **Automated Vulnerability Injection in Smart Contracts Using Large Language Models** – This paper creates the first large‑scale, ground‑truth dataset for smart‑contract security, a critical need as blockchain adoption expands. Understanding how LLMs can deliberately introduce realistic bugs is essential for building robust detection tools and for assessing the limits of automated audit suites.  

2. **SEAL: Reinforcing Global Safety in Mixture‑of‑Experts through Shared Expert Alignment** – As MoE architectures become the de‑facto scaling method for LLMs, ensuring consistent safety across all expert pathways is a pressing challenge. SEAL’s shared‑expert design offers a principled way to embed universal safety constraints, making it a cornerstone for future aligned, large‑scale language models.  

3. **CivBench: A Long‑Horizon Benchmark for Tool‑Mediated Agents in Civilization VI** – The 300‑plus‑turn, tool‑use intensive setting uniquely tests sustained planning, credit assignment, and resource management—capabilities that are otherwise difficult to evaluate. Deep reading of CivBench will reveal how researchers are constructing realistic, long‑term agent environments and provide a benchmark that can drive systematic progress in agentic AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*