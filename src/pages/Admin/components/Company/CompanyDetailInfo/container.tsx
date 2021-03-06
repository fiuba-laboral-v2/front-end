import React, { FunctionComponent } from "react";
import { useUpdateAdminTaskStatus } from "$hooks";
import { useCompanyByUuid, useLazyRejectedCompanyProfileMessageByUuid } from "$hooks";
import { COMPANY } from "$typenames";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IUser } from "$interfaces/User";
import { UPDATE_COMPANY_APPROVAL_STATUS } from "$mutations";
import { CompanyDetailInfo } from "./component";
import { ICompanyDetailInfoContainerProps } from "../../../Home/Dashboard/TaskDetail/interfaces";

export const CompanyDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = ({
  selectedTaskUuid,
  onStatusUpdate,
  refetchAdminTasks,
  setLoadingStatusUpdate
}) => {
  const useRejectionMessage = useLazyRejectedCompanyProfileMessageByUuid();
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_COMPANY_APPROVAL_STATUS,
    refetchAdminTasks,
    type: COMPANY,
    approvalStatusAttribute: "approvalStatus"
  });
  const company = useCompanyByUuid<IUser>({ uuid: selectedTaskUuid, withUsers: true });

  const setStatus = async (status: ApprovalStatus, moderatorMessage?: string) => {
    await updateAdminTaskStatus({
      uuid: selectedTaskUuid,
      status,
      onStatusUpdate,
      setLoadingStatusUpdate,
      moderatorMessage
    });
  };

  return (
    <CompanyDetailInfo
      useRejectionMessage={useRejectionMessage}
      loading={loading}
      setStatus={setStatus}
      company={company}
    />
  );
};
