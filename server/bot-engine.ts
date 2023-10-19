import OpenAI from "openai";
import { apiKey } from "./config.js";
import { ChatCompletionCreateParams } from "openai/resources/chat/index";

const openai = new OpenAI({
  apiKey,
});

export const chatCompletion = async (data: {
  messages: ChatCompletionCreateParams["messages"];
}) => {
  console.log(data.messages);
  const chatCompletion = await openai.chat.completions.create({
    messages: data.messages,
    model: "gpt-3.5-turbo",
    temperature: 0,
  });

  //   console.log("bot says " + JSON.stringify(chatCompletion));

  return chatCompletion;
};
