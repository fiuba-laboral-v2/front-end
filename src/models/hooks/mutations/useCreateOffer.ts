import { CREATE_OFFER } from "$mutations";
import { useMutation } from "$hooks";
import { ICreateOrUpdateOffer } from "$interfaces/Offer";

export const useCreateOffer = () => {
  const {
    mutation,
    ...result
  } = useMutation<ICreateOrUpdateOffer, ICreateOfferResponse>(CREATE_OFFER);
  return { createOffer: mutation, ...result };
};

interface ICreateOfferResponse {
  createOffer: { uuid: string };
}
