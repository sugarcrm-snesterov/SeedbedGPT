import { ChatCompletionCreateParams } from "openai/resources/chat/index"
import type OpenAI from "openai"

export type Choice = {
  index: number
  message: {
    role: string
    content: string
  }
  finish_reason: string
}

export type BotRawResponse = OpenAI.Chat.Completions.ChatCompletion

export type BotQuery = {
  messages: ChatCompletionCreateParams["messages"]
}
