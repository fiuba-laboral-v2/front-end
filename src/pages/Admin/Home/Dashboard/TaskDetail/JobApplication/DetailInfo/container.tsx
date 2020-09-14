import React, { Fragment, FunctionComponent } from "react";
import { useAdminApprovalStatusAttribute, useJobApplicationByUuid } from "$hooks/queries";
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
  const statusAttributeResponse = useAdminApprovalStatusAttribute();
  const approvalStatusAttribute = statusAttributeResponse.data.approvalStatusAttribute;
  const updateAdminTaskStatus = useUpdateAdminTaskStatus({
    documentNode: UPDATE_JOB_APPLICATION_APPROVAL_STATUS,
    refetchAdminTasks,
    type: JOB_APPLICATION,
    approvalStatusAttribute
  });

  if (jobApplicationResponse.error || jobApplicationResponse.loading) return <Fragment />;
  if (statusAttributeResponse.error || statusAttributeResponse.loading) return <Fragment />;

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
