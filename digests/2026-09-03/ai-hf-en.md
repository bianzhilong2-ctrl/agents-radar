# Hugging Face Trending Models Digest 2026-09-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-03 02:07 UTC

---

**Today's Highlights**  
The Hugging Face weekly rankings show a surge of interest in the Qwen‑family multimodal LLMs, especially the 27 B‑parameter Qwen3.8‑27B and its Flash‑Next variants, which dominate download counts.  GLM‑5.3 and its Flash‑Next releases from zai‑org and unsloth continue to attract attention, with the GGUF‑quantized versions amassing tens of thousands of downloads.  Video generation is gaining traction, highlighted by Lightricks’ LTX‑2.5 and MiniMax‑H3, both surpassing a million downloads.  Meanwhile, the embedding model **all‑MiniLM‑L6‑v2** remains the most downloaded model overall, underscoring the platform’s breadth beyond pure generation.  

---

### Trending Models  

#### 🧠 Language Models (LLMs, chat models, instruction‑tuned)  
- **zai-org/GLM-5.3** – 1,519 likes, 94,403 downloads – a 5.3‑B‑parameter decoder‑only LLM for general text generation.  
- **zai-org/GLM-5.3-Flash** – 1,968 likes, 441,348 downloads – a faster, flash‑optimized variant supporting image‑text‑to‑text.  
- **Qwen/Qwen3.8-Flash-Next** – 4,740 likes, 207,941 downloads – Qwen’s 8 B‑parameter multimodal model with next‑gen instruction tuning.  
- **Qwen/Qwen3.8-27B** – 13,696 likes, 4,960,483 downloads – a 27 B‑parameter flagship Qwen model, currently the most downloaded LLM on the hub.  
- **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp** – 507 likes, 17,893 downloads – DeepSeek’s experimental 4‑step flash model for vision‑language tasks.  
- **tencent/Hy4-preview** – 400 likes, 3,516 downloads – a compact text‑generation model from Tencent’s Hunyuan series.  
- **MiniMaxAI/MiniMax-H3** – 4,813 likes, 5,532,597 downloads – a multimodal (image‑text‑to‑video) LLM that combines diffusion and transformer layers.  
- **openai-community/gpt2** – 3,537 likes, 14,290,101 downloads – the classic 124 M‑parameter GPT‑2, still popular for baseline generation.  

#### 🎨 Multimodal & Generation  
- **Lightricks/LTX-2.5** – 2,578 likes, 1,232,274 downloads – an image‑to‑video diffusion model enabling text‑to‑video synthesis.  
- **unsloth/Qwen3.8-Flash-Next-GGUF** – 728 likes, 431,339 downloads – a GGUF‑quantized version of Qwen’s Flash‑Next for efficient inference.  
- **unsloth/Qwen3.8-27B-GGUF** – 3,393 likes, 9,354,057 downloads – the 27 B Qwen model quantized to GGUF, driving massive download numbers.  
- **FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree** – 250 likes, 0 downloads – an experimental 4‑step text‑to‑video diffusion preview.  
- **BreezeBlue/Breeze-TTS-2** – 357 likes, 3,086 downloads – a lightweight text‑to‑speech model built on Transformers.  

#### 🔧 Specialized Models  
- **google/timesfm-3.0-pytorch** – 299 likes, 0 downloads – a time‑series forecasting model for PyTorch users.  
- **sentence-transformers/all-MiniLM-L6-v2** – 5,393 likes, 250,280,836 downloads – a high‑performance sentence‑similarity embedding model.  
- **Kijai/MiniMax-H3-experimental** – 397 likes, 0 downloads – an experimental release of the MiniMax‑H3 architecture.  
- **XHToken/Spark-X2.5-4B** – 123 likes, 429 downloads – a compact 4 B‑parameter text‑generation model.  

#### 📦 Fine‑tunes & Quantizations  
- **unsloth/GLM-5.3-Flash-GGUF** – 338 likes, 63,718 downloads – GGUF‑quantized flash version of GLM‑5.3 for on‑device inference.  
- **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF** – 871 likes, 1,276,092 downloads – an uncensored, aggressively fine‑tuned 27 B Qwen model in GGUF.  
- **OBLITERATUS/Qwen3.8-27B-OBLITERATED** – 1,026 likes, 805,791 downloads – a heavily “abliterated” (uncensored) Qwen‑27B fine‑tune.  
- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** – 175 likes, 56,208 downloads – a mixed‑precision GSQ‑RCO quantized Qwen‑27B.  
- **orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF** – 194 likes, 64,325 downloads – uncensored flash‑tuned Qwen‑8B in GGUF.  
- **orcarouter/Qwen3.8-27B-Uncensored-GGUF** – 659 likes, 254,529 downloads – a community‑crafted uncensored 27 B Qwen GGUF.  
- **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF** – 919 likes, 2,143,289 downloads – another high‑download uncensored GGUF variant.  
- **orcarouter/Qwen3.8-27B-Uncensored-FP8** – 1,371 likes, 316,128 downloads – FP8‑quantized uncensored Qwen‑27B for lower‑precision inference.  
- **peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF** – 194 likes, 130,086 downloads – a 35 B code‑focused model (coder) in GGUF.  

---

### Ecosystem Signal  
The past week reveals a clear momentum toward **open‑weight, community‑driven fine‑tunes** — especially the Qwen‑family, with multiple 8 B, 27 B, and Flash‑Next variants amassing millions of downloads.  **GGUF and AWQ quantizations** are proliferating, indicating strong demand for runnable models on consumer‑grade hardware.  **Multimodal generation** (image‑to‑video, text‑to‑video) is emerging as a hot niche, propelled by Lightricks, MiniMax‑H3, and FastVideo experiments.  While large proprietary models (e.g., GPT‑4‑class) remain absent, the open ecosystem is filling the gap with highly downloadable, instruction‑tuned, and uncensored derivatives, suggesting a shift toward **accessibility and customization** over raw scale.  

---

### Worth Exploring  

1. **Qwen/Qwen3.8-27B** (🧠) – The current download leader; its 27 B size, strong instruction tuning, and abundant community fine‑tunes make it a benchmark for performance‑vs‑resource trade‑offs.  

2. **Lightricks/LTX-2.5** (🎨) – A production‑ready image‑to‑video diffusion model with over a million downloads; ideal for experimenting with text‑driven video synthesis.  

3. **sentence-transformers/all-MiniLM-L6-v2** (🔧) – The most downloaded model overall; its efficient 384‑dim embeddings are a go‑to for similarity, clustering, and downstream NLP tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*