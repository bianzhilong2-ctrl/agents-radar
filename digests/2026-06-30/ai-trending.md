# AI 开源趋势日报 2026-06-30

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-30 02:31 UTC

---

**AI 开源趋势日报**  
（基于 2026‑06‑30 GitHub Trending 与 AI 主题搜索数据）

---

## 1️⃣ 今日速览  
- AI **Agent 框架** 今日星增长最快，`agency‑agents` 单日 +1425 星，社区对自主多智能体编排的需求爆发。  
- **高效推理引擎** `vllm` 继续保持星象增长，显示 developers 更倾向于轻量化、跨模型的部署方案。  
- **向量检索** 系列项目（Milvus、Qdrant、Weaviate）继续保持高活跃度，RAG 生态进入“增量构建”阶段。  
- 传统 ML 框架（PyTorch、TensorFlow）仍保持巨量基础星数，但新增 star 速度放缓，indicating the market is consolidating around inference‑first and agent‑first toolchains.  

---

## 2️⃣ 各维度热门项目  

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）  
| 项目 | Stars（总/今日） | 简述 |
|------|----------------|------|
| [cupy/cupy](https://github.com/cupy/cupy) | ⭐0 (+352 today) | GPU 加速的 NumPy/SciPy 替代实现，让 Python 代码直接利用 CUDA。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐84,849 | 高吞吐、低显存占用的 LLM 推理引擎，支持多模型并行。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐175,157 | 本地统一模型加载器，支持 100+ 开源模型（Kimi‑K2.6、GLM‑5.1、DeepSeek 等）。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐162,029 | 业界最全的模型库，覆盖文本、视觉、音频及多模态，支持训练、微调与推理。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐101,218 | 备受欢迎的深度学习框架，原生 GPU  Unterstützung 与丰富的生态。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐196,106 | 端到端机器学习平台，支持分布式训练与部署。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）  
| 项目 | Stars（总/今日） | 简述 |
|------|----------------|------|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐0 (+1425 today) | 完整的 AI 代理套件，可配置前端、Reddit、 whimsy 等专家代理。 |
| [0xNyk/council-of-high-intelligence](https://github.com/0xNyk/council-of-high-intelligence) | ⭐0 (+331 today) | 多 personae 談判框架，聚合 Khan Academy、Feynman、Kahneman 等人物进行决策。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐78,725 | AI 驱动的全栈开发平台，可自主编写、审查并迭代代码。 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐147,023 | 生产级 Agent 工作流平台，支持可视化流程、工具调用与多模型切换。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐101,472 | 让 LLM 代理能够浏览并操作真实网页，实现自动化任务（如视频编辑、数据收集）。 |
| [logto-io/logto](https://github.com/logto-io/logto) | ⭐0 (+158 today) | 为 SaaS 与 AI 应用提供 OIDC/OAuth2.1 认证体系，内置多租户、SSO 与 RBAC。 |

>（注：表中仅列出每类 **最具代表性** 的 3‑8 项，其他同样活跃的项目

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*