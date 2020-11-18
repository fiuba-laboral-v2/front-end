import { useQuery } from "$hooks";
import { GET_SECRETARY_OFFER_DURATION } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { Secretary } from "$interfaces/Secretary";

export const useSecretaryOfferDuration = (secretary: Secretary) => {
  const history = useHistory();

  const response = useQuery<{}, { getSecretaryOfferDuration: { offerDurationInDays: number } }>(
    GET_SECRETARY_OFFER_DURATION,
    {
      variables: { secretary },
      errorHandlers: {
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );

  return response.data?.getSecretaryOfferDuration.offerDurationInDays;
};