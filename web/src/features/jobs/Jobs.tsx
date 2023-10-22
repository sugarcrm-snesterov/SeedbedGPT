import { Link } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"

import { useJobs } from "./jobs-hook"

const JobRow = ({ row, index }) => (
  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
    <TableCell component="th" scope="row">
      {index + 1}
    </TableCell>
    <TableCell align="left">
      <Link to={`/job/${row.id}`}>{row.fine_tuned_model}</Link>
    </TableCell>
    <TableCell align="right">{row.object}</TableCell>
    <TableCell align="right">
      {row.training_file}
      <br />
      {row.trained_tokens}
    </TableCell>
    <TableCell
      align="right"
      style={{ color: row.status === "succeeded" ? "green" : "" }}
    >
      {row.status}
    </TableCell>
  </TableRow>
)

function JobsPanel() {
  const { data = [], currentData, isLoading, isFetching } = useJobs()

  if (isLoading) return <div>Wait a bit. We are loading your jobs data</div>

  return (
    <Box>
      <Stack
        spacing={2}
        direction="row"
        style={{ justifyContent: "space-between" }}
      >
        <Button variant="text">
          <Link
            to="../job/create"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Create job
          </Link>
        </Button>
        <CircularProgress size={18} style={{ opacity: isFetching ? 1 : 0 }} />
      </Stack>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Model</TableCell>
              <TableCell align="right">Object</TableCell>
              <TableCell align="right">Training file / Tokens</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <JobRow key={row.id} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default JobsPanel
