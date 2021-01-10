import { GET_OFFERS } from "$queries";
import { usePaginatedQuery, IVariables } from "$hooks";
import { IOffer } from "$interfaces/Offer";
import { Offer } from "$models/Offer";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const useOffers = (filter: IUseOffersFilter = {}) => {
  const result = usePaginatedQuery<Variables, IOffer>({
    documentNode: GET_OFFERS,
    queryName: "getOffers",
    variables: filter,
    timestampKey: "updatedAt"
  });

  return {
    ...result,
    data: result.data && {
      getOffers: {
        results: result.data?.getOffers.results.map(offer => Offer(offer)),
        shouldFetchMore: result.data?.getOffers.shouldFetchMore
      }
    }
  };
};

type Variables = IVariables & IUseOffersFilter;

export interface IUseOffersFilter {
  companyName?: string;
  businessSector?: string;
  title?: string;
  approvalStatus?: ApprovalStatus;
  careerCodes?: string[];
}
