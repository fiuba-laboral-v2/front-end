import React, { Fragment, FunctionComponent } from "react";
import { IApprovableCompany } from "$interfaces/Approvable";
import { useUpdateCompanyApprovalStatus } from "$hooks/mutations";
import { useTranslations } from "$hooks/queries/useTranslations";
import { useShowError } from "$hooks/snackBar/useShowError";
import { useShowSuccess } from "$hooks/snackBar/useShowSuccess";
import { IApprovalActionsTranslations } from "$interfaces/ApprovalActions";
import { CompanyDetailInfo } from "./component";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  { selectedCompany, onStatusUpdate }
) => {
  const updateCompanyApprovalStatus = useUpdateCompanyApprovalStatus();
  const translations = useTranslations<IApprovalActionsTranslations>("approvalActions");
  const showError = useShowError();
  const showSuccess = useShowSuccess();

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  const successMessage = (status: ApprovalStatus) => {
    if (status === ApprovalStatus.approved) return translations.data.approved;
    return translations.data.rejected;
  };

  const setStatus = async (status: ApprovalStatus) => {
    const result = await updateCompanyApprovalStatus({
      variables: {
        uuid: selectedCompany.uuid,
        approvalStatus: status
      }
    });

    if (result.error) return showError({ reloadPrompt: true });

    showSuccess({ message: successMessage(status) });
    onStatusUpdate();
  };

  return <CompanyDetailInfo setStatus={setStatus}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: IApprovableCompany;
  onStatusUpdate: () => void;
}

export { CompanyDetailInfoContainer };
