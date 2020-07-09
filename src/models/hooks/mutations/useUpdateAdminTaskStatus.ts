import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { useShowError } from "$hooks/snackbar/useShowError";
import { useShowSuccess } from "$hooks/snackbar/useShowSuccess";
import { useUpdateAdminTaskStatusMutation } from "$hooks/mutations";
import { IApprovalActionsTranslations } from "$interfaces/ApprovalActions";
import { DocumentNode } from "graphql";
import { useTranslations } from "$hooks/queries";

const successMessage = (status: ApprovalStatus, translations: IApprovalActionsTranslations) => {
  if (status === ApprovalStatus.approved) return translations.approved;
  return translations.rejected;
};

const defaultTranslations = (): IApprovalActionsTranslations => ({
  approved: "Aprobado",
  rejected: "Rechazado"
});

const useGetTranslations = () => {
  const translationsResponse = useTranslations<IApprovalActionsTranslations>("approvalActions");
  if (translationsResponse.error || translationsResponse.loading) return defaultTranslations();
  return translationsResponse.data;
};

export const useUpdateAdminTaskStatus = (
  {
    documentNode,
    refetchAdminTasks
  }: IUseUpdateApprovable
) => {
  const translations = useGetTranslations();
  const showError = useShowError();
  const showSuccess = useShowSuccess();
  const updateAdminTaskStatus = useUpdateAdminTaskStatusMutation({
    documentNode,
    refetchAdminTasks
  });
  return async (
    {
      uuid,
      status,
      onStatusUpdate
    }: IUpdateApprovable
  ) => {
    const result = await updateAdminTaskStatus({
      variables: {
        uuid: uuid,
        approvalStatus: status
      }
    });

    if (result.error) return showError({ reloadPrompt: true });

    showSuccess({ message: successMessage(status, translations) });
    onStatusUpdate();
  };
};

interface IUseUpdateApprovable {
  documentNode: DocumentNode;
  refetchAdminTasks: () => void;
}

interface IUpdateApprovable {
  uuid: string;
  status: ApprovalStatus;
  onStatusUpdate: () => void;
}
