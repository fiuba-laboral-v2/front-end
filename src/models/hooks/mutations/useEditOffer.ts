import { EDIT_OFFER } from "$mutations";
import { useMutation, ICreateOffer } from "$hooks";
import { IOffer } from "$interfaces/Offer";

export const useEditOffer = () =>
  useMutation<ICreateOffer, { editOffer: IOffer & { company: never } }>(EDIT_OFFER);
