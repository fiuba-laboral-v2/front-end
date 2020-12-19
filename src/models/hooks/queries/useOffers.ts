import { GET_OFFERS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { IOffer } from "$interfaces/Offer";
import { Offer } from "$models/Offer";

export const useOffers = () => {
  const result = usePaginatedQuery<{}, IOffer>({
    documentNode: GET_OFFERS,
    queryName: "getOffers",
    variables: {},
    timestampKey: "updatedAt"
  });

  return {
    ...result,
    data: result.data && {
      getOffers: {
        results: result.data?.getOffers.results.map(offer => Offer(offer)),
        shouldFetchMore: result.data?.getMyOffers.shouldFetchMore
      }
    }
  };
};
