import { GET_APPROVED_OFFERS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { OfferFilter } from "$models/OfferFilter";
import { IOffer } from "$interfaces/Offer";

export const useApprovedOffers = ({ filter }: IUseApprovedOffers) => usePaginatedQuery<IOffer>({
  documentNode: GET_APPROVED_OFFERS,
  queryName: "getApprovedOffers",
  variables: {
    careerCodes: filter.careerCodes()
  }
});

interface IUseApprovedOffers {
  filter: OfferFilter;
}
