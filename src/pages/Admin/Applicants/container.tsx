import React, { FunctionComponent } from "react";
import { IApplicant } from "$interfaces/Applicant";
import { useApplicants } from "$hooks";

import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";

import styles from "./styles.module.scss";

export const Applicants: FunctionComponent<IContainerProps> = () => {
  const response = useApplicants();
  const applicants = response?.data?.getApplicants.results;

  return (
    <ListPageContainer
      titleTranslationPath={"adminApplicantListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(applicant: IApplicant) => <ListContentItem applicant={applicant} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={applicants}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getApplicants.shouldFetchMore}
      loading={response.loading}
    />
  );
};

interface IContainerProps {
  searchQuery: string;
}
