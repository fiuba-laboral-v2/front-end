import { GET_APPROVED_OFFERS } from "$queries";
import { usePaginatedOffers } from "$hooks";

export const useApprovedOffers = () => usePaginatedOffers({
  documentNode: GET_APPROVED_OFFERS,
  queryName: "getApprovedOffers"
});
