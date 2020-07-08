import { useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { DocumentNode } from "graphql";

export const useUpdateApprovableEntityStatus = (
  {
    documentNode,
    refetchApprovableEntities
  }: IUseUpdateApprovableStatus
) => {
  const mutation = useMutation<IUseUpdateApprovableStatusVariables>(documentNode);
  return async ({ variables }: IMutationVariables) => {
    const mutationFunctionResult = await mutation({ variables });
    refetchApprovableEntities();
    return mutationFunctionResult;
  };
};

interface IUseUpdateApprovableStatus {
  documentNode: DocumentNode;
  refetchApprovableEntities: () => void;
}

interface IMutationVariables {
  variables: IUseUpdateApprovableStatusVariables;
}

interface IUseUpdateApprovableStatusVariables {
  uuid: string;
  approvalStatus: ApprovalStatus;
}