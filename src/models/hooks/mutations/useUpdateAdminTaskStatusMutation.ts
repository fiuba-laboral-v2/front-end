import { useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { DocumentNode } from "graphql";
import { MutationUpdaterFn } from "@apollo/client";

export const useUpdateAdminTaskStatusMutation = ({
  documentNode,
  refetchAdminTasks
}: IUseUpdateAdminTaskStatus) => {
  const { mutation, ...result } = useMutation<IUseUpdateAdminTaskStatusVariables>(documentNode);
  const updateAdminTaskStatus = async ({ variables, update }: IMutationVariables) => {
    const mutationFunctionResult = await mutation({ variables, update });
    await refetchAdminTasks();
    return mutationFunctionResult;
  };
  return { updateAdminTaskStatus, ...result };
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
  moderatorMessage?: string;
}
