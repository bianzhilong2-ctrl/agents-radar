# Hugging Face Trending Models Digest 2026-09-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-06 01:59 UTC

---

We need to generate a digest. Use data provided.

First, identify highlights: notable releases, trends. Qwen models high likes. DeepSeek-V4-Flash-Vision-Exp first with many likes 680 but downloads 184k. Qwen3.8-27B has 14k likes, 6M downloads: huge. Qwen3.8-Flash-Next also high likes 4.9k. So Qwen family trending. Also unsloth quantized GGUF models huge downloads (10M). So highlight: Qwen family, GGUF quantization, multimodal image-text-to-text models.

Trending Models: categorize.

We need list each model with name link, author, likes, downloads, one sentence.

We must categorize into four categories.

We have 30 models. We'll assign each to appropriate category.

Language Models (LLMs, chat models, instruction-tuned): includes text-generation pipelines like Qwen3.8-27B, Qwen3.8-Flash-Next, XHToken/Spark-X2.5-4B, google/timesfm (but that's time-series), maybe not. Also zai-org/GLM-5.3-Flash, zai-org/GLM-5.3, IFM/K2-Horizon-MoVA-36B-A4B, tencent/Hy4-preview, OBLITERATUS/Qwen3.8-27B-OBLITERATED, JonathanColetti/Qwen3.8-27B-Uncensored-GGUF, facebook/mms-300m (but pipeline N/A), openai-community/gpt2, google-bert/bert-base-uncased (fill-mask), distilbert/distilbert-base-uncased.

But classification: language models: any text-generation or fill-mask etc. We'll pick top ones.

Multimodal & Generation (image, video, audio, text-to-X): includes image-text-to-text, image-to-video, text-to-video, text-to-speech, etc. Many.

Specialized Models (code, math, medical, embeddings): sentence-transformers/all-MiniLM-L6-v2 (embedding), openai/clip-vit-base-patch32 (zero-shot image classification), maybe timesfm (time-series) as specialized.

Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ): unsloth quantized GGUF models, DavidAU..., HauhauCS..., Jackrong..., orcarouter..., etc. Also Qwen3.8-27B-GSQ-RCO-GGUF (ISTA-DASLab), unsloth/Qwen3.8-27B-GGUF, unsloth/Qwen3.8-Flash-Next-GGUF, etc.

We'll need to list each model under a category, but likely many duplicates across categories. We can assign each model to one primary category.

Let's categorize:

Language Models:
- Qwen/Qwen3.8-27B
- Qwen/Qwen3.8-Flash-Next
- XHToken/Spark-X2.5-4B
- zai-org/GLM-5.3-Flash (though multimodal but pipeline image-text-to-text, but could be language? but we put multimodal)
- zai-org/GLM-5.3 (text-generation)
- IFM/K2-Horizon-MoVA-36B-A4B (text-generation)
- tencent/Hy4-preview (text-generation)
- OBLITERATUS/Qwen3.8-27B-OBLITERATED (text-generation)
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF (text-generation) though also quantized.
- openai-community/gpt2 (text-generation)
- google-bert/bert-base-uncased (fill-mask)
- distilbert/distilbert-base-uncased (fill-mask)
- facebook/mms-300m (N/A but audio? specialized maybe)
We might keep some in multimodal.

Multimodal & Generation:
- deepseek-ai/DeepSeek-V4-Flash-Vision-Exp (image-text-to-text)
- Qwen/Qwen3.8-27B (also language, but we already used) maybe keep as language.
- Qwen/Qwen3.8-Flash-Next (multimodal)
- Lightricks/LTX-2.5 (image-to-video)
- zai-org/GLM-5.3-Flash (image-text-to-text)
- MiniMaxAI/MiniMax-H3 (image-text-to-video)
- OpenVDN/vdn-minimax-h3 (text-to-video)
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF (image-text-to-text)
- Jackrong/Qwopus3.8-27B-Flash-GGUF (image-text-to-text)
- orcarouter/Qwen3.8-27B-Uncensored-GGUF (image-text-to-text)
- orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF (image-text-to-text)
- orcarouter/GLM-5.3-Flash-Uncensored-FP8 (text-generation but uncensored)
- BreezeBlue/Breeze-TTS-2 (text-to-speech)
- etc.

Specialized Models:
- sentence-transformers/all-MiniLM-L6-v2 (embeddings)
- google/timesfm-3.0-pytorch (time-series forecasting)
- openai/clip-vit-base-patch32 (zero-shot image classification)
- facebook/mms-300m (audio pretraining) maybe specialized.

Fine-tunes & Quantizations:
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- unsloth/Qwen3.8-27B-GGUF
- unsloth/Qwen3.8-Flash-Next-GGUF
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF (also language but quantized)
- Jackrong/Qwopus3.8-27B-Flash-GGUF
- orcarouter/Qwen3.8-27B-Uncensored-GGUF
- orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF
- orcarouter/GLM-5.3-Flash-Uncensored-FP8
- OBLITERATUS/Qwen3.8-27B-OBLITERATED (maybe fine-tune)
- etc.

We need to present each with model name (with HF link), author, likes, downloads, one sentence.

We must preserve all HF links.

We'll need to format nicely.

Given many models, we might need to limit listing? The instruction says "Organized by category, each with: Model name (with HF link) Author, likes, downloads One sentence: what it is, why it's trending". It implies list all models under categories. Could be long but okay.

We'll produce sections.

Let's compile data for each model from list.

I'll extract each entry:

1. deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
   Author: deepseek-ai
   Likes: 680
   Downloads: 184,542
   Pipeline: image-text-to-text

2. Qwen/Qwen3.8-27B
   Author: Qwen
   Likes: 14,038
   Downloads: 6,024,467
   Pipeline: image-text-to-text

3. Qwen/Qwen3.8-Flash-Next
   Author: Qwen
   Likes: 4,914
   Downloads: 401,327
   Pipeline: image-text-to-text

4. XHToken/Spark-X2.5-4B
   Author: XHToken
   Likes: 541
   Downloads: 4,755
   Pipeline: text-generation

5. google/timesfm-3.0-pytorch
   Author: google
   Likes: 457
   Downloads: 123,025
   Pipeline: time-series-forecasting

6. zai-org/GLM-5.3-Flash
   Author: zai-org
   Likes: 2,079
   Downloads: 727,610
   Pipeline: image-text-to-text

7. Lightricks/LTX-2.5
   Author: Lightricks
   Likes: 2,891
   Downloads: 1,484,329
   Pipeline: image-to-video

8. zai-org/GLM-5.3
   Author: zai-org
   Likes: 1,719
   Downloads: 370,417
   Pipeline: text-generation

9. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
   Author: ISTA-DASLab
   Likes: 410
   Downloads: 297,493
   Pipeline: image-text-to-text
   Tags: gguf, gsq, rco, quantization, mixed-precision

10. unsloth/Qwen3.8-27B-GGUF
    Author: unsloth
    Likes: 3,545
    Downloads: 10,157,510
    Pipeline: N/A
    Tags: gguf, qwen3_5, unsloth, base_model:Qwen/Qwen3.8-27B, base_model:quantized:Qwen/Qwen3.8-27B

11. sentence-transformers/all-MiniLM-L6-v2
    Author: sentence-transformers
    Likes: 5,559
    Downloads: 255,006,933
    Pipeline: sentence-similarity

12. openai-community/gpt2
    Author: openai-community
    Likes: 3,701
    Downloads: 14,739,982
    Pipeline: text-generation

13. BreezeBlue/Breeze-TTS-2
    Author: BreezeBlue
    Likes: 448
    Downloads: 5,962
    Pipeline: text-to-speech

14. MiniMaxAI/MiniMax-H3
    Author: MiniMaxAI
    Likes: 4,934
    Downloads: 5,057,414
    Pipeline: image-text-to-video

15. google-bert/bert-base-uncased
    Author: google-bert
    Likes: 2,986
    Downloads: 56,175,564
    Pipeline: fill-mask

16. facebook/mms-300m
    Author: facebook
    Likes: 263
    Downloads: 12,961
    Pipeline: N/A

17. unsloth/Qwen3.8-Flash-Next-GGUF
    Author: unsloth
    Likes: 798
    Downloads: 780,823
    Pipeline: image-text-to-text

18. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
    Author: DavidAU
    Likes: 222
    Downloads: 174,405
    Pipeline: image-text-to-text

19. distilbert/distilbert-base-uncased
    Author: distilbert
    Likes: 1,156
    Downloads: 7,101,423
    Pipeline: fill-mask

20. openai/clip-vit-base-patch32
    Author: openai
    Likes: 1,210
    Downloads: 20,755,211
    Pipeline: zero-shot-image-classification

21. OpenVDN/vdn-minimax-h3
    Author: OpenVDN
    Likes: 187
    Downloads: 0
    Pipeline: text-to-video

22. HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
    Author: HauhauCS
    Likes: 964
    Downloads: 1,527,627
    Pipeline: image-text-to-text

23. IFM/K2-Horizon-MoVA-36B-A4B
    Author: IFM
    Likes: 174
    Downloads: 1,333
    Pipeline: text-generation

24. tencent/Hy4-preview
    Author: tencent
    Likes: 443
    Downloads: 6,195
    Pipeline: text-generation

25. OBLITERATUS/Qwen3.8-27B-OBLITERATED
    Author: OBLITERATUS
    Likes: 1,096
    Downloads: 968,936
    Pipeline: text-generation

26. JonathanColetti/Qwen3.8-27B-Uncensored-GGUF
    Author: JonathanColetti
    Likes: 987
    Downloads: 2,453,361
    Pipeline: text-generation

27. Jackrong/Qwopus3.8-27B-Flash-GGUF
    Author: Jackrong
    Likes: 115
    Downloads: 10,680
    Pipeline: image-text-to-text

28. orcarouter/Qwen3.8-27B-Uncensored-GGUF
    Author: orcarouter
    Likes: 728
    Downloads: 283,774
    Pipeline: image-text-to-text

29. orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF
    Author: orcarouter
    Likes: 239
    Downloads: 106,845
    Pipeline: image-text-to-text

30. orcarouter/GLM-5.3-Flash-Uncensored-FP8
    Author: orcarouter
    Likes: 186
    Downloads: 8,338
    Pipeline: text-generation

Now categorize.

Language Models (LLMs, chat models, instruction-tuned): We'll include models primarily for text generation or fill-mask, not primarily multimodal.

List:
- Qwen/Qwen3.8-27B (though also multimodal, but we can still put language)
- Qwen/Qwen3.8-Flash-Next (maybe multimodal but still language)
- XHToken/Spark-X2.5-4B
- zai-org/GLM-5.3
- IFM/K2-Horizon-MoVA-36B-A4B
- tencent/Hy4-preview
- OBLITERATUS/Qwen3.8-27B-OBLITERATED
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF (though quantized)
- openai-community/gpt2
- google-bert/bert-base-uncased
- distilbert/distilbert-base-uncased
- facebook/mms-300m (maybe specialized audio, but we can put language? It's audio representation; but we can put specialized)
We'll keep facebook/mms-300m under Specialized maybe.

Multimodal & Generation:
- deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
- Qwen/Qwen3.8-27B (maybe duplicate but we can keep only one)
Better to avoid duplication: assign each model to one category. Let's decide: Qwen/Qwen3.8-27B is primarily language but also image-text-to-text; but given its high likes and downloads, we could put under Language Models as highlight. For multimodal we can still include Qwen/Qwen3.8-Flash-Next (image-text-to-text), Lightricks/LTX-2.5, zai-org/GLM-5.3-Flash, MiniMaxAI/MiniMax-H3, OpenVDN/vdn-minimax-h3, HauhauCS..., Jackrong..., orcarouter..., BreezeBlue..., etc.

Specialized Models:
- sentence-transformers/all-MiniLM-L6-v2
- google/timesfm-3.0-pytorch
- openai/clip-vit-base-patch32
- facebook/mms-300m

Fine-tunes & Quantizations:
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- unsloth/Qwen3.8-27B-GGUF
- unsloth/Qwen3.8-Flash-Next-GGUF
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
- HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF
- JonathanColetti/Qwen3.8-27B-Uncensored-GGUF (though also language but we can put here)
- Jackrong/Qwopus3.8-27B-Flash-G

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*