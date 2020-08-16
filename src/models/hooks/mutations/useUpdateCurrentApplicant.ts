import { UPDATE_CURRENT_APPLICANT } from "$mutations";
import { useMutation, IMutationOptions } from "$hooks";
import { IEditableUser } from "$interfaces/User";
import { IApplicantCareerInput, ILink, ISection } from "$interfaces/Applicant";
import { ICapability } from "$interfaces/Capability";

export const useUpdateCurrentApplicant = () => {
  const mutation = useMutation<IMutationVariables>(UPDATE_CURRENT_APPLICANT);
  return ({ variables, ...options }: IUseUpdateCurrentApplicantOptions) => {
    return mutation({
      variables: {
        ...variables,
        capabilities: variables.capabilities.map(c => c.description)
      },
      ...options
    });
  };
};

type IUseUpdateCurrentApplicantBaseOptions = IMutationOptions<{}, IUpdateCurrentApplicantVariables>;

interface IUseUpdateCurrentApplicantOptions extends IUseUpdateCurrentApplicantBaseOptions {
  variables: IUpdateCurrentApplicantVariables;
}

interface IUpdateCurrentApplicantBaseVariables {
  user: IEditableUser;
  description: string;
  padron: number;
  links: ILink[];
  careers: IApplicantCareerInput[];
  sections: ISection[];
}

export interface IMutationVariables extends IUpdateCurrentApplicantBaseVariables {
  capabilities: string[];
}

export interface IUpdateCurrentApplicantVariables extends IUpdateCurrentApplicantBaseVariables {
  capabilities: ICapability[];
}
