import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { SimplePrompt, BotRawResponse } from "./types"

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "api",
    method: "POST",
  }),
  endpoints: (builder) => ({
    getPrompt: builder.query<BotRawResponse, SimplePrompt>({
      query: (params) => ({
        url: "prompt",
        body: { prompt: params.prompt },
      }),
    }),
  }),
})

export const { useLazyGetPromptQuery } = chatApi
