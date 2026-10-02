# ArXiv AI 研究日报 2026-10-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-02 03:11 UTC

---

# ArXiv AI 研究日报（2026‑10‑02）

## 今日速览
今日提交的论文集中围绕三大方向展开：首先是加速大语言模型（LLM）推理与训练效率的创新，如通过线性混合实现实时人偶动画；其次是增强具身智能与多模态生成的自修复与协同机制；最后是拓展到安全工具使用、科学发现以及企业级数据工作流的实际应用。整体上，社区正致力于在保持模型规模优势的同时，提升可解释性、可靠性与工程落地能力。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）
1. **One Basis to Animate Them All: Gaussian Blendshape Distillation for Real-Time Avatars**  
   作者: R.F., L.K., I.L.  
   核心贡献: 将预训练人偶模型的动画动画近似为身份无关的线性形状混合，显著降低实时渲染的计算成本。

2. **Embedding Prediction Helps Image Generation**  
   作者: S.X., J.X., Z.W.  
   核心贡献: 在扩散变换器中用预测嵌入替代固定类标签或文本提示，提升图像生成质量并减少重复步骤。

3. **Trust the Direction, Search the Step: Zero-and-First-Order Methods for LLM Fine-Tuning**  
   作者: C.M., E.B., A.D.  
   核心贡献: 提出零阶与一阶联合优化框架，在不牺牲大规模神经网络优化的前提下加速微调收敛。

4. **From Knowledge Access to Source Learning: Developing Source-Specific Competence**  
   作者: L.F., K.X., Y.W.  
   核心贡献: 通过持续外部来源访问与源记忆系统协同训练，让 LLM 具备领域特定的知识检索与利用能力。

5. **Local Support Learning**  
   作者: A.B., A.K., J.G.  
   核心贡献: 将灾难遗忘视为输入空间几何问题，提出基于梯度更新的自然保留目标，缓解预训练大模型的遗忘现象。

### 🤖 智能体与推理
6. **Reconstruct, Practice, Go Real: Guided Self-Improvement for Embodied Agents**  
   作者: Y.W., H.J., S.D., E.D.  
   核心贡献: 提出 RPG 框架，实现机器人执行系统在真实环境中的自主改进，提升多任务适应性。

7. **Generative Cinematographer: Composing Camera and Object Motion in 3D**  
   作者: J.Z., C.Y., N.G.  
   核心贡献: 首次将摄像机轨迹与物体运动统一建模，为 3D 可控视频生成提供全新的控制范式。

8. **Watch, Infer, Coordinate: Inferring Robot Partner Constraints for Zero-Shot Coordination**  
   作者: S.Y., Z.Z., V.T.  
   核心贡献: 开发了从机器人伙伴约束推断的零样本协调方法，推动多机器人协作任务的自动化。

9. **HumanoidToolBench: Benchmarking Humanoid Tool Use from Selection to Mobile Execution**  
   作者: K.J., S.P., O.K.  
   核心贡献: 构建覆盖工具选择、抓取、移动等全流程的端到端基准，填补现有工具使用评估的空白。

10. **DuoMind: Enabling Distributed Multi-Robot Coordination with Semantic Communication**  
    作者: H.Z., D.G., H.W.  
    核心贡献: 引入语义通信协议，使分布式多机器人系统能够高效共享意图，提升协同任务完成率。

### 🔧 方法与框架
11. **TACO

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*