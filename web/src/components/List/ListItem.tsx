import FolderIcon from "@mui/icons-material/Folder"
import BaseListItem, {
  ListItemProps as BaseListItemProps,
} from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import BotAvatar from "../Icons/BotAvatar"

type ListItemProps = React.PropsWithChildren<{
  primaryText: string
  icon?: React.FC
}> &
  BaseListItemProps

function ListItem(props: ListItemProps) {
  const { primaryText, icon, ...rest } = props
  const IconEl = icon || null
  const { children } = props

  return (
    <BaseListItem {...rest} className="list-item">
      {IconEl && (
        <ListItemAvatar>
          <Avatar>
            <IconEl />
          </Avatar>
        </ListItemAvatar>
      )}
      {children}
      {!children && <ListItemText primary={primaryText} />}
    </BaseListItem>
  )
}

export default ListItem
