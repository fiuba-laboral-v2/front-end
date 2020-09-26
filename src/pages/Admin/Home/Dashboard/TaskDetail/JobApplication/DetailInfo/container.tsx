import React, { Fragment, FunctionComponent } from "react";
import { useJobApplicationByUuid } from "$hooks/queries";
import { useUpdateAdminTaskStatus } from "$hooks";
import { IJobApplicationAdminTask } from "$interfaces/AdminTask";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { JobApplicationDetailInfo } from "./component";
import { UPDATE_JOB_APPLICATION_APPROVAL_STATUS } from "$mutations";
import { JOB_APPLICATION } from "$typenames";

export const JobApplicationDetailInfoContainer: FunctionComponent<IContainerProps> = (
  {
    refetchAdminTasks,
    selectedJobApplication,
    onStatusUpdate
  }
) => {
  const jobApplicationResponse = useJobApplicationByUuid(selectedJobApplication.uuid);
  const { updateAdminTaskStatus } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_JOB_APPLICATION_APPROVAL_STATUS,
    refetchAdminTasks,
    type: JOB_APPLICATION,
    approvalStatusAttribute: "approvalStatus"
  });

  if (jobApplicationResponse.error || jobApplicationResponse.loading) return <Fragment />;

  const setStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: selectedJobApplication.uuid,
      status: status,
      onStatusUpdate
    });
  };
  const jobApplication = jobApplicationResponse.data.getJobApplicationByUuid;

  return <JobApplicationDetailInfo
    setStatus={setStatus}
    currentStatus={jobApplication.approvalStatus}
    jobApplication={jobApplication}
  />;
};

interface IContainerProps {
  selectedJobApplication: IJobApplicationAdminTask;
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
}
