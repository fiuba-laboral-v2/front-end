import { GET_OFFERS } from "$queries";
import { usePaginatedOffers } from "$hooks";

export const useOffers = () => usePaginatedOffers({
  documentNode: GET_OFFERS,
  queryName: "getOffers"
});
