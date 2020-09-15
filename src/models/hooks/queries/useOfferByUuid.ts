import { useQuery } from "$hooks";
import { GET_COMPANY_OFFER_BY_UUID, GET_OFFER_BY_UUID } from "$queries";
import { IOffer } from "$interfaces/Offer";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { DocumentNode } from "graphql";
import { IMyOffer } from "$interfaces/Applicant";

const useOfferByUuidQuery = <Data>(query: DocumentNode, uuid?: string) => {
  const history = useHistory();
  return useQuery<{ uuid?: string }, { getOfferByUuid: Data }>(
    query,
    {
      variables: { uuid },
      errorHandlers: {
        OfferNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );
};

export const useCompanyOfferByUuid = (uuid?: string) =>
  useOfferByUuidQuery<IOffer>(GET_COMPANY_OFFER_BY_UUID, uuid);

export const useApplicantOfferByUuid = (uuid?: string) =>
  useOfferByUuidQuery<IMyOffer>(GET_OFFER_BY_UUID, uuid);
