import OpenAI from "openai";
import { apiKey } from "./config.js";

const openai = new OpenAI({
  apiKey,
});

export const chatCompletion = async ({ prompt = "Say this is a test" }) => {
  console.log("asking bot for " + prompt);

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  console.log("bot says " + JSON.stringify(chatCompletion));

  return chatCompletion;
};
