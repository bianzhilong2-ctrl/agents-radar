# Hugging Face Trending Models Digest 2026-08-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-31 02:24 UTC

---

# Hugging Face Trending Models Digest

**Date:** August 31, 2026 | **Scope:** 30 trending models, sorted by weekly likes

---

## 1. Today's Highlights

This week's Hugging Face ecosystem is defined by the consolidation of **Qwen3.8** as the dominant open-weights family — its variants occupy the top ten by sheer volume of releases and community engagement. **moonshotai/Kimi-K3** has surged to the second position overall with 11,100 likes in a single week, signaling strong user appetite for next-generation reasoning-capable chat models. Meanwhile, **Lightricks/LTX-2.5** continues to pull image-to-video enthusiasts, and the **DeepSeek-V4-Flash-0731** release confirms DeepSeek's growing role as a serious contender in the open LLM space. A notable ecosystem theme is the proliferation of **uncensored** and **abliterated** Qwen variants — the community is actively stripping safety fine-tunes, with at least seven such derivatives now trending simultaneously, underscoring demand for unfiltered deployments in research and developer contexts.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

**moonshotai/Kimi-K3**
- **Author:** moonshotai | Likes: 11,100 | Downloads: 2,794,721
- A flagship multimodal chat model with compressed-tensor efficiency, trending as the week's highest-liked release and signaling moonshotai's emergence as a major open-weights contributor.

**Qwen/Qwen3.8-27B**
- **Author:** Qwen | Likes: 13,354 | Downloads: 4,511,348
- The flagship image-text-to-text model in the Qwen3.8 family, dominating both likes and downloads with strong conversational and multimodal capabilities.

**deepseek-ai/DeepSeek-V4-Flash-0731**
- **Author:** deepseek-ai | Likes: 3,825 | Downloads: 4,575,518
- A lightweight, production-oriented flash variant of DeepSeek-V4, trending on the strength of DeepSeek's reputation for efficient, high-quality open text generation.

**zai-org/GLM-5.3-Flash**
- **Author:** zai-org | Likes: 1,719 | Downloads: 346,516
- A fast, efficient text-generation model from the GLM-5 Next family, popular among developers seeking a capable open LLM for inference-heavy workloads.

**zai-org/GLM-5.3**
- **Author:** zai-org | Likes: 1,349 | Downloads: 50,116
- The full-size MoE variant (GLM-MOE-DSA) with strong conversational performance, trending as the non-flash counterpart to the highly downloaded Flash variant.

**tencent/Hy4-preview**
- **Author:** tencent | Likes: 320 | Downloads: 2,123
- Tencent's Hunyuan-v4 based text-generation preview, attracting early interest as a potential challenger in the open Chinese-LLM landscape.

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

**MiniMaxAI/MiniMax-H3**
- **Author:** MiniMaxAI | Likes: 4,661 | Downloads: 5,263,381
- A powerful image-to-video model with the highest download count in this category, trending for its high-fidelity video generation from text and image prompts.

**Lightricks/LTX-2.5**
- **Author:** Lightricks | Likes: 2,270 | Downloads: 1,137,181
- Lightricks' image-to-video diffusion model supporting single-file deployment, gaining traction as an accessible tool for creators exploring AI-generated video.

**Qwen/Qwen3.8-Flash-Next**
- **Author:** Qwen | Likes: 4,394 | Downloads: 121,976
- A compact, next-generation multimodal model optimized for conversational image-text understanding, trending as the lean entry point to the Qwen3.8 family.

**BreezeBlue/Breeze-TTS-2**
- **Author:** BreezeBlue | Likes: 212 | Downloads: 1,838
- A text-to-speech model from the Breeze family, standing out as one of the few audio-generation models in the current top-30.

**FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree**
- **Author:** FastVideo | Likes: 194 | Downloads: 0
- A rapid 4-step text-to-video preview leveraging VSA and data-free training, attracting curiosity for its extreme efficiency claims despite zero reported downloads.

**alibaba-pai/MiniMax-H3-Fun-Controlnet-Union**
- **Author:** alibaba-pai | Likes: 163 | Downloads: 5,538
- A ControlNet-style adapter enabling fine-grained motion and content control over MiniMax-H3 video generation, trending as a key tool for structured video creation.

---

### 🔧 Specialized Models (code, math, medical, embeddings)

**thomsonreuters/Thomson-1.0-Small**
- **Author:** thomsonreuters | Likes: 159 | Downloads: 1,009
- A compact MoE model (Qwen3.5-MOE architecture) aimed at news and financial document understanding, reflecting Thomson Reuters' push into domain-specific open models.

**pipecat-ai/phonellm-alpha-1**
- **Author:** pipecat-ai | Likes: 150 | Downloads: 3,982
- A specialized text-generation model based on Nemotron-H, optimized for voice-first and conversational AI pipelines, trending within the pipecat ecosystem.

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

**unsloth/Qwen3.8-27B-GGUF**
- **Author:** unsloth | Likes: 3,246 | Downloads: 8,839,153
- The most downloaded model in the entire digest, a llama.cpp-compatible GGUF quantization of Qwen3.8-27B by Unsloth, enabling efficient local inference on consumer hardware.

**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**
- **Author:** JonathanColetti | Likes: 852 | Downloads: 1,991,437
- A community-built uncensored GGUF conversion targeting MTP (Multi-Token Prediction) inference, trending for its removal of safety fine-tuning and high download volume.

**OBLITERATUS/Qwen3.8-27B-OBLITERATED**
- **Author:** OBLITERATUS | Likes: 949 | Downloads: 725,757
- An MLX+GGUF variant of Qwen3.8-27B with the "abliterated" label, representing the growing wave of safety-stripped derivatives for developer research.

**orcarouter/Qwen3.8-27B-Uncensored-FP8**
- **Author:** orcarouter | Likes: 1,288 | Downloads: 301,964
- An FP8-quantized uncensored version of Qwen3.8-27B optimized for memory efficiency, trending as a middle ground between full precision and aggressive quantization.

**orcarouter/Qwen3.8-27B-Uncensored-MLX**
- **Author:** orcarouter | Likes: 1,236 | Downloads: 109,121
- An Apple MLX-compatible uncensored variant, trending for its native optimization on Apple Silicon Macs.

**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**
- **Author:** HauhauCS | Likes: 786 | Downloads: 1,158,065
- An aggressive MTP-enabled GGUF conversion with custom fine-tuning, trending for its performance-oriented design on local inference hardware.

**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**
- **Author:** huihui-ai | Likes: 458 | Downloads: 1,622,056
- A Huihui-curated abliterated GGUF of Qwen3.8-27B, gaining traction among the Chinese-language community for its balance of uncensoring and quality.

**unsloth/Qwen3.8-Flash-Next-GGUF**
- **Author:** unsloth | Likes: 604 | Downloads: 328,195
- A GGUF-quantized version of Qwen3.8-Flash-Next by Unsloth, making the lightweight next-gen model accessible on resource-constrained setups.

**unsloth/GLM-5.3-Flash-GGUF**
- **Author:** unsloth | Likes: 290 | Downloads: 45,936
- Unsloth's GGUF conversion of GLM-5.3-Flash, extending the same efficient-quantization treatment to the GLM family.

**orcarouter/Qwen3.8-27B-Uncensored-GGUF**
- **Author:** orcarouter | Likes: 581 | Downloads: 238,397
- Another uncensored GGUF build of Qwen3.8-27B from orcarouter, demonstrating the community's parallel efforts to produce the same base model in different quantization configurations.

**orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF**
- **Author:** orcarouter | Likes: 123 | Downloads: 42,864
- An uncensored GGUF port of Qwen3.8-Flash-Next for efficient local deployment, representing the smallest uncensored entry in the Qwen3.8 GGUF lineup.

**peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF**
- **Author:** peculiar-ragdoll | Likes: 143 | Downloads: 87,848
- A Qwen3.5-MoE-based code model quantized to GGUF, attracting interest as one of the few specialized code models in this week's top-30.

**ornith-ai/Ornith-1.5-35B-A3B**
- **Author:** ornith-ai | Likes: 507 | Downloads: 147,038
- A Qwen3.5-MOE-based model with image-text capabilities, trending as a niche multimodal MoE variant from an independent community author.

**alibaba-pai/MiniMax-H3-Acc-LoRAs**
- **Author:** alibaba-pai | Likes: 152 | Downloads: 23,734
- A suite of accuracy-focused LoRA adapters for MiniMax-H3, enabling targeted fine-tuning without full model retraining.

**Kijai/MiniMax-H3-experimental**
- **Author:** Kijai | Likes: 363 | Downloads: 0
- An experimental region-specific build of MiniMax-H3 with no reported downloads yet, indicating early-stage exploration.

---

## 3. Ecosystem Signal

This week's data reveals several converging trends. **Qwen3.8** has become the default substrate for open-weights experimentation — it appears in over 20 of the 30 trending models across base, fine-tuned, uncensored, abliterated, GGUF, FP8, and MLX formats. The sheer density of Qwen3.8 derivatives suggests the model family has reached a critical mass of community trust, where developers default to it as a base for customization. **Moonshotai/Kimi-K3** and **DeepSeek-V4** represent the most credible competitive challengers to Qwen's dominance, both attracting high engagement despite fewer derivative releases.

On the quantization front, **GGUF** remains the dominant format for community conversions (Unsloth alone has three entries), while **FP8** and **MLX** represent specialized pathways for memory-efficient inference on different hardware targets. The prolific rise of **uncensored** and **abliterated** Qwen variants — at least seven entries — indicates a structural split in the community: one track pursuing safety-aligned fine-tunes and creative generation, another actively dismantling those safeguards. This tension will likely drive both regulatory scrutiny and more sophisticated safety tooling from model providers. Finally, **video generation** (LTX-2.5, MiniMax-H3) and **audio** (Breeze-TTS-2) remain smaller but growing segments, with MiniMax-H3's 5.2M downloads confirming user appetite for open video models.

---

## 4. Worth Exploring

**1. [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
The week's top performer by likes, Kimi-K3 is moonshotai's flagship release featuring compressed-tensor optimization for high efficiency without sacrificing capability. Its 11,100 likes in a single week reflect genuine excitement — it is worth studying for its architecture decisions around compression and for benchmarking against Qwen3.8-27B in multimodal tasks.

**2. [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
With 8.8M downloads — the highest in the entire digest — this Unsloth quantization makes Qwen3.8-27B viable on consumer GPUs with minimal quality loss. It serves as both a practical deployment artifact and a case study in efficient model conversion workflows.

**3. [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
The leading open-weights image-to-video model in this cohort, LTX-2.5's single-file diffusion approach lowers the barrier to entry for video generation. Given the nascent state of open video models, it represents a high-value target for experimentation and integration into creative pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*