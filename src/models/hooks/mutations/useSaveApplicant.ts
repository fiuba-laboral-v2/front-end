import { SAVE_APPLICANT } from "$mutations";
import { useMutation } from "$hooks";
import { IApplicant, IApplicantCareerInput } from "$interfaces/Applicant";
import { IFiubaUserInput } from "$interfaces/User";

export const useSaveApplicant = () => {
  const { mutation, ...result } = useMutation<ISaveApplicant, { saveApplicant: IApplicant }>(
    SAVE_APPLICANT
  );
  return { saveApplicant: mutation, ...result };
};

export interface ISaveApplicant {
  user: IFiubaUserInput;
  padron: number;
  careers: IApplicantCareerInput[];
}
