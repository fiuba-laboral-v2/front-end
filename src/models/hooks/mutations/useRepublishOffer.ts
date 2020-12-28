import { REPUBLISH_OFFER } from "$mutations";
import { useMutation, useShowSuccess } from "$hooks";
import { IOffer } from "$interfaces/Offer";

export const useRepublishOffer = () => {
  const showSuccess = useShowSuccess();
  const { mutation, ...result } = useMutation<{ uuid: string }, IRepublishOfferResponse>(
    REPUBLISH_OFFER,
    { onCompleted: () => showSuccess({ message: "Publicada" }) }
  );
  return { republishOffer: mutation, ...result };
};

interface IRepublishOfferResponse {
  republishOffer: IOffer;
}
