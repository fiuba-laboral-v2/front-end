import { UPDATE_COMPANY_APPROVAL_STATUS } from "$mutations";
import { useMutation } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const useUpdateCompanyApprovalStatus = () =>
  useMutation<{ uuid: string, approvalStatus: ApprovalStatus }>(UPDATE_COMPANY_APPROVAL_STATUS);
