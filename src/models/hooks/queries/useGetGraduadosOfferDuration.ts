import { useQuery } from "$hooks";
import { GET_SECRETARY_OFFER_DURATION } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { Secretary } from "$interfaces/Secretary";

export const useGetGraduadosOfferDuration = () => {
  const history = useHistory();
  const query = GET_SECRETARY_OFFER_DURATION;
  const options = {
    variables: { secretary: Secretary.graduados },
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  };

  const response = useQuery<{}, { getSecretaryOfferDuration: { offerDurationInDays: number } }>(
    query,
    options
  );

  return response.data?.getSecretaryOfferDuration.offerDurationInDays;
};
