import { ApprovalStatus } from "../../interfaces/ApprovalStatus";
import { useShowError } from "./snackbar/useShowError";
import { useShowSuccess } from "./snackbar/useShowSuccess";
import { useUpdateApprovableEntityStatus } from "$hooks/mutations";
import { IApprovalActionsTranslations } from "$interfaces/ApprovalActions";
import { DocumentNode } from "graphql";
import { useTranslations } from "./queries";

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

export const useUpdateApprovable = (
  {
    documentNode,
    refetchApprovableEntities
  }: IUseUpdateApprovable
) => {
  const translations = useGetTranslations();
  const showError = useShowError();
  const showSuccess = useShowSuccess();
  const updateApprovableStatus = useUpdateApprovableEntityStatus({
    documentNode,
    refetchApprovableEntities
  });
  return async (
    {
      uuid,
      status,
      onStatusUpdate
    }: IUpdateApprovable
  ) => {
    const result = await updateApprovableStatus({
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
  refetchApprovableEntities: () => void;
}

interface IUpdateApprovable {
  uuid: string;
  status: ApprovalStatus;
  onStatusUpdate: () => void;
}
