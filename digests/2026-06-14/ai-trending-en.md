# AI Open Source Trends 2026-06-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-14 02:43 UTC

---

We need to filter trending list for AI relevance. Then categorize filtered projects. Then output report.

First, list trending repos (14). Identify AI relevance.

Let's go through each:

1. iptv-org/iptv: IPTV channels, not AI. Exclude.

2. addyosmani/agent-skills: Production-grade engineering skills for AI coding agents. AI agent related. Yes.

3. chatwoot/chatwoot: open-source live-chat, email support. Not AI specific (though could have AI but not highlighted). Exclude.

4. obra/superpowers: An agentic skills framework & software development methodology that works. AI agent? Likely AI agent related. Probably yes.

5. apple/container: tool for Linux containers on Mac. Not AI. Exclude.

6. music-assistant/server: Media library manager connecting to streaming services. Not AI. Exclude.

7. kenn-io/agentsview: Local-first session intelligence and analytics for coding agents, supporting Claude Code, Codex, etc. AI agents. Yes.

8. LMCache/LMCache: Supercharge Your LLM with the Fastest KV Cache Layer. AI infrastructure (LLM cache). Yes.

9. microsoft/PowerToys: utilities for Windows productivity. Not AI. Exclude.

10. andrewyng/aisuite: Simple, unified interface to multiple Generative AI providers. AI infrastructure. Yes.

11. NVIDIA/SkillSpector: Security scanner for AI agent skills. Detect vulnerabilities... AI agent security. Yes (AI agent / infrastructure).

12. bannedbook/fanqiang: 翻墙-科学上网 (VPN). Not AI. Exclude.

13. swc-project/swc: Rust-based platform for the Web. Not AI. Exclude.

14. x1xhlol/system-prompts-and-models-of-ai-tools: collection of system prompts, internal tools & AI models. This is AI related (prompts, models). Probably AI applications? Could be AI infrastructure? It's more of a resource. Could be AI Applications or AI Infrastructure? It's a repository of prompts/models for AI tools, maybe AI Applications (specific apps? not). Might be more like AI knowledge? We'll categorize as AI Applications? Actually it's a collection of prompts and models for AI tools, could be considered AI Infrastructure (prompts engineering). We'll decide later.

Now also need to consider Topic Search results (80 repos). Those are all AI-related by topic tags (ai-agent, llm, ml, llm-model, vector-db, rag). We need to select from both sources? The instruction: "From the above data, select projects clearly related to AI/ML (exclude unrelated general tools, frontend frameworks, games, etc.). Skip non-AI trending repos." So we should consider both trending list and topic search results? The "Data Sources" includes Trending List and Topic Search. Likely we need to combine both sets and filter for AI relevance. But we already have many AI projects in topic search results (they are all tagged AI). So we need to select from the combined list.

Thus we will take all projects from both lists, filter out non-AI. From trending list we have selected some. From topic search list, all are AI-related by topic, but we should verify none are unrelated; they all seem AI-related. So we will include all topic search projects.

Now we need to categorize each into primary category: AI Infrastructure, AI Agents/Workflows, AI Applications, LLMs/Training, RAG/Knowledge.

We need to decide for each project.

Let's list all projects from topic search (80). I'll go through quickly and assign.

We have many with topics: ai-agent, llm, ml, llm-model, vector-db, rag.

We'll map topics to categories roughly:

- topic:ai-agent => AI Agents/Workflows
- topic:llm => LLMs/Training (though could be infrastructure but we treat as LLMs/Training)
- topic:ml => LLMs/Training? Actually ml could be infrastructure or training. We'll decide per project.
- topic:llm-model => LLMs/Training (model focused)
- topic:vector-db => RAG/Knowledge
- topic:rag => RAG/Knowledge

But some projects may belong to multiple; we pick primary.

Let's go through each topic search entry and assign.

I'll create a list.

Topic search entries (with stars):

1. NousResearch/hermes-agent [Python] ⭐192,821 [topic:ai-agent] -> AI Agents/Workflows

2. thedaviddias/Front-End-Checklist [MDX] ⭐72,921 [topic:ai-agent] -> AI Agents/Workflows (though it's a checklist for web dev, but tagged ai-agent, maybe for AI agents? We'll treat as AI Agents)

3. santifer/career-ops [JavaScript] ⭐53,542 [topic:ai-agent] -> AI-powered job search system built on Claude Code. That's AI Agents/Workflows (application of agents). Could be AI Applications? But primary: agent framework usage; I'd put AI Agents/Workflows.

4. CherryHQ/cherry-studio [TypeScript] ⭐47,286 [topic:ai-agent] -> AI productivity studio with smart chat, autonomous agents, and 300+ assistants. That's AI Applications? Actually it's an application (studio). But category: AI Applications (specific apps). However it's also agent framework. I'd choose AI Applications because it's a product.

5. zhayujie/CowAgent [Python] ⭐45,281 [topic:ai-agent] -> Open-source super AI assistant & Agent Harness. AI Agents/Workflows.

6. siyuan-note/siyuan [TypeScript] ⭐44,438 [topic:ai-agent] -> privacy-first personal knowledge management software. This is knowledge management, could be RAG/Knowledge (vector DB? not). But tagged ai-agent. It's a note-taking app with AI? I'd categorize as AI Applications (knowledge management app). But maybe RAG/Knowledge? It stores notes, not necessarily vector DB. We'll decide later.

7. HKUDS/nanobot [Python] ⭐44,164 [topic:ai-agent] -> Lightweight, open-source AI agent for your tools, chats, and workflows. AI Agents/Workflows.

8. ZhuLinsen/daily_stock_analysis [Python] ⭐42,429 [topic:ai-agent] -> LLM-powered stock analysis system. That's AI Applications (vertical solution: finance). Could be AI Agents? It's LLM-driven analysis; I'd put AI Applications.

9. CopilotKit/CopilotKit [TypeScript] ⭐35,015 [topic:ai-agent] -> Frontend Stack for Agents & Generative UI. That's AI Infrastructure (dev tools for agents). Could be AI Agents/Workflows? It's a framework for building agents UI. I'd choose AI Infrastructure.

10. Gitlawb/openclaude [TypeScript] ⭐28,675 [topic:ai-agent] -> runs anywhere. uses anything. Likely agent harness. AI Agents/Workflows.

11. iOfficeAI/AionUi [TypeScript] ⭐28,199 [topic:ai-agent] -> Free, local, open-source 24/7 Cowork app for OpenClaw, Hermes Agent, Claude Code, etc. Customize assistants. That's AI Applications (agent UI app). Could be AI Infrastructure? It's an app. I'll choose AI Applications.

12. Panniantong/Agent-Reach [Python] ⭐27,567 [topic:ai-agent] -> Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube... CLI. That's AI Agents/Workflows (tool for agents).

13. hugohe3/ppt-master [Python] ⭐27,246 [topic:ai-agent] -> AI generates a real, editable PowerPoint from any document. That's AI Applications (productivity tool).

14. googleworkspace/cli [Rust] ⭐27,041 [topic:ai-agent] -> Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Dynamically built from Google Discovery Service. Includes AI agent skills. That's AI Infrastructure (CLI tool) with agent skills.

15. jackwener/OpenCLI [JavaScript] ⭐24,277 [topic:ai-agent] -> Make Any Website into CLI & Use your logged-in browser by AI agent. AI Infrastructure (CLI).

Now topic:llm entries:

16. affaan-m/ECC [JavaScript] ⭐214,947 [topic:llm] -> The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. This is AI Agents/Workflows? It's about agent harness performance. Could be AI Infrastructure. But topic llm suggests LLM-related. I'd categorize as AI Agents/Workflows (since it's about agent harness). But maybe AI Infrastructure? Let's see: "agent harness performance optimization system". It's a tool for optimizing agents. I'd put AI Infrastructure.

17. Significant-Gravitas/AutoGPT [Python] ⭐184,931 [topic:llm] -> AutoGPT is the vision of accessible AI for everyone. That's AI Agents/Workflows (agent framework). Could also be AI Applications? It's a framework for autonomous agents. I'd choose AI Agents/Workflows.

18. ollama/ollama [Go] ⭐174,074 [topic:llm] -> Get up and running with Kimi-K2.6, GLM-5.1, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models. That's LLMs/Training (model serving/inference). Could be AI Infrastructure (inference engine). But topic llm. I'd categorize as LLMs/Training (model management).

19. f/prompts.chat [HTML] ⭐163,678 [topic:llm] -> f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the community. That's LLMs/Training? Actually it's prompt collection, could be AI Applications? It's a resource. I'd choose LLMs/Training? Might be more like AI Applications? But it's not training models. It's prompt sharing. Could be considered AI Applications (prompt library). However category LLMs/Training includes model weights, training frameworks, fine-tuning tools. Prompts not exactly. Might be better as AI Applications (specific app: prompt sharing). But we have no explicit category for prompt collections; maybe AI Applications fits. We'll decide later.

20. huggingface/transformers [Python] ⭐161,569 [topic:llm] -> Transformers: model-definition framework. That's LLMs/Training (framework). Also AI Infrastructure. But primary: LLMs/Training.

21. langgenius/dify [TypeScript] ⭐145,089 [topic:llm] -> Production-ready platform for agentic workflow development. That's AI Agents/Workflows (platform for agents). Could also be AI Infrastructure. We'll decide later.

22. open-webui/open-webui [Python] ⭐141,400 [topic:llm] -> User-friendly AI Interface (Supports Ollama, OpenAI API, ...). That's AI Applications (UI chat interface). Could be AI Infrastructure? It's a frontend for LLMs. I'd choose AI Applications.

23. langchain-ai/langchain [Python] ⭐139,215 [topic:llm] -> The agent engineering platform. That's AI Agents/Workflows (agent framework). Could be AI Infrastructure. We'll decide.

24. firecrawl/firecrawl [TypeScript] ⭐132,411 [topic:llm] -> The API to search, scrape, and interact with the web at scale. That's AI Infrastructure (tool for web scraping for LLMs). Could be RAG/Knowledge? It's a scraping API. I'd choose AI Infrastructure.

25. browser-use/browser-use [Python] ⭐98,700 [topic:llm] -> Make websites accessible for AI agents. Automate tasks online with ease. That's AI Agents/Workflows (tool for agents). Could be AI Infrastructure.

26. TauricResearch/TradingAgents [Python] ⭐85,854 [topic:llm] -> TradingAgents: Multi-Agents LLM Financial Trading Framework. That's AI Agents/Workflows (multi-agent framework for trading). Could be AI Applications? It's a framework. I'd choose AI Agents/Workflows.

27. vllm-project/vllm [Python] ⭐82,784 [topic:llm] -> A high-throughput and memory-efficient inference and serving engine for LLMs. That's AI Infrastructure (inference engine). Could be LLMs/Training? It's serving. I'd choose AI Infrastructure.

28. OpenHands/OpenHands [Python] ⭐76,910 [topic:llm] -> OpenHands: AI-Driven Development. That's AI Agents/Workflows (AI-driven dev). Could be AI Applications? It's a dev agent. I'd choose AI Agents/Workflows.

29. JuliusBrussee/caveman [JavaScript] ⭐72,191 [topic:llm] -> why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman. That's AI Agents/Workflows (Claude Code skill). So AI Agents/Workflows.

30. tensorflow/tensorflow [C++] ⭐195,645 [topic:ml] -> Open Source Machine Learning Framework. That's LLMs/Training (framework) or AI Infrastructure. Since it's ML framework, could be LLMs/Training (training). We'll choose LLMs/Training.

31. pytorch/pytorch [Python] ⭐100,733 [topic:ml] -> Tensors and Dynamic neural networks in Python with strong GPU acceleration. LLMs/Training.

32. microsoft/ML-For-Beginners [Jupyter Notebook] ⭐86,806 [topic:ml] -> 12 weeks, 26 lessons, 52 quizzes, classic Machine Learning for all. That's educational, not a tool. Could be LLMs/Training? It's educational content. Might be AI Applications? Not really. Might be excluded? But it's ML topic. Could be considered AI Applications (learning app). I'd choose AI Applications? But it's not an app; it's a course. Could be AI Infrastructure? Not. Might be AI Applications (educational). We'll keep.

33. Developer-Y/cs-video-courses ⭐81,787 [topic:ml] -> List of Computer Science courses with video lectures. Similar educational. Might be AI Applications? Not exactly. Might be excluded? But it's ML topic. I'd consider AI Applications (resource). We'll keep.

34. netdata/netdata [C] ⭐79,146 [topic:ml] -> The fastest path to AI-powered full stack observability, even for lean teams. That's AI Infrastructure (observability). Could be ML monitoring. I'd choose AI Infrastructure.

35. tesseract-ocr/tesseract [C++] ⭐74,667 [topic:ml] -> Tesseract Open Source OCR Engine. That's AI Applications (OCR tool). Could be AI Infrastructure? It's a specific app. Choose AI Applications.

36. OpenBB-finance/OpenBB [Python] ⭐69,070 [topic:ml] -> Financial data platform for analysts, quants and AI agents. That's AI Applications (financial platform). Could be AI Infrastructure? It's a platform. Choose AI Applications.

37. scikit-learn/scikit-learn [Python] ⭐66,322 [topic:ml] -> scikit-learn: machine learning in Python. LLMs/Training (ML framework).

38. keras-team/keras [Python] ⭐64,088 [topic:ml] -> Deep Learning for humans. LLMs/Training.

39. pathwaycom/llm-app [Jupyter Notebook] ⭐59,358 [topic:ml] -> Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. That's AI Infrastructure (templates for RAG). Could be RAG/Knowledge. It's about LLM app templates. I'd choose AI Infrastructure.

40. ultralytics/ultralytics [Python] ⭐58,357 [topic:ml] -> Ultralytics YOLO 🚀. That's AI Applications (object detection model). Could be LLMs/Training? It's a model repository. Choose AI Applications (specific model).

41. ultralytics/yolov5 [Python] ⭐57,521 [topic:ml] -> Ultralytics YOLOv5 in PyTorch > ONNX > CoreML > TFLite. Similar to above. Choose AI Applications.

42. JuliaLang/julia [Julia] ⭐48,841 [topic:ml] -> The Julia Programming Language. Not AI specific. Could be AI Infrastructure? It's a language. Might be excluded? But it's ML topic. I'd consider AI Infrastructure (language for ML). But it's general purpose. Might be excluded as unrelated general tool. However it's used for ML. I'd keep as AI Infrastructure? Might be borderline. We'll decide later.

43. ScrapeGraphAI/Scrapegraph-ai [Python] ⭐27,172 [topic:llm-model] -> Python scraper based on AI. That's AI Infrastructure (scraper). Could be RAG/Knowledge? It's a scraper using AI. Choose AI Infrastructure.

44. 0xPlaygrounds/rig [Rust] ⭐7,612 [topic:llm-model] -> Build modular and scalable LLM Applications in Rust. That's AI Infrastructure (framework for LLM apps). Could be LLMs/Training? It's for building LLM applications. Choose AI Infrastructure.

45. open-compass/opencompass [Python] ⭐7,082 [topic:llm-model] -> OpenCompass is an LLM evaluation platform. That's LLMs/Training (evaluation). Could be AI Infrastructure (benchmark). Choose LLMs/Training.

46. Eigenwise/atomic-agents [Python] ⭐5,978 [topic:llm-model] -> Building AI agents, atomically. That's AI Agents/Workflows.

47. skyzh/tiny-llm [Python] ⭐4,274 [topic:llm-model] -> A course of learning LLM inference serving on Apple Silicon for systems engineers: build a tiny vLLM + Qwen. That's LLMs/Training (educational). Could be AI Applications? It's a course. Choose LLMs/Training.

48. samchon/nestia [TypeScript] ⭐2,159 [topic:llm-model] -> NestJS Helper + AI Chatbot Development. That's AI Applications (chatbot dev helper). Could be AI Infrastructure? Choose AI Applications.

49. zchoi/Awesome-Embodied-Robotics-and-Agent ⭐1,813 [topic:llm-model] -> curated list of Embodied AI or robot with LLMs research. That's AI Applications? It's an awesome list. Choose AI Applications (resource).

50. acon96/home-llm [Python] ⭐1,358 [topic:llm-model] -> A Home Assistant integration & Model to control your smart home using a Local LLM. That's AI Applications (smart home integration). Choose AI Applications.

51. thinkwee/AwesomeOPD ⭐624 [topic:llm-model] -> Awesome List for On-Policy Distillation. That's LLMs/Training (resource). Choose LLMs/Training.

52. chrisliu298/awesome-llm-unlearning ⭐598 [topic:llm-model] -> resource repository for machine unlearning in LLMs. Choose LLMs/Training.

53. Picovoice/picollm [Python] ⭐312 [topic:llm-model] -> On-device LLM Inference Powered by X-Bit Quantization. That's AI Infrastructure (inference on device). Could be LLMs/Training? It's inference. Choose AI Infrastructure.

54. testtimescaling/testtimescaling.github.io [HTML] ⭐105 [topic:llm-model] -> survey on test-time scaling in LLMs. That's LLMs/Training (survey). Choose LLMs/Training.

55. HKBU-LAGAS/Awesome-Item-ID-Gen-RecSys ⭐97 [topic:llm-model] -> curated list of research advancements on item identification and item tokenization in generative recommender systems. That's AI Applications? It's a resource for recommender systems. Choose AI Applications.

56. LiberCoders/FeatureBench [Python] ⭐75 [topic:llm-model] -> [ICLR 2026] Official Implementation of "FeatureBench: Benchmarking Agentic Coding for Complex Feature Development". That's AI Agents/Workflows (benchmark for agentic coding). Could be AI Infrastructure? Choose AI Agents/Workflows.

57. LancerLab/croqtile [C++] ⭐32 [topic:llm-model] -> A Next-Gen Kernel programming DSL for Maximizing Productivity. Not AI specific; maybe excluded. But it's llm-model topic. Could be AI Infrastructure? It's a DSL for kernel programming, not AI. Likely exclude as unrelated general tool. We'll exclude.

58. Mintplex-Labs/anything-llm [JavaScript] ⭐61,541 [topic:vector-db] -> Stop renting your intelligence. Own it with AnythingLLM. Everything you need for a powerful local-first agent experience. That's RAG/Knowledge (vector db + agent). Choose RAG/Knowledge.

59. meilisearch/meilisearch [Rust] ⭐58,083 [topic:vector-db] -> lightning-fast search engine API bringing AI-powered hybrid search. That's RAG/Knowledge (search engine). Choose RAG/Knowledge.

60. run-llama/llama_index [Python] ⭐50,111 [topic:vector-db] -> LlamaIndex is the leading document agent and OCR platform. Actually description says document agent and OCR platform. That's RAG/Knowledge (indexing). Choose RAG/Knowledge.

61. milvus-io/milvus [Go] ⭐44,764 [topic:vector-db] -> Milvus is a high-performance, cloud-native vector database built for scalable vector ANN search. RAG/Knowledge.

62. qdrant/qdrant [Rust] ⭐32,178 [topic:vector-db] -> Qdrant - High-performance, massive-scale Vector Database and Vector Search Engine. RAG/Knowledge.

63. NirDiamant/RAG_Techniques [Jupyter Notebook] ⭐27,922 [topic:vector-db] -> advanced techniques for Retrieval-Augmented Generation (RAG) systems. RAG/Knowledge.

64. topoteretes/cognee [Python] ⭐17,815 [topic:vector-db] -> Cognee is the open-source AI memory platform for agents. Give your AI agents persistent long-term memory across sessions with a self-hosted knowledge graph engine. RAG/Knowledge.

65. weaviate/weaviate [Go] ⭐16,323 [topic:vector-db] -> Weaviate is an open-source vector database that stores both objects and vectors... RAG/Knowledge.

66. neuml/txtai [Python] ⭐12,653 [topic:vector-db] -> All-in-one AI framework for semantic search, LLM orchestration and language model workflows. RAG/Knowledge (also AI Infrastructure). Choose RAG/Knowledge.

67. langchain4j/langchain4j [Java] ⭐12,313 [topic:vector-db] -> LangChain4j is an idiomatic, open-source Java library for building LLM-powered applications on the JVM... includes tool calling, agents and RAG. That's RAG/Knowledge (or AI Agents). Since vector-db topic, choose RAG/Knowledge.

68. StarTrail-org/LEANN [Python] ⭐11,918 [topic:vector-db] -> [MLsys2026]: RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG application on your personal device. RAG/Knowledge.

69. zilliztech/claude-context [TypeScript] ⭐11,839 [topic:vector-db] -> Code search MCP for Claude Code. Make entire codebase the context for any coding agent. That's RAG/Knowledge (context engine). Choose RAG/Knowledge.

70. lancedb/lancedb [HTML] ⭐10,595 [topic:vector-db] -> Developer-friendly OSS embedded retrieval library for multimodal AI. Search More; Manage Less. RAG/Knowledge.

71. oceanbase/oceanbase [C++] ⭐10,153 [topic:vector-db] -> The Fastest Distributed Database for Transactional, Analytical, and AI Workloads. RAG/Knowledge.

72. Shubhamsaboo/awesome-llm-apps [Python] ⭐114,469 [topic:rag] -> 100+ AI Agent & RAG apps you can actually run — clone, customize, ship. That's RAG/Knowledge (list of apps). Choose RAG/Knowledge.

73. infiniflow/ragflow [Python] ⭐82,658 [topic:rag] -> RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs. RAG/Knowledge.

74. thedotmack/claude-mem [JavaScript] ⭐82,150 [topic:rag] -> Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More. RAG/Knowledge.

75. PaddlePaddle/PaddleOCR [Python] ⭐82,116 [topic:rag] -> Turn any PDF or image document into structured data for your AI. A powerful, lightweight OCR toolkit that bridges the gap between images/PDFs and LLMs. Supports 100+ languages. RAG/Knowledge

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*