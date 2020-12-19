import { useAdvancedQuery } from "$hooks";
import { GET_OFFER_BY_UUID, GET_OFFER_FOR_APPLICANT } from "$queries";
import { IOffer, IMyOfferAttributes } from "$interfaces/Offer";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { DocumentNode } from "graphql";
import { IMyOffer } from "$interfaces/Applicant";
import { Offer } from "$models/Offer";

const useOfferByUuidQuery = <T extends IOffer | IMyOffer>({
  documentNode,
  uuid
}: IUseOfferByUuidQuery) => {
  const history = useHistory();
  return useAdvancedQuery<{ uuid?: string }, IGetOfferByUuid<T>>(documentNode, {
    variables: { uuid },
    errorHandlers: {
      OfferNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
      UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  });
};

export const useCompanyOfferByUuid = (uuid?: string) => {
  const result = useOfferByUuidQuery<IOffer>({
    documentNode: GET_OFFER_BY_UUID,
    uuid
  });

  return {
    ...result,
    data: result.data && { getOfferByUuid: Offer(result.data.getOfferByUuid) }
  };
};
export const useOfferByUuid = (uuid?: string) => {
  const result = useOfferByUuidQuery<IOffer>({
    documentNode: GET_OFFER_BY_UUID,
    uuid
  });
  return {
    ...result,
    data: result.data && { getOfferByUuid: Offer(result.data.getOfferByUuid) }
  };
};

export const useOfferForApplicant = (uuid?: string) => {
  const result = useOfferByUuidQuery<IMyOffer>({
    documentNode: GET_OFFER_FOR_APPLICANT,
    uuid
  });
  return {
    ...result,
    data: result.data && { getOfferByUuid: Offer<IMyOfferAttributes>(result.data.getOfferByUuid) }
  };
};

interface IGetOfferByUuid<T> {
  getOfferByUuid: T;
}

interface IUseOfferByUuidQuery {
  documentNode: DocumentNode;
  uuid?: string;
}
