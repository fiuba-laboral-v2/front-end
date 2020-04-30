import { UPDATE_APPLICANT } from "$mutations";
import { useMutation } from "$hooks";
import { IApplicantCareer, ILink, ISection } from "$interfaces/Applicant";

export const useUpdateApplicant = () =>
  useMutation<IUpdateApplicantVariables>(UPDATE_APPLICANT);

export interface IUpdateApplicantVariables {
  uuid: string;
  name: string;
  surname: string;
  links: ILink[];
  capabilities: string[];
  careers: IApplicantCareer[];
  sections: ISection[];
}
