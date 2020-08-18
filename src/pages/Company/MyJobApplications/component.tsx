import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { JobApplication } from "./JobApplication";
import { Window } from "$components/Window";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";
import { OptionalFetchResult } from "$interfaces/Pagination";
import { IUseMyJobApplications } from "$hooks/queries/useMyJobApplications";

export const MyJobApplications: FunctionComponent<IMyJobApplications> = (
  {
    jobApplications,
    fetchMore,
    shouldFetchMore
  }
) => (
  <Window>
    <List list={jobApplications} fetchMore={fetchMore} shouldFetchMore={shouldFetchMore}>
      {(ref, jobApplication) =>
        <JobApplication
          _ref={ref}
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
  fetchMore: () => OptionalFetchResult<IUseMyJobApplications>;
  shouldFetchMore: boolean;
}
