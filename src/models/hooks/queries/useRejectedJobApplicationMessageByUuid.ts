import { useQuery } from "$hooks";
import { GET_REJECTED_JOB_APPLICATION_MESSAGE_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useRejectedJobApplicationMessageByUuid = (jobApplicationUuid: string) => {
  const history = useHistory();
  return useQuery<{}, IResponse>(GET_REJECTED_JOB_APPLICATION_MESSAGE_BY_UUID, {
    variables: { jobApplicationUuid },
    errorHandlers: {
      ApplicantNotificationNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.data?.getRejectedJobApplicationMessageByUuid;
};

interface IResponse {
  getRejectedJobApplicationMessageByUuid: string;
}
