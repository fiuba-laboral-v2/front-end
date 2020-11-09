import { GET_OFFERS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { IOffer } from "$interfaces/Offer";

export const useOffers = () =>
  usePaginatedQuery<{}, IOffer>({
    documentNode: GET_OFFERS,
    queryName: "getOffers",
    variables: {},
    timestampKey: "updatedAt"
  });
