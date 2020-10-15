import React, { FunctionComponent } from "react";
import { ListPageContainer } from "../components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import { IApplicant } from "$interfaces/Applicant";
import { useApplicants } from "$hooks";
import styles from "./styles.module.scss";

export const Applicants: FunctionComponent = () => {
  const response = useApplicants();
  const applicants = response?.data?.getApplicants.results;

  return (
    <>
      {applicants && (
        <ListPageContainer
          titleTranslationPath={"adminApplicantListMainTitle"}
          listHeader={<ListHeader />}
          listContentItem={(applicant: IApplicant) => <ListContentItem applicant={applicant} />}
          listHeaderClassName={styles.tableDisplay}
          rowClassName={styles.tableDisplay}
          items={applicants}
          fetchMore={response.fetchMore}
          shouldFetchMore={response?.data.getApplicants.shouldFetchMore}
          loading={response.loading}
        />
      )}
    </>
  );
};
