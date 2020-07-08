import React, { Fragment, FunctionComponent } from "react";
import { useUpdateApprovableStatus } from "$hooks";
import { useCompanyByUuid } from "$hooks/queries";

import { IApprovableCompany } from "$interfaces/Approvable";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IUser } from "$interfaces/User";

import { UPDATE_COMPANY_APPROVAL_STATUS } from "$mutations";

import { CompanyDetailInfo } from "./component";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  {
    selectedCompany,
    onStatusUpdate,
    refetchApprovableEntities
  }
) => {
  const updateApprovable = useUpdateApprovableStatus({
    documentNode: UPDATE_COMPANY_APPROVAL_STATUS,
    refetchApprovableEntities
  });
  const response = useCompanyByUuid<IUser>({ uuid: selectedCompany.uuid, withUsers: true });
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
