import { UPDATE_COMPANY_APPROVAL_STATUS } from "$mutations";
import { IUsePendingEntities, useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { GET_PENDING_ENTITIES } from "$queries";
import { reject } from "lodash";

export const useUpdateCompanyApprovalStatus = () => {
  const mutation = useMutation<IUseUpdateCompanyApprovalStatus>(UPDATE_COMPANY_APPROVAL_STATUS);
  return ({ variables }: IMutationVariables) => {
    return mutation({
      variables,
      update: cache => {
        const response = cache.readQuery<IUsePendingEntities>({ query: GET_PENDING_ENTITIES });
        if (!response?.getPendingEntities) return;
        const pendingEntities = response.getPendingEntities;
        reject(pendingEntities, ["uuid", variables.uuid]);
        cache.writeQuery({
          query: GET_PENDING_ENTITIES,
          data: { getPendingEntities: reject(pendingEntities, ["uuid", variables.uuid]) }
        });
      }
    });
  };
};

interface IMutationVariables {
  variables: IUseUpdateCompanyApprovalStatus;
}

interface IUseUpdateCompanyApprovalStatus {
  uuid: string;
  approvalStatus: ApprovalStatus;
}
