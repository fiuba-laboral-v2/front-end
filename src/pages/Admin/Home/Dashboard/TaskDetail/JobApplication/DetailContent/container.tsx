import React, { FunctionComponent } from "react";
import { JobApplicationDetailContent } from "./component";
import { useApplicantByUuid, useCompanyOfferByUuid } from "$hooks/queries";
import { IContainerProps } from "./interfaces";
import { LoadingSpinner } from "../../../../../components/LoadingSpinner";

export const JobApplicationDetailContentContainer: FunctionComponent<IContainerProps> = ({
  applicantUuid,
  offerUuid,
  scrollToTop,
  className
}) => {
  const applicant = useApplicantByUuid(applicantUuid);
  const offer = useCompanyOfferByUuid(offerUuid).data?.getOfferByUuid;
  scrollToTop();
  const loading = !applicant || !offer;
  return (
    <>
      {loading && <LoadingSpinner />}
      <JobApplicationDetailContent hidden={loading} {...{ applicant, offer, className }} />
    </>
  );
};
