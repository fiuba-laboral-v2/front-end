import React, { FunctionComponent } from "react";
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
  const applicant = useApplicantByUuid(selectedApplicant.uuid).data?.getApplicant;
  const { updateAdminTaskStatus, loading } = useUpdateAdminTaskStatus({
    documentNode: UPDATE_APPLICANT_APPROVAL_STATUS,
    refetchAdminTasks,
    type: APPLICANT,
    approvalStatusAttribute: "approvalStatus"
  });

  const setStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: selectedApplicant.uuid,
      status: status,
      onStatusUpdate
    });
  };

  return <ApplicantDetailInfo {...{ loading, applicant, setStatus }} />;
};

interface ICompanyDetailInfoContainerProps {
  selectedApplicant: IApplicantAdminTask;
  onStatusUpdate: () => void;
  refetchAdminTasks: () => void;
}
