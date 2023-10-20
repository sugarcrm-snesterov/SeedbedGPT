import { type DialogItem } from "./ChatPanel"
import { type BotRawResponse } from "./types"

export const responseToDialogItem = (
  response?: BotRawResponse,
): DialogItem[] => {
  const result: DialogItem[] = []

  if (!response) {
    return result
  }

  response.choices.forEach((choice) => {
    result.push({
      type: "a",
      text: choice.message.content ?? "",
      rawAnswer: response,
    })
  })

  return result
}
