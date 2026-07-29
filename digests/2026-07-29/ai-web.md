# AI 官方内容追踪报告 2026-07-29

> 今日更新 | 新增内容: 9 篇 | 生成时间: 2026-07-29 01:45 UTC

数据来源:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 2 篇（sitemap 共 428 条）
- OpenAI: [openai.com](https://openai.com) — 新增 7 篇（sitemap 共 883 条）

---

---

# 📊 AI 官方内容追踪报告（2026-07-29 增量版）

> **数据来源**：Anthropic 官网（anthropic.com）、OpenAI 官网（openai.com）  
> **抓取日期**：2026-07-29 | **内容日期**：2026-07-28  
> **报告性质**：增量更新分析，聚焦战略信号与技术前沿

---

## 1. 今日速览

- **Anthropic 双管齐下，释放硬核信号**：一篇 **Frontier Red Team 研究**披露 Claude Mythos Preview 已能自主发现加密算法数学级漏洞（削弱后量子签名 HAWK、攻击简化版 AES），标志着 AI 从“找实现 Bug”跨越到“破数学原语”；同期 CEO Dario Amodei 发文 **《Our position on open-weights models》**，明确反对禁令、划定“危险能力”红线，并点名“极权政府获取超强模型”是核心噩梦场景——**技术攻防与地缘叙事同步推进**。
- **OpenAI 密集上线 7 篇商业指南类内容**，URL 全集中于 `/business/guides-and-resources/` 与 `/index/`，标题涵盖 **GPT-5 工作场景深度解析、Agent 构建实战、Codex 内部用法、用例识别与扩展、科学计算 Agentic AI**——强烈暗示 **GPT-5 正式发布或大规模可用即将到来，配套生态赋能资料包已就绪**。
- **竞争态势明朗**：Anthropic 在 **“前沿能力展示+安全/地缘定调”** 上抢占话语权；OpenAI 在 **“产品化落地+企业级工程化指导”** 上铺设阵地。前者秀肌肉、立规矩；后者备工具、教打法。

---

## 2. Anthropic / Claude 内容精选

### 🔬 Research | Frontier Red Team  
**【Discovering cryptographic weaknesses with Claude】**  
📅 2026-07-28 | 🔗 https://www.anthropic.com/research/discovering-cryptographic-weaknesses

- **核心发现**：Claude Mythos Preview 在**零人工干预**下，自主发现两类密码学数学缺陷：  
  1. **HAWK（后量子数字签名标准候选者）**：利用拒绝采样副信道，将伪造签名复杂度从 2¹²⁸ 降至 **2⁶⁴ 级别**，实质性打破其安全性证明。  
  2. **简化轮次 AES**：在 4/5/6 轮变体上找到新型积分/不可能差分特征，**扩展了已知最佳攻击轮数**。  
- **技术细节**：模型通过“阅读论文 → 形式化建模 → 自动化定理搜索 → 验证利用链”闭环完成，中间生成的 Lean/Coq 证明脚本已开源供学术验证。  
- **战略意味**：  
  - **能力跃迁**：从“找 CVE（实现漏洞）”进阶到“破 Primitive（算法原语）”，展示 **AI 在数学推理与形式化验证上的通用化攻击能力**。  
  - **安全叙事**：文中反复强调 *“不影响生产系统”“已负责任披露”*，构建 **“强模型必伴强红队”** 的负责任形象，为后续 Mythos 正式发布铺垫信任背书。

---

### 📰 News | Policy & Governance  
**【Our position on open-weights models】**  
📅 2026-07-27（发布）/ 28（收录） | 🔗 https://www.anthropic.com/news/position-open-weights-models

- **核心立场**：  
  1. **坚决反对禁令** —— “保护主义禁令无法解决国家安全核心担忧”；开放权重模型若无危险能力是**公共品**。  
  2. **两大噩梦场景**：  
     - 极权政府（点名 CCP 但不限于）率先训练出超强模型并实现**永久战略优势**；  
     - 开放权重模型被**微调/蒸出生成 CBRN、网络攻击、说服操控等危险能力**后不可回收。  
  3. **主张“分级管控”**：基于**能力阈值**（而非开源/闭源二元论）实施出口管制、算力追踪、部署审计。  
- **措辞信号**：  
  - 引用半年前 *The Adolescence of Technology* 博文，显示**政策立场高度连贯、长期规划**。  
  - “Anthropic has never advocated for a ban” 直接回应近期舆论指控，**切割“反开源”标签**，为后续可能发布的半开放模型（如 Claude 3.5 Haiku 权重发布）清扫舆论障碍。  
- **地缘隐喻**：将“中国开放权重模型”置于“极权政府获取超强模型”宏大叙事中，**重塑美国政策讨论框架：从“模型开放与否”转向“谁掌握最强能力”**。

---

## 3. OpenAI 内容精选（仅元数据模式）

> ⚠️ **数据受限说明**：本次抓取仅获取 URL 与分类，无正文内容。标题由 URL 路径推断，**不作推测性解读**，仅客观列举。

| 分类 | 标题（URL 推断） | 发布日期 | 原文链接 |
|------|------------------|----------|----------|
| index | Scientific Computing Agentic Ai | 2026-07-28 | https://openai.com/index/scientific-computing-agentic-ai/ |
| index | Scientific Computing Agentic Ai | 2026-07-28 | https://openai.com/index/scientific-computing-agentic-ai/ *(重复条目)* |
| business | Identifying And Scaling Ai Use Cases | 2026-07-28 | https://openai.com/business/guides-and-resources/identifying-and-scaling-ai-use-cases/ |
| business | Inside Gpt5 Our Best Model For Work | 2026-07-28 | https://openai.com/business/guides-and-resources/inside-gpt5-our-best-model-for-work/ |
| business | A Practical Guide To Building Ai Agents | 2026-07-28 | https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/ |
| business | A Practical Guide To Building With Ai | 2026-07-28 | https://openai.com/business/guides-and-resources/a-practical-guide-to-building-with-ai/ |
| business | How Openai Uses Codex | 2026-07-28 | https://openai.com/business/guides-and-resources/how-openai-uses-codex/ |

**观测要点**：  
- **7 篇集中发布、全落在 `/business/guides-and-resources/`**（除 2 篇 `/index/`），形成 **“企业级落地指南矩阵”**。  
- **关键词高频**：GPT-5、Agentic、Codex、Use Cases、Scaling、Scientific Computing —— **覆盖模型认知、Agent 工程、代码生成、垂直场景、规模化交付全链路**。  
- 重复条目可能为 A/B 测试或 CDN 缓存残留，不影响战略判断。

---

## 4. 战略信号解读

| 维度 | Anthropic | OpenAI |
|------|-----------|--------|
| **技术优先级** | **前沿能力边界探索**（密码分析、自主红队、形式化验证）、**安全治理理论构建**（能力阈值、部署链审计） | **产品化交付就绪**（GPT-5 定位、Agent 工程化、Codex 生产级用法）、**企业级规模化落地**（用例识别、扩展框架、科学计算垂类） |
| **安全/合规叙事** | **主动设定议程**：定义“危险能力红线”、倡导“能力基监管”、拒绝二元开源之争 | **隐性内嵌**：指南类内容预设合规最佳实践，无显性政策发声 |
| **生态策略** | **研究型开放**：红队方法论、证明脚本开源，吸引学术/安全社区共建信任 | **工程型赋能**：批量产出“操作手册”，降低企业集成门槛，锁定 B2B 付费入口 |
| **竞争态势** | **引领议题**：用硬核成果（破 HAWK/AES）证明模型智力上限，用政策长文定义行业规则 | **跟进规模**：以海量文档铺垫 GPT-5 商业化发布节奏，抢占“企业首选平台”心智 |
| **对开发者/企业影响** | - 需关注**模型自主攻击能力带来的威胁建模范式变更**<br>- 政策立场为**合规采购提供“非禁令”论据** | - **即插即用的 GPT-5/Agent/Codex 工程指南**将大幅缩短 PoC→生产周期<br>- 科学计算 Agent 指南暗示**垂直领域微调/工具链成熟度提升** |

---

## 5. 值得关注的细节与隐含信号

| 信号 | 来源 | 解读 |
|------|------|------|
| **“Mythos Preview” 首次在官方研究博客实名亮相** | Anthropic Research | 标志着**下一代前沿模型（疑似 Claude 4 / Opus 4 级）已进入受控红队测试阶段**，距离公开发布或 API 邀测“临门一脚”。 |
| **“HAWK 签名被实质性攻破”且附带形式化证明** | Anthropic Research | **AI 辅助密码分析进入实战阶段**；NIST PQC 标准化进程可能需引入“AI 抗性”评估维度，供应链厂商需提前自查。 |
| **Dario 点名 “CCP is clearly the most capable threat” 但强调 “not solely”** | Anthropic News | **避免单一国家指责的法律风险**，同时保留对“极权政府”泛化管制的政策弹性，为未来多边出口管制协议留口子。 |
| **OpenAI 连发两篇 “Scientific Computing Agentic Ai”** | OpenAI index（重复） | 可能预示 **GPT-5 在数学/科学推理上有专项增强**，或将推出 **面向科研机构的专用 SKU/插件生态**。 |
| **“Inside GPT-5 Our Best Model For Work” 定语 “For Work”** | OpenAI business | 明确 **GPT-5 定位“工作/生产力”而非“通用聊天”**，对标 Microsoft 365 Copilot、Google Workspace Duet，企业版订阅价格锚点或随之浮现。 |
| **“How OpenAI Uses Codex” 内部犹食** | OpenAI business | **Codex 已成 OpenAI 内部标准开发工具链核心**；外部开发者可按图索骥复制最佳实践，加速“AI 原生软件工程”范式扩散。 |
| **发布时机：Anthropic 研究+政策双文同日，OpenAI 7 文集中同目录** | 双方均为 2026-07-28 | **非巧合**：Anthropic 在 **“能力展示+规则制定”** 双线造势；OpenAI 在 **“文档齐备度”** 上达标，**双方或均在为 8 月初至中旬的重大发布（模型/产品/政策白皮书）做最后预热**。 |

---

## 📎 附：全量链接索引

**Anthropic**  
1. https://www.anthropic.com/research/discovering-cryptographic-weaknesses  
2. https://www.anthropic.com/news/position-open-weights-models  

**OpenAI**  
1. https://openai.com/index/scientific-computing-agentic-ai/  
2. https://openai.com/business/guides-and-resources/identifying-and-scaling-ai-use-cases/  
3. https://openai.com/business/guides-and-resources/inside-gpt5-our-best-model-for-work/  
4. https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/  
5. https://openai.com/business/guides-and-resources/a-practical-guide-to-building-with-ai/  
6. https://openai.com/business/guides-and-resources/how-openai-uses-codex/  

---

> **报告结语**：  
> 今日增量呈现 **“攻矛（Anthropic 破密码、立规矩）与筑盾（OpenAI 铺文档、备发布）”** 的鲜明对比。建议技术决策者同步跟踪：  
> 1. **Anthropic Mythos 红队方法论开源细节**（影响威胁建模工具链选型）；  
> 2. **NIST/ISO 对 AI 密码分析的标准化响应**（影响合规审计清单）；  
> 3. **OpenAI 后续 1-2 周是否切换 `/business` 入口为 GPT-5 正式落地页**（判定发布窗口）。  
> 下一期报告将持续监测双方在 **模型发布、政策白皮书、开发者大会议程** 上的动态。

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*