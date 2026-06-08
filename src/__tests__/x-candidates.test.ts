import { describe, expect, it } from "vitest";
import { buildXCandidatesPrompt, collectXCandidateSources } from "../x-candidates.ts";

describe("collectXCandidateSources", () => {
  it("keeps only prioritized non-empty source reports", () => {
    const sources = collectXCandidateSources({
      "ai-trending": "trending",
      "ai-cli": "cli",
      "ai-hf": "hf",
      "ai-web": "   ",
      "ai-community": "community",
    });

    expect(sources).toEqual({
      "ai-trending": "trending",
      "ai-hf": "hf",
      "ai-community": "community",
    });
  });
});

describe("buildXCandidatesPrompt", () => {
  it("builds a dated Chinese prompt with tweet candidate format", () => {
    const prompt = buildXCandidatesPrompt({ "ai-trending": "RyanCodrai/turbovec" }, "2026-06-08");

    expect(prompt).toContain("X 候选素材 2026-06-08");
    expect(prompt).toContain("今日最值得发的 5 条");
    expect(prompt).toContain("推文草稿");
    expect(prompt).toContain("===== ai-trending =====");
    expect(prompt).toContain("RyanCodrai/turbovec");
  });
});
