# Hugging Face 热门模型日报 2026-08-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-14 01:07 UTC

---

We need to produce a report in Chinese, concise, structured as requested. Include 1) Today's overview: 3-5 sentences summarizing top releases and trends. 2) Hot models: classified into categories, each model with HF link and author, likes, downloads, one-sentence description. Use emojis for categories as indicated. 3) Ecosystem signals: 100-200 Chinese characters analyzing trends. 4) Worth exploring: 2-3 models with brief reason.

Need to preserve all HF links as given. Ensure include links. Use the data from the list. Provide a clear structure. Keep within constraints: overview 3-5 sentences, ecosystem signals 100-200 characters (so about 100-200 Chinese characters). Provide classification headings with emojis. Provide each model with bullet maybe.

We must include all models? The instruction says "按以下分类整理，每个模型包含：模型名（附 HF 链接） 作者、点赞数、下载数 一句话说明". Probably need to list all 30 models under appropriate categories. Could be long but okay.

We need to map each model to category. Let's assign:

🧠 语言模型: models that are text-generation, conversational, instruction fine-tuned, etc. Those include: #3 Qwen/Qwen3.8-2.4T-A95B, #5 deepseek-ai/DeepSeek-V4-Flash-0731, #14 deepseek-ai/DeepSeek-V4-Pro-0813, #17 nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4, #29 nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, #30 inclusionAI/Ling-3.0-flash, #28 deepgrove/maple-preview, #9? Actually #9 is N/A but likely fine-tuned? It uses base model MiniMax-H3 maybe video? Not language. #25 unsloth/MiniMax-H3-GGUF is image-to-video but also maybe multi-modal? Category maybe 🎨. We'll assign accordingly.

Better to categorize per description.

List of models:

1. meta-models/Muse-Glimmer-30B - image-text-to-text -> 🎨 多模态与生成
2. MiniMaxAI/MiniMax-H3 - image-text-to-video? Actually author says image-text-to-video? In #2: MiniMaxAI/MiniMax-H3 is image-text-to-video? Actually #2 says image-text-to-video? It says "任务: image-text-to-video". Actually #2 is MiniMaxAI/MiniMax-H3 (image-text-to-video). So 🎨.
3. Qwen/Qwen3.8-2.4T-A95B - text-generation -> 🧠
4. Lightricks/LTX-2.5 - image-to-video -> 🎨
5. deepseek-ai/DeepSeek-V4-Flash-0731 - text-generation -> 🧠
6. lightx2v/Minimax-h3-Turbo - image-to-video -> 🎨
7. larryvrh/MiniMax-H3-Turbo-Lora - text-to-video -> 🎨
8. unsloth/Muse-Glimmer-30B-GGUF - image-text-to-text -> 🎨
9. Comfy-Org/MiniMax-H3 - N/A but uses diffusion, likely multi-modal -> 🎨
10. MiniMaxAI/MiniMax-Music3 - text-to-audio -> 🎨
11. moonshotai/Kimi-K3 - image-text-to-text -> 🎨
12. DavidAU/... - image-text-to-text -> 🎨
13. Kijai/MiniMax-H3_comfy - N/A (maybe community) -> 🎨
14. deepseek-ai/DeepSeek-V4-Pro-0813 - text-generation -> 🧠
15. LiquidAI/LFM2.5-2.6B - text-generation -> 🧠
16. meta-models/Muse-Glimmer-30B-GGUF - image-text-to-text -> 🎨
17. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4 - text-generation -> 🧠
18. inclusionAI/Ling-3.0-tiny - N/A (maybe model) -> 🔧? but tag includes safetensors, bailing_hybrid; could be language? Probably specialized => 🔧 专用模型 maybe.
19. SexGod1979/PinkCherry_MiniMax-H3 - text-to-video -> 🎨
20. drbaph/MiniMax-H3-Turbo-Lora-ComfyUI - text-to-video -> 🎨
21. endless-frontier/BigBang-v1 - image-text-to-text -> 🎨
22. nvidia/NVIDIA-NemotronLabs-VoiceChat-11B - N/A (voice chat) maybe 🎧? But category not defined; could be 🎨? It's voice chat, maybe 🎨.
23. fal/MiniMax-H3-Realism-People-LoRA - image-text-to-video -> 🎨
24. Qwen/Qwen3.8-2.4T-A95B-FP8 - text-generation -> 🧠
25. unsloth/MiniMax-H3-GGUF - image-text-to-video -> 🎨
26. lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA - N/A -> maybe 🔧? but it's LoRA for video, maybe 🎨.
27. ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot - image-text-to-text -> 🎨
28. deepgrove/maple-preview - text-generation -> 🧠
29. nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16 - text-generation -> 🧠
30. inclusionAI/Ling-3.0-flash - text-generation -> 🧠

We also have classification for "🔧 专用模型（代码、数学、医疗、嵌入）". There might be none exactly, but some could be specialized like inclusionAI/Ling-3.0-tiny (maybe language specialized). But we can place under 🧠? Or maybe "專用模型" not used. Could put inclusionAI models under 🔧? They are text-generation specialized? Might not fit.

But we can still include some under 🔧 if they are specialized, e.g., "deepgrove/maple-preview" is mixture-of-experts, maybe specialized. Or "inclusionAI/Ling-3.0-tiny" is specialized tiny model. But we can just put some under 🔧.

We also have "📦 微调与量化（社区微调、GGUF、AWQ）". Those include many GGUF models: #8 unsloth/Muse-Glimmer-30B-GGUF, #16 meta-models/Muse-Glimmer-30B-GGUF, #6 unsloth/MiniMax-H3-GGUF, #26 maybe? Actually #26 is LoRA but not GGUF. So list those.

We need to include all models with their details. Let's produce sections:

- 🧠 语言模型: list those with text-generation tasks: #3, #5, #14, #15, #17, #24, #28, #29, #30, maybe #2? Actually #2 is image-text-to-video not language. #1 no. #9 maybe not. #25 is video. So list those.

- 🎨 多模态与生成: all others with image/video/audio tasks: #1, #2, #4, #6, #7, #8, #9, #10, #11, #12, #13, #16, #18? Actually #18 is image-text-to-text, but could be multi-modal. #19, #20, #21, #22, #23, #25, #26?, #27, etc. Might be many.

But we need to keep concise. Perhaps we can list each model under appropriate category, but not exhaustive? The instruction says "每个模型包含：模型名（附 HF 链接） 作者、点赞数、下载数 一句话说明". So we need to include each of the 30 models. So we must list all 30 under categories.

Thus we need to assign each model to one of the four categories. Some may not perfectly fit but we can assign based on tags.

Let's map:

Category 🧠 语言模型 (LLM, 对话模型, 指令微调) includes models with tasks: text-generation, conversational, instruction fine-tune. Those are:
- #3 Qwen/Qwen3.8-2.4T-A95B (text-generation)
- #5 deepseek-ai/DeepSeek-V4-Flash-0731 (text-generation)
- #14 deepseek-ai/DeepSeek-V4-Pro-0813 (text-generation)
- #17 nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4 (text-generation)
- #29 nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16 (text-generation)
- #30 inclusionAI/Ling-3.0-flash (text-generation)
- #28 deepgrove/maple-preview (text-generation)
- #15 LiquidAI/LFM2.5-2.6B (text-generation)
- #24 Qwen/Qwen3.8-2.4T-A95B-FP8 (text-generation)
- #3? Already counted.
- #?? maybe #?? also #??
- #?? also #??: maybe #??: "lightx2v/Minimax-h3-Turbo" is video, not language.
- #?? also #??: "larryvrh/MiniMax-H3-Turbo-Lora" is text-to-video, not language.
- #??: "MiniMaxAI/MiniMax-Music3" is text-to-audio, not language.
- #??: "Kijai/MiniMax-H3_comfy" N/A but likely video.
- #??: "DavidAU/..." is image-text-to-text, not language.
- #??: "Comfy-Org/MiniMax-H3" N/A but base model maybe.

Thus language models list maybe 9 items.

Category 🎨 多模态与生成 (图像、视频、音频、文本到X) includes rest that are image/video/audio: basically all others.

Category 🔧 专用模型 (代码、数学、医疗、嵌入) maybe none exactly, but we can list some specialized like "inclusionAI/Ling-3.0-tiny" maybe specialized tiny model; "deepgrove/maple-preview" maybe mixture-of-experts, not exactly; maybe "nvidia/NVIDIA-NemotronLabs-VoiceChat-11B" voice chat - specialized. But we can assign some to this category.

Category 📦 微调与量化 includes GGUF, LoRA, AWQ models: #8, #16, #25, #26 maybe, #6? Actually #6 is not quantized; #23 maybe LoRA; #26 LoRA; #9 maybe community fine-tune; #13 maybe region; #22 maybe voice; but we can list those with tags indicating quantization or LoRA.

We need to keep each model with author, likes, downloads, one-sentence description, and link.

Let's extract data:

I'll create a table per model.

We'll need to preserve likes and downloads numbers as given.

Now produce the report.

Structure:

**今日速览** (3-5 sentences)

**热门模型**

分类 headings with emojis.

Under each category, list bullet points each containing: **模型名（链接）** - 作者, 点赞数, 下载数 - 一句话说明.

We must keep within reasonable length but include all 30 entries. Could be long but okay.

We need to ensure each bullet includes author, likes, downloads.

Let's compile details:

I'll extract each model's data:

1. meta-models/Muse-Glimber-30B
   Link: https://huggingface.co/meta-models/Muse-Glimmer-30B
   Author: meta-models
   Likes: 1,418
   Downloads: 121,042
   Tags: transformers, safetensors, muse_glimmer, image-text-to-text, conversational
   Category: 🎨

2. MiniMaxAI/MiniMax-H3
   Link: https://huggingface.co/MiniMaxAI/MiniMax-H3
   Author: MiniMaxAI
   Likes: 3,824
   Downloads: 1,605,940
   Tags: minimax-h3, diffusers, safetensors, text-to-video, image-to-video
   Category: 🎨

3. Qwen/Qwen3.8-2.4T-A95B
   Link: https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
   Author: Qwen
   Likes: 783
   Downloads: 1,012
   Tags: transformers, safetensors, qwen3_5_moe_text, text-generation, conversational
   Category: 🧠

4. Lightricks/LTX-2.5
   Link: https://huggingface.co/Lightricks/LTX-2.5
   Author: Lightricks
   Likes: 719
   Downloads: 57,287
   Tags: diffusion-single-file, image-to-video, text-to-video, video-to-video, image-text-to-video
   Category: 🎨

5. deepseek-ai/DeepSeek-V4-Flash-0731
   Link: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731
   Author: deepseek-ai
   Likes: 3,320
   Downloads: 1,431,587
   Tags: transformers, safetensors, deepseek_v4, text-generation, conversational
   Category: 🧠

6. lightx2v/Minimax-h3-Turbo
   Link: https://huggingface.co/lightx2v/Minimax-h3-Turbo
   Author: lightx2v
   Likes: 462
   Downloads: 91,455
   Tags: diffusers, t2v, i2v, r2v, image-to-video
   Category: 🎨

7. larryvrh/MiniMax-H3-Turbo-Lora
   Link: https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora
   Author: larryvrh
   Likes: 726
   Downloads: 0
   Tags: text-to-video, text-to-audio, audio-video, lora, minimax-h3
   Category: 🎨

8. unsloth/Muse-Glimmer-30B-GGUF
   Link: https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF
   Author: unsloth
   Likes: 390
   Downloads: 352,023
   Tags: transformers, gguf, unsloth, meta, image-text-to-text
   Category: 📦 (quantized)

9. Comfy-Org/MiniMax-H3
   Link: https://huggingface.co/Comfy-Org/MiniMax-H3
   Author: Comfy-Org
   Likes: 1,289
   Downloads: 10,365,210
   Tags: diffusion-single-file, comfyui, base_model:MiniMaxAI/MiniMax-H3, base_model:finetune:MiniMaxAI/MiniMax-H3, license:other
   Category: 🎨

10. MiniMaxAI/MiniMax-Music3
    Link: https://huggingface.co/MiniMaxAI/MiniMax-Music3
    Author: MiniMaxAI
    Likes: 310
    Downloads: 25
    Tags: sglang-omni, diffusers, safetensors, minimax_music3, music-generation
    Category: 🎨

11. moonshotai/Kimi-K3
    Link: https://huggingface.co/moonshotai/Kimi-K3
    Author: moonshotai
    Likes: 10,621
    Downloads: 1,871,575
    Tags: transformers, safetensors, kimi_k3, feature-extraction, compressed-tensors
    Category: 🎨

12. DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
    Link: https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF
    Author: DavidAU
    Likes: 1,987
    Downloads: 2,793,115
    Tags:

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*