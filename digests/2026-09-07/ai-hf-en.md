# Hugging Face Trending Models Digest 2026-09-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-07 01:56 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-09-07

---

## 1. Today's Highlights

The trending list is heavily dominated by the **Qwen3.8 ecosystem**, which appears in nearly half of the 30 trending slots across base models, quantized GGUF builds, abliterated "uncensored" variants, and specialized fine-tunes. **Alibaba's Qwen3.8-27B** leads decisively with 14,135 weekly likes and 6.19M downloads, reinforcing Qwen's position as the de facto open-weight LLM family this cycle. On the generative side, **MiniMaxAI/MiniMax-H3** (image-to-video) and **Lightricks/LTX-2.5** continue to drive strong multimodal momentum, while **Tencent Hy4-preview** and **DeepSeek-V4-Flash-Vision-Exp** signal the next wave of frontier-tier releases. Quantization activity is exceptionally intense, with NVFP4, GGUF, and FP8 builds all trending in parallel.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen · 14,135 likes · 6,190,807 downloads
  The flagship open-weight conversational model from Alibaba, dominating trending with multimodal image-text-to-text capability and unprecedented weekly engagement.

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen · 4,943 likes · 432,966 downloads
  Experimental Qwen4-generation conversational system, bridging the gap between the 3.8 and 4.x lineups with strong early traction.

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** — zai-org · 1,739 likes · 410,074 downloads
  Zhipu AI's latest MoE/DSA-architecture text generation model, emerging as the strongest non-Qwen open-weight competitor this cycle.

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** — zai-org · 2,099 likes · 761,364 downloads
  A lighter-weight multimodal variant of GLM-5.3, optimized for conversational image-text-to-text workloads at scale.

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** — XHToken · 615 likes · 5,477 downloads
  A compact 4B text-generation model from the Spark 2.5 family, gaining traction for efficient inference scenarios.

- **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)** — IFM · 186 likes · 1,723 downloads
  A 36B MoE model from the K2 Horizon family, signaling continued experimentation with mixture-of-experts architectures.

- **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)** — tencent · 445 likes · 6,441 downloads
  Tencent's Hunyuan v4 preview release, marking the next iteration of their Hunyuan text-generation family.

- **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)** — openai-community · 3,707 likes · 14,612,342 downloads
  The historical OpenAI GPT-2 baseline, persisting as a perennial educational and benchmarking reference.

- **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** — google-bert · 2,989 likes · 52,338,347 downloads
  The canonical BERT encoder, retaining massive long-tail download volumes for downstream NLP pipelines.

- **[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)** — distilbert · 1,156 likes · 7,054,316 downloads
  Distilled BERT variant, remaining a workhorse for lightweight production NLP tasks.

### 🎨 Multimodal & Generation

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI · 4,968 likes · 4,986,349 downloads
  A flagship image-to-video and text-to-video diffusion model, currently the most popular generative video model on the Hub.

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks · 2,970 likes · 1,526,928 downloads
  A unified video generation model supporting image-to-video, text-to-video, video-to-video, and hybrid pipelines in one file.

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** — deepseek-ai · 747 likes · 209,191 downloads
  DeepSeek's experimental vision-augmented V4 Flash variant, expanding into image-text-to-text territory.

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — google · 507 likes · 144,455 downloads
  Google's TimesFM 3.0 time-series forecasting model, gaining renewed traction for pretrained PyTorch time-series workloads.

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** — BreezeBlue · 461 likes · 6,357 downloads
  A text-to-speech model from the Breeze family, trending as a fresh TTS option in the open ecosystem.

- **[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)** — openai · 1,211 likes · 20,579,479 downloads
  The OpenAI CLIP vision-language encoder, persisting as a foundational zero-shot image classification baseline.

- **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)** — facebook · 263 likes · 12,464 downloads
  Meta's Massively Multilingual Speech 300M model, supporting wav2vec2-style multilingual pretraining.

- **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)** — microsoft · 116 likes · 889 downloads
  Microsoft's streaming-focused VibeVoice ASR, designed for real-time transcription workloads.

- **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)** — OpenVDN · 209 likes · 0 downloads
  A community finetune of MiniMax-H3 for text-to-video, notable as one of the first derivatives on the new MiniMax-H3 base.

### 🔧 Specialized Models

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** — sentence-transformers · 5,568 likes · 253,029,336 downloads
  The most-downloaded embedding model on the Hub, maintaining dominant usage for sentence-similarity retrieval.

### 📦 Fine-tunes & Quantizations

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth · 3,590 likes · 10,311,462 downloads
  Unsloth's GGUF quantization of Qwen3.8-27B, the highest-downloaded quantized model on the entire trending list.

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab · 469 likes · 348,389 downloads
  Research-grade GSQ/RCO mixed-precision GGUF quantization, popular for low-bit inference experimentation.

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — unsloth · 810 likes · 823,733 downloads
  GGUF-quantized Flash-Next variant for efficient CPU/edge deployment of the Qwen experimental line.

- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** — OBLITERATUS · 1,107 likes · 995,160 downloads
  MLX/GGUF abliterated Qwen3.8-27B variant with refusal filters removed, a flagship "uncensored" release.

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — HauhauCS · 982 likes · 1,568,315 downloads
  Aggressively-tuned multimodal uncensored Qwen3.8-27B GGUF, one of the highest-downloaded community fine-tunes this cycle.

- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** — orcarouter · 752 likes · 287,720 downloads
  Another abliterated Qwen3.8 GGUF variant, continuing the proliferation of refusal-removed builds.

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU · 249 likes · 211,018 downloads
  Long-name experimental Qwen3.8 fine-tune blending Heretic, uncensored, and coder-style training regimes.

- **[Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)** — Jackrong · 130 likes · 22,128 downloads
  Llama.cpp-compatible GGUF release pairing Qwen3.8 vision with Flash-style configuration.

- **[nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)** — nvidia · 114 likes · 13,321 downloads
  NVIDIA's NVFP4-optimized Qwen3.8 Flash-Next build using ModelOpt, showcasing 4-bit GPU-native inference paths.

- **[dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)** — dealignai · 165 likes · 15,648 downloads
  FP8-quantized, refusal-removed cybersecurity-specialized GLM-5.3 variant, notable for its niche specialization.

---

## 3. Ecosystem Signal

The Hugging Face trending list is currently a **two-front war**: Alibaba's **Qwen3.8** family occupies ~40% of trending slots, while **Zhipu's GLM-5.3** establishes itself as the leading alternative Chinese open-weight lineage. Qwen3.8-27B alone spans base, Flash, GSQ/RCO GGUF, Unsloth GGUF, multiple abliterated variants, vision fine-tunes, and NVFP4 builds — a sign of full-stack ecosystem maturity. Quantization is the defining activity of this cycle: **NVFP4** (NVIDIA's ModelOpt), **FP8**, **GGUF** (multiple flavors), and **MLX** all appear, reflecting that the open community has decisively moved past 16-bit inference as the default. Open-weight dominance is reinforced by the persistent presence of legacy anchors (BERT, GPT-2, CLIP, all-MiniLM-L6-v2), whose cumulative downloads dwarf everything else, indicating stable long-tail production usage. Meanwhile, generative video is consolidating around two leaders — **MiniMaxAI/MiniMax-H3** and **Lightricks/LTX-2.5** — while audio/speech sees renewed momentum from Microsoft's **VibeVoice-ASR** and Breeze-TTS-2.

---

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The unambiguous leader. Anyone studying the current SOTA open-weight frontier should benchmark against this model; its dominance across likes and downloads signals strong real-world adoption.

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The most compelling generative video model on the Hub right now. With 4.98M downloads and a clear image-to-video + text-to-video pipeline, it represents the practical frontier of open video generation in 2026.

- **[nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)** — Worth studying from an inference engineering perspective. NVFP4 quantization via ModelOpt is an emerging deployment path, and pairing it with the experimental Qwen4-generation Flash-Next makes this a forward-looking combination worth tracking.

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*