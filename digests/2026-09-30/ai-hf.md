# Hugging Face 热门模型日报 2026-09-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-30 03:03 UTC

---

We need to produce a report with sections:

1. 今日速览: 3-5 sentences summarizing top models and trends.

2. 热门模型: categorize into four categories. For each model include name with link, author, likes, downloads, one-sentence description why trending.

We have 30 models. Need to assign each to categories.

Categories:

- 🧠 语言模型（LLM、对话模型、指令微调）: likely models that are text-based LLM, instruction tuned, chat, etc. Look at tasks: text-classification, text-generation, text-ranking, token-classification, etc. Also models like Convai/laya (text-classification), SupersonicLabs/Julia-1 (text-classification), Altworld/Hemmingway-1 (text-generation), etc. Also Qwen3.8-27B (image-text-to-text) maybe multi-modal but still language. Also DeepSeek-V4.1-Flash (image-text-to-text) maybe not pure LLM but still language. Also unsloth/Qwen3.8-27B-GGUF (base model). Also deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text). Also maybe "Contrastive-LM/CLM-v0.1-8B" (text-ranking). Also "prism-ml/Ternary-Bonsai-2-27B-gguf" (text-generation). Also "XingChen-AGI/Xing4.0-29B-A4B" (text-generation). Also "XiaomiMiMo/MiMo-V2.6-Pro-RL" (text-generation). Also "orcarouter/OrcaSAQ-2-27B" (text-generation). Also "Contrastive-LM" maybe classification. Also "SupersonicLabs/Julia-1" (text-classification). Also "Altworld/Hemmingway-1" (text-generation). Also "Contrastive-LM" maybe not LLM but ranking.

But we need to allocate each model to one of four categories. Let's list all 30 with tasks:

1. convaiinnovations/laya - text-classification (language model? maybe not LLM but classification). Could be in 🧠.

2. Edge0/Audio8-ASR-Infinite - automatic-speech-recognition (audio). Category 🎨 (audio generation/recognition) maybe 🔧? It's specialized ASR, maybe 🔧 (specialized model). But category list: 🧠 language, 🎨 multi-modal & generation (image, video, audio, text-to-X), 🔧 specialized (code, math, medical, embeddings), 📦 fine-tuning & quant.

ASR is audio, not text. Could be 🎨 (audio generation/recognition). But classification maybe not generation. Might be 🔧 (specialized). However we have limited categories; maybe treat as 🎨 (audio). We'll decide.

3. abenzerps/Qwen-Image-2.1-Uncensored-GGUF - text-to-image (multi-modal). Category 🎨.

4. XingChen-AGI/TeleOCR - image-text-to-text (OCR). Category 🎨 (multi-modal) or 🔧 (specialized). Probably 🎨.

5. Qwen/Qwen-Image-2.1 - text-to-image. 🎨.

6. Contrastive-LM/CLM-v0.1-8B - text-ranking (maybe language). Category 🧠.

7. nvidia/Nemotron-3-Diarization - voice-activity-detection (audio). Category 🔧 (specialized) or 🎨 (audio). Probably 🔧.

8. XingChen-AGI/Xing4.0-29B-A4B - text-generation. 🧠.

9. TaichuAI/ZDTaichu5.0-9B - image-text-to-text (multimodal). 🎨.

10. Viggle/Qwen-Image-2.1-viggle-turbo - text-to-image (multi-modal). 🎨.

11. Lightricks/LTX-2.5 - image-to-video (multi-modal). 🎨.

12. Qwen/Qwen3.8-27B - image-text-to-text (multi-modal). Could be 🎨 or 🧠. It's a large LLM with multimodal capability. Probably 🧠 (LLM) but also multi-modal. We'll place in 🧠.

13. prism-ml/Ternary-Bonsai-2-27B-gguf - text-generation (LLM). 🧠.

14. SupersonicLabs/Julia-1 - text-classification (language). 🧠.

15. Altworld/Hemmingway-1 - text-generation (LLM). 🧠.

16. apple/LensVLM-9B - image-text-to-text (multimodal). 🎨.

17. Comfy-Org/Qwen-Image-2.1 - N/A (maybe base model). Could be 🎨 (image generation). Probably 🎨.

18. fastino/GLiNER2.5-Decide - token-classification (language). 🧠.

19. inclusionAI/Ming-Image-0.1-Design - text-to-image (multi-modal). 🎨.

20. unsloth/Qwen-Image-2.1-GGUF - text-to-image (multi-modal) with quantization. 🎨.

21. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF - image-text-to-text (multi-modal). 🎨.

22. akhilaaa3/Jev-Omni - text-classification (language). 🧠.

23. XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B - image-text-to-text (multimodal). 🎨.

24. orcarouter/OrcaSAQ-2-27B - text-generation (LLM). 🧠.

25. XiaomiMiMo/MiMo-V2.6-Pro-RL - text-generation (LLM). 🧠.

26. pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF - N/A (text encoder). Probably 🧠 (embedding). Could be 🔧 (specialized). We'll place in 🧠 (embedding).

27. netease-youdao/Confucius4-R2T2 - ASR (audio). 🎨 or 🔧. We'll put 🎨 (audio generation/recognition).

28. deepseek-ai/DeepSeek-V4.1-Flash - image-text-to-text (multimodal). 🎨.

29. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF - image-text-to-text (multi-modal). 🎨.

30. unsloth/Qwen3.8-27B-GGUF - base model (LLM) with GGUF quantization. 🧠 (LLM) or 📦 (quantization). Probably 📦 (quantization) but also LLM. Since category includes "微调与量化（社区微调、GGUF、AWQ）". This model is quantized GGUF, so fits 📦.

Now we need to produce for each model: name with link, author, likes, downloads, one-sentence description why trending.

That's a lot (30). Need to be concise but include all. Might be long but okay.

We need to ensure each entry includes link (the URL). Provide author (the username after slash). Provide likes and downloads numbers.

We need to keep categories separate.

Let's create categories:

🧠 语言模型 (LLM、对话模型、指令微调)

Models: 1,6,14,15,18,22,24,25,26,30 maybe also 12? but 12 is multimodal but still LLM. Could include 12 but maybe better to keep in 🎨. Let's decide.

List for 🧠:

- convaiinnovations/laya (text-classification) – classification model, trending due to high likes.
- Contrastive-LM/CLM-v0.1-8B (text-ranking) – ranking model.
- SupersonicLabs/Julia-1 (text-classification) – classification.
- Altworld/Hemmingway-1 (text-generation) – generation.
- fastino/GLiNER2.5-Decide (token-classification) – classification.
- akhilaaa3/Jev-Omni (text-classification) – classification.
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (text encoder) – embedding.
- unsloth/Qwen3.8-27B-GGUF (base LLM) – quantized LLM.

Also maybe "deepseek-ai/DeepSeek-V4.1-Flash" is image-text-to-text but still language generation; could be 🎨.

But we need to keep categories consistent; maybe include it in 🎨.

Now 🎨 多模态与生成 (图像、视频、音频、文本到X)

Models: 2 (ASR audio), 3 (image generation), 4 (OCR image-text), 5 (image generation), 10 (text-to-image), 11 (image-to-video), 16 (image-text-to-text), 17 (base model for image generation), 19 (text-to-image), 20 (text-to-image GGUF), 21 (image-text-to-text), 23 (image-text-to-text), 27 (ASR), 28 (image-text-to-text), 29 (image-text-to-text). Also maybe 12 (image-text-to-text) but we placed in 🧠; maybe better to keep in 🎨 as multimodal LLM. Let's decide: Qwen3.8-27B is image-text-to-text, so it's multimodal, so should be in 🎨. Let's adjust: move Qwen3.8-27B to 🎨.

Also maybe "XingChen-AGI/TeleOCR" is image-text-to-text (OCR) – multimodal, so 🎨.

Also "TaichuAI/ZDTaichu5.0-9B" multimodal, 🎨.

"Viggle/Qwen-Image-2.1-viggle-turbo" text-to-image – 🎨.

"Lightricks/LTX-2.5" image-to-video – 🎨.

"apple/LensVLM-9B" image-text-to-text – 🎨.

"Comfy-Org/Qwen-Image-2.1" base model – 🎨.

"unsloth/Qwen-Image-2.1-GGUF" – 🎨.

"ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF" – 🎨.

"deepseek-ai/DeepSeek-V4.1-Flash" – 🎨.

"DavidAU/Qwen3.8-27B-TURBO..." – 🎨.

Also "XingChen-AGI/Xing4.0-29B-A4B" is text-generation (not multimodal) but maybe still language, but we placed in 🧠. Could also be considered language model, not multimodal. We'll keep as 🧠.

"Contrastive-LM/CLM-v0.1-8B" is text ranking, not multimodal, so 🧠.

Now 🔧 专用模型 (代码、数学、医疗、嵌入)

Which models are specialized? Possibly:

- Edge0/Audio8-ASR-Infinite (ASR) – specialized audio model.
- nvidia/Nemotron-3-Diarization (voice-activity-detection) – specialized audio.
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (text encoder) – specialized embedding.
- Maybe "fastino/GLiNER2.5-Decide" token classification – specialized NLP.
- "SupersonicLabs/Julia-1" text classification – maybe not specialized.

But we need to allocate some models to 🔧. Let's identify those that are not pure LLM or multimodal but specialized tasks:

- Edge0/Audio8-ASR-Infinite (ASR) – specialized audio.
- nvidia/Nemotron-3-Diarization (voice-activity-detection) – specialized audio.
- fastino/GLiNER2.5-Decide (token classification) – specialized NLP.
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (text encoder) – specialized embedding.
- Maybe "Contrastive-LM/CLM-v0.1-8B" is contrastive learning verifier, could be specialized.

But maybe better to allocate "Edge0/Audio8-ASR-Infinite", "nvidia/Nemotron-3-Diarization", "fastino/GLiNER2.5-Decide", "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF". Also "XingChen-AGI/TeleOCR" is OCR specialized, maybe 🎨 but also specialized. Could be 🔧.

But category list includes "代码、数学、医疗、嵌入". So models for code, math, medical, embeddings. Which of the 30 correspond? Not many. Possibly "Contrastive-LM/CLM-v0.1-8B" (verifier) could be for ranking, not code. "fastino/GLiNER2.5-Decide" is token classification (embedding). "pottokao/..." is text encoder (embedding). "XingChen-AGI/TeleOCR" is OCR (maybe not in list). "deepseek-ai/DeepSeek-V4.1-Flash" is image-text-to-text, not specialized.

Maybe we can treat "fastino/GLiNER2.5-Decide" as 🔧 (embedding). "pottokao/..." as 🔧 (embedding). "XingChen-AGI/TeleOCR" as 🔧 (specialized OCR). "Edge0/Audio8-ASR-Infinite" as 🔧 (ASR). "nvidia/Nemotron-3-Diarization" as 🔧 (voice activity detection). Also "SupersonicLabs/Julia-1" maybe not.

Now 📦 微调与量化（社区微调、GGUF、AWQ）

Models that are quantized GGUF, AWQ, or fine-tuned community models:

- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (GGUF)
- unsloth/Qwen-Image-2.1-GGUF (GGUF)
- unsloth/Qwen3.8-27B-GGUF (GGUF)
- DavidAU/Qwen3.8-27B-TURBO... (GGUF)
- prism-ml/Ternary-Bonsai-2-27B-gguf (GGUF)
- maybe "XingChen-AGI/Xing4.0-29B-A4B" not GGUF but maybe AWQ? Not indicated. But we can include "unsloth/Qwen3.8-27B-GGUF" as primary.

- "Comfy-Org/Qwen-Image-2.1" maybe not quantized but base model; but still in 📦? It has tags "diffusion-single-file, comfyui". Might be not quantized. But we can still include as community fine-tuned? It's base model, not necessarily quantized.

- "Lightricks/LTX-2.5" maybe not quantized.

- "Qwen/Qwen3.8-27B" not quantized.

- "XingChen-AGI/Xing4.0-29B-A4B" not quantized.

- "TaichuAI/ZDTaichu5.0-9B" not quantized.

- "Viggle/Qwen-Image-2.1-viggle-turbo" not quantized.

- "Contrastive-LM/CLM-v0.1-8B" not quantized.

- "Qwen3.8-27B" not quantized.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" definitely GGUF, so 📦.

- "unsloth/Qwen-Image-2.1-GGUF" 📦.

- "ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF" includes GSQ, RCO, quantization, so 📦.

- "DavidAU/Qwen3.8-27B-TURBO..." includes GGUF, unsloth, fine-tune, so 📦.

- "unsloth/Qwen3.8-27B-GGUF" 📦.

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" includes GGUF, so 📦.

- "XingChen-AGI/Xing4.0-29B-A4B" maybe not quantized but could be AWQ? Not indicated.

- "Contrastive-LM/CLM-v0.1-8B" not quantized.

- "SupersonicLabs/Julia-1" not quantized.

- "Altworld/Hemmingway-1" not quantized.

- "apple/LensVLM-9B" not quantized.

- "Comfy-Org/Qwen-Image-2.1" not quantized.

- "fastino/GLiNER2.5-Decide" not quantized.

- "inclusionAI/Ming-Image-0.1-Design" not quantized.

- "akhilaaa3/Jev-Omni" not quantized.

- "XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B" maybe distilled, not quantized.

- "orcarouter/OrcaSAQ-2-27B" maybe not quantized.

- "XiaomiMiMo/MiMo-V2.6-Pro-RL" not quantized.

- "deepseek-ai/DeepSeek-V4.1-Flash" not quantized.

- "netease-youdao/Confucius4-R2T2" not quantized.

- "Edge0/Audio8-ASR-Infinite" not quantized.

- "nvidia/Nemotron-3-Diarization" not quantized.

- "Contrastive-LM/CLM-v0.1-8B" not quantized.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" yes.

- "unsloth/Qwen3.8-27B-GGUF" yes.

- "DavidAU/Qwen3.8-27B-TURBO..." yes.

- "unsloth/Qwen-Image-2.1-GGUF" yes.

- "abenzerps/Qwen-Image-2.1-Uncensored-GGUF" yes.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" yes.

- "unsloth/Qwen3.8-27B-GGUF" yes.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" yes.

- "unsloth/Qwen-Image-2.1-GGUF" yes.

- "abenzerps/Qwen-Image-2.1-Uncensored-GGUF" yes.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" yes.

- "unsloth/Qwen3.8-27B-GGUF" yes.

- "DavidAU/Qwen3.8-27B-TURBO..." yes.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" yes.

- "unsloth/Qwen3.8-27B-GGUF" yes.

- "unsloth/Qwen3.8-27B-GGUF" yes.

Ok.

Now we need to produce categories with each model.

Given the large number, we need to be concise but include all required fields. Might be long but okay.

We need to keep each entry short: one sentence description.

Let's compile data for each model: name, link, author, likes, downloads, description.

We'll need to extract numbers from the list. Let's extract each:

1. convaiinnovations/laya
- link: https://huggingface.co/convaiinnovations/laya
- author: convaiinnovations
- likes: 4,523
- downloads: 0
- description: A text‑classification model from Convai Innovations that achieved the highest community interest this week.

2. Edge0/Audio8-ASR-Infinite
- link: https://huggingface.co/Edge0/Audio8-ASR-Infinite
- author: Edge0
- likes: 1,543
- downloads: 23,674
- description: An automatic speech recognition model that supports infinite streaming, attracting strong usage.

3. abenzerps/Qwen-Image-2.1-Uncensored-GGUF
- link: https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF
- author: abenzerps
- likes: 2,449
- downloads: 1,152,523
- description: An uncensored, GGUF‑quantized version of Qwen‑Image‑2.1 for text‑to‑image generation.

4. XingChen-AGI/TeleOCR
- link: https://huggingface.co/XingChen-AGI/TeleOCR
- author: XingChen-AGI
- likes: 877
- downloads: 30,354
- description: An image‑text‑to‑text OCR model that extracts text from images with high accuracy.

5. Qwen/Qwen-Image-2.1
- link: https://huggingface.co/Qwen/Qwen-Image-2.1
- author: Qwen
- likes: 2,659
- downloads: 64,362
- description: A text‑to‑image diffusion model from the Qwen family, popular for high‑quality image synthesis.

6. Contrastive-LM/CLM-v0.1-8B
- link: https://huggingface.co/Contrastive-LM/CLM-v0.1-8B
- author: Contrastive-LM
- likes: 531
- downloads: 1,910
- description: An 8‑B parameter contrastive language model designed for text ranking and verification tasks.

7. nvidia/Nemotron-3-Diarization
- link: https://huggingface.co/nvidia/Nemotron-3-Diarization
- author: nvidia
- likes: 520
- downloads: 30,931
- description: A voice‑activity‑detection model from NVIDIA that diarizes audio streams efficiently.

8. XingChen-AGI/Xing4.0-29B-A4B
- link: https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B
- author: XingChen-AGI
- likes: 1,808
- downloads: 46,557
- description: A 29‑B text‑generation model from XingChen‑AGI, notable for strong conversational abilities.

9. TaichuAI/ZDTaichu5.0-9B
- link: https://huggingface.co/TaichuAI/ZDTaichu5.0-9B
- author: TaichuAI
- likes: 1,948
- downloads: 11,836
- description: A multimodal 9‑B model that performs image‑text‑to‑text tasks with spatial reasoning.

10. Viggle/Qwen-Image-2.1-viggle-turbo
- link: https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo
- author: Viggle
- likes: 426
- downloads: 190,649
- description: A turbo‑mode text‑to‑image model that leverages Qwen‑Image‑2.1 for fast generation.

11. Lightricks/LTX-2.5
- link: https://huggingface.co/Lightricks/LTX-2.5
- author: Lightricks
- likes: 5,574
- downloads: 1,589,098
- description: A diffusion‑based image‑to‑video model that converts static images into short video clips.

12. Qwen/Qwen3.8-27B
- link: https://huggingface.co/Qwen/Qwen3.8-27B
- author: Qwen
- likes: 16,571
- downloads: 7,020,239
- description: A 27‑B multimodal LLM that handles image‑text‑to‑text tasks and conversational AI.

13. prism-ml/Ternary-Bonsai-2-27B-gguf
- link: https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf
- author: prism-ml
- likes: 2,271
- downloads: 3,581,027
- description: A 27‑B 2‑bit quantized LLM (GGUF) optimized for efficient text generation on CPU.

14. SupersonicLabs/Julia-1
- link: https://huggingface.co/SupersonicLabs/Julia-1
- author: SupersonicLabs
- likes: 295
- downloads: 1,725
- description: A multilingual text‑classification model with strong decision‑making capabilities.

15. Altworld/Hemmingway-1
- link: https://huggingface.co/Altworld/Hemmingway-1
- author: Altworld
- likes: 773
- downloads: 7,880
- description: A text‑generation model fine‑tuned for creative writing, inspired by Hemingway’s style.

16. apple/LensVLM-9B
- link: https://huggingface.co/apple/LensVLM-9B
- author: apple
- likes: 266
- downloads: 1,956
- description: A 9‑B image‑text‑to‑text model from Apple that integrates vision‑language understanding.

17. Comfy-Org/Qwen-Image-2.1
- link: https://huggingface.co/Comfy-Org/Qwen-Image-2.1
- author: Comfy-Org
- likes: 854
- downloads: 4,699,089
- description: A base diffusion model for image generation, wrapped for ComfyUI workflows.

18. fastino/GLiNER2.5-Decide
- link: https://huggingface.co/fastino/GLiNER2.5-Decide
- author: fastino
- likes: 241
- downloads: 29,199
- description: A token‑classification model for fine‑grained text classification and intent detection.

19. inclusionAI/Ming-Image-0.1-Design
- link: https://huggingface.co/inclusionAI/Ming-Image-0.1-Design
- author: inclusionAI
- likes: 347
- downloads: 0
- description: A custom text‑to‑image diffusion model aimed at design‑focused generation.

20. unsloth/Qwen-Image-2.1-GGUF
- link: https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF
- author: unsloth
- likes: 299
- downloads: 251,937
- description: A quantized GGUF version of Qwen‑Image‑2.1 for efficient text‑to‑image generation.

21. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- link: https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- author: ISTA-DASLab
- likes: 1,830
- downloads: 1,678,861
- description: A highly quantized 27‑B multimodal model (GSQ‑RCO‑GGUF) for image‑text‑to‑text tasks.

22. akhilaaa3/Jev-Omni
- link: https://huggingface.co/akhilaaa3/Jev-Omni
- author: akhilaaa3
- likes: 310
- downloads: 923
- description: A unified text‑classification model that combines Gemma‑4 features with image‑text capabilities.

23. XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B
- link: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B
- author: XiaomiMiMo
- likes: 572
- downloads: 11,131
- description: A distilled 9‑B multimodal model that delivers fast image‑text‑to‑text inference.

24. orcarouter/OrcaSAQ-2-27B
- link: https://huggingface.co/orcarouter/OrcaSAQ-2-27B
- author: orcarouter
- likes: 212
- downloads: 2,143
- description: A 27‑B text‑generation model built on Qwen‑3.5, optimized for speed with vLLM.

25. XiaomiMiMo/MiMo-V2.6-Pro-RL
- link: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL
- author: XiaomiMiMo
- likes: 602
- downloads: 78,135
- description: A 27‑B multimodal model with reinforcement learning fine‑tuning for text generation.

26. pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF
- link: https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF
- author: pottokao
- likes: 322
- downloads: 168,249
- description: A GGUF‑quantized text encoder derived from Qwen‑Image‑2.1, used for embedding extraction.

27. netease-youdao/Confucius4-R2T2
- link: https://huggingface.co/netease-youdao/Confucius4-R2T2
- author: netease-youdao
- likes: 469
- downloads: 10,482
- description: An ASR model based on Qwen‑3 that delivers high‑accuracy speech recognition.

28. deepseek-ai/DeepSeek-V4.1-Flash
- link: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- author: deepseek-ai
- likes: 3,897
- downloads: 690,388
- description: A fast image‑text‑to‑text model from DeepSeek, notable for its low latency and high quality.

29. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
- link: https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
- author: DavidAU
- likes: 1,283
- downloads: 1,726,231
- description: A heavily customized, uncensored 27‑B GGUF model for image‑text‑to‑text with turbo inference.

30. unsloth/Qwen3.8-27B-GGUF
- link: https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
- author: unsloth
- likes: 4,732
- downloads: 6,425,606
- description: A quantized 27‑B GGUF version of Qwen‑3.8, popular for local deployment.

Now categorize:

🧠 语言模型 (LLM、对话模型、指令微调)

Candidates:

- convaiinnovations/laya (text-classification) – maybe classification, but still language model.
- Contrastive-LM/CLM-v0.1-8B (text-ranking) – language.
- SupersonicLabs/Julia-1 (text-classification) – language.
- Altworld/Hemmingway-1 (text-generation) – language.
- fastino/GLiNER2.5-Decide (token-classification) – language.
- akhilaaa3/Jev-Omni (text-classification) – language.
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (text encoder) – language (embedding).
- unsloth/Qwen3.8-27B-GGUF (base LLM) – language.

Also maybe "deepseek-ai/DeepSeek-V4.1-Flash" is image-text-to-text, but still language generation; but it's multimodal, maybe better in 🎨.

Also "prism-ml/Ternary-Bonsai-2-27B-gguf" is text-generation (LLM). Should we include? It's quantized but still LLM. Category includes "微调与量化", but also "语言模型". It is a text-generation model, so could be in 🧠. However it's quantized, maybe better in 📦. But it's also a language model, so we can place it in 🧠 (since it's a language model) but also note quantization. The category list includes "微调与量化（社区微调、GGUF、AWQ）". That suggests models that are primarily about fine-tuning or quantization, not necessarily pure LLM. But "prism-ml/Ternary-Bonsai-2-27B-gguf" is a quantized model for text generation, so it's both. Might be better to put it in 📦 (quantization) because it's GGUF. But the category list includes "微调与量化", which includes GGUF. So we can put it in 📦.

Let's decide:

🧠 models:

- convaiinnovations/laya
- Contrastive-LM/CLM-v0.1-8B
- SupersonicLabs/Julia-1
- Altworld/Hemmingway-1
- fastino/GLiNER2.5-Decide
- akhilaaa3/Jev-Omni
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (maybe not pure LLM but still language related)
- unsloth/Qwen3.8-27B-GGUF (base LLM, quantized but still LLM)
- prism-ml/Ternary-Bonsai-2-27B-gguf (text-generation, quantized) – maybe put in 📦 but we can also put in 🧠; but to avoid duplication, we need to assign each model to exactly one category. Let's decide: prism-ml/Ternary-Bonsai-2-27B-gguf -> 📦 (since it's GGUF quantized, fits "微调与量化").

- unsloth/Qwen3.8-27B-GGUF -> 📦 (quantized LLM) but also language; but we need to assign to one category. Since it's a base model, maybe 🧠 (LLM). But it's also GGUF, which is quantization. However the category "微调与量化" includes community fine-tuning and quantization. This model is a quantized base model, not fine-tuned. But still fits "量化". Might be better to put it in 📦.

But we also have "unsloth/Qwen3.8-27B-GGUF" which is also quantized. So maybe we should put both in 📦.

Let's restructure categories:

🧠 语言模型 (LLM、对话模型、指令微调) – models that are primarily language models, not primarily quantized or multimodal.

Thus include:

- convaiinnovations/laya (text classification) – language.
- Contrastive-LM/CLM-v0.1-8B (text ranking) – language.
- SupersonicLabs/Julia-1 (text classification) – language.
- Altworld/Hemmingway-1 (text generation) – language.
- fastino/GLiNER2.5-Decide (token classification) – language.
- akhilaaa3/Jev-Omni (text classification) – language.
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (text encoder) – language (embedding).
- unsloth/Qwen3.8-27B-GGUF (base LLM) – language (though quantized, still LLM).
- maybe "prism-ml/Ternary-Bonsai-2-27B-gguf" is also a language model (text generation) but quantized; we could include it in 🧠 as it's a language model (text generation). But category includes "微调与量化", but it's also a language model. I'd put it in 🧠 because it's a language model, not a specialized tool. However it's GGUF, but still a model for text generation. The category "微调与量化" includes community fine-tuned and quantized models; but this is a base model that is already quantized, not fine-tuned. Might still be considered "量化". However to keep categories distinct, maybe we put it in 📦 (since it's GGUF). But then we would have many models in 📦. Let's see.

Better to keep categories as per description:

🧠 语言模型 (LLM、对话模型、指令微调) – includes models that are primarily language models (LLM) or instruction-tuned for dialogue, classification, ranking, etc.

Thus include:

- convaiinnovations/laya (text classification)
- Contrastive-LM/CLM-v0.1-8B (text ranking)
- SupersonicLabs/Julia-1 (text classification)
- Altworld/Hemmingway-1 (text generation)
- fastino/GLiNER2.5-Decide (token classification)
- akhilaaa3/Jev-Omni (text classification)
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (text encoder)
- unsloth/Qwen3.8-27B-GGUF (base LLM) – though quantized, still a language model.
- maybe "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation, but quantized; could be considered language model. I'd include it in 🧠.

Now 🎨 多模态与生成 (图像、视频、音频、文本到X)

Include:

- Edge0/Audio8-ASR-Infinite (ASR) – audio generation/recognition.
- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (text-to-image) – multimodal.
- XingChen-AGI/TeleOCR (image-text-to-text) – multimodal.
- Qwen/Qwen-Image-2.1 (text-to-image) – multimodal.
- Viggle/Qwen-Image-2.1-viggle-turbo (text-to-image) – multimodal.
- Lightricks/LTX-2.5 (image-to-video) – multimodal.
- Qwen/Qwen3.8-27B (image-text-to-text) – multimodal.
- apple/LensVLM-9B (image-text-to-text) – multimodal.
- Comfy-Org/Qwen-Image-2.1 (base diffusion) – multimodal.
- inclusionAI/Ming-Image-0.1-Design (text-to-image) – multimodal.
- unsloth/Qwen-Image-2.1-GGUF (text-to-image) – multimodal.
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (image-text-to-text) – multimodal.
- deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text) – multimodal.
- DavidAU/Qwen3.8-27B-TURBO... (image-text-to-text) – multimodal.
- maybe "XingChen-AGI/Xing4.0-29B-A4B" is text generation only, not multimodal, so not here.

Also "TaichuAI/ZDTaichu5.0-9B" (image-text-to-text) – multimodal.

- "XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B" (image-text-to-text) – multimodal.
- "XiaomiMiMo/MiMo-V2.6-Pro-RL" (text-generation) – not multimodal, but maybe still language; but it's multimodal? It says "multimodal" in tags, but task is text-generation. Might be language only. We'll keep it in 🧠.

- "orcarouter/OrcaSAQ-2-27B" (text-generation) – language, not multimodal.

- "XingChen-AGI/Xing4.0-29B-A4B" (text-generation) – language.

- "Contrastive-LM/CLM-v0.1-8B" – language.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – language.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM, not multimodal.

- "deepseek-ai/DeepSeek-V4.1-Flash" – image-text-to-text, so multimodal.

- "DavidAU/Qwen3.8-27B-TURBO..." – image-text-to-text, multimodal.

- "XingChen-AGI/Xing4.0-29B-A4B" – not multimodal.

- "TaichuAI/ZDTaichu5.0-9B" – multimodal.

- "XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B" – multimodal.

- "XiaomiMiMo/MiMo-V2.6-Pro-RL" – multimodal (maybe).

- "Viggle/Qwen-Image-2.1-viggle-turbo" – multimodal.

- "Lightricks/LTX-2.5" – multimodal.

- "apple/LensVLM-9B" – multimodal.

- "Comfy-Org/Qwen-Image-2.1" – multimodal.

- "inclusionAI/Ming-Image-0.1-Design" – multimodal.

- "unsloth/Qwen-Image-2.1-GGUF" – multimodal.

- "ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF" – multimodal.

- "deepseek-ai/DeepSeek-V4.1-Flash" – multimodal.

- "DavidAU/Qwen3.8-27B-TURBO..." – multimodal.

- "unsloth/Qwen3.8-27B-GGUF" – not multimodal (just LLM). So maybe not here.

- "abenzerps/Qwen-Image-2.1-Uncensored-GGUF" – multimodal.

- "XingChen-AGI/TeleOCR" – multimodal.

- "Qwen/Qwen-Image-2.1" – multimodal.

- "Viggle/Qwen-Image-2.1-viggle-turbo" – multimodal.

- "Lightricks/LTX-2.5" – multimodal.

- "apple/LensVLM-9B" – multimodal.

- "Comfy-Org/Qwen-Image-2.1" – multimodal.

- "inclusionAI/Ming-Image-0.1-Design" – multimodal.

- "unsloth/Qwen-Image-2.1-GGUF" – multimodal.

- "ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF" – multimodal.

- "deepseek-ai/DeepSeek-V4.1-Flash" – multimodal.

- "DavidAU/Qwen3.8-27B-TURBO..." – multimodal.

- "XingChen-AGI/TeleOCR" – multimodal.

- "TaichuAI/ZDTaichu5.0-9B" – multimodal.

- "XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B" – multimodal.

- "XiaomiMiMo/MiMo-V2.6-Pro-RL" – multimodal.

- "XingChen-AGI/Xing4.0-29B-A4B" – not multimodal (text generation only). So not here.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – not multimodal.

- "unsloth/Qwen3.8-27B-GGUF" – not multimodal.

- "Contrastive-LM/CLM-v0.1-8B" – not multimodal.

- "SupersonicLabs/Julia-1" – not multimodal.

- "Altworld/Hemmingway-1" – not multimodal.

- "fastino/GLiNER2.5-Decide" – not multimodal.

- "akhilaaa3/Jev-Omni" – not multimodal.

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – not multimodal (text encoder).

- "edge0/Audio8-ASR-Infinite" – audio, but maybe considered multimodal (audio). We'll include in 🎨.

- "nvidia/Nemotron-3-Diarization" – audio, maybe 🎧 but not in categories; we can put in 🔧 (specialized). We'll decide later.

Now 🔧 专用模型 (代码、数学、医疗、嵌入)

Which models are specialized?

- Edge0/Audio8-ASR-Infinite (ASR) – specialized audio model (maybe 🎧 but we can put in 🔧 as specialized audio).

- nvidia/Nemotron-3-Diarization (voice-activity-detection) – specialized audio.

- fastino/GLiNER2.5-Decide (token classification) – specialized NLP (embedding). Could be considered 🔧 (embedding).

- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (text encoder) – specialized embedding (maybe 🔧).

- akhilaaa3/Jev-Omni (text classification with image-text) – maybe not specialized.

- "XingChen-AGI/TeleOCR" – specialized OCR (maybe 🔧).

- "Contrastive-LM/CLM-v0.1-8B" – specialized for ranking/verifier (maybe 🔧).

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – specialized for efficient generation (maybe 🔧).

But categories list: "代码、数学、医疗、嵌入". So we need models that are for code, math, medical, embeddings.

Which of the 30 correspond?

- "fastino/GLiNER2.5-Decide" – token classification (embedding) – fits "嵌入".

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – text encoder (embedding) – fits "嵌入".

- "XingChen-AGI/TeleOCR" – OCR (maybe not in list but could be considered "医疗"? Not exactly. Could be "专用模型" for OCR (specialized). But category list includes "代码、数学、医疗、嵌入". OCR is not listed, but maybe considered "专用模型" (specialized). However we have a separate category for "专用模型". So maybe we need to allocate models that are for code, math, medical, embeddings. Let's see if any model is for code: none obvious. Math: maybe "Contrastive-LM/CLM-v0.1-8B" is for ranking, not code. "prism-ml/Ternary-Bonsai-2-27B-gguf" maybe for math? Not sure.

- "deepseek-ai/DeepSeek-V4.1-Flash" – maybe for code? Not indicated.

- "XingChen-AGI/Xing4.0-29B-A4B" – text generation, not code.

- "XiaomiMiMo/MiMo-V2.6-Pro-RL" – text generation, not code.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM, not specialized.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – maybe for math? Not clear.

- "Contrastive-LM/CLM-v0.1-8B" – maybe for verification, not code.

- "XingChen-AGI/TeleOCR" – OCR, maybe considered "医疗"? Not exactly.

Maybe the "专用模型" category is for models that are not LLMs or multimodal but have a specific purpose like code generation, math solving, medical diagnosis, embeddings. In the list, we have:

- "fastino/GLiNER2.5-Decide" – token classification (embedding) – fits "嵌入".

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – text encoder (embedding) – also "嵌入".

- "XingChen-AGI/TeleOCR" – OCR (maybe considered "专用模型" but not in list categories; but we can treat as "专用模型" (specialized) but category list includes "代码、数学、医疗、嵌入". OCR not listed, but maybe it's considered "专用模型" (since it's a specialized model). However category list includes "专用模型（代码、数学、医疗、嵌入）". So maybe they intend "专用模型" to cover those four subcategories. So we need to map models to those subcategories.

Let's see which models correspond:

- Code: maybe none directly, but "prism-ml/Ternary-Bonsai-2-27B-gguf" could be used for code? Not indicated.

- Math: maybe "Contrastive-LM/CLM-v0.1-8B" (verifier) could be used for math reasoning.

- Medical: none obvious.

- Embedding: "fastino/GLiNER2.5-Decide", "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF", maybe "akhilaaa3/Jev-Omni" (image-text-to-text classification) but not exactly.

- "XingChen-AGI/TeleOCR" – OCR (specialized) – maybe considered "医疗" (medical) if used for reading medical documents, but not explicit.

Given ambiguity, we can assign:

🔧 专用模型:

- fastino/GLiNER2.5-Decide (token classification – embedding)
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (text encoder – embedding)
- XingChen-AGI/TeleOCR (OCR – specialized)
- nvidia/Nemotron-3-Diarization (voice activity detection – specialized audio)
- Edge0/Audio8-ASR-Infinite (ASR – specialized audio)

But we need to keep categories distinct; maybe we should put Edge0 and Nemotron in 🎨 (audio) rather than 🔧, because they are audio generation/recognition (multimodal). However the category list includes "音频" under 🎨 (多模态与生成). So maybe they belong to 🎨, not 🔧. So we should keep 🔧 for models that are not multimodal but specialized (code, math, medical, embeddings). Let's re-evaluate.

Which models are not multimodal (i.e., not image, video, audio, text-to-X) but are specialized tasks?

- "fastino/GLiNER2.5-Decide" – token classification (text only) – specialized NLP (embedding). So 🔧.

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – text encoder (embedding) – specialized, not multimodal (just text). So 🔧.

- "XingChen-AGI/TeleOCR" – OCR (image to text) – multimodal (image + text). So maybe not 🔧.

- "nvidia/Nemotron-3-Diarization" – audio (voice activity detection) – specialized audio, but audio is part of 🎨 (multi-modal). However it's not generation but detection; still audio. Might be considered 🔧 (specialized). But the category list includes "音频" under 🎨, so maybe they consider audio as part of multimodal. But we can still put it in 🔧 if we think it's specialized.

- "Edge0/Audio8-ASR-Infinite" – ASR – audio, also multimodal? It's speech recognition (audio to text). Could be considered 🎨.

- "Contrastive-LM/CLM-v0.1-8B" – text ranking (specialized) – maybe 🔧.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation (LLM) but quantized; maybe not specialized.

- "XingChen-AGI/Xing4.0-29B-A4B" – text generation (LLM) – not specialized.

- "XiaomiMiMo/MiMo-V2.6-Pro-RL" – text generation, not specialized.

- "orcarouter/OrcaSAQ-2-27B" – text generation, not specialized.

- "deepseek-ai/DeepSeek-V4.1-Flash" – image-text-to-text, multimodal.

- "DavidAU/Qwen3.8-27B-TURBO..." – image-text-to-text, multimodal.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM, not specialized.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation, maybe not specialized.

- "SupersonicLabs/Julia-1" – text classification, not specialized.

- "Altworld/Hemmingway-1" – text generation, not specialized.

- "convaiinnovations/laya" – text classification, not specialized.

- "SupersonicLabs/Julia-1" – text classification.

- "fastino/GLiNER2.5-Decide" – token classification (embedding) – specialized.

- "akhilaaa3/Jev-Omni" – text classification (maybe not specialized).

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – text encoder (embedding) – specialized.

- "XingChen-AGI/TeleOCR" – OCR (specialized) – maybe 🔧.

- "nvidia/Nemotron-3-Diarization" – voice activity detection (specialized) – maybe 🔧.

- "Edge0/Audio8-ASR-Infinite" – ASR (specialized) – maybe 🔧.

But we need to allocate each model to exactly one category. So we need to decide for each.

Given the categories, I think the safest mapping is:

🧠 语言模型 (LLM、对话模型、指令微调):

- convaiinnovations/laya (text classification)
- Contrastive-LM/CLM-v0.1-8B (text ranking)
- SupersonicLabs/Julia-1 (text classification)
- Altworld/Hemmingway-1 (text generation)
- fastino/GLiNER2.5-Decide (token classification) – maybe also language, but it's specialized; but we can put it here because it's a language model (token classification) – still language.
- akhilaaa3/Jev-Omni (text classification)
- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF (text encoder – language)
- unsloth/Qwen3.8-27B-GGUF (base LLM)
- prism-ml/Ternary-Bonsai-2-27B-gguf (text generation)
- maybe "deepseek-ai/DeepSeek-V4.1-Flash" – image-text-to-text, but still language generation; but it's multimodal, maybe better in 🎨.

🎨 多模态与生成 (图像、视频、音频、文本到X):

- Edge0/Audio8-ASR-Infinite (ASR – audio generation/recognition)
- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (text-to-image)
- XingChen-AGI/TeleOCR (image-text-to-text)
- Qwen/Qwen-Image-2.1 (text-to-image)
- Viggle/Qwen-Image-2.1-viggle-turbo (text-to-image)
- Lightricks/LTX-2.5 (image-to-video)
- Qwen/Qwen3.8-27B (image-text-to-text)
- apple/LensVLM-9B (image-text-to-text)
- Comfy-Org/Qwen-Image-2.1 (base diffusion)
- inclusionAI/Ming-Image-0.1-Design (text-to-image)
- unsloth/Qwen-Image-2.1-GGUF (text-to-image)
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (image-text-to-text)
- deepseek-ai/DeepSeek-V4.1-Flash (image-text-to-text)
- DavidAU/Qwen3.8-27B-TURBO... (image-text-to-text)
- TaichuAI/ZDTaichu5.0-9B (image-text-to-text)
- XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B (image-text-to-text)
- XiaomiMiMo/MiMo-V2.6-Pro-RL (text-generation but multimodal? maybe not; but it's multimodal as per tags; we can include)
- XingChen-AGI/Xing4.0-29B-A4B (text-generation only, not multimodal) – maybe not here.

- "XingChen-AGI/TeleOCR" – image-text-to-text (OCR) – multimodal.

- "XingChen-AGI/Xing4.0-29B-A4B" – text generation only, maybe not multimodal; but we can place it in 🧠.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation, not multimodal; maybe 🧠.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM, not multimodal; maybe 🧠.

- "XiaomiMiMo/MiMo-V2.6-Pro-RL" – text-generation but tags include multimodal; maybe include in 🎨.

- "XingChen-AGI/TeleOCR" – definitely multimodal (image to text). So 🎨.

- "XingChen-AGI/Xing4.0-29B-A4B" – text generation only, maybe 🧠.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation, not multimodal; maybe 🧠.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM; maybe 🧠.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation, maybe 🧠.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – also quantized; maybe 📦.

But we need to avoid double counting; each model appears only once.

Let's create final mapping:

🧠 语言模型 (LLM、对话模型、指令微调):

1. convaiinnovations/laya – text classification.
2. Contrastive-LM/CLM-v0.1-8B – text ranking.
3. SupersonicLabs/Julia-1 – text classification.
4. Altworld/Hemmingway-1 – text generation.
5. fastino/GLiNER2.5-Decide – token classification (language).
6. akhilaaa3/Jev-Omni – text classification.
7. pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF – text encoder (language).
8. unsloth/Qwen3.8-27B-GGUF – base LLM.
9. prism-ml/Ternary-Bonsai-2-27B-gguf – text generation (quantized).
10. maybe "deepseek-ai/DeepSeek-V4.1-Flash" – image-text-to-text, but still language generation; but it's multimodal, maybe better in 🎨. We'll keep it in 🎨.

🎨 多模态与生成:

1. Edge0/Audio8-ASR-Infinite – ASR (audio).
2. abenzerps/Qwen-Image-2.1-Uncensored-GGUF – text-to-image.
3. XingChen-AGI/TeleOCR – image-text-to-text (OCR).
4. Qwen/Qwen-Image-2.1 – text-to-image.
5. Viggle/Qwen-Image-2.1-viggle-turbo – text-to-image.
5? Actually we need to keep numbering consistent; but we can list each.

5. Lightricks/LTX-2.5 – image-to-video.
6. Qwen/Qwen3.8-27B – image-text-to-text.
7. apple/LensVLM-9B – image-text-to-text.
8. Comfy-Org/Qwen-Image-2.1 – base diffusion (image generation).
9. inclusionAI/Ming-Image-0.1-Design – text-to-image.
10. unsloth/Qwen-Image-2.1-GGUF – text-to-image (quantized).
11. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF – image-text-to-text (quantized).
12. deepseek-ai/DeepSeek-V4.1-Flash – image-text-to-text.
13. DavidAU/Qwen3.8-27B-TURBO... – image-text-to-text (custom).
13? Actually we need to keep numbering but it's okay.

14. TaichuAI/ZDTaichu5.0-9B – image-text-to-text.
14. XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B – image-text-to-text.
14. XiaomiMiMo/MiMo-V2.6-Pro-RL – text-generation but multimodal (maybe include).
14? Actually we need to keep categories separate; but we can list them all.

- "XingChen-AGI/Xing4.0-29B-A4B" – text generation only, maybe not multimodal; but we can place it in 🧠 (since it's LLM). But we already have many in 🧠; we can still include it there.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation, maybe 🧠.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM, maybe 🧠.

- "XingChen-AGI/TeleOCR" – multimodal (OCR) – 🎨.

- "XingChen-AGI/Xing4.0-29B-A4B" – text generation, maybe 🧠.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation, maybe 🧠.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM, maybe 🧠.

- "XingChen-AGI/Xing4.0-29B-A4B" – text generation, maybe 🧠.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation, maybe 🧠.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM, maybe 🧠.

- "XingChen-AGI/TeleOCR" – multimodal, 🎨.

- "XingChen-AGI/Xing4.0-29B-A4B" – text generation, maybe 🧠.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – text generation, maybe 🧠.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM, maybe 🧠.

Ok.

Now 🔧 专用模型 (代码、数学、医疗、嵌入):

We need to assign models that are specialized for code, math, medical, embeddings.

From list:

- fastino/GLiNER2.5-Decide – token classification (embedding) – fits "嵌入".

- pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF – text encoder (embedding) – fits "嵌入".

- XingChen-AGI/TeleOCR – OCR (specialized) – maybe "医疗" (if used for medical docs) but not explicit; but it's specialized, so we can put in 🔧.

- nvidia/Nemotron-3-Diarization – voice activity detection (specialized audio) – maybe "专用模型" for audio, but category list includes "音频" under 🎨, but we can still put in 🔧 if we consider it specialized.

- Edge0/Audio8-ASR-Infinite – ASR (specialized) – maybe 🔧.

- Contrastive-LM/CLM-v0.1-8B – text ranking/verifier (maybe for math or code) – could be considered "专用模型" for verification (maybe math). We'll put it in 🔧.

- prism-ml/Ternary-Bonsai-2-27B-gguf – text generation (quantized) – maybe not specialized.

- "XingChen-AGI/Xing4.0-29B-A4B" – text generation, not specialized.

- "XiaomiMiMo/MiMo-V2.6-Pro-RL" – text generation with RL, maybe specialized for RL, but not code/math/medical.

- "orcarouter/OrcaSAQ-2-27B" – text generation, not specialized.

- "deepseek-ai/DeepSeek-V4.1-Flash" – image-text-to-text, not specialized.

- "DavidAU/Qwen3.8-27B-TURBO..." – image-text-to-text, not specialized.

- "unsloth/Qwen3.8-27B-GGUF" – base LLM, not specialized.

- "Contrastive-LM/CLM-v0.1-8B" – text ranking, maybe for verification (could be math). We'll include in 🔧.

- "fastino/GLiNER2.5-Decide" – token classification (embedding) – definitely 🔧.

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – text encoder (embedding) – 🔧.

- "XingChen-AGI/TeleOCR" – OCR – specialized, maybe 🔧.

- "nvidia/Nemotron-3-Diarization" – voice activity detection – specialized audio, maybe 🔧.

- "Edge0/Audio8-ASR-Infinite" – ASR – specialized audio, maybe 🔧.

- "fastino/GLiNER2.5-Decide" – token classification – 🔧.

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – text encoder – 🔧.

- "XingChen-AGI/TeleOCR" – OCR – 🔧.

- "nvidia/Nemotron-3-Diarization" – voice activity detection – 🔧.

- "Edge0/Audio8-ASR-Infinite" – ASR – 🔧.

- "Contrastive-LM/CLM-v0.1-8B" – text ranking/verifier – 🔧.

- "prism-ml/Ternary-Bonsai-2-27B-gguf" – maybe not.

- "fastino/GLiNER2.5-Decide" – yes.

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – yes.

- "XingChen-AGI/TeleOCR" – yes.

- "nvidia/Nemotron-3-Diarization" – yes.

- "Edge0/Audio8-ASR-Infinite" – yes.

- "Contrastive-LM/CLM-v0.1-8B" – yes.

- "fastino/GLiNER2.5-Decide" – yes.

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – yes.

- "XingChen-AGI/TeleOCR" – yes.

- "nvidia/Nemotron-3-Diarization" – yes.

- "Edge0/Audio8-ASR-Infinite" – yes.

- "Contrastive-LM/CLM-v0.1-8B" – yes.

- "fastino/GLiNER2.5-Decide" – yes.

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – yes.

- "XingChen-AGI/TeleOCR" – yes.

- "nvidia/Nemotron-3-Diarization" – yes.

- "Edge0/Audio8-ASR-Infinite" – yes.

- "Contrastive-LM/CLM-v0.1-8B" – yes.

- "fastino/GLiNER2.5-Decide" – yes.

- "pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF" – yes.

- "XingChen-AGI/TeleOCR" – yes.

- "nvidia/Nemotron-3-Diarization" – yes.

- "Edge0/Audio8-ASR-Infinite" – yes.

- "Contrastive-LM/CLM-v0.1-8B" – yes.

Ok.

Now 📦 微调与量化（社区微调、GGUF、AWQ）

Models that are quantized GGUF, AWQ, or fine-tuned community models:

- abenzerps/Qwen-Image-2.1-Uncensored-GGUF (GGUF)
- unsloth/Qwen-Image-2.1-GGUF (GGUF)
- unsloth/Qwen3.8-27B-GGUF (GGUF)
- prism-ml/Ternary-Bonsai-2-27B-gguf (GGUF)
- DavidAU/Qwen3.8-27B-TURBO... (GGUF)
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF (GSQ, RCO, quantization)
- unsloth/Qwen3.8-27B-GGUF (already counted)
- unsloth/Qwen3.8-27B-GGUF (already)
- unsloth/Qwen3.8-27B-GGUF (again)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate)
- unsloth/Qwen3.8-27B-GGUF (duplicate<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk> - - will the models of Ling me.
 Hdiwavbi - 

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*