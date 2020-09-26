import { EDIT_OFFER } from "$mutations";
import { useMutation, ICreateOffer } from "$hooks";
import { IOffer } from "$interfaces/Offer";

export const useEditOffer = () => {
  const { mutation } = useMutation<ICreateOffer, IEditOfferResponse>(EDIT_OFFER);
  return mutation;
};

interface IEditOfferResponse {
  editOffer: IOffer & { company: never };
}
