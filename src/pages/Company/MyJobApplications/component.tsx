import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { JobApplication } from "./JobApplication";
import { Window } from "$components/Window";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";
import shortId from "shortid";

export const MyJobApplications: FunctionComponent<IMyJobApplications> = (
  {
    jobApplications
  }
) => (
  <Window>
    <List list={jobApplications}>
      {jobApplication =>
        <JobApplication
          className={styles.card}
          key={shortId.generate()}
          jobApplication={jobApplication}
        />
      }
    </List>
  </Window>
);

interface IMyJobApplications {
  jobApplications: IJobApplication[];
}
