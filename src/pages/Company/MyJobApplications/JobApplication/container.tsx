import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { JobApplication } from "./component";

import { IJobApplicationContainerProps } from "./interfaces";

export const JobApplicationContainer: FunctionComponent<IJobApplicationContainerProps> = (
  {
    jobApplication
  }) => {
  return (
    <JobApplication
      applicantDetailRoute={RoutesBuilder.applicant.detail(jobApplication.applicant.uuid)}
      jobApplication={jobApplication}
    />
  );
};
