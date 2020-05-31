import { useQuery } from "$hooks/useQuery";
import { GET_COMPANY_OFFER_BY_UUID } from "$queries";
import { IOffer } from "$interfaces/Offer";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useOfferByUuid = (uuid?: string) => {
  const history = useHistory();
  return useQuery<{ uuid?: string }, { getOfferByUuid: IOffer }>(
    GET_COMPANY_OFFER_BY_UUID,
    {
      variables: { uuid },
      errorHandlers: {
        OfferNotFound: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );
};
