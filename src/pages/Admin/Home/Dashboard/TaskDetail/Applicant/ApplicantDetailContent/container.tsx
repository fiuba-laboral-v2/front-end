import React, { FunctionComponent } from "react";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { useApplicantByUuid } from "$hooks/queries";
import { LoadingSpinner } from "$components/LoadingSpinner";

const ApplicantDetailContentContainer: FunctionComponent<IApplicantDetailContentContainerProps> = (
  {
    applicantUuid,
    scrollToTop
  }
) => {
  const response = useApplicantByUuid(applicantUuid);
  if (response.error || response.loading) return <LoadingSpinner/>;
  scrollToTop();
  return <ApplicantDetail applicant={response.data.getApplicant}/>;
};

interface IApplicantDetailContentContainerProps {
  applicantUuid: string;
  scrollToTop: () => void;
}

export { ApplicantDetailContentContainer };
