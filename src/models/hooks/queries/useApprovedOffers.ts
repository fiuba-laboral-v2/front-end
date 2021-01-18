import { GET_APPROVED_OFFERS } from "$queries";
import { IVariables, usePaginatedQuery } from "$hooks";
import { OfferFilter } from "$models/SearchFilters/OfferFilter";
import { IMyOffer } from "$interfaces/Applicant";

export const useApprovedOffers = ({ filter, skip }: IUseApprovedOffers) => {
  const careerCodes = filter.careerCodes();
  return usePaginatedQuery<IUseApprovedOffersVariables, IMyOffer>({
    documentNode: GET_APPROVED_OFFERS,
    queryName: "getApprovedOffers",
    variables: { careerCodes: careerCodes.length === 0 ? undefined : careerCodes },
    timestampKey: "updatedAt",
    skip
  });
};
interface IUseApprovedOffersVariables extends IVariables {
  careerCodes?: string[];
}

interface IUseApprovedOffers {
  filter: OfferFilter;
  skip?: boolean;
}
