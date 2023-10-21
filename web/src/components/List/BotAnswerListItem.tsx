import SyntaxHighlighter from "react-syntax-highlighter"
import ListItem from "./ListItem"
import BotAvatar from "../Icons/BotAvatar"
import ListItemText from "@mui/material/ListItemText"

function AnswerListItem(props: Parameters<typeof ListItem>[0]) {
  return (
    <ListItem
      {...props}
      icon={BotAvatar}
      sx={{
        margin: "0 auto 10px 0",
      }}
    >
      <pre className="list-item-pre">
        <ListItemText primary={props.primaryText} />
      </pre>
    </ListItem>
  )
}

export default AnswerListItem

// return (
//     <ListItem
//       {...props}
//       icon={BotAvatar}
//       sx={{
//         margin: "0 auto 10px 0",
//       }}
//     >
//       <SyntaxHighlighter
//         children={props.primaryText}
//         language="javascript"
//         wrapLongLines={true}
//       />
//     </ListItem>
//   )
