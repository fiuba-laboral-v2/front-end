import React, { FunctionComponent } from "react";
import classNames from "classnames";
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
  children,
  withoutActions,
  title
}) => {
  return (
    <ListPageContainer
      title={title}
      titleTranslationPath="companyUsersListMainTitle"
      listHeader={<ListHeader withoutActions={withoutActions} />}
      listContentItem={(companyUser: ICompanyUser) => (
        <ListContentItem withoutActions={withoutActions} companyUser={companyUser} />
      )}
      listHeaderClassName={classNames(styles.tableDisplay, {
        [styles.withoutActions]: withoutActions
      })}
      rowClassName={classNames(styles.tableDisplay, { [styles.withoutActions]: withoutActions })}
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
  title?: string;
  companyUsers?: ICompanyUser[];
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  withoutActions?: boolean;
}
