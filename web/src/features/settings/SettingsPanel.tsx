import { useState } from "react"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setSystemRole } from "./settings-slice"

function SettingsPanel() {
  const systemRole = useAppSelector((state) => state.settings.systemRole)
  const dispatch = useAppDispatch()

  const onSystemRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSystemRole(event.target.value))
  }

  return (
    <Stack spacing={2} alignItems="stretch">
      <TextField
        autoComplete="off"
        label="System Role"
        multiline={true}
        rows={3}
        value={systemRole}
        onChange={onSystemRoleChange}
      />
    </Stack>
  )
}

export default SettingsPanel
