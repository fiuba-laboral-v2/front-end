import React, { Fragment, FunctionComponent } from "react";
import { useApplicantByUuid } from "$hooks/queries";
import { useUpdateAdminTaskStatus } from "$hooks";
import { IApplicantAdminTask } from "$interfaces/AdminTask";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApplicantDetailInfo } from "./component";
import { UPDATE_APPLICANT_APPROVAL_STATUS } from "$mutations";
import { APPLICANT } from "$typenames";

export const ApplicantDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = ({
  refetchAdminTasks,
  selectedApplicant,
  onStatusUpdate
}) => {
  const response = useApplicantByUuid(selectedApplicant.uuid);
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_APPLICANT_APPROVAL_STATUS,
    refetchAdminTasks,
    type: APPLICANT,
    approvalStatusAttribute: "approvalStatus"
  });

  if (response.error || response.loading) return <Fragment />;

  const setStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: selectedApplicant.uuid,
      status: status,
      onStatusUpdate
    });
  };

  return (
    <ApplicantDetailInfo
      loading={loading}
      setStatus={setStatus}
      applicant={response.data.getApplicant}
    />
  );
};

interface ICompanyDetailInfoContainerProps {
  selectedApplicant: IApplicantAdminTask;
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
}
