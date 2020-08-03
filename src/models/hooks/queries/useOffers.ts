import { useQuery } from "../useQuery";
import { GET_OFFERS } from "$queries";
import { IOffer } from "$interfaces/Offer";
import { useState } from "react";

export const useOffers = () => {
  const result = useQuery<{}, { getOffers: IOffer[] }>(GET_OFFERS);
  const [shouldFetchMore, setShouldFetchMore] = useState(true);

  const fetchMore = async () => {
    const offers = result.data?.getOffers;
    if (!offers) return;
    await result.fetchMore({
      query: GET_OFFERS,
      variables: { updatedBeforeThan: offers[offers.length - 1].updatedAt },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newOffers = fetchMoreResult?.getOffers || [];
        if (newOffers.length === 0) setShouldFetchMore(false);
        return {
          getOffers: [
            ...previousResult.getOffers,
            ...newOffers
          ]
        };
      }
    });
  };

  return { ...result, fetchMore, shouldFetchMore };
};
