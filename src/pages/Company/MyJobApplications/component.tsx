import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { JobApplication } from "./JobApplication";
import { Window } from "$components/Window";
import { IJobApplication } from "$interfaces/JobApplication";

export const MyJobApplications: FunctionComponent<IMyJobApplications> = (
  {
    jobApplications
  }
) => (
  <Window>
    <List list={jobApplications}>
      {jobApplication =>
        <JobApplication key={jobApplication.applicant.uuid} jobApplication={jobApplication} />
      }
    </List>
  </Window>
);

interface IMyJobApplications {
  jobApplications: IJobApplication[];
}
