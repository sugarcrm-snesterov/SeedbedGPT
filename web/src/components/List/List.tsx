import Box from "@mui/material/Box"
import BaseList from "@mui/material/List"
import React from "react"

type ListProps = React.PropsWithChildren<{
  className: string
}>

export default function List(props: ListProps) {
  return (
    <Box className={props.className}>
      <BaseList dense={false}>{props.children}</BaseList>
    </Box>
  )
}
