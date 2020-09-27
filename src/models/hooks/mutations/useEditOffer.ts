import { EDIT_OFFER } from "$mutations";
import { useMutation, ICreateOffer } from "$hooks";

export const useEditOffer = () => {
  const { mutation, ...result } = useMutation<ICreateOffer, IEditOfferResponse>(EDIT_OFFER);
  return { editOffer: mutation, ...result };
};

interface IEditOfferResponse {
  editOffer: { uuid: string };
}
