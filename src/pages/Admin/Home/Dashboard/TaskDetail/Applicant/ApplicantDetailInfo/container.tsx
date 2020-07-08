import React, { Fragment, FunctionComponent } from "react";
import { useApplicantByUuid } from "$hooks/queries";
import { useUpdateApprovableStatus } from "$hooks";
import { IApprovableApplicant } from "$interfaces/Approvable";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApplicantDetailInfo } from "./component";
import { UPDATE_APPLICANT_APPROVAL_STATUS } from "$mutations";

export const ApplicantDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  {
    refetchApprovableEntities,
    selectedApplicant,
    onStatusUpdate
  }
) => {
  const response = useApplicantByUuid(selectedApplicant.uuid);
  const updateApprovable = useUpdateApprovableStatus({
    documentNode: UPDATE_APPLICANT_APPROVAL_STATUS,
    refetchApprovableEntities
  });

  if (response.error || response.loading) return <Fragment />;

  const setStatus = async (status: ApprovalStatus) => {
    await updateApprovable({
      uuid: selectedApplicant.uuid,
      status: status,
      onStatusUpdate
    });
  };

  return <ApplicantDetailInfo setStatus={setStatus} applicant={response.data.getApplicant}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedApplicant: IApprovableApplicant;
  onStatusUpdate: () => void;
  refetchApprovableEntities: () => void;
}
