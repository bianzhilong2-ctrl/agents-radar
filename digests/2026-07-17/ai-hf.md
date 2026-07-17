# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 01:50 UTC

---

We need to produce a structured daily report. Must include sections: 今日速览 (3-5 sentences), 热门模型 (by categories with details: model name with link, author, likes, downloads, one sentence description), 生态信号 (100-200 Chinese characters), 值得探索 (2-3 models with reasons). Must keep all HF links.

We have list of 30 models with details. Need to categorize each appropriately. We need to decide which go where. Provide maybe a selection not all? The instruction: "热门模型 — 按以下分类整理，每个模型包含：" suggests we should list models under each category. Likely we should include all 30 models distributed. Could be long but okay. Provide concise.

We need to compute categories:

- Language models: text-generation tasks (including conversational, instruction-tuned). Many models have task text-generation. Also some with N/A maybe not.

- Multimodal & generation: image-text-to-text, audio-text-to-text, image-to-video, text-to-video, etc.

- Specialized: code, math, medical, embeddings. Not many explicit but we have some like "Unlimited-OCR" (OCR), "OvisOCR2", "GLM-5.2" maybe MoE, "Qwen-Fixed-Chat-Templates" (N/A). Might treat as specialized.

- Finetuning & quantization: GGUF, AWQ, etc. Many are GGUF quantized versions. Also "unsloth/Qwen3.6-27B-NVFP4" (NVFP4), "Ternary-Bonsai" etc.

We'll assign.

We need to keep links. Provide one sentence description.

We need to keep it concise but include all.

Let's list categories and assign each model:

First parse each model:

1. thinkingmachines/Inkling: task image-text-to-text -> multimodal.

2. prism-ml/Ternary-Bonsai-27B-gguf: text-generation, GGUF quantized -> quantization.

3. prism-ml/Bonsai-27B-gguf: text-generation, GGUF -> quantization.

4. empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF: image-text-to-text, GGUF -> multimodal + quantization.

5. zai-org/GLM-5.2: text-generation, MoE -> language model (MoE).

6. bottlecapai/ThinkingCap-Qwen3.6-27B: image-text-to-text -> multimodal.

7. conradlocke/krea2-identity-edit: N/A, image-editing lora -> specialized? maybe multimodal editing.

8. tencent/Hy3: text-generation -> language.

9. OpenMOSS-Team/MOSS-Transcribe-Diarize: audio-text-to-text -> multimodal (audio).

10. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive: image-text-to-text -> multimodal.

11. empero-ai/Qwythos-9B-v2-GGUF: image-text-to-text, GGUF -> multimodal+quantization.

12. ATH-MaaS/OvisOCR2: image-text-to-text OCR -> specialized (OCR).

13. InternScience/Agents-A1: text-generation, MoE, image-text-to-text? tags include image-text-to-text, moe. So both language and multimodal. But primary task text-generation -> language.

14. empero-ai/Qwythos-9B-v2: text-generation -> language.

15. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking: text-generation -> language.

16. AngelSlim/Hy3-GGUF: text-generation, GGUF -> quantization.

17. jlnsrk/GLM-5.2-colibri-int4: N/A, int4, MoE -> quantization/specialized.

18. unsloth/Qwen3.6-27B-NVFP4: image-text-to-text, NVFP4 -> multimodal+quantization.

19. froggeric/Qwen-Fixed-Chat-Templates: N/A, chat templates -> specialized (prompt engineering).

20. baidu/Unlimited-OCR: image-text-to-text OCR -> specialized.

21. Cactus-Compute/needle: N/A, function-calling -> specialized (tool use).

22. Alissonerdx/LTX-Best-Face-ID: text-to-video -> multimodal (video).

23. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF: text-generation, GGUF -> language+quantization.

24. Wan-AI/Wan-Dancer-14B: image-to-video -> multimodal.

25. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF: text-generation, GGUF -> language+quantization.

26. prism-ml/Ternary-Bonsai-27B-mlx-2bit: text-generation, MLX -> quantization.

27. prism-ml/Bonsai-27B-mlx-1bit: text-generation, MLX -> quantization.

28. yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF: text-generation, GGUF -> language+quantization.

29. deepreinforce-ai/Ornith-1.0-35B-GGUF: text-generation, GGUF -> language+quantization.

30. Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt: N/A, video-generation LoRA -> specialized (video).

Now categorize:

Language models (LLM, dialogue, instruction): include those primarily text-generation, not multimodal, maybe also MoE language. So list:

- zai-org/GLM-5.2
- tencent/Hy3
- InternScience/Agents-A1 (though also multimodal but primary)
- empero-ai/Qwythos-9B-v2
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF (quantized)
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF
- yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF
- deepreinforce-ai/Ornith-1.0-35B-GGUF
- maybe also prism-ml/Ternary-Bonsai-27B-gguf? but that's quantization; but still language model quantized. Could put under quantization.

Better separate: Language models (non-quantized) and quantization category.

Multimodal & generation: image-text-to-text, audio-text-to-text, image-to-video, text-to-video, etc.

List:

- thinkingmachines/Inkling
- empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
- bottlecapai/ThinkingCap-Qwen3.6-27B
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
- empero-ai/Qwythos-9B-v2-GGUF
- OpenMOSS-Team/MOSS-Transcribe-Diarize
- unsloth/Qwen3.6-27B-NVFP4
- Alissonerdx/LTX-Best-Face-ID
- Wan-AI/Wan-Dancer-14B
- maybe also conradlocke/krea2-identity-edit (image editing) -> multimodal.

Also ATH-MaaS/OvisOCR2 is OCR (specialized). But could be multimodal.

We'll treat OCR as specialized.

Specialized models (code, math, medical, embeddings, OCR, function-calling, chat templates, LoRA for video, etc.):

- ATH-MaaS/OvisOCR2 (OCR)
- conradlocke/krea2-identity-edit (image editing LoRA)
- jlnsrk/GLM-5.2-colibri-int4 (int4 MoE)
- froggeric/Qwen-Fixed-Chat-Templates (chat templates)
- baidu/Unlimited-OCR (OCR)
- Cactus-Compute/needle (function-calling)
- Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt (video LoRA)
- maybe also prism-ml/Ternary-Bonsai-27B-gguf? but that's quantization.

Quantization & finetuning: GGUF, MLX, NVFP4, int4, etc.

List:

- prism-ml/Ternary-Bonsai-27B-gguf
- prism-ml/Bonsai-27B-gguf
- empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF (already multimodal but also quant)
- empero-ai/Qwythos-9B-v2-GGUF
- AngelSlim/Hy3-GGUF
- jlnsrk/GLM-5.2-colibri-int4
- unsloth/Qwen3.6-27B-NVFP4
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF
- prism-ml/Ternary-Bonsai-27B-mlx-2bit
- prism-ml/Bonsai-27B-mlx-1bit
- yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF
- deepreinforce-ai/Ornith-1.0-35B-GGUF

We need to avoid duplication; but okay.

Now produce report.

First section: 今日速览 3-5 sentences summarizing trends: mention rise of multimodal LLMs, GGUF quantization popularity, MoE models like GLM-5.2, agents, uncensored models, etc.

Second section: list categories with bullet points. Provide model name as markdown link.

Third: 生态信号 100-200 Chinese characters.

Fourth: 值得探索 2-3 models with reasons.

Let's craft.

Need to keep links. Use format: [model名](https://huggingface.co/...).

Provide author, likes, downloads.

One sentence description.

Let's compile data for each model.

I'll create a table per category.

First language models (non-quantized). We'll list:

- zai-org/GLM-5.2: author zai-org, likes 4029, downloads 513,061. Description: MoE language model with strong reasoning and multilingual capability.

- tencent/Hy3: author tencent, likes 813, downloads 11,849. Description: Hunyuan-based LLM for Chinese text generation.

- InternScience/Agents-A1: author InternScience, likes 568, downloads 33,400. Description: Qwen3.5 MoE agent model supporting tool use and image-text understanding.

- empero-ai/Qwythos-9B-v2: author empero-ai, likes 129, downloads 6,220. Description: Qwen3.5-based conversational model fine-tuned for instruction following.

- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking: author GnLOLot, likes 131, downloads 4,117. Description: Tiny 1B parameter model distilled from Claude Opus for reasoning tasks.

We could also include some others like "prism-ml/Ternary-Bonsai-27B-gguf" but that's quantized.

Ok.

Multimodal & generation:

List each with link, author, likes, downloads, description.

- thinkingmachines/Inkling: likes 810, downloads 4. Description: Image‑text‑to‑text model enabling conversational understanding of visual inputs.

- empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF: likes 2237, downloads 2,042,670. Description: 9B Qwen3.5 multimodal model quantized to GGUF for efficient deployment on CPU/GPU.

- bottlecapai/ThinkingCap-Qwen3.6-27B: likes 389, downloads 8,238. Description: Qwen3.6‑27B vision‑language model for image‑to‑text generation.

- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive: likes 2787, downloads 2,328,315. Description: Uncensored 35B MoE vision‑language model with aggressive alignment removed.

- empero-ai/Qwythos-9B-v2-GGUF: likes 150, downloads 89,107. Description: GGUF‑quantized version of Qwythos‑9B v2 for fast image‑text inference.

- OpenMOSS-Team/MOSS-Transcribe-Diarize: likes 232, downloads 75,105. Description: Audio‑to‑text model that performs transcription and speaker diarization.

- unsloth/Qwen3.6-27B-NVFP4: likes 216, downloads 1,712,974. Description: Qwen3.6‑27B vision‑language model using NVFP4 quantization for low‑memory inference.

- Alissonerdx/LTX-Best-Face-ID: likes 167, downloads 0. Description: Text‑to‑video LoRA focusing on face‑preserving identity in generated clips.

- Wan-AI/Wan-Dancer-14B: likes 92, downloads 1,884. Description: Image‑to‑video diffusion model generating dance motions from a single frame.

- conradlocke/krea2-identity-edit: likes 322, downloads 0. Description: LoRA for Krea‑2 enabling identity‑preserving image editing via text prompts.

We could also include others like "ATH-MaaS/OvisOCR2" but that's specialized.

Specialized models:

- ATH-MaaS/OvisOCR2: likes 136, downloads 3,678. Description: OCR model based on Qwen3.5 for accurate scene text recognition.

- jlnsrk/GLM-5.2-colibri-int4: likes 119, downloads 2,621. Description: Int4‑quantized GLM‑5.2 MoE model optimized for CPU inference.

- froggeric/Qwen-Fixed-Chat-Templates: likes 924, downloads 0. Description: Community‑maintained Jinja chat templates for Qwen series to ensure stable prompting.

- baidu/Unlimited-OCR: likes 2010, downloads 1,852,722. Description: Baidu’s high‑capacity OCR model supporting unlimited‑length text extraction.

- Cactus-Compute/needle: likes 248, downloads 733. Description: JAX‑based tool‑use model enabling function calling and agentic workflows.

- Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt: likes 77, downloads 0. Description: LoRA for LTX video model facilitating cross‑view novel‑view synthesis.

Quantization & finetuning (GGUF, MLX, NVFP4, etc.):

We'll list distinct ones not already covered in other categories (but we can still list them). Provide description focusing on quantization.

- prism-ml/Ternary-Bonsai-27B-gguf: likes 605, downloads 74,007. Description: 2‑bit ternary quantized LLaMA‑style model in GGUF format for ultra‑low‑size inference.

- prism-ml/Bonsai-27B-gguf: likes 341, downloads 559,267. Description: 1‑bit quantized LLaMA model (GGUF) optimized for llama.cpp.

- AngelSlim/Hy3-GGUF: likes 117, downloads 80,796. Description: GGUF‑quantized version of Tencent Hy3 for efficient CPU/GPU deployment.

- prism-ml/Ternary-Bonsai-27B-mlx-2bit: likes 84, downloads 7,622. Description: 2‑bit ternary model packaged for MLX framework on Apple silicon.

- prism-ml/Bonsai-27B-mlx-1bit: likes 82, downloads 10,760. Description: 1‑bit quantized model for MLX, enabling sub‑GB footprint.

We could also include the GGUF versions already listed under multimodal but it's okay to keep them there; but to avoid duplication we may keep them only under multimodal or language. However the instruction says each model should appear under a category; we need to decide where each belongs. Could place quantized versions under quantization category, and note they also serve multimodal etc. Simpler: assign each model to exactly one category based on primary task. For those with multimodal task, put them under multimodal even if quantized. For pure text-generation models that are quantized, put them under quantization. For MoE language models (text-generation) put them under language.

Thus we need to re-evaluate each model and assign.

Let's list each model with primary task and decide.

1. thinkingmachines/Inkling: image-text-to-text => multimodal

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*