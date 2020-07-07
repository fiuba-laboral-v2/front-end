import React, { Fragment, FunctionComponent } from "react";

import { useUpdateCompanyApprovalStatus } from "$hooks/mutations";
import { useCompanyByUuid } from "$hooks/queries";

import { IApprovableCompany } from "$interfaces/Approvable";
import { useTranslations } from "$hooks/queries/useTranslations";
import { useShowError } from "$hooks/snackbar/useShowError";
import { useShowSuccess } from "$hooks/snackbar/useShowSuccess";
import { IApprovalActionsTranslations } from "$interfaces/ApprovalActions";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

import { CompanyDetailInfo } from "./component";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  { selectedCompany, onStatusUpdate, refetchApprovableEntities }
) => {
  const updateCompanyApprovalStatus = useUpdateCompanyApprovalStatus({ refetchApprovableEntities });
  const response = useCompanyByUuid(selectedCompany.uuid);
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

  if (response.error || response.loading) return <Fragment />;

  const company = response.data.getCompanyByUuid;
  const [user] = company.users;

  return <CompanyDetailInfo setStatus={setStatus} company={company} user={user}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: IApprovableCompany;
  onStatusUpdate: () => void;
  refetchApprovableEntities: () => void;
}

export { CompanyDetailInfoContainer };
