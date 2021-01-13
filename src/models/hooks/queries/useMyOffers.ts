import { usePaginatedQuery, IVariables } from "$hooks";
import { GET_MY_OFFERS } from "$queries";
import { IOfferAttributes } from "$interfaces/Offer";
import { Offer } from "$models/Offer";

export const useMyOffers = () => {
  const result = usePaginatedQuery<Variables, IOfferAttributes>({
    documentNode: GET_MY_OFFERS,
    queryName: "getMyOffers",
    variables: { hideRejectedAndExpiredOffers: false },
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
