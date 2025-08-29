import { Anthropic } from "@anthropic-ai/sdk"
import OpenAI from "openai"

import {
	DEEP_SEEK_DEFAULT_TEMPERATURE,
	OPEN_ROUTER_PROMPT_CACHING_MODELS,
	shengSuanYunDefaultModelId,
	shengSuanYunDefaultModelInfo,
} from "@roo-code/types"

import { convertToOpenAiMessages } from "../transform/openai-format"
import { ApiStreamChunk } from "../transform/stream"
import { addCacheBreakpoints as addAnthropicCacheBreakpoints } from "../transform/caching/anthropic"
import { addCacheBreakpoints as addGeminiCacheBreakpoints } from "../transform/caching/gemini"
import { SingleCompletionHandler } from "../index"
import { DEFAULT_HEADERS } from "./constants"
import { BaseProvider } from "./base-provider"
import { getModels } from "./fetchers/modelCache"
import { ApiHandlerOptions, ModelRecord } from "../../shared/api"
import { getApiRequestTimeout } from "./utils/timeout-config"
import { getModelParams } from "../transform/model-params"
import { OpenRouterReasoningParams } from "../transform/reasoning"
import { convertToR1Format } from "../transform/r1-format"

type CompletionParams = OpenAI.Chat.ChatCompletionCreateParams & {
	transforms?: string[]
	include_reasoning?: boolean
	// https://openrouter.ai/docs/use-cases/reasoning-tokens
	reasoning?: OpenRouterReasoningParams
}

// Same interface as OpenRouter's CompletionUsage
interface CompletionUsage {
	completion_tokens?: number
	completion_tokens_details?: {
		reasoning_tokens?: number
	}
	prompt_tokens?: number
	prompt_tokens_details?: {
		cached_tokens?: number
	}
	total_tokens?: number
	cost?: number
	cost_details?: {
		upstream_inference_cost?: number
	}
}

export class ShengSuanYunHandler extends BaseProvider implements SingleCompletionHandler {
	protected options: ApiHandlerOptions
	private client: OpenAI
	protected models: ModelRecord = {}

	constructor(options: ApiHandlerOptions) {
		super()
		this.options = options
		const baseURL = "https://router.shengsuanyun.com/api/v1"
		const apiKey = this.options.shengSuanYunApiKey ?? "not-provided"
		const timeout = getApiRequestTimeout()
		this.client = new OpenAI({ baseURL, apiKey, defaultHeaders: DEFAULT_HEADERS, timeout })
	}

	async *createMessage(
		systemPrompt: string,
		messages: Anthropic.Messages.MessageParam[],
	): AsyncGenerator<ApiStreamChunk> {
		let { id: modelId, maxTokens, temperature, topP, reasoning } = await this.fetchModel()
		if (
			(modelId === "google/gemini-2.5-pro-preview" || modelId === "google/gemini-2.5-pro") &&
			typeof reasoning === "undefined"
		) {
			reasoning = { exclude: true }
		}

		// Convert Anthropic messages to OpenAI format.
		let openAiMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
			{ role: "system", content: systemPrompt },
			...convertToOpenAiMessages(messages),
		]

		// DeepSeek highly recommends using user instead of system role.
		if (modelId.startsWith("deepseek/deepseek-r1") || modelId === "perplexity/sonar-reasoning") {
			openAiMessages = convertToR1Format([{ role: "user", content: systemPrompt }, ...messages])
		}

		// https://openrouter.ai/docs/features/prompt-caching
		// TODO: Add a `promptCacheStratey` field to `ModelInfo`.
		if (OPEN_ROUTER_PROMPT_CACHING_MODELS.has(modelId)) {
			if (modelId.startsWith("google")) {
				addGeminiCacheBreakpoints(systemPrompt, openAiMessages)
			} else {
				addAnthropicCacheBreakpoints(systemPrompt, openAiMessages)
			}
		}

		const transforms = (this.options.openRouterUseMiddleOutTransform ?? true) ? ["middle-out"] : undefined
		const completionParams: CompletionParams = {
			model: modelId,
			...(maxTokens && maxTokens > 0 && { max_tokens: maxTokens }),
			temperature,
			top_p: topP,
			messages: openAiMessages,
			stream: true,
			stream_options: { include_usage: true },
			...(transforms && { transforms }),
			...(reasoning && { reasoning }),
		}

		const stream = await this.client.chat.completions.create(completionParams)

		let lastUsage: CompletionUsage | undefined = undefined

		for await (const chunk of stream) {
			// OpenRouter returns an error object instead of the OpenAI SDK throwing an error.
			if ("error" in chunk) {
				const error = chunk.error as { message?: string; code?: number }
				console.error(`OpenRouter API Error: ${error?.code} - ${error?.message}`)
				throw new Error(`OpenRouter API Error ${error?.code}: ${error?.message}`)
			}

			const delta = chunk.choices[0]?.delta

			if ("reasoning" in delta && delta.reasoning && typeof delta.reasoning === "string") {
				yield { type: "reasoning", text: delta.reasoning }
			}

			if (delta?.content) {
				yield { type: "text", text: delta.content }
			}

			if (chunk.usage) {
				lastUsage = chunk.usage
			}
		}

		if (lastUsage) {
			yield {
				type: "usage",
				inputTokens: lastUsage.prompt_tokens || 0,
				outputTokens: lastUsage.completion_tokens || 0,
				cacheReadTokens: lastUsage.prompt_tokens_details?.cached_tokens,
				reasoningTokens: lastUsage.completion_tokens_details?.reasoning_tokens,
				totalCost: (lastUsage.cost_details?.upstream_inference_cost || 0) + (lastUsage.cost || 0),
			}
		}
	}

	public async fetchModel() {
		this.models = await getModels({ provider: "shengsuanyun" })
		return this.getModel()
	}

	override getModel() {
		const id = this.options.shengSuanYunModelId ?? shengSuanYunDefaultModelId
		let info = this.models[id] ?? shengSuanYunDefaultModelInfo

		const isDeepSeekR1 = id.startsWith("deepseek/deepseek-r1") || id === "perplexity/sonar-reasoning"
		const params = getModelParams({
			format: "openrouter",
			modelId: id,
			model: info,
			settings: this.options,
			defaultTemperature: isDeepSeekR1 ? DEEP_SEEK_DEFAULT_TEMPERATURE : 0,
		})
		return { id, info, topP: isDeepSeekR1 ? 0.95 : undefined, ...params }
	}

	async completePrompt(prompt: string) {
		let { id: modelId, maxTokens, temperature, reasoning } = await this.fetchModel()
		const completionParams: CompletionParams = {
			model: modelId,
			max_tokens: maxTokens,
			temperature,
			messages: [{ role: "user", content: prompt }],
			stream: false,
			...(reasoning && { reasoning }),
		}

		const response = await this.client.chat.completions.create(completionParams)

		if ("error" in response) {
			const error = response.error as { message?: string; code?: number }
			throw new Error(`OpenRouter API Error ${error?.code}: ${error?.message}`)
		}

		const completion = response as OpenAI.Chat.ChatCompletion
		return completion.choices[0]?.message?.content || ""
	}
}
