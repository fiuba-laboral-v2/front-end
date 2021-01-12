import { useLazyQuery } from "$hooks";
import { GET_REJECTED_OFFER_MESSAGE_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { IUseRejectionMessage } from "$pages/Admin/components/RejectionMessageButton/interfaces";

export const useLazyRejectedOfferMessageByUuid = (): IUseRejectionMessage => {
  const history = useHistory();
  const { query, loading, data } = useLazyQuery<IVariables, IResponse>(
    GET_REJECTED_OFFER_MESSAGE_BY_UUID
  );

  const getRejectionMessage = async (offerUuid: string) => {
    const response = await query({
      variables: { offerUuid },
      errorHandlers: {
        CompanyNotificationNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    });
    return response?.data?.getRejectedOfferMessageByUuid;
  };

  return { getRejectionMessage, loading, data: data?.getRejectedOfferMessageByUuid };
};

interface IVariables {
  offerUuid: string;
}

interface IResponse {
  getRejectedOfferMessageByUuid: string;
}
