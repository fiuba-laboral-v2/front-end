import React, { FunctionComponent } from "react";
import { JobApplication } from "./component";

import { IJobApplicationProps } from "./interfaces";

export const JobApplicationContainer: FunctionComponent<IJobApplicationProps> = (
  {
    jobApplication
  }) => {
  return (
    <JobApplication
      jobApplication={jobApplication}
    />
  );
};
