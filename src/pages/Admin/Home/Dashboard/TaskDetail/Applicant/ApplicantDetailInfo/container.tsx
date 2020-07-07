import React, { FunctionComponent, Fragment } from "react";
import { useApplicantByUuid, useTranslations } from "$hooks/queries";
import { useUpdateApplicantApprovalStatus } from "$hooks/mutations";
import { IApprovableApplicant } from "$interfaces/Approvable";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApplicantDetailInfo } from "./component";
import { useShowError } from "$hooks/snackbar/useShowError";
import { useShowSuccess } from "$hooks/snackbar/useShowSuccess";
import { IApprovalActionsTranslations } from "$interfaces/ApprovalActions";

export const ApplicantDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  {
    refetchApprovableEntities,
    selectedApplicant,
    onStatusUpdate
  }
) => {
  const updateApplicantApprovalStatus = useUpdateApplicantApprovalStatus({
    refetchApprovableEntities
  });
  const response = useApplicantByUuid(selectedApplicant.uuid);
  const translations = useTranslations<IApprovalActionsTranslations>("approvalActions");
  const showError = useShowError();
  const showSuccess = useShowSuccess();

  if (response.error || response.loading) return <Fragment />;
  if (translations.error || translations.loading) return <Fragment />;

  const successMessage = (status: ApprovalStatus) => {
    if (status === ApprovalStatus.approved) return translations.data.approved;
    return translations.data.rejected;
  };

  const setStatus = async (status: ApprovalStatus) => {
    const result = await updateApplicantApprovalStatus({
      variables: {
        uuid: selectedApplicant.uuid,
        approvalStatus: status
      }
    });

    if (result.error) return showError({ reloadPrompt: true });

    showSuccess({ message: successMessage(status) });
    onStatusUpdate();
  };

  return <ApplicantDetailInfo setStatus={setStatus} applicant={response.data.getApplicant}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedApplicant: IApprovableApplicant;
  onStatusUpdate: () => void;
  refetchApprovableEntities: () => void;
}
