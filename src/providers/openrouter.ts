/**
 * OpenRouter provider — OpenAI-compatible endpoint via openrouter.ai.
 *
 * Env vars:
 *   OPENROUTER_API_KEY  - API key
 *   OPENROUTER_MODEL    - model name (default: anthropic/claude-sonnet-4)
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";
import { optionalEnv } from "./env.ts";

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export class OpenRouterProvider extends OpenAICompatibleProvider {
  readonly name = "openrouter";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? optionalEnv("OPENROUTER_API_KEY"),
      baseURL: OPENROUTER_BASE_URL,
      model: opts?.model ?? optionalEnv("OPENROUTER_MODEL") ?? "anthropic/claude-sonnet-4",
    });
  }
}
