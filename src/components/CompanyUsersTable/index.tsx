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
  visibleActions,
  title
}) => {
  const withoutActions = visibleActions.length === 0;

  return (
    <ListPageContainer
      title={title}
      titleTranslationPath="companyUsersListMainTitle"
      listHeader={<ListHeader withoutActions={withoutActions} />}
      listContentItem={(companyUser: ICompanyUser) => (
        <ListContentItem visibleActions={visibleActions} companyUser={companyUser} />
      )}
      listHeaderClassName={classNames(styles.tableDisplay, {
        [styles.withoutActions]: visibleActions.length === 0
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

export type VisibleAction = "deleteUser";

interface IContainer {
  title?: string;
  companyUsers?: ICompanyUser[];
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  visibleActions: VisibleAction[];
}
