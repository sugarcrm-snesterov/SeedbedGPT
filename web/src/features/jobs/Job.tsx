// FineTuningPage.js
import {
  Container,
  Typography,
  Paper,
  Grid,
  List,
  Button,
  ListItem,
  ListItemText,
  CircularProgress,
  Divider,
  Stack,
} from "@mui/material"
import { useJob } from "./jobs-hook"
import { Link } from "react-router-dom"

export const Job = () => {
  const {
    job,
    isFetching,
    isLoading,
    events,
    isLoadingEvents,
    isFetchingEvents,
  } = useJob()
  return (
    <Container maxWidth="lg">
      <Stack spacing={2} flexDirection="row">
        <Button variant="text">
          <Link
            to={"../jobs"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Back
          </Link>
        </Button>
      </Stack>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Detail isUpdating={isFetching} job={job} />
      )}

      <Paper style={{ padding: "20px", marginTop: "20px" }}>
        <Typography
          variant="h5"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          Job log:
          <CircularProgress
            size={20}
            style={{
              opacity: isLoadingEvents ? 1 : 0,
            }}
          />
        </Typography>
        <List>
          {events?.data?.map((event: any) => (
            <ListItem key={event.id}>
              <ListItemText primary={event.message} secondary={event.level} />
            </ListItem>
          ))}

          {/* Добавьте больше ListItem для других событий */}
        </List>
      </Paper>
    </Container>
  )
}

const Detail = ({ job, isUpdating }) => {
  return (
    <Paper style={{ padding: "20px", marginTop: "20px" }}>
      <Typography
        variant="h6"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        Job Detail:
        <CircularProgress
          size={22}
          style={{
            opacity: isUpdating ? 1 : 0,
          }}
        />
      </Typography>
      <Divider style={{ margin: "10px 0" }} />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">Job Name:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{job.fine_tuned_model}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Job ID:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{job.id}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Status:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            fontWeight="bold"
            color={{ succeeded: "green", failed: "red" }[job.status] ?? ""}
          >
            {job.status}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Trained tokens:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{job.trained_tokens}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Model:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{job.model}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Created / Finished</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            {Date(job.created_at).toString()}
            <br />
            {Date(job.finished_at).toString()}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">Training file:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            <Link to={`./file/${job.training_file}`}>Training file</Link>
          </Typography>
        </Grid>

        {job.validation_file ? (
          <>
            <Grid item xs={6}>
              <Typography variant="body1">Finished:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                {Date(job.finished_at).toString()}
              </Typography>
            </Grid>
          </>
        ) : null}

        {/* Добавьте больше полей для другой информации о задании, если это необходимо */}
      </Grid>
    </Paper>
  )
}

export default Job
