import React, { FunctionComponent, Fragment } from "react";
import { useApplicantByUuid } from "$hooks/queries";
import { IApprovableApplicant } from "$interfaces/Approvable";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApplicantDetailInfo } from "./component";

export const ApplicantDetailInfoContainer: FunctionComponent<ICompanyDetailInfoContainerProps> = (
  {
    selectedApplicant,
    onStatusUpdate
  }
) => {
  const response = useApplicantByUuid(selectedApplicant.uuid);
  if (response.error || response.loading) return <Fragment />;

  const setStatus = async (status: ApprovalStatus) => {
    alert(`status: ${status} Todavia falta en el back la mutation`);
    onStatusUpdate();
  };

  return <ApplicantDetailInfo setStatus={setStatus} applicant={response.data.getApplicant}/>;
};

interface ICompanyDetailInfoContainerProps {
  selectedApplicant: IApprovableApplicant;
  onStatusUpdate: () => void;
}
