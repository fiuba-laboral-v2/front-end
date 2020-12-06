import React, { FunctionComponent } from "react";
import { JobApplicationDetailContent } from "./component";
import { useApplicantByUuid, useCompanyOfferByUuid } from "$hooks/queries";
import { IContainerProps } from "./interfaces";
import { LoadingSpinner } from "../../LoadingSpinner";

export const JobApplicationDetailContentContainer: FunctionComponent<IContainerProps> = ({
  applicantUuid,
  offerUuid,
  scrollToTop,
  className
}) => {
  const applicant = useApplicantByUuid(applicantUuid);
  const offer = useCompanyOfferByUuid(offerUuid);
  scrollToTop();
  const loading = !applicant || !offer;
  return (
    <>
      {loading && <LoadingSpinner />}
      <JobApplicationDetailContent
        {...{ applicant, offer: offer.data?.getOfferByUuid, className }}
      />
    </>
  );
};
