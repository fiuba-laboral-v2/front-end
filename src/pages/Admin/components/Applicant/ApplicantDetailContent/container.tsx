import React, { FunctionComponent } from "react";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { useApplicantByUuid } from "$hooks/queries";
import { LoadingSpinner } from "../../LoadingSpinner";
import { RoutesBuilder } from "$models/RoutesBuilder";

const ApplicantDetailContentContainer: FunctionComponent<IApplicantDetailContentContainerProps> = ({
  applicantUuid,
  scrollToTop,
  className
}) => {
  const applicant = useApplicantByUuid(applicantUuid);
  if (scrollToTop) scrollToTop();
  return (
    <>
      {!applicant && <LoadingSpinner />}
      <ApplicantDetail
        titleLink={applicant && RoutesBuilder.admin.applicantDetail(applicant.uuid)}
        {...{ applicant, className }}
      />
    </>
  );
};

interface IApplicantDetailContentContainerProps {
  applicantUuid: string;
  scrollToTop?: () => void;
  className?: string;
}

export { ApplicantDetailContentContainer };
