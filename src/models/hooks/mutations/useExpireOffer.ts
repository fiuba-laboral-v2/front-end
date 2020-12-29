import { EXPIRE_OFFER } from "$mutations";
import { useMutation, useShowSuccess } from "$hooks";
import { IOffer } from "$interfaces/Offer";

export const useExpireOffer = () => {
  const showSuccess = useShowSuccess();
  const { mutation, ...result } = useMutation<{ uuid: string }, IExpireOfferResponse>(
    EXPIRE_OFFER,
    { onCompleted: () => showSuccess({ message: "Expirada" }) }
  );
  return { expireOffer: mutation, ...result };
};

interface IExpireOfferResponse {
  expireOffer: IOffer;
}
