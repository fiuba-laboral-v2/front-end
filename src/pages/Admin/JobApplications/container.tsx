import React, { FunctionComponent } from "react";
import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import { IJobApplication } from "$interfaces/JobApplication";
import { useJobApplications } from "$hooks/queries";

import styles from "./styles.module.scss";

export const JobApplications: FunctionComponent = () => {
  const response = useJobApplications();
  const jobApplications = response?.data?.getJobApplications.results;

  return (
    <ListPageContainer
      titleTranslationPath={"adminJobApplicationsListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(jobApplication: IJobApplication) => (
        <ListContentItem jobApplication={jobApplication} />
      )}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={jobApplications}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getJobApplications.shouldFetchMore}
      loading={response.loading}
    />
  );
};
