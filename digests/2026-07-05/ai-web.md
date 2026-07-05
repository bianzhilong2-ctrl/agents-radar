# AI 官方内容追踪报告 2026-07-05

> 今日更新 | 新增内容: 3 篇 | 生成时间: 2026-07-05 02:07 UTC

数据来源:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 3 篇（sitemap 共 406 条）
- OpenAI: [openai.com](https://openai.com) — 新增 0 篇（sitemap 共 858 条）

---

**AI 官方内容追踪报告（2026‑07‑05 增量更新）**  

---

## 1. 今日速览  
1. Anthropic 通过 **Claude 3.7 Sonnet** 推出 **可切换的 “Extended Thinking Mode”** 与 **思考预算（Thinking Budget）**，实现同一模型在普通与深度推理之间动态切换。  
2. 同时公布 **Responsible Scaling Policy (RSP)** 中的 **AI Safety Levels (ASL)** 框架，明确针对 ** catastropic risk ** 的安全、安全与运营标准。  
3. 进一步披露 **Fable 5** 的 **网络安全分类器细节** 与 **AI Jailbreak 严重性评分草案**，为政府、研究者提供统一的风险语言。  
4. 整体信号表明 Anthropic 正从 **模型能力提升 → 安全治理体系化** 双轨推进，且已进入 **产品化可控化** 的新阶段。  

---

## 2. Anthropic / Claude 内容精选  

| 分类 | 标题（链接） | 日期 | 核心要点（2‑4 句话） |
|------|------------|------|----------------------|
| **news** | **[Claude’s extended thinking](https://www.anthropic.com/news/visible-extended-thinking)** | 2026‑07‑03 | - 推出 **Extended Thinking Mode**，用户可在同一模型上开启更深层推理，系统会自动扩展思考路径而非切换模型。<br>- 引入 **Thinking Budget** 控制台，让开发者精确限定模型在任务上投入的推理步数或 token 数。<br>- 采用 **visible thought process**，以原始思维链形式展示模型内部推理，提升透明度与可审计性。<br>- 旨在显著提升在 **cryptic crossword、复杂代码调试** 等高难度任务上的准确率，同时带来模型安全与评估的新挑战。 |
| **news** | **[Announcing Anthropic’s Responsible Scaling Policy](https://www.anthropic.com/news/anthropics-responsible-scaling-policy)** | 2026‑07‑03 | - 发布 **Responsible Scaling Policy (RSP)**，以 **AI Safety Levels (ASL)** 为核心，针对 **catastrophic risk**（如生物武器生成或自主失控）制定分层安全、安保与运营标准。<br>- ASL‑1 为低危险系统（如 2018 年的 LLM、棋类 AI），ASL‑2 则对出现危险能力的模型设定更严苛的验证要求。<br>- 通过 **技术 + 组织两套协议** 实现风险阈值的动态监控与 Mitchell‑like “stop‑gap”。<br>- 为后续的模型发布提供 **风险等级对照表**，帮助合作伙伴和监管机构统一评估。 |
| **news** | **[More details on Fable 5’s cyber safeguards and our jailbreak framework](https://www.anthropic.com/news/fable-safeguards-jailbreak-framework)** | 2026‑07‑03 | - 说明 **Fable 5** 所使用的 **网络安全分类器**（Safety Classifiers）具体检测并阻止哪类网络攻击指令（如漏洞利用、社会工程学），并给出 **允许的边界**。<br>- 披露分类器的 **输入‑输出映射**、训练数据来源以及 **误报/漏报的权衡**。<br>- 引入 **AI Jailbreak Severity Framework**（草案），对不同 jailbreak 的危害程度进行量化（轻微、中等、严重、极度危险），为政府与研究者提供统一的风险沟通语言。<br>- 目标是 **建立行业标准的威胁等级描述**，促进跨机构协同治理。 |

> **链接汇总**（均来自官方新闻稿）  
> - Extended Thinking: https://www.anthropic.com/news/visible-extended-thinking  
> - Responsible Scaling Policy: https://www.anthropic.com/news/anthropics-responsible-scaling-policy  
> - Cyber Safeguards & Jailbreak Framework: https://www.anthropic.com/news/fable-safeguards-jailbreak-framework  

---

## 3. OpenAI 内容精选  
> **说明**：OpenAI 今日（2026‑07‑05）的官方站点未抓取到任何增量新闻或公告。仅有标题推断（如 “openai.com” 未提供具体文章），因此缺乏可分析的正文内容。  

- **现有可用信息**：无可用 URL 或正文。  
- **分类尝试**：在 OpenAI 官方博客的常规分类（research / release / safety / company / engineering）均未出现对应条目，无法进行客观列举。  

> **结论**：基于仅有的 URL 元数据，无法提供具体的技术摘要或业务意义，报告仅作“无新内容”声明。

---

## 4. 战略信号解读  

| 维度 | Anthropic | OpenAI |
|------|-----------|--------|
| **技术优先级** | - **模型可控思考**：Extended Thinking Mode + Thinking Budget 直接向企业用户开放 **可调推理深度**，适配高价值任务（代码生成、法律文档、科研分析）。<br>- **安全治理体系**：RSP 与 ASL 框架把 **catastrophic risk** 从事后审查转向 **前置安全评估**，并通过安全等级向外部合作伙伴“承诺”。<br>- **网络安全防护**：对 **cyber‑jailbreak** 的精细化检测与分级，展示了对模型被滥用的防御层次化布局。 | - 近期公告空白，表明 **研发/产品节奏可能在内部迭代**，或公司正将精力集中在 **内部安全评估、模型发布管线** 而非对外宣传。<br>- 过去的 **Release‑every‑few‑weeks** 与 **GPT‑4‑Turbo** 迭代模式迥异，或暗示正在 **聚焦长周期的模型对齐与监管准备**。 |
| **竞争态势** | - **引领议题**：Extended Thinking、ASL、Jailbreak Severity 都是 **首次在官方文档中系统化披露** 的概念，形成 **“可解释且可治理的强大模型”** 的公共标准。<br>- **跟进者**：OpenAI 在模型功能上仍保持领先，但在 **安全框架的公开细化** 上慢一步，可能导致企业在合规与风险管理上更倾向于 Anthropic。 | - 尚未发布对应安全等级或思考预算机制，可能在 **内部研发阶段** 进行更深层的 **安全验证**（如 RLHF‑2、Constitutional AI）后再公开。<br>- 竞争焦点从 **模型能力提升** 转向 **模型使用治理**，两家公司正在分化路径：**Anthropic → 安全+可控**，**OpenAI → 大规模部署+快速迭代**。 |
| **对开发者/企业用户的潜在影响** | - 可通过 **Thinking Budget** 按需调节推理成本，实现 **性价比可控**。<br>- **透明思维链** 有助于调试和审计，降低因黑箱导致的业务风险。<br>- **ASL 分级** 为企业提供 **合规评估依据**，可直接用于内部合规审查或政府备案。<br>- **网络安全分类器** 为开发者提供 **可插拔的防御模块**，降低构建自定义安全层的技术门槛。 | - 由于缺乏公开框架，企业在评估模型使用合规性时只能依赖 **第三方审计或内部自行验证**。<br>- 如 OpenAI 随后发布类似的 **“Model Release Dashboard”** 或 **“Safety Levels”**，可能迅速追赶 Anthropic 的先发优势。 |

---

## 5. 值得关注的细节  

| 信号来源 | 具体表现 | 潜在意义 |
|----------|----------|----------|
| **关键词首次出现** | - “Extended Thinking Mode”<br>- “Thinking Budget”<br>- “AI Safety Levels (ASL)”<br>- “Jailbreak Severity Framework” | 这些术语标志着 **可调推理深度** 与 **风险等级化** 成为 **AI 产业新标杆**，后续模型发布会围绕 **“可控思考”** 与 **“可量化风险”** 设计。 |
| **标题措辞** | - “visible thought process” 强调 **透明**，暗示 **审计需求** 增长。<br>- “more details on …” 表明 **细节层级正从概念演进到实操**，企业可期待更丰富的 SDK / API 扩展。 | 业务上意味着 **产品 API** 将加入 **思考预算**、**安全分类器** 等可配置项，形成 **标准化接口** 供企业直接集成。 |
| **发布时机** | - 所有内容集中在 **2026‑07‑03**（即报告抓取的同一天），并紧随 **Claude 3.7 Sonnet** 的正式发布。<br>- 与 **“Cybersecurity Safeguards”** 同日披露，显示 **安全防护** 正在 **模型上线节点** 同步进行。 | 这表明 **Anthropic 正把安全与功能发布打包**，可能在 **下一轮模型（或更新）** 中直接提供 **安全功能的即服务（Safety‑as‑a‑service）**。 |
| **政策/合规动向** | - ASL 框架模仿 **生物安全等级 (BSL)**，暗示 **政府监管趋势** 正在向 **AI 领域** 迁移。<br>- Jailbreak Severity Framework 为 **监管沟通** 预留了标准化语言。 | 企业在 **与监管机构的对话** 中可直接引用 **ASL‑2/3** 等级，提升合规沟通的说服力。 |
| **跨部门协作** | - 与 **Glasswing partners** 合作制定 jailbreak 框架，显示 **外部生态** 正参与安全标准的共建。 | 未来 **开源或第三方安全工具** 可能围绕该框架出现，形成 **安全沙箱** 生态。 |

---

### 小结  
- **Anthropic** 正以 **可调思考深度 + 透明治理** 双轮驱动，快速从技术突破转向 **产品化安全套件**。  
- **OpenAI** 当前处于 **资源沉默** 状态，尚未公开对应的安全或思考机制，未来可能在 **内部安全验证完成后** 以更大规模的发布冲击市场。  
- 对 **企业用户**，Anthropic 的新功能提供了 **更可控、可审计、可合规** 的使用方式；对 **研发者**，则带来了 **新的实验维度（思考预算、可见思维链）** 与 **安全评估的系统框架**。  

---  

> 本报告均基于官方公开页面的**原文链接**与**标题/摘要**，所有摘要均控制在 2‑4 句话内，以确保信息客观、可追溯。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*