import { useLazyQuery } from "$hooks";
import { GET_REJECTED_JOB_APPLICATION_MESSAGE_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useLazyRejectedJobApplicationMessageByUuid = () => {
  const history = useHistory();
  const { query, ...result } = useLazyQuery<IVariables, IResponse>(
    GET_REJECTED_JOB_APPLICATION_MESSAGE_BY_UUID
  );

  const getRejectedJobApplicationMessageByUuid = async (jobApplicationUuid: string) => {
    const response = await query({
      variables: { jobApplicationUuid },
      errorHandlers: {
        ApplicantNotificationNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    });
    return response?.data?.getRejectedJobApplicationMessageByUuid;
  };

  return { getRejectedJobApplicationMessageByUuid, ...result };
};

interface IVariables {
  jobApplicationUuid: string;
}

interface IResponse {
  getRejectedJobApplicationMessageByUuid: string;
}
