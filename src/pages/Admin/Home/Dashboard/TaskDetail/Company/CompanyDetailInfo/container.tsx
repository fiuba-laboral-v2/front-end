import React, { Fragment, FunctionComponent } from "react";
import { useUpdateApprovable } from "$hooks";
import { useCompanyByUuid } from "$hooks/queries";
import { IApprovableCompany } from "$interfaces/Approvable";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { CompanyDetailInfo } from "./component";
import { UPDATE_COMPANY_APPROVAL_STATUS } from "$mutations";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  {
    selectedCompany,
    onStatusUpdate,
    refetchApprovableEntities
  }
) => {
  const updateApprovable = useUpdateApprovable({
    documentNode: UPDATE_COMPANY_APPROVAL_STATUS,
    refetchApprovableEntities
  });
  const response = useCompanyByUuid({ uuid: selectedCompany.uuid, withUsers: true });
  if (response.error || response.loading) return <Fragment />;

  const setStatus = async (status: ApprovalStatus) => {
    await updateApprovable({
      uuid: selectedCompany.uuid,
      status: status,
      onStatusUpdate
    });
  };

  const company = response.data.getCompanyByUuid;

  return <CompanyDetailInfo setStatus={setStatus} company={company}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: IApprovableCompany;
  onStatusUpdate: () => void;
  refetchApprovableEntities: () => void;
}

export { CompanyDetailInfoContainer };
