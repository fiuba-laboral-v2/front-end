import React, { FunctionComponent } from "react";
import { IAdmin } from "$interfaces/Admin";
import { useAdmins, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import { Button } from "$components/Button";
import styles from "./styles.module.scss";

export const Admins: FunctionComponent = () => {
  const response = useAdmins();
  const translations = useTranslations<ITranslations>("admins");
  const admins = response?.data?.getAdmins.results;

  return (
    <ListPageContainer
      titleTranslationPath={"adminAdminListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(admin: IAdmin) => <ListContentItem admin={admin} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={admins}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getAdmins.shouldFetchMore}
      loading={response.loading}
    >
      <Button link={RoutesBuilder.admin.signUp()} kind="primary">
        {translations?.addAdminButtonLabel || ""}
      </Button>
    </ListPageContainer>
  );
};

interface ITranslations {
  addAdminButtonLabel: string;
}
