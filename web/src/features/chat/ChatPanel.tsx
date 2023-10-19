import { useState } from "react"
import Box from "@mui/material/Box"
import List from "../../components/List/List"
import AnswerListItem from "../../components/List/BotAnswerListItem"
import QuestionListItem from "../../components/List/UserQuestionListItem"
import ChatInput from "./ChatInput"
import { useLazyGetCompletionQuery } from "./chat-api"
import { responseToDialogItem } from "./utills"
import { useAppSelector } from "../../app/hooks"

export type DialogItem = {
  text: string
  type: "q" | "a"
}

function ChatPanel() {
  const [triggerPrompt] = useLazyGetCompletionQuery()
  const [dialog, setDialog] = useState<DialogItem[]>([])
  const [userInput, setUserInput] = useState("")
  const systemRole = useAppSelector((state) => state.settings.systemRole)

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

    const messages = [
      {
        role: "system",
        content: systemRole,
      } as const,
      {
        role: "user",
        content: value,
      } as const,
    ]

    const response = await triggerPrompt({ messages })
    const answerItems = responseToDialogItem(response.data)

    setDialog((dialog) => [...dialog, ...answerItems])
  }

  let listItems = dialog.map((item, index) => {
    if (item.type === "q") {
      return <QuestionListItem key={index} primaryText={item.text} />
    } else {
      return <AnswerListItem key={index} primaryText={item.text} />
    }
  })

  return (
    <Box className="chat-panel">
      <List className="chat-list" emptyText="Start a new conversation">
        {listItems}
      </List>
      <ChatInput
        onSubmit={makePrompt}
        onChange={onInputChange}
        value={userInput}
      />
    </Box>
  )
}

export default ChatPanel
