import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import List from "../../components/List/List"
import AnswerListItem from "../../components/List/BotAnswerListItem"
import QuestionListItem from "../../components/List/UserQuestionListItem"
import ChatInput from "./ChatInput"
import { useLazyGetCompletionQuery } from "./chat-api"
import { responseToDialogItem } from "./utills"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { addDialogItem, selectDialog, setDialog } from "./chat-slice"
import type { OpenAI } from "openai"

export type DialogItem = {
  text: string
  type: "q" | "a"
  rawAnswer?: OpenAI.Chat.Completions.ChatCompletion
}

function ChatPanel() {
  const dispatch = useAppDispatch()
  const [triggerPrompt] = useLazyGetCompletionQuery()
  const dialog = useAppSelector(selectDialog)
  const [userInput, setUserInput] = useState("")

  const onInputChange = (value: string) => {
    setUserInput(value)
  }

  const clearDialog = () => {
    dispatch(setDialog([]))
  }

  useEffect(() => {
    document.querySelector(".chat-list")?.scrollTo(0, 999999)
  }, [dialog])

  const makePrompt = async () => {
    const value = userInput.trim()

    if (!value) {
      return
    }

    setUserInput("")
    const loading = triggerPrompt({
      messages: [
        {
          role: "user",
          content: value,
        },
      ],
    })
    // if the history should be included we must include it after the request to prevent duplications
    dispatch(addDialogItem([{ text: value, type: "q" }]))
    const response = await loading
    const answerItems = responseToDialogItem(response.data)

    dispatch(addDialogItem(answerItems))
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
        onClear={() => clearDialog()}
        value={userInput}
      />
    </Box>
  )
}

export default ChatPanel
