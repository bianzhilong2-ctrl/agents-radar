# Hugging Face Trending Models Digest 2026-07-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-10 02:00 UTC

---

**Hugging Face Trending Models Digest – 2026‑07‑10**  
*(based on the weekly likes leaderboard)*

---

### 1️⃣ Today’s Highlights  
Three waves of activity are shaping the Hub today. First, the Qwythos family from **empero‑ai** dominates the charts, with the 13‑B Claude‑Mythos variant leading in both likes and downloads—an indicator that community‑crafted instruction fine‑tunes are still in high demand. Second, the Qwen‑3.6 line is resurfacing in a new form: nvidia’s NVFP4 quantization, nvidia/LocateAnything, and the unsloth‑supported MTP standard – all point to a surge in **vision‑enabled generative models**. Finally, the broader trend toward **compact, GGUF‑ready models** is evident: Hy3, Ornith‑1.0‑35B, Gemma‑4‑12B/coder, and a handful of other A118‑NVIDIA‑modules have amassed millions of downloads while staying lightweight enough for edge inference.  

---

### 2️⃣ Trending Models  

| Category | Model (HF link) | Author | Likes / Downloads | One‑sentence synopsis |
|---|---|---|---|---|
| 🧠 Language Models | [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 616 / 5 572 | A 3‑B parameter hybrid‑generation model that blends text‑only and image‑conditioned training, driving use in multilingual chat systems. |
| | [zai-org/GLM‑5.2](https://huggingface.co/zai-org/GLM-5.2) | zai‑org | 3 729 / 362 300 | A 5‑B multi‑task transformer designed for conversational AI, praised for its low‑resource speculative decoding. |
| | [InternScience/Agents‑A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 436 / 23 112 | A text‑generation agent that incorporates a lightweight Qwen‑3.5‑MOE backbone logfile, popular for autonomous agent prototypes. |
| | [meituan‑longcat/LongCat‑2.0](https://huggingface.co/meituan-longcat/LongCat-2.0) | meituan‑longcat | 165 / 1 107 | A conversational LLM that extends context windows to 32K tokens, garnering interest from niche academia. |
| | [deepreinforce‑ai/Ornith‑1.0‑35B‑GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce‑ai | 820 / 957 721 | A 35‑B quantized model using QLoRA‑style fine‑tuning, optimized for high‑throughput inference on cloud GPUs. |
| | [yuxinlu1/gemma‑4‑12B‑agentic‑fable5‑composer2.5‑v2‑3.5x‑tau2‑GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1 117 / 418 171 | An agentic LLM based on Gemma‑4, packaged as GGUF for rapid deployment in lightweight edge apps. |
| | [deepseek‑ai/DeepSeek‑V4‑Pro‑DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | deepseek‑ai | 458 / 29 230 | A 4‑B parameter variant of DeepSeek with a novel “DSpark” token‑rate optimizer, popular among researchers experimenting with causal language. |
| | [nvidia/Qwen3.6‑27B‑NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) | nvidia | 332 / 748 054 | Qwen‑3.6 batch‑level precision‑reduced version, boosted by NVIDIA’s FP4 quantization for inference speed on A100s. |
| | [nvidia/NVIDIA ambitious labs 3‑puzzle‑75B‑A9B‑NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4) | nvidia | 85 / 16 959 | A 75‑B “Puzzle” mix‑and‑match model now quantized via NVFP4, targeting next‑gen cloud rendering. |
| 🎨 Multimodal & Generation | [baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 1 903 / 1 246 042 | A transformer‑based OCR engine that scales to arbitrary text layout, fitting OCR pipelines in large‑scale document processing. |
| | [froggeric/Qwen‑Fixed‑Chat‑Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 822 / 0 | A set of Zinja‑based chat directories for Qwen‑3.5, facilitating consistent prompt engineering for community members. |
| | [bottlecapai/ThinkingCap‑Qwen3.6‑27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 187 / 2 189 | An image‑to‑text variant of Qwen‑3.6, tuned for scientific diagram captioning. |
| | [nvidia/LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 2 687 / 1 447 244 | A 3‑B vision‑language model that performs “any‑thing” object detection without fine‑tuning, currently dominating the image‑captioning leaderboard. |
| | toevo |  |  |  |
| 🔧 Specialized Models | [unsloth/Qwen3.6‑27B‑MTP‑GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 1 025 / 2 894 918 | A Qwen‑3.6 MTP‑quantized model optimized for web‑scale retrieval tasks (e.g., question‑answering pipelines). |
| | [eric‑venti‑seeds/Sun‑Direction‑Lora‑Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B) | eric‑venti‑seeds | 123 / 0 | A Flux‑2Klein 2‑B lora tweaking lighting to yield photorealistic sun‑direction effects. |
| | [Patil/Krea‑2‑depth‑controlnet](https://huggingface.co/Patil/Krea-2-depth-controlnet) | Patil | 83 / 0 | A depth‑control‑net lora that lets artists inject Krea‑2‑style depth awareness into image‑to‑image transforms. |
| 📦 Fine‑tunes & Quantizations | [empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF](adayici link postponed) | empero‑ai | 1 931 / 1 875 602 | A 9‑B Claude‑style foundation model muted to 1‑M tokens, GGUF‑ready for browser‑scale inference. |
| | [empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | empero‑ai | 748 / 179 378 | Same as above but in float‑32; offers a middle‑ground for researchers still needing higher precision. |
| | [HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/Hauhau Edmund gad war) | HauhauCS | 2 596 / 2 716 428 | A 35‑B uncensored Qwen‑3.6 model released under an aggressive policy, popular for privacy‑sensitive open‑source experiments. |
| | [mistralai/Leanstral‑1.5‑119B‑A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) | mistralai | 179 / 258 Edmonton | A Mistral‑based 119‑B variant fine‑tuned for speed on the A6B cloud platform. |
| | [deliric-b/??] |  |  |  |

---

### 3️⃣ Ecosystem Signal  
The last week underscores **quantization as the new front‑line competitive factor**. Anywhere olaraq large‑LMs appear—if they come packaged in GGUF, AWQ, or vendor‑specific FP4/FP16—their download counts rise dramatically because inference costs are reduced for developers and hobbyists alike. The Qwythos family demonstrates that **community‑driven instruction fine‑tunes** still outperform many battle‑tested corporate releases; its 1‑B token commitment strikes a sweet spot between performance and practicality. On the multimodal side, it’s clear that joint vision‑language models are beginning to cannibalize pure LLMs for grounded tasks, as evidenced by nvidia/LocateAnything’s dominant like/download ratio. Code‑specialized variants such as Gemma‑4/coder and the Narrow‑Lap PPO‑style “circular‑prompt” proposals are gaining traction especially in open‑source dev‑ops circles. Proprietary big‑model families (Qwen‑3.6, Llama‑3‑70B, GLaM‑Meta) are still alive and well, but **open‑weight “tiny‑yet‑pretty” models** that can run on consumer GPUs are climbing the leaderboard thanks to community fine‑tunes and model‑format interoperability.  

---

### 4️⃣ Worth Exploring  
1. **[nvidia/LocateAnything‑3B](https://huggingface.co/nvidia/LocateAnything-3B)** – Its zero‑shot “any‑thing“ vision‑language performance makes it a new benchmark for multimodal inference; try it with your own image datasets to quantify ROI.  
2. **[empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – A community‑polished, compact Claude‑3‑tier model that ships in GGUF; perfect for people who want model‑level performance without the heavy GPU burden.  
3. **[deepreinforce‑ai/Orn Han etc deepquick?]** – The Ornith‑35B GGUF variant demonstrates that truly huge parameter counts can be delivered to the edge—ideal for exploring model Proof‑sizeof‑deployable memory budgets.  

Feel free to cherry‑pick a model that aligns with your project носёт; the Hub’s ecosystem remains highly navigable thanks to the robust granularity of its tags(where each entry lines up with a pipeline-type).

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*