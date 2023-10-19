import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

type InputProps = {
  onSubmit: () => void
  onChange: (value: string) => void
  value: string
}

function ChatInput({ value, onSubmit, onChange }: InputProps) {
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.code === "Enter") {
      onSubmit()
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
      <Button variant="contained" onClick={() => onSubmit()}>
        Send
      </Button>
    </Stack>
  )
}

export default ChatInput
