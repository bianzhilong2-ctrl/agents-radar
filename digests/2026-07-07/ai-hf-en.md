# Hugging Face Trending Models Digest 2026-07-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-07 02:08 UTC

---


**Hugging Face Trending Models Digest – 2026-07-07**

---

### **Today's Highlights**  
The Hugging Face ecosystem this week is dominated by Qwen-family models, with multiple variants of Qwen3.5/3.6 appearing across quantization, fine-tuned, and multimodal pipelines. GGUF-quantized models continue to surge in popularity, particularly those optimized for local deployment (e.g., `Qwythos-9B` with over 1.6M downloads). Multimodal models, especially vision-language pipelines, are gaining traction, with uncensored and agentic variants attracting significant attention. Additionally, Chinese tech companies like Baidu and Zai-org are making strong pushes with specialized OCR and conversational models.

---

### **Trending Models**

#### 🧠 **Language Models (LLMs, chat models, instruction-tuned)**

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  *Author:* zai-org | *Likes:* 3,532 | *Downloads:* 231,218  
  A new release from Zai-org focused on conversational AI, leveraging advanced architecture for enhanced dialogue capabilities.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
  *Author:* deepreinforce-ai | *Likes:* 759 | *Downloads:* 436,780  
  A 35B parameter LLM quantized in GGUF format, optimized for efficient inference on consumer-grade hardware.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
  *Author:* yuxinlu1 | *Likes:* 1,051 | *Downloads:* 370,884  
  An agentic Gemma-4 model tailored for storytelling and terminal-based interactions.

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**  
  *Author:* Qwen | *Likes:* 556 | *Downloads:* 57,835  
  A mixture-of-experts agent world model designed for complex reasoning and task execution.

- **[deepreinforce-ai/Ornith-1.0-9B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**  
  *Author:* deepreinforce-ai | *Likes:* 393 | *Downloads:* 86,136  
  Smaller sibling to the 35B variant, balancing performance and efficiency for mid-tier GPUs.

---

#### 🎨 **Multimodal & Generation (image, video, audio, text-to-X)**

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  *Author:* HauhauCS | *Likes:* 2,529 | *Downloads:* 2,910,241  
  A vision-centric, uncensored Qwen3.6 variant with aggressive alignment tuning for creative use cases.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**  
  *Author:* krea | *Likes:* 529 | *Downloads:* 109,470  
  A fast diffusion-based text-to-image model optimized for real-time generation tasks.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
  *Author:* yuxinlu1 | *Likes:* 2,623 | *Downloads:* 664,319  
  A coding-focused Gemma-4 model with strong reasoning and agentic traits, ideal for developer workflows.

- **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)**  
  *Author:* Jackrong | *Likes:* 151 | *Downloads:* 126,831  
  A coder-tuned Qwen3.6 variant in GGUF format, blending multimodal understanding with code reasoning.

---

#### 🔧 **Specialized Models (code, math, medical, embeddings)**

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  *Author:* baidu | *Likes:* 1,795 | *Downloads:* 1,070,230  
  An all-purpose OCR engine supporting multiple languages and document formats, ideal for enterprise-grade extraction.

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**  
  *Author:* google | *Likes:* 257 | *Downloads:* 7,036  
  A tabular foundation model for regression and classification without labeled data, useful in low-data environments.

- **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**  
  *Author:* nationaldesignstudio | *Likes:* 136 | *Downloads:* 3,821  
  A token classification model built for PII detection and redaction using ONNX and transformers.js.

---

#### 📦 **Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)**

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  *Author:* empero-ai | *Likes:* 1,642 | *Downloads:* 1,617,508  
  A highly optimized GGUF version of Qwythos-9B, tuned for myth-building and narrative generation.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
  *Author:* unsloth | *Likes:* 974 | *Downloads:* 2,818,499  
  A massive 27B Qwen3.6 model quantized via Unsloth’s pipeline, targeting high-throughput local deployment.

- **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)**  
  *Author:* deepreinforce-ai | *Likes:* 350 | *Downloads:* 231,342  
  Full-precision variant of the Ornith model, offering state-of-the-art performance at the cost of higher resource usage.

- **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)**  
  *Author:* huihui-ai | *Likes:* 178 | *Downloads:* 6,660  
  A GGUF-quantized GLM-5.2 model with safety-aligned layers removed for research or customization purposes.

---

### **Ecosystem Signal**  
This week’s trend shows a clear shift toward **open-weight models**, especially those derived from Qwen3.x and Gemma-4 families, which are being rapidly adapted for coding, multimodal reasoning, and local deployment. The dominance of **GGUF formats**—with several models surpassing millions of downloads—signals growing interest in **edge AI and low-resource inference**. Meanwhile, Chinese developers are making notable contributions with domain-specific models like **Baidu’s Unlimited-OCR** and **Zai-org’s GLM-5.2**, challenging Western dominance in foundational model development. There is also increased activity around **MoE architectures** and **uncensored variants**, indicating a maturing ecosystem that supports both commercial and experimental use cases.

---

### **Worth Exploring**

1. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
   With over 1.6M downloads and strong narrative tuning, this model is ideal for creative writing or roleplay applications.

2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
   Excellent for developers looking to integrate code generation and agentic behavior into tools or IDEs.

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
   Best for experimental or NSFW-related projects where standard safety filters may be too restrictive.


---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*