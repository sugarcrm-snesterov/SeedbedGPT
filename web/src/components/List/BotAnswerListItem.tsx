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
    />
  )
}

export default AnswerListItem
