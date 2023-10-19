import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { setSystemRole, setTemperature, setModel } from "./settings-slice"

const nameActionMap = {
  systemRole: setSystemRole,
  model: setModel,
  temperature: setTemperature,
}

function SettingsPanel() {
  const systemRole = useAppSelector((state) => state.settings.systemRole)
  const model = useAppSelector((state) => state.settings.model)
  const temperature = useAppSelector((state) => state.settings.temperature)
  const dispatch = useAppDispatch()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    const action = nameActionMap[name as keyof typeof nameActionMap]
    dispatch(
      action.type === "chat/setTemperature"
        ? action(Number(value))
        : action(value),
    )
  }

  return (
    <Stack spacing={2} alignItems="stretch">
      <TextField
        name="systemRole"
        autoComplete="off"
        label="System Role"
        multiline={true}
        rows={3}
        value={systemRole}
        onChange={onChange}
      />
      <TextField
        name="model"
        autoComplete="off"
        label="Model"
        value={model}
        onChange={onChange}
      />
      <TextField
        name="temperature"
        autoComplete="off"
        label="Temperature"
        value={temperature}
        type={"number"}
        inputProps={{
          maxvalue: 10,
          minvalue: 0,
          maxLength: 2,
          step: "0.1",
        }}
        onChange={onChange}
      />
    </Stack>
  )
}

export default SettingsPanel
