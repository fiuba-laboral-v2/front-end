import { useQuery } from "$hooks";
import { GET_MY_OFFERS } from "$queries";
import { IOfferAttributes } from "$interfaces/Offer";
import { IPaginatedResult } from "./interfaces";
import { Offer } from "$models/Offer";

export const useMyOffers = () => {
  const result = useQuery<{}, IUseMyOffers>(GET_MY_OFFERS);

  const fetchMore = () => {
    const offers = result.data?.getMyOffers.results;
    if (!offers) return;
    const lastOffer = offers[offers.length - 1];
    return result.fetchMore({
      variables: {
        updatedBeforeThan: {
          dateTime: lastOffer.updatedAt,
          uuid: lastOffer.uuid
        }
      }
    });
  };

  return {
    ...result,
    data: result.data && {
      getMyOffers: {
        results: result.data?.getMyOffers.results.map(offer => Offer(offer)),
        shouldFetchMore: result.data?.getMyOffers.shouldFetchMore
      }
    },
    fetchMore
  };
};

interface IUseMyOffers {
  getMyOffers: IPaginatedResult<IOfferAttributes>;
}
