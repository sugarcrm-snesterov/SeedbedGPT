import AnswerListItem from "../../components/List/BotAnswerListItem"
import QuestionListItem from "../../components/List/UserQuestionListItem"
import { useState } from "react"
import List from "../../components/List/List"
import Box from "@mui/material/Box"
import ChatInput from "./ChatInput"
import { useLazyGetPromptQuery } from "./chat-api"
import { responseToDialogItem } from "./utills"

export type DialogItem = {
  text: string
  type: "q" | "a"
}

function ChatPanel() {
  const [triggerPrompt] = useLazyGetPromptQuery()
  const [dialog, setDialog] = useState<DialogItem[]>([])
  const [userInput, setUserInput] = useState("")

  const onInputChange = (value: string) => {
    setUserInput(value)
  }

  const makePrompt = async () => {
    const value = userInput.trim()

    if (!userInput) {
      return
    }

    setUserInput("")
    setDialog([...dialog, { text: value, type: "q" }])

    const response = await triggerPrompt({ prompt: value })
    const answerItems = responseToDialogItem(response.data)

    setDialog((dialog) => [...dialog, ...answerItems])
  }

  const listItems = dialog.map((item, index) => {
    if (item.type === "q") {
      return <QuestionListItem key={index} primaryText={item.text} />
    } else {
      return <AnswerListItem key={index} primaryText={item.text} />
    }
  })

  return (
    <Box className="chat-panel">
      <List className="chat-list">{listItems}</List>
      <ChatInput
        onSubmit={makePrompt}
        onChange={onInputChange}
        value={userInput}
      />
    </Box>
  )
}

export default ChatPanel
