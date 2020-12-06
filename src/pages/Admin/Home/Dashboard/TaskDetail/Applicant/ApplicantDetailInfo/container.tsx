import React, { FunctionComponent } from "react";
import { useApplicantByUuid } from "$hooks/queries";
import { useUpdateAdminTaskStatus } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApplicantDetailInfo } from "./component";
import { UPDATE_APPLICANT_APPROVAL_STATUS } from "$mutations";
import { APPLICANT } from "$typenames";
import { IApplicantDetailInfoContainerProps } from "../../interfaces";

export const ApplicantDetailInfoContainer: FunctionComponent<IApplicantDetailInfoContainerProps> = ({
  refetchAdminTasks,
  selectedTask,
  onStatusUpdate,
  setLoadingStatusUpdate
}) => {
  const applicant = useApplicantByUuid(selectedTask.uuid);
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_APPLICANT_APPROVAL_STATUS,
    refetchAdminTasks,
    type: APPLICANT,
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

  return <ApplicantDetailInfo {...{ loading, applicant, setStatus }} />;
};
