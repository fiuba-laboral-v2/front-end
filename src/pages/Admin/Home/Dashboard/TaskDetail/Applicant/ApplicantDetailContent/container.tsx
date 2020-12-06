import React, { FunctionComponent } from "react";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { useApplicantByUuid } from "$hooks/queries";
import { LoadingSpinner } from "../../LoadingSpinner";

const ApplicantDetailContentContainer: FunctionComponent<IApplicantDetailContentContainerProps> = ({
  applicantUuid,
  scrollToTop,
  className
}) => {
  const applicant = useApplicantByUuid(applicantUuid);
  scrollToTop();
  return (
    <>
      {!applicant && <LoadingSpinner />}
      <ApplicantDetail {...{ applicant, className }} />
    </>
  );
};

interface IApplicantDetailContentContainerProps {
  applicantUuid: string;
  scrollToTop: () => void;
  className?: string;
}

export { ApplicantDetailContentContainer };
