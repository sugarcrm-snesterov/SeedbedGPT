import Box from "@mui/material/Box"
import Input from "@mui/material/Input"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import { useState } from "react"
import { useJob, useTrainingFiles } from "./jobs-hook"
import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const NewJob = () => {
  const { startJob } = useJob()
  const [suffix, setSuffix] = useState("")
  const [trainingFile, setTrainingFile] = useState("")
  const { data, isLoading, isFetching } = useTrainingFiles()

  return (
    <Box>
      <Stack spacing={5} padding={2}>
        <Typography
          variant="h6"
          component="div"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Link to="../jobs">Back</Link>
          Create a fine tuning job
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel htmlFor="training_files">Training file</InputLabel>
          <Select
            native
            defaultValue=""
            id="training_files"
            label="Grouping"
            onChange={(e) => setTrainingFile(e.target.value)}
          >
            <option aria-label="None" value="" />
            {isFetching || isLoading
              ? null
              : data?.map((file) => <option value={file}>{file}</option>)}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel htmlFor="suffix">Suffix</InputLabel>
          <Input
            id="suffix"
            placeholder="Specific suffix for your job"
            onChange={(e) => setSuffix(e.target.value)}
          />
        </FormControl>
        <Link
          to="../jobs"
          onClick={() =>
            startJob({
              suffix,
              trainingFile,
            })
          }
        >
          Create job
        </Link>
      </Stack>
    </Box>
  )
}
