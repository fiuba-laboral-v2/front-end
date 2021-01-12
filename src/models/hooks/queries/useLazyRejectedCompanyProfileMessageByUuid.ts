import { useLazyQuery } from "$hooks";
import { GET_REJECTED_COMPANY_PROFILE_MESSAGE_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { IUseRejectionMessage } from "$pages/Admin/components/RejectionMessageButton/interfaces";

export const useLazyRejectedCompanyProfileMessageByUuid = (): IUseRejectionMessage => {
  const history = useHistory();
  const { query, loading, data } = useLazyQuery<IVariables, IResponse>(
    GET_REJECTED_COMPANY_PROFILE_MESSAGE_BY_UUID
  );

  const getRejectionMessage = async (notifiedCompanyUuid: string) => {
    const response = await query({
      variables: { notifiedCompanyUuid },
      errorHandlers: {
        CompanyNotificationNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    });
    return response?.data?.getRejectedCompanyProfileMessageByUuid;
  };

  return { getRejectionMessage, loading, data: data?.getRejectedCompanyProfileMessageByUuid };
};

interface IVariables {
  notifiedCompanyUuid: string;
}

interface IResponse {
  getRejectedCompanyProfileMessageByUuid: string;
}
