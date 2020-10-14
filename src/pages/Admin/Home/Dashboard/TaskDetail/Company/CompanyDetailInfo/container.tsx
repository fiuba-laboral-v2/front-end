import React, { Fragment, FunctionComponent } from "react";
import { useUpdateAdminTaskStatus } from "$hooks";
import { useCompanyByUuid } from "$hooks/queries";
import { COMPANY } from "$typenames";

import { ICompanyAdminTask } from "$interfaces/AdminTask";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IUser } from "$interfaces/User";

import { UPDATE_COMPANY_APPROVAL_STATUS } from "$mutations";

import { CompanyDetailInfo } from "./component";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = ({
  selectedCompany,
  onStatusUpdate,
  refetchAdminTasks
}) => {
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_COMPANY_APPROVAL_STATUS,
    refetchAdminTasks,
    type: COMPANY,
    approvalStatusAttribute: "approvalStatus"
  });
  const response = useCompanyByUuid<IUser>({ uuid: selectedCompany.uuid, withUsers: true });
  if (response.error || response.loading) return <Fragment />;

  const setStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: selectedCompany.uuid,
      status: status,
      onStatusUpdate
    });
  };

  const company = response.data.getCompanyByUuid;

  return <CompanyDetailInfo loading={loading} setStatus={setStatus} company={company} />;
};

interface ICompanyDetailInfoContainerProps {
  selectedCompany: ICompanyAdminTask;
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
}

export { CompanyDetailInfoContainer };
