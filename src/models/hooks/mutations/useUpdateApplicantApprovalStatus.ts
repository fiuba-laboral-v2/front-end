import { UPDATE_APPLICANT_APPROVAL_STATUS } from "$mutations";
import { useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const useUpdateApplicantApprovalStatus = (
  {
    refetchApprovableEntities
  }: { refetchApprovableEntities: () => void }
) => {
  const mutation = useMutation<IUseUpdateApplicantApprovalStatus>(UPDATE_APPLICANT_APPROVAL_STATUS);
  return async ({ variables }: IMutationVariables) => {
    const mutationFunctionResult = await mutation({ variables });
    refetchApprovableEntities();
    return mutationFunctionResult;
  };
};

interface IMutationVariables {
  variables: IUseUpdateApplicantApprovalStatus;
}

interface IUseUpdateApplicantApprovalStatus {
  uuid: string;
  approvalStatus: ApprovalStatus;
}
