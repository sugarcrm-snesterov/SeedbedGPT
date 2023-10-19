import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BotQuery, BotRawResponse } from "./types"
import type { BaseQueryFn } from "@reduxjs/toolkit/query"
import OpenAI from "openai"
import { ChatCompletionCreateParams } from "openai/resources/chat/index"

const remoteBotProvider = () => {
  return fetchBaseQuery({
    baseUrl: "api",
    method: "POST",
  })
}

const localBotProvider = () => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  })

  const botBaseQuery =
    (
      { baseUrl }: { baseUrl: string } = { baseUrl: "" },
    ): BaseQueryFn<
      {
        url: string
        body: BotQuery
      },
      unknown,
      unknown
    > =>
    async ({ url, body }) => {
      const [method, api] = url.split("/") as ["completions", "create"]

      try {
        const chatCompletion = await openai.chat[method][api]({
          messages: body.messages,
          model: "gpt-3.5-turbo",
        })

        return { data: chatCompletion }
      } catch (error: unknown) {
        return {
          error: {
            status: 500,
            data: (error as { message: string }).message,
          },
        }
      }
    }

  return botBaseQuery()
}

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: localBotProvider(),
  endpoints: (builder) => ({
    getCompletion: builder.query<BotRawResponse, BotQuery>({
      query: (body) => ({
        url: "completions/create",
        body,
      }),
    }),
  }),
})

export const { useLazyGetCompletionQuery } = chatApi
