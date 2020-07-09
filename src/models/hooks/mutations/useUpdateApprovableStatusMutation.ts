import { useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { DocumentNode } from "graphql";

export const useUpdateApprovableStatusMutation = (
  {
    documentNode,
    refetchAdminTasks
  }: IUseUpdateApprovableStatus
) => {
  const mutation = useMutation<IUseUpdateApprovableStatusVariables>(documentNode);
  return async ({ variables }: IMutationVariables) => {
    const mutationFunctionResult = await mutation({ variables });
    refetchAdminTasks();
    return mutationFunctionResult;
  };
};

interface IUseUpdateApprovableStatus {
  documentNode: DocumentNode;
  refetchAdminTasks: () => void;
}

interface IMutationVariables {
  variables: IUseUpdateApprovableStatusVariables;
}

interface IUseUpdateApprovableStatusVariables {
  uuid: string;
  approvalStatus: ApprovalStatus;
}
