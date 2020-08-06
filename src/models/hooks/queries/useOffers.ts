import { useQuery } from "../useQuery";
import { GET_OFFERS } from "$queries";
import { IOffer } from "$interfaces/Offer";

export const useOffers = () => {
  const result = useQuery<{}, IUseOffers>(GET_OFFERS);

  const fetchMore = async () => {
    const offers = result.data?.getOffers.offers;
    if (!offers) return;
    await result.fetchMore({
      query: GET_OFFERS,
      variables: { createdBeforeThan: offers[offers.length - 1].createdAt }
    });
  };

  return { ...result, fetchMore };
};

export interface IGetOffers {
  offers: IOffer[];
  shouldFetchMore: boolean;
}

interface IUseOffers {
  getOffers: IGetOffers;
}
