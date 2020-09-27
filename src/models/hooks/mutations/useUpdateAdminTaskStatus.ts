import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { useShowError } from "$hooks/snackbar/useShowError";
import { useShowSuccess } from "$hooks/snackbar/useShowSuccess";
import { useUpdateAdminTaskStatusMutation } from "$hooks/mutations";
import { IApprovalActionsTranslations } from "$interfaces/ApprovalActions";
import { DocumentNode } from "graphql";
import { useTranslations } from "$hooks/queries";
import { TAdminTaskType } from "$interfaces/AdminTask";

const successMessage = (status: ApprovalStatus, translations: IApprovalActionsTranslations) => {
  if (status === ApprovalStatus.approved) return translations.approved;
  if (status === ApprovalStatus.rejected) return translations.rejected;
  return translations.pending;
};

const defaultTranslations = (): IApprovalActionsTranslations => ({
  approved: "Aprobado",
  rejected: "Rechazado",
  pending: "Pendiente"
});

const useGetTranslations = () => {
  const translationsResponse = useTranslations<IApprovalActionsTranslations>("approvalActions");
  if (!translationsResponse) return defaultTranslations();
  return translationsResponse;
};

export const useUpdateAdminTaskStatus = (
  {
    type,
    documentNode,
    refetchAdminTasks,
    approvalStatusAttribute
  }: IUseUpdateAdminTask
) => {
  const translations = useGetTranslations();
  const showError = useShowError();
  const showSuccess = useShowSuccess();
  const { updateAdminTaskStatus: mutation, ...result } = useUpdateAdminTaskStatusMutation({
    documentNode,
    refetchAdminTasks
  });
  const updateAdminTaskStatus = async (
    {
      uuid,
      status,
      onStatusUpdate
    }: IUpdateAdminTask
  ) => {
    const response = await mutation({
      variables: {
        uuid: uuid,
        approvalStatus: status
      },
      update: cache => cache.modify({
        id: `${type}:${uuid}`,
        fields: {
          [approvalStatusAttribute]: () => status
        }
      })
    });

    if (response.error) return showError({ reloadPrompt: true });

    showSuccess({ message: successMessage(status, translations) });
    onStatusUpdate();
  };

  return { updateAdminTaskStatus, ...result };
};

interface IUseUpdateAdminTask {
  type: TAdminTaskType;
  documentNode: DocumentNode;
  approvalStatusAttribute: "graduadosApprovalStatus" | "extensionApprovalStatus" | "approvalStatus";
  refetchAdminTasks: () => void;
}

interface IUpdateAdminTask {
  uuid: string;
  status: ApprovalStatus;
  onStatusUpdate: () => void;
}
