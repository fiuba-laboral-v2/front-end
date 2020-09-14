import { GET_OFFERS } from "$queries";
import { usePaginatedQuery } from "$hooks";

export const useOffers = () => usePaginatedQuery({
  documentNode: GET_OFFERS,
  queryName: "getOffers"
});
