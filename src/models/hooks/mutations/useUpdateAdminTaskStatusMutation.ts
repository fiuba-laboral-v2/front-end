import { useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { DocumentNode } from "graphql";
import { MutationUpdaterFn } from "apollo-client";

export const useUpdateAdminTaskStatusMutation = (
  {
    documentNode,
    refetchAdminTasks
  }: IUseUpdateAdminTaskStatus
) => {
  const mutation = useMutation<IUseUpdateAdminTaskStatusVariables>(documentNode);
  return async ({ variables, update }: IMutationVariables) => {
    const mutationFunctionResult = await mutation({ variables, update });
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
  update: MutationUpdaterFn;
}

interface IUseUpdateAdminTaskStatusVariables {
  uuid: string;
  approvalStatus: ApprovalStatus;
}
