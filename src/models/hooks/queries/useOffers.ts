import { useQuery } from "../useQuery";
import { GET_OFFERS } from "$queries";
import { IOffer } from "$interfaces/Offer";
import { IPaginatedResult } from "./interface";

export const useOffers = () => {
  const result = useQuery<{}, IUseOffers>(
    GET_OFFERS,
    { notifyOnNetworkStatusChange: true }
  );

  const fetchMore = () => {
    const offers = result.data?.getOffers.results;
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

export interface IUseOffers {
  getOffers: IPaginatedResult<IOffer>;
}
