import { useQuery } from "../useQuery";
import { GET_OFFERS } from "$queries";
import { IOffer } from "$interfaces/Offer";

export const useOffers = () => {
  const result = useQuery<{}, IUseOffers>(GET_OFFERS);

  const fetchMore = async () => {
    const offers = result.data?.getOffers.results;
    if (!offers) return;
    const lastOffer = offers[offers.length - 1];
    await result.fetchMore({
      query: GET_OFFERS,
      variables: {
        updatedBeforeThan: {
          dateTime: lastOffer.updatedAt,
          uuid: lastOffer.uuid
        }
      }
    });
  };

  return { ...result, fetchMore };
};

export interface IGetOffers {
  results: IOffer[];
  shouldFetchMore: boolean;
}

interface IUseOffers {
  getOffers: IGetOffers;
}
