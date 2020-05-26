import { UPDATE_CURRENT_APPLICANT } from "$mutations";
import { useMutation } from "$hooks";
import { IEditableUser } from "$interfaces/User";
import { IApplicantCareer, ILink, ISection } from "$interfaces/Applicant";

export const useUpdateCurrentApplicant = () =>
  useMutation<IUpdateCurrentApplicantVariables>(UPDATE_CURRENT_APPLICANT);

export interface IUpdateCurrentApplicantVariables {
  uuid: string;
  user: IEditableUser;
  links: ILink[];
  capabilities: string[];
  careers: IApplicantCareer[];
  sections: ISection[];
}