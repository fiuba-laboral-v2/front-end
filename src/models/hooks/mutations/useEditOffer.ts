import { EDIT_OFFER } from "$mutations";
import { useMutation, ICreateOffer } from "$hooks";
import { IOffer } from "$interfaces/Offer";

export const useEditOffer = () => {
  const { mutation, ...result } = useMutation<ICreateOffer, IEditOfferResponse>(EDIT_OFFER);
  return { editOffer: mutation, ...result };
};

interface IEditOfferResponse {
  editOffer: IOffer<never>;
}
