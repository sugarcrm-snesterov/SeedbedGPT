import OpenAI from "openai";
import { apiKey } from "./config.js";
import { ChatCompletionCreateParamsNonStreaming } from "openai/resources/chat/index";

const openai = new OpenAI({
  apiKey,
});

export const chatCompletion = async (
  data: ChatCompletionCreateParamsNonStreaming
) => {
  const payload: ChatCompletionCreateParamsNonStreaming = {
    model: "gpt-3.5-turbo",
    temperature: 0,
    ...data,
  };
  const chatCompletion = await openai.chat.completions.create(payload);

  console.log("bot says " + JSON.stringify(chatCompletion.choices[0]));

  return chatCompletion;
};
