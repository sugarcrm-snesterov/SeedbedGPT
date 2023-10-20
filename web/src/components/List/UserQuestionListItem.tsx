import ListItem from "./ListItem"
import FaceIcon from "@mui/icons-material/Face"
import ListItemText from "@mui/material/ListItemText"

function QuestionListItem(props: Parameters<typeof ListItem>[0]) {
  return (
    <ListItem
      {...props}
      icon={FaceIcon}
      sx={{
        margin: "0 0 10px auto",
        flexDirection: "row-reverse",
      }}
    >
      <pre className="list-item-pre">
        <ListItemText primary={props.primaryText} />
      </pre>
    </ListItem>
  )
}

export default QuestionListItem
