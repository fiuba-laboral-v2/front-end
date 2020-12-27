import React, { FunctionComponent } from "react";
import { useApplicantByUuid } from "$hooks/queries";
import { useUpdateAdminTaskStatus, useCurrentUser } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApplicantDetailInfo } from "./component";
import { UPDATE_APPLICANT_APPROVAL_STATUS } from "$mutations";
import { APPLICANT } from "$typenames";
import { IApplicantDetailInfoContainerProps } from "../../../Home/Dashboard/TaskDetail/interfaces";

export const ApplicantDetailInfoContainer: FunctionComponent<IApplicantDetailInfoContainerProps> = ({
  refetchAdminTasks,
  selectedTaskUuid,
  onStatusUpdate,
  setLoadingStatusUpdate
}) => {
  const currentUser = useCurrentUser();
  const applicant = useApplicantByUuid(selectedTaskUuid);
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_APPLICANT_APPROVAL_STATUS,
    refetchAdminTasks,
    type: APPLICANT,
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
    if (!applicant) return;
    return !currentUser.data?.getCurrentUser?.admin?.canModerateApplicant(applicant);
  };

  return <ApplicantDetailInfo {...{ loading, applicant, setStatus, hideActions: hideActions() }} />;
};
