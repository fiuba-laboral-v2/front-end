import React, { FunctionComponent } from "react";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { useApplicantByUuid } from "$hooks/queries";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IApprovableApplicant } from "$interfaces/Approvable";

const ApplicantDetailContentContainer: FunctionComponent<IApplicantDetailContentContainerProps> = (
  {
    selectedApplicant
  }
) => {
  const response = useApplicantByUuid(selectedApplicant.uuid);
  if (response.error || response.loading) return <LoadingSpinner/>;
  return <ApplicantDetail applicant={response.data.getApplicant}/>;
};

interface IApplicantDetailContentContainerProps {
  selectedApplicant: IApprovableApplicant;
}

export { ApplicantDetailContentContainer };
