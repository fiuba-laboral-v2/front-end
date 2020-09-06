import { DocumentNode } from "graphql";
import { useQuery } from "../useQuery";
import { IOffer } from "$interfaces/Offer";
import { IPaginatedResult } from "./interface";

export const usePaginatedOffers = (documentNode: DocumentNode, queryName: string) => {
  const result = useQuery<{}, IUseOffers>(documentNode);

  const fetchMore = () => {
    const offers = result.data && result.data[queryName].results;
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

interface IUseOffers {
  [queryName: string]: IPaginatedResult<IOffer>;
}
