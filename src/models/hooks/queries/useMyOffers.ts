import { usePaginatedQuery, IVariables } from "$hooks";
import { CompanyOffersFilter } from "$models/SearchFilters/CompanyOffersFilter";
import { GET_MY_OFFERS } from "$queries";
import { IOfferAttributes } from "$interfaces/Offer";
import { Offer } from "$models/Offer";

export const useMyOffers = (filter: CompanyOffersFilter) => {
  const result = usePaginatedQuery<Variables, IOfferAttributes>({
    documentNode: GET_MY_OFFERS,
    queryName: "getMyOffers",
    variables: filter.getValues(),
    timestampKey: "updatedAt"
  });

  return {
    ...result,
    data: result.data && {
      getMyOffers: {
        results: result.data?.getMyOffers.results.map(offer => Offer(offer)),
        shouldFetchMore: result.data?.getMyOffers.shouldFetchMore
      }
    }
  };
};

type Variables = IUseMyOffersFilter & IVariables;

export interface IUseMyOffersFilter {
  hideRejectedAndExpiredOffers: boolean;
}
