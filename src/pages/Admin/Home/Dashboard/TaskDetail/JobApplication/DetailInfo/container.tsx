import React, { FunctionComponent } from "react";
import { useJobApplicationByUuid } from "$hooks/queries";
import { useUpdateAdminTaskStatus } from "$hooks";
import { IJobApplicationAdminTask } from "$interfaces/AdminTask";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { JobApplicationDetailInfo } from "./component";
import { UPDATE_JOB_APPLICATION_APPROVAL_STATUS } from "$mutations";
import { JOB_APPLICATION } from "$typenames";

export const JobApplicationDetailInfoContainer: FunctionComponent<IContainerProps> = ({
  refetchAdminTasks,
  selectedJobApplication,
  onStatusUpdate
}) => {
  const jobApplication = useJobApplicationByUuid(selectedJobApplication.uuid).data
    ?.getJobApplicationByUuid;
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_JOB_APPLICATION_APPROVAL_STATUS,
    refetchAdminTasks,
    type: JOB_APPLICATION,
    approvalStatusAttribute: "approvalStatus"
  });

  const setStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: selectedJobApplication.uuid,
      status: status,
      onStatusUpdate
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

interface IContainerProps {
  selectedJobApplication: IJobApplicationAdminTask;
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
}
