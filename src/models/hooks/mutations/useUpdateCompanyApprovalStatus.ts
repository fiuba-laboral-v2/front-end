import { UPDATE_COMPANY_APPROVAL_STATUS } from "$mutations";
import { useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const useUpdateCompanyApprovalStatus = (
  { refetchApprovableEntities }: { refetchApprovableEntities: () => void }
) => {
  const mutation = useMutation<IUseUpdateCompanyApprovalStatus>(UPDATE_COMPANY_APPROVAL_STATUS);
  return async ({ variables }: IMutationVariables) => {
    const mutationFunctionResult = await mutation({ variables });
    refetchApprovableEntities();
    return mutationFunctionResult;
  };
};

interface IMutationVariables {
  variables: IUseUpdateCompanyApprovalStatus;
}

interface IUseUpdateCompanyApprovalStatus {
  uuid: string;
  approvalStatus: ApprovalStatus;
}
