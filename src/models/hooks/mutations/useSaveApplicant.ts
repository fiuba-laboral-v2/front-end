import { SAVE_APPLICANT } from "$mutations";
import { useMutation } from "$hooks";
import { IApplicant, IApplicantCareerInput } from "$interfaces/Applicant";
import { IFiubaUserInput } from "$interfaces/User";

export const useSaveApplicant = () => {
  const { mutation } = useMutation<ISaveApplicant, { saveApplicant: IApplicant }>(SAVE_APPLICANT);
  return mutation;
};

export interface ISaveApplicant {
  user: IFiubaUserInput;
  padron: number;
  careers: IApplicantCareerInput[];
}
