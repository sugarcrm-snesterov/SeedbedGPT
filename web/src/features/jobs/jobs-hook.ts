import { useParams } from "react-router-dom"
import {
  useCancelJobMutation,
  useJobsQuery,
  useStartJobMutation,
  useTrainingFilesQuery,
  useRetrieveJobQuery,
  useRetrieveEventsQuery,
} from "../../api/jobs/api"

export const useJobs = (limit = 10) => {
  return useJobsQuery(limit, { pollingInterval: 5000 })
}

export const useJob = (params = { pollingInterval: 5000 }) => {
  const { id } = useParams()
  const {
    data: job,
    isFetching,
    isLoading,
    isError,
  } = useRetrieveJobQuery(id ?? "", { skip: !id, ...params })
  const {
    data: events,
    isFetching: isFetchingEvents,
    isLoading: isLoadingEvents,
    isError: isErrorEvents,
  } = useRetrieveEventsQuery(id ?? "", { skip: !id, ...params })
  const [cancelJob, { isLoading: isCanceling }] = useCancelJobMutation()
  const [startJob, { isLoading: isStarting }] = useStartJobMutation()

  return {
    job,
    isFetching,
    isLoading,
    isError,
    events,
    isFetchingEvents,
    isLoadingEvents,
    cancelJob,
    isCanceling,
    startJob,
    isStarting,
  }
}

export const useTrainingFiles = () => {
  return useTrainingFilesQuery()
}
