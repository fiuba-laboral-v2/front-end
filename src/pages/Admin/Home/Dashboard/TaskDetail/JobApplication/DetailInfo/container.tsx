import React, { FunctionComponent } from "react";
import { useJobApplicationByUuid } from "$hooks/queries";
import { useUpdateAdminTaskStatus } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { JobApplicationDetailInfo } from "./component";
import { UPDATE_JOB_APPLICATION_APPROVAL_STATUS } from "$mutations";
import { JOB_APPLICATION } from "$typenames";
import { IJobApplicationDetailInfoContainerProps } from "../../interfaces";

export const JobApplicationDetailInfoContainer: FunctionComponent<IJobApplicationDetailInfoContainerProps> = ({
  refetchAdminTasks,
  selectedTaskUuid,
  onStatusUpdate,
  setLoadingStatusUpdate
}) => {
  const jobApplication = useJobApplicationByUuid(selectedTaskUuid);
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_JOB_APPLICATION_APPROVAL_STATUS,
    refetchAdminTasks,
    type: JOB_APPLICATION,
    approvalStatusAttribute: "approvalStatus"
  });

  const setStatus = async (status: ApprovalStatus, moderatorMessage?: string) => {
    await updateAdminTaskStatus({
      uuid: selectedTaskUuid,
      status: status,
      onStatusUpdate,
      setLoadingStatusUpdate,
      moderatorMessage
    });
  };

  return (
    <JobApplicationDetailInfo
      loading={loading}
      setStatus={setStatus}
      currentStatus={jobApplication?.approvalStatus}
      jobApplication={jobApplication}
    />
  );
};
