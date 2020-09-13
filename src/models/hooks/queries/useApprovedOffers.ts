import { GET_APPROVED_OFFERS } from "$queries";
import { usePaginatedOffers } from "$hooks";
import { OfferFilter } from "../../OfferFilter";

export const useApprovedOffers = ({ filter }: IUseApprovedOffers) => usePaginatedOffers({
  documentNode: GET_APPROVED_OFFERS,
  queryName: "getApprovedOffers",
  variables: {
    careerCodes: filter.careerCodes()
  }
});

interface IUseApprovedOffers {
  filter: OfferFilter;
}
