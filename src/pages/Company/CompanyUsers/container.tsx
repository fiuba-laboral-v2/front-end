import React, { FunctionComponent } from "react";
import { ICompanyUser } from "$interfaces/CompanyUser";
import { useCompanyUsers } from "$hooks";

import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";

import styles from "./styles.module.scss";

export const CompanyUsers: FunctionComponent = () => {
  const response = useCompanyUsers();
  const companyUsers = response?.data?.getCompanyUsers.results;

  return (
    <ListPageContainer
      titleTranslationPath={"companyUsersListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(companyUser: ICompanyUser) => <ListContentItem companyUser={companyUser} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={companyUsers}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getCompanyUsers.shouldFetchMore}
      loading={response.loading}
    />
  );
};
