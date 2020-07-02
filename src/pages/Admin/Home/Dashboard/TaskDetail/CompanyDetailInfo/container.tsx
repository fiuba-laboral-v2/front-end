import React, { Fragment, FunctionComponent } from "react";
import { IApprovableCompany } from "$interfaces/Approvable";
import { useUpdateCompanyApprovalStatus } from "$hooks/mutations";
import { useTranslations } from "$hooks/queries/useTranslations";
import { IApprovalActionsTranslations } from "$interfaces/ApprovalActions";
import { CompanyDetailInfo } from "./component";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useSnackbar } from "notistack";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  { selectedCompany, onStatusUpdate }
) => {
  const updateCompanyApprovalStatus = useUpdateCompanyApprovalStatus();
  const translations = useTranslations<IApprovalActionsTranslations>("approvalActions");
  const { enqueueSnackbar } = useSnackbar();

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  const setStatus = async (status: ApprovalStatus) => {
    const result = await updateCompanyApprovalStatus({
      variables: {
        uuid: selectedCompany.uuid,
        approvalStatus: status
      }
    });

    if (result.error) return enqueueSnackbar(translations.data.error, { variant: "error" });

    enqueueSnackbar(translations.data.success, { variant: "success" });
    onStatusUpdate();
  };

  return <CompanyDetailInfo setStatus={setStatus}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: IApprovableCompany;
  onStatusUpdate: () => void;
}

export { CompanyDetailInfoContainer };
