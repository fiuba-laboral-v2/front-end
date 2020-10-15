import React, { FunctionComponent } from "react";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { useApplicantByUuid } from "$hooks/queries";
import { LoadingSpinner } from "$components/LoadingSpinner";

const ApplicantDetailContentContainer: FunctionComponent<IApplicantDetailContentContainerProps> = ({
  applicantUuid,
  scrollToTop,
  className
}) => {
  const response = useApplicantByUuid(applicantUuid);
  if (response.error || response.loading) return <LoadingSpinner />;
  scrollToTop();
  return <ApplicantDetail applicant={response.data.getApplicant} className={className} />;
};

interface IApplicantDetailContentContainerProps {
  applicantUuid: string;
  scrollToTop: () => void;
  className?: string;
}

export { ApplicantDetailContentContainer };
