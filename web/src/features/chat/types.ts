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

export type SimplePrompt = {
  prompt: string
}
