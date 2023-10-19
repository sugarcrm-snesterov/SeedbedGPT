import SyntaxHighlighter from "react-syntax-highlighter"
import ListItem from "./ListItem"
import BotAvatar from "../Icons/BotAvatar"

function AnswerListItem(props: Parameters<typeof ListItem>[0]) {
  return (
    <ListItem
      {...props}
      icon={BotAvatar}
      sx={{
        margin: "0 auto 10px 0",
      }}
    >
      <SyntaxHighlighter
        children={props.primaryText}
        language="javascript"
        wrapLongLines={true}
      />
    </ListItem>
  )
}

export default AnswerListItem
