import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { ICompanyUser } from "$interfaces/CompanyUser";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useCompanyUsers, useTranslations } from "$hooks";

import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { Button } from "$components/Button";
import { ListContentItem } from "./ListContentItem";

import styles from "./styles.module.scss";

export const CompanyUsers: FunctionComponent = () => {
  const history = useHistory();
  const response = useCompanyUsers();
  const translations = useTranslations<ITranslation>("companyUsers");
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
    >
      <Button onClick={() => history.push(RoutesBuilder.company.createUser())} kind="primary">
        {translations?.addAdminButtonLabel || ""}
      </Button>
    </ListPageContainer>
  );
};

interface ITranslation {
  addAdminButtonLabel: string;
}
