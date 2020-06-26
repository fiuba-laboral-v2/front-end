import { UPDATE_COMPANY_APPROVAL_STATUS } from "$mutations";
import { IUsePendingEntities, useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { GET_PENDING_ENTITIES } from "$queries";

export const useUpdateCompanyApprovalStatus = () => {
  const mutation = useMutation<IUseUpdateCompanyApprovalStatus>(UPDATE_COMPANY_APPROVAL_STATUS);
  return ({ variables }: IMutationVariables) => {
    return mutation({
      variables,
      update: cache => {
        const response = cache.readQuery<IUsePendingEntities>({ query: GET_PENDING_ENTITIES });
        cache.writeQuery({
          query: GET_PENDING_ENTITIES,
          data: {
            getPendingEntities: response?.getPendingEntities.filter(entity =>
              entity.uuid !== variables.uuid
            )
          }
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
