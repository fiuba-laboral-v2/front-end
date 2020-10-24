import React, { FunctionComponent } from "react";
import { ListPageContainer } from "../components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import { IAdmin } from "$interfaces/Admin";
import { useAdmins } from "$hooks/queries/useAdmins";

import styles from "./styles.module.scss";

export const Admins: FunctionComponent = () => {
  const response = useAdmins();
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
    />
  );
};
