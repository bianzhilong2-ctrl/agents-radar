# Hugging Face 热门模型日报 2026-06-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-14 02:43 UTC

---

We need to produce a structured report: Today's glance, hot models categorized, each with model name (with HF link), author, likes, downloads, one-sentence description. Then ecosystem signals 100-200 Chinese characters. Then worth exploring 2-3 models with reasons.

We have list of 30 models sorted by weekly likes. Need to categorize into language models, multimodal/generation, specialized models (code, math, medical, embeddings), and fine-tuning/quantization (community finetune, GGUF, AWQ). Many are GGUF versions etc.

We need to extract info from the list.

Let's parse each:

1. google/diffusiongemma-26B-A4B-it (author google, likes 711, downloads 92,080) task image-text-to-text. Tags: transformers, safetensors, diffusion_gemma, image-text-to-text, conversational. This is multimodal (image-text-to-text). Could be in 🎨 多模态与生成.

2. moonshotai/Kimi-K2.7-Code (author moonshotai, likes 520, downloads 1,689) task image-text-to-text (but name suggests Code). tags: transformers, safetensors, kimi_k25, image-feature-extraction, compressed-tensors. Actually appears as code? We'll treat as language model? It is image-text-to-text but name indicates code; maybe specialized code.

3. nvidia/LocateAnything-3B (author nvidia, likes 1,962, downloads 69,443) task image-text-to-text. Multimodal.

4. MiniMaxAI/MiniMax-M3 (author MiniMaxAI, likes 419, downloads 1,031) task image-text-to-text. Multimodal.

5. CohereLabs/North-Mini-Code-1.0 (author CohereLabs, likes 356, downloads 6,533) task text-generation. Likely language model.

6. google/gemma-4-12B-it (author google, likes 995, downloads 1,005,883) task any-to-any. Multimodal (any-to-any). Likely language + vision.

7. bosonai/higgs-audio-v3-tts-4b (author bosonai, likes 414, downloads 32,162) task text-to-speech. Multimodal audio.

8. unsloth/diffusiongemma-26B-A4B-it-GGUF (author unsloth, likes 248, downloads 42,885) task image-text-to-text. GGUF quantized version of model 1. So belongs to 📦 微调与量化.

9. OBLITERATUS/Gemma-4-12B-OBLITERATED (author OBLITERATUS, likes 279, downloads 50,289) task text-generation. Tags: transformers, safetensors, gguf, gemma4_unified, image-text-to-text. Might be a finetuned/unfiltered version. Could be language model.

10. HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (author HauhauCS, likes 1,763, downloads 2,411,202) task image-text-to-text. Tags: gguf, uncensored, qwen3.6, moe, vision. Likely multimodal with GGUF.

11. ideogram-ai/ideogram-4-fp8 (author ideogram-ai, likes 517, downloads 6,535) task text-to-image. Multimodal.

12. nex-agi/Nex-N2-Pro (author nex-agi, likes 238, downloads 3,092) task text-generation. Tags: transformers, safetensors, qwen3_5_moe, image-text-to-text, text-generation. Likely language.

13. nvidia/nemotron-3.5-asr-streaming-0.6b (author nvidia, likes 402, downloads 3,975) task automatic-speech-recognition. Specialized (audio).

14. nex-agi/Nex-N2-mini (author nex-agi, likes 194, downloads 3,760) task text-generation. Language.

15. Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF (author Jackrong, likes 158, downloads 11,291) task image-text-to-text. Tags: transformers, gguf, llama.cpp, image-text-to-text, vision. Likely GGUF quant.

16. zai-org/SCAIL-2 (author zai-org, likes 154, downloads 0) task image-to-video. Multimodal video.

17. unsloth/gemma-4-12b-it-GGUF (author unsloth, likes 580, downloads 872,895) task image-text-to-text. GGUF version.

18. prefeitura-rio/Rio-3.5-Open-397B (author prefeitura-rio, likes 134, downloads 5,943) task image-text-to-text. Multimodal.

19. google/gemma-4-12B (author google, likes 535, downloads 207,338) task any-to-any. Multimodal.

20. ideogram-ai/ideogram-4-nf4 (author ideogram-ai, likes 334, downloads 3,276) task text-to-image. Multimodal.

21. unsloth/gemma-4-12B-it-qat-GGUF (author unsloth, likes 214, downloads 227,830) task any-to-any. GGUF quant.

22. XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash (author XiaomiMiMo, likes 106, downloads 3,590) task text-generation. Language.

23. huihui-ai/Huihui-gemma-4-12B-it-abliterated (author huihui-ai, likes 152, downloads 8,270) task any-to-any. Language? maybe language model.

24. deepseek-ai/DeepSeek-V4-Pro (author deepseek-ai, likes 4,813, downloads 3,250,404) task text-generation. Language model, big.

25. RazzzHF/Realism_Engine_Ideogram_4 (author RazzzHF, likes 90, downloads 0) task N/A. Not sure.

26. unsloth/gemma-4-26B-A4B-it-qat-GGUF (author unsloth, likes 151, downloads 260,757) task image-text-to-text. GGUF.

27. Jiunsong/supergemma4-26b-uncensored-gguf-v2 (author Jiunsong, likes 820, downloads 98,892) task text-generation. GGUF uncensored.

28. ByteDance/Bernini-R (author ByteDance, likes 235, downloads 426) task image-text-to-video. Multimodal video.

29. Comfy-Org/Ideogram-4 (author Comfy-Org, likes 146, downloads 0) task N/A.

30. google/magenta-realtime-2 (author google, likes 187, downloads 7,331) task text-to-audio. Multimodal audio.

Now categorize:

🧠 语言模型 (LLM, 对话模型, 指令微调): includes models primarily for text-generation, conversational, instruction tuned. Likely: CohereLabs/North-Mini-Code-1.0, nex-agi/Nex-N2-Pro, nex-agi/Nex-N2-mini, XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash, huihui-ai/Huihui-gemma-4-12B-it-abliterated, deepseek-ai/DeepSeek-V4-Pro, Jiunsong/supergemma4-26b-uncensored-gguf-v2, OBLITERATUS/Gemma-4-12B-OBLITERATED (maybe), google/gemma-4-12B-it (though any-to-any but still language capable). But we need to keep list not too long; choose top ones.

🎨 多模态与生成 (图像、视频、音频、文本到X): includes diffusiongemma, LocateAnything, MiniMax-M3, bosonai/higgs-audio..., ideogram-4-fp8, ideogram-4-nf4, google/gemma-4-12B-it, google/gemma-4-12B, unsloth/gemma-4-12b-it-GGUF, HauhauCS/Qwen3.6-35B-A3B..., zai-org/SCAIL-2, prefeitura-rio/Rio-3.5-Open-397B, ByteDance/Bernini-R, google/magenta-realtime-2, etc.

🔧 专用模型 (代码、数学、医疗、嵌入): includes moonshotai/Kimi-K2.7-Code, nvidia/nemotron-3.5-asr-streaming-0.6b (ASR), maybe others like code-specific. Also maybe not many.

📦 微调与量化 (社区微调、GGUF、AWQ): includes unsloth GGUF versions, Jiunsong supergemma, Jackrong Qwopus, unsloth gemma-4-12B-it-qat-GGUF, unsloth gemma-4-26B-A4B-it-qat-GGUF, etc.

We need to list each model with: model name (with HF link), author, likes, downloads, one-sentence description.

We'll need to pick maybe top 5-7 per category to keep concise.

Let's decide:

🧠 语言模型: choose top by likes/downloads: deepseek-ai/DeepSeek-V4-Pro (4,813 likes, 3.25M downloads), CohereLabs/North-Mini-Code-1.0 (356 likes), nex-agi/Nex-N2-Pro (238 likes), nex-agi/Nex-N2-mini (194 likes), XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash (106 likes), huihui-ai/Huihui-gemma-4-12B-it-abliterated (152 likes), Jiunsong/supergemma4-26b-uncensored-gguf-v2 (820 likes), OBLITERATUS/Gemma-4-12B-OBLITERATED (279 likes). Also maybe google/gemma-4-12B-it (995 likes) but it's any-to-any; could be language too. But we can include.

We'll pick maybe 6.

🎨 多模态与生成: choose top by likes: HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive (1,763 likes), nvidia/LocateAnything-3B (1,962 likes actually highest), google/diffusiongemma-26B-A4B-it (711), MiniMaxAI/MiniMax-M3 (419), bosonai/higgs-audio-v3-tts-4b (414), ideogram-ai/ideogram-4-fp8 (517), ideogram-ai/ideogram-4-nf4 (334), google/gemma-4-12B-it (995), google/gemma-4-12B (535), unsloth/gemma-4-12b-it-GGUF (580), zai-org/SCAIL-2 (154), ByteDance/Bernini-R (235), google/magenta-realtime-2 (187). We'll pick maybe 8.

🔧 专用模型: moonshotai/Kimi-K2.7-Code (520 likes), nvidia/nemotron-3.5-asr-streaming-0.6b (402 likes). Possibly also code-specific like maybe others but fine.

📦 微调与量化: unsloth/gemma-4-12b-it-GGUF (580 likes), unsloth/diffusiongemma-26B-A4B-it-GGUF (248 likes), unsloth/gemma-4-12B-it-qat-GGUF (214 likes), unsloth/gemma-4-26B-A4B-it-qat-GGUF (151 likes), Jiunsong/supergemma4-26b-uncensored-gguf-v2 (820 likes), Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF (158 likes). Also maybe OBLITERATUS/Gemma-4-12B-OBLITERATED (279 likes) but it's not GGUF? It has gguf tag. Could be included.

We'll pick maybe 6.

Now generate report: Today's glance 3-5 sentences summarizing trends: DeepSeek-V4-Pro leading, many Gemma variants, GGUF quantization rising, multimodal image-text models strong, uncensored models gaining traction.

Then sections.

Need to keep Chinese, concise, professional, preserve links.

We'll format like:

**🧠 语言模型**
- [model name](link) | 作者: X | 👍 Y | 📥 Z | 一句话...

We'll need to include likes and downloads numbers.

Let's craft.

We'll compute likes and downloads from list.

Let's extract numbers:

DeepSeek-V4-Pro: likes 4,813, downloads 3,250,404

CohereLabs/North-Mini-Code-1.0: likes 356, downloads 6,533

nex-agi/Nex-N2-Pro: likes 238, downloads 3,092

nex-agi/Nex-N2-mini: likes 194, downloads 3,760

XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash: likes 106, downloads 3,590

huihui-ai/Huihui-gemma-4-12B-it-abliterated: likes 152, downloads 8,270

Jiunsong/supergemma4-26b-uncensored-gguf-v2: likes 820, downloads 98,892

OBLITERATUS/Gemma-4-12B-OBLITERATED: likes 279, downloads 50,289

Google/gemma-4-12B-it: likes 995, downloads 1,005,883

We'll choose maybe top 5.

Now multimodal:

HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive: likes 1,763, downloads 2,411,202

nvidia/LocateAnything-3B: likes 1,962, downloads 69,443

google/diffusiongemma-26B-A4B-it: likes 711, downloads 92,080

MiniMaxAI/MiniMax-M3: likes 419, downloads 1,031

bosonai/higgs-audio-v3-tts-4b: likes 414, downloads 32,162

ideogram-ai/ideogram-4-fp8: likes 517, downloads 6,535

ideogram-ai/ideogram-4-nf4: likes 334, downloads 3,276

google/gemma-4-12B-it: already used; maybe skip duplicate.

google/gemma-4-12B: likes 535, downloads 207,338

unsloth/gemma-4-12b-it-GGUF: likes 580, downloads 872,895

zai-org/SCAIL-2: likes 154, downloads 0

ByteDance/Bernini-R: likes 235, downloads 426

google/magenta-realtime-2: likes 187, downloads 7,331

We'll pick maybe 7.

Specialized:

moonshotai/Kimi-K2.7-Code: likes 520, downloads 1,689

nvidia/nemotron-3.5-asr-streaming-0.6b: likes 402, downloads 3,975

Maybe also code-specific? Not many.

Quantization/fine-tune:

unsloth/gemma-4-12b-it-GGUF: likes 580, downloads 872,895

unsloth/diffusiongemma-26B-A4B-it-GGUF: likes 248, downloads 42,885

unsloth/gemma-4-12B-it-qat-GGUF: likes 214, downloads 227,830

unsloth/gemma-4

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*