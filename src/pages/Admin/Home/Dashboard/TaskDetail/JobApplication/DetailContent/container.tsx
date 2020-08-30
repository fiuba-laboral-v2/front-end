import React, { FunctionComponent } from "react";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { JobApplicationDetailContent } from "./component";
import { useApplicantByUuid, useCompanyOfferByUuid } from "$hooks/queries";
import { IContainerProps } from "./interfaces";

export const JobApplicationDetailContentContainer: FunctionComponent<IContainerProps> = (
  {
    applicantUuid,
    offerUuid,
    scrollToTop,
    className
  }
) => {
  const applicantResponse = useApplicantByUuid(applicantUuid);
  const offerResponse = useCompanyOfferByUuid(offerUuid);

  if (applicantResponse.error || applicantResponse.loading) return <LoadingSpinner/>;
  if (offerResponse.error || offerResponse.loading) return <LoadingSpinner/>;
  scrollToTop();

  return <JobApplicationDetailContent
    applicant={applicantResponse.data.getApplicant}
    offer={offerResponse.data.getOfferByUuid}
    className={className}
  />;
};
