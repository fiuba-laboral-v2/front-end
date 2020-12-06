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
  selectedTask,
  onStatusUpdate,
  setLoadingStatusUpdate
}) => {
  const jobApplication = useJobApplicationByUuid(selectedTask.uuid);
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_JOB_APPLICATION_APPROVAL_STATUS,
    refetchAdminTasks,
    type: JOB_APPLICATION,
    approvalStatusAttribute: "approvalStatus"
  });

  const setStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: selectedTask.uuid,
      status: status,
      onStatusUpdate,
      setLoadingStatusUpdate
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
