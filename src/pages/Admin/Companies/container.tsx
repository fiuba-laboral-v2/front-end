import React, { FunctionComponent } from "react";
import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import { ICompany } from "$interfaces/Company";
import { useCompanies } from "$hooks/queries";

import styles from "./styles.module.scss";

export const Companies: FunctionComponent<IContainerProps> = () => {
  const response = useCompanies();
  const companies = response?.data?.getCompanies.results;

  return (
    <ListPageContainer
      titleTranslationPath={"adminCompanyListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(company: ICompany) => <ListContentItem company={company} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={companies}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getCompanies.shouldFetchMore}
      loading={response.loading}
    />
  );
};

interface IContainerProps {
  searchQuery: string;
}
