import { useSecretaryOfferDuration } from "$hooks";
import { Secretary } from "$interfaces/Secretary";

export const useGraduadosOfferDuration = () => useSecretaryOfferDuration(Secretary.graduados);
