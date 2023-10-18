import ListItem from "./ListItem"
import FaceIcon from "@mui/icons-material/Face"

function QuestionListItem(props: Parameters<typeof ListItem>[0]) {
  return (
    <ListItem
      icon={FaceIcon}
      {...props}
      sx={{
        margin: "0 0 10px auto",
        flexDirection: "row-reverse",
      }}
    />
  )
}

export default QuestionListItem
