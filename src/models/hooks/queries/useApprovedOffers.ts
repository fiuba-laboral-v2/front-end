import { GET_APPROVED_OFFERS } from "$queries";
import { IVariables, usePaginatedQuery } from "$hooks";
import { OfferFilter } from "$models/OfferFilter";
import { IOffer } from "$interfaces/Offer";

export const useApprovedOffers = ({ filter }: IUseApprovedOffers) => {
  const careerCodes = filter.careerCodes();
  return usePaginatedQuery<IUseApprovedOffersVariables, IOffer>({
    documentNode: GET_APPROVED_OFFERS,
    queryName: "getApprovedOffers",
    ...(careerCodes.length && { variables: { careerCodes } })
  });
};
interface IUseApprovedOffersVariables extends IVariables {
  careerCodes: string[];
}

interface IUseApprovedOffers {
  filter: OfferFilter;
}
