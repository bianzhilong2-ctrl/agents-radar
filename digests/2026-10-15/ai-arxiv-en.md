# ArXiv AI Research Digest 2026-10-15

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-15 02:24 UTC

---

**AI Research Digest – October 15 2026**  

---

### 1. Today’s Highlights  

- **Humanoid control & diffusion**: *Modeling and Understanding Neural Weights of Humanoid Policies with Diffusion* shows how diffusion models can decode the high‑dimensional weight space of humanoid policies, opening a path to interpretable, modular robot behavior.  
- **Mobile manipulation with human guidance**: *Hierarchical Residual Policy Learning for Real‑World Mobile Manipulation* introduces a hierarchy that lets sparse human demonstrations bootstrap complex dexterous tasks, dramatically reducing the trial‑and‑error burden of real‑world robotics.  
- **Language‑agent co‑evolution**: *Co‑Evolving Acting and Forecasting for Language Agents* demonstrates that joint training of action and world‑model forecasting yields agents that plan farther ahead with far fewer rollouts, hinting at a new paradigm for scalable agentic AI.  
- **Elastic transformers & continuous attention**: *Your Transformer Is Secretly Elastic* and *Continuum Attention* both propose mechanisms that break the rigid “S/B/L” size class of transformers, enabling on‑the‑fly adaptation of model capacity to hardware and latency constraints.  
- **Self‑improvement & safety**: *AdaRSI* and *SwarmRSI* illustrate recursive self‑improvement pipelines that let embodied and scientific agents refine their own capabilities without human‑provided curricula, while *Manacá‑1B‑Instruct‑2* offers a reproducible safety‑alignment recipe for low‑resource languages.

These works collectively push the frontier in **interpretable robotics**, **agentic reasoning**, **model elasticity**, and **self‑directed learning**, while delivering concrete tools for **multimodal code intelligence**, **medical imaging**, and **agricultural disease detection**.

---

### 2. Key Papers  

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)  

| Paper | Authors (abbreviated) | One‑sentence key contribution | Why it matters |
|-------|----------------------|------------------------------|----------------|
| **Your Transformer Is Secretly Elastic** [http://arxiv.org/abs/2610.20588v1] | Simoncini et al. | Proposes an elasticity mechanism that lets transformers adapt their effective size at runtime, eliminating fixed model‑size classes. | Enables on‑demand scaling to match hardware and latency constraints, reducing waste and improving deployability. |
| **Continuum Attention** [http://arxiv.org/abs/2610.20586v1] | Khadangi | Replaces discrete key/value lookups with continuous, piecewise‑linear memory integration, providing smoother contextual blending. | Offers a new attention primitive that can capture finer‑grained relationships and may improve model stability. |
| **Latent Compaction with Test‑Time Training** [http://arxiv.org/abs/2610.20582v1] | Chen et al. | Learns a document‑specific compact KV‑cache at inference time, preserving task‑relevant info while cutting memory. | Directly tackles the memory blow‑up of long‑context LLMs, making large‑context models practical. |
| **Decoupled Marginal Sharpening for Training‑Free Inference‑Time Scaling** [http://arxiv.org/abs/2610.20483v1] | Wang et al. | Improves reasoning at inference by sharpening the marginal distribution of token predictions without any weight updates or external rewards. | Provides a reward‑free, parameter‑free way to boost LLM reasoning quality, valuable for resource‑constrained deployments. |

#### 🤖 Agents & Reasoning  

| Paper | Authors (abbreviated) | One‑sentence key contribution | Why it matters |
|-------|----------------------|------------------------------|----------------|
| **Co‑Evolving Acting and Forecasting for Language Agents** [http://arxiv.org/abs/2610.20597v1] | Yu et al. | Jointly learns action policies and world‑model forecasts, letting agents plan farther with far fewer rollouts. | Reduces the expensive sampling bottleneck in agentic RL, enabling longer‑horizon reasoning. |
| **One Task, Many Interfaces: Simple Cross‑Interface Consistency Training Improves LLM Agent Robustness** [http://arxiv.org/abs/2610.20576v1] | Tajdini et al. | Introduces a consistency regularizer that aligns LLM behavior across semantic‑preserving interface variants, boosting robustness. | Makes agents less brittle to UI changes, a crucial step toward reliable real‑world deployment. |
| **Same Claim, Different Interpretations: How LLM Agents Resolve Ambiguity in Scientific Claims** [http://arxiv.org/abs/2610.20457v1] | Rao et al. | Studies how LLM agents pick among multiple defensible interpretations of underspecified scientific statements. | Illuminates the latent bias in agentic fact‑checking and informs better prompting/alignment strategies. |
| **AdaRSI: On‑Demand Recursive Self‑Improvement for Embodied Agents** [http://arxiv.org/abs/2610.20474v1] | Wang et al. | Allows pretrained vision‑language‑action models to autonomously refine their own policies on long‑horizon tasks using on‑demand bootstrapping. | Paves the way for agents that improve themselves without continuous human supervision. |

#### 🔧 Methods & Frameworks  

| Paper | Authors (abbreviated) | One‑sentence key contribution | Why it matters |
|-------|----------------------|------------------------------|----------------|
| **Generative Representation Learning for Scalable Latent Tokenization** [http://arxiv.org/abs/2610.20533v1] | Baade et al. | Learns a self‑supervised tokenizer that factorizes pointwise mutual information via contrastive objectives. | Opens a principled route to learning compact, high‑capacity tokenizers for generative models. |
| **The Physics Is the Network: Fast, Training‑Free Neural Emulation** [http://arxiv.org/abs/2610.20525v1] | Todorovic et al. | Embeds known polynomial dynamics directly into a continuous‑time neural representation, enabling instant emulation without training. | Bridges symbolic physics and neural computation, delivering accurate, zero‑shot simulators. |
| **Selective Growing Q‑Networks (SGQN)** [http://arxiv.org/abs/2610.20463v1] | Nooranbakht et al. | Extends GQN to selectively grow action‑grid resolution only where needed, balancing exploration and precision. | Improves sample efficiency and final performance in continuous‑control tasks with discretized actions. |
| **Bayesian Learning to Select Fair Classifiers** [http://arxiv.org/abs/2610.20514v1] | Kher et al. | Formulates an online selection policy that queries agents adaptively to meet fairness constraints while minimizing labeling cost. | Makes fairness evaluation practical in high‑throughput or streaming scenarios. |

#### 📊 Applications  

| Paper | Authors (abbreviated) | One‑sentence key contribution | Why it matters |
|-------|----------------------|------------------------------|----------------|
| **VascuSR: Iterative Anatomy‑Aware Diffusion for CT Super‑Resolution** [http://arxiv.org/abs/2610.20509v1] | Ni et al. | Generates anatomically consistent, high‑resolution CT slices via diffusion conditioned on vessel priors. | Improves diagnostic quality from low‑dose scans while preserving clinical anatomy. |
| **PrismaCoder: Pushing the Boundaries of Open Multimodal Code Intelligence** [http://arxiv.org/abs/2610.20538v1] | Sun et al. | Synthesizes decomposed rubrics that jointly reason over code syntax and visual outputs, enabling open‑source multimodal coding. | Bridges the gap between program semantics and visual artifacts, advancing open AI for developer tools. |
| **Detection of Potato Plant Leaf Diseases using Convolutional Neural Networks** [http://arxiv.org/abs/2610.20544v1] | Alemayehu et al. | Trains a lightweight CNN to classify healthy, early blight, and late blight potato leaves with high accuracy. | Provides a practical, low‑cost solution for food‑security‑critical crop disease monitoring in Ethiopia. |

---

### 3. Research Trend Signal  

Today’s submissions reveal a clear shift toward **self‑referential and runtime‑adaptable AI systems**.  Papers on *elastic transformers* and *continuous attention* point to a move away from static model families toward hardware‑aware, on‑the‑fly capacity scaling.  In the **agentic** space, the focus is on **reducing supervision cost** (e.g., co‑evolving forecasts, cross‑interface consistency, recursive self‑improvement) and on **explaining ambiguity resolution**.  Meanwhile, **methods that combine symbolic knowledge with neural computation** (physics‑embedded emulation, Hodge‑Laplacian MoE for PDEs) suggest a growing integration of domain‑aware priors.  The emergence of **test‑time learning** (Latent Compaction, Decoupled Marginal Sharpening) and **online fair selection** underscores a broader trend: models that can adapt, evaluate, and improve without fresh training data.  Finally, the proliferation of **domain‑specific benchmarks** (ChronoCulture, PerSo, MolLean) reflects the community’s push toward rigorous, interpretable evaluation for social, temporal, and scientific reasoning.  Together, these threads point to a future where AI systems are more **modular, context‑sensitive, and autonomously improving**.

---

### 4. Worth Deep Reading  

1. **Co‑Evolving Acting and Forecasting for Language Agents** – This work tackles a core bottleneck in agentic RL (expensive rollouts) by teaching agents to simultaneously predict their own actions and the environment.  Understanding its joint training scheme could unlock longer‑horizon reasoning for future language agents, a pivotal capability for real‑world automation.  

2. **

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*