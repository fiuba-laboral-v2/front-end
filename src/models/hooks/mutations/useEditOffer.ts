import { EDIT_OFFER } from "$mutations";
import { useMutation } from "$hooks";
import { IEditOffer } from "$interfaces/Offer";

export const useEditOffer = () => {
  const { mutation, ...result } = useMutation<IEditOffer, IEditOfferResponse>(EDIT_OFFER);
  return { editOffer: mutation, ...result };
};

interface IEditOfferResponse {
  editOffer: { uuid: string };
}
