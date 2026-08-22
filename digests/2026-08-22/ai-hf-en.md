# Hugging Face Trending Models Digest 2026-08-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-22 00:40 UTC

---

Here's a thinking process:

1.  **Analyze User Input:**
   - User provides a list of 30 trending Hugging Face models as of 2026-08-22
   - Wants a structured "Hugging Face Trending Models Digest" in English
   - Specific sections required:
     - Today's Highlights (3-5 sentences)
     - Trending Models (organized by category, each with model name + link, author, likes, downloads, one-sentence description)
     - Categories: Language Models, Multimodal & Generation, Specialized Models, Fine-tunes & Quantizations
     - Ecosystem Signal (100-200 words analyzing trends)
     - Worth Exploring (2-3 models with reasoning)
   - Style: concise, professional, preserve all HF links

2.  **Analyze the Model List:**
   I need to categorize the 30 models into the 4 specified categories. Let me go through each model and assign a category based on tags, pipeline, and description.

   List with key info:
   1. Qwen/Qwen3.8-27B - transformers, image-text-to-text, conversational -> LLM/Chat
   2. unsloth/Qwen3.8-27B-GGUF - gguf, quantized -> Quantization/Fine-tune
   3. orcarouter/Qwen3.8-27B-Uncensored-FP8 - abliterated, image-text-to-text -> LLM/Uncensored
   4. orcarouter/Qwen3.8-27B-Uncensored-MLX - MLX, abliterated -> Quantization/Fine-tune (MLX)
   5. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF - gguf, uncensored, llama.cpp -> Quantization/Fine-tune
   6. MiniMaxAI/MiniMax-Music3 - text-to-audio, music-generation -> Multimodal/Audio
   7. Lightricks/LTX-2.5 - image-to-video, text-to-video -> Multimodal/Video
   8. OBLITERATUS/Qwen3.8-27B-OBLITERATED - abliterated, mlx, gguf -> Quantization/Uncensored
   9. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - uncensored, gguf, multimodal -> Quantization/Uncensored
   10. Qwen/Qwen3.8-27B-FP8 - transformers, image-text-to-text, conversational -> LLM/Chat
   11. MiniMaxAI/MiniMax-H3 - text-to-video, image-to-video -> Multimodal/Video
   12. ornith-ai/Ornith-1.5-35B-A3B - qwen3_5_moe, image-text-to-text, text-generation -> LLM/MoE
   13. froggeric/Qwen-Fixed-Chat-Templates - mlx, chat-template, qwen -> Tools/Quantization
   14. empero-ai/Qwen3.8-27B-Ridge-GGUF - gguf, quantized -> Quantization
   15. orcarouter/Qwen3.8-27B-Uncensored-GGUF - ggf, abliterated -> Quantization/Uncensored
   16. deepseek-ai/DeepSeek-V4-Pro-0813 - transformers, text-generation, conversational -> LLM/Chat
   17. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF - gguf, abliterated, uncensored -> Quantization/Uncensored
   18. Qwen/Qwen3.8-2.4T-A95B - transformers, text-generation, qwen3_5_moe_text -> LLM/MoE
   19. ornith-ai/Ornith-1.5-35B-A3B-GGUF - gguf, text-generation -> Quantization/LLM
   20. TenStrip/10Eros-Max - text-to-video, image-to-video -> Multimodal/Video
   21. meta-models/Muse-Glimmer-30B - transformers, image-text-to-text, conversational -> LLM/Chat
   22. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF - gguf, abliterated, heretic -> Quantization/Uncensored
   23. superwhisper/s1-mini - transformers, qwen3, text-generation, asr -> LLM/ASR
   24. huihui-ai/Huihui-Qwen3.8-27B-abliterated - transformers, abliterated, image-text-to-text -> LLM/Uncensored
   25. unsloth/Qwen3.8-27B-NVFP4 - NVFP4, quantized -> Quantization
   26. moonshotai/Kimi-K3 - transformers, feature-extraction, compressed-tensors -> LLM/Compressed
   27. Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF - gguf, abliterated -> Quantization/Uncensored
   28. deepseek-ai/DeepSeek-V4-Flash-0731 - transformers, text-generation -> LLM/Chat
   29. z-lab/Qwen3.8-27B-DFlash2 - transformers, dflash2, speculative-decoding -> Quantization/Inference optimization
   30. DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF - gguf, GAIN Training -> Quantization/Fine-tune

   Now, categorize into the 4 requested categories:
   - 🧠 Language Models (LLMs, chat models, instruction-tuned)
   - 🎨 Multimodal & Generation (image, video, audio, text-to-X)
   - 🔧 Specialized Models (code, math, medical, embeddings)
   - 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

   Let's assign each model to a category. I need to be careful about overlaps, but I'll aim for clear primary categories.

   **🧠 Language Models (LLMs, chat models, instruction-tuned):**
   1. Qwen/Qwen3.8-27B - flagship Qwen3.8 27B chat/instruct
   10. Qwen/Qwen3.8-27B-FP8 - same, FP8 variant
   16. deepseek-ai/DeepSeek-V4-Pro-0813 - DeepSeek V4 Pro
   21. meta-models/Muse-Glimmer-30B - conversational
   12. ornith-ai/Ornith-1.5-35B-A3B - MoE text-gen
   18. Qwen/Qwen3.8-2.4T-A95B - massive MoE
   26. moonshotai/Kimi-K3 - feature-extraction, compressed
   23. superwhisper/s1-mini - text-gen, ASR (borderline, but mostly LLM)
   Maybe also 15, 19 etc but they are quantized. I'll keep primary LLM category to the base instruct/chat models.

   **🎨 Multimodal & Generation (image, video, audio, text-to-X):**
   6. MiniMaxAI/MiniMax-Music3 - text-to-audio/music
   7. Lightricks/LTX-2.5 - image-to-video, text-to-video
   11. MiniMaxAI/MiniMax-H3 - text-to-video, image-to-video
   20. TenStrip/10Eros-Max - text-to-video, image-to-video
   That's 4 for multimodal. Check if any others: 1, 10 have image-text-to-text but mainly LLM. I'll put them in LLM. 7, 11, 20 clearly video/audio. 6 is audio. Good.

   **🔧 Specialized Models (code, math, medical, embeddings):**
   Looking at the list, I don't see obvious code/math/medical models. Maybe some MoE or feature-extraction could be considered specialized. 12, 18 are MoE but could go to LLM. 23 is ASR. 26 is feature-extraction. Maybe I'll categorize 23 and 26 here, or adjust categories. The user said "code, math, medical, embeddings". None clearly fit code/medical. I could create a subset or note none strongly fit, but I need to fill the category. Perhaps I'll include ornith and Kimi-K3 as specialized MoE/compressed, or just have a smaller category. Let me re-read: "🔧 Specialized Models (code, math, medical, embeddings)". I'll assign models that have clear specialized tags: 23 superwhisper/s1-mini (asr, could be speech embeddings), 26 moonshotai/Kimi-K3 (feature-extraction, compressed-tensors). Maybe also 12 ornith-1.5-35B-A3B (MoE, could be specialized). I'll put 3 models here.

   **📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ):**
   2. unsloth/Qwen3.8-27B-GGUF
   4. orcarouter/Qwen3.8-27B-Uncensored-MLX
   5. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
   8. OBLITERATUS/Qwen3.8-27B-OBLITERATED
   9. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
   14. empero-ai/Qwen3.8-27B-Ridge-GGUF
   15. orcarouter/Qwen3.8-27B-Uncensored-GGUF
   17. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF
   19. ornith-ai/Ornith-1.5-35B-A3B-GGUF
   22. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF
   24. huihui-ai/Huihui-Qwen3.8-27B-abliterated (non-GGUF but abliterated)
   25. unsloth/Qwen3.8-27B-NVFP4
   27. Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF
   29. z-lab/Qwen3.8-27B-DFlash2 (speculative-decoding, quantization-related)
   30. DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF
   That's a lot. I'll select representative ones.

   Need to ensure all 30 models are accounted for across categories. I'll make a mapping list, then draft the output.

   Let me systematically assign each model to exactly one primary category for the digest, aiming for coverage and balance.

   I'll go through each:
   1. Qwen/Qwen3.8-27B -> 🧠 LLM
   2. unsloth/Qwen3.8-27B-GGUF -> 📦 Quantization
   3. orcarouter/Qwen3.8-27B-Uncensored-FP8 -> 🧠 LLM (but FP8 quantization, could be quantization. I'll put in 🧠 as base model, or 📦 as FP8 variant. I'll put in 🧠 and mention FP8 in description.)
   4. orcarouter/Qwen3.8-27B-Uncensored-MLX -> 📦 Quantization (MLX)
   5. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF -> 📦 Quantization
   6. MiniMaxAI/MiniMax-Music3 -> 🎨 Multimodal/Audio
   7. Lightricks/LTX-2.5 -> 🎨 Multimodal/Video
   8. OBLITERATUS/Qwen3.8-27B-OBLITERATED -> 📦 Quantization (abliterated)
   9. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF -> 📦 Quantization
   10. Qwen/Qwen3.8-27B-FP8 -> 🧠 LLM (FP8 variant)
   11. MiniMaxAI/MiniMax-H3 -> 🎨 Multimodal/Video
   12. ornith-ai/Ornith-1.5-35B-A3B -> 🔧 Specialized (MoE text-gen)
   13. froggeric/Qwen-Fixed-Chat-Templates -> 📦 Tools (chat-template, mlx) - could fit 📦 or 🧠. I'll put 📦 as it's about chat-templates/quantization framework.
   14. empero-ai/Qwen3.8-27B-Ridge-GGUF -> 📦 Quantization
   15. orcarouter/Qwen3.8-27B-Uncensored-GGUF -> 📦 Quantization
   16. deepseek-ai/DeepSeek-V4-Pro-0813 -> 🧠 LLM
   17. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF -> 📦 Quantization
   18. Qwen/Qwen3.8-2.4T-A95B -> 🧠 LLM (MoE)
   19. ornith-ai/Ornith-1.5-35B-A3B-GGUF -> 📦 Quantization (GGUF version of MoE)
   20. TenStrip/10Eros-Max -> 🎨 Multimodal/Video
   21. meta-models/Muse-Glimmer-30B -> 🧠 LLM (conversational)
   22. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF -> 📦 Quantization
   23. superwhisper/s1-mini -> 🔧 Specialized (ASR, could be 🧠 but I'll put 🔧 as specialized ASR/embedding)
   24. huihui-ai/Huihui-Qwen3.8-27B-abliterated -> 📦 Quantization (abliterated, but non-GGUF; I'll still put 📦)
   25. unsloth/Qwen3.8-27B-NVFP4 -> 📦 Quantization (NVFP4)
   26. moonshotai/Kimi-K3 -> 🔧 Specialized (compressed-tensors, feature-extraction)
   27. Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF -> 📦 Quantization
   28. deepseek-ai/DeepSeek-V4-Flash-0731 -> 🧠 LLM
   29. z-lab/Qwen3.8-27B-DFlash2 -> 📦 Quantization (dflash2, speculative-decoding)
   30. DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF -> 📦 Quantization (GAIN, MTP-GGUF)

   Now count per category:
   🧠 LLM: 1, 3(?), 10, 16, 18, 21, 28 = 7 models. (I'll exclude 3 from LLM or keep it flexible. Let's put 3 in 📦 as FP8 quantization. Actually, FP8 is a quantization format, so 📦 makes sense. I'll reassign 3 to 📦.)
   Let me reassign clearly:
   - 🧠 LLM: 1, 10, 16, 18, 21, 28 (6 models)
   - 📦 Quantization: 2, 3, 4, 5, 8, 9, 13, 14, 15, 17, 19, 22, 24, 25, 27, 29, 30 (17 models) - that's a lot, but okay, I'll pick representative subset in digest, not list all 30 there. The user said "Organized by category, each with: Model name (with HF link), Author, likes, downloads, One sentence". It doesn't say all 30 must be listed, but there are 30 models provided. Likely they want all 30 distributed across categories. I'll aim to include all 30, maybe with some categories

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*