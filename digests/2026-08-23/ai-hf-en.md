# Hugging Face Trending Models Digest 2026-08-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-23 00:43 UTC

---

Here's a thinking process:

1.  **Analyze User Request:**
   - Role: AI model ecosystem analyst
   - Input: List of 30 trending Hugging Face models as of 2026-08-23, sorted by weekly likes
   - Output format: "Structured Hugging Face Trending Models Digest in English" with specific sections:
     - Today's Highlights (3-5 sentences)
     - Trending Models (organized by category, each with model name + link, author, likes, downloads, one-sentence description)
     - Ecosystem Signal (100-200 words analyzing trends)
     - Worth Exploring (2-3 models with reasoning)
   - Style: Concise, professional, preserve all HF links

2.  **Examine the Input Data:**
   - 30 models with names, links, authors, likes, downloads, tags
   - Need to categorize them into the specified categories:
     - 🧠 Language Models (LLMs, chat models, instruction-tuned)
     - 🎨 Multimodal & Generation (image, video, audio, text-to-X)
     - 🔧 Specialized Models (code, math, medical, embeddings)
     - 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
   - I need to go through each model, decide its primary category, and extract the required info.

   Let me list all 30 models with their key info:

   1. Qwen/Qwen3.8-27B - transformers, safetensors, qwen3_5, image-text-to-text, conversational - 12,135 likes, 2,090,699 downloads
   2. unsloth/Qwen3.8-27B-GGUF - gguf, qwen3_5, unsloth - 2,624 likes, 6,320,542 downloads
   3. orcarouter/Qwen3.8-27B-Uncensored-MLX - mlx, safetensors, qwen3_5, abliterated, qwen3.8 - 885 likes, 34,909 downloads
   4. orcarouter/Qwen3.8-27B-Uncensored-FP8 - transformers, safetensors, qwen3_5, image-text-to-text, abliterated - 989 likes, 142,846 downloads
   5. OBLITERATUS/Qwen3.8-27B-OBLITERATED - mlx, safetensors, gguf, qwen3_5, abliterated - 531 likes, 164,950 downloads
   6. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF - gguf, uncensored, qwen3.8, multimodal, vision - 485 likes, 486,221 downloads
   7. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF - llama.cpp, gguf, uncensored, qwen3.8, mtp - 623 likes, 1,223,422 downloads
   8. Lightricks/LTX-2.5 - diffusion-single-file, image-to-video, text-to-video, video-to-video, image-text-to-video - 1,564 likes, 694,670 downloads
   9. MiniMaxAI/MiniMax-Music3 - diffusers, safetensors, minimax_music3, music-generation, text-to-audio - 1,181 likes, 16,644 downloads
   10. ornith-ai/Ornith-1.5-35B-A3B - transformers, safetensors, qwen3_5_moe, image-text-to-text, text-generation - 320 likes, 12,611 downloads
   11. MiniMaxAI/MiniMax-H3 - minimax-h3, diffusers, safetensors, text-to-video, image-to-video - 4,338 likes, 3,899,160 downloads
   12. orcarouter/Qwen3.8-27B-Uncensored-GGUF - gguf, abliterated, qwen, qwen3, qwen3.8 - 336 likes, 85,371 downloads
   13. froggeric/Qwen-Fixed-Chat-Templates - mlx, jinja, chat-template, qwen, qwen3.5 - 1,397 likes, 0 downloads
   14. huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF - transformers, gguf, abliterated, uncensored, huihui - 254 likes, 635,416 downloads
   15. ornith-ai/Ornith-1.5-35B-A3B-GGUF - transformers, gguf, text-generation, license:mit, endpoints_compatible - 232 likes, 173,935 downloads
   16. Qwen/Qwen3.8-27B-FP8 - transformers, safetensors, qwen3_5, image-text-to-text, conversational - 664 likes, 2,306,777 downloads
   17. huihui-ai/Huihui-Qwen3.8-27B-abliterated - transformers, safetensors, qwen3_5, image-text-to-text, abliterated - 246 likes, 21,612 downloads
   18. superwhisper/s1-mini - transformers, safetensors, qwen3, text-generation, asr - 202 likes, 1,913 downloads
   19. empero-ai/Qwen3.8-27B-Ridge-GGUF - gguf, llama.cpp, quantized, qwen3.8, qwen3.5 - 244 likes, 97,247 downloads
   20. z-lab/Qwen3.8-27B-DFlash2 - transformers, safetensors, qwen3, dflash2, speculative-decoding - 194 likes, 29,705 downloads
   21. TenStrip/10Eros-Max - text-to-video, image-text-to-video, image-to-video, base_model:MiniMaxAI/MiniMax-H3 - 316 likes, 0 downloads
   22. DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF - gguf, qwen3_5, unsloth, GAIN Training, COLD-FUSION - 190 likes, 176,969 downloads
   23. deepseek-ai/DeepSeek-V4-Pro-0813 - transformers, safetensors, deepseek_v4, text-generation, conversational - 718 likes, 54,566 downloads
   24. deepseek-ai/DeepSeek-V4-Flash-0731 - transformers, safetensors, deepseek_v4, text-generation, conversational - 3,630 likes, 2,976,281 downloads
   25. Qwen/Qwen3.8-2.4T-A95B - transformers, safetensors, qwen3_5_moe_text, text-generation, conversational - 1,146 likes, 17,386 downloads
   26. moonshotai/Kimi-K3 - transformers, safetensors, kimi_k3, feature-extraction, compressed-tensors - 10,926 likes, 2,612,739 downloads
   27. meta-models/Muse-Glimmer-30B - transformers, safetensors, muse_glimmer, image-text-to-text, conversational - 1,755 likes, 517,564 downloads
   28. LBH-123-AI/Minimax_h3_latent_Upscaler - region:us - 159 likes, 0 downloads
   29. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF - transformers, gguf, qwen3.8, qwen3.5, heretic - 226 likes, 505,813 downloads
   30. empero-ai/Qwen3.8-9B-Distill - transformers, safetensors, qwen3_5, image-text-to-text, empero-ai - 164 likes, 9,260 downloads

   Now, categorize each into the 4 categories:

   🧠 Language Models (LLMs, chat models, instruction-tuned):
   - 1. Qwen/Qwen3.8-27B (image-text-to-text, conversational)
   - 2. unsloth/Qwen3.8-27B-GGUF (quantized LLM)
   - 4. orcarouter/Qwen3.8-27B-Uncensored-FP8 (image-text-to-text, abliterated)
   - 5. OBLITERATUS/Qwen3.8-27B-OBLITERATED (abliterated, likely LLM)
   - 7. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF (uncensored LLM)
   - 10. ornith-ai/Ornith-1.5-35B-A3B (MoE text-generation)
   - 15. ornith-ai/Ornith-1.5-35B-A3B-GGUF (GGUF version)
   - 16. Qwen/Qwen3.8-27B-FP8 (FP8 quantized LLM)
   - 17. huihui-ai/Huihui-Qwen3.8-27B-abliterated (abliterated LLM)
   - 18. superwhisper/s1-mini (text-generation, ASR, but likely LLM-based)
   - 19. empero-ai/Qwen3.8-27B-Ridge-GGUF (quantized LLM)
   - 20. z-lab/Qwen3.8-27B-DFlash2 (speculative decoding, LLM)
   - 25. Qwen/Qwen3.8-2.4T-A95B (MoE text-generation)
   - 29. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF (abliterated)
   - 30. empero-ai/Qwen3.8-9B-Distill (distilled LLM)

   🎨 Multimodal & Generation (image, video, audio, text-to-X):
   - 3. orcarouter/Qwen3.8-27B-Uncensored-MLX (MLX, multimodal? tags: qwen3.8, but MLX is Apple framework, likely multimodal)
   - 8. Lightricks/LTX-2.5 (image-to-video, text-to-video)
   - 9. MiniMaxAI/MiniMax-Music3 (text-to-audio, music-generation)
   - 11. MiniMaxAI/MiniMax-H3 (text-to-video, image-to-video)
   - 21. TenStrip/10Eros-Max (text-to-video, image-to-video)
   - 26. moonshotai/Kimi-K3 (image-text-to-text, feature-extraction, compressed-tensors - multimodal)
   - Maybe also 6. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF (multimodal, vision tags)

   🔧 Specialized Models (code, math, medical, embeddings):
   Looking at tags, I need to find ones clearly specialized. 
   - 10. ornith-ai/Ornith-1.5-35B-A3B (qwen3_5_moe, could be general but MoE specialized)
   - 23. deepseek-ai/DeepSeek-V4-Pro-0813 (text-generation, conversational - might be general)
   - 24. deepseek-ai/DeepSeek-V4-Flash-0731 (similar)
   - 26. moonshotai/Kimi-K3 (feature-extraction, compressed-tensors - could be specialized)
   - Actually, the category might be sparse. Let me re-examine: maybe some are embeddings or code-related but not explicitly tagged. I'll try to fit what fits or group them as "general but popular".
   Wait, the categories are fixed. I need to assign each model to exactly one category, or allow overlap but the prompt says "Organized by category". I'll aim for mutually exclusive primary categories based on tags and pipeline.

   Let me rethink categorization more systematically:

   🧠 Language Models (LLMs, chat models, instruction-tuned):
   - Primary focus: text-generation, conversational, instruction-tuned, transformers safetensors
   - 1. Qwen/Qwen3.8-27B
   - 2. unsloth/Qwen3.8-27B-GGUF
   - 4. orcarouter/Qwen3.8-27B-Uncensored-FP8
   - 5. OBLITERATUS/Qwen3.8-27B-OBLITERATED
   - 7. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
   - 10. ornith-ai/Ornith-1.5-35B-A3B
   - 15. ornith-ai/Ornith-1.5-35B-A3B-GGUF
   - 16. Qwen/Qwen3.8-27B-FP8
   - 17. huihui-ai/Huihui-Qwen3.8-27B-abliterated
   - 18. superwhisper/s1-mini (text-generation, ASR - borderline, but I'll put here)
   - 19. empero-ai/Qwen3.8-27B-Ridge-GGUF
   - 20. z-lab/Qwen3.8-27B-DFlash2
   - 25. Qwen/Qwen3.8-2.4T-A95B
   - 29. 0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF
   - 30. empero-ai/Qwen3.8-9B-Distill

   🎨 Multimodal & Generation (image, video, audio, text-to-X):
   - Primary focus: image-to-video, text-to-video, text-to-audio, video-to-video, diffusion, etc.
   - 3. orcarouter/Qwen3.8-27B-Uncensored-MLX (tags: mlx, qwen3.8 - MLX is Apple's framework for ML, often multimodal/vision)
   - 6. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF (tags: multimodal, vision)
   - 8. Lightricks/LTX-2.5
   - 9. MiniMaxAI/MiniMax-Music3
   - 11. MiniMaxAI/MiniMax-H3
   - 21. TenStrip/10Eros-Max

   🔧 Specialized Models (code, math, medical, embeddings):
   - Need to find ones with clear specialization tags. Looking through:
   - 10. ornith-1.5-35B-A3B has qwen3_5_moe - could be specialized MoE
   - 23. DeepSeek-V4-Pro-0813 - might be general
   - 24. DeepSeek-V4-Flash-0731 - general
   - 26. moonshotai/Kimi-K3 - feature-extraction, compressed-tensors - could be specialized embedding/model
   - Actually, maybe I should have a sub-category or just list fewer here, or group the "quantized/abliterated" as specialized fine-tunes. But the category is 🔧 Specialized Models (code, math, medical, embeddings). I'll pick:
   - 10. ornith-ai/Ornith-1.5-35B-A3B (MoE text-generation, specialized architecture)
   - 26. moonshotai/Kimi-K3 (feature-extraction, compressed-tensors, specialized)
   - Maybe 18. superwhisper/s1-mini (ASR, but it's a model - I'll put in specialized or move to LLMs). ASR is speech recognition, could be specialized. I'll keep it in LLMs or move. Let's see.
   - Actually, I might just have 2-3 in this category, or combine some. The prompt says "Organized by category", doesn't say every model must appear, but typically digest includes all. I'll try to assign all 30 across the 4 categories, allowing some flexibility.

   📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ):
   - Primary focus: GGUF, AWQ, quantized versions, community fine-tunes, abliterated

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*