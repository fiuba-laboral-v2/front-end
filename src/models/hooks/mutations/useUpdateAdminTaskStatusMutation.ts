import { useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { DocumentNode } from "graphql";

export const useUpdateAdminTaskStatusMutation = (
  {
    documentNode,
    refetchAdminTasks
  }: IUseUpdateAdminTaskStatus
) => {
  const mutation = useMutation<IUseUpdateAdminTaskStatusVariables>(documentNode);
  return async ({ variables }: IMutationVariables) => {
    const mutationFunctionResult = await mutation({ variables });
    refetchAdminTasks();
    return mutationFunctionResult;
  };
};

interface IUseUpdateAdminTaskStatus {
  documentNode: DocumentNode;
  refetchAdminTasks: () => void;
}

interface IMutationVariables {
  variables: IUseUpdateAdminTaskStatusVariables;
}

interface IUseUpdateAdminTaskStatusVariables {
  uuid: string;
  approvalStatus: ApprovalStatus;
}
