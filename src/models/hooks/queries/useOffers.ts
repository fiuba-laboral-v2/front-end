import { GET_OFFERS } from "$queries";
import { usePaginatedOffers } from "$hooks";

export const useOffers = () => usePaginatedOffers(GET_OFFERS, "getOffers");
