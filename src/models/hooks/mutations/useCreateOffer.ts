import { CREATE_OFFER } from "$mutations";
import { useMutation } from "$hooks";
import { ICreateOffer } from "$interfaces/Offer";

export const useCreateOffer = () => {
  const {
    mutation,
    ...result
  } = useMutation<ICreateOffer, ICreateOfferResponse>(CREATE_OFFER);
  return { createOffer: mutation, ...result };
};

interface ICreateOfferResponse {
  createOffer: { uuid: string };
}
