import { useQuery } from "../useQuery";
import { GET_OFFERS } from "$queries";
import { IOffer } from "$interfaces/Offer";

export const useOffers = () => {
  const result = useQuery<{}, { getOffers: IOffer[] }>(GET_OFFERS);

  const fetchMore = async () => {
    const offers = result.data?.getOffers;
    if (!offers) return;
    await result.fetchMore({
      query: GET_OFFERS,
      variables: { createdBeforeThan: offers[offers.length - 1].createdAt },
      updateQuery: (previousResult, { fetchMoreResult }) => ({
        getOffers: [
          ...previousResult.getOffers,
          ...fetchMoreResult?.getOffers || []
        ]
      })
    });
  };

  return { ...result, fetchMore };
};
