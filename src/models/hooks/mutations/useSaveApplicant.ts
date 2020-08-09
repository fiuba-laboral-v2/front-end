import { SAVE_APPLICANT } from "$mutations";
import { useMutation } from "$hooks";
import { IApplicant, IApplicantCareer } from "$interfaces/Applicant";
import { IFiubaUserInput } from "$interfaces/User";

export const useSaveApplicant = () =>
  useMutation<ISaveApplicant, { saveApplicant: IApplicant }>(SAVE_APPLICANT);

export interface ISaveApplicant {
  user: IFiubaUserInput;
  padron: number;
  careers: IApplicantCareer[];
}
