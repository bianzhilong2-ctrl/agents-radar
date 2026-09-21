# Hugging Face Trending Models Digest 2026-09-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-21 02:25 UTC

---

Here's a thinking process:

1.  **Analyze the Request:**
   - User wants a structured "Hugging Face Trending Models Digest"
   - Based on the provided list of 30 models (sorted by weekly likes, as of 2026-09-21)
   - Requirements:
     - **Today's Highlights**: 3-5 sentences on notable releases/trends
     - **Trending Models**: Organized by category, each with model name (with HF link), author, likes, downloads, one-sentence description of what it is and why it's trending
     - Categories: 
       - 🧠 Language Models (LLMs, chat models, instruction-tuned)
       - 🎨 Multimodal & Generation (image, video, audio, text-to-X)
       - 🔧 Specialized Models (code, math, medical, embeddings)
       - 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
     - **Ecosystem Signal**: 100-200 words analyzing trends: model families gaining momentum, open-weight vs proprietary, quantization/fine-tuning activity
     - **Worth Exploring**: 2-3 models most worth trying/studying, with reasoning
   - Style: English, concise and professional, preserve all HF links

2.  **Map the 30 Models to Categories:**
   I need to carefully categorize each of the 30 models into the 4 specified categories. Let me go through each:

   1. **prism-ml/Ternary-Bonsai-2-27B-gguf** - LLM, ternary, 2-bit, gguf → 📦 Fine-tunes & Quantizations (or LLMs)
   2. **convaiinnovations/laya** - text-classification, system-one, calibrated-decisions → 🧠 Language Models (or 🔧 Specialized)
   3. **deepseek-ai/DeepSeek-V4.1-Flash** - image-text-to-text, multimodal → 🎨 Multimodal & Generation
   4. **Qwen/Qwen-Image-2.1** - text-to-image, image-editing → 🎨 Multimodal & Generation
   5. **XingChen-AGI/Xing4.0-29B-A4B** - text-generation, conversational → 🧠 Language Models
   6. **Qwen/Qwen3.8-27B** - image-text-to-text, conversational, huge downloads/likes → 🧠 Language Models (top tier)
   7. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** - quantization, gguf, GSQ-RCO → 📦 Fine-tunes & Quantizations
   8. **m-a-p/YuE2-3B** - text-to-audio, music-generation → 🎨 Multimodal & Generation
   9. **harshatheg/Qwen-2.5-1B-RLCD** - mlx, structured-decoding, apple-silicon → 📦 Fine-tunes & Quantizations (or 🧠 Language Models, but mlx/quant focus)
   10. **Lightricks/LTX-2.5** - image-to-video, text-to-video → 🎨 Multimodal & Generation
   11. **ukisai/Swift-Qwen3.8-27b** - image-text-to-text → 🧠 Language Models
   12. **unsloth/Qwen3.8-27B-GGUF** - GGUF, quantized Qwen → 📦 Fine-tunes & Quantizations
   13. **DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF** - GGUF, uncensored, fine-tuned → 📦 Fine-tunes & Quantizations
   14. **AlexWortega/openjev** - text-classification, NLI, cross-encoder → 🔧 Specialized Models (NLI/classification)
   15. **Comfy-Org/Qwen-Image-2.1** - ComfyUI, base model fine-tune → 🎨 Multimodal & Generation (or 📦 Fine-tunes & Quantizations)
   16. **prism-ml/Ternary-Bonsai-2-27B-mlx-2bit** - mlx, ternary, 2-bit → 📦 Fine-tunes & Quantizations
   17. **Qwen/Qwen3.8-Flash-Next** - image-text-to-text, qwen4_exp → 🧠 Language Models
   18. **ukisai/Swift-Qwen3.8-27B-GGUF** - GGUF, efficient-thinking → 📦 Fine-tunes & Quantizations
   19. **openbmb/MiniCPM5-2B** - text-generation, minicpm → 🧠 Language Models
   20. **meta-llama/Llama-3.1-8B-Instruct** - text-generation, instruct → 🧠 Language Models
   21. **MiniMaxAI/MiniMax-H3** - image-text-to-video, text-to-video, image-to-video → 🎨 Multimodal & Generation
   22. **TokenRhythm/NeoHorse-1-9B** - text-generation, agentic → 🧠 Language Models
   23. **internlm/Atria-Dawn-Preview** - glm_moe_dsa, multimodal? tags: glm_moe_dsa, zh, en → 🧠 Language Models or 🔧 Specialized
   24. **TaichuAI/ZDTaichu5.0-9B** - image-text-to-text, multimodal, spatial-reasoning → 🎨 Multimodal & Generation
   25. **WarmBloodAban/Minimax-h3_Singularity** - image-to-video, video-generation → 🎨 Multimodal & Generation
   26. **ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF** - GGUF, quantization → 📦 Fine-tunes & Quantizations
   27. **dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8** - FP8, uncensored, DeepSeek → 📦 Fine-tunes & Quantizations
   28. **Edge0/Edge0-35B-A3B-preview** - mlx, qwen3_5_moe, moe → 📦 Fine-tunes & Quantizations (or 🧠 Language Models, but MoE focus)
   29. **zai-org/GLM-5.3-Flash** - image-text-to-text, conversational → 🧠 Language Models
   30. **Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4** - audio tokenizer → 🎨 Multimodal & Generation (audio) or 📦 Specialized

   Now, I need to organize them into the 4 categories, ensuring each model appears once, and I pick the most fitting category. Some models might fit multiple, but I'll assign to primary category based on tags/pipeline.

   Let me re-evaluate and group:

   **🧠 Language Models (LLMs, chat models, instruction-tuned):**
   - 6. Qwen/Qwen3.8-27B (15,864 likes, 7.3M downloads) - flagship Qwen
   - 11. ukisai/Swift-Qwen3.8-27b (510 likes, 10,962) - Qwen3.8 instruction
   - 12. unsloth/Qwen3.8-27B-GGUF (4,433 likes, 6.9M) - quantized Qwen
   - 17. Qwen/Qwen3.8-Flash-Next (5,496 likes, 761K) - next-gen Qwen
   - 19. openbmb/MiniCPM5-2B (1,627 likes, 420K) - efficient LLM
   - 20. meta-llama/Llama-3.1-8B-Instruct (7,771 likes, 5.9M) - mainstream LLM
   - 22. TokenRhythm/NeoHorse-1-9B (980 likes, 11.9K) - agentic LLM
   - 29. zai-org/GLM-5.3-Flash (2,500 likes, 3.1M) - GLM multimodal
   - 5. XingChen-AGI/Xing4.0-29B-A4B (903 likes, 12.6K) - conversational
   - 14. AlexWortega/openjev (319 likes, 0) - NLI/cross-encoder (specialized but language-focused)
   - 23. internlm/Atria-Dawn-Preview (210 likes, 895) - glm_moe_dsa

   **🎨 Multimodal & Generation (image, video, audio, text-to-X):**
   - 3. deepseek-ai/DeepSeek-V4.1-Flash (3,439 likes, 496K) - image-text-to-text
   - 4. Qwen/Qwen-Image-2.1 (813 likes, 183) - text-to-image
   - 8. m-a-p/YuE2-3B (918 likes, 17.4K) - text-to-audio/music
   - 10. Lightricks/LTX-2.5 (4,562 likes, 1.6M) - image/video-to-video
   - 15. Comfy-Org/Qwen-Image-2.1 (280 likes, 120) - ComfyUI image gen
   - 21. MiniMaxAI/MiniMax-H3 (5,527 likes, 4.0M) - text-to-video/image-to-video
   - 24. TaichuAI/ZDTaichu5.0-9B (213 likes, 3.75K) - multimodal spatial reasoning
   - 25. WarmBloodAban/Minimax-h3_Singularity (572 likes, 242K) - video gen
   - 30. Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4 (159 likes, 0) - audio tokenizer
   - 1. prism-ml/Ternary-Bonsai-2-27B-gguf could fit here or quantization, but it's a quantized LLM; I'll put in 📦
   - 2. convaiinnovations/laya - text-classification, maybe 🔧

   **🔧 Specialized Models (code, math, medical, embeddings):**
   - 14. AlexWortega/openjev (NLI, cross-encoder) - could go here
   - 9. harshatheg/Qwen-2.5-1B-RLCD (mlx, structured-decoding, constrained) - specialized decoding
   - 23. internlm/Atria-Dawn-Preview (glm_moe_dsa, arxiv:2609.15818, multilingual) - specialized MoE
   - Maybe 16. prism-ml/Ternary-Bonsai-2-27B-mlx-2bit (ternary, 2-bit mlx) - specialized quantization
   - 18. ukisai/Swift-Qwen3.8-27B-GGUF (efficient-thinking) - could be 📦
   - 26. ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF (quantization)
   - 27. dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8 (FP8 uncensored) - specialized quant

   **📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ):**
   - 1. prism-ml/Ternary-Bonsai-2-27B-gguf (ternary, 2-bit gguf)
   - 7. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (GSQ-RCO quantization)
   - 12. unsloth/Qwen3.8-27B-GGUF (GGUF, unsloth)
   - 13. DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF (GGUF, uncensored fine-tune)
   - 16. prism-ml/Ternary-Bonsai-2-27B-mlx-2bit (mlx, ternary 2-bit)
   - 18. ukisai/Swift-Qwen3.8-27B-GGUF (GGUF, efficient-thinking)
   - 26. ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF (GGUF quantization)
   - 27. dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8 (FP8 quantization)
   - 28. Edge0/Edge0-35B-A3B-preview (mlx, MoE, edge-inference)
   - 9. harshatheg/Qwen-2.5-1B-RLCD (mlx, structured generation)

   I need to ensure each model is in exactly one category, and the categories are balanced. The prompt says "Organized by category, each with: Model name (with HF link), Author, likes, downloads, One sentence: what it is, why it's trending". It doesn't say every model must appear, but likely we should cover the 30 or at least the trending ones. I'll select the most representative models for each category, aiming for total ~30 across categories, but the structure implies we list models under categories, possibly all 30 or a curated subset. Given the digest format, I'll include all 30, organized into the 4 categories, with each having the required fields.

   Let me carefully assign each of the 30 to one category, trying to make logical sense and keeping categories reasonable in size.

   I'll create the categories and list models. I need to preserve HF links exactly as given.

   Let's plan the categories:

   **🧠 Language Models (LLMs, chat models, instruction-tuned)**
   - Models primarily focused on text generation, conversation, instruction-following, or serving as base/chat LLMs.
   - 6. Qwen/Qwen3.8-27B
   - 11. ukisai/Swift-Qwen3.8-27b
   - 12. unsloth/Qwen3.8-27B-GGUF
   - 17. Qwen/Qwen3.8-Flash-Next
   - 19. openbmb/MiniCPM5-2B
   - 20. meta-llama/Llama-3.1-8B-Instruct
   - 22. TokenRhythm/NeoHorse-1-9B
   - 29. zai-org/GLM-5.3-Flash
   - 5. XingChen-AGI/Xing4.0-29B-A4B
   - 14. AlexWortega/openjev (NLI/cross-encoder, but language-focused)
   - 23. internlm/Atria-Dawn-Preview

   **🎨 Multimodal & Generation (image, video, audio, text-to-X)**
   - Models primarily for image/video/audio generation, editing, or multimodal understanding.
   - 3. deepseek-ai/DeepSeek-V4.1-Flash
   - 4. Qwen/Qwen-Image-2.1
   - 8. m-a-p/YuE2-3B
   - 10. Lightricks/LTX-2.5
   - 15. Comfy-Org/Qwen-Image-2.1
   - 21. MiniMaxAI/MiniMax-H3
   - 24. TaichuAI/ZDTaichu5.0-9B
   - 25. WarmBloodAban/Minimax-h3_Singularity
   - 30. Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4
   - 1. prism-ml/Ternary-Bonsai-2-27B-gguf (could be quantization, but it's a multimodal-capable LLM? tags: llama.cpp, gguf, ternary, 2-bit, llama-cpp - actually it's a quantized LLM. I'll move it to 📦. But let's see: it's Ternary-Bonsai, likely LLM. I'll keep 📦 for quantization. For 🎨, I'll pick the clearly multimodal ones.)
   - 2. convaiinnovations/laya (text-classification, system-one) - maybe 🔧 or 🧠. I'll put in 🔧.

   **🔧 Specialized Models (code, math, medical, embeddings)**
   - Models with specific domains: code generation, mathematical reasoning, medical NLP, embeddings, or specialized architectures.
   - 9. harshatheg/Qwen-2.5-1B-RLCD (mlx, structured-decoding, constrained-decoding, apple-silicon)
   - 16. prism-ml/Ternary-Bonsai-2-27B-mlx-2bit (mlx, ternary, 2-bit, prism_hadamard_qwen35) - specialized quantization/architecture
   - 1

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*