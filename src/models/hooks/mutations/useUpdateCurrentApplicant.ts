import { UPDATE_CURRENT_APPLICANT } from "$mutations";
import { useMutation, IMutationOptions } from "$hooks";
import { IEditableUser } from "$interfaces/User";
import { IApplicantCareerInput, ILink, ISection } from "$interfaces/Applicant";
import { ICapability } from "$interfaces/Capability";

export const useUpdateCurrentApplicant = () => {
  const { mutation, ...result } = useMutation<IMutationVariables>(UPDATE_CURRENT_APPLICANT);
  const updateCurrentApplicant = ({ variables, ...options }: IUseUpdateCurrentApplicantOptions) => {
    return mutation({
      variables: {
        ...variables,
        capabilities: variables.capabilities.map(c => c.description)
      },
      ...options
    });
  };

  return { updateCurrentApplicant, ...result };
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
