import React, { FunctionComponent } from "react";
import { JobApplication } from "./JobApplication";
import { Window } from "$components/Window";
import { IJobApplication } from "$interfaces/JobApplication";

export const MyJobApplications: FunctionComponent<IMyJobApplications> = (
  {
    jobApplications
  }
) => (
  <Window>
    {jobApplications.map(jobApplication =>
      <JobApplication key={jobApplication.applicant.uuid} jobApplication={jobApplication} />
    )}
  </Window>
);

interface IMyJobApplications {
  jobApplications: IJobApplication[];
}
