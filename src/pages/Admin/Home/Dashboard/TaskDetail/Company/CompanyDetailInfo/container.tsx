import React, { FunctionComponent } from "react";
import { useUpdateAdminTaskStatus } from "$hooks";
import { useCompanyByUuid } from "$hooks/queries";
import { COMPANY } from "$typenames";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IUser } from "$interfaces/User";
import { UPDATE_COMPANY_APPROVAL_STATUS } from "$mutations";
import { CompanyDetailInfo } from "./component";
import { ICompanyDetailInfoContainerProps } from "../../interfaces";

const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = ({
  selectedTask,
  onStatusUpdate,
  refetchAdminTasks,
  setLoadingStatusUpdate
}) => {
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_COMPANY_APPROVAL_STATUS,
    refetchAdminTasks,
    type: COMPANY,
    approvalStatusAttribute: "approvalStatus"
  });
  const response = useCompanyByUuid<IUser>({ uuid: selectedTask.uuid, withUsers: true });

  const setStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: selectedTask.uuid,
      status: status,
      onStatusUpdate,
      setLoadingStatusUpdate
    });
  };

  const company = response.data?.getCompanyByUuid;

  return <CompanyDetailInfo {...{ loading, setStatus, company }} />;
};

export { CompanyDetailInfoContainer };
