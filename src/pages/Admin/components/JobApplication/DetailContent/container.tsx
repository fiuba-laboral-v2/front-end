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
  if (scrollToTop) scrollToTop();
  const loading = !jobApplication;
  return (
    <>
      {loading && <LoadingSpinner />}
      <JobApplicationDetailContent
        className={className}
        jobApplication={jobApplication}
        hidden={loading}
      />
    </>
  );
};
