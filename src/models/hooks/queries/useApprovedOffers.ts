import { GET_APPROVED_OFFERS } from "$queries";
import { usePaginatedOffers } from "$hooks";

export const useApprovedOffers = () => usePaginatedOffers(GET_APPROVED_OFFERS, "getApprovedOffers");
