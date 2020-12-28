import React, { FunctionComponent } from "react";
import { JobApplicationDetailContent } from "./component";
import { useJobApplicationByUuid } from "$hooks";
import { IContainerProps } from "./interfaces";
import { LoadingSpinner } from "../../LoadingSpinner";

export const JobApplicationDetailContentContainer: FunctionComponent<IContainerProps> = ({
  jobApplicationUuid,
  scrollToTop,
  className
}) => {
  const jobApplication = useJobApplicationByUuid(jobApplicationUuid);
  const applicant = jobApplication?.applicant;
  const offer = jobApplication?.offer;
  if (scrollToTop) scrollToTop();
  const loading = !applicant || !offer;
  return (
    <>
      {loading && <LoadingSpinner />}
      <JobApplicationDetailContent
        className={className}
        hidden={loading}
        applicant={applicant}
        offer={offer}
      />
    </>
  );
};
