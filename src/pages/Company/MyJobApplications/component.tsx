import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { JobApplication } from "./JobApplication";
import { Window } from "$components/Window";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";

export const MyJobApplications: FunctionComponent<IMyJobApplications> = (
  {
    jobApplications
  }
) => (
  <Window>
    <List list={jobApplications}>
      {(ref, jobApplication) =>
        <JobApplication
          className={styles.card}
          key={`${jobApplication.offer.uuid} ${jobApplication.applicant.uuid}`}
          jobApplication={jobApplication}
        />
      }
    </List>
  </Window>
);

interface IMyJobApplications {
  jobApplications: IJobApplication[];
}
