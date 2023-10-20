import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import SubmitButton from "./SubmitButton"

type InputProps = {
  onSubmit: () => void
  onChange: (value: string) => void
  onClear: () => void
  value: string
}

const actions = [
  {
    name: "send", // main action
    label: "Send",
  },
  {
    name: "clear",
    label: "Clear",
  },
]

function ChatInput({ value, onSubmit, onChange, onClear }: InputProps) {
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.code === "Enter") {
      onSubmit()
    }
  }

  const onButtonClick = (action: string) => {
    if (action === "send") {
      onSubmit()
    } else if (action === "clear") {
      onClear()
    }
  }

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <TextField
        autoComplete="off"
        label="Prompt"
        multiline={true}
        sx={{
          flexGrow: 1,
        }}
        maxRows={10}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        onKeyDown={onKeyUp}
      />
      <SubmitButton onAction={onButtonClick} options={actions} />
    </Stack>
  )
}

export default ChatInput
