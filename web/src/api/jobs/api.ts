import { baseApi } from "../api"

const jobsApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: ({ query, mutation }) => ({
    jobs: query<any, number>({
      query: (limit) => `jobs?limit=${limit}`,
      providesTags: ["Jobs"],
    }),

    startJob: mutation<any, { suffix?: string; trainingFile: string }>({
      query(body) {
        return {
          url: `jobs/start`,
          method: "PUT",
          body,
        }
      },
      invalidatesTags: ["Jobs"],
    }),

    cancelJob: mutation<any, { jobId: string }>({
      query(body) {
        return {
          url: `jobs/cancel`,
          method: "POST",
          body,
        }
      },
      invalidatesTags: ["Jobs"],
    }),

    trainingFiles: query<string[], void>({
      query: () => "training-files",
    }),

    retrieveJob: query<any, string>({
      query: (id) => `job/${id}`,
    }),

    retrieveEvents: query<any, string>({
      query: (id) => `events/${id}`,
    }),
  }),
})

export const {
  useJobsQuery,
  useCancelJobMutation,
  useStartJobMutation,
  useTrainingFilesQuery,
  useRetrieveJobQuery,
  useRetrieveEventsQuery,
} = jobsApi
