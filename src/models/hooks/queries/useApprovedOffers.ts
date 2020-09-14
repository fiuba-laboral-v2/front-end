import { GET_APPROVED_OFFERS } from "$queries";
import { usePaginatedQuery, IVariables } from "$hooks";
import { OfferFilter } from "$models/OfferFilter";
import { IOffer } from "$interfaces/Offer";

export const useApprovedOffers = ({ filter }: IUseApprovedOffers) =>
  usePaginatedQuery<IUseApprovedOffersVariables, IOffer>({
    documentNode: GET_APPROVED_OFFERS,
    queryName: "getApprovedOffers",
    variables: {
      careerCodes: filter.careerCodes()
    }
  });

interface IUseApprovedOffersVariables extends IVariables {
  careerCodes: string[];
}

interface IUseApprovedOffers {
  filter: OfferFilter;
}
