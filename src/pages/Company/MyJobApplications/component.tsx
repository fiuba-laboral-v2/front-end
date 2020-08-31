import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { JobApplication } from "./JobApplication";
import { Window } from "$components/Window";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";

export const MyJobApplications: FunctionComponent<IMyJobApplications> = (
  {
    jobApplications,
    fetchMore,
    shouldFetchMore,
    loading
  }
) => (
  <Window>
    <List list={jobApplications}
          fetchMore={fetchMore}
          shouldFetchMore={shouldFetchMore}
          loading={loading}>
      {jobApplication =>
        <JobApplication
          className={styles.card}
          key={jobApplication.uuid}
          jobApplication={jobApplication}
        />
      }
    </List>
  </Window>
);

interface IMyJobApplications {
  jobApplications: IJobApplication[];
  fetchMore: () => void;
  shouldFetchMore: boolean;
  loading: boolean;
}
