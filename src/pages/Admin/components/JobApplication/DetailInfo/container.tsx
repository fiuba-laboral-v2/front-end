import React, { FunctionComponent } from "react";
import { useJobApplicationByUuid } from "$hooks/queries";
import { useUpdateAdminTaskStatus, useCurrentUser } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { JobApplicationDetailInfo } from "./component";
import { UPDATE_JOB_APPLICATION_APPROVAL_STATUS } from "$mutations";
import { JOB_APPLICATION } from "$typenames";
import { IJobApplicationDetailInfoContainerProps } from "../../../Home/Dashboard/TaskDetail/interfaces";

export const JobApplicationDetailInfoContainer: FunctionComponent<IJobApplicationDetailInfoContainerProps> = ({
  refetchAdminTasks,
  selectedTaskUuid,
  onStatusUpdate,
  setLoadingStatusUpdate
}) => {
  const currentUser = useCurrentUser();
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
      status,
      onStatusUpdate,
      setLoadingStatusUpdate,
      moderatorMessage
    });
  };

  const hideActions = () => {
    if (!jobApplication) return;
    return !currentUser.data?.getCurrentUser?.admin?.canModerateApplicant(jobApplication.applicant);
  };

  return (
    <JobApplicationDetailInfo
      hideActions={hideActions()}
      loading={loading || !currentUser || !jobApplication}
      setStatus={setStatus}
      currentStatus={jobApplication?.approvalStatus}
      jobApplication={jobApplication}
    />
  );
};
