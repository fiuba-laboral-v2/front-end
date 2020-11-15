import { useSecretaryOfferDuration } from "$hooks";
import { Secretary } from "$interfaces/Secretary";

export const useExtensionOfferDuration = () => useSecretaryOfferDuration(Secretary.extension);
