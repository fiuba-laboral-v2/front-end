import { GET_APPROVED_OFFERS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { OfferFilter } from "$models/OfferFilter";

export const useApprovedOffers = ({ filter }: IUseApprovedOffers) => usePaginatedQuery({
  documentNode: GET_APPROVED_OFFERS,
  queryName: "getApprovedOffers",
  variables: {
    careerCodes: filter.careerCodes()
  }
});

interface IUseApprovedOffers {
  filter: OfferFilter;
}
