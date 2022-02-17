import { useMemo } from "react";
import {
  useCreateRequestMutation,
  useDeleteByIdMutation,
  useEditRequestMutation,
  useGetRequestsQuery,
} from "../graphql/generated/graphql";

function useRequests() {
  const {
    data,
    loading: requestsLoading,
    error: requestsError,
  } = useGetRequestsQuery();
  const [deleteByIDMutation] = useDeleteByIdMutation();
  const [createRequestMutation] = useCreateRequestMutation();
  const [editRequestMutation] = useEditRequestMutation();

  const requests = useMemo(() => data?.getRequests ?? [], [data?.getRequests]);

  const handlers = useMemo(
    () => ({
      deleteRequest: (requestID: string) =>
        deleteByIDMutation({
          variables: {
            requestId: requestID,
          },
          awaitRefetchQueries: true,
          refetchQueries: ["GetRequests"],
        }),
      createRequest: (requestor: string, title: string, body: string) =>
        createRequestMutation({
          variables: {
            inputs: {
              body,
              requestor,
              title,
            },
          },
          awaitRefetchQueries: true,
          refetchQueries: ["GetRequests"],
        }),
      updateRequest: (
        requestID: string,
        requestor: string,
        title: string,
        body: string
      ) =>
        editRequestMutation({
          variables: {
            inputs: {
              id: requestID,
              body,
              requestor,
              title,
            },
          },
          awaitRefetchQueries: true,
          refetchQueries: ["GetRequests"],
        }),
    }),
    []
  );

  return { requests, requestsLoading, requestsError, handlers };
}
export default useRequests;
