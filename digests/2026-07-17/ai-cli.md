# AI CLI 工具社区动态日报 2026-07-17

> 生成时间: 2026-07-17 01:50 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

**AI CLI 工具横向对比报告（2026‑07‑17）**  

---

### 1. 生态全景  
当前 AI CLI 生态正从单一模型助手向 **多模型编排、企业级安全与跨平台协同** 方向迭代。社区普遍关注 **数据安全（防止静默覆盖/误删）、长任务稳定性（内存泄漏/崩溃）、多身份/多账号管理以及 IDE 深度可配置集成**。与此同时，厂商开始提供 **模型提供者插件、成本归因与策略治理**，以满足重度开发者和企业客户对可观性、可控性与可扩展性的需求。

---

### 2. 各工具活跃度对比  

| 工具 | 今日 Issues 数*（热点列表）* | 今日 PR 数*（重要进展）* | 最新 Release（日期/版本） | 备注 |
|------|----------------------------|--------------------------|---------------------------|------|
| **Claude Code** | 10 | 5 | v2.1.212（2026‑07‑17） | /fork→/subtask 語義調整；新增 auto‑mode reset；爆出 macOS 內核泄漏與資料安全問題 |
| **OpenAI Codex** | 10 | 10 | v0.144.5 & 0.145.0‑alpha.19（2026‑07‑17） | 性能慢、Windows sandbox、自訂模型提供者、危險命令偵測等熱點 |
| **Gemini CLI** | 10 | 10 | v0.52.0‑preview.0（2026‑07‑17） | 則） | Subagent 復原、Shell 執行卡住、安全沙箱逃逸、記憶體與 triage 模組 |
| **GitHub Copilot CLI** | 9 | 0 | v1.0.72‑0（2026‑07‑16） | 多輪子代理、Voice ASR 失效、BYOK/contextTier 問題；今日無 PR 更新 |
| **OpenCode** | 10 | 10 | v1.18.3（2026‑07‑17） | 內存泄漏 Megathread、剪貼板失效、模型請求失敗、UI/RTL、插件市場需求 |
| **DeepSeek TUI（CodeWhale）** | 10 | 10 | v0.9.0（CodeWhale，2026‑07‑16） | 品牌更名、Constitution/Fleet 編排、多提供商適配（Kimi、TelecomJS、OpenCode Zen）、記憶體與工作流優化 |
| **Kimi Code CLI** | 0 | 0 | — | 僅標記「User Safety: safe」，無公開動態 |
| **Pi** | 0 | 0 | — | 同上 |
| **Qwen Code** | 0 | 0 | — | 同上 |

\*Issues 數為今日社区熱點條目數（文中列出的前 10 條），可視為活躍度的下限參考。

---

### 3. 共同关注的功能方向  

| 功能方向 | 涉及工具（代表 Issue/需求） | 核心訴求 |
|----------|----------------------------|----------|
| **資料安全／防止誤覆蓋或刪除** | Claude Code（#75490、#78273）、OpenCode（#13984 剪貼板、#20695 內存）、Gemini CLI（#28423 沙箱逃逸） | 需要檔案操作強制確認、回滚或 sandbox 隔離；避免未授權覆寫或工作樹誤刪 |
| **長任務/穩定性（記憶體泄漏、崩溃）** | Claude Code（#66020 macOS 內核泄漏）、OpenCode（#20695 內存 Megathread）、Gemini CLI（#21409 代理卡死） | 提供堆快照工具、資源監控、更穩定的子代理/上下文管理 |
| **多身份/多賬號管理** | Claude Code（#36151 移動端多賬號）、OpenAI Codex（#10867 自訂模型提供者）、DeepSeek TUI（#1481 OpenCode Zen、#4417 Kimi OAuth） | 支援無需共享郵箱的賬號切換、团队级配额與費用歸屬 |
| **IDE 深度集成與可控性** | Claude Code（#24726 VS Code 自動附加）、GitHub Copilot（#3762 contextTier 無效、#4024 Voice ASR） | 提供可開關的自動附加、明確的 token/usage 顯示、跨編輯器一致的行為 |
| **企業級網路/政策支援** | OpenAI Codex（#30112 出站允許列表）、OpenCode（#37410 WebFetch 安全域）、Gemini CLI（#28403 變數展開繞過） | 需要可設定的 outbound allowlist、MDM 原則腳本、網路沙箱細緻控制 |
| **跨平台（WSL/Windows）原生體驗** | OpenAI Codex（#23198 Windows 桌面極慢、#25799 WSL2 沙箱失敗）、OpenCode（#27474/#27755 WSL 服務器啟動）、Gemini CLI（#28345 macOS Seatbelt） | 改善 Windows sandbox、WSL 原生遠程、macOS 安全配置與效能 |
| **後台/多會話統一治理** | Claude Code（#/fork→/subtask、#77962 僵尸會話）、GitHub Copilot（#4024 Voice 多輪子代理）、DeepSeek TUI（#3205 Fleet 編排、#4010 Conductor Agent） | 會話生命週期可視化、自動清理僵尸後台任務、跨工作樹會話歷史共享 |
| **模型行為可解释性與成本控管** | OpenAI Codex（#27613 AWS Bedrock 成本歸因）、DeepSeek TUI（#4010 WhaleFlow Conductor、#4415 工具預算）、Claude Code（#47509 Team 20x 档位） | 價格/配额透明化、token 使用明細、企業級配额档位 |
| **安全強化（注入檢測、沙箱）** | OpenAI Codex（#33455 danger命令偵測、#78057 exec 注入）、Gemini CLI（#28423 Seatbelt 沙箱逃逸、#28403 變數展開繞過）、OpenCode（#37410 WebFetch 安全域） | 擴大危險命令偵測範圍、嚴格沙箱政策、變數展開與路徑信任檢查 |
| **記憶體與上下文管理** | Gemini CLI（#26522 Auto Memory 低信號重試、#26525 減少日誌）、OpenCode（#20695 內存）、Claude Code（#75759 上下文壓縮丟失會話內記憶） | 改進記憶體回收、提供上下文壓縮可選開關、降低長對話資訊遺失 |

---

### 4. 差异化定位分析  

| 工具 | 功能侧重 | 目标用户 | 技术路线/特色 |
|------|----------|----------|---------------|
| **Claude Code** | 代理分叉（/fork、/subtask）、自動模式、跨會話代理管理 | 需要強大後台代理編排與多任務并行的開發者 | 基於 Anthropic Claude 模型，強調 **代理生命周期**（fork→subtask）與 **自動模式可重置** |
| **OpenAI Codex** | 性能優化、危險命令偵測、自訂模型提供者、企業級網路/成本治理 | 大規模企業與對延遲敏感的後端服務團隊 | Rust 執行，注重 **沙箱安全**、**模型提供者插件**與 **使用量可觀測性** |
| **Gemini CLI** | Subagent 穩定性、零依賴 OS 沙箱、記憶體與 triage 編排 | 重視安全沙箱與長時間運行代理的研究/實驗組 | Google Gemini 模型，**安全沙箱**（Seatbelt、變數展開防護）+ **Triage Worker** 作為編排核心 |
| **GitHub Copilot CLI** | 多輪子代理、Voice ASR、BYOK、context tier 調整 | 已深度集成 VS Code/GitHub 工作流的開發者 | 基於 OpenAI GPT‑4/Codex，**多輪對話**與 **語音輸入**為差異化點 |
| **OpenCode** | 內存泄漏治理、剪貼板、UI/RTL、插件/Marketplace、模型請求穩定性 | 想要 **可自插件市場**、**本地化 UI** 以及 **長期穩定使用** 的團隊 | 以 **插件生態**、**市場** 為核心，強調 **跨平台 UI** 與 **模型網關可靠性** |
| **DeepSeek TUI（CodeWhale）** | 多模型 Fleet 編排、Constitution 驅動配置、多提供商適配（Kimi、TelecomJS、OpenCode Zen） | 需要 **統一多模型路由**、**工作流引擎**、**細緻權限與記憶體** 的進階用戶 | 自建 **Constitution**、**WhaleFlow**、**Fleet**、**Moraine 記憶體** 四層架構，致力於 **模型無關的編排平台** |
| **Kimi / Pi / Qwen** | 無

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-17）

## 1. 热门 Skills 排行（PR，按社区关联热度 / 讨论密度）
> 注：所提供 PR 评论数字段为 undefined，以下依据关联 Issue 讨论量、复现次数及更新活跃度综合排序；状态均为 OPEN（未合并）。

- **skill-creator 评估修复套件**（#1298、#1099、#1050、#1323、#362、#539）  
  功能：修复 `run_eval.py` 在 Windows / 跨平台下的 trigger 检测失效、UTF-8  panic、YAML 误解析等，使 Skill 描述优化循环可用。  
  热点：Issue #556 记录 10+ 独立复现“recall=0%”，属系统性阻塞缺陷。  
  状态：OPEN | 链接：[#1298](https://github.com/anthropics/skills/pull/1298) [#556](https://github.com/anthropics/skills/issues/556)

- **document-typography**（#514）  
  功能：AI 生成文档的排版质量控制（孤字换行、寡段、编号错位）。  
  热点：“Claude 生成的每个文档都受影响”，用户虽不主动提但痛点普遍。  
  状态：OPEN | 链接：[#514](https://github.com/anthropics/skills/pull/514)

- **ODT 文档技能**（#486）  
  功能：OpenDocument(.odt/.ods) 创建、模板填充、转 HTML。  
  热点：补齐开源文档格式支持，呼应文档类 Skills 需求。  
  状态：OPEN | 链接：[#486](https://github.com/anthropics/skills/pull/486)

- **frontend-design 改进**（#210）  
  功能：提升前端设计 Skill 的清晰度与可操作性。  
  热点：让 Claude 单轮对话内可真正遵循指令。  
  状态：OPEN | 链接：[#210](https://github.com/anthropics/skills/pull/210)

- **skill-quality / security-analyzer**（#83）  
  功能：元技能，对 Skill 做五维质量与安全性分析。  
  热点：社区对 Skill 治理与可信分发关注上升（见 Issue #492）。  
  状态：OPEN | 链接：[#83](https://github.com/anthropics/skills/pull/83)

- **self-audit 质量门禁**（#1367）  
  功能：交付前机械校验 + 四维推理审计。  
  热点：与 Issue #1385“推理质量门管道”提案呼应，新兴方向。  
  状态：OPEN | 链接：[#1367](https://github.com/anthropics/skills/pull/1367)

- **testing-patterns**（#723）  
  功能：全栈测试模式（单元测试、React 组件测试等）。  
  热点：补齐工程化测试覆盖。  
  状态：OPEN | 链接：[#723](https://github.com/anthropics/skills/pull/723)

- **pyxel 复古游戏**（#525）  
  功能：Pyxel 引擎 MCP 服务，做像素风游戏。  
  热点：创意 Coding 场景，持续更新至 7 月。  
  状态：OPEN | 链接：[#525](https://github.com/anthropics/skills/pull/525)

## 2. 社区需求趋势（来自 Issues）
- **组织内共享与分发**：#228 请求 Claude.ai 内组织级 Skill 共享（👍7）。
- **安全与信任边界**：#492 指出社区 Skill 冒用 `anthropic/` 命名空间（34 评论，最高）。
- **文档格式与质量**：#189 重复安装、#514/#486 排版与 ODT，文档类需求密集。
- **Skill 创建器健壮性**：#556/#1061 等 Windows 与评估失效，属底层工具链诉求。
- **治理 / 质量门禁**：#412 Agent Governance、#1385 推理质量门。
- **平台集成**：#29 Bedrock 使用、#16 暴露为 MCP。

## 3. 高潜力待合并 Skills（活跃 OPEN PR）
- **#1298** skill-creator 评估修复（多问题根因，关联 #556，高复现）  
- **#1323** run_eval trigger 检测修复（直接解决 recall=0%）  
- **#1099 / #1050** Windows 兼容修复（PATHEXT、编码、管道）  
- **#514** document-typography（普适文档痛点）  
- **#1367** self-audit（质量门禁新范式，7 月仍更新）  
- **#83** quality/security-analyzer（呼应安全议题 #492）

## 4. Skills 生态洞察
当前社区最集中的诉求是：**让 Skill 创建、评估与分发链条可信且跨平台可用——既要修好 skill-creator 的底层缺陷，也要建立安全与质量边界。**

---

---

# Claude Code 社区动态日报 | 2026-07-17

> 数据来源：github.com/anthropics/claude-code | 统计窗口：过去 24 小时

---

## 1. 今日速览

- **v2.1.212 发布**：`/fork` 命令改为创建独立后台会话（原行为迁移至 `/subtask`），新增 `claude auto-mode reset` 恢复默认自动模式配置。
- **社区热度最高**：移动端多账号切换需求（#36151，467 👍）与 VS Code 扩展禁用自动附加设置（#24726，185 👍）持续领跑。
- **严重缺陷浮现**：macOS 内核区泄漏导致 CLI 崩溃（#66020）、Desktop 工作树机制误删 gitignored 目录（#75490）、Claude 无提示覆盖用户文件（#78273）等数据安全/稳定性问题集中爆发。

---

## 2. 版本发布

### v2.1.212
| 变更 | 说明 |
|------|------|
| `/fork` 语义调整 | 现将当前对话复制为**独立后台会话**（在 `claude agents` 列表新增一行），原在会话内启动子代理的行为迁移至新命令 `/subtask` |
| `claude auto-mode reset` | 新增命令，用于恢复默认 auto-mode 配置，带确认提示 |

> 🔗 [Release v2.1.212](https://github.com/anthropics/claude-code/releases/tag/v2.1.212)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 热度 | 核心诉求 / 影响 | 关注理由 |
|---|------|------|------|----------------|----------|
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | 移动端多账号切换（无需共享邮箱） | OPEN | 132 评 / 467 👍 | 移动端无法在不同账号间切换，强制共享邮箱 | **最高呼声功能**，跨设备/多身份开发者刚需 |
| [#24726](https://github.com/anthropics/claude-code/issues/24726) | VS Code 扩展：增加禁用打开文件/选区自动附加的设置 | OPEN | 60 评 / 185 👍 | 侧边栏自动附加干扰工作流，需可配置关闭 | **IDE 集成体验**核心痛点，影响日常编码流 |
| [#30112](https://github.com/anthropics/claude-code/issues/30112) | Cowork 网络出站允许列表失效：自定义域名被 403 拦截 | OPEN | 52 评 / 49 👍 | 允许列表配置不生效，阻断企业内网/私有域名访问 | **企业级网络策略**阻断，影响团队采纳 |
| [#49933](https://github.com/anthropics/claude-code/issues/49933) | Windows 原生 WSL 远程集成 | CLOSED | 23 评 / 80 👍 | Desktop 版需原生支持 WSL 远程开发 | 已关闭但高关注，反映 **Windows/WSL 生态**期待 |
| [#47509](https://github.com/anthropics/claude-code/issues/47509) | Team 计划需增加 Max 20x 等效档位（面向高强度用户） | OPEN | 19 评 / 59 👍 | 现有 Premium 6.25x 不足，CLI 重度用户需更高配额 | **商业化/定价模型**反馈，关乎大客户留存 |
| [#66020](https://github.com/anthropics/claude-code/issues/66020) | macOS 26.5.1 内核区泄漏：claude.exe 在 ~20GB 崩溃，泄漏率随 Agent 负载 21→1027/sec | OPEN | 15 评 / 2 👍 | 长时间运行/高并发 Agent 导致内存失控崩溃 | **严重稳定性缺陷**，阻断生产级长任务 |
| [#75490](https://github.com/anthropics/claude-code/issues/75490) | Desktop 工作树机制误删主工作树的 gitignored 目录（venv、模型权重等，**数据丢失**） | OPEN | 1 评 / 0 👍 | 工作树清理逻辑错误删除未跟踪目录，仅 .gitignore 字面路径受影响 | **数据安全红线**，不可逆损失，需最高优先级修复 |
| [#78273](https://github.com/anthropics/claude-code/issues/78273) | Claude 无确认覆盖现有用户文件——不可逆数据丢失 | OPEN | 1 评 / 0 👍 | 未提示、未授权直接覆盖用户手写研究内容 | **核心信任破坏**，文件操作安全机制缺失 |
| [#77615](https://github.com/anthropics/claude-code/issues/77615) | v2.1.202 TUI 在 tmux 中渲染错乱：重叠文本、缓冲区损坏 | OPEN | 4 评 / 0 👍 | 仅 tmux 内复现，裸终端正常 | **回归Bug**，影响主流终端复用器用户 |
| [#77962](https://github.com/anthropics/claude-code/issues/77962) | 非 Git 目录派生的后台会话无法从 agents 视图删除："worktree could not be removed" | OPEN | 1 评 / 8 👍 | 非仓库目录启动的后台任务成“永久僵尸” | **资源泄漏/清理缺陷**，积累污染会话列表 |

---

## 4. 重要 PR 进展（全量 5 条）

| # | 标题 | 状态 | 类型 | 核心变更 |
|---|------|------|------|----------|
| [#27204](https://github.com/anthropics/claude-code/pull/27204) | 修复 Hook 验证器：支持插件包装格式与可选匹配器 | CLOSED | Fix | `validate-hook-schema.sh` 自动识别 `{"hooks":{...}}` 包装格式，兼容现有插件 `hooks.json`；修复可选 `matcher` 字段校验 |
| [#78057](https://github.com/anthropics/claude-code/pull/78057) | security-guidance：标记 Python `exec()` 为代码注入汇点 | OPEN | Security | 在 `patterns.py` 新增 `exec_injection` 规则，覆盖 `.py` 文件，弥补仅有 `eval()` 检测的缺口 |
| [#78049](https://github.com/anthropics/claude-code/pull/78049) | mdm：修复 `Set-ClaudeCodePolicy.ps1` 在 32 位 PowerShell 下写入 Program Files (x86) | OPEN | Fix/Windows | Intune 默认 32 位宿主导致 `$env:ProgramFiles` 指向错误路径，强制 64 位上下文写入正确目录 |
| [#58646](https://github.com/anthropics/claude-code/pull/58646) | plugin: git-aware-history —— 修复跨 Git worktree 的会话碎片化 | CLOSED | Feature | 会话历史不再按原始 CWD 分桶，改为按 Git 仓库根键入，支持 `/resume` 跨 worktree 发现、删除 worktree 不再孤立历史 |
| [#77977](https://github.com/anthropics/claude-code/pull/77977) | docs(plugin-dev)：文档化 `skipLfs` marketplace 源选项 | OPEN | Docs | 补充 `github`/`git` 源对象的 `skipLfs` 字段说明与示例，避免 Git LFS 大文件下载 |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **多账号/多身份管理** | #36151 (移动端)、#47509 (Team 计划分级) | ⭐⭐⭐⭐⭐ 极高 |
| **IDE 深度集成可控性** | #24726 (VS Code 自动附加)、#78327 (扩展本地化) | ⭐⭐⭐⭐ 高 |
| **企业级网络/策略支持** | #30112 (允许列表)、#78049 (MDM 政策脚本) | ⭐⭐⭐⭐ 高 |
| **Windows/WSL 原生体验** | #49933 (WSL 远程)、#78326/78328 (Desktop/VS Code Bug) | ⭐⭐⭐ 中高 |
| **后台/多会话统一治理** | #77531 (跨会话任务看板)、#77962 (僵尸会话清理)、#77362 (MCP 菜单守卫) | ⭐⭐⭐ 中高 |
| **模型行为可解释性与控制** | #78300 (Agent 覆盖用户指令)、#78325 (Fable 5 接地气不足)、#77798 (中转消息不可见) | ⭐⭐⭐ 中 |
| **安全/数据完整性** | #75490 (误删数据)、#78273 (静默覆盖)、#78057 (exec 注入检测) | ⭐⭐⭐⭐⭐ 关键 |
| **性能/资源泄漏治理** | #66020 (内核泄漏)、#75759 (上下文压缩丢失会话内记忆) | ⭐⭐⭐⭐ 高 |

---

## 6. 开发者关注点·痛点总结

1. **数据安全零容忍**  
   - Desktop 工作树误删 `.gitignore` 目录（#75490）、CLI 无提示覆盖文件（#78273）引发强烈不信任，**文件操作需强制确认/回滚机制**。

2. **长任务稳定性不足**  
   - macOS 内核泄漏导致 20GB 崩溃（#66020）、上下文压缩丢失会话内记忆（#75759），**Agent 编排/长上下文场景不可用**。

3. **跨平台体验割裂**  
   - Windows/WSL 原生支持缺失（#49933）、Desktop 代码标签无响应（#78326）、VS Code 扩展行为不可配（#24726）、**tmux 渲染回归（#77615）**。

4. **多会话/后台编排缺

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# 2026-07-17 OpenAI Codex 社区动态日报

---

## 1. **今日速览**
今日标志着OpenAI Codex发布新版本增量（0.144.5）和Alpha版本（0.145.0-alpha.19），重点优化安全机制和性能问题。社区活跃度高，活跃Issue和PR同步推动技术迭代，速度慢及Windows性能问题等长期痛点仍受关注。

---

## 2. **版本发布**
- **代码发布 v0.144.5**  
  - 优化危险命令检测逻辑，涵盖更多`rm`命令形式，并提供明确拒绝原因（#33455）。  
  - [完整 changelog](https://github.com/openai/codex/compare/rust-v0.144.4...rust-v0.144.5)  
- **0.145.0-alpha.19 发布**  
  - 推进代码支持功能，但仍处于预览阶段。  
  - 相关发布记录[查看Comparisons](https://github.com/openai/codex/compare/rust-v0.144.5...rust-v0.145.0-alpha.19)

---

## 3. **社区热点 Issues**
### 1. #21527 [功能缺陷] Codex 性能极慢  
**为何重要**：这是社区反复提起的性能瓶颈问题，申诉数月受伤务已18投票支持。  
**社区反馈**：多平台用户证实插件与桌面应用响应慢。  
**链接**：[查看讨论](https://github.com/openai/codex/issues/21527)

### 2. #10867 [功能需求] 支持自定义模型提供者  
**为何重要**：开发者需想自定义模型流程，社区接受度高（48upvote）。  
**链接**：[详情](https://github.com/openai/codex/issues/10867)

### 3. #23198 [性能问题] Windows代码桌面极慢  
**为何重要**： longtemps受VPM影响，受影响用户量明确（18评论）。  
**链接**：[问题描述](https://github.com/openai/codex/issues/23198)

### 4. #25799 [兼容性bug] WSL2沙盒命令失败  
**为何重要**：影响跨平台开发团队，需较快解决。  
**链接**：[问题链接](https://github.com/openai/codex/issues/25799)

### 5. #30527 [安全问题] 微软边卫干扰  
**为何重要**：新版更新引发实际用户反馈（12评论），涉及合规性风险。  
**链接**：[故障报告](https://github.com/openai/codex/issues/30527)

### 6. #32314 [性能瓶颈] Windows沙盒Command延迟  
**为何重要**：sanbox配置影响效率，直接影响用户体验。  
**链接**：[技术问题](https://github.com/openai/codex/issues/32314)

### 7. #32593 [功能缺失] 客户端会话管理问题  
**为何重要**：新界面缺失功能影响生产力，新版本反馈多数负面的（8评论）。  
**链接**：[说明](https://github.com/openai/codex/issues/32593)

### 8. #24948 [资源管理] 日志文件增长问题  
**为何重要**：内存占用问题与性能关联，可能导致崩溃。  
**链接**：[查看日志](https://github.com/openai/codex/issues/24948)

### 9. #27613 [功能需求] AWS Bedrock成本归因支持  
**为何重要**：企业用户需要预算监控功能，申诉数量以增长速度。  
**链接**：[功能提案](https://github.com/openai/codex/issues/27613)

### 10. #33712 [工具调用问题] 背景终端任务被忽略  
**为何重要**：影响异步任务可靠性，关键开发环境受影响。  
**链接**：[具体问题](https://github.com/openai/codex/issues/33712)

---

## 4. **重要 PR 进展**
### 1. #33695 [功能开发] Amazon Bedrock自定义传输支持  
**内容**：允许自定义`base_url`和授权机制，灵活支持企业集成。  
**链接**：[代码提交](https://github.com/openai/codex/pull/33695)

### 2. #31571 [优化] Track Remote plugin ID for Analytics  
**内容**：在插件调用中引入ID标识，增强调用可追踪性。  
**链接**：[详细说明](https://github.com/openai/codex/pull/31571)

### 3. #33687 [性能优化] 降低数据写入  
**内容**：修复Migrations过程中无用写入导致的IO负荷。  
**链接**：[实施细节](https://github.com/openai/codex/pull/33687)

### 4. #33684 [代码重构] 封装TUI确认流程  
**内容**：将确认请求抽象为内部结构体，简化事件路由。  
**链接**：[提交记录](https://github.com/openai/codex/pull/33684)

### 5. #33665 [功能升级] 通用环境刷新机制  
**内容**：保护Auto-executor下任务状态一致性。  
**链接**：[代码变更](https://github.com/openai/codex/pull/33665)

### 6. #33659 [增强] Code模式图片输出限制  
**内容**：强制使用`data:`协议，避免不安全URL。  
**链接**：[PR链接](https://github.com/openai/codex/pull/33659)

### 7. #33657 [架构改进] 重新初始化子代理角色  
**内容**：恢复加载后的子代理角色配置。  
**链接**：[实施记录](https://github.com/openai/codex/pull/33657)

### 8. #33636 [文档优化] 环境加载规则说明  
**内容**：规范何时需要等待环境就绪。  
**链接**：[PR](https://github.com/openai/codex/pull/33636)

### 9. #33645 [并发处理] 多终端并发写入支持  
**内容**：支持不同终端会话并行写入。  
**链接**：[代码提交](https://github.com/openai/codex/pull/33645)

### 10. #33639 [依赖清理] 移除废弃WebRTC依赖  
**内容**：清理未用WebRTC crate减少 unnecessary dependencies。  
**链接**：[PR链接](https://github.com/openai/codex/pull/33639)

---

## 5. **功能需求趋势**
- **性能优化**：多个工程中心问题（速度慢、内存占用）集中讨论。  
- **企业级扩展**：Bedrock集成、成本归因、企业审计能力需求激增。  
- **跨平台兼容**：Win/WSL/MacOS问题量大，支持沙盒配置差异的解决方案走主流路径。  
- **插件生态**：远程插件ID追踪、第三方扩展可靠性问题长期寻求解决。

---

## 6. **开发者关注点**
- **性能瓶颈**：Windows平台的sandbox和Git进程开销影响效率。  
- **资源管理**：高频对文件历史记录/日志的清理需求。  
- **安全防护**：危险命令过滤界限模糊导致误拒/漏拒。  
- **成本控制**：企业用户需要模型调用可追踪和预算工具。  
- **跨平台一致性**：Windows沙盒与WSL/WebRTC配置差异导致轻微功能脱节。  

--- 

**数据来源：github.com/openai/codex**


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 2026-07-17

## 今日速览

Gemini CLI 社区聚焦安全漏洞修复与子代理稳定性问题，v0.52.0-preview.0 版本引入 CI 配置优化与 triage 模块；多个高优先级 bug 及时提出，涉及子代理行为异常、Shell 执行卡顿等核心问题。

## 版本发布

### v0.52.0-preview.0
- **PR #28216**：Refactor 优化，排除临时 CI 配置文件以获得更干净的工作区上下文  
- **PR 新功能**：新增 triage worker 核心 foundational 模块（由 @chadd28 提交）  
🔗 [发布页面](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-preview.0)

### v0.51.0
- 包含 v0.50.0-preview.1 的变更日志
- 修复 no_proxy 测试问题（PR #28131）
- 日常版本维护更新  
🔗 [发布页面](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0)

## 社区热点 Issues

| 编号 | 标题 | 重要性 | 社区反馈 |
|------|------|--------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success | ⭐ P1 关键错误 | 10 条评论，揭示代理未正确处理回合限制 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | ⭐ P1 严重问题 | 7 条评论，8 个赞，导致 CLI 永久卡死 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" | ⭐ P1 阻塞问题 | 4 条评论，3 个赞，影响基本 shell 功能 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST-aware file reads | ⭐ P2 功能探索 | 7 条评论，关注代码解析效率 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model's bash affinity via Zero-Dependency OS Sandboxing | ⭐ P2 安全增强 | 8 条评论，1 个赞，提升 shell 安全性 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | ⭐ P1 质量保障 | 7 条评论，76+ 行为评估测试需求 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent fails in wayland | ⭐ P1 系统兼容 | 4 条评论，1 个赞，Linux 桌面支持缺失 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low-signal sessions | ⭐ P2 内存系统 | 5 条评论，优化记忆体效率 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | ⭐ P2 隐私安全 | 3 条评论，加强数据保护 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior | ⭐ P2 行为控制 | 3 条评论，1 个赞，防止危险操作 |

## 重要 PR 进展

| 编号 | 标题 | 类型 | 说明 |
|------|------|------|------|
| [#28423](https://github.com/google-gemini/gemini-cli/pull/28423) | Fix macOS Seatbelt sandbox escape | 🔒 安全修复 | 修复沙盒逃逸漏洞 CVE-2023-32364 类问题 |
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | Block $VAR and ${VAR} variable expansion bypass | 🔒 安全加固 | 修复变量展开绕过安全检查 |
| [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) | Limit recursive reasoning turns | 性能优化 | 限制每次请求最多 15 轮推理，防止资源耗尽 |
| [#28424](https://github.com/google-gemini/gemini-cli/pull/28424) | Align macOS permissive Seatbelt profiles | 安全配置 | 统一沙盒策略为 deny-by-default |
| [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) | Enforce path trust check in a2a-server | 安全增强 | 环境变量加载前进行路径信任验证 |
| [#28405](https://github.com/google-gemini/gemini-cli/pull/28405) | Prevent scroll position jump | 用户体验 | 修复滚动位置在内容更新时跳动的问题 |
| [#28352](https://github.com/google-gemini/gemini-cli/pull/28352) | Sanitize issue title in untrusted_context | 安全改进 | 防止问题标题进行 prompt injection |
| [#28411](https://github.com/google-gemini/gemini-cli/pull/28411) | Post comment before auto-closing feature requests | 社区体验 | 在自动关闭功能请求前留下说明性评论 |
| [#28345](https://github.com/google-gemini/gemini-cli/pull/28345) | Implement LLM triage orchestrator | 新功能 | 构建问题自动分流系统 |
| [#28304](https://github.com/google-gemini/gemini-cli/pull/28304) | Show clear message when account has no Code Assist tier | 用户体验 | 改进隐私设置错误提示 |

## 功能需求趋势

1. **子代理系统优化**：多个 Issue 聚焦提升子代理（subagent）可靠性与行为一致性
2. **AST 代码分析**：社区对利用抽象语法树提升代码理解效率表征热情
3. **Shell 安全与性能**：零依赖沙盒、变量展开防护等安全特性受关注
4. **记忆体与评估系统**：Auto Memory 优化及组件级评估测试需求旺盛
5. **跨平台兼容性**：Wayland 支持等系统集成问题亟待解决

## 开发者关注点

- **卡顿与挂起**：Shell 执行、代理调用频繁卡死
- **配置识别问题**：Symlink 代理文件、settings.json 覆盖失效
- **工具数量限制**：超过 128 个工具时出现 400 错误
- **输出渲染问题**：换行、滚动、中文排版等 UI 细节
- **隐私与安全**：变量注入、沙盒逃逸、敏感信息处理

---

*数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**2026‑07‑17 Copilot CLI 社区动态日报**

---

### 1. 今日速览  
- **v1.0.72‑0** 正式发布，新增多轮子代理支持、Claude 4.5+ 工具搜索，并改进排程提示与 Emoji 渲染。  
- **社区关注**：Voice ASR bug（#4024）和自定义模型改进（#3891、#4139）成为最新热点；多轮子代理之类的新功能正在被积极讨论。  

---

### 2. 版本发布  
**v1.0.72‑0** (2026‑07‑16)  
| 类别 | 更新 | 说明 |
|------|------|------|
| Added | *Multi‑turn subagents always enabled* | 允许在正在运行的子代理后继续发送消息。 |
| Added | *Tool search for Claude Haiku 4.5+* | 在 Claude 4.5+ 上启用工具搜索。 |
| Improved | *Scheduled prompts as steering messages* | 当代理忙时，排程的提示会被发送为 steering 消息。 |
| Fixed | *Emoji shortcodes no longer render with a* | 解决 Emoji 渲染问题。 |
| Fixed | *copilot -p --autopilot hang fix Nour* | `--autopilot` 现在按照 `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` 正常超时。 |
| Fixed | *Subagents model picker retains reasoning & context tier* | 修复重新打开 `/subagents` 时保持上下文层级与推理力度。 |

---

### 3. 社区热点 Issues（Driven by 10 最具 обеспечение вп, 最高评论/响应度）  
| # | 标题 | 重要性/社区反馈 | GitHub 链接 |
|---|------|-------------------|-------------|
| **4024** | Voice mode: all bundled ASR models fail silently | 11评论，大规模影响 Voice 体验；被社区列为“must‑fix”。 | <https://github.com/github/copilot-cli/issues/4024> |
| **4016** | BYOK (COPILOT_PROVIDER_*) still rejected in –acp mode | 3评论，核心身份验证问题；对 BYOK 用户友好性影响极大。 | <https://github.com/github/copilot-cli/issues/4016> |
| **4097** | apply_patch stores deleted binary in session history | 3评论，导致会话超过 5 MB 限制，表现为慢速/崩溃。 | <https://github.com/github/copilot-cli/issues/4097> |
| **3762** | config option contextTier does nothing | 4评论，长期以来导致上下文失效。 | <https://github.com/github/copilot-cli/issues/3762> |
，坚持 5‑min read…
| **3767** | Oversized attachment permanently wedges session | 2评论，前提与 #4097 相关；影响附件处理。 Congresso.* | <https://github.com/github/copilot-cli/issues/3767> |
| **3451** | contextTier=long_context not applied on startup | 2评论，非交互式启动下长上下文未生效。 | <https://github.com/github/copilot-cli/issues/3481> |
| **1152** | More Verbose Token Information | 2评论，标签对监控 & SLA 重要；社区强烈需求。 | <https://github.com/github/copilot-cli/issues/1152> |
| **3580** | cmd+click open links twice | 2评论，TUI 与 GUI 行为不一致；影响开发者体验。 | <https://github.com/github/copilot-cli/issues/3580> |
| **4122** | Subagents resolve relative markdown links against cwd | 1评论，多代理项目文档引用失败。 | <https://github.com/github/copilot-cli/issues/4122> |

---

### 4. 重要 PR 进展  
> 本日 NiveauPR 数据为 **0**，目前社区暂无 PR 更新。请关注 *GitHub Copilot CLI → Pull requests* 页面获取实时信息。  

---

### 5. 功能需求趋势  
| 主题 | 体现的 Issue | 影响 | 说明 |
|------|--------------|------|------|
| **上下文与记忆** | #3762, #3767, #3451, #1152 | 影响代理推理质量、稳定性与监控 | 需要更可靠的长上下文支持、附件大小管理与更鲜明 token-renowned 数据。 |
| **多轮子代理** | #4024 (ASR bug) | 影响 Voice & 交互 | 需改进子代理状态管理和多轮对话体验。 |
| **自定义模型/Provider** | #4016, #3891, #4139 | 影响企业化部署 | 需要完善 BYOK、模型覆盖和工具整合。 |
| **工具与权限** | #3580, #4142, #4155 | 影响安全 & 使用效率 | 更细粒度权限、MCP 工具继承与错误信息清晰。 |
| **IDE/编辑器集成** | #4122, #4141, #4138 | 影响本地开发体验 | 提升 markdown 链接、Derived Data 存放 & 背景压缩流程。 |
| **性能与稳定性** | #4097, #3767, #4138 | 影响长会话可靠 | 明确逃逸错误、容量限制、后台处理。 |

---

### 6. 开发者关注点  
1. **身份验证与 BYOK**：云内部署朝向 BYOK 的开发者面对 ` Giant `/ `Unauthorized` 问题。  
2. **上下文扩展与记忆**：自定义 `contextTier: long_context` 的局限性、附件尺寸超限和 `apply_patch` 产生冗余内容。  
3. **多轮子代理逻辑**：Voice 模式与子代理的状态同步失效导致错误循环。  
4. **工具/权限管理**：对权限申请流程、MCP 工具共享与路径权限细致化有强烈诉求。  
5. **IDE 交互体验**：Markdown 路径解析错误、Derived Data 写入不规范、TUI 文本选择缺失等。  
6. **监控与诊断**：Token 详细信息缺ાળા<ipt>，需这种功能来排查 SLA。  

---

> **温馨提示**：若需要快速查看热点 Issue 的上下文或贡献 PR，请直接点击对应的 GitHub 链接。祝大家编码愉快！

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报（2026‑07‑17）**  

---

### 1. 今日速览
- **新版本 v1.18.3** 仅含微小改进（Up‑Arrow 关闭子agent选择器）与两个 Desktop bug‑fix（主页滚动、WSL 服务器启动就绪）。  
- 社区仍围绕 **内存泄漏**、**粘贴失效**、**模型请求失败**（Upstream request failed）以及 **UI/国际化**（RTL、旧布局保留）展开热烈讨论。  
- 开发者正推进 **通知服务容错**、**WebFetch 安全域**、**构建版本号注入** 等基础设施修复，并在 TUI 主题、会话恢复等细节上持续打磨。

---

### 2. 版本发布（过去 24 小时）

| 版本 | 关键更新 | 链接 |
|------|----------|------|
| **v1.18.3** | • 添加 **Up Arrow** 快捷键，在子agent选择器首项选中时关闭选择器。<br>• **Desktop**：修复主页滚动导致的 sticky 头部与会话列表错位。<br>• **Desktop**：确保 WSL 服务器加载在启动就绪检查前完成，避免首次启动卡死。 | [anomalyco/opencode releases/tag/v1.18.3](https://github.com/anomalyco/opencode/releases/tag/v1.18.3) |

---

### 3. 社区热点 Issues（按评论数选取 10 条）

| # | 标题 | 评论 / 👍 | 为什么重要 | 社区反应 | 链接 |
|---|------|----------|------------|----------|------|
| #20695 | **Memory Megathread** | 110 / 89 | 集中追踪内存泄漏，社区呼吁提供堆快照以定位问题。 | 大量用户反馈在长时间使用后内存持续增长，影响稳定性。 | [issue #20695](https://github.com/anomalyco/opencode/issues/20695) |
| #13984 | **can not copy and paste in opencode CLI** | 53 / 26 | 剪贴板功能失效直接影响日常代码粘贴工作流。 | 多位用户确认在 Windows/Linux/macOS 均出现 “copied to clipboard” 但粘贴为空。 | [issue #13984](https://github.com/anomalyco/opencode/issues/13984) |
| #37012 | **[FEATURE] : keep legacy layout option** | 9 / 10 | 保留旧布局可切换到经典 UI，方便习惯旧版工作流的用户。 | 支持者称新布局增加了导航步骤，反对者则希望保留两种方案共存。 | [issue #37012](https://github.com/anomalyco/opencode/issues/37012) |
| #27474 | **TypeError: Failed to fetch** (explore/agent 未跳转) | 8 / 0 | 前端请求失败导致子agent探索界面不可用。 | 出现后只能刷新页面，影响探索新 agent 的体验。 | [issue #27474](https://github.com/anomalyco/opencode/issues/27474) |
| #27755 | **TypeError: Failed to fetch shortly after opening** | 6 / 3 | 启动后不久即出现 fetch 错误，后续所有 Prompt 均无响应。 | 用户报告在打开后几秒内即失联，需重启才能恢复。 | [issue #27755](https://github.com/anomalyco/opencode/issues/27755) |
| #28696 | **[FEATURE]: Plugin/Agent/Skills/etc marketplace** | 6 / 23 | 统一的插件/agent 市场是社区长期期待的生态扩展。 | 众多赞同票显示对插件发现、版本管控的一致需求。 | [issue #28696](https://github.com/anomalyco/opencode/issues/28696) |
| #35319 | **[FEATURE]: RTL (Arabic) rendering broken** | 6 / 0 | 阿拉伯语等 RTL 语言在 Desktop 中显示错位，影响非英文用户。 | 提供了完整的修复方案，社区期待尽快合并。 | [issue #35319](https://github.com/anomalyco/opencode/issues/35319) |
| #36506 | **All paid OpenCode Zen models fail with ‘Upstream request failed’** | 5 / 2 | 付费 Zen 模型均返回上游请求失败，免费模型正常，疑似鉴权或网关问题。 | 影响付费用户的核心模型使用，亟待后端排查。 | [issue #36506](https://github.com/anomalyco/opencode/issues/36506) |
| #25117 | **Bug: Custom skills not shown in / autocomplete menu** | 4 / 4 | 自定义技能虽然可手动调用，却不出现在自动补全列表，降低可发现性。 | 用户期望技能像内置命令一样被自动提示。 | [issue #25117](https://github.com/anomalyco/opencode/issues/25117) |
| #37376 | **[FEATURE]: Need a Place to add Connectors** | 4 / 0 | 统一管理 Skills、Connectors、Plugins、MCP 服务器的入口缺失。 | 类比 Claude Code/Codex 的设置页，期望有一个集中配置面板。 | [issue #37376](https://github.com/anomalyco/opencode/issues/37376) |

> **其余高热度 Issue**（如 #27689、#34697、#37255 等）同样值得关注，但因篇幅限制在此不再枚举。

---

### 4. 重要 PR 进展（选取 10 条具有实际影响的 PR）

| # | PR 标题 | 类型 | 关键改动 | 链接 |
|---|----------|------|----------|------|
| #37190 | **fix(notification): handle unavailable server during initialization** | Bugfix | 在 WSL 环境中，当通知服务器尚未注册时提供后备状态，避免渲染进程崩溃。 | [PR #37190](https://github.com/anomalyco/opencode/pull/37190) |
| #36286 | **refactor(tui): remove dead session renderer** | Refactor | 删除已废弃的 AssistantMessage / ExplorationSummary 渲染路径，清理无用状态与导入。 | [PR #36286](https://github.com/anomalyco/opencode/pull/36286) |
| #37409 | **fix(build): add OPENCODE_VERSION define for Node.js Desktop build** | Bugfix | 为 Node.js Desktop 构建补充 `OPENCODE_VERSION` 宏，使安装版本正确解析，防止回退到 `local` 导致的插件安装失败。 | [PR #37409](https://github.com/anomalyco/opencode/pull/37409) |
| #37411 | **fix(tui): publish session event when custom tool import fails** | Bugfix | 自定义工具加载错误时仅记录警告，且现在会向 TUI 发出会话事件，使错误可见。 | [PR #37411](https://github.com/anomalyco/opencode/pull/37411) |
| #37410 | **fix(webfetch): scope always-allow to domain instead of all URLs** | Bugfix | 将 WebFetch 的 “always allow” 白名单从 `\['*'\]` 改为仅当前域，防止恶意跨站请求。 | [PR #37410](https://github.com/anomalyco/opencode/pull/37410) |
| #37406 | **fix(desktop): guard destroyed recovery windows** | Bugfix | 增强对已销毁的 BrowserWindow / WebContents 的容错，确保崩溃恢复对话框仍能正常显示。 | [PR #37406](https://github.com/anomalyco/opencode/pull/37406) |
| #36752 | **fix(opencode): read cache write tokens from raw usage** | Bugfix | 修正 Anthropic 兼容网关下的 cache.write 统计，使缓存写入计费正确。 | [PR #36752](https://github.com/anomalyco/opencode/pull/36752) |
| #37404 | **[contributor] feat(tui): add hovered theme state** | Feature | 在主题状态 schema 中加入 `$hovered`，提供光悬停时的配色，改进交互反馈。 | [PR #37404](https://github.com/anomalyco/opencode/pull/37404) |
| #37401 | **[contributor] fix(tui): derive session surface colors from hues** | Refactor | 会话表面颜色现在基于主题色调自动计算，确保亮/暗模式下颜色协调一致。 | [PR #37401](https://github.com/anomalyco/opencode/pull/37401) |
| #37113 | **[needs:compliance] fix(build): add OPENCODE_VERSION define for Node.js Desktop build** (已合并) | Bugfix | 与 #37409 相同，确保 Desktop 构建版本号可见，防止插件安装错误。 | [PR #37113](https://github.com/anomalyco/opencode/pull/37113) |

> 其余 PR（如 #37295、#37375、#36781 等）也在进行中，重点在于模型思考块保留、Token 最小化规则调整以及多认证配置文件支持。

---

### 5. 功能需求趋势（从全部 Issues 中提炼）

| 趋势方向 | 典型 Issue / 评论热度 | 说明 |
|----------|----------------------|------|
| **插件/市场生态** | #28696 (23 👍)、#37376、#25117 | 用户亟需统一的插件、Agent、Skills 市场，以便发现、版本管理和一键安装。 |
| **粘贴与剪贴板** | #13984 (53 👍) | 剪贴板失效是影响日常编辑的高频痛点，跨平台一致性亟待修复。 |
| **内存与性能** | #20695 (110 👍)、#36752 | 长时间使用后内存泄漏导致卡顿；社区希望提供堆快照工具和更细粒度的资源监控。 |
| **模型连接可靠性** | #36506 (5 👍)、#37231、#37056 | 付费 Zen 模型频繁返回 “Upstream request failed”，免费模型正常，指向网关或鉴权层问题。 |
| **国际化（RTL）** | #35319、#34697、#33201 | 阿拉伯语、波斯语等 RTL 语言的 UI 布局、对齐、表格方向损坏，社区提供了完整修复方案。 |
| **经典布局保留** | #37012 (10 👍) | 部分用户对新布局导航路径不满，请求保留旧版布局作为可切换选项。 |
| **Prompt 队列与中断控制** | #37381 (3 👍)、#29186 (3 👍) | 希望在流式响应期间能够排队后续 Prompt 或在不中断当前流的情况下注入新指令。 |
| **自动重试与指数退避** | #37412 (新建) | 对 LLM API 超时或服务器停滞的情况增加自动重试机制，提升容错能力。 |
| **WebFetch 安全域** | #37410（PR） | 将 “always allow” 从全局 `\['*'\]` 改为单域，防止潜在的跨站滥用。 |
| **通知服务容错** | #37190（PR） | 在 WSL 或网络延迟情况下避免因通知服务器不可用而导致的渲染进程崩溃。 |

---

### 6. 开发者关注点（痛点 & 高频需求）

1. **内存泄漏检测与修复**  
   - 需要官方提供 heap snapshot 收集文档及自动化分析脚本。  
   - 长期运行后内存占用持续升级，影响 CI/CD 

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-17

> 数据源：`github.com/Hmbown/CodeWhale` (原 DeepSeek-TUI)  
> 统计窗口：过去 24 小时（2026-07-16 ~ 2026-07-17）

---

## 1. 今日速览

- **品牌重塑正式落地**：v0.9.0 发布，项目正式更名为 **CodeWhale**（代号 `codewhale`），原 `deepseek-tui` npm 包停止维护，标志着从单一模型客户端向多模型编排平台的战略转型完成。
- **核心架构大规模清理**：单日合并/提交 15+ 个 PR，集中清理遗留内存系统、Todo 工具、遗留绑定，并行化 Web 端 Agent 任务与 KV I/O，技术债偿还力度极大。
- **生态扩展加速**：新增 TelecomJS、OpenCode/Zen 提供商支持，Kimi K3/OAuth 进入一线适配，多模型路由与 Fleet 编排能力持续落地。

---

## 2. 版本发布

### **v0.9.0 — CodeWhale 正式版** `2026-07-16`
> **核心变更**：
- **品牌更名**：产品定名 CodeWhale（Shannon Labs），CLI 命令、npm 包、Release 资产统一为 `codewhale` 小写。
- **废弃声明**：遗留 npm 包 `deepseek-tui` 不再发布新版本，v0.8.x 用户需迁移至 `codewhale`。
- **架构基石**：确立 Constitution（宪法）驱动的配置体系、Fleet 多模型编排、WhaleFlow 工作流引擎、Moraine 记忆系统为四大核心支柱。

🔗 [Release v0.9.0](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.0)

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 类型 | 评论/👍 | 关注理由 |
|---|---|---|---|---|
| **#3793** | v0.9.2 Setup: 构建引导式本地化 Constitution 创建器 | Enhancement / UX / Security | 16 / 0 | **首次运行体验重构核心**，涉及安全策略与用户自主权的边界定义，直接影响新用户留存。 |
| **#3205** | v0.9.3: Fleet 模型类别、Loadout 自动化、语义路由角色 | Enhancement / Architecture | 11 / 0 | **Fleet 编排核心设计**，统一 TUI/CLI/Subagents 的模型选择器，关键路径阻塞项。 |
| **#3792** | v0.9.2 Setup: 让首次上手像启动 CodeWhale 而非改配置 | Enhancement / UX | 8 / 0 | 与 #3793 配套，强调 **语言优先、变量分离**，解决“配置地狱”痛点。 |
| **#4227** | 帮助贡献者同步高速迭代的 `main` 分支开发环境 | Workflow / DX | 7 / 0 | **开发者体验刚需**，日均 10+ PR 的节奏下，环境同步工具链缺失严重。 |
| **#1481** | 支持 OpenCode Go/Zen（提供 DeepSeek-V4） | Enhancement / Provider | 7 / 1 | 社区高呼声，**低成本 V4 接入**需求，PR #3781 正在适配中。 |
| **#4010** | v0.9.4 WhaleFlow: Conductor Agent 编排 Agent 集合 | Enhancement / Architecture | 4 / 0 | **多 Agent 编排终局**，从单任务向 DAG 编排演进，商业化潜力大。 |
| **#4417** | v0.9.1: 一线 Kimi OAuth 设备登录与 Token 生命周期 | Enhancement / Auth / Security | 3 / 0 | 国产模型厂商 **首个 OAuth 标准化接入**，为后续厂商接入定范式。 |
| **#4415** | 强制执行逐轮工具预算与 Write-first 约束 | Bug / Reliability / Security | 1 / 0 | **运行时安全硬指标**，GLM-5.2 违规调用 13 次 read_file 暴露策略执行漏洞。 |
| **#3306** | v0.9.3 重构策略：拆分大型 Rust 单体为自有模块 | Refactor / Architecture | 3 / 0 | 技术债集中爆发点，`engine.rs` 超大文件阻碍并行开发与风险隔离。 |
| **#2494** | macOS + iTerm2 用户问题汇总（快捷键/换行/中止/历史） | Bug / UX / Platform | 3 / 0 | **Mac 核心用户群痛点集中反馈**，长期未解决，影响专业开发者口碑。 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心价值 |
|---|---|---|---|
| **#4452** | 🧹 移除遗留 TodoAddTool / TodoUpdateTool | ✅ Closed | **工具链规范化**：`work_update` 成为唯一规范进度面，消除并发冲突隐患。 |
| **#4454** | 🔒 修复过度宽松的 CORS 头（`Any` → 显式列表） | 🟢 Open | **安全基线加固**，防止自定义头部滥用，合规必做。 |
| **#4384** | 适配 HarmonyOS：workflow-js Cargo.toml 绑定生成 | 🟢 Open | **平台拓展关键链路**，解决 `rquickjs` 在 OHOS 无预编译绑定问题。 |
| **#4370** | 新增 TelecomJS 提供商支持（配置与目录集成） | 🟢 Open | **生态补全**：修复 `/v1/models` 目录刷新不触发导致仅显示 1 个模型。 |
| **#3781** | Feat: OpenCode Zen Provider 适配 | 🟢 Open | 直击 #1481 需求，**低成本 DeepSeek-V4 接入**落地在即。 |
| **#4437 / #4441** | ⚡ `runPrReview` 并行化（`Promise.all` 替代串行循环） | ✅ Closed | **Web Agent 任务延迟大幅降低**，PR 审查并发度提升数倍。 |
| **#4436 / #4432 / #4440 / #4450** | ⚡ KV I/O 批量并行化（LinkCheck / SemanticDrift / Triage / Stale） | ✅ Closed | **Cloudflare Workers 成本与延迟双优**，批量化成标准模式。 |
| **#4444 / #4442 / #4446 / #4445** | 🧹 清理遗留 Memory 推送/注入/Remember Tool/Quick-add 绑定 | 🟢 Open / Closed | **Moraine 记忆系统独大**，彻底移除 v0.8.71 前遗留代码，减少认知负荷。 |
| **#4430** | 🧪 `repair_json_text_once` 测试覆盖 + 修复数组提取 Bug | 🟢 Open | **模型输出容错能力**增强，修复仅提取 Object 忽略 Array 的旧逻辑。 |
| **#4438** | 🧪 ProviderRegistry::new 单测 | ✅ Closed | 核心注册表**测试基线建立**，为后续重构提供安全网。 |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issues / PRs | 社区热度信号 |
|---|---|---|
| **多模型统一路由与 Fleet 编排** | #3205, #4010, #4065, #2026 | 架构层 Issue 讨论深、跨版本贯穿，核心护城河。 |
| **首次运行 / 上手体验重构** | #3793, #3792, #3961, #3807 | 连续 3 个版本里程碑，UX 投入持续加大。 |
| **国产/长尾模型厂商一线接入** | #1481, #3781, #4370, #4387, #4417 | Kimi、TelecomJS、OpenCode、Xiaomi MiMo 密集适配。 |
| **Agent 编排与 Workflow 引擎** | #4010, #3229, #3230, #4227 | Conductor、Swarm、Ledger、IR 落地加速。 |
| **平台兼容性拓展** | #2625, #4384, #2494, #805 | HarmonyOS、macOS/iTerm2、Win10 滚动/渲染修复并行。 |
| **运行时安全与资源治理** | #4415, #3793, #4413 | 工具预算、OAuth、打包完整性成硬性指标。 |
| **开发者效能工具链** | #4227, #3306, #4438, #4430 | 环境同步、模块化重构、单测覆盖、JSON 修复工具。 |

---

## 6. 开发者关注点与痛点

1. **Mac / iTerm2 体验断层**  
   - 快捷键映射缺失、多行粘贴误触发、Ctrl+C 无法中止仅关闭会话、历史会话检索不便（#2494 长期 3 评论无解）。

2. **Windows 终端渲染与滚动异常**  
   - 编辑框聚焦时上下文不可滚动（#1106、#805），任务结果右侧截断，基础交互稳定性待加强。

3. **大文件/报告保存性能极差**  
   - 合并分析报告写入缓存命中率极低、耗时巨长（#1732），疑似全量写入或索引缺失。

4. **图片渲染混乱**  
   - 执行过程中出现图片错位/重叠（#894），TUI 图片协议支持不完善。

5. **高频迭代下的开发环境同步缺失**  
   - 日均 10+ PR，贡献者需手动 `pull → rebuild → test`，#4227 呼声高但尚无官方方案。

6. **配置即代码的复杂度陡增**  
   - Constitution、Fleet Policy、Provider Catalog、Tool Lifecycle 多层配置交织，文档滞后于代码（#3810、#4401）。

7. **遗留系统清理节奏过快导致插件/脚本失效**  
   - Todo Tool、Memory Push、Remember Tool 连续移除，第三方扩展适配跟不上，建议提供迁移指南与弃用周期公告。

---

## 📌 明日关注建议

- **v0.9.1 里程碑切线**：#4401 规划的 Operator-Control 映射表是否冻结范围？
- **OpenCode Zen PR #3781** 合并后，是否同步更新 Provider 文档与模型选择器 UI？
- **HarmonyOS 适配 #4384** 能否在 CI 增加 `aarch64-unknown-linux-ohos` 检查职位？
- **Mac 端基础交互修复**（#2494 子任务化）能否纳入 v0.9.1 Bug Bash？

---

*报告生成时间：2026-07-17 08:00 UTC | 数据截止：2026-07-17 06:00 UTC*  
*下一期预告：关注 v0.9.1 RC 发布与 Fleet Loadout Auto 落地进度。*

</details>

---
*本日报由 [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar) 自动生成。*