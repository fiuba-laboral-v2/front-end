import React, { FunctionComponent, ReactNode } from "react";
import { List } from "$components/List";
import { JobApplication } from "./JobApplication";
import { Window } from "$components/Window";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";
import { Headline } from "$components/Headline";

export const MyJobApplications: FunctionComponent<IMyJobApplications> = ({
  jobApplications,
  fetchMore,
  shouldFetchMore,
  loading,
  emptyListComponent,
  title
}) => (
  <Window>
    {title && (
      <Headline color="dark" className={styles.title}>
        {title}
      </Headline>
    )}
    <List
      list={jobApplications}
      fetchMoreClassName={styles.fetchMore}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
      loading={loading}
      emptyListComponent={emptyListComponent}
    >
      {jobApplication => (
        <JobApplication
          className={styles.card}
          key={jobApplication.uuid}
          jobApplication={jobApplication}
        />
      )}
    </List>
  </Window>
);

interface IMyJobApplications {
  jobApplications: IJobApplication[];
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  title?: string;
  emptyListComponent: ReactNode;
}
