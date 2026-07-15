# Hugging Face 热门模型日报 2026-07-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-15 01:26 UTC

---

We need to generate a structured report. Must include sections: 今日速览 (3-5 sentences), 热门模型 (categories with entries). Need to parse the list of 30 models. Identify categories: language models (LLM, dialogue, instruction-tuned), multimodal & generation (image, video, audio, text-to-X), specialized models (code, math, medical, embeddings), fine-tuning & quantization (community fine-tune, GGUF, AWQ). Provide each model with name (HF link), author, likes, downloads, one-sentence description: what it is and why trending.

We need to decide classification for each model based on tags and description. Let's list each model with tags and decide.

I'll go through each:

1. empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
   tags: gguf, llama.cpp, quantized, qwen3.5, reasoning
   task: image-text-to-text (actually that is multimodal? but tags include reasoning, ggf). Probably a quantized GGUF version of a Qwen-based model with reasoning; could be language model (LLM) quantized. So classification: 📦 微调与量化 (GGUF quantized). Could also be language model but quantized.

2. zai-org/GLM-5.2
   tags: transformers, safetensors, glm_moe_dsa, text-generation, conversational
   task: text-generation
   This is a language model (GLM family). So 🧠 语言模型.

3. tencent/Hy3
   tags: transformers, safetensors, hy_v3, text-generation, hunyuan
   task: text-generation
   Language model.

4. conradlocke/krea2-identity-edit
   tags: image-editing, lora, comfyui, krea-2, base_model:krea/Krea-2-Raw
   task: N/A
   This is an image editing LoRA. So 🎨 多模态与生成 (image editing).

5. bottlecapai/ThinkingCap-Qwen3.6-27B
   tags: transformers, safetensors, qwen3_5, image-text-to-text, qwen3_6
   task: image-text-to-text
   Multimodal (image+text to text). So 🎨.

6. OpenMOSS-Team/MOSS-Transcribe-Diarize
   tags: transformers, safetensors, moss_transcribe_diarize, text-generation, moss
   task: audio-text-to-text
   Audio processing (transcribe+diarize). Could be specialized (audio) or multimodal. Probably 🎨 (audio). But could be specialized (speech). We'll put in 🎨 多模态与生成 (audio).

7. GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF
   tags: gguf, llama.cpp, quantized, minicpm5, thinking
   task: text-generation
   Quantized GGUF version. So 📦.

8. InternScience/Agents-A1
   tags: transformers, safetensors, qwen3_5_moe, image-text-to-text, moe
   task: text-generation
   Has image-text-to-text tag, so multimodal. Also MOE. Could be 🎨.

9. froggeric/Qwen-Fixed-Chat-Templates
   tags: mlx, jinja, chat-template, qwen, qwen3.5
   task: N/A
   This is chat templates for Qwen, likely a utility for fine-tuning. Could be 📦 (微调与量化) or maybe language model utility. I'd put in 📦.

10. baidu/Unlimited-OCR
    tags: transformers, safetensors, unlimited-ocr, feature-extraction, baidu
    task: image-text-to-text
    OCR model (image to text). Specialized (OCR). Could be 🔧 专用模型 (OCR). But also multimodal. I'd put in 🔧.

11. prism-ml/Ternary-Bonsai-27B-gguf
    tags: llama.cpp, gguf, conversational, ternary, 2-bit
    task: text-generation
    Quantized ternary model. So 📦.

12. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive
    tags: gguf, uncensored, qwen3.6, moe, vision
    task: image-text-to-text
    Multimodal (vision+text) quantized GGUF uncensored. Could be 🎨 (multimodal) or 📦 (quantized). Since it's GGUF and vision, maybe both. I'll put in 🎨 (multimodal with quantized). But we need each model only once. Choose primary: it's a vision-language model, so 🎨.

13. open-gigaai/Giga-World-1
    tags: diffusers, safetensors, license:apache-2.0, region:us
    task: N/A
    Likely a diffusion model (world generation). So 🎨 (image/video generation). Not sure but diffusers suggests image generation. So 🎨.

14. unsloth/DeepSeek-V4-Flash-GGUF
    tags: gguf, deepseek_v4, unsloth, deepseek, arxiv:2606.19348
    task: N/A
    Quantized GGUF version of DeepSeek V4 flash. So 📦.

15. empero-ai/Qwythos-9B-v2-GGUF
    tags: gguf, llama.cpp, quantized, qwythos, qwen3.5
    task: image-text-to-text
    Quantized GGUF version of Qwythos. Could be 📦 or 🎨. Since it's image-text-to-text, it's multimodal but quantized. Choose 📦 (quantization) as primary.

16. empero-ai/Qwythos-9B-v2
    tags: transformers, safetensors, qwen3_5, image-text-to-text, qwythos
    task: text-generation
    Actually task text-generation but tags include image-text-to-text. Might be a text model? We'll treat as language model (LLM). So 🧠.

17. migtissera/Tess-4-27B
    tags: transformers, safetensors, qwen3_5, image-text-to-text, tess
    task: image-text-to-text
    Multimodal. So 🎨.

18. robbyant/lingbot-video-moe-30b-a3b
    tags: diffusers, safetensors, license:apache-2.0, diffusers:LingBotVideoPipeline, region:us
    task: N/A
    Video generation (diffusers). So 🎨 (video).

19. nvidia/Nemotron-Labs-Audex-30B-A3B
    tags: transformers, safetensors, nemotron_labs_audex, nvidia, nemotron-labs-audex
    task: text-generation
    Language model (maybe audio?). Tags no audio. So 🧠.

20. unsloth/Qwen3.6-27B-NVFP4
    tags: transformers, safetensors, qwen3_5, image-text-to-text, unsloth
    task: image-text-to-text
    This is a quantized NVFP4 version? Actually tag unsloth, but not gguf. Might be a quantized version. Could be 📦 (quantization) but also multimodal. Choose 📦.

21. yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF
    tags: gguf, gemma4, coding, agentic, terminal
    task: text-generation
    Quantized GGUF version of Gemma with coding focus. So 📦 (quantized) and maybe 🔧 (code). But primary quantized.

22. deepreinforce-ai/Ornith-1.0-35B-GGUF
    tags: transformers, gguf, text-generation, license:mit, endpoints_compatible
    task: text-generation
    Quantized GGUF. So 📦.

23. jlnsrk/GLM-5.2-colibri-int4
    tags: glm_moe_dsa, int4, cpu, moe, expert-streaming
    task: N/A
    Quantized int4 version of GLM-5.2. So 📦.

24. robbyant/lingbot-world-v2-14b-causal-fast
    tags: diffusers, safetensors, i2v, World Model, image-to-video
    task: image-to-video
    Video generation. So 🎨.

25. Alissonerdx/LTX-Best-Face-ID
    tags: ltx-video, identity-preservation, ipt2v, reference-to-video, lora
    task: text-to-video
    Video generation (face ID). So 🎨.

26. prism-ml/Bonsai-27B-gguf
    tags: llama.cpp, gguf, conversational, 1-bit, llama-cpp
    task: text-generation
    Quantized 1-bit GGUF. So 📦.

27. unsloth/Qwen3.6-27B-MTP-GGUF
    tags: transformers, gguf, unsloth, qwen, qwen3_5
    task: image-text-to-text
    Quantized GGUF multimodal. So 📦.

28. mgwr/M87
    tags: diffusers, text-to-image, lora, template:diffusion-lora, base_model:krea/Krea-2-Turbo
    task: text-to-image
    LoRA for text-to-image. So 🎨 (image generation LoRA).

29. nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4
    tags: transformers, safetensors, nemotron_h_puzzle, text-generation, nvidia
    task: text-generation
    Language model (maybe puzzle). So 🧠.

30. nineninesix/gepard-1.0
    tags: transformers, safetensors, qwen3_5_text, text-generation, text-to-speech
    task: text-to-speech
    TTS model. Could be 🎨 (audio) or 🔧 (specialized). We'll put in 🎨 (audio generation).

Now we need to produce categories: 🧠 语言模型, 🎨 多模态与生成, 🔧 专用模型, 📦 微调与量化.

We need to allocate each model to one category. Let's decide:

Language models (LLM, dialogue, instruction-tuned):
- zai-org/GLM-5.2
- tencent/Hy3
- nvidia/Nemotron-Labs-Audex-30B-A3B
- empero-ai/Qwythos-9B-v2 (though has image-text-to-text tag but task text-generation)
- nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4
- maybe unsloth/Qwen3.6-27B-NVFP4? but it's image-text-to-text, so not.
- unsloth/Qwen3.6-27B-MTP-GGUF is multimodal.
- unsloth/Qwen3.6-27B-NVFP4 is multimodal.
- unsloth/DeepSeek-V4-Flash-GGUF is quantized but could be language model; but it's quantized, so put in 📦.
- deepreinforce-ai/Ornith-1.0-35B-GGUF is quantized -> 📦.
- prism-ml/Ternary-Bonsai-27B-gguf quantized -> 📦.
- prism-ml/Bonsai-27B-gguf quantized -> 📦.
- unsloth/Qwen3.6-27B-NVFP4 maybe quantized but not gguf; still quantization, put in 📦.
- unsloth/Qwen3.6-27B-MTP-GGUF quantized -> 📦.
- unsloth/DeepSeek-V4-Flash-GGUF quantized -> 📦.
- empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF quantized -> 📦.
- empero-ai/Qwythos-9B-v2-GGUF quantized -> 📦.
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF quantized -> 📦.
- yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF quantized -> 📦.
- deepreinforce-ai/Ornith-1.0-35B-GGUF quantized -> 📦.
- jlnsrk/GLM-5.2-colibri-int4 quantized -> 📦.
- unsloth/Qwen3.6-27B-NVFP4 (non-gguf but quantized) -> 📦.
- unsloth/Qwen3.6-27B-MTP-GGUF -> 📦.
- unsloth/DeepSeek-V4-Flash-GGUF -> 📦.
- empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF -> 📦.
- empero-ai/Qwythos-9B-v2-GGUF -> 📦.
- GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF -> 📦.
- yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF -> 📦.
- deepreinforce-ai/Ornith-1.0-35B-GGUF -> 📦.
- jlnsrk/GLM-5.2-colibri-int4 -> 📦.
- unsloth/Qwen3.6-27B-NVFP4 -> 📦.
- unsloth/Qwen3.6-27B-MTP-GGUF -> 📦.
- unsloth/DeepSeek-V4-Flash-GGUF -> 📦.
- prism-ml/Ternary-Bonsai-27B-gguf -> 📦.
- prism-ml/Bonsai-27B-gguf -> 📦.
- deepreinforce-ai/Ornith-1.0-35B-GGUF -> 📦 (already counted).
- Also unsloth/Qwen3.6-27B-NVFP4 is not gguf but still quantization.

Now multimodal & generation:
- conradlocke/krea2-identity-edit (image editing)
- bottlecapai/ThinkingCap-Qwen3.6-27B (image-text-to-text)
- OpenMOSS-Team/MOSS-Transcribe-Diarize (audio-text-to-text)
- InternScience/Agents-A1 (image-text-to-text)
- HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (vision+text)
- open-gigaai/Giga-World-1 (diffusion world)
- migtissera/Tess-4-27B (image-text-to-text)
- robbyant/lingbot-video-moe-30b-a3b (video)
- Alissonerdx/LTX-Best-Face-ID (text-to-video)
- robbyant/lingbot-world-v2-14b-causal-fast (image-to-video)
- mgwr/M87 (text-to-image LoRA)
- nineninesix/gepard-1.0 (text-to-speech)
- baidu/Unlimited-OCR (OCR) maybe specialized but could be multimodal; we might put in 🔧.

Specialized models (code, math, medical, embeddings):
- baidu/Unlimited-OCR (OCR) -> 🔧
- maybe none else. Could also consider unsloth/Qwen3.6-27B-NVFP4? no.
- yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF has coding tag -> could be specialized code model. It's quantized but also coding. Could put in 🔧 (code). But we already have many quantized. Let's assign it to 🔧 (code) as specialized.

Also maybe unsloth/Qwen3.6-27B-NVFP4? no coding tag.

Thus specialized: baidu/Unlimited-OCR (OCR), yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF (coding agentic). Possibly also unsloth/Qwen3.6-27B-NVFP4? not.

Now we need to list each model under its category with required info: model name (with HF link), author, likes, downloads, one-sentence description: what it is, why trending.

We must keep all links.

Let's compile data from list.

I'll extract each entry:

1. empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF
   author: empero-ai
   likes: 2,156
   downloads: 2,006,265
   tags: ggu

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*