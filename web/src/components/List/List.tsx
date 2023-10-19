import BaseList from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import React from "react"
import { Children } from "react"

type ListProps = React.PropsWithChildren<{
  className: string
  emptyText?: string
}>

export default function List(props: ListProps) {
  const hasChildren = Children.count(props.children) > 0

  const children = hasChildren ? (
    props.children
  ) : (
    <ListItem sx={{ height: "90%", justifyContent: "center", fontSize: 40 }}>
      <div>Start a new conversation</div>
    </ListItem>
  )

  return (
    <BaseList className={props.className} dense={false}>
      {children}
    </BaseList>
  )
}
