import { SAVE_JOB_APPLICATION } from "$mutations";
import { useMutation } from "$hooks";
import { IMyOffer } from "$interfaces/Applicant";

export const useSaveJobApplication = (offerUuid: string) => {
  const { mutation, ...result } = useMutation<ISaveApplicant, { saveJobApplication: IMyOffer }>(
    SAVE_JOB_APPLICATION,
    {
      update: cache =>
        cache.modify({
          id: `Offer:${offerUuid}`,
          fields: {
            hasApplied: () => true
          }
        })
    }
  );
  return { saveJobApplication: mutation, ...result };
};

export interface ISaveApplicant {
  offerUuid: string;
}
