import React, { FunctionComponent } from "react";
import { useJobApplicationByUuid, useLazyRejectedJobApplicationMessageByUuid } from "$hooks";
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
  const useRejectionMessage = useLazyRejectedJobApplicationMessageByUuid();
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
    const currentAdmin = currentUser.data?.getCurrentUser?.admin;
    if (!jobApplication) return;
    if (!currentAdmin) return;
    return !currentAdmin.canModerateJobApplication(jobApplication);
  };

  return (
    <JobApplicationDetailInfo
      useRejectionMessage={useRejectionMessage}
      hideActions={hideActions()}
      loading={loading || !currentUser || !jobApplication}
      setStatus={setStatus}
      currentStatus={jobApplication?.approvalStatus}
      jobApplication={jobApplication}
    />
  );
};
