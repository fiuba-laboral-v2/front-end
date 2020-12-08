import { useQuery } from "../useQuery/useQuery";
import { GET_MY_OFFERS } from "$queries";
import { IOffer } from "$interfaces/Offer";
import { IPaginatedResult } from "./interfaces";

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

  return { ...result, fetchMore };
};

interface IUseMyOffers {
  getMyOffers: IPaginatedResult<IOffer>;
}
