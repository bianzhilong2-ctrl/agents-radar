# AI 开源趋势日报 2026-08-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-26 00:42 UTC

---

# AI 开源趋势日报（2026‑08‑26）

## 今日速览
今日 GitHub Trending 榜单中，AI 代理（Agent）和本地化工作空间成为爆款，**Codex**、**maka**、**TradingAgents**、**openhuman** 等项目今日新增星标均破 500，显示社区对可直接在终端或本地运行的 AI 助手需求激增。与此同时，**提示词工程**（awesome‑gpt‑image‑2、andrej‑karpathy‑skills）和 **AI 辅助求职/知识管理**（ai‑job‑search、claude‑obsidian）也获得显著关注，表明开发者正把大模型能力落地到具体生产力场景。整体来看，**AI 编码 Agent、多智能体工作流以及本地优先的知识库/RAG** 是今日热度最高的三个方向。

## 各维度热门项目  

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
| 项目 | Stars（总量/今日新增） | 一句话介绍 |
|------|------------------------|------------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐197,634 | 最通用的开源机器学习框架，覆盖训练、推理与生态工具。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐164,440 | 预训练模型定义与共享中心，支持文本、视觉、音频等多模态。 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐179,427 | 本地运行 LLM（如 Llama、Qwen、DeepSeek）的轻量工具，一条命令启动模型。 |
| [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | ⭐? (+351 today) | Claude 插件社区市场，让开发者快速扩展 Claude Code 能力。 |
| [openai/codex](https://github.com/openai/codex) | ⭐? (+1,181 today) | 终端内运行的轻量级 AI 编码 Agent，支持自动补全与代码生成。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
| 项目 | Stars（总量/今日新增） | 一句话介绍 |
|------|------------------------|------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐236,412 | 自成长的个人 AI Agent，能够记忆、学习并不断升级自身能力。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐75,291 | 零依赖的「Claude Code」像精简版 agent harness，便于快速实验。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐? (+218 today) | 基于多 LLM 的金融交易智能体框架，支持策略回测与实盘。 |
| [apache/maka](https://github.com/apache/maka) | ⭐? (+543 today) | 本地优先的 AI Agent 工作空间，以追加式日志记录消息、工具调用与权限决策。 |
| [openhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | ⭐? (+542 today) | 个人 AI 超级大脑：本地记忆、Agent 队伍编排及深度研究能力一体化。 |
| [openai/codex](https://github.com/openai/codex) | ⭐? (+1,181 today) | 终端内运行的 AI 编码 Agent，能够理解自然语言并生成、修改代码。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
| 项目 | Stars（总量/今日新增） | 一句话介绍 |
|------|------------------------|------------|
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐51,063 | 集成智能聊天、自主 Agent 与 300+ 助手的 AI 生产力工作站。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐49,316 | 由文本或主题一键生成带动画、图表和配音的原生 PowerPoint。 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | ⭐? (+1,265 today) | 基于 Claude Code 的 AI 求职框架：自动评估岗位、定制简历、求职信并模拟面试。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | ⭐? (+813 today) | Obsidian + Claude Code 的 AI 第二大脑，把任何资料变为关联的 Markdown 知识图谱。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐? (+161 today) | 超过 100 款开源 LLM 应用、Agent 技能与 RAG 实例的精选列表。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐110,497 | 将代码库、文档、SQL、PDF 转换为可查询的知识图谱，适用于 Claude Code 等工具。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
| 项目 | Stars（总量/今日新增） | 一句话介绍 |
|------|------------------------|------------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐197,634 | 端到端机器学习平台，支持从研究到产品化的完整流程。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102,593 | 动态图深度学习库，以灵活性和强大的 GPU 加速闻名。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐103,780 | 手把手在 PyTorch 中从零实现类 ChatGPT 的 LLM，适合教学与研究。 |
| [marin-community/marin](https://github.com/marin-community/marin) | ⭐? (+231 today) | 开源基础模型研发框架，致力于探索新架构与训练技术。 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | ⭐? (+569 today) | 从零开始学习、构建并交付 LLM 工程的完整教程与代码

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*