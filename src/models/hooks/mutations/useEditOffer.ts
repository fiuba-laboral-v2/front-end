import { EDIT_OFFER } from "$mutations";
import { useMutation } from "$hooks";
import { ICreateOrUpdateOffer } from "$interfaces/Offer";

export const useEditOffer = () => {
  const { mutation, ...result } = useMutation<ICreateOrUpdateOffer, IEditOfferResponse>(EDIT_OFFER);
  return { editOffer: mutation, ...result };
};

interface IEditOfferResponse {
  editOffer: { uuid: string };
}
