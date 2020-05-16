import { SAVE_APPLICANT } from "$mutations";
import { useMutation } from "$hooks";
import { IApplicant, IApplicantCareer } from "$interfaces/Applicant";
import { IUserInput } from "$interfaces/User";

export const useSaveApplicant = () =>
  useMutation<ISaveApplicant, { saveApplicant: IApplicant }>(SAVE_APPLICANT);

export interface ISaveApplicant {
  user: IUserInput;
  padron: number;
  careers: IApplicantCareer[];
}
