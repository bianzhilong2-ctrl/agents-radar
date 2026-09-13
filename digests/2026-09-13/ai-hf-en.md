# Hugging Face Trending Models Digest 2026-09-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-13 02:09 UTC

---

Here's a thinking process:

1.  **Analyze the Request:**
   - User wants a "Hugging Face Trending Models Digest"
   - Based on the provided list of 30 trending models as of 2026-09-13
   - Structure requirements:
     - "Today's Highlights" (3-5 sentences)
     - "Trending Models" organized by category, each with model name (with HF link), author, likes, downloads, and one sentence description
     - Categories: 🧠 Language Models, 🎨 Multimodal & Generation, 🔧 Specialized Models, 📦 Fine-tunes & Quantizations
     - "Ecosystem Signal" (100-200 words analyzing trends)
     - "Worth Exploring" (2-3 models with reasoning)
   - Style: English, concise and professional, preserve all HF links

2.  **Examine the Input Data:**
   - 30 models with names, links, authors, pipelines, likes, downloads, tags
   - I need to categorize them properly into the 4 specified categories
   - I need to extract key info for each model used in the categories
   - I should make sure all 30 models are accounted for, or at least the ones that fit the categories well. The prompt says "Organized by category, each with: Model name (with HF link), Author, likes, downloads, One sentence: what it is, why it's trending". It doesn't explicitly say I must list all 30, but likely I should categorize all or most of them. Let me check the categories:
     - 🧠 Language Models (LLMs, chat models, instruction-tuned)
     - 🎨 Multimodal & Generation (image, video, audio, text-to-X)
     - 🔧 Specialized Models (code, math, medical, embeddings)
     - 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
   - I need to map each model to a category. Some might fit multiple, but I'll assign each to one primary category based on tags/pipeline.
   - Let me list models and categorize:

   1. deepseek-ai/DeepSeek-V4.1-Flash - LLMs? Actually image-text-to-text, but DeepSeek is LLM. Could be LLMs or Multimodal. Tags: transformers, safetensors, deepseek_v41, text-generation, image-text-to-text. I'll put in 🧠 Language Models as it's a major LLM release, or maybe Multimodal. Given the category list, I'll see. I'll put it in 🧠 Language Models.
   2. openbmb/MiniCPM5-2B - LLMs, small model. tags: transformers, safetensors, llama, text-generation, minicpm. 🧠 Language Models.
   3. nex-agi/Nex-N2.5-mini - tags: transformers, safetensors, qwen3_5_moe, image-text-to-text, text-generation. Could be multimodal or LLM. I'll put 🎨 Multimodal & Generation or 🧠 Language Models. Since it has image-text-to-text, I'll put 🎨 Multimodal & Generation.
   4. Qwen/Qwen3.8-27B - huge LLM. tags: transformers, safetensors, qwen3_5, image-text-to-text, conversational. 🧠 Language Models.
   5. Edge0/Edge0-35B-A3B-preview - tags: mlx, safetensors, qwen3_5_moe, moe, edge-inference. 🧠 Language Models.
   6. XHToken/Spark-X2.5-4B - tags: transformers, safetensors, spark2_5, text-generation, llm. 🧠 Language Models.
   7. nex-agi/Nex-N2.5-Pro - similar to #3. 🎨 Multimodal & Generation or 🧠 Language Models. Has image-text-to-text. I'll put 🎨 Multimodal & Generation.
   8. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - quantization of Qwen3.8-27B. tags: gguf, gsq, rco, quantization, mixed-precision. 📦 Fine-tunes & Quantizations.
   9. Lightricks/LTX-2.5 - image-to-video. tags: diffusion-single-file, image-to-video, text-to-video, video-to-video, image-text-to-video. 🎨 Multimodal & Generation.
   10. unsloth/Qwen3.8-27B-GGUF - quantization. tags: gguf, qwen3_5, unsloth, base_model:Qwen/Qwen3.8-27B, base_model:quantized:Qwen/Qwen3.8-27B. 📦 Fine-tunes & Quantizations.
   11. WarmBloodAban/Minimax-h3_Singularity - image-to-video. tags: minimax-h3, video-generation, text-to-video, image-to-video, video-to-video. 🎨 Multimodal & Generation.
   12. m-a-p/YuE2-3B - text-to-audio. tags: safetensors, yue2, music-generation, symbolic-planning, agentic-editing. 🎨 Multimodal & Generation (audio generation).
   13. dealignai/GLM-5.3-CYBERSECURITY-FP8 - tags: safetensors, glm_moe_dsa, abliterated, crack, refusal-removed. 🧠 Language Models or 🔧 Specialized Models. Cybersecurity specialization. I'll put 🔧 Specialized Models.
   14. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF - quantization/fine-tune. tags: gguf, unsloth, fine tune, heretic, uncensored. 📦 Fine-tunes & Quantizations.
   15. google/timesfm-3.0-pytorch - time-series forecasting. tags: safetensors, time-series, forecasting, pretrained, pytorch. 🔧 Specialized Models (time-series).
   16. MiniMaxAI/MiniMax-H3 - image-text-to-video. tags: minimax-h3, diffusers, safetensors, text-to-video, image-to-video. 🎨 Multimodal & Generation.
   17. openbmb/MiniCPM5-2B-GGUF - quantization of MiniCPM5-2B. tags: transformers, gguf, minicpm, minicpm5, llama. 📦 Fine-tunes & Quantizations.
   18. sentence-transformers/all-MiniLM-L6-v2 - embeddings/similarity. tags: sentence-transformers, pytorch, tf, rust, onnx. 🔧 Specialized Models (embeddings).
   19. Qwen/Qwen3.8-Flash-Next - LLM. tags: transformers, safetensors, qwen4_exp, image-text-to-text, conversational. 🧠 Language Models.
   20. zai-org/GLM-5.3-Flash - LLM. tags: transformers, safetensors, glm5_next, image-text-to-text, conversational. 🧠 Language Models.
   21. openai-community/gpt2 - classic LLM. tags: transformers, pytorch, tf, jax, tflite. 🧠 Language Models.
   22. Viggle/Viggle-Animate - video-to-video. tags: diffusers, safetensors, video-editing, character-replacement, video-to-video. 🎨 Multimodal & Generation.
   23. google-bert/bert-base-uncased - classic BERT. tags: transformers, pytorch, tf, jax, rust. 🧠 Language Models or 🔧 Specialized. I'll put 🧠 Language Models.
   24. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp - vision LLM. tags: transformers, safetensors, deepseek_v4, text-generation, image-text-to-text. 🧠 Language Models or 🎨 Multimodal. I'll put 🧠 Language Models.
   25. microsoft/VibeVoice-ASR-Streaming-7B - ASR. tags: transformers, safetensors, vibevoice, ASR, Transcription. 🔧 Specialized Models (speech).
   26. facebook/mms-300m - multilingual speech. tags: transformers, pytorch, wav2vec2, pretraining, mms. 🔧 Specialized Models (speech/embeddings).
   27. Qwen/Qwen-Drive-1.0-4B - autonomous driving. tags: transformers, safetensors, qwen_drive, autonomous-driving, motion-planning. 🔧 Specialized Models (autonomous driving).
   28. openai/clip-vit-base-patch32 - vision model. tags: transformers, pytorch, tf, jax, clip. 🎨 Multimodal & Generation (vision).
   29. distilbert/distilbert-base-uncased - distilled BERT. tags: transformers, pytorch, tf, jax, rust. 🧠 Language Models or 🔧 Specialized. I'll put 🧠 Language Models.
   30. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - uncensored quantized. tags: gguf, uncensored, qwen3.8, multimodal, vision. 📦 Fine-tunes & Quantizations.

   Now, I need to ensure each model appears exactly once, and categories are balanced. Let me recount and assign neatly.

   Categories:
   - 🧠 Language Models (LLMs, chat models, instruction-tuned)
   - 🎨 Multimodal & Generation (image, video, audio, text-to-X)
   - 🔧 Specialized Models (code, math, medical, embeddings, time-series, speech, autonomous driving)
   - 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

   Let me assign each model to one category, trying to fill them reasonably:

   🧠 Language Models:
   1. deepseek-ai/DeepSeek-V4.1-Flash
   2. openbmb/MiniCPM5-2B
   3. Qwen/Qwen3.8-27B
   4. Edge0/Edge0-35B-A3B-preview
   5. XHToken/Spark-X2.5-4B
   6. Qwen/Qwen3.8-Flash-Next
   7. zai-org/GLM-5.3-Flash
   8. openai-community/gpt2
   9. google-bert/bert-base-uncased
   10. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
   11. distilbert/distilbert-base-uncased

   🎨 Multimodal & Generation:
   12. nex-agi/Nex-N2.5-mini
   13. nex-agi/Nex-N2.5-Pro
   14. Lightricks/LTX-2.5
   15. WarmBloodAban/Minimax-h3_Singularity
   16. m-a-p/YuE2-3B
   17. MiniMaxAI/MiniMax-H3
   18. Viggle/Viggle-Animate
   19. facebook/mms-300m (speech but multimodal tags, could go either way; I'll put it in 🔧 Specialized as speech recognition/embedding, but mms-300m is multilingual speech model. I'll keep it in 🔧 Specialized)
   Actually, let's re-evaluate. mms-300m is a multilingual speech model, better in 🔧 Specialized.
   20. Qwen/Qwen-Drive-1.0-4B (autonomous driving, specialized)
   21. openai/clip-vit-base-patch32 (vision, but often multimodal generation/feature extraction; I'll put in 🎨 Multimodal & Generation)
   22. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF (multimodal, vision tags) - could be 📦 Fine-tunes & Quantizations since it's GGUF uncensored, but has multimodal tags. I'll put in 📦 Fine-tunes & Quantizations.

   Let me restart categorization more systematically, keeping the category definitions in mind:

   🧠 Language Models (LLMs, chat models, instruction-tuned): Models primarily focused on text generation, chat, instruction following, base LLMs.
   🎨 Multimodal & Generation (image, video, audio, text-to-X): Models that generate or process images, video, audio, or text-to-medium.
   🔧 Specialized Models (code, math, medical, embeddings, time-series, speech, autonomous driving): Domain-specific, embeddings, speech, time-series, autonomous driving.
   📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ): Models that are primarily quantized versions, fine-tunes, or community tweaks of base models.

   Now map each:

   1. deepseek-ai/DeepSeek-V4.1-Flash - 🧠 LLM (image-text-to-text but core LLM)
   2. openbmb/MiniCPM5-2B - 🧠 LLM
   3. nex-agi/Nex-N2.5-mini - has image-text-to-text, but small MOE LLM. Could be 🎨 Multimodal or 🧠 LLM. I'll put 🎨 Multimodal & Generation since it explicitly has image-text-to-text pipeline.
   4. Qwen/Qwen3.8-27B - 🧠 LLM
   5. Edge0/Edge0-35B-A3B-preview - 🧠 LLM (MoE, text-generation)
   6. XHToken/Spark-X2.5-4B - 🧠 LLM (text-generation, llm tag)
   7. nex-agi/Nex-N2.5-Pro - similar to #3, 🎨 Multimodal & Generation (image-text-to-text)
   8. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - 📦 Fine-tunes & Quantizations (gguf, quantization)
   9. Lightricks/LTX-2.5 - 🎨 Multimodal & Generation (image-to-video)
   10. unsloth/Qwen3.8-27B-GGUF - 📦 Fine-tunes & Quantizations (gguf)
   11. WarmBloodAban/Minimax-h3_Singularity - 🎨 Multimodal & Generation (image-to-video)
   12. m-a-p/YuE2-3B - 🎨 Multimodal & Generation (text-to-audio)
   13. dealignai/GLM-5.3-CYBERSECURITY-FP8 - 🔧 Specialized Models (cybersecurity focus, abliterated, refusal-removed)
   14. DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF - 📦 Fine-tunes & Quantizations (gguf, fine tune, heretic, uncensored)
   15. google/timesfm-3.0-pytorch - 🔧 Specialized Models (time-series forecasting)
   16. MiniMaxAI/MiniMax-H3 - 🎨 Multimodal & Generation (text-to-video, image-to-video)
   17. openbmb/MiniCPM5-2B-GGUF - 📦 Fine-tunes & Quantizations (gguf of MiniCPM)
   18. sentence-transformers/all-MiniLM-L6-v2 - 🔧 Specialized Models (embeddings, sentence-similarity)
   19. Qwen/Qwen3.8-Flash-Next - 🧠 LLM (qwen4_exp, image-text-to-text, conversational)
   20. zai-org/GLM-5.3-Flash - 🧠 LLM (image-text-to-text, conversational)
   21. openai-community/gpt2 - 🧠 LLM
   22. Viggle/Viggle-Animate - 🎨 Multimodal & Generation (video-to-video)
   23. google-bert/bert-base-uncased - 🧠 LLM (base BERT, fill-mask)
   24. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp - 🧠 LLM (image-text-to-text, but DeepSeek vision; I'll keep 🧠 LLM, or maybe 🎨. I'll put 🧠 LLM since it's a vision LLM but core is LLM. Actually, tags: image-text-to-text, so multimodal. I'll put 🎨 Multimodal & Generation to balance, but it's fine either way. I'll put 🧠 LLM and note vision. Let's put 🎨 Multimodal & Generation.)
   Actually, let's be consistent: if it has "image-text-to-text" pipeline, it's multimodal. I'll move #24 to 🎨 Multimodal & Generation.
   25. microsoft/VibeVoice-ASR-Streaming-7B - 🔧 Specialized Models (ASR, speech transcription)
   26. facebook/mms-300m - 🔧 Specialized Models (multilingual speech, wav2vec2)
   

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*