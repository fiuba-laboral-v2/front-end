import { useQuery } from "$hooks";
import { GET_OFFER_BY_UUID, GET_OFFER_FOR_APPLICANT } from "$queries";
import { IOffer } from "$interfaces/Offer";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { DocumentNode } from "graphql";
import { IMyOffer } from "$interfaces/Applicant";

const useOfferByUuidQuery = <T>({ documentNode, uuid }: IUseOfferByUuidQuery) => {
  const history = useHistory();
  return useQuery<{ uuid?: string }, IGetOfferByUuid<T>>(documentNode, {
    variables: { uuid },
    errorHandlers: {
      OfferNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
      UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  });
};

export const useCompanyOfferByUuid = (uuid?: string) =>
  useOfferByUuidQuery<IOffer>({
    documentNode: GET_OFFER_BY_UUID,
    uuid
  });

export const useOfferByUuid = (uuid?: string) =>
  useOfferByUuidQuery<IOffer>({
    documentNode: GET_OFFER_BY_UUID,
    uuid
  });

export const useOfferForApplicant = (uuid?: string) =>
  useOfferByUuidQuery<IMyOffer>({
    documentNode: GET_OFFER_FOR_APPLICANT,
    uuid
  });

interface IGetOfferByUuid<T> {
  getOfferByUuid: T;
}

interface IUseOfferByUuidQuery {
  documentNode: DocumentNode;
  uuid?: string;
}
