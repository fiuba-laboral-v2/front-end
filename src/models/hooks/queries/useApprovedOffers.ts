import { useQuery } from "../useQuery";
import { GET_APPROVED_OFFERS } from "$queries";
import { IOffer } from "$interfaces/Offer";
import { IPaginatedResult } from "./interface";

export const useApprovedOffers = () => {
  const result = useQuery<{}, IUseApprovedOffers>(GET_APPROVED_OFFERS);

  const fetchMore = () => {
    const offers = result.data?.getApprovedOffers.results;
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

interface IUseApprovedOffers {
  getApprovedOffers: IPaginatedResult<IOffer>;
}
