import { EXPIRE_OFFER } from "$mutations";
import { useMutation } from "$hooks";
import { IOffer } from "$interfaces/Offer";

export const useExpireOffer = () => {
  const { mutation, ...result } = useMutation<{ uuid: string }, IExpireOfferResponse>(EXPIRE_OFFER);
  return { expireOffer: mutation, ...result };
};

interface IExpireOfferResponse {
  expireOffer: IOffer;
}
