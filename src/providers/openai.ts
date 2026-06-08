/**
 * OpenAI provider — wraps the openai SDK.
 *
 * Env vars:
 *   OPENAI_API_KEY   - API key
 *   OPENAI_BASE_URL  - endpoint override (optional)
 *   OPENAI_MODEL     - model name (default: gpt-4o)
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";
import { optionalEnv } from "./env.ts";

export class OpenAIProvider extends OpenAICompatibleProvider {
  readonly name = "openai";

  constructor(opts?: { apiKey?: string; baseURL?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? optionalEnv("OPENAI_API_KEY"),
      baseURL: opts?.baseURL ?? optionalEnv("OPENAI_BASE_URL"),
      model: opts?.model ?? optionalEnv("OPENAI_MODEL") ?? "gpt-4o",
    });
  }
}
