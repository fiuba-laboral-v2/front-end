import { useQuery } from "$hooks";
import { GET_COMPANY_OFFER_BY_UUID, GET_OFFER_VISIBLE_BY_CURRENT_APPLICANT } from "$queries";
import { IOffer } from "$interfaces/Offer";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { DocumentNode } from "graphql";
import { IMyOffer } from "$interfaces/Applicant";

const useOfferByUuidQuery = <TData>({ documentNode, uuid }: IUseOfferByUuidQuery) => {
  const history = useHistory();
  return useQuery<{ uuid?: string }, TData>(
    documentNode,
    {
      variables: { uuid },
      errorHandlers: {
        OfferNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );
};

export const useCompanyOfferByUuid = (uuid?: string) =>
  useOfferByUuidQuery<IGetOfferByUuid>({
    documentNode: GET_COMPANY_OFFER_BY_UUID,
    uuid
  });

export const useOfferVisibleByApplicant = (uuid?: string) =>
  useOfferByUuidQuery<IGetOfferVisibleByApplicant>({
    documentNode: GET_OFFER_VISIBLE_BY_CURRENT_APPLICANT,
    uuid
  });

interface IGetOfferByUuid {
  getOfferByUuid: IOffer;
}

interface IGetOfferVisibleByApplicant {
  getOfferVisibleByCurrentApplicant: IMyOffer;
}

interface IUseOfferByUuidQuery {
  documentNode: DocumentNode;
  uuid?: string;
}
