import { useCurrentUser } from "./useCurrentUser";
import { SeparateApprovalStatusAttributes } from "$interfaces/Secretary";

export const useAdminApprovalStatusAttribute = () => {
  const currentUserResponse = useCurrentUser();
  const admin = currentUserResponse.data.getCurrentUser?.admin;
  return admin?.isGraduados()
    ? SeparateApprovalStatusAttributes.graduados
    : SeparateApprovalStatusAttributes.extension;
};
