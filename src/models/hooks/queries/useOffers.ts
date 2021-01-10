import { GET_OFFERS } from "$queries";
import { OffersFilter } from "$models/SearchFilters/OffersFilter";
import { usePaginatedQuery, IVariables } from "$hooks";
import { IOffer, OfferStatus } from "$interfaces/Offer";
import { Offer } from "$models/Offer";

export const useOffers = (filter: OffersFilter) => {
  const result = usePaginatedQuery<Variables, IOffer>({
    documentNode: GET_OFFERS,
    queryName: "getOffers",
    variables: filter.getValues(),
    timestampKey: "updatedAt"
  });

  return {
    ...result,
    data: result.data && {
      getOffers: {
        results: result.data?.getOffers.results.map(offer => Offer(offer)),
        shouldFetchMore: result.data?.getOffers.shouldFetchMore
      }
    }
  };
};

type Variables = IVariables & IUseOffersFilter;

export interface IUseOffersFilter {
  companyName?: string;
  businessSector?: string;
  title?: string;
  studentsStatus?: OfferStatus;
  graduatesStatus?: OfferStatus;
  careerCodes?: string[];
}
