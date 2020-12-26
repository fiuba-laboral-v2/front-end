import React, { FunctionComponent } from "react";
import { ICompanyUser } from "$interfaces/CompanyUser";

import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";

import styles from "./styles.module.scss";

export const CompanyUsersTable: FunctionComponent<IContainer> = ({
  companyUsers,
  shouldFetchMore,
  loading,
  fetchMore,
  children
}) => {
  return (
    <ListPageContainer
      titleTranslationPath={"companyUsersListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(companyUser: ICompanyUser) => <ListContentItem companyUser={companyUser} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={companyUsers}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
      loading={loading}
    >
      {children}
    </ListPageContainer>
  );
};

interface IContainer {
  companyUsers?: ICompanyUser[];
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
}
