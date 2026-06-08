import { callLlm } from "./report.ts";

const SOURCE_ORDER = [
  "ai-trending",
  "ai-agents",
  "ai-hf",
  "ai-hn",
  "ai-ph",
  "ai-web",
  "ai-community",
] as const;

export function collectXCandidateSources(reports: Record<string, string>): Record<string, string> {
  const selected: Record<string, string> = {};
  for (const id of SOURCE_ORDER) {
    const content = reports[id]?.trim();
    if (content) selected[id] = content;
  }
  return selected;
}

export function buildXCandidatesPrompt(reports: Record<string, string>, dateStr: string): string {
  const sources = collectXCandidateSources(reports);
  const sourceBlocks = Object.entries(sources)
    .map(([id, content]) => `\n\n===== ${id} =====\n${content.slice(0, 12_000)}`)
    .join("");

  return `你是一个中文 AI 资讯编辑，任务是从 agents-radar 的日报中挑选适合发 X/Twitter 的素材。

日期：${dateStr}

筛选标准：
- 新鲜：今天发布、开源、上榜、融资、更新或明显升温。
- 具体：必须有明确项目、模型、产品、论文、公司或社区讨论对象。
- 可验证：优先保留 GitHub、Hugging Face、官网、论文、Hacker News、Product Hunt 等原始链接。
- 有传播性：能引发开发者兴趣、讨论、转发或收藏。
- 有观点空间：不只是“发布了”，还要能说清“为什么重要”。

排除：
- 泛泛总结、没有链接、重复信息、事实不确定且无法标注来源的内容。
- 过度夸张、无法从原文支持的结论。

请输出 Markdown，格式必须如下：

# X 候选素材 ${dateStr}

## 今日最值得发的 5 条

### 1. <标题>
- 来源：<报告来源和原始链接>
- 推荐分：<0-15>
- 为什么值得发：<一句话>
- 推荐角度：<一句话>
- 推文草稿：
  <120-280 字中文推文，保留链接，不要 hashtag 堆砌>
- 风险提示：<如果有不确定性就写，没有就写“低”>

## 备选素材

- <标题>｜<推荐角度>｜<链接>

日报内容如下：${sourceBlocks}`;
}

export async function generateXCandidates(
  reports: Record<string, string>,
  dateStr: string,
): Promise<string | null> {
  const sources = collectXCandidateSources(reports);
  if (Object.keys(sources).length === 0) return null;
  return callLlm(buildXCandidatesPrompt(sources, dateStr), 4096);
}
