import { SAVE_APPLICANT } from "$mutations";
import { useMutation } from "$hooks";
import { IApplicant, IApplicantCareer } from "$interfaces/Applicant";

export const useSaveApplicant = () =>
  useMutation<ISaveApplicant, { saveApplicant: IApplicant }>(SAVE_APPLICANT);

interface ISaveApplicant {
  user: {
    email: string;
    password: string;
  };
  name: string;
  surname: string;
  padron: number;
  careers: IApplicantCareer[];
}
