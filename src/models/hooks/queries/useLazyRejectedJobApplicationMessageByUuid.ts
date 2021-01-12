import { useLazyQuery } from "$hooks";
import { GET_REJECTED_JOB_APPLICATION_MESSAGE_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { IUseRejectionMessage } from "$pages/Admin/components/RejectionMessageButton/interfaces";

export const useLazyRejectedJobApplicationMessageByUuid = (): IUseRejectionMessage => {
  const history = useHistory();
  const { query, loading, data } = useLazyQuery<IVariables, IResponse>(
    GET_REJECTED_JOB_APPLICATION_MESSAGE_BY_UUID
  );

  const getRejectionMessage = async (jobApplicationUuid: string) => {
    const response = await query({
      variables: { jobApplicationUuid },
      errorHandlers: {
        ApplicantNotificationNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    });
    return response?.data?.getRejectedJobApplicationMessageByUuid;
  };

  return { getRejectionMessage, loading, data: data?.getRejectedJobApplicationMessageByUuid };
};

interface IVariables {
  jobApplicationUuid: string;
}

interface IResponse {
  getRejectedJobApplicationMessageByUuid: string;
}
