import { ChatCompletionCreateParams } from "openai/resources/chat/index"

export type Choice = {
  index: number
  message: {
    role: string
    content: string
  }
  finish_reason: string
}

export type BotRawResponse = {
  id: string
  object: string
  created: number
  model: string
  choices: Choice[]
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

export type BotQuery = {
  messages: ChatCompletionCreateParams["messages"]
}
