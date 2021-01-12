import { useLazyQuery } from "$hooks";
import { GET_REJECTED_APPLICANT_PROFILE_MESSAGE_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { IUseRejectionMessage } from "$pages/Admin/components/RejectionMessageButton/interfaces";

export const useLazyRejectedApplicantProfileMessageByUuid = (): IUseRejectionMessage => {
  const history = useHistory();
  const { query, loading, data } = useLazyQuery<IVariables, IResponse>(
    GET_REJECTED_APPLICANT_PROFILE_MESSAGE_BY_UUID
  );

  const getRejectionMessage = async (notifiedApplicantUuid: string) => {
    const response = await query({
      variables: { notifiedApplicantUuid },
      errorHandlers: {
        ApplicantNotificationNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    });
    return response?.data?.getRejectedApplicantProfileMessageByUuid;
  };

  return { getRejectionMessage, loading, data: data?.getRejectedApplicantProfileMessageByUuid };
};

interface IVariables {
  notifiedApplicantUuid: string;
}

interface IResponse {
  getRejectedApplicantProfileMessageByUuid: string;
}
